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
    "24w3z6tusgcsBfwNfmgDPYT5j9GvkyD2WTjowU8DEtBfe1bqadirumKFVSZLGDnV9mhdVjLnP3FssXqTKh9KVRH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cud9A24s7KCSoJeSYd8FRoyHmQWbPgbNdrNMEgB4BRg7AZfipHZnGvQy4MVa6JggRc6sMwm8tSVpAaiA7tCeEdG",
  "key1": "3DMasuEojivQuV2YEdZTDZeXdUmYjT2x3YXVDD9UrtXqwd2huwgKdHwHcRVJjjR1qFw7siJk1JzGzWpPcL13CgDM",
  "key2": "5rRKU2bz8k6Wm2a7xqnTWJTRbitixMcSyJXBGBZjnovNSwxKd45RyQXRE55JiYYZwwPkjTeZjifuCWrHvXoFqPeN",
  "key3": "TQccjMkYUr66H2emgGXzktYosL39amZw2keMWg6KUn2i23ucugmxEmEfBKwPv1nrNSozcpLiCvBzzGVwqeKd1An",
  "key4": "hW8oHn6BgTvY8KGHEeZz3pu5gLzbhcbEbDBdiUeGV5rkxLZv28UYgK4zgK8NC1if7oidUm73to525Tjc8FgrRjv",
  "key5": "5nZzEKdUnBPebByrtaoxBPyLhmELTP6Ee9CucBcqnsMUjN79TnFc4fS2AHmXwRUSxgjfcF1pRYDpktH4EBnEi69j",
  "key6": "2wusfL2SHSaQSPHuLN1pqAbhJacKkMvnV5V567kg158bwPSfVnWcNkWKAzUsue1NnGeRtLCfEgXGkJtNPF6n1tx9",
  "key7": "59XrVmUAPZouKHCP2kGhsQwmrLpuronf1tpLQDacZBBP58xiaB3cv4rX6PiNKFQFi2TV45R1nvUfzGcn6gGiZehS",
  "key8": "X98pB1xVseh7JTmNsas7QAM4mnHXnU8eJcRSPsJG7qCEWjbwGYMFy67cUZ3keqazwQzJgzHNqE5NKP6CtYRuJxa",
  "key9": "4yYiRkdWWWrdyHdQbgF7Q6DAGNY1wjTDYoiWb6k4gVPJc6mbtxS6NURLJQKfVkujKj5kBVG3csocHtW7s8gwypcE",
  "key10": "5saRKBpJiKmqbALStbo41u2Xg4nDYgonyjwmyd3QAFrRPfJS6aZQFsVdUwYwfBx58HRBf9iV2om7k9KVw3vRNicF",
  "key11": "4GVyo8qbZsLew6EVa5fVtJFdNwdaDawYDyzqrvA3D6GB6waCq47j7Uah32hK7yhDTLKLRjGu8WPToMBxUbuvzQ7W",
  "key12": "5bNRuHNRYvoXJo8oYkVQ7tfsDDbf8BKSNn1BZC6Etqu7vED2bxeEyY8TDENKz7XqqX6miu8KT8iBbt2rgNCxysL5",
  "key13": "2DtHekWfQtNdQ4hgwY1pqhxDG2W2r96yymfuQCqpCehdXBTxhnupgmjoiePj9gA8tKHrFYMuPTrqSf78S1ftCMoo",
  "key14": "5FYQipUBjQEjK3r37yRfzPt6fR4HgGVitbZecRWKEqsHnAfFmsJhJTEYddij4gaAeg8MWhYiXb5RQxjcjnCnZLAy",
  "key15": "2BEtuBR7GP7s3nimwNeu4aCywwA4fpEsAEKzMBYu9UKfoFvXE9NZwryEk4YsesuWp4zMEjUsouk1CU6BpRkz7SQR",
  "key16": "67SVVA9o2DP6WbDotuww96aLBCf8WTGiSUBhn6pgb9cZrrgHoCSAvsNGHrnBzTYjnha3hmoHQ65uqiDXZ3qaL7Rc",
  "key17": "5gcNUJ11BQ1wKPiaR65YLxbn6BQmHfvzzWa1AtRfdDLJejvnjdJ7KPFXx2cjaFFne4jCNtMkjUqgL7ZWkzsfTwVN",
  "key18": "qUW2RutVER7ujDFnn9PWappPQ1UAanDKRfkP14F8EoHYszzfkHRsedf3Kdna1bWBYxTpdmm6eWBExy5G3uTVZL8",
  "key19": "5LTeWGazVRMPqNaJTDq3tqqxEwuChY88YTv8gHS5fWuGZVzfzzEjpr4vH7XYFr4FJowCzyTT9EbmDsvxWdyAfFq2",
  "key20": "56oGM8KxCZsS58QbNpJLxbHGghLjHqft6fFR9KVi9Po35WzAjpuUpAHXZ59xLhQ5VqFSqwxgQ5efHs5shzifcCUn",
  "key21": "56bhSa2qYZLwDUu4YCMSKuja7xhvFAXE9UyPkugw2EhY86kJ6Lxnaha7UqekThj7enf1rvrnBVinoCKLTpA3juAZ",
  "key22": "5ZvkPyuwTNDGxRMRDFrzBPvVrfbnM4SEvU2d6FoZWkiFXiBUEucvHUPSUyY7U692Jov4HyW5nHD8evyYC8wqAhz3",
  "key23": "5Czt25bhX3pVRk6idFctR8Ctzxpp5YBA5c1SVDsXWV3YUwg4513BStcsoUUxXhYzicRECSp9znsoKssYrSLbbgzB",
  "key24": "5WKaYtzjPPBmHUjk21AhohDk9DmYyVbxDqcNTuFUp4B5kcaXfHBn4Vp345JT2XBMA8rETQ2StdSjhTFDvk735fzo",
  "key25": "3D2KiRx348REwHypkQ25wpK8aDMNgKfyTY3RcpitgTWxDDSG77x5Eon26t9M2xFQNwCcPEJ8oQ1JwTWEH4mFTPG2",
  "key26": "33RdZbnTRt3Sg1Yi1jQG8b7V1mRFJXfVUToGuRFqxWMjqoc9UuLDPi6WKUTgBnw4qdPqrzZX3kGHUNsXcuv4GW7q",
  "key27": "4LLP5e7UGGb6voHYViw9Kdp9YFFTkTDUoBJQdCwsgwCKF977FSPnmD6teFV5CWuF57h5bZcLnnkCSi1btiDKF7zN",
  "key28": "8po8tGYRLrPwcMPdYskLQSCppeFD9Ef4LKeGFn425Bia8wyqmQusQbbTk5mVw4sKYt21L8CZn1PYcDnvyvZvsgS",
  "key29": "5TygLkmB1bzKREgKJZcrnWb8xcp3SG9Ndrxc7vNdTNbcnSA5QsVPA3j5xt6aiNKHuM4SHcuQ2pUwaRe7q5WMcErR",
  "key30": "96w1aJyURDW37J3kggbWrUruFezXKuxrUhAM81DGZ1GCyHf1ojNm8vKSkK6eJnSRDMwicyvzGe1meN2gENcvDdJ",
  "key31": "23GdV7dKH9uZVjKerEh6GrMYtZwrYVzgf1u3UMyhvi1j1nFf2snW9rPw7iszDqqEbBLD6n42FRsJxWSacomNTdaf",
  "key32": "3TKa96DQvJFE9rwmxFpqcydmjyKqsuFJjUBHCue97nSrATjEXhYnJ2RfZ53E1EVqhXKxEjENj61w83vzjX4rJWfy",
  "key33": "5UeUTMwpd1V3pq9SWVefS8NmaKZj6GYdsLjdcEdgK4Emq2ygjirmJMeUpUG2Szo3R6NTKP8w1u6DeHv6n7d97vjv"
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
