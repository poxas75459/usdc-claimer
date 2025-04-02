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
    "23tURzxfgpy59Uw1jroXkq1aq5UMmdKUAoFCXok3wodCjJZ8eoQQXB4YR2dSV7o1apiHtW9cLLeGRygXFCMC46QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H7XbeyL6V837dveFrAhG4Nfq1CfV3qNMeruEyeY15zpUykjHZV1Lw7imZAGab59QS2yCzTwn4sRG7aDQ3Y31SNV",
  "key1": "47MRZdMr3mwAC1szC4NrNRo1Kwoufsjt4HWLKWUnPSX1qY2guH5iupTfZTWAvuX73wr3JWeepN5SofosMRnYDCZd",
  "key2": "2FZTwwvADsS1rPckUv72cLTXfQ1Sqw7rz14BMMhNesoxArTF6by7euQEBvTW2khVubokp9rdXFVqdxLLqPYGEoe",
  "key3": "3z3sh6EohnySeSMT3xo6NR89X7RFN6V3srzrMoXfLEhuLhfpnA8dAuzBGK1r6vW8T5cw4kKzEBgE6utDzcja7m4s",
  "key4": "4PZBGnwkyzCe6dPJkgipQYRVW7VuFfD1YhxHbgbgsX7xEXcXNtMFg5TVpux8nxXCedgntN1CHjcQCNa7MRz1C4HU",
  "key5": "hogv65wppY7KFKJ3f49ET6uqoqoMq8BnLcw3KJkDSVJVmExsLQpkh9SJ5yuBZnnB39hmc8TA98XAQ5FyVt9mHqF",
  "key6": "33uoSho7QHg43nxsgivrXjkGP8tkHZZz4kHFeB5pXyzY1Lj4Ni7bCqTsHMTUY9xp8mN4NzWCPuH2iY2C2Fx6GrfJ",
  "key7": "4V34CkNvQCFdDiWckimXVC62j9SjeSGJMyyi93fhkSATMHJQ1YaKiAWQjQFkxWGLGWSrbALKaNaP9bKEyqFErK2X",
  "key8": "2LW4EisWNtCAbvkNnfeCHFG4epGquCS7yaujMydAH6XTu8N3rMxFkck2ATXAU3ePXep8UU3XLafHdqbKanFmwCSw",
  "key9": "7P2B7zuvr1aAPE4JeWTmhM3ag42cY8HTZ6BU9Lg75vQVDHgWFgnh7ssHpMoh9X89UYUbSSzbA7gHpA5mYdmsm5H",
  "key10": "5XLe23P73bTDxsgKSfCsVYRFCxtAGMxJQXBXs2NAp9FP6KjJbpRYRsubcTDioSVgoToBjeJJ1HHCgczKw2HSXdSo",
  "key11": "4KdRpQDCbPEBMZ56LA3PPnwJd7gEX9GmV2MQfHrYsSHS18BfDMZN2rrvthg3oexhvrdRaWEpczvMYi4AVezJ71wH",
  "key12": "2KQR4AsKtNB2WiqnXv8C7NH5LA89NBmB1hsoLPrUptjoJgc61osN41khw5Vq6xczkAdPdW5twMiWc2ZfSJBBU8wQ",
  "key13": "3f8sFdUJGBsB5x2fRu263Fig7czHcTQBTLEtYbDP4nedo4qGrVErUoBurZJ56vW1AvLu2Uw9mcGMZuu3tFAHZVwN",
  "key14": "3iGqY5mjmQz3WoSqYi7tZf353DYUKU3jsrVUQUw2g9Ek1r1pKNKUu9J7KZPL4ryXjchV223P3TszdnZhhATzPfZA",
  "key15": "2RqLGAHd9zm8MjKodYgJsV7uFWG66xJe3vC8wtCFHWvpUkyUiuTCX8VVexefYh3zT3mGkxNYj5FzMtAW6bLxAahP",
  "key16": "3JhBvNKBzr3JAZb7RZDrUaGk6SXn2MQeNkRK8vaB6JPriua1nFAMzZ9ADhvnHsEbDHkaLZHbJCiWCyv61Ddd74ok",
  "key17": "432atnYUVPYRGaHMrhZm2QeTbKBfts7C3RAPGFTkTM31s12sowoeoeioBEe6GQ8dqdnsQt6beHqmhLtVz7UWPi5C",
  "key18": "4JRDbnpNPGWWCr81FxCy5MDSdR7gvd5RSi2tq4LKxYswhhuPqjcHg4XEGfCMV9BQgPfcf3iA4skhgYrEkxiRJCCz",
  "key19": "3YKRdA1eHBaHWoyMhMZU7cPLssMKjVfsR4EAAJHaCdvJSiP8zocw3jHUHw3zF6wgWDGbvEmCYATM2tZENbDoLLza",
  "key20": "46JMkgnZb8yhFmKvncCDw4vYDJL8HptxKSVoyWYsHyrf7BuRMsWRx15MHeTEwLAB5vZekVqMywEk4b61MXsw2XLC",
  "key21": "2x3bep5x4MJi9cTLekjhj1n6SetvsWMsb8zMYsFiAZ8wH2c4iNMt7XW1dm96tSYGUphqRzdGx3hFs3pGJ6oasvqx",
  "key22": "2mbSiN6NTBc45beiWBzTAT2QRuaDK22GHdKxJdwfpj2YptKEyewFjPrG6GXFhcBCfmhwrJbmuqkvdjXpdxVKr8Fx",
  "key23": "4qTVhUEWdANX4keVgbox5mWLsPZbsjPw7p4BnHCtqkWEXmqwsYKL8D9e7n2UbqxxprxnZ1wbhdmog7Fm9BLmnZ55",
  "key24": "3P7KcTqZXjFT5gbS8g6HC9pgQqBjchcndCykJ2kxHF29ASir1emM5ATkUMkX8o7B1VXNudmCNoBrFiVVx1RJZHBH",
  "key25": "3xC1yqwMsi6UStcnx4a42wAh2eUFRHD4nQnoDGhXMDKhNk3To5VxYaCQuP4fhQbrC9VepPTKkgqaHsfvKYSgHEou",
  "key26": "2mcmmWTf6MJBoiSJTRr8iiJGHf6r5Cvbotp8EhRf46kFvWEFhrjU5i5SfzyrdeRcLGQobizUir7k1Scs54WX81cG",
  "key27": "4MYKVZi1WjudRTyMbgkeEkPV2jbsWS3XmHSTWM9pD9q484tfmjmM8JSDzeqDLPhxdjDFodtrmCrCAhJuUUz6464y",
  "key28": "UzW4uS6gTm3fwak1QtvDtZGt1oyUfv9R5z1GnPicXgFDjYxSEBPmBGuwGLQgjGk4WGAaPkLtnejbqxtaV2yyomq",
  "key29": "25WkDjLNWk2iiAuWgTSb5NynXJrVf91ykndvFDLEjchsVPVFnCqTNWBmGdqKZ3bk6za5mS38H4wmQKUzFzFCQErT",
  "key30": "5FZPFRPUuYZGGFrUa88bwC8cxqM9w5CyM1FxCRAbTnBXe2mJ9NoBTYuptj68JWt8myTbGVu7DfB8fCVcPeoUV69f",
  "key31": "2AN2ix2cwzqY6VgU7W6YK4mGzWk7Dafcz2X72WuEVfcK77E2MhcA6NJzeSWNBLGf6FNJvE9ma1P6Tez1xrNnGm5b",
  "key32": "3ZzBNjhCkKeT6FDVuPqs2aWYPcaKa4p2zTNJeFK6fvoExM3BQhzw4vjDtbt5wC8J3p3TTFD3XRRRoVV3PhjJMTYE",
  "key33": "27mk3QemNxWoDCMo3do6x4bpLHrEhbXkaYdxjd6VURj3JzaRnzZNL5DGuZijt2ZF3C2ibzoeNPRs4oKZruThif1L",
  "key34": "2JfWd8qm6Bb5QCDNWmyG8dvGYUNrU6iVRLhmaBMtkt4DTHP6Wmthscq9v8z9CEFhAkMv4jM1DSpnhfETZ1U62Bus",
  "key35": "3cxgHTiP4KuWCJf3LBJ2UgBktRMjrUTCqEa4Ar1cqwwPtAUYXkjo5Scd3V36nNGfvBDSn24GCaYaNTuk9ZtW3AG2",
  "key36": "2jPfvg9bTDXWB8wS95qXaDQGAxwrnXBKnrydnE8Pdo9PszLadZrAbyNtiRNibxv2YKbpQuVeXe2F2dzYfnbyXcVb",
  "key37": "V2ii6uEaDZzbSytYDB5werBYfkNjSXQa1tSLmGrcRtnTWR2xt6ha3V9JsLVqc6LfdNZjzcvRDFK7QJZHrT8J5id",
  "key38": "4qiWEUMo7cteRPXdBUGkuwA3KDh7UamjyjErnA949fZKgyipXYejTzYpZrT3Huu5r7Pj7RuA5oqqtxGBbwAUvuXJ",
  "key39": "4iyQBmtv18JathdvFCvCFLevjfrcHKCGVJHhkeowLWMWbjiGYz4StZ3LP31arjMTPmLapwJLi3tT9PUmSRcyvHAx"
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
