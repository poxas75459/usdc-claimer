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
    "2cFYy5SninQxyzWWnoVhQoNC23VkSX6Ye6u6TUBXc9LAhorUtHUs43UJCGXQN8bSQ2sohW8pgmcnD5sjcvVpqt4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apUpPMTdQt8329AoeMdYFbevsSogpQpPdjyLrPpiCMVxruEvmJHT7oPW2Gm4qAiaDymjS9mx16WXhPTYykgyL4v",
  "key1": "3UN3rduNrhY6DVtCs9dbPH1bT5TmR8JQazRgzpYmbQpCtRaA3b4eVKMTGMQTuytQKHZRpKjmPTnjaQvivcQdipcU",
  "key2": "2hFnKSH9g2VNRSNtGLEWNDTMSP9pRTyytrE6JdjJGmeWPFD9w6HN5pmRPAKPuHD697RgQWsRMAuXpx99qbqFA6TA",
  "key3": "4qrdM8gZNUNX4H6rTV7cNEbjuCVojezJFWZgan6cKfJrftUU7PZjnfR9iWmt7BzCesKj48Xg981e44AXeHACzpGb",
  "key4": "3JU95wobqLeE3rCzgtY5waQavLuE6saAT7JQb5s2LJSUBaAn62cBVPnTvP3KmUC9Gibogx7rphDksuhsNyiwuJB",
  "key5": "d8PziseaVTZkZXZHNY7YHyxhdQ9RHzXhiVrDEX1nrfjrg4JwhLHhEm91xwJapY9sWJGe6DiJymcU7sLrRPuZUPH",
  "key6": "5pJixPVNHRh3UdX56j3rsA5Vr4XsdJaMESGMfYsgt1BxwLFEFh6cSQ2G6bPdwFwBaqNzEHh5Yf4TcujTtD6owTsB",
  "key7": "675b1W78WWGXnJSMnGfMU2FGAJ78xwJoAc8VXzeVKseSSRsVzg1nE41quuYnd9BDxthvqUyKYqhr2ih5gwgVWKdf",
  "key8": "3TRurB25cxBqkPEyYVEwDefWM5q889EaE4T3sid2d2vfuhb1ncik8evxszHz9RzfGw8HEeSZVE6n9GVA4rk5vYNN",
  "key9": "aKoPPjxcAtrF2nCHfM8r1Mgi75ne7Kr6jQdnzAQNWChbzUXqaBfhgg3wwK4xHEG4UuwWKbf9CUivvvJYDkPxD1F",
  "key10": "3R77pmHSVUL6pp4sNKRzW69GEVAatQ74Qt8mSgZb7SVTxyaPYybnkXq7czrE2xsE9L32s6ibEc5KmanPMpVziEYB",
  "key11": "3zCM5v3PTKGHR92vyr2ZDZ4AVUPhAo4SRuXybKdUW4zcCSbUb7eK19WaeVswQmCY1U34EY6bbamYT917XXVMhVZP",
  "key12": "4QuwBTUr2amgSShQY6Ei9MEbfmcWwzsfNg1LtV1gBYZvjjcLfuCm8MXkmtpvbUHKpiowqAgSW9vXSjwpFaxVmqNk",
  "key13": "2e9pqTp1aU5qV25BvZfLVQX27GP5Abvd5mxwByB2WZT9HnjYad6qZnubN4QFFqwZ8Q9CFzaXVpUYzvkai48FuJgB",
  "key14": "5t9qFLrdAfcmQ4x2HBfGjDdGdh51PLLYytBm3335a9Jwcm5X1AVQcqJoBeizPZDPdh6aFK7JFupuRAFUiAP592mn",
  "key15": "4C2RKbX3WGEjwKX7RmVNfSYRTnVSxRYfFA32uckyveqsEbDEAWgCaCFk1a1gGiLVtzLHZCW3yPJPgMAAVJpG3xQt",
  "key16": "3ZmvgqpRaKCAem5FdunBTcW191R3iQFQKfgAiE2J53E9oWKUSFN1YbzyRzyaQSLk14T95xYB83NmCpGPoU4PubR7",
  "key17": "7ZPzWXtg9R4E9kxVcG2HvLvb6YYqwk2d7Px9CmfFwqMJwLLLQUJeAxgbPbwbCtiVCipkQih77twugUKuVfmBESX",
  "key18": "25SwMttGLbgwYJ5sk7RsyWtBvNCM5E3oJh3g3ScYDR25yxEjK7T7goSpwKZk3wQWYFEt8AzNMUQPqvPBCrpdJHWX",
  "key19": "vawooeXZ1TKHMH5LmYHWEoGC8gsmoR7WN3QazciBdNLFSjiNjkKXmigLGFQFfvcCwEttqmxv2DWLjSizPN5eGRf",
  "key20": "6m1vCWa3AhquMHsTCRD3oypWDWYddbRDV7CUcdiv1EUs3YuWqUw7yigsVteAvVZVe6uWcLyCUj4NvwYw67c7FKY",
  "key21": "2zXHGySgZ2qiiE94v6bbKp8YRz1dWPo3gRrtbm2WPob8x4dk1FNVDHA66n9rN3PXAfLBK9Ev1chQSpr6pdsm7rBq",
  "key22": "3moqPfDRc21KSqQdddMQt6hgT7cCkbEhaw4FX19otq3rRoJBtNZ9PS2rLfqQtjYU1bnSRH8dLCwuszKW5n6CaG1",
  "key23": "4DzmyXgVHxTJ8nge1oBgrvHC38NbEYfq7NQkJEWahjF1ndLnFaSwXYy4cfWoZoDmN848H6V1gbezJ9XTxkUiCEuV",
  "key24": "4m1DrFbpJNbRnX9xy8bi9gPKhqt7tM8A2KSaT6g8St2pA264RnYdWzAKa4TEqNNYVcpSA8hjfZJ9nQLd9n9PWzYi",
  "key25": "46vbb6w91X4ELoeCk9SmXEc6Q2PAU8Eh9NdjA2qDpVvEdzPMt5xhA36MjAWt44t6MtCJv2dxZfvr5Hhuru9mmtJZ",
  "key26": "4qZp5zGUEPK7i26QNszSUVSSQXx6kYc1RzT7ihDjr5Y2ccec3EER6efQzHfAkWRydWW8s82cbk7HRm4nfjLqUsBF",
  "key27": "2nsyrvc7P5vtnXd9mWdWPz3LQVx8xBMLiE6497Je86eLsnqEmDBfUKWRHyEG3edfYY9FhVYkooFRoRc2UuPdDxXk",
  "key28": "4f1TaJoUGtAB5YZLF8Sbf4PTCLz4h1DAKxgajzKZ6SXhj37pK233Dkw5icwfz8gbfxpUhokX1gYbuNQ2uWo5M5Hw",
  "key29": "2mqZmMAQj6kEZxg67AQ473tDQAMEDrq97LMU2efXDzz287LmWqRpHx8bUTBpksads3bjCGsQJhmbUoyWqU27kCCk"
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
