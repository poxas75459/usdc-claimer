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
    "4DtwtaxpXqNzxUonbbXppiBPVteUCaYcjKXb7b6vTJEqHGLXXNE1YnZrFVeLa1qjhooBeVe7Qwpfy6ceApSMJVvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CFyVT2q3fwKLiUQM3yZ2TgriXkq8Q11VCCQmTM7gNvGeQuZQeDfKAYD45hdoSo4H1ABt74wPiUiWqmsk68bMfdZ",
  "key1": "4PDafntVyDhUuaH8bojhD8n1ggv6LcPJCBJTiDDty3oJ9P9v6FY7TBRr615iMiNRZaDZGR36jZXqDqZCwNJ4P4CM",
  "key2": "2nWUmJvSs2racEcURYaoi8AyVM1ATBmezf5sLvZkztbAyJcf7PpsKFiYgBd5oD9scMHxrqiT6Z5mFuF1wwj32UAP",
  "key3": "4vF7aFzqBjUF6VfbnZwLChJAbectMvhAPp9CbXmhSHG3n2cJBMLiqNSWLdZggmSM3xNNiGJ9csQQAeGXEYaMykiA",
  "key4": "5FzjDAKEmWYaYQLfAW7F2VA3vTCZFZ8JYMRQDvEWaSacNHJPdvj4xwh1ygkQDJALXqVZPtJUHbZ9itMkrb1Wbxgz",
  "key5": "2zcpgPieuKEmxqwed64gaa1ec29K4QqkpHDmTehTQuRxVcztsoTjNQQfASFmbz3FK9B3znCqyyk3QJZxmHmiu3aA",
  "key6": "5Ag85uEnCfCEtY2q9syBSB2HyDyLynrknCzA3FxyFXDnUHWzQFGvKcfsKK9qDXi9Xmm1uWMqMxgFBkwfzAfhP3xF",
  "key7": "UBNorTWPcqWyZXMm3vPcnH4MBon5C6Ahfuhh8utZ4FJBdfoNJ9L5EWM7wxvyTngCHUJLVTDMQsqziQ84QrhaA1j",
  "key8": "2k2R28zeAdezepZVDSYtFn1ngw18RuzcUGw4HCwFKKtf97WccN3caKWioAHtBc7JRaAQ2NgtcZJiX9LaryzimrPz",
  "key9": "2opukgNGrS17Qhz4ifgJeYV9dFm329fg5TxVCDEf1PRSzUASgTT6sKaE3zwFLM4Er8cZm3ETV2vu3CLxvaJpEMKs",
  "key10": "3U61cikJj4kVTaMHsXBGT1q5oYSt9un2nghZN1mEJ2fNsrFFrbvttcEogRBkrA2t1HmEpoL3ox8cZ4uDTCDU3kFz",
  "key11": "4Cdt9PjDKYVe1PPBuKBswMQcdFBSnpNN1tRxWExPu1hU7kSf59RY9mSNYn6wCNB1zbv5YezXoF9KJEYxd997iYgz",
  "key12": "44bCPU1KidvywysumfGeuurLSZ82dPJLZxbfgUgynb8piCXBDVkZ39RaZdeeUoyScNbCbQhY6pTkNggTzwasJuCY",
  "key13": "3zgax25ZbAcMtbga7yFFKmpsLGsYHEWneLBzeGPcYqGu9MpBxD4aRnNf7CH3ZQKtP8gUeHn7gFUNL5RVkMaG4fBF",
  "key14": "4Qa9qfLCRqBpQYffsoSsnhpeiWG4iZApYvqvxw8eqe3zzsJhiDUuzYHYBn1s6C9gWQ3UA7XqMfN4xYTdqhFaUu8n",
  "key15": "tfMv3EsbnRNg3m4unbAGw6Acj7Taxu5CPfoQoyDqHqvE2ptct4abYxmThH6YdWevcG6xx6pHbzyvYyGDGQPicMT",
  "key16": "WTiCsqygPjkwzz8srimR9VVXFpRbih2yUKm566FRi9y6QucuhXj8ASKDbVAXYEG6LujMuUs5J2aRcABDnnXLryq",
  "key17": "5amK44EZGsc7cQ8Ws5DSdWAk9CjXuFF5XRvvpSqcU82PkuZyG2WkgN65wKF4A5m3DP4t3bmG89SxXv7VbujGWhJS",
  "key18": "2rnaYvnka2XSMzpDVpedmCje56ZYZ5GUaphzLKERjDV2d3mSJoibSxjnZjrqXVQTANAoQyLHKFi627oE6MRfBME9",
  "key19": "4RunDEzzuaNij5EXbPgv74LqqtrhW9J85rt9634BcdDa8eYSY2D1D8quL9LNwAnkMJhMzJHSZCqaXCnqKZFPcADk",
  "key20": "3vEwKvrj5RTEuFMjsAv16dVQRBrJp86X2qiNuCeFVwCfmz3tDitmcQuDRYc1AM5621jXtPd9buyG4hStfiXE4hzw",
  "key21": "4bYK9ezVe17tGt8q1TXq64ot1fc3rWWsi8jAZvqvNyjvSKbJkP3aTrr6hyYUWcwddZZwaN3NTfb1BpQAUqtm1WzW",
  "key22": "W3oM4xYBDSSUoMUpfbaP8iEDhUbRuZUW6F6fRHD5Q6La4iFeEX8Ag2ZTRuqbhKdhbNWsGN4hJkiXYqrTjwyB1nb",
  "key23": "3NwZQu3GRZdqf7T98cAA9iHDrfERZkjwmExAFeX1L4Km4XSXGBV2bpWqjbYZKG7eW3thrUZhtHn4bwa9vuR2jkFh",
  "key24": "2QkRetDkSSap2Z5UqPgRYESpTKP5832GByARKNPHbu4yrkg1LLyUxFTocruGmcRYKW5AXdt9STd3UeR6otHoX9aY",
  "key25": "JnATMiGncSj4zj8CmUHjAUwD9P3qSCBsjfG7PBD4KizmiK8NrW5467XV6L7mvWkwVpFoHcehM996r5fdoipVi33",
  "key26": "5zipFiqLuKGviFNmXsWdoBPiqRZN2iwQe4WpK8ajtnxPgXCdyWKFmEqhjsf1nQijy3WPwgbmozaMaYHmU7YPxW5u",
  "key27": "59m8KmEXZof9nLuWVxNZCyPNFH2dxbSzu9gtMeWkVYyzEwMaGcR3VMHZ42izGV5F3yZe6Bo5GHs8V3DxCtdwbDn5",
  "key28": "scjRq1UhDX5hrswzSFMe4sgnDaRT8ZKDNZb9C2nqcjLxbmDz9VkNRRNmrb7XnjW7PViNwnWJdDjz3QbJ3yz7b6C",
  "key29": "NKFCdyZoUwsP64Vn7mxhpUzzbAwxWH9tgMhVKcLRQpKkcHrKNLtmwcPSGEJGbnvoYAZRXyhLaC9TF868Bs1izUs",
  "key30": "3pxNwQoEwWrGCdqn6urnXKtV16uETGdjUoqLEhjEPReYvigtbTWj3aUFPFjmTtzgQ4ootJHtA14E8TancJrko3RG",
  "key31": "3nZCkCN9MeWtm7Vn45BMCKJ1QNdnbG8RzbFv31beYSznbUrAWFK3ZPVB358wBajT6hQaRvrSNjLLZMzBP8g8tgQ4",
  "key32": "4TfWk3cxqgBPgFvj8UGaBmYA2oZ1r9sQpn7w7iePKN6QTgY4U8BQF4iAoeKdEkbUUhU1qFcyX4ELka2dhKEYjjyV",
  "key33": "63ib7UVkftaSzM3p9grsCN2vEyMBmueiuPCq1GivaHgwuTB28PJffGVfxtNZStJHodCUGS4HsnBkv7Mui23KJ31W",
  "key34": "3wAfJNgQW7LZebhbPyAN6Nkjyft1vwtqXGc96YEZZQh24tVHpQoTJCjKBNupjmcTbuFr7Z9hgTC2ZnUVFjsQENAq",
  "key35": "3bUyEHYq9ePM64VCTccTBJGteRrJFGnz6jMRotAL4fuMkotSfLdyaXSAMrNctfp4jZ9StwdRQ1PTRJfEfnZ2YoQc",
  "key36": "5XSqjNrQ35rVJppkX62h3Kzhmg31WYzr8zJetceuds91gAVhhS8ingsqHbetXMb4aaBwA9e969tZx7hPF8QU719W",
  "key37": "3ndyLZRLoZjvsesM5dZ27AGFkCCWSt9TB717izjh7Y1f5ciJNgCrAaASWBDmSvRT7idFtTJcPTZLRp98yHB3Y4bw",
  "key38": "Ft9FwfXV9HcXUDsVFEPdfJsSNfuxm3xaD3iVkymqm2TEYVBj8FFhDhDxkhQ7JLAmsy2XPwHeQyotQsdrjUZC66y",
  "key39": "28BnyzjhpkwJHc4Fr5fve1pbmuu2GvezoquE9SLMuKXyPdGyUQZUfGewfjz6xWW393gLeKi3RS13oPehLamCsiXR",
  "key40": "45Ef9EU9grDpM5U7kAk84KLQN6HuSKmbhEbKQ46mpSQ1j9gg7BppAmGLzimsvVPy7Au65n5tT98K9MkXUYPbHW7a",
  "key41": "29oM1kbLKEfnhtGanxpCs9Ggo1tzMfUqvJEj4pGEMwkJEgoSLcqrtJQ1NpBQVd56uMJA2u6aNTJymcyBL89zqsuq",
  "key42": "4SJVCidx2KG8CRNtwMcmD3Dp8UfdNrraP9av6tfguDGRx77ee1cnWarH649gMqPhmp1piof71Lpmn6oTp5QXbZzx",
  "key43": "9XqjhNZuTcgRDQHeMvGSfQtjpfJu98q8sCCyYwNCBVjfNgcGzzW9mc9jdnUSb2oAauYcwEMm7qqJbHFBae6fe4N",
  "key44": "hZGawGkjQFrojP5EBT3XvvRwWKZEdeb47C58CuscNdoojd5swqbhuUbRXiE8UQwV57JLKpwEvieQN3kusaspaTj",
  "key45": "5j5skc6xMDqo1Biu1dh6eR61kBeQkVWj6JswEfaZ7zAByT4icUmRMwdybyqBiX9d4b94beUpq9J6owRK4x9mBF98",
  "key46": "4GgjFK54MKZHD5qZkGPp6dzDrsRbaf112fNT9tVdgwjFubCn7G7uDpjujEtPHvzppMDa7XcRMScXtgXN9PBptbm9",
  "key47": "rqmW1sS6tdjrBR14rh6KjqyxrP9PouTMkoHMaooPxFuTiCSpUFJ4jB8KRTmDcqbxS3Z6hAWA2X6FTVb92NTcS3c",
  "key48": "2JzeCBetrNsTVD6wduHYpitfSZRhtTGjCnDqA7HBWCrcD9w9Knsa19kf9mavFfxsb2x6FcLtLRJ43mY5gN1zoJgV"
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
