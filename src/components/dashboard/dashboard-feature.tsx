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
    "4q7MPUmsygAcEPcKPft8S26j3cU4rQgHmnzcLwhz3F7aATU2tMZJY9dqrHxXkZsNDfCgqKYBW5qn6BceJAQAEdRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQF8d4sk9WVFwByNk5ziG5cnR8nSoQtK3RscaBcHf5YRkX7bEASevvp3ctoJFunv7vn22ygTSqBTB4adRgXdfhT",
  "key1": "5uqNoCAa6QDCzqD5FrujgYe9FwHwTECNvzSYTf76pH2yr5ECR8Ce4JrDaSW6GMswCwA4VuLsBNEsFJWrw686CwEo",
  "key2": "5cWvrpBrvozJewbnSjVGfE4ZrhB1hbH63tmhBFnSFPsdEPseLX6Zi2AxPdLjmvWpJtMPMsWJyRh6czJNDcntaDbS",
  "key3": "2BS2etvhhWx9jjWLQ1RfBcWJxs66SmLLnfosgJfn6d4FAxN5qJ1dbLBu4GpKAxjwKUH1UbysVmfD5KUnV2qUrjEv",
  "key4": "2htPiup79ZnPVK3WK9MLvsrk9pPAiTvGxUMCUgzdzJbuk2xyw4rWbcNpR7bXLKx5ifRaZKMau952G1ciGKw1yAYM",
  "key5": "ys6VBfCGj7aBZkHBNDvhsrDJdRBU7PtxjPWreBFpF3kgC4cD8Es1jcikS3dcNa9kaqfSS69oNUhFjdNUZY2xY8e",
  "key6": "2YAAmvdNyyC831zVgbBThVADEAhky6SUGk3FLQkNQ8TLXzwMiaGsFHwez1Veze4hNeC2fFhSGS4J2xu42sAHvvLM",
  "key7": "2w3u2NaGPzXxzPWr3iEYu8r7MXBqh1qtQ3nwh7SYjrX53mNFUfcf6z82oX9dcskpr1uRjkxcpv4bmfqjUbFh7a7o",
  "key8": "47XWRQdcf7UJKPckUcY9kveRXjkp4q6zYdct6eZSNvDTWSnrFTUU18V3NanBA2qau7GM5TVzha1zMcJ57KswQRMc",
  "key9": "3JVbeCWVV3cd2zw4RUUpyGyn9asuFL7aseZvTJkRnR8vgpPNmgGFfxoVeCPCebNaUY7H6DwqBVsd87gsmR8uwGHu",
  "key10": "2nz72ugBGH3S5WfxTb5WtgNDALotyM2dx56cHjkD6zpPqn2w3PrAmFBg9RM94Jv2V1RncV8fuGBvjpzFDajMZSpk",
  "key11": "2CyNXnhHoBfX2zwMXbXk9FrGtXmb8KbYP5NPqVTysECaSX2UT4XkmhoGVHgQsadeQFJNiCxDfthMHE1gShuQ8wrh",
  "key12": "3oAZEk7VqSGsce3PohPp7NzBz9YvStoJeroKtm2PugiM61PwqNd5n3umsiQmK77XtKzLB6CZQbg6ivsTJpmf1bw1",
  "key13": "3HKnRJunukYfsReeQ1yaoscYLpDiQqBEdL4jdvwUWqTvduZLSRHiEAVHg6VGAzW7QMDx9hGb3jSABAp5BsUWyjA2",
  "key14": "35pvV5uWa1GawM1nZceGrgb3ZMxvahA9B7kDQsP95u1Fox318BZfvFPRNwR4536Pkf54uDTPu1H9iKhtSRDf4bYz",
  "key15": "4YTQHyBfuqcqq3zqRta4ayA7pvgEsF6e2D9XFWJGcDVCTFrpKW8BQC9EdZLwNr1vj19Lhzj1bZxmoDS6Z77LudLB",
  "key16": "5Ejfh2QdJQywJWjepdxJPSVMqhh3mG2zTAGRg3RgqqiHKmPY9GJwN1EF9TjzbnxrzZ6dvoioVMXmPjyKPHhwtJa9",
  "key17": "21iAZJvoBnuJr2wKNkrvFB9tsLFELawcb4XTuLXDddxKwgR3B6mtpvdP6f3TrLevw3W2cAMDJbkdMDMyk9XjVMCE",
  "key18": "5BuyEZ2iSwSvjmSrqwEs3PRVpYnBiABoJWtM9hXQpumY5is7UML1kXSxRpAt9JsXrrQBFEBV87FoyAMzSkk8sxgG",
  "key19": "55SKdE1KE7eaaugi1w87dnfQ4fMmfWWDqHmcVYvYy7La55WWEGuNk751rzy3N1WXxVpTWWUxgTRHXYQrPmpf3S3a",
  "key20": "2kbxEmB9RhEEPRLBoB7Ukt4F5o5WfAHxKqJz6mn5FyDz43ji4A697FWE3zdDTqswUrNhMKcWcddxgUDZzxudavRJ",
  "key21": "3T3P3w6wNbmaEaLG1ryvFE3SiernVggT6yX4oqMKYGCBYX6uGGJ5P83UGyh9WakcTQFGq6wgj7ZsqzjStkmszh73",
  "key22": "3fpu5oVesU6XsA2uU4LV8xT3TM1RzmNgxybdTV2nCW1nGnVZsaLbF9SQxGSzCfc7whQSdQEVLG39eC3wF55MojqY",
  "key23": "2KtWSVRSrvXyHZGKtgnuTXWH97J1VLnQBn8yut8z9sAYRdsWcdGkMBNoYRH1Ebjby1CQcmRCXZFExwLeRnf9cqi9",
  "key24": "5Fymrz81ToRrkSgAY6LH561mrmCpK1LPXHWgtuZTaPm9zuM9AeJdEsUgVy5VWwj9YWuZPSGpgvjD5yGkLHywsWVw",
  "key25": "tWgkEDTjBwRRCKM4Wt4YM4jDwEp6S2i7pEm4NMxXENQRQPXd2k9yfASA3mjknbzAd4qPthVXc9NpsBJeBXbD7KM",
  "key26": "48xL1ZUkThW9h2RWnpmYWVTpaDW5TfyNyasVURWhoQ8VHgnSstWRJYpCYW1zwvQCc6NMUQgMDX1bYfZqrRkAeCfU",
  "key27": "4pkdR6yojWcK7wEG26DPsnA2QhkeFCogb86QsJvfEkawx9GUdfPDxYZyy9JKSECsHWK49d1qQ9ZuhfzhojKDzxkk",
  "key28": "38H7ph3QXSUqr5dPyWQDLwuvsas5HYnK84tHCrBSYbsS31Sw9hmzHxkUjT87ZrVcpLwJo3X4PMnkYHGPP5orKLb1",
  "key29": "3BheqVJoSbD6FKwzJMVigTah2H7xy4o6wBVCGehgMS4kcKzFVv9CkqAY9tCyrJahnXGgiQ1gdw52fw6JVgV3gk3h",
  "key30": "3H57qMj3McdGdVni9nhjgko9oWXpdCNyrdwmbd95DoM8yHNWhLZ8v5uFNmnJqLDwNkq54tWZY7LtTe1TsujGLJJV",
  "key31": "SE8u9VMMPrLNtAVTKLHTzezEuQiwpxALda9NeKzW35uLbETymh7Ud16YqhSpAbmwQh7tjWTTEwUotCWFLQN49qW"
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
