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
    "3CcNFtJo3VqB7E5YB6MwdEeBc4sKRQ4X75XtEMDEbAPrhr5WZwJxMn2dWaor8m1GsBY2vzbirekVkLt6h9W3G1bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fd9vn9kScdmKxDf9aecAso5eLAPwVN8Bh3ERVEihZmsmfrKTnDjCzc6D7JoEUYdcyHnpjnwjGjvhagUMLHz5KK4",
  "key1": "5DRK6Z9nu1PamL7sPjzwas17LdPdEaU3yZ2oAjuSNJCCpv8ar8jh76mCRDvhUpATcpbhgwnpywbgdrEse7tZybKS",
  "key2": "Q6vnw1dPEhbZC5WsWp732at7Zis53eMooc6hpsRHYWgJkYMiik1EjeZGiHpAjckbXxnC1g3Vj7XDA1SdRd5rTSn",
  "key3": "4gKEonCcCTNmGoPnbpe51W917oBwx4cbTcwBC1y4xz87tFcE1NCW8KL8fanFcvP8ZpG8vwzuMvNWiHzcr6tTf88D",
  "key4": "3pteH68vS2kFy47HEc4Pkvrfaa4nPqFHV9CGx6R2wwERGNFaTtQK9xmxQxXMafTwgEMYqp6WCNDtxfvnnDSAPEsH",
  "key5": "39ZCpv8XKYNkfvAtto2V1GG5RnLcjQzt7ZZXqGfh2GkoGj7bHJ3FjDnBZvbMmGLNj5iucMkDRGoFsmmnEUpELi4u",
  "key6": "4KJxkdu3yAzQezZ4MN56yTBSLaTxuWhpaj1Z8ujgAPJWQ9oVPbS8o6aWSm1ikRh8gvSfsAUDGtNFVDBPvWV5dWxX",
  "key7": "5ityPGwfcCQQUWjh4Xvhkzsf8cx3AjVbmZ9xiNaMtcurhnFgytPhvurN71Prp93di7XEjuAuLqnb2v96FU6YdTk6",
  "key8": "4HsZnoPvgj9ssfzmYQ1dVeWdxfTxh1RKbwFpjsK1rzZpRw1CGGXKJLd9qtGvzDaYjA95Sd2Y4q8bbzxAW2mgENWg",
  "key9": "5KFcQ9APK7dRPtFJYQ7cyzSEPr1ZSW1cuFGLHTJ6C5BKs5J8CEhu8kL1jx3iZysAvCsYUuAzy3HyEZciL8WL4yN",
  "key10": "EHRyRCfbC1RK43Rx5rzekhDEqoMJ5LjP1y8XoUYcBfxzVVxBiazzKCTo3rRuA4arGvxyadFVE9JLPN5jD7fcNPL",
  "key11": "2xb5nnNiCxiqTBb564ThjcjuwL6bavZh9dnWyvF5xt7YqsWekcQp9oRuzFxCPMTa7EueNvkdUsnkNoRyq57EQa9J",
  "key12": "3ZroWEfsgnpPVDMZE4woiw8JYdvC3NaYC3iLwTeWAgWuM5FJReqLZxMF5kpUJ9qvRJsDNd3axwKL1svua96hVfWy",
  "key13": "4XgtFJzpno8aa78xBDvqjPkgYZNApM9duVTGHJgY3kGjyvGKQaxBWk8BNArV3Zp8D1VXugh9URfPjKAUcaxgCZaF",
  "key14": "3K97LKcgKLELgC9qxKnhZ1JBN9z5svNkf4cTuoAHcYB6zdVrtcy5Efyx2AoC9uCowpqTTPruC6vFoHSJh74QKrR9",
  "key15": "2bDvG5fJhYFt96gU9vVPJM26renoyKmwPzRq11ewmf3LD5839w8uifwm56Jzc5UxfH3nQutqVHScCsvkLHChmj9T",
  "key16": "hDfRDybiGphRzgPC1hFxJeoTciupvTMtUcCke9BiVY7YQnwmF5cnjHCoNbYtpWkZ4kwktysDtob83hr1Upz47BC",
  "key17": "QGaaVU67gADGbBgoW4ukffzxxb9soP3WSBQVc3cYpyUjnv5c4mR2qBkFoUrAqA9nVLaaGNRpVqj3v5verLcP8Mc",
  "key18": "5vgSBe4S983kYx5gMqBmZZgdtdKj6PMwBtnd8xoN4ok6PX2N45qHUfsjCEg4PGwbru63A4dMe1siQQhCwEhpsthT",
  "key19": "o7SZHCumDnYWGAdkEMMDKxTyc26Dr6GpLNqE4SYhjBVJTWswGko8JeWhoDSqDrBjZkS4XCTTgDVMySqECKr9gru",
  "key20": "4BUdP9nWbWDvrD9Qsy4MENtKv88BB2hDhSBH9Be8UMTdLYeRoUsHLYCuRT1H8gSwA77nRSntLXXST1WiHr7rbkD7",
  "key21": "3iKL94ietyQyYtv51qH4srJ33xB47efqsqqRRRcr5UHcFfLX7qqkWPpDxtfqRSTP2bbEeKP1kSAkBrmduYbRHb1S",
  "key22": "34KMc13u4S6rG5bL5KGqvf4p9nDmYGXZEm4zcqRJYMtt9E5AnnrwshM65dW7uSwYXKt28iFeeAnKom3rJ6d2c6tr",
  "key23": "4N19Bj4TzLsYuJGnUoDprRePyCfN7HXDyRevbSzUGmQkxFEnBtvV7ExKJFsCwSZib6RFDgEDdcF9RrGSd4mjpnQV",
  "key24": "2kBxsuNK5Sms45U28SevtZuELoNDKRH2fGbGLdYRmYijJ8fSWr2qxWQJ6LW7WwagtE6HiQ2Pvi9NmQ35nFQqpQaS",
  "key25": "8kWu7wpLup5KnqZmA8r2gdT8beSegYZLzYgyC7UkDtDbnbYSgAaHr2JNXDtZqiXcrjWEr9LwG5dknSPvY6euY5Q",
  "key26": "Pe7FH4YLeS3EAsqpyxWeGUuof6v8h689ESr8ufxYZT9JBXML9ckQa4EvEW9B8XJ7EzmEDJ1U3KqfanRufBX7TQf",
  "key27": "2wUVZ89UdTzQF2ZvWssoBP8uLjHpfpdTXv3VfjXjDXLEt8cQFFnMXGwVjKmviPdm23mGY3uZQYctTJ7XDzzTjSQu",
  "key28": "3uUxaX3yuTgCKVHFwiGdyx5YDawnJz1SHu7aJqNShiN8CwNno52pPXiE9E6cEyDSHQyMgiwYeB8sGWuVYvAzTPKC",
  "key29": "4H4LJChkx9BvQdWwv1dUFTx5tq5NJCuGHBiJbJ2v5imSRSKU65vHuXKijEX9WUBp2KSC8dykyU66NsGpLmkG7Kau"
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
