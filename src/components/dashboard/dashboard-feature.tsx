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
    "5jRYEt7ym5MBGhZdopNchQg1giKZEZC9o44aaYpt6kTn7KWwKincJDYjkRgcs3379u7ViYdYcexTdjW5NKZnrJT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uauYm3e5pqb2CqzxxcihptbG4Cp5gAS4zJw2qoeBPYnUP9VfZFeHuZsv9mrNkfPFJRhTtMU6CFQjse2WbRMFGR",
  "key1": "65MaPDqjCfvgMBqGRZoxQLwJAQdp5wKhdK3Z5BWFJvFckPE45p6HURn4rpmgAvSE6g9xn6fi17Yf1D6fXNyqTAKf",
  "key2": "3LqgSUFhKfuaWcHeBGWDRs3HHRHZ4qgGkJyBYPmWJ11FKZyj72Z2NMEg3Ritu1brZ83Tdwz45R1fUwdjQzthc7RB",
  "key3": "p11E3qsQP7XyCGkeN7qdktf1jKTDE9PWMPWm2mHDtGY9QiGbbNSJc4Tb4oy9cdY8haS4i5npbFryRL4ipT5cmQR",
  "key4": "5EMyUn7L4cfHdxyy6Dd736xoqz7Eajw1zpLVBcWj5MzEPXmneB28uwj4uUWqXQDcemUzW1VfV3xFW9uJwWv9EQ5n",
  "key5": "tYfbT4Xz2Nd4iKaXEfnq8iMuM4BnnRV5MKErirpiJL8CQkaLuyjqQVDo2oX4CX1U7CnrAjNiY75kYAC8kM41NNL",
  "key6": "51mVktedFwZxum18xJM4aZ4kLuo55wjPRN2138dEMw8W4TPLBehaaRfNLeMXufz5msTH4k2ZDg6DrxwBrGcog9HT",
  "key7": "2AYiAMyGyvqFmVF9rpkP8wFFs8Hs1zpi5ErSvSFC4ozJaugTH9oogqKYQCp3y5f8xURTp8YGCbkF1V25GuE5JmuU",
  "key8": "316XpzoomsFHyQk4ncS1nFsy5dWmw96AZ5t3vx5q3BNisXxzEFNQnNVjh2pcrPM88RMpVEVa4UQJ59J3W57LGeAR",
  "key9": "iytbjkPQrEUHMmT9FtyB618hzQy6Px7kT9PbVW7ZRSwWM2vweNo6EC3SAuab2h4vnfK6M4oZ28E5s8PqMz5uUbm",
  "key10": "dbiRPpjHu7txBhrXuM9wuHyt5mfiQMKFcbjHN5J3ddvaUKYvAtCurv5zqiBDpdEbP5UzzGjsrnyCYo3DxMidPkE",
  "key11": "3rVtgxHkU3wL8VfMYAw1o2xozRFxVWuSmB5qq8KsihDsv3HLHJzFYzP7MQctAJXZuYuqh4AcAV2RWuRAwBaRgMQ1",
  "key12": "5SroWBqj55kpxZfdtdSFCYSB4KTAWefQ52v8g3rLxCvB6puFC5UP5RrQqFqrU2r5SmsApGyMmU8rs5T4LBQ2qUHR",
  "key13": "62AjjsFJandCzLLfqMp2n7BLUWXi9WSr1rGAWCCN4o8aVjM4SVmdd9r6LRSG29RH7JUsKpojKQRtEP7EEo3nGqA9",
  "key14": "FNcy4ica6kx3NtwvJfQvGVZG6dXWtU21ZUX4FhQAhfE6Y1hc2BuA2kBJDayPvLvKmGcqhHkY1M8ceQimp2HzAaz",
  "key15": "5c5b4rTMKm6kvnTuNEUU7ZiPdEkntei2m1HRak6QXLVUMowZRqVSKTgsRGneESszyUpBR9D2c2MXEnmRwK5jCMfB",
  "key16": "4ggoVYnpFeAZ8tSKRUFzQhuhrdYRxZToyk8vZ5dwK7JewuLD2YNdBACtJuvZeAps9PwzccqehSUQ8nFhvHwuWqz8",
  "key17": "4nm6Dh2EHr7BgynfAC1viRA8xnjyChmDqY6cALhAmzcPwCvCcz5jwaXYkhj6dk1Szd2v15zFNtp7jT1w1uTwWftR",
  "key18": "36JkS2EgxBVcyMQdkX6vFNnPS8tLSFnVLM3UU49CNwMTu5397y7AafHhEfoofbPq8daBLxa1H85XYEuCMxAiit4H",
  "key19": "3isnHmytRALTp6gS2oMDF2AdX4vNY5CEExkNJJRPE2WcU6xnCRLP5TK6Lg4G4QFGtNefM5DGLnQsXdiyKh1FHn77",
  "key20": "4tEsenLjvYnghD3rMfebmZ5ZbJpoznUmRfa64KRcviSKpukHDA3Dni9R73ipVw49Y8mLz3bqxGuMZqtEviAe1kXk",
  "key21": "E4Lz9gVfEnpNPPE8KpPSLAk7rmXjKv5Uu1QynoSbdvBEXABmCx5FCaQEegqp2zYUb3ws5YkeuWLX3KYQYtgFtqT",
  "key22": "5yyTxWLSD2AxDATbYgL4yR7WHu4HMZAoiPeemZzJWuhLqawgF2hU4FG4z1HYQcGwsBzgyDZuiq3TzSA1RVSUpX6R",
  "key23": "5JqtaQBpbo8H3YQcQZvkGqD8M2Le6dQr9sbi9Wka41EKHHpfYF4o2rnqgrBVVhcZZCnk8Fse5RqcsAmmTvQJjCbn",
  "key24": "6Xq9DyuWbPFXtxNcnqwz56FnMTHFwMEFsfVcqx9otKvDrq8xzYsegUuVyKnUdKoX9deH89wJWvqMFjJT3dhhsPt",
  "key25": "5AAUzayjymbDG6VYDNcGEKQ7jvCPJJpGZNimwsQhc5RBVj8cy6uFCVFi1VM1etYUR4r5Bf1J2C1nGmBRaqiCGeFR",
  "key26": "4XkksxYVzJWc1BeQAE7oZ4efsJyZ3VstyGxA7C3k3qnBjEBKKtqkDZC5MTExzpoy8DeCNwLMK6EF4x8Ut6XAxi3H",
  "key27": "4Z48Z2VKbs1HH5Hsja4E2W4CiqkgJag6at67zNrdPkCfAhfSDZ7Xv4wkSB5WMhaeVdGqS3xTCduLhzKKmqv7nu7U",
  "key28": "5z5sLnqeAwVaoXD7b1Xa8ucDeg7wMXDsv3BaFX7o4j5CSVh9L2s6uebqeQhsuLxjWw8fvvbNnrfWqz1L8WCcb6qt",
  "key29": "kmFDDbRfbCcbhaKMQD7MqDShV8qD4Ky93fUkBxRVZjQo5xwevRxYeDaoqXzd5pK1rSf7991XWP8qMN3KxyKL68K",
  "key30": "4FZeuRv5KFpz3ufrN3JUBfDW7Qg5JaALYU559D13qkdG73uyirXGeARuHmNiY3VyZ4qsCiqLunvQ9CjiAKCP3S8b",
  "key31": "4X3BKCkkaEG2SrhgQjqVndXCH9WzVajuXaeLgVJiwZyW2ESEpLZ9JE2cTggoHevhyuD478DjwVhYGuGt2i6QoqHX",
  "key32": "42WKq8KX5jVNWh5UtRcAGBcV71JEipDngwikBbC6XXDxiPjWjNJXARz4cjPPeVEQyNZcfFhJLUmN4CLjMR3e9gU9",
  "key33": "4eWTFReETzJ6GnyS5pPRJicqLP93ZT9n9P66iNv9UCCjpdtYtXPjPeBkrTx8nGk2TERzexweQmV7k1NQStwgNqUp",
  "key34": "DF4gjuJ7ZHUycLaYzrzz1GbdxwAEoVpgEzMJUofemQHXkmLFwJYnQhysFferMbX3Yu6ydwJDiL5Wvz4sJYWFiJJ",
  "key35": "3P6UUnmBdXKkgMgd4NAt6afPpK1Jc4E22qbmSvPUTtXAByULtFGjvShMZjEQ6sdSEdv8z9ETDbZE2zh4qginWjzP",
  "key36": "63cgmQWPCotDApWeezghfX2dNArQGVY5AEpBtBrPxtCb7A756orEAYCg5Uxhqx9UFzmT6sFbiRPytDUmUboJMG33",
  "key37": "57xjcUyb4thpGw7FfNFXDctx77ijcvNZRJkuk1wxhRu3FHLMLjxBM3taziPsbKj5Lnc5SwihFb2MLv2qqHSqDzB",
  "key38": "2Jk4EBuX8g9UWYccSPScrxLLiFvNgauVzPReKxjhcjDRa4AggG4vpv9Sug8RZYsYfdCwp2R3GDVnAjLFRjXTADjw",
  "key39": "67DtpY82duFRBZgjnqHubL6kdciuhxNAzttXAmyurzMUJWHiK19GLkQGm6sBgXAiiXoue5ND8VVr2wCkNMBTWC94",
  "key40": "2jD5yPFH9MVKQ3J9cqs3XNupKoGtdceErocw4rcKhhe8LpWcj6RmVvnzpqG6e3gs5XuyDz8QEdkeaxdpXcgsH8Ze",
  "key41": "2Tiq3r3Qx6HiYYUXqzGxYHD36QTv8rXzE4Cm3ZXwH64yhJXdfr3opJtx3iE5qRSEcoNGhTHD6onsfgTFr26CFfA8",
  "key42": "5CDu5w3sav7moEYrBWfAHBuFYYSc7Ffq3AeCcBw16LWUTfJyxSGoE2znKRaZEqpVCGZbF3pJNb8XBk4HGaY12wV6",
  "key43": "3xrdDqZqM7mPC1SB4uffBFbVoFrz4LKmhM8ufShu2U85b41QvXVnajxXQFfabtmLLnZAuQ2cnwf5gbTHNJerhJxa",
  "key44": "4aJ6TRUjHbfFc8tDGFbvahcFUVR9keQheHZYb7QsaEdzc8Xpa6pqgMCAgncuhDHq9GREN7wQBz4YgsAzFpWgTu5t",
  "key45": "2msM2a7r1pocWZZ7GN652D54zGZA8Pkv3Tn1tZtYJc1rHmi5LUGFzvpLnts93UsoHL4gd82pTRYNdd9cUNr1XDAd",
  "key46": "5UCCSigUYvFwsP84HGQ3yTMs8ZEjfj5Wwf5dwG2h4T5aLjDgVHSkSokA7FeUE5xS1KL1JDF3TKXpU2nhagE2Eba3"
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
