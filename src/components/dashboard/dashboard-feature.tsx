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
    "hnnSxiKMQ6p8tQmxd2wJGLzZWACAPfKdot1pMqieRSFna6ZzxuPQcQWePUo5qMX4MmPLgYDn2VNdAv8tWmQ6Rf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEZP285saJ2U8WX9UU9PvLpdzczeRxaM9fGkJueCs2GyDCjf7SKvWLu6gu9X2g4GeGvdCX2DegamJGnpzxWoF2n",
  "key1": "3UypskYctfat1jpjkgJRcnoLLiNdjpjpQyS1grgSmMweiveqAjQm37Dy9A8PfYFmWqj3W9pWZfahyxYZoLVuXU4X",
  "key2": "5APbP7Rc76kxsYcRZnpabxSvDmRx4dJDHYZPo4jMMnb4msWdJ4e58aYw2NqTkM1DQTBGE7KPRqHJJW6wHEHovbbe",
  "key3": "z3WX7ujeGh7FdErzDfoRWLtvMQn5HamqezMDPy4gF5wXFnkwUR1KkeNJr6MhFCZ6djSH3pgK6AtKwW6paBBLKck",
  "key4": "4AtkXdG9ZXBYTTw5NbAmba95bgRNY8yFRGqRaCSx3boBcvMeD33wNMK3C2McmJLTJq4pMRtNk5Mj6JLnt4wnoNF1",
  "key5": "S9DSoCXVj3XTyGpPRymDX1bAhuXYkvWBM7hsLGitGg3SBnLzzwCr5rX3E4X24fc7aLzXkK744u49u9r8V832PeL",
  "key6": "n1Uvj3Q3NoZHZT78XzhWt2J7ey5umiBDgMx62wfvivmR9WsKVNVi9VQeFNbyBAWkpahqs89f3P1hykf1wi5Jfbp",
  "key7": "3SKDejdgbSpRQqRR7reJD8N7dx15ddxmjVa3oaV1AbdzuL12knoLzegkwU2Syvxx6g4FdqeZTp3E7DJvARg1zcZM",
  "key8": "3vc6hNy2tsz7vyZ6FbaqtktamDuxaJTkgJZ6gVC418gGUgeFf1gjyWX3ZJsxEqv4uu8sZbrYKztZ2NUh56FEgtPn",
  "key9": "5bpxzPJaJqBddfWMkrNjb4miD7FUuZsJffgSCnRwv2iqWhtVmsomEiykGoZ4uLaskFQgYfCXjLuCHa1rXq5iWfaW",
  "key10": "4d9uxHbp7BDGqfzYyLWXi3Q3VyiXJSkTssQBgi1nnETBRy8iroUaejSWb64eD53jN9rsCw1fv199uM49km3mPAFZ",
  "key11": "5oiYvWbkSM78mxgruxjb1A3mipttjTK7FH5d7Z8zCkbvYMqV4eGL3NPJLvLDRkq6C7nHmgrrVo6sXjKM55XuZJky",
  "key12": "3XR1CCjZKeAujnvcgWAVtqXk7dYpQTrrA2fTQ4LFP3o4sGG3STpVfNpmq2uKSpLJLMk3cSCmTxLoewqQe8tnmGW4",
  "key13": "2KXDjQgdzNnmFBNfGkaAeHVqiNj7tNxTwdzdY1iuGq4hu4LAWumLc4Qxmcwj5zBNnz9Ygd6xfGJu76mxDT6CbLWv",
  "key14": "5xL4o4mCfiz6dmWUmzLANHEA2P2YjJR5pKwD5M8w2eYFHzSg2PrheoTrHu8MY6ukoSEfEamkQmJXE5kSHzrnr28J",
  "key15": "2RJ5giDXEGXCHUxBFoHLKiBGKfXfvBBN9qyCLqWrtHX6C51CWCRjmDn9r9vZAsoMmrP6hEHUrgV1UmXSCJ7shBm1",
  "key16": "3eGjJDh4dF2A7PPLxiEawUSMsmH2X7pvkNzS6864fGZfjVdSqiWW9jdA1KsHsXPNAMSgHv2Lzkf8wwbQVaEkuMPd",
  "key17": "3A6QMokFE3axUF7wfZBEhHMWWDPfujzN5CrFuhf7ZKRszX4GPCV4muzXSHQxccAdtUTVnQzHBpEgAqRDJbfubbHn",
  "key18": "2MnQvz2JmpUe4DSwD4LC1JsMAXSHHEWiLecfTJiA6hLRa6QBijubQAiSmbFGdgVaHoZy4i6oWjx2rTVKwLCn4pnM",
  "key19": "4KuCk37AVe74FYzHyc1zWz7k1sda2L5MNfLkB4DLGUdLqFs2jvwCNctxdyqW9b8BQ6JWdUECzsabVYEHPN2V3aBy",
  "key20": "4GLhNNAGTTrh93BxiSexo7DvsuXZNrbZbELRk1ANJxa2KNZGLo95vLcxo6wbpriHn4KcCkt1nNytTbFbawBfbuRQ",
  "key21": "4gtqcaMrWBWB5ntvKYpFgVj3LqmzT4SyKbmwbSXfz7ofE9nAQRbQuF93GUffHsAi1LaAjDrzaN4UdKdRP2RKdeGb",
  "key22": "2qa62tqrnY5Moi5d7fKjqa5hjN5LE4Kq5LqjuyYpwzcaG5NthK84wtwcd3G5TSExSnAbiC1DHbNbVuv22mifZKAj",
  "key23": "2PYUPDdFG2W4SRMz2zDKTSXsim5ekxnPwDJU87YoThfm5VaWPzAZXKd8v6VVpGT8r5Ws75dv1GSbi122133mTJLm",
  "key24": "5onTYyA4P1EhAcjhV1tmLUvwhxsD4gW3CM7uFEfZfegsZgK7ND3LWA3yVsux8BMD93tyeryCdNJFwWneGxNryJ1d",
  "key25": "3gUZW4RcSjsnoZAQh4isxjmBMEmvDFMa2a45ZjXbL7huT35gZbW5JJnfjtxkuiCjN5yZ7ntJDhqqyA58x8T9b7ZX"
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
