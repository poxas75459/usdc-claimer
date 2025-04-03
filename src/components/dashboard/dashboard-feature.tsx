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
    "i5qpmdbTH8EH8ZfHpdWM2vFtji8WSRXTUoJfoKNxVVS6SVz2jgdNKnitoWfjAKZiuHau4nN3XTxW7LsRiiqD776"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoif8jxZtRBYLyN5LgjK1Lkw4oJmJBYkGRPTtuG8NHNdY8XL6jkGrBR9WKCBem1zUQe97esgWQFsSuSNsopd7yL",
  "key1": "H3TheagL8RXMKRmwfPGziN3YHQ6NxwAFfBkNC5wZnEA94Ffy4SLRLgLoqJgSy4cX4zwVvQgoJJrZG3b9eYgUQEC",
  "key2": "4rw6jyjUtX9KSKeKKJQzLFS6tkMQkiKpH1cj6nkeyREU9jzWW8bLNzQUgLdZZSLmbkYDRUYnrsbdAspEPsoX7t2e",
  "key3": "5arsaz4NLv1eHTaJ3Mq4xEKYy6Ehznk23k6ApZTACvHeKZesso2Gimk3wHqP7dzV3kfmR8B9Qa21Xrv8y66j5ggj",
  "key4": "4VzPyrhuKPhYHBY4dmeKcRGLjqn2YgTguDuTuSvsk8n2k87ffeUJSMKCAfZwFNounxboUbToSkBEdLVsXbF83XtM",
  "key5": "42cbydQJRbKrRPCSzd8ZRsxMwiwmQBtnQFEtAadiJ5wez2REeRnLmrKNEPN3w8kzLzaTCMzAbsnaefRmsyXjy3QD",
  "key6": "V6Xze7efTh7hJiZrEgnusSwmbBejnmjYaybt8HYEUGD1TTkBwpCPyrf4WnsrwgaBob8mTyAD9DNm5SfWwfsxTAL",
  "key7": "dRseot5DA52vCn8yMTiGSZfN9DYU8UfnchzaGzQ2pDHGNHXttrq2xKh2kXmQnVXkMxhpcxrBP4vyK6YnmSwaMhr",
  "key8": "46er5cXsCDyHZeYBAzj4TETzYJ4MKWqUZCDexxnB378LRBXo9UatkwMtoV3QRt1citRZEaiEYThXaQQ49GYwaC6Z",
  "key9": "sS4mBDGgjwfxk3x7SZzk4FDnKpkjjsyQdXRMesBcxm5myuCyP7mcwo1egUdQ9q57p83mWEwDH8pUhg683R6azg9",
  "key10": "31dyBzB5aaYDBhmRpESMNFGHULgPi3r6CCDz7pnULpmm2gSDZNWAvqXaoBoufMAWktTVSUUqTQiHgzsvR2BU1RxQ",
  "key11": "5hFc6xARDohrwLR7NWZkTRkyuZyST38osqBusn9NkpRpZ48ubueieeoycJEvMNnXYNaDM4ovrTQ3CEAg3opVezr",
  "key12": "5vTDTY6uvZGJn37EQusCH8w77rXo1pK75dQj7izppEU8DK3hZM2b4PzHEiWa1RfSqWjT3sXD8SeZgfACq4SYmPJW",
  "key13": "4yopDxiHUTMMn5Jc5m8wZbPqE631UC7ELQWxCfioMqC5CQYYQ7aMoMmcUBvsD69FRnr5yxdWBNSQqLqgo4eRnkya",
  "key14": "5xr3LNbrV7GJTnUZZXwJMtCg8YHYKpepPHNiTKrqaaTaA4FEh94shWX48mYSCRrmQTHKCyKubwwwpQMYJc179fRP",
  "key15": "3QAc7Say8mDMNkV5vfdtAtAJi2S8eixXM2yDDZRqapp1Ehj5i2PnuNYsAArqx1XUm9F2cyGf7jyfBBxLs4th7rfi",
  "key16": "4qvtYhziUaijBzDtVaE6fy9QxppD1VwtBCcB9rC7FbsuUNoDV9MzZ64ceBCbJSnAE31QTrr9zafQZvrSksNnoexN",
  "key17": "3c8BZqKaBeqh9KfdYNzysc4Xn6dFtP17gq4PGr2srRmLdrkdYZ7aHPLnVvw2w4CoSp2nsazrUiv8jTrhpUpm2865",
  "key18": "4ki3R4XkAcAc8b7CYfafGWHand6h897WWC9QrtZPyuRGxaBTbMsVmuW8abezRDPwchcTbJ2pHkuYcjHsgHVRi6Vf",
  "key19": "SERZbdmrMmY32pZLAv1dKYb3GNbGX6CjAob3aTxTQ6tXB6eqdX3tHFG8NJLDzihGtbs2hFj9YFLpFiE7FjxofnD",
  "key20": "3KdWBisuC2KSKWfKpNcGnnX8uksWeWmAREPC1Ev5e6mM2gktzqqNH7XqFeJsR589P5kiKtox2ZRiYLec2NNNvxR7",
  "key21": "iJu359LfKqnWzAU5iUsJE2ezK1oQ3TrwcBpjkhuP3zoFPdh7t2YzwiVyojk2vgVjiw7V4foPdByDVTS54ApqJgC",
  "key22": "31vZEg9d7h5tb4cvhGbUJiqJoQhhqAHLcmzYSmEjKN342Jsc1u8YF2f1ffhnH2aDcJGcoLuy5t6rCTNauBEWnXg2",
  "key23": "23SFaLGgG4TeyST1aRyTNADLsxN5HYHqxKwrYpgWzATwNC5W98NXS3rKwAwj7aosFnMnPF8JnU4Md7KCMm6XyT19",
  "key24": "5SCb1bhsdCX7WyPsSnT6vSiGjM6YmQqG6jxB7jTWdo8EaTXjGpeVw5zRb9JKFao3AtCKPAEsb42btv1ysk5fmHiT",
  "key25": "2YKZV2VLwkBAhoYgTGtpUSXS2DkjBtaq1gbaiG6ERdau3kghpKfgakfV4hKCfyc1wN8mPTnvj8X4Q7vd4TSvwyqr",
  "key26": "3kvxEUi7JCWiBMu19VHsrrAZwz3mKC2Q1ULaWodKqhHBvqvz8mR6e1XuFvswDR2dA8Rm42oWcSvo8PQ5hKxsVXbc",
  "key27": "3HLBT6Zf2BRp2WoDD2C2zpUqn87ygWNdAyGCrqu95PLQmdeKmA34XWKWdRwK3qzrP3K11JcfgdHjzy2AV1HToPDt",
  "key28": "5G3Brs3tVzzj45xp7nT1k8DLGwNtCLhRUBnhx5PA3nYfZ2EbjvUwzBtQrJXuknSpgXeLqXZK8fxijuZ8UkU7JS98",
  "key29": "2pc6uYmKjJA1UXAvYiTC6frN65LNmwSGYXJBav9vzp91QFnPiGP4nUyR4gL1SoET4mPQ3bMitwCBMKD6kkL9TDK9",
  "key30": "2TeTZGuWm1QjC6Aw4AbuvwY8ZnBxJ3hUtktJc5MWkwc37iXFm8pnhWwyjPobferkVkjZpY3b5vXztPMR83nKvqY1",
  "key31": "35cgK9mb1CTQjEHG8sPr5yp2znaabC1sZeWqGWJteqLyYQnbdNNkrzSWqnXJfSZPDrLvN7VGG5cxkUvuYZ282GTp",
  "key32": "2quibyi3euVMR8MLsmiK4pjQKL8KvaLodPfpUNjRhoXupp8nBVzXH9tUesDWhFnZD7o4WBPeQUX9VpyvotJKYkkK",
  "key33": "3ur3JHnMr9q9AarcbZhvsiqf5yyTdjoWNbKAXyo7sJWm2Zace5oACDzTSRhPAscqwPrFB8yA5gotZX3tMFbDabNo",
  "key34": "5xGLguHp59PyHgYzZoXGSL8uSw9iyvkWZ75qHksTwM2gKRAnvuLkQGznYeV8xRGMqz6mE21ZGMZ9BmMpcgkgArpT",
  "key35": "44YBJUB4pM2PNhAAU6bAQdQG3XuCDGpmjsb37q3F6upYRw9WTLbHvn4JNqqAyoFbhhP17qwPMMioMwLLj5mUHE2W",
  "key36": "qW5A5za58ckdoRSmLGD3gcJ7N2GVmFBppWPAqs3inbe5cZRFgsHnBMQZrQpew4kqTndBsZ1c8sraTsBixCNKxHV"
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
