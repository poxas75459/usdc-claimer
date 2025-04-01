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
    "4E9zAjsauA3Eo873x6XXQLhi8kaqSQ8y9rhWVVnpAGwRbDbV9goSEyXzowbxXEMohzdBnZNyueVtimBZqj3qyVdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMvs3mfZBQoC1QEqM2im8me2HoAHMuxCLPbyXhWFxMQf3GxxcbJvM1HWhe7Y3DFvBDbdDWrXAKhtQWkb6u1WTpq",
  "key1": "32jJkzNQENmU8dFjyqVNrCF3xthJ5RiySV7dwvYQcnsSH3yGUZ5eV7BkbAQnLTcyzmTvP4ASe3DEuYLd9Vp2LzFK",
  "key2": "21aL1dgJwa1PqR6GrRFcQkJWuGKUqiHpSUhcM7P9LHEw7LbnEEJN2benCbgLELiqCwPKdaAzMEvc4CcrNsVdpi71",
  "key3": "2bk9bCfMwXoRbfaZEEnvoh4hjKmTfjG1izYwTvYzn3aHCVk4QLQD7seYP3VYYuEv8eccyw4xJnnL2gjFqQshUc2y",
  "key4": "2VA9mqMgmNQcGcq8uaJart91HsZdHsRpuMXEiy93gBNwGbep1yCB3ajmPwmvW9qjN2yL1rLpeEHw8HP3YbzLyKJW",
  "key5": "3ANuWYeASHU8jgQunwGw26xtgfnNDme9Y1GrjKp5xVADT3XekjNZeWs8PiFNVsVfkyXBRSStEbic1Bn6b7Gn8mQ2",
  "key6": "34q8ysoSqf5XdkgvBn6YjBADv7bWVJkVyEGzMJNB1TQMrcKGpgjqcmH8wH3cWpkeiDqVYmxTjdRhgQMbZDT6ZbK",
  "key7": "3YJTPABXwdEzy9dBJpWYWuzEeQmsYggECtgxqdDR7JDjjBb4K3vtwpzNprEsQrdWsqkyBqSeCV8ZNpcKijys1r47",
  "key8": "5AnQemdKsZyyzwBdHtxThgtfMXj9kZ8DBxKkmDrNeMG8dyxoicy47m4A1GXkdgHNHFLP79qe7QgMc9Bh1jfrxMS2",
  "key9": "4SEkW5zLWJskE3pePQdMWKAfZj8Fg6oxe8fQiUMr1GLeHK5XhYX9ARiHS5KzumDnJxRts1qYLLD7MHBmCEsWKc8c",
  "key10": "5q3DJAiG2m71mSrbZbSjoeSt8ugKumvSFkTAbAiz7JQWd96rLryU9BbyDhVaWExFeAEDTtJcjEwE5K6LLyedyM4Q",
  "key11": "hLwiKtAECsZNHwN6iUZM7qiXmNAgNxV2Vr2BXdgGpfq8DpZmcqS4WhtXMTZ2QaQpty6jwMmkfKHpfL5BB2dWS18",
  "key12": "22GBrcBsUKGKDAcN9pAfTVk1tCpNvuLpGxDpn8PmtZr9qqVhRHvPKsPBAn5J3uPzMvyzBmQZu8NqoQEGoKm11sTx",
  "key13": "3DAPJAJJzhmq7b8AfdpCybokWJySaJof4Xu9GdDMcyTGKP4QQc7u9xQYJA3PGfTEYjDGxwsTSCXRTbWoFDFpNfsB",
  "key14": "52itPiCKPgBpeUfyqaEVupsdj9EPKN2xr1KzFVDFWpHGWUuxoXDenTUyPMuC5NrphpaMKicK2Ze6P9D6QCYKefWk",
  "key15": "yCDUUYgWVcgXqAyW3D9oPUC6skFWvbQuZ8bKQSqxZ9ThJ3ntdhmZx2ZEpemCGrWBQuBqtjnuFuffwRNu51t9ge6",
  "key16": "5xnmmhKgzVXc2SmCnqZeDYQrCx5xzUu7JjijtKoNykFwVAVA8k9k3YgthwPjY6WDTKH7TJsQ7hAEwXQrvroD7bA7",
  "key17": "2sVjaLSb6eMYTW4xmKUbeZqc1PAvzEh6moEJaF7whfwtaAyLr8JqgzRswv7DDCea5bKGtCo9PCFeBNbpncD5oAj2",
  "key18": "4CvBHuMtts9fnjKeLXWhwNCngVugm5H4a2dxfGRjAeRWjrXkkCWaEKRD3zWExYkDyai2xQdjrZiDRxchSwJPfKa2",
  "key19": "5nAf8Y9B6mbY3eJm1wTL9Bz63bwmPqurPBXcFdbWeLVahQHNkuiZu7CShhyhnoup8oTb3jj7133jGmgJ3YvVNxWV",
  "key20": "3AEdD1RzmwzdgFagohYgSMk7eHkisJ7RtNc8UjesGT9VU47bQgjAok23p1nMW1dmVNMqidiqhMNF1cRzwwo2c9hM",
  "key21": "5PoToWPXFoA2hXjwVyJAqTMxhMdnh8itgH1Sr2y2aKq6GyBbHf54B7gscMN5pQRd5BmtrL3mBExvADE8PU6JJCSM",
  "key22": "4hstG3Dtvwwng4gKjGEGs6CBiRnKs7apyF4o2X7HoXn7cJEevDvD78ZDrRawmithHCGUsC187ztjMKDWeXC9Fwb1",
  "key23": "2NengdCxpeQhA9egyoQh7ikytSb6oXsWJvYCCZbTQvyZvr5JbHzGmYKdcvAXEGV1z5cVUb4yFyTfkps8b5g5QDnM",
  "key24": "37gQNTBK94d99iHrCMznXTNuwCYckEsjvVSVCHJUR5X46kQe6bew6sVEbnNBdPSS5zFujcdts9eDZCzUEnKZjUpV",
  "key25": "23uqPBf2ctRfVGvZNwUKK47VxKLzsK2G4eXH24pDYzpYDaYkLVrru2tiBJ1prDnzraTrNDzrLB85ZyczUvtmLPq1",
  "key26": "3NG1H66cQA4B1yyXkiwVYxHAVf5ExDDjPnDfkAPmiXJjX5UimYWexoVWoAtuDQBnQgUkVSpueNhu5Xmpg27Wpwf3",
  "key27": "5ifRDySEXbyUbuaG4g3idxBcPScqsoEEq6kBChQYASDBbi2AEFDHH6sJ5d89TYoMi31J6LZTHwycSBUJbmLha4Wn",
  "key28": "3MUJeGrKBcPSk8fmhw8WgK4epCC1F9B3v6LsTnAN5cf4g7fM3Vcti5hXB1eBXEEQuZRWuGYh8MtpqpKpgcrUGr8P",
  "key29": "2mvuXwVxTKEmMUSpLb3CBCSxoaDHFLoh5AE4mvhrNU95xEPCAhtHpxBZ7x4vSyZGyXV15EoLa2KdyhcHv8YPdXR9",
  "key30": "3HG5LLEbpAmPMbc1gNDLVZH9siJtNv7oUu1uFcVLPTUuyKvJ4DPAJHbyZr6dYd3g55dCgzdgiFw3DnZSPZbHr2VQ",
  "key31": "JTjtHebJEvfLbgZULx46HfrtSKrP6WytwXa9wtQEPaLryGQrqP34aUhuhKZqbHCMgsubAvFZEoC72H6Ti26nUW4",
  "key32": "64JumiFhuwPsHchVxaTx3p5wpnDZErkLxdrmupLbq2VTsEVUPRurMtdoQEvp1r7XMGFXpY84tHZvZABqHXb1kgz2",
  "key33": "5dmQNorewJfL2sskBHBhmjRPdZtPXNx7gEcNi38zYVsXTY4fLRDrhN8sSMDCKVwoRytzASCwxFCTiGPBUc5bBaau",
  "key34": "3Q5oPTTvm12optLR2ycvSwDKXHzr3Z5SQay6R1ernjMWEQ28UZx77jRouKvkLruoVcyePGzKKVQqTJ4FWkbEx6ZR",
  "key35": "359Ho69Gb68pt6wTDBXmdPVPvWaPosJJJd6PNCvk2JNqmHeGCW6afx1ZfSyKkS6DHu7Qgue6kbftVyMYu4ho1xsi",
  "key36": "4yA9gdAhLV8ZmYzGVBGNiGjKGPdqnfsi6AN6iTxa833HavKNfSCxaSuroddQ6924GarwhameaZLv1pu6zAd77kfP",
  "key37": "3DMZxJygEsvT9mxo83j4cAQeYnteTy3jABiqeBVKeJXy7b5rdezaywZQZWQLpuQw2Uf8DhAohkpVt9KwyDjNuKkx",
  "key38": "2GjEh8wWpHxYjvFMSDyTguqKRvxyxyVzSr8U7HJ4AXccpiuVPy5edVWWAg5fcVSLFg3HVV38uQcRPaRQvzGHQZnP",
  "key39": "Aoy5Jwea26L2QrorcqmU57WMwLXMu2HVWnnTpo97xoPH9L7bqooPb8HXQeeeAQR46yvxAPKARAdF1SKi4gVDXwM"
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
