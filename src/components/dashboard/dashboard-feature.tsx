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
    "qZwVhp3hByGaGj6we1i6S3aSXLrqW54bvwLdkWaWMny6FrX2E3dvTL7g4R5gsiWDbxNYTXNBCwkTh6MFMn1N3JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ambuDw6oChjS3yZ4T3UwZrbPzaUUemUARJbVfs5LTTcgb2D9pXZAddymfvSV8ZD2fof57437vSPo46oFeWcQYv",
  "key1": "xGUAFt5KZtrjJnkTHFi3ch9oFDKCHtLuDFcgmAcsWQrYyKp8TB2ZT59BW6QTumKAaUkoCo5cWph3Ki8ZvsK1xwF",
  "key2": "3LR1Jyi6cmVqtEkx2Bq8vbWWQiRE1A5UbLLB48p5iwv2zwQFJCN6nJZk53BJgTHT1AxfD2cwKv9P8TsFZ9xwPUNw",
  "key3": "4ihNzrcvaidEndEbMNzLTuFBjXWDAYx3ozmaSMDMzovPKWSfq2kW1cC8rUbUwrW3QayikADPbuJQcEXmNwExKKGK",
  "key4": "5fGARBZ3XJhtWTY1smYCrGg7V7mMXNcmZpCv2JbMp3iEeVEf89HKE7f5KeGwxWT9Y3dgu45QaRdYMP1WtV4i4P93",
  "key5": "38WjHpJT5uiaFmt5Z4XKufKUT3fnBhjUM7tx6WxCnpC3SF4KAJXtJDMCcS6iffMGuRAU8BpdCUUo9yRAh4nVFdze",
  "key6": "t5z55hvnkWB4Pz8i9PArLiHvSzVVnctFRUv4UiLvzyKs1MMDkSScYRizQ1b1fmERNPXQ9jUNSTnNNZrva2NSHkd",
  "key7": "2ncRQNtaz5HYw5DjNr88uQPrG3QXqFQZNmR3x6P37vG9FFnDwBHtxNzchUwuXrs4AJh9u2bnAsnRnUctjkRwQvQy",
  "key8": "54rVbiNQnhGe6Ahau8L4HkzXT3qiJnraYEicBBrZASmjdjM1zAzuK6TkQkoxex6kzicG3ixCfpjLAa5EuxTLWKLh",
  "key9": "4nvGxBwBu6pCPHNFLygCQsx8BsDhMfs3zDF7S9gzuLA4XGMvRiFYhRytV9fwYuevNPWGA7becznf6aGS89UtnNwm",
  "key10": "2Nx2k3KbKHSbTeY7mUx2e9ZxMLPhH5FFcvoM2agffyik5p5oWL6VNb4V7ruz3uzRwjW8mRb4DLurKwzoVQYw9W8P",
  "key11": "32AKd9Z5WAXsuV8sPtjUYX5emXJV7bh6L49cUhfjduv87EeGbadxNnpcjPbp4D7SQbNYNVVZLbMTS2Zvx6YbQzgu",
  "key12": "5FAmkAf7pqsKJpc88gwdRUuXmqKhHDUZcKyMNM4tkpzZWPpZvJavAnqeLHwkbDh1eun8rjt8GcS1WZQJbJd9qFAU",
  "key13": "2okBHrt2nU1ArR7kbnerrAa7mVhv1ztso65kTXEXhMtsiLwRDTJJZXxrnmt7C3jpX4gztgNkAvzxdZKmLXoTtSVo",
  "key14": "KYGHHFgi8JSrzXwDALZnk7813bZsaqDbKkWmke16Cq7WHL2qHwjrF7JfWf9UGyxC1hukvnRqgkhkLPMWGJGjuyk",
  "key15": "P2u6WjZsV89J6cssU2LDUFiKDQctjK77jzEAaDRvCmkyHPgKVaEmkAPf1A155W9KjpbHaNWLcnomFiwxGVzJLPt",
  "key16": "4gfAtDu3xQwwHNWvgtucutfHawHonKDYdeFFxiRpAfd8tdYLVAN38WkSsyV1iRbY7nzpZLLyCG1Bsg9s8vqzP4ma",
  "key17": "AxRgU1682jjv3vnSkLh57Q5rRf9XCwP7udZMo9UanvZPQ7gN5LVqL1ezAKzadLFsn8Yp8uURYsPFSLjYERiWcXx",
  "key18": "2HWwgBJcLBu3A6NVasniExgGoWRfg3CXJSGXbCEVKqE1zC89domNZvgYYSZDeYchmD9CjFC4YaWcNFyCCrUkykE8",
  "key19": "5sxA1S1DLhguJXW9sh5LBhKH5quVETiv5m7P5EbqiVRVSV6tsCya8QfMQeDjon2GEBWeUoy8XKYBzk25FVBduVam",
  "key20": "NoXzYohrLGzmg3hMqas3rt6VZdqaeawUeYvaKjTpL4hBqfiiEsZHbyQoMaMcYbaeTN4PcYqe4ureCwiBki6WSNs",
  "key21": "4xvdh2eQA1B9DTWyKRCCWkSKH2QtfsYLwrYs9vgdopN8csfMBNnSpSoZL5YEkJGYV8huyVebKQ5YnMdQMLovL62k",
  "key22": "23KnMRxSGi8cSYTHogdg47PSMUFsaWyEQReW69B4qXzBqYHqvfqGjodqqAiuC9yRQgB9XDyPV8ZZauhYoUvCphhu",
  "key23": "5gM39xzhsshoWyXGZVLxfdgjg6DoKCY6L3TNBqAyt45jDVqStHEHPgaFTXrpVVxdKNsuv9DBZfocZDfkKJt4tnub",
  "key24": "jxvb6opNCbPwVuNGbZ2FpFVEUcm54f2o4p3agyitnoDNKSw2nmNorexFkiRW9wRhdvtf1GXKS7tNu6CXCDbnXSV",
  "key25": "WmjKSQFwxdy3992NjMfQsRS9sYbeZ2DyNBdKGvUBSu1f9a9mbkgPUZZATVzyAot8SQCr1TX13JqxErbDq5QwACN",
  "key26": "4GARzKovbGo537AzLKtt7enL6a4iUwbEPMkhuaQPQ8cJoyQmYS5ru2t2XSnJBhuGZyLRX6MP8Hdx4mPhmb4X7zdE",
  "key27": "55nVrWWQwqfqV529rUJrsrKzZR4HsJuPijtW4rRw3srHhMMMsoQEFn7ZafnJCdYWyupRfpJKtMRZHPTMdFvxnuHf",
  "key28": "c2wVY91SWXnGNNCVUQdn2sSa5F2AnMtgC8RMmwZAboWR37E6qcdEQrF3MDZJU6dYiHJ2TehNhq6agHBdjxkm5YY",
  "key29": "4FKVZkVkncJXxvF8GjtSJVA43x5jRs71xX7gY6u4rLrsfBjBmMhCCbv3Jx414BgxAmCJi9wrzQmbRBnBP2YKDKft",
  "key30": "Kn7FtDYCgW6x2ZXRpXeU6tTaL3tHNtsu7mFQcCPF3rvuMV44qPW2Ls4ajBJcdGKZNa39gWSbzhVA3sp2cTpgYA6",
  "key31": "2JJyP2tQQWYjoYk8YciLPsbvthTwk5Y4NG8nrVDsNTfuG3kQJBfqxXyYs3noMAyMJ6p9SGVvFUjkC4TFtBdjnPSG",
  "key32": "PRqjeyXigns44DzrZc2EKoNoWWpkX2iCZ9XEQiyRYFPBzeUjXBCAZbP9EcvMHdtco8HkJ13PssfSWo1XxkorupY",
  "key33": "qcwzqVXRCsjAt2E4btFvhzQamPy96FDeNfYb6VtVHVY3mBCygwdbGu3B4AREEyCTVqztLWfaQtYp261qZNCii8y",
  "key34": "2VZ2LkTZ4m4HMmNyeQd6k8YPkeEoK2NCQ31Gn97RxRQyXHcJDY8xZKsaX4qwqzh9gU5skDjUwj5Yyi2qoSDXzdgN",
  "key35": "3KzU48WZZVv3VJBgeyLKAUECGcAJ4Qim5zJB5AWMFTt8caFGh2HhxDYfyxA32vZdKHCc3bys8ciYF6B1QBb1D4xh",
  "key36": "3RvLEnb4QdaXBJx6pQ7t9X3a9Tskm9NkxWQCnJLxpFLofxHhYoqUMh4X9ksrPPhaVwotuWSr6v6geHaRaXkTjQUA",
  "key37": "2diQSEFp4ngY8QU9SYgbtn1vHjK2SZxRJkR6vxsWX3XJbwtspF2oPftc9k9E4vYjsrcKvEXnpKMEevhYMsSdkiGX",
  "key38": "5Z1aEvGqBmrmGqciP2pjNe2oCWJTMLMYdM475NQwnoekCVsxtu1ihPUrMdSMFPUtTc1QuWvpiLqLusi2XocZi54j",
  "key39": "28QA6DaqVsc9dRWgxxFEfTAR1gyHTs6hNXyQ1aRBtCNUtNbgJeAS5prH5stPfLJCoFTsV95CQVZZ9UJUQi1d2L6j",
  "key40": "4m98P2Vhsd6xGTTPZjaCsPA1YkjkGF7tYbHEwVjecfQv9CPeg2UieAct2wFbzWaF2zgEarsuuATB74MSPRRLQzD4",
  "key41": "259LSXbBUDpMqqAygUcXQEDRcrVfAXxKpmBbkcSG1KBdikKntBKo2EEnt9VjnpkAKtfDvJGr9f2m9H2HKhAJs7et",
  "key42": "sXxe4y8DPQ5M7oBK244YtKUdamPxns14a1WLxkbXt19vn3DseMrgcgSz6iEMNw2MjCum8EY1KH2i2kkUQST9mXL",
  "key43": "5D2WLSsMFEWSTEMfK2P67Mkoxs28HmCUeqkZfQCba2QNXyLuRoxb5hgqcYyxrEhYve9QWp41KRMMD6rKYGgb9xXg",
  "key44": "kZXwYkvDwD5fF8JL6SSHxASGSQqRjtxDs4UAkccFpKY5mHGRUAFAT7TK838v3gTfWc9YXTc3WypPzavPm7uT9sT",
  "key45": "3Dz1WZ26GRTwgZ1W1dkpzSBkWoFurfnk6YMjNrPc2nrmagPEvtJPZJBcidbkLgAEP6hsqbfH6YfCDi6vr2bTqu5Q",
  "key46": "3fK2PcqAKXwpQYnMftmwi5FVKMNzhhwTwsBeUBponcRnmos2jjUv5z2816XFt88KAtaGZaRBt24r9HZD2pG4mVS5",
  "key47": "3J25pumJEofGGPzWeidvH8kCSNZkTWEEq7JudE4n2nasNnM86QL2uucAD8zwLiHHvsytC2h7g3Esw7NqL776WCj3",
  "key48": "yGPmdpcdNEe6hUQ3iHL7jzAyRkibpTuFezCwMMMmoDnKxDmgNGuAkPc5wgDVQ8GZkBpAFZ1sk7Xv4FwR9feZCa3",
  "key49": "2bJvguMFkVRwfuzcwmYWghMeWTETRST5fQvcBHLpjfkaPkDJdsidJPm5mfdgRHre3HiuWiA3SXKC9zivhGXXqyM"
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
