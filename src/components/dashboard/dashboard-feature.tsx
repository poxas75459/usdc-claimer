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
    "2hzwg4E8ExCiZMcLUC5S9P4tFdq8HnAAUd9v85grGKSX8N32isWep5f9ECVmpZLfLNHDzqSzxYqLMzzcNLG3CG4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxRLdiE8j3ioDB65YpFQ2LP7PWhHfp7U6faF6ATgMBVUbdLHUTVD5aMDbB31k1ZVYnpQJ2iagYisCo8wepd4EjC",
  "key1": "EDjJ6VQsnsoUbBKAA6BRjf4LHmg3Lv7pZygtqajTnDf4zGqSaopmfXNAwKsxMUtcMdUPDsmtrUvMG8TudXZs2eK",
  "key2": "4y8kfJ4sXLdqzjr77FMXRrzEy2dCwmE773wXzeYxEjRHpj1xTYeDeTKUEGzu8BndLxFeTWanzUiJHC1LfbkAW7Xh",
  "key3": "4evshRMuihiWnsdxSC3UZPQrAD4K4oCppUpNa3LHC4QAqgkzXAPvvswWXWaMBPDkcESzoaYgz3EaaE25R64VEMFi",
  "key4": "2jfjZ9qGouejiraMPmBKR4BvBqEx8jZEgziw7JkDrYcffypGyZWKok4fpzdn9b8J7bG6nHC6wNAjM71fQB2qfTWj",
  "key5": "4GEcMRqn7c1VoCUAsEZCMdWSnYJETBxP8tQZzv4XrcyRthGvbTmJmZmQ82JP5y4jfAFq6PPNMfnbiQ6XEcd2DnjL",
  "key6": "yhVGUj4VN19B6qCBVJVTMc26rU6vXaNFuVUH3Me85J3wSmRsdi37oucizfnw3jFtm85E4TEVeozFTGW82TmwVkG",
  "key7": "3bLoKryTWo9FnVyeX7SU2EVLLfipeKgNT1adiUuzFrC2fYybjAUAxLC9UYxGiieTCt74yAMazXeR8VyN31h6wDhj",
  "key8": "66BPqzziLq7bBcnyvn8yQf4sW4CZh4DPd46ZTwa96oDgPuZm9fRvm1m4HccFVnKDqTAiicdM6yXyoegqE55BFvQ3",
  "key9": "44r3CD4vQyYYUhLhfT7BevRBtVs97smvWkjPkcUskYz8PeGbz3SRFskoURiQLUwB2wwGb42sFuJevfCY519WAUZe",
  "key10": "HPD8epnaA2EvRmrBPAbfB2tnFHPYNrf2g1gQXGcPt2WyqRbmFn8EAJaBaNdkepYGXYXgyi3BpyAJyGefMtRtNGh",
  "key11": "4JfMVHHQdMtoQ6fXcSwPnYCQzhf12LveJ8C3LZrA5R8k4f1LfrjPXUi2t4CLwJNSWqBTXzRiWrEJ3b3dq28E4wRT",
  "key12": "36aYKeWWjxEaArwWgFKZrEH7psapXzongQgfpcRpAdcRXdpmy6FSdU1yDJricR9yHDxFsxffgzBSu55NqdiuuJa6",
  "key13": "4ZwkzMLudLmDEDqSFzPvuveRVzsD2oet2DdVpymJrUkgQVTYPzpnLQzsgpZ6bpLJrrEzDSgNDWb351MDAsYgEcdU",
  "key14": "3RyAf3impy4Si37fm3JiVeoTyg5MhF7dsT27xDKGZrE9s9N4nndcV75tMpEY29rFd3DCcG3KBknyewMxFvgMDvrw",
  "key15": "CDjJbtesmwxoTwVYD745uZdvQqk2KciMNwKC2GXmXKSA5NbYfzvkkQ8tkcvzLsrKC5cNf95rv2U6zdzmJ7Qdr3r",
  "key16": "3QovVEhDJ3mNEHYfgrvvFbTwLZbLYS9F493BHvNGKEkrK47f74bQf3rZV9B9vuBQcJ6DTQcsjadqqEUqARugJAfh",
  "key17": "oSdJu8fJ8GCZuqU4rGcrSkjxSssVimP9F5BYsxjEo2PDRtZb7Tdp1BGUFDJ2r7GTrkyNH3shivLfzjndNWYZQTB",
  "key18": "5rTH3hzGxtWe5gVf5ApPSzvvmxEQXwg4XmENerRhvKGXwLHUTv66n4DFXBnZpA5FkDJncd41DosgRY5UgwJLLYLL",
  "key19": "2sxZS8ivQSKXnkqEkZ1mZPBCVoyhGVntX7M1zCPesVTFdFkHhCBN2TDXLrwn3UdtmfDzmgo6jTqPmA5uGPiyhQGE",
  "key20": "4vMUfzv4dLzeywdHJszJWAZtrxNw3vK1yzd7SJesw2nxTwJLUK2NZMxuqRxwVbH9egtib2vi481w6zGmsqtpbVt5",
  "key21": "5FJV2rQktFjhfwyzpZx4zGGzQaSYDsvwaRmjeNdS1QvUcga8dq8KQodK3j5cnoqbBEBbCZveNgEAfgZzEnCSXS94",
  "key22": "5mfr9rUdpiknpDdz69F7WUXW4UpWcBBHvkacMhPzeSkvuDobQwcpWZyKzKr31h9voEMLi4k5p6rZ7d5SKcjVdL77",
  "key23": "yxMTMDaVn2vBqfiNptYmvsc8DsNNZyPRqrLdFCDaySgvUpe5GorrvVqk9gmd9CznXCJrdr3UEPutouZGeyARp9v",
  "key24": "3tPoRSwLYXtPbPaT32vCL6SYfwRQY6GA5y9gb8cuSvWn3dBVVMMHi8eHHbiU562xocbkbcqNqDgyh6AdnYykwMak",
  "key25": "aRxBirZPpumtJnRRkCt27boLJz9jLTBqPrXeraxPtwpttvaBGTbiZiLi7MqxG5RmVgxmTViGyfr3U83xFS8dEK6",
  "key26": "54phkLUeWKjur6C5ZmQopZ8n78eP1LFE3DwZywoYZJ8TYqHj1VM6zPdZL9KFvdCY2fvcV86PtFmZ3hbmpHRGLCFu",
  "key27": "2GWpy314dyeMYxSdjLAkmwXy63jbj8reKLUYittTQy7gjcD8e47b6FpJ4x2XoNKP1hSPpmGbbECWVr3SsaehM22X",
  "key28": "2KNWAJxDmqWXUhfGDX65zNK24NtHdj3Hv9TjfC7xNSnbGHcEQ7ZLLyaQYgAZu5HhYaBFsTg4b7wt9gYxdaW4Sbi8",
  "key29": "eY3TqJuiznXSw9WQJDHzpoSdq6KHdUTC41j7oNTUQY7uWJf2rYhCxbJ6Sw2uaispSMFug8jeKQ7qgWjRh5mHpb4",
  "key30": "3ggyJ1eZbCnMxnZoD6Bb34mwqENdLuTujXRJY1hw8Xaivf1nRqTQDJsDFEuYqdKYSzoA9TMeE1Kv1mwMpMP41yLd",
  "key31": "4R3UcS6u3hxumfXNCxtWRaL1rHLXvt9CDXdA7aiZ4vzdeVSnKTP4LHhH3KGxmZ8uzz7B9mFBf3fTeuuNRa254g87",
  "key32": "5vMS3HU2irJEsryTRqrg4duYo95UY1MA2xSu4Tbh1HheJcjhKmCe3wJTLkvCNLfBAewJiXtfBgbqTedmpj5CaR1v",
  "key33": "AwHB6ce94u7McfWWwgmWmK23RSir3sUWuvWVMYTxeNDmVcPyiM1oq2hRjv8Do84op1joWgGA2zTiYPZapUcDMuC",
  "key34": "qgTv9kshkqb37xHUbiycH22WUfRYFC58eCeAZtRS3BH7fZfFJFy737zEt672jgEMRKeLc8R19bwVaYGfQY5XTmm",
  "key35": "t1KTMCYRKeQgbzwjLm6tYYV1iHLxCFnKWfmJpYLBnH2w4KXE8z5vM1JQLA67yW5WHyFXD8n4Q6Bn2f76T4EcrAQ",
  "key36": "2gjb4uKY8guEdvvbQmBUBWrhjwuivfkiNPvMiuCzqhKnerEKomex6RvEx8ATBXqBPwstCYmCcFnGXn3kEGtq9tuH",
  "key37": "4dnorMRFg8pAsFJigs9oDbiC8JaqefQgku365KwG92ey58BgR1e7hA6amEosvFCtn2HYPpYnSf9RZ4bdpPVN2sRT",
  "key38": "3FmiwiYMARUmzFeWaecGerwz6j3qt9H7srhe2Q1TnfCDoAcotszWFxamQusGBAoKsDdSwSKV6tBwducEhy5jbopG",
  "key39": "45qdn9JRkiWmb7wxvypudrd4rEtEEPYt23TA6NJ947uoqs3fzNs7YxyxmF5Yr2YqY27HajFXUqx3aKUsKpraaQD3",
  "key40": "364gqmo8HuJYJ9z7L7bGYCVsBeii6XWdcq9RMS2nQU4pzEGaE6FT7gQSr6JmWizk9xXd7tzsKdx2j8hGXpxVcDHA",
  "key41": "4RJA3ma6f3a81VWDaWZgnxWStckynJcQGAQTCB2sCKjCgfEnnvVMz7Nb7jBucvS4n9U8xrucWNeugBftyAjvBraT",
  "key42": "34xzcvcie1CTni8Ldb4rU8tqtPd4RAqhZ4J3VsKt7DSLSN566a1idnZFZzN3cCUGM6DDXQpXQ21f8zNUZzr5XFuc",
  "key43": "3QvJGAEZaMuiYAi8qV5RV5vSqwkY3FshncYMkKfg7d4qLgaoGHcQ4A7jT5U7kJiYdMPrdJFZ9L2AbcjnoMEb3fYP",
  "key44": "4UXUihTPrbr53s4omR92YiGecJpxS4nM8aFDaJeD1Rr4Ln5bswLm8Fmgqf13JNZGyQpCYYeFM4NipVaf1qbHfE5t"
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
