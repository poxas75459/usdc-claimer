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
    "5JtEuTq5aV8ix6r97UFcaMQ9g2TTjCpsoxYcokCHegorfRbovxjEefxTM155whjLT5df6nAYgzfiPYJfuAfMxvyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnStdDXhufPjaADJns3WfdzTRfnT7pbxUzVE89L1vHFBpwoU6wCrLvNjJVTAK3VBguqx68fmaVSNiDf9ksQBPEo",
  "key1": "62te78uLWXpeDyLSNpCtyGveednsEYjgUzJ8VnzD99muJWTsZprJSJFnroQGqGTHA89mJWYtQN7sKBroPESFoXuc",
  "key2": "5TJHpyNpRBzVgZ7sqSfGCk2P7ojU2pjiQKdcEWGoG3YFwt171tMef1EAiMADhRhBen6ibxyeZtoypPj4H1H8aRx6",
  "key3": "5Ee8YTtj4ACejShCsbB6Af268BroDgjwFMFtU1BpavGpAZFuqV3hYxJLAfEBmQqk3aQW8Rpts1MJuyFwedRwpdeP",
  "key4": "4Yqc6nLwKmGM5jKL5FZafqUgWVFGLQnWF74yjTibY5yJr7ADZ5Sk57gdBzdVJTQoie972kyNemWaKEiVZALPRcA5",
  "key5": "new6VPkvfiaMYEG4qMkMGTdf6fNuf3avEMpfmLLjnCp2tP5GzbXjBrJDrCqGbSrJo3vTpbXADeb2NcbLc2uPw1B",
  "key6": "2W37ZCUZtRxSnM8TN2vGrR6FnRW2qkcgKAWr438TCvTMumb92gPvqK2jTqAyWArkGH4hajPk1SrKTEEri4czYFm8",
  "key7": "299UtvKhVQw2tzmTUXc3KHNqx57Zj3KSNJhcvjJ9jrPaHCgAthJ4ifGovgth41CVy42Dy3wwc3Q6DCAy7S8pTZDk",
  "key8": "32WphNRiV6MjaUazDnUpdwXHzK1EUAfvQ8txL1PB5wKu1p4Jm52drpAeAYZndVGHu8C3Vt8UumE9hrpsv7R4BPt2",
  "key9": "4Ps5TPnCveR5BYpAdmgZQkXUjNWZoL2GMx3eDd2sdUHrHtLAGA5rQbUCuFHFayBBSF1Pw2FWe5JK7vQFbCdYaJ8B",
  "key10": "3L9a5JkBVLW8i6gfm75Xwpocp1pLwjUPggMQKfCXe5rhM9LDs6cmgvq39sk3vVoMBMN1GcbkdSodSQokvP3HrAsk",
  "key11": "5b49DNAhCmKk63XNdHUb8qqa5tNexmQatvj89QKaazAKRSdjrNQDWjatyxU6d49gbwWRNcPs5qqAeqBoc9TAh4E4",
  "key12": "3htvyYNjHEuqQiLhCEF5PyV2qt6BZbVfvvkTdHMENsQ2369UwhBVUfeuoKZN9D2exUspXC3jpfhbjvwJBuiBJ1Zz",
  "key13": "5B5msL69U2uGYkqgHWxZSBZJSVnxqwvKTEGxLByPcpy6KHoX1eji58zMvrNxmP84X8juLcGNrozMMPaQqeBVbXjr",
  "key14": "4ohrwqeejLELiCjyVYwqYEYaeXLtvfLRcqCQeSzxGqYK2R4k7CXaJM9YZcgVpwNcaiqboPxGuuR9mNBFfk7RND71",
  "key15": "M9GoXvAENCQxFVFi8bVvCWkEXddHa8e9kckhgTwEMvoE1nrnGP8btMTsYCW5QkA7CX9Ha7xmbxtSZuyjMwuZaQW",
  "key16": "34Zb8VWeMvuQdezFuLcRxQNfuxavLJJTqiwD2pzJmrjrWuZ23Vq5qUNp561nUCaZWNtCKp7RkDkdRwk4cej7b1oy",
  "key17": "3gHCsuooxn8mXLMmgFsSdm1JG67FzLqSS2Wb19r6ArUftmFj6GfUYXAprDvQGPi8q88VnTHyH57rTaxT254ZUjeA",
  "key18": "5bXEbzTaEJcavgU92MijXk4usD61dBazNxFoCNKhf6veaJqSzRVN6BTMaoCoQSi9iVEN6SymDDuuXjaCgDcHEwHP",
  "key19": "2SrZtwnQWDTcDkJxzk5Xhrf5UvWVBiuaFLVQkvCnmf8aNwox55K8uPBwngqiGnoKfbg3idXmmZW7axya2cpD8jqS",
  "key20": "2o8CSEakS59XhC2EcsNhMxnGL9SuaVYBTpCv7vuERkR4Lw8dZ3dppzdtwqNA8yCahgQpnd2brrJtBRdm9my5nvBP",
  "key21": "3esJ6aYXiZQ6xa1gaduugHhNpYACm5YV1qsnjxNa6Pr5WaKUbYKvzicBU7HkeCWBpSbuAEb2T9tr1kiewZkVZmUi",
  "key22": "SEMDQwh2YGmg9S1exgjKmjR2WaiUVYuZjY2mf5MgJKAnUq8MvUhi5XWRsHweSYwbe8yghAAPTu1LggtWT2WEi38",
  "key23": "4Q4XRZjHAmFoCJ7Cd4tec53RXnqJVERav8sJeYy35nKfEqXWS1H8ttJ5giYwqVgSAJXMN21yrNHQyPWahFMqnA7k",
  "key24": "5KfbuMHnfsrR1PyTTJZqXH88Gv1xF8gckAouBjS5nGkNbLSyDTko56nYayX4xipUEjyc8qkLvgWTmSrp7WE1G5fx",
  "key25": "3AaGHNJSNnwyHPVwfRAnhmjs4aQRBKHsrDSZSvojdBq3pDeszocQyu1GmpJXkqxpktGoskBgeYr1JZAVqwxP8Fs8",
  "key26": "4E1bxZC2XrbcX3eJE9vfRCkmYw27WxbCvWVaMFKrwvT6LD2NfSQJLgCWMgpsqzaJLghWLxKdawdzEBHfaEc7FgVg",
  "key27": "2NQLxfscG1rhZ4uHDKGPKx3GcnuwY1YEqxt94YmZZghoM4QmkRsA4Q8rNwBQujQEKiKHT9X5SSGZoLnEvne2N6UN",
  "key28": "655AmxuFXde69CmgVBZGiGYbDNa6vpJGBR2aUCMov3rSWzpXDLbaahN9ujHDDeXohmWsM8Nm7gKGMqBEj9rwPPeB",
  "key29": "5PkqhV8VgRwDNmE9qkdp7qshyuXW2FTxV5BFrrJdzwb9eAUKinnM5h5JpCqeokJFQ4p2U4CXXtwboNokp9b1CDwy"
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
