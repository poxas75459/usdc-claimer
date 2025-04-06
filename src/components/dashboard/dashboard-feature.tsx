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
    "45hUaEF9jCwgSiUoFkubhe7bCgKCRDxckAtj3D9ioxJ1MPH4idgon1bgoP4ewpfEBUmWRaJ6mHA3xjvE3PHi9jqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkLDxTUrSZGkNLaehmHWqgkkM7NHbUhM2v1RVy8bspns11qN3hsnJGXninXU9ETjmLQ6oWBKMxdUTTwnxUP2Gus",
  "key1": "4FrVSM8htqL65ueQ2C2ryQguJUAwRBrfutRRsaubyUQiGAwFL8eRvYihQHznVwwnyxBAdEEExTvWT8CwLFeWAvMe",
  "key2": "2WKfS6RZVaUJvuHEbmecbghvh7KeyaMwvHbj7m13xfXDihwkEdjQqxWx5TViCEAKrxM1frvCeUY4AzUiCRYYUxz5",
  "key3": "bGt25jxpwugycedhkgnDcY53tnxULHYrFShDZniK8Xykn5eqKie8yXSLYqJDioaFq5uLT3ytQXgzY4MEpkwuc3N",
  "key4": "3ZqeC18KzMFCE8tiAvLmpjA357ZkFNdB5MmLTCAKdmbfDD5i6MBeukozYRCqfHFkyYjj58Ja3poahTuMHSGNReon",
  "key5": "4dtqR9W8djQ812M4Bo4zZeVG5jdY79qSjBXZU3AGuo1vCSaAy9n5znjHCkAeV7fWuM5fGfAbCSeJWxWmY8j261xG",
  "key6": "xojoYR9rj39botQfKrwYN3RWk13eTM7mR15ArGDpTytSzpmsZ5fuNRhSdMBbxxazXBPvtrgLtXdPYUXqfPkZmD8",
  "key7": "LVcyoj9ws61naigKpbDUJJq3jjtQNXoicPTqaVBSmkSTcw8HRo6dG7S5hoeZ95TDGqj3odKgyXWJw2eov6TKdWx",
  "key8": "5KBGm1tWnbNf2Xrfaen4HbnGJG7xaYLoJEkyPEiEqfL2VYztMHXTcUUaAozcDQ6xX9MUZ284DwGdSMu2fNw32Cxj",
  "key9": "niQeBCVFT74FRa83CBFZBV2zaD6vi5ZLEpGJF1ZJbmoSs1CWrpHXKqFZe7EFmroMSQAgxYvFyLywgHW36dEtWNC",
  "key10": "XT5q9aMFA7wt2n86T3SWnGTvu49vcYHPDFs8VZ9bj6XkFXFeUcAPmsNYaacB8XooHkCKY9ysJoyPADkBR8EyMp3",
  "key11": "3FWLgJae2tmk1Dgg4wr9kEpSY6cik7uTwJzjt2ji7SLGwVMsA3xKAVbrcATJk5uY9f8scqPK4sanbjzLSTbJWdaL",
  "key12": "4er618nD1okERSmLRppozpKevjycZPUH5mP7PUgpmqS7XGF4r9LfJRytxYmc5EjsaD7gz7cyTdmfbmmwC9NhV9D",
  "key13": "4UgCPgqufUBEjksV9BSCc2uNYrjTza2daaELf7BrLmPX6CqCKsi2Ay4QLf9iGU23wEiiYRawyWXMP5FL3vkPekNr",
  "key14": "4q15FyqWEy6AHhrnfN8RF6UDbRdirpvgTUgvhoT1WwAQ8NxwH5RN8tcF4XmBSumuiUSFDbEyB4tpfVceWyj35ZE8",
  "key15": "jXgtdgTLU8uDBa27wiLgveQJrBa9pd36eLwPApt1t5RZSCxgPiAfcrpJbJM3xi1uPBKL6quzQRmbdupmhp4Rvze",
  "key16": "2P7FX1YBeHWrnGSQ9K4UT7Y8KUXmM2c8yWa3Z1dEXPxJZ32GVr7LPHCtoHkQ8jy8qr3W2fCwbA7jF3hctHuYKUu4",
  "key17": "5Yc4fmUc8MFjMEQ8cRsE4Eyt3ULmmJH9BeyWGkHE3QyBSivc3SQRmY66ZW3gy9CDLYPpRDbCbkDvD1mmeGopq8SK",
  "key18": "Dp2StezGEWg9eic3o5LQBHuaYKkMHnNa23T9XZGxUDWhWFrXQjEJCqC9b6Sh4ARb8ZoLUVrUGLUd9s4RJ9bdwcw",
  "key19": "3JRPsxeMxNDgHyH62BeJ6tE9AZqr6hG4YBsPDBUy2TZ5E2R7xqV9FZ9LmoEaDTDmnqHMKEjZLi8ycgqyvm6S9n7S",
  "key20": "5BmwJEz5YUvigP2kNGSCcXn3J6QFbUqQRD9iA8imfyAE1YsaJeaTNVBddNEtUyu8BJ87S1UR2mRuFtVbnr1NZhpe",
  "key21": "2JreLC9xmhK4grC9tTg6wznMEb4VTnAFkfAZtTyi97y1pEQTBoGnybSB4LVs31GotJTqx1Kw2qMTRDoCu54LCQMr",
  "key22": "2Fdy777NefvvE4Sr2efdgEN6LsRF3SVoB6VkeoGWwJftWEfudL4hVLaPvNrjFfoidX4PDeHXDdd7JZBkXxCEXZEy",
  "key23": "32WAyV6jsNs6SbHyLcAe4yuZR2FLr9KxTNkNy3c2YPNwJwCkEUbqBm5wqqgYUxynzcHuGmAa4Fx1XZcUZ7o9HHAr",
  "key24": "57w1RWwWtZ3pGtTdw7HpmtosEETZdVifodHT25voVPZeGMhC2RBbZnzSwsLsFLus8BkRSWioCbb9ncGHeSjBTfkR",
  "key25": "4BtKu5TSwA6dxB71h6kPXTHbm1ZqY6Ke7TwN8DbyGuAAwxddsrf4rS6dcFPzjVZHm1drXHFVrwW9boUAmneQqeTE",
  "key26": "5yB2c7QWMM7FFs7L7GfPv8S4RhC3ULDAasLbafhvC2xgK6dz9nF9vWh2Nwm5AEgW4Hfv45TJL67P9bFazwYxfxfN",
  "key27": "5HSHPc2uydHF7X8QcCSunhjcYCzsfBQuiWCetAwzQmpmBHcunJczorq8fjmMykrHRskx1rAedXEZj15x6y5Fp1YG",
  "key28": "4LKWPVS1sbnd8VfW3wEqwrfuFH52mqcFfxgZw4KySTYP8LuLW9tUT5P85McYEu7U2PeSY9pWM9KHoB8NYjbmJhGc",
  "key29": "3ZKqJTs1ToUkYokGFER13YtmFp3DT5gUss7kaDet3XiqtZ2HV1bm4uQGhVzDiZHYT8nrJTHPxBpBayrtMugtC6vy"
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
