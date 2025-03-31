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
    "2gpj34r4RbmLfwvYBsLMmPZb64Qjd1hr5bYiEA519xLnx52xSo9a6CkkU1S2ZRw7Y9AGYFHHHk5TWLbawy2RjqLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9uZnRaz9GNxpWdFHauCTMmVRpJT3TMdE59Tsf7HQiwtHfJ38bCrhZ2bQGcdroVyKu6Znxrjbjm5fye5kM8sRig",
  "key1": "2mdTe33mRUiABEwLMbpnPrfJjS3yKPc4tZow1RyGHmbir7m35QVixsNykCZEhYY57rxihqToBSdY7xVoocs9mt94",
  "key2": "3oQ3XNae89JPwM21qsDsQxyJgGrwj4RtgmHuNmEtsAisu9Wh1p3tUxbzQztj4v34VssWpYVSR4FtV8jTQyr3dAfn",
  "key3": "gVpBABhgQWVhoDEqufUoQoPSQwXBnWy332iD5WnkhNivFa12WM1iPPMNLNgJB5D8JdvrpU5Coe4Uvqv5hM7JK8L",
  "key4": "2ZsjWhFY978Xmsuvb8aiVAv2r1GMD8iuQnBY8z7Wqy1zgfYm3AGTw79FUvsEEh9iKEupennCZTPkGXT6ckN7YtPk",
  "key5": "5zyK6gXyK4tHB6HAU9zvyxQayupQopxr9N37XkG5EZsQvxGt11631VHgPhxWEWwJbRfNwjipos6dBpZkqt9yVBtm",
  "key6": "V5sCcZHrhsR9QcpeeD5hCP9j3tdQKkTvrnVHBk7KGGhvU2V7RwN7heQHAdtN5LKSwKHd1urspXkFJqeb8NfgfCv",
  "key7": "qGmA7gUZaJ7DMngT9ZyK5HdiawcnDpNyG5a69Ui19UUpCRPibwt1LPRL1AuGeUi7F7nLG5wUdmf9R8n9zvU1Bz8",
  "key8": "2svnmi51cYSHF39MEyVjf2F69vXWVfcviApMb5pB3iYvZ1vqBhwZDKYswU935pefhaSdQZr5djHhUuMdZjbCNtYz",
  "key9": "5bVNrYbKZGosV3L6WTH7tpUypMUFw5cbGwNcLq1KBkJRh1yoDbX9QCtcnPu6VXZTn8uV2axerjQWfbD4tqif2VSN",
  "key10": "22Mqy9FB37W7fVXm2EPxNnakLVqbaAUmGoRMk8SFRNwkHCg97hyFMdATAwHEFD7GKK6hArEzSD6m3jH18eSaCKrN",
  "key11": "3D7YmgATevxXTv3bgtRmzs4xCGqKnzofqmsQiNrR56oUnpT2hmc7kH3Q7nHG6rMSu4RnUNyzrfmBBk8Bpr5FXbcj",
  "key12": "MqSw2GzWvMstKs1XHAsRqpPfuLVuBHiN2cQu7sBcc7pipiUSp1EVNc3wVY9i9waiNsVVZLVU2pAnqoH9ndCisMF",
  "key13": "4RX7PtdxQdVZWFSkFSAthPXsGpvR6wy5ntx8ZzgtrnEEVe9aaxRF6AqzA9zk4auE2ogp886K8fG2ZXsh3LWoeLvS",
  "key14": "2HSu7uQKh2LF4oJw2H9tf5fFDxByaWvBxaSZhPm6inNVTag18uwVB23CMmyMZYR6oCDdxWdhxfhH1BZgSdXFXYYu",
  "key15": "Bf9a8jLhBD5VGscEXUmtfYkB1Y7hYWBF9GkgtjVWAMHqYv3TfiyCmVWmJLLhi3jDu4XbYEuG5oSxBCkm8zpmYQb",
  "key16": "qtybM3mEyFCqE7x6TxviY7SES6iwLDrm2awrW2pX3fEK2pFvGpv7ugUv5NvreYrbqZkMCmRYnEBx6JNYS6KBwJ9",
  "key17": "4Vo8JWvx69jvo2FSfoSAN8fFA45cQPhGcHUvq5THweZvnvgeHJNuuSSV1L9w9v4mYsRDMTW7BBEbZDzuHcw6jTDT",
  "key18": "5HdmQ29uMJG2iZGRjeCGgbgnnYB47ViodfcR1qPQqeQxGEoXvvoTopK26tdT9DTxsnbvRZJR3fpdEweuSNwTVnZq",
  "key19": "4oAi1f5c8tn2GbAi8kNMDb6SSEndYF81GwJixBzdkDK5LnCGGueboTgCAK8w9Vr2zyKcfXFd1iJfKA9Q9KJCkLQq",
  "key20": "4HCmUd5vYN3nPWo5vk6LZSMbjdZDzotpgx1M3dnas9t7uwvC3QrYFjXDN7cy7429eH4X2huGQsK9E7f1vJikU48J",
  "key21": "ysutsGbsLsYYfoNoJ7b6kXahyNzt8JyUHyug5QhGdNfZTiU5feJ8TLW8sLuSKJGQBfF5cvVKoP2W3TF12LDgkJn",
  "key22": "33Nyq8kCKW3sWp4xQz7kov6x3C9ooQpGEPCNe9wFRpZKK2vVoUXb7Yvi5dEje6Cmi5dmHk4Wt3so731eDBGqUxdb",
  "key23": "2DmoQHAAgV9xxZ8tzkYBjb1RGYeDSSwc4P3BfmEMWVa3X6LWesPh2YopFaGnhHtwVFSnRtoAFp3y3NjJc3nzWdb3",
  "key24": "65CczBNtyMK4CzfiXpQA3FnBPohQqFsr3mBPavjSPYJYp4nbehTjj8Kdjp1VVgLeeKzEBYHzABsxLvgmUWbGfgAH",
  "key25": "4wqoUMXHNHMxFFfZ79YEPUw6jiuxxSgA1wXK8tTPtFXD7k28vtRiXbY2X12uZiei77KhY8yypjDtX46fF8qanc3j",
  "key26": "2i3ceRpYzKHBQsSU5AipTP33m17VybZU74UTnM5CwTfQsaQKa1zd4m3nU9hH3GW55DYdFf7pDk18STi4k3kUoFLW",
  "key27": "4NDkQgsHKk9EXpXV8c5a9wB9UteG87A1FZYamU8H1KpyFAkKTjHj9RufmTy7RtJaNYfhvUXyfvPb8VVvfWK3JW5B",
  "key28": "2iNXurtm6cpqVjUFLbxDRo7SRqaD4UxNnhQbGWtuMXnEJEner1rybui7XzxEjZmrhVeeZ2dk7CsVaMKPP65ajiqC",
  "key29": "522odYEiagMNu31yLeoYqaHdozGRuTMkTKLdBw7SCd59ykP1aseQMvNuNab86tZdKtXd1VRWoXfESfE4xqfKAr4Z",
  "key30": "3okuu5JPuC5Wji2LEHDitnMRCJsLU4S5NVvGXpYvz2Gmaqi46DGd2PHEpVGBxUdGG79GST4KvVEutTcBuCixK7sP",
  "key31": "3a56DggzAWomuyH1QdpYAnSHEWUcKHy3PhMw3zUbWYaWcyvBKKMAPas2o2TozTrDhFyrqDJdqmCieetGf6rV4HRb",
  "key32": "3et56WKpdsc8tBMuQ2zXeiCQ7pDKdtGZUZ2AYbPpp42JRjNvmzJX7gdpHSrYP6DzCgqNEbXcLzpaiioXuRPD22ed",
  "key33": "5SSMs5yLeiQaics4yeiio76pECGS4KmNPHws8f4AFW95QsYEHQrG4zLshvEPuiFry5zVZxugVcQLtW5Cio8R77Ra",
  "key34": "1oRipyDBR4XXLLa9vxYRVJpNvnBhGHC6bLhLSV7h6MUKaxzhtHoFauqzpbia5FherMhJegwFu8g761YL8EA3R24"
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
