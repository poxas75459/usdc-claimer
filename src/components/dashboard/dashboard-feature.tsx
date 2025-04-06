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
    "iCt22jV7JJ9ufJtH9AaZKEso9rqTynyobSyAj5Voe1817pfgyTNU83o8NTyEk62pQvsjnwXqPdAhZeuPmw24X7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29VJs9Qwy2XzSQNQ6TgTEcdxXvh8po9scxNg5stZuLeogXUGN72FUu9jd4xDW9iJGNh81Tzwx5pUgMdMJmpcoZgd",
  "key1": "2wkSNENQbdNNYB1XrqEYkaYRpG5JSBFmd65hDCKxDuMWTtiAZK2MxEf82W4v2432XQCwZTnj9AY9tAjCL53E1bzB",
  "key2": "2vuy5jEu7aks2Xq9bu4FRzV87EcLa3sdGruTzvb5n92riFF3n3ZMWSkGcTeNSygRGhRfzREZKV7PjBWhFfhCx4GT",
  "key3": "3oQkvx2G3AX2X9LFdstuyKvjMcRBiZsPp9KMuvKYoKSiopP7brRpTUQRSJV8VjXLEFbGJWTbzUR8f1vrGH6pwYeC",
  "key4": "5xP2zzwCGaSw4ivqo2MCtwEvxri98iazeJkvSsr3b5GRX4bsjJ5XVr3xtBWrCMxnG2NamzjtUUF5JYP3KS1BRzRX",
  "key5": "sTmgzGBs98G7G3swM3bVZFomLbHHnTqkijURUknnguk6FyVB1UpvjTdW96TBC4vvG3eWuDhKfPTWHc8nfLoKtMk",
  "key6": "64dALqtLfxsN8nr4hsoJBVvbbtoNn5kyUPTqw9ezYTnWpTwkDoL3JiWuj1Czt7MYUktqbeS2ciSKizojc5w8QUrD",
  "key7": "29uhai8faCvY7caHj1BWjaHnv19N1x1fpcJbrwgA8Ese2vhsXzWGHTs2mmrJRWTBsGEqRL7KcHTFUi5e5gExiFVL",
  "key8": "5utjyQLob4YBWSJiS8QcnWmSxBN4m51e8F6emBoQ3VdWE6cRysFK4Dtu33Bqrtzif6xeEs4DELNbu16aNrAJRaAb",
  "key9": "29piASDrVPryYaWdGisKbLseLiTEZrEGoEWfs3pzNFJWdxp3pf1NpC79D6vZtg4y57GNqgYD52qhaFSTt2oRPsmG",
  "key10": "45UKfuCsgbi1ho8pvFZLXuXQvJ359Ysk4rHtNJip2FJPMyj5oyfbHmd7vicCWjyVSezQ9kTwzsKEVy2F1Vc789Sg",
  "key11": "5JZeoaQWG47s36PoimzWErxFDLVcsdT9rskBZXxdPx3pCQ9ftzNEHRWUBWFHMi2n4MxiKq2tAQ8GPZqR95GEVzCR",
  "key12": "2iHsJ6HfLBRNSpc9kpP7kRWvzvngfxEgihK5bwpyQo44fw5hXQmKVaqHmbb6po91rfMYzmFy2GbYDzHMf1MGM3vR",
  "key13": "4GYK4DLTG5Hbn91UTtynPqBWfxr9pp9cDqEfVSZ8bPf4wTgYr6mzxiqv6MLXH5rtKNT3B9Vebgjt5viVZkL6Y6xj",
  "key14": "2h8VDLygrNkhKe67YdjKjzCuZuWc7mhC5X6yyDXG9Sm1FwYWTUwuTMNiVhy6K6rUetnun8TViCoBrLwZkM7H8Ve5",
  "key15": "4TBgDpzC758Tq2nJ77Hj2N2Qzg2ZfnhXUwnkFhKD9ne9z6sd3aEwEaa3DbNuNHNzqp6yZbu6gf7WShEg6YhDkHBb",
  "key16": "4DZywbiJ8E5KeqPjDqBn7LQCbjZ4bYLZRATA8EXC28HXxbe1nQJX2K7nDsTUh9UJovesnGDVd3LKn8HgbkRSmrn8",
  "key17": "41VoF8LVCDjHn5stPUcSuuJVEufUsQYCr1PwnSyn5UtFagVjjd7Sa3CAqsdvYgMN9JbA9r6cZSsS5w7gLwtFgT8B",
  "key18": "2TaSrtKaW41Q5nafvctJCF9xk3wPdJCZRgq5QhJ6hj81VwCtRiJ1eHbkwMPG9iHYPGJfWjHJFbFDEhVpp7nyLdgG",
  "key19": "4WTBB8EF5aC3XrxXTGit3GHeFLfNWYQmtmG8aU4aG96siV7Q9HawLbaheMJ5YNiVy3sbzjuZPTmizgyEY3k8pNS5",
  "key20": "3FmqMcKtqCJ35RLQWCuRVkRSBWqaSkMP1Dso8d8pwSuEw1JU7y7fkdWmdoSN7AQ8htQzqLqkb2TJ8SCxGcXgQGYM",
  "key21": "5qwr1RN9xpQoGTVoyAuiGJATHtY6N3YMrxETe9B9NFgNTsQ4n6N377pRZF8cN8nEcFjjwLoPRhPuYfxcfigv4HM7",
  "key22": "4S4epPEzoXia2aYAfVzLs9tgpHkkNrZnzBFdNPkA7wSbWoQBtRGCTBscjSVL7gatcH2Bt4J2WEyyZmkRCbm82APC",
  "key23": "56vbZLtuvk51WoSL8AkLRUnMxw42YdJgAvH4DLpNTCdQNxfoVW7oKgLh5CxtP42qi9a9rVio6urbw3zNPizu5fC1",
  "key24": "XrfiPLbZX2bTrsiXM9NreULPYDQucpg87CkS7nCTVtpz53tYS1RJLwGSuH7GHHp7fLSC4KgQeRtSiPJE4kiEJrR",
  "key25": "33unX1E5TT5VNBzxddYgH9EEiiD64VZ9DyDD1fozRRuhCUCZCCFoxdBGbp196okA3Gtb6Y2TkXmBCieMfGAyKNDC",
  "key26": "eYQD17S7k6hfzKBnjHtSUJmuGufU5vShDkLZFbvV4FpHaDEmfLM13nPsrJGadXc66AZCSiiSVtNoqDUxPhDAcqL",
  "key27": "5Bnz896QCgng82iB4Qf22X8Lz2Urm65tToqCMzmaQ4zJBrjTDTUGttzR48NrCXH6d7yASRsD7NQcgLgVVJYLh9M5",
  "key28": "3wvj37yZ48Z8hMKwNg9nB7WkxXh2hJfQGEpFZCoa9CcBsy61cXurZg4eKMS5PEepRyodK78HbYMb9jsJF2swVHnD",
  "key29": "CRd7Tp7JyKkhYH4j6TiiXEfCJj2YBetwq2JMp6S4VX2YfrBeoqS9idVCZ3KEAettNVgwWUzqWQ9bpmZ1Y4VFcj5",
  "key30": "5yAA2bbEBT1nR9V14G1ifnYhKHXNRmgF3j9cDaY6TKGDGoGPU6WY445i4ZAZ6ak6s7ZG4uV7F3PWQ64cFkT95jyY",
  "key31": "3evRcr4c3WfHkq7mymnxTx6C9n4BDdB94s2AxzFui59wtfxf6KgiEBarGEJmDEKJ3G12T63kFm3WKQaQ7VrfptQs",
  "key32": "4XN46obcwvvNT75W7TE4HoBiELxLeNZqPvH3xkBVSdXFN72tcC2urVEBAe9KDL1t4u7WwLzeGhkXE45ndxuQvX6b",
  "key33": "5q9m5hvUWxiq31skZE197jKAGQFcnjyspLttk31ixum97qPwmYKWBKq7F5rpWTCSunzGGWfyf26A7xTtJtv88SAF",
  "key34": "4UheHUspKjt2w9cfHwXLYSR2K4TY2Nr9JcUpWUzDtMMA3tCrxzSQSFcmY1kfGZzaDXJzydxkZZTdH4j5nmikMZ3s",
  "key35": "4v8KtkLBPPyvLPogYWahciQ99RvbhQTZfQ11sh4vMGDzMJAsWJRtevMjMtRuQHmQ4ABiFqvSSWgEWcdQZJss62Kt",
  "key36": "TSo3pmGwPmXGVRCFYYiupCNVJyChuchdmcQT9M4FdT9NQDwLRCt152Brb1BGuLTtfNZWt2cfR5xHfUF27eZD1Hj",
  "key37": "2prsaF4HK9JPxkAYxUyeJFHkeskk89nTzFDkiyn9QTat7njXUHzRE18rUNYcnv7DUp3EWLJ9d5bwA9ibozgCBcQP",
  "key38": "3N2Yjhuecr1nR6t24d2drb1VxBsEKFuvXx6hHZPMXBrrrBQp1wYupV4S4Agiz7TCtS6Aio4UPJePXGWCZQRxBKDa",
  "key39": "4XqaQ5pUt9snJ7i8xfhmw5xtYQ9C8YdY42uiTp76jfNKvYcdYbj6LZtAkDzDbY2biaLC7Ter1wCi28XpoCwWbEAr",
  "key40": "4MoX6WQar8K3Lj9SnuZn8tYn1XEYPtNWpJWeLhUzfR23AnWvsXNrV8Min4mvhTRqVz1QM3neZ4UR4NA9jLA2afUo",
  "key41": "2jqo711Zjp9rsyWfen7WtGA7ms33nHNPrACswMFXPCa7RsU1SQJ7yqE2r85NvLqq8pE3vTqXPC2KsKnN8mWmQHZ8",
  "key42": "j5vCURySxLZkr8espSWYP9hdyGcxdVw9wbiKxf2F5LucMNR5oBbDLwEuSbFp43fsFXgyC27R3nC51RUkGbWnYqv"
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
