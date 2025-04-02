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
    "4EBmBzBMi1eymGEr89VHYh6RKnSHogApBgHQGjadsV4cAy4cHNUhBjVW2BUe79CJ6Zme9myq75ktCvMxPky4HBrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKhmuf3MqMeyintKC7eqR6MR73QP75V4GJD8o7d78ppY14LbquN6AXnmU7Wre5TjhvEYtMvpp1zjBA578unYwYQ",
  "key1": "4CJJ9huhSk65BBRwNRVWkgzpJx9tq3iVpRoGH3nemBQz3ogrdm7azb2sQzVmkCbcvDoUFukkSKWCAEF79q6EaGjV",
  "key2": "5m4oswZUexcLjsxSiQksmrtrUQfG3Mb7pYzb7QJ83gHMuwBwyM1RbXLYBxeTvd7YVHQ3jC5Gq7b4QNVqmRrpoRkp",
  "key3": "2aECn9NAn3gX1pCLgFnqM7exvE6VNbAgEtdhXxq1N81DcMYk5tMPNmE9fiVaAYggkkA2gGhdxJ9dzypmQgYGpiUM",
  "key4": "3LCqLBs8joMdE73eZ9KFGEhfnWSFsUw1mNZCcpGYu4M6pwYjviPfiyL6HwvH87gUsH3rQLbbUas8XUsBvq66pJhP",
  "key5": "2wiKi3wKqn26FaKYcBUgaPCK7CY71xe8KPV1w6aqJZaurDFY2AGPKevmbHY5UZnp2reBv5NKuZx5EKLR5LcynqmD",
  "key6": "2fUimQzSkB4oYefH38JETk6zgEnnsQWZtcKgGdKNnkmgqUn5qxFqvyKdi7XmeNMNDQF4XrjU7BJSQbwZZgNcYhVC",
  "key7": "3hwM63pPtGXmz9pLSLxG8eMoPFHFZTnPvG5EQkad8KVCTRihpdZyBXYjbCuJrLgPeva2Q83op11dXoLkLCXZi1Q6",
  "key8": "SY8jbU3njkmCoiMyQw46by2RNXQa4MndZNvDeWXemtieg8hjdcgkngzfeHKSEnEFcrLdS1zzaGvbNguHHGZ6fi3",
  "key9": "bqt4WSZZsG7iY8eKzkXgDWzQhgNxt8Lf33nHkTwW4gcssujqupEMaf2kFPKdKm5ut39FDwTrLgdo7JW4gDmdJ3n",
  "key10": "3mv2QJj4qsy3WXY1BoEB4wBjiC6xGipWto3Lpm4YM4JCaT6n5MhoVwSTTf2tT7bXq2KLJV7qkfY4XLvy3f4nrxzj",
  "key11": "iRnVdihvzEW52V5VZFin8epvnzsgpbQs1KbKr1QgK1vUPn5wCMuTb1pHEtaDWgoEVHxjWHWbD5sVSzvTzrukGWr",
  "key12": "XtU1EVYRBLmswjvnMvSirPvwoRX61UYMRYrMz1PdApEu8Wpfb3TK5MH1nDhFWZj9MDtg3XtXdMdZAH7cND6iiEe",
  "key13": "HYR42PDeRSCJhjX9LZkfWZYhwGJ4QKRLpz37nZXTD9diTQsJXaNRLf5DpXtEVziBTBKgQ897KQV9jxSB9v7uFz5",
  "key14": "5KwNXByoqcUzJsGdzSLY2nhwTCzXKQMnLMZ6nji1nrXnSnoPyWuzQJSFy1nVwf2vUNynKfBhGVcAeJUzgQ2Q6wBu",
  "key15": "5QM74yvWvJr2dJoXhVMznCyg8svL6ZFkjgBd55A3bpWJNYDm47yyYMkfHQmUBcu2s8yJLGRCX3Bdtg3zXBRSZSso",
  "key16": "23rsoZvZB15Z3sVBb5Pb5Rmo7ZYVJyh7g546nRdeEG1aWmoKwFjyVP4qdXVwSmPux1ADB2syiS8pZSBaGv38jdkH",
  "key17": "hg6pNsSifmPnMGMBtqoWB1TjjedAYYLBeSd8P3QEgoUHCsukodY71kqcAmmSgLDdYmdTJ7SgudfVkBk6poga71i",
  "key18": "5vqmzTmSfc7rFkF6jTkun3ftsFRyFbBQssCTzCad33AVrixVmKwcbwdnm9xhLvZ7yzo5GH7tKbpjnqGeg7AXu5dW",
  "key19": "32qaoRqVAa8VuUW84sGtoaTVUw5LeLtkCUKGtTzniknSAtHwgjvsVr9M1zqnArZVUdUCArywXA42GddR5aDALP24",
  "key20": "FwyDsKE56qEfJLi18XXWvQ8tJDtRSrGEbMc6eoL83GUJGVpWxfcGj9ETKVjDQnMTYM9obKN8u2PTw1g7xtEVfZ5",
  "key21": "4sjpPUm8Q9QtuxQBcTNSFh2xqfEWdJm8kkoE67u22igPNCc1cjtLMWsVHEmfdva3fzwbXjwVoEz3LjvTMNB9Udns",
  "key22": "jx1k1aPbM2ND4rUwhDH2qWhNfWBLd1u5jNL8Y3tTTqPyMNnY4qaPiBwYg8L6VM8S12NvArnjwAjMmba7FJDjcwn",
  "key23": "4mpNLb5FCzjMevXZXsSVUjQq1QiFtzGo9M2p5i7ABydJ6QURPHdpuoKfcnkJeJrENdCkWeF2VHVziwPxncKRD52G",
  "key24": "3UoCriptUcTpDjK2nZH8yCqtDQ876MuTGMaZS3Xrcj6JJ6SfXRaYeuqBMQSMNquziSwsip9gkBgQinzqoVrDWRvx",
  "key25": "3zkKH1y3syffQkv2PjrLuTGdQyxwieZB5kWV6Bmja1t6xWNaZ4po8nJBX7ZxGkX15Hdh3p3BDpSCnQEyZmV7KygC",
  "key26": "63bcKi5uvHzpKs9KLde2CPuanmA7H34mSWpvLvrXsLawZ2ayDg8RnkrQqAZ6RunGSvZvfAArMT47u8jiZgj8KEuZ",
  "key27": "51y9fcKkiMCvWZycC4aT5E185KXNHX3stKWAUWhG4Rpb3vYs8shQqMhrPkksFr3nHJiVhH68SyYkg9PUKDuRkw94",
  "key28": "NECw7XjVgZj1ihXih2t3oFfTn5nauLWD3hP1koCfhbU36rAttgqPnKbZwQNMVLndYtZzqf8SphwkSj45kmfumvt",
  "key29": "4dsehiRXr4SVX8Uegk1nodmsQ8JNkQ5A4y5LJh89hBPiD7mAgrk9kTm5tXmC8s9c7ok9x3oYyNaX1SYs86jseYJ",
  "key30": "QCLRRXv64ShHX3s5bPECwe2urZUpx2cYvET8ognD1ni1NNzGpTHH7WDKc2QUTJurmH37hwabXfssdQBDLrj1pYu",
  "key31": "4rcZLV1XCgqBwWE9qJnVXBfswkFxqNYxozfyKHd5sr7dt2uCneUz3wcVk5WuFjJGnuZBwerKNyRKhBZcF2AVzEDk",
  "key32": "2nj9J1WD9aXhTUrAeszjZQgwm7XZSL9DreYcFkHT44GAafNHWN7J33Zi7PJVW2ciRBMA93EsacTZ5jhVGy2cz55o"
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
