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
    "5Fku5DFjcdk1LjW6JRM5YakX5joTZrhUabMdG8xHpymzi7BadAF2we2us8A7kUbWkab3hmDERcgi2LtV54rePqCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MecmLUqN5NauKwhngWucu3DD3m6XLnJhTaL8vbUvAGxkqz1tSqK63YUHtF888c5MQSGsHFKoBVFV6GxUQpjjZy",
  "key1": "4hZ99aLCk71F1xcaFYuQdZjqvAZknsx7Xjh3VjywejmjqgkKxgd77xJPLg1hkNfsFzkR1cEKsGSZrhH6GovFPHkN",
  "key2": "3GkD9giwRmm4DHHiePx17vym9G1Syy75pX8iZ7A6QE3HE6xccgk3Kw4vpi5vFwDAGeMh4Ed2dxQJ7yjaVQo4kAAc",
  "key3": "57hWdqYnWGH3TLkP2DrXkotv9Z9PRFfnHdTc463HJ616uUHeAAErZKGgWAKRrVLstxezkeGizQxUECofBDWAJEFp",
  "key4": "44Fz39LJDG8zqsLfPAxdZfCQD9NrMaaJEP4U7Rmu3DzHQoN2ADy8noAnpo55gHs3h4ak5tfa3VSPyKLQBrpi5t6a",
  "key5": "4G1jobTq4U2dYkKBxJUoef7uFdk6qhHCodJZr9Fj71MuBtYmW9uNn6TQGf9e6JzMdbhKdPAN1MoEFaPiJJFXy8XP",
  "key6": "2ejQArADHmD8iGAp8DsdS7k52jY62Pq8zjZkUdBpnzMgDuf2NqnSUnLi9z2rvGgkAfbGiorscGtjMmUuvSKdRJdz",
  "key7": "4QNqvBG6rds2v3vGwUBhE4p61VZbmFc1xUsBiuC8DDUXnboEQhZ6ozQWF8yTPCPhoiWcspf8bo3SQF87gp54Jf61",
  "key8": "3LeusEMAPuMEZbe8mkAJo658QJMs95ys9B9C2jrLoA9yhMEFZqVFAHBE8YgLAQnyxNgvDScYnpCj1An33162HZvq",
  "key9": "5MnzC9dSY7BQ7yrLZfqLPGFw4RBamNzKJqZi235uR8eHD38VSkG4FqY6AVEs5kb7C3URkAGA879z6TDL7g1DHJDh",
  "key10": "5JTCzpTyNrBBNjD4PbKmp5q4qLSPfXTC3m8RWxjFuL5LkyoYP69KCTsLKsWAgis6zkbv5ZeUhR5GhzoWoG5yxUZb",
  "key11": "2KGigvGoEccYAZZ3M4CiZyTTGhfa54t3RGnRAza9R8JArcu6ZdhqhgzHoG3XjuTzjMckRSGf6C2sw81Vx5CnPrko",
  "key12": "23Vj7kBcxv2gwJphUEmEmT8QcGcceefX7RyMpHS6MMKxM5Np5o9qxKpAtVosTzn363zYL7fUkZPgMwWxuxK8NnyM",
  "key13": "3nWm6WUrHFyhVhseQ8eiKucYGysJEhNUp7vPDUwBWtX3UVXjHj2JXfy9PeVE8g67MbWtgY3UNJqza8F28dVr4QU5",
  "key14": "43pvBkeQmpW15Ka8JnPYXEMzqk92affkDU1v4y8oT8FZe61enNackZEmMQpXwnUt2fsLyJKXaCPEL16K68wyvqNL",
  "key15": "2zVhsYk9tbkkgPSTSRek1JAXAto3AuhwV2YAtxHf3TNvEAEbQ5Vej1tfDZR2HvhyRVrYJsfLbssKQC8Tt2FHtwRS",
  "key16": "4PV5TPmdbJTtUTatsjs4szibddX7FKN6DB4aTdK62emW5zSq4ncN1e2izwGVAFhpbRpo9b4w2ZfP3D2xBqQCMJqV",
  "key17": "k6g5Ezgb2Ty2ESgiBJ9T9WTEwCAeAzsUTxhQzXvXcYo1xnhF3vg9buyTGurRYqBjDSFj38i3VoGAgq4kL8yZiax",
  "key18": "28JiADWgDbAsE8ZHgPoJ1eD77p4BkwNFeL5Xv5SdYKToeWphBaAXPwNcmnfoFduh4tL595T4Ck368V8Ljy7FMvUs",
  "key19": "39BY38c83p2VoqnLNVHh5EHpRw541YadHF5UeLuQpPwqH5chwhywwyucUXeDGeUu8V75AMRcYyDyLQv46T6sr5uh",
  "key20": "7tmD6UrQZzzDEzvryLcHaTKLGEKqstWLNiTYfefzXTqF892235KLyZ5BWTc4X2xgGt83t6ZkdMqdKLpk9a1piH7",
  "key21": "hBdF6TkeDRdRHE4gnq4vg8PiDyCWEy29EY6dYJBJ5Q1BtDUeDKE1i1sz5ZFucbFkB8WsZsUTfcovDfV9wxuPTL9",
  "key22": "4FSJPyVBbfCHW6Q3eaeuRT1R8NVMsadxYbZT9MoC1HgXuQWzNaMHeH3CzokUfmUUtreRbdroM3tPLFEK8SYaSeyi",
  "key23": "62EAQXqN2JVPZtQcfdixLm846U6cE4VKKUSnXjQEBrDGnt3tw13Sg5QbDPtqYFbGnMsTcwNi8MxvvkDufsmhYRmP",
  "key24": "2eZQ8mMUeQtXokWvrEGNZKcWmBmYuhhhuTZa13RvX9kqBc6oSWdK62DSYEKUV6UGg2iegM3jeeQDu7NhafHYoszb",
  "key25": "2CWPg2ijme6aQdzXpVURdd4KYSh7BGBTfXfHP5m8QC1ypWRRPbXMpjgsw8DUAwnuJrmWFAnWtzgybQdtnSM7aExu",
  "key26": "2WJChs5UJnVp6z3pMBr3tUWCCRyNdb2RR3xG6Td4fsp1SeCxskKDJDdu1RcimBLohqNXGWiqm6aByvndpghnVXCm",
  "key27": "5sPcSFTRvthCsWhaaAzVUX88muXSb87LY5nAoC1RuWEVerzcknJB2dSaQ2JuarE7mv2nKBCyQHTQ4XS5N7a5MdW5",
  "key28": "4JMXp6aNxvxBA6mQ6p5synGSPSnLwDVKBa2FCDrBLsC5GnJ4YgCAyyJ5YN7jTAQ4XvfGRvcCJLV2yJgXyZCQ9Pie",
  "key29": "4DxqpWj4KR6JM7NWSUEWFER1HPMyP1Krs2zJ19WFHohuxQzfH3zzSrx1oR8nkpQ6sovrm38VudyNSgMULVuFPpBA",
  "key30": "5eD6MEoesK3P2y5Zx9BsvNHfDz6LzJqq2rKvjMre383fxmaTHoaJjgtzNX92eUkusm7ZR1maQwTWJZpTRui8mQvF",
  "key31": "P5DUNrdT1EmGjTXWsB8532q5TV26pdSC97JZQaZzpedJHLX4pXbHNoj2PY5cedFaNkmfSMtDHQEeJhgxHjWHVfm",
  "key32": "4151VFFhe2zyqQRkMuu3D1McNV85pVXbvGGZqBVoBRb4iYzbQqRvseyg7x5tJ4Upmt89m4EU2kkFLd5mDjeEVqRi",
  "key33": "2rDt7GLXf9AysuWMbpjnEKFic4WwZjWxSedrXgaA8FXi7GmBujAXeL5ns2rHzhsJ6kwbR2TL9Py8qXmPWnw2Mb2d",
  "key34": "nopnU677Y4rxBzDXUL8FAWfTzyZcJLkc7wtuXauCnYnz1CaLgpSPLnPTswV7MUkeedYq9nu39JsAf9wRbgqKC27",
  "key35": "4qgyLzuwVzoc7vnB1n1BrxQjW6giShS7sHw7pLZhervARwsRjwFcDXNGtLmk1TN1r5fDvQDhidqvWtcm5toBwUfy",
  "key36": "4tQmWhXShAnfkutuvzXAo5xg7irUgjNqnLshj2CQ2jWQNEmY1ChqKruzgvpJkshbugXJ75iGtBcoE1rEhHzqvvmg",
  "key37": "3AmUpEb5PFQ93zt2xyzSccjSsz3tEBP9FuseMaFbJK467hMrWp7HAdGNn9x4wbqARTyiMAXih1HCyfrahKLb9WHG",
  "key38": "3bFZcTdYmJDew4rCAGUvERQqG1sHWgn9bDsGVQQnA2u5WhGRdGpKGkRHLAixndBHzew8FvVkXJQPx4jGo5xQMRBp"
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
