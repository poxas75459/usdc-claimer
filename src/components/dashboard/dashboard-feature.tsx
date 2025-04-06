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
    "3xb3cEDv8BTZsesUsixygSaMbLXEsFJQvc9wGQo1L3jPLXCGYqr3iUiFwqqAAW8SNXhDkT6mW5tJkouQh3vkL4TR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXWSJrahLrnY4PT1erwzGK7tW8ohZdiTooG8GC1xj1yATojsxJaMksVQLaGSGmvFSHBjHGfjTXTZPci3KnCan6p",
  "key1": "gfzD1y7htdGWi2Ew6Xm1pKkRh9Bg9Ca7933vpmCJBtFQAWQBLqWgwDtrypRHe1NUuhHXwS3EsJkPVv8K1Y7siY7",
  "key2": "4VnVijKZZX6TTtKwS1FbpsdUK9B691HtTYxR9EFU2BLKBZ4GQ9FLR3URqXsd8ZE3r7XBQsDPCDe2En8S5MS5wbc2",
  "key3": "3ZxBBkFhQLQLEjQ3VfrZejWC8LGXY3TCn1r5XvWvkwwFwi7PZ9kRh4KCTN7P16cEYfkriJHa2V7cMG9EFhbvwZ3s",
  "key4": "2L82ZqjYXq3H8CwgMkGckZbASoE1fKtzaz4DMxfQkcuGZRoG55ezTyUqsJkmgu7WvzHd29wMv7rGLfSQhx1GzLuP",
  "key5": "2KiqSwVRXbJEkv1FW9t4zJVFsonouBP4QckR53hjshvnSDRyXkiecHv6L83JjTp4UJupZAEiPFEiFdEp6VYxbnaR",
  "key6": "4VorakDThAKf1jmc2Jt3rM4BgGt6e8mfaBw52wjSdStrvsnMknYDkL4Vo9axsku1izg48Kx8iaj54Kvo2zXWQivg",
  "key7": "5MFphcp62Uw4bE9YgBirq1QXXN9xS5CqP2m56P66kzV8LpVY86qnp5jNEhFMBHaTj3hPbNUP4PjTu3vTRZnqnE2L",
  "key8": "2XZSKoxhcQ2Jorvpw3i7PUi56qhiiscup63Qch3GgmwKpTuqpvfkBsPd77udXS46mMUQ961MvbiNQ1pGDUFZgtJh",
  "key9": "5XQpLNU8JuWjJsTyPf3BGQsuZivjbYjhDCQ1hHGTckbb9455hCNKHtWtShteSmKCo8tvtMkTkBSD1cMH8Yr5VytE",
  "key10": "5sxNYEZ1XmDrupGcVQMqjEtACmaSgE98TPDtZPGv3CNaRL2gLMAja99mGnGJJf3Q1Gvy1UGArJERWaviRZeCco6E",
  "key11": "5wowGn4eejwCCwzrtcebmJF2odH7oq4RXtwDMM98eUXiexPbQf7GzEj1Jdh4YZdhkpiAUMawaUiYapr9nNLPaELs",
  "key12": "1STyyAundggqadJGJRwa4EQe7YaWLcKwuVTxPSkXqQk6TSaATvZZr11MGoknpStJ38KkzcphmxKmfA1PqAYLnZc",
  "key13": "3PzKouuUCGCGRuo9zT49N18XhJJEohqW4VQPu3bAVoxzWi3HiTqLim68NjWfYuY1H82nTTBUvGk6sPK3bPPNHGnZ",
  "key14": "N22zgLVKV7bAeGsCkey7ivH1PySN5ZtF4wzr1E1wbmZmnBxgx4ASSbmMduBrgXJSAEtqS6fVNiujqwTje9JBakb",
  "key15": "JWsCaTXk8SC3nW5ALyxYoG2Epwgv5KzM4SbAfDgWMeuwsd38uXbRxyCxZN5xwJ4bSz9npE5Z5XTcCo1sLFksxUb",
  "key16": "47seEnjH3eQcG8e8inTwQdGtwFCTfYv8YiGiw9uVfV8WcejoDokZbTorFAj9preuVWYrdXBqR7LNmws6n1JY2gvQ",
  "key17": "4Eu2Dsz4gojMZ6cupPjReNt8kgDhW9ALjhmMFKpiCGvAFehXg7f9ZAGTfRjwNc6UcLqsBdj4zHCoNaKx9cSxJZrx",
  "key18": "3MnsKa5bRrekJcQ77DggB8EweyH2u2rtjtevhKfNZZK5uyap9LLSuGqwThHDB9d7kBQCzvazjqHr5eVyZWWE1jLH",
  "key19": "LbcN3cVDB6THBqDdaiJR5Uvm4ALrkYf2dhJjKML2zSNVcsMQS7Q8N4rPkUB5Csv69RM6W6PoC7SQ3YeVhAsiK6h",
  "key20": "3XSF5msEPHAYB6WiE9VWcxT615KBwHiGNfAEQepMqm21TtMpbGYhEdhutCAR3bkiHcdLGp4oSruzPyvXunMbF7zo",
  "key21": "o5zuSiS8DhwRe7LqYBA2uBjbyMwjES3UTBBEwAFKrfPbhmMq9LkQ8ofCA2uCbrSCXo58cZH7akogpZtXsa4Sm2Z",
  "key22": "5cK6q8ZV5k9arSE6LhdPFLhack1h8dBSFMcLU8WM9buWtDDFoeJzKcYsiTkDGwwFfEoyJ3UBw1hCoLTbGCdinkJC",
  "key23": "2P61ZXq23K6pzMETEmNvGCis8hfzDUr2wSDPtKdBkYWrpBkCwpUkN9Sf5bzcCww54rMkLf7LJJxc4pnvEzLZyAY9",
  "key24": "2G4n8q5HWiZYpzgDbrMft9eBSK6AFa7xugSZAJNzQswf8JJJLyxrpkcw5x1UQswo2hh8maRUTbuXRNszBPB244SJ",
  "key25": "57HzXx5sGTL11BqKEoNVUd7r4D1s34Sy36EYaG646QjHnaCrysf7CiC3ZRGxEuyqKkZAujTRgirRxrXnG3qf9zTD",
  "key26": "4oQESSDj63fdSQyiR6niMnsHC8qDxVgcGe7nnAhpVJzPPxbcAwc5Mkb3WMDKLnKAJhBT4ZwnSm3tXj64dpjMyeFM",
  "key27": "VbNg5GVm4imtvP5FjG6f6hNNb4SgTMJM79dWHgUTBfJYdne16ts7bDe4g8zT2Ssg4kp49eT6RfhYZphEWHLmxdJ",
  "key28": "3apvoNFusNUsdxvQAshivnqETyaK4MybQ9gJMciZUMbmQd9qPXmt6GkHUt8whZWF2AZsGUDLnw7QPMDBKy6tae84",
  "key29": "5NQLMqi4u5r7dx5ctAfrQKwrDf5Dote6E5YCKKc32C9xMcjjmFif5Vna9BBwtQPPmH83QKNQQ4bWcoaHKqZuauBo",
  "key30": "5oXSM1gUavgBbcn8LpecagPFJax9DHPCfdxt5KQbWYM29yKrRRYDi4eMZ7iwJad3JEHPo98Y2E8qpak4WbQViifF",
  "key31": "523NBVTz51u7uC2f41anYohsSSLYxVwcU2nHnAnojCX3gpM2Sv1xPzjzqZ4G29Re4th8bFUH5GxYoeCGW12HSmbg",
  "key32": "5VehD8jZg3XfQQES1nVkim78B7WajZnrHSGp77eK2Esiwc2ceu9yCL2nqXgZ4gUJUghpAry6m8M6Uk9sgRBQUmnP",
  "key33": "5A4qK2u21i7bH12qSfwzz2bKDWTZS5rE9sA4cd15W8RQ2JnEkenB9x1UiNLWuCmkEBX7F6WxqV15qCyChZeEgLH9",
  "key34": "5zNajAgx7Yw1pT2DioVpiYDfaMrpbYWhjqe4f4x5YHXRrJXjh2t6SeWtC4BUWaUfrQmoWkdgAmwv4o2DRZNKYvkz",
  "key35": "5wYPLhZNmntkVwLY9YntHJGGj8PRYLBP65jf5FRCkfLNm9LzFxX3viuBpMVWscTnc6Fw2f5n5sT9NQ4ncGw2sEwQ",
  "key36": "5HpsJY7Leeszkhs7vP9a3mszjdzk41kCEmp3xTKYctJAE4abQiECFDSYXamNb3zSmdRF2YAeDxFpo8js3YEU1k6Y",
  "key37": "4LZ6gNN3qTjeYu7ksjDQc5Qz7DMcD6313JzDXr28grUagEAVKscxx3GVXnBDwAFp3MLFnPgi4xrBRxLPc8hsq38m",
  "key38": "3M76bfvtpwfiQ6HUzakTCtNFSuze91E5jgdsCyyPtVf6XYumJAaEzB5rR4QZ9S6451nAxvR6vLoCTuPVarnpEYsh",
  "key39": "52gvENc14Mw6jLtkipgYdNSHBkWViYNkXuEaFPULHKixFam3GK9wfu4oQUoSRYDx8W3VSiyQDzvhN6us8jWqEFaN",
  "key40": "2k3RcuQcdpdpqBckZUWz9y47RUPs5N1HojCvYpwxHpWr8GPzh3kGYg6zeGtrWFor2Srr1nbmmzzkPod9E6pfpTUe",
  "key41": "4WbCoNGuGAXYnBeogSbnwbhv7Si3KHAiZYebgXfSY55NAHwtiykMY1hQnNsR4GGE4F7V1gxaT9LRTiKz6doDCCFK",
  "key42": "52VrWavNKBmq1yqwvqSPYpcokdJUxgbJqt4k1P18v8QvcA9LhXJJzkyDZoPTf9DoTTXnpi9auQBDfvrRQGM5xS6M",
  "key43": "2uJcH7ahfuro3KnrPjpJJbhRSTuUwiX9F4Li9siGY7SdccKJ38tLuGtKCkNq8VCN9tk5DT377tHrTmQdd8ZwcgPF",
  "key44": "4sSXYY2xmDohvt52D8nvbDkS6cfxVPGWBUhRAPhkqRiHTAc2nk2XdHgyiAbPjdGRBsPXv8HskFpH8DJDhCbYNNUa"
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
