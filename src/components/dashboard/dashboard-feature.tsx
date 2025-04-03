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
    "3ecynEV1wNcBFdVc2vKarYKZZFpnrepoSGZ6ySBQCWEh7p4qfJMw6wp1bEYhc1JM2wXWQas4LQ5vHNiZiGbPjCCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmuNaxANoKfC99sVKSxYD5St74a4a8AMLTrohyCQa8NXyfoXgRixmtrM2VzDH8QfxQPiaWxgDL17gQczYAbM2m5",
  "key1": "4hh9PTvHHzE9rd74BzJz2K1Xu1Emwzu5ZkiJffhgtLy6e9zEz9NX92fEaUE9G4ZHfDffehr2RDjdVE9TKc44AfuS",
  "key2": "67mU4dK9FA31mP9f1AeerwW3Aqp8GUg12S6CDwa9hJ95eamQPyJjqpauzjJqGn6RTXAHirXG2qkZakAPvConrC1Y",
  "key3": "4iFP6YfmnJFTdXWem2Ekv6BpqpCzp2tHCSZfqTp2twzt9ZqhWcX2QnEkr2zdTwEaMh3fjT42bYKrzt2pUjn4pw1T",
  "key4": "sZ5NG83vWrEFq1SDzFc6qNFAhhqxLFhepuYmEg3EZF2mdXznvBmvnJGC85LBPgx9BMJpGFobiYnHcuxzR15Xoj6",
  "key5": "2Y99aDRpZCWmXqyuD1167RV3Sf7mARvp47fee2NDkriLqMCLgLdzhtbzF1fLHcL4AtdZ5Q3mdQPypwVnTxojBZf",
  "key6": "2hPtvN7CLeKq8y331Y9pEUN3y7wjmo9Nqm78yhy6F38tpYHfWHvXecDBviAmWezyRDjhmvoBF234s8ojmd2VmzpZ",
  "key7": "U62FEfhvjLCs1EZiQajC6ECQfPXYsaTMdoyQjzEDExE1c977fqszL9oAegRy7yjrwKCZcqqVqViVtk2Yi449uAK",
  "key8": "3eWZFUoW1qkeaCVqjoXVytcmCJ1zG1X6Sb5Hdu885npXVz2D2VndmYW2mueGywwm7mszkEVQs479L66yuUGeTLwo",
  "key9": "4cbRA1rDYggACniUCPXQVkpZppSmnN1XnxNgVN7S1Tv8B2bLDqdkcSo9zgQPJRoBC83q3nfAr3aZitp1JgQs42wV",
  "key10": "4Vv5BGr1dCv1ZY66SUH2a6TCeyDSutmYt4VWKyYV93adLHAVkDMETP1h3urePzv99XMjBu42c47Mxkr37azZ9Jgj",
  "key11": "cuoz7tWsLa5UhLEtBX9m1ik93XgJKFk66mGJLm9V9L2T8o2RuFtYmRGzS4uz4vooUChX7q4mSoAmfR8jQkxm3eb",
  "key12": "3kZYY32pt3S1VyBvZfur7Rgdjc2STBaSh8eYSW75gZwBTsRXAyetgktT42c15ZrKZwvEYM6HiFRQMXHeP4MY8cn5",
  "key13": "ysEDbW5o8Vohij3ToxV5GWAXyAc1KqgHNRMhfzz8igqY8okG79NZ7fFfx8fuFCMXnSLLDTsmzuEekfvsr2HBKWh",
  "key14": "667eNWwNzXeTqx7Ye43DzGyQEmobCFvr11pTjxnAAEknYwR5AgTrj9Ld59nbELDYRscF3BkKWCJuMhf2Qp4THjxc",
  "key15": "3EaewhQe3T8NzJZNMELjZFL2pnBjj1JHYujQe4pYcYawjLdzbNCw4frAA65jE7RMFaFqUAij7tuGykuF1LnTzeRX",
  "key16": "3YwCiDYztYcrc2tPecqQGFgsbkeHF7o5BQx2gmuaWpWQLYogR6khejotRo3JRZKbSHuJmDQKPBbYZDxG5Dd4AhwH",
  "key17": "5cUnnziFL5teQVPod7A7L2L9ug11LqFtU42F81RegPpoxDeEijtq7nHTzXvdqt5EfaiDeTLaZU8pB4c6SKbZMyBK",
  "key18": "2SqsLd8s3hZu9oetTrWuBRz8hUNtmg3zM6Fj2jbL3w1jKHBY2H7grRfiJR3oVzQer6bgbg2rdDuo8A3X6G7FdZ27",
  "key19": "38jYJE2ck8A4H8puDvzn6j6gidcTXP9NCy4xd5tt4NeeRgm1wnkjHLtrSLWBhB5w7Yf97exsqV5omNyFcZwhYnWp",
  "key20": "aU6a8mzkSLp5zDGzVuGonoNHTZY6wpCGJND2rqgwzkvhGSZqjkgXqVnV3dFfezhtWGSpAUkqLYGvhuQwFwHJ1Za",
  "key21": "4MDy8AhGBV45VitBSsWC9yQ4tyU5vC4AR6xfNcoaq7cdDA9tpUxSsrYcWKDqbKA6fjxzC6Qfkh2ZKQYLFwrFuZ1t",
  "key22": "7LXMCMq1Hgb2NVcCtCVCJp3ZxNEmidVHkK7yBurNj2ZBssEcTi4kxtdrG1GhoL6ZJRqRCiaXH7sxCG2RdfFUEwV",
  "key23": "323EYJTvytjXGf2XbB7QGdhBU6rje2LdUYdPDYV1yv61obd4giRudbPQBWWJH6HU9CSC6dGcHYdwsKqNoNrMEsxR",
  "key24": "2roaDFrFvN59HnNeU3CpaXfVG8MZ1FXqFnSLsRWLEk1vZSGY9EtGSxAWYux9SM1w2UJTLUQ1Pp9QgWRmTsXiXy9v",
  "key25": "3bmyZ1f4vEsvzgZp76ELz7vJK9gi2scjk37ZpLBpFQCVEcZUGcXy3FpyhRWHLp8PvnxuwFzDh1Koz83K8fZWk8xM",
  "key26": "2WNRdofk3y3bamp4izZU6LJ2CpEAADJU1jkspxvc3PPTnZGwfJiVtKJu8Hi871aawYH2pDXExsHkvRXS7tq3PWkv",
  "key27": "4r4AzeF23CvVcN1X2wup72rkp9JFJ3VarBdjM63tiuyhwe6vuVhMXZ4bUVUBWLp29d8p9Y7bGp2g3RKmEM7ihRse",
  "key28": "3q83fpnt75gT4m9Et5S8Rrqv5ttDaL87ccFASaXDXE2AaPjAHrghBRRmLih2ePrdQ63Qxz15RFHfyfWApGgNob6h",
  "key29": "4xuN65aceznjhVkfH6zfjQtZnyhrPUHhXfUf3TNpDLWnkei3sSNqKcxCMUxF84k1K3qvpX7pz2iw36TPa349wVjq",
  "key30": "zwH9xn68GzkR6a3MgVq2Yw7NSxZ8m23DLa6a6xQJHT4zpNkNfb8iG3SAQQYkWGEoUTdrX5Sy7eMZ6nvxvsrD2hP",
  "key31": "64qVdLbYBhFVNBRGBBrL72XKg7gkAuZhgZdX4zTtZeoMjSqJ1M71hm4AuXECeirKfQzg1V6wxruaKdMuNEx7Kz6h",
  "key32": "434UGuXB9xbXWmTZyEB8UdnCAFVX1M8quHQEF53ejTzxCVkTXXCGzemb4SLvDxBa8ZdAnU3JPcrRGEvftcCXDEMc",
  "key33": "3mjUwr9k1xsx4V6z8Gh7M4QTjWM9qRVtPUrk6GvMRFkiNg1mriNyiX4K5XHX9zbAe64XkidXYHKDCkkpQYax82iQ",
  "key34": "41SeeejPR6QMoJWWqn7JzRnKeW8UNwkyVmbRF2VtALRj9oL7Kh58vDbUkYzwec6qPfvpSFd8FVHA7GRfub1mvFbq",
  "key35": "2W5fBMT72y7tmHQxNPc6vUy3Qg1oBMiDLRqYQULtH45YW285WpzZvUMDYxvtP776bUbMQ7MhHQh7Qn7k8g6dViR9",
  "key36": "3NZh85AKGwMkU9uWqNLBHnD2T1ZC3Bts7HCRWvEiwbvneRsYfs7JbqvD2UijKEe8hJ3drVaqagdt8f94Q2FF9tQv",
  "key37": "mPX9dBrjPVCD1dd6317cNWRh4unCQ33CAACoEBHjb5F66Zmm9rn5Ra7CyuNtVjguk3ry1dXwYAQXSNuZviKtLte",
  "key38": "5Jk584GwDG7tTxojWWJ1zU6ngh2jNGfCJCHywRkFvWBh59fftJ3Pq1G7h2RLprKx9VuMEDhYYmTnEbLgTXWRZKJc",
  "key39": "RJ12gZ19nnHsT2ZFppLvNBJHWocfWuJZkewDykPFTpaSucez8H58QWkrkRACHSU962ekuTgSyQBkNGpLyGK7oXZ",
  "key40": "2ESVCYm8aYaaHFmjUijMDLLVRS2Qart4uVzHERJWAsatLWpynRwU7VExWke55xbPJkGSt31rqoDiD5nbRQDa4WyV",
  "key41": "3DgLKAXejgktAJcvBXTyo3UAn4DFEgFSuPZpJCf5YMzWEc7fCTuXvp9hi5k5VbooJ5p7Gv3UGUVeN3RACMfw1jtD",
  "key42": "4bhq833F7XERweP7awGPVRH16A1GZ7dDwvbD8EhKMpLcW2uo74kmrNGgHj4X6BqeLLPgNB6ZjoxiiGDsyZhHCcXQ",
  "key43": "5ekzfDtjQcUWihHRR7RbeaHnQzK7PHrhyBGnTkyJ8CxdK7KKsHdAdtXbDyaZu1ag3RUKjuoqrvpAHhJtmfCaPRLb",
  "key44": "3GFtUqx4igKVfRMJLnoyTpf6VjAhvhVjFfYhikY6qaSVtV5hwGQ3AnXgQSdHXHC1wAHxumyoY39h7yYMd4KJo4Q7",
  "key45": "4vPVxHqnNCpcsBZqcG4sCHrYDUbS1XMAFXY8Pk7E6Rj6vSqvX9JzjygyNPfCqeQC4BxMGThMkC9xNwiqHum5ub9B",
  "key46": "oCSytRD95eo97ZQ7Z4emtpEZKBhyFXH2XkzcKgdfvxsACGyP7s14AMocUi87qzeEABKUvzXmPRG55nzMPgV3NLL",
  "key47": "dV65kBtXExJSK7CzpLZhzspU1ryafmo8bWvxrDpMsQwgvU4zxRirHG5Lvp9Psu5xoQtiNTmXwGk5g9RHpJ1vUxR",
  "key48": "227nU38foerqE1XaC1jNytxXmaraDsVK9mqRUZZABmumKzuxWGtu96Q2zrVq9xkAM1yx7QycnYtyrT2X6KFyuptS"
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
