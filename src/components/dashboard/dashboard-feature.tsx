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
    "kU9MYKEFqeLsGNKinyE7iWXwCVA7VE6PDrxPsnfK2h8QrSdXwpz3xAhUA8rGz15Tu7xMSKy6j2nWq5HhrJbx2cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NvUYPsxpWDacrBDpENh8jyuui5PBB6MWw6kejGoqiuqp63cFXADttPCqAyNx23YHcmZbdRi65pcyX5pycKypeW",
  "key1": "4uAKnJ9DcA7uBzT2SKkeb3ShCDqWnnbrcN3cRnCKrL5eXVdpMZZcZSu4RN4xtkp3e1SeBYZ6AwemcYVJsxx2tZxk",
  "key2": "4vaZbGGpc6fPpbQSre7fNuGQMcLUk1JvC6npNETQASVVGQreJvmcs53sfcNH6FVjEm2utmxqjJ1aPwWoZVFxHsBx",
  "key3": "5vrs4kiKBpaqwEhArJBuAA9z9ihQ3KLgwZbXkvMyMbyv5JA5HpRghUr6tYbcaQQBFYPFgYnX7aXGHUg2gepsSkmM",
  "key4": "38qvup3oZLMMK23ZhQ9TFNRWSJrJbDzxYSM1LopdqmN4nXPMxKgUiqKsBUhGAXnTT8rR8Hya3YPdBJ2CvvtQv6US",
  "key5": "gjxGHVXG8ib9EH5u2zpsgBsUEB6STarGENUFcz4Ck6ukDh9pF3U12SAXHfoJrgY2EWzwXGFPJcbZYiYUTV77GdV",
  "key6": "3gWQ2YsLqkFpt2UU4iH7Rt3s8ZhoMNMeJ7ZG54naiXPDSMbEio51e88ErFzPDJ1rYkX7pS2v5w8xBw8sBqk3j9g1",
  "key7": "42ofRuTsgsZ9Gy6Gt9SbFMaTwVJkQjik5EUQCSup5f2HcEzQPbtgKzbGiUBZGnF2YjwsRdutALCfFHYwSMBUSmps",
  "key8": "2fiSjRiCsXxw2s1cRTHc7zHHu8QSpDsLnXae7nwXzfFdwNTnXaHfgDmCBqCFxTLDY3uqeensjsDBuNBxEbFu5KtA",
  "key9": "47yTUg9H7kPs6tNDPyn4Z14qyECBZmH4Y9mLmWB7MjHaB2ceLeTgTkrUCw116j13UZTzE3qar9vvCsJTytTadNub",
  "key10": "2qQiBEygycMucDAkhmnakLG3VET8FT3235cDWG1cosUPxQzHiCZBD9MkpritRC4HdGZjhBDiETQtAMyGJ4TeZ6sq",
  "key11": "61E3QURz3KoPkvdTek4ZxaGDvhqHSQBwdkcqdpLDXR4A4YGDGHGdMR9AHRs6rP2jotjPRk3bhXSbxwcK6FqzPyQz",
  "key12": "4aZKnmucNgp71LtiH1Jb9dsXVFQbDiGewnAbbWviLLCyVwTGNujHc9fR4FEokpq6pm9jMVcFXu1Ku631CJFCLvjv",
  "key13": "5SEr9e7hKiS7Bd4RPJz81NvQphigX6fch8tWTfb9KLKfnMR8FGTDdJto2QhHC6BkJutbxYYrNEkUzdpM3nmUxEKU",
  "key14": "5tD5Ka9kUMrkSNwQCmLomigBJT291VwoZvr15EQq13TV1ouqjNPA48thCspNqkxqoXwRGhgnjTsdk5dBRB31ivnX",
  "key15": "2cMqfKqhHHd732ATMiQeEJHr4AJ43hYPMAckeeHaKZAffyR4G2g6259XuchGrG7hWQM1g9nbFLCUwU2DTfCSAatR",
  "key16": "2td3zPy6yYfwengs3qMiPijPbruF5dNMxinN9tXyYeTLE311PzSZiijAHbBfPm8TqDCzoQtNewKRUNFJsHeHrTpg",
  "key17": "5U6Hq46m6Rdc1NyvJodJkbUMQVsjyWi58Xcw8DoosTMAnhBoBvY1SD14rVcoegeNsN31ySDP9UaTeAwcnQc2FLGq",
  "key18": "4nJnsYiJEWRr2R1RrDb2oaQpoNRiDDvfAWz7BaJFx44mV6hmrZpLBP1SrsMbFaWJ7zCEJvQ1jcvdWzm7Gy9JLC4U",
  "key19": "3cphuMJyGkoyzku4aJKvRcpDj7cdFGbD6DKQWgZvnJVdiLAVzRSs8mp3TFytwYYGvQkrAZMZNFLAqjp5gQ8ws6aq",
  "key20": "4nS8LwCwQZFfDCNKZZFNfNvWyFVmdzjtSthD7wqD5KFRZUDq25a6g9SESdViXZHVLxbZvWJs2JuyW5z8Vt12iFoo",
  "key21": "tBZqVwZ4w4AKtsFLE8hPuThrpphihHS842Dz9Mc1HznnFxCVtHZDYjx6gWRHM8Vqo8Evy5K2YQca8PPE2S6uSk8",
  "key22": "xY7Tz69QowjJVF9YvBAYCGavPLggZK3nmzBghbWN1wrRBjpoHPmC55XZzy6uudxAFFoxyABB42XWuurtvPvwNgq",
  "key23": "3ibZViXbDNXCSMwbJbJqiL2Eh42v71SstAgTutpM9eLsBGu9CTEZwEvsJsaoJB7RBurNrXrX2XvCWrWkocSACF4a",
  "key24": "MtVSEG612WFfm4bHHhRJ9Z4fbbcvo3DYTXc6WDABTQeHMsD4W5SXpeHpa7owV2HRPk1x3ReZgkhfGimafZWFuXh",
  "key25": "3tC6hmPx8wJczgZj4zQFo1zfLxBzMCTA4CxqFCQVmoH5sQY4LQLLMNEXucNyutNacNf9zAYA7dMK1rkWomy8QuNZ",
  "key26": "3xqSpcpwLmfCYxbny39w7TnWF5EeJZwYejkQQFG7nD7ouXaAy1Ats79xniQnWXk9X9fBAnVwV6q2zkP8et1cdSya",
  "key27": "3SwpH5LTieNVvS2S59WPQxXd9btuSXE1XJ7WWVFGxiVv8tcaB9RpM1sWn5tMGiXjRrW92QzbF4YoqjvB3KDb1TZP",
  "key28": "6ouZccbVDauLJ3YW5uhqpcZffpm2rNCf3mw1ZbXfJc1HRhGDhNyu3eP8WHktyEn66ZzkWefT3wR3on6EpkoxhQu",
  "key29": "3AhDp6kcMWFfKxrd687jcmpJiP95PwWuzpw7hS6oNq3yx5Qw5BZ6CQdv8NhmTEwKNVZTNE52SSSw4vmotYKeUyHv",
  "key30": "3v4KsvGa7QVGR4w6w979DxetThRcesSVr9Rh5PLQM3xu41on93fixTgCB26PKjU3BH7ZDbSgbyrmGSs1FVhvB8eJ",
  "key31": "5DMtKpW3fos1xuU5YzzqUnyZ1aZAXDQtyPU2gwayJKENuyPMSHPkkgAoF4ud93b2d1XN8SW2EMnbsrTNJ5PCwMtk",
  "key32": "3CqyMe8jJ8ozw9XDUE9mFfTGomDX91ZMF29MYsaSYHdCDQkQY9oqFyDZRYaMWQK6LdcLUjMj2Tc8YnxsfwEcWq3r",
  "key33": "XtCCMQWXqba9wduqyQPGbaRKTK3qNZWKjXk23As5SuMutA5LvoraY9DAL9BZ85h8VZSaUa2MUUpRnKr8k4KUVdi",
  "key34": "qV7GFHqsk9MQK6aG3NrSMDTcRQ9hMV8gTuukYejwjPffkqoStLLUuFnPFmNcEpaCJ8xQAFZAh6Lwpef9Y9DHk9e",
  "key35": "4L6jkmCdR18QukAyMkDqQNM5f4ZHa84R7qp7d4q2FZ94iV9NqHxicBLvK3EybEBiDjVhQ9gitsPFgVM7jWnTXNjP",
  "key36": "3jrBNDofMFdnnFxq3Cpe6MdKCRSp7pbeM18D7JwUJwurrYbkDcgAqUBiwyhNDDhYVva24hMFy1SRadkhCq1Vnw4L"
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
