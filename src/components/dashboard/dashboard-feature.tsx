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
    "2rJ21MZExxZ2yCzGpqyz1pTavVDPwxT5KA8GmgayFaY9br9SvWUJ76CLXcUKtxZPuvAGtbGWi2PasKnUZyYn9dUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsFF2AizKrf6yKh4B8uQh9vZ7SJZ2rnq4eiK6zgdtmTbhPuL7HvC1VWQtjvHE4AzbVVTF56Xp2uE7iw8mTHVvcp",
  "key1": "ZJzra9Sh3DN8GmZyEE8qHNj1zVJfJdC4nwVBvyujYngaoQGr6YyASxhAMgeCTgin7zPj7u2PBVkNHYGGbVEdUqw",
  "key2": "5Dxawd6Vx1YFmwQG9GJMXdcst1QFaJVAmQC4fpfjXJhghur7dnvZhfp6cCiraeL8S7TyuPLZij76tMWF3dQ79GrQ",
  "key3": "423ZVLfZMXkJPtx2Dvyd6tpRes9VqkDoYjEECYEmXRSfyU9qgYza3zspY3uJQenatFopCKyfxfKC9gtTMHQyd3Ld",
  "key4": "5NDqQqMtZd88nAfso1hfNFES9zpgkjPjqxfHmLm6sYus1Nbhw8rCH43umsMpDDwEVRvTXJCivBdKtNsVTBE7SBBW",
  "key5": "mQfhBQpL9hw17aD8Fs9HR8bVnbCFaXBmRRHNPZWEpWh4K1NgYEpcLFbB97da5RsFYSrzeEcmxmzogxM444r84Hp",
  "key6": "4knPmafEMGD32Xb5cYBqmTMDKGJskwHRnoAavpTyRcNLXeZijatzgQKN6uECWDqFtzKSSKkXsqAtdEgXxg1fqPoY",
  "key7": "23vDnnt5itEiZvxZDkkgG1nuyjrroiqALoezGsZS18ShZfPXoFzme5wdrraoVgSZgRewk8DHEd3nAPSei2hevVyo",
  "key8": "4asyKZpRDDRrH5zdoWcwgBbQUL7UiftQtZSyLewP91Z4ZUPRfXjJ3pVbMGvEbcXKpC7bAbVzHCuSQTf5uDA6j5uq",
  "key9": "ndhJGHrfe4UVZ1FPia3cqpQyAKfQMQX835uJtxC8eFUQPrmYCFLEy8eZzDAQq8BxANTrpcFgiZ2XsVx8sByFfM1",
  "key10": "2nXzjvZLtTfWMKpTfZUFBNUe8DdyePxwEBjzuQMgUXGoGaYqDNnMnveLh8LnEqvQNtK3Tx8FC8PkzzyTeV1btabt",
  "key11": "4cM4qFUSh746MfyLsmdoCVnxMYLo1hFSRX6nDoibsnnBw9BcwPL391vebYoKxADp4Rd6UtM3Brf7NbzbUY8rRneS",
  "key12": "qkScZsYodoXU8ST4zGqA4eFSnGqevWeARDy8inNwZRTgN6TmrKxsB89UBv7c67y1uFCMz3dT6kVEubna51WYY9R",
  "key13": "5UDe964ELghVfhbPrJPMtB5Fvkv4b8Cg2wSSpgeTp8fEyapGYBfh9J8r9RNiGwZdjycor1zQrn5xok58QnoEutvH",
  "key14": "37sj5hg9m7VycBDW8Xdi228tw5ejM2Y6hRzgVkzgoJEW9K4MG7mL1wAs19kWqEz5rZQgoQVmqHNSREvqFnr5Dc5v",
  "key15": "S9cFaJcAMRPG2zRq3NiiyF3qaRGs73UCvQRPu46frGLKmKgzhfMN9GJRbatLmgxWTPZqXcjvvYNAHFCabooxsQA",
  "key16": "5vxCWfJq1qJJMJRoe6SBYJMnjydKergM1gemXAArzpA2FMB5xtLCktADL4UrNZKKuyT4dwf72eN8Qziv6PgKvkAm",
  "key17": "8CCQuBrAEuYHomuwwNKvdeD119FDQuJoow1wahoXJtMLnt5qzQGXmbE3mRpueyjCgTuzVbdWSn8QpzLW4GLyxsJ",
  "key18": "5hdk8MssVESpzZtrWjHmCvrksgUCWUVs9byHyMGHcotwHRfSuj9zEcHvr8zAvQcPhdrmmmXhZy27yULZRwWQE9G",
  "key19": "3UeH65dLcDLJ6Dftjx34bgRkKZhAhkuse9KxkhEzwDw9USghzAVMGodCEbUiVErLs6s13DdrTRQgH1Dd7JJCaV7H",
  "key20": "3shoQxZN2XcCWpqkjxnMWvszNjb2e61rWpjXYxTGv4VyzsR5C2y7EUe6oqorShsYCaHTN8wntBzUxEhFtaykHkxF",
  "key21": "qQz1pjUx7HRMSZgTxTXGzzyR66uhKTko7XxPU4zRrVd8fh4z8EVmzGLtuRec1RKuCazhFr6eHS8xyEEks8G5jDX",
  "key22": "2WuwqWa43quZyGRrBTXzJaaBvMr5fg4X6X21Vvoav4oCFPMwXjeTENqhsMwyH4KLSizmUyodDaBP7TzrpWT9ZDP8",
  "key23": "4raJcoKX4yjN86YsRsGSGT99bcbWfD2xwpviJS3KidDjwbFDdDqqSK4ZQ8pge83cXYD44fkTYTtYMuHBhDBNmL8b",
  "key24": "3bnsDcxGTWMS3R9P4cqBziJecP28vBL94BcqiySwcVE1CVDMcsvNJ3xq2CfvLEdjdLHrPbEowTEHhm5tybAHQFXy"
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
