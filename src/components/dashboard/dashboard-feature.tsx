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
    "2ayG4NYszo5UJq3HhAf5FjKFV9M16r2YGjfci99C1JnvXvThLKQ4MamJ7Uvoi16Xu5YadJg9agCSJ82Dhb4hgXP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMAunwedSAqnNJVbwpdsNKMJPuL55j4CQntyidkzp6YbEHXAyvEzzrYF5bydunuNJjkqgSj5jtyeqP59x62nst4",
  "key1": "2xGtjpHiXNMMoscb5TkYgiR9iLeeVeM7rjVsx6JbPrc5RLxDGJFdkSasEb4TURmmyrJtujF4EL59SXqDn1M2Cw5t",
  "key2": "3cFauQRYJ61DQgoJVp3bdrXmschnLxsMkcNBQicbtwCjrUjJagLjjzpkCLkR6xRsvzYAgXJBGXzUTVmGc39qktA1",
  "key3": "454RQKHQgQ8X31kGuvokdwJR7rJPAGN51eQWCPdkQFCc5evVv2GBVeCsukbF59jfyzPM5kbHCFnoPkPDgAAHBixJ",
  "key4": "2NHFiwfJUXAYptQdPdEpYpCuqhbFvfPX2B1Cr2HmhjCg3j3udsg39YLQ44uM3BVnT7u3bcZur9W8pqAZ9LrQwfQZ",
  "key5": "3cT12aK5ejSAafyi26RS7mesEgfmjgKJsc1ohk8hQkdgfrh1wmnjZihQXjmmvsXXbwNgNQtRdFhcEFwFFJP2BbxG",
  "key6": "5ZVjDcdgrZPpbd5nu5Cn2Dopa1kmkiFUK7ZbnD4ms9bhXnUQsxwGdstnmxyzXQXnWBF4pJWGd47aXxmy1H1RDRdF",
  "key7": "97vKufRr6b6fsA84MvbnQ2L8druRA9gmKuDBuD2ZvMZAnsMz5GbEa8P9wtoKACccGuNXyRG8vqxaJGduYY4cBkS",
  "key8": "5sZLrGdR6ousWVDLwoHcWGCbZr4TYvrHyDXWnJZZNRaVrmKHRceTpgLWTsrPtye4xNaNGwfriTer9HLpnjtfK8Mw",
  "key9": "2QpSQ7ChfBXMxDS7ZxwsfpZv73eHBo5dcNVehewPCVPpZuiEbQHg5TUBTWHkdnVVzLXdFcbHCSeLonjS6sH6Kidb",
  "key10": "3KtYk4c8eyMqpXHhdDmA83zSoywG7i816DU2NAmFREYwrMvnZmxD89K3GtcmeZEoEaXmnh4U7nd3YKeqrhf3iMdr",
  "key11": "mQWXrNVyCzqk2jMJegwKgCuY4CVJbX3SsQHuN4aizATHQvoP5pyb6Tb2qVS5vYYAJdWkK5dkFJNwhGY4536JTV4",
  "key12": "53M88aqi3CuhUrEBr1fZ3xoaH6fdv6CzMmS7SKidfPinwPQQDu52sY3QxEJ926ZtjHjKZU8u5D9uRuHgX9XYt9UN",
  "key13": "5PXmbHWRfp1D3iAcTMfmjMF8C19yQubdvEbKrui3puC8ACsHxyh7FuPHNAU1bE5sgpd4bxpdbNGbUAzC3mtgtLaL",
  "key14": "2y5DHuQDs58WYLdtPwsqQmS64E3DCK3BzH32ina9inrwWo5eaAqdiT9F1Z29PFZsLP2B5bEHjn4cquPgVSQtcZ4r",
  "key15": "282ioib37X9MZkVEuEfFH3xGT69iDifWRiuAJu6LxqGWpb263RkEafZpML7wGsSYvaw2t79PSAXVGHe8qhNaT4pf",
  "key16": "CV4gfEgnzhqQNvr5XJ6FZas5KVZ5o7UXLcWsc2LNoRooqXyLM6Km2T5mynvDm21cydNG7XPXRKm5hjHuSBARv2p",
  "key17": "2V19LR7u5CJGi2XsqtRg7ioAxCzTta5VEVWFp7apButAVAJENScuyWARWCQeRHP3mPzs9ea3hhPHCb3Ei7wDosQ7",
  "key18": "3aoAAWEPpH81CHCo9YrMsueBwJ3Uk44GjqTixyEULYj1hkz9ajDAapjVrEmUJwmAsRfWRy4GujkLL5d974xrzrgw",
  "key19": "5QtGLkj4ExoAAphQbGUQEsRH7oa8RPqnp9PQtaweoR8qo8xa8iS1Ye6jLPU3Pf2DDbduPpFpL4KyBXUp5RDZbmAN",
  "key20": "f196To2LkQMT59hB6p9pZo1e7oduMtDfnJ1cF8FRvM9GSjkfz1YsKqFVUsVu4rnnrrcwHjm9FQBYc35dE4VNYU2",
  "key21": "4o9sujV7EuoGznuTXmXmERCduXmT13TpMqWyBHcXFp2RD6De7DfeXqYz8w6wt6oPThTU5dgJVTurUNpWMArTkNoq",
  "key22": "ubK64PT1b71WV7nMwAfzSXQAV5ByyS6JfyzFrunESBjfQytkapzDN1tNRZ3KsF5cadj2FCwgHqbhT8fxskQnXpP",
  "key23": "5gEoNv8PvyNZSZpBeUX13dxMaGYfcDYvF9S9Xvd7jkUoy5EZHiaywFzm16MoJuw8LG5XrpvHtpg9xzkrzzgbkk8t",
  "key24": "563UEyjyF8tpnAh5qcc1L5rRoRf24uuSumXQgqn15TmLP1mZ7Y1k3FonQPVJwYNw58ix3W3HuYvhYojfjyNo1V4k",
  "key25": "2g7VmqHsqRLMWBwuq3GdGSsBHQ9L774X7PCZ4vBcx6aLJutH6cxmJVGpSa3bJUQf3PCgUcu6WXxmWiHFWKcf7ihp",
  "key26": "4bvhdGkqKSqTDJ9mBxJX9UQodvtaFyWjKb4jC6MfMvPAo6r69c7yz5ckViXDqMkkBATfmRzJnM9UsxNL4itP3f7A",
  "key27": "mu3mRo4MzdWtumUhsvCknnco9dvDEs2vXDyoj67h94p9bcx93mgbnBHCjs32uNmD1kQTdq66NqgWpcDTxj4vppT",
  "key28": "42rdJs8dMhPns3o5nKSAjXqEpzhJNkw43RoQ8sEyNwBTGUgwbYs7TWARxUpymbNWRN8Uds9dRjFq1c2q2Xc8HSYB",
  "key29": "5vdivUDprq6vjpYR8ortRHvefX3QYVDnZs7AK9v6LRwwVJZUWZBu95fKZTzkvBrFtyziq2DDJXhKQPeMpdGNeGdC",
  "key30": "3RjzVmMKzw7HEN8TYxxp4BPVGBeCHrfpXDVwwKrsLWDNR5jyxjL5BaCLGUmvdbU1n9Lut7FpVAsgY7ncqKE8f1Sp",
  "key31": "AiHqTLHfk5jeXMjCuQyFFW2reZjREqdFqU7kWSMH9LbJAKzmtwCnCGNpb7gAs2sXvX96KYgcG9uTPfzmXNtKHv3",
  "key32": "2dTuipdoFgx3vCJK14gYyoaJs9MtsnnKdXH4MLyuV9PcrTKTWZrYp5y5n5j7jW3STMfbd2HNZaxYooyrMYRPM2ZN",
  "key33": "4g6fj7vis9yQDHcYZAyAroRDcies3jz6GrdVwpnV6jgTJhBE7mGjzCWwS5oARFgp5kdnRPKoFUBdroUW17YEwVLi",
  "key34": "5nBSspvYNJbo2hwNvNiLcmaphEtcBshHE9JdT5ethD931yyXd5g9tAHBbRWL9aU3RdQ2RqvbNicr6MFhcQANj353",
  "key35": "3Eadir6aaa5S7a4RYF4YfHWxymhQ3rdzJxF6Rc9FZx6rdWmChWSHkVc8YxD5NvH5LY6wkHMzE8T56A5iaxBmw8qs",
  "key36": "4UHKXaNaF3KtnJVx4ArTSQjTwhCVmmErsPLRNBRykmjvrkwps1MQGgSTa7nTqs66M2fnWdatu7mVENa4A5kPs8bC",
  "key37": "4mdv3uPzoeYXLzqSp1MQFMnQxKaJf87Y3cfeS7RnH1h1ktY37ngPEwyiHwyUfabhhkAE2PAEAB98Uz7BorFjGmET",
  "key38": "3wnRBuje5L3FmhD8r4U931BpYvA7z8iFxgi92pPxZxjXD4nc8iJkBh8ytGgp9xeTbQY6NdDWSAU7YbCNZ9cM1kj4",
  "key39": "4FqPsEMz6i1es27RV5EADB21agnYA8udX7Vg7Q4HdRH5AZJGwEHrQwCZqn5VgQj6CxFHWDRjFgLmkxxHotNDZibL",
  "key40": "sfpRA6YsLjGeJpZ2jGUfMRTRNX7AyHkVRs9sWBVuSxdhCutKDfjn4puNgaNXhf83kuaNSXXz9WvHnZL8m2jgF8t",
  "key41": "2DbE7ZhPkPq12XKnjmGm6eZZkzh8kgPhfnTZydKJAUJhnnsbWV85pxUWT61EqBfZHNyekSqmwUxuqE4cue5rtXXG",
  "key42": "52RVfttcsb7aJxywQYAoHzZ3FHMixEKPEzj1rToqGxg4ZLaVodurJTiM9A477gAwuSn6rFSDbtP8PW2Mo9DfBFSD"
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
