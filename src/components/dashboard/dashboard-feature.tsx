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
    "5WF2hAysLW4ejxauGcvFhYngH45VLuk6jYNJ4uduLLWETjUYjtRBq5ZATPJrKGcqZ7485ztcdARSXUe8btByYJYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpTMaeqdXDb7nJasweBmjugrT5HdnMAPCgTeKKjwicbEXmjeuuTSUK3L8pbvaQZx1mvWeijyFFYhz2sKrGrqSeA",
  "key1": "2qhSZa5YDwvRzQNYxC1aEsDFKs1m4EMcmYztXximkebzdXWJau71kdXQxAgptHSaxggc18pQiRAvkgr97fpTekSX",
  "key2": "32qpFpA9mgeKtEz41c37KA9YRtTCEZKTiaYpeRTQo8RxExXLcUrnViDdC6N5ggsNzpnZtQ8qAHjVZbqwQdTxFH7R",
  "key3": "2ncJGnTYA26SNx6K6DWLmqG3k3J4SawmK8GWvuqLKeNUyr1PS67Suttbbvj5LSXP82rjZYT8ihRuy9m3tGZWKwiK",
  "key4": "4HA8HxDpbrTZjN3kKnnBJou844fZhZNe8AtpSCobSbc8869ZcbXXEjPzRAkKFYTDXS54Y1suqUghSRKW7eKXsWiy",
  "key5": "RNnf5r2JAdaxDghMcHXDi1d35Bk4sS8xYg5f2LE1SLDeHxjdVNufxmgPdechGgz4YkRJt8f8hjRN8fj1ZdPRMVf",
  "key6": "5fBeXdWjX6w9YWGNxFfnEJujmsCTizZwbf1GuSnT26M5kxcBhDRFp3n6wbjgJk52mv5yW2o172XYSdX9ehhbfgW5",
  "key7": "4TVCU6SyrqvN8abnKFyiZNUHtCo28UvEaUDQbvGSUQoBx8cKcnKfVbwSvAyoHux5FShFcGv2ip15nYZfa6fUpJPk",
  "key8": "2zuRfjEhY3fnLe9Vi8e9SXP2DWknjjbJpvA9dtYsDhuVxG37zxtDCQKS17QaFjphzA6eUsMss1SRCQZNW5nbpC4g",
  "key9": "26R8gyradmmPLxxTi8XQmTReWnvik2henjNBXEnR6mYdbgzTDpvdUHbneaZJkxmuvqyQdEDWBtA2NcPKjCTcQDhN",
  "key10": "5vJqTsQgS3jFkS41UibLKcBmS1ERubxN9bHkbn5zF2jyQAW4nLJVBezg7AvFPMzQoq1kKFBcp97UFxMN7DBmh2tM",
  "key11": "LwuxNDVG1nvDu9o55oCAry4xBumvFYqQugXhxv11CX7RKcfgPLyVnGvCKEgtzLGXi8FKm1nbifqaXJqHFh4F2nQ",
  "key12": "zRaUk3LeJqZGyCsnMq3AaXbtYy72ktCPkpNiwxpHsd2LuxYbNSKk6dLCKtw6ooJ2QH1GNfdMPCSrX3iLLpVAtG1",
  "key13": "593X1TZxWm6bhH19jhzs2yGAHCi4fPHf786oiMz9FL4vnwRKGLcEEcVKEj5BkM4R5bEmFx4ynW7f6f1cEXg3xnNe",
  "key14": "4UMqPwjRRMUywXsFcMS4F6P98V2trc6QdLFaEVCYUgupfE5diiiyA7U26HTyuXzWxYT5fzqMsfb2Fwy7zaYBFg3A",
  "key15": "2UF3bscTUPPhs8z3VJcJA4a3KJTa23ASpeGKyBThQwjJKE6E3Wwzcv2vRWJPcjTQJJpYU91KEJnjqbg3YCbhHfzE",
  "key16": "5tJ7UwHbVY9AgLP561u8s4tKtpDiqMi7R9qXWhpjm7QLJBwHZbdoFeW8u1rJ2iEtfD9gKwCCKBEyeiRYkkiHBoee",
  "key17": "2BdF9BUE6pfXoW11xMXZStSSLbcHRv8y7mRX6k6XEBqZ7bkTqTSdNctML5kitDwMYNkRcf3Hsrp489fvDPQ76Li1",
  "key18": "4knkZFPNHc1Fc5Cog6oUggGZkkikHR49Ndpmoj67iDNPeG4xobahck3ZxRmGi1ffrP31Xfb1SRziFzWwXSTbtJwB",
  "key19": "2pcHbBp7CUo6Ad2x2BzWLUCitBtQMrg56Nw39GmYcZv3cZkRvqicGLAUXcVmRXYhXNSt9MQ3o79GaxpfsaYDABrA",
  "key20": "2hMxk2bcSjqdxNZz34JQ4eyuz7LEFUtKmKcR3jExN3UtCJW9xFRHXEhVNsDcCRnMiGTdS3RN55Rxk5yQ5GWcjhhN",
  "key21": "Kba9DeomZuyKjRmVeo6N2WsP6i36Tyy3hK9J2QDVJKFg1UBoAPDpvAWC2dSeqybkzuUim68wYndEmvyPmQNa6CE",
  "key22": "3Vy6RYDXsmhLUQ3srHVeAMjvr4Qksrzp8AyCmJcGp64n5Y2KUFvGcHLaPYVUKEQ4qJijDzpRnsmyUuzwqu4gkBN9",
  "key23": "4KmVwUGKjt5jTDxn9jtDdmJ8JcQNNQmbzZECbBCopR31uY7urby3USAeYQ47ngV8Rjy6RppSS7G6GRQ8eRb3cobc",
  "key24": "442qDG5y6KNsyEas1AdY8UMRBNPEgpiCGcCPfwitj4SgAuY6mQoCYWf3n5U4QjRbeWVwfiNR1YZY6fNufQCuaFyr",
  "key25": "5bCjDfct4TDgHYWyKAwk6sYi72ZBKqcq5TTbZAJA3NsyjMoyGBkaqUvhB7aKZ88rjJvkHi1a3MdrRUgio2vf95cD",
  "key26": "2Z7bWs5emxHhjASoZub6BbnhyAE6bWu1aPTcxGBe6sy98U7czK53dwbr4znvJevvwavBKVXLjpNFnHYtZfaEHAw2",
  "key27": "2bN53NfGy4xkgXrEh2h9Xsbr6hacpn8n3wGcYAfSegc7j1seLwHb9A8nB1M4pGgXzaBT8aqt9D35QQXMSMgZdSZT",
  "key28": "4bjtBx9vGgUqXs98hLUeANvDXwGQ8AmY5mDMvymLbEed7EPdNJQdgHU6pythn5SP11efsVDotGjqgz9zNYF9DoY4",
  "key29": "333buQLbpdvgR8WiUDTDSTuWveVtyXJVmhxBn1HCk72o9nWRxPKFJrokRbSrAjJmF58N9p9bWNTyaeZEojCoj9jh",
  "key30": "2wxUnVDctfy4J8RGiYb5FtXMyWXcddL8UxvLdfThxbSmY93V9nzY7fZ8Lm8sDu7uWkZALxv2sRN4GxA7Wrnwf3HD",
  "key31": "34N6yQ3Sxjvn6BE92oTC6K6daBjVS9ew3R1Pnue1GEvuHzNTJcjJSV7uHnDr3B8ixKKLpAezZX53xmq4vBmC89G3",
  "key32": "4MK7ZHE38c9VX23bQijMtxroJkSVbDz8bwwpbXYVXMZdzysRypu8pKsbuNW62zb3xS4G3GT2dFqHz6SzN7PAeDT2",
  "key33": "2obYxvBQat7cFYoLZDey16R9bvhAzbBHdfjh7FvcJHqUBLFcKF31WLmRwikWzQghHhd2weMYiYWq5tF3L8auCehZ",
  "key34": "4KN8Eo7xpAC9omzaM8a1qL8Yf4sJvMXPfKRp32oCmksdqJqCone6rbpnWFgazUQ7twM7hVsf6Vuy8SQN83seMvde",
  "key35": "2gJzYB1RRYpmsfAtg2MvW6Yd8Atfh2FXTx8Tk2xs5o798SVLDTTAgpKRDQtrU2Xz1XWbiGcTy6j8yZ7zQfnDWWwv",
  "key36": "2MGqnqp7BcBLmYMfunh9Sz474vJAM9wRdmeepGKj9XFTWYyCqJT7cZLSxHXKwtiBH5i1to3LDEUSSvwo5TUX7bZM",
  "key37": "5JGVABqVg3XACwGYFxWGVZLeTm7y8QukhWxs4vjrJV3W34niG3qib9DQN758NK6EJBfXjcGWFmrchkg2F78SUj8c"
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
