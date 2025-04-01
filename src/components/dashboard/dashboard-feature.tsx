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
    "3RPtrbjHwvywbiKb1jPeFrqQrJb69eKMUPpeRrz714vG66RrmzcBFaX31c1yq4Pq2wuCKtAcMw96wsKKeG9JNk1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjxZPjY6HBgUHJnEXjVCVSAQHqJ6S7dEzgpC4FLBWen6duD8QgLUphMkYEEL8wyKi9ULchWf5swGkwM5WmKQnCT",
  "key1": "4XkxvysSBuk8owhJesze1Fq2jJKKNQfX2zVsMAiVNniPnthrGeBMiM8JvxVRyL4AUF2G5eM6P1nJku6mBDs4Uzm1",
  "key2": "5Hspv9dsbZ16yBq5QsVLbwDgdbGH7wexChweF2pSBJBUEduYhXGrfE9bdBQMZJvQax9JYHzDCC6DUtEHCoX3gQ2Q",
  "key3": "67gryqXy9MpdE9oxsXLuKQLHBFkbjBvnT43Va63wnVXFpMJW7qKHVn4FZY3BRJkYHvhRhtC35LpLNXMt3fVKzC53",
  "key4": "5AA9p5gipRixcWapjPAxPNecru8bxbGX96GQixJPj3W2sCSiUmPH9ifcQ3atpuUXhyxJHknqX266jXpPqNSx7m4e",
  "key5": "WVViJVCdCqmNdWA5jDivwYbimwtgmfNVYLEUVmoZuJua7NrocQ6a43yef8EBvnC2oRaGxb5LvLJ9UGbfeJKXuES",
  "key6": "3ky7NJA5MkNudrjUj3K8i9GPC7EjThk29kJK8eSGGMhjmCiuewhpo3TKpGNfn7KVFKdekvfQohuVK8VpXkLu62As",
  "key7": "rfz1oVY6ZsLdkFoDVmB6ejThK7dmDxhmrwBfPvJ5MeNdL8YgNRbK3P6ATNWdM6uiGQTTihXmBLXnS8BXSMYERMG",
  "key8": "32JDHf9mf49QdRtvSfR3oKf7oesJsyv2aEcgzW5ufo4jH9WNpoYHBq3rXJCASRd13mmpY63Z6s7CZapvABy8zEh2",
  "key9": "3KCKVWyZzrgghEJvTYiVbZorXiKmAqL9XXc1pXjJhziSkgMHnyNhwFHQ6PHA1PzJGSdoE262q6AuZtkt1njRaYts",
  "key10": "SAPe4zwyQyhvBgdCycYi7JXfikeyPUBnVNpCcUGjVkFdYh81xn6Uz6o9JGMwYEngsXu6SptgWN38sgyuYvmHCww",
  "key11": "4FNfZTqf233XaGUJy4yXkJeYRvVJmL1M8DekMCBY28Q2mqQwyxybvncxQyAKQ3BTNvfvz9roHeuz67yPxLkacELu",
  "key12": "33oibZzhzn1QC4FFWpxZV4NKyWYGUJEPW4Ko8kXoseWdtJj4Nf45XXEDJkzZBmsb6FnzJ9Pd7VzggcMMY4mhG4PW",
  "key13": "3utePPfEpUVejgtFQxBv6VjRbgJDaFFburCkFyJcrokZEbcB5TTQe2gWzepifyRerpgYtXSabWjQSsHeD6qFhfgU",
  "key14": "5d81Nrb1hJACkkiLhUz5B4W55PSvvyho33vfU6JX42GYXGAFtmPgEKTHmLSz8RqsNRHTR5eZnz5hyjiKbu5aA44L",
  "key15": "3G8jSY451kdCMrh7g52gMFrTb17ccLczXc8qNyx4TNZaeZrVEoupcHvcoNaDnMyYVb6hTUcxPqdMHkHfYhKjHTzw",
  "key16": "5j784y66yaoZZ9PHNu9CdXxDAkpMavoRrXiWeuoPobfjYSjTk6Su6AyPtP2B2bkcauW9GLGVrdSaetVYeG29Rn7W",
  "key17": "Mtnur9LmuHUZnd4nrS1e6bPVLARqCAnYYFJ6E12PMN6QzYzKHPX2j8SoeemLyfhxmDv5hGmgLt1XQ88dGGtzDFe",
  "key18": "PJ72brogpGLaWnjXYum3UkX3ndWiXo2W69MFa4ivY6NZm3YWx4CWXrPKc7iqJrn4jYHzPX5Gjpbq9Tb4xRw8Nmx",
  "key19": "35u4XjukBQnxZeeVd6NxiujNh12u3GnAex8oMXCecp7yGcJPBZmsi3z1B3E5BrAYsR6zNZ3nqYTpahgEMaqUWpF5",
  "key20": "2r2K6Yj274ccUKBSgdZ973nAwHnqBQmCfQVLRcQyHHQ3cVhiVgqH9pKoeeKRiRApUhDhiRQ554u4V3RW5TQFZsLm",
  "key21": "5cdqyk3xHKpuH7PGm7i7BThqK6iJDv8ztpywQUxhDfGhNEbUnqZ9w9WRcSJJhXggbsSXUSCNknMZp5VVNntc5DVH",
  "key22": "2GqRQBTUQJy9zwd6h3Z1P4FvQEdd6tzBxMtfxhgFqL9cgp65wZtKRc7DUQAUp2sZuJKqTwD2tmFYKJpD76TpZeA1",
  "key23": "5tUraN6TeXxp9PMg1oXaLBjV7dFcgernHX4kouuF3U7BQ8VvPsD38fY7FaDVf428gacmgyQPtE23TgXVVqcayrCG",
  "key24": "2H9QjurvKUL31EAoPwhDsCPRLCogs3aktkxRQKKzfMBCMXo8cgA7zQUw6gzCtTHe6a11KfVQTdGTwoHvaTmg8fcb",
  "key25": "3DCAnBPJRbD4dBKRvwsFJVkgLLx5atCYrAQ4THL649uL8dDGkoih97o7LrwRUd3hUo2cBuWnJtZGem461ScVnW1m",
  "key26": "YAYVRSBAanhhHCLrYxic8f9BkGMKDHxur7hUkUSTYhs2CDxX8AV8WkLrSwyrdKwd2w4ZH8xf37Uw2ND31Z5NeMr",
  "key27": "49tFAsMq2pibiRY9aof8pvKWCByKf9HB3oUB11smUbcCwd1xuhPYsCmZhjWZpEfETv31PK8se5HanhMafTuBMAam",
  "key28": "5x3krQnaJGrhZ9B1xMcoQJxwG8t9CJRftTZNcz7RfdNpBbejui4tL579zWzax5SvPnUECWYvfxXSWzsgYWjKRfDV",
  "key29": "4tCXXr38KmPjWwFpo9HqBYpKPLmi1sS2wnXCtd5MYzJAL9Hf4rnudbzBftvBy6rgMQmxwuUYkwJqrAJ1ULCUhFew",
  "key30": "3jRU6WzbQmdxsxme8iVCcWX5EkuzTMa8cxqDc2oj5TkPDGpL3bA9FJ46E6cRD2iukEs1WDofAxoSrbjmLps3dgsM",
  "key31": "2sV1BYURmukCJeYDga5GXnmxHTXbmED5cKnHV7szRDbvCj9b8CBqGjYmNKLuNpxhouRTcvsjX49YDGCt8yunXuc2",
  "key32": "22L4qnvQoQVxYez324xdBt4EknE2gJNZYCmnmmhNZhfgsd8GFquz1Dit6TD6fi95UNaiiSGiGadyvir4GXuyqUFs",
  "key33": "CcYz7zzY7vuQy1KkFCGGuk8QBkz1FX5dTcdhn3aE6FLgKjpdxeUCnMNsZV9q4AcHb3TcacJrja3ALprGgKJHxYL",
  "key34": "311chiEGSuHqXSFXmf5banYws9DSpeXcDE1MFkyzztf3CwiXyPRdbx7ZGd1mKRxTKGN5Lp5J3Z5NdqCLgQoZNi4H",
  "key35": "4mH6N5FpW6RLEJGWwuNY4yBzMNtk3MSpaorHzGfJZZMUqaKsfADDjBuFLnR5HqnZPC42QEZ3p6G17mBHqjmsP4VP",
  "key36": "5VWgLJKYY2tYe3hr789YzdmnSyBvn96YM8aYtzVXBhwHAK8k1pQyarRWe1XpEKZW4j64uNg6d1BJJ7i4TGJH3r3C",
  "key37": "4X8c3mJryB3zbYGVoJE7ee3go3fUoxfGPadA9GY3uaj2jDo9CckkSGCCitrabYhjdZ643uApdNqqXJHi8ngRFEa",
  "key38": "2QXPCmYMG8d1RTJV8u8wtxtDfzysHJh3SoJYQGUwkUq4ZRGnfz1pozHnC6DzGATQpABPiU7bj7ch7Jk6oZAJNp99",
  "key39": "gc2MruCtx2z4gv1RbwRRmuDyrLUzatmgQbAh3PUm3acbx1KLj69G3YVJmbUgWnJbEUaf84hCYsuTgbTygYXjqR2",
  "key40": "34EqRxn6amucuc6gYWrJ5nQavpGnw2QXEZ7bGcMbvU6PD2sR8KhU7J17feAt7yePHz4HoKnCT6TdZvSKo1Zt29CM",
  "key41": "5gAExsSWLSJrCTGvMSy5MhsHXqhcnrqCjwneoGwVeyTNo6DNHWcCbqq19vNFR8nmjaHhiGfXh8cs4Yry9seEVXxB",
  "key42": "5QgTsz3cWNr2BGqCfLhyqSEBafTBwrmevpq1xF46XQKpAfqfkTZ8suViP26dCSLv928uWq1EXNsJKyKkE13tUnJv",
  "key43": "5RJn6b1Ww3npzhJ9LyCa1y2WvDwn64M73LTUErsAagueVoeYAEmYqZ6wPYtd8iETo5c2grbqU8JrxtbF5D3vJvHG",
  "key44": "QjanEUxwgTSZMdXNXjYEtp6KXaaEYj3ee9BffTzsTeHNL81T8kE2UqGrx6bommSVwpbKik43fFrWh57GHh5frCB"
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
