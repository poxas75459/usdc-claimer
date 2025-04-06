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
    "4EVjZG9NKxS87LeWnyEiWdcVKEwemHdDyGTDxAPqbCHJcrePbCr2VmHWhTq7JBxgXX75iXt3pmcnCiSSXVfpwdBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ef98LyRSbw9gAYU1tmKHabmGHpzk4wYiCzss96pDkeG29AvxWhgq2cmna29nHNovfyV9DDggGWfcrcEbodVkmbi",
  "key1": "5k4vDefpcb6MCjjzeui8YPJfmKb1efe77xi3gXEsqZWoE9vYbW8rohKef9EZrNJbfADZAJb599dXjXB1Y54KegLb",
  "key2": "5ZkcfoBsxgU92WddY31jmU59NLQDEYCenKax8Ly7m8yXJ2PNRHxeegSNurvF21B9AhAxtNeAMx452JPiQyfbYuWd",
  "key3": "2zZMGepNoWEfFrYT22B4PuNEwPyJuQ2R2Hc1ma3QU4ynmu9rWbxBH5uXNksvufSJUV9gXuKeozY577VahuPZtoTa",
  "key4": "5b1rqtU2ScLXe4UBnTuq9TYTUsaUbAG8zytBzZLRpGcU5n7NRPydsuuq49HwDwpvTyUjpPnKmL8xrxFWSwc8zj2Q",
  "key5": "5AcmtbgcuvCnahzAXHPb9jAS35fsekbFTssgbbT3AKKf2bpLwjSdWs2MMFfzNHYGk4u8WP6s7K6goH3qs4MA8uCW",
  "key6": "4Qu1Rag35bFz5M7RX4vAjJjNrkNSiFwD5waXgdeZvduCs4iNNE5XHTpc3siZBjEMcPiobRyY83ScGDUz2Uahve1y",
  "key7": "5yUsQRxAzYkYFpfuZM5WCtje332swhVrMXFtCTg87qUfkJZbgD4QGigNRLbowP9QgHsscezcRQ6wjzm61Kqs4mEH",
  "key8": "3sz9hfqbnN9rKHMNA93xz5QHofSSLcxZskZvFhZPb88RMCKcwiAZsLgNw8bkYNxT4QseJ29TKQVxEQN1LC7SbYbB",
  "key9": "4fum18UtPK3VXQgXCUZXciUmPKHb47V77VcE8bLgJSNbSPXLWPj6UaEezqWucQbW6TbSXXqJUH2r9GfrB6eS3nAQ",
  "key10": "4LdKdQzDHENyWj1SYNgSyrEwYUqkox3QAG8XWPuGiyBZKanZeJQoMN86FpZmxGC9UL6LK4tnPs8a43QcdDB8kcvd",
  "key11": "WmyJm7obe7ogHvPgDN2qnbUNXG8iWxYWTqYTyvf5k6u6U1xTgKNSqmitFgz5tPqxT7M3cy2K5HR7Cw2gLcV3kvA",
  "key12": "v7aCuXjhqK4aaDjhkED8Y65HaqwLKQhd9x3PeH9J8jKR7Lwg2aXusDHquD2raZStfmC1PEtk2hpizUG1DjUZtJH",
  "key13": "32dN57ActtEmgNrHf8cRRxMxz5VrbHUYJVTMtvsQ8nQNRzZxPfFWGRY3UePXJ541Zz5jZsz9c7aMSdQodxNsK7yh",
  "key14": "2ZGWnEEDoWGDDkQ4652NJchJg7fSEPaDv1VZFDtg4voh5gZgFmtQYuUSuKnzZXuqDDJ31SQBFLB2Ua7Qhx9ahq17",
  "key15": "4jYfbSo5hepLr4JVHvrhpjzu7uyBD3xwEkdvijnFJaCCQnV1RyogrYxfyfkmZcoxYTCwFjUn5YNJttaswTzHCzWG",
  "key16": "2ihXfnnTsPcuwMJWVv4T8J2cHiujtED51QuBY3Jt3Rt7iPY9y47eSqVqNJNmAASL6b7HB448gCyBuH2sUf744gmT",
  "key17": "22FGCUfzrjEJVa8QTkyyLLQp2Jd5kafbuwxTbAV9UjnRgK3vfdhVvECAjnY6pzn5py4UC97TKpb6aBP3YqTQPu2J",
  "key18": "3CJAUXSXk9ZrN3NNnLj6WwjyeEBqA7oW4W9ap7pioKNmcsHZ5NH4qfz5up1TJgGJNDMceabXvxfNVExpJnqbzTdT",
  "key19": "7ywcjr8y6g4F1EEEpC968Ab4Hi1FaUkhC5Y1VBQLT962zweacGsR3JTYxMGjseMfRcwqLvzS2ezaLK2mAkC1Kxg",
  "key20": "5Ln2ShPtrYu9NPA8EPGdAZ6b5h8M5RdXCGYwjgemFm6ifC8ANH2HTFXoWv4KTpHNgfUhNSbyfdg5VgZUcnFVkZ21",
  "key21": "26F1XBighDdQw6v69tfSZUS1H8oc6FFMRZ4q8fyVoSke15Q6CQhisYhEi1KAKZsFLRj9dsVSJbsXUSDGqXX5Vcur",
  "key22": "CFkKBD1NJXYZcRMvV6JivxZGpZ632K7L4XiKhufLmgRizXxBRF4nePSAgWDwXvZbMntVr1sMNtYf5hQDDu4G9Qi",
  "key23": "27G6bMdXPQwAdyaWpFAySmR9nKWVUDkYPzwQuKsX67Aj5cTLsjNdkZuXZaokThjfZceVwgFgoR7PEC93Y61Vwuuq",
  "key24": "2QUBDB9RDLvvPTobp3mMUoUbcCXTmNXJqXqwEbT65dcXEGUwdEqAEiYGd5xZT5PNrbxXUbCmoJaFoe8akdh69GMX",
  "key25": "4jb8iaNpjq1QJ22T4GnmvBijYJWwXHCYVxgBdR56v5sdc6xZFFdyiDGBBpSqa7xsNUDRj9MXyHY5S4qEsdM6Z7hB",
  "key26": "41DwhN6UZXu49oGNtjxV5zqgrzvCXAQfip78TNAmgfa68kZdT86dPM8rVc5MYvaMX3PRUcULP8NABpWjLfRghZep"
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
