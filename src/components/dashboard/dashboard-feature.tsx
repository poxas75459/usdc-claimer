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
    "2UASVFvyn8DTxcnKeYvtiMsVthhHZwyvNieddgGvXFycYwWDRhQWqXMhsWYwbKi6JFQb9rJPV5jUFz4uxEznprbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566jzfnmPAq43od2sqsGSWmUQVTnXE7DXjLdKLuBPyNKfmp1vb36tNjJsfofoeByXps1iQuo5G7vw4mWkeNn5pSU",
  "key1": "4MSoP3SLm78xTGmiFo3bapdgJmfFU3usEtCBiU5aSKrPBWaNpiwcU1BnibgZy4mz8ENovuRRPbeB4DZ8isH2hFwZ",
  "key2": "yuJ7X5H2Xt7FGQ18eZfCGRiMj5t53DKaxe4EZQGP8q91yKMVDYytmVSkiYp7aKF8Fuetdb8JyvMKE2BSCr3zvcS",
  "key3": "5tgrvBsgNWJfwMWzra2VQjQJkVU3gCdokTJgJw9ZJwzYBVjCGQaKiuCLHtXsEvNzZGEV6QfGhk5kgdJtob33g8Pp",
  "key4": "3h7nqZhub28CT7PaYDN35esm4ses4AD4NFfLg4uE8cTbUopRXbXT95T6SpQ3BCnraFp6zEHgoFC7i9rvsxPUAji4",
  "key5": "33zG1h33p8EcF23RdjrZX1z5e3sGB7wurbzqpn6xkzr9Qbq1rUs88cas6b4dPVvRcBevFfVuc5rgfbV4wmUP8g6D",
  "key6": "3c8wAvU1nJZkZpFEYSws6ehiJZ1SUa2ivw7gA2asHk9HAT6bnDr7QRxMiEWxampoi4r3Q4vzgjs6UmcQ2jLcaZoP",
  "key7": "4CJ4TvPPrr2GG3sQq6H1kMTkCnqgz8Sj7d8GqGESMZ7kAfkdN7RNRrXFqB3c7NHYRFNkVEDYyqCeaxze6pP1kTm1",
  "key8": "23yDNsHf4PEECitCCRrjHPaFUS8ymjhSeNzjjuHESsfyFDith5viiUrbVQ1x6HqGbJFwEoF7Tw7LNoCpRJSevhbG",
  "key9": "5zJcD6HCk4tHHF8qkHEmtxoP8UiecySqNDyW9ArDmaqHSaby6kMQn7zCtYb1Jd9ztdZiLGKQfMn6h5Vm4WRF8oZn",
  "key10": "vMzKrvdgsJq4Q86WUqukxE3n93p2pdzXcDwWt8jGJhRco1zCDzE4DM529RgL3tNat5LQ9WRCq3igxxnYRLXYxkz",
  "key11": "bs2QEBe9DGmC1DvYni6SvX58iKj1jV6gneHAgbDKQKn7qu8mxhrPtHCQPpwGNGXfqrmJg3RTW8poGT2G4BZMeoY",
  "key12": "5bDFbkz4FbFZAXB3ZJcDm4MSzggbtDV5it2bjH7mdbkS9CSw5jWukd4Qm3Sap525MN122ZkjzkoBkuGWyK7s17Tm",
  "key13": "jBK3n9brTNs1A97Ln8xbbqTJtUAx1nRKnu5w8hrzPTxEYHXfbqN4ZTHM6F5ShiFgHdcKFZLkbkPYotQwPZ4SitN",
  "key14": "52d7EXKCUcnHrjaxAV6tAMduNYBiLb4XnXoh4WtEbNX1FP7XuxmfZihvvAiik3yER4WDUjfv6DqqmJUPRPogaDsD",
  "key15": "4taUJ97mXy8Ld1jFCDZbUzmmda183YdBr2UzgQXE7vYyjHY7wugjhKRVnFXowV9Z8CaH3rcvt9uGhrPrJuGzKrYf",
  "key16": "51bySEYdJimvKa5NUur9nNCWTPd2qg1NW486nMQuQGj8E5g29Q7wHVY3vVqJUprK2rbAEXSUeqCSDufM2E9Ep22a",
  "key17": "4GTwvAv3msikM6WDHFwafyoyjndyV1awLSCFdNHYf9RJDz7bCXFnv9zZDutTogQd9iQdXgRFpgA8V7gD84ThyTNi",
  "key18": "4KQXE38C7CXwFdtdaqJLsrf4Zj1iN1Ydtznd6gzfztwnwcHBWs2XDRe3Zp9fHrm22HuNc6jSeZyASPdUq62stW1B",
  "key19": "3YQzSuHrtB1N8KE2EC55qrXNNhrg8mYqkfrPpZ3B7KfWUkatkQapfmD9aaxMP8SkM6xMZPLrh3ELCRjo2wG9tEme",
  "key20": "2egNzayRf7oyMXaEa1PtARUtFmrE2YVrNZopQtfCiVsZPyYZpW9Qj5Ek6xS3ABKqxoNyxjhudGnJ8MsDGtE7XYvU",
  "key21": "2GHGDdd7HpnaY3x8BG9LuyEkLAmGa2WL9uUUxhhMwJzqCFsxgegD4HDUYxuyUGicS4JqPf4Ynj1s8AXn2tstM1iA",
  "key22": "4gaPUqDPyUrX51DCkTsJiBcJqcjZHEbav4UUmLXrLsZSr1wdGJ37kgp3PLDeaSYqiYhDbJ2sQFpNR6g7RfwF1e9p",
  "key23": "3m2DhPMp5MmqRnS5WkjEJ4HDChFnwFCAfKYVDCSEqSKv1ckp9Kx2MaCLpxBimJW4N1z4uqiX2caNk9b5eV3qCwfX",
  "key24": "3GDNumdDHr3Md6rHXcP9V47RXrPcbrgmb2XqGRnrGgYCPYZizawJa7mA9Zj85DwbEvSts7XRawbgNKLt5DiwMVnF"
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
