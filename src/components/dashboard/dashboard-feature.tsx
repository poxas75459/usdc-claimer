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
    "u7zEqJ59mk5VKp3b2rNmPK7hs33CN2B8CKm2pEUwb9UMQUdKasH6NjCzoEPbnRpDRX5oxKjkqDcxZn7SEFAGBc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33r394pUh6mW5Y6XYSWVT2sZQYEhFjmkTAprpAEdDy1JxZGizgL8Ms8ys7vC5xaBJXhmpTx8ua74A6fNfdNnVCz9",
  "key1": "56AAp42k3irJbmqbUumm3CdRZrpqttLdN3SyMZpTQZZHe2RQHwrmGGUu1AHQMpdh2FGVWp4tnSP9rU8TruBonAvC",
  "key2": "ganxK8j6co9KXFwf9ht8pRWwSsxqXx5KhtAUx7EUZkrx3undAHFyvRnBNDuY6tQZdN7BJFfZJQADusThgEz6g6z",
  "key3": "4fAGPubpWdXAmnqwVHbzjnKCPBE6SUySeFUt3NEDFfzvvH8QdR8nek84v8A3pA24VPysULDyunjVf7EPHQDLQh9A",
  "key4": "5GLxfaEMqAkxmsuKWijbkmK6ri4tNwceFHoVYwmn8qkhAdgA5fVzAuhgFppWyUytxhBgw4UCZWGUAtk29R97313d",
  "key5": "gQnkiCY9XrUjkotk9vqUfXHwssW9v9VPeg4X1WmVQBPrRfQTF1uM46ZZN2Jeghwf2xSG1gKN31L1NSdGkCVmgkQ",
  "key6": "3EemYr8q9auuvTF863xCVZHhvHyzG6bhb5Ac6ovWKLnMCPU7ADSm3KiCnGJNqk6fHmA2Dd1gw5mq8fZUwHB65AG7",
  "key7": "3Z72dcgF2nRQUKMZvmU1dAE4nDaT9CU9PYxYNmnPpAwcWqcnhfekRb8k9zrA29u8csMKDNx8nPdTTvKzfrMJHYYf",
  "key8": "3q7SHkfHd6a6GKfAiwh8MnokYQqBkpXr1tyQZKv2YwUTwZ465Q6eKnj1sZd1qshP6cikoAV3SUW14wYoHXS6cTTm",
  "key9": "3DQHP28HKhD8j664oBWmAM77toABUqyNQ3THR2d1WaTTjgHRPP8kFQza4zBceYaMFsoM8bWQe7S5ipdGHMB8ZrCw",
  "key10": "5pYw34uTGnf28odtXZJTdRmShz6fWn4tbbu48gNhYYU9ziPTKESGWD43F7g6LGhbchu56umJsDradqWfPTuMnXEc",
  "key11": "56nkaBXx5K2GSkvnJ1k1tugjb5mtq92jjRA5rL7SqcEU5SRHN7QY4xf1SsKbtTGvSPtteT4jzPgi6iyZ16qTaAYG",
  "key12": "Y4oiaij49o77EH6pU5aBoZDpEcMbufcJ2g1oZ3vyhLuVtpNeMH9DCRzTJ4Ruypga8exW95jnRnBT89ixfBajcan",
  "key13": "5dsT2FKki9LXk4dUo2FNPuqFkXZB6636KtMVAuaRXrYsXG4s5dfGhXbezaHe1dYxZFEAQcQMMDZGUEKc3ajfQqQX",
  "key14": "BwADvL8FKKhcu7qwwvx6UxUjBRamXULhNis7kPnaXu4DCKyyRjh15Lm8npwfG3TEQ4xAn5LyX6KJGCaudroZWkF",
  "key15": "3QYDZKoy732iaBrEuF9TLAe2z6yCLuC7Pcd1u9PRZPMV6QR24aqHunQjimNPgXqyw1LvAhZAejEkJp4H9SiPx7RR",
  "key16": "2hDUMAxzLeAcsDJPizWUdRs3ZdZmwjqWLBCWxFaF4PbweKbyjuUWxGZtHBBrXj17Pifyejd1tYj5igqqmJgAnGvx",
  "key17": "4D6HsZVvP7gK2nwmkfWVac4HfXVDq5WFFT6N9bxt7Pubrw8qgQAVj2vzrqadzZNT7RR4qf5mq9X6wPVHKpEaSKbT",
  "key18": "2hHHVW6jhuqHsGMhwaYeQXqMrzwa8jtZm2zV7GBwyRtHKULEaCpF4Fj3qqkoELg9cpBQVqobcDK4cWyhQUSS9MMW",
  "key19": "61RtQzVsa5KZoX8Ma9hyZaarvpmJV8UFdUSVbPuvxjKKJyw5zUeTLrSy24KwUafhDih46eKQnX4zCvk6hMx8SbRp",
  "key20": "3gMre84GYskdyx5qmLSc6mNjGw8baVJwqKoamamyQnbLWCHMUg22EvYqHfLocJB9CRfFGLCNrsTogPdRvG2Vc1HB",
  "key21": "3y8WSup2yWX1utCNAs2hTHafY9nAyyHWUDXtc2koe3a6TZwczCXPqGDf7SFZaZPE89wHahXtzCWmC2TapfMvqSuz",
  "key22": "2C9uoERh6xsMTkSgjCTApYCsXMQwgtY3gHBF3YYswrj5Ha6SLhvVqHVKQV6AUthiKybJJLo63NC7nd24bU3HMceZ",
  "key23": "2miLtjcvbwSW5eMjKKxXMXZzryFrF8urR3XnWMYBjJ4f9TveKCXNm12CfRfvs5WMGdC6V794d9KgUFnwFx9hsEYQ",
  "key24": "3E7ofhNRhHbM1gzgHyeMduHb5PkWyNjwLgMpwyzQAAksMDtH38EzoS29VuEP68WDisFv8ozNWuWbUJ1iSurkbDKJ",
  "key25": "fVPPKS3wYX63rP8J6bk3y6ooocmLDTonje6vBEQjkgLPs4W4ZgDL8J47cmamNtTmRmEYcjpwaL4DMVmxYmgycXi",
  "key26": "5fuJBXghdouddpVqRDPfrJ4wi6yqHSUGNtmyPPS3iCZx1CS7QPFonGST9toB4574iUA2CngbPWS8d5RhLm7hWCLn",
  "key27": "5Yx3hLa2Mwj9pu9mSkY58uHqZue6XFDvy21FgxNEeJb7D43nMAMRcBxfv6F6BtDmb6cPVUxQNzhmtke5U6QnCq6Z",
  "key28": "2EDWy8mVTA3bbkEZ2X82TUdtFQvmB1Atjfi21PwgeTWs6TzjMN32hGt5VLUV22UwXe1mNEdwMqvdUeykvdgEErio",
  "key29": "4xRkZga68PoYeNP1peSB5wA2giPBXwCa4drvYBrge6t5iwZ5GNCJCKQmCsf9tac9xobPCSTACeVUGtRXcwhNUvNh",
  "key30": "25tsSGPMxEWAk8T1TxCn6GU6B7sePvXcM9Subv6suKGR8KnZmrcn3PFVWW2vqLJ6wbPdof5hGfwAyFwpCcXNLLK1",
  "key31": "3spUQiJRafaBYSiA5UvYDMFUgQmGDyi7t3hRnkPvcAXEPbT6BJK2h6ChESgdDBfeudVXmK3eY6Jjz5AmDJ793Gui",
  "key32": "4UJZcGDohowNoB2WcjowNuKBWs92yVmxwmubMZiZGf4BQdYBhsoFtPoC3ZSiHkGosV4gzm1rLRGoKV1ReCuGxmvp",
  "key33": "5gfnq9RzEBmuQ1CaL9teYjDqS37Ko2rnxMM7MxirCKxwoT6Vc65EurDttvUDZAzqt2FVXeck2ZZqBXY9SzhRSwKM",
  "key34": "2RUP1hq2sone5srw6GKzMhUz8jwgFqe2skphPrdpvU9Jeo7E5WGMK9ASqYgvHk6yDnU21BJvZJmC5cr7tWEqASSN",
  "key35": "5pSt3Cj4TpXTBJ7VoNvLJARG9GvUH6fYZvFAdnn3KFN8aAvANUAqDn3z6z6EuRQabSCPpPhkEanj98FyBmjdU18j",
  "key36": "54stckdh1PAxGe3gYWGba685hL853VQ9RABCsww1y1nVw4S3Uw4retUcrBXJLsP2KG9ucBYfEpQAt2hHFxzZ7JkS",
  "key37": "todTEoHTneD5TAaxS62W9ZNicfytEx6cT6aNfPeiQCJ43hd7Wn3ubdp9RaVejMmPVcGtK9fwdWsx2LrGcdJYtxy",
  "key38": "MFLtEtNjuVWKfTKek6LDWdZntfrLL1ThQqfCnFqaETWFih91AZ37YzmDjcRdiLLUvnpmzCNnJE5ga1GZa3hPjcQ",
  "key39": "3n5YuwTxQeLYSMtrsHEVWPpayfAn47XenuEi7wNiTxojAdUUYWocCcBbCoM9ASy8PY4ZSr1zJ1Nx7FK4NHBuFEzk",
  "key40": "3XuWjvSqHms4WpYqgEa4fTJzogAZoMKAUmHwycfcLKgVJP68JD4Yp577Lt3yFH5cndRW4TnXBSmkRZcNLiMkCd5W",
  "key41": "3QrF16GwE5YT9QDZVqK2upK5Gxv25e6j89TfTnbxGg3ocV3MoSVbbotTRReevtnqWKoNNJt9Z7bETz8h4ZVP5yrs",
  "key42": "2z8r3xfgTw81Qvkjikh6nLUK8CfyAD9VvokVUQBqhD1UmH8S9H189DHMTdPg9hs1YksQPHrgvdzEUQPnWnfGzG2f",
  "key43": "i4fmc9KcLNTFcD3sRnZ6zaBvYptabD9MCnazfVUniXrvbR3XPzSH7C47ivyWNvuRT1W1c2aX4L234EyPBAX2UXV",
  "key44": "4553gtQWBkCCUmUpjUUhtgdN3We3XsqnjYFBKdwMQuBoLfnAkbZSA7S35AA3nS9chacKrHmLXWuwbVn57Mwo9XRf"
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
