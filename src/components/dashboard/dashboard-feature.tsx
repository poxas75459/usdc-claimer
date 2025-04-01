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
    "7cuQUQekmFYCpoJaw8yoVeaghcAp5nXPmzj8Xmzwbbm81D3TGezrwUrP2dAiVZy4kG8gnCvZMuvzVAVAVX5cYmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jfCgeqE11FXhnJ4JpYiLGXUKMc5woixQXcoKj9nwTShJRktWZ53MzRofehy2z2GXEr6yFRzBTdY4KwwMa5Egf3",
  "key1": "4C5W8aAsFTeNDdsnFD4UNYdvoFTrnR4omU2WLMJosxfRTwJYQ2KcyFHeWSNWHVFShTT9ik9vC4m8kmfK3wDPQF4X",
  "key2": "3a3bo3TqiZYETFR6BnPGAs3gogk5jGMnEE4WrqMRywH1NM9c69nzXb8xCqktaM3W5uqBnYF8wz3ak3e7gtJvYWbY",
  "key3": "3PXdNNCZ4NGRP7skGMo6qF4QicVfLRKcmeiAVitBjVxa46GLQcbntmMURAza1B6tEyEHCDMrcZGrcoaqNkjVJ8RE",
  "key4": "EdD7XvNq9SLV8CxiHVxixdfEzk8HrnEkSoDUczrhj5sH3CGPs4SPrMSUev9RcDSYdQXAgFGbC2Y8PF6e4PM7SyG",
  "key5": "8G9q2dDXv8xNxxP222EsNDkRmNoXqdaYc3bojPkqepWadt8dU9ofxV5Ke9vd2SvKKnQVARVoHMtBxysNzNvxaRo",
  "key6": "wxRbTbkdkKD718Ap7Woz3bu1cuoHJ8ExgMxEkoTmdixEr7Yfdyc7DoWkvnDBRxWj1eYHEujzmWxaRVWjQhqMwLb",
  "key7": "eRfdMdZpXvYNhCy9v4498ssiRirZhXhfZYFWkHFAfM6gVQnq7ipQJ65Y7pVkK8uiRsyMhLNUWtfmDf7AxyTmXxP",
  "key8": "2wCavqxRuvE1j6ZXPGVJesYrj3FBuHyhwEAZQ5Zwcsffq6ipBq3ZV9LcHPDeEXQXkqFShM9MfnFJHQz6equr4tJX",
  "key9": "2jQW52sXTTyNnS58vPyV6dTCSujgWnV23GjohuKg9cBz6iT2Yqqs3aUm52WfWehm791U3cjmUpdzkC6u1fTuGWF3",
  "key10": "3aQhX7vC9Vmccz5oYprjJkJhvxxQofgxCezs7c1yeqPfxWgTJGijaKMRN3C93YRnJRhNyrvCTyXwNBVMfuRRLfad",
  "key11": "SxYnjnW6KdsEeifdJVQQLbAgN9v2cBVoaWL8RenAcbBY2Wvv7FW4nh9zW8vuSatzXyx7qoojNs2jvNHp3uEc1E8",
  "key12": "2o5d6Ehr8bnTySBnDuii9rb8RTrX4DDK7g9PRB4A4xt6FF83tjTciCDsjejZtcLUUVzfW3F2EjAgQHtyjN47HurN",
  "key13": "WLabtBUyG6TKPhwer5KmbvpVzcRuyxrMie1aPZFiojips7VHznM26zxsak8fEqqyz2BNMcD3s1gbZBo73GvXwkg",
  "key14": "21B4irZ1HePnXNiCsP8UmiPERPVdFYdzcqRYYHADE9zb8gA9yPqYmwEvGrxtkWY18ch1nmoL8Edi2rnAYDSe3ASj",
  "key15": "4jckfq38MBXRkEps1HnaD1rQgAuXghWUDeD3SJGiqessrfUv6p1aNQMPQ47PqjDYY3ryoKe9dV9PQT3Axqv2igDJ",
  "key16": "66iimHpWq9qm7BbR7imb1Bw9hmiEFBQ4XN4YwsfYsupiEtgimoarZVcFbnioEUhNpfcZkdiLQujBydKKvoYkDrYd",
  "key17": "2LSFXJYk4PmtJVRTpdtUXSaHYxX8dBNEADJG4CeuGFfWSwSoj4qyWUsnsUuYqGxNZ7QndQH4i66pWSbp2Ei6737",
  "key18": "9oGcvwApvs5SxydXvgY75fUoAAMvZbpQ14oZSJv7ZuqNV3eEmQPWgVcZ9aLEe8u2ffXERBAJYpWTFKZwnpGhvwp",
  "key19": "2Rngd7SYLZse4E5Vb55zaggmwZZZEokzP7X94kyrBLK5k4nev5KizZK9DKUfYWN3jc8b3ztVvZUgps81KwTuJ4of",
  "key20": "2DAwqHZgqi1ED9PNF8bvN9SVFcAv4qZ5bTZWGDLd7rcTpVyJ95yrZ514d1GfmmmfR3BWBBNcndVWvMdo2mNKoSNQ",
  "key21": "2ZmoNoDgT6zrwMWDtQAjNGLbjChzBzir771CLDX7oqbDawnMQwMPg8iC2fZL8LhkajkRQEKcdM3Pap9EA65LtUbw",
  "key22": "3FhBTR2boCMAyPDGsRNv6kbxKt6hYdLohTTjZYBZqn2SYhep7KPDes8khtkRxu6N2RZG4ci9td73QekQNyqtnnbD",
  "key23": "3y4BMpWtygBDGDGWVRhp1E8WKcbnV4BcYQ3gWKiPjsUTYjbwFV5sQrXtjhRgPfnwa9Evf88x4Hh718QStVJWXxmw",
  "key24": "H5P3Hq1YPRckqzSFP5bjDVHhsH9rGeQx7mAjtYiVJW7g7sj7PnPJMp5fHvrR5CsfTHnXeSYTq8HM7NM8iAowDU2",
  "key25": "7BL1gzDCnkpXxJDerCPJnDa1P2WdAmgm7dXfAbm2t1RFcB1qmT47KUQ4qCX6HowXmjJkcaDQTiX4J8uhKADBeMx",
  "key26": "4ALbCMrTbUDrv17mBo3n6AiWx6GbsXn14N7cRg9Dh4EfxCPrzEssode9ZnwaxZUPaDQX4uhdxK5V2qBHDCzWhhfM",
  "key27": "5auBPScnTiQEWXfXPbrfie487Z92yKjR8NWedL6Y92yLaC6DUY7xRPCcdWq7N2MzmyyGoGMFheDT9xonPfbAyT3S",
  "key28": "35Ac2Cbokdn7KYpB5iYR56dBhyhLWy5HUjzRgTVYaA69vkX81ShPZwAYP7r87zaZF9oYAwfLCq7Lb8SzZKJoFfLo",
  "key29": "2bp4FSdHHyvE7EpFRkbikK681i2agqVL36A4AD5jvHRizPrnGmgEyqnSQJGzcWEwnYf7zoW8tB3HniFWWqMZzgkE",
  "key30": "4K5TKeegm86nRBzAmc3yFn7huqSpmBepL2uoDfab8Xj3rHVaPxdAZCkqF6ocxf9xFeZTHRzJYbjHmaqRr5Df7yMH",
  "key31": "sCytq63CvxZwauuoMZDmKfoCMs88b1MDM6KNgzqmiQAALGfYp4G1YmF7pgQhHx4JBRA3KgbzFVHEbpqibt6YiLK",
  "key32": "2Lw6X2VyNozSEA3JBhLr6yiWx1dj6wU38KujS5q5PrySLJWQshuvjEuaV4gJpQzWW7GXxBtoB6QKXZG8QH4FL4ds"
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
