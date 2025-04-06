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
    "4y4PC7rLQwdqashjNXvyqMYpzFa1U1aUbzvu5np4JMFjXKJHCPrsDRSoCyjEQX4EFAAM2RT4sjWoaZJxt4mt4auv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGdtW9VnNnzUitRK1CMFEVDiokfFGGjehMQoKrTPkmYAMux8egDRKgXnArFz6HSr4XfBWo5XPUPC7mXVwvsjsEj",
  "key1": "5CA6PSLaT5hkwWqeBVuLszq78BJihiqaRzPbqoeCNPVxcPc1KHW68UU9o2MX3gn2Tjio9LcNzt4ZnNX6Lyo4LoDk",
  "key2": "5EptYqFE6xxeN36A6pZZqTok7tRhAJteAaY8jWKZkNp2Ly5R1Gpgq5YpEaR7YF5Si5ocgxZbdSnVvLGVNug1uKvS",
  "key3": "51bdtCUiNnXYgGPsjHHisi9j42aFJjY8ZXz7okWVQd2JNGshGUZnD4D1E7bVNNheuGhQWNzEAe2JDA1YV9GLZbfq",
  "key4": "2HvrBa86fcBoNkPmxtJwTgtn1RQrNN9Q8hmRW4Xn8YpprWodKmoKe8DHgJoa7Tj2rjH8th7jSz8bfdDBV2im5ock",
  "key5": "3DJFfrNyV5ALt6QfKtce9ZdoPcjgu3yzY3rdyie7KJyqCGWk5L7x3nkjvEjj6TcFLpMLfyikeB9AMpxxovLRUBgY",
  "key6": "4LShuycQJ9EozhAsMNiLnQaMvr8sDcbdq3twqBb4n3QnRBMptuXLeJWQHLHjzGu5wE5wxRmUMm5PB5Baq7Dtt9Qv",
  "key7": "2jatfDwH5kHZNW5oVHrhkJ1XwBVzSKADCFsUmqT5pRCqR2PN1Jt8oBRTGtQunPzf5BzbeVoZ9usw1YHvtGDxhRZV",
  "key8": "5jhLPuXVB587NftQDsgah14RGeCjYwiRRBRtK1wg474Fi2FDdtQyDpXaVPKxD8orWGsmcXhhR2LnHP5YszpmBCi",
  "key9": "52JTLeedwC3EhXrAoBU5BrYXMpz8sefKPcMoJbrvTd6CW4kh2Nit6SC4F9FqmqJGskpT64De29o8zLK1USxuQ7nw",
  "key10": "FHvSe6KknZJYgM9kAb2gWQxqcnNrVa9m8jBTd4oSpPgG6SAwUPki6dDuoveUHGhEimCL9Y3BbDQ82z7vjn1HiNJ",
  "key11": "Uncnc2kCb6FkY2T47163fCGC4JXdA9oVNG2JxMRPHboid79CdqtDSQUV2iacvRBfaaq3Z2t77zGRxciGdhDMRXs",
  "key12": "4bDyc98sxRwAgpBymH5KJBUW92LVbEFiuSb4XydjPEe7iBBF5ETwHoyCm93Eu2gN2348L7iXNzyepfBX8zEGCBoq",
  "key13": "1XYtYqfwCUtX62a1ARXPfGLKU6ksyqWSv7vZr36993yyo3EuTpc8iWHeCVHju4odkNP2TWAzXkBwPisaWcF7wku",
  "key14": "55Fh3tXq4XstVCw9oiPESMHU2QKUobskyBM4rrdKvDSWG8PhWRrB4ZhScqhhX2upuQ9gy9q1cnVAcL3EZjLmVTZM",
  "key15": "36fyLosmgk7eDbjmmyhDTCsYcz7vi7MFNc6VW1zc7xfaycPjo8QjZ9UKfCEPEprm5qukFniBFQLAou1XqAf3maN9",
  "key16": "4dS5SuyGST4XSx5PosoHKKHAeGSMLkwiz3t9ppqnZshUk4zLyPsgCfNebPcKaSm6mYivePnQLu7ZEgtkPPN2oNY4",
  "key17": "4WSMnhr6vSqsCmFfZSNMb6uArQ7whSFYRQqaE5NjF8AyxWVZVWJeadWsPGwj8cWSSYA7oJxKktW8GbTC2mzFhjGo",
  "key18": "2A9h2UwPikSSdty9nSYTvKMbxz7x7kAv2aFbFjK15z4Vf4tVoA4XT5HgjTE2QvYRsAPNVDeninsHn8NNoSzvV8a5",
  "key19": "we9p9FQLQotCzCpTv9o8aoQJaTGbiqdxGjFFhtWCRLTWGZGfvDyDabST8eu23FsJNvDVjs694P8LxwEgRWtXFe9",
  "key20": "2DZ2nPBvFEv4B9DCCxVRTfrMAFxJtRjkyCbWgD6twKzWfmWLrtzdWcNN984wzJ3MEEWQZG9CGFH6XSwzu9dqraKg",
  "key21": "3ww6tC85X7suwUB6cuw5DJrk94JnegohUKdZ3ctL3LAa55kgNTiscEeukm7YFvYyt1BN5ngJ8XVxhJ3DZmp3B24x",
  "key22": "5jC3uLqniBjpCxFhGu7r2tMdwt1VS9EMKQEMv1i1qQMESC5zSk6h3TzdMsS6jzerrNanwgYAVjiW6ajUG9F84fW4",
  "key23": "2QNQtAnqdtZD4D4kdGma5qERe5XQcxtGuKhhNXwTe9EL3nP3fVVX2D9ucePYP2RcZh2KeeN5Z1hxfbU8yS3hBSL4",
  "key24": "2BCL1iKAAoEYzYuXM5tnfqGAE3Zy9BanU5PZ1ZEK8wCrQtwSiMrvk2fvFcHgWqosGB6xv6QxfaDQu6Cp7qZXRouv",
  "key25": "36WFby95qnk2ugeJZvoqmfMEH26G6CX7F2Gk311LZyHYrHFk8AS1CseuxdgbU6E6LnnzdrCeZRcB6PnPqmjB7jiT",
  "key26": "2yC6PFwHcx5vGNLCZ26MJTVrzCW4ESGY7WPwLqfv2MW6ectNwhEqfL3YX7xEfuk4uLbQYxMCYzr9H682o5fhuTja"
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
