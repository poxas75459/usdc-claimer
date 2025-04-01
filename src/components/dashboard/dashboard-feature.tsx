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
    "3Y9gJrJZ9yyiognq76zH57BHriz6a2ZCpUaJAryoNgr9KtyHpKLpQJp7hSumvAHw714cVVmWEtUaEtP8YuR4LcXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XjjJpBwCFRXNLyDffjZ45bhRCP2Uus177wVNmxyK3xuAmMaeTvHqtpmFJgTQu5xVi7ZEAAQvts2vihBUxb86CmE",
  "key1": "52fY1mSLP6UZZQtnE7SqdLLGcH1YL89eyx3xt5R97cck24YmqqabBm7YE7pwV5eNFSfQ9tZWqduE3HBcGSPgPj5y",
  "key2": "5Li2pSDXPEDfFp7S6w3x9PRpLk1yzV1nPbTPNczxunxMn596wq23ifSETQP4wRHucpEpg6vMAL416xhATvze88BD",
  "key3": "5LSh1PAXpDe6pHKpyaf5dMWGRbG895bVaCX98c3f78dRcSXCMTyvsjm8Larczos5d11FiXCVCSWhqS6meV8yYLnk",
  "key4": "4XsP3GfkEc531FJebw1QFoDdDfHQBAeWT3Tr96jb3PFVRrdFAmd3frsyQ7qFkn4goV81jdSgUnHxYG3fRs5S18HC",
  "key5": "D6WFJgrodpq3nAAfaJVpGcAhhjC6bfUcjbRN7XBeSbucDEYEahZL2pZTWe98K7xDUnkjWYC5TKtT3hAcv4YnBMr",
  "key6": "64Hb3tKCyHfkRsTU6fosSuXka4JVFSqsotaQXiiEEWcMaFBazBqcrPmMPDaQVKZXUTvCKUi8UokdHy6wXYPbQykg",
  "key7": "TW8P7FWY76StuoScraNj8xNKRdw3CT4pbEbXZET6ocWJpsBraL38pz2Rh2Gs8jNKJdsgkJyG2PnXZUsm8Ls9ef9",
  "key8": "23FgqoAGscpRvVAocPnMoiZR9sJPjt3PdG6PwHSLwe4MZKhEY46NTDTbbkwgtGD2rMwqSddhzet3miXHaBVRmr2g",
  "key9": "2seKAULiMRX3wG163DwMtYvKGvbYDvyu6M5cv2dUgjUXezPfu7NDWHmWovfSLAd1yiaPggGxeZyr5hhHpp8vMgkG",
  "key10": "sn881t6jxpuJ4L1risACGQbkG2K2tekcoeKKezTyC5pnw8UoCF1m7wKJLxYwRwyAtgJi7o4f3GnYKFi42ExjWQ1",
  "key11": "5a271AAgi3A8iApzBffQ6UptAE7hTYBzijBR6ZjQKwwvpXyTJPSEHK9RLgsEAMeuexpna92rQCiDZMCBaZhiZEr7",
  "key12": "2rddEKrRZbnYXW6WdznNqUWVszXGrvLWkxBcFcdpE1bPoYMLWXH6o5z8R6DRAWHQL4mN9Dn1CbkfvGPKFAAyVSgk",
  "key13": "4TdPZN2z3VYYQkpYKLtaTXJgHxiAYuRYwLrMSJJiviHFkjZC5bEWvk3Hsb73ys7timwnWaUDPwyk1pnLhRpWLiGr",
  "key14": "5KH7mujyHv3zbBCTyJCyb9YnHnHgK9rGm4BfcQArjLifCxu7DvywqhfPbAoJb6AQX4Td7Wm1EW7wyq7VURV5Dcf8",
  "key15": "zsCYCYv3txZCCSCKKgujJVE8dWx993GLMH2RqKF3pqAJqg3VeTQmrgtv42DQ4Vh4xyxQy8CCDHNsTuCG5oLxUPo",
  "key16": "5Z9biJxt8Hay7AZhYktY57TWXtb9kTxvFesdw6fFj678gwj9vQLE7hhBQoyAQ21vRVrLgGXSmQtBSpp1XLGobguQ",
  "key17": "3PskxFe8qqCXy8mXG7TwPiZXYHMWXCCz4238Do2EDcoCGtUQZkHcjJgEYmYrbJAZN6xDVjG4jEKFaba5CNDxU4Mn",
  "key18": "3tkPmi8qRukq8XTaqTypFUfMJbd6FCypNdLvY3Mj9ADM2W9AnNCmpdMQemPWduMWTBx6dMZAWFsU2krkxfsdaEmT",
  "key19": "4B6ssx8pfXAe123uZjKuEfyPCq9pViEuBV5dZjjvU3NTuxk5gMNNKCRBgVbwLfvWL3GxmXY4FWufr15tcsy9uDee",
  "key20": "2ry9mD3t2dmsjdRYLgdTftyiym5qRRzpNSniLXw7J1rpKSbTRZTsNNycxq2wuRidbEp8YUbDNDN1iVuduH4pe2eQ",
  "key21": "2R9iZkBdpHffqVDEkNhttjbZbhxtYKbhuCv4edr1m7rJVVMaiG621pc94bTprdA1WNhEZ3jcw53X7R8NcoMZQfBy",
  "key22": "241mJ7HQAjRnSXQ7cmjHq1gYkeLwaYwqNZXCun7bvuY3NWnAtTFRtBre3fD5rpcmfCwKXBWLgp25mQc1hkzZjgvT",
  "key23": "5JMTUD9zQyjbkQrcEG6ym5i2cFAJ8CMk82rbfkm3rYrbWtyz9o73YC2EyBxa78gWMe25uYt1GiPB8ESqEoNafy27",
  "key24": "EPY9KNXVWx7C7mrMWoAqY5YD9NzqJibQeo6mZXg6FzNM9fYE63uA6AfSFjCEv9LmNFTEiXiCZCZP4PYNnFqBQNh",
  "key25": "4XQeLAkjJPtKbrW8HNLzYCJ8dkYrDvHBmGUhERtzp7MvQvHYW7mFr5y8MQHX4QZTTtze6Bi29BFxXKrXqaYzk9Kr",
  "key26": "4zrLub5Pkhs31TgyzSkpa552jUQpW54rR5HBwFVyhpmCNmbUSwtpYDu3L6a9P9Uy6UpJeZuHE5Z7QzTYWijtRYVi",
  "key27": "3286JYsmr61DZmd8Qeh9HR3m2aNKJ74N2njpFagon6NrhPqjnaPVSq3JDrb8zwk1Pa2kbtmEiUkBaN7UxuN5HYzR",
  "key28": "4v832EBhf26gfxg8i9sitPQP4h57e8VgJEYG5qknytVbduciW7FFK4NDn62RkEfWCGXo6YTQuHqRiWWQodsiUh8j",
  "key29": "53e9u8Lvb2qGMctsBWFucL9Vg2gR7o77KrkgLufb9c8MaGFdDo6E4FxYeoqFwmWYQ15yeWpXzKKEyh7GFcJkCjZD",
  "key30": "5e9QZVvQ8XDscSrof1VNNqqneG1WGKtMnkVyJFo5e87c1qRmjnuScY9dtLyJsTviBm3XeHvvM1p2DZPgHnFSfo6Y",
  "key31": "5NHd5Hc1XijNL477nWcJHcoTPJnivdbpRVVycmywAYfxkgTrkVKCwTRXBRMgUvMuwzEHpy9jr5JoprRfB9GhzpEs",
  "key32": "54QRjP1cNFgvQZG1NppS9aCBmveavY7fUFu7cEvPgSiyGAn2UmfsWGK3y1djxGDf8qZekwDvSQimdcXzFfsvXLJi",
  "key33": "2uw4hye25QNxWtHES3m1aLtGVTcFxRmPNCY8SzWEf66wK2BJ5JdqbAcjyRs6fXfDaWNecZG8MgVY3C6YXSuh8Veo",
  "key34": "5UiiVwQacDwUMFQPpaxUBPrZHK2eHBpU8iRS3PmLix3grg3jv3qqJ6b8djwttKjBzrJqe72WFivbt5hTkYbGtFPv",
  "key35": "2dnPPU4dtri1aJbJUbxJC8JNBGme9umkLpMGaXGjB4N3MPqHmswDaEUNEwsdZtbJ6qzicTPpeMQDpepBRZ4SA3bF",
  "key36": "4xWvfyNAmTCXWPW6yA3zbM18qM887fxPPdhciLZj8EjL1dfRFnSZTUYg33wTKaf7KujpiMxDowC9jayRxzzsqEjD",
  "key37": "3RQmBmundPkiy7m5GqDMF6m9vYwDM4TW64GXVpSZP8Acu73RgWmYg9h74ctWgquPtxkiV36AbzhWxJWe3DGB6BKL",
  "key38": "5vd8fAFgdFXUkFXMhj8VgryZfz3jou9tEwpktDyEg2iGLvStrsQAmhXR3Ap4J7UurQp5EDXLJB1JDckEtV3cBtSf",
  "key39": "56m7x7Pz2hWZ1s4zsLx1dZPxyrG9pTKC8hG3B4tWnUtt1xbnTSEJBxLBVwKJJ96MEF2sQEL1cCcgbJmDrxEWeqWP",
  "key40": "5fexExMoHvwUmEMZFXci8QFaDAwyAwesrsTwSHX4A8ekoVcWuT7yLcDhSdKGkXWLaT9GesVTXafGD8gGKzAExEWg",
  "key41": "5ipQ4F24sQyGoT4fYjpwRVTj56E2F74jZEmPesUcqLYW2KwjJE7ZQksLyBxYRhJPmVMAj97myUNdwftRGj5i8ShF",
  "key42": "4edtvV4H2v9dH3nyXEaViMzdJ6C2aFgjVu5wnFGPm5iqf8KHqBoBNybBSDCXTwHAhE6MjWpKwd91GjPRqkkmdduG",
  "key43": "2xNX1cc8Boi6iejQU2snifSqtkuvGCMkWyM3Yqo3JpTUYeTrEngwW5BahEemnScYDAUH1yGzWgvbPegBjrdH5Nod",
  "key44": "5Y1dviWNyY6uRPFrrcXYiS3DVCwcjHPuxttuXmdFUWmPRwT8Cid4R7DWvwQNP291PYJHv3cAtNZatweLXSyizP1V",
  "key45": "hC4m5k8QjmZLBueCCQZwtwizu4Tzt6RH7JTmvFcjB7NdM97VsHhHPqbgivZbka6zL5nAgK78x4gW7ZXfMhXGdpX",
  "key46": "4KdJPotymzDTQPSEabe7anASpfFRJtbTraUgqJU7dWdJsDGb5VGKwLRFn4tD7s6K1FMQFKekZEr55hJ7PG9oGzii"
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
