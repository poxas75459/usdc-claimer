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
    "5kqK4GzfKngiCuHQFscbk3iY5tB1nTcAePSRTn5vPJethrZZpXcdnx5dLVMhmrAm9LGeWiApTWMfMkzMqEYHf3UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ttt15qfbNiwXMZYs5HgECCJDiaRsxkhNbFCX2j9YR95ChPKz4qb1UKYRJfKvvARBDP3Gj1AN41SgajvjBBDhjE",
  "key1": "A2RvgUbk1nsh44gT8k6jgYd5rcMvsoQ3fjuqm5rPoCsjbHWmArdgRZJePiFnFosMCjnC1odf1coCEkkX3iocL7A",
  "key2": "339vhuDGpB4452jpuNvxdVa146syuEoCHjmL9SJeMrmxGgjcqjz3cxtmfxwpobDN1UdQJ8Pxef4ELHKjtimeuxMU",
  "key3": "CKHwY5hPoEBybcQf1fkZdSV9vNu69WLNhfG4bXag3LTeQqa3QfDgbfCraMy667x8rHXnoBuvstDGm71FvDMAY1F",
  "key4": "Vi29b6jycytPorKWiRzQpnRsGQMevfy9EMWdEGvXVTvLHkNy1RnkSGoReGysRfCB7xVKBVGdpaU5qpst6kpsfnJ",
  "key5": "31CD5h1b4Y9h2wYwjKsfGo9gHs8DZFCLPxMmpUAfQUg4TQCrgXf16DTKkBLPk43ciNwzoTtbGGu45j24UurEYudY",
  "key6": "46mi49nXDMb9iwAkV8r9zXeBuhLbfF3MPCk1QhbwyMv9rXA46qyapkBTmhsbU35SzS3Gd3c7fygemSLZFfqCzXvK",
  "key7": "47fjwakcfY223yhQj7kuFDEUJsy6vDWjXBoCtsFSiQkHR4n6noKsqknPx7iqQXHUt9oqz5tYBdYLsTfE9aY2Nigj",
  "key8": "51LX5w54f27qNmsZGTq4uz7xCXWxBS2bhMz7UfJJJTrKwHN59eF8PY31WDduf5XgGRZfRwUGP24BsX5jBcNaoqwM",
  "key9": "2LuEkHc7AynZXuDq7wEHCWL8Cg7vYo2Q6xjfckjWRmNetSKfhBuxS3rGqsazaxYXKgvijY3nLdMr7nBUWWAdw2iY",
  "key10": "x4z7asxjbtfCB1x5xpXKXKXwC9HKjtqe2ntxpS4LyYrk6SaXnQFnPDLzt7kwV7o5NamqTxUMSqvCFyJFxm5BKJn",
  "key11": "41qgeacZDnhNxMM4wb9CrtedwsZKLaQBo7EQeEXVjLyp9yyUSF1CMSf6sEzrrAKvi6Jsgn6ysjkfK6Kki3uFq7HZ",
  "key12": "5MbWWg9pXyizCJ64ktVpDZSgB5Vbg7i2jiMT6pHTJeMNArXcHFDQYzSszsv1aiWyxS6unRo1FEbwo7F41Zoi9muB",
  "key13": "2UvU1sYVELdLTQcjWTko7wjgCBfcuvd4Lx8QvyCNyJN2u1SG99bLDFEq3WgWUVHCibAvX8mUVHU4xZrA9hKFVuD8",
  "key14": "3Pi3CFXUtKspiGXfmw7M7gYFfE8HX1WTmVo4v6nFwpMwKcbETAMB87pKV1TgcMGYeJkkHhVnP82U8TyF16E9mbqy",
  "key15": "5EKQ4nhewJZkcye5xk5teQ5o79ygmHUt2edq2MqtVWPd23ZF6gv4PD1Y4KZisJjUN6Sq1DLzvE6CPWBas2DvckHX",
  "key16": "5UGfaLEM9YxdFNGPSGMEKdGY4mVE2a1tHSSGo724yvfnwXQQWGiVELRkGGGmjo3dhNwfiq6XVbMMSeMxfFoBe9ss",
  "key17": "33SdFNAuXv1riTfSYAV2yGbAsxTAeM5QTsUaSzhMKcVmdoi46F9EKyBJt6w2SgAw8EpXtDtas5ZBhXiJHtAreqJY",
  "key18": "4tBEnoYfJWvvWRqfFAk87uktRpbswpaufAV3gK8FKWprd9K2N3LbkhtEonaDv85sHY5C3CBdzNq9eb5pxK84bSco",
  "key19": "5ts4L5uRMDrCa3R8mqjnWT9KeqahKQqitPjpjCqLXpdBcoL9NF75fg3S7Cf2PMJKy89j4xUiwEgFwen8ChHge2b4",
  "key20": "2LVQMKm84tbJk5A5QNPDFUPvK66r3FVWAMSJH3kMUxnxJBcWd3FPQttzWtaBMjqcbbHeB2uWhurWwW6fwhKBhR3b",
  "key21": "214DRDWfms7PgMjV1jemhj9pBhhsshhCMkxFrdwieuukXXJHSavMsbkXUycivDTRN9moBo7qKyxBdapVG6hiwnxX",
  "key22": "5M2V5wUbDwP8jVDXfkktxNro6u1DGdjXtRaEy1BL9Fr4d9xPNBtKytD5xLEmYN27o22SgwZGp2o43Lzttj3yBHWZ",
  "key23": "4L3BRZ82cPShh8THvTG7WbLihnfFg1VQ1QxLW2Nxtb5ubTvH1ZBfT7z6snRizGFYFqZmTXXvCqL1WWS2SExA6YVy",
  "key24": "3uXS86adPW1bbTnfoDruCPinwghZxtatFQiDUyWBS85KdxcWNdLnGz69tqYqcMAvLsHRzMkrvctWL2Wsw3gZGqTA",
  "key25": "5tfZjtPqqm59LT1QyMmYm78H8EU5qhLMNbnLaDRuApcjWjar51bxUkapZFGQUscq9XWXxWkF5q1ULb6sLfq4tjq4",
  "key26": "5rSrzcT7zcACxbmoEJAb5vu3rmpyKpJc9BLhCcjaWeciUdbRFwcFay7J5YnMFDUJYvQiJFeJ6wU6n6XH2wBVXerM",
  "key27": "3zo59XxroGSmkWzjmpZ6z2ovjBPaozXwfvqsKVbtGHeu34TRsJ2RWYM98RFC5KoxP8PErABb5nHabT9CW8swjfy8",
  "key28": "29NQaDMC9CvK4apCTCxuhinAdm1kVW34PWowwwBxZMkD66tqBi2qmk8HHnhrBaTYFfPuD2zTek2CcRYaaVr3nZGG",
  "key29": "oBXJpwqZi4hRxDzqYFH3BDTWtYBGbNyDDrVBrm74Kcd9Nr5wC4guzfAyJ2Bh4jzpy7QPuAz5zobRNJhVZYByCmr",
  "key30": "Zh9qfu9icN4ppb2TFp1uNqKEoMHWw6hxYJ4uURvoBf89eAZmNcUAwetwSCPrKaGXVQbFPCFEDaskHAVpL4wggjd",
  "key31": "4s78Kkrjzw1rmfWz68wx7EwXLp8wXgpgcPwYyjJqVhQqpUSL1cxCgvoDMDDLT2gHvLyVAHC9iNkYVFZbb1oho15x",
  "key32": "3ssFXsfncDZ3RmAEjG9gaZBtdhwKmFaMdRK8JN1g4tVXLuapP5MXjAr7RnWbNnaxepjsCB7GXw36YjXDAitdaHaR",
  "key33": "23aBiH2qSqQ4aFJB9Zy6u9b1r5HqKskgGP2cQXH8HzLtiaATVeyy86Et4mb5RtGS5YpFq7sxQDzuYgieyAC3SvXX"
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
