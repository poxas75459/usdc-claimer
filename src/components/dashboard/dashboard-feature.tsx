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
    "4xMPbMzwFzD2GX74nwnmmPAPn6HnCj5yUgDxZjbkaYrK3Z1ySfMGYbGexztJmv5bdh1Rt9tzV6qCcLqCxaBarCmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHGnTR4KB6pfkxPdJ1sbPRduhNPfYPM1mwxDfyfFQjxzWsAFfZegQ6TiRjegmHwuGUs3DdW5auXfPqFshbunMHc",
  "key1": "vDMFr4bs8hReEkF1Do1ZuWQPfvUgDYEXRiDfJacaEGQ1g5HmGVUrn54CRSVY1q4C6hafk3K2CfUUTzzTR3QL3M3",
  "key2": "2t2mQuJYz6APAUZh86wuN1spzXLAtZRzPW1DYnm9fVyLFR4989EagD6LxbmuMFgZfx6QYH4pACjHj6BaVbpSuB1b",
  "key3": "5vAPozVwTr2Z636JT6zGdXk5Absn5K1EvgxTfizr7FPAMvFK9dDU3wVzhaBkcYoZH56nLWetTfQmTKoTBQ7nzwyP",
  "key4": "3oYgQe49sxFSaN3bHcQ1qebgmtb6Xv6oCdgdvwZ6a39wgtHj1oKgQMNCuPuPu8q54e5ze6ai2rdq79hVdHwACzrk",
  "key5": "2v16poS7BRegwX7racLAh8t96tVFjPVrav6iMYZKPoAJGA4ZabaZmqNBg6jZi2q4aXzgFgG5VKxUTPNhZ8F8rJzd",
  "key6": "5dvy9xtDZDTbgzsx82XNshTBetV1k5M48TgfUGyE5iBRZxS5rzsEigGJP48Rp7PwaqMUYmgR1GHGSTTP6z3ujgtC",
  "key7": "3hLdwsBipcUVQpwj54CQy2iJ9D3soepRgU4RhCVyukLn2RFCKgVXCrTbtDyuVMYD7EkaX7hLoY9x1MmWzFnuV1b8",
  "key8": "2ZPRpyG1DXWPKPSLxfkb57yqXJ4t6MZPZWEUme8CGR6krQZRbq3HHE1ZGugCBGMS2rALvfsZKvPDa6Ykh74WgmG5",
  "key9": "5mrP7sdtwL6xLf5bKG4hqnKai6t1RKrA9yJBHAQoesc3gKFWcHGiwK3dJZ4P1LQqNWm8iF6SZyfYgkWNzh8kATht",
  "key10": "3thmKcJwDM7J7mmcm9bdY1sidm6dtphzb5F8suFq9EnqWHqJ4GJcpRFWLaAykYNfHNg9jdHCkjr6AmcnpX1tf9DP",
  "key11": "Ts3Nd98H8uAa81bREH76wKgibMaojvJjsG1msT7kuHHTfL9fZYA594raKXxNguGh79h3wKLfeUy2i4XMFXrRgPf",
  "key12": "4pHKWXGCMNSRYEeTBARGyagTE3EpQSbA6mK9g4w7pLyj8xKfASuCGj5jTVzfye7nvtTNzaWkmqUrCggUYx9Hw5ni",
  "key13": "5ePT2saV5QTudERXsA7ZwozAemK2rv6cqe9gGC2nome4Dt3rye7GpPLuYPdPBCLB8SLpLLk8YStwEwiyfxtdGv5L",
  "key14": "2X8S1trQPn4xnzjqYpiQqtMzhtRBvsNX1DKTB8htEwA4kud4jZqh1xsw2anZfhCZccHHnBuVSnoZ2i3daNjNogyr",
  "key15": "25wBy7R3inWXYjp4QEUTSg2RyULKnDhWw1whoPQMFowVbyfR1qXRP6pUzq4JTDUSzLXCF9pkPyVKq29eKK1hKKk6",
  "key16": "3FkvusT1P3fRPCNZQUw5NqgBZn3NdYdSkdWck9mfw7BjpVvAYy37FhUa5Sf9HRopgBeYaXDQ3m6PZgBSsZAKWCuo",
  "key17": "2LFZQtgsSWUZVTZDNnsC74J1LWWm4sYfGSDd4rVcfqo5DhuoAg7bwy3nwA9Jw22EzXY9qsevaVFdPwJPEsTEiUVE",
  "key18": "25KNrmkreLgdrafxgR19Zvwb9wUBKTXycESNVm2F4FP7jGpL52Az4LuXy5QTNiLUdvLsUphZtcfNms8tnXKeZmDZ",
  "key19": "3y7Ljka84y7EJ8eqRxB855GqtkH6pT9R6wBYV4haSNh8Jb9PPqvqg7AU23yexiQHvFU1YdArfG9qbcYQdtV5LcmD",
  "key20": "5AtWZ9LaJaR8GUL2AhNzwdV56SfTGtnCAcrwDimiorUDnCcnoNn3TzAurSFUae7k4eoTpe3yx1JVq5BhQJPDuac6",
  "key21": "4LVxkoaNbE6TafnDVnWS1KnzwbGbBn7E8QMem3tLzLZpJq6H6NU7qBvVBrPeNNz5AySJ5EeFdxzBYNTJ1zJDHDWo",
  "key22": "28eGNyMXoZwGDXAsRqaTJkoaWEZd2DbTKy6fsujNzzM2VxPE53z2o6QVx7uAY94tQv2GE3ysZmkMcmfWhPYc3qQF",
  "key23": "4BY8Q3jKHzTRvUVDahhyY5Q2kk4Li6ajW3FxU7R7YhCiaYfjkPaLfcynQ4bScekkBroxqkmw6H3oc75JVyjxjEtJ",
  "key24": "5Hv8P7ZCGzVbLMzxnstpZbuaw9QcbEqc3wmKNoue2AH78Nk8xsYBTkbcAMwggGbMX9zff9vEpqMMhEojconuHLfV",
  "key25": "4DQ87w1XVy23f666J7dbDUQLsJwjRmZU6wH76qSycSRf19MrUEHKfgREQowcK1wdDis88kgioK5VpnALoBiMe8KJ",
  "key26": "3hE728apVCEZxKMZicuRcTCSEc971gZ114qSDVLzM2Q7LnvdLuoa9TGs1U9GcFJRdBLUyNVGFXt8AaLt3dWjciir",
  "key27": "4Dvsv2E6qFsDxYn6enhAXqKXgfqQCx1TwBJkA687N3qpzz9ee5F8EGVponLqsj5Vz2kXNnoyxH7ZKirb2i8M6jFp",
  "key28": "2ihShFufSEW5tErcztvwjE5F9kQQviJxmV1hvxHwP6FszufZ2MqVpoJhsUP3HfEt5UAzAR9HxsxtQ19h6d51vtSi",
  "key29": "5Sj2SmZHmmyWDTNCbY3ZcjeZfF9LPUh8W3pYHBRejhTaxjdfW89P62ie9UVSRU5mV9e8UBMryVDVaJDoAQSCNrmg",
  "key30": "ZrX1gNDJTekEBVJkiXWaUCkPwLuXet2mmZkLcBh3FzM69qw5efuJQ8FGpPFr59QZsPVadc9oRZzR9SGQPf3Uvmy",
  "key31": "5SCNB94jwX8SJRwoUeCYCEwJQXWkGCax5aYCjTZ3UcNXnq8Vy6RTLwsnNjfiv2TSNawrRrBaMLZYKkSrgsj8uSS8",
  "key32": "5CAky7hKvh98mX3wPJptkfqW3vZqLyrZaqvVrhenFZpFytwF6GNz5Jg1HdJoMy8nSVB8q51tzpQEssXR1JY5jfqV"
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
