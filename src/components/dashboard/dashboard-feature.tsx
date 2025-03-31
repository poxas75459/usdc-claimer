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
    "4cVLj7FmtcvoS2XXnTc9qfgNRpwdvbA89AN8WZPwPWuzaeezUGPX1XVfmNEb4WcCNbrZarZDMZWyxzde7NtCGErj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDo4sXptwxYT7Wk6DWwEofqZw8HbvEjSmNnQ5ytBeceg2qdWGngvVvmxaFebad11K6GSeXTqy33ehRDBoatS3r1",
  "key1": "4N5o1nXA3777rFimTviQdAHqSyspbJG86vey7HwHn6PArzpWiFDppSbhmfzz1K1tpnjRdbZYHDo759cu36qr2KwD",
  "key2": "4y9LLmAN7RDJnTNimMDcEn1nt7pDQr8WBjQ3AUUmHaLSg4n3xJztZJZEwgC3pFEqPuQRUACf8a5MKmQZbGTxNUsf",
  "key3": "NJJ6WQR7kQ1tajAPftcp9XHv8kc5NcjvTtUZYk8rr8bmvcrpWJBd3RW1ap8oKGa26U3JewqsRD1Jtn5ANDPX6ZX",
  "key4": "4fXeNgLWxs4uG5GzivtBMFG9AbQdRF4iToJSiEwuyseHuNckgvMzVkNQ59qArXjGU7jM5YdDbTz5t7PqJ8APSzQB",
  "key5": "37ngskKjBBxDL43F9gy6wyyeo4mKuswcT9pBnoxyk3874qetRQJ2zNcs9pJ7P4RpG32Qxaynjqric7wnz2AZYegF",
  "key6": "2u2duEW5jrj4S6HvY3ALfoivgkQa7Zxq1Xeuvb117ho15TwAewYCZmoUCwqvkAqHA2x3vgJSn3jGigWMuaSFp2Rq",
  "key7": "5rD5PKMUYNAoi7sD9qAqHBDS6R3x3Gd551oB3YzdXHm96fB586NJhsinPhTTNRRrjRD9fu3vnEsh6VDypAGr2pmM",
  "key8": "3FxXsqCkLMBA4ZxgxXsHYehAsMndkvEYifQR1gLQZ8G2zCPW9oQqx1bQF3phCaPABzWr7gWhmSBFRK2p7Fh33MFm",
  "key9": "4haFbhS8HBFCsxCapvvSoN7BgjcNWXBQxbDSxr99Z8kG3dTriCW9yToupVBAMqJrS1d3RPhb2owd94tSxgVcE7EQ",
  "key10": "37Bnn6atps6pqMCseGWviE3V8vXKrgmfmfp7DP1DN4e5zaqchMiTqjCeBe17fRXNb41nBHHmZZ2C8eKMHWQhtE3e",
  "key11": "2H4kMUhWfigoXMpaVmuNrCATVm8HrKW8jeUp9wi1ScGoGXh96XHcWhmLsbxjTuciKsMCeXMZrzH2v7U6hkhG1NUa",
  "key12": "3bnnw4L2wkGfmVqrMBiFxgqcDv9Rgi2Lc87Ucwc5RQLAoy8RY4DWVaRx4jyqa2aZTsrbqBYD92bwNJSSma75ZDJ7",
  "key13": "a44bTHg2zeU251V8hZLjaFgMS7wv9qTssMqcuZ8iK5HSECsFqZ4nZC4Fvvub66VwTv6bdJ4oEZc5C6dNviEa3U2",
  "key14": "4amfeDqWtgUdqr1Qh42Zbg8HRakfV8JK6haTCJAhkon89oB8Ea7wAQxrqCvDVX5jwAkzGkkHEcU8pMAwJXn9vAHW",
  "key15": "gqoYatVhH36dSUTfG1tyhbNvzJr3VaZF6DfvU4fK9A9w6ca2ZPS51Ux6wKFRd4xFx1dfHp9djWkmoc4LsPwd5Su",
  "key16": "2WXMiYjHGajrFo5fitNQhyg8U5N8ZEZ12YojybbgbuoSjZ5ovfViETj18BfPAt8cWBk83pZ3dYBzreN2SdwsRrxi",
  "key17": "3cwypCNfetMU1dsV6wCBLBrRap3vgcwp7qhfoLQGbfozmhpKjDiCzY1ciq6GJAXow23Do2hyBakFSQmUPTvRi1PM",
  "key18": "2vZst8Fq3UEvW9apZEMiPkV51jMLRA3VprYn21XPrTHMHGCaV98RrYsPKm8RHfyhBNCVKz6TwLXTczUzsEHAKfJy",
  "key19": "xqWVsE9CBPjeZEGLVnoEKEwiNSDsUzrQGWWa5c3HjR8Vb8yvQ6qa2p1GZ2tzwY64J1476EfHrHk2W6ZpSERekSi",
  "key20": "2DvroHJfSVJfoTrGjSAjcy2zfy13B28tsp8sSfw8H5K54M6vYEXVUFo8sLWzUsVwFQTNXUVHbKCZ8m5qw77UvA2c",
  "key21": "EDPYbdfhRfaRpHA3neMai2jb36cuBQ4TN2AMCqPnxcC9HFUYFiETTSgaeqZ7HbzHCQ3hF6bKpdUABC7KN7gNxod",
  "key22": "3bVYV39bwuxgUSTXBzAAujbSCgAQAT3MbX7cSmJ3kMyXEfskzjHJYoLjhy6Ubm1Cv8reaUNRcxhx2uDQPgL51rAW",
  "key23": "JGFckVtz1oQzY9HdfU6PAvU9VvxXvHUP1qHzD5vdKU6SmTmQf5q9KYAzKNufGtcX4BmA3RdZoaKmUPUMdXcT5Ze",
  "key24": "4A4iX5XsZA1ni1LY5mqfgEjgzmyeLuj7VLZGbQgfnUtYYWp3xWdGC9uUiZqRNbsP4JK2ZRJnz9kto4yvLq1v8pQS",
  "key25": "3r7eEvAZje2CogLkQMqcMWApnjhDxhcqCYgZnAQmorU7Kv3aycAy9woxj3NzpPtdh9z9PxZJoV44CbKGYkE9yBLW",
  "key26": "2xTPqUpMZjrtxTSG3WHHPCTupZpCog1tx1anzGzzvMWrSKS9Rq4FBcAz5WedxhYDKoVA2VGqjmhGgW6G7XyKEL3S",
  "key27": "KxdGBvyrdi78VK4TH7Bk3aGEkHGyGwmB3SUEGtWzbz1rKZAayycn8PV5pQT6NLHpmQanDAEei6VwroLjZQ3btUF",
  "key28": "H8j9oKWdAH76ZwZQ5j13xTc1BgEwB1sNLH1s42M9qhW6qttehvY8eXSje9EhJ83nwY3a4hRAAvJnBxhJEEKr94p",
  "key29": "2c5WtgYtdQBVc2LH2Q4Nyp2joPUW2DNzrxXC7jUxbdPSGe7JRFEefSnU3V285WDa5m2gt8JEakMEN28HgyJ2poXB",
  "key30": "4ZvcjsvAFH2YBYqZ4fGNL3o4DdMSTJJXDhWempm2nLbkrKkZWSQSSCQ9NLYUnCpjBRtBhrnXro5KyrT59dfwZy2W"
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
