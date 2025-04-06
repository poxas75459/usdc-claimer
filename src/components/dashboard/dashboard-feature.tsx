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
    "5mQLSKmfnYctyxoVmYL5V76eRxwsWvWHf3hPk8FehuQbwCBLTkFyRMnuQqPtugRAUuVuFimJhc9wqXo7UkSD7Rnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkADugLAiFVqMNJdXwAaXbPYvX68jnvhZLZGNnqo8Vss8h8rXCP8Xrj8bspPQz4uGngcKhcBQqcKDxyzAZ1aJgZ",
  "key1": "43ezVKHY23u5Y5B9de9pekFPT8NJSNcinMv8L3Qz3hXgVUc45Cd8tzJoB8pCkQUg9bDBmSAig4s6MnYQXZHF14K",
  "key2": "3jndS4k9TUKpYWx8WPMJrkSDfT8BfkcccCL7jMsZhdK5JMXdobAPELSeJUzEX7pkfY3UcHDPW4U5kv8GC6tYA5ab",
  "key3": "3G6yeGY1tTbc4KnWo34CxVZFnUvJguxZMn3PtNwWviTbBFGBoaYGV6tAZMggcYNAC5Hh3RfyXyQ2LbJEnC9qPtLc",
  "key4": "25GNKcCoyxb8MuSKCYNX1XPbHPv32XrGkAd3674L2HsrmC4sZyD4aswMsy2xhHmBBM9wLJinci5nrYCsvLfcqM9F",
  "key5": "3vFhv9cnyq5KG9NrPRc4RKg4Zu4Dzh1TBdqnCRNwk19GRyWQrvSaY9F4hczUq6yQ1hoeoNbETa8Z4iQErVQfgdS9",
  "key6": "2UTnDdzayPtgd36M34wQutdDt4DzB7kp3sBofUAKn5M6snJTdJqEfy4UYedc47LMtFzW5TX3ha8bqJhjwdaFJwqL",
  "key7": "3mSLuysf4Dj5mY7Y5q8WebEZMWQkPxsQNBprZXyYhbzGXsbzJQ8oncMyvvGmaNMPKKTeb8e3epcjLfzNQzPCN8xP",
  "key8": "5nd7tsfkdCKsYmEZUFRYG5WaQRUxtp9VJgaoWqU8Dh19KydNWpB3BHAyQf4tL3eFVSTYUGgrpZE3Uc33iKJbRtiR",
  "key9": "2rz3Fd3LjBJ6xSuCK16PRw8vZXajxdQt9hcJM851Fsyxjc3ev6x3GcZbn1twLWnqPX8XxbSta6P5M6RXQets4jpV",
  "key10": "SMvqBEvx4kjVvujLnVo2qSQNgXEvsa4ZYTtat6FwTRT2dr3xjLJXFEyLxtM8qzLJgNZsLsSUb5Pj8Fm8pFfydFn",
  "key11": "47Whcns39Ut3hiB4f3WkZ3YB6FSxgKMSVKJMMwuiNRarbMrEheLwfL99CXT3HMdms95MwKbDLjLZSY4NfFLZy7qx",
  "key12": "2qdxnCVsBJwDxug8VYt3GZmV9DWxFzqDixW1fLUMnrcr4ywp6b1gRxmjJgvCb9mGoSfDkddiKCWefTPMqaBuSanJ",
  "key13": "612LP1TwqULSkJUmgoiUbUktv9DKsqfz2GzxKMjx8SfDxBVwV7xMAsVCRxaCCtNHB9vLS6JJScfd5GTEurYUvf1n",
  "key14": "36UwvjoM8S8AHvTu7PtEQdiw1wFp6zboigiQKqH6zhLnA9T28SRzH15yEujG4ZmxHK5E7tyS4PqQ92KSAHMe3X2v",
  "key15": "54xi6DwfhDuFD9RRGZv32Y2GraYsLMAx7P85L5LSSyc9sPPMWSsjU6HZxXgFbNcjArAYmyJHMPLzo25QRDYikFbK",
  "key16": "ASuGuLH9ZkcTAcS3o8aG1y4ka2yK8aoryZ5yFCWWQHKVaqWRJT8KDHL6RfY4oUeyR5PaehLUaxefipiWyZftVK6",
  "key17": "35Fg9VhaGRNskGoiTdGTgyGnCZ18c2vNKoiPuyz79eSJPuFcq55MqmRY1gbdKX8t8raNjfqD3Asf3eMh6bemBJm4",
  "key18": "4met25TeaBMHe3N1cgViEB15sxrW7Kefb7Dcbg1KUKRen4yFhc4PC7jVfVVWBt1QjBbpwdhqpfXTQKfnzjq2n46X",
  "key19": "45qex98wCH1ZHDYqeoY54anVy7S6guAnYpvfvobaPqVcH4Pz1THM6Yf3pagosZj9Cp6otARyuB16Kk58MFwQdT84",
  "key20": "4EKSRUGXPCapA4Erk2e5HVbiyTG1A1J9HndCFtHeAde1oDmP47MvKubPHEdvMdzdmSCGeNSpQBjyGHgH43wEh59E",
  "key21": "4yX3kjqkm3u7GDcBDzmfodnfzDjNrawM6ySg1yF2Xt6C8x6Ur5uVcLJ4JNqQEVfm36dDPYEpgnHkqUdUMbDVZ2UY",
  "key22": "3NcJV5FgAG6pbzrmL97Fwvsjr8maYzEUWAyCHRSi4wNWeewDdaqHTHsSHaHBraYrt2dZP3THw8R75CC1Skd5yNVd",
  "key23": "EKFBpv75rsGPLXffwjuK3Wu3aZMtbH6nUDZ3m676QFUHNdiHZZjvQbRuCVMy4Bf9fqCBapZXXsQRRBhFKEKtmwV",
  "key24": "2Hnqdk8o5nxKuoSi9A4TXLVXYvneXCxEGxrjXdZezGed2rXjLFTGbSBBvuc1gwzrX7vxT4Qbfe7nmpsW1gtGUn3Z",
  "key25": "45m3oLn4hcTLY1e5ktBLgjCHBVsCkbnX7KMvLfGiaqsNTEUWavbhqSVwntaaRAxobkL6jmXZXU1LeKTSYFtf3mNP",
  "key26": "4NBqpZt63VR2LCnn7ssi5sqQ5yHLA6UUZRdZ31mftwZ8C1WBR1ZXVzaJvZm64k418Y4pGZZ3FsXnyykfPf5Q7sgQ",
  "key27": "3yc4e4cLzpXDqan3bxAv64F2DvKxV9Q74GNB7AcDZN6hXPkseWUTqaBEH9DH6XJqu46EYZFuRsTju4jkJnq5s3qX",
  "key28": "24vdcaapK3XHVaidL8zTWUxmMT4ms9ggSeymtNjsm6ZAXvSonppirYLCag6n6oyjJkWx72L78uYszq1Y9LHu11ed",
  "key29": "57h8GdUUf8zR6c2N42kLo3HQu4N3wnJNLtxQCgnnTKH5ojGcc5PUqcup9LE8ZAM7GK4LePo3fSbobHadtKsuAXKq",
  "key30": "3T9Hfa6rDN6QwhFr9zNyaNJeoMB1hUWWYtuLAhjx5kbxQQAJY75dDuDULU71XwZsp6XKqYHW23NVqQjvDRADVPm2",
  "key31": "mZHiNjAUqaFCdCPiLCPjHAydkrrSQMwSWWEtb7jZ8kVB4qLvY7vyGZpDDJCnMyHvSFAH3kwM1bi1zBvuWWDvEcp",
  "key32": "4KWQG594qrBWXBfyp6M5p2xqiDbLFnoWdpapMsocAdmmL6tpdiWKbh9tCyrQjVqSxzvBWjErFrJu4X8mjWucAEAf",
  "key33": "4PJ7LwBumreTPcPS8ReSXJDkUJLzeUudQwywqNZoqB9Xfanj5cDKmT2Vy2yaXapeY25oDZxMjNTvg7DPBPMa3ypE",
  "key34": "5pVxzVpnmWDw6P9KjmQcnnCAXty4Dhv5zMHzXvUWFLLwaPGhvLgJ7p3UicxZpymWHeRekJEgVfc2vn145AEZFDcD",
  "key35": "4swrnqHpxfgvVWGFh1YcaFrPNceD8tnNio6CxioQ6ZNBHenGL8WS6sxBCcwyECpqcfKg1Ku4xGsPaeSfBNNs7XdH",
  "key36": "4fRuKeXkMf6bJARZmVrd8es4DW4VqzzmpzYALPTSjpMtN9mdFb4RxdeFn1CLZNcfvpdN5GGjQJoNP5pS6yxQT1kv",
  "key37": "5fAeMvZbd7qm6eYpN7gCZ85nigX5rnoh79ydLrDyeg2rSAzw5astd8v7CjY2ZZ9PRRPLLs659KiXZa6xDEJgpp4W",
  "key38": "VHfwmEHefNchFayKNdS6ojk3xn67Mb57VES7X8uCwwPwZF41PUbePax6HpzwbYbKNzKAUaYprkaXgTn5mxG9tBy",
  "key39": "2q9mdvvrCd524J2mWWEch41ziBQ8UWMKYMB6R1TsTYnJtfujuZgYoRSaEgMchmBLzKwsAkEUHQhVFGCoiCKz5xd7",
  "key40": "2L9o1C9i2RarXjBuuVuxHS8ujWg8nd5PgLb4KS7oDQcxEYmXxvwYwdnRtCfegiEX3Bm9FviGKJNAZdwyLpuvmW7L",
  "key41": "3ET7xor92miFzqwQEsqdw8MY2f9uUvvkU3c9SAfSeViEAH6673tsbwNyXinnykpPK222L3eepjZTzKCvSovxLakE",
  "key42": "4ytickCUx5rs2iPWP6EuWcjuosQp7o5qcjjhJEBdnvJwsM7q7ALzF53WtpPPvQNEicXKNJQMPpEHbRDALRNVcmwT",
  "key43": "mSjNfdf8PFshukLLoJhr3igiXo5dg3jzdBKpPXLyNPYQkxKmDxiJfNu4MDvVN2T9RaovEfQqtzoVG6VwjLzRRGP"
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
