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
    "4j9kaRhneY1gEnB1532qm8sAYPs18PQ8xsGe22qaPViv79q6Mj7u3MUWhJAGTSwW2B8Ewja4Kf1tMpmkHjcveHjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24aE3fdD539LTrScnbhFgD9CmUVCvGe1ok26eyfGeFkkGYrEKfA3bmYU1GVN6M9bcEnxNm4LEYyVZSMmXEfsktnJ",
  "key1": "4PymypzonhHm7CBdcxTUb4DRuFpoBDKPKsmzSN6SNYexAhwEmCSPz2cmqnX5oRza84HXqJ1K7vxqpdYFkXPQiaoq",
  "key2": "36uQyuk9QvcEgpiZgoTfb8ogKbRLyY14bJ1ANKSJFbbySRJsMSDciuwewyNE378VLz1TE8E9wcedSJSYfKGaUNdH",
  "key3": "3WEhGNihgwY4G3vMX1SM4TgPobMmMiTAq54Vg1fuyRm9t5yD2R31Q2jwoKbBXDafF9i1E1KRBA9KQVBAKDHWkNDu",
  "key4": "3WhPpRtnGxbyTkFCYzksPi7iEhYEUicBwqCKAnU1kbcprxRsNyF2am2y6DtnzuYSMfS8MLfawz799RKicWxsKGjB",
  "key5": "7JESCEf6gUV1NDxrt81HFxNUZtBWQRqEwLcxcFWzbA7rFAMbBLYatf5gcrX2TjCHgKBgHqvpbMaV6twoXwzQcLM",
  "key6": "3U1cLTxaBbSfqT2VuHUo49siN3u5fGDuzRkSDQ9QDRRpALsi833XbBpcpX6XTMTu46KT4fWfqN83X5aUoqU4D7H7",
  "key7": "3YgVfZrBNc8WT968CetGHxzsRhaxzAsHmgWV38qVtGG5M6HiaYfdDBzqQgFd4SdjwwdaxuMpuoFe5n4HF9GG5L14",
  "key8": "49vkMGmW89zDpwq2QQNtD5ApeHTxmVsn9ekt6d7FQpprSheQpGeuvB5ytypGRW8dhzgJ16PefEAeB3rvxe212ypP",
  "key9": "5kGtZnktdrpr2F2icdcVYe3MTzMAdr1CFbkvLqhqQEdh5VtrGmTB7fXbhzaLKXauSLq4yjkcUgCYZK83z71qgW75",
  "key10": "GsmcSTcHtiKGDK3xdjdZuaEEUs7cbRf1Mn8q6gaie9FCM8UVzmdztMo6isCXDqbTeWA4RpLykeTwubUj1W4a5ph",
  "key11": "ou6r48yBgt593ymhycQ6w8uK3F4VMmK6emEaPwY6H7Pv567ydhKPMkACWZt21zbUC3uYwsEqZUdGrS2ivasYt7C",
  "key12": "2kGBW6aAVJSdhm3RpMkoMtS2ZDWxeJAvn5QKcwXVe4DQEEadGiF5a1zF6sBXaB6WU6DTRvQAAbfq8JJAk3Rd3Bjd",
  "key13": "3uvQGjxYesrvu4ywoXpNCT7xPGmWzJtjVWzRTHTqrqZUM5urQ18h9xQxERm7Pn9naVXpteU7Raq3deDUSLErCkCW",
  "key14": "anmCsD2DC8C37qFvUYsSErjWgXZ9n2Z4aTUuQTus1B5qtekHNLCA831wfc7Sjnnz9Z97cVZurFbSrZjv4Tfrmti",
  "key15": "5LtrS1jevgZv9CckfVZKZuTSsHfTjoXXmjmDn4MT7iCSyF5EGfMbRxpGXU6gWwodpUpH7X5aTUpQD16RvwmdkTJF",
  "key16": "4ow1uMwF6Cedqk8KbsrviVBJUw8vANq7rc7WFVYd7oEGCryrCZDRaWYdzj8LpVutjdPjTMBR9MPa8KySXVxoy8kR",
  "key17": "5CK46j8miw4ULkB7Jcx2NDFGDxVNfEAcSRaNTGihd964RJMpa1WDFWFkR3XsfxVcu9zUgSp6AneybZGazm3VwTRw",
  "key18": "4ncuWKMRcT6Cs872XiKgdFoyBxuRrUdErWjMegX4HgzrnZfLcuiZFsm3FdPveaAQA6Jc4Bga5T9fhiRZyekH57uJ",
  "key19": "2TYKsBna1uX9HyYnBXgZmZopquR9SytYspGfaN719XsRWj1vHfeaKUxmqWQT8ST7NAeojTMQxFwt4M16LR6FeP3q",
  "key20": "9Eq7jCKMxUARLwnqcQGCP137LA4ySeCDLoFfWdAuxRfANkDioexna3TT9vrYGdBMjLaAwpji8vSKigwBk25o8QQ",
  "key21": "4AFqYHbeBtjydf2Y2xY3XiAmYYmvxz5JZdehdN62i5MSyqn4eieLcY24XbErdP2Wkfv1wK5L8Jx2cKsxZEmFovFu",
  "key22": "EXfmGeFkHsLkHshrfZHkfQiWwmnJAuN3ur2Nr7y8WPTe7JfKEV9u1Ag7hrRZz67txyNVMWxV3ThciHiPro9tZxV",
  "key23": "5D8RsJQkXMkhFvb5RmirWmNUjxueT4vzUQMUAGZr1Kyn8hufRqfA5YqxWaeLwCkEcBXqQGrww1D5Uaiog92dHCdf",
  "key24": "5iHYBvogC4AJYjDSMMtbF2aCwKDCWNoHRe8u2QpPebWKpjjJZW1RzfEVoq6YSNkKphRBkfX2n5Z2scVYAyzQgtE6",
  "key25": "51Kf2JK6L1aUjzsRQTCk4UpeHUk948gHLmbFs5f6zJbngfiy8u8TqnEEv9MYFmnnNZ3c4MWoMqfZo2Hw1QhjhSK5",
  "key26": "4XuXg3xC3uS2g15D392AUzSp1bxUP1RiQS3oFLeMFMUvMbGSo2ySGxVTA3GJFCtx8mkrzGrJ9upYM55s8XmaPNgZ",
  "key27": "2xLcNTbtxc1eaBkdiTb5EKwYEtkAUejvVyTz79hVrcUTLXxcqYzCZbYKTG26jezUckwoQnuso6GiSzorLd956Sio",
  "key28": "3UGtMaLbf6ASyS6dURCsiBKDbVzh6D7LpErX1zTuLReK8ydvnKwZCjiGRZZE4kx6D17iozB1nJiiJ6SnJMJSCz6b",
  "key29": "s8FNGQYr7crf8GJu7nHW2XPJSuhw3ke8rSogtQ9wNN9CdKsBTdjEhPaSaszwXnZzevQaBW9QhnAggRgK2CukhpF",
  "key30": "3cK1pEbzeJ42qSwiGnxm6sPRedqJoB464QQBSd1NuTy4GLCxL9mwnRVyJ8nVCMBHmFjzmXwCyEahtjJdmVjebTXd",
  "key31": "2Jd8w6u92xjDjttexmgPdD6v9F6Kzhd65tw3RBn3ZLe6NaQLkioXUy4FEesz34knc3kq3f2pfbUhcxLgBfEXWBHi",
  "key32": "3AqUCEwTwLGtJ8v2XTniXMQNCWRMubdC5TeWUjE64dRNS4uVAXKirtjiqEv8Cb2wGJw6SnCjmi6xvR7sjQBtysP8",
  "key33": "4pf45a94pCTacooNTtbRaZHRxNhBFjx97dCUon3EkiJC4MjYfBnAhfCBSZ4vid3ymbKeDX9MJReMhPiMRApbTMrq",
  "key34": "5jQz27ihZBz6hLqeyFusuACPDsqySeA6a811EJ6dfGe6ptxwEyFa4YbaGMSVF9j57AswoJs3VeUt1SzDfWbQUPUb",
  "key35": "ubnRsnUP8BZXZa73GLtS17hnNAQnyzrETM6WXi8ivhFUK6sxGBQDbskj2E8fo9nGbyYexRrtM6vY6TAQbEroMh5",
  "key36": "4T2kuhT5SvQVH7UF5PFcSRXtMrvvoDD43AhyEz6bssm3Q1tacWSLxQfBf447oZZ3ScgDq74J2Kh4L94XPsfhYiwi",
  "key37": "2ocmek7RwWUzbxmhsh4omcG5Wv69vAs6muZvNqTXJHcQLp6Uwj1EvxFqZvHYqDT5c6Twj4q78iJtAUUdsygeshTX",
  "key38": "51mvNmB8FqZ8mkxLT5M2nC7KcSxn9NjMyDMrVUy6BoT5Bc8j7n59RQc75Bf3HiNkW2A2zVV6raN1WVgJ7PrNTqsw",
  "key39": "2D7Zkdx75VZtUVhiBgUCZ77Jqgdc8T9548cffnmTyPhNqfaYhjcbNHW72CFh67fkBoCEM4hVvpoJ97UBSW2CeKJC",
  "key40": "5acJYHiV35KvyWjRS4UfS6TM76bLqvSis5EToB8G7vGZRgyKhJ9pZ74SMMwd41xyjNj3HUUm6wUbBHbB7b5WzfYm",
  "key41": "2Wzfkr1s8n2v1sACtEtYG1tbmBoaeR9DtjPPDr8qSJGvKQrCu7daJ2zcWBZPrr7CxNPTZhQkvRUm7WQkvfrYtEas",
  "key42": "2pFaFsXaLxFz5U6FY9WQdmcvUBPSMSBeEpZpxN27hj7aGz2kyPk9xiiRAYdASwNTBEbHGc61mQ85Y5ZY57TfA1mn"
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
