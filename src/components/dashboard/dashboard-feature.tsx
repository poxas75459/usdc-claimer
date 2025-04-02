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
    "41efq9bKMRjyspeetw4v2vQRv5EZSRDLWe7fUjZGLnhDCyGkuaA9ctECLEf27LPcPf1VTeZmeVG9upu4t5Zqzd6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTvve26T1kdmuPDvr4KgHENudgAN3YbA3wtyjWQD32wDf9uG7s67BtUVQf1ZvS58NE4Wmw9dJ81Rcnmkz7AstWF",
  "key1": "5ZNNCWdckML93p9DkhZd3nSSguXLYdL1uwSpcuyE4Eh9zjMn54aHMJyhdmf8poNCc6ZjouiMG2Ry1xb6xUxFamHm",
  "key2": "3XfMQFbcCw7nSK7BQEoqG4BWaRYbfULVQtA5rAViTXiVpjMGH2h4yrepMtRHRNBkHV1TKfoUkRLL5mLz7qsjhaFe",
  "key3": "US5skMfboCEbxFphjHMTsv5yDPMW9if86AseSQTcATSNjooKFYQpvrbp1pbTNxbgEmamfRDVWcLUbdBuUsLbZYd",
  "key4": "5R8fx8vMVJuKVVMhvgPDhsKcpvrhB1nVSvWN6BaG5aM9W67uT5HTWcfKNCNxoTW7MTCh1kwCG7J4UZydbFgpubZB",
  "key5": "5P6fds5miKmTND8YCiHiZWCTxTuaaKzCdfVah7HaQiHBXbCpjbtsFPdQrCDeWqWZw6zTPyyFn7z2Djt8zTcu4MmG",
  "key6": "2jzUKjgkbZuQVgKutaCX4rAiCB8WCb8FVQYCwqY7rHp3Z67MQMX6aMkqVt26ekx6E6huNaaJEfXFrReDP1v7AVro",
  "key7": "5jCJRrVsji5JA9JX9gZCb2ZSYM4is87RW1xkC56uiTKw6Q1mGCJr1fT2UiLeCeZtHsVbhkAT7m9DZh7STcp2EVc1",
  "key8": "45jqP2B4cbjes1WeB16TwG9VGceQBccL74Uh8YGw9WFM5AWBYjceP9wSw5nqLsxkfVU82HncfhRr3mmb2ysNimm6",
  "key9": "Gnutko8JCo1tFieeAeMFrE7yqDvkd6KrsnfNfHvMo24n8ys3sp1wJ51qvvXdzqQqHJDz8e9FVd6FHMeEk8CEz3h",
  "key10": "3oaKPYLurJ9Q23WSfqhmVWZtpihwpYtEZRRRsV6NsvzSjMYsioktqvVyQrjh76tC7mH22R3G4ruMMa4nSkvjiVq7",
  "key11": "3q2vzLW6D6A7HR9RnQ5BnYpbfUUcSBEuFF2jmiTf3a64wsW5QfJrh9MTx9wtBCpbETRxwhQyPjy2TM7dvNSEvuHe",
  "key12": "3a5ExqJuLzyDY89XZ5ToxNm3LJSzLndj2u8cUxVm3br7NXzENukPTRHQpQH24Cqp14k4e6CZsTxChvU1WGdhLpRm",
  "key13": "4erJoxV8RjDbk4rrvNJorzCvCmCfGqRSGzk1dzqTugUUHCGemAMUDBWwbjWLvSZcMvzaWuwiqvnEQjcvptYJhLTe",
  "key14": "WzHX3g5HQRbJgF81t32ZYJag85WoYJARDtWuo17fsh4EsnVpDFdxpqeUNjxX65NAAeJCwoFuskQ222DUgEi6YXy",
  "key15": "4UibBow8NoesaNbyFskrMky3575ndbXmpvDnYsHHVL5GLGa2kREZS5oSJZyTrPA1TEvtJNpCEZCrwwjvQKuxQWbp",
  "key16": "3V6Tutgi3yx39dZw7wN9HkqZygdosJqChENRvEuUFS3RRTjHEJrwHYQu2dtTtYjj8wrbsUmELWwMKCvEGS4GLm9s",
  "key17": "24SSiH34DGbQM7iD1dnJ722SA9cYx4KdjBiAmwygnPQD97j6oia4nAyLs898ccjxCZ7urdXXy5vbg7Ad2tZXxqUD",
  "key18": "3ipexdu87fx6qETjsCLraXfCuZrUpmEgDLjxVv1h3PiToyeGGqxqASvJD9K6zTnfErxNjNg9dMtH4rVHGiztEku9",
  "key19": "27NW3X2E7A2zDGjTgjBH8YsS4vdGSSm4rZdnTPQQb7eMv4nmf1Jm5kgq6XfFZZoutveSX7EwmR6S2zhtxkkpRpWE",
  "key20": "5S3ScCpSgx7tSUWca7ZmwnkipwQ7UdrY8nEPa7GoPttvWitot1YCm7vHa6uLPtynSjYjEbKAAYfBd9HRe7g1X66H",
  "key21": "UCt5yGm8kCqkitQtYMLK3iJWoVw7h43iQQK5dbeif5n6d5H7TgsEagASmFUe3MvoHZxNqqTW9qLJpEoxsr6dJyo",
  "key22": "3tJVjVxGPYmSUzHgdSnuizQ9NJUxJWWaLkcVHaMX8icNTVMSDPEtSD58qfUttJwRR5kwHeUFhHdZDWfRYocqq13c",
  "key23": "2zdDnii8uj2wsJ3trNHyHVENHwbVpVL2oYkrfN6cwZ2EqdFbRM6o4pLMqEViuzcUuTxh352Jg4TU5MRUWJQ435op",
  "key24": "3XHkKGXtR7HtSQMfcpBp4oruQoSmssqpjeoYYVuGWELGv8sPnmgr7c8VfHJBDnC7KPJ2QzEVDwHRsdRaBEv345vf",
  "key25": "4YsFBcJir8xC66wZ9ykpXWtRDocHmMbj9WXPfF8JSTREy5zMUC4coaG3orsNJfaEv5Kc8R8QPyWJ5n7fNpjk6u2f",
  "key26": "4kZVtisDdPhjpbuWjo4M61mNNSRMyfBDiw8sskRLsm11Gw6eswio6hAQG91G8rf9S9XMEFcs24QKXeg2GdtGbQkH",
  "key27": "5Qs9Fw1mr7tsDTmerL1qFeurkCMAnxKoD84fLpa1U5EUt9m6BR2xJai2H2NZJVUPR8UE6itfRcBNTiQ184jskehe",
  "key28": "2GtZdtQeQFrDuYW3xcwAD9LMQCW6VgaZfsLP1vTQSdE8LjiMygNJKDVkgW7sL7djyaQH5PPzvewL54UKBGsZEfko",
  "key29": "2wuVLS25DjgZkXMxU6XVMbDDEdJiLN6Pfre5pKdGZ527S9hzxLPPtDB1YM5kkmFjfZ1ph1XfDwrF8iTf8xxxd9nE",
  "key30": "2ARyA3ma1WDZL2HTqk93pu7NNJtR8mvBz9z6MjGfDtwkv7k2RkWAc6Aj8DQZtD2QCB7hGfemR4u37ST9gCFi9mqR",
  "key31": "5q9vR6iAY6PhUa2BeiCcFS9gqjbdWD758Kri9WkSi5dkbpmS6nqtQeejuhM42FC5NakL94kj9KbvaD9VWHkafZ7T"
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
