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
    "4PUNTgjjBMFJWDivaVV4UM6xPGg8ggXYrR5y3EGBbCHPGdPFYqEf3VTHVyHnKW9V3L4D9737J83L9UmsgkJcupLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVhKcRce23AifK9UrZd9qgT1iVV8kYNXd7EpaUPbDUkA3DMAE2xhjQLugeXs4gBB5tmN2eGnctpk54nxy3dYPat",
  "key1": "aw36L5ryKRy6VXaJuwXZnpqUo1nCJ1RqCvG7AuP2jBYXdKBUqD4qiFxdLmVoYW89DfZpUrPsfGFYX5gQf2uzYjj",
  "key2": "V56bxZ4RkNW4nhBCujXM6QVjSzs2L9yaX7J3SjZiCma9s1DrGjefBhxKJBzP8Tt5ifNhrYtaiKRacX4Y1MNG1pe",
  "key3": "4At3ShyyoYHKP9N2RkBY27bgcLCQi2a6YonEmF9WeGVwouVwAYKgxo79Q2wk9U7sqyEsvoWBgzuuioEEVC3fTWKh",
  "key4": "4ktAKA7xPYobqvSqgfr1qKADquF6NqezmMj1yk6ntAMWCejfUEqtXJDcUb7CW8adrVQn6GggZyK6oiXyfAvTufZ7",
  "key5": "33wd2DLsU5bELuoyLwbyZCF6bFsy3pQY8YyUkEJ9kmBTctD3yxF3YmbWm5FjHFNdZBQbX1vfSD116rkUj8Na6Hcq",
  "key6": "4NPBRJmnX8zw82EU4icLXK1ndrpBF8Ri1gVgyJ3WkXCA3dPV7MrG9K8MuA79a3Kh3Dxtw6VLw3qmpiQq4D9x3nyi",
  "key7": "4Abc7Y5u48YLKCWdnD6WqgSTcf8k15hzHKnMqFsQbVjFzo3qJtQfJPzZBGCgyj3mfZcDgqS6Je87HbrbP9wdP1LT",
  "key8": "4FEHzfuj1BHvPEoEVyfR48XGteLygPwdR3vpb7oQPeHSSAJLFjdy6eqLmK35hUMo4S2JedgJQutXzqbjYzuYCrp5",
  "key9": "4JbfRnwcQseaTrLNnp8iXhu3UQpntarqvdQDr3ZRaMyWh4EvvgPGE9h6MyELkV8bWtAEihV46STMYiMt8bmhRkFb",
  "key10": "4Ln6WBz4xVfF1YYqev2HiYNUHuQBuQKEbFTnkdkLqUjtwM8vW6FSAEgesNEtDoKGxbgKwXpWog7i6iFWobqJx8YF",
  "key11": "4DX1mqvAt53JUEk2W4mLm7zLPV5YE55tFWRPjDYPpiqun5DCedXPZaSBQwdkvzNuVueNHzx9HyEFNhEWLNcayCKY",
  "key12": "XvosEFyZBMgBvrrZHMSHG3jKG7MLh9nSBGhJNyv3Xu6qkXHwj1PQA7TQgn9XYvThirJFcLC5GkNqjt7WKf8nL3F",
  "key13": "wxnUjknWAcpSTSB66XxPXwuEvHLMiyCuSKEhDjyZHAMVTLpVadyqr8gdsAKZoJP3MYwu12Vd34Cr7byx34MVCty",
  "key14": "4HNy18nKwCZZZ9ttUNVQ6ZV5JiqoMjannLZA5WSu9eTExYvthbKKMuTxHVzufND3h8s4zeHU4qpgMgMAyAe4hK4y",
  "key15": "4HjtHgZ43HQxPueQRb4ffYHDQDn7FPeU5cvDDFty3ZLjweBLAmdymUDXzBiqyUyHYXNkzfDfugmszHJg1KYVuYEj",
  "key16": "2WhDVEngme6gkUuhuxU3jECXgvurrDrCjGbtUTALAv8jwQsdBiU8Z7jQmUGk65RQKGW6FZWL2pxY8UH8RQnYus5A",
  "key17": "WeWLuHbUSmQdjTtng3CXaYece415ikdzyZC64P2QH1tg3T4wnPes8hFef4PbsczvS3XfRqdNihjCsuWrjw5JRQG",
  "key18": "4NfatdHFBcx4qwdh8ckqCPV3ANhm8UzGPFwvmZuvxdoswzA3mePitBQQHM2GntX17tDuuMKJ3ZVgSQi4LdeKeS1E",
  "key19": "4bHpqAXArDpphSXxU8SfWFzuaa4XwXQ5FeTtqzyaz6g8a1kun64C7Y97mKVwe8iPWtGiAooqugTpPqyLD1w9wWT4",
  "key20": "4dQwLZdRrBS3JNdfp1L71WrAwaVpr53baQSUQ6cbGwhmdse9WXGTq48sWRpeX12ioVs4tG4yAeB3PNfWLpEhoM1s",
  "key21": "4ma69ddB3e6Fy3VT4g1oYmGbvQM7dxWSmLn8jysb9DTf6WyUrhybE4u1bn49d1KUv9BGrwt7bqbF9Qch4BmZUJar",
  "key22": "6ZB3ouYdnLKyPcdZVQjxiicFbELzyqD5rYU68DRDm6wGMksp3oYVY3qKKpyxQd1GY4FDRecgER3jK8QR1Q7bM8S",
  "key23": "53yeyC5dey7Cocg3Y2sTbZ2uUm5WmysP7KzguRgTXDGWmaX53V85zenncTVh4PTc9tRNmTp71RRtKnk8a768UUBp",
  "key24": "4DqGMHVhkhQirnJZpPhXzTfREj5xaJRqkEQJ9aof9yENiC9a5enwbHWJdzWknXGmqYeq2cCwFCSmfhDDKAdji6Nw",
  "key25": "4dFdao2ijBeGWfxTLBjRtmwC4kd6t98xbWf5Vh76EBge3hTwBSrnHiqzxNXxft9Ai8EaFNWb7P7irMEtFmMPJXAQ",
  "key26": "2fvkBEJvATj6Vo9RBUoLgtcYGSX3CS3Sez9vnirQLgMWTAfuqyhe9qejwuXpHknnT7Q3uBobGY85rwB6TySMFWYK",
  "key27": "5AJPXrhn3JHP23sxhMDkL8CeA9vxyBMNbstUpwaR8TCvVFYgFdDaAYuapTBojdCdJr5hzSTLjmuwEdB8PBCCCqRp"
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
