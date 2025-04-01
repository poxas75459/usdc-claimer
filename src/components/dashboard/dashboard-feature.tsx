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
    "2jQ9FAekgN71DbFiduhxGYXycbvGiVJ5ZauBQVSmuQPZhd7RxTm4e6csTGKCac11y6VPhYixNunJ5x7kXu19R9F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMJA3u9UogB4W4jRCHhbLegmuj7KjHSdZpKA5d6mZYPA6DqPK4zKo8WSQyNz9NhqmW4gWqp6orfnyn3zFRGcUCJ",
  "key1": "4ZmMsPEmevGakyivzsrWCZgF71UeXbgjhm1Yo7a9bkvLaBHdk9HCGPt45n2ttYjjwSzL1yzZ33V1z13yL2XdbWRk",
  "key2": "tYfrrBfuTa8rKa9ED7j4teehFdhyntjamwHLJkpUUTnMrqY3REQrQQ13tEUZVRF5M7rwpkTvP6sXBH5cGTVbVJv",
  "key3": "2crpUcYzqdxFqWYWwD7Q5ZK88oncijXjtQKGsLEcf5Hhqpc64k5aka782nsGS9DoRuGweZm8WtPiy8kvdbVSQ6aN",
  "key4": "4c3anvQzZ9cjUzF6N8LCP1LBXGuN5cCFc6XXDEpPDivW5pKRHymHta395XnuPBqpcDgRPBZ7skS6wJSPtRHWVHB5",
  "key5": "5gQjjnbRbX91Y5Ua2FGbgH9wxDei4y4n35gfZykxe8mFMAeZPrWP5KQjSiJ9tdAJRy2XVfmk9SBwKu26cdEEmqUE",
  "key6": "3CKaz7eNnkiQmhnckrKqx6e47sdYYkDCzTPQfivS8EzXBH5Ezo2YnBKZFcUdwGpT9oPMykX2Db4RVy1o75ZuudjR",
  "key7": "2paTYDPAaTNYLFRsYSASRGZM2fBi2FhT9ZxGZLm5XNWDXX923Xo8Uas12ws4VkEQb1boYREQj48jJrQ81nCjJK7u",
  "key8": "3UDJGfULbU1xMbxH2E3urxnPegTrkTverkmaqMhvpU5dmCwrbEwRQJWWQ6KAkLUNyDnV5qHQHdG6CxoEm6hPkd88",
  "key9": "4pKo1HYGVswnj8aZaKqZt5L85BshxggTjhC6ABAsRrLc4zZpNZUYCdow8b1AD4a51uLucZ8YsqWc1D2aHcQniKA7",
  "key10": "5oMtuXnWx3L1DARgP9dwTbD77sJwZnBCC9az3UxJV3yRB3aH5yrUDu8u5uZi78vxQ9cj6HRiywnnL9GdyJTcfUjU",
  "key11": "3bv2P5UbnPjkrGGgWiaFPHzwWbzybqnCPchoA4KXW5k7GZ8WfbgiTxAuwMJz7HUvE3S5tinRHFUxXoKZraRe1nZX",
  "key12": "4d1wWRUH2mZ4cdMJRXkAk3THFfhASg2hZYA4sRmkWtaW6dt24T3eTkousDR6bNVJcXaLqmjKyjVxxfjQeLNoQbZb",
  "key13": "4zYmxuKCWZY1cnUqAsvWj9bvcEJxD6yvYQszLjwvYz23PzKK3Uee4Vm27rADhTAibM8EhQgGhRnGk911wfmgndYR",
  "key14": "3JLix4AjkoN8F2695mivY3YqUBhEgXhJJNJgTDuZiu8seKAzcRPiQytZ3FS5AtCMp28DHdBQkSvFX1RwuGfyznYt",
  "key15": "55S85Y1YwUefTi936zCRq9uqhy2z9LVFKWyZiiUYnyzJwHieA3HfuFwDa71qTn9teVLPyyvMaKBHdPW3Crkk4hpT",
  "key16": "399gSdcRM1L22kPMV839e89k7RfTNsgbVMoKCGiuxJbySYi2XQTXEsjNDP23dEqQSQGt5FzeUCCab3kT8qvBNRyW",
  "key17": "2dqBPQCuYmWBUu3sdwcHsNUE5rdJ3XefLv5AYarkCtmL8UtazAab3HstMqWNTvDopRqVtwPhS8bxS99anEYz9eLA",
  "key18": "qH4DKDsEYVD9cusjqiahQnnKTErnh6dMHS3vEgue82LY6WNPheTxRtGVotydJhR3m1TTSPzWgUYNtSHRirygwYJ",
  "key19": "3jarRfdUzAAkA4rHTsaHJMe1cFZHaSdrwB4uML1FC9MEhqSBF1fUtvbzgJMRvM18aEFvRJBWyg35GXFe4pznVsje",
  "key20": "283LXRjXpTEJTj4Q3KiguzWR2z7iCdz9JyW7fWdN33nfqAswkMaqGt3X1m2joCM74W8FaVYyxENFseQ3wUfUXpvw",
  "key21": "34ztQDqBwvkxfpXAer8J3LYkxgtQWMnaFQaQ4HSiZZhbRvrjLXYKTxWvoUM9X13YLGB7mPNgj8aanRcyBu9SQiM1",
  "key22": "54E1PARjjoMNVNtFzAVWpdWpMbp5K2pvenwEUhFxeRqrNkVWGZfywuw1quFTiQ8jG3jnHHk2wp1cFVT13rMm4hi3",
  "key23": "2oLnPNYueF1Sjtd8WwD2dMkYHmrexPLbhoES8SmfLLim2ddsbtR7K28gH4iESDezbDnZwgA3GmqHLzsKMe1CBmc6",
  "key24": "2sCTFmDr9bDaLe9uz3rAJQ3AdY8M9QmNrVtieipR9fQVPA9pHUDa65sYPNWwAhREmZiRLtwn4cDevspJ4SnGZsJ",
  "key25": "3XceTpHTHehWP73PGeD7C5rQs3VKBtYhY58u2UhCAxR6ps9cwWRSuKARsbtnn8nq9CqFynS7zZ7XwJbi8awCEupS",
  "key26": "42qJx9LpQTeefZezuhuYV6y9dzwyKkKtbahw44Yk63WeQopGXoe1yWd9rBDs7vH8JHsz2Y3xrntqCzzKqS7mmsD7",
  "key27": "5Apos3SJpBssk3EnMPLEoS5Mw9PU4Vh4u3W87ELvD5k6y7JUEX2tzS9oDoMsNJ46Znn95wMxgvjro3ej534sQTvm",
  "key28": "45tJTN1X6FvFZsd5iYSicpgUBPvkjAcnaaF1k2qVj2MaUWzv4rzh1XpQhMh6QwbPueGrFgjhYwbAxGeREx9EXWUK",
  "key29": "EsXGFTpJEb5FR8J19BquX37JmZ5PtmcXa9oexPXhmC4PKSs2sJsdXVJJjD8Zi6zEXyMBU42BhuPvA1eN3MzXVqj",
  "key30": "5d3Z5eg4hSxhKByBEeVey6UNwmAGoZiPR5Az5jfczD4HUTU3w1Cd1FDeG1gtooJ4AfUXhS7bD6n6oM6aCAjL5C3E",
  "key31": "4TSnojvCof43Qv2NXdLCchbPhxmho63Sk4KF6Gxd5UPZMZWF41v1eyNeBtWsPeUVkrjSDrzBD1Ngj1gQNzK5mPKR",
  "key32": "wLnwbh3s8asJxcPZge8MnhrvQtRN45nQJSKrahjPigHLiHWcp6wik8zTcZbM3Fq6GxAK6uFrxrPunB1VFMJMoe5",
  "key33": "5c4dAvyqgMcN7KJXTNiMuZ2VBLtN71DkwRCTcKmmAfy3HzK9YrNDqVzoUdAcH7L2oigajT1xsEaS4U1xFXrvHuk3",
  "key34": "2Q7Udm3omRdzL8nY8wfWnv2EoVdPYtE2oxxGAPTozZbEYtnNkjfXrX899xkqMCycKtQjcW7vE1aLx4TxWeYAG2B4",
  "key35": "5kNWaBH5npVwkBGoj6YdaAnzdtKS2sBDrVGdPnJZLXg5M3jBxLHKHGUPFjBGdoXqiwBPA1UPADDTjKb9FoLhU67N",
  "key36": "3aK6YZLJu1rogm8GEs3cjCPFHS5GNndmcvuiYAhmkySuqU4xWbtQmFkMADRkBV5Wwi4AgxfSKHqiWfqKAtaPusvo",
  "key37": "Ct9iHnBticaYkRkJdgxka7pyew6N8uESxWrxfFDTQrsu58uryKMMXgRCnxcLAnJFYBLkEaXS8q9GXUurSBoGTGJ",
  "key38": "39uNB8QVbq8YK4cHdGqsuF55TNF9rrnkahox2FkVw5UDReb2ACTwP6faHPHhxaji2kv9xadnFtRRZqcDQ1xoJLZC",
  "key39": "5jB88jN15yXwQ6rDJ1eEGXEaDSFncfYFV7Lj84XxMGTA6C1RrPzwErHKQu3hHSs78XCZwHZ3tMKAMyc4HrJhJK5z",
  "key40": "5ZnKYbsNoS3XsXgW782z3fxRMVjKaQCcGnfRd8MVxeDcc6xFS9YuDtBChvSu6WvvAPUabUrh6dh5AMgAVnoeCasJ",
  "key41": "5PvJQMtg7SmCodBTbCjnPa6oNrdL3PboNCqEsAuKWEJ26uE7vWCwmch3Jdg8MRaHKkE6brD7KxcBqp3S3i68DtHV",
  "key42": "5xjZbyccWAxEMb4Qx5vHiwH2GAk33D8MinSon93KgMARQZuVdYC77ydihVz6ccPBSUitYwBCRbEZLaJHcq8YmLiW",
  "key43": "5nCVnrnuaG8a7NdB7STEvorq4bf5mDMHM4f7r7poLxzUXtqNSSCL1rYLaVJ58tHTrzGWU9uyw8r4EPjG4DQTzcUx"
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
