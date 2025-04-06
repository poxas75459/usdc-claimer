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
    "25LRAF4aSfBvGUs9JpcpEqici7b2o1s7f2oWs7v5YjAZ4aaRKUz1Q24MnU7uwTnrFQKX8exi4735n8BKMNz45QqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCapSsMVsqzjeBTryfpfPR556Voovzwnjr6hqzAajKqnBf9PuAQteGqpFH2BgxDa1BGNBKDJXN6yysZ4whq9ZV8",
  "key1": "2Y6iUqy2hpfhdDbYqbad9XuFZy6TjBoDFcc4duyHRyViqGGcX8aZSdcxKqKDVAQqzyXsStRNHzCoCQGTyfzFB3V6",
  "key2": "3dAWvQTA2tbofRUjBp5kjE2U9C4eMBCn9eJpHtswVqnGKRETWRfgd81kZu73oAwnQRxyDp4wKhjyWufDnGJPPpWK",
  "key3": "5pdtfazstrJmQioiF11P53Va7ffcz1nAqdiApcRf7UjyCG4icXt4fN6LHHNypaaEipp7UhLJaJV6ELmdmR8EZbZd",
  "key4": "Q3EwTgJgQehtuwU14iWSs1BSwQbYaQNUgLC8qXoURof3nAWuZYAV5e6kTcTqrgGsJSyiZRs7RAYDBWh3MBgMonU",
  "key5": "2fsCUVT4rZvZNyBdJJZLKGc9QMgBJjUmWfQoE48f7tekuEHhxnUhL1f4KV4HsnvDZjsPLYbAqSQ9E6BeZ9Re3Wtz",
  "key6": "5eohExD6Jot41ySTWNB2fVQpwG2DoijXU3d9Bq5Zyse6GZnZypBGSCCXn7qXohY1KRehWD8VhtUX9zjFpfC8dEbK",
  "key7": "kHK6JVnyHadgQk8CXdP8AigKLkFPapNinDJsAYqhWgcr4h8d815nPcqac2ZacHJ9fvgzbxDDSVnARma5LmrAtgg",
  "key8": "33tcdPY9oG1tnjQSxpuVfhUeuFi5rrsdcGAojwSknmEs5REeN3pSYqHKHsfSqi9dxvcDtDjGyfQfTYzdBCki8wXK",
  "key9": "3Z2KbWKaPDqNXGHcg96kJN5CBDKstivuk27JvVCRhMArgMmTKumWw12GJ5AWeBjJm1aM824woEnr96WzZ75iedUY",
  "key10": "4aA8si8J71dtfR9ZKt9YHwZuhEpGUuj9tvacqbys9nSdEdvHr4sPA9zYyajQrsyD7UcBYfvwMM9XWQFJZR3jWfZ7",
  "key11": "59e7tMgeWycj7RKnS8YTsxssHcpkW5jURMRcmiLaSL83u96xKfbQ1N7Rr8np5Hcd4dJyjtKiZ5DMoUodompfUWoC",
  "key12": "jBhFi74LAzCj46kxNMLe52oov6EpBxjJkt78w3f97iqWets8BPvrUaEcQZrrVRYndRcxh4SgWRMkEubFDfGFzpL",
  "key13": "s5FxzfQb4mxS34EMEQPQA6pSwpU6cTBJGd8LKchnXhBSZCXzBywAVV7voWwACAP7nxThJKTYwgan3Ri4AiaYN7f",
  "key14": "28p8eXMxydcokKs8rADVMT84Qe12qZudEfjcTtn4aew2ffbtZsQmrHstfnyckoLkdxiHxrBHaxWQi2YFaiToePks",
  "key15": "25mKrw3iXUu6onhGLccxKFraXJYZChT6rdhZbyoyukkC8uDSkgiBjr8YnHKUVt9Y2BzAhctm3gSXyHjgCdDG1s1g",
  "key16": "w4pHhnAVPvRbwhaxrwAboKjGoyPzRRLG8ftuCMxxUd2msqaXzRTYZExRTL6AzKfX8DDc8F5kKyjuWPotU5BbWZZ",
  "key17": "3B6QjvmJ4oeNxrhuAjysN8495qsnURozdMiXv93SrLEdy91kUYKPpYnMiXB1ZzijeSdwTqr19KGFvJGwfGqjVpMH",
  "key18": "7pfqbhc7U7UnUsmnaQwo4ieFveLMxDRpnQos21mzfejDahEYhaBz9UqrQv283416xphj16NVqbmeZd4xHvdGqnD",
  "key19": "5JwxUFKDyNhGAn3GBNjxT8KXjQPGjiR3jPAyEUzjTR51YGhSqvEozzjQrRFNmS6b1ToAi9v9odPQWcv88HAbTJCu",
  "key20": "3dEzBEVMd8TFJd9tnLhNJ1u9RazbHsHj5HcMdJHU6NrQYFaFPtP6up23FhVgUW1vyBWioHPpjvjdWzBHBbRkVsaB",
  "key21": "3Hm1uGugdQkPzWP1kEFkvxE8zyUqr75AfHhdDB7RdQ43YSwef6B8MP5zk48ognMyncgg8f1AAHpxzm3mrsm3n9De",
  "key22": "4qbnfMEWd7XntvDzoKxoD7GeVrMjJkFB7H26YLZtfbGoWoZ5K9NdYWg2xg2ASJpWkUKZ5dEsDM3BxVfAdFvS3nTt",
  "key23": "yktgy8mWMcXizzEfaaz9DEMA5myEBy1V6fjp9MXhTPhyQmmChY63hp6y42HbRbhA7pnJLsS3uMGp1unACHRoJ9P",
  "key24": "Xe17ZtJceg6ovQzHfzkmgjJNaXo5oXsmNr3PHd9krktdZihzAC3QQ8a3knTyj2yik4TEqr6SfouK3EkCvCBx794",
  "key25": "5RGpWSezU5SwQfeaVL4fifwdLDrpbrMW8dFkDUf8HnGcWbaTE6B5dtThFmCgxdR272C9ZGucpRpp7pER44rrAZNq",
  "key26": "513Q3rC3X7QA5XiC1TzoXUz5RnTRHtyeGwyti8qPn1i1tECSG55gtQyEthMEGgthpJHDdfHEpKtW8WYexjYxHBKY",
  "key27": "5qQhwXsrKoWqc5QXphJF6GmjFC4hFEmGmYjD7dvZy3ZYvhsKaMGHGRddBWJwhQASFzpgXUkuZq59wx8ZXtoX1iWd",
  "key28": "498kiNJ3aMYQhm9SJPjQ2kEdhpR9BT1xWmviA8qJfzsLxZfdsp7Ad5mnTDc4S17gYA4wb62gRgaF3fioxibzr9rx",
  "key29": "3F2d586YoCSENq4T64DffakL7NbkK1SaBkEyxNwr6VPLmmTTRitAUAiDnea9ghFJF4geRE4Lfrd2AyB2A3hg3XRx",
  "key30": "4oE2rF7jkWrA9U5sgHbcwB8BgppvJQQ5YrLbUSYA1PqSBeHnqsLNXed3Bd2sRcKu5N8kSR3Sm5urUGsFWcJt1Nvz",
  "key31": "4jmShCJX2FzJt1KDFoGAj4nzHT815zbbZKCtZY2wsaTpcNtu3dJCQzrZ7suNnvfga3f2UbNV3iJV63qovzNMWJR8",
  "key32": "2jqrAScLcBHe5DnEvV2NgiQJEyjHxAhfYSqqryVvgmyYcveFvTQ7xTe3S1CpyE1dMPzh2XscyWZzeHCT5pdTY58F",
  "key33": "2yvHvPb7fwQ49GkGVdHwoRH2QUkkaGiM4enSyXoiCEtiG21K73mnJvaVgpSoknwDJhx71eaFLJoqJDjLeNQiSYQu",
  "key34": "2cBQ6cWUiGQQhTWW7QYWyEYF3HDzs8xFf1V52V6kfNDxCRzxb1ncmKZpHRgT3v7LvpjR4DyVfYFi4Hq6mKiNHT7j",
  "key35": "RHjHx7KYfzYq7beWHPG6tuFuciAUaUR9qbDwSG9TYF1fxDkcZa7C6NGUKdczE3ME348PhtmLEpukT9h1yfurZHH",
  "key36": "56znZRjkm8XyXmtuzModqbZaWhBafjsYGV2Y9N73Ked8Rih2De94vQdprbMzZcKk1EhP1cXAtcwpDj5BNfTgc7zC",
  "key37": "4Xo7pxiUByfuUsyqWZYSX63eoDBnzh5qRoRHh6T3AGh3WYH7ygn5PJL7JarV5Xfx5Ra7fDPH21XH6FTmEMK6tHEK",
  "key38": "4ANgE6KzkX7X222tPQsTKiy24CdAnYB3JS3nLYX9X8gfBS6cBUEjLCFNvSamxH4t63DYaiWARJ5UStUU2AwsuE9T",
  "key39": "5Psp4Pnfxqa1VmDUhqZuohLddFfvGTTDJW7wcrZwPPdoqodmtD5C1EvJBTvocC5367Pmui7JoP8zTJXEbW3zPN3V",
  "key40": "cPW5G1aSLCCCyFXWHSagsw8ZyLzUohvWSeAUxpSpD2Py8ukafnwAdbe2bVahnpwaTvYAmoVw4cnCR5wgn2ZM4oU",
  "key41": "33LnzxHHrwbaAMY5Jh7BHTiYUGZhtR2b46CJ93ueJxADVTA6THp663Sjrzw9r8ZWkyRjBttunstu3iEPv32YPkX6",
  "key42": "XfHsTfcMSbvSX89MwB2Mfo1HaFRD5EJcmT4WKHdULxwkZUmv9aWpd46tjBQYke5odGL3PAbP5CNw1H4Y8fvVeGB",
  "key43": "56GTjv4VpPUgXTsG74uSeCVkBfNuE4paKzJxydBXTojogE2KsJQzhteAAXW79F2Jrs2LfJ9M9SWoUordAmLKkkg5",
  "key44": "2H4brbmTeqSSDbXqsyCTW5itRh6wSf4eYVwB1n4ng8ffeni1ga5tuRf4kTA5ezrAjW4H1ZZP3DyJ3CSVJGw6QLvy"
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
