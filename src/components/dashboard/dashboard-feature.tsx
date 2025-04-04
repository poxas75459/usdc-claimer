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
    "3TE81VntAekLYfJ2LJeCmWvudeio8ohY1QaoysWhM8HszfJWb7RmCCFCk4J8sirGkX7jDq4yUrDba2Pw4UmXsPaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kN1nf1AVQK5wh6HTwXm4DB6jXQfUebdSSqDdRY1WSPB9722Rwywu3itPfgozQ9BDeYprdVXtp8yAs5UCyAFhHqv",
  "key1": "4FJmoUhMQTtXnsb1cYje9dHcCGAhxSJiGQrR2RxdUZhgv3Y3QmY8XFnbb5iSq9x1KTxzvEtirxadGn65awu1uLd",
  "key2": "4dBWu1wrouuUaK2NKP1wMFrGayEdJGvadoykHqeKLaC3QNT7pSU7FCbwCdhJ4DMmnsnU3YiZqfjVdBtPUSxpEEGZ",
  "key3": "i93E5QTnt29NqYtaCDEfETL6QUYDdBvtx7cEj4HMBTbfmBRFejyCx6eJEBSAKxm2Uvmz4HQTCJtLMf3dSneWamh",
  "key4": "3ajZff438fnwQ8G5YT9Jaqt24ZQxJimytEYL16KjgtESMuvXH1V1SMiVD2MuaizSCowohnFTgtVgjMLDDw8HZFFW",
  "key5": "SEMJWoekVJ3t4W9um6Sk8bQxg9ogEvdJCc9BYqFtqEp1cjprTHZEE1MnoP8sYr2VHBrPca2T37NvWCMkHERKwbi",
  "key6": "3NESVtm6k25hX68UQ8EE44xJ4Hsj9vcvj42sZaJvjjoBo8dDvr5iCmBLLJW4sBZ5ERCMgWLeNg9BUYbHhanh8d1Z",
  "key7": "33SHhWmShnjPPHzxqbpKQFkFBCR8tKgbJV2tWirXEQoBaoZpfhV3toPftrpc5qdNcMayckqb4mnEYHj7QQ1Gkhh5",
  "key8": "4JzjQWrzg9b2QbYwMUn3RdrwbVHYwKvrrQQ3xDDLi7XAAzcsm9UT4hxGeFXzczT82yARCCECAtRWsYbh9PSrMXRR",
  "key9": "2r9VAtWMdmEo7MpoWqZkz9z7PPvWABwGdSMAPtXB1wuLXHGrfjPRnfYWxFTNM7EpLhdtuedVytcMgNQBAuBxjYNq",
  "key10": "5dBSntYa5mJ4V9V11onTwB1garURiKRfjbBAL45WV9Hrd8V2GpPPhwhk7GWDf1vGVNvb7R5uS85hsmmapCfYGfRD",
  "key11": "2XAo8g4EJiZywNSLDYz8zWniMN7WCd4uxdzYpQgy7Ahis5NABYHM7yCVdvqu2QtAxFtpCiLYFXtcY3PvCUExXYKE",
  "key12": "2z4MnorGgCNGVM7qUmR3VMW2E9tAbjmcpCqc6o6YQz6hFJ3sNZo9pbMsJpaVrB1cMM6Pt46R9sw4jjSgMJb4ga5a",
  "key13": "HqDSYs76tExPGqyMyNqmLivJ4Hzxi4jerc7jne8oaByteGbHJUwWGQWUAPW8REKCjVzryDfjh6yUN8PBayDmunh",
  "key14": "2tZAqZzBFp3uEWuRMWFMpdXvJ9QJYjxgzZC8tdCqeXKRF6eSLfgDikVGzFwTPvZShSAAqr6PDmA4SvGYP3VTwJ7X",
  "key15": "2S7QLRHdmvcmuVKNRmbAnUob15nSEAvQwxWoLydFHB5b7RZHnYaF3n7c8mxyfv3RPoycVSKmKYjzaRfiRJQuY93y",
  "key16": "2Xv5ThPnTApqc29sNeJ7TJJN5GULVgFwNy9XYp5DZSbxmbdzP1LbFddv6JEaRcni1WERrvmmSWt2WfnzzLP8bD1r",
  "key17": "xFx4T4Uiv8F4cEniYBygbGBuMbjCTk9pCszHEuW7m3prpKXp5mScHRrys71QTyhAMJRLERZdWZFvCdkpbbdZs9L",
  "key18": "35Pqpj7gGnVfjNvH4EEvyLjBjYao8otT7yYFEkYsoL5CHD82EPQehCx1DLN1K1GrgcZffw6a98KaLrdTxw9sVtJS",
  "key19": "5huX1GBBNmQ8hUWTbYFi6G9tHxmzhMx1eYVQhkzkZK1UB3GYqhym2qUxCb9Ky4cQHThaNLejkmPWBLc5g8cXTWeu",
  "key20": "2HWSgNne1NwRTpbsbT4KujmHmxtShvPySGABkPXDV3Z5aHo4FNBNXjm368r1Xj5CPFjh9gPG4yw2hvYdDDFpYhYh",
  "key21": "PJTSjzS4dsWG4DPkz8xnnsbi3ehmLWN1xNuE6EVmRoA2QHD5aJ6dHkSMM8ZgurU8MVemT3cY6xVGG5GEKdE9xV3",
  "key22": "38aaMFmYSNuuFMGTywoYxbTTfaQ8DWsJuGSTEVRh8vAuDn5Jz9gFJiJDTwgE65kvucb3nPHbnPewvqYcDQf6Ucjn",
  "key23": "jsrVchTY61TepgoNYUfttmqCXLWwj3yJiwcvRBQEKZFKYWsCnfFLH2ajjydZj35MGfDqCHZ8gqjq249rwoPD5de",
  "key24": "3hvYctxndRu7dDdqepPf2j4YS1kBw8pQUsknxveL6NX7mqA2QkLBdAmoZvYKabLY2eSncdWCY2ubsShnxfJf4GSE",
  "key25": "EDH9D9HtSiRmVakjQnKuFwUrxXAYXA6M7t1qLTJCrny1TC7bpk6goiBGUP7aExwUWVyMpBhRe4ruNjvBa6Ty6Ph",
  "key26": "3PNnRPQ3Vy4cnV1N8kNCymrbexj6hejBME7AJg7SH8Ynsg2KJgtBq9BW8Fd6RMzkVarD5W5ssbyQdsuXwtvGPwek",
  "key27": "sGpbnh6A3TvVMZ4793QFYZuqYCv63qizG2Y56JBKkDCtyjsyc9VNBquchxHvFy5yfu9Y7pFDhzzRxfNfMHsy8gc",
  "key28": "MLVPjcicWUqK9m5SjwcWCDESL7CPs8iyvZaN8naayVh2CUYtmZTj613iUAw4FPQsh6PFnS4qVcCVQgMoyHBbPkA",
  "key29": "5wYnVLLPYvUgfUvvjbdP1hJoQPMSRzFRKXMS3BuFnFLLWJsmFFbzdJHULwFpN8MvctRFMN8XwTsHvpgJ1N7wX4bZ",
  "key30": "2uiJLNFX5nESnpXPAuvmKuHwKnnJ3zUst2y1EjGuPAFF1Z3BYWNj5agWGdKx6q5n4SN6KrLGoo9gjYApoNZ8i1Gg",
  "key31": "4HQ93cumeyydvZZwUnisQxP82QcKpSrR3Bq8bKrb887iMFf9MJp8pLdQhNEVM7s5eqdMtBEJtSq6eM8ChThUBLJC",
  "key32": "2A4KsqPif5PWrYMQqCTCqqHyBhRKT4emAZivHYxNQ4RTNMD7YfAWDyQHQv4Mv8CMf4xxwNm7nFXeLzCcup8oeQ4o",
  "key33": "4eN3BbxEs19fZngbrDjVGq7hFNzSNQvjCGkxr4Q1d2er7JpCsXQMwnqq7YKGw1jMSmyaMTQHJLepBzhFab8txymM",
  "key34": "47myAKmGHSHcAmiHF87atT1wTNAoi9dBuXvHNuusPh5Ebwbza1RzZhZ9TfUh9ww8S5bJhNzJ9hGsviqNPPYow9kZ",
  "key35": "jYQqSerSFgBTsWCqNoi5vQWzK3AJLTap3Go1kuBoMnauu98jFys8fr4EHtuY9zYKgho51FgfaKCn9u6dfgB1swA",
  "key36": "3w4zzztrUrGaZ6VVLq8coBd89PcgFFTzfpwAJjK9g2F89Nq4kzkk6sh71sGxRPAGoaUgNni6S67nk2Yz5zKqCZi7",
  "key37": "3uQ21HZyf5bSf2T255RYi92NmJT3ukg2XyuQvhtCXRjqdPzDuZAbkt7ZsCC8i8Jjcww1sCTCLk4TWacgd8nNhLUN",
  "key38": "5yj71pKX8Qjy6fRRwjaCodXPaaPTs2YbPYL49UuPTvH51659xNKKDir5Zx3FiGJwANEDcJemAnFSiYjVfp4vLkWi",
  "key39": "xHy48e4FLnaPPB6aJQMxo7cS2LpxVHNTuWM7d1HtLAt721hDmogUpkD7dkLycYrJUDWLtfL5ikeG8uwR7AsgX8P",
  "key40": "32C4NBA7AixHszBTDXukBwQdzd4GrSy3H1NAEAZpLFWLAFPgriAsKiUFJ1mUcMqVJfEhTCSvQHJggCHvofkKei2K",
  "key41": "jLd1BZYqyrL4RxnAV4Aa5a4FFE84rzPoTyDLXkmKTHPQtkPa145JK3ENRwoSKTmMXkKNjTViRFygsvnufpeTbiE",
  "key42": "5t1MJzmYzjYvf8i2ZKDKD4dvftzQjTrgUSX2enjgS4NXuqzUxzGnmjD6C98NafjUUvJV4ZWFYqYe4vUtuHeZhfc8",
  "key43": "4dZcKqEYZjy4KmForuRanSSaET621po7bMUcdmPkehF25YGFEL9K9fRyuCyehuBdWsiKqL1WcHwamD37xNkF6foQ",
  "key44": "348fyNcxWrXRuH9HoF8fUpA4s6VQwFszXM1mHpzmBY79V7d7g8RS2cRLuVehVdXjRYp3mPguDkrYhnFsPZmfe6Q9",
  "key45": "wLovH82KRzjX8GhDzY9BomwSGLHEDrtA5RGDV13HUS4YYXkMETEDaJyYaYqK4u1odXt4XZJPBUTQk9wHUdZEVuU",
  "key46": "b2NbHb8y2JMMCzDvmt1ou9Wf3wc7FXDrLRJ7uPSbupjHhNgkRAuLtRZeTk1ttXWtUt4kobmsJsoqo5uw4UYxvsq",
  "key47": "4bJo488cbJ3z49AkPCmz3PSJZnhRzBq416JCnYNS8rYrsR7pk9kNabQg6nrFnWXCPUDzjVWZ4VxPbQFavPbeRVwj",
  "key48": "5u9f17dqfrRrevq4sm3fubxNGwAWXqFoA4u5cvmJTQsAMDRRRChkHsGzqeGLJXv2urVcGkXrMWePzCntm6DcVRF7"
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
