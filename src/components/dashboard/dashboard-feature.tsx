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
    "3PdGJcFnuWd556U1pc3jLqy9yrmmjZBP5AL58eL2iqHqYpNLtGCAsNwM5uevbMcswLxYzdbVt9QRmTx1Mwk2Eqwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qs9d5zVoc1FSdrqhJzD2PLowtaBADaCUPx2fd2njXwJSMtpLKzqcPW5oMAAFeZb9gqSCiq8BT5FFsPYjnXQPRa",
  "key1": "5sHd35oKwDoFqJfMhKgwRoCBD1aV66RK33cumoRXNexYFetBDiG5sXFrrtFQfZrHmWvUQWiYqiVfwGXWjiQSTe1v",
  "key2": "2dQdG7sH6uWtKQvW3mq8Tq9gy7eeNszg9bkGf2nc7rRA1cRH9w8tCoBLNPEB59xtC3JnCXjojnF5U22LDxxs22w9",
  "key3": "654nuPyCiJsvsbKbv9Fnq9DGvkGUbZ2RGVnnA972doKhsNWfhCePpZ2HtZGPJp6eY4bHpB1oBwoQN6yrgJQrQgPd",
  "key4": "uiukRCjfQuM48xJUFZNgAKpmzZSC2yFj1HD5vNK82bpMnHGHEx3HAvMkxuaCjeFMAeSfyT7uKbobos89auParR9",
  "key5": "2rQSFzPq2EcuR4kwA8f3vvXLm1TRMyEwVAqtQXe8TaTEz9nNuFeM9ooVCcXxPiRZbBoKwVpUfbM4in5oKYPRNc31",
  "key6": "oq6u2MEyCzvbUq9RwLAEWFJpeowezWXctNHZst34p7Hy7ZijZosowrYK1Gck7BMWd2i5UpCFnZNj5TzwTYVTngr",
  "key7": "uaocu787srWwxMMkbYPPjhSWGwbnZgbTcd3zEAtL6dvb2FShK4u9grtbJiFpofZ6w335Vh6b8tZjyhWCVEvMHVM",
  "key8": "31BStZfQhf2qoxjHcSpq1N8GrS4VnsVVxDd8W2WWwSZvLrHiTV4oMURTMS6ghUdYQLpcDsLEZfdFHUDJkeVfRcpp",
  "key9": "4wPj71fKYehbJ8RRfaKbDaBvAVtv9rxo5t7r4zZgJZGxyNCVaKMYMnAn3KxecF26hxBe7sBmFsajsKntXaMd2wbs",
  "key10": "2uKHULMD1axDnoNueGePJV7U4YTLimpmtPuc4rgjKutCm5aCqwgk4tkG8V9uzk1j4iQjcU3PdJb6JXUnJzWZzyDn",
  "key11": "3cMseggGSuTqURBFb3bMeRLfyvtVv9Bbt6hfo9AG2bCuc5AJGPq3q2YHgVts1pvqAs1maLSxiczyi7feoahjvV3S",
  "key12": "21HciMZ52M6bnQ49ijVEZvS5QZgsz86fqohi4JY8bAT1j78aU6ZSm8yjNVaPuauH764dZxm7q33rYpwkdGMehb13",
  "key13": "6Q34ncduhdV27fvPXApgobfX79EwMGKMkY6vn3P931baAvTpU7e4oM7siVWkmsQDZD8LFUuUEpT3axnkPhFw8g2",
  "key14": "4mSgDc8dqm99qJno2wBSfR1uRxYggD8qLRH8FZhEiHSU7ejjivb8iuc75sGMgTFab2vZBit2VY1ozxBiCKpvgkNy",
  "key15": "Ty6umN9WZM8q31UJtDiRj1AwPDDMeawtskUrujAFXAZs74147Mu8aocaKkHzrmQZZpeaN13z2HnW8yxLv83WV6D",
  "key16": "3zpVZGE2SfG15xHnjHmyN8KtPhncd1aDLD8rTXhMKowTq9oewsoKavSc1auYXs3xoY2xadsnKdKqVJ9EtiGqL3An",
  "key17": "os1sfCZuAS9XKrbReED3vaeyAzwi7u1V1SXKo6HvGtqQM2GySXW5m1AVe86P9aWKEaubUHYBp7rRvcBvXL37FZD",
  "key18": "4hMwMU9Rf77LapxbYgNgRNYmJY6TA98RCFN3dH7UhyizgySrBNRQ6rRHBe4Ssi1sksV9z2W7P3HFhmYE9u8VASDu",
  "key19": "2QDLeBR8gM2ZEQMjDfm2HTwH6HFLn2ZoYystUBrTDDsuTk1u1DR8gU8LvYQ5SdZ6AgXFUAKnpc61aSL8vcfVnbZd",
  "key20": "3yMJH4sfYNpP4R8MPK6DJhTxG18MdmHdTUcCmsBqvaErEzZnzVVVqfwaCe4o4J7q4LBQ48v7gJ7U2sbcUoTj1kRL",
  "key21": "4FcAvNp28w6eqZvPCANSsnTs9kyuwZDirRFvgZeoWwugsyWoTRBMT6xGVdJeVF3qs3fRB973nevQa65KYnfi2WDb",
  "key22": "ZvMxNyyscYMAuU74hqFZM97DNEpGB4F318E6MJQSUEV39aqFoDQktitSw9xfmckURWziQheHNwfKD4PK4RGS6yH",
  "key23": "43UX35v1WK2wEhqPLgYCTMHBKhWyDnXxWGLUx39VeQzHPduEftBvRqrHJir9EczbUaeTjuMAQgPf8hDGgcPh5aGN",
  "key24": "4Syi8cBd2uurZGue6PjupVFNidKjqiCANdFbiyFscKxap422SQVRwVXkrBc25LdBRGTj6DL8tTYLDYhJ3XaQS1iz",
  "key25": "4rBofjsp5iHCiaPGzEts6aGJedjWxjjowbRAX7sVm7r6FqMNuo7oFPpbJiEp3D6FY74MzJqBNVgwbeQcXXmEa13z",
  "key26": "42sBibiGevemyVJzvJL55in7FwjPSpUD5nDNFVXAb2ppVk4CpYGKtH2yqVLAXKobGsE9oe5oVmtUphn5nedZYydg",
  "key27": "4devygC12fsABN9tJskbkpgK755unSNiTrKVNvWG3H5ayb6recGZ7EpLVNXf4yaceA8anY2f4XGEiAd9YqzuZaKr",
  "key28": "3gb7vHXaUTfHmMh685WWRfjDUzeFjxgNoTwPt9HQV5FnymPtr9WveM4KkGrXXwTpLS4rQWgFZQTeMrkjf3SRBfXf",
  "key29": "2iYr4VzxrH7ehfPPgxFVU49UmQ9RuBTrUTEjdoeWoQBRPo8yomfiytv8FQnM6oVs9EgeHmVxVUn1Jre8BMMMsJio",
  "key30": "3wwwVVkHC61tEshj4truZxEgMBunqpAaWRduLe7aaKjG3UvQDWPTSza9d4WjjQwvzW6FuJPuyuenpdNLZ5x2eAer",
  "key31": "66XVRwPZq6J6oyrmkbWjY8vin9Qf2eZn4XTdRjdQxp1sey6dc7AjF14jFPmn51aPRNuMqHw6cdEhoqr2SMjzckq4",
  "key32": "453SdfpsaFJSx8kXUKisAZXwFxeNr1CtuAghtkDkDo8WhAhyaDRDNVaa4XTra7wFzPTpDGqDtLeREtXSAwWmPduQ",
  "key33": "5FA8z314z29Hqvz2kevXF4Vz2ArL5n9XSaRKVegN59MG422Tmg5GqU7PZ6Jsx7xP3gSPCrpVx6dnbY7v8NNnvAso",
  "key34": "2uRibhbsfxvRzArgAqxmpGfoi3btGyakgnA2VzPn26EnNzrNqNJNx7Q4NFaBfjnLiagcTNsEWPt8qEvJzYxTanL2",
  "key35": "5TwAxAwWJ8pjEX87e7T97TGkrXV7LWG5ZHpFzYRNWp9gZ2opBcKTP7JLxfvtJ3jc4Z3faVyjeYX13HvQCR8XRXwX",
  "key36": "46am75joWaF7NpFXBaQk8omgQabDmDcHFH8E3FuPyqVE7VaXq1jR85YL6XerTBcW1G4vaYX9FMcTTEo1i646bsbR",
  "key37": "56LwCo5zZ52DwXdnymAGPYyDZGr44f9QkA9REd5z97ebDTigjC4fE6U7xWULi3344oTJAYg3itwLoRidwCHJ9UUz",
  "key38": "2dYVsmTkqfxyTd6z7eDZU67D4xCg4uKNNmdfG1couevSwiNaQFL34f2mt3WGEBPKTcnvDRTacx6tciaZzsLdsG3u"
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
