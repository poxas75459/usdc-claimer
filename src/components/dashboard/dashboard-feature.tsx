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
    "2bf4FSfe7SHym9z23E2dzDSMJaNGUv8asPwJLsWZLA4CWNM6vh1ENeFSSWLidZjzm78u4vi8AfHUem1AainUk1Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuUeenoNgVPX5Wu1TUw9hNxbvbCXigKgv3xjCgFjVqPssXuELULPbjqjFneUW2ozbkHJYhUij936XkcLbMtwTRb",
  "key1": "2ca1QG7fhhVgJpPmg4RcssRDoFVVpM4W7cma1EbNU8U4hQKEfaHCyevQroG31J3M9qQizmiu6FMLy544QFZwgbmY",
  "key2": "5TU3sAiqVwTVaSvLzoKttYZissXKAF6aDFR9HJdSwnZZUdi9w229MQ8KGXj5Wf6Mid7yBZc6SWiXSU8jVNobSVB6",
  "key3": "4FSYvZt4NTYhSQ9XogH3iUppmAyauWVnAssyDKoVSrGhN6esNpxcTXrSHfz8Z1FRbAW3bxMEsHvgoJYVW2WAkndy",
  "key4": "5YWZsnut8z4dVPmVgtdQmVT8tbKXx3eYGnxFgupaMjRLbcpCMTc3Ug9Vx6tikxaC6UGvgksfhz6j33HC6fxwV2ke",
  "key5": "5T2FNfu2g8daQJu66GzdiLJ1sZhsHY9fERcYokXJmP4EsPjAVV7kQDXz1hYi6G8r8injTbKRH77fM8vfMzUFBS7H",
  "key6": "2j5DBo8EtGtgaj5xRmHGdZb9z9bNFuJR9aZPCSLvYv56qfB351ce7uvCJGdKYaga1RdjAckcmGJnQM2EchKUo8Zx",
  "key7": "4qY1drSEamNrPVUvZ4DQriQmjivzTjbH5ek6uuZCn3kXQAPtBTUCj2Qi1T9CxRmyUKfKcSEJsNM2JwftSe2Fpwa8",
  "key8": "37r8R4DSk6P3fMsBWny6kcjjXUVP4pck94xm2RTqMxeymgTZow7kdzp6kzZXiEo8xt8Ef3WkdDg52GxHgBWLj2Ts",
  "key9": "esZofgEh7uPzU9njQSqgru5atabTjo82bqCAYk2isSjoMrBeBD2w9vYq6YwtGtFvbHcX45srWxfqqc9wDW4FBPq",
  "key10": "3ZPgReQWQDKejaxtYDKCz1NyC2VAQkctDasVtk1vQRRVXGEzr7xUGQwwewdvGU9UphEaySS5vmmc3zQd1EnEsD6C",
  "key11": "3KfUjdSj6D92mMF7ACTCZuGMy5NcqLcx4rcVLkpy261drWKu1hwwNyAn2Avu2t8cyUwWUs2RBuWLcuqoTsVYuyQx",
  "key12": "3pLE7UyxfuXsyr11J5RiG1sg6HM21C58XCCcLXdcRyVQj815bHpg11qzYpEZdVN9UM8WPSfFwMGtyTEJooEmfBfe",
  "key13": "2F4V7ireRpkxUamH8uL9fbu64KUzvnb6aJjmufRmvBHPJMsSomN38if4wGdqUpG2ehvCSz3AkoLVLQbcAhe2Yr8Q",
  "key14": "2tXQTXoigX3Vq4gapwLbgQjzzYEtew7Md7gh7dsM6mV9yGX5Tv4AZhRyGg5gAh2b4bQinfVQHRDQJ4MvbcFJbRdr",
  "key15": "2bY1pS1PLzK6D3wc7MiY7NqDtHWRtTRjsAz4hiooVweqs9jkwjg8Bdui9ANNjWwmRvm76UGMmGrfJB5MhF2dVQ9C",
  "key16": "66cUs77h8EvmyweTMs6j1JL16FFPS4K2oRqWsmQcJrpJPhQr7tihWBkxWvGdb8DJTbJ3khtrHYfUPwZPghMpDFkK",
  "key17": "5v1sLKotdhTTs2xV42XTFRnstSZa4ABz2nCbGnjNaj2L2LFCmm8r1e8QC7WpGAZ1DqSjQvfwfUu9o2D6fxr6Tnh1",
  "key18": "2TfdSW8AaJFyqbJTL4Q9xNrrd2L94uLzmkZcmPzTj2LkEHA3P6ncwps7k7gxUCVhowKXuQ4HiVW4o3RgvQzjvvZQ",
  "key19": "5qai4vJsErZy1T9YZwXsrd4Bgp7sQPJwANzyU3nXu3XgDHEVnkLmYHuz7BbkAcdLUy9yWzZHGv88iK4FJGwWJ19A",
  "key20": "KFETcE5SKtyPWqeSKTEHadAFYjWnZvt4fSgCxvsEfTWm2fmvHv9jWeM6JTtuibQVwpGTEKySz61GmguGZrPhWrP",
  "key21": "ti5XCmeVAvZq9pJ8eavzVpYB9C43XumHSrQQg69MM9qwtTKzGszm6sSxu99PwSiTzNfRssz4tXzYU4AGmakiw63",
  "key22": "23PRzoLGXYAkW9awysuF83Nw4aMcpSigU9AtykdVcKvEaabvNh7KabrLDW9MisKSnH94kqTr2h2YNnm7tGd2gnvP",
  "key23": "2nFZ3UqYbqkEqVovZ5Z2rutUbjJ6cwBW1P1gZ5K4bXVYNfjhELAVkxpvWYRDE6qSTURRaKGCQcQFP2AJ9qvSc4qr",
  "key24": "4ZfGJBUETbJJitjc2UqfgJeyC4iETtjYPE34WE5tm1mGvN9HhZinFgUMU5QHQ2Cr6kWY8nBtXrhkpYCYf6tbWx7G",
  "key25": "4tpQLLk5eWM6AxA28mwzaXo6kfwNSw2A1dht9BMKk6M1FEaH8x4CKZokCQVEyx812e7smnVwPYrEQ9QGEZhzWTzD",
  "key26": "4XcsZkXGqi4bckzvHGmACJxQPxqFj1g1FKoDm26853yX2fwBLDp1RoVQ7YA7fMk95xDg25yaTVPbzTj8Y8o4KjWd",
  "key27": "5AUme2bnHeB1HyZxzQnF6mpPdJp6z9KM6kRCdBxcHZJnVy1Wsz3JddhUGiv8kARmHTJ8a7WxomRECWoQq6AfBXn8",
  "key28": "3SSiKQoqiTAVoxfsL5xTMF29PTXAvxnmj4WLDBXUUFAHup9VEaY6RUmNe2SXtridkJxotpySiJEsFLjDhZZB7ZjB",
  "key29": "E5CktLgCc2mBc3QneAFUxSKNDzW2x29b64mXpoPbR5DBb6x6kMVzvAqQNtt6Ay9e2scq43ZnctKyZ2SGyVzysmp",
  "key30": "2Byrqf7HB1wGdxEGKnetARfvy8kn2z9d17qCCzctATqpcZ6Du5Af9u7bUhgdnV4fiPkYowfx8sDT7T1khVTgYeCt",
  "key31": "5nDhoTK2HcoRoCxCVk2EGV53oJ59GnjvG19LyfRtFSMtBPRbQ6ANeLgiVEa1rtXY6AwFsyMu9zvTHNRsGHg3DpQ6",
  "key32": "3fXvCSvwMmhAqAFxAn79WeddC6V6TCN1X9xbBDg1UixwNBkK1FT6ZY2ij1L8TbYa7HyxQj9Ep2KUFXYcrQNh9qpm",
  "key33": "7VwmqYLR3AABMJaKs3B3xc4xKMGcygFfJcXA5NTaKJLDMJFSqwMNkgqsrDFpC9nX5z5TMtfqV4s8xPjrNrNYcws",
  "key34": "5rHTfmQvkmGY1nHkhHqdffbW2eZJj6QMe85DFJS2P24WVMRZk7Eqk9NoSJ4G4xnMDQaqLGkAumi9sQ9JZ9wSr47A",
  "key35": "PRwk8Aqji9fx29uZj8T5EiKWo69qTEgUdmvhEgHMZZEmn38fHcStZxgakL8grqEyzb6Qrf4yX3AqSV4DdmMSBcw"
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
