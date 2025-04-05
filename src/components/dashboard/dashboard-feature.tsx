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
    "2HHKA91iDbfzsPKEjdn83LQu5dM1Kp8cmfhTgAiRkaD6mw85SeuXA8vMzEPRotim6DyLsqo1nUJn5CygiLUriGpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1yA2UD7MdgMYssD81i3uwwppAWrvhKYYeJ7wavL95ty3ro2sJCysu4uK5pXM6vqkV856e2f7gtAMLpY9m9DLWZ",
  "key1": "UVt9uVbjBAwNY4grkr4USGPteZ3vSfeUJJaYZRawD9BDopD2fzKv7kMF8ce831K5u5BKnwpaUvniJEFPMZCewbA",
  "key2": "5gMjinYmvQxwHgei724Y22SpcfmemT2dZEvkrdjdfH1pFt4C1e5kFjYEEtjYmMRtPuvgYoVi355UXV3AVWCxsqRU",
  "key3": "1u6r7FvSJF8bTfFNFY4JxKM8TgttVtHhXiudqw6Lhnjh1gJHDrgDGXUus8PNiVTr7xk4eDEJcwx9FPLnQVttKyE",
  "key4": "3jcWuMyRhLTqHUoQGjSWtqsf8FeewUvBNaKHW8hcduF92bwBppG75M6pUYiFT3KNyoB6QxdGVNNCtKxqNXDWNJGC",
  "key5": "3sECT8TbkJ3YxmorhTQZ7d7rqTbD8BX1zqV1FoCiC791v6NUEZW38eNQRjzy9SbaxdZXZJFG7Cyudw79DemRERbv",
  "key6": "5eDyxnX6wgeuBoVeJw7q5NedGioiv8h3kvcb9TfJMWbJ3jsQUPxz23SzXMswCARP8aDpk3zEy4rxxtmXmDcx4n8F",
  "key7": "5YMNZ8qCPuBYNLribeyvaxwju5yDbnqBnXhwE8NMJVd2TH16wFB36zweYWAfR4Bdq36MBFZunN35CqfPn97N74h8",
  "key8": "aUs3UmUNpUrsYkS97RRdFYgM259wfVS3QQcnCh1un2RdH1nchFTJYXNSrjoSKbSvwheFFossVw7tkt1Xixz7rRv",
  "key9": "2bcAkyBTjg9wn6qTEk47LWSkgNE18tw4uagGnV1M76q4Tp8snuRedfGeGK4JfBhv34baaGZKsXtUB6CspAZ43NqW",
  "key10": "3ApYn798JvrNPLioYz3cnFDgAYmnCbWqsss2bQv8iLdcs8ipPg9Erqtn9qHpoh97jw1W6T8GwLdbqVFEabs2oTnx",
  "key11": "5Rpf7pjKb66HgHZEeTvnSpfHXAWsXz1F5by3XJJUUB2vQiiFTtLSdWHsWmGawiFEX8ugV3V4xfSj4HAukvNcWxiW",
  "key12": "2yJ56Qa3i2PMrAL2NwoWY8e8vyr1JM9MpQXuWro7SGRgc2uC5gscJB8HiT2Z9KrH9g1RFPZgcvtytHwirTdC5tsF",
  "key13": "4rBW5sDFvKeXEWFnA6isWoEZSzq9ydpggP47ShZuGVK2AiSmt9KHh3HLvZH31kMxHu5oyepgHjrcWkGW7ZyBpagn",
  "key14": "7KDMrXv2E7GGDzgtm3fsNi5icJ4ASpGGBaJ9aCuz2QY9mKhmuAECprpucCDjAbd4rojXMfao3io83QrUVjQA5uo",
  "key15": "frAqWcozCKTd7uqYMAszyHTPcijYJGu4E91bQQoW1it1VRxN9QNXTNLoGbis3PY98H6XqHvSpfE66kbAUtC4YTR",
  "key16": "P8feJVe2juxMRKWfGZz7MHVnY24KrunJesWi757KnHQEA5tmJvojmiVZ3dJPPNYoYtmr174LyJ6HzqrckYQPEW2",
  "key17": "2Yck19TKzDC73hZSQBQkWoEpVc3hGjxdgzM8RZvzCSiu7u7E2nSpX9zxGCPopPCg6e3XJUvKeudZyybPemMknHJA",
  "key18": "TGVzhodQoyGjdSLHzPb5GfbPZx7PXvRBWdWE8DCDJPnxGA7AWudGHuYQDzi3aPtFmMw2ejfHPhuzd8e6c5PS6rh",
  "key19": "568sZQBBRuRwnS9t2gx9uqXQhTzn3qWieDo9TYGNYyEoyEDfxiHE65zKv9EWHp9T6nMBPJg99JqHFAjZpfUHMMBh",
  "key20": "3adNsCDJUrcz6pKDUBYb5ppXr4T9P5GgjUkW8Yp1ezdsJfPCt5waBSQaVpNxW5BYsQp5kfXwU6ZQcFRMPpboKYSG",
  "key21": "5MT44EKEG2LFRJA68JFNjt2wsZdwoe3VqbknYwTxnMXx69VorNEgnCpCNPwyzaAq3PWcjr19ZoTNig2qZ8pP16dc",
  "key22": "SWcpPP5d9NpsrYMasH8AWPDpFno4u4jbcdSJojnM1aRDX2evNC6bPxSxcUMhzYKquDmVTMdtCtNAvkfAYKd7YSx",
  "key23": "2p3SXp9fnSdQD9Ca1PofGjvMPktKK7tNxbQRE6LV71C6jpiCyFK2Yne5t9ZcGJejxb3aTqEiWMLRVMG9pzPytGP6",
  "key24": "3JUt9RrjgSuxQkXQtxJzcHyRA1fM8Ej9kbDMYLcvwrRZni2tgop1q6NZ6Hrra3TV7Yc7MMD8zpjfusEXq81gPEZK",
  "key25": "5tPARKVveZQJq1wqsv6MiJMtyDuh5ErVudXTvQCrng5JCbHYjfzvALybJzwmc9dnoSAqXUryBa8EdAYsgzaQasB1",
  "key26": "zChjdcBpu5ekbwpaAEm9YyX9A65iXaEcjZD6sL7KymNBCcPWRXxvQ1PBdEJPPVknm76YCEErb1pkzCdk9gfmw4E",
  "key27": "yjtBDCVbVA6tL7gDQVd8BQmF5v1fKtCBwsmbnedvUDKbr8xJJHccnHhYEnTcZPjHEBUc5FgTdXsjj31vRJz5hMA",
  "key28": "NLjAouepnSxNBnWeR9crwREgKcgDD2HzsLBmG5xxfRPB95toC8G4kFegnmiDpXPG6Dki8kT997AUDFkAaxndZP1",
  "key29": "5QkszhVLogCAq5asNSz9Pbgf8Jd9RxAR8CjgboURdvjXtpXhVBwTm2NrNhATK2GmToAoGZCw8VSDYivFvBJg6eL6",
  "key30": "3JEBKxBR1tPCC3gGB8TkB7Ydf4skBFGNz9K1Dxf12D7RpMMJoWmobcmxFqwujJt7xAwAQzxeu7xUcntim7Bwqjo6",
  "key31": "47qbzh2ZvRGASzV3zTguM7nczrMcr6JFMcB7KGMMnTgLYnhCWFNFZ1sHaP3yQES43XUpiNkYvPJovEkenjYXTiYy",
  "key32": "2HDfBpRUUChhViUgupgA3sfzrRdY6ceAyFfY8Bba6t5aAcDX5WUpzomHhXY8Va1mA3vEU4TqqpPSffRFhnixyxz4",
  "key33": "4nbWY91cERmd7fL5pFnUrWJ3u4ZLnen95ajJrJDQmc4WcU66SAATYEXyfxw9NPky8gGBVJ6rFAv43eNM8C6DdBV1",
  "key34": "3LtBqngGVkhBWTP6xQTm5uyphNewFXNNc4Gwdyv7KBvQiodkFpqXV5USa61v23h8CXBSZPvK9wHA28V42G3BkCa3",
  "key35": "4zhFz1a4crhh3a124QCfPHRnzUWdG8HHpMDbyRCCWGJtYQJxm8vaNEU4GypyZWwCvgviP4mCjrWsGtkkAJVxzGMh",
  "key36": "4acRMAR7dn7k1FUCxFqaJXMdqt2koTrTfC7pm9axBA3CjiwG72E81dKJg9SwesyyXrQLyWLCqkLRvWqd8otGDrAh",
  "key37": "2ZU25aaW9rbqiJgQfVuVGD2dB6xnABxgUSQi53eHxNB6VP3pDGT1AVBFJoJg5XiFLJPRMRG6gfrbdJ3jdHqJF7k7",
  "key38": "52qB2f1efo4i3mixWmiz6s69G3L3qKG3UUeN5Ybs6XfaLtPYQMnqikHDaxYjGtRndGKCX72ubsfkiWKUvmeqVBU5",
  "key39": "3gzi9VWdvCtS2MXXeGt97vRYvfw2t7Yc5sfhXFNicMg6SCZ3b7Ta5aP2m1cwmCGiEmZEv3zZmRSbkRaMKkJmwRv6",
  "key40": "2uLdPibdw5Su5CT5nKrp8nC36rgbunrXM3J4N8TC2tHMMAj6VFQuNNuQKyJ2sVzg7WiWHJWEs7K3rTgBdXJiaLse",
  "key41": "2sjh1okpYkXKnvnNGdgFFpyvcPRdnPHbiXK4RtPBT4XMV7RTzgVZcfepNgV9GsqL6Y2xob8SZxabsjE96tapNQD2",
  "key42": "374SyQ3qFz8gqYHhpDs3pjSgAWtDpkCbKUFhDp4TEuCgAyXWB97cgoGAvfgu6aUbgE1kf5F8yGpYaQvX4MiiETo1",
  "key43": "3tnrjH1ufuoLVsnGy3mgUh1noLnxSrdBsMh295ZiNYJ23EhxJca6YVH9LaD3JgsfF4WNo53JPovt9QGdwgQ66jwY",
  "key44": "3HnafmjNYkoswf7AiT9p5w7GYnTKx5KyhzHmzM3gWqRLxfXDmAw56YVLZK2RZCNGZLzmRGkL7dyWT7iy6pLtRTV8"
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
