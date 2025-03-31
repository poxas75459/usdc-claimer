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
    "5Zk8zfarXtZc1K5NZkZva5C11pc5bXd9mCLExc2YRYPvZPkaq9dbFJCRQwWtDSr3jNX5zVs7tsFNvKzvvoPAAnvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nse9pirrgkjsn5FkXM5YpvSTx556jVeYibqyCNoRqED6rhC73RGRrrvfPw3hrwz2MH2vMGLPTGRyCycrRWuWn21",
  "key1": "3pn3vnXrZ5hLoaDHsk4yox7a23KupAHV1PjQnzEXrEkTwv5cSUiZPbhnFVU5bR714bN9fNGbd2WFrqEAxYxfdaFn",
  "key2": "3V4jwC1uy1TNSKenaC37iEwWePYZnWRYmRgDxrpaiy5T31KmfwcvGzJBS2AvPWuur4RRyAQLe1Nr99Wd3ZgbVxYC",
  "key3": "3EFVWYegDRDMxXoqzfPLWQwVQv1WJS8kc1ZyQKf9Qc8iypw7CfbFkbxQsffYNUqDnJkto7sD7xoj2J3YxEYhd6w4",
  "key4": "2vBGTLprP5nQhRdxwWf7YwBxUzE3K2wv5v5ZvaYXcuzK86qoT7yJdXy8aJLF6hcqnNqMVbpggUmywusbWKLPaQfn",
  "key5": "5Mi5HHQGVXGhPKXj5QWDHN4s7M9oWEinRmg4sFak1sPc9944j6BuK5jJsesatSY6wVZJErADrX1kAtNYrWUdxK9C",
  "key6": "YcD1uBymVZ3AcrTJVZpJtYh9VBJyNazAfqZRTd9esL3mTFevGRkFkTBb6zHTHB91Bkonp4rHjyzPe5vt9KpST1S",
  "key7": "5jwRNXtTYt7wRwhtw7kVrPDzppDKUM3BoVkfFzVYvVzNJJwH5UCN6HF2bf6q46nWKoK2fvjPB3oWvHzdc8j1m4WL",
  "key8": "4zXvkYToSJRj6f7v595Zox24S33tQ8mxmfsrvwKEeF1o5Ps9CEDYwnS3AnYVUys31CpXAhgnob2Nz7p9NUJ2RHTg",
  "key9": "ZC4hoPysFAYtCZWevTgmNY39h17P5qpPZytcVqMWXSZrJYU5dv3CsRwsRzVbtmto2GCWouGsTFPCQ52HoLhrHH8",
  "key10": "4cWoQF4xnUs4ctvKm7bLspk6UFr79Q3d8nMZk5EhsMCLuFuXe8U3SJKpRzFzUENRMiFuB25pne2HArKn55rHva3L",
  "key11": "47uTZjQGe4wxa4H4nNdKT4YfNEXozwRvsvzti2HSNkQzTZRN4oT5K69NcEYajsG5YYrC9wq65YdiQMv5Pc6z7bkg",
  "key12": "Qw5iBfZm3hnvpdq727HhaY71aLSAw4tUwR9JrYjhwz5ziQXEsPjR4Ggez4SrqfArcZEa2Xky9TSp3uaAmQaejxo",
  "key13": "49hUBQTuet6g6g8do5u55CWLsbYbNz6bcpcUZUvvCnY2n7YUr9deDLtuTfsmcednWgKFsNWu9RTLfzWENR4PMTgJ",
  "key14": "3PoJAXeEp6H9K8X8PAdyBoXkT6ZNgQDUysdbGHKX9WyboJLJPxe2oAA1JbMHsiKzesRBvJXGZAaq9CSH3HpG91zz",
  "key15": "24eBggwrfvsSzbzhhaNsXvFAwPkgZUGEswZjqdrpeBvj5p994abQAK8oZ6soFRKXv3dPWAhgprESmhhM2LRtqEhd",
  "key16": "RA1fZ7VseMQLtwfs6oXQ6wo5KKJjkPuesb1sBiuZv21RvXSYfQfzTjmDM1fdS47prF1CTb3Xbfkqrnj5R5VaGJV",
  "key17": "4FSciHf3FnWr1ja1k6fUwgE33tmD3LHUHC1vkhYu14GnMf1KPS2WJFktVhtffbiF2J5eYajTJxEqkWE7vRNate5x",
  "key18": "4PPm4rNYY4ffz4Y5ZNpdhrdX7vTtBRZfqmf4bon4Zf4BP1maq44M7qjPtU7Bxn3ZrD7X1QcvVwNbYms12jW5HJnr",
  "key19": "x6AX4v4hVfDtPGNB36uqhXrph7b8g4iqMNKBa5RqbyhQZnZ1cJyWKs3ssMG1NexMwKcNYcwVKxQ8beegMdx2fWq",
  "key20": "5pcSrocgbEeQY7vH2ms8gKf2GCgJghD9vAnaEZMuGM8Ed1yeMf6qoE7xz6krxHrQ5eEJyPbQWgVLQhgSV8qheFfp",
  "key21": "4CF9PvziZv7oCFBxLz14Xh4TGN3d4JKgDRKaa82FEDcdHVs8krb8anoqZBRxVVaHJEkwKg2YT5aS6gApgUyPpssH",
  "key22": "UUwNeVjimt1U2eJfbMQ9SK8M2ZRQ6yhnHvhEPMTH4qy3PVHn41ZJzMpr3RmYgLDS2FuxRUZDjLevT1KZbG3avdG",
  "key23": "5BaWw1dg8cw7sDLHc3reEgmy52CW9h8NVrx5F2GA68ghZF3WBgu6uAt4DSYgHcVyi7T36T5xjoWqS48NYG334X3w",
  "key24": "24FFYgqGcDmoXKpKXzYNGGQBKbSKWMfXSwLi88DrnKLZSqtRirF8JNEFLjrsckXjdAPukGSP3gjJpxGRkPv1oUUL",
  "key25": "5Aj5y8ge9chcfNHdiTmDb5jJfNpYgJGogGMMChmDhcYA1UExpzYdbGuALCRRzSB7VWb2FyAMK1zedFhBPQLHThno",
  "key26": "usNE2qcSR8yfQyszoGQmS4MW5CaJRfeNjtL8nCcsiMNSdvxzfZAWbowdwggeHhYCMSPnab2gMzXjqVsF9u582rM",
  "key27": "5DK1XQ83ADkpb8d9QmQCRa5NurTUyv6f1D8rE1u4jeBfCadCFyby4GLeReK9CF1kMTQrKGm3EHAKhuFGmodMRDQU"
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
