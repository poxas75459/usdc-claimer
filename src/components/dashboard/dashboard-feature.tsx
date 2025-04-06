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
    "2BC9iHurZ1LQKyNRrMRqhN8D2YuPk2Ysu5GtgSmDSYfQ9zHkPqyirLzQSgQrTxcbXmC3ywLGvMQFfDFSgkWFAMjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FQsdWzzjALce2Y4bt7n4yisv8GnsEZD82FDqZAsNfeUAmBafw6GbqgNXJRYaEsCGhHGTG1gnd79kijTRX9RcsZz",
  "key1": "529QwxXAzxPyvyGfewoGc49CtmdqX4hSWhCWEyC8GCkyDBTJ7pyf7dMSNGdNg42cVLd7o7hRrUw4ZxXuzvroTbsX",
  "key2": "5GoUmEYarK8PeRK749MS32GTNvpA4MueWUu3wa7MTt9kfodkA6a2ZYBYQfJ3D3dVW7M2xA3c5iEvYaUdZzKwsoEM",
  "key3": "2dUn1h985H8cvPxsWkWPnTYTkTJGixQtBSVG8ja9ZXnDAs5Xeac6HBw936YvB5Bi5hGiNqwXH1BVuTT8f2d3HjDc",
  "key4": "3Ys4BEEeY7TED4d9gjvn42Wjbvdd5zdRnfoSimfGadmYVhfcDnc8121dFjDRXhduerGwoEjaMw2B5svMCUfNRpfC",
  "key5": "ooRdtSf6AMX7xf9auHW9roWQCkzDF8hDsg1Vr81PfUY8q77u5PsByBc4md5GDJYtDppA5pV79PvB6XvdVfXYT2z",
  "key6": "2694La5FmQ2amFtH29cvJAbVhXvg5resvcdiiqbnddvjcBcCXS5qCn7HwLxj3UTEQS4uobB3nzKUMvQaLPFtFrv5",
  "key7": "3LWs6waMhRSakwdziyqSEkeodKWDx1RTr9uhQmMb5Mufqoi7iFTfevU5Qkac5FBdxUKrvubUkuiRgjUWpKs3DsPA",
  "key8": "5DpxRS6jCLHJiwMq3NFK8VW4aqicLL2QALXx7nbQmmDDr22c6CiBqSYWXSANo4Szhc9utW3Jf2nbynv3pEcfVmXb",
  "key9": "mwrQqB5hmjHpySU3goYr3AQqe9YxfQp4oYLv2ZE1avSsBbSMMZhDDVx2LdXq6MSXMEsuSCx2d7TUWk2Xjn5UNNG",
  "key10": "3N94DQoJywEJFZgC9URMR8ntwNDyRNzHZkQoi3bAJsRmNHC5jMntwYeGrjYheUiMVvU49R7uxfUKEX7jYM9W6a8j",
  "key11": "E9SF2xYkByv7UuZWzFE6pRVxAZvaYh1mP4TnqwCfQrS8rG898q1zVgA3WjvTar7fvNSnXZnWV8hTVNT1PNWjcV2",
  "key12": "29WGzibebj9uAb8PYcMHgaL5R9EdBjt4eCL4mumVmeY7TwH38UWae8wcTDeynm8sX4QXPBxngDmgt43G5TKxuRCj",
  "key13": "5qHTqNGpDXN28DZ4smSjysNDudnJHC363N2uqTtamqeBNgx98qAT3GrGnYDsNT5qrTLyKAxwTAni6KyjJP5g5V2T",
  "key14": "3ffEzaJsdLx4GWdHub547yLHtJULW3wTLLBC4EVKWfpWBdUGa58gFmaZ8R2GA4AqJgqjzxzFBsVTbAdBUVEhYzJC",
  "key15": "4tHxTd57cmyh3KhkBLs8Tso3X1TrAF3ofsCLm3gxBdvfdURxwPb8HdFjhkLQDYuvNU8LRYVoQZQ4sidZ7pjQhCKo",
  "key16": "33pcLEsJsgeg3YgVTByTNqNoGXTBr7jT4brSgWvw6SAoME25mToNRqdbRShZ1oAhD8D4vaEHQjAU1eZmyZnzroNe",
  "key17": "4QNsbEimYcKmQrxauNEPB13irQFxuHvQeiYUugs7iTviTsNo532Wk3jaXuuAg7pr6NZQi373W3waFxQfhsxfu4i1",
  "key18": "4EBRCjURi6mcrvYtkAHjW4BSEaHSU5eoSHAGyw5JpZVy4z23MqgkuESPnS9zDQEayUPs5uwkrPvJ9xu98Q74htHt",
  "key19": "4TzJuwLsa9FgmDdMT747Eh7Mb6v5yBvmgpiKdL7eBebQxPU3o62tUd6hGmLjrbyX1jWQp6XL9sup8YSrdvHkjQT5",
  "key20": "2CcRRFRTPm68UVRV8VEpP2XyZT4AnDVA72qNBaykENJWoWSZgAr3zMShyvNvkwr1Hm7NXwtXutdSdcFCWxbTE4B",
  "key21": "2J4oxrggdofnZhiNuFzg4RV4VuzCNBFMNFpa8opQhApGMDnGAmvQPqb7EQXxrP98KsEJ8NE6rWfuzU5YFTvZKFRf",
  "key22": "mDkP955zxFqKh1T5gND5Ce6H3orm2rcywQwiYZheHY8wAaHgnh9cJfzKN9zPt94bUfgkqVL2jvYA8zJ5MDKVTGg",
  "key23": "JFyTzTkcBomy16Zwhgw4E3gByaCWvq7GcewUorSjqrUki3cn4ZnEFvQoMJAicdN6hjQ3e92mE9uGYmriTRG8nfq",
  "key24": "4TZecvEXM2Z53p6K1BTaCEoXRidEzd5CBmwr6LGChk1fQWmPCfNLzjkgdPZps1gf5qYhcLRQtMj8rDTFVw9qwJwv",
  "key25": "5Xv7Y6FUmjgTKPehwWyowefcT2fGVXKqkTdNGjDom6i97xzwX1NVoAAfKunaiP2wM4iz4R5pk36k2inpTCG19Whb",
  "key26": "4uniL6rrWi5TQL8nGzctNTYU38Krz39qjQu9dKakRuhtoMRysRpnKt6S2CtMyCmBhaooNYdyHaHKfKqW6dYjmLRo",
  "key27": "3sVhNKpz4T9XjxvRSmUXG37kSmWxH2n1EfvrRndcEPMvZvbLXWhBGTfY7VKZRPrxDgaYNNad1PJUFhYFECv2Avqq",
  "key28": "dLjVmzfje3gNjMGbWLAvFvbAKin95qAtP9g34yj28B36rKxqqvrNCCmmx8qHRRSxL6tCbA5F3uypHxVFChkiUZN",
  "key29": "2oY32q97XDYjkmiMcUakNxJcEztpjA4EjYH1fxEyUiZF9dhooNmD2rpMtmMGy2PzLjhRtWSPjThZxiSRjsncNVeo",
  "key30": "5g21JmkLtT6tbaCDumjJMH1hXLTgQAC4zfdP3UXoEijk3mMzpZoFbDvr6WAMLM1rfjW51L5JoXDuLgd1AyDBAWFy",
  "key31": "5g5in6rHcRra1NhNTJ4f4GkGr6CK8yHxyhazQteeinFTT7Df1U8oqQgLikWn1fAdhhkzvNKk7ZMMXuYWCFo6JqFF",
  "key32": "4CX9yABhyJoP4TkSBp1uQbD6LfC4oBRtDkoR8wa6SSt1SEMjqnKMpSs6xMbwoCMfCxkfiSbaSjtJZYXBUBxTsrnY",
  "key33": "5K75ubSwKwsTdGRnv9P2P9jTuafEnx9GJyG5Ga5ajMzRX1MmbbEeLR8QgC9bxgvtcebK415pzAfiai1BzYjtodrq",
  "key34": "2sAcqgQaWVe6VDyiyA5oe41n6sv88zAsAwmsA9HB2sDs7DJD1Ewyxu4gBtyVQ8NGX6Yxq3QyhthcfCTeQsdPMh9S",
  "key35": "3X8MNJ6LceGAxbFNtxpGdgFa8FTZ3WzEURhrjJPAfEbvbcc5rg7bgQVp61E1CoZ1yC7HQTFxsRnyYJ7cMdvugJe9",
  "key36": "5kcPTALcEDUDbvQpLrAB9sJSxpzuWExaZEtgr9aCnrDpFGiPeVe26jaVck85GYv5h3NdRZZi1mmRASDq4P32iGPG",
  "key37": "uN955hAn2KK3Wmw2jv3g7y61qLJmFJPzYFuorZ7f3b9WV14m2UhjJPL5UFG7P9focZRzzpha6PZJVQhMQZ7nW1L",
  "key38": "36Hwwgxq5rLKjDAfmovU7vTdpVccp4ujp2awBdysEc9vwYsWPAv6z1eT352Eqs7VYhsvTe24W7NuMhm9s3vAwitJ"
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
