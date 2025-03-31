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
    "62wyNzQ4KXg44WKNmHjGGULmm4XzsHhR3CRopYysLeNdMstfaoVvoqbF9qCCmNqjxkK1rK3U7gRbtEdDtX6ZVrUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MJMiFm7rxkQADnZw6PwNNn95rd7Kq3K62juMFV4jzXCHRScKitKq4PFfv9Lu8S4EZqrK1QMkwnUwfQwxLb8duS",
  "key1": "3emvrPvwCLSLj2yevyLoQtdnvg58vuhvmxZvamiW7NyHqEW1zt2HvmRXX1ctYs8UvTdLuH7abpZ6dGrVK1fgb9YX",
  "key2": "jQyvG24apWojKEVW7tnba583cQ8ZUnfJjPp8hyo3Mfpra44CcDpSLr59x8yXWCVxaUgAEZg6kkNVec8vpYs74Tz",
  "key3": "aGSWsaFEpVeWK2RjYqyS6vTjLgP1GK5a6TmSsP1T8QbRQWJC6EjPZ99wQLLG156Hgci4EZuPbNrSuCyLxoCqzF3",
  "key4": "3ZH33HWZGJmt9xpC1vSFykQdmvRELzREPtbYsvDqMwrK8CnhRMkaXt5k6cEnXBGXRr6952dX7y5uituYoiPe9z7L",
  "key5": "2WaA36SG3WePzhDRBQPUqvArXuNzQfWsDvLevgKGVKn6eimGnVYSpRH1pu9fEoUCzTA8TjFYMpDvxDjM8dH2Ba31",
  "key6": "5kX5P87h4hzhwcmKyb8AwdKNHA89QUyumxuxAA6fMp3Cvyp7HuSUEKnHjeHJfRVUBDEgBqczMdvsLM9HNaNL9P4C",
  "key7": "i4FTY7idkUkEXN7hCdf9wnHch7MQG79jGtCZZ5GvtsSZabHaf6X8eaJ2uHThpSm6WUTvtMvKbE4dmieWG3usdnK",
  "key8": "3osz71ZYSdtySmUEWtE9k5cAX7DXageYVicGXbrfRUr7vFvgmaDeweHKpMZQt172GgHi91G1awkD8k5dwbxGZPUz",
  "key9": "pqcN9F1YXTBqdpRA9K1mGLCTAGSUYVdG6msHhxYMoQ1xwnKy15htE2S4dzehzzuwWouRhLiyN6vvhX2s79JtCZZ",
  "key10": "2Z2bULsZZD4NNUCGGzDdQb8SGVxH3PLXqbDhYDx21uC6iyTTJFLgqfqYUbsWESuZdtFaik5YjbjquWnbjNtsxvi2",
  "key11": "3Gh4ytr3FxnA87PwDMojYd35en1ZHR2tgSEXes9rJcUw78nu52PuzStkd9ZjqxsqEeyywbJ93vjzXKxRXdFSgwPJ",
  "key12": "4YF1XB4YVEJ8jKPR1ZQYXpwH5NwPHvn2DMUJgyVqbHkJZcvcXdFXzqbUJ2DN2BCeHqyKGUr5NJYTVBv7W7LNV77C",
  "key13": "aa6yxL1S8866Kxu9dtHA6CDSqmw3tQ8Qx43sPoHPMByWdDa6MPp1zemFTfCcPRq1uC1AinKqRkjqXen7Pf6PNba",
  "key14": "tbFpjBJJpFjojq5kWByGKGE1GyBUgAZTcgdFQQ1YGAF92VtLjHEfFtcic9vG5jtKWSpe5m94nUGVBpHY4bNri5a",
  "key15": "3k43UEmBqdphRDfKKHqUb91X12KN3FRXtH6zhxvQxGZcuP7QobXRdxUzHzJgQVPiufeG7BS3iyzdxWJwxXTwqQwv",
  "key16": "DDtBnBuHVixrqNaKDHgzt7aEaBNZiD8SwETQNRHAF9bW4rX83xz4GJKh1Ve8yzDLrvqTnQtAwfqSCwuMLeB8MVS",
  "key17": "5ezDasfDwAzAo2nbmJE9XsexaL5iaXfrr8Fok6iKDqUvWjbvVPiZ6YRUX3SQWeevtUYwU49WNz9XWJAcJXZDDwpc",
  "key18": "359XH7jqGT29MqevwBVk9fRojuCxQFeAb8u3GR9FmjeuBZH4b9GQUAEaPv2DYBWma2mYvBy4VDDoefEMtMEaN2n1",
  "key19": "L7G58UdtRe9fVgiwXCAW524xtp1g9JHG85hHYDmj4wf3z79jMGazsGsojmzByAqpqkpDaRjP4LVdiREmR64Ku1h",
  "key20": "5qeuyZj7gwkvAZzxS4HCuVKGE11EiYraHWRBZYMWEiid3Jznfcn7Ky5B2ePXZzgWZpUtiWQiRKbxduiUbNiYmG5E",
  "key21": "66raTSyJRNVTFhDmDKqL1a4KRS7ssmqUbUphY6TySdqAn7NHEhQhXYpCVFGXG1v4R7qCrRAJLHVNpc7E93Ci1CT",
  "key22": "3yqy9U88peB7X3qqorPPAFiso4NWNqHGLm31Grw6zbstnpPHbyYD5X7fpH9AdTS4CXxWLzXgiSpHGmuL8yepdBF6",
  "key23": "3aDpog6jW827vgcpLVRN9Pxbzs7qjMS1apf9UtUrXak3TigD5Pd5tdHmZzFTYYxxxWw78LMEaxXpvrp1jUWgJMiL",
  "key24": "4tJ7uEpus6zKMCuzuK8qkpsgDoFjwDf84ug6kRxmnar6WKPHrDo2uzoMXNW4qoStox2S1pt8JEMtU3WPqRrgje4t",
  "key25": "2TNrSzZAMXmSwTcQkjB79ixiD657jygeGxPVuZqXAhDGHCTN3dRSehWxpHZrrRxVfXjECQ42qdAFYHxbectrDgfZ",
  "key26": "h46AVEGoZeniX6qfVfM9iJs9CC3sbAGpZNNUPGvL6dtx5UfY9LeKoxFkTJ2hAw8VzbadseNYwqKeEN9bQUD5b3B",
  "key27": "4szxzHVTb27q932NeHWwnfSm1BPoADNmUffdQeNpM2rb7apKwfkeR12NBmdcBn5kpE9avCq5fVbephxNPhkub6Vj",
  "key28": "AHMLqdSC41naVBcoFpyFu5V9fQ8epaxAT7NRzXVcH5pR5RR5WwmFdx5BSiqkHCq1r9mBtSxmKxwYzJrq4EpnxDn",
  "key29": "3M2FPnNHVuCcAhU2sg8DGR9Qek7ngRNXPvcFEh2ArKxK6ih3pi4HDW1F2KmRh6zoyjRu4t1xx26aaHUwMNdpTdSM",
  "key30": "5BQHPCPnUtvnJyCtq7qeY2jNYfrj93xdtdxRjje8qrMcvt2Y7NphjNSRmmB6GERbj3vF4Yx9uDXKo4aUYZTEzxvh",
  "key31": "3977NEUeaC7iUPjRQ6c4sUw63AJNxP4E6zDQnQWMpbfp5FUbFQrdkQXhkcCsmVPcRaaqqywGSwahoKtZVQUU4zwY",
  "key32": "4CXSrKiN9T513tTi6mKkY6Mf2gyXRyRuz1SYawFzJsLX8bPykF2QYQ5D92Y2i1Pa5PhDNQvRLgm5z4XwNn1ztf2z",
  "key33": "3upiXpQSrvTW16wBfDYeZy4QCQkHCdXsxi6Y5SazWUmWGVJCFLU6oN6sPhDF91mVfzv8Nd8Aryeo9RrvuuLqiGHA",
  "key34": "5SxDwfyR4GF4UxdgKCerc9S5BDndipJHuaSwCC3v2bVpwbKFJvp1kSGSj6T96LdZK2otemRP1xrGV9N2DWuSESrP",
  "key35": "4PDoJ8WKFznQ4sdmjB9cmbQRjc6JqdkFQVrJs9xANmoAA9bArAzHMiHbarcNTrUaJwLzsFkCVHjEHsuMP8j3rsZE",
  "key36": "3sJ1QzMyGokyzExMz2hoo9MyV3XX74Mnk1FZzmDU3A2AfuuBurC5rewbaDMVZPYEJUTz4iFXGys4esAaGo15sdG2",
  "key37": "21sLfcwZ5PhPQTCUhVgDbSXgCpxYrQY8fqw4mraquChNkL42x9N8NTLha15V3kxAV3hX92NsC9S5BBAX39VuNCaJ",
  "key38": "2KyWskYbB8ARFGPLnkNeUyi4JfEEGQUgQuK9MJkTWWQGc2eDQcETdyJzv2uVXt8sSkBw2daAqXmLb4JQW3zLgTbR",
  "key39": "3iEfR12dPSTkxPuT9UkKedQLNxSgMGM8oai35Hh6NFaGd4zLMQaT9sezCpM4B2BRwKRBim82xPz6SciXRjpFPCiW",
  "key40": "4SMyVm8zMMy1LUxbkpU3nPudXUDQg2GZP1ArtEbEg5noEtZp8e73XVHd7QUjRM96u1kwP37bbDWWsCjvaVG1K87u",
  "key41": "45xv1Jcv9hmThrWkdWEc6nKWWPJFt1sAn7gaDuQPbdzK5MGVgYp4tLykbeiGpL6woSEjp6BRUsZMnoPxZ57FGz66",
  "key42": "fGS91kB71E9yiG4uUSxvQT8FrnGHcZEoiZU4j4JzGy5jjeajsMsZyNTqJLTDi4u9G6gzX1STsX83HFH22vxjCTt",
  "key43": "4nBNi1GE7zbEkNQVWjB8UzAnKC8vV7AyWCRuFsZkeYu1gQgbQFgEecr25kc7w8ZN2CwRkQkWsLz3Sq86iqxYsQZY",
  "key44": "3xBtHy8bUGsfNCx2qU8D6CAZ94Yj4ghHEpMjPUk1Eg3dezPr6YcfTTny2YWv3WTmBcegQfeXmpjLJeG1hrUrPQc2",
  "key45": "5v8vhTURpFX1zxSXzBk499xUYbR8tTHpbXh46C3APuqQFqG9Jx3F3aHBZUcTGJPXyZAwLveNBXpbZMkN8Q1gYC5w",
  "key46": "38y9NV1dWkXpsQVaLo4KXBVcgGiCGUFjK33oKWrF7oVUAxAdpQT42xdGbknFE5iwQfftGfcAqwEUQBeCKqwmcU6p",
  "key47": "67NxjuQ35RQRaZY97Yp6GQvk95fp9sbieV9SzxRSZr5iiBkvvXZxnTvEnEywBMw1woSG4gvKKdJKXW56pXDv4RXp",
  "key48": "2ipjhg9c4UwxGiyH1gVBEnppwTYCKV8bjR3mH5WqsYnuDph2Ec8k8n6PEz1zR121pYvSfuXKtvvr9ThKbASMTRYw",
  "key49": "3SebXs1emg2wbAUQBPit5cY48UraezvL3WCLS7WPzHNr6NCpeJqBxfwzBgNmL3VYpi5V83dHPCNMZ7HWq9LHcLFb"
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
