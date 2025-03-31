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
    "3SNScPHwsXMt1pRs2csE3JcjGwYMTNVqvgrgaPar4f45Nb2JKnbEhBu35PFkpuY9Y6cUT6SaGeQw2s6s9No5j6zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szziSrhNkmLoJnXxBMQbwF1sRt8rduNugZbfb1brv8FXSg9Coz8YrPdSP8CbWqYmccJNG73W9a64YR7YnVza1Wg",
  "key1": "4PTq3KAajFyWy3xbGE1U8wH1tC7J5YekFZg63NKzECSrAZQDPL4WkX7gvSEK16H5y61ceT2dxhZfGyvn5UTyiDC3",
  "key2": "enp1txregdsS2igsHLS4FPMasGiSdCEeVEqTwPzPUKWJg7xApy8XPu6cPtegCFTcTQ8SnE9cVk3p4n1BMf1TpE1",
  "key3": "2XA1By3x2ED2ZPoYbXKNkU6K1FRtW1Mr6xzXNSxx6rwRMvXDSHa2xR5v5ti92uQj9QdR2uE8AvWqH68CwX5N1Ppe",
  "key4": "5UuojPcHyysMz8hLEecdbzDTesjgdWbqTYzqxwf2ypM4hoVD3u97o6yvcG3tmX5CjbjehAoMfsVqWyNiBY7Bvvya",
  "key5": "4G3EMBMZJUexPqSpXJ54PXB6uEzSAvHhPuzVPGkN9yrh1jcMAuRPyP9GsiNhcYq8W7W7m49tcPUuYQ62ZBhXLDYg",
  "key6": "3rNNHMrc4nU9i1dYoGg1e56hoWDjPbRGPiUDNhfzwv6Y3iBCjWydZAYSLwUD97G23A5YrtGGUFsUbc3xhmLU5U6y",
  "key7": "2w1RxUBBrQVXd3asBHr6mM22N43bozDYp8SodjYE7hVJ3zD14EQVw4hRmKLzZPHySEBWWNiAN5EVtuWpBzBujTTu",
  "key8": "4HhcdeWEJo31MSGYp93PMPfCh5BU1h4zD8LsnDx3ZUskeWs3d1A3DVGeXBmRxDLDsg6Em1ys23FV493XshUrEGPp",
  "key9": "5WmayZ5jKreAarGCMoHTkrSACR8jVtegFqrmZdTYkYY7Kjy5qYSULy1Ywhzfv47eRcDMjmFYTvvY5KmPgkCUkJVL",
  "key10": "28L5SnwoW1PFg1QQxU8S43MfbvgUsRgSNvzNGda1puXzEZq5PBcEBGJmUXGne9he1jCoDf77S5qycQZUxojUj4mW",
  "key11": "3oqVevuBobi5eijwJ15twUB7HJVMr5YTdwk5ZqoYPRpoJmzYXu61F5auKeigm8bPZbTDiLa5ocDdsaJsFPY2H2go",
  "key12": "5tRt5QdxXVb71AR9mCFjRSGGmiaQjjuvKf7UEws9LyJagw2f4BkEERae63GH8BZCjsDVmnhjs68kenPHhFYdUrQQ",
  "key13": "5v12ff1hjdpN3dLbMuao1N37GFhYf5wTjkRrV445k8M7motM3fEhf8BukdNGHLykXgcwNJTea8CnoMJMs31h1M2v",
  "key14": "3wbJRmFz9YZopX4M858QF16XLndqXpF5m7RXXzEjKSMH26VZWV1gXy5CPmwvziyC9B4WRYhw4m3pFYkq39M8uUKL",
  "key15": "5KfLis7etohiMnbrEkw8nUKYyydngwuBpbWAvL9baH1xZR1dhZCeEK72oeFitLyh1u6vyMqHgddEbFoFisnfRiCU",
  "key16": "h7otsYU1rXaMxuZNsDMdr2rdK9tNyBsgScP5BG5QdvRkpUMVoFHN51D9o1kzdPZSptxkArnVGDQxwgLKvLdvcv3",
  "key17": "2ZmpWtHum2bVBiNwBRed2a349H7ghkkiaUdfq1X6hQfX3nUjt1yagLQuui9GYh4qeK7pSHYqvveR2dC7as4Z81MD",
  "key18": "fqkNR8vQ2kLXxbcEc6whDBsrrjuopyhkko3DUBiuXTTSHG68YcZa9uigidwHGbtZ1MAXDUbTEQLskx5MFPSbAFR",
  "key19": "97VUqGYe8vy86uXCRU3uxfeJrzwnwm7xUdjrN9WheD9LCDo98gWM7foc51MAvL3A7sNrfSLURDhA79n3mo7Px8b",
  "key20": "593tFkvhoJak5zsJZjyZBRb4rTB3EmfEiPvtBBV4TxPkEg8TFriJXxAVthWkseJgwQGcuoDY6aojrvxfKUJbGZak",
  "key21": "21cUF1rTAJeba5KUXtmGoM5GsHtg8iHHrjosDo4zVyDw457pm9RynD8Ci6c7XR1uGTxKuyDHUGiN3iFVEoGGPNMu",
  "key22": "2Rio8DBrx4MsNedNPic6gHjPA7wt7gGnE3hgv3QRPx42Bzyu3xhNDoE69wyAiKsj26wkk9vyZCDB5DxHiRrMMnsU",
  "key23": "YCUf2nxnPzAYnqbecGLdpdZovuQ7qyvQmTvugmJDD2qsBkvMWQ6CreMLkJ9GRgWDpyRXpvfkCcxQ4LyRAC6zr9e",
  "key24": "4wXrxrx26BYf4AwtrRgbkAjfbX4eXsbaZvdbHLSXa5Ej3Yfr6NVRE1LL22qnKZz1e7RRNK4J5jPZppugKZ9Xc6q",
  "key25": "8WLAmYne1KZRTS1AaT2U5vDYwcmN3P6Q58P5Va1QJmEKHyVYrT8GtX1teoiD51mat6wwMtCoNSfnno78V6UTUew"
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
