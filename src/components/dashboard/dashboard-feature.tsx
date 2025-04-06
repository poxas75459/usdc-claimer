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
    "3Ag42reForLbkmVK2AKsaXJQxYw1mYpG9yYkLVG2gysLfy9VPX5sAkkhEathYZRWxWTLSm9r6hfeByET6KikudWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fvYCAgnfUtjck2cYw5hojnDTPirz4LuRaSFUhc6TobGechXVeewH3Q4r6QaD9AjHs1tnJbfSnYwAHnmyVi8pDF",
  "key1": "5EZ394eUGNfSEySgr8e2BvdVH6yDGt1AMdawtjtwgN3XsCqwy8WrSchZ8dN6rTA58AVUH32Qt3PWCQ6ZBQmnyLtU",
  "key2": "3ej9auzUmvyqLhtx4jeHgaVqaQDyzUTbWeHLbAVqYMQYrb212RZ8EKhX7cdwFeUKZ2R7bpVQ2dQHLGGc7M4J6apL",
  "key3": "3ARgdh63M4JHdEADpwWvNh6tXN68HFVThLxku1fkJyKVTwwiSDKdxtG2epQmRfkFZdk4u5fNLZkV3YGYNX27z84V",
  "key4": "4GjVXcZ6Bb1huuHo2VdFWT2iTDQr9znwF3bAZf8Kpb8hM4Rej5aX1hs8DQG1XgrPJ5nZ8KPaWV1pHPBRLzmy2zmE",
  "key5": "4GhgnA5uAeDxBqBTpEmaKuRWEmfBM6utT9yMzwKBsSraeZNkyyq7WYXmJw8XyvmQrSQebfQRbBUQi3y7WaqY2cDH",
  "key6": "4AJqu9KDd9ToxwApaP4WJeqzoL8WXekodbP75E4K4ayzccukvrBVTHqpcVx7Nsa3jWim7ZATQ6A95DuQENauubj4",
  "key7": "5PpsFL84NFxLz7FKyXW8wx79Yo7q7TiHuEM4hnSgLAnwC4kuufB7Ej1qNXGdMSSdBkJGyobm4kNCAGERZQpV9tC",
  "key8": "VjdUmQFjrQigZkyJZLn4GdaqibGWJgqLUYY5jgP1TxXbFmrM6D2UXn3wXguKFxKcU72shJKAdYR5wkWCDvKzyuJ",
  "key9": "2yLuC3MFg7oZT4vrrbRSbnBEYQsqoxH6vs6NnzPsA8XQwHpQ6wLpKMfiza8Nk2nFYkZ5QLDseV7RvZk3uTPDdfZL",
  "key10": "5nh7atCC6TZtbLH5f49UW2N4AfstuQGzkRsKFrhMZUgaMCqV6RjwxA4o7TMQq91QjrnRi1zQ7wrU7bb9SWZKLGz7",
  "key11": "38AEHhbviuacBEZTwaL7AF98zKsamK3e7KDNbkb1DfVFtKbznGNsf51yf8osBiFdcee2gbR3FrsfyLyMFahV21Hz",
  "key12": "2fdA14ikLxDFuczBhHm7WqXUhQBGsDYLx5z2NwsuN14jkA7HqsgZGwaPeMTWS3VhDYyuRvupZSMUDZS3hsHmGe4a",
  "key13": "23rcoKTmmGqT1aGoVSkZx32peTaPmjYJBED1NJAxrBadKdEybJX3a79fz3JfkBxnTWreWEkDUv8ybC5sEV3P5QmM",
  "key14": "4hJdc1fcQC83QGtjP274qCngyqd7Qeq6ZcnbaAzy8kt8Q12ZjJaneBYw2y671T3NYuAGznRydPR6sGwYAf1WHE5H",
  "key15": "3haDqEj7ESStPxmoYdUS1gUdXB1SfyBHwBjf7byHwFWpbiiqJ6m3Xmik2AB5h4sbKiEUELorFjdYjcw4EkiQA9yQ",
  "key16": "4UroJmQiiPY1gS73asTn7G5XL4CwQUgnN3f6XEoL6qvVHtSu6GmeQs58bit31FKfF5q7u6s5FzSu3ZxMyKVX37hZ",
  "key17": "4qu8GnrM6oxfmKwYCDPtRxaLxA6CAVYW5M34uwcc1TDWAB4LaPrzg7D7KEzo67e8c4Y88AFwXbYWo4npEMSiarkf",
  "key18": "2FfVQ6GRSekzXYe48aHeZwpXt8DcEeYYcmFUu6dRkFufP7Juk5t5nQ7x5mrsZp8e158uc5MaNPNKQEkFapt5umHP",
  "key19": "3423hKg1NLP1A5ot5dT2J6LhJqe8VnsZp7mMvUqLWzovs96qpmzMSVCPGccyvC6BevWbDapZQ8AnqN1aVNCCj5Bb",
  "key20": "4CmZyH4HvsQqGBb3u7AxPckpaUxQ8vHdRL3RXY8TQy6jguNLTr4nM9NXV1BvmGbZAzL4mwgm8Zh6cLowovh3XkZq",
  "key21": "5p6f2f3ect3V3v2x3zVZG6cphr7pVit3YrYd4oxCcXYCxMPNT914FqAcN6jwPZ37XdHufxpbegg3X5NXk6dCBrLx",
  "key22": "5Sx7M5vzkQByAzwYYyc8F6C7utdSdRwphFE8kWK396e39tLQNfof9jp5eeYkn9JPw8zQdhianLz8DgMh4E4gbsNZ",
  "key23": "RyouaZzqpWrWg1Zuzn7vfR9Y58wT5aWfToRCST4GGPnzNJyrTcPP6pgWQM7r5NmeNBFH1c9hcPVgqoHHAZ13Jp9",
  "key24": "3DcXn2Hh2hS7GGMQJ6cAyP6Vzbr2QckiKHpErL5iHTEYGZqAnkufPnr65e7NJ7xgSYaWkuKNcZ9w33sqg1aei5W4",
  "key25": "2CrVCdpRjUHpt34H6bt9RpzP9vzy7yMetvP6mFwZyirja7UtKdFZuSNNFxJyckawEzBAU89kcByddLnchvG5FCFr",
  "key26": "3gCiqwVUkpx4wdZ6bVua3Xaitz8QCrGTaPN4qbNAxoJXNQnjVgEabfiQmpL1P1oyV8d6cQmxmH3yrEzSA2UaBCSC",
  "key27": "5zHgmwDXiQ41PCsPf1JHsNf4oHuZibpHqPrccTe8hiuhx6gejjEmLh3UvWWxNvQCDMMGjNkB43dC4WHqXoUTnAnG",
  "key28": "5byN73iWKtoMjigyNKnzsMe9whMsg49yki8bggMjTP8EC5x94NAxB2W7WqSbhU3TNc7mFXeyM6SXgqoFrkkaqsUV"
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
