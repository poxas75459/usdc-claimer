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
    "4u8v2zMMF4eFBHbVEWcmaPj7QeC138hQwYbLkdxbR2gsGmoiRaWh3GveH7U3tcwW4KhdH6Xwq3WgyRN64oKMej7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcH1MwZ7vx7GEmZX1HEAsh4SScRjenarv19gtR21Qbue2CqoReVnTwd2UVU8ZAcVJ4DYS6LZ6js5LPdZUkGFGwn",
  "key1": "4KJ7Zzx8vpEVPSmsmgj1f5AA4V5w16U3dkEcAFT1YywqztqZXAG8ancYHaiee8H3KmNutiLxHZkJPKLCLpKtjXfX",
  "key2": "jvh8yPcvvUtjuWHi56jxM94b4NACrjr1rTG1zQAXfEFsk4A2ryj3kyNXJd4pPqCxgms26ZcD3SFLqxo6DLpkPs3",
  "key3": "jz2mixQ2XXCmfc4uJWwkUtzr9UAj5G41DjsVuMXQ6D7DphbHWHEmbLeKk6Ye79xdzoC95Cv9hBg6fD7BhiKJn7v",
  "key4": "41WCxPXazEmpZrv5sGVU1iGMfa9SF4UkbFUzYMeZNsWjBq6T8r1VjFhw97ALPTWRzEzDa18bDQCCB6HHxPAbsK9W",
  "key5": "4pmZNcjD3Sa7GG5CCwtQjaERYuXscJkkeMmELPB3ETuCTtVzSxfzn2CyjVD9ZqWfjUuKRSEFanwvByFcCCWxxzX7",
  "key6": "5jXRJMjsosDRr2cCBKWf3rUrHukr1iTfaMWxfwT4EYRZAEHhtHWazyzLsvP5kUDp1uHjfwuht2SXmPbgwYjwKNWr",
  "key7": "28XeW8hexBagvYqrs5cubANTJXvWmNnLdgaN7WhrBS2s3kTdKfLc6SxrxypCogJnYTG1zXgjE3n5eBmgRXSmc8rj",
  "key8": "4dubqSwbvDATAYCpy3D28Xrc7iPE5rwGYkbSiZt6MJK9GJCNXRyzXPN86CJi3VNCgz5Pie41wrJrhBYza4HrCuvw",
  "key9": "5vpSoSJHBa4KewZJzwhJ9qEAUFTzjNhRJtFMpWvtfThpSVSNUxTG7vLmCFPUA5s933yDq4yuLv2kH7FRt8Fwk5xc",
  "key10": "tiS8KuZKbjZYVs6pgELdsZzdWyDkzna5c9AUxBChEqGoahCw8NAZMeNyrNkuFaPmntCrfjiexGcoJoYPzBHAYGT",
  "key11": "KL5tBwALeeFFdqoXmRr27nvc7XZJTymPy8nReCa25iSWeMseVXn8vrnqbTnvonmFEexk2PBus6ZzvikD27jMUX1",
  "key12": "2X9QSJPmzUgrEhgjAjHXRaos2XVdwV9CKf2rEpL44ydC2otP6V5n8hc6NmZuqspLDnUSgZHFzms7rN1UMyEN7A2M",
  "key13": "33RawT7VeHag923vCm1mHX7uHSqhDNpkraFRezPnJjCarf2GjpZqht6QKSzGVpbnJjAahcuUJFyrdaQCGdeSR6vo",
  "key14": "25xoKBFoSuNq1XEqLH6XYP1N2qRPdxKqS4svxtKu7MTm8aUcbkRupURQv7Dg1Fc28pxN6wDzvYFYrMuwL4J2mtek",
  "key15": "2PnriXbd6NehfP66mg9TqVECVZwG52DLaQj2qKYrYKvibUHPaNbd3UHotPzDYjDXNfszwRdoKkVq2VvjtJUcbkGn",
  "key16": "3xFTxzHhCdb35MFGryFVhqRimkNaUtLSKPzGL44wphxa8SyCU7a69JtHE8EgnnpmrgheBoxFKooPwPRTW21CmiWa",
  "key17": "5sDUtvC2Luj2gbAoK1yZETuCR674T7jfnZsoW7M1tmVru9HTDGWVb5nNissUnDcsQUH4AdYtBVN5vChjQ79VeRjt",
  "key18": "2PYHPbSvwymjauETRZZxzqd8CwStZub5vMurMKkDq75uZc4cNgoLgcBpHZKiQVsHEgdDUKa7e2mUgCaWr2kV7Gb3",
  "key19": "jS3YSRi4nqns4NqPoSvQrUN1NZvUbhdMkDDwQmssqDGpCydPDs1BAsEt8xpWRsbMQGmyiyenDJ4AothnX2XvcSd",
  "key20": "LzkmUm8HtKkHkzc2wUBznbfq1T9imNoyRBPeqMcjKSwCTsiAvF4WSjxRAh87a12VGCk8aJbpUGCi31dbpJNYwTD",
  "key21": "L9Vbp5mfFi7FfQRkbaUTugZYEdtpHQbiVzpxwQ9sjJ4fg9EH1jcbbbU95PEeLCgJARFrqkWXDve5bb8e5bz4QA3",
  "key22": "3ZmjV7zT275hkUZqRiwacGXZPryGvTuTdS4z5WPHxjmrfC6V1gfgZ9uMV5vqvB6zZRNYhiTqWeDxPxnQnds1QVcG",
  "key23": "24Ht8GPh12WiSHrSTCFdcjGDdrFV12R3D6ELXwY2gqmZJQksornddMxECc53nkHQNVUnDUryJ8DZaTtm8X6y1xCf",
  "key24": "48BTzXUarKTV2mM8DMQAWiJymmSNaGQYGrcieQGGW9Wfp22hFMULReqUWNCERfdibNh8kJHy8CW97TK43aXbRKgf",
  "key25": "5z86poS9DyPcGCQzQjQYzZCoapPtSrinacmJ25nsdhnSRkt8PPxMTzN9FmQcp11VJJVtpyeXfRxanhkhY6hxMjhg",
  "key26": "2yQbGQg7X5fmebAJ2MxJqBrFLbJPWUiPJbbXTWkq8NDbPfi6xwBPwE3TNsa8SksZPSDtsUStsz75bg4R2qUb4fUF",
  "key27": "UTavywmbbVW8eZ4qNn7EYujHuBVjwe9CNSukBsV8MiWZCnsiSkuxaNmWnpxQyCqpL7RqPhSRSe1oQTLn9mCTHgy",
  "key28": "5b99VoypYvuwxa9BYnFUXWYKoyhoXJ5usK6qG6kPm7uWgSsvFNNu7CACEakHmFYeLtMBLGdn5uDrT9x5FShF6Kht"
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
