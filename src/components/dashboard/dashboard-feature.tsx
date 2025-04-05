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
    "sT6GDprzZdhzxYUDdSCqik8c9sMga4GQEJ2hfpn3eJanuSSR2sNm5KzmQ9SFFhJoTuV6oopYzGjF1pK2zuLaxxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vE6FSPRVBqC9mPk7JkCJS6JBNGAVrArvync9n8uGU4W7ai4hymV2kitjGCqsi43StmEDukEirwK9M79dtHQsn35",
  "key1": "5xwvppthj4mU7dPQ3oPECNgZYJwkxyKCtNxEXF7ttwCqV9yXGrHbhTMvUD3syGKrfv3VxMEnUfn6AgsP9Na86nSV",
  "key2": "25XgDn3ByAX6N9uwrJfJh7YLLvwHL28ZNWyPHYxqsCG9kdiHpTjeo4xMxSMH4foEj8X6dvAZUCeu2g3cQECZ5akp",
  "key3": "4HgzMZGj1ApPQqV2pW8kh2oXEd5a6Uu9E7G83mNpTse6iSksYNtvMUwy1Tsq54g1DQL8ZDZ5AwAYzXmaztcyK1sW",
  "key4": "5i83WA1QcNN75PwGtY3UKXt9JFDwTedXZ2yc1NL9uBAuo1zkfEQr1XsTcPxYdTUPTZw8GgtEd8WjcYvordqbT7HT",
  "key5": "2PpGQ9fi7jT3XDu9EWUAKx4KSudbzzekgeRuu7AXQXGGB9pUVtMoMmEqDrJDjGH8ciRSLEiu3xexGdfJzw5HQtf7",
  "key6": "2XcnaPcK2dmZqnsqNNFpaKzy7BJ8k3ppAGjjo4Axp4cUmMRiPEjDgD2mqrJ2WUKeqxBEKCuXxdnqK1JthGzRQTiG",
  "key7": "5pTKc8Vr48GFWo7t5Jh9fCJiCXmWwusjL5woPvRmtg24HozVDJzX5fAZVwn7jHUBaHPQKA2tqzR7UshyfEeJY9bz",
  "key8": "2ZmVmxzBkNo5wiSpSK2UTACHvLZ8C5XTch9zxZVr4B6k4m33sQpQu3ARZNZuSoxvH3CXQYT6ig1u9R3ZrGMADscm",
  "key9": "4BfCQX8dNJUxxyAMVXKDke9GoGnoDo7ZgKu6UorKemLwpUBhjEoRXmKZ4SFB3nfTKAMLYKukAqih3pZM7pvBh3Hy",
  "key10": "4PoG3rnbYyU8SHznZBeLz7i7vbpxuJjzN1d8jTDwuAa3MYj4ADZsdy6GaGAMLfEhGs7ZNNumtM4bGPMixyWQEoQH",
  "key11": "5WU6RZ7TA2hmPZyrbyLYArb8trpPVqUbcJ3KgLwQVgiuJJ7Q3LwVMYKfsBvBB7C4WY9nmjjaoGuR4U8Ch6B3X5Gn",
  "key12": "2HeqgJLwob2Mxgye6tNY9rDdw32F77FMKNjCrnZ1jgZwz948kUcSHs5oumPsrZPuNzsmm5w8yc7Zcy3FPy4dqENv",
  "key13": "zNGq5kuUBSXdS57QkTH7x68ub5g5ksj6ZkbTBp2wWHQBkKVXW42h3is4Qrag7zQmCBK8pcBMRaosaXMmdXEgTHf",
  "key14": "2XJECQAQiX6KBArebNcc77cTmCTfrdfkwwL7wEmaGru7dzryCg4w3n9bopc3rb1mfKS2X8p1HX73vbiTKhEqZb4W",
  "key15": "oExvoXPNS8ABomL9H7GvCcC7qUwv8zav9PLAXyVS6wgg84AV9GCEbx776TDx7M9RAxSvVaevALoVD9PQ8hzeNsv",
  "key16": "4EDqrJ38FAycGX6r97FsP5gvyhuCvqVZyBnVJKwAju4AkZcSpBSyA9b5VFcFUEUuCHZHjsNdHoLLB6v2rtqX7BAv",
  "key17": "5YPotULi4fA93kTcsu6iKnHNLrkah4aAAVPqf6y63cVTJHVadMXwwXnWq6mAW2hwikskmgoHFLzfHbxdof2iTcoq",
  "key18": "2w5nvB8zRmetRL31Kwb4v6uAAU7SMAK5jhmHZfXVB2pq4hBXVMeNaRdvcJGYxnsMsxbKq9HtQSacsh1phcEGDZTA",
  "key19": "eAjssycVRsBmyT4HqiHZhCPfGDG37KEhjTvjnbfF3hfP4NKftqLrG81RQkDfyCoCa7zNZAUhWXW3xQarGvgfQML",
  "key20": "3iEn2iY7bbvomVX9kXbkZeMpa5ba7FYXg1JZwNgqEfDYftz9snmPn5GNoVkWY6ibBCLS6xfLQnJ9UZDkGz4H5Ptn",
  "key21": "4jmdX8xKu4KZVNdjdL64B3yo1Z7XQ2xKEetDLnzzGNKr7RshQoeyrju9xycM8sa3FCx8LzNpDqAMLGC56nrz4JwW",
  "key22": "5XuyQgvppD1X96thbjT7hWd65ExZMvFxSeyEMG626D7p6G5Amkyyu5ZxvHmiSfoGFLM2nA9KLpndXLsojxihdYFy",
  "key23": "3jhPvWiMBDtdUqGYEcb7JKHRQEtrQHTwQdajrtE3PKHVoDhUqfz2f1xF8piuFVqsgzzyZ8JMNwU7AVZ7RUMZoc9H",
  "key24": "4rFdM5puXjbXwkmJiQQwGXrwzrHgLHw4SQiVsKkXfzJRsRLea7jARRjCBZ6HE3FZzqfwoDiBvHxv1Tp2UuUBKbTs",
  "key25": "4ai4FPYRksYgvHzycTtVgtEhvrQoXc8534uXKech9nKhFeKxaL9V1Wc79Xmu6sJGuPcpLGKtyPaT1qMcDmptdK34",
  "key26": "4h6ZxKpnPhD25qcnadRe8jrG7ttWyKqxmNTisFLBeynJagHwbGEvHH66FcchM1imBWZDj3bXeotAZmntf5UrCSbb",
  "key27": "3vsqsWdS5Tg7oFULDVXQqdspnVYcgTKPrJUAQyZnhsMfTFcyYR46ejmg99CqQ8EM97cn1B325RgrGR9dL1BQGagb",
  "key28": "4p6xqsXqSwvHt4DuQw3XiDVKZPvihPRWXYrA5xnmMC7bZjEAHrMYxVwH2RbQaYXUtqXpLs5VHfB7QmsJ44u8wbE4",
  "key29": "dSLhk4joMgFxQHYxtqz4NLT7rZ8ypYZw493T68awniSGZNHizP3uGJf8ihPhaHSiThg9YdLJhuCLRvHaafVTosu",
  "key30": "5daVxLRHB4vTztDNXzYz6YYGcU8iXraUyr1Tq6EZTYVjQH81hP1pc3eTuZE8y9c3PAupLqKJ5r6WCMFkTg5umXBt",
  "key31": "3jMaaXnghGbfi14b5STyGEhpeinJw9PKCzhHo9hmuDMb1fZ3dhAFQehJEpGNw45G6hyGaJsZiPCXydYWzAsqrNay",
  "key32": "qK4H9XPMBRoZ3QrnHthBnWgK85Dhmnhw4wytqi5XTLBAMQdjNW1n78jP2qdRZCJigwwsULTzH88wT9noGyHQ1z1",
  "key33": "3EMSZ3jMatoksXQCezvPL2Bo9t1T1GXgaFGZHRFJ6QQYz3mLPnzxWiwZrNuRKQFwinoq7zVTaWaYt3NmvuBEeXae",
  "key34": "iJjTN5chCFQhYR4AiWBgmgdXct8UpYmhKy4de65NeL6pMqamZgRHcCu5xZxHJyJfySpKT2tf3kbhndcoPZsyDMx",
  "key35": "5rneyTDE6KjDMSgU3veYCUbkijbGZuE7QPQFsWWPQjEmvtBS5KT396UrjcaeAYcFWrVeDoR7Wzw4dyz63ayAKARG",
  "key36": "kPwEHU9h8w4qL6uHBgQba6mubqGq1KhseaxssR8kYXFaw4oMoEFL3qFub2XvagvCZKLPcoP6dEvNjLJem93hSET",
  "key37": "5hfQAKhmSJYsKn1sHvnxgrVGJJXfp8CTVYNBr4HcKbew1dWfS62mSJuUpGppP1aqRfbiohFtgVLyjeYqabSb6DYU",
  "key38": "3doZFCtCw8LkZnHCPpzxQWJhbrapFLBE4Uig8QKUBZSPTkdijVHKnxwdQmLMXGSovhXhJC4jdiWJfgFfYEWbvvwh",
  "key39": "29cVL58cfN5ooCfqVi8g4iHsmXDFfmwvEErXoVfNHi7uhtLyHzzxuzBmEj1tayrxWjGNMfSY3MChXm2oFYwYW7qC",
  "key40": "55UyZyrh62JSwV4AJe82FJmk7xDyZKfD3t8u87aZuDVMvL7wYjpTXfZCVr5C4FTJEYBA76J1ZvqUuz7Knbuw6myG"
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
