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
    "5JQJxjRK71r7PMUKrzJLKUpAMfcnSkK7pcnKxB9s8JmbNW78AX12wbXcoEzksZiYV6BP1GqCeevs8t9pYfg37cZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ng3XkYMxm2VB81c8ZL6a4dAvX9soQFmtZfvke1zrSgtScYLMWZMtJ1f79hhjQJQ693svpwyNWiJqYVSTB1bzbqM",
  "key1": "67KJU15ig19D2raYHpvkVykGwvMewvvNqKUMx2ZqJea7Dg67N7ypjCc78s72biyb2NCkP5shqRb5utYhnPLFLqvw",
  "key2": "4Z8F4P2H9aWsXw7ojRnct6a26YyatPvBq4hcZocLCTpNHSYNxmPP1hcaLdDWJokR8Wwg8gbocf9MrDFKFJgudFq2",
  "key3": "4XkioQKpUDtEjLydG3GDrBUB4MhaNcW1ATyn89A4fV7DKZduYWVaErf1d5PToRE3sBSajy1zit5hVtTozFjcywQK",
  "key4": "F2PACeb88D4K9yLciFJtiDm3mkvAcuU4NPjwL2y5EFWb8z11sm2dMMMEJggfJLuXDpoB37QUABNBNy37Q1Go6gn",
  "key5": "G5oHsbCUh54R5GVhQKWR58YfV3umKkLB3rVEKWDwgdiPpJbC7mD7L6Ag5F545vN2VMFzXGSKQhyZkSAPVfo629N",
  "key6": "5XQroWA6zd1Pzxu3EB7DkpoUyCPHksLFw32sZpF7vwJao7VHMsi4cvcSeMoye7UMccDo7Th1jFsj8Jpytqc78jdt",
  "key7": "5ydUuRqipX3kGXSnw2fb2a5F2BuXmRnrumPHFfuywaqG1vVfdKqwdcn8zS6yxuKtMjEooBkGXVF2jGY5XQbHQR6i",
  "key8": "4ugJFBAEYzUYbSU7FzqXkkkPrpeYhzbpCJ4hGQ2VRCjBad8c1JFsfZw6U8H8TC9QFoNJzadS2AJq94cfjzwLxQd1",
  "key9": "3DoEvjUUkwHNFDDW6vWEdNY34tjcbN5E9QfgQ3aepFwuJGWN3YzuwamaeVQWERPqvCst4GbwZ5JJXL6pvWvRhRZQ",
  "key10": "24UFA38vUMUuHqTbAzsZLZ2uuy6qBYuu15jFHsYwH9H3VKqKVwMY8c7cfViaZYeMV9PnR6oufHBo5gXFUomE16wm",
  "key11": "4LDfmk2qBKmPQsT5riPq3y2roof5kmM11YjqRtxR87sKWhxFv62aGi1fBJXpJo3dWMbwATSAXuxkpgcaA2s3RKMS",
  "key12": "FHqh1N3yTzjRhxWj1x46t8tUeB7opvDRR7prNUi5mWfKDzb5fawRVzVM5iPkn6VFRbhvEoTiRgEYLytFkK1QAQQ",
  "key13": "5U8NdrUus35hwMiaULPSuzTJyvSCoFw7jX5iBANHkKGK8KZkq2FujaQaSJUZ1k77DN9Jvy8YLuBCrstrZxagzsG3",
  "key14": "k6XnZzzjuPVxfiaTaaKRonyN2QV66c2VUH2ErUUPMM2NfUGvoyXvjUKxfSvryLQNHm3tnbmdxQVjN1atKD46x6m",
  "key15": "3FGySVY6Ve6n1TQK2XT5MCo6FhyCNAkMYozPFpstjvCwN6CtdRf9FsAWuQ7JJBz4EVipba9eNWaVf2D7uDcvaj3E",
  "key16": "42Se3bZsFMd4CYenaHEPiBhJ2YcAdkq4e4XcuVMGoPEU4Wy1NPusFUpFHnP2hkjiZrBUinJTSWcUGRxd8DNztpeR",
  "key17": "3HC2dZgsFtYkwEPaB1nkNXHQzN5fpiLekWSQmjgRysCW54SiX4UeAAmzxN11b7QVGov6okCgx6YvzKoRVDpwuDVy",
  "key18": "2nNyzRtseiBbKu3ufcm9bWC7FeNmUvQm5dwccVmsdr5QfWyVR46UxCXdaGm7GonFoNB4jYCbHr2ZDcsaVCVCAUV6",
  "key19": "5qnr8qtDtG3g3uGNgdcTccZXdafzm969PxPVpSEegoYPuqtjue8ryNQFinGJNZwT5Q2HqNiTsWhXQRsF5RoTBHEA",
  "key20": "23udVuYnYNKGJyasJW31R6rRV8JQS7mPkWAUCnisiZxqjA4Vvf4wAUqVoPZJxy8MBVhsASz5NH3qJdKz6co5VgAg",
  "key21": "4jYHumcMQK6xh8hmAcwrBjQCc8LUNXt2yhThLVp5PFQfLTLLKKvgaDwGpjgjdtgHqjACMKTrpZbZzkUvvDBpAqHf",
  "key22": "5BH3sgfySJ6xPKyy6AaHyNPdnBqmFdQj4GfUd7Tjh1VckkMX6T87g6w8a1BYVAmUVMoxLfh6iudYtqAq41nRu2VH",
  "key23": "52YRFSZmm39Tk7NJtxa1g53YYakzaRpvp4XchrCqU2iTn51ed76JZB5THvghLhQmjTqSLagoKhrxDdvLDT5cw6rg",
  "key24": "irYGFLjv1ML8v9tZsHShVNWdR3UdoxLbEuouX8cBreTyw4aTp9MHESJTvZqJuGYYBhrpXD8Hk3uRoQJEHyWXaPh",
  "key25": "4yEYPBUJxvHe8XyQ7JFrsgYB9g74kBwLtcn7dABf1kdD9jrBDnG6bX4223p44WzeqHJ65JdRVRopEuBrBY6EQGMv",
  "key26": "cUzwPWBEsuMRgnRXRSuKNQhKAkK9bvhAfR5a9PyEx347cNxSDPqTskr5foPCMqsWUNj7MPLGLEoUMe3ESdf1iUv",
  "key27": "wPrSLtCQF2ASdKLFNUYjyfvYKUeSyYCsqnwKpuQ9Uch3K117W37i95hxwmemnvN1qsAKV5FhXLMEEA1oLdEZjNe",
  "key28": "2seEQWdSoy4hLujsESPX4oxjKVnr2V3aUkReYQbm5EbvK5rETrCCwF6Pj3B1geiBDBj3UDNyFYmZA14yEEJwBN8u",
  "key29": "VZejHFHY4xesgd6kKVdPxrQbDZgVFN1NFNep3fvaLkAhKxayPZveeDiuVRrZg3AbB7MF4g9Yd2RJLnrR6pmwM2k",
  "key30": "4zueY3nxwekwtXfZtBZravSQNTV69QoGu2kunfC1LpjMaKuTxYGqLcFUQj1crCqToN6ZsrXDux15PstBmXcZZw5A",
  "key31": "ztw5rhaqeX2vbpiEoDfTYNLQHXGjvPG1LHQkg4cAx5CUeBvWjxBXSS76NiUdg4VrzmRv1hCTKnpvSPKtTCT4Ntw",
  "key32": "hYjzD31Z2antnABRHMjaLV15eb86P362m4dLYxm5KsoGR59HnLZTeGDbgEbGCSQKe5WicSjb9C7rD28vLwQs8YU",
  "key33": "4TbQa98khFbmd8Ga1VFKMuUPnjHK48Qhmt1B6taDVehKqLBaW47LtnJMXSFG1jBamjRJN1v7E7aUQ7heMXPitp2k",
  "key34": "24R7xUV5TjfvWSyEmthaE8LEnzsVh7JEjJyy2y9j4m9E5bankvY6ZJmxFUGbnTc19tTomBkJ26huQsAYpxNMyKKW",
  "key35": "4AnKCVfW8FTCHaHVQMYexpQoviEZvTZAz27YEDWzYvK3RaA2pPQCPeM6oQuZ6mhdhPAwG2r3LiUMTBXQ8wRU4kPA"
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
