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
    "3uZWeznAbd6c41cXB4783TBSzADbXkhVw63ieRsxgBWXyUDSsymQCbFdhbghp8EEK7HHnVkztrm1p3PA1JRMD9gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhodMjXDHBUaEDqaZLVUTMkKW2zTvqabdBrG5fXpgLRmCL9wDKgZApVLvh2Y9cHPXU3b9oqjSzcbaBQNmbgV5gT",
  "key1": "3YNp5z5JK46ggStX51bSFKdY3HgDqbMuCq4FDg4fxHSHVGf6E14xSByzL5PLRsqGXFa4oyotxG3MwDrqvV7NMBRK",
  "key2": "2Z4KQQv5gP13S6CBAZJvCwjPy1znhK17PSX8xY2JC4o6mRp6LdUGsPrvZw1eszWn7sPcwQfE5DNnAimpCpBmuJSk",
  "key3": "5aXamB5WfEeQvJJaqSEeUTYfcoVvuL6BSqDCzm77W5tTDaf1hztobLxbX36xh3eAdYej2ZruDF8hhK9iwcAdcHJA",
  "key4": "5c1ioZTND7ZByapqbBdkVCzJaYgRKZQGmQndbvoCuy66LsoXK8vasmECWtTjHurbswtvZ7r52NZCd6Hp2G22z7bR",
  "key5": "53SJG1unFowu4qPkqRK2tjqbWDRFvS4jQ9sGi2D1pVyzSywWJFpRYQf6FbPFCBG8xWqa5HBukySZTbfmtdYUNJTt",
  "key6": "3mQybLs1pbJFJwvDedMh3CLxZmVhDUEhjT6ckfpAQtpfawyU1kiAr7qAuevtKMmrHdCZ9afVtEyuG49eZTVmvxcF",
  "key7": "wFo8GxPbSs8kJBXdREAuieeCTpDyjFniCiZPGD9VjFkKy5a4pK8G24zjpTFnN62wFRL1vfqMeF9afofKTRuqKMj",
  "key8": "5eJKwVpm1ce7npTC9YxRLzkGwZbcUHcaTcSZ7qbrcbqMry2mggtHRhB6CXkY72P7hCwimhbcHCNuYqiXYUV6iW3V",
  "key9": "2GnuBAXbwTNZPpz1uvnbUJLuDE4NQf6dHMQkSzCCdUNMSWdufcMXC1Ujt6n46mWn1RsR5kdZQXKshaeAq8YjqP4V",
  "key10": "2TMtYqehtwcF2rZHjcvSkDj3p6FXCSGoVeaG8eHjBFYEbkKBrMBk3v1vj6atW9x4YJ8zZVY13rfu1tdDmhwrCEuj",
  "key11": "6216v65sihFUqRQdy1SBEzkvaYLgCD2TGNSYvcHZQ5DJSi11YBsN9s2ewaNsGoeziDtS5VBZjjf3YQabaTLzeWDW",
  "key12": "59XGX9RoWQaTEBE6J75t2A8W9BSaVrFeoTXsniqfgqNJUBGKDmW8Eu4oHJjYYWaMsgQ1Vui46p8p5XvMDMqT6xE7",
  "key13": "UVSXRn7CokSyGbRpx5Fbf45XPja5MVZnM8q3vCfVu7gqHPagR3AFksmnT9AwbiT1DpYfoTQ3aajuhwbPdx7buGi",
  "key14": "3PLHYHKCfzDEppysqACdeWQ3Azy4LcW287JGomVVmGbhkquQGnWwVYgBTekwqjmYevfVFedBwNno4t2HmnfbEDTc",
  "key15": "46eECUAWqB16gSWmgLSsnJshasH8MWdTgQoQaBLn6isjLczfjzw63LC3kS8nMiYSvC9uZTTLhoK9qqyCEmzDwyK7",
  "key16": "2paZBE3d72XpQLa2JqEERULC37VsJWsYASaRqWPHCzNqwt2vJUYxXyazK7oGfyJmynSf3kNGZiYfguG3u6Tgrq5e",
  "key17": "emGqZuZWEE33at8a1cbGDq8RF6izdzcq4KGVTqS7of8CvXf7sTf6DutYxLWUVhJTywaF9on8t5vopor29efrGKW",
  "key18": "5RTc1qJd7Lky2uwk1N1Md4HJq3uksEHe9EcAwVqVJwq5gazEon45dqMgYSy9BrijZ8zU8LVBRbaMjFabXhiTRcnV",
  "key19": "3NKqaeiQGBY5tPUG8qGxCU8PE39ve4gNxLkrGkuLsqpHhbrTnzKdD1ZJMrpco4wVjvDfeSWAz3VmSFwDAmwZEeEm",
  "key20": "39QGXBUBv3MR6zr78Y1wDpeBfjFc3xperVvS9bt3xeFVRoGowabFuyz5pKF6H3KV8JqQomG5yJuA9ohTrr6T5eVM",
  "key21": "2fbxmvm2ekzQ18wLevoBBuxak6k5fy196TZX3YQeRLaK59SKCsXpD17anGAHu189MryoTTJLbdUqmhr4AavcixSP",
  "key22": "4o7MMSDJ9BYxeMBkojUYZ1gtxFiRSyDrm2ouR51xxjkt7AsJSPkCXWGkjuLxdX1nnjxjjUsnfLD4pgpAcukWeSRo",
  "key23": "29N1jRrWXELTkQgoT7svvvf6jkjQStYXrU1cvESkc3MSM2QuCzjTbrfCFNZuaefdnQs1RWd7cU9exwmLZYofY1PD",
  "key24": "48LeFGyQAkY1nWAKQQSs3rBsQoKW4zURibFeehhBeDFoukuZGV4B6zUFhxBDSLSqtREjBTNMHDNZshQZEwsngqJw",
  "key25": "3T2qMSNkCFHcJ4QXx5Hw5xpkVLRbiZskRgiPJhRS3yV4726wRZWzQP4fxyok4DTnAnj1eaf5Ht5wHXz7EwUMYACf",
  "key26": "43WwccGCJ8StqFNQeHxj2oQZib2NwwYi3zoaUy2PeQk6WZchfruZDBsN4Yyaoqk3tgRfL9HBeaC4mWZZ25q9VYvm",
  "key27": "2YgBCagr7e3E26eck5MkLkd9GCYPWTpQWHKoayd9eY3B6SwsS7288LBHZZcuvte1Y9rfAEB9d8FQSAUsgB5Yw8UB",
  "key28": "5eQvzAL4mys72EztE32avFNKJawc7kTnAwdfYh4tSAT87EJdjnvnZyoepT36yAibxUB3t7ARjKvHH3aC7WAM2CXy",
  "key29": "4GuaJLbKC5hZ91aK8n5qCA4kJkGXRLXGCbVK2uhJAvYMXfUfzRFqCZaBKTNuhsPD2r8KYeuymLPqgtecc4ML5w9b",
  "key30": "4NpW4Q9hizTx1oZBe7BniCnsmwT7pEqpSGZu7eDvVWWAp2wtG3vyDv6gj7n4A9tZ4HAW7GAN7UhL8Fb8PtEzuwL1",
  "key31": "34iK9HspkmGffgGS7CBDCJxNFMjCLTMpcCo9Z2QMYg4N2n1XuesjCc96mw4me8xNoUGMK5Dd3UNF5dBD3dG5gMR",
  "key32": "3SpgS4oGbVikPkY5Yf6GcS7V3Hq7b8c7UBFwordrpB84HWxUCpWZNcQ1LH35QGGMSq3E9qWrKCAHY4mt4ibkT1bX",
  "key33": "3TqmxabjQLT13EQ7jcwBP4cNnYR8C8VdGPUXaJrki6bcWg8DwAYsY9LoNezvtKYwGVPZVYAxJ3iUWnYSwDWFxwcy",
  "key34": "bhXCWow985fcQL7foNcM7wguM5ACeLDtm3ppf8vZJpERbHbEQfxnfGPfTekUuFyRXpRZVR4652MMqBhAxfhfDQz",
  "key35": "kugzooX6k8T5mFV8QSKkcoUREBCF7QXKK5ur5hKwCTJBoyv6uU9aD97B9hTJesu6CtuJEHnjfdBR6VzsB1nyeaX",
  "key36": "5sTVb2o39he3nyWCrg9R72iYPFdsKpCsmNvPMHVGisaTqxPM42c5oNrQJZSsLFUFNsLmnx1KhmEETrAmkzxpMDZ6",
  "key37": "5haVK2r4VdEF9T14ymc6fwdUoDE7kXTzVHq4mBLpYRmuuQqCTvijPgd4VNtCaadFK4hKLNzM6SqffRieTMXFJAFr",
  "key38": "39M7yAbXjSN1tPCj4V6KrV8P3PeCaWnTnVtKDVRKhvVSxZXddoUbvL9NCwMRy8RFRQZgxnH5DcMLVAzSBGPosG5j",
  "key39": "5t7YgCpKa8XMxWPwkTmjsH6trRqbVfGwRj8mLQkjBKPs7K99sbHkrxMfCtNFUNetxNaUXu1FncXDVqnYFnndZZ4F",
  "key40": "zmQ3Cq3GYk3nm67xR7QH6uEpLjLaQ1wEJiFpZpbJRRgxnctJtFkF79eSqRLNq855KkQdfebDLK1q6W4JxXqJkvT",
  "key41": "528qKgZAyvuK5qbYMJqTgywka56xvBKno2aQNNRUn42bCfy62F7K3ZJxgz8rREGc3Yd1z6Qd2vyRJkKyTWbuwG4C",
  "key42": "2WJGJG3VmNyWvmXUPUZA4inwH87aR4G2p4kgYVKmwRUetaDyYGviz4p5KmnKhbxYU5hufFyVryi6Vj7WpJweZUMr",
  "key43": "4iQdV2x1tAbZVh1RjH9ihnMtuzC6pgDjdPA4TQwv5tb1nzXnF2p8zaLaaj7HU5fLGxhSp3CVLCgkp8NPtnzDVWbM"
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
