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
    "2bJAXVoEdp41xMNWD6448GckyyH2ExAXLYh8yMLRZbiLEBZ9Cjwhz75Twx9UwiWU4jGwcS3FfwSnJjVkJYS6NNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6angcPC5deHGSMmupbpt2jTjnY1MfrKtUBbypThAADbEco7L8p2GURQUr9hALnnVFKmh8WAZqyuZbmtndeGAwj",
  "key1": "wR22sv6uuAgMTL2qqQ9UP7yMHULARbRHfButbznuAXJpvgCuRJoJ2CwDgedVBUw6GmagyfXwcViH9S5tfbWdEQp",
  "key2": "gNH16KqeWHo9hMWBhnG7XQbh4xScn9Ys7rW2JyP1nDcYtFu3ELTdsCV7mzRheT1426NBX6jvHBMxZW9otnzBdfY",
  "key3": "4pnzV29mjj3hruaJLQkfF1UnJEU3uh7VY1Cw2J4ozBk2kg9oCCQFHJbrR8BTUx8SiFoDXD7WdBuXUSCjPBcQsotG",
  "key4": "5BjAaavNSqe86tbx8PbED6juXMTuqp8UV3cETJ3cwB2oeJuj3ZVipVgYnH4kHAijiaMCoyRN926Rww2xDP3gtxgF",
  "key5": "3ZDt4bmiTgbn2GvbwAFtGS5gHd4zVtpayA8FU6KZPXR4dqH6SJ3UvYaT3UNnNYuAq9pyTJd4g6v2LFDWsdcXE6fb",
  "key6": "5H7vidaEEmcd2gMhMKry2x4DzRNix3seqDvp4ZLr2GgGHEUobMAAPnKwuJLpHvzy3w5LKHp5oivRyQpjpznU6PG5",
  "key7": "3YJEtHnDZr3SoLf8uUp5K5rKzcvKa24orEYVp5gNcTFfdRgWVhi6Yw9fwGiyEVQZjbjm3ZuYWCUB26x4haT3TSwN",
  "key8": "1vjT7vd6KHLT9wb21eybv4MoufRCk1YKokkKHUhn4HeTmfeMDv7RbnWZYStJ4wxy3Q5wKfbMgD6ZY76SoauRExT",
  "key9": "zDK5hUjKVpzSrubshXSBgfwskBrZhJMfuYEaUrrVCaunB3HxTKuipSmJgLVNbXBjhp4AEkPNfQfsdn4UXxM9NcL",
  "key10": "XsQq9mDbdxRhegtoaCTQoXDfU6ZUS4bsWgroJBvxkgkTGgLnjRXm3aNtvGYoLLLYB61iABVF2hyqznP2KkDucKy",
  "key11": "4y7qcxMwhNwj8zGVXqkbYvyvsN1sjfjWRMr5rMVYqg3DqCtdCSfnABH6aqMD4ifzV4FGwQjj9qbCzKYuJBVEjytp",
  "key12": "pjsHuDd88zCERwSoe5X8VkDYMYgCf2RyBnsVbPVVNTsz3HPq9LhG6Zd5Tu77MzpZXyB9t4TErQY2HWo8DGGEbip",
  "key13": "3o2Q1gGPQXTcDuVkXXxmpUxJBVsoxrCmujnW3MJ2KdZeagBGLExYPDmXmz2MFsRR9SsAreHWDLFeQCjDNZuXCCPM",
  "key14": "3c1vVWyMuLf7LJAMGvPGQFsas28C6Z7sWRzZFwXpjcS7Yi3JRGjo1DeDfWf62wjFPM5XC8eNbeLC6ZNHE2qEsDB3",
  "key15": "2hy96X1sXcEaoYupoKHJMMgJVjhh5XCSC1VxEYDH1svaSp735T4SXVebP8uCaEPaLakVTBG1qoW4oqVEyEn97pvr",
  "key16": "jWPwHM7H3RqRh75LJ55v1CiAskF5ScBoCq9kbFYGstkTwynVBDW6yxJ5WcALoVBxCEjbvBzTkKMUviqEwjC3q9L",
  "key17": "4rRfQcm42UKi2bse4hJ1cjVsFu3Gg6keb2gRHhyNF8YVG4Kz2YvQvB4UcL1EHiny9Vr7G5TyxMMTvtMmN9MrNJjS",
  "key18": "5UJkXVyBacCbA1ANSZx5ZQfsnUP7so9PBQPkCFTSBjZUUqD2DqwSHbC2iuBZ5z8qmSYfMDNeXKXjM4bb3QJ8ANtR",
  "key19": "2d5TSJLjNQ4Niz77BK8DyoWp5H53mCyd4j7GQb5KGyJ4RqpduWvMMoGqSV1y5VnGZ5cH9oapsERMpjhXC13vDmsY",
  "key20": "3grsrzJcPj352pqArJtYdBrRJj9epCxMCBe2DyRnnMo7wKbewsDoUL15dcg7zMdve9rzS37R45wogzKFYyH5AV15",
  "key21": "h6Tvi1kK79iGdne5i7QUen3Lag86c1HamZCcYHuce1BTbjz12Rse9uFrUyfSEtgMXPw98BRpTyvJmUizRVGutmf",
  "key22": "XQhXPghVc5TrKnDB54K7yELo1aC2ZanN89F8EeRuvZFKG1PiavtVmyEzqQDnpmvUkx5Qg3M8tyHbBqupQGbt7wD",
  "key23": "4QbkR8NG4KiZARNS74mASC1aYPxj6oaCYmt3HYHJNA7uetU1iBNf9HiiKAnwY8wNtWgN4oHCkhji9eT3oGeVqcoP",
  "key24": "5WdE9tLqjuFJTwzsc3iL2kzuJZZR7gWNpabQ828Jbqft418WV9bua1aaWvH9UUoM7jtDbMRUZXZui7u4fpzyZJyy",
  "key25": "5JbBHBJiLiE2jqBpfq4MgK8iaz9Be6KWEYXrHTUD5Y16J3hQ4Zebtuo8KG7gWfrbPVzCPbxyNbbMYVNgmchCiFCS",
  "key26": "D7on1EYSWBzQYZar5nufMDSk3vmZ3GjCqMBkXdukjy6Twd7ddvLECWCsggLE3x5VqXH79eDYTYoBjc5LnRzSe6K",
  "key27": "2JhQ2QcQGPQREFJ6M6qK43VAsmKkSn6wftrMeGWVA28E9S2MDubYHtDZc3MB3UgfDcydpCHtYjof5ZLzoVhQ8iY6",
  "key28": "23p5xaD74qovCy6xZ2x1ggBxRGrAAcFkoePA75RwNBujGNAxEnwpqQVXkNqWGAyfWbjBFsKu4q7V7xtD1FpacX1r",
  "key29": "5hBvQNg2NrBiqHA8gBArtfMJi6VU2kn3eyLK6YrDjXjFDaha5odACGqNvV48xcHaeRrMEHezoDaePf6PvvkA5Lci",
  "key30": "563DeLwBv16NbL5rX9KTtrRup27XX9wiyj7sdvx6JsrK56dtSpiy85ZtWXVrMziecCEBDRD7KQtvQ6g1b7JxjB9k",
  "key31": "3CYo7ctKGRwAm3ZJzoh1Wu2p1CsECpJCEuQSRW42NhBj7LKWdtPua58WCD5P88dmdNP6gJ5oD9iGfAWXX13bqUzj",
  "key32": "8g5gTPs8JAAp2Lzn3PzdMqzCGd3TNnogTyMHHAy8iGsHU4C8YLd8SyZd6cvswmB8zDsgdF7qjJ9ZJ4XscEdVw8e",
  "key33": "5U7RfboG2s3zi2f1z3rnNxXjUuiSnTXNvquCtjhtWkW2sEAcUQnPUwdDDAKhpCZfewWxb3bFBp68FQR1z5g9GAbo",
  "key34": "3knf3cLAxP7xJHTxvuUvYMHmANEQKSCvZWBFPSjJwkAosAg4QdM84o28zZnDYWJpKEL4T5cn3oiFtGh1ki4cVEYv",
  "key35": "zVcH8Lwg8jTFgN1KbzEmbhWxvqQ9PBjc3o8swEWFj7tvftJaYns5Z6amBMJivjYt6KCuLYXVnjCGactYvbWREBa",
  "key36": "5ZV1xbBNwY1CvFFjvPasZJKxqQPDTAwXnTfTkUbYA8pVWwXpsfp23HPag3FcF1LYxMZnb4FZtsNDZ7x7HvTvPWrn",
  "key37": "62ATvqWh2gGM5MDLZB2SNcsqmCJMigEbfusZBmqcUXyK51FXi6tCFYqVoKqhFSDuHhxASTHG459HBE3WM7D8N9Aj",
  "key38": "3BXfsTUX2qd7zZVY6zSFYAbZN1ksRQLiE3EsVY3Swe8BPhv89qD4Y4rV5PzL729PVn7RChh1a6D2YuEbWeyLqWCk",
  "key39": "2PfcMky7h91Q6FVUjF9eCHRVJj84HZdUMtHhAigFUmWo54UCSRfWgZUjxPsVWZqtKLMipUbi9rSm4fmpqbZ9grn2",
  "key40": "QT5fuxiPGFqhf8ewwTB6nizFgnHECteVHJTRUXNjMhMBNUVepv47KRWMSbZ5bTyucoUfutjN7ZBsDWhg5xVSXwu"
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
