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
    "5VBk5uwZr3nx8FWrR8VAZ7LENsFr151K3zks3agFv2Tcad9WHa3wW99FZ1D7tRc3M24LVVGLUW3DgNNfqQbTA1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMFCeRVWc2QGMckKw3ryaxk9xoQUC8wYupptgCuSfwD2QYrtZMLVsL1y5AnFcSLtW7N9kbxEZRGZGLYpREx2EbA",
  "key1": "5btWUAM4HPQGSEdDJEGX9LRKvhpQpSPGih5edUSHFM9jGePUet7rrdectArDebtdkfKG76Xrtoqm5Sw1Pi1k53jQ",
  "key2": "aHnrnfKnSCc5T1wmca5boVpFYPWyA7ggW6DVnhmZV9nBTrkbfc2z2MiXrS2Wo7EKDR4qqhyK26Mm5cWew9oW9Vp",
  "key3": "2KsHjdRXPdU4g6xnCMKXas9tcGzPtKfnkV7ALP4rQKKqw1dL22eDx39Ta4KTDuF4udytsciJcKiTaT2PXTx5BJuW",
  "key4": "CQ4jwaCWoK2hzkHYzGiipAntG8F79uW9ELRWZj1TKUreVwqqqYf1w3zXftLNTLJZAjEqgXqMW1dy1q88nDXdwU4",
  "key5": "4GseC6G5hXcCeCKDctrZ9k88q5EV7ZH8Qanv1Pe9CVhhSiaWu1Cnk3mtJs88sqk4dioLPKfxqH9KR1BL5DWs4tuS",
  "key6": "3uBbF39Tp5cNjSgUbEhijvpM6H6tgSFmYGBe6ujsiy94ruxwsjVa5Zo1oW3iRTPJhyAMY6wmRpq5HsfRJkcMiCzA",
  "key7": "EzskWuMmw9Z2kmimDU7QtrLx5ms1iHyWSay4V9moQBoBmsufbLZuQ9FoMu4fdG8Ti5RpEMaKtzC3vi8aQDzv9wR",
  "key8": "3gJfkiVrWwSP8hMXGDt692W9VA3WVFRmEEf4euuYBUiSbDGaMgfHfqNbVQ1Gi3oYxuej41h3VKMdCP1uQ24reFmY",
  "key9": "5ZVibrwGpG8wKiQnpBYo5PdbC6etE7Re2JcS7iSVhgAshQxN2AaZJpRNBesMSuHrpHLCBHC9DU5vsmtiCkBskdQV",
  "key10": "2UX5Nk1xgSgPBGhpAhQzT7rK6TUiKE3dkrCt7aJW41CGMi1Vbii7UKm8udTuRBiJqps7hanTF8fYzLK7G4k4GNR6",
  "key11": "3xLAiHZanT6h8oywJ54JUVAPZTDbBX8zDJQhiBgsre1CCVf1wCsUxhka4uqUSNMq7KDK7hvtdbEmAaLnuSnUzbHg",
  "key12": "4ErU4TDXdkRfY2rTxQnzxYWVHquD9Jibwz7hzj9o7pnbNZH4eUrEbqRbFg5NEkyhV3o7vd4NkAbXQwMb4mM5KLPX",
  "key13": "4drxD1hNAWnJnHQvMoxhFfEM4r7z4TTGVThQ7f1PNAFVHTBQsvhDSVzaPQHC6zmPQeHTqf2VnppEAYUWQnvMTKAm",
  "key14": "3zLE3JzBvcjKeyyEQMp5h4LBpRPN1zVbhT46HWWaxAiPXvMtTba6FPQSV8MvR7D3w7EQttCkhKR7yvSyQzRyNvN5",
  "key15": "52LT7tR3CPH1LCfSHsYhiZMW6vbEr18GZ1ojZPttsPnJ6NahrzKpDYWEdJX6LKuTu53CvTMHLh5cCVcAKM2eZSpw",
  "key16": "3DEYWKWhV64CzjmjrgTUAJmAvQVYv8UDrSNCBpqvykN4TsWjwYC78QMM1Nam84xu4m4JqdULpD7b4fAK4D3JKzKL",
  "key17": "2vfQe5ShJCVNygdNaUqC62y16J4o7W9uYdVTgBDsh6u9eJQjwwJKXmSrJ1vHTPEbbPcKsgPKG5YCqvYbX8UuBwbu",
  "key18": "2kBWaT5tWwSd58NVxd2SkTJQePKdWQR4VZTq7echpKr1gS8dPgGmNPH96rwf57WExz4PQShNfiQftqhNVLoqRGAF",
  "key19": "5nepDiNYGhZYm6YgngCTXefeEP8Cm3wbm9THxAaU2kuF6ePtjMMCrQNFUwDgXvYcPbYFsXaAxKhNmiG1U6qSVsaz",
  "key20": "yX1CnJvWndJRrsYJMynjdqd6VJTmY9QindKVSwK5duuLE8nq7TZ8oghjtLPy8iHybG2dpNDRkWg8P32d2qQh4g8",
  "key21": "5B58kbNzBgqvVZW82MGnJ8LhAVS7JSSr9Qiym1bcbnynKe92XSHWQbJGpkf5H4WaR2xcwFhQcAhXvaSftQxFmb2b",
  "key22": "5TYSRQ9Z1hTnaT4dA8no3tjFHwSTsCpthvyXYLzYPt7fBfWxQe7rTYLrBU8mV1sPAdbU7VNoRvyob4obbScYzgFx",
  "key23": "5GG1LEUx5BZ7iSUrYJiVaQuKsGfYSzmNJAEVzeoDx8jfc4oRKFiS7xxngy8kbQoWtMqGnivmKsg8YE7pUqsbMcqv",
  "key24": "2eBjqjnhmwjMo9ECUoBCrYsY8ngJpK4ekLQAV5A7rmQUBXKVHQijWEt6Fz9Av3BSu3Ffy5BSFdmCS64fbpZUAss8",
  "key25": "4cojm6BannA7dGmou9aK9vgJp4LiLwV2GEsPrWfhKwziBZxd3ANdtciu66L5yBUNpKKQrKi5kFgkqsshXsNYAn18",
  "key26": "kqaLWVLbrrRPaFQFTwSefsRK2NEfbt4f8HAJUhDPqvM76YfmCZKJ7diUtGQ3CDb7coALtpNcRG1tPoMe4uwzFXi",
  "key27": "3u5SXLyDRBRhwXAByVp97HXZpaTgKA4emxDGaYTMd2RLt2G6Xg8WBQmT3quPzye9Ze3xFShMssN44LoKBBNLDSDe",
  "key28": "ZdWmwrotwVq9Cmx6EyLJAu2FGgB4Jak7AFWzqjvLvLoETrCv6Z7ERytknaeVULnS423XUwP4E6AZZ3B9xeFVQK2",
  "key29": "7xcun8X8ehHdYa57mKjQ24G3R6s6rzkZyrPjijXdbi3jTAQDDYYrd267xexcgzCkYS16xdNmRGaBiuwsRci66Pz",
  "key30": "iuGD2eExK3o98BAc1HtfGNLRGAQsrwSrpVnDNCXRjMYTxxT4VKEw6kqUrjqrGoxqhUVQ3gsVHxjZidN5fdgwfkF",
  "key31": "3g6zYteUttrqqHFgGdHdcqmsc5X2a65wD9p83TKWxA8CLiyKN6NUMjoc9jihtWkp1rMCW5mwTP8oNPj7GMwmu1B2",
  "key32": "5dpT5JhCqUaqVQSFnHMZSF8NqsrJCPWzTaK4peUTYhvr2F9s4sMU2aCuu1e6j4zX7N7gXdkBSj1UNmRACgaXqpNf",
  "key33": "FUPr3w8chotBGxHJu7m6Kaf2q214j9kRgJ1XVWUahKojBV9znFGBX6Ekt2gnjbR2JgnST5x24t4WcKTS4Gt5ZW8",
  "key34": "4CxjJeh4SAT1rDF6kNQMqXjJgHjoUu7Hw7ujaU3aVLgv6msmXFHTm2PMsnBpyPYKHFwjZcu5NqHmBpKheDV7UKTU",
  "key35": "2xRE94h97PSLfFZSA46Fb1Q6pjGdRA4mEW88S6Fhpsm1RAFw6NjTxTxZdop4P36cgWYRPJt5bnTjUUmdTtwFuXQ1",
  "key36": "3hGNjjW41iDq4oibDQduXa8qBPnccZnr8RrCaThAKs8sUsjCuEXNKMiFRZzRrE4eDuhrgKp4WeGNordxsnrnjXNq",
  "key37": "8phaDRNbJ7c8k3ktouYqCU72jyofDNefWb9WPWojizWovadmq7JoQHYdDQbTZAfpSGy8RTaQDLq3vLBabGa4aJv",
  "key38": "5s5u7oFMNiKUREfiPrZZGfoL7zKCN3J94T6LWfE34ps9Qw2orrA69LY96Ar78q7bPEUjEkqd1vMkj2ArUTPQSCo6",
  "key39": "54UWSaAzzU7SZCUNhj6uStPEKutsaMN9RpGgWgEDiZP9M9PEZftiBtCe1mhD5GH8TXB2d49GvMgdN2uRC537VSV9",
  "key40": "3oT8yuZ2wjqbG9Yu3aR1KpSMwwGcEJTU5YqP5CwseYJAaMxJVdLw1cRNByLQMTZrZWGD3CmeHsacWyLtbi8RrCtx",
  "key41": "28R6uQm5HUjDjYRM1Yy4Kb76XiDkv6UCfZ5ZN1xho5qwie8e6fATkuRAu7rKiHxxr8HbuvhxmzseiSyZANC75ZnW",
  "key42": "5i6zQWUfU18Ej5VdchhqcGRDcUM3BmzFXC4y7CukFWoGx4Rk44EgxmJFBPbVta68pmM2oLtqNc6WQFtqxP1Bsv2q",
  "key43": "2cvRHYp3ShECv2i3nG7QzdFtDvYjwkbE7Cpzohs4ieosWyCJAdHDV97eeJ3SUv6KyzRYJ93HZ55GtmhYwBiA8Upc",
  "key44": "3DbdGBuVLdFwVMrRgXwco42m4P4u2Y8vPwn5eMiUBzckF26rLJ7eXaNBTQgDshpCaFaUZkgxUb6gjmwSwsrAf6pn",
  "key45": "zbNgdvAMxdUdyfx1FELFdRrwUx3omqPcg9gKQVBV4jqcDDGbntR1pXbpqnXAYo6XoQ8zpim66ArL8bZKfXi2U5T",
  "key46": "HGEAq8yMV6wa5EojXJGcV5eWa8oFjv2SytTvb7dqL54hJRyVPfU4RuiShUAh3q1f99TrdyBTWr7FydTdBpc8w3F",
  "key47": "21YvjbPyNunv2pqPnpAAvA1QsTbP9KhGjc7oD21oWdeA7SRM3jHYNthnMbK791TnbtZBPHR2JdEfTeLRkj9nKdAR",
  "key48": "sLkK8sVmuD2vrVqMj7b35FSXPZdugF5Lb7GVmuf9JvTi5V7sFKq2M3mkd8pWJjytSQvjVjCtaaXctQfnV1CJXvD"
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
