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
    "5bPJvqFEtH9DUSe8k3aEmyEHeg1JmbSmp3ezJckFahcWDNBqEDSCGA3BYgap3dMndhAQTT9EEivPeiEU32Mb6FSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ji1pTizYueErGEn8qzgMaibVfsE6WXbaGTyVHJT3vnwcd4GsEBH44BpAH8RE3VPGpaqBBiskCEZMj2ZT653Lvkf",
  "key1": "bnziXCun2rxKEgTLBWGSLGqxYfAekKEnksi6H8VhmVBNGTZiF4SCAdCjBHeGq69AVcoJ1pZgV8PvKpHjDJ15Wve",
  "key2": "5gXjegMGWkuabp5GaGGL9Kyy5PjXJyV5nMRQbfRTaRuFFu2jbdoWnazHB9kApcQSZXdzhypZ8N3vjrjEEbMGEwHb",
  "key3": "64e8vsiiptxEgi3TDnPWwGtTHqzeXBd9PK9Cb8sLeRNMeQVNNVfAH2i1c95yU3EQWoSNoLRJQBEdLdrPXojebw7z",
  "key4": "31uDMwjKxE81aQFZMWf9UaRDBxWPCok4LddANWihCLdNGSHp8WtDZxPuR7M62ThuYHrCZPCTcFYKAmamA6k9T7C6",
  "key5": "42xhPBk37nJXoPYyD9CtU62yQ874EBG9n89qEhdCKnM3PQCjBb1pqLFB821ErGp51SAPUYj7evNKgWXtPEZXBtg5",
  "key6": "3b8Q89uBZxS7mWEFLWvsfjVz2kxGL8rQRS6PNpQkoDP7bSEguPuxcL4mAR5A3CZVB7MJdj13uruYK1ZhkzYWXKSp",
  "key7": "4uNoK6aEj8W15SXfiVfTuByoFPxAyCkjCGfvGYqGA9HVVUzYShAqARYEAb4GhGU73LQ3wUUZ94Z6TbRk9moeBRC6",
  "key8": "25owCLwzvua5eDzW3F5Xmyf3i46wwTV9MENHB1fk4HWD6xtZvXXC8P5P3dpxgejt4pofNziBkC8nf1PFXpkYGmiy",
  "key9": "WRUT42FEiTv9AkG5k8xCoiM6616AxPsTaDQseGhEpCiDCQN8pgRUjqQ3LcF5SxiW78r4UQDF2ymTMazFGFFxw28",
  "key10": "3ULQ5YQHaPTui6QZ9e8ENd4yjsK5a7xgX6EY2o2SDjpHv7kmRb5hFKJmytVTSsa5kRYhZzyJodgZKgZ6dfqFSRiv",
  "key11": "H91zk9U94roEUADfq4ZZPcHwVJKbqdGXSupwN3y3yLeRSMiGHpheuQkJsGYtV8ELbXjv82tFPbwJ3qRJApH9dEE",
  "key12": "22KTZWYx7RdfGGUbtE3JCcFCvzBAQLeD32s8NPqwNgjiK1y86YPaqmSMvHd3HtE7J4WUjRpFVzDsgEj3JCgJwXk1",
  "key13": "5r3Rdo2ucWob8ZSpvD5RAUu7JHuf4zM2pzy5bmYocyVgR4J7QyNEDFL62K3yrF38iGzCkaLHwXeFCAcDACWgPoa5",
  "key14": "26xLV9fqY2X4QYbGk65Qz4RLcbrjNm8aiGmjUH6obyiLNR5w47EMknu3raQHPA1biixDBNqZR86yx8LRvmsy8Lpd",
  "key15": "3Koko4HeqkapWqKUeqxiJLB4DfaeBZuB2xU7BsJHtUnykZ7Nuv26a4Yw69G9ZY8w9abxBXproWowZgPfjg17U9aF",
  "key16": "3YH2rPB6PTqgQ4s2p2Mkmi4kNcmLzvyzgTTvi8pQHdZ8GyXBGEEMnjFNmZDprb1jz7ZHueRJ724Uh1nrLFhzubov",
  "key17": "3aTuJdceqhaz1pnPPJfg4bHAcRaD8RQPeQmMqkHetBqWyynANz6Y1KLWvMDkorjc1k5ZiMPRZpX2HXjzQRx4nCVR",
  "key18": "56dykTT2NT8Ur7qApK3v1vLXZoSXgn45DD3U3iu4fvpWr6sKJYTyeLZMwSEhgZ3boU6nsWkAR9vVSSzjkfi5KvZ1",
  "key19": "rpto5Lfdz4NtBHZzJzLUVwijo9Qwmixzozg7QTACoqsaf6NZbKbmkZ3wWDd5heLPnwTqbrebUS1Ua3Vf17kprBv",
  "key20": "2Rqt2W7y7JMA681GfGjxm8wpj1WqA5CaexadQCHzhFhQTMjeDF8PzVzJ1ZTFV5oXBhoZQxcS3TM7fV93Bk2Ux9a4",
  "key21": "4rwPN1TTLtXEqucdDVN1r6xPGLUk4vN1Yf9CKNvr7jP5ZtZ9eJSPe1ZXUsSMqF2Y4amLRFhzxhLugcDBn5pC8zkF",
  "key22": "4Uwp5U99eug3vJqbHhVpNSvHFAokJCdDykp9fVDhwpLCp5RrBefT51ocs9EMESrTvQPeofJSTjS929VqFjRkAF2y",
  "key23": "2GWLvFjgiGxMdN4NTw8jHsuzQn59N8r9WQTEb9bkN1AZy91Shi53Km4tww8wwRMQ2bQsmNbcaHC56uEVAshHgV8j",
  "key24": "64rcR4yy1wY3yYNpV3gQK7QCU5BySm47YvvQAmAmJp75DdW29nF33VAPZ3nvM8DQhNqJarHS8YU3TLjstitxT5xF",
  "key25": "5bQdMNFUpu9iz9aYjyStqDgEEobzHPpb2YhAbb4j1evKJQY7iGC1NZ1NwPqbXhRjNJkDaB5ZLKVYQpPkXJeYsdoj",
  "key26": "2atjjzZJatcNV5TGpdqVJ4f4dZTAeTKwg58DyWVkTt6KpKU9Md8hL6r9LrmPUmaX4V2JNQ8deXqAyLMhKBxAk5vW",
  "key27": "ntAtjs1GF414uL8WqREvTfPgTb4X2Cxzw8VpjVY8yVwZKb4gY1iqacwTrYsm5GHgPidwEtLCBvfncb3citZfuLF",
  "key28": "4WvqfW2Z5Ess9p9CRVZRsaLM1K5GkT7Yi17gVgYWM4TF6sVhzdQEHBySTDZYGEQz1ied4fUUy95cSbwRG4V4okGk",
  "key29": "565DRSogR5eQpMHR1gTzJC3Jg5DccLpeXy46ErcpJmoV18z9Njs5ZAtvPuvjTRtX5JTNbjKTbnMnmdEEFeHdFpps",
  "key30": "3d1TqUUAa2LvobP3FjARe35U318iYyTWYmTJpT8AUheqbLFvoaXbbBYPxmKByE3Wo5c3H98AAMU6EHXeGwC4VbNL"
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
