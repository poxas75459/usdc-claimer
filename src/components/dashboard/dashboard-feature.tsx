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
    "57g23YY1LhGyN1us3pUsizQMaDBms8EDCpDs8owahJAnVuer6cWzABHrDTpYB3ZPPmQP26Q4Z2RSAGBRey9yfRXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1Ze7MqwTomvRZJNUYTYAax3hd8X4CAzHSWPbrmz6enCUBYf5kXpYZrjE8NQ1q12Kaamm11DcLSKDNgm1ro37fr",
  "key1": "qoSFhAeTAWpP514AyyFPsq28iStRkiSMgr6nvPYJZeMn4JcNT7Gy1KtB3N2Mqmmob4eBsX5er9CYftEUyeqomH4",
  "key2": "Uhx9Ng6fGMNG2A5s39qqVSTyZscSq5mQViGdQGoXzSQBJk21q72GJmERfLDEAymKsYhCB1rWxWEanSfRPsCSRgP",
  "key3": "gYnpdpufgwpmjoN39eFyseJzQi3RyDXbJCe3TBCPwLoUE56vF8imw29CxaNDxdqyzeTD6Z1NsgX6x9F7GK6Ynju",
  "key4": "2ffzjJpmgXW1J3wsu9jS5v5WHNVkFXpjYKtcAZqkxLAmHuUVuH7pSQbtAuGvj5NrzXSTVuahWTheSqoGezMaqbjt",
  "key5": "28VNCpcEgtow1SUX2vX62LHhgvdH63JL9uRUH6yrR37rU2ox2psqW2TaWPFCQSA9LiPkmdc7mREXYMiUvrMKaoAh",
  "key6": "4C8AzcivzZVNFsudh2H5PGNh8FTXGLgRLttHmz5isVME94hUqdpnLKRY91XVwZJKbw5KFQvedLowz55y6tTx7L5J",
  "key7": "2axwMjpKrbb9S7sYBw1ewV3a9spBRebopYooNGXS2hx6jRFp7wgGANEu1u3FHsYV4Pru64Vu9XDFpcMYUcW8Veqz",
  "key8": "vFrcu8KLKDi7A3PggdXnyPLPEuifrD2iszmApAHJ5P7dFqQsuAZEHSFC1hfdMW62PsAeDYZBuN7x3byZv9cvrcP",
  "key9": "2UebpCF5icvbnGCivpXxUYkWU9VnqozUsfc5uccc8V52av82NqHapg4yGttwwctJa6mmbsyeVP7MDcAhx54znBvP",
  "key10": "5f789YpAnoL7BVSWqegUQJxSvEngXPNJNG8jaktrVgyVNZ4YtWiziAh6AWkzazypkEkmAu7np8Tasps96kPpyN9Z",
  "key11": "2GT3czHdKTU1b5CkUk9AYjG7MTcRFrSLbjfXnTWx9jYpJuoqqGy6BCMfwjCBjtURkD1TvtvyQkf4qwoGxYiD9aKA",
  "key12": "e4tmUA9oPesfvEpWmvvmbeQKUDh58vSojYngQYV3yLfPPrfFa9CtDbso55vJdGeFMUQXtSfuCvLKuWZjCUPc15H",
  "key13": "ZKwksZ22JyABzN1y2rsBQ54Eojr5vb1A22biC5dpWcfe1zNM8yX8UkwhDs931otHdiSUVZaHAkKi2cwNMyPQUba",
  "key14": "237ZP1VDhiDfCrrNhELnXAy36tRBHtGc3WsAd9FSfHYE2uspLiQboFUX9FP5ncQyKToWkv6niVcvEe16iuNXe2v7",
  "key15": "4xSwvaKbndaz9awbKHtL4gnZwwcWNb9mWx73XozpvRpp9TfFS7EusMpYRBovJ5yYbo3bYchrAjhTKVASPBPih2By",
  "key16": "2KtmUzMSsLQ1cWgmDxXSaYp6PrCtWDo1u7sXQ5uL1a6aszaEjpJKkwr1iC65DqRS45fbp2kXKobBXisEgwTegPZR",
  "key17": "47ygi8XCDzNmJXouSE6KXA8QVnK3QPMQF4WtRr9hGidTUAJyxtg3whEiwdJUZfzt9Fap7XjNM9qLY52egdoxkYkh",
  "key18": "WTrD8umCnnkq2v6H1sTsf6581qJsP2ixegUEiUwf4kEnXwtdtm2g1VAYpPksaowckgShHWigQxJbycEnoFxibar",
  "key19": "eMzaqBpPjvr6d9RM9q1ycS6HNWEk892p5kB7DQLcDz4y8RHFVQtm6GpMAFV8dPftXCUvYEGYqghHqvvUhxBc8J6",
  "key20": "2oPNrnBBZ7DmGH5A8AG3wgsSRvwJmXm6jJd4rPALgAmHiGo9JGxQsSUKkrjMVDR7qjpE1kRzfH2QE1iXHGuqaebz",
  "key21": "4hivtrXhHtp2x19bK6dtPLrufy2wH8FW4cP5QchRhDadN5y9VKjzSvf1M6ovgmiJdbKCkUXHgzsQJYPSZ5XqMgUp",
  "key22": "66wZdVKKiBGxWsqujRZZDFsnKsdRwhdhhWaL3W2nP2D2Nm6NxrPpBfEnp2HqsYoisbqeGutTMTAFa2wg76zKyEza",
  "key23": "5BGuiUW9ekFL7cTjzLg9UKyM6fCS56CPH4zHc1v4NuouE5Ra2umNcAvnKctMRF99hghNiNVjnkvRczU6FPbbQQTv",
  "key24": "4cp5QcGxQ3wmwG463EQuu2KThrhFggqHJPXk3rijr9bQEyrQfXbJe3TvuMay6LXtpAReHwNfFqY2QRLZWq1tqSJf",
  "key25": "y5GuZjamphncdwVxFyocPJxo7RTJiZs2BXAWmmHchZzSi7NobDKXAY31wsiQTQRqNfr6hdvbUPdydg9eq5NsQwL",
  "key26": "2XX5WPa8bSApWAMJ8q6Yr7hzKE9o2NRarCJewxUT95RZftsQ2VChLCfFZDWbxYHtK9zXKGbZW9JRuf2yp1RzKHdg",
  "key27": "34mBADaUyC8q8R5UcFk5T4fcTktKZDecQLFUwKqMPr8dyBQC5m32RaSEn92KXtyGJsxgHXBriK8Ys5HoDqReEZHj",
  "key28": "3r9JMKtfBA9uCMGTo9ffHBXyydRiDkaMZ1X8eMraqPEQJRXNZfU31b2CjAz6BUbiAaDqwrQ399SrWS8F3zwjhA25",
  "key29": "3FbsyJ4VoVDYkr1Kcw6mH3DTQEy52QaP7KhjuV6U7nvfQngYBYFDTjppHyeHRWSFuow5dkPKRSaNEWJ4kNjJMA6B",
  "key30": "1b7aUXpN9FkVLqxtfqHefnyHRSRQGjdwgTCAoJDXdamSS9payEZE9d3ac4Qd8tZtgLs9dqaohPGpBvB3iqYfzz3",
  "key31": "61WNUDUAbupw3KVnsbksyXtwxbggeaSUdPFV2FBAaYpbU4gq7NrR6dzM5vnqudwAmrcvt9mqEWkidFGoNeYdTBU9",
  "key32": "371fY37q3q4FAj7rx2j3HFdvvAeVUsm31sRKUn36b7T5gsqCu82fDWbfgN3LegzfFdNTH9eR5spcufqZbFdxKVht",
  "key33": "4D7LeSYTrxGRBh6WznzJDvNs3P4ey7r166Y8zmh4FcdbvHE4VL61141WLViffgFnkSnuyJaJrDCn9qRVNMz82fUH",
  "key34": "4MvvEZ1p5TZtQPQ7bj6mNdZeMKi62d4LaPM2yCV5ZcBM4X4XzQ8fe7kU5emedvKWQRfwGHhdaUxAreA4d9k1Xsg2"
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
