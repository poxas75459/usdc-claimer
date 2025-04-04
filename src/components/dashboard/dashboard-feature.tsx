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
    "5LpWfJdqqzSjqs112b9AQeauKUq9bHFTRqxbSek3kd3s4mDZ3DELzRpitn9iqokRBHYBkNf2TG4S5MAC2AjvRRxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDTEHhoMqcMnFSP9bMce9kjA1RKJ7LyZVWwZQEtzK2ViC1MDbDmbgEupRScsPJLkCA2eaqUmHAkuryksYLpMGoK",
  "key1": "311NLuL1JyHDBWCfH99Mk7YsN8s4BzBPF83b6KZdYCHqiCzzkLhxWFJS9aocNwV8YXXCR6BSZG62iufaXSc8XbN5",
  "key2": "3gDGrjjdYHk2KKYQ3PYsz1ogPrtq2F6s453FeNRcWkuPGw7B5xvDWenjpzFfEL8P7ZDUBXAKaNBFgYPMjYKmzkz9",
  "key3": "3YTr7WPsXtvRWffZ2seLySryo2uKqQm1KCLa1eUcBMmXSZvadhas27yd2pvGXpPjX9EcWZeHeycm5u89uV8nGX8L",
  "key4": "4heZKMLCTLYnNiEhwKXqBFwnR9BGSXgzQpXqmMxGwpsijTxcKuvP8rwKT8rpUoaGbCkJ423S2qXjUyAKKoEsehoq",
  "key5": "5xUnZ2JoWKPDVHKUjTjNsoNNMbytydMvWK2xJ1EDuKTg2mnh1da2R49539D6XB8ZLwj31EnSFxbqBENizhJqd6x8",
  "key6": "67Tfa3nw4ETG8e1aZck9iCVo6Ga4C9yyaLKMdNf2QARthDkUGMpAC1PftqqXXpKci6pcdoBaEnX1TkA9E6t3cVzS",
  "key7": "2d5LKF3HeFQhW6jP3qRmCLYK5mAgndbFuupaVwDXf1M8gPPT2dh8V97KvogYgufqnunYj3jn5TNnBYZV4iyEm3gC",
  "key8": "58DuWpezeXXWDrS1xN2HWi67JwtwqdjebTDeh2CD5v4Qq6j1GySMr3L3yNDDsZUa1RihTh3wdpFBWJVWS1PCzhj3",
  "key9": "LFN7S94RsTNaertZN6U45NmsyMrW5v3Y5W1QqWPvAtvHxN6RfeLb6v7gJbwCatC2Gzy9z56iMTf7opFAasdv8n4",
  "key10": "hDVneuXvvK2RE4NgJcdkF5DPcb4fHqVc4NT2zoDHvMbi2y2EFu6fkp4bsixv921QUrAgCc9FqjD4qzQVL8vicm8",
  "key11": "5trRtnV2pVvLvGeWkk1ppf6ooLeLGT2LnCdgpcBSosXMwjU8nGL2WqkroJdiTgYMSXschp4Gfi1YUBdyvpDBNKUL",
  "key12": "W6pe23kjmHYNNiNk72VbETvRtq9WeV4xtrtFqV4YQxnMVEAQq5VMGcGRRVGgWseqRTMXdXdoGWWtx1LpwtqxCRM",
  "key13": "4ES69bnfckW1FkHSXjP84gheDkhqw1kD2MahXCyDJSZCZt3WHUy7ayAHuRcgqSPsh9AGhW9G31f7y47LUg8U8V59",
  "key14": "3JC6yQdZ5ZaRiQxpdmbvkzaEySrcbzNPCdXPpK2vEVemZsUAAqZpC5jVQUVddYGCjJY5wzZR6HLkUeu56SyzYevD",
  "key15": "5orzDg3aBGQoBGtJXP1LesR6woXSErCyUYyzw2132T9z16riS7ism2om3fqV5JFF6i4GKfjK5gQAbV2cYcjG2noK",
  "key16": "amXkPhnf58T17HtNWYs8tjX4dVwZGWkbnRMPTqLFJMv1H5Szqo2FwQsrpjYKVaagb2fLiEMh2WCQFemLUPYxvXK",
  "key17": "2hGUFMZWfWoMxwcrzPRhw33yaeA9W5gwV25VmdFKfR9dSojwdbeEukVFpnrgaozLC17NNFJgUE1wGM3UKkSJntTz",
  "key18": "45zMjjhtVfGTuMkJ7vpRK3UagecnWVjW4CpEqsR2bGMduZJPFNWrRb8GYiWj7zRcs9nHRKqxvr5y8MH6xBzGWKPx",
  "key19": "38xGu5XQg1PpnFS9kDe13vidMW1neBn7F7frybg5n9w8fb93sukkkWf7Kdbx8x319enbuSrvan9Eu9wXEWmX5Vy",
  "key20": "4MJ27fpbnBw4gkji7RDvLCcMvrdw81oUm3ctNegJGf3YC1A71JgDZxafnFLGaPeMUe1QCCfx5PbJbQ4YHtq4PjBp",
  "key21": "4nvcSKRtLiA527oinMRb6CDSx7XbFL6R28VZu6zw69SGxsSFcyxZZ9Foq5rWr8c1ydQu3LVxqPYyFBHQ7Dwbjndb",
  "key22": "P92PtpH4DdiWJPdptfGck1UNJgPzHNffHTqBfeeNoLUdqKZN43X2QHDW3BcBwpuajFQye38Z92sVhTUzGQ8ZWmf",
  "key23": "tDMKn12NrtyXDPBbopqVV84o4Y45rGwQNxEPd5eD1faoHEsTiqJdxLTW9ns5eXbfzY2kDPXDD8JoB1wBvZBRVx8",
  "key24": "2W4zdVDzCFZN3eupZfW2fpMgp5JGtyeq3tyvBmyaKmXdQ7aXRkDLQLUQDfBG7asPVBpUDJpLak2AVvLDcFv1pFzX",
  "key25": "nqHAX15hyZfJsq6TxzJC8fXAq47UdTpRKyuZRqvscAXogtXFiPJHJPvnKDa8Z8z2pTMFKzDxD1Y76zWARTDmi5Z",
  "key26": "5HTxQp992AsbizMtQqqXoc4YAJ81FNpg6ewox8n3f27G8vRU8v6mzXcVgjeuk5CunekW12SHA1F1tXpMrGhuoBPr",
  "key27": "3PDqiD35eFVntPA8PxpvtsAtGQkpBsyqZjKUViq6YwpVyYHrqKpLKaCmk6P5p2tz2RXFtYHEqthAV5bbhqGAEfyi",
  "key28": "497UxohBBEYeG4e2Y8jEsV4NgKSusL8kkNTzV91wx72kUU5TjPHWHQTj2piiJK8SHTNFBmp6n8cUNHWgjs3Tj2Wq",
  "key29": "46zq63tcrXjkcdaPKifYwfc8U9hFxNvmQQxtrAdydt92HYaDtze1E2GXxeHBhqvv4M3oSdniV3GVDv8tGoqQDQBy",
  "key30": "39At8CGMSRRBG1TaRJPWEh6Y83KnpWxfnKeAQiKbgUDq3HwtrLmEYMVPZTjuAa9pJbLYpXm8c1eLdP3gUyC3YSkV",
  "key31": "4h2ZBeAHctDrkRcfxWtphbbMoeutL2JWDFSMrBHZaTJh17Lry4EHSSBwvit4otTLT9G4pDPTNQs2pD7xgTS8HnuZ",
  "key32": "5WpSTFqfnyeaiH6bsYttU8NfTVCfqu64LRjw2XzrCWVRs85BX2D4aJT7dKBTxfqMcrxADpC5PXiYLSy2Y3tWjP2X",
  "key33": "xFBUDsfqNnrDCZVVV5FYcK4Pxo9Fy8AEm1Lb3mr93SB1EC1uCBauEP5d5GZHkskQ2rJN23rafKUFPPoPrsPqdtW",
  "key34": "3f4cVzKSr631aNfq726LiZs9o52U1Gs9vh94DZVxEumBZKmQKYVuhq6fwgX2v47Ytka5pi65LuzhF3b68YUC65C6",
  "key35": "2Br7nDCoorLcxFc51AZPnxwNN8K2XE4bbeT9dYc6ZF3YzA5x8TCJ52yaZsLqt4de2MuNmwHo4xBJgCrWDftNMxoK",
  "key36": "5LXGTMQwximpCpwph7TeuiKrm91tg53TvLKBR1JNDik75gvtg3xVG8cvecr2QDrTbEJLYpmpj6TxKAiY9d1sFRMv",
  "key37": "26u9A8kDHc7V6W366wkeic58C38ht57E8pJQq8bDtUJvnk6UZ6Kw1VA88gkSchhzv1zT7st61aiMt9az9tiNqatN",
  "key38": "5ebWLanVUoRUd5iaALSmYNsQaKLnz1VgZr9uMkdtKT4bTqksizxADunphZwiCBSppb7dvT3VXCwNMgKJvuU63r3v",
  "key39": "5cxTjEWnHfFkzHREYAs3nDk5MuZ9qWCU4GdQ3xiBS7RnhDoJ35WSa4KJuSSRSFksgbJ5XA6Bj822tPaLjxCjgnuG",
  "key40": "2s8sFzhAm1SDj76oTqomwWJmxk5awKVXj8LmicUCCEEwJuvNwVdM8T473YcSmtDmLw6dD2VuCqFgqNuor6axRYdx",
  "key41": "42HDeJ6tEzSgk3s6FPxi7Qmw4Ue1zPC3Tn6R9R7M6j965pHDPVzdLx77gyTfATPWrZiEAr1aSEoafvPUMcK3zb9K"
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
