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
    "46LokwU6mkwRnA1GPzoQZQriQH64Raoj2UsZoo4Nm3Xjee2TFuLMLYS8tZ5mzMKus5C9LYLJB3GeiBaToXsS6At4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7RM6QckysvpXUrhEnPbVLF3o7gNfV2dKkeq7ZkhXDu5ZhGcA7UfSYFoo9sqcQ1NJdsCBb6US7sEPmjrB3wWRnk",
  "key1": "5YMHXJJQffn8cPidtawRBKH8mmwbYWcbR43MAKg7q774B1eMStER8BSDJdYCm3ywU5ZxP2rtvn1pAUKmg1y5XUMT",
  "key2": "3kHUCty1igHmgFa2mEKmoq5BUNJp8wv2GiunQDRTCE7BYk4aG4RQg5MXEgejPQEJvALXqcscYtjt7zrqxHhewgTX",
  "key3": "2bcU9KsbCaBf2wgoTMHPWAEUW4zK2XY9nHM6SkGAFzehnuAEisGU1oPssMfaQixQQxArm39GbHThZ44bMgqXug44",
  "key4": "xCaTha1wTGWxksqGWVyu6aohMuWLworqVsnrandPLYtSPkLSrjqrQQbmuY5Ft5phBeN64PbbKonYwwjLRMKWPbD",
  "key5": "5kSkPA8MLVF8PM49TpNzgNtNK5oF2WZCs67mujU2uacL9e1h75ApJcKcWvuAim7e7GYAu9coGKT27xcxwzrMEe4j",
  "key6": "vLngq8Q6MkS12fsEvXJva7sgbDaKybRJyUCUx5uxu3PDmehZhfFBrXD8vgpDnapE9e6pE8wDBhLs16P8xmnPWNM",
  "key7": "46Wyq5hr3oAx98sCzTajVkfXFDbhxyQuGYyeUv5PRMkqyWCrcxMpiEnNy2vdzo5gFVBzmH7DUNPhRVzndNyUxki1",
  "key8": "5P2okSsSDx3yhgCcnbYRjidk8s9Wcc5WBGxDBVWtDVDmybMfTw9eC5Qj8ZGDSb6iwqMuhAAQyRdH2VsSTn8c7fSX",
  "key9": "4aofsjhkBdGJPyg9F53oQp7BMxeBFjd5Kjr4E73YL9hXEMjfrV2vhTDjhZRHx5E2Pp8yZC4JDN2PkQjfiX1jEwFu",
  "key10": "NQvkW8rV7g7SaTp3JuQ7PAA4iufqNhEj9SdRgvLhR2brXtRbBTWP7UMX2Me1jWZbck5ddVCkit11Wb1BzrWpKkQ",
  "key11": "5xHxiz9ecZXy5aiZB8LNJ37v1BRzRxhWvRcL4JvnLpR9RN6gxbkEHmWQANRiQL3Vra89tpnHMbsG9tXaXzDze2G8",
  "key12": "i3fbZXJsZoL6r4LoeEF9zB99VJqrGXNxptt7Gkxz2tsxbsRr7SVHEcV6iBW2zoJNe7S4Xbc5j4X4MrXbq6eJxa4",
  "key13": "3uSVg7VWkRMQ1kMcnAQjsBRQDRK75gWHyLqZ2KqZDxkNbVwzA2tNaAfAbF6pBMscJLKPmZsKCUY14mKZrASBHqDh",
  "key14": "4EuoJYdsubrtYRDk9gXoR23XoNPe3AFBQMbDF1odTB5Kw8vKmRJG4uv2ZZJZTQkcEtmGysaN17mR2AZGevSUpW6U",
  "key15": "2GdvpUYxNx1pYUqTR5dGK6YFgtUMgXBNcc7WPw4v6qaTviwjCVwY7XvsweTY3Jc8b7cqSDRTEgm37TYMPep8SgHS",
  "key16": "53igKMEXJCB6dZUKb6aYLGbjjGBqhVR18TCYr4wRd4kZrzNnxRyHova27wZoBBQMHV1eDezMsGiomE86UCW3ksHx",
  "key17": "5psJEsdzMwmrphRFysMhMAYDXzff5bHA9BKEEyTJZvhRCA2M8PofotM444KfmSrjq6QR3HWtP5GXJDHCUCvCf9Yk",
  "key18": "5A3Cy2NL81rGiDFXfpvfRaWY9dQDGALtVpZzCTEtEeYjhErECWmZBFbw9TB8gwUewtk3xsX9RTQofKGhr77hfb7F",
  "key19": "29K68qvzuH3H2dhsfvR6T5zrEFxBym8XS1GoguzXZQ7P8uCFRxzcyxBa3UYPnzZRBTFdH9wkzbZKtK5DBtBmGL4u",
  "key20": "5X9LXPyyfwnf1UxeTRYCNVJ5wFMUbBeUZTMa9ngeb5vBuY8CBz7PVgs1x7ozgC9mM3agN7tVu6tXzZ9bMMCi9rzQ",
  "key21": "KYgESMBJbJpC4AJd5FjPSvyynAdyeXWfu8Z2JJapGrFigzjXKZPRc3EHnAVybafhbfftyZtLiTqC9bDsnDrzLvh",
  "key22": "3j7rC7WRRwtYY8pSWtTrenLupmgGaNJaRuzK9DMSv6TeRUuZwVcf5A8BidPHGYjvRCpY9azreaDMej6tRaw4zivh",
  "key23": "3A2o2xavR7tPHA5tkqmhiyCaMmTEPdCTkDFXfANC51x26NFuTyrVfundj7S1gFdUqN5uWmJ1w7mkDkGqgz1x7nJw",
  "key24": "3ZmYWiMHZpakjzoHBNsLZmSRPmY9WnjgqBfEuLzzskxcBU64goqEtD12qEAphH6j2PGQ57rKzLfJDEupcFhrYUQp",
  "key25": "5Ea5ricYt6pZDuFrtiYdak3sQPkZZzhNdGC24GpByvbjteqTNVKejxJfGuUKKhUakGXHVe8DZ9xjks83LKcscEM3",
  "key26": "3tFDpoYxJd4jomkB5aePz8NNFVi6aLUb5NL29xrLssbnDftHz8ybfWGPnHeES8dzrmPRnSbiNSbaRcenyCEq54te",
  "key27": "NUTdzJSeF8fVtkE2PUAaxgp7rrtoRK8yUyiD6dLK2eDYeUSkLLkgzFUEaHeoRQotc87PrnzuoknDf1VBXnMgUhZ",
  "key28": "5nVZzsTAzz8LJHR8pqscPmjaPtj73CzEVYLyRP6GG5xcshDXU1qyQxKK6KcHJjZoDBpJwqGvVdpzYjRcRSaURVXo",
  "key29": "41MZYnSxAmG27psrEmp1nU9cBm39BtA89i7Zr67V86QTbGaFAbBXTWJeSd1LQVGYvkkaRy5DfszqoibZoEw9Sp44",
  "key30": "5p4jELLA1XM5jkSjP4z8BkS61B1rGjtQW7fn7ePVNyL4krEJQGowig7U1sA9B17Agp4BUpyLfrfsowBLSDafJ6tH",
  "key31": "2eAEcS6q34F8667a6QTehX5uLenZPZL4jZrZo9V9bN43L58Kpzn154f1ZisB8DzE38vonzmnUyo7775aiTREgFoz",
  "key32": "24waZWFvf5SknRBy52eTKRZCunuwBM8P8HcQ85PcWarLBdhEZEBu7LQkfLGuVfQuiWHZowE3WGGZg2LFBjwm1uuK",
  "key33": "2q2JoeuLBvaWEt3CRuacb9Pu64EMo1t7PNH8sCUFBv8ybFjdwewARtQpLp1uD7oipu8gB4rqKMNHoo8EGc9if6iE",
  "key34": "eQ6ooNP1X64mrzsMhtdfhd1rdv68oEXvwENQLMEKAGkpe4DNNVEzrVWpoPc6bU81PNCe8ChkcydZaBAZBGvfM9r",
  "key35": "55hzfRRCp62YGBTi5hpjbWdWNEGCmUGXr6ovE2ofaVnJFaTHf44dRfqK4y2EnbKSksZjRdnNwC13udKuvH9MZqUN",
  "key36": "4o9hgBPg6CXZsNUnSwLkZQX8iN1UDfVjQJrXhUk9X1kZjxMSKnzt9723PUNZMrq2ZP5DME7rLAXsXuFXFGJuv5pS",
  "key37": "2TMg69k1xFhcLhWd7uVtj2xPX9nGfyXVv8qvtZndmsCYCX3bhP5gLGha3yfb6MJcFBXyBZagn6fcydSFHcDUD72u"
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
