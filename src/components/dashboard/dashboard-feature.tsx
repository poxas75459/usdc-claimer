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
    "5yLxsD6JA7hAT3v1iRZ9vTDrLUAwUVNmeAyk2rVLjeMy5W7TgZnC1mp8TQiy64FAc6FA82J3n8MC6WCZYmQVoTM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mju77SYcwjnnBqSkWpstMKPgts4wjnmDzbPQE27wD6MWzk9tsgTbWKkNR9XNAXtwEppmjoJSADZPJVBrn1uCzdB",
  "key1": "UstkLvJT27sEFM88Y5DB9UDerFPPRcuU93HLKkNsd8uG4Qg7vsZNBTAbK6UovCm1roZysbVj7qsm9Bc1rTEdFpR",
  "key2": "4xbNRDBcPAQ2gfibx8zuqe7PwbooZ8SmuL6k1bVg8xeRz3NUgqaf1cEpFPvLqo66egPTKXH3A8ysQGu4BM7GqwD5",
  "key3": "4bwzCLwVLFh6KGAWmxRdLMmYXFB63n9bVFuLypHC77SsvscH1weNsyWsvgpBDxYaNHa6ze69auAvGBC6LVqDCes7",
  "key4": "4krZeqbu7qMYmLUUxymkUeLdV7udEeAnyjVUfn9hd3FnRh6mm3ZdsWEac4s8jwpMYYRBVnYhUy2xDMBhy78Vk5Bb",
  "key5": "2nKHnXnWddepLntFRhb8ay5XpsRzbewTD1WUAmvX9ELPvkbMBjKtkfg6uAQ783cEkRmmPtU4VbhLjAyHLeM1K9om",
  "key6": "KuwJaEnfnjQS5UJRSh7wsFJP7TvScmDVF4j5EharujLFYQt7mij6c2vQFSw3szxbxmvB6i8Dmf2wX9XCWB2122Y",
  "key7": "2K9aARX9L48DiMbrh3vweEHA9bGDqSy5MtvPbUE5X1qX32p6hw1B5z5D4asfSpovaMX15NF9QAsd4prpQ8J8jNQe",
  "key8": "4RicRMdcYy2e1shReq2NdgcQDzF3vLLW9pDw78WVC3oadXsPKZWEJFseZtpURFRdVYq3T9u1dkgdtDj9wzJ96G6T",
  "key9": "ov9At4cic2ee8FDasUX4D5QnSdJYhJmtiK3HBsT2iSCtuEn9S6iqdt1kWJtdi8axde6udWpvNKaspGBfqPsYb5L",
  "key10": "eSK2cyKUjiMqQ8F5929LUrDuDsgV7KESR5y6ALsErcKmY23oBpupVzkXGK1ddjUTDi3dM63s1N5aMPbL15GmDvX",
  "key11": "vBbdYxd6hH8DeNN4Tmfdyuva6P5GAvaxF74BfA8sqaJBYeMke8iWTaxnHAY3ch6ZnphLTn4xuWFHFZmef712NRf",
  "key12": "2SA1hvs8yXCAkXdWvhbM9s3zL5By5u4dRsy1ZPNw8BmuUTcJhoAGkN4eCuN1gcgSUkDFgMFh5hmjY15rChLJuxvq",
  "key13": "4ncysKGV99erQUfJx3YuogXZ9agmmwA7yYa7zywViK3y5dUFWnyU1RTb4HJ9p6gySJpY1pLHhiVsGPG2ACVTfCGq",
  "key14": "5zg6zj4Me1KCvSWXRKmn1vTuQb6SqmXacW4f6jCuGYcBzJT4XYhpwaxVGewL3j9kwaczBcHUGpA4jdwhF3Jhu2a2",
  "key15": "2TRqpM1wuq8fDBooPwEtpwTuhHDRcHvPps8FoBTEwaodjq4dLpUgtJ2c7Jb5aA1vGHkgubRtLPBUk5dXQqJwsqiW",
  "key16": "5EMRSiwFZQAVFouBXogZjudBVpmX51tFugKJ3ZZLhpw9bRjVKA7te8QjnZPq9BLDSrnkGvjKwnkaLnMUvwgMMKx5",
  "key17": "55k4JJ39CjXzgvPVAgXo23z3xhuj5RAA6iXsGqXEpuuEYHZvPVv29PPuFkjQuFxs4wq3mSXtdRNeDSvnrCWUuDWE",
  "key18": "4UmqraUjg5uPimRxkWGupFvkG5LccNSmwt6d2VNw2BhENqDaQWa9pDVjqfFaMqLzzsGCuvMwMqQKfvWst4pp1ZBD",
  "key19": "28112vNhS4pE57Jn448bK5EeQKzppfBUEQwHBuRAtRmD3gvi6qkU71JKwhbBDQyftvgEDquwtmeuN8s4XAQ5YisS",
  "key20": "3J1gBcAj42xUvhUDr7nZmxpUnbpBW3He7uuxD6MPKM4zeVNpvcdQoeX91FvfFpjydorpKY9ZNvZPqwrMFXV3RnA",
  "key21": "4zSsKcvR42VwawG2zM7sjyHA9cGGEKxBQg83DV8owYozrjxUDHHuiYpRKmeksvt9iaypDwBdF3gs65NeaH6QYQoV",
  "key22": "3uXTZRyPTRn9ivcMLbHcSDeLt4xpEnzRVvjL5dm896MuR73DWnTmwSpqeJqSsiMYKL14ww9sRy5HMzwMGTWTagGN",
  "key23": "2RsFkgkR3gChbA7wZ2iA8UCYLgPpmdMKTxbE6CeFJjgvSm6UoufM5TFB6p3MZMJp8zhv4AV3KHJ3o4wj4NCtwr6w",
  "key24": "5qYTWQ6SnNShWZ6bFU2zViY3DnxrHe1HztRMpStMx8hTWq8LDPz6DgnPR33v7xAhe5BsWjZKQx1Wcj2RoUY144fp",
  "key25": "ZX6PVF8hFuXAiuzkyme9XZFzf9AuZD4sfsPUiaYr3LjMpWXsrzgunAFiPDYHP5L9oj59cheDVR3tP2DVnmJcnYR",
  "key26": "4tHFkMC7nwLVtE6gFp2kZHWwMNbRCapLWCxH7817mQmm3neXhWYuwhBEmnZCSmibKVr3oWuYHMw5SqYmycNxQYjT",
  "key27": "UERguUuupV1AfS9M7qDLZKVK9vn65oYUVwWW6666n4K5um3Q2CpJVrejCuypnvwcAdScz5ZvBeXGXHekk34PZv3",
  "key28": "59hiF2KnAE3RvyRmHESwMmzeGhpNVB8Rui2M84BHZSvnDz3ynn1BvtobvLmmQMqAmXttDJmKExpXHVo2cGQzCUsU",
  "key29": "2LJpq9veuXXrkgvrphJXCPPdp1ubvkX4KnbWBJFKksFRUAC8xiWdZ8PGpbsY2AFg77AmijaD1bQ8rrzY2Fx56dBo",
  "key30": "zDHcmnfF5qqLAiv4nVfBvYmh47ac9muhwufA4gEAPgSXQA9V6xV57TedzyWB7bRD29bejBmw7vdMzj9iKc8FGvo"
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
