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
    "4uLGZ3kkq6BGd8jS9uR3bJTVwp5KwxkVByjTdw6jPxAfzRAwc7xYMyTAgnqkxBC1oUdBoEw7pdEJJQwR94aYVuu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAhGVgR5TQbEy5RvMszywBhHKJtdFCA55zwmFhXvtciZJgApX6oeYHzYApVLYaTgJcX3PLC7jyrEHPYkxjKP3i6",
  "key1": "2h1yZMueJPcS9qfBuuhdC4RtKo5VAtZ4svJsi2LjXZU7S1jqWkU2NHhKS28dFGsUGZoP24xT4mLQ861RpdDubSrD",
  "key2": "M13tvbPo9rZTYTjHksTySbGR1qSCeWgYSdyWh2nmD7JowPKRgwUPnnTuiJQwthVCt73EAnBxGDutHAEssqec8up",
  "key3": "5DeCaV717GNeHmuTVuW2wp7aaFvz9kTv14cwQD5Hdpjs45tAZ6U9ebYuDaY76qwxQsbFHF7SRheWytP6uMruBQtn",
  "key4": "2cUD27Vp2q6FD2o9skx5NxpdUr4xzg9Kz49xJqfdNw1eQU4Vz3HyHntTxk1mv8rNzerPmWJ5kQbEFZmrQcLF1gQP",
  "key5": "3PoA5dLn1zTv4S5LDwkVEtm1yavWo4zCyCUaToyPtTtAYYw1WC4pwUYL2oSSothsPTy8W3t4EvoVks2wDuj7q74H",
  "key6": "3zzMjT1zcNwaEMLZGDx16LsJjrMNQDcFkaFe91YfwAWLThLjXvKixH3EGwWvzTnn74fDPSktBR4GnRdMiq5EDeFr",
  "key7": "AkDmjput5t2T46SPEkXp5bmGwZo5jkSJT1vC5XRvCmqvc1SZ68SzuwTgcizdG5zTAWStEKdaADsSABG1JbtPbV6",
  "key8": "2QJ5vm4FiFbthYvSfKz9eH7MWw6cVUpfMPDg3o6kmeazgYYNCde9TjbMV8psgZhMchgwP5mA3cC2YXeHQMm6v9rW",
  "key9": "35Kz7vAbJr3TaBXxYAXWXDXRT3Z1CuncYudWTtWEuPN3De1Kz5WE9sx8mtD4FWJsveNzZYhLc3EXndWBUp9oadfE",
  "key10": "3ji4zBJ8JJ37cUK9bGJ4sjkRtm7bazsqps6L9WunEq1m8Se2nmAzq2ov5CfQqPanFvNgNBTiFtcvDh7RxHigZEJp",
  "key11": "2P9cWV8QeEhV8MRfjb5vSX3WT6KneUv5UQGdd7uWwHQL8hc6WHMMP8YWbAp6ALFo9w7WpLLYBwMzqtfkWggt4eYz",
  "key12": "5ajjDRynNwTQPFEKM7fLSXDJCD5eep6EngVZYPhZw9ESwFeSficmpzPgzo6gDNEPuuTcqM4KiFiUi6irJ8igjfur",
  "key13": "64nLB2F78nY5gbeejYNSCXaSv4wtCkmmFwXwM8BYneU5qyjvKdd2bhUKFNvXnqjz2AFvQsZWY77RVQwBTZi4mzqv",
  "key14": "3nDuw2nGtBRkVrF7ZCFjcof4FqsPKjBXFi6JCCSGh2t9sFvKeGCPkyS18kZWQxpU7YizP5pRc54Hp5VusJiMcthY",
  "key15": "2QngrTjRHs1V4cYoJ3i5jMHa5qorra7767uPSFM48vReHLHLHU3V5hJLXfpddGd7W5HAZi7XrSwWy6G6tHtUTcYH",
  "key16": "2K77kU67GqjXukcSz2bQzNCiuD1Rq81UJoraJyBNWyQ7JYedmCD8bbHrNh9aViQqUe37f6zuRhLDxD3BMDBKsCNb",
  "key17": "3AznH3mQFCUwGmZhe22QuR2ALx2RFRquWf6vvSfDQr9Y8yiBETM59mt6o57wbkRXotjiXgeBzCjVCA84ij5fpcb5",
  "key18": "3q6cKL6Zkpj3mCniaWYfY9bzNRvV16mTJFbqFU2WosD9PrE5VZDXb5otTNg4Artc2VbsmGc1GCQmrZkfEY3KtCGt",
  "key19": "3zk8Zu5WqDGzTA2QevnnEiRPC56bo8rmhzdq1LvjVzvdArrPqdhUyQF2Eb91KFU2bDK5kdXXaqooDFMnh7bH8aeR",
  "key20": "5Sm593qAFt97LCn2bA8JKQ8HfEj6qyKJhfcs4ucs3KuVut8HzsWdhSGMjwcS9FoxH5xPjffJhzZUeEEDvkwMw3D",
  "key21": "59sBJtHSUBc8Sh9FoSb6tU4yaLHh3E6Gmio7JfayoYGDn3mp7kwNb8gy8DAtcpLKEXY4LXkgHofLaggjHfgm2rUL",
  "key22": "2oRSUPpRb4DfuGsUm8fLNbPqxNt4YXtmYDJQHCjnRjeC2WxRNd87vsV82h2Lt1Q3Ux75Fcetnyt1uXdgcbTHNuki",
  "key23": "4f2vv4aAjtrai6Xw9sDh255LbQNu2cAwiFYuHoswktX1XbsJZGbs61a416CHKQZrg9fb3gcz4i1ZAdVNv6TuEezN",
  "key24": "4ncmJK9Jw3cMn99MYNc9xfcJMnf9m4XmG4zoPYZizHeGpHMZeKe65F8qYhXmsZ6jN6LoRFkjgZH3x3VQD1Kd3519",
  "key25": "5Z4KQYUXburYtjBxMJxwMyUHA1oQ5gFhhXyyJ765ZVPJhYknj7zukgpAmB8wsDskb49BT4rNesA5qJhf5vXmxPMU",
  "key26": "4xGteZrQN3WBpBn8wDQMj2xHDAqooaJNdhA4Z1kgkTFaFkDLAbV5vYvvAyrTrb2PPPtsL8vTsJNAqfZXLniqGGWv",
  "key27": "3R9URT48yhdvDh5KKgrr6hp2WU2Tzvzxhfv6d8DRsM2TvutuwVugqANbgJiWKvukkxyUbSUK53iLHpr1tPzdCpQd",
  "key28": "5PAAPNeHor4z35oooNXjjnyULUpXmpAeXwYewdPmFrFrdCwbWBV7muGKmhWGZyKgLJwRM8hpLdXuXjoFiAvrvsKs",
  "key29": "3j4mCGxVQ1ed5eJVaqyFmNCPTKkDMTWk26vKBdWpN7GddysKy6dntwGNRCjt1VW3djpBLC3rSm3SE2rqWZDLPsq6",
  "key30": "3j8cNEeYBVe1sz8M1KSQms5V4acB1YU8GnczRSj9i4gGUSt3cB6acfbDUkgrThwGJz7C6FX4DkoEHunUuRGWkLW8",
  "key31": "5Mn3aNt7W75Z6xd1QG9aHHCDttnnU51E9LYmMVgS5WunTEmGXT6xFCQfSEr7jCrj5kEHgj6V371YMyNrRkroCUYo",
  "key32": "4GgHZbebnSaZUTxLq7HyNHyXfu6nSbjXdK2nhqtcS9dWkhihnrfYdi4pzAJSNFYeLPa8bEGMmesUP5UMjpYSaYJZ",
  "key33": "5FpB8eNjSi624LTKqoEsGmMgp3XxcekCWXYpWBRdvj5bdTiL2W3B8VhwGXdmWjErQAz1kF4zyES6zECDXbG6SUJL",
  "key34": "bs8sd5VNAVDBkHmacsVpdJox1FNbLopC2H1GfgAyKceXipWhpBFBiWuryx1tc5Ky2UFbMAEe1q3RVjMG8jUYwJe",
  "key35": "37RDT5LKaN5drNwreBvnH2nRtqGSXEAyYTnxwdQ88MpDw6rFek6RKXkvB2katMPPjp2ENhLczS1RuafVJCouHRjk",
  "key36": "28J3APoMhQbZtsJMXhQ27CyNfE1XiGMr9jcyC6quw5mUV54ANEwFx32n9wZfxPJx5PdMNDoLqTUg9663fuo8idas",
  "key37": "3w91NnJmRbgQVBBtsk6detUtQh7sfATURMLNPKyRuAtaDhTZhpXjd2veSucZDozEGmVSUYmKveXuc1qa1sNA393A",
  "key38": "3cvHZCwvs7dwARMyNeuaTLr9PcZ3mJdCXfpjUobgApf2tXgUpb149WLHAtupFtes6HgJCi989MXHk2AwJCPYGEm1",
  "key39": "3Yz9M5b59jvLBEzET5XKC5zeRNp8StG8FT44WdSiwYXy1D8Nx45htemLT9EWVAzaMiRZEk9HyTYJjvtxgGAMU28W",
  "key40": "35MuAVniafQUTU19mWWMvpkh1BtPj1YS5QbudCfsXw8ZRUzXL2jLaUjGgC7UCc9GdxbYejg7XeGKp3C83WBs6Gis",
  "key41": "FKGvzDQwAuoZNdCm5GyGPSy7ShkJXvAYSy9ZBB5qtjqTmp5nENJvAd1bEPgy4K9uDXwXX89JfbB8SzzvVBBxRCN",
  "key42": "3sfUX1KLHdDAdu1N6sCDKMhSeFPoRsV8HnUi9oehRV3ASviUJzcmkKFZGEKz7F1ASRML5CPRtdwKF5GaNF2YRYnj",
  "key43": "ip4kEBht3iTY1Q5qB7yJ77wT4399vL6Mtuf3xJ9jTqCFojhSwXiL3baqsEzhLtLRuKG4FrdHJEuZ3DMAMcL6kr5",
  "key44": "38NuX4DnJC5JnVFmFyN7iaRLG8iKgsm7T1gyYEf6Vw5phYnHCBG3Qbgrj2sTTFZ2P1pW6ngaainz7fGepDCmMrVE",
  "key45": "5571RVrKzLK3QiYq4wq9UQBqscLhsH7LXQXVJ3cwq57PHMXqxSLDLmFT2X5g8znstC1ijXojPMLDb6tpaeBqNcFL",
  "key46": "4vPFaiFXMFhDYRtGoDwiakjhQELAnve3QtthVyJQ7MzTtKd3m59cXUfJbMVBqGiYU2TtWej4k2fZpCrQtxZEccNb",
  "key47": "xTru9cAzD2bDimu2j27qMQiCTkX9NLFP4Du7C3sZTWFRLniYAx9zMUicfndpU6v7AeDiCQT7J9Tgsj5PTu34Y1j"
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
