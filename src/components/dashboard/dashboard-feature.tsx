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
    "4zHdZvoBckT254BSb76iruLeDMjRkUUiNYKY1uREGXguKLsU8P8mD4RshHjBhrpQTwyJJK5d1vWhvTbkEAxJTRwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWa2CAMZ37YXc1QekS3x8Skbu9QB2Y1cQCbgWqEA8T23i92MzWvfLrtzcbmtPCuCxFCAoNUy9BHzjr5SeUdpiJw",
  "key1": "2nHRY3CFKUZLbFtEeGDoXX8YDiiWHo6yeyKTHcvQZkd7bDD7BcKmNwrHkxqPw1RDnkDg5WTpCFcfpjQ4mVBCVwyN",
  "key2": "3UCDJD3tY3pZqgpCJsReV3a4hXQ7DqCRcj9svHtjLj3e4ZhisRkuciFLB5ypWS7wbRAwzk2gkBMn1GesnzDNUhgb",
  "key3": "z92ff464VVMjXN75bx7QFeBVrwcost1djQ24N2qs9sGRokv8EcgdZySYmJGfTt7crTHcQD9kWyeS9qmbDnGYHLp",
  "key4": "5GfBQk2pbiSjkuoYFbX3ksRKYYYJTpPrD9EPrVoM7YEe3qeK1DkLUZ3pm9o7rH5XGfX6JjH57f9pq7QnJ9CSrK5G",
  "key5": "56K7wGSGgSCrVan7AJk3Pb4NW42mF1ikKtsWMtZza27mD4WBWjP7NzArrDbr9BxAePxa8uQX2yGHm2ExNs3KMwNa",
  "key6": "4THDQPXwtNLfy6qGdMx56xYZYFe4i7Nv8iMW5kfXrseDpNbwhtFQ5CVPsxnxAHiB3YpcCrjCty8XGJ5u2XmuhJU7",
  "key7": "39JLYJbZxKvoQUZmq6WAY9AfnNQa4N898pMrmypXhAZDKckMaSKhum42Br9doRdroFDG9TVhE6Nj8Q2unMxQN2AF",
  "key8": "4Mnx46KBb4T7PaTjuDQm5wpfdES1gNzFCQLrmQGr5jTNN48JR5ANTdrGPxpSkYLzzU4eHYZjQeR8JpNBuXiW9wFX",
  "key9": "L7DKwfmLjo4WsoVq8kJDDfEEZXzNkxAwxR78vNb8ndLRLqwywXbrpGCdZ4NBqXBHWYwoERkVTsV8iNq4UwXCzmr",
  "key10": "5RiGxt2sPNscp8Fn2VisMfmY632pYAiq6kQBNmPWRvijFJkdELhgHhNa1rg75ZQimcf5PKEcAaekyFxucRdJitCu",
  "key11": "5MMBcjRYeTbjBhdnxWE5JZRtSnnJJTXdbcVNGxK7xkkjTCViTUfj1SCDnck5AbkwhULcTMq9ZUhZpdPP9Ke5MpFP",
  "key12": "56BgzZw6h3JbwD3uQucuef32vcwkUu2e6c72YjYCbcyZB3BWnaBHBniSRLeKDjregE8xNqQzVKCG4yStPseaxfi8",
  "key13": "3brYC6UDgfnAEgAVsVTW4hftTgzFtmUSUPnmxiJddFLPHfXmvAJpQqSidRq1zWoDyC6gDjvGDarRDADzgdWKkiZM",
  "key14": "ZGUaEzHhN7PZA4ZYrAsmAYo4rnivURP1fVMn6Ypb9jc9ThgU9oYj6u95YySqDXAVt6AqsPBmmF44v2Bz3uzEAu5",
  "key15": "2XK2YvhUfZFCiBg39XMdVJhCszm1mRczUBZVcXwS19aFxDjUVk3YqjNBMXFeg3GTosJ3uE6kM1RiEEUeNU89URs6",
  "key16": "3HNByb2SjHh42eGwgx8Bz2YGcjEfczwRoxHWci7F4hZX9yL7SPVuHsVj3cBKxdk98XEM3FDqRqtLq1H3MRk2feEd",
  "key17": "2HePVtAaMCF1CQAsTfxgSJVLQg6b1kt8rcnLXcU5bQVd8GncLTK8h6qSB4ebahbGfV9rme4kKgFkPbGoDhtJJq4q",
  "key18": "5qwUbtTuaGNTTRKfdv6YqNxazcqzE7GQtBBw2GCJJFcGetXdh9yrGu8kf6Aa67YmdDHGwhG7QMDnkZqAkj7v7ap7",
  "key19": "3yfMFLvnowAYkq9aWPewzDP2iPVoFc24Xg1dVSMiLSBtKPgYA2BFL989aiMH77yHdsskWQa5sFZ8yie6Qtf2AfK7",
  "key20": "661q9NRLXJLN4d9xnJuJvGhconnYDyVEwTqJzCvh74N2fbubyCZV6ZqmN9hUPm2cwCUJzfSBspFQnUMpDkd1zGit",
  "key21": "38fAkyc1ZaXKXmhN2XUCphUdVJFfYVfCz1gpgCi7VQ7xAgWHCQDosLHdK7QAMys8FDHzoVpMNsM2xyVSsyizQQPN",
  "key22": "5TCW6qpgNky2CuZiA1yXW1HvBGm5vZDqV6wQk6L41J9RXu2dausNps2648QM1uc9Lyvz5xrGu8CdmHyc7Vz5gPkc",
  "key23": "26PtpoECbQ9qjSezsdrAvYPLD95HyXo56WUbwCK9rvN2wd8aAXrm9jcASyj9fKdggRnQ9RrW2oB3fGyDE1voDdJs",
  "key24": "zi1cBn7EF2iHN6V3go3aTttpvqYXSvACpnTvZ39sqZb2Do2K384bwwU11UkcdiLcT1kgDBof3NQN8wLiKRVRzJU",
  "key25": "5azDsPeePeMzTWkvu9j4fMkRpANeY7FaxvSfMc1qb2i3Jh6N2yGD9ZRsSgM4fGk31XFA1vhi88xkro6JsYSjbu29",
  "key26": "2yG2x6eQV71vCfaMA9dtgxyAmWPLKigzY6XvB2RAM8Lv5v48tv3WLkyG6u9bvL2rHHT4MA2ZFtCXu125zTLXcHj7",
  "key27": "3RMmYktvEVDAyF1pGweq6g7QAETLLcDey27pGYm8ufzZxCzpWUiprTnofKPzkK1Jv4xGbrx5wBo8zVtAL1VPhZ6B",
  "key28": "4phwga4yG8MVP7Cz4QmV8oLXNdhAEona8dMvWFdott2KBNNp2X4UqkUkXhCQbab9sAhXdmQnEAQzcV8ETshzYthh",
  "key29": "3A3FN7SfqzdbFwsZyvqDK7jvJQQnkSc13hSFrZpNkknRfSTBzc1LHypBM6YNs3ntYYMmXJj7DgvdXjKVU2PSMR7L",
  "key30": "5SQ98MYf4pTWVYFvxg2GKeg6vvqmuWYonvfzWJUdARoARrQ8dVPEEyyexeNkdGGQJF6wq2C9WWkkbK3WTDyYivn6",
  "key31": "SJ9kG2RFZ91sNZnxukZ6BMEBTtbKDDaEF56466W5DD7R2rT1pkfRZo1Wsc8X137QXnfqyBY2GPDbffdFoXfTgAw",
  "key32": "4iKoNETsWDAwJPbwbSZb1bJyTW3jRMs6WK2fuLxrhbpqidne545BpAtVHjq2ksByLoLMuXGvbUoJg7QgF3R3pUo5",
  "key33": "5zLQhJNWU5bs4YgjurgfXViyQ6sLSa44ZqR68Gy9tEZfD3Z8mkmqih3EP4gCX4pjLcELiLgEHaFbYHLQUHpGiFzz"
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
