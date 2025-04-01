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
    "5vxP87twHffNj79vDSE8bxA9UCPwHjNv26wPc6k3kzJUESByx2ikZMjvy6PTV17Jcn45wRzuiLpNgxY5xFGeqZaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ris6Liv8nNe75gdzzSEFx5JZ615RtXWDwew9cqnidQaTgP4oRFFfAKZfpPcZZu2aVsYcfzRBYzxYtcnYtHuLxs4",
  "key1": "3x2uiP1B7vTfnX3PWmfWWh93Ly8RAa3d9v9NWFis9jvqLEaBuqJYCQfmEGnBkPT45LC6HdrwqGVNoG6z7Gzrot2T",
  "key2": "3Y8GXCMfUErjbJiGx8kKLrJ5cBmEKdeHchyfycEvfeVCNAUmJv1HbMR585QygLX9z6eqvaSZvCyUmG87utuMGBCT",
  "key3": "64pX3v1TCF68he9ruBiQ8t7svY6CgssuNa4ydSMx63uA3zj6iir445NgudSdeXesmJTaFTLkZX5qs7RvizKza4gB",
  "key4": "2rbqHL73nBaiz6emv21cozCwzzCPJUip7EzktZkUM6Cdnr5dZYRZi4hfhSPBmWbZ2gvkEYx422VhvFRjAJyDEbpN",
  "key5": "3pFLTAywC5CHSp8kihB78qLBd67aSnTvfjJJ4YgiqSh6UoF6NewfAXGP6SghqddTYytwZqJ1M4GaBRFmWHKGEirw",
  "key6": "kvrC2pZgyc3Tpt5bWoJcEMcsSozmfE3vP66irZxiHQ2eegnoYvuwWHmFGYbpXfummYYKyrNPNCuZzzcBQ9ZYU1M",
  "key7": "gkvykoM2NtdTBpV91hSyn4Qi4HLwGfn4MAKwAycBVtjTmSb9zdDB4V3hbgRjobRzcqwDzY3txSjLXPQ2nLKrePn",
  "key8": "4sGSDancBdxvLh9n1PgoWxZkZjbbmnXADSisL2M6AER1fRYvySMp1RmT2MxiEPyDU3AmUeLPq6cRxBSzn5Dx9Trc",
  "key9": "5E9FZ7ycK7nLoeuAFi9u2Wdn5umpRj58phkdS9wHPMJm2FkdyzdztFxQqNbHtqcybRof9kzHMP6BCNpyeWEF4pZm",
  "key10": "337YtcqjUnfNyQWpfuWbikyEcXpD7sJLJyPq13RhLsbYnv5rHaurz8veoHE2mZ9ZLKQX3LJ7e1gsLF8Jeou8hZt",
  "key11": "5TtjvHcc6qJXNPAMULnHdfm9tVxD79y27f3i9TUhWreeQHHdFduxc7kdf7P2VyG8oV8WH1XAL259ZWSGryKVVCnm",
  "key12": "5mncjyLfTm5mhisUUuyWfgSifh5h9TVjyhP2co5iJXjAddwd9fYNsHL28E15mPBcA3mMHanNJX6ipnwXCkzzXTfp",
  "key13": "3m35aciSBXDSZD8WyXACbiFgXWqb4CPxPsoYjBRNuiSfcbExi7oSffRg1ZqLSoz1X8dfLMNg2pr3Rma9qXPJ1Cjg",
  "key14": "3qqmMXMwASvwkHtKDHRktYXAwpGvafTdDrj9FjJv1T2sy8W4FcP7fT1XrfyXrjLXKMRf6U6DWmSvNTMPP2jfiHQQ",
  "key15": "3R114jcTy7ZyC5stjZBkye8pF58TNFbVibVoT6Q2VBqxuFfQ9iHUxBoK6YkogrohaFcGkzDs9QLvheAKBk1QmPD8",
  "key16": "5tPbo2FiHoDQuWbkNZ2WCm7igPwqUcNLRfogfZ5g6Dvqjb8L8WLsMPDwpj2n1Aj8Bk5sWjVWDXiQFQmJvh22UL6a",
  "key17": "Ee37JHhXyZuHBTXdEu9aGvvyTXVDWL7x7fQoviPvg1juNFp7yyyTYayEHhLbvxM1P2QqkLwV74rrh1vBwoV7fWS",
  "key18": "toAvEDW8vBZfznsAvLf4RSVUNfMEUwuCsumPVBtzWekMmtJRfoEsNt34jgPJ1e9REx22H3qTu2y7ue3gSm5WwrW",
  "key19": "3dkzc148a633jbEEkvSC48V7wnuKcD3AsdvrvKMRDoYqgsdBXphdVK1cagnq4TeH8ytasF4TDGZdijvLFpRBpEQf",
  "key20": "5GJEgFJWD1G9BbRjwc9kWNTTU9KGRKL1BCkU2LEsnvsnUp7oypkE6ooty15JSEXTz9LXKH6QeBPyRG3otqgXg8Ss",
  "key21": "5mQm8vC9LnJFLxuozsuzYZ7oMnXJADdRcqHfhb9uiftyfJHgP7m5yxtB1uCkL1gNkDzKThQAtLqF3SSM8wYUaDWq",
  "key22": "2X2Gyo6LypznYsdVFmDCxS9JfMqkRE5VbSbWh1xTMdUqHU11Ha2bKNUQ5KQ6hhxLdG592aPpVdA253we4xNU6363",
  "key23": "4GqabCW5wNfhHS2THicfyiVkU6ycbc4B9GK7uutNrAFxrB6Z4sToSWb65PzymWWYoBsipqSAHAZRrUZcP1TN8s49",
  "key24": "3a2Jex7yCKJMktuNSEFkKmN8919999gp8DaD1nGv2YQb3bnsDrg17CPc81cVze6p8FeBdbfXQybZhuHskuUDX2EF",
  "key25": "rLEdXtjEajxDBHRfMgcvfNAD3pjuzKHNvLwNhiJzDj3F45oYq1RbtgCwAdeSibZZfScKmkL8u2Rd6q6YTnmupQ5",
  "key26": "32oDRzVbT8gmXGjZH9Y67gyVexV6JvRVcrgQSL1ozujMwoJZSXRmQZBXANrvuXzpDjW4pk5pb81KmU9aNSvED9Fx",
  "key27": "5Yv6Ybho9yvfVQrgNVKqyzYnQZJQy17XBH62GANayQhvLLX7GRwpPgX9YEZ16aUEBnFzDWDAipuc9YRnHx2YtSV1",
  "key28": "29qx46YAZMnCXcbTiXDi2amGXedzjpongDFpqYmbRgewbP33DyeRAiUknzMtXPEW8vK7GiVfBSSM8AypQhdYrCdq"
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
