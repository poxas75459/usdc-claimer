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
    "49XrNGuH9hrV4cVYVFHEg3NdMgjgm4dbDGSuPmZpmZpZY6m8pqRqHY4M2rLv7bU7xYqW3Sk1rxYgYQN3aCZ1GJhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2tjnn8y6MJJo1jUa6o5oM6v7xqZRMmtAYr7BxNJMxwoE3UQ57U464nosPxrjGQGaLnYucUsyghJ2oem7KcYFGS",
  "key1": "5q6h8GDhW18acRqk1wBdYGmH5A7SyUxwDVBhxSJ4mLUhvAtrkC1KF8T3o9rKayauhH6epctm8dD5upU28jbotNbd",
  "key2": "3ZxbB5jGRC921DGMk1D5UXxvLHSAgiRAJrHvDcZnnCJgtQM175FFtaMcq1fSrk7iJHbNr25ATwRCsWd4Po7N6yjN",
  "key3": "5Xfqc6oLJidCuRe65c78esbCb8rLdwsG53nb8rCzE4n2kkU7ZBusSQpbaimctmGJkHuRMMJMQKEmUAqKZ65bjM2z",
  "key4": "5R8jQcZBdG8NkcZ3WsdNZEv49Sh5qJq11quWirnvz4EqJskPQDfriPYg3LtTAGvtsCAdMFytvZQ1XXTwZpgP7vuN",
  "key5": "28VRcydaV5o1qw5gy59BiPwsDiNBqrVQEnJfd9uC9devVVEEimmNnvgtsPgt8p4K7bGwcAo6PiSUtLuf4umshkQ7",
  "key6": "2UoRmphNHoXV22r5ZM2b5rhc3LcCjauBfw3bMD8Ggtk1Wmw3xo3QpDn5bqGYzmpmZq6qSW587mT1CFPhgUffVZfj",
  "key7": "rKd28Uvh5oM2sWFWUk7vZDn6198k16jgrjBLH3Cuw8TToHWquEpxkbxGmsMgR12YgLqeJk3ubkAwe8jD8QeKX7c",
  "key8": "5PozBFL9d5zdu6ukAXpcaNBV6AHU2sg6aXjbsA18Ap5mHvZC1TE1KBLSesXuqYKbGLCoR6Dbk6QQZ5ysrEqaNTC8",
  "key9": "2gbz86sqVRgT3XJEENjGanDSo7qhFsmbSd4BtyiMJyYd5rh4E1ErK7d5Hyc3CqaQot3r6Eudcpj2ZC9wM3M7vxHD",
  "key10": "4tndpEz4D2WR5JVQGFkJSqAEDEN4bD37rY1X3Es4AMpCHyZHuRuBuQweaH7gsSDPztLCaqrLMG45Hr9wNFo1hr1g",
  "key11": "3TwXSXqbY896zTsTpj2LpevafKjermAToXs2wQNfRReiwDKQZCSMRK6B8unvnPHdHBYrm7xDa4uzzTRfqkZBQxLH",
  "key12": "3a5Z3LZvdhowTEbVSMFvF2sBCEEUUUwqaFSbshF61gWpMbaqgcw9PrzAjx8Jr5QkNAyT7Bw3sMrb66ptmxgEJ2AK",
  "key13": "4AXpAWov5D4md8BDsbrfffLJMRwcQKNcNevNwUmH62bp8ojBGyam7CLsKF4rhCB6FApaqAikHTxydQTRi3SFfxDm",
  "key14": "4pf29voZKFyxDnFZ8P2pQY4F8L1Hne2K5y7ait8B8pcNscH1mYNCVrufByxou3izHt9u7sXNvPqx9V99pcegKMda",
  "key15": "55oVLgPq9qLbf3MzaM8xaEHC7JzGc81WhUXyCJJDrjEb5eTDy2ze8u5YR98xZpKuU45pHa44GjepwGmuAN1TKWfz",
  "key16": "Cmf2qM8LHdFTfWHw1P5Y6HUfHYJUwNdQUHYxgBhTUZynyqZj26pGLBftLe4MaNVin8tcGzjzasxLwp1xvqQtjhm",
  "key17": "gBXdCmjc82a12mye4BANLbbVkqGRfC9rRDCVr7iLsbo9h4J8vc9HxYGaG6aTuodienLr5C5jAdByfCCXzBmvBRA",
  "key18": "3WnY32PETjM3Sw5NxqRYyiEJXrFBue8yWThVqCpQY5ZdPMkAj4Tb1LMWesB8uqZ1eoE8rgcizJ8djRrZPMLCK9ZW",
  "key19": "4QtFgu14SUVhu9U2oEb7N3dmDUXGDo15TjHschp972byGePNJ17x31eEV7BCW7Kw5avufh3MkHKK96dkLWM2PYKH",
  "key20": "57znBy8aFFx3LFsDW9VRXsWbsjQthRZ5fupXHqeVwXCsz6yDZre2zY955HHnD285fr2jjSjwb3s826t1ghzhMfEt",
  "key21": "61PHQir8CxYZ2UFvFyYYpuuaKkCWgtLXeGu1jcNsovyHxDRsyZ6ge4AepvMrN1kYdLmbieb7sgjMoSXRXkDS1Hw1",
  "key22": "4e9TrpwHPE1ibZfr3AosM3WufZydPucbbpeqMgmBji5b2vhxRwKzPoQq8rFU4gbjaWRc5AtS6MVrdRNsJwmMy2Zt",
  "key23": "5k5cg7kpd5oRbUXMaiXjDUtHbtwU6MjdsUmhzapN6yttqjXvTn3CfTrcn8qBXjWWfPMVfymadNnCFv237aZup8QZ",
  "key24": "4zuAtcKHZEvHW4PYXJETzHPzeT1ZpwU3JtxRhcDgLNAH5wUy4jPbq1bYCffaixdN6GbXWKpX2mKV63xXeWLmMctk",
  "key25": "5rxUzsW1BXPjpiKzbCmdzERmW57SLubqSu8HdVN6oYu86PQN4YSzqunkdvNGr6WV3JwTUnM5W86dpf5VmvQxBDja"
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
