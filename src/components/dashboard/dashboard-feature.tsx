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
    "4VeK32SgX8shyN4dGggCAZuseFmwxRRJ1CV15pR3xvNmQ3Y2CPqohVfaKPgS29Pyg2wk85VmwzB6awhwTkCLyzEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2KeJm77dYepu7VNiQEVMseJfZwLERXf9pWZynTeVXtsTLR72aoKti37EJVXCn8HLVV4u1UjQq3bDpyx9r1YR6y",
  "key1": "2divBvAbXcsGTzvLVmYDqLKS1EJ6dQ18Xgde2fAwAnciftXNddFc4LtGg8a3pQokEUE63NNCx9vT5Xw71SCJT9sp",
  "key2": "2G26gugVQz5qecWs47Ce7rDZtBP4SkUThs8N9fuJ9tiDK3z3nrHczS8Z6EAUmAZ5WxMpb3JgdY1Pn2Dxg4q1hpHA",
  "key3": "2BuvhidyuJeEYAXkaDse8y2s47LjGWBGqXKZfQTS2rXG8kPqDtttnye3nxDQba46ho4nywjG9mGv8gmMdtuNZJ5d",
  "key4": "3oYvcjhT27PPycGRR7jTQtYwGNUaLYyf1sfH3mGiA26JuZW6W2XRHJF5jfUri4SNVFYYs1u1wsCPEnSMdmYeFZJq",
  "key5": "FwusWs6wz4QYgAqZkF5hAZpdVk3PjnLzmLp2VhVickBgVJf169snzBYnXmBUGzVexDQ2SwB6WvNovrVtXkytvBN",
  "key6": "4j4nYPgEYP6MTcSnhnYh3zUoDMqaN5yH3mnndkYBZfnweq5Ff7mhsHdJpPaXYwXF7m111htByrgizy6bFpPA7nDQ",
  "key7": "EW3k5ECvxUaL1Km5Bpz5zRQJX5uis35NaUB9bowZWeY8zue5RL4iXVTuqzN8SmTqJkzdLkQZbXsb4xcxRYPDysu",
  "key8": "5Ba1tP4WAK891EkUGotjJwgVp2tdTSYqNfV3QXeTvPJuu3W9J9qwhNQB3q39qiPDqoHNkMmNfain5sYR9ur9Q3hg",
  "key9": "2uQRvcCcfnzA2hYd9hPtpNp5vGkpYirrGtVhL5xTDavs4vnzAoT5EKCjP5UTYzMMwWMw6NWTgqekNkytVWRHi8xA",
  "key10": "61Bzsip6SompxV17jDMVRizqKwNB6sRBnGJSQkZRdQWLvuxewvn15Pc9asGRprEdgcK1eCAdTCEpV13E7cFooH9U",
  "key11": "rnGRYM3n9cXRNFonPpCaMthBG9AM9rxtdKFgaQwykSVq9vRL1PFcuBXthoyCy4rbgqq9honUmmVLse6dvaDzEEq",
  "key12": "39j6Q5t5LVMGSHKFPoZarwzhxs7xm4JVpFBSJgFTyFySo2xHGzCRUc19xofb18xM6993X4uR4USZPCz5naubAidk",
  "key13": "z3sjBg1cSGiZtSfwK6qmKsfsdkieAdnghb6ayc7jSTbxyy2tJQjm6VssHK6sFi7sQNLyPVVuu9g3mpGXLJjRaCS",
  "key14": "3nhrWDPFx5m52aaJ3CmFBSjNH89X74uvgk9SFkB4h5mfeAWj1NetXYC2gYfaYj6xqHcvENoDYFVt2WjKG2HiBv2G",
  "key15": "229qBub9ExCcCCsaWoaRY329iJKZsSiBpstPCyJ4PZ4KnNcMpTXTfPBEMEg7uEpdvx44LGZEFJeXpRGxvhD3oC6v",
  "key16": "5VRgTxpT6jJoPy4rMPUk3yjzcDVXjBNqJesqxn6fUqoS5c3AY9dgnLArQD8E4z87MprWwWBnogoXGanqVfLKWXeK",
  "key17": "5WbUxehBaJjdTUFHGZygAf7iAH1BpzfNkR7nJqghHcathBPM459ycE7A7dtmxxruNbJYi6afoAkXPmMXNoUHK2b1",
  "key18": "5zasBCE1uwWBjephHQFHyz8TE4dK7jze14x3ryY8XY6swCdz8ihAK5iWH3NxrUU7f8TcgDvhRakS7tZ38aD28TnJ",
  "key19": "1pPC7qmXG8zHXMxb7uyTGZX7rRY7M3m2dnHHpy8f8WfdRCJsKeA8ec66jfJVBiuXHe2e5eS2Pgg1rW1Fedk58pj",
  "key20": "66SsKeBCARPyAp2of5ig7s6J5rRZYwVp91zYkpTMbxoVDB49CjncwAaqJwUCZNZH3NvijLTSAaDmapu2FpDHg5DP",
  "key21": "4PUvRW8GmPQrtKYaK8XQG3P2Gc1PWqb6ansMxKGUVshfZuNm1LFyY7hhF9Pg1hrEGBKFoUkvp4vaBJqTXkysPVeV",
  "key22": "4Zd1eqm2utjo8ihGwPPhzVSsKJitKRziX7w5P24mecUY9SCLnqeVfVaVQGUvFBJ3QBCKYGx9UVhP9qjy4SYFXH7N",
  "key23": "4KsfogTKbSHHBKdnEANRWemc2Hzq5vhsBBvsRffqynMmTd9PtxHwkFBg6E4qMgcyQAAtRNYqv6hgumTQEuz8Dvnv",
  "key24": "4TCPj1Ycxmcvz85FRcfb6ZyhLGatTV2dYFv2DdepAnDh1aC95QwafSziPTFkpXMWDQ6SzNeGxQ6DqFq4Y8DDW5Xa",
  "key25": "E77zwGpKef8udJQtQvTSUTkRjZWy4tmc36xNyZ4q55bGXfgkPA9dzZRGZ3LsPbQvLcptTBqcyrvZfNY4iUfuKVS"
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
