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
    "4hR4UYaPhf4jEtZU8arbscMJFQpXWtVYk8q2UsSGLvhrn7uTiycRYnhUcyJGpxasCfWerns3bGCZ9kEmWeiBgjgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6cRK8gLnAHRsk9XptTr1KUrCzvMoAeRtcE48cEALgc8XGsENPNabXYqGsoYza9rvbceKMQqw7e6XHaxKsRu3W",
  "key1": "4ck22UKs9t9Rn9JXQGcHhkRTacA65KtL4cV6TnEMisD1tN1ZQMFMQAtBY6GXQa4eszX33UkWVjJBeN9QwqD9rJuR",
  "key2": "5wQSwxLXEMjuBBahaAVHeoD1SqtW59ce12E3cSHpAbiJ8A1CJC21G4qUSbkSNa5Z38kHVceyWSoQMg6KTQCxpdN4",
  "key3": "4rW24rqPNrQG7Rg3Ea6dCZsxM6jcQbmyB3bxVEFaBbXNjgcKyYr1v5TDT3sqJ8RDV5XbG44NV9AcpvqBkN9AZoRh",
  "key4": "2GFPKK143NoWBa6N8K21FoSqNwGLo4bVDdrtuvKJfdWdjYe8y4DbvyQfK3hyLkWEv6kSp2UEnQXiRSz223Tpukfm",
  "key5": "5QESDi7wXGYTbxENY2X9e7DMFfiaspRpV1AYi4ASnb8mjc3MipcU3MtK88ZpN9v7ypz9hVtBV82TQ9fMmwBxXL5U",
  "key6": "5UmuWG83R5rS9RS6VEdAuhNPwnjVFG5nTQyLo9CrvuDekc6tL6SZDQLKZZ7m17ukdUHEE1TwENQNNeGRxpCnFNCz",
  "key7": "3ijSmZm7D36TeiUethhvvFYWRBVeXuPMmHmTkLCsDujDUWWUDN2mJT3jhErv1qh1RgRF9SAxEmQBeRshtWceE9q7",
  "key8": "2FxKQAxfsQY9cR9gtHRnfRkWLSGuGPQWmrMnXZapzyeGBuUWupnYhE5KNzGHB1tiy2nHNWiUUBUbErVtUpzuCG9f",
  "key9": "3o8vuBZJCVogPt74Njq3Rnzfd7xA2gWkAqSMyHa5WnnGJWyyQJECUUjMoRcYaD3cEYzQJPzbdu5uPqCD5VYa8Z2r",
  "key10": "3RTnRXwb8f4PGxdDRkZGFjs52oq8eM3ipgnG32od9uunxtREWaiV1PdBoRYirAmtqD7YAcNa8AGf8TByzcB7EerN",
  "key11": "3yGDV9YZPA7B5WDQcuXMiMZxX9MzovCAMsTcc55KWPGtfCZinf9cm4kdjRcCpCnwcjdBLnqiqpjfKXC824oAjwpA",
  "key12": "5WykDnvGcbQoUN6UEYHC4pbJPdXuMgyesTBau59mXmprLnfrkS9tVofoEUiCHzBkTguMpTKmWWxuHi5Y2oCpT7FN",
  "key13": "4dGwBHx3fL53LUFBnL2AAno9VGK5oSWFrB1RxLL26xp74G1Y5TVM1m46iTqbjrH4jfJppUxbrmjwUV8kUhEjQKCW",
  "key14": "5TWNNuoN61roWanvCXGmwD9U2enB6QZHvwd94Hxfp6iRkxtCL9mVAXNXgyKt5vm1eK2panvv7CUT2qLDX1om7yrs",
  "key15": "4nvEfXmxuWHHVdytQJjPA6BV3qZvKsb9tdiB8iWBz1wP3YyLqQT8qt4dRHgpz8MLZDHQUiByfjbisrZcvk2HdvaL",
  "key16": "4GPVnNCbosmoorwdxdEUCkt6L8xajqojFfZgNc5snfhqodJnEy7i6sFsrjUciifBXEB5oGgsBHqAGeogkitU5aD7",
  "key17": "HLkzNarJpKewrKRo9aojsKqBFeHZKk2bvSFGR3PVYk45jqFiHTN1YUH7hY4TnLFrNbR8YuNtPZUdEaktGp1gqik",
  "key18": "2tfBuLfbF7hhhr1h9pUYGoR4wMtGtRwEGDGycxfhjwB5QFfqHdPfB9fQjVdvRjnLkaq4awm5mve4oFcninoJWiqA",
  "key19": "3zWaL5YWQTMxfLZUd9rhs62qkhZF6f2Pprau51nAPHBW4Df7ZEWCoT3co4LgoNtnSQq9c2PDEznmLwtVEWR42J7q",
  "key20": "4zxCNov13eNMPweV3JykP5G133S52bP2CpecfX3XSST9yRFGwMwRoKPJxkdh29VQbopZbvKRdftfGW3nmmurCWrP",
  "key21": "aEWBLCbUphDpoMnfvsxhheN1qdyfAvMNWezH5qGjMmR34Xmo81qy3vfWn1BdJzwitLZrBQNmrrJ2GNrE3VpMxhh",
  "key22": "2hDrYuR2tfmwY7jiCEBkhQbrvgLdfEUmQKYcvmseXEsmuiVBFD3KG4sQgB16bvR5Cx6fBrHBgMcnJstM5BdDUNEX",
  "key23": "5FoBjeUKZu8HWZPMEhis4Cjydn8JTKthYfFQFQW52pLfiJTxkMWGFdusAZvNPJCFTS7cqnE6LtVJkoThfsdSHJJJ",
  "key24": "2bD5DpG5NXs8z9D6ryiRocnNvUok5rofKp9ng8ohevdCpJAwtUBASP7rTKx8ie6Gs6wBVZzvUJsVi1DqEbQUmbW6",
  "key25": "5ZWTFj9jzzyLvEyygqXozwJEZcTPAmY81JC9BEX2eXUpxcDFRpizpw7K8XtvJH6V4qD1BHPdQ69ZvW6KZ1QYXwW",
  "key26": "3JGoXqtaGE3sdr3RSDK229JQgbVkCur6bX9a1Wsuy9KDvTUZtmknmeTgVirQXCULwyxtqCjTgbgUkGw3vm3VzhUr",
  "key27": "2aDeg1VCGBtcmTJgBcUxR7pfgeucLB5rsJstfLWc6L54kTSWPg9NNZi78eq5zn3GVxzPRjEpvFrdAQ7CrfWHg2xu",
  "key28": "38U3SdGF1pVsHGKigLvqceuYiUzb5jjEWBq2q1AfWuz2RB658J3eBpfgCW1VB1TnhGpGjjdr7hsJaN3aYSCM3nvY",
  "key29": "33NrRynMH5Y1QLsiHyKkg38AnNCUamayWRKEBDtkKdk1JYDXsGD97bBErboZTVDYmzDp8KF8zcaqsnzmY69tg54X"
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
