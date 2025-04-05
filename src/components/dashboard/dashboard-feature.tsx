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
    "2uj815ibZHdPPxjKBQwTT41HtE22FryEuSbiPt54c9CvhcMDB2WHCzorwZis3UpiTnbgAgi9zUwLdBgu653xRq5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwuNogYVotuDoqjCZ99TGabY2yV64N2RLZmNGHeG4onndgL6t2zXjwFEnS4nkiGprshu5A6xKCfKVw8Pg6eWfQj",
  "key1": "3DKoHCEMvNGsrCBCeo6YVbQQV9Gzu74hgV39qVhg5moKT1r5orUio5UKc3y2TZkr49UjVbUk8YoehAMAFY4gqery",
  "key2": "3u3hqRb6bTUh2yR5E4RVdwkS159GnJYL9kiYnFPwKXJ36FMFKMi5bssAZovPrpz47Fr5jTjSXqVsyYGeyggM8Ya7",
  "key3": "4d9QBQ5kHBu8aXYdqgmu6u77RLqHKWqkVkpSGpP88QSRLLP7C88ukRvNCNAg4CvyMbYzECF4fnGxCqHnCk3Xk1z3",
  "key4": "5S4evLHo53dw42ddcWKbPtZy9jNnu1b64osZqGrMyP3wJDsHsWSgkDnXZGyJ7WD6D92NnuiUQ7cit9yeQHFmafZD",
  "key5": "HjpeLd4ShmuD3Du1Qj7cWrKDFSkFeiRHaD72zq7FXVegAkkrmFZTAUh4X4Ws43BzqEzrP7437WvtiRzVYYLbxMj",
  "key6": "2oHa5T9EjgeZEmjyprpMQjKXGMwrdjarqafENZ9V9uGYs36LLF81ub6vTCxoGFGk3wrVtNx3MU9qyk75PGa1TGyi",
  "key7": "4wDuWbGHgMK33GHZHtNQEDdHvtMLyNwBft4H6ZHoLrfQZpZhKhPYnHUYi7b3Mdo44ScDiJmzm4156aYjn3mSUgVW",
  "key8": "enJaErcGgGbqrGwqKVErP8qKLN2TERuRSjsF1yYT6GvjXfnbCQoirBtYiBW2x1bdWZP2Xn2FjtS5W5yR2Wfyz2X",
  "key9": "dProoDh7Qf4ezFeKSetxQ2RkZ9Hgd6hSFU4ALher2rTfTw3So4Hq1J8e97UiA4KgYZaZHL98zRY7m96nw6xpGnd",
  "key10": "5oBMuDfwX9QSAWrrNhJHK6X6b7gTjQW1miV4bJZNJJHQRPCaqa7zVRPoZG8n23bRnLzw6VUQTXnjruiTTcqS9zgT",
  "key11": "2Tt7tz7QERp3jzpBNacxvqTzSwZycaGcXYW54AL9vtNqCru7Hm7s5x4x4j1V7yDa9ekt1xkjQYoGiXj9QZWokWNM",
  "key12": "4ww6DwVAJGhKb9W4tHtqkyaLSXkibJ6kPcGdGNuX3ME7q4Ta1oejhTBUVyUM96QrsnXUPqn7ZYK5CcWAjF23m2E1",
  "key13": "2mX2iViMvMb65vNTNh49xuqNdQeF8sVzLMMETkvTzv7hDwcBNhpND6L3bvPnFh5db48KyhuvnXcbhMAm3hDwKqx",
  "key14": "4i9xFUax8yf9bw1vA25HuD6oDYE1e8CFjeyDv3JuKoyobyhBmBYJXSvqW5x3MvbADagVw711R3H9eANUGL1gyKdR",
  "key15": "xe8bS1nE5qaFJ3DAzCH7zrFSmM6RSVtsYHNaXoQLH2MH52X9Fbd5RLUhYUjgMmkxhCqGUW9K9MNjUYJYH6WzySc",
  "key16": "uKMkf2HLRwRb9MHga2k5gXpJAogJfvcsisG89tCoctVniABy7Ada3T7q8Kg2YoZYXKFrHMt3a6SJwh9TKipSpWD",
  "key17": "42m9jp8MLMCH1n1sJqR64QfCm36CG7yykfYaPpdejAze8tG4kAQp7FTsTpsP66wanK1dJRCr3rPLqQvoKBZ3Z8jA",
  "key18": "3GLNLMgEusGgooWwNFoifVoBW673iYyuTcEmiz4JZfMxueRRtixvamrkDWLSFWo8x9dYeadVMrnDWBiRSRuKwftR",
  "key19": "5PipwDuZc4sWfHJaEBuBJebBSisoj3kEMf78U92xqqDFvjNDy4QkXQDACNPfRrL3A4xi1FAq6vXi1t2aaNFDfiyi",
  "key20": "5kv7zRvio7R4GzmixvGNfChJAia62ubdSXpkSgHFkHPHfsqVjmtaBXfKkHr3j5C9UAb6PzpycMwVdyuxvURGnwV5",
  "key21": "7RZR2M3YEwAy1YyP12QgvVYpKvYwUo52QKSxPypCd4QbqvT7nQNk5XB2CKLdbdkDVDhLq1NTxyMWR1kvEmSDf6D",
  "key22": "41GQpK8Q75TYmS8VfFGmPy8rdbvpmfvJF9TRrLyjRtgSHXw24JXfGRrawF29zdS3FYXGiqc9WbLaXgkKMQsWMQPy",
  "key23": "2ako4XsFxwmJFFgXaTf3rteFrFpP2tupLGutFj7cG8KmCa8Jv8GYz1JThkjfVxzszqHZC8GhaNuFpTbBSwfHD2og",
  "key24": "3GrBGcP4EPpf2Q72EmDNNS27nGvMixhwc3vk5kPJXsaFDDrX99HittTD4s5yFLbXLUwFvcy8L8uL4WZvDAG4EVpN",
  "key25": "2477ZeP5RDV8ucd2QsCDuNy9QvWfvTsTLBCpxyhB4bxL7k1HSW5AxAJoEkdhHY6FnNf8TTjd5eEFS15J6TnT5p1H",
  "key26": "2eLfkps2Zt5S5eqaBzyWhRi8XbF4QN4bkVz2KBLhAJcWJdjqDwWyDKAfpT1cr5QCjpxnhdSEhbnY7ewXq4UZ5u1S",
  "key27": "3tYskXgMsiyzMjmSsqexcbS4my2pGCRzMVcdrV7pQWnYT4DpHQqyZVoC8G2i4ueezaQEqGaA2NEaRpk83v42nL8V"
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
