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
    "4hMfkTykphhDXoKqjFmq9pLreWkTUdt9tKHd2LCqyJtAPesHpb18qtPVSYsfWwE92DkmXpMGa1xuuynRzu9EM8N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQbNMUAUrbotMEkypdKHt1XFQuwKEhoskPAtYSX6j2vEvZf1ADdzRJ9XqkFHRHP5kYKDwfJJwDsbR8aQG1Sbra",
  "key1": "3kueud4kqe1inV2eapLsvqaksBfgjZ5XA4By7ZUb2fsqzbDzxuA3qQm2jR3FGvGjAojnmGUbcg1SUZWVs45XpAVP",
  "key2": "3pQzPveWJiJkJNrmDt4AnZzEVu1QDgCQ8T55e4FK89sWZdPrhjYERNokaWqxipHit9ioR7Cj9vvcFCFNtPM1KLCf",
  "key3": "49cX23rMWCrNjwV8qVBz5xGXQitQSjkQT9Pv8nzTTt4VcsKMKpASpz2mqSYpPZwMj1F6afo2E6y4hs9QpJMzQYpE",
  "key4": "4QJUUwbiRSeBgjb2yG4HtdYeBB42U1WnFcomNXiQVPaP1SwXDXDxTyYMBNKfqwHK1tF8DLasKQiD8yayFktHpEtr",
  "key5": "NUdG3fDk75rFYptaENhVWnJZNKm7Js8jhyZRUtQJhi26z7YiQ2xCh5ZPnXvrVo28ezAMTRekjLFy8gKHP4Zf6AN",
  "key6": "4YntezYQodZ5Bsrdc3cQa3N658kcZUBwbcH24krmoT4nxTNP1pdbvktjZjonJdn2H648vct45u1s4yc3W28hrNVX",
  "key7": "5DKsLLFmHum2Ykt67ocdfQhJc6PdwGLb9HKRdJDAL2gEvbrM5mC445Vd5pEjc6ScnqdifC96xLr9ZkNqPCtzBnEY",
  "key8": "AstL8ucjRZrrZtTBWDUoTGeYuLA8axFxQC7VSVj8EKPjYQ3Ht3fX6QoPYxUqRrbzkVhstJpGokTvpk34eZYUCbW",
  "key9": "31tKdzph85APyF16wX8axaF85wiXEqwxQ2Fhy1rE6HkMvJRkciYXTxrJEsYZoUgT4aVqYK9362i2ZAa5FCpc4dmY",
  "key10": "Yc5atTzH18JdRRguzwxTYVFPL8i6GH5DCpknC682FGmWJ8WxQNMrUPjTtcnLvzoQwprHVfhVRnBtHA1bTDrYpMU",
  "key11": "uEKHXtF42qRpW3Z1zWXX3L53qjYjoTUFhjxLJ8zkLrf8q43k4GUsmYnX64VW9GST8W2m2afsWrQQh3FGcBLuG3u",
  "key12": "667jM5MvmbR7fXvfPRbrJYE7v8YaqwHqPsDamoW6pEQhws7GynYegYzSJE6unQsJwiTdX8ePfaZDoE8AjgHfbQMc",
  "key13": "5DkRJGL7cYREqwdETdu1W7uEDJbdDEjPQKtSaULnNzHN29u3wv19ziwWKMBFeG9rFyAKx3H5mvqSJEAaQDwbinUY",
  "key14": "RWA51xPE5VV8wFjjtuLkyyCsCBvHQhh7w5QpiUpG8pdL6RHvVH9LUoye2b1h6YYKCLXj6S3AheZuDUyiag3SLEc",
  "key15": "5wRAAxsM3ZGtTSouXutQ17eXAqF43nzmSwscpYCUS9G7KDz5hFfsN3oKfwi7CMLagCbJTZHue4XvLwiAbQkgBMaG",
  "key16": "2XgFQ6ZZnJto83Dn3phHyX5Q2C2dBYT9NXp7skdfbK7WAxUgczJXtwVuoTkv91rqNoFKBhK84m8vAVBr6RtnCtsS",
  "key17": "4hj7gMuG4PcpuaaXuD7i24nRs12YwMcfHGST2So6SZ7VVaXGZZTxyJSGDeTBnk5Xae2egDLNU99YpoLSo7Pm7fb1",
  "key18": "zWuTgCcouLEJTuKTKFkLKGeUtZ9pTC2j9ci26mCqt9gPMX8Naw2kwMxkay9a9shj9kEEGM3E78psgogEwNBckXH",
  "key19": "XbV9FnGDHH5Jrje7BLfPpWwjWkq2t2wB4Bj7hGd2d91yX3XQnmCBPeHx6RTfURUekAFFfdVyEoXC698WWFjTZJF",
  "key20": "49gKp8Vepqe27tZz6oNHFDLUBosadjxa9sNhnkiNw5fPkh4cwmSLN4kfsrUQz2xm8MmuNP1ter5kmdUSsdpiWaaK",
  "key21": "4FKPwKz6QaeHUnbte9xZGFCfXXba7pBNPxwdAJfjrEudfbgKShAU4i6DfWFF8imC6bBDM2tWcLxjAHXQ2ffQko5j",
  "key22": "4sRJeW6RmRcn4aGJkLi6x9wjgUWjJ2Na3BbcvzA5whQbXyEtsLNehkQaSH1s5Pp3WE7f7vMGB97fgaC4ioLvNaWo",
  "key23": "3mn1k9nYjEUnwuPRWKojLPdLuquiefWrseYsr1WRxft98P5ExUsrtgZbxtj1vDdFQCThuhkSSf8xAAS8DURUwKBv",
  "key24": "ZRxY3d36BmSAdLJKLoZ6X3j2ppTDFwZaSvAu7Gpj2xXVMeHuQ2NTvFNZCMsqEKNs9SKEVs116yUwyUhDQexHL2U",
  "key25": "4KnYUykRPN4pPfmcVBPXnHUjTnPJXeY6QUztPq31yJPbeP1iSe8VMcLtBbnhSVLAoBRNAJBystvmstkYXEfqfcMK",
  "key26": "JgXP7WFwUDeLp6X8M71wXiExWVo9wLe6TA8QeKnehxZUyZmhC44WokCzcSDTwrNT2zi1LTXfWVFDgft3fGZVr4F",
  "key27": "JmoHLYPbvsBNxgEYXmpAt3y7Kxu1wToton8nHMfh82jFs8hiCA8UhvctWnoAf6itUzv4BKwp8FMdYupj879yyf6",
  "key28": "5tieR6iSyPkvAkiPY5MALikZRctBg8XcaKYwRCZkmAfsPY6BphuvHb4cgdjE715sBaBoNa3YykiBxG1rmxbKhuTr",
  "key29": "4umjNDBQ5YT4ybSnL3gSPhUS1xfmHbq16Kdp5wyBAsodwVhYcZUX6mJsvajJhxqkU4fXjTNHQD7YpPv2w6HNYrvh",
  "key30": "62zJiouj7GYkWhjPDinGQ5isy9vU5U34BWvTY43WJwpmn326JnJ8cT8pe7FwZQStPTSQrGLq4xjiwVozm4vskSUz",
  "key31": "22B7qFmqFcYgFVo2jS45nU3zQrXU1z3B86FiEfm4FSMw1qdy2efrVH4CykYysazcTT8YsH7eEHwyF2WXXn49GNTe",
  "key32": "5CfkWN5446KSNH4CBqzUoXYDpaDMfDg3AT39FjpuBitzXQ5ECTj6XUbMMHgBfqjvy2M7cP5XMrgAwbEteeJMUgdK",
  "key33": "2gNDSYHrbhoP1ogTt3a6jpEhhYboJykAiANWveCJbrDVrZ82ingtCRKpQcFahVjsr2ytso1Biuo5yKUzMkW9fjYM",
  "key34": "5ec3nHN5KV237PXVkjfjQX9LKXdnPyf85NbbvYERTM8QGKu4xanpWt3kqLtD7GsFWyA61ipfNn1itiWGTwma6RWT",
  "key35": "4M7UKD4aqD7autHFLX54RXoVuwZMdVjBsharT4mT3VbvmFxRgbuZYzXk97UCQv9Wc9fr19oBxhFui7JCkuQUvEjJ"
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
