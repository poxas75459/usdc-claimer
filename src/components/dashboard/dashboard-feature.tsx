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
    "2aK3CT8uHYzDvY5dvd6NftwfBk87TAkHVAHDoe3dQCca9AmaGeN56mF1iNk5kQiwbafusAB6MYvxa6uwLoVT7NZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yarF3EMiXmkKChuCNVyYmnkBrpY8n3W9puRByDCtVud5smMcz8C5g43Qz29DVPdEy2UfowZ2h7HPd13M8LzNZFT",
  "key1": "2DgevaYDgkHBLJvhKAd9YKTbGbnpwpynAnBVVGq5eESBi25E8nEDncJZTxwYcBYm4oefKcj1fHHzvSHCapkxzxmT",
  "key2": "3Nmqj25xFjg7q5EvRnghv9XVEKkX7xBuwrfmsdyqyHvk6XPtxHhKNJBqgjHRCbou7DVyrpe8UqHHzVby5WAr3Svu",
  "key3": "4YPVVnW4gqpc4BFE6RsspSbmiexr8Loypt1Xbua2S5P6HJBobVnq55McK4TsGYUsxCnbVgJcsLDRiZWKurecm98G",
  "key4": "2GBKn25qbPtqSMSjsCy4wHHW1LbfpxjC8B8nV4wryo9PNGub57esFPhfga4YikUiaCPhdowtj4UVQ8rpgLpThc8w",
  "key5": "4cHyPVMm6bhUPLL8CVjqoDwc44VioqPbfdJkfkrVdQtcd4FNazY2KAscvQobVPhqGvSZ5NekZdWwzqvcaMeJQ1yx",
  "key6": "3XPzqYXbFEyNb8pPknShSkWj6nagstxG1VBd6zBCUBwitZMHirRRHFuYzbvK5KVgfc51oHT7TRcLtp9cfwjnn25U",
  "key7": "4heRQdvG8qXnNmQ7eY5aFL2dfHksj1KMMW2gSF7p9y3andymyi7xWaHxiQcACcnHLocYhCq6fk9dTLSMTBe1mngt",
  "key8": "2wymUAS4oZumF3UD4TuUxHcMpTcczWs18atS3XeyAhBAUkQojJkR7MKR9UGeF1fjKU5KuAsdkuepbr5AtDSbmQrw",
  "key9": "4yBwT23LAMfi8JZnp8NCNiNaeSPMenFGsrMNLxmBuB9VwF6BT1qzn7aTu1Frw4WW2NaEXWcn4pvJJJmMY3F42Jcz",
  "key10": "496mXJkUxFiMEKsvn32F1WB9SaqB7DaQptgNtPfaUKw4jNQUvj1LtGKy5LJh7asBK5z8MGS8r51brAJJTs7q4E6T",
  "key11": "THwbY8MWyhecqQmHaY52Tp2egMCWAKReoaZBpV73xVMw5KUh4Z2EV2cxBLfv7AX1cEGj4CHKLy9NgxCUhzDNTpD",
  "key12": "37gTCkHjg2CtZVYqrMDRfYJ6rzLY9PCyy6kGqpbW5JJcKj4kKdgUzjpd5fR5doi9utEKhBKRhj7fwGb6b5ECPnUQ",
  "key13": "47ihFbKQPjigyZQGtsZT1FLnifTKYpQTLk2WCNf2gcRCeyGG9eCv3EA8AVmjJDuSzRu8vRNpKJPjX2FYChENC5oh",
  "key14": "AC1UWKUUPYUuiD2gT2UZahvGP3CgzfMWRfqk11YQf9T1LjWjaACSoQef73FxBtdTUirc81vNxhYkE31HLJqukPD",
  "key15": "5UzEDnZcPb6GeW2yehUtKXRDyxvTDoRka7KkqyWknEw3pcuGiQPUTeYZZrsSK9qSbgkLckgrNF7d5BUwpvAKEoQ",
  "key16": "3TLGT5LpW12ggGNdDy9tcs8w9g3m5gPnPvLM7eRVJRHC3qyTRiLLy5ST1UaTRyuEtAY3uvRLPb4vMoRaTfWYoACf",
  "key17": "5wceuPMtKRUThepT6EWV8KwT9np8R7M8ZCmiHitWAjbJmXZY6Yu66NAzdeydNY4c3HiGpADrjBGykTGrJYKdb1Qa",
  "key18": "46ng6oCZB2cuNbR8tcTz9bY6Ko5LCKnbq9Z8nBpmSxsDkRiwGGCZ8Xf6WJ7Rdn1EV7zsA3dpnp9YqNNn9KzH6ePm",
  "key19": "41bBe2tS8SwtdgjLkhkWRXTHdSerjcUYUwwQD5BhyppGXRSKFNtdxpnJd7n1snq7aSBUERb5KF3hnptBS1Ufh4is",
  "key20": "1djS8V1abRri8vo7WxXeEKgQfpGMxqKZsF1jDJ14fB4rdFSQnPxUMpp5GHu9Ad7h8ASvTUXZo8kDW26EJ73uvJB",
  "key21": "4LK6Sishkzo9jXfBbv9hxf1ekjqb1yyzUNBkV1Xra2roHUezsJFPtUisSaiSvV9qMW9Ra4KdSEZDEXS2VLtXZUZD",
  "key22": "4FWdojVNbA9dATWmoDwGgJMfn8eyz8H8QHg2d1MqSBYgJQTyxc232uJo2GVFQuvaCaLogw8FsPxyivk1wimj1R5D",
  "key23": "4LFApskq6ig6kzfwdt5TAh1XEHDm5BFAuRfsp1s9TNu2JjjBV4FB3Wi41Eh2x8U4bFvijnwcKnwEid8nBCvgyBdy",
  "key24": "1ZoiAzRkwm8qekWdMybf9ysQ4e8Hd3FbVEWXdejopD5c5Z7h6KhfJtW7VmKTpbQxMUbpfQRoYrpEGHhbN7fa8zu",
  "key25": "JRrhbSLfmmaDxTVZaromjx3sPiJgvPYy1q9gYW6xtosYuUUwCGZfeCuFtsTPiQDCpwf51m9SJSkU41rwcn2EdN4",
  "key26": "5FYNjgp9xKyEfTzrEacxPchrsVPvLhE2CAiDf2q9fgJrfJZoxEUipo1tjwbFGLJbDkyCeo6gq8VjFNHgqBaEGctH",
  "key27": "2AaYy8pWaQ5F8RiuS8DTSbrYABTtyVRZJUGUSWhyjnorXTXM61Vina8PzNUR9tbwiPB33LLu6Ejj878ev72nidds",
  "key28": "4AF4nkznd1spQMVULQS8p2aB1hMxEK4hRKuAykzKwRb99zshHdWUmnrqby2gredjSc3j1GUu87q7ekqaYCWB9GDD",
  "key29": "5S1EqUjVfYMf8NZbskqWc1FjYcFvRDekKr8KezNWPGJqe6Syq4PXRWNQ4G9qVDGwGXoKEq1dVkGLMv7tAaC7Lo63",
  "key30": "3mGoZEL8au562hgqoDQV9CJA7yUKJC8CrmbTpB9eEyR41ppRhWQY3TmsrXdusDqMimRZzbN48wNDRZ8QUrhXiLXr",
  "key31": "4TaFkXSZykAKLSLvMZEDnKMo8eZ6kL9NkeFQBmzgpSPS1eKg5TeLZ7xZ8Y2B2cwhQtVwXKm9pe2bzHdHS6UUZTPp",
  "key32": "24ozHQz1BorHyF3guZtvTxYz7YrXyTcXVkirgLm5FtQAZQ1NRRZEjDpcmPknqTHLkzJwzVsh8odutYXCUNVypK61",
  "key33": "4Exn23AV4cYzqCeeKfbBoHrTC1REshU7zBgta6fG8NLFezYCbLC7Hq1idrPZ6DTdv49bWHiynTusiZvAC97Uih6v",
  "key34": "4CJfsQtXdM6Bs5if1NTzL6AejQgipsk3TwTwdpfuyn3ywHorNcgxqwVHyvSar3ABvfy3cmuVibwagkgxxrrw3th5",
  "key35": "x2iay4t49L9w8xEHYQRHGzTEft8MueaPAKJv9XDiSZNqX8ng82wZSP3sU2smM9rp8dz9Jwcx5wMAb9CDLfw2HbL",
  "key36": "5RgHWUMgQY2XK2Kt3RETykgUeosbLBmW3MTmFP2B6Gj6p8SSuzSEAFjNER6FH73XFQ7He2Q5FfhdC5eiMmM3kBtg",
  "key37": "35Y3H6AZE6iqQJC8jtMkJTJczBLPoestv4dzua8xZdBEq8MTGq9ZSVFJP4daohqpm14anxGPtuy1LYFyTkiKr3m8"
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
