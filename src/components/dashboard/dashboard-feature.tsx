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
    "5PnsxCdK2r3wMRJa1aRSAe37zmHTLEBi5brPTz2Jo6sEsDekcEPZrnqBaVBcbbK1UeHViVdGwswjRufQFQq8YKe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6Ti1v12W8TuuUqAyfrB2hQs5ZFGyq3KUBFSWkquWpGQrA8C1Qn2Dstm19h9z2r36z8bKePrvA87LTFSApPSquo",
  "key1": "v2H9w9iWAdTfoJwGkATyNLmCAYcwpgoNpp26k4JpbDY5nYikAJCermmoxsSnZAoWukiF685QMMjuf6JWzoR5nLo",
  "key2": "5yHb8Yae3Lg8NYfFkJAzKFogdLYJr4Rhg6bAWSfKTJ5UB3nUdz9nuR2j5AQywkP1QGc5xajvViB5wAwyVZpq5Qy7",
  "key3": "57GozPmrtVrxVgY1o3CvWvqSyQx1aQoACHqruGHBrPe1toWaXo2mUKMokEDH2WLrVauvMivFHAxd7bDjELp99LmW",
  "key4": "3UgUVWt5gwAEUP9eZFWK7K68MekLYKAwaLMhvQhYy3gBaiAARFSi2mcgdJkohBbLoZGmmFGWBSHhPeGeg2ZyCoeY",
  "key5": "3nM9NgriWWq7WnwTSFiW83VEJFa9q9aPRhYrWeqPiZj7c4TNKDXaZL3JuJus22zhpcnoCCJzsQHmd2nUB8KiCJBZ",
  "key6": "55B6uCgCTPoAg5FjY8yhK9DwcUYqXWjiP4Y6CcoJ4zW4fEfL3HBgfPRDqSP5GZkZ6xXmaubc1bqYQbnsutJuVf4a",
  "key7": "c4VaZzUfGYpWY3tKufP7jAo1fux59XxbqSRLAHmk3oYmiTxvNHVdAvGCnzJeBXhtgZ5Zwx4sGL8YWR1s9cDbPPn",
  "key8": "32WE5bUafeKRhFKTYVm45ettbRArhcsdvswBAnaoQqAG6DrSZmpxHPJVe6hzs5hEgoxdkBdYq2YpKfzZnQgNirhX",
  "key9": "5vR2F9vHYLgWcyvhPxZUhujsBXaCTd9NCYAwpB5mYy7ecBCXWPJsN5u1QxYG3FtJHPw3sbLkbZ4KBomcRTuycxXy",
  "key10": "3TEvGytioCc6yiCpm4zUTLwz5CdSoW1gBwWG1NAvcTpqg4rNvNwo3NX7Q6XdCtvQ3K2nN7NZ6Sx55kXTE86VrwnW",
  "key11": "3CTTWFTKjXQ9V3XD2vTMudquh3jX3amCHyvtHV2Y6w2pkKCit6bkK6VMMFUdXdbxAhhXXSC88RofpkdzG8euzh4u",
  "key12": "5mW19WSvCc8VtsV8GQSwkf1bDS5AMqtWjWRuQQBGvJaQxKjyV7JnYW8u814T4jHjEhR1ze6ab6BkhXhsx9hwrBGP",
  "key13": "5JvkhoUaZjcyRiX7r6q4mRLCT3gquM86N1PFeAzm9mCvyQfqLCCM3wHZDpWqFzouJiEECWha7JivRwoHPtKbEnuj",
  "key14": "62QAymyU8SJNaN7zKcvwezqGTbwgYYtmJJUHR6jhLqJssojkUosVht9hP7R2K1uWuJKXLQ28vzNivHhibRHToome",
  "key15": "vmd8nu5ovBauHMPSQfnNRBCmVabiMchGdM3nHJyjEZHaf8X7QqpHWCrmYayfTzcjZd5v28N2teLwKgKuVSWcf1Q",
  "key16": "3tGTqYaZnwwRaYobCgCSeqLW96JLsqgX9FNUzUkdA6R9ZnUSXMbMS3aGQyPF6vzjGVuKQ4PLCMXnCWx8Lods1p71",
  "key17": "4XCJUqe4QmE8wwJgKcZX53m1LNqx4K5KkWTG3eGEd2oNxkwtgp8jvkwxF7ukYgeZ4omcsqeD5D6jgh9fbqByZtmr",
  "key18": "6SEZ85UeVGVkDFZsE8jjXkJUxfKe2Zj413XWJhKi2HiFJWjpK2FJRHxspKdaYnozmEnX8jfZR25N383uRSw62Yc",
  "key19": "5kLCa3BwLa3pGiHCVfSTaWY7GbFoacTM6EgvWijNNUXbnVtTiZ9bLbQT2E3jpxUsrsZppZwNoP5p91F69s2taT8k",
  "key20": "2X1YhmjWwSZFZVFaogBc7SnHHdtXJtRQXHtkz1PVJ2W1LG9Qu5aYXsqZqS38rkjg8QRFBaGUoa5wzAWJjdssDFZs",
  "key21": "2pNM8AZLZWZoMfcm3PzBwxeAeYbQuU24pmcnNkaqYbYq29A8hxAKAe2qsqkHaf44YwXJXQffprtPgvkjXFPQ3gfv",
  "key22": "C2PLLZS9n27Y3TiCXHovatnQfrVeM5j9q9h6cBoPdGM4oGqpiAJK2NtHom2y2D5t57G4TWtcwMM58UQMQCYZJtA",
  "key23": "2F3UbzKbv5BrL7e5uUdHGVA2e1nDkRZUZU24qH7hHedVLBQbq47RBHcpWjMCeaz8XyLxzFUnLo4R8VrpFo7DoBq4",
  "key24": "3uoEjjd61aHCPk99mcxaBik2cU7VuLWDXVEoXPnbM4yecqQkmssY57uzrYvqKNeWEK5j1Yfs3nhYsdBtwwNj4YxU",
  "key25": "44V8KuYC29T3kxnsy1ktJqdckzqSt6zbK5RFQ6U7qDBVe9Cgmkd278K8ru8dsHfFSa277HSwVq4fdY5uezXe9uyp",
  "key26": "5ZCFe9cNreunyAPqmPrSX7we2Q9RaXZ5aVMWYgx6ry8SixTfwabqDfnoX9i7zSyk5LTa6imgda2uaq3idtygGm7H",
  "key27": "Te81xGGtyhANkZujGFSDV3U1mgtHUQvqT3b7BPVew69kXkFEJ5gmdyjQSJi4bjoVV3MyLDeCQ22nYUHHfY7Z6hR",
  "key28": "bQDb9JZbuhmL2DHWqYPizQFv6TAXNmiXfYDNfCtBc5bfAbiFGSYBi4iMKAuAZC6YdboY7e5XZMV5B1Xf4RXRLz6",
  "key29": "5bJpUUSBDUCaatGUWRhfr47qSTY8yjAhTMbL4DYptTeHzSuTEuKktSYTwEY13P8WpjBA5UMfFapi73tLdLE5vLir",
  "key30": "AhtpyNEbJJxEL3qEWVL2Kx13YwsvtGCZn1pzhFViUoDADjf5V23LUvZMSifqiMi3hbNGzd4QhUCu1M29udYe84Y",
  "key31": "3CHqBTBBvdCDBLmFu22S4fbaPeKt35EH7YqtcM9dWg4WiRJSFoYcwukEBqwD6MhgawGLBM89RDDT8smn24MUeCY8"
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
