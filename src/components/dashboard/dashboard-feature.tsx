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
    "4RG8bQG7Mcra2dSLzKzvbrxETHnYsn72fUxpUNzwU3zjr42KGhPw5YjoQfQWh2JszNCtqiMkj2Bv3B4L4pGcrNcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxsSx9TP9CCVRmJ2JEkW183zJJiyKCEcLKQYrdX5rYxzGfvnFLJm1qU3UpbZk4EsHkLg9qZMGqZsBVw6Qj7SDdt",
  "key1": "2Y22V533S1rDtWb3YFVXRkaFBb7YTrbSe5RXPyj2CHiyyvKvxa28XtjkbzBnxGrzefySFDtWMxjLg3J2tBanfqAa",
  "key2": "264pA9mTTVNNPyUfJp5TaisiRntkK9BLByoQk6sZvXkWKWsgwPdKeaupagx7nquSTMWL5n8bHo8PbJKpkHkHnCuy",
  "key3": "3tZptG82WimUBXwkh2wXBEPk5x1TyLFtNtYoVg97MESPpLwXa8iK3RRpxPnpq8thmui5U2z5BufwdPBtHDYvbf28",
  "key4": "5fAFqvEXwtyVtphVw4HDoEEGTaAzy1yQ9jHJJdEZN7VYQUepmsaMKfbqfHJavbo33ZxJGGZoMJ8u8tZ9vaJWNERu",
  "key5": "4Y1bT5XvmyHPC46tkSBbwnewChriGNQ8ngisb8X8bBQyvAthdz7aG4Fu9tnDJ9HkqBghVdHzcRzas1dy75CCErYG",
  "key6": "5DoFNSE7wo4TdFAbAPxJyFnUy2fGUQLasSxbn9uaw8n93mjASeyXtu59gQ6VsF8C9mJjcyjiLRTz8MhaX6D4drNd",
  "key7": "4JQ1avuQAxP22LUhq3JFvcUHQMC5MBha6kGCZpLwfdbFvJchJTq3C3jjf57Cu4xbRqBmZNdAXJKVVbxoSo1AanHE",
  "key8": "gbPFXN9E1sVRQqG1mJHhLgbPPkmEicg1TJAWdy8mzDC3X3FpzR3uBhUvBZT1Hj2skEk53VBz82wveiHLkWinFd8",
  "key9": "4Vs5UEmXagSFQbeUUM2adyKgQzEVrVuX2bADsBKu48aRZzQzWuZKLYk7yvap7N5U81CgbA5Q1dZ5oRFyf8fw7pVY",
  "key10": "qqP9cguzHG86H91Ys9cj4cScDQPpw7BD9Gohk5mTtvgdWTyKjQLxpqFyev2W5Uri9aShdLMzo6KWXpCiuL9XoY2",
  "key11": "WSKCQY66enGLUM7yQGrLQbM99yceYecz9e9MDkngTtNoJ7LaGk2KTW2KxU8GeobEaDdbHkZL8sR1xfCgAS13EMy",
  "key12": "66jUD9H26V9MZ7bT2w4rbiG5nUADKbTGhyqEbapTY8PKzsBp8z9DAY8p1f4bgrbuFx7X4dm7h7NL54xQVA53Kjtg",
  "key13": "2TLy47czFYDe1QHcntZfr9TfYwakWmAWoDZ3f7EXLKRexSarR2j1pFpYdbEkhUbpzUGNGSrY5N1HnoFFAAgQw3BE",
  "key14": "5dV54QWtyAwaJGK92ezSmRv5jgtBNE41d4YXhf2aRBSwZ3a7VAXaqkiVSiwBABJPHpwhyCg4yQhp6JZz7c4dVCmZ",
  "key15": "5zWxAXX8N1RAJUcgmLDHNdbZRAtc8PzsGjHtzo8evfZnbjNkrqxUs1avnmP5zZCkKKSFtsdbGcX6Lys6xQ85uY2d",
  "key16": "4Ts7Ls6pGBUiGNRWeKuMxApsXoGKyZ2ZHRJW2DraJsCUC9uzqwLY3zcnUaHBuoqmYqFp97iFHoHa9Msv1gSavekL",
  "key17": "34ES1TpD1BFZ7rczfvQquEKtSnt7zmCvqEgEnpdJZBBXm8ra1kDXPM3heZTuVk5q5zEtyZjUQyGVtFP9e15U2YQX",
  "key18": "4oo29tFdzroQa7icJ4np9YSK1PZhsdTcpVXyzScrhrnC5Rfky7TPSUXPrSHYuS7HnH1R22gg6mdxPGQLYN76g5kd",
  "key19": "3A3RFH26TgtztdcyzxnBcDfUdwCzwzz5mNpY8pHEFzQUfJUqsQtGaSECK5P76WS15zZ2HPDfyaBfSwCnQLE6c7DF",
  "key20": "5YFkHL7JnQz5Nb3WUBQxUiWTx8Ys51vQp9hzz7DYkbH2ReAXJCznewJwXjz315atH76BhXy1xwVEyv1YNueMsoL8",
  "key21": "4FcqGGQkM1zLcLzFXwfCMG25HZa8RpsmAYUtcZayHrHKheE8J6qMULkGi2nABUooz5SFoRwLsk5b2oxRwgoHE4v9",
  "key22": "3cX52vjs56Y39N2fRt4Ds6zViMQR7gqkLgoYNueHqW7GpERDaCCkGwkV5Qz6pCyRVxsvdJ3eaPA3W2rE8Mutfcy9",
  "key23": "wFiDcqKpAttTCyfkGzFmMVtMaK29yZ7Eh3uoBfPd3P3a2VmvR5vWsz3wLyEyfZwY4p9DFERdmoqNEe76EQ6oMrc",
  "key24": "4kND1YGaaDdeXTgv5QzmEAaGGLZpLSiqx3PyPAkfeTEEJuDrMqUSBoifMuNS5RycmzfjmAieq1mfCpCuEWqoRdC8",
  "key25": "5CRngamR8F6qg5tEvi9Bb5TjwHReJtoNJHTo6btQEevWWXmb76ukipui4Pa89yBFVAu56dV6nmwnMtRZvkXBz9i",
  "key26": "26yp612bLgUZMvk33M5sTAGdETETgiANJLuG1BZNkaZ9G6jVUZ5Dt1P7piwWik6cSgH37p7pHzfbpQ31GAzHU7m6",
  "key27": "2WzFdqvC6bKRnUSauHeN7w9Wzpmp2CP8iQaQeFGbmnbfZKJCMtcZJLKLY8gb6KCFJ1JQX2mduskski3qwa8cCDd7",
  "key28": "62hdQfpNPKmY4EDdPNzmeAcbnDik1FkSn3WroatjRth17VyV7kAHPmeqBR6YqfeSm6pQZ2fAXvy6WK6WEaz4pE4L"
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
