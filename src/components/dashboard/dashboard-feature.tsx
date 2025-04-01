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
    "RSS9bEVLiooqVwYeHr9rRy56orsY39Gotj4WwccUnucrXwxQLGViE9e4QUEpYcAztSCXX36GT8sD4oRXjAVVeJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qkh1Jqh4vEywsZQSrNiQoRTav1T8AbS3KKd61UHrkBoS17sbSBeE1HKNW8kfLWHtkQ2cd3divdegyXoaufPEYVy",
  "key1": "5xCsS6dmxgTVMKkXGQPNLu262a7cymo5DVXtg33boi525xsrXR5pR9V8mGvLdoTtnmXNqX5Qz519LKZBm719moVh",
  "key2": "9yX6mcddh283ZV4xd1zgpd77CwrPynuPiJnTQbk6XvWjhX4NhSw34cGvqAyLgy4L9cH47FwaZqVTzVEPK7fzp6z",
  "key3": "5frd7qSKJ16fRfW7Pnhevdf87gwN8zQeWMjGKnUR5eTrz9ssU8WNCnFDDzLfFUw13Qx9DNW4y6LZq1kNpKZtGcDn",
  "key4": "3SLttmtGW3PK6j8X1kiBWWqCCHtUC8aBjmJ7RGqqp6n1GQrMJEFiFG64dttpE4huyzLJ7sLheB2HvCfUR99MKcEP",
  "key5": "DNF24EZLuc4iBVHyBMkk1i3aGfgPXc57cK6s95ZNG8sd75zKjjumGoY8YVmgiF7fqgbkr3xLoaYaQM6zsdQ9QDt",
  "key6": "3yznSwaT8tdwFnWYbBbBXtQ9AAjfDE4A5G1Ee6HMugqqT4CEEd6nndKsEci1nLSnSMtcbbwbGUdYd92EPvBrqcDM",
  "key7": "4LyRNbrQBxZrnZSZ1mxvp8HzLHuzAXmowC8n2wktyjQRcep3XvoUy36YWfqwTzPELdtHFmq9xrhkTWrYqmCgEW9Q",
  "key8": "3Z4bVHy5qAVyF51LgmevPLVy4G84M2GM7UJhZErXStG9UMU1QBKZeioH7QUbrodxayX3DGS3rYQ6tVdPfVV63JAM",
  "key9": "2o3EzbQ4C8GhsyQwUMsxB8598eDsfRsDbrxCGxbySGbCBwkyhZEAKgqMjPRh1CnBk1W9psYcXk9Ut5Se2ZetLA6r",
  "key10": "4keY4GnRZJuUvgDUNJH1m5WMaSVzwhAmq8KtausvY5yJjyA5JDuwj6jW355MSLGruieiS35siTFmbFwSE3fFtTX3",
  "key11": "4peCbWaiJCaXiENjqVtQS83zNbm4jU5eQZzzumineswYnMLRsok1WyHqBR95gZTrZSeTupSaAJSm6WKWySyW252t",
  "key12": "3FT3RN8EvXirD66CBzkV3dbmbvZNqaJHxQWkzZXZmRmRr5GUsFcXnp2nSQarHDU9D7U4oNj7MrXiJcixnkzzzSvR",
  "key13": "5d2dpyDH83J6eahArPmPFUm7oMdKtQMLC66eFbUXFBH4s9NtbP3fX2af1FEuy7xZ41nAGpJPnfBe3NRW3amypwXK",
  "key14": "3zQxENV3xJ4HprG1xmwPNjLxtkWYJzqeTiEfkTURefn7nqqY1aXL5n97qG4ZG7DzoUxkHosQVbjGHTndFXVmhP4L",
  "key15": "51tGVwRKa8wrfo8c73oafQP9KUYbFaQFfdvWoszDKB5wJhyAJYWik98MEtsbVTVQvwryp6oUHKn2EDm8o43Gc4jM",
  "key16": "3mNBmn9pKt2jbbMGvJesYm6WthG6qhZpSMJky4eS8ycZUTfqQV7w71ksAurm4RHUmrXwj8TxJiP7ZtfbAXixyPgg",
  "key17": "3RgbqpmYnZsVwKY6CpkCr8DhJeegnATiv58mpMj3bBf8zcid8yTBMZWEtkSjg5FSmGTjjTNSBYChhBbBvnxhrCYR",
  "key18": "5qoU5vtaxfJxLGvc8tKnqPG5v7DTxBJSBUZUudZTDNaeuncAJwrHGqTorDtWjLv1kyfc4GXn4vxq1GbRbEv29nrY",
  "key19": "38moM7fJy9v3uZXPkVL4L4xGXnvfwx5GFdBVn8JvD8k3YpW36sPA8oi4q5nWiURBwzFWtyBQTx4gipNmJBttbPq7",
  "key20": "5uMFpp5K5jpwWvguDE7Ed29723wS3sdLooVDwyZcFwFRAeGCeYtXtfMmRA4tuMPyjB2M9pKC2Ur2XVicxXc7ytSM",
  "key21": "4XpzqCfjHEEMFHUEj21RHLzU5CDk9GVdy5fd2bxFvkXBcXE1TXYJTimX7nDVFKennFFfKHatJWfKQHu9s9Xr8Ng6",
  "key22": "2G9peeD1tDXbffevW15RetNJ6sMrdFfSPfAx3koKnjM9QUkoiuZb3RQJ1YHyDHduQPv1vshTVZA4bupg5Hpz3xQW",
  "key23": "5NTv24SYUseKi7pbYHNLa9cAJ2DnyJrrMoum4k5vEipF1eiXEP2gfiEQgDVRR21cFVFz7jvaUAx9vw2pwMQ4Jre",
  "key24": "2yjeJfedpzTtwQa2qTGJ2zGGWrbuG2wVNJPDzRAvzTTDXykaak56GP7iRH6VmrxAFgNbkt4EhNUam3uSGaAph85G",
  "key25": "rRKDzN234ieqHiXVjdLQdrMaKFNsGS34VfWvDSn634RN47xp2dQeTQfZGVzzniYSX1xSLJkwYBDtJ2cQwZjcLGG"
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
