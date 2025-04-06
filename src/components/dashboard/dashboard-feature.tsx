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
    "4TsW5wWG2hdW5eKz1nKEhHk6Tnh8VQeBNereU6HArmDA49wy4BfigYLrF6uTAbApbRktvt2dyCheEo7QDstBh4dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6ZGPJJyaQH4GSHm1E79RzvBXhEgKAuBeAXURgRkYiZf8S8GNd9smzVtwDitCrkEiLWmMbfy7JuAxP3tmwJMkUr",
  "key1": "v3NfHo97rcLXfdfNswiWvx1Aq1c77mcAjLmYUdGbXt4MRiwxk96vRqBeyCoN2K3jLhqMzkBAHHf8uoirVksELbM",
  "key2": "4PXNj3tZ9NC1zp4ULuNQzGZgfoedDkk8oZ8nxVBpWuiSwL2rRPjKpFkdoTxSzcgjG4ahDC9CDbwwEinmzdS53iQZ",
  "key3": "SkauKDXbT6AM1iUJPEtJXAAwzBDikcf6tU3pQjEhq81QC4VgNEkDTmH9bBe8NnK1yzuHQ9SH5HznjX2WKfyjCmE",
  "key4": "51qp2wnXcXQS1jURSq2gYX5U5CouRTvzcQRsq21n6RqLNJ7qrkCcqwyTYDHqrfesh9CRASUAnYj6ocQTNwio5FKx",
  "key5": "3U3KrYFf8wesm29juZR516vExAgZuzB66Gj6DWNpZnY7LNpA2x5Qx191CXFzM1SY4uBRguXDoBDd3zczevg18mF8",
  "key6": "2t4xReFjukedKNTRnq7RtXdXvYWqX13Cb3VnM7HkrEyoc4hoWX5dFBr9y7uS4vKc9BbjcQHsh8Nr3dRcGuDs17qL",
  "key7": "23CirQmamZqwYeUyBDu9jAoZ4B4o7VmXr3SP1AnJX6cyDKkYtVVqoaR1vHa1Pv32zLCVwbwDz6EQxSyHvxjeSyVJ",
  "key8": "3i4oGPAN7inayyxzFYi7mUSmM3eFb8sV8ZoskiqBHk1i3P3Npq5cELfbjiRN6hqA463U5ygKAQ81vx91FaiWvGVE",
  "key9": "MaRDaEzmZYpBvdBPuYKPY5pjHXL6ZF4bY8xPZ3WoXhnwVraBkCip4m3SxYLhLCZELkhjFFK5tBBgASh5NkAcG4u",
  "key10": "3ZkSmJ1gXsceWS96mH2Vvy2Bgw7FuiiAKe8y7SGnY8FsrdqouoaqGbdHtvam8Gtjpa8zjKRQXqqLHR7hnBTemwsk",
  "key11": "425ijdYsxAn6W9pnZpKanyuugZ5SDbS4v6jNujEDs19mU1CeLh1irKBsJurZAcyJ73X9Hitbr3FsUoMTVDazLSg2",
  "key12": "2sEi2WW9yq2q8LSh1sz6qhGH1jQrV3jkrUnVmqgEHBZaqzZviGAMr41XVebM4FsXM1r2EtzpTcqKSrNnvLSaWeZ",
  "key13": "2fff5QDHqJLxynrcNbkxqq4WG8MXKjGVzbREzu135vTPgT9DzamEc3AdaV6zu8AyYz9Yv8B6Bz7Wae5ZbqHv4Ax8",
  "key14": "57SQXCmzRjNgmahc4DVkJrKZz2m7FVArxDV2cLNHigGCsMB9nG7H7EoAZ1de7F6GSHUnQPEuRyDYoVHdGX4FMnEU",
  "key15": "45ueYtyjCk8EA7yPQifq3EJdrmkk3aMzxUUNPUqJfGsUrMi7nzhqGc78ACVr5mkTKaxiVvFjJGExmCHXY6J3GhEU",
  "key16": "3UCtZbUkSeaPt3hQAARCtFYUk5KDmixiKTf7zbhnULWH39VgRHySPmGN6HtcfC6Bc8a8PS24dGPpmXREZb8Mviai",
  "key17": "3AHJtqRjjQ4MBKrKxzZ18aFzjmC468dMYmd6acZWmhDxqCQyGBV5vhySxXLXm3SFNtbPbjd99QFbYf2MYTtLvX4g",
  "key18": "4goNM1sDPtu3WEL1nhqfCepCgLfdR79K6GCfrqRHW83XfzB2rj2KKtzhfgBzXaMeTe6Z7f1oq2ZCgPAaTcbHwc95",
  "key19": "2nGNjZMjUMdWmrdkSe7Smz24A12xhutyeJuQuLTT8SDcDroVcZJYYmPjWcv8wxuD7URhjHCqsD72mfXAqVAzgyT",
  "key20": "35UXiP3SdVtMDL99r7oUqJXp8bPycZY5ajAAF5w6nhBscimeC2Y6A4KwPNgfYhxPR6svTyWALBBQFX3yr6cW8xcD",
  "key21": "2Y7gP3EajRR4dFvWy9Up291fwSpDuGaG2TKgCrbZJtA45ejx78MSYBNDJyJtUF46XxjW15mQ12x4buA6HfC77Hy1",
  "key22": "43p2QBe33woBXy57BTd6Wk8CeiCnXutKVi8FLHf7pombLXNJJXDLFFNPLMmCwMSd13THgEBEgtTLoL19r61Hi5Mx",
  "key23": "3JbYEpZg6sjbH5VUVnUjwz2eKzmf8vTcSEtbXXHKTkHHNVjKMED3pRBZiWdkDdPNz6sZBion6XNVgpg8Eo1vxsjJ",
  "key24": "63Ynb2yi3WSfv44tqk7Ra98PeMTY3Fy6jAiqnzCQaQmnNMbQcsPrUz5kTTZnz2SScpEF7DqdQnVirKZayBMZCucW",
  "key25": "cJgWqeQCSnrgfjQfbMYdAFzMYgSvADELkxj3M58fNo9Kc55p2swvSFEqF1NAcrHbeuBGFVicLCmHjFQED2FPUVQ",
  "key26": "49dsd7qwX8ZAi84KArmFbJuutk5VfFDaGWfjASoNqfywZP3vscbeVTxGdB2Ljw2nPpajiftH2mspmgY6g5ZhWXaS",
  "key27": "Yj5SFtKsbqB1hzkF9VhkEa7gbimDEWfP7SEVCbNPsUoGi2wBriC6Lwc5DrorikLDMAZAjDc25BVZ1GbjWADEMW1",
  "key28": "4gGyye3459hKpBZAHHpZTRfRPPUSS5bav2bEvBRmCeg27vRsNoyW12ASqDSgaqy9RRsdHLYcwiqGuu1qNLk3WjkZ",
  "key29": "37QhBQUCvYSoDF8m5ioGHtHAmpnK248xXPYTVwXYGzgTyhFqd2ATdYr9GePNTcaJNfxDcNDayCTUpGNB1Fxfax2b",
  "key30": "3vis6wyYazLYhHFEADsBun4TLzmrn5ivciEskdxXcaABqpzhLz2hVrfFT9WVVQd5YM1pzNQKeXZV2hp4X1BPga1j",
  "key31": "3yzFsz4s2tv9pWVgX9jitKfYLvapW2S2iMaGBoFGVuC7tE2CYdsmezkFUowHH7Ub58WZXNVLNXrMtiYsVqhhPnmh"
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
