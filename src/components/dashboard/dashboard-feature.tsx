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
    "2rckurbU6YXTdejdAqvkSdZvk1TZxgRBxmgbwnz57WkcEdmhVCQcUxbB5csFK8dJQDTZsh34zVud76QhawfaYZAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQSzq71qrxiDpqDdBUCJ2CQJ7nBpP5qzGPCeetHHTDvJArB1hpB1utWzp11nKhNvvDQExfXCypUz3hggZVNNXj7",
  "key1": "4ghcvrEcQeZ8uftX8qHCE7qgJFD5wkPAdRicyriKeKMZxteJYndqBA3MqPws2w2z8kH1vbvfzkdLPqDdiEy8RBnS",
  "key2": "3z2EXzAbqW15cUw2mefgkoH5WzyjoKWemerGGRdKWgvedLpfmnEZQbhWHRDnPq22HPuncZvKC7K7MxAvtPKDtGyK",
  "key3": "2MgD9oL2YtjTvB8uYLTscDjTqEHEN7H6wVemnBgTkLxR3Cozae8gEgea48B1UdB4kouRaetw8QkdptN6zip2j33N",
  "key4": "3TUGE1Xqg54Fh4uiDM5GHSaEaR3X2K5UhEjchr3GexLfcMKSxNiXhe3bL7cuVY7SS9DP6Ymn7EBwuR2kpvfDJMLs",
  "key5": "5AUFw1Lee2GLCV8ptWAqQLSGFd3EjVUzmbhnpRGa61N6aFBuKYzuVF4HujxCLCwLUfPccJcpLcHR9aHPSeHeh2WL",
  "key6": "5jmYcju7B1aBrTRjGe6FSx2eQtHRyN6ymhS2w8B5p1dVJKuqtW8yQ5YgQAnJMghxPJJmtUjQRTTimEnLdwnDcdu1",
  "key7": "5y8EEBBaw7Q8WCaAk6oxN8qSQF5J3PXLopNmN11vSuMzzTYK7L1bZ9tGQgJZzAmzMhwR26qfcQDYwY29sKLZe9k3",
  "key8": "5Ay5HuBs8tyvgjzuk7ZMcoupr6VUgBBsEh6wfBRmLavjkMG3h8ViFr1sCTdybzkcQ1EMyMFYA8PDjYxWoHe6H3E4",
  "key9": "LegwvaJ5eCuGBHWHz8TZU2NNXyJLRXpC9GF6PpZ68czEPzbZ8LMxGXdJ6DrfYDYtQySvd87U4cyPtf4rLfhZH3S",
  "key10": "5WM7Afd9gQfzFSmNDbGNXKzpdHwiEX4aeXLBXu8m7YJDYgtDzbFb7JEqfX1uhVFCuiE92HokTgWjkxUTqQRMhZhT",
  "key11": "3KwjWzH3X6cEgzg1TfzSPRtRuXWeeBYd9ZmwrSnVpPoqLGXyE5CPPE46ag9QMx6HapqVKXugqj1UzpoZwzF3TEqd",
  "key12": "4v6EFVcstQ7LTbf1B9CcGfjK4CqRLqhwofaqmLeDnaC1MFUR1WAh4y8kNjntAxVx7tkcmCmtUFafwswZpuad4koG",
  "key13": "2KDd8f3ZBTPPoGsf5ysRgVdJH7zjFPXyFKPKkMBD42Gp3r6R6pNeLje6E9TovyFDvKcxz4Vaiyw3hQcQMPSbHND3",
  "key14": "5cH6RvpZ32jNQhqboB2KGYgVY7rBzanA1SbayfRHJ5hu2njeSEDM1nyBCoF8e8ryZMw5qsY3GM81Ht7zQJW9nBou",
  "key15": "2KqCbTVE7YG8b9XwAkBJpN7EJZb6DMzC1wi7GarhJpqXvV2MU88BfL7sQN8YQX2ZakyPGSeHf2nm5mrBC5VaSQBA",
  "key16": "42ssCtD33NimA6s4PZcmHAkehftjnabdD7XTLKJF5spK5XPPRNHVgQdrXbtN4DVo9sUYUc97RGHFLgrdxGyjeVW6",
  "key17": "Ddq7FqGMMV1yxR7YtqRFRgcmqg2nUaGL4diDNwqnQJfnGMarijU6NgtQUBqSd78kG7t7MqntgCYH4U2GygeYG7N",
  "key18": "3xPLGu9Xp5WdWr9w4EUmgwcMiWUGP6J1vwH4Mbm6fZNXziuZYjYRsXjmxuCh73oj2zihhKDKpz6Qdq5hF3XQPYzg",
  "key19": "uifzzoTUmPejTAWDCn3xmYaZgGVwm2sTXmW9GBKSRF5z9AGKZaJg45w4yxeopJRrr33gG2n1r7nLJV97Rd66u6n",
  "key20": "3UA7AHRHUkH2JiiyRf1CBA6CNhDUWbbxzqArAu3nVYARMa2jqp8pMLUjn5GfW1GRD1sZaT3mGV2iEBMz8qvUvHt7",
  "key21": "3qoDrfFp59zGUCDJFwRJLY3hd153A32vFGJcPgF8HHCh9gyRfxYAMPfBFCp4usvqjWYRw14tQgAzVEcSZB6z1wdT",
  "key22": "5YAYUqTKK87o2knpGJKPkVbpj7vsQVFCaK6Foy5Qb1451TG6twurBpFeuTfsAzCJ3iPB1vKqpb9a93tSNHZsoBE5",
  "key23": "4SyhHJx7snm4hJ9X2XmVRrzr5SgxBn13urtQzT4acLjids6FjwANuTCsvbEuePpWRPKKdUJvCvmKRHhsYgA98wgL",
  "key24": "2792bMAhnUBSPai14NbHzRJpch3gqJt9fgJPBoejFhfwQeJmrFWog7TJspbXsdMctepkNAMRPxA9h37tyenDm2rF",
  "key25": "BnPkcvMzc86p9ZyKY2t4Z1BRFT8N9KQpQEfPbEXdznPYpzAE1NS9RxUuuW3JQGK2ccWrMRx83Pvw98uXeEG8ASD",
  "key26": "5r4qNR9u2QYGvpsDDkdfERxuTjnmPvrMGYr6M1Ez4PmPKew1jNxwcV2fZVeqY2o4nMDXNYhhG7GbGxumUg7hJmuS",
  "key27": "2Lu9JQDwT1weL5HvK8wh3Tt7CckFbn6m3aaiW1XLxyHWpyUpkLn9VY1nspCrPubSh27N3qcGVvq4hjVFfoGQu1FL",
  "key28": "4PRcL5kRHbVZycQmQMxDArimSQyq5qnU4p5GpYGYnxpM1kNRdk7u3sgbGYF5Q3VYsGWWLM1puTGkJ5Ro4ThLHJqz",
  "key29": "4zqWmm9gQvptRrw8mVcF5et12N5UYzmgKAHwjHGioscqYHyjEtCJFE2JuMPMZtuPtTQ1HVXVh9gYn33kJMszdi4p",
  "key30": "2UWTwbA4NYU1uo6ymENJ929JkxmGDGLaRpk2SgojZ4dT2hb2rCU3pDn3AFsXMpwgTzyA4NuPi4aX7Q8yKrnq5p8o",
  "key31": "5bANNWLJXa6KbhbF4B2MuPhqCkUYVRneHnPHw1Jc72MrazTruwRfJbGRhdf2kwJXQmjZ54r1wGA5y2bqnK1LAm97",
  "key32": "61csL9Pg3UhotsjSByNZ9VBZZFAMq7jJ3nsiTvd7QsXEdyd81jeKcYVKw2jqfN7RZxccTnTEfstz6hcdbTDT1eKc",
  "key33": "5q6iskNpvbVx15mY4oGjHhZNBG4mNGgNcHwoLL8YgHDpLk8ejaWeUrLRuyk2QVFDdVfVp4KxK3m8Tp6bGxcGteUy",
  "key34": "29s5VwKnkYQANmz6GgUzGNVSQxuumNz5WwV8Brws9UMGQfhyz8xycdnqeF1RVceZNr7CCucxVUu7FEwynvVsBopQ",
  "key35": "htG5GvN1cBK2Du926j7SHLMchLgWKdBnvDD7BzSeKJyS5zppSfwgriWJPX1QHkk4ZG4CzLregyYdBT1UJhpDRPj",
  "key36": "2GCuMURD6AkgtDABWoXiZcDX5LLJrvaUkiPWe4wiWQhx8Yoyobn6JyXqzbNdHJaoqi79sGGJ5hPtobkwTanXBZkm"
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
