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
    "3u8QnVsqrU8DTaTYtC3JRdPbpDhhge8JKeoJJ4pjC8BRXxjwN6dEvHYvjXi8vDpR7R66C3RLQMQpYEb44zRWpYLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wqQt8rLNf98j7QuogWWzK35cDPphcCartZWa9X5azL1V9kNhA9o9hzc9fwhUkmB3fdHAPecHXktJ9WnGpyf8ULw",
  "key1": "2wWUGNGFPr4oQioE8PuxzKpezMEwmVBR395k1hByju4Az8ZG8FE5naghqXJguD1crBiHh2PZD5oYLh4e5ynwCVWH",
  "key2": "4sfyLWZy71JHkSPHiEHhhCHqQXPpJpmgvhsfqGaXkaXwpLcVVmgKtEMv79VwzNeDk9jieVMNK2c3RWWSmcYdhLpf",
  "key3": "2YkS5Mikb3QNbyhgcKhKspi63mnSRRbgoJ2BpVdzNxDbpU7ZNPcLzrmT9fvZsZuh93cV2GcLJ7As34hWJF26zDrJ",
  "key4": "61g6o48zF1WqxgqwQzYrApcZTxfjjz4FwXuzmnDsMVUrWLHqeoQMPQieZeadsVm56BJrLsa5Li4DYWV3GQsJuvg2",
  "key5": "5o77EXpmZJ3D7MSqw6YwXbGSuVt15PUTRAEHE2ZUWtxd9SjBRQ1Z9GYHKKJdSnEKUn6kMsY54xqmDcJBYnDPHS1p",
  "key6": "2MPMbTAYUQQf6iEagXKVnqSj5r3n8RQELxiREhhzD4gCeAZuV2YarLNqyJKCmqYWdguKBwiiBvYvajaSsog97rfX",
  "key7": "5VSQPxPKwUL6oKqdwaSLXKoSrUCpAG2qCme3MrQLjdqKj4qV6rDPf8Mc5EM7yXTxoeMgTFNwJiobWznVzd4cuLKH",
  "key8": "f287ZHWBZE16RDDJenyLHi6zJAWwrmzbQTwvTc8ofMiPVHpVA7hrib1CNQTDb1oBBNDMGPZiU7o6PyNQWLtpoAv",
  "key9": "2vpUVoZByv2rGAKcxXZbxmzkNk21rqTNHm489HZNJ9QJXLFT6u3VWMbH1Ze8wAJWguTSoBdrhXNbZeGRgDTk5skr",
  "key10": "4FnqG6UkMMLxLfpdiwJN7fkVXRMWGPaGF9UbNdpL8PetCuC4gfXxkLhe3EVzRKNfNt847Gete9QPu7nm6d8vCZp2",
  "key11": "qUep5May3t2shpXvG5oGFh7yCYR3marWT2qdABvPpYMA4w9DoNNRK6iuDhJhYyJeUSm2JrnS5ncZg5zor9n7gPa",
  "key12": "48wziy1rSy1BT9tQQ7WhUmwgaH9epHoPQjvZtFYoqumkCoSAy5TWvtY5pQ1yHmsvAoBGtR9ottmWz3Kx1X4ofA8V",
  "key13": "2kHYRBrRwHTA31PUosXMaWYmEomCBTe2T6mBpMCJYLminBh4t6Q5eWVDDJHWuPcn6dq9TBSkh4e4rRjjegKZZpvR",
  "key14": "4QxquBcLGgdCYs7eZjfXXfZrQN5K9DwBg2s9csUgqHJej5kcmm2Bu2SD1M2k1YKrGX9HdXbQGfWibVkBmakyVNUU",
  "key15": "4WWkkAthZz3Qs4XJvj75F5wmFpPJmDJxmrJTMBy4T5ZPnRrVGj12V9CzbHADULposVoRoRaLukQP4HtB6Ls4utwS",
  "key16": "2dN2Y6hF5U54cTsLWo17ir927k46VmvLAtwRb9pmrWxm7nyjME69MVNn9fc6qYKN15XJ5UgWz2Sf8eDN7VYp9K7H",
  "key17": "4mqXbJ4SMfkSfnmHRwsANhWw5MDG7qaoLs7DCHrtkCAjQP2qNzmEaU3nBWN2pxxrxPA9TzCtyKPsWbJ2Fo2Jauhg",
  "key18": "4ufwxzsG5i81QdgRkxEgs3sgT8BbYvT6DtDDJmA57e2fELzMhumTCpFSBDn1Y1FBazAoxeftK3o7fy2JVBxaWK2n",
  "key19": "5EZLCgRudrnfGr1DAfpkMypot1BTxzV6HHJAQ1TDnBBNwzTpMkFtx7VGctes8uQNQ7YRL6xfn7RuPnD2cMv6J6SD",
  "key20": "5mCZQi16wnZzQzLbgnzw1BvNukczNVi7WxMrMSn8fL7dA5a9y8qsdvCG7NNin4wwSej6aQvfFTVBT71gRSYkEJMK",
  "key21": "3upPX3RuH7r51WavfYwizrhTkT7E3Mr6gqqYaaUCisz8PLNG5Dzrbca36xkyVtGupbQbWaNt59TN4Z8rUTinL1pQ",
  "key22": "2XC94AKE6CFuFEeJMVFfTsX3Mzzi9QwLKneTHxrmngyxo89uS7UFikyj1T9e757h4zTFzFjcCZsyg4s3Bcc3BVKX",
  "key23": "498KwZndv5p6yY3HpCN1camnvYtU43XZpTSikWn2t7BRG9GfNmVBWfqHApk7QRBwJMcyyLx3wWhSHDeRqpnpNjED",
  "key24": "2LXdqvaDw2eXsa1toFwmqiD7KZLpWsa3DwbWpxLuJYe5bs6TZPuDVmmiNwy4Z8zHCZvQRZn7MSs8ctzCt2YbmL7L",
  "key25": "5GxpxqvrJoTpPjQr8sqQrJq9M1KtGfrwEti2aKyCZf76vxDXwB62RvVPwisJb8Tne27PQxrz6MiRMxJaWPoXazLR",
  "key26": "4nVhvqqDAecPmJaWVgkhQegtCoTZg2N5h25JXDj2FiZbmEsum1wB5Tb5Z2X1eec8ZLR2CQiN2vZSPhQjyafM7Fr",
  "key27": "59WB5Jmnh6HZggeFpmF2LYFiRYXrDsrNHNiEcuoZd7Loz4eiVz4MyLXM5e4i7oKsEyCpEFXNCHEVvhk2PnNPDxrq",
  "key28": "sy6WdPcXF5ZTKDd26Fytkbt9kbTrp6e1uXXiBvb6Lx8m47452UJNzZe1GVmbRfWusCwg2eL8FP4ZKhPkLxv1k5k",
  "key29": "4iUuWV93yK5P9C7fRoe75CVNDvQMs9kSiucATt9JzL79NfxEPLzRGDP9GcmzQrKtJJRoggvp84h8e9d1p39AnE4",
  "key30": "2PXk88MzcSgDTavJP4ZgygTSqQLpqvKfdCQQSSZ74ivXaFFjxK6DuEofKMKDfLHBWKRKRvoMTWQCXygKTa62JMeA",
  "key31": "2qPprgQrp69AyUqzhZW8B2DXFpFpFVyJmx1R5BkuJW9gtytpw3QoNU9Pvn8LNBTPMi1i2BxcwzzQtcUBtXA3Hd6p",
  "key32": "2ny1NFsLZbNwRhajaNVJDkF8G6vt8zeTAmsJfJuC2WSj3KSV8NSWmU99spjkL8mmSeDLqL1wBjoyZauXtpqmRoYe",
  "key33": "xy6gPfb6H2JEkeWwJqY8xYaR63mZwdEyyJAWZhSHwP3kMeu748WtYii3nnELqrXfq1ZFzjVFJEyiYKtydGUcshT",
  "key34": "ivmJnX1iXMpSe3TTTvyWBcKy1ahi5zbUURE4hheLcguj1pKK5sDgbRMaMzM4gkiqydhs8KBgvhG4n6HEfp2Wtt5",
  "key35": "5iERmyg3qDrSCMp6MTudfLCUpndzun395SbHt63mayzNZGUDtrJDBztcVbLApBKvZVQ2zyH3Fe2ztKrJ9p6647qz"
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
