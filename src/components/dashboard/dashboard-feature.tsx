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
    "5vyoPzbLJrRBfGY7DASaU6HWKsrS6T8gxfhAcVX18QDx8avFka2KZcSPAGeqeihfjAtKTFTRPqurhRtGj6mx1AkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpicXXFaLGKqTidHBEhJF39mfnW9yxY3TZ16TrGmaN5232PPyzgs4tYNFvPcQKm7okM9DZ7tGUHnbbPVSJjufar",
  "key1": "htDuv9b2w9g6pWWFtP928cbZLKrTSrTmZjx4fsjZjqUDbuSjSKafbjAU7zi1pGqLL2HhibRUj3qjCTSEiWpnH93",
  "key2": "3DanbpK9yDbsirDDZeqR7GzjD1GJKfRihH722VeuarFr7ZsUctTYevxWaYebymL7rcGSgititj2qNt7N1cjJf9g8",
  "key3": "K6AuTQibrrxBYVvd1EA6zDA2arKx71H5fj6PcTU4MVGkHpFQGpehdXpuUzaWzrt3vqRKzDWrcbjt1chLfzRV7tz",
  "key4": "2Eze7kqDMTtoG5KMvgaYH981s2QRKUciabLvfzyK6qHsHBe4EmDqrsmS2xLZoEeGp3RBW7a36j2cRMjirMNonn7L",
  "key5": "RFM7S5sCXfoWSyt9PCERRvKQb45x9Vp7dcvXw6iy7TnACWQnWUmYG2CrQohjhcZ3ENZf1sc92MNxkq432TNV7oD",
  "key6": "5BYeEzvuda8r15oG577SMFpzMk4xaTBWd5GhR5Z7cSXQA3Nyz6GdgDFvf8pZ78mz9kop6dUwm7x72X9YitnXiAwX",
  "key7": "584DQo7tPhBMenz6uHQFgEpoWpY1wAWAhtaSP2CxdytDUvvtiEAyX4oCUmfVUrDfGQYoSPZAmk1gyKZSS95oMGr",
  "key8": "5jDbfY4hf5sSGkabTNV1BspR3c4hAxhR9PKPpBhVrSxL72fRcrWjyBdBQP2NbaEJ4u9cvDUZPJRSDDwwWWP2GV3b",
  "key9": "2QMsKrMd9B7FVLSWfxUYJXCuU3kW5Tz6xxVEvFT5WfjHwvu7mh7eAnoMQJ5PCwhfHoyDHKY7evDNb46451MBScpD",
  "key10": "57s7tozR165wZKUvBaR8ZuswLYwx6eBsz6ivQQ3TNRmEV6MDs7pQHdfmqxpqHurP7cJKu8ZNcNi2ErbJaRooCEEm",
  "key11": "5HQSW5ZU6RcuSkn38NQS5cHe7thPqgDCUeRBtkxgaLLEqbgd9nrNZWbaRAkunoj1gD3xTqEywWsAxZokYwfvK5Ue",
  "key12": "5o2DucGzwgt93BCS2uAEbReFpMzVCuJqknvym5RAbLQpYSzvWahm3C2bEpyNvvNnUx6ZxYjvzdSETLyxLb1k3YyB",
  "key13": "Ux9qpobPhVwx3u7F3Db7txhjEyx1dspVFvQiKYam4ZBFQg7ygZieaUT1tf5mK5kZfNjdPC6MaV4X6xrJhmi67cX",
  "key14": "1DFg1nsifE5dKhi6h91KYpUPRWbWpuxoXTQodpYtLrrv5XnSie9vFqM3YXTq3nKdyvTKGVqB6iVtgQ6mqHX57rE",
  "key15": "2FbCBhi1FpJF8ZmdeAiGF3SHuohSqSTEhuzMaUSADXMFKfLZByxEqWy8LWybiZTNcC5E98eoGxi5iep9624rPofB",
  "key16": "4CSTkoEk9fVHyvPNvxCeULgDqNUXxQxyKi8wpVBKpHk74TRaJhjVQxfXs4XSCswp3cAan48FXDmhCbh8GMjErYL4",
  "key17": "X7EcmArPjX5prUio6N4E1rQoQF57KSxL1J1oV9t1ejXANdkAKSQzKug1TN8E4D7rZWvtdwLEUEibtJYCcqSNCWc",
  "key18": "veGvSPzPQyMPySfm4EYtJ9kaHcK63jVSf1N4UDnc5DgvYTa8hudMSf8VvX6CGHwqi6PLiuHPWimQkQGbAHcbiDZ",
  "key19": "36GWM243EnYtkCZdhMX7CQC59zkr9ZDKJSRhHtp4yHKZxbrGd6XQuXiP4Uz9STyoS6G6UPG9nGvscs7GBsaar5Fh",
  "key20": "5Y4CKjkjfZZscvjg3PMkHJ8VPsz7SrScsufnABLJjwH5bPHAMQhCuettZzQv9SWQ75SQFUELR5X3UnLKq39YQAy1",
  "key21": "HQq7z7vefTAhLgfqCs9H4bNU1qUwgsDDGtMvCYiBJm9EPbSFNUYWAJxxEgPDLbwnGc1vLEXiVEaJFLDHYTG4c9q",
  "key22": "4f5voNhBhpYCr5xc4fNZMppM2J987WBkntMuGYhqfJZoe1p53wurNZxCMeW7BGTZ1aEwkEei5gNH4o8mLqEsgjce",
  "key23": "5Z6dRD6jF46VU1bKSTfFU84z1qX5TYq3yptJWoHqSMEGsRBU44VR9r6P7e16DCzrHBewBbexMcmmV8Ngy2oXGdoJ",
  "key24": "2n1wBkzqeze9bJByagCgrmGXJ3eDLdP6rMZ43NoH2Z8u5yt68rshUzwg7Sc8sLUnn1CAnP641f84sha4JTDZzxnf",
  "key25": "4MnP6G36JeZMF7S6ucudNP4qQDmWZWGQBAWNrGnkPHpAMNnkEBQvSwH3jrLsVLfJCBkDzGaeUS2az9wPLAf4qkHW",
  "key26": "4cdiVRBMbNW3ZZfsekEaRA8jLBdhkwbwUaBc8b8hQsUzGGZMoxuKufrhHGk5doZx4Nmt1tRqSKfcnQBCjAbJBzh4",
  "key27": "56sejTc1ke62LJfzUnZ4GWm8CUhdMHTt3xKyaDiAoHzDejMNhYMfxMfg9o4TVXcM9eKGrdcNDv3kseedyMfatGrt",
  "key28": "26My7UuRPnNkW1D6RrR8AEJnPi6nyEAPoRLGkNkVmVWhZ8rWCe6BJHTiVoSnGq8cqhPsZFAbusETascVWKmF68zr",
  "key29": "2QugGFzsEq8uJ71VTnp6gWagsroxPXQxX8qPtGpb6xW7c5wLKvHBCvLxP88bL9iT698zHzrHNdfhCCe1hq3836e2",
  "key30": "2wPRszQNKjprBPrXXv7CpiusSPwVXbHH45PwrS7T5NSUor7YXT5euYsi4mhHVLjg53JmkaWrgqEbMGbMxevxdnY1",
  "key31": "5b7WD7M9KfhyLFrKsNppn3EPy12zNHpxJHyLkANKf5PtudQbAq4NKu9EfiRs22kiS9t9XLeHKC5rffmmizUtzcW4",
  "key32": "4agsQAYCoHkUEojTDCVEqsZC6FBUD19BeVbVxwDYUx8u6rwpHAWZoRZJJcfC7s169CT8xkdEKBh87YFXp2PAsPjq",
  "key33": "3hAGiDa1BL5ieXSFAPTHeE5hwG3xeHdtG5yBJQZh1KejQgB4L2iGZ2ZEbkb3jSiYa9xZgEFzRsbFiz4GmsoCNg6w",
  "key34": "3TdocpA4F3HpimmAAetEpKRU4frx5GStm92JbaiYKsxnRc9M81hMj4mRtQwbS996nboFs4R4xvHy52bke3co8Xsd",
  "key35": "3AW9jexJ2fhqfYRQpLRehRUKskAFbV2zENPkL2Ti7ya2NnkL4YKpZUfkww6Djxq1YaW74TtGbN1FBtn5hvLrmGXG",
  "key36": "2iFVA14Lp4NV1qHuiJUjjyHwYwhDmPcD6YVNKgmVvMNcLkfPZYZWSmpH3wVuFjdGQNiWcQFdYj7GhCAh3QvRS3uG",
  "key37": "5PBnZ78Ao8rwvM1r42XJyk7cjcNogsrerWmFxT2NuCjNhLmyzZNau8pNGK8LopNscQoYtzHuBBnZdMW7PKrdTDAh",
  "key38": "47Tu68D3JfiDdwZR9Q2eKopGUk6vbUAaESBtnMmnvE9BxKPz4om5SMXFHSxcjV9afrDN7iEPExJrT4dkStPqA3AY",
  "key39": "7gMq4jDoRty85NCvNhifJg46Kb9kWd14Rh914JMkBA42T9WZKvHodm8vS5tbAYE4TR9UcRjHGKv5WXJjGPKXu33",
  "key40": "3D2U6KR4iScTvZ3BBfkKaSoN9cQuNCSAzNMN6atu2k5JiJVtjPbeXLfvmdYeeAeqduEMqSLwZR98aDyt3wyEkHvv",
  "key41": "4REgyD2tZTTw4YxYkQTAouJvR5P9pw23XzmNfC9jZ27CTQpi1XNAfHJnTcnfYBHZVUH95h583dKpEiSzzYCbjGds",
  "key42": "4cN7Vmocyh7nN4gAiK9DBAAB41yHYLkdUDMae1qMtneVEwXkv7N2EWbeFo9AVPuSCxEfTNHRTQFuKFnHjbfcCk1p",
  "key43": "5eeUgvZU5hMb8HRf9zY19cZUKx2j8ftxZC6ezi4AHNbuLyzMA9b7VwVa59d1XBXjuAL3Yub653cFHPUg75J47R6p",
  "key44": "245FFzMF7WuDR2ZbrH2v6i52tYp9yjpdHPJ6viX6Nx13tZkmbXotSuBVQPuPDR5Xed9bu4zLktP92bLUM7hFVSNk",
  "key45": "3meMWyzGUyMsVuUiDcwRrRSFkJUSohwMsf4JriYNHMmLt5XkLEKrKbpfJmWQUkCQoPvSLVJ7415ZuDednQ8enyVe",
  "key46": "3RGfnc7ztNoMd2kMkPbcowSRyjFpkVfGtx2AheQr3zJUdw6bz7Cy8N3CxnEXzMVzrQtYFxrtiyvLEQfagsNeTD9A",
  "key47": "KoZdH1CKVGNB5uDKsverNiTEQvCyCKuPKMJyciTH7K73KkbatHmhiyYn7REWsXcV5nPHUebsNcwS1v2bkNmcx78",
  "key48": "3XMEBP3KXghvzFipWRHJ8ZZ2RGizuf6d7jKjoTyZ7nFSV3Fqy8jNYP8yhymMJ5tjmy3G2XzQ9x2Kr2Wxmhyuf2Qn",
  "key49": "5A7E4UvF72jHLEQbu1md9rtHhV2EHELxn7NTKjrq2w6qyweBgZt38DeFtnM5rkkpTeC2qXLvxFQfC3gwLKv53ffs"
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
