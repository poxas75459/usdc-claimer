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
    "59wohub3FfQUfm3eW9KRT531pBNTm4vr6Pp2mUWqmnoMtgBpFspoAPW1RrEzhzqhBCtXG66javhXxdSUdxeE2JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCJekFEwojcyAnS47RuuXpz4NUJ8HgGrVTX4keyy5eupaBQev3kSmWKS2EkiuUWVPDt5Tq7gVzd9GWreQMSjHkN",
  "key1": "39WBmFrYwjg3Q24WCjsA84YPhuHzZHZE2YAJsepBRycMNV2RF3x28xS7CpJ4dG9nFLfs8FS2bKEcpt44biZUbXNt",
  "key2": "3MPhyf4KiKLTTvQmGcYqpc8NH93Vs8Jw9RicpFCwVPfNaKpQ5FQDRYonUg7zmRUoDjeKdEfkDrQu364vqkN3uQqo",
  "key3": "5ZBxcMvbdvbGVctpMfUtg7K18T83CQmmeZndTjiCadx8AqpSJBnkq9F2wv5aTdUjBxU8iEAcEeQkoyZDDUi1KNKo",
  "key4": "2Jk9s22cdg4G5cKM8pZriHPAMJyjTujGjvGU23zfXGEA8XuMvwQHpX41J9PfZK1roJk7cTaBRdhHpiH5FmVMTS7k",
  "key5": "2wEeEZX5qJ9tD2LDRjcWPisxHLHyZFxAFwZ6cqyY1P899nXpRo4aiSVf2hiywNRdsJzy92VKcMxHxSwnsxcXgpEc",
  "key6": "38B6ykY68q632np6zNuw6SZQrNhwKj8aQNqyUaPfPdxxet2fStM1bZePibrECXvuCGrgGSWv9oZAma5hfESDmxf6",
  "key7": "3q5jA5wx8edpbnKd3MZmjiDh5nDCka6LkqWmAWt3zwPMXAS7uzcqcpi1aNaGrKzcpPS2oVW2HfNgjmDvpVT2t4Qm",
  "key8": "2is9s7aRqxeNtH9MGJ9WMjBRnNKcTdRy4KdmnGngWrhSRecoLqGutSSDz8mkqqufuvzgbLDALFVELFpp5iCyNF6H",
  "key9": "2CyqFNVg5uoBrojoooUsdnM22jGTsUc4tV4F1k8X1oXvpzhUEo5J3uDv6bEewVaQJr8trbtjdakKe9TDTNgT53XK",
  "key10": "4zfGoh3kjKd24hKAAzSQW9ystjCsLASga8jnrw8NUayWrmbd6SZtatNVkEYkw9qXHuEeZpq1RN2J5rMStKX23kLk",
  "key11": "2VumYeRNNvMfp2VRQy47AHQmLs4oJBdSNbY5fmUj3Q2cjbZ97Sj1SiUqMtSa3anzNC5xNAo5Hv2giBPh3cVc9N1p",
  "key12": "WAgparvQ2uuHN1XKhjS9TvF2N13Qr2froy1YkK1MXNEV8Ghb3LHFUeLDvQgA6iH3fy9pHhamhh1vLTqvbCtLjY2",
  "key13": "53eAaqEQ2FLJVNB67hQ3Ye4Twxgu8K2WTud5hhUmiqefYxiTvSy7HSagPQp6jxtNe5d12BdzfY9SJ8xVstK8kKah",
  "key14": "5FPYnyfgvBmgxXkkcEU4Q8DTHDULLo2KA1XU4aWQZwSqkv9m6xhVfYZB7YMVeYUmveGUJ8vVESkPBinhqst1qgnT",
  "key15": "4A8cQ5MvkERQ8vuCCPD8Rkbzf3L8XMNaNKubNpCguYf4D6VzsJ5U58Hsh9HH6rDXG3efg9z79uBMEUQnvBfeRUQd",
  "key16": "4tV7tsUrSxzErHg1v4RvFvBEy3QFKfUuoSHKYDcHwRCCRWpVxMSuPDUb98ywg7uqfPK77tG5vA7ae4YomXRW7nMt",
  "key17": "3zHXCEFwo6cKdxqD9Jroa4WCeooKD5dT3E711nxwqSvGKJLjq2wE9DkpkUkxn7uTcM32xA2TC5s8ajUAAqxEhu2V",
  "key18": "32Dhz8rXcjfokiY7nJaGQG8eaiHD4pwM1nRmgpPCjWXeRsz8NxqkdUcmH251WC5DERvgELv3qTWVMV3Eno8uehJV",
  "key19": "5q7A88NhLVisUGzTBuQSGRxHnQ6PwmUeth6TpxFRhbBmDeFNER6FqJrwgVfWmU7uWeDEnrM3Tri71GMGsKatodnR",
  "key20": "5sJdaTpMhojpAFhWMtehHjv7j98uHY6yT2yGxhQEYcmXumzvhDgv9ANrekzFiugbPwSBHF9iPkfp93JgAS6bY1rY",
  "key21": "4kptQuBcXB2E447mbdVcPNtXrxpiciYyDnqPg2H6ga4oYPsVjpPUJwxz9JFhHjtKWpTFWsiM4D9WH1ZY5cDkLn2q",
  "key22": "BvC2W8o7wGhMX9kXvcFz75mwnewPk5dLjjXyLKa9VNPviLzZyeqMb2FAdGKooNDp2nZLjn7er3GUkFk9Qee6XDz",
  "key23": "4c1o3zXpVCfHpfHWwdnPFZXpuYNNrrPXcCkAMgNJMooN6j3qrWve4a2AAwYjdMHGXsxB79GxJ9n7tHKbMt7fGfAZ",
  "key24": "32zAubEp2MR2WQaetKy532jQCiE1cBzJeJ4rQFmr6uLn9Czk1jWhteY2abR6PYbX5XHYv2NsGtC4WytvnNxU6YHD",
  "key25": "3oXttEmmffRenmx6zBxFdAfNFChYqNoNLnjcnxXQBk7vgbZQmTojqwy94SN87bnjYRwQKVxHq6WNMri5GV4HTG1k",
  "key26": "3FbR3ftamDHdQV9xsJxzG1dKWUibXDSrVWgGJwsv6s87srLKPmWsZbqLwCt7xo7gAXBJ633AZk5HZXh4Ao8M6Yy3",
  "key27": "1EgvYrvbZe9CG7AkbrMPzWQdEi39UhC45FkRDa6MTGRGE5D7BmDLsnoargBBf5cBmj9Brrw8E6KpPpCdP6edXFs",
  "key28": "M13ZK8aX6kSxWezFd4dCcW2EiX4fUk21etFm2oHMzLhzH7kmHKHs7r4vKNNmmdeHSopQhUW8qRpFGMcuuPqUZjL",
  "key29": "3VkybXrh7qSjjnqX1MwvdKrpZmcG4fWZqngRCCtJEJbjE4uooCzjnzzycjrdCCxxh4v75JypsTi29ft3ghF5emJT",
  "key30": "ky7UFEyznQDP6QrANDeUxm6NvmhWMmN7Jiektg1VV7FyXFKng7fgNSjBsnm3tDK3v9u7CgG9BUQNTPJDLbqYBax",
  "key31": "4gGcjkvCQZfsUsYBCur2KfcYAbV1JMQdy6KN2bQ5rN2fQM9jVNhxuvDyBfhJ6uDXqVXQGyQjXsWUijuQjKLxzc7u",
  "key32": "4xxFKGSqjpL6eWZ8z9pabaANnNq6WxWwCDZLaQa6H5qoNAGU1hhc2MuMFVpiFj6m67yz3M2pc8vg6KQBWUPtYzcS",
  "key33": "ZagRuE8CC5LmtLx5JegFvoDnHs9fDZCnTFSN9TVxQfMRL6LD2Sk6T8FeGsVci3ihC4TVpYB47Uv2x3UFHh2mTZo",
  "key34": "3Mfocd5pVuvkhhvv23feFnZDHh35aeysbHPNo75PL6NhngMmCgA8BhCAtqod8Kr3uvT6QHYrshwwGzy51G17EG2z",
  "key35": "2JKBVNa7od2LkKtCqeLPHgYUkfpCh48rgQdkBRQ81Ju8WmUowTBBTDxZB1xzniuhF4vMHS9DyerzTmXiDpSosbbV",
  "key36": "4p2FjLx8n9v9Yasc9HbYHyMCjabZjwBWE7RU9wo2mYgetcfsaRbvsBCe1MhHs6FeDnytojBqRuwZDzhovK9LS7oi",
  "key37": "5WiQaSbWZ7xA12NXt2p8QXkWFbKWtocfdFgdZPN7hsBQNj8TksKx3TKnvvVchrrtKpLSE7AEVhuprZXjENxqqfQm",
  "key38": "3M4oy7EHqWBR2kUE4Bx9qk8QtA494sFgY8PpvcfC3kQZ5BUuJyEJXS6SrH1ruj967cyVGCRY58gv76LLvAhW83hY",
  "key39": "2UgkxUP7jqkJ2B5soGvZfLUaDp9irLqHeiZyosGbPpzbXGyYQnxLxWbVxwaicNof3rwALcV9TyNpWANQEJfPdsgz",
  "key40": "4xaKAMxfk8rwaAwdCeB4Grd7VcQMSg9HpqWybyAqMD3tuDTj38e3u7BrYPdbuPvMsbMKEFqVVxu4VHEsWHMnqYmP",
  "key41": "5KSt2QZdBTUWhZiuEJFrNWw9m5D4pG9tdtXs7Dm8NxvNGyHqQHvEkzDCqCdNB2TwEan6C1WQ2rXasCXbTZfsqM3P",
  "key42": "F3NRumLPevhEUgHwf8bB2dcmjBLw7Z4JxJdAzUNjdZYeereSAxqoCuzQnX2HrscrFm2uFcGy1jEb1cWuc2fWJ6G",
  "key43": "JDZaEsmsiHHr4nX2rY89LbUccwG2ooyjGwmX6QXVu6XWPyVSoGwA1jL7NgWfhX1hDjTqTdTsJyC7LHS3mkNtvzV",
  "key44": "4HKFTLxzEpuFuN5knDuKBsJyWvBySCDVkzLd8P1XB8V2fZL9wppBqymGJBXmYw5UqMxN3rKD8CmqdRNZr3L9k58R"
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
