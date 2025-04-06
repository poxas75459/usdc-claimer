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
    "2tzedwEJ1mR6rRioy3b9x67RgxwJh6tbpbaqwRZe4DJ4VBLMr9sv81v4XqaR2zz1iSAjQqGmfgEm1hkQoFQrusit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j92Tw4FH6WX8pPozqVu7b2fM5PwtueLkSGpU83HBaGt2o1mLcysasXzKH8KKaSWD9qUzrPGHWcY86AdmXvmdKAa",
  "key1": "2H1bM7KmXejaMuFcFX3Ej9Bh9W2XWfJbSmtcJF9e69iLMa6vRVdGq3KVSTojegocVsyreATG9urw1oFzY7F8Sq4D",
  "key2": "4mA2uqj5vMnDEnFeZpBMznMjwfkSvnMmrm4ifdrr9pdAvL6ardb6HhsUpajKENSPL8DHJRKv5CjEXyiV4gDFXxSy",
  "key3": "4i5pBXaDXyRLE65bLeYcmkixXCTw4JnQBxfD4hyHj3AuGgQTkTXxvfhnXQjvZZ5fYiSpyuoo7ePRZ94yjHHmbG8r",
  "key4": "4EH5ny4h4xsbmVGkWS9VFoeWktVgyeCv968dfFFNdXj1sJFg6XvyDb6XBMfQ7JWe6JAtfJ9B3HXBAvCESJH3nQZi",
  "key5": "3MJdX9HfaBy8LST2eWoCEN6PCwYj2ZEwSWdFoNSNF6HoVqGKQpT7ENom5CbKtDdWhbpaStqKCicJ9U5ze7N3RoT3",
  "key6": "5Jr2ZyyJ5HuwzBJiWaZKr8YervhZFxVFJjpgRMmRYxpVwByRBhtjgHABnKv4LLUSF1hvkzXtnN4bCPmYzt3862ET",
  "key7": "3GQU583CMTXaX1vtvXA1SGLwzHhKBxLAfdJceYQipw9RA7LruHUDS3cBCFT69G8twpdiNmb3UHuk11EgKgF9jSqT",
  "key8": "2cQMCCzaw9g4NKY5MsEadyrnod8uWx4z7uSqtDxUembbMsm9gzAww1XBGcQCG2U1tKkaChmQaBpjSPym3XF5T4pa",
  "key9": "5pWsRF15Xx6AHJZgEbkv6MaE5pSuUkv6XwCDY9tJY9jg44W5tvnaqQQCbp71JtW8N3rRaGGSEx7Y2kCcfbYMQdh3",
  "key10": "4tXxPKfRMr6rXwg7LNGFDWNWgoMCgzc4PLqenRqCysmEdJx4TXQNwRpQBnUUPAg5BPtH8YffnEYktirsx8YSi9PL",
  "key11": "4fNerKS5QMYbsLEfcfL8m2AJ6BZzWvqA18fhZLqUHXeNGX4EST9Q5ntf6JVzWMi2RzWdoNVe43941e25TjzDahmB",
  "key12": "5beg65z9ZjSQSgz74aG5eYcXNvKjwujqsyQuoUK9CBReoUJ75qgBoZ2MPPDvXQ1Ha7m8dLWkb3wnVgJdzfCQifJn",
  "key13": "H1o9wP8o27SJBMqMBBwkP1UAzS3Wt82fhtRTnAMHcNQJd7DXCUzQgeXXk24tqXsDw4AsBwgGf8XkRPp2pvnPb7i",
  "key14": "427jFcjd4Jp3bAiAc1cUzVs8Ndbsf4HaefYWg2ydcjL4Ka5tfbayinT1RrMC8oyKJMT4vSA3A4aB6trNPWBYBNBD",
  "key15": "Ah6uWFfQDJ8F6jKryGxntUHyViLsiyysx2ZsmYFDpXerzXo1Z8QJK6oMTwqsXYAvUbwd5fAMDZh7kkWG8xKYxoz",
  "key16": "5w9j993JGNNcs9h8H4y8J9Meb2NArKVHKaDBeHdJAVSgD4zLR5WCTYptS3BimwdaPYuVmagxkAEmQKPTUWRpxzpF",
  "key17": "i9inynWQz7dkCeDLhaApw9D9pGViB5iDmoyZkhFa3L2wbzcLvZZzRRen97RubjhCwNsvnKZYbN9rCzrVGwFkTDU",
  "key18": "konDq8xWTWd9rdWtYUZBQLypwJ8xh5occbBVWAFTb9aSBy4Yog95rvke6v6DTGumnmyvy6UM69nrbi13FgpjXRG",
  "key19": "28jLStaJZCoDXxP9yT385WA1W1wBP9TWRXCokVQutZQPku7hoDGhGS9JMW4UQTTgUTBKeGqAUncDsNqNp3f9dgo1",
  "key20": "2jHzwdSZFPVkUZzcAEDFXXhEizcdYkZtyR9Q94QotKhHLuzxFwsWtqyT4WefddSwSaboCStosk8uqqzastmnTTuQ",
  "key21": "tKK975SeDPf7a4C2ursw5KStFC2c3FppTQXYz9jk2F4QvTuhm648KeDcA19xWEgLbyR7wuqWKrz5DH3YkenPDDo",
  "key22": "4qxv1tAtDUye1DhMs2Q1eDZtypRCnr7z96Tjzpho2FEj1yZoobWkPR2oogsNxwzyr7X5fEswRz32cZUgqmBwV1s5",
  "key23": "37PMpZrPi6Pz76UTUSETqaUaSZKv7Zfux37ugd91ZwqojLw4yv445V9L1ZyWQpGaVSHNU8mNkREDMjA6jgJ49JeM",
  "key24": "2oaM5NZXXGD2sNcD3Pd2E1KaaV6BJr4FDiTafgGH1LXrqqfUxP5wGrPiUSeEat8A4ujhGD75MqGLUMD5HCYdFqGj",
  "key25": "43XcXQMhX7H5MSrJ87gWxiH1yzvjj6CU83qTBCJuMvogi9G2rjPFt8hFKUz9hogCSW7bmk4abxi85uwzuJUDdMC1",
  "key26": "62zURnxMMmENQRwjPE4H6JcaR5E7HMMFx3edUAFCdXj7fZQefEoktrUM3AfzhbgdziPTW9Lazpby9xJxPW2BFTXS",
  "key27": "2LFFvbKc1rGFcMp5SmvD3wMkp3j2o4Qpju7idVBgZYBu14jHyyVgETt5uWFrUafNopMSKV8HhghGYSjapHhPRwwD",
  "key28": "2eyXM6r4yCDWQq3tTMsQqNP2eLB8EaFabzqzkeeKq4k4ZZ5sbxGDAwexDhAXBLs4Bz82aKRt2hrXHyrgZF85nsYr",
  "key29": "5fx3NNQFTQezS3dM9v5W17eo5zbcCVaoPqxNgWQfCCgsToE3iVRXiVtWT7cJXyvbUrkH87MtXrzz8PT4FBmYhFd2",
  "key30": "4nMzRfiSfBkQ41vwbeE7VeZ7aTHrssoV5q1bCRtF89DbF2jWsEypm7E2s66q3MAy39g5JN1B5wmcgqeecNSfBzsc",
  "key31": "5VHvr23sJqUKnW2VeH1CmgpXdDK2dkzHrRfLjTaTMTG1pDNTW7sqXta1u5c9hbCf8jEfH8332vZwkGHkKdV6Hk8N",
  "key32": "5LiGgfk4kGWSTnnGK4SoSoopguhANZGunvAwarrWsuAUpEAaY2zqt5e1tAH75oSsDi4utTQVPNxkanxhuJiV3t7s",
  "key33": "4fXkJwDyz48Q641XjozjrXsjEUxb9obekR17pM4TbccU5AzrKdL8C2pzc2zKqTxxz8i4VPhFvMxvEcbNwJ2xkViX",
  "key34": "5B8TYAtZfiDkwniiNMmGbsRHi4jQ4Z9qaCKnqaNTwKGsKtHCJmJ1tkS7NuPRLve5GdUHyri4BiFyExTptKSDWrLJ",
  "key35": "4mtZeH3j8YAw6jnyjdWj3YvaZX6W1GsVtWurFGgZQZfNqwGsZXk7tF1asFMwJod9yyEzNhoUhYVp7E3FpvgNYdng",
  "key36": "F9Ev7dyMFkBRqNgBs2g7oLsGAqqjyiXpgTQKqyeUgjF8YM1Y6BAMqUA1CXk97Q3q1ZhajEfKa1H8QfKxGQZS78r",
  "key37": "rHGEKstSE1owBUsQ7sD6R5CEPGgQ1SykayH2yFXr7QAjmPT8KWRC25oLdTCHLNYaDw2xRXLaJNpcr1KkussCPU7",
  "key38": "2FRS9NowmLR28wBHBdQTnSjvp3RGLt6FnrKwgGNq7u4B96MoCsXidF36GzFXrj9341ioc8twZSsJE1JRCBUSQhJc",
  "key39": "HSXxXSXdsPuj3pek4oXjP8E5St7DRC73cjRFtwSFkJxfiPPQUagtrn9Pbf4NMnotAVMe2xcqYpDeHUcbLsbitkP",
  "key40": "33YBV6RM5oVzhJZgrsMd5trjAis7wC2Rus29LsdwmdAo6ztgTR7d7zvuwnhGD1S3H2rGXGvcvf2DdFbLJaSbyvRH",
  "key41": "2PwP7YjHKtkWcCwL8Sn9EkR9T22J865CXQ8Sar1Xfd1vvThbjbruzT8yWUwo2YQTs25wr2ggZp2HAhqdrKT9RHBA",
  "key42": "bfwoN4fvUghmvNvzTtQpHqxF8LczVvHPUeDJeAbMSSCm1n1Xegd7VsSWegXeXi1kUWgiHG8Lu1b3FMbJ7LHSh53"
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
