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
    "4oW7R8FbUZSgtBa3ZT3hyNQudAhr3V76rQ5YEwyC6JzFj7NyC89q6uLPpA8eRw7JBd8GRo4EnPbSQRYTKhuwcRFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWG4P9qTcYpoaJRzPqqsjSzzUiAiTUjhSycwLKXBBhTj5ggbZBfhb6iKtJNTPUmUgYEMuGnB9NsMupcSvfGXWZd",
  "key1": "TtJrqdvUtx6BjFhGmB6NLg2STvLba1ZzimkjUDouzLvjn5LsGpe8zg2j6NZG575C9Cq81XHS186yL5K957pAQXG",
  "key2": "3MZwZCG5SY4spiC6R3biuKR9oA3saxU8Z2758h7Ncq9wzANyY6hmqAqSNPPG6FoCS91NPBmv2KgQmYJJGeSogo9v",
  "key3": "2ZvmUGAzie6AL1zhiA3trpURLKKnrnuqP79iPG9NTKaMJp4ad7NAZDqXcTKq2XdUJkxwJU5MVzSBZZTxeMVa2HdE",
  "key4": "jcrehbdR3tAaSMxrgT3a7YPVRpM3jgjJ95kwZTDQK7WeLePRLmXBHzq2JCRfJE31U6NkNb7ApyH5SGXpsmgPJTS",
  "key5": "56LMbovwB7FxYBJYbbaBP7FLMXAdK1HH4VMA1gorXHCcETwy7SBDWMgw2iPVWtvmrUBYrgs2HQsDyFEnrwTwvKLh",
  "key6": "5LuKFRVsSPByCwR9PjEepKmno9qMh6hodRLiBbFS6Vvdd2HNm4JL1t6Ccogsknr7XK2PS57mj1iXR6voEhr5WosY",
  "key7": "47dkVLQGwv6sZ35oopWyYeE8TCLNQUxndH5THp6z3kHBTVX9tanjn9ZMxyUAwX69HopVRyeGyWK6cMbJmNjdWNCc",
  "key8": "2g569vipe7x4srrjkHvmYVk5J6pXkdd6jzmmQaaDzBHHKS8DDjWqZBLpDBJim8atvnMviQvUwne1nUsFtmWF1U5F",
  "key9": "5stFXiFCxNfy99LZd1GeU2oubYGkVqtTq19ZE5DSDJCmVzwecpP8Kfo28DcHw3Q7AAANPiKozp4oLYXxAK9u68oG",
  "key10": "5oB1y3K6rvkVhcnZKoDpdPyfwWLUdEw2k5FQotBLggj337VjEVnHrBVE5NZ764nA4GjuEQH8SPjrRhiJx9K3F4wr",
  "key11": "5FhBqp6oMPAFWbGWP6MnYPWCLv1U1SbyjxdZYY7TpqWBqmyjtEXMAPbt8ruW65zXYD4nkQkzeNbs2fUtqbfVuF5D",
  "key12": "Kxj2dVUjEqdJ9g8vDofvWBnWJyzxrqFBUofgMKyEJwouGdMninas2kQJy2tvDugkUHwUQtaVay8Bu4Npu78uYPG",
  "key13": "3qFG3cWsPBfBKVRByr4gFRWnVb4nwvxB71LFBW5ji5AvQQUYgG5NuquNzfX2uWcA8TxWmDN1Go1wPvHZkZBsx5ai",
  "key14": "Fk4ur7ESnJebh5Q7qtWYr9NCWCr1Fgx1akvnbMr8uMEnUhS9uAJ2ABCrcQLr3cNZDZ9Re6iENK978UBoC4aTrTD",
  "key15": "E2TKCRdFicFbQbeuE2oghdJ2DdsHN7hms4wzagXzJkeED9oGwq2WqHbDnhebV4o8kM3oe5mWKPsq7Qc2CVCCmCi",
  "key16": "2YMiW9n4XQcrPUTHTriHp6pQQv96zHZtY7aUgLsyj7XSqpCJxEnZ6H9c1HygDqdxxsuq1pp1UuMniUn75uoTJrKt",
  "key17": "5T4P3GnKJvyjhcxoW6vmBw8TUL8QE9PnLuNBofxbKxbTnj1FBVTV6F5VjVuXW92JbN9C7BxR36iUv1qys5TF6o2v",
  "key18": "2RyDfHkDxBFjh7vLUHEvGXxvYWnkSWd34vMYHP1s4C2yk71rJL6szXtHxDvMQLMtLq8q4Aof8jaUDVkeYdyd6U5f",
  "key19": "2vvpDKsm2WURReor1zcfeDHMApgMTMj5kGxddyyJHszjf63P8ZsBXCFd3M7ZrSSYK4iw4HcpTXDNkwmit1p87J2b",
  "key20": "tbmDK6fJBSJ9Zc5uPh8KnggEnampShm9MvATzHZbXJjH8Vp51cDcgt4Xf7oSd5m5iF2LJ1q6NE6r1AQHEjCxivf",
  "key21": "4ksXJHT9Qdg4WacMuUkdj2yzvZRsWvyL6P5ecu35i4XkNHbXt9KD1qfSogzqE41pivwmPR1d8NV2hasLaUZrx7ZD",
  "key22": "2HJ5TcB3avpk9zMXXZbnq8P1Rh3Wnou9aeRJ9e7M3ySX2w6Sb13kuxMFFmG1honUsBnmRiijDDNHxPcLo9gLFNzf",
  "key23": "J5jKBrsbF1hVmrhaJ7dNaSaqMaRUfW49tLrJdZ8ZxW7TCFtpibJVtiBem52TUT3Zj3eNGqNQ6SrwFUPStJFVhHK",
  "key24": "cj78SRAdD5YMS5J2Mwr29iMdZefBs7ZJEP4aidC6CEuHUzwzCJsrWD76fgUCahQTNW5J8s8vmBsPJJFEaMwhgYc",
  "key25": "u3Q1u3XfK5heXv3FJMucqFDy2eTW6bs99DLrw6KuzvJ1rJfLTGxGYUyx31WVAmgjd3aVmjAK2wL9uY58vDREiBA",
  "key26": "2uCaP31JTSFcCCfRSEuirk86FUtFizNkpSLqXAeMeEs2VdCtwnQqNizo1sRM4otJ7Pbon37s2HnvKsMiuqXAVnYF",
  "key27": "t1DDBCzyBqj8hfTfMb9mcZQU5CfVD3MrxG7xos4zDujEE7KAFXrYue8sJyf4apMF6YuEGvKDwSSTKRUz18DuQjM",
  "key28": "5uC8fjQQSMqmqeUFEqqEHZ2naaTUUkXqzUdAu8YV5UVe7jdtvCF5h9z57FA93ec8UoezkzgXPyX9wHw6kbKEMK8i",
  "key29": "2oxdFV9UmDwqFH9UhL3NEjF2EvnxuFqUD7QkEUrLnfbvVaPbkJwjwfPxKoaRGTfCjbms9zpJcgy6gmsGJ1jo2Xox",
  "key30": "4La8dGWHNipJQLRorzdC5ygvuqzh6QpnmR1AEjbR4U4fw3zKX9PQHgdTP5CrGq7ZBDB3sgLnQ7iZqpezyT3cEKXu",
  "key31": "3YHZgH22hBaGSxCaEyd96CnQRe5DB3QvbBRCoLjRoM1Vm9cFKaB6nnPMHUzcbDDZQ4gtrCQCkn1MRnJ8eC3hxEbZ",
  "key32": "4NShRTPPNhTZYgNboW8ZwG5AyiDdZPLzXv3T3iyZejpT6RbBjr8Qo91nnHXs1HSGkTHW5ev6ZhrA4KCwnGACtD11",
  "key33": "6gyAgbPhg3L9SX7q3nQdeh6bM4cTDuUXtEsTsYbhg3EqGYdccVwjVpbq2w2SCScf1V2STRDVBt3ZSFM54yKhbDt",
  "key34": "4NQpjPAe92CE6H2QJZRMqraLjFWXyHvQapLCer6HcYfumrk3fvj8cWDD2LgaHU8StXaCzmGbEAAiW3jKj4ChpLRh",
  "key35": "5NBEKYEXENe8vTwbNDcvTG8M2vsYCj9j4je1iNfxEDc6Q2XpTZ6fptqp4xwyWFEck3G9NjN5dqX5hc1SvNhAcFGq",
  "key36": "54wqVP4HYhm6zY1KjzraQLgCvPwrUZmMmWW7iDp9sdQ5qkq37Kmd9Vn4bMERW1cULABS9VxPCM3RM9VSGnZWe2ik",
  "key37": "3iWaPLQTT9o1XrwZ7Hr1tYpmc5VQXVSqwdjAU9SR3L1r8XrBEgMqrnjdUBVy2qsmnhKwdwGWRtRo6yTFAxqnebJn",
  "key38": "4GAxKYbX9LkTrVMSEC85u2wsSGHWxCNWSageVfBbQJ3urTJLhqSwZr49cbC7HpdwQzdsFRbCEaiori8fZ6BPUMRh",
  "key39": "2eGZq2454iaaqZvX7A1TiFcoyqf86a5X1Jqot2aK1iP6KPJFgqbLUpkcunRoHsojRvBAHCUqaw6CqXvVHRgWBspq",
  "key40": "zZnDNCY5D5iDT4y8nWcy8iAqMjmeP5Yz85ogo2tNvQuMYDn4QefU9hZz88P6K7HNWbKoNtbH1qZqQ3hU3P1z7ww",
  "key41": "2pqoRKbXDYNUddT7X1hxR3bmssegdFCVLQ3wi12DwH8PTFsLE1FeJFanZ8xugZKHYaV1GLaKuQGtpWHznkhnd5M1",
  "key42": "32qYg91kYyqJ36ApD3oqNu7tDQRoL8hsw3PeL9Tsp6dz8NzYNThMYRBgLnpqW2DGcwnpFHhWKJMfqKa6c71dVSr8",
  "key43": "5fZ8cgFrtwMGo7DvP9hZaAgWdEhD2FuBXroFsSziWbn7VQCD8XwLr2bY5fiVDVCwCD3sKVCpkwLauxBas4rfTK74",
  "key44": "5v7woGJzft36uxLq5zNJ3bRWaJJCetdE3MDbBuXoSeZyhqBwHcuoMYga6Hw2KUsCdKwAMSzfYqoCK72Tdze7wFFp",
  "key45": "5kzLjjw1EtSRGVsEbPunYkh7u9CuaALHa8RyckL3DCX4E46SY5kQQjLD96rMHz6cV4Dmqn1sdejZBDVuCzCCweKW",
  "key46": "2imXKCFaWUm7zrKr1VgEsKDLbCqj8asRrtEj6xQjYvv8SDSip6ErTmDbubi7UBkrGfgXgZhTNqaexBdTCq1motPu",
  "key47": "KSVBzTeHgJvrXo3a75RzscktHvtowAjdRxBeXJhK7X9DGPWqAVvwsp5Ld9Gtx2YAPbbUa4821CKMiydnM5Zg4RP",
  "key48": "2FU9GT82uhefHQNJfwdMs5geQ65w3boYJ6JMgtB6nnSRjnH1q8R69zy1agxFUPFb4dwgyqKwMhRH62rYHQNvA1ay",
  "key49": "7gj9W6NRZMdMHeDbpnN8eK9ZsQLkGc9FaEvA1FWv9LTiFj8EdAPzbRS5aJQn8Q5QX2SrJRuZhGmk4tT9J38tbMh"
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
