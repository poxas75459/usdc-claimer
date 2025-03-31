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
    "63wUJvut56An9pNZbMy7GViXk3SoyPQjGNJepyCepX38CpNQBj5ZMJFj6VSoYF2q6QvJGqkVs2hnpJ394Nnbj4qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iY4Qndx6qXZeou2HkimHcvnk7H62FLnLTRfvriMQDHQPCoRo7i1jS5gry6sUzfLDRjaYhKM19Qa3DYDwjRarMbc",
  "key1": "4dak8RdMVwHZgg1hJSkXQy9Si3oJt5BqEzFt3sbynzoDg8aTzWmMKgCn5n1YyZ5M4VeZ37fMoYdyPL1BwY9bBzn5",
  "key2": "5nimkfpCc4sq3WkQvMARa6Ys7FhiJqen9dXd1cyXQCMpdUfp5h9Yk7dBu7eVpXPk4d6PohUt3stgn6qDdhMuiBko",
  "key3": "5P6zEMxcWKAgtwxjFsA2izv1ytFNP7EtAooyMuopFu6bmryo29xPtNi4phU1d7bfPxWQoDjvnsMavCtFGU3HaFd1",
  "key4": "wWSiRmuBNGcRgYb3dMX8W8R3oMnwi8G33BTcMo9WiVmJ1UjSctj5B5CDud1r3YYUuG9kWcGBT7aiwwGf3DGhuUo",
  "key5": "8WiPvRNU9FRhUH8tx58HMt9rVUNRJMHU7um8HtGSdroz5nbbVyXkgCe72ParrD14CzJPdqHmtZumvoiBZGxVLTv",
  "key6": "5KDsYxeipoeuPR4ykdffUqvB4SGujRfuqA9jZqxn4jBQzrwgmneD9p7PiywCBfxv5qN5kaEsvh2bdMKJ92Mzthmt",
  "key7": "5vtG8skLftyi37Q89CwvdtNab93oEfpCtaRcXCnNEamQo6UKAE6oyk9YDUUtFWjvbrwPuAUkWQZhat4CjonFwptR",
  "key8": "5wF59RRbcBvA7tetsaXXoCht2ntygacgJ8wddzm239Prp5Dq374BXNSh35r2jg21qxJFJDNrgcFgpQ3FwUgsBeY7",
  "key9": "4TJ2LrvTWWEN4mCaCZT2Jv5cPTqH9Bjv22rYZxnoNunptSdY2XaqVHmEwJd5LESRKVE6bgoDUG2jHnBHEsnrR4UE",
  "key10": "3v63wjdADvnHAH4Zemba7LN7pdtJH2uvWbh1rvSfhS9aG1v8SKHwdinywvMEnWWU6WcgoDhsmKqQNyJkGM6e7rMi",
  "key11": "398SgatgvKLReFF9jjNA4Hq3SRQPTKMnxxbHWbhQetCn4iuCYmucEoxjVaeiDYBcKTgj3v7WZ1cumw26JeY3W3m1",
  "key12": "3MvcGj6TWte9ycjGC4aiMH87dsWjyncVhCpu2A87YghNw1pQDDg2cBhF66hpgdSAuDkvdccW7bV2RB2c7rohwgsm",
  "key13": "3JEmJhFz6zBYEC845X1rAHMwnfML6L7HUyqkqnMdK6Rntpm93hKFY3dXY6QPyo4PNK1nCFKaAKVs9NB34SWHgWVn",
  "key14": "2iSx2gLaV3jxpQDZfoTgZmUQMHSKvyR3fdSoj8r75uNmuRuM7wZqYkp74hjPYWVkSGVbVG7AYLmAHigKb2Au9Cu5",
  "key15": "WogSLbsc6dzcW3DzF49eaqye3aeF2QtNmqsNnWB7GjJwxy8qT3iHxMH7m3EhUgQdUWkQ5VJpz4a14yrSeZQ1iPL",
  "key16": "4EUTEEHtJYPQ427zbT1StdDhocR9cuHmnNz5LQ3ZwxQetEvrTn3rF7Dqp5PiCuPtvjUVJ9C9cK2kPfi5pDDgYByM",
  "key17": "2iLqZPCFhvHU2TSyNj6idTsEvmzyX2nJTDWFqD2X7YyaBKQeW6mQ6BfAKb73swHUhGwxP67kBMyobyM1imKDG1MJ",
  "key18": "64ZnzBzbAJKE3QpEBWP6mQ8ERXARRJckmADrmCgr8GHvTpuv5jPFsTCsBanyWvGbB24vLv6xphRPrG97vN1GAV5Y",
  "key19": "27qxr2KmxEiuaxh2hiNQuwYr8dFHt8baaNaz6WtDJe6nHkBvCqxMQH4jzUp1cGnErQ76nd6cyiHyPG7WKPECvBgr",
  "key20": "VDdKxdY3qQY5FkiVXqzkHa26EtqfSJddciwEDGZ57vUxTiBDo1mq2WfY39Afib1DToEmSyxVdWpEuGi3587wpRt",
  "key21": "r8eR2RfXXKerRLnZ9LWtUP23faWdACFSYfaH6kYMvY3uh7Eea1hrQPjyyoovgGN5bU1vTjiczSjPXoqid1QkjVT",
  "key22": "31crCrGY2fUTk26t6hFyKBKsY9GyHmvAQSYmwAEKBbdj9JVPoGcZbKeqRe6xJ8hxuNvcdH3sxyAesjxjk34PYrJg",
  "key23": "3te56RkJjVggERFPFMhreLbF8F9AwXYVfDJ34YBP4JtwomVR65xxSU5WrmzLKeajbkBvDaAUTRP8jGZpbjXFpSz2",
  "key24": "n5kYswsjysykh1sorYS3xVxwT5yv2t9Wbrt7fvm55w2Rc7dkbXr7bawuEaWojDXLtmg2bDwwo3WLkzw1JZcX9R9",
  "key25": "2T1SpR9DYsvD6gHjdzggAtT7bUqEdibNJ6GUinXsTAcukGyJQofJ1KcshbWFPRqGYL5eXi7dN19kg4woqP4ja4KP",
  "key26": "2TGmWKKQLfhW7ZJBJCsYG8k8hatxHLnDUkCiRVH4XSbCPxJZd22Sey8cAKgWUtdw2fPdbsrY1E1HdethMh2WET3U",
  "key27": "3DbGuaEJPjSa45oUANyEcuL3o115nybyhz3WC4UCGhzGpiSYMYTg8fANgFauuYACBTcd2wQT3XwppAcHWeCrkdge",
  "key28": "2RwFvVvLjpms4u7pt46Q7GXQKtQhEoUoPkuEXNS3N4q3QXw4mi5DRhRTTnn7Hzu7LcinEsKVqzScSHT27qWKyaBY",
  "key29": "4tfYwWpiJyYwhuYvgJFRBQ9BYjxX1hsasBBTAj6DY2yD1NVZ57xg4wdV5wzB7B9Wk55s9vHhJAeX74FrUqRLeza7",
  "key30": "4NGQPu7UYBniFrKTNy9jVZCnarerVAHnAspZgsY4em4juD1cYCKNUYUSVZZt386hwxWhyLAPFucWnWxf6heDoMcL",
  "key31": "3uB6JToxcCzYLeMhpGXeGKWy1Ho7rMkEMhAARxvCyRchtUVNQsg1GxLjJzVHVSFohfV1haRv8hCKPUx9Ds5CnzkU",
  "key32": "2TDzWQMvhZS9ZnrdQgFaguyeFXkWYUi96pjVgLK3naDanGAVWeqciR3L1Vv6KpVmHQmNH5qKXHZ24GW8W21qV8aJ",
  "key33": "5ffweCMtW2XFeK1je8nyrE2J5w1FgCPchMDm1pvjX1usEE8TaztW4irbF92XVwxZcuNGrwqY3B59f6jmt7xWvdsw",
  "key34": "cYKgxxhBp29WFEK2EkRSvERjgTocN5U6BaAaYNSqzmpd1orRKmogef8mtHPx6czeN8Bik9rnUKMatRaU9MVHzaK",
  "key35": "4Ej5Wq8sVeaA8z5CwurE1d9Fhh2Urqua6HWc8K6GZcXaCFrpAxE38VytgfzLHyAH5pGFGwJQRfPAwmo74Q7SQfYk",
  "key36": "3uZ1bktTVHAjrPWbjLFsJbwH7iUyvScoGS8GvVaGLSk85XFpkPHGVqEyGNCvebWNHuFksyKUewHDhjwpsEbkK25M",
  "key37": "5eRFGjYc7gdCtW9qxa8LhAEuLTGyLnNQfQ9yn2NFfRhxHDGekXS2KSv2eTtdVjn6V6Y4RUkTKAzf2p8giXjKycY6",
  "key38": "y3rxubv7wx5tYWdPjFNZWXz8nrA3nN1Er6oY4BUyx3j9fcW3E1iUmXuHivfjbSRM6LNZ8SR6HX33E2a6HDGou4s",
  "key39": "4ypxvSacJcbQWnRDhKJNcsnEoNbSEWhKR7Xt1urxkwaeKii2nMXW4CfkcG7tqcNXdqHUCaiCKwxVwdPkn8vLFAw3",
  "key40": "3hDdQGfvL7SkcjC49Lx99rPdBiqwAxGzvebe1yhB9wcidGm2ZdFbG6ZbrJeisJnBPKuQJMWqzErBJ6DYCKoBaHzA",
  "key41": "596fN6BdRJXf1UK3sVzNPMYpCMNrDkwvDjqb3atpJzrxAAAAeGUjqubu8rAVXxDvm7moDUXfK7vJ3oqjgtBCS1br",
  "key42": "3ftricTkWzqoFyhJWYbc7x5Fodb1vM3FTgJo38q7ZtzUuGR6XCWw2rJ6Q94MsKf92nEWgWgvbX47JckW9tBLPuHA",
  "key43": "21YEj8Ed8M9BWfHyus8h8GfRiA17Ven4ocJasUPvURJjDcS3nHEe5KSzmhtp5MPza5gHo5KgdDfv5UvmhLq7sjkk",
  "key44": "36Mv7JbdmmYpfg5tmDTE9wm82J9kGpDkviizuWfb64LFp9CPc48sYsckaHEA2RrgzsFtJ2cU1esiQqdfN28DkgkJ",
  "key45": "3FVuBwKn7aQQU41vDieKPKpq4TetVv9s51265XE3tqJZdTzrHjzxzZK4PMAQ8rgvR8zKRnNA2VtsHvbkMqVfgosH",
  "key46": "33d7u4wfNzXzckjDnuvmEZFJhtpfgKKUtJkLgKLTNNdoRT2AKDAAGPpPVjT3a4TmSeNoYYAmkz1UJBQqaT2tumUR"
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
