/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "EheNd2FiS8GgkXzPBcj1bKeu78EKx17TaW6Re96HecJhnbuVPVdWGkQupSwTR2srLEcEpkqMK6AHKo3Xffx9ux6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpigAhhMu3GHfnKRcV7c5UYyL3439qJcdiEb8k6d5siv19TAYfALs2L17dJXPM7ea4JHWo2u83bEEsAyCDjEhZG",
  "key1": "24ip8T2wznM5VYTzuS5uvheo8smtgF7hDTeuZ5yhazVYXW5LNR2Xy6EzZ9phxb87ATVLJ8Mia7nPJaNtMQSYbDdc",
  "key2": "2x3LyH2zHW9LdfVT7SaayTKA3T3MzfEyXeJY2ZRzdcpuh2jxi1d9BJSuFmzEtFeKrZDxShiZax1rwWKmjGVeZNrZ",
  "key3": "4NJzKui23kmHGQy5CxsL1qhi4ertpuXP5BdaQq8RDbBvUSdgrZ7bUA879JujGTECNEtFS5DHSVPPSf4QByvzpSmq",
  "key4": "3ta31Dvw1yn4ncapsLpSvJrkBx5x8ZVaLqX62tY55pxYiLf88eRRqkL9fQLKMBsRMMchbPg5kszGrFCY4wvJseoj",
  "key5": "5FFGFyAhMqdoCf2UDYQvPHRvbtrAMDWaokBnRYzGBJxpchsnS4YSEwh2Xm8rNuob1fHxgrxoRjrsECpnbP8fiRfK",
  "key6": "5t7AbUsNqRBuEwwWPKmNkjJbKSphVvg82QcP6H3VGZGgycUjqm65UXWey1GHiZNUTQP73RvQPpi7HEbcZzApkU7U",
  "key7": "5NDHQo593CzKc1j3D2gFJHm4n5qk7Hya8yq6YnDEeeFDkzhCXcMkPU35ss4L7Wcqt22YLHjbE8f1yzmXJCQDBkNM",
  "key8": "4KnP2J4hJaaGB5gNvptNuiVfJL7AzroWRc1RDisXfsA9qRqeKVeKG5cnEKaArsYosCYgSe3Y7WqZpNQ8qqGLZnmA",
  "key9": "2dz4krvwGLA4suesPDnKZaUhFU4jhXHK5mP4ujs92uXeHJv8nkoFRDzXMfMVagq4Qzd7U4N8csCY6CunnmVrDW1K",
  "key10": "4z9fDugfMXYjeTUWftgDeykbJSTCyN2jJscpCCeYFuDDw7DL1JXFuMMd6v27d4gpwDwBuwJNHpqSfHZc9oqmxUXx",
  "key11": "2y3mx5uiekRLTg68t3csRDfQEDbcXqj75g32CFQjAbCjrSy7ktEiFXhNDEmj59cZ4Gvbme9ktmeMPTZxq2bNDDUb",
  "key12": "vmRdQwTdVt9BdJGARd98Ni3S1662dBuxtFqPMJd19basM4gkFkx6rcVjD96biWLPX1qqexXzVTcn7WYmT6wnH7z",
  "key13": "5ekF7N5QemDYwubk6CE7ntH7kS32NY1GBDnBFRYSKGzpVN67rcShm1MVX5F2J9R2jmvzrNZHTC6W31MNT95Cqvqp",
  "key14": "2pcwUpH9DEsvpzYAobZsn4o8WWajd7vYUm5eyqApW9WSVDitv1bQZi814WfKCFd7bPa7s8beZWvgmVaWj92GpW2w",
  "key15": "4gBH4VZQ6sd1wfVsLr17H4PbLc5p8WVkuAZmucxYjgDZk8jdAaq8fbRyXhXBZ8eoJBcwBoWpYek8pLiyzJSdX7Sg",
  "key16": "tqx97SdvUBpqwqRVu2Ktp3MvoPkWgSsRDU3dqf2P2YzyS1eKWig2WJxjcc1Xb7GxM5FQ1hyEddbW7coSFHNSQNW",
  "key17": "24tvLcV2MFKn28ymzjoUciPwEdvYn1EJoFQT2tekkXGkXN6ZVAtZnXgmkdeZci8GXuB7EX7eyuBWQKc5KW5muQ3b",
  "key18": "4ezMfxFKV7vDTH2xnmFJrYaAxm7LgRfuuswhwL1nGJZ1VcssS6wsoN2PABWBaZmQaqvBGrdqyPwc758M5G7hjS2s",
  "key19": "4B9apSHWKa5TDeNxtUkE1XDztQKuB4dkZr5CZ7Ah87qd1Zo9TZJuwhurDZas9RsPGR9VrqraHw6xnwPEpZttyUht",
  "key20": "2mycpgngXM4wxuVLJmN1VL2eh7CYtqmrGvKGQhepoQuvj7ZzHR4o33Xqjrgza4mJjxoRfn3j9HR9SNvHkRfnLPDr",
  "key21": "4VsQstGwsojRD549bwqo7gymA32Xs8C3Gv9kpyH3XJdkdmfvgFmrvai9669B6iDtMMiamGncdmboYu8swfsGvtZ8",
  "key22": "24K9eamsRjJU1MDXXmsP8oGEbozqzDVSxxfcJDLe4YsWvDoTon8Xgtf9L7NDbibGn1d6gftv9mUnGUqe6S19Sn88",
  "key23": "5Anugcp8RJHC5DkmVxPqqnYCPVCQZHmcevxgxqP3NBHXYKcyLxPhVNMvxif4LHTXBFUpvwmcabfEc9eYm2MA3kj",
  "key24": "4Kq5C2BqFd63H8vtDWmz56GoULybZtpZp1TSCZhZ3dNjmQg6YdrK9Ufz1cpq5r8jAfTTAuDaBQE7qVaqvcqtKCUS",
  "key25": "5VCEo3QvhHhzebGVgLEufwkfgCeeaMUHXzBzBcpCoAME6fwiJR3H2cyjNmM69vF4kgRApNkEf732Jj83GkxD3Aab",
  "key26": "56f7maV14EhmPzgZTJ3JFsCjMsPHPnhRKjgMzaMHmJCTh2Nz7QpkrswNsz5KUrPuZSCg5NvcS2FCbrBX5Y1U7DfG",
  "key27": "5u97RhKKfH6Qs5ETGKDvaLYKSiCwfJGY61stG24AWp3MV1PGdWw8wbLcPxWuA4JnjdN7UbTafLUB37YAkVcLT7Vi",
  "key28": "4mLoYB1ofJX19h1B9vh7wX37TRknHAUmQHKrLNJGbrxynpnBP9BLdJ3uCo7HtX58yLB9Cjz4vhGekPJ6GJrsqSnE",
  "key29": "3zkwuomQtJ1Dpugh3faw4MXA62mGTeqX5k9pAcwPNneodHY8ZPMpxVmf8xHYXsVJm3Xw1J5Y8xqgR5Httq7AhT6p",
  "key30": "2jEDcw9kngSwEUhHysA71NAE51d3XMHBatGZTpcDkHRBE4utmaUbgMu7VKUxJJWLd2dbnhy67TzK7eu93dmJdHv6",
  "key31": "2Zcj9msDgA2BeAAvvsTy8qHG8GJ8v7HvDVYVAa23uv3dt28Vuuz9gXhPhorqEweHQcrghyLzbSkkSXmTrYu6R5ip",
  "key32": "oLGwAdqMaWJDCgR7W8N5n8Epo2Sth9ZoUZevtt8fakaTUX18Ebyh8aLTfDF1yQ7hz4wsxiqQzd7UmpVeXLsGYr8",
  "key33": "5D3GNdruamBZS2sLJVHD7DGivd22GiDwuyMxuFZGtnUaXsfNCzYj3qHG4otK2poiizkuUQ8o6eqHf8uVufSPmQsH",
  "key34": "3WAeKEBnF96VDBVXjrNgEZ3xrmS2E7qvErmVVKpSuFsju1nFuvMKpQRqFHjoWwhxfttaEjsts6LARtJQ7kL4cXab",
  "key35": "211mtWC3hLtUiDPZetEMfK9u7gxKyyEE8inx8Y7pvacoq2qHwDxk2Pqe5C5dWmNmjr2srrX9nQojwtBgV8TBNhaG",
  "key36": "2Ms9pyTGiELo9hrykCMwVpS87E8xH1TLFF4JKVGEvs5yTB1M2GgTWP8XRxeBN7HfSn2oN6uUgHgdhogFHNLCUbTv",
  "key37": "2GCYU441o3EwP7EzcVACzDzzSzApEoP3UjMLkxxUQsKKvqjycN58M7zsnK9RWhCfCMVvouz3b6CdNb32DEgVGgwh",
  "key38": "549oUkWCgwUhwru3hHzUHzhfmbrSbQQ7ggmn8cZV7A4Cr8nPXQ16moGHPG42MJjp9K1tXSLkon34qbooGryLUpXi",
  "key39": "5PbAosQf65Vr164LRQCjsQ7Zx3HVSNnbjdgJ2ZLc4w6RS7qr4XaBVBQf8WNDfGxUY3GZaVxTiR1ggv4e8n5phpG5",
  "key40": "2izCqiQaVDZ463Ghqi1e9mssj5dx1wCrjpfwZ1ewhezmQabKsuCos2XVorv1t6wJ8yZv4rbVCg4epRg8AUHmGksN",
  "key41": "JW5Q86z6g6B93zyxSEi4F5Q6ak24UQLXHDzPW9Brkj2QHT5c2ffvHRmqKMjhMZ2VDZ1UzLtdG9mC63BL7spRjcf",
  "key42": "XuhBgdwMDWCzwQX6oqXfS3BaBzb5at2uXCZHFnDhHoLs7VBWexaaerQqFbJ4jK3hnTbPYBHdHrVXDpNg6YJZF1D",
  "key43": "5TAty6bsK4ek1AXZ5zdcutFFuyYSyyVvjWupSrAe37a5TsUhgLVNmVyX3wHXi1tR3Zpc5zoAUSh4hUSsH5iUuMu4",
  "key44": "4yVjPMkDtGbrMKzG1YHvGhwzRdMqvC2DGwFtuwVpfBkQaHZvcfjztJHYcdPDFKvj2s47BMoQZvHZB6zSE5wBq6EG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
