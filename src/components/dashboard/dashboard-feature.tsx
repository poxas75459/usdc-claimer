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
    "5JWC9Mxcmnhw6AXwr1DYe1iAJGcxrFjAUG949y4xsTB49UTNZUwUaZEdiGUVSSpdCj1fEDePwKVc9KDvJDq2SYKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjggp12meEbBVBFQxJWwGExXvMPyVRMap2381XtX9mXqDNcWByzCjWC2fC62Dn23MewgY3CHVSWWyvDchXnJEXL",
  "key1": "2C133SFE351etPFv53iQwsp2qPs1nXFnR9LGSBDD6MBLDfEHHNBnrXp7Kwwkrbh2KwRntcZGXnmeH6G9mYpVjPRN",
  "key2": "2arhYq3r963NJQbM2JZHRWrXBWcKHXuruVo7sWThRzwBPdw4Ghbox3HmH9mtGsPeULzUq8q1Cyj4fRRYJmBicGf1",
  "key3": "557GHL4fqpXSrLYxjq5i9dGQ8BrxUorD2zsmLKaSWbdiysLCdMsk9KSiw82LFVXcnFNcom5L2zzYvPxe6CiU9bHS",
  "key4": "586jpmWYRLL2gnMVzUuWp5r2jTe3jDprX52VC6YfaWVdxJDGpuCbRQvEL3LkzZBJWJGCM5MxR7L7D8hSFB7wGuQv",
  "key5": "3eLnsqF2YR4vGQDGjyCJGyYPsqWLiVpP6tKUafwKCHQBu2GmQjtUiaFGSpBVrDarJ2QgZ5gxVnLcYnhG4KYTuFUy",
  "key6": "5QvfzmZ711mHozEKQwMsVg4MeUDPutiR9XqFdFCrrhRCxcii2nSStBNJ5ToJEaikp9AYfpcTvQNmotkLyvoFqMbW",
  "key7": "3q8GGfVPgizoRGStUhEMauXA1dYEsr66rBNzqJcqGc7WnFKv7Jadc4CAsvAG5RUh5u5w2BbHmaWG7PxkQKpMN5Lm",
  "key8": "4JLE6EAk529BRB4nq8Ko4XoNFLyQtNdHFDJzv81evRyRh3LKghMmiog3jxD5sCqqamGVaHAMDcy8RythQ1nV8ctt",
  "key9": "WMZvwxiqnSp3KYGPWURX7c3igZp8xRzWUzpphnGF5drkvSK4LnKiKyppu3AkhMZXaPamAXs35fKXtqL3GKNXCge",
  "key10": "4AkwW95KY9wXVvvhMhfw159Hkd5gowxj2A3Xh3KHtK6AMSmME8PnNCpR97WqeomtALmx4NCwHRKiEHqTGiKryLN",
  "key11": "2st2XBX3usKpts1Q9cJBLbQUHHeaF9L4UrZenZ7h8zyWYvA4LxbJQ8JpGC3qd1YM9kdePZccF9PU8iLnAnWNAnod",
  "key12": "3av18FYXotjRZQN5FGKgGJWTzXaTvgN7xJTzRwM885hVUxWkonHR7zB4rcYTY2BoH97K5YQDn84aG2dhiQD6U1sx",
  "key13": "2kWbumoxkEtLVnBQLRiQFLKw8G4fXB5Pm7PDM3GFWu8Zjbp9hrDb1adkzM2CvKizYZjMBzH98yWsxPsvxuxhbrTa",
  "key14": "4SvcUu1YYRfTY52h8zTStyGeC4SpcxyQc9SQ8uA3cXjJUb7HDBzdyg2pKTFxBm9krRLjtREpSK74nNWAKVuVSkv",
  "key15": "zNdjcWEmD9q2BJtdfuDL9aSRoke59CjLuLRbZRSkSN2nDUoJWxLR7iboz2f5seBA4zYUHk6c4fhCozqX52QzmFs",
  "key16": "ieMY8VnWwj7f5eWbeHbStDWxvUN5mXzgQPDW2V5jXDCJGesU63FKfcCXmfwn8eE9oXuY4h1b3wDpm3B9Haxk4rn",
  "key17": "Gj1j7auu3cERXazRFgrp7JUUk9hDwYv8rXUH8tjYEGmtVYqAkNkp7NNBPnvb54MGEX3VSf4GG4ucG86jEvQzKX8",
  "key18": "mgJwR7xFHYsDiZqqfpgDdkckBinpPiFRhEhu82q5oH7rW1CVTWf5Cn5sgM81uRu7gnKp212F4ngk7gGMxdxUwnV",
  "key19": "pkeigm4fzwBtQzbabsLfAr7CZ347rGNsi9PLpRjXUQtAFKZawa3Smj2ZTq66LoiL11FpEqaDkuV327Gnkvcxxsb",
  "key20": "53EbcwvfrgWVK2aUj2H2fYFunWu719knnVBasqx9uzkdCXtymdghmHCAWvro6bsRFmcBdbSBDN2JgC6voChGUkzm",
  "key21": "U6HR8tX8qXnxuyRtRBLgugigqGQXYACXxVjHcFNY4mJ5e5grKbW9xvpACuL1zJq9VEpTUxBuYS4r3h9Gok95K7T",
  "key22": "TzGztz7CFH7pW3bQ5JQvCDWW7xJdT5qpphgC2msFCi5CdQhKb1f9f1KVDM3pUoy2omk7NsSqqXhZB4bTsBWzD1n",
  "key23": "3Qn54gv3fs2eC12JGQQynK77H65bJzsGj8sqidpuvikcwRTfBg9g7i88AJ84FgP5EU6nDdvkZesYuzoGHCKmiKmp",
  "key24": "3WoTCMVizwXSw9R8FRia2dUHZPeQ87LnUMMcQNBwXBbXqCkfJucsuxG9cfPCrC29MKCraf5dqNbMTozWGnnLpvha",
  "key25": "2SyUae6oh3FxHcDDxkghESU3hrEsengcbNY6DBrCYkmi6MA9dcvPdh9WdAkuB4Q3mentQwpRQDJq2fx1hkhZkh4D",
  "key26": "JRATZRRTCzteTGFhr4hSmFHU7MPgM8bSR7BsoMFRST9hPZYHccEexNyTWqeJCXfLGoZ51NcEw2v5dgpEMWk8nfJ",
  "key27": "2nbmNuC8rkutgKywaTRhQ2mPWva1mntSYRJAMEQz8rQoE89kYftT8Acw9bRrzfXxXrA1RHQoKc4q3dFgMJLbkqLF",
  "key28": "mSoeY2BdJHinyXpwPDhGCTHpkirsvMpQuuyqAvewdRHruwSg5PahFJoV4FYtRhzP6DLH8s1GND8nYwqRgX8fG39",
  "key29": "27cuLDK8E6CMFbGQaHorM8SWis2HiHgzxGzTwTuM9vAEe71aGLZBwqgt8azXSe6MLB6rubQA9AtsXd8f3NRiaDnu",
  "key30": "3bDTmmgo1nNds33nFxnLyH9KL5CGW28D5MCNvoGNR475e3WyxK6ZG15eh9XqGpaLYW8z3LQijYhMr7ToDkxk1zsN",
  "key31": "4uLBpyH34VAX3Fmn7GFqmXsidra5nbiiaDSnbg858hoUeah71ZGZjCx5Aw9agTFRXe8mWqWXY5XcJxesPszcyKbc",
  "key32": "2CLpVZwDNUzkMz3FNv3pBcAMaNyeoKY2JosNNpYGenVYREZLY9RrY5UEMwtjLL2iP499cZUcw2V9pApdN4BEL4rV",
  "key33": "2XZWwgmFQXWJDujYiDmJAhUp9qby1kLronznQxbWtyDfzaPULcSDr2PZny8RNGYomUVyG6i4ZeRkQry2wRD8bezb",
  "key34": "rfX8hgwzdADX9g9eCuz94y2j9V1b4ukNP9LZV5x2932Bd7SZP7QNe9MUEDzyRP96ynGs7znpMDahjYo5GWasinE",
  "key35": "G9q2MHWdm4x6sj7GHEdNonY2d1YEXewgVVecfrVDgAjxgbF8nQH9XcPhqJiApeA4JHDu1V9m8jiRM4e571ZwuyP",
  "key36": "5XQK5LTvNtHDJe48iafg82BWsBFPjCGgAPqgzBYbF5FQqLXy9No5KbvfaV7sF4gGxZpEHJ27Uyx9NEtmcNHJA3Lj",
  "key37": "298Cdr2RBZHC15nZxjdpwVX5Yvxnn2ox9brVXGXtRJXVCTfoemfaZ8Xu1U9iAjnPz3LSnZJERSCnTU8R9Zcw4pKK",
  "key38": "2vz3JQGP446jszZgYKsvQ4aMFgoNjCT3bV5RUJncgBfauc4Bfbz6Jmddp6VNR22bAzNu4Tvhjnryzo5o9yLu6URJ",
  "key39": "5CkBHPzMdEPzkmziUiQBZZ2UARTMY7NGohyS34DBWFgfjRZEE9hNKX555rTeSHNZ2kr5rYxXfKHW6xVDJUWa4J2j",
  "key40": "54KwLtPpKFDEbgbwsoUqdMqf4DkarURZpYPu6X6vYFCjmH8tiUUwNKqLbUfZDJTEnkhEfQRgWDm9LG14QKo95aNy",
  "key41": "3ynAMtkLkkcLoQh95KCkUzf2E3HYDs3gkatDVHCgszAEEZS8omgnxVMkPWDXbVtSmhXb4pGJPipNBgFxeNoWVn3a",
  "key42": "5rEhSA3SycgKGBa7nzn5XPAnpjgaRK6eBY8uqXc6avQJeMNSS8QPowg1gmo2tmjwNTepzvbFyMYUhHaVXrrkWMkS",
  "key43": "47k5w2uj4oPzEqBgJPfZcfEZNbbAfLtiDef7wspUnX5n4eqyckf3TscEnuY78EDjQcEbqpNDoV1Fi54VtS1wF6zg"
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
