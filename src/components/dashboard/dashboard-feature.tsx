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
    "mNiQ8rQRfEHEPMwc722YP5pQakxob6kCp7YuR3C6qTPA269FE2kfxh8V49au6RYrHK3rjzGYCYNeQ9VzQajF5wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkuP5ePHkbexjgu6cV9TgMN2JsWqtF76QcMZ2SuXkKVSUb3uzvy4bmiN6fLds3eh2ZRxSLgE9ogigeUtSdo8ur8",
  "key1": "4CPU8ZYCThgdWuQgZPAkm1ZBSWc1CNSoTf3mKZHGScKysFq7NZErS6qC58Z7Hky4QCZ3pbmGo4fSAX2mW47nmpLC",
  "key2": "4MtkS2Mjw4dLhRjqFHCVe1yfwnkg71K3voFD3wMgNanhg34Vqo8RJxUgxbktssAViDz9Uyrzbaye7Jo1JpfsyRCu",
  "key3": "MWqzy5rBZyCsoKPUxvMXCLdDWDTFq8GWbi8DG1WA3dME6fFM2Q5ZRHa91jPnneFP5B58WaFWozHpvQ1zcxpuMCL",
  "key4": "2QZxwtiuW2BNs5VHtr8LX6V8QJbtopGnT3t2urbdhVeWs5HqDXjLbarw32B1W6uUVmC8v7nVLBegpMaMqZMMZhU2",
  "key5": "QSK4PCRmhTdS5eViSoiPtxFcwhvHUf6j496fch5zxXkFirFgRu3PM7tCqd7wkR9x4E2NHuKQcwGLQc2c2BaAngU",
  "key6": "3QhoNNd9qrdjYwX91FVEPTUd9UpXomxpUDPaWunkXjfZ4HwiniX1msLyJkg7zeoi2PYgUWdTmTEhYZYT3JKgMwZU",
  "key7": "5P7idkrjuk6C6nbmxpwAA8hrsNixeYXiPVyKJLLV23dVutD3KgKgaddQJkPVgKjcqv89AsS6iLKAa3hVTzKBcXTZ",
  "key8": "2qLMf9osCA3mVpMbd34XnzQuoCT1pPVsUeg67MeF5S3qGXrcTfkY8x5WvG2a46qRxu3NGT7BZQhvNmnXd5sXftwK",
  "key9": "48b43ZvCYe9j3pZaisvpH9o8Vzv3yCCwDTYSFHDw82pKP1Dx5tnLCQP7kJ4jDtqa1sHXWPMgvWhUkpcEkkPQ3EFQ",
  "key10": "2ZRj4xjdg6GbgHMrsG6JEMTsaJSBn4ovoC5jwxosC6ArFUwa9nwWQoN3CsKpeJUpFLdL9YHBP3o28kLQkkFzyM3w",
  "key11": "4J4EWRssRH2AKqqTLvbuvbw3PBXAhnGoDVTvX5EjQimeBRddVEWheudNZahSNR7prmiUkYZNVcFRhiH8UqVaxe9r",
  "key12": "5MMqGspqGmfh3d7DdJmUYEBjv4HHtaqwt65sN5h33269QofpU62descghMY5LtxeA1iCCiN5vhJw3P5qEzfK8DEu",
  "key13": "4DTYNAjFxvreDQSauYy6HQu9YhHedXtvc7SbDUA5M8MbLi7yQZoVDt59uvQ5eJLnnUyC5wdJytCvyxQCUp333HkL",
  "key14": "5c7ojsnsfedMPo4E1rVxJ8J24JsVnFihw2TxBNyoeB4grsdDk7usfsHGHHVUd8YEo9nssUTAw8CPNznC93rDKjsG",
  "key15": "2ZFJnwD7hUH2Zmjt29c9SugwCLSG2Fsk79pdZPxnMLnY5J2zgNphtzyrQDgevDYhh3GEFZBfonnS5oPeVMWUrX6Y",
  "key16": "4kMHrAxAYqbAfLrUQr5RKaUDUBdqU9dq9D8kCWFVk8vT8N1F6J5w1Jo1zt38MDg9TqxHkFYTskH2kPaF4xxTtMe",
  "key17": "4YjaMtxUtq7Dj6tZHL6YP6FJED4PAFwavGadwzDKrdTifD4iESCZ8yPTBMCK5fqSSaXoe555AVGSGg5f5mgE7aER",
  "key18": "r8ZPpfYosYVajS4WzgQS7Kp7RbCFEHq9UhGGj61qAMPfRBxw7bPtwcLSXa9sy8QJwSEy2gGhrUvduhn4kuLs4u8",
  "key19": "AXPVvDsLPs41NkCKUxFWB9r36AJBcF6AqnXySNVXUB5c1wmvuHUHgQPSNnExMBFGswYHsQELfkzTnxjs9TXA8zU",
  "key20": "yHoCu1pZwv38Mbi87UkfMxXjfuLqkC2uYif6K7azvBhYNbceuYUjptxZzhg3EMRhR1DEn5yFsu1yP7UH9KLLBAp",
  "key21": "4jKZUhDgVp1cGitW2mRqMbDonkZMVh1X2Ff3pejcJ9czeX3eTKNm4EyDB9tRRqtMTpNC8gkWYxJN9f9foZfkRSrR",
  "key22": "5PvjP4jcuMAdqpisCEn8u3j6xYnzi6wZy6M7jcqN7q2yt37guUFcHCZjS3f1UtQXPJusZdeDGEZ3ZeW3VdqqvpuZ",
  "key23": "31jEWnJpmD7qx7iGrJyhNjN7YC5q7GSR87PRfodTToxDBvBQxhQuYfebwRrGP8bb6ooQmDLqk9CGYJUaS88FA9Si",
  "key24": "3HTBQs9HhnSVwLPZhm5VC8q3Arqk6FqSE7iy8vkfi9Fb3dWNP5AqgWX2jtLNVNpWR7XaS7Qu7qQBnaDHFHQPac3",
  "key25": "3y3gANq6hnoMdqxY6b3ke537t3sE2g3mBFegqgvB3mA3Ym3MPijjVwdYjnj1yNB5r8yWSck6gnyH5VVvcsESRpAF",
  "key26": "2XfbedhQSiNydFTixNXSuP3RC8Gi5qmZJ55W8nBLZt5nLAJGgrjudHMcHn21HmWaLq4fYMYef5a3MP4SRbEy2F5q",
  "key27": "EZSqUh46Qe8sRaLMKK4XjmJD7xTXfdT4iwTigqBayQR3XBsv8DBDgkvzZiM663HG4soS6oeK9Q4eewTc1N8xFE6"
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
