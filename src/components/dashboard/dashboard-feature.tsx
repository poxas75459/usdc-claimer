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
    "4QaHFnWLduH79SjZQh346n42DCesdC6N2pP9CfzAoRA6AVChbj6dC8bFrPdhTWhDTbAxJHZxeKcni72Fx8dqLmHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNN5Dvwf53hHs9AXRQUJnASatH4r1HxnPvgQUNi9qhiiy6RtScZqTNhZe1PUy64j8EwafZzSvT5o3kWcVph2vZg",
  "key1": "4B46gMDjDGwKJEhL8TyX8nF17d8V84PQY9BzYZ39XMM1TXzrDvv6ErWTDFDoXwL54eaDYLFPEoHb7WVrcRwmAoSd",
  "key2": "4C29RhM43hQbPoLuXhqqXip8kbaR5ZVknJaZoXeET84eZWNzzA3KUZ3fjptd9zVB6vR6MGdTFCRTfux6UTPgHJvV",
  "key3": "7LRSSs5YHMWRLFnVPsEZjoaT1A1TAyzoJ7aE6VUHcHLqi7CeAn8yubv5hQq1zc74q7S2WSoA7m2UeF1J2UZc4Qo",
  "key4": "1hBm8ZVhRU3jUbYspu4eoYs4tMaCffe7Zw29UgRAy31XHLvfir7XWTZaz5YMmLUc3c1UNYwfXkg75pJQr4vYfMy",
  "key5": "2RrhdKC3fSxdVjmYbWiBHvat7hrrn7LMT7jUWAw3tF9mLomQv337o3VYrZQSRZWm9TmgsN4Yr1HCPfh753UHRGSH",
  "key6": "5AEqLiqTukY8sNSFBaPy7ZLPTEbj8KMuzxsVh64rEg8MdPaH6vG16yMj3R1yLtR1bNSiYLWcZUxc8Z3dTFASWtos",
  "key7": "2kfAQ1uuHkFvCsNwpahL3oJAcwXsJwDbce98XrHxewpLoXboKkSvb1pUCKkH7qxM9H9MTUDLaWXsYZPhSPSRr9mo",
  "key8": "2uHUvaEQwsctUiTiGm7gw5WjwhYUbH8Chy1Ci9bKAZJcmXznkq9RmstTHMEoCa45vYWsWsX5JdZQ4p3fJiTN25dB",
  "key9": "3BBzVg94n8v4snamz8KEiJNpuKSjrCsMRmGu27k1JaABXz6u89PqLQcXTy24zPrsDxc3MJj3Dptwoap9r7RPgY7P",
  "key10": "yzeVJaub218WTAodHyt4qXNjaV7CQbSXGqVR3fdxfKvBA5Pv3gAd4s2zZnpSk6ym11T2psYPKubbRDJQpJtaFLF",
  "key11": "2JJyF8HknzLzBgABQiDpYyB32vuW442ySws5HFW7teS8ApzpVWiv1WoDpPeyuKgBo2UKWHgqty4qLMBGxocxE2Dp",
  "key12": "3D3nhDpJ3ttDVY2FJL4KHrtY2C9UV2EZZXYxJ3QyrFQ3XL6G5N6Kq6eaqUxDktkYb9bKRwHNZPP8q3LajycYL5rh",
  "key13": "5Ewb7VEiNWdxAYuQtj69suvyp1Vw9AHXyVWnaYd9zhtdPYuCvAvEPTa4BtJ3DP1J7Zzmy3CpJ4ENBfjskxX1fEs5",
  "key14": "4VYbfQxRxoCfwDp9fer1VnmC15ozBjBoQ6ihLBbi1rEDc56qeEY9rqenQMNXuB5RRLHDL61KeDJSQsytmZGW31K6",
  "key15": "4pLfEtAi44oMixJPwWBSV7kf6TWknbEJc4sHbPP7XKd6G9FPAZNjXUjPFgN61Kkv49s4BATgdM1BG6ccKX83cyNp",
  "key16": "3N7xniE6ner9Xj8KhZmN5TC6NcbDPGSK2sUGeLRgscGbpFgmUqCHFy2iQaH7UmQXE9L3rQxQQHgVfWfZgjy4h7Nb",
  "key17": "4GMtT9VrDu5jaNBnM8vrZF2Jgyb5nUJo7tkFYgzHqoyWUi3j8zG1M4bN8iBSqZPZGCtsYsFw7yQHQEu738uQLgV5",
  "key18": "2ry6e4ZNtAr27Sdb7BTJKPcMjhGCYYYat4q14LTFSJfXQ4VcTa4Fmg7tjtjRr9sAjBgTqmRmbB6ifJh26DrNJzxD",
  "key19": "5Te4rrk5cFvsYaR7jJrEfup4yhSeZCrXDcMSfxVqJWgwExWPZdg8xjWDpCnMETJVnEHJHzVtXaSx4SPvscZtD3yS",
  "key20": "31gbV7GzSuzArqLWqDbZKZNivxFubHRJujwLdbCRVAbLkHCpcuzLM3nMKdQqjgcRnB3hNDSbuToKYgg4NAnjiDs1",
  "key21": "4nagbb4fN1bVFeRcwW9nSzbYS5Acc5aM31Ytkz6jcWXFmuFmPe1VjCqTzeBYiCXAjtVundvi5XqKzKjtivZNKEZj",
  "key22": "4aTgQdksvSh4GYsUDKMrw7fRf5YZdmzJo7HvjD8e9H8ezmnMsPiKV4Zd96Y5W6U5TpGBjpzUbFKgJBgWGs6cTfCN",
  "key23": "2WrJYnQumabmLWoZDjcjQJPRPDb7PFjBesATECykopjc3HnC2Wu6vjBGUxW9TrxdTVjrkWv8znvPARWgJvn39o89",
  "key24": "5Epj2jnEfxmWWYjhVy4wGWSWCsWVDBxZGf3mrC4vcKuBYpBwW5raWASo1fHgSpkVPyRuabmULv3gwHQm4YLfmcXf",
  "key25": "4mL7h2hMhGA2PfNa4CcnH3U74ri9rE2UoDQuijFL1cQCi8HPHbEDNaadDvsPTkJyzgE1MakewzZeZXcPqJZwoXZS",
  "key26": "5vyUSHzHR2au5XrgFeViNW1bMQ28ydgR6kneMUDYiUMoxQgxzMzhnCsqCEwGZybiCrDWzyZsAeFpZ21R9eNQHp8k",
  "key27": "5GvJH1GUXRZ6CZ7rtHv6iRfnKffuTesyNhyhJZ8CKV1WtoFEP7RQTHFRmXkftvAQ7udJH8srGVMWKsy1h3tkUEEd",
  "key28": "4gufygHror2NY8kW4M5Fdc6UsdkqLVSDUdbYPCvbaXbksGFy14hgsk7PyuoPFmcKXXEhPXEs9e768o2e9HEikkP7",
  "key29": "5ZrNxbh3DrMcvis4YcTeYPHT455oqZz2tG4KcNRoipA8Fmsfmobo1yNPjzYyxPbT62neNPKQ7id5FUeDD9MsQUFe",
  "key30": "2v9X4zicMLunzhnNVvd8NVANih816YcrKfAeEF4ebuWhwj9kVxc18uPdn1rBS9yHyYLrJxhVo7bG4EDLbL5wo9Bk",
  "key31": "5sg98j6axzo5b647yKANckyfiPg6GnZx43uQNbqUvuHjh4WXRYEjWom6RXPUBBLUQDJhbrr3cCy5r3mgM4bJCd43",
  "key32": "2DzopkopAscmtw1wo4YuWLVu3hi1QeVCbzZ6sFTMumCQRAgZWCSV71NvdtYjqpMhBYZ4wVqE5BiAUYSB7mchEoSV",
  "key33": "XHZS184P1VCCmFSmjCP5vmH3vjQ2sxDgsCFJdFDsxfBQv8YKRsfrLKhzuwQoF2nWa7mnj6ehDSvG6a5cucnPRQi",
  "key34": "QBMkqVqhNEjRLBXvuKzwKaftb1LN4PDQCUh6obRcxFoZyGCqewAAAmANzmARye5mjoi3ec5LTrpLd7kfpGK9KNT",
  "key35": "4rcSZQBcThKsDbHRt3uGZxGNfpdJ52Sqq6qNe4fptMfHXM2rpznUFow6VA1sbSxypsKZFHEGoPpZgmeodc6aMdXk",
  "key36": "5XBi9goRZVF7nwVWANhxzSTUDCvQApTXNQgTV2FF2HHDnbPFhBhivdQmxfwaajFsfMFsyNk7Y6cV3zcxS6nbnXnd"
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
