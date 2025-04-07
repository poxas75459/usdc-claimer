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
    "2DoeMXQXs8wqoqWAkDirCRZeiji5SBRDnmXUR1YWmSoWPcFsapyKhsucziqivaV9qNikhcmyYxAujrXowHDZ2aC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pY6jaHzFp1DjBh9zNmuuNUGqhxYMsDfmrDUWc96dPLUNNz5yh1RWRrFkfTw9wrHknosQGB7PLw8pAZSJ9eGF5Mn",
  "key1": "5WdfG2qxRhLxYr5czzKeCR6js6uGZ4sag34t3AKxUJu1tDVSxb3AQ3KDAsvKhn1JHbTARgkfakLSPrpi13jkpabS",
  "key2": "5tzEXipxfVw24p6uYB6dAzXdtWzw14VqSTUwFrxvD5N5CwDJ61cmfAxar4kpuABKFbaxAQQEgxBoQb41KphvHo2L",
  "key3": "3EoPCzw1cRSuWJ8pZqzUy2yL59TDvfp138UQs1sUXLiNRKrsUsdDriF5hG6UjwjjyXLHjY3C4yvx1Zye4KWXA38v",
  "key4": "2kBSdCQNJBZpXtBZp7kDHGnTjFMaTUDuqr3sBZWgKwcd5i3aTFmz9mZphPCqrMSv6QnAD9hEjyS695KnHQFR7iym",
  "key5": "5BZWrULhBRTabxFDnHgb2wVNxUY6wt3eQL5FRVPxCfs2HCFxks7A44qMgogRBArWcZaRCbGjFvgubuGJ8ieL3X6r",
  "key6": "62JrR32Xj6PUEstePsZd9Yj9BHqG6zb3ESYEuJAZCcbUpg9pFW5WBBv4y4mpurxZDxDMRZnwb4tsX7x8uw2ARy3v",
  "key7": "59an8gwqe71vNVemm6WVy4A9g2yQ8zPBGzcGbNDBwwCZUo2bSQ3CuCcBC1uPKbF2q6FLxRftAE9JF6D8sCCFU9uE",
  "key8": "P7WKkLeBVvmPAppUexsoLcsyFYG8HxUw1U1NDWfSyZFSb13ykyHPvcUKBBsQniBoAiZFCJZFPhv2bP2qGUgc3AH",
  "key9": "2eBuHTvrWGJ8zWPDcPPv5EaZDapL8BsCnbPjYEsHg1kGifG8WNL35ZuFTfMMkZQBnuxrau9ESVfdqW6S6HSUDFL3",
  "key10": "39yaeUoGmY48dt5ZCptKQzLqZn8FdBXMmtY7R49E2WCo12y5HwEpUzAc9oMGRgzfv7UcPsbKoogtG1HfRjxu3yxK",
  "key11": "4BSpahvPH9hJHubuPSEC9hhnWWegeapdXDiHcqtYRQXQxVnduukQcquCXK2ptTNvZTvH1fnW5M6TYUQ1ihyPmXcf",
  "key12": "2EY2SRhtthV32JavVQLqepVY3B5ypRySziQHr31LU1wiE7xpMTpyv6RwaBbdY6r5KheHHmmFKbVhWFuEcYL3oKnm",
  "key13": "3FhYFX3oxVbVbX9n5etFgnZHqNv99rSMwA9piydUEGFmam4bcLsWERWh1S96CAc6NGMBkJkuvhHAmQ9k3nA4XgTx",
  "key14": "5Wtw1HLkKsvnH8RiPdeH7aBec7VbUxVRR3tK1mt4sMyykXVw6xYDMQTSPBakycFx5ibbDbrnvAyJGDqfG37bNUHo",
  "key15": "5DPNbbgBrvVgoaQpLF65VsWYCgA9Cz9Pid6VS24pnCefPgYr4BViey5WcsZrnhwU9RHgi8wKJLcbBPZCaT265mRi",
  "key16": "5eA1TJyR3sPHvpyx7wS3QqSTdUPGskYBajwfgkahhe7Z37uQvWXQiNGLSvw8Gozoo5LwnpHiA3f6jLccSHmTViuY",
  "key17": "UjRoK3ADhuT7YVGpr1dMgGXBjHgZViTkoC2C6LSRVHB1mXTVni3Y4Yb1vb8CWzb1GDtpris2scaNBD3eNvo5LbU",
  "key18": "5g2QS5EEukuFVLrTYuZFvjwLnoahduxd8tX2V7V5rZEACBNrpaVaTNAAkqRGFP3wMtR2iBFGsSnNt6E9uJgt3cDt",
  "key19": "47Nq2SWhPkYmMvkFNC3zMyim7x6uxj9JtxiGridDEBkcMeN3ShfHVBWc54ayAEwa3u4CPNDs3Xs8zYz5JHF5bxAM",
  "key20": "512KtJAGxDJGgkR4Y4DP814MrQDPobVjMaEmPCsM14PkKKhYZWsfYWXEb1zy9ZWiNEKCz6rxdXuu47njKdD9BH5t",
  "key21": "5Nrc2qnMagwsHcznNEqQsZfKv1YSoQeGJny6z4auXzMz6ReANq9Wb446NgS8dqyRiAFq9zQRkQknitj8dhCNnKA",
  "key22": "41jxiYijktoY4BxAJpN3tgYSAkMwE6dD1JXUUk97iypp89qxkrwcCCsCZtc7hAEr8sY4bWSLUWYHRhL8vrtHGddN",
  "key23": "2DRTqGKwuSrqjQfDziUqQgFTKAGZ2VJiuVxY2BwAy8frZ38xk2fTLhKP9PSkuitjZeYL6vyoapcccqBaH5eArEcW",
  "key24": "5wL5HJpKBfSgYbyBti5D1AgS9QPjNtRGCZ8MusGGpmHwCwrDGuGFZKfg1bHZEjkTCwqR6PR92nJBRLF54XWoDuLj",
  "key25": "btE3812ikP2NTEzWXHwuaUvad7NsESBEXDZCsxuppnvbt1L3xS5mTrbBPUv7T5EhDAEVW6GFXbFCAoDDEgr4WkJ",
  "key26": "3QKkkxBzjHfYuz74UnA8iTGezDGBKfwU3pmqkAXqVYewzBffskVEcZMfM4JBJoEdUAxMPsyHsCGB1YWDh5mxfGdp",
  "key27": "3j9rg93U1roB7ECPttsgkD1wuYJ1RtiEnwwTKqk5x5CbEn7NQUVk7r2mUkzup3T12QP9SdYnuigcffyuRD5e8mnv",
  "key28": "2QGYxBbe2yPjDaBTx4im833ZqcGLoCj38b4X1Ei17DJjeJjedX6XMH47Xs3LY3jri1G9B5vHcRmKfe27QXZ8U5Xp",
  "key29": "2eqeEXAqXVozsnzkEUH6UDuR1yWWewgdUJUWY7Uhrwev1VnSaPwhkiHpXPUJhb7NLakJonsGkEWSsA5WhCfXGs8K",
  "key30": "41VM3Mh43cwr5nnnGXQ4rSij7KiDGD1g81x9MwmCqnATs2644ymCYBLaCGnbHfCbk8geNrLkL18TsakoSJuHCUF4",
  "key31": "ehVNY4zfPj1RgyCyfLceR7pPPqKM9QBjoknK7dwB3hLRQpYRoBSjFr41usQbHkPhd1EDUKwza6CfFgvM9imsPna",
  "key32": "zMr84EJDutieZWMehYpkKXqC22d1QCAgYTMRBGUiMw4N1HHW9UBTZMnNQe4PzZ9J8ccdkC3VkREgW8tcpbUsfNz",
  "key33": "3DNSEqqXhbQ7bdrGsuFHQx3FEWaS4EXg96DeqbyWP2Mq4WhJxD7rXzQhShxQrKbfj8BTESmDpGHCmxBqSJ13kXVs",
  "key34": "4s8L5Gr5efwyA37ihZmM6XnG4JdVei132PvVFThQuW1685WmGmZrEu1K9UETbEJTcPWBwdJdoFk4YLEXBK9uczVh",
  "key35": "FXEoDKL6J71Aep3RhHkh4gQhDcG9XDwdw8vY1KmTVq6JAcEXFMjtZ7223PYpwAAyBCr522toGxpaMhe5cid7pRo",
  "key36": "4WkECxoQuJ6nKXTZAXT6Yfzz3yzZd2Jq4XuiSDR9ew8dePirJK5JzTi1r4YwDPTycoQMtw9TbkYYXVS1QS1RuDCt",
  "key37": "JESP3ZeZ4Zw1ouV2QqhHwpqeEjRHpo12dN5UbSwD65nhBsXB7DQuGgbQBA6dahqVEak14nz9kbCB6SoK3yd7Y7P",
  "key38": "27bVVNi2m99kS9WRiq7zmgQjVoQwsczU8kLxjMWenChZRKTWd9rWe16n6eGapsTmDymERgPgoHMFc2y7gyKSYqmq",
  "key39": "4V7Am8p2qws2kE7im3FbcbFgmtFCXVbU1yhCnWNwFadCPtZbcbKKkVvmPtf39YeGJ3hZnTek6Kv86GpusDjovk2c",
  "key40": "5R7xPXNKqWJUz5JqsyvK3rxRgfk84Wk83PZLK3CUqTLP8Y96xshTomGAMjawd6RD4DZxTv72a1YvSGhA5Sq4SjLj",
  "key41": "6hCo7cX6rp7rGesLY76f1KDFNj42z9kgzvoASMntEkPYvqXEPjywcWFPBixjKTfshqayW2LB6MyE9oh6nffMMZK",
  "key42": "2Y66xXwnGHphxgypjiQoFkTv8AM4BPdHRe6Pt4aPgcRTzC1BanGwgdU2rTKu1e6QJd75TZCu8b5PaFUv4c11maw7",
  "key43": "tGWCY7Kh9zsuvEhubDVATX2PbFd9G19wf8QHBbGGkwz5gGyGkRCmu8ErCAvZu1EZE4GJ5Q2L3wRLSdF4kQwhTZE",
  "key44": "4MWYmAQRSmcyBFpZkcF1BGcBrYPbWM2Zwx1QwPsbFjKfikXCtiFddp2chcp3ktJrJkLZyQPK1mdHo2fTaGRPZXk7",
  "key45": "2gDhCt1XzLH8BF48x9kKyfvWYiEDtb514hgPq1Z1PECk6gsDVqa5VtzhTAuLvepiyBYBdEY4VQXhwuQobVtueb2B",
  "key46": "45B3zCG6BcYJfM4o6KT3yvJjsTcMTBihUpX7aERCPZDtdraRwN2TFdYKiMGJhDCft3GoF787PFf981qSjad5s1D6",
  "key47": "1v24afTTX5mb9rvz6wHXxPqSH7ezgTFPXrMSknD7BdNyJgyxGQqJusJe5aM9jZF8phaSbqMthgQnFzoAQpVAtEP"
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
