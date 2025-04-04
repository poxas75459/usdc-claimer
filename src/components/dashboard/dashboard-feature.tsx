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
    "5Gi3TDf2XzEZGhj9woA1cagqzW9vdpsSmKomzLTLM2SBnBHsVuKSmCXwPRLN92yXRYNHLacwJ84cX4XV5rXcjSDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKmBPfi6WDHnvW9j9VnUwe8zZiVaaZoobN4EZeQy5PhMDzEc4C3Rwxsoy1UyvPVWufh15bcoGAvn2mi4VzeUBmC",
  "key1": "3Q7ZNNCsiMptEibTY7w7m7oHcMWxnd6YuKiFBuvBZLaMdtBPNXQbf1NRYNfhxLzywRD2uUtCuUCkFQFuffuxEGWv",
  "key2": "2QE2t8JdBfrgd3xFkurLRbcasj4JenJ1wpVNbFmi77ZrR45JKo4x2SbLcMcPmmD32m1YXNPfnnriNh43YzzGJoD9",
  "key3": "4nJZWMPpSVztcJsn714tcBETF8ywx2TRLog5YL6fbSJdQpD1q91vN7YnXHKqRpNsSzRUBEf8jdMr8h4idRhM7off",
  "key4": "46L8oUHr35tXgHHLGV2pHDTcwsvmYuHPbcpXuWuwsA1LeuGGFandWm7oGXYsk6dAtNumfwQ9eeZBHiGhfBmrLbKL",
  "key5": "5W67BnWuJ93bq6ZonJPwTgJCL4oMbtv8qwtjijem1qqb2vtuBdfGb9HxWd1Wijck2WD4k6Z12To5jgbPezG3KUav",
  "key6": "59FVnQXCEq4U3pYoqKsdFgYJz35GgAsMSJpCpxi3TjmAFUkqAeJPwhwtx75KvPx2S6XvDRQdk11LMz8XCsnkEBJ",
  "key7": "2nRNhyspiDFxbkcApCJ7JCbzy7xDQuch355rffS8Zo3hL2S3uxP3KgqRccGoe8P2sjC9Wa6925471dKBvP9wh3Kv",
  "key8": "4gEw8oYmWeZmrmbHE5KS9hK9Typ9dnZUZhjhzMowBExJ3uKfDvRgQTQzgQs4UBqriBG2PXGv39opqf3dyKzTNkvC",
  "key9": "5vSeTozgDGtCfrsdZzRrgSTKTb8zMC2bkfVa9VpCeroDfR51PJD4aFkzV77WDFyYiy769QxuEtH3jV2kbYEcnw7n",
  "key10": "3eVWbLcDqneFxizuPJxFGbNdnaD8Zt4LLkMg2SgZkFVgfjH9ahSiEWu5ibbm6qi64JTgoshjuQNESkWJhxs7sRkL",
  "key11": "3wDg8j7cAvcXjnqR7bSGhzSPMkEEpGDmCvAaWQytHTSRfWWDHg9Ehh3Yp1iH6dn8FJyrPhfR1UezKn4fkGbeeid",
  "key12": "4xsWmoQTWpic6HHNrRSySMmve16znH9P3twyRqXJUXk4D9w8oL8wyrxsiVWtUZyEP9tkKhcq7xFnPyC5G18ZUr5o",
  "key13": "2g7LmnqDmzP82J3A63sLs4zxEg3DjrNKJzHZ4Ms31Fm7qwsbjfDjRtQjD7jbd1Q2xr7Wtsz21ANDqfc3EkFZDiwo",
  "key14": "5ikhgyVHENQ9QQhRsKw1BtKnyVSN9wA6DseLdjU4oCAeM3F8WzuAMC1wUuTfSExy22b6QapvHcj6faP3L5A2z5Ub",
  "key15": "3rzoSQAJv2tVjUVKYoe3wz3t6vW8XdFPq9vC2i7eMEGfxX4ga6VLdiN4iffpeGDLng2aC3vTGfywZcLbSC2hr1g7",
  "key16": "2fTP6Au9KmL8SC5EP1Akm4tQLrQo1Nt4xq39a7d2SrE5yZS8eF4ZMSgq61SsqT6ko6mRgWcbamurNHJLG5JDiX7g",
  "key17": "2qVj1cmnowj1w5d23ouvdQ3fAonkdJhidcYKTHu5kKJXFXTGh6ocbk7ezu7fAonmWTMrPJYvSde1hrUM6n6ccT1c",
  "key18": "31CBterDxsGEdri2BY7spzPpAZD3E8j6PPsuHuDMhRcPETbPYXof47usC18WNwtRTg7u3zzwG6VdYUCV7pCaLn2o",
  "key19": "mzfUhjXPjYiXV51s9yiQspCMU1m1suQXHdoEmsrbkVSC7L684sd97prYj7QbUsKCtGNeMokFMup5q74BYAvnKkV",
  "key20": "2c8GNaX68LBhoK7Efwf9wMZxc16775w5mEtLbQrKMdPJNkbcAzGNusuJdmcYfnHYgYgauUgamBkTfb399ehNtuvK",
  "key21": "4SfF92iQdVq2UVfAKxuq741oc7qscEioiqkTup3wm4dnZpK8p3GhUkVzLgcmwZEpaYEDdd8MWbyQiqzWJDcTVjvx",
  "key22": "4TX3g1KDitHmPuVXAFw9WgcZNZPTeqafZt9osWrmsTxWvDaLWqHTVpa7jL9izFEi4Px5qqJQvTtzsWALw3QkUnD7",
  "key23": "2t5DYvVaXW5HgA5exJvAi8yWsJ7J6hVLeHMwWfALcMfcyWoiUQoXfuM7hct9fzkQm9sgghfrpr2FihMMPDKUzp9E",
  "key24": "46V2cSemQd1GbqZPKHNpwMjx76uT9rfbjJzrTMrzfQG6abf2Nr3dm52bnFb8RhsWRdHoLF38DQen7r2vUDPdEUbG",
  "key25": "48TD16NrCcEAagL7nExp7TFR7iYgzBt5smaJSJCkPb9RsxAJPgNAPVFdSCW4pky7T8uCdju3CnNXGbb2Zz7NU3g",
  "key26": "2mJn97LZVsiN74DbrANfRhvw66Vb5FSa2qJ2VY9sD7hgUJMLP4V1DiJwxpV1B8rMmjL9LhATXqXzUdVBjWA6jd2n",
  "key27": "238kfynmfFEEBCHPBHCbFAwpHDSbdMcRwk8dD5adB78x6oNejiiNaQrDQ5hkL5LNZJMt6fhphbTqyd12Fi1pSgUe",
  "key28": "CMY7WNnHNZNBXLTXfQ3KePo5qM5FBPBWUD948pU8GZH1JGUjirhaqAtvhhRRq2YLqgqDY4dzSSf8syN77tXVXDq",
  "key29": "24v1FFGDBFuo6c3ggBrdRPfJRZhzRRDdd3EtoNzB9SJWNvBmx4ZcVb4uVf5etoZmqkjH6h8ozGAf43v5tVCpyYNj",
  "key30": "4MP5eamWY5R8xKZJBAqBjTHC3BxreuzgFUUJVsSt5BvrATVNRrEcpjmxadtiiAocXc8rZELkTZmHM995fnpRhAYK",
  "key31": "2uKguPzQVEpdfdWZi3W53PhzR3F4GMkpbMP13AraSbRfA8nmwju5Vvas8wQsyPfhe36fTQ9t7F4dobg2dj1oxJyw",
  "key32": "rGNFQQJXL8X6TQYDtsgSHFXrE59FqXhdR8oNfDBJDnKuPKYvFdpC8tkKRC6hFaATPQamodo5TC43xCMGZtCoVxQ",
  "key33": "UWaJhwk74Pasfv261QV6vcNJ2Wy71tgpGUevqBZYXqAYxFFofCwr7hgsvpPXNg9xYWBN12MxTjcfEznfrbaKbrK",
  "key34": "3QhoEqLdvYaZPAZ18K6Z5yqW19Gtf2aefnod8XKL2HVrMTPiB8xmC7kam88y9v89msWBPgNJqMbN4NfW5znwbkZj",
  "key35": "28DSqRJY4SDDR1krkS4Kg8nhgpDjjsDNMkH2zZ2Q8n37RdKhrGahuDdu4yXAYLXgJ3GumdPupzAZP5nKXsHMWCoS",
  "key36": "4u3pnKu7BV5AiXtppT5kKwzV3KDh8twpzQ2nVAoDk1NnCR26E3cwkXAggoKUJvpUzMkP7G7s4oQ7DQQfahgbwTZq",
  "key37": "4Fd7u9P9618LoL46aiKfMmb5t7xYh2GLuNKA2G6ptxcFRM7g8rTVmCVUsMBgvxLytYPvwCAzXdGgZJvm4urieCWC",
  "key38": "3BwbQZesxoLK4DTPmUNfhrSMYd2FyHSmXFPFus66VMeuexJRsZgRwjyFivCbomBJWGHd8wt4mcTuqrrim64CPJeC",
  "key39": "3aaTWm7ZzQHEe8FFNTr679qd4ar71haFcg2TcupvJxYNg3AADRsirqghaHrHr2kcf4KWFEhR2qHfMZ1556P5EvEY"
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
