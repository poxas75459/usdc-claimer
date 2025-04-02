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
    "5FVzPxW11YAWSVPA7jRZ4DyNfiBiMJCaNV2iK8uzFQH5gLaN6uXiFtbXDpCQTEaA9ueBywBdLc5BCzski1Zi9Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYepziwCSPuWubiZ8fvQjrbcoBtWCdrWCzrD81Jo39HPihAmJBo73Q6Gkn5aJp5Q7dAVFDncspu1LdDKDbsjzKM",
  "key1": "3Myuh8bV8veRgpTCdUuiZVXAH4H4cmxajAwLR4tTV5KxAU8vCFNTwFdzd6NewgN1sKUMneYb1sqtRCjXA4JTXRvt",
  "key2": "5WHHs2fMvxu45UzKh31XmHHN4g9ViPK8j7J1rjQEiHwjGE6xouV5c4eZJoyuPGgxY9yxDxxMYPWaFRhLQwiycWUn",
  "key3": "55o6u29PfPLKr7BN7X4fKPUdxVsMxUgTDR2tXkfdUuf9KsGLiiM5aoyZAQrEEfNm2tuDnCMZjxg2ZvoMv6vf2GGh",
  "key4": "3PxjRJJxj95eWPb68WnLCiMLufC4HxqB1ttBUsHtDbod1HTh9gY1a1m834TQj9XfR2ZCxCCPwvUjkb6QPXrJ8Skf",
  "key5": "5az6pbuQm8veCnt3Rj2U5igk8Rn5W8GMKeThZWiCVKS9WYkJsK1m3TBS9zFZ8ecoKww9TdqszzxCsKTk9krjnzRY",
  "key6": "44r5Sjgt2M2keScjauV5r8yCgrBSXpf2HEXn8rfpAf7Xec2JVCrPLAsh9NH4n2JDbn1YsMesBwqc8znGDkySjEXn",
  "key7": "546wFKcLT5BsKZ3jBfCwEE2Lv8RjpvtfBWzw81VhzQ5gcibFNEKZVkaAT9ApG8VwoqGxNrVL4cNE9v87STYPPc6Y",
  "key8": "4qsV5vJGwNuYeSsif9bzx3YyRv3jUEfecQHUGn8ViGsBDuByPjSH4GmvLHU8zo4NWhpbwaj29GGinHrPxPC1BFJW",
  "key9": "53Tur6JLURB6nzPMfwvQdnA2mbouPMYTu19iz5u2WX4VtmLygFJwRKBA8cvF5Vhv97LzqSUU19sSZLuZ2TzkzP2p",
  "key10": "3zFhcs9Agb2MHGDHvNReVkgnM4Naq9PooEyjMQCfmqtatme265NDHUbEJq1Goxt4p12qdFsBXgFdDK6SrvarNzoH",
  "key11": "4N32V5g6wGiHXiPz4B362hF6Nqb8pF5RBXpVi7isKcsWRkNbw2iDwhsdhLL7qdbVnnnYwuY1Tfh93SUgnHFMe6UK",
  "key12": "VRWBAGaVatyi1KMwT3xidjUMrRMfy27xyY9Xq9GPFwJNuaR41dmj4p4LqSqG7yA6JUDsWdiNSQB7xrrEK9Fi7ev",
  "key13": "u5UFcAc6ipyZdwfjFA1ipaJgcCauoEXyYA8zoxw6DH2qrq1GacjgRYQcHmdc82Lt33yQDjcxG421WYAKYf8iFjB",
  "key14": "5YaSWg9oQiD2Xa5cUDJZK16HbRQUrkygZL9q3FVKLFqb6Q5FhXuzj22TQGqmzpiRumhZrrzsdFoP9R6Wi3Gb9JHY",
  "key15": "3SskZRRCqceSYHxs86yftiAocSGBa5km6Qz2T22FYLN2y59r6cChC7Waan3WSfCw3Y4LKArs3eDrG1sgu4SG6pwG",
  "key16": "3JcgxTJe8iZbDsm2DiUPrsMTsChKi4jm5sLdNvFeUqFAW8KVn4jmBtnUrvNJSLCJETjPjGKMPp916VY5NYZN3guZ",
  "key17": "aJzmdfaNf3AGezUjvzXQWCvuVzbgUWWL4j529TueecnAeXr3cXZTYu4eqyKyCqRonqh89QdgQDEStBNchtbMgiM",
  "key18": "3snNfxj2RtyqimhiVxBZTcdV4Z8ybNpNHgKaPifMydfeTh9ZoxZe7S3VAuyMjy6NTJya9ayB1Sf53R3kNuB7zMdZ",
  "key19": "BvC93dfyd51dkhSmUKjEfFZcuPjqAyWxQwvyqpkCV8jsHYmwa5fzcHnXg3Dyav92Krw6wjH7iYiYC14YCDiuR5K",
  "key20": "21uVhcYQo5Dz6V2KpTYZ4Cp6ohe3Zgkfjp4Eux5RRm7T1dv5AiPESBc42r9VQx53gtHW6gkuzuxXsXLcjVFsm4Q9",
  "key21": "5aEh2CWoWXCRQCJwAQoouxmyyNccp4X7aWqWBLb7U7nivjkEDuc5FBUhdgrsbLVCgvy6qovLWznbBJQEecxniGgr",
  "key22": "5jfVZN7hzbNXE5HSe9t7DdD7oi9BLdPqUNR4M96uX1T2cKHgiWzw5iySuTPk7RsZY4BTVxohiWFw7n5XNcWrtW7e",
  "key23": "52n9SxWAmPqEVSB3DiorqVaXWuFD9ZNRn6KYT2FYitrjPpUuyN5X8iLNn6JuCDCK4WFWn4FoE4zEAHfC2EocUR6n",
  "key24": "3LSahJ8448waZRwPS3qKTYoGGz78wwCiEpQnSwkT1oWamY2QBLkwToFc2BJrXfcYSyeqBmJwGWFhqiRASsxBQbZD",
  "key25": "2L1bAvWE1Vx2rv3GbpjCUpzg2LWmWx2M4XZe3nkiSy2Refw5JnZm42NbhNqWdy7vChLZT35Wus5SzqQ8NhgoNaZZ",
  "key26": "3XF4Yp9HP7X3iXF4iiZXfc2siXCmSJVsQRoAfZaLeiWfzaZyWe7mNrMaTr7dVa958z8nRTZjJnK4A8HNVSkakRa5",
  "key27": "3UY9hj5RDX7Z2TiVFkkUZpQSRvdpmwbXQhun8McNtw63ASuy57q9VJWqjseaHzuciQAtj1tubmgVLvFBQaLL38vR",
  "key28": "2uiFykYnsAGnCpSWfahRmJNbcoRraaxjwsPRSqb8edqfnzFyS5wLArP8XxXJNAUsdZSDh7P8dCBuV1fFQyLrgwRT",
  "key29": "AhELfgvRau6Qir5QrdkKzLoD8ZkZo7Ue7fYeJ7Mj3yaXeroGhsAKgueWCV8QXsUZJfH1xwHN1ByPzHYd3Wy6uys"
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
