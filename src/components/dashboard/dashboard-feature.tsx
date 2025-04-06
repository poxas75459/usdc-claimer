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
    "4MffQsMBSenq64GhC2GcjKbJ4mtkr5PEWe2kEsC6rodFra1X7Fw9AnxZ8n2erhRBYwQW6CLLNSGayGstydeVbuWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdkXp5Syk1uP2JfNCwgTwWLyTzQK4k6y7qbY1DJaDnvBD4EAn1mNsw97qzU6SGLgSguQuTdP1dYdx4FTRetD8hz",
  "key1": "2L8xBqRBfANBHSFKBiDm49mfRLg1HNsNwmGRrbVRBDMwQZrKeUNZkfvtMTeDf1UaZ3rqaJ3ChUcre2a7F76FqBKS",
  "key2": "3kHkCWaArk5TqFgL9cnhWWJAz5mtdKZadveE51ys92m6GmYuPF3CLMxP44M2sSpUWbNSgcAJvFdB6W1LzNzsQX6H",
  "key3": "3bCyJWNT7LyVHaKCGcpEFF1k5mTi11KZCvUif21ViFH6Djfenj35rvbcQZA9NEtTPJ9uTgj91KrA14p57oyqVck8",
  "key4": "NVBYKfbxVGuwhoVphm7Len6Enr8kejfdZcw8VTBwZvusWMgwUQ3WEieES1FxGtosyBDSGNtn38o5kGcNk6PYiZu",
  "key5": "24ANFKZiTF9bzf2xaxYmsS8DxN6BGRP37vn5cH7AaGN3FrQV4G4u1GcRaDsDQNWZLYgtyr8R7NHsLf6Srn7dJZ1e",
  "key6": "4SFda42Ux1EeBiQn36GDbqAVWiACDv84jff8tCJGgoRcMdvJUMmkSqESRE7xTArBPNvpqVihoAvH6KMVxD4FQagn",
  "key7": "3Ak2ciupWXMRnew8KsxfY9gcPBSSARtZfWVKcFxqdSdFjq5iV9SfCxsyEpiLD1hk2mau4wTmkkRKWV7eELjYzRuE",
  "key8": "5AVfjCZvdWpckNVaptJsf85e9GyiaJEGyLuMAFW2wqaKaXCwLJUeHJFCVPyiXJF9TLpVfxNuGGPyRsmwKd6vi5B7",
  "key9": "3gTdtoLJncshrLyD1DqAMZNEpvHwRZ6nozjdn1YEGQdqJC1eDJXCmYKppQRXHF4MSgQJhvPCe9cWUiAXGJHdonKq",
  "key10": "3k6yTGogbNVYrYvcsWQyAi59sWkJ9sDpJAmHnsmZjA39dttik7GTFVHwbhEUMcMqj9ZpJqqYqGfhwQi9mKZoorhi",
  "key11": "63ZCJtBLCZuRFGP3HQPd85BCZZQEE4pqr3CAX4Nczwrb9wH3SaNL3eMrYQiYZTyEzPy2hf1qJszsAqF2Q1c2qnnR",
  "key12": "3QB1yX1mZZFExyUaFkgmC4vyEzkeahxnBD8Da5bUHPRXBU12CBov1w6R8e4FjS3yp7sPELxq5UeT8p36VxWU19hz",
  "key13": "2Yrm4o2WnsAQgAzsvMgy6kaT49hV6WE26Gcdx2fMVPeG7J9JhBkvCHzqfuqRpcSLq9ZSCw3yzbgx29yYcwFoegJY",
  "key14": "3gb921oyaognXERSsVNQ4txWRR67K63GS8QAXXmJy8L2FuYAT26FBapKgtEhQGnHYC46DMQuqvxdQkin5zKjd4b",
  "key15": "zK3P8JzeBgaUHkL8dbxArK5bnbhntJH268kQBx5k86uRecFpnkSaiVmZdSS91iXfKoWQxWWmwuqnxo2gaPgAPtz",
  "key16": "5n6HqW53kHt3o4iBWCfWhvH3GhWcJmvefsCynHkXy3HrkszYo16StT3rRsSXYBJT1HNvWphMiFBRRoqbUM89b8KV",
  "key17": "5VKhuBHawJZxXNBrA2AfzQ1cF5C6xAre1m56Tm8XeHqqa5oBP8shAhcii5BRX7D144GKqN6Cy64VAj5KdKBCWUx9",
  "key18": "3iKt78bMEXCnhSeST6cbCG8usasBvbntKu928dWHF5bEWJ8czeTMz3qo3QxsGQmbqNDV3TzgeZMrWoqbRDodMmP1",
  "key19": "7rFKVCfMFKXtAJgVgDnDejWhiZ58aDcmpzSMu6nzMkW1vWLPW17Fa9kQFi1NVf6aW56TVEhVNjmSiU845MrYh6C",
  "key20": "r8GBB5yx5Jqs9hCTSVfZqtK15UmgpmQJku3RqZsXq5vDe39YNx2hKATQFzUEuu2E2ASnk6cFowHjyiR4yZtrrXT",
  "key21": "3UY18V5iDMXRYvTWoqbbiu9bMVugzp9Pi8ZpjhEghf9TwsT7A4ip6B7128feNamoUejp5GXyYVVt4oMQs1C8Wf5J",
  "key22": "2Ni7Ef3pKXJo9CPvFcav6iKyECFsFSuJDiwdZsKNXQx6mebcqWqbAPs3wVdwUakWdA5QVgEsY3ctbek1bGVeyesD",
  "key23": "e58LBwoeiuTx4e4ZeM1Dc4JACH3qkRtuXiGWgV72UjVMPsRGRZctrYtbJSmxyRWMNYtNbnwjgNszV2m2LuaaB6D",
  "key24": "2ZCB1oZiuuwFz4o3q6ZdsjjnfXnfLWLgncAAhYb8AeUKQN5nxgKL1Qj15imqrJ15FpJnrVqoxpatp2P1hJWGiYmq",
  "key25": "3ykaaX5BsakxLSSzuW9KxyqTAQErVF2L87HLoARSTjg2EQGx9NYwmHfbBgNqDQX5nbwyVX1U4mRuvUdm1rnWjRmQ"
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
