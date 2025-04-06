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
    "bznKoCHejXJps4AzoaJCUPKG2H25kwVXNREFYdSj581uNRoaq2vzm63QH85DzNvcHun352vnofP6W6VjnAtkWVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZGKbBDr2pGXsiVTYedEqds8rv9nXjDykfFFLRY7JWpLtgomTqv2heorx1u6KiyavPryhiDygzUSebsY8jz5dPw",
  "key1": "63vcezva5PXSLvCvfmfcprjAzjeDcR5wAkGZ45cvaEoL9vhmPKkqBKaK2TERGcvBGg5bPsXW1rMgpxUinrbyGHPR",
  "key2": "24zDuqHefHoeJp1okfw3JSHyVHv1bR5g8QJbdDQDBEcETCcYRJxQaPPcfe9iTFvmy2BPpDh8YrFMjJfzZdbN7C96",
  "key3": "45jMQ5RvR4Atc1gjxkrSyncL211pNmE2BxJUe7mgvDqNBTBp8HX4cKcJK1s16eMp1dd15zHpLH4RGBDphwCuVvUJ",
  "key4": "v1GNgKE6GGUndWjr7QLEJv4rLPpCDExnZtpT1FESqtDnNTzYsnmYhCt5T9CbX5Nx1VevQsaxuvL3cgXqC6yoRsW",
  "key5": "aRPm9uLs4gVWCs5JuP4ToKNtMy3nEW7AQXeWf3xt8Ak6WEYqRoPdqup2mt778xMvSoM2T5WpGcvVWzgGrefbYjG",
  "key6": "4u2DMoE6rbsQyvhA7L52gZnecXCVpAAaYCZ8kCFpsANKRLdfDm4TdHqjnhLBC6Qah29oJFBtzzgHE55xDFBEJABX",
  "key7": "QCqkemddoLfcniZxhZA5sesXeeC9a1jWepowfnw35zzr3v67QS1MPJwsxf8ZmbVhACqRnJAsoXvypy21S5iGvtG",
  "key8": "2nc9BBKnXPiSuaNuygEA2TGjPupRQjdKSp4nP9CdovXDdFULVXmghX6m71y2BBcAJ7VyKCY46wND1dpLoAAMNQDy",
  "key9": "4LKZjqzoSPH2MQqkba1zb3e7GtzX5G434MrxdQfpMhF84VtdHhR7fSYYJo12CqtZPE1ovUV83rnDiHj2WDpcLksD",
  "key10": "3ecZEhH5AJ3Wu8JscXQ7772eRQdGk7VSQZsPHixdvunBLaoHr2Cy3JEqdd9kNgRaU3L6hb9oHPVKmiVa74TBLRH4",
  "key11": "4AfgQa7g2xNP3PUKy6mTWi7NqKiW4Pk1yg3rPhw4mD1gaPp4KgweGVAJtjcewfKAZPRTEEHosVSFr1i2t9fKD8Yq",
  "key12": "4QfxAyw3PQ6182i7Yn5FpX7FPxnzFA2uv6FzPVVevWWZismdSJTLJ3jB3hX3MNBdJV5KkETmufiwa9y8TdmUdCG9",
  "key13": "2Ng8kbYGcMrMJMDQzMVCPsdNJoRFTb5JLSs3VMoY7XDJUawUuAemLdVZbfBZqzaz1qoYvTpt7i5PjH6ysp4uGkN",
  "key14": "3wnffG1KWWxaGs2f57LeP2QGA19qLRXQFT6cbRVK8xix5qGdQkVUDjvgUHqNBMJcXzhKcNkZaNZjkQzXT8AuqSAQ",
  "key15": "2ruJ21Svf7B5HQf8s6UrJtZ8yASFo8LyewXz8mJkTGcndJN1aCZarcSRwt2tuJtqAoqJnHJkZuQvkuqW8SLXmRE",
  "key16": "3S3wtvu7QsJh8hvAXWiPqidwsb6tRK1ivdPjbaPBGfakDAzyhvnSitWriUpmrPrtfspa1YHu5YVdKFezm4sqXdWQ",
  "key17": "52x4vUhKgFyXYMBjdXhzbR1tVx64DfPNrfjEav5V69YoJ3gBA92wYWGMzpwL71RxxrfQLprNRcif3hd1qiXh7db3",
  "key18": "z4ut8XKfbahGouA2FkH5C8ZyszebY7ZtxQqUNvWRn4DMc2R3wDudbW1sP6ryqECthfbHrnaSYBmrWcYgy8G1knE",
  "key19": "58xX3FdmPSCNyC1x47vTr12msfXeT5RgCFhaQn66GQz41sudfrVsKSiE7q4ScYrk45VTGP5uKxxw7Qi7cHeRe7XE",
  "key20": "2rBs8BTseca5md9K1zQXkdfGdELMgJ9fhuDpKSnc8Efqtyhx1srJDEifQjvhBD4hoiiynGKbESo41QWj8TrU6fsc",
  "key21": "4XNt3bkmoozXe2X2XRJcfyoheu71RqmkLX7SgjqW2y7PgZh4vj8rnH16qLB5VMtdXFLGX9YDYbDfQDFHdWMKCYqf",
  "key22": "3usJnkVtW1SF1XNDuaoGYJwyi7j8s5FSvusv3JxRvKTjVsRR3SC3gQGWJ6cv82kY3oZyKGGoj97pim5LeWQ4BxJv",
  "key23": "3PLY3JpzpMv2ALUS4AmLzvPGEdEkg2P23hdDnZA6mSmmYpVHH6Y2Ys5VJh15wZpsaWbpqVjz54M3Lt6SnjfAsT3H",
  "key24": "3UmvuPXKaLMuB7evVfygF7JEefnBYnJzHY5fq9XMosifpYn7ZFWV9g3yt2DCjmjqjRuWtMdGC5sLa4gzLh4Cadq1",
  "key25": "28w9DGXxbk3oh5gV6B8t8dxz2Mi6kALJ8vzKbqCr3CyxUub3nBKjfetY2Yr6YAvMQGDWvwfK2Ccx5zxSxxyAS8Y1",
  "key26": "5s7hx2r4sNy5LBFpqBHsv9v2hCdgn5JxDDET5TMmRptr5e5GV28Xm5ztN9e9jKE6zQcWeFrBqHcuYZoQ86cNUoQw",
  "key27": "ukMLSouzKcCoHqXMp4nAT7pEQW1KmUGneEnMo2SfoLXb2diZC1qYt88aFuJRn6tNB7Ewm7hpkur1E1ToicTrWvX",
  "key28": "A3qj5rRtkaq2VmWLkrViVRcpVGoaSydyqPwMjtXf3HJyGRhiDDG8KvR4SGoEQE5bMb4JrEvft2K7p41cpwUwghu",
  "key29": "4GQVSuson3G94WuCXRCYxdXXFpSiphmyFUxmdUNAn7nRSZLxr9dodbQes7ZVUwNC9nKDWHM2mNxwVr46DDARoBBu",
  "key30": "26EzBQUC1e9ALive1HAqmQkLBLjdf9GpE9CHBDfQncsRKz1tJmNVnVMLKKxNjTqoutb2CJex5uBtuPbhKGB8rcmv",
  "key31": "3egbXmuDbySqXcZfHywR3MtP1PV1tg7nkEfFtYZoRdj65LEd4D6L322dny7uXkdyVgASUJohmBAS7N4YKJpE1LPM",
  "key32": "3opQLPRV7j7Km5GtEsvN2ME4hg6chyhCCkn6tZKRkv84XrQ1GgsQbRhYktCrX1ZzjmTU2VhrUnn8xPQSuvXu2PNK",
  "key33": "2MaifuD2ztw5BPPiQezrrBpMzBsE1pp58pSxJLMGKMvJzDnGsDHgavrzVL2gQJh2on3jowVCN4gLSXMobgWVFTNY",
  "key34": "J7jWXvUVtrayj5oqMmmMQCdqkLDGZkp1UMJrNZbTBoVfZuy7m73BAii3YrUBHfuJEJZ9YcSx5Z99hvi5WumPgMv",
  "key35": "3W8BWysD42UT64mo6Bzhqpn6WSyyYt361eXo6rAvzL7ZgQWFGMaXs9dRKp9qxVZn8piQCWzPj6649HLCrkoFzYEg",
  "key36": "5FhThkyCvHa3fRjVF47kcPm76dtEsiV4sNKm59Drnkq41dFhwxejPsneCvMqctb1mpy9HrV4sKpmnmew9TZxAcpa",
  "key37": "kQhUBw6DMLLfwCDiNpQT3Q7ajpWvu55h9LbXnvYYx2Ubc7pA6krzug5ESrJQXascN4UGMNHBJEkZDvvaCmVmj1s",
  "key38": "624rnPdfBSc8e33Qpfdw2cP3LQBrNByEmuYWfG6moUdDt3RS69ZCDNpgJrSKHu2ZkToHdh9Lo4cvodMMmjeN1Uuj"
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
