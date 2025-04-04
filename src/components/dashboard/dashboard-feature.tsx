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
    "5L5pLn1QSaX4fGzsKF6QZeF1J25V8ps5nHQN1p3ALiRSUgbLVbwofCjWg3khyYxFNQaFuSef6tjYqpCqUsZuRGPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q15MDfnsgETCLvAY8oMiZvsoDes8iWgdZLYjbxp6cKkdTXUFKhFPvz1hufeCBYL67HZwXijfF44Wbye8VpgSodK",
  "key1": "6GkWvy1TvYivu6qRRtYM8dZJbkyYrH6LzZkpAuec82BqtiQEAJG2wQfnj56MvHHH61vbqAkFrm8obfmhK3rEDjh",
  "key2": "5bqtmnMEz98LLam1T7wTJcMSJP76NgNfQDqrwAGSzVDPvQyn3mVaW6jRJ45yM9yFxaSUuxKCCMCBoW3x81ND2GYZ",
  "key3": "3uhfnN53GfU21bqffSMWNehHU25G2AJEyZoC8LZ3HvZEmjVLi8nbwetgRrtsFNp8TAqiGMhz6GpNhaEQ5a9Xu7EU",
  "key4": "4DWPzwt4AGoP5xYKWKSDmvrHdPQ6j5UHzuaqVBN5qWxQgxChwyxEFKR5k8MZqVdESi4dvExNPV1HxneX1t2ifngk",
  "key5": "GhaSCAN8pMWYQ54TxPT43ubNJ7Dzgn7CTNSmUP3HiG4KnMdGEVvAt6dHH1QovmuzBT7GA9pkuKxvsFmSkd1gr53",
  "key6": "4A4fpCdFmHjfiDFrjGDZ2WsfaeSpKooZ27PGcua4roTMsHTS2pBb1kPcLgdYeCQDiCuovEDKPAToBYRMLKsTN1Eu",
  "key7": "fXZsg15dRBpSVVP5zMxw1TUp7cGeuivmCvV6LvznkwoaCvZryzT75o4Re2U64uL1b1E7LDkto4YCbtHHSCoioS6",
  "key8": "56b2fBaMiSEisMs9h353zCnbPEhDquu8eHHt2zUJ3aLfYPGXx7jvamQmXkuc1SZXJy1rDwVPehijEvyCGkfEEPwz",
  "key9": "24ognSR9QE1PwBjXGGqBXFSAiwu7xg8hFp4a1LvBjKdSmPfLSZcZNBfn7iiMhfe8mdCDb35JPKWqfk6aC2MQ3YJj",
  "key10": "FU8B7rBPzvfLz3g7ks1C8iWif4k5pv3fs7EeHK72FZVPsYZzLthVQgP7YryCWHMm13etPZvK34kJMg9jGdAgvhw",
  "key11": "4LJ6DmREtD5oTwUpXW5o6fonKsWsPry8a54UG55sczh3u1FbRsgM6nfL5SRGFVzojS9A988KM4WJrCWLCchxXQ8L",
  "key12": "5v8uN9Kx3EfhRNYiYnPJnLjP3jH2Co7oq2QD5LcQNEerqqVcA293Th3s9rL4jA8qjkvTTYMQmcWmtFdTMafzHqgL",
  "key13": "Wj1eScYWJDky1Px2dp2vDu3rQMta8y2e5FJFHKeab8ux2SE8Xd6vpFTgzRPevYYyfqaQRnFia8HzgfA3ZytKrhN",
  "key14": "59HwYDwsfbfcsdsxC64ZkA32dDUhyqKmTPsCx8TbAUx2yrQUuRJFbvbAmgyjGZs5j9FnTCXb4qQ3r4tWi8iEgG9a",
  "key15": "5S8bQNnviVj1jNphLKR5VTPQxvvfxex2mKLwhPuc6J4tbj5wk8yhHEDi8tgGdnCAT1attsSgpBhYTByCXxHL4KgV",
  "key16": "29mzcP6G5d3ydEw2cyGdJ3LtWf9VEsEvEaaKi9BxaVe6yNiyQETC7gYLadYJ2mRwLZs9ZmxA1UGFS336bYhsQpQN",
  "key17": "4oJ1sQ77b44BmCKrVWNx6N1qzWRiq1LNjK1ALJ9ddGx2attTHgtnzc9S1M1Yr3x6cMrzrGVVANqx49NscszWcch5",
  "key18": "44mkzDZNysh1VGcW5ex1eDfH3ZwaGdk6td71qwhGnJTbkWtbT2jwGnpwDNTBhp1Cc9K7c7wSkn9BKkkCvpwrVrJq",
  "key19": "3A7976M3uiTv7wuV84Rb8Lw1gWkdewz4jR4ueManCC21QnmiNEBPnYkgaFSg1SkJULrqrWH8zxSJq24VF1q3ygJW",
  "key20": "54gmYx3QcFNc8jL4kBdADbM5uYYmH2ManVniYPSyWVbU2r6RX5uVM5YbK3y7NMzPs8J3fB43Dk7k9fQJ2kAzcxg4",
  "key21": "kXoo96otQgtXRkAG1GU8UsvYBmnHwVnnwmqQd8vEWZiB1TYJZSKEqcnzAHXHmDMdme5kUegLVSJSQZU8NwUuMCd",
  "key22": "57C8sEiYovdn8LSFxwhRNeiUodM6yNEQScV5tcVLTcpSdVcLnxPQJZVzt4xyHMmCZyQnudMseXwedLHAdztN2Hvs",
  "key23": "5PJZQEJGZnVMwJFH4pcoNMB8JhUK9weDgUoh4iMWaWZABXrgjyiDh2afAaybK5s2KEZP9GqFdaxk7j8hzbP8rAqz",
  "key24": "4XCoetu53D3so5FGU6veA6B9a9uJye11VfqBbJYb5GR8jwa573nUQkcbJ7e3wHMe8DEbURpbMHWEDvuMfotjswh",
  "key25": "3Eax6gADFHZS2HqxBKFoR9MrjZHKPLDiVkGKGB8zCf39d8sifk7Hd9iHb7QcEpJpZ8t584uqw4AeprdKkgoGvxzc"
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
