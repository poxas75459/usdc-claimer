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
    "7Nkfe4PUvRTqa7ErQDqgkwsJn3CseZhxoBjqHFPTCYuWPxGTKWMTvp2t37agyNg8dzfbtzXALWphjmmmPHupKTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHjGxMCjUM1CwJtf6vPTdqX7wZbR9v1aNDgyK9GisP6kZpuSnHrssb64VH8WrJ4VyPfxHraFBYDjST9DzpCDLrZ",
  "key1": "2FA2kVrXSK4mdevKKkbhW58kNzHYeNnBwWaTWMDTDTCaNDa5BGX6K3s75bKgqQo6uNrySqypW6DEci6eMGMvggPW",
  "key2": "4jL9794JuNVP9mLpFSApG8rRVEPZACGJThRSSCDPG3KAaognDtUTemBENoN2gRYuoEy2onVkUvU4vNCDNRDQiKeP",
  "key3": "5pDYH7naH5xYdzcJWeue5VT5LaNu8t3Rf99ew53WafUHD71EzGYy7U9n6w7yE8yx3ZNNsb9U6F9gWdMTTheGZKsR",
  "key4": "5gpxsPEZf9EH2yjQYxTUA7DjK4URkDdnXVtco2u64ZnHhkq8picyNnzHyYVjYVYydnDRqSFDTBVzXD5yfXKaeTmE",
  "key5": "4GwpY18RTwPJNkCshsR6mfdC46AijDK9CSNKy1q6sZBoexzKVw6sXdJV2sJWCs4pPGehdxW1zpnGtj9DiRBzNVrx",
  "key6": "5KCAL8Z2X1zWugpy9bhFtAUjsQjDMjy9zGsYV9B93sy6T67pms1P5hxHiaA4TcJniNYPjrZwFEVP2rA6YEaQ8AF4",
  "key7": "47idhNDqCxLvrJrc7hGkZ8Gg4VkhhG3HgSjdsypxjp3cCH7mBHsQtzuJAUqLHtvj9Cd6gVjw3sgQ65p7iA2oMAQW",
  "key8": "4qYbRaKGSt9NJF16zDYb6JJhjHagtn8e4bzFsSSPfuEG1GmM916sgdi1Pv2f8t7jDAaZ9ovZ7GxuX1umJGFtdnRp",
  "key9": "3kGWmJpXmcAXVX7Lvn7bXRns7evaQ2fwUJh28BfBGC9vJJ6WLYhaLfXg66vrB6pAmWU3LRZv9hNdZbCyntha5mxa",
  "key10": "2MezLsDgAFeR36cGBnemfgb2YTyksXtMyb2UzeATHbPsWoHQbwS4UH7apqQ1gKTkyDU7WpqGRUx6NWRgc4DmeCPi",
  "key11": "5hw6WLr8BPa4cE9SDWGqAinYYvsuooPRiT2vX5g1BYbV7QWypZzEnJfdd3iLGZcVDs1NaMJCDxMj4DeBKTHKvhg4",
  "key12": "nWRFW19DGM5EcKyGnjopeRhr2SA2LWULEpBAnpc6P7LTH32dsaMM6YVeoYpsHYTZPi1LNRF2FGyKPMeL1S5vy4m",
  "key13": "scgZqsfatHBUm3DQe9xhBuwHzGv6dBjLPRqgRFMSYPq1Qz9G1GNH9xBYDf5owTJ4b3Y6Qng9rxAmYkMiPUiBkWH",
  "key14": "yMxgQeE3fcYyLpXXZDrCzToY2mo5wTF46hWuzZYCzTwcyeJPhBdYYisgMMWGmV9HAtUfvrcyipZa2iurifMtiu8",
  "key15": "2vqs1hksPW5Q6CPMRUJHsqrL6v3BBGsUsfMj3vbj3yjMDPRvu8DccQF3T3hd51Rp6CFvBShpfhsppZExhWWi2Dok",
  "key16": "4S57Tg3bP7usAN6oNSh2Y7rkeYxirN1JmzyAUAtizTSn6X6yFnRrUHyPjhYtL18GogwscrBngUkX1pLMyUNVHhhg",
  "key17": "26UHMvcQWBKGFV4j8L5dmPN3YM5Jg7rM4EbZPGNQhqAoXVaGf19evgqMjpjkoAKZ2CGpgjbQ5EE3uwg3sCccbUqT",
  "key18": "3KjRSAiKReWQmNLQi9tDk3npsvQ2UAjqiz8D1oNFf34fjJoGnafGPxFapoFb4xqnDzVkx65BDaEvXW9DfJPCY6a",
  "key19": "LNN7UUuXFWtokDR4F8WKzeD6iZCudjrrz6GELJPdE7VrdUvKvohL5V1yZZ23AV1Wq43jtWsmtZEdtK6atrcMZU1",
  "key20": "3K9j5G9QqqvEsgrFEjNU7HKyrRcScX1gvW6tDUFYq9C9YGSNWxuUqiFtTKTGHLtkCeG8qY23oEfZsVNUKoqDTtmE",
  "key21": "587hCBrycPygt6njNeRtSAKiDZRttFHcNQadgKJr4Wvseq59NxvtcrgJUC3XZQQA8NVbFUpyULgVPwDtgRFi4KCr",
  "key22": "3rrconHH7geGSgKTy4k6YtMFmG1bo9J64YhPuDRU1DXPWJw3Ams8gtkp8MvtR3gL8NuV9XbjdQq3nAyducx5FmDR",
  "key23": "27xChQsbp2maH7kDMy4JUMgyFsDVAUno3fYWhbpRw2xzmur9yKRsmA6MkTYgBXgZWxie9JkYiQm9vei5LqeqJJp5",
  "key24": "GcJWhKDmxdMzi8bMm6SqMt3gCtkxqvxdgpe5WvHdxQFoi4yvafYEL5xs99yviuuii1DGVYK1cShr2bvU1HGS6Xo",
  "key25": "2zW6yaSwswUdVVts1TN8RjKrPK2javqMM8jSrpQcinzeUe6sqKr37grD41qwLB5bHuKfGafDbXLt5VE5PMFVdGVZ",
  "key26": "TtEwiRVqEDDgXwzejzoy9tHZxK47hmPgLCpymYhHTZZ3b1G9GR7YERBPzUx2fvThSTcMjEpApzkqQtzvxPwqsEy",
  "key27": "4tdSnK87tB7Lc8DSf7is24VuDSbtr4KGNsVAusgHvnXWyYi9QXGBgbJkEQ3U78y8cN61yqQnabPYGkxx39ySZ6nV",
  "key28": "2Rk4dANfXuNcseRDPmvRAxodn4r3v9mca6DQBV3pXNMXjzJ7aApz4VFe55aWSAptuo3fmRFCmdfCiSvHPDqdzNGY",
  "key29": "5Sa44fSiQfiN2Q3a1YGS2fxJ71FXqchNfNxkDdf1NPa2d95f9PG6TJQS96NMBNEvcvfrJnqEoLSfA9L8ABTwiUbY",
  "key30": "51TSaFgt3YgErjB8U94s4sJPmhBoT35XiWyXjcRgwkAqhCuftLg4iSpL4bdDcYvCDgPZk3pMjnx1wC976GSDWhMg",
  "key31": "4R41Xpy9Fqnq3Yp9ZwFdMStxTr45dStYwM2sGWxJ2uJZq68DhiTrc1m4DkHdb1wrtJ5NxLB4eyakoouauQNi4pHW",
  "key32": "5ZMq7pA1PzLJGTvB5KATsfazyvGGmUapfZ4dtYC8jLjjPddZsb2HJ1cbvPHoNQ28kP4qYxejDUwkzpXGCudfN8KK",
  "key33": "2RYkADWM8owrxAhJmRN9PjZXm5QujHTUXqTStH9zWD7x7CvHe4uRrAjdpfVKTGPa2sCmSaoKcHDHeR96kfC9XXBs",
  "key34": "43vrCfqJpoFyTUoL8pfzbxrc2XByQAQGeHoKniyM9NmGtD2PEvX9kKZhFkeMNJsSdpKxp9GpdD9DeUbWZKAos8LR",
  "key35": "uUqhJkSXmcVgDwLPuTnCyC7VVwgnDtEasPvk8AAK25o4nkYQ55oJ4nA2L6qKYQa1MLPLJZrfv4FoaSmE7Jaq1C4",
  "key36": "5ZQ42MAF1uZCZcRkqDg6ugeEzxbuweih12q5JoEkN9p6Fba7FdkdQwKy8rUqpUUWVHYb3kVaDxQa97tPqmS19co4",
  "key37": "8FMD1iXBGrBgkaDwJTFrXJwmmRv1vy84fks9JNUoyYNXaUAgpxmgDsKxGNk8Fc6kUrMnvakjfQKRDCfQc4mTt93",
  "key38": "4EaRtNyoCiJo7iV4e2vVFoCEscSi9bkRDrgDQJ9FiuaA8Apf7wJiLcRYPq2Rd3LeSuG2DkbPPWQS4XswaUNEd5xJ",
  "key39": "5FpYFeYVqszZYk8dszdJzAx7K4FkG7vYvTyVV9FbPPj9ZsdGVe1twwXayDrU9kNCERezEaovH5WqpwRtj5KcjAN6",
  "key40": "35dfixZohoqJCfJZDFRk3Tn1Y4MUKHFKxBP9EoquTFXGSDw7Aa7EpHhqjZkZnHYqo9LKceY6dqHUorNzKJBGKNkg",
  "key41": "2BASk2FhE3WTUzvV2NQgqTs2oKjhCkAJ6T9h7JwoL2gzq6ECDXUeDpJypPNkwox7mEBbTrUt365Tb2QwiYMisC25",
  "key42": "3hi8qxPHBcKdGHuoMJ8taLVBCtDJM8e8mAavR7mFZ4LwXUTdwP8vf14eYTVb5S6LiogtzcLGzJt1JGAApTYXSEYL"
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
