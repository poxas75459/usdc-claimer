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
    "2ndVSzRnv646pkgPdgCXiiquVx22ax96BHZwS5nTkxahx6qjRuEBeuouvhXpnyGNvojJ5HZxDEX3MkfzjbN7i9g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUQsBYkfjhMeQLmGMszTajzTrVFgcs3SA3uxoXtGk8GhY5BhL2b9ex3VRRu8kGR6XBsAFa56aiSBP7QxWsDhAbJ",
  "key1": "4dN6dF6kXLGfmoMgPfXj9XzEd3ACQkuCF622SVasAFYTYMTtec34CGjDc8unMvQUu4mrxpBxzSjLJbTBFEG6qFAb",
  "key2": "4772cLryrqDkowu7RVjxAbnEQyhABuc1d3BvLugHJUw7xmrPQTrKaz9Na1aXqSfA98vxmLHupnQyGu5XzVcfLYjG",
  "key3": "254yCuisDF75ngap5z9N5gS9ocuBTPjPBFPpJP3JnEBBqozFieoC3PrhimGs7V18UYZSarnMJB5Th2o4sQC8w1y5",
  "key4": "52yasFn4RLz3fa9zeZXYYA1TFzD1kBznxRjXpXJm4U1E85i1TEi8HnYyzNYAqadXpzukzBpzrsBbNepn9CDD9s2",
  "key5": "eTBRApsmR8Fb7F4eUbTMS4Vm36UPsEQNNnTBrCTD96B83Tu96kWHWrCvvCuZtVrfRKEyqp8xqCtsTWn1z3SKLMF",
  "key6": "4TQ4JPN9MeEmdmT4339YWJfuAj5NF2NZmkKhdjwBQXJHqugqEENcaRvzNJBMBEtza8E75ZbEBvXQ9o5Ae3j31uHz",
  "key7": "3i9csyBVvW9TvCJ9gyUGEE1ZgdF29EG9v7MdfWK3gXDdUmpf4yL9VamaZTkmkP1WBTUKKrCDN46Fu3VSTZD9apEN",
  "key8": "5NjhYFpJvXGtCWQj8nE5d4u7rUcs4nGhdo3McBxCHQpA6ciQEGx2atqwug6aF5BpGfJNTxeR73x3m93DHPhsNJcG",
  "key9": "3Rgd4kZY6eobrGuNPan9iYQebCp5cncEHjLmmWVZ8t56uMn2Cv1AcST7RzVemJ1EyNg7FdcfG4PLvaAiBWi2Nd75",
  "key10": "5VwpEmj9DpRGJo8RRiE9Z1DLdK7EiwK7yrCV5jsXWgLdCA2J6FhqUwaRn1usNN9Jf5qPfGUvzBzUmNevDiZRhW1L",
  "key11": "w2srhtNUxdXPUGaJStvYWrvW6NsCc4AXgZBwp3iMMDWjGJKCVLUinXqB3ipwNibdSsBrbxNdp1PdkVeDekTwUZY",
  "key12": "4f39qz75FHN6ok3qmsNsE95uRqsFZrhyiCYxV6BMhujo1nUgvqTyGEEwqmzYeoPqP4LsJzcUL6eFgKUEbH736Ebi",
  "key13": "4s8mU45JaWy6GK53arUrAK2PxXUYKhdTtMDWgsvHyogrq5fztNfGUfLTtUZ85HKx9gU9D8PQFYaNih71ok85A6SG",
  "key14": "5JejVpTFvnf6ksVEqDNkjESxMEbbpMeMHt8BCGAVqn4qw4Jb9giN9WCq4sHwkJtNp3dH9R93GetriUyvSCMEkhwu",
  "key15": "43cSagW8A2YeLfqB7iSNm28QWt89MooRwiPjCbRYGEmYx7TqAhNRSPmjcX4b4nK9kJzpzWzEasjQtKykAmN9hATE",
  "key16": "548inJDsfsKipcTA6yndLin4XwhSFvUFGQs7WdwDRZhbZhktfDUK571aLvtCDmXsmLcHzMFGsEghitNt7mCEhuCN",
  "key17": "2YjtVu7jpb55nkrux5KiTAF2s4esD17nDTqYtKknDDFYD6KNiBjFjjk1Zp1F9C7rnsX1Fpw99cy56ex6EWpRQHDS",
  "key18": "36t4eTx8eM8ppzBV2BGD9N7GMfqf2di5PoSEVAE3SSR6fU12T2pDKF7PSyYYnPvuX7vWjwdhFHkZqW9soEf5ufU",
  "key19": "24rwX59UbrpdaMJmkFKKdEMHneAAoU9AtchcL7XXeDiauHihuR5PY6UV48bonu5U8MNr9qLJHmDVpCcuniiTUHq6",
  "key20": "Hog4CkkVT4ZhrMfnVhHKd9e15KoqTtptS6gtjFn8UB6dewdsKF9wNYpwc3m84A9uFYDATre9ZbSi8VJ3RT2VYV9",
  "key21": "y2tJQaVNVruv2CzLqrziY3Jozezdh4WPMeHg4ZCZ1CP1WLR74PccHmgoDp9XkFAF1uMnebB1T7aX6SS6zYq9ev5",
  "key22": "QWLCCURrEeWpKgBnUVuA7E5mzNiXZj6Df8ijB4YfGtbhMv9xCMb5rmPC54Qch4e5UHs7H4vEs25G851EvdFQJmT",
  "key23": "yGBGRrJF2ZuZVLQTUK4xBq67JfR2wKy7yJevY1ZFmVm5My6FoVwEg4ioSEpvwN3aFronEbd98Y3EB11VqHneq1e",
  "key24": "5Az8FJVZonZkLC2xTTEZHBNP7rjwGSXjkarUovzLyFR4TaLRyGUifc9mp2VKtfkdyYGk7DB7MdW1ruSHXnmG2LhZ",
  "key25": "36um75ZrtbN8kckJb3HtkpTN1P2qVQV9faDccmKEkwrbpu8Jf4vwqxnzntyqAHGVRw1CKREs5K3ye7pXW4sVtT14",
  "key26": "3TbyY1VsVhwMe61Q6N2Eki1oei6Fdhmynrj5q27Zc1BkoaoqpQWP7uw61ogjzYLCvLGaPQmJroGVtPP62Hawzxkd",
  "key27": "64HsdQLUFRQs5NZRLCnHu4ujKqErYM2bMp81DmtFZrKpGu8QssPwJZ9RwvVxD4dGFvzLuRMfV65dE8kvwRpaCyfC",
  "key28": "3VZrQjB8GUsHEEXaUg8xh28fqQNTDymShavvEyEukjjCpoPf1D2k8qBys7H73gbTqr57keNtw8w8LsmLbG8KpWAj",
  "key29": "3ENn3bvawuT4Koih1VkSoyeVq1fGPBFKsvjpK7Gv8YnmsXfZ8ukSYbo9MwZrZBmhV9vyBaUx7ZAEAgco6pHpcNk3",
  "key30": "5mKeCN3rvTodJtoL5XzAcf1RhfaiHpoMybEmf1FRyxBJ2JKdhcfgsW5WeTQ1a7WoV9R6rff3Q4jvMsdWxma8grow",
  "key31": "3v43qPLXjHE55MwjaPSnNEDYzptomLcPP5wyWjB2f2barKYhXzfnNtGPvPkrZCz7j1hbDWUsxTqbSFmXN6DKYnU7",
  "key32": "4KNkWzqXmyjyDBkatGcko7S3m6z9JJ1iDMSiPTtQ5tPLk9qwhFqTXaA8SemTT5GERjPa9UfdDmpMBHgMxae2t3GR",
  "key33": "23UfVMnwdt5Thyo4ThYkPHKfLcifZNz69aAL8WHC134iWSbDgf1UKWxHGsMfNf5rheSspTq2iEphYSE4ZZ1CpyaL",
  "key34": "37cn8TJ2rYq3jfjRtvQBTYXaUiSD6w3iSigeuB9jA2JPEd26mibnjGnms2CQVvDi9GA6mYjVbDfnxwxDV4GzRx2v",
  "key35": "4bxG6Ap3CRLELjxBdaP2bbkcz2fhxaJNmA6ahsWgo7pRpekUA3k1jEyXbWA5zGdLUsfPWg9T9y4LuCyMz7nQq5zP",
  "key36": "JWq7qvb2T9gEVhBJx94MChJwfumRngMPG7Y6MGiEarufXmzgeriXhtiULvvN31d4FjgHmMDAm451ErRAq4FU9VR",
  "key37": "348xwmhxD6EeBsovXVdZAXL8BTjVVfqcztd1qacH6oDRNPc9jnk3gQY2kx6ob7qVNVQm5ESAku9PeLn6E4aanMft",
  "key38": "W7AGfrcjveMWEyFeHQakWFfajp1UmqxBpmBsbvVz4uTWgkuFZFPWjU8tLaBW2bdQEPgJuaTyiRTbs7tvTaBPVeW",
  "key39": "2P3XLGRyxn4PH3PgeJfLPmbUXsiJT7Gf8gaeZZMzoZNNt6Vm5afzVN26EhhtbJ4s58VrkuPYwhiypYB5axQCJtTU",
  "key40": "24ZQZSzsvwpivQVfo7LDasSgM65okgB7TENfspuBVBzagZBA9T1nywEeR9JPezbL6SyXHR7vHrdcEXXQP5dTY7yy",
  "key41": "4DcRm7Wvg1AZTubsptxjg8tgr56KYTqZm2tN8tfqY27Li3kbVm7sebCJE18jhJYa8FfK4idtentfinZzH2BJA4WU",
  "key42": "5EcaoVFjWc7RBX9Qa1KsqdvJVQpsjeqvbBwwni7xo3QSHgxgUzhjqkEkzzDMQTKvQ6cy8FG1T7iosfnnWGnoVcsP",
  "key43": "65rhcgbo26RnTQSfZBYgEkcyj2TARFENJMZxpsfY6h24tnRg38mEcY4qXeLDK9yWqqqTaLyTf1axRb9fzxcWwQem",
  "key44": "2365KY5DXaYhy1NyKsKDazianJ4XBvdpMvJcFTYys7SERSM1Zo3xW6ffn3YWEaFJxKEQb9p6kQm3DQFMNN4wiYkU",
  "key45": "3sNKKxC3rPKUBmKpMxE36uKkZ9HvKeQPXhP8hULbLJCzAEBBiRpNuTUHUrVQpV7W2YsaqexJG7jidrfQGp5PuZ81",
  "key46": "2DR63rcyo3QRmcjpdUpBXNZPZhwyx9kQDRsNz9YvN9tktRh8TscwuL42Km33k3bD6b6zxVAdwmEhE3hm1gXohdr9",
  "key47": "21pNDKYK4qLv5VJaZraXtxGUNcQWS4aC4n5wsU1BBG3R921mDqN3KNbkDXjexHNrYTtshfkb4aeQsF4P98X12fWw",
  "key48": "2NuaFyZ5gx2q8t3x3BJaitFmUeJuN7nzLjaZFFrVj97JV5YfP1ANPFv8ynPqyFcKhvpXaj8judLvABxWKm3QX8Yq"
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
