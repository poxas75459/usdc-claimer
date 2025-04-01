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
    "STbZEJqSKRNs2TMwN36WLaABj6mbtkN6vtM297S9Zt8Pjqkv9nph1jPwqs9EwphkVPioWWEYdEHYETrdBmrc2nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TqoPHnPo9sG5BReszgHQfLvqAgmN3Q23uSEJPrwBSbqQyFcSJUpYRS9mH1YcMbqdHV8eiKiP4DZVZYx7ayPBU6W",
  "key1": "4ezpfJdUpAEurRzkCztYuPfKvWsqTcrsdJdmQMV5fEBT938iU8fgSyHKkFvtZ9PZTsQDotHWdzuREk67cL7LMhu9",
  "key2": "X6YBY7UogGWYvWXKv3PQqHCHi4Mftx2tGBfa1iCC65R4594xZp8fPiJqeXngEepm1NtRrGCd2i7BS7bXBVUdH46",
  "key3": "5Zq7GZTjnf4REZp391mH4y2Ch5YvoK1D5DdwbQqzipC5YCh62LeMQdv2A9rGgJZRY9PXBnA2HNtQLSHMfgaaeUMR",
  "key4": "4bHkGenwEYXrNnuMn3soHxayqjrNq4JnYrpYuq946yRgZ2uUqWXNYCuwPZvALjm6ZaZwFcBitG1Lk5nSoimT8ZWY",
  "key5": "2noK8oYA3Eo1oeTUD7vSJX876m4QK7GaVUhyciPrdQcyVnjw1gVhw3iKqKif2UujgjPtpEquuyX8X4z9aqKhuebB",
  "key6": "5zuQPaysHHhvo8FHFPX6kfy4UUEqUiCeE47wAWfFDUUHtQ8gZcukQtoDiwCiDWEknhj8nBqTqXJ9DrmJWYwFs1ei",
  "key7": "4wWYKbHm9Ys6AVZ5V5yLT1ypPVoQaQcddLeJqzi21KR6LTg7VD4WBYjHPC4mfF2MjbtVzz43Hv8cpVmLayarqJSg",
  "key8": "2vnuwC9VedLVNmVu62REyovUNUaje2BwrER7f1EVx5MEtwDL65Xzk3N6MM3RPzJPeFwhaSwroBoc1wHWKTS6A34X",
  "key9": "nMqHU9XaQ7zCQ9UDsLLKhx6zDRM3PbZtWWeXH1F4s65qPMTwPgBD3qZVBPWZEuXdEmhTk28KDYTYuaSE6XnSwKW",
  "key10": "29dv9Roc8tyKjqt2Tn6Mcxrw6nzJGK8mXPtCwpzNP31aG6FAYLhxWvFMWjxY7Rce9cysC8NBhjiT84MaY9zjmbrz",
  "key11": "h44YZnfD3tDWkgzhmnfDkgvNP3ru9UarEhsEn8znz4BqA2GyBMUs5nUh58gHg9ze7KXLxsVvfDeZcVBWyNH3p98",
  "key12": "4DNS6ugB2bScKhDQQLEPBAXYWMcBsJJaaZCUbBfhzVkhWkq2kpfFQzrKu4dFEk9Fpvo23HewGn1MSixRfApVFdc9",
  "key13": "4uJHoZYRoTrcadyTpFDAsYgNEtnGR4iSg8KFdZ1zNgehVhDvfK9dZoA3egXFS6mSLMn6Paa2TzjrHGiwPcpdRivR",
  "key14": "4WpQyZNY86gd2PYaFnVrErnEqwTQFrsoxZg7xVjXoETM55vPZS3g1a6wQeQ6BZr2wmWfjHrnqg2aqoDyzM9WeCcn",
  "key15": "2oXtdjvEqHjbhqoG9nd8XZdjLHPhAN3vXKkF9BkNS8g3rwJRZw4AsMuVBxZyYBcBBgYXWhghvA1oZwvw1NBvawVd",
  "key16": "K3wrY7J4Y3NWhjfa3iEC8z4CogS9KXShbc3DpGapRxePsLUdzhEbmKRpD4pxV9YQxPzuFN7NpE4wZWzPA85MLML",
  "key17": "4fvAG254etFRkojfu14FFRLApo3Ad3KCMoLMkQANetMrk7FkSEaXvmqEzb9uqhz14pfU9vRSDu3juew2RxcyTwQU",
  "key18": "3JmBz5Z7cmkJx5fWtqZFmTUkZHW1JGdXUMvTrAZT5E8ALTgJ9FndMQg4u5K2cj93Z4Ai37V8V2XJehHWSZNVvAaY",
  "key19": "2rEk5QHH2JL1Rnn2qUJZRGFzJmVZAVXxXAqZ5KSY1gw1wC1GGQw8o2RGbbvkPMbppSFzwp8deCEdUxvTwUD4unyg",
  "key20": "3eF6FaLHiWV2YBq49Us7eG6pD95NvyFmxQc1URLZWNqZZZ4gsVWAUTgKxLsVfA3MK3czUJaD2NnfVrwHmWvJa1zH",
  "key21": "53wbbSbd4NoKcaYrQuqinrr1K7r9XyRXPisYBfWd4EYp3rs6EHGjwQ8iboRZvLEHDDQ3yjW9LK4frSUmZv4jWV7e",
  "key22": "45gGbm8wAXoWzR4c8yTPqnct6m5huTm66w5brGqemiEtkQgZsDiu7YPKNT5uECbUDWFzHHdhmsjWqqLkQEdNhm4p",
  "key23": "3MmpqztYZtaquekYQDfHPWyStN5kREEpczMj5mTr5quWxoRL4a71ZBVupduuv1sETZqKJu2HkF8iW5FmvhRkPShU",
  "key24": "5nBYDqRug4rJ9yZevsELUGcYiUruTWHNKVbaM31Xgpg1U7wzM7Sb8zsq8i8BXPojqUshbixA9fGSMtqTqxzmFRrG",
  "key25": "3dc5VRscQPHYgd2KLUfxK4LUxz9qHwLHh2tkT9caG2CzGutmLYostHoXGihjTYUQ4R5ZA3GKeimBEdZJFSGLBNnE",
  "key26": "VfkPJX1cpzjQjkp7rqiFPbcB4ZmhsARofQCTqU1TFmkeKrYaVE5sL6cfopULWwvJvsfnkTQpBQNeJRewL3QEaqu",
  "key27": "e2JZqVqXmdsNE4SV9qYpmk2HhEEvNuEf8TN6Vqa1gpuSeUCm1Rkg5sUrCLZqs2RhpSxAKww4namCXfr5yvz3S9w",
  "key28": "58JP3fUjhNjhy6LS4yJE1jyzsU5svwGMaPenUaV5L8MQuNf1jtp56UYUG3EdMZy2hKiyMENZQsFCjZWm6ahKrbXd",
  "key29": "2v7WxWBh6MkXcc2P9rJm69fi6SdcvnEQUGoBFNg3DKMR6wqmLJDqwrrZav1yppWzwrf6EKU74Evg3RabXyEg7Yeq",
  "key30": "W2j7FozFzQUwA9fMBZGLEuDo9SD1S9EU52Jc2ZD6rkHPRo8ZkqP2BqqATf1fUy26hQFv3ponZRjbGfk5kk2fHzE"
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
