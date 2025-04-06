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
    "4AVYoke7bDyJuG29UADf6nyf5pFcVrrqgchJJg5nudqkBHNnWbe5DRTpzVpeK3EWnpDBDa6QNceFkFdSbVjNUkKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7AYBAiAX4qAjYL8oXs4DxTcH8K62feoofGWoBMUKbRn2yayw9PXQB2ZPYSddpMEgQJph5zsaqTkwRMaFc1rvQp",
  "key1": "2izThEGxWwxkkRh3TMgLKTE3dwFzPNWy17odya6N7basFsXXZWTCszYbuJFUALsBrpGEdUDGxiqGxHtvfCu51Aci",
  "key2": "vZPC1RsV6rpZei3moCMCNLdezzp3C7z3r8VSxzKLG7BppMUsn63BgcFNsJVesdLSv1JoA9PWTXWU8cf52R2EMaJ",
  "key3": "2u467kdvJn3ZkCs4Yqr5Epioz2KK9GNXBQSBF83wuXfFPW7CiNjiSYHgAqWSMSH2RuXh9Uk2y2XBUHdff9PWkr6p",
  "key4": "2SBF3u2XRNEPeeyoy1RAfeteusAjBADz3naiPqKU8KR6djpyJPVe4CaECKXRU5MyQ5wY9LHDsbV1yVkNLCQqRKCg",
  "key5": "4p55HHCSBs6LcQNLcTjLEvoQC7dNFZrq4stFUWi3tyXs81XuJNjC4NRLF8d9kZXhqnbEZFHVn9YmAg1WSSLySzBr",
  "key6": "pr5rkJ6Joi6HntJ9it4LuXq39iRe6KzJFyzujkYtDXrbH6yUKSHq8qFgza3yXCnxFyxTrmtg8Fcdr39DfaofkX3",
  "key7": "5rfDMDzsLbyrEGnrZcFrUAZDfpcNgGt6N148wxGfED9igfUBJ335VzYYexTRZWEuWrfNhvGcTTTu7kTC9hVVEQ2V",
  "key8": "Hcv9VTVguosKYf1jc8NxCZnNeYnspPXwfxKNmU1heVNNwzWcA5J4KBDKjoPhLsbdu5Z6GpFc6qFBYCajeFiLnrx",
  "key9": "5zuy17BVbhu9XpEtoKJZ4yN2baMAo1ZZy9GG9sPQkSnxarDBj4z5i2eScQLHyFsMQo1xMZe5tUyK7mx5xuRbHMyP",
  "key10": "3M921tU8Q6atAX1WSFGHZNKwpMws2wVwx3swzCrRjVTv8wFjbBg85AK1nyNAKWLjcjzjFdFWmvYSdy6xgrUijhEX",
  "key11": "4pzWUZxABGciCQfAUpvggkjcfjDw3iSFLJM9UsrARnsCGCHpqczxPtKcomKPw1egRHftahYMnehhvEjzCs7rHMMm",
  "key12": "4jZk9aFSMJr17ut84czYcFVH2UmxpMJJL1icvTT1bSQDHhXo68dMkA66frdQ61u8Ss1t1taMEvpGeCafKRay3TfC",
  "key13": "4DsuvHsr2UY88ydFHexBf9rGTKqwmZL2BPRuQF8fc8eTMHmEJUicQETLgHLQ7hk57Xr2xAVjwNxLXmmzg7m3igHw",
  "key14": "yJy5fFko7oKNq3Hs4fEW2tXvwJgr3vqNeq8sQnRDKV7V5kioax5VVPQj6cD4wrxDg2W5FRjn114EBPJ3jTxfKnE",
  "key15": "3bkjv9BXqgtaQgWT1avy3NUBc3QNDV71JzhU3DaeKMuVA1wbUVSgUgTNqXqaP5gJj9ZwYQGRn7Ajr84C5Ltj46CK",
  "key16": "2fzUjK7NptV4vuiFD6QbBqxpq1r9xsA9RqdA3b2H8oxrQvaguD85nEHdUy326JrbK5aityXmDdvQ1Q4hk7qziahW",
  "key17": "35ZWBCJSQvt5jj15i874ntU6VEew2m5AJvPBwzPEfbFzPiWjfX6BG734rTV25RqVmFmmBNT7DiPAsE3eE2Rx9XYK",
  "key18": "KLBmsUHTQkrX14FYEw7SDAdr1fGonX8tL1uLk4YoxZUm3UWxm1aHsK5M2nWmHGpZ3D2ZPnP3PvbtJ8NeNXUFUmF",
  "key19": "2AkHRbugcct1GSHf7tuJH8YZqqnB8B8gn77DFwXYRrUoSmFgQtUXXJCLj3fxEvPYrp1Rgjsa4fkLao43aLDcvqCh",
  "key20": "5nmZFxR5iRURwNBETE7qVm3yLS3JZgjnvKN9oSyajdLy22Z3gBGr9ZuEmzFMpAR8Z792UyigdPtaAXMoN63PCGR6",
  "key21": "2jLuiYy2MnGwnFngzfvMpcXsUAZfptx135BNVmYDCDTb3kdSRK5ij9fZrcCNr9KQ76AdZA7QsYnMEUcn5aGDQHnv",
  "key22": "2Gwu9a18dFkkLwWhAvrD9QGggwCBzZfHv8eppYWKWXhGsLset7hjxeCqT4vUZDBRXRgzqEZXzdCWgKS5MssxZ91K",
  "key23": "4FzHy6z2kWj6xfikiJxdTMzZkoAsBsUpiq1jvwfF3zZbSgfx1khFnQ97vM2THBdY9EkHjCukoeWGjVJxFpTuWbTD",
  "key24": "5DTNCnxnX9Cbh6x7q2wKDU1N5vDwZUc7YoJST5ResDEVrL9V8z8NP3CA6yAhAXjKXFYtU8msvpMrSZvBmFpGuUy7",
  "key25": "2S9cLiQ3GHKfrn4KPexm9zCFF9MiY4ySrjjSuJKzziwRSSaSf8Foxm7tUGLdFbZ4hXW6ETbmmEZZzPbYWDTYzqbQ",
  "key26": "5EomAWugc9t1z5Vtx8sg2DgWPas3qPBnGx3qDrwbmxhyhEY1QWYYnSA4QByHfRo32ULAEYkp1MPY3TKCqVEBETA5",
  "key27": "3rRXDQnqMTApy7hVKFzmcuGejk7ytLRQAFJ3nsNzG8mEAwpy4uMMxAj9ew9M5W1MzKd3uMbQwMCiUKXotcF3Z4RT",
  "key28": "5VZyNNFjs4MtJwZhkWrAhZLNSUigMnD6wYsWttn1yQ1mLZ5sR9hY9naqMmdsFEuLkrxNK6vuzS47Tfeouv43jeku",
  "key29": "SwqbzocjNxPD3YkWGhzbcG6aAqwjwJgTJbft1YzWYBBAsMt52kmkB29ZimWtRPVc3MNS3edtxADvnVJizhBa9xG",
  "key30": "Y5yeJzYfQ3CsEVvH9qY1P9B7DrpGee4y5aHBsJTiRmy6uMn7WFkoTreiiHmKmjGjhqA7yTpVaZbEAzYMFFkJgga",
  "key31": "e31imZq9WTz5CvF3cAR7YDznhBBr6m27gPHrigF9qCJXpMPCEnsU8eXzqfD95BJ8LRE9kdjxjPfCe7s5PChfFoW",
  "key32": "5DoyyyM2hBfGFoUtpmrynjm8Z3dvqj6AZdk5GuPjte6hVKWL5LrZxRBiiLCbc1XfDQkE45Q7U5WDaUawmsdJhR5N",
  "key33": "5hzkmLBzgWErP9mYMW989rxeMeWsQQ568b1UgkN7aXJPPYUTi6mjUAojcZUapjK65BQf56xyQHHH9RSdDxL5N4Mo"
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
