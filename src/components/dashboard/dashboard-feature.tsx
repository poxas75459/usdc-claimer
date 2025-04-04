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
    "3Tm6byTsoKpRFY1EBQbCwGjBYh4bPygRiYEUpbbGCDyeV7zCmwgzEYZAhejuWuCv7gLj5Uy3hDeKPYPrRJqvqC5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FX6r5wXqSV2fQsuey7fCM59Ykfka27YF3yHcgrTjhYVSDp4aRtHzYuuPfPXZxdpZGLAq1YinqDr73AxcmwkfmB",
  "key1": "3eQJDSdwCYtWqJ3HCXdnq8VfMJnAx7eumLQ55zF8DNm4aMc4vTPW4YFqZbgRrWeUp52dkhc4qjtpFJxrNoDz9bb2",
  "key2": "65Gbaniy8NTsLzFTv4mJoY2H9X9SpmjmVTgabreNaynwveKqFP11Dhj8KGHJh3AJJcrFtXgD9BUxCobuAiK74AYW",
  "key3": "4oEQguWD3Q7uKMTfXuuY37qjKkSD7mMBKs4yK1Nw2GYtUohuA1ayb12mC8VZ9MksEq3w5fh5tq6xJM7CZWYgfDsS",
  "key4": "51tRQvrtmZRCjjdSnamvKyQLTHnkudTVL9zgiNXzZgkzuQ7y1TaKK9rU4WbGyaTEi4RHW1zxWnGfqjZquGKvfLo",
  "key5": "3V3ERLeewy24hP82C9T9LED7jEx6Zea5cdUkztz788Q3dwuABkadYZFoCb7NAoNPDUjwZvXHAxZyc25AmQsv7R6p",
  "key6": "uqVzxQYqWiBX63xu4dUvcJhrD1xSniPpk1PfX3QmyufPNrPmW1tMuKaNv1QdjF6pE2pM38MBY4afaKYNEKyDmpz",
  "key7": "4bdke2b2H2yQa9zbFnMXmLwggxZuvwVFuzUvNAqsPdNDwg1LkdMQn3jxaKseJj8t5LCwLan5aeAnAfQzXHNbfTPR",
  "key8": "25hfa8TxRSazN2Y1d6m4C3PZ5rxmkmZp33o5uUZUGcFKFCJ121qx9T4RuFERRcaa5iieguczr8mrt1aaQAd6ZJqs",
  "key9": "fN6CuHQNGbikAFDc5MVfKFpiFyasWBZ13qgCez8nXYKRLo9AHYfKFXcGy6eWmayG71Tu932okKWHC5Ymmpu7Ryx",
  "key10": "5RRSzeiDdo7XXL9TtpWcXtP81SqZcCtKemi4r8QZ9Qs4SaFWd6G7JBKepAwBmYUWTGPGySAVECqHLt3okdywiFB",
  "key11": "22CjjBDPzLucokNqmjqUFEexVYTCMd4Y4N8c4ANSFCQVDyA7Aub6QgFLe7QC9dodx2HjE9CfBKfUvA9drWNUxucE",
  "key12": "2QniMZozGgJSx7cvU6qJCdwDU9y5UVRMUPAi5CHhSx7vcrt4J86REK16NFZaLpDEZS9WryuRYkcgkd2WN93fLBxe",
  "key13": "5sFhhDbXSpjjxXQZRAGv1ibsfV3Mtf7VaQ2Q8CGPMD3za3bcchJFWcyQLPGKBmDeLMk5DDZH62kT4ApWzaypmP77",
  "key14": "3FrN86ndn8ocUBuwmDCGUxqgYMsiezdVJeG2mkPU41VjD7pGHrWJAWrJi6Bw3hM9yHE4WcVGAiHCNCuTq5dRhcnM",
  "key15": "3Xd8RifKxmDWsjwEDqmERyEdB9eTNWDz2FEewHRrcsxgpsGgSkrTEqXzBM26NnQLPEXuDJN936iM4ktTrTJHAQhY",
  "key16": "4TewDSzE7th5emuffuWcxxgjh2B1DGmRjZwimuvh199aHXz3hmjajUU27WQWp3aNtLHNkmNT8fm1X38Eg2ptZZGR",
  "key17": "4KtgPjU7gHa3rMEVGN4TTVJWumKKHZtUCTsaNWoWmtUznKuggBdkdNsXVoYCmKfKVLEny7WPFDegcxF9xznVTZQk",
  "key18": "3K4JHCHLJR7ZzWXFgFxfgZcs2njD5WWkZLzMtYzjLTjevr2cVaDNH5HsKLcaS4n6BpUH1PXMYqWCbESEi6VBwqkT",
  "key19": "492Zuij5QgznDLxrRQjsTiCm1nzr2kvJ5Fzm2SM5bBWRq5gUPVhWqFxusZ6zwJ4mMabsdBePuGkUNLBiiqxyxQbg",
  "key20": "4WNkd5f2kbZtFnV7i38KZ9zoTxdF5PHVKW9LXJfyJYdkR6sUausu3MrWASjPpCwmD3vBK17JMHpXGKPSKTKLioXX",
  "key21": "4AMwP5dPhBjjEVRFrrhw7AoUAGqW6kBSbMzzVsqJdppGNiWv5nvHuzcGhgLhQfkvGpR1j6z6357JtdDg9YDedGwb",
  "key22": "65Q2nLVq4nYJQAR2N7WYSJpXocNkbJVJxZ1NCV231LmR8fPQbFFztxW3K1Y4Lx2bNooQA1YomDnwq8pER9ZJNVD7",
  "key23": "5ouqn5aL3YkrajN5RCLBRwnTZwxtqbNsXwVN4gYpH4SDY72aSDVCvCf6JjgUcJMr4jCap9yb1s28ru78U3Sk79bM",
  "key24": "GarenoqohKVbGnLyPqMetUJifezEYGeHDgfZ8MamzRREBzPWZ3prqHxK3ePeXyUhujnPwRxzBqXVw4NdVStzrgj",
  "key25": "etKfW5k6n3pBrcZdM1nXvRgbMeihZo6jebfEoF3dNWpXnLfDx3edCXq9A44BbHTWhhumXyeojrc2i6xZzdeW4tJ",
  "key26": "2HiApqcLhSAcFvsSZZkaGykbjPk9h8Y1BjwDkGeKhoifC8Raus8ZDY9yUeHTtG9eYwY7vfhnX82pJ1SqV6NEugti",
  "key27": "2jd8auqFipxzJqXZSsLzbr1y9RkL4WUo7vmhaNkzjwmz2hzM7g8CtA8fGty5Hn8ML5CjEiMArg2Ddab3EujjYMcn",
  "key28": "Nx4TL4nKCj1mnKDR26pgmr2nC5fchv5qLFAkFGRHyLH7VZU5juyj6vQBhnnf6nTuU9TByq7CoSJx8qwXC44qqJ2",
  "key29": "56nZFu7vK8y4Vrq7NjNmDvSsxmrMtvdZKH8ZxvwKciMoL1pWKyo77iQKqj4EHEYheqDuFxSmF8DcvD5tLmVgYTYr",
  "key30": "SxXdZri9wHovqFKQJs1WZtPhFHf5RJaa1NavRQd1YhbBEkzr4YTuntJkikuDJw52bcYc4Mn8AJNCTTWJ92gCAvt",
  "key31": "4RhC3oZSTcattphdLhKEkPHkqJ66fnSVTMPdxU6jSke1rCEcrDxwjpmhtqwtSQJYw1QJqUrinUMqTWcStzhn3cii",
  "key32": "4X7z1cWKfHZRphQzz1gpwCqCAJkEpi7iPNE8UKDUZR7fwqCqJPcJZH1oXLdCbw4ZNXCmhm5RTjUd5asX4hoUGcd8",
  "key33": "4jt5amfEVHAJsvX6E3kRBVx8cSFfn1crhYa1cUGotgGx7eZE8mohgNvMiUfQNoT8WM5xxSsrLo4pZdnWjhdFqbRY",
  "key34": "2hJYGZjzt6GH9gkc8hWu8UDW3JDFc4iHkwXhKk4uUFEXqGyUMiDxL7WaNr7P9D1Ja7JrxtMnSA3irjg2yBgBPwNx",
  "key35": "2xxzh9LahQdUP1AVjcfGiU3Std4xUA5N9ridEkhX3tK9qgyjS1xG8uUpHb124QRte22xPmBcV2X6XsEeAm9ipy6j",
  "key36": "5vcqxEjifoBtqVRYBnoJKvSAZcTiwqbvKLfx15SZXQXnurKvXc9mLob7aGSzJpaSga7c3eGvbMfJho9GTShLNoAs",
  "key37": "5cwhUPn6WyX3EuSSZfZGFRP28N9hTGTMsPjYRDbC2EqtqAdWZ4eBGB55f8YdUw4CBPyoRYvp1VgocVF7yu6wXeoW",
  "key38": "4S8Nsvvb7BDUYHuu1J7h2hicVP8KxcyLXAktS4EjzJbQYja78gMwSgNCDXX3np4qN51h2LRUagA6K5vJhRv4VcVQ",
  "key39": "5wrviqiSuMsBod6yrV4mzaDshJqKUUEeZ746CjAbWFCGBDUUfshN26wh1HDu1xzeV7hq5Y43dPyh1F3Sbcj9LRmg",
  "key40": "2hpGZAtHZrCRAvNN5Z6PtNL9uw7NWST7hPxD3nEkdqpPWJQWLeBks9aB8N7w7s8qHzJiZzuJrmfQSVreUFPTN1dn",
  "key41": "3HsWPCL3jhJ1AWSxfwQjQwSJ8tWYnfvy6MqwEbjBHKgf7jzarPwdDngfnPcXePi7DUw6MYnNoxeD4PxejaHH7oeS",
  "key42": "5gT1UFZxmGYpL6qhTbNKCi9jS8powPd8tmnFC5fxvKGfkKgRCcEq8X8CSHWyCZTg5nP6ZyvUyxk8TKMCWcSZU9WJ"
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
