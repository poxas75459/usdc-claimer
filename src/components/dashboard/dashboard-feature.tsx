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
    "2oyx7eBSSsKqTkjzYwKZgLXidshBTZwACrYcdwQRsuD1iAkgyu16vMSRBrMkVFERjijZEmd7HK56Y8rNF9VZNWD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7XwcDPhxDYNCDAWEayr5S7JLuzHYDDP8CUbwfnzoAANhNPPoafPTNobJ7kKYdv8GACaMKqVE1BVUqi4mqmauXy",
  "key1": "9HwvXnZmRe1eq3Wbbd3atovE8M88mWUXMjj4n5WRCeyw382X2GyBZCztvk3cemTCmfwsuRPcxDgLXB1VRVsuakh",
  "key2": "bbQ441y8dQFGEhALjGTuN1MxT6d7codDgRHhbWofHc8XSHGuAiyBb3dPSZJvWmfAXNj2MngYbMgQQTbphjmkzha",
  "key3": "oD4SgVWcx6Tc2K5xjKFScT3zYJgL74ZzQsH1pxzg32aKqY9nkdd2rGJjWo5JJgoANhhuNeawa1xEoTFkRfepQAQ",
  "key4": "2sm76cWTibijq9tkSQXbUhXoxyvQavxrwWXtJDhTbtjnMwXaps6qbce1XkTg8vprMMKZqV6fLdAGSAxM2q1mSdEy",
  "key5": "4g8jgji6rD9UBPcftde9ngphk6CqCce1SPBWYEYNuyht6N9ULZB3cYBLD3W9QveRgwJmFkiQqKiQVHL3znvecq79",
  "key6": "3wZuw9jR8JnhxtMnF4pj4CztMnw5jPu3WtVy2eJJHrgxkMYL8ioCPsEjXJ1UTq8F3gnKR6G8XatQUe6AwyWs9zWX",
  "key7": "4yEuddr7W6WJp43FX4wSj3xvWhCavZNuBsZJSbBDLaUkWFxZs2tHRqYgNsqVYFhFPbmu46C6Bx5Ab2bK1zo25Jhn",
  "key8": "Vsdi31ZBbwNNpLHh4sHj2paiBGSSJiaTWhR45gg5E6oQ7fc91SNwQ1wv9xgYnP3MFYKQznRqMV69wgcsn8XmStV",
  "key9": "57ZJXdnqoKAPvskfY33cqX3WUadUSTUtUHAuzzmbgaXkUMpqWKt21REUfXgLwkeiweBnnQ3KMso9JXWucKR9jvqs",
  "key10": "TUdyXLhAqRLif55DBBqpaSF3feN5PMPUnDNFvs75jDJGUGYxdMwdtUXpd6mMqqbnAi2r9WKtNwRPF48g4rThrRS",
  "key11": "5We45fzEWZorx4Z8iSYFTsAn3nVfq4urd9ED6teB5LgaacQ64Xukn7enfF232C8zvooJRgrtgPYBEZGc13QbLfUS",
  "key12": "3LvkcXLBsaEjosHksNJZzWQovMtA5jebGivVkwaC8L7HS8zCKJbqZzzpkqEB7Vad3ik8R5GXXQLtoyWMhnfJw7qn",
  "key13": "63P4jDQqrSSeGUjuwciJtgz8StSY47B9aLqQVrixNPUG1Z7wKDQtPexC5MrdeYyj6o5SzefXfAZWaUXHzuZaVyxW",
  "key14": "3gv79TUx6cut2WfHS8raDC6fuLuEHRNrAXuVrsjYdaB32juTFtmQkgTDdS5FQ9ahtK9p4FZLMUApmNExYXxv2LZQ",
  "key15": "4orWwo5L4eA4EwAEwwWcsHvF6A9f8qdpYNEUsjoZwAXbLsDwrb72vrsMiBmANPyhSz9N8ougzYFhW7HzWPAF3e1Q",
  "key16": "5grQYTXkygaQvpqNXLumyvjKbn6DFXFYswoDca3VR6ujSUTrTQRUcMTUPU5TFYrY4EekD4mbjEDDre2FBMyWmAjJ",
  "key17": "f8TS8ec16zEggQRQxQhrgMHCC46T2LcnHAP8We2NvB4v44ARH5hPKrRVpCLdEuHYzQU45qQMARoY2oC9pPiz1uc",
  "key18": "4qnWZDm8QebuQLjNQc51LaAwPKqEqsj3EZF5VuZMtb3n1A7NqiFEJzMiAwq2z88joyJNepgvaW8USHxgwcSDMV6X",
  "key19": "566JwErzT2RLrzJ7iQNLA4wrUjKDy1PiyCrX1UYsCNe3KYQmk1hQ2AcNPXbncQ16y9WyK7q8xJxVK9ZsjPeahr8T",
  "key20": "3Y3td8eBtiTJgSS1SKGufb1Wv86jzcEFsJN4cppmDmdZpF2BDg4eJ3j3ZTLpz9ygwYcAUjqf1iDKREjFxa2sm9V4",
  "key21": "59YS6cBktqEk5oH1sK4Q3QqfoeFbLegra72DLh9JspdiYSPj6xTUcVpWBVnUn6UVXpXQFLKcxKt5RaLY6QT5GE8L",
  "key22": "4KyM6LapxnK7bQQ4FtBBmZgYn2d648wvm9nDJU8f31F3PHVLVwjh7FodZtZdKzGHm52JwF9FqYD2ekYgbuWaeoB2",
  "key23": "3ngY7aUUi9weiGXWeNGaP84USKPULrRGXcoB584q65ZSbpNZhDbUhYHLF5GfmxUaxoT1911C1vBs1nCEfW1Z8nhD",
  "key24": "kZYrjjvPdZmhz9bvMP9HAM2GBRMUSJuJ6dvJGShS1mUp8zx63SuHmYiBBxcsPzw8dBzjMFvLcnNtazsb8pbWW5z",
  "key25": "3ywGVpztu4CYtRwvBJJzSeeubUxtGG4Neub3xxkkZbpwzbihs72e1bNDLBXJKkzLQmhGtXEobc4vQ5EWSptsMP2T",
  "key26": "3puzMsMjXBcJVnq8QTK6XufzKGo1yFSH4iNmU9LmYTqBGeNTogrW2e6DvCcFe84nyssNHacw65gV9d1n7yPZ6vyK",
  "key27": "3mbDsKnyEZnsBQxW5CTSQVHsk3gMLRNPYDyMhzpkg8aFsmPvh85JtNb1xUTGWnPXjFBhedBx72YMPG4xnJXbK6T6",
  "key28": "4xn1tqwFb4tgcytg8XjneVscT8VPyPRCgFqB3ffiBkYRY6u8ctvEWjTgQSVdWbpjScAwt2LJxk1wMLnWp2W3B7ad",
  "key29": "3sHNa3Y3ELgocxD6emHAmvxkdtvW1sqTarFmgzqMtjTgxZaMCzgPxEkemkLkuGkK9YdxtNi17CVAWrKLCgJjVJXN",
  "key30": "4bTcdVnXv4Qaog7xVPSbsZYikRTdWywSuY7BiXrBzrkz68g8e7zoy8Gu1qKjkAhx9Cyf9ktPHLDP6mJc7GB8wBnM",
  "key31": "4AaeoaE7dpQfcs4DjiGg1Z9vdirM6mjLoJRmjTA8QKXuuMbojFaL9Rc9pzUR1JBFHpjDS5fDG9DygxW6rExAyXRH"
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
