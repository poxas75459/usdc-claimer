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
    "3H9kqG21dnyo9Yo9FpCgUKAP7tpNmEq2KKafAA3SC6DV7CnqccqvDtFBgSW2jfjkn4JAwhNxJa5rqSJzrvEKw17d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1xe9gNy887vQbAwCxowvixqPe62ZS13VdJfZTAFMmXKQP7X4JrRN5yURAkiQyCwB9H1nKiP6LonCJvBuAhjrnM",
  "key1": "NdM8FgAuQCMG53Tyy9cfsRJHeLY7gGtHtDhofyyBtwpQhpBPkv9Dss447vZ36xh9pSYqcUpfkpM1dGvT6YLBKVr",
  "key2": "5xVUfoW5zGdtro2hQM1ohrXXuSjbd2sCC1GCtM51CLzF36fwCWJ9Pua6yBtAiFEbyrs9wR2emMx7C6fJyGGup4Em",
  "key3": "5o5YBdeza6Pwv4CgzKknk1fjLykH5NR1DCt262E7WPNscd4yw2gr2grQ6EKkT3GfEWxGjBPwdgxRKThaqonDvAHo",
  "key4": "Uu3SbWgmBdy6WMDetv6s2bTfVRFmEbKVmFvCXuXZijqNXJBDuPUSM1pT8PC5fRz464WAPcezhFbHnQkUJacsvL1",
  "key5": "2gGbKDdWbcXAnTX8LCMgptcDhh5Xa4cTQguH7ijpuCVxqFfzacDoAnqefPsrUhJRtapXc5J7m3HXkicwEfq2hnfk",
  "key6": "53TNpFFEdULRisvZQjfTD9h2y76MuwKur6ivjuTPJmDTDPKcZUqqQAfNdg8JRs1C8KB7JcbAysQGbMkGVUfgZAoE",
  "key7": "27UJccLHxBeJ8hAzUSTxE9QRNmeyGkAuGez3umXJxteyupukS8xKPWRsp1GiwMpAwKRjoX34GrMnrv2hLcgpZtdE",
  "key8": "4HfmUJovb77L73sN1E6w1aMXttgELAZmuehDWnaB5nurrr2Yg28JeVAAdhFigXd2UEk15L9J5UVbkrm2WJv35v8c",
  "key9": "5hgegJ8jxxihiDR7xERmSrUykk2oRuEiJUVDfWBSYmVJZPajUeq2y3QrdiMFAWYGJZba2KvX213Z9wR5aushBKZX",
  "key10": "4HcRkWSr1VvsXp9hB5Nx2sYm2cVcVGgGJSmnHpQtzUpRCdiDLAamLXkxtaSbP7xZHdP8BVqAX69k2Pcp4Rr2S3Zp",
  "key11": "2ooP5giFdX9Bh2e5rq64493tPcxRP63mt8tPJUEmEqT82FX8Qqjd9jTD9xytwSY1KYABiMzpxx2MJo69v2vZAiHD",
  "key12": "58odyAsdVmZk5qZooNVySkWG8YE2J5d7bGV56MxFbRqu9Vi9vUMYT6Q37AxA5KNCq2wzkpXpwbQWvdQefUCjB7Ru",
  "key13": "4ETUmGmTBeRJ2VEN2eq8ZyDcPwmG5LF56tG3MQV6mS3xgd8dt5mVfqaZjVYhsZTwFnwQsRUyETyzrYoHJkWQ9N8B",
  "key14": "3ERkncA6gCFjsd1MjMNNj6X8NMe3j8Jg2x2EoAyQbpuDgGeCcgRC6EDHeuL929FUdhnrTDCwWYHvVZUiqxEVNTqT",
  "key15": "5AeMGD6q9B4XQpGAg4sUiXpuTKGrfmFJJw9SaosRU1cDw6rZTrekjudLZYDuovAjssXpg3R8oD7w4KGjayczTFpt",
  "key16": "LcwjEdsvHA7FvqqC2owTjLxMERBhEPVYtRoS9UGpvrHowkmaMnZvGMb2QHjqBHb6D2aEPWM3ihxx5hY5sRmQAhy",
  "key17": "56zecsrAiu9XS3mjFWFikhYF846sAUaZU73rxR9oY5i2iWSiLiw7eLnFaibiym5DrRjNq8XwT9YWrE3rcQaaCPbR",
  "key18": "5qmvuHqdLwUtAWHgjdhECPBCKaxh7oBqNSJ8yuGebVf7TgoeSWSB4bgxeB4KduWe29zdmHjV8TU7AoTaNVsSVaZG",
  "key19": "2KgSPBXV5JPRgUrg1AT6TK3LrwvNQTZf4iykUkJShGo7ekBX8aMGXb9asiWv3TYqUk4f2GFPh9KdHWhiL5rdkSw3",
  "key20": "5ZGUpDSutueaGoFSeRYHjEiKvPkUd8gSVU7MNuifEi3RRmh3vphWHqqAczij1PbdSKfuptmGF9gpvAuKoXs7BxmL",
  "key21": "5HEjbo2GuGvANfkPBurD3N1rWE4nVbdofqAvbpqyx4DnPPY6KsMtengZ4LTEJyqv8QNtE5UyrgLt6iCRKAsDfgaN",
  "key22": "3knuTMZGK5veds2vxMNTdSFTw6QRq8BC9wkcYYNuQW8PSH6qKGPCQYh6RSz7Yb1XJ5cXBU2MtJhScfgSxiB4S6oR",
  "key23": "4ziU3S45ckA9g58617pxp5WX79RsrCJFb2bBUzvWawh98J1nWukJ49hjgBb2Ws3R3AZDMNfh5C669n37LxPW1bCd",
  "key24": "4Dt4nZ7oxzVRJDMAMkXJT1RqVW6syFRZw3MxVYz6KK7jL9wSP3QPzzrWGTA4nfmsrHfx6wmHUXBnxr1EYbT1VaQ1",
  "key25": "T7qzEqQeVLp1wmd9Z2cySCmXmPzH9UThJuDNDHf9SCkmJ4KGYWzTD1r7fL5Fgu3PwZwrgcKmqvtttV2UXRv55Au",
  "key26": "3JjPmxHWdQbotMTBaTLBmhLbYiYjDs4KycMFk9FrFtvN4QicikML8BVLk9f8skieBNNzxwaWyhgjDkoZN6FaD7YE",
  "key27": "5HczBfisf2EgYYxkAyueMaE5pKYuSMKUaaazJyGcA6nkg1qDZAkbnZ3qGBCj3QgPVkEhrbmo7kgD4yFgS3PWDVT5",
  "key28": "e4BLbgtkXenaexXG7DmuHjVQrZtHeMD9LRNhyjEgmKdvND1aBGs9kkFzVEQvVQvisbpR2Pgyit1MaNDcFKnM7tg",
  "key29": "3DQD6iCqi24cWGapF6KGduY44h9SJcd5CqpS1Bep6osJoKLngb5Yf5RJ8eTrMkhcvjFqdKc957Q7Px81DyAjhNG",
  "key30": "3w9Vewo1DpDunuVST94wHsDWdSyqeTSQTRmwJfQsXNyXLSXQFbeFLftq6jzk3xVPtaUMUoL1M71NB5n8LUkhwBk3",
  "key31": "5abYAfsU2BHSjvgWzY5YDTjyL5sXQJV6DThQgpyASZvRwoUtuyoHUfDsWYLybWuBsf4zrK3Bmaa5HSP8oEgBj7oo",
  "key32": "5fuDbSNv5PbrTt4bCuN52LJX3gHfD3XemefCyZycAMHqoXXchFRMc2sKHqYtAirErTik4XyXsazyeNak722E6GyN",
  "key33": "5YhgtLDHqdPRnJsLZ32EkRMVLeh2kNjWANAPrhdqoov7SRM5x5jvmDGW16JMrhLyo9cGb2PZhanv3sLx9DnEDqbz",
  "key34": "5KWTShNRrBKghGxVJartkfjMoXBA1Zxk5ZmdzrZ5DfGzuTg5aU5FPVR2Mxkru4BWNb4D48gS14kzXK6FHziKkKXA",
  "key35": "Qrbb34QNMJThWx6Xf2ciTpEf7PpdEHfzAkJgyMda7HYVoamGoXhjNB6cxNkdzUxfW7bmrqbV975uU5Z9rTprFdB",
  "key36": "51j8a1ZTrB53e5LgtYPMRw8u9C8RK6ZaM6mfxzQei8FHh4vwbsx2guD8tSHfSVomMkmgdaAKPsNtmSTeXPceBmZ8",
  "key37": "AKGbTbHTrWrnt9bN6Y7Q28UUXrCvACTLFrhGrDoNMLMGYm2vNZ4B96MsZ82UK1KW3znYpPTS223gF9UgvpbWjEg",
  "key38": "2jk1KD6KGHbwfnzkcSqDupGNDACAHTRRHbsidonE2j8ZtKKVrBNPpmhS5hbScVvW5fEHXEsC2UpJvn4jQSo5fRYK"
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
