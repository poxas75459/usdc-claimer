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
    "2AX1bE5xEZ65NvgEfCPpd2UmBNQN5yTNhHgp1jCerKNLLQ7MdkasaV1ALJNNFb5HL8o884axrPj1etTnoyJH4AGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kST3Q6EccuHRvuRLhae9NXoeC5StCQ5DaR9cRCzKLHbieTohwiCyvrU2HGcvxWYeLvNsfQM2fubmp5udCLUQvz5",
  "key1": "2KRzuuKnbrGzeX4cGSycsgNLhytvgc4139xLFLfA7PayMWPJ7g5oFaZKXciebo4ko6zBng44wcjTziceRz8fGJGz",
  "key2": "t4rhZCpqEt1wYXyBoiR7pv16J2onGdDcKCeW8kSZ9A1sDJhFS6CRQxRxi5EbWwPST3PRxnM3V28E6KEJK74cwNi",
  "key3": "5LeQbKvbVqFR28xgUWfMUwJroaLm7Wb4dW1DS73DYGFzeY7exWnoTcazkQaTfzkSfG9PVcVrGyaiynEyzf7yZefJ",
  "key4": "43oZdhnVr592YC4GnGb7sCcY1Av9QisSWjT8km9SPZk5nqqzfQv1QZ3Kh14KHcK5iUfYt8mWQUvJMepjgjFHFUiT",
  "key5": "31ha41ZGVtWShdBexWCDTGwuYETH6KJenAKCFN3Gzo6Uy2NuR1DyWxKQW6dH7Gaf2o59oDXsNapmgM2GsPoSwDRK",
  "key6": "5xigV4KAPH2EA7ZgS4JByhbQKc7jxdY4n8uWGDTCo5kZdmzNnwNYUWC2WxpSWZYSq1s8ePq7BneuriTcfiEXPqRB",
  "key7": "534z4vrF2Famnmzu1SAoH1SDN19PnsVRJb25yRmtvxKiZ7qDaLS38TvUd6u2nFUgk4Y3d29BovJn1TzNCdTyuvtW",
  "key8": "3Y5yBffHFxR4SheNbmJpCNtyAm7Pt6pCUX3PKFSpvXaK3hKGhcwtkY7Tnix8BFrnDvpABYLdPrKdueXrB4AN4XWG",
  "key9": "5oL16dsDfDm831knoN3JyFb2xKm6vfoGnh9tUV22k99fktFK5GRtVeT3e6M9noHQavnT3pAmPGJiSCiDz5nnUXBQ",
  "key10": "52BRvFXJSFcYdLBmcg3tryhDjT3t74Fr4iXn5aQrnCDftPrx1QMPyyUjC3PHL6y4usaPGaJXNcyp2v7qwAdMqa3p",
  "key11": "wHQ598hCo85HQq98UKMVsMZ156wsS5hA9tRrpEcyTXQxhzCycLZT2Gpn7MY79dgtNiCSDD5pVLRb1pTaneUJ2tz",
  "key12": "3oxjmfNjJGJsUeYi6MksdjbWRPaHh9yeoj3ewCBGLAMU7GnhCijFiE3DdRqA38D1xLZ3vGDVgTdmr1R8FhFM4mkJ",
  "key13": "565ACmaB6zuMUYPfdJKpDyNReAuJewiYn35NvBZuEuL95My2gJKYthCweh94rDcCSwtD12c2hDsLGKqLQCncmPon",
  "key14": "bXqt3UXDYZDc5XC9tVK4jrGnm5YLP9hL8Qmg6LmDj4J7pBoM23Py7CHNe4Y6U26sHe3uhkTkwvwbCXcbuoK1Rxr",
  "key15": "2sa69h1UWBhJTRRCCMXXj94dFLrat9VQntGr1GZsn4kKruFHGRQVgKvrjZdEgdUaReH5moDZ4eCtch64WH6BNp2c",
  "key16": "4xvnb2eKHpMtVcR1TLqBFo8FpwfiWXTQPN9XayFZRaVwK268yNTBpX1DMRYzGeCBy8U6wFWcr4tTDVznKx8FzNMT",
  "key17": "3Fy3tX6uBkKr2NZ1Mi6fkWnBXCkfT4h8WCLS3WgwwgyCW2Kpn8w4mTifcW32Ybwah58WPmiFEWGug1MTCjTwFXfP",
  "key18": "49jqwSYeYMc1MeBonnmPN3KxeHyTgtjtqfLwUDxctHg1B4aitRvPgRNUa79aed3jewULZ3wT1o3pKUEDgSnNVyGT",
  "key19": "2FGbt4gyGQ7QPWgxWeWcp3Dv8VSzmRo85T8H63DoR3ZXy1GzfUMWve4QJ6yHrL3CF4NAD5QrVZBoyJHnEUSbFi5W",
  "key20": "5K1FZfjGCpbYLbxWbye5jcubSYufwg3Qjewqn5PUSNDRPVrcw4vXgPB7nwBAptjjKXjecUHMLw2uzd62wZqj5tmH",
  "key21": "5gkdaD4Y2npaEdF1n4MhK9PtMb4QAE8EjjPatdGBGfpjidABVKcucAtUMSZvaio4a3a89eCArxFGK8HyrGaXdM2N",
  "key22": "3pwKozJVpwSccSXstx2wCfVJXyU2JHmhpNkcbH1qLxgs19RqXKxh1t2kjkjTtMMho3ytFwbzxmv8MdeRbufpSs3L",
  "key23": "2sZ2kbDitU8V4fGi2XE54WCypoBYG7HN1mPtFbPC28bBhGpyQY72A6waaVBiRMBFZmk3wK1mEeeSLjX9NC4BdKMx",
  "key24": "umh7ksqBEXtMqrY5LRMyfD3krHYYDrUpuMijrb1dudti2QK2AFHvTfr3oPNBdWNHfNAYujjAdfNC9fBn5e9ctxj"
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
