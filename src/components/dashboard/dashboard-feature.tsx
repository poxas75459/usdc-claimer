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
    "5rgtg2oaVKb6eG5gYhYamoCoWTuzH2TruvK61XMneWpWPSfNBpCQb5qgXrFEQvUdZcU2LMqEKDZ6adbLBoycNCrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NivPmYxdG4gXwbVoi2s4BWktjbRVNtu5k1B7wCqh1Ar29MTZkC4uP8r867dyrAaxuLe8RmMoxnehZTS9JsLwWsA",
  "key1": "C2bn6Ph8NPc7A4byyJwa7qHumSsHe7cHwd5xLEqqGvyqim5gKRbBzzHrwUypiYvS1rSeZuvVzY23HRvAETn12qE",
  "key2": "3r7Z9BHjittCCZQAcXJ8XvMdvWSrg7C7Qbkf6JqoeQi5SJGKmwb7Uf1WHUxSnYxNJRL8anX5pA9ThkKsfs46Na7e",
  "key3": "3YoQDWp7d7DFVEqxs7Hizp5Las1TTPbUbafQuPuS7gZTvFhj8qtiQMuUqzs8sL8aS8befg3GLLwNhLafrkgSNTA7",
  "key4": "5qjaVd7gx1s4PubW8o3Jv6E4LemwTemCBueEMZwgxUpCQKCzetFmms69mBsTb873Vtv2A94qkndsSZvzZz7ChqxY",
  "key5": "4HkQx5eYBVn1sve1JRBYiiFeDfr3qz2CBpv35MNgj3kzmjMM8zQQAW5zi7Q7VWNAZtUoVDvKeUCQt5Lk8ULqcUGD",
  "key6": "4uFEc5ibFB7upNBUVe4HiN5V9tYNcX2aduLDoE4ezHgQuhtz9UM4q8oX3JEDF6dvJEyG9qgZzwUBP45ChMxjeLvZ",
  "key7": "2gT4SzU8mwisM2sAfoKi16m94njMaXSLpeKc8QwtrV59wgjMyu6Tj1Rk7SVVpuxqnXqryFoFUa8VQLSUtwdVGx9u",
  "key8": "LdEtWVgCZMeNAmxK1w4PfEjXTyxBPeWnjhJQPA9oYZYRjP5MzQTWvHYGxQNV4LqcswVMA4h4EW2hLs2hwWe5WCS",
  "key9": "31VUXPDLsTN4Y5rZmzMpRvStpSf39n7JnZ5C4Xv17CVWy3S76b3oWSuXDgWvrN3tEVASL2ApbCL2bDRdJ44f87wm",
  "key10": "5XJtXkTkjoS4cTEBd7aMyiisLnsRyc5zwu8u7Y4DCfEcKjFBVjmeQ27g4sAGsG1g1VYdSENX8hQDisgv431q3pf4",
  "key11": "4ofkHJoP1d5rDj7hFvY7BnBfWpV1kET3cvbKyQR6L68jy7RtXgkLCYJrF5NZU8BXiUCopS3eFoGAaSMoG3kYNgUm",
  "key12": "44KAhYNsXF3AX7EVDzDZ1ieqHCieLrBRdutSfX9j7krzS412vFoKBvimK4316JKpouGNpadxfBzYEmuwgV2iUima",
  "key13": "3w5hkryuo86Qn2qW2aELH12qMd8hsEaWRAtKKuHabXb57LGNd3kfijrNMvo2vmBBXB57rZHGGUB1YWYwAPmVa9Ui",
  "key14": "4UvkbWk3XawsQtKCicRSqjdicyW8YE5U9UvnPUsW6uRW3XPKG6ovCoArEJhE2tt5DBZWrcnZqMJQQcWjGx4aDEpQ",
  "key15": "5xYk1zwqEFG841C2terXf3y79DHQiCWXdw93Mw79omC3nWrfFJ6LcxBBkePmpkm15JMYmT4Wtjf78Yf9Pdp3PkJq",
  "key16": "5oUDhah66PxWcsESSQfyNiy5atcgPCg3QS7yxuHQVqiSTVog5FSuRcpZTfj5GJR65nKHFUmMT1i8iUpFgxwvk791",
  "key17": "5g6icmVh5Hmv35PchYq6efjjvJmGCW5Mh3AJiVAgTAdFWV4vrDBWohkKJdYxyXF6HhRvwH5tGB22FwVCTVEGCd9G",
  "key18": "4pdXU9eR6xcX9UrfoYJUrZ4ieMLUyawAafPc8RZChiXWSimiemSfnJmDFQRQvTP8SfH3c1ZU2FBEAvB7fMXMKG8r",
  "key19": "2aJckDAxYUBn1p2pgS46p2rNsQftv56y8gDFFsrcU37TTK8NmVFLs4KSrAcpeunjL7bExUab9Jz8zJadfoupfF7C",
  "key20": "4AhZ9TEexrsYH6RC8WZS7b8yYgn4xFdyZzfGWRYveK85YBqFdDSppzBXBC2BhWP1Hz4fsELkHY7fckBKwBo8GHTq",
  "key21": "5GEHHW8ANvdgW9GmCyqWsSirU8w115PVB5Kd45x7RnG4VpWSngHuQqFgdB33tzefzZjKdgUR5Q7mq1v8PaFRKBmW",
  "key22": "3RSbEbdPQGCxnWCg9xCirGV1jXkm3XPaw2F7LwVMPck1q6L61XsipoT4XBLt13mRdsXx4saAMEj6Lzt7u95R9AzK",
  "key23": "43U4oaKYQMS2hyD3CVYNkXGdccVX3aVjyyBCefBguBWgAWcGcK3xpVHbbgDqJYz7jZsRH8dBSjMuV4Q4Bhi8k25q",
  "key24": "43B68DKbEkwbe5mZd1v2c5eUdii2pH5wsCVgw5oSZS3ZnedVgNxYZUdEJuPn9L1Cy1SgbcWJtX6pvk59CUZFs72h"
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
