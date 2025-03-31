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
    "3rom9teD8nHaGjbUYyLLVqwS4fVgggBS9dNYBiMpZtAhzu7Eqjee5JFzBhMYeD1NdsV9YHRVCmEiwHZxQGXjKDam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wM7SEJvzLsQuq5Bbh3yyrNjdstvUWxpq2SsixXW2RSuPetwNyHZjZgGnBzaC1tSedigXKV3AmWHSiyMt8NaqzWM",
  "key1": "5BZ2emX3YgXuwBSGXuYeVVAwwDxzpVVZR8PwBm3kpBvyoZTeBbeYMQe3EMg4pkVs8uxYp72MMEQtxenZe14q3iPQ",
  "key2": "5xQmHJHasEVap6dNgTP1z8QmjPRCFZK6fix8oKYxUqe9tnz8bdY4Rsfeahg9MzWf6osK5ZtuiFvKnbwgbA6z621X",
  "key3": "41EuBTnoc8EHfiooUBPfr32xyqTEEKAQakXyqP3iev3UHyJ2YRaRjo7MnLg39MZLXkjGb2S7fzfG9zXgHRS4XKN6",
  "key4": "3MmYHh9FVWigmp9regfWE1BhL1k9AXEuKkHJhQT55ieew6enih9xCY5nL6JeBQWCGA6abnNeXGFVgzndaCNeh4n5",
  "key5": "2GDXCQgeihQHRf1Rxjig8nHPcjybbQumAdfy1r7KyV9b8mztumNGy5xFxGu6Jv1cBnWbMYPR1wm1Xq1zdu8evxpR",
  "key6": "5dSMh6WjpPzFiga8oa4XjueixQguycR6vCggYC9NXU5jxaVFuoqMc6ynERiSm1LcA6BcVg2nH7iBSspLLgavmXUe",
  "key7": "4zSaRHS224vPd5qXYZ4vb6uT4ryCF6WpMELSj6WMq9VG3Gz6LQkB85pVGEa6zzSVMGddBdxjKDBVKgAtDBaXZYcA",
  "key8": "TedGeBTQxpaykqsvMHpb63SJnN9jtBgVgtTL9D4vdJFAGijZyjzE6gJ3DAjGtKfN19kd48RB7dNm7dT2SuuDZQ3",
  "key9": "4nEbhdfXXDkY8x4H74h4KjwbGRS59cKhs5pHSGBWzTTNNxJncrd63ZQmZNmTPsY9cS69PUSrqUp7W1JAY6g223GR",
  "key10": "5v4di9K4rTre8bj2Lt1Kag9Na4isDD3FsqiY884674hhQKqVcxGQeJ5mCFdjZrtLR2X1NpmdmwoUVJdCiWvMzgjH",
  "key11": "3zQyhJhSc61opvtQcDPUK7FKeAvksKNTz54oFA2tEsLGHcrGq9o6JGMo1e5MCpHeagFoK3qr8ehFUnZdZSgrp9au",
  "key12": "5RYsHgJRb3QU9pkhSvFMCrhzD9U41LGzPc4LXynXcru7u8BtEHz1SbpxtjLX91b58UmDGPh2DVpWXyrdPBFC5XSm",
  "key13": "2PtFVT92fSZVzuDsvWbVq6Um96LdbuQPzDhiux4L9pyRcFxFQwfp8dVCuJgwzo2yJAWhsLRXuzTLZXQak4pdoEfu",
  "key14": "2oXmvzrC6E8mfaZWkooeVDExPu7U38WJMQayfiE6oitF98cPDQVAYocm4FPY5nsGC63EqHY5f8eDRkvdFLeQS7G2",
  "key15": "3AxZeVTn6fc3kW5NkNEr6ufneMMu8AQJwmKwWbj2opwJTNdRwtZ8Vt1y9ih6oANvNNHwH6BgQE5mfNxD2ecWRMhX",
  "key16": "3NXc4AR94kBR8VZFhSe7ZgkRj8gb4cKzFigCT9CChSN8xiJVE6gDdnET9KdihE2EN2dfCHJe4XXkmnKSbUk6oxih",
  "key17": "2BHvksenqe7c49tVdT3KDqG6YWFYD3NoGeXWPQfYfH3Q1YP5TAcgVQ2wV95Z3EMuJL2V4sSHMA5vezikR9j8zaz5",
  "key18": "69ANz7PEQJ4vTzgHeyJ76SMBj7pZAqsXhiDQoScLK8FQRhPPvES5hvVge8qHbiEWmTfr56rzwncL9t1pJ5EsVJR",
  "key19": "5qFCnHVrMFVGvyijhM1J3A8Qm7QEvXtpLVajqsBsqvKLBd2VD9NSWueULbUAeBmxAWj5goRdWMT8QWDMbfNgjJft",
  "key20": "nDLrSNydmReyedg1pymiTFKavUb7q7YATji9riHHNoSn91YZ9bwyRGwNVU4RsK59VruPwUZUqSCJ2VaLqUw5LSn",
  "key21": "3cWwkQgCJPcQZGE6w9MCoLbC2iVUpQmodrLBYbxWsJg2ymUmJQ3WE6BNZPbooo8xyVYH8pNc2xk2GjhRsikE7KUy",
  "key22": "k4THGVuY8XxTSrVFyfdT4i4oEj2BQywnqSK4cn3aBQLiaA6CK8nV4g6juQHxgmzTXYVN8gU2UAUEpiz91yavk3v",
  "key23": "5JQaSWh1NnyK1647Cy57fhQJ8pW9Tt8yiqGNpzaPNTrMeTwFGLpMMXJx9h9iTiM7A6hnLh7Rh75R8NUc31KcUcYM",
  "key24": "hYn6e7GgTqTDiBFpVJwq5ZYSj7jUeJDbsC5n6rwmt64fxUsEpLB6AAcTJyxrAqC7RN5AiJkyN7fvfPWumQWVMBb",
  "key25": "4zUDvDJcHt9TJCB1CoGzk6rbZSBwaVwvzE8B2w1gqCnoggdJnQFwjSK9FqwQ2jm9XfaxQ1gEW7TNoUGcX47ENHdY",
  "key26": "4qbAn93N7UDrwM1L9m6y8TnKBw1FeqSm5JfP8eoPvQq5a4vHUV6L3SunB9TgWCfBtSroiyeP9i37aN8RPEhhpaX4",
  "key27": "3aeXwih8GpVAqpNYhDjeyPseBQHif4MzFcYY8rtPrc7ALGAX2i5vDPHjfD2VM5MPHF5UYPt5psr2gmqgpZ3VhfWz"
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
