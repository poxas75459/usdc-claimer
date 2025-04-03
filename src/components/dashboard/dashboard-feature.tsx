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
    "5bVsQX6PEMQ9S1oK9F22mLVNMi2pe438sdQHRg212u6HFNxqJyFjmZEotYG2AMJycG1WEvi98UVxyqJgDvF6NXCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vW2YdRXVochYHZKYWNxcqQRrUjpkHGuiBiAmcXB9dZo1iT6nE8BiDshfkAw8BYfPj78Kpi4HuWGbiVUzjqe9yLg",
  "key1": "4xLT5CYHS8hZgsK4c1G3jm4jtDFq1XKZ5L5pVCTvHi9qcGUbYPJ5KvmPaau4ZZE6kdCaUD6NVzbbSgbuL1Uh3v8U",
  "key2": "2jTLn8th5caEj1A6scn7J5xwjwcjDhPVGaGxzmQZNHTyhF8pjASqHxGE2BjHd8ac36Hxbqwkfefc16pjw47QUai1",
  "key3": "377XuJEKM2omsJEPZbM3rpitzod912MQyM1gAVMVsgDVGQLb5LbAEUq1UtEaJk719MtRthMcUH69U3eoS5XGoHuG",
  "key4": "4cnBBNqzPyVj1GRF52nwKQw3cYLnppica5cE6b1wnKnWEPZvU5a2iRUMBvkYc8vUeCzWvGjPWhHgjXHhKgfroEXZ",
  "key5": "WsdMCiFfZq33NFd7STec8gX5V79oCk4cn5EySpxUkohBoMxHYsMvvrDCtwVZYaHvy85Grm1TMojfww9dupp6ueM",
  "key6": "54zQsUYiBxeWAW3oj18MvaWJbC3tiBsvkF6piR24pjw5tyCGJ4i1iFGaEwX3QjfmEmuaW2q7PqjNnNG5F5Cy52hc",
  "key7": "4dhx63a62eynp2fk5dQCxyWq3TbU5xi86ip9MBm6AtmJUJUxCvJAW74ZR7sRmhXobyT5WBGuDKo3Sezq1udpEAwM",
  "key8": "ZWxpVkruaz5J6iNigiu4iECe8MuN6P6owVQbx4igDzPpw7zdk8ZYZouV7pSBWmsEn5ZrcdmfZGWvBGUWM5TooWr",
  "key9": "4F9e6XMhCwUvMSwMjpwgR7DAzUPg91YVi5QtSUhKQZFvy1sZmubsy1zJfq3W93BFdH2Wcqd5VUMqWQQxtWNTnmav",
  "key10": "4qE9mEpiWVjj8uAuHfBHds2NKGU5s8KEY5raFAugb5zDNDa6QELs5FkFQ3gcXj6e7kfkuxE41YL4riPXCqips26R",
  "key11": "3t4ZgwdYHLbzUznnFZd9c2jEx68iJmaJeGa4GbXuHN2CcfWjt3kQ7W9pUWp5fDnU1eUisoVafQK1LsJWZpUyyWz3",
  "key12": "5T3xJvcDsZtZnmn5TWEAsEL8R6Kn9ajx2DoBjh3h4VHKeQe4RjYVv3HV2mTGQJX1wuvj2E3Pf5NhpEnBdhBA6uYB",
  "key13": "2csPEYDSfErsccaQxnX69efY43L2YsZn2t2DhmZ24qvADKrb3egmE2hc1SxCprfFvqxwdenHmpmuBXYYKa8r63Zm",
  "key14": "oE84R9HJvqwkfeaXLtTamm9pyH9vnGG31FaVSad8J5JA5GrwNHpiCjKCms6bdDBkV75FkwnRDtn7xNfcL7zgPgk",
  "key15": "3uVaZuQKPoWfcC1P3S9Wz48QK2G57LCJHjBY7u1Uyep88MYT1JEy1e3ryQbrm6kbtzF7JWzszMNWBnr75NqVzFEv",
  "key16": "gJVKZgjY9UUbimM135q6mZDSE5KnyrCKLa95KArDx183ws5RUcG2ZVhDJm2CPyroG8338DCxbV1CV2Xsiqz5S9o",
  "key17": "4guQHiprBtjwrc4f4inUfiM9qu8f5vQ1LntCiNLEMMBQhRAaSeSEjp1Jr1xtavJupTEmANQLAARve7an1anDGTbw",
  "key18": "Zy9RvjsLsjRAbKd2UgFoRxTFRBrtpPraJqn4mcX9JnPzTLvch4SeYQeKcUQe9gTuDFvD1MDVsbCpY2xyJbWvq41",
  "key19": "4usfVUzGteCRDEj4Het5BgSXrfBvTMUBvijja2CJyZGLpsDCWVVenkoEt1oanuxfVukHR9LBHzxM8iGWosKnqqgL",
  "key20": "3EgFqHNwaqx5evEkVJHMhZgQApKj8MJovTfoq66EdaWr2oFap5MDDRN9Ba2zN4mSTtDeicFG1w77PCEohpHYwkoh",
  "key21": "3jSyoFeoTfsfjTqFyiKMvEkibuEb69UeXgNLi8evABoBRD41qhRUTmbudxruUUaKf2Lmqm2ERHu1Yea6GWpxs2PQ",
  "key22": "3x9JxMGH12WT6qyiD1m5dnFDag1U81tojq3PV5AaMP9nQgUVVwBAa6gKonGa2eH9J1T1GxUkX41xbv4xARs2xCWB",
  "key23": "k5Y4R9bmnhQi9Wr1QKcddhiiYi71jA2MgpMV3dFUbnyKVVJeRWJSnoogSEWbZqHn82b5X9jcCczQMxs16t55dqM",
  "key24": "2TD4bxxpitCvTHnggn5nSoCGF2VwDCPM4dXU7VMb88qvSJ5TLSmPqDJiZm1gKfpBDeQkwUQQ4iJcYu5tPftKUU3t",
  "key25": "5Wx8osTxgnu2RjbtU7CAtmSkobZe5VHmc96mG3yPAazn9MMAJiJNQtZNpmG7t3AnA8SkA6mNQ6EYaaYgkhE1pDuc",
  "key26": "2D8bw4m2jLBH4eUN3Jo9CxAJ51vkVnnVNrW4ph1bUrqLLY2zSEkVMxhCJcuZxkQCyqexfuV68CquhbABbTnLCJLi",
  "key27": "qDixkxU57xdwD8nFohmKpCKHWXH9zycZcX8XVXW2RwpoVmBxKcDCwgGTBtFDx9fbd32WGmM6Cvj5aRVCUN35RF8",
  "key28": "5hEyWWL6HupivzUjwVUaNWwrg2V35SedkgbMxtWqe4DxhpiCwJKT5rRksYvNvWYUiL5wLrfFKVKu2qCrdzkwQiu",
  "key29": "9d45DUsiHNX3G6PQPaCrp11uEMKao5Wwyq5xr166q8iMAaQNoBJdsZZoa5QZbBayMssDtsitjJvShfTKDZAJz1e",
  "key30": "3VnjWC1tD4GLR2VoZR7w6qxpkBPjUZhuhB5m61pa8fD6tLjehAGmGqjHyUoGUAeuA5XTi3YenDeYaMLZm5c7oz41",
  "key31": "5UT8Mdb5pgvJrXSGBeJ4DEZkU1dAvUirM1dQJNQoZSt2QCb5W6Tiw8cWndBaUJRnjqPkHeqeUZqaa4WdXKg9PkGz",
  "key32": "519D8EKMWdrSFMrzdY8jjry3YuNutVAsQWRdSUQtzrHnKquRkdHq8NSqehHKaqmAWjBeNWfHJrNPnjvYaYcRkzdL",
  "key33": "3Psj3fc6imTtkUUbEA3GKT47ZXF1124CBKTg1aiBuF9Te5e1ztbX8TnaXp5i3UYeZF28v1t8FxaMPry7vypWJJgz",
  "key34": "4CVryPBHwP9JN7So999iieenvvzkknqLQYLH4CPgJdbrz6MY5QMYNjrh4AgXw5qxoFxiPhpD8azVBHccybqScaXn",
  "key35": "63MCRDGEaWRiXCt39eubLY5sSScMtfRFve6s1Goj1msCPxXjNNnAq1mKcMLxHKLzZZFJhxw1wVW2CT7Bmoq7Wkw2",
  "key36": "4iQxX8sMsRAc1aUBYtX1PUinQdysKmfSa5jRKS9ZDhG8b4tDwtKpo836U9GZ2DNEijRmGzEN19uGJdCC6cDonLc7",
  "key37": "HKn7h9Hv6GRPPiBahwhzQkZFfdW4QHkBMHaRESnmWf47eYnSngyyxcxAxmGHAwubQJahjVSiAVDo3rnRstXizQz",
  "key38": "5FnriMxomzq81AYRe36KPkeovptzDiDys487kZSpbfsUG94fFFg9FbwdPY3UEi161mcV9AMHWSbCU6mS7bvoPXvb",
  "key39": "j2wVB98TXizxz27JTHapU5WCd5XdMt81PzLH51jMsS5w8yLjJznoSotG9LoicqG8yrLtX7fdiDX1pY456S8mGSB",
  "key40": "2yejZykecQMJwgb3pLLnVyvSRUXMwpc7KuS2qHir2Wrx6AHVTgaiJWxPqdpeoP5PA18geMBdXi8tZzAoxMHVSJND",
  "key41": "5icwnVfyX5Q63SKGV5PkAkQcq5NBEYtnWRHe9uq8ERUzny1HCtu81GhKntBKpE2KPJj8dQEmJsxvZpqhWLMHPdEE",
  "key42": "5kead7Vbrg4hKpvsFhciUuCdmuBvEMVb8hct2ynZSjGcKkdpXCZw9fRwn7Gu8m8uuAW9WbQiD7NzpsWEoGKdJxiu",
  "key43": "4NAbRiCGY6y8nZgzxCHBpQiHzGkZgb1wkbPdD9JEJNrzhbjKVb1TZMCYunWyQitSDMUFHcpjdsBV55BHkFzeCuRC",
  "key44": "2FqiwbCfrGDqmGwKQYsrKM95ZobpS1mveG5zt2jhwFnpWfHHWkFT68PdiP1oc3K7SCLWvzp7nkZ1vhRpqfQQ1y1a",
  "key45": "5hi1sdU3c4XkPSCW2Xax4D5PkxaXJ4REKaCvqWP2oVri8XVTnqpDkrPuMhsWxndAj5h9DntFgVrUTCpLZkvMBYXD",
  "key46": "471AbETUJqeDLWwHHmPYNeDbZ3PkMyxbRibFrnHd3u7SQH67ZXyTAbEbHAnXXxpvrbYPKCfMhosYkcJoKPFtVqBm"
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
