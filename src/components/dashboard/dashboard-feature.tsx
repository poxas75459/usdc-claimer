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
    "rHPGPybXwR8NyvGyAD6g65zwsMPFmTb352LzkaRhh56xFQGyCgBErH2FVS6G7YwktZDCCPxrajZxny1Ca86awMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNByENxNPYPjSNJRpXjzxZdSx7YKbrY5oeCKBN5Zr67QagVYovDJiewGaqJuG32kiHeoDZsgt9PRQfqQBo6hxJY",
  "key1": "2Vq7X3CpGrdatT3iHVmQMnf2rP6SsmJT2g5mWqkYJ9XdqDpeMeEWeiCLJmYSS98ctAeM2gwaz3qRs3vv6bHnvY7r",
  "key2": "2LtqRGepfNfMuGY6UEfw72AbWVtU1qEFzLUey2zs9yFt1wVP6rdQkX4SbrMVMPcM5HnoihtnzejFf1WSRSMdcp9e",
  "key3": "3Z6jNw2CSG8DdCYyXVTpRqx162YnQ17AFEDocSB8giY6y12hCJQCMX2ecriHdvgj6H1BDg2Ej78AizJ8qw4o2vSy",
  "key4": "64CoUwxPJHHzt8suk35cwy7bxBomt9rjw66fjjh48DxNqe6z5AuvQNJ8aiHJWF4pe85uQvFVSUSdK9ymQTPjTWjR",
  "key5": "4ACXBp4CPNda6wbwbKB6n32Eoca2whTkAheN5i7DcgfvdJGRQwym1rGdvHky3xztK8wF76XsS4PBMS87mhbC6fpF",
  "key6": "3VHWKCTumUKuteK68UqZ9UfKxDTJEiQhV6LLhfdty9xwFKvejjtD68AbYcfEvHjTi5ioH6VeuatrjHgwJCmWnmka",
  "key7": "4uH8m7uUYmfKWTJ9nSHF1M1AxJsR7L5p82YCy7mRUhAyLwAM9USTexEdu36QW1AVxraYGF39HMzzAVFARvr24jLu",
  "key8": "otTnDq2jEtyqVx4LPg2FpsUpWYRKosNLiBGWyaGAgDCTJjfrxmwhwKpegQgFGBz27XKK4bzUTYbPSdFRLht7iXf",
  "key9": "btL3cAWqBjXhsmHxhnP4qFZek7khnJuTwMZZpZkQPkNeVus7GJfNaL8R7hHRH85JDLZYg92arWqad4LGYzYfPpq",
  "key10": "5Zrab1TrbjyCLYpNQCVL2tbCYdCKeqn2yDbnNaAdULA6wZZ5gEcA9ec77L5beAvFFXEvvckE3EQ83oLQ9rVA7CJ5",
  "key11": "5oPT4WnGqZMx42qD4UCaJfe6omikytTLoHnB2HWi1ZHNraC1AdBSsu3Zkjj4kj8Js2cy1NDwTWv7YSFcQsBwp35W",
  "key12": "2vUuCNrM3iBRPbKccftqtEHUJtNRHtWFbt4JhixCA8saJ4C8MUTGy7z2D5Ni5jPQAxPsh9QfsBViukHcq2FkwLDB",
  "key13": "2T3A79bCJXJuX277EMDvTwUSdoLt4VuMhUdgCLmqhBpG3xCSUmu8T7oaA1CnNS5VDCzAYQbgo2rKTDJLGk8qmg2C",
  "key14": "2iCWDKdRMz4onxASDMncZEY5UtLQ3wmD3sA689uq6Sq7Q5BuLWkXgTMkEdJrxfo54nyag56fSKD3nNhHywi654y1",
  "key15": "3dwk6ZTsaSMcNhcnsoeNmcVTcHySHqHAaEVqPDZSq3F3zKtPpFnpezrBTCHz6CjZfC1525sNcayZky357F7XXkHP",
  "key16": "2ZfVtPEJJ9zjdeS2fvJnzb5ewQtdr6VHFCRgyfH4pSuN31ote1vhkdgiUS8xPM6DetFMFtzfMvXvNcnhLgGKJNeB",
  "key17": "bjNchNgr67F5mnbJULCapjPqz2BP6j4ojRpacZpx5Vg2Vhb7BQzWUnnN8hdqzahxxQ5YsRubrRVWoNFrnfaTp1g",
  "key18": "32puzkiVXzw3NfiQ7ykugiGxZjwF2Ead4qJRgSiSiW5uvAahyS28YAqqZPGGZyaicmBqfgPQdSwhsqT8tVeRM67u",
  "key19": "5RG7m2VN6vVjjsHTNFuZERzEXXT3GpDXdWTMjPD6w8HVoj8H7u8mncRr7qoPSr2LRaTVCZ8FCMmDuNnuFGB6EG5Q",
  "key20": "3qyMsQk1DdEdLuijL2Q9CpufsFrGRBmfe2s9dk3e64Kim6ekE6imUCWRvaNWNtYUmoxjV38JBMeoUTpYFDxnFmpp",
  "key21": "2SwHCLakh6vMTBwaQnpR358pgbKfwpSSjVNBwA88ZdUpLorihtAFJZ5BSd5NsQd9ogK6RhqirReuTaZSX3AmE5WM",
  "key22": "5CE7xcENkAMudFeuzp9XTNjnH9Ta2zzzgqTacAqT5djyCMh6oeYWHia5y3qs9xnPPg7UDHGK7pccjNa8UuHrVwuq",
  "key23": "58pS6qU9cnEtQgXJtxCuwGXh9gPaK7efHwYqPyoTjs6EUD9Z8N3xy3SDV5Emop5UJHdQsZFPnSCS3nzJ5nEpZsTB",
  "key24": "3tacA93RHn5uoWqPmNAjTntzFGXXMXVXDpktpjfKZyCVWLZs7uA1x5rNsdmKfz21XjkkRBwM7sXQgmKzcCBwTwoc",
  "key25": "2v8jW88a8qJgN7CTeqEQzsnQXMcZV6zkimCnHXwUT1VWDqDEY14M5zeHcaPrU69t6YwhAPQonAzEkMW1MnMw69Qz",
  "key26": "RfJad36W4tzLCQ1GYpcPHQLVfhmLz1RgM6i8Neo7YPsjpxdHUSvPZqkBBhZ3keputtqoxDaBHUKBvC4T7HKqh9L",
  "key27": "TA1RW6Xc4qrSTbMpiHE3S8SXLS93beuyno249SeLcDw7keP716G6DxxS5WLbGUfYuDJTBYRuC9JwAD9LuMbM1je",
  "key28": "22ekEXeKsqbvDj9fVDTkoixX2U7m2GzkQXvdqJME7QtygmXq5ArytYmzr23YGKyKWPv5o26xHhw5W7yYtFNWJRN3",
  "key29": "qWdjo6co957q2XMMf5SBoU8qYcRnun8bxRNfrbSCnUGMBFNHESvV6dHQR1BMagSBoCGntVTmicJSC8R2s9S6J3S",
  "key30": "47VcxpB62BX2h6gA1nuf5hKU2rs4jPyNpuwaCD9zP1m6nh264S6yBXVEcC7GRMDBzRE3vQZhUVFLvVJQLAkcsKmn",
  "key31": "5SY8Ycq9NwqzSqzPWEcAtDoJX2D9Ez7gpE6rNAoLTQYBbKZ7ZxppRExPExv7UJW85GScVPngvxqQRvLVeoUP85o8",
  "key32": "2KgVNCFucMyxHa4hXm3FNi7xmWjvaZ1y8iLUd3GkgRMLPeUHnj3Cw1TQDymtfPTR6WzbCpr9SbmFgdVvTVDRg7Bq",
  "key33": "4hh2Yzv2WamBRzWv27LhdTgEyTr74vsC7rC3o75bdCg3p9qXzDiN6p2V1eDZvF3vWoQ44KHsrQEYBErKrw7KEiXU",
  "key34": "5YdT1x3Qf43Fk6WF7NiZwuZn6w4ERh7dW7pt8mjpcApH75VLDnx4y4FU115zmkfqcW6cnpWcWZuMKLKJ5fs9Gy5F",
  "key35": "41FANL6Fk3wqSPUWemQcuPtuYULMHhh6UiXP9ojyWgLf4azp4Ek9pi9nP57JwYW6FS2kKyVwzCZ2J2gwMKKZMia",
  "key36": "2UUCPnrBDrbEc85Bm4x31Giq66v4nXeezaJVvAgwDnoCRRhdNvEyc6Yv5KUKiRrenzAmtj553wT5sn8LPyUWaeBi",
  "key37": "5vbNiCMKvxKxyjYzsLiAUZnpugBXuURtVBMzAiTRh2F7puhX8jGZvJaCwjWQj22huiEpjwr6GSCrahdgFxXtX6PK",
  "key38": "FsrrhiY2BeKH9kfgqf5Z1kd1Z5rdJzmFXMgAkRGPCDFzXdK4AxHvy4xP3RhdiEKtuAbYYbtdzGthT22vHLW7XtP",
  "key39": "2fP6XAbBMn6gBg31VFnUf5Uo2AgQKdUHtVVLTfEy2g81ZfT8vaYpPUhd9YNSYrGTfr51etLpUH4B82pwRNHXfgBp",
  "key40": "u3fWRkREti1oZCm1k5py24yWo9Aeg3yzbyqfUgiRhewGj9RWWZHeN8XuEDcvYMjj4tseeHCrgKUJmRPb8Q1mv1q",
  "key41": "qEmuG87xnt8NLu42aiEY2v7rv3rSYeudoEa2XpGdNyiR4xEvWXtWXbByWLSAsU8md8f8pRjVpxhLBES4eGSF4sZ",
  "key42": "4dWRRb1xKDPCZGa34zCXbHmgJgaX2AZg6xmnKL1vweM8wKjzuRy8BUDu8Z5E7r9tXLmngz7DVGSwNBeKTyoDFvMu",
  "key43": "3myGMne38jQsDbwJ61qBhT3EWbbwWnehbuYGBGtNHbfqddZFwvoHuGLGi4riUTQpzfUMppyBjLhJsKbVNxmJVwwk",
  "key44": "5GFyCFa2uK8ihXAsSUtpwJfqDYTFt3rRkZmVsda4phVLRiEeAShjYo1jQSYwV2e1MPZH1x8k8Ko8FWGQYYxeL5X1",
  "key45": "4ooPdN2Yj5TWKezSGt4ZX7yWH7b4s89LKy5W6iodQoN7eTeY7adGKQv8E1nULDPVvLUEtdwejZFzUqMozd2dYhNE",
  "key46": "5k5P8SNXaVWfguXjimcgfBXeRP6bVtKXsVJyFXM5A4gWrWm8dfwNZWSYWfAbwrBct79ezCpKBmnYZRV8QFkopPdY"
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
