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
    "47TQjGmW4hvSrLe9c532EdYZZJtYZQYnEx54QDKHwrSrkeNmoLBsnmr9TZ8GVzb9vt3bP4JFZTGWC2W7wJvbkHmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofYSyazrxo19NC2kzCu11GgRV3oS5f6NsndoUDsFrLcNFHN4ryadhnLvKWT4VQ2Sd6gqGyN61niZc49CwtQBkoF",
  "key1": "2AE379z5ZxECXAEEh8mpwL4Gmy1diDdQ6ukrKDD7mbRNEGv1tLgF7spdAYVdPwP99opTerKSYRbom5QAATwLzv4B",
  "key2": "5Tej8v39596dQ4J4uVvnn8Encuo9ejhkXuLCQRqdyEquB3oQ9CMNfYsxXkXiDhz2eAABVZNcKg5sUmrvqqd9CCtV",
  "key3": "5Qv1hFqDQnz1ZVYfHc4Yw9TgvK77zjmHkhjvb9XkQ8cLQ5siHtTdJsS2vm8ikjJppmXJ7uyi4VsgcHRfr8TAEbDP",
  "key4": "2RmeKRAZjZz1b8rXwahuyCTPQGahp7H87kAnBfufcZR2WbdPGy64LB3KQW6mrELiHT7Hcv5x4kvTCbgBCnbfH8z8",
  "key5": "2rwPzWHRuNyAJDX27DEwoiU5rkAyD43k1gcSZcdMQRNwYpWSX7kEbUFFgxfLxYYKEFxWp9EmLdwYsUmucBbgtV9o",
  "key6": "4yRJezdiyt9qE5Nyux5865o1SYCM6eEh6Ue8ex3TcjXbZSQkpNbj4qD9rKSCgHHNQktRgkmpfvqz9x4y2CDKQ4f2",
  "key7": "243z4zCWL9gQv86oHYiWYACQdyx4pvaW1SuK5HvzkPU9TxxgyG3Qcn1fdvY2xT4RU6iPJBhY4yEKfEE85yYqCrgN",
  "key8": "SNi7Fg9t15ZHtS34whDxyeV5JmconWFK9y3XZ5NmF3Wh1YSmBz8kqZMVMnpaeBcDzj2WFdCyjAcnHr2kWr1RnwQ",
  "key9": "5eK9mZHxb44R6JctFdCNB9KH46J6tfpsiwK72JvHnSExkf28d87HYwNtAjfVqm9WQ4eT7CF9paYb9Qv9mSPRtjUy",
  "key10": "4CsiXpWdHaEe8Vu9uz9cBAgiMgc1SpjJYjJ3SLGHAUmxKT1zigefmUowvZb2BtBt48Mtjdqp2jVn199Dske232k2",
  "key11": "4HUY2dgNvXZzK6nkfqTbq7YWcSCFJv5LXzQcxSaQ3BnUhWeVUT5tqzybPrFi4VyZL2t5niVEP8uFj2kEn8w9gU6i",
  "key12": "2jxuuV99NMh1NPWYgH1482xgQEGo7MnrmEsyU5rMpQFejtKHvrR9bCeQgQK6fG7b8KhmBowNuk19RTk6aSEw1Z3S",
  "key13": "4oWYB3VMWrqyM6frLaXFvVjCiq2hon1HWK7RtArDLyd5UAMugPAQLTCA2JKc6xXVadLARzrzBzcTZEGY8gokEv7Z",
  "key14": "2HULJuKg1L4vj8PW7SeXSjVcofJ8PbuiY8hTC8Uk3L6t3UBhgmbWHA3j3WHXDEWrTkvQwSfHtxihmBBS81BXWitf",
  "key15": "3aYQqTADLXCpW2UupYoVbNipwSqMVT5nWcWbKwJK3jJA28hXo26ZGpmm1Qvj5bd7wj97iNdiAswBdzKkcCYfY8ih",
  "key16": "5hrZAgVDyfTuunExJXXzAtf4Nu9R58YEKcxLWHqbyDCqEJX78U3MAnCVG1W9zBiXPiCp1gsM29gcVrjWMepV8waw",
  "key17": "66G1VLdGTkutEf6PMUPJpR4htuZXeYmwNzDcpDcyFN1XL4GS3FPJ7L6dBrwMvYfh6hQ8HavSXEbPB2TKreuKiHfY",
  "key18": "5QnwoTF5vxdACJ7inKYmAdsyVefEmc7gE9HHN7Qfh8cC8YNxxbPyMvdVVBrZ3Vi5vENa9y2YomTLsqDye4h1XGTs",
  "key19": "ufFwtH2ALmMbFguuheqqidvLiDv6gZ2JNnjTTj2vWMZK7aBycjNiToFZPwtnt1q8wVbxepAdne3bCzBRJj2hZTh",
  "key20": "BjNnWEmb85LZq6tmjc13Lp4tcwqxC4Z9jBu6qK8XLfTfNr5pont5R5B4ADnvHUoA25LFdACpo9FRRQHfhowkAAT",
  "key21": "2CY4KMxH4yJerCEumCwPdjNHJWnNkcn5wzFBUcLjuvr5whyEasFgjkfjjVKQ229i5jYgH3oCUHbCvunJSMwyrjju",
  "key22": "2sMTUAFxFVFHuDXkrq9wqTCctMqdy2vgcoeBLHsm462mG7nWKo9r9t3TZcsDKpy9nTr1ABiRpvMadiNWxSRsinXs",
  "key23": "2YH33x1D1ycj7BQqAujHUDEPtZNEtYP1eT54bzAd5P3WY34hUUp2MqT2pGEkEXG54dWn1Prh7acTLPpjyMQycwXk",
  "key24": "4n4UGLJpuNat83mPpLBCbrKrvgxBysrrumK3BVW2EYxB5fNwv13eQnVLcK7mHCmSyeREL2s3VWJ5rdXj8keeBcRp",
  "key25": "4dqgew5mUc1Ur8SZmeDN7tfY1WMco1o9XMYun7kifeLQpNHtBoj8bgZEJgMzVWxXVEy8ip9JALTeBL4Hr3cFSKjS"
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
