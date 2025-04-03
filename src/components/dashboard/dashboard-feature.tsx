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
    "2MoTcbRDtP8JSXQzi8N7bE2gF5e8S658r3MTRiA9AZu9EaiE7bzY5dAF11XK2vb8yNEPDdht2tNRHRcF2TZfrcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wno6w6cH13YQLBXnu2rrBpyooic1E5rHS9xD4HKB8FEx1Sc1usbNSfksoBqDYxMA53QfwmiRkNsWmqZAc6GnWrg",
  "key1": "49JGWMYHXaJwQYz9gyaVPTcqonSnj6jGXAWAiSvRvfv65qsFtQLZUrRiBvgQCPTUmkfyHtbgFyHKxQGmDMtmEAUz",
  "key2": "2ioiNYYRc8GnczHeY4kUZXxUZZL1GScm9qZjtznSe23YxdyqgnRc4q1ZEdmNHwRtJ1GskAu2yLAdvjpvRWJnXGh2",
  "key3": "63aRkdWvkzuTLxM9SzrvsffLLtAbVcEfffd6kRMDrozqoaPemEao9Y41PvKhSqzRVdFmEmijTbpbMb4zrGyGn4Gg",
  "key4": "3Z1tLsJ5L5tgZvWbNU61PDZM1yMSVwZTrsozHi59PxKj811b3e8PDtbTXnSjDzzqo3gPu9CRQ8gBKpE1rPNh6Tqr",
  "key5": "5hgNm84UBSB1K26duEZRA9Kb2ajoPQ1DJ9cZp9tR6aPUZZJnTK1KC45YVtyBQUK862TMNmjs6uQYxvH7gpbBQY4P",
  "key6": "3yG7Ucrx9vQssA7FpTVi49CXXGepvxczK49oqhy1TfuWwUka9gfHGrS81KrjT1bBhrrM3ratukrDk43NeJVphu2N",
  "key7": "4WA4mjuhERLU34aLS2nijGujX8m95L3kWxThm5oZ5Ue4pkdLdZEZdnRxELqUw1umHjUspfmhLRxihCsxU6VsxwUQ",
  "key8": "2xrZ9cQc2FYZyXL38nBGRRf9qr9THFQqmLxsNvbskwhB415wY24W7U1mum1BUPMBYjHATtBevR2CnRMbLU33rs1k",
  "key9": "2yXW4zPrbmDmtDC7BptTpa6LrNoyKngL2inBfsq1NnXKuJ67QiYFfUXNAW3vRprTtKpNRWVPyioQay81EKfMyZdw",
  "key10": "e6FXG8zbSTio7RmJGw5sL4eKA1mww6vC8gGHv7CdqD8DXJuQLnMCVRBo9oSnKBu7vchEBzjxtKx6daX1wTef1M3",
  "key11": "5W1tWFshtkFAGDBMaZEwAXKpnJYDMbPFTj4qcNjLARfKviUQL82s3MPNtr98th7CB24hXHNLNvZpak63XhEXANMj",
  "key12": "3sNDbH6n3dayUq5WXG6oCyUMETfn3ZpaY6HpwtamtSYpzjiDKYqWhZAeTk2ZYpU98geX6YEy7gK4gHUwdXRHZZL6",
  "key13": "3CSigyaMZ3ftQaewoH6PL5LoAaWR2mJvPr76BysbGm1zSdfKv7VgDyWh5ae8N3REThiMRKXMM9qm7oand6an1wFJ",
  "key14": "KwEq4WTXdQnFUjLQwA5Yhe6fjFYRuhjQmMr9s8giHHqGkFJASUykMFs9qeZBBA5zr4DqYtcvmHcCbogQLAk32TR",
  "key15": "3Xs5Wfyd16LLx5V25FAAmBsN9qnykkXZDTZTsaBYT9dtMrkxheZkRemqbVXpkfhhs9QQo14koVUCMLxdLNkL1qQd",
  "key16": "2qMgX88XFCFGdMHmgqTeqYDYnH5VdSn1XTr6pyN3B1KrWHPQCbGFoBuL9Kg4u13YbR6LfNHs7iL6tVubW4qnRqyG",
  "key17": "5v8gjuNMpAv8CQgBQehwP89icB2cEKh6cFiCdutodTrX88xGHRHushDUWeQZ2tz94bJzjirP42sAD26b2Gw6D1Ph",
  "key18": "3nAybUqcPavsqhAzbVZrgT1EwoAtLqYFdZ6eGiADWpGzvxaJdWTSemHwDwWN7QiBxAdavqvswj4jNeYAUoPfFcrJ",
  "key19": "6i7rskkZu9j1Zu6CRGEwQQwkA6Z6kdo6NNsZUvLkKKKxcLdzYgLKvQyCvZLxXzXnxTAUe5YQwbWgbMF6RTobdNd",
  "key20": "3g5p9nbyqe8EtTi8y1BAN8SLVWzpAR5rdgySubzWzXbc8JEt56gg7bcTAXcM1HP8g3AcE8yK9LoshJmYzp3BBp92",
  "key21": "RzrKpkwPUFpsPr9oUgQKpQFJtJq1JrdiCfLBd8vTNYja6GGBxhL2XREDBDRZwHBieQbYsYQKKkpqF6qCsGSXvkK",
  "key22": "3WzGV6EFJFXp42eHWNvn9oDkiA5DTdgTUzzG5MGNqJHxWGubFiTyRTPQpkyUrB62q54aAiZAqcBkVLA5n2Ut25zj",
  "key23": "4t2YWujQFDGnbGzNThs5C7raMX4r9BVpxFGu1XrSHp1D5AYFd7qCadEvwx5RPS2QHGEjGxkJwCPtUwJ4WdKoBxiZ",
  "key24": "894iEmAWZY5AVFmRqLx5f54xpCrYJjmSU4C82W4GxpaFN2QFLMfUCR8fhhDKzBEpGb613M1vVeoAWq7pjjREio4",
  "key25": "29hfFQfNe9PYVAmXAneH9PPhi3XB5pnNgghZrDHWw7xkGbrBK7VRtfqM1DrKNTQvqmpRyGKqEakmmm3822givVew",
  "key26": "41jCEKnQzbBtpWVKATzsjijMnPufLNseQLTm31V6U8y7yWcXSSaxDDkRhqdfQn15zEozCX1RrydcfzbXSx8THEFa",
  "key27": "nZowWAhELZRUQee52bPP5aV99uLST6XB3F9F2YAmgJ9YQsTGNoaGkaNNcc45gzYNtwi4F86Y2wPSYG4intn8QAt",
  "key28": "k5yW4whDWFpgKrcFsHC31bccmVdFNEhpBrGqAdJFLvih9gPh6NAxQ4sQyuBA6z43QNrF59VFHF3ayjumpgBquek",
  "key29": "5CZ2aEPGitAGzvkgQaqVSPGHER1SQbMzN3LMzqzPs3Rpv1EDjkS8k4ELxEz8jtnPEgZRZAxaXpo17ikhcoGUT7U3",
  "key30": "4zgSFab9SkZrgM7x4F3bkV6ptVndTBwJt1KU4U7MoGiGfzQkKTYijbuwKHgAE2dVZiQKzJS3aegxLYK89Dq5ciHC",
  "key31": "61ssSGV8BpaMDVtEH5zhtMDHnpAW8TRHvzZkqHtiTcrPG5P9n1w2KmdKWumb7cxMmKMbnyDkW3agzSMFjR68wc4i",
  "key32": "3hpQnRiFpVeJE9witQqBx9Eq2qZrMvzipuLZr4ieRXCdMAwSHkBK884VUwTkDoNVSRTAZoRJ3zeNt93imTZBnc3H",
  "key33": "2eu9DdbmmnujXTtw3qqHsEyNhy8aZBvMhNAUWtLevpHrddYAhmAA3uK1oyTzFPfUe8mFdhM88xEb72xPNENjz1aH",
  "key34": "JCFpZ6AQLuFHzaN3urQagioEGZq2yabs4tiThMJMonYGeMVJRXsJBwwVT9UTqRqbeANAMcAoFJGeqXoX24fdU6d",
  "key35": "5fJMqmcDRc6bpCjRKtg7q3kb45rCEfdFKTeaKBqyH9Xxvxw57Ap2icF7m1mM7BCr4UUfod4uPj6u7E7oBFppCgxP",
  "key36": "26EfsyQDuCqvc9wHHCLMcthRGqrHs65tyDsWCbEJ17WUmy1nHzoaU1dzXGqfsgJidTpfCuArNv4cAUwgSpsyu32r",
  "key37": "hqNbrKPP6h1iYr1VCGQ5ofrxP4zzpY6pGWvDxTK8aPLUnRh9PPeNcPbC7cgGtYY5x2AFJDyppMXczXSNDxB15NQ",
  "key38": "4Y4VXXTTxu6Fxb6bBWZuwq9nvtqh9QyNMtQeTvMLcFJUGg47gBATpfd9NEKoGqT8bPFCfYZtEN7dmAHQBiZqaHRZ",
  "key39": "5SUvzn8GRbvFCT5NZ5C2FwtexRnis9dEGks1RC3jV2WpfLU6MfiPJoAv5E92f3aJhUQF6qWD7EFjj7xXJjPd8F3i",
  "key40": "3VqYTp9h3pqznks5RZFRdtAVgP3LEMWxZvcvVnGgcQQFuxyaABtDvFKbvSUq8PmDrHrc1S52mu6beiVUWRVLgynz",
  "key41": "ficqRbXMZoqjsubZaKwwcTcrADqxu21RykzoHP5zX4mz55UZYEsf87z71bcfrxdrLEvGzE7QmGRuqDn565sT1Ku"
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
