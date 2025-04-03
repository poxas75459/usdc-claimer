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
    "337P1nNHa2Zqoj9rqj2aWfTdvrSJ1281VE3tFH8R2U3tKgQMJN8WpaMigJwTErcZgdhCQpu6tSbF6zqiMRP4npfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvwfq87xqmZ2FMVgsWpqNFBKCQVrjoxtRmW6bwK6vQ5DWaqb3qU278jkuUT6PrpnSKSyhVoZcHJJPZUzm3KT5Uz",
  "key1": "24gKikUp7bJZ7k8amDJbHikjyx8HcLXpqr73eQLxkETqSbHXaxTTbBD71FgaHNuTqc3VegsuuVPE9j7PMcoc2jAY",
  "key2": "fw3gLoZZ1SfEQ2eEVr4ZNbVmsoD2BH9sQTEAyYXBLLDcbbwHiTtgoKombBr6P2YjiudASpr4HF6wghUSjtoof7t",
  "key3": "3Fa4AKuVtscsxkynSC9HvJsH4KHLov4as8sgLYEcnz8qXktai5R6R2v9qaBNNW55bHAk1azYPogsRsu6B6jB27Nr",
  "key4": "4Q5NzGhG44ggqV1mP46sE6wGcMnUXkRK7BUgExizBWi7exthzWsB1GYwBEsegXxpSrn6B2sUssKHXPai5C71PXZF",
  "key5": "3kesdqJUkfQfceRpP6MC43pYtNXWTK9TWEMu4HatL9RREPnMuF2mfzGmWFB2BFLcRzt4VM9hixpPjKYAKwJdQcrJ",
  "key6": "BeHxy8HUphXtBdWo8VYZjHkmZHcazY8Y4MSeSmZpLxyZiZ3Uu1Sw9ansjPY3KsXUP9WvbAktdTMKsKLRiZ3fkge",
  "key7": "ykmgavn6Kun7dpuZVVRtmkL6BmpqsFXexHnMevpZtBi9RJEgAWAtiRgMv97NFoWxSKt9vTRwNNRQcKhx4fKDemA",
  "key8": "dWF9JpCFnezP6SV1waGXiPm16DKs7GxqdDajioH1fLtGhMcvkuXu7r4XAPdQL6swJLkMpAciUyfu9u8oTzjsTZP",
  "key9": "5M8JYg2ufMxSL6eDvTYZLhXrMfXyUEK9obZCBiS5RQeTVh2rTtdC1iNMn8TdnKZhANtkncu8RVQ9joQst3Jhn5Jg",
  "key10": "UfzdnDxYhdS8AdHMFgZ7vqPLvMixKg5hsv9ytCKigupjKxfDeiAnAJv5CrWjgcYi5kcinRaph9RL9GRjqSNSuCw",
  "key11": "Au157qtbbi61wmTpAzzV9P5bD1xnHUuL8Njs8o42ubaVvWY14FhCHCLgD5Ts37uY3CqWsuKkteDoujFGEG9ej2n",
  "key12": "2sdTVzghe4nTcqHjkAGHGtrEEgx2g2LCuv7HwHcXPsAScAkdJzdub2XgRs3pgwrg7QiJP8iNCBTe7mQaiMRdiTaz",
  "key13": "3rqpqpf2TZLxRVbBH1txLzptMSohRjHgZrke2VJHC16JN3QQEKkGoa8yxW9yCVpLBhL4enDmMHg7urgV9G7XZKZW",
  "key14": "3pWM8ap3ccgBbhLwGHKBQ9AKdbLTSaXCzdxEPiA7B7kmUape26VAthQrSCQHjRyKi2vBLznWyTtuErWbh5P4BC2G",
  "key15": "5dE4zKQmNL7vQhHMGgKJVijTv9fp8UkHGbt3DkaqVYvNAxeVxySxAGju66TH4rpQXbwcA8nKhPACJF1bZqQKvyYT",
  "key16": "64pZoH4EJHrGu8yUVtk8YKQMh6AopDTL6FS8kKwUdRs4RpTYxzysBQPrMifUqp14sK7TJQiM87Gzn9SKhuzipHng",
  "key17": "4GswcCsphZspF848rDd9heQk1QMhgEmRHv6S64e7h1HBdwK2gvjncfb3AGHoNiQ9dtZSdxf1ojL8uCoJK2fwqdGG",
  "key18": "4Ei6mf5vUrmiBFa6KZnreZyhQt4HDDCSrhGtNL8RCuwA8Ke4mAMggh8gWbxN7z7u77V3qMT76wBg6r1hHAjtWPye",
  "key19": "5ic7pvtEPQMzTsp3mMn4meGiuUX48VpETV8xrGR4PdCz4sNwwpCzsksZk2YbHgcjYK53uYLB4NTtswFkzFXKZrd8",
  "key20": "34U7mpP2tZLQeEWCq5BnTjWuh9VwStFFQmqSBvj2jGqArNU3LAuoLvNX8tU4rH68FfM2Lh5xccUKoB8EoicyQGWH",
  "key21": "4fLnuLuVYsgjbQzbrNHG9fsoAgFfwNj4MQRtoWEThqimfYdeuv1GKrBKLmNzMcPssWATZtWM8vwkc8aMsExoZX8C",
  "key22": "3Xtpt5HPXXp6d633DdaaiqbJVdD2cHL9sRzFTU7qwSMfmMfsaB7vA2cMyhuwEkCYvqqE72CfFnQVQV2HPgUKBDAZ",
  "key23": "3XYz4VBAHxz3kGeSczG6gYy3D8aiCgZ4RVcTofXFN3dC1iJiqdeMxEXwzrbSs7wh6YWZgGEPMGitXPmLiv7bVxqX",
  "key24": "2aNyHPDU5FVbPx2apeLeJN6sAxMxRgsUCjUiZdXHbMd4fYJvjNmXM7D7q3j3BwT2C11TY2wUYzeJCKRYKjb31gd6",
  "key25": "4pJuTy5imTP2ZwUxK2ZX9r5zaEjvFA1zfPoT2TfmbnPooC6U3xPTAqfXxkJdDCr8MbjigyD7u7Q1iiAVR65FAVLA",
  "key26": "3pAAjeVeJQqvC6HFTEnysgLS6Q6VUM4fzx5RECUbnx98YH73k3KjTcoZyvamMgKkWXxCmcMYnmXf7STc5kiDnZfJ",
  "key27": "4jYgjJJ78tn1GxuH2MAJ61on6jbHM6hVY8x7hiUFDpifeN5NcHHjZCmpuUUujyT8m1zMQCTH7BDqX82K22mf32a3",
  "key28": "3qVD24r5hc47akFvaqjJ9ma6PMn4XN9aPgd4zWBo5UpFmqbYvjAKM1WLvtjR4r3iDaNJBi66KM3VCaRiQHQgBxK1",
  "key29": "3uWJ6DBQUSw2qZgk3ibu9qhxhsEFG7sQiLB7n8YSMLYCDEGRZ2x4XZhKN6zTMd2WpD72MpuGdVqVviW4eyEi7Ypg",
  "key30": "4bJ4LnHHXU7WrQ6R7xNt6HtYhFnFVyfQK94NtJ8rdFXmoZt8spwSukzDNZDDtSihNM3mwaePGATmau4Q8bfq69k9"
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
