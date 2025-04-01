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
    "QFG7VzqGUxCUgLYPxcoPqf38yA6Ma57TzAr7NnENmWQU1vcL9Hb219LFHawjda3GBkMT1g9Z1FFmgRjPop4yzbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w6Emanmmtfb97WAEPmCGtHU2HyAvG4Kgra8QmjoTTPWEwegNbB2Qcy4vbj7xWgsWR5bLLCfpjAeGUDTawtAGv8z",
  "key1": "zefDnSif2jMQVxyUUBoabxRwTQxWXcWfAZTErjvWGHv4kX9jvoB8gJmHxmizHGBLRH2qDGEXsw8PTVMjtAxo8wL",
  "key2": "2xp4iFhhmNoexB9yxYAT6QiZh6PYTnMP6Yvhg25SUj5xr6JCzTgHjedLw2cCorUwQBNYyhW5sEAR9Dosi6Z2WoLs",
  "key3": "2YJEbXKAZ3Xcqd3ntGgE8SEo5FP6KEhCCJC43G8uxNtKkHGXpHZBZsrf9pAMBf9F8djsGXvd3kWyJCnhcEpJN6zh",
  "key4": "46N9W85vrZVFER24wwNeq48PgZmeypk2YorPpVQYECy8GeRJYxFo1rjKCpAiHtrNurskfJGx9uNX5qfJhzUtYwZs",
  "key5": "4MEFbUo8DNDc7MQh8HDMRx2e2Y5QNN4towvgGHTKwq3g6nctSgzcV4jGydmV14MEdfBTQagSvHGJeoNq96j2V4Dh",
  "key6": "2Rg5php9XUbkRKzWqECXem7CC1G3kcxzp3orDGDZYpoMNJFGTmfsYuN7fRubgcCCcqtF39vNprd1Soa4rnjM6q3P",
  "key7": "28Zhkee22AEpVp73VnZwqPFG17AzR85Q6VBfgyAtYoVe1SWcsD45bjJaTkqAuAJSdBfuGkPLkEzcojyQDi8jWUzV",
  "key8": "PGi2dCeDYXDpPHxmnhvfEcm3cv7VTXUzXeiTKhrn3tqApsfafVLVF7jxu8uSC2fap5dMCb8xxxcy9S5cDtQG9n1",
  "key9": "2EXCVMihCdxraZJ5hH3cex9guLkogzcKgTThiSBTUHfLCy7A59eVsRHViDoiffwrHRAEY9fMPbKvZjcuNC6dT5nM",
  "key10": "4m9MNDc8qbxQX5J7fNkDj57eC3FMmieWykCNurp91Dw8Jjme3f5jFncKiefCnAfiaWCQ8cAXW6f4TH9eTsdoDLzU",
  "key11": "4794zxsQ36A2PGFqBx4PRyfPUccQwWMC5EXsmTCoXhCiSPmipYSggCnQcdUhxUpxK7zKRitTTQtT26hhQCFzY4pb",
  "key12": "2srAbcV1W1pXMMkjxojosVhCKCort1d1SXVQKhQHmzFPs9tXk4gEv92ZLs6TKVV5WEgvaw4PNTWYJQ7UptByfeUw",
  "key13": "4czppaaFUtJ9ycBrGs18J2mCXvTvdeZgZpWUfLnCQbS67FGQQMm5Hu6hmqRFcHJGqM7vUttbHf91r4RNRKPBdhdW",
  "key14": "QJhjmnYEUYBNWnwyXgQnjDNRs3JD6wKCrr3RS6gA5CBkVoSgAwhGqHRP26P5wsTrMs3sxoAE6kVwagHeuzW7DKP",
  "key15": "5mmQo2rwaPHiDn8vJFUoMkWU4PgBiZjEA8R1RZWgJxZ6bAD3WCfysrfMKQ4vvhSkPLJWomHLADimkgncB6EXVHrX",
  "key16": "2xbnuSprAQqn6KLPRKRLydufQd7nmDvnoC6VarG5jNnH6gqGHNMkMYCNyqEizZuhUYHe2SgvovUoMz3G5qBCKdP4",
  "key17": "4T7wPDfEFRG2J3CSegV7LQMDU9QgBJjGQm7uS1rBjFPNTfSUQqPwwsujGiC8CNTwmfvAej6KVLpsgkeHwr4kqX2G",
  "key18": "LcmQNzdKEj1rAMK2SepNJQRXLxujaTHQNpNYz68Ef33c5uyP3r3L9vDoECUyaaao9A5KxZtSZSHDq1aWxAYPgQu",
  "key19": "2Msehzj1foGYhxyozRP8fzaabKiKS38PFu171XUoV6pbDuoAaYiEHrBX2LeFk881kCNTzvGCQVspt1RT1TDnVHz5",
  "key20": "3xxXNsra25nrJQJoEaxpKxcWFhPTjyLWuqaySE1Psa1seSbjwgBmST8WBN4ssMphQkshopRHsu6ctz8GKFeNSCQA",
  "key21": "2hsg11Zxbxe4jVgpp9oDWcpXzk3MY7yHCYsEUMXk4cPtMrDYqYvw5hA3ACW6woF72MWKQhduiarDQmtmsv8VV9UU",
  "key22": "3q5hmP4yf8ATV6MRztukxLuQNSqTF9FVFApVEdPFe6r1cUuMgzwHqqR3rmGrgCEKQwB9jmjMaWRdG4zc2fZMT3aw",
  "key23": "5kBaB2LiR8K9VhZaGgJ7Q3TkzC4D22MSBfP9Wf118LakWvMQ3gnek1JBLWRHRbApo7DhdhuN8oTSkWHdqymPym5j",
  "key24": "2L7ZwBev4DcEEZMRXuxxoHpUGdEApbkL8wNuDUgWEb8vhnNjYLgFRrJxuD5FkeoLm5BXJRDDensCpjYraGKdb2nL",
  "key25": "2pfxBtiKZMQNFcUEoH3hjaiHP8LywM5fsaHv2JrpWk8x4FtfKUeVzhToFBj7KgP3PwfqtGdHhqfJpmBvEBCbyTPk",
  "key26": "35Nx3SzHvrnAi9NGDtvni2U7mqrT1xbiV2LvqPnj7gPpsHvQicJxaRaJ9ELGFU4MCGr6QD7fDXDroZynRREaBf6X",
  "key27": "3uPoMudcFSdsTJfefxGUmLx1arQs5iJ3P1U5CGnyUE7uWCZWErg5RNGWdTKo3BEWJqMabKYUWZTzbNE5sSAvmsYJ",
  "key28": "5mXtHWb54MF85wjfELpLtbrLXnqvTgVFRXX1u53hp9RDWmK8aocw4AeRDYKavAfquDS6AXHs89gBxe7woJs9XxaQ",
  "key29": "3DpaqJAa6GR75f252tp2PkY963i9muRYDMPwkMwACso1pT15y7Z8xbMwdfgEoGMhN2bPMPuUFAFjRCryx3QnnjzS",
  "key30": "5RKvpE12wpg4Jef53NbVY1JMaLFXD7XtwQawLEx8mxSpj3cojMy5ELQET4g16bxEbU9zrM9ykdD3tW2jh6m6RiWe",
  "key31": "4ePhCcu4VqvuMeW9m9zE7CeAvZDQjMMF2zVjamitmXd76oLzb2y1NfK3SbbCL4BejFTyFLPQdVFgX8b12z8vco8g"
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
