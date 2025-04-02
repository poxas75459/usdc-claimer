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
    "3JcHmzT4TvytwbBVQiKHpZF3wecKkWTzcvGFxqz3JkWQQAPpqjeRpVQPXgRYciXv5bQFmjLngYtbDKaZNy1gkNTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPxPgUrEHVJT2pdvV9t9Xrjao1RJobmj1ofKRZXE8kqP7vkwcnQ2bwiAGLvHR6Eofw6KjLGHfvaU8RxXqeoMehT",
  "key1": "2ZcFkEWWAXmXm8AhFHQdnYKfDLF4kZrapAK2aps46gdiZcMvkWV1i2BVre4jAersedDhBNZqaPphmsGHT7Rxifui",
  "key2": "Z6wNkWPRq8JMAZWydS9KVFhKquXZeEM4M4fUqDzWCiY74Nq6nrFjFMUWHfNpPfShgi1Mt2f12jkWxp8tz4zx7yw",
  "key3": "29esZyvcxEEuphwzk9zrfjQTctypcPtXBRRvqCNybWwfhdFD5XR75NVaB8Q2n8nHESrynVdh4TU9w4LpR97VrH2m",
  "key4": "4QepFckN3VzVzd8pfZezsDQRXEfQ8hcpRygFMxn9Hzp4Lh1idVe4j4KydMwsbix5R8oF7AbkcHrDJzsQzWw1qmtP",
  "key5": "2n84HRi9PdpmakTCJvjKkKxp8R7yzbEH4XxPd3uFpA1btUBdMZWdcRjv5REefc7jvAVdnR1EfNeqmGjySM381vN2",
  "key6": "3j5kSvC9CHfDPpdq52dZn3QtTDJEY9Z5P72k4JZV3hnLQaZBRkzUMdk7AaqaRxQCNz8RomRQWGsvhz8pH9Rjn3BV",
  "key7": "3eGreFbCNK7e17CFi3BSPnA1RmgbEmND5J4zVe8qY8ttXDbGZN77EZLyrj57G9UcMtTZn9aLzjVf4YemUb1GLbZo",
  "key8": "2rpVcmz3e22PvZc47odMx8fmhgMV8L7G8X6774T7gB6CVTNwgnWc69HhjbMNTcAJTP3LzbBB7wYGk1QPED11BWn3",
  "key9": "Xt9hLZ6BHnSFUzD237NEBDGUEAUjS2oUzVt6SFhyZwwWWuEThgkkqeDzQWC827a3c8CnTedMygs5f3cvryifWZB",
  "key10": "4oR6NrobG6CFjqHWBehxWmfh8jSXAGektuZbS6ULU3kzdwmg8AFSaLBwnRNknSSNW1bwU7F72Tr5AYuworT1r3bE",
  "key11": "2dusysU9HciMSqcYWt78WYfCNfwtdgJE462cU2Q9yW9HkkNnmfLXUpicTbcSP8zq2UmSG3EWGHn29fYoyKT35H4h",
  "key12": "5U7rbcMtcQyLsor6YWeY5FaQn6c4zePi3zKceXmSaVyAy1H6DGPNxfDHTCaNn8RRRYQSq5hBCuGpV2a8KbvoNbUL",
  "key13": "2EpyE7d87EH1SvS4tWo8zfPcnEJJwMD9TeHYLTefBJTxs7DixTfLbks4CoS4RYujnPN1oWFy6wfve3Q2STg3MJ2g",
  "key14": "wRpoge7frcD3fm986wdiLh9cZYQwQgDG6WKAPAfdtmpfSUzcLmG5vf643RECKH8xhShU6NbUdCiQntv3xnFGsuw",
  "key15": "5gNwsxVrw31LvgnmTdChzZynmB61mD4sQNYzQzLcGfsxpzSZsj5sWX2Szicefy6zfB6Ea1ntjLxrtxxzLCTyh1QT",
  "key16": "QTCq59ApUftBJuP5GNuH7xBLGaydwRjkaE8khE5UsZ8bxGh28iGksK4ssFiDD6GpQMXwTrUZzgknRPcF2SCyxpx",
  "key17": "36W1wbAwZMMEmHiwa4sGmiVEcacSNCG8cEmVojxmN9PMktVq3aq4i9zD7pThSiuEPcJKNz4HpfaTSwsDpd6n6Fih",
  "key18": "4wPKBZmqvJgfU8VBdcG2NbENjTFUoWy7M7RvkPLEka67mZutftrQmS8cpyLRLHaf32uSKb4bY7tn4zK4pebJMJ9V",
  "key19": "bJQdtq8iQkdmZCwatLioQkAUDyjBianN9sAiwP7tmgUXMLzL1Bz1NUtmqHAEJEzHAK4RhUWNEhRSppTZKQGoeMR",
  "key20": "5CFKeWSfVq94W6DTUe5voataKnwLNFovNQF63NLfTLMKHdjK7ByA2wXe3bUzMWQCyCViotmBrtRsuwV9tftqG4R2",
  "key21": "5HWWVXdEqhoGivoTqhJ12nZhMv7Md52H27krQVQosA8GU2V1oi7BTt58ZytC1KfUptumdCNzQ4x5gUb7iKqZRK3t",
  "key22": "z1NYhAbtKo84zJVK5nGmfUiZ2tTzozmg2a97LMaHrdPYnyZzgJ3hgEVXoatoXiXoMTii5dvrvKiEznAs9qFhPgC",
  "key23": "4c66n6tsDtzTpu7FNKfFAwawazqjBP4MHPpNrkwrryptc5o9gRLxAknZZ7BEHz2pw3DFGiohL6oor8CiZ6f2ZQqo",
  "key24": "5AnnskpWXA38qe99q3XLvGYMBUAfXPuztm7zjhxdYkuLGhbsCGXrsqsGVTkEdSERujzmSFWjM4RY2PEGFxBknS6N",
  "key25": "6Q3HNwr81sJCT38Go66mHUmwx6eeAnxywiwnubyMHtHV6P6urJ2gaF56P4Vjp7Nfi7Z7XLjnzCEtv5SuuqN9aFF",
  "key26": "2UUKnTyHGxcHYbUkkUCm1vGfCfCpnb6CqKbcwMs3RZUrbmVGpy7owUh1QhGFYttui3XuizNF3t36mGiTGyxgSqVX",
  "key27": "sVjbjYrCfaWXNUc1dE4y4utiCyKfeZ5nD4b8LWSg5SRkKptuq4i6qW5Je7ty6YJKS9jTZDoeSuhj6LzEe8jCtn1"
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
