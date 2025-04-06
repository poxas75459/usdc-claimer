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
    "31W7F4C542ZUsAkBwF1DPK1QdQC4kZ6yGhK61k2HSMtRf9oFkaAZHvtxWTj68sknesXYebdUtaZp69qkrFrHAF4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iF9sGkuQT6LyrjQMXgYQm9Y9pczVxDbbz3NboQwfFAqY9Nje3vHv8czNTi9CmKhxkFoduEbwYHzd7dhV9LN1pQ",
  "key1": "3Vs9yxXTx6TZYHj2iGdoVZKbBLYjAZPGpKsBLxtmQQnkLg2hquELVausu6Nxg6q4kUEvkrNYMhxRKGQ2dNWT2sr4",
  "key2": "31uUANxs16dQZkMWKknSUzXP8h4AYb7wUztEZ116chbtKAsLTR1Mo3t94aCk59hoKnkyeuUw29p13jTeFPMUTTZD",
  "key3": "2wsey43akhVq7mQM5nipJrH1fnR59jBQrCZgjiLqVB8mvYKSg54ZfRjwiR84UrNhMZKYxZGH7w2YnZZnqL3AbUqD",
  "key4": "4F2WGEPZ1ySF4MXUpfTTyR7VQ8A2YEbFQnyjRtwn452Zyr6xNYcALfYvUW8Ge9u5k5T3M2mtyaffRnVtodEhYX8J",
  "key5": "4mMQ4jQq44F9RqbCHBapxE6nqbxgnL6RRLLNtv4xafCZcBWgZSDxjM1HKdYLLB3WGo1GVPSa8F8TTq4xco2GBgHg",
  "key6": "49QUmh6eGTSY425gdQpxTPhKVQFrHm296CYtaKdp1bNdPvLBXoemxZNNykdXVBdL1Rst5d3tDpvDDRMJmQ7rDKwg",
  "key7": "58ndbQAHzt9ufJQdoHBmRJWZmsn785pUQaYC22EDhP4qEU74vU3wzZ7cE8zuSRNa8UkareRwtkMEh6q6gXb6ouqt",
  "key8": "2bpr6Dr5yhs2g1t3D78VZvo1SPPvtYiecUvtgGXg6Pcd6LDbqFdTXyX2HRrEjLw4hDCXvu1VcQZ9UvEvqci5bSDJ",
  "key9": "5jdNTCQDhcsKbtY5R4GuV5pyjjdu5xJVrrniTrNoo8VXdtQd74YU8JVpNNnTCGT7DonYJZFurt6eSQMnJ8hvHLsM",
  "key10": "4yzt4Gc5c6MHR4pv5fVFszHVmxjGAzqhUUy81iqShC3dLsjxFjjaf5Xm1FGfNC1VLq4cGYU33urT9YN8y2umHbPc",
  "key11": "yQWkwngvdK5fPpGLPkJWRYCA3A22H3qF3qavNQwdgWkw4EUhsHc6dM7fHJHYRmtD14fpcwwrvEDgArmko3MUe8h",
  "key12": "5R964DPry2o7rzpMmMcbAQmHanhHSwNxt7XNs9qrn9guFC8YGkch2NByXszDXnoLzRmm2u2N8BM3A2C4mTEKEpgW",
  "key13": "3ySBqegpHa7h1ksQ9RKSLy2PtAnh5sgMMzhMuYV5ubGk2HvxnETv4n3GsjgxFm5My7qRGvdSc6XkAfKFe2aDR1xT",
  "key14": "281gU8HhDoKJgtHwwSzzLbm5vtP21ZsL3u8ju8rE9tNt16s5ZEaMSYRuzGync6TEgV2MX76w3UVdvTtH8ZUPeFhg",
  "key15": "ETLHtfiozjMgnGPTgV4f6JqmC77cKv31cA7FdaUvnfd89HnMi5SdxpsvyGbXhmgDGNbdAPWxDaW1EpFEz5ujJdb",
  "key16": "5xdqws1L8XmqDmaeFaocpooQVaShBF1RD2Yg84BjqVjwEuCKezWkiNjqXhtmstZGnHiWYmvxaMoVavqFdAfp7nuj",
  "key17": "QjrYzTQLSrs86a3GnaUnir76hgocfjv5qJK5UbnqGvKqmkzzDfi21GLyTQj2VQFh3qdixzih9brkfHrHdZBnfhZ",
  "key18": "4NCcCqoBzEqfnf7D33r6pUb6vimj3C3LMP2u5ytJG6k33bFfZk3cQdFhvFUmbdGrUspC7QRDCNAbsbeNSTyXSU17",
  "key19": "kenru9u5k3Ts5fMeJtDNbE3sQ1efuuKfVgpvcfaoRWy3TTErLZaHZ6vENeRC51v7TwJYYDeRwaNik2mwNAKUp2E",
  "key20": "YuQb7XPqv59mJz8jJ9rGbxYAfkWxoZDnzhHm5NUGJvxDF8ynU234wxxLF37xiybjjzrLHAL9BsHbRa5LLXcyf92",
  "key21": "58AoU21TXYQ3hMMTDWnoykXARYKfuLB3pfRj59nbdKnGW3PBc4BzDURH1CkgCVAF1rkH1vhCMfX2Dd4EWygCEPX2",
  "key22": "4MZCqyKPwfuRHtLLkNVJ5vnEP6J3KgobrWYPFLn4yognAaHXDpWgc9A1JicnAiLqYtz6wbeXRbV7pu4som29Szcr",
  "key23": "61WwpvDJx5E2foj5cGRToERdhkuWHDohW5sPB9TwYFQUCrtwgGerqaqgpXPQpJAo2qmJM7eRsvbxYPbpN1RVUc5v",
  "key24": "2wNYdXXNarsyn4NnLhgsxp6ny6yy8A68UZNV93pLWWY8TVywBicCLuZ7Hss3AVW6hBdWyfQ9ap4ZWYYtoQTsedrA",
  "key25": "2eZXeNFFR2LNYtgJ38idcmNGgeBSPKPzUwR64pvJ4yk5wthbkUd1p7qxLZyNojBRMAYK3EBP32xqPs3QXHZeS13i",
  "key26": "Gh8c7cC3NQGPJC43qfrLTuN4Ebgdjehe2Dc73DgtJUBqauXjEcugKwWpqvPLDyum9AG6TAFHb3fSDxF6ktzoHxU",
  "key27": "WaScGv6kAme6WxxHPb3uNeJEjeJYyDZdoPSWL11EdENBSxVc2f5sH7NbFxe2CMudFd1SEVU2ffnPHGwawWUQWUM",
  "key28": "2cuZMFsrriAb7auEVEenugfbPmSCwoy3q7hzWj9tNeBexJ2F1zBQwhB1oXEnNrju8N6QxmdTjE4J7bEq5EvrkhLE",
  "key29": "3URMSA56EvmxFNktcPgNEJqTY42GN7RUHGmjYEz9S7aEzri1g8hPwYPsY5brEGwjpNEZcfZ5B2zLUUp1gVAya5jr",
  "key30": "3GaGr89UAMy8EAti59LSz6c3YE2vWRY6urGkbr3bsH55pRWat4KNYsbRgRGV3YKc5CZ9KVkVDTcsvYj3oyHfT4dg",
  "key31": "5Xe6Er63bnCfG91BkJCEUBNUQVQ5uGChrNP329zBGTmpyi3gSVrL4YdU7ZjjKt6iEr7LACnqPRo3k9kbiT3akLLQ",
  "key32": "4K8npJM8tvnHkNupaKWBd74fq9SHGwLcPWA318PVLLW979vjjePQcZwftJYYUS4rBremYabbd3CZwdK7Bvqizj7i",
  "key33": "PHGSx1BjJvkVjQsaZpw1bvCzdsUnMXT9mSxQFCfCNQ8Nb85Sg9w1ko5QmVzUXWviFryTa5AeToU5TQV25njieZ1",
  "key34": "2HCXMZwNdSZJsVHzPuJhxoGw38yUh6xjknibV2RGwN68UxVG8NthnVtuWzNsTMcw11n4jW3JYn4pysjmaUXeuk6G",
  "key35": "2srEJ2tqbjWWcn2ijjnwYZPDLkbvr3ckVYhcJc49jfJav8isdkKgWbxjW2ZP4EXEWjJNaJGnh4GNS93VRBzENikY"
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
