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
    "5qBSEHF32SKk8QLtj6H4BbzQkmtSVe5cigzYNo9hYxmrsqP5YkFUfJHai5LiT4YpktpVucNYRxCocsedyWU6Sw8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514m4o7F74RwseciAJPTvt66cJpyDKze1admwdiXXxxttSvznaNRqQ4AT2rG76EjfAqcwkuMDcqCT74e8YCNEd7A",
  "key1": "3xKYVX1FLR5W2hU7m8dCVc91boLYYbep1Fj9EDXNRk4bjc4e1Dc9Wu8tnDSFDRSpHQBq3WQEhfrW8GMd1mNPkY83",
  "key2": "2cK7uPHqHmjNb2cimWjYWo48FLZssceVs5gXwWvVSFDDsR5tfvMu12PpiTNW9viD6WumrbJi5mvTMpE1t3o71RyQ",
  "key3": "4xngYRhCBXPyZ79uF6YTPngb9wQAwjCGHf2YBExtQTjULMVwLAFyZs6PM735tfsQe7JJcpVCoyyP5tvo9mCkziDy",
  "key4": "2nzptG9mBCqh5Z8QphwoxVAf3kpCw1rqCsEcbQtwc9hHSUCxcPLH8NJTXPN4s9gLYPqHipVxod9Nm5fQWZ4EArr7",
  "key5": "4YrqbUtK6j7ApHEECAzatkk51bUPZ5QzLpGHWCHYWRLaqFjAZWHdV7AwPWM9cCohYaSCgf8Kb5qF4rKCUCgu1Tq9",
  "key6": "2cQbRNapimuQmxYuA9tw9yE2sb7hz66HyUrazscbM5SGgAEx7Smrr843CK6F8sCRAgmfuSbzhT5EXrvaJNQNwbfb",
  "key7": "5eGHRzGw95qBGaGXRMJswy2gqVduLPYSAxLozauLJj663dCf1FeLGd6ss1MxgddiM4bRJJyneE3QPqtxtGt3zvHy",
  "key8": "DPPVsHUbFysrhWD4prH7dQYm4Ec2BoRLKdrvDhqiB3fL8wMfBG2pv5We9f8z4PAdjvviZdwc3En9JiEzEquWuH3",
  "key9": "29WPJGWLbPLA6P5qJTCsw4igEsTBPZYjzJD1tR4vTmZNy4TCJVL5CuRhAZsd6z4PrT9fnB7fGd2Bs6GpsqAABGmE",
  "key10": "2b5FWJdyWGgnNKMn6awgscrZJHXb97nHyhRiasim1LmusjMm1FM3WaHpPiEq3uJFrar3nQ8BmUTYUdCiMDfvZwVY",
  "key11": "56o8QwaUxEGtNfPtKERygqTJptRy37crbx3xg39RfK1KNCVkPuRzjUKNKoW4GgXuQFQJ5S4twHDJfdKdH5Ljzxzt",
  "key12": "5LUMNycKr21yM3wnBaZjoecug52ywzV6jC3sdTSCVdEsovshkNwpYQDbbbSmFvAmU5mraL6PrrckX8svzPSa7Aed",
  "key13": "4WsnKAKDnhX9RdxR2kyhe5esFgZzeAhsFdyjt1ooGe8zjW4LMeSF7F4HPZX4ATiUmsUJ4rqsy4qbejgYQJNadw8u",
  "key14": "bi6CENQ3Nz2vJ35qeQ64nBydFCJuS3e54yekMkd6hS51d6nHtFJx3KRtjBrSunKMKA1vXcpQtPf18g8SFLPnB5y",
  "key15": "3D27Vewy6yCoV6DkWD7YDfWHs85GLJmqtxtDfvwWhaaknyMY8RgbDkeRAkr1U6EwiSwVgZx7hj7xf6Uy6XciqZNB",
  "key16": "5dN7yGELysnKQSiSxvPtcimkorQiHcBCPjmpVvTuYZMTLZJovJfaZqXJsdbyR8BhPEdbdQhAYrTE7FaHyTQTK16Z",
  "key17": "5zfRmheEeiVdFC8ebDvQtFnSq6UeDoYhVn2SQJX1MPVFp6bHhvqW9JeM6ipsB8LyvowFNsXt2PcmRK8S6Hxs8UAS",
  "key18": "2beujwa77CwEPKykqodzNWxDWwwbsU5peb9RwtHTUfdbco6x1nkFgJHe8BtNwSKduRAK3hBgxMZx1NDU9pKrhehF",
  "key19": "3eHH1wCn7QeXnrggFAGgj8PDqni1CjmPXS5vzc5d67UiS25Bq9DXL99cBBpe699tmeMoruELgkeKHKFHGgV6SxoK",
  "key20": "PabGQy2L2bq5UNxpJ2vzwmD4mjqRNQRZeXMKYiX2oRUbegbYDtUaDsKAJD6MU5QmyFB23Cs9KhAF2rDCkcd3Q8a",
  "key21": "4tTi6pwgu9TvGhCjDy9BK1TXqbjuZQKpnYk9mmewzK7KrdPSy79F1KpPQGNErBhcXvSgMnc464KHP4oAcR8pFwTi",
  "key22": "3RSSKWoX1Ya3zfRtyPCRt4v8SJsvZseV24vgez2Vus3VsRMRj7JcrGWMS3aeRvhLEPQ1Rt2hNCnaETrk6tn9rPAW",
  "key23": "5A3gUR6oebLh5W6ADDURDQb4Beb9n7kPRWBAL9GjNdvTtXLMWXZQGLKz2Feo1DP64NvuVq3vuXdgR6REFGxYh9dW",
  "key24": "5JATxvcw8kMXyeqXGoday2Q2gLWRS8ZMn5U4qCDDAhFvvU6zjYXV6cG5nqDN4dTf2dbttvGFtAFSvFqKaLa6XHPo",
  "key25": "2NheFQNQ2Y3uac2mVdqYi5cCEXvEMMzzc1ywsxMsszCDm2oL2Mjw2rok4oxgocLiU3q8zRpQsA1MjBRARMn7c9zE",
  "key26": "5wWWMBQVyDS4mzLxskAK2rf73FtnsGSxfzSbEJBd5vJxQfHyYhojtiSFZ8wnxrVVxhXbtZCtsYGgPLqrSC4mwirX",
  "key27": "3CX31wQL4NARCdg7ZPbjAJudSRFdwJo27JzfaLiLXrk8XBfVB2Sz1ZUtNPT4TzMMvg7eXCZ9bscHsaGLyy6bsuZi",
  "key28": "Kznp1CUTyebEACp1obmPwv7wdHAUhDPdhnVcBG7MMTqiNduxCUrhxQnQHtsHjBapnGhS51KzgrgLRUyKLUCgENe",
  "key29": "3mbtMhUiGaKQ1jBFSZTrtZMzbZjhooLWWxunnejeWpB2MfN6pZQHQ5wm7e98ynSChUT6SNjNyHxUVLLZCVa9NkLs",
  "key30": "4DiG7XgPnhuunejFdNGJPiqTq9C63QgZcgqhLinjFSMnZLTvGBJRm9fnk7Fcgr2B8GfcjUGiNqH2oy2YmzBJXWK2",
  "key31": "2Xbm9mUXF64LhKxVvUkuSy7Rob6fhe5jLfQJaLKKmstqEjgaabFjMPCGpPSR2yKz3bx5hpP4J1i63ACTGRxUMGkX",
  "key32": "5TwiwsWtZHKebSerrLsdnaUvc1tNLQZQEHJ5rNo9pKXTM6j9UKi83Dv1LYoVZofe6DpxhSYjzf1X3ZwZuhpv7px5"
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
