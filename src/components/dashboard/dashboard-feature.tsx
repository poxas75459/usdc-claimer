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
    "5BAvzF8dg7tfXhefVBQaHiSf82n8ymtNfsJWoVpJ9kyJ91wnmhdVVcjYGDzHZ1jrb9J3T85YBXRrDUUhRzuQfB6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vemmQa2HG6hxAX5wGRSH6fYDtu6X8UGWcRqjwP6581WG8avCqoqG2Pk7ib4NQGAHfLSwz4yY8ocEXamGa72gESb",
  "key1": "2FErA9N5brkPKna4omHypqtamUykBh8mkNsuop7dQudTyoZpRs6Y5QmCUd4424ZD613ByCaUSTF3mRQAoDRQ6nRC",
  "key2": "32MaH8ivRsYr6fW2YTgqmTpG4SgvtMktkQSkAWWjLGto8dz3mciTuHPepqMpMLnQM1FrFgciQkXkGEEJGwBypxw7",
  "key3": "5n9q6nWbZfKY6PiX2BqQJbJRFDLx6SHUvwVg5C7wbWJNhaU15Yah7M1jLKdapB4rDve7cCBrSuLn1fbSWeteqBW5",
  "key4": "5c17A6DgVZVeH6uKtCS37hh4FsJ1XrwuLzfjtTQUhP7Muig3NfNQWMWPPHBEkKXfKcbqzkXeZPXtpaiG2zs7ZTbg",
  "key5": "ZtxaVJXQFeKdNqrCDXAhsjj3nTywy7HS2tTVHWma4hph7LhvJah8Su7vP6GRKUyqgbaLmNoo9EnjU7Mc1S3Uhse",
  "key6": "3SzMRxZ7ZRYScYczP8MU1wGB9AfRpPtqZpUQrQv3QZgiT13AiofdWJvup72Beu3pr5yfW4ELuYyNohqu1hiQRM4h",
  "key7": "56AvXAAkXCx6xNwWN1vcQQFn8q7r62pqVKgtiw7nryWmws35YyBYWtNkJLNgSyKtF8xFQvmEquunWpGouF5pSjks",
  "key8": "HcCmiUtQjMaU6Rc8G66MGBG7cwRQuRTK6AsuAGeFPo5gbtjUTvN1cScgiSgh9BwH6x2zPD77vzJGWxnHCKeCv7B",
  "key9": "34bLhqXpcBFQ25gXha8htvyYARzfcZcF9NkRjmPL3WvwG83zSGVenuBnCWAhewcxQScpkyM9AiPUMq14Z8zZeyJR",
  "key10": "kraRgQBpQy3CPZ1CebaASsNkzyPK5UVRqXezmQpMvsgyFygPtJJ62gfmGdX6ZKmGmyKudWPqmrmMp8b3JP7yhNr",
  "key11": "m55G6xxWztaKz92swoiD2kGAYTe3nGfcujraDdZEwJKzb3cCJSnAahJWUpd6sJr9nozvTzEd6MRmsZ9bXCabk4u",
  "key12": "4Kd9RHgGLcATvCrm264wqk3FgF2hK2KWJiAPWJ598h1RZrK32THbE7tZQQdE4QhkdYb7G8GA89TcYhusedfGbi4K",
  "key13": "oLEwQ2NJ11LmYQvSR4K5XFP2P8ihWztaEFd8oiZZwBKr5XdXS6wz5zHfHCHtemfCapkVHtsvpTdtrSBvK4poADs",
  "key14": "2wc22qkRDeeaGWLwEWLWzssu3ue4H6ucj1zJ8KS9y8yFgMkJoQckJ9SiiCbo4uMgKfLfRUYzmDFnH3kXE5997YC5",
  "key15": "5PgPHP6XaPUTbgNh2ajBfjdG6AAvYKtr9hgEnX1tYcJrCrEp8iEc9b4L7rqV6JwV6NfBC19ELbdXdSKDyd5d37wQ",
  "key16": "2T6XNdVB9Svd1mc2reHNE4EqRxCD9gs8EYNjKBFdTpWXGNZvNKmmoU69WvrHZuKSJysAv8DEtr4vUnHhA6REWALM",
  "key17": "5xMHnPASVL2SZfYzZ9DzQGG7kcXNZeUt4BJ9gDFodU8KHkT3Y4sgcg2cQ8UHjVbXUDj46nq7BQ7Kc5k88pharVgr",
  "key18": "2q311WF98RwigC5YT4MrFYoW8SbUq3LYxPzMSwywcKxYSfMb1i7pWXq6tQmCwK5SEVq5VsjLCxfYa2kHVHjMM9Gd",
  "key19": "5tmULZYNYW2kPB2ktfgow6nyxLwi2d1E9gTZEUzfwZeG15NKqXdywErGqvMpXMSjMuyEmoyv9GLWXzc4R2VkoLdC",
  "key20": "5AuRgCmZSjVD3DAoRND335V4rwTnw6TmAiPv8DeJRua4yYeGgYmkqWSuSYqKrxYvWWAGdqg1hS7huTfAfUssu8ix",
  "key21": "FYuSJNJoLnVBjrV6EpkLMMUW6hGEykPrL6Qm5rET3Kfv57CU4kSq2Mcjezxa8Jo9K5UNwqtL11tZUqEAnZtQbkE",
  "key22": "NbAqmjfvUjgzuQCxkn7CrKqvTbQQJFPgfqd9LYCEP6r8XyJG5E4QmynHMNQAYwKa2UNebxutrbvtqtk5fJLmgQt",
  "key23": "FaA6YSMBnyAb8ffzTK6Fn1FetUbzncUKr7dzFvrQnBMwvqwehGrzP7KFUkVNwYY5SWsq9xSYswEuSaXDDkDNuQU",
  "key24": "3Kawjq33p1hfFBzj2PL7UTBvyqUUw2CPnDgBrh172r1ZWsdrQmsZTiDL95THfzV5LYp4mBnmNga5NXjSRcVnZFRX",
  "key25": "3ByK1Rz7ERh6NDvzoKttc7sYofJDhTWD8vd6MJxdNxSxP52H8UGH9UdDt5oQa8j8TUENEhsCuYPuFCKQwiPSFtvF",
  "key26": "5LmARPPzwa85kA2inyRomsimhed445iCRGebCyLdAjX16FpvJt6iyXADqc5eoyuiaxYwNKpvCTywxMqE98MzqxfM",
  "key27": "41a6M3hrHZErDkphRn9TFpEXULTGQrDCmPbp2DQiPjwpohhrt9QD737j3ke9K5TjE7NfUnbshwcSaPm2hKn2zur2",
  "key28": "3HBhsmH8zrmy4jYtrn53F7sMyk1E6buYfEfuoWPdcBdZ95GsymAAWQGtugXmNXv1HwwTJ2Ku1pbS9nY4mEYnYSho",
  "key29": "3swJwWit3vabxRj72gFaYjvz8PqhPbirEaSqzYCm47CuJeXfcJz1BTkEBB146hJwTS5B85Cy8X9eeeWfEEed6nGV",
  "key30": "e1UiZd6XjKA1hqsjmvXJgEeCMniB747Y1NUnazicYYy1EWYn9jZxenMGLZydXWkyyyQXCKtSaoTsfPk5u4wiEfL",
  "key31": "3FjyT9cMPBBmG1U5JR957vkdyLB1roBJ3zUpDQM7LRrBTmn23ED8zZg1dkGcpRepSXfRbS9jn6iqy2njZ6eJaqjh",
  "key32": "L347o8eGWYukQa6TVh8KBHNeVqKXa48rrsKP273McsTXbxFeGE9seD3zJAoT8oSuqU1g2jJDFV85VTfmpgcfhQH",
  "key33": "5kVgU7rg98d8x178ZZqfiQuKoMRnWztptmziJYc5hEFUL6NKKzHygCBQ9zY4rrWFGtY19pecjm3jZEmy2YhsaMGB",
  "key34": "n9W6NYvc1tv5zBcrHazD3C26N5uMTjAuePHmETpUnvHXLFMCi5w21z4VDks5qaVb5m24b2v8r7i4SyBixWyFEYv",
  "key35": "3U1xEwgvo5sN89KLefT7W3imSwPf9FcHFykEvBUmdfd7Yjvs5wdNYwRssYmuRQdc4TkayHrYzxQPb32GxGzWESGh",
  "key36": "wYBVS3stK3XcvXJfyTARHvyvMrTkRAZGPYgqigNfTJ2tA7bjkSfMtVBjSpxU9dhNaznmpMjZFtAAWRR9MB4fGJG",
  "key37": "5FE4iG2nakQBA4JZiKJtVvFEnwviWpmDDE8qBwkvNs7n44SNGJDhLesYTRvNVwGc9QT37sChw2ECNieihLStUMDU",
  "key38": "33QfcpPZ82e6Ycmsw71671JJPdEvT8K8idmpRRQMAaeJoi61e4X7EAy8gmrCnSGxW4KQLYuH6CWNk37eQQKVMRWs",
  "key39": "2A41dXAiqKVFe2aukRvHbonLcdyrV1ZY8vfScLGYayQt7KcGTqp8XivmULUMGT3f2Ta4XZWNUaUJyKPc5GiawJCe",
  "key40": "3UKxL1qxweyaTkRmqWJ3d1GiefogEW8rrXktjbf9cqjMx7X35H7LVruBfKqfYC5dihAi9oSFEo98dkYFueWaJqGB",
  "key41": "4Mj1v4eK9TsQqZbELddfJXMf1pe5hTfJNpz6CTNPsk4ehhg4XV9HrFUsafRTp4keqm3FrnEEfSQxtBqVbTqSnx9B",
  "key42": "33UQwMCozrbycR4tiDJ9hoPRYH5K6kSWCfMapYse2T57aKy2q1GxDRoCQqKfRGVtQ353ZTrhRx32rgMo4j3ovTbW",
  "key43": "31iWtnaT1rh1f8m6QEw9XgcGjqKEf7f2HWGY9rNfYLPZPHHmeD8K8fempsKEwB43vr6jt5WZWqZj4usUjy22dqzF",
  "key44": "36qRFs4T98xN2RZCXn89MpShegMsE6NeGNWyhNqZoK2ZdQevAttAjoMbNsbPHxUkafoxPYdQGUWioqAJamktDXvx",
  "key45": "4EYZxpa8DjjxHGnZBtNQRPnoMAe7jJafrBevxZ7Q6fAL2GyncaxRgsyUoB6zER32pcJ51H3GVKYCJz1kynp6nwKb",
  "key46": "4bceuAD626Yo7DKpuEkLCTVcKr5hqGGK3v54hGExazsQ3GkpozuqQuL3HgFT3RxYXuj7cvdNSDzdGyQBY1xs962c",
  "key47": "4vBqgruZyijtUEYKq8iqFPeqLJbZujEzafFsijzy4EqMoBux6JuWdHXeFVCfeGtnPEpyeJ8zrEoh8wHid6Qi8H9k",
  "key48": "3uo7JkX7X6ve4CFEaQUesmDxEs7ei2Eiguro8BNbkTZZZnug4k4zQNugTkfFmd6bccLkvnbtUXYbYLQA24xepXUc",
  "key49": "2SR8CHQEwHoKYr8Cn1McEXBJnR7MBeKFkFwizZyZajiFmXZj3meM746d7p8WufoP4LtdGHByHpXGFpYT3JvfGm64"
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
