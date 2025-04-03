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
    "4JbwB5YeYjAYdE7btbUSYa4r5Lih2LnDqqXAwVap9Tzf3b4yLLLZ1dzkJo45zBwZC4mDJmQnVz131baJimg7iota"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kq9mu22dJRXQ7K4jzL6abGrwijS4157BQwKU2Hc89ZL4LUTDDe5FYAJsn4jawEzyJa6X39noR7prJQsCgCa7q1h",
  "key1": "S7vrtBJ7xLxx9aq2Qq2LPZLQgkx7hPaQqeoV8RCsuG3XwVnVFid9eqigwmjc5gmY6mBPCSjptMnZPP7pXwYsN5A",
  "key2": "5hRiQEAJRFA9XPS5iEuiwJxYFgkhXJSLTLjiPnkJ4wU8bL86GyoSuWRcWzxLorAoAjh1tEoGy3EJiQ3MBMeE5h5Y",
  "key3": "2RFwXttJrDrQXWYdWzxESBN66GLD8vzinj7HhP1DFR88YPuwALyyUsuxxF1MUTq6vfdApwpacqpLnQExZkBofPsC",
  "key4": "3TNHaNbF4cwxGRb3hYHE65LUX35eeeULgS5CUYwwgE1GjQYfpay7tMswLZ9FdS22UDnjzLCnRHLzuftv6t9zfmMh",
  "key5": "4YsW59E4LdXVBf2Aa3QjPNRn5PgNgffDyTaBDNk57egpcVfoWD1XbQuy8igux7SgnrGuVvFb3QFqh6zD6dg59KKG",
  "key6": "26B9sqM6fbur6DNHUDbcauuLfReNeF25j1gDo9y8jiV325K7VvP3h8pAoDDCsCNA2WSMH5sPR12MeP6NoqqYKvP8",
  "key7": "2C6TPxs2j4JnKy7sUV3wBp6qXLdjiuDu4Hg83JMXaj4TSZK2pC7AVNPKT8oPoxcrAQEFFoUedXikgy8yBpmUGoqM",
  "key8": "3bDHHcDqCeqjcRLCB4etqppzNLt8RHjkkDGXvafPkJUKuXAgAxkqrnejuYcAFZjHxmmBvsPPzTYNb4fkXwNtyBBt",
  "key9": "4sLuX7s3YrSFbWTVMLNVKLw9s3BYkgzrEAkU91aZx2fMPGQYiZcDLe4RDotXeiWN2wEavMfxgEiVZ4Ze5kzFYDuj",
  "key10": "2uBdq48XugygyL45YAcK7DGaKShjA28ExgppqDSVJzcJ4vdza28XsKztfoQ1kc7YVfSRofbQ3T1A3fAnuW5igrA6",
  "key11": "2mmCArihdVLnmTFZ6XmJWtPZgvsyLiSuYVWDKH7VrydnVzrFF3xaHcnNKCazy4pGQ1p1Pfm7sdWgpCQpwLW6WYPY",
  "key12": "2kzT4nzXr3B4nezzTrPoq6WaZr8ZUi1b9FobzgrwY9jTfw3D4tPPxs63RvnQtt9S3GiXoXqNqPKAatZ3KKoeu367",
  "key13": "3NBCgKqfriS4P2wtG9MqhxWjbQrpcCydAy1ddPDJMDT7h4G1LBoiuDuNoCcoYRv4GajmXXEACRNddNNnz2UZCrbA",
  "key14": "5BPmV6EceqTEnjV5T7SxmfjMtfaohTHW3Y3b3FZAYVvpVCw8XNhZoccgTr2R9vQFBWWL2e1mSRow8GdiMrKfc1kp",
  "key15": "3AnPgVQt7S3hAcMVvsbjfH4KJjAbs9HMCqznSUUbvtCNBrXwDWRMyX7dkKDrbbaH1h3MPjfja86dAwVtLndmr5Pp",
  "key16": "Lmq9xTmH7nbf3nkJ1nr1hHBnU4PMvtuhhCDicJntjc9bGxLzxJfydLgafqDV5tXJiShcAMYP71gvh8PKSJm87pY",
  "key17": "57cBBXgzBJ9s1ZFyA3XYt5GmMVaSZ1DwWjL7mGNhNDaVBnP2DhfwJdRyxkL8625Xc3Ukx7kGBB5YoAgQ2d2E19EU",
  "key18": "44YTuT3PhLDcaMuFJcC56vY19wpN5s62WgVTW5Whkv3aVJ49FxdGyUGzy81fhMHjz6sSR54vffTTYy9D738Pvm6",
  "key19": "3KRz8n2FtfEJZnmccfm9Co8ac9mdz5CqffhBnjkKvgAfE9dJiwrpEo8AqNig8rnoE9q3YTivGNAm81m7DxYQz4LH",
  "key20": "5W2Z5NwW3cpygN3s5o7ycCvhkwGZheGgxtbx9i1jYnWJVQnEzmNUcePyVX87Z4JHNPrittZ5bkyRGU5M6Ax5X6J1",
  "key21": "ebuxpqysR9Xq6fzP8Cyk2CX9jtGe9m2xiZdtBkGgaZV7HNoiLKF39hQwdXhv72LVZkZtX7kpTjD54aFYYXyPz5Q",
  "key22": "2J8xkKrUaTGy9r4zPFQ4HzK1jBcdTYg4nRFABhQzJBJQkoDhpbZovyFbLCq4KW4VMQd1D3QJtkd8zV7AmUbZB3tZ",
  "key23": "33bkn8fRAyBi4UinnHKXfX5LoxpNvnFU1ZvMd2ns4Vfk7catQ8JDdXnKm8HVFfsb3Kor8kSRvxRFzrLVTZmavhh4",
  "key24": "4SSjDNunp8sUGUbbzcdcddw68HXHzS3tJFYFNVTfcxBKW9nUXKcLqwQxP311EhD8daRwbZGBkV7T8VbVSWDH4vp",
  "key25": "2iWK1GDiVgqjBDUCcc9fpDQ2Nquxgs4ZVyqqgvzPgFWJzbjWgsdzyQd9ZyivUmRjVPK1XJHGq5ktfkjiXuXeqPz9",
  "key26": "5UrgDTmUnkADzHoYhTLYtB3at7ZomYN38MScuQjmG7j7L38ANV9dBn4T1m7qghZJeqZvoxwtxkAbquwJM3W8fzfA",
  "key27": "5db5m5uoD6VUXC12MoRbrgp3utaKTWaaRepkWpbykWoi4YuRHad6Li5395MpqbUypUFENGh8gcLh2ANPpV6yoL1k",
  "key28": "3dwTUxu2QeVzfnrZKe5vh28RK3kkow3VcFPRb5oF3jr2X3qG4CGh54btq6gvaHUL39RgzHRSfzeU7ZLQZndEsCGj",
  "key29": "4jnhzeAn6RA4CeLFnPJhR1sUQG8mBDv9PEgTVEu2RraaHZjCyrdfVRNREcfvLSCtwdEdArHXnn6LZr5RkreqJ4iL",
  "key30": "3Jb3B3rJ9yumEjAkcpAgfxfL1QnpnQ1K8gBBkoz3m6y57BU34jR99zPSX6hNt86UqZyJayCQuG1gwKFzWBG8AncS",
  "key31": "R5BS51RGhvk8PQxJTr4CS9YifyL8fwAo3Qn9tHRo5LxJsTGCFr44qLYBSpEYRnYVNwzVyFRuGEc2bjyA6ho2x1v",
  "key32": "3rwiqg7CgZLrAw99e2PumXLcbWT4fkmFUDciupkGrNijPnr9FaVU2bjLpm76c5bKqmjMYB6RnwWnHdUB8RhvPfzs",
  "key33": "5bMmpV61NX6Go9tgpEe9s3Dm4Cj8wp5Eax7MHczAfaBRWLQoaw1iNjU3ZS3FGKYDySA7Zr1Zows12WWqhuQci4Xq",
  "key34": "4kpHBv21RxLAN23oQdKpMuLfTWzjtUpewAxzohzAXvCwkZ1tSLs5y1mdpp7EM7dKGdquXZKZELXM9Gxe6BjRwfFv",
  "key35": "5hEEPQ41asZfMKQtqvCoN79gXvcL275nLuoQ4D6rdYEPzW9PyLdpmfJWtBxWTVgD2n4Gmc7B8oVGETJHhMMjW4e3",
  "key36": "2gGe4tMfHNswdgyS4tTYZTHLRnE1QJZbTcuhewfUPtS6FA92Kh247eaRJgwjzAyGs25u55rqcYe1TgovCfMCdXFp",
  "key37": "4DWutETZt33TVfRjGrCvcHXxoYHU2jF77GFmuW7dNpYEucmpBsCd8CFm1rBjRGEVoDKFteRwZdvMUj6mbLrp8aie",
  "key38": "3Cp1Ne6DBeBqn9yfy9Yin4iegSMrT3XotHhuiiaVwyuYq6C4Hhe4DLus9QBgwwxqQBer9tc7gHCwkKh4jCKU4YPE",
  "key39": "3qFReGwQqWJ7uRWdeF8Hfg7Qrt2WMVpLckbXGs7MqgGs7h1Bhp2XZsZ9L8PDjHDB8U9VxLZYNZVUF5JQxTi4P3GT",
  "key40": "nhoK53NHDSMMkAdNZmPFY4Sf6KLFMtKzeoyGPvFL4w7vqH3q5DHVt7qbN77Fp24XJSq4HgDRWbicAwfKUXbrvyb",
  "key41": "2iq6vjpL1rRPaXgt5WRjc2dugJBWXEnGYeCh5397C2bGph5U2RHkFqc64BUpkAy8MQqm2DmwSyPXjn4pP4zmyFvp",
  "key42": "5RfJYxyAT5tXpSomqS8yJe9jHN6zuGzQmD495FLtHYNMBTPfxCXuo8oR1KHw2S73ZzFD4JqRqzFNoq5Ved9Kbc9b",
  "key43": "41s419sjbiUyTKYNmuWadE18jwvYb3EFLKhhgJ9D7Z4YGwg4bb1bxTFsomoWQSamJTxuJUGtyvPrT5sogwVAtzx6",
  "key44": "26sccdBr3xiJoTTq3sjUfhqYbZuigzdZMA2LLkrv3f4sZxKyqoYi9q1o14sL7bbiohM5if5BvRUqzT2AGfSXqNZ7",
  "key45": "5RWegqnmgUL96ichHEkF5bPZbjNzemNsTdvxoRnVrXNJfeR2o7Pk8Jg29geN1eu1Yq9MWSMYR8GLc7rTSRN8LTTD"
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
