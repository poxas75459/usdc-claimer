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
    "3Prk9rmExCYm8DGhkNL2uTRbEEhn5mrB7V3yJkQMYG4gFJ56762GVeYnxsLFGy7Xcywad6uiXGdvgGuG9nE1bWxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e81F1DwZTDaZQfAKxGUvrBTffmHyQaZ7aH8BBqkr8sTUZGPJvgKoJHMWF6FeAxn6xukW33EPTWBpJ6n5f9eCYMy",
  "key1": "2X7QnsM2g22uMzjSuktvT48Bn5Cjzsxnk1aNsw3PAxBkYZs4B1d1rgHXVdJEAKWaMcAzVnpDNtZpYLhQFuzkYxcT",
  "key2": "24RjFhV9vHfHY6bqJDvCzhmFyfPe2xAx34jJod6Zj1L1watpWCmL8UpvmDWkvn2xuPGVnGJDHwVcXkwG25bhb3ze",
  "key3": "2VXtmPD6iDq9QNGZTk9ttF2CMANbQpwYM4NHrG267vpxbUQqQF8VDqgLeXkfD6MAaFHW9hxMEb51MFXtAbRHi51n",
  "key4": "62V7EhSKnnpsMBxb1qKARNjZPueiKRCwMsyyxGYCWZBpiAf3J2VSWvmQFp2Bj8TUResKmMmQvJegxPJHqryueTaQ",
  "key5": "2DborJrmzm1CnfznbkkYD9SoHKEhmnfKHCgsKA6te7JwuhvbyUayagVCBjrMN6PFDW2tM4F4pahkpbvBKjKnZoXg",
  "key6": "5saoUcyjK4X7JtME1h2FxX248JJP34dSXTa3Sxx9hpLaan6VaBtx9GZ1D17VrJTfCfeDt3r3iHJ6mjwRa8fxVyaM",
  "key7": "EYf3fk6iAcQ3H7yPb6FEtEHtFbfgpnU3jf6Srs1hPo7TjmQkXcZN1FpM2krCafJagqoFt7w7SvM1KhyeKGGjsZT",
  "key8": "5GN2p3qorQHjCa52cPfAvqLWCFgNShTyu7JK1Ypuh9yTx7bDr5115cM7CuGhU4VqWcnTMbr3MnkTpgQp33hspavZ",
  "key9": "2t9VthHJidMvJpoeDUFJWCFxJkduCWSRcwJ2Ae3Sgk8CUjVsG4tn5og8pt22UoySX5EHPxQ7ThKxkqNx3t4boXbH",
  "key10": "5DsiNnaGTcDc7pQJeTXmDsjm61XEogL2RDQhWtJGxtnHzeoDnEGvznry8VgRYk65oi5kcuTivQvBqcNuUoDtDnnn",
  "key11": "3PnRtFMWcSBX7FtkQWTrcdvs7T77Vkww4AVXKNjswGmnxemcKrYS435AfCP7A5tmYFULfnXQCGXh1yMryNd5hwoC",
  "key12": "5MuMUstdzegcG1AZDqn5Tm7VB2kgEDEpBQTmP3gYbRZSWPzR4rbnK3GYi3QMhYvUZhaxw462AML8EiGEjTRCz8mh",
  "key13": "3BYiWLkF6VakFZHhMxcYGGAGGypqbm1VPdtrnVdMGYJr7ufwp73keFRBQU5Lhr6PRshJaL4C9ZzUDn7cFZ3mmqnU",
  "key14": "55PbyXgJpncndSjtWy8JuLgKybe4SbNajkj8oA4buumAtdfSUNeUctyATRHRbEmCYDVjrPpBAH2La8VhCxLKysan",
  "key15": "65VD7dfdkF8ytzTrcr32S1MDvPVJXbARiKtXrJMVPVMH8ZVZX8GYxr2EKCaU56Cg51f6CdpHwRcueHHuFgAHdTC4",
  "key16": "4jpbXSRs2CRfhUg2XboRD5tYQBk2bDZsCiDS2PYj5z7uV9yVuoUG57y2yFeBkxGk9WNhLJDRNj1F5MGh34D4oYw6",
  "key17": "41eBU6WUYqUqzBXrYuR1qJkDxXd8aGYMmuFGqtspdY1Nf6wDXFVzjf4Rv472voHEx9Did6y6x424kpuygJ7szZDG",
  "key18": "qpwJParhiJnDmoCPuvCFWh8RcEs4m33ApBYPNeVRKShmjhgEGVm86qUea6XrT5YBKAj7h7DHf6KkToVcea1JQkW",
  "key19": "62k2ck49m5ig3BBMDaNW7kgVFd6mbxaVDSy51RJSFxWcRmxJ9r7WumNkxLoZVrnzanb66DEGde7T69n1Yr1aiDy4",
  "key20": "4NrA72rrYLjcP3CoVnS6r9eRdc6Y5wPJEsb37Yrr6qF7Xvdh1KyLeoZCzWfDhmhFLZa2zqgSmhkpWTd28i1tUR5e",
  "key21": "5LynaXKuESt97MqTXZKMtLJKuNcPSc6FG3i3Z44N1CCksLi4zepnabH2RRT3aKjJcrj5qRYor6x81dx11HK6J3Mi",
  "key22": "4PU6vqoZjrgzDkLyUnxcX7hiK3W3ekhr4kNCm6hPxzCtXCZeReioY1VswET22whD1ELxcGjg1LZo8Eimum758NwZ",
  "key23": "4vzw6eKrE2v7VtE9gW334ZUHefWhYD5Tpo7RKeaFHLzqaKF51QpBEtKPQi191EQWZgJUvgqgEyLx3Mx978Cnghdu",
  "key24": "XqAJEQ52sZjynyvjNjJTZawPNaMVzCm6YV5DiVX7PVkivVnTzakLiQiDNKeU1G1GZZ47mgsL69Ec2CJhpabBW3f",
  "key25": "4i9Qk8yqZzVDE9QjS6DSy1E3dNXirxdEM7DorUkb7K7izFWf2jAgPZmm8RizRZyKgwJGCo2d6cbscafZ1onfksY4",
  "key26": "4GVvX5zVHMvwtGprmjX7Xr9Te1JVLce3U72Uvvygud6vdZ9GJWCPNuf1L1ZJtYnxkeUMtCnJMw8DUb7pM2rFwLTN",
  "key27": "32oBYcFXPLKPLLP3R6shXMfs2epjBbpCTepYHnSdysBQfKv8dfsBCTwFh1dV7wYbvuAxM4Q6Bvb6jkSnxiVZCjBW",
  "key28": "4SG9ZV3vTkjQqqCTtVyPGmwMvFLUwenqetmXbETBXcYnYV54KN4eLgFQvZLhQazPTBHUkgBLcnznaBzRis2w3V88",
  "key29": "4d6w4qKi5gvWSkxVw8UEixGS8Y9wsHcveDxZK21Cb32KUf46mqtbCXSMPdnxiayNjtdZ5tqZmd3XQBbNvHWGs8pW",
  "key30": "29G6SQoZRx9DjZs7XFdS9cvYKbQz5WHM9SMmZkzBmE8WaMK93LBMyqYk1N3P6DtzZQqD7nQHQbGzPRSpmYqgUmDv",
  "key31": "3haGDmjcPjm8R74Z4NGyytAkquAPZqGZrxWYbyDkUoSjg6s2nRjR3JrZLgDVnq8xdVaABCShm4iX7udS3DxDVk2N",
  "key32": "4WQMBDYzjDayRPY6onNDKcPMEJ7UijmiCwzAxey7NZPxy7sSAJgiWxnV1cLRbaTYqUPTJsBBoEdXW9JuW4re3ax7",
  "key33": "5DGXnTYh45zP8wShJYgLAm7sY1rDWBLAT8RnFZBjvtggtc924KK7Et28VC5eWKg6n4ik2gjBax1SJiLNqij4ByL4",
  "key34": "2DCwYhHiEkkyVh9YXwWcp8Bc435BNouFGRqiTL5oGFYfhUFKzri9bqQUtv8w2uQPqFXh5JarT35aHUbKhKLw5C4a",
  "key35": "5LSfDkVsSwPdYqX4WUuCp5tnZJ4aQjnCJp6ibyBM9StyVgvkhpVdafk1mEGBkADAbcu8c755VTro63R5TP2KzgAt",
  "key36": "2EJnpemz41jSbT7AEc2bpKpufsjxkfPXA23qfXifayuDwbfjevypBJk7MQpXPCnozX2LwJkDMFQhjxcxxqycxQrm",
  "key37": "56Du5Lj27if9UQZi5fo6oAnvrBwud4j4o9iTZ4Y3SGgm93JZPsEhNUtaGicpNBnRU1jjgAYM8QkFNZ7jutUUbt6r",
  "key38": "FXtHZy1xwmm6Q6G9fuTKSAggVfFKaLX2w2fWw6eY4i6zzAJuEdjZFm4MVWHvueLe74PDNqGYWBmXvA78GJ233Lh",
  "key39": "Si6UPUT63kffBdA4d3WsGRoKMnZyB2nnek59zZntxyE91rpXX3odvXAiBNG25wGEeHNf3UKMF3P3kMy1xRV8W6A",
  "key40": "2ERybwkvTg2jW9NEzujEm2iTAGkcmwoZDCG3JppY6u8nVu3T342RCbMABEU58io5hYyaKDhSxVvoZYHsytnpXxMz",
  "key41": "2L3rWXPkhCqrYgJXaevFEpBDif6YF6YR4pawC2K4Yxcba4SYgAPKvCK5kF7RdXz1S7bqmxtYffC7iEhEniTMFJuw",
  "key42": "5dGKvzDT4CTHuPTRr4HXHK4HQeVTYW9PFuH5iLmPNwEiT195UBebdYkHqN1gRSTaSFtx1Ps2JGXaG3ZCmj69wQH8",
  "key43": "5ZrA3qyTXHDkeBrW6oNdTHykYyK6n9BjTmLBU7JD4QQ3eNt1mzT2Yq6QE7kpGhG44iHcjPdrStH5xKLGrG4EbzXE",
  "key44": "3Wf1FnAVofqfhYBpme4mSuGWvPNsS4jSs5L9ajtXDfMzGY3Y8K5E3a7xhsZG2rEJXo6XeQhNpG9NULs3nYAkPGmE",
  "key45": "3h1jMGTmiGKk4vbdAa2eCXXrGQWTBLeFfoHMCj7tCGCV3Tx6xaMjyDjhcsWzq4deoGF6s8TfCBB3SmLybpk9wVDv",
  "key46": "2vgVUAy1xcjHeSh7ZtCxff7s1iDYKPpXyvpmQnjNwxhRBi3tTRSNPXpGndL2NyaAgBdxZ3MKeddXxtoctkg6ZBr1",
  "key47": "N8CKJ8UdWR5eDpFjuCjPi4GYw4FRCfK2ik7XqpgXXxDMDb3f5RyWeytXgMbFXrVvkp6rFLyKxFkY55i85SF1Jx6",
  "key48": "26ei9TA79nn2H6RFpKKxk49r9m65Fbxsgi91USKv9JxSB23JWKxWbtH2dVueXv2AnFP54V2MMaLk23dGczh1VNzG"
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
