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
    "34H82CJzVAXHbPb4gMACkhPuv2DSUtY4tF1YyWQHBer56DX1jiaQBxqX3CnoFAdS56Nu8KVGtqr3XiEjqjeLDkcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9NyEuu8goFyEEF7D9FDDTHMNTz1yTHBt2jD6xeScc7eE47zS7d9xtrLNEPKqYgrUkbZjT2YtbCJVZpwqUGdfUe",
  "key1": "kghSmFgEBEdXdwh7gQpcSp1Ti4CuF7kdxh7SMCMDE36TERMghYZ2UV1mjBSFGETZdRBtizuzaVeriiUKVhDXUEK",
  "key2": "4btBhpi15piJfdn6jeEgTMQcLtwi114p1a8GLsP9giRpPGts9RU1vxT6wueeb5F6CgEkJTFUW3eGbDcyt2R39Fxf",
  "key3": "4hHG3rLW1yHTvvfBKmrSHi4Z6EfPgrj8AwJ55RNw3Dm1yvxqtFXYU8niwvLA4gpZ1sTBGt1QLwUjhKp9x79Ds8tW",
  "key4": "5GzZcUM2CMKN3tGCiSiJaXg3xwR2UW5uijW1f8EfjJez1T1B7WUxE1nBFVA9QmHqp25pY9GGqQJtbBJgSeBGHT8R",
  "key5": "2sgeYXuZAst9ekjQANpHfJ45quFycYHwxf1T32znnAbftiAERGGfG2kJbLAwNZ6coH45iKXxZB8RqKFjn51aEWh6",
  "key6": "H29TYgKLLyq4Xi19b3STyr9j2jKSjAj1TPhRWxdFAoYnUKjH2VvJ69ysjTZCc1CAz8S3fweFkz5LKRXv7299yn3",
  "key7": "3sXkQVqfb13wEuVFp52dGDXHPmfhNUGZBEyZz2i5wuu3fnb76mTYqNwDvUrnNfo9zQX6NkuHLp8qXwKDL22rG4Ei",
  "key8": "5gBeZdwC3pNi8RNy1B8nYbYn4nJarcjN7vcn3g8oxVw1yJ9PS7MtkpTNjEPo5g5mYhcDHTe1B3BGFF7TgYbeTZMY",
  "key9": "3iDyTAaf91ZjZR8Khz5RYi1ViyNhU2vgJFcgw7b9iJs1zzHu4b91sNyosUXEv23Jc1hBMsrXNhFMDUndpmW1X84o",
  "key10": "4B4hy1c34DZd6m1w2A3g8K5urQzsAZYUDxTrU1iCBQu3U8S2UAYPPQTqiM7k1E1oaVFjRHJJNA2Fnme1wwe26fQv",
  "key11": "3RmXoDywsndXzfSuX2yH4yR2VyrxXRhA9R9dkffLu5Jw5rN1akysDGV4uKUD1jLeNN3KKUVs9xDegyt6QiPR3RQ2",
  "key12": "4cj6BXpiNvxPquqaYfUjodF51N2CBzyBkK9e3J5KXyxM3DQyzqVme7uNz31UjyaY5pASo5TdUR3YeqtgWoPcQrtE",
  "key13": "5paPNGM1xsoSBrwyNKUY1cAXhBJkLHXAT7KtMA1EQFBWyGcAshVnm1qg4MYTSomKHaC4xQq7emTk8Ee5DHhtovBU",
  "key14": "4mb38Smd2uYmkNi8aep48citvCRQ7EL6gjbF4iDfDsNTfGduNrnGju6ubS14p7ejWHGA7HeQXneZpK6gVZT1uE7L",
  "key15": "26VDpgJb6abwxU34CRRwUczpvEtEknK2jq23w7q8iUSbLzzGq6FuAsE6MrSwHBC318aGsZ8EhhoS2j74r8Cta8G4",
  "key16": "2KTMaadeC9cPSr3SwZQBd3eqR6bRBjxRuQL3FdNNNvH3S9bikLU8RZd9DAFxth6Q5Qq9hVoAu4ssk7exvrB9zfk7",
  "key17": "5aaUwKjeKFcRYvvrrwhXaPqKZknQuVqnvm69aYdRoSY7vtLL7N9kd2CotrKk9u2fH6HwQKFm8DNsRYKVEy6S6JZu",
  "key18": "5En2QDEgNENdDXYzN6PPYKBE9qE6JEW71rPg1CLSU4JN3ygjnx5YL66jgQ6B1ZCqb565HL5HjGGzpDexmSYVKWms",
  "key19": "4WULbCxR2WazFrLyrA81W6isNTJAV8yi5A8qyCUzhTmFKmBdeGmvr4Dckkvs6NPoHsEhboAQNAgQy26zWn748mxR",
  "key20": "357JfjuAVF4LWrUyPoqxQ6tF5mJjxNvCA5e62DQiRW1UP4AKszjE2EDAxRHAsiWe6KQqayGw7qxqa6BKxVCATvgW",
  "key21": "5uo1WEfXZeF3jn7frJLjZFquP66HmPcWgpN7tXtjbfpt19QNJvQmY3NU32hMsUxZYgYi3Z1soS4odEWZU8kso1cB",
  "key22": "57got2vyfbtVCpws9YYsULe6pSUntwtBccjJMcseZqopS9yWks6mWCmyA5ExoDcWmG4qwb8xZXjuuhgntrSX8Ewh",
  "key23": "Y6vmEypJ19yznnQGXGgvbCpHGZ3CBgA2KVW9Pj9sQKmYmUdKcinwhqC5hDGoizQ53XCZ3DDtLnQ1rRqnWM2fkyE",
  "key24": "5CMQJRayPqRrXvxEHNmV3HVn8Ppi4AzTh7C85b1LMNdxZ5mWbwo5ESJdN54yucvNVMvaX3bizaeaoQreyJT4R1xn",
  "key25": "3Ub77RubhsZMUebFTxyrCEvqVc1QjdV48HmWjz7LyDvZUgsi4vDyUciosMDbFH6K2H7if6dHeDLZzVxb2JauuhjG",
  "key26": "631fDdXAkMMGecLxiRWWYSgavqapSMeAQRXeoUxRNH35ZqBjsKPKo9Tmp3AqMJ2UXwBvGHkLR9tT8f6H6Vm44hho",
  "key27": "kRTTBBifmqzntPYwVz2NFPmSpo4N31itDPkkZpXZeWqyckrq8ZHbgvBnp4ZSct3gkFpt5rEAnrQP9DkJTARmWyp",
  "key28": "5GCxn3MN6Zi9caCoJ7HAHvwYRvF7jtZka2YuRVJCeRpgpLse5182kaSh3MBWJD6goMcDRjwJHbKfEGqY1yeVsuFw",
  "key29": "5dPnvQSrGUoGpaRq2jp7wg49EiUCSV7mLxYGqLFAaWCeAHuu3Zw1dyuw9S1B57QLbD2c5DMw5D1kakFLUwhbqshX",
  "key30": "5gsKmh1cWrRejHp5oYAbUV7E8W9xq8xhdwTo6hN9yRSSoKERKX9E1uaxJkXZzGXE7Pxr3Mmp52BPJCJdb8Q8igZ3",
  "key31": "4oqaCjzDPP4d9vEeBeibad8nGPLbNbxkCYUp5gasfBHMVsAQKrHC7uCoE7XaP4WspJ9pKcgMDJt9Hr8bQ9JHxxLT",
  "key32": "WTJbYXeqoG9hdPFqma5nT6HAGkanvitETzFxWKYucn6qqLQa8W9hVnx2xsnqtd8SkP9GGcir4pCJvtbopYwKU63",
  "key33": "HYHpHNw8ryzqp5PzEVeZNWL79VhaYcvicu9mbpDnE9DUPQwz28KfJNMY8opiaBhnwhVsmetefJA9iSjT4LTHHzX",
  "key34": "LbE41hSf5f3TiioRJGsv2RbEfzYiHJyWP8rFnEbCrRUnMBCrkLYTD1ocugSnVeNpz1tbHbcPWGrabNRivLYzmBE",
  "key35": "4b8jLkbj6d3YE635oLK1Zk6tJEGNRuFmKqgPjd9As4i3zMjoDLRG7mXcQAwWN2HRKzNHUuc2FNTsU4kDmy1MEuQz",
  "key36": "RfjhwxPrc4JV4ZK9jN7gebTW5CxjN9DxAwzV7NVwxqDpSkY3wTqYVDMFExJ4VCNBVakMgzKZtywR6yrBkjiPFNa",
  "key37": "3R2aTduyCv4nKrE2PwpfJUnGEiFiSunfhCZkyszkkYi86NWN8GKVnWZH2F28V1ymurdjLQ7hSgFHQrBd2pxkAbcN",
  "key38": "5vPR5ue3kZ8322u5e7Aa77QX6cBUSKvfqoSAbhNnBkDRcrCkdJNxvcXNwrKTSnpzSRjYiesHpXr9bsvhqhPZRhvG",
  "key39": "4ctokSMDNqRDfVYNtyZp9G3Pp2rXYZgkzBc1NWKBo18M3EA6rLRiTLGcdU3zGSRa4KSbqokNE9wViBczB15kxU8i",
  "key40": "Pt7GzFzGaz6hnXk6rCwUJudPLGR9Lq1gePkmqD8qkSkxezM16nGLtNJPizc2cKmHzHerZDbgqttPfsVViGa2ceE",
  "key41": "39Wj2azdM5YetxgQAfxEm2nuNUjYbo8MccpG9xACFnt3xb2XEE2JD4yxa1zGWYrtbJ1xbBWHBEtJhwj3m6EYFngw",
  "key42": "TdKCKTCvqXZjB7U6UP3tH76fCUkNbXeq1ct6aKQeW6X6QGKD37jWKkqKkuXquhcbLnDyGxHh99evkdBtsxxdAfZ"
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
