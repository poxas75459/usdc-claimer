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
    "sfaRyQ173eKhARzEFSKuwihEf7inXH5eFQQeDLi5ys3hXX1B352Twkkw9NepZKdiMKQewoa7zefwEwxfGtgACZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vRjyjfpkY7KTui3SCA5jSQpUuHmJ4jTDRLJGczxNbyxyn1rj211HpgGJgALH55UsA8EccrTvFvMN5PEiM2gNkcK",
  "key1": "3ppVfc7MC2Enka4KUpbeWEXpCkAmZMqBM1k666DDWDrXfjbAnLDeMEXFhBkjTUCBg6ZFVZXzPyqWvf6aRjAVnMQW",
  "key2": "41pm12ZqVzZac6xVS9gD3RzithfGSqPnmtHmNtcgfpofzxdcfsSeV5LpkKL1CTqqHE2qvvmwS78bK63QDquGmQEa",
  "key3": "2dN4QuZuWYpzsnmVnLkFA9HnYqcrS9L8xRmkq17jtxxqFXHEzhTcnTPnNPVEjbbwZPHLvVtUXbmrDqDMXX5ZdquU",
  "key4": "4B7oDdTG9jt48coGwkpsthgCNhFqFRFd7UfZzZDtW5gX9NrL4btrHxeR3MN7aL9pBMU7sNBpQ3PZ9hZhy9tkRhKh",
  "key5": "3ZZ1dfQ3DuU633GJMw4u9WXiK4QjPckZTBiPpByp4ZYoGuSbAgCyfqqMccmaLwuUYCChnMfPEhVhMesuDdhwW49h",
  "key6": "2iSpc2DzUQJpJ2RCXbjF3mbnHDX9igxnKPGrfNKR7PbvT4qvzJaqqyBiqE5zPEY2j2oafte34QiZbKoYnfFgeRBo",
  "key7": "2qygcHnfDcBtFBkEUmdRpWuNrtKLn9CJVoAYP86Kzit6RL9dranexY9b3EjLYYDuEy6LUdWtGjRr9Gg9YcdhZZgV",
  "key8": "2NM77schtktGSAESqEWT7qs6gcaavPyjWjUG3rW2mHeJMBUoM43SsQZbHmE9QoTMy71QX787j4mJRpyq3Uehndx5",
  "key9": "2eVn1HKqyJarLQdmUfXKCTppkoEdeEfAGtRdmvsgc5JnGJz4Gbmeg8qrSFVceG42XDsCL6gvxUrqzvBtxJyoRZbc",
  "key10": "2pGMEoJXn1A17C6FuWj6RcTo5oCBkL2Yhuc5EbhMWeQRC7Z8rSRjhHf82ERMBdBEUswzRwQ1dWpyi5YATcBy871v",
  "key11": "4iCYHr4dcp83aCUvTNBuAYxcQe1tGFTv7dzu926w6toawAo1iVPThHToSaT1vUKVgYqbjrMkRivkv6rD4ZjABkb2",
  "key12": "4ZAbnmQzXB5oNfsgTPY7HWRQTBUm2fRzRU5XJVDNk8q7BR6Wbnuq5ZCzRSog4BPfoHe1yRBRxvW7VYB36TU3daYn",
  "key13": "6Ap7qnosB3HmiNR1QruwL3DfcxyZn4521v7fSeYER79VVDaAKJH7ag9RsmcyNnAtebYaHYdT9TshEDJEU3EpZYF",
  "key14": "2b8C98WNdL79GR1JNaQWztzQFEmb5yzmXCRn7zsr7Ro8JVQEGci6Vt4a8mgEvj3gh39g4w7csHTo5pT9HAuFS2ix",
  "key15": "KtKNmFKwoKUuNkKYU1bY4RueBY6TJv6G2KvR7gF1Reoujv5yiRetJRLenpJ8Jywq32K8hcahyXh6yWK4vGN4nGe",
  "key16": "3iirHo8mdYN6GtveYFkEpULDakUNioBpXC9eSUP7GnWswtJaFphw2Be3AVHG2L85fp74Vujs14nzPuwGw37T1Uj3",
  "key17": "64hwTL7Ro7rXAw3J2Cop87pTYfJTbLXjahcEaP737MSHJJBPqMTJ6winYoF7yGy2gGmUyFHNLMfszv1D1aGo3qTz",
  "key18": "4QmQ5FPNeg4uYYNsgijSjimmUhCvHwaACEAyY66Ci5WEcorHdLVNSPd8VirymPvqrxPeFzGNxboAZ3WSz6vdcW78",
  "key19": "4uKC88VKMzmjcRFC3J2JfpH7MmbW61vzVRM7QMiidKpPQj96waY2LChw1X2J2XxVdhwC9vgoMqQgz2bhZWHJoAVj",
  "key20": "2wxMttQde9kEi3KVrkqosjcjPennFbyDHqFLj7P3uxkaCfVijPPb1RjnWdvT2YYrTFTBi44omuJm6YhJatFPUMnq",
  "key21": "557atvqSGNsvBiZECri1SV4QjfqC8yqZDZtgzADDEtqj8EN38kL7hFtYCxf59cWQQmrzK25kGNPPUZbn2QGnQhE1",
  "key22": "2ZqsKvph5Jxdxtu2kxxFEmmV3PvCLaiG1hhuaPV6EB3NqkCHyQiUhWS8NQeVD7YJqRYJye6h9M2q7LwEHSjbq7m",
  "key23": "5M7gWMvqeijvVxL1Yxu1VeDtasKS3A5fTbmciKGRHiyejs6ZrbeGVSorhZ2go2qga4xPwweZQAPEB6yKELxxtsyT",
  "key24": "5yg2NLFh7TPZY9wXrYZwnCvbFRGdkPdF13KH2k45kuTwM8QScViVXcgxFRYK5Qr4BVnWVsczLM5ipkQs3y2U9SD5",
  "key25": "5bbS1ss85F2dJmcUUCt9d1WHozANHVubcYLFYcqk25qnebMXe8zBGYmhammDZamvsh3FPsGwKUYE3AL4gdm4YYCR",
  "key26": "4tHYmpDi3f9hW5LJfrEYR8LTkq4yRBsy2JVUvZy417VgxtnCKmDia7PaAPCNDVFq7VEsdqhRtPc17aCXbD56m4nC",
  "key27": "JwFdFzY4xhuNfNocGWSQ5AUKc53xmTryQdM6ae4qqhLkHjY1KHdoKoV9TFSujYYPQdttxJvE64Ka4LdZC2nrLzH",
  "key28": "gaRr8Vn1wJM9zjKkdCRwasJeXhgkjgAtEoJswG96yPppJWYHwUbuPZ5H9Eyk2Rc3vVcrYuZGNSStoutdeaL6927",
  "key29": "4Lq5sKN79zjawMAXaapzRjXzn3W3oeyMmhj3WF1j7oRWziKYACiyyyWwXZ527roVqHxXrJgudCxgEGnw6cmBxT8x",
  "key30": "4jCHMsjd1so1pEX2q4o7M1u5DcdQpBudQ98sPiJ4Aefnb4hcgB6AS8NMZQArf8k1QCpwyjVfwkVmkCkoFe8JQnAF",
  "key31": "zmPuiRvLc2xgR5acnaVvUqNXwvJ4qXa43vBhXc968AMTZ9aJcryrdJXTKthnQpMftfwweP8oxNZdvFYGsFpg4KD",
  "key32": "3MxxXCD6jxX3kQGFspNeJAw7aZg99KZpiqSoRttfL5NEsExRiPgqC4Z1SuBc8paaEjkj7ewbJhF7Ha46KoQ9NzA5",
  "key33": "4RqA7JuQeXja4SJ9bszCoMKkvGU616bkxhrCjqrzJrN66Yyfh7JApzQUuAFzsfRAHLQSF6H6bxGqSbK5yNBC7Wpz",
  "key34": "4iEofvaPbDHPzePe5z4rfwruLmvJ2dUo281x3rD9srpK3xzq8NJAu7gKwQ4SrRBxR5ftSoizvYN9en45gJ6KNbLd",
  "key35": "5JjjaZZjuvFnn8VRHTEQZy3cZxVfqxkjexd25wU73i3q2ZyYKKEdoniZJRry5RbWaR4adivEo1ESYNm7uoaE35Er",
  "key36": "sFeyvqCXwd5pQywcG5LpNTuHRqi818rWF9ctX9NJG9tyqKWPppBwB1srt3TFRPuCEvEnaocapgCCWGMXm8Aykuf",
  "key37": "4jNgBcPRnjwm2Z6WHtfz4cCCkP5mrQ3AszJ9XRJLCNGaC8fUhXhGvs5x1cJNbyvP9BNe1bzGLoDYdg67R6TMFXWV",
  "key38": "j7Mzph687RH3DxLQJBHdeSpBaCj6UKXFLPGGhXWggGACg4w6eWXwqamcFqWa7CCqEuSZcxFP8KtUNxB9yP4akAD",
  "key39": "5h1qfVwvfYf7d1omN7iLBG67VkLnpfs8dZNPuv3dSf9TcqyVkPjuF72jpPbQim3KePhkbcmrZbj7yNddqNAbdKk5",
  "key40": "2CwJLiH2oHYmBqeqws675oAaxwmr3sCrG7VecCKbKTNefRv62cfHkbMtZ2DzSQvt3ayA5N2MHAsAcc2dmBkY2pRW",
  "key41": "5Ww3hovw3QketzgeSUEPzvBqZkxFqKtsYkiuVwSbkb5KA8dBrmG1FQvSXyghnaf3FUsAmdQT7aNFCDKUjQ14oCve",
  "key42": "3uGGM6RX8tvF6rXoLmdqJ7Xic7HmqtyZvLdgSmcGvudeNmTEHnKvXoFisdhwHtJFsUURSb4gyRr4DpDwExMnXjfx",
  "key43": "4QL2qofya4fs8G8cLci3YJTRwKTwFz9HUBYo7Wt2Kf3hkrn8FZsGzWWsUfzqwDLvW2DPK9WftP4DsnAhGjAoMyeG",
  "key44": "4bsQoXYNNyN2VvYan5epJ8wD9YEjXnK5FeNmaUyLEvMN5KaHmPdHaufHQzXe1K7c5wLHC2p724hTbPSaB5HRvxtX",
  "key45": "5p9bqRLCgqX5UZfqWA4mo5sBiCyWUSw8UoiBRr3AAziNkpqvGcm7KiRMw572yc11B2vmDVNx3RtWfCQB18716BvW",
  "key46": "5sjxfwbb18WoxHXKd2bGhKGGMt95Jf1EYGNhqTsueZQuBptVarXBcYr6qSGQ2ZYijtwkFY6vxNukTpMxT4rjzMyT"
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
