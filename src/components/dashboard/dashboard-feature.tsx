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
    "zcYKVE4veEV68kchQF5DC6UvCyrSsvU5tJo6Pgy37XhuMpoXYnfMY1LAVtAgaVG9bxh1BFcmJLvBrdd5bPeFv34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2on4Tqa9NVg9rn1NR5nyYTnet2yU9qBi4eDMG7FqwhVf2kMZaNvAp1jyL15ZPqN4b4trLBhdPx3h6PF1C6i4jd5V",
  "key1": "Q9Ge2GbFN58jjmSadEgXekeEcecy3tes4Yxnzzm474MdGEpQPAmTdnrvETA5UhW9Y2wGf3zUgv8Eq4YwJDvZSDQ",
  "key2": "fvkNh4xkiWGgX9XZ9wWL6bayWh9ZmmWgx6K2C3Q8DbVmxmRFtqTH5BaFeYDYYCGxZANSu54LirGnLWFYWkQgMQr",
  "key3": "3uWD5ZkSLjC7LTtSLsdeRLjbho1LPfhEQtVkmct7AfYjfxZk2XJNDfAsnSTKFbFYAmHecQjL7Ya6KAbXWnLwBHY9",
  "key4": "fMHe3vdKS1Ki1yxNkAy6aSEFHisNE5m7T7aydda6c5ixzmGfTHryHhP41L6jq3w8jV1rMZTyGJtVEgXXct7NMpF",
  "key5": "5F9iJmW2FxSjmBUGx6eZqX8rjoG8EsN14Lj7Gtc6roHRpWQa7UpVSvkAqKCVxkJgZX3uevHCznqvhrr7F5zE1zKP",
  "key6": "2c1drmj4aRpm3M63hPFEdUdGzqQv8fGC98CqFtBsjnGJGwzAMhdtYWYWjFoX4cjixED9g3csJHNp2FRF7xuiE6dM",
  "key7": "4TNf4WJFxZHBCmye8Ha6cVKzGE4ySBXWh7jkBJgmkoUB56C1w3PLTwM2AjHtGY7tQUqycBma41iYGVGh812Yrhtu",
  "key8": "34fNX7zajYUudQqv5C6VYMQanTRuc8Tz2rt3JnRwrqdtZAYZVTsdvW7AY7SpmdjEvmSGfKKQWrh7cZsiknmid9xd",
  "key9": "5cifHPphR2sokRLWGqC2a6UZ1uz1Jj8jV9ujuvQqarm9Z2jLmmB6UUdBpq9gm6tbsZCkFHuqfYYqg9Zr6enHs4CJ",
  "key10": "2pRbqj56FHGFhwTUDGkFLyB8yeqP1ApN3igNx6VTvPWHVkDdwRMfuUeKc4xUNG4J4213B5yDpF1YrnshPbxdAfCX",
  "key11": "H4eTXGZJ35t4bYzq5LyataFKH28eD3KK4z3RykjgDMjnd3Moup3ApNQYPSq3Zx121gwTqW88gxmB4Ep2mRbucfQ",
  "key12": "2aPTsPrEwnBYNZQZYaGNktgP8QHZZjA7SQoNx1QFcpnQEMVEZCE9QeLspL3mcYRmTzAuFn1syMUtuo35ihgcvhc7",
  "key13": "ri2o9tSLEKVGgCDATDQvoxKRCoojLr4LsjMgpQ76G6yabcA9oZNEVK2j7JbrYiEw7pGMoF27WJYQspkEH2JJm8s",
  "key14": "BeXqtEsZdw8J4KQZJxoGzcNyx1bNCgwvPumXNQTPWHK12penJRV8vgowWcyBKSSJYYJdg2sPwwagzFR5uHidLjP",
  "key15": "3pNxk8KvczPFs4SZneHpjVyKndYRuJmbDAPYSFvKYmE4Vgpm8UXc5UtF3dj3ahbjuK4HR9wUEQyxPAGZoet6unp",
  "key16": "5mVcrkJ5bXjhNmSx9peQwiVgXCL7zXtNcozpChAH5JFTGaxcJ2X4bsMfhLsqwhwzehqZrgEjR77JawQNQEwTFtsw",
  "key17": "86Jt6FYyjuZ865dqQFdSn4GQY7owonnWK8659nvdKJ5jY8toYZQQJdsXgQCcBny3GC6q9pbreVqiXcMBp6sYQYs",
  "key18": "5DSX5DvvspsWk1Rc5yVbdFXXQTRoFbt5DnR2H6j5Uz37VvheSXDTUfCt6i7pgUcmgitvF4jYVsFXg5KUmMiMjU5R",
  "key19": "fimzmVokHbtzNeYBViCvaRpHHNPXAdKRi9VzAQB4y99HWemEJipV2i6UqArZgZfZP23BainrJp2e486eN5NMma3",
  "key20": "YqmNH5tStJ1PxFck5tqfM1F8sFjhovb4EBKm7pUWB3c7Zv1N9dWNCNx3ZMvSKK1p8SCriehp7EEGDorLMheu3No",
  "key21": "3Bo7p9hbRZjb5tTteiMjHdz8fPqiAZmzyTsWq1vXqCeHCwza9y7MggLogXjEUbCW7u8ZJBC2TMrNSj4x1hxzcex1",
  "key22": "2PFAmmtZChbN7qDXV8NFAZbYPwfrD2ynXdbBNDdjFV2mUL9CznbSzQjvNFgE7CcDvZzMvMDF46jChciwJT4Kur47",
  "key23": "2mRNkyGCBHa4PCra4VYBxHXSkbSHJeTDXdK9ceK5nNHoqRbgqB3qs2PuUkUPdXFKv91R1mAakgBX7nnu5cEXhzXs",
  "key24": "5E5QtrmaL91APBDmJGDPkbFmMrTsgHSdUWXgmfWF81xxgXdeym6gVjp9bi5xboq4Mgzwd4Qj5aRiVA72bUNz7NEX",
  "key25": "uprvbn5CPAh5P3bq2vgZgAeGxj1D9bKRLFi4yZkiqVGhKmGC2kLBoScq67d4UT9hhz7i5bPff4Ecs3sSoVqusjq",
  "key26": "3a6EYhr6fsAFaGEHFRmG2fTy7j7VeKwkaUS6NbgQsU8q6EHLqzbMkWmMGwQFCLiYqmTXkavN3jy6n3YKyHtzusma",
  "key27": "2VsjJF6aGuauusurivKd9ix9BmF8o2q2VkzUQUdkn6SHFeKgTeexSUh6GpVv61ws9ikRT7d7nZ2cUVGZfqBH66t1",
  "key28": "2sDU6JAkGGQRUtRDdJFfmR3LM29JBZnyRWvP5Vo3jr2L44v95pJsNn7wdQKAhprhHoVi21gV8V6aK9mjTpV1gqYL",
  "key29": "p5j47F1GCBmDN81yhtM8ZiNVxWpZsp2B1TDZsoTAkMQA5NkLmwG2zHNH56uuMPhrGrNxxzG8JQKghbSS6wrs6TZ",
  "key30": "2ryqv1SFVpqiECvV9dKwMg6JeDUX9Mpd57WzotQpvykpgng9aQJSmWFBiECViswNUvAvgdxNArYrv43kNeY6gvF1",
  "key31": "kZ91bnkdRXRV672VwUFEM8e21w1aNGj2RqM8RdPSkk4NSnG7bzu1T4ZoYStq5FJJbNXCUmkANwH69Q46H1oGHKk",
  "key32": "2So2iW1GEV3U37RfVG3TgkhFvTwhuLJzzE55PJGrquvYXVFf2e8EAQWzzyyWC199SGkKSefLBx2QixuEXiMqaXf6",
  "key33": "4fnUjQuTsuo4CSrR5uSkKE4YaaSW6PCqRYNETquBrnGQZgwJ2NFamBS5hgx3ai7LBz6CJBncqVrYim3nQdHNvX8j",
  "key34": "5f22TVRKW87HRJhaqxxh56cnkKqHnz7tNx5kcCmkxhLJSseDB3yNjUQ7yHVB2gS4kxwS7D6BhUcbrS4RBvQWwF9k",
  "key35": "2KtDPPj8HXTcBUPzokCyzCteweRPoPcBVkxp14WfGeT1R7JS6ZCVM5YFSBZAtTvHqrEoLobcytYzrbAHxLXKth5",
  "key36": "3EKrxi4snhCXXZeUTrKQk6c4r5LynQckkD4A8mCetew9NqtdzryWnjrk6tJ9Q3MGeMDazteUmE21ihzPnS7grm3",
  "key37": "2pp7qHUaGCcG2gS7XdJthP8DABWc2AyhDVoSGBh3V8fR8vFRDoqQFg5qjv8gDM6tgJzC45a9kAAmyawYTzUtPiti",
  "key38": "5WZgrmVfRZtqGKfgh6MHkbXPeXZHGNdbJUdQvtMiz82zfZwnJpLJ1GefGhL45h8yokY6fVJXkD7k3aVhsbgLxpdM",
  "key39": "3rN43pWdZn4AA7iSC6qn1PcHwcVXwLwQ6hAghbEhDdcHtLk3zwK7e68JR3HKzo68x62ArUJ1srgsEEHCctbrdiye",
  "key40": "3JEgYGTmcG9Jx3jETpBEkdjhswLEBwso8JGXZTdqFjx7bAtocdAXt63vyxFJh3qMcfm7B7xzevnZ1s3fm4cD7rKT",
  "key41": "9rThD9LApoYv4SatNaCosW1CTwqDyreczNoV2qmvBgd6DTVpEYyx1na1xtpssbxxsetWRQ6To9bsukkRCxNck7c",
  "key42": "3moPd1VGCdJmwmzoReNzkWMUHZMzBpVh7rymJJN4119VxC9ppwpMdvd1noUBghKAznBva6fkTbCg4TEkz2SWDDzr",
  "key43": "64kncnYBDSJ341uu66od5Xf8ekXJEkx9u7Aqfm3pUUhkUXKQaKWqKNtVqa1RsckV3PCcrftEpRqwsS5PM7ucaHaw",
  "key44": "2qnV2LdpCr7etrwkEjaQg59Fvh8tUSgErZb2ADRjh7xbDtNiuQLYEkjiWm46Abij4AdSJZXP26DYaaigi3oxWTKc",
  "key45": "2GRnBsgAJJY2FTacxma2oDrxasjJhXKsi6BoSnrXPYyTpFYoFRorxE1kJHwzySvRAR7uVFBkU5CRQSsvv1zxyWq3",
  "key46": "2rfEFtkBSM9jLQAGxDvxvmZ9kYUJeg4AbTaUKFnE3aJxso8jJJKd1QCve4SxKLV3y1i9WZYrW9dQcT2vXegq8c3U",
  "key47": "5zHmoM7ELjE5Vij9Mt73ME3YrmcxiRSfra3BPw4oFeuPR91jMrbxHYVukXGj9ZUZsWWYZvffMkxb1R8HhRsWnHtP",
  "key48": "23DJ4Bri9ygVLposcYySKfDZfLcyowNh13du2gfjdV9HG18s2LMxAh1dwjmFVTYu8gTMs36w3HjV7R6KNbZNhHMv"
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
