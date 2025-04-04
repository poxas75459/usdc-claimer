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
    "5DFEzjBwdacPbcK4feVnz7UAJvCF3d5vsP7Bar896NLVYvohgyXZ7ZTUU8ExCbm2TWnQcxcrVbYzzwpECvyQzb6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhRx813FCvDonvY54ghmarcQqVTUkEkLkNK5BsB5b8nM9dJsXYLBYY2Z6dbWTN2Zs3jjomAE1N4N1mrNcXQjYNu",
  "key1": "4vhfN5uuW9vqN4Q5S2YGM6RihwjyTdgUmoW4vEffxiJzEnLd7CiUdmD9deEYoqGs1WWvtqa5z9HkmFXU6pyUe7Re",
  "key2": "3dzTFZLjdtWE82gz2NXviogJG9CEZJSZ6LAVU5ccTRNXJP8eyhW3r4sEjnEAxap5ovU8AvexFcz92Arpypo1S5ur",
  "key3": "3PijSJ2fUKPBHEmT3at5EpMg3KWZHtkZwcUTSQNx32Twsqo1AqKi9chFy9inHtVC6dkrQSmxpF6WfXfB8b6kjZev",
  "key4": "YkzvsrvhvfYdiDTXGLC1tdhuojmAvPMXtHhrSUtfgbJjbU1NHFGwWfByzPTaLgvoNMrbJgJRGSknQDRqhJHcDD3",
  "key5": "5Wu5SwBvrZ21CfzzVhCbhXTBEuq6zTiv7Xuxk9PHy4twJURpYzZTsuC1o4H4m6pGYBhmspGGmCXcddcamxUTKdDA",
  "key6": "4N1zvVJoXSgmLkGX74qFAKphGJR3JX97nyjbdcD5kTVU9F5ThTzs9CxirwCzWiBgG5msNh7UdHz6j7tvRv22VefT",
  "key7": "4rM9CkS8QEfmcH1q6cFRWSoXbRV7fn4XeCTr9QtaVEt2TK7grZL8LwH3ZXX1AbRFY72uBQKhM7B6dRhuxFhzU9Vu",
  "key8": "47dwBvXAYuK7ponzDyX5g5tA5FbjH6imZLZM9bgzdPfJm64SqexKndC99YGSCUkg7iUbGHY7iSpAQPTLz14aw7AE",
  "key9": "3Rk1F6VRX1z6RVuZ5HEkzk23YKFJrC2u3kHSYNRP7vbBUCJktpNv7ExzTjv2fdDwdc8ZN4opRfFMFzArZXTHKST3",
  "key10": "4PpU9EBZKzCH6FSLVvy2cnEDt6Hq1Vv9d2J218RP4h2gF7zER1m7xPgA5uLCi8ANRmCguyYbQR8kbfkSwFVAXekv",
  "key11": "R4j3Sg6F1QXstZeagC8WBHvU2oMbDPigTR4csjmbWKRYxyfr3KLUQtRa6WmBpNzMC7ydRjdFUfj5K6RvHaRPhaX",
  "key12": "3mFZnMGEgWRyVZWviSUvfL2dAFhQG1S39K41tQrBkGuHPCLia5Zi9v6bU14crfHRvyMTBNhRb47mHXhZBSBeDosK",
  "key13": "qyTHBJgwj7bTPP6G9LBPzhhNQDLcxozHjeSpEew7vmsetzUDobUUUwa9riz41jE79YSTTJxngaMdCNbrKp2EKH4",
  "key14": "AaLc6QNNprghw5eEWvRiwykV4vngRN69tT77XpuSJo1VvsoQtR4MmyiuL4nwjuUFMETttnVKC33jn97LP9JsnyA",
  "key15": "4ExKudNd6uUyvu2qUM1zC9SjdjER7VvXdB259WZHYi7zT4mzSZr2Q4HPPRzn8KR26mGyqpWVKGiqnYveqtALFtma",
  "key16": "42ix8CD8yattf6QRw6SCmYGSsYxZkUsXcNs2uqDEw9NhR43Dtp28CZTkPJbEA4ADT4hmZX1nCj1jaPHVVApbF2P5",
  "key17": "5jiN3EHE6tqR7ebRbkMQiGfYMzwC8woijJn8fPt8cP9bmxEUCqmJKw5s2wtbLnMK56FM5xg6gVB4fnd6MhRyudvX",
  "key18": "5n6S6eihvsnFBmWuCxDoLeA84wZCuAVNsxUN6ZzUdeTL7XcjQGC7fiYeDb1BWsskyVkTKnpKVQAQqVfmHjudjZ5i",
  "key19": "5T1xN5X6B6L1C4HjtBfFiyH6uLHvLA9YSVFoY8UkCDVasGyt7EAnyxrJwEqDboiVk3AaAdczWtTVTXQhLSjgrgKR",
  "key20": "4wEehaQmZqC2tcGJgDZWB5xGhLs18u7mzE7kzBuwCmtCgSXBtsyNMiBn6kbL4rKdkF1i4dk9AxBCAumm4d8PY4Hw",
  "key21": "5grNBEqKfe7N1nwzYpZUQ8DCiiHoqtdySeVAfECdcUHhY4fpFAK1HsKnSB2jiqfzcJ7BtV8Kg9K9MRqT7aMGbHy",
  "key22": "5dvf8JMeWqhrHrrqP6yWNJkCikfQxnRmhJwUA3DDRhcK5wPkH5gC3FGkcrsropRrNi6ndgNumi9TecXusY5x2RM5",
  "key23": "9Em9gp28vDt5GguuBDV2nhxLktxDTQQThoV2BrS946gpqjXmKAL8ReKtE17wukqDJgPB9KqoxDHeoyvei5ghHmp",
  "key24": "5LLzbin6zXex6rojg1tvPCmb789Lpj6hHHEWycWesd4oMHkCcjeWDB6ikuuAaxE1weRGtgmQtGiDHtDC5aMxEqWc",
  "key25": "2C4SjuR1NVSdK2tMXLGvkYwL2kNGvwH9Q8T7zSci9vMFRZzFUkQPpKb8CAwVP5918hFseBH4Nn3ipCgjqb4BaLGf",
  "key26": "5U4oKcUgZsczyDtPeZpZ79wyippqggad5ixWtJw7UMbPDDAEzsVteTPFFMPTr3UndPnM7xE3VRwKmfHV45s2C4XB",
  "key27": "zUHyZ5LnMeEKZB2zj9dQB1qmiFt2uV2DcZGZYehxD6S1YP8SQU7Nmq7Vx39xu7bSzgytdeSd9C4nyYckNzHq6cx",
  "key28": "iQDCwxChrTRX7qxbzRY9CtXMe8Y26M4vFAwkVKyFkotsryHbmPVFwoAaVtr4E9CBJTerqtDacWm3BxhNSHeGooU",
  "key29": "2Bh4KoGt3yykxEPzEWiKP6GY74Q4fkQm3D37Vs8gN6NftvrVCV59Hu8SKa1LfyhsN99recJNoWuxE5opQ1T9h8n3",
  "key30": "3kVW3pkRVBvukvMkcDWJiaBVp7qZCbeHyPQF5gPLv6qFH3AyBUAuYNoEupRkLYcddTfAYFgTetBk3DXHpCJp597P",
  "key31": "2B29ryvf9RHzqssyejPpME9Du3GUZxiYRERuhHCZP2NUFjxKrbzpeqZXx71C3KtgTeBUo7g2Xq6tnVUZCyTbe32E",
  "key32": "UvCF79hF9pbNc5yXwvAo8rj8zEd4dMCKsgRTXaoL3611FRRieD3s6qmdYkPNFQ81fjtTkTbtUtmvjuM3oXbKaJ9",
  "key33": "3M4jgQRnaLHE78a5MhZV3enbRCHT4C7Yd3Gd2RXtmb1Nozy169LyhSqDcVTDBdhqGifCR8kqTxZpAgcn6DsoYni4",
  "key34": "2gk1pyd16fC1KsfTi9jxoLErh64g62ZjBY5z4bDHx64vqUdXZeGXgeu7qoimShHuqHRXMqcZdPqsnpNy4v8uPrkc",
  "key35": "28T9ALjsbp71NHRCYaFiPeiCMY2pXt6Qkf86PaAxxJTToB54k6mLevmKjiGQDg7ZBZ2jcN7N24mYbfM6Zr19sAA5",
  "key36": "4exgPBo2Esx4hBAxWVbe9AAG4QhwyEkGF1RPAWsDvAN5uMJ4GMakrAmYUSiVGdrgbPhTQvSHkcsuQUE6H1oQ8VZD",
  "key37": "8YSSAEch3SryQMA28cRAwkQZRH6jDL7b183FHYPacBVQ9h1xnpasTC2BtNWV5VuWC5LASbikxawsr1Gi4MFQ9pJ",
  "key38": "4ecxgg2vmqQBgmZfq9w8ERYXVdhFZZzzvmM9M7eaCqM3GryoQPpEfuTtUUNnZ1eirNCSFqTWQ711CgaKLCs4Rs7s"
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
