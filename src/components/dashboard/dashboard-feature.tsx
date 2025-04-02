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
    "4mYzUFZpE7d64G2To7oJkwxgDPBCnT9szdNpV64NKUZDWoRiRUj2JpaQKnLb4igo8Fij8BF28a88XtQSsXzZ75HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LocWEQNeq55NbxxQdLbxp7DQGbjhthmGdFNX7eCFgnZTgFGFNQLJBDhg8bzjabxxUXvGXm26cvqG3UzMqVavCpB",
  "key1": "2JbQrbNhQDtL87TdTzyCnPZEqMgFqnTCyJ8ZSadZqsQfdYuoVfbSMg8oX3zagGMraBbAWSScdKUpL1zoESM4geuN",
  "key2": "2DVrGXUEGWRoBwsjsMkTvk7SMcfG3KoFoENxmZH93RNEN7uebNeeA49UDf3Dhk5aXic7YMnDvQASpV3bK8gncYvr",
  "key3": "2tsNeS4oFE2YtaNeYsvff1KbdP8d2sWZmqUUrDcpGB2pjvr3jfDKmw9fHxdQgbwpjgcbFhgtryUfmJ9zVhDddBkp",
  "key4": "3FitUt2FMhx8MvSfsVkecFFSTvtukVxA6wi7Yi3K9xrWtXVcELYUWYpD9tb6yx3Uu9HTNWPMYP7vMCbLespgUzLm",
  "key5": "UZM21eFRCWQb8k7oCTNd3r8u3xoNizckQ73JKsGuMjRbkjv1HcxYd2p7t24y4WecqRSC7sU3mmJBPWJQsa7pxVX",
  "key6": "P5iSKNgruaNnfi3hNonCQXZcMkiaPFHti2CZmtyi57U9ny4wNBLYqcx2ERmndNtXLkfFH1R83xWieE2rqYxmULn",
  "key7": "2A8pMmryW2FtrsJsnEjMTFrtzTmRgpAeiFx8k1x7ypLZss6np7UEy7msdWrt2WcYoPG9Rvr5GHr9nWXU4m6mckkk",
  "key8": "WfMYhZsFh1R2RLiUFJ739ror4rwYFikWfqKkwFyEBP3PXo3xyZzUp7D55CQcLN7a7cueH4VrmdjW5mMffV4EyJF",
  "key9": "2pnAsr7F5QRDBPX8N7KTjFM28kg95fxE7UwhK9TpdCL4eHKrSVraMZfMb48XZ4W6pmvjdVqhqRtPiR2kzwxbhqYc",
  "key10": "3Lrqz3fTCz7tskh7bqd9aYqC6ykmBrYtVTKRq97JgrNhPb9mGC74inTh88G8duNpisPUAeEJcr2T884M2wfodw1Y",
  "key11": "36tRkNU6ckvnQ98C9dctLWXQRwZ45ZjfUkdkJheCAbczkvN6A1HApHsWyTAGGSLc4viY2qwmnMM1WVdPmGbXcJt4",
  "key12": "3vHPrrHyGmg9w54pu9qCwJcyj4AEQvnLK1SYdMo9yv1eZN7tjTUieCSfkH5LuGS2fSwPkt4Mx8UvNwYF4Y8ZHunS",
  "key13": "QvaakUL8A9uQwMf6yzoDYroseA9RVjteFJA6Kj4UrhHY8zV99U5YusFYHHgMNpzRGvsyYzwcfMhodWHQcrZrjDr",
  "key14": "4aQX54RQ1RyWpezbVzBDTe99uw4B3y3KVQVs3ChH4zdQsnHi3EMKJk8dE1XwfLYJ7LwifUPBdLyYgb5hHbenZBPP",
  "key15": "3DvGKsnQCoNnwtAF8Zz182B6Crp5rFANq223hM4eiPyygtfVmoDzMKG8443Mg9vsKp46eAUYRfgXAakjsHqasZxr",
  "key16": "26ytndGo5N4PD6nFU1FLQHTnGUYTv9mUrUXEN3mRKatw8VFUUcsm8MwLEGGPNPiaaSfiNyVtWPirixtw3Aybokbv",
  "key17": "3aHaiUG4jFvLWLQeDBteFugrGT9JHW5WGk5ZEPVebWnvSqFiU3jRUhEzsZHeeA1xeRwWc2b4Wd4zmkhutq4qLfVB",
  "key18": "5Yn5LuWMCMVqqvRhVw4Bf3cKdZBQjhYdyoLL2FnMpvpyrZZ76eACdeMfog3p3Euxi9tVzYgSVvLbUUoVRPz6ei83",
  "key19": "436BWAcsKXRMn7BQzfeUsTYwEyg43zxudehFoVTxXUYFNDf61ZivCjjUsg9tYj3t6u5ZyCP2rAgiUK9V8p1GUBnW",
  "key20": "5J74ZQ6ZjjwwUxfXfVt3bZR7TcMFwkN1Sedcsi8sd77ckAECb3LrMyWBZF35HirE4N2LGvEhc3NZ241UBLH2s9qM",
  "key21": "DUJcvcSkJ9j8eCruBehT68DPiq9FuSPvf7Pm69BvtmnYqJqjdBdxDJhPaGUr7t6CphZ1UKjzsBCpXy5BNkWGKtU",
  "key22": "36ym2wXQGm99qb532FwbUawR3j8sFPKUKLMm2Yc6ebgyBKe43xHiWGpycbyyUpBsPA4ikRqXsQFY1HBLWDMbmX62",
  "key23": "3TGzxdK6FGtTZbm17gQRi4indMa7B3rR42DcH4A7DXM7JsJJt4SUDfL5WDBZQyduv44VHbGcZeoVz8ts1L85ZLCN",
  "key24": "43XB7mFV7dRngXf7dZjdzF5Go8Quae2Y7N9MkBe9XYmV6eFYtzJ7uRxoTE1Yt9YjBbEPVrUbF7ahLJp4TDgDNRPe",
  "key25": "4BztF8ikvKreaXdPgvJMTysKaBJPHQPKA9RVxHLSWzGt3TxWP5wj8g6kMW5XSwUhrg3o6bGkqnW3JEvQQVL9EeNc",
  "key26": "5kPGZCrHtJM99WUGgWhFD4bqAS7Xyz4TFpExoHpLMgKqFWKbsFzYSf64xPwwtAku8EFR9eBpgMny2da8ef3CcJho",
  "key27": "3VCbPSCNUFmXzNnM6TVQYRK4BwRyo4xKyXuyafSg5dwFPyHnVbZv73J99sYLLKdrG7hahQE4adiYiSDnfdr7sD9B",
  "key28": "1fZzMYkPHceDzoQkU4qd7qX76rKMU5sUGJ9M5N2hngTvqf587wYhufu8mGPJ84dJ96EKovWpdHdk56cPtB8KmAB",
  "key29": "4awr9EW9Sp8CJmDZjmftbJxFmNt4CGowXbGgdZqrCXgzomwJsXVpRWZ9TBFYqQyGdX2RmPLgFtgg1Nhc7MRGXXgb",
  "key30": "G8uhVdYTJBHy3Y3D2ZphoBjhhU9eyhNSbPzTJ9fGGkAc9pC5T1xeCkFtJHyHLrCuugTMGKn3tjJAcYN56fCvt31",
  "key31": "3RTghNDNwSuGnHEt6mPsk9xMowNUDrt53A3T9nh4vqJcUuV9J1ADashoXyrfPRHUh7x3xJ3v3Uk6yEJQ99WFDJ2L",
  "key32": "5gxxxpqaukmtjQm2Nvi34YpFrzc6E2gcPp5ejQgSd5tqpFtku8L9fceM93thBqs5tdopeyCTfgCaTxCpbNVcgDQj",
  "key33": "33cDiYUaUMYHsV7SxppFAHBVbGm5hwGQvkYZZQbezbWFm6CNdpqPozxhL3f1CtELzQFKcn6qWuywLcsFZMSbjZ3g",
  "key34": "3JYU1k1hjk2hNzX4ZZnbyh8xD4fVRm2VW7stZQPytdkTzPzuNBMc8PZuqMjrBpjyoDG7qd32pFMsiqTT8Z7s4Zfm",
  "key35": "5J9RueDLmBJ56KGx8spvFxegsVE7rcDdzdBs6kPCztagjs3ZsgaCEGxiBez9rJjHsNusRJWhebiYndr539YaF1tV",
  "key36": "27zfgNrSJPRoyw44ERMNKFH71MLNgwt57RWgjwfhP5vbZLQPbNaEY1T6aWJ8TRwuAj8a63Q93Dqq5sFwveTtMraA",
  "key37": "5S3bJ19r1YzcaUDR21dRhsuXfJwzeMcQBX7NSV9LnUL9e33FPHNrphDMMeFNynGsfX2dyaboHmurNfsQYcjXMNxa",
  "key38": "yaDoC9Nau8uXMswSvkENyvtMHQBEqFsyKmG1mvp4obmyB69zekCCKgPJB6qfmSrHtJNX3jKDCWQoLpZ7en9mzeV",
  "key39": "2dj86Cp95W73pMMJcSwpXSk7S8m37YJQmq4U2F8dgfGgxvFbzttB2iafWqQqrL54b3Wc1fFNUUztRV64XQqQHpF8",
  "key40": "4oiLXY2ooGSQVqNF5fWg5mWr9m8mEv38UWKW2tHWxBydgktugmL4QGJvk32NeMPJFtx4xyeyuoTn8ZwtFdnfRJJ1",
  "key41": "A9jgkH5hfkpeZuSAvAYC8MD4goFKQss9W4g6CDhTDhXeG4Wp2mK5Bz93KJ8RRA5nrSAbkFmG73zxNmJW4Wxg9jk",
  "key42": "5UWDRjgcHNV9qDvrKKyLFaMrxTQtUBsW1YhKEGE85rSewnQJgnLzdQEPXP45u2CYwDZ3UazdjPMWzHE7XHnvtP34"
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
