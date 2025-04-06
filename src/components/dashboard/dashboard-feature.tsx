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
    "4RSJ1k5CC8RGGcsxYem1NqobkAt4ixdcwFLpM233MSLA1o7CjFGX2FsYqZD1xDY8MYNGySA1iwBUSEkTjSSQGPLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgXNxnvTfaedyP7T3uvnUy1KZDzaqKeRGsRDVA66kGsXzXZSYgZxmyf1eu3SXvdD5sxUTHiC4SfcgPBE6g8nSB7",
  "key1": "4C2JVPi25WNyYS3ea5PxswMBoZS2fj2huPgJkPAWA5b46bMrPBDytFYG8QjPHaeqjjVwzrMQz7goDTfKH6XdNrzV",
  "key2": "XxNZMnUHczJxqGiTTufoefeDr61mJMM5j4G2wn3dhbV3BhboV1naiWZCUwLD4T6TkpvVq7z9Eex9mgJ7qHU4QqN",
  "key3": "4oktsgnrVQBU6opLCXUiYxTFM4nDGuNW9hfJ77kQxEaMdpHBsuKidwdXzZCrAt9wkkoh4VHR9kdGJJU9XjTfUhvL",
  "key4": "5hhi2o1KYs8vNYopCp4xhQzivPVjBiWFpkBKFFoSgjekvsn6GmDYeYHiU7sZ18zsDH5WHceoNkfs9N36283BFs5K",
  "key5": "5xreoP2jHT8Nd3YZerJFiYLiuRvmDTVDCCuoC2jr9Bq64RioMSKJDKxHGA5LeduSYshbGfwUP5DtvjiomxRKXJGy",
  "key6": "5EaHtK4Fg4k5iASgAoRjXc8ZVp1xUA3DkSCL4cXsCj4JLeSXQ62r3GxUn7JLnc3HLgJfPdzNqY5bRbBkVp9dcPsD",
  "key7": "2G5qTsDhxgdZyKwJpEUNd6bEHCLQ4aSp4y9bvj6uzMckS71nz81iaWS43yZcnJMZmP4LNEnTzVmv15tSGkKRR5Mb",
  "key8": "zrozisre6CvZrbw5jkJZskv1U7tf525coQdqcaCR2LEEjrT9Brv8qh3UXxy4LaccwaKFyGKGhyVA4CePmSRNbHK",
  "key9": "3LzNZiYUiCtaGCTDq3fM5QDJZjjSgFinrZESxtEqznuF3AEhjCHM5v6ANfmw79kz6TGA8adWxqA8P8UXndqM7AZx",
  "key10": "4b2ceNeF8RM7VCiXBLSmdvSiwpUjJE9nZt1dXbgLQ3m4UayyUgrMDPLHz3Y9XS8usRX7hZantTbHEw9GcaRM9ibA",
  "key11": "5ceCeQArxkEbXLz7NqHY5CRmXBrPU3pYtqqzxf2pRynnkN2ch8GxMNDRnaw2MqLc6rCXdQbsFfBbZcyPSpw3L1jT",
  "key12": "XTKncE8rvw37qeRXmwmnRVGcLhiioU1sr4x374mameidiBB4j3sgWJfLjNZ6jWTiQG7kVRc1pufeEVtWsqnL7FB",
  "key13": "Dg3k9fwWCjPB1RpgN4sCh6QjjmxrHv5ddScfDhNv6kjap1afeeH5pmFBmGNzpEVW5oNExYVFqRwpxZQK6koDMfg",
  "key14": "dQMp7mWfyiRMRgu1aBpWwrfutkFT3muNkN8gaYbqH8an3nTEWmebjsTTQMMh3NKtF1A8bDBmaLAqFDDZ3a8YQ5D",
  "key15": "5YmBFPaeP1aeb9XuXqNzspTZ2uHJJ2mjZqEWi9bAAXbwcteGKU4ckCr7JBMxbPfs5XxzCZC9VrefcwPEDHxncuT1",
  "key16": "S6EbxYh2KJfXBswu4VnPoMUiYmYRr1r4TxYBNX9pVq4mw4sABSQwU5PfXWEfQRvKnuPXfGASqcCxiAfTLSSeRTa",
  "key17": "5M6tTKc3mYzcTqoiAe9cAhRT6R89JcGVX2Z7M7ALGxwS3qhSNCNwEJf3f4J3pjUAjm7fDr1kRYepoh9irwne2QmT",
  "key18": "3XZPPwLV5UZ4aBXAUyDybtT7rimb3RfoxiCgaEUEmjWu2BaFYq3v6ryjkpkhTepKHz57mtbHque3KW9gz7CqSe1i",
  "key19": "3Tr5hnjcNHrrBiX4zQzSmhyr4akpNtN4TLKPuV9KojXjq7LF6VpDf5bB1Dx44Hzkh3LtXfSXDnqguuBHDJkgzdHC",
  "key20": "5hJqRajzk9fNpKzgh2NzU2yAtUZfEU8GEba52UPuWj79rm7W6h3kFDQgdZZsQjJGxxM4daTxFphvJYsy2mLgEPLX",
  "key21": "22EGRquv7CyPGTP3AHAHyo3CiHc4wxbDMBdioiyChGqg9nsK5q7LZdfzQ3CGzERPpX2YCiCARLPihpYJiLxYDPft",
  "key22": "K3eNVXbyXyR8UKHcaSZzR1zQRsBoEZW1nKB7opCVMZRjgxArenaojhU6syox9bqb9Ue9aFLkSVDB9znybFWmMv8",
  "key23": "26QvHQS8AVsaGj5EvTBu5W9LYEa35AGPjEowbcPR42W5FbFJwmUFzSn1KbbVH2iSLAc4XevZV7dNHeZChFCxKniG",
  "key24": "5SaHRsPva5moMxgBG7b2PgyJ3XzuN2uisUwfSiinmjZBSamfA2vY2yUf37spUe12JmojLvcVgvVcGrNafwV5XUuA",
  "key25": "5hJAW1xZBJUTT2AvkV2EkwutskMmZwbEA1D2pf7PtPAvGvoohsRXUAcp8A2LsmcoNDgm8z4z8zhmf9Q6fuaEdQBy",
  "key26": "5ccsA4ZrucgkHUSkKY2irWYr2kLh4mUhg2sizXZNJ6mfLrSy2Vq4wAFJmGF7U1RzTDjDxet5ehXKqvNKbKHaEfSg",
  "key27": "2x2HxzkjrKuvNMWT2VCGcgKvkBUFGJtJ5ju1t4FsL3jMRkyxApbpjDaJSyL4GVdLrR6zGrTmquUZDujMdGfcv9gZ",
  "key28": "4vCcreP1wykMEBiJ6VZAcQSKA8WAzZeJHjjYvnv8fbKxZ3JyBjHs1M2xctjLgyTaBaakq91ABhWVdBvzSQggbcxv",
  "key29": "22FiuAk2DdNWCB3ZaRBrMRYxmdzrfrSNXSFXFrEHb3BnmF43t9b95EZteasN2vkTUBQvLUua6J6xnJAxcrms1niu",
  "key30": "4v52oT8rRqp3zKNnCsnXdYPDfzraqbqpL6hFMdmQQk4392GMCx1fkw8QC9YvNejxTW5GpZaptjJPTsuuFgAuWpEh",
  "key31": "5tbEaBC8QXp29TMsHHq4nTHJWk7H7H3euB6WxsY8L8e6mSMPBRnw4TApiGLu7bCMViXdFZHB3H63CBZt8DLz5dLb",
  "key32": "8JjZPbHhQMWJ4jaaQyvM8cYvjEXcbMVSw89qaHt89yUHfrLbzubXJWU6CCnDxCU7B6d9fbh8EkXyoK54C86tnVD",
  "key33": "5LEjD9gRMFQpa43UK1xdPSYLbAinQ98MuTgT2ZxyEfnoHXd8qRMsGMBvxHUeGczxKSAQqVKTKxtZJR5WpqPrw7gh",
  "key34": "A5G9YiV2zjqPtHVPa98ctPPRpMMA6cu1PTSSsF8qNNfKvebMczcPkFNgoNtNRhpT9h3CDH7mxHvv7f5z9P81ubs"
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
