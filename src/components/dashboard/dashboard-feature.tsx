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
    "oQaJH5ZBbq6ZJFcdSLtpVkgmWFCMULnd46ZbT1iiD2AvcG5RDV86XERRM5hQfAHCU6BbP6C35Zv16UEgwQkuRzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ez8oYQJcbc14CVnkiPrqcHTZkovv3K8HRmycmsbuFCbArpyTRHnaThmeMVsGXVvPGuTnmQQyhHmcYbVJeReRcr",
  "key1": "4Yr1GDMrpPqj2xPU9dkqqfq7t4KK3HN3d5aF7RMDxG1LccdkbmaJqSpXuAD3ffqGp1PXTnCiu2U2haFHKwDJzeuv",
  "key2": "5fuhgt8gWai5Y5zrMfk385Xq5hVz8kN82wk5rerwQXdxX5Uu77wmk5Dd4AsBQw62g3vbgRqFXxzM1KykrU2VVFrP",
  "key3": "2qVqF4KeA3YmCXC7LVqvrAiZLxk11jAZakzZyhfm2qW77x1z1GywsxAbGDHXzKj379M4b4fxfaMmFgFZVu7mCcZk",
  "key4": "4cTcZGnHZzaGWTBJJqLUVKEUFg5ruU2ivtbjsitPY2frtpoChw1DNyG7kryfadNAzJToi8QWHC5WKwHsqDsZciUN",
  "key5": "4kuT6M6AbVWRPxyySemSG3zA2yLKnK8EsrUpnwqxHzX2ebqgz9VvLATduCJn7Ys3Be7RZj5yEGbx8NTcM1JFMTwv",
  "key6": "44ttHsPcMsUADJrJiZboXcEmmQdFS2iFe3dkHHpMkR3edAKs4oBe6xSiQ3nqZ87mzdpj9qKwP8vRbpNKGAu7SSiB",
  "key7": "5B6BFoWuHR3pL8qZK9uCUMBTvurp8ZmtvxjdwHC8H6Xc2uRPv3szgt2fpB9XiujG2QMqEHaPLqW95gJhZBPWMEFZ",
  "key8": "4u2yCUpmhmqBCtnKNqMM4zYQUgoqBtKSxGCRzjZKSQ8BWMFupbnT4jXxHy1XMUdu3PJJhqLPe5atXT9YkqBC7uhX",
  "key9": "3UHYosKDLaYfdUbHpXJSSqC678TkLtCYJxhBbAiAGFE6tLnJdJcKphbptZWzC4TYbGbTPPvPgDFfEAUi9TXvkFw8",
  "key10": "2nZkFDD7TcKy4dkMSB1yubc55frs6JFSCy8CmbdEvXPDzXZrT3xzfSxys6HYvuCyNhenTH97rsYxdik6G1hhTS8n",
  "key11": "4tNp1MJYWqUi2S9ZLTtpM4vxRSrdXEK97vKTjDdiLFwYD7gzgpHZRZ7rEZwt4ci5HF84nTknD79YZG3zbBT4HLEq",
  "key12": "4WaiP79TUSxS15HZZt2DjLkqTpnyXyLbVtq4zghMXoY3b1YJ9ooDAuwjntwKZREKhjQrpe8TckQHmSjmFbZcr9W6",
  "key13": "4Sio6v64KVKvQ9o9EF3iVgNDQJBdE6AonzRvMnCxHTRSH4XbjyQyzPi1wUS2u2An9QADsdiQmMMhCjVnfPK8DWSh",
  "key14": "4cXAPMu7ByL4bJ45AaNMR8GA2Z2hYJ28px9AkCKCDV6k8bSCo4rmgCejaTMH7FWbyyRvn5upXitBqSqBP2cComid",
  "key15": "3FMYomiUkDVfSCXNcm54Yqjgnz1UNve6o2uFQytK7CtDeTozdXoK5pdkZ7zS86GDixhgaKhMBtxbe3CYEM6kRXKr",
  "key16": "2ts8rsoJQ8rTvYWj3vsxDUfpr3RXsx1GqucthjVT61CsSj4io8wqdp6iUoZF78kSgo7W7G7gDLva23DFfnGHUkTi",
  "key17": "33LmGMsyYRTa7U8ogkeovvgFXcQvGuYawyeL3dqL5ceDQk7mqcEwHRWbFHETTtZfBVoYLEPULhTqtRcdTcJutkQw",
  "key18": "5bb3BnXq2nwhk9Y4pZ3kyhsWT6rurkh4NnBv8jmH7ECKt2aqdkuVN4my7gsxiXCmcZaDQnQ7fsPjXqKXiJZNih37",
  "key19": "5PwoMuZFEUBeyUyyzDFepjtpKqPcLdJJXEx8WE5hXv76nhD77jnw8Xg5BXZLfnPnxiPb5fy4emPuWUHQa5PUi1bz",
  "key20": "4XHYKBiKMm34xEeaBztYwYHnjsRjxrfxvjvcAN3aAtMGquExhFJTqxrB5U1qv2eTy6eXVJTb5fLjiQdAjC5rvA8e",
  "key21": "63ogGhKxJtEpJtpQoJ6rVdAQH9eQhQT7KdLbo3WCkbSTz3TY9Cq2Hxo2FAmnZN9CL7CZTypH9XehiX7NFaiBmitz",
  "key22": "5gx6iEXSiUs2RCx8nNhdxT41qSc6UXvWuCrkPqirzBweBGiVivw4aBoFCmu3qNnEomqH7SycQEPFRFFeYoVdvhDe",
  "key23": "63ygi4ZXYTmKNcGfqDBquncNh9y7sSw2w7b4BorSVHmUsywCSWQEhUtQuXuLP7dhDEfQEu3Tr6GYbBK5uyL9tZGL",
  "key24": "54gyd7iUjtduac7ASEfRPhEhiDheXd8vp9A7wJ6WCbDq6x8Kd1UtsUj1FELyxnRukcPnQBZMNQhn6hLddgxW5Mon",
  "key25": "cvEyPV3cy9FCA2X7Viezt5VwYXGWPVcviaZY3MpzutvRzrjdz1NhdM9DPHAaXVPee4hWxhQMSAqAhyEXcU3CeKn",
  "key26": "5YyJMZYHKEXt8MYYHybs49462J4mr9S5hhgB5dcURmiczEqgDZNhAJCUdyuAaMU4L3jibMf2h95ziZiT41wmbJGV",
  "key27": "4ZeDryCRsLE4xsMuAQTgYGrHHy4s7fRJP6yPdETvA6SffAR8hTphwDa2Bmb6iYNkWdQCLtmRdN65TFr8XL4QQcjp",
  "key28": "5vityhBVumx5mV2gT9ASdCNtaVdfhBBuTpt8Y9MeTQcBgXfVbFom7QGd2JdumfJhnjYUt7dyvVmpw2uQbUgRbQWB",
  "key29": "4Rys5JdHxmDxseofwNdePDoHitDSTS2QW9ux83FZwFZqkYuwHEJeFbVNh52twezhN6acMUF39inuj7JTWexDuHfw",
  "key30": "31XKPJfFVwMMEgACqdtSnLTkcUXA2B8PojxjyE7AVeMdMSyNnWaufpn17uQUv6CrqfqocYn8sggXGcj8F8gDyBPC",
  "key31": "4nraNkByZUWXRXfZ2hmeiw7vwkoLtXrRpywPYGTU9zHnw5HK26czjtZeRfLSatyZEbG5JL3mQZm6B1wm3mEU7ryf",
  "key32": "3ahEM2vG81RcRLNE5RfCmWJRrdpbe92r174Fri2JQGZLgMTD1avgvruaHx8jFVSkQs6wj6H61pVKSbm5qDXcBtSD",
  "key33": "3B5SMYR1d753FfkH1bLJVBsLs4trYDngfDDN8oa61rVjkbFLwk6TqESmxjRPgwDDjPKsTbXBawFi4RPLhNMfPHbp",
  "key34": "37BdwzJR8BpZ36CwcuxtJ2jgkRcT7o5DaNvhGc7LudnRWtEDY3UpMKemXuhdifXqNwtztqDJ1bF4kXy1xcmyCBmG",
  "key35": "GmVZeUVSRYCT3hPp5FoSGJwgA72szPYKty5QWuLE38SFkE41YXhRokNEJnr1GhxE3QG66JMGsPq4sLpNCNEUvej",
  "key36": "7LHv6Qxeq8nPepWmKVcJY8xKEK5LdBZyHkmnCka2rDWUP3TuFPbWjzGvKTFp6fYUYKi4VL3nLKoggXnvwhTXDcu",
  "key37": "2aKfussSUXiZC654Ls2Bkgmh7N55WU1QgpuGPb4b7Aej8KC8veLJA1PXBnzwgTZaE98RQUjcL5YzhvnHJKdf3uZi",
  "key38": "2Xj2QfUELKVdG11VfERsWePUJNbbJrbf7htUgCfA453SCguSKM9mMSjmpMKJjNsVnH3yRwwAU5AiiAaE2pfmHe8W",
  "key39": "5LL3svFCM8o8e3QBKds3zepapd7Z7j22mXE34xX4ffVqLCxJnJvLTuwuXBkGAdv4cWVB5cgFTwcBbRVzNdH6nZNW",
  "key40": "25btCax13zGiEaDUUB4kkAHHpVmDQ9dPWFUjZuRqtVFNZYPhaoMzyFrVXx7rLqxFw3ewFsC214TJWZ3Xwh5czbd7",
  "key41": "55nEdRsirtG2gZyTS3XKiHm7mTCaQGdMtSi7jfSSb24uuwDtnc6wkqKpDm8TnrqppVgyPSkfABMTXMAvaWkmnyA7"
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
