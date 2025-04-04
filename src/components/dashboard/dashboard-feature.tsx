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
    "4QQzFZ64jGb7MiNq5iW4f78teH9f8QcZy86VKAUu2Wxk53DCqR5fEpzBX2ifJPrav47YRpVENqzAfLHp835pLuPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xn68PdFQyFWpyepfFDQnkC5odScYa9u2rVrN3BKJCnE7NAHB6DS5KEVcKanbg6y84QP5eGQ2W7cZ2BgonErDyDD",
  "key1": "4sQfBuehXhU2SmaHATnWGkssKG54K4WH1VheXhRiWvJmaBH6a4baLLFuFqhXwH7PS8YzU7xgX4PcsBjzYwDYbaUh",
  "key2": "31a5gU5wAJ2Q1uYUhLHRpvm6vy46N5uAyU7632VBuVj5CUWnUCCgJXaQP5JV7BtmymEbWTXHP3p2pMxE2z9MT918",
  "key3": "5MYqatzaZDZZVFKZeYc1u6whT8E9cvWcZjJovyPdRp3AunSqfd5iDnCRKuqjJs5Su9zxqxMaAYWY7A1Lgi6p1kz6",
  "key4": "3gCQJ83DvKPjMU4H4ZSUxFeUbEEULdZRT2RgLgw1Em5fS3chuFgf5so7FaWMwjQ1PS6Q9YD7tA3n9rmBuDFzoJUp",
  "key5": "1p84QG4JxYyGmtvDmpm1TcbK7hkSah96mmj7RwH6HKHWisZjPsNUeQbP3qfXaVLtwfpbLGDhMbu4MDjEYk3SBTu",
  "key6": "2PokxU3zb67ECiRHP4wYTWeDHDGBySpJkvjy4H5a4M9RyeQku47Btkivvh2X88v631w5iJBN8xbQbsubg4nbftK8",
  "key7": "NK21qFxtTs499fPjnp17zquycbafJK4sfKYKFo6cUeavczeHkFZSk1eRnHPVWf6zYydr3mxJZuJCqsVEGbicKod",
  "key8": "2du5zmTFM3haEffcvRYxRKpFtxQeiGHwK6Sb48KJFeMTYKXFyqTyZzdRPpvcRVdwgYsFSN4K4TfgG3kgtpcunKbg",
  "key9": "2c7aLSdeewZDJmU3ar9wAWJ6F1WErQk3ZWzRRkpkqa8qcw2hqd2v7DMGNJTQVSJ6QwZgaw6pQv1H6pawUNJwEt3Z",
  "key10": "5MtfLi8mTxJVsVM6fUNrnKJARyYfh9pgfgwz7XCePsiUDAp1bV54MytpMbAgXgX8f8FxTo98bCwktefssP3CRzk9",
  "key11": "3tthkFC4mGvtHZXXLjvnaFq3qJH74ihJssYfzTLyZ9cf6TkH8wMcLuy9dsmsfWtduabzct5uK8rUwg5gZ2sa3nSH",
  "key12": "dcZ51inVnPzdYWCkRKA6VPsqKGjp1DJG97rH5tMt3nZEqCqN1AUa2nxV2N5boP6jwM4e5gQXJyacopcB4znjP2W",
  "key13": "3esJuBsYHLE6koaJLDYQ77M8ixREWbt8f4G5nhd9TqzMngtH2cACcmFDgcLfb4FrRGuHes5gmukxDvNMrQKy4jwX",
  "key14": "5vVtPgZ2KUJxH3x75ZPP5xhT4KnGkSw34Ecky2adhx2tgvRSGBYVkHrYyoqj9WjEKaFHrB4CzhrcjVDH1mqaEDCn",
  "key15": "2v9DD6UytTq4axpUPrnozhe6tuWPWcLHTfopM6GvbCLfqZj7bYbvWTqHv2zJH2P3wbh5UXg9gyE8wr3MG4kiWynV",
  "key16": "2nQobQEECP4n3GaxYc5jF9feG3sYrXNqXvavvUQ94gkzfusPeJACgbBAnC1xRq9n8mj58vgSKtb6WaDQBZ2H4Y5m",
  "key17": "44oUgrW4yBT9kNW3iXh24vKNGJCsvZn9buuUZxZwvjD1M8BhcZpEKcibn98tsjRhzSWTJGqFTTgHgoYs3e4GUtvM",
  "key18": "3RXDmVhVwf2FeuHVVUaaNcPKutrZGqAUcGs7E8fcTmVVddJduZeixhykTzH6zww5L3uWXuqS6HpnMktzWDKDKxQa",
  "key19": "4RybUF6WaGPJ6fDUzPyFVwTUZgQTnJKtygJqz2XKqvGv64hXp8ZR3meQsjUjhoXgu8NTwQdErZ6NgyfEhggWsH7W",
  "key20": "5q8q3sJu7TdVYMwfPHzDqwtXMwQp2TXFnp8XnBnusjfYDLcJoNe5jCMXpxLwx6skjnZ8bqjDKFWAdxLPvP9Gp1EW",
  "key21": "2kkMutMZiqFw68sHnkUQjHW6JDTusJs3sY2GccqXbCM1PQLRtMMHuMGrzbCGheoeqC3qfpWVTvQQrfWJmPw4yKYP",
  "key22": "43b7mSwJ8vGZ9oUPGSTkN7ZsjACkLXRfP6QnwbJYTAAR2qHngnXv4nYYMsAFNfDMLy675MsPE8YvGG5XWv43gDcH",
  "key23": "4C9GRGVvf77CvwyYskc6gutS6516a819eg1sfcLk8wfuCWtuPeCzVdDqg3HVtG4dxN39iQ3CicSLLygt5aqM6qCz",
  "key24": "2dtF3JLzezwLKLyz4baGASBYJLNJRm9BDH2mtimR4HJAYrM77C1YU7HW38vDJdGuv2BExikfTAwrDyrtFCueiepG",
  "key25": "2f7stUxt4ey7Mz9tGXW45yG4T15qsDYVNPBytYwTYSuDnGQ6RmGtr5ESAze6ptC57evxwgQxm3fzgkx71AKsVTq6",
  "key26": "3R1ZKpHS2hMsCJzcDhf96yyMYrqSf7tySGGUWKA8CUufZNMoSkEsaAAWfASXTQ8jAsuLT5JEVL71VoMysWn3ciJv"
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
