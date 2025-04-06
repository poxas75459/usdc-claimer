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
    "4Up83VyGLog7yPUTN3wK1QTWnCio67WWco9uS3yuPhC294h6ZR14TBNY5yPDZwM2gxXybPj19EU2w6EkqYvYsRrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4eZk1qggwgMK8WLHNkrp8fs5N3YAQnmCzVsj3DLZBrFPSZvtfJxbijvxSLz5nRZG3bJMvasS48he3Y7EQPXtU5",
  "key1": "665mQEp3ZMfbaf2PFSQEPgD5JQkpXYVaRiDF79kuAQNJvzVavAPX3UCpErJTYLHLPx3cpBsA3XzsuEtPa4YNZKrb",
  "key2": "jXdfqFfXZ2FSyQsCnS4MRJ3apCzAShqGdaLWbr2voyMvJoFQps1MieGb2GHuRUjkRf3Efsn64b83WnaoM6JK76n",
  "key3": "5NWB3pyahamrZMFkNoiVRHkTCiBG6pCHf2tPpz42F1Sq8tHyXRxh9TW2hTTbCz93GeEPGY6eoKnhVGDpaKNo14tQ",
  "key4": "tQEzh8FFNruh8cGUTgBmKPm34stRwVWsh9dPWTdz9pYbQRHRFvszoNNy4HAArVihkAcKWFKjJZdSykDJ9vuYmjJ",
  "key5": "3V1heoeRAQtRczYS4Ai1iFXgwwXaguvikrwrEKRx4Sm58yHsXUiKfevvfQkzerU2qvtJJJZ5Y1dm91QdfENXEnYc",
  "key6": "zLyFtVgj6t48AGPVoCxaE7jbJjGYsrZt25ruMxcxMF8BZKupGSDsMZEKM8ed197JzB5Ny9kdSefWgev5gCdD1rL",
  "key7": "43sooHh375Z4bJTyHjve9v6SfjG95fWSkodxEXLQ5nUZ5WHhBEGVmZu9D4dANJAu7ugfFi9hrbCBCgFJbnWAebag",
  "key8": "3Lc5oTaecFBBwaMW7T1GQqBbFC2eS2yi1k9CoyWLs8DtWi1hreefae21d329kF7ZWpSh7mXHFFxHmCxCAEdPDpiW",
  "key9": "3Mtg5vm6GnMM4yxFrFDG3UqWa3PYM4zRBvu9xnFPEvpZ73mkJZYQxATThytxVsXqp9vGaGda5SX1KTeEGNDDaC4a",
  "key10": "5NP4R2pF6jPiKMVhphZnUrAxzng7X4Gc5GcorxdqB2n89qWEbU6RNAkdBoWyiP7QctAq2Wn4WE43JEDU8CF9SURQ",
  "key11": "3b9kgQCzjanA3quzx8KfUjxMMVd864gfr4z4b4qn5N1jMTtWynreHdn7JAhxiKf5w2CsgLLntxiuHFnb1KreZ6vF",
  "key12": "5EMNwZhAZMrMFU18KWBZPDVrFJMYMCqowXdq6iyYmkfw1oVsLJXp9mSYzVAExHA5hZnL3xMQCktrTPXqTi49yZ36",
  "key13": "5hYnG54XetjY1pH38vCds1vYUcGqtgaJKUH971LfXr7CUTgtmsnrW5qtvsRRkLpWtnp3NS3czVeP7Hu6Pwmoq1UQ",
  "key14": "2gewHH3VgETT2C9YakT8BehMKjWJkki5wDiAn7ahka5wZqfPcPZF6TqVTFQ9zd38WHiT4MatHL93oWUsHCUwb4Jw",
  "key15": "2FFBtJRRHmha2aC5vMNJiiuBVARjiFGd8WqnxnfYb6BvtPJyGuwWiEy8WF2V9Sr22iygnDxEBYPCfWRwA56UMPxs",
  "key16": "4o8HHg7PnpCw3A5t9k5HPojtZ4TqTTaBKWtpoBLRZYGhXC7RE5at5k3ugbXYEJCJxbm5vpps9ugmpvQ34huQqSBp",
  "key17": "286GEL72grA5b6uKQNQHQSfJpN9LNgyrFRQfNKFuJmtFrLJQJzjJ59LQgscjeXbKrh9mAFgejhaLPLW8CPhFn7jA",
  "key18": "4x5zuuMT8VmyQQm4Nmzkij3wZecmHpkqUyf6bfegZoshhh4QtDeaoyEh7nDj449JFwTvoKd4mA6Kg4cqJZ6h7Mxz",
  "key19": "4YYeHerU682GQSpS7KeR83SbP9YyhZiiek47DA6zKeWH2nYrXSqrBYU2ioq4HyRTGm5FLzcEKguUbxUBB2VuDSPJ",
  "key20": "5GeTijqaCGW1zhrBV7qF5k2UTonH6zG78kFcAFgWypjfdx9njzhfSPTLguCaiTaaDCVZnpForuPLGUXZbyZEQMiv",
  "key21": "qazqQ1RDff5SyQJMeUF5MQm5R1tMoAekn48Ym4yjsr69vfRieRBCDW5iFKqpZCsR8hU9pm2Bwqzgwzofi5zAduE",
  "key22": "5MXV5uNDmY3nWmfumNEPtnq2YkQ7j3QivgGPiQEC3phz7mJmR1V7mzikHdhLz9PRUarGLGrUapGqsvAxKfhVmCve",
  "key23": "2oBXRF8HkWzWMRXurNsxUVEeinb89yBKh3NzxLhyC5JS49PY95b2K6eESoLRZcsvGDkyiuZFNDgWZxVVAJK1NVDz",
  "key24": "GmephRwP8cGKH4fLREb3bWmLVcXvNAac6JNHTQyY7byjZk81rd1rBovQ1q4K6yN1pC8AEu592EaW5Lr3YErukvS",
  "key25": "63X4rKns5cimPi2tfrMZcj6Aky3DfoiyiaRAn6VFUr8hCGAaXXzVxYyky8SjDSGcGVM5HYatux3x4Mi59qPd1xoB",
  "key26": "5f1GtiW5cU4JxMFcSBPH9WyHt8Z4FCqVgdrSSriYyLNzLR4QVqHUGSTfiUQVXXS9CYapkR9WCVKnHy3PdGpZji5C",
  "key27": "YHvw7SNfT2Bk977a43v4ybEEvgB9pBFb1XE7N2BCroqgLEp3b22oJquMWkmkECUeTBQhcPb76WpbJJsBKdaK2QK",
  "key28": "5gDvHRMu6gcMVWmcfAUmRgvgF1EYGMmD1VUebTPcvurYH7CyXLRChdDG7ti7WrQUC3tRrC41NdGpwWJNz3hGJhYU",
  "key29": "53KXAMggztowgsU5Ujs6Bv4yRtGRUXRMgbwRHFT6kejyntCfpeiJ2DWcVbdW8ECWzSdhQrYoWcbK2uGaQM6CAout",
  "key30": "VJJVjZkeUXX9VWazVZm7j39b3zovEWMk69EAzQxvo7MnR1gm1LfyahokbfR7mW4rUQSAaN7ik8nAQrXWV8eKrK9",
  "key31": "62gMvwSqoBFn4j5vTZbHcsLXApVyZFC4tmqZLhAStemDmFbqFi2U6t6LDF9PJttJai9xSjuvc6uCwCHGP86edBuC",
  "key32": "3MTNq69kCDddq4qq4xP6T4motJtq3GJJPqJaSwHmq8MhHLLymhBZ1RuU7oCQbJRP4gm4NNacTNeDhtjx4v8zCK7F",
  "key33": "3DcPEtDQGHpghKsT5NozHEUM45EuP7tC9qxKfLJLF5mBfPmVS3m4b6WWQAwwttH4RaRpPKfEECHWVwDwHpWCv573",
  "key34": "4UiE6CgG4EdSCau8FPxSoAdWfGJf8uhpDyNKSLJ1RSAheRUaxXSB6CmDajUYDNenwzL1wwWKDwDfTammAiUyZ8Fy",
  "key35": "2ZQ9VzqStF7A9XK16SC1mHSHkreZkPoDeFwKuNeAhbGRXmZnZhZTHf8wrLTQmvnM7x2FsotZEEKtaDPjNUjZJ3mR",
  "key36": "dRAYwpjRoEWHXoAHTsHZT9HH4zYicUi4mf4W8z6nUtE75oTNHqxAnBHqExprJRYVVjnDRw7oiMvKsuRQtQ6d9Gg",
  "key37": "2YnAHxJEQz1yEBncfSeWzCGswZ9pH7PgQ6aGtY1YwyJsMAM9G18xNMSbaMERRSSuaGxhZkrrWWWrEKbB3UFxe8f2",
  "key38": "4HYqAiyFLAp77BLU1LmNBgwPdzY62G5Zxh2jkFSSs6PRBz7fDXscpZ2249RSf4r3MEZ9oGntuFYmvTfokRxXisEA",
  "key39": "4W9XyH4TYyPHhheo6MBwFmshk3F1PT94ne6BEsqAqxHhQ2PhPiEPMuRtFYN7gQaZaV3ucZZtVxUwZgK5gryHCyLb",
  "key40": "5WkpDVMPXexCiEsVzf9jLY1NSiDb4u7mAETTTqEQ3qsx3ovDYzmEfBJDwUQ7TJNddZp4dyyZKXJH4qTVnSh96xEa",
  "key41": "2gmicrRWZri8yXEdrR8SgwvnvRcfLnfUjmi8zoHMLdVvw99Wpb6Px2AkTtxsk6bGQk2vfPF1BdCpWsyVZ92GXLgD"
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
