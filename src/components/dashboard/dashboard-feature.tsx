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
    "i1d7FYdmszgcJMEfW7Ctgrsdj5RM2VqwEhXNih8gMGZGTkrF3gnPPE9bvfNGpsAUEzyGRGnFrxJdBdgKwrmhQNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgEugU86bAeiFSF5n3Y8FcDUumRMKW163FVTWJyUxqkWuzfaNcXWEZHeHj77tQ8enCwBUgjgpToLpP4MBixxALL",
  "key1": "2xBMujPLwfsGjCcLMtDJ6nS5CCRTH5ThEJmgMpvPfCK12PCuzVRnDFxi6XGb9doVtVmuTFTMFhB1d9eJVzz4Cktg",
  "key2": "32rDV8Biq5gPSNMN7YhfA4DuC8CBRfFiBA6zvvDuTVXRazUUNXTQsFgAxoQ7ujNypU9S6QM9VA9MWBpD6116wRFz",
  "key3": "2c6uopnFp9hL667i3Tmz1rMTaHL5W9LpxcNc7wCmGd67u56oLADYZcGQZDxUQ2i7L7bLWFqMkwLVboRvmz4aVm2z",
  "key4": "5xDNKa4VrHhrrcRTeo9eQCk2QYSeKgYfwHZ93npVarwjr9onUvHJTM96SF1oN6uqYytdYnqRwFgQdKc1tEUYPAQv",
  "key5": "3qhcWs137q36jKmzxpc8L3M8TtUUBuDrrYEPcX4iojKALxmUSDtucYXEtzZufZnv9yoSYmrfkmhaWVREp36CGnUQ",
  "key6": "3iNDvAhv5Udh2MmXvrXEZp85u58MLQXb6HyZmUCbnA6xEKk37bdZuUyvKtRUfW9TCocMnvauUtux4rwrs6yEesLv",
  "key7": "3bn3bDoho6onuDCTziYMjy5n3WLmmnVwgBc2YtTvnBb5SbZHWZ7hjyK3FdVuVN9xX8NLnFcRN3ZmD8kBqrPrvBWt",
  "key8": "2p9x6xB7HXy8qjCPMHZsxJRNhZ1qe3ARr7YYuoxZPT5ZuG748yZSAnaLpxWtxXMXHVBwVhXiBFrR7uXiSvYzibNP",
  "key9": "48fzUfg2go6gHc7TdiBGLi7Fi9GtiHFbg9Y4xxAZRFWwxSpQfCh8dq4Woo991iuSgMmR3U7S2gcVWsqtUQ4TnHFm",
  "key10": "3Monf2meensQ5AxmisZXJfJd4Yz3rKaujXdeGrnty7VStV3LN6hkXQcshwseg66s2M8VFNQ4zNwSLU8WGBhWXRQF",
  "key11": "538WTdq3JwQ9WkogcYqktGEk7E2CEMCzkugbXvdAuXjHf6Y1VMZ5Vnd7vRZPNFWhGeuqjHgwQnbLwB18MJS7We4v",
  "key12": "4cZdXeoPAvb1tNvmUvRsq9VbiFBrZZEnHmWHtyU7pFBsUgB26YdUWYNVRSfX3eE7XZkc7aUNdBMX5doh2DDbeoyW",
  "key13": "25KsPbfbJsLRsAKvXUuHEpSsxNmruEagKQupWg5U1WMwrwxHRC6gm4vbVBtVtPUt6xmsDGPwe76eXfsL6rNLw1zS",
  "key14": "2YNS1A4MvVqZbn43viRDUcZreMYfTdZqxboj1kASvMgY6vrjBtpWJUmfpa6iEVdgY2BZzzNe8LHnVVYfPwEFpCZv",
  "key15": "28bNAz1J8uoCdqanRKnZL2CPc9ys9Rq2mHCNLMN8zEq2e7xnAZcS1HcAFHgy3TXVAozZVu2iFpCyFW3TGtWQsu4U",
  "key16": "4s3fXd4k11dfqJCB4VAuVgmaXEGqibPbKyXCS4F3wKb7VjHu1RQ81B8GJHsjrtFEmkeiEtwCuX41GHaqQJiD7bqB",
  "key17": "4ag6eFM5usYSAR5vntAWsx9GusPAGr5DPkqG1LXSApqs17CcFHbQZPNSCwWPLDFTteimLCAezGKqRWvh1RsMtjyc",
  "key18": "48nvxjDwua6qKt6WYmLWmnZxwnsdcGLK9rdnMpKJTXqJ2ShLwfwwVango77gBCLzDxvCDJLSujoD7n5PT1WonhKC",
  "key19": "3TuUYMJR2H18djZqKsXef9sQS3VHpLNKRH1yMvAeumK7NmbwxK3yKRfQFRdTQvfFQVsevjJPcndDfjZYah7BtkKR",
  "key20": "5ctmesS4RMVnptJXqD1GRt7SaCWHuCV7V4cNAdcmMv3w2FUf36cghn11vtJD2sxqkLDaA8xmPt7Jx1ZXuJBbzsf1",
  "key21": "48sicgtnKip4z5fvZ2Bue2qteCj2UoANbfcowHTyRLRnpMNJqVuZfvpxaJd3GVLurEYiXutoArg1qyFWo6NaE7q9",
  "key22": "2gLoUXbBFKQDcfo78qkfZ5FtUnfaFFAEzM1mWmTkZLAdyX9ZUPQemqP1wC2uMf7GFZeDMikAwHbHUKGuntULosZp",
  "key23": "4jQ8iUWadR3K9sk5RXQPYcs64H8sJUfdph91PVPz5CtqavCzcodgyhaAVkwteDZv4qGyFEC8UFHfdRD7H13162sm",
  "key24": "3UXvPWnDogUeAaCke4yNPMuVj6796T8Zn7e7zhXcJ6bCiZ9ooHt1SpkxCZVURjb2nUUF6TvvnkhWecLXkcZEzJcL",
  "key25": "4wUwxfm9p5Mq1rVSzZXyWEMMgibFdsTFBnyPcZ4Mma3aA9VueYemiDDawBJSaj3qna4F2s9ESdedhJvFruMhN6Uo",
  "key26": "62Teh11YMvQBEaSgprJtdUsiCFf4SCeDKdAz2jNbpsdTka9yTwFjLG14bBcy16uSFPHyjXMyXLHbmnjQuDcmkeGe",
  "key27": "2tiuhZbY6oAFwiWYFYfW8NezFjvNgF6FJYKhWFQX7akf1aMkj7SWsoMhB22BKj2JoigX6UAQRHCfV4q47yBDsXpz",
  "key28": "5XuvSzTFVRmhd28Ca7qjeJ34MiH2HWW8vr2qWmcXgupmBQW4ekQfCwVpHd6jb7YCNuVa9pS1Y5UpuvsYhyR44bya",
  "key29": "2sZKo7LaJCUJ22n1hjnQvZBSdeMeqXrUb38gEGH82JMiFtjPMe8veAWuBfaZbab2m1enYHVmWo8ZE9yCrwwmCPza",
  "key30": "5cJFtSoJbxKxRzNrnMbocf7MMrWSpSWNejZDDDJeP35MKjpFgs1nF2kS7r6fyf2Q4YSwfrcdBJbCt9js3TLvSfxq",
  "key31": "3EeaQm4UumQinD6dERDJEXPfW15q4eS6TnexrBZmYW3MuKWeevX6WHPg9g3thrgpCr1zkh4GzJsdqvFu8JB5WwUB"
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
