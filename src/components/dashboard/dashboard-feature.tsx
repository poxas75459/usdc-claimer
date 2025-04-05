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
    "4m3w4ESm7YyZMmFv7BKsTz4A9E6jH6PX8YxxJyCLtopWvheuBi1CuJ7YT35y3vdcdzRpTtZnqgcj3TJxZ3m5xGBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VfwqHhR6WhcYixdsJc2AHU1wui8pdra7smD3UoWXHQpxyhbsYZPkjgKiF8Qbb8aajQe8pFWZwVuXFL6fSyEAeC4",
  "key1": "3yPqV5dp6PjorDHo9kV2uUuZPefqXHL9w4Q4HmfzXtdDxrhh5sKZgL9CGwf5tAMHDzESqbe4zPW1mq716Xgbd3b5",
  "key2": "4T9jc9RhJXEFm8BJdfA62gnqXQxvuBWZ6kDqFDGKDMnhNGurdMk5EnjEYbsmDiKWGQLMzAgcb1faPGBB7C6HFj1X",
  "key3": "5UfhVPNgrPmmFvwcJcCguhAbbAtsKXcEqRhCkdg2XAYecmwVV4jL5AcGyjt6QFFZw6cX96AKsVrCj9m2fHddxpMu",
  "key4": "3fzMZMx6V7ZohDEYi4ApUyXgD4KLHYfvBxscy9D2GiHckf9JbESC13X4Cm29NhpNE8AzjET8tiZhLBbwdTDnMXn1",
  "key5": "34rAd5WKDk8ejZ2958vqHC4mwyGwb9GYh6JuJ4Z38mGTLzEDgN1VAdGUyme9moYti7HMWP3sYV4qgszHYi4pxCyD",
  "key6": "366skfFxLBqqUA2dpc8aPv8fPaKguMUPEeVEU2NFn7cJ5x1Pp988CFPn7eaYQgaBR8Vp6cVEJxdVxBN939WtdJ8k",
  "key7": "CFbXPn27j4YwQx58nFCnwzt7MDURzK9W2Fzkqxy5ewScxp9a1gFCjTABj6yLN5qwWMa5vR3Vyp1A8yY6AezesPh",
  "key8": "3wAGyKi8KL52SiQYRngT8EsXe9Xh5kCUDfE65aPzPQi7ubB5jsMNcsa4cGqRwHcDmJAdmHHKTwEhmiq19nX7cEyB",
  "key9": "4m74aF3VRdPH6xBbuyxQaCzhfHbrz5QDf5upfAnhWsycGV2ZSSxMKrzw5f9df7wr2VYtQgth1psj5nEM9rat8xLk",
  "key10": "3tuFQ7Cq4pQAkVkynMMQiCA76BCCMfzZQsf5gCqzbddRi2yvWKHojiFV8Pwm9Kr4Vo1LZVAogtVCbtjv4uBDoZXZ",
  "key11": "4DhnXNSExYSVGtX8oBb3pLxcsAn3VpiauLpJukSiSA1sLsq88hZ6KG9Es7ZMTkimywmfHvCVjuvYKJGMq7E8ZtLy",
  "key12": "bjmqS1QVzC4C3fLA2SFLjfpM9pRHcEG2PUpFc3E1EV4wvW3tfsPUYfJVdhY4cgqunaTWUGVADGDrcfZ9GR82eYb",
  "key13": "5NTuAQKh35hGf32KNJMrzskawNqHFE9xQceJtqX6srFKFcpiEWyEiU1ATSqMVba7ZDF1RdFgLDDfibssbWcfHcmr",
  "key14": "5LvXdJe5dsW9T6ZnzyA78ikUCzZtqyS4cCFzUWjJThF3bDmsvhWpiZaZraBqric87YJTUq3NG1Q4HXNaUkQWSsr4",
  "key15": "64GjJW7a4BDAmccNQyy8vCvwfWxbXTC1Y9WGtCVH6KMrQXaoydAPp4xq2az1nWRQCX7DqYy65rdZaUHyUMD2kuGt",
  "key16": "LXPSmb7s3SwSsmGvj4SXFqVEivQYsCanAWAUPneZcEogyogw6U8J37nqbMNXekvEYcy7ZEiwLPbukok2DskVv9s",
  "key17": "Q51uyudUn7jiKWPJQwpszcdc7NXo6Y39AMD9RTCDuBMcyJ9pgTmYBQTK6jv8tag6B3cjZbUrxENVR5tTzBqdmC3",
  "key18": "dmcg8dANLrTh5AaizohvBhvRY227pmoKYi29qMrEQrDgq8W9xxzz9vVGdeAdrjjdWb4AaEfFMyfCF5CXhJoZYxR",
  "key19": "4k9NuHw5GmKt9ar5vtzTN9AMCECAkJsV1bDZ3QBtmtAmeZdWKSL3xdPFd6oHxVAi5nTa8gfaaM3A7XACnAg1sUtU",
  "key20": "21L8ZLzSfxSdYWHtWqvmHcTE8UMFS2emEiXrGak42pGw9suVkFzj7B71wgnRwfvJy5mdmT5bk8k5g28WCZGAoLPo",
  "key21": "4US5D8Aafwmdf2skGZqvBg4w5LicJYEmPVdWJj3PKq7A65ZEJdTMUtTpLgLKcZpuqDPgV7xStbJXekTs8anwGZ94",
  "key22": "5L5rNLuCW3zYKtgMtxxpw6yDCsboi9tctfEahs1cK82yjftBARgcHMhDAKaQhFSFAemj3A92PUNw5KFaEdRusxqB",
  "key23": "5urGs9Yu3TWrDSjiWu7hMB6iJi5B2swy8AeBFsQGtcu5Za8hiGEiRrqvdQex8VpR5FD4A73tnNjzEo6UBpbR2un6",
  "key24": "J6SJd4zqMQjMJd7Yayvkm89kVDTeksEnHfk5zHDHS6juUUCi7zMNLwUkMaQnmyntoFGM1E2hJqySHzmoLnX4JQW",
  "key25": "5DM2P4bt8Q6wuA4zWdrPdpejqU8VAAb9dT1MYbeLMB3eaZMyWWFtgDeJw3HadjM4oMs7xMCDAvcyCXNYxUgnc4HS",
  "key26": "3pwWxBQ17JYtskQ4W5KiT4RScYMnwmkbNGEePkLgGoZH8J567ALWA8NbjQpzNhFbiknvu5QyJ4YZPrdVfCaNzZo4",
  "key27": "z6aa7tCxindptrSPpP8tnKqjRqSkZUENKdN8szjDuU3q8JL9sdb125XhN3RnpWP5wHw1zWR36H5pUJXS9eLEGCy",
  "key28": "5zy3wofrvt5EwwpyV9CEeWLm3Nh1SYGhGZ7vJJvxHurRxFzpBhgY69k6N11aU6ULVZaPtzJrGeNdy4WjBwKGKuQF",
  "key29": "2QAcyfWiLz7Nj2m2SPKybFE1DtRZNj3zwuML67cPuN8SkBPGUb2fiYy2DRTeVJUHcpdg9Zp8g6sfjJyCrzVgm6Z3",
  "key30": "44AmaZ4YTryJbEqTyA15etkFfcZVgTKciVSSe4ynyWTmr3q5jwjfrVJfTxCGgjeuf4Rn9cNdfowx7ifFuozqx8Mu",
  "key31": "XxpxKkQbBAwmZAYsULsEvXuRt3myJ6fvtBex3ik7zuX6JJqZh7w8h7a46q5Xy9hbJX5YoRYDkWB9VTh5Fazw7YQ",
  "key32": "5WE6Dofb1b2CrYNp8HyzsvZb79kD8xWHHpfXyzB4ieNwsUs2X2eqSz1Y5oGCx4ts1FroFyequAFgFRypQk4tH8WH",
  "key33": "2wtwW5ewAaemZQBZuAEcL1Mz4mQN45avpDwwd7MTjiAjwrwzBMKprfbt43P3dajoXtkT5Am3JV5wP3YCLrPrza6t",
  "key34": "3XgA1SFRZZ3AqowwfsHtpMF8TxhqTbJiyq4euePnMh6AM3NfME8f4UT7MnMSYFYQHCoBG2LxZmvJ5HcGDQCMU7d5",
  "key35": "25Y6WJrhcJKf9thPizhZGZLNKEeXphKX5sAqyZrmmR18kGbegVz7AFdkUtMThN24aUKBShyAFfMRCXVUkyHfvAks",
  "key36": "5Ji1Xv3TEJ9EPaNPdB4NUHEoptyLtJWpV5NX28ppjXjV2Lj6YbZahZFpGnavav41HWbigbEF37FA6h13pSB4PX1P",
  "key37": "2jeFhdFzLV8jH7HNt4rGPbosUe4Nao9FEJbK1XEbgE4m6xMjzdNhGTq9VamwFjBq5LA1DiAywrT9Ln1ASnpAdKCQ",
  "key38": "5HeN1oe9AqcSdBNDHQ8b41tpiXYRmxURwKDKsGuf3ckRZHy5RsSdtdnTYbR1vK8514ojVnJMtDkEeYWd1hbTwen1",
  "key39": "5pSLA1VYBzZMa6dLMFxvZ4cLBy5bUwX7y3e6TSdrWwtf7TGyUEJcPTdd1aCgc9PNQbznVmwD9umo9LHphibmXoiz",
  "key40": "56g4P5dgdUgHhkkG18sUPY9z1kcZ6Fnwijx9G6Qo9KF6AGa5DeeALLRB1CJJG3vmgsvyfTrQMNixivYXatSpXKRd",
  "key41": "3D3w3ibpaa85qfUytSzxuJd4ytAvp1U7MPfz5drcKd9FHRFQo7J3C8uJ8DLsTV5vNfH8gYdGXzGHgqQRP6i5B2Hj",
  "key42": "V2BviVsVp4engA3FZ47ZjQpE4cjSoX52YRTUwfJhpqHUcvrECgGmWy6Fu2UqXPpmGzemF6cFzfLkr6pWAzdbVXP"
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
