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
    "5r6AsmeWD4jxGiVQf9enoxVTAZNs3Bk1BQzN9qFuQAePcMPuemhLPERnYKXD674ogbaRudr8QukXE4R9yzJU2MLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nzrxB9vVKV5dLeNae3aDHVzd51XenJboVswjr6PjmB8MJbd4AkuKL3Uod1JU6fCsX8YUvKo7pfWCzukTFHqUr3",
  "key1": "3FDgay2JkXZsuc4FmusnNevSf5sQYhtneZhWsx1JjCbh7gXzko72CYdjgYaW7BycemqDdswWsZZZC6M1wGFHhbbb",
  "key2": "2mejxck4SbCXEg7k4gatCNwncQgYZekNepgpiD86CgJnpvFsqPtSHr4jfzBsuH62RLTBRwGZr874GMrUbTm2sM6X",
  "key3": "5cN5fxXEN24wzKibH2QZxxBwYisH1o7vtGdTGCjFdiqBBLwo6RQaKtczQKeSKF9J2uDeNmZvGBfXK8jtwwHwN1td",
  "key4": "5mfRdtJThSXVdrVc7q7buMHgQVsLDApGWFeY7wQmDvWy34CjyeAdaBZ8rJZMpRneJRxxEJHDmc1LAhrLrmXND2UL",
  "key5": "259eJ1sJM3GYiz6emAfriWJ1rConMpjY2g7t9N7xeez7cACTuCRA899FGbCg3rA6JaTHPLspCFpKCMRgNnydBdCg",
  "key6": "4uakk1sBpxLwCJ3WjxTDaBYeChVQrZk5B7HeWgeAgpwFxevLNzYwpSxkGBPxZHQbKXHCSEMB71HyBDAZNsNgGAeC",
  "key7": "4ZPnGt4bRXEjaLimzrPRyvCcr1ZYwMx7jzB3TQxkzj3Lex1QKd65TMf71gzbohFG5DifzSUhYx1Lxc4xqW5ceRSr",
  "key8": "5RevCtcrdxDURGY9hyhD68dhMKrycPxa4o89Yo3QGW6vG1NKbYT8PyGtxc6potrAqSh9sfxwvmH5SE8ochkHiwqY",
  "key9": "3ETtafPnqjpTX3Zs3nEx3AsWJNY6mUJeuN7w75kvUhALf2NHWwCn67jSnLqYzKJvzJHJPqK1A2LnyRy7gZrVUMrD",
  "key10": "jiv8uWmDLbByQHBjeQAHSY7L2SM6o3WHTndXvpmKNzQZjnJZg5wP64nxuFdm2TuAL3imuV6dHGNopN1wuEdEq1n",
  "key11": "3H1SYX7oMkLCa3PB32S92Nx4kABZNUHPZHgnqqrW3owCmZY2qnzid3dWepZTp6UeuCcM5GLqsb7QNh3x7PSbzdua",
  "key12": "oBS4NLDg3LU5CeYfTMxMmoo6HN6aGFFgf1P2Rq8ncNGqsKvuQB3Q7gfZu43TJi8vkVHEsrcxJKh8XJyjQBovYcv",
  "key13": "24YnEcKCJXRJbuzNeYaCTTrZGK3mi6z3dw43xzLmzdfPk3ij4s5GT69QvsaGd2RfszSpHLmr6zjNeANq8xze4VW7",
  "key14": "2MCwUn8EtV1TDSSfWgi3FHpiT19HTSgQkJNFHB9fCqycxctjHmQqvMPqsK4ftuymsGBAPx1wGeHau2noz57xV9di",
  "key15": "45HBjSpUHWVxqugKPAHz4s57gLZDmxhgpW8xGrUmWLqhUUg4bEK2PHE6bo5uiSKT8e6cXThEpQRzxi2FmHGa3KWS",
  "key16": "3swPusqz2k3b5nvFYRRT6EydFksph1XVo5PRdM2fhBF7WUAmfFj3HpzrGU6wRnvNHTYaqZuztWwLgLyWM6CXvXxN",
  "key17": "5jFspKUGmZY4DYFKiF8nMGJp67gpVmYgM5LapEi6wjmbRZSHvc3UHjErymFjzMANuHWEwhgSmne5R4bHy9iCPpmr",
  "key18": "5P8ETeXzDeuR61z4aRi7VzGwWb8oDjMGyTNDqyYnaP5KpXXKt5TPyqGLzA1CpMB4Kdq6Dyi9Nm6MUwz2VBxkUdF1",
  "key19": "39ESoLAy38TW9bmY2CtveEEHikiaUhfDjzYAUtmN2R99UecmX9FDeDbFVyzT6yJLYFieJU49cUzDjP2o4QqzGBc1",
  "key20": "HJh4XaiNJY8fJcHG7NKiwc9TW8UUtjXnVjhPovnaBeft8s1X8bKhpHSjHPu2Fr3Q1wKUNLgB1y9N8SjGPUbBhJx",
  "key21": "3p16Uki1GNWW7ibcmbTFQHFGnK3png7ukQ8VLh6cvnyk8RfF3gWS3dcwGo1xFkXzjgciGhGTzB1y3SAqHu2FSfbu",
  "key22": "4FaRm1sxr9CwptPtvVKnH75gTGBZLcfmL8HVd8rhc7uKM7mvEmbUaRQM1a6pkKVzoZ58jESd6ghRnMdAg6NiQcCb",
  "key23": "HXQMf8q7bUNP7VuC9k9foUHiEf7UQGghQTDtn2JQzbXy3qBFyY6pCxfV1EhVDyNNN7y1dnEEivM1BPupFMEuTTX",
  "key24": "5GpnFWAWqzQUsb84o1p1xeMrC7SaDJ6boEyYqaQUZAvH3QN7ikogg89om1zqvS2yYobCQcVSRoKxrnX9jhpyuMj6",
  "key25": "4NnSJN93kZC62wcoWsRQryMvwUk9wy9CQ4KNqe9bAM4M3kvRZgtpvDFXbtj3G5FxQUWFiuUJ68xAkEPdK84EB2nz",
  "key26": "2X1fapWv1YFaw7Fs3h5dFbL4A9NuAgF6u9m6ZT1uNXmTfr7xH7zjpNV7EgRFFGgs6HzTSFZLxMURXsAebrvhSmJ9",
  "key27": "4NwBsKqSTYwA5bdTs12wc63zwwiFDfMu3ZhcdFWiAih9TEX58DJ4Sa8MQ2n9ERFam9vyDiSss8424RAP3msuNr13",
  "key28": "26QRq97f6KUh2yX89t8UShMpLZ6LHfaxigzPEVQUL7sYWSdd7wSuVZb48Ug1YnpxRSSuKUF7cppQhaV4JmXCfQiH",
  "key29": "2gcLxFvvU1aVfpxmBJbWFMVdwU5TAp6jwQC7TAbWjeJPX5hjnVaL78LeTbHXQy5A7vuna8EdBib1ofzTNmaJTyYP",
  "key30": "kPq2UPR6fwC6jEW4otrVNK8SM6TLLco9r8hZJ61wK9JCjpVc6UBXbtzM6gaGtWkzDkpYV7KPizWN6o9yQvu4R2Q",
  "key31": "4cHxi391GWTP3RGMhL5uGAF71no6fZBGzvw2TozNNjDgDYVycvv3GUMvvPLWBhssyvmQu3CfGDH3kbc32UAsmC4w",
  "key32": "5CztrqqkihDr1aKmCSREAZAvqURo6Da1LBgft6dt6UDsz7FKcBpzwf3gYga12FETp5NwyDhDXiKAYSeFdpsEvSnn",
  "key33": "5JoxfHkekuvJUnTiuH4ztorG1hAoCp3evpcin3ZE83tuH97NCTsrb7ATpFypxKxTwdjLFyNpZTDLtzk2yV5DZuXV"
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
