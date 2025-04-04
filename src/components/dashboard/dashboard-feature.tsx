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
    "4jaUsRSdA9ixxGPANUSUEcrqiNBK3k2gEyZpxWZFYAv8xkbAHKz9qjb9TdHe3WxarVyzS4Msf6eR1T5u5SyfCEQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxfcbaHEjo7TXmiq38FstSDAebjXw2kNAmtMRnxHvhXFhb84C9QfoW4erm44GhYrLmWWwkDdGWNZcriM2hwSAg8",
  "key1": "5Qi5VFmGcSx65vL7D1B9tfSVWQjfVaczcf1H76bmJ4cESjzBh3Z67SUvDCbccX6oYj4YQrRPDSpHWNYFu6ymCztR",
  "key2": "B6YRnHXNqyNByHqqVAGhM2v1P5iJ7D5YGEsXdZQuHinTmUZSYGmGzDxgtTx5dzHHozxUQBG7NPQCFrtMdDiUBJF",
  "key3": "2HUfF45RqtvFFAVULeae4SkmMvfTtdq4C3fAiPZahCMnJFiTMAFoQbCfAyjBJkdKW9MC8d2f4dVkKLhrukKRmcGX",
  "key4": "3VmZt3vW2k6JmK6XAm2fcV99ijwj3M5jSs1wo2azmv7Y5ZJ7LFcQ2Q9B2AmE1AJqpKSBW7wKCNYTYWQGXKkPvWBq",
  "key5": "2GYhASGTEokvJSB94z2rNnBcfod9da5QLcSJve1crpjwxnwnY1V5ZZr3q3tkZFVbN7hezmwDHQ7xSvBiX188Y6Bk",
  "key6": "4xe2YnocM958YoDT2714DChv468ZqVo8b5CNEgJv3sHgt1eyC4FEmbEux8Xz6dbB1xSDVw7YJmmnZUAVjiBB7M1p",
  "key7": "2a7KST2QMZo1F1fnn36AN5QyJEpS9Y1d7zpJhGHQM8PqUYnvGnd8JjQwX2Ei4JQWgVH5NFGM6brL3UY2TARtHvbd",
  "key8": "4k5UxrbowtwX34R9UtSdHwmAoprSds8rxw7CFZc4K7g2npzEPjGebJudqkU16JzzPWCohLgZqQr2hDSoNos1ZXXT",
  "key9": "28evufNfFKtJNufpnTDaS8jMdwjeDrMQZiZCUYvN1e3VDpXhRyT9E15kh2PMZEiFXpa8Gd8fhR1BRatHzpByK3wv",
  "key10": "2wzL7B2svbmNKCneJvvn8dmdCgFbSZPqGtyr6qzizJZ8gspKRaPLCc99KVgQaSYAwCRawYNQSde3F1Vi75Yw7Fcn",
  "key11": "deEU5w8kG7u8J7C7cfrBvG8mU3ThaFvdLqFMHVW3bXZrFHY7DhT6Ae6pQSoR6EZxRARNbM6th9n6HXb5kq1VwaS",
  "key12": "4jLK85Lkb74uVHKLCXibo7n5LjWWsJXpKDRjh2QooowY98mZcyEXssaw66q5pEno1oCdTfnkoY4doVtPxcNGRaYX",
  "key13": "aYoXRecRDsLKxep3fG3tAQVrziyzcPdJ7H5Sz1pdhyJLugaKrxJUWz8eyNhnGztcuJt55mEecbLW6dJVHJvUbLj",
  "key14": "4Jevhcekj8Rgmkn1FT9ke5G6qNzxNatNQ3neR27vcvMTCLtuYbp3VrhENjBMuJokPD42C39Q1cp14dsnJMDyfdvZ",
  "key15": "4Hy8BFvKp6qAC32Wq9s8j6uvHqdUDeXNYRp2MxJ53CpMz9C2t17gmebJxz3RK3RExdSbhP9VT41e2mJ6zeT8hNvC",
  "key16": "5TsBCBtdcGw1FATXJScJ5nSkRabw3csUbmwgf6qxis8CosCxwHfgG2GPYAt3FXi5ZQJAsCJrzeq9fPFqqNPbfJ7J",
  "key17": "5bMyrDz5rzgVEBDT1ypWMdQKxCGmY3WbrPxeHC29ueRYarL7DPKYv5FeyBmnJxZ4zLTLk3QCawDkVjmwPDtebTrV",
  "key18": "4oav2wF2RvCy4L1a7HDwsPkLSWJ7fHGviFS1Yzrm8CDNRupJZnN4rS1kn7kxtVeXSxS6dbGaxNoykHhPsui7wC8n",
  "key19": "4B7aHfseJFZBXjwmL68mTnQmwu94Fmixp87c4bheaFd8ZC9ecR19J886RRnDJK1va3kQRwEciStobkpkMrg2Hctm",
  "key20": "3n7ExUg3bDp5RhiZY9FTxrW4oAxtndrEDAc8z1MfxnjRcQTcAV7hrUstJdKR4SsjM4ArhAf8bPEKhS2NLEgRbqXi",
  "key21": "4rAZhUjsxDGDw8tmXGQMAiP4xTfsxutXvLXHk2JNX4KXnqx3y1XxC9LrhMcjWn1i4j5xkqLmrguS6KFw6JwVAH5K",
  "key22": "61M1aFpzxYN2Rkp98cewyro43hggFrVF2Zk7cdiZfo68iTRiNKeQGkkDyX23fWSWv9fgHRvAwnmvdy8aV8TvkuTn",
  "key23": "215fa8aoCi8Ki6zkuQfqBvJCswvz4Kdd9k75ZSZaBExVJgTundd6re5UaES1LcyY5ALJMWPoVcDGgW9Es9wTr6qL",
  "key24": "29m6CN8kWEnARMuoMCkSEa4yizFSUxHH6mki6w6YNMjUNZPgLmjWDcoq3Eg11i56KScLf1pMYJsMcxGs5rgwyLVE",
  "key25": "Whqm7nNq3HE6LE9G3bYUTTwHyLEBGXATASrsD3QU7but13Hok31xYMApkr9KYd7CyUjNz6TgfJkRk2Y3JyRFU3j",
  "key26": "59TcE1KKKp3x6PpD9QtJGL2BazqpZ3WashkircX9rkFTBsZy4pEb3UEaYdiD6pqUYBwTqMfnD1EqLg4tWStwpGQV",
  "key27": "h9yLpYVkfnY3SiHujyhup1rMPGpNv8Z6grYmGj3F1XPftrGDhk6gx6YGCS9gUgC2ommMRwsAYYSAVtGVo3zuMBJ",
  "key28": "3sCVL3sfFdFjJmiasaX4NhTZCQ2E2939RxxdVP32VaZxHwP74SazFtfj8z5mNVbrUicpAQHS9A6CFNuEkptsiaqS",
  "key29": "5qEKjMEN8tYubD18KBUioFFBs7FkvPr85cZ5jBpKinDFrWoHBFeV4CjpRdt4rYqgy3j86Puxcq5KxXPfySVBFC17",
  "key30": "cUSivKxRbigfSELin7hNfWVUDJZr6fMJXkJVSDahE8WFbSVodWV8RexYUnY8S8TSKM5Z8f9QN7uTbQ6BB5BkWDX",
  "key31": "4CqLucoK13B4RmFRzjwo84pcnyejkyuUnijvCwUdFH8mRgCvc4LfT8dLFhpvbRkBxsMjW2LBxeCAr5AU2cQ8CR3e",
  "key32": "3h6w2qS8gu2gmPjE2fQCi5hFs1DTvTctzYt9Hkmnz5o2ZE6rxvNqRyc7wuvEykzfXQrVrr72EqRHaQJ3XTzTYxQv",
  "key33": "4t5Yrga3jWDrLPn1XTXGmVLb75j3ARjhWr5hGfZZxSkyu8svQ7FevBQanYoT5SQRcodoARv3pp5jPQDSbVoz87iw",
  "key34": "2eG2S8pS5bLBZGnywpnoUCJTtbTCZwhieHxrYMKeAs2cJqtiyPzaG4SgNZbZYTjE3kiUi3jMt6fdyRu2fBJPvxNc",
  "key35": "FeC7mNdYTLLMoVhyqzfRJkGv8udwV1yRwCYandV6PY3CpnPvYuNwZ4LpwesPVRwNWg2FTDtwgzarZy64d5uBqwN"
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
