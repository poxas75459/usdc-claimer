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
    "3fp1mDjyequggmVPdRWYPHYsLPjs7JDyqfrbjpCVfs6idoY38Azz1gDdPf8RHDxsZabAgSioFkSCoZ3KAm8pYiAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHU7xH82Sa2Q7nF4rpvwsDkW3fkKqDBAuRnYoTbxjgsX3ZX9QEbFXCsuDtsSrno2iDjPcRygJcMdpPETvr3Ciif",
  "key1": "5jVttc5dWvEnPEpMuHxWDWtKVpQWPAE1DvEKgQ5H2P9eg18n4ppBsmXZcHfYXHUR92Se4BFW1ZJCRZwqRPGxpomq",
  "key2": "4K55kEUj6myWZrxdT57HR1tCANdNWxp5e7jun76pDBEXZGEaKmoJG1LGn97YCdgE4jSgEkNi8vuQeD2V6yqmgRXJ",
  "key3": "4bdC9g9vVNTTCiiGDuaRZbbvY6hCKjq3zeGqNhfDfN9rKNHhGrrF7fYxfbwD4pJCYdbrpWeWjMmtVRkx8x19FYuT",
  "key4": "cmshhsRYnBX5i9ao9dvTb3T7yPAopy4MEpX9CpTJH9pzfS2tYR523qc6hTpdsAHhLSyGsBg9MhgqCd6Y44JaztX",
  "key5": "2m2KobRzvJBePT3JsfZ3HsT48zW1y2uJDvUdeF1rM2y7DKojNNFxWXmq3NZRG5JpaU7Vc5J9n2zTDK3M62zxXKwe",
  "key6": "5phX2MKvXuW4FpDStu44fW4Y3DLTT55AK5aHJVSGMKKjnrgAnyvSZ1bKft7SafbcfrxToVnikR5tAqZ7emgGVrqF",
  "key7": "4uB7fCnXwFBY9QACL2qASSB2cE1ANB3EhRd4S6dBLbasnpgGJu75NuFAm8UbctrPhqJKxsC3HKU9MG9k9d2QuosA",
  "key8": "4tG7AtyxPpZnDDykwm7AG6d1U7bX2h9nDoJa5wRgkQ62XLdsniCLXWyJKg5UKBXbmvDZjdRFaPXMNmD3FwK3eUDa",
  "key9": "3CVE3h6sk2U3JDfs1dbxemTGNhcHnbpoimkXuVGADXfRTjaeqCd5aHa51x3pafti5dBEjuteSNWYTLMgWQU7wzkd",
  "key10": "nX62Qam3G8B8Y5APLT42N4FicrbxGueALY7pRhLtbfUNX61VcSomegb7XfaPj26jRqFPsaAZbEcFbq94DE2MJtH",
  "key11": "59SkrDkRF7bEYY9rBr7wq8h2cE9nEB7hkordAUcgJjgSzGP8u4kRRJPRWGfjAMzdWNBteNaejYKZuufdFujPns5R",
  "key12": "VXfTFPphtvrxhUZiTKZRzKmwe54pLvAvbW8JDxxHkG6J4yRLV1E7rs4DhpsSCM7fLLVsWMfxCDn7og42PNprAkQ",
  "key13": "6aWkAWpheDx1SXMkBXaHmkyXyN3wF4Y4XNvn32NDCGsAjkDcH7zXPuoakDBp4pMb2V2x3BgdV8BZmWCa6GTDSQL",
  "key14": "sZ6kcCNXNzQSCNwTWGqBnqvuMGPQQTVEHfEXQnNjKmPN3CDKS8M4WRKYnSCMnv1Mtibp4MAPvbZRWNUDh1KZcQZ",
  "key15": "3HRhSzdScpZA6TQ1uB76jynLgwJEGLwxMrRSagCGVb25aEzruYSsybXoQBA4nWo85dDY5FKGP2C1xApPAANPxVKV",
  "key16": "3ZyELQjM5B7eMsY1FwMAavwudM95T6gGFQ9rw9zVDu2DbL5mPxG9vSycras9KyEWhaWpqV6EJvJkWoXJkLEkFmYg",
  "key17": "PjJ2yB7urKSSbjj56Cv3z5YzSfjte8d3EEzgXckHWaTbmZvpHGxAETJDUjnDadAHzFoekaf8Yykj4sLxEKx5LP7",
  "key18": "5RmpfmhKetERNbs9wt9ZXJQqCs25NTFaGxHgCSNUstQe8SK2YWfoCXM1bcGoLbSDwgWny1vENKJnMDG4tNqmAa9H",
  "key19": "2pxSRnggaXqvwroBNfktiQuticyQix5B5gznQXNYzS74EWkNBtFxfQKBzRjgZTarfwo2uyKHZ6pMPQotvYD3bg1w",
  "key20": "3uvhi9LdenEhgJkac4Lsyii82EoLWM3MBueneo5h268FpkdSNFJZYgN3sAFTmhP97zdaEcb5mxr5KesPMqvW2G8a",
  "key21": "4iTfb1kXYdyhZHYBM9fmBGj6Duttv6SuFCpjLvwwvHaJW7Yoq1tvfGGxPzBKpS1RZeBuUB2GBMo7R91GPKsu7YWR",
  "key22": "5c7gieMrJ8XGGKNSD8eDa3V8ykwRoi9AEb6ENrzJNKUeqthJ5SK8y6tCDh533PX6nEx6t8tg8R6uJ6TtLaSDePe2",
  "key23": "4FGhpz85mRFzD1Wem71vyfRc9fW6mixxoAGatTwkuQZGtSqyNfbZZnC9hvNgCdtdEMxpZXqwmMR4wJUWZp489rjJ",
  "key24": "61nsv3B2iLZ1ygXrmjZc5mLLnebatDkALhmko35CvgEi6uervGNgSiznXi2sE1mEZzB6YZv58DPppckaTvisik6w",
  "key25": "3Saq59fHtQv4htDfcPWtdG9vTrHuMF9jo2YwzFr1qCo5HVwwnyGqXBY3WgNYYyRm8Jxf4DF1dGfBG4rBRceTrbLf",
  "key26": "2jEDaisHdRiXnMHNEn9A3bYpRcz3kaWx3exkR5N343tisAQH9VVJ1EhEwGFZ5q4PjGXKMRmKXsP4nwKU3dYRGGts",
  "key27": "3K1dEJqcMBBGPFxhLiUwgrayqZmYx71wHAHBVZfQujwF7JsmcauDBXoVazkJZrRXHyAQHFdyXi8vA7bsaJogHWiy",
  "key28": "p2FSNGNhkRQqSvtMx3iNcSsxj65df3ZMiVXvTeP3Mg6Jin6QrkcbmM5otntc296UWRMBg78HU3g9UmJ4bdvZ1gY",
  "key29": "221AnhH5fuKTgviviCVzeir5biZpHhNVA5GyZB1cu9hNEB9QKtqWaSyh7tFCHUdxLgySVnxtnTtLw4VJqC79MGwa",
  "key30": "2ajAzyr1zuuTbMLt3bCutV1ik3JHMURfS5YkBHSKuuAZJjJofRXU4JjjgyGHCHcnoYsUTSK52RaiboZm4iEsUY5V",
  "key31": "rk8wGZLRhpEckGtCPBd4HRHPX3dkKtVfcdWf6pt2d7w4pv2HS5u7eLYdgY4CaAmXVVVS2cASqgDy1YuZDYzQi67",
  "key32": "2Waf3TuFX532N62neihTJiN8WQZKAFoVH1686ugkF72Zftw5j5n1MWqiZgGVNuckXeFJh9zAzRhuLGfs28hxqCfn",
  "key33": "3zDfwu5agRgPdjzeYm424aDXoMGGNXGnbm5b4BFykCGL887BRRxMd6xMHcKQc7d8sz6iosBoPQ9k8LGX8VgYAGKo",
  "key34": "44tgpBSHJecrWzTCBykW2kQb6h9s6BkiN882Df272doQ57vvv2dLzkNmNNWQyieHA7qRa1qVvU2SMZKKmPR2JyjD",
  "key35": "36zQeCb777qgLBix6Ak1X9R8AkDxKwsCmXQvFvSXXXMkdvT98V5bumoVeSL2aqVJ7yZU3Ph5mk16GYZpbCKNqALs",
  "key36": "2iRd7Qk9CrNLGGEou5Sj85cszPcF5chUNchVkCYxswHnxFLyCX1YEqyGJNidJKFHH6KDbZhs2VzuAkeMDSkq63Rd",
  "key37": "5jF9jvbejtUV5Yym7qmfbs6TuhmzCTt4xrmBVfzksb92VjyPjueVRKc11BfVhfDX9Sgs5zKcjh4zHxjN7wetFZZ6",
  "key38": "2vdtpxBoqzWnqyGrJTupdbLB4GhxsfP6Sq83a8Cp41UP7cF6bmVQgVwwbp3FkJhLnZ7HzMkTKG4PNXUKfpiAsygY",
  "key39": "4oBQZPFjmQWnP4Wym8ECgAoRPm9T9Uuuqt4H6vUz3WGm1o6vZRXVjknpmvmNXnCYMkrLc3VrUeK5qRRr7iSip5zT",
  "key40": "2coh6u222PjUTvsqJLZ4WcqzBiwxmyNif5HWp8woPvMKb8qbqxtu1ujFQYpUWXQ2HfjAGgpGwaUpwRRt6LyC2m4Q",
  "key41": "XKDfmmmHTypMXDx8TYALktHGsvQCv6GjoCtdgknzdgr3wJUJkixefHHBW8ZYSKBo2hxBfx9HKHJ29kYTiS17eTV",
  "key42": "4jsY6xDCXEuFFNdg7vrKNi5pKRF8cytsfJZGwzPhjAMFzyAoA5UVTeGQq4EoaPi83JiovAXW3S3FexfB3v7ZnnfP",
  "key43": "3goFsbxZrqNJssWGggdnigpa247StYMfhexpDpSUm5hhodcUjngEzba4iWJvb1yeb4k1dE2yrbXQvGeB2ULkbKVe",
  "key44": "33aBkT7Y5jYHULgLh8vRJNrf9wgiid7HqELEY5rSjrWDrU7BUtREVWYBiGyRC1EH9zN5KADNMqguMMnnYuDQng2t",
  "key45": "4fPM5gni8RopT53zuhPwxvTU84JBktMTMYCg3s22xkMSSpP2gdZRTfrxmSzKLKfzRdUdcB9miJq9mnR7WT31e5n3"
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
