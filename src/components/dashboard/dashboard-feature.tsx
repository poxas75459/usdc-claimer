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
    "5N5mjzt9JGehi1rH2Gvrp4MK9VyxajzFFZD6s64RrGrk3cnnX6uExA19BYqNQi8RzocveET7P45wH2UhGRvA1Ck4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pgddp1vwkFK3NgfsXXLXXe58LSP2VEt2MMRHfiNCKHKJFHcNyX2bUypFDoEGMizEbhM3v5Nv5tsAzBRtBcTwUD",
  "key1": "3rQdktWV2oZHaQbYEhkxSbSDgrywXSUjsgsYhJBNe2cZtzmTKE9RMZ9P4CdjfErm4NMFP8TmdfUXJRT16cc3LcMQ",
  "key2": "49esdcdRVH6gJa59do1TqiEo9U1KADfaZZ3H8zMRxX5mF3T57NEzs5Qo7rf3tsTZhbnUjCnsVqpEr3A2bSvvKND8",
  "key3": "4WTa8G6G7eTBW9Be8CgXuC7kBihurj2YtqqJs2r2wodZxcAWpmRF6trt8gshZQFRnoosBMkEWqTZLwVWmPVeQUS1",
  "key4": "N5CMTUMu7BkQXd5c2GE4NvSDa7aUW129RGaiojwfF1xcnn3SM1ojdneWFJ5bXmF8MzesH6MHe9wiJoGKsu9ikeU",
  "key5": "3YJcB9bp5r8KZi6HeqGrG9Wc1XX1BQbm42ggoFojS9HB8u4RCKXLrTm7uayzS3B6VbHVdkCPhbNNZY2AGCtESWC9",
  "key6": "2dHLnmb8K8DWevjHSgba77MtLnLVG5vhMmdkddvMq6Rf39GHJ1muhH5BP2WHg1fodAMPrdqrFDqYWuKtu1UDk74w",
  "key7": "5kcnxHoeVcUV1RXP36wDTWH9fn5HB1ZZmcqbNy3BVbUyTaWVMuvuJZqw7UwrGb8UwCfr6vLjWV1PKYBeaYgHMPgb",
  "key8": "5YgRBbXfwxJkELCeJMcFFwi7mL5iT8v6qZBtUVyKM4SktYNwibnYve3LBe34Lwc3kxL5CXHjr7SFmzxnn2AuUr6a",
  "key9": "64st5Xev1qWBi2cG9MT9ZhzcL6JwQEZKweXrVeFcCceTBsKcYXcFysdpwMnARJexNVZRGAR8QBnoknVvFJyAsDMk",
  "key10": "4thJd1fXatTNoQiKHuqTgzJX4qkZDTiYBFF4auwJacpVjPs9vkXQokjbNSgTbhijdCfPWnFBvbBdniigyxpN1i3k",
  "key11": "3hHjJStnUQXPajR4sWTQcfrQN5Z498PmWL8F9dbR7iPChcGZbxGS2EFkCoQFfj4DXA63FGTC9qtn2eaYdpzVQwGY",
  "key12": "5htKyERFah5dGd8ptDZpze9eJTRyRa9QA21ors6m1bZBCk1JZvWQZ35XHkZRPsw87efTvEPnSuUtGnrrFNqrQ5Xi",
  "key13": "2z8ohpweEH1kBSPnkGzh9hEFyuN8EmBH1CCMvLgmupKtTsFPVuiUvgfdo8Fcn7BbhF2NcqgsLrbvKL477q3cJF27",
  "key14": "2TkpZtQ3K8WZAFBahsQ3aksuoZcmAF9JoqhA84keMV1LD2yCRm9jKcDrnnK3pddKixdYs5eQ1ptsuDaM3cxfUSd7",
  "key15": "5iB3jgUSzCack1znqDxHeHN3YL7QV8tzHeHp6vF74ySijLVWSzqmW4YApAXT67VESFG6y8HFA8Mw2DmUHqLV6gWw",
  "key16": "4rWCvpzzGkCBPiyD5W4DyjSB2yVdqTBQReZV8HD5AXtmT4tKx9xcYDNqNyLcWPN2vfJjFvcZgVermmciQMSUvMzF",
  "key17": "2Hw1iYJ22joD2GKEcr5FKhkm1UBT3b74TvjEbXDQ7dKDRwWxdzTv5TBS8KZUsoYANjdevpa74zm3wYQdYAtRxDn3",
  "key18": "5ViPQTdaVsdiW3GsFmK5x2e6cm9e8YoU17K63ejJTzyKAFqg2gEYekHdisLssrmHpmobDAf5qShmEDdEAX7enutk",
  "key19": "3bRQXzZSaRnBoXdTGbLvq2ZzyK9MZkDcNywQMZyEM1UvjnD2hc38UyqxcBytXSrGYNoBEjhwkX73WbXUnZmvFLgS",
  "key20": "y7hAopN4rSrRvUuq1nWfUezDRi4F75vRukBXiVggNNsH7U5Prv9GEGGe1rzMdhe2JfEfrgioUj8iE8uTmanz2tp",
  "key21": "5bs6Z4sERdn3JwuFcWYBwK3rPhakoPK3af7qLqBjY469gM2asJrz4cHuWw1UKghiYXio4aLXHHjx5nxkKVFKjL97",
  "key22": "44NJKmunVPCLdjk87dTU14PZee3uxhaXGm3t3JaxZcE69QTBADYHZnHmoCQG15rXgy9yAisvFVGbM1xCr1M4DcoV",
  "key23": "3mfQRFQifGVCQEDtAAaZ4wByp9wEK4zGt7m7rgLR3brwFnPDxwL5LaqSvvrbZGZfgxsGtne9C7XtDcs9CzmDtGKq",
  "key24": "4zZXCzwzkGTJ5wZhgHjRA3ZnsWi88ZA73MpxJLugHgfEG8VfkcCVayLUia34tBpgKZwox5N1p7rLWmX6VEWQiYAF",
  "key25": "2eQyWK41cuXGYd6jeekhq3SJjpBe6QU1pCYeH8obZSyjMGKGgKMK6JW6pU6FCkvjS8sWWCs7ZJmXBZd1NPVuLZXP",
  "key26": "XYSzcgMjKBDgG9FVAPYYJiyRQjkTdTx2aUPb49rP89p1wUAp81PknSEzVndVfS6tpP8MJktuKKVThzCvbcZc45E",
  "key27": "3JGj2PtFHLHDN5Y9dJ22tjqdY5g8fcAJ1ynB3PXgNSgivLCM8ujFRv455FVu6qH8A7eZL1A7ecmGDauDzjky8ysT",
  "key28": "2dMRbdHkjX8rwiiEfxBb22uVo4AiRydZbCHZdteF3yd9EqZyAuh9qNaEcT8GXg9C8vqpYUbZ9ybKzoi7gSmsNXRu",
  "key29": "51DhwVTYxbVW2gURUwe68eU3ddNDXdEEcreJxTundVt4kzSSzW5B6JNf82KY97MpgmJDX6W8ujgMMArgSNwxWvhu",
  "key30": "4EYTkfysgqSf4NXMrBT4u8qGJy2rUsN3ExE8xGUF8zQF5zFX5Uc34WQzHf75k4Rrh77KzTvDVPzfu2E3JptWXk12",
  "key31": "3W1VLuGYVBtyjftZAzTCsWxu6a7mMTpvQ8QUFt8Ns7jkU2UqbHnQ5w6RKtRa7gHsjxN6xba7f5WJzHtyG2PBTxgY",
  "key32": "4cYjVTuS87jePyzW34AF2TtmGG9W9eNbWbiV11JWeDufqkL7CYSgszTiZWxUeBHkRSsJuiGJoX5JnTFhSMEuTJc7",
  "key33": "2DmisCyknMd4rCg5Hx7mnyZPnkTWvgqTPCGXUxXFHqzZYbxcdpu4sxiDBUKrsoFdyoN8Hndnb8DkWM2WkoEK2US",
  "key34": "5adxATWh4jSEuUpxMjgCKE8FVeV2RZ91C5LBzx9cFuCgwKpCGqutMMQwpm4wR7fVPrBQ56yQJBCQeYCCouamf5H2",
  "key35": "2igNsPcNmDKsEXXyEaWv46ciFemQYHEjgdY8NiQFJZeDVbCQ9vaAUFsQWW9QxhZ2wBwsjneRifQCLy6X4w7EFQTk",
  "key36": "5kEDcyrTYmLvMPRkbz4PMxZ78yFbxYxNMsmhorSEb3aPDTqAdWGVXrExeYYdCxwVBJb7LToTSS4p5T2Q4PYqsyST",
  "key37": "5qfVpMrnXynDn8mPYTZkuAruKHUUNWvVuBtbxkxh4aLvzP6FJFvH9AMsMMpu3f6u54fWc2vefzvxCrv6AVvsQJWJ"
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
