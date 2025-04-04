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
    "65v8r8nnuUFyXUtZANi4HqPebti15V8MssyPvM36m2XHaHsxj68oZimHgABNcpCUTZ9iHwXfN8ZkHsN3ki1sJmv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uACi9dDMneSa6BRyJvU4GMA41okbov3QFzZwuHHUj2vfWrwcZDEFGv24Mo8v3evqVZAbrZxRj14LGoHZXKCxhDu",
  "key1": "5RessokHV6vrwGgTnC3WoTuFcDhwaJ4CznhvNWLHxY8GKe1Ksp3pg47H1Sh66r5ufc4tDPcSsrw1QDYXxZqeEb7b",
  "key2": "2jUA7T264ozeCZX6kstZGEhZ9TzY8F5VtnxL2oz6FFEvrE63MQViZkv8azbLTZwqHJTJzou5UmpWYK44HDz7PTW6",
  "key3": "2rGRVbKWBStwAp6MsYUZPkUZbmidxxjYmK7S8BqWjJWnCxJvFT2VFcSxGx7FDHRWQdyD46f1pk3JHwtnrbe1Z2nW",
  "key4": "Yr6ukrEazeZb8DV9ETn2VQigBLM8dhN5e22GFYSnGsNPQ99dYof96MYEtAYhQywNM1awSZw8uXeb627wDuMXNvG",
  "key5": "4DSg84Epr33qifKJhsmcUjyJ378bzGKjjkDaYTrX3XJE9TYuPeD1G8GTU6VuyJDz91tzVVunXngaQnhqy6fh8bVH",
  "key6": "3wjVcAjzJMD4bCjNqJ6ECJMzGMVZhp6KrY44mmkzJ9D1wUf2gk8nKbzbGGWnVkGFEupYhpWwTssbGzjiaQQtvUF2",
  "key7": "5NKbixxLHt4jVHQeyPMoU1Lx3dfsqTpowSCto9vuyPxFujN5dDGfyfKJaeJkCnCR6dK7jJuRqBgJqPPFKefHm1oB",
  "key8": "WRGXkRuSBG2fJDsPzAjEivPU7cbTAHnyxtscuKVDRVFZxd4edM7Cba3ng8SzoCVSeRVQaVVZLTnXbBxipZD2zVE",
  "key9": "4QC8qdNCK6vf3UauRN94bRBhACEUixvTAt7cbXKkrDThsc5fyXsJoqr6V5BtR4hLfqfZvp6d5vcBgxa4L3BTXGey",
  "key10": "4yLRUNcjNspMsWvzy3F2p3MzJ8yvLkEggCttRuUBg4YdbMt5iCXhRFs9tDtUa9Lgr9KzC6q4CKAZxWS7zAxsqXAH",
  "key11": "5C4n9kHXuhDwWtYoLVwhKcjjZNrX2Zjn9W6D8bfCryg5xNQsrWG8xfrd5qQtj11QrSFCrJVcWnmrKURdHRfBT76e",
  "key12": "2AjqEPwY4a4fVjZJVJv9MLjcea7vJL5aX9Ae7P7tWanedQLQG47TkRFFvmjhchfCri63So3K7KPDjrYyAx747S77",
  "key13": "RDrxDyTPeFAjkMfaQJxXdAcn95u7GTCt5hr2xqnm6maRosxVLRKw93PyfgL4p5vGrND3gjugnPkLLx23W6HKiJb",
  "key14": "tEGEEAsHb5inK7dN2yhaNHYqr3jxHSuNFZboWnCJBaWjdq6bSSTt2WbTqGTbgSuw1yT9CfmcPoUbuxBLNDNTTGD",
  "key15": "4oj6ihJyUko8SaXxJXxvDaBGAq8BcgWkzj6M3HSv73pV88gRQFLzzCDWtNJYixgSgmDQEv2WVxaBqqeqQaanyTuy",
  "key16": "4ivQ9FVkLGDciZazi6grNS6tkopTyKCginAoEHcEDABhxrEAZtabfVRKrHhjymkSjofswGmYNhP4qwap2Nkm1bmY",
  "key17": "4XK78BLZoeRJXg3p8rWT8XZ4imTzYwza4QewWSA78cGbaMD4a62vg7uYoij17B4rXGYDv7KjpfMRJJ2PQLFENBG3",
  "key18": "6SA1r6j7tnoahoFBxWZ4uj7ac9o1xgnBFK37cotxigMPYnQ6XEyQr3tADXvqHNH1tDA5RNLqFkNrXvL34EFD9aB",
  "key19": "4NNnsNa4A7cTTvDjrTcZLjW6q4BQfzseqMYiqfafz5rNrESC7oFPopCWMCfugaUkHhZAnGYue3M4wjD5JccwtnTZ",
  "key20": "3cpxPZFMuBKdoVLbGKmcdBTQaMVqAyS47w3vQtPwhC6it6jjBV5h67tCVwbwW1uSs3WFms8Ehb34hcxLqQPNfucu",
  "key21": "soxZicURF8qH74CjjDtr4Q3sAuVwHh7tLgH1yKhB7VJBdJBPnFNU1h3P62ck5StoUPj3rEtpq21iQV1z9zqFRct",
  "key22": "31yfDLAScfToqusXMcoq29CSeFVY13jAFohEqP9RKha7QRMfAjdCqqX6FWgKMsoDmnFHu2wML5VzHdk1Co4ZQE1F",
  "key23": "26wso7SNdqCMDTuT7bfuWeWL8bVnziagPqjcRmoU5f3c8huAvYqMCDv9yoRKywVNyfp8YUYS67UhAhSy63qiZ5Yb",
  "key24": "3wkQUtQvL56tG7ZbhkiXyjxtMaRuFcCujDA1X5bwPD2shhBSzp1Stw563zwed4ct5o4UgcRVaZAPCgawav6XKEHo",
  "key25": "Qw79bpuoJN8bzWdTLpZ9DTfJn8A2UK9dp7vY5GmYiiiQjHqUzYUQNuFD51cq7Jr2qg7m1d9JRRfp131vHXZxCt1",
  "key26": "5GW8YE7KLjyMFj5rRg9EWvFJ727ZYfFqr2RfCxzvaW9XtLbB8TaxMwG3Lu4BoBbEo2YdD7zKyPhfQVNQqFBVxs9D",
  "key27": "3hX7EvTZM6vCRcu8EouoHZu9eSUex99tKUNHdJ5Dgqdj8eXuPTBLXXTAGgMq2vPkk5T3w3nsZ9Ju9PtPZGY3Dpn4",
  "key28": "3RrKN324ZXjLvRPRqCF44GB6X2biSKQEbyLxiM8KThXUKiYpoNCzre9zQGeG43W42VMQyAbgDJHu9eZiauu9o5uN",
  "key29": "oM79qqa9ab4cAQs9dSnYCL98jj5S94HknA9viiGfesjd2DaVXj17R46ePcHLRuisNWtguXDmc8uU1yW5LZtNcwC",
  "key30": "h1WyTD36SQu38sqXUGRoPAS5R1oK2FJds7rhUd1XBpng9yHdUKBs33fHY8HKbiV7noZ8eN1TJW5psKccRMzXLkR",
  "key31": "2WMc7f21TPtJSAKQ4ikZri9SUqquAKVZR29vSYcYE8VCy5DjssjByhvhTprSpqnpxmeAvyb6gQserYLTsA6UnGq6",
  "key32": "2Rsg41auLy5XgeGMEsQCULfdknp4Y4ez8Qt9aCob6yrRghBrYEibVti9aPA8wiJQH9mQv4DbiD9Ag8u6jJJV4827",
  "key33": "4iMaExCryJYxfnR6pVKgvKzf1dPgiewv2Cp3i5UPsFywM2QUUi2ce9V6LMdd1BwH6gABvYSX5Vj7Ci2vTVSMwhu",
  "key34": "3YvbBKcqreUKsxXxFDQPaWAKHqJ6CsxHaEN8DSeq3C4r3kY22vH58QyprcXSZXocGPs4yPqF5frRMGyXHeN1eHQX",
  "key35": "4PJQRju6vhiAAwB1GyYy5mypwmpDpbFS3ByhGCe7n3fUuGZzsuYUNWLDHYa1UjFPQbGEdvDed4gCu3jWCR7KDxhn",
  "key36": "1V251sN1jRDHv2bmyMYPzh48Cdr67c2KWmTnK8scxYit3AP78Fr7k6oPjdGTDYuyJycS1eEy9MPf3dbLaVA6bey",
  "key37": "5DWfqw15wbVNi6R9YAWhwnnJUj2xHQHWRXTzcKoPHMXqRvtGRHXm49oSb2fzLMgLBTxpET6vHfNKJhmAnMRmRbkp",
  "key38": "4qvUgwy2LXip3ARj14GaUwANAeyQXPaNCLSY1YHhE2nvBxU6yhunJPCXJkisD4mR3Ed55EpmxvYatyA2uDu8skwf",
  "key39": "27GLv7aWBqHJBXSpRAmGBSgCzN2drBQu45Y6WZTSQMMJiW6oV1NqBRqpE9cKrUMj9hkGeQtdgrPp6BY2bxDf11VX",
  "key40": "41Ed65jjUZEwLX6cQkLNMF1Gfg8om9bemqzhhSFat91wh7N1cfUo9iWXwsRnZJ3uoJbmgB4saJFZbyoU7SR7a649",
  "key41": "JDVbvwczXQkhSFsvnZKgPbkaAhXbwFHFeh2ynMZVzVvSUZ24ksdtNkfsBLSNGLG5WMFCH2gawjRRcC6oprYSU1F",
  "key42": "5MdyKipAwSPCYuVkVna2XxzK3NEs2kQEedA346NERVfeFzFWK9QLu7smFArfrLFt3PuWxpYCBHjXeVkpHmWFisU1",
  "key43": "5GxuDR6yAq6fZmaiivpKNLqxTchLR66gwoGAbdV7yg4MFBBgCnTdMEBBNfdg6CGfwQhx4HACDwvGt5ibe4exQA4f",
  "key44": "2uigjYqKBTYrX4Qks6ahfaoa56pYSUvXvW1Rx4Mim9kxreSVsLAQ1y3t23hN2PMUCH8sEuoVwNA6hJxm8DWHvoiy",
  "key45": "2Chzn6RVpDPbogvCg4FxSQxKDXyUxSQWZgwuZAr4UAciX6TVCDYEhpQeA48YvsYCSdPovy4bgGR6BEKhzmFzV8Jf",
  "key46": "5yN95cwf62jckcNus3UDmbYYZcgP4s1uibhFKop8WKzJEh3M5ecV7HKVs8CCcsURJ1EzY49gB8m3EXUCiQJmR3Y9",
  "key47": "FVJDH7ZqsbW6v4vw5TVb62Jms3vxgW81ZgKkSKMgWXwFfVE46UthFHvpRV3YpYXAhuPVS8Kimidy2qrMiPRjZMz",
  "key48": "RieaJak2MKxVBXvY7fAmEVigcJ47dJZnDnq2p2QBqndZnbJsGMjryDrKjH8e98VKnKgkTWf2gDrh4bDSz3f6eRx",
  "key49": "4pG5RWzGfvcvSZ6S3LDijL3bjUMUKFCyhM7nzqj6Ph71tK85MrSnjecpGscU3jV7ueKivPqa7T9usd7GrUMjRBNV"
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
