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
    "3bFRHXfSbunPtGW3NsnPZzDFKjyM7BccMyut6WG7qLiDNSsNDGMpaynhnRdj3ERiBf1bFeYgqqTeg61pgtAC8VU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTg9kqwTi2dRy7q565vrY84Z99V4rR36Vxnz8ERtam75svGGHDhPigWzQyq5p62Bm1EUMDiJsikHmTghwh3QYVX",
  "key1": "4LRn2oRc9zLrhUK3rAYryW1k1U1PMC85HMLrNFZfov1BMDYXev48GhuRXq9CM7UoVSFbnuJXJ4Q6xDSrrhZzALwh",
  "key2": "2QmtE7Ckjk4rpk1fRVj4rzuxnmmdjoS9jwvT5QiUg1NToqwv8N5Xsf2JuJFNyr2wDj7niuF3f5uC9J8TFcaFbo6Q",
  "key3": "3SrGgnkjqyUj23QW3pEGYSmzFij2gDDZx23PKAYeiiJDRpicpTLyba39dBbH2SdR3Z9eq51uuCLVHYferxfUt6CE",
  "key4": "2C8V3XC6EuXA2vMhdAiySUR6qSZwDGs2w7tLiNPLFbpTU4q2JNQ4anLmAHGzSNLZnv91jnSSLjMDYvCu7qEex8Zn",
  "key5": "Dg53dH8cUHGgonCokuWqyjiDcQaFuLcnhZTTftYNSB4AcdcXjhWH4LWh8RK5yVJJShiFsF25A61schZvqLTyT7d",
  "key6": "3rXBwZMS6w4k94NAJKfG2hdE7FbzKmBbc8sZPsaYDJkzoBZNhAQFRKMv4oc4zYT1cFPuuYMMMEmoo867o8HTgzj7",
  "key7": "JfdrkVP1r4grzfQyXLTv5fRLhYWBGycJaCBnn3ErNQTrAffzNUn5hL6KSAZrJpiJt63BNshsPfjvB8sNGX6Zx13",
  "key8": "vvZ4BVx56f1frShkKwgZkRMM211ytJUYwNu4RWVorQ9YhXFP3zCtDqQ6dpmRQnMbXjNQh66MHpRHGFrSpMWgnBF",
  "key9": "49k7AzfoLSAEUbu4qaFt3crbKZqS73zgtzHqRDVv5EWjv9LZGJ8c7GESHwU2ahCPtfHzyA1h4geWPD7gZPGTegtP",
  "key10": "5xcKuT1cB78vBwComdQuQQa2tNU5eBj1o6hgZY35ne3Ph5AkjJAyriGC9GuRx2vehEKWwRicSnsi3HxSejoDGzio",
  "key11": "2uB8SowemaUp2FnUA9nz2871A1DXdgGdQRyZ4nFaqncjSm92VbDZPeM9MGGaKB36c6v4cPHSBAnj5oaqFnc5DHXG",
  "key12": "4QNG6fy1PkbouUAyBJcT7pUb9PeMB4XaWa752LfnWWB8so6yKdpUonvLaimjgE6UvgwLAuEMf7rxW23i4BHzw5DT",
  "key13": "571SSqH64Du6VkvvwPFfVWtTvnpg8ThwiEzCKoDdja9TwHyuo3yrVs2pstWVXuT5JvmjkZCvzVbk2KmbLYz5QHUd",
  "key14": "4xTSvZpA87bvpMtFvzzCwqkvbW4b6y35ocSWzySVpG62r1Fq3W2JvnhXdhZjzor397nHttohyZkguPyEhM7QfeA9",
  "key15": "2YVHVmAy7rbSfRNqpAMbQhM5Mo1TftVhb3zLVAwn5sJWYiCzvSdsNuyyQk8Xz8Mw1KVwZC2rSThrSiJC4wphhpts",
  "key16": "zwi4RE49qs8XGBdPowPeTi2mwWks16wAhv1b1LKuNJtcEA8BHCQtxEC8pdbWgkeoDDUaUbgir1VZkjMdAi1kcZ2",
  "key17": "5XL1PgBm8A65HTd6HiJ1wwuENJ7FUAJQkLmLopnXhDUramzDV2wL9tfaMJNku3k57Vmq9L6DCuPy6dvih68D5T2r",
  "key18": "5yUEV3H6qSQh3YA35TBAmjHxSv2Z8FBWhxGBkZ5RGCcUR8Fq6Hoetf6RE9JrSUFeKFKimqmNf9tGd1oMoeUp76kS",
  "key19": "3gpCZZoGBPZmuRbY2kYyit4gexxBYgjRrU7S3de1fWcjdkyJq4S65HvVpZZVpDrV1H8CzxZ2D5zaqzVmSupVaKs2",
  "key20": "2C1y14jCEPN8os6KAKHeTUotWvSbxzG1GWGpnAnJkJrr1Hh9nuNkG1bVbtPWWpCKzBc3QPQX1FibSqB5EzRyzCuw",
  "key21": "5xCtDUAEJVnQYPhfyU9FDVAB3hDkeZyJP4m2YGcQdAEuJwixudiQQHekKNki3TFZWLtnNXkCnVKcZ2XWBjNAZavQ",
  "key22": "5HLSczz2nQnDFRutZu3Bh5szfEAoWhyKF5jDLiroTGr8JRrAQGmdTw5KzQRHWbQBcdMxUiVJYvLqaJjnWAXAh3tM",
  "key23": "BFKx7oX3wwX7sLWRh1fmSqgedZmfF6dYKC9gzLTBEb5hFX7zoyKiswvCX4kuQZqwVuXS615tLNSPvEup2Zsgauk",
  "key24": "3TGHuBgs69Ep6PkWqyh1esxC3xofWqk5Q8EmpHeNPXwz5kLtiHwiMnrggQyg89mjGErftjiJ95EsJXL1bBHbbKgM",
  "key25": "5wph8bkxGmw1GYatcgRzY2L2P47AX64J4JmpNxwViao3v1YBw5Y9QyzKmer37XgrziNPQAB8An9YePntAF8L2162",
  "key26": "5cuBqTcPe4KDQCi76PS2dPymLJTtNeuDbbFYAb8KztgGGd8xq1aSeHDzDC9uzLB3fc3TMB2MMu1WYJedSx5jrhd6",
  "key27": "58sEDFSMf92oq3GRp6oey7c4ojmXu76RAejALXKdTm83xYur4PsWDquHTrnN3QmecSiQevcpyFmDNtREKcvh93E6",
  "key28": "mCExuE8Xc6YHmrmV1TSmMmDNhXMsoBdZsGWjeu3TZ3y8x8kFWvmvTziGi1uxRW4hk78SK5CNJax6dyJTzFdNR3G",
  "key29": "2F2CNhM7ExhVoZGCHmPGGNnousx51umS4QuoMrV9DFaHJV9JVUggT9GbWtCHb3GeMwEyoLNnSmPeAajNKP5mVNrQ",
  "key30": "3KzfELbE39KjVRwbDkpfKAUcG9uBw9fBgdpCVZWmpHvJx5wfBNKe14jgTS8abVVXtSjgV39SyuQorPPcNaJRmgDK",
  "key31": "37s1q35eom56D8qBfNAVDJcgq4uDogN1UpxkLEgMvUDvrQRLvspaWqUG968wN1LkbwL6m7VEL7UYWRLL9vuXU4PH",
  "key32": "5VMrqb8XkSXLcqWw6xEM1act3dZAFFixcG12KujNQLCsaZJQrGxpLdPh1tz5coH4N1QTQFjY8ENXXGBMjGMYbm24",
  "key33": "LQzhot6w4a52wF33tQJrwyn5zST7hHrwcdRU6JBmk4ac3N93XJkQCHo3KYFZFJvHjmegnjnzyf1Yc87Tx2WK8qu",
  "key34": "AFs65heqKUdMT6jNna4HQ1SYdgJgW9idKTKcobAY9ZtAmGZRP4m4wZ4oSEyNo58e6ffExKbwqiTSzvAnGU3Zmir",
  "key35": "3QKrWJo7AMPzKauN77yWbywXwpcW5DYWqcj39uJwVMy7KvpsZagf1dZLpPD2mhWCESqacstoh8YxyrZ3PXntWYPA",
  "key36": "4uZsqdRGdLsLGetY8nHqkWvFQ9bxhWHopk3rWXGKWYuhVs6V2UKa4UjfyFxajtFNt9zgkv9Xgxt7yVmmUTsAfiLC",
  "key37": "62tBdEKKMF7ajzj59jnFYqjmx5STQkgY8z3XyUxH9K2pybg2KCwQRxHAJ4Sj42m4YdGPrSisq2Am2KMkD9Pfvx1y",
  "key38": "5Y8CNx8KxiiewTpgkirSHJLiAsjVWj8KMYGvdYfwQVGmENsFrAydJfnNRYNHTKQmR9y9beeTG5GjjsgaG3y31ME3",
  "key39": "3VY2ReELe1rhAy3WcKy3YSWffd854biYpPmz5sKfHt7jSriCEUruB7wWrLoqKxZ8Ti8qqQvh4kSsj8DhvwTmL3fw"
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
