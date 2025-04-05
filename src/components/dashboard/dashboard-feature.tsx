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
    "24TT92JZvC7zzYebqeof8YNSeTrrjQ97TNPkZjjo3Qgzzr7LXiNQbuJHf1spCK4HWEzFWroJbRz2wdBiLZ7VjyQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ofB2bnpht6tvwfNVVpN5U3C1ZLHkWEQc4KkJyzySvLrV6sa85VRhuXuD3m7DTtUgWTNYRibGSoZqprUdF21cWp",
  "key1": "5kx8dHDG3UJvuKLkdjjECEXz7ANsg4zwFay7kHbpneqDfhEu9QmRVrZy7ptEXDsojVNaLXPJCihiMwoD6fxFUuRy",
  "key2": "3eSFVobCRnoutoKf6FhvbK4rMXVPVm2vzE38paBQrnA2uMYYFFiVuu7gVPUCYf4oVHC2UGzdyP33reDEY9nVKYpD",
  "key3": "5ejrqKauiWQoeERG9sysEC2927ozmeev8LB5WCm2ZgukPeS5tE7wsEjfpgxo5pbvLtUPZpECVdd4rj2sdXkmBYmf",
  "key4": "5BiGHVPbJYVjNybHfA3c5Gca3jgPZxeEn2Eq3q4UNmLuM5Unc4cWs2tUmdigsuASUAxaTan5EJGs5NuAwGKega54",
  "key5": "3UWDaN8L5xw72JzJLt7USU3A1nxve5apHzDN8CJc8nb9bn8kQaXZec1ci64mebJpmyRxaEvGuWHWk99MPF7pZvd3",
  "key6": "55SimPWAMWsDkHD7nou63MUnm2eZxd9gEubrThxDtgEQ1dmEyKp6nsj6jh4WqzMbM1BrqTNzTepf5AGLCTMhDriq",
  "key7": "5StE4LKC27ZVTYy7nF3izRYnyfcMzphqpWo2nbMD7FLi5iyMAt7qLxCjNovTzZTnGqXGDzbeGnmtM62aYbVPYGDN",
  "key8": "2Uuu3tGbMS475w61YEFYM1zmowBF9gmrkM2LorZwJo9NLdVqGknp9CZJSUN8z56RoWhARQySiWWXZdJ7L4opXuD9",
  "key9": "5nS2KYL1aRn3phkFvPkiNkrNVbYGKFRS7w9DCJ99PR6NSK1md9mMt1NUtYDy8g6VAhk7nEpN5itYp9FScLDDFs3K",
  "key10": "UEnLM6b7Y13rBbRtntzEheJxAq1BL1uXotZA65nsa6eiFpqAsq898PPryvbpoat8k7oNPTNtA7K4BxDEnnDMiiw",
  "key11": "MW6SpBxWYcGhoPRAd8CZn4nBAmxHUT5j81jhhbA6tfCejBQRiVkPLMPgnnuZeuHrBjjAKtp5oywEUUaAgQhvfL4",
  "key12": "5wG3oYpehvN7EGqhTNnsvnMUmtYBCkZYtRL8NLZvk5ARqPTsj85MkEwtMtcm25WWkbcjGmayqbQvYZCDBQx7Xzwq",
  "key13": "5Nais4yXGKmYuMg6VhLfwoxZ5jNJdadm24EqJobSeyt9gdSk87AMs2knh3QprmANJgzRq6hAiJHi7sucjURWhUw",
  "key14": "3rFRPZvo4X7hKSt3QGm9Tt7geJdL7qHmZeFQMm9uTWrZSDCT1yF97HsjDWJrn4SogSfsHbqoJT3HUMdmcfEWf7km",
  "key15": "GhKpumoebuHb29rEWjjBocgMDSEeudzQ8TrnwUmUXfChCYJvgBvLr6acqPqoGc9hAikizGQVgTFz1c6GabjzMka",
  "key16": "3zGGS9XTBA3UVxDQoMhNH2xsjEsgRjvT8SMkcXXnqrXS6s2Vu6FuuDx2o2QKxeemWQjKmA3rPma4EJ9RBfa14din",
  "key17": "3bFPa6wgyThoAcuS3heixsVeeJ5vmcuoJr1pVt2VzcMQrY8mdBJnqwti3KnmhnbnbeMJWzn9bAdZkt8hgC7TFaK6",
  "key18": "5EUQuE6kFv56PRa4PYM21Kwa6zTsTt8XMX8fPMWhFVx1LDYgTcL1EYMgx6mw9SsxbbB2bMe3cc8oBqCdntEzKSTq",
  "key19": "5FfUE7qRMjTMgJYqEWfKiLiVdGT3aNLkA1UF6ko1oZWNqE6Biw3PqKcsfuit4NZtf9k6FdNEt253opiSYPZeZYPg",
  "key20": "5QCgrzP1S9nsYzLP6BMdG4ZMmvKfRDNwLJoupiP8NRSe7EQnrZoxAozo4RRvv7DTXFzmcctyw7phHtFAjedF6RV2",
  "key21": "2tiK8sZ9ddRz4P4bPgRtMrfGLw6pJbeTmrL8FYtxAjxU8e3S9M6eKrgr4AMFHg1Jp1KTqSrzFT3tPZ1ik53cA5u8",
  "key22": "ohFgB5EnsmdoP5xMMjCd4NhkYQyqBceXPXi46fkYCFZfjic18Pjavu9JGEQjxuDFhqi8dxWKeKWjSeswqZrRxC3",
  "key23": "2NhqNnRECK8LaLj76GBKqp1zxYqFXbm8HdLNfZgQKGW4bft6NTcfSPBVrwfQq3Aq8KaiacxFAHKxReTrZtwnm3Kc",
  "key24": "4tahTYUFLinke2jShVwNhzvsirxiKQ5MFLnTSk26HuQq5zWmUjXuEx1op3pF3d3nWYZdCJ1HBYFjqKSge3gm6nxs",
  "key25": "4uNUyRgXnGuaBVuoES56o2BnQA1EpQ1pwLFKJSEAE8kfjnAHguyRZvq8fywaSuxsCEeFbyRPALwVveaKjg5HE1Xe",
  "key26": "2UNCMTDndSztCbEDy8269Qkc5kYr4HAarH7H5Pu24qe7rDW7ed9jtETMYMUJe5q8mbJoS4YTpHx4kEKt5ZHRmtdq",
  "key27": "5Nm45PutmRk1oj2RtVBSoKnUrnXUX5FegF9nUAGfhrWJrHx58WBqKHzVkFm963mAsksFuhVqvuBVqG7BdQbgr3X7",
  "key28": "37SCpwrzNFEgizdCDMaUbKBe6e58bpp4XDehMtLsjEZezLJ1aBhT6KvAJSAmcV8tGYRzBjFg9YbpJNABLNALYhjS",
  "key29": "3KuNqfF2w3cUtn6hJbGnEja6pDcktiyhnpC6qKZ4Jm6DrYNgPvhaVdjioUhAa147LqJj92C1VzcR75S7sjDFmdRf"
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
