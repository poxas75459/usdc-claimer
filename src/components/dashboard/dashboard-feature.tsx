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
    "53DXypwiPBYpuyzXSejvnLFk7fxbsx43GAH5YKbTksLZyZZedmJKFYP9eNXvxBfQbn8D8VXNBAVGh4f2PVZg7K79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47nB8ugJhumcHcfRK4JBHkMHr4mT1BTikefvgY7mLawE8hAT92zo5mYvAXqqj6kZkjGXTqCrycxFx13rs16THJU9",
  "key1": "28Zu9Jr4mJe2oqXR45UXkvssytA7T3LqqxvT8fPXpJtSYfH4kwY2kR2nLy9yzh3TcjWZEJCRdMpYizpC7D9nUB3U",
  "key2": "2FbzP9spZR9tiE9aeneLDqXCVKBcT2pxVUeFrXg6J6uS4SxUcCpXXrfPumSbx42Zzi916ygpsWWqtA7ccZ1rzG4F",
  "key3": "4DmMuEgwPZdp1KRXGTuaGxRFad6kEF65HsJzbX38fPPv33pVdLBtwTyeRJk4zv65RpHAGKZ5mPBujkXRx9siNRSs",
  "key4": "2urfmpHWF57QdrUH9prVV6RRjLpf1KdsG7jb8VxG7wVtPAVignskpCzBg1u5K1kXeMnJE3AR2qdFaZx6sqkxbFG1",
  "key5": "4UVqo9x9zghWB3ap7mykaqqysYuxDDSgUqhV7KLiAF7A3ZeakYkDSb4aTWU92gZBJsms9fBSJWaEkxPXYZhM6HvZ",
  "key6": "5t8WrZ9b4GJJzdj3mLkckCzqc6Ao13Uo66ekt5YV4AQ748q9SqCCAExweeu3DVyG5zSDFb4uCqJXN7qbZQGPvSDg",
  "key7": "5VWp5iVqM2rXYekcxRZoJW7RXcPWsps1FKo6NBphYEgFrt4y2tY43BVU85b4xtZQBFUBMJVMtTP5S7GzXsy8tgd3",
  "key8": "65xk6UGZnJ7FCB561nQpRzu6yWoJWqR1Co8rvecGKQWzVhbsD8iNFak5S114FSr2E9V2LYmcS64i3HvpMT7UNArw",
  "key9": "caMg51MrFJdyQTGDPAACnkUCtX2nN4kkfd9WfFW7Wad1pyBhuFb9a9bRLiHzuPG758Y3uMqNNX9iiGTqp65YhpP",
  "key10": "4NB1HQQ3Gna4Qc8dAgNaDwN7V2nUmxCvfDcBrqp65u5HGKZRiXbYPpwxTRuwkYr2MEgdTG9dEgMvSjcUAo4wUakC",
  "key11": "5vHsYx4rwzacyoPaApShM9pBN2QMWKyaPLxbD4cqHAjwqHPB5xM9udm1Uq5bMRhStGq6YqZRccrLGrWP2eV83DAW",
  "key12": "DhDovez1G4PSB1XCytN9Pzwf2rPm58kyop7ttWnrEJiPWmynQPn5XETnxuLZuuPy16GKJqTWTfXiHJxiPmwMgNF",
  "key13": "5ypXZDSWzmdFvg1pqYm5mguXmd4Z4nSdaXs7fYzSZzrxJGiEz39AgFYLWFrQtfH88GhKLReWHreHyK2feR6uXBoX",
  "key14": "63q3AkYcdtJ7oGof8o5qRdHBQdzRnWubt4Bw7xze3NrXh1UEBDuQgtTW3Y8uCZPYhyUeiJnrvxvfX9fxXvYrL9nJ",
  "key15": "28q7vyPoiExqsmdyZiC7mQL5EBcHnGPkCwJ7F7xvCEDRGGQiggzu8sgRRkDhn76KjDktEWcLiXrcHoZL5thvw5er",
  "key16": "49Ji9hUFFC7dAKRDevAbcf3YPKRoNEmjoAjhUgRGQAXQCDxiEqEfDWe6TeY1rND6xxfWq6i36kg8HBPjx8vJfh7G",
  "key17": "2i1teg2vEQLFXor8HXRQo8fKRWRru2GzBLGk6VPmZxsMNGsym7a7RMCcw1RMVwnwpZhfaooCdKHjusG9ixTMqXnA",
  "key18": "4Kf4D16ok5kPpUnvrdKCbsazH59pDzG5o43jihDomcT4DpgMdHGKJPPxAxaSU426WpjVHHMYSftk8HAsiW8uCjBc",
  "key19": "3b1xwna9vrRRT9jChKitc8oaSGrf1HkMK6jDzpMzwj7BQ1MFYJcA9YVjjhm2wSikEboZvtvsnKvQEoZyyUJWwcSE",
  "key20": "7wHr5xmD3qBDPtW5TgChpsEDsUyuZoptchKnqjsrovEYkGvsHFK31BUV3632jyAUZSxHxFEY8kVjVm2u3qS1CA9",
  "key21": "3d2tc9AJPzHzW8THWrA37zkdgxvDEN3gGy27LKEpaGjBWZLsbp69oFJqwGHxe8LBVJZuVm5H5g3oSBswCVLiJmcE",
  "key22": "ci9J8qDXu2wRGe885kzD4RBP4xMBDbRFeh6XtpPHbosDoKeubwQEtvdP2YVuN199TE7tDCDwXHYC7VC221MXwGM",
  "key23": "24xxbcifJCfXB3GVs43GbGgarvjBjnxAzYJyzehfboRcYxJ6RmENFsxuAu4gCwLGNBjgjPjfTGn8hna9dUu8JTsy",
  "key24": "26kgjMGro3b8Jk22dyvT7YkDC1ATF1nVqN5Hzz5cwwLke9tSfk6ewqzwYCR2g6jBcxVnbjq7MCRMoD3uJEQxg48t",
  "key25": "39TMLe9JXeDsgJDCwUGQJ5fqa1HFvEV6Lq3YKVFtugYRpZ1PUsAtzjNAnnYLmYdJpPL7mTvWuDm8mESEijwTdUvg",
  "key26": "2xhmjdyJgcaRJHgJp8q92VhjdqvPLMJcj1UeA9QHKRY9ScfnuiKX6bc1hKvUWYhMLhn9T7wrqL1beo3EiYPAxpJx",
  "key27": "3H5VfEGmcstrDvVs5DipuT2FTis6XA7CUHUFKKsSbYBRaMFUfzYBMogD4rpQbysWZZo6Y4j72UhiWXqqBxETHjkE",
  "key28": "kD5GB7q3RrJLim9khVJjif4freHYYosJwzo8YjUhLs3QtbNFf8HWfPLU3RgiQr2jfhK4wK6Q1mPn6F11pp5Y6kh",
  "key29": "2QNj6safuP1YoecddAgj1XVS3hPTNZMuPk9wMDC6PFM7vYN5w6vaAhqvtvhTu9QPzouH4Cs6XSumZa2YdkMGEf6J",
  "key30": "3cCdjWqUrZRCFjbJSUAm1CKBykMLXhk4s3E7wN2zcA6xBhpR4Di735bGS6PzycqDHxkytwm8sGhsQpBhZHwNWb94",
  "key31": "59fqUmiE1cJvsruqJvnChT8uPsMZWyZ3Y7t5KotHbgfyNzGD7kJ4DFUm98fN27zYxPUNkXhZe5PckLTgboqtJBV",
  "key32": "DT57DqBhx1KM92UB21foktF6a7aGsUU6bTtArqTCsLA3CwB63qEjN6E7pnrtFFeC46CQpZVS3gTekoatAYQ2iQW",
  "key33": "4R12w2sAi76Fxb4rqVfwaMxuMXoP9fmtpqmGwWDBLxydJetmJQ1GFBbr94soQjxenLuL9ZMXAJ6u6UYzsUQZx7Ur",
  "key34": "PFxX6tunbytsCHd2zXqpTY7muHj772jw3QdLq7qYbzBaSL8egUcSgerVYxAHZUrxaGqQ5fofESpxsmgwtxxe4Cn",
  "key35": "4GDYiu7ZATWcmWrVErurWy1McuC1iTea6vR1WMgDfCzrBH4Ed81YKYoHXU2mZg5aqZ73zbNwskffVC6zwgCK9QT",
  "key36": "62yyifA3Ji5xLPWUNR1g5oWXyvG2M8i4QAAg9jm3zkG7NdfXTt6aDQ2j7bcB1i3CTGBvmX8kPwZQVuGZpaxHRRnV",
  "key37": "RXYtFrTLUbkMqFR1DZ2qVaLEv7unVNEV7GPZZPWHwcJXdY1U3YG6UHhqxM2HuodVAMF4yLDN8BpSMvdwfb2H7Gg",
  "key38": "5SNyJjomPsn52abtUKCihzvGwBbWhSNLKDrF3ZSJdmhmaEzxV7g7H1X1ErG4Et9Udpqo5otR6SeAHFp5xKoJwa7Z",
  "key39": "45KBgjmFxiqSHKavDb7Sw31MefBtbyBZiBPugeiUvUqNGFPoendDyEzwJZ92sayiwPHvRctFHcKA3kHnTaNyWcDN",
  "key40": "3HVNrTvsUecaGGVbymBXVLpJoqKxJEwUSUyTsYZt1CkAhY4XSRiVs4wPmEHLbHganT4NU8NZQwtkkHKMgiGiwHjo",
  "key41": "4po7nSrW2K6nanNbgj5SLsbCMDG3JaP1waD3pnJFbVqdKSy7vmq2N23kk7AKDNH2Em1MT3j9WHNu686tGH3eE1Ae",
  "key42": "26JuJUTPwjZbKe7vzg826ijGy9iHeQJiotxRXbMMwvyvnfungtkwVV41p4nezq6h75gNzK3gsEX1a3cfsnRX2EQ5",
  "key43": "3FnZPvXfLKoH99F9tdFx3f7gWPeQRryuPdfUBJMkdDzzLfpKGw56FygTFixrMzNwi71mBy7BVJeYXYGfeKPQo7o",
  "key44": "2PTxFWPeJNfLinBA4MUAbnG36gXrdQTSo9mSVznV4wWPQ2u6ENhsGarxRwFbcVkdBWe5Ge6tweXDrn23hQD5XfGH",
  "key45": "2kGoJeBUEFjHFnLj3GfB6o8mjEnQXCgnaZWEdLf1PiXt88SdgE2hA5DegQM5cDtsAmAHvUmHCoT47axLfX6JK6ve",
  "key46": "5c2Bg4jyuW4sy1b1rgU2KFxEkcFfzZAjZ2N8P72XL3z3q4DFJiwPgQDhk6r56RA1CL3orppTA1rafsjHa3PKqYht",
  "key47": "5gzsGcRMaqahTSE4jPyJamLkqoiv5JUqHZnvSVpVJBv5s3YC8fo1PdC7KTpMBh5ZFQGQ2ykPKBBKBUaSJgD7JzH1"
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
