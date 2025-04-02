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
    "3xG6pJ3zxfXmvNpfHRRBhiRhAmTWa5iMqHeuVz5AdKrZds1bjwHAJuqXbD7vUn7cFDvQkLbYR9akZCVgZV3gVTgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sM2j9Ejpz5M7i2wsZiiHCAbybbpVvnjEjzgyDzSeAyn11SzzpiFwtUeXzNgA2DAPVvosS3cLwrhXf5byfJf5USy",
  "key1": "4VqX3hVQ1gCW2fbsh5XXJNjiafqs2XxraCY8mNKT4CFdXUyuanB3wa3V8VaitVSXndJvp647iDDh5psgdStubgEL",
  "key2": "5rxZY8zJx2NU4qf7MDMtasuyq2mDZyGGmowRbmVtYvfNjfpNDDiZpsywY77t6BwQqxn1LmbP4f6hukXqDbn22ffP",
  "key3": "2TMyhAEyK9MpzPCYPzNSSrbXrBkd4X6AuTxxYaY9agbY5mwiSnouxeMbQ8z4CNkbVAc1VK68GXMSjJz88PXKPWLQ",
  "key4": "5Dt6d3m4xX3SQV1D4PQsiU49xd5dpa6n8h4Ukmxknmqoy6ERodbf8ZLvj9Vvys8kXiT85c574YdjyU7HTgHuTY9T",
  "key5": "4zqJjmwFSCbE1noQD8AVKUQ57Mkrw2B21hyPdBeUHDeqi5agqrN5zqXZmQvo5XaaGsV6Wd4ZSTEy8XxfJRGEA3gr",
  "key6": "vaKy9jKUhwGr6ztoyV47fyJ7YgjG8KwnauxsKsXGxWhtE5vSaX2XnhF7XrjwPtp9Mt9YhZyyqevoqHYMJ8HMNjk",
  "key7": "5taACDd5UebvMCVSQ3Hs7oEVgefwzRC8dA5MT9QUzogMmDVMYzLakt9kwoBs4SAf6CgXKhFnUTAkVNQgRAPiSHZM",
  "key8": "4tkUFiAQdSDgVERhpffho3b6Z6qQPogFJG17BWXezGXGkr11LTohzsaYr1hR337cWJJKPnNbvMUNYCdwgkyozbfK",
  "key9": "59bR6SZshqHsP9ayA5VNs6eXM9hzbfkyXcMNaxFHMJWitgeYjyxQwCb12RwyomFURkA7PKruDDRMkqz2CYxUz8FW",
  "key10": "62FnMa1YuwvYizfz3ER966FVqoJThD6W8uqkVKG2WUqBhHjgq8EabeiEG3MRNoYiKmCw4pxEaZCmQVdNgb5coAgK",
  "key11": "4XoT7SXPFZuDYshjPS5ExuFMbixCVAPhKBt7WeyM8dBk86TErbN9CsCtBqU3cTbkjVFKK91QqPBhZWSJKk8UeZqA",
  "key12": "4JsV9fQPCbVYqX5DUNzeEVwwvHUABzf7v83hxqt25VUsM2ejFNBbcVP63bPU169M8ZJZiSZJgDXbcCwPQHZbedDc",
  "key13": "4hKnwQ4vcTZg8LM6gD3EWXEca5k9iaAHw8zexeEdDBTbeqvWGBvGLZZ6cwbtPMkwMsdnvshZiC7HY1DZ9VLxVfpu",
  "key14": "2hapRVU49VCSL5iu6m3PGALoAqD42jS4nUZfTfEUhJdBBdJcQNB9FcRUtiwNs2Y8TV8oucQfMn2Z92QkABJBBDfW",
  "key15": "EXH2YsJyPdWmX8FtMwpZr7FtQLSi6Cch8XBim9h5wEXuQtMG9fBQxoAZZokscEDKUqFRVzWjGVJTA52QtUNFwBe",
  "key16": "4nJsbDPgqR5pWGdG8fkJvXTb7KHvxNtcjRhQakxvFw6wfmg16AuXYBJds7PXcF38npmdiUgbo5dmwxnK9u4Uy4vn",
  "key17": "2NM3fNir7NAuGxn5JdgATKpUDqyZFMTA6LmiFfF9yyQFEVJiE4efEv8odaMgkPoboVBqYZTdjHEur36s66SoMfVw",
  "key18": "39opawzEGJa7FLWAd6Jdtp1BPtAEGZZtmTgacCPikcvautapu1GZ7L5CbRxAXCpV2L7qV9XjLp9P3yRYyhiWTKWd",
  "key19": "57Jid9uEHTPkoykpBV7DdB1QMW7DtZ3QDkjhFjEn9XaH77tPezajfKpuySWfUGYBvFbysqZwSFmhcnjSC9M7xT6T",
  "key20": "4SXZc5YX4UWG1Xa5L9gCXkoActSTzj55yfM2J8bhW4Dqbue1e3sj5WdjW3Vvu3s12CHY5v4LSPLbnExQ3gyw4ipA",
  "key21": "56pSnAg3HRM2aX58PUpQK8DWnTgaaDx3pzoWb9BzZKC9VXge3Je3Pp3ZV7f2gdKgozewRzL1SJw8MNnzh8ezFXxC",
  "key22": "3rT7s1jCvsLaa1hF43ikxZSo33mCVZ5XRLiSAsunyoq5wd9gBHb9GrerGe67iPWN3j3roKojLVoj8CXQRTKrKGoX",
  "key23": "2s7n6cwh4hMnFKBXSaqwQQJgzwXtbqNqoCTbJ2m2dtjcYS89qVsCnyhtGqD1dcPdk2W68Xo9qaSxzcz3h1buPxHk",
  "key24": "FesamzCL82RCx4DkchJT1D6ARvJ5p4ryqjtMTxQjfurTjc4eqaHVzo3oR26BgKA1iGMfTqbxQSmp7Za2SsQQ4pG",
  "key25": "3Sj3cpNGkP6AoAXJidzh6BAtFhR5ap8JVHpDBkXiHqJ1ZpR1PeYwzoep35rXydfV1sLByeQ43qCk6PDbrtF2m4Ds",
  "key26": "3ch85nT4taAokn7xxvEDGh59SfAfXNpNFiwezsJKjPJNhCrx9w5XdKVZ3vopv8PNNVQbfWhZLF4ggkhxT2TCyuoo",
  "key27": "5Cjn3TPxkumos2a1tdFSJBQSoDmj7qSn3y2HUXbiyBv94nVsHxmHU2ThJqXPAzdEeNWjVaXikrfSB2vYhpCBYxp4"
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
