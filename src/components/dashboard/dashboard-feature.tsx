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
    "3nnj1gA2twsKW2DyAYefenwnDJRusrk7AugwcSVug8C1RqsrQ5Yx3knZ7SQerduNokfqeBgyeWtppJYkPLsYnAgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsB16piibjCAUKaXXYTQCx1PsPmf919HwtHaWgVJmBBUSTMbq8pDGL3vtDxE9Akk7edMKjnag2Z4RxHtasSna3q",
  "key1": "2uJ1sDCJ548Rk2WSRz9v1DFYCreytRN9S8B3nr2gBsyzyPUV7J3c7DbGo51n3CB7xkxap5PDdaYPCme2TJBVUqp1",
  "key2": "5xkDMZZdKgmqXEe1VSBgQdHtbeNHqYFwkDUxjkAZF1zZb8rCUdk73KDVLYgtJLryW1Ke8yGd55CX4CTfGXSjyhB6",
  "key3": "61KvadgwJ69tGV6VBAeQHVCYYwmdEjpB9yy8u9scpV8ESc3vVHdnoVpWt74mfLHBjzkxdYwD9pZ9dXTn2s56wWSc",
  "key4": "BfUcwn8M7kdWSr52Xv8EEfbT8RDJaajewtiXSr6AD8JFob7r8WdAKDM8DT9uWc42qQYuWFVhbokudesmPdP9teE",
  "key5": "4wqMyf5QKzL9mTzGehoAhTFdFQcNwaEgjrAUrGcnCKWz3WTzikSEdc38WQp5UUxJ1hNHaAfq7EZD7ZDM1A1tapqD",
  "key6": "5EqG1o7WJ4E8rkw4HDR36J2UkysqeRnX5qc6YHdWmakCpWd9MP1HeXDxacu3nJR6rDN6FnF97CmA9Dmob7y5GGGm",
  "key7": "3QXwrin17yGZC6moUU9hzTT3JdJ7C9F4C5A9WwqqsKbEkaJFW1oXtyR511LotRq1VBq51zK98FDU4HwsphZbMKcF",
  "key8": "2wEmvhHozWEYosZdCZL2bo87XfCWkrrWSPZtJs6GahyeE9qgAwQPnyzTXE2jiT5cufiMgkas7vwHzNQKTMw1prh6",
  "key9": "MRHR4XzxTJwvoV69g3TitLHBtA6iUfHKbMUn6ezR8jGJxqqFhYrb1wTWtoXnjDzzvAdpQ7bn1S4PyM2F5vepweU",
  "key10": "3eswF5y5aeWXodmBsSfK7qGZHgMgFSHckyfMXpYuF7Psmd9KUaAACP2Dhw5LjH8aewHwPTmTKkrNDUXpuA3SgbYB",
  "key11": "4RZubKjpWx9duCj3mqDUeyPBzmDAkyt12hK8FTfp8nPLknuZFixSE3rSQEGY6Hj6URamnFEYNKVbD31d8ekX8Xd9",
  "key12": "4yqM25zc6f8us2ZTNv4nqyeEbTeA3engCp1xxVZVqFYcRmsZtmhn5B8y6QAx9NDqfsdtVxoPD3beY3mDXU1UMN6d",
  "key13": "3woHKDAo96iDzngb1BnpeDG1t1Bh63YzbCzazS4JNBdjLuBMWeCTLaMNDX2Rx8HKb3Q5W9QZB1WdhW4waJri8eSG",
  "key14": "2AcUc8HsQc3rkNGD6iGxiULW4FfnCs8JG7kmuC8kbitGWhCaqMB74ieBx92sciMZhZZkqNjUdyjpyR8gi2WvDtFH",
  "key15": "4TWAur1x3bzvFmgpwub3vSGZdSdBCFwDqPfbhxjqNr8inTvBXEoBEVvzrNg289jx1zgC8upe2QbLzTJQPi38W5jt",
  "key16": "25kjxUF2xSpaDcSbSMWyPfz3Pan4GT8RavZLTsGbjrZU9vLZp6AAJcuaWNJtZapsbt8qzE1Bzvf1KRTLf17BKYJC",
  "key17": "77Av1krmGENUPVomW1aFmAcG8kLcWqqhD6DVLMeh9cDiU1dCNh7xoFvK8ucQU7HFJM7UwnB4y6ZYqughQdJ4TZd",
  "key18": "3Hjiq5kQaECrruriaxwZxYoN6HJ5zoG4kC8GZivE7oZL32PrsUdHWLj1uNojs7CNrRFJy5o64AfF7TosJYbX7jSD",
  "key19": "623kVry6fyNQhBRTAtN9nYt8vCLiYjwMdT5pH8qVZ1GfkzArBEbapx79FNrjeA8Kj8j6q3UcctkTw9rvv5oKwf81",
  "key20": "58ii56GrrNkpsXE2m6RKPfvMMrs8XRAyuYCQmdLUGmrcnRSRAQ81Cw5B2mEob6SahiXdUffPN4zAPBX1xvCBtcRE",
  "key21": "2oNqMwVHPuVgXSCUqyXALh4R5vmmR3AZ4B2APRYytmHqGRGLgf9U6fwfdRVwzGb2feJE2Vi7BReZTtHRZmDostey",
  "key22": "2SDDxXy4XE9Wu2hRJtneRRrbrNXPoUPLPZPQ5VBDVSSPGNsA6Eq2Bk6AK3CS6WtciwJc3NiJtZD3Knq9JUpEtEih",
  "key23": "fqhxKiCSHU9ZLqHTMMh9VtS5FSZyQjqZkG5CPB8QUFPBWDo9b6zLVHMDcU8sgsWJ24AfzjSgCQrUirpgYducjma",
  "key24": "5zFWdNoghm7wxoYRbuhE8PzNuYwt5iRuzvCsD3jfFY3tSawRitpGpg35LMCqbHUNSrZaqQHXuhxAaJ8jhfp7LMvY"
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
