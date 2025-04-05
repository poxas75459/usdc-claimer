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
    "3Y1dZJUrXfA2b9anmLjnVCu7Dzs55mkZHco1rXsuBwXMtZNinZsQs7DhQt4FUZVnCp6dGZopTgKf4bupn8xgvHdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DMVTczJUfXmwNHq2WkpBxHehnNUNwvoKeXwFTRFtzqcWy2Ghj71AwAHxcFS1PVjT3kE91BFdAFSmr66qiKkztN",
  "key1": "5d9YBQXUe71JJfJsYZLemjaZKtx9xuGx2Vk8t7ncjf5TGGxT1RGJpjkSUiUMxEcL66HH65aw8DZUmaBMcgK2Yj6A",
  "key2": "KvaZjtnDbKcFEfaNwEFDHeCj3YEA7weWdWeCz9ZjkeMTwQL9jWCZCnJbuFirr6uvSZdYsCPMy7S44iR1Y2HZM5v",
  "key3": "41vUWmKWZg3dSTvyq7NzyCgvbrE5UYWCgXo19hR3dd1PZQn7MNTwRxD89csyBizr5BSRWDxQpxpuLXwN5kDnJX7m",
  "key4": "5sRV2drzckPBbSri8KbyWtSJTapLUnx2xkmV18NUrACTV1x5XpGdcpHs7t8E6D2H5fzthvuRXUhNjS3FtdT8YzBc",
  "key5": "eobT4xoPEuXU4BPwwhARZG3qWAKAy7YmGA3fwNvSBygUQnejgApcd6ZHBUPvomkV3X2GXz4koV1AEnDAvwecAqm",
  "key6": "4yKGvywNa4WpyuzPyPkwjrErJj7Qkwau7HdNeMARQYP3rX3zogdgDPEjG4DC6J6VMGw9SPCwPV1osME4JhruYQco",
  "key7": "27HZYMQ3qTrkVpXq87wZu1JisgwUj4j9pgLHD8CTU2jkysSSvJwbbArPkeThc2XHgf8PgB36SVHuBZoa67uX5Unk",
  "key8": "51RBSanJtmB8zitYWceZauFjT5AavS9WKyCCe2nHuBPKwkbbaKuuEJHxyvNWmf6DYpaudHpXHu9BqYGnRySvczSq",
  "key9": "2vyjXdwyYqXVoQcmj1ShRF2FP3ZYCDTHMD37kTtETW4vAp6z8hZwsKEay1R43UR6aqRTtfGcD4aqKQQQYnRDCqcc",
  "key10": "2BFHGBzksvRjZQobqbCwSwpFWojobYRNPG99v9oYpVybcGGHCh64XHoYrZrduiKgX6sd749PkL2GsddTbs17xwjg",
  "key11": "3gJFPwdbk22rAQ4YhxNQXyCv1BAuGCsQWDhhRzdw9eJ6whwDpmiBAXTeJc77f92zFZsnRDzb4gdbNDXTZnoSieHj",
  "key12": "35f18X4VzMMFSSYcomj1zB1vKFid1b7whKC6D9XUPV8FxCMwjBrktz2yeku6mdNHcmeiBgPrAm96sSs7B7VtdRGZ",
  "key13": "3CAn8vosc6gywAgMaCke5XxnstrBQtRzMVgAintjgRH2RgcyXs6q7f59w1hVzTjLw64DeCQegvSBuzK3SQkoabvH",
  "key14": "SGa6HjbmuP8pT1vPwUdVLzVUAqXrPMBhDjzq3bfAV5RrNn2YPpvQjDuDTdhq5qFZLcYevrBGLT6ayQMwHur9gCK",
  "key15": "5uRHo1yRVWc4WJyfwWCBSgjsVEbpMmcawa6WSHmqNYjCkbYNjmHadRPM1oi9Xrj5mvavBvs8b8weEpmwwk2eJcGS",
  "key16": "3cXB3iBffzCdngLeoNphmMk13C2WZmzaVFb8kqeCAgkvRQntKmwxNvrTeJPTZiSmP3yxRMWdw4q1VaEypGUxzCLn",
  "key17": "5q82bpX1JJ9iLoWvvDLuLBcXpDoJERaHW6cvhFNZyRbxh8hqof7utTmnX5cVszqfTxDaXj3ipJ98SdmELA3seM7L",
  "key18": "38EdtRihRRWbCxNMC2NwBk6dpZmKHcW23L9GF5LvkDnMUtyXy1NHmKPX1VhpoJVsVicMwF4j3FY6RqrkYM9CY1wE",
  "key19": "5Xu25w28D4ad6oravGSPZhFx6U4MWZcATd4HfUvbkBJGV2JUmhpMgA732XTHJgAhouAqw6PjLkBBAHm8DeRYeNUa",
  "key20": "2NQLEbve4p94ngYKN6VHJ6ASnoHJyeHdFfoXje5g95DNCNh6hjkt3yQTPt8qXye3Ke62V3Y4Pnr6XGmy4bgJMgaT",
  "key21": "5dvDFJS73DYrKtRgjJLfaAkJfbMQKQgGTjry81KxKNTy26E5SUWYuZ7RTfoFLpBbD9teceh1dD7YHvpUJizErWQ8",
  "key22": "4szuvXkkW6XL9osNiS4yxVBxM9QtGtevgLvNLZdFForLtkU2DmpCrz2TrsiFaibPaDAYra6XxQMgAtZjyQtrDjZB",
  "key23": "2sCj3zDXQTh8nd5nMdaQEyCf6D5WcxRSY9PrECVrZFnT3emLogtrhN2ZCjkKxBHbdEy3kiFUVCVY9T3WtfF5hYYL",
  "key24": "4UsoAYDijPrZR3pE2VGHromcGMP41UTTsCoz7YwcQLDnQPGdoZ2tk96CBcz8YHyZopEHjuTuzPFmgxv4yRycijbi",
  "key25": "58BWGPB64kGLnAitifTfsdWRJhzn4GPWyNwHyjjx9ueBo8w9iMBkctK2uve5w9Z5YZNeqLHJqnpskjZ6tzjuD3ma",
  "key26": "4aR6vpdCVMka3bUBxYfQdGB97ZHj5mSsRvUdann7FvkwinXmyLWu1VUhRGQW6tnbVAMk9kVpAkYmBC3A7F5pNDrS",
  "key27": "2Am5hRZzHRyYvoBREErekqHJQvyvif9MNYMovsFA5yw3uqXuL38zFCpwbccvZHkXfnaQP7GzwXQubLwhat8MbkuL",
  "key28": "3zrXXydKF995w1ee9J2rS87jxiGgweWrasKo2jkx1Y7jhXPmjkBxa59GgAD9wg87cqJ5cf9q72JcXRQnutbuy2P2",
  "key29": "KSRfS9WiPHSGFq26GGEh3cwRanWPhRz2m5p8zyEnWijmV98j7ZBrsQz7rmDH7tfo9WNjtFmNYZPwDgW2bCgtZjk",
  "key30": "5hh3ks7Jv9p6845T9cjv4iWRL7SZAHumr11skNTLQy112As97ReKcSvbjY9SRNGBmr96mBJ93XMZYniJYdLf5RVz",
  "key31": "JxZufGybCrwMsFrHp4BhDipV228PNAgQd95Qxp5NzvqxRPVe8JFZ94HcWZdpjc2hewVYuYUGxnkL5LDa16hkair",
  "key32": "5n2BpL1URrEvim5qvusA4XTDEnSLCbW7vpMRi6dv2Y29MfGG7yP1ejdfXNYVH5ygEx4Ncrih92VQarmYNn4GEkVW",
  "key33": "5hzzB6fHvqkXjCwUvW72Pd2WjsWeW59h2LrRtL4Graq4vWRbBE2yWz2WWTssQy5z4V6X16zChvnNZj3b3cfMkEeM",
  "key34": "bfM4KcqVCsvXC2q3UeJJNHYwfMpB2fGFhwpkVJpuXHFZVz3V2hXXPqKdX3P8i93j8wZzwhYb4dnoTC3PwytudHo",
  "key35": "3AVRZbVTTeNMxR3CKwFnDajYqsDfQC9tgaq57PfMeDc8GK4tWr8H1rsz3P58V65xmaC3dFxrNUu847gUN5RgkBfG",
  "key36": "3ZXCrZMn2boYByqeZHPaGXSbwiJnuDTdmVAbupXaJB8diJusme3DuwtxcCJp6HeEHthxZ1fQQUEtNtPiUo45isE9",
  "key37": "4dNhaLqiRH7eR799pi9k4oCcppfWzeSL11TfU7rorJdscJimayXe5ZABf5XPZTnfqw28xSABNqREutXbRXwPi6W1"
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
