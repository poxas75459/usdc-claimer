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
    "3aiQrci5Nfq2tWwgR44Bp8o8q98ksUSwTrSfXJexp6A78d31uhDNN57GX8pAX5XhewhTrVTZtZ1o4M6CK91zp52J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nnrrXcmja8D7Q5NbuCCxUrJG212FMtiNHeRVHB5KcM4mt7fCkPrxxh8E3ZLdFQBQTWAZNS4eLNR2b33i2Tubqia",
  "key1": "UB8DXnD1LbWoVsZEPe1uCYgrLZgpVH61ScZuSAajSdqFex6JvqqzFiC9JazbpQk1T9GciTp5AGieyGqi7a8rwo8",
  "key2": "55Jg8dE5PKkziqhTHtWdCGQsbzXaheTXeCaWeG2zfV9qjoNML6UAjPN4om52f9ZaALArKRHm3jhLTUQe1wX5c54C",
  "key3": "eaqWxBSdMWwbjTsspYGCATyi7gDxNr6pAuU6GmdpEJLy4ecszxcCspAME8ULayp4vMbYrFypKhKeYTGnWyTaDJm",
  "key4": "5JNdyDtPbFE1MUDZwyryHGyv92rjNSe7Fu673vNZazKjeUr46Levr8cKvtvskKLnp8BAJ8tqwDXtwVrYDgRJq2Lo",
  "key5": "43Hc92EGqWzpLg2pbq7bpWzwYHAGGQHoizCUJKBWippCkA6Qg4QadATEpLyiKiELED8BfmDKyVU6LpmMFaLMK96n",
  "key6": "5B3A3um7A6XzitiKTG581PFQwJzFvEYUoPz1Bqzm1PNCHoEdpogLd59yJngGYcYuNt1FPKDDKpHwytJcnY7RPQ18",
  "key7": "2t9USs17nPVnqfLtx2dnDWkPPBWeg8bMepLiaJU3TSyQeVreudooPuPKUYseoHvVaVu3ifrX2u1kq81gMBWAcxW8",
  "key8": "FfdrhxPcy5yrSH5Lk5621AvswhJ1fqeqpr9iwMSLCTQh4mLvGi9gn7qTGFD9oXQ49pBbuCsvyT1kESqKw2BS1fc",
  "key9": "4eUzozzKZC2cmMGqETi7xgyATuSLWfWX7vkREWy9cHWLmDmZAyf4AyBaqEoKWJ1xU1YNZG6ZVbDfnF4GMG6W2GDF",
  "key10": "56AYmUaxEFBode9URasFRc1osop2YjjbfmZQmBSpzuLotQB7prsBfZ544sP4qVkHQQWEgAbyo8pCbk393UfWQnaT",
  "key11": "5BKb4FgpcG9vg6Qz5dWguMfwyeZRy379GPTPtnvMv5EjRFmvmDdAW4eKMtHLWRfRyDh3iKpp8GFxuDWoCggLG46Z",
  "key12": "mKTJXJveq5qZaX16Ayb7deDqoexcrao8T65cMBwHpQTGgvNM6toTnu36uE6EgdHLtp5Rpwb6WEBziJPjbRpGPvS",
  "key13": "4ntXTt1Q8uUowoeMgZUzjjX6Bn9E28BLGiNDvjPEVsxQ5A7gfqf38gBdnkPL3kZSKSBWx6KLEWAjJY9f5yR9Am3C",
  "key14": "2bNg1Je8a8xHhTXQek4nae5ga5ZpqQpuLWnfNe18YUahRnAy6pLtSxPCgZRZxGABJfSY2CAoTgyGWTAokk48rgq2",
  "key15": "5RvkLmCk2XH1GJiFnMVBrmUxZyGwLJyq3fXB9GvHF7xmgoCpNenMk28B4q4CwSWGGBKeHuWGMLM2r42X2creqpoK",
  "key16": "3GqLcgdY7vwLesinqnnh6a7WdQMkRYYvu64RXjSiqiBLLDg2kQ8AqPWv4a27dyJujakQmWPE5vPcBmwZQLuV4H7R",
  "key17": "4vVBkpendqyosdeU7AvuMeKDJaELoR8Bc5P9tWrvHrPCVEbY2C8fy5eUYjrH75ViQHRH9wJgkjMZGZqkdNTbcZfK",
  "key18": "65EFC1t4Y4RrvWe2X6kHmhX7xaHftCWxXkHp5qJ4JzBwUKVHeWDpdgtoixEcbsdrxX34jC3zZ5hoz72EjchoKZPs",
  "key19": "z4kd847pTmzVKqFiZXdCDgejU4hwD2ir8vqefsN8xAwxNVCfYr267AzhN4izn49ghMaLsSNhnunmntNJFK2uWUh",
  "key20": "EUnzQRaC5VzcW7Ge1XiMaysZQiukQKDb2pJrcLLhFzYV5PBjpcG8BypJZpUsXpiEUTNmBCDVmB2Qq7dordD7vVp",
  "key21": "669sb2e1C4TUftmhxhsu41RCYFNJfh9YgWai1oPhPFcdAawcnobza5dha18qPLEBLihRA7HqnicXTa2fr4kaHSQk",
  "key22": "4V84FcXR6RfYRdJ8ohnQszMfioZ6Ec4y1HMQYPMmUqDjS5GyoicCnzYM6RJiPY3Mrcd8umm4CscjZ1MjCJMksbYP",
  "key23": "5HRouHZDzvVpQYp8gvts2hQSFMPhNsY2o7jRA5umBhzEtJQ9aRAAG33zZX2Kukbe6xdTYHce5mdpoL8TDG5z8YSR",
  "key24": "4L4UqF5eKDdru8HpQVCbTrzJSPKoYUuF6USizsYycZSPLWhR51ZmgpFsweB4ZEuC9sGEB2xtcDuGy5GjmLaVRGEE",
  "key25": "vW2A6Q6i4NBkacShoau8pmW6pxFhpDvFHBgQA7tZTyMqRPkUrVLdNEWVdwgD2unSjXpynobsWVnNF6wJrNBU7Bw",
  "key26": "64dkRTFKjvwd3161ParB5Lc5eNtER2mdpux24kgviVufgmoAFDYpd3rmzCumatmcqxn4ErYp2mf4k5BGkDu81bT4",
  "key27": "45An86YX4akdctuvkQY8qeuFPEAtUwdERZdS3Bu1gGiSxbkwZxdKKR5rCvR1RFb16dLZTPYJfqKTtnPWukBo53ES",
  "key28": "5bhvJ4L5EHGzqHYWBwdTTuWNgtNghvxQBmwtsWVfAKDJwu3JnfB5tqYqdpaVf48qGY322aU9BqmKZFw911RspHZG",
  "key29": "4kwk6UKWpsFGLeNyGo5oYPkfNop6rQ9tVzJwF6nuK4E9fXK6L3CKcKqaFbG7r2Rg1tatmy2swGvt6bsn5K7u9n35",
  "key30": "4BJ52hEsGxqjHuJp3xJx88xHRsBVGNY6wABBx6RUXbMk9nJXB5zuUXQinmeivV5oCfiKtcdWDWWj1TvnT1Fsf8ZJ",
  "key31": "2CbWDkSbTZdMPWKzMvXnVV58XNCTEX5sm8zp9xrVuz74sjWVpSS65S2NznnGHfbWkeS5rLXnwWxbURg56zbFRi7W",
  "key32": "eXKWWd5ejd9aVU4ewgGRpwY9AWRkj9zrWvjgYpRyqTm1Qcf3fZ6TAMu3Pi78SWojgn818kUkvgXui5ECyD3zcB9",
  "key33": "5Srrrv9PgDDbuDpxWKPNbyMr92JNNvwxyhK7NZ4S5nay2QVJpsp9bwVVjCiew9RyLVsu6NJWZMccvjDEvPNqJBSM",
  "key34": "3SKqHSujKb3FoiiwtbqmLE6y6WkzkvyqNSix6npua4TmYPjuNd1CWwq4CoHPbEdE2o2w2DTuYDgTCfuCRhmr24Gx",
  "key35": "2VhgB8Y32yNdjrPkiN9CAWbBt5LCxfkkUZUonYGsEfoZJGxUHyxKbqGNY9pdieh3KEFa6mopV8c5qGyT8JxgkuWP",
  "key36": "5iyLu5a5bX8bdKrUM4CozDnjswLbYqasmJWZxpbX9KL8EhrCUPYX8HoRexvgRG1LaJ3MdRxnPTBVHC6wY2n8TXuZ",
  "key37": "469t54bZdvm9J6QTC2VKkY9tRh6wA9JjHNbtsQtdtWNum5Cc3shpBXd5EtcrZsFotd7T9UupKMKwp3Eu1RRUqePK",
  "key38": "2it5w43DztqZHREfgAPXLT5KNnN9SKmnmNp3RCxSyq7RtHKqfxqYCuu13f6LKxXaUbJ3sDymkFaG616ioUoXBUx",
  "key39": "3eCoEqqcaMH4HZbVLZMEL9QGyCidzH5cYiwKHzruBYpYmfCoZ8VGumjrFT4njiHE3KJkTkPySg58hSa1j1PMYBW2"
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
