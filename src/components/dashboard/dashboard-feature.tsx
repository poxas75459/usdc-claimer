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
    "3GTt3BTuubNNK3zGgH9wgVeaRCrrMgo7NQknKEu6k3WTW2yz98e547gZjAoxFffu3dqtpveNkaSp4GXY87kyXjWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLmdzKwvHRn7kgHsFadRNZSjAZ82LR3pVRjSYyCi7Hk6xdcZXFsSQBSpyEsvkJfpVEDLCEF6YeyPafLm8ztLn9F",
  "key1": "48DmJoCS2rw6FsfCPhsRxUYD1ZaeuHa3TXkPx1EiUDJKKyTrtDrPwpqyP6FeseWRE8jQcAwrLTuAj8p1kRJreh9",
  "key2": "3AsoRWtHo1kPxNgtWX2c41xvUYE529MPrHFtKxZn5hE3X7vop2K9AszQAFW71MUT2gYqxw8UgyKhqhQVuN3a6jMo",
  "key3": "3pdNAKsz5rfaGjgHq1YKpzSNWeMJ59uNk5pwaYDsC5yJdfjBswmb9ajMUxSkZo31taXU4Tqat6iPNW197CisGE7n",
  "key4": "3ReG6WMPMciDi4VbqMgqgtLRxy78fTKuWo6tcqzBB8KNXWcM8fN5fGpVsZvLnwso7D6uXw1wSXDB1wmR4kXNpkHS",
  "key5": "4QRqbgErrzEKcx2NLf6ZmM2V5hu9dhU8mj3PtYiQmxiqH5EZa9jiAKVrn18KLb2fpy4ervwzM7Fc8ucP8GQH7bc2",
  "key6": "45wmUyKhnwA55JNBzPrRaQzbphgrVtyDCvYYzpFGw53a2Ts9AJPhGGyu48TwBYREfBbgHnsazAZDmVJb3sjkE1mb",
  "key7": "2hp9nUAbXSw7kaZwF5fK92sLiWHdjrkzvhWgS9QMJimPXhgA3tdop4pVFeWmpWdQ5pFtPXHzsdhMZUNXxiHrxrot",
  "key8": "5urZRCbS7sPMSQucN1K3n96tewoGVHkEe9oMwpLYrn295tV91oDbqmVvAELL5T7mvzUTcHepaThR9QxMBr3FdwaF",
  "key9": "4ptseEftoaHbRQKCFZrwsd5RikSdrHL93rXEqDuKN8h3E48VJrCUGt1yb7zM52wrZLyfXCt5PqQ3eS2EgEUQVgVg",
  "key10": "3wZjVe55dyqfJEMcsHe79em2tTHAj6mnwLper51SF5LfHGAK3Jpj3cTqH33KDk5ZkZVfhLGN2WviUQZ69jeLwf3d",
  "key11": "of83jR5uC3C7r1rqpqpfzUYBtfmPK2Jr2MSUTA4Yu6N5tTZCWyn6q65JjdaHJUguTUAx9kT7nQVSA7Ew51UC1da",
  "key12": "5MPEVD9hzEu6VrzLZNa9JGFLC8WK9PYjFAsqXtpWEC9LywGwaC2mCCgGKqzL5adza2qfGKb9UuVWFtLrcrhw4oYD",
  "key13": "4qiBGZptsJKhuiQHsKQtAZefwvbLdRL8X9nmVdiKJrZX3yy7nasXXBhMUGZwBjzVBmdzH3bv4kdayozDa4ZoY4QE",
  "key14": "26wJzvWHDhwZ8BUzhnw4zgUfk8gRn3uVWfeZJDUwPGtpN3b28BGxDRfR2LX8xQB69pJqkDBqzroV3ffZLd3y9rca",
  "key15": "SpBw3pyMjwdayC47gexs9bEVgpGgkHaTepZPpGk2A2tFqrSfNRmWPNvVs1X2tS6CJ8GsnE9gXcij7J92uwJDteo",
  "key16": "6719aZDz7P9K5pbLMjXh3BgeRTKWkyEPoKKkMMKjEqSZesJ4ZPnkBaUtU9YFWkLzJxQdGw68sLBrTnVbDgewjeYf",
  "key17": "4dGWXJSoVmqdoYuaXBJxHB1tSAMhm2spJbdkkASsmHjo9tjMKJLCQbGKgBzQMo9224BZyQJNVviWaMJ6G2EW7tA4",
  "key18": "2XwfrC7TrLPUMv4V8Cz7GaPhs4tU5vsFdmCS36187pjr91eMGCyovgpxPDQVfuRju69BKLFeiYyeEpWVeyiUWzrd",
  "key19": "3U997Eu1KckuAnc5Kzb4iej2KMwH7LFKUGMEhfyC5ysAK8dAZTTfmfvdJ4xpoQ6Runpopt5kX8uFLwAfPLzVxQFr",
  "key20": "ZTuAYw2WRTPc2BiRMD6fzTxcSXEP8pf71Be9ERwsFVv2s2et34ey6WWPaWcFZeR1PmHGb6QNhCPLB9S5NNTrJCS",
  "key21": "4Qn8zZHUDJknA8kNd58P9dgvUMDtpk5KZmE6eVdvSTDtfTWSWGM4yqQXyk6i9GBBHbn3vx9mFoU9RpUFiaRaraNB",
  "key22": "2QbqVE8YjG99Na7th82yTKmCABQvZyHzpqMUqsZ7uVYmvo8g5Lem3nD183UugviB4dx8wTDdX19iCwFXGEHgZf53",
  "key23": "fpwoccFCpfFQG47ajbgJFzqFi1f79mkuvQKv54Na9WVU3c96RCoKfA1ex3F7E5ZbEe4V1PUgbXgVfU1DZTtaKrg",
  "key24": "2Wtaf9Mi5szmyGQ7NVF6JNKsFYitojFy2BEq9EfehqyYhatDrQF9Ut7LteX91Yw7hMhQjQ6crYx2R1jsRdEBnwsk",
  "key25": "23vMxVSS1KQHEGuNzmFAjkSgB7hUAH1uHSrixaXpiV9wcFszATYjoqCyBWcuD7Jh33VHzZkRer8aCD2isvWGigpo",
  "key26": "2y9uhXnPAQT5KfrthEBKTYWAdBZe4L9FUr7d7h2cHaSsTSg6wBzNZPsxQ3hWD3vxifSUvH2ycaTaRseEi9r6SbNL",
  "key27": "3LaNnAsJ86u2wD8BZfHmC9zk6CoSFN9jfiVftTuWyBhsXJj3vYpnxahSY27AN9eSrxYgXX7Spq8M9BUwmiwSRfFN",
  "key28": "5nUezEbf3Rt9b4JAbSZAFLYsR7ETt3P35dy2hE95XxnhUHwiNkLpzBVgEoaFPG9Aro8oHPW1j8e8cTMCiawUecrN",
  "key29": "66HWUsZ6E18RHWTK1WkzMbpDsp3DKEJ352Ry6aBUrSzwHzQZGrAWoctCYFHwe81rGeTqFyHq4QUS7me7HqSQSzKa",
  "key30": "5WR7PhBVM3o7fqCThimCW3UWCFrw8ZpaDd2qizeKUBsyuWwtT46imrnkg5du5HJhtvZb8CVAWSJKxCYX4ATP7sCo",
  "key31": "2JBsACjw4j1dNkLjZgkbiN7py8Xqev5xFNJfWV1dzVjNzkbEsuJs5setn33cNnVY11QEckxVjQvKyESLSk69eZEQ",
  "key32": "4CdyfZv4jSWDv3h538cPGMoA6KWGRdzEKjqjXWEAmTphFHpdU3JHB7sqbsrMEknCB4ptcJFuwK2MFQPZB9G6azcm",
  "key33": "W7fPYTZzxqM9Pq5urbtG8rrdA177N1mXeDBibP5P7VxTKtdWfKmkf5EJC2s81KudW6ydEhcjPcCg8j1CiTtARW6",
  "key34": "3c5TEM4FmqQftmHruwcHJK2NmAHBUMzFTtf7CHHebC4ZtiY8ueHN4v9Z18czmtaqbZTZ7XR9tbekFsoj4mZ4cqG2",
  "key35": "3trG4E3qTB7Z5CXVdDG3P1DQJHumX43Q2oFYVNAfYTN6iUYh32rh9Jp7VPQ35w9ZKpmGNhxmspMRjVNF5jkTw5vE",
  "key36": "3ka9vTxwma2YDxfwSBvGYwhcgGvLpUofbnWFcAno8PuDMMAsCMM9GbAYSFcdgAavtEn2cHsk9Wd7P6o7mSX34Ln4",
  "key37": "28aW1uCabeh2MpBGE11rPujGKYK2XSqJMLRBGp9e8W47NFsNd1mbVyVoh9LN5KMGLnqR5eiA9KRJoooRjdBgZCj3",
  "key38": "53amNEJatfea8NtMDiU5y3v89hBFPrsJP5gKB4y5HB7cbK3RrqtNmYMbDM2yLMhoYC8aca4dKLL3RhFLNzbjPLFV",
  "key39": "5kyRFGQP6e2aAJ3v8WcW1JFoZBhNJA4kaMkNy9ST9KiD1UUBeAzwF3f4fMB7r7hd9JUhsJfoqbJtaa3vXsPtZ9Gz",
  "key40": "ibZieWRxTvRquwQVcFa55Bifgnd9Q6mkZ63wSPNLANnzbfQW3EsMaFhkykNzy9oLPeSADW3j9rgCSbx1ssU6XCk",
  "key41": "26HmxcDNZoGGEajAxEkqKMGNTg93FNweCFvu4W6Ts1zkrYVaQHJc9UNvEHKsT9mRn3MfbjRsoa3BDovZ1u47itpE",
  "key42": "3ESqoEevEtN7eXdWsnKX2wYNaLJ6kPqXXQYPo62no9XuHPbKtnLUp83P9tV9jAWBMYsPSZMT2yrn8KuXzV3nq8YF",
  "key43": "32SxoGEPpM1usdeiperSBYuSbM8G5cNyWmyvvscZSDnm596oRJh81ckBYezrFh9eG5YJQYBWeHhNbqJzGxZce3S",
  "key44": "58eEaYuqzosd7gbEFqjV7T8L8muAjnnywADoxguVVXYDMYHn1YMFinU9SQcLHAQPLNzuVhTioKQPaaQXB8scPrJX",
  "key45": "3EAFUHbnthNuD2NpaFXt9iN5L7jRh8G1MP2eobGy14YJVawa5eD2gbKosjpcUGLe6sGJnrC5x8edVRLV9Mnvb1sn",
  "key46": "7tFVMwsGGxeB2dvr1cKYxLcBHZEEsm1N1qvovm8TLFo3uXFHQzfmpLaLkcVx3dia9qK5dL8MZv1YTcsPdefg1UY",
  "key47": "4Mh5J1TdFhqngW381uA7UYwwHkKegpk49TYCktZgUoWTRVeLn4YMD2NfFUsaxFPDsemMgmfgtXCfC9akq3nbJqZT"
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
