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
    "2GoGEixYjow4uscqQLZLp6nMdNN6xGsWk9VuQVp9vzK32JzrWqaZmGLZCJrj97Mo8KTZ9FgYE2fEy1RB8k17zKE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYzQFpukr1DnAxEhjUbY7Jops48ghX2f3csmyzMwRXmfQQkfUaizY73huACyU6nsg49JxRL2X1k6mH9o57PH5M6",
  "key1": "2cNymSaGWkwHBR33NwHXSErXNQg9exEZ59vFWQTh4Lef4vVEVA7TvpGJqgY7kfHhzKQwar8itEZaRTC7GRdWwwRw",
  "key2": "imsWFQBVTVQDz3N3x6QbtanHNzQuZJKsdoNdnyURNc5xaE6yqzQe3dqGKe2tJNmWPbgUCsiNVVjzGqBBobstvuz",
  "key3": "2BKtqKYbqwsKceZUiyCFoejBDfAfsRXRFVF3WYtUWGidXn8Nn9KFvBJ3cFQdLzZKkgNeEBt6KoDjduFA8osNiEuC",
  "key4": "vnVycRTUeuS1kw46iF3NVe3JufpBcdmH6CorbfzEK52WSuWHn1xg5XLEcWgNc7tmW3MfTNTAygWXo619eCTCXsb",
  "key5": "3waVnu5doWSDYn46CMXLaufuedA6mJaX9fskb4pFkuxAc463GEitASvPYk5q1PUBsEmTUgSqXJs1jsyUtockMPJj",
  "key6": "4sYYXLeEDm9pm3jpGL4u96SACyYuPnDWfXYwuiTWB3p3pyD5Ydo29E27v2WYZZ1dZfAGMcZCXBJFRR34rsKm5G1n",
  "key7": "5sTt3KHyVAoNHGy6qVfYDTBDs1XvCnAtvgrrPgyzJ6WYHoQSeTWkh8oeXMsPbcXrBKMcn8yM5BEgxLzhzHgF4Lx4",
  "key8": "2Y8tka9zcCSBPrE6GpaKVtCy1TEVoKmpBAUEcmhcERGAjkhiJnKWZ3VQU3yi4fn4X4oULeWrUsFQuniF3itfwLJf",
  "key9": "35YHj9ynymhBLndXWK1ythpxdeEf6sxVPRgQjZgvG5PK9XcAfchcem1ZqLVZiVz68evYfVmg3iYxZTJvJN28vJjE",
  "key10": "gBxzf7987zskhCKy6dA86AacGRkDkVrFeV4vmvMaRA1wD6GcHhoijBxixeVz1dSrWH79rFguNwoNPcEG5p217Ce",
  "key11": "4Ea5wQk1m19DDQsTfwcTxvYUuruTMBjmmKthho9yNfkr1d6jigjUY5ru8JZMWpBdPa7cWHcP3qPey8gHuLAgtfhC",
  "key12": "5AYoLgsZAD9f5Xxq3qNkCbMt7i39bnQjWUZMbChqtRU8YS4x6LeyLo7NzsQbETrga7tobRmNk5j7EzVtUGbZ4jRe",
  "key13": "4cPWvLfwWo3h3EVVLR5UgztEnFNxUYyvgakEMjVTtNQP3owFeENQA49Fdy9nrdP3mYgGc4V5gcSsqSaFiuNRnVNn",
  "key14": "3xZGgzMDWXwwbV8tjLy65C9fCe9FvDokwcnchvUz8RfVNaNV9NtFFaAsfpjNUdEqXkHF9nNCNypa4wYzH6znBfXK",
  "key15": "2uBzfySfK7yf4jVEK1GKf4X2fbUNkqtHLPMPZ6v4biUyMcLkoRFQLmBdBdA42aJjkuujRrn9qcjZDbkqbdW4GQQf",
  "key16": "2abSosnrfM5PXrnVVauiXboWFbQzKs3XSvVjvn16AX1LwxPNJ7rqT6PPiZXnfTsAF4VvKSB1ysguwbxK6rsnWcqM",
  "key17": "2DjXTT9kZf1Ccj1rPRuZVmvuBNwNqxUCGEeg4xMT1Kd4cX2TgbqBuGFRxFK82FEiyfE6x16gC3NfsHxcQ2TEC9i",
  "key18": "3X8BwZbDR2txp9bwSkDn4TCGTr1DDa9tNNSJB5jT99zgWt9a9QBFoUh48SjRBFbCsQgphPgCwWfuCV8d2BsMJhfe",
  "key19": "2Ah2eAt89w6RDTExvbhMTxpjax8W1dg5PF8DUY7RXutmrJqGdioutorGuw9vLHPWYTJGZXDRTwX8DHJiywxiBfrq",
  "key20": "3ge8FK8BAtWsun3Miw1vPnoNEUrGyR7MK3CfAmHbydzdiqGvHYCDnHHqNcq768ZD6whnq1SRZ1iXCd1MWqNWuxV5",
  "key21": "2NYgVVgVod94uD2tVaPUHXRhvDssVbsn6Rkaokjz84hQGUUrMqsR6JGYGu8VPKEkhGfpvzuBkpzkNQHexHqaTQvX",
  "key22": "2yXG7XLWUs9E8Q7viMcFcMVqAchDfaokGpGpVvb4JrdqdbzZD9GqL2Bn3oFMnrQy9zw9ujySVqz9TXjmXsfpCKsh",
  "key23": "pover9cAkn77ijLKuCWEnFJZTpWEaiY1nE12R799yu3J92PVKgzK2z7Cm2vwjELPe8mEtvUQeAQHwtvoCqpVPsi",
  "key24": "4FPzduLAZSenmvkWMVzjfmQuwJkZjnDgQXGEP3G1mMLBW522g84jHJNaxkgHbBTvprKCgdycij3hadfrBak6KQWk",
  "key25": "5MqgegP4G1AQeSTutcZNRidwkXBEUtuUGF1ugxbWztMi9o1J2HK6WwQtCZYCBKzxcd4dzfg3sTvJ8heKnz1qgAmz",
  "key26": "2ib8q6tT5NvhQ9LCCfzp1rQMxB4rCLgpQHHrBgnkzN8WcWLbtVnEpPsgzmP19cTrmMQJtyUKAajDAhnmtpAVXp9a",
  "key27": "VdxTFA3LVr2n8NJPbFgYfxjGwibW6LcXa8LmYcZGnUwTEGA8DsqMfK92YbQPKPKkamxi3Afbh8yFXZjfwpXQSsL",
  "key28": "xybbd5Pjpq33amemLcXZ6okPii7SYD43oQqTmN1mQK7qKdr9xSemAAiYeYju4nAs3MKyPGvBAx9WUkF3KzXmApW",
  "key29": "5wiomyKcnSWdCxbi8NHSt7KMfkRJCeHEybpJp4j7KEXG9FCEvLWzXXGCJjhkUY8qh6MoRsJgM6wjecx7zvYW8upR",
  "key30": "3M5vU9cxmpWaabPYSpYEadXpM9GPAvuvNHbBAvFzFGV6apMRyzi6dUkXgQW7a1k1MHta11pj17gEGetcYr9Zwt4B",
  "key31": "sSEhs4io4fNW3cXGrUBzax83fR7rpyZnS4XSxh11sV5dqVH5e7JpHLcyggs4wAMAkwSsyLztUEe4qTR1RNnnrRh",
  "key32": "42JsogEzP4z1b3r9o8mUqxtzkK6VfmiZet4Tio2fVmDhfVfyW7XEEBWCHPP9sYgNF9MZBYgYGJTD26Kg8VJ6VFZX",
  "key33": "2pYYfTsUqTVm93J7FvRPH5NMixMxxGVDsw2Yqe3oV7aK9ERNgJFtxTtYbQBZcnGLtVH6XH1H5oEa2MiaN7yFxW5F",
  "key34": "33V2E6uJFV4mAA6jifs1o2y7QgvWdTeQpjYLx7XB8QL3MMGfnvHFGXtjnfoKecHz3img91HksG5kvZVKgwnm91t8",
  "key35": "74oJPqLpdGbfpLFF9dYwgSX1y6X2cRSRexwBS5gmZAw2EuaRkwYsHd4WKrvCLMQeKnLaoZrYWEvPy73FXEGicjG",
  "key36": "5GjoFSnFKmSbDUtb2uXAhd1PWB6JFx4kqmBC6pw51JPLReQCwdu5GYXr8QyK9fjQjoLadBU8KH2uZcnC4yUuzqqi",
  "key37": "5FNd7qgLadNKZVwbankDMbb9E1JPAYoziKhUHwYWzwTa8nMHN5FbYTSNG9YxTadNRiRNcus28Xt4DMCuhN8E86sM",
  "key38": "YjhfXXewU3JhE6Pf9WvsF7c5wsvuJ7WcfNra1jjeLdpFoH1yce84FKwrVAXt8bVoQVXt95qGBwrghnWQQ4bC8en",
  "key39": "xKuchNjunaVzSmiq7XccgJPT5tDGBFUpLcW1A3TcYi5ZfR15wAv8D2C47fB6J7nSaQhX7chyE64zpRDfyXcAsBS",
  "key40": "4XjCPRV8EkwFYPTW2CKeRA8ZjLDTFSdyjxWxpuYeYHpty8Vt4M3Xz4vcucygQYZVWv43uiE5b8XfJ5GJwchMvNAe"
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
