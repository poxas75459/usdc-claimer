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
    "3oibrZx7t1PNpP3cokpkH5SAPCdy6TuxcbXuNACeT3eU5tsB7BKBPyZd3W2GC7KkxPpHRCGub6T7WFfSrPpuQW8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nk2LfbKLuA7kq3DQg9AhJi9M2QTwwNxHD2faLsH8p7LtevgobLoX52r16jbqF8PhKKp9xwyAPu8UFufY5WJh8fC",
  "key1": "3MUbkGMHznPLHDnkM4DKD71EFJf8nB64tH7MsV9Aw4v8eSKNXUfWt7aFoZEyaFZsrwBs9BQ5k9bxMwYM8a3371hF",
  "key2": "5vKU1xGHpbtWY55h9yDsXLWdtHk8bqNVeAABbRA97gif9sDFhsHDD2JcqhJhita4vZmNAMKYb6qTxBkydP81UGWj",
  "key3": "5qKPhLCTsB6Bj7Drg26ZSuYkNXWBiNVwZiLddp5M6mnLzLni5ek43tjqv2YirXytkMLgsE6XUDaZ5u2RBdZ81SoP",
  "key4": "65TABjH4qboRto7be6qkAa7ykPPcGgkP3AG6t3TBpzGRZSZ8xLWytjnxiq2dPYD9xm6KSoMn2U4xxp6WZc7poL2k",
  "key5": "52Magqj7bW3roTJRE461ZfNP3XsxCvUeKBLMa5TzaK6P6mmbHyp381yqeckcqrdrtmaTgxsgFLuDKofxxi65GdLq",
  "key6": "35fN7ZFozz24UxMjLJ6wNeAWhFCuSbu66DBTdTjWiXVvedEHV5nYU25Kb5WBr2ocHWq7HELJ7oEkd1SkMb3JBTCM",
  "key7": "5CRbcwjDRm6iuJUWGBZmJmgLdG5t4VnhC63sNDQb6nWMkToLctiPfnzvyb9GMvVbNGju5NmzfiT48gu7MxtvtFF9",
  "key8": "64vDJhLVYMwky439oTiobH6sbkZFtBFZGyMBa6GwTkcM4N5NCFjfEVLU1kXQYLchTdQ4Dbe6LXY9rNnbisvYZcwk",
  "key9": "2ZJPQBmfFD4sDTEDUS68P1esxHymuftUb1YWVymuWLKW67kwj5n3XhtfvhWWiz4mrFecd4GkRz1dUo6mydcr1jVL",
  "key10": "2VQYFf6zxE8ormsQtrHodihWsGMJSWBJBs8CZLS1tHnHXN2WupszuDGpLvPMfdBjb2rdwA8HzgZARXeUSQNtP2c3",
  "key11": "cMCqhCvvtP3ffmpYhn5DGjHhcPYzH22vTxcQLU7cWnvpqvyynK7wJ4rsujfsM1gDtdub6mVtf8gtR96zL4NUrzU",
  "key12": "67b7jEcU7uAS8TWX9Zr3ZtxLN1VazeDSjuLsdC3JZDwG3eDXjosbWC4bNJk9TpWWfNbR7Kz8uXo5wh489S8zJZfC",
  "key13": "2mjTrVNeTQNF2We3q8Xs395naHPkLU4zoqgbQURPFBPBNEza7QytYnHiiWx8aqoRZFjfxf6xZ1jgkHtdvgCnmYk9",
  "key14": "McWkZKaczBQA18bxJf1kZ9VJjTRT33Yj6CsqgYnw2LDYGdPocRHWgggzvB91jM7G3YwduAXrtBiGWNNhispcT2n",
  "key15": "4iVxfusBYJM53Kiu72L5xoaYe65wEZjL5pxQD5jTEXjgeD4p2etLwYAD7TSuBciqXmh2kmXxYgFMMCDDhjMoyY9J",
  "key16": "2ZbGpL6Qsh1LbnNYNsRmk9S96Jc3bZSxh9BnimfNr1eRz1peWsxX5MpgQgCcTY3ZPmRFTQoUBSYybAMbZgSUQsu",
  "key17": "9Sd3hdTAdDjuxiDKK3wBTF9uXpRUoWDLGMu1vNqGiQyMUjGrNSbvjC3yk8Z4dJ643XzyruPUi2geJZRBGTsK4vb",
  "key18": "FPTqMAMMdJN7CpZQC4uP3FHPqYSZ3w98NRRsBcJ1g8gqE3art5bdoFDnGCJJxpddravG8GnUmtqTzFjpea3iKc8",
  "key19": "6ctkCy4PLgPspdvMC8DCwgbXYTYnpoZ9eqA1jwvqECu1jsS29WrsAUmCVvdbXjZPDwBex579uSC68AYoBwRuf2D",
  "key20": "2vtUwHGzuH4NtEktq5e39sXCsW11xDa4bceBh2eouCStavYnFvMNDsKZwAYDQvdfAGQ6jEABUveNjJLcym8DPv1X",
  "key21": "2Saj2HCCyWMfEy2Ty1Sk2m3Ym8Szz3xZyCzjU2HgCvC2zAfVSKjRQFUBcu92iLjQiXZk1bJkPWw9yzFWcDsQZRnb",
  "key22": "5pB2bTMwdjuU3w9sBHWPXF3Joa41SPgiHFkWYhVEzFrZ1VjgFRdzYp52v3Z7c167WiX9Vemo2rE6eX6A3mzZRaar",
  "key23": "5YZvFqhyiy3d5zmgRTu6uicsJHZL8dsSxooy4GPfEYdsjz6YpsZuq4Zw7QXmmz2HKEvwK1Ws1oMLn7jj9PZRkQuT",
  "key24": "5QHp2itghnc2tazkkTnCK59h3jBoCkGyKVmHavS4mMgZ63uJGLUqRgZYCxNXzoY2VEasFDGADbq8JJ3r1UBocNA8",
  "key25": "jYNcm4cNj2NCxUX81wE7e8TE4Akpjm2wyudWeRL5AEUPV1qHW4oghi3FddmHM55GLgy3yqb4LwXB4a8BdXcC6kp",
  "key26": "4EMgzvujBoTWrZiqvvsR84erej1bUifYmjQWiw5Km8wufGU4LxKtc3FzCxBuiygyS5uE5MhbUq7Z7V13vSKx4utT",
  "key27": "2jKgmQCCjpWUhrMKn9GgHPxqY9fXb95ttpgicmARWrPVceyCAwNXaQgvDuq479iESVnYdHk6dU5dLeCe33Qqe8XN",
  "key28": "23oKDgxnsRrxyVQseeZQZW7wdMdhqHookgkSpVqaZ86wtTmtdrnrWpMC9MLKvYitk234xZiLSNBH6m1VcZRChXa8",
  "key29": "2YkHzYT1TEjUnHRHsfEy7in3g9QEANeMi7Hx32vg3ZcoEneRFqELzzjAUBB2aUXDr2qeGnG8CX156dVRMi7ZQthd",
  "key30": "2w24dF1cbjrQ2ca86rfYoWCFJGGNBnzT6W3SgkxmUPwus9AqE3SGQJVJyaZMfCnQXEjSiuX1KwvBdyWjixUeEVTR",
  "key31": "2e72yhVig4Jc49EWe6Kehb1xwrjV6uhPgR4a1gaSagGaisa6pPKZX4rHsk1YdVuKxvnzaG2seEs3yhJXscr87w6m",
  "key32": "3mmzMEMWA52rwrnia4E2yDh6R2TPBP41UNZMTjHS4pop1Ak4bRPruc2ME32MmmiLRt5XaTqHMpoEYj2ARGtAJvda",
  "key33": "66YrWfAoWC9vB58LSN3oSN1xVQpsQhcyYKtgWLQz2Rutb5rNXLA21iFWg3gPr578xM9pF5ffuCfq7DgWAC8npxT1",
  "key34": "3DxgLUCVRsBxo8Pru71S7V4Mbg42rh3sYjtdgTLHGavdPbxvKM8pGPE6CxoZaMw5yP4ELR5j18M63a4vn9HgwH2",
  "key35": "3zpLsUZLC5h6PkJ4Sf82JqXGJL9uVHdG5LbhVWWcfJqnAoeTjhF4W7P5yzjtd3pT1b4a8XGEPRx8duDowQfyF9wq",
  "key36": "2q7DRAFmrJTV49bcdAsZFiKDQBbsACacvoojJBBmA1PNK4df2zVh73uC9sEaYC6iT93uZeYnqeLSxKvsS8L8Cac2",
  "key37": "3AVrgGV2m2cfkh73ZJJCZdxnbPrXGWE3G4CJXT5qwcyHc3VvkzM43LLV6K3qkVqhbxJXAcC99T6wpbFn4EkJGoof",
  "key38": "5rwwt54kLtK64nDp4jKe512hyQJVH5D1QPMyL1ZsCZD4Pdu3n5DorjpHg9mZ9WRs1QtUSjf8YNt2HjBgZTkGLVve",
  "key39": "4aa5Kz7po9AbYBrHi4evZb77CXGH7GRztaMcDDbhFS2phnWVcP1cXKJfy66YZKgz95jcwPDKMDEGfq94Waewa8Hw",
  "key40": "4PaSVwSE8ttkh9k6biPnqmVVbUjDsb1cqNsW5U6f2sRusMd7vci1RasikJhppi7fzyiQ6AvyqGHaYX3RxyTfgLk2",
  "key41": "3Yck2Wu1s4j4GBxfrZQRXXjkKSaKY8jL8z4mz6a6oB32GuUCWz1RLTciUtJg23ZZp6PaSYKY6HAxu1bFmyD2xKsX",
  "key42": "4DMgR1Zfc7vTpSZ9Sf4EDZHsPRMyk5JuxuVrJRDMia6FdDX5TwAt59zaeto677wgtJoLZKCZUfJV87rtcCmCPZbw",
  "key43": "2hdixtXgopCAh9TYYVGwBAKjcPyF822nQNPQ8sw6pTgc3DFwoZEbrFJXhEzErdMcn4dYRtJiSUqAZauEQ59Rk1kc"
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
