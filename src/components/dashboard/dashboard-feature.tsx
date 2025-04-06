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
    "DgqfLF8i7LxtPs3HPMoCmcuHwi9M3jVMkxs3Q3f4JFQKVo26EJxBLXKK8kninGFFojWxJtZs15urCoi63YzpSgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZP5gQBLLr3Xz3u5P1mmvc69TJ5fNxXabPdA6fziXqrm2waqKbe3geqHKeyMqPz7pYgG2u8sYUVQ4KaN7Mb7hAN",
  "key1": "M1uEeYVhknJE9HWjKQUoVL8f8GUsVkjbC4Xr7gWJVvZc8WR4kqyzepryaJLhwjYbCy9QG5jqP8aBY9dbVDcNmi3",
  "key2": "3LThv7WHJUQLGcDsbQQirFDuy5PfpLk4e6g9159Nsv2moAGWahW43mhvXBxcQBtNfSZC58dNoYy1iKWAD2mTv1nE",
  "key3": "3WkEsDhbo37wbjwg4C9KL5zguwy5RvyYpGKAQgP7zM7VRW1EyBnvZAb2tSTSinnPrBeGf5HPYmaN996jLFDcWcN9",
  "key4": "3KTkGRJAAZpLzDjDLGYc1xKgVb9oPuqpaSYe8XQ6ieEb4MifzUKxm5z24NMnritnaNEr8rmbdza4caj1s5955gxb",
  "key5": "51xfmKY3pPx2RHqBbR3mjfymC1h7GwcdHPtLRgfJz8NLA5VFif9mB4UubNXH6ZZfuqMnwD5pwkYEWjAP3EHxP34j",
  "key6": "347S9x6RoEo2STrGFSF6B13QcspTeoGYNnSdYqNRfs296P146KAw7KUVKRv1oqTzizELyf2UGZkpGDvYx1maSSfW",
  "key7": "gS1kDEaEKmkEmCKouoHjHzBnGfvWepcLa5RB1oqxdiAMqcTvfyDXPCePpB1NZw9HzPw6q5xgsdqHVqwXpP7xtiG",
  "key8": "5CKCtQkVCTNad2Yi1wkRZ8PJ6AyZccAN4zqyKn4REMj38aWpwUTFBSoD32WDbsojizHyErAYY6XqtNhXamG7VgmT",
  "key9": "5w6HGu1SEW6hib6JUDPU1w7mQhUsdSSAvGY7aDUGaH3PPoKREZFmSuPu71SnAqchuMs33mckwjWdHexzaHNkRaUV",
  "key10": "2sa36eLK81PgeZWW3AbMJQRRtY8FeXForQQZHMpZCWBKvR5v6MaopbShnEsCPnC6sTzELDza24eyGMvrKsJeQSQ4",
  "key11": "Sd15de85ubijCcjxU4d19EEnVSoH8A17vGh9pSLqVnK6tD9SUmgNJjfJe3WXRyKWQQXq7XZMvKYiFXKWEqNkQ17",
  "key12": "2Zq4S8Srh9SXaYrdGKVXS9okwNuLbxVPYbh6yBRW9VXgENor2uuw5pUnaPQdoKZ8nFpDvJ4tajwTdRSrUAswwGc1",
  "key13": "VnNHWxPWucNbJ6TGKdFrJFRyNyncQK3T6y2mua5iSkr7bEUsVoft9kSkRKxUegdc32Si24seP3t9e4dQGaDCG48",
  "key14": "ykDQwxEyevvoZ6QFaiVmGGHwthEZi2T1v873ykUCPmB48TTAaqjQAAuvbYUBcEBbqe4ZmgTSG53TrtRKbfW9iWK",
  "key15": "2kKxYV9fVFVJkEoyrDcE8n9dGonQLFFfNoiPYZ46r6PfC3qKxXa1a8J4njByMio8fAXRPkzUzW6JRL6agizQ4v7Y",
  "key16": "57rCSbvrd1z2dcmvXMxNS6exh2hjLMNJaTM4UV2dwfGzUsSQRDi88qxkxBz9FSmavTg78egwYXmwyrzN53Hyc9Pu",
  "key17": "ezULrSPQNYrvPZ11VehhH9i8FPPGtFQMLRtxdj8X3sSkr8PNSFCHKspwT2BGEU7LXxGsVD5ryuJrjHXdaTJ6T7m",
  "key18": "2icUtLE74ySeZNkh5MM1Bey921YRsitWpjChnAY69XwzGMcbJPSEnuXP7Gv7Gd9qMMVvNGzHgoaavRzACBWY8aNf",
  "key19": "4uizSuQmtjC888Egcv8Poag9P3cxRp3vXbSsfY2xMVsYPjznmHsvi5tdZGJKJRxAaGmfCFkr8w3rzcoE8BM58RLF",
  "key20": "Lv2YNWghx1JHNqGtup44xsMjSaiUnS6xVhvyzVQ8UauLhTErp4C3SHobHrzxhSWw43eTgZ8KHYGAE6rpvt3in3g",
  "key21": "26aMF2hK29aP179g5jUmgsr1WaSWx3rVixKaoR5HWP3YxBFNmbKjunhhr3Y85nzmyxwodjK2vwtLJsDCUnxHTj3n",
  "key22": "45XmvsH78RfrLZA5kdDwMiwnW9vbccF4caowFPZzgxt2tnujoEAzfu4pf9wre8qtkzoXXaEM38MobnfjhMsZP2yU",
  "key23": "5dBDUcFYFvab2Uwb9gxtvSHfPfJRmgdsvkGcYJzYUBECayo4fa3U6EE9Vkrk47MJY5JSiTfYc1KJLv3bE4Uep2ES",
  "key24": "haxWHTdctPQjJkdokHLnBTUph7JerQcS2NQBhEeULqzfz3Xf94BvZoteHiHyumvBmJchuJSh7m6xycFmeNJ9kcp",
  "key25": "aQLMUKJqKkV9CaC6xmMk639TKSt4phGJhbxqVd8HFu9yimd1eS1vWB9xyz98ejDGafFYwwZnu3PJNSU8iFUm8ZK",
  "key26": "3acYRDaA8cbieyyQCmYVBtLG4AcTJz3ogVLdUxTa47rbacPRXCu43tB5hYKVoPPG51QuactRLb9buaaxjTakydbf",
  "key27": "2TAXzScHxiuVBgerLJLEEm7gQMqVfMpcu8F91G3mEiQhihoR7WsDs9qe3B2tViCCMwv3cNBTAeWM7D9eMAFL9T2y",
  "key28": "5kTmimGcetRVSH4pSSgJ4M7YZjoK5E75cuQwCg78GUsiYAB4FX2duvDrNMv5ZBmrv2Ay98U325Pmf4ek1Zw1JxD4",
  "key29": "TRyR4EQgTteVekBKUeDfJF4ME3MbD8jTfCb5m5Di2fLNnQuCCrpZRyA51zQZkvqcMhzpXabdq98dDYpjdJVX6LJ",
  "key30": "5vdcUd2Lup39fVoLmwbWKF56XukhEYe7MmJL9b1fpgwFX4qzhmra9DNNy2dEwAsSG2qr8EqrGFHh6cgUB59hSfWg",
  "key31": "rgmkpYC5GNfYjGRjgZBq12FcHJ3b1oYa68GJRB5SYvAaZuTdy9aYfH2m4dFJArjaB4K7Vjav2RasAGgJ4ZVQ2RB",
  "key32": "KH5r34JqLH6rxQzWk7TcYzNDDmzaPFaJPETH1ZP4cwmp66mAr5KtRWp4WrqgK8964hECRANaDK5aXf3rvgsku6E",
  "key33": "4UtSvQ1kWfAeJgG24PdBK2PmaLGdXBXs59fCobhWzbzpwXXWLsqBstGqbK7vCbpFetaeU4MqfnddRYcnhVTPLNqG",
  "key34": "5HhaWcPLuSTz6TFgDaXkEmA7CQ97jfuhoMZrvZ45czy7fzjQKsqxUHtwt3KgD2TdyrKBmSTUGJHxewwKFVKkjJ5m",
  "key35": "3ES5wf9T5NTuXrJn6MGPv8KDfe968FHwYKcupxUVgEX2McLKWbG8DbPTqyCgQJnd5wXPGtQWvQTCEQ2cNvPdcc3L"
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
