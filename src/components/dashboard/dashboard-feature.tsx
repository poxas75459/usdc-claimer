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
    "5Y8ocR9M1LYkhvEftRRZhy27jyrTRcrp9wTj6TDMrH68zHULfRHa3RV3Rg3Si31KhtSMkDwqcxQ8vquvLZy4814r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NdiBLWNzVRgzF1MPpabVhHap5DECQE4EnCwnwCYxBkUGNBqEodBKeYkTavmvQoHkUM87xcjXXsUBbPemUoWau2",
  "key1": "gbnhmGGEaZvQ7L7aRRoRWew7CwZhKrE68KpLqd1aAh4roL8vondn3Nnxomq5E5qmAxryFXXrcdC54Pooi15xDhm",
  "key2": "3g12WoCyhpJTfyvwaVuHKnrzVQk6rcDcpCb2XteFTfCHYgdmZdkrEoaMvZ63bXcGExgVsVU8U21YiArYWTXwzrhf",
  "key3": "5nXZmoD72ci6JGfBmXd2EbXCaidw1Li6qzBvrDe52XFkBi48VH7yqdPWn3pyCrSvwyRefyyK7BcmqnaAdRDn9bH8",
  "key4": "2uRLnWHKb8vkW2dvAF8DRr74BJcu97FmnMSMDpe7vnK96wqMpXn245PeU8s227YAZshfBPKR9JU8voZs6q4mYRrR",
  "key5": "67SAPcA591JUhdVZxkMAtemB5Xym6cfVH41kjNdUwEBPRk5L9Lwhp7UvnMnX8s1a2M5zmAqpmU46GwqG3SSZekPe",
  "key6": "Ss6fevRCs7o3r7DZDTcfCDF4dHX1KySNozpE7LK5Gh9qzLmGmyhJvJaohCV3EGzDJ7EygFadHq7GWxzzKPRsRRj",
  "key7": "2sND8UoVS4REBtfnsKBdQQ8wkUo89KNtX5GMa3BEtR1LKQq3oxLcCRAuSsH37tLBNXyr9qL6UCMuJHtL45oN48Ee",
  "key8": "HaDB4eWt3HuZCVuKhyp8s5ZzXPFXhcs1bGFaRaAAvA7N214KUJGVRgWEDSPExq8BntjHzyxVkcSgejLhvmUWpjf",
  "key9": "2uwRRyDnf8tuAvB9amBUEthHPepQfe4Lme3gEpTNfhF1KqyciLEe14SndGgLuusGDUPd7XBRiMqwSnafJMCimpnF",
  "key10": "4priEArEpz929rJmS5SaNJJdSaYvK8VAJ2qbWZ8ZNsydkBJqaGcP6TA1yxUXN5wjaC194qvXxDj4PgoRQ16drJo5",
  "key11": "3U1xsHBuMc3nmDiq9jHpQK727E9J8SVg2GQhbyQ9yikynoLtcNmarVdpZSALDR1JNJUoTsLY363KH4wUyPzsDr2m",
  "key12": "4g2R4QmMb4dcNXVHZuirdmM9msicVghwrr1MTJLnMEJUUTiQ1XUcBCK3cMwqMsQ4w7x9y6rvsqvTYrCiisQbpQHL",
  "key13": "5YUEbQRAMa6CGS7VK7vGWsKAwiDuDnWzsHHW4eT5UEye2eFy8vK3J7JiiJPArWSvBtZnjRcTLee8sohUmgVB8GbB",
  "key14": "2tZDQCCdQG9vaWUT5c6L4UeEEc19CZkfyLLCYxrsRmexprdXvAn7UraTuHJSkHx6z3aRX3f2UkWh6iM8BncYEpFr",
  "key15": "23BKuA8RLCoWzB73injrVK9KAod6Aj75DNeik1qjCa7pt7dYuaQv8xxQ7Fp1BUMEubTVxdEf2xALyPHgZFBspdq6",
  "key16": "42yfugAxey7RdWufRzvS8RmeXVzvdEbSXNYob3yZMv9sbx6hPaz82ZKCRwbucMGcWQBhhxtxYy8FFmbkKTnZfNra",
  "key17": "WmtAkby1z8jjZbbtBAKa6BL973sr1nTZaDEywGegtcrCjPg94pVS9nB68sX9YXp4iRGTyAALCncMhhYhvSTTYic",
  "key18": "3FaW34ppbheRg1wVJ6TjQgAzPrTKQz3HedpG8PYyzuA5BjCDP14Efp1otKjwna3FgQguU9AW9c3TDZsbQU9QuCfz",
  "key19": "2CoD5xFDat2zEPoVdFe59nHhJE3x2ZjpAw8tyvSaN2kXAx8xUAVkjkHmgELeDq6LFjKgjgWQp66wKMV3zbwpcgT4",
  "key20": "2r8KR7SK64KoaZn7C3h5vEVsFtEwLs5wewVPM52f48USaAhASNWXrzSWnqYxH6iHrwGxAJkjW77dHhBWqiHXCAfh",
  "key21": "3mYQAF1v6EmLUZ7N7hYMFU4MRjEmp2wfWVtGLi7b5acMv3dqXPz4C88528Z8DFZrszJ39MUxVhH9fUV1SFXq9LVJ",
  "key22": "4GFnPctwWMZrUEWy7WiDCUYRoPMqtESKAyy6GGZ4p2NJUNVW79gbnHy1Xm8gN29xpvVgXjuWeP4LmTJyvNoZzLKo",
  "key23": "5fK24TB6umF9boGmPrV3ebX4871GRDKwVKXMC3L2GMfZMWpKaU9uwM5j11rxySwkQwKwj8dqr2uPGC5dVT68K8A",
  "key24": "5pSn1mQ6qMuJFJf6LBbvUctxA56WdmHd8PhenSJ7qMBPrN6M7gAwxhLK1rr5sfEzgvz2J9RnTxBfAtZVY7RakvEv",
  "key25": "5FaSW8Le2aMZoVENH9nurkwv5K23TmFXnxsaNePUFbXodVDBd2x8pZcqzsFs5A22av9vCh9H4Wg2PTPFt7tBu79p",
  "key26": "66SqsHvn68XyjUEXKBoYmuRYiZAt4GvSUd3HuAzSvRucypf5SyQjaNZxRp7nf9zKfVd9WRvbUj1RWSdXYtL45Nnk",
  "key27": "3E7ZJs4DYpjGNHPfaH1vNFBG8CeAEAvSh1cjSczu6QcsmY9owYyMLqi4CQfrBGvpVuNt5AGZsxtELv9ZUzQbiLAs",
  "key28": "5T84hxgUeMU5LnFzJLUgQDiBHWcRJGoGFxHQZkzumqraa1HTYQ8cXpxU567C3DPb2dH6iAL42kCTbo9kFpnoCwqv",
  "key29": "4ZL63brJUWeYhxi7yTCJhQCM2sMvHF3mSqnBkxvzkivW2zAPfThUXMnhrA3TPiYzCXgfUdSBuZT74gyJTz4Punr9",
  "key30": "tG7poJrKsu54cbgSzjjLa6ZZgyJ8N2bR1Y12LqoqtJiCZN7vJ3ohXW1W293NsKq4by5oDVccULwDZeZTkQvcf9n",
  "key31": "4KmfdAFpJoxd7R5yStRcHYi6NgyuWXiUBMvTcePe7PfqdqgJyMQSERKxM2M23KDPPtzCZW1YQ6BbuUHFfhJC4dEw",
  "key32": "4dD39kXZD93kfyhaBHbXZ3gnptUkxtBiw7rMbw9QH3SJ1eDP8FAzPPsQeU4jmiNBjb9FXavNXXyDg1SHBaR7ADjW",
  "key33": "QQZAev1zTp8EFV7axGqi6YRZDKhjiYzEb8eoh3MKmcbkzizZFRHVhk2p9pbGJ7sjjFZwq4fMvkkoHUapPDvbkFC",
  "key34": "dWAXg4d1T2TbTaLZkZofid9AXJ1SJxBQdfUfSkdkZYgD352jortBtqHYCrHHB2amKTi4qSte5384Ybyjb8REcvV",
  "key35": "2KwMDBuTQaDND4SVDDpVNgaPFQUtEQ3pqw4mFyeU9Jo9T8i5GtamHwL79WGuTPjDwNbDH1MADGsbNzuxBAzehZPx",
  "key36": "odGhSVtvC6QoKAK5xrnEnyrRj8tqWN2UfARUpbCr5L1mXjNAvNcPQYM8b418xEtL8wakLYMLiaoR1CSxeEyasTm",
  "key37": "5hLZmKYdrcrQ4Kinn6AoXqbcFmwynjzWNmNAuDbiRt4bbbVYtnXpLyGi9dKQ1MUtnaDHv2c3KXCtYjqSoQQoozj5",
  "key38": "4vt1U5EVFCNvbTfkgUETPrKGfQfcP9dr4huAudNsak6auAAHBQc23EJ6pRNdfyyDod4RhhB24CXiiCRgBN5wR1aV",
  "key39": "2S1oT8u9UBCqcBW4YXLDu3TFkbAqg6jYf6RNXizzYgnxfMvvrMu4rZ2BEDmKcp5i3BhtuEDzfxuVT61STtg197b2",
  "key40": "6636e15NuL8y7Y8daEj9AM6V4qtgE3gJg18Mb4zZN2ZHAWmEc11yDskEu6ryxPx5PLAHGXGpgvqA6uTuVsA7LC33",
  "key41": "AjfE7HYhW8oGroRy5npT8NGcpvwWzdL2gxAvvC9ZX8D4GZ96CQdZTidaznAjJHPQSXqg86rWkzhCvehJCCBWBHt",
  "key42": "3wBo8uEh8oLexzxLywnaWDK6rS8mFDGy8JoRzQ5yg4Z1b77Zww3r5dssPF44k2iuVY4GwgWL166L1JoGj4iuq7uZ",
  "key43": "3Nem2ybwqfMzocQk48x6f4MUs1zLnynEM39Z5G4BKJfgAtKjFaHajFaFhQWuiu2zn7Toq9JuBnw4oZZ1F2mFLTUh",
  "key44": "5SWnaMvACP8EMu7DddhCcgdCo1RLtS81njg3QpXv8nBU3jGJKcQXvRHHoRVyAJ896qQsoUfvbqkCSm2JC7bCU3TH"
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
