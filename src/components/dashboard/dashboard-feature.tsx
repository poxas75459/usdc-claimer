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
    "3cyBfQX47nTdpA2H8rE1Qy84V7fEakiNQTpt8KKNAyW2HtjWbhMPpzUQUyv8YPsPnBXYG27xxBZrfLMHu7w8xVZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PySXmwDhsmFH58METo1L4Gn88RkQKb5oVmdey9pXNjWMuRfoAdmNhZyqhZmJkM7uY8Dwcqf5gyjiLAMxVCbp2Gv",
  "key1": "5Wybq3aU39PU8zp55quHYWP8RWnk6MRdkAExeX4N1p9Tw2e4C5PZiy7yrvcs9AKJYHqz3asCp95ZU5inAV31nLG5",
  "key2": "5TnjnkxKhuGMjBNwa44d4Zwc7WVwenszqQ4iJP87P3fjcVKsHSpQQ1GomRtttEqixticdGGBeuDLKSCpSSD3pE7Z",
  "key3": "5zrZTiU3otvswGcJd3GWvE2HUBeUwM7ToT9tpsVpk8kAZUT3BRcHZVo5uF8GssdbgsP6MTm8LUUU5xWbS44Kii51",
  "key4": "5ove1HUK37nfD9cqaMBfR5gsEkTacrdGnEfFnK5SmTaeaJS8Ypm7LcLS23Qc4wFj1f5jDToPaay5Q4XN6VBQ2fvp",
  "key5": "4g3xM5Gs23KJWMYhnTPTZkqEBPht9wBi7xAgWMbbpDRz8shSNNjMo111YJxJuNSc4n4iqbLuj4ECJLkaWVqk1irx",
  "key6": "3SfzHm7Jb8ZhDJiGfmtM38axUCpbwuCHbPnz1xHaZHtaJ9kL4MfYPgouFzwzuGM41cUuqNXaZCisz5Hx6r93mhrT",
  "key7": "5C7cCbUZZBQUbCwY9ruXVYLkqF6SLUzBmXfE6CNdtjjYe6GXs7MQiYEHtvM3bBJZBQkZLD8m5evMs1P97c7ANCHd",
  "key8": "RSne6MsaBBau9D7dCn2aQttUAM75EAbRNDmSaeHQcUTD2iYPun1dMLzythk4YaTNzXXR1VemawwHzNUchSirh5x",
  "key9": "4BPPffALLhTpDygycyAefVM4FFgTWZffjCeiRoPkJ6vEWpq46V5tbQkMknMNLSHvJzNBWkmavFDJjtBczMqrtHaq",
  "key10": "2Rp4Pyb3fTfGcrQV7BNK5Hi9Rax3e4ShstTR6Lydk9zQoy3GetaGbENbH7AjbsnpfTLHEZagWavwxshtyVHxX1ew",
  "key11": "5kVqtsZCxZGGifZkBVAJd4rNCFCBcqGGxAw7Rjo6hoqVhbAJ8Agwq1csZtwWRz7WxVduYgFkunXSfnj6Ug3fgh4i",
  "key12": "33XkiAXxD3iENz5jKcrWEYnx5e5f4y8oQjvgFAzEvGATAMYZfPcEd6a4CuNYJLhg9mj4Urmyb3hwwTwaz95bimsw",
  "key13": "3jxrJFzXZhy5iV2qrzvnwdr2EDJ7Wb8NNcbi6mPnvCAmQRuNCrfGk9dnhTZ9qHfq313WZVrqjRyLVpmguUrxL8hB",
  "key14": "22XCpvHw6vjrmSMKxCjCP2UQyKT6bFbbZPZwq8bCbMMCXQZ9hPbpnFvbkUofnqdG6P7kovzv1pywxH799PA3Cq9h",
  "key15": "3AzTB3Se6k6DkcJ4AsZwRg7gUmqKG9FCgXwRv3gPYtFH7n3tv3uCeMT19UnLNACE234p5jYfm2mTRqv6EA9pcFHQ",
  "key16": "5kqU25y4MR59dHNWQwQ3Tdx42DjQkmJyKLNXr5c4fbnWFMF7ErmxuZJMRBz77ydHJo4xhfHaVSXrZjyoyFJzUoa4",
  "key17": "2zweaTaJHFgbANXqd4fUGgXN2ZMr69XSFfMFoKKRAKLkgBToQ3RNyet6M9xWoMB3KTmkpmdQxXSuK5wPT5gUSBHi",
  "key18": "2AG941syPFBPz2jb8TcN3axhTHZ355phQZSS21bw2MXDJx4gHZ4LQruM2vzPx6WJh7him4bE9cPVQXoW8TnRRHy7",
  "key19": "2z2yThWR7dJAayVnHN79G9EaEfJPWkUejyzcEvx8xttHvhasMhgnm9PL5286fnW9cHnKPttJEKXRvSciEQxncjBF",
  "key20": "5YL1bCzippCJJw27YgeuzcCf8Hd4jY4YsU7CobdQ7qAeQp7hCHX3xfNcBmT3yzraqyftUEJRS1CxFdNxboxd7iZY",
  "key21": "3GgCr52nEUBT7PKKmLYvm7Z2vTDvbz9cnbG5tLfKtMcJDJVtg4WPGLhMSLxPxztBRQQx8DSmJQbkwEiDQGzj1nsS",
  "key22": "5Vu83YEGYMEmCww34mRTzNLT2KyzfTMiwmkWKbK8A5twUgAb7QLofVfEwYED5yrEqgwbrEKw9RpoGYUtcjiHRDHJ",
  "key23": "4ksUPcRrUyYZFJqWeRXsR7VVL877SVUgJHG6zxgbiqcfhzs9K3zyk5yMN6Rf1iss6fWv3yPQQsDaQbGKraJeWViJ",
  "key24": "2Nrb5wDW1k61Qgkh6BieaP3xzW7Jn2G8c8UaNXL4jDEWD1qe256zRNHNu5Cr3RUg1biDoLKTCozrHVuuU8meEes",
  "key25": "YjTSCaojE4kM1qE4wMRxuPEEj5UH52kWTpaEiHHJxSxY6UyXfRvpE8ZeRaprPbdBho7M1dcp7TDEtdPDtecWJzo",
  "key26": "2wBBo2FUVrXTZQqu6WSzKikBWdmeYDTSd1qzeNj5p52txEtXyRuzfpXXidJ6LkHBb8v3Ny5kBgANijdMic3w6dZZ",
  "key27": "2BVg6gqjnG3dPkVsubceoyRhdQE2Kar6g3xpRE2fbqsGttdwx8dHJ8sYuKuPAkgnZYjsUCg8yTgqpk9cAL3CHTjp",
  "key28": "iX4kdbNWaB4KUjjapg6MtdsXqYD7Vs7nECmXoTGLZm9PvwWADwrJecf6J7EcCkgi2qcs6pKMonshBQxtiVxEvgx",
  "key29": "5R9Kf5mPmriLur2RvszNBqAZYLNkJLB4fWwpaUJ8qZ9UyaoKSgzu8yA6DHFz5UXSBSoGw4759YELyh8CF9k3hdzS",
  "key30": "YuQ59hbsR34uXZEuGB1RSrZSEkFpQwCcR81E1UxjebGTsNNbefDeNu33RmRoh5xGrgbrs1DwJJYxdxa6XduHBh2",
  "key31": "31miESxXZ8m7bmL9EQy8Sf6cKkBj1ZbanscUkPPrfXUQ7QsRQG1agLrMUnUBqH4Vw9VezpPB9Qxbi9h3Biot3pHM",
  "key32": "3XNWwPnPhfjriy99wrC9o9sBf6BqCmBfdHuancG6nYSU6ZurH5bSkSZ1RHusijDuBjoRBSpmYMCcrcdHq3VVR9ZS",
  "key33": "2ndL32ZUp7RaabUr6JpyzVnJBZrR5yrnR2xMJd2R6TFd6ExLiGFdSiuWgTxf5A9rRmxVPNTH8dtGh8omjmAB2Fw9",
  "key34": "54jqgT9eLJqh1Pifg78yaRd3mCRc1N5HitBE73tMnELCGKZDgPkdjZkX4WAjaQpatqdDLuuYzteWMGw1KyUGLkzD",
  "key35": "4B4jKDJZ1dCY2f3DtMdPgo7Gdrh9M5Pnikg3LjrPRwWCAoRd4QuYYQCqz1bGFf1z4e2s8duQ5TSqL7iRdtWvw5Nj"
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
