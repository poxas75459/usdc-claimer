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
    "bypyhqnqjSqAM7qERteYyGFiVHQz4FtvcNppBo2g6a68phrGHxZxiMdz6Kv1UAN5rKh71HVDDrp73DAeBeWwfHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyjVfHGKEwwmwTdNLLo1LoMiFp1H4rYkaUzQyBVnYDEisgABR6bevyqfoN88iozJsLj6fXAsVw3bkSX5NhpE3kr",
  "key1": "FnJsiVs7GbG6TNsmMwNbpa9LDj4ViotnURBNWjcUSVi3gJhmK1J2vmZjuF5YBVY35iajTwCT6UWNmZUh5HVzsXM",
  "key2": "uCK7htYpbzHcfrs53a4jpSU19bseCgog4fPB1EyxeYjtsWQJZdodGRxZFngSyzwvkDkUKquW2AwdXcdy1p2Q9at",
  "key3": "66zAkQGmTThMZfhBZPkAXUduXCi1yUYcWWMLwJstf6db5pwbszKncgG2WiAZf2QPXiFpm3wSXVh5m6ADtoNUA991",
  "key4": "3yzwmuyDiVVpvd95p8JQDKrFPKXTn5NAd2fgMLXHgiadxz3w8DdSByQD8RmhaeR27SxDhpmnCh5E9wEYGk98hsNe",
  "key5": "5FN7bYoMhaVPTbhLuLxAS7tbsad5H3tarqmZC7EF8ife1KVxJ3AoR61MUdpdmMSG9fuoiLvYwe4mxBgnJoTWwh9X",
  "key6": "5a2GBJDbgF6FUyXJnnHVAA2CAZ5xxYuUD3YeUmoknDYvMzdv7U7hT8xo4wKxDZcNXTpWARDV7px1dCaxhRheB1bS",
  "key7": "3hDhqjAGddMYRLDY5JJajNidpRtJG9HxeM5oiwhDeQBMpuTUm15zijkmVuETWmZmPhpyUJV5j8Kn22jAq32s2HzS",
  "key8": "sSh4R8Lg357izAFqBVn9Y614YwjRh9bAqUmpRumm2DuKFZk5eAiGTi6QFknCHm3WfK9yFn1WhwGM5xQqh2tYgDH",
  "key9": "wbHxNjxmo2X7vWgyfF26NeK7pfTPjxvLj1tMEDssJR6JdyimLDKH2QnW6tvN9H4BU6qkhMPBqwaPGnTSmJJXvQU",
  "key10": "3tMZpBHENkfjep8C9Tnm3ceVKzsBGXcGmmf7BXbEo6Kv7qfh6Uymbj1H4jAjjuQ8dMwUPSSq4nKydmUQPjWZewaF",
  "key11": "2aTCTw2qWhEwgCvitHt9vR9tDARxmEcwZNbUGmVH4T74TtN3SNBnuEoJMsuuCxTZQy1k8AcB6g8CNpUxwR5sVP3K",
  "key12": "3dEv6j2rXRHVAmVYwjoCDohuYwgJCMntLMpSmPXoPAmjZmcAoYcJyJv4cWmLCrSemnkBtFeZi2eRYv9tedPr26SD",
  "key13": "4qyD33Gc8zRB1NDnEUs4BoFnmhBsJtmPsMnpQ2Vgxg48Cwbc87SGFERrg6e3JknSXXKzZkAMb2Lf6ZfmcKdXBHKi",
  "key14": "3irUtyr2Be5YeKzbHx4xM4cHyMEoH4LiLqoXvbR3w2afoHwr3fHTRq7WMufhUbQyyzRzoUZL3i6o77HyUbyDH4Mo",
  "key15": "2KugXXDHX8Jrxc4F1UAGZBToGxsjxeakTXuYZmrJ3mMCM2bsMzG2C42GoErvyS6EJfnSrpUuYcREwsyYNx9g4zJL",
  "key16": "4KRtr8YsE4i9B3LAvmnsNkzkrk22wCV3UFuEjeuqFwR1yMzcga5aE8udgnsmNoUPH4JtdnL6vKC86wUXLsunoJVP",
  "key17": "2ByX4g92qXvanCo88F335f216p6AQLNcGybJN4U5CegUc1JTAL18q1ZBqtbP6UkXERjRxiQbjhbTWtHsmg6JaqDV",
  "key18": "395rijKc5FBBUweGVQKpaAUSxCwRpC2XvNgNoBWSYS4ST2bgaX8Veccf9ZqDzBNS6HYVicxwBPpVarWgwBRehLuB",
  "key19": "2iQ7bf5RPLLpX29XQ1TYpzmj7EfZUPqRWN3pKEw5ncKDZfT2X8KBXSw4JrB9iPWkBaaSBeXbfXvig1uYSWkGwNaX",
  "key20": "1tJYasBXUvKNw7Gx5RwgAsHqYwEFeCBiKNUTBkdGLki2M1Bokc22RmgiDLKHWzxNTE1eEZFF3Xyw7rkD1M6hiqq",
  "key21": "5evAMtwbSeLGzM91H6xHwZptUGLzDT8vR2kxwjeRVd9ifBTfr1hnTrmpR1CaB9xX2L2Be6jNFY8SRMREbUUtWHfH",
  "key22": "3Wx4h7uahekXo9i792Rm4jiH23gVgG3MAjt3fLN5QPwvVkLmWe9bh4TvzkEScBrqfvwS45p6XKBV5FyKU5sgaujM",
  "key23": "5thYc8pPWbhUatb1BHZ3ouXbVdhnhGcHLqVGRAAWobjjAkfPeeyptUxS86JsLC5WHMQe8ZDxmEESVsyn7wHjsjJ3",
  "key24": "4SuXRnZAAXxjHtvyJ1mVwfM9q34s4zHpyTMBdwaFx6xmDcjHrFSc8cyoL99N6b57XkQyE8T31UhaqUKjjBsJEah5",
  "key25": "3F8MA4FcodiM2z3VYxEj1m2fvQHcYQ7LpxhkWs3PwnGnbdZ19TMATwctV3PAZJp4vRPXj5jLq5Hvg8pz8kJk8UMt",
  "key26": "4UiDrr2FQYMxoijQpA4WNY6LjVccLqoW4SzUZ16hdRYJMRmD7Py3m1E6cja4KFDMxgMyNqt9aEYBE35kt9TkRfQC"
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
