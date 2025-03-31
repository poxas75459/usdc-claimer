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
    "WcnceN3zbykyKVmSxgiy7SzaFWKsfZS8gTUxEBZU7LY4NwmRzLRgWjxTLcrXH6QM4x7qJKZS4kTTvogJhdTTF8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJvgzrJGjXkdNeDLPtHsnhmz5d44XkZcJknwwpUadTCxMiVj8KSAd2dhgHLz42Cso4cXT5LP9nmyS4my8DPpMLF",
  "key1": "2uCjZ3HSx2mRb9C8y7672fD14ZRBVFxmiLMjELx8vztKKyTv8Hdv3YK4dYKQCQmLQPTihseDxkxQUD68HimDeMRV",
  "key2": "3Cyw5asF1JrGWTWBYaVynsUZugvFWYiD3XkRp3ALy16JDyffNWYjWcn9GTARt8V9VmkxAmEheTFW8VeEV42fCURK",
  "key3": "5Zey31p8pukWZVoVpGczwM6tAsUXoxNS6LQm3htLXkoKeJh2tVvsBfVGNvU7mtLdDQUxPUe1yZd3FTNFwSh8k1Gp",
  "key4": "3MngbU7CB48i3Cr1UYqxpURPA1Ng4nKLaaHiNt34gDbH6uVQB8HgzeW2R7fvd6LTUPh2hrzyeUYEY2xwukh5iwFj",
  "key5": "41fnrfT6WF3TTGDXukJmQHFhVaQ9xhkpj14ietU3JtyT6kKrJzW1xcye7FjRiZmQz7nTHuz46aDECLc7tGP2EzxW",
  "key6": "24YE59Dm7izDHF5khpeP5N8XGHwg1jnmDYw7PLJh6A86eWyoec43xbf6SpSRk6UPSdDMwpM2p1o3gLksA9qcRDDx",
  "key7": "uaJfXyVqrVB179613nGaCJNqQFYxXESKEi4WkCDSL44PRNwr1yNU9vDFaFzmkC3tekmMZ4nwrdzjJz6z7c9mvii",
  "key8": "5iExJwnwmFLL7aNkeJ6LdfLTZ6e3P1BN35UiiG9RhRULD5TfAtu5JUBMHxsw2LM9B9kjF2j2GfKad9oPidVMJUrs",
  "key9": "5CfvWNLT6WqMyiGLozukvQ2rBaEj8qqQPMbicd1sXtCGfifgHCi9HydBwSSxUcjqa7aKS6Lmmx2X7n8NCziCEEJk",
  "key10": "gWnCyxDh3WsH1iodUo4hcYb4K1iN9PYLH9AqhGiq4ttXY95B6LeLzH8jFSeHBtvnnHRwLzS5ryamPeSFb9xFJbj",
  "key11": "4RRocdCPuTptP8SJwC8wPthBDP3NPZPtaxi7R3i2wrWuDLvayLu5MFJisxm3XHSFA4FRpaKZ3d93sWSxJzy5e9rc",
  "key12": "5UFRamFsgQcnnCY1qC8JQe7FdcCz7PJhuD82s78zXkXjhqMLKxbvNHXLjrMkDe6AHvWqUcdMgHgU6uKDPTgwEfRX",
  "key13": "5Eu8ZfWMBqH9tc5rX4C28yuQ9ZqVuLDRDHKhg1QsuURbDWQn71VKi93qyU2eeSzuSQHEKmnpkeqRXmRgzQHKpCQv",
  "key14": "4VPqusbL3WePHUVkfK8beAqW9Sb1oSfsDnB4VaCLfL2NP7r52XsksfH664Qc3zDoDysAL2mEyZG9hDV4czQjDXfy",
  "key15": "FhABArJ8cvP9RBiG34TF54PjFh8Z2CttpJYt7NAo4doF2dkqvADw3Rj3DsErBwW7MVAX96rgqgGDH6M9jARpX6x",
  "key16": "3VPZX46fx5D1A4C5wkYPgeLTAiG1Cu5TXf478PNJWRvWNinUrvq7eBZ7gWaMgQYw7ThKvEhG6o3nnQuK82FZCZPn",
  "key17": "3JNbaksCZ8tvJ91NKA9yvpZncRFu3Wo6gBkSiTTfuY2Q96PguDRKW2Qbxnvj9kSnNQPxdr2ysjTM7ygzJA4sqTYX",
  "key18": "2StVFb8BQc8oFVtyGGpFz6SV76SZFjKxRDyo9Q51CVmX9U8JPrambhYkLdLQS99xVUcQsqqsrCWkbTgW5FGRmHme",
  "key19": "i7ysNa76T8iL67RM6spp5tKcv5vRi2Mop7ujHjwq1qu6hnm6wicKvRRF4joH8vGCMKcx1YYpF3gFngz1usEerPh",
  "key20": "2UwqB6rbUR5fb2RoQWe3ScoGkgmriYaUqaCUj7yyJKJJRpSG4CHTgef52GzK6jeijZYvxnvEteW1pDNUbQK2Kz7Z",
  "key21": "2yLXecKGqWF6iH7abX2sdof9FNx8UHb814PrhSpy5tMwgVR9BVyNkBDJi5mzPNjr9GCu1jvCnGr4qf27JskeuRni",
  "key22": "4BQju8J7Li54TCH2F4MwNyfsKwSnCCfpHRr2hUCHpxguJULXhYMkny6NEqeaAae5J9fWMsgzNmneUtXjnnduWkAq",
  "key23": "2QeqLGuaYdxKU3ztY9mubQDCotbwUFKNjrqWcqJFMuKrngyQARVk7YMBJcKnbwTThJQcJpG4HBpfKphc6MXVDs2t",
  "key24": "5fVuQRYuDpcg33fUCZbHrXjfkSpcBdming65rVxJCVU66YyTVFxkPuquPaDxg8g1fg8Mw9BcKX7B4NNrWsmArfRs"
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
