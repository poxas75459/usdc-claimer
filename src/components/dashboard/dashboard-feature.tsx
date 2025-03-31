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
    "eMA9oYbrEpYmJJVFWvcoHj37A99uVYQBNUGukhjaRBDunbCreHyHdPqb991kq1niEuQpUN7FmuCini6EH7o5oes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxZR6LmKTxa6zpeuS6Fdq1fmjWGQMNCdUdRqqrsnHyThjwG2SV9MdTu7kTi7WkYYWfeGimEAe5mW1eJzYzvLtE1",
  "key1": "xHqhYrUP55ZGjQ6KwgZBxRGGWoMC6MLwRPbDZeWmR7vMrNatcnRedPzTztadqc1bhtGQWruBY4qCYvb6CCsSptG",
  "key2": "jPuKrdUqun2KRjrHDuFzGprFkKd7VWusJGZccEhmkVD38nGD2WsGvGuLGJWrpCyMcCjuCFvyxpAak9bfNPKi48Q",
  "key3": "4SoEqJV8n1vgNV1p14ftk92CpqRZ1nmfr4xaNwFQbqhJJ7mtGST2o6fUCCBMb9rCsCk4iBwSy7syyrFEmcZyqv38",
  "key4": "CWWUXDgyGgPScXwoVMtapwoEXGUCpADk69AzZ8VbdV84SoJsC5HWf3r1fhVN3AGYVSe4njAYgGr7bttvzkpaSJb",
  "key5": "2kvYLHiouiss2aQN7hYjvYdupXZmYkBcYEG3XTpgAiM4sjN68MTCqtVbQvSJmZhirbmHSnhwEMDCrNjAEpdofyy8",
  "key6": "4nUFj18fSU2X9ddTWLMnr3k63DmXCZZLoLsuzQBJMQpjEpgcVWgeASnG7g6YihYtA715dcWFVdgsjb5tRxLUCHxu",
  "key7": "KxMRsZWXuodfNKoXBaHqtN5PgFu5u6scQDLdV2c5r7qAUZp5Lg3d8V9T76e7XeVovtXwyyycWb4dvFNevaWkwtP",
  "key8": "4sb2GttuQj6c3mZ1e3LQ6GkcUYP8TUf11qUZPV7JQ3V2vZkNAXBS6SSSMpN7Qkq4CwYVuGudZXSvq52qZPZfFrCr",
  "key9": "5Z8doUgXYmDgXDnJwvTumMjZVXbzbz1Xt7JmuHTi3G4RMk4VBtbVHVw6aSc74KEk12u7d6mb9dfXksARdKvies46",
  "key10": "2hDVKYLNNTUkog3YcU2rmd4tRsX12EbZonqHJnoU7ScgPCLxF1y21Yk93XnFiZCDNVdwcqSLkWLQ6oEtaGG8iFNN",
  "key11": "5oGywStnumAepDNHp65at7xt5TMJMQkp7bPrKjyxetG7aJor4gMFeCNwpPuyevdGbdhgNis33wSRYqE3iiNChNbu",
  "key12": "5ZYSPMW4vkYrzykF47KN1zazcFhkttDnhL3VNM8wyRxcNNxpVsM1CQaMTkjrdB4zwmp4Un5kdn3qND3umCXrXneK",
  "key13": "259veoGq4rYP4zv3js9gKTP7hTvN1ChRbqmdUc4VJUQJkZuSn5VxaKUd9T1jDBTs6GwTsat9ZR3G833q88eZRKac",
  "key14": "32Ryor59b7hUz5pLtCgJofWSYtV9y7owNyhABGXXR9wGfF2iGjhcrqhfnWKNAAGHW1EZ2Lr2ksT4893FdPYT2seV",
  "key15": "326r4ygT9a1uNhnxXRv32ENNSMYWx1W9mFLT9KtwRUssydLek4y3PALaMo8mw32yMnpii7coeH5NdqUscSJtztW",
  "key16": "5zW4q9kaF6PUqf4VvBwp2yy3MjGL6VRvu9rki6mR7E7YMFRwkVt2YRN5GJoHdbuMZzGF2d911bu3utus9vmspsSW",
  "key17": "5g3z6LyH2TAJHTDFRSGsiRKgemqENWgfzXWNfEcm8RcQKPVqCAvBLLkgmgh76bT8LePG641Vfi3jejBCmcErX8m",
  "key18": "DNCceUNGwoNC6JxyTvEzsNRxj94i5WH7R7GK4W44eKghBGrM1UDx6fWTZowyYKBKQUfXZ5TT4yrTeKaPdGNqWq1",
  "key19": "2P7kbumoVt31mauqvhahtMEeWwRxoM2imEWYCY63bxqPEyvGVsWSsDEA8Th4RPcu3gbMdvuVkPqC7RA3q2Ea2Aj6",
  "key20": "cMvBtDfgAmT55uYPtvW5PUWR5exYyEuC6mCG1Sur43QbkxsrjcWtVSqC7S13dSgaQvaUHepXvCwSYnuvYfvnXSV",
  "key21": "5BuFL377xqSbCC7YRHdcainfrDs3ARdjY8oaEKBtnQumKTKYZZ3RyqQk2K4GuqKkcX9E294rejt2fwua3nqcmgpF",
  "key22": "4VYCpP9yFQFLguLE6uYeG6NFUpYHZDThKgC7toNDuRAYAWkuKFGg6NhePvb38YUmVizYi5fNwLi9jDrpkJ3F1mQu",
  "key23": "2bf8Znyj1twzJX62ZnXNzReHVusR1YKLm3vwMme85Q4bQsS5r4GLUDczQ9DQWgz3nEUB9yaHusyhhBbTzGaKB4MC",
  "key24": "x6NeBsXpUUXQAt5dNMofZiFXibW1vPrP2fJn6KhNTx2U1WyotHZEa2XG6mL7HPmkQYVVHR1Qxk9ZJGDKsSqs9py"
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
