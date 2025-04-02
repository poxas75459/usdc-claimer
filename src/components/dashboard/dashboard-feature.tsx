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
    "5c9T4LxNbdGkdxXhbQyL1a64QoNgHQhYfUghnpKxaQ11jZ18GJKk9JkawdVxrdSkUSbJ9DLKqnfqmiMMX5UgtF9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eb9JYYGQ6DQqDuiPfqp6SkQfMBefEhbhYRCuN1R1Da29HLPwnT4CdXNjx7C3XcHuHo1PmxksxHeq2svhGnGFk1X",
  "key1": "5EouL4Ag5fZKBLXihLnbTKjTwN4a6MfX6Q6k6KDgiGoHd387UToeBaDkbWSUHMYpuvKihrSCMUy6UtAL5p4SBgCc",
  "key2": "2n8CzeocVzknA4nd6uYYj581s6YZFkkKvLeKLKDte7enPD3UUoTs7H3hS2tGtR65KYLdH9shu5666XacvwaMCtKs",
  "key3": "4oFkJndDnLHAwGBYrfj2uZzC99qtx4JkmY1PX9ahvdCxJaLSLerBQ1fRYmYLdcnsGYqmW7wwSukknZNF4Jxqi3MU",
  "key4": "us4YJs6DQiYiRvdgoVKar3BUU51kRYQvdVbgyR4yq6jzuKbHUgKcPUjh4NqXAypJK8RXhBwXEiWoW2Aw6e7Nkpv",
  "key5": "5NBx8BFxHnQG7yfSmw2vufmqhmizNLo6Rc23qQANKr9t8iqpHyf8Fsdb1MnKMv8UE68aikr8UtNCB5imYRS8t6Hx",
  "key6": "kCgSn2E2zMkjKhxQqmqeh8bXDUWAnESf38JJ6UxCKgJaK53TR6paj9qZfHEkqdJNNnPdexRLDWqUwJLDNT731gk",
  "key7": "3TovJnziMesyr2GidwnSVsm6i1FMvXJ61mfp2GGrzyJ5fAednGtbeLEgqVdG8mqrmjppXYn7hdZLEUsTbCdotuau",
  "key8": "4RCHEBzr4EGZbhKgBVm5yMFFTEoXmB5Avi5FX8hTAbrJgMreesd1k1QG6bcijBiSphWdti5Qrr2ZkgDEbLa1Ypsn",
  "key9": "Bwh1awzBkdLNPSZ3Aj4ecBBv9fYfk1huQUUEdEUycaZyRCMhpqJkJDW238ofd8wFeR2XXXjaMrkvrHp8XyshRQK",
  "key10": "4DLAp27xb5gYXveZcJYcCtN2yf88UQ32Uc8zEFoCNEDTTtAWrTHgcpuz1cgR4sTK4yNk5TTcuYvEab4GcRWXB9xd",
  "key11": "36VWibNph4dkp7cyLMWCUmbBoyRBXdbCNzg369wtwA6h3oJjh8DREtiMVFrfuR3wpavp5SgPvGyW7V63NgNmX3hh",
  "key12": "4TeifDPbm2LwiNY2bmUXJU2Cr2CwLkMbfZHRhnwRrAyYWGx3pBk6U5iVxceGyQBitFg3jdfF6ZnNcX8wKZRb9PbJ",
  "key13": "4vQUhxDkVrDtQCbhgF8YrHAaYX8CvzGCUjVtEmo627jWMZatmxoWCaDYUtbzisryEEQuhtYckUHyR7RwxFArrji8",
  "key14": "nKYGPSpFEpev962u5yqw9Qd65USqfJyxK9ajQ1aNwD96TrLBgJdtSSnhXoQrnEYTAdHpDttG2aogWxJ8EeKRHva",
  "key15": "3mbDNP1ywLJjM9qVN3NojiYfgdDfzMq29jPyT2VtNCyHtdSqn9dZ9r3a8oCATXdx36GbvxQghmwbJJXxYRS9SQpZ",
  "key16": "3oFBzaQDg6PhC5XDYmPAgAep5QeczihMggFmDyHjqC9cAGDjzR6UsojCQ7nHSiwWgLcgZWZT89TFweDKMgTXHeSZ",
  "key17": "yoT49C6xGwrvq7ubh2NM6FUudZ78EEUtctNQHXFWagsdc4bDuVBM4Aq31Z22ezGzPLLHWnpeRefVRQatrSWUCsN",
  "key18": "3CEvnZPwmbe1wKR9wWxnJJvHRRpNt8HZRd1TXovN3Cb4Us6L9SHGy1HVUFfMNVF8neU1dc9QXoNc1s3k4SCgKf4H",
  "key19": "4Ts3uCnMwvCpi2h194ihSh8gzdyTGdRCbBKjx19RmsC7aFcc2WSXxh5NWKcyxqLYPHFzHyv63E2XDmo2jfZvL2NV",
  "key20": "5j6HEgs13dcwSZEePqzqfMKj4Xpgxsfjz3c4AinHaE2uk9Jdz9gesPKd36CLAqxPuefG3NBQK23Qo9rGgBDfN3u",
  "key21": "4nXcTJCrjfJ2uZZ83WaQXqCMxVnNnQnQUmDQMuDbb6DucHqK4nhmEQEWM24G9gYiFrPiQXecqH1hQzSKhCpXqkM1",
  "key22": "3kVmJ2AXbM6F3jEoK9UaRhRg17N65Pb6vcXLCSJiPYLnF81y3fcWL9cEnozs8A17FfYv61D9MXu9EpnEef44TyXf",
  "key23": "2AbNGryz4xTWVhpfBbBzmUxRHE5gW3ad5LDtBFdFkgiru9JxPkiVb8wzkUTyucy8ZstLVdBT3wFnHBSaGqmpH9Ax",
  "key24": "55jvvMp651viSuYXScZyW2VhogNeU7ft2aE8sN7dCfYdYVfoTdVr6gJ13wk4UySQZtsaidM1KaGpqsvyzd94NfTK",
  "key25": "5mNjSXMSAnfT77YoeTnrby4TUdd97VL58qexYMuwFLDbGeYfPWRh9F1ek9CLJ3PaxVLH3pWzb4N2YeREFB7hSKsc",
  "key26": "3X8RWXWiDSeF9dpNfCAwszRr34xjD2NBYRwobnstxGNJBjhNDdyJXqPSkrq4e5WGa3mLp3PooiR6s3FboiQb4xsE",
  "key27": "2t7hYWx13kPws8EmXNkEqG1YsjTsFbAvd9hJ6mj2PChnq8XxGfD1KwNdtydxWtSxfb4hJmr5XpXc23nhFEnEjj2a",
  "key28": "61juE2rWqUafA4UnV9DxbF56KrJ11B34XSnzxwnAfcTvsfvbiF5qGennCeRKthTvKWyubDde7XeAGiwJjtggWkos",
  "key29": "3rLyT3kqLX8u4zGZA8HjV6UUBpnyWReAGygmfPkgX7XTDDECU4YBv2NEYu3F8twZE7tsug7dQA3Evhpn3Ku1etP8",
  "key30": "51HyjeLkt7Fjre6DatgaX3SAYw7cvwC3CAqYC5hu5t8ANhXDkFDHmGH8vhL7zajisp8AoxWtTwwFtYSJ5PhM1mZe",
  "key31": "2HTfC1XtJ825UaJ2Nt4b56ESeFDiqxM9evcRdjRCtBCthsvdQYjzDPXKjeAWxiWXuxm2vGBgachr2zStMkprMoeF",
  "key32": "4QwHXdjWd6zey8YCXt4ba7RrpyqqGydqfortcbFMPn8jgTQgchQj9ARopp696tTnRVMxKTrNjqPrBGyy3nDvfytW",
  "key33": "2kXBdzLnuFczYaEX4ywEUS1VDvnpQADbtfsMmPjAmadAC16yBtT7b3RtHRwGbVKP21jp3CFvmwnjgi6urnoQxzZK",
  "key34": "4ELFgAJ4TCyfcV7rPDtxEHGrZVqyfcuyq4dLFqyPeGDSdJrirUVULP8UQQK7Hn1YtZaXRsxQwhAjjkXTqwmkw2Fc",
  "key35": "3PJbFx6DqVrdecL9QHR1pXb6UpqWPa7CjDFVtW8mEZGRC3uXryjH4t1RLrFEHebgYo3fy8pvKQABLiPYNrSSQRYb",
  "key36": "57RZDWEqp6huqdBb13uGRZRT79PSX48jiQ2jL39grpusTnDdcyuE7A7TqLee3NmNN7LiNPfbHA2U9XLj1FGmDkc7",
  "key37": "5drfD4D1puoKPdRneWLM9hYK93wyuKcv6MpV36karKgNPip9wNvtKKKNjHv4nz1j9zTvPr7ZXVoApYinon2rQ2eC",
  "key38": "38fUpZs8Mrr4f8Wbgd3djgzCKgEBeD7SHLQrFcJ9aS9NuJkwemucEpH751LLRqKLGbYWTXM26zubbrQ1aDMVwvUU",
  "key39": "4qPDnegntT5y9HhzeRyqowAiaNfuamjZftqufkH1dZjjfWY5aJwE6m7c4SHxNMWW3mDJyzcPb2pLGxTF2wJ8k8gL"
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
