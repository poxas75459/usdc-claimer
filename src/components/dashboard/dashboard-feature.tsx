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
    "5VHR4T9bqbdLTPmcE5b8xP8PdTWo8C4ShF7LsnyP7HC61W6dtv87MzBHLxs1VRmZcMPGg5csQFht8MzRRE6d3zk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49fCc1nqbtcWk2bGWATjoHyfcbxSzqFVFna8H7v6iPFi1KtToHj2NGga3dnZC5qSNABS2LHk7EjS2KoqzQYSqbBJ",
  "key1": "kbkW8tVqQ7PSnnQRAzGh3uQ55wkG1b244NAD7ZmEShNnu9xu5uuBY8WhvX8L3N2sYV5CRxMe6rs9g5aeubpqXsS",
  "key2": "3VQcfB3bheWapYQ2P6m4Y3wwswHMQnNBmCvAfqW7kGcBWpzpYqJDXYs8FT7Sb4dfxBxFYc7pC11UQbAwtEZf9MW6",
  "key3": "5CziwUrdqavdmSTjKdjQkcxi6XRtTyfp4qnJv1EoWWa2BDcc2Z5j1YmpcwFC9fA8yb6DcgtHcc8fVJyav75EbAJJ",
  "key4": "5mMLGPjpSuUtyuYWUwyT5YsoNvs7zkp275cXQcLu9qNrpXgNmp2W6ZUagPAHQQud1SxTHR7ZpfZcX5UmCc7thbx2",
  "key5": "4tFPXtqpujhKemvN985opQ2FAyAfr9CrqZvqR7cbU3fWyh3xJZ1zuRFiHzT5ogsT5CvycEGEhp2dZ94DyQYQY4TL",
  "key6": "3stE7mSTVi4LVixAfdMETg7igpoMTbMp9VvDcmjzcjbZ9R4hyy7GMNiRa6QzkS2DKpCE1c3dM1Zdnhh6ddfQwJnL",
  "key7": "5AJbSYsgvMzRX9ivA1UYitEVEFE2BL5oEzu35ZV2ZXv5aERKvnFgMGcQs7twgAt4EnZ7sGJhxMapFTCvNV7WYMhN",
  "key8": "5Rhwvrq9Sc4o7wDLxAEzojoePoFsZKUHBAjNDyXQ9mvzGPSkkKDeUy3bo7t13dVJk8iGejwL3vDeJzZsR6zC7FUx",
  "key9": "p19aoUc79rcsidDYGuRtsogwhD6b25fgYLPVEg9ZbA8s715RJjqmPKtz94HuWm1btRxyD6o4vEyP5HzLnsPi8UB",
  "key10": "4x3VrA3DxtqGjuRqwosVf1BGs4uPmPoDspSVXyWwpQ9jvxZ4iz4HpRcK4LtVoMYXgUmXtAAG68kJ8V4ohT4r2euo",
  "key11": "YyrZVYzzznh9Wq9gdu8PQ37pCsnezR5HeMaX4iK4hDrLwpEdWPFMDHSjnmuVwX6iYTv7kMn1rRaD1XUeNMbvkTm",
  "key12": "5p1JwcFabZ7ryuGmYaroUgxbPvjkABmSAqzVKgMgn4rRcnvAnwwdigkdGWQ4psne9s6mY54Qxgbi4cj3kvCJMMkQ",
  "key13": "2HEFVKmtBRq9R6cBmeKcuL2XvodMBSsebLPYhh6aj7oqnBpyQPbnSdM2vH4ij9frGWdU6UGGC4r8oj6qMJPDW6H3",
  "key14": "3xLYqxN7uCV9kLQwgHXs2M4kNBxSRxyNTQ46YM2yy8dJM64jtFpdkRSFiCHM53QqnSMmaqwLkUhwTPxt3mq1N6yG",
  "key15": "3zJh6571gMYg89h7x3VKWmS3kyNB5SRZa3G2oezMfcik3gSDnQomu561ZuNxcdMbN721MuyAHjZdoowckUPFhGfQ",
  "key16": "4DJMhDNDEuqip36JEfyeQBu8Km5i2DtTtby2m9QrF9bg9AjJ1u1ynt2wvirZJE1wH3Q5YANynXYJJPHgkV6eKAUZ",
  "key17": "UWpH5Ks9E81A1tCha4jvGpzrCqw3WdkyV1ExYfEnWBHBHkmA6oEou9z7PB1qeyF6V1AQeNww1MTBUU5pRGK4yjQ",
  "key18": "2XQkjpRXayz97a1v8E87ABGzwcNSvREFHzMFnTEhYkh5BuiQovbNv4mUDYJJC8S7yGanpHLF67VZJsZjR8NkdVWC",
  "key19": "5TRi9jNYrSQu2eDLQ63fbkPBdiUMTdiDjTXHiPuNBuoWaA1siXiDddaw1ASHJo8is87o6mxUcedkynziigkc4J8c",
  "key20": "4Js1LugMtQDdQ5Qx1WA2hbyvLpZcVABh7dYYgBYdrnv8ZPggxGK2zP2SkfLMZ91npongqD5G3XoBKHHSy38A87mB",
  "key21": "2gpYnFi9EeyVrQwwjnhFUcJvgjT11FL7YHrYgHF2te4HJCeFYb6BF4K55Vhjgc8StnyPVoEcdSDdeKVTXFarQ3G",
  "key22": "21LJ8VY7AuvtVZxjoEXUzcoegXvc4JHtc57mSmS1p1fk95NUf3nSSBT2xTWQ1iKUyVdoYuawUWRjYSNXzfBTbonr",
  "key23": "5yZ7RThMChGDQgVcQTzZ55VsXt4JPYA1tiDSEeDNYipuDAsVx9Q7z59ZC38AhBJ23uhwW9Jw2EMehMhZV2hDkRb1",
  "key24": "2LzekGUxeHeKZpfWwL3fDS69mvvCuJt3VEaLfYNURRN4ULM9PKgyHuoU6QcNibYzeL8j3vLHN8mdBWMww6h3Ti6S",
  "key25": "nveFBoDQmRmn7HKQEr1BQ1sofTEktNWH81bNTqbEvFJRTdbesdx8FKRA2M9Wp1w845kVHPqFr7HX8rNd8Yaspyh",
  "key26": "LiubE6Nq6MQMEJE7w4uibkeYk5z7sXhc7nnC4hxUMRyHyUrxtkrDiXMbrpqDWrFVX2brjKLs6zwuYsMUCzWF67K",
  "key27": "4E6h4TXno6u4P3ZxR7aNe6C9VQWMtUe29RzRkxjUAsKCkEy47D1qrGcV6yStvU3njdKCjCZd2iFH7XiLJ6pYANLR",
  "key28": "2dfjwCapEX7QC6CA8zMnaEivMSsyHeFfcWx6Rj84WtyTgzgSEqq2n3Lqit5VgDEZHjVBMhSB4x5W2CUNso75oKZD",
  "key29": "5p587rAty7yY8vPM17xAoeWH5UCRRJidU3LBv6WQQtP6tz9BCs1K1Cguj21EeuTbNF85herdVwW56Mp6RKTmvq2Z",
  "key30": "psGKC1ifv4rsKyP6Af2yD94K5kKNmNvbFmsJxwHXGhrMJBMrTyQy2hqnZpJyvPzqu8BLQ2BR2FNsFr1z8u4xCgJ",
  "key31": "4jyY2uinow5xZLxyBghtJQC9Lvo66DdNg5kPFVkYtvvwt1HkZo6xv69AC1SgSH9iyJTwp4zY7Ea2sDEX9Wv6oazn",
  "key32": "4VSB8HQrsU9REpLcfav83C9AD5Ra8pX4fCfF9H4C38MUz3EBGRD65c7XXrLPFtjfzdp5HSra68F7gqDu6c89B55S",
  "key33": "Hf28cjENsV6TMqDf2JwNkAuDspP1nVfQtzZXjLF2R5TN5YbHJRM9oDeyf4TJxu5hzDRcYWEqza2akEo5FDhsccK",
  "key34": "4zmyT54UMphGNy4ReHGBBSsCmG3sw5dK4eTgk2KCeLjy1Xeyg3qDCk9n3eQDwoKmrhpq5GJ29FPWAaHTivLvugco"
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
