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
    "1QYRAFZKadcShuvMNcv3xoNuJgC8toB4fEYqvpT5zXeUibA1P3cJ2WvLqw2axJ7LWRby3N5iY3TFMXPeQ4zjMGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3G6vBerjQP63kFYvjypRJ3ze5Hh9Fv1ifkg7bkxP9Nwc5vGD3yrk5oeyAXwvxkDpc8q4XR5WK8zAmqPTEawPWt",
  "key1": "4obLkMPQ3dyWHUvSm8o7R8rNhXGuvTg4ob4AJspHmRn78uj4tBypUvjBcgYZBvqH8io3BaE3HwMeCD8L2dAzDdbR",
  "key2": "3qXAEmD1SaePVGbLYUAfPfiExQBwxvSjaZuQ6JQL9aHgapm1eYXPXHuprUv7AjKWijzAXe4noppCpsYJt1UZcZmx",
  "key3": "5LU2X8yXRWxdKCwe3G742fxwTYtdvq6cUL7k82wJUDFZZUYyxooLXAieFsoiNpRRjTWVcd1dWV1Bo2vRLWw45h3U",
  "key4": "4bp8EQchu2jH9dUyPQvrDtw6GXbVLsswMmDGrhy5qHbd2bngfsFK9yjjJUhSMqED6qq5iKNoxuGvcy9U98HTTDV3",
  "key5": "Amg4nHZaYxNvA88icuxQUjQkHpH5237XebutQmBo2y2XzP8cJzPgSZf3t2bAdLZ3eUwc9fwSePzTc53QFNEeDMR",
  "key6": "5zxMRVuPr34NDgQkJfk3Pa6yG1n2UAs6YCkZf8E8DNd64QydoAoUGozkek5FbvXkS4Ysz4t4k9BpFdLLJ4pQ8E7o",
  "key7": "2Tu3cRzUHakbViCHkDzic4C3f4zxMqRc7dFFSMcMiyvVLZHmTnoe4CEmrWVPBnxFHGHmzYf4LpnmMySnCXiM5g5X",
  "key8": "5tCMdanuosiWJXYcrgCjg1D2HCatCob6esc1y6kZFBLfsTQEcEJCo3YpaQJEbqrSer6Eq1YnjMhC7N6CVnwUsnAh",
  "key9": "64jjJ1PS7Uonkn8a3W2XqddgP9Dhqo3dsFetib8qrBZtF82QNGVPbYr88kjss3C4kepBezXfwLwYxvDh4b8ty24",
  "key10": "5Jt4bAtzhAfrPY5nT7hfUYmBJpaVpS9ojs9418vmhDuJ7bZbZmbWrwvkwmNujBF2cHhhsBEWtbxdvgSN11oG8M4K",
  "key11": "3Xs4AkpaGRKUp4BY1hzC5RfECNnNKGJEDbAopMUHd69DjMFbt8a1efXCp8jN49dEsJsCgWohSpavcXXk3Dn611Ef",
  "key12": "aT51AmTW15X4dsbDHqkGizQbGnwK67qzjprjWbMoCXrZDKsa83hFKNxbffVVXKGqzbG5mUke5gHWNUKsTghxvpz",
  "key13": "3RB62DY1ksFzDp44iruXtsMVJd9VMCF4AVDTK7XcPFQo5Af7byLRT8mYGA5exKhEaQb39iS8WSEgGhhg3FZxEnJC",
  "key14": "5BGx4Ty4Z6rdQY5ZVuaTkKGBX2WSJRfPM2x7zPxSNvTvrzQya5h7G9f6TXxhp9xzfvLrndYPe8SkL6sAYeftUqqD",
  "key15": "3aj9wNZyMDHRLfMboyewQjWupAToUU4eyTazDwXroungwjNhdpzbEX5aJqUB7NrCM9FUsaqCFbHMFVjNbFs1n8mu",
  "key16": "by1sKTpY6NqeBfhL9TwG39dhtPuphGxnr1LepnfaTQiGC5cjiiJeScFAm3yyesfZqC92vJCAzVeCnh1BAfgejDf",
  "key17": "5nNsQmrf6aedv3jXrmr81ujDPgFJqEAkbS1JkZaFuWNFEFkdYqjgXM44ZyCvcStVG691QFFZY8M5tYSx2M821j1",
  "key18": "5u6f9AWPSXSjhU8UGd9XsWu3Tb4L7CacfU4bWTYdcjyHo4nWD39ayVYACirQekJAoK4ukKt5ruzuuTsTz28rPCML",
  "key19": "324SXiBTsbu1Fve8PNynKKsHJDU4Z6tVPCVJbkzsbdgqPBSLroLGTq3sYwujBjLWZavovg32jSjxFsAcuLLY2fmB",
  "key20": "fYyvdXD4DwRQp5Vfpm6PCK3YHZsKWeHs7Tbd62MDouSTzhAmXaPdNyc2d1jj9mAc6xmspz9ZPYKyrPefASokLBj",
  "key21": "2mZEXq1m6QhFwGQLa4QR1NCmz4tH4q7DzmGYniWs25XspcVFWitzvTPjbbCeL39pdinjyng8VX4XeELY2RZtUEMR",
  "key22": "4sptLfWBRKsqVv2f5FGx293VVkKcEejKTaUmvpehR3aXymLbDXK1i2FQcYe8keuQaRYEbW2a1ueTAfTMNeaKwwWQ",
  "key23": "RnsvVJFDBmfmitBWtGVEhb8WaiKmiA4Vj8tn6NewKs59z8pomi5cvsS9rss9ooGwmp5iZTEQAjwVYVPY9MCmcWp",
  "key24": "3tz7v3L63rMQpTsT1zNJ6wJNKzXHz1C2NHQwKsAkgdDcyjhB6T5Ns4kSqZUhrMK6bE4pT5mTeb9RefZimUTz1ost",
  "key25": "o8wf4TDjRPQCy9JYVaJW49xkHwBiqjY83ft3M6YmQpnfJcoeJjNFyheubD2KKEVYRZFrU9whnLfpHvijLY3PZ8F",
  "key26": "2Jk2PS1nExaLH1ykMdGgUVmbUkb4qZJj6yWpWiEFVujmVK2Ckcm41vsBKhXYC3mn3RKx9emMYHkZea7qtqhqsw6J",
  "key27": "koUMk7LsSWqyXjoxdYnGX7U9DBETT3m2frKJs5a6UJcmzgCstqgSEpNHuiZC8JgB1VQuy1WzTSSoiSnfUmTMLq3",
  "key28": "2j5C6mvbkpzHPfLR5qBy1Jz6YcBahMHCV7Xf2T37nPRU5rtsPnW2d4zAYN9gLjuzYPtsvUNVmGbF7utQfrvHjizJ",
  "key29": "oN9VWiLM1vwBdTijMuPZcoKcyRhbUivfxJtrEhEbQLFtjhWg7K4H6eLPcdps7ENsyYuQDiTjpcqHtBK7PoYSPHx",
  "key30": "3TUFaGd5N6gCGhkPf5hhou4bYkEhhVtLCbEGimSFGyurJRCWue4LZih42sCUc8J8UD8RP3bWF68h8xVMPmDSAvFY",
  "key31": "37Gxxp7rY5TyUWQBbwuU8c3BhkDYwdVQrGza8aJ2xEdAu4fvgt8FspzryH3B9dutMvMKxLsfMzivNyHF1Sqetcgt"
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
