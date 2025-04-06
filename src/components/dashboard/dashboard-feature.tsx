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
    "54z2dSXcG4AmLPGhXF9iZRX9yuHQY6kf9BMj8J2kXYe1pW5ZS2uCcvDwkPWmhG6t6378LuJxRbDs9e8UT3qMLdcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpumWULwNrmpeKEKUQgP5AHo7AsBAxs3UK7d5veusgm5ostDYgmtqdD6TqoKhy1nfgHKUw1gNpagsNM62qV5ES5",
  "key1": "5RtgCGJuqc9bt6i5LfANKy3qbkrdj3E75x1FCF1gmp1fm5fZxJbWnJX4wfScunCaxwC85aGF3FByPBrUMGG2aYfK",
  "key2": "5RqU6U5jPLNVWk99JDP4TG9vsXBxYxBgakSLtQXVfEdZdwoKa5XRgtCmMehNWU6bKQw1nupp68jGL1uJxjBXQHnV",
  "key3": "4nrgmE6zUPbKMLRmnc3VXqNQe6T4PxVrP65gM7uiYhTLg2CWuBA1bhguRKW28C86XameqR1pDisuQfD8kBdrKid4",
  "key4": "5CPqHVxDZeiBMU7Rfe41RLhiDeNLba8mYRHDeFnZ6oHvGFmgeZJQaFbgPF3WHXmbWa2DTAPtQC4gTA4sTXu5EqHj",
  "key5": "4mTMcXr9WXbd4mX88SiSFfMKym6m2g1vCW5UhuRD3fsBZPvhfy82YXYRRU8RAwpdqFsMASW6qwU7drp2fWnCVERQ",
  "key6": "3Vm7qbUcRBhFmz6vW6MVXiu3SJ7VeEZtatcFXRMZ3XFQVRLF5jqm36Zye4hscV8Auy7Dqzqk67Y92HgcpoESEnU3",
  "key7": "4zvCoUcbKn8kwxoomM8FWyqwmS7W62GkE9SwnPwMKwd8yTHDbwPyNhkGJoXcGYj3WsYUxnhCYoyCfG52zY8mFyBC",
  "key8": "5hn3GKH6PCjcSQcDPttuYTBZ544QobuXTu9PYykAm2oEr4U3FSMvze7v2pECL5sY6sJULrfL4fEyS25W8Hzjtd5k",
  "key9": "47wFh7XFnJUzEaVKoQphD7f9Th2uZdJa3ZeuPHUgsdNBrWgEWph87wXo5rc8Vr5BMBGD5MDvACG1SAvxDbLdYRnA",
  "key10": "bzSxzEA6uB8xt6CZhSDCFyJkqDo3CYYFoyYLMGj6gxjyQSDknzV2AxT5vEshebkcBmig8iQFuMYUnVFBZjV4xAV",
  "key11": "588urX346NfGypeHPvZCzt3wqeAmBMjSL4J77WX9Ens9gdeGDSnBNaoUbKehNzufwxPdaZBicVDbvQTkMKPiDvsD",
  "key12": "2XwEGtsh4aoU6WToqPzv9rvr3rtXHWov5uXGpt1ciZ3xbs9JvPSrpS7zGjAHwcesnUofBC4WT7GrNGM3pCN8ZQBp",
  "key13": "2u6VHXRG25JQTaykamRJCwewNj9cQZvE7wYEpiXw2timcvK1vQNQr3EVaX9tt4b1XDcYtLfBc3SNVcdox937o33C",
  "key14": "3NfnQJQqNxY353hnWd6XiFvKqAkB65xUkCBJkZ3UkvmR5DPUpBzbQAYJFfggai91Mb54B5BEapCsjGMtRJnKo548",
  "key15": "32gSqW6ZkKhm9MEv8YyAHJzn5tyNC2jaYpPkkdrfsPnjscnkFEFK3aSZSoBsQfd1Fh9MSDVUKEEMiEhMWGyac6kE",
  "key16": "4qRvk25AAVDt9A4Y3UCYEjFG6A1kTinXqfrGemRKidJX4CSJbPDKRzDgXXPMs6cs3wBF3RmCQN64uB76u6RsgMmJ",
  "key17": "59yDij6JYa8sG7S5etPcM3PQ6DeJUARgNgVxf4FT7TPKjVfyNVm1M97rTM8uhVJEvfV9r1jw8qvMwPChMxvgfcW5",
  "key18": "2pKiorKcGCTYXBZ1XNgKJW4184MqvJzaK3tZ5F1sTgkJ3SyGNX1Z7Ge8xQgFg9YPjFYRQeNGbVXKoftsU1Bf91wc",
  "key19": "3dkh6xMBxyNrj9FCWJdPtYH71szCSRhuaABfA1aci3nMGXRyBJ9yPsqu4LYhcLxQDGcqua6KDiNy3R8WSuyVd7S6",
  "key20": "3d2Hvyd5utYF1TCwa2qsVpkMmXZfqPbhmiq5SXum6EWNpM8RXj5icTmLAvBTsWzUh9nbJwotqgrpsMhzpMzFMTaR",
  "key21": "3EPR6AosqhfKYLxKAx93SCYB4QohKcQe4pqWrN3nv8k2bccLVSjTCvoC6icBWapPQN3B3j694E1s4Wa8EJU2xZsQ",
  "key22": "NTNVmyqCAcybYsgFVk9Y1iFjnUTheuDpHw5LG6CukkGdoc3MXk6shYU4zAKcxi1xjiCLAGe83c9Dw18V33rT9qd",
  "key23": "4WjMMaGTBt4p56i1LUWhJJEcjYo4q2uTXTzZb48cbvZAqHzYtKvmVrdAFTNrDtw572CmThzXtFgJiJ6cTXg1qghj",
  "key24": "2sdL9i5Kzu3FRUPJtyXTsJj4XFaTVaDF7dcxdcd6ztPFaFy1tGJDg68M59oCKJPNrg3hz2hNEsUhszHiNxaKoyCm",
  "key25": "4HrfLKqqFmntgYAgp3nY4JaZxXHRw9JWn6ReMnz9SkYPtxUdqyLQqP5ahZb1jKoAaP43cjT5cysbZdzcgGfe2WVa",
  "key26": "3WZy7xJJsmTvHLJvYB6s9a2WqC6Q3RvNVToU1q1P51Ewdf2e3utzLBHuJ5BCa3fojNSTmxrPW1ZENRtwv5nxfLAd",
  "key27": "2yT9hwbMTa6yPMcCGwprzRtF2742o1JJqBxBtbyiCF8h1qUFpnrkCDEkbYhDU8fqvLDNiftsGAqLiBkTVwGEcsF",
  "key28": "2Cz1rsyt9ox2aPYz6A9spiRv3oSKVveqxi3BXZbSZodXCzne7jPUe9WQ89wSYXxfHHNajvqKTPxqULDmT8bF5VMM",
  "key29": "2s9vopfM4Xna3Map9GcqRnstwsYobZiDenVzcsUrWVGxyKyEL9NgSLE1A5NuoCvz9XYCP5eVLdGr2E9Jr49aGihL",
  "key30": "3hDA85HYRKn3hbpBAsCUs2sV8Nqt7bEju5PLFQCRWkjPaRXP8gnnPCKnNFVDQpM7C7TAMd3Ta8h5hR7HLBFVxyRa",
  "key31": "351p3wn2hCuunwt7UUC6wRmaByf1GNvE2to4UtGdYbtgXr6D7hVLCaeuXYmiy4q3Jwth1vRe2rs7KRk67AFd7PjV",
  "key32": "5FFZH4S3cr1TxTmFox3W6mG5btpEFxo34ZFvZsW1sWaJoJCnxbhCa6QwHBi5X6c2vRZz7bgZ6qHYZuYrfdRjk3g8",
  "key33": "2qe9Pi5YbVFA34c7SHow6TBkqZD3PzDKFxXKoaX2vLkUPCD6Yu8GYLgkrPR59pixk4wGHdNzKwyXpZQmdyfBHveM",
  "key34": "3k87j9e4UAiJcUreuPtUgzWXBaZic4JeueJ7kdtYr5izXobkS4n9z67seX5pdqNtqAsMaAmPnrswwdCm8728JuKr",
  "key35": "3p84yLHb4vTbSB8B7jEy6GfqbaYFCVs2vLZajhqBqEtEW4eAm7PqHEAPVZG4A3ti6NWnGUSJVniCFXTh9K3FVcQK",
  "key36": "3kBZiwyyyoCZhbKJywywiaRdmmU9Qt1jYUgBB5DoWgcjWqin2dXrLkE63a5bbjy6rFvJnhEGokuC7gsTSNGbwoBX",
  "key37": "4w5CtczymwY4tsaZGNtox3724sGwTMki7ynb2zVRbTxKgEyEoXh3hnKBSt9m3LwSn6gJRer2hedgeZoFwqJcMnvD",
  "key38": "TmzFYVaKvtFgRHtUo4npACzXY3muJA4XbQLBAKnc4PWKEybQK2iyMPbdvoHesLBLdWBiCMNEpRVWum3H7UvutAo",
  "key39": "56bvpzqRSYr5MmyFwjHnRgtoiy9dju3zL4odHcdS7Z7LBMsNS4aqRW6f2165PPYnRNDan2LhEmfVp5TQGgwR1hwt"
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
