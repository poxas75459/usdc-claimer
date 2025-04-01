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
    "2sHrf24AEAupaJjzoP4K65CejpLiwbgbFxHkcBuDtWknCT9NKYzVD7wgH3QRHLUK1fkkfJshMAGA79XNBgZgzqBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9KF76teLM1FD3qoWxXCSpZAEKMLyLabRTSk4zHRAoX9qEXBiUnUH5YuMQuEGmgeTHeNigisRgiW4WVCYyBHZUo",
  "key1": "3ZKAuFx5YuMJzz6f4r8XDsxDLvEYBPv3zP9vPJttBNUvyLxstRK45vv1cozTSm5YbMVBLB3Qv71vwQFBWa23tDME",
  "key2": "4EHAF4XDaQDP88XTnu4nHkEaQ3VsezdZJCS2X16PPxHi93z1LVtbPYvQbLCPRWcyHDBanHGCptDFbZiTeAkLsQ5V",
  "key3": "HAWran3BDcAohP1QMhcBGB2KAuxupSgNYn5swz3eRw1aUzyKkmUt5c7rksHjEAzRaE5zbaJS45a5ZWcPbpjBZJt",
  "key4": "5GDdL3myTgXiMjV4MtGV3UzPvUQFViiNSdfsiBXqFMC7ZcRvNUQnGtL9CTBfRhn8eVdRzEQLXwJJqrQXdzAq6CrD",
  "key5": "54J4o1FMKJyy8GtbmeKmDrhHDvwFW18687t68MW1T2wFDYe2JnaWDdq3pV7jtqd9g6bjsMyDnR37pahYGuPVYT5p",
  "key6": "b1dYBMGZqc2h2SBgFYqm9tr8FWsXvxHJGiJg3tSnLiD1yLT9UvL7Y5cAYZ8Q1G54c9vWXdTEuicA4bGEzGv7v6q",
  "key7": "EhcC1qx4cTN3rAjCjjzRvhbcmzRFQyvzYM8T3ENMo1FakpcBfn3ivcQT2gv3P6NVFsvCJfGkc6iwAiNRAAxMYyX",
  "key8": "3EJ8G82L77i8RHpQpDWx7Up6PcyUbw8xbc1vwnZnVcvVmHzEVLFRy7W4AkfbWihPNqMexk3pvujxGxVPHc4YuzHz",
  "key9": "XmnNXsNQWHsRgPsUmZkRaCfr2TdZCYCVgGCAcs7jNjq4zRXbWoZAYyaiuVhKAvAKm6juhmmRgPeS52nv6Mt9ciV",
  "key10": "cqgMJFBXva15EMaFHksUhRyBqxJ5dVJixcC6rpfNfxMUkN8GKLdzaJGWef6B4VgAgmdX4c8HE1dHCDF5AkMYaSp",
  "key11": "39u8k1hNcCHJdrQGiSMTDo9bMKd9xd45SbUCz5q9E3ghT99D56zwrNH9H4SzRQEUZjVvvRG3uqgMsXrZe86oeTkb",
  "key12": "3fiLhy8cQjxnUvffmgemiq44cN4t1NnMArtwEPQgnnxFJ64hibzbx47hLb4P5dvJh5wm45iCtZUdDpzYbivaTUXu",
  "key13": "HaTtyDe7zCqxcEGxsZYHSFfMNzoCyEbMgGR5F7azViNyKfUipf7izopo4Rou1GU8uT8yw2oUsASFaJVS4ms1pmx",
  "key14": "43csqVy7pwPReprJANaUTCjFapsJWc2mbYTSAV4naX3NkpCDgeURh15hb5eUKz1iRsukJbtXXPkXYNEZnT4XJ7tq",
  "key15": "2PP3sbDMXAesABnjSNpWt8FJuzQnKZc6fyPDXzLow2qasE1NPwm8pdGhnRvB6wF74wUz3QB5G6zkqKGaYPHCew8g",
  "key16": "33bk78AtXyBDZpZPiMhF5UoNyFWz4oCmakqrk8A3QgC2SVQex6tyS3fonH5m8DpJ83xNyAGZwezBovkFf9x7DsSv",
  "key17": "2GmGT8zUXiLqTJE1omyqbYLx7FK7mNrskQib1D3YykfyJLsmw44zGb3iwSQebYMftpXKPbbyzHD4mSAfidCC5byb",
  "key18": "4yo6naYry6n91ufodsMdonesq4xuKwjvq1QmSvCXBhfj7NSWxtgDgFF8gNXEALQf1SHqeN9cEVLAj8Cvd6kFdrXu",
  "key19": "2jJjS5LLT8dz8wXeibd6G52WPQ1wy4xchREXvHdNxpCmHacZe9s7jtpwzdVaa6V4BsJrgKTbyuoWyB2kp1MdU16j",
  "key20": "4AWHQMqmcB1Wda4pTaGyVFZDqZRmNHsQtfQxoSgB2W1t5v1V4kHc5DzVuwRMXwf4bco8okc2cbdmyXXfPT5jttH",
  "key21": "2bLVs4kRTwRruenHhSihuV21jrzZK8wvHKJcWH7VX96MhqH2RUXLUp5khj1TrWgoMBTdjN5ifiPBbXph3bXHJPQ9",
  "key22": "JBMP6vu9JBTUvHN2ULncCRvD8GY12gJhqpk3a4iumCXKESRV12Uuc9HvoA5MRTxB9Qxk5SdLtxK5qW9V7cdgRjY",
  "key23": "4iEdaDUg8DQeouxrC834kqk1UvhXZb7WmJq61AF6BXiFgfDZtFFBpz1tyWzH3fN94oDKQWBpY9qHh8MepbpdGiWA",
  "key24": "5RG32pcBWx1v8t7Z1LMwgAgTf7XSqdoJ5FSqDMQhWXi1mxwV9JPBws6oHKs6fhmLvtFt8h2PzrjRtxyyP3zojwz4",
  "key25": "5VvhdvyvwWcuzp6nmdSog6oUJWu6XRRvcb1Lv3toB1GLj9qfcFm5XQAkePTBgVu2u8iGaWekRUncNwB3RHS5fGEz",
  "key26": "9Gseq7LyhUroA6fYL9EKZRyUnj5WEGt3B4BTi5Yacn2s4ojYQ5nTzdrNHYx84GFTnkLed81FmppTo2ZorpSSyZr",
  "key27": "Ks4qJFepXGm1cwnetQLKueee4gHhz7DiHeru4JnA4FpB3sFxAnTCAmRuL7CB1A2hX3F1ZhwBzsYKBmRDGPnqBFu",
  "key28": "3GkWnB7brHNxCUgPaCqsk8sG9GANz2MMaHH56K1ysacfcohCCmxfvgTY7RLh7kR12LSaBuNZNaqRKgXmrNxtZgPm",
  "key29": "3mTmsDAnR4Yxda3maZwrzy7PgpqsFZihdrgdPuebSGqtrGbKbM7ovJb2RhHVqhncgrRfhqV7GZLULogKQ4WbVXA8",
  "key30": "3d9F3BYVfMdiawfMeKYt4B6Gv6zbCZ9FL9hZ4eyXGzTY8gFFDB82PsXr5PESpDA1DVxk9YjtrLAc7dBEdAfyNuEq",
  "key31": "3SZYKVvkgESXVSYBkH7sPHgsRttjL26SyVQaYcUv9DvTXpjP8vSmhxgQAf4FPkyMesk86P7MT6Lkt7DuQmvcqd7B",
  "key32": "4bXMYQ6DVjWrZreS4kXBLFhn6hqqtX2J2uoCXoWyAEcbMZgDjj4BobDY3BGjePc24hRtfPdUrzUemHqCw6ck6YCy",
  "key33": "kHFQW931d9bwxyME9w12ZKrekW3t2rH5Ty8t1ytBEBJmn3XWYZtJDr6KCgwQzYsVgkx1ztX8EK8h6FFYaYREKLd",
  "key34": "4jwTPo5feAY6m7SbaokD6u3uqKMwSADhNARvSz4mr8Q23kZsdFRKMvRW9gnavXG2CwTPsNoH6pehet3eRDbfyof1",
  "key35": "5SdcDxmPrh2YJuWJKvTQ4uhMXv6AjQKTh5ZncJqqxLJ6iWWGYeLVXJ5JQQrnkeNAUhWVQdXHCisvvaX9KoUwj2uQ",
  "key36": "mxqVP2edmMh6DSBP5vGFanCMLcPke34VkR4r4CByNkz3crnhMdLkopGgGghrAWkvtNSo4WH4uLWLuR9vo9gEgXr",
  "key37": "5DUA2EyePHvwyLfH4zKjcKC37S6Agn7UMz4U28gdRpRMW9Hum7Dn2c3n7GqxsQLcurA5RAjLLjTxUjUCTMyhjH69",
  "key38": "4snbEnudv27QT1d6ptJ6NYSuDLZvxMTpiv8ptJaDGUNTZ3KcHC46GiTKzu1a2gLrdhQfAQiwXUWjgXV6ZiuqcLST",
  "key39": "3wfsfpwFJ9arKyrUCcHs9xtZNMeh8ABemUKErDDLb8uKbB9DGsTLEjuo88YpTQ2SgeCVmESC9o1HqjViLT4GrAvd",
  "key40": "4rQQ8HAY7NW5Sekin9WLqZfgduNY3mi3UWgDTJgUjX12qDQ5q1Tjc3Br2hj9FneVPLby4SYGFdGaVdx3QgQtndWA",
  "key41": "4i2Bz1hdDCY54mmSk93zZe6ewSHJn6yVTkK61K59msSkTu3AR8gvyPBeDRW1u9CLiuB8hZpVojmwkpveuco8rzeq",
  "key42": "51KadyDYcp3kqWJzDRPGvoDcUMmqSfKNSxTWgoRQ8WA4gGzXgGYkcZVqdMD721HB3qDr8G1PP3jogCt7DqeecTTo",
  "key43": "2y6cmWRTLhSKE111fCajP3HiKKWhTuVjFwgGMN5XR9U2SLBgybW3qwjW74Qig1T53AkbDqB4AmBL6khkzWMa5CEb",
  "key44": "2RrigmeGBxHsg9ydynfmHEU2drRuALhtQeMjUzgjcXS88VAD2kfkJ7N5ZWvaU5HAyL8kYPhgBUKsXNV7An8Lhr3n"
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
