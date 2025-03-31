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
    "4JuAfLfLCPbTcinhbKiqPrYtkqKCz4SwUMvrNodJJQZdocgTpKKtZqC2RT8bzv94QEoNeU4U3cxq4eAgmbqdkdcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anivzn8NLUcbZJuow83RkczHXHvNSw1gpmosKZku5faZFxuDfffU7x296c5tP8H5EjFYYh4rjFKrec9Vm7Cxfkd",
  "key1": "5u6zCanHbLmNDyHWuEWjDd6vWUbJfZZ26cBhwwkhugXaQNYrc2Dgzruq7KQq7m33oBXqwbSH8ZgQDQ3KNnCCG4Bu",
  "key2": "2KdhLT275nFdmKX7EKiDv3ixRfHZHoiSm7j1ADeyq4caS1XRWkqANZfZcmsKtSzEK6ZYa7XRtrZ1UfgFbyruMuz1",
  "key3": "QjZR3TezDG4jH69gbYoq5HMioSFDuKZrTDkyUMJe1fPamQhur5F5HXGgS9GdRbRFWBoCWHBR7nfW5gmZkHmBtfd",
  "key4": "2ZnqGzyfzJo8CsTmm3xLAMhWLYYhjyt6SpJPZjtySGK5PRD8qccc19SsCVfaXWbLrVJAYZ7KwXHEQEFfTNP5Lkf",
  "key5": "4UkhhMnsxh4WjyuvhvtJbGMSsfYW6qbiHoyijAXWAz65Ym1TsLkGG7aE1mGLY827MP7wPU4vYm21NiCcAze6fX8R",
  "key6": "5DjHSYgt1Zs9CeYrGG33sF7zg3MzubyZmPmE1hKQAPYxFSvxzNm54eeGykz6FrysqAf7FrFjEPmtEtJDbG8KERG5",
  "key7": "44DpNDW9Xrqi41qmwTqP9yEUESviNakMW57CEn8yKkuaZ6CZ2MT46B35Vwys37XogyskCiGwwQNFthQQWbNHUSxr",
  "key8": "3BnjeTJ2RQSH9yQLkrVWvGVRRTBjryBKydiFsw9haA5XjEiBRJN1oDKJxpyz9rKvyffim9ozsHHLBDK62fzcazyw",
  "key9": "2nGa9Dd8sND8sBd2Ra7M2T6KybLBdt7m55MPoKBaoSo9WNDn7iGUfwhv9KibfVU9PtKT9a5a5jwpF2vvG8u9tw2r",
  "key10": "3eN2bBKkkHKqJW5x4VQsH22LTh7GXhQqZVMy9GsLEYq7nAggpTUhHUKUAnB3XBQCibgLjZquQaFyJWMN2jKtbsyx",
  "key11": "3qqNGijD4k1w8YZAYnNbbW9xXuXjCitswedK7thQH2gMnPSgqLExJnWYkGPrXZWeSJDGyERLGy5CiqzXZUB5bHGm",
  "key12": "2yKPuyGWvQwV4BsHCDDNC5RpKk5PhvcKjNWaiVsXfP4Z7iqqPkxSdcQXYAtCLkTYNPgdY5hLhxvMVo3ydhvfgsaN",
  "key13": "5Mp46B5tGGHjwxVwZhKv6eFmTuiicLGFiY1aPczPHzf9LxANnRFE8WvKpy6YfbhnfQi6sGSqRPpRKsaHpbHWPiYo",
  "key14": "L4exeUMyDpbbQauTVjV2fwREX1vcRSBMvHLjhSEWMJymfbXnJmq32R1q343cEmzDoW8aUbVFXQWiRdQY4cg6pd8",
  "key15": "xD9SpbwwAAefMfsRhvBHSeAy6KLJmvmoFqKvaD4m2RgDbBGw8JN9rUqxw7Y1LN6xWwx9UMDF1K2n3mzQ1v6UKMq",
  "key16": "2QZvp3RnwZBvFYzd7kv69wg2YW53CStY4w27P4ZmMz8PAU29NMYYEwx2YA4vbQ6h6TfYmgLFaneNK25ejiWiXasD",
  "key17": "3BixYwUeeSjjeuddQvpEFcNXoJLNgpikcwUer7ToRjcPo8omShEEavhPAUtkJgQC1w6JekYUBVTbQisKkVhc27u7",
  "key18": "38Eg18QtvxiDPYVWy4TQAwHCjr8cV3suYcAq1vLNEyXZeq8nfawBk8ycDCBmotKJkNk8FF5NyMZgv7SkvBAuwgsw",
  "key19": "4wZUTDiKSedA9hH6cTabpUHwVgyYh4pHj1bAq9jFS8iq9jKGnQDMAAZsMmneTaLjwiVQoLc7SwhxoabUJiapG32R",
  "key20": "3tfApiDpWzEXgGvbXyVMicTSRMDgx14EjuQNJ4uTvps65VtvajwoYEmsS3uyu8mQonEHz6vhXLh7F9ohPSdwkPdL",
  "key21": "3zAzMuSSa6Tyxqt5bTpwFkt86bip4WvDMWUXYFCsrueb4dpmyj9afzGTzyrR6Ydz3CLxJMV29VnFB58nC3brVPEH",
  "key22": "BnJmEA3yrP7bqFKuWvrTsjgq3hJ1CBhecatPChQuofTzZMm4DGrKBnkK92uqJsfGZQ4e7bADibafkgD7abbQtGA",
  "key23": "3KtBJYuLmLMu1Dn2LN9o3zqQRAuniuZ1WvqZkrvP2GZkDTbJ2k7Y8Y1C2LbA3HSSiaLNoFiBDrnWivMkx5QADf51",
  "key24": "4duJfjokWxzqr75eSGx2wa8c42PGkRq611eAucJYZCvzoXNs3KpasWgM7rTvpLW2noFd6PEnuiEuFjsuS2wZtAtt",
  "key25": "4nbYnq625skmhe9HRh9foYygfAtP9wyhYL61pK6nifX5G3NVgGswuA1Rmje5wXrMxQzYr5VU8seu2FfRKRAUF8wy",
  "key26": "4JsjFSJrMEomDCR8ETT4kdJe8CywKAk9mTMxHPpdnFd4ttaSPQKh4e4gsfKBcFv2YyhA1nFLeEyAWWusdGXyttHF",
  "key27": "4PC5VuVifA8j1b65cFTNGHdRd6Q1pP1oico97hX3hefJWRxD7qbaBoipPNPXv9hRSDUrNxCrk7BmBtDc1QdnD5Ja",
  "key28": "44GuaXpmZdxfCNn1FukwT7Rvfe7L5WN1W5QYF2uZwyx8Em45kZUmU4DkNrUBGAR5vyXku3oXrW79PjJ2p5VMfopb",
  "key29": "3fPHtSczYVm1phAmvzaPuKxbSq4T3K1FGbCzz4WSff6JutyHL336jU6F2XX6euFRD8cnbXcuo95fsoC6QqNoEj8w",
  "key30": "4dhQj9o5NRZZfQMdzmCR1g3UuuVnpdTs9bzzjrifL5CDybLA5xyBJuqGQaiMH3gdAwFjhCNb4F6fwXanE4a8yHJn",
  "key31": "3f3xRsyz9hp5YFTmrcN3ohbkCKFhnAyTCngaXSbW9ay6omGg7ezGwLW5hgpgVYMictr99ydq4eMAB5bWSBwbXve",
  "key32": "67LK6nZEGPh2rKAYS5bvRK5iDD8CdkNU8PtDtQSHZgBoHvd82sBRZNN146A68ib5Q41ov6HU2gF2SK2x9kTg2oxb",
  "key33": "5pnBMbLCPwSpXHZAQtNjFUdCtBMurnSu2YjKAtC2bGpHBKnxtKBhETBtRJszZFvaPQGjRHQiVwVKiPEMcxF3nC7r",
  "key34": "r3UdDi7osWCw5SmfSuftiCy3dajscGM3hmRR48MYE5vNhvC2i6Y94oycPbNW8v98G3GeEJk5NKMGX9WQhg2P6e8",
  "key35": "2qHwL59LZKBLL6HBGQ7Ruz1f7FLYPnDUukdMMow8CA2Tzs1MiX21C3u4bxxDH3Tcst9Z2F1Qw7zzFZk29mvniByt",
  "key36": "2oHX8KDiURF1S9N31J7s4XYfSYB9VLBVf7kVDP7181VkAJeSjo3HmDM1KN9fxHzauyQKer2XmtX81oX5F7JDcX1d",
  "key37": "2Yeq9rYW7mRsN31Yr1FXxZQuNqpPpMBRUaGFZaTMNX53NYEAApsLwCXdFLoqbnk1Bh46t7sQYWfSdfkDQEVHM5SS",
  "key38": "2p93dYSPowkAoWxijM5cEU5qKUXeGMhxmHzkpamV1c3tLpoxRAwMWKcbmTCy99jLhQmCWZ3MYy7K5FPBKNmSNckB",
  "key39": "JsQBiAWF46ZRJMhh1F8JwWJCNhQNEG1DGuSzyjH4LBBGSBUdxHNCf28JrJ4evPHNPnkVWPQWqPnegLtgE6bEFLW"
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
