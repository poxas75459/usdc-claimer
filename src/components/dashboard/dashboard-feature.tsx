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
    "3nujya5KzAFS9oMnz2YcCmAVFsMMqP4EbwptkLtSX3X7D9o8M4ZuEL5EK1MWXjbFhGRJ9ya4QZZ8ehuJm2Eo1USE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37w9LZZFrHG2Xk9vkXRQ9GoMUGTEWYmY1yw18UMP9uZPrH5Aw1NhDMdm75BJF7eTHRjCtyQsdVGR9GoMFmrBk4Ct",
  "key1": "4GBjEFstaqGQTXbinM2PUehRUSJTgQr971ZKh7HARYueQqqjXcbc5weBc3p5CV73TUuwQ5gaeFTpbP3Kgsaf6ej5",
  "key2": "65knehiSJKXrUsupa5F4JtTaw8MFQyNQ7iRHZooUrf2JdFwwbGgAD9xpyzXherKuD89JDJBuq4Q9th4BhdYx6Eb7",
  "key3": "4oTGy2ccePbt984axvACynJSne9DUFEY7o1bEjCiWLPNKEVF2LD5rmcnUsUGKhDkD9yMUuJ7HPU2tD91pF433TFh",
  "key4": "5Y6zbuJ4Qxym9QavWHWwUya3QntTuLogR43A2xfUKpG8h7Lzto1zynn7RURthEWQLQsUb3WNFBw2vcoxMaF17Ubt",
  "key5": "58fy7XLdU35hhhsZyfuMEWBEC8g5W68FZX7KRULmpCqTvk94Y71dYBiqkaDrgu9KC1TuddycFgBjJFaAr2UBwq5c",
  "key6": "4g4WhyEKHAk4ytbDmMSMYZAbRRtQY2PnCzMr3bocRYMgiWKcJv7AFcjiFCPdPBvH1JGTYXpoDkADLLsXYgwfEnX5",
  "key7": "HXEEZhn3kcgpaTr52Q1NTxQrv8nBkNm6aCQEPtfKiBFdyphZZ7fKmLHjvuXqK3xQfimEBSepkN4T6DUvWFsGdSW",
  "key8": "2XGYScyTdqXUwP5JeEv3tohgMJHNmthdReJbHgEuN9disPrZymHBZUzc4JQ3CUcgNxyAxc3jCLtVQgEZHacynvfv",
  "key9": "onRXMUtrrq9m2z2Snxj37ZtkrgLPMxxUZV6tiQF8uZAtwKQQXxTTDCU1TMWX2SLve3pGWYbYGRs51Jtgj2m82eF",
  "key10": "3aqNRngF4EJSeTsNVJYgvr8a5h1XMxdbg4aFy8kFFL4oCZ6hMFLG82GaFcrfAoq1TG8BE7wEW125B8MpDmB7qAJ5",
  "key11": "3Xdxw4T7whpwaKeaf1KcqFZoumrtXtK11fRXe45NinAuCKEhk7xtGbgtNSP3irJ7KHTdBZwHMFLUdTaNmpvWj4Fj",
  "key12": "N1RaJRQib6PjBxNnRJsgkkfsDfPZR6AFykiGSZgr7B2oZg9mhBAa9oCHvX7fg65unn9wPh4JMKLXdtQvv2my2wD",
  "key13": "uGv8LF2anqxwQaQNm2f6m9qqk3isaNU13ygAgAY2JEbXcNMGAYRs833cw5sLEiAycirH3EozhLC334pPGqPUcjd",
  "key14": "3tR7oyQ6tYMqPy7SV8KjUJ5y6X8LKHu5V7o92NQYDuP3rQwT2ASQEzGNAUy3kvztisv4t9vY555wnP95LPXzQGut",
  "key15": "CFFiLM1PZRfqRG7N2M3deUKq5vRPm83HeYfmHAP4ow98XpCoxaPQEdyJNyxcnHjXgJk8UXidDJwfj7sLpbS4y77",
  "key16": "4HF2DGkvHvbTz8P7AoDjCjWHyh6HWz9cJUohnbMhZDWKfuECkysgkngtyvFS5nft27Pz1Yg7gBFawzpGiQBe3rt8",
  "key17": "59jHhKmnH7QdCXqbTKkF9bdJYQt1o3MSgkubhHCafoRXFC5NUGUb5N2SNp2BDTfzvGtEybm2eWX5NVYWHLTzpRPf",
  "key18": "rXN2oVLpbpPzNERWgsi358T97eC8qLUrdzZ5u7PgfGk568wos137fGsJLtdc2zAcveVxDMuoaPSZPHUnmHZoGWw",
  "key19": "2nFcnLNuPFouetaM6XAV4P2edaqRrAqesd4yDpXCA9JfQNHhosr6G5tx8zQja9ZyCLSk9o9q71M1DZ433NHVtZLg",
  "key20": "5fTZ2cYz7pwR11ZUdjtVVGgVS2gGyonc7igJ7VEgKYzLNbXYZvR17deysufFdU1owEZ6LzX44NR9e9CywQZb4hSh",
  "key21": "CuKveknnZ9xUAgRxszNJzxga2NRq1xoRba6frFnazTRHjAf15Q82Zg3Y9eHPLZAmwvnwLYA6cxr2VuWPR9xekke",
  "key22": "CvctVw813iVMKJhgf5c5nJPj43Pd4SSdP15WjqdxzAKkncwyPcdJV3eaymvRgzJgJHtCRbkjiA45UjsyyDnmeyj",
  "key23": "4cxY5JBjTcBjKe3LYy9iAuqi6Pqmv7ySzuEHEtmxHuQFuBBK5f8JoNwJiEswYu4squwz7iZJ5JH1PYvS4EKJkpbJ",
  "key24": "4LxvEstuV3oig13zfE7LcMF65SgYBHHxVWUayt4PG2i9SZxx3q8X6wJAGDyXG7CtKYgH4J4FKbRaUYJTgxNq7V1q",
  "key25": "3tQv6mC1BF5xsXQ92T3NLvzeHsMKhvTeRgDhvAqvEKJXiDaR4xKiFLqJPzpAhp9apaqJ4j4vE2AzJCKSWc2vAdoG",
  "key26": "ab5kc6V5wqyKYq4pSuSCpseTqkYR3AWQRAxEY7pJMXfkVim9GpeWZqfSXQ3uBYVmfZNg6w8UES81gw3V1p14HBc",
  "key27": "4jueoPEncnu6tSBQW4AT5CXm7Kx2SMXV7f1WwhwMgR8AVT9Y8C8s9v1hx2mjmAQDJSnfAY3Q73zk9WtHw2brSBbv",
  "key28": "2vds8rLaPmYuNz5npr4cT5nD8yiAYyYc3Mmjt57pef1WYcNAo5XEJuvyyj9TV9watToif9ZngSY4wmQPgjuMKL5t",
  "key29": "4Hp9VXbSVthZppAuxGwF4rTZwnFv1gXfFTXKC1VM4xEt5wdrRomNAi1rRSx5m1NVhLSTeJPmbDc8PpmNyiWABeTL",
  "key30": "57kysDzkPq3dVBPKn9fdKLRsNK3m57jv4ZThaNtmNac7xEioNPSmhs66Jan8XYx4S29xxzWVrs5ibfe2TSU5dhGA",
  "key31": "3BDzLd6s46T7tk3utWYG9hq9ELnnJ39ajHtWCZe35t9QARkYJjJ9Z78ervaE9aUYVxhaohjuPM8DNu31P2jstLRp",
  "key32": "TVEu7ABngYkUd7JqVhjznACh18X7j9ht4GTDzmQxDdKizTUE6zBx5nwJsjvAyDCcR39wgX4MQmET7gonHJ9ckjd",
  "key33": "4qaVsGMFAkaLve82wmhCEbSsJgEtSbbCD2eiwx8wods3PLW6xjsPwqmWjdGaybfHwbn9nYkLpxDP7A2WyziFU5xY",
  "key34": "5DLZoQU6Hon8JkDzutPxR7NaPiV2PKFRRtKWGA6816VuqRksVuJvg2roYo11ZafPKZZ9d4ZnFg9G5yrkBHxnRtrH",
  "key35": "2NibtkbzTLudhmuL4xzYQ3tJGssomyj3BPxrghGDihECgN8gN53FGowRgPfmRhBsMGrw5d4sk4FHAMYjg92yQneK",
  "key36": "KWKbzJTAqkSYdf5B2v4bcqY312PRhykanr5qDoj3eTT2qWbaz3FeJLFa2Fyub898Nwh4EEh1RPbSY7YQn2KiKyb",
  "key37": "21yKxw7EHQuH8DvrVAxzPScEhz9imUMqfYN97jcMEv34tn4wzyN5634rHFGfCsd393WdLCnh9X3nAViBG3hV7e1s",
  "key38": "3wKYJ1DMUYcA6tLgvF4ovrAB4RK4PQFTTVnSUoi1govmWEv58UD48XKKtNNSwtwnveT2YKqp8WRemaerXP37gc8X",
  "key39": "5HcP78sQFvEtsLmygfuDcmtC1Kd1RMyZsPk4AqZHNqLq18MUrM1qYPpLxJz3eFwMifsR5CjgUQc1Aibj6DHVY8Wn"
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
