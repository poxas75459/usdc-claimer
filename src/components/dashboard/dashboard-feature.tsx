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
    "3bmTMfxRUFrEiou2bhesYuzAE2nAWz9KeNcqMkZ43Q5fEcY5PxzNp1yUszM5krppCzcybveZ92KynxzvZo9GnFGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PfT7jZopJ3phnxBbBgSbb6jNwhvU2derbf7PrGNUVrxF8XGrpAi6CVeyP5JpkMmZhkFcEV4bxGv48HxaE4WZ7p",
  "key1": "3fJe33i1FEMEVW63AoevR58HfVfzDXr8t4Zf3ZtwT5H9GUFGEYjJKsQnNp3RMxk9ftm9ZkmaEpg4nARRkQ4gnK8W",
  "key2": "DbjaM1KgNd1mgJt2TFcyjZjpyLJuG1Jq7HrmVV86WAkuiSaDDXbbKYQh8HKPbV48JWR1tDgtUtvEdwP6SbLwKUW",
  "key3": "45HRqyjYYnNQ13i6tNk5ni4Gg4Y8B1FfF2aqWtVRGzUWJwcC8YFjp9LbEfFWUrLEHZsqXUbMJsHRXipo71m9NXE1",
  "key4": "5SwyGbxpcyBmeXkhJiJkzWB9JF6tQ6Nn9KzcyFkV7JebuNBirAMjZ9EXeZ6j7nS9QLfyHBJK6yTuZkDCEYhKMFDn",
  "key5": "igMAqDzwsbe8V5KuxGjAL7XTJMaZcJnW7UafhjiiEeFbzixDGYFLrDujkMA8kS7FeJuSzSmqcy6wy6Kct4ovbwQ",
  "key6": "KwjXjDXa5KV8JPCWN66d4V9eDGAy1Gb6UaYyz9aBb1BFTPHtKcrXAPLstdkFnzQ2xsCmpA49YPgzo3CLzgJEfbY",
  "key7": "5xVJ8cNnkQ5XuWFEyWkE12D2kTgsnAuiWFHcCAUacTG4SYyPiE3Epfj3zBYC3ScLBz6UQcaHXFhVHadHhw3bDF8W",
  "key8": "2hZBaiB37e7DLU2aPyqoXRVXyRo8pnV8knoYFjAjjuj1JNwKM2k8TTKjXFjBz9D6B2azeR2T9oW9aBAxNp4u3FgK",
  "key9": "Nc25cTTbBWJzoBHBBT8pToojcAHEyZGc9BRr4hfnnJEgX6ru1rgnPKkqHSx7knj1PKboy1yqQCJDDWMBCrTAbnc",
  "key10": "3zENNH1oZkPmwxztWd9BmFjkhjaYwCMNDj4TFyJYK2tqXzuoyuGR59tFdGEVaxhEp5C1DfAUtCnJJeUdphGcA3vM",
  "key11": "2xDifCNoZ51vEg32UJJUKhsJ3pAKiUixb9pbpmoNyAT8pi3c5PmF36dFL6w8dXALfjGUtfiNdFXTUT2gjfRKGc39",
  "key12": "EPZgJJWJzuS5djy3oEzPJPtHH2yDPDWWXD66FJw4i8LfKrcxgyzMgNqxYMckJTX2iKgP5c3nXxoSqehxDihBL4h",
  "key13": "kRTSg3yAaFWa8MswU1ptgZhbrFFnAvbTdPWf3hF8yUqNAvpmNVzdo7rkZfFmrWopGoDoGGgnMXya7hwyUfoAabc",
  "key14": "5ZhtwwUjGnc9dJpFKzYcW6SrZsgoQGDAqdovcWQ8CdtWLXgDacuoP3YGhC2BbNGNzKpp9wzhJaBb293ZEKaUneTG",
  "key15": "5Ay5mzH3zBWBQsx6x4Zpg4cCKaegUesw6iiwavSq5v1yc21eekQzCXBpK8uR6WwAyLMGprY9D4auGv3WuLEL4y4f",
  "key16": "3hdzDRx7DW5U1gm7G9zSqeTFythC5eLy8MDAwTEB8pqQstJkD43qZL9y5Btws3XW4ixZwRK4tV1k6fD7YGwgmtMY",
  "key17": "2f5jbgsXahWsK3mq3DiLw2fNtdeuRK1CbgFu1t7a2oWZPAT6oMoBdhQY1DZBTXhixrcAWX2MHNzJLioTazY5DMzg",
  "key18": "5TgYqsfdFtJe7qxbSP7LfjRkwFsWCj4w5NS9q6VANN6HazBRTHMUBE5NDLRqsbyi4tozNVd8DHWwrAVWbTFQSeov",
  "key19": "Z328fCtHUv7aWYUvE52qpLE2WdJPqmSRW21kwJYg8Nt4epS6A2DoTriMqFh3rZhqextvMtT8MFh7pLzgJixPHnY",
  "key20": "37dpMBpLMGSfiqTawhz83yk6Xw5b7TS5y1QHU1G328vHEuy2J4oRr6yFKVQgeTRp9ckiWMpddcRkV9aF7V4TTMEG",
  "key21": "j35uiYaTx26rZqiephVPLXfrmwnSpa7RHhekUtY9fVD5VvEaWb1G4B5kevN1SySHnfXTodmbpgD6iouj7Y6wvte",
  "key22": "5yErZj9JdKYekYLbzAvCBCuT5w5QZTKtSwb2NB4nc6mwNMsxuaezkcocxgCsWvqcnrQ2mvCLhExqgPetiL94JsXG",
  "key23": "5ckoBpzchw7oBrSw4DvaXsHEgfDwdZDKsjRwep2xaME1dNJP1eT7eMrmdwNz243xL1KthgvPoFmvc5p1yg1LvQpC",
  "key24": "oFf8kfhKzpVDoNu4Z2jzqW3RmGji1Zgq6f3rYPpVnD4ehNU9VhbLT8RjEuSoixkJtuAVKcf9xzPjB6YunStfZCL",
  "key25": "5WkbBYhZwdXtdM97BxQP4NXhCqGWGqKvkKSX8jwNTogEULssb6vawdYbV48JSPwrcFTzfB1NpXcf4k6t3jArDhnR",
  "key26": "2mPTa3UbHs64H8zXr1EfuwhnPMCSJofe9bgz6noTFrCBRtb4zHnWLn27WZ1i51vamvUftuA8TBD11JXX5KFnPkCG"
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
