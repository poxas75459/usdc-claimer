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
    "3yuXwCyueXKXbBZ3HsHenHB4fesc9LSMo4Pg92HJYa9JGqivwG7bY6QgrmdseSCFiWrtTEcWZsLSNraKUcQ9UeYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66scPJRLrtAXQ4QafC31e9S1Czc4yiYKU8aptEi5BsDLUmdocLP8oRJ3rKxsNCj4jtdTJMXqWFV65peN3f4tdQ8e",
  "key1": "2avdxUbBH3mj8cyAGHB9FVH9dSbQr3XpPN15f8vQkyuhvefGr1e9Rc6TN1oE8oWd9jdVozmSZ4aVzvEPBXV4MFMa",
  "key2": "4b6iADQBPyzi2mmibRDuLDBozX83iQPkwEuUBDs8YCV4qjnf3aGq8UrXmX1CDNUphM71FiqsvYFogyZRyKFdqhiT",
  "key3": "3YTg2VUqVz8P8K1x3u7eMKW4PhHiHFxL4GPH8mFL6fo6QdCYcaqDcDwh7HKqjR8gAqrEvFT28TJBJrKmf1NKFMb",
  "key4": "42m51aHvkh2KSiCmhRbF2a9BgrujHf4j1ZYRzXu2EXeyT3at6wNupK66Qd3reMCqxZsKh8pjD8KnuTMtKKxfCP74",
  "key5": "5XQurDyFN4d8Y5REpBTsqEFCFN9vArWwQy8VRndsaY5Ex55NMtWXJUzdocbakFcU9eWgXxPLHatFGBw6gX9QVzdn",
  "key6": "2GXZkguCgErQyoz2qYcwVQdgSARhG33fNBXraK3KxZeUwBRa6rkzJpR9rY9PBjzGzGi4CnSbx1hEZ3qZajSEU72g",
  "key7": "4NkWHdpSEwZbNjY4JKUQjQrLde9DJEiMHPRAQXaQQxoyQQY2qWBnhLR8AWv7konQk7AmVoseHaCk4VpFF7MVVgiZ",
  "key8": "64MyRUoEwTyb9Dx1jX3dtcGET2ywQxxw2jx2WkWtyeRmRffkqhj6RFfEBxV7rciXhVAFx1c1HEpfwLbTQiikLBT",
  "key9": "5cCyfQTvCiwZCwXB2tPw2xrEPkq2m5P7sa5esJdwfVdJDQSQfCrWwwTTMwKs7TA4rDeztiZRCrhPCUn3xmkTVMz6",
  "key10": "2XZF4Aum8fEbhaps46zmRgdamvfi5CzPuoLPiaA7UQYkmxTovVCDJx3nn3widqRSYwYbFSrJHfys4hxdaw91qa7D",
  "key11": "2xDibXesG2gM61iaXPNSwsqiQuaY6Dah6szVub53VnGoHZACL3DB3MYVftjzpAvHMkL8EVBcZpCkP1fRk9pgKjXv",
  "key12": "5q7LfK9oFqSdHPUHuCZ6rjGs7hrDDjGhMZb2QtMyJ7NYt4TKTVC8CtZCMhMr7EA46FXWxD9c4nGspZiPi5GidBkT",
  "key13": "2cZEoBTSkEEqMToXsMAmDFE9uym7Nh1nPX36GLeiE3WQzbPSLDpqnJvwxnobuHTH4wqPCmqwCrefqf1Q4P3TJ2Sg",
  "key14": "655qWASXLBzsX4XAKKQRuBQJV7owahQqSyBAkuD4PvmdaEn9pBJC8qN3eLDUiBhY6J8F2X358yCAU3z4nxMZ79Cx",
  "key15": "3dEvv4FKiz6Goyop8iymekaH9ufNQm1YRXn4hQ1SC41KBBgfx3hS2bEeBKznoSSX1cCdkwXoshf7x86FW6c5dg6J",
  "key16": "ox1wLZ1Y9TgF27MT8g95f6qtQAj4QGps5gd8XKeWL9XcuRyhitBb9ApwTiGhypshXe8FP1VojiLsiV7SCUTSQx6",
  "key17": "k3bMuvZRvtHYicpMWM93meuuKEonbwWgqj9xtc3bUY24tCoBprZ2KYTFyqJYqvsgq4LbnqqK8jVmgD3PzaDiZy2",
  "key18": "2gnJJ9eW712Rbi4ifdyyi9vHgbuG2BwbEse1xjGmTJNSPRMCrBSykm1tNQHXaAyeVLn3U84kfUgDYUwzE7vuiAXo",
  "key19": "4Jy4f6392SHGqQABwrLBwnj5y9G4nnvBLkEccJWimzWoKhvEvUPuCzjFiQJi86McMK9Ksto25nAAtr4irZR3PQiZ",
  "key20": "4npVrTsqFi3F9QVNKPisnSJuc1gLcWdCo3EC1K69MzTzLDt48fRXaFqCKSjSJMQY5YHUakQQDrqdhGchnUM2zfdH",
  "key21": "3qAUnX65binyMTS9nynipmnUpXnFJmRyodWKFfTZqhMZGysuN5sBqqqJWagksUGRyKfmYgAwEZhzfLNrccmdXym3",
  "key22": "K4i1wckx91eMyZmhTgiLFVKdZsmE8JUzsShKs7nUoAWcpkqU9qciWoHA9bGEqfEe9dc24E6mAQN5Hp4GMyuiUP3",
  "key23": "4C27grt86iCxST55NQeTb7sxed218y14LVWrY7CVnrMFqPnBLeqcjm1fz548Jkr1ruYUE4shr8J6tzuLfKHFY8qU",
  "key24": "3nwPyScA2B8RZW2v5J7QySDoTPorEX1Gy1A6Jq4gj9LTsHCW7yf8XTYGef1dkkxkQYjKfNNz181CjRjcvnL4moKp",
  "key25": "wYuCH9WD7nh1awALeGdYvQQCk2utRgSTU4JHMgprqU89ZSXbhLkZweZgNJzCSf7tgc4qtBb3n4jPEB2voixZ44H",
  "key26": "48mhqLfimULwdS9CSXfU6v7pFr7BtwckkpcQYq54m64GBXVuupwL9XXwgzSAS7G1LgTsEMzeeqEtKkT8nDFRj2E7",
  "key27": "w8bfufAUTXCZGHnEjvWpUEpfRYFWXvrUkQsaFVQih6NV2NLXnePa7hb74meP7Ruf2PG7U2kYBrAZanshfEEiTM1",
  "key28": "59FqXawzypbdSFEetAcLKsqxZz7cuUuSibXdi9dcLdCVZBtnLP7b6QzAfjFD4wVdwdiJ4o2XhUpofcey4uU24YTF",
  "key29": "m9BL3L6hKdhF5Cg4azuYKrmG8JDchfErozKhhJUcFwD8u64JVuhESiM9R7YFaWJNNjAq43JN3JJ4ZCuavpq7xpP",
  "key30": "2RjaWunaWeQFXoGjjKavRvjruCWGBpskjF3iaJFKJ6nhrz7L5yQV5tR5DRNBrKK2ETjno4HnnGsndNEeEXtk7rGs",
  "key31": "5X6RmLirJTTG7JqguWSojVNuanMhjgwhZobtQtawV6dzMZvwSpv6hftaiAcEdJsWNrfsDYXkkjXSikRer3niEoAk",
  "key32": "3eqT1ZgZ2YFcjMFVKqiHaok5EZH4hTTfJHeTDieL9E8NN9ZhXpVLWofjEM4krkzRHZsBX1qW6PVDUL7hS7eEe278",
  "key33": "3SW3JTMBPwy2Es8N1H3r4uMMuuETdr2aTdqdfdAmGWCu55mjsYknRCii3gHwbagd5WqnF3bpe8uZJnRZV66aq1NC",
  "key34": "4i2ikWKv4ME4KHqKomwiXeMRwQYNHiwW8DU655o7CWMCbwhhbTWraJYYfYb6B59Ey5eht9Wc396jmninYb6fSAPu"
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
