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
    "2wFrWJxU32bibeQp6SHFmyiu5q1cN2dnRuZ5WmwgNf5d3vfUiPY3KJQ2XJRwCYVtFNQgw3UeuVe4pZEpzyEHaAjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YS4fHY6Dwq8r71mqAmQPx8PGXZWJBZqtpC3LjswhYGgqh27CsdwrXbKS3L2UJ7sY6JpDDVg1YjvnLNGJaBTpYkG",
  "key1": "qXqJiMDgrQKsncbCj2A6HSRfafWo3KdnhpxE49kagbPkQwNpMHD8SehbfS2zmuKFQrpoc19KThj5EThQqmLCAan",
  "key2": "4cF63XJoF7aawDzerFjcicRUKUHxZu6XWFtwdQev8Tq6eVKdQoQ9L4MBpNs8Dnak8P4fbdt4NVVSuDKPToNXdsUZ",
  "key3": "3j7v3r9VecGUyDhzHKj9CUwYSnMKev1ouYfxYFhhNpN5CAkVnv4XyVLAWWGFqTQKwkhJ48JBKVPZmHRVnsjTZNVp",
  "key4": "YXbnCyXrWBPuZB3zyi3P4x8C3cX6h4GHJtrRbrXw9Ser2gQmyY2fubiYERMeZd5UjtMacXaYpsh4VdkJ7ivTqFn",
  "key5": "5YNqUPX83pEJHTdjLdj4QsG33u1XH718CsAdHcLo3NhNdVz8NYhWjqmmDtq3ERo9r8qaLrybhmBDYg2NFbebkkMt",
  "key6": "4kyQCGqyMffrBevEsaV6WLKV4wEJX18jYdxnXWrkdpccBm8bvx2UCHdUecyaSZRujhRAd1a1jggUHYBEY47qYgC8",
  "key7": "35zg339sNNGKBvNFpq2o7APbDUJEmo58Hrha95kfb9vbnFMX7C6A7L3gMcnwaJUi7ojTfStLKkGkYag4HjSUbP4T",
  "key8": "2tdLZ5RmKacTBqjmuw9X57oZJFWeq59KbRevivqePoAyZoysyXcXw1SoTTyQ7puaHUF6myujooD7DF4RNGJR3tWn",
  "key9": "5oTAKfG9eNxzp1KHsSa5Hdsm8vBRRgkMMzpWdpcvG8msdYegT7oqLefnqkHeoT2qkUHwAvtwgwfZdxDuTjWxYDTH",
  "key10": "dBA4QunuAv8T3ktyaPed14MAzpzS1McSwT7R4nSZEpuTvU3cHgZaBqPBd3CvRaRTDWXQLRvmduXnmKW37smNGxV",
  "key11": "5sNRfduhAkS8D1X7mHqyHvKQxYGPE5QjXk4tJyCmudgSCB8WYnWQMY66e86YEm9ixjuCwTQZqrP95BEuwJAAp8CA",
  "key12": "5uACuBBC2V6M2zPajvCyoQfNHgmW9PkYyH419RQbtxCsvsSbi1KaktskquN5xBvx2tMX2vNz3yMV7yonZkS6GNM7",
  "key13": "5s14y1uBkHZPZfDih21RovfgvEfphBqMb5yZkFSWSYFrrdpWUjxKXy1q4iK9KLcMtm15x8hARYFjDjYqVucqGY8K",
  "key14": "5FDh41QP4ZZeL9sizk4pBKM5i5KdrXfM56hG1kTkNnbkAovVwtvXf5KtA5xqCzqzZhgQkuyETk1y93vVc1qS6bA5",
  "key15": "2NDHn5ndB6ZR2CWh6r4Fhn22Kz4rhLfu7NY8GrJ8uYhraUhu6MeaMcmxskbmmGXojLdoz67Dif1qRY1QP46d5fPA",
  "key16": "5Yzdzpd8bWGThLfhKEBRj6XCcGnpxa7WZhfLCCvLB61RNLExHHc2umTTAnKXriQRqwfgReRjNV6ervoTokeZdKFD",
  "key17": "3HHBFncBSfCVQzzfx23pqvsdTCBVzddW6BCV7tiXYH45SUqf3Q2jbKYFMrJdwEsyFJEydMGR7J2StXMX5jiAS5uC",
  "key18": "4Bf8knnDTZvyJDf4i4otFBWvNbNxh56mbBLWUP86zD3v2JzHe7LCjguNQjp5aLoZ1CpFrdZ7QKpULjWcxDzkLcqf",
  "key19": "4j5AgjAAe59B84B1CM8EEAReQGBpaEDirsgQE3u5jWviRXmVUSQ51i6Pwe2Ffdw7aEU8j11zRMtBhXozamsnaEwZ",
  "key20": "4NiRHdYQrvV3Cq8Z6W6Xg1omWcC2PPyJmZGK1owwLRsz2ar9bRs6KgexYwMcwNCuKPzd8SgUtCjbBu1MzpuGBNVA",
  "key21": "56qvdszuTqrZTWM4gF5JWpzCSs92VXg1oWs8zjRF2pfGsWE9UgfcnoJnt2dyxdLn1nWHahTqNKGCfqkkf6ommaDu",
  "key22": "3A8FxiT3piX3Rx77ruhZgvsSuWXqEW3pcYZw6ZYCgimmRBr6p5A6wWTAarVH2oYWXCN55Vf8dLtiVE1wnuod2gQf",
  "key23": "t2PxYmEbUYZthXWjWnAQv6mek75SbtGKT7So4zqzqyRv1buRxH14gGj4XdkWWvep3AoStV5wTNtnGiXriNnQWzV",
  "key24": "2hYtq8E1EXwkgAcR3euGY7RoeWwiRgdMYtUPEcFQ4itVJRHjDRZc6v69oyNYqfufvtWva2zfGjjgeBGacXxnsf88",
  "key25": "3JMQWh7pQ4WAwqx3LPHZU13H9n8XRonZHwiYqf55pDsi3TxfjRNJiLwH91sGwVvgEAsqD9RF1sFsGRbHNzbwZGq6",
  "key26": "4wvvysJmRoDdzdLpApbaZfSQBbmS6URq56yJVbGpULemRW9PMxodLSfAgzZt53ccZjfLndGneSveMokH7xRjg18y",
  "key27": "2mEEayJi8A5x3PDrfn5guDV1Gq6uhjs81EwE26ouND3JyddXytuWSHmEVfxGvNCkArU65tyL1e1edLzSCvNhwgag",
  "key28": "4LftBffZvSxypD1sB8K6qjM4BvXA7acoWU91bubPTx88AocFe2FuFhUd4WazdEjRL1SFnekgrQ8KqCCVmhLPnZLe"
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
