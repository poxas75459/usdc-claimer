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
    "4do9mz4YzDN6nMh6DKWiAjBXQ9LLTRTdJ7MG2CFe6CKzcrwATkQPE3GuaGBn5vMqwTyvNhTKrnqtF781h5FyKmMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dasRAcJ83F1Ei78yyHyLzipGJa22TZaa7zTC88nrMKtoVUfsqfYgZAKJYGC7QP55zUnoYr2PGbSGoDksM3TUAU",
  "key1": "3aRzgqVUFHvGhiUprrXjBtQZUM5EQjooMcQJx1CUmGCx7NuxzuUa3dcVF63bShjmiARXt5t4cwu3uZ71QoTKZKMy",
  "key2": "3yeNieSyTfvLr7cx2J3E2R5w1T7RNsrhxTdJKeugkH73UFXawsP39m9Eg3J9vqDA3Edw3G1uDi4i8DxBDYcBsdNk",
  "key3": "2kroRepp8KSE3LMAJhJo8ydZbyKLCH7qpA5YCpxxxgci82N5Gi2K7HL4Xk3VasicKcGsYRmE569nS2gWE6yXrAEf",
  "key4": "2w5q4M5UPrByaGdvMKSjwK6mzm1Majjmug9Xta3zaHsyFfuYEcZhjbEhSB8uHtb4WENHKYAZJgxRhLoVX7Mx1wtG",
  "key5": "26xSKS1R8nhN7BrihhQR3i8enW2zbxDPuSyzEBWDae8Q1E9N41ZW71qabqAy4Ya8hHrqr1kegQ1veoz3eDPVzEkA",
  "key6": "52Xa7ZUGNcPLwQy99F8YiGaPFFhvsn8kpQbgNJTJG79eFMFyPGWw4yu2pwS89n8uUxjZEjYY7WyP95TLRnqdsRgg",
  "key7": "5Cyt4fFeBKHAXvFotV78FQA1mzGxbmCn4bxaq3k2GTUsxiAq8P694obMEa3NK2unMq9UaNM6LEowh3GwJVuBJWa8",
  "key8": "2F8ceZ5KKbk3ZZPJPvQoZ16ifP9tHtmp4mqCkjMoY14zuDFGpbsMuVaT2Xo7r1bfVgUZDFmnWototbuGpQKPcHYu",
  "key9": "5q5Pwh1tBDRc4EqaNvKXYNREAV2N4KksTQYKmMyGaQsbwTBHANoCKoWnw5iP7s414KFTdLaXMp58MT2z2gc3DaUm",
  "key10": "5Dv8fLRwtv4U6PTnDa6VHf4q9sxbFYiS1Wbm9zjhAvEL2FDcLS1mEKgzkyVXRKY1BNGuVGjLUmdMFwW3ZZkSDinH",
  "key11": "5HpPCHLKMnZiGAc92DRfPWndPpHKAMRAStB34We4Dzrcsjk1ESnva667gwZRKzQKw8BmvYWT3KfiXu44m2cjWzJu",
  "key12": "4HPezvC5eoNRkisr9qqyA8P3vJDCvi8kPTH4oVyMKNJf6a6ehweQWUKUUUjcm54f3GUAE7JfoYaBbaJkMwJwMLHQ",
  "key13": "5H9pB4YSBiauXVf64G6gRVEJLBgcivLMeLGDW8V2HVByGMA8B1w6DseVcu5Jtx3E9gU7Fk73VteypuqcXuJYkoQS",
  "key14": "4Q7U4M2RiumPSJNvWtVvhdb3MdGrBqjLt2nb6qJKF74FYz2gVKSES9vJSKnuCumR7bsVb86aguy388NQQ388WRHK",
  "key15": "2gz4E339duqjKstPFHB2G2xcTbV7xEbRuTdvgL4bribSn2R6529YdhgabMQMNHMpQ6joV8Md9RsxyR5Xxm3VEzDx",
  "key16": "5gKVY6vQh8iPHo2dBbFqxXuibtabtXrjU6obvQc4y4MZRTt7RPggLiF6VVtxqvyQJzZpsLXCSKuZyv5wE615Wpo8",
  "key17": "9uu39DNWzhbbqW7DzgVdA9nBAppsczunf4bumds9XkzmD5vSUddEE2Ng8RQks5p1HKS9vjcjUfJKaMAdfuE6Xtz",
  "key18": "64tWqd8DENueheX7sH2jBRtThu2VfD8Gk2i28tzjTGcXEW21fqBse4tGS8qGXU7o1oJyKgWAhmButEDPfiCPtshy",
  "key19": "3gpsip9UxcfTwTqM7X8jffB4bPPwFQi6JnMb2mwxqAj5ZoxUSNJjF181CKXHmDTrmwBFeRqkynPTeJum8YrpcxnW",
  "key20": "33ATyJZ4LK3Zf4VHrUJSJzTj934EFcDYiQoGfzivaLUY6VwrV2FyHFyzbNLdyZakGgu6Rsb5wnyXS7Nf5eqS5pJD",
  "key21": "5JCcdRLCi2KxjeSgMCiDP4TVNYZhtRRPM5XKfHfmjEbciXfbj8yU1WuuMNAVnUkakqWnhAvpCKK99TBQiH9aDexi",
  "key22": "vXTeyEUQmiRsPykSVRRCynnGkvAzVrLdFoJZiMAnxW64E3NdH2V1Mz8jmPGtjVMLMybxQZo6Kg6HJ1ChCrUoHBz",
  "key23": "5HezLGMG67Mca1yZX8mQdUC6neu2NApkHFrFhxynzh3ifBu7YAiFWgZZ4GdpodxNEDRoBdPoSKbaLd9HuFywswpA",
  "key24": "2rippSsXw3ZGQAUjQLTUA7RdWQfnGa9JeabDa1MEsPwsagA5aHbsdWK8GFuPrRnjqousLEetEq2PtMxjCTas3A3j",
  "key25": "2urvHsKY4gJ2ieai6cHtsWLfpc9m6JjeVkjaEoUjZbh6aPK8qhVHkdehKoZE8izrRxp1Zh2YpTX2VzY8NS4jLkgZ",
  "key26": "2gfLQjWjNQ54LyxrZRco4hHpRLTNgxdhTnC3s2gWdy4UeTCfzi8ay3ZfjpyXKbtZsc7L5S7W25G1HPDxsqNFZ8X5",
  "key27": "3xnaJUPyrHEbYidFqwJeRzXPw8B1CjcnMx2E5kDgW8rKLhiXn8PxNX9Tiu8kYcXx3hXNhqYXFLs4CQHugAnLv68J",
  "key28": "zKbD8nSsoPVBSEwLASUuVJtFK2tFBbk51xvjXsg7H6yqFpqrrHrzJPwRGguFzV6JyMsTPx2GzeGScVUSS9uqetk",
  "key29": "23bvCmZWiom4rGTZ5a9poVBaxfnvJxgs794wLa5svRNEP2HcA7LixoWoetAHY9wYeRVkmb8fNChdQqwqCZFe1WGA",
  "key30": "5K1913PSdwNxE1hCfUB1sFPC5DDNJ7uwEUMaWegKwY9h6vF2QEKCPwPzbJ8zUsMbAmznME9YxVpRwivgcX2KrDw3",
  "key31": "62wKnVjcGLi8foxB5suSBqevyuffVbBoTS8MwsRwUVAubQvVRSCMeHjXvj6qq2VmnRU4ZtsUc6rzxb3zgDLC4Nfb",
  "key32": "3mvyK7ViLcnygTX8hWh8nQQCgkXw5pT3jrduLLsNujmz6rDn13kEAKi3UV15kVXuXb5qDjuhgzCMW3PBN11ECdii",
  "key33": "3DwKH2dGXNtPXz1zMxpnMsxRue7U6hg1wGZqYaUrWMjqSiD1gPyFLLEvAohCFbh3fQ5fz7xpF9mSjKEVqVQD5ptJ",
  "key34": "5Q2JjX6fmWusAHbUJx3cGFoWdtE8RZF2YBFfUxL8ud1GovUgVSzQfiswpMUjaYCdDPre1WVfiXWptQf71HEWsXDV",
  "key35": "3TLSwjyXkaHKtfZJVM5Vb4BiwhLKr3wwxUWrCZPaQEeKvfbRTma6dugqf1b2WANv3KVU8et7XcP3VfRmQ8QnK4Ui",
  "key36": "aiks72RVWmA6pvvcikTEptYtM1DQzxbikt4h4EG5dRxR5vgoiD7Z4ASsMSH1tm2zVepH6ARN7a7DN9t8YpgrjX2",
  "key37": "JfgReturCGpCV3kAMWCDLbWonXWXfM8UZyN1tninbFkEoUwAw1XHmUAppKTmALaw47oPo8Qp3LfHrponkrjNhEa",
  "key38": "5Zf7TXZ66DuiZzxrsvMbv7vsU5e6QhPMkEQLBTeSZmMBABKjPnALvxWbKkrEoTYMnFBTT9dLtaeRP8fd7gRH5rt7",
  "key39": "5pigN8a6VchjHB8XSdPSWBF8EbkQYhfVGhvpWRBWbs6ovyBZDTaYcoNF2tvRJdkRh3cUnTio4jtiyCCZDevdCKxv",
  "key40": "4hJH889oZtkmZJZb75By96Ea8mEYf57u7cZRQGrX6pkfCGkH9c6icgRXpL6RS7xo8v3bohxkP9EzefyrebzoJ18o",
  "key41": "22KkhyuXH1dBGFmsWm3Bv7E4LidBYb3AJLrgQJpzRydCf4q7ezXq1CS2UQLpgqHn8tJTx4JCmN2gzoHFXBNiGSeN",
  "key42": "3R7dvLzUFNR7F7EfjdAifrRckLvoitvRuXqpXfJ25tTEk6Bku5M4o7aN9eqeofACozGnimW1Bg5fiEMMXhJHVkdJ",
  "key43": "3kurf9mHSYaBDV8RcDb63LuohC7Nb2VdbozJKERzYQiej9NmhXV6oNb4LzyyAbqKCo3qSqXuknxGGghrsNupoNap",
  "key44": "5HGVELMAgZuB9oHkc77nrhqLxq9SqdCGXWN9sN5aw35PSD4DKPnyo3ehPvcxxXYCyP36EevShXAg33zLQ8ejqrXw",
  "key45": "3cwFGQZeeRUXWbT9QuC9xd6uyWVd6Bq4hPKat4KJMLLDhTeQPQdp3vdsvdXsFTLWxZSxGoBrLDiTvPsi7ctYDhH4",
  "key46": "5CcnUGc4hA99wBggXAPCNbbfDifGQ4Zz1jeBrfq3B7vCm9eAFwfvr9wekabeVgXHk9SYKKKfxjBp5ZsdN7YXUbdV"
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
