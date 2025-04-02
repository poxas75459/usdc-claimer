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
    "5R68mz1NYDzPXGzWHxBeAtyuF9nKD4wJSL6CWDyMRXSPQDPteaiYnq2TXpqM6GjD4ngAYh4pCqM4BFPF26UVCKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StAJ8PF667LHDjySW2XcqsMFLeo1Eg8smwbAMiDJZeDMP4nd3hCsGWpfJB6VmyzPemrkSHQVwSuLeqCFD7H6Vtm",
  "key1": "3gsFszvrigSwVj1Zh3FGbxx1HGMHhuMu2s5o7iVKBiDCENsjc2e29fncVyC9XT3dC91EgQy9bdSpBjYimGtxwup3",
  "key2": "3yU9WEoZUxJEWzNLWLYshVoShpbMhgKWBdKiD2NMQ245Sdr4nrVvVXWWKGBY9YrG7Uw6fA8EnTJ3D2bSMSyuGMTT",
  "key3": "4hMr5goP9kTmB2bPpxdWhDJH6kGaa2jkMjMxD8qZe3YXj8qMP7CVPPB6wGvGSuTHzZubcxtzmjS7vsvwYYGEE2KY",
  "key4": "33foDgyCzb5CkXmUm1jqM16D2KjBkfvGwF7M48XVr32BUz2Ry5oX4NqzDjkAwCdyEVzs3kgHsWE4djyV1PcCoT42",
  "key5": "679EpdPDrThbRQTXhYAARqzdggDFsVwMcf7nVYjv7MJNSXHeX9CzaAaJPogKGvJ6qFpsNNqxqd3FGvt5mYfmxpUA",
  "key6": "2rr3a8zpPbd6c1Q7xoerArM2F2QPY2q4FqWs3KnszYP1dz2F7qABwbkMHJKqkG7nTmoqCUBdYGsdqmguYxtncxwV",
  "key7": "4jQVe8o8NBZ2Ww62DiGFVVYuRB3K8ycwTm2wT4w8ujCZR6wCuvxiejmVbLiNJ54Qk7grA1dLp5LpS3RcvWoXQWGZ",
  "key8": "4aaZmWLSShmCLZGV6us31J99m6Pd5au1FKWK56Acueg7eEpYmnX3uCPurKwA3Z8m28VexTPh9SJyzzpMsV9Xdtjw",
  "key9": "27fZHn86WFL8n76FMGs4vPg2bCtx2frA4oHeYukkffWycSFF9VbmqgNve8tLRkEBBAUsMWMT9meaJEGjBRejQgS9",
  "key10": "3ZNQHxYQLnC5riQ3jR1gKHAmvpVqaBrhThgHfQ3PoCGTXymNJWmXBxnjCZymrNCaJJ7Nknj1VJSe2YbXJYM2y3hM",
  "key11": "2kR9bUTzzAVHerdan4g9GzLfW7ruVSovvCRWyx5eBx5a9XjBNmQffeAwvwweFkJE6yrcmFpXw8FkFV2nXS81X4hW",
  "key12": "2aEatN24muFRkqMUoCdj7vn2mxWWaYnjAEaRN7ebmamaprppXGpURvX8zTprheXU2PeWHKPoXRu3yCsqh2sbf7hm",
  "key13": "VDrkfuvQsBwQkA5t9XcGDnFZwgy5zJ9jWaXiTRZMhwdag4ceJTRo2VS545FA6jhH8LQTYZsfFDFda9htTsnhgq1",
  "key14": "XXSjmgGj7ybkQN9v1oiKdsjYRmnJWcuYrE6kJjngysPqt5KoVBnX1QRwv3QCXZZUvRCFDdQU77B9tHysGvN2D5s",
  "key15": "4TuJbjuMF6M4KKY7ZHbjY8kQmSmvxajaTndpnyY228pvRAs4eHgqwnLrWUZAkZ1F4scDeLiJsmAZZioETdyf3SYt",
  "key16": "q4kwWug4wGGrLgM5GMRMPDr3MvwYswGcPqzX28ccJ2HXDECySPjNxe9Bgvfs4DDNwzMqu84YRNc6RGWiwdGUTTb",
  "key17": "BeM9cQeS3TgzpeF3Y4DrPHa99by2LafgXWf21t8j6JNHQBMLnjWp8zFpqq5h3ugve6SeyzRUK3e1kwBi1C4s49Z",
  "key18": "29ueWTKZAHCTbJR31Lr2W8sbVsM4ZwsKn1cbSJjcauW7EfxX3ft5VZhzNgL3YBS54REbTWki4EZ7oGfDdVeTrs6f",
  "key19": "4Cxpy6odM6jns4Av9FdwD4wf8ZKhgVjKUuc2QJF1BB2DDPNMZvTmtYjCVCRa9Si2bqbV5KWSXc7ETa5hkTM7LMPW",
  "key20": "4r63Ayd8eKG5uD5ZqqW5jQcuXG3VHDY1DP9N7AteaCd8kcbFZwGxWpFb8oXV7fNYB4vK2BdbiGq71ZWUxy78WxsH",
  "key21": "5ocENmTuUmP4f6G6PP3ZMfY9tdNPchQou1yft1VGYQQMvYPfW3u8iGCkm8uKDJaZcrzfD8ioZXZzUJHk9k4vnMZf",
  "key22": "59jM5JbrKmYVTE7XTpXp5Wk8oi4PPEgAMz82YEe5qZv4CS4AwBxEgQbVM5mneBJPssec8QjBBGeE1W6aZ9VQxyDa",
  "key23": "592QpYEh2W7DuubngqamujaMDGtFG7szSDkUZszgRvZ3LLNV9WV34zRdEwXUjQz56wMnsQ2h5w7roFvMj1Sh4qtd",
  "key24": "2MZB37xrNBDSU8XTKgcX9JGcs1eb6Yv6MRvbBejxCpuVoKdJL8ST1ABmQpictU7rsYsc67x9QU8H7nQpcNSLQiFi",
  "key25": "4M7KettGKNb3X8GLnBkS5LZcsxFwYz7WgYQZ1e8qTayhay3wqMzx7cFoitVodxKqs3qpA7hpmkFiBMhSXSX3HjxK",
  "key26": "2Sx3QCNFhgQ4dQLifhje6kfUZ8mWq6gg7XmYHwbRujTHMSzVqJbq3125Uc2YFciPjdFPPRfVi6deZTMadxnmDqe6",
  "key27": "4KvAv1JaaDKCyzR9zNRSzwR1v3foWxDGC9zmDPPio2n8nu6LRgHz6FARxJ9PeAkiLDYvHm25vRDUwnnXoeEs1HZn",
  "key28": "5FoE9iiZZKMtrGYQzTBhbXZMp3ZSh4AaELai2mRC2Tz7btQsxwS54RKusoP4hCAztXBZmZnnxXkCgruTDBaLVAdg",
  "key29": "zymdVtqRdc273MPsqDquu8GiZq5UMYsVWZCXGSVLVBdn7wfPD2Q4ryRGbebq1GsoH5aBEp5DMABNZx4jbAWsP2D",
  "key30": "4nxpeRGWYFwYQSBoBktwE6LaXNq1HCA5t9F8G6DPtA2XMBkeFr2KmCL8giwdyk1Hp7VXNoTJztSnZWoagdTAZ1W2",
  "key31": "DdwH47t4q56YE7PEKQV8BggGE8LDvqwkHnHmCp37kJx3u6BCdTp8AyPisBMrthT2dKLor6UTwXLMVTmEKRut8eZ",
  "key32": "2hwVzRVzfdrN6v3TAQ3tT73jGVCHQPYiZ6VWBg3A9D8LDNZ4MDFUsZQDKAHkSojnZvJFNSNFSRzKrao6uS6pKPZS",
  "key33": "5ehi1s3vvpo6azyrFHVwfZrsybt85nb6RSfaxWFuAz1pbZeUSLR6WAaJMn4BKnHkn8qskk6Yxhh4BSvi85RwoxWj",
  "key34": "3kBLKRh2n9aXyudn3UzeLySEvZcj2agf7YKHhNtm7AikzY22eTukKiFkKGQKJbddgGkjhd3QAFvoA9Eqz8bu1CL",
  "key35": "4XP4zPmXnvHpj4AeQ86aZLB8jJZg43hgwAGJRRN6pp8kB7tUkANMYAB2K1HLsPfx47ZL83xbPnejozhMT2SvaDpF",
  "key36": "4KDyWqt1YJQwog84qnBUvp6nWeWUiXPgRKJNLKg3fmaA4pkfNgRoRo2Z9QgDvG4NrhhVHEVLQjCyyKLxcKw8GeQb",
  "key37": "4gaHGii9XNHsJyMYXTHkAN3FhbPnovht8Lq1LK2aP3vTtdc6ntMCgH9wmiKyMyub5DZ8hM8zQpLDQ9ueUnF2qxxs",
  "key38": "3567keF7A5CRfDM9wsb4ipKY7cLYhGNBuiQRMoMD6vR4kZ3mh4i5hpfXyj7N7vB3m4ehhe6aTNbs7MPqk7JH3ndc",
  "key39": "24XF3kJAEsU2Usa7Q7kHD6wyvxnMXXCay8Q7ALu3UrdniqxgUhhQ7pDQpkKa1dT3METsDbZfdYnm9RcGeY8PFHKS",
  "key40": "3nhb8x1Xj9izG33GoD1zk5kgaMMGFoq4Ar9nWLdKTUAPFsHVjcQgQkAR2sSz2UhwEQ4pFMJ38gKyDVWPzVN2cDZf"
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
