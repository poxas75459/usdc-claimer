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
    "43v7ZMrugDUtoErxKirLaryazVKLnZbAweFwk9HRqxsbmjyLLFrZNvAym1TWYiVCJVGKBiAuCnk2S2fmxuRawrnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFkwbQXYwquZyP4qmcCEQn6iBjW31Vxa5FT5cXhJSYMRCvBgSBJ6ee1nwUapU6j6BGPimnPmryxUsbwmvfzvnyk",
  "key1": "4kwRjNXY6t6bLojuKnRrdLyMki6ibccBw65ioYtxAabUPfz9PpBGMJ6NRgTvioKkqosuWVA1MWNhakL3wHCmucSj",
  "key2": "jn4rF4E9czWJ2pqiTktHXAeNa2xuCeFzegRqWr1c6S5PM7kqxn5xJGvy4NMoN71bcxsgFKVuwzAXd4w8YPPYNzE",
  "key3": "5txKa49XtZjaBHbt92VrJ5iLpPqkoYrwyrySjuPTiGksJk8tJX9woFDqb4PG3Wqfape2AmcPrBSv5nGKESSNvwM",
  "key4": "3sZom16MnH9mSaS1KP5GuALdP3BSEDMLRUoxnyo1zJs8mP3fubNzK4uXtvimodZhzYAmg2YJjxhTGLpH2Np9hr4M",
  "key5": "5wYrzYonuBVJRLdf4pTWJKp51uZVn4py84A8eBwjdqJWPV5fEm1mo3zoQmpMG6jyLSQ6xWxzZhaH2TT7mrZaP25K",
  "key6": "4RTY7dhpXQ9Cd7t1NoFizoh9HkwSGp3tJwo15WXMgRTfchzVrFia4QAMH8Fb9CyCZnnxbTsSy2Kc2C9jPwR7oGAE",
  "key7": "uzWQf3p7M9b1iHnhTnB16RzmMUkgiod2bvZzubmmHggix7wWTr6iReacB5XikraiC6iWEb8Pf3qkJsF5TNLYJ4R",
  "key8": "5T5XJaMahpcDextUDvHvj7Ty85q8B2syaXdMJFuRiGTv7yjdW4tQhpEcqeszJgzFGQnrg14UjuKXhbaMjosdELbz",
  "key9": "2nUUpG8GJM2v2LsMy5rCAzdQR5roy6FBH4c5B2nqfWUD3jaQdKbrN9Pn9uzTeCDDtytJ2jFaxHYz1mJW19uJR37M",
  "key10": "5Rr2cGF2zVd2Fyx4sM7oXG8Eu8ziaMzGhmRzVeEv8C7jyMMUt3ETmyeLpYHh3zdvUdTzUVdsTsj44LsnbQPzBybS",
  "key11": "49ShhyhcyQHyVPsgVMBEer7DErGf2rAQnYeeG9eGw6muGQDd1pBJWxQZxvwQHAsUTFiPxpKrmtcrdTYcuXN2DJSb",
  "key12": "5CB2mmcbeB56uLPn4ydb96HUcmFuVmRC1uf6uz6cwhxUKVyPwUu5Ppo3vouCm2MEfWwPtcT7oVAd18fEKpt2Jx2n",
  "key13": "3ECbJjbGNJ9JwyewdLQmcjYZ1goqnjJvxgjgTAM8tNAxth5Fn5iqRoeVdK8PpYSmFASSadAVhjF3xSiZJm1Fxvz",
  "key14": "5VL6BfGePxvCQogi2B1V3EP2Lxy8vxy6PjdJrfdKoCnaocP1ehXSWaHNmqVjTdvSU9bNxXKhYJJYXbefVSmweGKH",
  "key15": "5JuqFQvkPysP4TG3Zk6L97euPZsBazLvVK5RytBTxZ7BEVr9HiupLRpWESFEaPGpcwQGmwdG61zJahmMN4T2NCw1",
  "key16": "5AhbDffz7Sci2eVoXhjXyWerTvoGdk4bXGCs4SdzVKwsngpQMHzi4Af6M598Z1hMUKqKaH8xu4oofVqWxHZUrHjG",
  "key17": "2zD6A48ungZqmWZ82uCitESbix28PP2afDeWyzvYWFWyvyyZeZwAhNpk9CgpWTkwrgrhCVP6HgcVWmoxt7df27AY",
  "key18": "3jVm1arXJfzEKSnx7QutRa18CokZjrpDKNPt6asbgVn1DrMTZfdsHoJn3HvUvWdxJcksB9xnghKpNDT6NsRQzxuE",
  "key19": "4ifj6aH3UPFt5R5CLyjkwNfhPiYuuNBCK8SwSeuAZQNaRJ6fDWCzHzD6LjuJ7t7GRR1UcgJbiyPNZ414uEgFcBfT",
  "key20": "zRyLk4RNNTFj62Ycujjxu2JjgkbU6WvcshsS3Ud1FCuCroz4jruMdBooYsVzkEHs5aqceb7VV9fkmJr6crWRmQS",
  "key21": "fPsBAYwDrV8LkkPFtvCDQ4TC9YS6YQtGyD43qPbjuQnebyZhjdcxUojcv5sC9HCkeA9nezR3R2LFWA7pyjAguan",
  "key22": "2o9kL4PcT6EMwDwpRcHA9oZ8kFLiAG2BPc8DsEtD9UgU2FvRGZxuWMWLf5Hb4R3RyHKiSz26kpDRzgtKcKPRx8fj",
  "key23": "3jSyjSbkQNUE1iyUA7UXA4qwhfsf6516QgdmULwUsPUMY7heH4E7AUGo5E44Se7uUWvrXZ2SUBC7eKQnMZUXuP4q",
  "key24": "2kqfxt1Ykk2DMUdTpbYyQxJvQyjAs1mbvvCGWNJXTLdkJnmRYBDR8PNCG24qivpzNTkT9xPLLMp94LeGp5H8jNN",
  "key25": "2AJcWKuk2GS5VAD1F6azg1FMwdfwDM1ekaraaYzRL7Y4JHGhyzHzKd5vB5uiXxnRjPYpNQ2PbHBcKke6Yyp5oCtf",
  "key26": "3m2w6ksecMPDZvyti4giEsv1VBMS4C12yDeVnoHtJyn5dSMVsU5Nk9Wc3p3z6KZX2HF898DnqEEnbak6J2FP6c7g",
  "key27": "3s8bAyGvaqkDmDzXByBV4Uafis3dQgtW9DKGtQhJiuP6Ei1oWY7SX5napNv6M9QrwAB1NBHgSF68Yy56a4y9Tdxr",
  "key28": "5QEz1Wf2J6zCYXYvUyM3PQE2MtcB2kAvY17xa4Fn3ujnDTUtKaTnUfgQvacALDqPeUBRnjEKSZXnuPEnxDez9mGr",
  "key29": "2Dbu1emURqDGNGxwEvmeWN1zJFZjTLhWoNa7JrdJLsveuKMtYcbpe3HaU6tC8obuhx1XnMmZCuzE2nHNSFpRavtH",
  "key30": "2Z4qY4rAQatuJPqz9r6Yks1etfAHBeEKC7BrHE3TSB8k82iJfPhZesS3faVxHydeo3v9gTH4DbTudYeAN4EY72ug",
  "key31": "3qSGyuuD5ELYw5f1Fb4fqsqLCSjpgymh3dXrqcDR8yFPVq8f2Frkoha7NHKJdvM4osFs1KGZ7JhMtUGbGX6Mxu5R",
  "key32": "4kEycmbBbnyyxtEdTS3s4BSp4BxuxkTGefb7ky67SsUDpspKm66YucxBVJdN8VZxtSpWUtY3NVMXAokBNeQoRYKM",
  "key33": "5HjvqPKwX8G241R3uYSpY77TxRtZqkQipVso6HWjDHoBkqcPqMhPoR8ZESXz757ABwsrFE8Qof6qxtq7yLUmmrNc",
  "key34": "5CV1xhdCZJxsv38Fe46HD6hkziBTcyvXjU3grYJNkV8NXcrqvjbS82ZAu8nLn3pM3P8rambeMTXb9HqoMsmc4FW",
  "key35": "5VjMybSXJ3RKjxS38e7WeAtCWMobGez1Rb268LY2hmekV1he3A96jFgVFmuJebu9whffj5amPJHbo2qw6xKsLXWG",
  "key36": "2927Nm7R6qEnEPRMqajQqfZuQzWqDuSRwjsHmDNrc2sAuHZztxbhviMZUbaMYLvCitPPJjDtBkUfcFouPDsmS4fD",
  "key37": "57kK9vjfr3U7cim5LYajXRZSxkWPTyaoKjDSbHfJhyQ6gUDgY7XLmZyUsYDKW1z2W17kjheK2ZCtGKm3NKTSDHia",
  "key38": "J4HNCJ2jt3meXAWzYg9j8zwGgZBMxKCzrWWhzMCmCfArZbPQd8z8i4JgsxDHcH7Xip41SJGQ3Zo2NsjNBVEj3sQ",
  "key39": "2txu2znxQi7w7CfVgY4fXeu917jCEpp4E8uN5iPpe8ZgRgm5GX8749w4Tn4xGEbYPngzyUBmsfcqPF9nGDRswisY",
  "key40": "3Uxk2FpZztsm7fjZtaLuqnKsiFoBh7uDCBihdwYsm57ixd2ZHMDZkh9aL9iSpJ7hZJoPRTStTCQZZ91mFQNHcHbe",
  "key41": "57CYLVV1EF9NKS97Wuq3rX5kGEwbUA72Vvqxuk7r98ezDoUFznM17nsEiTCrycva3FhEcEr1XFSRa9j7uZEKmYC5",
  "key42": "2nGD2hcfGVcHMDUND6oNJARdo8UBBF7xn4rasxhHaJbpQQcVTHXDsiCeBMtxMgJgGG5YeZYtc89iuCGQrNxRZaKr",
  "key43": "B9AbCbP4sKNkKTYQcqJM4KhRAzvuPhPTB4htYGPLmTtECLa4pawL7fmHZqbgvSztWnwe9D1LN4hj9HuDgQsAePo",
  "key44": "6uL3g28x7eRDqmipJ1w8Nn73mikFHYR4uRbnjnzpvfxim1BEcu3KT2ZEdFxsLYWDG6zEx6qsE64Dhc7yAmUh2Rc",
  "key45": "2EGvbwYYmb7D5fhgSdGkR9yUbowf3uhqibdNvZth1mWriFR3M1JnfFQNR5ND9s2b6hevYsciK5rbtwEezAvq4qbL",
  "key46": "37gJbVbxCp9K9XCnVrB8m2WuAj9QSSjEb9YB4kKVirpHs1iZML5KYwQJPu9G2TZ56svETgAgGZaRrvCJKVEzkn2h"
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
