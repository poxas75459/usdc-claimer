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
    "jSRwUvqaNEuPn347vo4oSqppbGHWn7ijCGk2ALQyGzAyWY9HjMzWKabsKfiMRLsQASdT9eAWZFiwjbANbADQvFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kUbPGpwZTsNrjACftCj5GwbDwnWTBjMrKzpBmPJFJ2oiAEsyhkHKNx2Ap9jXDwAWpDNPCs3mAsypxUpvpejiB9S",
  "key1": "4mwTmcytShe8srUxCoYfsHS4G29ve8QZGUEH2oboxaELU7BEqyevs5NE5BHviFpTzEYGD2tHFNjUjk8K8nER13CW",
  "key2": "5Q3ehiRaEXcsTP3MAxbS2MiWfwWyrzUni9C6PE5Bv2euPma24wzaRFWGzR6Eu8w31Qgj2DCN9fS8Xx5upyxsy1Xy",
  "key3": "23QbFNKYnhFsJzd86Y2iSZP1NY6uWAZsDeVPjSBDc549QXtWncsanrntfohU1K4JCwypQe6fQCztu2AwBoPE2aWz",
  "key4": "4XYupeJ42q2Mei4LsF9ExCj5CA88xHCsLzKBAczRYA2T4F1AwZRxC37Dp82bDLiVvCQb2PCTuVLHJ1o2p7RBLGUu",
  "key5": "5kaXKKGPgUs3xRypprUxntV6b3G8pw6vG7s2jk8tqdwzbSWLDj56pHrWyJ518imwG9MRJgeyyfawKGfoEtPhcJHS",
  "key6": "4M6uzsmC4sW3okYJumgGrwx9zZ1NaaJU85TvwbHSb1tWTGKmTPJYY7HYuKQ33jf6cNGXZrnpFxiCs8jUFgMnpofT",
  "key7": "5GCQvVfGJGSXsHdQ5W9P48wqpa5ZxsHVJm9yZ66uppRHBdRxk1uHGRrvC9AHj7xZ4dpB7bDqVXo7ivkTWZMHR68L",
  "key8": "2sX8eQYFBq47KuQBDvNkJbj8v8qxwdnuG1mws23fvDxxL2U2czXuUyHX8Tkr9X7sJJ6z16oV7fU7cCZydB2ZhJ9j",
  "key9": "2GVyM6U37vUzt9AhoS3w6xt6hc2WayMKn5DNR2fjkCYk7ycuxhEqwUA3Lptc2fXfy66LYeWMzhL9N4YDGmUpAr87",
  "key10": "4zhFZVMpHtWe5hyHSo4FRMGRALQneCjchronv9uJTr5JMYnXvYr3P2MTqioZPvK4aFMr8kr6ab8XQV46Qf7yPyU7",
  "key11": "5aX6ehEw5Wf4BKgcnVVkBhvfrhx8SkgnnAT8ZfUt9GcPC4VcPd6uT9i2XHR9EsuzicTGpkMFPHmFk1az5Qm1qQKd",
  "key12": "AGghkwmHtiZssKFDBcqWTmvPnAQWbBL9C92LTixb5uwMhipSvfaZxbAFUNYphhvFXLE25onU1jd2FkBMSPkDu5N",
  "key13": "5N7LF45sFrif4PLb2dWLQjTD44MYNRevSrjwBLvFRZhMQtySctr9GLitB8TfL6NFgjeaD96APo2nLZdJ4ezrWxXq",
  "key14": "2wByuM69xnV3tFm3efZq33V46KMEubbnoRH6pTNALuAix2wQygGBeEDWQqJAMk3XZseLXYqd5HUi1LQoAgjLfg6B",
  "key15": "7Pf8YZQbqa6dNA9gTZVNosA89vJgGbHzvbLJndZhv1j9RUvFjsHFPB6NuH2hj5bJYMHEMCYkH4aTUcZKvUVUrnP",
  "key16": "64htB4YmS1YSgvHpzq4m155VBCGtYMDkitDgHTCjwzdK3RUR3LcbPpXJR57upwpPbGXQa77LuDGP2Kvro1PKkq1P",
  "key17": "3wckJsMqCLDD43qgkdCB4QnEdrUoYMqE8LjyUMf95KWhK2zcs8ubeHXbAs5YwZVJzbM9bkMxGX3QYRsJdv42BvvF",
  "key18": "3TjR5JBiw173U7BDwfsx5QSrm9mXdrsa8pC3eXdWXyk6VTezYrRWVeke5cS8zw1XvHdkuWxxeEqSUdiZ8x6gkaVK",
  "key19": "2jRQfhC841rNPEQ5Do8TQC6jh5X3LjkVRypn9XottKCyWGjMpgattncqje7iH5FCzPnCVbKKyyuLkCdVmj3hBpMz",
  "key20": "5XgVgcsKC6fPgvqY4noaScZPXahdrFDxBdK5wjzd1MR8MCW84Z6ekNbJYoDM3vMNqfj3oWzHbLvX7u2JdC1rd1od",
  "key21": "5UBeag8o6sjNijnzkEugjbjySxfUNAGGURLHQVrH8M4jjPvFFfYfZ7ADdpHUCatudHYBUwCAKXt5UhBHXn5ZTMiY",
  "key22": "23YWnwwfxJDeLzgo6Urvd24sEqnTNF8mCvYGtEAavQUewUQpfPq9HpfUgZaPDUYaEevrVt5n8sp63hzpSf8W9w4Q",
  "key23": "z3PQJm3aowsyBUnch2gX6f1BQDV1ShKig1MK1z94rrXgwTGhE4mXQR37fyMU4piGz1Zj7awqHeTEirkF8vH2N87",
  "key24": "5AUEkS53jnmrBmPMfP7Wsk4ZB8UvwaTmtUbdd2en4KmEb8EVTod6ToNSi8XsKNxUQPmg7nkD6PpizUPTs1MUQXQu",
  "key25": "3dWLDmX2b3YWEFtRXK1wrPiJPTkieBQAAZnawnWdRgUiARdQV98C9xUvY8sTQmsAonxL7zU7cY2iWdATvgKwSJ76",
  "key26": "3GtJXZk6FhdAdRfaewMR6fSi5UsuTnXZKSnnKK8DGakLabweLUFs5cBhyWNpEkm1vWimf5Dhw54nptSvhLtTGfMF",
  "key27": "UZadmba5GM8B94Lr58BKT8K5vn1RTESZBFYP4fajMnJX3GwUDBwjkKizK7wR57MKLZqjZ71nA7RhbZpA3imfqoR",
  "key28": "TQs4whYxkwjiNKV2aoBRyKEyUEW3FxRZ758X9fN3rhrEFwmdtDv4bPgrTg6rhrMggvLFLAZUgHobTFrXk9V7VDF"
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
