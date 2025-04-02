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
    "3fNamTrp6WGDE9FynKgnR9eG9BpZiUHUJf3bJXAqxjcHEPxiWwYJ3JiMpmfZWpFbEsA6Cb2Cz5ioQN2WZvHJTnf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfnDvcmwG5R5J8GCLUbUo5SJR6mB95frnLuqksT5mYkvmXSGN6rX6Bcz63ZHcFSGoCrnf1bp8G5mayuHv9u4Q7A",
  "key1": "5XWVERKoXRYLQTF967baFr2U2YjoA4ije5iK8RFSbD3hZ153iS2xJ6fKNWjrYny2vej9WoukMVFzSNvnA6bf3gPc",
  "key2": "2GNuw3Le4mJqfv74FUc3j2Vo6QmmWUN7FxRDG71AhTESz3pdT7sPLCCg6zT6LickGNNmv3M9WRsqKd3BJMFY6jTH",
  "key3": "iPNFpd5MKbgoPQZgEyH8bi1sfajB91az2Nacrob149bZhr99rVE4TALYrPKZLSjSd2Hp1JadpMYfPT88XfhrnKx",
  "key4": "NjD5EnqkRLuPbDPqAqQCKDrojeicm1Jk7G7ZvgF2rxur8ntUniDzwCrEhrEtVJVaNPyHkctSbfGwYf12gBSsXQa",
  "key5": "4487hwZJuA1uPQMhd2rfaNRs1XpENnrzGiH79ohTkmj9vdznf7aoibKYNHuEczmDuwRX5qb4VdVypy3MzGpMA6kQ",
  "key6": "27D9EBnATM6j6hM9PU3zoh71SRc34nyLBLnxKK56hjE3HTWWZWs4e6CXZv555MDQAMBFLbHsRVAPfFZWmvq1nFM7",
  "key7": "Bd1C1X9m8auZHkud75qQ9NmR66m3ooh57qB2eRVreDSk7iTmPQZKi51ccGbYpQEgv6aiGbBSk8rDysKxhqdMzDU",
  "key8": "2mXf57zgu3Nwff9zyX2mp628HDdy1QsRYraZhu8nM7t7PwPDKqJkPK5wQLVRNcWeGTt43t2YBuATWdNnH4vcdqVi",
  "key9": "2qimiKuNxfRVykWbRwgtvPm6krDRgfPBuUEovVRySGha5rgbHiQUpH2MQiR8ijzxASmLKu8DReYMuoTxiq2Fkojw",
  "key10": "yLBk1d5PZn5g3hCS5Dk2t3AWNLoHPQzPzCE1Sp78DEGYcBEHZsMuFUv7MGSTD8i2XQucTKPrsxjGveWs8gHs6Lo",
  "key11": "5qDf1r7Yd4me9kb8u6j7xhGGZrnHqhG3dQznEKwZVAXqXiYuYMyeZxqKuyRav4SF87uWEPXtG4iQEsWtPW5p5t9K",
  "key12": "wceC8TPQzKKs5vFh7CHW2rkqEbpXXSVzJG2NdyLZCqc2Uscha67k69NocLkinQ1TFY8TEe11saPHiLrb94x9voL",
  "key13": "54XPqsnAvEads2n9vi2R3zJGXKVzZQYDLXYVJDDaMvHRv9pywhTRdwy5MKreEdsRWFf9KiLNhn8kKVPUZCoTMF4Y",
  "key14": "2iR6ZVngSqq9iwHFoQvYKSuRGJgNpghMr6jS6sa2t2gNRzPHE6uSM3biVSzRm5Lgew2A835QPuKsKbVAztLAftPz",
  "key15": "3wo8Q1tD4VhJ8LGqTjkLC1aN2C8TtKLYFPuGdA4ip1vQ7hT6n6phhwYT4WdeYL81FWqDoNGmCsL3Q8NdFaEuLGeW",
  "key16": "3n6Uznvo96tYSNbVB2M5s4rWn1rvTzwwJYszdS8eUUZ5ky3jfNfC6u51kV2eKyENxrLRRgMJkj9osm7QusJ6ikmd",
  "key17": "644W5ddeLQn8SffMhv6RP25rvM3ATk9XEMWZTr5tDWU7pe1KbDqDgtdDgZe7kt2em4PNY2vPb2xT7QhNmjCPysEH",
  "key18": "3r3AzkLZthzZdMyWJbkyzD68SDLbGeXNvd3qdM562WCskCUPCEZ3x6uQ7gHfG5Gu3Mh9bUuGukPoVz5uw3xC41NR",
  "key19": "2wz1UuBjC5xRvatJPUCFg58Ei5P9o7yjB4EuWrDKRkj14ePi7r6jKTjZKc2GW8rF8c95TxQp71KAKQqqrRbsgULL",
  "key20": "5ZYa68MWrXhaLBBfzFkTDQsWEx1hUbvJxs528vYpVtRG2mqPD4vV2ebw3C3Mmnor5fkm818sStPWxwDYi58f369o",
  "key21": "5QWo3tikwG33BcPRrVhYgFxU3nhXFJuw1BQEmZ9uVeoqGybgUFiAcRqdWrFx1xF8SxjkVvbeFZtubxPUWjfXpcRe",
  "key22": "43D673k5haK7Si5UWUeEJKwt2EA9eo8TnLNooZd6CJm5pBnR2uaLW9DQM8Dp8VZZTnBmH6uqH7SeHXLWa8FYHXSi",
  "key23": "Bm4dsse3i5fQreteLUP5jmkYgHehYg3YdxoG2QydrnRWwUziKPS1VJbMBwVwcR7YC6hEtrxRf7vYkxAqSdTU51Z",
  "key24": "2iF8rEuAPbrVSykVbqtMh64tApYpen7y5VUZTtUZ9i82FrAtRNXQ6wQteqVCyav6jSbSCFgQuFBZTfecvL4AyTTA",
  "key25": "3pr8YhdDiStXSM6xRn7XUqzhGb4xrSazDeCj3Wn25q2SFxm2SAGmsTu9JYxhHLFYFcqUJhErxDt7q3feo12q7iDK",
  "key26": "2nVCvLwgky8jcCK4D9gWWdRzbq1ashEuoyMcShc4awin1aBFfoh2q8g7vmdShJ8FndkbmEW2uUmv2Avcipw6mzCc",
  "key27": "Ydk5A5rNMD9qkNAhpf8EmifMC2RvpworBgpr94xWT3G3pjzuSccbAXEWYfxrb2yKJQWjHTuUoKe2WmLrb4SqxSP",
  "key28": "2xRf4SkE4ov59ZtAd3SUtNLbh8P78tZ1VeCLFpdCWSLVi4s3SaMn9w4xZrbsEeAWy5Z9q1PRJ2AqqrYuse7LPiH9",
  "key29": "5vXzP5DT6pHBKZFNsX9VZ7Ay325Rp9SX1dJHrz1D9S9gTx87vgXWRq1dGyqpCVtWaDxFiUwjRimV5R7MQJmRd3qV",
  "key30": "2XVNB96CozByDxNWGryJ5ugzsz8gNRrjYJE9pLLfE6YqRXj9tCLpPLVt6h4BtdXg6tV4Ge2sNBReDKHHjW7pfTtu",
  "key31": "2TcyrEWU64AdWfoFfwdgPbqEzDTXm5jpuZVHevexJeQez6jCCMx2rgVuo8K6W6ne2iPCB1U1QvVS2hTxyKveNm4t",
  "key32": "2BK4YMDp8qr7DwK6sMVsWmQosMXNv1XzesQ29kyBKMhPwSZ6JpER6GwAF5rFgJbjaWErDqGqmsT9RP4ZVRYxbuZf",
  "key33": "ggJk8kjxa2AAUKUofpHWKxFyXpU6FUdBs57EoL3UYtWpCs1AHAcqqSRvLw8Jh93K616rqUzorEB15LuExrHXCBz",
  "key34": "5muGaxew8FFQy6R46RykhPGysPJW7hyLeAP6Em6KM1y5rTbVHHYkE4Cnb4nYbRAEkr9AqamWjeE8wJQJTKKi6BZ4",
  "key35": "4KGevwLpm2MCcvpVCo1MKrcP3FsWPLMceRG6kJxx9jqWvDTzEKHwVcv28RbeRVD2zUKRSGg8Erctdkap8mKGTzks",
  "key36": "97SJVkX4QrYc4ovSoqKJj2H6Z9FwDq54NAJd83PxVNBj9Ntr6dFuf3FCwmKMJ5bw61rDCf28PZgojfRLpCaVUuP",
  "key37": "3a9gHgAz4Z3Z3e8SihTGrmBmfzc16vpyt23ggLBv9YtnSDeKM1m8nYVm6GuPb88hy3khEPEaBWdWzRhCrqPCQ7Qr",
  "key38": "3LJjjjoapoLmWRvuzJgcHGeCm1GeAAdujXbiwacPyqYwGcaN5NfEmy1ftK5wELDA4wLohSXSYpshSN7yu329dGr2",
  "key39": "4w4o3eKFhp6n9tRXXjjb8hR9EnLCfh4bYSyGrAzb46nThDhRxgQ1XtG4ofaBGekpDPqVysHZdztMRf4135vCqp1z"
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
