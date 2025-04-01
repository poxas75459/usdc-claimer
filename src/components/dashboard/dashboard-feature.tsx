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
    "3LGjGWvESumZY5sgRLUiAsztqMFht8z4WTmeaqGv6YW9F3kjeLq5ErQoaPENoE5q6LPrYf3HErP1fE9F5pLp665c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbjar5BZvvXu25HT5ssodr2FXzDfhf5KVRifhLgfLe1Fo2AUUNwhg5nB8mThvpdCceDkzfWpjKy6y1fQo9MoKYi",
  "key1": "3PQ28rY3aB1fcHQmaKixJjkR2XtwzGLbqXfRTW35nhATQiQUQ3ACRrcVfUqcNSRyrdBEJGsUM28kxnpLjeketfwk",
  "key2": "55DvRQ8KzQ2PgTVLVCv8pAvSRKHNrTur83fVXGfjJpuQrQJsXuWac15nUXNcnn5V4CDzZva1GtVbyPUtSwNai7AN",
  "key3": "3nwWj5Uq4VXFzVCxv5mNk2JReUS5zPbdbAAzK5cXzujwDEJhFzWjUAaVfipawdPhzcPT2duYhUgSRjiK6ao9aqkq",
  "key4": "5c5oE3TCYnXJvtS3QoMnu81yCqEeC4D9KfzNwWFZVbiYEtFb8Wczqyy22L8aWYxHMFya4jiTiNbQd9jzbECMyQGY",
  "key5": "EoFRmUqgxgH5KNn9DxYxa9Xmi6Ntua3VJQpEVv8HcuoDJYWCWEbNE8hc6QZihpqoHDjYKzhbhiHemw3auVTDbLd",
  "key6": "4v3TUxNydMwuyTLAQJ7TP9HTdbuRS8rsxF6ZfeWmoMjqYx2zWN8xFZwQAQqW5EHiqpigqsHr31rn7sDqYK4vntEp",
  "key7": "4sTVJwiesZRXPaXvLp5DKz988Njv896E8Zb7yVvxpvhXwA9nxdrw7oEPkM8aPrn74WaFSzWXXPnrVdNswbvsuEkJ",
  "key8": "3ibjRAcF6tgsNfnFE1yPtYq4Jted61VVSTBNxeNG87GSJkuP8ZpQZpR93kkTdQinpJPk6Fn3cWpnrJFpVieqtffu",
  "key9": "31WvEArTSbBm3TxyhMHtHgRUgwFTwQam3RY9Ufv3kd51spkbHU2m8y67RH4bMePfGjjL2khff24STME35KbVkAdh",
  "key10": "4kfzoYUW4YzC9zdngT2BRacHt8wjEjET3Kx64mzXHeewfaT9RmNS7oeonTyZKVPDojyD7FbkuhxJQ8PwWBicy1NW",
  "key11": "4qCK1JjsUTTXjVRwKGb8pBNc5kEWspgFwLz8RkWKvspVbACzeyTuT1toUbZKSR4gBx66EDa5zL2uVyoHdaRZ5Pv9",
  "key12": "26K1kD8z5WcLX5Z65LZjv1J7nxptHvNqifQGCdkNkqgzPKij1ae1PVgXDMVp9ULV64wNau8S7YwaFbZ6nRJmmXCY",
  "key13": "3XW8DiwvU5hnDTkzdC4JPD31za2kYsCt4i8YCq3tfW4ii1P5MdAU8wTGg28bnMtoPafa4jbjFVi1VCK7rj2rfnar",
  "key14": "5LaC2ASGmWHMJkCFSbKoVWBigXp5LwnvMgZQe363GyF3QhpmXokPXeiMSankanqzgJNruV1TXgQRnpXAh3xhVkt1",
  "key15": "5sCCGH1BUuuzxL6J8fKFw6MxLMdaD638v5dn1aCToTjtnEGSiSp69H2n4HdT6nRvkbMfk2459xnd6Dduoq3PyPLQ",
  "key16": "3wSnkJ9X9fnQ9jjvSJzoTdQQSr4s6yYaPadkmg1ZagSVix1JkEVCp7TJPxTXr2DkM2zJ2V7KBKdrf7q2Ku5ttiLu",
  "key17": "4QRZb59gJVX1c7E2SJpdLc5fejQvFFs4UW6MYUWvZtQwCndGMMBskYWkLPnGXq4k2rN5vVF5AsunBCZj5FdJWqre",
  "key18": "6KCqKcnkvFdu4waMSH61t3CLKYY5yFyFhxwfFt5p2HkGdc1XRot4m4v62wp1pzT5R6cADLnjDD2oe2XxJC9uv1A",
  "key19": "2TAa3vR74ru4BEuWc1ZQrLkPARrUih16t5EQP39NapEhWRZntvtsD453rdqF3DUzn86BJH3goEstX7rUPSZZzeB9",
  "key20": "eXTfG3TcefVnGWYsB9MH2VUWsEyRruPcj3kvLyHQUwWDEgkh8QQdjpF7FD3FabT8iPqbiDrYWPvswng8qYawkxG",
  "key21": "rhhK1oHZTee6uLa5PvjJejozipmWYh3TvxmjY5dtiYYbMVLcGoXod3WaH7iZ8875ia2moXJzmoe5WcRSE2zsYiM",
  "key22": "37o78DHR52ZuW58RtvRvUHCEyCReS1KV23pXzphdU1HErFe2TRxxHF5zKJPUT1nPREkPVcv7ALXnUdJBWdSFP8nV",
  "key23": "uQFzuin8Mp9jruZCi7e2rYoCs2jsf6C3p3s6n5KeX6rngT8vrhAvvaTNRwrcHsmiiqC8WU6nKBSFUbFvHtHSqN7",
  "key24": "4VnKURiGeULz3BYedTbuaaMzdx51CWbTyKXg5oWr7pk2hVApYLiscSvVTtC8GHwTvcS5PYyQWmtgACRhoj1npKPU",
  "key25": "fJSKW22Ncqx24QgmtKQeiBrAgeGECJYz6pC78HStGs7k55Ztv3QYFx1paVHk4N1BTjutmVbY4iiZvyzcNCCZVHX",
  "key26": "3BQWaZfTQkG4CcsZwHMPXM8D4TEJMaYRhHbgH6KWLuXAi2ZwYawQMtdedVC7JWp7bUyDPEcRCu3FY86M8FWJpu6V",
  "key27": "4pj2qbjZF51YD5HahjWGfonGDTRbEpimt4XgRujgVQPWe1cMRb1Ddh6YKm6UtcxQPJwAVGCcPqF186Z8wPFG5QvE",
  "key28": "4sF3Lrz5bPqTtjCADtsY78YUhTVAd6xCYdu7uovUwhcmaBHpSjUykjvQbgoH4ExwQxkipyGnvvrWohWKtBTm89xZ",
  "key29": "3JWgEmt7PxtYzfKJGEcnhFQiZ2DWHHKoAMh25TezM9HtHbviZxej7xMZiAhVvfVNPaN3eNtbieASTxfkawSk8ubN",
  "key30": "4ydUyMby1hzEwHjGHbCk8eM48FeX92cWChNnH1rPFHwhQxGVJPGjC7dQJjC2ebM3THGb4nir9C5UQ7mcUbgu9zPK",
  "key31": "2qvh9cQQv9ZvjyqfrQ62QpAvXnoUvXWKj3XAG3GLfabrx9Vbmx1budjf1546etFyo3tJvGjtiRzoyr3AmkskfFK8",
  "key32": "NASLYiGxQnVTAQ1V9VED5fSxxB5gEwGapyG1pvRLdMBqZRHWDwheVYuqmgdvNjMKmW4cSk97SEiU1UCXsnUM6zs",
  "key33": "kJZh9C5BYcGDypVdBAPbACLz8XFSWHCcri3TkhMRDeiskQpGdQ8xHY8YaruBwtfUXs9DW5QcV6JZRYPMhMcGTLr",
  "key34": "3ZsBj16DAyzHWrKq2pod8LJTi5Q43d17gyPtZewpnSAmByRHqrx4Rbfv3JajNQFVDgNyY9zi9LYafy9FJUChrumP",
  "key35": "3VhXtLLTsFXEskniiHNMQ6WLaEsDaDFWppdN2onqNCVVeW1BHgoBAdjErmF6cpgBnPd16cRzgPehmB8rkhMYGgjZ",
  "key36": "2ppHeR41pAPm7QZ1J41xKTqsGP4CbyPKpyiNKMPUkbcQGRnTAQPNduLjfajh8yzGF9TaA1KPW3jHX5UY9uCLLkSh",
  "key37": "49sZvCbgEtGW2K6cvwLF28Bh8hSfUFEFQBpjkrgWnbRAD6v8zxNk2QZENvA63hwqHgkM3gVnoDAD6L3YSWQ8BQqr",
  "key38": "4oejjY2XBGtQua7SwHiKdzUPEgVvfcE7FsUG2yZnkX5rejcG9KZy15mvLcPJXvqBUbeBjTe3U7BxcTxSg7m2v2WN",
  "key39": "3sv4frrSD2NxuzY5aDDSJpBgrmZxN7swN2NAMjAwpmgWZfphVgQxQywEjipkSqDvW5fs53mMPadHdzp1PCW1LGka",
  "key40": "4qq7hhBjz5WywbtW53e4H6u1yyPUZNrHUjizihCRfDq2Xs18koKjtZvC4vDHqdF7mZUjkmqx7QgJubTx4eNG6xS8",
  "key41": "y9ErfdEiFrN6uLaRzBJwQjUEnh8Jg7UyXifG6EgYRi3vDJXrurGrEGMU5kPbFAQ6PXwcnRRr6PmKCzTkMaMungJ",
  "key42": "5W4Bh3rAARLMmucXVHKcdaVLGvZ7JppsrNiSFvkknvZnQ16XpLA4LADLvYET4kLaGoNbYmYMQaLPTEtWrBaApTW6"
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
