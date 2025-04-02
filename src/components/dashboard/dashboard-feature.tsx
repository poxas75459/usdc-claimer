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
    "61AHXvcUVznTV4sLZpEYdvj4ASgpaNi7m5umGLEoYeae7eHhuAaujFxr1HvMV8RBMScFxBGAMDDgu71i71f2zVr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VVEcXwcVELdYs2aynD9kZViEFNsbXzfnPQ51Bgfo8SATQxeLJxHVzvsU564zCrhytfthziyXu8kiQcsnYMRK5gc",
  "key1": "2QRXDeCHRszuyXKvTqBEypYPGL1xu5BEoyD5EAxfvqS6LmPyhiybFt3y8jRivPGbFepq7tyyAVRWi28ikFMbdYwq",
  "key2": "2DDyHDh6ZbT65yjA1bHo5mT852bqGGLyLd2dqSVMTYGGA9MvPZsDuWiJuE7oRXK8rmSx4nEwX7AuXoH43BTEU97z",
  "key3": "FmFei4yvYDHiYJWR9W6PUPGj3YGx61Jy5y6S4AFcmdC1vBd4yhR6j1RizRkAA2re2Jj3D5fCazehoKcYbMobpba",
  "key4": "3uCp6vcSPTWWFF5iMKR1919s3BrT67semnCUzViuM6cD3os9w7FwnahqJ8asJFHwm8HUU1Jjn77Cfoq3yTvoyNGA",
  "key5": "3QgBX7DagkHhtY8SJz4gyMR9d4enBdV2Vm4aAygaBaw5Y291rwuY4fKsChYZCKfwYQzfRxQbeQ8ATu7QJCLTS2By",
  "key6": "3s1p7ck51k4zNKYMiiADyd94jVsxQfKSueK5HU36NjVQuFr1eLTLPUaYyrCZqxydhJWUiezu2s8QT2NVMfKT7FmN",
  "key7": "3YjJbrnCG8BnBpkmPTo9Uea7JVYeQHiCArBcUDy41g8CQL7U3H4uTpjK86XYjqBLgavDhtVPUGZLzALtFWfMSCHC",
  "key8": "2DncCtKoKzxyCwRpk88shYHV8Q7m2BT7B6eK894aKsTfskEBWuwQYHDqMj4ZxHQAt3cJSvLashwB5Csf1V56mtY4",
  "key9": "3LJrxDmJB3umXunuzGYTNBBdTHy2EvqhfYrjzPZ5FK8b9vgD6qVXoj8vHoXfQy6fdCo5z9b34sfh2RDL7ozjkmFY",
  "key10": "4b69FX2iW4NSf7zst5e88AYhFXAujAzDvpfqgfN7wUxBssQ5vUyhC1xSGzuKa1Zp6wrP6pizJWhBJQQrQWUwPzki",
  "key11": "22JtdHgvshrRMJEGKdLFhxCYqtUVdpdSTtj1k8DFyLaM1GrZSA12vGt2wMhTkrN3giRCn2aRvwCzQR26EPCYg11n",
  "key12": "4PsHTLV7k9gabEx7SV2MKpYx1bYgrZArcEUFgtNx1uJLXEVmYehnnwsG3Tgui3AzR3ofW5tRSr8tRTNSJu8HfkWQ",
  "key13": "4uexkWKSX667z948WQVuKhvRqUCuvxCX1FG8jxcZfUrqhwNCRBwpT93khNWy3eNTt6qnaVrUuUXn3Q7HYKEq7CLp",
  "key14": "3jLgGPEp9vEnSL5W4vuBncckAA74JqzJTGiCFYD9xBdfRob66bfPBvN1mhEzeXQPFC12tG4n1q2xmixoDd2PjcjM",
  "key15": "2FeEZX523XtVjgkPJKcX1Nw6R73ECW3Bfpo79iMynnZcNzsdBBmEnicFry68aJGiT8pDQm7z8JqgUBpZbr1W2Wdq",
  "key16": "5JvHes3jAbXTcCZGnPJyMGexAT8riUJonh2X4xaVDHn3a5qhqtfTHfBUKoz5CT9wRb65QCC5Vmdtdegmh6hVUKSu",
  "key17": "DkN2MFmYdywErwSWbKbuFwSR3rh2HJmXdE6zz9du1G9RnTgxQS7SuK5jXW5DEprukGasCBa4UKH6SKYSkZionaq",
  "key18": "3VUoBogcq8u9DqdNmecHDkavqHBXBkFPF1QQwgQfP9rNEa8PwFxcrkSSDRH1kLUpxU6afrDWk99Y2pBpHVHWo2Fn",
  "key19": "2gvourLRpa4dP45CKLnaAPW83FUy9mJcVPWYG86oSQwvqajBwJjw48wWy1xsBaz34ZmoHtkLEycrGM8NZ28oszXA",
  "key20": "eX7x3gxe4BvyzMLB2kqh8X35HTabG5HUavGaDXoAjsPfsWxEtYV31MRE3FXiWkPDmpodtg6kY7xGtTf5kF7jY5e",
  "key21": "4HCigcwkATF5yqGmxpC8ks35BXHshH8PJ2tKJ6YJRb3BJyJPyUZGXYRhhAW6sTGYJjv6oFrBkpt65r8LygzEGCdG",
  "key22": "frHhAcBYSjggVTUTfuLVoAmpN3bUwtYn2SajGG2GGnAVH5WrfdqveHubAfhMKUEAeyVJ5bDgPj7eCAHJuM6hNT5",
  "key23": "7KCVmDQreSWTz4rfpBnLhmYyFUhH2swQxWgFxxjw2fcH3mttYDtDJepbUvb6E8EL76ghc2CrzGroiLCffS74yTG",
  "key24": "2s6kdNaKV7hWseGgw7uzMU2zfaH5bYeTKTW9x3jP7LUiC3eoQi4hbANwc6NtjyL9csJsPEgBsrXUr5QGMzM19vRu",
  "key25": "2E6iMB582otb1VWPaFSvcG7QuTFuFtVZLWNZbbvsebQWpJtynE4CcRSfg5X6jVyc5CiYsWn9TDfGn6tFWyAC3MBK",
  "key26": "2rw5QSJMBw4bg1ZBwdMCEYeowr6P9sAuJ3KUNTVgpYDqDBxowXunVfYCbv8oZPF5KRGuRVdAsRqbZ6AGcFu6SrcB",
  "key27": "2CGgB1pbXc8HUCdtegRog52CuodmqJEqwuYFjHnzUgMYhe8Zb93bNF7dRjN5ZvuLseSooTtMKG24rN5cF5nNELQv",
  "key28": "4NzgnAF5AWjfv5K56eXdESe8fdHY9ULGajEKVsHDYMdaEAeSAe5EXN8vhtSk31czbbBN1gPQmxaMCFUJVTuFAGLU",
  "key29": "3YHE2RTmsu3hSU58M2KyESaDepaYDW27vigjNxV9zractCarKYh7uq3NwEfnsFFcFjC61XGPuQAewQfKCWYsXK33"
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
