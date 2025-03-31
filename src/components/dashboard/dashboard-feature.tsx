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
    "2LuYa6LjcDJqoE4foqFegNU2XjzpxqDd24XsP6wXGT75BEigdUZgqV5UYPyAoU5YULKW3RVf4zjGNjcGoV8CCNNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMSTLhXvsVY8aejsdhHwL189LXEs54B4SijTUYprm3BdzP77TRKKGwNzAh8CMHmMGb2eKHjYhZHs1pvLcwbN6Nf",
  "key1": "2sVG275dxbgJy7pki4boiuxmyj6p31rof6PTDfYYN3tuqDe175mShtcx4PrGuXY7fbj54mUGACBqucWoxFNR28QD",
  "key2": "yWrknUVgAkpg1dkktDnXjCd2bGmZ3mHoQX4MZx8QhAmkFg8osYpGKrfeJTJkxMaSfHVrJ1MMJLHtTkrPoLbZDeh",
  "key3": "5o8w3VVd9UAxPpbFnYyhRERRwVWRmfpmYr15Z5sy73w8c2faEd94gL6mi3GbHpQ7CiEpoT9s4wRQX6FCxM2aFcxc",
  "key4": "W9Zc3H4JWtYid3z1BB57BZdTgbQ2XYsW6WA3CFYaXD4KaxHRFgkr8yz4xDg3dnLYGt8uAgwEp93VR4AWrL3D34D",
  "key5": "3BTjGrABDuCyRQ5p9uE9Nf7tYB2um9PCzB5aNzhka5rgnpkDJEWS9DWJQPoMLkMTKPYYgUJKq7okwZLb9Brbw4sM",
  "key6": "4PpBQuUsvcdz5EMufzya4ycsUJfFEKMKpLsYScEPd34VdHzDRxzmepbe7NyUotBzyeECe8mQamX93QCMa6uU9yTc",
  "key7": "5Ue9HrmabmwASGyDjjXavY9DVp1jxS4kbn3UHNg3cBpGDpy4939Aztbv6TDKVXQwYNgDD81s8YHEpYAfoA3gVV7Y",
  "key8": "3WrnMuHwvM7rB8RfH2HEF4Vb286smD6zmtHrpJfffc3QW6M1g1sAW9bQz5uofapi5BAvwBdeKMVyQWoFUm13ZjfW",
  "key9": "4tpZ9TFxYrzoVf4avDviLt6LiwhxPhwLUSWpbcP2YYy6cCdVQjuZyuHPHHyQVaiCyLbxJ5rfPAwo7NhEsnnaL6FQ",
  "key10": "5PdGbNFd4kAWoxhGdGnAQbozBn5M6RNB7XXgQx64RgN1QSpXsev6urYUAnwbAbbFGTr92cQtxTLbGKYnKW6da8m2",
  "key11": "piYxtCt2rsLx6bgjSXbmRY86Me8hmPQkKbLMnWLgbQ3SPiTLwZch3CZhbR1sQC8uhhnVaKqTZ7fPA1msnzZbyKp",
  "key12": "3q8MFxZHEeEJkoeN5XYbU4YhfggTRb5n8MR3Q2aTJ24bCbGznLNMXz7UksJw2ve35AzGw9K8wt1nDF9cBcMJHamg",
  "key13": "4Fg8Y9fk2cKK2HsFnRMwrNjrcnQW3oxR624kGDvDawWnbuH3i9fNn8yNsACYyGyRBp75wWNbPSaweYcLsoUwDycH",
  "key14": "43YEv1EvDA7cPagpsAJAn8DQV76LzGN9Tdp6c8jDyYkS9ux3TDkKEombYBoWNUJUBz3673ibFSqaNpPDs1wWPXXH",
  "key15": "3ck1zfbBLgi3issAmw6obK5WH4iuEbkvbRbNkfRGwDRS2xbYDi5szZvz6GtG2hXnaSyMkt5tf4rGkGgCXGDULyoG",
  "key16": "3NEcCgksyLzDERp1RmCnzUV3ojdHGC2Cj8MiTdkYWzHWbu6oFEDBZ1miSu9AaBs4Q1jvUK5QViaSPGxpAVbS8Gr8",
  "key17": "5GferVbFCAzJmVDk4ueypEzTJY4AZANbC29eo9odBoyfmGJLmRC7gdGoh5fGJ6USqZiTEgF6iU6n6ZeWuCs1JyHJ",
  "key18": "5g4g4pf2CttsdxKBUzSGPwKB8e9cJbmvfvGDtMeZ2EQQV14JFGF3x5fn4pLUBMD3ZLMEqUeSbxoziwy8Cjvf4M3A",
  "key19": "2Pbnuq7wZd3PzhB33KnMqPSUNGpsbsaK81UozTBmLT68MQtzp52Bf8Q3tPLPP3rMoeV86pzVcgzS5kmYkCwwSQ48",
  "key20": "2LrZc2jffj6hHyYaqxevnSNa6huPmyEPTh2aB5DkKGHv7kE1fQDrwzoQ4q4wreSzV9RoV9azj3nLrAnYFfFTugWt",
  "key21": "4U6VzNTXa486PqxvjEWdTbjkpCMeVA1oELgCNN2ZRpryh6KPksy7Q8MFoyTTnozNbsMWRmNKz1pTL1gek3dNHGmS",
  "key22": "2vTBDJioohZy79G2AGrmZjykhkp6s11dBVPWKgvPCytGNCun6wqnDJ2uGgQKFf8dkPHaHtcCV9Bf476LaQQYkipe",
  "key23": "5833naxLiPsvtKDBCRBS5Jt5HZwfwR1VmSSqoMnagME81U8oGVFqXj4RMHCGx29D9eX8XBmhGxtmvci5LSWDQrKC",
  "key24": "636z3Pye8vmEDiN3hbdjKW8FkJczaUt2UnwXCGoDs7Xx6NMEnxJ57N3mHFbcbETVM3ehvChJtY33cJhkvcoUAj8E",
  "key25": "4L7iz1BvBtZJAPvPcJmsyoGdEatCj2FLcvNHX2S3keAUUr3AZbjTsgnD9mtTWDfyw6fdswQFYHop9HucCGFAwcDL",
  "key26": "5WkPjBK3o2cTRXnqr6BaWuYN7ZhQtVqTH71jNYFJHPYJZeoChpV36Kt4DNieGE8ZsibgCDCpXVy5LTvCsgmGzcty",
  "key27": "4KFUPyhKKp9NYYbGa753fRbBbvtmbMihKJKMurHVbXjVo8Ad9u43yxtRShqSWkoeAZYBTBmBWU3qLBko8ZA7FqA4"
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
