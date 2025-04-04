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
    "2ua8S2SEEjXWgHLvLgDQFZ9c6eWFc9sAiTLzpv3LYAY9GjJyTjHLae4pQ74T2VFjp7ndUL4HgB1oakc1RmKXHq3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qj6wmwyW1CjCwcXybaT5fkgqFho7BCYMufegEdsk3herF4iPnNZ848cM2LjeH7AaSPg753CNgg6D8hmWava64dt",
  "key1": "4wdyheKp5uz5ZZCvCC1AhsyjC7GyYqy5MRebYmpcKszhS39QhBAV1Ruz1tSwji2RFi3si176j7dEcLHB9vwnikcF",
  "key2": "3ZJSzG3iVr3t1v7oYFVrfU9nDyKdFf1iZ29vKKr1WJydDUuV53V4bnmbPLYpjUAHQHuC7THs9KuvhqjKwkvBNJXH",
  "key3": "5gRb4eY9SnepTrj3KjkGvieZ52si7fxHfvdtFWJXPDnK76d7cSGVyNF2AzWGHWxiMRBsrvuCZ4Mnpuf58V4KTkFK",
  "key4": "3SvShqk8rVLDPGAnhApdgZHsDWZ2dv6GWDqp4KJ36wGmRjCGWwNTUC6HzN77w4VAYAefKmSpZTtNqxrmky17Neip",
  "key5": "2tMwysqaVGiZXeypvTKL5d2wkvLtLfoJXVpmb3zJSZmq19q2VRVyWYNv9KLBpMYnBn1VP3dpFoqLy5dnQzWjPWDc",
  "key6": "d7G9fPvWLefTaRFM5JLcyKyBkPjfmkT33RsbpAZasqB1z1FKcQb7ge1trWjc5Z3XxDeqzF5ib684E5Sv3trLNvH",
  "key7": "36CXirq5WTjA8uo3kPJStmFwFq1naX245H98DFniSm4nkygxsXVDo22d2VDy8TcwpEB5EwvJseFHPNtc3HVw14Gk",
  "key8": "3EEMtcSvPMTMDeeUQFuWTbMs1EtU5Cvf18HM8ib6EmCW6vkPy14LVA8bBE85eQrSK83cVgcVR674a4bnREHa2t4o",
  "key9": "4jQtw7qCUULhFBXLVixnaF7YQHH4txtWwBu7yL8tB3K8c7btCSWSn3wJ2hxTqxAZGvMSxSN8Tf2o3hmvCwnQAxN2",
  "key10": "2t5EgxHKxKHp9c7YoMjbZRGMxtBWp2pNCaXiBcKs2D5CeMW7RZuNafCaVY8s4mA7skxMm42UTT1hiPA9GxmYYm2C",
  "key11": "gLZRcK4GfQHd7NPuU7JuDpmBtruSCr5zgXpGmN9KJfWwxVux1UzKkK7AH2ze1VfmDKe2bYiprL9rbTacVaoTSaG",
  "key12": "3D8P3LLxAnTRFGfPShcXprPjLDiVfWSWxdRVDJfrvmZhgbeJjkCBaVJ26gsaPJUBCYfomw5bcKGJj52jqExfbAwH",
  "key13": "2cBzgLHcMA2ipFrANmM1U5XdpH1wLxDP3NBzVLL3J1JYGVnMsYrcog6B5v2CUuvEUHocVk7pNZJxrBHdPVq3H35M",
  "key14": "h2kLCYmooq5zQtJRn99WbzE3nVfpEauKniaf7nFLJFJN3npKLRxzR6c9azm1rfTBQLcumYW6WxLho1qKwznEmzo",
  "key15": "3WGf4Tzm7LTXQTKKJeqSzZLGVCAjJGAX8woyMHrwmmitNfc9wciFHZgiDR5nTgbPBE24TTwb8AeUjW8qDPf5z5ad",
  "key16": "XNhzDgupFcioA1PpDBcPeWjg2MYfMNygXQhmtPvCEhCBEQsvbzWkfGMwdGAD5qFV9iYGtWtoXWkHbNbhTmj5f5e",
  "key17": "247HTQDfxq4MHe4Nn2eAcDFRNmbnfHDyJU9R8TW4z1byeSwg17k3evd1qEbRjuGmoDGMHgUediJMEXfgGWYks6AK",
  "key18": "3uWiij8uYGU7kgU6NkCGQMpfkV5ByQD6pDzapF7tXB3jEnrNjMXUYc4i1zGrJPXeUuZt3i5WH7ifCR2fMuYehDAS",
  "key19": "itMkZTHBoi64bmHH5UvUd2smBPt9vJso844gfg4WQtKCDnJYNAXp5oMuifFKxPc41pURoP6httaJp85AWxKXEt1",
  "key20": "8jDuGJpLPPRe9FR2jkif95vAtHFnNki9X9JXRAwCKCWz43vQH8UKYUeFaxndDVpAAotMjDpv232So3FbEjySjrs",
  "key21": "5XUoTs6T2ZgcAnQpfNhfWfKjPs2FE9WQHsYdJM2yUrQCwgGYuhTxfupZdSCc5txpwCH3eudS8kPxhBkc1bgQ7CcT",
  "key22": "3JSEuwArpDCNCvaVL1rYQwM7Rfm5rKeMenbJxHXkKjAjFiTHEXXN4TDzqiuB4uMLyZqHpBNw2rMCNBmtjxeJ4zXT",
  "key23": "2Qf46she4ob1hmP8DLtyFy8B3oLyWyGkp6W8Djqf2Tw3a2VoCxTWZbxBbzLQJg1EQRHSZmf5djWC2edteu5URSn3",
  "key24": "4QFrgTPRKAzddpdMxeeyYftpW8jn8wU6UTd35jrsBcFNA2vXdsVtxanvtjWtU9X7hLi6f2vbKjyHsfhoBwmjXuaB",
  "key25": "4FY9wWxA3vBMc3keMujtGeXTP3Huh8Wxg7tFekgypj2yLKA1XdZLtSCb519k3VjVK3ksCZcV5ZKUtMoMCcWwNUAS",
  "key26": "39qFvPv6urAAB4Gq85ZkhdKJUQjH7ro6giZUNz8mR7jYerPtsPTTNuApfNmwBZoMmDZA4DgVzaKn11dFNBwvQuoL",
  "key27": "5FPvntKq9g7kWGsqN7DvdTXBmvjPQLiu4c8Re377EhoNxb8b8vDWMoiybv9KFHkWQ2TinpaftHR5173gzY3egdpr",
  "key28": "2g3bfAzenLooUnAJWy3Ef57vRk2qkLwX6BNLrMPD6c1bbAmikN2Sa7bDCgGAh538ucJMpYuE5wHyfFVTExVyxfkM",
  "key29": "5HNgS4EwgAKhFFMzaDnMLNczwhR7Rk334gVecNvqAsFhEz6kFkHVhEtskGNtJqNqsrNb7pMHK1pTnp3kqjcjNo2c",
  "key30": "hKGWw12S9ie2yGaVSVkH5XgKfqr5Xy8sGpaNTemwZDuUm9d4pSqY5S5vUbvNc7Ux17emuHJ3xiCWPd5W9K73nUf",
  "key31": "5MrAM83bbYcGchkBVfvL75F4A8GAimY7jJofSjYQsGyMUSAnAP9GcTA5kYVPYdBqdUGD4vcEjvVa8t5QtVSQsZE8",
  "key32": "2udiANkXKGxMn4SPhdvLDnuLPJJCmKoDQuX13ebZVFK6mKY1ussKDQc5K2thg1WtnMd2ghE9yHAAoK5DmtK9jqQd",
  "key33": "4HTZDv5gnc9HT5GDTB5F95bV62UaYDZTD5XMKfK6Zg3HjJzeD5vPXyLZ7ikG9Jc6wQhESewnYjZmScXpyMEyQUo5",
  "key34": "5js8nCvktCk6ruNjHdW9xrFCwCpYDhoU3P7wCNhGgef9gKhiTq5kRZDuCtpKZ88d7mRqH5jqEuLhuqWw1LthFFeA",
  "key35": "3gaMkQmH4SuTXMyELB1gxeUHaqg2uvA7P2gQwuPXMv1FuujTQYmhsbexVMJWYnMtLHxDiPDB4vvyfsLycPcx47T8",
  "key36": "2NPyTaps1ycWumtEgwRy729SFZ5Sc8T7etLVLCKxtVqbUB7zLsTakkYDj6hp6S2bTtBujvQwQyQJg5Ga5QEW6fhG",
  "key37": "f6QYxnZWXbDaUpUQqK6VMb8kaubNphKXorf5KzsHHFaMRXMRKqH9Q8Ah5aXkVkPjCQFQDMAZ4kVSwQmgrckGqD6",
  "key38": "5m4GdwegspM7KUv7MuFBqjCbbp3URLwaLNB5MS1SPQKMo7JoyJQiUVLi4wnJKXtBNo4gWe7KdGcqXo53oypQrNPZ",
  "key39": "2GuZkBfnBo31UfLajua3QSrMTL51kY2naf3ZamrogLfkFhzGpSCdEr9SBwCt7YMZfcVHiWyZULtMQj3pA3aEWesA",
  "key40": "2T4DbK2LqgJx4Bpwq5XoecfdhkSboppD1NRenTKdnSaF7SMpXbVptDHQCyZDvTRAgw1bGm6WSKspTBFK9v95ehFi",
  "key41": "48nEFXKvbHBBzSodGTbfmn4gq9NqWTBWV13b1rHrd4zXnp97F3Fv3qB2LAWmqz8s58DZVwsS3aHwGp91iHYQswZ1",
  "key42": "4NNyto4oNDTfppEGzj9JzSmDmxgNbWaTn3BHmRXfKSto5ocuhc5gXAADMdpridTH3AVNEv651CPoeas5VeScj1NR",
  "key43": "4h6rUUvKAeTKz9gWyH1cki2cjmhLd9juEtysX5zTDxWPb1zMGUzWmsjqgL7BpmLcmkbP2PgQahQHHdYyqbQNj7v2",
  "key44": "43qd9GAkoMfHokYBLpfLAUi8DUmL9NAJ6FigQcT9yqSZe1wT6Xs31GyBJQN6EZQKxiJ6jb7xx6WRoQCh8GWrD4SX",
  "key45": "65ddWcgncxbXLVNtS2D6A88ncZuNv5qbMPKisjiJNxjhTo9RoxQUEpFGUQtcZjArQGcGvHGoyKrZ7ihGBdckpH4h",
  "key46": "5v3NXsPkM2ABTD2H9yDEcEsjKaaQcnJwZHXfKzD15SsgBjFdBsugg6Dq72LA9Juafsxto5XG5VVBmwr21V55k2YD",
  "key47": "TkZbMSKWPgkiNHbFwKGbeLCpAFE9hTYdqhUYcrGHQLsKtjonbVpDewQsARgzL21TN8KmA1Y8AiFKvuRMvKunoA1"
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
