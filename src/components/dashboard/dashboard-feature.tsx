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
    "34SoQtedmXtn7nsZppPoeiLgpf1zwB7nt3tU9czBH6183riUt737f6iXc6VCzAya6uiJ7PTrutK5GRsGnULZdvfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bG9txw3VeWRAks42uvEHvyGyxXfz5C9q4Q4tMcFQg6fyQzJVe55VYLAroPTk4dcPMSHeH5HmuYQUfk1NQvTbgyf",
  "key1": "42P3hxD3suVbuWLgz6z6XEjmUv4xKx6TkGpuqaBGkyq8mqRZQs1VeyQasbXKYyeqHCrmgkJLcHM9ugxXYWLQoizz",
  "key2": "34qSqN7rZRS5LEaZjS44GhhfgckFB24MqBvkCwu1Wj3m6GnsoSkHiacLUjhQ1jA98ogJesENGpPmxTWsUW6wriwk",
  "key3": "pWgxA4kcH3d862MagfWoVsTAha2rP1mcT4eB2yThu9gQHR5KoepfxWHYwFzjXmbmo8JK388Rsa7aGBz2JtF3PGk",
  "key4": "4dythZBiyoriRSxZnBRz6ifHrc5wpy2TGsBcN1BX2hz7Pt5VcC3s9y74mk9dyyDzkYd8PHq5SoAaEA6xk2nJGb1S",
  "key5": "3upntzchgynVMKG9DXgymjpeooiqQKcKg7UXePnjYFEKRVYBQYWMYsShPLug2LiMGwSPfKJSgZzkB5p7NSAdg6Rw",
  "key6": "4u6EHNsvskbf5dTfyawFVcSCse5XPa2S1d6RKpnpDFdJr1zPu6SNbzkmrkPC6SA4c2Nzde9bKRYzUPqmwDYcjDQc",
  "key7": "3vee75o6HYag1aaEVKCHSdZmwhSot11LjBevjpETEeNScQDkNrBBCYv2faTqk4o5kTFGMQ3YuRt2bdPBMHCftZKd",
  "key8": "4htWzZXCSVSoMRtMM7CgnRtWKHHBrnNjBpcg37XCrLU2FfkTRsQZZVPie8LdEaJ5ntGkPezy23o3RURQH3FJF1s6",
  "key9": "2jT5PAkBHfgRKYvAP8uFsBHy2vLVByJkYC35RnFi1kESsE2b5nAetREnn8VjFdL3XvsabuAUYD8CVTQ43c5SgCEB",
  "key10": "4KjLBkucsNac77BHNpp7aivxqX5nM3oF7sckw45v83jkAYiiiJR5mG3pG27btKSWU64AXS4WuJAnj97y6K5NCSjv",
  "key11": "3p2xNcZV68exCf2Uy9zfGFyJNDtnVxbkutqSBsty937iBaWKi6VfhVEgsR8WScrDJ2HkYGW9xRiVWiV7gNVu1WRs",
  "key12": "3dwvE5GLeya3cTe73FnemZRXkQLyyfkkSkHWvnRPsZ9hMELZcVyUpzt9tpXuzhdqL3rL32GE8g2am5zFJQnH9FQo",
  "key13": "EgEhR97wrm9a9i2xZ361AuPtv1Ud9R7ZhXRUbMoBfNWmssDjAp6KDuZ8nuMQTV4ucG44Bm5EAGJVryMMQ9X51iE",
  "key14": "2RVdc5gascHGAbBAMG6RygjnwDfjwUBGArRgr6XQWM8TL9Gbs35rxwYWncc2Pwqs22mvVdU6W3Z5dCnFBUEN3aVE",
  "key15": "35RdrXcXmzrm4zn9GktXv4bott2P97geFwqfxU2aAYJ9nysgzSNbrbxESJ9vTzv7XPM2HFo3m1SFCTvpDe5ia31y",
  "key16": "5dsc9sagyXUHP4vfhpNwoZ5Urq1EDwnaHP1ksuLCThnmzxKWxwEmEnLY3PtyNe2NQpmSPoXTVyiecbSq6FSDZN93",
  "key17": "2cqDRbNst8VK7D9sEn2vEWtD6AP4s7v4ywmc5MoHHfEKEhHHd1TMG8eHvpThgBRzpZjgcmA1VxFFULHjwa7Rtq4F",
  "key18": "2o9XevWmPpXq9G4KvRDHrhDo9aKM5bHx2c63GuEihRch5ozgVprbCNmxY2xM2TWnLTAaHkeqHuMbo2sv9Kf8iFbU",
  "key19": "3X7eJdVuihnMD7aVwPTPiT2usJmDBZpJrmNNBAy1zKutP3W9KvNSQbiuWGqLYL9ZPWBW5HFfGcczSbQnfRJwHWUt",
  "key20": "587GavAjJsyCXoy7CQc8eZdfC1U4AJcbjxhQ47hnzcVsZLGFQxtPZc8HXHBEBzH2Bxfm8kffaCeaBaZxCQzGkepJ",
  "key21": "32ZBCtsuGLLtK7mm99wC3a86B1iN1uARXmN9hxwzwgsnYnjjrRXAQy4BKZXAP43E2b6mZyE31FPcn6C8U2BAdHR7",
  "key22": "661MsxoZVNRUT6q9HSHXuym1XzbaKCo82urS5qkA5rieqWZkS8FyFfx99z8YNjAdbykrjzDcuVVc4o8txjt94L9d",
  "key23": "5RSGjdApLYFPXiUQceKoF2q3ZveJTp66Mq5nvztRWPMVGxKdSN6oL8NnkaTMbp4THtNPaWASs2hbr8Q2TzH99Aqa",
  "key24": "5zvQyzxnRKE4A3t8vQMxzMEBs1mmXZmTA9ckazcQgzZsVSTgTTNyKfyGe1TXdgx9yqFWrVKoVZ8ZLVetLhBj5d2a",
  "key25": "4M6DoHKRfLBPYEi3AstWYkfhxr4wJCsQydvxCz3r74DHbA39oVgbMsF5QB84WfpAkuHuex9kjQkbHcV4kVvXnDZb"
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
