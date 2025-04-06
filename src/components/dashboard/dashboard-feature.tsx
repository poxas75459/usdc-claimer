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
    "5ZYTPnofCYDkDQovHiEVGUKz4e1t64AQKZvAjAM36kuiwSj1W8ksinPan8hzpe5fp9gF93mbWbDPfMKfMZgftAU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28t4iyBkS5tck7E3evPiw4rcnD7j4hzxDUngrWL9Xk2y9FLhgcqJ8WoGwDbe84TcxV4xZSG9niJsSP9juTyQeD5L",
  "key1": "4VnxMeLWxWp3tUTujCRpTUZqUGB6NK8387kbykHnJ3RE5CgjmcJbj6fSGGMSjiP8DRNZ5Ka9udrLUptJM574pP4a",
  "key2": "5DfGhNnJq46ivkwkjkkwz9pCH6bet5kktihmy75cGFYBScsh4Zm4D2ruk1WwEitD638fFXAkoTnyjWpGByJvRi1y",
  "key3": "4TkzRgqxBnZ9fkbp6eAWYghpgxqFjKM4ecg11zFMcMgq5ej9fWZxbKRd6HRgRsVtjETzdFWQMuJ56DQN69Zu6DBj",
  "key4": "34EKrhAbVFyEm4xjF55JJFa9wJRgzGnW4ZfBUFxsYL8Hw5dnYqgQJSjBbR69sKZBrMtWP6zS2kHLVu4TY33Ru4Dj",
  "key5": "2EwMVSq2zJR6ULykf1pFmWuWjReEHxwiqAhAN4BvVgdatxLAbYPkDVxNDUn1j4vUyWPkAM5tQ892uvQahCiHmE38",
  "key6": "53jERBFr7eExKRWPZmCLKboruz6sN5SBuwEE5oCuLiJYaXck7HvEHqPVufdVQNxo5osmkoEKEbnxcyHK34cznRDh",
  "key7": "2zbUjV1knxkDpeXCd3yE2s7VzfSXMe15Bep755wwR6e6dzianyb8U1fGaYWjYjcG53Vd7LfwqakJPSLYTmZGLB7R",
  "key8": "218K1PHRjERZ2WDawbov9hBabxkCBhz8MxT9euzGWjT4nM1wMmdJjwaknkTM5mYpyaRX33KkUfE6Vym7gxPxrZsA",
  "key9": "2de17oranHg2u68cH73ewPoePA2QN3ZxcA5vAonv3PKccVZzAbKkmeidyeaNRNbb6ZfhPqqmXd6zmRA9oSmZ35oS",
  "key10": "4f6vdNXdXPvfnczPuiQYcxfnthrLqKEgV9NjWrTFWPYzDvkcwjshu8xyXYCAC37CD3rdTddusHXDWgWoVad16cnS",
  "key11": "bd4ZH9SQwYnqq6yaXNxmAdpoYUVsgDuiRygtkvYas5i5swG3pnB5nBFy73CXQ2e1wJk5gTuL4KHD6NnxH3gZj3b",
  "key12": "SAHywxeKxX8rmdmQXYLvYUqzcJ8dHaubh64whHUMLiG9wapNkiFTaaYXmDmuYzjgrMEUCg1kzj7Jmykzs836pgV",
  "key13": "2S63eWax2UVTWscygdwmUYzYDPoWy3Bhq7MDkkSiFL3NY1KbDAHY17RLLnxa9uGMM9MUwNkKoFFLMDGGaD8N4qNG",
  "key14": "57oezJr6ioXAYgHnhvHTtWVnXicigTNbQa17MNAc63vaRvpvZwNvdJuQB5AuajpnWh4TBJjLQs9huAT6gP6XVpf6",
  "key15": "5hupmugyNKMboUnswkVvD93kKnM9gYyKvzqDKmQAhbRDWMBkjAtMepHckH6RJTW1jTQQv6JmpUb7qj3P9J2jApJA",
  "key16": "3ewfYWeXH1VFLZrRaTkcchh3dXs2WkfkBRVhSRtKoJ682tZdgps9eSR3xhaetRgdKd1vmpNcLQWUvtygcRQS3Fd8",
  "key17": "931kZaakQ3pED8FtewU5wN7H2pL8bwuKEBWVD6ZSyHWKHAhMZndSr5jVidUS8pETAMcvSHhMa4NjMtN7t5WvwRH",
  "key18": "4LXubyixWKLhcdaoQ4Rui1NDFmD9iTLwd6VaVc89gVy2EhbvHnJxu3irAPkitMazxfUBTCrdzdi3GLhfdbF8DVZ7",
  "key19": "3yfah4eoRYTEkPR9Y6LhvW394gtYiad6WEBSG6mPetaeF3SnZ9Xio167Raq5Zrbg2QvAuNWpFD8MJ57sK7vLLH6Z",
  "key20": "2FJwTmPzYX1Fm8wNe8fkJxJXnydyXtx4hmucTWQb9sttpgeVdPNGKEMSLKx5KgXDz13LsHvJAqoFU9H5bCaiiKCx",
  "key21": "HLmM4hrMTupgU8WwEi3nEZCyKw3a1fpG52DUwiyjyora1u4FTSar9MSu6DSZr8c8GV4VU64yJJSRMiKdFZ9Gnok",
  "key22": "2Vp3Qq33GUvHZ4rbduYADgSY8DjWbzTx3m19bfYYVYcgTCVPA8ELS1ymVVtLPuXrXRCywpVRmyAENZgB5NdsH1vE",
  "key23": "pSQKPpPfuTjyiBtaxKNFj37ub3A57kVag5kD4VjGU8hLubaniZdjcMNyWmgoFvLMsMB3Z8zoqkxxmSwapcPySwF",
  "key24": "xbdmWYo9Hh7YjGtQa1RZkASJchpybXMiLD8ssw8StU34yKpHMB8YwyxbYzY8jBvgAUm2aQk9rGNqV2AZZpdeDJw",
  "key25": "3NeiPLx5uoyhi5Bf979LWTfDX64v3SgyB8HJqTtyrdnw3kjZ9ikT8LRmGsEKP658RJ1Ah1u3WKVyLG8zBBe5V6GF",
  "key26": "4g37YNsqKRsCpAGGWMYmNJziHFWtRpDoRmP7X9Lx4hJZUuLWXLGcsmmBXyeAQ6DGCJZF38P2QPsRPUtQTmKjZSXS",
  "key27": "5YFQS16YeABfrK6ui2mxVe9Fbbsajx5jhmAphbhuM2giCBS7wuf31zjhaZKkSu2omwLCjrYpbLYTQCMZuZ2iPeTb",
  "key28": "5hY1HiaPGn7aAZRwmTfmr19xXVeK9eci5G9yuxZ7s57BY7yLUzEys4Zems2iBezaBuNY2ugpXzMbXdvXKUu7PF9A"
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
