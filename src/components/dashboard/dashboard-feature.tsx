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
    "2piEi2MJse7hn8ipav5uRbZYNo3RS4HTLwmjqXRwdW6E6Ru3c9EJYB6dLiK87J8neJmbemL4kwkf33CezN2zFQjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dybiRyf3U4bXM4wo9j52QTKfmMmtxrcTr5QtuZaDUxPUUbcFU61wjSCcjFHV5qRS8pkg7MGKvx5JPrCFCzFnmeg",
  "key1": "3zaG23TW2RtfZfnedFu8gDgVtK5MWALUZRyFu6Eip9rhBhYNJWRYY2LYt1HTBV8QB5o3iq64ZYp45tDib3LnxLvC",
  "key2": "48yGuhxA17Kf3nWv4WXnA5o1eD6FNgs4JVLV53K6abguKGsqWrtq6JnF7dTy77Aj7SdjvMqwir52jtHCR2ZRrvd",
  "key3": "437HeWF18VoQBqoHnmrY1jzEmYeAqU9orSYPRfUq4wCJfYxPcXPMYVCrwzx3PxtwLPxNTttqhFWaV8ZqMJdvvQBj",
  "key4": "5YsYtdjmAHxq1jqsQZhfwBFFYkaLtbdE5hBcqE9GMDi2JGK8fB6Rn1WW7sjgcwPhsTuXE8rcswrGvEQBrJ3UDeyW",
  "key5": "UzpyPqN8FTDVKH9a641Qs9Z6cQ3ho9WnN5x5dkExGdQeV4cuq6mVgxnPkUrsHmsznb9FNbbT4hZ3WuzpPZ8AG2K",
  "key6": "5DVHzyENJyejLNyWu1D7Eq35JgHFysZh52iAfe6ytAqAbt1otdVYKnBHqhoNnE7Gvu7f2s2QUt5vQKiMrWhRomVo",
  "key7": "2tTdBBZDirw5J2EbhRxjoQn6ubFdzcVFrTqVHjXTUKPKUQcWBGPWDsp1YGVsSLMtaYQwLFaiFB11PT275FvSMyCP",
  "key8": "5M1c6ooWXZGwnkgzVPgcr9h44jHUHAVkqYsVd3vLqp3reWFDt9HHM9kopByFPr9g79KhCdLfF2FhV1bWkbw7xXXk",
  "key9": "3hXW5MPAzfQWuhMmvtqrpmHJxTAjAsKrTyd7FceePf9o21EgqyaqJFUSeCgk3bUp8eEBbVaN33P4EDcMQarHANqq",
  "key10": "5AUczb7ai14pA7Dw483cVhPNbpmX2TtSbXriLFSSSyFkBMfx3Edemy4ZHGbEsA9EQKtJYt3zEyCigP2gCgSbcAfi",
  "key11": "4kVzxV1fuCeTiEsDx43QmjVZeBAJqWZqHb7N2NbRFzWdxEF5cyp3s2jkmPkBRTgVLiLXiyBgYuNhvDiP1PgJ3heX",
  "key12": "3aFfbSuZZXFKscdJPGqy5TVi7jpMWjwERQmXQndLAq3prsJJq1VGSUH5kVXfvzD5YcpYZRhmSfvimhsBugyTb1z5",
  "key13": "3P6Svvb8yjJ2kah9pRTxKibs3xkCyF1yyNV5LThB9GHk9yhGXrDCn8JcNRaGfeBPqp9f5YaZrsiAuLN33rJj5dd3",
  "key14": "3cbWB8UGbMX52LLJFXsCHstBWMPHjHSWMg7tUXWuMz8xa4HoQ7fFxbPxtj1p6fytmGPwNLWynf1j78cVGNXMrYf1",
  "key15": "4env5YrQvX9ojsKJPigAWiASJNxJXq1UFVToWzRhsAx6ZTjUndMoUgGnTcfa9ZYsMdhFdoE89ktZ2VshEP21PRMf",
  "key16": "3uCmEqG4VFnHTXsFvVM6rQfjaS9YyejmoeuaHKJkuctUW6M7ituKW9E35k4AovAgphbzKjsTy8vThQ27oh2yfwpX",
  "key17": "3akzj3uCFKeto15JK5ttvvnRQdS9f6CjTcYFjYTehdVFKcHtypUsyeGfF2F7Lk14vDvSdym3knZVYsxqyP85ML4D",
  "key18": "4dYvFxFTY8AqA3SErvkFfrdCwbpQ13jCnqYpM93gsPLydkEKc6ZwH3b1owUWfPqXaipdZj8mHXWryzRuAzz2WXXa",
  "key19": "4EUDTk8jQSFvXxogUVvsg1MZTsFdYNd6tk28hWAYSRQsrK5vYcoUux8QxfFYsrWv92qxftHK9Wc63KD8peb5F7kg",
  "key20": "vgPN3pgq1HvUsBBd8zgca2Put9uXLzZEBjpo2c83NC6R3krWSb3oRvpgVRo3tniGfkcADugCZ9mu3E1nqKriQvx",
  "key21": "3DRNbS7ND3BgAb6Vu6oQoau4kKjGpyKJs6w77nx5DHru6tfN2Wd9nsiZJmiYV5cB5Ugrc84jCbcqA6r7AadYZSFq",
  "key22": "C1V31Fm5eSaZWf1GAF8m3vvPJgj6w6SzHbALv5UngAibLWNF6MMcAyVs9CTGdAxhKadXnYVzBwwSgf1J5QnLvyL",
  "key23": "4hz9Dvxf2yQcaWe8qMBDug8fNTMXMygtEdZUPCfCfaLGUHcYTtGjda9Ais1LXF5oSzAJa28AoTV6nmE43r1oCuQK",
  "key24": "5dyrhKVoc27n9B2eb48RVg79SWeieogZb8YLuii1bEbVAdLboL6ukD8EUKKfZpYKcLm6oiFDR2R6PpE9fuAsfjxq",
  "key25": "22gHqs6FRqufSy6fLT9wSiikKHJ4vrHEkE99RHT6w9j1zo76fhumg1NdWfLMjdcc3azQy29GmbKkaGDYp878etaC",
  "key26": "5nYbL5YPgfg66vi5ZGVmg8EbAVpXc9YM8dhQgx9WjkDdUiursgtZJjWyUKbXzgbQ7Ai9YLUsrs9zY1R2hbPsD4pZ",
  "key27": "XNdfoNh8yrVBwdgJXT5zZRMVbeYe6VimHRHnd81E8wjatUxthv6mPcrR5hJLTiQy3yDnEjhbepgKKE7c2QHmv1b",
  "key28": "2MpsKecVA2FmP48Bvnm5si6EvQVCnVkKGyP5bbZwM8QgwcXCCPWZzRniarAsT6Rj9FgJroCvBCgTHuCxA9Gt62jx",
  "key29": "xMSZ9jLuhDTVoXn6kBapcbkNQZ88KxiDenVcvshdc4w4p86q6uAFhA4rH7KefDvVYTDwUpxceonB7oj7BwUDepJ",
  "key30": "3jA1sUPZmqtTRAuyTmZNfW9z8qv3DUuwJeyLYt2iV5r4rk5fJhrXPopMboGfUrMCZZcahtBMpstxmHgmmHJfvd4V",
  "key31": "2PnJdAhohxLUCHHZaAz2J7Q6XtYYLGinKNLfCWyMKQGZ9gMFMrdW3qacsbWz2KCCs8rScGZvHdVUU479s4Bd3nZF",
  "key32": "2WLUGFUeSDFuc8wPCMMEjokRgZpkgb4cvEZkK8v7YnRxtBVCuXpN8k4u5DNDgfyGwvgXt3LiA6BkKX4DYYcZFVvk",
  "key33": "5U6zzEiwYTEcpshWm5iXMKULJTSNS3ngeB3Dg4KayqAYGD7Zxxu49zvDLkNeQJxVfLeo6uHgitgrANKMcP1X1r5s",
  "key34": "5B7kQ1fdE1h8unjejwgzLXsDntS9bKs4UZ92e5RsSumVPr3Fyy1SapCcTyzMKcS6xTMMfTA6yAB8nhTrbnK9yooE",
  "key35": "67LnT1Wze4oMEfNqQJqeUxSP1TLd1JxepxXhrRJmf3gwYfrBX6nCc2SmwFC9abbsyGvzByxj3EZguC5uEX1zEADy"
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
