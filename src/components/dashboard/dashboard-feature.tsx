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
    "2TGjnJdRNxpzWe6UDCXdJuJZaXoC3shG1dLoUGyHwjAcPoswT1hGGPfxwkVz9vWAv41ssjU2Tq4pdMq9U793hyGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sqbRfQg5p5kqKVp7YnHRf6WHh52MaC6yjX24TUcBDuzCs5PUoybJMKr6cukb6YiZU24fR6ARfqEjtmGBUy6KY6",
  "key1": "6255h29pNg6FEY8SouySakx6FDkqJtRiK45EA5TMbExRQZEtmeg48gaXeFEGUB5sC2FJFCK5PzPtxSvNQ19FHn4j",
  "key2": "52t3LLdCLf7rMBHd2cqgkeBfCqdEXJmvyJn96UtZfA9tJqRueVtEZZPJ4D9NKq9Xu8Us1D13i4u8PFRsaAzQJkgZ",
  "key3": "45YpVeFLvXfLHkNYdQWTijnZ8wpTqZguPwoNBf4bfQpctLpKcR2xM8XSo9QdHpAapo1K4RPKGmHR7XKEy5twUvmP",
  "key4": "4QLggQVwHNuhbe2qbsfRfXLwaWxYJbHfuhU5ebhquekSaEgBRuVzEn41UhF6Xm4WwWaVSUVCuLJpG2tmDnB6D6Gi",
  "key5": "LUtfZ5tS8czqqtvqd86W7pbX88DhqysmnjnYwuWcbtLm1Lku1mMAJZ1kwxm27dqpLMxQNW8XheBLjDTb1GkaFho",
  "key6": "5HtZig3XNiDMFQ4iocUHpFCeeSmEHm7qxK1CffGsepmkHsp2Ck2Sdy2ZgtuxBhF9tSyyHKseRxZNQJ7QVyyda77K",
  "key7": "5mMN2ZBtpecDATgdo13EKUBCSDUGk26ocM1CzNRAy1s5XK7BSSove3f3U2xowwMwJ5Wsum9nCGRC2njSV6QV5xJP",
  "key8": "5P76uVQXnSRxhyU3P4bWAxBmiySRxDBcvF65vYurb3BLmwcDLuhFVAMQwCwRnCvofVZUa2gcR47tGNCrGLDRpKLg",
  "key9": "2khpcFWVjWknnRLYP5hdMBpXdJkwu2sWF4Vp4nJxE7AeATJxjUWAtfgP6NZGMZ8VYmdQbEppdGQJx2HM2qcQURF",
  "key10": "3bKVdaFx8WV5AecDdUeeKpzTo93jSNqtummQEdRjaei1z3si6GWwSg9ZGp5Me997vqefa2fo4H4956fR4xjKVNHq",
  "key11": "5Di1xcBK6XcKDcNrxNiYyQ6zNBr1meLzqndfvT3mRj6V7gAiiYC4HTbMQy5bCu8mze4B5wJjxWXUHufPqr7P8uEr",
  "key12": "4Sn2x4nw4GgCnBxVc8vtnZ9puyyv6EnUCwYVqfeyMHufJeTfdqd7EY7RBcARCCoLCwpCUsbD6EJJ6FFJyw4A3ivP",
  "key13": "4TdPhuh8ZE6aVxCL5ZVjs986qDGERkawUQzhJeMwWERrKhxhJeUyBCmr3VnoTajZ6c1S59vx76t8dsnsVKra6vDJ",
  "key14": "63waXxFpWYbXc3bxKf7PaTujx5P9t7GknFbiKai3edZndau68cSX9A4AoBjQHirPz3DifxhgijHVFjXHPJK9AwhJ",
  "key15": "5JuNxdrfjDcPKPuKaw19drSNNzkBAYaiqumeU4EKnPnzHeUnxLYnzavS4mKcic7arAsewmd4t5CrkzUF5hQsftw",
  "key16": "4wGr3J5WejRDSgqQEsSzVJM9gPEcpiCQ3v5bMyoU2qKKq5fySzWBMzNUcRuos2zNQyiGUqePRTn764FoYetpN6rf",
  "key17": "437985z61bVphVV7VDVD6KsGqUgzE9Kn8wRwSCvtKwxsZxX1DvniN6b69Y6JoMJkfXYvUJpeP5vZsLMY42z9hvDR",
  "key18": "3Nfy5GPqD5zXshpYg82xnQUnCX9iXM4b5AYzkfkGmj6jbKtC3dUs9RNpTuzrkXSLjXCLLrNL2cErPmL95RuVjn3F",
  "key19": "2MFzqGvsdnXnqcQCh3rhpaBxQFFip99KVso8eMHnRDvjprTSUoof5NjH7uaNohdUGHUbKo2x79PU9pp3RP7k9rfG",
  "key20": "3FbBY7TNWG5e6nBkzQKtHQ6JELUsYdBsxzyrQeocPJSRbyznaFFfQK9zfmQgT9Fm5Xe17S3yq1o4jutmLoJog6m1",
  "key21": "2fktCg6WQqatzm5nQ77Xq1RNcPwnEfVbQmBeVtALYBcyLwLKM827foJwjzunduttoidQaKJfJbwnsftzaVyRX8iS",
  "key22": "5gn6VBiFadKAC7RjSB1e5Kxx7BJbsuLN8wLiznj8KkKfZThHkohdizxmSfZPgAqAzH9m2LfpgYXCMrpJ4P8yGkfg",
  "key23": "89r7PNoXg6pQuRbg4GBvFwaAjJ2h9e5o9bpCFSUXmEtHnHnrJYNWnv3EKwFDfaFTUiUhXrS85NGnGfYMrEtcgEs",
  "key24": "HZiAKx75vfNCr2gBw65CFzcJARPRzFsDKAg6Y3TjBBUjNwkxrwvPNPsTW4qWDMSiRQP2ukGDVM5mwCDdwsqrs6J",
  "key25": "3mn2Df32GMvzadXd7qytDYavsubyz85CMXMbCre5oc7DTS8AUB1yxnNtFQG3UXFPxq9xmEeoEzN63Lh8mtHAwFF5",
  "key26": "jRMpnFCFFuadfHYWkBPqUVezQtCvGHDbU8kWfA4WNbzKKMebhJ2kmCxnaJMouk7GsXYt7GfhGb532DNo8Sw75ag",
  "key27": "2hc3eHMc26waLnYiAyXrLofYe7N7og28oESUSJfYviSScXhobpWHnGD5RzwY9QQasw4qxh67FhM6ee4a6URfj255",
  "key28": "axmRrBAJf7TiP787AUaBi1puYyGXzgZJ8rnCfAWzkDSo2ytt21E8QLtyBwSQyxRTeUdALBauNPgN52EyU3Y9H6H",
  "key29": "4UtTprVaw8fC9Hg2oiigh2aRMrQaSgaX8c3qPCXG9RWkQApidZbToHWiiqavphoGd94t8q3FBrGtdFD5g3GLgCYt",
  "key30": "4Kg3Nozuhjv7YJDjzQZJLt2x9wZdD1msGqw6f36hHSWgod4vdPANAdPqsZbEiNXbsjRL3zcfxiU59yY78tWPJjcG",
  "key31": "3JyvnNhMspcUXYLYrKUmPTWYAwCbZWFEAQK1tohyZoCjti8zV9PQ2QYsbMVLAJseLmEbANao3x6XddS2UetHpCCn",
  "key32": "2nAyuETwPJ5MNjNCpz5JnRMEFaWsAQ9bENbvR8C1KQXDy8KtnpKwH1VWqBp6DTC2WnQKmz3UYMAZ4zSD1uGDrGnK"
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
