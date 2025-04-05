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
    "3cZd7c245afcXqD19zs49RBUjJgk9RKLfxT2CxJ47c7AQ5Cnb1KTw8BuBd9uAnv1nNj7GhLDRXjyX4W5GYxxdwG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CqPAPNSNKgRUnyvBT69JX8SkST44vjAZ1LinsvwRBJzwyzwEeuFhMV6McSb9NnYKfV4VzEnLu2iWPV2bNRvuLNU",
  "key1": "4CkwaCY2bPPdwf8edztTo8b9PWRgR9WeVmkkwsyxVDeWzZX8eAzY7CrsLq2CHxEZq964ijYW4cjugkdhStE28BXn",
  "key2": "27BZz59Kf5UYh37mJevutm61hZbmUp77zQp5VurSm2tcKWTW9hVH79GBzT2raNcQ4WUhHUmVR3b824QyVSHoPrVM",
  "key3": "58LJ7vdPD8eTDRXuqPsL2YrwJmEGMdL1B9VbqZnusNrhx89ooxbs6mh52wMP4YRwXDnsXnZhGzSeTt9kMbsTcSZk",
  "key4": "4cV9ersLLAatgSeTdyaBLXPmuzTwHZ7i6Upo63mWk6fyrPGkdES2LR5HBzPh5mrY32uEuZntLC7PqaQ1pT8d3R15",
  "key5": "5FtYum6tB4x6AEj9eV22kYG3pambkhcw7Hdz5TsVZzx8CSNMcPB7GawTP5msrvSmnZFACgsU8vM8ea2XEjfQi6pF",
  "key6": "4wCmDTaCW2sF83hVqYdBFTcY5qCiZdHrbkAWWsux51vZWGYdTHkKDsx4vCbkeSYfsxd1i9Z9vhKAVUCADKHfzAcF",
  "key7": "5kMp3LhZVTxJm7GMMGcvirhDi4sQfiaDqwWQtXj7ev6H5SoSHbKJ2CX5WoMqsNAooYtUn3JVKRN82tXiMga5Skgp",
  "key8": "3hiWx6P5oeyE5PrL12Lsboa2nFkW3g6k6ysesadHrZ1KcdyiGHz66XTuVgXu9HKX3rwPJN7U5ky9LwLgyBvz1m4g",
  "key9": "5fQL5KjTkzsFzVnQyWjW9LibacUbBRyKzV8u4MZUqZN8EKCHobxq8F4bX7njEHy1woaUnSXEMfLwGwCWYqre7ifG",
  "key10": "3DAzhkhXfeYUK253zSHAdbCQyNiWbvBbTXLwxmARWPCr1zM6Kxrzd9nymGqRDRLkhW4dLcJyAvGxBfPC4ZbJnXTV",
  "key11": "UCTZQWCk3VDPuUaMFFNP6FBChzMyEXw2VT7KTjoqo6TvXBH8nxBig5daq18PN3kkB42PDM9N7dWcysSpvUzczHJ",
  "key12": "YRLZuk7BWDHPrh8sPTkz9kDMzvqaZmAG6xPxBT28LszNWKdC2dC4NKLMNbga5SDdAJNKEDeuspndv9dP7mAEcqq",
  "key13": "rz1Rvnku9WBCqwxLppo4png2FTC4E8jnaEyknV5kJWJmrANfviVP1XBmtiSLwJn5CanaHVak8t5drtecxsjXmoi",
  "key14": "5DPcaWTeT8RakXY1SGTfpzxiCNyuosoizXkFsC9qA6FLK3hYJ9Tx6qxjHFvs8eepenkeXDR4tS5CQ7cSJS5JR4Yj",
  "key15": "3tPzTEZ35jPuWuucusvrz4KMReE5DKSmC6khG9or5UAdzsC4SxVy2uN7d9AAuACPMDqZVSHRcywLCDrvFEDsU3tH",
  "key16": "2DSgSxuqZSXk2HDRFivxtWx9dBT2bjoFsmXwUT7MSzDaBG3Kk1JRwEwAgKanaSoqZvsZwDVXVEyR9deYgQRbMX47",
  "key17": "5mwJuZgxoKhmQo4TvDyyDGo7Bki9rV7gsnFWPGrscqgHBeacPaUm9gjS4xGF8BeBSjXnEGpLiyNn6rhmYWBqt8Tk",
  "key18": "63wW9SNCiLQTLs6scePva3fBCX8VdWKGAGxc83Q17EgjvdpT3QMb3vB4RhMnX8FVwUKQuqUdnxM6eYGPucoBA1ii",
  "key19": "3urCt2UzckAZ2eNdDy4WaABxAiDPYqBw98naS3oy1VQ18TNgd7h4hDsrcCEGLH6naLNJr53aB6au5fKschvNJHF3",
  "key20": "4fA6C3hyDmREb5TVgJQEsPh6pV5HJfK5h8kZ9H3iQ7H754awZqiomnagkX5s7p6CcuJEUWvQmJFAAjcC5Si7iHda",
  "key21": "39bv9n6NmkJ1zTLMHuKGc5ksEFcT9aPscRY43Hhgmh5cbqyopf3CpBBt4FgZbvDzCMi4QqGZmwtXvR55WBMFZMXS",
  "key22": "3yC1wANW676xEmnh39yFVRmoUaZwBHyi7cQSFpz6aCzhqZ3Z7ppEqHd8h4sds13PFHFwzPNbjZwKdcKTGmTjP12X",
  "key23": "4kqRvbaBwAu8vVPrDCa5Z9nP3f9Qv1yMzjjTPDuASU5qfrkc5K6K4Q8y5fezP5w9sD7PDjKkTxqDTvPaCREtjma4",
  "key24": "2qTEcYzLpDzEg5AiPSdh1fED23hDaqXApLDz1F7QYsMoA2a3RstvEJ9eAkaVKx58TZeBvCpPSrCzDLCLhFszdSiH",
  "key25": "5xCJg6ajvJSPs7Y3ibnZeEixBk5Y8V2CJhLWWqrvUjnw6NvChW7hJHw26ZrgY2WHfCrm9yQiz35Tx75f15H8FcXC",
  "key26": "491d5HEdHq8MGsCrcwdqibeavGVWaMSZuxFmjhsM3BiGHDneLyAN3WnAXRNDVLCAYSBZFbrfvDspCAyrLUjb9b5C",
  "key27": "3aGu9g8FwLTTwmWNXR95u2eGLhcB7zHak1BheYzwhYs5D8c28EroSUkfEH9Eys5ar5uhsf1bHHYKysNT7QhMibkJ",
  "key28": "JJeAwZe4nzGCiAj6imGRCMyGSPRKi2Q3Xe9qHrVRM8tHjXmxyPGNmbX8xn9ZHKmNcjLE5EWtYDDdCvEbK1wKmHk",
  "key29": "47ePBqH5Jm5XHir8eMCmiH9nqxsq61LCjRS2nq27sjyhu6miBv94mZU184TqfNuUk5qVxwF2PqX9ooyCuPARDR1e",
  "key30": "3Sbtxujqt3qKNtxHhietvVGABtBpbuT9R6tWKHwFbJxiHNRhb4YDMetS5CoU684EJkcny7AvyHmPEQcLXWqTje59",
  "key31": "NHX1TkdgW7LCrd1zVcdFrKSX2bUBMwHhAmoFAEf5XLgapqpM4qp5NJTrKBZUoM1mxm8cMk99QCUGKZSjperSz3o",
  "key32": "4U9jrrRTNUbu8eHhREU6aQ3KNu3H2chSJbPNmvX3Jwa6o4APqgxyvoH8M4uQ2wRCa5LhdAuPvSiP7XeC6ADyZzEs",
  "key33": "5Eh2mxLf2hppY3yYHpygY2agUWgmkKJ8KrjxWB2CXjGFfGXTYU93HzbcuoNfPRVPmszDQ1njgg6cz7R3c3u2jvTK",
  "key34": "Rp4wxkgjY7h4r75rQjPRhsKBTDh8VzeWGkRw9UbTq392XkS4jRTGsT8HmUzt2idwvHikj2Pzv37xE7MmbbqX1FN",
  "key35": "5mWjKCUSu63FA7UML3wjVk5YzuCcPwDvb6xzTjYNMtXYtjyEeqqFPw5sZESzQkPidwEPzFNgi6KrbMvzPxPN6JT3",
  "key36": "8SKhjRkXt9GEAMDqajVhXfq7F7aa39LmaE3XEWhKDgyGgdujzgQFqZbbUzjLa31PeoSGkY69QNinvYgGb5M1EWT",
  "key37": "5gAwe5zsAch5bAPe897bNdkKkiP1Mh2rhHRGZzsJa8SLJt6Upfa7EfBYWH3ePJr8U1NAGZijJehu2Gm93ehGtCd6",
  "key38": "3W1HcWccQHhEWuAKw38BNgD5A4dNURVcRD41PBcETikGNQPHGaixyuFHfaGRypb5RhK6oXRrJQYEYVuufwFPNvZM",
  "key39": "4sjJUqFBGbdgkKWHKGGke39fNnZdio8BfshkD9STqpHSYN2vpQJbjeRjpW2F5jx2ZcN5TUk3TNqdtbRoW2Hgnhy8",
  "key40": "2sZm3FH5524uu5PmnQTFY45HCMXwCLX2pyxHqwHwChNivu5D5pGstCjWpJhVHAB4xireER2AfgC4YC9rPEuJf8pL"
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
