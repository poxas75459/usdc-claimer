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
    "4eQNMvz8U2fytdA5Gn19v6MAxbbr9doWoHmYie6TKtQB2416mq8X4LpBmQ1QE9Qk4aSojyd2RKgFve7xrEMQAMKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjRpKknuBorTkQ5inN2aBdwYHqyWPCiXfpA4XDi8FyrNqUKVNyKjxhCTqrJvxt8kjpJyhUgrrn7CRQ9oSj9rbNy",
  "key1": "Qmi5RfM8ePwD8HPSpBuZgKPcWWnGxCNxPRr4UUjY3HBHPej8dnGjyfoyzQHo5GGMMDs2WpHEV5fUqfPQsiDKQMm",
  "key2": "4iuPBrDpubYwSvraRirJztNcNoA7iR6wryqewH7BZrc9cEtSSLUMK1Vm3PF59Do6qo1eUEvq31qywqjettSEAhZ6",
  "key3": "5UCjtAN7T7UnehQrh7cjmU3sQp5g3u9kn2DH23kkQ9hbVXnEp9fto6wwmPZaEcmCLRkq6dB2wQ11xCs7hKuPHNxx",
  "key4": "5FGdtTCffRF1rBmiefxRJVVNEXazVtKsJ1KVsewQYMTFGDLvfGiRepKt1PYsjmUY6FytXnAdZ97pjYKtrn8ohEdU",
  "key5": "5hSSEZoCs1z2mmcdZSiweFepXr1B3TRbi9LhtxMRScfVsCGwFAspZumaCJntfvHfSd8xL3RxzfUPZ6a4BbYzzFn2",
  "key6": "2pCdkYanrY1x2BcQempi2DgihrqbVpr6VuSte2EGeozMuGgzytm3mzXaaNJ57NLdPXohMWq7rpd2BT128G1JPUQF",
  "key7": "5v3rqKgghuawMks8fVJQVNnQuwqvo321sBW3f9tWkXFcGkWWzJVMg12wvzUrWrincndqfnMkjH5B1jEZsoPBRK7N",
  "key8": "m2xXJekL5jDfB3phstnNXia7UmwPwmi8VuGwS3tBStAAiJzEif1tkoXJwUQ9vfQjFzdqZ4XnDv88s2WJyHmPyTw",
  "key9": "pzrXJLFrDv1aYWuMSfJRtdLTZ33LotrcLMEnwd5N8BtytVXCQkCiRmuXiiahhXGuQHiUvaJYetPAYYv9XP5SmJM",
  "key10": "4oe21EHwhKYas97vjbkVHzFtDtbxh3CuacBzmX9V9cXGdUtNaC1ybeAx5o8CLkKiGmmiTRAZzkeKxhZJyypZo613",
  "key11": "2emhQFXWTcNUVB56z3VLTaUEkjnrP5U6ryQxj4DDt4LGiktc2ggbHqPW5Qo1k7o5t8b7nrqGp9EDfLJsoPXMzCzA",
  "key12": "675YonhgRhaZFyZdDtLGTFMj81h6wRDrXHvthrnjUaYDfbQLMbbMLeXQyS5PxK1FH5yGXa2QbLCBiUdzY5sU5N4S",
  "key13": "5NWhwBeHE2oVVixCj2CYcnk6vjELuHdjrN4Z8fSNJYTMfAeh2a2xC52RLLf1z1Frk2CLrTaYKv9WvrSHNnqSfJv5",
  "key14": "MFiNjnrQN1fNeqG2fwPPaTFW21KX2TSpWmLkVt2Y7ohaceGmrkCME4WtF4genCFfkK4vWQEqDmmAd3AEM8emxFu",
  "key15": "5iVYy6Zj11cetdauHQT7TuGeCsPYF4pAvuurdrBUxxA9YtkEmUfCykSR3yr8o5DVN9mFcxYc2McCsLuGHKguMMcR",
  "key16": "5VUwfV9uRnYMfoVrUaqja6jfrpoXd7yMcCAur2grMstp8pJeHqMhg4qJHeYDKgTvSk3Jw6x1excvcpvkBgNyqkVT",
  "key17": "Dk3bdJBchmdnAKhvvoirpfBfAgYV2hSzJiuzV4Qcqfy7851DjRAu9qHE8ZBTQiBMf2QuJeCros7v16pT2GQhgxQ",
  "key18": "4BPpTZhezxNwZnKrWWiQueg2amfEwjkXE6ED2KefU3GQ9Ehv2NsJkfkpj8UMwYzXEyG9kJb8yAZC8n1RkK1AbdVZ",
  "key19": "4nG46xzbuvVgpx4PnqkY5J6cSHDFVtNLbPFt7rnJ31RaQa9Rpo39AJ38D1BUmWgQxN6j8VWWYdE6CZTJ6Ldo8raQ",
  "key20": "2haWSdQD815swqew2T9mggMGpHpFh78vpDK9atF2ufKwNpRLd5UrHFSRVJEdLwFvTWD9BSUu1JJ2UReTZ2pLHtJx",
  "key21": "3MYS8DVGUYgxLiH1BSWYuLXz748S87SprsWKYo6DUXuw9Pp8TyZKU2ny1CrhxQ7imEmnKn44eAu3tRNCWs6xmYPs",
  "key22": "4vMobFeo6g9zQrLjkqtVGVi4psrThjHGUXoVdNHbPFu2zSZVjd9Pfvu1MjmntUyiprJb98xMC71nhWejqyPMyPE2",
  "key23": "GzpSJeVv1U4XP7s2j3ShMkPrFt4t8MWiyuM7VMXekYS9ZLGrKgUsqygAzHsuba9EHH2EfZhKf3sARL7UZLtAc7J",
  "key24": "4hCsUyMh3G2G2tYrCGRRw3Gns5wUDg2sbMLmhh3j27bTJLu5SRh5xqaBqrYGSSeHMb9sh3WD85Wc4WL76aQUH8wn",
  "key25": "49pN3MU2v51ifh6LTDUU1v3JD4P8BqG4KYWwy2WWfgBzziZrcQDtcvYbBvJHj9FPa2FwKKjUwrSi7URAiuEMy84b",
  "key26": "54os8j8RT2VSoxy6FiAY3mTG2zGctRLoAFcHL94ijUZbEjVognKRik9xRSG4Ed7Zh6T9o8FDEcARpdww577PJsUZ",
  "key27": "2Yfr9sk49vfT3VFMsZ8X8e5TX4h2Dd3TV7bE78jMGqB2P9vHtaF6WP1ErdTjTEvg4ogxTzp1T7u4AD16S2dedVjk",
  "key28": "A1iecdfNxvG8dJu1zvw1RVULVHnR5WKQe4Z9eWCtf6bwAsgijFFCskPXXK2mnQQsNRYKWUGY9ACgNMUaz1uzzBM",
  "key29": "5Hq86JH3tQg1Y4gSL7ihWFmkKg2dN55frdD9fFqoKDPCVjh3Br4V7L15vijc97nkWWA8xH27RUQpRyTGziTJVHQe",
  "key30": "uwkzZ6GSEjce7vexqYbz8ccfUZyKwSnca52vy1kLN5gLZREG1dFmVrdEoD6JYiL2owbqaxdxYj59gVGefBHEbuh",
  "key31": "AbGBv4XoYVLGBHZFtMMkRHte9bXvToofS7uPPsfdsA1J2ityWGnYrxb1Cm9FsW2GDHCF7JwyrPSYomAoFTDhVuK",
  "key32": "4EPjgm58fR6MAUPUCLyW1y93FDPa3AJ4JG38FJ6tDgUGEMCgNumLxUF8hnaCtMeQ2PvLNThGR5dLaMrfdFByqHLv",
  "key33": "2Sk4rSzrzXfqZ1PSTNg7uMhRaHvXVp3p4UbSWtLkRqUcxeKtWWSVt8FhXJ2dHyibSNwmDbPC3HFNu8Mo58HQHJVP",
  "key34": "22j4Tm391pt9Wo5P1eXRSZodtCqB9ibNS2rmPmHTn1BpaN2sj6XERWRWXZZtK35wWEmj21PyF88hCsCJTK4VYrU1",
  "key35": "4qaEY8BXVDpHMxDhv3ujF4w88pegrk4XUdnvPg5nyBpKo9rnqeAyJiStLgRHBiMfMBr7LjvKRYKuFwXPKJaSnfGo",
  "key36": "2k94U79vhfMbxKHpndtxkSz1d98WhC46R7DrDnMMFS2dnAanc8zhuTD76aJKEdK78gJVdU5AWaBdwqoVDHpdkc7C",
  "key37": "5egTFRdsCaxwwZpUoYTMuDUTT4iGGEJnk19NKcgyszwoBXfFhC2xVjuzu6ELDVUsAR2yKgbEHxHpu4GBeiHteKKU",
  "key38": "3u9PfbGuoCm9pyPNbf2xfwkuEXvwsDgEyqhgmEUWDT2WqXPyunrcpVD9BxjsF6CWYQp4bndsM4sGz6N6pyBCCEpu",
  "key39": "46gAPpqjHkNGhKUQEomt5VfFHW7dutu5TFUS4F9ZT8twB5S83fKet9XPLQyAe4brqWkHMbNSFQiQeo9airY77bnV",
  "key40": "4v7Fhjsf7WougV7uYymkYchDtfyGT2Rx49jiNNnGXZ2XQ43njTHi4kLiqiBhLdZxNDD2aDzihv9JTtKQnp6hMbVt",
  "key41": "3AtGBjhHzmvZUfNtczipf5kQBL9P2szdx9JdwPkahSad1rqbSVkrQTPuRSfpVSdZzKdZSd5vcoc4ueFxR6jswMMk",
  "key42": "2umzNUzAkyWmoLiazASswX8DYdRgUEQatjQcqUcLmTh1mFgSTn293iRwvTFrLqLEEBxuSR1KBLwPyGKZVN4JYLvF",
  "key43": "ivqooN5LNxHbfcLAfErUNLKxR7BR1HyHoQyf6ZgLpqLsyvZzg5Z57KA5DuYCvjnBaYmxerFV8XuuAuJbscVeC5g",
  "key44": "3u1MRVTvYKCGjPuqVKT9HFpoZbAqLJt6CgAeeZhgF8ktzX1qqJrJto5B8bPRPH3Jp9YKDVGqxPJbgtPoTdwfnxXp"
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
