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
    "55nJepw9vvkMLi6KwumfLoAMsPkcvUsXB1jottmh54CJD3XSpzK4FVcCU9zEcnbqmVt9b57e64XVA5XndZyy1Mxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aohbK9NqmHVJS9bfBkDpTw5jWyhckrg8ezFUggeJsvzhvmc8MuWNg9PraLKa8CKVtLk8PvXjQM4Z5V54cBmG2aw",
  "key1": "2cwX5VGvjGxxTxN73Re2WBfuScfzQTfPKDvuh2aMftCyfa8GnFD1Q531AxhfeYKqgdmgrarepAHbup1iBrPajoCh",
  "key2": "wtDgTSadTH1DKZrPgQ13di71Pqn4UbtMhbTUQWZSeFC93NCKfFKnz98CjMTQj6QAkpL9Gw2XhquZnQEabQXPMhY",
  "key3": "2uqWqoqqG8wZP873v1i5Z7CCoSqrDxsfxKEDxrn3RuatAwm4SvuBTF8uoDk6hqcWcx4gjNgtKA4tqvdruZy9To4k",
  "key4": "42WAFUPtaXw4s4dTR2VWjHhbrg8D7qmAeUa9SMTyycq554o5XJhjuH1dKFKryfZGSedcMmxBpNZ8ecmMf6bWkQr9",
  "key5": "4gL92y2yBqyogMRnMz5eL9tufGazSgQyJ47GRYZMWaDfLGMHzAcvSDTfnMBfvD5F7dpQjMJ4WmNkoZYA1McjPHB9",
  "key6": "5aWKYgJMFx8AVfH2CqqJCqQ99jnQcgsgjkztQJa2Gk8LVPKcBndjrXKFX2G3RmozzdYAhkphHL8Qt8bE5x53dLJT",
  "key7": "3ik5DEXJbFqYUjbZRezfxpRWWqEtHxUQtDWJgC5E1DJw27yU9usbzJ7TQ8onATnJLWrxjY5HxsSHbEoojUepwD8R",
  "key8": "3HTiFSqHhpbCheN2YqdWEHRhnZUE36xvr2Eghkj19FkTQH99mmn7Y3dnwhMMvWVgsXDsq1BLGTDt47AsQbjAANgZ",
  "key9": "r4Wo7JLomoaVfJ3ZTYLCMevMMqPoas1pQLCUuuJfM19yRMmQY5n1246S25dNHK6bEPR1NuCgG77fow5EqGSStRj",
  "key10": "5YeKZEYqxszCb8GjXz9EWFmSLnV4Ez9BqfmGTJJdQBWCVZ43XjRL5yNKR5uosRHiSAyZj8UUzndmLFpr28nT3r1x",
  "key11": "4zDYNxyZsf9QieVBWiDFmrRZT7XMkYNsH7qi6ZvUigMoEr362deQtVzjMw7ReVogWUPWKzPxNor6U5LXbhKrVk7V",
  "key12": "eXke6i1NW2AsXnpNxsF9g9q47FXNbV7eGks5mZtxHBTR6LEkxWuE4AjKXpJdX3vN3vXogWGinkZUVJ4Wg2LQXfw",
  "key13": "z3FETKBpN5tUMWdfDjY8fhc4zX9snNNzw3aSxzjR1htKtNyJ2D1MRQ8ghzjzfRwV8Ccqe7KraZzwiRvogp5eKhB",
  "key14": "4FhFmWi6QqUkCoTBPDYEZeu1XachduQJHbKxKS1J1imYsH4AzqZ6WcDwTLT8oVfhXKu6o87p6YbBaoEjxevmpNTE",
  "key15": "59RAnyRjRBD7t4jkvYu93jQjtuwnbXVAQeoidDTTLWuE5izbTLwJQfiPtooAK8UxUepi7XQ6qFgHQWEe8XHnNGSa",
  "key16": "5oBQyQixuA8DHnErTP1yjjUF4ACLheduptN16hktj4Nzb3UgURXDvTbNxmMsYee3aS5DDmw1hDDF3H8HvndRKQXM",
  "key17": "2CHsriLdBpg5NqLtXvC12x9rLUmre9PDjBqiEHirZdTNKnxCWKsCjSJNdYWLUgJDhEC2PyothuDwNXC9VotxbSgE",
  "key18": "2mCGKVNYohQziLyGTu5EJxYozis3GiDNBZqoqcnN8oFyZGo1KBrpnpFf2ziYvk2gGvbvsCXUjMXBWNmLHZMg77o2",
  "key19": "4HiT9AGy1h4Crr78hi3ukLX6Njoc5ptgtVJMW2vFBcqB72YQAXqDmKzrLmZd43aCfDGAqs1KAax8keCAv63Ny8LD",
  "key20": "5oNLYsfcHGADx13uNyPbHdUJNkZtwiZhGbvcMwyrEye236De7S53QrEiF5srso6JxrPxjv3ppDKw2RVmj8823iHL",
  "key21": "4qndzi9xPp5YkKRj12TQ1prgQndyMs8Ti8Hnz6W8J661p532F8VjKwWnoLh9P8AF9GTsk8UhWdcq9x3a3yrhAXBE",
  "key22": "2qUbP1khMijFLPdVhMDNpfChUvsuhp6N3kF8XpgJYF7SA4wYsZc6mSMdMA4mpu9UPmjLeiKBCsaM58geuooF6txf",
  "key23": "3TQAzprtV8qtJ9ttoT8FSz3cqdX6peT5vu8e96pP2vbfgkfWu6PpwdcP2Yhb8SPPGMwZ72nc5cveSSBeNNxECBjs",
  "key24": "5SoLoRA2QzPf6U9GE1v9g2ZnCNBtMPBQdw7HG5mVrxyjGUv8Qwtu1HvUW2PVzWd1wqaKA5TXuHsEvQXhAWQdHvtV",
  "key25": "4zwGtE7wPzTH7ddrqbe7MbWGkqEgD6S73MPFpTsB4x5ouNGgr5sFPyznEdgZ7dYijs9EwLrrP2QvtYLWE3gvo4uA",
  "key26": "Fw3eJrxaX3z3uZNmonhmeycbeU8Knr2RGb4Ptokz6Jr5L83FgtE61bKJwWqcsdzvUYXgtz3CujVSJgoyJSABHQv"
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
