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
    "wK7HY68enyVuKEwoSXWP5vQ1zUWhyTM3SBS6MTxCiVnsT1AyYBbq5zqVpQBu4kD1m2DYuSmR4hAxvku2e8VDvrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrKRb1VeuxCmh6Zjs6ejzyKkCYdHAnW8zoqVQqBJwKDXmrKCnKtJxoK6mkuGhfJk8v3GTTTNCZbZF1srYCgigiR",
  "key1": "zA4eFbAsDLXdRZVJQTVEGPDLtazNDZZnSStKqx2DhypvSnzeAeQ4mmiVwFTXDRmiaXPVFSN9NbxwxwYsRhy3aMg",
  "key2": "468cgvj4Sh95XdDBrJQtEnHuxCDXyBC1UgnLy46UkCtAE4iDg8NvJrR4wYPCLGxU42XW2oh6EE3sYKAy1jMJFZjF",
  "key3": "4JtvbgjKkGGf67UdwJrvC2e5XUk48Xxu6r1vhYiuA3qootCbC6toyQh9P4HfxixNdEZFCDTa2oVbMYwhbntc81wM",
  "key4": "2c8Sf5hvAta6ngG6xEb2R2KsoVXd1R7L9QpqYmMN1f1Q7SURN2GjCDEmLApZWg6DWZwHeiH8fGMFxXdsA5zpNg4a",
  "key5": "42jfZdLuenRtY8Mrz2kGKKhkotrsnUzj27frSRirPAK2WhaGaFTmk4vDK5Ub9F8MpNSemz7cduribtGQJDy2hUnZ",
  "key6": "5CBei7G9S7PJafWqVhv7BHYChGMLaHzYgvbwEMUyC7pnT75jKQJZcTwE7s5V5vbSp8yefmuQReK3ErRdJLScn6uE",
  "key7": "3RkUYkMnpsqirjQiPycJtW1rLuS9NSz3rqCYb9XkQRseCtEdoMJc9upTFbbBtt2VEoWxtXZqH4LhDULX2ar84ZbU",
  "key8": "kEnrpdDG9YHBQPHfK31Z6zP7npVVxN7js5UY4RwesyLDuV8fu47cy27BhNk3bTyFedQtsb9o4szVNycknkBxBgo",
  "key9": "8PFNt3phYpaHi1BWbS67sLvSqpcBTQgPYXncCQFVJM3apXcpByTWeushfYTb6AWmx3vxE3cL6H7JDg5Vuu54VkG",
  "key10": "5bcqdyXgHjkyeAB1U3XZtYmt3GhB8PZjb38YGwT9ibUi4UYREM1v1zGXm7bnzVQWPbYpsgzariHAnHEB5UH1UvHi",
  "key11": "65yih51LoU6HR5o73QStjV8k9U5NpKuywgLTBNJVyChBqQshRYYSJPKyePRWjEWJySn8iKCsbSD1M1xCYyD7Q7Cj",
  "key12": "3vdqr5qqR7S9PaN9nZZsqsL1xoaTdzSgp8respZSy59VKhP1hJZoGv4T1tSgPyXXFvAPR9AATeZkBrNqqTm2ciJj",
  "key13": "5mhRACR2twpdTvGtWveCu5uX7vHVvwwd7NzwVSFRHNpoqQMy2WZuZR1uDJW8MfRq8up9krqFveBQJpv4aCMLRH2Y",
  "key14": "oN579rPfspGKHE927G1wMvRTGEmqfQXjss2wR8gLZAKz3j8N2EXUy7TxumgRkJSpRjy19fA9HxHmdfiskmu27nX",
  "key15": "2M161QwMzgWwEAVfcpmT2hWAN8MGwzimnm3LzCaVkPJNyPRbUjMbqid1ALPnZJbyQFTmGidVx1homP2xXNAauYar",
  "key16": "2YuiLxKSSh26iSpxoXUuBMYawwHXcwCpN5hR64jy8bA18vquWFFbubti3SYpRDd1B98vNk4jfwBZMnJZY7HdirCJ",
  "key17": "2cYYjxfP5mGA15kxN4qHgFMSkk8EBmAoM6xSjFNqx2RvwCq6QEFypLXYYSpt4NpdWTvM6eteXrkCqid8pGZM6Xbu",
  "key18": "DJ7Lt8WALGDnGzWryYsLcrMSKRWTbCE5JC3UVwtcnVyaEg6YymnshxrUx6CEMhWiBUACojrSa1EoXaLJ8eDyAZe",
  "key19": "5BikweASTGBr2hdkPEiJnBMqYsTnkt2oyDdHq3eVZnanfPvBhkCAhbg3tpZWYBY3gGoyPvYuGYpomoa6BCB7CwDD",
  "key20": "519d4qQzTFi7y7P1KyhNxeAZwT43bdt32131VCQ3uzh56tfBi6hnRhVNPt7oFX1KnFoaPLHDdBxsm7RjYrb1scp2",
  "key21": "5EXYhXkfkD3nqb28mq7pKR4jLwz8uHCT7uEtA9NxLtVTvZrraDwt6yWG4sePTPPGoii7cMjfDGkUoxXXMjDBnvU",
  "key22": "5uWVDt9oKSnmdoKXgy1WV1E4oJ61DFEML5HUovbxn57X4ky1yhhWChdmStWNMgjP9jdWZrgP6stSaUVRT3qpSi5y",
  "key23": "2HP2xWssbR2NzxPH1Rbj49SJvrMT1VzH6KKdLbUojwDkauacsbQQ6uxVe8ZQaiXXZWv4xmUqHjqBnqAaxvEqzBJk",
  "key24": "4kpTTvNEyP3DbkawpvgcEPmULdRjRJAj9znmnhYo7W9nWHJuYqWiLRG4mcNuBxKbL4fTXEE8BeT3WEisNz4mcd1L",
  "key25": "3Td1f7b2UZ5oGbLiFthrXwrbF5167MQnxZr9Zyp8iFP72F6GMZ76PxbRKvPkXj3w5uHaECR7aujnxvj2DM6ADSGp",
  "key26": "2R6oUu84rpREQziep2SeZc8RQrCmbAjXw8JywEe2drAHvJXQjWpkJ91Bvrta5DfVvbSuDsUUdmJpYTFEMD9heYAS",
  "key27": "4kj7DFRQA2duKvnYWw6vWx6gabjvQ7Z8a86E9gdn2p5rMecYeKJq2GGJHGy6aQ3D4D6qEp4H1AGyRmQNUdZDo4c2",
  "key28": "7DVENgJ2Bk45nFvpPYTrCqwdskg5bzz8QbQaWAJhMJxxakr8ZMKNjdF7XDkdEzMjL1YtHkULMrHPKgvdMQUgAwB",
  "key29": "3q7hzcxMPm8GZsbxEWt9S6iHeLgktUgvywrHjJ8JPJR5LA6WiZhBXBfsANVNaSjSmmAyYH1sgCu3xyJvatNieSvu",
  "key30": "2GmCrgciJ4wTddtdFue7BZ8FEf9GoENN44WqpK5fQGo2miiwGSrkoMi9Fm2pG9fwAdKRU8vsPtPeTwar7PebJNoV",
  "key31": "4EiBoshVXuSKy8R1tMRaHG6W7CSCgDV16Rn1qWFZPaZ4ftFacFoCaC9W8MigU2frUPZkonUDyc21XKRVxgR9tBeT",
  "key32": "J12ch86XKmrTYjtfGr3xdzgQbaDcoLufkFBPff6QgKD4BvGt86URsmsdRCAHqFAV3euEg4evyumkvinSB7znxxi",
  "key33": "nCABcGCEq2JguCpQASFCbuVDpd2ShNTRZEETD2zSQowSvQFDTRe7Gfv9FbFY5D9nsJeNn3MdMYQrie4HbK7ddYC",
  "key34": "5UpS9aTfYrPjmoJ6dEXYXk6kbGnYHKSFPfAbLszqkk6soee6hY1iT9fqnKaMWRt5NFVch5QnVJzkq6U8EnfSu5YR",
  "key35": "Hf4tCrwGnZ6XW94y5tVctH1JrKWFHSC28oxjrrTUbenoLRpi6nG8qvL7ymxAS6yo3bGGZGWfHQCydVJWS9YYvGM"
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
