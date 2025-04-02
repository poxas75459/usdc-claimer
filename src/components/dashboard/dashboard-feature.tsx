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
    "rbphzkC6pc3JdQGbP9cugzvLAUQvBGxDrviAoi3EWgwJGwphLHVheZfHQMw1Ae6cjzqRpr1o7LuWHJTT6Syb7AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVeUEgfzWXErDiDbL22MspYyZhWCbrw6AsJ2heMeofePaoajctFPN3q32nyFQpcwtSDJ3aXZagy7zEsPzQEbgAT",
  "key1": "5iWetu6isgr6mstc4YjCWJGcbyWfKGzDmMmpuJVfXdj4YCLCg4PfyyZw3hCyrqKUjbG1fzYUFQnfg9qy2cf5YUoh",
  "key2": "V8jiHsuoW6X8E8VKf2nRZ59UjzGNV4pGSjAQvSkTwdvx3PBV2rdWasWfSo7GN4tJHkFWyyCNqeyzFK6bMDWNQ28",
  "key3": "2ibDoVHW6ynGVqZArxisHBTJyNrj7vMM22h6LN2qX44VPNQJkdXXgSoX6RxPSZgGpGKnUYsfaoh3ThMbvc4pm3VX",
  "key4": "2jqQwe8PJ7Du7UjBxPR8GSwZLS4TUizUYDJ6Y914TuWiubsrhrULbPB1FXyB794iQwgrGDn8HVakPCr563XUKGuL",
  "key5": "26k11Jj5AhWboBWKYsd2qq5HE4DCM8XiLX2SskqHd1gbvtnfgbSwztJiD5gi2TWLzw1WkstQZmDYiqeQBcvABDiZ",
  "key6": "52YJxrdGJwqnXHaPg3UXy3V36uc47ZD4kYmUtx7cCUEJNYGisBzHjnJ8MLpsAPQMbXBDDi83arNDjNFZAuG3kUDz",
  "key7": "3dpYBGAzoSfCGaZ3FXLnRCZnADNDiciAs8D1x9WY4C5tDvpRhkwo5ptSfeuYFgE1S46XrTYwa6BmQiCzXi9ftqR3",
  "key8": "3tb39bqQq1bJwZvCxEPhLBvwPX68rjWoDhUiWgN1iVtwtc9ASUedfVwSsMSK1j231CeSQjM3xqXn6kRKyN8UyTa7",
  "key9": "2QdStLrjjtqAshW28JFEvGxyDtXK7FbHJJaSLJSLzw8E1g5chmMvdL24uA6sd2xhhS38ppFqugX7v7fEPcY47S71",
  "key10": "3Deekh2w1WuXyeSmSBWP3paSRFS4d47bBoY96G7mkpmHgsDShfu3qwDNApp39V8Xa4RgQeTcL1vx1XLM7FwM7pt6",
  "key11": "3FysHWCLpPeg7jpcSxpgSdEgP1prPpjpVtqNBbZDep1oMiYTg7LS4SsrzhZcWkPaCLNPmaQFpcrCqwC14sR8JSBH",
  "key12": "3rhikaDvraFaihs584J72wSRSMWxWtGjkDpYNpU6e5hmnUDpyPEcLt333W9rW8FLwL7utEq17hvKXyyZJcvzoznw",
  "key13": "3KXKsdaBsC2XpP6CwtX5uc4P3Hh3hgnqsXq4UdJMBrTNne1kYWkVRtDj7B86yMD3mL3auYNcsb2Aypey2eEVyXWo",
  "key14": "383x5n2ckHYkYbTJWujCUHK82BLscY6oNU9guoxtwV2db2fuAwA5HT9soenr2RoBPyc8V1PvmEqtmnFSuLXsYhbb",
  "key15": "4kBgiGsnQrV6sqCD4PMmHps6ZjXN9UQjojm5FaguDJ3VihfGXP8Q33eo2cMV2TFq8sEJjydSrsfEXK6fTTw9x6vx",
  "key16": "h83RVr8J8NLXtjMPgWMx43ZN5x64T4nzb4iwk5hYMJmnMNbtZe8jobp3c2ALwQoUaqEzWymXARDZhdn89bkFH9i",
  "key17": "3E8JRWzDiXmGJYoPrbizLbcLbRDiUkvbCcFsm6eUYSSLwV84JCivSwKxyaxko9pUJmzsj5QNbkGwdnRDJiQMd4pM",
  "key18": "bs9y4oTP7waREiKy7TRTEskiVnG9WoNbR6ruXvbX12duJje52ga2BbWmWBoCyXCazTH3E4KNTVVmb7H5pdNor7P",
  "key19": "3m9Ep86oKXjFy2Eki9meqk3fqJxAQ7SrHU7YL3JaygvYkbmZJZknYR9q9U1iVCBk1YbQ4eEPayB6fDQ15Cok85Tu",
  "key20": "2SFvm2jQu94mFRaxENNrqt2T347RFc927koexLVE9QwLxbzBpfdkXhAzMpoJjnN2MDN3SgkcuWBkaWD5FYuXSSJZ",
  "key21": "L5cJFC4JnS3SeA1y4K2AXs3vM3FnwHSrL2Bx5vs7NTwYXTwQ7KdvKkWcAQtUi9CCPmsJbmtN5toZeeYN7dBzuKH",
  "key22": "n4VFjSAs4usssWXK7iPaZ5qzYcoqXoPBXerjYHUfQaBFwnksnQ2hE9BEDzhLyCXVA6cZdSQ8Mo5RkZn5NfBZjEM",
  "key23": "3EupHDSasi2XWvDnPmgqZGcamqdAuh3Q32zzPZYPYJYhB67H1gCENCnMKo7roMrqt4m1upevqd3K6HJVgAwve243",
  "key24": "3U2BXi2BEmSVL26UgNMRmQfYciBNmxjDSePHJNCxSKhErLQj9xkmg1YpW1PqCfXmgnw1sUKi6FygHnmVqhCFKQvL",
  "key25": "1SA1gyrkGSVaoVWNgv6j76qqefQ3vDQtYe6MyA5w8x6HfsuJ85yjFjZX8Lody5q89J1964bybu9Ym7Vyys2h8vi",
  "key26": "3uYCadgGR54Dx8Q2CLx3iXvVriVtDJ1Xh5qwJs4det9JoUEMN84xnSPvv31Br5KXwfDfto1vJXKRszEW15kptDHB",
  "key27": "491hXbQuN1zrqgCLr8rpU96YBXkZFtwpPCZw3gcT7qsDBGsZEYv5MppDqt1W4ZeB7VUznqVqZi4HZ9oUDkuVyDyi",
  "key28": "13Dng1ztwRKYnCfXUSCzbtMu51FBPAN3vAExmJb2G6dBS6i78KgEmQAKADep2nwuDj35iEN33ifzoVtfbXwAaHC",
  "key29": "5L2N1sfMJrmHfPmjL4iWLSooWCoi4Bor2JoGLycNEqmvkzwVk1xXE13G9yvSVa2QH1Ukyy7N5baDmMRdTKnA7xGF",
  "key30": "56Z5VXr7Cf92HGmmGf3uuYQrKRfNv8SSGqKgxn5cqyMgUV9KDjxjjhpeLYuY1zzZ2qXMQjGn6PShaNanKKXcRVjK",
  "key31": "5PJoq9oUz4hDUa4mvsFbuPbmjrAyuAjXmyi5uU6yWc6iJ4CvxrrkUGrWPxNNfK5iHYJu2tqyyEqpSDZJ3dAHzbcj",
  "key32": "gwiJEYUxDbnpBkwrgS4vv9A2G8qZYdJSbnoBjDXb4rFeB377FKyvGSZVVAL7cc5qhmms5CBMcuBzqT1JF7wBPNj",
  "key33": "5qrMcQKG4mBcvU6ThgXbXkhrDXfKWRkLPkvzjatXnj1tXDNng9AvKM7yLKSnX1zJuFEpPBtrFPXgp1PcUJA41f94",
  "key34": "2fyDu3ZTGK9HBsGmZAhdebxie2b5Gs9QNyPd5CCJJkxrEb9bbNye3fcUuNJt74YJ58Z7wL32BrNpQk6nigv4ZT7J",
  "key35": "hNjzmuvuUoVKFCC6q5qLiiuM5wZAk6o9xpx4dTVQGAu96U5592reaJBhNFpRjfGdih2n4nEjAHNobyrd8szrLLg"
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
