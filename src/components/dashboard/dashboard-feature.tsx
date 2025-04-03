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
    "4yrH3BDpVi55n7Z5QwZuLXuskDAmsjJSAn1knV9U1WH3wtX5NnTgA4Ah9kuLwrJMV3ATystS5kQJccrumHYaGocp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHwByc6VGgKFpjTfmq1njV9qFY8imqqUEbEPDwCEBvoNfpq5eRHuvvbUUJUXiJc68ydzffis1PbnsECYfZrAzPV",
  "key1": "ejbXNAB9qWaa6dNgpjCa8DZbxwD7xyxoZfeMa7ufhdXG3qU68YLuG6t9rPsbfzzoABr1XY2yK5AJBXus4v9epAQ",
  "key2": "4L7EV8Ne4nJXVLo4HmF8ys8sZpBqJCkdR47mFiGTe9YJnbjPjtoozj3VvKXVFR9mMCEL4wsB4txWDHQPthRSW7xp",
  "key3": "KhgGXxMHuXtjM28Ldm3a8XfP7SUERPFi4CvRf5snfyNkztrcCSAbgcYdKpuibMtfDzTooAuF7RgNRqvauYmcuaP",
  "key4": "2YYXm41yLeAgQwromZJM3x27kRwbm4EnJaPmeFzRYo4YuiC3tqpWLCuJx4VQ8LmSFUpkdSb7KVh8Pj6NNFHNWEwJ",
  "key5": "3cDJogeW3kvdoeunj5WVmTBbSWvV78TtQQ31kyQCBrz86SVeRyGcZf31NE1RcPRSeFF1Kz9pqMnVQAHBdmaXUVJa",
  "key6": "2A9bpagQuC45mC7oFiiqQshwsK6UqP1u7YF6sejthQXNpCvDergHuV1JATF73pL38V4DDCSrj1LpKb4mVZiz4orq",
  "key7": "2jLLoKRCTEyGHtVQ6oCKHWmhrE2mTvXTPRqbGR9cq6nUhhu2QRZwCPXWFbjM5HtA5sgauTSm36QcFiiACYYtPntF",
  "key8": "4dP9bLXVfuoPvn44a4WQHD2xz4pr5RVUQGdY1p7zehtpp3uPPfXUe2HKcGfBGtqa3FdKpZc1nPoishzhSS1ANMGn",
  "key9": "5MvLQxqhfPF8mjjJB1hgzQFxjTTMTWMdazj766Qpkxn1XmhduAeoZDL9Sjhu98Fds24p21Q1Gts7XuuYpLwqagvr",
  "key10": "63eJncw3B3t4VuvVj94P3SrySARpnKPxqomVqmCH9myaQPDhjc8H4y3JEJNBNg7Szq84c9cWRJd2aoSDJ1aoMhrt",
  "key11": "5duBHVpVzMKZns8WM1e6rASCzqf5xLh1YeUux83xr3XRTTNQd4HUjSW7C3Y9nEJ5WSPJwtDMcdhbpBMyrzGCSU7W",
  "key12": "4KDFpfRYizKRa38k388xpqjPwPfyBFbJtuPea8SPUbEBWFZbcbj1wBQCv1VnpqfWyFXiqcNPTMbTKgN9vDLqZExq",
  "key13": "23CCQxgniCdc3egnuzZ2Jix16V2AX1wyBDTjZCWY4asNASPCrFBGGH8cNVSer1bCUNMatCrECGWAbTDuHPkcfPvs",
  "key14": "27GQpTwnkhV38ynuvmN2tkFBKQKKSCEtmEMg6jZ2a6wc9wtE3eaSXeXH5ue5GahhzcHuBkQUmKhKNGTPvRxnDTs6",
  "key15": "4Su5uJHxkHqEYG4nmjSDRPCE25mWb7DjmmEAsPNskBDQaMJNguDr8BnyhivKbspUXMxiUzZEfqjiaDdZArrYYhu1",
  "key16": "4d1Vfh7NKEuKxCa8YRM9GaoMk9m6iSGqVnVD73neSoe8DaziGotPD98kVV92bnjfiETudnGuVEFyNwsZLZ7WjtgK",
  "key17": "3KnV8ANEF2kDfviotdcnLPB43pXJ56EMXBcTA5LoSv8ayrfYCaCoSf5pSe8Y4zMgc1aqtrqkx5Em5SYSNgkfV6Ss",
  "key18": "5vDAgdVGcbDiteFZ4XJ9a2vBhCWgShTmsaW5iSaCvcxXm2fHFjGdVSKDwkNzJpD6E49q3Dmd4JiPksX38pZYJJ3f",
  "key19": "3pbayaUt9cAoDWHNhF8jG3qsRCp2UF1HqB3DZnmAtMR31RWB6DAPzKfnXCwVL6mLNApw7gMVSgz8kNq8U2VLP4dD",
  "key20": "2DT6jaoYYKPfzXv6BgJbXq2HAdvo4HUcwwhAaPLHLxhRwGC5zPZ9kxHpa3aj8o5dqoriB7AXMntobiriRWaKjf28",
  "key21": "67jSNAzbLJTaWWMVwque9HSCX6FmukHqWB7c6TxWjiUpHRb6AyKXHpSL5cNbGijhAMHo3YbTbM3h8g7HDiYTrMwn",
  "key22": "4AUZAcgWFgfqGBicfH62exHKnXVAYES2KJFq2hQH9LdBPmMKEaS1GcpqQoDERTE4UteJKSEkB2EnwuY2U5upLZry",
  "key23": "26VTHaHdjzbGXeWLat56jKZikn84Yg4kexRkE32qFAZ53tMZJXj94XdcQYeRnYUX7nDNbbffy4Z9GzAhJmZNg5Lr",
  "key24": "v88HUWUrHbS683SiHgoUWYgCAULHBV3wN8GbrTmegdQ7LfEpQw5CEeeuZB5CkHiDmQi4ipvU4EZANenvKvSpaMw",
  "key25": "jFFbqLuXZLkhdJuikdwxnPoNc8HrCMsZ5PYQKPDioxKA7BNXcLDjCzzRPKxZ1CeEWpMG2nby8yYP5C9FqLe39NZ",
  "key26": "4YH76UXDFXEC7e6i2KKwUdkztCDmoyaQD9oABtvVytXhpmny2Hv6wXYd9dyJdeH9tNBKsutLyRgAw6BZoq292Hhh",
  "key27": "QLUjAFkczQV2Ziuxrn3fcFGFjfgukPqWd8xBieQ9gJZhryNZWFF4QyB1HcQAqbt9PPCcM9Ri5ngSXY7UUoukF6d"
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
