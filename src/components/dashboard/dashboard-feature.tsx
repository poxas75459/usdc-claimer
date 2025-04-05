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
    "47h6dwQKgczogH3opPyLYxD7XHLeyAebmy3PF8isPpPa8ub9VG3vdNiGWTtNvD6aLcuDeTKcTWmVNtPczpAs6yHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsHBxbCgh96b2ts2Wntqa6gTAGxXadaty2HGy8q7smeHvgasVdQFVLzitJpHEus35j8PKqf2qC7KvT7gkUhtet6",
  "key1": "4YeqyeGzAm3UiaRsQLUgzRoJwZde3XaxRGyHxuDVKjqMZHtc6HNriXzSfvCrUeQ5XoBWWgfhSNQNU4nRcPEywgDk",
  "key2": "hyyQjEy5FSTBcorVSRZUsq35XN7F8USCMb84ghAkZrDTes8BymdAZKtZC6C1XozHLXhBLGLjxWayTi3PX2PsYaz",
  "key3": "4ekzewet9AvyzNgeaTDVaUzv5otDK3M6TmpyqMo1EGFfwnMEPAzFDTuar9gQRa9uMnR6T8bqpmoGsab9W6tF2k7o",
  "key4": "2xhrzR6bL5cxkGT64YfZZ6d35PkVDDXLBFyVdESxz3vuaZ6WXzcrarsB8rFzKwNTiZHDjtP14koKHr3CdsmvHiYf",
  "key5": "2Lp6EPHaUAjmuk49CSE7z85dz3emAEjE2GGRbZx2LBtfMeAuDM4GHmL3PWvXks9oqxP3f2Kj1xWsSMpEKHxpnCjB",
  "key6": "4uAXxvE8RhmqrK4BjfYw1mD1yx9JtUaQ4JSDd5iHqUmoQc4BivAs7xBRLcQU3XtXQqsUkQwP9SsJkKoL6HXykWzw",
  "key7": "2fHkHusJC4jBkHfhSCqtbArv6juydnJ6JR8bitsjYk8BGaUAw2444LHVWiQiz2RwBAyAAnkLNGzcbYZyxC3kyaSu",
  "key8": "3UU8i5YB8Hq5oPt3dQxxyy46yFM8F35sgyAqxT8zbzKgpuUT2QoFw5ech9LwAPiRdmQhcZeRCo8xhTGc4Kr6WXef",
  "key9": "5AZ9bmU9s8zxNzkfnbhBAbbQkeFnxjDuPjJurk5KzzJjCJDjGUNXGoMuei3o2dyyWRiGFctMQ3smMkQQUpqVM9HM",
  "key10": "frZ9JiweshUWpshhLZpYvaqvGiQBnKDv8UfYBrAcXME3wvzShxTrjLJzBsgZ7Qkn1dWtuc1EdWGdQPoczqHWWd7",
  "key11": "4nE7CabGMDPMjofHxUGg5GxHd3szFzJPuHVj8CLKnB4DPo2oMhLFNRdj6kYHA7RJTjD2F8Pier6q9tSErnQwinUB",
  "key12": "Q2tCXRKVS41T5XyUeMitZq8DJfHsuQMuMQL2cYpFAszkE7fyXuSxEWPUT5jUVaKPJKrYyLhmu53BR1GyWMr41Cv",
  "key13": "2iKvj2oYokAiCQoaTDprEXwHmA1LxKcMPvE4zRsm33P9a7mvYRMnYDD7DdVGNeZwEKqtAdJJEnBx4D814JgcZnEs",
  "key14": "V5ir5AhAmFrF9W4VXorRErMK1FBX7kfPkDPjD7NXKQjVqSNjX9oazpbFrKet7Jv3Fygbwj3tL9dyv18aof83huw",
  "key15": "4Ggxok5CR4TWJgJ1egRPC1SF43wqrd89Ui6zvJJxnuxZt8aP8Z482DTttLWPKtuvoeahFfxsdKSSxVUageo76hL2",
  "key16": "4YDpzPsTP14ckJDVm6G8n2VFfceJsLYoeD1GzyTZWjGrZYfHSXraV7EeGyj4gZrDgDUVCvDtLNFVzFiQUuHtqtN4",
  "key17": "5LAntZDPKdeWVuhEJLAriAZRw8ZTP8FycqJpyevhSFdj8x5dtbihgiqzVWmy2jT4NXMy5TX7TXqY63vFL25JscT6",
  "key18": "247MGTbYtHCZ6P6dtcihd1j3ozVRZDeVojXcpgrkSBQZ17CYpePVdw4WLvT45NuXNBYboRUgNFVa2Zwq9anq5PGF",
  "key19": "5D8L4URgxMVLpBpUfnMynymxDD8w4gTjJY19SZRXUVhfRfAfQn7G2DDtkgpRxxGLo7PtQdyojheMr1FyFHwV5AJi",
  "key20": "2KgHb1oM7WCrYXCpWSP44JZ8sKNV1Xii82oWHJW3atPcZro6XmcmNCJGve8LkngXrXHtEnmhpVGYtXMBr3kgkw38",
  "key21": "3KuXkCv9UKPpRSkMA588LxdfeFaCbHKnTREsAvQ2pPf8kfvnLQMvwov1kRCfCmhXopFfZwFaPntBsJbvCydtT8CD",
  "key22": "occP4CtUFfKh2HAuEG31CSB9APDpipWQdjEb9jo3Xib1rgH5wake2hcb8rkzqdCcQkASMxSGxrnbj7uP6k5AtD4",
  "key23": "2iSFKZzJ6NesphWrW1VCG7BDhxUVDUm4RFNhBhZX73JnTSEJHRoLKTRTmdB8aaPbSWScrNKJCw4skTEf1id8N8ad",
  "key24": "2zvFK43UqzD1TKFh3Y5te57Xv8qEkVMLjVA2geuc3WLtEEiM4SKTmuN6Avit2dArApJxJsFmhxQfpbZorBEf1xWy",
  "key25": "54mieeZjjK4Dsb1CUihtmikWskUTjUVP5cXeX3He1naB2iN5ojijaWTAe7XGUMcu1Wo2LxPLsLmtNdtTbCL1CfY7",
  "key26": "2hecSqRqQzLvbGhYKdYXnfAtHixZVPLPfAWad3QRsXxrGDZ3m1expbpZZoyDUcVWxvzHA4qnCXEdL3Zo6bMeZxsb",
  "key27": "RVZvNFCvBCUFfJUApymhiuY9PW6irzDcZhNqjDWZMc1sWXdGVdheuX5WsxrrV4eAgiys3kXAc3d1q31A5dyAVpn",
  "key28": "UQanm15bwmhKLCUAQwXctm6EsW4xbgdSxvDQW7dKmvLJ2RQwu7KutK7DdUN31ha9rooFmkPJe1kRPDU4GkkTVqp",
  "key29": "3hSPyLiaHH6kSsqDiDMgT8Nmf6qPqjwwoy89kmSDbY3bDRJtZ3UWay1LLFZrY3CgZgAGpGcgoUYnSK6TbNy53Y2M",
  "key30": "EZTWuswRZtKAJ1UnmLDR7K3tANW1A9SfVfaXvrcjDjF6v4pvJAaNm6G6bDeDE1aS7ZwvdYqzCsXeZCx6WQgJmpb",
  "key31": "49XBJuKY9JhnX3VkrV1jeCnmYxZvcUyW36fDzYB4KnwjH84nc8ftQFEFLx69o99UXVncdA1i4Yya9ahyf2bhRSsz",
  "key32": "2xtkawJC1CUc5mDd3rf3FdKGTuDnzqeYss7VF2h1jY4ofG4NM1fuFekJR7HHMZSF6WE49vamugUH4f2KqhBdMGRA",
  "key33": "uQ2McvTVNUwkDFpqusxhpmbq7469EjwVVr9x3qEUaF1tB1uzu7h4rdo7ZyT5YCBtBE1sqSTEEivbQfaDsxH3X4e",
  "key34": "38tB8EfrdE3LE293XSGff1NyRLqtR4Z1kPmgFpPb44LMUZW2U95uifVYTu8GYecTAGEJakTpn17bbZdHUHm4stxT",
  "key35": "2tjLz2pxvad27TDXWZGQMypGt3i7d3RQjCLRCMa5bU3z9P3G3jeZdaehcvBTKXTV1fgkUMzEuuPCZGhR2uFXneSS",
  "key36": "62rovp5iquC5DaDTy3CJFkjzr6V16gaG9Ri7MXCPSi45e6TR6bJJybqgxYmQM2H5e6tZcCZUL4U5DA4VYzRjtHCh",
  "key37": "58vkNEKVLKfusMViRGQ4ZPGaNVrZnLkQrYEeDHoDoPjcyaMm2BLa5xcjauj9Hikux5y2XcBynxqi3jFXBiUmrp2q",
  "key38": "5JSXHk1kvvKoYUj1S7FfDwjGrQ7a3DoAySwUKASNHK7VADd4N3BZChAPY2HjivAcwmiGnbVLrUJmDjCk7YsdEWo6"
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
