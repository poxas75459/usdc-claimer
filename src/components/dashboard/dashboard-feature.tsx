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
    "49HPfdvp58avdkX5fCGS7CMrSjxAtcCajEGLy4djhQ51R7byPgv4aVsAWuHNyAwJ8XhepX6uv7hroTJ8z7AwJ62F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61993tnXzXVWmkBGJMsBBFNcc56doUtkUwHBcxHHsGnETsjgxN3D3bJHBkW4FoeKHXZMBM2ySZp8H5q48YAJmcyF",
  "key1": "3cTbbyj1iLeTz5pqSJJRhY2C7rK4DU8XSWDn2ttpeAevLGHp6h7UV537cLfPqaEWmQAEUKuJL7jWEY7kTJDhAGLf",
  "key2": "iho3DmaMwhNQkxXfzQFHU8tDoHMMFq9Uw9UFBvSrdciuTHge9p9R6kHvcuVJjqhEbc7LQHGruXmAVuu68D7rjvP",
  "key3": "2TnLo2BQwwww9X2zfbMx2AxLRg7JgQ3SNQJjquaDJSfVGxbb6DFkymC87r2ehaZJrhSShTtDjQQ7TZQ4iNkv9GgJ",
  "key4": "58cYrng5i6o7t2E41N35rkVuXL4Sp88epS9LUhavdzk9GetBn3n4vvXuh1syPsnBiAEvb8QJnWkBqiKoaPDAXdEr",
  "key5": "igrJvt3RFrmfRBXTV21q57aBATWpJuVB7gpXfKqre4FWvJfuiZoq6p1c5NqHMoFhHAikNaHvfHAsjk8rCPyHVyx",
  "key6": "3opMmisUjVjLHNkyZr4tQqS2hD4HeiUVHiFH5CZbQioQX6Z2CQ8bAJpjzqMTVp2KV27ub5FXYAGvbyfbgzGs6tke",
  "key7": "5A2sCxT92m9qBcMDvChxdihndRPRWUreZaRXyJzkKKCPZXDQMh4HzLexKvCpX7aZZMUf8pacUBqNDZHjBNkfmzPa",
  "key8": "faLfdLrFdYmujNWkDVe1xz2youRXNH7PM1K4mxuctmHtmWaaW1KhkGWQfLFKisdCST3pqhda6QqhbcWD8Uzi1HD",
  "key9": "2RCCeBvumUs2g8dpsMJydDpjG8Noqtenciy72cS42hrMbgYBiT8NDY3xcKHy98pe6xLEScUZzGwaAE5qdsJ2MEAb",
  "key10": "4nQKRPi8dKQVczzufURviYLv4vaoa61VAfZSnGdYS3dV9msuVzRoPdpmjPvNfcnm4Kxgnfz5qGtabQZJUYvHVNPE",
  "key11": "38EwzcWxiYtfWX9QoZpaSn28Rr7QXpEBFJ6fKUzwwoBE5gkmGY5wtkioVosnq9Y9DyBNbZ1BW8wEUDquXM5G8VBj",
  "key12": "3VKrdf8xeGpT6cjWrUEsKo39FYa3dtiXwmMx5zap6ddAbtiYiTbxfNp3zQZWv2rzR7ZeMP5uuVwAYwk1HdA1wr6h",
  "key13": "3sj9R6XM8nswCKUR94cKVUKv6xMfX44deo8bMaYjEDmu5En2XjTzD1cfC4Gsma3UnZaiBJ9ZpwBxMzbUYaRicp2a",
  "key14": "2pG67j1dmWZE2brqiaJdVS8uAgptQHJpPLHKRLM9iNHJGw1aBQvX4TccCg847jfaZpNj1HVrKgzZXh5pqQmRo6tq",
  "key15": "cf8eAD9PRcgEkEUjQiBVZ5rf9AP2em7EHYrHpu1gtWKUKtvt7FRpeGNv1r9tUps7hXcBVcUPePjXS3SfNAqFJgC",
  "key16": "N9qhqo7nnmSENq9NfahxYqXpur6HEq8w7Eb7mJ9M3T7EhWsGhbTJFYGWzzxsM7Nsrzt7CscyQFxdAFiMqiGHXHq",
  "key17": "A38xTCpMSXfbA3VSNfWBXUG7JJr76zveXvapAgsccnkR1D1Bfmmc4BckFZinGmiiwEbvQiBddHGfvocLiKxiw9G",
  "key18": "3wP9DtCjhnq67F1RpiCvX86S92bVbp3JAQWfWfSWQwDxCZHUE3ahAqktgfzWqmwXBB9Exmwdbn4oKCZcdjztW7X3",
  "key19": "3nWd5Z2wZRqE5FQHtPmXHbvh1XaY19sZET45SYTu71NiFLAKMBfnLgdTkv4L3oY9umij7MVNMoMeZ7QxzS4V2XAK",
  "key20": "pZiTgxXU9pQuBeMkeMKrDu6BPPgGxxxZWeoLEAxYMUcasackDYaRRH8J9J1tsBn9HLKgVUxKPiz9JrGszvdk7PM",
  "key21": "4nZGzHR5ReGfeKEP3fkk6ttmWbv9B5JhDv4iYabjrxRV2QVAegGftbTCVd6NXpkpruP2cfYG8AVmuZe7gFxyWLuC",
  "key22": "quwCUxEL6ggkFtUxY8W2yTGN3hSUipZfbvBhfTm8K2SjSuhpC1pHNhfuphA9PPrvJ2HmSZffz3TMB2cVLZKmmXm",
  "key23": "5J5aFjcWN8HFG4mcLGc3GU3HFQhGR4LnEtR26M8HNJvQZAczSVPTB2XLu5hpF2nKnzFr9VwDjM7m9abdcKFb4DPp",
  "key24": "4mwppQJ4U5Y2CzgwgEzr85kVw1jme9QNUd1sTRv6CkrM7UDkicM6ud9umCgb2foZE9iP5koTx9HKxD8wDafdsonQ",
  "key25": "2V83bzqV5dmSRzWpsvbx9kJaago4G5iUvD7zU1uVqqLAwodjqdkfBiTQNLiuwwAasS1xxdWJZFrcJFEUinrKtR42",
  "key26": "3BDtuGd7Ahx387EYetf2e3hZDfxfAdix8FQPPYh5PRuY4bfP7m1VT2oYSWs4Yi8ZNJx8A9PcC9QNAVkQap1b1cSJ",
  "key27": "2dNH1fCYLKX5ipy8VJMtmjdv2GB7BF9cvENf8aJCCyzp5Fd6chFnkNSBvDWHu2Ye4PFzRXfuPhdjXpwyEcECbtDJ",
  "key28": "2ySdTKEn62A7bysrA84DWWDurSRBsxdZR1Q4aFziYauCTrsPbm73RUWC2xdraw2XYd4dWS3CkbwzBPbhRvJgBQQF",
  "key29": "kQcrhSZbn3huAwtLasVpya9Zkx794yjfLi6s2Vs3AhdubceDa4L7k1Ttq3sQ7NXyn6XKYXS1NpN5tPWg8MMhkKH",
  "key30": "5Nrg5c5QjVtxNoeGXcnCXPqFAc28MnQQzmwwM6HNmqakcaY27mRmmrGsrFJtTVPzKfJazRK3q963NZqQd5Abxi8v",
  "key31": "3rjJtiCTJWjtmWtnsxzJ9JuCNb2A3Lks7fLc649p4pbvdgme58mycthKrS4S26Dd7ewRFVdnPuUUDfQiqx9nR2PS",
  "key32": "2KTFCRzQKYHwQgt9xKqqZM3eVFdb9EDFP4XR4F1nUStGUG2YUDMLrko3kLFyc2NjU8Bjc3PJyCSJdkC7sZ3Kdzw2",
  "key33": "2UeY6e5BnHmL7Whm8J7FsbDzubxgmNAgadsgMxB9Hong65tHqBk2aiAdrfP43DJAD2szYDneFTXiFnP6smr4Po7T",
  "key34": "214rVPA3sJqAjvb8mKox6J7EBDHKqLWd6ZYZ3yt7BbBKHhnzauAQUPQXk6waSGBkp9pw9w1xRrxKJRY7iWMK5dkH",
  "key35": "3gKSmFukNrmkn9f3vYFTnSN2BUCJFe9DmH23EFB5wvSX6xoJRM38sHDhXRcsGrawom3uz7pCMCYuzeef6xqgDkfx",
  "key36": "32JSoQNKTC2hjSXRMNsaPGEyXenpgtbbs7tsgPn8EzZMWhaBeUmmFyy8sUftthFcboSZ6RvGrEiT6uxWUZK2M5fc",
  "key37": "3K4tjbvXJxBz7iJvDz75b7zdSTkANzV5Su9rdFXJFCj6PgRhtVX1SmdJGL7uMZRebMj5WPjpMomK8Xbc6KDZhVDc",
  "key38": "38Jk6yiUf2yXtdXs9jqkpiN2E7BpxYnj5KU1bfLm9QG5rdby5HRg2Q2txem1mBZrAUUjQvbHRYtQcEpuAxEd3YGT",
  "key39": "5L2VhJwjaTqvdUoeuXvbjpk5tF3oerQCFENfLuD6UgC2sCqXxsT96PgP6iC1Nv1WT8w3xiSj1fogqK9LLJqpeEzL",
  "key40": "3bxZWMnsLMY1XXt7BHcnmegP1Kh9kc8iEFy4EbzzaNaoMqnmazYcdoJPQqnagmoqiGRZF89kCZ2EopT4ddf8V6L6",
  "key41": "3wkBsfniZWktsanDHGpgH4Q6ChKSXcTbNz2VWL43YJSC1LV5bEY3ke26U5RSUfyqrCe6iCcWUgEoELHp7ZfzekaK",
  "key42": "5t8CbmcT93jvwSo1aC7uFj9htV3ggzrEyNCT9Q41Znr2pLFfmMH16Ckh6AKSsN4HGsuW1zynEiVADY17Fwwv137c",
  "key43": "LtPYucYWqJiAjrBicDhEBDbbKsUaLciUtfDL6qvaGPkbYmCLRS8tkdU3ES4AKmQVCFzh7rATHiDkv9DHwWnHxZN",
  "key44": "dx3eJjyYaGx1WF7mhg2TrTJCZLmKcTzC6hn98NXGfcvJQLLCauqKwUKPE8hZM35UiccM83ebhUACLFgofRhgi6q"
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
