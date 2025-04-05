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
    "4TD2AFJnCvdzZMtZt4BvZn7fAgrats1fC6KFqB31i9MY7iGry1SP3EAeqzWbQjzejKuDqWftVFuzYrTZ1PtQzQeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNFvxF3nxVhXBUFwCqxyRVryDwFBv8BdHuzLe1yMNWRWKM4DEzwhvZN1hjkfS8keMuPPgZTisiWR7RzWAWcLMKa",
  "key1": "32kYUUsLFDDXaVYbf2dQeeUoeTmEG5K3VPYK4gnrpUKoJQKJWKb3oyHNr7BqMY2Dt2ECjwVZLi6oUhQWC6MAQ6aT",
  "key2": "5MpJhCySBKzTZjGBNpbwFXfcQGDkg717WRNnFi3SUdCvQzeSRaq262wr4g6foAQJShYV4mTGPc8NwG6M5u2npEtf",
  "key3": "4eV7aeMhWs5MJaEehxFy5u45rWxx6L9RfufVFko6ceXpP8WVe1F7Jums1qbDqtdjrjJtbjGP69x9kuepz3Aq8vms",
  "key4": "5eAUKYoiHrfedxq9Y1RTyLgQ4M27BkQRMjKeGfs2RTQCArBvmFXYsCRhF7h81MLTm6PtyTjQtBTfH9YH9zs6behd",
  "key5": "5rqNGWJJnxFx8ZGANk5SXmgfjgQf9FpQv9ug7FFJ91KuVg4Gwzb1o1rmoEodhQZ9RGp7HbYZpc5jVLijNGtyY1dq",
  "key6": "4fPE6MiYRE91FH7Q4GvGyt9DNyRiUapusNHsn3XmbZJ8Rr6dfcnsuJJgWQ8nWCRVrKCEePSuhH9QGiaTMiFYwDyJ",
  "key7": "3qCbC2XFH7gwpKu88pweNhuKnKEdtG4q3WPp984Tg1WqE7s3Ms7huVuuF8uMMn55mopL66CgGVexGAxmbyLbKkGM",
  "key8": "4E4hvKQsNxh6A1kCrFeBnRaAAwjAosBukdn498F8vdqsWMpK9pSBx9tjn2Xt5UeziKULfAN6FXQEXrzikromTWmA",
  "key9": "nEyp5iWEDW6NEtEtf6PkdcNkjfcaDH2ME918BCMe3wwMGWdAudQx8vXVHeM8uczr2VwBfcsxGkA6keqNdNh2yuG",
  "key10": "5jxKgnmJC9vgsyZPvDEZzPxDCJTCfdbi7saAa1j55zN6vPSh9d2mvPx1zwB3jDcnCK2JMAeHAy1t6wn77gkWjKkT",
  "key11": "4R9ZJiZBGXsV2neJET9RvRC9sdJiCiPwgXpVNmfiea1ZbETod9JgP1ZmRs1Ux5kinTmCykvcUFefQNRUbTVY5nFZ",
  "key12": "4opT5eRwuBXjuakU36tvDFntmg6VAtNYC5wT6sTShFe1ysfRLx1p8FVCuQ9TLLH5RE91Tw5BgBsT7QBggmnAeQdz",
  "key13": "1phU2UNV5Ho9UVoNiuL8hGBQMHh4tZFxLQ3bcdMpJQBuNnVhhvbqAKs5DiSkk1LDYdTpTpMF9sY6dHLqtjMYN8c",
  "key14": "fMMDVFuGMoGArXEnu49QJPwU15xk93w9BKWrs5U3fq1swRMfgBWpcevBqMNfLSZpzFJKB3t2L3HCDJffDwvdCUT",
  "key15": "FQVSprgUv8VwQCKWcT9b3447uo5fHtqjnYTEgg9zqZWuTRSWHYZpAQMWZHLvLhNpDbNKMJUMPm6rR7czayxBYhb",
  "key16": "FyhfYhiz59dXLzVJjpwLxUiYDnftkjQBxDaiw1xBLucyvoMTg6wxZfUaxWD6W9DehpN57nvP1CQFXvuT2jajeND",
  "key17": "5S7HUwS4FJqetyJB1XMQVJPKJmYbF8jLL72KKZMPyi9Vmw73UxFGLX5tWagDsLa8sEtAcoi6g6jH66kKzzN9uNsW",
  "key18": "VxuKcxHPGxUsqo8pdNGXsFXdGLXQSA4wiJxmgftUmjy9JZDb5Y8r7EYG5MSaiapVGusCDdAswTDAhfMhnUsktKQ",
  "key19": "4oFo6jtaXmGtxW7BhX2bKKHRzc922rwMBGpj7XhtiDRjNu2HwsSHP3KkCyvVth3mdd86VF8B7XQGov8SgS2XHDfE",
  "key20": "4x5Dh1Yk24xJWLHJEoDx2rKunewtxqJmyCEadEVsw5FBm2tSLetTz5Z4MMQqsD6zLtqzm7cHw5CXgaH8cp5aNjpF",
  "key21": "5v4nRnEqd7tZkYbZedH7vE5JJUqibhPgWVtTRtBVdxaoBMK8izYkQ424P9fCUpLgZXLsioBkmSWQtT2wqt7NU938",
  "key22": "4KqJtk68bHHkNypDTVRQc7r1BmoK1ViqwYzyKxjTBM16zP1uTidg6ESu1JLjDMDu5ATZtdy6fcVP8pvKKS8LFY9w",
  "key23": "vJbDAfwmvDYwiyHTnmB1k61acqhCuZ1kxhYWg7vysSk7bMcMfNfdnZQMPkv9PUq3VZMgQngwEjkFTBanZaUy6vr",
  "key24": "2ofiZ9hBhp1TXKjJ8sYxWSgWixwzyyQc46WMPwtE2wKzbVyT4V94hcBAfhnVJW1ZKFTMPwV1LA25SFodPK245FPg",
  "key25": "3tMivXYMgWUdYCT3nqdU6yh5vWUxMJfSkuMg9QQJciLpjo9YLZVQFmT1WeGcwoekdu7hVxsYLvMiCJjmPxXhYh9G",
  "key26": "53MRTAiUUFrL5tZDyD6xtofY997AiSvqtRBSQvhDTCUgphP45a3b1kkEE2dspUtVYNPyDqWvqndVw5K8Js1nVoFD",
  "key27": "5WQUTT5mvA69JQpw5HcggCBs9kQAXcB5FUshYbBGHaEUJwEacmpnbUW7iUuLAEnQdXL9uBm63TjKrFPSpPjwzjT2",
  "key28": "2ywwgbQhk8ZXwVJRwQUAVHG3grHhrnpfMsSpEXcUw6GDYjoNW4AWvi2819u4fBtzKyx85RKoPw1xoYEgLbhCkAHd",
  "key29": "3M32TS8vs5GuipRrkFYZBM6eouZMHdQL69Cy1EcVkuDjy2DLyeqSFQCGFSd3QmppuQQy6SoYF7iNk2Xhdt9rnbYh",
  "key30": "3LmwfL3yk7tubCWmNFnx23k1jnJucuwiZ52iwp18vpr9K7f57y4HukW3BfcDhZUKs2CZFyHQABD9ctYioT4SjS2c",
  "key31": "4W4kysxZtSetsT5CehYZGarhTTVVsjPXmhdT1EJuMiX4Mdr4VRHdqRkwbDNpQnesPmnhHrthBGNbuRrjnWEr1i7e"
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
