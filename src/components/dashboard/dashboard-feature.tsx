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
    "3aQ2BueiPjXnX8VkXAAm6U3EPh3uRZuPy4EQvTQxB5uoixXRNxmMqLyAJMkD79ZgZydS1j32UX2ibZwJBHAqamM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKF9upZpXVxtRCKboHkB2iTchm3fkCqG9mB77x2dzEF3Qf7kyrTT1jjqpxMbXTMt5ZqK3EBvEn4mBnFDGyjwpx8",
  "key1": "3SExWuhk5sEwFwkKp1CTwvdu3si9pAtcuxy93Kw6SuwUvUEv2HZCsELZvBizzeJcJ7p2oUnbA5i3o2nvU7kzU3GN",
  "key2": "3T4YUMqp5bTsA2yjcxGh38v8UgzLD29SnxKcBB71SxfFe5zmjwRuqCuWXymbcU98m9zp5s8WhLsNPtVqFBFW1tDu",
  "key3": "3ChxogAuW5ibVv7fEc15wqSxx7LDfQEVvWPv9nbKe3S36VTuAP7kKoGWoehdRgbaNp4Fvr9CmVXb5BvJcA9uaWBr",
  "key4": "4FdtKdcYoEaGnt8QXt9gTpkeBgmPmQ5cYo9MPA5Ys1Y9mm2p7co1quRaGewbUrmKn4yhnSbuiPDmaFhuhigoH2wi",
  "key5": "WashXPSvXdsRXQjv8WPh7vZqRj8hXxQ4pF5yRRjeUnqKCDsZC8jPjCaBKQ9twFWfyPGuSxrYQgbN8E1EbGTBkiM",
  "key6": "49ifiAUXFSo9117s6Sckx396Gs12BSnxC1xjUVXaqcnEoA3qNCkKen4LqSp98rNv7s8uJ4rsbA4RiTg8ZE1EpT6D",
  "key7": "3rXi6QVPw4ndgue2jdMA8dP2YEtuSYWiqnSggLTAKFXemhQe6ZwU8E9SsC8fvSyLri8FGswXLd5dGzrXEfLeoYUW",
  "key8": "5ZdLa3MdUukXEDz8DjrSHjuBz9cpyr3HojpxivkocM1YvnJqYfPbPhAKn3QZNt1bA2uApnLoNRP7ZiKADioPe1Yf",
  "key9": "3QTqrGE9i7D6crtb6BVuCqb5oST3ogQGjXxzCUHXxK2qvK28BLUVxSo4vm8cGEWvBhKBJ3kmGFo96VXBUUwME6GU",
  "key10": "5Xrh5Zbqi1vEZTiedL224TQspuUeWfXzgiY8KTtYZPSS3cL2r84Jfp8QGrwTHVvbJwFrM6BpaAopotPK5rcxARSS",
  "key11": "3Uyt4DztWm7uhDojMPZ7ZaFFJUvdw4nefvVgshJAArxZgk4XmFYWgbNeRLezNfh4n2YZQ4FQEsiYBQyYJsoA2pav",
  "key12": "2hXLke8kQfFKWtcS53gYB2w8yEYqEFDi8Am3sSoETrX4RnnuRuUi3f2StdTWQtEAqm8XQX6bkE1QU6ru7h3vUNfr",
  "key13": "5DMcmp5gsb4Wms3gZJsfKFpxG6KDtUsfNgijVff6dMXKNM5d9F3Y7GxLVpJKpHvhbDm1kjjP42mb1uPooh3paxM9",
  "key14": "4FM7SgL7oTx3SMhnZ4E84Y3zn68shtYf52TPq5VKk2Mo8hDRKCwee2om1bGCHyFQcBTV8dozF4mZAPjX77Ae4hU4",
  "key15": "59xSBvPQP1chR9rsjrsxRgS3ikukFryrXeb9LioUTwirM4TxmpmBMyRRQf5HSuu3LFSfLsvhZEzhwYSKD8ukfYrX",
  "key16": "3Z762pQzCZb16TCQWWivxZoLxe7FjWvv2pYXotPbcYqQRSZRxxdWhDitfA7wgpTxs7koNFYpjh7XhtCdDsJMPApw",
  "key17": "2TTXMAS2ybp5zXwSbHiGfK5kjB9NEwxbcnjXeAxxXHpuaTxuFrCYoDaDG7QuSz1YcgtDmRmSShG3fhWR687SjbPj",
  "key18": "3erjXDbXMrP58kK3h25dRxWBqmSTx2RpBftSay2SXdrGbJvSWyjoub2QEhuLcqhQz4L3wjZwNvFLRDG12q2mYEaW",
  "key19": "62aqfVE4Z6rwSxqBdYqqeCauyW63K6RUSLaWCGHx23W2oRSwZo2gKkdVz8GuT5iZuVaTMHCVBSurjRwYetC4eorU",
  "key20": "57ti2R1gnVBdynA6oZF9ngUEeaUjXPGNGYV61d8izhz7Q6B1mq43uEWqX389ZfBy1CkCNgn4pMaqLkm8N4tLeqgM",
  "key21": "48sHz5TrTKHobckw6MoUZfC5ZsGvWVkLdLLntmLj1KV2yVhWy9VmmNS6HnkCupqyn7sRjPWnuwdSHNQEsFmFY51x",
  "key22": "3c1GusjYtqiG3JCtiySWX6D43J4q6u3efst4tUFbcugLWeHkasFgHx6RX5N1pWQZGt2GPDhRYbKoRbw2GUSVT92J",
  "key23": "5tVJMNrGhd6uHwZqFuVrzmwChHuFvVDnJD9uwGsYGfVwzeVJnvvfKtBknbbCQybD81PKBoqc4PjmS4BivV8XPrSw",
  "key24": "5y2qm8ky3y5TqQNuXMkSta41VUhuSkmrDaqw82jgNs3NvJpN7BLakUJwvS8yJR1TEumNVjBSrBrRL3ct9d2wPR6Y",
  "key25": "QJnvtBNn3jwV2iSiYg3fp8YFjGbURoiAU189DJ4UajEJssHaSM5viTdnGDjSeWsK5U4EfBNR9c4s2jWXoVCoWUZ",
  "key26": "2HRrHsQTAALpjtAb5kisP1178dYcZ57fDx8pzR9oqJcLahfLonsuZkCJVPYV7LL7zTq4xZw3ydMyhfaxG9qMxSzf",
  "key27": "4U3kVAN9R1EEVM2AuxzEfTmoAzFztYDzDTX6ZdhsWzGPVcMi7cqvL4xsk9TqrnEQsU3wjuRDFwjx9VaVbBD3MvJp",
  "key28": "2qCMjLaB5MWY8aDqMjChk8TWqPQnrkgnRKABinUCT7Rt5fqDTFULLYv821Wv1kaEHTzhah14ULBDvgyeuX6AJ51k",
  "key29": "4rRAz1TzFku4PrvxqU4wA1jvuds8QoDyhPXxWqYkN38fjcfc1sSgREmBjUJ3SP54iwPtwrjGFiLv7izpL1U35oJi",
  "key30": "5687V49YF4fjmSBNzCdPz8Tz43MvqyYSGxqYuniMjbgcsdHz2iej7s8c78zLYQas2QyJdjEhnKDMvmnybNAks6NU",
  "key31": "5P5ZUdMbhXpBwytU3FgXR6KkBCRopzMW76PRzqZ1dNJcC9n8hSn9tN2N5rL9RzfADB2zFMFWsmZEzQ3HdB3V7Tym",
  "key32": "2NQf8hPwBeDeN7HdaQZpktJRaAQTcbihCe9Jh9h2VEgPQ5C8ZmuZCYdURcfhfo4Qr1ui8fJCy91nK4zJwhXA2vVX",
  "key33": "5MRFXGUcUKpXp785TM6QPjUrEarZGNdD3R716zgAEg42KFwDfUE7GGMZ8r8yB5H5W2BuTGeL2Nbh4uKmp8TmCg9G",
  "key34": "312r2cjA9w36UbjDqPRGjd9mtndaEHNmpAYyjZt4ST9VC9MjD1rE5jHnzxbvHChuyqzCNPk855ditTEsK96RerRq",
  "key35": "5ZdCLppEnb4AM4i411vwBabrpa16oAhC7jLWu89fiaoo7wNeGenxNYYxmApazGT2qASNGQ1EToLhwRvK7mHQ8sYg"
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
