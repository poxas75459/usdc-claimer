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
    "5bKiyov9oHEnFJ3vtbh69Xwms6ZpELEWyoRCQuj7vuuvnR4J9BCEQFKgv7CVGqfhcxtBC2ef2QNN6TGJmgBQGfCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RNqRAtTzPZFXS53MoUkS1t1u7ZQL1JN6srsraYV1wGXF2EUVEndTu732D5qv3btqAe5Sb9uCB85xe9V5Cw4XCCN",
  "key1": "2Uz5kWLBhVbT2BY1aZCHsGBZupMQfYz2x6AJsKf9GE8JUANFs3o9oFe52Q6zkiLfGG6uqpAwY5s7o7ue4Uan11Tw",
  "key2": "3ectDWcMZVV5M7AhVB45xZHksMrTcrJ9sRbimQZ59uM6dmhkP4PS75rP9qycdycY6KPsGxCir7mUjccGFHZRb1nR",
  "key3": "244qEmoz9ceDdHJsTFJJAF49D9AwUKmJnaudhCnCkcfaH45ZBcF6Xtm8xk8yqCyuAZVM4py2MqCqgsavUhSzc9dh",
  "key4": "2W9WyQMq1SZVSum89itB6RkCrTCFHfojv6ihgpuyZDPn2APQ2U8gSbcdhtYzhzdfjLYso1kYGSNdqwDrYdL63vtm",
  "key5": "6on4392HMzKt1B7HEbWsXVsNXjkn9bxc6pLn6gLGtntLQJoJNqvG5LpkPbA8NUSWDNHrVPuCQvEZk55y3qXa51h",
  "key6": "5VAU8uJzngw1eiAdKzK6SKgMvekwBHmDKXTP2Vk7cNipnU7gPToPMbFQa5cArec5Q1cYmLKjQa7DC1Ed43T7NNhc",
  "key7": "4ZfYjHkGViKAW84R7xTxZ8ptfHGwqTiGpu7bbJePsmo9TQxDNg22h6gnA1y57pMUWtNTYbFW3DRoAfouYfJ4TErz",
  "key8": "65RdpqSH5RzaPoBK4QeDEskcUv5eicCmP6vzegCXUXPgvy2X4zsy3CYJaF1D8wV4fcPdED3WHXNmzo5v6hg7cza2",
  "key9": "4bH9hsDSjKiyAqrAyac7RYJngzi1mcyHg1oYNK1aNf3yjXakZeni7mCWU1jbeaWCPMAPkmX4aJ7EjNcHP8ysRhfh",
  "key10": "43mpKz4s89Qh7bssdUL9acvjCDNKwhBHX5nLALPwU2jVuLdYLXucHiZ1RiCG3FFeZxKkGnWweRZ5u5eLH8RxTkkS",
  "key11": "3Cc527Ku8UgAXAWaYSxQdk9Q7LTFXGH79eV4jJMpL6BhnnPX8zUVUpHZjrqyAB7A26WcWFsZVabpDRuogqgMovYY",
  "key12": "45DtYb9DZnZ7iPYWDes5GXwnbyP8A6yrbic5CqrNVuMnDZYnfSBLrVHD6JqtMETnNhjbNhac9kAuvZQmhJhTWw9y",
  "key13": "3WhDrjekzYUTwW5GzKH9fo12nkQWd4mFMUzMtbLkDnCsGJ65X53ekpoNQjv6iqdzg1SuZ8v9waPEx9ukJT8BtAa8",
  "key14": "dhxXwHAJGuqGa81G3DPrxASAJw3MTNAQiG4gFQRQzevxdhgFC3bDEWfoCV1bhp1eM4EAxZg2n3BL5LKKcZ4a26c",
  "key15": "4tYwhMxv1ohWAfkRcxrFZEk8ppt1BrTgjZ2GAALM3C7Bw9Q8eTUmD5CydP2Kq96SBc37JeDwr5YVuVLQXE4yp5hd",
  "key16": "5VwqEH9wRSi9fUprVXVfxyUGmdHX2pukuWtix4nkzg3Y1xn46ydY99WcCcSRPziCbNibmcNz2WbaRDbRtj3y3qWk",
  "key17": "PJK69ZPb9twVqN413vfrr269AyYjPfFR3hzJL8LqcwGNLWZJ8rdxMkQGbA9hrwh9c3Qp9YHCY49467SRnWrQGbr",
  "key18": "479A3iNr5oewBGXrCuXjjvRvt39aBp1obFmxFbn1yZRX6UWo3RLq9XpudnZDfPbE6w8WxTif434QWrqRTBTyecTq",
  "key19": "3gLvXgk93mTCTnRjeizE9k2rLFps3vB8mETrXyW75Wqpa7eBbGtohtiW9gzwD5TWQYFkM61CUpkPtKwm3us3ibiq",
  "key20": "g51kK7MHWWkxnQHMNXpH9x5MiDNG7USHoj3WoaYpL2v39SbYGoXoSaoLJB3Nc6yBgkXadaeqsrFF99CheRHkpLq",
  "key21": "2ALdzzYeMmEZyAca7iNJ43kRcLHFEVZQ18RkgdfQR7j5UPi6j9mkG3WeZRW4QCjQSDrfowJdthLsC7XVj2M4rmBE",
  "key22": "2Avikzbq4ak8wYEGGfR1VBB7t11iaTCcBFCozGVuCqwg4TBeEnNj44sMwhYHDVi8cyntG6U3t3C5k4uunCEG2ywa",
  "key23": "4vHzKzZdopdFvKLVd8ViGCvz3XixPbkz7uQyYrQ3JdpQnPbM1Vjg7Ux2Qg3wrq8YS5HSYSBntxBsyWsNuAzNFLyz",
  "key24": "2PD2hQACBDe2WeEWyWU8tKhukAcUZ6L1ZU7tNBP28UMcGXVuJuYM332XTmGueehV7HQjDEMieN7AC9ba7f8Z2XJW",
  "key25": "5BrBF9qSQj52RydzzT2TJfvnGh1mNAqS3hXjP9qFJU7pXVjPBk6aYm7m2qYwi98gpTpNZ5H8dAK6UUjoqDSq77dD",
  "key26": "3zjhm9ibAi8ojwwUmhktNTvNCa3NCLbSDAn1qyzbx8QJN6RPgDwaiDdGZTVx2RHG77Sfvxo2TybPnwfY3q6GAh9i",
  "key27": "4aGfLTarkNMjz3LnaE9x5nVQ6gPQf8yJRtjb7uiHWmiKsbuhPy3k7iGqiRahZxp4wEVT1pyML5uJiekn6N8kycgM",
  "key28": "7iTzXpFJBJ4RTYEzRqHYPZ5ufjnmDtUanejABSKm5XYnV31mepFFv9A8K5mLMHvsigosskf8tbomtyBax9JF9Ue",
  "key29": "2nBqU5QUyodNrwsRFgTqH1b8tvnQk9ZSJvqT3Vu81KHLJwM6PhaU14B6wkRYyYuLzn3wAxnFvwKJXdoqv4QEcheM",
  "key30": "7k3niiEQ7vNEBtxJXBXkiCU5fcu4Cr2NFx5kLUPXvAEWtpoGhk5zrEBVWMKGpvy6Na5X93VZvFBpDRUHxqgLLr3",
  "key31": "32sEcEET84G415GEkTT6xzsVJLNbL2SLhMzZnaFQ72qBmomTqttibsvET4pCR8k9Zj5STf16sg7UHE6A1KowDt3E",
  "key32": "bcmUsvsSsFFMZbNHAuAJpParvvmzb37oE6F3ts3Fn4A1FsFqrqLDECp5pN3WibZHNVK9STSyhX1WjoP7AMriN1Q",
  "key33": "2mLNCNZsp2wbBUH9Shk1azVDKeVxGMgWPBFtpWUcCZ1bLPA4ueQXz12nVajvsh4bzP5qxntkrwv6Wcp4c3X5ygmF"
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
