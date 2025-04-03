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
    "4bDdWKYaqTaNWJuSR62nDttiiJYLyCxhyXYXvTVnQGQAsNyUz2NoiqHYAzNiraeChHAikV5DrJn3gEnZ4L2HcMw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnqKpKoXnHKD6cvdjxBhbcK21RVZ1tozWqZn9VQuNxo1NYwMkTLusgER2KmTokPWDEw9u8X6G88WGgNXdk22X5w",
  "key1": "5jVnZ7UZHd3JBGfSG2JYc4BvcudA1VzDt8hzxdDB3kTeZrAGKdbqfu8GQcXkPFPvcCmm2j2suvWDyfTyW9hvTMGw",
  "key2": "3zzvcXYTwPc8kEiLdXM6avuzcm5ahtCwwXHttXmKStE5S9Z5wjJuUwF1pYC7z6Y5bqhHWAUnrJJsy3TMgdJd6wRQ",
  "key3": "nM8nm9tbUpYnFVQoC29V6JFScjcoG2y6BSJBibHrfpcNFXJENgbpCmC5m993qk3EJNPH8wVGBEdc1kKqD3RGad9",
  "key4": "4cL5ePkLWWVZhfCrMtdY38494i6cVgakMsHj3PzZ4RgLy7sfoWAsxnDAUV2mx5tGQvEUK9AVbLeDMrFJHDFtTUwr",
  "key5": "3QawQs6svSTsTg6gRL3cZNKdWBg8RTQFrtCfNQsyLpeQozuTxfztimyPUiUhjBvfq7iHbPK79cWqbiLPySxCbX3P",
  "key6": "3EN8CDFimrBTQ6SQ8yszHdmEJTU2ti9v4r5hS1qXjAynYmpuDgTZst2RRBWyi1paR2Stvu1GJNW6Nie3UXwD45uk",
  "key7": "2WeSGPctwgM2TDJpDWM4o9aKczrcVX1HfqsdpAmNqNByvwRA1EJQjN3FUthkPEyXJypk6rxRK1jXtzVqff3VLi5y",
  "key8": "2farbqYiakPZ6CVWPArGBB6G4buVdUEXarpSJt7HWsJcmg3r1gWu2iuyWcFhpG9x9FJixE1hZBAgZB3MrcpmnZfH",
  "key9": "3MG2wUHxTx2mD3WeEdCd4eRFCLZ4QTWiPpFuw5fdZaLHaZQiGV4fTcp4eEg9j9x3EGJfLufKNLE54z73ScZDRaQd",
  "key10": "2YGyT1A6oJ1Xrztp6cg3Rhek5swfnUrS8gKsErPPmoxNTVrzknAmQfj4kKQHQTzKYzyC6bQfgHK62ZwycED8q8Fd",
  "key11": "5RpHwwPBN7xhYJbrrg11zy7N1ix5EAVBd4XvLM2eAPoquAPtTo91dZSELMwGLrWqE9qUBqiizAPm5VKQg2m8tFPv",
  "key12": "2nZtgeLi8y4t7Q19YJcBrFcutE6hAoPspGJzdBT59WNkVxanGFQTNQUxNrQALoX5HAtxCc5B3Fb6Fg2zvZbmcLsh",
  "key13": "UpqGCHoZCawMkuh3oMd5gmYJM99WKV4pKNPmFzPc9EDoUGJVKBe18uBiCpdJhrgbJRy31AqwYEzruNAKxwgMbY8",
  "key14": "2bJ4w9yVh2DRcqqsYHRyrLzhJXAN7Z5J5Ys2iux78ixpET8XyfBFC4L9mf5W4gRqnRqU5sBm1Gu4d1UzsZzKz5H9",
  "key15": "2hTsRrnQ2xMiSkugsaYepeLLbbLnT1NdNfZDGij9i3Qgnwhv2JdVgAzTLANPpQp57hhTEie4U6nF88nEV6LNcCiT",
  "key16": "3AfUzcEmnndMKv5UtY6pkvYJNvKhfAADvRyH37sbni2Z7ZGGRr9KGyAo8DQUbs4i9PjWyuMkzptR6Ve9efCB8XjG",
  "key17": "3iiVBSUShMkEQyCDU2mSVT3E567CjxacmAiuFLjwMSfAtr5BvH9ES5VjWxgdd2jU1Pt719QEjQkDezwnanAtrHp",
  "key18": "3rHszG6jAQXFnMeoKeB9kJdG8qhD8yXAFBzdRfoCkXRZsicnDcGtdfSJM8qMwSaJ4Gsq6MmyvyRrNBvQANW8JZXa",
  "key19": "4oGstvZ6zsGvWkxwivJKCzV9gWwseXPsi7g7vUTB5B7jzo8TfbmtuwcwsibPByFHNEWQUWKkQA3f8hGRqhEdKxWk",
  "key20": "26aD3zCsWAgh6SpnuEu1rtXzUAeAreHEccxqAXhyo8YR6fxySMehNWCrYvGQgfNZfHiSXkzB9FRodXbp3uT2HJwc",
  "key21": "2dQdssNapgVsYAdn2b7y25f3FkSALXYyyMr3VPM5MRWWWGqqtz8CQL8HwCVxhUuSJcynfGvtLfGy49xpE6AkfuHN",
  "key22": "3mAhjKxGBmo4oHRdokb8wJ6BqsTDh3F4gctwKvrKp2bZmU6FkbDUzhxiTGqSkNtnwsTVR6VN9YXhxUZMEZZtXLdD",
  "key23": "41RhC52eTc7WJ37MdNq5UxcCSAx2k1QyUe2xPJHHENm95JLEZWdmJGo9NSp3WwgDyihY1fnJN8oWXjLgNzwyFhcY",
  "key24": "52MYeAWSWw5YyATrkSVsLYJcY2iKbxopX5u9rpRoqgYzep8BTcBopfZ94cWTKpEzQam6wyrP7BbbfXG6cXV6SaoN",
  "key25": "2Qc9zYRYCK6Zyy9b73tEzhSLuu7q5W7Bou7G5g4t5LLmtq2LL8wVt3n76wCKUVyvdmwBe242A2xenbrvCiYQWv1S",
  "key26": "qp2YP6dZftsPTz4AZm2mF8vqV25sccyzpixUyPiTmNZPDXjQfL4sA9StJZ1tS6n4EjuVCp5rYNWdBJL9XxBMkcg",
  "key27": "5JCoHSvqSsboHoPpqpa2cMVxwKQTAooRuwUiHjDeuc9bEaNExfcyRX62YxsZWP8KgNyGMHedpgMBNYsLKoeh4xR5",
  "key28": "2FaEWLdDwPwygfhfLyj5eYYu4GmUVHykfP66HZCBVqcxZXNksKBzAD4JE4nwj4fGjpCReEJnEjX5jLzfAmFiHHJZ",
  "key29": "37gh8BGBppDp85uz5NnCnXDMrrSE9xxvcVUgbu8zxEBx3D863n4iodtuu2qS1wmeDLQSKDKX2XdZBkDdUmPQnebK",
  "key30": "2eQgvWngaQD1EAupR1PukVX2rrCzECEmBNoXw9baD5kF9NTTvA9Fm3R5PET4CAtJ7p2WyKNSGPJ9YmrZ6SfUBoAX",
  "key31": "3avPPEbGMPz9s1mhCNhbvF2eERW7bMoagVNAdzNgZLztb4icnVD3H18BAEZcAyAPyWVz8N1if4kfsMLQVaj9wv6",
  "key32": "ReKXaoZLfxsMnCSf6y8iYCruZhT7m9yhSQtGhjULuGTG8xgxT6ooaJUYyJFHtmAUJk56Py3yNP4U7gecEB9WPux",
  "key33": "4AScR72SZLxuV2CzBZnA7QsESyYBffXmqj7xB48wu7sAa7FM9tyQp658kkiqmeVTnSZmxSvLT6gFbgZDvySmgAsy"
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
