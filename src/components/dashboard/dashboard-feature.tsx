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
    "4Xg9uV2ZTuASJqMU18MMWXBUdXcEZSmd4vYnt6T7HwV4EdCGw8Rmo6kdN9sJ2FBXVbMrJQra6BUTekodWyxFGfox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TU9sg7KyaxRXi6RgNxKKMgrF32nYmgvmj2u7w4mqfDce7uJD6NxaDsvazcuBVGNHgXZtDvjifpM5YEJ4YrbWSau",
  "key1": "wTeE2qpuRZUsSNxHNvZGmkgFCQXXjsZ9Kns6ukkLaPTeMvK9aQRq6TDjiuqCv7pUBp4mEqwTsN4Ug3PEXxvZAxr",
  "key2": "2pshG2f4o7tNQQM4kRkFCvQQf5AqRHqwoyZdNn7Mvzv4VZBV6QbwB3Lmc6v4Q7vWAmzkNmn4aRgM4pBBv12wgVtZ",
  "key3": "zwgegEEgcKAQKS54QqbaxiEhC5xiUfc3tXAE3rxJmpAHin4TffrFGEmBiWqwJtx5L124a3pr2A1RjJvU9recuYX",
  "key4": "38AKVARh4WRpNTX4Bf7W9jLY9ByXsuDLGZhujoPL1cSNjWVpzux1heoRUYatLAnLFpRyV2Un8nFuBzixENjLGYzi",
  "key5": "3WHMWHCs3gekErARPZBNmbntTwzaMsLcZHCwYxtHPtYmtzZR6tsgNPeaw9QDHiR768UNppYsPVvjidMRFaUSVPpc",
  "key6": "4tDLeGLTBxPe3w9R6H6V2pjbRRDLXAGSErb3oj5tVBm7WHPkpGQWXGiAjtz4SjPnYe31Jvk4d1nAvdwatSXUvtaU",
  "key7": "2QNTVBF49qmGnKFJLj71LjM2MD88nWH5PY9hqYvDejvYsACq7MGmtdPzVZD8n41ctvXnNXf1sXxp2sFA2MbjZ457",
  "key8": "j2zxdA8sq4VdWcFdyKyUTj6Eu5rcbk58ZyBCwsS6dM9m6asmT45vP4uKLRBgRGMWoLcndNduEvR9k6EoXgXrJzE",
  "key9": "2PCKQA5Why9vjzTsYjn7xrSxkY7p6L53HFv27Nku3YQRgwYTGGVifvnomRk5HuXqZh4ncWVaVG44o51hvJY55nYY",
  "key10": "8UWhccgqs6Fe5TtzkYEPFay4MEXYCN3B7cbV6GuxW1qTogwEE21baG5imoRrqz7exLWxYtFSC212V7d5di4TYBK",
  "key11": "3DXbDYiUtQ4AcZqqBfgU6dWm5znF4GQVSigTDeAjLiHJetHNz54TP5dJYkN97f7Nu7qF6gEGpBpaMDmJJrApG7i6",
  "key12": "cXG8FqcUUAnfzgwvb1oGY2caRDgoLgwGVwjBBjrFXHxdsb4bjNN8No6NE4gnqTdw7E7nVjiwvCozEP8eAmPBcvK",
  "key13": "5x578ygKuSz5dwFwGXF71Cwnv77S6Ju2uxU1XMvhhP7XWuoaMSwFLApYhgpBqNa4RLxjctD6YUmSPagwxQsBT1DP",
  "key14": "59W5i1dXirKCiRX7uNcgiextN5tN9BngL3eJJrbgGB3qRL9RJmdNQFeTJzSzX7jrvqyVd5VMijsHzkQN4uZCvRTB",
  "key15": "4LR1wLHBmbY9gANXki219M2ggRYusX5zGT6nUEN4WxRpcsCrSPEcTNNo6kF2Xnpkv2atTBL7uVJVWVECj1qpxg4s",
  "key16": "25twu1wiXVwCfd3H265arHjJqVoFaJi5GSdQn5qH8b2ffT5M99YkFUddbf9ZP9aWgdhZK9f68NXJ34MMPeerK4RV",
  "key17": "3m45xV5vTdWcMbunRBfNwQLPRi4nsGE7gYSAr88djE6RcvFepR5CHWkM1ymDi1frLzGCHPTEDVjpnvdxz9LBmL7x",
  "key18": "3497H7Gh7utNTPBPib3QLt5BB6YUwoGzLWijbiftJY63MZoDpSnZ3rzZsh3afgttASqbbkYy6JzBZBVSsXBKyRi8",
  "key19": "5Auwohj9hEMiXzrztVPyZtTegyBvX6PH6xRaXGXaGPBvnCeLH6et6YGpf1qAgyhPYZt22aDcuquAjuyMjGVFDdiM",
  "key20": "3PB9YrKoNKuyanvMZnbvyRzrhzDiCmaQMtFehJBfnkheRRTXo4iAZfBod2SiijRDzNBkpKTbnkcgZpHzYX1DMUna",
  "key21": "5ZjzERMWwwGxt9NonxPnNeLgRZgjNgmmFHvxy2Qn8uUMUqsA81ZYsbZcMzFw6JWXEgb8nM4kQjaGXxmswtoc3eNk",
  "key22": "4Ro3X8XMPsSvoBT4KETmUbzszsGLB9YgUYXFnfZ5YSxr6bT75oUC9PfTZTL1oQrZE3DrJvNcL1MwDgCSJsHUykFJ",
  "key23": "3Z6ohJuZLGtGKqqS3vVcVuc1vjxiuKdedrjipie3Le4KD7DjJdWmzpjzUXvxHvBjiTTJ8gZvomhL5vZXCuXnDn3r",
  "key24": "56g4ErXfsfJD8q1HxK2mUDbRMWQZxMXChq1epSDWPtmWbEVdhK6kUXzJGJmwyK4CiV1cjCxwBCL8iD7uTBZ9GViY"
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
