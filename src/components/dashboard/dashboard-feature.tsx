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
    "5QsGfjKnQ5dmWjoM1wCiu9hAM7URR4mjSfYRZFmFWXWrkSCbYp1J5TB5CZZocWRpFUdrGQRPPXhmQfyHPEFBGMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLwSFauhepyNbXrgHX6eqCrB78tRFp9BNq9NrmXGBHynnjPQLZ4RmC6wYVrPUWpVAdoBSC4adnyDe8uQ4zD34vM",
  "key1": "4rLatvsrTsPCL37Pz5EuZnGYC2Kt9gr9Babso9kvEnKPm65LyLMjbtgQgi6gYqwdem4M9w7px7JjsW57bswc31uF",
  "key2": "3AquTTHVTNUduxHYwWp7cT2KCoCN6chVy4ZtQ54DeNuZfoDdE25xNiymKueV1Gne7n6ZYfeBf4drNQisCjCBYqZr",
  "key3": "4jnKy25C9tnbUAeLxvqfsMKwHvfNtbSFJ9XiN45etccJh3vvR51HddXhzPDEbdxxEge6fU4ByekymD5JCZfzQZVH",
  "key4": "5tDiePHUn6WdYcwafd1H5Wcjnte2PQ3xFZuqAYNQXzTD17hV9RhYnxrr9JMEbYgoxnjsAg352vzR1pm2A9iRMkWR",
  "key5": "2vKs4RsGs5Qcg6sqpQ2xc4JPPcdRGoKSM4CmGuDekk2yYuHyyiUtj6sY4ineM4Bqs9kdADXRCinUf2b3hQreUoPW",
  "key6": "395ZkK27LWA6avcD89i9pNw9HPRWXBGhiirfZsuX8meEa5GmCKe7f6wcGJ6vpJzUSJ4oWWjqLDaxDkGs3TpRyRTo",
  "key7": "3xmJwQHyrAEX6wgiueBsLoGjybqP6gaJDfvwWP1c7XcjLYtN5tB3NY36YSmVdH1tBaKMUxcuWeZuj2DeJM9GZ8Nv",
  "key8": "5HT6tKkNdDRojKakN1hMT4cqqb75TKGmc1R15o8ifo4WqK4eexeaRerZHnpjXnECNRrCvgXZW8BTT3cnMCAwv3pr",
  "key9": "4Y837H6SFY8jFtTkkZdgPG877y3JgxpUMwrYAsr9nnxC26dYqnBFdg7KE4E2PZACKdeaPKMgtvfCRp9z2xD1FQuw",
  "key10": "3FwQGegCftqMGFRtrhCJPdM5jdkHw1g6VnP8qtKRjNPkdxzJ2TYKz8sAoUEzudLeBcjetP9jL3xyrLttYUa2K5VA",
  "key11": "3gvHqKqDYCx5NyqDdkmrYNfJwNMgsxgAZgxfHhmDxGfDQAyGJsyBpSUyWrPGNhhAxhBV4Wx1vkysEqENatyCQMM5",
  "key12": "4Lzrg75bGSMFwC4NNnRfcuMFNCJGmYqPRgRwLkWP3UmTeRTF9Ljj3kQKZanFHCFfpZpJ6ucHXDVLP3GxHPCCUo18",
  "key13": "2wR2HtAHQ99ePny54gLZEKo7QSjZ76zDCiaBd69EGmxJvUiwq2j6tBr6Gi2owsjXifBdKbwG2qcrkFPamEYfdRag",
  "key14": "g5Q3Z5K94N2zyUFDVWh1BU9RYoSyLF2YeXjHLUWsahaT7KF83jWd8JaMs6cezNSweVttqtN8ZBZv8dcUi27E4Vx",
  "key15": "28zAp52S3ccfkva9LsbBDAxnFozp2C9259Mbtxqe8DMPqTDDB4RzatWaw7QAVEibG714B6MqrFTMo8aDzmeg6Y45",
  "key16": "3FhVH7Ujh4yLEKZzbdmL6UKt5h27pMxSnuiSP43cTquJpxtrbC1Fxmbb1grscAnWZWYMqnexDy3pCrWfUYEj6HH2",
  "key17": "5nqKCfegZ9EnfgfLUdGt4R87EZgTNer6EqLTknz79tnM952s42JFoDhzoeGanDMqHQwZ8vPMpVkDzTqSN2f6r8K6",
  "key18": "4GbindfkDmNwi4PAe6KGTrKb24nNvbKTx9WDEptuYeh4GWyvCNVJoni37YcvXny6KdztGqLMjGQQk2uYMAHeP9eE",
  "key19": "3FqZKsgQu5UDSHuMFydo2D1v9jbNx4g534otcHYgSPq2Gpc9mwFLHwSaEsKCjbYg4936fPkkhebyitWjRtDt4EW1",
  "key20": "3Pyu8SyH92vJk3eta9iZVBuuhMUfpjBU92b8Ztkjqni5Wt8VtMgKwFVX58128kStoMDn9RZEuzkUPgiY4PCbuvR1",
  "key21": "ZfpX5zkCKnRiqMpRzpBnC7m6nt5sSBZmqZELFRE1ysHXvTbGdJaAXkJXSJjjD5tQ86XBjwUBZoJUwnrbKpYCAMz",
  "key22": "2dLzce93tTNeKJB7UCeekdUqoQweoXZ48XkvkoPRJdQnuMpcyMEub9bV6tFcYptXMXZjJHdzRQK1f1MFGRaDLGpP",
  "key23": "yzAxMQqvAEg8KJQThEn7G7zD2RhhGArbFUU3m2ncGh9WRGsFXrVxWDbfrCRKHJ97dFo6eeGFnrsRRfqgGg3KiDr",
  "key24": "4C6Bhz6vrQVEnQZJQoz1YpoKJz5FpANbRcw4d4WpCVsVvik7K54XJroK8uGoJi1rEvJcV1R3anGAPBoLictFKcUs",
  "key25": "2cgTrWA7nL2r8Jvh93h5fuR4X5YiLNGBgxsyAjr3pgXP9Km4s5TdkEqTM9FvErf2kmjBv8b8SyhfyQWR9bSqknea",
  "key26": "4nSzepznbqK6QWyNeDvQBzXS7hBrwhNUah7deBAUwqr9oSwoKjQmoxY4WmMZZw61ACdnKhJfaJdpUWTk81tzYqTe",
  "key27": "3qcfpr8875NxNXs9DEzgYgnbz1mFNpekxKeep88mcJsJUP3RBvqG3geDb6XcyrU2GY6JmF6YMfS2dwLwpBCzwWGY",
  "key28": "63UEhJ9CKV6qiU9dSx48enkigQY3uPRe7BNK7ax6Ck825aGqX5AebBWaj2azyMJr8up6PGqswawadaXEnmbyC3SB",
  "key29": "2qtKjEXXGSQxXtU24GVssgPHM4LBRiw2CGfQAFepotMVbvSHUHexvdS3QxukpoLs6MUNraT3UaDj4HsXVEFvvxUd",
  "key30": "3ATaxSFadoK8tscBtdDYz1JKH7HeBNdrayAxyz9iQsHc1KbDpPRcD3u7Q7CjbS3S3Ja9fNk8D1zUpsxTaYGQZR3Z",
  "key31": "2UpNSJfioLHyhroG6e4PB1JY3ieT8jAHGpoxbhEoCgsWM5LEUnK4ha4YUmJpaVQd9aB3tm2FpdzqdJ5qrnZToV9m",
  "key32": "2hESayUPqcQkH2coZvFpZ9i7ReHop6JgHUd23UifqXYkJB1pchNzK4cLgqEjiRDGdt4t6T2b7CnsYSGoHxHR1rnB",
  "key33": "HboW58gVwEFmDtYLUAymtBM4yi47dhTpSMs2TjCKAUHoreHBGWpZBw7S7z491znWAY47EU8FCA2g4WSM95DjeoA",
  "key34": "5c7vDexRoZWs1E3aUceo4zoZFW51RBi8r4BUX9D3j7ZuEoWZU8YqVvp4JVnwEPAgXibkFt5t5t1YS4QVJ3oJUrcx",
  "key35": "N1GwiG1ENktrL1DthRi4FmpWfpwwS9rQ2F36Cwx5j8b9TYiXHUkAUQSUwWvZQprZmBGPJFkbVH6Z5MCjqyS9oZG",
  "key36": "FXt8QfqMW4DBVU7xaDmJY2fp4hDUVGNCRQbuX51jm7cVhaXnLBgHx9rSaewf4ykC7ZMPbgipRJkjJsmqCPru9mJ",
  "key37": "4XdurCYQ4PVuUe2n3RsCFJB5fvtGJJmqMN5Lsuaq1mJT3xgm3X6kUGw9KmiE4X7pDurM2S4xrdBLSGXUeensA2Ed",
  "key38": "yjXHgsRuHA31SisLnp2zksA7AkgM68qdwT4nVKqhrMZ1nJBc839BLMHNAC3T4nyxbq7rV5rmdse1afSHL1WTkTD",
  "key39": "5HctraEptsPPjsQyPxCpUwetAT38nKvLVZBrTNeZvjLh2Tv1bzBzff2VptTS8aABMsKAVBTpb7rS4PxhAL2HgYBS",
  "key40": "4hxXvs26vhKCfPZ9kaR9k1fNn5mchgjBa5jKYVjW5APwYoBNWkr2LG3HzziKeV8Qgfpq3GYR23DBchBqj7Z2ysev",
  "key41": "2XC8Tvj47omqGxLnZhBT2dyjL6BFpZ9ffgAZb8DrCzjEEfcacrdpjSiiYE4uj27NbmaKyUPh9UvGahSMM1qtqDZW",
  "key42": "V1QZoTsnCEV8QDUR8eYFnqP9dhcSHmJaufWJbJkqC4jQZu1AcVdSx396YppnmMBJ51xHNfo2nChntgBvJ84MLCn",
  "key43": "2Caz8NaDy6nMXgzEC72mT5xAffczrNrV4G2s8fKmPyzWWxexVf1GhvAh8kTQgSbUbbALHoKhLQviNntbmQFFvDwz",
  "key44": "Vgy8rn7VamhmMPzpx8jTtdt6KdkxyH9zyzy1UW67ffoZY5gZqSrJMQA659TRC22En7jjN8zny94y4PkpTEaR5nW"
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
