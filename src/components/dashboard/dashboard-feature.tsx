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
    "fpD9ubYAEvGC49sLLxUXpXvju7LZhhnnA6Ad4pARvDfBE9BuyT1gLYwHoBW7AAseVjUndt6S2SKT4Kz7jNZGqks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sN4EYubPosKfFF3TmgnekZknsymQJFtjCdPJrnFjrJo7RqvRVe1hWL1YkraYkTaAB2cGLdVqg6YxXqKSTkmJxYo",
  "key1": "TFqDY4ej8rpM1ZbqRtvpbErdbbfT5SmfWakX8wKC33svoYR2LNp3BES2bnasGqBgarPHQWjDnWVGBg1dmYVMt3J",
  "key2": "33c4PgRXRpLmrxhVaQXqaizXeX57vRm33gff2QxfbhuitezF6UHnRJcj8RmW1RgxSBaCsZVcVVeJEK1C78EeRVQa",
  "key3": "5zbbTr8hjZKHXAFHkEAeG4Bx5KJdGhHezFqqh5WbRrT6hUT91KN94PNB2qibQ5Aaw5mBmJJxC2aWRokUVyzroeSt",
  "key4": "5NsmEuqccHYaPHXCkddnwGtaUs2K4GM4jesqwedtakDjzthqG84TyJu1HQ415tKZvTAu9QJ5tBVQt8rKjVbCnXjh",
  "key5": "5Qkfg8BMU7dCg13JUF7NfegxRF6LZz8XgYtZT8o1uky4rSi2LxNoESPzXSfs3cff6LViKp4ZXy2SvJxWWExgHW7H",
  "key6": "zSyojazXrXx17csiGQ4P851aZBHwfDHwmW8ymC8n9YN6v8euC9wDc5y3ivKcxSUZUDrGQAXk3w7bYSRcdNuSN5b",
  "key7": "M8soUHvWeL6JNZFnZ8wD7rVwrF5ocdGQWXAauYs5Ps68AVVx3LxWvSLjBHnhMKe37ccxgTHCyUxxY8ut5ZcT7N6",
  "key8": "3FkR8rNJMNwaEKASfsuYwUS9eg7jnX2jpJkCufcRJrHXuZnxf1dBVmG1CC8Fkm2Xfi1GsX2UrrD1EfRezCaDYVRp",
  "key9": "4WZ82dv4AvQhUC8wDJLvJenBqMt3DjH9yKobgXLhieGZ8amkT9DZYevA8QqEKW97SVhD61bsyjuDJLr1pJE238BA",
  "key10": "47z599oZeeathmyfNUsKTpXYBHSfpMVEtSAbPGz8joXTjE3YniuSVaYQ2j7EQeWXucVXKVZqRiocYtDwaHBLw4c4",
  "key11": "5Mv8huKufRsUZvDAPMmsdXb3hF8BnPFNVcCoSZSX1WBAKtn6FV1VoCTNp1wG9Vx8pfhvDCZXDfP2zX6s8GtNnUNP",
  "key12": "2kmSf5qaWdQDaEvRaLHcdd7mbmgRxre9PEronpiTn58W3YoJXKByEcd5E7dQrDVzRUvRH94MzswhDEWDcXSQjQoi",
  "key13": "4DdwBuQMpZsYvwP2pCSnPf6Bh3QzyEaoRGuvWhbYnSXL4pptYJmwv5BEcrmQiFXhifmRgiMJykSdcn2YEusynaiv",
  "key14": "3DJ17xCAihbgyL3GsRG6rEaUeCcrCZC9mrMbpYxRM4gKUvrkz2nkriym5Uq3TgKFW8knqbGQPmRhUjPXiiq43UeD",
  "key15": "4HcEW1maFDy7L3urjLRV8gGMJq2HcuS5UX8DFcQUh4W1cWhX43tu9oKCrBtiqFEpnAo57HWgTxWYcAQbtBn84UaD",
  "key16": "3D6XrqvTGynPy82BTawWXTFTtK5JV23QCjNb648kVzPkDCNeLat1vV3PwnPFbRcbjPJBwEK5ryTQdvNijFHkaDxu",
  "key17": "89fBSm2zWqoi267LGCJC46v9U7D7py19zqmFiDzSZDWZvK2aDbJgAnjotATY6Br6cv4ow2Q3SknBYVd3EXRHFhh",
  "key18": "26jKXgoPYLRLf7dqPbzkaJXMyyQkzNkFBnaDUXRKfiWdQQaDrKLw8Jjzx8vbTuzZf5yHXX2Lm3yLSLnGVUzGJtAa",
  "key19": "5NzSshDAhmit3a4SnMmKo3XCwY53Mp7tDd1R4YcAuVnt5ZMTt1RtoNkCvMPaLrgoQxnpGNqVdeiGtAuryQCUvXch",
  "key20": "2wjimWN4uvo2uHv6XYvnLBg95boUps7G3sz644Yjreq1Rk9mEDzaPS4ywXghKrHjrtTAbc2KZdYiRdLespsdqbdB",
  "key21": "2HTugPMSeYTU9BEURfUTVQYvLEzY3wNbHaPRBDHa36dtPqJ967FuVhEfDdF3StKNT5UXQKGj3qtH1PCvvPNQmLs3",
  "key22": "3RFgRd5MXdEu2DG7D4Wrofhxz2pX3FKHk63CY3fAdQ6UwRE7dZVZn6n2VPbkdj6a9xpufmgw5e6Hb5wx4TtbxvYn",
  "key23": "5SYYMHSXwRDQysrnfK6QWk7pAGHHqxF251Lv9avAUD94cyBCEzQu9shs2iYQpT7mqgo8M1jpCKDmK8n7REHnxUDX",
  "key24": "3nF12dhRbMpmmjmazTiznpkPywyaGNUrAHjRePWhXWqyHaUm6SjtJUqkURUJ1ofWfm9JsXWrKLcZgYdCSib3yEx7",
  "key25": "6fq3tBiiEmtRTQ3E2wULb5HJnaTPpkKhdMbxMGJib5Dm8jBz4iTq3uuoxnP8RQNbpGRFFVjjFLDMxhzs2pJezCZ",
  "key26": "RLrNr18C9Vf2hbZ8ejx6Xqh2e2vH4rTnWufCVbGfAW3iz47jKDYeFddq3Ji2LRJTDB7ZKDUzBzGEPSxDACza3Lo",
  "key27": "32fWxPPU3T5scrQ4yzsicwn93qunJJSNJ6aDDLcykU4zjXtJdzmjxRV6spSeGtrHPR46D9uHDjo2jtnKFqrk84ZR",
  "key28": "225CgjbaHubkQwBJ4KsVegHzRuvjhGyLmNxWKZDDhzfB6H2LkQH9F26Ydtj54wC2ThEam1CeS965PUQWcKatTqT8",
  "key29": "adbDd852HJjUSb4g5NFQow1tx5GSqMoEdKNHpNzVWcr9tMMHfzQgihqpGW1T7gR8VHofLjFqFWpoW16tY7r9oxg",
  "key30": "3idR3PdEjTu5v2uYFDGHPs3UGwL4bv3YekEQCw6Y2sECPf2zCYqwaqudwh7vGXy2wQFpBoyijNXDCJFvcMSuXuAC",
  "key31": "4BNXcnCK9LkxmtZ9VLMGppzJ3piFK2XLvzRrdHqToLzdYDJNx7cDRVwbTGdYQYsjZwrii32mZafwjE6n1DqrzTF6"
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
