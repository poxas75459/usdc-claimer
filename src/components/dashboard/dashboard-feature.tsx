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
    "5LsMdNnNqCrWb7F7rWLdf4ShJXTtuQ4rMx9i4thHnYRGbk4RofmsLjD2p3x7atohLNDeuY6RBiM7N6gjDcLgkxj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYL7zjsPuqta6u1yNZja5nZooKXeGZSLfdgT8DbgbbzqRAbXkW3P4gCPbLRHWgdEETSULP9C5Zy9TX9zkNUZxKs",
  "key1": "26P4LEZzGSrBBNt4FRGa8HpHRDTQoKyBxaiNFn1WER9rfRywga1C3DkXMwLpAh16FB4eBWyC2hJ43Pe2dqpCbFoe",
  "key2": "3LBpM3d3auRC2uDdMhB16ytdsjCVr8p4AEpCMfug6UjdjhvYMN9ASvhEfVzn26dp4D7f6P1jr6JhUZbGLzhogPuu",
  "key3": "4SNRQPUHC8GNgjHiHTkBqwMba3roP14mE8HN6HfFM2XTXqnn2BBvYVRz5YVJXxqHE2YqGw49xpat3V3ox2ySkgaR",
  "key4": "24oTcAVGZvg11puqcTToi9yc5QGQb6TXW4RnDkPWavBZwUwGeMcSLSex8iWQT4wGB1puKCYgQReibCx2zBGBVqxR",
  "key5": "4TERQCUtDFjx3fqkUgEPNC9TYTJ3zcsrvtsiutwSaHiGKwrRQ9ayQ1ofZmvKLqtqkvBRkVjigT7tDyN7cyCdCFQg",
  "key6": "3WRAbEjEUSgHJUqpZ91u6kUsRBVaaJSEUGcMeWudpfezW52b84Ri6Rs57VguHZu3yJcDcc7wG5kkpjKmi1bVPTEo",
  "key7": "4SSuwmTbzGwJgkZka5nw6dhyd7MSW8Cv4RMq1ABgbLF4zHrViyiuVW4z6SnnLHG1RkUPSZPgzYvX52MeqBg74q9w",
  "key8": "2sKg31GzGhj7SWGREzesqhV4EACD82gZQb4JJRpMbEP6p9T2pWMtHZhTHKsb3A9GRrdwXw1TmSPZ63hRG7TRG4Jc",
  "key9": "38HgLkRqshtwLVrdWbSaxMomU7Z4dW9BWQ7vk6uJ3jdS2uFXaGtJFWHEgb6GPnLM2vFuTunLLeg75YCn3iKAnCt7",
  "key10": "5BtQgbmZZhuBFndSDdxPanoE9byawu5syQ8wnp8rZ9TKb9XHWvz14kZxPVF3zKjMrFc43pcdeds1ouhXrBa9Uzes",
  "key11": "4moGcuKbAkcSKp81q84fWQe9jhXSXoonRsNcgdZxSePeQe6MvjYiF3bzbfeLGnE2PB4hnVPKpS91rToSEgHNmtdG",
  "key12": "2TcNZ5dgJFueqBsR7LLEYgLo8stvxwYDPLxF1b817HcERfPsiDDSGxrWHFPwem8MnHXbXUAmqpNqhGhxgjZ8jT7Q",
  "key13": "rYbRP9FTk1L8JhsWctNPinppfoyeTtrFgiVt2eby2ckLeqPCr4o57zurnd5yozmg1GbjCqdASb8HX3NkqxqGFuG",
  "key14": "5baWdTT38VePgKrqd6i8JdrZmpVJYUsTjXncSaoPXLjsuzANcnHSU1JPUiZ8HHjGUxAtXeaMMqhg1coPQQBdUygZ",
  "key15": "2eeCGMnu6kVQGq6ehTzVqVE4NjDY1nvN4V9PSeuwZxy2RbaGTqnCT8whzBQjSZk3rPTBVD7RfX24oJnv6EEcAjsT",
  "key16": "rrSu1yYWPt4cRRWbYXyoWPEksmwPLGX6vayx2Etu8krRuaMZjrWRcWkKQo6Lxb3MxBiDwpBzwq837JBcZiDrH5Q",
  "key17": "2S1maV2dYka6tDiwf337kfCnE5keUvJFSD8vRYhZyyuQBX2iWwEvEB2YRE3qAVU7qB6Wn964nmgZ2RjFK3Mn3tLR",
  "key18": "2DnXNsasf6WfjPPPJCwKbA2Vyq1kMB8vu4CuVPonbXEqyx6Ck8xCQpmQ4bL4EVYxPjb8Mbzrh1U97gxt87jdReCc",
  "key19": "4FpDMng8hGZHdGvvE1TsXpT18oefdjaeMwXVXuoerutcXpz3JzNwryYra1fVAMAznoHV8LzCjmZTWSVtkEGHiKS3",
  "key20": "4e7CsiGEEAyLx14LLNGyZUGmJ1EJbSqcae6mvqXLrsjtASwjrNb6oG5FNM6SwufrSDQYiQRiYLcdjxHhNFNhwHfF",
  "key21": "3z8muboFioBub1dxMjctqkrcRWydHjYApTVLieLQY2ppiB3okP5LKHW7q6x1k6aggFcoQ1KjkCmwBTMmddGSXFGo",
  "key22": "2sKFMWBzFiFspqiSim3DBhcDhd5omkQBDJRNWeVGrQ7xxjxWLR6otJdhxQrVzE6Dev7eY8SfTZ4LeZdQhnA7SmvM",
  "key23": "5Vzcu3zVxgubAbSgm5MRsaZDRPEkFnVV624a6yUxMGHyubQCJE7RyGiqKZqSBnpxnYHPPax6KKt8n9cGcZmmSvP9",
  "key24": "dudakGqYDRS79GZn31VrvfBeUNyi92Q9YZJmJSpcGcSW1cXLRZ6bVxZhKTm1k7jUrxuPp25ZEBU8RPtm1H6MGmP",
  "key25": "4BRXrRZpymWwV9oANxpNkty6PkmWYmpps78WEyRUifAebQjYc676obdUrSGrCXeSDcwJEK3f1J4TttJG5HGsp7bS",
  "key26": "vkDmdyxDaNpMQdYnR8CQjJMQzcytAV1X4rEUApZW76rCqBV2CkCRdB1C5GwP9YMtY581nNEMGDrL4pzcP4NVz1D",
  "key27": "2tMFoEBzAcRnHtx9CKDaQfdN8oSA7uRtvDXBjSYfqsczanVyombqBZFg1bLHDUcYFKwKXX9YerrwMS9NQUUz1Z5K",
  "key28": "32VoYkdaQkwMQzZNQ78KmCui7zwroBtAvkvrqX5FLfBfJoMSNfFn8PiuUCKkyDztuDoMHt3UycQdhUcX3WywrCDu",
  "key29": "94tBNeHqKkX2mU31JJ5nXkof9kXUqDsZP3mDgCGTPQPRsG1R2Q4RTjVxBjuqxw9DkyWMeBg6mo5PZStsTGLMQhp",
  "key30": "5HtLGaPT5ir7E6mEGkRasWf1BFLo8rX4QLrpKr95Sso2GLFTXHsFbqRuRGFMTXWwWcG1JraT32behnMd55CudaMx",
  "key31": "3Em5Fk1P57nFuWVWiLgDCx5dQKwWHGgVgdqhtwLvcrwri2bHeGXqxaoBGqxSzYjWDzhNez4EzXDjq17bgLEhYzrg",
  "key32": "4oGGMLPkcrECCRYa3W1Cx8KGwYVh9mmbzY2Ee2aj3iz6wi2N1mcEixDhRK5134gs7jbXw8ByDbqceW2FzjqtfPpt",
  "key33": "2jh1PBupoFHgX2FfjUjynRR4WjmCNG2Ha6poqpNbRnst7tpBoJ3k5Cc1oP3DrB4wNi2TYBToMzN77ELFVDMyeiud",
  "key34": "22pgNnRXSht931xvXNTqVdURsmigScqaAX7ZiTiFFhMma2yaxXnXeuFcdEEnLUNhcoxZpmWoYpo8cG4nZR7agHXZ",
  "key35": "3FgpDtxx6kQQvgd86RCrGDreh3dBu5EaKTQJCDKxN6qUEQkocVQPUD35v5wRxb3gqaEY8ZakC1Wmz2dQu31tsF16",
  "key36": "4iJMNi8WZFWjWpbwBy66yYqhUYnZMcy2Y5apDufHnw37F6Wz6KEZ1fKKTkv1QKAqjkkVAqcQzLKSyPGoHoUM1nLU",
  "key37": "2RXrdRGry5wWC3BueUe3JP1NuNZ4FbEjBDwewwvpk493vPABbAqmsL8AoymWfWpV4vrvAX5MGqfQMDbPegyfqQA9",
  "key38": "4zp5fKwFJ5TznkrwToCF735UttBFbESHiNZFxQMB8D9gsvM7cvbJKRmjjxJomQ6uF8omhTQyrnE2N5BuBeoE72GX",
  "key39": "3TWMVTvA88gtTN3WBGZf2jLsvJtz2LYunKGdPuWpW6eiV2RT5vqd2tYyw5ifePbSUq6t26YxE6Pbx2uJsinyCjex",
  "key40": "3WNeWbsvUeozPgWbRNWoWgTwniq3MTsUVSGGt5xGxQWqfLEsM8U7eyRaxH6J5ezdGb4kLUfj3WvUoYY3VdBHvxj7",
  "key41": "2aGzeDqVRxGdwhwXcMf5b88HzHHgpZbB84dXRTeuF62Xw34Fj4wk7UQ8jFb3eyWxk1g8iSDrfRWpYPavmSnqASw6",
  "key42": "2KJYxqevBmn9eNu51w7oYhz3eLeRHah6ymgA87TXj3k53c8cRinJ9WhELZFFhH55bV2FwMUnBpzAStoNkgqabFvs",
  "key43": "JAdf6qjKnQ7YNs6E2zxGKAHtHP1TNWduMxeUkSten3Moyz23Ba3v1vmn1tZQSwq23GQwgDaju2m3UzLWprpAB44",
  "key44": "35W7FW3v4QfRsWoXEDuD3oZ2U6RZWWbEAkSqiEWxHLE3iKJxcynbLfpkyF42138Ed9LLMUQwhk4Mqs8DwXTX9hHa",
  "key45": "rYbEVBz2SuAFN2CPQUuavS2jjyywNFwzNxxSkwaTj8tN2ggBC3MhtQ338teGrHoBtNYQvxfxopPLsgfDJrv9Dra",
  "key46": "YiLuF4JyXf8946aq1ozuR2UGbyyRj7KvFuKhu1DzW6xbd6mVdEJGD9QYaMHdWhvupD8CaS6HGDJ4T3voZpS1g98"
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
