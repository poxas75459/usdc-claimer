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
    "3NPvDMGTHqmAK3UTwo3dMj9uzRdvxSBwxbhuuv3gqDvdMTJ9caCiAkBeP2Qj8qiCBCsXnVgD4cMiU2VaNE45iUiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1fLRkyNh3Khu9Sx8WVqZKbUvYgekBnuMpuAXAQYZ5eoRF9aCRdXuA9Vjwim87HtpcbqC3V8QGeVsr5ZgnK93f1",
  "key1": "nGfkT4WoCjkymmgz1dTzMhu46MqW1DtVMMvYGiVShZq4FttedpzYaouNpyrbhJLBMYKD317aM9M2KgfP1JLUDRW",
  "key2": "2yaXis7NdsHPxNz76fsuWdFQcwWhYao8TQKjPSpqJ9hMcFW7TqN8KetysbuYEhb96FnALbQuJuQRUmwpuTSN1C3Q",
  "key3": "2X6fMP64cxGZZrmM8RmLidFZRf2ijPeogGThUQiWb7mTYpGnQZj9Uw9LVtcHZvprxKGW5mfXbN57EZ8nHSPVcgtc",
  "key4": "JqXLWeehawA1WDBvcnz9emdxk9o7HM1HmkwXVCPMFshuxyTdccnpCH1iDRapatMd5Uh2BajbYNxWA8MFmKFcuXe",
  "key5": "2iwiPPSap2noACu86ZodUBMHXXD4Z89e9TeE4gVa43suKzSSujz5fcFMdrwftN99eqcREuCYygZ3qam1QxLdi5SM",
  "key6": "2mPnyNo8ssBPH1VibTg6U81nYuM85uuhb2sMQgQipuMEgxsFh8jfyum49FqTDErSPiv7BYhSbqm1WgJp9qwhWdXy",
  "key7": "5WztGeHdVi5Y8npF8GCHBZ651pBzvWE639eTVs5c7vNtFwrgLPWe6Ddf76XwYCLutfPrZ4kzCEQmNzA46GfBB4Dd",
  "key8": "5B77QsHV9M6Fn35K2WJYKWwttxVQdfioAcifxRJxf6a8AwBputBrhJxyR5onmdy3YVEVdSXr3fjvv4cGduJNqpmF",
  "key9": "3rME6ED1kRJUCVZE43vZdAkABtFbUtpDzJDzqQm4eXtTcXff8bpQxKouQHW3rwoqtMuTCjEKMUXqMN2MXxF8uSE",
  "key10": "3fDsee8EsDgntgRVErHLnPLrkejhv2BgGvgiy5Tw7geLsaHLTcpTcZuALe8AW4339bGmFn7K6W8wktsRzJEuogUA",
  "key11": "5YkXzLXCv7MZzY86131EgfESsxJEEkGiVWbMGNrEyxirRSSZqD5u7cXC7gHbFod5YLm59Jusyon5YYYb9TgKDTR4",
  "key12": "3s5TTkdssJr1Ug4Uei5wSYJ2g6AgG2E2ih9ERBo9tPkfTNQxQsyxbH6f8DeHMpGSBXAADUffhF4QKvYUpFXPbRCr",
  "key13": "4RZGK6SgZxYgULaqPAyhbgaBsRMP3Xc1TYxsuUmgUBf2f9AMiKfsCAtvMMdxoare3QC9ST3ha2T3aoEjRErmUnsD",
  "key14": "4jGna48mpPaK4GD1aSpsE2u8fkBRuHkoHzjtWrgiqNKr2yBxhtUSRXdDoQhypSF7g7K1pAEU9ayU1WzgRBSd1YEk",
  "key15": "3xfaBDCpRBEsGF1uPGJqnbUkfowxCcv7w2eayJRj6F3eGyfNvFUqk6KEotgqRyTCMqxndZ1UAZiaSjZqQz4tW83R",
  "key16": "3d5hG8pb71g13vypLkLYCGPD35EiJRWTvY1nquSbRziJLNj9DKTs2TmHE6KKpbFYDUpRCjaLR4aKkj1VysDnUmk6",
  "key17": "52MKpLpmZz2FQtEGSgWvBLBBVFrANRCixSWADJgaxSLjufYFuBwKYq92S1vgj1iAZCE63T2KH19faGPjMmcC8LpY",
  "key18": "28DDSHxZpAfxrDbQhRsUS3KDPz6EntG3Ht8oMpvYc1kPa8kUz2t5wpBv7SHwWwB5PXnySWi8WvHgiBA3PPjpBVET",
  "key19": "5Kc4L6eVGCPD83bGQpLGzsx6hN4eopG2PydPCZzempjuCkv2SefA91Ag8sjCP3fSP4DvsV87zk2A9RaBHpZS1R7q",
  "key20": "551VpEjDSABkBU5HxEoobtAYUrhNh5oJB3VKtwJ5kEtQ4KZrfbN3upQUroq2dW8ZcbvZmyymK3VKLGEwHusq259i",
  "key21": "4KMwAZhZ1nkDbVvkMUmX8eXZEnkWGcuupAdN8CcjyFycUz1JA53KRwKYegBzkV78q5WHsPsqEGRsfGJMJo1bCD1c",
  "key22": "2pwNBGzV1Pxs132b3SqDYrh1CSsrgaAJFHLpAxzzWMs7mct7bJUsb8XP4MLrTASPecAwPcdFPMwdacvZoxzWA23u",
  "key23": "5iC5SYGWPLeiZBwmuhdsot4hoe5DjCDSi9X8fQ6XA27mLJJoeyPpxpjhBHiuB88hE3nKba11C1rq5sY3QSJajYce",
  "key24": "cvhXHvgoYveBHUam36vygB5Y5D56Aa4CgrkCuxnWLMazKx3J28pQpg4b7K8K3px4KfafA2v1YczBzcRDDYyrTKq",
  "key25": "5nBMRXa5rHDW8H6eRwWagZt51aHa5Hg9YshKUKUH2NHUtrtMyL3LHVikeiufjbWzmE2yQ1qm8y7MhgtqsBwak77v",
  "key26": "2o5LEFEtqKyZS32dXzFUHppuUFVf19xireFH3Qednb8PzHL6m1xyKQwoCP4Pt9BMatqpE15MKmTPMTRKk1hSAGfR",
  "key27": "2NPcCx6CCsdhrGPRFD7RxT7MXWGiJ9UbfEAe8NgxAmoLdFAqYaNY8zvT8Ye1YvkKtyGB9UASRuqaXwt3QcP9AU3b",
  "key28": "4Y6FaGE1JiLTPMqVK7g3VbAvCqqYR8aPCDWLQPcLEXHRzSo8HqqSB36YpucfumG7r1inLpKpQXt2gborypZQCPSV",
  "key29": "36hSpUADHyjn63HL6YDaNcJjgSPGUP6gEiUBHTNEZHPWNgPHN8gYp6K1hwAzoAmGNKDKrdq7kS6L2q4grDeGBvFN",
  "key30": "DJNAmHGKHnPvJNCFV4j1U2VhwrfLyXy59Gf4jP5L5LDVGaHvSUndgX2EmnhnmPASSjA61XLNNSEz8KsVYdTiDa9",
  "key31": "4wU5cx1zWXtqWWGGv7AhseZxxNkZQYM553QsLNiVvmeyhm9ikCeGSjo8Afdfoo6BKjfZGAS4zVVbStByHAB5immo",
  "key32": "4MDn7j6eXoaJBJw7AebaerC6p4vvT6qCKist7zoSNfuoPRL1rbZ2Ai9RTRccy17BXcjWUtfEyHzT9bXLCuhC44mN",
  "key33": "58macomDgfzRjxv5sdDxyjNTkefUE28qjxB62VEsLezy3CpH6HePGuzYrVMZ9R4vh73ytJEpypAsGhMnY1JdaV5s",
  "key34": "pU2ycCWyVEeHSTgjZRd3BPgHUoNkrhbWy6yTFKCFG9Y2bkgr4qMbi4bDoVy4HVtWPV8xy8Y9Wi6zhGoxAgxEyhg"
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
