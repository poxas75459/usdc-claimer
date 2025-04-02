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
    "4tkPDgq1UhLYtXG4ezhnLqpxLm5eLa6TpahBStbw6bBsBXr5Htn1Py1yo2BRBHGjymyH7oYsVsV5qNBVVjDzumBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66C4aakrSLXLnhuUo8SfWQCFQykGzp8fT3Lk9xS5LkcPTQrSDioPBmBxqKJRhVaNqLTcKpyKu2JcybbJZ1EBes8M",
  "key1": "2ev5BdzYWGRyjy27Bm3GPkYD85oMmh996tojHHCa2mopFVwFZUtVZXBGjPxsvy7BjdJvRk1mgRqgvzEq51RyQti6",
  "key2": "3SQMyp8UW2maEwF5pM9tSJbX8zQbfUHBTZHQi8JcwwsZVdiAxu3cD5C199dGCcFbHxd4MKoJZBPWSt59VR3ifhd8",
  "key3": "Er5HZ4EQJaXCkBUPGXpXS41o4vnvZfNY5NZievfYvGpeybDFvx6DrF4hVkNWEjNdifY7qmq2GqAFF9EAy7xX19Y",
  "key4": "4E8wjcBpsJHapFCRXhNExEH3xBe1znTQhUUeUdquL2jSBhQxzZC6q3msXo5XsdJXxQhNmiUGcxAKunvUcTjgL268",
  "key5": "3dNsYgiTGNeKi76rrBsSC2JkM6vMHzq9UfP1qmQ7b6FCYjhu7WySSsLCZMEeFZMK3DxLk3MSfq7PJqS4i5uAJTDf",
  "key6": "4JcyLUp2DAZrrMgKTXeD8PGCPN2jRamCveTvTacFqKhsXqMrkG1PHHkzYzA1pwGS4BqhJsrsD7a6mYwujaTWfsXA",
  "key7": "3iyav3qhA5N8vcPqkhFaiPBEiLta1XwcBg37LubUHB36E1SzUipcYhT39XguQ3pSzQ9C9RcMU165vJgNPctYe8d9",
  "key8": "2K7VdsocdbjCe4CSpXYEZWo7DASH1C5Sm25UzRJFC8qieN9ThtUhURAU7SKGZ2cyjBBhskuTDE9LG3etP3PsfUtc",
  "key9": "5fnhasUJsDSKCHiS6mRnEoKohhWhCXMkLVpdv5MuuE8Fs1Bt2VewfcJSpqFu1M5VAxwmDCTxnDHdPVeYSqQjknkh",
  "key10": "2JwBF22qyiYJ6xy2qGCXr7STenn8gaqmx8p9hd2Sj6Da9N8R6CJkPf2J2Q7XfmguwBB2yqSazrYZJqEuKUHchKNk",
  "key11": "bWw3kCAU4Gi6PhGaYdjWzUqg58XYBMzEuJVS3v2GwQCA5kh151QT33LXMeyicnZPb4UyD2ZSdQVz2m2ALtMmPRn",
  "key12": "2PbU7gJ3y2RZxWkebzMyCaryT8YYnxF8SKkko3qBKmCXZjprHLU3doXrVDZNPvvaC3ZeptYfohbdZhFvjdMZRLV9",
  "key13": "n2WmFAvCGtNzZySfaRfZY4guXgyNxLg2DVCurfphun7uDkTW5LkzWPR7c3UrBkyGoWnqfjZuq5vj6E5UzTBvcdd",
  "key14": "2i36uhK24cAB8CnQuHAaNhrc3Y2BmTK28X2C9vx2PP4MWzYcJ6N45mbYpKtcxNqyeXEyaE3k3CahfdqSp9mRfeDa",
  "key15": "5TK1Jw59KkHgqUGrT41FL7VRya1vTEQ7exGXULHD3Pcs4aZmrdTkXsaqfX1HZK7d3wcxXYg9gRpjdEhCG1tE99Xi",
  "key16": "4G8ZjJVAUZkuRKDL3APzvnBmZBDGgAqpu8Y2F7G1Lz3yUf3NULUszE7bEdCjY8kefMnozMkbEaWjgupCKJVbdBTD",
  "key17": "2zWE2n9kqEfgDdyfvyWyeKqgjiG7Tb6AbdjMykPfUSVP8kcCUKCXayTC1u1JWFqhAFk3owgWRVZHt9YHerNmKdSW",
  "key18": "5y7vnhcCjYxknvQi4nmuwWsP6k7Urvx8SvHPgEWEKVs72JJQ1cQ7DosAfKJM3ojQwA13Tvj74284tYmfvWR7YVUm",
  "key19": "8GvnZRnHqJBfbJfQPREjFakihYarxW83C7HripkKQYs3KQ2MZzwXFFRqS8LEAbKi98J8XYqudCVMRARq7FDXtT1",
  "key20": "5p7ueQvTkbECPMKVfGBJZTFCS2wz8vmuBsNwQ3izvjvULN4gGsVUXL8W8fBefehqWiCEWCgHHJTK2uf4yFERZ65c",
  "key21": "5ohuFPBfpGVZ5BYzMmgnxZnFPnMG6iw1UkdoDYMRUffK3XgC87wBPxK5jpGg8V1fUm1oNcA1pGMqHGwCYmpWY9CS",
  "key22": "3dyDZDci47AxKsKD6KVQ6HYiNU3maKi6oyzo1Z2jzE9gindGpKHskdWxKEbjc6MWiJMWFAzar73DSZZSbpjjJ5pT",
  "key23": "2mgjTqeiN1AgvYyXGezv6E3HBBXuK6kJfoN3xhvuTnBJkk57XwyvPz4Macw6rWoZKJHJtEnLU3JNF1QgyCdwG4Yv",
  "key24": "3qncemCCKUaqPtBmcUcVjLDwmfZ5vEMthBpCABiehMpYxbJKbe3Wc51p76rZc6Jf7tUF5aiv1EURDkiHJxxje3uA",
  "key25": "5wbeTN921ayU4nZJtL1u5Yttb1curtBo2dRYCypFS7d8BGwspZir7rhqVdGFuJpkaaQRfPUk4EpH3ADQN9842zJv"
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
