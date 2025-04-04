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
    "3iqqsi3d3ppNbZzhw85BiBWbTvkzVtaFmiJvpqut11dXCS4YS2x7qNNWjkKZDRBTjNYkYA83zVa7MjssJDN4ddFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Xr6VamNkmcbhRsnNZQN4y8VQRvKw8bqfC3nXqK47UiGLc1r1tturr5yeEQZ258kJmC9orsqukDrfai6Pr7uSeD",
  "key1": "5DZnYLtx5M78XKa35z3tY6vSjs29rms7PPuCiKuy8zkeVoQA7LngT7Jyz9JezF4mXpu825RNqT496TpsBuVsiNcD",
  "key2": "2L5ioGXMxQY5EbBprvKdNfoNE6765fKcpzST7kTKAM48nB3ZekJKXmkSpkf2RQoXQ7gJ34oWGvPLFJNBzWPQgF42",
  "key3": "52M24Ljbqju6VYsvvjMzqm9moXgiQ1BQjSrfDrfwTaRt5ZsaMgwt3PuB6tuRsV45ecNYy5HR6p26tfPTrSSrNA5m",
  "key4": "5DVenZijTWvfYW92AfJQbtrT32cNKDXss9W6othgaPmMNsQ8ocgf3bUGjCdkBjb2HZq6e3jKT75UcvR1JaAwoPf9",
  "key5": "3VMpi15KVQ58d9gBAyGXkwrjXCHFiJXd2rggpY3NQcGc3weY7JDgty113fExnDFXNHFx2AxBQN4bmq4zhUX8gdrD",
  "key6": "55Zjr9AVeqrNfrMDu1wvA9qr9fqzD8wCcJxLxiPrSqCi7SfZQT5JEGN9acH8kZP8Knpka9xpS3busS7UabLCMA8r",
  "key7": "2eBJwhM9ubh9mUYkZ3e1Sj3pP26BU51qViZnbr5ewujxxy2jwCnzGiz8wzwdBknSGPnT6apd1ZVPi9oZQzfyPxDN",
  "key8": "3Y4FyD69PjRRfWSBCF4sVpz5BM8Sv1YBMfAQuZGyyP6iLokEoG1rvy2ra8ke2zng8Gja3PQeBE2LQMtsSXPWmKku",
  "key9": "mRTbMzUfCKdB9Puc7gWzurux1Z8pZLG4EX6NrAm2jbCJ2UkujMqkufhWrc9C7HkR2Q6pLv7KM1Co1vyZvsc6bhe",
  "key10": "37GAKV4v8YUX3U8P65DJwDxVQC3MdSpRNPGwschFuvaso6vgcAjNgD8URoiBLrBVfbZiCgTJapSb3vhjfFye8sr5",
  "key11": "3h2QJBRviQaZ5CNL1zT3SxKv7zNXGNLXsbFJXAiqDDbZkLGAHAvYk2ZfrAwxNattRsC2rRSsk4PopSJe5D8UVyM9",
  "key12": "BAPoB2ywWWGxwTYfaQV1F71dNuvZSqUwSPwAJUXsAE4HWu8SVe4yJ31jLFGA1f7dS9R9BfmXiWUqRDkRSCiqnHv",
  "key13": "5NtzNvQcUJUb7fDh6Ls41o2BGJFzetr6YYJgu7DUoNgtejx6ihE4PVQkE65uUDqhQMFNBNBPKDc4F1bAHp7YRS13",
  "key14": "4d7f5vRizTHnu5xrdpA5SzHWYLjZq1uijXAL4jz3i6XYDsB2dFPDk3mPHhrQEPNY77eHKH76G9XseW5pmSEToxpt",
  "key15": "3T69qA8BeYK9BqkfW4u1nnKWTR7tsERCgVBgEs8rp5HUKD2Kkqvj7sJX6nS9fXD1Ld2JVvQN51RaCMdn6yVUan7t",
  "key16": "3h3YchmPSu2rj4qLVfGXqzrSf1oRg6MB3ThVR754GbzWV5SWofRpUEkp8K6HchS2tKerX68ehm36CH3iJBLZLZRn",
  "key17": "2v6nh1NTVA5MRKRefXYKtSE3fDk9Re1ujR45VHTak3VcHUaFXgJ1TXGxyNJtA2cYn4iPQidGi4dNKFt7T286M82i",
  "key18": "2GNhxKDwiDgQaUq8dNq2f75RBFQcPQaHZaTpaqYQqdkGPVCyPzA6trjRyhBBug5SNeS8WzkSBb3Ycm3K1agH2nGf",
  "key19": "3MDFeTC37VR3FpWtgEwEyWs3UEgrJhBE6XntzxzyzGk9B6ytjQMvNXwgdGGzHtBEDcSbjQHDUMg7Luxf1XGPfqJ9",
  "key20": "4Etr6Vu1AZ9FgfA1GoCcCgVm4u6x2LgjGkcPwscgQw76hKCH6Bn5SEGqsRBkdnpUwUTBWYzHG9ZBAVeYB83rRsy8",
  "key21": "2BTRoq3i68qC84d4vT7UBj1hFaT6WUPcVKtivGBjf1Pp9Yaawev5Zf2qqdUrvhTsrUkQjACotYREAx8zxo9yiFDi",
  "key22": "5bS6GcSk4SrQqbMctWZKFHpsyn9vhs71uEcEFkY5rd3bXPDbZRxBjeRGxe2zAsG9edobHn4Q31XkN5TSkYxFFF7G",
  "key23": "58C1KT2KfcXJXqXRJJ2FPEMDpCGw2QMijorGGrA2o9TiuDBToUKnzq51NDw2ARK8Mta2MV6JFoR3VtVZHfyYcUn9",
  "key24": "2HztNWk4Yiirb6WfYiazdpMmrD2CfuL5fhU2gHmp5TjhT3iHwGjmcA6gK8gyRRuAT64X7PP9WDbF3LLMhcAFsega",
  "key25": "3sXSqa5VdqcgWs9Wpt7WZZ7EpVSUVCQuwy4CrQSmWH2JGKzsaHK2eFCHJ4Zwbd2f3s1oBsCjD99Nd2HXv9Czscri",
  "key26": "zfkPjpM3FSRe1rvFkGnzQNSUYAXXKPMsPJzXuwumYHPFSteupsLyGnKxHGDaESV98AXdfeBm1ZVYpHyuKMUKE7N",
  "key27": "3aQ4zjbCZJbpYuMD9tuopyJnG52kvz7PWLGUbsTfBKyTMW5v7W321mkfCVWJpqfEcmMMVif7ZZkcGzwctL5ygBGd",
  "key28": "bZAAGKFQ1yKKb6p5r59EhUe59rg9wH5Em3jzqpdv3JaqsYvfgJ3ZafR36ChmXgXRMAMbkq4HV1zpouDm8SSQyXC",
  "key29": "5Gx47inAXiQgm9gj4XscYndTZLgbWiUdgrEuG9kjCLWApxNdbLgvPrTYDX1LuPfNpLwTSPxEEsTU8MC3H3KGTfbj",
  "key30": "5BRXyCdV3qHTUj42zRDyavgcMvUu49zgQWoBQEJZijkCD18Vs4s4eahbFKu7amkeTKX8mYcEd2hraYNtD2g7JPwi",
  "key31": "37fbMHcpDGGiDNnLyrajWTNte5pqbm4ugR4rETagYYV7kyZjT9J4J7yvMhSt52hU2kJpLabdUyh1mzJQejxbEQKo",
  "key32": "4X935ayrwYRA6mJXaQbYtT8qVRYAZbo1YVL6F8jn6BWecMyaQy63ev2q8zsdp89zirF9GckUrvx9MFMkd8dxiDZM",
  "key33": "4F9fjT3puwbqimFTKAEcicZ8rzmRtrFL4UDwQJFZVRqFSb1rJxtPuHi5mDJA3FJZX3Wpn6Fm32VV1DqPiWZnREaC"
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
