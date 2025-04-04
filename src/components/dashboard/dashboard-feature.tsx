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
    "umwDJQvKh8ScWu6yBfiyf3YUXJyHVepom9FugiiegJpodMr8R5P8akEcGPjiMFL5dHC7TmXBexe449w5jVqnfCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3rq6KcE3KuNfN3XeqkbjUuTwvyRxnvzrcyPFBreTayNmAHKjFWmFb5uSoGJuYjJqUaucZLh1dw2CdHzqcTzZbs",
  "key1": "xCBK6QFo7BqqUBvziY3RJCqwFSYpJTLmhqzTFAUBDTAmNqBH7feps7g5PrLwxtc4aBjUeBUCpVSHTCnSq1gktic",
  "key2": "yrDyMbeu1pMBst3D8onyZssepmFT5g9xHNpygWNj3acvZQDMVfbZYvQL9LsXA9sfiBSeh7pWHske7ePXVNaQ1fF",
  "key3": "4TMV9Sg9yj9wrKmvHoXQWBS1MLWi5JTt6GJCtt2ws5WCUpbeNcT24MNoJJbGNmZQpowbvmd7FBDLTsaC2dW45V4h",
  "key4": "2DEPTyt1oUimeRrZm2gA57cnzounYkUuj2s691y8AwNie4jg5zmXnycywaToF2YYrMpZb3gvUfT9uVJsgJnGMYaY",
  "key5": "3DQPkf2kf2JNSq7Y1pZnuYwx3SadkSzoPSrKJbycviNPpKhk9ogVd4TPqu1Da3JHRFU6afmc8GJY3DjWPGpJMtDz",
  "key6": "5nA3pXmADUcfjkg8cEABeaN9GUagDgvQxTZVgN7Q1jfuigLQKHkciScb6zQvGies5pMua8t6PRS2FtoSCLmrjc92",
  "key7": "57zh3tudeUug9gwww6zXj7se4VPsQPnC9KJ47vVrtq4Jj4nuGGoYcW9KvHr9EEXivq7Bj68uNoCgAbqdjNfiKsvB",
  "key8": "gmsRRrJbAFnoYYTB4HtwwXx6G8ULkRnxPPgVv5QUnqAEYDq2kGGpiKNpmHHtK2mf1uESNFwGJAZJ25KXZp4wsBN",
  "key9": "jypyTgtcdMMxhzEjvwF8BHsC1V9TQTrVdkJyxvZyK7XWji9CNnKVNzbHXKFEzzXypTEoRd7j3oNztmSe1VLG2DF",
  "key10": "33WNEXbH4znqCe11bHSCDiaHwdXzecF7VA3PNjDCbXJFSWrLsjwZ9knU9Ww2ztr2Qdjihu3vSkDQZYSp76QCGZC6",
  "key11": "36FYJ87ie54V6RfYbY995vgP1MNThA4BfTTSpKs3mwDoQ85sddW1UemMNi6WiTGfjuM9g7eHN6GUoVtKfNegifE1",
  "key12": "4YUX2zLLNhN7491dsaXgccszokdusdxb72mpZgpmQT1udATP6RzP88yQqSJws3YAem9FiehFJgj2VHDZbCwfsz1S",
  "key13": "45Q8iG2n81BocA6Tu1dNiBE3Lj2sdJg5y5P2GFfzcKQuy6YpR8npvJwdFyZpoiyyEcJ4rugneULX88GqMwbNYPEX",
  "key14": "5FBxaDJNfs4UZMXE5X1ftSupHv13VcMzKrD6MJXRcArxD8cwWEUq6N1RQU7RxtKerhSxpjhSZSV9pNmnTgcFMpko",
  "key15": "LFuV425Gj99BFfP6vjLUN1emvheGQwQShMPzXj1puAq3MzxFYz63dBsurTLHDfKLt8V5ZQpketEpHt47SYWmTnm",
  "key16": "4K2caX3spkrcEc5fDALcjHNT88muGd3id68qYkQwZt6MJ3LqxeQ3PvP7gPMkHPY9YJnbFB4fcvxQCa5JU8E8gi49",
  "key17": "oRfqob1xvzj3vtSdT1MQum6SLgfQ3H41c71q5jk6CgEawyMvbCycD7U3EMGzvhyjhox7kFx4Lqm7sY8qqr2UEjf",
  "key18": "47YWsdtmDveP9YYa94pM4HWc2f4gctySyFm3eBUBRz9DFunchiZamC6pMEQUkCBwy1oTqf5a8bsL6s7LtCgt3FWs",
  "key19": "2bR7bLCSKYegdQpiptf2N5RKXPyaHGzvEzmbHiCjD316es2NgnvR1Ku244cNX5GL63QWL4Ubj4DT6SMvgeVj2s2j",
  "key20": "2Wcj8Y4oapVgz8huegw89BQXwsgg3PCHTWRws5ip8hJJ5Asjb78WpQpzeT1ZcjMes8yVrtDKdd6iiidY9n1MRnQv",
  "key21": "4tGKoSvztHEkYKKNuyEVT4cFTWFzpY7RxHftSa7fNhRL39E6mQWPTh2hEDNemgFke4SKW2ZE3gFZAjaxDPPgo5kC",
  "key22": "CvcJyVGpnTSGhSBQWKrYiFXDdfjA5a5XizsaGqT2AJeyN6KDcDdxSfxqFUDLunRE9i144qdVVu47wW1f53BrFqV",
  "key23": "24cqxv7JaEe1L78PtWwi6hRLnNX6JD7AkXczrPbACvH2YjXpi4yve2asb7hp3FVZZhbAmCMFfWHqhbqAgmM3j969",
  "key24": "23MYFTsejfgLBJ43hTJoeVNVofgTdCWCKznje7cdZVbpbRcRkrnfx9XcYn9DPDHp5WVoKDMpS8xay6pxYLGaKDEn",
  "key25": "4cqwaFZENngCR6zo9dBmziqmM5AuV7aBxGNYtsnTzmcnevjyKDzuVspda1UcCLFJTeTrD4rt9HosCKrgXaEEsMDE",
  "key26": "64EiBGe3n5Jv9wLsVKrvnkrX5ZTPunorV5dRJJKEuNrYvLGtKtrFknxN9cmppnKwxsMqcfAT2rH7Yp5QXmnXcNHN",
  "key27": "4e5vuq6CvF4LnGUmhp6fiEA432jX8FUvmijMiWTB1QCrQRjXyxrv2R9VhjtPgRENEn3EXPFsrS1VWAukKmsvsahE",
  "key28": "3skWf3ie1E4aXBmFNcDJ5pgRzuvv5kNuUDz4hfrk1U362uGqQN8HgFH74eY8dAYSW5Q3rXqnYmmExqeB8kz8GW6F",
  "key29": "cTkC6N58ry3XXUL5tWdpAp65XZeVxJfhRoxWJU8QafgpZZvH5n91m6jTKwBGNn6qqBP5JuyW9iAGHB7X4j728iL",
  "key30": "2BoEbpawTCVjmNa2qgNQtqsgzpX1PsZv4zH4XJKqe6yE9evCfh9cYjhd8D46s3Ruz2hkXH8mKx6qPWAWHPT2KVW5",
  "key31": "tZ77Pf8VFAkdrDCWmcLT9RYL7CzkxzJKCVe1wxshyuHAhxSDbpqVTxk3HiwQ5G93SR5Cdjo7kHYSTWFK6negQCG",
  "key32": "2eSVMTWndRwncBijzzFhNMRLxPvJ3Pe68AU4814LFQxu1dUmFP7NwH8Mr8Kg1b9oyveqBae6HGMjJSjvH3pfxkQi",
  "key33": "NgaE6ucTZs7BteN8T5DpLF24Nmte2uf7wFD11b38xpM8N774mVTtWxdr5Dz3MuPTCie8nWFr9GZvjnXyS98fhby",
  "key34": "5T2icvGcLzewfyRAxHKkg23PdjStVHYEM5mhZXt1p6we1fmkh9n4vTKu5SSbFXpQ1DxT3pTnP9Dc2DQEZNwXDqEM"
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
