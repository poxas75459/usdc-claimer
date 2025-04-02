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
    "2LGW6sJZQ3r3NB328vJhFNgdeBAixbup6TW3tnAbNYUgwyWHxjZ1MC4KAxX4mwsWHCTAzoFszLgnFtt65yBSXzRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tH7ugxEq7ZMp5zK4nCQYjYJXNHatcxz6XNbVag3jff67egWTj4UtoyXR2LgQZUFJ7AqjJCdd4xdZvieBh9C6Jx4",
  "key1": "1295gszrr7QE5jq3gL3umAHtbkdanGQfCHTmc6RL8JUcogX5w9fBrXQPF27tWa45oFtxEiWxSMNCgmFrv32r5Shh",
  "key2": "VviDsBzNpLZEUjJHzrk3yh6ft1EGrDEDugivWmB3yWuK1jHxHCX4q6HFkzQu2mbLgkuYQ89UXCaFhtDzVfeJtqT",
  "key3": "2B8jrX3di2XJ51xBzuvAnqN9PQAi2STmc7T7qFah4ZNLaDHh3wXmMryd2VnwpTg4dd1rcV2VRL89iztr5hSLEwst",
  "key4": "2KXyHK4fxyJFRSkRCm7j9RahKMRkAMPG2FCjyGb7HwDW1SGzeF12Cfdn1knJEZB7VeuHwsdWFziTuxDT6ti59Abp",
  "key5": "3E2KshCaSwbNzPjnxyXzuYRuK8xz4r3SWjUgjhR3uh6hQNEdrzzJU6xS6poGTLSjfkFT8XncXVGsT36MSBNCUf6C",
  "key6": "4nvvWmWrff3ZVjfieKSR38Mb7aEPubE4mN8cHZRSETS9gQhtLwyLKWo7juCNWxATyYG37eZtdMM7iuEhjrTJ8oGX",
  "key7": "5vCp3gCpukjEgNg9zLK6U4soMHyZxCndEUTWyN6D3YYTFUGvzixu5ZkRjh2yQAdTXym4TEcvwZfx7rFNZwuXuhUj",
  "key8": "PuuGuY3tcAmDXGieK7dpjH6myg1Z3Sz5Yk348fVoDFXxXAUddvRLtRmm94ra8QAKegVh9n7RZCycfZgbRy82aMX",
  "key9": "6LBedp3PHpN5zzisHMJPBcLkmMDDYdb3Hu4wCr5rNZrVLiozq3rDfeEbjZmSRLLhwEXEHnWkuYxNHYUaTS1WG3W",
  "key10": "3ThiKufEd9ybo9rhPd3CsBRSPEo3uvpVmR4xDEX51F4KtEqpiieEXrUze2dBJPDgSsdCyiqgrfTJM7ioVt1WwZfA",
  "key11": "2DDnC5Wf82NF3YEXT3u72RxHPLvSwRdtRdRoNcnxt59CHdb53dDqgvRWsBwkxdh8KyspJDMHVxzCU3iiMTHnmbuo",
  "key12": "2YCNwmZnPHYheoamAPsPS9F5UXgVfdcx32gRcuM5ZaAHaErdWBKn3y9Zfm3WwqntHy1ELsj8CfrjmcCSqvsxPAwR",
  "key13": "5TXRH1V7qqUhPvkGbZ5tkvyDbsuKZBrfPt6mbmvbkri1U3qgtm2yoLP3AX62QMpnuG4dEpn9E4UN8k9GgSHpxXHX",
  "key14": "2tsLUbJGgfRdiTRdHXvEQ7k1bs3Fn3Ac4PaW1vmWPbSzn6QzGRSBfUCY8fJbDJf5FZqT1BuAe8UYxZUnGibKVKcu",
  "key15": "5REpVsfX85FNmJxchnkP4rv6cZR7hab4opRt9ypD4LeAK8er4rsyLAtppZmFAgkLBjo55K3SDVZJNShN7F3avUat",
  "key16": "5Cjqwu9nzZZeXbg2abAbUh9j1EUF6emppazobqdgDhs6TgX2XViF5jszq1oL1NKsnPiSA2F7ffieJxEiS3EV6f46",
  "key17": "3SWHqk4uqf59Hgg8MmWybdufHs5fcainL5s5vA4yiExBm4kV8NUibzd5YgQLohdWvNiyt5BCijw17E4bGxH1d7ot",
  "key18": "YUUMjwBAdyr1hrzrdCiFSyjvKBCvKLRZMvM8BkeNQU9jabQX3MgQGWqMRwiLT4CtcKpUmR2SjnbEpNdn3jiKUJ8",
  "key19": "4Vwjz52gSsMxYvVvYC3rgtCHigNbZ8F62bR4kLuZwW6co3comRex2c91c1Y1oyKJAY4U6zvwnSveL6vga5nN9dsK",
  "key20": "5dRDEcU8TZgUDuiqXhx3NnkbxfRhNaWoQPgS8JLgQA9ZUNmnNVTSmDANYJDepazQVZdiqFdvQjimpSHqGVjaJwpq",
  "key21": "616NqUs5TKZaodxAgkxN6fGscWwH4CUd6J8xXuxNcZ4mfmXD4RDkQjxS4R1zwYuDJ8NtwGLPDvtKsLYcGZweCfH5",
  "key22": "4J2V6SwFBYswUqrReEXZQVYbsGyh2YWGsMEM47PoZo79VnHfXoyPzBsyNZYWCjVqNRuUgHYCe7hKi2wYaYeAmevi",
  "key23": "4qDpDEkSUxVmFVubAxtqYNmNFZT3g8Zv1oFXA3Zzm9e2cFdBi7NARpcPWShQKfy11NTZ894XPzXokgj2hZF8Qdnb",
  "key24": "2gdP75p4WcaVPN7ahfUhFgRfiPqfi51TPQFqTojCW5fNTrXS8PPqBqFzKi3JQbjvE2gMhqzY8VLqiikAnG51hCKo",
  "key25": "5TJE4mPCsVpUR6sLkPvWsfg6TE7TB7uRMwU195HtzcJwhAvTWCBqM94LMmrRsSj5sswjrjryaZ9rCCQMDwfbjnzp",
  "key26": "2htiQEXs2B5xwDd2mNZZjVM1vmDt73enqziEihoWDj8ejnSUiWWL9iDdvUowC5rhn4QLyc47MzD3ZoTHyvpwAsJQ",
  "key27": "2UdHLDg1eYxPb3MLeMeTdj9vZrQkL7vUHoEZfXVhR2aPPBQfPqCXtRxiaKCfgUbja9pWPNVHzxAgi5frAybwZxn6"
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
