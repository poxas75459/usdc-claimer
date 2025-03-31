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
    "3SniE3ikXys19tpuTa7xdayEtbnshUzYKKWpy5ezSfM2c5jmJx5jWrkf6LazoRG6VM5LYPwZ345AqemwbdQtNUDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAsLMSp85E8vr65Svsn8bMapZCjt3GqB5BYnHebDQXtAqaZWn8wqhZRk6TUBXJAN5cB1Lpt15PKRAjYkCM6XXcd",
  "key1": "2odCwe8fuaZsfwTgtivJ3XzVpfoXAkDMLEs1QWMCFqMP7KZF3ZVD9EtZvbeBGYZnEzGfnKeNrHyyPf8hWrNeVh6n",
  "key2": "2kpLxWQsz3JGXD3GJqNpXRSJk49iuuB8M6fCKMB2MtSRhbLG32wSk7RRZ9a8dmNnv7KmZCCicvXLy6NxRzNK55Lk",
  "key3": "5h2p5CL5rYtq8ksvMd27j4Ry8i5wxQnqiAxpJYhK65qdDeQQKzvcbHrYoy5gtYbmPjVstWSjUZ32iC7wPuuyuJq7",
  "key4": "4BTjqqfsfFdFVzeTnm54ZFj8nT26eA2FZ74B8dpjTFGqTSEAXRibZWzjwQ8y6Q12mK3zyNH5ynCqd3nkc7DTcLa2",
  "key5": "66kRTe242JYixHJJCRkxQUUqEF788jME6y9XQvoFf7UNHT6r7AeMDrjoDUGmViofuvBfCSSk7wHNFnR5vjAE5ia4",
  "key6": "54cTRAFobTJMgpJHMNf4T5GyDjHL8jvJZzJ8f4ZU7sESxZR2RYc6h4RuZmVmyrUWF4tHwQpnj35jH3mtoUgckejb",
  "key7": "5csPnTjpVUuKVinQQ1YQRV72bfjCwnk1VPJkt6rx3jVktub46PW8DCBvnnJndytyHeRDFC6CXJGgc8wNRNgxHGkD",
  "key8": "26fdpL1E4S9NVso936QdHTnLgeNkxtLUy2w4Bie3XW3PNej7Vsv9Lbp9nuNFECsW7fZ2bezKQCTf1UQsBvFSuVvV",
  "key9": "5VZGwXWswMbq2JCMZUtW38yFEM3xMHsigQQiDRExHkF467exaz5GcoAmYKLeiASDA6wUnjZTH9gZiJkbVrz19XT8",
  "key10": "34WFDFWUwVwdQmdg32ynetHGVUM5M97DhnKS1WYU3YziyioQRF6iHSB4mxZJdh1UNZnutscvjZbcTQowCfhNgFWs",
  "key11": "46JnmYH4SeyZvVtSoau3RvxM6dgFvSDVq2anZNGiLPrrj8zdJrMAR5uUEJgbdxNQ8xYyHiDu3mf6BGYJU5pUk4Xj",
  "key12": "4AmYUyNvn8BDqRjyusHQF2XPCyp7n5vfpnWQjYgZcpEZd6jwwG2LA4W9vNPWTw5NeSMSNXsqYB6tyeA4V7LTP7Vf",
  "key13": "3EATqPndMwSJha1omoaJoFD54SfJ68f84U5idFNhmrMvXKRE1cNxPtfpZ5DEFZjL92q4EJzQMMJmvy8c1CeNEhmJ",
  "key14": "v1msfYbL4YXNzXcfnoT9G8ST91xWEcQvpg5JPH9S1zzrM4JdhTMqeeqzoTfJZ7Fq7qgcFS9UdW1gdpLhi2czv6a",
  "key15": "3apSG7DVngso9TKibMtB5yxKfPYnM7UNiBubPJWXNCETM175aXppAd9vdKweB3GHVUGEP4k4HpvaoyTLjLUGLqHS",
  "key16": "4uZcCBYiVM5Ccxtvi6AkmdeynzzUiU8X2Y4fLGoey3pBq3nSAeoSaySsW2yTeSQf5NgyMuKxbo3MV3TbStCnWjwV",
  "key17": "zpG9GWdYQsJiPxYw8HEPdD45PBkWFk4GZqRMsiG2P6wUrqAUJodS3MQxmbrPBuTAiMAuyjUTMmUVTpV4fLqg7CG",
  "key18": "5BqYAYERh8ij3kwFXveHRznuJL4YsTu4SEWSjYiEwfKb5CdZytnAfXiJyGhN8tBhSWedSAdD9BhGL92ZxaxPvE1C",
  "key19": "9XDwKZeNLMmozU4e4yQQE4FrcQZQezzo6xDHG2xqZP3nwJRxFNf17eBaMVRFzN457QjxNMiWmKUSKtZiWXkwSyx",
  "key20": "2FYRxqPNxziviF2jNSXGc4iej62W8hKSFuN31Pp3a3jT55dvNZBEaQB3ux7s2CehRnPPJcdNuSazExh7RhLPU8Cq",
  "key21": "4zbW23MGJ1WCkp5C63DRuB9PmhvSV4B6SJ8kS3PRzUZrrMn6e2wSaPhkX7tXQdXzzYmQHeKu61pH1UCCooiQLcQU",
  "key22": "5ogyg4XaiNWfz5SUBBa3efoS8dBZKrDvmyvX8rrgTBqqgYYPH6As8cHY8MucWu9uW5EoRTApBn5rGb39m3T8QrDG",
  "key23": "4rgwtqDebz2sAFoHqV45i4PhSeN44WfhfqfgmQaNPtTvjzAGrmDnHH4KXR52rerRfzr37JnkBs9tVWZtaZe4mv5c",
  "key24": "nrk4qJ93PpGdY18KqojxnQtLTVWkh1htivrQznjAWJ2LXhJurBhkNSqZudL3Kstw8YRwovED3TpPsK9oAVtzH1C",
  "key25": "2BEBAWcrePfq8cmnMPSqjNVZeFgu7KQxR5ompCg4sdH8xbPxH979cnKknYP3dpqJJCN27Lf2CE4khudRFfgkJNQ4",
  "key26": "NJoQJd4fdziAi7Dj8yx6BEToFcvCmJj7vkjrTgjAtjpPpxVFZgQKoSP92P3rPkLpz6qUQjmRX5cpma4X8fiisRo"
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
