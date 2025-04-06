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
    "3EPVfpopE6agSj23L7rqybwv6h6MXJnh4hyDEpS3zXvs5L2JrhxTNMXovaSvMqFjMsiDbwNSkLotkU5SKc3yq1ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Dryh5bNvCuQMrZ855WWCHErvcWpZftkET8ST4roMAgGejWP4tM1zWvudNF3rTNVN6v4MPBGRshmrT5iZM19HLh",
  "key1": "2rZvGf89JKM2Pw6trHYBn5FkfhKZhbLYEu6ZMMttUYJtjZTrMqjvhpEkceNFhCbVSNxaM9UPkXqRZ8HcFy7p4C1G",
  "key2": "3mEG9eQSZnypjch4B3492NXEXqrVYrs34SRfawQivDt88wbogDMXwGMhs7p8N3SXeqVRZAaPTPPmb1tY8UPMaJ2e",
  "key3": "3M4SoZXge5tm4V5ru7Qf4XJkXKCqDEq85ijMUWs2Zskni8nogbZHuvdDbv5cvfQ6BxDBQyPpb2eGyKgdppSBqLEM",
  "key4": "2QA25163yXYGWcDGrRzwt3Y8UcC5z5547HFZKTQdXa5gzqe8DaZv1tTxFg4BqwfdxWjxgm1kR9Dfxx9G7eFNSpRP",
  "key5": "5QUG7XPCeaGLJ8x7AAoDeTWzP2FeHHdzHe5QhWZ6S77ygvnXz7BWSBKi6tkN1nx5Cr3BW2m2ycv89fodGQTf5x23",
  "key6": "4a67h3Qh2HFBJaMy235dXEj9gt5C1Bz7f9a2CcpsWKY5iHaSN9smHrASp44BT56u6RAVpFEzLs65SsVbb49r6ke7",
  "key7": "4uS8XDu1mXnVFabuKdGiREzKCWcRFYuXtiBqnmb7p4UZ2djW3Y9TgHirQtw6MFUeZKtj2dYKCgdnngUfoH74vdPY",
  "key8": "X1z7TjqAoTpmRsbFGoz3XD19mEPecphtmTrmyxMcd9osuKR8dR18wHW3QFSpVesBvk2jSV2BadLExKhs7y1QeBn",
  "key9": "2Q5X5CtVgEhbXyneHwT2hoX6744TTAghrsstVRR4pNyYaNUypvamiLBiTFr1G8gGK4ASvjhsr2r5APt9y9Aq8QSc",
  "key10": "3gqtuMZKzDuctSX8CkdCWnqhpANcMxGhsRUnicDZJ8x24eFFGGtm3wyyC91AMXqm7L3SLg8q4ZLoL4V3P1VMmsDd",
  "key11": "3mQzTVnBFxcsRFQkrqPMVAwwwdA9PLu2UGbQh9kkw2y8VoVWANxLgkiZAMQPw8gwEsxswRGBX1rqXqbxvsJf1MoC",
  "key12": "5BfibGox1yJsxY9po3iGQsLWAYPQ42AtUKQTSTSgERDSFShtCzBW7ksSxzbHB1HEjD5CCQNmsEYTftw99q4YLQNK",
  "key13": "37cb1n5Dm48a4CEZEuqo318e2dWuozsbcSzTcuHBpivFic8HzmLJkQHCV5raqZJiw2YPjtpLyRZBVWrX5YyskW6Z",
  "key14": "66H3dfdiZB6x8mQPxvBuzNAx8iAXmWmi26MFPMR35JcqJS6sW7ncBjFhwJkxEvJkAiqf52Fy9x8rvWXfBPoD9gdL",
  "key15": "665ReEwH8TEEzceVyB6PPGU1BbzGwpLRs6WPRdGiFrKbXDRn9xEumaH24wvvv1Hmy5bAaZ17EDNN8ZYhkS6x1xYE",
  "key16": "3bLQs6zaosvXrrjY4hrZvQiU81UcmW917YePCSUJuDDsf5NW6MjDao3NFEcKf32RVEeh1xKHj1VnNL1pA7j4gt9L",
  "key17": "578Az872tsjxRAUr4d8PNnLRq7pH1K2VXG15wDLTsTiSsA6bYueYZmr5sJD6tmieihrTMQ6Z4ogRvbqCXQhUCHy1",
  "key18": "53BBjUnCbN615bBaCDY2gymNfSmdb9fw2kEgashtU8JTgxyTrhP4jVGZFVqRxzHv1Fb1LArbBMpYbcpPH3B5XBTb",
  "key19": "3TcNWMi7v7D2sxBmXtn4KTA72nZ3pEeytnmUbndox4jxu3GEH4yqMp5WPVzVF3G92hzwU8GmeviV4evUL7WyKKEE",
  "key20": "3Mc2QZbZTVQPQhShKt6HdQwLHU6kt1KCSgSd72AvbrSY9PBfNCxkBD8p2ceo4kHjCovq7mnD6qybjvocvmkA5WnM",
  "key21": "3fWFhFVeb72iKvqJH48fz2rFVaPkKY4xXPkHkHqXZCTMQgm7qe1VgadRZLYr69evKanRUFo7pVM8jos9VfmYgQnv",
  "key22": "6AGAFwtGouxGhPB5puBUZQ2WTpVokk5VTKoBZGkVeDE2GQDADNs3ZgfdX5wKDX7YqJKPRCZiLFps6GowqxJcJ3Y",
  "key23": "3fxj3A7wGsKb4tWKUS6W5Q7jbc1p2oUWNdEm6sFo5H6MZdhbzNMDMFP4pLDUT8GrZmpLGuL25UrdYqn2sRZ4SHCu",
  "key24": "Y8fa3JT5Pu1JxMvRqBm6WYQ8RdSVkARkNXmshaTeELAqJogwmTotVXnStruKbRDFKrWUYw7zCiABC8ksTHoGXQA",
  "key25": "2mvatHnM55RueriKQTuyt8gXGJzZXHMuKvMQqNrQHgSCYd34uz8hvhjaBdq5VegGm9wsSj5zWNn964ZVg4jgKtJB",
  "key26": "591HZcfjhLSTr9HSwmz6FktQh8xkAuUNxrAEfGhBiAfgY8a9aL8znjV6kqDSudxCfW1GNaX3rTCfrn6zkPX7Vq5Y",
  "key27": "nKNrcfzGt5a4HnPmuxyHQbMPyx5ZAFHY5jxgCc4GPqFyYd6BvykJcPZEY6CJb8qA7HW6xG4KmprSbrTAFhAqq3u",
  "key28": "37U5fVt4jJSSHTDC5KsS5hZYDQNon8oVSbBNHDw7YHTvtt7fB8LJtZ3bGn5cchtYmhu7CmPicPWmYqrndmENgYVx"
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
