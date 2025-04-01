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
    "4HXsTwRfYEpSPdBzdV43jMrYpzvVjea8LxyAWi3wEaH1rSZSxDAmMjg9ynFyraNpCqmmqGggmGucq5UzcxQN3xez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoLZVty24KsG8dqPpPLVbQ7M8gAWSiT6xtTZHLv3oPichxs7hvtYCp7GQbeer3uJkE8dTtHPbwn35iyCTLAPm7s",
  "key1": "3VzwmE2P7gz8LMi7QjsTDKrvrji4ubbTCnmmKoQhFNkFe7h6EF3yg5etYiuEDQS3LNStE1aaAiuK6wG66E3FXSrY",
  "key2": "4deStQYhqcj5fHKdTruUDfj41kvZ3wsbwNGH4CJHMoS9M2CV45tRDy51yuFV92i1SvAYrUpt8nE6f5Hz5bTvdajF",
  "key3": "3kN9QymuobGju4JA3wNsUm7J6AVyFadqFkpZb3cfcnYjPq8w2uzg2yyxy4PptbpBzzQyPGkY9hXJtmry9ayWfs1R",
  "key4": "64YcoTz8PcBdu1YDNQf92qpy2Bswvcm1PKKwbF42C6UGYKK2py5MhML2VTvxk7VoJ19yXuT6PjXiahZ2gJ41G8f6",
  "key5": "34hCWge4EWYUMunFxVRQ9RJDcr2AtPNJcbmBV7vrVGw2Nhj1Ea7vr5MQeRhVm63RLaPtGA2Hv6vJ3kvk2UzHzgED",
  "key6": "4Sz8ykTPuFAyj1Y9AgBN1GE9ghyyTNi6bF3K9nCiPBVQEs9sXcDHbB3edCVXdAHtrPF8BMUxzTiVQ6VQtq5TRcCc",
  "key7": "5gcq5J1HLrQSSsFrZPkpW4jTJFihvQZP3pzCbkV4bEd7hthUgrHfMnZvF1rzQd94bGSb7CBaYmzoQzvS2VHvKRAJ",
  "key8": "4J96wQKXyc7yq64QtSXBoqtBd3KEP6vQyebBVj3wEFQZJw2i8SXun2Hif5DTbsFMZ5kAVcQwkUBX49mpyRNjZp1o",
  "key9": "2fBLLRaML43qJNEndFkJ7ovF3zXABQ16iQzasiZFqSab2s8ygojAuGmkAEviWWGwd5uMemRwXqgQKtji9bGJqaxN",
  "key10": "YeocpPzFcBou9YBtyHN9Ce3Zx1D5713nVsonkMEBKuFELbRFmDifPLTQKnpQJMGechK8V8TzwDVsKVb1gH9sUXp",
  "key11": "GfT4Bbr7wK9CjWSaZjrs8YovCFP73irdqA6TCwi8bN1R4S4v92J6RYAovmR6b3enYMLUVihbNYt2mSrokL6wjhz",
  "key12": "4jncAGLwmz5cEcAWwimdxAB9YKJTxmocyd8GjjmfizYyJiNRQt1u7Tn7AcZ4dmi1LD4WujJqQr7pT46AY8xdS5X",
  "key13": "3bXdE2AhjJeowbXrdUeTjRWSXExd61AXPzZMf7vaA4DapsFHaHr7aXjMBcZxeHvwKsuxTqXyHPvwG3PfwBkM2Yyn",
  "key14": "2NjtGJmqFpiEkgxLELGSJvRUsHNxqb4Y2mvYjoReZE9XNbmpJbpFPU3Zv837hQ34jq7YDNVcB7WowhJoGg9gv8db",
  "key15": "5nHKxuesHRLhkZYtdywUianqZhCp6W34NPCb2FjajtizZv56crEvGAu4wqpwt1AaV5X2B8wBqzdSSp4Nh9NAxTns",
  "key16": "okpvv8B8t2ETgHkHMFqccaNEeJKUMuXrbLPEH46MsrNcntZTg4BNBAqkjicESctB96aovD5KMWvHDxPAQuCqieK",
  "key17": "3CokCdcoWQrVwjTEUiJqEJYWUnwxrBrKYJWBHqZ59P5v3Y5epEvtyefW35K1vyWZK3XCx21a5Gm7DYrBWB1NQpnM",
  "key18": "5jmhzB1iUqv2JE3xjdMqsMLwdZBg2qer6M1cKTxrS2s1UCako6QmD5e6sRmHrkGCPFEMohHuJixm6aeZCz1GZGDx",
  "key19": "2KJd4hQ4ngudrnoau31yCC74t53QMyLpqyYnJxnhQGw1zRvBRfDSpCzsqE4nsYvtpuqr4geDTwhY8N5R1CH8Dr8p",
  "key20": "4hzD52bFfAp5QuK6Cvp4C9ykwFCgs4FTxsMftZPQGee1RJvrqgmB1VQ6co1F62H2RkZr3hZieeC8oHecpdCqqFPe",
  "key21": "wbfYdusiS4tkAD3vSBPr9iTTZyJUCRmHVnY1jXB6xgk38gh7gwnpcSf61bf64y7qSQ5oqCp2MJ9q5VybkATa4wQ",
  "key22": "4JUxXxVFFeghcJ3Q5Kh5AdxYSn224gBp155ZEydcQtLtbrPFkHi1tLXQAJ5j83yP9HYtxB5HTEN7EEkR5ZUZs6Mw",
  "key23": "3tdtf7G2SaPxmJzFuZ4wK9Bh7Svmy9L7Hbozt6hNm7RdhmHVd91odVFoTFvYox6TW9TVwu7QovGxzb7vGrshAA2v",
  "key24": "5vWajr5Fht197aUC9DG7Yoa32pWAvL5uJ4y25syCiJnKnLFiVpqCZUKekriBqkpDLWjiF9PfRkUWP28groFWyJgB",
  "key25": "3TiQhaB89ygLJwiE4T4DsUNhNyuQxHws9TJhuqxCQonxSLdyJSwEEvmKJhXhHqZDqDsaHzZjzY4txJtTmiUxNJZR",
  "key26": "5ed7wzYcLzw3ragAA3K6PMnMfvNL1NhSMu1MS6JssJfoRSLbsymAXkTJKni4sHi3iuEjhmXeKghubWX7cfCM4ea4",
  "key27": "iTcVZDH8jUe4zbNAyWdRv42Bb2oaHLu5zjXj12tpqbBTNg1L8tsqux8d9zNuPAy2m3zRSCQ88tgVyzmw76hhF4V",
  "key28": "2WWp3D6rEFqmFXrCWPk6b2Bpze1QiPq6Erz1cEKFUJncVePKJvAMXtFLGWKzqHiM84KX4P9DevZneUG3GFqp2ZB9",
  "key29": "6dAuJowRL7RwZ8Q1fKXY8MxhW47cmQ1C4WmAEWHRYmHGrog76qPjzQtAaojCMfZS4y2aZfDSTzqwoA7SjNa9hoh",
  "key30": "32GPKyLDh3XZbQUYJ8w2AsCAxyEULMu5K6BomRf5Xy9aahyWuaxiCRKrqw6E9nu4GWJ8YDtc9VJd7gUjgq9U5b3C",
  "key31": "2iSjm19ZaNKDNZAK5UYiZJxxU6CmFHcsFop2LYXP3jKk8HwCQtxWRYXZB6xjfW7Lb9g5VLHCVrogsJcscuK1d637",
  "key32": "2qu152LQCCWF1XbNUZACuZcLnjqZezdTW7AEz2fECVuayzHvzAqT46Wr92mtzoVbQkx5fr2K6tGwudzw6YG9FoEu",
  "key33": "3bXaj8zKJjH1uwD4ZRgvsW5DCzEw6NMz7kjQ4Sd7LRcNcCNaCsEiSbowJgpE9Rxrd4d7Yts3LWJmKwoxuAFjuRUb",
  "key34": "4nvmhFnPdZoBfrj6VXu7sJQzVu4pCYAF5GWZQH3aWhiCQhMVKC82rHpGBAiDZjptXdqo4two9FWdJZaAonEjGj2u",
  "key35": "33cxxQSiqcRNTHd8neDtf5NkcNn2bSYKoFT1SPB2vmxCsE1L7hd1Gaku7G4zFDEXwUbhmYok7R6Woxh5vm7sSe3a",
  "key36": "mGmRqo2AfP4qTysL2MZ1QthyLmyfoivZcGxUuY2pnWzDcgjyBtVXYfvHki6s7rz6n4EBw3A58W4AchexUzc6fCd",
  "key37": "2hPwog5aDKC94NmtKv166yHEfNW3hYtHjL61xwCfTaX9wNL2kFEhkVqXfwYHzh93A1j1LBKLnM7oqPdqU8iWZ3nK",
  "key38": "3SFN3EMG9wYU2mLcrJWgBAJ4zwBtYeH5EmeeUnSao1basu3gENj95q9BcDLNUriwX6YJBTi2xFzTE6d58tffzAVH",
  "key39": "4RQ1dZSbs3yq1UohcxdqKjwKR1Mfeu8ZBLLY5S3FasGaSZB2LpzJXGJPSVbFtcYiSXmW4XtnWDdErhyeekE28cgc"
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
