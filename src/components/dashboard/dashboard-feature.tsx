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
    "3tGpRxqAvL9PeguxLvej8xY7Z8PZfhqBmU1oBBxnJN1DHZHes35RWFbW8fyWxWMt5fqLsDRwGviaP5zoCJm4vzKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5jX83txdLUPrVWgVpoHssakt8hj8V5c2ixtSmzf81TSC9yGkPZY9NtmBnJN7gRSgxhsbES2RaVKXDJhXtHRr6R",
  "key1": "3rgw3yy94u1aDjmUKRbjALywo3wsay8Wsp4ccYcUN5q8SiVMc5UnDXfz6W84ucXFNUp2VQAqsXX1TvhAVkH9X7Ju",
  "key2": "YBCm9UzJ2CqpVPwUWWBznAvFVFQtMJhgPvEUyNRbP6DoK39Ps6y9PC3FsDLf87GWFUXvxat11tEvKAityYhCLwn",
  "key3": "65YyoWaUvELiSmqoHH6MyLnq2CvyvwdteQUtE9ms3FC3YW95dA1QQWnmQUcK6ajNXjdq6Guy6Ny2GMVfsDk2KgJf",
  "key4": "2xJHtPXekANMHs8JkuFfuc2GBc4teV7tVYMwx6SRWPRqEYyi1dwkUxiYsRQoAuuF28DeKiGwAasju2s4fSYvKYik",
  "key5": "4PE7ymbd1kJSWKZ9FL1PjHnJKkQZvZAa6xjPyz7FV8HG3nsuypmoZ3BsmsDEnm7F2PTrLkNA3g574LFZWRZggwJo",
  "key6": "24MqG6dsCFrj7ruUNfUUKHMg37zxKK74TLTArfTYBRxSrHHJbiDosmAb8jvDa95USSEWEy9mTuhYvYoMoFhc9RT8",
  "key7": "2k5xcQNZJK7NdM3uHz9i3zXkQTsus3rCZUcJU8Z9jfv9zabta3GQBvAUVhTyFrTnHknGga1jdWpWD2zNhXRno1Px",
  "key8": "4hyCivXR9C9u5pENKaCX4e9zaPF5wdXpoksRfdsrXiJr97d9cL9CQCLQ2k1KXRHC5bia8HA6ccNQrXgEnJKLLPgX",
  "key9": "2YnCDPCLr5rL6qUhmzRfiXu7i4jWYjqzb9RGNx5UDZZU5WJruFTehKJkqtwdnW3p6GTAG6PgZ9esLNnNb2nyW3Zq",
  "key10": "2RBSYxw4pEjce42t5tXLUFxK1qLmaxY5XGSUrysygFDEW8DNj4k6GmYGsEZYgzP3yJppKJssVqKzZ4fcV4fLD6cS",
  "key11": "4sxhLAgv9EUduQCAuscUcvcVergtT895J2EVmZZSi2DSNAZ3LGtNHuN8MzoSbxhUDJ4eoMVXu4ZxGHYeVyLbCvzF",
  "key12": "5jmNtVWHTUMMArt6FUC273kmx48dRXAeNWrE1EHCZrg8zwkVunB8FerNTR6MGZWMjvSwtpyTBU7cCcNJ6S4vbJNT",
  "key13": "62r3pMZLVoTC7uCYoMy3t4hvC6mHmoPNbrzBTwxvjnLnrdXgDc4MNy3wKQtGTUkkBobuFxFfyDxhv6czvuw7uiro",
  "key14": "9EAmmBrSWkxTG1j4j2dEkmH8t3vC28qC1oso8PanRcbf16DcVML7RrqFnjRtWK5hAq3ihH25pTY82zucRtLEK2n",
  "key15": "4RpRRw63vCS8tEDYRvACxpwxnGbxi8Bc3A87jeheaiXhKugWCgVeYzKCnB2fM9nJpyfUjmR9g4Spg8umFdykCw52",
  "key16": "sKWCHpHbQCTiZNAtni4wJWAGdnEekMNqYtYYML9VVZY5aX8LhbNt9fGtALSoSVh3bLwo5YejQcFjXR2RF3yjuFL",
  "key17": "21d7MudWgV7oKEWUd9yhWJSwkvZoaBo5zB8EW5QFERhsB8r4VnEkqkkDhxTQRv2tvXwMBLnjqsviN7bChJYG1qHz",
  "key18": "SWRcuivAabmwr7y9xk9mQ9WbtADbcLpgWvUpt7MYz5yp4zs4pZbeKqMoW7wJQcB4dZL9Xwcw7H1mKMfWC7Z7D85",
  "key19": "4NWYZUBaGYmKh9rbF3Whj43WjskpGNLfv1BU9LrXjiqu1YrbxcCXpHCXhoy4ouNWbwNJh7UzVhJpjFo8TbtWafKT",
  "key20": "5XqJcNx3B7WL9CtReubkAvoAXbzXoGvqAzcrCo6tVagqedmSAVkd6mZYgQ4UxuoHpqv2BTHA2YLeeQMkiEDnRiiS",
  "key21": "2hdqvSErESin31FGjvk9T8c5QmVbbCpminMsm7NPeQPZZk5p74XXixLUGbM25JBJdRud83v8zwiET67dgUy3DoC1",
  "key22": "4ei2nZbcnNJswDoDJjg2bsYppkGxbPYnq4WHd4h7rN9Mt9GeR738esGo7BJ1UDA6sJ7JqMCRc4T6BjxrX88iMP5L",
  "key23": "2pkytwZsGC17V2HZLdrAYAE5MXKxcaT3hHYLXkEUoCyqxEzDqjoJ9DCu63VkzShwCvm6oqx6jWiG7vie6pmvmZ2T",
  "key24": "4tFHUo6aEm4LYpd9nbDnWQf64uUkSerxxr4oFzowTKoz7MYowcvy1yhawRyKfMt1LP8KCV8enXc4tU8oatrsZ77s",
  "key25": "3ts9jdVmeW1UtSfHoFNZT9Ba8qCHZb5MUQUc4fuU91gSdGiEXfLNqWegJevvR5pHLrnSEfVmnYdVbC3GXSzWqQVV",
  "key26": "5uTLq5tVeuztPthjafiZHuSVXR5Pb7eyZR7pdfWbF2hBhUH2WTQa7dDaFneepsjC1215smM6t8Drnunx4Euw4KhR",
  "key27": "67G5dQtPeiJpYpbrJBrbN8C6yG9GxsuCPdvm4XGJPy7Hyb4agVzYE88ExFvM4oQQpouHYM6XFoqqqDxsL1WrjhXa",
  "key28": "4J7VMuPoqDG7hpQwAc2YsseGcSxmCVgPgxXB6RKfjipKP5yMCwzFKuSfsVXXH4SD6R2wsGpjEWf3sZ5ToycyU2B4",
  "key29": "5tW5ZGLMtpfVcaqvRvEgicjicXbkyPRxkJ57NYVVeQrL71uvBnMrFXDnZo4SyyooKFzL6zjWPAn7a5ydbfiDnWGF",
  "key30": "2VwhHCwGKEjfxWNACHaWR536K6fDRvcYzc6Hw3ydBsSjQTCbHXtN4iWuFU27cxDTqystyM6XYHKSkqzXwCLyvk5A",
  "key31": "5SZ3w9JYJerzTsBxq3hZ7Mwbh8YK5Y3g5UCJa3W7no5iCyXkMRtWMXM92FKaKK9jVkc5URXBA9T3VKhD3tM6M4Xf",
  "key32": "5wzBQz1tiTcSa43hXGmh6rdJVL9JWpcAwW7wcdwV9fo2t7LyFzZUVyewHVyri1b1YxEN8cM786majoDoM4NAWEyr",
  "key33": "3uYm84BJqWkJ7xNnpWkxwFES5MXE7M1ktWuvS83m5KGmYePt788ZdvFvAyRoWd3bCNxtp1jvZJ3MRYu4wTeKQ2pv",
  "key34": "sf8yUkPcofKNZionmmHuZm6q5oBdRyqFuxhq6vjjyZkk2p1afutV4cCGMGqwW8e7D2TdXHuC22A5jirtPKxsKuJ",
  "key35": "n55hCfAS87bVJXb5v75grZWBq8fC2izDv86W34fY1YdfRqmsHgVF1pu1waeiZkVaJmSdsUZn9H1Lb3KUj2snBF4",
  "key36": "2zAtHVd3w4WmcQrEMKJB1eGBeRLDqCvT86Fcmam89JSSqxEth7gaYdynszA24EBVGcfTXtgh1SYxWWDw68uA5bKt",
  "key37": "Bfr6vV8jseCgch4LvX1hRjjwgiKMCkwXLtbsDXhSs5ficJrZgXQiBqnTrHQoQXwD4F3EgUpCdTXdCMyJWMD7A5Q",
  "key38": "4gntjKF1vhkBpzqGnswas878YKBco8ef6ce2SEjqYCu3yoitwXiwdLJ57yP47RN6Zdkyw9kkmh3uccPdi9deMoMY",
  "key39": "52qhgSjcgSEyq4Pzg3q54cuSxygqTj8JRhBvVSGJFvBpaJvukLBNHX7MRUQdCntWJK2b1pb4rcXZfuLSaY8rLcUE",
  "key40": "4G95F7pRGkJrk7QEDtZfU4Fqevie8pEpN8M7BFXDiziYjzeAFEnUPz65HYmreJSTsGR8Q3WSeUvTQ86XDwEhFzZN",
  "key41": "2GvXBNmGRFSpWxUKbY2SNTVF6M5xppkF4ancgWSkqorxb6hkwm29qG4sUVGC8KpqEkqDdqQQjyfixcrSUBarp8PS",
  "key42": "21zaArdUwdiFccQyzpa7cc4yxLFHPysh61kq2hS8uDv67WDqy6ZJJpshLoLTcS99prCeAtvLbSoyVGHiBoRfcfMm",
  "key43": "5hWcZW1hKk5Y1Raz7Y7h3WtS99bE2qQr6KCKpWnoqsgC4PQ3JAMZwLFqQimvkVcJKnto1uR6Qz3C8kXJzFgdKCh8",
  "key44": "44Zt28BUxFtHctzH9mYABVzJ9CW4hy2xqiuFTq16xCNn4KAS6AqWz3TUU8ZafNtz821UWYQkE3QjHii7tPRfok3d",
  "key45": "57EwQj1ZzuzuaL3HbXWnx3RVKg54MVfgYwPUYJw2xY4bN817HE9hdmTTpQYwEKvbwAqiBQKv1yo44QUQRYDGYVPB",
  "key46": "2yZbPJopngFf8mRoA3x8NNUZTzxyGLHoTHuB5oKVd7H8oLnWXNvV6F1bsAK3cLqiCue3byw77UhYRU4mmCG1tabg",
  "key47": "5i9TMKJnBxexTKJG64qyuiTAEjMAmHZC3gKXHLhm4nvWAX4dHK6MFj6UbmgJf45G2PB3V8ocHn92iAJYLe9t8ieR",
  "key48": "2HEtYbsxgGp1tfwug4uTiyERqk7uHNPaYz4NX7RbjhSUqL1nmUnqkqmxxgxW15ojzK2fJzfCfPqmRTUTqWR6ZGVQ",
  "key49": "8mKSzfq9KEht1eDJFUsAzFbWxRJFskA1ZKhqpnesfaZqamGrZD4v3edQwVSYczU956c9sVxQPdQcZXkSnDtwLQi"
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
