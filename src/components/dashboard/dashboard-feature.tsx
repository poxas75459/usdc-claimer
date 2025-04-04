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
    "abaX6hyWxYu3BmbADiT5B8P4LqUWKXcRMjQ5XuHCXnKAZYaRfz2Cr6KvXrNYdRmxQgAvUMxBrVVTF5cVk17dkYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfRMzGfQKZ4A36zY5pbWRp5jy2oUfqGnHCYgvj1anXme2cBKKhmTwVGhid94up2DK4i7A8aDREttoGBhwBFqwAL",
  "key1": "3EM5ivCpAaHtZqZh1rZpZGhktcaTqGyofmyMMW3LGva73AKx7oK78N8NW4edwnPyZoUttvXUouzwovBS9SNafteb",
  "key2": "4G2qyGVur2H3W5GTwA5b1QRS1dQF94UxWdhbmRQ8Xih62uaHgUX2zaUMcPNLr9TzfXbs1t18bEMcRPpyy5exw8p7",
  "key3": "NLNbz5wMakA8wXfcVh4EKpQ6fW6pW9eHe5X1Xi88Lng11qFWKakXxhj7DijFvDPzbtz3bPnS1aFMouCLTGFc8nV",
  "key4": "4xLAYmTFHqTyBJr1U3ryPmfmcDbaFfJgkxTF7JyGyeWVLB6V1wtti6Qwy9j7HdQPsmUUhvShn8iYJ4bjUmYHU6GU",
  "key5": "5eLpzizjvvezEVvVmbvWJgMgZMKHSCCuCKtP2gv1i52TQf8P9mHAmDvLRVzPQkd7T86LHbuiLWP9KJxJWPgQpmUW",
  "key6": "4Tk67SbCt6WSqyAdMTLWoUBGHvckmXsMyW8xV3TpxnTKPPRxtdtwsUe3GbcTfnJdgkSDQVdi985RwrJEDTtiM1kk",
  "key7": "FPD77gU46cT97YhCtuQ3ecxknrpXG2jWUqkkeSMN6yJLymNTPJ1DTogWiak9tQ1AFw4yddUF6BroMoN2hNfWykv",
  "key8": "3d3EftyJw4pBvSfmfDZANL7ffJ6tS2KGzMNqRnVXh6uewqc63FUXe1rbfAcVMg4nCMmjgFMm7yRw5Qjpabh8ss8S",
  "key9": "64jvSgxHxSqc5b8LNYebzQaWqiPFU6V61tssSNh24pQ9wDYN9MgxG5RPRGPYskimC5Xvob6aWswD2v2VwhAudNQc",
  "key10": "2HreV9tLftkUVogrcvoPe7uo2cNZ1EFLrirXvV3UBYbfH1ynHG7CrAkzzouUMKTdLUnNaPhnQXPGHnp7s1tCXtiE",
  "key11": "2uwXTkDuv6nLEdzns44UgSmrWWuo9JW19Xm6zBjve2sDFsjTTEynbCWWVYo3sCs2jpJMJ1RGuFntHFsz1hobbBRe",
  "key12": "5R7SQbbPZFNGn8jUoZRn4djGxWonFuC2QWo43rePwA2Ffk6Mx4zqFVNLaab9crKdNbEAmywLQW3aCwkwN7BmyXSQ",
  "key13": "5h3pR3GYTwotJ1mdMSreaKQXZ5PGMRtxwH6tL2CFeJYoEhNU2JgQ5FTniyYwdDjj8qjdKdmnwf8VLyHYJBFBKFqT",
  "key14": "49qTJddApnJbT5a8URsJkuNH7HqnsxSdXyRsrbTrYyFFF4RGdxYsYs6nudajnGEvLRj4YyZuBr7V37ghqGddqrMy",
  "key15": "w1BK9sKKB5pWDDDva4MqBZWmv8yQLzJLwGEvb5s6C68zv1B6iy9MrkXkVwDvG3dtqN8hkP7UfWAu33sv9kGZXes",
  "key16": "2JysF7Y8KTij1gnCEYRsvC7KYTN4osqCJSPhGxeqkFbgxaZkj7DJGJ1EjfwuEYYQiZhDVktBSEb8SzJRMBxWYK2b",
  "key17": "4xCp598RuhLQe6FWYkJBj4jZDrvBcnTxUigtx3Y3QpX7iaUN8qxhoePYENX7SeBxMbmDygBi6iwA9Ur7gUirqny",
  "key18": "4orp6HAtfsyKANAfLNQjcHwKCkk45Z2Zhhu82Xs7YZ18ZvRPutLc9cjJrFw9n92r3LRUmJVTazcQdH5KQQTtUQUz",
  "key19": "334DSD8wM29gLCiC7eMvD4fJTrJToBJmMJedZfhGEK6948yCqMSE2ndgmFSgsiLaQbLEbmxbVKJRuMPoYYBmY9bD",
  "key20": "3KVC1VS7ZfDxwUxgdPqq84DGzkJybBadxb9f5dX6Sz1fatfp6hoMkoE9VzSop6m93U75doWvMvaeVthu83Q68tFf",
  "key21": "24BCsHorJPRoJJLSoqGLnoJAPmTYHF8F7QsgrCuxDsAK6E4eGScku5HuNYQTqdMgKwxHWMMauA8eSGKsB9Ma3Hwx",
  "key22": "5rhRXrqSFb2Zf3NE9tYoXpYTQSRMJkAqTbHo1ZzJykmPLgCMmdH2SMFSkccwikdFjaHxtppcM4x58TB4kWwmJmYm",
  "key23": "2AtuSG129KGntAeQCDZt7vNvm5iQWjYC2scznBRdRjg9VCYdRVHoEmHWZbJhJPgFpqAymNezmJCxL438eJMP4YHt",
  "key24": "61tgePsNUh8iAZrXSn8RbfqRGCz1e7rRguyWu1DQzDWMYHVnxdEcYkgrK1JhzsTYBWi3YHTCaCRvU5TA5BE7AG4a"
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
