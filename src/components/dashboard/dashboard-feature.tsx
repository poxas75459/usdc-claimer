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
    "5pZ2DNWPzncVg3eDETiFqvP4JwFsbQ1ZHyjKqeT6qmuS2KTnoXvdN85b7AHiHav1C5HmMgcfMBMEXmJXLGSrhHGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcKYVhDXahjCWFBUekN4yhKVU8WzxQwHtp38r8d2JxMVSbgkrKNcbe5BrAqjCDAVuD5ucZVTWrsj2sqccuRppRT",
  "key1": "32g9eEojqJKRZfdm4aZAtUmg1qnkcHWfE3L9YPLP1aXzMdrSo6kXcZHxZevWqEVcdHZ3qarEuyrY2MqwSoYmz7bn",
  "key2": "5XNWZiDe8EtcKzAKFzePveAL6QU8mv9d21BGaaoJhwNcW7euAbmmbyYo5UMXpfgYbZnxxhmC9PvVPWPNqn4xTQyL",
  "key3": "2xvwiQKyKf3WYDPd2tp3qFmtGpuC7RyZ79Y4D8Cv23UWueU8vUYgoXzLzV2aMJ57C1vpFoUHHPNQFyTd6geQbHMQ",
  "key4": "7Pk9GhvcPUZFscMQvyTkQqorUgDJ5pzNUd5gkbmo9iy1sqsYtdviUJZBmT7NoWo3YZBKrKfgXAuJ5YeKh2WmZ4c",
  "key5": "5T1QH4pMEbpzvhuTM6wYJLZnhXpoLhQLWGBEeioKZB9wNXnffxGLePLEWLgADtFCZRXoZB9i84fpDnSfm8guCAZs",
  "key6": "25BdejAtLdqxfyzQsDAtpRqohCewC943op7fUo6XWZPHxQrHCf6cJ661gVJQvYYd8pXBstfodzj7VrW57rH6ChtN",
  "key7": "2Vuo5x8V9vbdyaLW9VzoSL82sCkSasZeLhny1hJpLRPiu2QDkZyWp44RdAyz2jhyR7d3XoQoMYHpYaeTik65Crab",
  "key8": "47KQadZGAfxyN7rVbje7KJVtwHfQUR4aGP21UquPx3FFdrpuCrZ4RWaQLdK5dKogfWY4VZGHXHZiy1gFoaj6VRam",
  "key9": "2NFB33h5E3RMZNThrcaUXyGBUf6G2VgBrvuce6P3YJ9JKVqW5KRJZq9LJrUc6Dn5CE7PKGf2MN2gRhJSMe9TLmD",
  "key10": "2W7Js8Dd7ZRrVBuZefAjkM8eTt3Lg2XF4i7baqRahh65jxMm6SLzSV4ttWZdxdpaTZ73dqLm1dfakxJJfpdzEWFx",
  "key11": "4AVqsNJXt2JDxa1HE57pNqyfEahMDRRC6yiY1HvZFYtxVwJDt7dosrufNyoDG21ETChntrY66AsPWBYh64cTJFFR",
  "key12": "4TzZEqcCcDCuiru38UuXFHnHK3VKGnyMhrJpPo9uLZZspd6tmCzWSQ19DWYi6gpqhWoZn83e7Pe5H25885rysd6k",
  "key13": "2YRjGDX8zDqnxxkSKjf86v5SnVHMR56AhNnqmAs7mqvCy2zpFnhQewSAJfAGEQrtN3k1ahGoYGPgk62PCSqKrhmw",
  "key14": "2ewKFRRLRmpcXrmYGPgs27JCFh1hFvGQdWo3sFYjsxjTxn91NYtSrtnxcFG3m1HAWsRxaV4RoT5gWqw22PPciTHq",
  "key15": "V1cvgo4Le4WzgaxwEhD1GsQrKsP4vBPrZRFcqJqfmauB9mTpYHJRxvFd5DAcXViWLippFeXQ1Rjoh7UtVZEPa1r",
  "key16": "3m2cveHWAbFSuDttUWrRzuYasFKzTRGGDejdrmq6VXBbuaC2CtKsz9gsvxgoeucVoN2LMoe2yDf1jiYwYuKS66D3",
  "key17": "3UqzL2vTLSc1UaTvv1gD9fM6FxrZY9go88JrT9a1AYo2ZcqMxJRce4irBbuWPTyyr1uprL6aguZhqRohD9XLgUzU",
  "key18": "5jZwoYpzrJsLsFtec2Extz9CNn31KAVc4NheNgjLcpRcbza8bRWZLayT1MQb5BbonmEhM7NQFnMH6yCmPvZYBbEw",
  "key19": "3iHP3zwUtaBbYwQ6YDNXRt6Tse6DRBgGW9eU8jnVox3VebgZBn4HmVfmi6ttNV9FZZAERomrvaThXW483wiUfbyp",
  "key20": "2e5mfNVPYAqfYQaibR7VD26QcDACpGfJQcKSkDH77aRFrpsM8Lre1DknUx63UvJ64ptgm6czmJX2b1QgcgQDGNJK",
  "key21": "3jbkLXpyAvw2j3LLbWyZat4snfsUSuhwgSeKBH1Wwf9iYCHNf6wuXrHYaB3wXHfRBQYWJxExhxUs8VMZQQvexwom",
  "key22": "4zEpEU3j8WUxbvaU8g5rLNF79U9gpshztXamYeaTcqtiM1yTqE35pFfXWygBbXa41DZQbjJNMGSQ3U9W2PhyNLhG",
  "key23": "5m7NXXKwwm1i9HFv2kXtbtAV5kVDA7ZULPAesnG8LTgpoVux6kToDRR6dxNxR1dSonEM4nVvofTAB4jNRWR7ACrr",
  "key24": "uxAtCQaHhqtNwPWwdEgZQFfur1Tnj1BNELZsRcY4fCftmwL8BqjygnwXc5J6WXWbEcJQ3hxu7DfbRKvVMCWuDyF",
  "key25": "4Ss1CVpSr4kNU8QhDRTYmEgtn9HkEPG23ZFtzjm9zATtfZjMCapk5rV36e1vLgHhimJom49nzAyvPptfKFpXzB1Z",
  "key26": "4h2CgcuYCFEEFbd3WQ2TtwEYd9w9oAQZpczAhJyp2z6xKGotiVBxkLkeJ7xPfAzS5AR2xscnk6R9tKzaHgeu82eE",
  "key27": "5KbfRzEPjpR5pHs1oFVhmmmJdHCWR4XXeV4z5DvGEJChvhgtRtzAeaL4dAizVSYD3MqMnYMo9CcWHv7FioLNd5f6",
  "key28": "5cc32CULqxGR6o7J3VQ5hxxrKc3E7Ej85ejMWaK7bS7SYkWpwpR3EN2fNLqtM4G9D3fS5K7MWp29SWPLKxtYetk",
  "key29": "4ZzMZrQoFzGNCyoqCwscZQeqn2cERzG1aMAda9U3Cgn89ViucXtjWzNTPmDPGp2Ww1AUwj57wdpuHLdsJ85MDFvL",
  "key30": "3u1RAHvYTbjDjXWkgGNFJgWauajk6ptyepF1DDts2syaid6dxs7YxTG23pevb4EQuHv2qRypM17QfouK5q5zHBnj",
  "key31": "4cVpuN8jQMGgyqGS3fZn27Dx3EtzXN7VH37JXTCJW2kdkABRU1Pi4AFxqHRjSuqHxgZuUQeW4NKYc6zwhtB4mtBY",
  "key32": "3btkM9qEk68fyfTcYStB5rS1tipUHLRKkQ3dTMXbDMkKczwuAjEmM4VsSkKPfrr8CCQRhPdUc7pDaiPpR619YXXt",
  "key33": "38TGEvp5XZ5ATDgYf12jNzrhY9yucnhZXJcMHynYrphMJNQ7N1jQfSfKojn6ATGTCmJjmsFe3hZ8oKaUBP1adXtF",
  "key34": "RXv4G5MV5aqG7CbC77MpoxqzQUjqq9F4v4si4hreV1HKZyURuLB4rCPorNBQcjkHpw76xEAEfkVKkDf8eLFoY2i",
  "key35": "58AFGABUpc3oeBbsJU3htbLiqfdWRfmhwr381whhVcqHDLMKgF41jjRJ7yHEeNzSzgVueViRxuFNmvZo85SSy7SN",
  "key36": "2eR3povAgPQttKViy2zCDsiobD4Q2Hya8GfQJS4oiNauR18Q5VRQex4Dj1ES7mEGfSJeSjmoYPHNEicvfzWkX4qH"
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
