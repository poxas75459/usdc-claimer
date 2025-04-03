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
    "TZ81UDiJrjRk8jYnz68rEM9ZQFXBWc587Qr3tFVJqAv4aHpK2D7dhALZsLPM1E5WbL7c97y1nTTxcpqDJ31trzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vp3qc2CYfnHwXcBzMHq4XT3A5fgfyL7h1aG1Gkm6akDW1voKqgAR3AFwSc91NG3VRkuLsjXZC4ip992Q9vY3NLY",
  "key1": "qQRGS4pZtQSnYpATf7wYrEBgpYRfC7mG8YLyGmGvg9NX5BN5HzkDo5Hcd9PgB71FsoqfVAdUQ917aga5q3xTLCA",
  "key2": "eAyhC2cDRmwE4ARjBSh2hMv1AS9xgEjJTYpsLxd2UaR1ruAdULzXPdqYQzq24DhNYUTC1GWfehZ4ppqW4oB7A2Y",
  "key3": "2ji4w73NBGnrnje74haq7pLgiWQr554FAxzbMRzUKPudWTxiM268MzYgABtUB5GWnq2rAruKi7WZQ6Cf8kYCUyS3",
  "key4": "43b6VArobvqT672v6MczboysZmDX5RuD2wvvkqhzbojJmYtQV95YG6YWpinzGeib6JfrVw4hAEUz3MiBjhkHHbB2",
  "key5": "4WqB8RehRaJemZUcbiRSmKY16ZADRt1BW7KRnvTSZXUkDWyAjsjfu6bgJZBqCD4AxEkyctEPMFFdkXbrkwEtSqxf",
  "key6": "4Y4HNwPveb1vFSjHd7ixYPhYM2Gx2cRjeoQgL4ZuaGVsj2U5VHgDmh5tm6VKPgtvespm1nyMTu6mpU3EnM7vamPd",
  "key7": "2Las79oyCHAke3839PfaqpPgVbQ9ZwS6LvTRy2BHUDBDCxanivr68SRTvkm6WBEeH2eM15dfybEAERzW98GU3FPz",
  "key8": "4WXU5uBKhNmoFEvzA6SNxzQVx2AyL7KfQWig6oAgN88s9m1bTqwyU7CTkvwCs4mx1WrkUYEC5mVBq3u1xKsHmPot",
  "key9": "2yM4M6o1Ax1MGqC98pFjzDGkhMYG9XWsV5F1qTqjZ4AAjzqPEvWmZLW3b9vZ9RfBbNhD7onzqYVb5CxUJvYZ53nk",
  "key10": "4fhjtkFUMhXqxzYfJjHoEpVC46Zk6TTqCNKd8R6N3zXP5GRGWyHdK1HVLykgvYSNkjmJ81QDF6Q7zPEHQTDaxS1o",
  "key11": "4HXEJoVDcecFDovtYZWrqWwkQaqxZu96MVbrVFmuALo5NupqkAe2jbEZobLJwPsHCFjVo8MrtL8PRiGv1dD8vKWW",
  "key12": "4iaaz1QmVDv3BWhCVsyHajM5zAsQQyqECueRQbQdEHwH59TUWdJZw5EN8BqSPSdjzLFeVqMBL4Amc9X6YRg7SrMD",
  "key13": "SwCoJHRZTkgaa3YPrKWNvKqTZnNYsZktwPVvdKb5aHzTzGkgKp2Nuwd35oYo3s2D3PL8VtfVQNJLKKc33wAVdJG",
  "key14": "5DUoEpwuxz9iQhMYo8z9nFbLGWcHDLWA3veWct6WvEZ15vQwn9YhhvBvKJzB91EEnGHiS1Apwqh35yHY5qA94HHE",
  "key15": "SQmH3Y4TKqNXV3cEk44CcB8MyMZUatDBbPzeC8azDYMqivtsYbiGr1uzKrrRG6ohnjLdET5iFCnybrzeDSrwqPV",
  "key16": "PHKcGLfi4GNqBScY6rDrAz4P3BUzcfArxTj75ph6tKM9oCQZkvvgNaaPDC5DygJhcN4zXxqMWtoNZSssxk1xHp5",
  "key17": "W8NPpgpvT9e9X5cV9YbfPbRfjcwS2GDewBg8YUUUo7BHFtkMHvpwgbuhcUZhY33bcEnoCwubhMkbE8sfSHPXi1z",
  "key18": "3nZJ5GvkM6fvau1jNwqsCjDJoDcxFEkautJtmPuePLNeMikpxWAxp1Z5RpZwb1BYagfrhDXQy9UcnCTYHXmnC6Lu",
  "key19": "3zFPD5MZUiTWZLYkoBtVVD2evSJrFUZHVPWZBKkyi7SD2nmEepudM2DMpALb7NePrMVP6AN7HaBgrGCbQRAWgnw6",
  "key20": "5Q5rWqD8MDhdG71ZV17Ngpin15dUb62sutt1sdFHeAWgNkTSSuMapyQ4Cx3EvAHdoY9tFAcnADpqFYS16m456ScV",
  "key21": "4fXZGQAEDLNa9UjRXiSQiNUGPhVSHrGgh1fY4CWbWJ8UKuUjRi4DShL2iSyhy44YJPqGGKWFAEqW73VjeWF3zfwD",
  "key22": "2hdPrM5EGudZBZPRDBR8mBB5kZXQWCMzqJNmGD5pxdreLmBeNCn8c3bSrKdnHJKRJ4WUt9kG19PEJT9BpEEmFq6K",
  "key23": "4A42FoNhGyzB98rQfDfkcsuMjqnuMEJcZEvEyhkNQV6BdM16cRic9usENDSSAbqk5T8zWPKPhuiXmijqTqkTQo3m",
  "key24": "2UHGe3aVALYAnEen2WVgiyGQmP4PYMXMDrXNBMrj9PpGQumMwMkAoPDLAxBNPaFSC6HnmgR1vDsKhvhvhrSAijjG"
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
