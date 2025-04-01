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
    "578CEg1CNPQE4QE1UbbZMbw3GTgSZeoiFo1iujW38vHs8zgSmwJ3iKn57S21w7bPbAw8AUyBXgMGNS2W6CcNdF95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnSczPwG1tWfDinBL27DS5TCfdZnqPfwMa6M9pisbiykurYB1cRALypzqzJS4YBVLxcpbGkCuRuDh2M2pr6AMnV",
  "key1": "3tgxjvqTqhLXx2yfAJGHpr8gwKGhSUEhoZHPyUsmVdTyt6CADDLYUtd9qAFVvHWAsc8fWESUjnSHGi2tt94y43HJ",
  "key2": "FF6YRck3uwxet9KkPHjnqwZ4Xi5Sd9SUs1xTRAvrMgHi1apAznby1f3RCKnvxYYuLFwND5UbWa2dswLXvUAmVqq",
  "key3": "RiAZ7adcNTF7PmuBB1qQ5rtmejbRP5EGu1D2AFNaRiS4X24tSs9pm1icEUZFAU1h9JryhHW2NNfAhuKxkSewMm1",
  "key4": "oGk85qyS7CYnQYg27v1sju8pmzw8T6pdLEfDV3VLoiZZn3CqeCgBHNJwrgATbqJXYUTVZ6vw7a314RaYXaYYsdt",
  "key5": "37EkLJuS8gWqjoHXs98kLFvYvZAnL2JZNySB2CDzigmTeKyiPo6a38GhcWfj3BPM5B55rCjuAsaFFU8pQziV7MiH",
  "key6": "yq2A6zeq6jiHiY9BVn4TSqzaBUHs13t69BByBhb9eMvqDGqb6foRie3DEcS2DiTBiLhHtx4KDyznxNKRctoQ58q",
  "key7": "EMZDH8TZ4u5vC6ZJWPUWgGTqgsp5QTnc4VPcGbWJni6cQ32MuqKMK5aXfNbfYuc3X23zZpW8Ko1mTmQxC5s2sfs",
  "key8": "5iDqsArC8tA1fBpV899dWyoLqCk8tZUUnCujVEjMU2NFRvJTkSyf1PmW9ycdPAwkSFJRyHQZp57iRm9QqzVXhxek",
  "key9": "sXXYkaHG6s5Ch76wmFCngCaKNgP2Gn4wCgm2mvjDxzRvsBnRGz6zd1hCwc53tmpQZpX7QxkQuL5MnHrXEZcLRJV",
  "key10": "4fpd2dJMt3zsn99rfRgvWjvJr37VLys984zoCv6jiz9R452Szskup4auEbvmrHKZXheBrtwL8XvqhSKFLaozJffp",
  "key11": "2N1g3EBxpjrJbZBgBFMkvzFmrnc6q2PMeV3WoiEzPkzgc6KNPbUCfiqzKXVqk86XcMgJkA1bvdrHJmqhPWsE858X",
  "key12": "39N2xrNjmf312dPv3XFke1XQmfvTWzEyuHZbv3nJCW3aqQXguFu2QbRwzZyem46zebNZhMHTj6rUpzXXBGJko1w1",
  "key13": "2T7vRBLevTmSEbdSUbRkBanhUEFVrQFoY4QuxM1JP8mRjbQoSWLj4U5UA7M5nRtkAx7f3kwqPUnbcvvRnAUhjQbD",
  "key14": "24gsyzUWrvYEm3f5uno6bD9UHHNuuk3gUcZQvMr8VWiKgP1i5Cbdq8Q5hwc8yG7zS2p4BpffwH6xTe1Ms2eHyqjW",
  "key15": "4X2QvAoUwooLRqtxdMQKYSvucuNCuSpehFTk4nHVBbeeJo36fs6STAR1HW8vDu4vdzQzJntEQQaJxwgnWS8D3ote",
  "key16": "3NyscF7oFBCYi1Hvy3Bktamt4Nn4pJw5RiK4YG3vv4qrPC4D2PM9q7R9VFSwPTqg9YWkrKyGykFyp92QHrUfJsJ8",
  "key17": "3QUdhrVmEu5oyVcTyZLCXchWNQzGJBkVwV2ieaMWE4Q64UjvRogziaRZULGP3sbZr6aSjTa7XzZzTADe73xyxPK8",
  "key18": "kRXZRAqEjF6troLfCPHC3RXhm8o1cn2e6HpxLPxG9729uhcPYRb6GJJ3vxyMBsqMr5gmzR5WTrFZ5KAwohpLtAK",
  "key19": "2brBVUyRQQ9dSnYekCeifGQ3pS7gb3NHdREzbBmfXSRc996FcpMMPiHr1oupAxsHiQWvQsjeUvTu4R2J5JN4eAXw",
  "key20": "JNGaisrn9XiMo1ssENqB9mGDBJrvrdhH645P9EFwHaTjJGsfmQimW5nEcgCXdqTk5Z8dp2D1BXSoew1yBeFJf8g",
  "key21": "2BsgvGQ8FyqZCKLnEztA6e1EZ354VkstPx4iNTN8MPsJNpD1x73bgRRMygZRh2QZeN5ehFQGQk5qJ1tjDvd36GR2",
  "key22": "54oJ2dDnp62S3tuG5swNiF5RJaZN6h2tAqYtbYgovHFJGMs3Zdsxbqc5zrQN6WJDWULjyLdspCQ29CtvDjq6oMpi",
  "key23": "psHjji93uXf2np3ZwxM1TNnX3UrBSUWcx4zmhZg3g9jBPgEucmBdFUVUm2qjdihiv4GzHyr3VSJEFAsQKaiFoxJ",
  "key24": "3P839RTNKk1jCxgTvo5Xe2pPKzhLSuBvt5AXVskadzVTWMcXUvNcfWJDynQ9hAGje1VfFBXiPLA9jkhMh7YK516H",
  "key25": "4En64qPZqWRWvui4ChPcGyvX1Mo9DAJ93fSiCs4FxMMsuc7Nt53vDF6HNR7pP8LcP9SctZzc6MYsFuwrbcw28E52",
  "key26": "4Y2rsaHcmc9mETGrZSXUxCMAea8nWVuCSHFy7fPkycDgwvJ8fQj7oqFA5ohLUZKov7TLLMA6HyLhhwfrbAu7NBuX",
  "key27": "2zn2BEJyU7MxyqfMJZYy5hSxdvZmy4zvotwSX5hDyAZH3dLHm2DmzUA1VxYCU1b8idFy2RZri5SRZNNYnz7YXkht",
  "key28": "2jCmejkh6NNXDLopJnxmvsrgSW7c4xNJLNKzNVffr6zVabnxt2o7kY7oK5cWzuaTcmhR4SiztWnoN2nAcZeJjYFa",
  "key29": "2jx97ocUnVznhT6m5CYMbUk2AZWYcey8etBDsHQ9YuoUw6jaLiseBkMoyKgJeeE5PPpRkuthiMhS9siYjkV5LAAS",
  "key30": "3LLmPD9nH3nujQbDCVCVonyCGaUVhi2gY9EnANwKsLN6EV3Noxwo4Q2EBBxkWNwBBYrNrBzUteNY1Syy3wQMqtXQ",
  "key31": "2gn6emkAdYKm8KSKc9LAiZWWLcgnbRTHLFvxECRrGBiyNhtfCLASf9z9wfiNBBxXkH4AkXsDLsKBhv97mn3jqPwr",
  "key32": "65GrFkzuMikMcGrVdw4Dyg3WSz9HyZ3va229KFEu1xtb72zuPGqite88d7AmQskLukam6vpa5L77RDxvVLpdJTL9"
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
