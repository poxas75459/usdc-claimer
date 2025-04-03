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
    "3q5MTopcwEceAZt3D2xBtmWZUretyx7HXHCPei8BTNMabF4gVtBbRpNLyxXbjrtiPqjLwDiLSACXb9bEBVTHkogS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czE3n1YkNpN3998ih752hf7paZzbr39ZQsuiZDN9u7xWoFPn2UgYHJqmJp7Gxe7AkL3ANowSc9N2c89qNcoBMHM",
  "key1": "35AmZwtuXaZnUiG5rnZq15pKVzEsoiWhb5BarZwqAHA5126VXcZZ48Bx6b8hB1J1Lqg6854qexp2ktSfhBouNtqQ",
  "key2": "2GpatQHECsmSD6cyF8Wpt83ryXS5TCVgz7zgJTbVsisKuAmN6W2sJJdbUkYa6rie1Db2VbZ4yJySkwucXdWUvT65",
  "key3": "4hRgE94QRneNd1eACKR4uR91itGKaaBf4TDAfCgb1ZALVigcYp1RmhYX6ecVMR7iuqMfcPe7F75FaG6sZQJwTSLo",
  "key4": "4pvfCawLHvHsCiiaqzHFEqgA61MVTQShovFFbp8Yz73uGJxE1WTFQqML7PWYrVqx8bSq1TjterW3xn1UxxesxpsT",
  "key5": "2jUVZUjwz7hL4wR9J44cQgsoasJ54bE3qLEJGjnsxFRu4j5yVuzLGdbNaZ3AMUNNorXfTHyqkeTTSp5SxWH2DTB9",
  "key6": "4eaYzUhwSnj2S129xDDPYAnKPf1ZFmG3fJe3pSrQiRERJfAFqXumaNU73ocRzodSpa9RsRHVfe3TDjoCeyTFnLki",
  "key7": "3KAndyCxPtsoba7QKEVvV21YK7PSspP4eiQMtpWt65Q4j79qA4oiLP3kuT4B8LTQpekAJ2dsroZGxLYns2FJzGbU",
  "key8": "5Jessycpf22h6YuSrfdFsnVxnTGG9stCXqkbVG85ToB9NT39odQd8rA6WVrGquDc81HaCgwd6vTt1Gg3nR79fe65",
  "key9": "5nC4Fou9uKy1rbLQNsrmHcVuX2CLpfM9KfkRpD8Gs1Cqd7s11dnEHZNob6vyW7vG97FvUPw8qFUeHTgvZkufpjsX",
  "key10": "2SZ5C75skMgtqbNhvXHg7k78YVBtfZ9ZpadDo2CFsjSrCZQQ6zBwmNUJGCT5tqUxU5oz27ZQRAgUUcpP3Mfz3fUf",
  "key11": "2UoMow67hjggZxVkUVw7sceeX2LXcwY6kz8yU4PV2qoVVMRhtdkHzkbnH8v1iah8y4myC5fwCjfPqzivJbTz7LUW",
  "key12": "2oYMfBWe1RV7A9tu46N8DVNG9SCPQ3wnKr5mtiQ6HnnA5LkyTTqKBGCoHRgeVFNvWfppDjcmZn7JeXJmEynYQMaL",
  "key13": "2LAUfXPcG3tLP7P2R3ZXCcPFtP9SiB1bNWpuLNrdYQbcEeJcN19Zb4s85kuFcJWpYTgq8UWcTZct4zZdX7VdomwG",
  "key14": "4zfNMrmjHmGn9ahC6wPmoJgGxnU5oFGLJfc4jYBMzbFZh1pa7AARFny56TVH1UqEyjg8VnE6rJ33e22r812ajfy8",
  "key15": "2XvNusWxo91FZFCc4v35VrJSryW24x9MiG67TZh5PNPzJpeHQym3eEEGFFacqVkfj9FfXtPPaJsGzBxGy7q8h7pH",
  "key16": "3SShCc1tSBW4DeeWC3po7P9tPidwLeLn72Fs5iMmqVSofJ2HSp5q9Q5YrM6wPvvjnkcG7N7PpaZHfiE8pFjgXiYq",
  "key17": "SUmqzWRQ1qMJR61n9tu8yDRKnFmx6mWccvF9scSp3igkAQpNdXsPJ3rYMnwPF51WTAKaFgrAigpkJvoEH6zxMgZ",
  "key18": "4dyorFpyKYYpKKU7227Wryw1QDM3GtD24eqz3P6WDHBdeTZQyiHLSJTKgucqbQVimJniHzanS9EBkj7d1FTw36z8",
  "key19": "5eMvy5ZYzLRGqSEZAdiqErisdjhJhySk7pSUAWWLPUg9cSm6c9pnHYpHfqre62wtTyMCYcC9nDrPFxNoqyjXZ5Su",
  "key20": "ukT5u3iRyd7QxEX5JJZ8o84Yi16JrHw4YqoscXtLfkJZeVfxjYjVdgC5M4R3erX3Vv9p17JmTnUAx77DPqTRHCn",
  "key21": "24Ea9Z7P6aqLbA5PccsYBrgLrmGmr3L2icVNDzAzdSF54BvAUv7hLGTswRu6vJTebw8nnb3WKAUSJoi2XBrjUxWc",
  "key22": "GFGpceXgHza9WHuXWRTFxkWhEJwgMLaxDD5CEcjBVhuVzVNBxeoXmirNQh3r7TYacrVDKfF2c5ZveiGfPeXLeEF",
  "key23": "sANLYVyngwzVrDFDj97zwaDetpzDmRDbQwc2PH7ZsmVasYzPwBhSmm9sQVjeUk21mvduPZb1shmCMdkaaz9diS9",
  "key24": "5nifohhtFVXdYDFsNNtSzUFvUENWu9wdhTg21zBhwwEW7hpBiv9qDx75mSBrF4xA48wCTVfvV7dBVWx8FvXjWY9G",
  "key25": "589AhCKiRx3VewzJjGim9oCJP5WEfdvBJpzr12wiV72qAr68RNj3TncdzDHYffSFmuty3dMAmHr4VAwRhD9cSJiK",
  "key26": "2GkyJYYkzb5NRy9yW1PzfRUC2Z8VwTBvDSj87KboFAarax4eN8qQ6Ze71wnpcfKnSCdxgh9j3KPBePCFViinr1KD",
  "key27": "2Si4JRgDx2ASeAhGDVVuQhiQyUmxHFMziVTA1PyytJ4h97bzMtVgw71i3iUY4B9dnv4Xrg13mqEQXrgsvkYrVoru",
  "key28": "mcMC1qtwm7xwM3ksmE9gEtN5hdEpquEhu3749A2iGcxb9HHjWYR7L9tSwooFPNmRFdjpgGAWRqnZbCQ2eWskXUS",
  "key29": "34MgsH2eyvxmVB5URNqnHik61tk8b6puEpBPR1k99gBTL3iQX5ayD4w7cFRvprvQbqKgWKPHmaVZvadyaPeXN6g6",
  "key30": "2r6g36QSinjUHhZRYJz8v9BgFT2xNSuCtRteDUbfRoTWZyfGMaMpewD6NJjAEJYQuFAB5uiBGj8tnyfwa8MAhLK5",
  "key31": "qY8rcf8YS6b32pUfWWM9CrSvafppC5EUDU5x9vVu4UQHvX7vtom3ZhAXGndiApM8Sp8LiVGazqKhzzDsUbofRYg",
  "key32": "28RUfECcsTQxjESVpgju1B2Qgo8wv715eQDR3CjY44cCwKKwHBk4R7UARxKyxKbmn6vvAW3PwpCh5cVH4gy72wA4",
  "key33": "57LGiUdj29tChnkw2AEsN9DdbxVawYyMYu3CjpPfzAafgxpuxymYaeeqWhHetLwBjsAjVSpFVqgCshXkTsCPjwWA",
  "key34": "3ThKndX3daqaTDUT8g4H9M3Xct9K2yDfvQod8MMZuTgmxgR5F9kiAs9SMTuvWqUWcc3DHdLLdWc9zxuzaciT25oi",
  "key35": "4TGmwxLMs9bo7SBMYVtDWcYkGQtojjuheFeojmkHGNB52BGqMSrSt7LsfP6d7uxgpQzTp6v3h2tHKewwptWinNQN",
  "key36": "4mQB5zrKzg8u4eg5byWrDWYGo4RwdEGfrPDNAjEiwL1nY8A26mTxAZ2uWDn9ygvHiHFxAWwPXwo7EJp3sATxmCoC",
  "key37": "2eKUW9jZqKDtnowMgjFNhEZrHDJhoh88cRpr4PSSrPBHLK1Mahk6KVBm4VSXue5aXfDyrKcZLZ15ZuXtXpH89qmM",
  "key38": "2ismuWZkX9e3Tib2QyyCkJGrYhJZ3YkTGs44tmv8MqPeQDi13GBEoQKrqKkWLUZ7N96QG8duxaRjwxTvhNimFdXQ",
  "key39": "3rrQozZeSp8hYViM3e1Hz9FdTcp4QHwdf9ACQP8f1EFnCYU8VEt9py4t26FHzw5b1hwFFuCPi7DWpqAuMDjW4VPf",
  "key40": "3LWCZii4xvX22EQHRP9uQJHnM2pEqooU78J58nx3DzwCWhkfzSorSpCAHH8iNffk43EU1tL2uB8iju97ZaJ7txus",
  "key41": "5dYmuYfgkTYMkFA15nNCpZd3um6imfJnrY7GJ9pJZRgVNBnEs7Ap3eavXvKTkx5UvS5h42JH8ErLuCUT7x6SHuU1",
  "key42": "4pUyWaxJ9QdULpmRokczfCP3HbbgYWcY6T9yz93GPJJFxAft4VfSD6ULcmbmYGJ1iFHVGeyStBGgYew7rA163Jnt",
  "key43": "2q3rXtZVB4oqSXtzcNxdAfMBSkafx53Tn9Y29Lc7bBV1m7vY8zfaqMW2F76HzE7CP6Pf6NZzsERpXjEZ81Cm2WWJ",
  "key44": "5az7CwdJEvdtc3kmp8hx5beLAtYGouYJtajj1ku5X7SGYmKtW1i8x65aF86iCANjz8Nm5JYkmFvcfx4LPbEwizbz",
  "key45": "2RV8dXqw2UBT1cbTbq8fL92VxoRMhoGy4ATctSKgpLm7YW3TVdJnqpPbcRcmEZbdGGL6pbdW369itJnHzKi7JmtL",
  "key46": "j7RhBNky3YKtKFUav9guscDanRUmKnop1eSu84fePr5uVeEkfY4dcobTEZTdUcfdd1gsRyiKT9nBYGChTDR2PYn",
  "key47": "2jRaqE6m2QqMmYZwWTnLErUzaNnyxUzYfLMVUau4DJ7tEzYak1SsAfyjnvsgs5y1xbmdkw3ddJDchBcoQ4YDDmUX"
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
