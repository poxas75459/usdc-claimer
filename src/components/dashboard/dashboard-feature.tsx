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
    "4TqvN5ddUvyTchaWQjQSPapkdrDHP2dr4ty8uc9HFuTYz2Hdj5ZmnRvXWEuo4MGvgG8ccpoYSLip9sFQzbKJSNe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MD9EDn7sjSf6ovB2GA1YtG3fRK3RGuSgMoxkQPdJrxJBsJL5k3zZ5L7WggcEu91spBwCsV56Kh8fVnSBkhepMnk",
  "key1": "53EZnjZz8nRA7nqPQ7LU6FUDTZRQ6mXcGvyhPmDRrVi42MAt9dAyuWjkScsJ1GpL9UHmBhTTLLiPjPcNtL15SrBu",
  "key2": "4hKNmoiwG2Y7rVYNFuwoXfZao8vZf9WxUtpdaXVBsnfwSsjFgayZuUqYDTut4ycXrQfoDdeNWegSmw1B6s5ZMFDD",
  "key3": "4ky7xeSAELX6ADFp6vqenmR668FrvDLPN95NQ96s52scSYxNpUBmxYnJfZmGQ6RMZrirgLmjrwmrhfm7UEDFSDmb",
  "key4": "4tecZJS4STMs7JGM8o4YaEZv8rJiAXVXSGuZ87vJ7a5Sdm9K9s64SH6aJnLWUVnxm6f9MkivZ6vbeNkvrowB45La",
  "key5": "4BKuA8dtPwhCeuSnpzBxZioNa9bQVX9J4GBD8h76DAU24n2eJ6nkezvkafCgjgidjzE4EL2JgXgGYK3v8xYifSNk",
  "key6": "3XcJ7iyPi2gLL1LgV7tJ6avmbq7ESoC9Vk4wF9vUVyPhJJzz26RuFjDbbqKFkRwJmSUzRU8fcgMFVSXN2omwJS9w",
  "key7": "2D88W9ZwtZgyqpta54dn9MhsfEEcf6MQi3kvciMH6UiXC27X586hTretfnuA23Jww6eFuoK2rCUBXpL4CSaJ4eun",
  "key8": "2rnB4rNNEssiqpa3gv55UMRTd357LWGDTkXt6zNRuh9E58FZBiKy9gZkhHDWuhLsVU3u3HKbCVbM9H7FhzPqhZ1j",
  "key9": "wup2gZFtx6XBNh825kvfYYg55KkguHvz5EUnZsj7LSderebUsfsYq5jRrHCdiYXbxL81yKTq57e8hgcFwq1HwsD",
  "key10": "irH1rh27XBTjyYwdyADRpYEimYScZ7bYLgSdGvcK7urSqtGnRzJVWVdGznqY7QF8fB3dLEocWTDPZoo54STRyyf",
  "key11": "4AJrwPZ48or19M6rHgGyA4HFtq75Wy1kcd8chDvcGNukyHwNpXnQM6mKtYwMSME3jWP44kpACU6SkVMMakLHho2y",
  "key12": "5FRGv722Ea4bRq4wD8bdudpb35QSpnvfdziiNNbGeojWdULDkQhUAcSPjAKqFmrDdFVN8EHyN8V1mDTVFbQ5ncZo",
  "key13": "3Z2ccSXf6CKEq789PKQisVYqef96gxwAsk4xn9W21gJz4r2Wbk1Snh3UWgehdKFrh38bxCuoCgcMUXobrLon5Wys",
  "key14": "66kARy1xHLbZKxoXY38W43MCFSRhXwbsjjUJyKTLit3mKuQ4Rogpb23eNjsRWc56P3Fsw1bA5RrKHDP28QdeJSog",
  "key15": "3QJLqt4A229NahE8LEQYvvREn9kczYiitoczw4Vff7SuicwiNJUmUFuGLiS6UpXNimMvfiqFdfs2BHYgUh2jLGk6",
  "key16": "xrJoMrTpRgSgC5aWoLzgC3STbeNKR1tdcgExpduCrqRyFMkVrurtgqEWXLrFzJTu4WMKwshEJYyrZyRnfwWazLy",
  "key17": "3P9kDFbfzqiHREvcY531QCLp53byJr43gKkrhqS8woGmSYqtH4NxVLB8u2WCg7nTrsUxANwUy275iEgx3kPzZPJb",
  "key18": "3wDRqv3MCgndFeZCTc77v9XJmcD7qhieEZuqoBruBwq4apP6QPuCELvg69cNoriU56yXRxVGELDKStmCpfjPbh8Z",
  "key19": "2tmittDLGUycLdsJ8bMxdhyu7YkTbkTcbjzxDqEKPryE3nSHx7w7b15YrKBtWzAjpHSxkLFu4yjCwWSSCiXiNS5P",
  "key20": "3paNqm5s6ShxPEuV9hU9z4bprEexhgoJgd6oMiRXLxpNLRbgZe9szm6HEJMgWZAd9TCHA9Lw3ujKvPW1jB5YfFtc",
  "key21": "A5PMx5rMqibobm2c5gvdQWDidw7KepGUGrntkUUwkBm98BU72AksxheMK5tKh9nNJ9Fq3khdCQtBRMQtE1Fhpri",
  "key22": "hRDUhYAWwgC26bWmnmeSKAGhd4Jb7bBXEWk5hHg4G9ZvvMMm8E6KAQY1pEWW4UFiSARAAPpR1vtxyqbpMNa2HZR",
  "key23": "4ZK1NKmtc1jptrmzsDCPGHhn93tBHUobDWvhJH8WxrAQueCRiMPgN6vMaB19Se5eKEBPDmimH5XCZLSfKGdGFLgS",
  "key24": "YevRhb7p5jTtyrDRN9wgqSRQPpw5FbsziNNpQGE6turv3F8YAD7ncbryXdcu9UaYGepvFKqTmk6bdD65t44BPRZ",
  "key25": "5oVy6E6zvP7TnmZ9g89nTV6122eKsBbJWqfMZGhkZp6rM8B9Z751UsmuLLuakshQrkwPjLyMmgjcepQNcmstdGTF",
  "key26": "3t6WueSM6ZdjHPhMyiFu8gQec1FuSr5NZofL2KHse1HTyNNTuBUqWhsfGGsbtNbChBxWxsXisC1sNgA2DFuwvvuT",
  "key27": "4dEnYKU1eEtt1s2zAvy4nCpSqgEY78RTT1oHnH8DVgMPigSM76Frp1rf1fdR3rbc8zxptviqrsZTNDb7teX9iWEy",
  "key28": "3Bs51eGcf9Z8G9ztokxWYMnrQ8Gg9jhNt3DAkNAhW4h7tPqEQxS6Z6jNSRbyuqnBWHUu9UAHbUvy2ES9yJSjbMqT",
  "key29": "5ZMMJ3qn6LSNjPWNXxTWTd7GLsmNBhGLeMXgTFH2fs95PvPjrUxRkgwVfWVcGBBkefjtG1gkdsw868AC8xUWSnXd",
  "key30": "38HVNCjj69dmEEodr6kYnMbwYqRuzw38ZFVxm2qs2yqHqu52DVjX2E7zzbzcvSxroQSj5APAbXArpHJ29cvdRoDd"
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
