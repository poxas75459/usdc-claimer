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
    "3ZvyEWHf1DCvXKvWfTcN7EpYbwZh7ZQkdVMPwHo7rCuC1ZbLWbR2pTbppQDQ6UYxEHBmGcjHi3A8SaZwsoj2zdFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1QUNQAcxDUN9Wj1VEUK8cJwrHN1p3vqx1NzpWnXB3K9WMfUqk4euZ9xa7ccPqA8nvqPmHQoDyFXzchUNnJKMMi",
  "key1": "4fHpwwDjH5N27hnmgLQNfr2CooiwSZEarknzNefdq23GuC2hFMoJyq4y7HXLuqf8jsFoP661f1kx4brgxXqMd1aY",
  "key2": "4d1FppdMCj9LEMm4br7StjcrRZL3uj7YtsNWgeLicU59ihLpLZQ1kh1fuVgSa7QSqbzDPv6V6zaFJqM8mdrWcAFW",
  "key3": "5LMJQ3xhFFprn1Tq4nRytmfPcwbcwGZLVVjDzdAN4ghqbhyLc2sj7SosvskWncfDGk9gt9g3nn887Qv7qoBkNvTh",
  "key4": "57LzCuGsRx8Fwe8EfERmkrAA8UdVAqAeJ6Hf4BbxvAZep1ydmqLfMmJMi471vmrX8hbV2fGJ9ozgCHBRUDBjua7f",
  "key5": "2Ae5uH4iRe4YC3Jf4vJUNp2XotHAarP8xDKLcb1ZCRz6nNUwKeCR5Vq9xqwCxorU7dyZHvGBFUJEbMgBBXpT6Rij",
  "key6": "5nQEgk6tTecaAJjKUwBkDvpiBQnPxnDFBVf7dhDtvnTzPVsj6xEdmQ5vK8BjxEYJwDLGqyHMhmkupEdZ2RZTKiRE",
  "key7": "4JPDPrSHTmMWC24Ly2xqt2366Y4yDNuEYsyCDLvLPJVWj21es62DvEmM45NUaqqwvALve2XTgqbepdhidxubmHNP",
  "key8": "2uV2NgYvvqrTX3hFT9jPu1nYqyxqWjtv333cMvn8gFwxRC9iT5kFNYtJwuPuZ8dXhMu5WLp98vLKMwwUHXHw6bAT",
  "key9": "222WSKRmpkq7qzRsVvbkpDAWJDYXywAPEMayAwwj3Cwpoa4zuq136KTz2xT6Tfw74GuQoNjBcRVzJ5xQrhLx1cJ6",
  "key10": "5ocUJtjm2dsVjPscr3LgEsrByKSNCHdGRh11K9WZWXvCuDsvnJAXFcA75XSXQsXjN8qNsqDmu6c73oWFTGbzi8o9",
  "key11": "2WfRkd5hi7NmmpZaKdicRWA2wJANzxmouQanMhqPGVcSdDZgRyqHoxLZ92YimqDK2V2oGNJMqs64AgqpeLC8xD8w",
  "key12": "X2uGre6C26phrTZ9TwysCG64KcE44wjFTu2zaXbhfFvZcPVXAa7rc8zGBg9rEZDaqcxnMELZDAWDFqFqDfBT5zr",
  "key13": "2XWLEahiXcqCRxogbbcFVonGSjccmN7pEHBreE4GyQzor8iJktHgqYLnaePTpK7QtS5EP84T79TGkNSdiBF2Cd9v",
  "key14": "5oB1hNBjGEac27zebmNyr7Ej3sGnSJ79gfqsgRjdu61sVKW3ou6eVrs7DQqsFHDATFShMw3ddHh7GharwE6F8iqm",
  "key15": "3kxn9Lt2LVwFeNwhCCaGe6ywDENJrh4veArfNCEyN7iADkP8rtSttXFWszeMgaKJX8g9EyQc6emvJ4aYt2aEvPTa",
  "key16": "2FJFJqUHyVH9PT76bzMhHKExPPaSdAbjdZtAuuBinKgD2YaznEKFoYafiycBmmZDd5m8J2dqxnLve58JMbM9SyJj",
  "key17": "5bnuhaXMjbvsoGLqv4xQrLNXzQ4ZNHX82XnuhW9mg3Y7GCpNbm9r8gfvQj5uRSZF6B1hQUtLTo1JUomi58szuwXZ",
  "key18": "5e3BeGP5q7xbzxNs5Lp5xN8rRgdsSFrswxZ711MNLHL3FuL9iJnxghxYSMyKtSuUeLfdptPHHgGKdjcFYZRWer22",
  "key19": "3krgZu9PsR53KPLDrxAZJGjQrVFF5G6r5F9EzYWaNzExLQpvK8bexnjg9as1ZDGAiEx53Hupwo4ohkVfhm1C6fAh",
  "key20": "648mWq9ecJaV4yH4hokUtGHV5bT4daoL3dJwGGT9wktZf4932Sqs3cZftP6cLKYUkdb3XkhRHefqhU5GzwKou73F",
  "key21": "343Vx6VrwxWt1wzZuxFGUVdvCBZ9FpXPESJpraddiMF5SaYzu2Lzu9HgiEqMiyGJvJimFcj8mLS9UbMkuLk4TpTM",
  "key22": "5axUAWP2s3gUJm9W5SpP55uq5MT9uLdkQTKx6roGs6yzFLtzfkve261iLNst3mV3x2bUBvjSg1ZbvTB1XcC6diLs",
  "key23": "5prwY3UqtR4WQfbJCvgdRAS58oLu74p7u3nCjmJyQ9YVGifa4pHxXpqJs3prW7mDSjFkKf3MKCAGnT9r6YRcDMFh",
  "key24": "5X31poosp91Mf75ro6z2e2vdJLmEPsdqfjbc498yWdZhpKRRjrQHr7m7k9iPwfdGYC5MfYhPwMHMKDp9jugctqBE",
  "key25": "3SHjMDMQJ2k162wjF6NzQZjXEeLSgNjSBaw1shtDkwcwVVBDu2UjYLzZEgcnN3vgnAnkoMVMMBXWBxBn8eKu7TVr",
  "key26": "333wuB5wML9VhKg41b8PMMV8cLVsHJ5sMYxXFAu8SMTXFnTm3rp4ekDZoN7bYS3XPFcoU2TWKxFaPMGZVFvskniP"
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
