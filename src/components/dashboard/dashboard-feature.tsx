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
    "2MiUr1rb7CyZwJ4Hyumq2PYa3deHrk5jhzQBsGTHdzFnGzsaaZTt64MH5ZEBssKwricVbqcPoDzB6M2uioLsjWzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHysGKLqzsnfD7guwWgaLkUQybpVdEr7gKt13e5A2nvFpsmzvW38PhMzmbK5j4Lcdt3bb4XpZWaW8st8anoEFUm",
  "key1": "2G8f15h69ng4Bu797BvtZeKkGEfDw2Dv2q2vGRc8cBZ6Uqoo8Q3D8VjeFerKdLtEfshYXytbv71ST5aHbKhn7bsW",
  "key2": "5BHBR9YxdWnZwFt3qsPP6jtLoSALKxmXtZJHTZ62PCr1XQUGW3jsBfFbZPt32NgdqqNb1LhxqjyTrkPmy7xn3oDm",
  "key3": "2PHTAydvdgvc6qi2y827CsbuFeB85Z1is6WHwY3HxdWCh5pUseQs1TP8U5oS7Tt9NigMuB6Zizb917cbiiLTZAxH",
  "key4": "4rTUmSiAwZwmzkcnVrXufF3fLJgApk9t1weZba6jysF5n5K1TYBrXcnZFkF65Jbxb1xvnRYvr4x13pwn2CszndKp",
  "key5": "23Z9H8KSEHFMSx3XwzMkGkuwwTcdyoq8paftJz9qDYpUaNXhZn24y1rPQ3M2aH55g26FjEa9Tov5AJpXycMuTdqh",
  "key6": "4fhBk9FavGbwAEduw6aaCpUK6V7vmDorGR9ZkaBxSw9fbbzmSdzNmb65bqq7CVRw9JDuqoqMMZoeJ4U943SA9BPj",
  "key7": "4HaTg1w6bpwSv3ovKELMmX7ihKfT6tXDJsCZvdonhj74gWAxMpgvWXS7FL48rowpC3GMZbwzs4Kz9Ki8CxWoTLSm",
  "key8": "51W51XrdDbuW7KD7XQBn46xAM1Hy7eLZ7g3GaAfUp3fD4F1UxZaQupKpK4vtDZsNznpBwQZTgsDH54GHSFaUirCB",
  "key9": "5CWkF4mxeY3N97Nj3cuWCwfiqJKxXu9AGjeceszui6HQeRz7Vp1ybbrk8ThSyb2BvgqLsaTjRn8UfyB4GomEaRGx",
  "key10": "2zLsBgYfCmZ7v58Wyx1cCNTg134XVrzCsjEDE4UUhoN6GLeNQ3EHWpzTmiWPAF54VFcM2own7PnQj9XqxQBRzEZj",
  "key11": "3fxjKQtpciUqvSWoQenRTdtpkpENUGcLVKapCB75HKGmHZ6pMmfZvi4kE5stY3o55ytv9kZsErnapbMbsRHFT7Ei",
  "key12": "2PQCM6Hxa76rMP4PmDmK9APFMHxwnw6x2vxAz92RQaPu7hWXh3vSUr9zmhFuNLgiBaoyzfv368pc2qdLXQmXBDPs",
  "key13": "5c3bMScem3rS6QxS25FnW5kD2g53gEhzdAST2Jt387ye2SrbMfmVtpNjBvk74irXLtq4s6bk8WkL8xXjdBS4DJkr",
  "key14": "5W5pnpK8HZis51vmboaRppX8dg5SEiheKqAxgWHueePp2TEJaP3Ap3VxUSbhsFmg51NhJkxAE3CkE9RuHiHN7bGH",
  "key15": "4Rnp764fp5wcFhMGvnMwZKQfWHUqVPwBLoyRqCmse4oUHuViKceEVWSs6s3S2rZgfpSfrdpo8CJdXyT7P96qD7Lo",
  "key16": "4YmwZR6HZiCT19LkE9VzoFLgrcPb7ZSXdx2NmbvzP8c5SaXwvx6JrDDMHUSZ5473FbtCGNLVvmdzLUQYLzBmPRo9",
  "key17": "4xYT3kPVL7CBE9aryEHLkjBZspSuoP93R5N491BXUxvK65AewRv7BrjceQFHeCZse8mCk8biY9Td9rJorLWCrhqn",
  "key18": "2bYWZXLgBq57TXzoFz6dWJcNrgzNDqMsx9H2V8YeWEhrVRQ7hniTg9Xx3WJs3HULPs3HT8REiuPcRHMWvXXd4peZ",
  "key19": "3kKcn1yL1VcnLmmvEYSLpgXeTgzd1ibXVKpGhm3y8tcqCD68LY4rkexqrXV1L6YHj7v8KCPyg596JUzHUpR3aWCZ",
  "key20": "5b6Lxx5AF8SZJBaWvx81JSoLNkE5c8VCLYE26PmnqzVx8e5oMQxRz8QnR2cEAeZZPSbvHbSbePcGdwrXgsgxzvZ7",
  "key21": "3m18AkQTvDz1YnQ4y1mqkc6dwhzpEvgKLjFFYD1eQmBUSVijMAe4U63V7feCSu4r77MRP3jf5V8r7hTgVYqujFfV",
  "key22": "2oKKXc7RnWmesnadkG8BT8Gy8wTPZNKGJgm1HcRByuSZPFC1xhBG45pjNPeQL1csX1aUJN8q8iXBn5KRrpAWYVCB",
  "key23": "4U2HDfUY5iyEgAT9T4SfZNwEWAVdwAgpnqMq7GHYWvwd7Yf4vGGVgVjUQkTUY9jSh5vXwsbG254yyz28XKK7ynnV",
  "key24": "2JUHZH1dtUdk5fYb6fKzLyCZmVKppQY5mcoSJ6BYgtkveNAZ2ep9jHeGV3a8vFnfKfMxXDQPSK1FhBoADAeQptQq",
  "key25": "4iAUkUFY6uQTuGk95UkywTgMy1Lxi7xKuPFKVRJddVfTvtF3QZj4o3sNHj9YNYkLV6cVUDd1uS5q4cTmVgFgh9FX",
  "key26": "4zN72ZeHz1br9byW2HLjtWAiGxY36JtAdGK6fntjs8R4dE8gGGCqk7ffrBajVnXpsjuuHZKp7gZuFhsmWBqe7Znv"
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
