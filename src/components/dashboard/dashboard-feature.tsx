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
    "4pUTHUNFoFoJL2Mcs2qV6WmRvK2nsBAFXp3LeiSGnu5Akduyf4ihnpA8RL36aoL5HLQaxnbGG6VMhv7vEVvzLpE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "keu2btQjMKanviSVtMKxAWEASPDxDtzZEUmB9DdkWzc5kZ4cWAVJBivaGFKraRuuJcaqEEPdAbs2v9kYJv9eTBP",
  "key1": "rYxfA68JdV57EexryGmYBWfb3kYJT6u1mKVy4FNXP9hxbk7T43dK4TFKWGPQpHxchL8AnTXnr36CHuv1tzSpEfe",
  "key2": "5Ha3ohSJmcmuT8nkEuAAyX5BjkCNHBw1536io9qiRyJvLUzpiPRT2HT8q6WPsudbVw8vn6kotgfc2ckbwtG6Fa4r",
  "key3": "3DewQB9ndSY1xu2KS3CgjkRZgtRvXSR12jtykxaQah338oz2BDpQeuEZdJ2Q2NqHjYa4vmtVb3E9GEb1mZGwQU8A",
  "key4": "656YH6f1SMhn7J4s9zf3BnYKghYokSwg8aXa3WheVA8drUdpAjtLMbeUe94mMnrVeqjgdt51KGNghocY1EcGia3k",
  "key5": "3ShjFoQ7e7sAsTVRn4t6R3rU8HgFUo78zXV2Kpwwh7G7pb3Jrmjmf7hfxyr8H34kMjmrapmTfKD6CA5qvukNPgy4",
  "key6": "2MraWXh3mYgnSWvoysQpZrMseefxgUptXF8EcHKmLeywyhbDxaJUsddHMNnnRiBFkVogfLAVxmxx5C5k122P1a2F",
  "key7": "2nwG76gXQ3xFeqsuazKWJYnX1wMXqqWUNXm6SsEjmUvavhv9sZ1bytN8GuwXRLmQVj5RpXhsGrtKU2Jx2sRy1mRf",
  "key8": "m7kjSpPqn3bWbJoWjZwKEBEdwAi9ma4yjn482r1HHPZx4WACu4idgyBL1BScFMrokK8fWGqBj9qQeKPVKQkCnmn",
  "key9": "9HfTkCvh5uHR3Y8BQfZzKvL7bpY9nSUq8JQHjAp6i1xrnpr6SJXuDRq3DGAJN5erKLqDkGppE6qAwG1xabuMQvC",
  "key10": "mkcxCrgDLBESpFSWiV97k95WYQ3cNz3Ptuyskq5GY5JepUodwM65s3TKLanU5pqTBqj6S2MB2fm5R2F99w8jS3R",
  "key11": "56USfL9Jy8drkstLdiEcbaQExaD4zirWjrgHNHLkj6UaHHHxPj3PFAEz54S4zMTTbMWKQ8tD8gJhogdjzNVjP42p",
  "key12": "CE6Qhw2tpyXQNuhHnLwc4SmXsir3Vm8zt3q7dXJceDf9Vvt6he8nbzRRUXJTSpBCGz49h2PpVXnPGwbHRe7zWtP",
  "key13": "EMBD2EVRscasFHoGTbd46W2cpLpocV6VyBrMguFMJyySacsTnR2BDVQKLWRuEp6TKBJAsCnW7fPdamC8NMWakaY",
  "key14": "3b6H4UxzaaCZpTRybVC9JyAb4sDfMkfwRr64h6RXm8QdSwy4HcNYTntYWAwQbnssE3SFnr4eZy8siHY77sDA2H5m",
  "key15": "4B5gVkdH3x6su2chQEV3DoKBvXJmrwr8nHWAu3Rb4zBtvzoDrbMWCE27R3j1L6qWadgBQWnFEKc8umtXCuZfxsti",
  "key16": "Q7TqNPvrD4dqeRqzdFqmr8DuiWSj2srdizNZDZhXvBBUXLMYxBkAGHFNH4STPzoyq8ceZbwsTv7fi1fDoyKRz7z",
  "key17": "4XaBnoiXgP8RLnPBwzKFYUGBUPFwbJQrHnSZYEAEzeJ26VQDXoSZHuER9intRKLm6jQGdQ46NmqsX2sVehrnKv7u",
  "key18": "2YZtFHdsGxdzpmFnU4mAnf6mzJTeHwb2crXJZh1QtJQ2vfnyCdNdT5AfAnGKcTzQH89TrTxXGh4it8LH8tfgDXum",
  "key19": "387ivhZ1Q1WQEvzFKeZ9gmBAeWFnXxgnpNfXwHoTCSS3dfuCqjikQ2ewcpzB2DEMepKovAEhxoEZY7BnVvbJAKsA",
  "key20": "2wHzxuGwEYb7re3vFBpiSiD1aaXt7TmoKmgVbuHbvjSwKvAXX5apeTXDKrRKffB3Sc5mT9cg21s7vBgjPLJphpGF",
  "key21": "8yuxsU9vmaGdJLoRDsXTeUXxjbFaCh74L3gmBYAN9fyTM4N9KH5N7KevEeHCAndmhU8b68TtHgFNKT43Cz7mv7F",
  "key22": "2dH1LqKgKMf8CjxAB1zZoZwewwhGpDf3jt9r2PeRbeGCMamp9hddFoviwvUw8Ldq4bXgMoejZ3yjoX2oc3dyTjve",
  "key23": "3vvPv3bshiUX6ZicfYKe4y1fkL9PprPCB3e1xReqtGYGq5etyF34Kn84gxWVUopotzFCx7yXqWyjVekew22doeQq",
  "key24": "5D62xBaBjeCZHAs9PhPipZMMcFLZc5pqzyYnUkxNhRS6fz5eiJfHT97ELALNMyYV9JcLfn254QGZcd984SWur6WE",
  "key25": "2JCiX8tep1DX6E9roAUzhXWiCjQyZdaFcdEFgFNPRMSzcCtPrSDYPUuCErxEPiGTAxNgPtJFC2DL2PVPHBHkJyD3"
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
