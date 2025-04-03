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
    "4RvX6Z6yn3ZChmbeuSgaVyNBnVeNFhKzPEeDxXceCubQQiJPZzVv2GSEoP4cnuTjK4gKW6B4pGd4pMBfzWG4fE9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLwPiHTqsRmnVY6vHahU5TSTmTFSdWUst5PzmsA7e7qPPx8nwjQ4uGxCxicEzRaW5ox3Wc5YdYKuu4ZDnzsxmvJ",
  "key1": "2rwz8s7Lm2FMtVjeTtX9vjLc3dwvKBhTSDo2ZCRtE4t18KjqN9Q2vRcETMQLhRS7TCh3Bkb4BKb7PxSjHkAhnjaQ",
  "key2": "u4K99DAGPYJ8mgU2jyezEyyii5gM2dDxK9G2wtknudCFhLMsoDGMdtMh6Mdj1DFvrkAHReEw3CgQNHEieXvNLcs",
  "key3": "322T14FmmCZJoQhwuBhcxvQCJBLPptvkDP8KMobzwsQFMuk89bTQV9YcfTv1pEF1QFZhxYDbjhvrxQ9wbrGCsEUS",
  "key4": "M4kXkzrtinNFJkKf9hEqgrRmnn3HiiTzChfTxvoGVvuMpJgpChCXFuwi6mJcdgpoJ4nkgAt2hXd4t2hzVSeMsUk",
  "key5": "4c9QpHmqX9LhRSNTxqcpXDghP82ktFVaJYfcri5dV445gb3g3Fi2fpFShWUw3BrWswD8WBBL6JFQDGjKPyC7uEJK",
  "key6": "2kBKfy2z8zm1ovhNwXsQMoGuoWDKa2ojnLRWo7MYe1EXbiZRgT729S9QM9DuLMVPUseHqw9VtpuXRiQgPggHzeuA",
  "key7": "3fhh9Vkhr6QXvMqmMhgADsEGDsoJcSnEfGFckcp4AzVgR4Anx2cHGMYxjYNyWQ95EcbhWMUpXKjZoa1CqhS7zRV5",
  "key8": "3MG46pQfzUTXfhpE84bohsD6VZvjGZca33u95s1XSaFJhJDUowEtmKccHsoMsnvzvGADpCUNdwnt2exF1gACwj4o",
  "key9": "4Vfb3Su2qTD6DvCMVtXFmSg685XKQgG3PXXUYLermDqg6wqE7nCcJNQJDkAxt3voWp5vnNT1ytvwhoZmRFyK6SX",
  "key10": "3sBQnenn7wAoM92gF8kGatMrJnnC9wvsBkVRh7cH6j6HGjkfmjWpg5ivdeUSuPnoHNFFVx2cFf9W4ZesCaSCvfag",
  "key11": "RHypGwaE12QSX4DxP7v9Dw3ebUvWL7Y1hYCLi8zuZonm2VKedXqpQAEaEb25KZrGz3abUuEKCJKXX33XceFqCGB",
  "key12": "4NaRfpmPno79UKDJ6KP47fBCEiWhXcQNQnqy3YBxwWBwi6ySzSzaSHDgjFTKnBNg141KmY9tYBzbN4FBsVpiaxny",
  "key13": "518PK6t3Co2ija978StcTg5ji9yyGAMehaKkuhXd2pi5hZjZ625bU24hx4dvPtgeEXBFsDdujHgaZ5BXQt3C4a6E",
  "key14": "676R6vwDj25FgmbeQi14xZ557CzB14jcCq8Y77eJ8D37PmfhNGZhpHFqwPoAZ4sjzipJZvGnEeDSXrsAv3dJ51gn",
  "key15": "2jb1ZfGUPTGQY1YKR1mq1teSjb2KgL9crdAdkg2jWeiHPsj6iw4xJdmXrQStrapCyRrz7H8KcVBV959mHiitBsrH",
  "key16": "3HAmL2ov1yx3Nm4XRw2NQ7QZYaBrHhXHWrKHQyuuPNNfmURE2uoxuUz9Bv7STGyWqbgeM3Xis19gxANr24opiGW3",
  "key17": "5aoS52yS5dhF8SYSvZpCycGi8qEDHvv6f68exCT49rsJFB2ivKjtF2nc5Lf3jG98oPourvU7jzsBrGUSaBC8oTny",
  "key18": "48jzW3VHEah2K2GHg4wHdivdKizwkZKszKKff65AN8w7g6y6NyeqhYvHtffyUWNo6QM3nwHYGfftN8RmRZt5UAfc",
  "key19": "2p3Edx26cREc4zQopkpMgp8aZTWV8SxqSYugJSabwoUVMSF7rpadMxoMK66GQsm8S5KyopwxsNTQuLWEC8j5imDr",
  "key20": "2K3D9imQq8hpvu7wC5rcwWcJyG998bAJtuPCtFA7nXQCqXJRkMQ1wCKsXayp5fG2BCkD6QGDqGebfvX71Tkykzqi",
  "key21": "5rG3RKf5eBXNibpaxLgqzjP8wKmGzvuxbWL9AN88FxcGEnCzskgDMdDpzWqRYrKeRxSUcadzXeKZp84bae8qMMfi",
  "key22": "28kDDwSLCQNyix13JWpPvqQAaAraRfdMCbYBT6q5pay6rZyP3HtDN3ER2zy3RQ8UpuMS5B1DZjVtxmNdLfZ5pCQZ",
  "key23": "oaza231hm7neiqnxVKcdD9NRUsF3gxReHJtn3pcx16zEXH7SxQMHFBAq6RnRmSzvnvrGTiiYgByV4gw9Y7xeT6j",
  "key24": "DWaJCXgsdzw8ijSYjhRvBuNGBYDWMAJNW5DN3JmP7YnpMWQdyedyZLXCqmowcSNCireuRw8mqkKJuYrnmeaJ9xN",
  "key25": "5ksjCPC2KCJ4ttXpMYYrfHQLb5k13W1zP254DCYLvDEaa3XZgVGDbfv3AYCkd2jM6V9ed1ddt9coF49Gw2CVqXSd",
  "key26": "gR3thieZzhK6eoiSTpxkvmoi2raNersNiftAih2vYXxCNj5nbguprF1TwLT5bLvFUjpghc5w9unAwgkaeNeWGcZ",
  "key27": "6EwJ4gLqN3VPXMEgZgqZdKrtSRupJSctrY1jDADmV1L848HSLHs4uEpJcE2ZcCoiGAMwEChqAJAKghjAxxBzi3Z",
  "key28": "3Tpzy6eisqRxWNxcouMEker1rLXY2m81zhZRjUH77nAQSEYcCGzpGo7NP1eS21cKy4y5GBYQE1x5eJEPoqN8boS6",
  "key29": "2AQnepsF81fRPWhihj7q71UPw3Bn1kFDwW5JQEs8Jbs3EFivMXF8zixB4b8W4fUk6s7Hcnt2rCAytB1zYqJ5ZHeX",
  "key30": "4pMJQ3igJtRhFXHrSThycBte97QudeFMiE3FU38VmNcuU551zfnnHtEPS3P7t9KakLSq5wFJBVxkdtG1JX5iZhUV",
  "key31": "kRDNXz6tqFNh182GXskTwdZeZzmShFFmhiZ72k2rgDZZNDkG6jXLiBdSTj4vojTxnWpfHrNaGuS9LFrfupbU5yB",
  "key32": "5tJ6FPUVRDMsQuXaNHwuuYYuo3Vgoq36hDQYC5u5oQgHJArLAApTECafnAP6RDbvFFPXZ6LgAdfjiC4HMp4sekFz",
  "key33": "4Deen3HrG9qZahXnhNHVTuTEWAHaFiSf4vigH9phVh4jxQAgD97kn2oDGVpcEQ7TJ4EWa939KNFufZHqf3GomfDW",
  "key34": "4RxsweypsnPjGtdBk34io7GS3ZM9hLWmTtEALL5Lth9k95XgpBJAmd9f9382yteepKULKfTainvhRf3N6bQ9pvyo",
  "key35": "3BPcA1fAH3w2yRiEynQNSDhHqTn5e4rHacp5HkKVAGXPc26VHbwdCjD6xx6pvpwP48PSsKhbi14qTrouxnTvL73B",
  "key36": "KM2Can4Nk1xMQj8kRhKm5QpwC6EEcfYG6Dam2hm4sT1YGLQt5RQAufYACTUdEjebHv2FcrYf24h9PPNhVAx8as3",
  "key37": "5xpb9bMxsxZiyjsRndQB2m91d3vyAT3jRLihxJ5id9QhXfUbRU7rme9uqaYEDYRsVoABoyrhDcbY2NY8bGNxzMGr",
  "key38": "228hAFyMTvJwmyj6UA691B6AVqxoL5zqYADHiUkCAqj4rcHV75iCp1iaWq2Ao2yDrq7BwgNGT4UHN5R5BGbdPUjF",
  "key39": "4VAfnzs4ePdRSDVeMmwzi6pm2dj7NNFAcXKnkNKcthNDRqgobCQFwxqVw3nnVddQBc9AW5tiGeVMjsNUTVd19CZz",
  "key40": "4jAzKgYWSrCjjq9gKe3RNcC9km7S2ChBMY55FcpLwb25K3Zvc7TVVEF1AwrVbYgwr4vWrneYFMfyd5ungiz6dJRV",
  "key41": "4jq77ohzfUyvMJnTKiskNoVbUy6yhon1XBQifQZourqnE8CXKfsCAs7JjR8TYSyqN3ADMSR85NjabGn7S4vp1gWW",
  "key42": "5ij8DoSHK3YPNVBMo7MVf2vLyewqGBQvLHwmpjkn1juPgHABo4kXB7xA3KYNQHrf26c5P69tdCgBhF7K1RfnVDDq",
  "key43": "42KYZuv3xDUXJx4kPtyWBnDHDZPaDkQtcfS6qH2rztimWdkfcDFub4fP3CbvRf2ejyokrH5nPFtDJPAnAR16i1ae",
  "key44": "5cvVnC9TxyhNkr8rD8NxW5PhyqanaLLAm4dqwYYiSHzGPQK1CkMnvAcwnZxnA15148t4iz2hU9rxyGqmi3JeStHa",
  "key45": "5Sa37mWbFBwf2W5kkRTkuoFkFfDf7DTXJQbXNmGBeQLtYk5EZgzEekAaaazANkGwzdULb3eXPnExJEaWCEx5pESY",
  "key46": "5Dtvi6migy4yEjA4ND3iEf4WgpAGv5aiLSUE24bmoxmZ8wbAQ3vyQhi16LpuXXdATxq8BCTzHD9dUpDzQdZzLySZ",
  "key47": "3XJXkHNoFjugFnKocRdTzRYcSVhDYA9fD4eJrV5FcAK4WwETocnSWgoYk5pwZwPS6nPTmbo2XKEkvLV7YaEdKdv2",
  "key48": "2m43LCAztnZ6TLhgiowWQjeVFZCXmf6QwmqsDZN19Rsf3QMdZdDvsSYmQ5ky2hpiiwKTTbMJ9PuZMFnivuJZKhXc",
  "key49": "2mLq5aiXibCQHSwL3nBup7AKz5vYQDJ4uTuTXNdgHLBtB7ZeJkdyimhZxThUJUQuMLnHWbHdSR4ZQgDzfHjTy3Di"
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
