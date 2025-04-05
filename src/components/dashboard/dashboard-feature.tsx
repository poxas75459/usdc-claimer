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
    "4C3nvwCH5LyGzqtabzwGwi56rEQvjMar4jz9jXenxgrm2q5NcyWJfjGq5C2BAToQM8hW83hbAkWB635EpZ1f9psE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvZ3YvoDf9hYdoQuY4mpfVX7YxRFubEHeNBGwd126h8ZdLkLed28fASfnaxhWqH8nWCmmagtCmM22CkStnYKQJZ",
  "key1": "2UqmNq7UaoddTS7UL4XnuTKmSNtfg86DZnF7qMrpNqQUPNbufp9JhDqic5uoSmL2RqcnaUn8R7yBWgVkBC39zg8Z",
  "key2": "5uHAArY4YqJKAwvyd4zKaur4D1bqTNhXAY6HjYMCEesCao5wDumq3viiwZ3RXr1w6AbFrCu4irrcLyVBWV9JZSVV",
  "key3": "5irrbBm8cvnC9ncAGYJ99u1RBiu1VxQRpkmWwSxPJkSAQ1VDKjj1cMeJJcJ6vzY5mAGG8J5fNCRxHnTTVUYtnvHK",
  "key4": "na4D69jw5JhoAc7y3qxtRCKAB5N9vS8N7CTtRpvRm9bf6crtTsQ8pYPpRKGuDMNYot2qQoniPZs54bkbcd24n5N",
  "key5": "cTZo7zKkzV5p3q8eWmG1DXxAc5nxWNbb8kkupdMLD2L9ckMZX5H8v3uq2vaov5SbeuHtzfFycFkcg3jyeq82T3b",
  "key6": "2mV9BBKTfNj8dmpjH7mRnsGW8qvpXFv5eCpoH1BhKL2o52BQHj4Swu5fTj7dqV27AZF7MhNg3eX6WYieJcJmkgcs",
  "key7": "4d2BDdCzMQKWTzBsXeZ83M2n6GLXcVpUev2viGc2Lw3VhgrNkJk1tyNzDHLnBJVF2UH7SZWZe4pianNJ7sFVgnEK",
  "key8": "2xkfzJNHZvwZZ272mqoK8yGcLcjRZV4ARbckN9RDmUfNBU2nH4pPLrhJFv336v3LHbcWd6yLiNw1oCmUQckEcfhb",
  "key9": "DRogo6au6YLMs7QcSxrUzyUhDLzzvNeAtST3ux9Vb3m94s4ELsCkgb4dEbXN2ZUb28C4UYcxoBeRVni1Z9sT6cV",
  "key10": "2niz2hY6r577GmaMqchBpyCd7WQxqdSKm8jcBP3fyenKQMnL2A8sxW5ZoooHDmAoeujNPXb31Sdm7HE525kknFVv",
  "key11": "2Fe4x8e6mmeFfZSy8epJj544r7ajgM1HpsCMGcupdpyQNJDBcvLsQzbCYMkqNf7APfMXFdMBqLpmNi8ekkDsWuTw",
  "key12": "2CPgcRMbneHqctEpoh747xiHgpGbrs1pVaSBnRgAhz22QPfmuYmDt5ERQ8e1WetiXYRg1LrtYCC9m5Es8hHvNDmA",
  "key13": "5bQFC49b8AE1bcZSJo1etKdhJdJ1SV3iGEgEe4co3dJBEfYGNVosejBTAUTxF8bT16j5TW7zib3fAyZVcHTTA4ri",
  "key14": "5PAAVhEeFteSV4veDEYQzHKHjKJ43a2wvjTKXhijCUZ5TPEMUPMxK5bSnH2GZLbsLAikFj6j5S2NNc2VpUxJh53d",
  "key15": "HYJCY8HPWtR9pwdxh1K1Yw4JB3a8diiDPfuepRqtoBorVvy2RLZBcceCLS5jAQYcYLB7avDiispKgFY9drJnNYh",
  "key16": "3Md3d6uXBPYAEsfejboCpqnwgVGDWMr15cisCfFn9eDEMX1WjzcQTLfKvHgYB7zVX75bt5MeqadcZ4ZwvXVc6hg5",
  "key17": "4vXUR41pahxG2F8YmUyPSvX1ctDpijbspZYDSuL5m2DNErqsH7fyuG4Zpp4aSjPAB8z9ANr2bDUDMPGsqjBp4BAA",
  "key18": "3TkuDvA6scWRswUAGVBJyzwLh6Tyd3uzXXPcmjmU87LusoKnN6N7y6YFRsfYpMR2rETmfG22C1xgFukdWyQz1LjR",
  "key19": "3dS51wMfPjFm8a17io7vMFc9XUAXBRSyDrGQRo2YGYYRhnhyp2mi8R3ZeU7yba2HkTzy8U3jCZYtmUgqsnkV9Xg8",
  "key20": "29JCzUpzCB8rQZ9shvMgRELRem3xhXsZvBbjZaXyc9PTGu3qbg4fNdWmv3XwUoc4MYkgbGxnvdDeadB6WC6K5AAU",
  "key21": "3Bz4Z7f8UqyBoPxqEj476WMWA5dxBdGLqAWApzXXVK6VKWVxy9AZcW3W24hF6fW3AFSaZknwJA82mJ6ns9zp47Dh",
  "key22": "2L14LomsGC3dcnEeAD1YPNXFVKWHU2eQTTNu1gBZcvoZdP3esycBjDd58X6NUrhvruABf6joyKWh14wUYfWUytUd",
  "key23": "5GAXWVngYdcugdqwUgKDF7gdS7NNtyCYoWkH6f7ahKCZ4wzML87Hk5PdEsMMK29QaeixumAZ8dgP4rUxDf4wW4jW",
  "key24": "p63cCmVXmcene9hH7bPUK9B7hTHzUrNb6npmW2eB5568p35njHn6E58wbmNYQC5G1WAYUF84oMBZCSFwncWjQFu",
  "key25": "3hv5QLpw8D5RNnrwKrhJYmtBdXvy2mkvsqeLG2npZ6GWdexbFeoE4oEdvKCpThtdh2nLm6kEVkVJbQpXqk51d4j4",
  "key26": "39bfDVTNTCVxAovQuc2nPpjo5F6Km913prJKsSiwqHgpLgXhYT7SJFUk75Vg37zAHojXZggRAxiaYn3r3TRxCcqH",
  "key27": "28Jkuvte7zmDdpoc87tU9CkCFqTWf7Tsy4XhKMa9RvQMLUnkci3J2D4vV2AcBNRb5KxXYuYnAZB6EKVR46RLfLLk",
  "key28": "4DuhmCXAEPckVnEJRqw6XawLMbqcnWb4UnzMAocHHBisgopRgaxb55X5yKLQUGKoJW4rpri9xijQm5u5C4t5BhCa"
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
