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
    "WQRSWDZ3ySJKdP8SsZrnLuYvqEFy2jv6bXwZc3chmKHhDC98nW1eViw262xRrNyiyYBN6GFZxmBJwvuJJ7MzgfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UASJkhF6kmSWN7wKmVVG6HTRJ5NG3JDrhX5UYTvnwbLeHVeiCv6sN4EGJowJ4iFETLuWvRQVpvY9p4bC8gBZdc7",
  "key1": "5BZpzXwQeBWQeLGHoAvkoLDHdD9FBCpum26uPtNjpSZ3dHJ3CKBVbdjgLxpyKdQeBs85T3kUD4mdUznN2TTYEzw8",
  "key2": "4F1ecC97T8MkgnnyGD3Zxxvv4sdKtKypdL4s2J9564hM86zY9w6xgey6eVxFPHcJTgwrgwiTF1GcxTc8AuJdXY98",
  "key3": "XqHXLdMwRj7LGYS7QihfWB7aj7FpmqTKv7JHhBVhf9emeUZu324UAJbYcSUfq9pUm8TAHWajFYtn5sgLnBDJksz",
  "key4": "2RatNtive2SZRnqAp94tKPbq5joebai3d3qMuS5NASqsiSkkZCsn8A4t9nPNWNbdturpdxhtBv77jX3HpmLmRigM",
  "key5": "E1GAdTUu8n883pVuup7ac2SpF5f9aRbPMzxDsGYGknrwuEsoSL6H8kjTmtRjHxvt1xNKgq4Kv43crURDBi58ofj",
  "key6": "45JMhK1t3xRhe1A8mVnuW4HVXSYme7x9h4Fvp8fCfhT9nbsjBfRYTjy7zpdhAE17cnSvJYNkf6Z1U8xMBSNt9449",
  "key7": "eEoqG9zxSDCTAdLA1GWa7PonNHrb1JC23gX8BQ9nmUzZqGZkkERiEriFimWdf3t184vyNa2brDpX2ytV5bH5iFr",
  "key8": "4HR2zrA33KchxmEC81U63jAvWL343XXueqZvfXSQ8NhagZpDgMpooBoEmXq4PxDV5nSyM1f3LbMBQSnf861jJHvM",
  "key9": "2mudaEQkF68nWedFDU9SBEXZpmzgLCgj55WLA1NAwZJe7j2xnJZug9KnPf7PsgburpRYUdSskVGDYjU9gaXUbspz",
  "key10": "5WGP1ruSjEkGsPxZwVJjYsuMu5cGtpHg11bFf5q4YMbvpXvA2aYz7Lspzfj197LSHrcaCT8VLdpYMmprVhydM3vN",
  "key11": "3usjUP31Fs24fJAGkJBrzjtH7U2FqsYEkFBLf8fRZwKTFCrsg6Cktx6MBDsWYUCPpDfeQAX66agF9VMUCXmJ6joa",
  "key12": "aFU6vCbhFsEy6xy8K3KjXK4CP3UGRAN4iKF9ngVUeJF6b7ayZnCb1F6BTEzBydQVLWSoeKSYPNyMerbE1QZwYVn",
  "key13": "rKyjJoWqBYbTTLQ4uUUcqstG99ZaMYWy4rVN5r4UNJVqvzWk4yUNbcxCJFW2txEu6y2TaAQfzXgUbMETbd5eT82",
  "key14": "53TcUhn3huebyfirn78dhfmk3J5eD8V6tcpKrXhCWu62PNd6c4bGQj9V2xw9vqTx54wpgPwuZ1vANafA15BG7zEA",
  "key15": "2sPdBRhzTxfjFJWPewrNsg5PQodwe6dKGjMZUMrVQhW53LcTapgbyht3pBYZ2SjcRYMLKR6QPy1v7wbJL3j3R6qw",
  "key16": "2ojhrXeTeis7hTs73QHmJExxLwMw4gVKzSv56qmozsAoL1LKeWjVdB4RwznT5J2QArFJCQ5PLVLvkiiqVEvPyFXa",
  "key17": "3ootNCss476gPnceypjCiXu6j17z62nvxNmbAdpoyC6mzy93nMU5ddvg5hAk27qE8oyyeMZVCz5gem25ZB4HCceP",
  "key18": "3LwNRYmMLb2V1rHGmGPjEyhfex9fYcZJydgUrHCgHzTEihjupxxbFdNfQjYCbc1RkcoQokZJdYfDPQHnfspna7p5",
  "key19": "2qgMmdaszBXVgVsiqGkHTos44XiN54sgJTsgSy2CeqbhgkhgexwyP3ztfBDQJBHxQNgGox2Qyd26jWwcZMDj88Hh",
  "key20": "3eDkKmDgivb3YjqVs57swcKuyh8NAyy83wEqcAhZJjRW9t4kxhi9dqjT9JLVm6dh7ef1yB6o9VbtyYbH8Xo7ZzC3",
  "key21": "CdxbEdas9sHZQGQ4WjBS73jwo1VxS4ZaEYNQgfAhh33MN2YcrCsfaWM6hW5AJorJHeYKFbkqFwEzos53K4qCYf5",
  "key22": "2NmYvjsktedwY2azYnqTn8UUUjqQjVhwK8byPJvriPUPZbCL4zszcjkgJiaQUxNEGcsWBRbusnM7pCUr32tzqz5J",
  "key23": "4jZXPp3Q8LVdL5Mh4KRize4WdbwZ1dMnMU98roXCEDs77zTqgQAUCapXqm7s3NTirpPLtoNEyCqxcTNBqZZqq8He",
  "key24": "2USNjBLtB3EsbNevHaYY2q6gtTc9dmyfB57E3Gji14n4W7iuAVzErsgSJy1tiPdoTM6ZQgMuc3f7VGSxosSgyvFV",
  "key25": "5EGkxDDw6cxLciko7qXSu6fECmsr6ytQd1oh9XofkFdnW4tLcjjungRG3CA5sWEFerQWJi4ErVGo1e4sbGSo36u3",
  "key26": "4BbA9Hf5kA1GRtAF5gvP1c9EKjifV3aVZRKHmtjsUroCXWdz3FSAmUEYBAKZbKuzeRuXXw3U9BqXBqujfoszWGnw",
  "key27": "3AGy5f4Jm8NJgqS8TXbLKKLwxYgroT2UZLQ1mQfqhqMxiZk5qGABGjuoi3Z7DYqEbWo9VTGWucN7nVCFBTqtaDAP",
  "key28": "5La4KPoKhB8qkHGtiqEGhx6vvJKJm1MEaRwiT9vmpPLAYZjHxD8SjBvD5g1MsAjZTdtBC5AKz6qNJWSGWgNeXEcQ",
  "key29": "5dhHR9iH9s9whzSsXWP9xnijk3KpJguQWRkNtD6zBtqR9cTTTKECebDoK1NeBXvWZMq8LgBZ7YRYVUDmm8VX3iii",
  "key30": "2FGwBqU24j4cEWidFRRTka9L5P5WGExM8WzeoFWC3QV5CRT83wcWZmd6g7CvsDs6RaKK3hB9kWY849fS4JxjTpXA",
  "key31": "4B4pyhdG9bepAuZLRRWER8E7Y3wb4nqRTPpGnn9DuzCJUhFDQHppP45uYgWCyDciuUSipHQi6TbiUUGvYQVHQyDL",
  "key32": "2CjPT1m9uNxCxryoFox5kBqhQmph1y7W4xpEniDY8EJ4nb8RhjUHmmzDbjto7yzE1Xo6U7us9WvBSskYc8ETLJNt",
  "key33": "KQo4HySmei28S56kPSCP7QMTXboMcokGRrY5EXWo8BJuNEJz2jnQxgMPQCtHBk4avTP3HcgAVnS6JCtyBBgq6w1",
  "key34": "5niM8m1L84CF5ajLPGEZYg1Vdko1Yk9E7vLobVGCPPsDMQu8h6ptHgYAqmge2N2htg5YjYpcn4616ojqQkYE3rs2",
  "key35": "4T8D2qzu4FmfAdUc9ctpXP3cAcmYcpzwHShvb2Moak2x7E3LwEvEMSgvE9hHi5PHRZWtmSTPShEw7eP5owQMDcx3",
  "key36": "23P1gmeqEMqzMMRY3dca3LrgSXrtAu7SsrAuHhjARiHC2C8uz8fwibtW9BTpsvwy3NcH2WEhfR7pXfbnxquodXPL",
  "key37": "3at7gjDZ9c5VwTbnzRcyby7zxH1geAUwYTxsb5mB9CjbPSvjJwHz6CjX8j1CS9JL5nU69m64SXdYctpcphEc7LsT",
  "key38": "22WKyjrKUadtaGbDSqnkTxaQcdnzoCkRY93UvbiV1JHwnc2Z51DNZgo4EBQsVFYFbjh62CDEmaEioi8DtQX5XXE5",
  "key39": "5xVPd9JSTqxbhyJr1NQB46M5NDCJnJh1gsnAXQHfTsrhcmqVqjSccNE9a69X8pymfbxGoAPEiwMrP19XEv4U7B4h",
  "key40": "39Q3SkgRYMCfGrnFvnvenroVkxg2iLfKHeV8Vnx1wjr6xdzV8AifwYoG6RSqQHXZewzRCTR5P3uknXPNetJj4Xw2",
  "key41": "Sdj7qgeEqGJwMFNhm2fJAcfu2hpYaARsaPnfkD9TD6CDuf9xyMSTq9JB71Wi8ajEaZHntfC8VqxD8cHCm8uCE4n",
  "key42": "2EAQzRtQK8DRffprBJB4SHtq4fTQmoJcJcsHVJPKTLTEpbkFrcTM97m1mnkweasy15TMNmYL1R7SW2jXyg9SELXp",
  "key43": "2WyjGezTAH9Dxa7d65zZcQHpbrA1nhqsCpgZQk8uv9DsYR77yL7knoJpH7phPM8x94q9Pws4sXbJZqQ6eLojES69"
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
