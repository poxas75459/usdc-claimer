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
    "4csgcMSRMqVjPEbsuD4JvfL8YMc5P9zdCAujxvso6AGLN4xFvvxGM8cTiYCmwjeKpP54wniwJK5N4zrbMCuAs6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Med2vZBnwuAGY2aQndQoiEJECctHifEZQpgB1pnVWXuu1L6QvmDtsCpaNbcnDh7uPtoHdNjBUBVrTpDrBQmwpN5",
  "key1": "UTN4WE2Ygm2FcJCXoYxQuhpaj6VmQUZYBcsmgUw9fZe1pLfFqvrkf3rYpPYUZU2kunsZdHrAAWpifHCPeMHz2fy",
  "key2": "4rACJdw2PnCk1n6WCuuXPyCq96XgAjeieQaVZ5SDijoBN3nC56PbSKg64cQcSiq1Xoz9PSzqWZ4eQJ7uqJVwVdPy",
  "key3": "2xNhWjM9kiEJKCNSHWDBRyRzDLVhDrSWB6VmYm1kJLzBFkbJzqw2TwUCtRrcUwngUXTEwsHFUtt1n8onbhfGrbPj",
  "key4": "4VjvRuEdpwRyaq79utLeSfNK6FvinMFzV9U473sJpUZeAHmQ8fvqx21ogfiDViiwX86thdqtdEAkgsWTKKuT9k6m",
  "key5": "4Y3cXe34dLDkU19DC4jeL3xFGiH3xLs75wgpTPdyakcNrYRS9xMd7p84ui9L5jSAkW6eeYiRAzmWpMZRZ5swdiQG",
  "key6": "3NtiTdB8UQehsgEB5oDu5QuWrsRSXeF4ByfaK3NPLhoLiJ6rXpruGvuzp6HYzdZjTV81LN63TmkgnYYjafP1hqXU",
  "key7": "45CjzKwT5KLwsb5H65rf6hjZAFMwBhBWru4ghKpuFum9ivDRb71BFkQzH5k5nLfg6urzhXySbYZeg6Ewcecf7F7A",
  "key8": "5SLUdiENw6JHbHmb9WaJreXnmiYpKULGW72Qb2FiU2eqxNyPQX79E5E4jh3utSRY1f3uUTyc6UNuRwymqpseduLS",
  "key9": "3DGqfA3MSCoKJpyaFZJZiNo8FCX1okrdoZHr7CQ5ZNpEBdUX29xq65ghr3A9pELsyiW8Hk9rB6H4yzqmJPQ5HJVW",
  "key10": "5gGSQzH8MVz7aZVDY3Qpkr5xvTNuX4jd4tmmn8p1b9i2wQVecEFFsyJ9eYwhHG6kqTAPBsbMci941tnnEHWJCzFQ",
  "key11": "FoBfKBtSTZHhoTZuB4ACk7wG9AvWtA6vWsBpoF4reLtHPujYxU8nmj8NUhzupX6fJjnfkAZ6URLRvb1wCABfRRw",
  "key12": "2uZa81fwoVnTnjFRJ6hcV5oqte6xdJq4bbc2pYFj3FjFSNeHmWkFgVSUK9jAHBUf9hBHiGoqq6V2eD37sAyWXj6Q",
  "key13": "4EWMq8S4T1EwpwFyRth5e4RK6S5zF3fbwdunzYkQAcdW1f5JpxK74xJ7bbfi4MCdzRa82MyBoQ3SBBQYg5z4qesg",
  "key14": "3vdo3efGPVprGwk2fjZnpZbjBjusvNkdLzPmdEENnDE2tacTxZEptDreA8zmWj24PYS4Z4mjU7eX17T3Kt4r93Q9",
  "key15": "4AKYwFAxNDNRsZjoUjZ3WLuS9QEUaWspKFGhi1rGESvdkzLNYaavMXN5V1fofJDrMmnQ7EnC1AFW6N3BGXFaDotD",
  "key16": "5xrofrZBdpVMiTPqr4AGN8rHhRwbDZ5q1e9R8WTEngx6YyzQS3W9YoK8mgGsVdhA1k7HGHWUWeWrtd2LzutYjUqK",
  "key17": "59fM5HgpqTkMtXThMGuPq1we3sqDKADcRUThAEjt1eE2U1mNkKNxcHue37X3zqYHnx2PRk2poEyxB4AvLpwhvUA9",
  "key18": "5WCmuAyEPjyg1T3DsAsXk8ZfCfmjN1KKwexh3vo296AES1Qsej9Q6S713h3tUvuJ6kYx7cnyLhFaGQtaH1gWSMTG",
  "key19": "2hB7rbZLinqMoKBtFiY1NY7kzuYoMQaRqCHzV5zxPpuX5M1wvS4o7WAbud3KC3BC9pWXMYDpD82nR4AHeht9suo2",
  "key20": "3bawu4s2o74E347Tqwy3pp2tPL8hU4fAc74ic6icQ961Uf1dizazQfGKrxeu1QAXVmiJY7whhTetW2QdtPQLYNY8",
  "key21": "5xwNJwRjGwDsEA58uPT8Xs71GiY19JYHypyP3ybq5TBQ55zP4ifWaPbmDnAN9osFi1rZTA6VdS8hMttvyX7Kz2xD",
  "key22": "MmPc2mD5ZWkbZB5ZufpSffmrfHxeRNyPsyDrPonphQ33w5pGZQ6iiSqzmeMu6wRSu5R6PAu9djCjEh44fL5XeZP",
  "key23": "5a5qPiUw9uPh83QMW8wgcRLDuYcthaeC8kLYHzrJhE4ZMDGVGgh43cVM6or4LiZWJMRNEopT8SvvzvZbGt7TBVyh",
  "key24": "21NpqVr5UV3Nw3pcNX9kdeYiiTt6ozAqkqAnaRQraWqvHuNXX45AFqfDt7LzGhX8uYaSdXmPNkkj6dEugqYXcq9Y",
  "key25": "4uJrFD7VXgV7BFki6TwueNFQL16w2ZtPU2QrMJUrUaM6dgVF8gqnXRfWNGMh7hfiJ345RYwnHm1SUqGNytsMkhru",
  "key26": "3u22hWYaW4PgVvAndzNet1YviSMhF3bCTpwJuEQdwrYSPfYC4RJY5apsZpv3ok6N6FkjjTaRdAq8DDrXpvs4ZXYb",
  "key27": "46axJoVpeT29Heri4CBpNk9cvpPwWKDRjLqwq5nySDBBcX7kpQWUc5DgRJRwhXPgCvmxm47A53v7z8r6oMX25Uc2",
  "key28": "3vyN6Lx48Dx9Xkiru6qmpi6jGR2z4tP1HavEPsSAqvU4vNMniqE1YCMTNzkGsukyQrPPXz7knWWzWdhtDaHvPoPu",
  "key29": "4joD4g2bqiM8GHTrPAG9sgsTmyjmK2LLkzPyGW64Uq3FkCdbbEgLaNhtdXYXUgQLzewtTHjWQ7wZMiZPGMChegnB",
  "key30": "2TNMUgEiMYUesAHV4xKe5P1yvAT5Vqi1sZH9BaBLFRDj4VNS37oN17rsbwbZLAMUcS42YAJvgyjRaezuKm5XA38a",
  "key31": "371SrdamJVSUoyTTayBQoM1donf6WS4hFPLT8nwe3d6y9qdtrrs8Yu63BfFGpAqk16orwn4pinPsK44ZjZRTgQKZ",
  "key32": "GphgzRRP1cYmUNyjk4MnMTnd4fkoCg5JVw7qnE5cS6XPNwZDR9bq9623Z3PikHEbWg8cRHf8CKTKMesx5c32bbV",
  "key33": "3qGJwuzjk3PJmy5sby2wQVVMzzVz57BBcZHWv3dGsPpqcAgcwiaXxt42YZHdH8NT4CYzjdmDsdyAe6XRGnqLnTkf",
  "key34": "5YrYyizM2nLrVhqKBtvYKiux7EVyFzEYWUtVL83zr2ZbThhVMrZiNTTbqzwsjaF2te6thGJVW8fRK4qXFbd2q72C",
  "key35": "441oiARVv6s6xbfLvp451xyvx3SRzBRM8NqFnuqEUYzw7V9W5uXMTRACP99Z3Y2SDPq8zAnWzheCa3X7n8p7W2Sj",
  "key36": "4SkdBdsKGWmQu5o1qLe6R3M8rFvm9iTP1c6Rtc83E2wMRzJCojA3AGLn1DUtE1osvWtEd4y9TdVwmgs361RVrzin",
  "key37": "vTje18H3egwPVgUTktwiKqpdYdcHBdPpocV1KnfB6PvbS9yAqzMvnpYU1MAd4WS1dwK185aBZSHYh1Hvg2jWvVK",
  "key38": "4ZY76ymiJaVREKxBMuTSYYKyxsXWRmnDHav4Md5JnVVg4QiKapfnZH9z7kz6pMRgNXsM6T5Nv63a46DsAZQJLChQ",
  "key39": "5VD3YURSrWx3rPrh2BeyWBmBU24oRLHM2TUvjqMVuPriDQTqA6BLrkiKxks48UTAys4XpwBFZyEXe2vKE9RsrZuE",
  "key40": "2nPBgcdqWXbCtUtkC3jypTRbG2F2SiCqV45Tos7jPVoEXc8b9piW1qwec5cMr6AupLphkZtLSRY84dQQ1VfpqRSJ",
  "key41": "5GhxRkBhijSpUejNv5K556JSQPd46VTSsa1N2xRLq5avVRm4sJhrjWw9RknMaByoTSNB4TLrX8FHGYntEKQDvBpj",
  "key42": "51VwGdAZJaQEjaZzM8eERcx6sgJxqdq5KQgw4hnEMwaMpKudA8DYy9dkXHE9t7kFMDpheMRdR9QyP8yS6GTzCdP9",
  "key43": "44KQnLu38d6XCiAVxVxHDofwLP7rt7zK86BehufinnqMndQQdGC4RXyAZ5htusHzcdbgbqqbFCM5686u5oL94H3M",
  "key44": "2yqd9gwPy6yAha6S2Ja6AVydaRWdyj8mVLQcrDUdgFi3ZPUewLxA399Fnh7ApWU7NmXcdCQkMq7fHUVsC7uwgbgV",
  "key45": "5k6KLXfuNjwWsKPrn5JTHKh7McvFhNrqGWFYtjJdgQbDzzCqoFSdzNsoSghnj9nYS1jzGWvCy7tQrccjyK86hTS8",
  "key46": "33a7kVNqxZqbe1adcA8FarAe6qWfWAm1h6JiKDNQWaZj3KSDziX5MQNwtDUZdxDTnGTZFFbA7TKqAwf11aWtchjL",
  "key47": "5wn2QBBxAf8jHAogUZnosmaCMSbMfRLjC2P4uGu9snfdB4yn4U8yXW7cJrKB6GtDyB6s2AeDcbr7Ytym9sgaf8rY"
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
