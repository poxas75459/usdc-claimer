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
    "5Nx5hbvsaEgdeYuwsUm6h19fvwNrv95tYNJrKkTabgwGtRTmWu5t9kGs6gnvws6ERf16Y9ytjUSNnKccxtzLgENV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YwYukp6fyAhe1gfGhTy6NzTWw3w1m4frPhsReUdqYRqJ9wdLAbz12JKxgXNyksCZsf2GDVzmKJtPpgYbygHTyXU",
  "key1": "4CboVHKjYQscVizE6Boj1c8zAm1SLdYuJQW5414xQBN8uk3g7qVqCFG9aZCYF5UPfYWJo1gZBfskWvzkMTSocr92",
  "key2": "JYhTypVezX7BKbA7fGqxcTeCJ1cLuLWqk6sW1Wrn5JQCKn3CtHFBfTvHj6aKKdBR8duMD6oAo6ArBbMKYiiLhHG",
  "key3": "3em9YgEWaDwMyphnAZozBHPw5cPM9G3XRX84C6mzYrMAGA1aiqZrehjEwTDWofAv58NUyVJ2FXDMvjRcBYkvCtEe",
  "key4": "5LhNhG3d3DQ4qG9UKm9KcJr5FRXXzqWwNpYxkJwkaFBummU77H5ypwR1AYkqinDMcsTTCzyZd6o96fTvgXcDzut1",
  "key5": "5V43Mp96n2pxJMmjpcGtfXHVgVkhC2yC9nKuAkjp8hJ8igZS8jCWpAqpbmJ12LTdDwTuSVVvgr5J2nCRGxZ27tGD",
  "key6": "5MN9CyxL7iE48QtU8SAD9nXS3W1qJ6rmVP3WytMfpQCJkMaC9efWRQodBK76aUP8yoWU79ZcRbDpPmPAPpmPwvc2",
  "key7": "2jfAXkC3DUi98zwBXurnr7ZELWcq7UXipZexsWhrZAhYmSyd2JBEoDda5MWqwW4hpLyNy6GBx4UXNW3Ed81jfWwt",
  "key8": "3YDFEaUDNkhV3mnZJ1WR56zhhGLuTKXbAsQEyeD5rroRni3U8Ts1uvFC96So8Tv7NtqhVFACCDA2MBnwX7Q1Kroh",
  "key9": "3ocszWqgCubfRnB9yS8jMf7ka7nxn9SJctJYjsnav6W5qk5rrj84KksZshqmgboXGFHEuK159NEAGt2MXBrS4h7x",
  "key10": "4kqYJvsfdU1YZp55HVkEVBjWD2MY4Q1fyMHSWCUzdcuvfN4HXM6UzwnAc8Kngg27mrRktCSXZsoY57LH8kfxnjZz",
  "key11": "5W1wxLfQmmMwyP4vDSKeVZw9oTxYq5RuswjvzFEafMkSYjoqkSKho6NCiqzpgdGQ8aG9vZmsEdWZfsj8gD3YJ6Wa",
  "key12": "4B4pXTTH7M7QuBWqxycxnJ2rnYaQ9fWQjm6ztpj49PahTkCANe2BJyHCM98rqBYBdbgRPnNj8eCdcCvUQn6NawMP",
  "key13": "5c6k1Aq4wBHTfx3NMJJPnzPzB4z8jCJfV4ogTr5iGsVDfphuRAQi1Z8uTYQjvArLfzVnFyPWvX7TpuXKAHzqYBFi",
  "key14": "xcFhQ9mQnBKLcDfcWfcHEgb9jPG8xVCNYWJtsg4H4iXwZC3X24iCVvdLZ2WSDzpTZG6rjYa1syodyxLTnHj7fJ2",
  "key15": "22HHbMdSx7rrWVZqzRJAbvNXjPAS7pTUcHAKTV43FCPrJRZaAAmt81CD8ohyZdUqtdymAtdzJbLDr3QX5D49HnEn",
  "key16": "G3Tjktox4QQRwUWNuMArPxEkqyYNqwzftNsbnxMLQC4fBbZMBhWTJZiizdFPnHzNJuwLmXwwNn6GYC42WTiJsnb",
  "key17": "5Zd1xMRC6tyvrWsTW6FXVJsKx53YdrLvf4uLxhJTbkfSDMQiszCMP7ZhajtPDRhD437u15cBuNouYqUf7zhUh81P",
  "key18": "4cQ9fHNr7q38Tc3tK5yzankyp4u2ATKvdTquQ4bmy7D97wXRSCv2ZsKcDkFTVZ7Kq7zx4F31YCc88hDYs7bWjmeh",
  "key19": "2svNq6HMWmmc2aZDB91DHpj4qQYaTgRcmr6fdh3uQn1MiM87C1G4c4LZJyvicsBuggJARuTk9rmdKQ4Ws4DuAuWd",
  "key20": "451ZuoJP2uFuGVDwjbXABM83WZcFhwnk8ErdnFNW9AfZupFYMcUdSAXU5zgBagf851oAng79UhvUYZngHihSo9Hv",
  "key21": "63M29pZghXYc8vyw1RPmigPHRk96piAUoAz7d7si4VURHg6GHdPnWCEsapLufctj4Z3XAYWzTCTaknhxjyVeB9hg",
  "key22": "4vSkvjKXC6HyRQW3zztjiWoiR8i7aj4GdXmiyDZMt4ZByJggjcN7CzyQY1ZuTvrFFmKbfxCdRYbbu1h5mdMCW2kF",
  "key23": "3WuSUW5eg6cJS4Z8CQ2PAuSFSXpvQ2DsnEkvVLKDjr2itHrYDFJoCvEq4qCWRNte59XBHCfkUrteBMV56AUcCgyU",
  "key24": "2LmvTBbUu7oXStFDn3TsYTxeqp7Y9rgXCLQ8eDqzzhLe4NoudpXgBRNBMWzaJR5yHasvduni1saua7dMMwiPLESh",
  "key25": "yTEYZxZJ6cSmj4YCqrEqqST2svtHLfXqpk51NCZXTnEAeHkUD1vf1LSKo8G8Y7L7nGP5yWrR66unEPBYNqfc8zG",
  "key26": "gnMzsdnT4B8Tv735bFYe8o3X4XYxwwCiZihksAE44SYk7JZWVF9VPBbbPDRiC7CNYR2fLCbLP4X2jQeWvxdnE5M",
  "key27": "2qfr5sgNT94kLFdWiK5aiNmnUUxYCDe8wqf3i2yKiRuiH3d2UcMjLuF5rVayc8Gejjr8CEPTYqWokL7YcXc4eygW",
  "key28": "3XFDVHKQWYNa4599G3MvYTxW6PsR6J5HHsgSgFjKBe464XkF8Foefkuw68YTjPxC5Q2CVuiYCQMLHDriREkKWJuP",
  "key29": "5AkbQWhPbNGsuAKf1R9CEvUosKZctUCJJsqqFhhurMBXktHqi12pRm5x53XuJBZzaTyryc64Mdg6CobmekCGefTq"
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
