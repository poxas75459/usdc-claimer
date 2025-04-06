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
    "2TLuqckd3pLRn8Lzzr9choukqKvEV2EZofzbzesyHkqDqc3FjhdSoMcHKauPPJkYswENwtgK5PCyCbjCLTvUCuLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LgDh2aqPd5MQG4mzv3n28VKzziGgNtA3pjwi6hJPswJERFW8qx8CnydKUUJMQTmrUbtPQf1nTMjAwvkrnUBmPWW",
  "key1": "4mRcBQYehFhGBPz84RSVhVy87aCec6U1f3idUrnL6MM1EZdPC3Yrh8QX2HZBrxUuVn2NMKK2mjMdqiNo29w7QDnn",
  "key2": "orH14MQL8YCyFeXMyVEgKJ2Fj6h5pb9mWENE4cdadBsCjoihQ1pSKndtXvnYxWZ8F9ZKgQedSe7mEjPt8U9T5dQ",
  "key3": "3ntEdgkrTzgTNtzH33zxymmR9Ur9CKfNkMyaQf913eatq4jyjC3kY3xAqShT6bh7pJrprprFiG1ruEWmSatNU9ZV",
  "key4": "3m57Khto4G8MsiXYTJL9R4vUBGkn2jT97ZvQakXT6wPsA9raSH8b9hdEjoWttiqfHKswaU7KGbJEX5QjsNRTxUxJ",
  "key5": "emrUs5Rxe19qkyCfkh2coQVSgLo5F2772cW3ssJma1hqxLGChJSwZ2g3wbBeTHLTrPZXpALdN8pCjfmLuvety8R",
  "key6": "WMUk9hw3n4kMEekskR3hq3xpC4rBxHXWeAykCZwJpaGhnPJGiGdDsZaSdeb6W1So1XxH2jEfiUfxrot4yUTfT3N",
  "key7": "5EHSuLjS2GHe2SRfKfJDdZqhunbf5R1mCfS5dY2gvXT6LFZgQdLV59xLkq3qef11z9mUittvJfVGKsvaF5SQqhFm",
  "key8": "f74CZYfvebv4H4KPi9A5gEHHht9M2Wr9XGm1xH7WHzeXSkN9BtJeEHedHqZLoi7hUwiYK4FBbSERAMhGynET4kS",
  "key9": "54fyn5pDzgLU8mcU6EVH87HY7t82cqLJf17THex7cd3oQoqQui2k9MpPPBzZVXJb3a5SuWgbS53VVNRUJx15mzcy",
  "key10": "esivnkKZStWwxPUzDAyhF5VJkYxsmGemPbjjD5Q9N9fddd8WvpBaovk4qv1v1w2631ryrVGCHZs6LVBpWJZm1tu",
  "key11": "2bjCrpNngHuwbd3zKTLLC3xC1keNqpXfQoT2PS9hVtowntBWz566fnNP1Bq49YRsY2SEXTxsxpFPAdq8zmrTFAKu",
  "key12": "W6Wg3t3uFhCcWHXbmPpuMQxeekhMFFDhMATs4Jh3PgbqHygSaFWijKXhcFEdkpaAH2FHajooEXUL2Rhivmw6TM4",
  "key13": "4HEZahPsF4yUvW8WCzbV6yrSZFcSRW7BgXNiVqrVkSqGAoGMK4cYVMyZkLaBJfiCkjtQuaUicHgUjMZUB5nTTmwG",
  "key14": "24jQPF1BvpaaFci8JcEErKsGMxrNsxJbJhb3AvKuPf2fz9w4rih1RRDYcPLaDHbhWVYdnXLEtXJ65b387SePxupV",
  "key15": "2e3mYJfQTeLqPQyg35JSWyWM76oFQGVVyPKxb3v93LGEtQ8zCvP2aXTgTirpk2XpUvboAmUqRDD2rUXEBbZh3Mqm",
  "key16": "2TtKSbEAMw4Nf4mPbrgxGKeHhEhZdvk1dsRREqEWND659yyZYWWEvk8wRfBNrrABwobWAWkjLxHyXZB3W7NPxdpt",
  "key17": "2LrwYQcF6UHxzmAsj8xWUU2XGoDzH4UdPWYLMiunkjaPf6BUx3XaTWj9pDXhq6MKfaVSAy7p8ELGXP9G7HTMda7o",
  "key18": "2bBdDSnhw1Gcc67urhGDRRJSTNshKeTCjvp5VHVMqvMeGWKPG8gWiEkV1HaincTTUz8obF5wMgAQvYTJdG2r1SMi",
  "key19": "3n3uYBxnMgFkLL5kreDdW68snNyr5ivogt7gL47bmU1WY4WGGK8sdFsTMY1QwuqQ6zxo8GAApXbjvLFv6pwt1iFp",
  "key20": "5nuQRnBzEhQWrB4vyAp28mqXkAyR6cijaXvHb9puu2jAfd1Z34DwBohmGLknAAYCswtkAr8qe6fhkvkveKoPuq2c",
  "key21": "4khu6ovhSTdstb7yE1YByE1nfKvT7G2Tup9xNUQpZLmYADPVhMYzWPu7yU1s5S6HpjanEt8NkHsWyknFV5NqouJ6",
  "key22": "5Vdz7Nf6iYV5PGTqfqyk1JkPo14umwUqJzCwdrbCxseqKwthjmWBXdmppCMV4EWZmfHRqKiGcUzd4jSVwSm5T6BS",
  "key23": "4edPmoJAe9G97ggdrKH9d8CvxFPNexNf9H4NtJGhRJC2iMAU4HnyZucBHaySZgZKrveuELvDidSQEw7JwK4U9AFU",
  "key24": "4wnqd5dLbWyBacAeYSJ48CnWRT66FcjdhACWbW1XG9HahJQvHMnXv9FahcQr2tTw6dzpULUg2CXfzFSMzfK9TaLB",
  "key25": "2pbULFy3o7s1Fn7dvusT17crgG9snSUEuv3XbzakAL74aFbkYZNRr6mMxfpPP6u74WS6fEyC2hMqqV3bVtc45nFD"
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
