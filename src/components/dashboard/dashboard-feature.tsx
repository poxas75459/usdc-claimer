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
    "422fy9iYbVEPbu7mr6YEo6af8XP4k1i4fH9KdoT2SyTJ6TyfHAzLUHt6ZKBthC4fWT4zL7W7gXTKZ1pizvsvmum3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbWhzszDgY9mABAtqfmxafzZJ8LBb5s3L5ipbwVbv6FXK2MDF4rgeYqTRWtZMnbYnzqhfBfGNgBwMap8eigtXji",
  "key1": "3SHRk25wmzDneSN2JJtsADqhabVmCYwy8JRXb7rCDAAxJgFkgYNtYopvc9BQy9UFAXf18HmHcy5AaNh1LNhRJvH8",
  "key2": "3HcyQYWmoihwu5QhZ1kut9AUbYaPgZCajDw5oFvBUuAtvSTTyav1wRxmf5x4yNAPrLoTAMmVitXrpPnKtdP1f2rq",
  "key3": "5VQGKmdhm5CkKAaTMRh8vUhFY42LCAHs5AB3fGeFmHtxCaTjHmmDCUFYz2uhsj6Cd1e9jUyrVuvi4haRs93ktRFP",
  "key4": "bc5BhMLEDJ8gFHHvo6iKJ5rYEnMPQUPHWSvqmXqDWziwqbiNAcWCuRF1KQThHPKZbWRJFXR9EQSZ3V2EcxpN7rp",
  "key5": "63pyuukBzAgsvdSkd4J7VZc2HJYGiNv8oCz9Qn2qD58836eZVqQJomwnGoE5SaQSPd34Y2zQ9GdVHNLpYyMx893F",
  "key6": "3te2SrG1DRNQxjFf5Dwd6rU6Pc7Knrsd3RRVe2vXmEewJmKmmyMeg8k8iN91LqwABUChUTRNfZzNmgmwMLZg9374",
  "key7": "4mW8w7wGUenRhiihWwHRMi6QwhCDpcAJQEK5Jx8hMJyg761AJ97HAv87pGtdxanBLFMNGRwoeqRXdBcbtiqw3eyz",
  "key8": "rJKfW5vcEJogqGSYy1A3HevSv6dzH7x8c9zikjPLyMytXFwTEnZPTHiXT9rnohGzFuPrbjQMCvn3RVnLJysEo1C",
  "key9": "3mbZ8vpmcgttwVyBFhGA4gHXTn5Szgm1jJZZWTu6profcdY9o4EtwRwGe2vSVXrwwBwrUrypYvGfMgyojXYg46rc",
  "key10": "3ZbebCW4tQJEkbxus91egjPmNtokXnFUdMX4NrfYdpAAMDbMXtcjjweFme4JsW6ztiLgYsDtQv6USDsQpj7J3sZa",
  "key11": "4jfmjrjkyk3bMo1PCxwcnQr7DZrk5GaMiDQ6vF15QTKrJxrLc1Aj81roc6pqUMMFrmLggAwtfJayJj5B7arhMcTN",
  "key12": "3d58ps6EkqLbzDQ1mezxG3ULQe2uK76uNZdpFbi81EbkzTVHRzsDzRfhFoMqjQRimzgJqkXpF5SunfwVr9ZFBg45",
  "key13": "H5wEWaRKuYmKqQsmaCb266GL6ojkrF9vAzNUDv7tje9mCMtddahDWB9DfvG4L2RiVc6ckgZJCRNjHAUxWgjAJ3H",
  "key14": "3KJZaVLJAHxLZ4HN8k47UXEs6qXG51WrdNfYEhzoSA7iLYHDr4SEzrP2bJjpzecBxtXDWZooANtNiXEsxsZ2a6w1",
  "key15": "TqrDrD6eWm5LdTMDmdoLVcRE7GnKi3xhQhMwbqb8ufS2iNy19D9f3ncpc7vLxY4Re8WowcU6xt9s95FK8xoD4MJ",
  "key16": "2u35TqrMkn8bRj8kztxV8FJhB7NvwqLJ9xS6gT8TPNiTq7S273tnoPfq1boKruSPVS1WfPJvL39uJTqAJbPEuxoc",
  "key17": "61BmEg9DiPKKggUeKir4xWp6nd9jxKbE3UPjuHBtVUP5LmSVqymT2ApHFqfNXhu6r1GY6rJEuwTL98KvPryVgVh4",
  "key18": "5yAz2HcxWHhfU7o1f6GXrcT9WJ9pJumpfPXbLzcmNgz1j6Lby5muNuLk6WEBMPMmwHuxKJcjKPZF3k7Pv4hhr3JR",
  "key19": "3MSaUmLL22Ao3cGXvSvLmqJ7LQrJwtvppZCkFYTpRypWPbEtZfCc3AnRpLVycySJBckF2E5RgXUxE5HYghFHhoWa",
  "key20": "4SDejGPKEB18ehBUp5zKz6EKwruCwBkZnNe8p36hqcJQWhD3rkYHNfKTx2jxVPeHqciGzoeXcVVUCc2zBrUK7A34",
  "key21": "23bHer2VLy2zS8WTrA5GQL6h1AjE9wSNHMJmQeJFKJv3QV8Lu5Mgqm85jzg8VrcXtvWt2JoWACGqPy7rM5ZYkgym",
  "key22": "3Z6RT9KAVDE1qjczPXh8ch249s1tvpxCuAN7HG2sX1kJLT4UducAaunrkK3zXidj2iApARQkG9Xk2NMgaJLtb43d",
  "key23": "2i3KwwtK7qdZBC5qddsSX8qHSVZHJ68JyLuN1amjp97kVHZsrR9jBMbX1bqLU7ot1XeJsEDZ8rWApsvLLeaRWttt",
  "key24": "43oJrCPzrkGKFfxHuLjqwJC4Est7LB3FCGS778eRpBaKQMGM5obcdh7wa9XfUREGaL9evSAGXodrDdoDjqo46DZQ",
  "key25": "eqf7YSkYHjVpLTE4i5skRCQp23DXn1Epwv7RcdQBzKMozBxu3PvT2ZYbo4Xijooje7z2gxRRMHwX6nbbAG9JRgV",
  "key26": "2HGjyXMqRbgPFsxEgSQZTF8uyJEHUXCzTi8GE9M21WYBhvt1vJvxWWzW2cJSXWoVKssokNqBjrwNaHUoCT2ZvoYk",
  "key27": "4Eipu8YfRNyJrZ76X3NtyZGeRTkdui2yJhfXSV8y24bqj3pTR94DP57GLCv4uXTh1a4L5mSF3R8A4p58hEhsRqBj",
  "key28": "5e19SM9KP5aeJrvP5Pzx2JDQhqZK1m5CCaCCzkoCqqAibHdemsiNxQ9KWDb8mkXzvxMUQrKvpEwzYi16Y4cJXUmh",
  "key29": "2dtqXDEH2SMmHBuTKnAhcDMk8GmFAvSeg7SuhTNKVjhZiPDLZHZQ8zDnViocRrBUwekRPC2ivdaLabJyWLF1yC5v",
  "key30": "5LQoi2GNSBHWcy8iUhHepP16WaFfFpErxmG8scRZX3itUKFn2AteYwLvJ3F2qZzRiqYg6UhpRPbnhKRUwnoUeqsG",
  "key31": "47iQFS2dVw7JPDjnNPjdNAyCUJFMxUT7cuSTfLDLRGChBXKbHKfD7tENP1MyhzJWV2zguqC968fnesvCdPZuuAxa",
  "key32": "57zDeMbJ5Lv7MtNJKbk7hWgTuoBUEn9YAHuJdfZH95Y7itoBDfwFF6JoijnBmazzTzFNQd5GL47mQrFvu5rSXwgq"
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
