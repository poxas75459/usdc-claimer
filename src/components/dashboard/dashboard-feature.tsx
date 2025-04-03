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
    "3qseCxQdP1HvX4vytX6dGuVK4j5iw2S1PcCyycbTxKohjgsUc2B47dtCKdGD7f8VMnFjPoqYaU74bZwAVM9y7suU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32LMmXdh3t5Q5qpQoExTpXpjb7fW1XNcJARgWyXySKwGy6rB1h4tHAqo225yrR35yak4qvxk1tvcxbBhoK9p1pvT",
  "key1": "2dAz4jJ5qJNXu4ozUTxLwZfZT97N3v8Kpb3tkmugCNndKNUWU9e3ZjHoQwetaoGV5BMiVc97GGFaJjJYvgYuCkX8",
  "key2": "2MTdeUF8GUW7K4eVcpN19S71eqTd5bEfU11fd8X5vsqigvNVRLrJqFyQSnDW8DHdWa73UM69nCDVu2o9PLjn4w3n",
  "key3": "24iHZ9FbLhDopePU3Xhj8Pmq7ZGwnAcoFK3iHR6JBt1vGxAggtCGkgHQFUdYs2NVMATTaRtz54v1iytJCo5Z3Lsm",
  "key4": "UZ1FeJGkASqFZnHohekNCTk9PVLikrwLUnkXWwGp7vMTuCh6x5wLMTTLdCo8TyLshGmogrjKhXzvn6BUStD9qm7",
  "key5": "58JMV3Qra4g26oNTcjSbppuBM2ZvSG6Lzdi6vP5QZDquPtmDhrADSCTSGMkzSkhHtbyJXacGdQiuzmemYuxFD8xW",
  "key6": "4TGFepkCtau7NPTKbzoAbbWa4wvg9yFNRtsMVGKr7FUfTRhwd2Bu9jjVkHte8N2E8CEW9mq21YFi3Rzuhv8J38WJ",
  "key7": "cooUyr8HvCcamWTSdkWUYZ5GcVFLCa7hyAfXob36LmErfb96k7QarK6H6SJz7rS6Dyw4me4dGi9mfTghmBqHzJH",
  "key8": "296qAxGTspWS5RwXY7PmDim3umVVV1gUP3s9GxNa7Ea81M5mFkuYAPTLgmRKZTjSVyjRUGtt13SaW2hPYzDz3LQh",
  "key9": "5Xjtqf2X1jVFD4NgdvXXSHPFykQ8LF1eQjntWnDD1q9gdJzRj4oZyGezQYkjWap9AiUDczNahrKwmPeThDSU9spt",
  "key10": "2iu7hNVZZBePJdG13ekBkSZdx2XhHqZjCRvvm1pLc3WtxtNQ2r3nKg3Hyw5rauGGqHCMJYaKfWSGTcvWihWL11Qv",
  "key11": "5BVdWMS7npiez3FH6uqFzZZ5KvosPTSuLFsNjKymNnrG1XZxVQgWb7n5QdKHfbKpkWKHdtih1BFVmySMWuYURLty",
  "key12": "5Ax59xdPK2tvNwuSYnoum8pyX4XUYRU3eZ5d8ySjJDH2Go26kVHBR2h2P3eCp7fogdvWaofQbSKfQ2H7PmdvvYKv",
  "key13": "c4sWg4cHjpzRQLhsjf3tkPT8U5G7CDgc9eNKNkNUAjeG1tsJjFtQc7W84i3QA6aYPD1wbHB82XpbZLDnQTwES1y",
  "key14": "5PmLXA7GKMCXZWkoegyH8zAdqyTkpzVM7ycSKiKYTevQsd1MSLsPf84stiQQ5VSSHzUjZafu7rLhoqVNXiXdfnu5",
  "key15": "2cMdfXjtx9y6iA4ZdYWmjtnwUw4U7eqYUwFQruokTaHBBCsZ4r5JYqHonc2bwFtTeWgkz9pxL1mGphagMvAFFYQ4",
  "key16": "2eAbYbnY37b5gns3ZXPwHM7u9rbTh5DJANEhzvqakjnao8w7mnhfT4X5WkkE5KWSK9o9TCcqoThnLjpUSwr9h5iu",
  "key17": "dYomf4WYqd37GAk6QXb9NBPnW6S6Lp9CDAhXUW9iish6Uj6RA6rUH7PvC81eSHHCCdLrJFGzKon8hhCWoCKw5Ng",
  "key18": "2iDeMA4XKPiQGoQvR18UKt3QXLQPsocdj1RfdNJ8rtT4JvM6oWw6kniLCRY2kvD36PgDBGuvmaicKuo62E8bw7Ua",
  "key19": "3ffb2bWATxgdVwgd7i9Ji91SifX4sDRgELpoGrJPEP7N9BMXWGydBvBQr7SV1Jh5kX3gCs6frah1eocTtumxxZWb",
  "key20": "4TyWb8dfRyKASp9skswYnGuJ54UiLifZ5dvK9prrDFxmbJUHP1sf5L7Jy6W6KTmp8okU9JtkUXN5pZc5gfvRWv9v",
  "key21": "39kpE2ECjJG8jqwStCaxpiq87YNMj7SZuv7QMht1EqJJnb5QF73uVoEP7qBzPrVnsXkkvV6Bywoxv2DNH4e5WhrD",
  "key22": "57QWiny3LYZ8P9wkpa13Yxr31rFYRbM6kEo3AW2sqBPC2u5bukKEzBD6S8VhyGWNDcfNpfVwFM3djYXCbGj1DwoV",
  "key23": "3xtcAMF4UhEd9bXzwwp2PCJDp7rbWmZFpwYKcVjMfqJrfGJHHHsUaKjvKQ8rdW37oEWWFHgVpzfbQvZJisieyzX",
  "key24": "oXvSUsbHW68B2kYyT5RsLZjjkMP7TD9uRUQ4sBzXEraBrZcPjxPRvwCLPfVtjcUNusBiUy4SrZgNfmVfUGwP9Vu",
  "key25": "EDGJLEtKPcsUXVHLZ5fbwAAmDKRDDqr8AreXBQfosF5s7LyCFoguTYqDMqLsmbd4dqYm4kHbcsv2nr8maRFTCVV",
  "key26": "3oz8iwvtzcXWv8rcYTCV5FNZ1VGyLm5Z154GSEnmD1vqzjAfHwhMu1NtwFwdKVjqWZFPZ5B2qdVet8fKVrqLbXYv",
  "key27": "38tJyJ4ZRyhxyB4Anhs7jcXLk8ke1NyohGar7EDiX7f42YXw1kE4hGEPdmdbb9VvFnS5a2qEsQvjvsomaNXrfssV",
  "key28": "5874DYMTaGTbSh3MDr3itW8DFtKpCDL19ykMtSdHPMTh5cVdakWXJDorkxtoNJnKuacpg4ZM5AyV5ey6XpHCwQJs",
  "key29": "6rmcqGqLjgbX9jQFd1KgZW5DzPmoKVXN1Mjcb8pyjcpagCSb2hQ1iMT28WHLb27QJ7UrTQffqXaXHkhiF7ovkuM",
  "key30": "5LJPg4Wh8HirbTMHAD74D15RqpoFV2h5hsQGEBNoQ4zez64Z2NNrQ2hUPgCnBZuiiiWTeLqZKToNpUY3VrtCjm7z",
  "key31": "3HRPWchY1ZeiDcPnSGBa7DayREjmcDb2BQh8nEySwAbnmehYR5ekVQLaSQ867tenBzS7KMzBkFSKsaRRP4v48Kq1",
  "key32": "2bqKqcYbHRaChhKSksy216DhByGzCoLjoTkPxia16uiG2KJNddjnoCgZfDf6tKaTHC9brR8TbXbU8UiDf6BCh79m",
  "key33": "4pofUoVXhhQ2DtAH2HPKp4nJfa38r6Z3atRZz5G2aRnAf7JiQ6xgdXtPRaFtyXvkVTMUhve9zHYoyhKDTxty1wXF",
  "key34": "3fGMqfGQXNfwB75YRreN2QexaGV9FxWwA9p3BNyVNFhM4Dpjaae7W92cLabCkRUwiwrEqQ4CuAPcZpXoFboYZNoc"
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
