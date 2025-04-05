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
    "4u2LFxTxm5ExisHFKLmseJuNa4BW3g6DbgHshALii4DFG9V7teeP6G2CmCanNLVZ7aQZzuo776uPg54M8356Uhng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xosbzQ7FuNgAYWjPw1CksptFzTaPVZJ3WuUYooAaUFy9RkRARBtkJHt2VV1JoDHBXJocpYxP7GrWbDDQbSPd7a",
  "key1": "6g8m9hUtSbJYNGsMxoWvjEgUghpkzMcC4EV7oTo7fgeNuuLw5WwZxa1hcm62okpEADY9EVzU6WUUWoEBp1yPcnU",
  "key2": "4iWRqZbvbRuah5xJDXdrN2o5HXirhM25aL2kauNg8mqQYcACksRJaXRQRoRgqTCrYC1LBEngNJ7iRBjyGxZUa1LT",
  "key3": "3pTgvaJLtPuBMtPWKcPvH2X4TrkZiarSEJUeKe7v41du8APp4KG9LWT773acGpGdk5MHv68wZuccUupnYRF1ntTR",
  "key4": "KtPPH8sHoY51e81JzMNUq5W13aNS4ysM3AZUHahDGUh1Q6ipnVUZtPVLR38SgGroWad1n4eqRNEK53yK5sL98G5",
  "key5": "2Hx1DquxCkuZznP3tiu4X3CS3GMT2VdVaBeCtqtLULQuPTSNr25nen9mfTzC8VibMsdc5pcPoLhwoSuoJv9g8wNp",
  "key6": "2qWytt2DBnNDqApLyhYurK54iZ2fNVpDYiXPQZUEXNZ31ftDpJ82iLNjsMKXSWdU127b1zSg86oT4McyEtERHq89",
  "key7": "2oJQrVnVTJ1eK4yif5tHdgQYJs1bkBVvXSguV3WtBKknTBAv8X1usZAxRBXQYD9X9ZjKoM2soxhBC2wmTdx7wet2",
  "key8": "S9iEXA8hMMSUvqSmabtBRJif8SbV6EcavjjxQgHmagmD5ehAEq9Hyfj17MTB1Vn8cQScoXuPte55QBbdtcoSEZ1",
  "key9": "ZgMVvxAYHEyikiYRn5uRcFVVn4L666tqSMmRTQSMiw8eqR7z3haGKXCQ8ac94hbqKVb9sGhd7AUfSBkWuyBDarQ",
  "key10": "3nznYcnmHM3ZLrLVsufLrS3jDgQiy8xSR9EW7SM7ZDX3Bro5YNMkNxLouHgUchjEF7WShYkwzsFssUFafQa6hLPc",
  "key11": "4QBzK9Hv2htrYbotBC2ZDxnRhfjrpjMGMCRshbFY5dR98KdBs2cXoue7xuveXJbreHgNGGQebfbETDcXD7JXj7XE",
  "key12": "4gAEUdsU9gCRDTghWHrjYS57skTrCEo4K18zsT48oiDFMwBVFvtvauQ6eE7UmejopprvV27pW3LWaUaaukbL5Nzx",
  "key13": "3TpezSq7P2ETJL8NqjiBtWgeox1urXj3uWv88DwFDho7rNzTsTts8QAHbtCNbvZJZGzvyhH9NjFkA7dBB7GuSuGo",
  "key14": "3jYHXVFM8qUy3zXwA6B5p8AVMWQffYyWTShaQVNGYinB74XeVEM65M5hwaZYVKSMTS8WXXxNvuPP9HFrQs4LKQcC",
  "key15": "3DghES6SZEgSJPz9xmQBXmdfb3kzUJ7xtk5DUy7EBY5VaHJJmk71NTKwbkDjtXsyUMC7UF7Hz31ufhZCWWBzB9V2",
  "key16": "3z9W9AKGuGSyrx48jnrjeqsWABrC166umxCNYA15zPCdFs4FEuA8wTnCazS5xRE1AiemYgevTmHNNmUHMgVzUX5K",
  "key17": "5Mxk8J6G1G9ndgxJzjryzVDjKAxvB3yV8xxvYY87HWQvNgXDkopjWqSdjoFE1aHNxVAgQ1NnJG6KrXvMQ8nBHPfW",
  "key18": "hJWq7AWAQtepRgVucuTDb1mbgL63R6vaRAwGGnrhtH7WBxWLafe8CRqJsPCsTHtXcfbbuGpm1XxKbXdKzTQAfku",
  "key19": "KfL4ZFgNj4u55eC3pZik1LJ54sfcqMXRcu9nDTDbBD1yGJCRx2QACiS3wSkbAaNvx922317EKX2x6hYmornofM3",
  "key20": "VXgQiURT7rTp8YWdLUbV59nQQrKTGsESN68zr1G2V2fSi1NAiAzoZQ2163HLGG2bXEzkLeXpbrxfsx3CNJBg3fN",
  "key21": "Mrm5Q5ZSBKaEA5rPDmN6awJetbMnmuztC2aFSUFXnfAvDDo6z17VWhSthLRJ8esXjjh4WQJKbKz53qd3KxhPysv",
  "key22": "3u6k4QLinnoy9iYXfxWD6RAvFACVWSDnXoX3esnmkDaZoG7oxNBNiTvVePaay5e5JNHxPwPe4HfG9x7EJ8a8YHw1",
  "key23": "2XSDrc3zgkYBD5gXL3gG2qwQbcFVNpfYym6qrVdfmv93Sh3ExKCV4GpNZnE57ktHnW7hEhP5jBHRFHR5PGXYSkpw",
  "key24": "2n5KM6JBznxaX7NNEVCVD83hGebJRpkjP6Yh49fC7p944cGRb6HfWvPBrSXjepcEhxtFDuYPr4TNiPwevgUGKLLs"
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
