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
    "3xouiMsmbY7eSEPhLuNSFtqSzvWyFkCtkT33iddymhxWusTXSpY9GWehqtWXAgoVb6uRzvduiw3r38RVjDmmCCg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JwaRKWxE6VEaFpk11RaATcUY7tyLkegn2EZGjX6j3veDjB14A25f99VXKrukEooypd2Fhw6m8HhaHSEmWcTXwtC",
  "key1": "3rhbbLRh1SBoCPP44Ju5BDS2Bc2Lw69Wn9ZkHipZU1vUbzMf575y1EdyrR4m99xwhtd4D19rgabPqHMLkx2dv78r",
  "key2": "fd1r8BHNFqpzZ2BFhyvQMqYG46ojwP7Khp4xL9wt3dZgVR4to8mePbLtcQafgFYuL8hnFToawUgZ25FbGW8SNA8",
  "key3": "59TPfr6pcUMxiPvNvjtP3pQkCzdUY8X8jREKhaBGdpZahZwXH54rS4iLdwyQXAyw1SLbE5CjQpuuR71G8U8zHUFj",
  "key4": "53VZXJvFff3SFozDWhJhWBrJ52n5ekH1ysPaMX33Uet8mKv8TKXCy3hXx7YrB9mYf4cHeFJqGm4bXUbhUPqVgbJN",
  "key5": "4wmRjfR3sVTVk59D6NU3DnCc12Yh5rbgFKvTfT4RBcNFA53AgoWYLVt4gyJdXLNGsLvfcJAJfciCTEDjFEN7m4xq",
  "key6": "puMe2DmTBrSE6ERrp2QUgupEB3nszTmJPpAwPcVvsbRrKpkAwVCeie5eh26jAbPfvbEQGQn7YgPtnCRcMz4myKe",
  "key7": "4W3Q9SCArySLnvXyn1RZeL88szrdAP1ncn8YmhCxM82oRDZiTXrHNRfiootv4KQS5PxbSTcnknn6bYMHGTCAsv4s",
  "key8": "3peNjYKwpArm3oCRAH8e51zDCnYhgVvat55FN3s4uFfSWof7ezyHhGCayL9zwbFyNLQmwtcEW9VmPR2KsBEyspnq",
  "key9": "3DArEYJoQVmoapFaTQXFW576LLS933TfL3TBdReqhKpBMCLHUjiaWZVhvFJmvuuhxEc82UJDvYPYVFJyQzQD1qN8",
  "key10": "5Cqne9xVzo46QkpjbiDiHduHU7DLNcnTAT7bpMKYJwk8JTC8Q2hXFexPgqRBDgvKq7eUVVXjCfUBrL3UA2a32kyn",
  "key11": "2XkgjxuujdQ251WANX6GRF25sYbf8zGiWLpvc4T9RjUrjaY9V1LJUWuuRqoARTZ2iJ9V1MbzkDU9yrUsYZ8veVsS",
  "key12": "5wKkwaYeHBbicFH9Qq8qy8gMJAMysxMTcLNKg6yyGnh1wTJ37hHXowcPD7TMCLU9Ez7tDEiwugetzqcuckaimEFf",
  "key13": "4DN3ybP6s14bRBQfmbASe1GFcAHkNJjeMrwsHi8eiNf61CXe9FrzWpUbELk4pHaivevSQkL1nGMMgZdXrL1oUHMk",
  "key14": "5EqQRXjXb1FuGEBhnjtnFJpBk2hbmozcS8x4KNL4tY6CdbMX76mVZvopa5cNruAfuD2yuF2K2QGD1q3CmmDpzUVL",
  "key15": "2ByNHMhDQzQVgdu1yzPAPKSh4JhimstDU3hTvKAspFuM4jHkv28b6ULWqYJAL8BTL15Gc2JPRsaivwVrdSsD2GNC",
  "key16": "4rWwRpBdN3Gntd7CYZGa28LGoagCiAhkcNzEwrBJKSubirvDPXbojDriuCNX5gqobMbPGUTVX485Vu2Jaom5Djy9",
  "key17": "22fP6Tr7fzQyxPDSiQbZTr8wdmSF2NwgiZaMvmsopL3EsbeekcQ1oXR8org1Y519NZJ5A9Gk5iD8tXGWYbLHfBNi",
  "key18": "2Vy55n3dRTebsS5xA1VPcTgppZLcdJn8pkMDUe5YcVnhvcfMy2u7Ua59eKAtWDTyzi4ew5AmgipT7UEypsBZFgNe",
  "key19": "U4PJAeDt36z4xW75LJKFh51m6xxgxJtjuEb4S2X3NZCpQT2zhNcEDs292ogNtC6xZr7cekA7UvekDdPCWgeSAKp",
  "key20": "tzwVzXkgUzhs5JtN68Tq6ieCfrMuu5xYexaXDepUSUU3xkHTTe4T48ir8NJWwkBac2cVaaKiEipC3p9YrCsMcTJ",
  "key21": "2p2keJ1BQ4t7pNb9ff6aMtncDW6d9JcxNgpznuTeQJDSLp1PrmYReFwCsLW6cbhWvBwreasLwsnMhSC5FTDhRpVK",
  "key22": "4nHndDGdRyjnn6hvFtgzzcEUeAY3iqsjDJDuRvDsF2GwS7wfWE2BsNzmfeHqoKCHnjpGKHSEu3JiCm9Hut466GbM",
  "key23": "56R3wesqQ3iqzYcxJWbRNkczW9y4NiNWet6Y177HzZpaddPPTreh9VtwfMq7CzDwcwXr3hdDkFWf91FJsXQBrTU8",
  "key24": "3RQTUsqdDgyRAMQ4uYvR9mZzMbE6YZVAtLWXnW68b3j1aJYeUqf6xPJwYsGsupMKAFZxbxLCygW1P8LqvymfC43p",
  "key25": "4dRb5j9UccuB3XwytkKX6ibUgXypM737uvfYHNevjoTequ8Aqi6XmEPcZ8B7AdzQe7xPwrRW7PBEhs5YLjnEfB4u",
  "key26": "Q4LP6gC427GrHpMJTYSGtqmbMzR2G59mVEX59VFirHvgRrjsMBQAmUJVztu5oYMmvC5kvxNDWBbZFiA1pZc2ZfX",
  "key27": "vQR64WxS9ExbaA26V8SyJAUDMFBGHXWjxNu4Aa5SPrkFm64zqu4fYTCRP6jYWrr7CzPMcbob9j8SdXgrFeu91dX",
  "key28": "4jbo4ZNqJYFE5uKKUPUNYUYAe8aEwsTfnyzFHr9YE67cpSGNLYgCp8vDZJEJbMGD3eKPS7Mv6RRL8pWLAaqq3guz",
  "key29": "5NRYNXNpHiASBVNPjUzhmQzTypHshaXAwSWwFfp8AVTsBUvmVp2g6Qc4ntU4wzaGSvPRFCmTVXtfR6vGMt7aptt8",
  "key30": "5ErayU2pv4MyizYA7TpJoyCDiM9Ky5DVa4LX5mYr3gox6eCQTf4h7RvSQ41TT4dPPXZMebfhAVgHBF6bWmyi6mqi",
  "key31": "66MgeVb2TXgg8RNRtPgWBKu9e5LMXZoecg13yGoSw2ymz2WCRUjffwrc42k3dmj6AvqNzaczHCt4tGidm9zaWgkv",
  "key32": "3q6M5JM5yTAntokZsJL7KueaDtEgZ2htfEX1NPDa5tmU4cwKsXysUb9xNZ3Nxi5prqgNqFSdWyWSFwAAH8vaRTGm",
  "key33": "4oeUejJe4zjvu9xn4KUNymT5YPbdF5i9EZGB4RAEETU6icxTrtoc5MFHH4GpNBunDNdKtqDvwg6G6xZCU3GoLZwb",
  "key34": "3FzP2zCDQ79NZCTjidmwk68K6Dh1qdMmhh8q64bFgKKknbV28VBYxDWdoppTjJ24FwPDBHZhARnWYn6TKxJFF1wu",
  "key35": "5f2NmQenhjJmjF95aJP4h8FhdVZ1nbhDNTtV18igpdi1sUQFL7g1wAG1Z5zGXsPTve4e4osAf5yCtJsGEv7quKV8",
  "key36": "5fRzUzttMHqVMPWsV1sFwqbTHdvdK1ScgqM3dkqLC8nFQ6N8eiJ7YuyzsbhjSpYiZ2vXsePFzHTcjvjA9jRSgznp",
  "key37": "3ZUT7dE9BbEZ4M2h9KN2KFzZxszxQVFNQLXdLG18huDFkvvSThHcvinnMtEsQbT9HHWhFQYAFn4DtSkArmsjFA5j",
  "key38": "FZEBfPWbp6LytM64aW3y8jAAPRutn8WTAZsHodL3LRuSvetG894SfqheSJJk2q1MD3HC4AdMwmRFQBZnHYqKU7V",
  "key39": "3vA8TMUzN55dD6jYP7gtbCnVLPLTKsZGEhibtd8B9XjhxJjhabUj4DKTDx8tNKNLFYShR9fBNoBMxtRkxecX85k8"
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
