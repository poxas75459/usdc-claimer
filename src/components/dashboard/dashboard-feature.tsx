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
    "3URxyJHvqixKRgjEh3EQgU5gn7tvpyWJ4ikjyZK9ssHV2tVww2sFocqVauUTHnk29e1bZ7bS6P9X31XE5prmZ273"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sh11y15WTkbzSH8P2YEe2jxhn4VjEpWNGDjJxPnLh1pSF29X3zhaT2ZHn9oRMNrSkJqtTguk1R6QDrioQQUntyZ",
  "key1": "46YthCKsJx5wWzn1TmZxxevtLwGthjQy13sYUhbk5ArDVu3Wr9YJDUwcsZDrVL6iwWEr6iXPyWbCWvjYnJu2z9xZ",
  "key2": "42mtAgKpbaG6Hne3zeR76VJt17quU51K2FEx2FdcWcxnfqt5UcpBLYDSKRFeRqqL8jmAgSf4eDHxmN74cgQro8y3",
  "key3": "81uauucMLQtXd7VCCse54cJwXKKTo1eD6TqcsMY5f1eMyq6xLdsyuc7efPLpWmwHGAFry75CryxZhdVGyq3r826",
  "key4": "4tPRnd9Peztnb4ZpQtiB16rokhg2HgXeh6M2Vx2NKPxtRLMmkTWGR8qYPiS7nXrkQE5uGvZzuEixkyTXLJWkPszT",
  "key5": "51RzFhxn4CqpD6ivoYCWFVHooZpiP3dvo3HgRWRQnar3whuur4i3W5wywW4cCPnovKPYNEApm69cKmhWjCedXUjF",
  "key6": "5p98b88TSdyxecJGjmd3yMRZiEwrHe73Bgo2CmKyWzZPX8iwkCkPS5ZfXTjiL3sAgwrMY83pCEJkgKosFyBCctzi",
  "key7": "5hz6WcwbdxAcQx2TfHjTSNEeuwvU8QBbSpb1FwnhxLYst2GLqHGUHpj7KcBLsVvdhzHr7Bg7eWwLcqXXZy6duPzw",
  "key8": "s46vHX22oRL1EqLbCEmgsWMjK8VvWvXrxLPJ5kfygw9nNxvQo3fh2LRoBH8gVN8aKkwD8nbiLVsJfm6GAfbrEVE",
  "key9": "2gGGnEd81KudW6s4Bxg4iQx1PM3yy6KfcU1zQHE7ZCUZUdaQGE4eATkC7bMsqqQNkCQTrufYxz9XVLrnpZFZPv95",
  "key10": "61qpLcdN8HSPDRomTqoN7Q7ZHRY1eKuu7WZ5XP58Pdqkq7a9BXWcYn7WmSeM6zkttufrAUUgcMcAbJuMyLQkuSPt",
  "key11": "z6cE1Sfutyy6BCvxnKwK9RoddTcTmr99ypQVgWgXUgXbPScJnbp51n8sh1vvtinucoSC8iLmycn38XVh76gZQ51",
  "key12": "vzuEcc8YLuP5Jf9SfPheQ1fifb2pmakLkXDrioTSTAugxbkF8bZ3tDL3WvAoqwHF51fm2JXygpc97yRXJAVp5od",
  "key13": "2ED92Tv2ahvutFSENgkUEneviUv2KbtVGzD7r8sxcBH97Y55r81VZGKuBZhHbTuJGEeB1AFpaenr1XbKisHVzxbw",
  "key14": "4uxyUuvqDkRMpQCxJ3YC3xuExAEShxEQ7dcuJwAL13EWT4zKbHhrrymqjzkHo83tsAVq8ioDT9LiKyia1JosAMcX",
  "key15": "XyJAxGy6HiMpt3dKamWf61cehjb2B5ymE2V6zsAJytt8WFd3a1az6BbJztF1vMPjAYTf3sAtnVmnsdzEtTXvceX",
  "key16": "26P1SUFWc71n17Nm6HmhmY9ioskVtc2iCv8P97eJvzkBPjSrvfQj1D8KyJgh9jzf4W5bcq6vks3m4GfLNcw334Lx",
  "key17": "4Q5anPtSX5jLYVbfFADuaHub7CkR2jNErUmGUv8Lz2r3JtJ6SFEELUCPfwafMAF6Me6SntsWqWQv3VK8aafDvPFB",
  "key18": "4kpoW1i1YAipr3D4dptoAsXigek4fiAC2FzieoCC2zWdTbgUZRBjv5zxxn6TVtu8LsFy85EgD2RucM7VsshioErj",
  "key19": "4gt6EkSRKLYAwTR7ungidGC94kT6yZH9EL4GfhQ7NMSc6kmPpgMb8b7MW3n3hLS8YosszkdePfVCqJZQYnmzED2P",
  "key20": "5oYXmQF4fsD5mDEnKXpyLAw61ig8fqqXMQLXbWimdd3nbv9dYsN3j1RF5ScPeyurBv74q2Cp1qPuhpBDsduwSpmG",
  "key21": "2bt96kHKGbpHykLKpNAtu9wt6ZEzn3ywaYRZPu8jabCvyviJhtQtu8rNXrCsXZyUNCjcyZZ4Pc7wTX4RzWmiW3Aw",
  "key22": "5DeQjB3SzuZNRhLMjrzP1UfAQvm9swjHxBfb1kyDqhrekWLjLd91gAhmJ6jtDGZdQB3v58W73CyrxzKDceNQY7sw",
  "key23": "5R2KZFX8N5zZMAFHYJCNVHaXCn331gLuUdcrQdN4essgM4VuGa9UcyBKcMGqCBefkFHpJYdQo1YgJLym4CRGYei8",
  "key24": "2STSY2pehEnumcGBFr9S739pckh5YZeYaSraDMVUhHU7esSkJegxH7URfLGb3aCm8Pd4JMLZtSb5qAhHbCkmUaEx",
  "key25": "5YHT5a4zUMAMMA6dx2SWh21RQj6PXC8QeMUWtTaquHAfyKL2UmPwQbmYDYNFMqgzATd4yfiRXbBfqPdXCntSKTpx",
  "key26": "n4EZjAUZiLygnAyZ7hESanB6s1E9tEHV4RLXxp2CT7Zh4tQ893BQPcmHd1ceGUBUA1DeHiRDW95VRUacq7oViiV",
  "key27": "4jXLmXpMU7NxBHD8a9zHnWDiw6X135urFMj5sRAwi1C1Mx7SF3kXkHe1cnTkAenMzkhxxK9b1f97DxE4HBVLN1ux",
  "key28": "5RtLJbVqzkVay4NQgPNFuAUAecwwNqxCBLa9M1euMi6oqS8djUjLRzwAYcwRTiBXFP6e5stv8qCfaeh9WN5Hnhm1",
  "key29": "2SSHDR7qtVWfuqg6cg3tfLSHbhhPcRRMRmZChcua4i9VxcxSsRrAgjED7JE7My1Wjc7AN27X1TWN3p5DJHMHSKMM",
  "key30": "HFUTrKtzdTGCJiivTFPqEtpY6aGnfcXyxhS3kd2MDqsk11kQ6zCM1N1XmquSAUAHeuanGBY6QDxFXnCGpzBEJ5D",
  "key31": "nkXpocrbMy5YCzrBvUcXNCEJzLrvx36RcLgWKDqUWS1yWbrcUsKCvxhFTEXVKrBxwgiqssdXMSNaBmgvGAq7SWo",
  "key32": "3ChnjPV8GP3SkVM4MEdQNefayuzydhyZ3pNQdrwTBWNzZAsCMBMK6bKGJ59YgfzMwAxDWz7tynGXf1MPr9bLhXqH",
  "key33": "CYy2WkC2LE8qKpXyvLD1QU62JQ86G1LwKYhbuWk91KXotRTXJRrQBHqeAYEcKBfpEvRtAuytXpCFLZ5rQEGDcBx",
  "key34": "4prqxawHGwPMC5fvWZV1d9CDrVgmWMDhUkAGtswYZMjCn7CyL1m4pyqB4oU6cVngmVTZmh8mAdoj5fbAEybQ16kj",
  "key35": "5KYhbwzAJCf79f4AJeU7ESP5bqDQeYyLT7iK84CjxgooZMKgyEj5ydHfjP4cRRxCPYqGD3S8xzVt4uHuffTnpdYV"
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
