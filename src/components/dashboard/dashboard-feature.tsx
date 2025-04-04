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
    "6mVdWw1Uz9iCHWgbyYnJaFrUVfXgES5GGZxJoz6f9rCKb9n63JzjUcvVjWaReNWHL6dE634cYgkq7wDp5YNXw3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649G539oBdfKn7VoqwJWfG72BjmFwbm3ZyWMtizNU3EEMAzCfCTmqG3yPFTBgybiRyqBrCRzTEjFrHLVwfQ1Xmdr",
  "key1": "2pKZ5JL2K8YvGKGAzCTdPci6MDrf4xEXhBJ1VQAL2aDPkVBtxaXQMYA5fNbyWFS3PGRsLoqGtxYmFTqDkDxPBLn2",
  "key2": "3ZWAi7Lskqyz4VRWnUhYD1p8DLhQtdy99rm9nLdrTWR3J4hPQM9kV9LAenr3xrXxnS3FaUwvR8mUTBYNxdJ2uXE4",
  "key3": "43HSGQZB7qFRLQLjkJJnxrKxpV2oj5CKNcHr24YpKJQSg83SXT4e76vE3eEUYW4NAqFGWZcrgMiBCtWWDezRDcFr",
  "key4": "4o3YgTJgC7F9qcVL4CAdYGsGge2Pz2cTrBFA2Q3s7rrtP8n2JRmAVGDtNGbbWDVAio2qwt2cHjjBuDD2mqmrn9sD",
  "key5": "3DRoyQT7oL7k5nrqwY82dVWezN8xDxDsMJhWQMUHe9bwrfHafxuYgG9snsqpwgGYR466J6DWD9uyhDP58ALD3euG",
  "key6": "2NG7D3NQ1W2md4QHaYQi64kMdoWV8VMj4RiGxuN2R1VGnzspeApiMm5J1SfnuC54jSM25mZYWyhguGyLDx3V55Wv",
  "key7": "n4266zd2jGvKJ79Nn9iKADJbvYZAhiQ7d98w99AhoGLEWkMj2bEqnorQSAZKqcxvhQWcKSUgaD492JDsfZf2twL",
  "key8": "5wP8fTCuN1QNz9oRxFNZUG5MHKxTYtL9QRrF8ENB5cmqnojtzZWX6P8TsUn3sgUXiqZPrgehYeNTXRAqCBfoEmmC",
  "key9": "49CqFd4dpGc4auAA7jtQ4GD1FKp1hXA6wDDwpZqPxXwxJswKkdbj2Yf39FFABPe8Y5PTpYDHA543mmr1LkZumJcB",
  "key10": "4amD5nTaUd9Gp8SCd9GmXoNvQXN99iePBFanh82rJL46FJZisc1RjAfmqtNwKj93Fdn9UZXsXQziSuqPbrY5wLE4",
  "key11": "3zsYAa4iKuxM1zwGAiooZXthZKHvjNTfb6jscNd2aYsZ4WedYKTFi3qDCbTZtY6vMbGxF7ZZBMZsudFPtTQ6vvj9",
  "key12": "651fqNBr1gcNN37U9HfkThQL35ACpzYrc7oS5Ndvc5GdoDRd1apfRRzd6pBnsadtEQgWbeUEj48NU7SAi2NMysps",
  "key13": "n33zd7VvoKybvyKUjZwE9dCGZdk3rFymcj55LEzfhWZJsuKpXd2A8Q4bwMiFSpNhHu7Dhpak3f7zG6CqeAWC9qh",
  "key14": "4Hzid5tTnAX9pawNgqji8vbiw7pyydQrCMpVgV3s3dS6uUkPgxqMnkKek3mAsTfb1pxwXED52BVtwV8VMMKnmr7z",
  "key15": "5dcE36oXQMQaWHzjjDMfHV1Nc47uU1CZbenQC5gY1ABBXJPSusk5FMAsbZWnqdDchJzdWtgK19wXmWadikc7SeEc",
  "key16": "4RknoD8caTBCNGKJ1iYTsHYRS6UaNNZZys1YaigBRfGMex3T6Gz98BwkJx9dbqAXThDzVDVkwXHEn6dJsJMv4hJH",
  "key17": "5RvFt5JoM2TaLnxqN8UxwwCgVAxetfSy48VvLNPY9Ap2TiHJBjA7fLhKb86Y2EkNsBPHVMGZKSPgLnD2BkQpk7MM",
  "key18": "kySLvMy5mxrEsbGJQ3PggyJRwarLPMrEBwm4Z2SEvKUgrgHXNqYGSXWWyknvpCL88stuRaephLwAU7ov6Ho2PWY",
  "key19": "2VeFMFdhH2wgZpPmUYq9AuZHmB7V7Vu3RN12NUgUdqz48t67WJ8sTpWvNJCvgxjQF4j1eqY2tpagudmGAMnxKP4x",
  "key20": "4qseih59EKqyXspXUpiy7hJbrzy5VFQG9pT6GvEUYU8zb75TNFkKWSGV6nByCqN8btr7WnXeN3dbHDWNwqF3MAmx",
  "key21": "U1S4xPNtWuReJSBn5yUyh2V38NCUoK6gfi8VN9yHTWtwtoVY8Tr9gZSHJBQa5ZudqQxPR7aMMbrjswMnCAVQQvm",
  "key22": "3BEXpQsXMFGbaLjgC7wtKJdFs5KQVPA9NPsXRXou6aBfsYmftzPePHiF2mXzNcMsfRXEBFuBTQEJTc8zp7QBttfm",
  "key23": "3vvQXHbMz8p8guDBtVYh4szB7rAyUbzQamZ7sLvaUTtPjCVbQS9NuS9861tb6iAGHoq4M2GT32icVLi3YF2JDB7Q",
  "key24": "4noNWxeZxbkWuqqdGB2y4wtrqynz2c77TVXrsZEcBSnbUcoEcCfGw31JqZgRTCkiQ86hJftmb2euYsCkzSEtGMiw",
  "key25": "QSEBopu1ibLjxnwKvHmDGn4tZBref5h1wxsbbWHYL7S9R9xa9d7ByAVraS2Q3seK6JwkieZQkz6iBXShXPh2TQU",
  "key26": "3nQ9QMii2DKkGXs6vqTuBNfRVK2MMSypscPArBZzwjWpSt6qn4eftwzpB4Hz6XZviCsKPhaMLVqtsaayb3ipgtns",
  "key27": "G3dtQB1byUkKhRbDiuSp9514uJDSFHz8dKh3zivceVZzPw1ZCso2mH4oEkwkW1h8N8skRd6cdTXittCD1cyGSRT",
  "key28": "SJmaPwXNM3tmm7E8VTgbNEkxm7Dhh2PSAPeNYzojmT838MNQ5RkNiGFRhuXAZGernVBAu88riAg6AisshDguYMT",
  "key29": "2948TjKCkTHHkifbAx4bVYgzCQeYjxoRiiN2R6W9gFzWKQbdKjcmzBSNLtp6yBbPCXFKCD7TYcZUWDMfXjUjgXxT",
  "key30": "65opSPQhFExS54qkQs2C6rv2jas9Cntc5xRdXKXfiiCEVexg61eJJCjpC4EWLJ7WRWfZFaTqZgW6DxvJ4bG2wykH",
  "key31": "4ihH5dJpJA8FYnZMaAyh3bjSCfYx1E88PgRrYa79XTrozhMUJWJREb4h6fD3iNTgmSZdseyi51YxhGn3ZqV9b4Rz",
  "key32": "5XFjvh8HMf1xc3TXyXsezTUrmnQb1qEH1BWqvNtNCWDhZyDizZv7EU9DcRJZGpvs1ESwS8iBxQkYpyCCEwUjkNjj",
  "key33": "3uZuSaETSVB1zhfFG1vUpVeMydrTL1iFVTCELFJsZNahBYfQbLbpnvhvJC48DaxCLqPMoZoe5jnfWXzVnZwmFQJS",
  "key34": "5hxPx2HqVb4ucJownnSgMqL7kXta7M8QG3NC4u3rjz55JVE2CnN9vF8eTfyt1WkCpBgbtuz2iaGU8sUV3zKYHDvW",
  "key35": "5Z9aSy6LDm3QhwipDSHnTcEUBa1YET5Vz5NciwrjKHmcrREdAUoYGe7e9btHAeaR3Pw22ur2useyk4XeRW7zkH8k",
  "key36": "3bcd6SbFf6sqhH4wn87bHrThn5p5StcZwEGmrKuDh3QhG662BbWXUkd5W3JHuAdqQYshe4fjESEWFYgZdqNH9Gi4",
  "key37": "eSPsq5AZs3JGDkZPCYHwHam8pZin8sVteBJPnbYW9kRfY52bgpEhN51sMp5RpSnP8ChypwuDXdCHCetaM257Ev5",
  "key38": "5TtjJrbYQoHWenjHB3r2tQzGDGz6zypRYphwsGDCSukJiqPVwbZvupvmGdxBtZLH1Xzo9oV4bFeNQmx4oTiiT3z9",
  "key39": "2xFWtwuvQWUccUfrQs94YKkHdExFkbsuEYatDh6rMAbGEit1sp4WB9BAsN2YnGr8Lirt5v9qDVwUjtQUB9NF9vwa",
  "key40": "5FNvVcbeQGCWzB1Wvioi4n88k7ZKzGfCpsM6nKXHAQRWA1E72656Y141jiQtmF4jHgU3tsAbxAKh7XF3YTWzsGqi",
  "key41": "5ACyPbVvbm4pjFiifa1zDFtuhVBEE9mgxNpnBi6jsYCxopxvdfAZBJMkeH3QuSudQBK6oVRw1oLuXHayR5GMip9q",
  "key42": "3n2Z9PD5PGqYtMJqjyFvw8Z83APyohnHL7Yt6d9HFWrJUeCHsihMk2ZNprKjdUVXHw56YEeHVGg2L9bskvnFbhU2",
  "key43": "3YQLRzF3MmskCEfVPwH8aszvHf4yW3jBoVuKVvUe1Fq8mRc5buoV7Y7MD98gnfZmWbQxbEmcYx3ZK3yLXWtypzMg"
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
