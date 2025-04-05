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
    "ZVVPedazaookXtbQdEH7sGp5TesuX4MXYQ4Fw1mL9cfBoyAxLqPoqUpvRYS7VDy8eH2LS5D59odnSGbJ49HF4HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhfbuCQcTqQ7VpC2GQFy3M4D4RagnjJHy2evRTxnya5cqM9SWdne2robgzEfRpQpWEUusaJNsTE4ixzwBvjLQuK",
  "key1": "5pq78Eb3rudPNaFzDotqaAbAx5SkJbeqjTknohf1rvRtibYkNAMNxopokcBE5WfaZHMSvpAZNtCTTDsvEZLWZxqy",
  "key2": "LCaKcM8SUq9M2ovcqy6gh6wyBn8LKqpFMP8ysf1mFYVZGSv8pBffC5tL54WxT6sZmpQoKTP2FN5D8wsj6pYZdBs",
  "key3": "5DQWu8kfAwevedyesDVVjJuzWmfUrFUr8qDy9XmBT783AWFhjkhu5aaux6e2GbcJFw7empMGXUVZcPWswrPBPmXz",
  "key4": "46XsNFNLCRkz9yAuJanjJAGfsGyLFJ1GZj3WMLywPxjDEXXL3VsFAhcMmUcqREBJfM8cKrbu31GsWefcSAu8ZsqA",
  "key5": "4G7CacBvAk3AaG2raoaDuoAuTquFrYaPujGSwLfr99BmWynchCg8ei55QiF9A2u4LrezwsGGF33D5K3dBTPChRoT",
  "key6": "3rioqLFzCxBuxVNgVqm9AQfx4kUeLmb5kK2dxUfhfkL2bcjwuE7u4CSQUhGkDbuULnhCuW39mcxVS5H5xMfE41mP",
  "key7": "2xc7kCnykpLVSnyNhJrMZK48UcX3DZRPTWNwLRnpnJ89KrNUhat7C2v2yLwYXNCmkSbbk2ENJHSeWFQjGLqeAte5",
  "key8": "qBSisupiy4M3GaF6EwZHourS24GtVuTiCT8pKhhFEu2QYpg68sXfXuSRMZMbA8EWYhNKFcV9HUjiSzYauzKRVPc",
  "key9": "25QUp6N64hEzN1y8k6Sn4QoBVKehVi2tHYaZWEMj8nsUhFJtU4MFyL4Qzmd9RgBDN2LYFyG5mZfVfajiJHKi3X5Y",
  "key10": "5BbtspP8MSrA6drhXzq9Cz2TGoyUQCDJrSiVBCcbi9BJYHXdf2k4pYbr6Fw727e6Ke3NeMeidPse9haqaCtRHR7D",
  "key11": "3K5HJ6Qsg7iCZujoSqeDH63Z3BsRwh9xN2q8oj9simDUncNhP6wMyxk9g4JYFRi5P4FH9bKnzmzwSutfKQDt178",
  "key12": "3oJY1JpvZLWNb9Wc4W573EinvhxBbQZiaqYRTRZGcKkHY6gxpBnEoogZQZ9PMPZxSfHTBa3pbnAgZwnCVBxDqctP",
  "key13": "2wtdr8khSECVzkxfNT8C3FYJKaQdUu8pRU6rQVegcAbogX53jtPbbFv6Y67iE5hNT8Sobjg7FKBJiwgcGka2eaix",
  "key14": "xADfmewGbs7s3KvxQKQT8gTMc46kB242ZBWkVyBxeTxBGFr5C8mUhbbA4KmTSyX8ZpaLxiNJwPL1SEVNZ4tFnyi",
  "key15": "5Pm1tk6kxRcWc7YgswJMwH7o2HDXm7PmNAT45mWwL8kwLqQ2PFw7gdBhGvSnwmjRbR9d8n1PyTvGrL8f6aRBcnrR",
  "key16": "5HH6syfVJr9vPjjVKH76e7ZJj8nezCDVwBhAaLPWhCGxNd7SrsVBfCTaHGWsCMWsDMj8ii5amZrjVBmeybohvo44",
  "key17": "4S5G6hsHVsXjomAisZVnTrESh7E2N5LKxZWB9SsirGrNM9Yusph8BXAtXKRvNhXfCySFUYFHKUvmDSsWMcxsdize",
  "key18": "3RtMVU6tiGiKofKJ9cP2oJ5sTcnUGdv9iksa232fumLyXqSoXUjcHbz5wGu9iSY3tEKm3Wt6rpC3dX94rK6iSXuC",
  "key19": "44px94vsGfumVDNiMPhaXfHJZRzUgF58pByykenFGhuzRnS7eSkZqBH7AnNhzWFqRmk9h3TKi9gdFtBWNJ5Fv8Vi",
  "key20": "3rZJyVNASQ4g2X8pGJfnm27sveGvthWYRzwAZoC7cweMGbMrdr2fbpq8LbttFMUsKU65Yfa537TCkiXZqwHGyUtR",
  "key21": "57XMv7nLbognqiE2vtifwdyRSQEDMgxLd64oYk7j9AidcYP1ydv6jHipntYwAYwH2XECPqETELQP4sutt6MjX1je",
  "key22": "54wVTTYm6MaMFtvKCuiJ15CjgTGdpDT1cHvGGTV9jHGWHnXAD3XWAFCmzo3hUyHeRLR3HzRLEYC9P9rf9gt8YpqG",
  "key23": "3DcUppMXYyEtfkNp7xhbsPMBbQFTBPdAu1wkgDLKKcCCQwz4VkyFd1bB422VNpTNhQT3F4K1MBgMnWk2RJ3oCJq8",
  "key24": "LGKnYAUvByy778SdyrH58ZJhK2mRY3g7VfW2HQgij5T5nWAogCn5qqo6Yi6PaCyBrKaGcdLQXaa4HN9JSJbi87Z",
  "key25": "2Yukz682zJo6Km4smbrEgpXSN8iADDghZG3nf8vJDZUtEcDvJrKGnzFqiDmyYb5gytHAsdU62D9oys6UXTCjq3A4",
  "key26": "WW7okAuSRMr3aBNRDLRzqNAkxYgN8m8a2mnFQsPqsCkg1eTFLDqc4owPLxuLxhfpc1tHY3trdKRFA3CykXsR1ck",
  "key27": "Ngwqicyk9n3iEdxNfXVbA5x9dwpCFMs1XjeYswRWhdHyXs5Vm2vvmbEZT4ykYav4pBKYjr2hfSybyY1y3z2Wmfk",
  "key28": "r9YWE2NhD6v4UFzKyNzuHY5bEKTtpLesQE5Go2GVLT2j5Mk3Fc9eG4MYiAR2mXxwwB2dwd7QkvYgLw3dzPUywUM",
  "key29": "5iDivw3JLicDnJTM82JVfQ3HgD2h2WrELuBvL6U9yEvDsYH8tVoTsiT8k8BE5D1GeNAgzCBVGn3nCxpuPCWHQoKW",
  "key30": "2MnUzKxdmq65LFAhfESJcQK3EEpH3wa3NQwKiZinThw3ewdgWkUt6WLJAYJMAY1vne2rpp9igMNVgCwrLBxh2Swc",
  "key31": "2JiY9vCBhsaRjBZzPm3txreL8SRj9tXRxiqe5J1HkhLxZhekEfk5MyC4vhYyBh9BQjkHKQDaTABTPsQJPyJcY2Lv",
  "key32": "5X22iv4bRvwm3mnkeSfNZta2ss5eP7jewHQWVJ4UhS1kaNgtWw2kcnwhbtQLdYvBnkBdJYb5yrSdcEAZFQRqMhQU",
  "key33": "55JYJGz3z1MWNAA3yQMdnCtMpSAp1KgKCbDnHZhce2iF3YeW6HyuUJhXCPJVi4HBurCf55nkX2SZWkxaG2fqTmVf",
  "key34": "4ABm2sLrZUe2GSU4DGvBra861JejthawjmUVXuz43mkY11ENYTzpgSPnLyrCLsJFXqk1fLVugAN5i86efsjhWE9M",
  "key35": "4U9S1GHtoNykhbdbqGkLNXTwpJeDWCewqNc53Jax8SqwY9JMdv8DzshZkKd3HmJfkYjF9DoeXrNKcwmyT9BSvD6d",
  "key36": "3f5JmNDUVyCUN2cJR1QatFBBuZ6UcGTGuMcHWHxmc9YYPcbBd9TPatPijHPH3SvUvaH8TNiNAj9fBGXdYXif4ijX",
  "key37": "5Wc7qtvZXC6CMmrDKuix36HSZpBjjNYkMXp59DvLzjwS37gE3vkGCdGJb2Vakhiii9Wy579wVaqXoN78TaAmBoA5",
  "key38": "2Zv372Ztpgn74C2yoTd7hCy8MyB48BwX5oXwA6YuUpZBFXnqh15qN5MmrwVhqrrLrvUmMyphanV1NR17zMcmHN38",
  "key39": "JJJQ7RX4aohrzWjrBF7ZzrmkzmHEqufwyvsck3uxoBUpSzMu4iutj3WjUNmEeM3EXFrT827z7s5JQ4WtMyjLeFx",
  "key40": "32LstH8quKGhVV41vp4sZxmndqX2FYeZj2cVfPCSm3cBSV955S8pySMqrek8vA1FHNxSJooZ4gm3P1fK1SZvBrkN",
  "key41": "4CwSxHCpNquY5unvXqR7R2FnyLYLAcoNL1PCf7zLWGBG5UDyMUUTZSjLbjngEGF1G7prigDutfxk57rBpNCXx38L"
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
