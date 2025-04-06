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
    "2aZnfa2aqf3X1nQvAbmCmaEKEbXr8ChwBbuhuetQrZTnHsuNnUkVFKckmj4dTeqAiE2bj6UU1rM4Dn2RfzuQc84D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cow2rrEko888iciEsFKryakvzQnRScVHH2uxnVEhJuASmtmiHndEee1rE3GnYfuxhaZHymzqNg35myheSJaJbBS",
  "key1": "4dEDyEGvExD6YonakyG7mBMY1ZekHPzoYTFfAenyJQ6js54RTn92XxuWRhgWZUCpP29kTNfKqn2a96oc5sS6tVgq",
  "key2": "4JegNpFhnq2qwNnd2ecsRjv7YMmJ7xUFK3UEuHpXsyd1C9UJ4vSFtmG6ZvbT98VM9sAZEArqRaZCxxhJLTtYQa7K",
  "key3": "5etYUYG3B2TmussehMq73x83UhZYPdjM6vyfF24Byan3mgGmm3XPmkuPtjQ3NbmzCyus7Fg2RPC7mGJd4QGhcRnT",
  "key4": "5mtZRdMnKxAprrabfX9hxyA9aygXdeZJyT7hNsL33Sw61cY8VR1mg7Bxdb7e8dCcFaHR757SiryE1bT66QGGSgc8",
  "key5": "aYPeSqG5jm1RTFL2sRKWZ2KHGaBrZHnUvC9FAEDm4uSdvmWn9JEFe7KW33SEkoPSf4wvZc98D6G4eeKv21j9VYc",
  "key6": "3sKzF63WJ58EcTAscwBfqasDriMP7gdhF9e172fXfCkJ9nACkdqcgU95qy8tZD7WpUPC7sQRsPWi8X9i7UAyPHXw",
  "key7": "2Sj5XQ1rHjJ8cd4eMZqnrpgcukU1wLWVnowQDVSJG3jGdTvRWPRE4Q53nhnuFc5jBuRnrHbNJ79XbaMyKLc9KgLP",
  "key8": "3HTqU6bKCTkNfCqduyLsjLqzqzPXXj6R4saDvjABKsh4ZndknxMn1bZ5wBqjiQUGjg4PQPzW1K8gDyUGx7GuB4c7",
  "key9": "3rBCcAj57AL7QpHpHXza1SFcSdLTKTcNSStsEeZdWo27f8MSEPunyZCsYR6vgjkEMCDVSYVPSuH9JPjqCQu4gC3K",
  "key10": "SNr5vUbS1QXbMUTUqSjRDHM5c7MBLmmuc5kCQe2UTt54c5hDxNPyPU8fusTMUwDZPLSo8sVY6QzefRrsoEDib7B",
  "key11": "5WRZ4GYqJum88ouA82f2YnfcVSL55AAjGe7dqSJsMGh8DCYtn4KDDiv15EWgdTfcPTvb4BBycHdPbAEwm71PHfmu",
  "key12": "4Pmdjy1WqU6sjuBX5YS79q1HTQ8gxRpkxYG7jfhGDfbeLTk3p8QKjYN45ocrYCVrh9yrKb5NxkmxBMoYZUHnynAy",
  "key13": "4wAk68Fi3i7A9gnMw5SCmUEuSjmBbFgaU4Rtnj3RQqWAqb6TdsBn9LSR3fCjbbkXKHtVLsQWoRWvAqed5gNxecKp",
  "key14": "2bjNm5xeZKEtw5UK5AZA1C5ht3xMLJ4P8k1MnzspxCAQeTTgqXr2EmZNxJ2p8KWVTbpSTpoksQmitR9JChM1TcgM",
  "key15": "2fuSQvAkkscAJpRZuhpks3W2SQaNiDzBbG8Aw2KB7YSQg9EV8zLPV125ccsiiSBP659WWPptsg7CN5T8eVFF63Aq",
  "key16": "4oCzsS7m5NFBN7kDciGLVRR8C8B3XCNCGimRaTTQo2tDpDweQfdjKbotwEWZ8a5EVKYq2EexdEujowLXufRitan6",
  "key17": "c1waZ8FnhhiSiCC6eE979gC57bJf1jAA3rF6pVU4LJTuwoozaaqcyTVT6MmMfyt7TYBzeKLKE4u1XhsGowqpwPc",
  "key18": "439149dgPFWboNCH5G9F32bph59q1csm3iUC35VNBttGFBZYjYhgtFyLpv2GPiQjv4SoAGdjmEK3CxtrNu8qeYAq",
  "key19": "4HLfStmZthQb2FUY9SX3ZAwAQnz9dcVbSgbAubdPKHupN9PQRoUPXLVpBwdzu7QWYTcYuHSXGSrQ7UNwy5t88294",
  "key20": "5P9G9bvV8VeDDagC2ExS3JvNhwMbe6Bfe6ZBGoTXuF2GNixKjB8JG1KD9RmNTicaiPtCa7pMNqavUcGWKwe5mmwy",
  "key21": "yopMBbo29Rq958uUB5Qr6TKKAaqHWTnnrP95mphcd1GQ4M3EBh5YANsSZunJVTRCpTSqHXp7TXPKmyNr81L1Z1i",
  "key22": "2q8LCXxJVaaC1FY1WFcwX52XTovr4NFZx3YpfTSQcJRL8ZMSBJEj9mtvDGHRDUYvAHJsonHbk7R3EL2uxwXHjTQx",
  "key23": "59qezYaiLtykTjpq9CeUWCmgE7BYKDVJRrWiFKRfPED8A136wkiFAAH83GLaiHKQR9PtQYnZCARg2WbQtyV5pums",
  "key24": "hrvK8XsFEZu9RrBtK8Bgom1rnBSzG5bN1TQuUKhy9NwWpqkP3dUtXFio1KaQvHdXbPYCAqjMGENQ9HNCcG8rPPo",
  "key25": "5DHDrDYo1mj52Z3UzMfheyqrTTnkHytTyv2iDWcTxSADTo3zYaMM4FQhFcwjaooP15x8CRKA444VgmtaSLPEgSmi",
  "key26": "39nKQ4JVpMEQmF48XJk2fYnHHM9pW8fL7nmpoRkoChALwEY5HbRjSwHBDSeg1rwAHdB7RGeWBP1sqJrqFAd6UsSv",
  "key27": "3EiXJpcTzN7UPEVFgXcSYJDUwoAJTyVy9qia6tpUWMKXsYBhPadwESbTEpckE8Ldk9Ur3WGzFv7JUNmKvbTuhemi",
  "key28": "3RkkVtTEcjKz2okccE61jRBw3cxp4Gov6CBNMadYZEyFgRTFkUEU2nAbV9SRvmKr9k6sgp3DNKjtbcgzujNX2Q34",
  "key29": "5cc7yxbP8PnAypZX7pCe26hxg4oqjsqxGdXC5HMjiy4CEKy6mRDMjN6FXmaCV4x35LSzjBrCe54zm1nRpgeKPtLB",
  "key30": "ohjWJ1kv5yj9R1TK99T8ZpzTm6r7b7YYi93urYMmnzH4aVMBT1GUPpUcLV7k2ThLpkds5ptVJCNtoPiMf4AgoE8",
  "key31": "28MraYJyDrJY4w1pf1ErFZFadL1HqAJEQoT4Pq5rREAtLaQvhwRYMJNNMuTQJUn81cXnQAUzHmei2kYRWSXjKoSZ",
  "key32": "7LuW39wXAnSpBW3ipCeRATdgBQh2nkVUHRdR3Tu9pzKXW1d2Yt93RdjgvGxcXyJHzTPWyYrLQ3bLCvVtvAjbpLe",
  "key33": "azzYhMvv4MmwJKx1rQeTVEAmgc8qSNVPTBLyGthDyw5bENKGwTBAMatHQeaxcboxpnbYzNSy5WNMC5a4piCDJoS",
  "key34": "5yUFX7prLneqAEf82xC1wFpMvVaXZmRwXU18EUgEKH1qkHtN2z1dKLSZcAKDATQWTkrHpCVuy9Ad5BLYRUeYkQHb",
  "key35": "3jqUpvBPE9ACvhjFBYvpNmjPBuaqndQcLcTYTcjR58KvrocKowGt7cy3pApdyktCGaeqGdqKR63Pnp7MRMTD4edS",
  "key36": "3XyByqGJXEDJb9WWzxThMxisZLjzfFSHFw2m4Naw1SFHPd756miFvY2fWdSjnPihUBTMTfJRoZnLjaG9Z58GxNY9",
  "key37": "HwuQyhtTY1xLKDfaeixRsZUWAd1V6QAJ8gj1xjrWwp8oxTGnDjdt9hhdAguizFtAhSo7ZzXECTdyEmFU4u8PsxG",
  "key38": "2T3f8rwo4h8YehJjrLzErzfLN8bqk8tG17cQZRmnesmhVaYQjNTcyQtbBVQF2F8nqTCVqKbwBTcPR9BQ4TALx1Jc",
  "key39": "3NWa49ThTy1t4DBawfH1qp7rf1gazEVUTe5DDd8dkz93ETJx41dNKWUfPXs81KFQwVjivEXsZevNcsiWm6gGyWJX",
  "key40": "38eP2wfUpfM45khT4EHUadGCtrWExL1nAzoTuKUzR2zs9vLhMqakFzxNfBpHD2QzMqLCavXkQT4qtaS2s9g66Pve",
  "key41": "4jsaCdohYhYPyM11anfJY4ZNzoXRCZozwT2DfvyPC5qsgUidagkHD2Mg6CZuNK7e8NERYEuADt6eTBWiFFvvMkt8",
  "key42": "Ama3tbyhADRYyrRBMncKbVdNUGSr6W4564teBWUxULzSCCTSoij78w1AU74oWsQHLPJXF3qFPhqcBXknpK2UBX4"
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
