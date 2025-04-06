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
    "AqxKGYrrELwNhkHF6navRswrgX4sXLZrA2ZVHQJViyHw3WSEEgRL4GYZMZS2tnkApZM8Y8L26mh78bXNhNUFt2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pA6EPDztWCdL54J5DPi9XwkMtUbEQs5PcXFV2rhc9Jp5eCCtKitxXhHwpFKQNpmy7xwyjprsuEPRRGxyVvX7fs2",
  "key1": "3v1bu26697geNiXwzfZBeW4PEt9TeeHZf19cqbXd3nsoPt6w4Jw3zt2stu31QvFneNgxTHGCA1tUNcN6o7J8yJZk",
  "key2": "5Rppt9b1aPbdju7T7DRUyWxDeivYjyDbuJsXzeG5Ymg6mvJKrzvE2jyfopQGjxgb91DRvpokfD3YVayKgEBBrKcb",
  "key3": "2pk8GFxSpbT4qhftnBQh3iMLTvNDmp5xaccPZRmdguavkFQinRnGndyLN3Ub6o9wKNVJqcRLvD4aikhGLJPNMUuq",
  "key4": "5AX9BTB6TeVBcCfD9jShVv9zSFDsHnaPPZuUv3vsa6KsEPAw2gP5ALuqmqDbJrx9RXqiS2EnmBGJjEnxDhhpChrr",
  "key5": "5k2sk97tsWV5YdAfw5bp7Bu9hY1jkauToKBo3uWpFR16r3rDj3LvP8TiSaSwYvUuWVgrtaPXv1gdsFfJUfQ1ppEW",
  "key6": "ZLhfckBSpHF9txEDcG137oqBJzNentTgD7XDKzYoLr6NC7Y3YctAHCr7rcthh1Y8YoNXU3snB8cMWnr4D9bLJxo",
  "key7": "2KX2xNJNk3nUFa3sGAZKf1fcZYKiFCUmYX7VcZfJRzpSkFTDh75aNYT2V81YK17HhUDbW6WaArv6UfDtKAavLuiN",
  "key8": "2eeV3fertGwnjYbgU4CqQe5FcLFrUfKiihC7uhQYisVCbDLERgfZ14xrnKVyDzfM5HjUbhiquAtFpz6Zy96xfRoa",
  "key9": "3ZF3nD1gXZtuKrhy669qRo2A5Wu7ycmvQnfacuHcjhXh2TWRcpdoaX3GVnfaTDqWxrxKZGD1rFJWnWAhWZcGBvjQ",
  "key10": "bRV1LqLEApWKw9VctMtU7dg9rWuonesuFQpzYJMYwgFSZK4zNM7aGMhgf4Fm3dpWHKdYUNt189t3WSaGGLctjvP",
  "key11": "3bN5aEbPqRMtR43w848Ej9rf3teCzuHN9EtE9kWsqGQeFa4GscSxY6GBLR7vvvx9xaeZRFKJH4CTDq67GgvhoeFf",
  "key12": "5H7KgtS3b78SQVaRxvasxFjCKeStSTXRqESGPQV3kRrwAEuHbrBJkhBck9bUugBhGGdtK8FNKFPwDaaegKHHh5Xa",
  "key13": "EJW9MdSKTsnv1wDEwSu9CBFc2aaG9sm2bijT3Z4D45QPyt9B3wbNTvVXJigcVeM2YEpMBedxxAEAj1JtHwenYb5",
  "key14": "3h5WtirtXcBp7iwCnusxHQ9HHHTSacKYhhThy3zBzrzHH4QXfPQZ5NH4c9aGDBnqMTamVuMeqR94Ys6jnFVi7ZZU",
  "key15": "28Ja6QWYUcgksdMs8YGBNtsgCsoMn3AnLTKUTg741DNYUNnC1Je1CYhkMGWJKwW9ymnycFN3RdUL4BNVxGtn1E4z",
  "key16": "57VyAmEixSDLrVPrKbA54vSeB1hCGcj2FviCsL7Mdwn2nL18hMDW7AwhztNQwYRQtmzPFzerJoB7xiYVZREKsVb6",
  "key17": "33q6zn4ysrJSSyFxLfTPuQ9FKWWdWAy1WVNvzpS7AR4wtzt6D1zsmD2PNmDsvoCA3Fgg9ztWF3TGGFBgdJ8Sdfxy",
  "key18": "4SiTPF78eKuxixaYvnD3w1RSqnfJV5W7Nd7dGS36mfpmTFQK9UP3jpPxG7hNf2ancuTy43BZo5QjrgbAoC9KZato",
  "key19": "44Vg6J4tyMkR7GKW43gJEFEfruuYznECr8VTphRobCw8JQtLzyXXtsYpssTuyapQZRWCm4Y28qoLrL4dF8z1wJWr",
  "key20": "3Zxpb9VdaTqKbmKPVgLXApLcuCbvEEte9mbDKWbkD4EDN6tWjaJdrAASYrdPSHJfaSN6KEoJW1Hqhq97qMorFZEH",
  "key21": "5TVbtmXnytG5JXEn8Po5DRRFbEtMS3QqY8XAtckRZhbt3WeBKYSCPi4WNkgCTUvFHfHrvjS78a4eTFk1Rxrnt8BG",
  "key22": "4LrURkBHJ7A75m8vryAeW1eirzZdJAaPuj2UdWMPKX2Aq58ips2Ah5Lw9EJK2p6kZ6dc9G5HdpbwCyyCAXzWWgxN",
  "key23": "3LX5AqCWPZpdekoBTu1gCVm4iEsCgPXBCTmPMmuSRvkn3kTyXSB1HobhbFnZ46npRvKEm7FaUsd7stzRwjGxEQP2",
  "key24": "43U6bmWRk6J7WAyz1fsdhhFddQhN5T7EZM8tWdwc4Hpi9JPUa2ZH9N6Db4fyyAfWiYdH5FhhxMrz9jS4RrZHqF78",
  "key25": "3xxBdhTo5ewDB7ky8dPEGtLWXJ9FDx7X1MYWhGApM5JgRKjifVcHdnYx9oWxuPmJM2ctsbMm4rfHTXDq5r6F4bz7",
  "key26": "fnV47WydNwssUCx6D5JE5cy8zVgN6zCHNGoFk9HEuu424eW9ZqZtuR54vLweG81YpPBZP9Z7d3uMp8UmmMPyHkL",
  "key27": "nENC4EggHRkGyxfkZbWbFsh2rRdJ7zFaub9jexJAGLBHjyVHNzrtAZkLYPGeHs1zC6K9MbdGTaSJn2MnaUrNBxk",
  "key28": "2npy6AypsSTixhTn29WoDTRoSm3QCR3Dm24i4ADJKMuBFDnKmq5t116J4XEK54pYqX3ftD5Kx6HDCSu11giPR2B9",
  "key29": "3ojvuAZkAFcQFNpaMadiSSEYATTGgeh36B5SaisyjP854PD4DNBSxecmcGvHYQnnUbQEdMFvcenpnCbKi9mmuCcm",
  "key30": "24rBhcQ43yg4L2FBLbib16EzqtYGm6nhaXSQJhoMxphu3gYQKNk8NHVGbrgEbM3F9TJFMBhLWQePDJgXUvevx1o8",
  "key31": "5TnAuRhnbc4o3M9hDxJQQec9ShqJJd8rh2HzdD61XuuKY6L1P9mSx4Vms5w2H7mcoWMaNmizDCHHaJcbc4H7GxMb",
  "key32": "axEcxi2R7jVgSVLbyvAjcVkwMjChA7HUN9jwqpKm1cdFP2Lzz4uyXRDT5qpHn36krEpRs4ijUBbQzhCfAuPNFMA",
  "key33": "RFrF95QTzUdJi3wvGd3Bp2HiPzP5VfgAZQe5CjcwQoxiL7k5CMhbDU82rckxkyunaW6J8dPzxgaVnSVyqZwAhpJ",
  "key34": "32xC6LSAtGd3vjxQPDuXVwtDkUCo532HdrfN47zW3mzNhAXH4t7rDwHecPBMN684GaTKfYLjKHgaeZRUmuAAsSU5",
  "key35": "3N8Uz9wUftxQBy1SqCKHwP3ucyULE4scLHq1CAk9PwsoA1ZBdBEEaxqTAjf9mFgP5q7pz6FMtJi3A278h7yZQXuC",
  "key36": "62YxLdMghFrdnWZFUmQ6wxV6od9Kua2gUCMN9d23ABKFzERc4WiCtRjhMiLjVJqiYx9TNQmqPA9fxssaBQu2PZri",
  "key37": "64DhNPw1X1RoPKoa1MXdVS2D3hxsjaFEEVG6tjKa4WfoUrh7bXMZsRZj6qdeabAN5KyPfxTjMmPJ5RbeueVNf1Ci",
  "key38": "4rkuiREwH5kT2VvTR6sSQJ4ZQV2aRUsXyswPgFe5uPdNZFA9PmC9NpwLoruWYx5faxdr6YVgHG12YmJaqWBSf4cs",
  "key39": "4C73UcFKPMWk8Ca2JAa2PtViP9pue3eqG7pbrKc5tkAgkbw3GvhuGMg3wqG4YoDk8EEi8V1ES9W7ccQi9r5YwduG",
  "key40": "3LcoTVUYHcBQfjBnVbn5m8PUG4EqdvTedHyYqiJuKKf8vz6HVe6a1f52KgAP2guNMhndsML2nDQvWYmUCD6xjmJ6",
  "key41": "5uCh5eW87nDfEhQzkD9ajsUak2v8GCsuAK3mtwMeVdX7pex4dhy3cRjPDdifgP5rHUx5M8bSRtViTHm8M8vRUHfb"
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
