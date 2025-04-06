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
    "xdYSzgutG36s5e7FtiNVGyEyjD1YKXWugjGYZfdM3W4EK7fLYSTjwjga4iPSQvN6W2DeV88xcWJ371f9yHPtD16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCT8aUxSKthey1DqYQ3gMgdRDMN5snbEeeVvmv6kepNAd7kAUpN463z66mR2XJKRodAEqGaM1hNxCZ7DH2nbojp",
  "key1": "2g4Af1z6XoDEQD4mvkSGKasYJcUzQMT3oNU6BB4FiGfUW9nyL2AfZitE6wYAnRsZogZyoqfjKULo2YVc7231kv5n",
  "key2": "36jqt4hRLhPhwXDc9gZg9rUEUmin15VoGxyRaXZaaE81DVbWyg6yZ6rHigteyor1JWTFeEXPrHVez4b1KxUEgUis",
  "key3": "VCEX4Afvk3TzgushCu8XYhWJjMMYmeCKxEXiro4PVaB4iKFFPfmLkgKpGdPkuruto87J7Y3cDCkuj193KKPuvwL",
  "key4": "2a8YKfQzpq1ut8HmdNGUHRnG4CDNvKccKSQsNA1SwgQ8UYpxrEcKyPJpbbYN1VRWQLDzCK6AWu4H4ncgeKTKzbPq",
  "key5": "5rF1HHK4joBfmCvagkbj6KcZyZLJC6uJ8UtNMJiUD5PBeASFGwwhXyYdbFWbXh1SQVrXukfk3kqdwWDya85Rin7p",
  "key6": "5DGM9f9PzhuKkYecZk1T55ezZu7gveEq9J38pgEuqv3h8d1xNTJQfLe3CCLrjitHGFqu4ctDiQbWb1EspuPos3fM",
  "key7": "HJW9UkFJZ3EjMVXsx6bx8GR9NSrALgeZCLM26JQSZ39MetkS6AjxkvzDi3qTyqsDxrTuucZvNAm4isBBkqXL6yn",
  "key8": "Euq8bPVUWeG61g2zspHRvBaf3jUvS66WuNzs1yJGJX7kKK74PZ6ozx6hURoCGwK8qB7TGJn2xXtHcT2aFhT4f6w",
  "key9": "3z2UhjZo6CFuK7gCF4HnakdNKe1mNoWDx3GPvE5fmchGsrm6oSrsgZTqS36qVDCRJm263Lr2b1S6zaEEB7YrrhS5",
  "key10": "4SvobKYjGpse3JMK1cZ36bWL8NChdcNfZq26QcZYSAxwMq6NV4fK34QB2Xb7pS6uJCNwzshX8jaQ7XaGiDL6utp7",
  "key11": "25xsfiPpGBmWmGTimAZNsrRjTNpLvjVa7kRmMLwrg2FV4mfvKV8Udjb197fWk5AhQZ2mHoTkNMfXbaPbp9f31vrZ",
  "key12": "4GthJNyAtCi5Rr9RYn2fc9Ahkdahk5V7iqbT8TZFHBKZ82vRHXJLA4Ki3miiG2UErSaP1cj1Szrs4oFdka51kBdF",
  "key13": "7RuaJ92epkXn4CzfKErbJvBAMpADeWM33PzKok8HXEBypLCHsVEs8ygw52xuC7VBoyRK6rGPdjUxSEap3gtYgo5",
  "key14": "42thmidG7XwWTsv4NH6NC8MbiR7rsMdcPUdfeFQXhodT4522ahyTSuPH55tSDYf5GoPUYvrznYdUdqYXg3mPvx2Q",
  "key15": "29fSF8Zr9AEYGBr7pcaAAgk7RBBR9BCGnYEyBf3mhdX84hYgcC29dQdq3sQx6AeuQPXMAMTy6pvAq1qeQQPUTPtS",
  "key16": "5ry6qa3HZ8EoybXdfb6QUwdNWp9fWhBAo7MqUfrww4Tp6mKhweptsvGHbtUXkmkZAG4spcpcaSJ9mRiNxmSf8Yzd",
  "key17": "254646hwDTNY2DbeKDcoLrn3okg73oqby7UpLKwJZztWCgFFprHwgpS7B4C1iCDp63WrT6iMoRHgsSvEGstDRvad",
  "key18": "4aDtS41r137LFc63S9dWAwzXDHT1itdLeHp9d79S6N42RQT6vFwMoZBw4vpc3mnQfnKzRRrcCeccqEJ3aRwANtQp",
  "key19": "5SZVJe75qd9MJLTHqtPh6jKCTKtMVS4Z5phnbV4tp4FTmZ2dW9VpzdX9ronmi3vbnwDgFjvTU25ujmt2v5XswzLz",
  "key20": "gMRrTorgiPtuWbCSY69DZacrJVSPjKgA4u24AcAheoYXsJopqp4LNphpDDZaeHPWSJbxkYgCQwUSf8bXNTLeGVh",
  "key21": "3uQa9UNt5TCbqYRGg8hNTvzSGz2FSPExYVcbgstbzmDzLkgNGfVw7FuVpKutyRvg9h72QTFFE8H3WQobGb1BmiTq",
  "key22": "3J9vXUp5Y6ccnNbzBfiqUHMJ81s8doKRL1D6fz9WVKhhEuFHboQv5wnwQmEjkuKDGMR3rvNTCc2Rh9NUFaWEYeBH",
  "key23": "3AgRHMCSHQdFxbzfU9gqgBxZg7fSxhrpHX9BcqHewsscVQKtmNjDRqzBhxmtRgjXg7o4bYxLA5iviZeomiamd89e",
  "key24": "3eZr9QUFRMYuv5zgykisZi7u7MdLHgJgEPb54pEGjZRGUbKKvBmuzQAiYVPDwobkZb1gVap7w94kL2kjGKBAecBn",
  "key25": "5kJYNbb7PsewpTKcB8ZDm36P82uHCcWXiL8LMjpym5De9wFtFsraLtmihPHXequbSbaguEhrXLeJ8et8PGzeN4qh",
  "key26": "5CEaRNrxysvy56NfawqWVPuJt7S3s16TjiY5WJPrEuvdnU91HA5DjN447VEpKVDVp9425fb9wA5FhEJ4xAQhAomh",
  "key27": "3kyZNXn6n7e434wLHcgZMXx3sxKQzzJLXrJadaF9eJ82niXk8tZwKvc6GkMRKBJN7DPcRQkRcKYSpKc4xVxMRAac",
  "key28": "3Px6bq9FPTYUm2veoRfHp98eQFbfk7E733D43XLDgJ2TGgbVjjQKDRLbyuF9u8VnBa8LizFy89gTCHHvjskbNHgT",
  "key29": "5aRr62E8JwWYww9Zh8HS25X1J2MAYn5dAYFKWKukySE8Kankyop3dC3opENSZjpSJpJ5bUF4AEhJAwhr5iFjew7X",
  "key30": "5NPFjcmDua6SkyxjxS1WT8Kp3Wh6Ytkjq4ARbnXT7bCM6MC1fdMUzktzFxzccPLJt64ZwJNJVWSwmLnLDvmfoP3a"
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
