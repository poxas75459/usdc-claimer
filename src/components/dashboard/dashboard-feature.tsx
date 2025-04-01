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
    "5PTBsDQ2u5Nih5peRhtfxFecDQuTHa7jarHUXfGV5PxWYaWC1m4aWzuwZa9hsXCoxUwnb25adVtd8vF2SURC1MoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NFAapZ3Skkh6SsaqnCrCADAJSUQVqGHCriaPApma6GtPyHpYWpegJdKPKcub8S7ZGGii7hpXHfPqCcdFP4W1rVM",
  "key1": "ihhkXF9HjJR3SEWbc1vpSkFYhAZWadP91GdGusYFZkqkAKeWX5VQQ1caDeuj17sprA5jBFNWDpx1NXRTk6nktBK",
  "key2": "3saHvbKp9JnRhnZn7ta7Bc5PmDhag9RXBLqvEbkfWLQm578gSXxRkd9HXqgjshxi5fMpe8thp2pXh2D3TbLWAUWf",
  "key3": "qCog3tJES2wnPdhQofUrJtKYiHi1GtUz7Fqg9SK4eyLX5HSufQWdeHGFdcYSWDsMjihynXz9fi6b7yVH5pTPQWQ",
  "key4": "3ezekseTBM5961BCg3obU8WNEkVd4hnaFwgWPjZquPLdQziQmwemcyeU321UKpYdLzTxDQ5QAnDbywJYMgjGR1eW",
  "key5": "4eHFpcqdLUf8mbSqFshkqzMxTURmNbd1ADdYkGoV4vX69fDThbD4i6d3FH1MDUZLfLUQ6CALbN8ARX94QcVdaCWD",
  "key6": "66un2PJHs8XwC3kXkCz1KYGbHmPeoDkk6n9wiCwpLLV85DDJTvT4D5h2SkPUwspHWFRByjRq3FfVBcraM2FcThCo",
  "key7": "4woYZkJEzwkLCLE7bUkkjtZAaExBLwThb7qKy5LPB6be2RuSEyHAkaAUzpdoYZoN422zcuRaoAmkVjZPdDtZG1uW",
  "key8": "4eRhwGNHa7U1KJFnCECvVru97d58DsKsJ5jgj21MJy6RTtGpCDqunDZJS853QpfAdKmpsPyBDs4VnPQPHgUTdKMR",
  "key9": "2yGjnSEvQfcsKfvsNG2Ui2iB3zfTGAVPFinoBspYjtuZYUwjKGq9mXBa9VBQSU4dTW6bKrxXZU8y1p2Vg4ZLTpyW",
  "key10": "5Jjcknp1hZJzg2WdVKMd3roWnQ11Q7zNhyT22VnDdDdAindKpFnpVyvhTYeqGENZ48o4YMm9szAYHYvYVDG2hQ46",
  "key11": "5R8BY53PcAGGS4E8JwqAxz4wo8w4srwqwMrP2bvUxK1cgkB596UFq5fvFgbHFVfF3UG9aFyeewimmZHk7SouNxXf",
  "key12": "3MwKNjSk7yerRSn9jLD6LFXdFJEvoSUfjWC1YJjJS4AsBVjLix8UQbUddXxEs46jpKhJTy5Y2urdQgbVupSnAZv4",
  "key13": "3auLL2jgCGeXFa1Lgr3u3kQ1LDWrUcYPbWwVjFskGTTNzgPtih2aiqq4sARpMdtpvai5jyCHhwu1ko4v8qQRMqKP",
  "key14": "4f7buHhFTJ13kJLPEXbPt1mLiuMEWRXRfyqkspzReydofB2HHZKgxGjq1KeUZQywYdroGho59g4aYvDECxh6ABXG",
  "key15": "24WozdqStXMmCTgHXDuDK85Zxwuv3dAP63j5bTfeMNd5ppCps2ZQyB7pC8jgzw9KsaL1dUarZWRJWyWnjokiyRZL",
  "key16": "4ZeCVuFYkVHyh63bqPBAV8GoXRWD5FeRBX5787teScCZgcD49VxRb7EJ9nYbytvLsusrpJ2236AKKiVh6TwwwYs9",
  "key17": "9pHd8KgufLL46QPfXpgeB4LF8mvrY1YzoJPAXUtQtmRLtuchk6GASoHGdZ5e79fRPUpFBH6npSFbTbV6Ue9Pcna",
  "key18": "4fXQ6UMhxRkM2BnX3pJto8onNXV6wPX5UWmJQxLMuXNNHfzVCuZJJtnHaEBFVYvGpNUUm331p59G7Bxdg45EgrJ1",
  "key19": "ppnZS6XeaUFTva2Rm9z8gyFKTdUFuizPD27VURD1tLxBfNi8ru4Hp1vRmxa2BM9rojQnH4hGUZrmsj7LKy9KcPW",
  "key20": "4Po44DrqowN1uWbKavbbBWQQtRiDSUQ6xhkcKtvvtLqZu56Fg7WKWQthk6gdTjxg61DW2Le2a9S5V1CJoHrEuUPy",
  "key21": "5ek6YKdUu9y53jmfF9BFpMcobhcK5Lk84mLan92yxfRf8TtYokhiRjjoak1LCL2K45cCsooQ21sY5cVL5NptQcDU",
  "key22": "3E4ZWeU89FrR4AUnHuQY9zsmQB2gQ9dpMWnPt9Bi1tGpmnvoJhZmZL688Tk4j4PvSFiTLAB3soXpKamJJwViT7gx",
  "key23": "2We28Sj45e7Mn4ARXKhZKs7hTuBW59hT4FFUMgvBSdRH6DwCttSXXRKLAFAgetXUqMr5jd33soAZtnkNJF3uDY5z",
  "key24": "3EnYXeNGoGzUSCVNLzUSeuuNH2L99hFJRPZgxgh2ruiaFoWUWiCtFTvhjWAiKHmPuSmYEixEZnBB67x3uGPbrm5n",
  "key25": "4JFDFLzkEGF7WxAEPTbfbMux947QhW8N71PAGVNg1DXuS7ANmfVERFW1X5rvm8m6NUeaQ8QSLn4KDHeSKipJctFG",
  "key26": "2gYBbtVqdJW75QMugbViFXUkA8W2kUZkHrgFSncvWBU32SrY87FgrSjKTqGctoYEngEpmggxF8gc3qUwh7HW17Mp",
  "key27": "4FShHnnZfycq4reX3eFrD3JZBPhE5tjPbj5UxA5NAneRhFnfZEfyASMMSpQ3xaDJH5851UqDzq8FUVkoENLzX6KN",
  "key28": "62b6Z8MaDn949n9PVbjMLYeeVL7KYKMEuSo1Ri3VspqxRf5LJqn6ejd97Uzoge32b5tYgRQxXVWD6iG6BmR1JJH6",
  "key29": "53igYbQ6Gn9MuTJFxQxbHkAvuCsFyqnS1UVmibdTtAZe7GLSJJ9eFqut8suteHfkyv8RfUqnjNnBYFQ3PLrfxK5j",
  "key30": "3ZsjC1N2cHBjQ7M8g7sEb3Xt2uZpR9kfMmbUBqKmi1goVXf4sVmhBctXHsUmn73wBDxAQPNZfiPnL67KywG9WJV3",
  "key31": "5iH8auFhrG1kZWugHqq6bcuBzpJ72zZSYmzVAoZkKVGYcLoV4tM2DCZQVw75YWkFvLfE3juKeFJJTD8DzE2Xgnez",
  "key32": "4esCQn6zin5EuWSfDBGZfepXw7suXAbqVN9T33WB7a1QuRsUpB8JB8zSuqgwNnztGys7XRR5yq5xKqESNmwR9GRC",
  "key33": "3DK1PzsWHfy6kSA61qcs9oFWSKSt9ww6xXSyQmGMM7nqez4Jc8qBrwFHVzcyeweGNdfM6ija7SPRcdSv1LhtQshz",
  "key34": "4vhtQyHkLUhf9uRX4AULme7ifV7yjwgMbjBVxzMGG6vTnEU9XqxvpKg4PGZTUYDqw8ea3qDcrUVMsWdw24X5qzVM",
  "key35": "4xuiNUvHt7jyYj5bXJ8myh8Ew2WK99jTcEZCWXQ9c2mXdx1PwJCngXUAMfWoYdK9Cam5s4WELmTc7QG5P2ddmkNH",
  "key36": "D2rUY1UxyoAT3ywGkK45Qxm83wfMuXEYjP2erpwbo9UPRFxhPWcZ2TjpqM1uvxxsG3dineDFdwUftJWtEsgCZ36",
  "key37": "26VH1qLUZm6Ui7cEAWg4KoahrCogS2BDVWfkAjmPZk5niMk7z9LxGJHSG8tCtetPfcpiuAmTawsEdLdTVbB2Hi5C",
  "key38": "2MtWbbFRuSAydX9F7ftwhr4XKJTgfsShkYVa2fF1ZUZcPm8RX2oaXW6VWnXEK3yMzpMMzp3ZVPi4RR837u1duBF9",
  "key39": "4e8v3KUoSYfmEP2q7VD2QCRmPpnfoiB59F1cwPD4s6Mc4GfShbap7isXAAPRmqk8ihpbZ3PWH4gkesAQZABpCmAS",
  "key40": "5w2gqV43ZSXvAXPus8BfiQESSijnQFoqLfW3LPgUeG5SfVPNkX9uiTZSzqEPeyVQGjCnMKdMyQciBYXwnPSEQiAT",
  "key41": "4CjhBwQgLk3otFonaDZSSzh7qoisfWQcXZvQz4AmLkD1ZVwuTRG1Vtek9Sv3gAAXp5dTLWEgXa9djW229KFGgy7G",
  "key42": "42iTyG6wtCWv2hAMZf6tejnsN9L5KGzwjVUkPUd4tcqUPRqBWpnGJvVShiQgNBX8updpd1hse1a7dD3sYMEuQ9tG",
  "key43": "u82bMSJhRk8rozPeZ1tuqjRtFba2FdoSnxEZpqqA27DWUHvqqHCztR1bRZQ6VeFCXUSZgretLvs8wdmjG1QGkuR",
  "key44": "27e2qRCXSEgZT4SqSW866hhRDjqfD2nVMPQojiy1qBLpeqpDRQTAd6x6GfjQv4traMKyk45ASj1RY49Lz4RFoGGv",
  "key45": "2acXcaSrAf2g4CJjq7nmy5mAznVCURfrtt2ofRx8HdTPt8ptyTyK4a5yA1ZFM6xnoFctMpzAmypfRJuyiBHTjzuf",
  "key46": "3QgGk6hhs1rcr1DTFMi1gz2FV4JkiZbWNKi1HidWhQExUR1zyaqMY9vejq2Xue3cCoDjEkkva6Ras7poehhaYJDz",
  "key47": "5uVqM37VhnmxFUYq3qbWAW5ELxDRPXeZWPzuNS1LrtPjQwAXqRA2n9zwXGiFZi9pQc8b9QNzAhDwNrznYrNBYaYr",
  "key48": "5tyU42nH7iW3wxc7X5DvhNw1cvv4Cy6k42ZPp9sCMCQQDoSnWgyqYCLJqkCKzm16d4bVoeDKCUQCzhe9pPyiBMwY",
  "key49": "XcvRVWX8ar5JrmGoWCE9AEkEZdXUsBXWcG3norVWtD8NkiXkpdFfTJRABwvD214huiu2ns9XR9FM1vucgCTqQx3"
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
