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
    "5FJML6HXf6jVGWAXKrGEZkq6njparyPGS1nRhtHNDXJxGz9ycCG8LwZSzB6zCYWcAmBGM9V6oJ4Ffgm81qLKCyB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jS7J993e3A5Uf6pPfWsxAj7xXWwbNYjvPWVwuEq1jT5YBgFZeNdno6sGNmMVC53KPbMDqf435cCMjujyPsUx8c8",
  "key1": "25bidce4ui3piW4KtzJowkDjyyzULqYDV2PmwGuSNweVTNTnhowQ8Mq169QDFwbNJe5CYmjUVYC9WzRTErRzjZ8Y",
  "key2": "3JLrvnFP7t2YNvhdBW2hFGveu3DjfY5AWii21B5PbgAwAPMSdfeZXg2ZPJgipKk4CjraYxmhGxoEYTJVKLJ7bF8Z",
  "key3": "26yoAJZ1JWVvWmunNczTVqNjqSYKpsT5mLBRUsqffB11EC31w2zjK3or5YDQiSdd2Li3aTG6Kah5UtJQaY8sFGUb",
  "key4": "4saAZ7i4nXFaoHkTRr2TCoCDM1CNJxqPTmaZKjfZz211m2kAes4AC4MMZ3PKSzPwZk9w2H7gqox2zhg9ju3PEbmm",
  "key5": "2idN8P3ft8vbRiSpRqb6PqVm2jUZ1tUdVwQvuZyKFJXoYZrW61e1UDiiDzmJGi2mdMzahQDZEBkvQWF7eUVdTLHK",
  "key6": "DQtgBUJtSLzDkhjUKbdKRKsUSsGEkzC59TfwJCbYPzuURF8zyi4YkM7cbNrzXzto5fBzqPUQX7Nroj1Roh8VoGp",
  "key7": "36dZ5kXStmGhgMVdtNKnKsaPQaTfPP4PFfpd1YMiMUifKdun8RPiVuGBqjFHmqhoRSPjhXzGAaAVXXXteAZmwfSv",
  "key8": "5Rbot4eVYKAa3JqCwsp41wr61LnX1H3br8egijUgpJu4xDxc55tAAayJvWjhBmD1MZ9wzojsA2cAiu7tSectEiz7",
  "key9": "3BhU1BWWRGDRT4EmDEHgojP6VxxvCFNpAo9zrA8ZiVb1pmFLtjQYa795a4nGwpM59VuwFAamzqLAzbkUfbxwFHs4",
  "key10": "4BBQzoTaWxTycrzbf8fT5wYyedFpDL7vURDWrkTsQP8NrjNmhgVa4wHaNZCTpVWNsbCqzSVQrWXpGYfJDfkEjPDb",
  "key11": "4TQewLqpcut7SRt1L4E5C1LWeEeLu52eGHcSZrcdTC5Egh5P7utbWJVaj9ACXLTv2ZyWcXHt9JgjGNfgPhHk66Fi",
  "key12": "5vu2cJ4zWbForLH6iESb2vKc1SkACLrLtz1hTyhgwmnS8ZQDDWEsxXfZiRMKE2tVpUTNi2wcpqgEWcv3o2hQcaQ2",
  "key13": "4DpZYjpEtgLR7bngjnushNLoW8JuCtrhP2rSsPTof65k29FjyMFd7D7uEL4XoULmM51Y2HL5KSc4HMHzsTkWVihR",
  "key14": "2UP3iP8BqYSP9faN57WRq2FiWcCiBdVzmuLzA9Ma5RcbRdXap2XvyuTqrzDCikMfJftX9sMyFd3dGpyDZLjss2uH",
  "key15": "4eciEUTViyCtYcHpB7QNm4knjCYvouMkm7hUkDcrKeeG7mXyDR2Kx6LoPdKww8knhQi3BumP9XCi5gbsCMEraZ92",
  "key16": "4W6TYBQ3wr5pE4NrQuiJqmgzFxDGS4kynP2LybagfZam6b2mRz6SXK45z3KUUGzhZubHjDQtmVopuhtMRKnw1vdD",
  "key17": "2JTny2tCQwNLCg2x1D7U4daDDynFcy3KYfwWBJHxsh1ZVQqtAyqgCbFUnhWkNqac8LDLknTNjXsZzxCyjPbzmMg7",
  "key18": "Raaf3LAoj7sXJQ2pc6jTUmR2fud9nFtWdfX5qZ3FMGqJNHaD7jPZge8uJHYnzqC8omPrQsDrpS8G2BxgVcMgMWi",
  "key19": "3ryhbkd9PhdTVkSPsg59FdjNXWqh51cnSooAdpqkyRPR4fnZW6mwa7nTBa7YjfAXYGZJR4r7pyeHurCEKXHx84sr",
  "key20": "59UuX6G3kiXBbc4Fab1T7kk25siA2n9hqUaQEENgPG4o69vdfdo3p77dstEtanKbgfjk4ydZEnEf6thDBGVEoMrQ",
  "key21": "5de61KEKXNhHsZcummMY9HdHkL9912wB5cth1sKBqusRmaVhKmCR8xvg45QAjpXmbMbMAMZgHmG2ucmPuDtiCwv9",
  "key22": "22ZzUq1wgahGE1uMTztftkHA4wJLzhxhcgxv6UBfE5Hrw7v2QRACDvbdmSNehm8Ek6JEm4DPDGFcyyRCHsjG5ESz",
  "key23": "GJt6aER9AhDXifXu4K4JGuP7sPJ5pkVny9u78mPJoHS4e3GYZNhfV6br9UwYF8N1Ke7JbgdE7DRpjssDHa1hGwB",
  "key24": "5rPHheaiGABpfrjVBrDmQzKpAN9QH8nWCzZomnXPeqcEjxxQDWabeTsG5Qxn53p55DPDcV3Z4uWqPYpz5tWSjVqd",
  "key25": "2FtGQUJZSydK6iBteu2oDFGxaBBgj6dFKsHUcgPqx6tLKkwdX3Qq9YtjaUHDAvs1z6mALpXyVU2Ab4aoLVRnD997",
  "key26": "eMb25HqrkWs9zC1q8o7m9Lxdxk9Umx6UoVZF9s7vUUa9hw2bL4B3kRFh4n2pWV57vWYWLD2wfth894eLoZMoicd",
  "key27": "3YTfVbDteYgL4pNyiC3zz844LexUdyqkMSUgLYy238QanGzZRPPJ7qYaoSn7nqXrLHNw3LAdPcBzLMLR4JW6EKu2",
  "key28": "64Tp842iCWfNWG5exWoDJCxKHbaYncpY84EAxkLkV8Fp6TsSQhtexhWyL3Q8W4gQXp5QhXET19xkEd2q8icvrWvf",
  "key29": "4kUhhabHtWBZsZC5cA7QusC6EUGajqbBMKCWEkp3tB8m2cZJxhVPaTs3iREfZcdneqpfvTeptKWPLf4CN7gq5UtA",
  "key30": "3Pu8CqRuerwk7thXJfRuHMqWTAEYU3m46BvMy7h2aRzspdeYQcGPN4Y8iM6kZoP5Zr7Su9afqb6esS1FfgQNh8pw",
  "key31": "3pm8Fo9nNfJgU2VBqksDAgMMJyTodTGDm8mRu3nDnDehjrrJTSRtLKzkYZJumfSGoir7HbZSg2yyhksSs7KGsUs1",
  "key32": "62rWtR6vbSTCscPrA9i9gM6eMnWwWxS8wy2p3sWhEygdEBMtRMsiR6P6cPmGgQkX2FQzYpsJdzgzSeFJJbz7ReqK",
  "key33": "4GvS2UaqH6eCwAaHWGHLWWVUJbhWdurmnXGLCiu6tZ9z2qcTuVuBP1KMAzhUjr9C8jdDTiDfpLgd3K8aokDz3cE4",
  "key34": "eppmzJHRykXnrqGNAwpUXHZMUiCZSvmdC3fRFaWKTdc6uEijCCyqYC9rfuZJEXrtXew94bQ9wutnBhTcBho9bCe",
  "key35": "67pgua55j4FRjKioXWD5WsqeAba4yepPx1WnZSXzi9vNan3qJAW17GF9hsd6Rw4K4HairPp2j3hH7H9dfs1r7qoV",
  "key36": "4g2jxC24DyPKUePkmAM9b7FVqWyyvTwxBgxW98EZvgRspfjCYVkc3r5erAA2c7qPbL8RMnMqkKpCjyG2CCc8dw6X",
  "key37": "4RPR2ohz537LNsi2Us5Gj1kqeMmedjkgWcpxMXHG9JGLSg8MXsoQJWodZBehTJwLhggSpzcW68yZwsd9EKkQFPK2",
  "key38": "5C9cFHuWLbu8hzg7cswTS7u5Nyo7pVYLKMx2fYvVVzMGyJutSuzMyCMK8eKn9GUjG3diEgxu9Ap9UFBhJpwQ5pbM",
  "key39": "5KYt5K5TFoZRMzqwQ1mxvHtcAcKTLGetswZkNT7E4CsQUmaD4kk79sdVJ625CeCCkFHSYBEQ5EqQh1W6SddvMiQa",
  "key40": "3PsK6W9XTT28fe2479FQoQ5MmYDpuDJdvAeFUn2LUECjUNPsPkoGxBS8RSThrgPgkyi5ju263dTzo3Noxvk7kKT1",
  "key41": "4DCvkaDZrgTMKrYwLchTPPbTqShZmggmNm8bdVtBsZXKfcLBKdG7YQtAHGVfZXjkDmqCGXxfpZy5nQr1bBABhFz6",
  "key42": "2JM8iehNJrzBMr1BMbkVFShtReDSD4bxKubgXRhSJi7x1kBDPfnGZha4bDNjQsNZMWtvKS58yUGmk1iH3HcVL5A5",
  "key43": "2ybQMK65HvPcNZiuAyKxv8FfPAH5v2ZLqh3n2HhUiFcL7Yfnp7cEiix5pwP9YXQDARvXoQA2tJijuGtnb2oXvWb8"
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
