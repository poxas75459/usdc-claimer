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
    "5B5dxncdqbo1oGBH8a1v2fquKVfj1VxW2CSL64MMoa4rua3thfSx4aRZmsBLhNADtignrxikMvcXnpbmF1EqXpHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7LjtZ2hnJRnYU76jmtyLaYUjP37zwXxJFWdsJsypoWwn5NGoMqNj6zbmwZaKzvaeJGgdWppVP41GMU5oxFZWMW",
  "key1": "2ALM4bk6YMHTdJEjHkyLSFkf7oYHK1Pxjojv6avTpGMJSBu44dUyzPCxvjuSN8H2awjNbDXErnERvhg2yGk6Hkna",
  "key2": "2u9K8CkVMsVLjKxYtUjhPWtuAJ8oiAZurMJoxpYAFmcUBKJZs2E5bMGGsVjo3KtuptkQrvUXZsAi5HqAGu4Fesab",
  "key3": "5S3KxbcfzSjSaAsMGJxeMiDdczzS2TmgMQmRVypGiV2ErZF4NG4axfzYp2Jp3RvjmrmqRk7xm2wYyPBKLBP3tUYG",
  "key4": "2fJAJDz7BfNs9GweRQXY11atnocH7wZ7M1ir9yWxrL2BK2RFFsmVXVxvJ7GqohqQaQkUmtjpdCrFV6Jp5M5c4BQd",
  "key5": "2bFh6JMX8HLta2C7YhAQULgr5Sh7oddMfoWhLBZUgAY6wgcCK4J4pnhXBYcvUdzYxSs99P7F6LC2PpHqsceng5Hn",
  "key6": "46VS3okxWuNMyDjeBpRfAVmVKbsyEGTm98mqapcjbjg7v58vsu3hVvZ2UnaUDQvAUEiJVjtytkqLnmeu69Fr8LRH",
  "key7": "3x1MBqpKXFYM3TN46qKAG9bH2PMyzKJddcsQrHuvko4gwtn7e2GRY5NDfofNToc6XkwjAPcM5hyeW9QofFDSoQ1T",
  "key8": "4sEcDHBBmsCmqmJWQkVAh2qbMRwJKy2fNjmVXTAvza5hb9go2hrK5ZbametcBMyF6kPpbuq76pQvZY1uoEJakvwb",
  "key9": "37vR8oTcxnkcXGLJyqTXJ9RAcf6kiba4QPyUCR59vxKNvt2nJFrstSwnYX9r4nkC7CLjEWQWrksLthgQCL24ASBq",
  "key10": "4uWwUCt1W7psErMGmEatQ4nLTrG1SdfEvWpDNpf7uNTuFigMst1FDmnhaefGgBshSJoVetDzeyCeYcMBBuzKggnG",
  "key11": "3KxXCxZ7ZBrcwDsBM86eZcjjrbNjTx2rnZGEVno8jZ7FuMz63Q6nT2RYz1eRtToyVJ31WfoHhHVefexxRdGe4eT5",
  "key12": "5L6cPD73VPi5PSHnhcioiCTB5jEp71m1aSievHwAQeXH9rFfbimkTYhLXDbvsNemRwtWfVtYChLqgbGAT1huTa4s",
  "key13": "2sowxtepr3qET9prWVty8Uxzou9kp2j99y1vCjdemwLL8tpzAQQpUQ33LRHFm3rbL7s3PzbxCgcxpH7zChshkEFZ",
  "key14": "5sizvkmHUKq8G5h56TBmRsnRtN3t7Dg8TPWtPQY8KPwH9z7WQeHyFLRw67Cd3HGCL58GN8VvgNiKGRy4Mq5Vskzf",
  "key15": "Q5Z48beuWbnjKPu6AUnhEjd4xBrqUSBfhziqeN8hhHcQmq6B21QufAixirNfyPDL7TMRDywWyJkg2Z8ErkA1MLs",
  "key16": "2QFz9HbRySGitUgvYWPcmUuFz1mARk6FFBJfkmKXKFVhVAeWJH9Ht8WHHVmC5kQbZoQYYS1xkTmE248V1DSrynCA",
  "key17": "wPyCZMntEMPzsDq2NBdM5W3CrEemrS5GKPqGxKtnxR2HY7FdLr6qCzK3sHr6xyYHWRxJPai7W7J1oMv7EGrUr7U",
  "key18": "brjHJuCST5vG4zpZZJBwbNqRESqueKw84Zd9TeB4AvTZ6ztrFVd1P2ZQ8CmhmNnYkZ9fPrTfP8VPM1DWYEUyWUS",
  "key19": "4q9DCP2ovUvgmm93ef45XBqWFBdM9AfdPhNnnzgizp8tnVFWA41omcqwtCK3Ug7osrYF3CF6gDxt4garxjJXCmPy",
  "key20": "3mHDq95K47C2Mf9tconf3LEAQWvNNUgCfq9B4mC2fxSkWjrj41tUYKg2xSYXjvpULQD8UXz1citduf4mQCR7xUwb",
  "key21": "2DgoQUr2rSnEiKZDwPVSxbL5q82Cj8jeBC4MQPSAWkD4ruqgJDrDswh7EkDHyecY7Td58UFpoiYbCf74h4ujCi1e",
  "key22": "4DL387iCf8n4KnLFKPNYbqD1ckrfjcfNRwWD7EHHXQ7ktUKpq2Gn8ycYq5LRwX9J84E5GMXRprkZLzzyMSANyCg1",
  "key23": "27skEDmjDggCvvp3a1dqxAmoNVRzgovYvtWQwDtCJewYAepLJhKEv8FxgvqYpbhUEy7vRHUbdfh5wDEs1nUUS4JY",
  "key24": "5vJn1eQdGd8uo6H2L54hUAWHjwVGPpEtuDtTRTbQFZS2DGyMehtsSLM1Etv4hSFhHzDWyhSoxCivhQRRerqWa2sQ",
  "key25": "2qCsbseyuzEjiPKfazg3D5SnQToJeW3nyy2iub9Qx4XYCnpFhnspMLcxQDksf6tjZDm8QsZQLwdjTUprhZLesj5h",
  "key26": "3MRKHrUnCtj2Jrpvm3649Db9tdyjsup8YFY1PgS6mkfVG6baKkSAYFegKFdnHWuSEVUbe7yCtUUmVBeqSf6u57Gs"
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
