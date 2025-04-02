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
    "3cR4QN6taMS2Rf9zsg8yHZPGDE5rdkECAfp9uBE1qD9snZ4ZEDSyHq55RUpon3aAbpUhknhajNo7wvNHamMAsoY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nHiMGGvjbzqGYdDjJ6yHj4DMBQmbK371fYJpFB5bQYk4h8akgh3kwVEMN55UzoFyZzbgi6VE2HYmkHsuenGLPsc",
  "key1": "2TXtgYTwHBwUDfFtFC46oWh49CLbmeEVBF3vP73P34snBP7ojvixArcFsdC1BRj41DGKAHS2Y2Ariq3et62d4KRh",
  "key2": "66Y4x51ouh7yuP3Pfo7JK4r79dvHvySXRMGEnSEunM81wEXXxjh883d7UFrof1JGW8rHaXapzRqdLCMXJZBCRMDh",
  "key3": "5BpQ1L435sQUCwT6xPSg7xmVxuQPqAnCMJe2VmfMrJatP7Q7uJTkGYQ6eU42DJSZeDvs1vEdFpzCtnc4hFmtXaj7",
  "key4": "3pfNJ6DuPwWbPrhXqSCNNQo9FfLLQ6fZFjKQwPkvBQenurddmybdPfBSYDmqSW1daQWHXhT31SDEAeCBPLnVR437",
  "key5": "5urrtJqTfWiVujaMLjKsuj1v9LuzJcFmcTrc7GWWW8MXTzUGMupu1khr4YKbT42DEoGzZGoKgfomoF8cycLfD3f4",
  "key6": "252ohgzYA5iwqk4Z7YjUADum7xTsX8bGaM4ukTkW4LGs1as6fYqHbcgx6ie7v1B7c7qP42LJHeof9ZoCQ659Bsq7",
  "key7": "4dV1H8oTmtAntr8FqMGWJ6BCk5Dnxx4ZiqUbPP1w58DSYBmHyJxDCFkSpWRAcgpvF6oRNu9XYRppR6G6VYEdbk4P",
  "key8": "3VS9jTwiwMGPhsmd4praiwDcPbqbtTRwUKwJcC67g8PDKi4MW8Cr9x6h2jyr7DFLpMfoW1EhaEnhqwrP6hs7JyjF",
  "key9": "5TCF8bvrSN6bLRPa1baEUZKMya32okM9g99AAwr6ZmMxWZfKtUP59icyQ1rAmtSjKkhZAHkZRzgzH8jRUBte5CRo",
  "key10": "EjHA8nV3bAp1fAs7udy5tJRdoCc2VwnKz1CSbjsL7bo4PJ5xGdcaJL2YsLvXE1DrDSEfuuZbo7wZEsV2q4R2ERm",
  "key11": "tXx86th8gmudG2DY1y8k94Ya7osksLigMAPKhNEb2EyFUQeQW4RX28gGfdHS4H2BKqrRjaysBsQt9in2Wa6sbkP",
  "key12": "3hgruRwUbSKvwiiqaRZRAz6KdchXuRWyQUVxgFTuGCdZTQmZPaBzRtw3YEeoxFi9WfsZeGtnA4YrUM1SDtu55R2w",
  "key13": "4a7qKZ83wmuB4n9wChNH346qp8o7hnZwowdfKfhjMC7eoTijcCweNbD8o8tuEewYkYfyrsevUWXP4EXhAD1cnpJ1",
  "key14": "2fAomyKrtai7ykn351mSyYrELpEDqB6bT3qLkZY7Xq3rM7aifj4EeszQySvphNSWyWTdtNe74ia9LsXwjyphesWJ",
  "key15": "ihFbtfwmUUdNq9JuJJzAancmzkjb3nx1F8QY5kVGdftaH2oAcRhMLnLzBps4q6aUK1K3aBe6v4YF69Z19DNr1Um",
  "key16": "5PURkhyaSiaH3XbQFrWrp4QcJf4Jn2pr1E3xrFaRLadcQ3KMXt69W8i18J5RLoMfFGvKmS5VPfPkX8TmSwYpsiYv",
  "key17": "4S86efBgoCkUBozQvyDSe8kUkQrWfLptZfj9nexF43XcFmSH2vMb38kKLSqMnJKgu5uh7L1sifsNnfAxmQcjZEPd",
  "key18": "2ffqmnwVKkbNyYKgFfMU7gRaoZXr45w1hWoJCFmkf7tbY5MYynf46UaNS3eZhYg5pN9REhGV7ctAUpX5Xk3bkPaX",
  "key19": "3b11xJqnCKqH84ocircKRWmT2RjuVmrVFCfQdGySp7rfCxopMM8wzFznTaeK2AL8pkJUq3xiLmA2rKf8SJcw9s6R",
  "key20": "2ismH4V1gHJBYjLAN4paz965NFNMh2anU5z1yjmq8MWJUR1ZxGHdJ3EeDHFLA6GhjjyYZvNcYXu39eZ43MfLM5Dd",
  "key21": "3BE3mRt8Hs71BiB7Ch4k2rmwJ5iU2x2WtBkiysyZhk6iWNkkJNxjxnr6gaQPhPwynPeWUBX1FEsvdhXvUhS5TBta",
  "key22": "5xs8whZ7UTzCn3nEfZunhAkcyB49z6nJLMd8KQuqNnqSNAPckhfAK33ii2Afx2bMcWMkHwwzthhUChK52ZR9tQG4",
  "key23": "64JbWdnu2VCPi9US5gNXPJUVQeH1TzRT7Zwi78ov8XUicfG71tAD2w1FEfTKVkcE1GC94KrhmXhomasRrG7cawQY",
  "key24": "3gEGnQKhrFgXrCgRNvHT85QaEB8MhoZceNswzp4jvYwL5WegsXub9TcZZYGJrm3QjrCPJRRRJHFViZE13G38tEBi",
  "key25": "2agUqcT65GL2bkWUzpeq8p97TPG5pKQfmrmxYCptD3dFvvgtsTCq6ndTnUfH3YSrdkN31aqYskG2UugzSERiKX9C",
  "key26": "5CXTSBxnXLaamsjQezAabqq4xEZ4D4r9tWVDeMTyucFiuioYBAN6g6oxceXJj8pQLytHAEFiZeUR1sJYwCGD4zpq",
  "key27": "3t8JjBPstgrtboE8bJSCKhumQWtW429trhmC3PyXf5aDXyynGoA3s4mPnSop2qQ5rdGBaRkgC7s7htcQosAkHMxb",
  "key28": "6qCCtSk1hietupHhSst5YyBSMXdS8v9taSHDnWdagZ9hrR2dD6KLLjt2tm5F3oMttZgFWFwKUuP1TfTNQ7Prc2x",
  "key29": "2o7WWW8XRdYVPmfJjoSLhZ55Kt4Nxtd7r2Kw9Yb6yh5obUQAtoNL8kLEXZEYBBEqVqmY5EeqP46mHEqvFg4APvYg",
  "key30": "5XSXsa789iqpKV2ReYHsAFzY7MpkNhmex6uMrd3F4zNAUpNnGo39s8FPXGF63k3US7Uq3KnoBCxdVtzb8XcF8VzS",
  "key31": "BVJFU98WEtXmpsHqWZe1n7igaoNWw9H5Wn9BjJVkZGfSXBUWrQz8DHyytMcBhngMmFBV9gfaUaVDgxt23QhEibm",
  "key32": "2dQsGB1UVaPpZA7xmJX4kMuhqQ8Y8kZXh8w97XC8LZ6e29vocWUefzSRWBg6P92qsvmXV4RkVQnLBNqeSPwyM32Y",
  "key33": "vtGmEhyndxr6hMsn6mhciD1tRfpFWyE7LEaCiVxeQaioR8vVpaTAUZkGYWbWNNG8xtVbskKoEQGtaS7FxqFPWZy",
  "key34": "2wMz6xh6QkhXAsvpTu1qqR74coP3fUvtURwAhDyzhTXoBKUP12hbUbateSjctFxLpBraogHLaM8gmSujnnYikdfC",
  "key35": "3ECUU6GEQ2VLwnXt9cgqMVQQDsfAvEU5WXjFQoFS3eMAs64skFAagFtZnHbk1A7yhoZBf9R3b93ANA1prDVpPB5H",
  "key36": "5SsWfCQsigznQdGYAND4DnPSCPPrMtsvkcJQ5Y3gFccugPG8L3xx6ZnRNfscM3YLkGHo1sbU8wSjLXNW4G4UDhLk",
  "key37": "x3xepaMN3aQUgT366vJ7NjyagUFZUyS26rrZmQizpMFocTgm8Lr6bXf93mQthiBHbZD6Ag53zuZi6KSEyMHwXrm",
  "key38": "32aY8xco1c9iPfQPzZkx8rd39xUH7VbWkM5M3DTA2ZvwiDhYLgJSKqJGJfV4fHos2YLxCoHxEWYXcWP4ecTex3FN",
  "key39": "etHG8HkkW2x2iTk5BffTa1fMuAXpcFiHrcYPqnLyUJzeK3vXMeFyEPVB7K6EcS131dBVoTfg4YaxeuKSE2cV8tF",
  "key40": "2tpZ9ZP9ndeZoph9MrjtVAamXoXgXfh2oUkP7qpTSKXjpp4hVjXTk3jVvKTPAsQqJi28g6oWvbkF9gJijJWCzmyo",
  "key41": "ptGy2Wmkd1gXWTWiYB1tyzGRRJZM5dzmPM3788tt5wW7fcJq1cpGgVg4qxvcz9wmRqAk2KbeNb9BgxnDs4ezyX3",
  "key42": "2PCNwqHdw2W8LVD7qR75PxBsma6LDG3tj78Wpi2QGMHWkz7m6Y6EyaukkhLMnx3rag4cK3Ra23Ebq1ifzSF8b3ph",
  "key43": "5YwRuAn9EXdt4AMPymFFC17GjcQW3idB75EnAFmksmX9mQZEfNarxXyoLHVr1x8KmbMhvdaL5XcXAjs1yJZDCmW9",
  "key44": "4TnB5TGaLkdjcr64SboQkeeR8XtjPhoWTzRobSiEtfLjcnXCWVCzUd4FS7219njpsK3o3e5QxBmBzm17xocPRQe4",
  "key45": "9Qkk9Fuvgb3KPCWt2gghms5EbQPdc95ztnyrQbwgLQsqqHcY1H8QnUzHFHyD83pX6ZVp1J1bpc1hX3FC74kutBU",
  "key46": "4hnEyRpLjDQdvQMUHV1ggjY9XxokhyD3vc1GCVzqVXiKwSmPSr3RWU3NYaFBGc4nuMfwyf3ydkGDMmZ4HTHECQkE"
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
