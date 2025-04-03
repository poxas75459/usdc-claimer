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
    "5wgVxDPiebsQgVwNYksth2CHgw1rDW6HhjN55mNSTQjAXNg9ZKjKqcwfGtyua3yNDApTX5DAzAAoKodnQYFN9zS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXP5UMmrQAoKgYwtH9UfYVhprnuPHPsuZPGXDBR8gJMd2Tj4uY4J8QWnVEEWHaDZaTzgMKTXZW2yTndPyBgrSaQ",
  "key1": "4ZgsMxapauuDEVP51tVTryDJWT59afPxNUexCVgbnkYMg8aceXRre4K8EpqY3dwppbAfV1vJXj393ibqyuFWe7cR",
  "key2": "CJWkj5L8akZm3H8G1o2SMWnom932ZhV44b9A87DH6MLG733MqASqFFJqex2Q4RTQTCuTVKEtd8sQ8tU1yx98aHj",
  "key3": "5WvJhLUUQt4dDQC4mUgA4dipsgUAPAniPUCyXAYArD1vNzNNN8XW6WjGCq5B72DoSfKeHECroZn8gzg1Pfbaxtj4",
  "key4": "3QgEfcbkWA9e1TAXvdauLcSNMXJ8ecJiwdNDnUXn7cqSXwEb3ADpXtBQ1HjSUaEQT2cYpQbnLKaP173PYPHJaTD4",
  "key5": "5NECx9oHm1DRiUqCu5DAXucLRBym9o44GVBYD8N8YEgAyrqCc3WAYkfXFredFSUcDz167nx6zCsbN475tHE8cQWg",
  "key6": "5s5tYCs4H3HL7Zn1Sne52runuHai41fyUriu9GzbJR8KpRgsEz8fmi9cdEaxeHGXdLZCcXp7jKSWczupmjNE3jSN",
  "key7": "5ssNMgUceoFhrnj2nHDW5pTVxAkyt9opSFtRyLcaL5kWNHpSuEvvvxPG9pBABpPp6TRQc6SQ5A37HiZf2EHtre7V",
  "key8": "4ihSbLCvmGfbJ9y8vRtvkwnBX823w7Tso6a9uN8h8NaxuQNC3cRUZtHHoQ2b6R588KwEJ1uKF6rssQQ321QPmcjD",
  "key9": "5AdBxDtwsVzQuHM16Lx1dA7Jk6E5PFEh6DvnbPJbfVP1Dud3sWM2BsLtF1YMu2ZstjtUxQGGk6Q1C7qzTK9HYEzj",
  "key10": "4Tr86bVUKMa5ev81E7dZY118ZmYoJAxi2pEpMJbswKAVQuUFfmcUYzXY1SPP9vkbeRhc7xo57eisiedxucoJzNeC",
  "key11": "PgkSkkNZiXgkjTQy5U73ddfWSynGcSd5J3QsNNiaTc8s3Wdnp1nQJFc255Z8nSCtezk1jHcKsn5qbVscxk6JnHg",
  "key12": "4xwxYfFkNms1C8AGnHeGfacc1WqsMsynn9rQvAzrmeqUSg2eVGhirLPT5LpkEzSVVaFyLSsukL4LHcpvNA6NRY3b",
  "key13": "4XrZkp6U1VHHGo2q52J6pZ5GjGEf4g94ZS2v2Jjb5afZvSLwUK2xy9Wu4dDUZLYLqY2J2fi3KuMpYWydd9Rcz9sn",
  "key14": "AfjVhDjVKdvouPZc4FGNrrzYJeRaPEi1gy3n2Dvyun8KGr8byq6QiAVXf3mkZmPsbLP9hffKJ6uLNrTZdmk8AGq",
  "key15": "4ceDSyLErTEe5N5VbPwBo1oCmKmxFDAZCppX6Bgo4pBw9wntMxTs2qyKmbw7mpMiUJCZMfyELN771xKSxibUwqui",
  "key16": "3Bs2y9Ti9FFcyYXithdGg4LThks4du4jrqYchZUB8Ue5ANKPcqYHyrEMrxutWgnrJxUL1c7FHjds98ysHYBtnX6j",
  "key17": "5Sw7ZAZ5W9dsnsiHBqndorDmtyxsM5MQ1R34e2Js1EERqevnk74igmbrH8f6MymuXv2qLaboLgiNcfQwQrGjVoPK",
  "key18": "3VK8KR1b7TcECR3AcJCdYEYDmLsA4XBPkRQe6vtvLJrXeKBwyL4eXN5rPYcE1NzpBpFZ4Uouw9yM1T9UbijrYmTN",
  "key19": "25yLXkvqH4Tf21RfjZWaJzmgS3VVcm3gBKheqpP9PPtXNC21g8hWyDrdK9NmUPjsYPJHqeoL5snix7QPBaurZyfS",
  "key20": "3yiUAHbNHaBDBgAG7uWAE6PyX2LkAnjbg8KY9HAjumZ13ZKziQ3k17xQVzVPiediepU6ihKDC8zPsfxBVW1MjEyu",
  "key21": "4Nci2BxjRSXhySaKBHNmYAHqXz4pDJFnwRagogtoJecn3AiyArepkyfcGBy25nv4j3b11h65rQDg65JhXMjbMJSW",
  "key22": "4PCt9V2VuvghBmws9k5aBTX7QcjwzPSEhfYNYstW2UyoniWmmHizn7GsTMetT3cVES6GkJnGunhVcPjy8GbmB2fd",
  "key23": "xaXgHs8b9gK7rrvpQZ41xgTJxnhC1dd1kEY5v1gNmpwxbx81GkDMzbFHZXqqZXfXoWPhtTSxLgJ6YjuSMCKykQi",
  "key24": "52VcupEgqWYD7R69iXkdpnKHQsjpJjZBG9mB6k9n3BJU8bPmhvyF9pbQkFcWvZVBbaBAW61BxzNs984xmg54N1yG",
  "key25": "53W2AcQdJ1xS51sCyaiED5UaXMcGbbWHFEZcRPqynJBpgjWajMP3xsr1x3iVpRmb43x9vRX7SRKsnmupnAL6csEz",
  "key26": "4XEAFei2nDpTwdRRCmFTg3XpHR5Z8QztbfRSUrY4VqrBiVJtNZBwHuBRg9E9XyCPQ4wBNX3V4a3UKg7FR8QYen5Y",
  "key27": "7mgExRcjNPPdaHqcFmivdrXEJxXF2FV5sQPsPCHojnmWugAHxiSLSpimiMkH3L8faWgyoC3GTH2wTVS1Sr7HNc7",
  "key28": "3Rk1Mt2kJ3kSTcCVqnjPESJBDWkxJ5Q2kxWZVNebEMbHmydPGHYHmyLEiwcaPnBzrwQ4fEmEXNbcFSZawbez6azm",
  "key29": "5GEQMJ5YR2aAm7Vqu4j1SQVxPAUYoHL6bguGkmsXZmkLAUmua9rXkDBLsLTyTqViJvJxHeSj1K4k1gYa4mUik4S9",
  "key30": "5uBpooq7kXW9X6sNhbQs3RsLRzkZV3MkFoNCkmc3NsXJcunVnvAhcPKyMG4jEZBo1Yk9M1z5pj1ZGPiDSHKhrxjG",
  "key31": "2JzHBfsb4CxFXqKHKa9EhnTjbjTCgj6JkT4vrtKMbnmKgFpJ5S8T9VYitU259WMhNvvmjMVgUvmP3jRax62NRLkW",
  "key32": "4qPmLsDLbF4A4UBXzqm5oujbhqPY26XFtnARevCJBvusnQ16PADRMKtTrfj5FU5e6Eq3aiM9Q9Sy4ehx6H1yVkui",
  "key33": "4EzT9rTSvXjFczcbBSWp9qNVH1rw8yio9pWKR5bgcPuNmjztnmQhXLcYbbLMrGehjTucWNCZxeze9gLsp7iP81YH",
  "key34": "5HQRzNND7riWfYgezwLYgYjRmuiVu8ScG4rxzKKpjFY1mB7daaMeKBU43uxBKwYyra5rwrWXjPTQx41PQ9cygGb4",
  "key35": "3c6P1yokkRguHS8PrVR5KQjZ7a9fojzV52mbMRTCLpq2mhjKroG5SgLTHDn9kAtALSxrSVkhEqQ6VBRTdr5a6sa5"
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
