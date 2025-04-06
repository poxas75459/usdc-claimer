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
    "56erQBE18dYVCboNytDXNYethNZ4dpLQFG9K5JUMcJqZQZErvPD6bsd2ddEnaUwDe2msJJY5ftaQ7cLogvAsFi53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7oebYrBhEvJ4eDgMJYs8DWBm95hhCyBbLwatJGEsxs8QgYGAsmkYJukJyMHRkQj74YGPEzmdeRCsbrGPiZeQao",
  "key1": "4vqwqjxyjN8ZuCf953tgT8VYUgKDCXaU4sE3YyKnmj24WvTBrjdK2xnH3FkyPs4wsKVdF9CTTghvU4bLkjSvyGdC",
  "key2": "2L94DNEGAsYXaG37RDVNJLHgTQppi9f1tKHkG4qwMMUX7ABq5JC9UjuGTUiLUxgbv1epw64bGYt7M91yPFdhD2c3",
  "key3": "4hm6vyxsbNNrKK1M13fCWnonbJ4Bg4QZGXs6tNoYCPsge6NmfMyUu86EjK5mC9kkuzVPN1pSeARfFuNGvXrgkMqb",
  "key4": "4sFSB5YRHAsRWPL6BWb6EzRFWCyCcP6wSLio89VjiMxxak2gFU3cZSJnMhG2SQkibDZFYLYGTa4MTkLWjX94V96v",
  "key5": "3ebJzzEv7471kh6RPiYoHnWVAynSB6ea1Vsqc89ainyqdCYRDQDLLt1QBqD8yUgsZjdpBkzsLTvPKN1kbng32JgH",
  "key6": "3C3jnD9u9YSvzrLLRM9PKqNwbm3pYxJxwqBQgRdsPNxJWQCfGQtPcr7m6YArLjhRsNofUgMrTpQTFg1wGSPHS3mi",
  "key7": "5M1WekdAK5gqMs7PuomKVMngBaMpcSJQMguZ4sQSLY8rKSwo4PSCoa1sPWxHz5Eo19JBAyMTqNieoRVRXromrLVb",
  "key8": "Wregg2U4R269679X9g1CQCuuTMKJ2wJ4tEAgxbQapB9soXu31uKtKT27kfegTxaBFV3KHpNrfVDtXvUUp1frQ91",
  "key9": "2N4QQ585iuQwPSE5RK3Q8zVGS4Ke7jHSuo9SsmwyBDgcufq9sMXMmjQA5QSoK2S3UMRTSUk4K7dmn31rGBgxPQXN",
  "key10": "63W5iT3aRBhhrnWe3yAsnG89xscS52Suhf5V4Tf6MJQziMUb3WrKiaptqqDqzTnHScwrAUMy9TbSvFdE6EG49KXF",
  "key11": "4H98eAXpRKkPSmpnaWrV7h5dCNBbiwRFfCg5XSaSBYSA1sC3kYPkoViDbBZRKhETkqYf2GnhZeJTH2dwRoeh5EJZ",
  "key12": "3xrbJUxG6dH7Evu9J8HgAc1K1hbserQ7HBHqxWvTYV3UugtWdwGFqefbYMZAHHnjZXZy7V6vz24zMBZvY2RE9C1t",
  "key13": "4HnwTrDYKdEMj9CHoyaVnYFjWXgdd175K5zi7Kfq9eH6NBBb8hL6eXmt5tBpQ2uJ7BkSm39y2pwmW4j14irQxX3b",
  "key14": "3DJNS8zo2mxr7f39ePBStLzLUM3sVh72V6k9XapUxaRDBYyEs3KaXvo9Czt5tfNGVZdDZvVzumiPmVuMKEBeNaP5",
  "key15": "3rNtjNTRAG8x6Gd1KzqGVFAd3pxSX9k68fVYqbKozYhrq2ntz5DEawZHnCVuUbB2viTPo5vA1QmUxm3jShzDLFkg",
  "key16": "4UvrRU9Gqt1Pbc7qsxPFjtHoCJXsFuF1w6gEMqXKY7f9EJA3gZz1zqYVegb23pA2N5tMsFA64Pm6YayTNeG7vazv",
  "key17": "5JUBp7Utj7YBpwKqWFgyZQPmdiuAg9v4oKQrvhHjjVAPcqUq73X3C1N99mx7nAttYthL48Svpt95pmtv15reRdtV",
  "key18": "271CEAGfEZ8PnSUYbivPHHXgacrKVPZ91UMyHKHbydWwxPq3aTo6uqVBRmxaAPn5uDyKFvd6PEWXRVK1e5tjgvUz",
  "key19": "2e1Gz81HePdPDRQsRBUwDXQMaaRWpbjcnX46A81rHeitqi4PNuAXvgH2QnYCbNbnHtubizMb81Tz5e61rd8m93b8",
  "key20": "2eddC1P5eRPtiZZWjofg2tdjXpK1o2t6fjbGjbL6Czsg3fLKmRgJK4VFbSw8wcu9eth4vM7n92xLgDRKeUZSuuv4",
  "key21": "4h16Kjhf3NKfrVh7v4BvLDdxub2FfqvpejuDaGw7oe3eRL5eEDkgJqJp443FApngLmHcqFa6ev5Gp1LxMYvVTgSe",
  "key22": "2q6QNwPcR4QLCytpkw9aLvTbNTNSj7V7QVQ8Bwwuy9A2fQadAJ8x3qDJkALzDGHmZbG9k4B4ASjiLf4dcAv3628m",
  "key23": "3zbo4rRaTvt4trgf94exad2JWhf6apgGgyioJVwV6c2GEFxSUN9CPmL6opE8Vk4an8S36brLSqZjLnMp1P7skdVT",
  "key24": "39apdsw7vRiL6ovoQZJn9ioj4tguNUPYNYnhHMFV8Ro7XBqVMBwbGmEqpWMuDdDh9RtGQSWEspWjoqHamLDsDRat",
  "key25": "fi8RbQNzRgvVQUmTLXz1bjhKtaADtbrMgGPFQ4emGyNecG6BEqdqcbmmzoKqcpqeaiZQo8FjSssbpxEFDNJoRqJ",
  "key26": "5nhesnD1sWikqmKiEqMr95GegySKrVen4isW7jPnFnBZktPxhbkZSK3HPRKjSFiHzaXyoRgisCTSqKgjadcLZ6qf",
  "key27": "2fhHSPPt85Sbxytko3VPiZPRt9r6KH4PW26C5ADZq4Ya3F9JXLG3iNMJXwwoXAVZ28CiNEaWta6r6NYMtDN7Bbi1",
  "key28": "2ZByXppxnmBxq7P2m1Dv3DkkdXfdSQFHjqoMjyyur9xMP7iwwnEWFDqckScFhqm2n8Di8F6cNnqus9AubeB2iA3c",
  "key29": "38m7LZSMe3h6YFjRgWn6TDMdUSzYbzCVw9SrV5mUL8z2ufFh4zHoCbw6Apzo4ZFRCh6gAVzDjC4w1LnxQNwXJXFo",
  "key30": "2D2axuUQ3HffPj5E4CyaWKVjSyHFzzxWhoUwYqh1RuRdFDzBkM76KiMLVQZb7fUekV9n2hhqbXt7Tr99gpfhCHTJ",
  "key31": "4wf9nE6QMtm3ea7rrqFY2ysRuLghPcvpxm6ViPjdymGrfS3LRxoPAmkVaTvUyP4K3UpgHVss4BkPegV9QYAyNYUf",
  "key32": "411qfKRWnuq4KtsPTdTjh5Z1eKYyJLRfRnLWAtYarDr1ZKzJC4rNjHdq2BPX3HRvGL7pZ1Jf2hdf1qBpwjEFz5mm",
  "key33": "26PcMnkHEQ1MUadMGpCedftkd7DrWFEDyBogphrxvnQ1SusojXeWRAX4XyfzQf8bSmCWezB9jH38xW3UFrXdwuF7",
  "key34": "5B2wSo67j7GyLi2Q3V8wHBFQAxRDU4MmBh1mHVKtVY7g23WuvQhFhVLNiDPbc1KarPnEHDBPcvhcKFNmH5sHqYWX",
  "key35": "4KDsYgpYmYj3qi8Uu47zkFEjJkUWL4JdedSbFqz7odGWg7R1ogvGrEeoWsMtVP8odkGFCe3ZYY2RAB2n6QTPmFC4",
  "key36": "3LgWtajNbeQw6t9z8BfQTMYxivdGAkfLXeARzWQRtQ7JaqtBMHL49LGzuq5BGaF5nTLFKC4SSsepjZJ4CTFRdkzE",
  "key37": "32WXqqrmEix5AZJDtN1FSoPb664m9ffVQcH9K7VjuYjxSMarfzjnJuDDcNLYYD8X8H9sqhiSqYr9BWQtmHBkUqDx"
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
