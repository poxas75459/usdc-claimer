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
    "5QrN4fd2vFnDoh9XnUkZTddpjoT4R45vwLdAYdiyxTxQykJuh5UZWQyGCSks4QQUE2H81N24yxzG8fzy1vm3ut1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBQzHi3dozVp9ojX2pQrx7G8kjhLNPT7icwgN9xsTxgjS88MeEJssQZZKG6L3TJJFfAxcxSRHYmcmHCQKRrrcwz",
  "key1": "9fim4j4qvVurDGGx3v4V3WjgKStdJ9EbPsJXyVHaGV6a8J94sp1uy344ZDQdeHmUYgLHmTZgrp9uoEVnQjrArgg",
  "key2": "3wpfMFVFczZai2EcWp7H6RKEvczVcFCrNccaFppnkx7922Cao47yseLgLrZbhki5pAMJtwnkobsgrKrjjYQaFv9h",
  "key3": "41bR9C2tWkuBZkYCoWhuok4Z6jbzBsNiL4KQinUL7FK1foCerNQbFDxPhZ4Z4LobgcmbYDVSnCsG4AuG3RRsb6vM",
  "key4": "2wZMPWosFfg6KL5MqTvrueiUeERH6JAQTWcDYFwhuAjMZx5Rhqt5yRRkA6To3REW6XZRufZPTf2uYPTrb1DhAm2h",
  "key5": "3s7E6jnZumHLTPgy4gyui8Fpot67m6Q98QfVfBW3LmKUGKe3SLLqJBi7QyawH6xti8A6ExYBQEJtrh78qigzT2QY",
  "key6": "51Ha5G6GK1K148HtUEduNqAD1szr2S7FRPnbwwec3uYGFkg9UD5Tnmn6camGfdBKxUMycjYvC64yeocbg4fyfMBG",
  "key7": "imzesFJqamVMmUvQQn8RtReoDCpUo7hxpxUpC8G7nfRQtYD4faA3cprtSE2QRHFjjD9WvJbBRiV7CrEw1gmvhd7",
  "key8": "nD8RKPGoZKiTw3jeUBqCRvmpptW6f7nhBTGdFnakt7hXyjCB3T9K8LDYM26na6Kx2LYM4B393sMJqKYYGdiUBVf",
  "key9": "4toMFhr62yPpS1pArQwodD6dKTJyqdvuaVuDN8zptJ4cLBoKtvXk6SZZGdjL7TRqUVzgxLy9LTfBc3985UGRivFg",
  "key10": "2xvH2h79HaGrmF5udZ4zLPnS4LCZRoFUd6cnrar892Yt1cGGK48yGDByBG2u1bLiqpr9sfxtBj7Sg6hQ9U1Nnhrt",
  "key11": "HatYZfbZP7GsyNMiRff3YJbZNxS9ZAz6C7a3v27xMcVzTZXFgFGojRt8v9LtFvkVw9Crh9ojP7JXPTb4zjTvdEF",
  "key12": "5vkDWpdLLUSHp4DyqRRBd9Wkg9tYooXr4PhKg4USa6E6wKESuF79571CdAxnmKokJv7J5rUrzDeVRt5gGis4D2Bc",
  "key13": "TLvKzQXXvjGmei8xWLN1DWPi3rPv7kU4oZA8jD3H5dSo8PULqRrCF7ELyS6ACZ5CS6rNHscCb8VZWiSxookKnfi",
  "key14": "4nFZYhYFA64hfYV36JL1xNdzGKaMimLkbtmCcxYJRrCDyxBYgRDVdi7t3xFMxnk8RdwED8nXTtgbJG71chq3NQTv",
  "key15": "64WfsDtM9tKRKi8Hg4DCpN4amD4jeiJLTTMTwTf4Unw8L2RDF4LP7Xop4cdQqvVNp6NaxyzscUEsEM3PAiVyUKfW",
  "key16": "21xUr113CREj2TweqrFkLT4MAhFL9C25KSyuscEmGbhLwRKPedvr36uNBtKELUg9W9gr2MYfD9dpCsgYbmEYre8Q",
  "key17": "5ZkAS3VoJNzpsg8jtDReUnUtDZ1RNi44QgtVtY9r6M38edqMaHbG4JfF3QGvrbUqmjRcCDNgCWjKkj34DL4ThwpN",
  "key18": "376uVbLGu1p6JDZErua6NjV7hYq5L5jGDgzqRBC8ABH6D6ZbriMLdRGThWmNpEvWxaeTBPxn1jGXw5J3DM58cxDx",
  "key19": "5pmzAQbUTZsKMhyWnNktS89QPf18Buqf1VFpAeuYRTgXjWoy5rexojhdnfUyCcwRmfpgyNfskccbEqMnAgQ5LRz1",
  "key20": "jnxLniznjAnkTM8KKBrYrbtGBEQoFS6YzQtELRYXrPRMenyZPjKiA875XUaN9zHdSpCRvnq5g9L8aYHReCAtpuU",
  "key21": "2RtWTsYhPy648WmruSPWbx4Y3dYZZ8g5D3jyf8G4ByBBYMzdJGAtoa5EoZjFWjKsFTiBu8f2ANMEAEJiDDUoXtzY",
  "key22": "4ZGS2HGxpkJNkfpzWSYHzMRwNzZ99on4BdjC79cB61VRfUBLXNiRecp2VAwE5xJx9dZxbLy89AfUtDWWcBKrR6YQ",
  "key23": "5sy2YCHD6wgzdhvaoJB9ozKtTCs1dWYQvLxUraWa4trEBYR8A315f6CWpUzJXASgKEHYo5N7QLfyZpy2NSy9MiC1",
  "key24": "4wX98maYTi5oaqpKHVSiMC4TGuNDvpdoYkMYRbpJLmXM9REeoK1zkvh8eKDKv1HqkMpXbvS1JYxh5D7XBk6qkVwr",
  "key25": "22Z8VuMyr5iahkVaP1f6N2uKFGHzaw3reXUniNF2ErJNPskPYP4pCziR9S6mwQzRQmZcEa1VBDqmHMSxqVPE1L9u"
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
