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
    "2BEfEomH3i9nWGUdvP4Sf6HfnWKg6Dxy4NhYQCE9g7yrLkSszZjqQgpLLW6aW4WKp3geikeFd4koXM5wN2KU2BJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwWuPjzDKXtoj9XkGNozePihMtcKUjra57o3XBG7j4RGmyEsxicywYW83AgAmMdturauSnVMTqQcQo3sTFnnSVJ",
  "key1": "P1ck7RYtBvQ4aGE4sMiK6NEgT5wUQUFnBxvcTkb6faezRk1XZqTi5SRaCNqq9B7kfax77Ww2irayXimkNCZn8bs",
  "key2": "PQ8aqCYNTqAiCqabRnwSqexnFVicmeyvc1FkMEQJmhpqV8bU92D6o5UG7TiwUGVMTGb9LivyC6iJcDSQ75nhJWd",
  "key3": "5PYzFDeShdhzyzv6UQPqs7VS6zo74qMeTYhNwVJGw7Z2ywouv3MVQ1y8NDPRuk1MeFp6tAFLLL4PD1oLmEZefPW6",
  "key4": "2baGkC3ErvWkXqKQ6MrDdSKUh1nZJXn31XpNy8YfBQ7wG3S9iCfrz3eJJq7cui1v7Jeh78BBM74LxKxkqKHPeaqL",
  "key5": "3651vA5QzGQrnZ6Js7mAy7kdG4j4cwXs6GAHNPe7ikjK9TBGVVyF2V9V7xJCjr3ewD4Xk1GmfEowmGQY38fLTYDr",
  "key6": "29E6zKB93evJkCU29GTWsuh6fi1Jise8jYvUezVQpKCxMYrwzVS3NtqMiVaX12EaRfryW9jBZ4LAz7vVWPgkcEGR",
  "key7": "3BsyPU3WiBRAYhyv74L7BkYMRE9UbamsH5memqNwLBKCQiFWmSAXAyD9vAbFmicFLaMaKY5CiEnkvN4CofRBxs3a",
  "key8": "3YQYrMvczivQDym4rdh4i1sDfXuZcvSEsb9y2kJQyUH6cKL5ZWqM5rCpCuymX1Jzs4dYkdN8PyRHMMxsuEgrhN6j",
  "key9": "62FKMnED5SFR48NNNDaoWYvajVanJtCN3qWTRWiH2x5i3gqzZWmTXrVsAn87ZhckrbXtQtt53PK9CcnxR81x8NUm",
  "key10": "5rFBgBka8bWXhSmYqWWmD7Yqik7rsknEwvTtBnjnDjJn6uEkkAU1dMHmEN3PWTT2SAyUXqSPzjsQLtHVnZUZa4tX",
  "key11": "5YLygdpyoSWAECRhPGmxfA4d4cA9bqvrZevMMAG4r6T8UM11c65LG9x991eAcYHYyAJQsRS1A7XS7SzZpKjrbdkH",
  "key12": "4Dz2uR9rFrrTdyYsUibydYCTnwxMAzfFVXwah9u3V13o7NZVhKppeQvEVhJGXw15nzo3kB4FyzhWWY1aRZKVTfpw",
  "key13": "BUkbFsa87ShrufeC3f3wtaQMJdz4ApjuZPUTgQtjZg9yzwGJ9ktC1XHjAorFXKUtKnzTXV9wkyJiLpgvRGnhg4M",
  "key14": "2YPARwRTbuWypgRen92co7xtXvE6sAogYdWkdFoESJqm9njepWC3gb56k5nFaujEGJwm3FRoaHbhUk1JbqjXWGPM",
  "key15": "4rYwM8CuZaJkcwq9JinhHD85SZCDaHkK9351474HKXdNTp9DXf4vMQJpDtZb8V74CAUs9ebUvQKKvnuC5g5VjGNE",
  "key16": "565Lf8ZX7ffQQ3njsCeQv2FG4bvUx86g1rGdbEMpw6tvzH5DsApJT8LeV2EJAHjUXRdNHaYaY2cTP84Vjw79VdLk",
  "key17": "3YMUdkmeP4fhCr8eKAw5SiLoxtjqKVU1xH3ZTCVyQwNDgUXFtrmTHPuYDG5hGnsoc5ejHKFQypjcek1gF3gpd2St",
  "key18": "2iY4MzyagMs8tw4KgAKCW6RJyYbobmX7nhGAKNQntMDM6ZeZ4gqV6W1QYLh7thEf8KYf6Ux8TdUbEjKPVVEYcR1v",
  "key19": "3cKyzbmdp3biNBFJSA7JqMGXgq2m3cRcU92W3Nb8J1YUhxky23vR6dkNu8QPMSN4YqFBNmQcMK6xpHcuJDffHUVw",
  "key20": "5xXVja88eNiJKAAuEPtZT3W1TMTZMYHN1E4fMyFWyGGV4vQqHmMPPsMAjt756N2N9jcsjcMZbfU7LvpN4qEnZ2xv",
  "key21": "56VAFdHuAX8bMmAQ63trLFdbptk5tUo6Km4HxRwNA6uYbtQeog1iuyGFgqifkawnZBmNLjoaGVWnvawk1proE2tP",
  "key22": "4QKx3UAfcbtbyCmXeuX1DB1fmMny4piFDgRuDqUUnV3pr4hZthRi3B3DFzo95PdmLyum6N9oK4cL1L4p1wPHidLh",
  "key23": "2t9YjVCzLGCoT1Rer27hWkrQx8uWGf9Lm2odXgD84qib1QTd6PsrDfNM5B7BVVK5uk73rrJwndwe9YizRh81iCMT",
  "key24": "5JKSJU788qkpRKE4VqqTZVh8eqbMwPJHqk1YZAiaRs8RSpLB1HXrAYAoVx78m6k3rVapgbh87YHr8ACaMsQ3VVjP",
  "key25": "5cFwgcccp9rN4b5s9JjYJSkgGcjB4tGzwaZXLKz93x7B5cQrQHC23dWNSf9K4kNbfLtxHGUBCoYZqCQ4CATvnJK9"
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
