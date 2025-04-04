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
    "5tnCzXX6paaDzi82XtVzPHPp4ajAatzbWFnSDkWj4dtz2prfTEVhSEiU4ekMFwwwC4K4uBbKpJFR1uwucTX1fhqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skcCvm5f44mXVhxc7FTL23PQRg9EEVu9g78pBqZycDuvhXjt12r7VBu6qTFeqhFQF7RUxqC6zdbbRUfMZb8Bw4E",
  "key1": "4HKfqERRrZVqwjFxUsWE1ZkM8hFerLGcjwF1wLaz7sq4MxW5aJGh6VicTXu57K5PQTJLYvmGTk1Ch8M8vNLtKA6a",
  "key2": "26MAmRsjvP1ncF88hr6isJUKyoHKvvX96waAgvdHhV2mbmvxqmLww4yYw1JzV8mPjUgo2e15pQokBanpXAfmcCM9",
  "key3": "4K6sVwzWkVCUztVamNpJKyR4xT22Y5b9yP767V6PZKt7PMUGg56TCRtLzZ6cRNMAf9ZTz8Mhv2KcDs5iGXs6LUhU",
  "key4": "63hUtuA6bB7ZfosV78QPNT4ysu17jD43SA3H1e115qTdaAxadD2Bcz71hHn4HtqqwEubLtMd8oRoDKrnkrJPhcQa",
  "key5": "62NuD9oREjdYRDyhe1oLJMJUH4ABfsHMT5wL7G1rLuxWKhqhQw5nqYKmUMZAvnWuPmPEYnkr4YxwjKgxConggMks",
  "key6": "4uHgAfVc8stWpt2bWt98RYHg1tocXZJyeSqg144uMqSXd77v2m4wAJLSFdUP7pMCNRBLXqvVh2uy6URLJJFmCkY4",
  "key7": "4iZybN1iNqqAZaSuEwVKSpqBh9we8ZrBUSsSQC6J3FJ4peb4h8mj87qHmJZanx4FcEvsk6UkyhicrvkiRmBk5FEV",
  "key8": "5qgfBbGA2swWepx3PKqRq2sckUszSqzWJvBpDxbgxFsfVpfyPHQEda6ggDszGpMmq9HtMWeYo64QhgUcWrwXpfq1",
  "key9": "oxHxtX4S1rwAViXF7ygFT63rN1HWiFnA8pF2fST4Nny7Ky7jBJEtoHGsmGNto6YQ4xncv2So4QXZGXWRhs8bCbS",
  "key10": "5ckPEhdoCtKLmhmc3879qZx75rii6zTBXVSuQPkNjTzBGCWn8LoNgkkMv2jHCx88DFQaTT5Nxgr8jxp6hhjZmoNp",
  "key11": "62PaSBoy8Ja6q85VUpKyXcUQNnfjMM9m6ZpG2gnj1bhr7Xxf3xCxqP3v8wY7RLLiXAR4MQLjihj2Vb5RXi7tczrn",
  "key12": "wJ6YH9nCBP8fMfMxTw6WbGxaEzbKZXnZR94qKj1mrpHu4mzRpadEBxrZHNBah5Ep8bkgcChGesmELqxAR834EUs",
  "key13": "5XYBskwhghcGsd3HH63qPH1Sm1vm7d5TC5aWnsqctTLKNfGJiNbKgyNZXQWDuGBJABLHXL8K3GkbkngB6Np5bt7D",
  "key14": "2T5myLekbk9FCdquQDM6wjVmKy4rLBq3pjeqNKcJiJiwMWXKzyStswtzcpggVxkH9QHdDrqT26rWFMwnJR5dtQHT",
  "key15": "FqaXuF7Ue4VtdhLHoq6jrX9zQPe72d2wHmkaeyFJtcD96wyn2dr6eJ8kWm6vnWTzNZ7U13ojyoJr6rS9vBGFZ63",
  "key16": "zsXsqogoDcjfexJmMS6vzuRYePeud1tEueJdCMSQCe1vsAdZwVetvDuBDKdY3wUDZmu5XTnZrausucWMLaNgwQK",
  "key17": "4antaiXdEfs76bKgrmqxt1CshQ3i2pgiyZSi97u23skPYRxbcBzFGBZLyaXejSSEPKgSmahJsVr1cjEZWQv6NaEB",
  "key18": "3XZN5HtdjRn2mrQ3Q4v1GLPRryKSMy31wVQibVAULN1VjwykDTNPFSpT91HvF8Nko8jtAVARZPiWFhvhBKz3A7vC",
  "key19": "Sojotz1R5gbwEJAkWRLsUm2kVWbWMAJZmJTBzEYNTScg8JgeQBDwRyj3w5m82pBdQz8Rb7sKjGdTwDqqEteMGbr",
  "key20": "4GVhjqSnQkZEEvAqcSsvNFBsRbidu7fQreafcxJqt1sDhQbi257QBipqog1VZyUhtwbnSYCzeoa3cWL7ZAR75Dgh",
  "key21": "4RWUbkXe6oVvL3uYGmGFpwAAKRteyrT1rWkg2pEmvDPd1KqSw9NSDb9U9Bun9AGM7sQaTs7LrNEvkCNrFFe2pzxS",
  "key22": "48Exz9G72qcp5qd1vZvcwKYRYyJXKb6rcu3do6hhSxxFN5BAjTHrtQ5LcHTZeiTqEtszWWLyrjSTQT3fwBK7EDhd",
  "key23": "pArFhhThLwYWpLDjANtjXvVDre7XooR5oyH14exaXxZNopBUCBNWiBeb3sBbZgz2RryRkpUGB5jjUAPfXvfGvNk",
  "key24": "51xrAfYX3HDdj4A1wBnXqZa5E3BLLHq1ZVJrqqR6rKaSbJjAyS9GBBmnweQa6oYq6Z7xj63VKjFGabX2PbwHmZrc",
  "key25": "5UT67uCqJRhKwdGJjEesEWUGBM9XxKPMESFJFbk8xg8SxUPtdRhxkzErp1DAwVnKPt5hyxG6KfExHxkjtSxBdbs9",
  "key26": "54CbwmwQNuheSH1cuaN57P9qPaPzkJoBVdRcMJ8gapkXjPqYnQT7mb7S3WjjfXVBC5hpajt1n5vGGjoUbEM4vXHM",
  "key27": "4y7SGcDXrht34swDcCUo5ESoLFqTREjPUTdR92jxZHWob9SpJEVN7Hf4PNtHojgmyaDoc2uftiBAf7dbNM66qJ8U",
  "key28": "63qbkC1TwpXJ3PJ7VRtVQnrMZuGzumpp8NsBNssgLr9L1m3pya37JmZrDAv8AkxHqpT6mPq8pWqY4RiuopBft3yn",
  "key29": "5jhh7o2NBQJ1FYuwBytMBDTKMNgY8cGZCWWBbJTfbFPZ5U4mkV8PNfKxa822VncryPQVYxMAzGibPB5AXopzYCaF",
  "key30": "2UtwPBgTe9sdRNigYx8X87bTCWaeEhzDvGYGMGUP9fuwbq9erhBuGty9L42mVQRxKNm9T393mm7SeRotN77YZfVF",
  "key31": "64m5h7nBJAyUYnHXbt6Df2VBKRzSpMXfjuhcAkefP7wj5tCx4U3Uco3opG4X8kSYa6tmCxxKsFA8iP2TRqpmhzNb",
  "key32": "4FLwAyKL7vn7dyGXFWBfJuXMNiYHoFtDCDmBSvcKxix1Zb7jBxTnAdu9aYLabKokY3X4QUBQddANN4Nv5WSBTN4d",
  "key33": "3QidUqfvst6cN86xznBcBRXAp4PH7Xjg2Z5BkdggtQ4bDFYcrPjP7Y98KAXNKbFttZsSY4kvmYpnDL2wQgJbz2cF",
  "key34": "4g78g3eqMzZBjMcS5gxnCLZQz4AR5gm5pe5QkeomoRU7LHvYnp3ihaRCEheyVxPxQzgz1wTSLu1Xpurycv8M4XQt",
  "key35": "2KRCVK9SUX9G89RmfMKh3Et92JBCkXgtB6hpqBQCEoxBFKRvZ5utmeq2gdmQXnkDGTT9UECaa5j4RzkkYNBcgB23",
  "key36": "2sZmU1XxnuMNfoy3wif4VXDkXoUN1hwCfhCQ5j4fVhwi45oLDki59y1h1WS9D1bAB2xAKeUUFA6bMSnN5SxYSd6U",
  "key37": "2ysT2fUbwZqMRAVt1zVkMLKa3QjLWCu66Wyf7FrQggtAzouNmr1gFwVrtrCY8pFJfS2LwYmh6uHnSRZtLLYYrDyf",
  "key38": "saBfyTFTC1VLyuBGHLQZNTThmaiFb6HrfBaktj5mrsrmAGBi9GYZpBMuKfCSWWevohtGzeem8shWMvHjVJozEwU",
  "key39": "RgZiokeReAX2SFkzpe5t48iH4sLsjgKoj5vhJBPzz2ZBcn8tVEJGJsMCkeByzwATz8pmcCtcJqtdC8RTLfFsCNx",
  "key40": "XyY3ec19m51acM1fPu4mKfoV1pVsvYp7Ns1AZkN1g3t9wXgkfWf856Qsciu553HRKLkGV32CqrYzKtFg4yKWFbv",
  "key41": "SGSnA9SuiYuiZS811AEtt4h63risWvWHByWEe9aUhTCSQ6Qmta3uD1w8QugyKAQocBTpwoKugGBKUuNW8Avjh1a",
  "key42": "21osG1TE748BdEf13tfcN7RZMyYN9tjEUX46jgHA5SHVM6hycwMAuzgsusX7u34Eks9GbJ2rbE9ToCeyp9dr6EVs",
  "key43": "4AUJ7EY4S3Q96dRuGfCqFwvEbJfnx4YNZpV58Z42iZ97EhDnxqnqNVR5DWgZ3RZoMhPgmLepMP7nDU9QPNDZadk9",
  "key44": "56BEq5wpaMRWbm9nhpo4HRkJKkzPUCmoduCDsLE2tHWeptZm9H2CVVjnLEiq87DYnowDkMCUFJkHzzN6yqEfz2oL",
  "key45": "GhC44H9UbhjsTfHPx97vZdKjHNKfBQYj16vr62bvPxmfTHQtof41jDivT9imK9ZpRKttcFUW7pqT18WLNK9L7n9",
  "key46": "5HmQ6UdPFsMSPu66Uz3zxkXYvaNXhPcxfAgeBu9gGHt918XT7N64d6yiY7ydMprnqBhU6t5rVDz5wiNPebJeDMoJ",
  "key47": "eCkzdtmzEnRX3GNzezqMoAVcsrzm3XwfckdFY9VAkKx5Qbjqkbm6gYi2wzNXeMaNy7Eob2RNUxuMLCnSHjvwkLc"
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
