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
    "5z93DhQdkPA8YS1kZqLoGzueYhdJN8poDPwordc6qie9ARF1phNSa3U4fVB7pYWdf5NrzHNvCQ1dzwLMxQxy9qtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPdYEMGg28GSEgkXsB2FjRGQD4VHjeCx4EnYgz5is62GqCMLrZPGNSPBGkYuJCThqTA2CP63yecmxVidgCg1PVR",
  "key1": "4JMoFJU9Y2dghfUdcoGMY4EnJbbFizcYWDHm9rErBdCTHogWYmPnJriTQDevjSbGamLLH1PYYNNcS2GvD3LCXuTm",
  "key2": "4hMCQjrgmTy2PGgC3U8Nb6EMVkFD2HpYrdQXCYVKfxp7rb87ER9MGPX5zUuXe2CfFhaRgpVRxX628XHE14Hh7jtD",
  "key3": "436HKTtkE4pdjBPzo32CzPk6o9j5noNQPfhddqACjH6HAKZPKKJGqRXtSKceQqz9ASBYK2kuzTQgfwXvfSoydxiu",
  "key4": "3E5AvMiKn11nmMrqeddDth1JxzAZEBX3BUy2VLHymkd8cqHU1HvhTe3SUqLYiHFDEK14PkWaiYAKw4ETprQYeim8",
  "key5": "zSN9ehpaUcvz1BMfN6L1FqjWoETgEd49WuoWKjaTEA2daBG8v3HGKGWAAK3chenubDtpsTzvH4tKg9oiQmTgrv9",
  "key6": "66H9fMr7HhtQT3DCndvrc32yvDB3Hh49MhaWUjE9gyCKR4G4pviiq4H4qS4fTnQaQKbYAmKQJKaavXdvgxRUqffi",
  "key7": "boRsHWMcBEF2WG5v5eWwYXDYJLKXVSAhoA5P58WitMJx6DARakKTxXV22qQ6hpBvR3WfgTbegdBkhLhNA5WDaCH",
  "key8": "3fxyNAXDMTkKMBNT4zQrteuvALMWPW3JVNWcWL92vqp3AvXrbkZk2yKrFrkeGDeV37RuDZTb79nv6bNFXFFt6wYa",
  "key9": "3CXns3NfHLMhbG8oAvxjZwVnZ24fjAGjvRte8tEbQqLdLYsrWg4SmnQKPmM2heTmvCaUM6N82zATYbHCWusuiGD5",
  "key10": "53kncb7Hibg5LqUkge7Ho5JJ1q7ZQqyTXGTLV3YH7ATDPkYXUKhDFhjE54H73gUKqrEvqvPAyHAUakszzmZQqB9E",
  "key11": "2YeWvHefbTvez7ZEgqczYbaRqH8Yh7QZqLPu3xKHr151YvBDbp4n6NDVEp7xYfqoPXGgkM42NW7Xv8T5ponkPJGD",
  "key12": "3AeJJHapLXWZNZDiR3pyYzsYshD7WMMD84NQUgojXcvb1hn8S1MvmjpTC5py5Qg4uG6xy9H28Y7FV6yP6ZsV5Wx7",
  "key13": "4NhBjUbAY1i4w19Mom9EVHHaJeyZd7HRhy6ZvZ2H3ns5HFp581Fw2ftfPa87nuVpMDKEo23oYExC4USx2mMZVB6V",
  "key14": "4jLb47VyQaqiU45LnS2gfe5EACjj31PxrzWQrLCGQnS6pbmNiiw8pSepyBpM4cqZaLqoqzsC2wxRPqLb7Mve4X3K",
  "key15": "2twMG5rTkvG31AP6b2PPKoSxU77P5n1vzqB6dCDVXyddLGfVTS14mNzu4JcnSPXqmxHkyqHYtSysr8a1oXF1Eewi",
  "key16": "5Di1joGBoMcaqUXT7Qqu6MSYPj3fFLx4T3tW7hXcnNGct96zjWxJGF3KU2wgiCJRwfwZa8ZaF2Hgnp7i9DHTcFLa",
  "key17": "QUcpJ1fDPYyo5MTGgciWUDFuRyJR3isSrYDqN4rZHFnoLVzvmrDoyHiqtXMCL7LnJszDCacgDwqSsm3Q167xPT5",
  "key18": "8mPjrtCP62PAvXCu4cqvokEMg6xX6HFj8vVDx3Yd1gCnAQdjRUQeQakBLzBGQcwQNwxQXSi8R5koBQffjVDxfd4",
  "key19": "zqxHx5yfkALNdCZ5dfzbmG5ve8UG9EGJudFxm6Ad52FW5jhVVv9BKZgyQQMHrmofchjMj6K5VQwgcM86oRaCFgs",
  "key20": "2NvwYc4Zp8tTJvhGnsDd72mmKNUcjGBGyEq8gXJ3CjRCYGgL8ajVCK15Xm8TMqmbLZxRHn62HidJvHqz7nMUjGBy",
  "key21": "4AZnudy8HYWyDFSXsS2WckpK75J36JkkQX5iXghDjUmW1ebt74MZwVpiaarsbTc3FArk1XkPaEcDkwJYUWZR9mJE",
  "key22": "2hjHxUeefXgkp7k2S7ACxofvFoH2YxMrKALF6shNSGjVTvB34XyCtJiLQuSKbxxHCa9TfGsFDj9x22EZk1w7spiD",
  "key23": "6ZLPMQ1HFHniJxi56eP8rA4pVZK5mrKtF9fcBMoVxnYvwtFM92JikyLdeqPYDtG2ocnpme8eLYG2FoYX2g9Ah9n",
  "key24": "3MWGoWrHpQ8QNAhb9myVsMQLrVnNHBTrzam33b8WnJ31RVpdbxHf4MXYTdqqHrCtemNUMCdHR8USn6teGzZ62LhB",
  "key25": "2kSNnzHE1kEJjrpbvwN7MRRY9hRnDD6BQ4bjv1LRr41f2TvH9ayVg4Bs3aJux6U7tHX7dVqW3ePP8Jw5PkrwyseP",
  "key26": "CFAk5yPPXPsQmzJ1xzvA6umxGdzT7NuYLca38Gb3K4ZjferAF44tgQitU9khK13mqkSxkdx1T3mH8XWKU28WYQe",
  "key27": "4nFEsQ4JrQwuCjCQCHVoq9v5e3b8Wb4nz5U9FBmWHir1nVaMraRUt2CrS8QRWFKY7DZ84UgTeQ8qoqgxn2Ejv9if",
  "key28": "22XhkQXAcVmyLEF5UJQkhjp5RsYqzDNhPMbmc7hBxRMchttUMrP8VCT3dw5gJLxNfKMQcBXHom8G6z9UKa9Vdixg",
  "key29": "2eSpHVa1zwMXLyaJKXCJ3XEUi4eNHWj6QSA8fXtSrRax3Lk49mSMnYkHR7v3FJp4EK8zHRibzmg2EHJSriJ9hVWq",
  "key30": "YxKkNhVkywui8jHGfe7RzDSDEqjFMV4c8985HATpbBuWLna2kcZeUnt45YzvcDnYbsFYx6A2Vc1fNPah3Z2naiC",
  "key31": "66r9fLLjsqZgiqm1kTwq8ufTsJLCfkSfxoenJcUKRU5vyEdJ32ntqov2Cie7Zgz2nJXYwQ74erRjrTBdeeACDQ4D"
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
