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
    "EPqXtMwnFUaUKkfvaw34rYcjiaB4i2xpp5yGbBWmDTm6MyrBMk4krwBEFjzYmD5tzXcY9CAEaoCaoWCd6Zpu38v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHzW2H6aDTCzbzAg66UGDpyaZ4LqyjaVXDQYR7ttRh7t1DuQXZuRmjGRFCf14g2dm65emYuRNAmuhGD1ZnUWxD6",
  "key1": "4i5ziRRnhAKSYb5z2LBCFRpir2VMz1t3mGTdy6Nb6RNL2wDaY4VqQ4xk4Fm78qLwjnk88Z1QufmogpkxmAzBSUjq",
  "key2": "4CLYdNvRRqtbyAaeeVkypfHCHrVs3E957t8rRvZbVNsXp1E2MnsSTYG4o5x7beprTu7XkovAGstYBbssEzrhCfqG",
  "key3": "5SdJhfjB1G4oiK1N6WScyLYKkAcT8uJQUtvdRxkRcGKGbdXxoW3LzQxHGcMQo2eGjm1VgDfsbcJww4wi2Z2xDAac",
  "key4": "2HoJgqRFz54xoUmWy43DWhHE2vjZxPFV72KZQKmanfGWLT1Y7F1wurZmrWdKfBWuvKoWbmxme914qBpwV4Jau7KV",
  "key5": "4awXTVcdkeh6kT3DmZBKXg2G4UvrdCvZkKUrEhAkoKqgyVurhhwxfFjxvDX8o8vc53nWfXkaAQ1HvePtW7i2u3gC",
  "key6": "2NWr4KViQwksRdrexq8gQBRNqQBAgmqa7QY9wRehy8mbUd3iRpUkNKQfSqbV9MUpAeDx56ATRiPcycjvNct4ABKS",
  "key7": "4FxQuGTgRc7RybNk6zxWvvwJZUMHw5EEuDdLo1VjPKaWJKv942JgExLmt5P8TXZqx4Sz9FQNWmegcmdGbGhxVG2E",
  "key8": "5QeRMJxkD1xbPhctXpguNG1dK7RoUwiw26G8nqN29EnH8fFCZGnzn6J25tm9cbPFjrqpSs3GNxGQ8VRH3X7wH825",
  "key9": "5AhdUf964jcFvVcniR9fqMJBRaaLs4xjVFqnKgpTjaeppNB2fnnFmxENuw94v93px9RLwgzdT6tyDg2psPMoXy6f",
  "key10": "5ph7TFYmvm3Hnq6xyJUGRB9xLAse3hAfpajEgLyHJ2YhnQUYZDeMfgwN2Cv6UkPJRhgUYgpq5NpWYvVVAZQPfVZv",
  "key11": "5HpH2onSGTfwQ3gphUfCS9EhsnE8FiPVxTCKq6iuquVTyurTCUQ42XvTMkvDxVDe9XV5AooghDv9j4wKw3FMJN2a",
  "key12": "4F9PzD21DUBBM9vpMFtAj1qh23RVkfj1eM2ijEcnxGs6yeDpvcodZbwUm7HaxU2Rieh5cv345gibSukjp4trW4NZ",
  "key13": "2CHLAeMmCP5WMLzy6zmYRpeXNZ2boNtJr1YfdXgLGmLkWNbY7BKXVAedf7ynpNi9ECEBqWp3hDhmWvtaLkq6zVca",
  "key14": "2eBm6MSNEYmhmnASDuEbrRo1QuHZQ7K3StmGLyvawzdNvy5A12GojeEPuS4VcHEGqhzbtRLUVev2MzV7HTgfhF1o",
  "key15": "5D9HxZ5i9EC5ZCpwjYKE7qYApk3Vy3cCAFr6SAeTmdj4QsmSX22qWjQrY2eREfMpZd9oY1rJR4WExzDo6afasgod",
  "key16": "3whVyELJSGyWPNjH72fkoosZNdB6LppPafwU3kEAhhHzt51BLTaeaAgCrp89iKxPWzhCJ8npKMop6kj37GZ4bWZf",
  "key17": "3nchZQocUr665gfdC8caVtTNK4Su28yR6yigD45VhDUkJ2CD83vQ9BwGkHwCUxsXV6PPX4JWLSWsFtdMws2hBvZh",
  "key18": "W4aSguLSUgFZjpopkz4THSxVtr4dcDCYm6fdAEvAmEvVVMLUTuWJj7CEndXZ1RkdnVoEciQ1Vfr2HPJheZAPsWZ",
  "key19": "QX6e2eFT3U3i3yjLNpADPsGwdxGuABRpoWFcawqZRwv4MYioaCHcyoJPdnRrYA6wAKNAmJ6HB7MYU9sgWg5gxtT",
  "key20": "4LFZvXudFYw6yHi4EyyDYgo8HcNLm4NJ2z1p9bbo9BFvR7FPVTp5VzYfW4BUmDyg7XdKXAPf75uWTpjFMXtF9VmY",
  "key21": "5z9xiKt84yUndfMhpuu98U9m5eS3HQDcS9YCF4R8fzqLNYgX4SAdQfR7Ak8Exk1PqhypY6x9r86t5ZPNXHxqnhSh",
  "key22": "5LjMoZ9jR6JADc5DrxY6czTHoCMdmwp3FodGqpQhL94EfpLw3cmFknc67bRQHhFTK8axUDWGyVEKUyv6T4Ep9k3f",
  "key23": "2ZympnxpbnyVRwgwndjGmqekAS9nJntchryeGh4Wz5wVDrtcGmLLk1osj7VHNs75DXSM5C2SvhtbGmzZY6VU31Be",
  "key24": "3fSVEMcnCbe7NQJiA6wDLVn8r63xpwuAxnbnKkzZU156ohH32ErGq1vQ2ZB1W8wR2FjJFTqKzUFwGpjvXm8j7EEG",
  "key25": "457Lkdd784YuWvQ44vFGqUMVCUStebk2oksPC3qLNRiubFg3zQZGneyLikHCCgpR2Ry5TPsDxPUvrmoZ6VARkVe6",
  "key26": "345dkFY1BNEkSgHW1xPzAaZi7PyZuw4SZFv1Ykaet2x6DcQun7QXzpCZyke9ZgYBai8a7yTGyS53GgHPAqDG6kyP",
  "key27": "5vSU1dsGPmBXrvnDea4eFd8CpP6g4SJqFNr2fSxSJDXAyjVQktV49pvBzETN2KT6TQ3RbwDYF6JNgyMUHUVzM5HH",
  "key28": "4z76u3Qx1MRS36R5PLKfaUdPBYZU1aT8xPKWurNoeSQkjj9BSTDSrCSGxLGiShnH2Qxbka2QP3Lq8p8oT3jfz2vs",
  "key29": "2MFRSDZ4ExGYDjzLPtqMtQBBorWePScsp52sYiX3xpJR1WXhxYuww8hQRqRG8WsZoqk5tUcaFtaMFYY3SdtXpXwZ",
  "key30": "3Kes8QDineFZJBgUgraCyUbQ8fj9SxdSGzSMk8xCXbLVQxvAYMmnmLjhUdZhXeocdqR7ntX2ivjnCRvzwECnif8T",
  "key31": "5CXEdbBqf6oUBVbaXBaBaw5QbK9Too3HHGHq8JobsdmHndzU4yiZQpamWcws7jchMowvPc8aeHwWKbczj6m8c88H"
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
