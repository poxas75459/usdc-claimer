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
    "4ff9V9n151CgmKDNNoyb8DybCrAoGodu28QoWPK6P1tVHqZgAy3ioHGemLD1wm3e719bh3Ag4Ay4eCqTNd1wA9AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bncu3WTqXYHXnQ4DZYF28EHwz5DFBUX2JFoPR4BG987xKjR1RZBETtNQgH9Q5hJBjkaU8K9MMebDq1Z3UfCHYG",
  "key1": "675F2wDKxzAy5UwMU8xdkdc4UZmY1zu4C8o4oxfpQSh8zSU3Lbf8D7zGsUCG3RdxjRMbDJDuTkbvrnzeeSP5t7Wp",
  "key2": "3NEjJfqXPiFzSN8RzCyuTdzDxt8wARyBjGG4rvDeEgVDENijvtnhwStGCqLncwCiq2MCV8czziFwrxGEGGiGzi39",
  "key3": "37s49EkHed49KobTmGL2c64rVhJb2LxYQ4FjhBjKjsb1yWQwrCG7CPdZHGGvFRdtsbetWSNkS81F6ugqf9gbkf2d",
  "key4": "2pzTncXrSDpxfGP4YR93m2srYTJZickhqqRzFwM2wvcsFKZEBqva6PTRyMq61kRAULduktZeiUrnW3mLCEGQWeLN",
  "key5": "WGJy9iqAyvAZzRkqVWbSNmyAiWZuEizrMbo4hTugzbUVgSLFspRvLUCF9CvpWTr6JH4XkmiCLF9p6TXaPUigkDs",
  "key6": "42gHZtp2w35c8WtwYw1E4WhVjpYEXacuzHQZC9FaytFqZApg4QaseFrUgN411qqXxRWPpK3EinmF6Tz2s4bu2XmY",
  "key7": "3gCLjV3crRFSycooyFSC6CazcVfHMLvvZNoYQpQeT3dpygHXEsB5GBtKT1s5NQmcDEZyPKA4xPJVhWuTcWDrHin6",
  "key8": "3f7TTNuR8aXTvge2jTkJotMjqotwJGbykedYQ7CES2bmyayWYwFgoU1tHNkoc9sEVmXNE4eKxm3dgmzBgegbsnud",
  "key9": "3tKM4R4QGTKMYhkzSnaNc357UuMMGR2TJuFthf7VNA8R3CnwCEmAsmSF1Au1mZsw9GrjUUDgvZBowVEeESZn4BGo",
  "key10": "2kkuMrHXSDstVMAS2V9wLmsBnG6nu2NmdbeGwcnFfZdAj48eCaTMMGAbQT19rLKMjzVuyzD7Ym8bE4Y22JRE3F2W",
  "key11": "2WJnVxUqSzXtVn1P2RExKeSMX6nfwmSCNq6DkSqxbLYgexeQPYHSKgBiSRRgoERBFK8EzwaeRSwcrQmcLMoVP3we",
  "key12": "4rP6Tmi5T9LDTJY1z9Y81dpvXbxLmgBTmcN7MSpRKyFjqWDnjeUnAf7hsrK9ZXyhFfws2oEoYFSVVqYUDg3KvGvm",
  "key13": "4rdrJenqkffKtvNVMaRwxKoGfNuJi7RLhMp8brr8Nf53fhGr2Kr2k1LiFQ7Qj6u3ikQLwakF2dfYKrmMp5G26fMW",
  "key14": "3Z85y9oiZ2emPhdUMCobBqLXNmmB4An1CTLdc3hAvG95HJh4euJJrEeRoPfneMXarsMqDGTFcHeSqgY3Ty2afABT",
  "key15": "2mGiaB5FDYi4W2GsrESw5HU7P9s9h4yGV2P6oyU6tdAniBoqqjgKn7vJssYpCGWkGhYsEtaN2sWEYtgsmGxDQDyS",
  "key16": "5ZwcTEqv8SExoHLwNT72aDHmhXSBkYYyKXo7nkTGb4rzZ96JKHkn5jR1Ad6LbKnvH1wgm5Jz5QW4Ymv7idDhfaC4",
  "key17": "22CmwkFG2QYqiZH96JfabR5LF7qPZbXZHBu8imvqDHeNTSaesPjDddwKek7EU5XQk6aKSrKLnbaVBkmSXpzbW3Gt",
  "key18": "2dyq4bimrYaPnFbFFd73WTUPmmVBq1oxoMMU3qdT8bwNgbFKqxgzFa9czJPmcFnEsH26iwFEaqMNuEoSXhjdVs2e",
  "key19": "7nviD69YnxpbQB4L6zhLqyNuUMfSSRK6T9pNw5UvWE93ATRxpMVv6mNFyRJkQ2HmXcmTrJJvnM5xmDcjQauT6S3",
  "key20": "2oCZmWsYGgk1j57ULEoD4qJPgidg6LHs3rTQhzCZohzoYxkPqTQECFD7o3eQViqTgpZZQaQxFVut9AQgnAMd29YX",
  "key21": "5uyhDWLoqkTeDT2VFfvsnZV6S3WRsVLXbj9fMWsWb7HPgJChjd8vSw9dMUQfZsCAaNyPEBcZUt1J8xE5GWTv6Y4u",
  "key22": "4F4G6p29zdSAwuZhAhSRRKdv1iV9xRK5Jf1DAqpE42hyKWr9iGLyEkp1cRtYT7MzNS5GNqg153ZSYeZucKf7Mwzb",
  "key23": "5msct8g3PLf3daejRtJETrKrC1B9KvfuCTnrbbhMTsN1iiwSdF8X38YVfwjvvjUimGk3EHiUXCqLzrEgJRwQBNkP",
  "key24": "5PfGvYFkAPUZK4VevJLrfmQkNGfg5PQ5VV9XyYjDVHPT4s7qh9s898Lh4FJUxLpS799dHdqZeQPc9rytN1pi8iXD",
  "key25": "2syXnsZ8b7Lv7dEBn9VmbN6tex23ZZ9fX63NK53RzGgLtwRhJKW6uwZMCQdYs9SJqRZiDxnBkk1aqvC2LCNPxJon",
  "key26": "3uhxop8sRmRzzokzUksghJxbjKxAkYguV8GtLjKnCtCF333Zc3fC69LmRpsbK9LBRVJNM4vVrSZG3WjpfYv86zeU",
  "key27": "3YUirG82V2Xm9gS7d4jnb3o9h8geTouEe9dWYNtmG6djp97G7nYz5nufmE3XvzZqfcggP1bHCSkDx6cGgezjLo3m",
  "key28": "Fk5bud6y8L4WMrb243SgEXoUob85LiLAhKzMFx4Si8LWYbHuFbH95BDr35bXd7wYWDvsZX3Wod241dMcUuCkYaF",
  "key29": "2sajhLAteCkYSpw2Lmqh6FSj2AacF1VwPzSvkg3YbMvYyZjsij9JjcSdN2kCQanP7mxA726Z75Pm6T3R9UxBw8i1",
  "key30": "2AqjxguLGcAbXAVnsXWy2ZPmY1TSJdDWqTcHmY3qVh5XT9vvtwQaJrxzc7Ac5cwBN8BhMWrLunKanspWGMksckUA",
  "key31": "2xKsb9ygHwZTKJFRQ8WZ8aEdYnbuYtLscFXaridj1D2pzpPqsauhP89gCyDJn3xbHi1aCddCgS64adFXCvBnmwau",
  "key32": "4fUcaW6aZfSTv63JzF7Tc47pqZYdTMvTmTfQPf3WFkT2ZCQ9UHzGBQZLUcyns8GH9NRvipWxYcFU3KYbybk4srUL",
  "key33": "4XTGWvHPhKMWNHcYXThzZ7vRU2gpK5WDKkB14JyxrEwq4Eih1sFq5t3h96jyrkZ3akd3Q6BjdDhPromAFPJ8KGw4",
  "key34": "59cas7BZz68REKoD35jn1GaVh5biuaqaJARVDUoU9EWF2VyszgUEoA88fgLGbbAcKDV2jAKkRQVTebSmN7xZdhRN",
  "key35": "5Fbd26rMeiWWsAXdqZ697mtiZT9cMkVQ3r5nvKW6gqkavY6DBCLmHkExkyk3Y8jp4Lwym6J55XbHmrm6erbS8UTR",
  "key36": "3LS6t7XmNJqF5d3mfLAJVttZuG757mJpSHx3qiQxCQbpbWGikyBjt7S6rAuQxJ7T89ju6u89hk4Ac8zG589LrTMJ"
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
