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
    "DKZEUK6xrAr3Jxkbj8wqbjZSEXe5j26biQuvhhaiJ1sXC9iMZfchmepZmdEKUypnhXf8axLK21veEJAg4brNaZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JH1DPUawVzrQFnTLS2TND3Kq3RU94k2xP8pDJEGNu3wqNKRShWCyAKaTvC1rfsuP9r5yAJJ7R8BQEA2crxzo9mY",
  "key1": "3w3yGgZTbnWd9MFzEqS3TMMSUzTLeAjAq6Sc8yArksUjPQa4ZW8PcUtn33bCG8QVVMo77BXcPFvaQcJdacctCzz4",
  "key2": "42kPrQnnFD9R5SgARo8xQByufAZ8scgqHMf5prbzBW7oTHkERmuP7MjKPPzXtmZJ9g7LP5aQ5NW83tBvyGWWMqWh",
  "key3": "4cZho3ZMYr6txakkGnP5mZuzg9RKPf4FRnR298qAerfTNVXXxPyVU8HKuCgvzx9UrgNiejdsH4DTensqHB9aqpbQ",
  "key4": "2jju5CfgqCHhg8Zs5cqVPa1SiaZo4BkRuiFA5QyL4ZRvETEDmiSF4CmCSB2wvtpYhxywDd8JUxvjRgGqKr6CjPwN",
  "key5": "2iVSj53fBQHQ2uhyvFZhMsN8MoKySLdhLJnTBLXXWNmdtd7wB51ffetqQENLJgdjpfxun2GTwXC2EuFBTnL9n71R",
  "key6": "g7tcY9FoNh2kiSeM8r6UK3y6LkUVobMjLHMzMLJFQPik8sjRBhXc7GM5tYVY8qPcari6JvJC4Bek62Zm2zUwFyc",
  "key7": "vjdDCCeUm8NAnp9i9DmwxhQrEP67cm1YgZXjvTb7hBwUszM9Lf2AjuSQxoLK5mzpqfGy2A2HyPtMxtBDAFo5q2w",
  "key8": "XqUxF4TzWGUWEJwLqFrQYuExrkzzHkXH2Vt6xLJ8ymxUWsieH3gGb3CgBEUQUtv9CDf7ZUBKK4PfJyuemNHvp34",
  "key9": "5nRAXdEpWBi36Y4Z5SYmY2raZdLPmLqYJZsba8YxD5zg2Hd1qM5w1y7rDFzZAYikji1ZqCcGUWFU6X3HEJdr2Upk",
  "key10": "3NUyAFcAEzfVERiyVyRS4fNdZNy4TNYre2aVYZcVx46fwiMYuQtKbXxbG75Eup3Rgev4XpdvBgfP8YwMe85v5vG",
  "key11": "2r3oFDsCnjxgcQjgaxwTHuFMy53S5rkYnAqzNQiGx91tqQiB9H5vhmGAdoFyWuR9DqpsHXzVEJBip7eGEV6xwiJP",
  "key12": "334th3NSoNgZjn6Z1bfUFKkonm19giMjYRTyn2ioJ3A3paWpwuqUq8rYcqX3YcgzF13Uz9WmtsDFQQ7WV3LMvVMf",
  "key13": "5wsRXGn3XqhaNimDbpWhY57p14ZyBpSCyfDYDYS8Uu1DpmjJdLSekQ1hQ97Nykoju41FcDBuKntUMkT2cNyqz3d9",
  "key14": "5xL7ZLUeqYstcde3rwphYd2yCdeACnkHxrJHykXbofmdmitC3vYaQikDjgMqTHhiq918qi8ddEuUoXP6jWstaP2v",
  "key15": "5ssVWouraPWvrfYsDe2zov31Rk2kUa6dUtTyiTLpLZGd9ya4YHivdFyB1ovkGT1ZRsDTdE42rChE5H9pA4ofgEiR",
  "key16": "21XfRPbQsKGYe37nBc9GXaLwu4Lxi5HYzEVQN1qWn8aPYaPe7rETB8vtSk6WQajdW6zj3icF5gDJVLQVzDgg9QVq",
  "key17": "5Ctoojpg1qXbLeq6pZww8oThAnThkBC2qr5Rq6tojsd4L9zHDjbD7NrPx8VsJp9s7FQx6i6p1k3aito9hrTUVxqs",
  "key18": "3UoHEssY8r38ewgMoKEPj4XuxZDBEaDG94zjzNTo28advCWCm3Z7JFTCxt6Hs6cz4sadZ1r2KZxr4mENd1z5hCsS",
  "key19": "yFZaWoCYhW621cNXqDUdbw3a4KEQfMSwmTXtS8vwaWPSbxUN6qikBHvynxCEbLeD3DKp8twzEn6X97xdjkumdwY",
  "key20": "2V4NvgwZooPNrRkgfeLx1iZEi9EauJJG6UJGmRvAPwVFTzwjrkPrWxura7Qay39yQrjHJpaSQ1WJjuM74d3U96c",
  "key21": "NCgqY5e6BurFXvETZ3Mu94i7rWk8MvTrKi8btXHh625nbgsdvZhdbTaqj7YR1X3qXrLXyisPu5skDWTudjfViNZ",
  "key22": "59w5UVUYWjH1ydjNjPfjDas4Pn4MZBm36tLTvAXBDHrFzv946cRyYBFxxJp6beBd11QEFRKXHCqkdCSrTNu5n8kN",
  "key23": "2qah1oBexBAVuSZYdx1xHZSi4CuHD37wHaGsSWAYK9PwVBP6odQeqN7indraUwj2GfDpwhZT98JJvXSt1QTbyPjq",
  "key24": "2MNCdh71gajxPq2Y5xzxibKPTsNb6pcLymq7U3xLgA4HfxUYFmmHBD2FBXBFH2u2gx9xdBWyBHEA4bzWS72A2tb8",
  "key25": "34958UvoTw3NYN5b8NwwTv5NQU1KyK5gm7RPkaWzjjKuSc4q384XyifWJtgvXaGEXEaEKNbd4jbgzqc3UUiB5QeP",
  "key26": "z3tMouCE5BVfvQR5N5RULSch8jagjR81s6FZTtUHbFkRDxV3igm7qLKzAL47NXzvcAeSCr42JkE2wEYfhMNL6Ly",
  "key27": "2xiGM9CQk57NEPCnbZ72MZYpGkXZMRVLdRdt3ZiB5QcV7FLUGmdHxvbqQ7L3PgwW33yCgUsj1cHyMtvx8pe9xaSz",
  "key28": "5XCxuQUAunJBMbAhYM4ATDgAy81rtPTpAAm5r7CP8b1L7m3eWsiCYUFzQKeAeXYqPcGuArqBRq98SBLDfzLjeuLM",
  "key29": "5sS89fpEzuLoZchpjUVJm6L6izJNWSJ2XPBhKq2kEHsxG7JmNjbpr3pPQyqPZX7Tog4BgVEcvMyaX7oMMJjC2G4E",
  "key30": "66q5RTrX2Dj5gWQyDbUZdPmVY6iGDd7DnZJ38gb2bsnUMRXdz2VuLZo2mfjVyg9Ah2n1uudSqzChawZui1ZDoo7E"
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
