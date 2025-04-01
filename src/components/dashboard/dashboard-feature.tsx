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
    "2w8dKckeVgTvzhfNWnBLoJ6ZLqQU4fo2jqaian1vzsJPdZQsY5qLh6KViAKUxuXAqUvghdYFjHCg8zK5GCsrE7St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P81upbyDbLmNt5eWT7JPzaBNFzZ1Rkj6LSCYzXymymEdmcZrv4kBrAopGuhxM5vWsYAc8mumMPieWVTU9oggPhJ",
  "key1": "3t2BPxWTb2z5tY5TnjMHAkmSbbmCFVnwVqzw3jgRC2jW6qEd4jd1biyxPEw4UipuYHvLhkGnATwsutBViMBHHdhr",
  "key2": "26wunwyGEemJV8undJo66ehPnZ5ZaEsRDYUGWqQAYf8dW8f9Q7GF4t1GN5UtA3cZC2aJn4Y11hp5sGrFvPBBfPx5",
  "key3": "2u7RNuwYsEtM9sZkhr7DbkkGTc8U9M53zA7yvCo38WW3YcGj1ct52fUT1fDE6P65KMgCebiWFoXnhgQMo1nBGPLz",
  "key4": "53wHefXyeJPdNrzkWpPHb2PWCpqVF29u4gLac6qgba19V93XZb4Pk5W1WYeRB2bfRzqgRVZCAfeeN3cEhWffPa4n",
  "key5": "37WWsKki8kvNBpGEt1b6MxVfsWdVnbv2QxNWBEEP4r65SNc8vQeTH99HWqyEQJR6FjwHTAngXYjZV8xjqRQx5oJR",
  "key6": "2oDwFsQLgqCaK8Xrw1DGKoBZL78eAgBqrwGJ34cW4KA4LexQk7a9nJ1PbgDdCAc714UhjXxZFTz7ogs5yH6kSTxg",
  "key7": "38kjCYdp4vd2fbQnrT7dVZfHtG5kytxccTfGW73JTVXdJHzNZdNwUwjSFcW3R8iedL9h85zpJmA7ZC5sMnjWD1k5",
  "key8": "56BLzdH4WUEqx6oDZVhc6BktRniYYZ9VhjNd4fiio4NBdmLtkNniUbb2PTRK3FVfHFEw5S9C2wdzTe8JpDQJWGHn",
  "key9": "5rTa8aGMPnPupid8RaEeKV1qGPm8eXiYZ8iVL8ZbdVNCumwYikD4kTJuokRMwLjC4jXWMM1tHzj3AKu92HeqpgCU",
  "key10": "5bGjTLAK2LQQBBw9wyuzCvrJiBNZ3DfKkwg6PxeutZxwpxSVPahpz1hKjXq9hvJJQZaqzyts2XdLC6Jny1fNYV6V",
  "key11": "5kBjW4D4W9wbKYtmKr1muS24HFQCiRHTR4dnXgo9yUCaG4vpZSJvjFEUaGq2vGAfRe2KG7gUCBpAYpdA5LMDu41M",
  "key12": "7intfBCm14CvGJUaRntY1rN8AJMatt78g4W1fvSdhXo6Sc6T78SdjPXg1fypv64Zh4MiE5fjYYLLgj8713YQQsT",
  "key13": "53qYxDZFwzaY5UoFuCV7L4d6cdHygxLjpEZLNU47ScS8H1ixv6CSEWS3erEmR8cnBAGQ7bJwz4wosBozsMGuoHFn",
  "key14": "23kXJiWQr17S7PBi9wu1v8m9zQ3vmmYUceDrhwVMeZozAAzF8x3QGjoTc3in5hXSxmm5QQcrubtzN9QGimmyW8Po",
  "key15": "5UZUzLZ7AbHaAMu4ot9S665roL7FaDunGjxDM8Zg78wraxEszrHbFEgXyRnFr8N14bwdLF8sh2n99Zys7Fc8RxiY",
  "key16": "5hkecJFEUXJ3dgDW1jUdBsodriEjsdVQXYMsnvPQytm17c8kev1dFfXrCrNEEaBzPNaT1QZg34n1Cp6ykqcwtjzP",
  "key17": "4ZPyJcwWYrfnToZBAg93ae6Rmpge2q4Ybh31DqhPZpnu2F3gWxuG1G25sCP1FEnJCy6BGJnyo1kkBJMAchk1wSVX",
  "key18": "5vuRdUnAhnSxDujsMzbk6DbRTwJMBici1mxUewTPeduXN8kTLhKhfTGve2sHXZx4GxLpfY5ZmzaDTzbq8xf84tYU",
  "key19": "4vhDVKqzXSJMi9Nbzosw9XJN62E2AmdgjfZKyvtccxftDHFQLTebPjNgUybMiC9dg3DDTaYZjh3KzKTQmMCMapNB",
  "key20": "31bp6DV89LD8mbqBxWmw15Ef1hT8m6Qis9fHEdSChzJqeB42AtGYojBNqRFiH8zhUNFqpT7J2JG7rpvRXYLfD3mE",
  "key21": "28x6qD68NFHahAoNo7FnTUmMgV3Q5iNneKuNXnE7BwhXmKVXy13K2ntBXC3aYSHoYGBY2YbSUPGngGsgQCTyQMZP",
  "key22": "5Q2sWg18w7M19K7nTCciHxHAcNHeqNGKB2KDTL7N8BT5GWuZG3qi3TuJXMxReoztmtdzcYQd2DDQrJAD8wayw2kU",
  "key23": "VZf2uD1fE7dvLML7WUoRCUuREu339oofwkyjrNCZ2JUqtkApSGGxRnW1pDHdMZRsxy59vazD62EGTh3nov3Szme",
  "key24": "2r9eGEUQbhCHChRrdrfNhJqcsDR82dFSjM114aeFEemAxgP3t24dMBiEm4HsQLmXEmLkP7yY2mKgbwqjGYsvGMA7",
  "key25": "5QQiNAPvWrcjoYN5AEMzniDWeF3Ap3syYT9sZq6T1KtDRhb39Ua5j8tutjttrUxjHmk8Vgswk6pMGWsx4mXKFHik",
  "key26": "kwXvYyrhFsHskr6xyQ2w7QKDsqZ5rAZieTHxMiYq5y7MqvSFPM2vMxa511NrjbGfHavcz5fDnFxQXN6roTE3Yqo",
  "key27": "7ooKGyTkvGpKvuMnGzepmZgCsmzdMZJ2kf2i3hWzGJFaQMQogQWs4Xi35xv8qgoedew1ZGZdZ9YHNKPmWjFkq8Q",
  "key28": "2zrgKsyc57QJahGQLQbbU9Zh8heAmgKMJWq7DXQKYKz4vfgZw56zmLH4Dj3EtCiwPoCUrSqJBVXm75LdPGwbctJE",
  "key29": "3V5YsF8YJjLmWEBPYL6rWBYHjy955FneKerA3MBJf7zeKt15SyEV5eEGGGSvkX4U4TqWp9KgehgGkaHr6VRHmydD",
  "key30": "tpfCMC2kxSiQc4FTG6TvwNFx1ZMMgVTV58tDqTgPtqAanpu6KVjhyu9o5tSREezifQowLWg9iVGwCo8wphK9pnL",
  "key31": "EPtiUacmqdQLZbrK6Y3B6tEjRHNVtFmtwmCZmC1TRzJFgmYeJmYKyaxzGDCj4r1VWVVTuZm4C2mit8Eqb7rJZ4Z",
  "key32": "5DhrQ94hQUTQ5jYNPBUe4ebMHn7zzWzczYZR2dGeECwcwqARGyfVu5mjA6YfuqSsbjmqMDyG9pAswzMKkTh5GE3n",
  "key33": "2ho9WVzN7LpgVVGC2vA9ctPEWF1fLbHXfHAVzBqgAhvVFWcSPJLeoYALHx2j12ksDtnUHH4CGxYR6po81PLbNpuf",
  "key34": "3T2VShDEyvwajJy7AdC2R958RoCM3pDZYpG4JSDZSKkxApjGgprQzAtpFvmfLPvUsAxZ7rJAeMjYKkTpX2K9E4Kw",
  "key35": "2sVt5ggRUardJ9sCBDR4cyeTsbWq81WUYzwkQnDP3huzJTVFkGAsRKRzDPmSi4b6JYNzjMX3YqA2D9cnduvwdoXU",
  "key36": "4By4T1ZpxkxmRsJ6iTZ6Eq5EQcwNdzERB3kxVbKLCrJhrZgncH4WeZfycMApmonZn9nAy9rpQivkU5VMovwUBG6i",
  "key37": "5cWaj7iS6m4Bo45hUk3WEHE6qhuMatDstuE2k97APfwoU52jtxu6YRgH4HxF6DMFseTQ8DfaGDQW4q3SxjM9FPU7",
  "key38": "2LHo7GiN9BCMrQg1eVSUnad58QDHqR5DW2vUnAn97kMVUQfHAwyhiQeTJYbsD2P25DzcYVYeDy4pvRSnskQVs8m2",
  "key39": "3XBjvmPTHZwZUm4NtWCfAM2jFFWHnFvJri7v596xoVSpjW6NwsoMUHhgZqPvwHQmEycJZZsqpyQ9wBfkMzcpSSps",
  "key40": "3VngCdptinDNGhmSbw2jWkf6FKx8VbbQcX38RNK64574VSz3xdhe324gQ8esf2mFCZMKX1gWBxfEXqdRkpmH2HQV",
  "key41": "3J4S8hKUQStGhhdpM7oGNmRFemS3fy4AF6gYGHbetUF97Y6913weTqo3TT7zzmd66axdQFvT67pRD8hNpxZsF6pK",
  "key42": "cniuK2StPKZWr5xrw7tESCjWNvqGBZvahxbRhQUQ56LqMWjU4jN7Fu6fLkF3GaxYipsP1dg5rpivtAu9fGC3HFp",
  "key43": "4ExR4tgG35pGv2yN2ujAoQoMck2E5PqCuMABN95gZH3xYatVb8t7HKmR4FwRDqJQfVrAZWLN23VByb4grQG6uUdY",
  "key44": "3rTAS9kWFAGeb28AixNVW2nAuF4YMEugVrxbtcTAVSz9wBFra7GmpquEsRGC3aPfSJckUnrq3asxcbnn5EYognrX"
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
