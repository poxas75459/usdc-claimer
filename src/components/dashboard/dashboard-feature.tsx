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
    "5v6rSn38ELXMj44w6Qr5uuE97bSKW4Mo3Tj5LbgZUYXScb5FYMopDmbDFym6YvyKEjKLjDZVZg6ygQtaCWzTaqP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VcViWmDwPmHNz2Ad2zgqMKHpWMC8PjrT8ssPhd2HLN5gtTR28MyXJDRof7BTTXFASupAHNZpGrLM7GjnZQMBT7m",
  "key1": "43HuRefRstRypPEe4E8hZT8Z2ouSxKTAVnYray4yRm1L24H28eyKbe6sp9kbgJZawGQiXDaSjxZugMngfhAR4Kmk",
  "key2": "4wiFhSLer33PbUXYxkVNvjRwWY8TQDWTAG7zLpohsh1iMMDvuYGnVXSZN8HEQgjCqRA6iD5yBG6BsQwVuSTc67DS",
  "key3": "zAeCpqNndq2dFnGvMmdMCD2NqWBJ7nJFeAtHGh4BTvmfEDGWqp6eBd6vHHHZU7BdQQ76BvrzLKcthsihpkbUm1M",
  "key4": "3ZZgL5kmEnn8X5QMqMKBTNf6e39jmuGMBBb36qrz3dxtDdXdW5pwYSWk1X2g8NNh7c1dH6W9RRYEaiSkXE7wmLYz",
  "key5": "45rDAg3QpB7Sb9bqpp6WAtMfHarcYPdLan12jb5Bzdz3CeEwC3CMFhPey1tYBnRyonFkhxw5qo2KYkm62ovyzfxQ",
  "key6": "waPKmARqWoxQADASbrmANchTcRdQfAq9xTkqhX6WVFuHQEMtLJxTBEvedvBcKCNvrLkyz5DwxDpyHPQnX7r84Cq",
  "key7": "38cfSzFssnkgJ5VwyWixJ47xWkdAuLyQUQho8vt4qWCv6PhEiDi9gd57DJJV379Y6wnWb15Hski2PLZB9js8gmeu",
  "key8": "cm76Gfu7CvjoiYBeP62eVc6UANfsU7E33afVSAyfH7xAB2miQzcgYNLkRn9XLmdYL1uKikmKTotyghzJJCH1PeN",
  "key9": "287dDLwvKP83J2BNpVoKbWBAyunSnHS523fwe7CwAJutUUBmHA8RFLVN9gHairJK5tgcxd2b8SxABYqNrCxAMwYV",
  "key10": "2ryEu6wZ7bvZbadyAGW5tM1nRBpdbkLKvzXm5YDsbuDZqdKSAumvAyeKu4qcnB2J89FEFGaxwQeqqNxxMzk29dRf",
  "key11": "3fp6hAfaFmWyKA3YPXVAs5fTutBjoSSjY37XG7DPVVWWY8EFguksVLTFNuM91r8MjLmkb7VGpPJQxVyM9r4TPo6Y",
  "key12": "iMkCCxozSAUuGKjyhZv5DfBXAKB93XmJVT9GnvHmYj1jeRi1og3UgYp4hiummt61se4e7KjP2JwNhqp1RcdLwhm",
  "key13": "5dLCskhErSv7tfcPsnvG5MuGSrLdJne3aLZPn7vuYT831QuLbEX7CHdghxC1CXxBiDVmGcMeFFTRKjDujnS82JE6",
  "key14": "3rqotp37tYFiWy6N6Hg5BGnSWoRhVEP6Xxq9mL6zznPoJUGUxYvL5YbUfJEKK8gC7g4rzWETvZZ1YmF6wZDnwd5f",
  "key15": "5qM9uqJGG2RCje9VdkjRLpfJCEWxUCs4vVy8ECP5mU3NngoDnST7Znazx2T9ZvG541m5MxZTJqSM6CXaQWMWtd1T",
  "key16": "5XYewaXeUsvwovJ2PxbkAk2dCdUpNMvKQw7gkZfzU75jMJUv5FixxPS2PaVPUNwrUgaube373MoSfBPLj9a2egAY",
  "key17": "5DT4kS1gw7H3But7ciLVFE1LyAUomfykNSrfKv4QMH6sHGLingTAgt8FPAZqMpaiDJ9Eyk1K1meeWAaG81yDtuGE",
  "key18": "42H5JCvGUWZdQZbbR2uzynntDNgqzrbFYV56adrD3vwthziYfbBvi6m8GmM24XxSLtq9BwvdtPXwvZSggV8fRrAL",
  "key19": "qLQd8HKkJokmUPN36hU1vLErFePMqZb42GCP2SgP93RFyEYt7ZXhWmDEsQZATyLjE2HfGKfECN1YGuBDj4chqDL",
  "key20": "629KMiJbT5FCx6B2Zt44vQw7cHXFjN5j6gDeCQ87guxXfT7dxQiAsk9CWRrN6LX6YKFPf7VYJ1n1r1QkJ5xxrRJY",
  "key21": "5pX5Nepmg4zetRWJL4mAYGM3r8xtVZ4rq7P1tKgTVtj7cy4CYTAJvqoJjxuZtUKzNK5PTrFP3vWp84NfmrXSRFG9",
  "key22": "37eTZEgtEYewYJfdZm19mwH4wcNw5RpHv5mxmi1fZrb86dDai22bMFQqoR6f7PdsEpNe5duBkwZNp7NafWr83qZd",
  "key23": "4xyQMpB6to5UDGs9a599L29FZsLqZ1zvfowGxA2vPfjYVag5KhNrBjG6NKW9yeAELcdB72xV9KVZuSqX8PGMhvzm",
  "key24": "5tb43g3Hrux9GVZVBP1QbsabeDsa2UaKju2PPWouow1HE1qkHtVudKxJMNJUz3HpqffdQi996BmWDgg6HLUbVYAh"
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
