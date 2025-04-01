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
    "3k6xUBaXmS9Qy97ZrW2URnqWbQL3xuRRbCJLzUkepL46twmm4bUvZJpaT14VVqxfojTpu8jT8CeXLJrzvRScA18E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13Rrsjj9ttcbC5xZWXRwgEq1CP9oZAKcxaLjUxs4Rp7zpcthbTaWqYaGJi6kRzffnsYqKGA8aEmJXoj1qv15FKk",
  "key1": "4FN3h92PqxubvyHWpxABS222q3nebGkthGuP7psozx34Uk2xZdRtxETrvEFqQxNZiVZNr4LnzWx6FzzPznif5dBC",
  "key2": "37zmQGGPKm6i8uLWdAzaQjiEKpfGv9E4k13Apa6fU7zq7TPzSct2fPCaEZNRkxHcvHkQYmZ49AEgvB6GvnkDLMas",
  "key3": "62cyfWmQK9HmXyyUiXb9xSefUGekWcqHaUN72KyArXtBssNBvmyG7XkxmJfuWeCspHUFFJHDtyVtBomhryKDqjZM",
  "key4": "5zbpjNa1sPCGatY3gohqmoV3FJMUewPyhjNcuDMLC5WTa7HavbuPbqoM5Q5LW6x7sBgGxiWbrQeUXWLTQgB5pqcS",
  "key5": "4GseqRUvSRrSYF2ZvdpghrV5tJ4aPPHAYpKQzASE7AvcFU71zJX5pf8nqR1DXp9LnHANWb4s1vhCy7nsdFQYQqEN",
  "key6": "56F8uZLZJU2Y9w1GjTitQ9jjGmGkyTJ8WCQkjfsKGVCtDDctCatfsbPQGqVW9oaPW6Q7puavaLRbEQYGLnzByMBD",
  "key7": "2k1vbokrVexnjxwXFFYThbvWk8ZsmLBesWGumZsdwZm6ChpkKsYerCQ5Jd4dCoDrwEAxsEwHXVaBxEofyDto1vVu",
  "key8": "4SkCd3csdrUJkdBfwFnxTkDLghaqb187ohqnfV6eHVESgY9magrAaPB6uCNneBNaAgZFyzSrBDV6vKeK352DrLLw",
  "key9": "2o7MK4thhnrN7s5YqPzzcEDLvAYoZKDrGcPA7APBuVV8fUxv7PDcuTnTiVZUwoo3eXcC8rhViB6a89418FBSE15K",
  "key10": "49QdFzpnGhzNGpKC9kkQttp8hLBN1sv1LvHhfJJU9hXCuqPR29Vkq9GymruM4BZQ84aqnh1VTDnLXs5DagajEYVY",
  "key11": "21y4sEfvDK7K6DTNy9oy7Cgt5Sea6nmYTP3ta84zPQnx6bphiyvq5fMjRSRzN4NxtEcUEufTNtrjupknzAoATtf4",
  "key12": "1sLNEUctj1Cni24N78ZXZtbiU1MvHbW88Nnp2jAhnaCcFEW8tcD95hDEPGBMeFhWA8pfgGjXkTHqApikhUDpLKY",
  "key13": "2jXhGy7iyYiTe6cZ3m4vhi283Sf91Gx8eCKS4aYFyEvo7NBhnfakEeHJ2Y6sbgZRkoEdjXEiQ6GQue9bTpcM9Erx",
  "key14": "5ywvE6rqq7FKDGwzs1HoexGTrhL7JYM3h1nRDcsgTnXYVYN3qfJBVThepGFixHPbmcbMgb8LLAX9VjeMUhtqaPeN",
  "key15": "2GkHDtGygjWRgwtJdTqQ3of3TVYy3jB2nQySmkqZKz1SUaPHWG7hevv694he9c89wyvgFYDAhBpMqpHF4vwYbEST",
  "key16": "4xP2WJFrr599XwBZdNo5bSBitospAjA1RmVSs14Co5ms9Gt2dLcaN3giWLmguw9NsyFL7Bf7ej3kEaQRcBttfonW",
  "key17": "29RPPRqXkfmLMPp7BVN3XqQyoNAMac3EcyjzU7qeNseo2KspivFUnmes1F3aWM2pYBWM1kqf29q44DqqQVojrf3v",
  "key18": "5XrUu4jv54PHjyL297E6R8PyvanCpABQer3gWi5kJdL8hxxKh6DqdgCfqcKjTQ3UwRfaReWBjg1XdeZ9L4Mw6jHU",
  "key19": "z8VtpQAVAUjbS1XwdMMa2iQguxuX27rxv2jGGmqkTPoXEb4v1PL2SQjKQP12YwRUC6xEdBiKtebfhNquXwMCNQt",
  "key20": "2NUyLKtAK6d5DqoQfxnrzPgRCC1dLkvojZoiyPfybAmHgfiJiFzcn9vzgyacU4JCNLdYDpgecTXyH9UcVdRfQoFD",
  "key21": "4aZjycTTqeR51jeGhxpPKLPyAEL486CioP43wkw4v3EzCnkonybjuU7PZ9DTuT7wT4GQnoDHAeRgWpSU7zEMndfK",
  "key22": "33sKyL12hhBnJJMD9C6SsBKr32CqeUL6TJn84kodxhtv8oaD5YZa8kKKVLTWiGgrqSqJTR91yRZcfxR2Re5zio83",
  "key23": "3hYX7FFNk2EsUvFySA4KTE2bFKeYwKa9XEmg5sQcHoTMEAABPA9ozMru58f3SyFpRMQwv8skrgLJHK4Rrg1126ny",
  "key24": "3dQtyRE4TcHJn7rRKXBRznge1AV8iebnnDQAY3nxgXhqHrFpXEbXH29HDvjHC122pY9u23K9uvSAnn1A4N38J1qY",
  "key25": "3j1xkkGf5UBRR6nZLU5wHXy1ssHW5vREvjo3Fwno5opUbopq1X64AKJjoaEnygadMcCvddnJrznpKu4qupZ4RJ4K",
  "key26": "4BHdTwVAoJ55FKeK6McHuj9ZUhHcf7zoZbpeSiYQFB3GiuZACBfdUhJYcUEFZrJRu4497N7VnPzrbrveVydcYheg",
  "key27": "5rfmwyrj8y3heYDJabQrx1kgqb99ro7AMospNdnSBmBefJr6NWF89VaAWTDPna2V8oPjewqBTdK5NmvJBBsxTVZc",
  "key28": "38QDEHDEfpiukeym4KvHvxFqWTnhNv1ukeMhXBtKfNQFiRbL5tgS7XcuL34FcTPCwjXkbuPYeqHNUE7zNneXpEqa",
  "key29": "AoeKQFFzPD5zYmdLJ7DywyQuVXCGMWtGBmXXTYdkevjPUqmvvSgnkkyWeqMGuHbPuLakhC8dqUaMKYacHwmTAxL",
  "key30": "3WeYVJBg9woW8kPrnzZFxgZb5EiWLkCyyWJ89bnUX2J5XJS3BjPEQjqLVGVcnRugnwZDQ2PYv33kwaxCQaPcTNJ4",
  "key31": "5C7imT1WLGQERdESptt1KFmdYC4Gg825upFYmvuKAk91x4x4nJAistn9YUkuFLXKLgWDp7uXyr28muQ8FFKB37Ag",
  "key32": "4NZTUPULjQVeW32tDoxYM3dWP77b8QHpzZc2BuP47yHQXnmuUsMzjAmKZV15wFMimTLj6kN1nwVVx8vmVPNJRX2u",
  "key33": "5JWAM2jdRjL8Py8XTCRRUGQWAbZsaWQ415ccZ8ugYEAZ8wqrhPukyNeqmbJT6YUm8gnSC8VKzwqmiPPcMu7HfS3V",
  "key34": "2siwF7wzRhkHvNWQprXF2gAzg3gfoKn1UGHqEharqBLhTe7md928urUK2T5pXeLsvTYkfJDinWfFxvEoEn3YYsXC",
  "key35": "3Gh8wwEWWqUN95gh8884TxHEZeqzWCvLdtsMo9BdTkjKWh4jqZ6qzUdiLKBBipfWh7VZZQ3MXMXqCZNi2cyFUw4P",
  "key36": "5FDo5GCHtpTTWJFpJhR4QtVxEMkASaioTgeSfCCzz9XrwgkenJRtXca7qK2b99SdMTDc9mufJZyJRHsHWkBdm6f9",
  "key37": "4seBbeuU2N6iipxreNnRdd8a6cQHfpRj3e2AiVZVQ52r51vPrMVzKxR4aV8qmq2Qziu8HtVjHqFU83shyJ2jG5b7",
  "key38": "27a6dh7hoRdLmQ2P3Fb1UjLPSujBirUm8DeWB4kpfdPyupsewnci4szeLJKP588wDxeHCHQQ7fhnMC6QeKBk9zzC"
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
