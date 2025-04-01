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
    "224YWLXS6wcX2DjY875i4Nn4bp24MaV77ykmV2LtTYytbjtHkyeWdUN2bqbwXGhWdLh6yvVrvUPuReJmQxgUDxnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUQfWxmgNaNmPH7Jdt7QrWWsTNHPGDXtiVqTuBy9B3B77mCXYmN5hMTBEAfcc4B1a9Tnfj1Bsz3MXzoQEzAmsgw",
  "key1": "Y8MbPrjutYrEM4Dhjmtmey4V2WNvcmfK84Skf4ksCxnMAzg6nU64sBoRyZvHdozXhoGPJRcrmLLznBoZTGR2qH4",
  "key2": "27jyiV1M2cNPTJGkHeRgUusdZbMkLn6BQBFfM2Bs51PC1JmkLidcfS6YBD8Kk2Qb3ZH3Cq5Dq4PyA4hpsbKWCSMW",
  "key3": "cPCHKRZqpCGVRudLQNByjX2NieQeFoRRq5WNAgehAvT2UpJzgbRwj6WniEDt588vvug91iQMzc6UzcmvUiqazNa",
  "key4": "3H7EAs7ZqvBjWv4mNDRbGAM8meARQFsLiZLjQmQ1fWXjFEnr6zUe3Kst2eQv3M3fmJhPQEMVrE7MMQwAF4VnB4jJ",
  "key5": "ieERZ4GVQCyWVGmxcvtRrzsGvVUpP9a15eKBojKGAsKt4PT62KuW6aATajUWjau5wzy2vzT89t73xgzKXSRRJUK",
  "key6": "sQYzFFchAhy6StgGCAbY1C87MFzF8nwxBCEwrHPX5YXCxdAbx6XZfqMeZzAgJC75GR52MpfszV3UzqpxPubnYTs",
  "key7": "4MwTiZKeU1kqjZGzc7NqJP5xD1gEQeuRts4j7mosuzSBia5afM1FCfJ4GFCQDTn95kVgrXWBNZTFdPocV8EjbrHU",
  "key8": "3Rvtmpt12vBHNrkc9patjVkYXcztVBhqMx9bzwJnk5KubY9eqtN8V2vLsoZrBAaL5femHKfu7P7KMqXStfXGy7Dz",
  "key9": "4imgtWccHrmPq9CXjR1BpcnfJpVtWXbFh2WBay28nfn5kSiT3zehcXCiMSWWnSscx8vWVz8k4CrCYaFmKFXsJu26",
  "key10": "2Hm5LBDjKzixhNas5exiTq3H82hq9Ae2AoFFw2GLsYNSQhGS3TzyGjMvH7d1vB3LQGqCwpJTMJYYTgu8TzjMwqob",
  "key11": "UTF9mhJCEiHfeNNmu57PLySC54CcQCMCvx7BhLB9gQAdGi6Asv1sd3LnD7PvSDmNGNs916BzwkaiWTESCqXw4fR",
  "key12": "4QUMYZrzgrJZU1Bhnb44ikQ8xAhrHLxr9Gj1nK29ETAvg3tL6oxq9D1DKqwNvD6YPHfdb8Zqn3zByD7H8c1UoZJf",
  "key13": "2VPLB1zhZtXhTsmVw2HxQC2QNbjwVeEXxFoZpFM1sLwyLip9gPkq6RLtNiAeeqP4DSoCTUrhwDAhg6XcZ3V7HctB",
  "key14": "33jZMaLKgZW9fUixAAatZzWP5t5MvW1itvu2E7XWXj3cNBRq6xgGnWhsZrYadAXPoMsDerG2EfcxnfHp9nwUZR8J",
  "key15": "3T3xx8JvAR5TV91C5GFUsc3kKsZyPnoaHQh9tcXUC7Yr9vPP9Cz67X3qvzNqVmGUEKfADdGYWtFkCKbmdPEpa1Kv",
  "key16": "jm5A2UHhV5YTcGVczND7kjhgkFFYZ5N9XAic1ujj2w1fn7sHivvA9JvMcDjWABEQoicURimZ7YPxrwZRZbNZsgx",
  "key17": "sRA7jetr9teKF1MVR3phWsgqaZAJ8iBmV6yAiwCnVQMYJ3mK3YvJCxNs2ozJzE64R4wmhRZ7eVRkkPzT18f2ehf",
  "key18": "3QVwCqDXvQviRTyy6fyjwEAL7ekic5p6RD8xyRTCRqVcaoStPNzSQr9ujoCFxdAGAsfhZY1DJKVLTCj3PtLMnzHT",
  "key19": "28MQTP2rJeg6A2Aj54aiD8m8ah2GLL3v1HFYwwaikShYVAs84HJotnUtA4kZzmp2YZNs32HdHZL8ynemaQ35QDvC",
  "key20": "f3mAB5DgPJK1acWptEZrr26ZskLjeiRz4WkyDgLHXn3pVRY1jkvr3g4XBaoUFkiq6zXbFeTBHjYrouaJhjkvB7b",
  "key21": "59Tb2RSQqt6D7fEPv1K5wZSU1aU7QiubAEpogxYrVrjm2mKrfemXW5mFWKpSvtrpppZBYTUGxyr3nMnSQqWY9CS1",
  "key22": "2UpE8EL3CBPupSP6CHs2VYYN8zPwnrmCcHuJiDRoJi6GYoovj2JNcBD5pcgSZxcdyVv4XnUpBWWUgLdKBGqhHrir",
  "key23": "2kXeLEG6T2N5WN2MYyXqmuAGPfpPpL4K7fx2jBE9uM5sPKTYtorozkTQPNBQkutZfpkW4yxETaBt7ZjXh4H57pXA",
  "key24": "2miUvzFLBEemLC2uJ82kXR5DHGutGMPujK4Ps4ZS1ZsaRmPGHyvQuzxUX4PDjr2wuaxZvhgj1bQ6UDZB22oTpevq",
  "key25": "3VNSnaMLEKc8K4ad7cjgzqGZ61H4Td8JJoEheF8TKUonWFRVJpb3Gf9n2qqtYwDdBpdd8MXe7Zt9moTzGjCTGV7h",
  "key26": "sKnukZRDrsRUnSYA2Ph9iy7MXVEnvyYUCNmrtaa2RQqVKYeTapF9wQNna9ALTWqJZmC8isE4qwPogwMCQqMwPoY",
  "key27": "2ykKxg2CRXQXFg77RBfo5HeCQqVQUEcseX47HNzu66nMaouom1cGy3XWt91cuztgdWw2rLRCTMUtgHRABieJjtJn",
  "key28": "BWpqy6DizAA5i64u36sFesjcF9At6jvEbTRzUnte4pD5u372DtryQFStRTuaHqebpKmkPdhDNLzHutKt5k4sXai"
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
