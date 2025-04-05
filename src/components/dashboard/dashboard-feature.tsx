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
    "4HxmR3e2VUHWTZM7oZxMdUcuyXHscFSvA8ViaQs3zNsx3A2LXabU8c91NqsZvhXZVjYX2EXgsLbdPkjJ2HHprj19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWY3JvgvfhnQbhX6d8FTF173HfyMn5DktF2px7RJovbin7Fzq6uMQkp6d4hK2wjBphngK4NsrhsBU3hDL9oajqe",
  "key1": "5u1zq1ZDju74bNQwHdkj1LGgCwHUh7iroWbkAWp2KL6V7AkXdNRsosYxCYwkRVtqbWk7PwXnzezYqLRz1KUuU9yj",
  "key2": "2svR1jbcNW9E21jeaAFo4AZkY7kJHvts8UQ53PnqjZ9YM5rxUBkgMdEnthXBbMc4HdHDzevXmj6w7dScEt7e4dYK",
  "key3": "3iVBSJzL3ik8uumKmvTcvMteSaxwTariC7H5U1sYeXAYzrzext4exSBvN8quoZdGh41QhfvpAEsik5Cqs1pyUzgx",
  "key4": "2e8AF6wroN1a6B9uFuNQQ9onUHg1qmFXsLc2zhGGKArPSkJv5usbYRRehBnCchWJubYoSiFKHVFPLUrnTm8VaY9E",
  "key5": "HRyx5musU3jRTsSzFdDM8dKzMoCqCd9jSFPQPwufFvQzjVbvjxATye9hgD6nd6DTWMvQ5W713Htmj6WGu5fnH4d",
  "key6": "3eajBaJRHhdoNgnyPMT8D7HdvjQ5EbhBAziXEfujVyWr4rWVtohpXnsUSnrtvJgeq3SvK3GK81FUCDm65C5gV5ob",
  "key7": "5PVqstkwZSdjSH6W8c9WuhVd7bp3au2DteRKwBa7zhEr795zzMWRiQYbC1yFBffMNb1Kq5F4WxU1DGCMRNNPBg24",
  "key8": "3Ev2ACt9VTx5Fxu11NSFKDLsrKuumPGpXn84g4VQnBM22hb9iAEjYUn26n4c1fJBfxQ7TMyyHEEWyutSiuXQLJQN",
  "key9": "z22dF6TJgZVttCVWhaTwo7kXGS9rYVFni7z5RqgpT8riu4ZF6XX3NguawqUjv8v3ttJs3qCwXnDLQNbBVdK5ZZr",
  "key10": "4pMm9hmftz8Dj64mSw9PwAmBdtVPYgNjeukYof7thS1zg7PKWo4674ScFDEqxf2tUH3Nthcij1h9mReAqUwwcHip",
  "key11": "vtv8LNkwEeYweuqUV5rTtRuVx4Mpz4gYwhUNv5ertBsgyxm5dtJSgPeba5eHX2egHDFr8hP6Ek9qxjj7gU7t598",
  "key12": "Ur2yS6cUv2LC2P76EDaTTFjEaCZd5efWyRjUVemaYLoh8EP3vcDWyuiF56xfLZ5HzV2y6k51AFRnbfB5T8MF44G",
  "key13": "5womdfLgbp4odBGz25UZka5Y2ttVfHpc6PeM5r1EYE8hmoMqTnvNTrc7X7YUQ4XCZJ8vvPh1YgefmcyuMmNU6Gq6",
  "key14": "4sb2NSrpMKmfQVMjtTQgUMGudj7Wct1RH99etNy84UZ9whdVXJscC1cEMDzyhWfRGve8WvpswA4if2HnbYUNqyzv",
  "key15": "2woRM58AWH4wkNSwhkAfj6WwMAv2USitsCDqqXwNqPiDbdTNReoANTrctJ8eLpJhfeouSJ9CGgf9TBNrXFyiWm1n",
  "key16": "5rBCYY2RUfYjxowPfpPmp6fKKqWwR3wHuBDRAaxo8nHqnrjiLXFgqhkMfCi3iKMKXhXE74qGjrZKwVjAwRucszUn",
  "key17": "29LWz2K3iw54o9kerbbCLHtE46BbbKrK68JsjbJY64N21ZZmSDzwYZeZ71RvQi5AMiuB8UYmakU44ScGdF1wEh2v",
  "key18": "4ss522e8GeqVDB3dCXGruw8KzyJukczfftLi159db7WJF5ZE6GNAJv8Ve5FYfcYyfQsrKGaVXhTUaYFP9an2YjNX",
  "key19": "5Rj26rH7A6N9Z9mkoBHozfZySiorenBYXCHvQaaSF1jx2Up5ahe2QHzJVub6PxqxABaSaDojSp4c1Vva8zMuXjVs",
  "key20": "4Z3SKFCAhVshyp4gDHHA4AmHtZ4T9onZWzV7ZpyQcMX7V9DazBeHtQybut58sMM25MLznPbiNzkaVbmuMZtsCiNH",
  "key21": "5rNzYJA9Ewv2X1Mprn2eYykYBzvDtWyh4U7hTqideMcn8HVWRVtEok3FNuXXHaPYQn4jfJEuTgK86HPimCAgG1e3",
  "key22": "2MEVubDT78GNmu46HJ5xc7c9WVyo9ZCH8ECikocY46SDDt4GZkW7Nzz3fjbYJjb4QzM5nPN8BAXsuh6KMFAGrvZK",
  "key23": "5n7ZqbLLWgwwzYwahS454YAg58czkbVSBg4C3NTgqvchNCHE1hihMDLcnKXcxnkfAqfa6nq7hdVpakQYL4Niy9QY",
  "key24": "5V28yU8Ey6jaMLXPz85xtyieRqqAG1CwZcdnQpWvwAtY269NVZiFE1vD8QKuhc8Nk7tHuKsu3Tida3DxoepjV3yD"
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
