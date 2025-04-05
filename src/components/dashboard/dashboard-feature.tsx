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
    "3NXVuMoWnXB2UzkZcrf8czoBhvAXNLni3RjkFTa3jKW52FyFG55DtMLrVYndY1ekE7ABv3TdZyJ75wngPymmHBj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocjjvsQczy25bUseFSuzpVo9U2i4Dd8Uuwnaw3kQuDunVzsXmKnHF5RDa6ncityYZaMaJDqxEmBPU1m4xLPvQa4",
  "key1": "4za78uiRtQyekXoUZELxB63yv4QgMDBfVPLeEEb3mzKt3VT81oMEdaZAjFZUBYXqyWm1MwSPMMhF92MsBnpHhGN5",
  "key2": "4mcWU67H6gyaAnrdAiVq6yrLdsUKNki1CDQgcFRdqXAw1jWRJSGJUAZNQET5BKjNcXxSEp6YSBTY8WzyWp6chHBs",
  "key3": "8A3jwTAPjhrWzPA1iPCJWwkh8xdC9V1bvkLN5i3ackdwHY6NntLA2ifd1PUTX7SWsgpnQAfVsP1CogMs6nCjHd7",
  "key4": "RebaR3QvBvR1ckx6HmqrBSK83bUg2SkAM8bAzTyjp7NaSaLdk5qrJfN1CrW3k76cLGyoAJTeRFv6dC9Jcprrmpp",
  "key5": "4EteTH6BQSRXriUCWqiyKSknnNNRW3k8jxtHUCV9FhWq3mhibCYAA6bhESHeovyG4gfBHpm48Yq3B9LypFjXSQnH",
  "key6": "253QGvmVVjCH5HSUWh6g18HxiPzoqZ9xU9Z7HwKe41hU7xy7am8aQUd8igmr5L8JqDzgvFj95PKcW52Cy4jX8FD9",
  "key7": "54NDYfsgTWACuKPQMugiDgCg7Np5ywXB28ejJkLqS57fkDUhibRGdCbukLHusxjFm7zkVDqdDYTdcVEGYQwQ49Ed",
  "key8": "2AkRMxu3v4PH98wUkgY99j77naBRxKcXzoXMGfci7KrKrbpTgcBATMRqurQiFkKip6g8mbfi3ULb9bVzdCsvV9k",
  "key9": "2TR3bECuby8w4yXFoWH83bdRcqBp6DqoTPjs12cjK2S9o2mLvmTs3hU361DC1mGxSWBbCJ9tqVFWpfgRsiHJWtXa",
  "key10": "2tsAuzRGU6J4Qfq8zu5G1RVNK9pMiN8gVZQHqMTJ8257QNEQ4jouCWq6fZ7yoYSunyQuFbeWrJjTma9cPpD2u8fQ",
  "key11": "4Jp6yMrv5PoLf5ddUGt97vfxn9D6gpNNwQi8dFUViwnXCVaegCWvTd9hFNvFZdmi4R9R5PnwRi6Z9iuZGpSm829x",
  "key12": "2f5W1p9b7ffunewjFtr2ZBCyevJjd3jeL6EtTBgnva66bxAD5uPyJFU3ohJWN6ZW4K2KjMKp8R4hCxq8YUeFQyqE",
  "key13": "5usWgxSbSp11qWjypg5EckmgNcwJVp1Mhkj2JCrg7XaE2zpsCvTsa4wJ4xi5eFawmyqJpYxoWe87Z5q93YweBN7a",
  "key14": "zraT3vPeQBG3ws2fvXR8R8mzRmcZdmTEaXJP9LVMDaiftyeHzdJi97uNjqbeoKfbD29MDaRSFWKA2xmfF5JQaMP",
  "key15": "xfgTJFQEHEz8JZnYLQ1X69TZ3x595wYvYox3nad3LBykmpcNDDKSUVvaaP4a1k1hqL4waNWCiNtk3XJBwAMnYLB",
  "key16": "3e9UZcyysMu26cmocecAtwpSnnT3ZcvBTVt4PqL2jWHhka52USA7bvFpxYfagm6kB3ef3jgQ38K9XENasdzJ1Jrx",
  "key17": "YXjipNkNe4jB4WPEuX4tkwHgUkEvdHKdpozEwbM9pFPCSN5iHbEHb5dh5s5Jt5776P3Nm3MpvAJbjC4k3mgi4xX",
  "key18": "3bzZpeeDSm8yNbs2bMGTXMq6AXMrdyiWURRrprUdn3Tte64XAbzsSe9iBjhCnV5FMPDGaAnJhM8PfBVsRVjR8yzi",
  "key19": "xVufDvb6PYkDW7HKU1JhtsoHFvip2mUCgQ4vSDErcSNtK4eKxYKNYb5EHW3exXNuXUNJ7FHUrUdCQBvnzxs5cJs",
  "key20": "49NmUiJxYvU6QhzUeU9UxoB7g3AMp3FmekkerEg6YioPiDx3DTSkrkGWZcs2YWx2JaFk2Lx2SuHXbaeQZREGoAgU",
  "key21": "2JXMUKW1kT3kE3J6ysGd6BYWeobURfCXLq8v9bNr2LgqDC3s6z8M9tCVQGjyjAvBS9s3UmKUkrpcZnF4QCwA9hcF",
  "key22": "gRdDDtsLx47UTvWU1GLULhcyrpvRdvZhgTHE73eSKxztnEiXBnwTSaApcbig3oKTS4cZj5SWpKi53TdLxpAyrkH",
  "key23": "5qUKJDa7pAmxkqMJEvaVTbk9grtMMqxnzKYq6bVeF53Uua62dghYXkBfdeWSYwrdv7oJA3k1annfXN9irc7Geeos",
  "key24": "5JuXSoadTcnxRrd4XH2xnQhStvjJjmWKvki3GYN7vYAajc9MgWxaM2ZUwXCFMkHjdMYUFzFKDvmEntDrVvFkP8NV",
  "key25": "5dSS8PXF9Mh18dWEU65Lm363S1o1tiTi5s7rk4d3QC7xtkQVTtiGuCVMCH86eGLCpb6JhiPgEH8rK22PQ7svvbps",
  "key26": "5Akt4yvF7H55feZcmjnwrhrTiuUqYHtcfSZNL9XPbyDga7PNPYPVhAc7sj3Jy1tn45Xnm9LP6Y8EyCoTwLAL9DJQ",
  "key27": "2UaaTF3zRQNuXVTkU35tdmbrrQvrWvKcMhKbtFphyLBTCCC1VWGNJ865UpZFQWyMREDS5FBheVH8kEBCwagKbGdg",
  "key28": "2VacFAKu5ESDCNrtUuyNQhqDh36w9PA562wMVU3CeyWB2BCofDwusQodvsXftN5mtD3moyKbvbTiV4w4w4BQpWhZ"
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
