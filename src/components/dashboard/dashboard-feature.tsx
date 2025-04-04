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
    "3VUVnssCqMU8CNR4sH7QCccGZHBzd6QdxqARPCmfGuSm3Nk8ZqUUoTBZ8CELRiqzxTgz1YyyCvZkxznkPUhfqHj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mzw1L51ZcQVw4adj7sgBL9Sc5GZiHL4VzJvGEmpL7RadnvCuvytLUVhUwrYwqvy5ENzDDez2a6gsm5gmpMyvBZq",
  "key1": "4bcEEQkiDcFWCdEJJV5L7WuyjuHkGsbgUW4dek7JZ3zx1KvPsontvAv1YEMyQ4GwaT56ZHpFf5JSiPAuJkQbaDiv",
  "key2": "2b9PrBMvarEpaQ3iXffM99CcNBj7gfsdNMkHsn6v9vNVcQCt5Mqh96bWiA5Lhe69BzpzQUKwBMRS4Hgrvab5rm5D",
  "key3": "2X8jt92ifpUnq9qnJasBTnFtMFhpb6YwHSixfjjNABRZGbniQJMHf4SmoaokPJHa7bmbWK7cqNUMk571q3rnQZLn",
  "key4": "6BQMUbSDx1ph9wS2Y9vw7BrEjMbTc6ZUQ1b53ZcWCKUpfk1QExSAgBu8Qe5oUxkBGoTT89dyrAAonz9Qm29DwQ7",
  "key5": "3gabGNQ23iEKkYFWWqcRbFPR3nJDbWhC5uB7YskUq8yabfd22yND2feBAfBRjUsxRBD8XB1aPqz83kqf5UwceWUZ",
  "key6": "328E3XZ1LVp4uUKZd5FPKH7aLtmGejRJu8JSnktasdNvsFymtiQ9cFzcRbaVEXYgW8FD5hMbyhyBoSKfaWkhT7Ks",
  "key7": "2gH4Q9wJGipq33B5H6dF2yFys5in4UFmp3WhN2fneibkfvg438HnJ45SnLrBMwVck9d4ua8pxiNytUdJ54scEbRg",
  "key8": "4B3rAQ1o15Cxfzep7id8FeCfw8Vbso5bSqkmeiRLRnptsJAwJfc9p9T7XhvfR4xD2mS7Q3Vu4JJqszFihgcJ8o7",
  "key9": "3PwukQiFkiXtthfRSHxg6LU4fa8bYW55cQZnkUkL7nTMfFiq5ExXfb4gHZkpcUqwkQbw3MHvwPX2gFDCdPAV9zi4",
  "key10": "3AseGg5LLZSe5jnWviVXo1bTSZi23mwVdUbnGYZaGD9bzLEsmENPLkCEkmUvfFcHbf6i4CbbNpu9VvYj3r7Q5hAX",
  "key11": "Sx6C4UiD1wYmeoQub5WEYACk6mJk3kDNW76yDfUjmWf6sRT249XuBVocgShDM7SjSvqVpRkU3a95fFJegpmJrMF",
  "key12": "33mTXvfg5U1distDqyY52JtHWzahbRtofjGybYYGyAxyoMVug6KA9p3JmjiTVRvRgSRtw1oZoZ7r9oT6ztqfsYhB",
  "key13": "4JwwZoazGAS8nm49KLxnNLbWm5m3vz4M9jkTEPVpaodPaE16f9nKbYa8cUT1gbZrCbSxTME9ZpS7war4cQad9x3v",
  "key14": "HgY6GwWf5orYaJ71Y7jJAUjnkNCrvqDsTUzgEKXfcoQF8g1wk4r34MhBktTANzwJCR6Xyd4JMtyuHxqsQk9ggkL",
  "key15": "2mYEVafnrRtb23Pg6JUv89RPWfDrwpM1knZF1SuUqVdmkRW4A7hucUR6J1EESYzQorDVJLPyWQiey9Ddnwpf6cg8",
  "key16": "2g1dKdkXffoRhDt8sYcUGJTpZkFP6xUBYexu8jKDMDULsuQufrW4xxcdMPKBkAFnQjq1bwoSahAy5L5TRya7nyJH",
  "key17": "rEzApzc39poDWkgbqVrL2k3JvSkAKV8N5aF1FAahUPHqdfPqZfHmzf67vuRZP84R1pa1PPNcRk3QFpPsrcCczTW",
  "key18": "TES2h1N9pmPQURDxKULCHVYcxU6tmf9ruU9WLCpatXJDsTQi3mjBqhoU9ATX96kwJ4wXH54BYp2cRWvoCtQ9q3g",
  "key19": "VeTjqw8ejKusqAQZATAFJGqxasTBbDT7FD6A17JRMQSJtnMfGgMdcGjwLWYgGDKxxmvCBND84otHUmcRgnSQpEp",
  "key20": "4mvt5UpSxrnLtnzEgPr5owTBRBpffZ5SopUPmDwXt3A4WPJAdhqyD8eg2pHJjBAyWeRKKf6zeCFC2gcatGWdhjm",
  "key21": "35iBJ98hzkGrRtgK7ZFy5LM4FLbyayRQhW8JWJo28SKEukeJQd7yFJQ51ZtuAB54ZkViXMqV3GKbKBn7QfHsb4vf",
  "key22": "65HY9KC4QEUTJo5FxBgtnNyNHtXcKoESusBT8szpACSp8NsdLR2DT2CeMkTBygbMJdU3AX6ho7af9RLPiv9mz936",
  "key23": "4dDisHr6stobHBsZRe7DPX3jSYwLgJHJYgVS2YAtmyFMc4jdimuDrEKqg3uxCUPqJKHPUqvLfW5eC8XqNftfVJNP",
  "key24": "3XCaKBH9tsqFFNLAp69yEXiGVoniEXsrPn89iLZ9hgYgYS1LqMD4hqMzwJ1bs9E3t8QMSqHnY3Z5aA77YdezPJb",
  "key25": "2rZuiSi5jeLtseEZRqvxTVXWRk6n4XrpzfcVaX6uUR7fgAET8jWdDPp8jRRBaJVzj4ifJc79xQ76Ak69GhK7scwj",
  "key26": "3oF7ZKYTEoVmTbQtqPUFXW7SDHmZvEdJYWkn1bAsGDS1tJAQJkdan3X4SGLQ3xa8t9M6GwvJxRVyvMxwQDepNKpU",
  "key27": "5XrT8zNqQyxMXetB9ac3zhgVShwUbPPGB5W4HmzPkQ1BeKpY1moJABKVB96mKjrBc6nUi25ELNGnGXwNhNEywjZf",
  "key28": "4Bu2P5WdER3m4s8qms2NXvRXxY2RDBiWS6UZHLZqBsjzExkbgm1dyFBuZZBkwiNiEYfxubWVakkjF6misv52LFXw",
  "key29": "3j8gSdz5TXTh8Cp4QdeH175HbvN6n5bDjpPcDmr9BBriF5fGbk84FQuCAMKrbuHvunJE641XGYB7i8oyFXo7tC3h",
  "key30": "4RTxEnNXpodfqP98Vc3i4QKmQ1JwCzYRURer1zsrhxJXnSuCfwqhVLgLxyPaGmiLRd1kzPiZCJkXqWzk95c1ktvc",
  "key31": "41oGoiJDkxtj7Y8gdJMMptewEVBmWjUkTzD9q9KTF3La5yDi1Q7T69NmbTcfA3GdefE7rAMQr1HB7pgdNZmoGGYn",
  "key32": "38nbYGzwXJcLPvRqcntDL1uPUarfTWK2xRnETNW7pS1EzwbdHCmKBmwUXnY4adtqL3SEYT6JLXoK1DwGcMbbtPqr",
  "key33": "3a6vfF3XjzuNGYEuAZVAnBNDptqXX2HqzJYYZYH6tYkHdjhn4232LGWpPbjxefZ6LsDZT2UDNZijUw92rvC8B8zv",
  "key34": "5wJVUMvA3xUpP5AQRod1pfrbyNsWneFtE5HGH9kiFrqsttFA8kMZkcXqWt1LsYRTYRWJsDHLwKdzApcGcHrLURUZ",
  "key35": "2PueP51KDr6jtWEt6TPtnPtb9Lb8GeTqkVexfdwLaHs358D9zYWLmXEWVg5kn6UMiJL3ghuXDM4vdz25MeevicH7",
  "key36": "5kD8xq7K2vJdRDqEQENqJZKJmnYoBbHsFMXJcJNvvRMwnofhFvUPYjKTqGiNfcJ1PPAMe1ZVq1zWnpss5ZBLxhtq",
  "key37": "56v4o8VwXTUsCht3wtYRG63vr7fjZBSzKw7DDJQM17VKXVqegRrVwc8Fp1FwJNK4oJrAUMzRLf1hu3jXYW2nuG6F",
  "key38": "23dfWRQcziEAXBtTL8h8YtZovFnWZtqNGDP2d3jSvq8X8XZxbsycjUhu1Sj4n1VkJi2i4HCtSGpZ1BSV4HouyofU",
  "key39": "2Tc8Bpyze1NENHfDG46DD5r2hyhikTNCH4aoeyXEDXR4Wc7hLkDEsr7xWWc7RA8ZXQqJLgyVDEujaD7yhHrhvgPq",
  "key40": "3zFEfhtMkWk1DMpfyvDj8MF37d52AQdfatubKBuYHTPxmSd3hMGk6jAp9vTZSmxhNGK9GqTP7S2CzpcDYEehC6wu"
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
