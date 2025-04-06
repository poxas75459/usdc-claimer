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
    "3XtJwsqqRJcyoUTKrpNVPkvGV8xrNNQp7cuUj28j16TWqfJ7PoXSi7tqFRhbFZu6Lp1nM1TXGJyTSiXUteqf8L6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnnYG7QWV6B8sgWR7qLqE5z2EVtCuwsZuaEhxjtrurjkj2VNaZnuVAKsjv6xry3mpadGA9NyfR6ntmwt1fiytYk",
  "key1": "3wRvr4wFVC7KXotGp7YcVXK68Pxx88bkgqPc7qWM5NgJB8P1zUL9Pryz81SdKM4ppTmGj6UqNbPRvBbsW31SVvWX",
  "key2": "45GFB9FyngtZxQCQ33iPpHRkDjHXZyn9SfCPnf2SbqnsPSPCHdpypGpHNWdwo69KqmLcHDJPJjrc4KUzTyD4pCLR",
  "key3": "5Sc41yqm4VowDEiKZZEjKfjN9o7XWoVLjx32uvVjVkVFbZvjnjM2m3XFXuKotoUPibfjNNzPZakmQo43WooJ7s6Y",
  "key4": "5jpdaGuyEMQizcpyESy6EXyWbNuFVfxY6ewZtABzSVgYJGsHvUWWYnSBQBVEDcYWLti1bHt2hvPadWQj4NsZk7sG",
  "key5": "5VqFyZNY2QaFXVqzvySVuB56Ss59WRxyCUp9CJZDgeeVxWLJrBy5TLWyj7JGiygqZEQmVqcLp8HuFFXfY7KZHW7J",
  "key6": "3PQFvo7He96WLskDPaAfoYJW3TiRy6WgTeDkn7UobP8RXMy2wArPLr4wMrFbXh7NKhEEMqKkXCPDrcnmBDnJEGR",
  "key7": "3RDc5udg7yFWvdQ31nHUBcpfKKA9BUa1Dn3WjcWX2VJjS3YAoQLB4wAWdbrnmqJdsi4A9aAsvgfLGJrZSEakpXS7",
  "key8": "2rceTVDm6pdpFzYsQ8De4fjt5UQK4PkMQDDFa8PwuZvTnb4gAcX7AATx3JfUugnHEENrS8d3vQJBCmRsPDepPXvh",
  "key9": "22VhRecfsr7nT3EcxUbjiU4vww4PdyUMeMwbrJToC6oYmibhxCqxNGLkGrkh2zb59TDKFKhhRZ3MAVqzCHevQyfA",
  "key10": "ZxcPqToVtGiHr87aJEzQG3dNCrDdeYGYArbFCyirqPrV5qBViCqQNtqVA5J21BT89wEsmXd6LPwAXbx5ytgpHef",
  "key11": "2p2kTfuEcdBV9LiaRsHCBoSwerJvhGyZrXBFDK5697mfJ5uJok8WcZixNHFiBuacCSsBWGvYRBJuuHcm8sdwMaXG",
  "key12": "2bd5bCr4AkJ5gKyZRThSXVJvNkhvjjyxiChK8HEiNSUTuAHqd8FKgaQovv2wdgBZZS6HBjNZQ7WTZ3bY3NTAkNSd",
  "key13": "4Zf1UmGjY9THSFfpB7Gtd1m5v32zF9GGzDJmn9eyRyCDj5cC2d4a4cMKacFNwSXGYtwPGVndiRLE1NkvXdAnku5F",
  "key14": "2e3snMytspdnuKeHaWU81TdF9bu7A1pVgVxDEVctcyax9u5DEadTa5Q8jyytJZ3i4GCEBhDAQ6ccjm2YvarrU56o",
  "key15": "4wkg6NaZyECoSfeJqrKTU9949Psi6f7ZqY5qkPCKAox33Fx38GffvAko1xPYCubRWRsqGR8vcjDJNEEyz47qHTZE",
  "key16": "3GMH5UubcMxNhkSbRrSDYa6iDevRHsc42hSWf85urstP6w3djxPm8Fn21gbdiH9LeqViFQN9zqzfzLFTWNoyQy4B",
  "key17": "59g1jbsSeSpr9KFnaLyxYcmnUA2CuhWmBFuLErWBhgAwd6hq2vHaU4Viu6d5G9buc1QKwA5jJw8xocz9bkzYdSxC",
  "key18": "LAe3Jy4p1zXPGQnzL3LX3DL3yCp4uSFXwzAJFxDA25M4oY4gUmdu8cmGmquw8JykevqdECM6qt4EUL4uSWgPYLH",
  "key19": "3yUejqQ1LJ1M4JQVsCFZJYVdLsFEX7Fyy7b3xvsSpBDkj6R1ws4zXvZBHA9xPVHjQLQyr6PHJibgBo9Asncn5Ngz",
  "key20": "isxCkMQgtYEJcMjx1sEUMBrJVNBpLe7x8zCYfW1qWZGdhRwVhAUzqebhk68BVikUMcSRdiKyTCUXdvjSRE6hau6",
  "key21": "Cp7vTnJ7k1gmfv4vYrmYVgT58Euaar2ysHK4oAvb8zPMRNRfEqPwQ8d9tVKMmgL2k72cwr3tXf8WMGhAtJ2MjXx",
  "key22": "5sniT9AA9Yz1CMyWbREWTkkANkKabdTR44wqY8DHptAzLptzxm4otNLeXjiREX5kUpFqrAQ5PVUZWNLa6dNQrY9W",
  "key23": "4HFasadLTxfwgzJU6zhVPnK2kRuJhH9tr1wSdTtvdzHcUZejtWQ4t6dRfB9Ya8rCt397oPbDzEeyoUcmJp4hYaDB",
  "key24": "5fFMvqr52Kvf3mkRSeTHRhhXGkHD3EyojayWyTUrGjS6MXDos2YpRQkWsfEGxBqTjVC27FdoTiP2f4sgLvxqQkvA",
  "key25": "oTw4FK8QFoqSAsGzhchwg51uGkygRhXGzuqFr4F4yY1A8QeRbG6MtSgnKr3zdnARTkP9vxWXMAroti3q89LJy6s",
  "key26": "4xUMkNWpsFuLkQPTvZzt3yimPvQbvFkQGgoviLKrKXFDs2XqKEfazs4q84V2aGudhgJkgTzNctXbYFeCkwbVS1VQ"
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
