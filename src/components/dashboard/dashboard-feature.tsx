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
    "66ejU7B9mZSYB7125gEVYuW6YUFnxF18JFNMFpP9QBMsz7oikzk8khrUjHfuaZz2T6NJhuwct4PmXiwBvhCMfDqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vF7EeuRxzAATkvTvXcyJHKex4tHhoG3ahWXGRYGcp4tPbUNrEEZ6Rr9YvzP1yWcW7AY1x888q9kC9UkS8KZ9rw7",
  "key1": "3tybyow5sTG1yd2W53FXrjeJH9tjJx1fyUds8NUBeTPEzQEGbu9FDxiR3ELsHumydTiEsEQ3xbbKGUW5RN7YCUvG",
  "key2": "2m2EVjZcNQJ1rvfs5GL6jAGYCZfr7KtjFjpU5Dis2DLN9dt9iR1muNeEWmVQ35sJeGy7GCsgcMDuUfm3yJxRQZph",
  "key3": "3P9ETwhkftuDJatvFAXJiz4LU4ybeRMQAkbuKVrEzeo9rp5GwbiW4iJVKXMTeg7jWykGW9nVTq7GLMrPgZKYbcvP",
  "key4": "31esprgGVDDPJFhTBo7bpFstgJ7UxiqFWwKmYHWWFvbCSoTWtfoSVTJ5ggwH4FuskEN3qznabBgHhoYNxVovasVK",
  "key5": "5A8fcVRVJW7hmpwdxKz4V4Sgeine5CUHn2kYUQWugyfz9MhZhahSmDNnBJQtwiXAESXt6XUjBnyNrGPA75aggmWn",
  "key6": "5rYVZeL1HfYPijzdLQ97g351FgJG3SGydiwUihb8noHqQ3iX3gE88FhMe7ShxyWfGXYZ61BBDhHg6HAALg6bpaiv",
  "key7": "UYa6Pe1XNeQcx7AWeVXnL53XV9ThMwEZ4qmtHfNRx1juB19bgEf9bZhkrqfnHiKSTSAx4qmVLpHeXPgM5kvdvhX",
  "key8": "4kqeT59TgD58sW5R3mDgTHFyKr1BprWDNC1SKSXNApDw5A79rEdh8m4ifxyX14XnGDdjVNpRpLWcBYAWKbVn4xQS",
  "key9": "poCFhLJxuCgzwojdtY3UFdMqyLexoAQZn6nRHf5sScFyTw6nGzzD4cS1HDqfS3ycBKmr9jWAx1JKkwVX2nJ5qC6",
  "key10": "5cQuGQyxp2uLhanfMjZUjzQJEjRKX9woeQHaLxpvyXsPcdrnQ2iUytKs5NbpgKTK1ZqcEa8bYc69rb5W2eqooSQo",
  "key11": "YoXDAzpsaLVwmk5PNpVS8wBpNYscHoSgTMZdoRSuS4Um862aN2mprjVPdwvVvavWCqbh4ddRtdCj1DScM4gc1xd",
  "key12": "ZHSXDQ2aMVHXRdxcwMryYnp6o7SDwZ3E5CCbbqP36oCcmLWJUd6wcNnVHR69iyR91ejaTVeWD1UmpXsie3vY8kH",
  "key13": "7vCMAd1Au3EtZaW4tNnCVQjgbN7TkMe6BtH1eDVGBrLu8i4DJMGkAWDeP2hbCrjdm8HmjfA8HQHKRGF1wr18YAw",
  "key14": "5hygP8c8gwd3nWcCRMdyUja4qAxZ3ZADPwPEwGKMbq6uPz1WRkwHrwwCwCo2UfbkbHAzuTzvHviDXS9iFCi9Uu2z",
  "key15": "3TcnH2PzNrbu7Ab3e8X2GuxEFmyFnXLGXHzEQLuvXtVPUToSWduM6wbfoVJw1pmGZddbPxjunqs5pxNd6AnkyRpZ",
  "key16": "2SU96axt3eTZFomi1yXoc7ScJLJXE5iyuHkd8qFrVhyErz6oiJVSaB9WQQmNb6BjS9uWDtGnvyeoBjHvP9SYDCRe",
  "key17": "649fGxBgJpChU2NSyxyzm3nEUvTbr3tWfLQ6jr3EPMR1CgomtQoU2W53LcodLPLDC2FuvPoindAZ9EVg8mU52tCd",
  "key18": "2J7totqcKCF5GhFGxbhfu5S51Mt2y6vZsrwG4sapsjhjwLNFCZdx6gmeBaDGXiw7UxT53vsmxMhRWn41hWfAwkJx",
  "key19": "53ks7jjm8rvMe1KWuB7Ha4uSW2gdQp6aKFFLNwm3uZVvVggs2cJdoPpSmzRG5bULfMVm3uwSLyYWuv5bJBkqtrss",
  "key20": "3TkZ8USaH7HRvpi46w6TQP7qAQEnPV1ipoWUUW4sfFPFgz2hmCAHDF7i71mhEMiGg8MwbyTbH4fXhwzgfP9ZE6Yx",
  "key21": "417HdF5Hg1D5Cmsb7pkRgegUmzHwQrMyJFn7DzBPoNuZsb2GVDu5A6PRr9Xt8fyfdN6wYy5zmvD5VehBE6xdfjGo",
  "key22": "mKEucbnXn2bZ2vatTovSmVQWHP7Uc9DCqCXBpqFs3YMFoYLAnbNeyrePyUUr3uqRJsLrc5o2tk8PV1CxUAqn4SH",
  "key23": "4x9sZRa6qJgnAsVzDwjxcZFpMttEpKUxcyXdeUC1gqKsCKxa6g1tALKE8WMXXoJo4mPr4nmvMpoQEmCYC5mZr1ZL",
  "key24": "2rDZX4XaLfeSDTVhpS5bzbugK6CM5vzsN7hgP3sTzp9aP85okR8UhVFSXmjxn8UHd6Jan7JDetS1LEat5QqYGJsK",
  "key25": "5S5gFwN3nHVCeeVSPJdYHTbb71BWd3BuBCZiPp6Dk5nrAFpBFqtL1aiasCWjZYuHbRPdyvWUNNsAHXXg3a1qMjMc"
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
