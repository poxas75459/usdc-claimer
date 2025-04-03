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
    "48PBrgL7ipjB8nF1MvnFWBjxLH1rgaoQ1EXhUR57zccnArLCfXM69LyqkRH2Rko4eqntfd2iZAfURQr72Dx1uMTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPfYqs5ZXrJDA8wWAHQweFYQP2AoYKKRitRkQ5pD99CKYiVCnCcRhSMC2tvCWwynzXGzuBN51hddP8BCZF2vuH8",
  "key1": "4PAKcUcXyNv8uFu9X4yHWkwCLGzqRjQ8ShfgJZs5wdoqBRXupcdZgZafKoYMbP56jiamcngvVGJFrEWUtde1Zse9",
  "key2": "2qnBNH5BWRQ4vTbD3vr3TQTgNJ5Nd8RctCqfaqtbxpXfKWaoo8HdGoE7iovMr8zJecHJ3tk7TVEuVenwxXGmzvfA",
  "key3": "2pxVqX3LTfJwGhgAJLdwph58ruuhn6RJR4oPxfACh6skpUV8Q1jsSttpvAXEpqvCqCSLiq7h3rVq3zjvmiDuSZKJ",
  "key4": "3bGsp6proXw1aQjeDsU15AttKT3yNBKy85tGH7xTBkvfHr7bJb35zb2WuhdC3traotcfXZhF7GoYRNPsaZCvFYw",
  "key5": "4ugzqbirV1P6dRgsW7xraVW7cyE6FADLE4ViV5HU6zDZE2vHuk6fN8wQ9W2ixc4rfbxraTckugzkgEjQ8aZSVNXQ",
  "key6": "4D72hAqPRaKamsj6RdnjxGiNLpey2rf2n7kqc4JsgTY9gZEKpGswzvY2wZf3EwhD1B37kfPkkEZPTjJ77whqofcw",
  "key7": "36GvXqu5cJLe77Hk9gzzZKfV1hDu5ZuKaMoqRQLpG5KepzWm2GVULqyzTFBAVxLmWsCx6ogeV51busq2DPo3mjZb",
  "key8": "2cm1TB8d4DiaxonwQnP45GrkybGbSC8jzrdL6U71ZjF18ic3WvipzMKiwWKH8uk6vFqbZwF9DHTaAio8EuBcQZSk",
  "key9": "2j48iWUVVgUDsrsfRcjdzK1T9hyG5yxajom9HDGSZXiXMyfGh5N4ePU6JkNjQSy2PMpE8xViEhgdmSucsHraSi87",
  "key10": "jim87Qj5s5mR649bP5HGeLGcnMF3rFzQ5NQhSzZSpQwnGdek8FsYUj2yeDbXweRKPSixruKDwg3p5j5c1u8bdzs",
  "key11": "3gqUfXGBvq5zQ4jfvdkVSM7nBs3vxGstF99ZKErVhZcjts5Kxk1BeqVaF9Lqk5mz8pvT86SnfcLJ3q4TwH3gmTMs",
  "key12": "T7vnuGvHxKGNARcskJBAbNqDuhG8UQxx73yy2NDVfXDyaTrBXzJqdQWBZZY5JtCV7oPUYY4dGteJ8DAZQcF2q5p",
  "key13": "5JgQdBYR5bVCC2XgDHBLWqyt6V2Na6AeNQ2pzQvuXfdHvbV6M6CwQzkMJ5g1rakt33JShvLS83WBpiB34Ng4wPbG",
  "key14": "23w6VkLLNsVLunx69i9jCerfzYuHsyVu9sptbFBvzDk1QDyZBRFBhEECREpLwa8e6TLx1ZYc6KBjck9d89sAwVkZ",
  "key15": "2KH3pnwTkhLHMu28VKbURFzEDsggbhPNw6mXHUT1M9MZrpmWCARUv2WLc5CzfArc1A8YDQbq3vdwrHkpeQr9zy12",
  "key16": "4XBaT9Gwz8tUJN4QwHqhxfdS7ddET1zE4erzDdCVqaBndyVNheqAE66FbeaQwD68RtScYv7UPXPbd8V7wRKuFQ2L",
  "key17": "gTm2UKcV3kpkAnfZagKHyiBntvcaLgm33SJJRJSaLGiFgxbAqwHEmdv3eH8szs14ZpokJyHewAFT3Ye9SkxqBax",
  "key18": "2gq4XjnCspXHosX6b73xvjk2Ap9GyeN2AVDawS5WPmjChWeRxvQ5imae3sH1uPt66A9pxFZr9pvNa11fL8xY2Zph",
  "key19": "5jYhQkNFGLUkEakpEpVTQG1CMvegRjDG2tqKU4GXht3GKsqMGWkeBwTw6JeH7utZeMyh7h5ScdwcMrd1hdapUJut",
  "key20": "4qrs3Y4YMxqGAZD8zyUnqzGobJ8qRojTwwBNgBA3dudr8AM5L3RksKDW6zfHWuzFsL9ixtyDi4wpLNicu2bJhUaV",
  "key21": "2kUUyN6c5Yg9tLkcgkS9Hb3kwePras3FVDReCWK7fTBiVtsyJU8JsmCqrq2416jjbonNADShm1Z82Nt133H4yaQB",
  "key22": "5Gw8aLRmuNNiaXwL2vef7bic2dEHyP2im9UrK6M3a4VpLjByU5b13ao6idAhiDDgH2KYNuakWdWcLS2rP5uAV3c6",
  "key23": "HKbP5xfM44tovJuGMmsJ2AXqxGyMjaWtB27NEfVBEA66qkA22PmMsX4xGWEworgHNQbEtV4D5ZUiiRJF7BziyZN",
  "key24": "63uhD7L8LE1YmSHJZ3AFizQ6SGk3oigtC2mmQR9BGneXcAQJQP5GWNTW19tdginyqRFARsamgwMUoD97VeEAzBFe",
  "key25": "3VYWNAwvYycJHCtckgAPcVU4pQF8wCgqtuABCoP1AJvNsAagENrc3yczJ47nYh9NRhHyXogM9uuYAmoLsC7s5C1M",
  "key26": "4XHMJoW3WaN412yqiXxGXF7GTSNMEWbamgARmPRQuiLVPsjjaQ7pfvnULpDaf7Jh7xdqsD1HtkNiwoJ2ZQhp9DR5",
  "key27": "32XvtEdiytx33aPqS34G4YUC3TShtwdS4FgHjNjSuuFoPAyKyeXX1au5wzndcBKryvxLxUpGFgXya2dfDQL9a94i",
  "key28": "X9ghLAoxtRNhZ2aQXMf5HH9iNQMvaCXDnPq8ZFwARNqAxSYE9p3f9jZp6LM4bP6h522HGzVbjT3KsKQH6oRQtPD",
  "key29": "3br6Zc7uQLteYzXorczSzE9CE5c5ZaGg2EywaJJfMQ7d5ZEuqaX26FUPKwmGXNA3zMAKitjhLchZRbb2WYBhSj6o",
  "key30": "51CKfCgS1w9Pt3ETScxUwhT9JRUubPucaDScJPxFtQdzc8QN6cfwDmHg125JKEZDs9Qw2kePbQgPpxNhdDbGRPUw",
  "key31": "3xLieSw7w2A3KV85UZu5DhN3t5zQ37pz5r69mmK6e64kExezgz3mekdcwYUN6uwatfw5uxzWGLB4yhMzE8YYo274",
  "key32": "3kGRHTPfdEcf1UcS5yJfxYo5gfw9y9kSzbyABp37fnAWpzhUYPRLtDXRewXg53QDY3Mw7PRwxbE48NZbLVjkVVMG",
  "key33": "3uZ8rzznWfNThe3WRL9jt1HDHvybH4VXXoPrUMhKuDtiDNZ51ejfG1zGYUT3UDBeq6AcXNUSu1pCVAw6ehbyxfYE",
  "key34": "2ixgSzzkUecgEP46z9sE1Bxt8q4wj3xRS5v5Af3K4k77Zg5afUu1oDLMHonKos5BS32jXxtbjQrACou7Y1QEn3tA",
  "key35": "oKGDqjVWbzeay9A3XTw6vknNEtqT4ibriczJ9oNcPjqawvKLdzs86K54vcH7KWLFHjz45QwzZdTwfG5nrmJdCPP",
  "key36": "2BQoX2MbVjtabpRWKZhkNzDVr34u4z5fYX47yRKKn6Y3zvKbA8U2SwM3Av66yVpjENG2TsgJRbsxxvM6YKQSJoFn",
  "key37": "3Ye3Jam8XMe15R5mRbc5VCaJkRnrFAbfXS3WJh2VetgsjMPrcfZszJZqv3y8zTUCSdzeUAw5FRToqjhX2jW1bjjc"
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
