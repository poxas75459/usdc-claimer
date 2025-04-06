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
    "bdvxfr3qUvwaWS1QFpEFE9UjCpJhvYLqZ7m2kf5XwgcjZPs9mmQPqGNJbNvo5MQHzD7y8BL4TBmjDLVVoteVcNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rjoPAbY56vn4EmnfmWA2qFQyUUEMrntFGoFR31VKPUyZn3t4hbyWcGcETDrithTHsGw7xnHUL8TqBQq69kHbUB",
  "key1": "3hLSeqrwLm8oZV31oGRULWawEYff9UrofSzh6zGETEia2QsPWUJfNVxrSjt4nG9FwjDfeCWqhztaMC6YJwNVpPfX",
  "key2": "3EipsirBBULHpnGLs3oot71ToetHeZoCB95dvREDmsZ9fZd3A25seQ2z4kSGDtgBVUiBoJazXDQjXGyPzo9GWHEF",
  "key3": "4rUvRqBVPPr4jGbcmTvupVfVMWbsQFjCv2aUhU4wNSqnBy4hUynHqNXF1rJNu8iAAPZfLECvUFB8bqtjsd2RMiMA",
  "key4": "5fSH8BnaVELGCeVzxtYAa8xvZPq5RkAUp81dePnFWZAfuc4r8GpE9TtEqkDhwedRy7GH3eauQfjtYpb1EN5PbpKD",
  "key5": "44YqpFTz2hJuKBCzKuxxKENSLgULYgudTiwg6y6xvPyuBhtgpcHjQxQBCaFgmFPduThdfJR78ANkf6zd15JDUAeb",
  "key6": "5sbq986hvCFYb5HXqRQNKzMXexQAhTRceVxSEx2uZUPSUG5WXA8iyuCW1Suixd48B9t9jzodZ9RAYJY5EwA23Lqm",
  "key7": "5HFnMDPkNvNmCTdLEY4sJPushxSCSXVo64bY3aLYyBrU8cw625kmyvSh4CHuSrXRV7hyj5nqM5KGuujTbrQZrekT",
  "key8": "4yccTVwiSiwymPjWn1AfzvDf4T7rxVvsVABLWvhnVAEJtLze1dRLKJFPtKRq2mdp5wxs5GB2F6MtfF3iKWJhKhNF",
  "key9": "2BPR8CbB5FD2fQwnSd3GhYw7LdJ5hXt4x25BaesA5oCuZ6C73xts59rTv5SfGDFXiriJqGXicUbEg1kYAU8P9q3M",
  "key10": "3e4UHymF1Ea8C4Jdzrd2euNtzJzYPbXh6446gubvXTdyY2v1KFeighHVkhauiyUvAvAMb9ypaCde8iYc2wXZRWMd",
  "key11": "5bhz112yiTcpwm7QhaEwHHUzr1d2oZHgk8sLcnKQ41sE5sR17MbYUpQhWZeXfH3Zj1S6mRUnVXhkgtH5M7x6SKyK",
  "key12": "2qiwdCxHocJxtLhc8XHSWPyN4o3UZySQe5VxTSxYPyxFjahmvGrz1u2DkjHeiYL91gZpyDdfjXCoccgHQ7wscreu",
  "key13": "4BK1Ht61y386Q39yzTUHnL2cyoV5YkA1iKD8kGT92W3KdhrfmT4nV7nfXnhLxUw9S1kuC4z1MXnJLcyuE6SKK2ZL",
  "key14": "51h96jSahJuqw6E8juTm67Kmnz5q1Tv8origrUwGVWW2pfSP8iVJoqDwb2hZqqoGK75Zc8XwBYFttQLcRMQTnDuK",
  "key15": "3yCSHQPhwLVF6sc7jVB167esrnWYN4RiVN9EuCiyDa1oDbfqkPHvY215MwpVJqFEjoAg8u7KNdKs6Dy98qj8CUBw",
  "key16": "y9JDXjYwYwH5P3hYEV3xA5Su1Zc9E6ZUMhH6AjLr58unTGWvEzGXAsFPdTGimFoQzE3KwK3d8wn9QAoPMk2gN6M",
  "key17": "5qh6QVW8ZJoqjF5Tptr1NTvRv9agZMyyoELqj7nDTUDt3jH8iy4aahXZsnpu5yND8AnagqhJefQ3npVHdSSiTS5r",
  "key18": "4Rq4taofAogLEAs8ceCgENLtz6wz7faQPqmzBzpUeYc8RjcnSdkEL48WhsqPzcrxemGTXANB7YcG3WC6J3ZFqbpF",
  "key19": "2wHf1jhtnjRrSXDzxSA5fzDQA1Nu5NS9jW7d7zqYigfz4rqSvkwZwq59h3sBRgXZZEZJbZTMwi11o4FGiVmocwdQ",
  "key20": "92dJK58KLLvSapMv9e6rmcrsDAj8ZKcw6ppcDiCXR3LKoR5v3FK4FUbzj4495dDmNTDpJgxpo5DTSkRgy6G8GUH",
  "key21": "27cfG8qPMtSZE1QQmkJLRnX6P1ar3jrbEed7fjcnJ34FtwYxGt6isfiXVP9iv2b61qJdem9g1TucZYK9RaHrjWR3",
  "key22": "2ieGwjWi4JQRPFSE7Xeg6gjnfqgarU4rdHFSv4FUzBnJm7ZMuW4tWpKE2xEANZAScntfAa6djgR36zgupN3BSceR",
  "key23": "Lx1oSmsyfCWpx2c4V6dfP8b6xCStMDtCMw1UARUY1QotPouPhhQxmWXbm4VkWQ5PKx8X4nkSodqEVjudYCbU9ux",
  "key24": "67ZERj5nY4scKsj2qH5xq14BTqGsr891nTAZdQah7M572iSB9sfE4V6LimbqeR77T8HSAapxrDcive866k83zHYD",
  "key25": "5amtKoVKmfmY2t2w4GBtPgzKjBZpfRr4D188JzNdEGrFRx65uRGPHp2sm28dsVpaqrSa9V2rHk8KBwc4tCu6XMNo",
  "key26": "3vgLZitAU1mB62ZM9eGcbShe7GDxHpDLq7Chie75d3aXFnLMRrvYPD61BnyxSuqutJ411L8D7RZYUjPD7mxjMLdf",
  "key27": "2bfCjaGKRos1swLBsFPyELzLviDeQP2aDe2xMzJd3qo4vgdgQCF3iHfzingRAGBitSXjb3s5Z2PwFuUUFRXpMvkw",
  "key28": "23Jsmk8uCKUAhgkSYP5xKv4ba59fwybMmasbwD7ms3VcSanJyVt5rCLmGniNxX7b3kPRV47ZV6iVRPq69T9PMK13",
  "key29": "5JtwUJnPRCm8EAWU52vWMTUMs5EHyBnBHu63wbx2Ww4zvLWFoMNMW8mUMpBQF5VTPnxg6uSg7AJ17ULRVwJtzjoW",
  "key30": "52FoThQDDBXv8xbFGTBFioK2oiMGdrPB4gn2AfCPJav3LwJUek6hAw8q6L83eJnSB7fUBnUS6e4RknsyaExkEioB",
  "key31": "gL3WEPZBmeFLMC54U3LaQXnuLstH62X3nWwcfALthdgTFQTAA9ZraC4mrrAWyQEM5twxpc393bAY7UScysntptc",
  "key32": "A1kEeA1QgS6MxtrCjYSaoqq2XRu7UrBNEjdXp4uitJJeJBiow4msaVSsCLVqQsBvm4NPJGWmbokBhktm2ywHRBe",
  "key33": "5jBsFbNuWfqf92jqmDiU5LtJDuhiUctp4s6fTfyMkkCmS54i5m3p5LgWt5qaV8oahKKXvBLPya75wuH7EdcnGutn",
  "key34": "2x9Artj2rdy53Lp3r54EdY8F6aMnVL7JAzjV1GR3wzM2bZzk68q9fXaGrDJSiWwKbQJ5p8X85mnFUA5eNsyGyrvQ",
  "key35": "61i1WDWUAE9VyoSLW9XWr24fKdSLAbGTwKdzgeCguBCFkvW9nrdFgZsTmTfbniDMNsgFry1e3CFnaEYeumCqZvUH",
  "key36": "3XCznr1qYUZ2S4uJfTBzG36ym7qUpkJDWJfrj8mbXRxrjF4LotYQ4JXWwoMaD7QyRmdyp3n2MKZQGAkj4JxGEaSr",
  "key37": "4aqtfJkKgK4yefM2yFxFEg5Wa4jnMHvdrzxRBb8GHd97uKddeYZMTbgfQPWtznPZuvGa6qzYukSeqTotUwKRi3uD",
  "key38": "5wSA2aPiocEhaRPSxhpzrKHND74QxBRWUAgBkWoH6kFKkPQbfvoWJo6g5hLySQqRZg5jH6davbqTqEE9mLowvgMJ",
  "key39": "5wdFk1TvUJGspqvbffiZmwD9h2XDRhNHnwksxmq8WcSgMBq9aitrudoWtuEiJYoj9jwwWurwWzXA2r838c36Juxu",
  "key40": "4wbLmRSs5oZDsHDYBAg3tMkCfLKWCnkyQ79vVMEXNz8v2dWoTG6XfnwoqvoHK7arALNFzAz19DDTJMwyoyUMU41n",
  "key41": "3f8VShUUpAcDqyAie8HEvphfSfuR7wFg4RqLoa8G4UbGsYqHGMwk1nctWmdU1MzUzgEaRkzjebBLakSdknn7rC3o",
  "key42": "3vfNZ4btNq1X4Qoe76NuyNQ8CREXH6omVi3PxwJPQhmrxd2wJ1GicZAivwDfXnJAF2TfdBEKSD7gW72jbRfSZBxm",
  "key43": "4kaLSh1K6xp2m8Vb4KbzXB28FBKyeyvKTu326hvzFKECbSoiDDabedWtQhG8EH7H9qVaov4UZwFK6THZ2d7FxyH6",
  "key44": "4pDGNjHMDLzCTMQvkzRZ5mbq5HVgguDiq7BQXWKTmfvL5chKmVHN4cbHJA58pfB3PPaeFbzJRK1cz3bxSF7rGG1R",
  "key45": "2SYhMss9s7sbh6vVRcSBXhc6fLFyvtUWZPXTpizTnQBLV7SDiyS1XN2W8yqLxQ6BnooJ2GCTeftzTGhGyFWc4BcS",
  "key46": "48obNgMZdUhVXsJbrAn87K9UcpMj1uHXbwyYr29tWzWNZYuMX7tiCen2s3dLFm3BrPbapg6PAzsoKeUSAb79T46y",
  "key47": "3GDShi1LrQyeWGdo9PvUTYjMyRT486jXC8U4dSFVokCZ2pa5TA8GhrvzbvK9KCXwTXhCVAXSL6dAcbYAgiDofdMx",
  "key48": "2wAbFpEPVjsaWXm8AbzssUhHpHBVbrVsWBU7sn1XC8xRU8kFHqTJ7uJay6FN99GjZ5gK56JcsfxhhEEDnRkXYXLj"
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
