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
    "41g1WmQrkieYvUphEfMFsUhXpwKLC3GYN7igYb6hYbJg1DwGYYQXyF7N52XY8rVBpMRW8hsyscoi3k5BYwLGjesX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEAEDrstQJcyfMKiGhrhLbRHwDgHTRKgqzACMYSy34JRRpWi5RdiEaSnn5vyEpzvhB3p812c6tAgLyCWz8CMD3C",
  "key1": "3fQhYn2VhRA1LEXAroEiCvjX6jKEuD4EMaRdAFwfGv5xgoSgwtRN6BTPsZ1xkGAQHhg3CjopMwTpQcaoQLT9FX9V",
  "key2": "xAC5HZktDMzBkyAtJ14fkarPkfuXjLXBtFkUGud8RmsvuNKaqV2E92ZzVuNmgxEJc5ifCFS2QVwYx5bNEywrEtF",
  "key3": "4HMqiLAkG4yDfdRmbNy3JbpqNGLhK3PMWLb2UjWKGtU8RHmrWLYfzmRssKAKRdebnKeFnJZLroP9y2vt42YrKYWn",
  "key4": "zxPFSix3T9Cz7ktYrxQfzgg7H6bB6kqTKDtq8cSjN31Lcve3BVshJm6NRFNXae7XgP7F9KESrnuCjALHYUDyfaE",
  "key5": "3bh9quErALmtbXheQ5Tm97AtqLbRPnBnsMiFuwo7P6HP9kFoNnwGeAHogwpiNNRtH4AAEsjWdquRtatEt18LWqg7",
  "key6": "5Q7Xi2zhL67gGYqYEmjvXsXejKZVhUYrsyAtUurdkhF3nmee1hB29yYgho8PRFutU3MicacgG6k4AoYMkotqgPPv",
  "key7": "65k7Leiqw5q5n1oASCwiUDxYd1xyFcsj8YAcwaZZPARRh2nQJc7PVRtKUT7cFvPDeGx4JhcKSyVTBJDe3WUFLUzw",
  "key8": "47VMN33rM9edBiHz6pdqQ5DjMEmcZ96xHnPXuDLGVV6YTEn63DPBCe3UVpUZeHm8KXBWy1YTVd16adRpjCgaSspN",
  "key9": "44CQmttv6R6azBJJkTuq6aTJdaiKRao9BRaqhbao6FzjXk5XD7Kc2D2jduNb11hf3oCJXridk1iFMvxsxNpnZqxN",
  "key10": "2c3GeBzT1H2nRySq7n8KFgkkeCUCq1bzBJyaneWqsyM9T3cJXaJoANFabCVBuLo4N63croGqwxKRaf3UbXHQsETi",
  "key11": "4B8f6sBAQyhgMm1jQsxMNUzHW5RuzmcGTUS79LM1hnVXdAEXsmP8r4hnZzDqem5woLG2PBAnx7LKepBMRGenU9jA",
  "key12": "5Pise5jpNMw5Rw1ZEMQv1NBaPbo9Dntr6Zrde2Ytx24GnJicVZnCaS9FMQg9vbCUpCH5YGUmqaLiETqVhcrBdsmK",
  "key13": "2wZUH6pEw8zCyuDCR7dtRpRkPVAWYrbnkvvSM5C8zXbVdZXvXNCHSRvXM7KDyCgavV8SP745Qo5c31JhcPLoRrqa",
  "key14": "21PygdsHbwhzhwQqSsXcZmpmAJgDaxafBxPST8tEsqN6iJrw3qLvNBw8eRawUd75FQCqdnQA6Fvet9SRPwH3BdvV",
  "key15": "ETs7qPAsQmpPjDXQfwaS8rahNLWmxadT3yv9UCSZ1bf4HLVbWeyumuREdAnrHAeBsL8n68srw6iiGCm9HybaJUp",
  "key16": "5Mt6DEAnkSxJWU3oXye2sczLTa33Lwvx65fojMT9mMr6fViLHpB5VhGar1yT8QkpNxjUyuQLfXXVZF9EogtwBqLA",
  "key17": "5iV9wRFw5FahhY3sXv385fN1bU3LRbVxvrYr2ans5aZQSFKj3cuCbTGFhCcAXcHFS7SNj1HoinMAyHcYTHCXyHB",
  "key18": "37SHdC65LcJB3nNvg397Qp6PVKF4wY9tGzfDxNBYebjY36ev9H6XydcqAfU9Q2v6pMib3c69JU4ospxPf5iVLYMz",
  "key19": "mEgsmDenak3Vem7hHuGRf5oxrT2FSJF34rZpGWAseTwaEe2Uhc1zxzY7HYNfL6uMvVwvbuac46EqCDfS93zMMT6",
  "key20": "2zhs24L1SMkeNMkH1uoRF6Mq6Ti6SNenQGE7GiFJysa1AmAXdxKkVkTuLNYJyk4AsS4GBYf8bGeiUSLS91vna21k",
  "key21": "3A5gXXyBg3LGwb2iv19apV1uC2WTqQBGSKu87mkBBpHBnBSR5NXfg7B9yaDWJPFL9aNo2XKhZqEmRzaibyq5ekHt",
  "key22": "2SQEbx7x8SzxX1cEZw1qzCgdGHFVEe2uHGjZMXoZ4V9C9xoepJnCir4fA7FiypoWVDbbakHMq8hmzrbhewEyzXZv",
  "key23": "3kr8zMyYdVdHw78NDX1t66WCp8RDeUVAmFFcJA9c58YNNfAqXzWUnAn8iSGYc53B8gMiD7XQS1qmx3rHyq5xL7B8",
  "key24": "56EdrWDnUjhCitQzXRerPtQvqXzLMrWfbTfkZcLrZLSiZdSobyAVrGcDXySS4msehyN97pUU8NdPXUJP8bXf52ma",
  "key25": "DieZ6onTd8TrgBmr4GQQdYWDSspPgT6LYP5pVHrsVZ3EdjUedfmfDsWjUi4C9f2rs8CHBaDPSCZWa2G3MgBAfVN",
  "key26": "1MbUjv8WTfu9sdeGAP2BmBmwjWP8VwzW6TYroeooZsMQDM4WXhUK7wUdAnz9UhMHwQcWJ8wmd9vPLW6nfhKwJzY",
  "key27": "2xymLnwjShKVkkb4m6TUCiArQS47aZtaRQfd4SjyYfTqU8ojF4YkbBS2fWKQhJ84FvTczhCPvL73CiiejF8w7crs",
  "key28": "5dTaHWqfyp6nD75fL2CKL9vHLtab2VY41NESBZVnSfxdFkf7r35soZoQu4qDTmYspZedhzPX9QnRXhWVqx6yWt9F",
  "key29": "qKcakJQqjyc2msyN7jemkTYimgg61VkcuCQaoNJxRpwgwGZpacyeJwH4mh6fKRg2NMybB7k9iiyQwvtyJtUJTXn",
  "key30": "2GsjzSKwSZTqkgDvY39UzU9c6PhpMQPG5EjLD1orcQ11QLEWXfVzaFhLgLthRDS9qitQGBMWP57K8EUDCia3KNGB",
  "key31": "5HavUsfaTdC8u2TPQnKcY69KSgCfsa2NCsZggcWpaT3mTLTYxhtqs2ojC7UwrSd4eSbmVWmBu7CnoxT7QGZDToed"
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
