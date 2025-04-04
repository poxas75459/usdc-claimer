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
    "sGKDXxgAaDv7XYmvH7BGeV4zqoQNH1bm7cqVGWg6G5k5ABoisSru4Npk98YxJu8auDmvLGRpJ2qKTHyMt1ineay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZM8dA16GGZ2vktNGHFDPhJ7k9XUGnZCZfYi9WpR9TkjweYPwukZUH42jXYm7ZyhX9JgSNLs7aG2Q16QKh2hKk4",
  "key1": "5BFoBmBw5WSmfa6nVsrAP3nYiuwiGre8SgGD3RxuBVWFHrnsrHq114BRedb88fz7YWStevkq6fCzDiTefge3MDDX",
  "key2": "3M5BGX5gMX7EfwGDXUsfDdTqZtFbvS5FzA4Jd5GytaxArHSQtRmpdD4z9jczV8oukSsgWhpto7QuFJpY8XGxAuqf",
  "key3": "5i2pUQF4i5YAurZmurHpuKC7GRMaaXNAX8LB2YyYv81JfqaxWcKgSdqU9o88iNoSdyb6dYAYCSnjoyyN9jhpnqxN",
  "key4": "4MGFPxGcbvRRLBauxKzpKS5aM62cGQ2bFY48A83fkP3nG9PPWUxyeLRHNm7JdbKaxuCWS5gXMY9FiVRF6tdPWsYk",
  "key5": "cJYSVwhMRbgFo9WUbNzK7rYn5KuzfjNakQBgZC38yCiDuvYopsr5rhTFrnGxdc3JF2oPmM6TPCCmnDDJJjuNn85",
  "key6": "5KAdRZbk1wqnYL3dHQFgmS7JvyXTUH7uhkaQ49hjEkzocptLHQsjsrtZXDrW22ChXYLuXiduobSRnnwnqV23gfMm",
  "key7": "2MC2P1Wz46NQiXobTATWwjU25uzJrcLf4fH28buZN6LoXQPhK9uA4wBJyqi87dZ2ngCcuxXFxXpD6qi5EELQLqxE",
  "key8": "2aK76PUKKGBFHTqFEWngWY7pU726F4P9ySpyqJWdHU8MsUuYqmuu9JMUYfrVPmMSx57rf3zoa5CA7AHZfCvF1YTo",
  "key9": "3w9jwatbQFvKe32BGtWp3eoccYwbcitqjfkW6Bb5fBznEhqciLPkfJr67i2NcfRysazfJ74Aqt8gTzMmeuCq7WeJ",
  "key10": "4Gr38Nkr11vjLh6C5jzq4rPZEuU3zN8MGQtT4duofEVjWokkopif6m7pj47QmVFbLFpbXA1tKWcAxcVdgaZwRaTB",
  "key11": "4N9fiTTd5AkuESjzEdRbgsY5d8j3D4Zkmyk4mxoHS5wewZhb78oxZd1ia9XPbKMdDn1LbkP7GLUxoUgcSfX1PJhH",
  "key12": "5kJDNF4sUpPv2Mrx5dkHm6oy21KUr8pLUXXg2mutoxbzTjsh2bEjaxqknAGFmkn4UvkFGFp61CkgYPjviojcMYf3",
  "key13": "53amPbXVbysH6GxFLJD1tn7uhqHDEyQExPB3NpT1bDyWJEjytnHeRLei9FN1cxqRb7uCqcXDfXS5jPdYR23B6aSJ",
  "key14": "5i4qVt7ciE2Q4APgErhnqMM6FTmEFFAvSUtaDTi8LaZmzC5mjuGDC96WUWyw5iMdfDydQUWnBN31A7yysgEEgcfR",
  "key15": "2z7df5np2BmyTQwLtMDbRxybHfCXQbcCTB8UCQ4vDPNoE2V4Zd4XXz7nBn4UW3o8HxHmsfhXSows1mWFHWVVPau7",
  "key16": "33F71GHohHCfKaXxfoiXYew4KP2gJSDx4EuJv9YgwU8puebbgV9ZiXWPXN85tHeketZWMEKEfqe2fx9ESckAxvJb",
  "key17": "2NnXHnq1wGjpvqTQcRAvHwvzscszAPWWRrrUkyAX9RcuJZDqvQcU6tdgeRmfY4hKkhHSn8aWra45zbdMmU7FqaGa",
  "key18": "4vnnZ2mrDvpizYE1BNrhAtq4UqNuB9dcisS5dpgUUWAz61mGs6kzsJiw4JqMJ6Qdzsa9CieVRWuH2dA4Y69NR76Q",
  "key19": "dauCEssPbkkkTiNfqc7zg8eJieiBhCuZBuzp8DKK9HDgWgcQtPTRuDkyCisM2qVnJZYZHqwWBLisC8PNncPxeMA",
  "key20": "2hoZmi4kv3exUgBV81Qmdig6AL5a9QBhPooUaYzoyUtUD9MWDDsJhWMmfy5a76SysWPbSZ94nWszcpYbyaixwbcj",
  "key21": "4VX8BVpySK5HdKgjmqxKXa2DwDZLXPXTAvQDHC9AasWN6XK4DYDqUa2T3Zw5gjaYsdZ5cQMSjTxaWS2BU8sJPs3Q",
  "key22": "4EaTSEuqafyg18MjhfdXvjUyNHCz2tRe4EBr4j6ecrDo8TUqWRnTt39eR87x5ZA2HoaMvyJTb3aBGM6PRTgf9mKz",
  "key23": "4zFP7HGrxod9B6HeWYcoe5yP8xgFKDPmTCxK1XAiV2F11qMrscwcccvW3f4xs4SVkRTZxQTqCmff98HBRqQVbKrL",
  "key24": "5S3SpLYpPBVB3t9JtstLn9tWw4irucsAerbaUEesAuJHMeRAGyeTbrVspSMY5YzJPMahyEXaNUB9UCZvLwWX1Exh",
  "key25": "kvyhHowhvvApwVoPcMQdyw88RaUAo6MDbjWNtYmggaPaXRe7o9Qkykmp8yN5gieVbhb8DsEVuPCnsxkAUkMHwNX",
  "key26": "5UPJrMo5KBVL36isLmd2qfuW1BJkH2XYqRnWmUbqtPfynZD6k5YkKEpTqsyyuixH1TWRb7qFbG2xz8dYxywfRBFq",
  "key27": "3nZzQ1W195865FdrsuKo66WWo8pZQCUGYMC7kRuRnzbSZw2v3ENroHyeoXKU93qwh61VNDzGUUXFqzrjuLEbFQed",
  "key28": "5V92iwsre9Nnc2htiU4GKCa17ijgUK2PhB2NdepVzKJYkcAvcsWXeQESR2xBRYNCAZ8MTe2L129o9GpdEPvyu6ma",
  "key29": "4nnhHP6yTLg87x8ba6aotvudLjHFFqBKKmEzLJuVCz8wnAKnEgS4NPooDtedeEDwJjRdCh4b2fKy2FuGj1x4mCDb",
  "key30": "4jtF82XZkPaGcdFmQpy5zb4xy7TQJ2rfkMrn9sFjLF1TtHPibzuH6EDSCrS4wV6x1X5KfN5Ravv3qSuHmkxxx8CU",
  "key31": "3QSUSFhqxxqbnfQQQwf9pHGtK13ynAVNJYdtvTZ7jhwmkodgZmevVPEpEsY4NHhkRNzaaogKWqt39rzPDcrxwR2M",
  "key32": "3v83A7t24r1HMuc4jFU9kf3pHeUx4W7nFcnBikLsrKTpjWKuGMRJtn55HoEAciqfwjmwETWGyXN8L7P1FCdBUaWB",
  "key33": "5cRW3xekTuxT1mFM6Kc73F75gpMu4pZqM6swH3KMLSqWsS9uZ7huzYn53Q3d6ENWfpEXkKm3kuueejMEjGfB4RtP",
  "key34": "3AXnzMNNV4KwZtAUUV6xf1rjHQjLnq8r9sfbnKcpbHXyujPWZwFKeHJVenwyLut6jtQZyx8PBBWWkAmN812oEeCR",
  "key35": "2mAKGuA7js1qxt99ALgzFGd1QsSqDxxtjNmjrGqgxruJukMdkNTMBjaB6uyysYXBd8F1ESWfhoc2CSJ1dccyzLqr"
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
