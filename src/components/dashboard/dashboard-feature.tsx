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
    "eb8tWJCDwTVBMuZca3LEFjVFmNoLSr5GXNBKFMwiTp5uoevu1Cr5knrLMRDanK1yEptiGNQQoPC33D1TE77dx42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tiv2m5mXxRDLSfqiLYkaREqjD7j7kmHKBDBRrNAHuVJoLDCRh1G1CcLMn1sc3V3eMgXiD1apSPAJgS9VmnVCWrG",
  "key1": "4MzzkQxMWHCWn9CWzpYuRkrmTWgdkbKLVf6pXFJPErwNX4jomF5m89hMWTUwv5NBhaRWciUJBJBm2ZHAHkd3bcsx",
  "key2": "4aum2FgBskWYZ9nsjmMbN2y99xLpUpiZgsw5nTQtdZyHXy2vi55SKgUXUsviVhwSxgo44kKD16BdoERVwyEfWiXF",
  "key3": "3zA1Vb2eTHPEz1kh9yWtw91ThbvcLi4yo4DxzabXg4uYLk3sBd23o8xHf3EEtK1x2S6VWNGnRm8VBm376bX2v9Xo",
  "key4": "3mWunqrEBX9eRSW3i1LcpB4cAevZdb6nSQfdELkp7DbwbvdSqR1hcmtG7ZdteEUbYCD6Sq1izyfktCzPEcyDXWcJ",
  "key5": "3pCvVjiwxzYJTzy7umUoXSBbRMuKQPagfy2kCYwXG3wgc5uw39CxaMgGU4KEtqHcgfAbUhKSr9NHhv7N6gTio3Rh",
  "key6": "2UuuZuVfo5yriAgD1GMGkKhge9HU5aSpBf3U1B4iB8whR9ZeZ1udRWCCxKWaNumZxNxWmerLfqFLWTH4SZuCszPF",
  "key7": "oambnFUFqMX8e425va5ejcMNJGXmMQ8LHfPgKqwPT7vVzqdEjGTiQ53WSVAafpM3LTntgWyXGppoDBicv33Jjgo",
  "key8": "at54spVh7H4cv3W4rcWDDGmAVzZv3szsxLP3B8zPZcKtDJvk6QK2NpnRZ1djEe5hh59G3JvZjrn8dRvK5N81Tdk",
  "key9": "2B6jHGvn8HxvaRd4R8C7M9WPYK3XjxHHtMnm5Yw1uzbGwwuLxHFMwsw96EQhW9FWvP5dvwpeENpngcGxyBCVCwTH",
  "key10": "4jgufCX9rP2esdZnHERHd8cdBmdowVtN4Nv1a3yYcZdBtaQgWpTvLxoW1pvU5YUxyqZTW5svS7i3Zss7oLaZipT5",
  "key11": "42daXzJr7CAdPuhbrQQrqKe2xWM45mWqTLaVWqZGKghEeEwYgDgLJzf3TBrwD4dDhRkVk8nqu8BSjLUt7WKkwi8G",
  "key12": "3dYPxH2Q1vg9uU9FXgmcKxG1DdTTeMZMgwn2piq9Q7N3qcgFmaNrq4P7y51wMAg9NTm8HsWtLSH7t2xneomdmiRR",
  "key13": "3CUS6EWXCi6fZby1xe43JjitXoFALNeLexs6Ug99FJxTeHNEqUGV8bwTiqC9o954d3BUMWWbqBofRcZL3J1xMfmc",
  "key14": "ZnXrs6mP9pKsLZq1zdbGLpBis2nJt6nofYxXtKK3xPULuZkUYLPx6J95aKVPqtqXTdjhq4dfV8SuVb4FuBCkWfW",
  "key15": "2D6ZYeTtVJfMRXUkf2EMxp48N5xJTnpgTR2q9cYdMFSLdhbnRquy3GYoK5RkPke2yxMU2dZ7PEV2taNaYuKYnAeF",
  "key16": "2e1jHzQuwZNYGZ9L9yhiuMu2sBpXFaWoiTvRkWLrMorN2roK8wRTU9geuSSUL9JF1TsTkJb8W5z5RuM51rPcr44B",
  "key17": "54DVrNUi5QFQGWzMv7dvNf65GAbjTJYo8ienq2QATHkVQeCkS82WjNkssjkAN54L6rmDCXgptn7bEaPoZvjBECke",
  "key18": "2FMLLCtnoFAmQjNAtN8Sd5WBdTTCu1FqaSSax7HLLbf1pnYg1VUC4Jgan6AVrCT3c4FesfbJqoDL7mHpUsXs628H",
  "key19": "5W7sMDpywwEbW86v8EoMpyvs5xXtfSQYCMx6xLwr1QJ5gDDQJLihLoDgFuMbhnJHEXyQS4vQAVGo784AmMCBRP7",
  "key20": "K5wDHZxa3PocB8ywvZNUVVb9XYadgd9TGh2QdPgsYZQoZ4b6kY8So48QBN4pBWUvCtJS1JuAYo5bGYXN4kHHGXy",
  "key21": "3FPrgK1WmV3Dqi2AwNncxmq8LfVPSGmPP5F7KrvbPQMHvvA9Ys8PFrcmU34csNrdmLt2cNDL7MPubqiZhHwrmBjx",
  "key22": "4sk2a8XP67L88cb2ZfneH87GuVoyyzunFLeF6ev9Mu3yVpjiGk1Vvzdc6MPcDoF2eiUy1ffwJBm3CLXpS7gVngLo",
  "key23": "2TgwBHpSCmBte7Gwh3HihgHw7Bw8pVG9Pk8wHFirvUutZyn9ZZn5SPe5eHhCXncvH5se6R62benYr6iNtakQi4d5",
  "key24": "2YCYpETp25FTXsHZbKtRaR2d7cZwZB8ZdAhyR1ZyhjXif8ztrcvRSVcUhvpEDpcXjvCiCCerykMGTqUwsrYsiKq3",
  "key25": "24C3xjf7fVwJhCrG5u9tq9XKxKur5Ab61wzufCut5vxByWfgtzvsR8YFPjjzwCEQwKpNYMmzaeu58Bvj6S2UCEtQ",
  "key26": "3J7yEVivL6aA1Gy3AGt2NuQs3ZydZBTkaJ8DZgnFoCsxHTY2fkTBbQSscf3U3nJNkB8imWuAwVesnMuTRq3T2CL6",
  "key27": "2h9EacmtTyS1hYMX8ygBnHMK6WxBz44D4s2KNWjCtbDfowYEqMBtNcmd63tL8z72TFCkeghuhPhhAfim25vm68M",
  "key28": "2ZrhTtHg699pemrJhoo6RNf8CpAsVysbbiWjnFZxW8QmNM5PUbfe1obmu8HmRa71P8GcDvcKDLXz1UAq8vL6nhLT",
  "key29": "3QXosH5uno1E59kH46R5UcZP8g63MSurZWcCXBMVzBuBkNY9bkNChxG6ibiDqF8hxen53VBpvag4e9BT8pf3TmBK",
  "key30": "3n6cboC9yfdovx46fFugzRTPDVTecPhHdQTzRemXRx7yJ41Rba8yAF2gXv9kz8swgZhVSas48cWfCHKRxt53LBtz",
  "key31": "5qApDDrv9vrYYyKzbtwwUts4LNPutkfhgjSbdddCZsqVT9tUPPYvjmQBridkF2zCfQbiXWk7pJmfXe62JnQbQ6ho",
  "key32": "4Y1KZLJPz4opN5c8owL7KigVELGcwqSEn47PuvwKTPjrwQYPBZjfPUeSP7mR2j7B3dza2TqfKZaNbWL3zu2ZncqZ",
  "key33": "24DMUNruD63QeTkgEsuVmvcU5oLSTMVdWcKoKJfcVJpVVFk3zYLMMJBYVR8P5oaxKLVH5GBVRGq4NXtCm8Z6oB3f",
  "key34": "5mNWLrDLwQ42yDtQomPbaq8cPFC9Lr2XCagdEsvk6PzoY67RKo6pjvtRhvwFV7ppBxBiPdf1QmkPJFZUNU5AQcaJ"
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
