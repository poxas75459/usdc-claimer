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
    "5p4U41x3pb2idkifFEwBtT9Sq1jzsUvJBqLQr5c2JHLAcxTpVMBV4Yhr7upjFPxbPJW4oijuGhyDsaKWxvpSzv1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qNBJ3Jc9h7ZPFZwB9nd92zT7PdZnfpeG3L73bcRYr8mXxh8AyyaXbJGCc65YNWyJSFGQREEKZwicv98r5cskTE5",
  "key1": "2uLixVfwc7JvqAFE5xUNejKa9c65GhX4L6e2vXtxTxZZBz9Naw7vvTZKnyTu7gZxeJENwkXwd5gd3V1riVXXHce8",
  "key2": "iTXHFpR68fVwXYjtY4gEvKpoGY3CrFup2JVCM3FiSSKn5ckHGKt4ymggSj1ee64cZzLvKZjvKSZhTkgQrHJaoAt",
  "key3": "4nhUwp9SA4DyCkcud4XWJs8omfBXhjaTvUWXGiGLcR4CMvhEEF8Jg3QBjGxB9wZ2Ws3BootfQkmSuwSkwXFX8EZY",
  "key4": "2gYjdoXR32M8LpSfDaCLhMPqgnQUvewKn8mtVgRS6VB9ffypuAwYKhVEmKuHMVRjWwG44duZrQ1Q4A4GiWPxDprT",
  "key5": "s8CnePZT1mkhCbKvQeNcRFyeXy1wh2gotNMeZ6Ti8fqtJXC767g4VZsBkprYrViovTTHV9KZBz2razkKu3xhBKF",
  "key6": "5HQ4MVhBzWvtS3kXULPerETbfstmZKVfvVN85E4iutQ1cCBm9uUq5q3xiKdgvjMfLUVEHt2BaWmLrRixoJthwUwV",
  "key7": "QWgVevkyQkqEn1dgdBNE5GJvQAYKm4ghErLPRtYaCS71rhrzZyKhx6729FLiqKykhTfRfDcWniEPc1mPAfGAsSd",
  "key8": "5P8zxxnFamLWjiiAU58yh1xrfyzXJUe2bqaa9aVxiuqmURhZ31grivKZeXXVydqeXB3MYcnup3nt4e6RADN6dbRW",
  "key9": "5ozxqzPRBXUDejJW5dMYB64BskBoBPdF5HeHunka2dbui2KaLxbEJm5koLPuynsnkhQqBRWc6GTvMt1HedrtHYrP",
  "key10": "Vt9koPq9X5MPat9yrMWBeQMGQpXjrKjYQiG4q6katAWDZt1iRppJagyskfkVeCYLf2gQna1sxMfAxAXPUg3SVzW",
  "key11": "4dzjG6zsHSbtdaPgL96drRYVn78Z34RVocEhAtMTzjdgs2ZoXaPZr6w6xZGPkfAMuXoBC7FNHtXbgAfuZdHYKhmC",
  "key12": "2ZvKka9gJJYf4zDgnHSX1b6682wWXD8wVyzg5qDHhrZxSydnVqjGNEXs17JddTqeyPphzpFSqymDPo4oEX9mbASV",
  "key13": "4cRuwk5ddUzTvHxY6JnuzKQKxQ9sRcYDyKF8yDkRbhY9vhw5bZUozNNkfCbYtX4y5ZAhQeL9y77qXXfYgXxkcRwx",
  "key14": "56hPUUwRnEFuysV7nfmyeWME1YbzevGukrmZREuXNkkDMJmHDSuqLZDZcLLCKxz74hfNBZx2cfY7WyxMf6iqUv2D",
  "key15": "3G1TQ3RYo8E8tZSzBw3XxBs8gwVFuzbbXGbzbRi9DGaZMhyU1jis37QyJugDFXmPtjQUy5kDpfoqyyu87tHZuMiK",
  "key16": "3fhgpiYSanmGbAsAtK3fSoUehmnzpfbHA7aWEPapbDtTZ1kRFKityojhdD5vWPfMQWyW5q1zw67re5afv22abqRk",
  "key17": "5tQxW7T9ZRzUNHQHBnCJawVXMbhFB99yEKgLhownnZnwMs6GL6Jh67HvK1BgwbYKiwkx1qVUtz6xv1rUzf4azjup",
  "key18": "5jDFjg55rw8aGBc88ejK6BZZt5U5b5Snmj1kWk6mWyiHx8gWpoqw4JNtXRb6TKRXnoY2edh5GyQ6Vusza3kzsbTV",
  "key19": "27ANz1ADQCPZ8WGYBxEU8VJcRrb6CJEezZBwMC1WYBfaJoK2VZGce2Gh6ZhY7U2Q6VtBSYpEjHbKSNK96SE9BbG5",
  "key20": "3uR1yUKZBDSGrT8YeCK4DVN2eaMgkXqaYhdKdJVicGQbMhgugvb4UpEgEyKGxNBWgspLdTk2LrAw3bQAbRry6cpW",
  "key21": "34hLLKaEdgojeESrkBhVjaggq2QFbe2NuxCuuYqzFzZLzzMGoqWaAGKdC9bd6Yqo91jQSAMo4Fs1k8msARVCobXo",
  "key22": "2HZf4cngKBipUKRWm9o2LX8U1bSoxrc4P9xwJ7nLLmj9xhhKUSimhGS4ivQkRRyWrH1ZjjNaReyjvD4UwWKwYSKp",
  "key23": "2ByiqCEfJmW6JFwwJg5PKvECgdyDCqMfjFZQjnzYQM3P5GzBU8EfYnkq1wHY2kM4cscxbGBhmKkDQKXcKHZot7eL",
  "key24": "sbB4n1YNnHyg2LxpzXiqAi8jdFWpBnJqttHsaBh1tY4rxQAzEHRYuyRh7dNEhbjWHKgcpEhEoiUtAb2uAQfqiGr",
  "key25": "2VpkU5LZTnqA2jGkftSLz7QkgTW9yKALGbrEfSR1c9EnMXCUEyLLUGrip8NotE49jwFM5pHWdBeS2CnTQeDwwnpJ",
  "key26": "4oqE7MhdQPPanYyN5YCprCXJFS3ZAbmqF86Yri7JFofXCivemCQGuJUdTP6GiokPiresT6o9RJkA9gDnNXntPC2M",
  "key27": "2EkiHktKNhUA4igH4NinrNxwTyAFNK7WG4E1i9fBznnSpZi8Q5qiwVsv9foSLT43wDQcEL6Gsd6o4s3iAgs5WrcW",
  "key28": "3uvkfjpPZCprF73ad5T1kKVG92A2jcwUDtzPmBbSo24zUJchKhcSEo2XHEBv6QqVuhiRHv5V7yw5CyyDjwcnSNGB",
  "key29": "2tSMxNZDQYzXYCp1TReB35LdKH9nKwqCTotsNUynT2xuzyuggjSUkYFV1EGtLRoa8SMY7KKw2yYQSdy7dv3F7fgF",
  "key30": "4oDRHkKpBsej7EYCfCYf9JwDKdizNpG7FuGxZpBXKf6Wr4eTyEUpb19tKTKpi6vivNUv9KcF3ivBR2Cx4TxoXY7d",
  "key31": "61AbQGZaoMgZXSCfn4nsqojgzHcSNMkCRaXt8rJqvn5BThZih8SBJ9HRcJ7C1nvPQWehQugSs9MB633C7U5CjtvH",
  "key32": "524bKDVjFp6kgA8ebMQqPUFtQqhL6ri5jiPkcbn9nogVAG7sv8PLuc1SQZh2JqGd8BJPAT2z6wtXHviRKtn91xQB"
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
