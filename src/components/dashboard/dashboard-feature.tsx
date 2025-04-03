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
    "4zotyG5kNyzQouQawDj2LtKg3QmYdMF2Y6iQFWsdm4vi9SYp1JeHPaUS2BTFDdcidepjXHAfj7maW3owCC1PrfTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETCy48FMcVmXHA2o3vFWtVovXDGhWAcBFJ1tk7ZTjsTuBLPbQiCo6XYshFJe9khNbuBJTdHb5Y3ZxQTRHsxBMBG",
  "key1": "bWDj6nxMDwMARGeXy7DKFX81ctM6jgUyhwZ658YU71MMPTSVDTVHJLpRNfhR5ZokE5LtmfXytYi5F9axdgotDz7",
  "key2": "2c9NpwQLRGFK1jiUMLhGUKHuToVWtGryXLi7vRTg65yd8Dexz6jJ1Gnw1S67gSBCT5ZH225KZqhHDxHNJEqVnPQ6",
  "key3": "3hDnAWrxEeMXHwTJLukWWiQRZHFEFXrHiA7k9jiR7Kc8qbTPn4aK28vDyVceNcyCrResTAHMRFz7tY3U9jrVroP7",
  "key4": "5URKmRjRxM49eEMcJPrrqm372kN5GUqrfqte3soWR7fmijrJfaogMSoZsNwTfb9rvrLzj1UX3TQA7ryYQT6XUYnt",
  "key5": "5Kdv1gcX31ZSJ92JEt2oiBLUR6aiU82KxmKsMqvfQ6rWbmS8pCLWHkAptRNUtK5H4mYvBdoSb3752JVSyvtNY3hK",
  "key6": "3UvCS4GGLbUb5VKQQoZZSBXP4myPM135YTCAZQZK7DPhnXkqEZ9NeVRAfg6sT2Uv732hqEhJy7YmZpWmSt5i8Awi",
  "key7": "3mP82T5Pb7jjo7NmUFeKQRA3mRGLhkrWBYQV9RgywCGako3YeJuwtjke4REAYhBDqGx4FEiEK3q3tWC4GPeHLi5D",
  "key8": "5MSJGLrSvkPgPY43JYhFRtzK3WhZUSLvCvU9NAKwibLnxcXmRyQbuhYn1gH46zgATzyYnTGpkocWV5Ty5afyejHj",
  "key9": "5HnMd5etwaNmy9pQfabDySZ2BB6YvriD84mCxfkQCErkZV4pHbwdMoebb9hVRYPDP1oPvjRXdj3wMtq1XxMQLg8m",
  "key10": "4yAwn834f7kyhA3TzDs9LzmGanyvbZ3E7DyBTTnQ31jfP8msDtuYNhu2se6u9kH3j1upuzdQyfBXRXT8EBDpUiAG",
  "key11": "39JfkGmV2N7yxrbpxF9Gz9LaY654NAJXkH9bpBoifW3sStW692miMYVHgKGfDJfi27rnP6CetgTVPDVPtd2Fbuzc",
  "key12": "51xRm5w1Vd9HoEKhN7o8HX62CEg3237yZXXBxyKH66sc6UHpYsW94mp4NwcUtvtqzXiotpPYk8nynFAymm2YRpxo",
  "key13": "tNSpTXYcFLcnWXT8F4G7Tyui9SjFNb25jp4NHWZ6J8GZWDPxzd1eA7aMnvUCbVLQgnCmwMDzVc7P2eaQNvYgWmk",
  "key14": "2rty6YH7dUz4zo87Lo7GBT8nBDK85aSarMniERkptQ1JUrYe3CZnyMf4j7sSjtLW4THBqGrToFVxMS55idHfuJWX",
  "key15": "2gwm1KVritkqiCd1ydinjZuTmb3SYVt3Wjibxwxtm48dm6NDyBYMEKJD5GtBGAGzdxuf47chsQDtcRbeRNdcH4uH",
  "key16": "ZyTBPpmEC2VAp7X8fRG9WL3Rz3ktXJipiaM8R9S1bExb2fEMKNd4ZEz6vt6MLvZgSE8UCT4WCuSkFFc2XQqwVCs",
  "key17": "5pRRXStZsJ9dHUZgY96sRbACxWPRRhxJGmu29N399LhkJNpQkUvjBFmKdAy4cznbGMnDC76WijnYJMNxg8DSQUgp",
  "key18": "2JQiXw25QRPRUWQjHu1kTvHMYLa8oAyDaPc1aoDgEnWfEBjmV1sotqc8g7MhCuDNgSsnjjg5EdLggJujULE8WgUF",
  "key19": "58LR1ZgDddBAqb2jgnXTHDaKYFjtexZkmLXp9fFG6qaUv39hBWDFW7Q8LU8ykA9qR5YSFY7BbbPdkddTVcXyys5p",
  "key20": "FrZPk9mQxVUrgqbt4q1UN57SpbDMqpRK6Ck16yLzUtUKRUJY7qEWkkER7mxi3eGbosfaXNJwDLobcGh9YetRKe6",
  "key21": "2AUG39LaJYwA8Q7kfs2vcSRzictywyR4xUi7Mq9QU37UnXx5dr3xEmucArdxRsXXPRL3wvWAeguoq5HP8VS15Jqo",
  "key22": "3yB8bCmGaRr9fWpNpY5RtxCh3cu4LjjHdc7R3YkRJSBnfL13bc9QTybYTms2LmSjRPYndwZuvSNsCVmApRSxe8Ju",
  "key23": "4Xero9xbkXV9sJYB6ww6TsKn6H7xnTWRktE5AV4g5kkcjmjxUAvYKcnqgcwhcxQHQEZ1eiwkdCnQPTghdTnKYFF6",
  "key24": "5FrPkD1iDMfF1joBeE7rqGmEFhESG2uH1NqqNUcqPKC6y1gex9f1ZZcFJLcdXQ6p7NjwFbyeZzBJ8YuFTUtYtWdQ",
  "key25": "3E2KmLoqQEPbXG6xXotQW948kHXjyKTcZkRZfNgsNazdMU6StGhhyChwzTDfNwiJDBDJfHnj6QsvtWYU7G5DiQfH",
  "key26": "2wvptKPbXMqcfJoR67Y5EyHPXSizQetKgdGyCntNXYUueRU2HkNJMq4xKzXzDYR6ZF6PZ2pttVYLyyGaUsxx6N3Z",
  "key27": "33TnvxW8LhZdGDWaZVm3NkseHXL4ybCq7wfHyr4gy5HJjwKZJmEmLpbz8bSD1PTPHRVkiN9Sic8mUpc2kZh1Yr3a",
  "key28": "2fu6JT31L2LeT7cjmHVTPeG1ZQnXBBMe3fDWoKK4YeqPpLPe3WbMQVnyhRM5bfeBLhGftsKHpg6EavrNPHTQhgxA",
  "key29": "GQQ5o5UHksfL1QZVAwkfZ8t9W9vMHupBJdgEBqTnk8XePSuuxj5b5YZa7QzXSWpcFM12UTti9eoKA9KmNmHwPsu",
  "key30": "2KEFsL3QbkbtCqR6ubzasZkyvjtn9smwyyYNM6KpxASnyXGWQmgSN6ZNBn9bPsLd7SneR7m9tsmYaDAtCsYa34NW",
  "key31": "3EoXCFd6WjScHAjcaA5oH18JetVygLye577XcNNGTpca3HaMyh3xKpXS7F7uKiHRPaUuBURwmJUvKGiouDxpQpDd",
  "key32": "4x6sSDThw9PUbnKgTcymjTG59oExJDDQbG148MT7a5yQXRycrWjqzRCC1LkJL1WZ68Z9AXDHQgUC4bi7h4qazSTj",
  "key33": "3N6xhTp9my2NB8pSGbEepJCcEAoGzFpWy1AjcC25kw93MUshM3eSgW8zrm81NPYRT6wXubqJwNYTjqHF9CisZyYQ",
  "key34": "4jamovCR5QTBD6uurHUv3ZSyNyDsBLEH1ZGkic6ei8QUH4HfDZbrRBBry6kPvvt8YFt7qYJNckEp3Mzu5BqCzUJV",
  "key35": "3Tp5KLUjaNCtdMKFFN8k25xpVMdprVLN4583dAbGQMf9DE7KS15KXBrAMSdmTfZtzrpbnPA1TzjC79QtJyf6Zs8f",
  "key36": "2M1ND9qXFif3XXxk7B5AhUQR2XTJFZEjbeXA9cQVbvfjfKkBtaqrYHk9hgf5TBvRGTg2i6kfz9d6jHPzzPds4F1j",
  "key37": "btmYtHpbwzRJGC7WAm4wFzue4HjRddw4XQ6eiGbReA4EZ5wbZEGp2TSC2fyxhJzVpnFYusWnuD1opAduXcpmGBp",
  "key38": "3DLPHCTeLUo4FYbHguQN5qGzwwEGz9TPncfAKckr6YgNtTLdkkiiTGrUvgMnVua1LsQY86DUUdx7X92MWUXJCp3y",
  "key39": "3RjbrJkdDTbKN5Ln19cXennAp3HH7YCjb1ESjZogm3WpXxPpbzq5W3ac7RG8ybJ3sq8891gpyc85a8m8KNQ8FS1K",
  "key40": "3nWCW1TfDck9KsQAszQ1DPu2FHQtLarxvGPkytdVWomtkh429UzxKnbWy4MF6mssRhejbwVv1X1i5ofUXP19nuqV",
  "key41": "4Jnv655cADJgsLEtNu3c5XNwvz49Lh6RudxRCsDZSgo9BQSXpCsj7Ysv1cKiRk7iwW9FjavFZCV6857K5fcotMbP",
  "key42": "3oTw86GpeSHnuJJNsGqpvTBukKE2swXpKCoKNve7n4gdYz2T3SMxEzKWZvFN3SKtucs6bnrkQTP52JLeS9Sw4nvq",
  "key43": "2PLPtQJ9tuzRoxN95N6gdq7LTSXU8knaYcGeGXCoMNirKfFh4KJmAPa5NkEk73RbYpQdjAAvqheTyAhwyBjiJXpV",
  "key44": "5FAabZ3JRnQqqqQCS8c7t6TGVsJa6Ubi48stZ3dA3woAT4PJRKPoApPngcuzby76BJLfXS6qni7RfxACsajYcMz"
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
