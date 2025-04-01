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
    "X6byGsLE9eYmCNa6sgXphYyxFxreN61jMMB5KGNZHevXrYTNRLaRiCSeWNn7xozbFzCL4LTcod1GipKY6FYwB6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zd7xvqL6mHfbr5WHXWXptnp3dFDTwamAyrYzQnzjrssSAGVBNFTaaQfkcKgNdXg4poSVsVwCQy5nrFJvQxSvKBv",
  "key1": "3D4MrErniBTNzd1LWoxrQZp9eGc6msE7Dqvz2XhYV945w5QJtvRFAEkwQQVaGqyPAChA3VDJaYkmYZXrn4sK3xEK",
  "key2": "5ACS8HnjpYdXACgXzP6JEBf3beWnFronbh4ikNCXb8SqWiv1EVHSSLgRrYi84ASHTexy5teVrb2akPsp4GMzA3yV",
  "key3": "3ZCESr63MMmh3j6vUzmCTC6wbJc2AhvmxMS2SBo1JpKPKCWj7cj9KbxG9CCBXPPBy9XCCocJJkguLh7JVqVdSUKM",
  "key4": "3aCZj4sBP9KPEiFshERJVhDBfMo9LMEv6sZ7ENpAWPgjc2e3vbeBmEc56aMymVrw1agYbYf6y6dtRYrxrnqX9bex",
  "key5": "4dyURMz6MPbYndBkTJKpFbZaxku9wTkQyvTCtfTcCJuxR9XnLHBeL9u2SFLPAVC87VCAZHGUVrV1UWNo6f1tYXU5",
  "key6": "XuDjZwrxWQtQWBtm4rcHk73rL1rcvKAEj6nnTrfXzfYtoPQeU9QRRBq9ugTt9R8dmb64Rt2DPwgELgWfiKVXKCp",
  "key7": "5adAyvN6h45rcc9RZp28wAoybZ41S4pH9anq5i8jpkBCnfVzaChvAZuDuAk8V8kdGu2P9iZJmYWgYShhha2oEUkL",
  "key8": "2pMvTeKgAbA1p9V7yg4PxpebE5eKHC29yNMQ16oxXdjiWes2S4P2UfrWzqxGLLVcQ6E9wiKTGGpboi2fpDHcEEps",
  "key9": "4iWed3GH7wNW2VtsnRtgdEgWCkhWa3RRLPacjB5iNwTgYECLTGZksVqBgVvcdMM75qu4XeMoBYUbmphyEw3bnC1W",
  "key10": "2TwqDSWu8Ct6hPu9LNrHKyo5e1xqQBsEz4ee3kTQLbaYtqQd7kronR4f1oaGXRyDqFGscBeACMgBPwnFGp8Qh1EL",
  "key11": "zLQKqWYiPusQuBHfBtSR6ujHNd16nFhjsrPZrr2fiquq5uaxUGBcfaZWW5xcdK1kfwDzcxtbuy5jpJeN8DWavt9",
  "key12": "5VNgLihpffrhA7MKivBbhpf4i7X56Q5Fexy1UzTMW58N8gPTDKBpQGpHk7ffwyAtKAQjK5ACyCWCT5yJ3WbnX9Jh",
  "key13": "2TX1bXZAkK5kdaDBpL7DRv9ggV7BL7i3ZUynPu753xDLiw44nFJhNDJQgxUoPP34UbuKwgMtJv1hvtDqNt7sdSfq",
  "key14": "3jnc8Eeri9opkJiranBaSytWVLKjDt4wcgeQjFLnmZRLPV9FVA66P3AkeNqNUfhzNac8hW3kzPgpNJD9n3CaGgE6",
  "key15": "3fU8HUmwWe1whCeXmTWvJujfnAdSDGCPYTFUT2J9A2mVgEJuVtWCjCibARjmwFVNsMq2uCMkuPNDT4eUMd7RanZ2",
  "key16": "2ad83EkaVu5ckRqu6rJApuhs3a87BNaAeW4zTmiQ7BVPHVCGirv77UR2myAqjo2eGtEkz7aYwZWusZ8PdzyxdouC",
  "key17": "4HHEuJGeZ45eechz9PFK9a8jyz56wAU7KKTE6cwQVzDMDNECYLf3HaSXttJrFN5Cz1dbn6FRbraQSahPLNjp8doj",
  "key18": "2T6BUWtqpk12xC53kuaRXXnMKYY4UJfa6VYJFkgGeEki8LxGsGXPKWwU8bWrHBYjb6SSVif9TfrjNw2LxoEkhr5d",
  "key19": "3KQGykxEUB3EyUGpbJEp6fPC2eKJttpJSpuAFTcnjrHhkyHs4WiVLTg69EEumo8mnrzLxvK2LEHYiU9KgeRRx8sy",
  "key20": "3EKhkSMcryUg1wtpoP7giQyFJk2y2UcHx8QLEzqdvdiWqsorsiS6ZUHwe6uAfv6auG6ghxNyMSmXvdZjNaJNLivt",
  "key21": "3XM9wdBQFKhtwMdQt9z9HMaM27DMVEJLMpb4gkEkZJFj6aeSPuyW3AukUCGyq7iYAmQ9f9JGt1LY6BmESxyKgdDp",
  "key22": "3bvDuMGoCNg9DSZ32DtSCN7S7CQCFwX3TCL3Ddm3T3Kdjf3rf16cCjtfWM8cb6Ftjm5Z8awV4xVyzUQY3nEh6kLz",
  "key23": "W6Kt7xXL2RrCFCNTquAGYtoKx5EyWAKiuTyxWxFTYoKLZxDcon3D93P7tyg9LjVHhMbp5jxbuThuH2ibFPAhRKb",
  "key24": "4ZdGhC6Bfz3Le3oEy8GqrG3gFgScPXCPrwFPDRXcmqXzomtxvv3CUqXbqGDrpCkrFJu7WNq7hYKmuShso4TwGnSo",
  "key25": "5pTZdXpGyDKgGpM3CTvhg8oCbcoonXmXzVU2ZiuzYVe3RLmGtLKV64se8XpqwZHk5fsBXdDEUqyDeWcnsrAwaTBx",
  "key26": "Vs5K2tUSjCFHqYpKBtrhniwt9A7eDFR6hiMQtkdv2xp1vxbgKuRHnj7kC3aw4qNJFx9o9EuUojUFAwFYpF3aM6b",
  "key27": "5fCoh2ooUnjL4VPFFQbfcUGDe6kdDqHN6Xgtvw5bDpcJ2V7SYibUkK8nEnecwjoXkoGzYQF4bD6jVTGVqMAmyeSZ",
  "key28": "RF3UwyTfxVzmodd7biJhSZGKAc6uzzvsRbkomPQVY6g2kTa7szSY676unR4Lx4ctKV5CigGePZbN6wqAJuoL3Db",
  "key29": "48aNJXwkg898Tv36N1N6D1yTFhYR37oh6CWmrEQ914XPAFkbBQ83xYiXnUTuk1iKzcHQuBMXWai7u4ED3QoryMZE",
  "key30": "4h7ctzc4jE97v9VF3R4N1ZTARrk2u7NVPFRUsNJ7J8LVQK5PfqUyCBGibyYNAF4NkJKKcQTZiFapFE4j2Maz8KNN",
  "key31": "2s2CEHzoh4X14eWpSgZEWZy9VtJtxVgqdZAUyDnM6q8w3hAS5TRVpZSn1zCK4LZKS2UbcUz61p1JHcX5ipfczjDi",
  "key32": "3z1vGAa74tzB9WexAPrRh8e1METMXGuxVU9vDHnzur7cxkDTNCXbd6pZWtLTkhNoZgZW5id9fiWm4hudwohPuXUu",
  "key33": "c5WCvk4zkC77F29EaLMrvMtAe6YGV5WwrsKHrgYdNRz7LhexuUkc1U3zv3xRsmmBdFypH96cju8vyjYKHSYX5hz",
  "key34": "RvG2wB6jitpmT7S68wPgSi3eTt6zNnYK6G8tdeeD3BT8Lo8XRwRdjuA1v9KaRXta73tRA5RBxLYaY3zLEKQZEBo",
  "key35": "5uZHonmfbsriWzLiCbqyriAhgnxqUrZs5Es4zqEScPHuxq8CNfpJ3is2uk5xhgtKmUz5AsisbdNFopGViDxmibLZ",
  "key36": "28VyfZqJLn3qm2uwH6RSWDgYBpqBYdck4KdwWRWCvuLHGLci5kh9XQ2jh5TWabpM1KdJdceS3YPs2R1Az4rd6hok",
  "key37": "8aES7y5yrVNvvKZgRewxAdfdcQxd7HkG63bAFCqbuHzMy5FTLioxDaR9s6RTjjZLLsgH4hN2fUAsnJgmvP4n2th",
  "key38": "BtuZEXF3GKoNQukp1BSNgcBG1WRTjHf8aXCc1k7cZAW3njgRvATADtYWJhSd3L41f18FrhY3gqHgoRwz2Q9E2iZ",
  "key39": "46afQ9HyxomE3rwnTkV35KsnDfZyjYbG2h6yPVkA7aDURXyqFoi1b24fHgwGpYCySt985cvAS4NHNH4LSKNQmdrm",
  "key40": "2us53ZP3LBnuzRwaiDfzopzNnajScTJxzEqk4GpL2LBmR93YTgKxczD1DXS96vUAGWB6YqShWW4Q4Cvqq65RjUdQ",
  "key41": "2mCxFvT4UtMQsrMiveXDhhG8xKyVZJ8HMZbcKFEWDJwywaVbEA96oW4EsBdgLZfti6negtLWiTHJHFGQcm7aCVLf",
  "key42": "3zQ2TbrK2hCqxAVHZmBe1rKCJnVb1TxhPXQYJ5aJfzrwmoFR5Km58tb49tYuXCJUnL4uuR6A1jSqbJCHjP9hvvzR"
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
