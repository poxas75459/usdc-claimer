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
    "5QVguXfVENas28nb5kYR1xEAjh1UpHY1KgWMqzgSo3QPBKURwxTETLXTf7K5wAeCRaHCuDaYj79siszPTYboHgtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBaTGJVMqJ6BiFdWaJY6cmddT7gtJJdfN4SxbiKmybJrPQp5MLVKsgcvB6xJTFjpTWgst5KX9aLbrow2HFXV12K",
  "key1": "5p9AyD71n6UravmxZjArQYNxcPwbVypRZbGoYCWs8pfWKnAsdUMVcN89eFDYpTGYVC184mR2Z7WBweqXq8TJNDLs",
  "key2": "5Jy7GV1b8kG8rat5HrX5fDWAYVy98mrswvRit878c4wpekZmJGrsKUn1GeM9jDBoe8s7oV8saHXX2YEQ2B8sJyfz",
  "key3": "57VSPcQtWDDMJdjhV4bAHhSCBKijLNiceusbYUYBYxMMpGrkTbwA8DekZ6pnxpeH5jhQddQzBoFyaajX47k9eGMS",
  "key4": "4qaU6R8iS6SPCYP7awYCibiGxmMVMa21UqWUwnC3dLYpLDkKJgGTPTq3aWouDda2cxrkx6cWFo72HW5bKEtdnWqL",
  "key5": "3uxnwtbLSMngBSoJUQfF72EHS854ZEUAFagwHLLbB2t1pc41xHg6yufBn81gaZRq9B86nLgty82Wqsw2YgGUcmEF",
  "key6": "2v1Z73hcGHBXSSZpgo1VZ1sAnLsEJD6mcA3c2psvfTz5BqgxWNtTRiNPuVdydneRUEwFgx7Xt1eQSWYjS6P4xgYX",
  "key7": "36vnAy5TEN4EpkKLQViS1WQPQBNyuJ2z6BcFEzWK2fTEhWF5R2ZQv8YxfKhbD9bajmznqVzkaF7GLA7bPgsaywmV",
  "key8": "4Yo24E2uoTdvWUdf2oyrcyfpu1onamAaUwrbX6DQiaPVcrgVzJfsMWuY2wW6yLmkYfhZRbDrqpNaZxY7J6B5ToPm",
  "key9": "22ozt45iqmHQ4heFb7QFkQ3Gwgnaedxu5gec9gPKEVCYpLWM2YmbsZF6dczsQ57rtkkkSKTDTMYTfU38FQ8TVQ7K",
  "key10": "4JLfqyWcjPJzWu8RGCTEe2Ttnqp1Wfg3q4QRWBxqKkPjva5n9uEnqfXVJwgMcULXv8oPFCpHhbQQF13xtDsVw73c",
  "key11": "5PahozJMC6ZNvr5fiBd7int9tx9MXriLARcSbvxsZrPzs48YVbm2ENMQt8UcnuauiAZnBK43kkT3dYbkgyzY3yHh",
  "key12": "5zsNab9bd2Wp3T3mkWHRSz15yYsFXr6g7kuWdMJmPn2U3EtUoF2ajeUYSKn14hiURm9Gzd5FD7YMw9dwswX2FdFY",
  "key13": "2xyqQAy2dAjSNFUQjCUUTwv7zwcJPzfjfvJ2UbhgrpVvkgfhKHw8ctYj3gruJeoYmFEY5pXL21KmTRDtuqhkJhdR",
  "key14": "447YStyfSU58hhphE5pahd9exEtD5A9yMcjrDLDFNdchyAawqMXScJmZb3kaT1TQaqymVLHzg95QBsUncoypLoYG",
  "key15": "2jGFm8YGVb2tcNNyfmachn68x7EXgKv6DcxzHC6TnmQaW4987HvYtS6Q2wTXUESjTLWJv95zVaCtXzBY9LKmyAfL",
  "key16": "2Z1uvk4EkQHFwtzy1fMhAhSqqKbdY2Sw2LYCNWJ9tMzVgmzpX2Gjth1bwnQC3HZYY8hHJiGEi7qsmKZUxW1wxLuQ",
  "key17": "GNaNrf9kYmWZYkLz6NJGEWYCNZf8Np9qM6oFnDC46KdSp77TqhzCJxc4WVkYz9XE8YQC3QpCkDR5DTuE47MK2bp",
  "key18": "3xhtULkMYUC2Qonzt6ECV7tDQZiJwFLPdQTgtNUebGDYTWAJQjaofQz3PHvTmPWfUEhTsZzqvKxnD7qufh9DGiD4",
  "key19": "HPod9SCmv8CbvdnAvUfZiZiX8mWVG92izDtimAhkssxWcHBGQWrsyTfx42U6QCwJsT4p3T76hhyVs6vn53NHsT9",
  "key20": "5ZgVprqZCQJB5hyJ88btGRCpaDYGKt1Nr8H2WzoZHLi67Xc7yweDvGcD7GgUMVGvXXvfhYsG4tSA4kV2TxkmEHJH",
  "key21": "J1o1zaV4gd3vFHaLUzehNHsaXL3VjJjXf6N262epRW36QuqSuoS3eZ6MfCbxJtJsM92MFmJ4fw4jAAPkFar3hom",
  "key22": "2ir5UuHMTibHki3kUugLCADWduLbTxRaAiXrB48Cztd7w3jKykTRoCnQ8dw2ok4YtjuCoS4FLBvVG3h5Qtv2ZeVw",
  "key23": "4Gfr2Pi2GPXBGJmDwm5zBJSUYmUhaGwVRMEYoybiub13HpsbCBCwp5bWGdg1M8JRZkujVGJzwrbFepakE3TMTzYx",
  "key24": "26HYhZg7UxB8J7VjnKhjr81yZfoeNkZGqssiogPakL92akXUMdwr27S9NZB9bdcQ6L76yxHJX5pPZwie7NUdeZDs",
  "key25": "oZedTgJWNo572TCCwSfrmMnsqmMWKePXppUJtz3cRkU454y9Mr4G9PqHWZ9ieynEsWfpYtTrNDzftTFBkG9sQBQ",
  "key26": "5QMH5FCgFnJR2HkxECSxDTJuVsm5MvnjBkmj5TCRKncXQP56W2PhoJaDmiM4nXdaGUaHwHBRzFMTZMWgdvZBAJHs",
  "key27": "5CCBkJpTYR9kdW492PJsHix77fvan1LjDKhpTDea6PcRvvsL1qCsJ5tGo7SDGV2T7aofeRmVr2XNqYriXpCDcDsF",
  "key28": "3rgg9uoz3JoBqUtPC6BM4Tq8WdYNQ1VuMnEToj32JKukABF6CDnBhvjqpjcU4sCsjSsxRAwKZkTLkBC6gkCqwce",
  "key29": "3nXabtDP34GfHwrjD6JHAYgZP2mu7BXqCM4bvc1jBAuhYSubQNK6HVck3M5qT4nWyCLnBS2D7AgmmfbMT2YzhZAn",
  "key30": "fjjbLnbGXZMaCE96cXKYbxGHPVSJnNuatvBoZQgcKcHn4zgHvV27NR6RykeamcAWgERn3bGjMm2EiMBGnPdUXvy"
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
