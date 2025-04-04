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
    "2XgfRw8uGjs5DmjRC7GnTJvGa7sbAdHHw3MruPJX511gt3XC4FePQNB9Rfch7TcjRgJHa6RHoVeUfUPTBH2M79Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmbPKuLgpAtJRFy5ddZ1oNwHRDYj8FRxYApqXAw3Sb2wpZXZuvpnyFfL2PYh3Tp7LhkfCEJjMHbv9Zuu4zsBf2p",
  "key1": "2V24qeqiSXN5kEySF4F2Hocnr8Au1DdThu3HiHmKbmktGt3at7HTJ2Aic3nfLR1UsKUvwctyeXDGxXEaLzUKZaYD",
  "key2": "3NKuoV77r7hmFhRws8uZGrNM5LdyxuBmapuhD5ibVzbh327AkHR6zihAzyEmY5u2q5KEX2cM5Z29Y5d8SgjmzTxt",
  "key3": "2zAFx5Zk1pTQ9XyyjnX7JQNr4Rqpcjj4xfmWNQ3gLprPMdb1YcyKHK1knSQaYem78cx9N5kGjvYKoAj5UyxSfKvY",
  "key4": "3yWTTzcUvv6ntqYTFsuSmeLXQ7J8aKicG19Xcc7LD4YZGQGkS6pRwkTeMPmrTRGAbNThnHTS8nv6yp5XRcA9Rbqe",
  "key5": "4rAoniiy7Fj6kF11SR52jDdDb7CuHD7s9erPexasQfrrUEesxmGZHZbiw1AeWG7m3L2mGDkeuGWU1xgJeD6CHkKz",
  "key6": "33t8hG4xVxzQM2z9qnRLEVueygVhdKLT29MuwvghNHGNnMYkAg9AfW4YeqKxhkHbdBPr8yemYcauVXoaCyvgor2o",
  "key7": "2BMdMPiAzQYHgNTY9uupFacYRwZjqiZFAwgMhXJjc9BqCHd814kspdmYzvNXF8HJnTMRgqHved51iKwgFY4g96xp",
  "key8": "74Ua6Tfm7KZ5nbFYePDNsAJ7oTxxQRw8CRK74JBoxawbd4shEUijxZLjv83TNTUjNMJDvWXq9UTCz2NZEfgUda3",
  "key9": "2kKjCfsDHe47EKngmGgU39VjB5i8h3ETDU3TkAEJJGrCqA3d4Q4dR4hBR5ayCwyeeqRGfcppmhYYrqTxsCq8gbR1",
  "key10": "272Gb6x3hewdvwppf3n4isdbrTxoRQL3uFaXfT8zU8mT7FyMvfs9j6LnoLzrCpiKYeKxBzzaNxfNrChBhfPY9nUd",
  "key11": "5tTprU9m9A5ki9DFbY8PRi33QSe497SEuM6JPFb5peGKDVS7bPgH1rDEfFDphgoCG8neo8dXNcHNU7PCxvAWqR6Z",
  "key12": "hpHNV6pwAHmrpaTmFizZ3HJBSidiXfFxecdrHN1TbKGuJy8D1TnMaZMCcV2jArSt5Qba24HdwnbGA36WE3FEeSn",
  "key13": "2KEpWc1oVyrhhHfhjwDUp7e6jro4jUikxxGzvrPkTiBh5AHYmHNVtqGbKkGTdi1Z6Kg7NG7X6sisXmP8Vq4hiZfJ",
  "key14": "6CU7aXxx9wCidU9mY6kCb94twNvdoJs8qqZWZTgYtz66rA4fDnYMZQQPQHZMgocV7qnFRehFrd9oTzFtZn3VQZ9",
  "key15": "4DPs1p3hoQn15JBV4Ydfy4rYCPuttq59HTG3Le9FYUyQAeVMqacQfm5vfzc6jm6LvVRPP8t7HzEE2ToczEQUcohy",
  "key16": "4VbM88gnd7JXb9xUzrogUioZqkwGHqxrUd1mLpQTCpSZCNvdHpZ6hUheshjp3b2KksfcymvKpgZ2jq3MNka3LHSR",
  "key17": "5hqGpoP39muuqxKFLBodiU3ngBwqEgP81ucrrZDJX72B5KffUWRKXNv2esXN5aDLxqnqCPC68Ff9gBKLi5RqVEsS",
  "key18": "A6kxztBNt3Ydc3tKYNwLx3tCjebbLSv3w6dUvGj1qczW9gkKwnRqZ46e5aK9ovC3SHMpX86rb3M4LpRDTk1Wpua",
  "key19": "4Bek9LbSxCfP8fQkoXRisps4jfrtUHs1oAhk62CS8vfNcX33k7xraXqn5fyQ7pLxLoJdWifkZSJRfV6KRgq4PpiE",
  "key20": "5vFDD7GZce3YGTKAdxW9HGyyzHN9w1AGG8ST7URu5MXyZNeqbhWyXm4RL83WNW7U8QkLeLHUHcw9wqGMrtB2qzV9",
  "key21": "xgsYgmo9TzfHncuZfUwbmciH84qcofDQtoxDt54SMYWWEGnEdHPBaFy5ihsHrnLATTdTKCiuFqMuqpAfQuqturW",
  "key22": "4WsnaPSAJMCifyACtGtnDNEtcuejc3MC2Cu6pmKMpjiARqeXVE8qibAyUf2kywamGGT4iGSZ8yGiPBRSeZaXWDub",
  "key23": "3NDJDUTc75wEYzz67GftVYx5NcPJ8SEhV7CmBtWiXnCL74PsRAiXgCUzs5ovqrw2yuRLG3nV9UUHfyiJgSnCbHhM",
  "key24": "3kDMUyH4LpF5SZXdGZgWFZAVMjkQQmMVyNQfGKXsiFM7vVPxTkLsTGjeA6QyWZRmRavG6FeneBu1qsCETu6Mgtyg",
  "key25": "333KvQyGXbXak2xbDMd2S23ppgQyr6W58pytruZpP89bLfA7PAo5evGmMkfyYzStUv5G7UF22z5TSmSMmBp4mEih",
  "key26": "3pXA4UWtG9eQtNCAAKN4UrUuVo4VpD2dszgxrBam342VLh9XeWCkimDeLGbiSH761YqCf1CEQonrjEJ5BKAnFzkE",
  "key27": "5Q31spuDPSyoQwuiBgEsewDB1SehPYkZN8kdYgGo39RHqb6qeDGjXrzMnE78TeLPvo74gGac5GxWzgiyXfL7imky",
  "key28": "272tgZMvN45u2vyLYmiXY5QwUve53Va6csfMgyiirYeZKvzH48ApChuQNTwPU6jUrkhXrVBgeUxwV7Y7WWSyZcAx",
  "key29": "2NtXLeYfcShxetdgNqWeHWGie8kUqurRQr925GJ8trxiiXwowQa3nqwP6CKdAfn4LUbxQGRK69hTGbDNCHjS3THr",
  "key30": "2SNEeyRqwyE81fzXkohv7fzmbPFTLHDZA7arqokVdFkjpsj1VRtUvxXF4aERMFnunFTMGqWnfWjn2sZ2QuvXSMVk",
  "key31": "2TsBaQQ3hQ4JRWcy3YDTWitTSxU3z4GfmJwSfFtoy4vxZU7UoZh2To5NJjgvodmt3co43amM8ox6f8kQ9YHagQ2p",
  "key32": "4zrdGRQtMsCXBrfH8hKkFKLoNbvxhV4FNfbHgP2GXh3wShGEmCDjoEj2ozyJRNLyA1hTP6r3oGhdzdAd7guneMjX",
  "key33": "RyWwbxS8ffdCeABmm7mNHvHCrfdMxD9z41m7KEo6q7x5etQfz8UbDh5hW54YxrNNoSMxthQpKXuxwhQQseNwJfE",
  "key34": "2okAvC9YJmv9Aqum6AkcrCAviG8LE9MDzJjsxLKyZ7XddAzK9XuN6uNWtkqhztJqL2A6Si3VtXQ9yxgfmiRx61zC",
  "key35": "3PrveNh4bJTcj4sStwJYkZ6qRPvFDruqbiqjA7Ui77ZooJt2od3GVKwxkdCFbbEsAN77ora8CXgbknRxuJUYzEcf",
  "key36": "8vhpAgH6FtWNbePGFQ7PDjfCJBeCiByzU81UCMT6eCKbNbMtx5nFtt1MsZdfV7EuiWmnpYiMhU8mDKzTuErpoLo"
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
