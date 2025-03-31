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
    "5FnhbiRmt655hWTFUSEbtBzdKJm3aoUdj42SKQzh6GahTtJVauHYwzbbXsQ8iXSe8Vr7tBtTu554NGq7ALoEW1rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATzjNtTh9vw6dJ92oG7EAxHN8v6qzWJYSAUEHYS4KQ3xweHat4SXBrF5F24iyn1uGpXhLopmV2EEk8LKGo9yB8b",
  "key1": "2FrPsZs5sZA1LVMhLLLsbB6MXvCu9Tze7BXpXtT2YxJKY4Jrdof2r4pUQJyjmqAoD8EbBryeVqwmYF5Cou1sTUko",
  "key2": "4Cp8Dgzym6o5aRuCMj9o72UFkT1dDn1RAAuU26x3tkuUhGKFKuX9KYV4T1Qg2XNvPZNGxGFkAF4E1rZ6SterAn6L",
  "key3": "5mQByg7uaSkrSNjtfpkjZjtDPyqCodo41sJ9fpSA4bWESMDeMWpnmP862vs9TDWcreKmEdsf8YEckey7Fj1qaLSx",
  "key4": "5VedV9L4t58wTG9VUGGXzAXzsVLWDuygAmRxUFX32gm3p5RCWL8TmEXZwkuM2U3bWeiVeTWPgVdxdqqLVsEgVvcP",
  "key5": "5yvbzBAFsVGQgPJEHGidz1dDN6p7SH4sm2vjJd1XBcPWrSQgGiESTjryBobCJoFh6Jb7gwUGkKx7qaGWiUqowaEm",
  "key6": "2msRFYm5niFiXkA1YEzQbhJCSuTUD7PJpm51woDdKiVWJvE5gfA9ZEFGGceKgoWJFLQqCFdNqqXJFQegFaEGZZtH",
  "key7": "4CYDmHwoVqdqHtWb6iMVEvr5siSmWjfY6T1NrY37weVAAunxh1bYJwwB2Vsej1pWFEVcRh28zVkuECxk8FTjbGDE",
  "key8": "2f1C2FmKSjNhZe8CVMNqHWnA1t4dCPSJWeTMy3ciBdEnApemsTMFQ1Sw6sMQm4RJXhdxtYjmhnphestEShqbHqv8",
  "key9": "3f3mwQzAUaEZGf1s1weJLnRJfnLWd4nfm8REKVgM9z9mubPbTm3eavqmz4wg63612bzAPGFVQWm2Y9uWtbr9cShM",
  "key10": "5AHNFaeVUvGSs4e6T9AMwAZAhBiJ6Xx16jcS5VsafGhubddSTfg2iMpTCgJS4ALtAwWjfhJE5B67F3jJoJy6bhx9",
  "key11": "4q22bpjj5zw2z7KmJp6tNsAY3x63LhGusiZw9cBMoKy1ePfpKcwKX818zuEsDqs3FVRtr5Km28gdTXnATGAyVPTk",
  "key12": "26W656PF1nSPNevt3GHjxRijfjiDZt6LhzEG2ZnNUmvrLQRZEutLhfwXMcL9BYEdbsj7vhFSP9L1ANrDfVAPdgjY",
  "key13": "3vcUT33mDhKN6PumGN6xq6VD8GWbAF28SbGWoZt9JECU8LP6jGXrNj54iSyjr61yWkXTzHT58NDNgosDwBQNLBfu",
  "key14": "k2vUAKkGxs3rMU5qWFdtf47XF6XqZmAPBqrNQs7hTZhdiRTuxmE3uRu4EGZfNP5Y6Yc8aNump3uLCeBWS7UnvQ3",
  "key15": "2y5sioawnWHqzzd4nJzZq83Zat2sFC8rxyKzxoGsWx4tNZXXxPEdHvh15DoPpdd5m5RDsH2oJY6Mm9ZQdM9X74ti",
  "key16": "4SjqEfZ9t7r2QCzKRQT3ebPQxunD65J5LW4bzerqwKZnMXHBX3f1NP8vFg5zgKPnQzwTMdPzmtXYme2o3CP4vHse",
  "key17": "3B596jHTffVqWCamnJysnGfMn4zoSNre8rnUZgp7agQXRymEA8dEGU7SgakSZWyD6gffD3Sf9feRoQ6zeiRPwJrX",
  "key18": "5NnKqeUYzJfMbr5ccjp45WJ1zCgtMxh25XzpbHXKb2fiyEuhpNBMyr1cGJwGd7KUss6Z3aCacUAHzJ8xK9AQuyki",
  "key19": "3Scs34yYACHwKPKowS4bHeF77Yho2jfvbSagFUFNrZmriBt3mXQfunN3ME7iV6uLWhHhgzpuY8VFnq4pYBpdhh2H",
  "key20": "5QmApJWFVnkTa4b75LUFTVJCP2ZcDLd3xi9ZeYHh432qrUjJWqEnFhvH3H1wAZzc69EVhNvaQRScU2sVcqY9KBT4",
  "key21": "4BkarWjsMr3ypAEAzzTSvecQUUnfQm3w9fHKtVXYohB47PDp2jGconwt9uzMa7maEcNSdpEM49sxpPgkN79qUsjZ",
  "key22": "2dfbnDpQKTbx3GaBdQmxhcJudLQk47FHeGD9BHaDLGtvXtt7LbhPMYkA5AwS5Y5NC5qajQBDX5nJsRaS1i9R4pMo",
  "key23": "4KoRewQAvNbQGEfohHPQaySbPfvRSgAZ1Bnvetsp6kj1ux6CoAfRZu3JmuPehimBNuz7GNGjXKLZpqcAYZtVR29p",
  "key24": "677cvcL76rNzHybtduckzre7145Zsc5ZXC2fSLKbnXJsY1PwPr1Fni9V4vXyMc4VT2pKqpTZfhQgBDVtgvxsrTWb",
  "key25": "4GQbVEKijkSThB1urZD3c67egFdURUSAghAFyBuCeCWCjkuCwZc582hTGFRgdTux6nhZ6CqNfNz8QPYDRuxagUjX",
  "key26": "2KatxJZNStCnoXtn4GfL88j5U7ZwsdJBsTuN9aMcFuJrzm8fB9Qt9qCT3DcQMND1E8rJYEpadNd1fnEuwMUVwBvj",
  "key27": "29evRk2Wq1ipffKyamNcKp7GmBCu1qiWp83oJZeRVZf7yYYrJJ1QSQUbd4Mk1V7fomAJoPt1YjC56XFgfLvJpjFR",
  "key28": "3udCcU1iCVjS7u5pV5HKXzq7r8dCDMhW8DQqdWXc8QkicmBgqKYEZcPWr7gYNyZfTb1TZYLt2DUSiUw7uSqDCfVj",
  "key29": "3RRXqA3RL6PHv55vMGz66xJmR35S33Two3RtWcPQgas5PWbD8LjMJ9DqSCLjCnMqp9q4wjnSDbpEynTLdJVyQWcJ",
  "key30": "G4JRAuDisWoJCJb4mbCRkJ5eWNf45451ZVmtbbFmPwabrECoMVv4XbUQPd3tRbM7Mz1T9WfYa7p3p3n3qLzSZAS",
  "key31": "3zxoCVa8NhqTeqCNLxiM5Q989A7xfUw4btCKJt2QyNkaDCtyNrL9D7AjpwxbwnJ3dj9QDMQWUhvYkTc15kpG5xjo",
  "key32": "49K5ipTrkgfKFSQkpcDf2vGqQ6n2925r9rdGipL4f47HXW7x3vBgGBhMZ6dKFxHDnMp4ouWPFeZoKhvgcVQzeCbp",
  "key33": "4EXJa9WkpAX9aRWNh9zrSowGcfFiWYDu5GpeieW1C2BosWc5LFi6ptas6hLZeNoAwMACuG1Xn7jt7ms2B7mebY1g",
  "key34": "2pjsUVCYaQGunjqHdVGSDXQUtU4AzBfuDnQMioKYeyVKEFficMZt9B3PDSZazVEGfkXtxQNyhaDmwYxht6jLqNRS",
  "key35": "aksPuWYuLjWbony2kX32gEieshZFWMVxa7WZdvjGofGLYq6VasXtP4KXSGBDQgXqHxFwaF99DkjS97NSDtex9yQ",
  "key36": "4R2hwEKp3QnpKBAjciqA5uUMTHpaBiq1Ko5C5BQgFRoviDbEfV37CH4x6kxNj2wFYSJ1fMJ9iet9SPqEfP96Pgba",
  "key37": "cNPpov96FnnSe7SjJ6HsnYkKLRZx8ckQ4vD7XK1A8mNZ1gwM7Wcnuxu4FNdkMw9CXcFjQuG7h9u3oX6ur6oxecH",
  "key38": "3WiWi2FvQPyDJrR6xxWtfKvCgAGV5NeQwhPRpcfxj382Y5eYH7faS1nujwMxSatoGpqT1zaWsGABGHPe6F176BNW",
  "key39": "H6QDpHXakv1pHYtd6PhsoPSGHd3DLhZ8X6MT5X3tcetwrXAVe9hoa1Ufs5hyNm1JCJcY8GVpTvJg5g7f8PPaK3b",
  "key40": "2k3Gs1eQSUDJzF8dxobsC3tNbmPyavzCa6feJUautHoi37LhxpwcHfCmRdWgnTtCoG8SsYcLU223vRB9UHoHewL4",
  "key41": "MXQNXiF8UiHkRzEB6Mf8KyMPACicgkR9E2PDdF4EUJLufvgwSENGVt3wiRVMc21NKYe8ZZntrBjFheDj6NHS33R",
  "key42": "3Zb2TY2eHcY1LESFqnxYZQ74NvnfdAcRFkhjsES163nJBMeW5j4DMLHAv7Pny5LDrFTYLeyynP56zbnhRCaRUPPz",
  "key43": "3pWMP5ZxoswH1o77JcKGkuyBDCQaPoxLSvP1pNxrQ3HF1ZJuNLnS2XJRVJYG6yg1eGzD9Q8zMv5uw7N4UHzqKUde",
  "key44": "2rtoopgXzed87RaHCpUbTao1HrPHUA1T7cwwFurkbYMzxnD3XRNWhFVxx5geiN8Zv7Qo7ZUwvimMYWepv1pbGyuy",
  "key45": "3si86cL2rbiGoZBwULRT8H9LGjq2BfUYb3UArLRrRbJ6LFmeKKZj9Nwcm2kq8UKv4RxC28GPDXvKgviHjdVjRqhg"
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
