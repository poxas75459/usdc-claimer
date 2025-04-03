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
    "3w6otWNjssryzwci6sLCvRpe35SPjn9PEWnhPCdygqBr6xnCVucfB3UT4HqaDQ8WHHhZzfL8fUD71NxWRLyGREc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTvuEuzb7mYWoMoYoX6HwYx8WKVsFg1dwsU7gX3tAwNJUgfZoZSoVCk2GrU7jiitq5wuCRMaM8sLM1WNqJXRWEt",
  "key1": "4F6xsAfcsYENUpG5vMfPgnEKhEhtR4ahLzPBTJgQHXVupnhVWYeEBb7fNFXn4VrVpVpsqzY8wFKY3cBEmLRkp4YL",
  "key2": "2bs1EaAasbXrjvu1ASTYVaCokj4YgwyduGLLX468PHM8QZXRJowrqgofysvPK5LAfkmcy8ZdXxpmMdRx9SwyWeMm",
  "key3": "3GrjP4j47LWukUkE9SEHFipoCr1d88m5szscfsFRf9MMxJC2HcUhLe9HqWJCmW6ancFD4h53xFh4ysBPNmVzQGVj",
  "key4": "qzoypR9Cg1qsZXzS3AaFvWfoGuZYbDmoXBgp1vboN49vUg4XWRpUPRUqzJU7L2sHxidqDXeCVqePDhEsswEtvBe",
  "key5": "2PnVEP4Joisa5GHYkd82E31AAKWLeTgJS1VzD17NbrG6Q9bt1hJPDSW2As2ir8DLE17Job7dpa3zTT4BzPAFqvZs",
  "key6": "36KBLyhsprDdfGptEMcRy5S6QLg2jTVWQTyw3eWwzyYfnvPgM99ipQ1iFr3csovd9QCDSo4EfDZiZwd6AfuFV1wN",
  "key7": "3sdKnzVvt2MEp5BanFVRzXbgYie2nbp3XPbkhN9oXiSHT7EhjjiUwoTcHuuzYSBjSsjboxi9B7kMiXiFnxoTBkep",
  "key8": "2MS8K1QRCjzdKi4jRcyjqjWsogqdeuac4Wa3UquzBDesQUqzqRSSgmvEJeaeGdbVkMt8DLtJ5koPiwfhtS4qFEAg",
  "key9": "3YaqiLwCgptvjXJn6sZsccyZ8ZQ1e6n17aZUUocVEuEp4rCrLmB1ugQFT9TtcHcQfoduMPep24U1gumakwzB57Vu",
  "key10": "JCPCULZe91cb6DzMazNa6Ej83UrnG9ysZT9msWHTPAMNnE7sWHoFwxwUQ6PvEdKRQse1fDZ1aTEc75G5hhKMm8C",
  "key11": "ekSYjAGfbz1yYjQ17Rm1eSN8ZpdSnSGVWvx3nKFAncqX926pYudGp8DEFuSzv8kp9QYu3px1pKvYrnZy8HgDifW",
  "key12": "4CdyUcNjs91kNLPPAmUnQb6yogHfa9q84xv333w15D6MyWFNr3CyQBfHRRRnbEZu11gzY3tLsHAX388fQtzircc7",
  "key13": "5EHHY38jDF483WbjDnewFU6w4Ly4DREV8Moe3wL74WQWeiDPARyi6VrjhGBpPcyMUxK9hYSFWyaXqo9xiG5w4LKc",
  "key14": "2YiX37rykAH8rqBmz9jSKvQFwz8BpubngAYhFhMuatDEG6xtdzjLaJRDgNihY661JtJddFt9LbyJS9RiFEKLq5yk",
  "key15": "24XV4NsW7PUECjZJui5ucz4bFEorCe4PZ4S86yHhX8hC89C4Qztd7zHZLiwVJCg1Csw5gmfrMUWRVpsYPDxVebyM",
  "key16": "4sfaGcFzyUJAALzWwLPqX415eP7AMsqg7a6L7wq9abtK4vnnMoyeYD35fp5TuLxBfLuAimVMobS4vE6TBVXVcZa8",
  "key17": "7iJr5Qk6FUJ7fQYxeY6pxWYcP2fs4333X3dq3EGvEKbmcUukCWUVgDhLnWjPigSwdDwrxYVCB7wZtwffVcYfpkj",
  "key18": "5oKcv2839CnFQz13LKr7C22HzQbYzCo2XezjFx1wNPWKc86SJPK1oqNZJjbqRTCvfU8KZA72B8NwMd25y7ewEmLu",
  "key19": "4WvQLMbdiFYCkwwgetwjQtVQjc2MBRJKEwCdn9MnJuKMNNkmuPd6UMCXqcdKjWgBkXS9RBjGi732W22hediU1vgF",
  "key20": "5k1N9RVidAY4J1jq1K2r5UvGBHdNcnYzGHV8BPoDmR4KeDS2VdYN4QhMfVSaVwhxUMWduypE9oHmyUofPMD7RE5r",
  "key21": "63nCWTQoapdTaGUYvSRnNNLsBN9hAvgFz1WzEED1Sb8ro4xRHyp9drZaR3xVzQ8LhxtHGSwaoHBcLycPS1kgeWFm",
  "key22": "4St1QEDZbfZcawR7v3JdUyK6Q3wk5wiUnfkstmgjiCDdHPrxLbjhhtL12feRnUqHBLpvKiiwg9dTJdSS5wuZUR8m",
  "key23": "2KciH86d6ZEVfQrB3QsWHfzZCfkrHYxDg3AGWBAkv2dKg6N69BLLRd6gDkicH7XEDAFqxnahobMGZMpi5xFhaqGC",
  "key24": "4X1yMCuuutYohpxucB5ihZkiLJeHmDFMxKGnRN8aX3yh38VG9R4kpN6WBuAXtuhYFSbheSJa65tNJeFbRngrY7Bf",
  "key25": "2933Lg37xY1LX1LfpobgSNkCrSoCcsbsSzB6QRN7aPxhuysZgYyMXidXaBqE2St6kwqTr36zayYX8W7X8aRhRhur",
  "key26": "UaHNA6XJf193gKJfe6j4Tr5dHPaseJmACPsr53aaGb1ZwFraTDPW8SEHpDftmMrX5sivineyUjXSZnCiFEYJMv7",
  "key27": "2mHbUUJoP5Pd4RZxpNt5N5ZpaQY937zaUZNKaL71xXgnkD6xX6UNXiMoSpwAJpdq66ZTymnXUp1T2yPdYW31DGq8",
  "key28": "2CT8AGAiYYivqQW5FJQHRGQMSzo62GcfcM3WKLoqjTvoQxexXJVHZ8YX6WPSz6cHTdxjx23YCFmd27uVozv9ABmU",
  "key29": "5eW2UX1UhUudVJDVsMN12iWH59AiWmChijW4vgbpHhheeVWQKcAWn8EpEfF3ddcGU2bSyKtGmoqvVcvqHc6wsYkY"
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
