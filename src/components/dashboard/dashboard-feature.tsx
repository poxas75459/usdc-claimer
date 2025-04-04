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
    "2FEJKegLWkfaFx2pZY9wAnZ8vFXBx3NvF9XRc8VF9itTocuPJC7EmdQS5QgChNs6ayW5r4zi8EttpqLC4fb9u9ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YaQ4uT5zLMGM9aGuKDbgFnAzfkbeGBVtq1hUfvckyx7M6wAhdEFBRtDznCv5xgWRghhq6GnBBnHGNFYY3oNjmRP",
  "key1": "wRbkYUmWCVhphtdpKcn8onbsNM2tzo8fe2xMomcZQM1xhScnG5rRYKtVz76Pptc5TfApJ1YX6gMeLuJe2374bQ2",
  "key2": "48RQdzeNmzs3evqQoAwR5CWzVpjCFJZLsgaPKp6X8oszTy6xKJrwT3W9nn6Tazk5Erohn7JWBwCWakejAAyzNqXs",
  "key3": "2ZaAGm2sfuADcLjJ4MsiEywKxcp5mXF21wVN54tDoWxTJg2Jbb4wyrWGaNeyWkq3foPcCJMjnXez3x7VBAzfYVy2",
  "key4": "4yA2RhPd4AggvXPZH1RgW4eZQNXtPteyxs44JHVFvngrG24aMDxHR1RsaDbqyj6LpAWcJBigEKCS56Mx5DY5qkW5",
  "key5": "3SNCANRAzhG9xabaE2E5HiHnpE4NT4CD4CvDzqSozwJpdLhQwERjWVnK1U3WPpsxKhTH5YYhiFW4E5oP75NiuGdN",
  "key6": "5pZ3fiyM4wgFKSMQG4zBMJCeQUQyq7ckRST87LhVdd1SGqQCVYC5fFijbZDJ7LUb4h63Qw9X823ULdkiYh9KGYVa",
  "key7": "2oAmYZhLQ7ybWAQzgforsoiBBajR8LSHJ6Fc5WX5KrCRyRgX7tfoQHA8KJMP2qZ7DUyUomgf2dxjZBkAoYA8GE9C",
  "key8": "51NcLQvUUA8fEt8qxEp3HRyrvHqDDD2NAYh3MVvD86Djrr3SsnW7sDypPY7Rv8SMx1xRjbWDCN5z92jdWUUUePoW",
  "key9": "3pbTYTzbDQFRTMXUDt6f5WX6h1qWhVDzXu9HMDVejia5BwpnwjQ8wzXnwWCYBjY9FCbEzRiRRFTab3KZm4sQ7xQ",
  "key10": "4dp5qjAvAJiGC8JY628TFsM2dzVz91ups5bEhWrcJyKEQkHH8RuznBSYGSfUWG8h8ad1hn7SyC1dK8t26cJiYmfu",
  "key11": "ayTYxzhzKTt1mEHrSBnNqdeqcewLQ6ZCx7JQEMNvXUMW1uVEvmBS9of6MjWNW4hwoyFnHg71TWQmZbG1qs3nWNG",
  "key12": "4iZeGBJkwR78KS93ApwixTrcYroDdV6vi3DP867GproCvhrdbXbAsNgrMGepbazDY1ATbFvRXZvGGLizGKFpuhGZ",
  "key13": "5tQZojtphrLKXaHWSufHdftFYudNak4n6KbEeQaMMpUnha6Cynd2aBxBRf6YA2ZCiByRWc7wF14WnYfmouYpKvHa",
  "key14": "3a5ihStjLvjgYnBCQ1gEV6STno7RUx4Y991Aemvnu57sHFrJ8euF6YDqqEFHersMsXYu6s8oG7JuwamKyV8WK5Yn",
  "key15": "5s8FGA19y65evdTLV3LgJykyZJKDupdhktq3buzHciyUh5XgykFaT36jrsRX4baTkCPxZ9AQewP7ygNEU4sNM1GT",
  "key16": "7EiH3KJCTFa7gi7brr1ank4NANiLJENzt3v9XMu7wJgT1hrz7jyFrmgCmDZHGcjt3mD2GEvR6c9UucDXfo1VK7g",
  "key17": "3BEw7ybrkeMsAgGpH3v1JNYiwGwasnsq2J9YMgvYFtS6MV9bvKuYkB6Hozoqm8ZeWJd6gGBKMcRTBqKgh75Yhy5z",
  "key18": "5fSFYrVpFPL1jSDtwTsWgVhfsJfYTuTDyrsebNHQaXkEkX7YPS5yAPQtf5xNEtLUXp1TmGqs9gU3uVeJhS46UWvu",
  "key19": "4LVZkGRxngzB1V4oktShFhAEyjN4Wd3UUxkh71ecotu5jCyBfZPiQXnstKj9SH355WdYPNCiUUjcqPXfsgxVvr8P",
  "key20": "4GRUhx6wBBhC2MJSY5DFcEy9oSdKLgLeZohL4vvXLrKQgRy4T9Ed93EJtyNe5PvtALtFGanZtqeDX95i5Qt4nL87",
  "key21": "5CXyLMt7aTU9Ha54Ak4f5kTqSfx7WHJcyocJS6hDKo12PaQRY1MB7whk5UTzprp8FAczBECptyT1DXJLgbP8e1M7",
  "key22": "249eFJmY6Nh3pTtKMganDGYo5z8oc2F6FwBpTjcnSkxbT1a1YBRJL91CAjpxHKsL9C8WM3b1LZupoYyXusJGNnkQ",
  "key23": "2kkEygRFXG9RyLifZvfiSUr3GCtdyxMe1rGaYnVLABMq7wBakVAeDj5Y5qj1GArE8GxfbWiCSQMsDGyvW8DJiHf8",
  "key24": "2sPBjV9bgVvBV7YzkLhYXYsMuonhGfyDcStZyfvq4hhxqH8mq47rxjv1NjfiQRn2f3Ut3FBGDHbHgGwCTDyoftvV",
  "key25": "3pEvJbVxykHb2ArxegSGfBrhpAMncteZDhtp4TaPhVdxHSefEooYsPQXJ6KNP7J455Y284a4ufdvc3EcnSRUJdD",
  "key26": "2J1sXNcEeVd1Qzf977LXnHpBTK8CxhKnjfsCe54god1viWHE3LYiS1f8sxUxWgnPbezWkdLstwurhpcbggeEQm61",
  "key27": "48jkpZ8QdK6EZNn22UDRDsMdFmm4FUzRR3o5PJndzPZ5TpmQY1w8zxA2edCCeen1nehV8xUxrRWWtGGeuzzwbyn1",
  "key28": "5mtogCozD1vfa3CgvrDNbMx87f9414Vx7vTeAY3u4qnZ7niRgFCK1hgVCvSJdB4Xr83uLAmFrQGQqN6KtLCCHBit",
  "key29": "2ojczyEYcgZXFn5kKHH7fr5jKKYLqXyt2gcCNiKprbbXqzj7TXR1rpy7fgEJQHae7PSzYpApG8pqhv71tvQGE9gC",
  "key30": "Ko8HGLVNXBhr62z8yBALnA5LEfqe2Zjcr1pfSrvH8vEY7i9HHEx5cdEsSFwQqHABY3Frpc6A7geGuqKsqjGwhZn",
  "key31": "588p3RPujeuvVvdYfaTZ9m1ByG4eUtz87ALsvfghbYAkbfKWf7KxGW4f58YEYRQyM2ZcNrFerPMQjXdQuiMF6GvJ",
  "key32": "4JLY4JJuWx5JJdc6N65RaoFGSbM9cnAbfELfPzaqRQ2kJKkiSagkzJfNHg9Q7SnB3WqRZfLPjJz1EfovyKeNGYxr",
  "key33": "2PHR6BtSHALCTfBAiZD4ND8SE2AKRWhiMDGRaG7kXQy1hm7DCWCUDwwnjMeZME3VBjzdGYW2Xawg4ffSbR4xTXJG",
  "key34": "3qSEy7ztm7YqHSmfCN7MjQqVXtzHeVG5aRcGugupvVpbZJCGzc6aa2fTnnAJMJu56tzbUScP9stMGCvYM9YP81dv",
  "key35": "22cxDM8SNo9QCCk3WdyY3E6TKm5zqRZZkxhnuLibyF13hQPvF5s76mCjWhddH7yf2iqMDSpPeX56yJXYtnAWifvZ",
  "key36": "e131Nim7G73GQZ7crjiiWeFiEbipCY2kzuGAXGenGWo5knuTrbcbbGApz2zfG3c1cV7VmWkCzg4E4yA8LbVMMJx",
  "key37": "6wmqtJJd6nDn59aBsQ6U2vvMit6PmrovUi6QtMpoJ4tKDEHQZAvMKSfxNBof8zJqd5R7bnaZbZu32pu85Qnb9J7",
  "key38": "3uFD993mZeAKx5AGhd4uKRrKJ6eP5ARKidR6qRxuXPdv6AvdfWGmaqr8ZuYrDmv4fV6FyH58Ss1dseKUtzeHsomT",
  "key39": "3SYtvTbaMtdFJ9CmjfykTAktYGJrEzKg4yECyojQxYi13VNaaJUPmbRGS3Ji2hM7Z4ZgpbBBJLu6zkMTsqnJF3gG",
  "key40": "4aC2pKUawjzLoFJDaqdaoHGn1YP6FsWdPSuwWvby4qrgKwT279i6RprURGkAVtUcskMcHeGaSDAJT3MvLhmKPg6b",
  "key41": "4EiqAeh9R9WTuqxWspoU5q5NyPWNUaeH9Pw9WUuCvuriwbERdBZKgDctHbHMvUxUg1F5JjbwJpeVpaUQ9ukHEeij",
  "key42": "31aFDJ6UsJXLkPRV9ivshqtAph2QJDyzF41KMgA2qPu2VMY4puhtV7Sx5xU4NXsVupyJtqKWscDhMuj9NeR2A1ut",
  "key43": "46yPm8WcnRWnZ98PjV5hg1m12RcfNAGCNFJr8JuUiWGyCsVSNWPneiQ5hmywujrMSq46ZmVJCAf4qtqe7f5PQPvp",
  "key44": "3Wt6Y7NSmB1MwHa1973RPVECL6hxrsdfEMR8v89N6AcWgLiT9DMjRiTWq8RQequdFNZ9xPKXPkg6aWve5sCbDKNk",
  "key45": "Nm78jdkyqGYqf5AeREJAvDRaGQAaJerHSFG82Zs5yC569XtGQnMAhtcnzW5GBqDbKpTFYD6fZSWZtEwu5Loq5td",
  "key46": "3BkYk4MXgZsCfWEVUo9iTzugfMYdZJBz3swEWywREvRBLymwbFQ1mBBC3s8cgZ148mHLxzjHatSD1cxqceMdQtrY",
  "key47": "5AiagXP82PnSPY4FsacymzBqUT2nM3fjUZFq95WLzpCeXrPSkCbJWwJoBDLiC2RBPygAbwqUXBncvLdPmDVU5Jdg",
  "key48": "hGbNMDMRNaJkj7YPkZXBiffBhrvLwn3Gkcr84fMbBcxNGcinHFYYscq95XXotoxbQXxhRnMZWkcrURxxs7kYBNW"
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
