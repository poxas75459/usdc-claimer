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
    "vZeqmLZD48h7oAqymWJsKPM8wa4X5mzK7BpK5oeUR8EqSuEnKrUbL8A4fp6nKhhcx1nG3JaaBpGBe9XDMTehGe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9sCpTp6pP9A2bmXk9QcPLNYXn8BSbme3JK5pNmegjNLjXu4tBMbZA46E7w8Mr73vARu8s9ye6h2681uKv7QBkq",
  "key1": "2wQrQoUgu1HdXBA8XxhFpx1qM26rYmeJFSgbFDneF3QmRTCY5eMRA3NGgQ4DEehf1aRP8bhz3HdrqKrEMHrqTWsp",
  "key2": "5BWeNSz1MT8wpu6uPTZmKFDUzyYcYBoBZ53dbLWEGmqt2tbi5Ym5Zjc9MdvmLatGeKuvkcUkEcQV1iD7axZtLZ2X",
  "key3": "4Dxyo8ewi74fuG9NkBEJoCGVNqsWG4WfMHdjvaqPsXdbkYkinvFbehnhDAGxVv89VXLpArtHCUfLuVuh4iguFVbK",
  "key4": "2JG98fdgBzkXB9cFxcEXnodWdYquJhFyq4ajdQH1xHoYmAj7CxSYnthTJWtHpJuNPs3jDwFu1WHQbtMUcGfgL14J",
  "key5": "TszVxZgcvhmvLswZC6HLquPh6skVoCZpXp17NjyZoUYj9iTvRZkeH1Zy89Lc3aoLiEzpyv5HPut7GFGVTdE4j8m",
  "key6": "3PAjtGFrP6Sw6k88TXXW6BskiVw5TGMeTnXQrVLy1monr84C1UAAd7Yt9AFR8JcciKUV2QgzrHVnWBj6oMEf1AwQ",
  "key7": "3RR77N9h9oiGVuEFz5P8SjAXFnnheLUskdqGHZiqw36oKEdWbYzWye8drfS3KBjpDAwQoYaoUaKHrKz5RPcx96pF",
  "key8": "2zLBqadmpdpgngaAGJWFMwiFed4FtnwWBq61QHZMQgVd5UgrX7q6GpynMLmBHcuZMwyhog3EkG8zFp7u226g6pq9",
  "key9": "RaneRmrnPbvxST4maizM6qKXNfZDC5z5spqbwVSNVTnELN7t7m8hiJiy8CnhGzYQN4rnw1npGbUommq4N4qqfXU",
  "key10": "4f6FQY7xSisJ587sfowQnnBe5CTAUvKP26nhL5BwgZLHC2iuAELst7BnarecHU5NWF9cCfnG4wfGfEpdcor5bGRh",
  "key11": "4hTYn5KaDshExQtG7Uxb2Hx1U9ZnJnwfTX3FDAPo7dYGpzTjXKA3pfY5ixdAztQgv7SgVzcFViBzUfbScnQNmgjE",
  "key12": "5yDPfSEMTD9zeKvVYPnTFqX4bpQUkRqDLUyaASSKwUN9JDV2hWPsnRbVANAHAdqUgDwsPLRZtPqAb1UihEoWqsnD",
  "key13": "2ynSF1F2hGmQ3ejC1RYhZPdEQ4REnFNtBQgEf6w5UinUQbHD6sbSgK4izU1UXy6ELWTJFeiSZRRfE7ycCSMAMFkY",
  "key14": "4Nqmig5fY9QtAvJqsCQGEZRPbiC4n5ASd4UexwCh1wA9owWjLvgT8feCjJPkbSfcBiHahZc7AWXJLYgddbnB3pim",
  "key15": "5x2ByRAmj1U84JznY414j8PCXEdgVpx57tQ1SKp1peaSV5ccb8YWWa11oGLbgU8qe5GLH4o8TWHfHgakBtG9i4oS",
  "key16": "2kmQjo8jW3r9P7R4kw79Rsa1RJxaJcY3rPoWiXxfDrgHbGUS5ZnABAbK6qHGfzp3XV7Z7z9r5R7rrVhPNPArUjof",
  "key17": "5fwG8YN71h437DQ9PPSaFgN8E8YkDaWKAAAaXmFnPPZGNa49LWBFW9zAyfLhCUAaoEGSc82edwCG7UYG8wMW2aRf",
  "key18": "28XDU529NLhMSKumTw75XMd9LtscXXRhVSbGJh2JCQEQC2mAAG42NxNuyoZjtteKdKvn87mxuzUnhnwqwgzEeWRU",
  "key19": "3Kjb3b7YFE3GGTkJ51ms2RUKvW7MYEy1N9EcLLMu9eCJKe3Hc8KbvWnGvjgfXdej2y9YdS7rLA6f8nZBbfrQ8rng",
  "key20": "t7qZX24FJQoXcbA6wY38wLYJEVqq5EGQ1PeiJAh8rBRhCT3yPpXBTe723EmNSinknEuQg3njEHY4ZeN5jcMbu1t",
  "key21": "5T16836rzK5rvPYWopzLjxFAh6hawBa9JQyhhnWwDxbBn6DmqfgJZet9SN7gbBj7TbQEQquYwKHAagQnXrfcNamu",
  "key22": "5duQuTCDJ8nLYQu7ypA4Mjb9Pgap9vPMxqcZ9BSMkQ4kqhkZNiiBbmqs39Fp9XpkSDp6fjDEnyuT9kJA2qXEzZ4t",
  "key23": "wHVTaZuvctvEZHkNVWca28AosLdyj2qZ2eBie6sAWdAqdrVqNCEL4jTshJjxHfEH7U8io7tiVzuVuuKGmomLmwv",
  "key24": "3sQXneh2UYjVMi6YAUHAH7ukCXsb2msfdCrt4ZXm6kCq4dASht49b42Au5kjCywebghpR9PtDanmzFYNWbvcoL9c",
  "key25": "5w6DXwSiU4jVQmEUj9eGsAJbjn5Rd8zceug12GkaJCCx7d6TZMQQKxFHeA1hFNBrtdgzy3QfvA9tTcEesAz3wqfb",
  "key26": "3kCrUZALfSs7vGFUaCUHnwD8Vy8pwU67xo1fNCqVP9j37avDtKe9EyiQJeNbhqu7AMdDKGai1Bk5ypzC8EoUGtoF",
  "key27": "5AQ4f6kWZL3ZK6nPzJDDo6D3V85wG1Gf9HxvngPgTJtybeYHMXJXsmiGZeS1mmYhZtB4QPgNU2uCf9MnAjquo7B3",
  "key28": "5jA2B97BbwuyzmyWTL38EvpfAqNhsnuk53hZ6r1zNvQjZAgcHK6491dbyYX8AxsT1BdDssc3okcCRmhkzmUJRj7U",
  "key29": "3rRqk6Nc1Zf9MEwaFHsimtUkVawCnwMPgDbTpx7GGaixtnvmwym9AGxf5pnDEWi4JA5c3Nfsy5PNYYeghAX2xb5N",
  "key30": "2soXZoT7dU9A2DJisBByY79rBJwkb7pttgor5kTAX6oTEAWeXfs5LGCPTH3rZc7w9EQ3YqA5n2PNDJ5vSphDsyG8",
  "key31": "2mDHDVXycqLpqn7SoHXxNYgoB1T5TyzAc8K3ZChbeEFcTfFkFFxX2JaKBQbv7AVNN5M69QHata6mSWB9H2Nm6TBf",
  "key32": "5t1LMQZqd1xCNUYYc3oaPgLHqyq2MDoXz669P9UAv7wMRvu49G66cKqAPX9Cfbww71XL84tohGAJnitFV79K6exB",
  "key33": "3veFeg3Mp2xHcKvj1eRP9DLqzcdVtYK3vCMyj7K1tsEiWDbyq9zFWCFUBmbTFGjxDKZ5Kv89Rzc2m7hijdVtnA9v",
  "key34": "5sq9461hQ1JbUJMK5T38XGACVgGyYYBsW7L8qoGwzbkQh5DY3PJJeN36vhWorN7HJKKy8hswEs8DKF4gZCNbeTm4"
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
