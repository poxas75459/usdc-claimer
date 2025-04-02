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
    "5QvNwPr4igvJTjTBPASrK41gYobfUCcPvaEf3dPSMuZYdEbaQabBanoeyAm3P1UBzzApw7LbkEjxfa9nuDNmEvgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WiX47DM4wmhvEGjKPBi5AP4RoYrGhMUGVfksnxshsGYTPo49biP2H4ZPrbr1bxqr8CzdALh7egbuMxtmvJqpRwS",
  "key1": "4TSGJXr8dgQhdoQzjLFDMCMBeAqg85GypDFPM5RXvcxEvJkxGnRUWnncrrNPe98fDhrwg3K9ot99f6jaaTAyuQSp",
  "key2": "5mv5MbHLxp5pAe8Qin1MV5LkBprHf7SJpSJuxswTfBkyxNcWH16M7wbqdc6id4rwkPmoWh93faqkbxex3xjivQqf",
  "key3": "RTbXfcQ7SMiEWpCQSPxWug7tf3iyWBvymsnLQpMSnepnu4kF4RfqN2bBcz1cnDvZDPEEWWJ2BfNTjtXbmGqEVnh",
  "key4": "2LdSi7AYa7YG3tDutfhqRVMeZ9o6TCKHonCnyBCpgmyLTFZx3ArHqWNL2xWthZQQBUjZtnBR8PNboNCYANG1FdvB",
  "key5": "4KYZXgmytEUgFs3iX4WnCxpX6f4oLDKkzGya2d8Cq69cdw47HzsYFBJne81EUB7A5eLr4REJ1RqkdVVJhS5Mogts",
  "key6": "47TqLnK1d72Pb2o9okbgbfg8n1k8ZCU9sED9Zb3UREq5UBBv1Um265ELJnApZYAcpimo5LU94QehVXMLU3o2VoFf",
  "key7": "4ahTDPC49dAE2yuTQ8zNqiWMQDNTAsZXSDUNtGGXZamJ25ko8Pda2T9atxaFrUR9MsLEAcjLT5huEhzYPvjvoPe1",
  "key8": "5DaRSnb6pZeWBfKK2QDSMWmmZvBFP2nz3fYZJhR3qzfJgRkRjQbXfq8Pe92Qe3BgNujTEfxG7kENYYQ5WG4BApT2",
  "key9": "4FQpSfLjNvpFf12dfE6YnBSLYhUycfZ2QA7AP4kHyzVJu2pT5R4krWX3mHUVHpMsKDskZu6kZvNF2xBHkD38NKtt",
  "key10": "zb5GLihj4DV7N6xoBwrZ33iwEfrBS8SVQaEB1k5cuJrKV7tEkadTzAVzhT5uGH6Y66uov2x38qxV8WXJgLZB7MJ",
  "key11": "28qBZQmQnE2UTqChbkzCAZqnyM7bMFZrnJvjQaCtgr1oLXUjKmwSBaK8dmmsdAREgEPtZDzjwVLWbrJCUJ83SEZX",
  "key12": "3ZoQGhWanco8hjuNsyCkwWxHwUj6RTxUC2mHLXutfDapqX19LVcJoDXt32adcdTXAWvEDP7buTEFf3HR5yqk72Sc",
  "key13": "4WJDNVamFZUD3qoUapFrVwtX6vTpdpR21w6iHMq6ZbHEL8oUAXqoRC9jj3P8GFdzTwUo8jR92Rs9h3gFwSYFk9xE",
  "key14": "oueX6J5a8kEDU7nezjpof4ETtLLY3ihLvM7N3WUYN5XcKAr9xzHRonW6H6PXxzU61H4eHKphPTaBSLQJ5FSLcVS",
  "key15": "5i8Q5HfL5Mk1kDCjKtz1rDR9tdFNWe8YnovPq7kuoNvsXD481cxUz2pVEfoj45o9APrszYZKFhf3TmqA22jgU1q9",
  "key16": "3n2qb1CSR91SkzMu4tJz7sijwRt5LV3jgcTYK6Sx5ram63Q7F9W59r2hGZE1iB6yjPQT1bTvydqCitjrS1sK8AE4",
  "key17": "3oXqC52ErJTEtUQEzYjnU3GobKppNwCXLKWYzqfXVoBApQPvT8pxJKy8YYVYXwvYjwW4vjmdzo5i59NVN6SDGmWx",
  "key18": "2gpVRf3twV3xycEKHU26G3YzV4pjdsrD2ejtmXVXDSseF3jzYmYLrRjFV9Z8MFktLzVJKdjtBmSV3Pm53C8k442Q",
  "key19": "47dt6uHEArZDGBeS1783CQghTqvj62VVVBXZ9sCYqn9La9saXrCGxQksaMRKuELbdh2npUHKR9xt1zJeU9DSZB5P",
  "key20": "2Ps4mwidw6AMVyu7rSzvzgZTb2rMaaKQxgvYjmLhMUWg3ZFfehkF4Sv6REGYe54PkQfy7YbF2EZD4suM4rpQ4F4h",
  "key21": "4mm7iE1QZqxJHRSSu3G4CgkXQNDE1rgFbjZxL9N2MGFvFoWHz836rFVS2pgN3vffWejWTiWD8zfZdSadWbo7PSk9",
  "key22": "3MNkMVRVRQht6QgNDAnu99DURC9AVZXtLs35rXAxMLDfwzpzVcs18C14G9GQfhUqQ1oPHSLaNJtFRRzUSW495vZv",
  "key23": "55Wt49Rpv5np2zhBSdK8k4Nm6HiuufdNX78BvbdtBZbaa478PWBmjXe6fGxJ6FKfnVyxmaVvhaf9UGqiuCw798V3",
  "key24": "5whuSpHSdSopxqjyShvvjhnYHPEQC2a5NL8ckPg7kkfhQdFoGK5Ws5UUtk52ScHvimuWSdniVDgWKwdFigJsFpTo",
  "key25": "4gccTMTGjs3zpN7yeqibKPfnKmF2FZDUtQ7Z9J5Kp94yq2xQu82YCjnq8HX4U812aoCK7cX6gH2WwdEHJJAxhWzL",
  "key26": "5ks5t977MNNgfHdscp7DdReBJq6MCgK2ZNtY3MLiayY8nXC3R4HFNYYFbwQoNjZDig9juJeCG9Q1oQbC5qee72qP",
  "key27": "5XfGvLhkjxbQD8uNdGsKs2c9A5qemdqeJky4BM4vUijRtfMeahjASkQyQMGcG5V75HEcHPv8J6GABzoL4baAGcx3",
  "key28": "4TnkPAq1gfrdWsM5xsoJgV6Men1hjNNwLa7ChfZQBvEvES5mdCbbeRDFerCs5TJSzHxRrotUNaBw27vaJkdyKTRC",
  "key29": "5iDQYRxGkMVbUHHQ2J2i1ZXg5bQHVAsF8ksAs3g7sge2NGKs8EAo8XZMAty4w78x3yVxcstff9ZF89RgoPSpXUok",
  "key30": "5W8QZJCBFDtpSAxZyUZzssZ4T6MXYUNNkb82kY3XuzcBhd2keWtffKGvWRpo8H43FYcJ2jnPc6ot1Wi7q8hmdAeR",
  "key31": "3B1dK1zR8gTiBEyNKkSzURuu3n8STGxffRQCAngFZT9KPmFfLdtkYB5NRmpoD6SS5WgCxnovFxL7JihSe8wurZb7",
  "key32": "5HCcfuyEbRByHL7Ld8TUpaEHxmZGtzZrnSvUYsW3mkGK23CLnG6BB88NDgoUBiwgnaJKkc1pMiKRdF24sc9pH3pF",
  "key33": "5n5MJBQKa1aWfQtqc5YCF64tFUFNnsL9UsNQSwvb98zzi2y9jf7piuADwDeZDvhfe4SLYnCi6j58x4szVukDJMCG",
  "key34": "5j16qqCZNdyrpJRXPb3b6tPVhNoi8JA7PRfzHZwFQdjoFoY33ULzKo56nDRemEvYLWJYYwUpcr7XDpStVSLM7Qh8",
  "key35": "2dw9fFCXLAd4CY1MbW2iTvP4Jmfwn63bJbtwPCTvBWGAUroMF6R6CFyQBUL1QAUJEmsmvuATni9tuDNpthJfb2um",
  "key36": "dWN97E45ioAP5z2nrNoqLYWfJbsKQKyiQPLYkjxVkZNm488nizwwzbYXdHjFPR68rUKKyDjiMCKrFhdux3pUWhz",
  "key37": "4pnLndmNNacJqsPwjYk6XwBDuKkBBfarJi8V1vqdf6bfCfLTc38UTPGGAhxt24i75Av7KHpxHYhtagbAbCAtwwSJ",
  "key38": "dvpJ6UXbJQ1eXmgjwwF1A3P3RAyyFmxSho5g3Qw1DBUKWYQLVjFf7ieFACGnVRfTN138QNsQR7J5F95it9EzcEz",
  "key39": "4zLiLHciXsHi4xy9skiac9Nz2DP4FzMHLH4G1RwGWYWsPzrsjownhNTk9dQvuARp979Qr8ErmFBkXdhE28hZQmbr",
  "key40": "1Xxi8b7bY5rfgt2E24dYMGRQXT3SEhRG9xsCRQajHwE79gogB8UUwbaoxL7RBJ8gzcjZnkZEzUGXu2AvUDePENM",
  "key41": "42N8LptZThSivTJz86HQkgabJGV6kJY9R1RwHFv5SFKgQZBaZShwBecRbYMuG4UqwxC5Cg2zBE3P8mXLQKNS4VZ9",
  "key42": "sisnP2LhGRmhhUtvRQpJJffVsjcBjRy7ELDo5HTnbni2Rco8AVbMPAKP6rxeVtoa9j1CHPU5zZhAvkAZmeLVKqK",
  "key43": "3np7HEopptxgnTbVE5pKqb9K5JStT7epHFZyangJ1ETM7FPu5Qf51Hz4Rvp6LC2fB3NwfmTWZwEEHAUoGhGQ2oig",
  "key44": "62sZLKVcxKBGcLF1tBwqGWVGdK7Ai3sh6bCirbBvqDc5gieNksozhGehisRXyQgnHzESTNkmGSyA9j1ui4kr1XJV",
  "key45": "5BwRF6KJszkbHGPo2AqVoab34CpQMyD1Mfowht7tGmecYdvHNrU21GowdovTivYjpxsEY8SdcTawzeGaFDf9qvCP",
  "key46": "2ybsjspVCmcYXZ4H9hwFHrVPwGYj2H1zr6kt9VQdjR3Ua85MG9fit35PjRk3H7XL1cUc56F3V5pM2z3egttfXZDG",
  "key47": "21jRMiv5Sgk5ATsTCmj1WEG1J57r4oH4rDenkskq9xD5rC5gLZ8wsTCjY8NRmVApRLbDpQoixqBxtpg1382SETi6",
  "key48": "6uBhFeUGSP2ShSqwPAqDmkFbie1RVGns9hREUhvYUgGv8Ra1NtoJgeyPwLgJCke5uXo7SMSQRedq6ohqJXyX9nm",
  "key49": "5EWe4TphWANN8KRhJNqS5U6Z6v4QHKLUxpBquRJ3LEqRe9K7xvzmvGyjYuDBqQQ4iwUzj1HHx7HeuaQfeTn8KGC9"
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
