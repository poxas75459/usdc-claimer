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
    "5PrYAix23VkujGTJ8N9BkAgRegc5r7YymyXYWf6HfSpQ1E3vLfXSDgbw6Pu4H6f7dhUfVbR4VArur8WQDnkzYx6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYd15wDCEkjv2QdF6L9WPJehyvBQLyrGxUVRV72fZAujcWuL2EgP9KVMNZmoFp9UzsySptVPyKyGWmMnFqmxdHd",
  "key1": "2FzrSC5PMaPzjQKM9Ttsr1o1Ga83rNJYRFYsaaCeeoPJPA5bAfGukDAfXVWQRPd6r1Dh1GqztJDA2zudX1kLMpML",
  "key2": "38B4akWuokEc8wxJKYrHznbe3Pi82eDRLBdXW4GBkRpPae2kR2gCLPJT16wrQXcCrnGSRSC2Pioswf13otCKFEko",
  "key3": "3Z6gyvApS3FySQEQByT25mQJX985c8py118gZUWZmkcSBHSuaHZ5Nbnk1FM5JA4dFSYfFCDPPrRb1Muzep6YiD4a",
  "key4": "58FJnSBtSGK1GNngm6vCVk21A3EZnADRobbiWNXhbJcRXAN7tMK3RHRchGBg4QZtgioytm4GCyVLe39AjcfPpqrc",
  "key5": "2cNd4brVVKFLpH6jtaKDHmKi7eq9fMhprtjXsYuH48xXR1awmQM8uA1viKHj5q5dxUmiR5KJEuZcrC7K3KWQ3zJe",
  "key6": "4PRFwLofTvsZFNAZiB7Zc9jPYt4bQoj9W5UeLKwPLBgsbAcTQ5Tc5pPNyGx95iirHxjpDUm9pKnBih2EdhpegJ3",
  "key7": "3wpdGNSBAJARsuNsYuGYfsPa5cxYrvooLipw9rw9nk2LmwfYE8vboZAGRVFow2MVSE7jS3opeQyPKAUeEptFVR2b",
  "key8": "5itv8CvxfcWJe2hcXaoN6awBNeheNka14DqgLTb2enmZZWUEFe4bAF1TKQqvaJqrA2K4SpfBHb8uCfLh9QBNx9Je",
  "key9": "5uRbo1qy6qSRBtns2oH9E5QJAEZD12iSUdzZc3o63ht4iEkcpkRY5kHGWpni2V8LPKQrBtmern4earUWbJ5Ef8hn",
  "key10": "2RLgFUQzapG7QwgUeErssufhHVuaHa6rPByhTWd5kaetj9ou1Qa5fuX9CyDgBasVz5xpKpV2Hu5CxKDpsKNp3BnG",
  "key11": "5uoxZ6ZPsNe624TDATYJ5vhxVdGDdKb1dhi2i5saLyoShAf49FtzP4F2gRwBZWaqYN6HxNBq9QvR16xseHboFi9i",
  "key12": "AiSPeGF9FGe9yAeqyjJLB9pEwCVLMFoKgYbZtXxJtbjCrFJr8rSuezhwFhz9B5FxLpYr2Wk1PCpZ3mQpAGc1r3a",
  "key13": "2SzMS1p1dsshzUxjEcsN4SDtYUVhysJDgYDrehyGBAsWs9vWQk1bamvTxXE84tQJ4vF421KGhNarTtqNX8NLRDxN",
  "key14": "2wnT8fEUTGbB8vAXzqvannuBdUKWtGaoY6CXdEUZbk7TgRxRwAAUXbNKKPeB3kGk6qQ4vQ7vQ6AdZGhXnzwZmzrF",
  "key15": "352jwrTiHPUTVudT5EDwXsfW9S7YoWVBVVJXZMdATYFHv1PURVLCesEfhGN2GA2XpEMmufe6ATTHg7kJNQMXeFYE",
  "key16": "3oiCzpZsQCr7jNpRFDMN29YRi4FpxfBEL4d83mDLeYJUcsS7CRDg91YUcR4GmBy7HcyNwYWTByPRG4dsPgYNW9HW",
  "key17": "3ZczeWARkx5EjMjLhh5hoFKqCc46LfRUYpZw2uYNgmRWF8ZTNFKicJy6Nf7EqNvguVjqyEa18fXtNQN24BD1pNHf",
  "key18": "3UHq1GEz2KsMaJ4hdds6HR4Gy8aGYzSjKWMnja2HRjxTiyTaDdsBd2opnUSziAKfyuUhgvmXuSVP4yxrVWQwzog9",
  "key19": "5YtmXNRHBSjtPD7e9kHhDzzLk5gU4fy8VZZeSh5rxUWRHr8VXx5EqBHUjLQtNxFVtuKMWXwpuiGtyfspdgT8sfzA",
  "key20": "bFKHJuRY9niw6uK3iCTi3FXm7voF789ZF2EbP6pWPXvG3QWzAFgf2g3i9isSSZ6AP57rcJwB4wxqNXh82sXtwiz",
  "key21": "38Yw9P56WW2AXeU3VEdTRsZmRKNjypNdQ32LAdCvo3eqHxPrpRfVhjB6ejvHcGRUUudZzmVH7ph7WP35EnqBUkox",
  "key22": "qvysHvUp6xnH5nmahDpHcmRuafP78sZzJkQSxFaPooRxXpaeZyVQZ2H5nQwCA8jStu4wAWpn3S34vqrQDLXLRBB",
  "key23": "XfwuG8AntvtekYXebcEWapsRiWPcjJdCke5uLHme9GoxVvPbwic1EE4gReTKKLnTZPpySkUKZH5P7gJayKoExMo",
  "key24": "4yF5RMkd33JGYnDnV4iLxKM4bKiopE3FE2euVoynY3ANM4ahSTVwqL6uVDaFfEyT9c1ZY7Nz29yRZtRXX5PjePJq",
  "key25": "62Q1Hk6Bjo4Y72bAzRtHHPhvzNbggcc9NiJ58safH3B2hhoq3Z98e8zbHp5TaWWiCmfJMXh47wuDQcxwXPt2e3vt",
  "key26": "rYnD6mzX36PVi5JtKMTn84hmzuxZQ8gVbvirHpWRj6MChrbRQdWEFy8k1qrmrhw1EN7VgdnvrfAZqgyGd9KUFUN",
  "key27": "5qC8PSWBHcG5qAPGmtLh4KisoNoWSRZ2y6YTyx1Rv9ddHVfXnW4CCEprrgQ7XqwMW7duz9ZuMKvG6ZfVzkxioG1F",
  "key28": "5YtMsbtHWLBnXfdoQgHxQfD2fUn7wBdCCDpb6niRureWfJve7ZFihmtY5qy7n2mR4sQkwDrMLxy9eT5o5QVHnf6v",
  "key29": "2DzZoz9UEuZ17yKKdvtdf6Kc4jsT9oBH1tq8u1iBT5tPFUbpYASMnkXHD1kdqpLPcTq6t8QSJV4STBeS6nEPvMFk",
  "key30": "441cgvfkRpoqfDbn2hueEiUyBKahkVdiqqtH6XXJG3FhVhFfoGH2YXTJqj5A4LHshDGaAs1GnLUPjn1Ak3Dr9Fom",
  "key31": "3gNMLdAPhFaoCF7FnKi3yu89B2osLwbhibW6MJBkSpewiTszagkAK35o5Py31sFWamUDrqfXNdGF6MhG4WNhD4on",
  "key32": "2oNSdoEdWeZB76JS4ZYh9HEodjfYg7ZwQeyZ3GxohCN9jge5S3rrkD3qVqVmnbsW73QRh1pvvh8veauSCgjTnaHS",
  "key33": "3Ae3vvV1PFAVB3ZUs9jmbwdmowqY9dguKsSemCMK2jNvAPQZJk68kM9yYDEcpKTQc1zY6nPd2KwigVcu7Et63SMq"
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
