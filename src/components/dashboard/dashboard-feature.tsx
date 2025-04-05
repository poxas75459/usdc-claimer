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
    "5Y3TJa44mSr5P8WZZTZPjBERFYDX88SpqSYvvjbjAacPgadrjVd5AqYaqVfQS5w7tZdpAvDU7VnFhvZHs83Bmoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5UfPiwxJSGa2JnAhm6aqyzrXV7mSJ3Vn7ikCnowdCmgMdacbSGyt91wErz6GNFgH8wU3rfMSoQbSTuWUVUY8g3",
  "key1": "2vPXMcz5mkfzaADUXWL9cmScqQn5BJWXq9HaubetBVwn2miEwa9AhCwtEJuhWiqeyuj9Y4ueQBH4omse9eVz3eH8",
  "key2": "4NK889nPZxRJsogXSoac2bKEuMR2UUFAwD6jvzKE3VgUftLxrSjhUsVQycc7Kgcx9pQeCoqX6pXU227UHBaMT6LR",
  "key3": "338GFRw6TMaNT4DQooCMxWXtQivRKahZHRzhFcFYgeDBWLiz2T11Co73pVygf9kdTtCQTLa2kNDWeXCJ71cF3KW6",
  "key4": "3AYY6vtCoqGdAXt1VnXBZQ2cHWFdwtrYYcLGtaHEG4yhbZ3T1SMPFHnJAbdPQ7zGs2a46TP4mJLMBrAwhhok8h8j",
  "key5": "3QrdKu9WbPijTPGpFJrir1p5UYMBm7cU7sUDdshRzgxKgkt6hnAhYp9sie8grHovgWKSsfQZbw4tfUY4ZEWkG4BC",
  "key6": "D5vka7BTb6XVTGsV2xBMoEjrdrjKWJheVq7YZ7eARRCnNYYST5MaJBKU2es7PpAghzp39siKm9dWQ4EWdEx9Kux",
  "key7": "4CB6PZiao5pJHaC11Me9B48tgYv1EWqHB77c4z14Sy6Y4AoHCKzqbLBbWR4GSAZgH4wB9kvUWbf94TaT4WcQid5s",
  "key8": "wPEMY4NB48bAbrcpvymbB1aZhb4ysAsxU6N9voQ1pf8KM1PSJKCof68zvYCN9NtZn2UhUq8MGpS1wcRKExLdwnK",
  "key9": "2qoPAZZWnkbMb4Cyc9WbHc7z4Pc8bRSfD5M2Bob4pURiFKZB6hLvZbjWyaBtZiBEqgodKcJNkYuaJxevsprtu6B6",
  "key10": "5osbX83mpW2Yek4Mv2axPcQdqkVhV2Lsahum5cBMu3c6kRcmwepWenQAwAsZcppd1T922Vts46LuFbnxhj1J6EuL",
  "key11": "42MLcXpvjg7AkBeGf7jdq42b2dvvH2HrTGQ52WpS9R12TaB4oGndMTqZyDuR7QEAD97RvzyZPGj39PG5YVN8RSq5",
  "key12": "4spS7sv9ZcP4G2ND4K69Pyd8BZ92j9PaUFgMNtPjNgSW288rskrAKkfswjx2q6Ah653ycbwGaHKdWcHznHnk6vLy",
  "key13": "3z5nRFF6ThMqdiAD8mUgHC6PBN4bv31wePccqfnchMysYvMtxgiTBhqomSkHnrUQs4MtGjWG2KrmaRpcaYiuq665",
  "key14": "2vyZmMui82sue7SCATGH838WjJALZmFQewQAgkDYu4PddaiwxTRVbMn6ETZsfqoBTuUhQ29hCAG9XXTkAjszPjd7",
  "key15": "3kS1r7GvJ2U1GJvCDghrX9GWfVKRwE9iyHYzFCpnvg9tdLGcf9KqVGx5nTeNAocQwGqqABSfh9Lf3iGSqVmaUhX7",
  "key16": "2AkgPRZHoMPPkQ4igKTbMWJiXiJLkAyLu83jjKa3SQp81KLheUguRCXVQ7q2imdG95FUYmmuz4GjRELRJa284FHS",
  "key17": "3f74TQUD1pQSrAPRUDAU5HLiiybeAoC5xz1QwzAiz6y97HvG2VK4W3FiXDLJxBjBwRSSA9xEGjttfLcTWU3kQTXL",
  "key18": "5T822JUXvR6NmySLyzckridchKnd6nrvqZCKNa89GRqaax2sC9356VPZwzxo1mAgC5HCGoJPyX9hatySThw7svxF",
  "key19": "rSBHoCLuSbpk79fULavDY7VfQpFRt1Zh62SM68bno1VDPVUa4u5CEJiBmLiip6TcaXaLudEer4ZgdkR4e64Ct5G",
  "key20": "rvse1CtHCz5EfmnCt5J5bn1nwob8JNgDgmSK6ybHBD5HrVhtkXxGoA3sSPLihtqSszJ2tQW3PR7FPzXj4CQzezm",
  "key21": "2e1yi8fsbirREuEWVrHFhc9YuLNokQ2N7m27qXh1at2WfFvLbrkSG7MvMFq4tCdc9k4BihQodeQNTab6e1HLj3nE",
  "key22": "9t59NLyMixfCvyebyUPjVh2L4nBLR9VKEPjGKSVhACXqd3C1EhZUbaru6bZaUERXh5RfdJxdT1WKicTdA1p6kHo",
  "key23": "5wra6H4rAy5snAHXgLyFBqj35vXWHLaxcdi3gwwVQBbLyW5tB6dAxR4r8JL2mvb1eLqMarxv7aGfRHGKyuCogMsF",
  "key24": "3ZbippHBo4CLoqDV7GG2PrutiCu6Lc5tSa7XabQedhmFad1vwMvWeWnAg9HCYod62vhuoPyDeZ8GYrrYgaag4Y6",
  "key25": "52676L1iJjutHSfkVS128F7oypGirTSr14Nw3sQtUJSY77LjCiWYx4WJNNsAAJ4JxXp6qz574LqH38yhKMmbohzs",
  "key26": "28CWRLfqXMCzbNtGbSpoyspM8g9Ws52Tiq8ANZ2gmkTYDDEeWqEYu2pvSUADSbjteBbHTotHpjk91UdNKRv8sjQv",
  "key27": "4k5F3RgBxQFSN8skPjwZeJ6GJWuj4cSgQ5A7cEeSuJUFpwi9sHwD1EjsKqpbaDpoCPtd747yqgWyAd974RNCaGiy",
  "key28": "5U3mVmpNQgKkJu2qRtDngupMotb8DjWweF9uZQHBpAMRV76Kf3P1yzVDZAPhoE1b5A4RgM1BCeDoFbArzCkD3HhG",
  "key29": "4928cuFDzXS2E2TYVnwj2mFKRVXcdMGmiLLPEiFMMyFRs3kB2kuHuJMfUnLtVxNydSvAaBSmsz8QVoatKdgGHwxB",
  "key30": "5k4SqHXWNBj7yGbVBqfhQbUeWwSCgJJMAnsr7EFekDAkc2HQq4zw1FgyApSo9QPBBvjSJNpeBvaSqCEwR7puHF5W",
  "key31": "2ob4oSbVYwEbAFKd2k2SApzCSucjDbWeZZTHjeHeReqvMzcA83tTDQzHdUVvkwcScfuZBbXbso5MnYWfaZRNWonP",
  "key32": "4mfC4iuSHEQnt227g5ePqS4uV2H9G9oMd4z7GrzsEtnWouP5AemhGL3TGFGLRPRZ4UvMVZ9QZy6MwqCUteGoFVnm",
  "key33": "2HCFeH61HKkvQWVMXjaU4odh8Foru8VU9xMr8YKPqXKaiH9ADMHUjDtonb1TbL5YjT2g8Cvo7n2NsKJsfwoXXMD8",
  "key34": "4FGdmCgfFCUfVgTdZRkBwHhdwC4AbkkWpitgm2v4jmQpvocbknynPjrmCBKxVoDwogmg7Ei2Rd78RJh8fETMRQTZ",
  "key35": "66gymnoZqE7ccU7ak6MvvbYB1nBk1XZ1ewRpBjwrQpbcvLwzUHDA7dMKLiySS1AvkSgy2Sk7Z4ZREvcwVsRXAqJu"
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
