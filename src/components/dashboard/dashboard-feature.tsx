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
    "3KTBW23ZQAfQymugPQKdPbNSDchTTYs5kr8gojvBrdNSqB4wkAPgfAkqaNg4f6T1LxbX7unMJ7QDfcSHx3z23BDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDzeggW8xGrFT2H1gEWJfbKAde1MWEqXZ4W9cJyxyBMmRz7sK8rCY4G41fXB2b3PBo6AP8eNzAT4XjnziHGxN6G",
  "key1": "4Q56BM68GH3m6jGSogWrpinJGU6bUCzHGVzsifyJ2vuLx4maFbbtKK5KwoH466DbKjLWe5pbmGoFEbA8bpXX9xke",
  "key2": "xZvKkPQo6Cn13DS7BEBVFHnLJ5wV74Ar9zHeJEv3hhrnebW6QxsiCaX3vnauLfG8DXBuqmogpn2pFtqjYGnY9Yh",
  "key3": "7rDhgdjPRtpgxjDo44sfeGzUTjBLyDGNiGtQTidEazACvYP1wsBkAyTAepbARghz53nQB7XBEnv88K2u1irUGLh",
  "key4": "2HxFm4ME3BCeb1mUmfUZXAGDC7nVo7iMzXi7Ds3coMo6uL6yT1wRgfnC6vtKjQGr9SHrQekWcyyEXr4ufUxuRSLr",
  "key5": "2p3wM62eqZM8fyqwJBqJK4F5uX9v5qGHMHibuYW6wyvyDrczCrkw9msxKHYTUcJABM8q4FyiZhC3vsqrRPXXwJiv",
  "key6": "4wqAfZkSXfGUfYUfHtqBuquYhz7i8vDPHpL1WmwtzfQZYVLQtAnUDHAMSJuArn7tYtzKQN4RRuG9XdQSSmuUvxxF",
  "key7": "3NQrY1q4HXTpWfiFrdZ7bVgsNcjy1xYxfhbCua261sd2UWF5XVPjnwd2vy5EhAoCrUa6wFkeSpTGbTxWA3zdiGWp",
  "key8": "4zWwH5TLScqH5APTQURNTCj4Ur9TbCWFUXeQoyhg8sRd9XXndaNWenc3a3mpvkEUTHk9Xwtif9i7HFgoeBZUkEu8",
  "key9": "3QuzkrgkyMvoRG5aVvyy8SFbjrmShLyfeKV69xwes4o59A752yMAPi9XSWpigiVi4mN8rLALwKhNb7nJZuma7dUu",
  "key10": "5VgfzUDPakFdcLrhQNvkrGqQxNDhTtrekebBEGRVr8R8WFHdSC1tps4NEn4ofaYXSmBoZvHVgnuhqu8fqezEyS78",
  "key11": "63v95tZGHKvKCQkuhXitAmWsTvhFmLcbYBFWGqzYddgfMqpuLBWspNvF9a3Kw1YXU5LHFS4b3dDoFEy3Q4gR7ZdZ",
  "key12": "3spN82ro4fMtsekBKjbHo8CQDFipcT4PQerM2JnQV1iHWK2eZ6hHyTVGxJE57jDeDBW4we938DTnwKkq4excoQfJ",
  "key13": "5DrdTzY3hkEKgFTQe1u1hEVygCsNqdfjXq9t4TBoNBWgATCj2PsjxwBp8DFh4UDxGEPfnhhAQvbLgr7LkWzx38fn",
  "key14": "3q6rwf3m2uZvR2atn5NEP4GCkCANTSiAmf3izjtfKavUF1nZMVrxyf3DBQDb5TyzPKhB41Wvew66zYL2V9zB7Q17",
  "key15": "4dMcsFnRyoCuPmQi7pvLVztBXgeggN4PWf3FG6YAUs9YaSmNPANQYrMXzSZRjaUizC6vivvVAjXr3sMCgquBdGDR",
  "key16": "3rxnFqNnrre8KtHCkTaxAY59rtACZ2jeFTnyNnetidUf7yiAyWdAecr5pDsnBcDcdKz46Nz1UwBMdAHdQoL9ZfgN",
  "key17": "4fUDTodykgWP1i3CLgr7NsZVNTWqfrzDry1SwxFCbGLZjCAw3uSyevZUwnPSM2ddQLGMQWnm8VEwtJYTQPLztiEW",
  "key18": "3tgYTVESRgJLJPfpAR5vNujuGxwSVaCSHbviqeycmS8vbSLAM8NezuUQhQoa93cZAUZZHFfreZyrEBB9pcFAa3E",
  "key19": "3MSZUesftvnMCNZygp5Ym7m5s81EEGwc4eobWcM3sQU8LegJafr71qTdvzW8t6JcVm6fvrdaRvp5BoXwDYt9zzu3",
  "key20": "AmXDRhVnoVZy2VoCEptdKzRzz5hnKu8aKXcEcpNYhzDY74GPP6TCeGeqoaX6fL6Hsy5vbd3d7XNEeFMtQLqM2Uh",
  "key21": "4ymHZnj3PcehM7FFa9uxTuMi1mqtTUvnHNssBfLEHzjLW62nxWgDbHJBhERpsnRkgZ6UP1DvH363jdFwq9WQbpLz",
  "key22": "32hDZDFuXadbnukjNxB7RE1XgUhiBZ5tGTHmiTASmzaViBW1JJBbMSqgsrKb2syK71QraYUx1q29JbDkXJ1WnP19",
  "key23": "5B7LJASAtvRiiSwzZ5sSXhhMib8dh7UBCUAZjX64kxtyrZHBpk3jxc8oRpsfktXq3638amRUSGhvhEmxo7ddf6yG",
  "key24": "5rEQtMHEgLA9m2BMcotoVtjaq1mGNb2MwnFbee7A9dXiJN5wuq1wA7BkWemEbEgdKGTHAfNioKTnn7LYe3TuFpc9",
  "key25": "3P8inBgo8XYudjNmtv5bU6KLs5PKVnMNaJpRYfL4xuhAaN8V49JBivRxzc9ExXwjGuMZT2V52F1esWoDoF1U8ytk",
  "key26": "5e6Egopuhoab9MXYDx1JNih6eaxU8NW4cudEJeB2riDch6isfyubajknerLm4iU2eUcfy6S829m3spJwVJJKxYR3",
  "key27": "2NukmEQ1bEeEFG7Po48QtheJsQngsjFJrMAFJm18g5Yay8Jh9crDLoKYeme6z89tqRbh2qz5NZ7NBS2mzNTbkYYL",
  "key28": "4RT7xMHeSGNPSianSDrMwpWPkcCWrj3nsu9UX1KanxDQY9St63LLL3DxstRc3SuwSEmy4pCpfBER6hbj9D7qMciD",
  "key29": "pgqEFBvJVf9M86PU45nDxr3bchNM4X1CWvUPNf5khFuz672jQovW9NrA8DZnYxEuDW5GNh8vyotL3Fg3d8ZqtDE",
  "key30": "2n7RLpXjPNTzT3E4mya3hvvhZ24kRtDH7xysXz32KffAURFUQN3KHzeUuZfrDTMhpe6RKFix6fvXxuEPjub6skwa",
  "key31": "2nGw85K71EmfYfisNyaWYT3DpjrKrbJjjS3MtoMAnB4M9dK7bbgP9bj6rccvbgXFr87jELuQQPZs49KsDjH5fkmY",
  "key32": "EFekjK9wBi1AfjWUbHJxQA3uTvefyZbwhKJE9F6PR7oTphLdpAcGe6Xz5BhsUHYsuwisuMf5cSqNw4AXXHghNNZ"
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
