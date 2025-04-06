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
    "4HLvEviR2fM1E3nqnapMFjzusssQPPa6fcpk5GiJocVhzH5BgHEXRKY8L93dijZWaYcduVDJEhtQF49Ro8NRR9ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j61Wub485KA3eSD3jSyXzLYoRXWtmeDptknikqPapt1wzHyxmZyuPLoYdVyLNmHy8pNTD996fxVMuu6NqeqrBZx",
  "key1": "3wwcJDCW9bdXeWe43eZ9w37NNQ4kYAB82wPQ6xgEYJ2dotZKArySu1a5a2Jphpm6NcHESUjAzmx5WKoCDNRHxo8i",
  "key2": "5B6mmqhZwkkXpYo82UTy8zrJtubHK9FrqTgGB1LFwUz3QfUdvKXLhzLVewktwMmh58v2RCgPXeWqYiSS3X3LD6KQ",
  "key3": "2LgutnqWnhJkCKRWvPuojj9jhAS1vG6mXt4w3WtoQTqUDRmFMrVCcPPZxgXTsMMeGAKGAdvhePsi3JNTTcCLTGzZ",
  "key4": "5Y3wMHUFtnpCwYn7azoKyXwifRSqhoJ8diabZQNTWCAttp7vXaKefRSFaxsz5Zsc1JbfjP5oC3fpZRydZzq7ymSm",
  "key5": "5KXWHCdyn3TWWAFrwtqJhHK3SPJ3rHEDZJbMmxcm7hjonDRLHXMT5ZhqHST11MqXAPy2mrwyh7EHE5ntyjRCtfoX",
  "key6": "3CbACWHo1Z2oVBe42qxd5knXw6V3Dy9n4cxc45CvfBdGFNbwXCA7FkHeMnpBn1Li8EuxBeB8b9S1JZSW71WzS7HG",
  "key7": "4LGzopDnzquTYQJAqvG9Lj63ARbZwhzZHv8tDgsecrG7sx7Yyk2cinWtCuFy9xLNsAt7nujnnv7cdCtyYCbgjM2U",
  "key8": "3tRSEGm2vzDBn8mjuiUPtts1DPhRSiQcR7MfP5npXZgFspkmKWEcaGa3WvY7tng99EsHC8m5nAzKFsSpBiyqc8ZD",
  "key9": "534vq4cN46xwNdbqpxSnR7r58g8g6jwgps9VEDBJNrj8D1ewce3tfuMNfwbUp7oTf4dSr7Cwmq3Ayf6z9h8ytkeB",
  "key10": "4VUqearL51RHvJkXXkLRxp7YCw1oxLFcMXkxHtFVvo4Y56MMu6Tu4tfr4mm5HMsSB6fzHe5M6EV3J5kbbSHYFa62",
  "key11": "2tHJho6LvGwnQSRi3KuyGHt4d9Xk4qd3o8UyVG64vriwkA5Vk7d648GwK1ASuFGMY2QoEjHaQNstTJHbsqBv5CMo",
  "key12": "4cpy7D3otD829L3QpKW7ExkjatHFJqCjETUDLK98JqBqokqKdVksXRupjjqUbsmPcgPH3o7s4XrxiZ6XYKfUbYTn",
  "key13": "2D9z1FFVjF4ocssLABvUeVtxJB5z9WgE1FRwpz3pWWpNxLKPE8NFrM1WAHfxmZuavwrRkSApWG9Jpn6ChvYQtHgF",
  "key14": "4b24bkpJTj4t1mNcNz9DoKH5mSiFzVKShKXmJQ3h2Vwkx65287ZcbiKHupEjsHm7kbCgaKQY4XBJ48uievUsBhzs",
  "key15": "31BNfbaWw8wVtU1RPKYSZxFepoRLSMb8cRsV6j4cf1UtRGR45iWVr5t3yuvbXTjYSrfzsTxLW9pR1nb2VmPq4y1s",
  "key16": "mJtKrSgtdEiCNRjcjV2jApisVvJGYH1tprX9pkh1JU3VFK2D4ZNaffVtat5hRKSzLXBy87j9B1qruPeY4qKGdwz",
  "key17": "Hy9v9eqGXWhjjraiGVFYVgAaJyeNSJKZU3d3oTruqDRUQ2K3iSrbD9gcrbakMXMnU475FkZi9oY2sy7cJ2z8gJE",
  "key18": "67XHfvWDJto8oCinjyhb94EQW9XoLn4e37TTfjpUz6TfmPTrZmdV2ghPbq2XD3zzXvvvhWPJwfg2RNVeQFZeCL7Q",
  "key19": "5SUa7PizAcHtFydWzZnrNmtHAjeLeExjigXopyATuPhXRKVFe2uboJGwP1hJEE32xLZ3VU62xEUrKVocn3hRc8A1",
  "key20": "5eFLsuvFpZK2xchZ9QFFKT4TxuRFQUV9WyKyRqaw25QW4c4jncnSzoXnLBYcm7phu3xh8Wq47kMXTdFnZX146eVu",
  "key21": "2JjCyjATDa1KZcYUTyTdgjZ1yvLLkPotzXvwrPQVFTAV8kP1FXMvxtVvvnjo6DZbztkezy7h7HUWHGvvqq6J5BVp",
  "key22": "SmXEaADfee8oxDaiUPKpA2zeiE3HYGRfKH7N7oieEkUdauyJ5eZASo8FeQ1iS98psmTFY6i87JWhf2ojZfzVCdf",
  "key23": "4uJgAbZqv8xMRutWo6VHpYnrMzTp2oC4xk2fy5c3Kj52mn6vDUR62iAU2z7LAxLTCDeiFYwxED5MPCxhcoZ8S9Dq",
  "key24": "2hHHgzBb1UDwbyjeyfBRH4yZHD2b8aVqG9pzPhztXFxrv6517ECnCtdj8EnZfg2AcpP5wPhCFDQpBoWnusn5ybnL",
  "key25": "3znsLpgcETBWd76fxEEVzZ9HcH7kw1UgQsstFNMN9fbrFtHwQmnXXkhuxZeYaT3YX5zEeg1zqkjMcdyKXmvFfKUM",
  "key26": "2Spf2PK18KQou2NNXgD7fwpYU7qyC2qdc6daqrrgQQ8oEr9BDoFcHYotG7asNVzbJZUDDCKZKUUkUwNDRnbYGpyC",
  "key27": "5RBJrVwyEVjRoJWxsgw3tHRqw6tD6esGTfDUfPjjGGcjExMNHgoRtRWdrqLEwBqWUt9NmCrKo3yeqXQF3kEuEtpX",
  "key28": "383SmXz71anw7qbirApcPk5DtFfXD3QC5Ug1mGdDQfNVbkkF7WGZCdPFMfbkrqPirKRUh3SDUKqEV6ru8UdRGkTA",
  "key29": "2rSs4f3HSktttse2ePhib53WwCQBk7qzV5MNSgWpTucd78PqWCnsgWHquQJymVKmqnSfdNMLZUwZFFRedzW1RN3P",
  "key30": "3B7puijh9F85358SZ72GL6uQLXLFk9trC75ePoPRTXFZf6Y6HMX5vfMX7nZGFtX3G5eFiCxf6VW5BxUwvfoAVYf6",
  "key31": "27zCc1ryM2vMKy9uMjAyqTWSekSe35J37jP44jdDaStUkV2BJsmyQv7Coi1hKWGxWp2jSKqjavDHrCxWLbX2bySW",
  "key32": "3mt3H8zjMsjptoHVhL2qW1eC3xeYdiTMEd1Yyr9LXuaiCeaLzFQVJKA6eb4eBtJ9qTPzGs3zhC1SPZxrBuDt8ZGx",
  "key33": "rBUw11QuBDyru93rxnSj7DZUU5SGks4D3ESKbUsvb9xXibzMNm4hcXqVCPdBNbRaJboBSrnw3B2p3AbzG2tWwGG",
  "key34": "VpexjUCiRKoiK7K7WYT4UnaohVSsZaovv45wfNjrUyuy6R4Mshgkbj8pSL1inF6aTQHkH26rPsGctjf3D52ZV2u",
  "key35": "2M1FsCzNwQk9ostPBdRzQzTs3PCARCsWEM2AdjaLh64qhvFKw5i5p6hod5LrViKgyXy1J4wkK1WqBUvwM6cR6BEK",
  "key36": "4YpWt9HDtLttCTAZzRDEuYrSWEFSUiA3tH57w81SJ5wwTreG4mujeDVeKQvVHKj9i3pbTfoUNTVxCHG9TJcEHfVU",
  "key37": "3uRWgcSB3gTQAUwRmKF13FowecEptyZEhidmQ1sdcf5QaqphW9qVwDksHi7yvcAdoKXfYsZCK4yGFQ3tLVyQLex6",
  "key38": "2RHe8mbxrqV5VYth2xeJMrSzpEgepHw3mTmWi9pVc9vBriUysgwg1T6Qy3WETXFMD3m2L4g9JHKScVeT5ebQDowu",
  "key39": "MZV7diH3sciPwsx7ru9osdW1zzCepfMNhyYW4iVwhygbwWKLPDomSDxuTgX43fJo8xYeM5HGQ4ztMBHxsUjsUDk",
  "key40": "3YMvWx1ZxFbXKSYrmad3CmVZzx3CtkbhXwh4svaEr3ZrLsrVyQBa7vMJuMHqWXfYtfmZ81fb9gEgTHe3hZasm5oN",
  "key41": "2WFpUk7KRqT72Js7s2m9sV6wAQv5NZkfNLEy7cQJMztbkRegLxgXxWkLFynBXCMMpiessAcWERLsFtWGKApu6feC"
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
