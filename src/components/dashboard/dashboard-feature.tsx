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
    "3prjQidNa78XfRCWQj3XuHYAQSPqNqHd3hrV7Z1nKPZUZaBsPb7BQ33VqUokeT51xFM3ehiYQ4tNkck2JjpZD4wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuM4B5bw36yDFejGGJjkErDAN8ybPuLJj63NhCtCWXytRSnTeftMfBuycDzaFTv2rxY2NDBXvTSABdCTrvpJ2mv",
  "key1": "5zacQn7fG7KrGwJsJ4vod9Z2Y5ceFsfvtrCTQo51rceMqZBHU1pdWWytwtUNKcE2eEd5DCTDqBhkKtAtpRcDrPwi",
  "key2": "5CdvKLDm9uejroGJTcVmmSEudanQMGtLCiJUx8RBygsPeS9x18jWG7yVWKrhpVXggeRQCXKdMoEUdFkdQdrpXL3K",
  "key3": "4P6EyNK4rxoKW6MAWeXDU3za7dTP51gHMCW6whv6mJVbqzDqioFDtHvB9pHujKbY7ZXhkUVNwtm9rtwWXBTqqoFt",
  "key4": "4dGxi87B1C7vUqoarxLVYCwzDfhAJ9MF9QHv4ckaaeFgZnQu8ZqeGv8ujrzybZmtjc3Qirf8NfRKm2o84BojX4QH",
  "key5": "3FJxZnZdjXQHqwrNuivRCWZss4EF3rEasP4S2iAfngiK4N19PF3YNtHBGc9yS8zpkv34Hc7hj465cZYa3e3XiJim",
  "key6": "2G9Me7DDFasq9gX7Z8J8aDWtYk1zWTmF68Xm3WLAdSW2YgaVwaBG415kiSmQ4x16Qz72eNvZhgCaMzefKrGrRkMA",
  "key7": "3LQbCejBaLhcRpFL8UNAJbwwCHL4qEMTYQ4roBWXgfzyijBLfZfEiGr3FjC4AwxLN4giViXde9EANyKT3bYQ22Eb",
  "key8": "3asUovjQxdBJ9wGJwfbi1PnmuNiCAgPxM8yPxEGtNfHra1YgasZF8H8vwpB83jKcgWi9oWv1JehgczYc5VNZ5BXj",
  "key9": "5rz3mGmprDYNQXKp1vFgoXjkjvSpHqDfhz64wdP1krRyogJutEkyeArwoQMM5r1AuHty8tFvfftHqPE7hCTHfTru",
  "key10": "3nky2nPNEbXEJDcviRfG2hnF4iidhiQpDBz4wGsNqzEuhxWS8Qkk5gskyvAeAvBs5mvV5e3JyvqXwfZ5UmF95f8R",
  "key11": "5TrdfsariqpCDiED4q1tY2vnojcCfCgsUzzAQiGhrcxM3qjxbRR5yh566bqYjBMZzdrZWPftQ5F9yW6XdpbAUMKg",
  "key12": "2BhycqMrKo5mRT1GUsuGYdj2TDoA1q1uaCCSjfkxBwwRqcmPwGfUJTAcsxzb8eJMb5qHz9pdDhDvRjTWZCMWCJs7",
  "key13": "3WL6rTqQSJ5ZjzZxKw8xzfKYNMtqdKZ4vGACEi2PjM8yqfuwrwdaHdH8MoFGfk5g6i6msNtABFHvRTK4RdDASR69",
  "key14": "3p67Bxo8d5awzVL9Xh4BjZomsp1cSHwacV1C82m2qywbkKPHKU4DTUGsh3efijK25RtyhJ25TZ8M2hpcC6fa96ik",
  "key15": "4e1VHAZqNm8eqeo3S8uyK9SEVeqEAuAP2ekYaveAtx99wUUzsF9kH79UAkXU7K15A17DgRXAbXESPHqsQuuVWFTk",
  "key16": "2TYC1s2RYQiFsUat5usvFon8gVsSTz7NbvkszA8VPjvAkkyybzZq4jcv3bWNXChCXiYMvtBxHfpG2ZLRs1MaP9eg",
  "key17": "358KbcM4QG2V9C6etqyFtuPtq5kBzjfU2aVdsctcB6MmYyf1ULZrnDLxkRQer6fRXSqSutddeL19w8NSByU7888r",
  "key18": "4BR6g2vui4JHzrcMQ65kUxB9KjumGQk4d9RozKCoPrsw9jE7XoU2138jrDSMHRKH3HgbkzxChes53wSTPiwj62c4",
  "key19": "31TyDJ84USSytJzVU49sXy6WTCKwgwoMQBH3Dy1qkD2LudDkninXgSdbUSfPqVPuTjkTWspnfFvgKQjofNtstodj",
  "key20": "3LxLC7aiVjep68HueKyL2FcmwLtRBi96RkvSK3kRCiyNDDJra6rPFtJ9s7szZzEWUQWmMjfaWvSdibB51f7aHPo4",
  "key21": "5b5yt6QuucJomTZcWkQ4pnkPB6uprLBhMxNuPDjCNPxWTy9o5WyxTkLUdhPuxLGSyTX3UC7WBQ3HjbC7hcCYstzr",
  "key22": "r8K6juRF36SMvGt6XgZGi3uXs9rcGwZrsMSYRP6Fot7WHzmxVissAsizxCT1aZ1vCjbVaHN5LGf4GXCuQkYamSd",
  "key23": "aXbYZmeNz6E5GAx9NmPXNqNzMGZnEvxoBdEJNPCbj6aqt6G7tVWP3o12dCctqmfjpdhmCnZkoQyC4rN8zMNKnux",
  "key24": "4TwRBhjeju5QRZ7UnSAo6JNDAy7QGDDZXor4iDLzj1sWigyoRCjqEoqwSuWLwkqQ78HF8cm12QoERSstetnUfh7Q",
  "key25": "4kkcuW4qc5v6KbKHqLSoKhDB3fpRGUfEH74FfxMQv8Ze6yxshjD582qBcgNo5euNGZWiPoKUTcL1y55HHnRNbXUu",
  "key26": "5yRG5ik7gH8Kv5dwa17Hdok5ZwU8pGdiYN1B6fqyxKZo2P6mm84DWv5soREFkPFeu9FiWEPJuzWTnou5cSJzA3xe",
  "key27": "4bMZ4dRsqEYF52GgLxwrsxxwvmGig4MWXq1qfnESxM6HCbrad5TkQaLU4sEoNgvCZGKaBSv7qc5RRr6Yudd5gY4E",
  "key28": "UX1TAmpfhT8ugHTGFErQfxtJTUsbj27ocvwjf88i1wzziQUBD5vBYzBDWPfJoJvGcueKZEa9uTpU2bwXVroMq9G",
  "key29": "2wyqER7FAzsNbGzGGboEikjRbVEy9m13cPj1nrzoAdZM3gbQhme47d7Qnzcbj5PVdkZkNFhGddMXQtdGgVeQTgiN",
  "key30": "2LPxxedPDGAXW5bdMQ4mjcxWaoU9FfmH4rcXSut7d8U5o6TkFTZ42JQJXbeoFm4vwyrfYyVuQvb5AY1Nh3HNXbu9"
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
