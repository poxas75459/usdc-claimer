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
    "4w4aQh4nHTW494Fcug7cgesborkPizUo9iitmBEaE8ad8AtTRxdi5TuLUYErrysjNXhuGeqL2sDktqSdZPWBH9MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jomtfu7yrZaTdBhtaz6nGa6kL27U8ouW96negFyG4GgUKJPqiXgUZ3Uky96tWSw1xWaGkg6Jc9LT2PZrG6TQHSe",
  "key1": "CUuZHbkd1fDCM1xHsn7y8BJfH2YkLrFpChf8gSc9YiTf19sVvD3BDsAfTpiJibMH7snfsVbv5GiXinpJzEquAFN",
  "key2": "23xyTLM7PMxagwCpsdrPZMkTyVPbUFVzirDeR9pxeqgRTyFqAkGrSsJvYaZVzP5vAH5QvKDUSEtvXkvTaJuKemfy",
  "key3": "2piYS5zBRnJoSDaRALYpy1AEufytm9eXDKEcbS9KnfeyRQ8dtXjYuKPVYWqfNEmHAVqpDpuMFZJtJuMMedwLdKqk",
  "key4": "4Sjh7bWKXv7ydMzhpKobrEGKX962wYAh1GaPHrDugc3GTREdyvv5zpAR4E5zW37heJnnfccHbsfzDYx98akTq15i",
  "key5": "4VknUhT9vY9XidJp5sS2owUgCJ31MZiDJhs6dFTQqU97v1cRXQuYxPz2XCdyV7QXLgeYw43AHoNKgUcXsGRDQXg3",
  "key6": "3AdWY87jLEiU7Bq63gxzwMYzpBw9ubjs4QwnF517PSqiVdUadGZBjyhmT3ZFrG9EtKJiGdFkoLu63A74GQpvat23",
  "key7": "56MZA6wALjYgrfdfW5wKc6DGwAvS5BPssL6Nmo85FPETXfFHYwBS1Gxtbqkpe4CUVWTDijvx1WTCXgEbHq4qZJ3m",
  "key8": "ypFy5pYLbiQgZiANioJhz9JDjHHv8n265BGZ2KNDhv32vvkHKzkh8sN17y3Q6rSqBZ1wZtTimQ37emBEjSULBq6",
  "key9": "2Undv4Y43t3f5727PHAomr2ghqUsojMUBzHL22JkXVP9WfZPZNPY5NxvEnEQ8ebyoRYoo5iW7yjkJtBVWzDCU2Cw",
  "key10": "5tdKD3yukKSS5BsmcB3LhPo19YKp5Y4T9R8NmFbdjQsYeLBeJRraJ7cVoZDr9BQyVgPnERdnwZGfnVwBL47QRFg5",
  "key11": "5sCH38weAG5SaJ6tnvxprJtwYLZXvprAjta3SMWujwENDKJ3Be1FzCApDbtt3QLMAKhSTJhkmEU1hUB7iqyAqak9",
  "key12": "3nQ1hXcHxGTj3Qy9tMqEp5Y4zobuCpS9rBk4375jcaEjocKhBEJJMNY3pRqBAeM8NYCtu2BNBWaRpf3zALmL62Gs",
  "key13": "47LxmtAFuPWYebmuDjdNHuuJb3b4jTB9WRgUt9SM2fMtNenoNoXWxBw7NmkSUSiERCF48FJFjS2fte5tyRFLPHcB",
  "key14": "5qS5Pyj9bBN3wkZqKEyTcSLZ47UuPPSm6XoRzExXuES6BsrxJyFgon92pP83YhGwQ4gjP2sje8MosD7Y7TemPKGx",
  "key15": "47siQg8LLCmLmUe2kYvobiPvZDmdpJ5VqQKwpeZSBdhZCriRNbBXqJUNWGYP5q7Nv2Th4NvYrRsjLPnmPBouz8wh",
  "key16": "3UCkquDGgVkrdtn1R2r57wB5yHqD572A42kbamizcL378SwCNNYKsncHZE4WDwTGXqrv6fo8EBtR3JnJyCbTkDSo",
  "key17": "2yUA8hH6ViNweKpdvz8pAwFQwiFazaiU5SNDq59A1v2UYmn4p7HonVznyQrjDKjUrTRDEX6WUwhBo2mT1axFxNHC",
  "key18": "5hz22A3yjA81KyN8gcwr89RFn2L2UQbu15fqrBeg4ZbHRAS9UEz4rima9rvMqNKqfLQk6xpYhRgubgq91i2r2ybj",
  "key19": "3bnmowTYgzhKAKAuANASQ7AWuDYzLAMj74Q62W46mkhSk3QjYW3MkzYpAks7vcNkHk6xCavThVqcUmZHfq5WMkoz",
  "key20": "2nDwbxLyygCCZFuEwacfmNRaE6Cs3nBCFZm6uAd6boJvNe9nGuaewDXVvDEWyu82ns1wyQ4EsFovHStLwPTy3gbm",
  "key21": "3XexfWhKemJTRE9GnZzwBZ7SSs9BQ1SyBbyb8VvaLpFWxYXUJKNgMps8JJGSoYULze3RuDy8afsrAvPzE458tRzw",
  "key22": "2KYgtWL5Tpao3RZm6AmvfiMP9KnipwLbXACiovD9vWFZveH2s5DCy1iQvMKvJoRwg4ZVuWxfycN6WbAL23iVPNGJ",
  "key23": "3r87WXaJZTEH3KaHqaBHA4a2pB5ubNuC4U5f1w2F3w35gekqjoAzx3u9C6CJdHqAkWibLTDsPXFjaXsYSAat4w79",
  "key24": "34a4mcwA1WDvMyx1QbK4yiev86mxwXpppg5CsESf9R3gxxvKPokauMp9pscTA4zrX4PnxLvuH5gnwrirHGCdL1iv",
  "key25": "3R89ArgRik8Qp64RRdxwBnKMUJVLaSDbGBbbWbM2KHCMA6h36eML6Bp93jBoiCDyUAdSsPCqvzBw6BfpyW34ZCZQ",
  "key26": "4iks6vZKwHLWwXpDkME9LkkKRyniaDhAkrJQARNHYmshQBaawzU338mNBnvYnKWrB4rkgCkxhoLsf4GcTmX6uzzT",
  "key27": "Gf7aVrgVVPL3VmyDhwxifJqPd45rQasruPwkAhJYL7enMA2G218GocuDhKLdMUuyJa1qkxJdukvTDzQcPrF576F",
  "key28": "5QJTzMsQPW2p1XQRDZoBzzwgaBFeTLjnfMuG4rm4jPnNjcHe14J6rFPaPavmcPcN2CijKL3H7eEvQDmbMMcAgY68",
  "key29": "AtFUhVch9YEMSgCg5WXtLLzgXSvg9ApAJLcV3nVvrCnuEaCVArGV8DQggv9euBheFfJkzyRV83JpKYbYpD8ed2g",
  "key30": "43hy2kn1STqg29GkP67VYmuJ47pq5qqCDxJ5gfD1T1WZ9ktTepbi66bA9Y7oTqZksKe2rWBf4KUkT5V6jgpzztK4",
  "key31": "4gY1kGvjtvGEoXT7PbHAjX6DzWcK82sU2xbxtvbBfv6PpRwTtDbRKdJttMnMnKcybiGYTfM6ivnc3Y2gHrmx2cTP",
  "key32": "3HXwBMPbwsiUD5aQc5rdZguBjLrPZFa91MeocbszzDd1ZkhKYnLVToBWiRVwbr26Hxn8GddPciUxHPSxERyDZ2ZU",
  "key33": "3WbCtGTxwKLwtfRjYmwk5hLhmwZd2YiRBpawtf3oodaKyWseFacDUj3HyHAzGrUCA5dfRHd4t3y9axt7zHx5tBVn",
  "key34": "4tk7ocBVStmKx9iZp5LJVvzJwbyufuHBkvRiWwTgvcF6Qyp98i1bKLmexvKHA3Q1t1K5BefRCmDMExowdWB3rs6W",
  "key35": "28DxCM2xsFw7VwU3AiwTEatRm8WiLJPMC8ptUiAurz9783ybG4cQo6CqiwqEmNvYgz8uFLnxyqLexRUzaDqHJSvT",
  "key36": "5uwRFaXRBeWVsqDZEhW3Ho3aZguBKMa1iXbxWvhCNvfv14vEys1kEAQQ6z8wnuowsrc5vFU2WZCCuJJMSQptzCdw",
  "key37": "XgxpdirAQKQ6meyofSriMdAht3jQP6rPKPi3jUChbSTLBYaNAxn6sDvEXGNqJbhPRQnHKBtGooMvz13YWcfq1mK",
  "key38": "2yi5L8XFxz2kKKsAigZDc2f5UJB3kadEN6JwTKitV1QzSk7nNtgr8agLz74zxA25xUbc6PzfzgNm6fu3RUbkv6Kr",
  "key39": "4EmYKVbrDCC8uHc5FJnFQQaEQrm2XAQp9oNsP5fHkdCNJvv7XGMTPJfGYvcVcqF8VUWuBPQkypiZncs46KFQYFHx",
  "key40": "2Rw2uLi5ASvRsHex8gCd5KkWuSEysMonuQefRSpBxTKcuhwNt8bjuqwHCjf9ggsTZNZUosj2a3yJ1Bs7BkrFscb8",
  "key41": "3xDn7Fu5gQeXNkMabgL1knR592cgZJzASghE6DSYomT33zy8mhNyTGbYAnw4tRE1tn6MN6ef6ZuBeN7M1c27LJtD",
  "key42": "65kLV4VDPzY4aCRSwrftWqbjyGScLMtpA7v6NWkQZ3uuLmvL8UvqVWPwtHBaJz7wGxRMAEqd58fmsLTw7b5LT38i"
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
