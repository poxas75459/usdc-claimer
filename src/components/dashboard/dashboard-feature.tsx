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
    "4Q4tUPEYJ3pjdxqFdJAmazjpi38L6RfFoJxYQoiQPz9DZyFHRwVFT6YC1Nj9mdmLVnjCZCHctAQZkBJBA98eQPtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a11pxBxwR8ojivY6JpJpzceCSZq5dVVeyYN2Ev65XKyaTgHKXCewtSzoJcyoseJ8wRkjcUq4BAgXGy6zgCyWWz",
  "key1": "3Ehyr9pSZzwh8p46cTK93Dkjkr7Qo8gakbTBYigShvoiRw2o4c5sX4LnifMSL6DBQCF6bkGAHqikvGk3Pq2teZJ1",
  "key2": "2v3wBjENndw8vnWtp1j8fN9baVJsf4jf8PDFz6mzpDdEyaxc9dzEiMBfmYxaR9wWQBeF8FK9VzhMVd1wknQUzPwV",
  "key3": "43tYNL5qczX8z21ycwRCmHdTTscA4ij7GBpRuEAGqTBKSV98w4mVHzaYG17pwSeMyZreBPYxqJTtpwKJAJn1f5Sx",
  "key4": "3YES4rgB1PwaSx247Jxeb2tSS3qGUsEhLNMQAQHpLok1aJnX6ThvtQPj9QGvLUxCGYoafhJG3ECLX7Kf9ShmFyaQ",
  "key5": "5h4Rm5JnJgnkyUVoTUxnoqTJaBwHjpqNo4JJ58vgZoP6isWLadrukEiA2quf3bq6XQkh4J5YeuQUNmCLTCKumNgX",
  "key6": "NDDRNwuci1MaKsL8158odDBYmBFcnKtUzQSXucDaNMTKqqzZPAi4CoFdL4nTpM8VBWJeJ6D5S9Z2y761ZXUCqhZ",
  "key7": "494KxiRSbZXpvPoVFfPXa59hxrbU9ZWYryKfTErAYC1zoztBMLweNjte6846MTYJcyQxP5B6FqsaMLWkiLhCE4xU",
  "key8": "joz4ocejmMvPxvQbY81MmLVXBu4BsUieQk9cyE1AncpRpghhfVRwJFvdX9tUW4kd39Tu9cLbZg2Kv4H39ajWjn9",
  "key9": "5MK6cf1h4u3y7TgB5C1TWVpSgoVHXQq52JPXXNsyeam6cub4zcDSSUypJgMmsSUinQHgRnKoKUJNAniMYSiRdSRd",
  "key10": "5Xz5surRWJhjnHkNRZpm8pEWKSV24PjivjUD54f2XSdzo2zh6wq6BbbqqvWyNqudCnDzp22xqD3oQe7tfzqoHHCg",
  "key11": "3F6VYNHRvCJdFT4Vbfp2r7RfeLx24fQxvRsfomnpmTkFcN2FiQNW4WpAYhQV3srTCzF5KUsaBA6oLdxxVMavia4s",
  "key12": "5e3sSA9AERA5toPgMyED7GAxxbi1SSwVTm7SCCP5XY9sYMGyesZRLiWo1xC2xM8DhuQG5zciB1Z2WKTExpUFV6ir",
  "key13": "2FVWHFr7g3c5WfxJ62W4cVsCqqK2bUCqJe75kSB9bvxox1Ke5JQKaxBB5qv51PaM5v58GqaHRZvjtnkG8fLANdBj",
  "key14": "LSvV22eGK8kWQp6Txu53nLbEoFSzXaaF3sqgAhbLvUxdMBcsbtyxZbukb4mDYLdeaS8JLsG4zPm2gZGzpBXVQbb",
  "key15": "57RowtHPknqmGKC8yKcCYzBBBN2R7pCTM1tX1ZVVzByYW8YZ6XxdvA7JEH3QV7D7pJanio7GasyMkkcNqqiay5rc",
  "key16": "3sb5CQFt1rXjFaY7ge5AiiqQG9qKbPBT84zAPHBuwoY3Nbh63WsZBnaFt9fpnLJ96Ljkixgc1XgUGKusG2WufhPD",
  "key17": "dATpoPzta2BbzKmnVQd8jaZQ87W1zxiuaWDvWvUiJsi9F9CbMoMNBaNsPBmKADCPm4s5z8QNTftoznFUEdmkw5q",
  "key18": "L1Xgy9FB2GYpazBTLzy9sH99w26gUr8sXpRdhDPSHtytFQFhK78F991cbqGMZEEJ32d87qucD1GQE7gcPX56Ca7",
  "key19": "5kiRzQLPMLZvVzssgKRJ53v81RZso46WxcdjgK7wa9AkxsELMFxrdsx59JN9Z3V3Q15YuBGfJApiCNsPbkNsV3GJ",
  "key20": "3Xab7K3zGnu2iZf1RZcCdF43eALFW4Mu8CcfTMkTJwRgcDpGjbdoqeLZLhcRZHNBXvmrz6DyCAMnTsQSiRd7Ehny",
  "key21": "51TDwYDwB12KPZWQZm2xtGaWpF7bprsSHp1Mau16m47pYbZmsFgeXWAuznhZmXjMerjKMgHNn8mT22yjYSvoCbTj",
  "key22": "3JXEq3xn6haoqKN6gNbtbz1qFNmsBLHdnqmNzG1HN5NKfn7wBwcHW8uWbpT5aWF9UnjxdEbQ7iDjeDd5KRrcjrP9",
  "key23": "4mP92Xzty2rqMmeu9oDaShkcc3rDV5ruTWc2pFpvoCPRFzhJfaE36re22Q4YRzW4YFwvKvnr1iX9MJJUdCJdNiyr",
  "key24": "2xuzmnhH8HEndY8QAormxkCGDbzuY25zeaCrvEt2nHih6fB1SPRk8jpFdHYrJef8eWxY46EpvLkkzc66sDAVQ7HZ",
  "key25": "5zm5s1pnG8VVnWRWJ5aKYcDvkYdPG8RzHehMHhVYst9vRHGxJvdD5wvZfo1GKJJioV8ak9erU6h8Bokaa2eHSaGZ",
  "key26": "2hKboh5RdBNRBuWQmQ5wNDMPwvc5fCBjxq92ctm32eEQGdXpAYPhQDxZf1qx7ynvfaf3MEx4dCW9kpGQYZvbXLTw",
  "key27": "3BHLRCNS11DRy26wD7Te3aiJri42UGiZgso9dsnN5gJsLcNd6UUcynp7SseoR13KpZeXKrCpPfjShzDSFeY2c5k7",
  "key28": "5RSpNahEPNiPLk28ayYQ1zFCLDQBk1vpWXjhdHVfeuQSE7rTHqqbKzu2JbJqXKdvKTTaUpyb8ndPjKGWg6jzD1D9",
  "key29": "5Gbxk2taYrHre7cxbf5nqPQ7THxpCBJibHiFPSkzpXG49uwnUYrA2NEMBWHbqJHN86R8MYQpmE48budTHrp9E3u6",
  "key30": "3V1ufWH7dk8UDz1zTcQ1AjQ2KuuMsq72VsZ3orzVJyPL9qDEkypWrdBrS5FxftnErPPHeRCidvFHXw3H3QQcYHe8",
  "key31": "y8octKyMP9neQvSnT2RGpk11f7b37P3fC1sXVFR7dMaAhCnYRvZK45govyPwEeUVEHgKqaiXShRXajyMRzu3guS",
  "key32": "ayKLCmnsmEfpQ6x3TsctkpLEJvBKDd9JHvk42TEDDfC55GbVYLf4hLXYgzXidhqdo2eQ9eDwdCxtPTRxsSnEvwt",
  "key33": "3doW3TSDjDYhc15yLZ9Ee7Sqr2vH84Xff3VPH4qRK9HEV29JEW46sGqMUbyKK1sxU55pNgHsucw1Ju3aspcjysir",
  "key34": "2UzrRd26Xcur6VLS374EYoHb1jgpVJmopRygD8x5DMo1iRNW5kyj7w7wFZQ9CJnuEqe8QyXLaGu1Pcei4eUSNmag",
  "key35": "4xNeomzzykgURWRegJRw8MsJAjkwdGEkaLwQHXZVQ3KFpvsa9CzAPEwkuHXbNFj6tyoBZK5iafchwW9DNhPQqr7n"
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
