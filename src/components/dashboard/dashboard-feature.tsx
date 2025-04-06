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
    "3LxHYJ7iH8ww8JpuVkHCrt6KdVREp5mrLeMNAJag7j7JrJcWzpVs8i5xsgSbfJaUwLhaLtcP84zY3WTbrC3AfXEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PhkEugTiUKFKcUFTyMVt9Xy7K8TS66wWRAv6Qi2B8EdVPGgE8crk5g1FgRayuLfiVUScLuLHDmXLeVHKriJrbT",
  "key1": "3nkRqNboTh9HYTYTfWk62Vovtwgdov4B6wF64CVqWn1qCzFsGjHJ1JQ8LpWEVRn2CA7xpxGzVNXtWMpgsXfUJNof",
  "key2": "5z3uhoMG1yoohsSUeMhTrFidvWXndeudigWZYkYm38aCVpgr9RJFMQfdG9CGMr7LqNo3UFYE3uVJ3K538myRQQ5y",
  "key3": "5msjzi6yZGdKpeUy95zfM9KDNTYuzbaGBiDompjZYBtXMbq5H55BdoUjLGLRykuLwXAE4LMUxZfkcfrdp7916dBu",
  "key4": "4n9o8hXz8DhZZwjpW72t4XZhXHDcSFH6Jek917Thih4s7PYB2N5wNpTAHqz3HD5NU6F3iR31dTFDVZotMjxa69XP",
  "key5": "4iXHVP2wLgMAYVkBabEjBaZb2EjJcSXprGTDkhoqETAZ275KG6knj9qYCTxv1Unfy95DuUSrNJhy1BJKZc4HuscB",
  "key6": "4SKEAwunZjbVZZ65mtyjHLnQ89RWZAKtPpxT6HWuzWssKC8SsNUGziQzTSH9PnKj4ghpdCxg5t1tpcuA6xHcFsbi",
  "key7": "3YQk9b2xQN9RXZGGMWpD3G2fHdo8fEgSJktEkQWAsYgh27LNQtNuJGDBv8P4ZQEbEGKD2YnyMuFU8tgrA71MnNa1",
  "key8": "4bRgF7Ao4YntQmB3pur4EZiDhrdUtSY7DfJbskVRyh2UTgmQrg6eehAKcPU9qtgVuy2rapnCQiZkJYFBvLPfGHpc",
  "key9": "4941GxgYsqU7ZYo4CujMRuMdLZseYYtnx695jX2PaL76XsxthntqFw6A4R4w54QReshWiBs95SDd2HTum8f6beWy",
  "key10": "3aNi31scbFPWnandobHtT5wchkfzicB5zsaY7k3nRri1yUU5hst3Vdxh43Vpws5HjkGXsZ4GsfgHFduZjJubLK5R",
  "key11": "3pGZ3ZTWVQe579bvnf4h25yRJUs2c9FYWmo3sZkueBACN6CBX9b2zy46MSqPKVnviCv2tUXA7s3RL8XNDzjBg9an",
  "key12": "5AAcZbAqY9poNVpW5fCEV2YsSWki11zZJWjaSHV3VjZbdPaeQW9wWBgSNgjwWrNNweLAZ3cmd2zvXHFxwnLtdPsz",
  "key13": "FDCa1H2wNVgTPJcTsg2KnvNS2bEJbMfPLVBwMeF4SYRNbrfrrNUYvytZcb6dnz6xxj93rXRfDRroN24y89LhLgA",
  "key14": "5j4JrugRGAotTTeeGhXQktUE11XYEWhNHFnW3KKGUeGqhEcFNS97gAKFzUoFLWRwnFMkT6NMewASsq3vmfachttW",
  "key15": "4R6yGnoPkJ5grxvAXrsoJ5YGKXEnb6h7cJJmPKt9SAzUAH35pqkY6d89Y7BkNFhFShPYt7wb4YkiAgpqKTp3cp2G",
  "key16": "59FdzBXaRwZH1DE2r6jvWEy7E2jnsctxZvEV9U2N99YzjbE9W5rNfWv1Kg67GC5QXBdFzXtP6nGJXfNxNRaR4hSs",
  "key17": "EdkikcneTpptiq83FNR5o8nqL3o5mGtja7KMZLjxzRmyyEt6RZJ1cS8nphQVh5ppW6TH7y7quHLUGC7vogBzTNF",
  "key18": "5b8rHBbwvF6pPAKLhzQmLVG4RyGWJm1yXRHPLa8cRrPzf13c1GKDwTBvuRcSciZePGa9ehc12dHHFpgg5cVBAzHH",
  "key19": "QuLQcxrRYVPy7EGuQStjNowZxpEEFPJjhSTrWbjiWDvyUHmpVeaHbVtxy8WdqwjRfjyzVea8hcz2ytU4GvBqQFd",
  "key20": "4t5LP9gAanXDDb8wUwiKQ3R6tgEnNvEoYqzXTHjGJ46hYD83CqzeLFuVuUt8AwtDpYo1ghwbPk4QK5UyZvXmSkp2",
  "key21": "5J91DRCVpMFnWxeW7EY3Y2jwZEU3zGeqoityo41ScAeCw78TpFeWBdrkvCw74Ce7wUasGmtUcuVNf5wQtkSDgbfu",
  "key22": "cHTve1W6QrQpvHGznENTAhzSjJ31st8rZuSkYsoT2Gw4JmwGEWp5RVA56VuTtrcm11rp8M189ZR8X1TgSgmsucM",
  "key23": "31eengR3uyXPrZYQ6BwwHjK6t1WNB2oR4Jmf1nfzvsFSh1Nf1iWrfFxFxjUbhbfp9yB8GR25odP1UdeEafp2Zjc",
  "key24": "3UwLExjUhS4kCuz7Au7giPc2J2NHwwAY8qUtQK56amUF8UnyiYW1NjVSaCqcsworgYRav7p4EZghtA7CyTb5Yven",
  "key25": "48aCqLLwSp9EayWxTJFjEcfngSL3zg3ioX64N1RB9ar5iPUn5tojZmtBcZBtoQa61nUms5hLKzpvmWa6m1vKjPtT",
  "key26": "4kjJsUYCSoKEHnWCuLyXvF3jkceSvLBiip5mbBHz5UhdQEfT8MfFqFgFfPdEskYgFsrGgxdtorHfBLUcppUNcraz",
  "key27": "2R732auGwHSHZDHr7iMsrj5ay279TtfY7XFkM1wQUsK3WX7XdPoF89zfpbGqFJ8AYyvzTd3NFy9BurByAt36y7n8",
  "key28": "5zM5om5nZ7eeTBcszFkLQu5Vqiwt8okRL7RM2avDS92ew67GYWVRGHnr7DJiNT7GKhzpwjc9jtgdqpT1EB2h39pc",
  "key29": "52CEdaxYqTVgnRdrhRqhm4bdy7UaJFkqesihjLHYMdP1gddYeWicP2G5UUyQ4qwq7mWoTAGHFHxRyRYW4MDKWRfR",
  "key30": "5S3hsyppcTTzVGnsC4Qfdnr2CwNLJsHhF9WBfLcWb2wVz15Co1SN67bCXmW1vx41sZzwoarzqtChzVtrKUemQjQR",
  "key31": "4oTdFN6HZHdY3F6upT8ZvfFhKANzrKQcfKX7xAZgdNjsbAn7ABj8zV1RHsCLBihWYfT4KZQ8Cfh1DTrZW8MQKmYk",
  "key32": "3ig4a38oRtVTPiY2ErySxwgzuEpcgCkCgWwBh7HBbaF7HZ8yseaMe682vVXh9JmdrpLE5QHSYgvgVhv2YaZ2ihsQ",
  "key33": "53B71VGpLCxMFurqpYVUSguhBW93X5c4S4cixigcLocv3cfcy7AUpsuCxJrPwYCox4dvZC5kCdHfY7cHCPqxkTLn",
  "key34": "2PzMEqefQk5ujsUSMaGeAWYxWZGxNLhXba24znTo9tyiwjToEqP4jv1k21EBVLgbZoqEsww4G7We31RsXHLpbvN2",
  "key35": "38EKEjroxxW9FL2bNfne3Wzo22b4AdqPgRunfNt4MYswpz29qb4GX25hzGsXoSCzdc9KaMHoBJSgySuVqiYyePcW",
  "key36": "67kPmEebqBNymZNDBBJbX5ZMuHBhT97NwqGPGN6XW1YWJzeLjR8zHEZeMzFmdfzR7XhaXofbQSYMUeqUYerAf4Gy",
  "key37": "t3qKMiPntmZfNHTs7BBcWa6AL76uPgsQWMVrFwvVF8JaBd59gbwGL87qYtLnRhHSrhJZHD1bapb8TnszVZewKkQ",
  "key38": "2pxr2TbYTcANKbfj3Pt1wKfSYXVnB3ZLXEWaHYJacb7zobuuSPE24595eJpUcP486q6WoV9bRabebXjPMAP3NTJE",
  "key39": "AYh9nUcJT5K5FYxJvnEWHNPWkdL6veb77mNMJtz17QXyzdo47h83qc5z3J5EdyyRrFQTWBPpHoUYcdT8BZ8Mvam",
  "key40": "3SnNSRyhpfN6yCp42cghjk2f3JvJFge9bXrtLF2M54NHD9aoHa4jXyL6h9KFd4oiqboDUqG9GfByS6x3NpBqKUxA",
  "key41": "5PitBsq3NYqACew5xV6bMNHdTnXRmDuG7mpHqxeNoKaadqam46KVC2Y6vWgxt3bQ6nPkdPxshXjZwDVZFzBq4vKP",
  "key42": "2fJL3HTpZ9qMsr5TXEmJnjLnH7BpCeYYWQx5NpwnsENK7jtTBWKYrWboUNaoEpAee2pC6YDpSQ8jWzki1LUAVjag",
  "key43": "327ujm78KwMsDiqr2XQwrhdJwXf1ruvdDnCb7QBeByTzUthddmSSWik5sy1BZsw8wcWtGngMUC9YxygraXBKR9WY",
  "key44": "3n5zYfiKi3igNcrpS5eJ1EEaJa3mUE413DKaZUUL3inspaCGt6mKXTVAmdNRzmAMVhnh1435CeoV1Cb8dBgzNSLK",
  "key45": "3jyLDBVQRqBz8dvBBcfqmbEnEwWQjworhjQSACSHa3ahaKH4evuae83X1Vs2c7bZfc9NzGM3ryzpAcYzS7xCB3Y3",
  "key46": "3xmARpKiRaLV8xhbMsLN4B939ApFUMjXTMWjkyQ9gUdTiyAgbUSdfG7DiowFENCfzVDAGNbK4FezgByzokZDfuWv",
  "key47": "2PCcPEPS4zM3seP5DLvNxyEy82MzSw2mXCRY1mTwDK4S1goQtwX3KBeRtC7z5WuZkUKhB4H93NgZKCbqN4WBXZWw",
  "key48": "31GQV1VJESVqUw3qwK7GKRtvXx8cLEiL4URQsbmVBCwWdRdkBxuX7XJ9fhJ7EaE3iRq7SsmcDUT2QLs3GWbnogg8"
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
