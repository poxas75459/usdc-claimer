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
    "5LVZuSFufUbTKXk2767ZX44FPFESvA7yPXYoSqFxidWaZ51wqWHckBVnQZmMZVSHjCXaGC4YTJRrDiL6fpazKwrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6Gn2yvwiNsWaqRpoKsrASWnnWCsvusPiJNb27XgJdsbAymdJbMAA6FjdA6jj5gZPzwtuBJyGPBrhbSvndUfk5c",
  "key1": "3UMj4YCyA2bk9KJ8mso88xQHT3JWwMaCcDcFjupPnhLiYfdEq2H8bgSZ3gXWNktykp7ybQvUZQwnjkU1Mn1C3nx4",
  "key2": "5szmNWQnfbBoNbrXNSC3Cyvf3NCbrccvwMRnwaem9nQPrjf74dKGkxegTnW2ZwvWVBzAv9BinRhQzxT4aPAiUZQR",
  "key3": "C5v831eb5o1Mx6QMY3PeNpBJnEfnKhNSfbyxH66bCsppNJkiU4LnDaLoRoVZMtwxLSotqG8aXxr2FeUBK8uxQKU",
  "key4": "5ZbgV444KeaGnMYghz3bhjS1nUBXrUzKEezixh9Lt8BWZMk372cB2DJ5fuZ63P3ZG5ES79D8fe5B63zoviJN9eiB",
  "key5": "3Ga21QFZ7Zvx29k8GcXyiMu9bWrjMhHY52hJkehUhr7S9AbWmwgiqz5bLg2SRumBYzmpHbSLuda8MxTcbZ5YKzAw",
  "key6": "npx9uCgqAfYypC18XpP9LJ7F2rbeXuZJ6QgPNhe2FCoCXi7njACCX9G2pZTeUKxnewpu1LGJqKZ2WqQ5De25bkY",
  "key7": "3mzxoLd5oygekQ2yfZonjooHANZjGUBG6zirC4TZgMKJjAg45LsdgmFXj39rc4iWj7gwUA1jz824kCdRRySRz8T9",
  "key8": "31KTtQfbrTt3J3szUEY7Duo4GaMYUG5uTL6TpUTjYFZ2d6ChZCF12gaPERhRxVSu29LNLiC9RPf62tS3trj9eaFF",
  "key9": "2RRiDpMYfMBaNHKjuKygMJmL6GWSCenBXw2bWNT1sr2v2xhA4MT1Bd1y6dXU8Vf7kBTxa47esLStfA2Yx7oTpD2P",
  "key10": "oTt6wBHHwLcudMHUy8QTBbui4HZZA1rsChCXWWwveQz3eTyWrku3KPj9CZoztj9qf98AG4Au3LR2DHSg86yrsRj",
  "key11": "aYuktzU83KDEPE5AFM46y7fbbN7gimz4zE21g1yPveY4cQsaNAoWMFcfGKYYmsDX4N36vPA78gDGxj4758Xm6ZC",
  "key12": "vugQN9WhLLn91K7ZW5RerqXnnJdzNPBwB6DiJfaTbE7XErM49dyaT98j2CP1ARBbPuVewfXDEckoq7xb2b9HSHx",
  "key13": "2NtqzsPZ1iwG4L3GNpinrkQ11g9ejfZwC8Up5jJ9q74564pEVKCN2fLxvqv5RfMmZK9UF15dNhS3Er75Z7NxpPnS",
  "key14": "4nUT9xVFDpbqzv6n94C19r7kqKonm4HDNUJrS9QwjCD7s8wCxTTSozz93Y5xLXdyaHwraQD7QZ6283yEnbAQNVpt",
  "key15": "4enLmybCRDhEZKNMM629MHRpdUmM5RpkbGKov9QE1eR4fhtuidy56xUKqmha9XfxQ1KCf1KMAaPervoBBG4fV5g6",
  "key16": "4iWP3VHVKmNyTBKFvWZp21KhefrJjELXuk5j2xAMt3pLMFVrE68MWuXYNX7gZu1NxaGV42xvHQE79FF7izkj5v6a",
  "key17": "4eQQKPiixFnGCJgbgWtKqdP6RJxNJ76eeJKxt2qHXY3EZpTXSJsCdATLL6HM6FJ9cUsPhVtjY4xydAnBQjaNrpo2",
  "key18": "2H4BCDPZJso29QboDBMK92vbL2fWQjHNiMdU698njUs7z5tYTAgVX6GPU9QR3DM6WcA6qKekfciw6vFACsxczsmG",
  "key19": "5xyFB9n55jZse6QaE3Um7kFrf1sZyc89RNTWhVE5z7AR4kasMsvUkv8Rb2YaytLJyrZq7GvM34Vw1VjNffcFDza4",
  "key20": "5BAsfwAnEVn4xFhLx33qviX7fijymXxDEnUynGqJy3WXDxxZYCdsUeTWUkvpuG2PFiisnpRxvW6Hye2FXaZUEKgo",
  "key21": "2zj4y9iP58H2R4VpLZj1tanrJUnJH5vdGVfb4i9jFqPHCvQBUE6GzQXX9sR22HVs3Bfk1gzukqDNdspWXVWgyAXP",
  "key22": "8e1KYQKWx1S6EFXadNyUqTgfXtCSQgyTrmfTDp3cBdXmGsCA9QsADNvp7zivzbhhpVLEZcaDMgX8kXNH2EfucX4",
  "key23": "2RNS1tXTSCMQPT7xWhZDaV1pX4KijyDJzjjayKpST85oQQSu6RChaLTLGfraLEhJFdRHZ3MsqsHnjM1iEnE4njRA",
  "key24": "asfyAyfW1vcy5wficRT55LhuUTLYEiuaWzcQAArpbnEuXmjK2z3Y1LHWCNiow2Wg3M3xRALxEciXnMgchtHDc65",
  "key25": "44BmesZeRRcyRuhgeGUYhC4NQeCeBt9gxQwSy2RUhvzBEckbSuMpo68zepESVa9x17iynA187uAYkeznoh6Ri9zJ",
  "key26": "47s8WKULAXvp69YwMGw4bq5Shw9d86AZaBvMwqLXwyXEb7t9N3bQfyQm2vkW9gSS3Nx9wTnqeKqRAUuVaE37pg13",
  "key27": "5caAVHYxdqMgHHm3W9uYxahBB2PXsaqn2HakkzMZv3E2L3Lip86ZJG5VRuzqMutyrnJjFwTQRhM4cLTcZrnkj8sF",
  "key28": "637tQshqT6yNz1kFMXxX3Gk5A7F7H5v7HTgdWapSF9ZbRFQpkcoGWg5483ZuWbQMW7zcH5JgBFYv7pfgY2YNTNva",
  "key29": "4oopgBSHUArDRocBAoLCgMcSJM3qSDUApr8wixK8nS9iKkac5GkUDsE7ar4PSwnNyMh9D1bS7vRGiAwp7zNW7c1h",
  "key30": "2FUzrEMpRSPDAegurZ8jkqLyyygP4N6QZkSgATddVTZSF8hpAK1btQq7vghRtPWZ9zfiZXPjDNfKK8grneVvWL96",
  "key31": "3sPxxmNwKJr2Y3FntbWy4Qs8vgMbHcwGLNSxcJeFce2rzZRPNYQR3RL7xCHtMNXF6Q2kNaRMdABqS9Kd7q3Kpwi7",
  "key32": "2vU8U6t7LCdevQYALTYDQUGCybRFU69hW6hF6hqvajywd6PcW6HjcMeTGAKWPMTTYwb5KU7mwtHR4tv1AxmiKX6e",
  "key33": "3oyc7KRAeJEALcegyastjpMNmjNEMcmk6DTYBqJe2gjRrqRCCbUR3eBeSRbUU8GgrHGC6qk7eRmKxWJvsDu7i93g",
  "key34": "2ZrwPP3i8kPppc5srwvynRTZ1DmyP1jEqHSjSudvBcqEr2LqJuvSWCYgSooYR4xHuBhWWgBF1Jw6muv8svop3yMk",
  "key35": "4EAFDBxR2Lb8qFKfUbriHCrWkj5DphtPU9UBpEiuD39aDaaHahpRjUjnUE4Q8PGXXUgd2qnj6NKwnCYiQzkVAiE7",
  "key36": "28C92ogXf3B3MEmJGZdxixnd8VN3oaunAKiHynsocXECxbZnLeYvRj1gZZTdNudV9jPjPtDThosYRUFBcJCebmG7",
  "key37": "5bb46Wmpp5W2K3fWiFtaTQm2zko6u2Ny1H4LAEawnrfwpKiSAecJMVaqXUoaHrj6x8aEGcHVc4KzbxLwcu1RSgCc",
  "key38": "4cGK9qoHkaY1RvDwGFLgzQP4TobkE98qqQmunzyuieKyox7ts8rKr5FLdMpgYDqcTCPDPhYTYzjNoNKUX1PAiTh2",
  "key39": "24AQfsoQxZRjiNBaoMiPZgPiwo1mJTDM3XfBtLDSzjG3v16ueezWMFv6E2tasr5p44GWKnQzxs5Zig1DdMgreLG3",
  "key40": "3RBLDJarRYbtuoCR5v7NZ64xTiVA2HhFHkTTtH9NGi5XrezfH1AKZUdRXzo4EeB7wXvfBoeCcaNEfZHdWVJ4YbyX",
  "key41": "ZQkEYsH4vVvnkbAs5tNHVgnRHGwVUndAnYJKDN1wL9ayvWSeshqJSzW6cEZg7asu93EsMAsheS3hN2Ns2iNpZ4m",
  "key42": "a2n65kbgHjMoPjhygLGyq4gLSTWCwhLr8xDZGQBkSCwHVJ48bUmnSfdfjRfudKddkZfzF3KwSmHaDWGSHm8W91A",
  "key43": "ghUjx7t3HgmxwYdCaXb2q6uasvcDAD7Be8TT2cMWKj37iKJuUcLerUPAcUBBpnYVRgn7NbTULFeBePgkfX6rvn8",
  "key44": "2BoFjVYH16DQm5RMkvvveQer9xYwbrBdHyU4UaLMNjbDgvgAPgZ91hwyQ45GjVQbb3M6kjrCqKVSv9fHVLY9Pfgq"
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
