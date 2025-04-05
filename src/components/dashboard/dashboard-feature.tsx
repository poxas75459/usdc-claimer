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
    "2BX4EHdn9U7njwspRuwGRkU8UiR6vi9KEbUXPrF5rMv8ZrEXrFWCRgVAj32RYeZPGsjxzNGZZyuia8yEwqzY3Y3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62D9Pyu1MRQkZ7sTEGEcZ9cqBDcFK6WNUPmw35Nn9LJcCaUkjMQC1BTjHBrKeg9YVj8V7Ni7HqgTW6LqSewpJcqB",
  "key1": "5XdeAmJoxw4aJGvJDf3jdCVhdkHMwj4engzttTrgsp2FmTg99Mye3V2TzLSH6h4DPxT5AcjqywpmXz7ZCMY4BZPb",
  "key2": "2bXc3xbrxLK23YUYcX2kfq9SNGabHkSCogn5XVzR244bUVWUDaUfSfBLoS4kmt2GCQDaYEUkojDWVmZbdKPoPKvu",
  "key3": "3ajKEebB9NZg6BVjyc59L2Dryq51EVQx1Vk771rSkbwnTsjs1Zc41z9XuDPpQsnDB2quKRFSMrDRMHZ6ZEkuQfy9",
  "key4": "4G2jRSULc9XejtjBbbxkyP3Ef5u2kZHPEEEQBjWdZH3t67JNKHrsjDR8Xg869AyuAz83m7P43eLaYPVKgGHuA5eq",
  "key5": "3KrTbdiQXN32BXxUToTAQeWar3FMQgMvWMfrLKQ1nhWXuHyEXn3XLFL2dgLvTGZZdDsQbPFQQDybd2phWjxc9iso",
  "key6": "5a4DFaiTmsEyVNnDLA9xsdtjeFkiiCLLcEEPMaSRsNcdF1sBTq4ZPkhsJNKdvLMDimnswwAviaX3yLVF3b2FKwJQ",
  "key7": "567q6Dd3dgniuKzrgExviTaDxqRcd9jHqkCdL9fY2MUfYsUYtp9gjDiWHbF7kByTzbzfJeydBL1mDTuGMTmXW79E",
  "key8": "mBng1a9ibtBk4WyekFAxixctffYLi718X8GRYH8cg9fVMYp5geCKJTaC263jJkc4Z17JepifggzpZp7CT5djqoW",
  "key9": "2WAxAJvPzGcHqNt6Z8uY4ea1JRosCYGWe2kBvu6rYdQtEEWqzaoCrKW92GJ8emeXgo2i2nNSNg1cF44pfykepJ5B",
  "key10": "3j7wQrh2wt1S1Tq5vrZwZTCGLDp5AcfakiJCtNragsnvWqwXKm83WktcywZKJuKRdpiHEXBmK5TePWufcMAoNuxJ",
  "key11": "2xrkyiE9uEHZD2timkRZcsw4g3WdUfx1MHEJbmq3d5a3p7H5z3ZmDXMMevbpMj6E57Tsx4ATVN8bpxF9xBcm6iPz",
  "key12": "T5k9a3aPdSzDGjAaxY2e6npeAroaciUMeeNLcYqfZhiJWrd7tf1Rk2sXmDY4UgAu4vUDhuSDKo64uSniMGXQAHS",
  "key13": "3xqcJnTYGPv45kucvXJfVMbQSQ5fhQWQij1p9CygdX3GeYC9vwZ7c9VFTFE7wWzY7t7UR3gLRSvyqxm2zspRp6Tq",
  "key14": "5NR8Kqo7hiFZmvwayc52JiMSaMgDyijUEa66Hgx2bYmJExRgfuDa6Euy75XAumFMAM2veMH3mUEHdd5q6tm3zDBE",
  "key15": "39zuLoJm5RjXK6SJi1vyZYRzWSjW8m4KK2vQRMtecyBe7UqMPHTCcsA6KMGiErHzBjRM7oozWys5nkFQ286WNZbv",
  "key16": "3TMAUxZ9Z12yTwn5HKdCgMbbrAYT9vyzCrajA9sa6mFV8uV6xLsKdhMJtZuJrAnPARJaRdYLpRFCepwXDpxbfPEe",
  "key17": "4BFwKafowGf6xd53mUu9qF55xdqtipyBZPoE3E4xZqnsLKY6dNE19EWt8fPUBhMs3MQy3C3YNCkqCBX69S3Ge4Sg",
  "key18": "5Ni3pfidANgRSjkAMJ3yVvwzJzvf2Mkq8KE3bbq5KWRZFDQPQVcatyJMyFYew4mmbBTFKDpkd74tLYy1L1AMW6DH",
  "key19": "2QFdDvBKJpNSqZj59jmd6UfqoBHLWybUbV6q7QuWeh2b9GxGS9oCcXszwPdjp4nUasxSEydxkxYP66qw79bABrD7",
  "key20": "3VyGY7efyp6QZfR2RGVWYoz1xv4f4m6GPExFoPQ8zEA1nUkUMjXpPaZbbDMiYN8FZmbid4AJgz1wgGmKcN5JmEeh",
  "key21": "4roKLzK9r4nw7RtwGFdN4BKdxWtHJ9m4tewpxSpsx1QTXSHgpkPPu3ipc9qRaVavGr8V4zt6WJLofgzLgcyWd61h",
  "key22": "2TSGg7BEwLUrJNfKKTiCHTDjBwimeaZeP5chLPWmr5cGzxZv393413tPVoUht2bVNNx7nYGKJpzrDo3rRJFHbUm4",
  "key23": "3dDH5ZyN45c4JwWPvJf5McuWtcvGtfP67bf78fZLcfnSfdcW8Zkk42UXUdPtaCzhVi1wyHeTHs4Yn42MeyjoHC4u",
  "key24": "4h26hQLgaQ7EjCsnXWeL7a8WFZX6SVMBE4yffSe8i7rryNHq254meHN1qcyJcxFN7E6uXrkxXz6Y8PeM7foocS28",
  "key25": "5ohhuRSFQU7pwPSh45TQoMheDYcFAGA3Wv4nYmEqUPf5HFKnKrb7e5v2YeEyK3Z8WjcEmzYnSbWHDWk1s3dzxoJv",
  "key26": "31rkHhekhcRH1DswPafoXnQvpBrBpzGyTvpYZKd2uxSR7m2BeETsA1dWDj2395Y8nPaXjyhNNTH4Z2T1j9w624Qe",
  "key27": "3aVcTvEH8qK5qqkencYNYtA5qaENiMbD1ufT9tAr4N1k3S6mPASkHG2QPKKCSAmD1B6HQBJDEowJxGaWjPmCuMQi",
  "key28": "2sFjfvDeQ41sqMWaW6okrhvuQoPwtaXuzLN7SggwYUULRHaBViSkVDLLkjQasADVhmba5ZZeqvZ7ACfJNVMh4aTJ",
  "key29": "5pfnVdvd7ZSPGQ775k8QE7KB4LcbAHBQTuJ7quccYfT3kWHQePrmwfNzCLgXvdtGefua3dzvnesyn8d3gX3mBwtf",
  "key30": "3hH5k2HD2cfjzXqTsUT8Vi7KVCQsxRLwg1S8FM3D5SEHYLh2Na8VPHxjbLUFsYxzTGFKX9ktu4vFDJmUe2c5otXH",
  "key31": "45xgnp3bPA8iqdfagHjtpBqxKejH55NBvDqBGr6gHw9mEmgFSyLZnjveUdA7zWStXB3JJZedhMbwKFXCuxdSpNEt",
  "key32": "2riovhgTJviYScaJVvfxqYGbKg1srJJ7YFRBY14F8x1UciX9NpqXgDtS8corEEPSuPEcwnTS3sjQpQq6P9YuESE4",
  "key33": "4JEKVVujHCht5NN2mTR6hnmJcNm4bruV95Bnm7vH2wthisMJJ4a1fPBnA88mHWeGwhawFbCqgsrC6BbRXmmJVVh1",
  "key34": "5hYTPnmhqvPPb6kYGH58Uqq1Pn5ENdUSUaC456Tz876coAqhknWySmFmPsnPkM4M3nLZXhasdkAvxW359FLV6ax2",
  "key35": "CXyzSmC5kjhaHsQuLqMfKs1cTUv32yLapAgrVM1i44NjGke1x63nB8p2iaaSSLiKRkamMzkR1ncK3rJMKcLXxZ6",
  "key36": "2HRg8dSt8EVRhietRWcQDo7S7DeeReyJVMzwFtKYqq3f99DpShYAvwF6CeJb5MddVcNYHz2my3y3ch6agyVwnUcg"
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
