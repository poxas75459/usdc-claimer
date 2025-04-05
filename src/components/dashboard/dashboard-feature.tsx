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
    "2Y4S9iPjTMbYqZ5bkwzGx5sc7dbKkSw8ECqYo3ACeEdgPw2iR8tDvAYfFoua916HL6U3waGmPqPE6HR8hoVB4BGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCsvw1UvY6C7RoEPqetxBxhU9x2Wv1sgpFa3ySJeYNL1Raq2EMLDVx9JxPoVEne3WA8bjBuQvyCcgs9ofuwL3Xt",
  "key1": "bPobuKnXMK9MwqJEA56PYQ96teq45SJoKutvWubc2L669395DpYDEC1hdvGvKKHCaoGv6nHHhGAoAzptCof23jq",
  "key2": "4nwNX7JdgbbaFRiGCVddUDss1HgSa5he2pAvzbnvG6sYE5oGd3xgwiRQoCg8QknEikC6tkwhw5CD1pYrQZ86r8nK",
  "key3": "2rHidr1PQBj8XcdQoaQT9fp6nfsCmSPnHSYS2aUeQGXiYr26JsUpJg8NpnpVeAMK52DwB1XicubCJK1vmus8CbTK",
  "key4": "523jwNueENCdEsDYLU72cYEnbSZoC9kV8PLhCqmmVXVHqqP1jdRhkxgu6Y4tSm6ttYyC1PnYg7H2fBJSjbts58nL",
  "key5": "27Gyktr6Tx7L2reTENYwJrWh6Nz3m6adkF9LtTebCKtswpHE7f6HC867vabB9KzPjeka13TyQ13X7ck5hBupsGue",
  "key6": "3YWHeLYqujsXUGruC6iZ6ibsEZPjTwiLtiNihUY4XDSzstcvsp1ekpR5n4tcVNPN9anqJFsRLyzqSYSz5F6L7PLF",
  "key7": "5GgFqfYLjVsW1Z3gnpM4whSrRd1UDXdm8hr9auKjwWPynjWimTQDP5LUjMfU84YqP8eWxEmPJxxiU76aYgBxuepW",
  "key8": "3AS7cYd4EnZvjjppyPecL7MujZBnE49etctZWXwm6KCk1tX9Kd9txc7eAWPKTWyPZ9aE2eREmfuE7YJ9vksqYGBM",
  "key9": "2oVFAdrdbZu5dnMMbTqwbwm6kZdPW4oruy5Y4DwZhhcaCVjHPM2ANN1vCY47RoqnUkrFg5cUTQNVzx4MW9MWNriL",
  "key10": "4jxBuqmba6aweL526JRZZdAb1pBeRY6sNj9N3MernZFsdgxkJb839DuddzFCUaCdFafRdBG6cBgpnBvJYgA8h2yH",
  "key11": "9aJqMMbzbZJrRDS9KyqHN7rT5JV8fvY1QYyx5BWZ1eCWVwUanGi2xcvghHeNcyM6uXpfhn3up2WMMMCTv7mrLae",
  "key12": "3X6kLXoEb9dLvsdmUHWFwEzr1LDdCWqe1mV9L2GJCsrJebYP1uef8JrAWEtv5nV4vCGwkrtier4FMPZA1h2teA9T",
  "key13": "r2cvatGLgJoEqwuhjanYJwqcWcmpQBBGwxs5oj6NGQhfBYEKuhZQ6UsSmcm2QrBufEYwudf8LgGp8qfsP9Qs45j",
  "key14": "YsYMaYFvGPgRwLjZvWp5cJkhxAt9xeJVXu2d98q5nSZbtDHUrxzw6daoDanAVk5YginN6Au27QF1mCxu5N1V8dM",
  "key15": "c6fhPUos7SeX5vPFH2ABAnSR79vxzgseGUhkK4vFgHvbMNaY1gvnC9sUXHscdcxL8SjPqdryfvYsJBVDcj15TQC",
  "key16": "26Vv5no23os7wXR7xYorM9pxsmvb4585E6pLoHv2o3h3RyGdjpK3B3HjRuqX5tLh4bSmv1TB3dbpcmKz3CpbPwdH",
  "key17": "2gPvsan6sfLRmuexHU7s2dRcRZ6ubYwmg6ER3eR55F8rf2ZaxU88dabAHEb7CoUft36bKuCXFyTq23pzwaknRV74",
  "key18": "2r3qYdnG7KKA2m4uG3HZiseohbhYj6JdTMi8ECFcXKBhmWPN1u8dAGcNC4Pr1QuokcWVzMVstMkR7hFzXdhHYM5T",
  "key19": "4rZg2pqaYKKn7usYVYeuZKGRySs2M1Qpdd23rNJi9Rra5cW4jaqzaazxcbYQTx9uJ5U1hn9eaf6LLF8QV3okFuBB",
  "key20": "Fx2fPtaSqK9oP6ft2HkiNe9GmdsxmgnZSmef7h3MKq4yFH3gN5Vj8UwQyCKaBN8k11f9cS5xaKTYSsWoifqwKz6",
  "key21": "2LoZruGyPNkvdpzesWxhBKXfKgeivVWq6B2Ybn29H3maaGRS84BYAY9sYtSo9fhpky26vnhi4tg3zEvhqMm4A2xQ",
  "key22": "44w5ZGghVa27Awbwqxqeyo8nBEUNZX8W2YHSdb6ohUYFBxUzqv8FJfJmFW5m689Duz16nZUBFNNSi5dAprMenRBp",
  "key23": "2gYmmZ6tmQZNy55JXfdyEF3yRGxY9XqWFs43YVrYSUfWHMvU4uzbf7Xx9jZpyia2CKBNvzA6Fqq7XT4qC6AE2TYb",
  "key24": "24zeTSF6znxqapyfvdbQFtFFqSQMPZ4oG1MSQ8qBP2f9wdNo6kLSNKECddwSrnKn98tNfJaYq6kCB9N2S3kAZcgY",
  "key25": "4NzyoUZtQMLcCACe53dUEJSPA7tDndM5WDd1GfACrPFaRgxRhpmWvzfCNiFHJtAQbHepf5MgGrvbVNdw5cq8re4A",
  "key26": "3FjqbB8P5pBBJJXfHqSPWu2CDNgmkEEv6jnMDVdXpK8yuPRerTrexdn7FPNL9P5WnKA6m2oiRcMkZPaF4uT2NfEr",
  "key27": "3tysJ3rgnQqsAeHjWvPmrLrH9mragybvjZXbk5rSvCn3hi386GBagiUQYQzZMAeC9cfqaUQ2kB3gAvRTidBy6iPY",
  "key28": "7kPtgRwGQatSe93z8MB3N5fSakSLXzAbbgWvLEfDxiA71S5PGiECMPm69jYSiGbzS9ckxPY96VHzWfuHoVZoZba",
  "key29": "39tKvUXjvw42hknVySsXoFo7dSEqcxrXzEg9w8mS1KrNVMgUoEdeTEvXd1xtLxtBK1iqN3BjnSwhHyj9fftEh7EZ",
  "key30": "3PPJkhtJgchMoy5NFrUPiimHZNTozQiHXQZn485cdjty3oaoKDxrdmVoj3TG6aNH8cf8qu1fX5UwrQAZAJ6jaTSu",
  "key31": "4Wp7sV6YorvTfLHMnRagHWWyy3WpX93WkbUgfc2X3JPuc4j6RAYbzdUfTCt1yRUivsGR5C3iR9dDEWBKmbZskRJe",
  "key32": "4x5Mb16PsegShPh32FeDZkrBPy8gg5q6sLHPCLAUJkrARiNLpdb9GZFGe885nsdi5CAxAoy5iiPcE9iRKKztttqV",
  "key33": "dP2VJ1B41Dy7fsKXNSknySXXQ95jnnyNRu15prn3qQRJAspP1NyRFc9PXy9UMcWpEYVocpfwPjF6Xzia33zTegN",
  "key34": "5n8fxG5JVaCcERoFsnjEHZ59JpgLfi5s9MEDvRt5gVp91ZwbAh55H6JGXJipTHFtYT5v4JrSiU62jobPc9McSK9F",
  "key35": "2vXUVUZgoD9Hm2U2e7cx3LUc3GBL6A2EDWoXxuNfsrwgMUBfDi6Rgsn1BswYXPbx18jG1ouHFFLoiNcuWWjFELu1"
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
