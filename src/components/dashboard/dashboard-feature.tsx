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
    "5nhPLMGVkv7iecYMxUz8UDprEijMEQUYyQKMfNA2kgqVrLvLbusVdvp3BD3TP5z7JUeRzkS7XJQ4nYXSwS2GYHg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37d7akWfpf9oeNNQqUGt7kJJcWuEFoJVfBSejgHDVcBBJC44x8dJR14jyeEuPPVEvdX5Y5DLWESP8QLKpc38Q2XG",
  "key1": "5gaciiPuBWJScU6hPXW9JNDCPSZtw4QmcFvTr6KfV7jXRPSarTBWiXsJTbQsS2cxiUFCWsRBTB6VDrjp4kmWgA2d",
  "key2": "3dxiikQTJbuzLDQF8p6o1Ep7r3GjgqtgFPUM8RKckSfoqPE9NvbiRfWj3UgXHbytN7VhMqjArvCqj1XVT24RsFUF",
  "key3": "5TBtMaXrJN83xrjK17ENPsytiK99AeyYf8qcKYmGghusbaKaw8uwwn6xYpDXbLiF6aeZYJwV68tp2r2kFHEAY81f",
  "key4": "4wNzQMm9QT7d1tmbtSUJjtwBg8uWspvLxsSVL66L8MUxk7VQJwgAovoRtTGaGSTs28JXaHWLseaZZfBsZgkD7ZxW",
  "key5": "3HaRuYeEdcuNQUx76yu8MR8JiKXhVtvvuL28Hn6ewCP6XU5Pg8tAJYFcAztetQfvYzznaPNa4Mc8Z3H3vWwaeprX",
  "key6": "3aoTgiN7HC8NjWQcvekxfzBgzXZC7omh9aKPeA3mZ4BVqaaw3BJQde76apqkoH4yVQ9xh9wLGZhPH6qy96qMGCKg",
  "key7": "4APNVhYmKyjN8kxDVPnDKQjzbbkydpVeEyybjyX8QQH6yCaUPygioFpGVeCsS5avys5dwKnbZ3nDnLMj2HCE56W1",
  "key8": "5dxKc3SbDH7saTzMy92zgSKRHU8vyL9iHH6hKC3P3YeupJjdKvWBmzzmehMt3PmbgRhi1r4Q5QJ7sA5Y2E6xffcP",
  "key9": "5FUqXaAeNhLBLLYkpHzhZCMif5NMhjTuT9kxjAMt1qB1LHkGxEwXN4v5c3ZfFXyHBr141BTnJ9wFmE8mNXGTLVcY",
  "key10": "4BpPa11gDsC67Eo6HRhrBuVDWEy6HTKSGXkWXXX51Un2L7it5p3JZZY2mTAP98zXXZai1DSXaRRBVBBtT3ptnUmX",
  "key11": "5ZawFaNeTpw9y7vyeaiDwBiVq5YwAopbrAw8q3P3Smo47GMFobR3gnsRc5KHFdmi495m4YSVxxrN1jGpxLFYbZoy",
  "key12": "2V9YxQjSNPnGrgzBXoKtTK6V6F1bcGSPXbpXRaVVJaRBhzwMXkWqV5HW2Fer1kbYkizo7eBKABpdzMW1dp8FZ9MV",
  "key13": "59KxrmtEfHa2HKnJ3TJFR4MCXCNSAStQ7ZsDzKPbcw4rytZJXJ6Sogh5tRvz8EMC775yZFBPNzzLuahEdL5wmkpB",
  "key14": "4R45yR8H2BbmFwaCNmbFhqrSZMtbdXQS7qQAYZd9xr7ZBCvbym2PKJm63VkUFVJKTtE8xU6EtrrhXNYfk8yCyJfU",
  "key15": "2NuTyoxhtbiadvWsPrD3j4uATzCMDfquoc1yGYiq8d1y6Co7wKJcXuEAXeLnut3bjE99f292TJL5D5AtppZxrCt2",
  "key16": "5FdqCCncSXYkWNngMM1BoYUHzny3bcqfamavnMy4UqYCYn3HXyQKLPsJ2kz4sb8V7FZBaszguHnkmZNkkVxwi2zP",
  "key17": "3bPTUnb21jBKZdyUSXEM35mgc1rhzBa1AgfWxnDj4AKvQ1Xt8yXSedKQD8cmSkbzJvNNm2mvtJaXBNke3U4o3M3f",
  "key18": "2tW5EQmUZbnQ8LVtzvBAJYp4FQWDiQoKrbCgUicRu2zqpAWTTDMGdyXKwene413J8irGMdQcgdoGrVfANkeH2Lt6",
  "key19": "kKVq8VTDZBXns8ViHX5b8eEhsWQRSs5eHcmNB16EGfDDU8veQLe5h4Z3zMXwDng8d89Q6TKQnwAcRJtVyq3X5P8",
  "key20": "3UKRbZt75asjbvPFRrVAQmSxSsLn2mwJfgFKsHxwfoon6xMc2x89LjqGwGwkqZi7xiBQdnnRai7dyx2NZ1uwZBmd",
  "key21": "7L52vLATxmHkWR7T5wDo5zLkAVYjMNrnMvBP3RWrPSpyYC9gP5nX71rYCQBFG3GwrMEMdxxSCSnHSvE63Lt6Xs7",
  "key22": "3xMXkrGbN3QFsLFa3wnb6y72qM1hXqz8hJhGd4ikamUwDt6nakr13Zvwgb7YJ4skbXuHTcF3RisS9pMkjZ26ETLJ",
  "key23": "3zN5qWMC7qSmEHfD7EB1JLS2JbdgfduTDqBAnzVw3MgBsCyKQzCLUoAYXpr4yubYoXF7RzzFnHio2GdJGV9hrNGf",
  "key24": "5hXQoJP9DewoGWu22iXrbAMEWTsrxXYfWKeeXitwq8uvAQsNguMoD2pfTG4DQ9PaVxHrZS7GgoyeuFnxQXoc7v8Y",
  "key25": "bXMFCtsDS37MLbubjmFadmG8ajiycgnSyzRfXEXgLotvMFcqSjLWBXmNj5kwExFPPp1bopYYTm7m5DNXWCTqgVX",
  "key26": "3Aq2ndC6yCgQuz3oc5XRWN3RHMJTrqL2inQJFySGhrUjT6sN4jn1hBbyuDGNuptq8s3Ypr39592DGBxUjDGtpnVM",
  "key27": "5YyiGgJdRjZDzc3btzebJbCRChHHBHb6Aahi9YmM9q7eAFypcPjr3QmnsdGaE2jiwWUb5aBB3FaSavSaxVfEirvk",
  "key28": "36X2V34vz9LB2L4yL2nfrbGBwbtcMXvmMEMuX38oeqg7tx5qUTbPKgwJqQbRjwFQGos5ByrVXq79QrftSNvreh1e",
  "key29": "56HhZURbGvBCdxFGyBBw6DqXFTx8GYogbRMF9zETgkgaoyPqybvtvmk2bY6ZFpwsTRfaV3sR85xJqMGb9HBL1fpR",
  "key30": "R381CxgY1Uqe5xQaBSnoexJqywy4vDwnSKovVRzDW4VwEkUdcfwkpGgMf51YYRb6GpCcvbrJYXMYTVerjuKkibe",
  "key31": "wViJpztkEpZgPrYj2Bvqp7nXxafVtrnAESjBhFvUFeZ4uUffuszrxHxG36oyZG1y8Hz8Abnj6tL1n7bEgheYB3d",
  "key32": "5RoZ2uvRqtST9MREfJ7ZjUXFpSdYFasAeKKJuQ7Cp7pNzJLdJQbLjh5BpjAbU8SD2HQhheYdyvq8AkTx5F584AcT",
  "key33": "5MYVYU8V3UdshV29HeUMaLSNt1qK6Ju9duN1BhdsaYYH87kCxD7hhxG8427xUxUVeH57VpGSHqHTiYvgetYZnWGj",
  "key34": "3e1M47g4kBro7waLAuN9NEqkE34ykiZENiHgANExYyqCJ4mmzZqVkHMURPdjykjjmMeDFnDxQDCiFvapDiPnqJtV",
  "key35": "Rpc6BXRtYLVWcW4KJGbKEnCUmyW3HUqi8wUMwoDMvmMN94cv2Kvv4kDYqLWwSSvmYaK3LXDYoYrSKdnrx3v1SNt",
  "key36": "3ZAmqwncMTfT4kJkkeMuFWvZXvjFFRorYWPBRmQ7pULamz1N8HZW5SwftyrvFoFCt9gNuF8bjMKjnzfrdUT6hjt1",
  "key37": "4pAMN912BtMbxYPhU5p8GgkCUZG1i7Taf2snF7DuQmuSQpYAZPDAvPL8vVmkzppZpTEy3eCm6EAjKWVWMKbUdMv3",
  "key38": "4bS61Zps7sdWNfLpf5mb8zSb36e8ezKjaLKagZRHwBsFtS4ELWM5gb52josotQuGzSXEMtWzCkq6hTUojHZ6WrmD",
  "key39": "5YAb3PxMNr62mKHyQrPezMsLj7iYySugjKivfz8P9b1oMnN4HdW64wDQtSdV54Jt1qYCMuNieDQMCFxJtiwQ22B7",
  "key40": "oGr73LtGLCW8LDfyMVvchVHrATKHE9NnwqyL6nrTavmdYe8cK67LqXMyHwPrASprBWZefCs8ZQJo56rcRnPavzd",
  "key41": "53P87Ei3EKymBQ4wVKCEdBENWMzAX5JiBZBRpJ7gwazxMAtEomhaLJFqtLdBcnfbuPKm8ejomhAQo271S9z3T9L8",
  "key42": "5afgZZLWBA27bytiM79kE2WJ5JqLUX33DAZGd2Ku7uGEE1oGfo1zcaFJdYnM6MWhpgPyFqF2xTgjnX1XXpVcBuP1",
  "key43": "3BvYpe6dVm4igWnqE1Sr3akdC3yUFKxQLLmHHh94AWoPxCuxyoqx6FgmXnZ4UwgEZR23vPxzxNvf4xueqJUbdtWH"
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
