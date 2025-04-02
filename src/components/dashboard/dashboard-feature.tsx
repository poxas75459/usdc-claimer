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
    "5qWFwwUQUJ2cSL219x66vYAwP2bbHYsJSXwW39NJVnF9AkAiwFYPhUe4RdedUo3FFToQCTQ7yChLN88yi4f7qf8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpk1YN2Qzt7ZbB8BWr1mTjwBhTkTyRpV1frmFPNcYdUYyBXAtVsNxQwhQu2ec3utxf2C4wRRqpUxzPeZqqbhzPg",
  "key1": "bPPBVMB99BkVh2o7yWVt2QMdeQNf5gDjed5kaS4nuif5NSTzwKm1J4i8vPYEuM7hY84fabrfav9Gt8KVWcB6PHE",
  "key2": "4UvYMDHm69q69b3jnzzF1AsbSS7jnyXG8eMiv2wFhLMrtbdpHrHbxHxjygx8DaDgkrtrKf4i7NCLQrx3R8UkChpg",
  "key3": "2AofVFf1hCgTjxZZnaXo5yFYd24aixYfEE8x1TuJYVmaUrka1q7o5na7U94xSxWt9Wy6HgzXWBsndJtNw56k7hbj",
  "key4": "zamZZMmU31JFQgxAEVH4vap2XosiCDtze7EtDV8B9aw76SaLFEby2mbYETgBvw9qrTmUGvtT3cLLnrroiHoApmT",
  "key5": "32ZUF5arCzHLMDMjb7gWgzNnJNGtS3kaRnCs3WC4KHxJf9vFg7jkzVWErdGtGPMAWttV85dGcewiEi9MWTt864sG",
  "key6": "5ipf4ShtkZBXcYk2GbFoy5gXvmPd7wJDCn9yLAPjiG5ja9JXkwVfn3RF5EZZLjX2Caz86ZrqYaZgdNwkuJB4ScF1",
  "key7": "2RGmH6Lurm1uXja82NY8Yeu9pCznP1wnFdrTiLM2q1xpDRtsP2eH2XNsadjKiG7YbAPaEzqjDFuV89hfCMozDoZ4",
  "key8": "3EE7y4TXjm3cnjZHG1tgyFJXcVCx9zBPwqcKVwYjMSYAvg3pvSstmAqkhEShV2KKeDcKQcdJzhU87U7GBWmo3PHa",
  "key9": "2RYTywfzae4JkhQd9uhvSPFVrTZDuihekMWayQAZD7W1bqs4Cof65qFJoWBYVFWoc17Zk2cpRhGbGHR9t2M2MiQH",
  "key10": "3QLysfadQcZon8qKrKZ7iPSCh2VDoH3xxoJbKmVJnCzE8gkULZCt39Fpe7LXz3bBVDtZEA8vAojWUVAfDC9WHCbM",
  "key11": "3jnHqvW2ewNymxwLZjMguS1DqnfcwWbUF1DiMqb5PtTBWmQSfry99rfnyY6ovkGNmNGPoDCEbqYZcn538dgiRSZ6",
  "key12": "5BsyUp4PihkAPLkdiktm2wotvRBJR26FfxFU2erumXQpNyQvcjCTvuQyuqNaaynGrGtgVaqavbrfzh3WnwYx6bCh",
  "key13": "2rkW19FxwHPZSdk5BiXumdRcYNvzFhF7BjbAxLRWt5cfKS35sr57gJZmAWaQ1neysxkWByF28njN4uT16oWVvBi4",
  "key14": "3hGnbyiZa9HvX1g4JWJoWwUc8DBnP3wGqSyjgev6B8wvYgaEBMWbvZxs45dyhQxAs7SwsMgp9DAEv4qmBHEzXnWA",
  "key15": "5fqwRCxhhXWZNBgZf2Lqo3228pzCoDJwtaP715GJb6wjR8bgHCPCAkWYSDTcaQ6Sj6DPsHoG6Qof8JDJ8qUQfDs1",
  "key16": "3pHmSuVA5Mmv9LinStfPfqVJHGRaAW7Gag2fVcukp2w1shKLnVJNtbSzryE5ykiChoHFmEeUzC25pZpFcGW8dvUo",
  "key17": "4pEGZ1PTXVZajjmRjFGWmqjynNCVu2yiJkH3JaCPdz1LQuTdPWiZ5GVGMra7zFFWyBAx4wsaGGczpQtPsSjrtPyj",
  "key18": "dP4quG5GH5oT32C1qdPmTUXvrvc9xACKQjPKNuHGa8ZcBgkp36M6DvijLnQcc7iNFJNekt4xc5XWqK7Vqdk7LnM",
  "key19": "5Wo5kwnPdgztdTLufMiDGpZuCX82ZvqXVC3E3h2Hwdf1avxN9CTrQmyfE298su24XktUEnb46xnBhp5nAE7qvD1Z",
  "key20": "66GCPvrwo9EzpWZgeEiz8RnGQ8WfbovaC9gk69B3mwPHWKbCKt5r7WqUSes9F3BG9Tqo683wahahV2ZmESvXyMtx",
  "key21": "3kK3dX3iRvWFfojo46dpaVaXkkBNEm4nn4kxJVXN94ni3QFYDsxLbMYnZyQsXo3PJntjiPQjAm1cDcBsTvfLgxFg",
  "key22": "uw9byan8fsnkxymc3CEwkWLMduT77MBgheu5j64KqxQQGXYQw7v6j1akvf2DYMq39XMoPa5qx8tR1Ldmwfqm2rn",
  "key23": "2pHXWibX3q8f7xWfBJ5ChoLeYNtWzTaPhzs1t6zQMUpJpxGCWzuhric4iHxWHHAP98C66jDn5QvyDckf69LbfUor",
  "key24": "3EmVsifzjG3mN8a3Fuq1tKdHEK1Kyy81SbwD9YD4aKMgeSH5kwnsf8RCfMWH63uhsiXYAiRM4w9q1822uATqgy6H",
  "key25": "CivXZUDwz7rGGTsMvT6evqo9gYGMWAq7ZWRufeD5671A9yompDrMS126nbfvbzCrcjVQGBjtS8h2Rd3d8Umqp4f",
  "key26": "N41ByivLuxyZXbv2fSQoqQZseEc1cXrrqenUEVtGhWmxJA5Q4FjHkTeqmecviLZGBiVFYwgdEsrGmGV4VrWSSrX",
  "key27": "4rVWFGefSbVG2ujFxmfvJ7hgAUuwwmGiEMbqUSKtMhhi7J3QLNhrJxzpGgnmurCUuJGkazw2nizjtEXTCs4Xwkdw",
  "key28": "22YcsEZKs3xCYKuGhSB3LmRJVSqxLMjwsNq93awtzB9pW2bossjkg6WxP381Neb13ZwFPVJZKKisg91c3c14wju5",
  "key29": "2yGx5HZqvqJCxPizEPCNyNiRxL4MCBYqFVMceXm1ZMUdHPrZ2K5Tqxd8Ps9dQcsLrMD9ENzrG8YurWXT4K1WSKc9",
  "key30": "FZZ3uYxVn8yWvqE6mNEeqwNMBCHDpVeAsdC8ss9oQuswmGukXCnVBugZRQZd3WPW1wZ3Bt2HauYvUtBT9owpV2b",
  "key31": "2pAc4zcYJdMrbAJy9Bj4sgfCmtFwLs3MhcRhUTCgN4cxfa86HgiqPjAha92FnW6rQpnzMLffEc3rnYB3pNVwQCNK",
  "key32": "bypMZ1oUeV88FtH4hG3gmKScq1eVWVV8RHB3tL3opro3meFbiVnqt7LsaxvQqiT6yLm3W6borTwbhLJBFvqK1QU",
  "key33": "5ZdwERUpmgLH5tm41TspmrD9Ffo68YtCe5gzq4bf4dD78JAFZLpmCMy7ZAi5TCh1HoF4tEAjUKchS6W817XLiqq2",
  "key34": "U6hEAYwz3TV1jG8GpxAzmeGeZPWpfoSMSZQwuPYbuhApzjncC4wYn81357BiSeJN8k2CABQxsbkxygL1MqgPfQm",
  "key35": "2YKvcha2i7ba8fGNv8BjfbFQLnDQBZcr3Zi8xJu8jg2apLVp1r8WE6hWVL6wNwvvL6UTyZmpf6HYxcsTzVvgsnu8"
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
