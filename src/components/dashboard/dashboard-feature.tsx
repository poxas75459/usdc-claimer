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
    "2ujid63FHRRzSQVZFp4GRu1Kimr7kTYDVr3hUHidVob5F6bTUKNdJpHahPRHUWDzb6TXCGg2P3apEefNwJdXpvEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRWYj8XfjLTfsPDfZKCZxzGeksUTAkr6kr4riQ6Cks9HHr3ajvksEtwnaNK1E3VA56TZwvHrTYEYXHCbT2oR8tb",
  "key1": "5HNwz8SnkRT3T4Wd5kmWAH8jkDuAJmj2QrusXaioiGzJPWvG6yNmnftmko8GWnTeph9tNsxLmqN6rB5SnoLosZ37",
  "key2": "2B6ZztLXi8yTFVV8EPsZFgGEntXQEfsowUFuSDTdLv2MJSxuu2jh5pLkt7t35sbP53SitADNMjhQdigcYpbGpcp8",
  "key3": "hQm9nzD3cxHuuT4GSV2WE2whG3m1JxjZC1iSHHrY2vn5eHX162N7dZy98GReZFok4frYjQ2FodqvF1TPyDfV715",
  "key4": "2iNcbh1YCzzWa7kDxScGP8vZG6czaJLCVqgeqXRUmWqCxpEn2N6EqPywKk7JnX9oygAtFUfTfFS9aNCzahyMva4n",
  "key5": "58khxzbMHyZEqJMoQSrq5CWUPxSgp37y8Bq7XX4vG8WrgRkfuaFpdQeDsEe2BQS7XuSenTgRVrRGtEx2WTxfo4ks",
  "key6": "4F5H2n14zHebdbgYegpswbdQvizA4HcTUyHAMrBWeZ7iDr8eZ7CLVc8StkXyPJdqTxdMD5jMMpYPBwF9K3CHZtd2",
  "key7": "23mWEE25iPmcEBwweGwodnFJnhMfNHgT1AFyuEaEr3rVHT7RhbBMQoJDKzs3jnoSHkuXBqWSCYPTtJYfaX3pbNZ4",
  "key8": "P1VvvEn16ijsKNjJQuvhkUYUuvjkfkhqhGRq8q2JZuGG21UWxgQnNfzw4oTkADtqw2CHVULTz1ztg5RNNtYkm18",
  "key9": "5rhzp6ctxb53d8Swe2bnKix812HnY84u9U47MV9K5juqQqF8i3Y9Pk7QukfyvSdoxwnG7JzQFg2jKraCeAeKQcB2",
  "key10": "4gAJ1ymXsy7Y9H6ghgb8tEscPMyRsqUCGRQGzHT6XMkKpMD76X3ZBYrg6RtLb8ohugNRf6n6eimc2wt9wFvmzNhr",
  "key11": "LMN4s7T9eAMgehnQeNBJkB7GqLoayY8d7quMC3Et6yNqX3GyxEvLZpcLpW7DK9dPwgXohXMZVDWgt396mBfFG9Z",
  "key12": "23mDDgmx7DEBBkL2qV1EkvtwCuZaNYpbRmigaR8DxVeNvtRWJ4tQyxBBqyfDqcg5qpRGQidTKgARHFyDjitXaF6f",
  "key13": "5fXTXf5Z8hoKRUR2Pea3qiawKCez2yqUTyAGVMckMwoea4MhqJ8mxzjPDfNENMPm9JDoH2GEMDmww7DUxcjSrj54",
  "key14": "2ZEFG8Rgm1qVjUMqnj5u5o43WXuiEwFymSZ9ecagERTcRRBxk2kKzHKXebnTLCYGrhQrHHK1PcsTwU4btBkbqeNT",
  "key15": "3M6YC7d2kmtyNZYr3ahsYuEk4huxmFPjR3Xd6J1eVahzj9Anz3CgQzfnYAL4J3nP7kE5qm3hJiogXYEdaxN5dpNJ",
  "key16": "49cpZfjccHbtU3bewcyrgQ5NmNUasYCz4Abd2vJ73MRKGB261CgsJ5DheMhmMYUuJpdMykvBenSxqWNM41SWsMK8",
  "key17": "5xoCeiJM49h5NNoLR8qfnbPp6qzNipfwGWZe85XCh2r19m1RreebZj5VfwTv2JNZ1N58KxTwTtDBoisrWhnCZxqn",
  "key18": "4zQTHRWZ4L22LFMmVSYnHdz7bS9QVsA6CncRGrJpQduRQARzUTMLJKZhWLKQhmjwjM7zgDJG8VEPrMYPBU2okZ1k",
  "key19": "33KxkdEggxN3rvbJn63bBp5B7AKWhJnoNkJDoxnEzqpfnpHxAyzv6aqZ8Uht7ZbgQQ24i2nLC8wEv7etw9J4xsXP",
  "key20": "5cAFrAVQLQ4NhpMPXwexZfsw8wZRLcVqWPp6p4uRmfHU7zXzrK2WQRr9v3e8L5khpkNWWYNuNEqvcDuW4pGVcjWp",
  "key21": "41rJeYWKhU2dZ8YiJfpdD9yMN5a96c9Q5Qe1AV7udjHa1Fm4Fzh5PWwvd7uRRf2rYCsxDR7z6x4Ak4qpihMLRPPG",
  "key22": "4P7Jpg2zZ82x2re67UCfuWXxHMV4x8ktRrc1QjRdw6WyegNYuf4Y6YAGxLsyCQ85yTXQjxKiESNXLG1donj1aibE",
  "key23": "4GpgXHugrvP5xeYbpVNAPqQwDxHCJMBoeucffUapcBzu6s3ByDMBK7hLQ6LiNmFbiF1p8X8i4ioVhFVBZDtKfWrm",
  "key24": "4vxhc9TUmeNMv7vnPpahqx1X2TyQ9MZWNd2zjzKgDgjKBJ5EmqbYpbqe8eY2btL7EZ47WsA1YAg22FG2KB97rPy7",
  "key25": "3KQV2UJvbEa6tLh2wWqx4GyLxqomZwjpm6dtdNJhaYdHj4kBP61EgyWvTN3t8wRkvwePLn85hkeY7XbrHEp1qago",
  "key26": "46V4n8vUcVSvHNouV98EpGBpgaNgvRqotWCBPESgaLzWrdqhXGfhWYTDN2MDC7yWjR3s72pmFpUUkFoH1gs91yo8",
  "key27": "66ETBwt4fQR7tKGvscdAw34cgukxGKfqhnfYEbVnqZ3TgqmKSYBQmbWXvKPHx3ESxA4VFr3Zjg32zqrYYZyJNKZ6",
  "key28": "2MYuW2Upnn6dm2XJJSfQdS1dmXv548eRocPNxCusUJzB8LeAVNnjuvWY7gihEw2CQ5ZZPSywXBNxwGMmJJmU2Z7F",
  "key29": "obJFu4Vnv7yLiXvZYuuYfb23EH2Lo8F1WfHLJaUQs1MpCTcvoCKU7oEmnE9ffmZHs3L6o38owrQnpNd4dsA84Hk",
  "key30": "3oG21rh4ZaHj3TZhNUKYedzEksvfU7umAujhFQ5yHWyMBVXHa4yak5HudZiD9HSQhTGsWeN29Ci6CCYQh6xbQKNk",
  "key31": "5tUbGdRgpqq9XX5LyQ89FoTpRvedHGVKK4dxKnic9P1FszkyjDFJ8khQpUrhAymaPmsvReBFuGbhtMJKk17i8X1M",
  "key32": "3EGktc9RN4B3FnWkDv5vGTd4yjsLQAhbeuD5qyF9wduYi7mtZnZhmWN9cE9Bth2GBvbJft337Vh69s1jDYSc4NNN",
  "key33": "2FPxifFvBifJyL8pzuupWR8F3CRJg1Q8fJB8HgGvKw4F1N6wfQxFxizqoCzAXqpGRuVYGfhokAos9bMtmP4NzvP6",
  "key34": "3S8HBqJaQeweBEW7Zds6mJoUnfJa2KNG649vF3TsWzvYzNgWC9HjMVG15eATVyytoazVshTKWCjSaaNvEPJgYJ6J",
  "key35": "3sGFsrdp8uE6exQQmBcfMwr21qvjz8GCmw4Z7DJsuk5vvFGuDhkxufo7aQwYZVnHyqQFUb8zSKwoUE4AAd6GciUv",
  "key36": "3Zx2wjzucXw417bDWEKHmFPFqMJH4ou1Rx3GSro5Ur3GtFxh72Y6i3bcSKdGA1YCvXpeqGK6oiJX1RdZWFHXU4Nw",
  "key37": "N54EBLjj93d1kZgseJPPPs17T5DB7yjq2Z2TJPrDvgPKxC56jo1hU9LH9w3vYZq7fBNxBh9AvVudAgSNTCo1PkR",
  "key38": "o7hzfa3DwU1JgQ87ur2AhPW51RNb6sXsReoGMnsVpJT2q4cEu3f5RgdMzM6g7GJydXcBio1V71jJpKEb1byUBmQ",
  "key39": "2GgtRvELgG3oT5PvkMG6NRdr9MpqM4j8yUfppq9RHaGF7TyQ52F8dC49P3uRyhAoHwAKFEhoEuZrN947iT4fZJAP",
  "key40": "6fJEYuuetivNinWoL3eUFUQd9YkSZKwtMM3rfTGXcCE491NoEhwxVx4kzWVqW42ByWG8LhuynbXn6g4vDMmmhqL",
  "key41": "2ktNFNM4m4VLBM4i8QgKZoPsLX7tQWjh9meuNZ6mc3SUo6EN3F7QooXSjR5thTNcXvZNisaGo5xmsA73AEJy483d",
  "key42": "4usbQMcXVxcioFzxNzLPxBf6JD8Xdphmm7evLqixnpFkkFNzfFo7PXDTm5qa8yWa8FEC2t55QdRf8ZF76dKUy3SP",
  "key43": "28e8T844nkmstWHpcUEKC2wi1i5p1Tk3y1LfDS6ezNU6sWm4M6GDU7zSuuZrRPrErjpSiCy8XWCk2MQ2faYJWmmH",
  "key44": "2E5rhtd9R666KGwrUE9yHAm9mPtNgjdQjczRFTYqVQBkUWpYYjvZaicGpC3S2FbNYhbdrGjiyjnYm2CM6yh7heH6",
  "key45": "3Rx3PUCibpWRb3WW4owyuoG4V5nhGYgRx8bG9TZY5XDPVzA4KcrQQawRu5yBr6Ef41FDnEpMSFEBjtCJ93E5dfNA",
  "key46": "2NRLn8cyfR19wMfagNTJRhUswpr2JdiKviS2q9t94S18a93UcRZ62hD6ZWdWXykZa1M5puTjz67cyhicorYb2YUv"
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
