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
    "56pSzpH2c3k3cw4HFRiWqrBAeCkfXVYhwrznZcvoGLetygbyFWMG7oTNc1RTwek5G6osehEwUrZupULPJJ69SEmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpU1BAiTmaQdfT4QhV1nV2e2we3vnQzpauWBw1mVSH8xzTuKNm4yCHFXnozbCGdtifKDTFbpjC17SBpQDUUJauz",
  "key1": "29NtX4ii364UnquTr2efSTFBmLGXPmzURJLvt33bNjqDbFeAwsMCFcv7hUw7saSkD7bb4RCStQc7T6fbLdMNrGx5",
  "key2": "US1sWrngQG2uwLRAW5r1naqrzNML8qPg8c6gMMyHoBsT3CQCVsk8KyNh1bcLHP7TKxVuqokpCy8DWKgvL7zZsrZ",
  "key3": "2ZEu3gUcnC2dE7y1HLscP1AWbcYjQ2vBCAU8WysNtxbU6WkbyTF6qXWh4XfNEpc7AUx23W3ydkrGCJfVpiSergZV",
  "key4": "5xBijWHMj2es53cVnP78JhQS9W5bcLMeyJgx9Dxpzx5utM7TAHJzWXcKSFpwg9CeWC3mnKBgx12z5ZaJWyk9Koez",
  "key5": "5nZa7HbB24H8zd1ccvrv3UdaiNU1MDzJHsVHGfFAPzpR9yXMnrrXwZQrYyM3FVFfxYfmNvZepc5hyLUJ3HbLACjP",
  "key6": "5UmwoRTE7r157KJEcpGJhARoRyKCQw5xJhwHgp4UeWzozHmhqhdVbF64QNrceMqFiRAd8cT5C1MjjtUDECqkJZNf",
  "key7": "3gSnme1UAae8on2irQHAgRShjKiiTQ4wbay5fXhKTME1VJVzRMviiaQo1SPdikxyXAK4X2B6iZyCrPTBXPZ3kRsJ",
  "key8": "58QjDovQG5kDi1Y2Ypjwve81ep3TheX8vGUrQem9bj1ZvgFUrMqLncRTEEhWyr7xX1SVVqTbiNyueSxQKfhLj5Vj",
  "key9": "4ysKJHM2ikbPkp7ya2LY9jY52qXxfXMw3nGHJ1Ugun5vg7vK4KwYtZS6imfc9HoeLHSMFtbs473F98HYHYJ75Nb1",
  "key10": "5a5z9z322pVn4bnBWm1Ak8s7MMTnG3a3Rj7jmEPWeMFa9X5NEqtK3iHX45vjUNT4QSw9t92bGXxJ8u5YcW9xxH5H",
  "key11": "2UQXdpfojbvGfPp2d5SSYaie43dp4nTAswEvFhquBTxiHpi8yiooqjGtvYbkDCkjTtSNiUoWH1Yf8P5nFRExJijV",
  "key12": "wBYhfBAwWo6Sv8dqsmNA9P9XcyKDBPybxn4eEDtDCmmGc9K1ja3AVydJRiaFk1jdM3c31SaqJj26aYtaZ7Gkudh",
  "key13": "3egMhgBobQHBZmsXUfWPGB3qHqPs3oFVFvGvSLYwCwzQuv61e56A816VwFecFXMMFH2awPyHJsePBZ8wTFjFThrJ",
  "key14": "4QzRikzQqYz6Qpzsx7VZmvvb6u25DpY2qn3E9fpnmfdboWwi4Qz5WmESHMYf4sfJ8zcudZeGZ5konKhA5UE7yH1Y",
  "key15": "4dGoDsgXp4N7sBn9rLnFiHSVU6amWg4xrkT4YNP2gNKYffBimd5CVzUudYNtMowN18HChSomsrS3HtuT6MpHrGCg",
  "key16": "qVHaUGcaeU2WuFzJMPQUY8wqZ9mwKKURsNTsVtuyfTWHX2r4DQ5NSLBYAdKkatiqHfdcdcaVBCuQbdPSY3KqhiR",
  "key17": "ezKv6eGR1n3AwweqbG5FVLLWcBU78vAH33pYLA66DDdmRkTremZWDK3p83a2RHJYxVmWrRs8xWvWjSuYigzA5AM",
  "key18": "67Joh8BEduGMWpyywVdyehrQdB7mjy9BEmBFF9iZSQPj9oJj8JknVN7qX6qW7gCPNmz9p6QrekC3kYBTQniBKkQA",
  "key19": "3pEMasES83yJxGfsk2X321Vqu3ytXqeMJVWtXDjm8yWtgSFzE73XBXRouko2gneZPv18Szi5ym5FWsUNurxUfSyY",
  "key20": "5HHxCJ6UxyfwXUAZrHnLbN3yNCRdK6kEMo7xLVJupMTtYsSTrcPtdh5NQ8L3EWF2GqLd9dhXm4U446Sfpvd2jZbm",
  "key21": "5eratTi9nbXrNQ1Hhy8dUPWvHfHPYmnaEq6C85DQfiVAvbqGRVAvbmh7XcMRLm3YjGYH9qatDWAQUcYmCSAnmDou",
  "key22": "3Avk9TmoqVzfxQGQL1YaMWrpSYhr9Rnh58R6cwRGgNQrLLp4stPvKvErbFbDqpX1U3iLg1bNbE7F3G1AUxv8CKrs",
  "key23": "27Ds2YBXzbboWLK44Xo1FbSvydeX5D1QhUZTNKF2CUhADYQbATgQfEc5NYDcVXrwMX6yHa9a5n63iovRa4LFP8mh",
  "key24": "GYD2LrNpg9sV8wXqwjym2F35QDp7W6YX1T9NUGjoxnXXjdGZShsvHHYX83WDqrNwp6q9c9HoRjvcBG1NvJ6FtyV",
  "key25": "5fCUfPJoWa6jAEbZfXwKvXYQ77vu8ZY1bPy7kqtiZRmNjb6uNibtj9tKdU7c6gvfaPY4XXueUzKdbze5vw8aFY77",
  "key26": "41VJasecWFQmqfgEVxoqySd7YS2whvCjPE8Sf5us8gfwQgj6fGhemByTynrP8EBT7dRAd2nZdvcf2FeXiYJhCTvE"
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
