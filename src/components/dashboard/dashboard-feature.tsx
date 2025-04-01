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
    "5Bd5KQHujfQ5h1Jv8u7mG1eRvy2qNQSqQ1cbeEUFAN4v2EYk728mc8zWNh7QJBVsZDRXfsZhR9EwRiL9MDnGkeLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kc1Cmu2CfSZLeqzdfU6MN42nf97H21vqd6R8P2BYGTfm8Qzi1oN4RZKtQVEwYMpMk9fJAzPUtw6h11KoqUQchrV",
  "key1": "5pXGbfq2bHQsE3kcE7yndeAKqD1vikKqnaZfLJshJrv7956n5yi2mn3TMr9qAKyeMdkPirVoUwWeaYuBqAnupwcp",
  "key2": "1BfF5LLoKSci4jgN9TBiUzX8r5qTUAqWM5pw8NQz3yjs22ymh29RdbQkf1179CDdFBv2jMz8MgFCGZ46FSBXiCD",
  "key3": "2KARST6QiA2AVgm2u7vRN5vVdDHiB6LGFc7Mk8iMUtoNsUDzM5DgJtkGrgxwhzAyAcjvKeP75VhnCNp6Vubayed5",
  "key4": "5JL2BpvLS8oaiqfvJA59EaiHgqcionZ8eSDSoKr5uUaTC4wNxVziMEn77tDG56fim1D77Mqw9Nneqa35FD924LcB",
  "key5": "5e3atEophhRxSS75TZqxXsFA3kc2TQmuFsNJjUKw7o76zSWLyvec62RcrkhmYD9hFmut5YvcPwucYNXNA8aDAoQP",
  "key6": "4P654xZoLxBFu6NfVpUvx6d47ZUVja53TVPucfcPQo8eHydc1EhFDUgjzMcyGsXABsLzhRWBsbV9GevpGkD4NFKH",
  "key7": "61co48GKHjBPUbBHBY5NnAzECMjRzxPEZtmJHZXzd9VUcv8G5JgQNdBHhSwRvs4TvexUoGskrVL8ekvuQxSSAEdX",
  "key8": "4D7zpFUAyeXrdPFUtVMKYJdEYcGDQwGNzxFjg5T5zYz9RpogXPwqDaY2dWCHMvpJiQCZNFuAhXQkXj6J8sidPS4W",
  "key9": "2Yc1dvdLdQ3RaBxj5rHjBsHKkCagaBfxiy3pDKEGnpv8PCBjNzVGVsXJNjdrVn94U3TWDPZYRZdZqKwn25drzG6L",
  "key10": "2iNnV5z5sWsRZprt88nVi6ELHjbtdRZSp4fxrvHrY57GwHFmPENMKok47ck1Hx8XBJC3hDXZePJ2bJemqrMA9ceP",
  "key11": "2JK93HEFCRHkfPCbJUo4CdK6YMVkHeEfxNwskGanvyxfzEwXPfxz7p3FZ7T8dzuseZZfnG8LkYvvpWx1ysjWJFdV",
  "key12": "2u3sB61hoEMjsru8bJRGAy6GxF8LsiskUzo3o86RuZ6kqvmrCqbw8qedTjCaQ69UpFuLfRoAQTbyhhN8MYqiTETt",
  "key13": "2fYim2T5nb9Mv9VfAJ6zoB4qgTwcu1imsUwLzhMCVASQoYPaHiPjzFoVrPBTt4NZujSYh8kzF229FH6dEzKDC7jt",
  "key14": "5zLLeEVcnqwiMNrhcZYJ9MxAixRy6huaGXuFiWy8igdzrxMLm1vpSu4aWSCaZV1XK8huSbmCd2uabDSeusXmbwuF",
  "key15": "5ua4Pm15vaH1EgVgx4SF8tSmz8GAy7D7UPGruTowcCWGwWDgdCGt8JPe9ssebz616qhAeni2GJe9GyCpjfTFsY7f",
  "key16": "2DHqPfSm2XztPs8jg1oqJ6dZafT6gtyeP19sy3LgdNyfxj9jo1wAMPJFveKSy2G9SL7yHmKeEuTMVqWQhofF5Gn",
  "key17": "xQvahZuTyrujgo5FXtLUWnJUqj7h6TxASb1g8q2vfAterHxdndHptNcmcj32fpNFvB1VPfiBb8ccQHvpAUbd3GH",
  "key18": "64Yx5k9wyu6FgJNeaWz4DVw8WCxoudJ8MvM5MG3qXnsQu3iPZv5VvRwFTMHzBTDaFUf7cRjo8NVPsWKvVwYxfwED",
  "key19": "nD1QCsRDiUVUqmAJywzBgf8KongupTkEtt6KmLfzcHFVtiEwtDkS4ZUWcARvFqPFj4bfEvckyQX1AvmYc6Nyk5H",
  "key20": "4Vkzwm2Eo6Maj73WB8mRrp7SZ5NL2dgYYDm2jebWq4qV7mxH9N92Jf1ist29s6N48DV3Y17a6Fewc7XGCsv3HZxe",
  "key21": "49M7c65KK8BDwUZfsVhmYJthzFgLwv61e45po9g8nmUcdp92wSEpzJ44bMy1uVvsrrnMQz3AMud6cUKww3JNUP3F",
  "key22": "CdTuSF6N6AGGAAiyiz5CryxuP5BK6Mcwd3inNeKbnMGN4ACdeUKvjzgypc3CosaLd4F4Ztm7bdME69bPwE4dtcc",
  "key23": "cSJCfMejC25TnM7mFHMzuqhMwjvUWpC9spq7WwppvMT6P5bFRrRR5hCfqdqK5p4zM7hsHQUAmDfBvKEwyrrsgFk",
  "key24": "2b2ck2YpALcVZooeeQ7J3y6AZ46HgxgGsyzwqK9KJcUBkE2NxBHNYzDB2mRzbbfDuAi38EFyYGK22a7LVp3QJfrF"
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
