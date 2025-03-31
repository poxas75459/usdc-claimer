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
    "4jmehzngcmxYHSkuKUgH56dcbSezC9vV4jJtMSw2HDReQXnj36Lwy8CkaD2Mcqg9AMHtq2GFwmLu81PSXuqQQwTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pW7bE2gn78tDJXwEyabmCBPsQaaoE6XMFGBEKyvJCofvP1RT1Dd5foJ8QbHC1KsHoNkpA9UgCtMphD6fKrxC2GT",
  "key1": "2LUZXCRPHy2eChgskjn3eymTmru7JzV2VTpKHTGmp6MPNqRyECcnDQecYDK4oN9jrzNL76fkyMWzqFMQRXJiHpt9",
  "key2": "64tTG7m1aVEiomtEMDnpBgXQrgDQW4T2FF1Nnbi5VzCKD4BQsFcUqtiGgJ5zBvAwNUDLnWEzVDnwxWet8GBwJ1Kb",
  "key3": "2GUbf27zJFXRZu7ujHPbDMqFMXbbiz2pGLTe7w7icAr6Pfxh3f2Wpyh9GxtkgmbPSV8LhdgsAxnpyR8msxT6GDFS",
  "key4": "Pu2BxqNgmH4dXAsDE7b2edheRT3awnSp6dM7BSx2YE3egJw6338cAGmAGdegjoPSLDyJhTDG1dmxvVZGgLXf7qJ",
  "key5": "5G4X343iyBGueBkmHiAhmZnLQ6W1Ud6wYeUjBzeCsvbGLFKE6Fm3KAF784185hmNhTHJTFmJ3dcz4WsntVLVGjhn",
  "key6": "TT6jKUcycW8qxveQWiMz4c8gdJ2tRCCZzGEshPgHzfGeTy7JRz5qX8wcKWjtWWdQUovXAXiqkDt7radURGfQkfW",
  "key7": "3Px4WGipqqtSjchdADgqosFNy1LaoEYvG2XbmJJKQmdKT7ybqkzxZiEKB9GWEygTJYRE2Wdfx29j5CvUfaRnsed2",
  "key8": "v3V7Xz8gbvVA92XaGcdVCvoRH6Bry5HRiuRD8F7KF1Ty21qFC2cTumaQSBnJBN3Eezycn4hTX5w364dkJCSTbQ3",
  "key9": "1gNMvJxpE6Mad31LBrAnzStaqDrWhq19pqYTzCwAxwJFHriLkeXkKq6NTzmUTrBYZ9ZdEGYBVBqrfJjdMSoRMAm",
  "key10": "249dbX6K3zA5EG9W3nkWy6Jdcvwx1LJ7f4cB6KUTkoicRCaMz81D89xWfVLQ7WGZhdKcnAd1Wuun2WHtUibMikRP",
  "key11": "4LRi9v6VadQV2RvsJQksFECauKP7CpNxsuzL1yQgGjjib6AdeT1tEm2BjpUku7DDuMdmkAgkSHqR5EmSqqbqucCm",
  "key12": "5AdF7ZqrsSjD2HVWmudbxYgpeEtcWwGKLybytqNmZWBdor1UbjBEgskLUPUimMhJsB9x1khis3qTJS9c1zK1D5Vb",
  "key13": "3Ymg54q9pMXJZaAuNitxA349KkjuDRFbdSbcX318NS7bkb568776wDE7M9ddHryLVuzWQ9fJCrTtWBfLzmoQQa9d",
  "key14": "3sTEHDMcqF9YcwD3xGf2dqvrGWGvyirXfSBNWRYujTdhRXhL6yvc2vbGmxtdDakJaiS5ukFYNFxX41FBFehC2RDs",
  "key15": "2tsnQj52uETweYtM3zkLmTeHraGBBHfvTvVECPvJ7W6ST4MhwUx2trpTTDMTPTUK3DTcRa4KoQpyFTneFBC1VJjV",
  "key16": "gaceBoGkr84wZWTshdNrUEm74FaBEbgocLhbHJ18aVeF9N41TS216ypYcpwHp7FNK9jW2pauzaDJJyox96Fsqe2",
  "key17": "4ZJdnCvFNuBcL3yAFoXK3ZtBu4A1uSEcuUf6d2kNUFbDKNEZCJSRmmBoaECSnDQ4TkwkLLiJ5UDievDuY4Xk1fy2",
  "key18": "TocdqkwjyT87fGMBBnAPhMLaf5rVzqd2mCKV4idS6x1HuHz82iuqcwvMWmf5CvVwMzVvzHSGH7CqPuXrCpXCpWX",
  "key19": "4xDuka6ZwpCUA6sQ5AQ5rrpKzLxKv4jwD7Y6cwu47iyd4HXgVfnsopwLJG8n9RRLsjis4NzibrThAfNdmg9BvtSR",
  "key20": "4f3vdX9myBX2ankG9RKvJ1yxgLfY9eFVcFD8sjVWJU8vbXAgpY2wq7fuKZaSJiLVorg8WwnutT1gjUbG1vJy8g7C",
  "key21": "5oXsphKkoKEfxkWf8wWxopRP7aPYJcoXhkcwiPWVgGsZK9ZJWzJ2hZe5n6hxNPtFEfBRCCAWJK3xN1NY2uuRdany",
  "key22": "2YmE28AVqMP5RoyNgGZbERMsFGQAPbFWJHyuwYra3YUzbvqZorjzfSFXw7Yt7P88KJih71cMfSg7k8DGAwbsLRny",
  "key23": "5RhXRERNUFY1ctsR5X3aoVMjrpwissAp968PFmp7MpdiWbEa18bss7uZKmVkd5nywvtrJ4SvtbaQpsvVqhG8mmjq",
  "key24": "5Zyi99FwAt8sS7WhP5VH5X7pXmGEqmd5bwEP7kSCWZzhVywx3JWZEaKrDPEactKUtt6t4oBmJmMsWfxueHZniXxD",
  "key25": "3eFHknKiBYsPFFLZpTzZxwcGdPSJWM54sQKvo9LtPYir9wjoyBxFYGygjHrV2b3TgoQDTzuKRxhnarAymjpD5j5V",
  "key26": "5qwnWkHYvgP9zfSXqdgdTp8wWCMGQ23L4dCxzp4Q6D1sz6R5dSptVrLNqXwVhE1Cby8UVq9fbXc2bVtfFnvpzw7j",
  "key27": "A4mxF8SWPh1sc1GLZaX3wbQcYKFNDHbSNXC7cg3JyMkhnaqzv1X3xPax4TTU8xeNrRiCoQLiqzyT2z6W8AphCCN",
  "key28": "ZYWfgJUazDvmq2AtZsz64DYamXqMNaRXXH3F9xCaZ6bR3XTLBaxkbLVsd4iavpg9Dr9uCpRVGkKU7NdQDrDjjeu",
  "key29": "2qGz3bzZ9qX2yhtWZmvw2ybDbqRmk5za8rySm2YFzKfvJHUKLuoANkjR9b8wBkxGHTJjWAxJ7UxbFnhw6ts1Wb4H",
  "key30": "2Pq6YaRxNAGsTbgyJt2Kqfy1zBsLcvQ5AkYmE4KJMpjtzBBeZe4TUo5shzTQUm3Kk51MMEEBKnwknX9g2fzqBTx6",
  "key31": "2QGdBEfzpYR8aJfga9FQX4WRyf8BPzVBGzjxY1yQWkbF4TEcE5CRvSmcTFCAUSZ5WMDrB1Uomb63epxWhVvuGADy",
  "key32": "5MnZZ96piCjAAM4ftEKD9d2zjbqfsoovEcgNtxmytPa92xRrLaRWca35iPFb1nvbYz873sk6AfDn6ioeH2xyB7qq",
  "key33": "2Hu3bAcWDPwaMeL8yxdooT18B27L6C6wBYBeoggyfcQkD5q35hxAvyCUcURe2ys6Q5LxgJvt4esAMhVv4Vy73wwU",
  "key34": "kCjnbmnP6Usc7cBDR48Lw2qgPiuPDYT3nsWbviyqGb1gVN18cqfEWozBQwbw36Z1etmFDkNbiz9UV7s6LTm6RbM"
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
