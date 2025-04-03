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
    "oQnBAzs1fYJZQteUdxD6r2vww4MWPk8XZGsirSFPHap8mxjx1GW6S25mMCJ9uUqmaEdn1Mjkvf7bmomrXXg4rws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32weiggbN1Uy6Mu6vRrb4HHhSU5qSyUsx3QBfpgEQSpYXMNLxTpNm2pBiuRhTyfujEEGAafiGQV4ohnXqvqFhsVH",
  "key1": "65aH4mgpCiRncjroc9L9WkEy51U25X3h4v59GZJ6RXBrDMWJQQE26cNQFQMZaN6a4Sa6CpP1HCcyqoXk1jeJmAuQ",
  "key2": "2mZ6ntggZ6Md5kLZXMSYq2WCGj6ozrNHQh1Hh7m2rCteRKoaHTqCh62gMEJzNv71dwqRAvNrXBSHQ5GhQAS9gHXi",
  "key3": "57fNbqG7tvc8ieNFhCXMLbFdhLT9M4EVeFbfbmv4Ls9xrj8qeLad7XZYbm33PZzwoEuopbX3dRjtG6qz422QwQss",
  "key4": "3FMFrMMu1W48xs48xoDKzUAVTTb9wKsHrMeNjpy4XQKZFCbNDwX2RcvpD4di5tXvagEnry2nYQ21AGHExfmCczwM",
  "key5": "ygE3cjJPYmnpchzvWYa7E19NYbzdehbAmp8SVbirXqJrL1kZXBHkBcWw3N4EW6jvF5ZgAkwcuRrkwkfeLXFCHL9",
  "key6": "4YMhXqutAtnbxkXM6RikPZJb2c2VnUCbbvA5EC5HjcK5UvnY8yYvcr37tpTQgGrsZUN1V1oKmzRG4RMxUcQAR2HR",
  "key7": "5cdTQf3SpunzendofyvSKe2J8bAdi7ghHxWpQckxzvFmzWevHML69Wp7XLE9LpFJWeVsTXxLCS8Z9JJTJJNi235P",
  "key8": "xQzAAPtEGpPypy4eRJ79z96z51EEDK3LS7jh525S78XSsmecnPtQsRykN8WR7NdrpVwP1YwoZbHVRtJ4fcsY4aU",
  "key9": "fTASopg58ABr6b1XYHyhsGyRWeCW32w54PDbkZBMbsPQdDCcobkg425Dfax8RNztREurBemH5konxAzkwiGQQ3z",
  "key10": "2iP6Fo6SS6QCLGrALmRgpYZikqyQQ9cHWnp1RqhhKW5FHvhMc4bUp6twyZxW8V5SKrmyp8NKwW4kGuY9d3eqNEuN",
  "key11": "tFQLqsfACLzjk4fWUUC7cmjYnLcfBzrhmarrnk7ptw35Sn2ufcSG7eMjZLqQuADYH2wvPAvpnAM4B2WYNZNuZhc",
  "key12": "32Cs3eLDqND52WvUMa2dEDLjckYSRbWQXDocKBxHWZA99ivvsvHst5i6srHLgMfWgxqhCT7ABkXRNcN3sKercmZQ",
  "key13": "4jj24jzUM95GdGzeT2p5brMUr8vCk5p3iCQCJPiEYEPijiKKd3rj6HPCZ6cGXsNV17zto7gvPEus6oTxdqUUhHUE",
  "key14": "2QugPaJUJU9jUXg3noiYrJSYy1TKxpCGuGfsXeuaEUuFHgaqUUxpdDt6DuMGyn6Lcuo4kR6H3DQAEawiqo4gyq3c",
  "key15": "3xXkDrJoNzAj8figTGcBnGtF9JNu8fi818cia4818cfyo78bs7yRnstbTggvvzt2zEPERVQjTZorJBHXRsshSSTx",
  "key16": "izibpQDdb9B7F1NA5rddH2ZEEN3KVTH2PHj5EfQMpNoYjUFT3WF8wrMLcHkgcGiX83Cuq7umPJrpeMk23HiX6LB",
  "key17": "4Rt3ofLnFTcBmPxxQ2b6HcAM4QPrchQpEYg3Hb2htvXZsTT8aer2iobxogP2CUfmUiNboVfwxyH9DzZwVfbM3VF1",
  "key18": "5CppFDeiRV1KSggLSrHmndwKQitWHfnwvidZS1b5ix4HKM3n5CRitkoFewFsC1W9kHaydpJ8TqFZeRZj5aB3RSv8",
  "key19": "F7hUjdJkBuyTtKRQzPBrZ4DQ7F6noQZetusWH51KkFao5b63kr7t5CZioW8h5QocNP1FXWNTynYRioM6spoNmyM",
  "key20": "3xWkVBkCGowUywfxs6jhDYCWcxfkcHC44XYDaxMxA4UrLo29215phxjkkjKav7cqmKDpG3KsPPmdM1ZDk73sViYm",
  "key21": "AHGEs6KP4q3JV7mcW1ga1Y7PUuG8DYhHvnveZReZB33MypFyy7gtSowcK49RaAYuWYtGoiGU3gghLwRJXnfzukR",
  "key22": "4m5A4QoRggyrFSCNNM2xvMMNnmijy59ivvFqcZvvGZq8RAkAnKwoWqwqLSMogYKZ4CkZ8RwYTcLmoUCANLw1o3Bf",
  "key23": "2sdsi7jGHbpDTugeDcnGDvEFu3yyeszKZhFVAQAiyXkXNUWWG7XrrFExUJHEkyR9giwp8XCbxnjfEL39cpFVqz7J",
  "key24": "2PJbhjGBUZgpqv9DVWjYRmxg7NYAo7ZPBjYpz5Ldo6pCVu6bW3GYHZH2nspeXwoNEvdq2B9heGYrvnGFyyKnBuEE",
  "key25": "3LqCYrK5X5oEQJ8uRL5FzHmf4zTs1UvaShR43FwfDx3bwW85sKn6cGnx89zTjehDiXMSMriEcC1Z7NebRWEn33iZ",
  "key26": "4RoF9szWFBhrz2wyysBFhF8c7qT8C7LFVoB4HKHgXBSQT8aHrxw2TRBqTR8TYBsE9GufE4UH6yfuSfZHc3b38z1U"
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
