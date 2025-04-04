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
    "5iAuFpKr8ARd28JKRKG4GMYzXcdAz512w3EkGvr21bfzG2EKHca1nW1eAJSa5SGEUpD3C38R35hVcoeZ3zpUpCth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjeuAhhYHLVsHtv9aEB6BQDk46Ffh3zJxLnn4URaVFSj4KZijtQuX1SGtPhQLapwkayg1pX94CqegBoYEdDkVk1",
  "key1": "DN5qiEvVtLSpjpR3iRV5yYwE4XtmqHnmWnys1jiPNUkuiVN2N1ZyxabSbMVZH2TJX6w23R7WagiSNsC5UvtQZGG",
  "key2": "37LJAazJdBmeSriennpvMQ4aKQdf3ZVje4xYPSQyLxEc9EnsqJPqEEyhfgQqD3A3JmXu7c64qWMEQJHrjkuxMhFF",
  "key3": "39gsHitZ9cqYzwzjS8WAi1aEkiQDLuDbHmLNog4Zd9QfZdC5PuLttSWZXQ8S1BS3E3kAhXWg8SmBcC81ahiYQEYj",
  "key4": "5BHGxinYfSLEGYCa2omzPcG6GveTAH51ssedL3Y8jRqBkXq4MyhYJLNx6VQS83fRbZcSjKgTmvPWqp336KWYBAt2",
  "key5": "3rtxK1a4Fen3baqASfuTxvzbcR4Bp1hGfPD6dkevtvXFt3JkfdYnqmWz5tSEWVQqQnX4Tdr2BSDTNo3nEbY5krKT",
  "key6": "4sqFcuSx5f9gSdR6CS64CmwpvXczqjw9Rmbu3RgKobyWSAetxvjYZ56mCJzvxQZVaHT5LfJVjkj3vfu1qzSsmM6h",
  "key7": "3YzAoWqeHBuhxe11RaCSuRhKQ1cAJQMEqfWCjZeqgnnTh8jWibWPgcKavbyz9T5PBQaznF7S6Qn7xkaBB4BmAprz",
  "key8": "38Eha4J37CgCahDaf2ooxApAgs6GpjY1MkeaAFJMVeMvdPptuHJXa2aNMBNGQLQXMFCUrxAerXtnfNYrpqzD2e4V",
  "key9": "3QdttGfEfkmwtQB3VYU6C4KK6LzVD7NUtdzfJA4T7x7d6J18fqrFYvyHGU5GPyGeNjvdoeBifEFUQpY8umfyGjHo",
  "key10": "2WUceEoyRVpUK5pDvLQysYtEuX9SbfftK5pW56MUs1iPETQ1ayN7c46GdXEAhnEExhRZd8t7KxqUnZYLWitXXF4v",
  "key11": "2f2s6UbNZ7hmdfqW5HwpHnadZJbNHB9LRsVZg77hNFmDdhjevz22paDkM5LmawVjz5dpMK2ZiLe4nPK2o8VtYYrz",
  "key12": "4AwJ3KhCn5ztthsh18gG7w4fEmri6U4WuKvCPwJWfmpBAfrvpp5tihFfGhgfXuS8cD7QMsT7mdW9bekpq6bkSK31",
  "key13": "2BRWptNSDDP7ZUMJoKCeYXqQDH5uVMudVv2NHcwX7E8TtQnM3HathvjYCMViGUBHFApFzvu3xGpwJcqrw7KPiBn9",
  "key14": "5b9LbJbVQTBnKMNKeWjMX8r9b7u6JKzJR5bCzBMqtQBkoinpfAqBgy9LTPC6Lp3WXv5hquKvRdLjnSU6s1JrbaxK",
  "key15": "5E7wzw5aKePXkkUGFs6WhDkCF5dNhy6Z4WZwCx9RdkNzoULwLeuuVxUZCcUDpC7iB5Cjx3kQdUa8SpsvLpDbCztq",
  "key16": "1BCrNziATFjAFj8TMPRzVCLh4vDjgycCV1vVdPnHqpvZY3L8bbUT78sopAgCBoRxpRujXfXCD9bta111Y5LavLk",
  "key17": "5XPCwTdp5D2zo36xLkEVEGLx3u2DwXTes5KqCVG9bBf74NPDqcJoRZsRwgym5mk7askwwfmL9fh2tXpLYRJ2XoxW",
  "key18": "xkQUbuPXFvBGyP1zupxoDxZoMct6pGyXVi1juhK5DuNixYX4EM2D9fQBSF372MSq4o5xz4p5MzXeqEZxxquyRSV",
  "key19": "5rZ5fPzgjZCUNY6tMXuXMBTkHxC4iYCtxyeMSFYAcb28WWWdu316wVKXvhFoftMeBfAhYVEBNqKnS3kzsthT2Vd6",
  "key20": "5ZnwKaLJwEv5G4Q6XVQKqwabYKxJFjRsTgaWA7cTe73ztBXG4C3BJ82fubmdRY4CvsvUqU3MxjUZFa8bwxCw6wCz",
  "key21": "3NUjo1Jid36GJ7KNxK7Nvpe46KywY3fHCpmLb1gn74XLLG7rwM24F8BfwWwBHjrfi7XNX7FozNdDu6hfMQAMSf8U",
  "key22": "5tP2ja7PwRkYy4CwJsEfMduyS8N51Qb3DvMTKeJBJFQZMobiPzGFkwup61h8yt4P6TC3TgQfVzqhDi2Df4n6HCNe",
  "key23": "3KRFT6dua1PjzwwRjcA2Pzrn8FkuJXbk4veRGnqiHcNyFro9WgLerzR335mmYGDPXbBNZD78kgtonkHBXZdxhttX",
  "key24": "2wuKYXqVfncEpHUWbzGgUzeEcHeL9pDzmZHRrQq1K1VX4RWMv2FRM95J1KDZK4icSkdH3nHUwazzv8XSDFFgV3dA",
  "key25": "2VCWfP8jyQxhLC5QRJ77KQh7As777WxZHc2Rsd7ndMBxTxDy6Btb6duy4ydovmLujAR1cHCG6rTihqq26r27R9TE",
  "key26": "2JM1y8gyDM5FJtYWCqs7w9oC5FzWasgE1rXFV929YEfF3dCijCHVDCBi2yeE5oe2xKTC1PfDxWs6zMtEGde91xLQ",
  "key27": "x8TJSevdjQPP1P6LXYuQz4wT4u73rnKNA5F98EXMFGYAhQdB6H79RY47uR8s8QSZTvjXw2jzn7UzFXZb1PxQa7A",
  "key28": "64v8qdkBAQi5BmEigz9saYsZJSk8FkdbcKYGbpHeSpBqw84yqCLZgMavZz5k4FqYJtzvSz1yJBg3HCGxiCkf6Qwc",
  "key29": "2GzcwR6tthb38DB6FwuT8GvJeYqp8fzDTtfGSUMV74wnFAttCM18QCDnjHT4c7D2utXdn1mqPGafoRRCzZnLG6yK",
  "key30": "4MJngtubHkzFXYGcZ83mCg2XVQm8DXP9yRy7DLPY3Y1S49ZoTbFAC84yR74HDvkmPXJkP6dxoGUtRy3eu5JBfHej",
  "key31": "2Yxo5NHyYN9mSfb1yKL3XcbrN5iKFiSSNcPsdh1thMKkzk6rpfek5H6TATKcqCEymSiFKjk5hhgqLBsqPcJVJAeu",
  "key32": "3dxo45NJ1cZGWSXFGwLWdjTZv4hXkPLQYbd9Mq4jTYn6qr4W9EZLMJ4mUSY4g5UkZAB78Hj9UNHyc2GEzmKYjEaN",
  "key33": "23acqfa6mwvevjc5Hipht51ebHExkQExYhSZwyoRMX8Rzeb6WrJwjza7UZ8x9iAmiUqyodS5vu4eramrjYLnr89V"
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
