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
    "46w2J7LH1hwZb3kdWinhGmwFJfA5nUeSZ5vd28uGXSYsyYNEDJWkgg9fesG6jmnqSPrTKu4MEQzzLvoQwNFbXhwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9tfPU5n3iF4W4VjzrxHuRbmd7DFAKhf9c94WheegGLqzKC2t9PttXQmJdmQcwKrxNAjaCYeXq2jYK5p7iSpzXs",
  "key1": "4nVTa3Ld6RLRgVqoLGMFw19oP1sRV3T5gxMrHzSMysY1fxvqoTSTpipbtHQygcsdFPCbVNJ9Nb5b5XsFVCZN5Jh7",
  "key2": "4yV1dzXsjbwcgidnBANsuKXm2tT2fYDt6BrpdgNxDjZjbHC3jbpb8bqiygG57W8qoTY1WCMVVUS7QZtZLb37PPh4",
  "key3": "4k27bjnrFFppRAuwsD6BSFwJUw1cYnejNQQLf8nDr89HBHB3Ta2MCnTzDEcgkALDwHjzMXYvewQJ2Cmdf1V9zPKX",
  "key4": "2V3RPQ5q2qCveqTLDWyZEzpxAdcuAgKnZ7ej1GhnbPRu8XBpjzo9SLa9qH9seXaHsbfYPcn8YGisPLJPMn9r4dUz",
  "key5": "4DinQUBZu529cUc6iehNHZekNmbXyf6ysfTkTzPTKVn5Uzi8t8bNRh1QR6e9ri73jaHjsMZSc3UPt9bnnGs6Frfo",
  "key6": "5a3hKKdEvGrQv6Gk1NSZDjvQeBA6GXGAV1zHAyg3xrmJJybfvUyNStvKVNvgvUf2VwVzDVtLHpNMYNGxY1MT5MFs",
  "key7": "5bN3cJjSyeFHhkvHgs2yDvEWwrZVG5aKkm7vDVej7AJRoYsABqmANfiyh67bQbP3r7UNUvK7qPEPs32j73brCnWW",
  "key8": "3wUMhPsn4C1Q1G2yqYQQJRpKvHQCip49S2wgf7Qyy6BZs2uv6UvUzrbKdXKEXhb1e9ozHfFjFwfHzMD1FYe213k5",
  "key9": "2oi4yhEn1AY4oV3LKuFpK2EYZXrFdGy2kNrVKWPvZQYtXNFAce9R2wUUuV423ED4U3RAqiNCkmgdNQnQiymbtKqd",
  "key10": "5xiYCSDhwzK9UimmGoX5irhkuwDVetu4VgUvErQy4RuoKW15c7fR5iAKQiPki98tDcgUZDUuW7jwXvye6M4QHrbt",
  "key11": "3BBxt1CiCuxwHEmBJMpFxeBZh5hAqhfYLuk52mFxGraFbfFJye7f6eWpV1D4CJUEGrD7m5fEd7ibK8Cpabw2B6rU",
  "key12": "22nHwCWSHZqARnkamcR1if35i6Z6Mc5MxgJNAUZPzMs5WKYVvmuE8AHGiTEgaRLiepDujLT6niUPTpyaRCETXXmf",
  "key13": "zAbiJRQrbWUsxrTYiKeJeRUSPqpR8wsJhuhE2TutboJuRqGsNxqRrNxJJkpMhnmHpt8x4CXcqMC9UVD1we8nWQq",
  "key14": "63rUzETa7Z5gcxLomXARbSaSjRTLTdgjuCRGDXzPiGkU3aLiybVvp9BGPPdFMLkGqrmg83g3Wf767kbra6SGyyUr",
  "key15": "SVd8PsGquYuUvVorrHhLxePZG6j5ZW1KC9TDBmoQsgtgQV8HvoAzVahiAa7tWXDc7RnYVvoE7JMVQjEmUcG2Ujv",
  "key16": "2AbQAhEhJ88n6DJjejk67nHkmNejxc3VXwbMDVS51DGD7FXWR4LQe3BBbFTrtNP8ra5w8J4pwFibGRiej5t438dZ",
  "key17": "5KVNk7r8iXne3oxwqyPNYpFwAVEcyHMoFYR52M8eh8kPhHWPVn3RVSJVTyYtErCVfThSnK1Vmvz9cypz6zyUchaY",
  "key18": "3zuqptuqa3VQ6HhQEdFx2rvoDsXekyU4d3Q2QLGuEu8kabJ4RwDRHm96g52K9XzkSZUAfLUjtPibc3HpkZ8ky5bY",
  "key19": "3VP84YjkHkVMCoxPZ74eevKbCJVL4rBVRAVYBpci6GdUNiGV9Jn5PKFRyBxrvSqYTEqGhrewtZ4j9Msm5LMj8FZk",
  "key20": "458p41aF9q82gv3RofbHhULGEPc6ePiLAuPc4VzgsTaJWucAA7ZvGzScxkff16ZszBXFjHEA83Cgmz2fWW6bmjsr",
  "key21": "2SFXMypwruPgjp9c6M8PAdrzNwq6YxGdVzPgMj2fsJgtfT6Ya2MVYdqcughj3AjGNtSS4b487fQrLGkuUNc7B6qh",
  "key22": "2op5okzj2VKUxMnWvjcVNrhZ6rXLQncgcTnmGkQ1ZGZw2nXasdfTk9t2xeT1GhdjvPgSN7YgXA6q1vFaNn2yqrxQ",
  "key23": "591Am9brim5sWBAyVvBFFcYcMbYvwLpR9sy3wY2KCtuGcHZKWmiswpBt8FKgbrm3FjSwnLyqx27rrCuXxwi6AAd6",
  "key24": "2k8TAd4HTQxtAQv9WJoPU2ec6k9Y9gpxtiAHPMe7buZ4KEMggtqZRVjG3poo8CorfvChkHzos3ZGQwJ14W2AnNw4",
  "key25": "4fcTJ6X2JrKHRisz54DHQ6rupZxCQ4krajippMpyQSgmbWnzzgz3uoj9bjNi1iyvB6sJ1vbtFFocLnRWcCmYLsEX",
  "key26": "cEoUYVUZnmvzjMVfXhkewv9XQxT8R5gcqq3tyyrzHDdF2GVFRzEZu4CqBZBeiQTk8heikshn5vDdPn4izafN7VU",
  "key27": "5UE5bAYAPdJTC68zTTeWBaqobBB9dW4Af3HAABJ3yr9XvSD5vNjQovR5qvSXRueytspzL9fwUiQJdehc854zKxav",
  "key28": "5e1n1AZMe8fJWgY4P2UfFiLiaSDpFSy1w9Mw9XfMPiXd1HiB3khEMEwAV9YfgASLKNL5K2cwrn9spAXoYQcLzofR"
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
