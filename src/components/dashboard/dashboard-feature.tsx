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
    "2mZYLMxsxHA4JLv8R5KLkfSHACorg6HUaK3fFJVp7vNkJMgtyr16mYgPj3kuPs9tDZwKzCp786gEQF1taCyScHj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUqVR5yRyGegfRvAjFQXN1orFJyoSJoX6NFjUNspiF3wpDDrLFqc3Kt7nsysCmtaW5aazv7j9YFj8zkMbDjZyFc",
  "key1": "593iGhMSShyx3NGZV1k21A6fzwZFf4CrzLGkUN7CJb5haL2tTCMXtGj8AQKLLUFWKJkyEEDQ5DPzP4USeBq1MPWo",
  "key2": "4UA63XeDwkYjKmgF8inLKE56P9BVW6ofCTeGTo4kxKYczdu6WV2TqpgELE2xsHQSfwq24gFKGUJuVL5xZirAvTps",
  "key3": "2vHq2ZCuwPhUVfofFQ4PNXpPG9bLZ4zaqZUSmMjNdL7TF38RAT7hAc1tTFvse3a5X4WSoD7Xub1UGHzWLKvPs4zM",
  "key4": "2NMxtbwkSe3EB1Y8UAHm1ChcCPKb7Na9VjQo8nBGiKE7wfnYiQPb9ZPkFBJRRbctF1pzzWxXhxJYCD8qAPZdMJZg",
  "key5": "3BA8YEeGpCctNQjiMBwX1cxNcBPhh4nwhsmMQQb8WpK7Sbb4VN2qWyG3YnGxeccQYPfj4jYc9dyK7FGMqDcsgsN7",
  "key6": "63cAedhWGBR5Ar7mESeij9FzDW2gTCiPNSN8PFgjXX2abgND2xHaKgcvehDtybndLPmDENHCT9xTywUFXDT8ofj",
  "key7": "4MGPwSr84JyTyqQzL2uPBcDfZtdir3XoXB7GC68J4Kk5BBnVFryc8hZQGAFCiwLLStk2WPTqvtryNEmdTZb2ugiV",
  "key8": "2tQWU4qVDRaq8yRgDJLjMV3xVyEBMMU1KQ5ZpLJBLjerbz5DzabTjb2dsdfJen7R8vjBCihCNKnRvCqaDjd6jdEa",
  "key9": "2ctxsR7SjzeUtSLv4GjAoxN1Ebn6Y9Kt6scCUcwRuNm8Y2E9movYfe7ARqhPEceKNytojzSEgViRr19LHCSwCrgS",
  "key10": "4qJJxXgZLPDRewMAHfcm4Q4SwBNS3hsnoiZvoC9Xj1FyLGQNTpw4ySTGfcFwUWo7VLJ51cNBfjwbAdwXDfficumu",
  "key11": "47ULYHRK3z3du46bdBif6AjaPnvHhNXzVezQWeMdN785Gh19j7P3BfEX7jKYm1J9c6XCGj2S3L7PSQpTTMNaA1Gg",
  "key12": "2i5yVShGFPGp679FsMoW3F6Pfa7an9jR2QenfRMEFwM5vARvvEef9DD3ZUK2aRdhT3VUEeF5ih9ZtJWiez3CcgXz",
  "key13": "5e4FYts67moTs7b2pYMLu9Xg9c4FV7RCBe1u9H3tRJYoBuNKZHgzvbZteA9uycuLvBNZPcwh9i49YSBQUEZj18Jh",
  "key14": "3kec1M82zBE9wRbFoTQmBZu6f4f87yjgAtM21UYHsGYoKXdWhaB4RebCGFzHaXU4n6Ju9kBmA5gffwgwz4XswjQ5",
  "key15": "t2GSoTs7Qk3T7NxUAoaRMSB61XAQzAMvpfp336vzLrnQnrKxx9FwMjPS4SELQDsJLbFJCNDbVWn92bTZ6fZhHcL",
  "key16": "5CuDsnVSGFW8UHWGbUSk2jzJgtqhMMbVWnTiLwDgHusBbTzzmiRf7M6KcHL6J6DTT9p2PGsrBW7BRgiiaPAFfDvV",
  "key17": "4WV92ZXyxZZuK9hwxe2stfexSkiyoE7CAcoGxBh8Tbc7fvLpaNLwMzbx3Q7SJ1h8HgyGNGahmwNn5tfia1SD7856",
  "key18": "4QtzJUD3wQwffiRUSc9evLSJqrBX4pyJEDCeHkVxYREwMHPUDjzQDZgpBYBDheGuPhnMibNJ5W8N7ot3DqjTLQjX",
  "key19": "3dxTzFtVgxtcUuA2eowzGjbEM1xcagDTUb3CmL5QsU4Zd5DRWv4ofeMWaew2V2Kg98oN31DMpjnM3LayvmxSr9wW",
  "key20": "42CDMKC7hbmRfSKVpQdLLes7f1tdG6JmrX9CRAAEvtRuoo9Cbva7dsR3xWydyzK3sXu3cETkH45GUE4GuDAmmtBJ",
  "key21": "3QkBRdYe3QXtfvzEimtJo5vkDp6ojGpEpeZf9sagiJPuk3gCRvVMtVfmpjf5dxordS5QqQRernW46DAsM8Y37FBz",
  "key22": "4H3JfdKzzCzR9QiqVgvuJk2vaZPw1oqnstTk1YV3ci6DA99LdMGJ1f3Yck4rDafv2GJ7uq5G3RyjaENUvAWqa5E1",
  "key23": "KoMnZ74VN1tkGdpqmmKugKUMakWM4UiMivm3UiLViRBfq9EwfWhCbbPXcLKZEEsPRSzCrfGHzw8TaxBc7ZxAJ6r",
  "key24": "4gCj7453rm5kXLCjpG4nTjTZSQXcCtYV4teoCYorzMtc9GbPd9LChewTgsSsCchcRjbkNxFhENJoCkWTqicWfgxW",
  "key25": "4dBtn32JJ1HNcFvbsEHtnuvwS7xZDFYSgZLUFiTm7mi1pS9gc947sS4MhQGUe7kJB9HnmMtNcMacVhrZwEPYLdxP",
  "key26": "67kR29osn5ZTDchWuJzfYRYSVP576P6M2V8XjmDA3n4Yp694AQEohRGoB8hZpD3YJJe3CQDBp6c6ege5M3cdB4wL",
  "key27": "2HeJd7XgyjvpbMeJfTikgLVeWptQ9WbdW9qsWFBaBsDJMFDEyucQJYQiDKuEJe6Mc6evpcKtpzNumCVEFeAPbShb",
  "key28": "4u4NmKnvz6qZvCXHhfB2sbYD7KbVvLEjdVk2tmrqe31y1XCfjAZuWQAc5SJNS8o6mPmrPDtJnA6nM8WDYhcLpDir",
  "key29": "5GPfr8HfEofuxL3NXxHdPmRAX3UqmnMxTJmbBEPRX5snkQgMFKyS9y4sDj6ojiPsCkvyKfRS5TY1fDQaisUfPnMu",
  "key30": "5pG9PJCdLjVZkQeMHK8vvNPiZKQPYJVwtyr2a4T78t9UMPcGMJG62c7TdRr6XMwi9Pa9ihBumK46Dsk5xxVqaac6",
  "key31": "3qw69eGeM2p4cQY7CtkNQyjrvwwXtHeJ4g3igcTc238sxbXk5TfMpAHp9aQMcAcEXDyJ13c1HTCfBEH3fqWpbKZ4",
  "key32": "2AuVDLdpdWjrfxVt18WhYZwRe2dSZ8owYocgSxNBBosVch6KUem9zZFhfA7uyPtR5mZFTJgb2xgkV9JgLzQPQwqb",
  "key33": "2zY5kAuUsD4B21PwovUwyobru7e6euKuLBuhAG6LykZ5BU7GPSju8J4xq17bWFpKToSHUXAJsCPEwVXe1iwpqrED",
  "key34": "2JHWzymb1psEAn8Awgo2uDoemYG8VKnjaBpEnM2RWh7P7tVHtjbUQXXLgfN77ys6zwMM3PdjkXwNEa1Y8HUGSo18",
  "key35": "4RqgMjWkrYU51DhSUxk3mgbrj4QDvz7ZFCPs9SLDnX9YY8D4gFkRCQfiwRMdcsDMXBeMJerSz8LBWzvjNkQESkRC",
  "key36": "3iHwVyrw7CU8gTqbtkackoJiWoJDcWoCa3quJExcyjfNMG2PpYrDkafr78TWZ6LLqYDQqBWayvtmFRvMBYuo7ZC5",
  "key37": "3wywLxVSEjCreQnWXCV2svnHKL1MQ8WVUpxPSe8LFJ8Tv8kh3WZ8L7gNTeoDrfhoaqmMFEYdituTirD5socwUGvz",
  "key38": "2LihF9oMUd9wtm5LBtcWJgNtVWtTSNHaGNRHTJijQZuS6ebwtKY7EpDsTYKbHYWMXaP2NJdPp5rzvigMjkNsP9Y2",
  "key39": "5vXcrvUf4hHq1KJG3GSCiMDpicAN5neZ92Rn7NMasQPh7EhxAaVrkGFgAbWJEEM1Ac5eAbroDphdH3mZHPFpW5Zx",
  "key40": "4g7dPDTZCusjfUrdztvwFvaCAqUotYv5pj22c9yjs1oFyRobB7mjxxibytCvWi5dfY6QahMCs4scBUDykJyY6Sg7",
  "key41": "3y16VrqkWEzcsUEdeYDKPhXaZ4PQvqn6uAE5TPYt2gYyLQDHdqRDMwJLsTGc7AMiYvTM2fadCuDX6GxexmgURg2p",
  "key42": "tTSFxLY2nNxKeWKNgwq9NLCBC9ydEdDMqhhpTzr6hLGiRHUUUS6Hcn2vuyHGr7ynjLy6FA6RkqTbUTaYEAJ7sW7",
  "key43": "3L9R5GSLwu9bysKbzfgt3EWBSCYyw37vuNDWihhEGVc5oCXG36WjpT3g7fDXDpRyzukYGVKvusRvjLhEmkbvv4XU",
  "key44": "5KQ9gxTsQRBeqtrXquKusKTnjydgs32eBpa2Dd7SoNBtixzVgAQpkCvMGmXxouYcvqWActJqG9jpYCruXFseh1tr",
  "key45": "3LzBw6yk9muddT6JoEc4dWaLCQfhe3sqF3CNVzBvecNNoLyjK3jNHnZ2VyQFG6TTHgdnGeitVCxw8SRhf8jbHg5U",
  "key46": "2HHoaLXrPfT7VgXX8UGNaMYk9ipTvoPAWikL8uJs4WsityHobRuuFzWpNnWvKxNuVtQsjwNXAvFsV5sY1DkmMKgG",
  "key47": "5XYb4VFLrrXdZC2bXZs2PihmWzzGJn2apKdP8syKSxT9m3YTsW7FNgwvqEunm5iRmeDSbeeUJLqucVV3N1r8zpsR",
  "key48": "5CvpsXcv8cW2CkmeuFZvPp3KmHdCrw85SrSMS9agxy4pNThSCY8Hd4N3b1WCAty5XZDXUT7uNJa5wRZCAdwi2WKU"
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
