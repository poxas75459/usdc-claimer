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
    "567hUH5AYmTEcH7tG4fDUc1xgjJwhUdrHb48UrB2vpeMhNxsg7GtBQBWhkWdAtj7g9VNVFCyhBZu3xyu4A5FhTC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RC9bTSjm62gdfCYPxAud9qWsgRCosoQq918M4biA9soQkgH6Ph7aG3CruVmBfP8XiFqvmymZAP5jD9DdRA6oxCg",
  "key1": "2aTP36Fk2K24QHeAmzMwhhXq116RkDnEgGhMZNJKbNibVe7Fg5iuUY8P9x9G8mC41bFNFyhbZeoMfApAU1XPFicn",
  "key2": "4RkSxGkkCuue8yMtKWGHhfbXLU2PqrHYtEF4KYwam6MYocyfW4LM8MUVrZBezAZNRy4HUZ2xJkDMhwMdyq3HgDy6",
  "key3": "L3kCGmfE227qR21ftk8quuYQ25SNWKEjSJFGyPmtWSGrS2Jbjm7H3Q4fHsSFxA1NMeDwMmacMgQvwubHHWr9DF3",
  "key4": "D9kUhajMdirKy7bhzqHicVFnWAdy1FrYqAs2ukQ8QvhRkXrppuJAEgczaNjpQKn97kesHsWLa4EsYcDXcMwJzDB",
  "key5": "3sfxJoG9Gc97Rbja5LdtBpUp2WQbmwi45o8nyDhWuMeXvKcjXVL4eN1tTShGpYqJWiFEjLQU1XfnXPi7JS65jVMq",
  "key6": "B4x3w2Z3hdwbvefMRDrWQFcwSiKEjhbFcj6scAgZBnvjoz5PPtqDendETB53yn8ZWkNNtprGNLNjFRpQm8nK1cM",
  "key7": "YxTx6kpzc4z4wuus457xjmYnZuXe7Paz4uQQUa1cCx8RFGcsrN4jqnxiG4FPMPcKg5Wsu4DjTSnYZyv4zEDzTx1",
  "key8": "GPBZkfeCEvthcaSYtSTh8AbD1Ky7DDEAyfsxFdiJmys9ttuVx9y3wbtoe33vrJLWtd5XF6VDvPTCWEvoQnuXseM",
  "key9": "GdMjLpNUFy1PmmUjmPSEkXGF7DQwbF7rGGn1YADQqZkMSxtj7QDEMJDiEVWv9UfeKVQEqNZfK2rPpcvtGz8d4QX",
  "key10": "2tzPyUk7po3TyPC4NHD8cSmTsrBTzEJda2AJjJVetQ4LJempUcxp7xZ2SXoMbf1iQteGnNsJwbKYT9gfShSPv2Pp",
  "key11": "5DPURi2huAN954x2M7Je1PNJhffjCy8bbmtaT3hDs4HZPiE3UfXA4wpezsf9Fy4A8kyMeJyPTDZ8DXSq4CEn2C6k",
  "key12": "4yPJqRszM3pVVtkiEhWSvh9T2oBNgqR5KTApncFo25yhMsysHuTWxpESguApGSvherqDQUkpP1eAqnCGKXbjmGw1",
  "key13": "bsfghKohtZvKZ8E867C7bFD8y3mxkB3DsGdMYj6w8hQ4fifgzAwJ6ukSVwEmz6DTjiNKhFwHdD3PWfB4zrCyhd6",
  "key14": "3mqXhAPqUTmU2rKdrC311aQKejqqbBnHeLN4s7qZRgAVjwiMouAvTN1dat6wGt91EHP65iaFyiBWfwf1FiN8mRWX",
  "key15": "4LgG4kNyPzWf8j4XgdT64SKgyZizcGrJSA3FTraQFUitCDJJSGcZt8SRehaaFESN1hXUzygKy1F8KN2RqiUHAr6r",
  "key16": "5k7KzkEENLspzbxJPc2HjAixP9HstAgsvAGaKmRGC5ps7WteDZqaGFRNhtc8rUwmQS6nHteZtc6MP2VhMCgP72Wx",
  "key17": "2FtYgyLV6mZnnFL6QcwQEc2RcBQebntqFmT46h33U7tPsm81ZACdsUKHu3VvHCmLfU6uimvPfeb1FJWVJUKQj25b",
  "key18": "2KTwmM36A6xH25woHCXV35KQ9W3Gipfkri9P2bbm6YaGxja3wfnP9K6dx5fqmemABAp2dpZRw4t3xNzNYtY3XLho",
  "key19": "2p4w48q5VzzVw68aKFEqbb9zsHahUUxzVcFRF99QtkU36HbywsszzCVaARJW2dygGgt5x3wC3QumgQ5R8Y3WuzBh",
  "key20": "5xpo6PW67MX7YgqqKQFSa6Rx2fEzrfFKWxWNyQaJQY5eMBArAn6r5KTPBDRJUxASRX9MuerXqDqEa9oJRtmhq39x",
  "key21": "xwwLvMqodECWB282hYqzczhqLhDStTz5j9W3ZaZKyiDJusNWaxSmY21WGTPGwev7t5UhJkUk4UXuqkTKoT3E7Yv",
  "key22": "5mGNVEMSGjdvCPmUw1oST5gy9SDAsDQQqvvsxnkDwPHNFymSHfNUDi3s8L4rutCRsXfDzet6uKh9C1bLnmfXQujg",
  "key23": "2g5SYE1pTX9afe5G7FhCzRebJVWxaDRrxH6PJ12hEbascse7BLSgTUFB4fKHLA584LL6f95L1jT4HBqhAcWV37FC",
  "key24": "4PdSimBynBRAxoTgnEWQcs7qDa8ctw5fAAhTK3EpySvRKctGTwUuWx1Xk3CJgHGtVMXK3FDDGqrUw9mLzid2T4YC",
  "key25": "2ZcAdPstvg4A6asx96C6nEPPApeFXBEaA7FXrPvnHZpM2khhTMXV2Z21nW1T92YUCEkyAEF4Busi7Xznv98xBUHD",
  "key26": "234vGPstrFH34jPiWcQxrQPEnFrJYxEci9FXwUA1c5HaZDR3yfPeikCzUo7bGXHtGsw64ZpwBseLVMNiVmX1Vtmj",
  "key27": "5r5Prz1eskDzAqcX6yY28qtrTTQceN3yhobbyUtFfcbCj56YaWREUPkwVndHRqegbK85pR1ihijgd2UZeihFnsgh"
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
