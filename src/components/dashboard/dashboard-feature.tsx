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
    "2sNAQifXKi5r9ZKKNACTGg44jk1zkT7jszVeeodfmVAQJaUQb9LkMHbGEJfYWdGTZ5gmdALbcDxT1DZ4zpvMag4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1vUNuqqnFo3MfZ7yGb89CcQPzFAyMQc5tRkGDtgGEBrNQLuuASYnc9aJ4yZxKPiAFE6oxiQWzS6wdknvQZnD3u",
  "key1": "2Enx2jKd85VKwJB3xuSvRHpymijdUthdiEeyo1cCmqojHVz432dDgeynYbZ7tkw6487MvnTsVLe3b2SuG37P18zH",
  "key2": "295ACTqYaMGxjZRDkBGm9UwP6dUTfvkK7uqsjxaYxpPwKkWWsVkAZ28EVVJ9MvyYYJj7CNoyxUFxuzgixLH3sjzo",
  "key3": "4vzzz6pfq5TXLPKYJKXbJry7BHqwj932UJAWqHbaDJpTpEr4JF5mjqqKZcXphHpngiMsNHTtSgw1NyjR9a86JpC1",
  "key4": "D3WnT8ePavyMMRdBnvdbtdAe7YRB1b4p95ZQhng32zDmhCdMC1KZPZ8z5AAyeXHTmKaf8awJGPf7ir8pBXBcaf9",
  "key5": "2hZYGY8AdcfCrxs3cirN9qFskwWhcQsju19DbgkmNftN8uDhzZ1Y88i9LUnBoEEVzCM8vxnPVTcDecnS1888rPbX",
  "key6": "49DtsAyZrmNVqxo8TbAwjVuPhfkWPYuCo3JyNmCtN8scqs6bCb4u2r7qGnzzbhbMrwibECuMXuef47kLdwyg8f8o",
  "key7": "yzEr5yk3qHhEfBeNtooxeRH6aqo7HfWYbSRwDJwQMHcL4ME2ALdPjn7GyZmnMjYKynC4M4fECVrdPh2ep1FQspE",
  "key8": "DVNtqwosM2ZMNBFgh3hZtyw1qLp3ECj69PfFrFTNyFNQtvQtMyhEyPv9pwytxsq8KaeEwhQcmJkaTjCFegoUrZd",
  "key9": "4peAZRHn3Y1KR5CXtqx9BGRiJTizagy2Apiq6g9w4pA3dzuaw4zNeBtUMWrBxdhZtMwUgwBXiQubt1pmCGMpFy3C",
  "key10": "L65yujNzCwFaUXBb8eYxQvEP8MUtJSMiKBnwkea2ciF6UB3Gs7wNJrB88Bit6hQXm748FfgqxCJpLRadJrVAP9C",
  "key11": "AdcrEUpGhRVBHzwDHFixWSvZD8Vy75fsNmCo31ErPhVWvgNF4NfrZB8Umu6cx4TPeB3h273dRedfA25krrkzxtf",
  "key12": "39kZhe7NCHChhMbBSKp4N5SxjZ6R84tHXaLz8bDc9T8tseSRACozGbyHfGyFAtd77ZiCZNKtHqXboFTimNqiyb2L",
  "key13": "4Z6J8RfATGCpY8XjwffvG2itwGZs3UcU57n3UP9WVmKFu8nCebkDgacfh4paXsKBqxbmcoE9ZEG7yGKs556g6WPu",
  "key14": "4Yrm8xsRrJ2SoEL5xqTYgk79TB273UrZfD8kTxA8y1afBmwMF7XwcFBWEVLUcK1jeduzzUvCoXs8JhDwdJHPWd5W",
  "key15": "bM6GvSDz4VB9T34PMRj5AL1PhBY5E6pN6GEhzyTaiN8A3fSgosU9MqxK7C14tKUbfSx3dsouC6G2rzeWcLeYUZ2",
  "key16": "5vnQH7mvkwibwhvJXK5Sf8jrD3V7niUyg1YJjgKDPzahXWiaGLNDp6LUrtjA8uNLD12BqCG4pJYQebvzpR6v1ip4",
  "key17": "LZScL9DKYNW7UmXYG48zXG6aEXeAe1BYAfJXhogiMGzLYWGeyvL5H8mf81xGVf7fd7s2e5MAqsmMGyFXgVJifF3",
  "key18": "2nPDi8MYyjRvw4RnyWZFvpkiN1cZmu439MDn67ruBd3o9zMYgkTMNfkZfLL7zAz8kC1RkdU7dHFDNAFYD35uLDy2",
  "key19": "2MuTa5Qtem8GNqCVjKDYu1ZDRcY9d1xAVHHnTDE1z16f7b4GJAiUoVLAWLUMx29s7NjR4zCnAyMKpmhSTV9F4eHm",
  "key20": "48Mr8Gyht6x5EyqQ7aAq3piB6ZQhiJajEZCieA8kGEmaTsqXoTkCRBfMfhcd4Z5JXzDgkwidun7cJqyisDkaaNW3",
  "key21": "3RdtjuwALZhXaDBCXBgQpqn82s5hkfCi3339jNydACEf83STZZY9b1mjSa1iWJvJQK8ne5JKYeLg12cR5qEr1umv",
  "key22": "5fmcTEgnqRS3cSBkuT1kcLWAds9KH5M7xQvGv9W6FdUo4HS4AXv9q5QiCobSw63TVGoYXzF9kTSW9QmR5x1gYcQy",
  "key23": "NPTcTWVESPK1b8fworXhsHJfSedNnCwb2mQzUVyPFmMxz9jYUcpnURuSS1vHwfvkqSvqRExsG7nb31mCEMXtawQ",
  "key24": "2zjs3HeZrSf2BsWj3KmpqF7qhPxGDjYGZeGEVB94jTscBoPhV4bHQMpCPNTr51JsoTT4ncV3awJnKqBP4StRz3Qi",
  "key25": "2LBRFWseNhrfYninjDhHNWf9a8PpgAcrv3BfpRGiMVSsjmJgAU9pQnNezppMr3RnR1poJyn2X5GfRnBhx5tsJfvK",
  "key26": "FfaoVgRtsYahYFRL9xyeqs9p5uJMnWiTjxBX6nGva7JX7tyvgpxxbRQaoqWZ62uRiAgpJeQKVyGWJ3aNTE8UeVk",
  "key27": "53axnTxaD6AqF1xJJecU6FhDconGgbCt9487FPyxoDvUsWxCDstBFfhWEYPgFKX44ePNAs7syKthAfQjS9kGGpph"
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
