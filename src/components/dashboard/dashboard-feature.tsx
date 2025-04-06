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
    "C2DCXFvL1cFg5X2FQepGDrfFoKu4WFovH5qeyyU38SmRbtvMmn2HnHr83k4aJoKdkAxZQgznGFXMe66pqMaFtUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2MNmcnp7dvqXNHvDk3nZXjEZPxFtkGDkimzqhEFMBUQdRHTJQRk3FD3z7gpoqVTWMHoKhi5aVsBvJh1NqK9EsA",
  "key1": "4TCKvY81CcrrcJKncGYS8mJDT8H1DAQQATnMnV5mzs8Re6DyB7TbjX6QDbpnCdeRWeRLJtzV3duvNxGaADA1oafU",
  "key2": "XbEjKKdkJHpk33BW9o8mH7knxfA2iFrUu8yQKetafc6oj396LYWirZ4zu4c781hQK5C6vr1Jd7gZXXo2jrtYoLs",
  "key3": "4V8erf6hyn7WhJBpXfXupFQjVGEo8fJDcAnPVx39qRa3W5sb35AKbPFaSQJgYHdv5JqQf4SPCcZaSQbnpc2EMG76",
  "key4": "4ojsUEHVCcMPJXSNSE1seWuEivdq2vTHV8U5nsKwvdmBJNSPm9sqBg8dLPJuew5YQwmRNYhV5fAjZ8fjjmg8p6S9",
  "key5": "3bwsjU1VryuZ2UDFruwrF1321A2PZQqVmZwETNApc8bTp5Sy6nrxe5psnaacUKL13qVNUH6TimNrdT2qB4BjLSac",
  "key6": "4ZzvLZJBLiEyXG5y27YecVFn8wgNpfmGNuXSu1fD7P8StavyATn47VYrt83ys9Z9uMSzjnDsKe5vHUsW3cuy7VT",
  "key7": "4GNaZi6zKraSeqjkufizVDgwefFgA29qWFeyLMBX4Co65GVyMSnYkCWsz6bEFzn3Tr9bUpXxm9RFEjEzGwwEwEx8",
  "key8": "2CyHcJZHznFwUa1qSHHmnGy4vrHMprWi49GzHjQW76RDf9oktjuArHuzY8Tr4NmAd2Aet6KxU8vyYRGhoVJUoSHU",
  "key9": "482MHYSvtGfBdWTgxXKLjjRc6ubmBFhm7Jb49HUpHDi44C9WXTLJj33uoDtcnRUfXPJsHekaprbyHw5cLosCbnR8",
  "key10": "44XCiqC5c8MLBAvGvhSuW9yRFkusrGVR2nhPURrhP8NRghVFyuv9SnMkKVjVqgNjhcBS9KYotgM3jB61ZVct2seg",
  "key11": "3xnyLxCxcHEvFT7WE5ZkLP3mz14HJqkxk6cA6QAe9tzmykUpEuvt6Wri7E63ppSmJUZwPXsemVkAKRRsEGSxWg9J",
  "key12": "3SrG6R1RmtNXi8aigg5snZPSZJnLbk8sj2BsrczbHvQcDRyhWtmprmS3mJJ4y6BHiQgutCjhdzsRsyF1pii2RN9t",
  "key13": "54NkCSdBzKLCn9cLJaMZmJRLLXVuzdh7YD3a5ARJmErKmx4nzy2RVmuKQg2ceKKcVRN584esefpCDsxc3BZEYMZc",
  "key14": "5wJazuL4gEyW3jraCcCWh6xerip2Xn3s2ns2CUivgiM9QvsSRvDUSGmEMffx4Wmur8FxqFEyZEgp6Uqujwkjd4S9",
  "key15": "4z2ZHecWQ4F6kHaqsdgpX8XVPTWWSZU7FT6wpy6GQdy1hYXzGFM3KF9ASym2Eut37qSWJA8UugZYjU2z71jYks7t",
  "key16": "55QFC9P7yNgomCVWsfzuNsPF9zPJSN4F9GiCixHKJq5wij3HsmsC5L1uWJNii5j9UM7UTnJLu598Hx5cvKRQqZvt",
  "key17": "4SKXrMZqM9VaUgE2LBrEx7f8eiEKWxvP9eS6FEGj5oQWFUaEf5BRHmuEAoTRtWcefDZf87Ua5fRp7Tzm6MwcNkUB",
  "key18": "2zCyjJzyixDUQGNsWMHmNgUqTfMVSG6AeXYbpFqTjfr45HZUTrHBYtidgHRhZCakz5y4iUmrcS5JBuha1Tvf4YfD",
  "key19": "5kk1nfUGWFZuh6rdTLRJs4Nu7QY271KzGGSjW5w5ob2zT4XFGAWX9NJeviv5ptBi7xAUFdC8Xh7rHwrgxyR1TgKw",
  "key20": "4otkSw3XnmqETgea2PLafNN1NHqPegPVBq2CyccVBqPyHqbcF99S9rSq7Y4BJKGZKxF7hNBLsbmwaD83jcWDF8bX",
  "key21": "272LKVgwryiBjwkpxeB8e1zrJJg8Uz8wAsCp3YsvHd5EWwR8knF4r9BrUwFYVkoTT7FRQM9MRvSecqjzawxkxg4E",
  "key22": "4L4YCPSB98Ko4JLNmA7rzSJZs9cXgSPStfYrTAre2q334eFR1ufiZL7kj1CP78i2Ysez6ReHcpDrCQqKm9zB4aui",
  "key23": "3iW9YpeotRpJNkcvb386b4Ny8ddJAH1u74WXjdZUhvyFy54HG8SG6Ng2ocmc4uT41bpNgQ1mS2L9zJ7nNL8gMYeW",
  "key24": "5j9kJMiAi7yN9m6rte5fdcieDZjyCUCDm2wBKaaQa75gG2BqHhdSjsMqCXE7jM7wofU4ikzmNDiiKYqRuSn26mfw",
  "key25": "ayF51KsN7EPWjmLvvyhhUjJrayvUHy6AoUpAwYVoEb97yT13kTr5nA2n5ix1JzPK6QZx138F4yJDbQoRARnNDLH",
  "key26": "4tubx1JRwf7tAd72znFs1As97png8yL5AC8p75RjbJVPyy6uD13nTZY2CviuhP25p2KLtMQ6UXuW3bQGBne7rFFn",
  "key27": "2fBfVjdLaHvrfYdTxuj953xaAkQJ5BdSjANJWjNShdZkYgKtC6Jbi9W6yLzR9DLjFWrt1z65ZuuVJqNYpzjuY55x",
  "key28": "2kgV7Nyj4q24SBr4bBQugNWMPZJXpdGjkwKLpPNwDFr1teD49gG15CY1rAhwPypoCa64mDRzXS5A4RPgofbEGTxz",
  "key29": "xzBBD2dGAvVR47c13XFKbgu38kByYfeNJ81KmCDwoD1bJH4mN29whQd2Cngjgxn4ky5exb4TotR4oeWbv1vTc6T",
  "key30": "2kAG8szHKF89qdny8AFEffwyW3JmQef6dnFk4VwNdpmUMpuanC9Fo37vMTMzuP1ShiQspi6ZJU72REKQwYSK5JKd",
  "key31": "3qLQi8r8ZyUv9dKT5NEZymjutuAA5mgiqMj5kzyL8PWKLozcV4QxKt9JMhJSEinRr5LdiHeroHh3jmkywGqvr8qV",
  "key32": "3vT6pfryPAKTC5hX4mbqbHzXFTAjsikWod8UFQmKKSSwRzeakiwhMeCoHdAhr82JdRo5hxHkBaEUF1fdg5bzqbsk",
  "key33": "LCnwt7SU7gzpDBNSGVmcchu9KfKQqM5YXB2zuoqbxrxRvy3oouZd2drdNUb6vK3Ek2LTJ9gAnPR46EokaCNRZ8B",
  "key34": "T3AVRCuK27sxm9Ddnt6p3cfGBhaJNhUqfZJh6EzPTTR4QJh5z5vacVyuTEU73wW4nn3dqLRBsCUgqYcVJdsLMsH",
  "key35": "5k8MB8jABDRFHgripGW66nxRwUKjS5TWdDKRLGHBbufkRdhfKadTQ2Dgd2GVKqZuDLCPCFetUXLgLmkZTV9gc91H",
  "key36": "28woqJ8jvwaF72MN1yrGBbQ8XzbxSS3sXJKPy3hBygaszGpeNyPzYvVnynMgGLaqafCkfpqNUt5TYr49a3MA8aBz",
  "key37": "2jyVM2FCu4qzj7VQnCRvsvKGXM6YD4fWJzDCmCMtimJqwZvWkfjXgcbUXmv1qaR5oLwwh6fpPKEiWmgD79u8k6rj",
  "key38": "2kRQtveSNES9XQSGCWPwtHWdK7T959fZnuZRtHGZqxmpk2F5V1sgtCCazob9wPRxkaThdU9QH7gp3DFUPtuXG9V",
  "key39": "4KBfwPpSHFVkBcT9H4N9SEBDFdnndW9aQTGvzAStLetRjgsVefHw2Vb4L5DszWvimwkvJvbuNHSTWMyeu5SATqh1",
  "key40": "37bqAbd1b6DGgQapHz8Twtoio6c3kv3AG7ZAEq9vioEkx8wZXcwSQ16oguGzBvaLANiCLo8Nd94n2gFhzaRbHtrB",
  "key41": "5x22fwVfyXwqTWHZNRsvApRRqqaeTPM3fQPJf8BGcw3AzKvNDjtiEkoHzBexCrPTtbJut5gnuWDhn5zzjBjbCeDQ",
  "key42": "4oUMeMQtcmq3WKkbhKYnqiFQ7N3ZwWDc3jaNeVm2N7QoBP5mTaa2vqxvisp2aSHcnRimKC4PciMuLQ9tY66s4ZKC",
  "key43": "kntvouFZH1AbXR1525ZDhbZQnK17YBvJxUj8xgjRygRxdTZhShwaMYFHzjLJfdZBs7uUAsgyn4f5QbqX34p6Gob",
  "key44": "5cdJsBY9TPWc3hwoLECA6m9v8YQDQiN18vzgyWSHcMonChCrCX6tsDEhyrzGRJWrKQqLdFvZUqyTDssXzALGtNMd",
  "key45": "3oGyNNdwbHsenCsCnuUB74gDJumegkJSWczPoHAagBezjT4ACz4YLszoY5wePZcjAbxBJMJEknbLxC4Etj7rUUhv"
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
