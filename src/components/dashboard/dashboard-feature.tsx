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
    "2WSPbktfy36syrsjj1EVxn61oYq1CUWdQRk5444WG4APyp3TRaT9VUpMQvHoZrfUGVP1s9zhPfYq57GPYyERNYmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XuPFrU4XmSwRtwhy8r9qfExAV7U5JpJsbFMtTeCKSp6WhCxFAjX6DovVBtU5zAyCgF5ArtLr3hHaqySWJdVCgo2",
  "key1": "513mt2zXJ2Mkucfdwuz2EKZGZg1pt7xJkCYF77EfzWkEd8CY7LGyKYMwDcQgWdGBw62AMaeUb4JB4KPeJdBQpnsG",
  "key2": "2z4GUGZNqXwhey22QU7vHh23nnimhDz6t9xZHN4ny1WfgXjoxEpQ6FFSgWNQuMtnUCFJc4a4i85MjWAeG5d3fJVG",
  "key3": "5oVEJ77ygpMKSPM2EN1V9xuyn2n8aQaqYG9kGfLgM1V9kqSpwXB1dzUgJD4sSng5PkUPREsAxSCiqpsXc7Kh57rs",
  "key4": "3EVbMDUcEb3GKE9UMN6C8cCaNaYiiDxc9cJGPJYUtcgQ1M8ykMKAVCkHHfyTM8C1bmQKm9vxNS7V4WytQgRHVV7L",
  "key5": "YK7TyzkkPPZYjf1v1cxAxk3WtyGaYjwq5AfnCmXKDZTcBReNqe1fbAK4ZDcXA9YqXcB8QGGksFuC8d58XJTip4S",
  "key6": "4rbmMLbTT7GjZXEX8E3Y4Fh223kxNJLB8xPuZ6rdd125gYrooPvRz5VXjMmM8bWJEkFEi2Ko2QxyZLxSMthiqDZa",
  "key7": "28uZkzrLGhVbqt7Frrfi72sVP9ZKadZRFMksgFHUqjtTCSHm5N8HiKi5sRQVt9hyzYzTXy8zi9XCuHx1ggyEpdcP",
  "key8": "4yshFu6jefEXDeUZb3kVDbJo4wB6ZTEbNAScpHpwbZxjK9MEFDbqpASMSJMz3B9sNMrApdXT4Aco5Xrxp7E2XHFi",
  "key9": "3hUQz7tysAhJEiy4dHzwiSo7VJHeVKjk51pqGTfyGBVkN2nUihRSQ9jtKVN99pxEDUQXZzQ13oFxs5zshkotbyrq",
  "key10": "4oAjJ8rRTdaHEGK9G216A7nNkm8ayrrvJQFUhXHkBH3Zr6Y85vTCU425cK4Wgo4vJU99K69VRFkmEeXfHcSPX6MJ",
  "key11": "3D5eoJiRfqQM2wLKxgXhdhPrdEMNpdmR4GtLGGTo99z7ZC3dirNykPMngwBiGCpPHCg5DJspUF4N6Cior3Qh7S6d",
  "key12": "K6URvqypnnjnMkzqRUwqGaEDeUCbFpcEjRtePH5wrYKxYvEF7SD8RMHKLry5FGbWKjLbjDwkKca53Eujr96NDJF",
  "key13": "5fEE9To8HGy9eA8jh2jeCdwjDV7q7Qf6DXQ7vx7QrzriBJkmjRVg3SEsfeZtwJFwcDauDm1Si9FV62v5qgzvfLh",
  "key14": "5ca8C8GQezCuokNctogDZaVuwafLWtxnYztDVNfoAgy8S3tb5bvrwbo1R5jWuAkoMnQCViQGpnKC79WVfp49tPic",
  "key15": "2vMmRrcGJKMwVDbv7Ms4VMx95vkkAryi1aSGFbADf58f7BLYhK2WrRQyu7agF4aNexBfMfe9Mh5r46x8RJH8HFmW",
  "key16": "5c3ueSwJHSYGpYi85z282vGFnXLvEupfTePDknq4dtGqMPV2PVesMY7p3y5MCKLmC5EUZZKHwWXA3UvaSpGxDDDp",
  "key17": "4GhzM5tPKGkcHLNJaB8M3xTkCjnE6p45VyvW5ZmBXEmMLo4jWgD6LmZr68onwvj9jbzhc2mPWbC4ztkTW7rZUUNi",
  "key18": "3D3iQ6eziAj93DhRQh6Xt1qB8svXgyeZ79P9TWinCtFCC7FqbwmuwH1rS9Bfh9RajmZ2hyDH56U7KjysGxay6SXx",
  "key19": "5ahZcxiWjd5GeHW1nAw941AmVCV69S4ZFVjefzP4HLuXuUCkG5NbEora8kzQj69Atdtg1YggamGo9oev1ZL2uzK",
  "key20": "3F7bBTEhPhdMCYGDvQZHvKTpuyRDDguwhZ13s2e8CZ15RAGy6gaRPQbQdLkrYG5acWdibkbW1pYhVZNpWzWNyw15",
  "key21": "3XG6HefBLfZfmweK32oQ8ZQWDMZ73686746mtWXqCnFKdGzss6HUMSddwbm6iKWUoUnCvSQf2fCTr6UouV1KHgh9",
  "key22": "2ZfszDyYFrMtGEUugRkLQnLsmpp6epuTcfiBqqv2EWCDXYHayNrUpTXJMHDYKhGkZeFSxFMGptw4oa8XAsHcLae4",
  "key23": "dK8SVM3iRrbUP81zGRvqHLt2kTBrN4Jh9d9nUZH1p2td26t9jTCBCib2ZyHZBuA6bVnQZwFoniR19MERYaVu4ae",
  "key24": "4WFkFo8Y2MUXF4VUDKqeEnWmwqfJW99aHwc81hrNf5HiApeHEfGs8Uns5GJUTS5to7jHvYoh8VFc9fYCh5Q9ygvJ",
  "key25": "2UnRCKStQmthbHsBe2X7H9MBFBWv4EmjqJm9ga3rb5o7NXUAbpuTBppHR6KWkq524UAJTZCjm9tNAnh8jwtBKpJU",
  "key26": "2KqBxcBRVz62k1FbaUsWKCefkZetm9ZMvM1xtb82VgYgCYAKXW4rNhRwEQXdbFDLrdfbT6PobnDHcr8PZ3CsoPFb",
  "key27": "3FKXayQPeBH6kEFmk67zduYTDLwXhGzY4NdDF5Gn78V72q89X2vfgETUMMZ28tnbveLyyhXWAVAH82tvpNWTpuT3",
  "key28": "4EXV15ywgEsBYaTjtgVynp3Fgcr8h6jdEGqyqt7GmyPqiCXx8jbh2onBTLvCYV1b9kzovJQWBBr9T6u5Z8faBLXC",
  "key29": "3cxVknh8njPao1XNqaWMeX6nayw4ybk6xXUGHnGm54SuWpQdvhHGpQtmb2Haa6hnxpMKuCGrwQarF6eRseecLvye",
  "key30": "4wmYYqi9ksMHXovr4um7VMebPUMS2YdaYeNJtiWf8dEVbbrsXbv6fDutYqbQNre5pgcRFyXcTLQm9USntqwXn1eE",
  "key31": "3YgZ9KGCnDvfpyx6ZapfRRrZQaKPQHZRvFPhrMAqxeCzKbcvffQhRqGvjwUdrfFaqnCSkZqAMGWyc6yizwmjTKLE",
  "key32": "2fNcZ7BD6dyeqib29Vrsf1UwPnDJLQNsR8zPJ36iGnghCsTtBRCKVfAovpZtoimRCznoTCBreQSYTevD2KFBDCid",
  "key33": "5LcVvXxYXMcPXsd91QQX5ujtwfEMZfqBeknBhw3YD1BSAbshcC1Z1SUWT2pbbnkysAsB1CTnZ2542dTduVwqrrjJ",
  "key34": "2ZNfL3PvdTtc1ZGfPvgv4mp8EzYPcGoFhURmCxiUUFr2wFR3qn8TC4YYiXwv5czUGbu92C5sc3K1uybk92JpjMsW"
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
