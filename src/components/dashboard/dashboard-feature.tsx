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
    "4eiAP1nyYuxQDeVFa1ytwtFVcG1DmbDkndV7SkfYw52gtFeeSGXBwa5PRcrNJDRFn94aKk82eAnYE6RDFJstWSng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YVheBDP9JRViSp7EGfLNq2KF4ShweDY5WSfdPMqixeey4yYKN4Beefj3c1pbwXAaYXeCMSQVm73eZKUJojY2Wyh",
  "key1": "4FDKC9DzKDvUL9Xdj44L8wFBDazjQMivMNMhNWULaUKwVdN3b7NtBMnVabT3UYdKqF49vtzS8rRAyGcQD3FU5sTv",
  "key2": "4k7zeUvM8Fy48AQrJWZ2zwMCLT57ntgvw2TR6niFMgc15kfoLeB3Bzrce7LK3JqzRmygT4qf4V2iJcPSJq6WfEYG",
  "key3": "KeBw45MhgrPzDeNX4e4grHEDEaz9ToE2yKwKk8xC938Sau1qafoZjqaUf3L35PAEW3AUvrEZN2nF2HPhVfCWZD4",
  "key4": "3hVWdQacfY8Nvd9dh82MVXD8Pi1EausdYE5U9ZwfBVxSpS9KJDVZTTD9FjGP2S5ocQtLgABiQbvQdbqh91fcNNEB",
  "key5": "d7PMdsQiMSgW5v2kxigEs3dwb8sTtD1S1CAbinsiJCQdRsumJNxFVPVvXaSrgwKEHkqcGf8Yfjuu1uwB4yXiAHd",
  "key6": "5MfYTcT6dQhh1APTfyEUnCAwHpUneVbWidNmBsqVQXsRHD7McnubnmPhuddzhHn1fxfXo8WLWstrRQWxnTr4aoSS",
  "key7": "3wputBUN5xX9rBNQh1VqCKS8LJqipcyZZur2rit7LyxFfhmeKCwpJqxZxiMwhqpgwENcMGatAypcfRC3DMG6wW3j",
  "key8": "E9t4gWGoa74KeQ1U3BvJpqJiMPVHQsS6pjDchfHXARPzDcNMngcjFywqXxyvvRizg1ids48t8GRSVhpap5vKBwv",
  "key9": "bpNfgH6xpq5yH718pEj2JpVnnQ8g2357aTkAQmv3FkzMeS3QA7iCANN8vyw4QBfh5Y6rASRtA2GgcvgbHUaXuS6",
  "key10": "AJJ5V3Jz6EBQnEHfTSbBShQsTnJzt6ufrvmWsyD7bMcuedhFX1ohuJEWy38Wd7CX5jLJe8mxwpKDZCZgs2GLzLV",
  "key11": "UVVUQ5xM79bREfXKCu8Hqh6aMu1pRAgBYBtApfSPr7UvmpM3cWFgQLBrV3Qo9Noq3vihDmVrkYuEG95xRYbLxDk",
  "key12": "5citUXMn43utEpjdkj7uKiuNSwtfFxbsR9cEu4ZbQQrGiuZ3mvfGdhvmYdAcffavNfN7uJRDZqXX61o7Rqn9ksE",
  "key13": "qcTXGs2SodC4YLmpUe8ne9UMYra956o5xthjhgKoRQn4MtSQAXgp9ak6urkypuiwDSBd9nYxDeKsVrLPiLsctcG",
  "key14": "3PcSgkmYuwDuiDFHp3qo5yFfFJwp91VjZj6yvnrsgQSRSzJU8f7ES5YoMTk2ajr4cSv8Z8oNxBJdSUWfib9z8a3U",
  "key15": "2Yt1fNSu8qT6ccUPFwk9iNQ9BCCKcJJcBQ99gnsqnCjsGCv6mqeUWMZbC83PeuzSCpS3bndm8sKMpzxxFgCfJWh3",
  "key16": "2CWjay9bdjZ5yA2pJ1gv1P92f4jMnR3rVr2CcojL8AGsZ3HumtbTt1XSAG5tWESfFtggTAHXmqmSg6uuKjMyAe59",
  "key17": "46wfTU9E5FEbtEeNFJvKH4953yBigoxV1bUXTLMjphikkxTcmzGBhbRWJUp9Gawrearu57hk4mnuFKixANosNnMJ",
  "key18": "4dVHoh18Lw4khKetuxkoaWrw2LSfgEYa9PKmNtz6LytVKWZvbsLWqzbAnHuVT1nCWSn1FStSXTgnAuZKJd2ACSs8",
  "key19": "66v5hzTyAViaT2WgLGMpE2jyPUuwqHfd8fF2JNGPGox8FjukzwHTsazt4EdF7eHzMnjAmB9PPguA9yy8SoxU6LCz",
  "key20": "31CcgtG44CrrnRHSU6Gsbw8d1HBgx2its8fJNfsnjD2yhCS5fkKGiGpTMQx2wxK9eLH3FM8e82YqrQkfhRrKmcAe",
  "key21": "yPXpp1HW1xbkFbJL6Jwaim51Ev91qdt1m7t8Vmnng9wh1RLN1Ry5XjLuC8bTQSGKYiBmrmowuPFto51YpuFkxEn",
  "key22": "37tyjEAffYSWWgHVV1ZukAbWVBSasT2fZ9VL9qGc5AUpA9M6veEJDoXPuVvz463izh6rRJYoHg71Zvo2CWYQN6nB",
  "key23": "42n1cXuzRDA984eR2DVd7KJvGoyAcRhu3qrk8KFAC2frhiB6GfxgRwiHmFabC7xEQbj9Nk9DypBnXKkKcK9g16nt",
  "key24": "5YmsqLHW1MBduVpYGxFAtde9fms2qAuC96GKjWfoctsLsTF77t8syA8Xn3xG3HoWVyWk1to9ppvt7E2jaX9u57iC",
  "key25": "66e5U79KkLJd4uPKWNGUoxia5ZNPXJJYTt6VcN7JCHz2AMDRxzEjVuqXQs42wcqeQx2EMyzj4a1xCpy51MHgVxiY",
  "key26": "jRTVrBhqqXw4CdEUhHCpF5k4kbms6VAPis1pwLvesHiB1rNMmrtFDvvXqcmA3pFYhNvgGH7MnwqNkBpkXL7vHcX",
  "key27": "tqzLaoTG1a5Q2v4HpGe53Tk6PnovnPB5rb3heY1Fq3M47A2uA9V29SC1H8a7fookwwJHWW4FXWRbrYL8dgXTGKh",
  "key28": "4r3i78CbDD7Pc3JEPafQPrBVf3CCRZA4zP5q4Us2yq5XwzJ4Lj2YBQP8aHvkpcfdi99bqnGX1DxrMXvPztewqfF1",
  "key29": "3NfV8DeQAdmfovG2GFvanTob7FBeJLHZaQYer4iWSs51pzB86BMLsSJQZUe2i2AVc3u8bx3dLXAwQ1KVxmCp9NjT",
  "key30": "4d4nf69zK4JgnH13XVL4J9odLp5nm9334upwf2H6c5kDQkBtjpFxLej73sqcLQYhnMe1YbdDqenVKQnDdJPySuS8",
  "key31": "2fiMoaHcMpy1NCYGdgUuLoHHMqkanqkqyTHqdiVts9MhfrNdz9YXRUKnepLSd5SenjwCsKhZgPhVQ59Nebwvxip1",
  "key32": "EKjYC1UpwcHYAb7ExrS9Sjej33aoxXaFdbNqXRd7ZEZw6SYfmBZ5mAwSxC2DMW2eqDSvbQTZxfSv7qJkqVaytWj",
  "key33": "nWvQVhHMcVWZfi8ujYXC6wcCou2hKfskL94NTWkp1U6hV7CDPsLfdozuWKNmM5L2vEyKNjitZGqvHzTQEgjgUod",
  "key34": "Nn3ZsSBqq6uTNECBFtefdkRoD4HhsSkbQBXqFbjtUkHshf24SgpBxiWz6Jx9qt8U2jRgfvCcyd1pHgYj7QseFgB",
  "key35": "1TvVeRNxeLJhNQYFG9JCU3tQ921SSRzhGsWDzeXC6cyWXronTinv9AtaG9B4NNtkUNieqtMrDBLj3U39qqCENub",
  "key36": "2UCS1wLzVvz3GoZptgnvG6JN3JuJ7947gaDY9NQdtcxb8gGeZkFU52rJh9FK1WjWZRcbn8ZQdg9dKA33mSC1QjDE",
  "key37": "5R6kLywRuvaLeehsP7k8RTpWWHFQhqXKebHr4TDUp9YBohNSqFGutCzg7Gs7v19kjqCFrN5FejrdSFziwxHY1uRx",
  "key38": "4L2KLK4PCDLvoz2odykuucJ6cyMf5XhAiqdqLkhN9Wzitk5ahweyLf6jBN8Vk8qiLYct8ixiuc4CftkafBmgd8nb",
  "key39": "2movakBvsyoiC56LNRBM8WWStcmURau5hLKQV2DrANQ8Xkrfffg7j3J4Mw77Y7bEQdGsyA4XfuGkLHnsxZ68bNq7",
  "key40": "5hPjrwRwqUpxzcqWtFXky5Njugz9KaW2b4QqpEgZ6je2FAuyEQsb8tn36f8NzwCf5tRviVG1K8JgeFkbsbJYj4Qu",
  "key41": "2n9qyiobqZEGHHdUJV1hvE4gw2NGAovpLwRqZf2JWyNmScMEDQp15XCTaUYcsBJhAfFnpNrcRhMTPxmHk47ipkqq",
  "key42": "3Ek9QsK8cHovTccGm9hxckbB6zFRTTJzp1Y27gqeCf3oogdFiygvqhpY1A1JQa5VFJ5wx1qSBu6U1DksaonbGy1K"
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
