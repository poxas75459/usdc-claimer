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
    "NPyAhrpaBgce2rrLsEDV14EvRgHn5ptRZbdexj1pdUJj9UtsXAr12vthWtbqsw4x92oWpLEAMDJX1pS7C95wjgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETqo4MSWKPKozDtgQvu5pir5H2uvhmHjmAyhSRFPJPr25epdqz8YXKgJa3nHCiy4xQRGaxnHisLzgpE6ndJFGLc",
  "key1": "JKpbjmP33SLiV17WBnWGH5BvcKtkBnCXqvAxBTEMx52YuueTBXtT2crfBUdcCpybRonxvxugKqGPhaqrxazNtfL",
  "key2": "59GuxNdTciJNwpL2PAWU6RqBi5QwNYja84xB8XkSqURhvGhNB4bUmrutjmmG6gKzLukoZgBumYgiKEM5vEJFAKkJ",
  "key3": "PUPMWYqGPVnKFjm7ujDxaWVGo9dUupxGTwLMvv1bqcP1CNxHzbkKTvoVr2imkRpfibzV7rQpAiU8unNiMGyyzZv",
  "key4": "4bHgmen3sX4NmdRaXFUpvtfZ21LziaiEZw2G6GD4UyCuDGf7qB6b6TMhF4kS3FAuPceF3nuBgbxzeK4mp2UADkQA",
  "key5": "5CtZPXevuMPNkXUjtHoLv41niaQ6zRJCWptmRW747tbjsRnj97JG8uqFtSdbQeG3NkpW46gMWtnrXiQ8jDQQ6Tcz",
  "key6": "BQNLzCGvPTRoYNCSCVDLPqrABQJ8EeqBGgAp7Lgk2pQz2tBmeiWRg8WYq9d9cFyck7Pm1BJXU19bnvz5hugXUTg",
  "key7": "3W2EgjrHFZ4EXqYBV9SBRH12s2dXM7fw9RNmgAVvNt6qCxNoQ9bZyExfXgwxJn7uMVhqa5kVPBhJrSKRkgCWxrLt",
  "key8": "2Yt3sj43yQqsbUiNZRDrpqswEbrED58CuSW4dGz1bpbvBf5DJEdiLEPNXeZZvTAgs8syDLDaNo7mfFS5kCbKCpMV",
  "key9": "mSBPRBRsgqPkwFqQb2zfZmToGQvby8h1PkbvFPNxC8i1vKhd4FsGijbnCd5KCUZQ9e6XxQC14HPW5HRtrFJixrY",
  "key10": "wsTtzvgd5TzAWGFBNMgbRwZbV2kATpa7azRgbkJyXqRC29qpSFnUbfKfpkK2LnFUy7xHSdbf2CxDKd8kx5R2LEm",
  "key11": "Nhvh3SwUHw8rarpoNXxLK6n9PLaYJv8o8Cg4Q4jFVDFuHZJFfo48VwQcFxEjbtJ4VYBh8KTJNApAgT4S4KhCHqd",
  "key12": "2k1nvvFvTVvHJPvoo9vdbcXDC7NFXPw6ZR764ncrfZTHyBLEhuchuAu2KXStNwSd9UmkYDMLf8rgXhnUJX2rCEfP",
  "key13": "2aiLuRS4L11zqy68dRSGLN61qwUPgUXqfouYYjxaTsGgm8R59dgnwVATyo8S1SgxPhdgXFFJzPbi5vJCFy4uukbX",
  "key14": "4WmFTinoLNeucKWazUZzeezYR84pqwcdDWU1yawxFwKPtbLr1iHDh7bKC1dHRi83sB2d5e2TQHK7HyQEGF9KM5Qz",
  "key15": "3kPeJ9NMPqerez7Wv7njDSNxrrzzDMgEmGxYKNnUcmdotM2DCe9BnTR8gYGTw1vFp2C6ozvtLrkzhifMCsaDxtML",
  "key16": "61ZsGjGR24coi9BcaK5w5U2NfUtMPXjWVeXM2c4rJ63zXAo7gkyScKpZwvunnx86HTPJJ4pUmREk7MW4zWeeDfnD",
  "key17": "4VMnYbFAMziAvGvtavcDMQ8yVc3tuHuVbtcGPAsybo44bYssqLpybdfoewJgUp5yc9HtZX4acckyzNSxEnQcuoae",
  "key18": "5m4rV2VMgmdsim1cYec7DFH2a1muMKYHEhBRUGkeiVzv1M25KVXfpFX1q4sZRVSec4MPntYbK9JusbNseDfCsrHG",
  "key19": "4qVUrJV6WKL12S8aXxrASrTX4uoo3eP1hgbSyaQJENZz4FN5Ta44cNNDuxZQ44FoFGb58Bs7wZ6YWJfVodXMv45q",
  "key20": "2NnhxzFdwzMkfZipyfnJMdCXkjmQrmakPEvuhPKtvq4AXfejfFiVtYv1pzYAsBU4XXs2dHsuBS2cyyKzoDA4cqTh",
  "key21": "4xxNYa1FRgtYQMf8XZDbMxGWH6K7RsX7uhsLTD4VSQBAF73pF3TFV5S3WGwsrBR6LVDDYVWgPwVsrqPgDCU7S338",
  "key22": "35hBnuP2fdzX3tpZ41NPTtcxmPT1Ytwftf9vk3PPmoJvkFfgu5zby6v27JxgiWu5jZ6ND2AWX5wNef2WWibr1uTQ",
  "key23": "5qAn9H4vWwuKittrw7Ynp4QKUYW4rBv6ERhbJin5YQZRL8yCbBcipxReNaCA9TvrUVXjeTBRvwidgvgL11ZvYqm2",
  "key24": "3Fb56DKocuno9GbkEDCEZZESHespTXowQkQCQHUnGCxhfyKaM1xxhyZTjjv8MMyVuRgMPiq45NQEPCTCT27agWkD",
  "key25": "5NNkTBHFSJaszJnWQQg1E9qxANLzZ1wP66MrwcsBMTzvnq9G3nnNqd8i8NVJDpJL6TSTFyeb4QtmxJ5ePA7efzBK",
  "key26": "4xqqBfUMoQYqeAxBNxSb99vkVNgHpV7fzkviFNsrRNufe2hXVEQZRypCt12itc9JXbXQo9EeuPRcSG2AyHqFwEJC",
  "key27": "edDMp2TeeyuDyopND25WZDbiFJ3NCX3y2wCT7AhCWe3C9ZbPqGavzctFyVkdmPenWHRUdNVJWNCAcPaBNXHEXCQ",
  "key28": "aurofkajHx1iCDH4CbEFN9fvVhyzDH2VbShh5xk2h64XX1MS2ag1jLfn3LCWxcSR4Pfz1NcPGXKnzQc3rsrMLXF",
  "key29": "2j22T1NKXNAfxRs7RzmKXnspykyfxNgC3k4ta1SGHa4Zahw5b7KVmt8YqFN5XYXtGrxLxLjvFzsvJVyzq4QtvsKF",
  "key30": "46UP1n1iUjBwmkJ9p58KkyUArYk1jjpC8QfzNDpd2BLCrzf7yTj9M2TJzQkkRAaV7mtc4PTGkkyR6EF9Czuz5b7r",
  "key31": "4jiCW8KNg3moK4KsT6p25pbk7QtqozyYUYkvBpEyyhFhBGGcC9LUuFW7k3ibjLCn2n7TzBXwGjrWzAdbZiMtQkt5",
  "key32": "3YEVcysFAzZ6aQkuVjRpMpoeMsJ98q74a3jordg8T6quuv2wijGzGdH7KwqSjDyDzH23yA5GwHD7yQyiDvx3szJA",
  "key33": "YvgnDF9hSv4SSuoZkLyHjA2ANpgZGna8Q3LiGHLoXeceu9xhxAgawa3wDZ7NCf93UZPzXx8KejLkmp1p49kGSdH",
  "key34": "4QKUr2jW7amdAfykh3pLcAfvGHMYymqeoKhqcPneq4q7AyB37UsCL75FcGzHsxrLhkrhh3XTnogqCauuEd2Rvek6",
  "key35": "3HVXUHdmZJ1arwcNZwgFEtW38nh1Lm35ubxeKjkrFRjzuvSnKnS5xzfZdHdTmjBGCsLhnJPMvtxEeu4QVTXKwVRd",
  "key36": "5dXuUEoCWrwq2Dh47CnYmXiH1SLyLQDLiyBBaX7yA7YwKomuHDQfME7mckt8Hu7S8YUbvCK2K4NGFUYF7kX727ga",
  "key37": "2zYsdvyoHCajqCuoYUFbwBmpPvxaBtwGw2huwBMUEERQhhWK8MJNGeDDfBM4Ay62ESmtasqGk1bicwWYwmfJx1dV",
  "key38": "5tpw58psvhVqjy6KHu1cbBDrE4EFGE4ofihSmN9v6ojhpMZXNQSZejhTEYR8EZd65tod743Nw16Z4c4o51Zq4oNC",
  "key39": "2H983HHVBE4mSCo1AzM2jFrakbYsJqQuWy6tEtmrLgTTCxX2PPJQCgNtk84YQRWDPXCCXHHWGTYxMbMPMqqpdwWb",
  "key40": "2oB6FC62jfugLFprCXJAWN7jWEr3pEJfAFk2aGL7xYwdeaeJANW5XXA7Kczr8qQZuMtRwRkPkV9atT6f1BYNXTDd",
  "key41": "ZbEh5tAqrjaUnKTGhS9R2uF382uQHFx89ZaWL1gSdweHajL6vm6kR64oNTwNn1gFN7TgqAGswKRLmBrg6kT8qaN",
  "key42": "66eczn2o3misf87SZxfo98hc6ZWYBfdMqP5WbVYx2LtpQ3o7BqC2Y1SabMmYgimySDTm6SZrf2ZLKZBV2ub7EXhy",
  "key43": "5Y6VVtBNoK6YPs2K5oiQD98guMwWoK2CuQSvoyee2jwjxH49Zo71H6gZ1qaB1i2pDPkYXDFWdgxLKyVJmhxhSabo",
  "key44": "2UqNaDk7NHxjtBnAWoHXwSthKzfYegCaaZRDiGHRJ2NAAsVcM79syXebq28ssKbtTCSzYa3VwqBue2pa1V5HbScJ",
  "key45": "4QADZfJNes8JiHuMQCDko944tYDXvYUa55Tw8wyk3vSneWJZLnpToZH1kczQ3524Vt2RQVwxNp1v1L7up7PgJCXv",
  "key46": "FKDicPWEAbh6dmpQ1Vt6DSVExmQLRX6ZoXB7q3VYqAJwAEH9EwDD6FD7PLgERrEM7dbQJBqLZsaTkx1V29GCFtZ",
  "key47": "rGyt4qeap6XfphK2WNErktJ2WPCaeCYSyiC5e2MaY1gW9HhAD9jwKhFanGLgXeApxcZiczq8XS4Vs3RWDTVqexg",
  "key48": "3gyGbgb4PPYhwJGQP6rwXThwtSGJVhWhyLBs1s5BuhXkVj2uvpyiyoC4iKEcr6LEuN7RfuVcLLQZdP6R31Wngnfq",
  "key49": "8Dq9koDmJF9691C1PCUY5CaoF72nCd6S8j2FdbqiMMo4vW9ex6HzVXZgFTRtG86QyyYiXvVWis3NvYZLVH6gtsm"
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
