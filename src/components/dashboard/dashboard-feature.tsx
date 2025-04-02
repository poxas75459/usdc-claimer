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
    "X7qqsQzGibYvpi2S62j8rfDhYWbUTTU4JsAvyBz4ZiD9wLnpXvzvamCQ6YFvpPQsxH1aFBFvuTNzfPWg52PWHii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBzLVMc4bkzU8XH6tbDHRtug2L1R1WxTiGvBof6ozp1Qjtgb3865Ay18WuvdZBgchGoxXYm3zK8U5Sp7kKSSuKT",
  "key1": "32PvGWooP9K6CWjfo52gDuwqEuAaNYffm9V9r9anS52oh6C8sB7PYUCbMzTwhh8SviytScRup38f3Y26win2UKu9",
  "key2": "3Mqi5CAutyd9MDtCe8QzvuEkysSnZRqXY1WG3AmrxRcm9bYaUi1uk7JW6283NUX1qXVBDeD3wcRP8QqazJmdieKf",
  "key3": "2fkeTX5DvspScL9pHgqmx3gXrj5JJnJyJScPxHeZbaSJiUyL7KhdqWKiZmDdThMNdoe1keQSQFStbkYSW389LYw3",
  "key4": "59MgcwS9tzWCckaQ8hC1mtyxSnk5zGxp7oQEx3jG5FfqMySMCZQhQawHkUs4xvPGnnZ1dCA83iMXxqg52wLxiQB2",
  "key5": "2tVkPJRrZGwPgcZKZyuDfzjTK83mHNNKVyai4QuJgQKCfRaymgSZSNcngvchqrnAFoVGEp9i2qwjo5jNP1p16NRP",
  "key6": "3dZvJcns1KMibeJCtNfsM73FNsMfo8XvRJAMQz1NPvjasbp5WA7bUGLMi9UUdmThuRTfXddfaydwa7RfL8DDFT1c",
  "key7": "JriBV14L5yZWfaiQ7oCw4m3qSddVhddiwQgobgL9nBXhjQZx812HGCdTTgENazPTGhui1keTTANtPXXGZATik6F",
  "key8": "2GuGwjbqYjJTnmxqa1NEtvCohdft7UPs2yyZ2SqJTtqa2PDXJdqayqFsyWYqNdTZnkE9xcyyCaH93ey6N13GBimL",
  "key9": "ZihubdBsMGNUyLc5WZ8ZVvKQ5GgeHbCzf8GUMfhffiNrV7z3Dx63meqFgfUV1kuFfCc8ke91eUZbfHiLNiEJ41c",
  "key10": "29ehto6ecX9Yh8JcQMGeMuReXQbCwCSdKMLpm8sfgukueccZQMn5bAdqrP83pb8WFt7UsnwfHuSAvquwNLvvxvge",
  "key11": "5qeGc8NpVQZSMSo6bDFWMkFzDj8mQk16edENZQFxqhsSHjH2ew4sDY4ruz945JxhrnuxWWYgP4UbSaumd3qPTxAn",
  "key12": "2krwHqAMXJ3zD8rUv8qQYodrY9Dq7o4YjjNdyUhs35tw9qae5cMsUvwnNvb4AQVcjRbqW7xdEXQGjpCz7iEEWBr1",
  "key13": "2ntysBCDsZbLtDNu1o9dn1ZMJ5yXTg7ftjQAYdgAv1wuxKPR2LcFAusZ3FThQsjCJMqowhq4QXzeVfyXj6d83iMc",
  "key14": "Sv2LdLH4DQ1VxivxHdkrLbTdA2Pkcwic4HjckFDHsM5gtfK3s55FP3enwfiV19M9uZBiTGAhoHaNXSAg7VVPrmY",
  "key15": "4CLB9qDP2MjPtYzXC9njuhLC7TaqGj3LbGWZLHDfdRoHAx7Zbu9iJJiPhrSgwGroMPkyJLch62RjTu6P9sekepUT",
  "key16": "4p3d6XPBbRSGykTe9QapcVkzQVQKaKW7tUxaFyvts6EkAYiJLESUrRsZ9S5BZFH72iauM28xLw5Gx2vjdKchdLZx",
  "key17": "2kqRyynKAyaKB69apuxrQnvkvaLNssY7sHNBNy1uGLT7gzUBdWBjcVStMWQQtsuqT6HtcFVycJ47pJ1zsZdzmGF2",
  "key18": "3rgRiF3aSyNLtvbqWMPQr7ticwVbibwQsZ1DzWnsceamKZfzw1rGjADEZzMWjYs9DWrSPCUnrzCGSiq4E1jksrS2",
  "key19": "5dYFfnANRMyvy8EDonRoRehBLmab7sKPvgXTzrC1RfwUxD7GtXAbUaSMzqD3kqPvioVbXWxveb31oyTshespn7t3",
  "key20": "57pzeY5wrmZcLikr5fFEZHkkbwG1G7WDFM5FQms9R6myYuPTov9ZnjrHFWV7HXsegPaMEB99ZoTd2qhyfnga9Gtn",
  "key21": "3fgvipfxXtrbowm7oTSekPZGufFdLe2XmGatkDYztHcqaMq786PVeJPmrbprgHZff7xG8xzwvLpJqzaRxoLsTfzo",
  "key22": "2W9Lh9AWjUHUT9ttoPvDNmGuDVJFqX8BZEbiaTQRaU1nhtBhfqeuNkfPXZkPTa6VgheCx58LNeTGj8dsrMoBc5Zz",
  "key23": "463XmxkNsWqL3gZgkRfJASCdWjroZMB7YxJWftRfeBrcey7asPtGQu2MHtnB9An6byiBjJNX2XpFTA29DwASbyyL",
  "key24": "25zcBiu5jBzoRbEBoijAeg44Lt6Ri6xFj49t9wc9Nc6gop582TyH5b2azsNm4TxU5mj45n3E2vw7pPfpMW4CdiQk",
  "key25": "3rTrxRkrzh2Vmr4HTMKYvFTzHeG2eXitTZ15EP9ahWw7FvxTww3er72LsjPCfM2rLaj6aCCNi9q2vn6HjQdKc1SA",
  "key26": "3BsznfJz94WpUNJbTzPzZ9ymJFsidnE6eTVaFDMJLmUF3MzMdS1eoGvrSj2gzJ1zfBQJVcVaKoGrNe73piaoB62W",
  "key27": "5rJ4EViLxmyv78xuVTD1JxfSxuRxeMUS6E2JEV2h3hJ2uu9UsmQkcKNKrsb3X235xVjo8RwUAXpdTAKdJBUWm4WJ",
  "key28": "3nHkXddvjEJJef5Nx97sTUG5YAdjRJGd5PVtNaZCpTxRH9BR8D15qF7UuY5E9qPsui7xFN518kRW69Nkk6EbF7Wf",
  "key29": "2CGVL6T6icCgFcp1Uhw8YWTzgmRMWD23P68mUMC5iGgE7jhdr4Z69QbWLx4jvfUq977Es13o8AjKzMJ77BfcSrJ6",
  "key30": "4PC52ShjTLqnitUqM5H2y4DSP5UyYQ2Fr7zHtG3Py6vUUgi1PF8uS4PPazjP1t7yHQJf32SfAFDdTF82VMvTN9ck"
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
