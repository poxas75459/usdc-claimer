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
    "uHjYAMJJamrJB5oQHQJmSxajQrmE4mvuh1hiGrpBfGtNiR9xRdGUcBdoNjEW4yqoB7azuV5hnhLkfRreRvw4TfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBbzLZdXygTKMiqp6sGPD2hnEevwo8m2qYvZg7JN6H2bCr9Tib4VRebaKmNaTRgu6M9SeyLuTGih6Q8UE9uch7f",
  "key1": "binRerWZmQYskZ7pCtbPbkREdviMAzgZtLZ6MLsqLTS5dQB3tQpMT9K4n6oeHsgc54bfd9NTmpLhE3UcxgQkxJJ",
  "key2": "2FhGvGyzTxuvsz9ArPxK7evo1G7FfZHNnh4cjc6JpTbLmTbX9TFWTKVDw1AgZSegyfWH8gueW6x46YgDiFBxdT3x",
  "key3": "46KmLBBvQQJqfDom525DEguXFsZsTaXyAZnbA5A4swww6S8VWTqUK88UGHNXToHnJjbgsSk91TbGsc4Xkw4Z4NGk",
  "key4": "3StNMvayLBLwojU6th2nxfAhsqczP5hZAB1sFB6evfaFZ2gZyjTuXS733gQwhujVQUwzeH2AWRrekp9bRSu3z96K",
  "key5": "2GZt4w3CJUyarMsjDpTpY8kcd8hwkcgpaaHrqDQFPhySM6PUagT8AvzY8BkzxFw9RL17bKsjQFgxaUxaMppC48ee",
  "key6": "9LayP1WR75u15dTvsgowzDKKdFAx9CXxDVLW2kmES1ehrQPuM8AA33RKXWfzSPTGd2cDg42cgmTCkeeZECszCNe",
  "key7": "5kYEwDk7Q7PhgQHPUzFYQqYiLVwZF3KZWShHvabMyXWDHBSuVA4qnax4iGJqz4gXG9wQBZuG8TnKzVd3KLViL1o6",
  "key8": "4CJ6g6vnYhTjbTxooeLERiDeUgtp4zRVZVHrD4b5Vhidj6NzNyHsByXPTrqs6xXPpWY8k2PUb1anjURn7Kdauyi4",
  "key9": "4k6MVf5WjdueJgYMsE3oRvsZvUX7UjcR9REG66xb3TEjm5Cm3rCgNXZbGsjh4hvzB4CFXY289BpKGGm5BjcYeUu5",
  "key10": "y8DmmTTXZzp9iKywL5kDun4vqtmCuA7F7mAzQoaJRxxWmronX3ud1qJtyWjMkheVYefV7WoYRdsKZ4FtxTLLTZV",
  "key11": "q6t37b2tnSxUD6HjQkssWteyLvkLPRp8i9kxGExP5GqPzssWrbVb65Cwm5reDxbPjF55DPj2hsLSD6K2qoa8JS5",
  "key12": "3aPVy412x68rZPHg3ByDj7bDtyVaHdp1BwbatDcb6p2L9AaQ3tYJ8mNoPv8D3CZdShXgPy6ex8Y1DE4nowsjutzD",
  "key13": "5yY1YNQFgySEbjVCaoiDoH5Yp94tfKM4AipqF9As3dCrftsVP7pTFHbfg4t31sv2DeD3axQ598teXiccXwXTMaQC",
  "key14": "2fujoo9DYde6nbiS29akNuivM12fq6TmVKnjYAjytNmKATbEd9jp4Skn4FUszTXuREBCScCZkozRrxswturSdJS5",
  "key15": "5HxjrfWqNM14NikCqpEC4SPr3uvELvxKgsCYEXsTAqi1mQn4wSe9vzMKXcsV7TCsTeLYTmK24jwJWDp9Q47MmULZ",
  "key16": "4oDtUSXz84ZcWXErNGb72hdNWzSLXGMYoXVaNTCxB3t8rGrJzuWfAAfwcEpsdpzeTiS3CUpB7AWakSTtv8ETbmyg",
  "key17": "2raWT5DBiSyJuhLnokk9fPZRy5zT9XcreBgqfZxSScMSSFMDpq3qctV2g5PDbLqaxrR2AtoSjyahjibCaPipzwWK",
  "key18": "48QDWwicBEiupA8h1WnXAyDonDWVBq4ga4eEJ2oM7w7q6s4tiJE2uJZhyh2JFwaybDNj4aMdX7yXcGP4cuJSXzpU",
  "key19": "45spebiPBqJojwsRJBHtLodiQL16X31Com8t3PSQuA9EMEWxujwqYjpNSoepK4m7mDGijQwZDGUeBbByXrjH5K1H",
  "key20": "2e41DjoiGewV2w3qHgv3Bwg5VyWchxeuGvQQ6tgmU2nD16ipztSQKQR4qTGreou61p1LDBa4a7RYmQc16qpZg1Wa",
  "key21": "3osmLYan1fi1nHerETwBM9nWxA9LEwAa9WXFJenGTZzyYHxdec9oYavJqjupEYUm2LpaYdYvuF5hsgqRXQz5bsub",
  "key22": "VHLA6QJG9Pst2FdwvJgJovGtTzukLvJX1Tpk6ZTtrGc1dDg6GUd6txP6hZyBzYRautAUA7BPtV7hK6VoXsDQiFn",
  "key23": "5dqyS9Hd4gvduvnFT6sDR9ccokUjnbeStuj1rc6eBctb3fnAEHsZkAcsetXH6bdULk5mXUw3hFB8LtxW2xHSRaMF",
  "key24": "67o5Y5i61yPh56bZr2EYoxvrYfjC6qwMdZqjk3rwQVUZv9QnLBvczwW6U3V7V4Tzv6skfivLpoZrrc8njBRhUyEn",
  "key25": "4BCMJubSYw113RJDD5FwgJ9ZMycXsbLxdvREj1tKvoQTYfKs6GmLserGJMFr7iyZTgdHnoGAYZf5rksBpKMgpqx4",
  "key26": "2Rc142qC5GP2xoSPU3roEW9dCLbLxnMaWQx9gNLPqKuKQUvfEPcqLrSLpThcf82Xc8hAjEJcm3CXTNML9wXM5ean",
  "key27": "4YCcGvmHDnM9wrCgLBx9ZxNKTApTeys4R62KbkrCS4af1Yjy4pvb2g2puUe2Waxu5iZQPLo3vpWnbwiLLJVbWTHp",
  "key28": "37xVUq1V16TYZmKCb4tyc2jB2KhGtU5Zhmq8gkFeBRkz8z5txN1LL12bigS7C3RkHmeGrsad5VwPGMKY1TyWVFCh",
  "key29": "LyMfQF9BJYCEeMwVhvqDupgVFxMj4tgctgGs7sjyF2GYA3ort7ZP1bsfucFWka2BPjBjrr5xyb2JZkcpYBVzH85",
  "key30": "4uYnQWVPPHNyUQaH76f44voSAJvMBQWzWuL1pa5iYH6572XJriRGhHMPxfe6L91mk3GRKjrgPrgM5aPSLqC4jnPp",
  "key31": "3QXXNUVQP7PCVFsQ3U5eDNoaGCSt8VjNGRnJG5vu2d5QLNWu2sawsmChv4XhCqEQZoijTaYAoBrFRs9fxUgCgA46",
  "key32": "573YijrSfTdzPPZo3xK1xGmifVcHcPrpfmE6G72AGopW3Faa2DJdYAMj1XkEsibktRBtqPjjghYsa8biyC447yfv",
  "key33": "3Apoc2xrKe1XVJzcUYG67qsdxwN2Pmg22YeQ3AX5w3urKXERKeasVniFURxZoRuWnB7AMsB3tuZfhMAwFTLPzmcy",
  "key34": "5tpAMeN87CcXpnrmrE1DuMj6VXRVyZqyAetc6ZX1j6itXX3B4jzCLormXyotq2hYmJN7hQoPRNhoMbrWC5xWwe45",
  "key35": "5xpoEGMnM1ipEQJd2nazFWp15GQVSf8bsF7BQDmB621U27kBf45orMC1TYnrSCn8HoLKMVC42brh87LQLMHfASph",
  "key36": "2HYnb5zgPcTrJHcTiLm2z8wzA9heLqayQKqCXEm4HKuQ7ADUa4Y7iuppEbvvNtqXjJ3GFPC44XDTZR86TJZKmNH",
  "key37": "3CQQZi98eygCbAdvF2A7b1U3Qcv9Y51pjEKHCFA3yoMZFc587ZSNQRMEnRnm3CPUvuniMCB684ReUTBHcJqsJBRs",
  "key38": "2CisWYtr7JrPkdAwyY7C1RFxEBrRpVgP8apHzMiJT85wp5M5Z9666p4GDFkvwR4bTA46mEeQAWMRviLQpMWK6Dfw",
  "key39": "55SKHGRagaWGh8GTPpNU7pj48yYsSfTy4fV3mrvPyXPA9MFy21SZf4CqrN3eo52AgemsMBySLU9YEucyr3BGcWwR",
  "key40": "4QN3wVP4akJyaVByLEXzbjg9ZAvP1jHxCAyhn8aUfJdxRUEnp1p54K5QGCxTFRTYebK21uumYJomLoJuPMdpvn5h",
  "key41": "kSnEoMWUxECQ2PE1R2SajpvzgjQ3uDnqFNFQ6BgQMctWuZoAdBFQphm8gARVnmXoGn26oy5az2ovBsDqkrGYXX4",
  "key42": "4JFV4unm7S9LTafC2YFooB5YQDspwsRRprm9bJ5UUsXXoh32DtELdTAiYvDMA5gP5Ta3dKgVqm1tfwuvQicaTaKZ",
  "key43": "5tPcmp4RBGMuXNEYg4NsfL6zVfX2TebxzkRfTfpPYQcywaC1gXPoMosJPEnpK6HHEdpRjeJiBcraeFgwvqMtPLdC",
  "key44": "5aZ54SWPJQSJeyEYAPYQW4C53ekdY5DiV7wDRiD2maZ6CMkhaP6hCViBcV4zoaJvgNx2BYpnzPeRLc2biV7DJuob",
  "key45": "2kQZj1RAq9QRzUHWQd1VpAXTeAVKwimZUfEJ25SDiHQsznFKv3pW3z5sRnxXfNVwxCiJ4jzADphuYmeqKe2DHenT",
  "key46": "23DzGpptfUBhUwERYHcXac846ngfy741DbSAz2fDbsobHkzK1SmDGoaXri8xKCbJvC9mhXaTEAQWcvVuFJxb36ii",
  "key47": "3Cf9Kp7u29PhB26uU3CrUJTXhJr2SzRycZQ5g6tpEy7DeaEiShctDJd9P8J2EzLhmrZtnXprXXVDw9yCZ6bLL7kU",
  "key48": "5q4hggVSqZ26Y51who3oJN2ajzEBt34SEyzSq7wCwbJH8icQsxRFyB61tUb8BA7xgWa5LYPxmYYiPFfEeBv5iuF5",
  "key49": "5Kac5fEARt3J51wM2EjfixzzrdLH7uRUBDMpQ5A1Wmu7ydaQ1Byw534X36aAfH8MSF8XcbMRgyEiFFixCpo9Mpsf"
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
