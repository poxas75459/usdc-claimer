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
    "3Cz2kxnqS7ks7ovSwiwCh7ZfhCsqsZcHdFbTWCPgoXRb5S7x8jXbdnr5beLaAacF9qZmmLv8USCTxEXZwZpWNMwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gP1t4PyZhyQp8v9LoSTXg5JS1jeyxV7asCTeXYQHkV7vG5fGMGmjrS7H888biNCqao1sBHRXngC2j5iM38oaRdd",
  "key1": "67YCTVBonvAnhwCaPounVeovXMkUzh2QqVhgds31fnbqcW1YWVUct6EnK8cZXLc9mqyaq8rcz57T7mG1FghT6PAJ",
  "key2": "3Le2WiWDkC3y4vVttXRPdoo16VvXmEKtmX3isEjAUzQRRD5gMPS3LfbLaab5TAK8kLeHk7U7HjjphozrtnP8XfnZ",
  "key3": "4QEY8m2MYC4NF3vqtVsLzYqe4cT72n5DnnBQjcNsaaXjaZk3YKANMCHs6DNYnEJhYUWBywzXQJ64gfjbKW1iw2Xp",
  "key4": "2EHvccUKmqzmftVwPT6TCYFTTHYSLAYvE2QwMF5Yjj2drNzuqNXz1y2Wq2yabrau5i1nxmNhZdRTUD246BAyYe6X",
  "key5": "3W3Zp1BDVuLS4kSaRQGkvqjXBSteZMyGy9JsmF1pn2AR3Ludayceqw5Jgbf11jgn34YBExkf627s34qHFncg51RU",
  "key6": "aTRQgnW4C19zxidir3y6sDtGtCSAxgfbrVbr4ThEZotE5yHsGJSi3F7MgTh7gWdxTaEpqtHq7ithFAPrn5biLb8",
  "key7": "2c8P3RtYT99s3nJpJ1E5Mp2WE9YGNLhVUNoPBZFBsxgkhqd7bGCrqshq5Hbb9Zupy1JseC6hrqaamDy2ZpLgtJtR",
  "key8": "2oGefwmZeyBHMa6BTbg5nhBdRqXrVDbsgSLBfYUueTaLjrr6c1MYAxVChF8EQ8HrG5AoayjxXHn9iv5XyfGGkAPv",
  "key9": "128kbXkxzLNnrRfLQrqXEVRGcYHkthkhVfwWLux3L7YPuZkYTvHHLpuF1ThEYFutdFiyNG9nmwy7T8M9F4jXsMhs",
  "key10": "EQ11nZW5SH1jKGQuaYtCb8y73CputKPQBt5LUSJGeDB9kf9uiR5GVo1bAAqsgc3pEm118kWbcXePXVMhXuEqu9J",
  "key11": "32m1toDf4Qdb4v6uuxGNAUE5jeVko26ZGDsrGnRdCDhoTw3RWSUFrXkgYai5sqm9bNG7TDQrTs5QqqYgpnhXLvsX",
  "key12": "42hM2gdFRyxEryVNTb6aNjU3fLwvLUvZbW8ji5DLRdanPKCNNX711kmkr8C9ecHtVFuRaHhsNW3TMX8UUweyMeov",
  "key13": "2FM4aMZXBdJ51VAq8v9hVZZuCjA4Rin8rtuH1GKWaW6fXKEhZc9hhE9kzTmzLc63pEpL24gbvCBcFoGEsBBE5rvG",
  "key14": "5cNjezvCAAXoTAQgWX1mQQDhC3hRtvdLPToexAxFimpPsPTbWNMBRKV6z3ExTYZjwrmtQX3zZjdiCGoWmtWVBP3n",
  "key15": "3wt2NAefN155aPnDVMbwVahB8zp3EtPrrK7PGNiT5hnj63X1H1PHDqwh1Sut5QJE3zeZFPnPRfQsnDik7afUKxXX",
  "key16": "3MTAQaWujGuVutg2PAKpXvuYeTLWJ1h8GWYVFaZGUxJ4Sw2Vn79z6b5vsnstzkkYnvMVD4rLGZVLg4sG15SGeu4F",
  "key17": "3ACCUUfpzyzbieMqNHfVHghckhLnBqVvnG3viT1w1o9mtQvbeCmhihQhaU8WtZGPYzZC1Pj3cf9bCH47UYFsLvHP",
  "key18": "5uLSuGtq9fGoHyYjZxVJu1VgcT5kWs1L3SQubwypEQ4wq7Na2Jrm6nAE7KiJwpvYmxieLQXrmVh2o4kT8bQ4WCL1",
  "key19": "4j9s1MuE2FNtborwrsEw1UvWTrCcMdVkYHpaPnSP2LaiVkNhXitmqij42sWpAJgYSWKaktF5FPW8ZH3vzGrCjCYe",
  "key20": "2LoXKN9fJtNAPbfRRpJh2ByfEDAj6BFjfsTH7iCD7is6tBVA8n1fRFixZ2oeqnMm17aunQ4PSAXQYPxUGVrDxCAU",
  "key21": "2tYx3ZHkpDiGXtBvqDEaFQHwtKfVRNQ6Yv8N962xFR5Ji96YF9BgGB2ntzykgofTjuPHRpzwcNSxCqDa2fLFdtDD",
  "key22": "27gfg34SCXXHaqHzJbL34KpfiJLu6UBJe7esffSddvp4SbQJUNKxi9eLTRztYn82ChSWLQ9vjzQu7NX7X7NuzFcr",
  "key23": "4pH74EnhxPNmBWbgMkSiuRPPNG6D7SCM4okAYKaoZpXdciVXditryaGLgPqjgcVaCuNPBRTszGSzbmALKmTXWChB",
  "key24": "3AygW1VrJNiDqpdqZzV4V1SDv9zFg94iZJBWGPLggMqtbUjrqtDoAfz5AKXPEpkNdZVc2qg4qp5VtrZfYTcmuJ4v",
  "key25": "4JMxWDiA5EkuDy97GfLfoydb4tHeTxeprB3QPevkVsTApUuhDCLguzVe1waJjk9sVS92JGmgwxyHrXGkNtbrhTnb",
  "key26": "4aJ5YujbZC2VJ4g9z9jKMuQeQjvgPqw5m6NZD5G8qamG1QTXosFg9Ahnf3qKYCTa3gC73qXm367EFFqmyTfPC1AM",
  "key27": "66bt66PmdWQCNwXCKrktDhzWm376yboQjbcAbbbvWFcnQiq7MsyST6i3Zzukge5JduqJbNvofrZZmKJJh3aVHb81",
  "key28": "2VTd9xSk5JL5gLaU8kDZp83jYiak7BjXDbrhE3Lks3GnQZR7uxWAszgCJozuZGvidFmwVJdCS9F3nSrDqHo9iNtT",
  "key29": "336UCmmhvjRibtKHoP1zq33W6RENyceWGCWpqguxrPevTw81L76dDnEyutw9wAv6RzryAcWmQXcJKiKvBSXeFsq3",
  "key30": "4k2QM4Us5yA16gcYKppyjxRtzwatsZKVmpWiEdoM5p6kbF3sGo3riF1ukx3P58FbHLEVmiHDPZJZ5Lf58W7vJBoz",
  "key31": "3BAGWZJGvMk9kxMbYDk3pikwhP7uKCgTpqBp6ESKgisQZCmd9cra8DGjFvsj5MUUwBegpxupJ5eH3a77ouBwoMmD",
  "key32": "36svybBFUQbxTaizD9C63squx5GFXnR15e8jmviYUccuqc2QWQJY22sdmBnqWpXapKExySbrUDRiG8gd6zSdye8n",
  "key33": "3zRYdwFr5YHCGGHYjLwGrC53KEMezJZUmthBbhowahhjw7ob5osp6rcYU3c8GhjsWuNoG2f4J5JJAtn4qg2csM3P",
  "key34": "3X13EwA4jwvzVaf2jqesrNLPnXQDzkGUBfcZHqdQhfyY6MQ4xYP7nQBY3djRePjx36dMTMjGRGP2o1BSA9tUUEd9",
  "key35": "3PbmFmDBAgaUpUZX5BNSZrUmErUAZfLcPxehwLsLfu3PogVtb1PRgfyjFJoCEwZJRTBjApBLHuaBTwcMpQzpERiq",
  "key36": "46XrRPZZaSEWnJgzZJx5sXSa8PNgN6F9Zp4sU3osPsgYxX2Euib6DmTH9jpoJhVvWG472fPx2Q66s5cdWfi9uhE7",
  "key37": "FMq3P9jiPdFDFL9BcEVjAr1FX5aTYRq3vv9uNa62Hs5Vwx81E8FJaYEgBrL6PF5RMUALSsgmNrVXo2cXbBcbLRP",
  "key38": "2ch36BXnER5spV3z3WPUCv6KaeJFwUxG9XveCDM1y6ALJuLGmRHSbWo2yFCkN2f9fUAr6tJ6EouN4Sg7hUZYGfdE"
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
