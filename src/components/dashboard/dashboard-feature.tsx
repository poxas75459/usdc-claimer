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
    "4EGrY9ZWUugpMi4v7CsKR55TKqCiiEjUAtNbumCDRPg1p5dPxvmkPyFmtcCNugVdRb2SzTxeQFDD2fRBb8qHh3xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5VYDSQLPYbvpuevHS5unXogQqpY78XZxe6TimEJoBYUUK4JNN7ieyfMf9PwHhEx2sR41ScLqV8qQQvTpxi8k1C",
  "key1": "3Vt1gZaSKuqeGFG97sfKvzCyP3bfafHN53tRv9BPMERoRtaqtxBTQQHcXEJNHqHZh46vdaNvJ1xF9fYLMMoedy2z",
  "key2": "4jdjfBgKMZirmQEQGz5tBdVrEjhGgFfrvjpUsFAPvN7fMWbh6CHvmSxu7GGc5oMxiPhbUbK6qS623LtsJmHpZMyb",
  "key3": "5YiJ8smRcRx9k6wWS8MVjLWT2mq491ZzNkSpa5UnpuTYN8LAMZGwMP2BVrcEkfDbD9mYpLhrGVwArWUpZJiJZMaY",
  "key4": "5EpzTduscQr3imkvyaT3YWbZ2HkCbQgjJcx4GhpCLJ224RyTsN8Xu86Path4rbqULT36wYBQ2xYbjD1PR2JEJgBw",
  "key5": "4Zeya3GQyCWTyZwKwbkSgkVbHNRQxqbhEKLLPrj5ZLVQUneLBPtcwaDk43ipLyEYnaaQqRJLPSUX1zYr1C3c8W5g",
  "key6": "4xGmeZmJ8DBGti4kFghpCSUeBrCrZPRofVd3uVG3g94umnbG5VVsCGn39h4HNw5tD6TtkPNzeUwPdxQWuFMToqn7",
  "key7": "56k4bu1joyxAiENutFfpgLB1f7uT7yvLjSSnhYBkNAbtchfntqVx5MmrQMon1eowvUFuEQ4jV7jchcnVLNq3cWQu",
  "key8": "5txaN3xbvp7XnqB1Mo1F7dxpxUM9EbXjzCHiDq5juwARQxrHehmvspep4BSKjQsvLaj9sebTKkyG1x2w8uN9b4Uh",
  "key9": "qoyG77oHn1y8TQ7ESBP8dYnnoSFKLNQyNJcd7wjd9kqjrvct3vXjqefCpytzsjzRbjwVtjV7yyXn7X6FBFVQ52Z",
  "key10": "2F92GM5QUcFvQweTyBmbNF5CkwwFTYMeQmhbzEsy6DBqeMFADddP5SnxEd95ZfV9ooEZH5AdzkKHBreq7N5qYP9e",
  "key11": "5VdFfD26sG7ZUefcMSP2kqL3Sijtb4dwKApHscaCjjExBVCvUMEJUsNbNeRKvuwYqJtK8DUd9Q3qTGKmj3jAjHhp",
  "key12": "wFVsQFCQ5nJhd7pvUhwGXkcGa2PtEw1GnSKLX8k4twnnnjGHZouEWTtTrTyqreFD9m2x14mDdBgbnuTm7pKudKd",
  "key13": "4R96iUHBzbbA9yHi7Rvk72SZvqDeVdrAGkg4wjgVQBwup42fNsAMeA29UoisHcJxJrK6HfTkondHugp2YyyobJmE",
  "key14": "4MKPuQpBNSYftvC8etBJ8VtmnrBrUYoJ9KJF9vmaYwckYvfWJViF4Lwnivxkb6SVgDHa2PvJgMF7yb787ntbYwEV",
  "key15": "3DwSjfpZ2iJtG9ouuvFeEEhSBwe1yWoS2QMgA2J3sRXRcxGnTqqan6G5ZHFk6Bd2ahjw7tpr9kNzf9dooJYtbicy",
  "key16": "59r8S8xVKzDdeFoDvApPDJfSQtrgHZTuA71seYvQ3HUvK3S73iSUohDQzCuKbE4CNdB1g3QW3SjK48WjjpvyqDx3",
  "key17": "3wZNB6VjmZoe9LdNuDUvhe5BuWpAMccFUvZ8r43YTFRAWr1UK43b9McozQwzeHi6Yr3RcAnMkzBJtwm5NL6NAvvA",
  "key18": "3r8BvnMJJF9SMXbZDHuDstNS2gNDtH6hT8AV1gX86Hfji9qKhsZYLoLMieVttNkCAFqK1qjpdGpZUGxvUt9BE7ng",
  "key19": "2ipwePA2CTEvdq1MY88L59kjRDkEuNr4XaVQU7hqM7A195H9YbZJG1dMFBK8ZjEpWQrWGNMfB4jps3rqLpn6Q6oG",
  "key20": "4yhT65pGV93ngWdQ3QbfzVS2xQ9Gg6jBxf1hwW6fc4bEjEZJxnqhMt5Lrf3baVC3KXLxGBB51AYRqcutMiZGf75s",
  "key21": "3DGVtYWF4fePXQYGHyfGh5zUQd2fMvNUggo887DzhEQLpnSiwUWA13yqBoviL51ry2uCp5CRc8SPbLN7p73SaPS1",
  "key22": "5nYThk7Nc4m3GxF7kHjNDcNvSytJorG6Udt7FAKuNY3gxrq3wAaU9x7UdDpEhrGbEXBbuvbzwLJDnaUAAAkMKeew",
  "key23": "4q7jBXEn3jJuzHspWWQvNB8wofaGBHTbx847NtGuCdh7DYqgigrjtGgvnxjAuWCZd6jKoosDp2vphPVj4S4LEfHJ",
  "key24": "4sXFY5iX5uT1862mxXrFkp3SRRqVU3hx5CmLFKpN85D54gD2CH7bc1yBXJaETtbrPPktMo5e26CxzvityZyQu7cg",
  "key25": "5NcJyYyMvK2vsXH8yndBFKnERvqsg1EJYZ7csCdECuzekedJyD582jGc1Q4zexWKuebdsnFh6NoCr1hPRsMw9ASS",
  "key26": "5v6VwFxgwGwndvV6dmtnFsTBPL2sr5EDDLuAGgrS5ZjGYpxX2omTwBhdwGWv1AWKkRgrXsBKfmeFn9XrzcE2gQVr",
  "key27": "3asdPkKexUbrTBDdR7mx5g1tbvjaUApERQZ3Nv3cpF1fFEm2L9AUfaPUiYP63z99FhhCwQ8aniARaqB8SGhbPF4o",
  "key28": "4y8ByttjHY8zuDzz6vY9f5f9HjXYKJocc3sMiimjUXzg72tktjtW9JdgdiekGcHcJdkvktoGUezqJDM3eShFmTkY"
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
