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
    "2uNfCF3KEkwPzuBjwLqDBDrnDwWoQxB1ZvANypwb6cPsZUgzqSecoXLB2aXA4iBk7JtanLEHZ1QBRgq6EjkzBp4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKeMT9ddQ6aFveAEdoihaPrW4emeqvMJCDWUaYUJu5YYqxpq4NqSyxWuTqw2AnrjtKCNf6siUc39kZ5M3SwWd6Z",
  "key1": "5uGha7iqLKHMkHPKp4GGhJpEQLzHGtfoniKhzqJwaREETMyopMaPotJS2b2som6JwwHtif6mLGdeZ1vKitsTFi1C",
  "key2": "5LPhhxnrAsxDJgrS98P849M3fGYPm5QVA44AF65av9WwwRhTDUh4o9D2xyCvmmxNpY5aLMvBWzEAVneRkVEv5dxg",
  "key3": "1Hv9fqMJerpXRcmtpe5K4CFNr5eF49cGLFZoeGKP4hebDTAwNLivFMsMELjBrb7jukEqbAj22qxJcdjZV51B3Gg",
  "key4": "4wqzrKnniZSnLwbysUnGiVsfkEMbgHE92sKrXrnXow9gwqLrSqNSfPFawdURqjNfYGqRYCZdpVcZ3XtYo5zDaQBB",
  "key5": "4rdyQBp9Q8KgkUM6BzXazT6eEnuEqJ8mnt5NqxxGwmrqRj8h2as3JoBk9y3T9AJ6dqow8cGWYT9xeA2a1amfQHzi",
  "key6": "3r9vrq2naCxiaf3cucMQGzfsikJ7c6fns2hwHvzWgpX4c7GrdEvmDeh1aWi7zkoAtKTNo1tNC17V3xTXW8Dht5Tn",
  "key7": "5KMSWEfiCw7d9DhxYRHL1RkS9DufXaksnC5QczBhi7x4A6ovQub59SGrH4iAaapUQ6sYQuthrkWoJY5whRkcyFZe",
  "key8": "4LYeLZwRR9MzXDv5vJ47hGVRA8JCdPdVv8DHiBMpSXB4rpb12xiCUD2wWRxSZqLEzBjyBN4Vi4ycsdF7o2yg5XTA",
  "key9": "3ofKQatyTHxuA4EMWK8sQkUnCzDUkBqdJFwTmy1qPHMyg8WXTYgq8GVvZ71CWj3CyrTbzpoY3cBf6MjDkxGTRtKD",
  "key10": "355iohHJxXj9vb2AdUPtCX879wS4PdADrYePsq34b42S6rgKze6wCnKTfDKAFKcAN48ZbpMu1HUXbwktETGh8A7R",
  "key11": "NhYETfUgvGB1qsWjxtfmLCiynCPuXxh1EcxynyLhyTix9i4qUByP631SNNFMeZLze3MVQqxhPjPhytMP4HpLoP3",
  "key12": "38YvPY9BKyiCQDxLsKrxByzcGWh3BcuPWwvB275PDQB8SVHnKRMLLksdQrLiFicoSfKkKUg8FZzXARx6bk7vFuVS",
  "key13": "tCnQd3Bht6YH1vLh82DF3DJDLRDEFqEZ4TtyC1o7iap5PSkZFZxdhpxoba1rR4dZLTLDEtRamTqUgk8ZKfE2gbo",
  "key14": "3sYBPi3KvxBPDWUvkVe2GBcr48r6NGL2v4okaeQ7ZRKgxmyPohjKQJLp2i497qFmmP8kUjGKqeKEBhUG5j5YaQAr",
  "key15": "4kF6n2qrgCK7GgGenEMV5LwsbxXvS9z9FuC4PtZDTdE1n25EaL43iG4QccnjC7ZqybgnqqVmsbU7UnTez2NzYAdk",
  "key16": "toJQca22aMnkw3M8r4juzbYachsxkgsE6ySx63ifHzNZM6xfUgo1RG5prQmPY46aJohMp9yEQmkTCAhDCJVuTR8",
  "key17": "YMtPSxAKKZv1sQtnNWQxSyazC1gJ26fRFFfv5FzYfyrGNyvyWjBVg9zNQP2LvvkLUT1TLB24SV2J2dcB7K9JBR9",
  "key18": "47s6zcerNEzyfp5LRD1mJLB6YKUjNZYDJ6Yxkm2WLnAfphnMD23z1Qnssan1yByYuRuUm4JeUGsvMVGStLpCt96h",
  "key19": "42fHpHLzeKUv3AY4pdSoQScgGPTEn1Qycw9EhXwcAzRc2V7SK3wJUzd4o1t443mkkNmx78zqMW6sDXh61yuj3A2W",
  "key20": "4i75RKtW2UitLGAKy8pPiwM9hH8y7MSPjnCJ84mHEKkNd3N95kwAiEUWmwFDmDo4AyWazbSSq7Re4JtJkL9dkvsR",
  "key21": "4GqLaWtF4w5qLuVnNin9at4JzSHkexLKnkoCyt1wu2epC9azU7iPx17b9HdFwq8q6zAKRTKBhEU7NYyTVEd8RZqR",
  "key22": "2Lf5kbvUAs7CcrMZC28dbbvrBtZGBrkFjHCpDcvu4WSceYqrzLhuqhFZVwXozedJkoxJj4S9T35ud5cVphdJR7pa",
  "key23": "4yUkYEsgac5esoVrhzq7xi66Mb4Bp9co7n4RUZr6hiDT4ck2E2FEErKMUraLAroPDhen1Suh2oe9KiCav5aKZBdP",
  "key24": "3AfYEHY47aXoF55igndJdfBC1JoBAGF9kjqQ5D1xGKfLKdBWGKN3skdXr3gpq4aDphKBnS89bXvk9wmLxGVNiWYt",
  "key25": "2BgRSespnVtNH5fxc6bAEqrCow6sE4gci7Ye5mb9WsFvRKhowdbBKsdqfs5fjc9hD9YNNV5q3aKrpDacwSVrUmLJ",
  "key26": "5AWHMkmwPTsk7UjU8BrhAqDjBRXKAzHzU9UhW41rSFXuELTLx6vvrCW1oi1cgwV7WsnJrbsFzCs5qkBH4WtU17nG",
  "key27": "3fAKJgDHmqNXzFDPMSyNG3ohRbx3yZCcQAUr34uCUc8nmSK8tXXX9Yx9dCKeUu3TRgdD6D8egC4PDSYKAsgdRKtz",
  "key28": "2vN1ab6o6xwCUg8rQvb5b4kv5MibQ2z5Qku8uZoREoZTLaGaJJeV29isiP1seCMoteSF8k8mCyBeY1EUoaRKskkv",
  "key29": "5c9KotbFtceeiL6kzoisKSqRR4fcsMusP72MDeYr3Q6tUwsE8n2zdBRszgA5ZCAmraeUviicizPYgK1cS1ssgRAR",
  "key30": "v1fmB7zMoH4vvR3yFUa5WHwcQebB3nEvTCjJpPiu1NFNDsyxuxKJQuDH7bdHzMUdceWc61iM1DZm2Nq7fud2ZXt",
  "key31": "317dFwLbjCX33ajG4tX1shWKSV9DdGdwEJJpGFWtE5BwDscFpRMXLYiAEUU8Mcxat1HdxjMeRsop3tGyMx5p4dLJ",
  "key32": "3rLQLE3yVY6376WYZ4wfEdLcFgLZ4dqF7m86Ge9QTumddhcXyhBG5mHk7SmRZWH7GX9FaHw9JpMBizQGAv5ANiu1",
  "key33": "44yxwcKmJu7JkFnjiHWbuvzjrHsgvyHjU5vZSAvPkPoFVXQkBsqe1hWmb5xZYYnZX2DpcuGxjVkrw7sGdz4xuCws",
  "key34": "cmkNVQgfuPSzqfxEh5ud7oLJTxVqWUwv58kGv1BWKbwW5jBRKyxTyeFVH7ZtkEjpyDckfNmQH1dU7q1UYy7w4J1",
  "key35": "2K9nXGX6T9PMJrXdyGZZfmT8bNPZbA1qW12M8F2AbWGXFaB7tomcR4x1Z5z9cjjsLaW5q9sSDi489484bwAP8Z9D",
  "key36": "2Cf9HCygkYGWSC23yr6jzaNAwEjnoABkqhzYooENCafS6bqYvwwp2S9VLCNQRPKVEduwhbkB1UYYkRTxcLsbECPg",
  "key37": "dABAQQ37QQx1rq5RdE7sB1ZSkUbkuUQog3B8WBb7yxeeXhub9qNzy6SgWueHJJQdYeSMs1E9Rbhion7Efo7nTqE"
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
