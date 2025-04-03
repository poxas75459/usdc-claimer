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
    "2u7jBw3UAyZn1NMiJ6xBiiApLXyfQkUQuETYh2HPwZekNTmHRQURjbfg7XyPb1JUGTVxkgK1p5LiMTbvnaynC97Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MvNvKNcvbMF94BWmak2AVHd9og7AjRPP6beVoXr9SE1vu2mMaSfBWnLhdDRmJ68tHD6rH93oBFaXNnKBcoNP6mZ",
  "key1": "4Qtef7EJW4VpQbQRYZBuGyAazNfk7gENFsqNkcSfG2uTyG1oTR8z2CwqAvdYbFP7Up5B6SmM9NvSRNz8D2MNY7Rg",
  "key2": "k67ia6LfikAQMUtuJoA8J4DvgS9FSKdHzVsuACuozNF7Xah6YKU3Uk2cGzr48Uu6HxEF17MrdyJChGVpjttwV3V",
  "key3": "45QdM8EJ4ck1b59eqGCzhbaHNhVmVVoTSfW3Ws98yUeSWeAHskpDK57WpxXuDnzweEdBv57QCxSx41ouNfBbiSSq",
  "key4": "5dbqfdPb8skJV49756XPeXYDNiqXHRu7x7o757LJebpEGYEAJex3BtTJbwpUpH8vwagc7WJfJaxtDhoRw1brBwvn",
  "key5": "4iV6fEmzq32aXyrSEPo7SUdRf195C5BJDACSqLZq3nPk3eSAz9rZDLqmvTQjUa2o2ZQgmXVP6Niruew7FR3VFVdh",
  "key6": "61wrieuVRF7uiozsGW32Hmj1FGArw8EX58xrCFUbfvmR238nHzmyWNzGSCX5XEzLZFwNcyd6LaKrwnNHBfipYnX8",
  "key7": "4TUNHQwM2kDb9cPqdFdavz47ufqqGTCxZGEb1TcqyeLCt5Ei5Xj7Re1TtM3ygEMGaSziabqdXWoE2fRsBbZ3NNn1",
  "key8": "C3Ny3HPcx86DJxNTw4htkJ5b9Cvcn7tAU2vvQeunXvqh4jaEXktZmapgVD545W1Xh9AJwKdNHAH4T7Kw5eio1hv",
  "key9": "CPqiC3M9pj6cBPbSV27MZJYsnNy2yPRojb3oZBskvJj5X696w5KYF7QHdS684ANHpuNHnxb1pmUcK2R7mvgJDxd",
  "key10": "3JJjZsjKL4MLbcJ8PotxU1G1QW3TTZW7jAdz15YnGkh6BQWW9fbyVtfib9LFbiXzha76ApL1o8t1yodNA8Q7NkSj",
  "key11": "4YK3Q24KiLRdEhHYFk1GJemHuzPVxM9FSko4ibFGfu9cEqJ9L7weT9GmFY9z3XKkuEZVbGJBjJEd2oGmHV6koAf2",
  "key12": "EZm3AvEkTcqKantn5FRjhK9FhULB98a5nUdfGrmCWMfCRqtPUCw3298maJB3ytCXAj53ULtTEKwa7oRgqBgWgSX",
  "key13": "289VFgp68uy2Y9pfEAog8X5DyBxbetK176t3uQwkfNJgiStvLZ6BkBB3pXMCFzG7zVS9jL8JmsjEWXNram8cgJAU",
  "key14": "66R3eQZ139RNzrDLkzR8aLKjpQWyDDV8m4qNNb6p436iC8rNUPNRZSJVW6oARm3KXHdmYwkyGXmx5e4ScYZvJcXH",
  "key15": "4fKfGwmRhdnBQC4Hd2vfvwsqNU2CJhizW7HJirjB6JFZDc8caD4sKWuwa8GYxSuqevvLCVAZV2bw1b3Tc9tvbPtJ",
  "key16": "NVWVAR2YnoQNYgb6DF9G6bwR5EpLg8nngrM2LaF2ZUzHvETwM9BqbB1B2grkGWdCUYkrniQFmKS5gKD1CD4AGjA",
  "key17": "2u9HQ72MZBHFE4fWRSzWNLZDpYpFdH1jRQGb4Yx5XxbrHtvXPvKnumCi96U9FveHtep8ojGQsphPjzsRUFui1sU3",
  "key18": "3wtruhoWvxtvrWYdc3CmHdpNZm84Jjkn3cqzvYHbgptkCfB9Ni81Q2poVW9mDtgDSxFMRxw6YGysYdCB79C2fWEh",
  "key19": "4EycZFi2izGZJMpbUL3wxtvTi5XW5ErPHDwjBwx5hM1EN3h7fGPsfK6bzY3Kh7MjsnVF2qorrF2hnnvRnuAnZsaA",
  "key20": "3MWEnzmRbQpGtkrrSJPL7LP2ew2m8sQGcNqqwr8rhrKvcDaHGnCvSSagfS74ckGnnTq4FF8Nsz2qSsBfPKstRja2",
  "key21": "3zeYyXzrkH14Czs9Gm5JEPi4vUNoeJ5WZJ58zAYc3PBJpQR13wgHhXzt5v8nQA4Y3BaaiPXiFet3saWqnenu4aMV",
  "key22": "2pdJykubWRkd5nEv7XFDK9bJGpQUw3hLzUpU2PmwzYNvzXY3pF8rz8GuLdXtDXZeaSmdiwXyoBAKynEEVHeFSnpJ",
  "key23": "3HszchMrvvfg6wHEpiSwZ7ZU9ux3csaVdGS46KRKg4EGDpvRwgCcFK1Fu56g3RDxUMD1H8REDPLpF9qvy1oL4yDk",
  "key24": "hKjpwzA7oQFdQQhDWDSD97zCkyiQmMBd86dTnz9n2tk1jaEnMKm3jgmtas1JnuzgTHPCktys3iJYpeWVJRQqXJH",
  "key25": "48mczuSnUv8jMVvnJ7PdLMKPee56KyJHisYUojaPcvjNYGY1TF5XzmrY9uXVdWwc7i7cd2dxDBNyn2wmDhFPS4RT",
  "key26": "2nctFuid7YnPCd1feZ6ARn5sVtzu7q49HVnGzZmN1v8pmfPYHJtMz4oaMqT25ue2SbAMXdepQEPgzkkLAezomwL5",
  "key27": "ojBarYYQi91VMcu1EASySG5eUb6oo2MK7bRjKabzw1r2BqWA7vzay2F4LcYmrZ2hmS49uxH9Jrk7Xd4C1BTb1YQ",
  "key28": "4jPWXXz9k1h5fyezeB7QBMYum4HckxF6m3Uy2kDit2HLhcze5YKs9zLDmawbN5U13B3kgJYYe9PafyprHian76eq",
  "key29": "sJdp5LQXdEpJHtQuCCJDaWB49GwjZXhFJB7DdKaGmKwimdgmujDPHiLPywYvSJHoPq7tm2q5pZ4CVWbjdGu6ufN",
  "key30": "3u5SwBo4cZZvR7Y8iksx65yCTANtFKr9TLn4e1iTEMVyyu9svJCNCFgbCd5naAaZwkSeuyYx3LaXCNrfDZRBBx6A",
  "key31": "2u2t8H1z5fvqn9oyi9Uo8AkjLKuj1hXMEQanK6zZC7CtSZLaK96y4TiBZNLBcoghGatf5iJb2zGmDyoLWzLY2bdU",
  "key32": "2vSjgXEipSrEaibbDMy9V3dv762hTBm33o89ptNohdEuy2rcEEjMCesSQZLpqSnKDVX88Bof4LdHwaQF9WSduJf7",
  "key33": "4Xkd3amHXcZgPmc5xBxRJzN4vcNfvv7d6e63AdWAJtAArURj6bU9tuqDSxsvBtQr6eRKAhuKnjwvQvEvUWdmv8jJ",
  "key34": "mgjnz4BYYwXMLr1VDkW46d2wuotetN5XodQwWV9FqTqP7JeRVUMu7t1TbFMuKXJKVQjDHN4iT9HNezsk5kLxfmq",
  "key35": "4XrmrA5uWS4yB62EhYoWeSXag4wWvnPQbZYH5frNnBynoxURmwjHxejb7gyhWqfBNY3xT5hFkDwxMkZX5zygv5D1",
  "key36": "537nGTnTLwaU4inhX4KkMCjbojMhcw2ShnbFtU7JA7bjsh6j5nSWNf7NrZK3qKbLQ6ZNi7p59chMBytcCQiVvX8D",
  "key37": "3rrSVqFnnFUitsnn5s5tzPD1R2jJ5xuGYJjKBVh1q5q6A6unibTtEkYkdUaGJHjTHZEJMK8Tv5u87tcdfmd2CZhT",
  "key38": "5UcwxfbGubhitnNkcx1KrwmAc9pMppgZzFUjiSMzq2WgVkwLTNJCCbo6vk5NJdPhR7QViS2bFbmGpGfhkAsrtakP",
  "key39": "35Jv3TsivNVjFvi89XwBQUgYth1xWiv6y61cpz1LMqm8B2bfu7cfLEQ2uJMpuobMh2meoUgAJvBs5y8KpFibwTKT",
  "key40": "4WasmnMD1bL8s67JwZG5SrkzZrQoiemmvEg3aAR4qayczqqyKn3mByhd1Dg8MrBwiFRASmkYTsxjiMa9kxj2kqT1"
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
