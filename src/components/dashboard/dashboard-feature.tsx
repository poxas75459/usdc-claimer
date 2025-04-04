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
    "4NAzRWxxrmK93F6N4p3RL3NuHCURKvr6M4WFZsyd3nw9yXRb2i2PvcBJ8Xrn1Ja2hbfcPR2AC4ikGfL3g9We9QYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "efpdWWGCC6f8jtTp98MZUEiKjGpNsAsanPper7CKWyXDv6mSvX6CwAjhAJLbjZfEnaqyTWA6Kbkxvktgfw6XtkV",
  "key1": "5QgfkSLoEZh7b5J5kQbj4gyQSJ1BuADdzrdjSZHSm8mwDLJKcZuc3qxDu4YkmLACD6B49Pm9s3VWKQEPVz2HTbGV",
  "key2": "5xMpEAwsHwa123xiDrsoQytMa6TbfsWWub2mPMu8WoYHSJJxUobi46HRA5Q8nkuqvFmogjGK8ghbpMD2hDqmztTM",
  "key3": "2HgZbm5NCEumm5UmTbNf7Ui3igH6BLkbXTX8RYyrqZ2sQSryayEcpBvF971H1hQ56Fu56GFfC6NJBjTxmEjRuoVr",
  "key4": "3ZFfQw9HR2sYbkUpiUmqUsGjUcdU7USpiFuRpZfEFGz6xeP1BSufAuqGHEZmQSo5oJ2KL5EopAC6mt2XGWbr8zkR",
  "key5": "5ghZSNXvrg3EDNoUe4Fed6G773j3pHHYKiqdjVYnFyQmDF8NgNQhUMZtHgUeDVXj2bD48z9EyFGWPoZwAYmrTEWF",
  "key6": "32a6uSrE8RvRRBDvbSACjQcMZk4fKvGXvX4is5iECu7vqBdaEsbYDTTVSxELafrXAddNiyePdmh7HdC3H41WRXM6",
  "key7": "6FssQjNLFp9HZbG2Q2cdesMzzJuCmNwWVjkJKiCE65cDk9BHKcwVCei267jfCuB7Lz8kdnJtw4e6mA6GpMRwy6m",
  "key8": "588TsUu4mSAPJW6ZjQ2dya2Ji9FrpcDWAnLrjsktKyKsJq455drHTh9CnkiWC94RkyU6KU3P1w9LLCwVUDWZt7Ys",
  "key9": "4V9XfYAKZEUBvHgjc1LExc1U8rjA93C6R9o8rNVbYUQwcB5gm7ctsLndJJi6tLxmH76y5zxYKK8dEYkTELgGqUAA",
  "key10": "3j2w8ydwvE9sJ5QfE9GgznSVYbQsMoxybr6v4vzPuPP6KJUboC8Q4UUfmoRNACiscwiAf1RiEyetztYNsp9AhxAk",
  "key11": "bL8i5W8jwpdnpokNNJBQx23C4BMUdR7hAuUVH4rnpustLx3G6eTGFWR8Dkhx3VnSW4xL4pqmktgtZH3vYhvNsPv",
  "key12": "5ZGbeGyFJLxUx1PjEZtgbWxNX9eEAUuerQtikERwBiJghfFRsduLorADM6KrGvCRSwQVUQ3j3pG6sDgfBQuR4WA3",
  "key13": "32ySoZRJBi6Lp6ktRWzYkVST9vEfrCuAydtKkquZ9TWYNPd9oby2u5FiBbRTwq3KdnZsLGL3C2kHSiSpyBZnJrKX",
  "key14": "3XpYzt8hpSLjbhVo1LBqGWEihSPbkjeDar6rwJ7Q6yvPUAbTicZwbjwB2XXA116mX3zpRWZHF4LAAPEqUYo6PaU9",
  "key15": "3sAhVJ1QKYaYvXH4pqJTpbWFqyEbbFjqvxzTGr6xPu6NfAZeDMLQNzYFUjSa6Hvxn9kjjacY9qpZXZ61SGbJ6aaN",
  "key16": "3sm58ZW3mvBdHUA5czUQyiB1foUaN1Kx9nPY9SPSiMeXJFwr5jKituMQR29bWB9NFoLm3RHocRnbB4Bhyw6LUT6v",
  "key17": "untMC95Sr1fsuD9TiQTAvAbAQVkr5ib2Cxr1D1obfEgFSqi1e6ezZtNHfffoajJYTTnionaLwcDuHpeHk9q1mrA",
  "key18": "2ZjdZE28cT9uK2WT6S6fojLE7sVTUMw1PTSD3d5hYPMWkjd7U6N4h1zeMcaW1hqKTJF9dihEnwNs7794WoRkL25R",
  "key19": "2r67v46LHx3n3jXmVZyDYFSWVcXsab6aTnLeKnvaasKTbBmEAn2ye3jK2fBPF1epqbKeZE1UjVJCLNWfEKLp7RJ7",
  "key20": "5ps6QNeY5xhKTnMrWFaYYnogH8wWGMkhSdWFFVCi4tStBNNEyQ2NQPv7nCsgHoDkBUJjrm4wxh9daFrWXL18ckaT",
  "key21": "2z8ggenaE8F5TgDS8xtXABHauKnQjFMiroYnMb3kB5PWPtKSztiSGF5H5wJ8y6htv1nWZGuesHduZov7v8zG3G9x",
  "key22": "5jDm5sBEAwmZramqSNbukXJfsPLYCjddkVdLCHv381K5Pub3CVFeUMszP2oegNAMhY4QTxGMYDrsNa58cR4d77WL",
  "key23": "3kx26eZgVnaxzwb2W78Roap5gQZdND4RmFgMp2uQZrzMPnHJxJrvNuxkHVcmELsFsYsB1fFKUzssTjtvBgzjchwF",
  "key24": "3cbpXuNy5Tzr2T96fWX44c1cK477PxVk72tY62W9pLLZN8kPkGNiz3HRa38FHFq52kLbryf2963uUjorPPNDJZzg",
  "key25": "k8uv33UwW6qvxFpN9RusTHabv9bunLL8JuXFH2ENhSR4QkhS3J47TeJESEdwtiUGFzHbiPSFYoaxnoWRnckxG7C",
  "key26": "5LCGD82MTQv55FfCFSDTyig61jahzzwqxhLZHe9FbSrKFJvHETqom3udgy2pTKzssSSa2sBgsjNfvtSYCkhRWy6A",
  "key27": "2hPxi6uXJ1fTwjA3iYzDWHaPC6LT6JAdARzmw5F2jsJcr3TcUUA6CJRTJuHFv2pgJqUKUb99EjtCQ3iLpBkxMsvz",
  "key28": "35ruDEYJsx55aMzq5RouXNYSzUNvsoXDbhnGueZjqnJXnNgDygonFFnLZUN6SRhnfaFcNKwNSaJ6akxuqaqNZT66"
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
