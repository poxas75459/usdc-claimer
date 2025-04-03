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
    "EUpnFktUPUc8GXeWLwoncAs5isEPoGzsJYXSfbbPp2xuUjNSR4gEKdyQzN5Z16qwAY2rvBh2DSgb47ryKmjTX5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JaYYrGJpRe3EmqqSCV9LbR23p6FeXe2QTvjdCwoEPe1pcuegCPTt2DwsrAZqHuyrmBSp8xv679FrokbdnPGLHH",
  "key1": "4v8XT8Yn42PmGRpZ7rRZCJ632ccE9CiPwAqcnRHF2r9EAU9xXuCpnf9oWsAuMM4xoR78g1mFd9EAsguzASwvutAT",
  "key2": "3HbtgKHxUV2dh7aL9JmuzgHtQbR5m9RMxq9xseAWvefhbcN5MafbiBHwsxNRemBXe8fYT5TPebg6umCa3xgWyfMs",
  "key3": "3PibpFtXUi5DFYfDqQb8TvrD84nLhFAEXuLhXSucyscVrA5NjTKKMxtT7uGvnDoHpmj1LVA21qUmWFpD7KXvSSEW",
  "key4": "2khFmvTpwYAf9osHgYtRTFRjpwDbNaRWVrdFLtL2F62ZmRjd4zoysFDkcRsFthWr8xk3kfPdk5qqbmufji5FP7NY",
  "key5": "3fkcPm83Z2qwxrDPoiTC4AK8kXYrwak7rApoG8pTFCzfAHAi8Nw16oyPC6AQF5GGfxni5XkDP4nGCWLCUpow59Dt",
  "key6": "4fxntiALzFyyPPD3NirJn7izrgqpfJatmpcqcoy8Na5N5u8RWi4MtmAhEdCbbRYBqB3kVGki1ZWvqDfz4VJqC8H",
  "key7": "3rjZmXVSn1Q8cxvsRtuiSUBHK3BVFSLWVZ16X88bpyysBeXreaQucgMdPf8AcgDsaDzm3iC4gBkgTa3Z9ovP5whu",
  "key8": "DbFfobNbSTGrVYpqnyZQdKQZWi445Qy1qRADZ6StaaAxuJEj4MMuwETuSn6opT3fY79m8WWMevD21SCTKN1cLS3",
  "key9": "4tkkrR1rDWfuz5E4izXRfN7vfZMZ8N3nX5RrQetZoXqsWGMwbt9okZUWEa9q6ScT1YiVS4JXy9te4JDFMo8ReqfD",
  "key10": "6QbYiQCrM31gcYk8fPrT17SvY1N3iCKj4bSVkg68kAjMuG8WTvCi6KyPyYXfF9yamyezwrJBzoXpkQoJYRL8i9H",
  "key11": "4o2Gs8bJdWh7w5vikfFjMSYBHcG3VptqUcz1LEaaYEW82ADJcAFVuBiMsohvrNkVmxhijjoRjoYB419cnHvUKNEF",
  "key12": "3y9jnovvf2p84od29cc32x39DoN33FkkQUJFs1BewpaoANh6odArwFv1BKG5Nw3odrPMVxPXvqDWZz8sUKKSYZNk",
  "key13": "4vxtYEsKNRHcrCR4AaEkaiPW6e5FhqYjiuo3E9ccWeEcUhdGjZduWFzDFdnR4Uf98MoBG9FAKk3ouj3XXoE6J9sr",
  "key14": "4XA2fyrMophN628jDZFJHEUuwMD1ZMFX5b7QSAUWmsJN4YahFd1C1BuyJY63GUsiKnLP76GK6Ut7H3PoE8Mcffm3",
  "key15": "2bPucXQs5P8RXwfgvY5R2aK7gaBW9QSLidYH5FWE3j2jEA3oKat6bgBGfx9YDh4ArEiSCsSSPd3JK1kd3YsPuftw",
  "key16": "2xwKnHqyMiGkrZ77UZy1MKK1zMYXw8JnnRYZHoyLntsMNpk9Pkh4jokXMcxbZYdKe1MAAbc2ZwVwMJLDXgSsmwV5",
  "key17": "5dFCiCiEeGt1VqhjnpY3WtaoUSrPfwfEp1h7d1xhmmmGVxDKp9vSE59vq3Zuo6WTEbpauNn8GrsTzhWd3RVoPDD5",
  "key18": "3UgPSiXoA6NgjM6am1axGxyf7T2YKGpHPC3wiarko9jjehk89jo9mxWdnhBcU57NZkEmqgpFGv2TwGUUP32uukHB",
  "key19": "5SjwuisRVFZwbnYxPVfmdjn9tKPcgvxkQXTrDhnoKXEoTc4xTYQBHxnRNbUW4eie1Ri3WhVh45GjYBjRJaDuXye4",
  "key20": "2pqXShGCMRTd3YzZP6EFpP5TQT34NQs2DE7DGoRNLvjc3beWz1uBd2nt8cev2tU5j6NGqoxkEHhgBv4nMvykD46k",
  "key21": "FqUDpf76XYby6TBzC31JkVbgVJAnB3MWcaZomHLCBkKWkq3Y69PbogoLygFYDB7JdcmiJPvkq758hVUPcYGwKHG",
  "key22": "43VXjEEg7LA1GPyrCc2tuwLqZMjxVt12s7beR4MQZUdjC1PF8NXLbkqTNbdJuoNaaeb1QYbWdu2su1HXsmeCDyFu",
  "key23": "3Geix6Hgx4vr8XtAQGY1VEkuWkEjX3UVJSNeqKVFFdfzyh4xFBRKfdGmszavzJrtvrqBoJGjXH1KoCYhKDi75AKG",
  "key24": "3GTzySvKyp3b1bSDE7M9KyduAwEhvYgkdowsUUWp8UyL7A96WkqM4fK2Hs5UPiwK7tahMvcDRqBDi7AtsosveE3c"
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
