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
    "4bkSGBEMJWLCn46qzUHpUAfRNX2BZuxChEVYvt7ovYP4MtrpThiCvVhi9SiRkALsWcUhkfmnSK1r3svBzmQCKdDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pa4PtVvJjoyMdSgtRjf3EZRYM1LCD7bAT2iz6qdMjYzETkMtWJExMiGSEG7gwvxsx4ZPcAWAf1muZpmehKqr1hf",
  "key1": "5cSk2z9gJ5gDiXLXkUW4yEvoTMWgRzo73FkY4JgrXetkn7usUBNdD39MAAVQCHirhA8iQGso1q7LYiyPUct5Z1nC",
  "key2": "5D4MoLypWSKavtYZzjugA6tWAcbuNb9yKAUfvXYUirXMogrtHVcowV7sdDpXwsMxgt8Czfah7rmLqZzUgMA6rLt8",
  "key3": "4WRQhHJNh9u1eYUGcLt5qP5Lyi4CpT8p58eP5xGwekyJgaeJxdcU9K2mFu47BHiHejCwRS6oxZZrdELY9szYg1AE",
  "key4": "R1TnDCABvcESgXfFm6MsdDPafde89MVVmR6MNz9yUv5D6ojbskxBVT4b9L2EenmcxM2BKBEYuLzUkHEPmqiXy61",
  "key5": "5Ckcfw6a2Bh4yBerPTUwydEdS6eL9wGW53Xihuuf4j389YiCfSAUeieZVBYKh7xBJSZ4Wt8nu5duVPcL9xZTpi15",
  "key6": "YXkenpVRPH3NbD1Hk2vTMwATW6sRAYkFwhJiPFhMTtUacHezsDPGf9buyx4Yihc4qDHj17dKY5ATCvwaMYjmRBC",
  "key7": "v9fka5B5BBfgFtioeynh93UqrACZee9FoKgoWameMQvbbZ3QHDCubET4DA2jK8q4nHGwM2M2wFkNgmFNGWFuqkC",
  "key8": "A7ngMgrGSW8NEYbvFKxWz7b1zLooVNPgYLaXjd7DgTnJV4d3YDwqdgUhMA7kCbZCPer9fp7ycFXbznonscqELqT",
  "key9": "4ah4wdqpDPw6Rm7jKnQ8Bcqa4gZKz7sfVrTHMRxGaYm6ExB6h7Kvy1ZXt437H7YzhfBkkQFg4h4BXtCmtfjV92pD",
  "key10": "3a1iDBdLAPAqgGi5DH12Pdi2YfAQKetmMw9JMC9XXMnTVAmZrixgurLreWm6drz68UGMfiLeAkAZRMmsp9Zs71aY",
  "key11": "5iBLQVtGqXAESSdqeuu2indRomohqrK8T5zeo9osn6WtfS7Fy21j4v3BTA3q2Vp6HgbDnJmXABrJ2vnnnMvYUraS",
  "key12": "22T7caB9j39oxor2KA5KgW3MaEFqtwVwoiVdKDnpta3JKswQwJBrCeo36p6NNbHwz2GkqA4KiEeFYbrGQLF1upuh",
  "key13": "5Z2JYAu76bVwBvZEd5jegsErfHA8aoEm5mP5JUBudrYiLervvVPTdZniHtEWST2ACUf6DZNUL9AxbnZZm5YPFkJx",
  "key14": "2ndwZS2xg7hm1uZvkcQpHnz8EyQx7bApeojAmyhqMQy2JhLXtJCdTAScipVxFxaSa5HpnAEnMakvHnn3MHZSSSP6",
  "key15": "3hsF4qYW3k5hDUD6EQ6XCHGUUtPJLdzcPyMvuynPqNsNrJJZ2u6s2aRGaTX2z8QS9esXByZ6qQKxBsN4MQftdhHA",
  "key16": "4iH3RHwrWgZBaKq4brSacUEvcKGXfJEY9iLPBzT7vKw1fQdY8eRCZDAHhBLb8bUD2qGDfUA6SW1waG3M3jGJmbNJ",
  "key17": "4hHTSie6Sve2nCF9q3Y8YhJMgJc6fF7CZYFc5yM1Poneb1aV3z9hCVVvYbWUVmnDaKv1u3noUMJgYEJ9JjwvVyLS",
  "key18": "wNRrWNhedcnXRXChH1KVgfupAX8v1vnEinujaJuRjyWQcv3mXUhDSK5uS8bLYF7aGyBQ8cSVQVAsi8KRjUx9q2b",
  "key19": "wFYYpjy4tJQu9d24fKVry7JJtYc7aw6wyb18ZQXrbLV6QN46hRRmtY6gmZJjR9SLHGpkgo4cQYBmW9MGTmbtKU3",
  "key20": "HVbrQR3A5xoC7bNQkugyP7iq8Z8wtruvxM4SkvRFBA7Lht7aLAxTUkNGM6RAtGJyqHJZ57nU9w1MnwCwn53ZxJi",
  "key21": "3qpKSW2s1GfEFws5mNj8xJhfTtY4Bo76Z2Nu4qNT4baEYgvFr3wdQdhnZm7KtUSGzD28sYPKE2GJ1U2LuHRFot1k",
  "key22": "VKzcx4ur7egxDPBUvPYJkX8ufFW6HrLzgkenXY6LcDSdkJsrZDD2WNTR9xVeo9GMXrBWaJeFQjg7yhnbt5fuGXr",
  "key23": "5uhecLeiH6STuTRaUUPeJnY2VhLs1NU7hgoeHNcVRLhAh3S7RyEMNWc1ytrCTAKH97NjHFQjC4cN8cWUKtYB2toz",
  "key24": "3YLLy1tKt5iRYEMVukhByidhU7kecAqZ7UNNawRN56JDhQktBQJefs9tpWEV7ddZ1x2adHuMs9HuAMjqoCuJj3au",
  "key25": "4fXibGTc6CBtsgeMCS7tZqf9u9LMXfPetnDdF1d5TxFdEfQyjqiLw5NwKXu7hWkqdqaEcgZ3ShJHJ29kuXY64w5h",
  "key26": "Fovr3kxvQ9kRZH3uYXK5peXueYJYw8uxLsUrfbUWNkHNoUjNiDFUQLAQ2zjMVXkFACJ1qbgakFyX6ZTGyH6ahQY",
  "key27": "4zegmngc1LKqbnXiotVW6UmVFGQN2mngKeUgwPALoZGH75pnMaB9v2nzrkX1JHSWHFkwDCGfjw3GaqzwUN9yJ742",
  "key28": "5SNFdHi9C4d7HxJVzz2JeFiFuzEBDcqGkHefzCogj431WLo45njASojHmkavWj8cZBjHVTNynDUQk9sEC29KJNVK",
  "key29": "4PqLpkuuzSNcFwnwKndb5zNiWymdeWcmz4RvJ7SjxogpKQDB7U5X3xevZmFxMc9VxDa2g8PAemq9N4TMDaCRyUTC",
  "key30": "4xHmfSdGaVuPSgBFpwdXweNVeoy5RLvckpDifc18SECbESgSoMGKpVsCH2RwUYxgoMJZAPPqYqyTsGezCQw5C6iy",
  "key31": "AWdTLzFLBaMgLCfaDCrRRojUEYLSTFfBGdAAY32UAt4AvU4hPkPKSNvqFdMQQYHM6x9NwAPiAXWafY1Rx1VFWiF"
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
