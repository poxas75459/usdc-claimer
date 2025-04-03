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
    "2Vf4p84UtjodGvjw62r41C5r7mAmCabqNJ1zPCrqwQ7WAZ4uSdJgVi837NVUBHLrzmwKeUwqms8pZst9Pf9eAvSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxAwS4kRFqeG7vGoFLXeKnh2pr2X9NgD23EoKzaHXvngGz2tsp5MzvwhMp4tTL5MPYvWGYuahi4FfkW9FJjZmRZ",
  "key1": "SS6nVvBGtjWQeocuG5BsKAYfrmTDsVDi9DFRWvAdtxg4FihBrdFmFc736PFZEKgXTi7QyKrxY2cEApPYhfNFhAz",
  "key2": "2SFo5yJ5zMQQ82nF1nNcTzcbgAiMimLpGwPN9WW9Nw2Wj9kqixEuw8DXkJLH8VSbgxhvEU9NmgKjBDphtA9FTRYp",
  "key3": "2ToqHavV2c62pSBJLmrUAjXR7rzePPT71NxjpQDsQ2b8QydN6H1WQmzyGb3QWLrqmScKxks8yK4TRXyhSd4s5VFU",
  "key4": "2dZrj4dv7a9YNowB668pdXfTascenPNYGCn9wevAcjSKj2yRq5gvfF8zMcUtMnS8pLW7cLDvT1XbDG7AvEihYJ67",
  "key5": "4U9A3CntuUJCEVKXUbYTjRHJrKYo7hGkngKx8EYPorNmrnM5mJ2hVUQaEMmpC8QrBfn4PektwWeYv9oMTHmpLiEn",
  "key6": "4Nx8kUnCXgKvFeDPVeQ7uPfgF8jsTvABZmE2gvYun6oLj8t2cyg8X8fcA7NBRM9gjJen9J9eXQg7pgenc1d5m4rm",
  "key7": "9tc8vu7qmtxqzC3ATcEQiYT3JF9kHhSSYvZF3XJDzfMDdDzgBU6qJhgoX8aRPkjKXHRhHCX9iA3kZMid3iV1DzS",
  "key8": "5dH8VpBY2XYsbrpgv9vb14z8NAAzTk3cranihdsUabvkdX9pKCv9nrE182aeoRgZ6rr2uq5644waDoUrpAM6BkSK",
  "key9": "aaoriyaYAX6dyhdAMZD5D9VrqSxubPPoPZXEjECWnbHEU8Mm4y3uHP4u2W1Y5AxudWY49bEFSRct1co8tR6u11K",
  "key10": "53Y98nEPAA81Pv5PoSUPTsdvdQGf6yo1W6mNHJRE4rhxPS6u4AmToFbUSmA6Jbb12jByPqCje7FNknbE5ybHBXbo",
  "key11": "5jYdBdh4DDrTDaJF26mk3bgucwS5UgjuB1vNQH4RZTSkgAJavVaqaQ7napgU2tuwH4p6h3QXcPfn24VBEX4vzrTp",
  "key12": "ZhRrBQAZFGZ5YeaF2QbLsbu4AdZq9QNwkzZNH7BtVmVXCWDCcExPCzUVR2S39Gn2CBytQwe9ZTjTegEuM5sRH3G",
  "key13": "Crqm85aHkGKNBETAh3qfVvCySZDEJwfGVYJ4gpyz7bondnrxaWtx7XG7VkegGkYYUT26yHmmkNJo7yESQ9wN4jf",
  "key14": "3oZDsFjeaTornvJffwVRjLYEFoep1RGPM6mWbSCwfcf4hddtJcbS1CLQjXfXrv7q2ogeGH2Lfr5rN2NEL7PCDXzP",
  "key15": "526jF2cEpK9MQpQwSNzZD9c6qgTbPWPXzVCiMDvhuzi4VRjMaTE5CMqN1eNDfwdJz5Cm2gNeimwHqDvnYN1qhnWN",
  "key16": "5ibvLoPfrNSH5E2zRicVrjVVrd477pPx9PesXDvuHNyVD7atiwrJHjxYLZabgAH8eb6XYa8voTAAg36P5BwJAitX",
  "key17": "3cnkYV5phw6NjUcKXWkJWQ6CAWe5T4M3StnoL79vTUZSLBHmHJr7ZmFr3RtrwD3P8WKC4DhNKMuGNMEKotikPjpb",
  "key18": "2ysGSSv3mYXgsQkxeRWiLowfUfFZfD5D1b8qN9mmAZ1xMyqodjkv46CrjJobDrHejSWiuWsWFQZQX4D5A2NRS5Cr",
  "key19": "5LB32CCcdqCvMqfLdTNmQcmQPysr2K5p95Mnr9UpL2KLG9vhaXLELnb7cCfYCvByaWPDJF2hzpwkB9E33U52Eu5P",
  "key20": "5nmusv5jcF4bVsp1UBqXi9QoYZjutfc7QfpVk74T51hDQNFsFxNz1F5iVHYmuak8JvyKYGE9WAGFdwjvZSTTXf93",
  "key21": "3WwAQZQLL6U2NHfjSWB4MXDtDfrxPdxnaaYaWk8wmHtaVKn1F54yxdJNSjwMRP7dBrTYNNCagtmexx83SncYarwZ",
  "key22": "gVAuFwBPAt7wCuxDBCFVmdq3G8hSp5cUqyFNcYu2XQ4Y1JfmAzz7UJhvazkhnfPzi7ThQqXmTaMnDM96Qsydy5o",
  "key23": "Rfco1ZBDL4HfvLRvWAv5vxiqsHRR7ZE3fZ5ur1stgqaupkmaGtEBXwr3BSmBcLakDZjPjXaQpa3EQd1TZtJB5xC",
  "key24": "5ionmBoMKzZ9PLYdCfYuHuYeTKA6eB1KdDYmTsZCMjmBiBjFozE3prVFhkSFotuQD9EbCxJZJKkpSFr6NEYX7iW4",
  "key25": "3GXSxU8bcvMaZLiw9suvrMSdzkREWojW6e2TwHp8rU7mUsB7JEE9kzYKQYquLBUsDi6aBh3KQyrrCLs1WADT3Tpc",
  "key26": "3imnvBGcvkGdnBRMd7vHbNSLEd13xL5s75MGLrr5sMMnXbYUeESvCj3K3uCrrcAoDMVjeJH1jBBZryU3S12HzWhc",
  "key27": "4YZa3EQRRbf9dbrUHqBR2iScrYGh8w8kX2phFQhBYewhVJ3wLkBcSrKxPiVheKzTHEDovM5wx5x75aAFr6r7YMHu",
  "key28": "5Lozeeuu5tjZhFhh1jxi2GUwhK3tBnYHPLThnnao7ESBTATx8BbMaA62tJJ222q7q4Vi3f7quZC7SXhWhX3miuvp",
  "key29": "3KkW2ho9S6cuaBtqAtSeKE34MMfhRgBeKsKzPyH2ByneYdjTDKWPtBZZaGm3F3NkNgcFWd3e5kcTi48pN3VxuWJ9",
  "key30": "4VJHfG72X3Ta4owSqZWsD6xXfQEPSTiQGF9tDF1qKgApwoKhDf71BxiSGduD4HfQXWQwWHeXb7aJfimbXQbSLugy"
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
