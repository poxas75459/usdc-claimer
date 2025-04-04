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
    "pMz6Z4KtNhCqTehzv5vQJNXsozKMjamnZXnc2ACMsvmtvzHNE6W4EgUHTkbH3VoowzzNrEkhAmYdRDh58zvS4aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSFY3Ne7vzPVpPUdw5NoJCHS2Q8SDZZgzCJqYZAhSMXVdjd9t2HNWpK2bLQsozBNc7PMopFmpHU3gRc7bhyw1pk",
  "key1": "4txVmcFFym53HDGUErbCYzndBaNB1daFd4bsXSvS3q36nXciBps7s3LAccTsaLfMGME79qFwXMAivFEFdnu67iQ3",
  "key2": "EBX91gLKnSVMKnbbgWMeMC4WBsE3s9Gy9PC5qoq69mKNRH8eKchceeTPsUcbvfN4U7ixT3ZvnQKUzR7jZKkQaBs",
  "key3": "9dKFtApKi1VH2BtNJ2omHz8hkTZnrxQnq9WoxkQethU4KpqH9fd6mmsMbBkcU4d4rJPa4n2Y8auUUvYEurgqLEZ",
  "key4": "5jdzt168waG2sykkU7bzfqeH8TVh54WsHZh9qFGugzsdBNj41XdqS4Xwc4KMSyiD15uYLpiZi616HJssTCtkQfpB",
  "key5": "FtmbGvQ1bHpZhoBQEDCZZvWi7AtBL3igjAhm6Kr2WiaRbyiCrxeKjkFWz5h9ZijubTCULi7rMvN6RsAyAJiWv3p",
  "key6": "8g1a8SXaN4PvxzY5qkxWfrzm78v6rn5MJhsSSyKepYtp2bUHMiXhrvHn97RrKWMdH9sWcWEfpycXYoBKre7qMyj",
  "key7": "5eV9GHinkG7QNvqHd7ZL1Mb2dmWEBdgbc85KQVATjFta6e38ZD7Qc6bvyfvZPvek6FUy9FBmNC3UnRorCaG8QwjR",
  "key8": "3MWfmASCLgCvbGVFufeQXUtyfAfNFcpNoafZ22qWXXT4epN4Zunob412BXrzLNtk9QxAp3RoGZNSPVFjo6egSocW",
  "key9": "2fTC9uGhQvt1U9DdMCWHZ548m9RwaZjYJ3JBB9hCsCSpAVbTPSti9fnBTYv8AxqwLehMyLfzH58oxbAQqCY1wVvz",
  "key10": "24LLJd14duL5573Dc4ErijiA7kzsvJJb1c6g8CJBbH4D1bBTYriLozRpuacNFPXPef1QS5sDGRSKVK1kosUHyjoh",
  "key11": "5mdbELSUbTnCYsYHvMEuwdsdUsNZe741pQWr4XfhRNvDMkJz3jpx6iP2FHQQQiCebpMtRbjJqHjyBYRTPFmwH8Ur",
  "key12": "369PWYRxnURqX27PyjZQZ4rk9apWShwKjYVmXuKn1Qr8aGY5MoxDXUGxFi7wBcrcdxtD5S1bTEEEuahcpQ1Ba7TH",
  "key13": "88Q8eAZomuPFxK4bZAZZ7cSaK8rV81pBMVrEhzeEEoBUV3L7KzPNVmbxojeTZxjda8zD2s1SqBGBeNsp54geohf",
  "key14": "2ryf1E8Y4V7WXavzJo1bfdogGTGWuG1AsKQJWWZosNWRsnBETHp8ZE3w1MWnMCtwwKC8hW2qoLksgwxuNNwppX6",
  "key15": "R9weMLVf4bJN5tPGZVWhPWYWhVS1KugFV4NS4GQgTtc4iMz239gCapWGdtbZiyK6E7QnM7jg2zz19HXxAKb7wmB",
  "key16": "5f3HztZU3AJCnw4kDAYCgFxd3ystfQzp53yn7kvgktJWD5RutvvrVabQyGCQKZp9hwizFH8m163nNm33HN9S8bdB",
  "key17": "3FTAdui8tXmoTQW2grWY8tTafVSgobJDUhbZEsbFoZ8VxfMT3ZsBwHBKQ5yAYLj6uK1nsxUNxuuxJXgyYHjxjYBK",
  "key18": "3YK3LGvVQ9d4FXS6wvdX2RBiNzf9YLgUhXhsKSEXdpSFxwT56YEoCXzyudvLSgzLb37q9pVhT7UrLQmPmzw3Atac",
  "key19": "SJcuo1xAtanw7GWZxZ6TQPvwF4kH6zDjQ2uLTTtuZF6Da7JLwK5wsZQMJLjzzD89ZLobvcxMDs3A2aeDehNuVXY",
  "key20": "4G4s6qWKP1psie9QfcDuKNRbnUUW5TwzEVPsMHamR21qQW37EnxHYeDUpVHvn2ceea1zA94ihT3jw6zsQDca5rz4",
  "key21": "4ajfFVCimxPMY9z3xNo5sdi3a3KsWP4L215dceWpaLmkuW6uM19GFCCVjvBG4mozjPdBVK3NxPC6rRxpxswHHdh3",
  "key22": "41QGupqB9PUcazDM6NLa3uB5dQnSfmRW1Jx3PXwGoporzt2z5hnotgjKRV8EB9Zoyk8mxZfwUPNvE3cdnhoqKvXC",
  "key23": "3pwHmzpkdwK1AEfajYZRgvtkfKQp8EAzR8tmxdFaqETTsYTKaip6RumsgYxM2rsPyqqP2xtvQ2EcWoDWMzMzMMiA",
  "key24": "2DCsrT1m4mGuumQksLdrw6yjMn9pDuQZviRAzRFKZsnQamfFr8dAAD8gqXqwzYBFXDVzN6Y7saEZSNkiLCX2nAHa",
  "key25": "3pb4fMSCqj1fBquaNbDa8Z8GEoovDNCCFmNw6csGQRLwsfYa8Fdf679eWDV3ofrUhgNQY6NUjjcxHdjkbf1HYhNp",
  "key26": "3LqPpwEqP9AWkLprG67zTsJb1bbsThEgpASjSRESVAuQoCLiQ14t8JiarapYwhfhu2ysmHAaAYcZfg4DdZqpn2n7",
  "key27": "5upmKbzgggNZB6Gn7aRgNQd5yzV9SZ34g2GURrvSZJietXGVcUixRYiCpgkhikmUbjdKfAH9KmCwZVSfSUU5GU9Y",
  "key28": "3aPE6wjUTPdzFpkGCzy4vq9cdmSibULHCYnhtJTDZrRpEGedTdKwHDqLTYsREBFKnEuWgk5tkJT4fadWsVSWN5KH",
  "key29": "hM3xrhbGuthjhWWDgtPaBFjx4eVvBiMAFfe55iuTSWs5qQHYgC3VaDDZUZc1STifSvD9DCPmoc6WyAzbvj2HK7E",
  "key30": "2HvHSWsurPhswUTGDif9jnK4d3qxsy8dXRFythgFCGYDFpmAuV6bxDHqX6VXQEs86ngm5b7jF5QbfQzXXV5iEHSa",
  "key31": "27i6aN6Ew3Qx3QCecx751Lw4EMEumHoPHtVrKWVxjB4SwQ11nEwBDnK7RBPfnnhMSFJcBcHT5yhbBtwNYCrZrURL"
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
