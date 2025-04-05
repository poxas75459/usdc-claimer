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
    "2kGmxPDLCeFTtXf3pyLwBinLhMjaWJ4DDZ6xXBhaQZvYweZb7uLudHydwydPSVJF2gZVJUB9oo7934irz7xW8fZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtbsbXxGoj4QVYPxxgvzKjy3PDyKAR2K7eSEWSDiwuLztNM4AZqbxN2RozHNwxGCBzP5JYsKHGhdBFUmqU4bgLL",
  "key1": "45XWTvQyDW3xsBiVrxVVRJhpjshcndeieTt6WzRNgME8x4tWZLKnUwqDJ2UnRFVDTDGWWuNmJU9E9RLz4WFuSKzJ",
  "key2": "2JxeCEWXGavT1yfePuTW1CL6wZra1Rb5L8DcLpkBeCmpfRGtDe3m5gEf4ViC9ixwXhA6oHiwDMQgu1ZrCC46jiFy",
  "key3": "637UEeacAxmx5pvnkLxj4DVtC1VhHMZdzj4ywSQTa297RqthqhXK5xpCvSN67EKWcYwhs1s2gDYnwb5kwMfapfJi",
  "key4": "4Gxu8vMqSZU4a1owvMSWARqFqgtvd45TC88JN36RR7WoPgD7Mq2Dq1prDf5dqSLoHtTfXnTW3ZVzwHbReXzEd11Y",
  "key5": "t5Scua5nKdQnBnS2UEFhC2Z5SGrz6zm6TUVhsS26jsyyQPsUWzXQv5C8jMGQrBPVtvnppcxeX5kJGPuxtUXqe2n",
  "key6": "53AA22BEZWF8rtaWjk85wiZdf8JbyAsCErpP4jRooNR5AoczhcLbMsKbu81svC6BVNWzeBcSBeKTnnWvJNPZtzZh",
  "key7": "455Lx5KRsA7L4tBLa6Ndr9U9xsJNYM6b4y9kTj7zp3wECes1pTjFoxmU19uxYBhD9usBZQZJxsWxg9VhwXEcCGyn",
  "key8": "55vjjyr9F8XhK1YHUffJSbZW61ffn8x39M2UwrvHkzwVWcarSXDbgCNrRhKxD64ZQJFRdtEcWKuUnArjaQS6PtR4",
  "key9": "4jUBcLvzwrfaxpotAyYdzgoWP4tq9zZ7zPQrnYpr7YZKyZ1mGjddV2GWR56MiF2ybyBY6X5Zbb1yPmZx7TE4uwXM",
  "key10": "3xjCQK2tevxE5W2xvzjqionxmnrAyLgH7VqTrCGvwttPVGJEPE5wQiCtjSRn14zSJH6ZyWuVEaaw5YU1BQnS8tpB",
  "key11": "4ZZ8TmXyD826cevwj8nYeEBaQYAG4ZBibyTH6YuXSRi5dUNYjukEh9H7UqeEeMhYfza6DLfUZ3fxHsVv5Y6sDSws",
  "key12": "2eB5jiHQVgEVyQopKzJ6BW9XqTm5rkYxnVL73RpQYAbYRT3WUU4tnpowNWStr8UNJczP8s8tQVfXF8XpzeCLRvRa",
  "key13": "4oAaxDKe264JA155qoXXTCYpcPNB8xVpwNPkjjfPJKxberHJgdhTeBsLg1QURmYvBtNRapXVPJzCNsZXkhzdrKsJ",
  "key14": "2gJfi3A8goPb8ezZxhM1T4UESJsGBTz1SEeiVhwYbi3Bz8K4AWejYRJvDmAVeSCdwCWJXypZcWXiqr8ofdYoHzAX",
  "key15": "TCK3qi7UGXCyd6LtP2cKeG6c8tGs4rRYe56q3Em1BK4b6E4RCCJxXeUF1Fe2Pe4xzRZnHzQBdm6xZ6z8nJV6ZiS",
  "key16": "2k1d8Guomx4xSE7aUqu6crEu86Y9wKmbE5TJBNv1ZAxJy5qGDpFYqXPYu4CyV7rE4J3rtAXwQbAbiYbj2B7RnS6j",
  "key17": "45o6cNjXtkYFfw1CYNbtyxZYba23DpvxWxHqMhMgY3rPWT7zgkeS5XNm64V4WyjGgDqaTjm7B2riVFgakbJLo47z",
  "key18": "PTwLedpQPSzS8jeJF14arbwaw3taP8c6V5NkK9cwXJJYuwoNtfAAw6S7XQepoC3LGw2qFThJ8fxo3Zzd34E1Chc",
  "key19": "4ByDRVdPWkuqYcs9s8FKRwYgjcgFvUUbyHcayAciUCZyHa1Qd7opka2abUXJd4jsCHkthMhTfcjd99pwHyhfEy1q",
  "key20": "5a2Absv9cwQLfj3EUypjnPGJPrQa2jVvYkqD7BHjxVSuXaztjDTaPibbvHHD7GjY7S3RweUbbhWtpNXahQT79pyr",
  "key21": "2YR3hPU1gSeMeaui5ir9en3mBec1SNzJhj5KRN9wW6nizS1dR4YQRcnav8UMYGK9aUkTgAUC87FvCz61q6yxVQk4",
  "key22": "42YiZgkUpn3EoWcMnHJoYDNZY686EkJvA4zRqYMGSAjA8y4hotBTCynfUTGcGJKK9zfb5SwaqWrjNsHLGMLQjisV",
  "key23": "2pNccite9PvhrKfRYmcj6g2u7cqX3zpyy8BbcinaF2SYSo5rFrJkMQBumELhesAf9f62MFefyJu81XKoMJArxS5B",
  "key24": "P4pEvJhwfLjbYwTLna7qj2J5bFwg3Pg31fNCxHAdFuevT7xebntJxB5vVdEr6p3vgSKhtmmTztjL64ZBQNtc6Zq",
  "key25": "3thgySt2WB9PP9zBmQRPUdjYhuBY33xa9eo1j5kut1qnm1ntsv5Zp8d4y2RVULfFdajFxMaf4gBNrTPuiFKCdb2N",
  "key26": "2SUe36B6MhLZbh8SZmqdHyxqoM1xcGJbMfDCPYDEQ6BP5yfvMsgroSc9VRuDyZKy6jrNEQ7KQdFeG51QwatoVpoA",
  "key27": "3vznbqWy8ACJBLhh5tCCjjjF19KWpmqsde6BG8k63UxgadBSQQBD2odX525QHF8XtUBtwxVgmrVhRhWoaCsrXkpT",
  "key28": "5mWLF86sMhnFcVcTcNYdhbxJhX27YpdetWmFt7z77af4F2BeNPYjRLG1Eh4sAjzqMh9EQg8ekC3W1MBp6TN3kc1g",
  "key29": "2BKripHfqr9nytNvcYqqKGxtDbt43UeHKyQ4b5L413NaKf7hNJXTPJdijJVCHzvW5zvZC5Nkgov6QsCFnGz9TwR2",
  "key30": "3uJqKRdgBimcEoxt69MJA8nRjvRW43tWNgQtKPy4z6wmtntAfMKCKi48MeS1hSSYtgWUJDZZYT1HU9cqrHdcey12",
  "key31": "245SLpvKCxhXy2A7aWcr9h7vEKrHYMzF1komoBMuMFDT55QreqHH8nqGi1hwHnXgGFBXTP24UWC3eNbME1PTFdBd",
  "key32": "31btfZZqXmB6JsWSrVSUd47vLpxMSb9DMuHQLz5obRcdiLVghW5YXwCoZuAfNqeByg4MP3ALso4KxJ2MzWgA122T",
  "key33": "5xzKUX8attT21dd3H5sABT3gMnAtj3JKe5LdbDkhm72ePNfgTqkoMJiy1ybvwC2Qv7MFR2xyJHHyKXhoeTAt7GC6",
  "key34": "hKmJneR774hAe15ACQYt3NprGfieghgK6L8ewZegSqkyasZsNvFhSy7xd9n2Ev3ibFRfFYJcwaDeQ8KWRC3zE73",
  "key35": "5MWZiLzbcGKosoEV7gM9fVT56jp258GrRKNZttc7UqSbS7BAsRA8boc7g5gxZKSgMzDfUGPQvAsYRqhoHxUS5sHM",
  "key36": "2XXYKQeWryvYTri8TJFt6P9RSiUW74mUXL5FGU1gJLmqjYhPQmrjUMn7Q5NxiBTL4U18MhBwLVAo3GH3T2u9Ji4j",
  "key37": "3zbTCwWW8Vh4nMAzWSgrtsftCyMAqevbp2dp4Nt7xBi29MeWypTECaXm8t4neJa3DJSc3e3fBLuxxVRPC7WqJvUe",
  "key38": "41Lqdk5meHXgFoKEJRqDCyn7FQhvLaL3o3V8TVkruvbSzu3LHxqr2ZrA2xGW7JCyU8sd4nBvzsbvm78w7Dw1jZ4p",
  "key39": "5776Kts834ENmXBrW2PFNv2dnafcTVb675KSZbqmhUukr5r2SWuRJg6Ddh5RKa5sJtbdmTinvoAfbaKkf8Yun7Sv",
  "key40": "3fTQ9GP6a51Bozbds9gkcBkTJieSukFeiXejHfpY5r3PMcBpC7tioeEYnmTkoCjErWRq2UiKNSWgCvrsaCBadkGD",
  "key41": "3z2x8jJmKG22aowW8qtmZRJddtuzcbHqREq4ESbkY2tXqdHREBZWBdNnS7sJgKAqT3d5oW5i6jY3JyQ1V3xE7zUq",
  "key42": "2iryhQdeqswMy4jAocrxY8o9mJ59H7ViwzqhCGm8hSrYpZnnD37PCsacHc2mrkPVWrRJHSpPXAkmuFqJ3PNfMu2p",
  "key43": "H5GB6bQ6F7H7HwSRWVEvMb3j9gsQ6fuLXDG1dcUL7UpzWDQcfZM7TgdX4BAihrZpNc7GXdcFgs7vaSUQ6DqiEwB",
  "key44": "Rj1fGYrqR1m4vCkQAhikYHfDMAc7EWGudzKAhDGnVVpbPEhBk5BqZBB6XVghZPzXVHvrZECuDFcedpPFafZ5uam",
  "key45": "5kH6j1JPihgduz4djeX5vgQ2vX98dAG3bpvSiUhV6iWWd49CfgEMpuaan8ovnTv665nCu6gf6Vm61GwcfdzpzD26",
  "key46": "e9nS599wUfTiXAWoYQz258ZB2XCFxeP8ieYCaXDvmxp6hAHd8Bn4u3ChEZjGKeSya8Ydi9D8CwRJKGuVa3RadsE",
  "key47": "5gtBPC87HUGCoJtRk89jh6uSfcYrrsbN7MfKgD6RkXX9VMXgaLTF8Ur6Yipd2gigF5raQ812jhCcKfTCKFgE5juE",
  "key48": "5r2H8YgbM9F98oEnhvHNFKA4aBkQYR75Bu1SaiUMG4JT2TNdHnXVqXC9EW8Gszc6NsGw9jXanEtBEWsLSajCCNmZ",
  "key49": "5XkpaN2bE18aFNS1uXWv7r5eVrxZen3tHL5iKqDdqR2KsHC1YukhUftJMjaFvQUHPk89nbL6cche13DrSNhbSV6a"
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
