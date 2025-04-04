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
    "5ANjXdVr8DL4wQ3kjKzijXp134XrC7vHioMSUu8gSQm6QGVBNseLhKWxwZeB9tZCgjCm6kVTWUkKFGp1iDEkyAuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNshmavjwV9N1XZDZqfJiYbUxUgGi9o4DbeHJsTDoAhb8Jctu2itwCg5hf9cvgWsmSafETzmtS6DWziozRh14AA",
  "key1": "h7jbon7THNUENkx1KRN1UmnaiFjvydk13sjEESdt9QCcJRYepPD8DhZUEUbh74TrkNstW51Ykg83JdkAFhM8wM8",
  "key2": "xedLkEV2Vi1UsPd3FgnNkCAuvxp9FFefDdpn61pWRjszpjwcGgrQ2Wrx7WaDbhkQM6DR7n7GggEm4L8v9muZc2T",
  "key3": "3WgaP766dzqNjo1qWyuc3iHwRM8S4fpVg2X9MDRPTwYpAxEm5J7TgMHvUziakborKEWsSxdFhLfoQWWvH4PNv9GQ",
  "key4": "474GeyvZKweMSFxgTZ2rm8aJc1DSBJuiTs7Xkp8NspGkf6ZuXuNNxD4RGRy2uGTfSKYfRttqQeydTdrzAZhmcipE",
  "key5": "5gKqzVZdXkpMyVheh6Ft15XzdTxd5wCiUL6XheMgnyUfDLjZLTteJEjThT3BGaxcF9x2Eps6qqNFQYERLyLezFaH",
  "key6": "2quJxucSidP2ScbfkH2uJszD3EMtJ5vAbDSNN8SsZLKMMyhzALAki5VS9Jakdi8bxyv2xbaQHkQ7Dv5FKKAdWUjh",
  "key7": "3vAfMMFTVxCAiAmGC1Tvp3Qtn5zdMmSvydRomGra8peyqUzU3hjKX6VH1kxFm7dWcgBL53XELxCrMSw7E6vzWqbR",
  "key8": "2vdZApVAyJmTrd5gGHscXhzK9S7r3zCmkcG3kGzzvmSauh6nNmoxiVnS9SbnY2UJrmFLKtH3sFjDVtzq7nPWZW4H",
  "key9": "216xUTZ1WymSDofekYMxETKvWjUYLd4QdxoKUkZx33d64sQZVcU5R8aNLL4VNq2ZPA5E9sC8rkzCF5WF6UaNnD2i",
  "key10": "3e4X6HVu1g6YsSRjvKQoxamtqjW3UtUVXnee6z8CFpfnXa98eQKfJwsxshi8biMzLt2Dbqv2ft89Jp7qh85hQoMm",
  "key11": "45CtdSuJamWE3TnEgYk6Lx1BhRYTFWhVCUumFrLSQRmC8qurYVifaM3PKSKK4Wgcjptpjm8JjT99uHabehFwNggn",
  "key12": "55D1wJZ37Ae4Zh9NtadjBMe8e3jwWRDyFFCqCQ6wRNyYzWrVkcJdw1EAttCFn5dSGbK28Te7zRn3CPUEZZ7wznPn",
  "key13": "2KsNCQLEWboxa9DFAR8sbAf5ZVSzXZtGVZ7mteNwHkY5Q7JJNyZ1KgCexESqrvxA7dG4kP9yu4UpvChU4c5V5gAy",
  "key14": "57zdpBf6jjerDxG1nGj1auLnX8EadtUic5zMV2PkCCeHcKZujZ8A9zB9QsYG5gYuG1JqjbBm6ZoSoNUyUZR7Nw83",
  "key15": "28NMPR27bAEQaHTWqz2d2pZW9dfdFvFBWM13XDBLbpMf3gWMHxetUdx1sGgdLb1u3XVtGuks5N3JkpoXgDAWNQzH",
  "key16": "317fsDZXyzok2Y3oQvETqpBXLxNW6K6ekc55c5JMprBvmJxWtiTdfuEk8hSnPiyoYMdg44nxqNFPFnDSj86zaW94",
  "key17": "2m1Swyzv8bMy6fejUP9KeLbBW7mAGSRSjpARk4ZfKcRmY1WDXDqeERtsrPPMCvC1yQnxws4p7n7R12nzPQo12L7C",
  "key18": "4R4Ec8MA5ykYsgkv6cFiAUDZm4JmbAC5cGWw3dEatCeDjbYAQrPZU7K5SyEHkXM1gsWTXf9sPKPiJNRyJYnwVfvW",
  "key19": "2oQYfDqjNh7TFgbGBZY8UW2BMpsQYJWMCtoyCr7nsakCRvoEZ2zDd8u74P8uiLBEtrXyBPw1kCz8NRrSeLf4hWeu",
  "key20": "2TqCN5edYVmHjPPqbvXus4TfmuBwnmpdAbnwi8oKXiQDakc9mnEAeXdAaH3bCV52TTYjjrs71BifhR5uYjmuMGZ7",
  "key21": "5wPaFC2aawReADUJr7Bu11kJP4Zzd85LG3cef9q4uCsitt6mgCMmv8bQwY7ezcwxe4G78rJzaiDWX5JaEN7qtVzn",
  "key22": "28uvLWXScWUY5WvaipJbpiGNr3ju3KeYK1tMfj6b3J1uJkkJe7RMyzj6k65g3Fmu1ifW6sLd59yFTfPHxRHPvhea",
  "key23": "5CJzz62RH2ukx3NZc8ofg9ZAg65ChGzWat4HLvPEVden588fNQwVtfGTaStn84T8eKVCrdxvYDp3xFx3yBmYNTb",
  "key24": "2SRwZhLCBBqmLU6w9vtFk5TLkyFC43rYFHWYhX3NzLXzG4xV6SM7oiYFv7wSVWCPuGPqTNkLRjknXLgQA16eetTh",
  "key25": "4QKuvrrDpoHDkZ9EHZoYpraAE6dZm68XNFj5r7yqQtN1r3tNeFQ7yxaZBX1BBYYbFtbk6uwqyEd4sRoSjy8nTAc2",
  "key26": "2SCknZ3PT28qSS1niUPVkJgtLWDvaymWCMj8MZX9LB2MaZNupqdk9btK8vUbRUnH9b5JRDdReoz2K3a6cevfki8D",
  "key27": "5XkbJibjwNVb9VBkJbWQCMcraUbiViBruiga1cUytTt4GpA1mxaVR5U8sF7LRiQo1Q1XGjQsfRXmpfiC8m6VbeWy",
  "key28": "PbMeARZ6CsTfFoWAbiXisaRVNovXqFh5pfeeuYq3vvjgYK7zsTX5dsbyRnxijC4nNQ71SJFpgr2EE8BHaY8kBPN",
  "key29": "o1QvfioCzmPN9BPP1958qwzhz6YpKTWLdUySC5MGUqZMZ5doGw7JzcuEJFJDmaLg2CdwW9Skv4aRATuMRBwHXjg",
  "key30": "4NaW5u1TUPMv2DXDpvYhucuJ59eC2gkaZ8YzgqKGuyhgQct4TTxwboJKbzUnGu1bqra1AeDhfXtbi1GxmuuFdcBf",
  "key31": "5F3hMkcU32m3CUrbcKsUKSKyuMu5gnDScy5v35JzEctE1F4Vzgdwa8jwxefjBeWnM5oj5EREam4tcgvQzDxvqjth",
  "key32": "34w9TTppen8G2HmoEvqEJi1mmS6tuTSHfijiJ96bqs9ZgeiB6Je5yrxKRW24bfmBVvXvp5c5fjiZMLf9uxir26Kq",
  "key33": "4W83sa2F1NioorRDbxVDTrMr7CDedXoLWryCoAnos6DpdQzqErfbvcx4r93KvCMsKViQFArfNTYC1NwkYYtDyHe6",
  "key34": "3QAVKeMKpUcKLb14Xaw2AbfzKFL6yVuTPgM3qPct7NBYNwawRTd6URNDSipyMDQgwwcpJV7r88ZUsrCwBqhTgyoT",
  "key35": "2eUG79Y6i9913TEr2TGTVLwpXwEfdESoU5DEPfUDftB5AQFhRNJNCEvjngQFd2JMpbH6xv9p9gLaqenXimvAKokN",
  "key36": "SA6t5fDdPKBSg5ffbadLW5Vu5FQoVpbBxJi8P6x45N4vkLJTNFYbmMBbVA6tbRSi2nriCf14hVTyUFZVUCMJXM9",
  "key37": "2KJtwAp4Jo8LttbwQcfXt1rvX5ouqT9Ywjo2w48jVXfrxBVcCxWXNpXh74MaTjYHcnf77iR7RQAsdbhfxvZY4Xbg",
  "key38": "5Zs4tTDa6y9QGmadtWipWGwLt3Nz11B3obs3f2WC6UojeJKZTbX94K6PbZaN91E3fFQQBAnU3DmPwzbfjkXrm6wb",
  "key39": "4Mru1onxRAabc1dZ4W9jPocnfjyomZbsvWyLzNLkFF6rybREK8szmh892xz5FVxqwnCSMFo5qBTTKsEiKRuDRgUD",
  "key40": "2pQfgpyG3AmRfvxSRPqBa4SDJLEM1ddXiq8dznvkN61McS9ESQbb29XorrpWKT99zTULRtCa5qN6ng9ckZ6nAmCJ",
  "key41": "2K1cEpYirVndekLkp6efAwagwqbn5VpynDwf2z9jdr87bhRoFCwCESCmT1Y8vrH5nY1KFCyQovLgpruXeYc4MYHK",
  "key42": "4K41CNecqsqyYkcf69DguZKZNmfYVs398HU8sdGRpvq4VtAbMu3iQs1dFrhsbrtXmMA9viaso1XumPT7yWoi1rba",
  "key43": "7TBRSfBAxH4zGRKRDvFuGbTp9buKyey2J4ZVaRGPL7kuF1244yDTCyHEn3LPSryKsKoVurUCtcwtexXud6wjU4c"
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
