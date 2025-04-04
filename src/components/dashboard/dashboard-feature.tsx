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
    "5nwJMQFibCkvWNmbSf94m3Xfu9d51ku7yEHypE9zoAciwnF5imtyKtjJgiRc7oyrMbUXvapvqrUHM2cwRCj93AkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHvzaKM7nZsZXoY8JaSwdTFNnjPq9aiih5zMjD2qsPNKNyGXzYJdboLEiFPfLwzKmSnyjTtui16EMXnEMqffVJg",
  "key1": "3ykBXnCNX1UZnsCsYvc1NU6Y6CDtAFTmxnqsByfj1wcr9mU1BuTL8MpzGVTcsjEDD6RPpQx7qagQzAMTZsegDh5p",
  "key2": "3CoeCznjLJSgh4wWJ7kdvKSWLcvdcR9YTVUWnHH462Bkbr4pKzgRJ3s88yFLjNA666EjqnmqLTZV6z4Wkbyhope6",
  "key3": "4RGvjvWC9TYRiksuvXgKZyM96JZ8yP9FbiR6xU3QA78tcRHmZQ6B5PbH8Q7tHCKBBRbPFJryhkG6zA3pfLgrYAfJ",
  "key4": "2dD4wo7n6MZzJFNohqqnyHFZxHFCFPWtsaRxTse5iJTYCgovxppbNCKdevC2wpf5JeWKt62BaYzXCXAsv3aTW5aG",
  "key5": "2pegUtubfi2yjU6r9WTdhAvbPRhPLqopx2QdkEvN8pFgKMEwRjnkuJivJEdSY5TZaECZgdbRotpEFH2U1WH1VEAd",
  "key6": "4LiR8sggspxnbd6KKAtqCAtCKcXAUakc3iTB8StFp2K3ayXaEzJ4a7dU6LhtE4yHQEcGPxXHNmHvgMGHg8njDyDh",
  "key7": "25N8Jh5ioFtcEafih8Qu6jeUGvWwpaXZcqZ5QnXZ1uH7odSPUVv5b86nZkA5GCoQucFpzQrBA1PhK1k6Kc9D6qui",
  "key8": "3cB8KYPucyekY9CG5Rc7tPXspv1KPBTJaS2LU5JkM6rN4GYopdCPXtxxsZoa2jAt247uDuk1WTGDQLQL8U1gJB6D",
  "key9": "67e56mCAKRpTS5cARKzA3ermgoRDF4ytwaScXXmvszq5PVumyQdC5QXCVBC9D1VwnNbDjPaCr9WouPjXHqFzBcYw",
  "key10": "2inAcZgWowCfsfy2m4DSXtpCkuup4iEpmNt7k6xaerZUuVGrqpxRNpXCSMi7w4yckSH8h3jDxRDVEj3nintHTPhU",
  "key11": "5VhpMZmG1HCNEQubq52Bj7nHgxYsPumeRYP52ajGjH5roFhoQwnt7AKMMsJAayCKUmi6HyghD82bdUuvTe8RkXrE",
  "key12": "gPGDKhANNQrFN359AfGvMT7xBUAi2dVVLwXDaB8fVMVtndmAaMb8NiLJ6xfWscc665xtPPn6DNHKP9vJybU9AYr",
  "key13": "5mQf7RXu7QDXynYie1gxX4YhDQXJQj52yJvaFDQhPfcaS1xUGhvYkUh4s2dbDm1N5efZKnGfGP9AYEMzDow5PRao",
  "key14": "62hxk42GFSQ2sUvSLwUysdadqCmBoLw2XwYgTi1QBzdBJkHU1UNG2cnCc71pGcbUFuDtq7D3mMVnM2xkhXK5yX3E",
  "key15": "3BUs32VQ28QquA6GjXnCdmDB1BdYek3F3X4UFAaxrFhYUajZRPiU446E4qHx6aTDuvTh5LELaFgYGmvV9vjRztPU",
  "key16": "2G2hBPzSBCPdZ5xG5Nt3FuvQAgH33o89yzXF6cXHUhbhRnDE1A6fMa5cHi5n96TbbQeRmAnMxBHeHdZLEme8MBsY",
  "key17": "4fkcQBeUsdG1F78cZhxmsyiBnanHH4VrJRxeCSWWMDKsHEncGJgeBq35yR7UkYit5jUpn5dGq5fkQcbkf1hiHCSN",
  "key18": "4RjjGaJDktcgKtfHLfJvjggq7NMxnukoqCiMFzRY1mYHc7ANaH9xgrah7QfCuFFEx8DguErBCZocnPKgYymXvBy5",
  "key19": "4wyw4Ajt7Wvzgv7uynAzT8RLAC4q4wLzuooDw9ArVN3BnTDTLKUTuThhuC47yoViEL733CFT9fqs765oPy7JmZ5H",
  "key20": "RtpiiC2rHfRHxqxKSeqrYYP6QWRC8GgAAXoW2EiLSeob5tcmRYQAYGRLyUGfRhpZJhjsgge99PMcgfZegvhJcab",
  "key21": "5Wff1USZ27ws2QCvbhY8NDEPRx3m2M3zuP7g3ZBAkQz5SWigD9tUnAFUyWJTtzqeuPMbiWLNW3RUgwtDFNc6qfFC",
  "key22": "2qpD9DdyZHZYjkgVNJDkDREd1FJrt9TFUbEQpPzQHjct4FwgGpZodiUheF1q473k8ZCackz3zW23WVctkm4aboR7",
  "key23": "4a5JHJSzsYWYLj6rruVjZgjcLTF1naPEfPBjCQLwEkvU1TgWi2mMaMUjTZb1HSLJL7pFdCVhT3G5mjGAHR5Y6uQV",
  "key24": "KvNCBFWmRqjL2ekdXZe4rEb7AUyvpAgWrRXBSGgzeJTmp35W5Lf2ptqFiHJVgRE79pf5SJmZn4x72Wd9grWGeU9",
  "key25": "2UFS4mvp2y3Gx7TYc75UQdaQAMR9Xkdf7S15i7KDEwjr8bzm8UGZ4wiqUvUqCYQCfs6p2HADNHDoskEDM3bCQoMQ",
  "key26": "3YrnAVkExv6ef8EkMC7pKvZuSrWgm11SkspwxAE6XjDmwx9Gn9LBGEEWURtpg1RWiYiaGr2DpCjwkMtdRdFUHydV",
  "key27": "4ik2TjBFy9ekpump1qBjKTJLgJ4941XLWe97e7U37JLipS5tMPE6KEy4aJMkhBot81AKDmfhu7WKWr5dytp15VWs",
  "key28": "43LeuLPb2Vb33Bx7dy4ahdn54T8U5J4j7P3hpEzrcsckovjx4cQ7o1rEiLDbDc3wg3AUKKumXNvWgnSnBx7An9YC",
  "key29": "5XMuoZEL8ZEFa68bFpvdJ3pgcLmbNc3AurELNKnyW2M4GmT67o4LRwNJGvgWDSSevdNXYXQXerhx4HP9aeYZ8WDD",
  "key30": "4Qyso6eaxS9MZC1dWwMQMMPUF9wq5WotUcnU5ixZoueX7p9foPA3G26NoMYwVvUYkfGPPeBRcXueaXZNY6JWrWyy",
  "key31": "2buRebzM7qMvR9iRb6ydh5sC8Lf1YysBH7eUf2iWHR1cBzb2h3U3VJzNprcbCMV5bxdR8isfp522EX18wz8h7ys6",
  "key32": "612KhUJk8D9sbnDJHSGfAntnFjp8d6iqbDeWdcXTrWnKqfJYCoa69bxTwpqbW2Y9fCQX4w8jXU5bBFFti4wvywtZ",
  "key33": "NPv8WEpwz8yniw8BSS4qckZdxPFTBf5o3EaJKMHBN2SZyDU9KL3tTgyLcHWqhSWVvdUgcSz5Jjor84tfNRKBYtN",
  "key34": "p6fD54cG3mZhaJrrDdVnkbtCkV9Epb5rGLqmhuUsoUGu28SXP2moG2R9FEJpTJsM2h8ULZr6qipPeHHU9fQCxBc",
  "key35": "4zkHoeA8wwrCXhsy1vATmg8U59jXKHRyYxhAeq3FrMqNpWqi77KXxQ2DAYwJH3ry6yzcy2jFCiVrEQfJYVPmcL5i"
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
