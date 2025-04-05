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
    "2Utv4ngRx67D3MUbS38BZFaMZr7xdxNuuvsGJC7tbQRqsCS1Vrjpx1sK89pRVhhZsx4no5dcGq6gs8obVFE6gTeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQoeAb5GDjbNPtMcAhUkkxbGW637F1TwkV8D5LDTEkuv5f6kYWNas8NXzzNV6svuDV4yMdJr6b5D8f2LzySojTr",
  "key1": "3iMr9pkyNr87coWyLHnrxu4PCZJCiuYf478rekuobWfWnvWxBwRLVamDKFQ1CNTnXd7oEC33TKRQUkDyLLy2JPyU",
  "key2": "2yZMwhpN67AZgfUhdSc4pDcqNtRLbzSvEc5z1VWXaXDLTawVwZvHSwTDX9HnR7JMDAonaHZZV8MWYZg1okF25o69",
  "key3": "VZWDmCbiT2TGCzL6seeGmtucGVTC8ERbYw7wuDHmcWgqt84nG3js6PKf2ApQcMKL9VTaYp1BYSNNDJ21h2DeGp5",
  "key4": "5p5FRb6B69C961QvFvPyP9eX2iDtDy3KXLN6Dem882oSh3bfqW4rt74j6u2jXSNEBANaUdxevkYmGjyaxP6dY16E",
  "key5": "2mPEu29ZLCZ9uHvr4drh93KezXxSBKpRJkJK8Ye5o9GFprpXZWd52r5zpXuiCDxuxeP67iy81cVMTrDnJgqhELCH",
  "key6": "3ipF4o3zPopSY9AB7LdKA4YL7sh5QuVppAX82vuHSaRuNG67WNFCdQj17oNnbWDCnrPDWEuZXtxkrh46fwfDpVjx",
  "key7": "3ghXMGZsYBz9bCXZQvi7nu4VsTMzAfv3NrcG7DKScvwmLSoZWhKCbRzdbRdWWbMfU3TV34n3rJhJijHZPhkxLBKA",
  "key8": "3sRNGpuh3hU5eNVLofZjxDzctFLLLyo8nY2gPBq1TiKxXzS2f8RQWkNer79tEtkMquxqvfnp3W5C7xAYRYxuLU93",
  "key9": "5h4j2S8U98GSHLJX5e4uwTGjtiPj4c5XAVZqjqsDSRW35pGDmE8N6DdcEh6cfm2KCLNtQaXv55LpG56zyXyyx9oN",
  "key10": "54bKT7kBUnyvWkCbspDUGhymJ9c623geLi7KXMUe2Ym7bKgW6XmVaYKesGGHQ6kdaBASFZCJJQYjK98Qrkqm8J52",
  "key11": "3HUFsjJFmLemXzuq7zdRQcAF6MVHZLVYMqEwMRm3swSFPY1bCLcJQNoenbUpmjN7qC65hYZMayimHoCWXM9FanQb",
  "key12": "5CBEGct9DoxXdHzpJQa2xZ1quEG1emcuA6FMnwjUFJvjq6pNunfqVqSJQcW8mHhnfJRhaNB9fMo56NGwmDwV53AK",
  "key13": "4Vv7XaBzChWtYaurkderktrUCvZU3ZUspNVaz9WzeJmWBPb4mLpeg3n922nQ9nvS8kvAYQy1EeSuBzsLXBtnejgQ",
  "key14": "4mQ2jDvZVsNzsESdemC85ffKwKK5ka4tg86wiZbQocRfTsZLLUa7XC5AiD14wpoWGXsGfnsmNjv6zsjqrbyUjMa1",
  "key15": "64gaR4pGj68D2A4H7JLW5U7kLXDwoMTZmJjQggn3KwDbpoetP4SCjuEwDpg3nec5gkcdR7Qwto1e9vDPVeqAANhh",
  "key16": "XBBAr9WdG3ufccxxHR9HwPHPQam6mLhGfh2wtddEvtPvv2Y8yArBWX3N3ZA9Y2N7uReeXF32hei6SaYFXewVCCE",
  "key17": "2XfcDp6UQ7XbigZRTeP7EdMzzobAd3Ucnd5ChAyfvRJZrUM5PvKhumB4kC63BBvykHmB4kLJZ8hqn8vHvhmL2P8U",
  "key18": "4V1BUSmGNNUJ3EJBcgZg9f7RNDF2hVsxzjz71aYP5PzWca28Chgx5HrBdjq2DA3Z9nGPW2FXgS4ZZ3nw99VeiYAR",
  "key19": "9DX75dLfMcVWofXHBxbhCfMQTYaZ7TWawFzgW1GA7YPikpeHpGgDoww1nsigVQxTbuMEn1wxowtpUEgxqbBm7ZA",
  "key20": "371av1BH1hnfsh5SisgiMoBszXbPey5LZmq5oXFa9ZLtCbyEa4kcbRiXVzE72Cewkw2VkrvXtQLZDD8JQZcjWxkX",
  "key21": "4RNdP6XNfPf8oDqjDrKw1iScTBcTDeRUEch5duadyMQuGKs7Nj4b5HH5mBDTRXvnWNzNqxpfe8t35HmMzd4Ut19C",
  "key22": "2rRo56VUwXTgLLpsLNgYkDstTU4yyJorQTXDqm1hjpLqYV1yrjmwCPgVpsSmsnZpA59qthNDDJk1DLWheSV8D9GF",
  "key23": "25gPRtSYAgxQEW7g1pLM8E6usDcQZU3hbbFQYrLPYX9sxfhqNFwKsnRs5hx8yad1e6DRBzxTaNJsdPWgbpJhkFiS",
  "key24": "U68LHB3CYFWY1P3CtUA5uMcrr7dqvGsBCGzFPJKBsnFf2bNoiJ7anPyqBRQ8JLsKj9RiiQpdG4fdTvBqMgqRN1c",
  "key25": "3E1WWrvHArXTp6otXVLhhgiSPB8nDdS5QqDDeq7buQPDVBrD1D4UvjP2feEvEopwMrzWAnDTHLwGCxrfk9iJfWLu",
  "key26": "N4Q5UFtPWNvfQkDbUTxionRLKfbTgPqcrGoa6DCR49v2XfTZiXrMspLSJrR4c55hW7PRKcph7Ht4dTGb1be41tt",
  "key27": "4TnjxHi4iCKAaVrvQH26AGXCr37G8Wwh2KpJCHkjNoeVcWAuhQ945HDoKjm95pN3MD8WikqKZbR9zpMN46Mfu8A",
  "key28": "2FdV3CyN2YawCdPDvci6HbN3Hgdsk4YcNAs7zd8vP1UFss93ijNGm82jeNab3b9f6fDgx1Lfix9M2c8hHQCBj81q",
  "key29": "4zZVc8B35dDf1hxth2QxqUkJ95sCqsdSwYSrz8pHPUbTT5o87o59MjgrkSaEF3iQD73xBE8xXsyLw8sCWTKcFzUD",
  "key30": "4Gyrv7h1MCiQKojP9E761DGFUgmqZYVrfSKeN9yLsjdzPKXMVx4KrMXLyt86xUeFKfNuv5qrckEWoZ7pQNu8pBCn",
  "key31": "3hFCAPpcpH99oAn8x1mPDtaSWtTZTvP3UfziLozW5BAwuAUb9nXmWKA23537M9ohk5C88BoCyKz5FJ7gB4AFZwmN",
  "key32": "5Pd4E1hKPfYKWpHL3FYbPRu4Wm7xnn7ywncXwacrU6icHT94Ee591RRXWGsnrdX8J2asMaM1cmc4wWKncg6z6iBW",
  "key33": "2GniSD43ADdNcJFRzM2UR5Vih3S5R1pbW85puBSdbvGvuXJdQ26kMrwTHpf9vzpd5MP5HeoJH76CkhrTFt2CmDWz",
  "key34": "4tLsAsN4ZEbduSfqLX6F79vYi7auVwfFrSk2Mm6fsRpVLi5dcAG5y9qxNnz9Tt3f6kiGBvoETrHbjM7KLmGUHuNi",
  "key35": "4Y1MSSX8nugogGraS8bMYehwWtLcksjWVtsUhrdz4UUNVPA4b7LwmaxYdZqtX1YhDV27PQMdN2sCTMZSDkyddHgN",
  "key36": "5eLTjYQnW8pZ8HxJUfSf8roVPin8f78HiMY7ViqsFQAoBmjhvSfbKygfDcMiZgemELV4UizbPUsqgZAgmgma62sF",
  "key37": "2xAsGVWfkwwxGw2FF6HKW9jWjAxDLHYVfPJJBa4cB2npCWS9UbJ7KoKuRTeZgnsuvoWtPXXRTBjU9jVqKXUwhnJy",
  "key38": "5MGsCbLAyX6JF9GUWgy9WFnU4TTHp4mQ45sscDbjVHY8HJVw1DWZbFwAMQBLVcpyTZ4zWVpi8XFB5HBbFNFibinn",
  "key39": "2mVGnokrnRGe2jRpDGva9ev3LyEEL9FtX5Z1eeomWK73HZCkZYLQYXAwpwPWehAnWuVcMnTZytsYpZ5feP9RmDVQ",
  "key40": "2W6CMKLKUfAVkESxsFX1eAcEaSv1wV1BgWbKwz66UGWxZ6tFyEQFkvpWV7MdtajEszahNpqV5CobShnVqiUnvvnE",
  "key41": "jds6EGuqrabmBWZAmFcEyErAyV8u7mbug6ZPZsstgWvEVFZ1wSXpw4SLBNDfPrDc4H6P5D5YvjNfwQ3v114NUkq",
  "key42": "2iUfTKDz5KERGQ6pJwgQpqY4v8gwyJahPSYw3khoWd7JEym5vU7hmZB5JGq71vv9vxDd5nYpE2WQ3wGwXN7tEdwf",
  "key43": "UgbViQ2ta23VA5uCZEtfA9yjkPHxwyLpHUvjXADmPVNtuEjupA7WY2gc7m63GriMC2DrEhGM5Zqeh74kKoqFgHf",
  "key44": "3Tu2zmexofvo5JG6f2bcdCbWxHwJoKZYa7m9bMi9Ae83hQaP59oURNuVn6PsbP1AazBMEMjN8eS4SfdifDzvvv9w"
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
