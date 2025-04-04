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
    "5FsDWA6WcTzuwH5tdGXYEk5CdezsTJP44LY4tEQce1EbYKDYJpP2hPVh4AgxurresKqRbzVEZanv6wBmHXFRM7VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdbKmarvDGnq8AzXWf59tQFbg24BpnZSHvnfTWXhnkpzMusK1Qvo4CKguaj4bbqDP7ZR4vQQh7koR5qG8r3VHfL",
  "key1": "5sV6d3hNjHNMwZkLFDdsQBA8DNRi9b11TodtomMVGQXXUCCzWkJy7cyS1C2UA2Y1F6k14VyGufmfxAGzgbFdKfjg",
  "key2": "5YS4CVhHgy93hHkTEuxmRfJ1kzFqhv4cED5BNzKRsdVZ6igRwrupMxWmNtyd6dcXq1RVJTLHSmDASrkdYc8BM48E",
  "key3": "9khZKhZBYSdQ6kB6WibBQBrbKSV4Adfa7pGu5gTEMVTo7VeeYnhdSVJCyfhrvGXvBNGTuS311mc49kDaZdDzWue",
  "key4": "66XbV8pDj7ryb4qYZkUQrY33Pfni2QzV4oytyHi3P1rvy71GS7321Ruu9L1EVEKoVofW2PXuKgC2D4cJySEepHvB",
  "key5": "4yDv4hvyv6mFUBKnQZLfMwDuEPJwu4U5T9tmgctAqxuFZEJwB1zz5VeR8WzfGi4Qg4cd57NcFof4ZFftemEJmPcg",
  "key6": "3ryZ4iN7JNdLaRuUjjZtaV2LqJs7pNGgAyJmv9StrozZpzLs199andsGQYW9PqW1FG58eQRadwUpFcqbSGe9xaHK",
  "key7": "5A1sxzz9oTStKChsEqLn5JNk2ZQB5S8UcHCUEqryCxpHg9nPGSrjYFkwmWpsGrEW9q2GXJiWwuaRXjSVQ9qmC4Mq",
  "key8": "5SvKj3241QxbWJwWWVkBVp3DM2sJCkL1U6dkt3b9J9SdcJ5D76EMzWHFLB97pDD4Hh3iULF8XN1iYUhXkjyp1y6Q",
  "key9": "4hTHqmWTJDMJ2L3r64uCVUsz2C89LbSL36aHD1m9AYygrxnwGsp7CDEkXqNS7LwaJQUwbTgJekS6mZ4kxh4TWB7U",
  "key10": "4oHZtVZkcMAJbJqT2qByy1ZnZADR7VLtnjWs6e7GT7x7TqTDgDeX8S3GTJCntNz1dcAgufjv88x98Yr3Lhdqgrs7",
  "key11": "2KyVRpLaZKpawdG7fdScWALeoXK3PgC74vYPoHHikFPLs5a86Tgj2KJCrd1DcVtPtyvnVEr6hkMergGh7AHGRGrY",
  "key12": "21oiUmHEUATKM6cqn6a5YQfQ2QVNnA2EMzntFgdwP64qupiQTQbvuYH1jrB9gZzY6YbLyVu1jPuPTTTF4NgcbFCf",
  "key13": "5y2HxWbvabfafRjahCrDh5h4BcG7PY9UGie5fiqJU9yhzNU5VPJXoxeGWjxdc4jwRrZhpbAs2mr84beHVKdSvxYZ",
  "key14": "28EhQkzdU47Q8T6PB1BCaEQNMno3ajGAohBAMRVRasWvWxMWYSZvSepzraoycLagaYCSnJxSj1kJzApVftdcKjL7",
  "key15": "vDu1Qpw9otWptFmuzqWo85PjB1DStWt7Rn72i6PBpsTNyqXfcDuoy6P9KHHJErGJqqD8ugfgb8WJ1RLLzWBvQVC",
  "key16": "JVtJUR7GoJ1bz3rmBEh3aJzMQcXRzsc2gcepZprvfabAQG8p99JGmNpSVesX22u72HPirCkCvp9ysNymLnd4yJd",
  "key17": "hKYz3Li96mXNkxNW2mhSeiMD9j7v9C6eWpQqh3amruN7U89ABd31LmWZHtZXwBWtBnYPVW1C4pmDoECs3PTDBQw",
  "key18": "FdqgNZ8aXAGWZngomaJzynrKjsAPaT2HQxY1frQAdE8fiaxfXU5nLJ9gxsb7ZXc3MCo4Fy2UgGMuEBYjMC2gB1L",
  "key19": "4nPhGktxDmqCUffhesXwhzS8e3V664pRPDZnE9q8Jta5ZKeaLZZADdXMu6PfXiExkykNzKpXPm8QvB6bCZiM7ZNx",
  "key20": "4qT2tAifcscon1YseWL1nZjFcrumUsBZg13bYv9Y89TVAtfQ3U1uNFa9RHPUSUZqaRzjhUzGV94fjwe54Hxgbh7t",
  "key21": "4Sgu3NEBXZSKKCskV4Jav7kENFkw2wzkxrYVdeoBFm8SknBhEwLmywUuTz6pP51oh9tWJaA1dLbC5pHNotYxSfRM",
  "key22": "4pzfFVwphUGnZLmtaQXScsSNCYWXrXTYbeFCspnEht9Bjja4sX8awF1joGXppNVccFZu3XEhMYgBMAvRyk8fLsHu",
  "key23": "2oP2M1ovNxG9ntxWDQPtbWkBfz1rB6YqKD5AzPaPcj2Bvha3xoNHLDG2YRkLjpGhWxQQgkY2va3khCw8btDtCPCa",
  "key24": "5sjrYVkUVuHLiYiFLwXzxLwSVijNjBrwBy67xXRZjmaycE5VSM4kZEWYeYYbAHeiTGZEpom5jvSs14Se2jMR3Rgc",
  "key25": "56Z1gL2WcZppzjh5c1iapYgVs3qXw6aH5BbevSZbEbwzKn3hmRZftYM9x6CsmMQnTftsRRRb1FKgHJT4WGDKvwaS",
  "key26": "ocrqqGqai5XSMaFQEzknTFnkjrUMciHotT24akkJBHBg5v4tM3wtgHu8N5FEqbPWCQbDP7JgsgbsoGhcfehTTfY",
  "key27": "5Vs7Bm4Ds6icDDzLKHAGyaedfuS9jTd5SVD5226yPdwfUfZuisqGUZ83rqnkTeLxj5hfRpfFG5DEHQXZ9k4fNLRe",
  "key28": "2BafHpwcpPQEZH5voBzQPqWRbRTMgT1gjApNqtzE9vsotQp4wNX6TL37S5XXP8L5jy4QxxPg9Aw6KoNoUMW4p4ir",
  "key29": "s9Y6EVRcDkV38KE32YrpQtVd4D3qdJzxhF3UPxQUvaRsvKxidgrAxpQBdLaTvcDnm6fRq2prHwMLyBRuJgeKdvu",
  "key30": "4S6oxgDcKxfKo4rF9vDJxbTCZXYtx6SQuhmFb7hhGMeNqHgjQUBSkvjuxz8s9t6hjAQCwxnsMvzcQJTG2idV6GxB",
  "key31": "3fGaFhHmdNS2rhUzVqR6TDofQAFa65JAkHQ7Kd5fvVHsPS6gpVqK4HPgzdZAR8Ba9mdAh9RLehaP77PM8q1zpdEz",
  "key32": "5yv177vL4QC5YmFLLJhwT1x6PadMWNvAAZTdS1sS24naBRnwPWqv58DLMCt8inkofTxCvivyMpkmEV6E7CFJvsuP",
  "key33": "4dgvrswghGwnoPKiqmBSQMvyPaZgbGo9diMpDzocnLHdg5SSskkbKDNGfJrzmD62nuceX6VXFz73CkqYcuSCUaE7",
  "key34": "2cHAVPNUhvgt2KLGztNgugd2WeMnyxoJsUGq216wY3tfwELD5jNqDMLYwHo5j8G1ESrQiCr63TNGA1TsFw1GuUe5",
  "key35": "3FTu9VHt8pDeHFE94rnhsUiMS3wJjGSUdKqkFd3KsnG4oxrwT1HUwSJ1CiootePPerY8zEQ3RDJoBUScU46dxZfK",
  "key36": "pn2GsvoNhucLpJpZqVW1MLq5MvzCm8Ea69WizGk3yf6QEwyqqBDTKBEeBWFZrKXNKBUgZJ46B1W6oxkRGVkDV6d",
  "key37": "4qwurF3xau4s5ZE2yjXbZKKzkZxywBVt5ScXc4PV4ifPa3XszVsjYFPpKint1cZ7D8Yofrw6FHuxs8Lr8Zvo6qyr",
  "key38": "3ZGhBdJyNsxFjEyNJMoM21JmmGrUEiwwxkbmMVKFNwba2zebHUPe8dE3yzqNyp7jEp9yDcYqpdyCivANCzFRCQcH",
  "key39": "4z2BX7StTChdqEHmv8qbANGPyfqhTJ1UepZYXtZf8BrJARyLWdbimEDy9oUTufFAYBmEPxwcqHEnjwqmos9DRD8K",
  "key40": "3w9Puv6TFA5s8o4P3u1QRXDB3ZzSP2Tqf6mqFm2bRNSDoZg4EW4UALSN9NjFtGLVCQXfcar2fcE7mdPkasPYcwrL",
  "key41": "5rfJrLMjTGFELuCvSXZDvC2BZcE5qptvubJRVs4Y3rWAhBqrScVYb1iQqZp4wpEQHR5kWzVJNwpPZJLDy2447uGM",
  "key42": "NCDbzh6mx1stThJGekd41aHbJThEFUb2YRHFWDLu1Yz6W9WJbqhNaFfRTtkPSTvGbEKGHabLXKFdYxPUCN87ECA",
  "key43": "5cx2psGKubr2Lede2WY23DfXkHrHXaX6xnVbsBp1iD4oMqaxXdjrb5qJHi8pGgeFYZMvd89kAg2p19mCu4QLvX6u",
  "key44": "4fkEprdMieYFiUahRvyeG46SVRKTmFMUBbANpDoXGHxF2t7AUnLEaLYYKv7NyeHyhx7djREyvAMJBobFW5RXwEyz",
  "key45": "2JRYRKq75NCstE71EiP4XyvQZL6wdP53S9ViUs2WM2RqJwyXi1jFwr2fYC2be547xKRhajVsua7fJi8f6noxwbxi",
  "key46": "heKxjgfSw6Lc1aoTwi4qptYQR1qZ4Ruw1vsF5rFr4AHzEM1SDq4vY3xqBqJXqrNFnbYvoJviEg8g1G5vbDD7Vr8",
  "key47": "5QJ1TkwqFZ3HN5BXUR4HeXEH5A3vQ177EYQ9A7G9LxuyA4w6czc4RsoYDCLMqWiQJCq5VXYwFkUN2a3G8yqsoXDQ",
  "key48": "eBQM4CoqhTNT7n5tcWoFTqEWVan2R7rg5BFAiWNqciSgbW3HwUcYzo2y1vJqYEyEBVeNJTzBXPoo1uXNm6AdfZU"
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
