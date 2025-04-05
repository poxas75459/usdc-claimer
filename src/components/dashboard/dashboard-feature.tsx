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
    "vPkqWE7QHCSKKrHDJbsGUnMq5eR4HmnPxsPEC9quZMxFZ1fjtmLKAZtRSEtrkhdkXrxnLEq6zZPYAknhSQzNgeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PySL4RdEfyE9r3L1EqNY9T1H7eFpjr9aiBt1ZgGBhoWbAc1nvhV6HvjfKQR2vKFsZniZ6AnSAimjBgmD1SKrEMT",
  "key1": "5TZ4UfiFDhzmMiTmZhnWprvwAFaqysQxTorUB9kC3sudNmGEnk2EWVEX4bNzEiNEDMfjZW91pGFEq1QFEskZBNZK",
  "key2": "12A7xTeeTAsBQZAr8vW3ChaRaufg6jAxUCFNxvTMqL2BSoAaqdqQiyzKXbdUF91PAQzdgbynnyY2wztvTXGrZh3a",
  "key3": "3DmdDedDgD5Bj3ymWx4GVL8gPDNzeJwtqbzxnCvfaJXUPxmzuZMAiTwXPm4iZMx9ZpCo7soEUsRfqVvZLQUo6LN8",
  "key4": "5DJAMyHCArvdYeuxs6EXoxX5xn2d8xoTGFmqucJ4qi8EVBADyKhqePcTmRteg1p3eBK7ZebZkbNiYeUQp8owFhQ1",
  "key5": "BRbejxGLHrDqs7GPuWnVRvAFL43GceAYwDcqx4omF4TbtgUqABYAhrpXBDffTVbc1eJaSHdUJHD1JbtZikCTPPd",
  "key6": "3tzY2jam7CZUb3MKA9S1NQyNdAMZZPcvTKGm2aUuPdSfbBeyHS9HPrUbz5yzHXpwUBmaBkteWFZRY1U23oNXogji",
  "key7": "3cPce7x8Vr6vVWVLJZT4VWYukj3fmLNU4TjVrYnHAs7DuySTmjweNFLsHBrTQ8vXPSUC3Hv3u3zfhvk7V2h9Gc65",
  "key8": "3CSKcHxbjDXxpYvAkBxQnFQE4JB8kwQbhMbiVpWj5EwSKhQ2FVHFSsSJc1upBqtMBZZMqepuAMKT34eZi6bVjTSf",
  "key9": "3grDjhfPZ1vAuZ1eQtnEx9FAMb31wDmtf2TCZBciH5Ud9a1PgcCZSqrR7HypRyimc1LMcoGKEHRa6y5EDH6ZBLtJ",
  "key10": "5inYwPjpFz3wBeLTrCWFdUEL3gkBt233g3eTp5u1WKUP2t8aqNfEidzsfkLT7KdkNUBHMgj4wau8we798ZsPe9qM",
  "key11": "228kDLz2cv2njGbdafbsmFGewdRZrLiZodtXfe4aeAacwBovJRCBjTCCBirspJnAoFouHiKsysnmGBoDif74BUfU",
  "key12": "3Mt9vAQ3o8DSQK625bUqUkQZm3obuQr1A2P6qKP18oH5S8MjZRmebr5772yBQKFRL8NbRQzoDL4BTUeaHwbrJeuT",
  "key13": "4bnoCDbyqFG5sAnessNmpVutp9CkwSgRcsBA8xrJEitv4qPRgEMCjqJRGLJhFZpkmduWbEqPLa11gMCg3tR4VkS9",
  "key14": "4Vh2GsSuoKYaMbcZYaxA1USNwGd9GrVUttDwsSrjhtjnj6W3anV8b1PiXzoNHDKpuwkJxN8ynmrYAfp8EsEWQYVC",
  "key15": "2mtwbm9K28vP1cn4YDBzpSf7srgTeuSbUTAyRFG56gx43XGJQW2kiRzRksWWk7wuegh7f4yiPfPooCfKkFXShpWa",
  "key16": "2N8n6KjD84She8axrwK1XfGkGtQ3KQMGvrt8wSSoyso4F35EnFxdZs91x1xhhsFd7se6AN2ZS6mJZ4LR9sCiuzyB",
  "key17": "2TaHBeo823gwtw5bBNwrnE38R66Hc2g649npqJ1ec6GV1bJCjfQDVYcDwN2Ss1BWFu4rLZFYeArgGHaMXbJ5JEHn",
  "key18": "2Z5uZ2hdeURa711BeTmUyRMJZBY53UrWqpacNSw9e2aVSE57y3MLbnLHUPkwXnaNt57n8Dw4JJr9JTJHhZEb5r7J",
  "key19": "Tt4xjUaDhdLKYfX1SgTEvqsAf7GHvNgEaqUhna1yZ598ieMwQnspsVkLnHYg5fkSiMesVfXAQSBjbs9qBkAyzLn",
  "key20": "4GiFDemZeabQcHU6VMsmzPmbifhbAczMBiPywJBGPvxFepSdViCZaTMVEgg79fzY1mzuAy4KLd7eUoCD7cKdT9of",
  "key21": "xnLtfQfTbCSk4Sh8CtVikuV7LsrP3eFrDrq6jx6rNFmSaY6t9SGnxZXEoxK7sqwLyCC7Rh2r8w6qPHo876D4MEX",
  "key22": "64gmsoKmxuc2cFEa5JXCn32ZxVwwwsQqD14x6AiXFEtJSqjmjYLaXjh62DwmZ6iQQZwanMbeboQTcpgYefpF6Gkf",
  "key23": "3ZU4GYo4J9kcSBw2p7t17ikE19GNefV37rv1CLTk1Av97aKmNVdY3FgpMDZViXqjB18prfErg91fRrgbhH41eNB9",
  "key24": "2SKMH4jWw57UTQ7snYmWXnQLoX6BTqfsAKt4p8s7pi1LHJMrz2sTAxSHhr1kRmFabQNayvWcWdpJWRp6fwiNt5J1",
  "key25": "5XFiBP1eaYgjfTox5qG1WQsNevKm7y6isQ2jFEfMzcbrVQheeHe6RUThtJhXemp3DyRh4TnQTNSFJGCCuv5unyyw",
  "key26": "HAyfdL3izNSXHuPQ8UstBiTcafNDh1RsJ9Z19QU6xikJUDnUgMniTqHLEQc7MRiyWr7P9H3Xihy6L1XdvJG53E5",
  "key27": "3vgRGmkVhEtcLRbqCksB4dbSN5AMyHYEGBFnJTcjimYWVWDFzbQJ1KStDYzY7zmr5USt4XBgU7UKhoWEnPuMnnvF",
  "key28": "3MMJubwGvDFsoKq78LDUsyHfjBMM4vd4bkTYU5SaikcaGhRDJKUocVSe7zSXxGgfhmuyiart7gjhbgXHT91WMfzv",
  "key29": "5V1CWLbXXmCPUicm446PjxpFcNbw9BZoAKXuzBfzHBKxx23aYjhWSpwGprSgGQdNZiac4R5kd6cSgfMofUFDHBeu",
  "key30": "5c6HEvVh4WhvLgZUo2CrMVn7NUj5Gev8dFChgcNjrBdGvoWd38pH6Y5q7TYJMkyTWfs2bF1cnrS1iy8S1vTu6Z2b",
  "key31": "46sWK5uns1FTZ8CJhx8LCQ2QPrcXJLy7u2q8u44HnyjEobKfNk9H4ArkPSESRyr2nuABEfWV34tk7buT47537oxr",
  "key32": "2gZDRY3Ng4mKU58Xa3xgjyzNokoY1mWAPeqYkUZtbwTmBcxZ5VjaNC3QVqyGxXKi4uXD8um2Ve5wNNpXS1SxZMzZ",
  "key33": "B719SL4jNhFojGZuLQ4nbnGnA2qcvM1bxcQcYsiPgv54Lijd2cBL7YVBGnwtzeJTGGdYxWKDceaKuRhpbQsnG6n",
  "key34": "4URMFjufW5mEjCdcirsN2PASEwPCXCfw2Z72tz9eXb7V7RYZFxuR9gLwytjVa3vQkfbXxvsiSa51Ndi5dWRJFxPq",
  "key35": "5Lgz79w8gUXcbgodKq4pmZp1zKrnLhnjqJwB5sXhLT2ibB2ckUuc8KVPhjPuNAnK2n1N8R8fsLXCbYtEd8sN6stA",
  "key36": "GCsuGnV8yhESkBFuSu1jLiGShneFiKwvTRt3nifo1WMHFtBYu9u1fDrPAcWz5V6rfTTb3wbPfsmXMpSLEBm6qAb",
  "key37": "HxseE3huRfVGxtq9yG3R1BN5n5L8wspAb6pip9fU9uktHgPG7ngPPZ2d1BahWK59Uev95H5a2GggDq55BmuEPtc",
  "key38": "3aS28j76P5CThXt7Bqjzma9RajkttWeJTgKstowM47w1712c3YczEUxyZciHJtKmBS9r6sjuYqMP841A3thwPJDY",
  "key39": "2ZZPd4L4P3C4KsQzcxLgDFQDA6FrX66aYBGvo6XJZW2YJQLZjUWNaaq7txhFy31VzmhkWi8vo5ntQmn211vTkH1n",
  "key40": "5w2nZR5LLXEqvdPb1tD1JW7Bap4sbDc1VpzQan2Heg4M5PaaZ1Gentp9WPoPnShjYmqYGKGLU5YEpYsEu59rUh6J",
  "key41": "jqEJthAAHUtW3RzEWnvqRiuKNz8ZNT6LkdC5QLz4uAFULUfrcNejKPS2S1DMB8XkqyJZ1QgL1Gjcco34BnBcAgm",
  "key42": "4k4TA2EsWKSXyiYHuaBa8F8p4ogjwRPWFT5Ntxuf2npLQtQY3k6BwgoRoHGjqWpgxHnZjH7ScjiqtoryxeGARkiB",
  "key43": "5LQfJoH2Uh8hchm5EhyHLrk4tZ2TVxMtTVpi1EQY4ADpy3khuAiVsSDYS7SYWxQ9VfyYdpDSz5sQNKGe1AxTSyKn",
  "key44": "2k1iomNu2CzQc7HSzGLkycoHTcah3L4fnYGEoWxqRcnpcp45pr4v18owWsrrDACHCo85vniwQPwrsoez8jHqPsFY"
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
