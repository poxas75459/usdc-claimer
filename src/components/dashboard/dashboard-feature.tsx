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
    "jf6tqUSfPMpbz45VSn8p5eJ7uFGLf1etGjPgYCRmBFUSv7wtpjt1o59DWTmcQUE1oVUtSLkdZm3HTsdBvZ3cfHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJtoc1nskMHtmNqGt43A27yRtn5n3C5ZK1Jobz4Q2b8JWgG1FdzWPS1GzDiVUhE3Gt8NYrY9VC7yYm4csU9uVTf",
  "key1": "4mN2frkqFkadhkg1XCMPYuduWRnvvFGTWV7cszjLzpJYHWnnuJ4aeoZ2KobPH65WWhE9JF8tJ3jXKQuhrjnJmEhk",
  "key2": "3t3n9Ga7JdxEuAUAgffwjQ4SxhbCf4ijhFt564dJEEuvZZjbG83uADAtxo6FVPRAKfRvPj1JJkJYqyJ8nBkZYEXH",
  "key3": "2fje3tXXHURcBb1ZS6Y2Wdt4n4tcyYarDXQphvV7i3LWXpMNmYVMPxFn6CAMC9yYpUyNnc9dLp2YJEgpwS19ZRp5",
  "key4": "2N9Ewdp7UTd28YJsn2tWRkRxgPm4pw3HtDQ1QoJxYRZVEDAPN2M1b12U9yodvAwoHFvYkHyzWd9xBK4EdbABJZEk",
  "key5": "5HAAJJr2bZmTB9tx9iWa3LLJ6bYyypT2vzp4o9BXGvWWDEDK3Fzvrmz3hg8w1N8pjQYN6LGEMf6EKFFbwTy7zyXg",
  "key6": "37YSmTzHn9D5GBeTvYvE1Rndph2zzLKxZtiLQ1HraUGUxP8qTjU8YtftrvwGnW9xpWYTmnZtF3seHvbEw3Mz5FFV",
  "key7": "4jdrsVpvuPwfPCeRX8uAjxYhknAdVs9VYgtpyZVyzWsYzHgAahxU2GaeL7tHtXAFUjDPufT84xwFohD4kWeiAecN",
  "key8": "4EXCdtiUbzLDtvfMwJxFPCs5XvhqHJmhQ5tUm5PJQxABPfD8MPGjg6BRrpaFiQuRSiNNfSztrnYX3ngd8AaA491C",
  "key9": "2SXEjyUkTX89xeZGBm4rML9iYeqTKeibW6V5oaJnWkFNjF8fbzKxYHjV1cBwMc5hUghrc11RHX92aujumScCQP1o",
  "key10": "3uLU4ojLu4cs2ZbYzw9zEWNQhmSvCvaZvgTzBy23WYnvTZ4MDMSoR4bBxfgnfuhBhhi2d3fKCBKj48gPce7fUyCB",
  "key11": "33KCHcdjkXPKg8MSTo4bC6sRQSaP1zceMj4Lnc7ig5NccL4BVnwGj8t4e3FrGkN7jBUT8VUA7beJi8AxFsBjqUxf",
  "key12": "pLNSQu7HCTDZgoCMMftwh8bXanv3hGQ1m4vuF2QZuytf8WxsAk69NcsuWuuM7boUxzw56n5w5zwp9XiNz9tvV1v",
  "key13": "4kWEhHQMDE27pstQopRvpUnr49orK42BnMYCSUpHonoKoDG1pSEu21hgsr5eEGxzjJuc9byD766pPQsWnghciXWP",
  "key14": "453GrpuuPrr8bbcbdzqQnGYxxJMVWwwypR95PqNLWTYkhpv3Uavrgt4wBfnK9xPSsDqdBwQRe2bHZ3DcQBkE7S9d",
  "key15": "phgsDgJSxAwMXC8RwwPH3Vg36yLHkMSt6nkQ28F3riCwmP9Bd2Q27Uv4hocg7wyTf6s4YBAgwoXKDz1F4EzNZcV",
  "key16": "4RT4DSi7q2zBtckVF6VxQyxsZD8qZZ236YGtAMijNqiCLQPDRxd8GJ6chGDWhTvtUpR2tMv6eGyYViv5SfLrZLVr",
  "key17": "cTCJomxiNWvbXmFZoHxEay14FrfU6GwBCyZ3isXDvvS4D9FESJ8VQ4NCdtMmoCAPdd9xqvKYgTg1gzkZNqB7uBn",
  "key18": "37FeF8Q1AWUwYbHU1N56KPZDrYw9s7HrzNRwjYYnqyjirjjqkuKUWBfC693R9q7s9Qs13bY9Z3trBJkEx8REfaEJ",
  "key19": "3iBZHgmvAs8uHQSUqNZMStSmgF4PxmNaqinSRApKnUMh4kSXTgXsqzD6nvHGENZ5GABSXbr3aFHYPV93iUCoUi6T",
  "key20": "3pka7CMyRkHo627TuBHfHqLvhuBXBMXoyr8fmfNwE2HFNpavGALQR4seNNuxW3Y5XanLNJcGBmxoajNDPcK8ThYA",
  "key21": "2Np6hESUhhTRbwTnBcn5KgegsgpTbvG3zJuQiBnGf48p1dzrZqDtHbYaivajZDjajV6N5MMCkG4eV8inu4wHQCR3",
  "key22": "3csPwnvcPPoK1tKDprjszv17H2YHvzdsMBJib35BT1iNH1msw1EB237axfd2F6T9RJexEX9fLLe4wH2oAiNSJNR1",
  "key23": "2tCUybTe423c8C82788H4tziPQ5E7NJ6UoXQpfSPahmxSrfxAvzFsg6uChLkossXxsnMbZVM6h3bAEy9fGs95eBj",
  "key24": "5hzYQ6fvPigRikTmGddGjvD5Vm6ZSEVT8L7WqxMDBE6m31vNQjVg2pGH14pQDupyEgQ8k5mtqD5Tob3GdU1CRWAZ",
  "key25": "3RqKrJHe8W7V7Ero2p5XtDkiaN6HmfgfT9HwDdc1WH4R3gDomnmKuVXMv9gMuDsajHjGDhs8sJt4NFsyvm1h3Uya",
  "key26": "3iWgYb6G4x2sJwER9RbHtXi6nEr1EdGqPSA4rKw4k6zYTmWHDc7469HEJc556gb5zLRbDzjT3GV4KjnhPQqwxACN"
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
