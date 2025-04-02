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
    "4R6RNweZTT9HMLcP3GdqodTrfCSEderpECRSy8cpHKqJ8bqchSxW3WUrfa9mjibaHqrkZv8t1SLYrK9D5XyTvFGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3Cdf1aUP4EghFfgcciHQqFUxxgzhVkojDz679F1RnM95CsXWeLzUALLd3ro5cAUEnYd2td4czmFRzNHi8uPWHn",
  "key1": "24UGfNDkAaH3nCLcxDfvchYAjzF4XcdZSo1P4syNjh2FnucY7SmvT781nNagG3UB3uzbPcTyhhefNepAXB3ak5AU",
  "key2": "2MSvM4dY6JbEm7SujmJakspJVtBxLdEweSgnFE7gbq6EaaZ2ys5L1mvPVMoo2Esv7yGBuWVZLiun1nLzPspWvw6X",
  "key3": "5CkEyqyUWYH1EmQ5nse7hCKJGiMY2speik7wfm9KNp8UdALzLp6cEo14eSxe7tTpyXtKFf4NsMGVQbVVzbjwAwi3",
  "key4": "669q7nyEYHiiTnAKHDTGCY8YVJFthixtzRb5tHB357tupNXFPiEriQ5hsS3LtSBroit5qyHDzXtoQq7NPy3LZ94c",
  "key5": "5jDg7t4tQ3EkCYv1tvcJHQ3P9qAevBTD7qZBZoh61A1kh4pxji3xrPbox9HiQ3srxmJKRdgp9ks85t3yjX61Vs3t",
  "key6": "5T6xBopkmQMhfovXKBQmXsdfb8F4thpMzKXoeNr1zQjBhTiBxDsJLZUG3Ns6QG79LXYaC76VyUjpW47tTC3p9cRe",
  "key7": "4H6zPaBNhkVkBzTfp5uxUgewYC82JFopBR7GkukYqWwTkTXNZcBn5Wk19ShBVaoo1tmPXHx7iUNmJfoqgmUT3jTH",
  "key8": "35pW3JBz2E3ch7ojsRTnCiV6V2E8zqRX9uRCFYmCUt11vX78RvM28HuJ6JnhxSUXagPPTqzbDUAmBJkcMrrvzhzo",
  "key9": "QSouV8Wf6AXHcYbsnkoWbVZA5PVCAtFfQr6m35vJJVNm4riJrCTLska8Pg9FCM5hFxsoQvCriRHT41EbGAnYE62",
  "key10": "5Vuxtz6UMn7Vo6riRnwXBYg988yFbqtoY5iT7SC8pLK8afJpzdubeDt3x9hRCLty6QBjZCyRddgJTycHBtABHRxL",
  "key11": "2Pq6HyFLXjA7YXhQH8pbxZrMz1eryYAWwrS1gxTFwpRmqvVbQj8rU4pYyua2LzL1WNGEWvzUnq6mpT9cBtwrXiuZ",
  "key12": "4tadQhcRXQPh4XPxs9X1Wvt6b9RhV8SVSDj6Ntj55K2KsEfT6EyKSc28sHRv18E4etsMhLgZBN6TmVjx5FXDRU87",
  "key13": "5xgyduMsyG5hvoosfwpW19svUPbmeeuphvpHFJiTnjF6WQSuUGy6JCMbgx45DCwAtWi13PHrUaFa2NwzX5mKFagt",
  "key14": "3MWZAdBHznGV4tRV13iMmJ39ZetwELBZ4Q2bhHxNnqPz8eywcyvvGRvQynJhguuCaNQqHV3nMCAVTRK8GxzA88SC",
  "key15": "nUWB8Zg9izg3N3BtdFQWH2LNc6mFs8KVHsk5kTstgzCoRCHAUEztUisCVNdkTvJUbVPSpN84njcvBjRdNFhJoEb",
  "key16": "2HhpgV5BS8F3tyQTYHRf5LhdL9FvQmU3ZrvpsmVEHDcA611r1BkW5Ck5Eq6b8ScTLSSQkuFAushYSvqe8TeUqAkS",
  "key17": "4mBRFF8sC8jD2rbMbTBTCgtjRGEsjrigTMgAaJNNDxK9kjtZKsFGwd8xM9vpEKw1fBboU3uHTd5TtdP1iVaUAodX",
  "key18": "3feVGbnqHrcwaURAvB3h9tNVFUSzuiBwkeTVeMy4KKjQea4qEAA7ikFMgkCEhFkYL2nWmu3hhRd8omX9bs55pxgS",
  "key19": "5pGejcZoFPi6P2xCy54q99uCWNSxoHeaRZD6caQUy57AtEqmfn1d5khPK1krmoLXVPXmEFxVX9mJXfy2JsJraYhg",
  "key20": "hJRwYkWYJh4Fb8qvsWw87fpms37bm4UCvN3GoUwhDDetZ4GXya7bXGe9gh9rsD8fBXDeUk1nGA8aWazhQPX1TfQ",
  "key21": "2ogtznCMxK2i7PiaEseVsSuhHiGTQrxzmcVgytXxcQYm7gYXnNEy1wo82iTVqrsxuMDbxFn6Pj2svJG17sJVvbUi",
  "key22": "2ueqq9RvDAPTho4ZBuq39o2MvdML3qtvTiTDUrVpANL2DCQ4dKuLJFctX3upMdtfqchrnkgECjLVm3BJsKSEA3Sr",
  "key23": "4P9G5GVzxrKyej7tqu4q45vYM4vSEyymoFxZ3EEau4QS2gXpU3zcAnGdiJt9NEtm9HgHBzqBtc4p39GpuPEzbAUb",
  "key24": "ymi2QrTGgqKJSEBdRnM2Jx4JqwqXWXXvJ41xN98z9mG1RGsFFmbVkASkNUTL25fgYgcmrd9c9YNGPA6Frq1yAws",
  "key25": "UyBGxKzv9UrtHwAfQ2J7dZAT7SsJgjqkbNrsoHdgL87HC6D3iozNi8cmvtZcMPeKTzhftJQtmySxxahAWhGDVdm",
  "key26": "6ovv6u8SASfM6X5jYs42z51prs5LQNUM8kf2qLjFDbfGcybpaPeKJRuZrEvneynmieFtWxFv4BE7KL26oMRVSfK",
  "key27": "4abr9A215mHLLM88TUs7fMYmbzM7QcH32ws8cdLpCsc9ziuoGJ7Fjf5LjkuxezirGndHgfcDK6S6iD4yqqodo85i",
  "key28": "4A5fsAUa6wMEnZnHi2evvU4q5iTrXhdnanroBRPA78ZBbRxgmfnMF2WdznAog8Wz2gRa7rGhKUFiDYPodTRtdWJc",
  "key29": "5dQJMQQfC1wuDLWN4jAZQ2QH6dMZQAqmouFhoFQB1trxtoR6GanASBe8NFAjkLgLs51wEHiTt8EmWpnoyj37FZdK",
  "key30": "2JzeAsRHXcuLKsiMfdiKh5MEaHLbAPVxgGvnjXZj4sDTkRXovdZpr55Ba3ZmT9b1jKZCkaR75pY8T2vC557kZ95i",
  "key31": "5SdmeASd4VsWa48jb16GHX3YGnfwzkVVHtm9YPxcrng87XSW3AXNcp2XQbseFkKBBQS6SwrxV3iPZiqhxtiqedzo",
  "key32": "4JqgcRkcpdJgRcajHowjtJZAe3pBXR3EPQmUrhKiVQie3VrvrGPtongZRTApWx1PqKBcfP1xs6xZY4xssEJ4eEvd",
  "key33": "4YTYFz9siPtaiE2VHyTQB5MRsdLjco57wVjKWHvPRGwhsYmcVABW58cqjfojvDkmaBN9sj3Ba7tNoBawSqJ6KFSf",
  "key34": "5SiidVQYxC9eeWNQyvYodXZuwohfveXNFspHB2ph8eV652WS59wf1nH7VMLerBuZUDat8QY43Bs4JTFa3cbmbHsm",
  "key35": "3bLM5icWRUfhBubvTR7txLNXMHjhuVt8LycRVYXAPAbvJzM4cVbZ4M5duKEBQqUoEU7vXCLwKnf2iFaJZ1ryneEi",
  "key36": "4uoUQ2dSFfyoprvnQyvkmXVWuuQnySE3JC9BoSSMpKGKtYditxDZXQtvynq7GuaAzRVZFR2DMEZSiqkKLSFVQFCZ",
  "key37": "4Bjc7z3etCZkZYSUDbcZN6mU3w3MGV4JZE19hFVi865PkGxct2YmLSJ6QbeHFcgyjJHfQ5VtQpDCjrNArkrx2WwG",
  "key38": "rsfPcr26BStUM6CzwBH3Aapu98aungAWwBKALNx6BrEoRFo7X4SGB5kQGRV6WyEqERyTEi52qaWdtjdwQX4g4uZ",
  "key39": "4rPy5tjSnbdDu2NgQXzvrn7utPXrJyQahfnEKSGtRtDHPYi19nJU5pjHVihjdP99UuZJPjBYBgS1ho7GRvaEy8Th",
  "key40": "Riy8rZNvLzuBzpmtfkUxW8JEXqarKRrpa8RZJYp1XBhVK9hpnfwsNQxgY6xYbeH3gSDKDevSTcjTuc5BavNsBrf",
  "key41": "3KJcedFMaJMEc9rpNYXcanToJWFUo7horwgru1U9d5sJB4NVscVCgEX18uzkFw6kia4PMQ6TbopmzowmdiMq4Ayp",
  "key42": "XCqtNjnWft7M6iVA52Ysbs5XaMeUrMoiiUqWF6pEPHM2znTRUABdMm4rLHbggQ57tMEUmruzN1Tg4uYcLnLpyEr",
  "key43": "2zD49etE2Gsn4mJDnfRfNTDoUATjHM1hsy6oX9Hh7ff8pX7P7zVta9WTwWPpPCVg1yU5UAP5e2qHfVnk9JvzHPjz",
  "key44": "2rZMtbUrBryVKm361eJ6ffjMAWmNjpEm9ffRVqa4dkqPvyLoTiXrthfw7JKKhPRz3fss13eUec7qG58vcJG9T8BW",
  "key45": "57GSf52EjAvJXXqKLLoSsnAB3UR6Uyj7Lzr79SZHg9H5TyBan53qK1anXLVgkAgFnqLtiKUC1pak2UL9E1py1GTA"
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
