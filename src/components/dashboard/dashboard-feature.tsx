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
    "5tefHRPuNwkQbu2vUddCkrDH6ue8b8xSXBiZfSVzi1SEybu7grohJUSTqUwf3XXJfSeEcDJ2d2ozsmT1Yj77ZHk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDtX4xqwQoReM9fZk1pvn1F95CAYK1LwWKDf5WbtXpK4oduewgbcSEwsqp8rVcKn8euWBMLmAyWZAiNzFpej3WH",
  "key1": "67N256B4MQdMaHGR8BFb5hLchoh5MXP1LrExrSkgfnZLHUxM61XTMMkUA2NCBKpx9RLQn9MBLiM6391U1pnLiNzH",
  "key2": "5b6eCy3Mt6hwZXX8YoWcXehHAENgfFjzhedB5MDDmyomiMxAgYcHkTK4c61k7EgkWRPYmLEchoBncbkETdBLXbo4",
  "key3": "5YNpyrqgRd2zZ6pkXAHAUYsfn9WPQEJ8KVHVXUnHYiY13H79wtybg5XKBa3snDdEvvZe4sZ9MPr5WboregCH48iK",
  "key4": "3pTgDpJ4BUNKAVVdLWCJ2NbtecRuvrekMDrU3CENG4qCDzxKMMdMPzVU8d7K2d4ntjryDe2XeE5NTGPC4xCDAkhT",
  "key5": "3ZUJ4w1ZtCRrTPeRMR2J5o27tv2m2zy3ARdfdZT9PHNV1VxWjRoAmvTFfcKAPodKp2CZJasoehVSzCQEB4VTaJPZ",
  "key6": "3qFYGa1pS2mKv32XURiApQiNvnhRmWDzwC8jdLzLUpme2TbfDnnwzMpn9ePKRBfF8VFyCrrUZ2GTzkqhGFWBWp5X",
  "key7": "231Ky25VfB8wAL3QCNnKyoNfUdBWzscpNZVtjuHGAj6XxUpnBrmH3xczc1ju9z3HBcGL2uqURJBmHnWScmJmSgZH",
  "key8": "PrfMtR4rpfaaVbSnDjfnsFVLTzH9iN36NckVnXdcY5jZt7xWDWK2sAHu3w4rKKLKzYpD7QQPZGqkNGuRBBZ8Mfv",
  "key9": "4daQeUp4AB4zfzB6zMaGMLviPg3yRyZZpQ8DNBxTqasC5T9aTLDFuqKLvMfiMvMGqXHdSo2b3pLbjJ9gapug3Pkx",
  "key10": "r3yNakeLH51Ky1THsmFkW4nTpZPGgVqjLUVi2PH2qFahYGNAZ7kCqjJw3SG9HfipV5Yy84EqXhWUkZrLX2wFX6s",
  "key11": "3MFnDgyAGwaYe5ZrKmxbGTKbyhvMfcpBFt1oaKY4rPtFrFbacJNxfTryE9bNcVmSPDEoUKtV2KkHhaPEiWeijJi",
  "key12": "45eGQXKLDR3MGAS8F7Lq3QMXm32G4oMx6rR9QZ16ALg5KQFGA2XXKCzs8yuNjFp7QFhUyfwdo8wMu8LGMr72GG5w",
  "key13": "4X9tnoRocANbBN1yPJp7VT6swdNZN69va2ad18Yos7ukX98QBR6vnhQU4FdRhijpjN9oumFtpP58LYXnXdFFAT5m",
  "key14": "2MQCxHG5A7uGQGhBjNKCpxEeDtmejED3pU3ABb4LnYB5JqwUhBFz5WqQpziKBQPbm3vic5iRcg75AQHGYNdExaRk",
  "key15": "5VqqVA5zpkdeKdxyh2RjgeaQ7THrBGJTMCupBdSCRGWwVrqz43SstobH4tFvFjuTtN592QQ9YffWjyekigdywVQR",
  "key16": "2MX5J84gjULuvH2di3s2uV2sCTmmds3saqPwpzoysHwkRA1torZACPNFmKJSFQmGSs5icGscLMFYBoh3HnHNQugd",
  "key17": "2UHSxmbw2XgTCo4CPQrPaTY6iuE1cxcAsnN36GWR1ajmyQbUyiEfc8mySKRYuRphiQzb6qFcKXhiiL9C5utUVe1H",
  "key18": "4hi5gu1n4qdiLizTqyrKfYqMsuutv9Brw9VJbuwc1QuwxZHqSvg46nuCFmZmFqfSW53LEkYNbQ7yibxpan8f6xgV",
  "key19": "5Z3vCB6Ua6xhFgRNSa8YHmSbPGGnjBqw4MM6TPdk1YfD2u5WiCEcNzSv1GSA9Coocca6huSMNf2UMvnuFXSvpPUx",
  "key20": "2ihHohRWLRXk6bDVSG1hsabTLk55EorBKNN7hboS7tViyodQcTSrTRLbFPM3XAdfrvjFy2GJWjeWedBXV2tXG7aV",
  "key21": "3SGsXJ86RJurzh6RUdwCYrHMm88y75cNUwPaxqUshdbmFrHzCjjfa5etrkFejtn9bW3fjseGavDRDWodAQnceZPX",
  "key22": "fPmvw3KA5TJCQVbRZrfXsnAT39otvagbBAeDBrgtCCHQrDg6sr3TsA2PrEbS72ARzrdJjgPYLNMCfNmuoCpBMMc",
  "key23": "43chZmeYQZZht5Yf7eVjzRbQToRVTsieb62tG2USh6XycWa9ur2Qb4JY2ZYQ8By4zunrs96H3HACjTY6X1P1zzNJ",
  "key24": "53xyJjAoL5TX7wRr3qxp29zMsDRWZeHnTsAeDY7gdK4bEc9pMRkTK3wDbSfP6v7Egzydt327QJ6npCJtLZFAMExy",
  "key25": "24EohW8XSFmW3vQJ5tU6HxMZ8HhM4MGdrbjBUBR9Ybc2E4iKZG2NRmioJsgp78mhV2QJKPJbZGskby2XqewbKbij",
  "key26": "4JSDsvZG4xz2e4qbdKF64eRZh7br4cFNASUi6oqvVEdCgQJ9JAznHenKeSSy6h2m8FRgD8yzoKpmUWiKSukr4E1H",
  "key27": "2qgFZtwCjVnU8EkaNu1tdnfRZ8cYc92fMx3nYdr9V8FVwK9LwUGhanHVexqRvWH2xcvF65ovWi7xiHxSE4UvWUPY",
  "key28": "GNZ88U1ZmgiTBb54kh33B2CdH8MzP4QLSunZpJxXWbsBGnn6PkzsK9mys5k35GJJLa5MGB3DHro7Bkic3toQipm",
  "key29": "4QRggwS4XujNRHEywSxciVxxTaCQNH77eimCsS6wPQczJZzG6aQvFnu1c7ynXRojXQxrVWuRCEWSpt9m6gBBn1qn",
  "key30": "5b3ya8w8M37E5JDRTJowrZtr8eFbMtiZfEbzseccAknpDMFbK3oPMNypw4GATnr3cK2FaqrKTVu5HpRR65zYvFXA",
  "key31": "5sXezomhjTTL77TmcqY7sy8mq5iUQPmn52M8DPQjMQwFmFyoEATZnki9DLKvHBY9iQo4Z74ZUPfBJrzztDa6Sdtd",
  "key32": "56KaufX6rpsbWGjV1BoMPFJpdmAhZux7q2fyAfKgA4PMU9K6W5ETcpGL4RKgu2kdW2ghQQknwTk9NaRWzxk3LEwG",
  "key33": "2jCWSRz1eCtEyVREpbFgxcQ6MSS7wKXQHAvxZSh8NayW9QoXx8xiutbE1zpcdjyuxHEktBG9L7ZNruPUxVscdhJA",
  "key34": "5ETkJHqhxmqcLSHo7dULpn8M8iDKhFBqK9emHgwMjaA4GJW9GKhB9Xj8333esAmX2tj6aoyG4kbmoBPaqSeY9HNU",
  "key35": "5L4eDWhHaow4ni5KtE6f7Fx7WPHvCK6AJdXbo8fjFGEmmW1KSmKj7h5zUD6YKSDh42UjvwgdTksaPW7kBnoakxHE",
  "key36": "5RTspqFLMy6Uk86STmHEJ6gAvb4qhP5B2Vk8zwhkjxoPHqUTKxQWoDLLQ4ShHcVBsKbHpGPc6AWLnHCvTqVs9aRW",
  "key37": "3SMjZDbi39Rv4qxzV5Pu2pgZmcchBzePPyTSbqtKNoTwb586E3edwZfAPh3itxzATctEMXoSXKVAoLsCKfWUkJvV"
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
