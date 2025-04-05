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
    "5KYnZd7wydGu7royoXXWhDBUnLBZg7hS357YThrLZFYfnNPMLE1WcPVweUCM9Tv88jwTNVPoMSpXEbsGBKv9JqG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVGE2snAffiAyJkJh62yjgotsL2jJ9bTSWR7RzEdj1HCRMsrQhHaVYGThd88YmBCdJW5rw7muZhS7kMJssrFN7g",
  "key1": "2jnvaXpKoquKyetrCBXXfoT8YNtXtkuFEN2DY5YU2B3ikf3uWNjhZCWVWkDEF4xKYvivB2pvuerwNifmsShvJpGi",
  "key2": "2Yd2fZtnvjbmZk7oZCsPGpo8tMBXb85XKsWrkWp8Ci5qdbt9Nsj3FVjmPgKjER6VxEVznU8ecddKM5oDvxA5N9eK",
  "key3": "4jE2YXpWWfygojAWhLeB6S73sbPAQRoaUVqC4XuqEXNuZzN8pFhwpXpaNopKSzeNtsHH54MR5VChqRWfxX5UJVY9",
  "key4": "3YL3kLouGJhLJ3mFxCKP2y3RNCnPKeLMmVdZ1JWvjhKBQcVktMg2JdT6i8KrFdvn3CWk8dLAjgMEvKmqNXhsrToz",
  "key5": "4BEsYT6uGKFV43RgFdToPNiV7ZKFKSJExS2uT5CyZtFBXiRLPZk49fKi7aaV6Q6HVTB9VKRqhnw1C7EZCTMmQNzr",
  "key6": "5VPYsuTT5Wvvhsc6Xjdj7judEuXdB1A9CFsWZ9bX8n3vvWmMkQQLMJYV1XS8r5MY3HJGnJ7vrGzBxqr5RGweY4hq",
  "key7": "5mJNnhBvpsbak4EByQqbqz6dSBe1AU1JvscsWbvnq4qNxrb6WQkFyGjUrPNugmWZR6oHEjyrQERkUk12vGxEehPJ",
  "key8": "3Qwjx1CxGML4kbh9S4GL1bzVLGoxv7Tr3dcvd9jBDoudGvuYSSJB79md38ViZHmKep5sD4QR68YKMxKWGuWEGNAu",
  "key9": "3xfbSNxUzGSGb1oyee89m4mmgpfE1ijBC8ahspwkKpHinN94S67G8LGvwD9v9rh4HcrfRTafXJh6CQC7qPfPRErc",
  "key10": "2R88ngvfZHXKbZuf7KLbFbUaEjHvvA7fxU314D2rjzHLCGk5h1J1BvhJE9xnh7iHZZyJzbr3WzL7rWUA2CJCcaoC",
  "key11": "thhMX8tRpVE8VVGmLcGihUf2y5knvgqnRDQArt57QVCUFr9m2cXW3RLqnmDXis4BKbeNRrkFf5KM3M7Et8wESUj",
  "key12": "6cZtfFKy25z5zyx2As5PKh7NNyAirAqGxRtDmscGE2xqDXtk2a1v3u3HRk6GQ6cpkJ9Y6ZPvYxdoWNWkZ7Xv3rn",
  "key13": "2D5ggj316zULj5ZAtGKjeopRGEGJb82C46p3cTe2EpfJPLij8MGeU3hGPQTLoLKouWaCZMB13KhhVKBLmh3swU65",
  "key14": "5LKAdV9jpCz4um2Qoc7SN6wSv2FeDfPborwkF1uE6aS3Muxzt7ht1FCNBHkP2soctTqkbt5kofzFrPAnzdGZV45d",
  "key15": "AW3Aq9xWogAasSgGnwgPJDVW8UKHKogeUVWfHQ7Jy1txxR5kGEhc4JJL5WRqX4qTBMSJ23r3FSXPgDQrH54o845",
  "key16": "ZmoRX3YkYCVUkEB7LDjfkMSLyrN3MEY51Y9EpX1C5q9cGs7q41GRKrnYLgzwEY72VJmcjRk8jVKLr3RLYziPG3R",
  "key17": "2W9uP27s9mjgVsn5nnGsPtHzCZCGesQ3pVmzknyDAHCxu37htBzKsAM2WoRLaKbddHN4tUrLCyeaTPb5wyo35d27",
  "key18": "4NHN6iUe9YJTfDFtdVtAd6wEaeX5yaFCrZgWQfmYt4QMAUPJ914SJh1bYYHbFp2FCijwbNbYCdM6k6H3n3ZgRyse",
  "key19": "5m56CVjxc1NdjTnLy1WuNLcF3XJEmFwEDFmJaXAkSSfiiKQzTDxZChWhT8TCaJUrQ5zTXHE91pcYpSnqK6giCJYE",
  "key20": "4Jp3M4huvmAaG6YhG4SnR6xEoKZ9UhhsjU9neZMuQHPjHzVqCH1NZHp8xUBX3PmhZQXbDVFSu4mtgL2YsPURkNrN",
  "key21": "4r4PmceoA8tC2zZqRcEuxRYBps4NCdSdu6eeKjWfBkPVHngGHua84nsgMMjxXmYVPwYvjtMUzVt4Mkr9tWbkr55Z",
  "key22": "5b2qXPsEPQGkWHj4Mwz8vr7F5zeXf3oSmypmBtd6BaHTEKv7utMSjXJH5TQEu2xZM2kD87ncXKDPg3JsNXiwoTTu",
  "key23": "63UbFoq2svEA27uZyLCGk1urPYFnHb7VKcsoe7myqAJrkAQasGQDEgMZyzkFGmNGpWQLYcDj5JMBDCZfx5kVRayH",
  "key24": "51RCk9JazRAwJEj2KSDPtJt4LRnr6g5m4xPeFu8xZq1PcatZvQcSN9Fc8bcUa3SsazeSYXpMuYbZiMbBseuPRaQ",
  "key25": "5YXU98YNRkVSc5Jo6bePvJ3FHrQkYsS4KT36ms3UdgUSrAE8GLezc6hAnMyHvBPrJGgo7Semj7vRXtXJihAbSvYb",
  "key26": "4ZMDgUyT96eHnnkLYapfzjNbrRAczaUJWHf9nm67SZpfhKX13ZXZ5rPSMgrTeff654SGSZffKr8MykdGZzXkyGCL",
  "key27": "4YgZjzFVL9h5U9zPhUKgnaxNjycdAAMUre9crj16GcEQ6FQ8gc67qJy88Z6bW36HixRHoUytu4EBV8dmCk4SDzqN",
  "key28": "5PZPAXJqYvV7xkXPZywx3AusYaAzQRHqr1nnbpL9p3szKKpUVrqXF8YZhhM6xv74pY2jidc1reBoJtvKEwzDpJQ2",
  "key29": "3ETcpSg2mTsugqyqNU4QspQGm45UJx2zCnTjYsvy39hMPrqWeANrapRCb3F7KvyA74CHv4uQUuWL6BdgpYWay4Yn",
  "key30": "3ZQEpDYZFL4nJTCU5AQfy8f1JPRxJKFbiBpysqR4Dtjm7dZLDwq8r1DuL2KrGb9ngKnvfNXHTiWMQGPduWvQDDXp",
  "key31": "6SJ6fPWsESkbnAYynMCu5iTpuK2Ks8AV8GjTu2ATnApgBKE3BsS4jzKfqhh5gs2CbFYUrC87XX94jbtS9YzP6VV",
  "key32": "3uZ2dkZjYtDwkfdRVDs9HMreypiNdGFvWptFXgEGm34w1UvmeEibP8So3c1hGtfnAHYPMVfVgw3hxqregS2tabrf",
  "key33": "4SnJFxLGhPYSzxmHBWQKmpwqBqSB67gRqAvNoBVByhTwVPtVTFMAy8GrnuQxZX2nR1ChztWqpWeUhqwox64LCUAU",
  "key34": "bZNCdJuGeiyb4CYNoqod2zbmtwp8VrWnsaihZsr4LiKXAYax9eVX35htLEkTRVa35H4LDmGxYoqhcPyEmLj5FUb",
  "key35": "2yJfkdsdrKDYNBHbRtP7SxyaVA2W6CnxXprhC3cUFjTrWY3azdkgLgmcAs62v2R5LVDXiKWeNGzGf7GJYwmE8euh"
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
