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
    "2RetodgE2rswEwFy6o89VFwJ8k3pzNA1TovYuj4iVgrUKvZbaALPj2uwWg3eoXuqt8HSW8u12o4JimKyYvEBmpXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAds4PiCFL4KgZrzK3RAAkhvSRSTbdjGNDD92ckZSsYKip7zxtexGTUPShNNCHJ9sbqPsMJqhPAE8g3ghc9aejB",
  "key1": "54cR7mweq2c1sMmqnub9QJRg1NrNX81Bb14b4dSWg3K1Br7MD1g53o3E71TFLPAvcX42AuLnHbBzNPRymFcJFgJy",
  "key2": "67XMg5ootBYTdJfH3j2UMGhXXHdhJf8HSgWPbDrHk8HJgwtNV8meJRp9QyEFU96SJpdnJwhip3YE47r86NFSVL79",
  "key3": "2kTbjSWzLCX8iGQmDr8KYuxtQAKVxHwB1cEcKpys4syHDLgjK1GVqu4K4iFGKCUbcdhzdQF1gWKAXbrYV2aoe7hC",
  "key4": "BtxXKK4BAXeNq4hoozzdYJYs862Qg4snj3DGtkMps9hjDKty8aHmMN88dT4VEAjCc7GWF9GxQAmHpstC2HSH9bB",
  "key5": "4tZxi68rcLgFjL5XWifrFPE4aNKdp3W9yZTbfLxfMpYBLmMVMU6dMhhLiY928VxzhmSWN7G1RySfNZDxkqpZnDGZ",
  "key6": "3dAYchTRqZJgMZVVaoUZDrvDVTS4RQ4y5SeEy5BV7FJRwZUZYEZZdELLFfh6gkVNs6tDYJFvF94cCf1N6KFko9jh",
  "key7": "52r16Bj4yqU2xxyPiMjGtqcAW3XnLhpTsDcNrPk5C9dVLi3788QCWYNwEhmYPUF1MwZ56XevkzZAVFoN5vEpKFXG",
  "key8": "4rbRpPyEdUUt3mQHHxgdUJpyEo2vYmEiMpy3Sn46SkSkonwkkMwpY9pNuTZwwnvARLoNw4cDp5V28vZYpLCB3WDc",
  "key9": "3vRjvPAuN8fn3djCpgV37ko6Pg1zQne6KynvDgcicBvw4p5ZkRMwtYQMbVr3QkL9efA79k136zmr46jGqvoLD5Hh",
  "key10": "QcumywSLiT9ncp7MqnQwVLziNB8aR24uH9EyuTk2s9Zpc6nhAcPgYaWXqocyu4kAaKcHjG66LtcXN7atDwM1G6F",
  "key11": "4xLfzZx5NKmTLdsAMyZcJJijycBDv2iVDBxMGVz2Yghbt5wPnyYDfTBfTeDAtei98HgBZeUQKVx2gk1GgbxY2Q3D",
  "key12": "ztp4VFnW6dKfCXirTi7cCbth2jYfygySEP6Vzv9mNkZeFCjWHaqMpJiqdeVHyMQQYvBmVrGqVShWyvYrrXXT4W9",
  "key13": "5kRN4V8WpU2fBUsaBhga45iw6aQA9gd9x9jE9B89c3MrQRZkX5hCREoAe31VuJCtvXBiaEmcUCz6T1J8KoyZauXo",
  "key14": "2k9hHLVUQeiqk2dD3dg1UC8GNzaEMcwKPuiXrJkjTFByDJGcD2t35D4SgnhC4kUHAoeFxz8yptNNz1bYBJAyGyqS",
  "key15": "5m95Rw5LTazY6yK9QEVinZjedVEKNvBn5bBuqbzkyX4qBcJnS7roAYEjqhb4X9g2N2VPA1iCi6jzKxUHajb38Y6d",
  "key16": "BQ2CpJyqE5tcjqjtLFYoRBFqDBwESqVDysvSpgGX3G8JdngbhhK555MXA5sqqmfQ597sVhm7VH2vBjsArreoTYb",
  "key17": "hau7DH9UWCeH2FbgRgqiNeCPLKPgoJ7nqp7TRP1UPJ9KJDCPxhgQ6yqX5J9rCBhAcLFBeyroVgMpuzg9o2JCpt3",
  "key18": "3PuaYGEbxeE4oJYrm5bxj2M8Pw7MN1vquWmMo18F3Hd4Gp5w6tnyiCWKJCk4z5ZREtbLrWtPCQSyXmDDwDVgEVr2",
  "key19": "2pw1czHYvUSvBySMaUDeZrP5H2X67wQLiybzdYBLRLDmJEHrDipMVwur4mtbFLusq5hgasCiLP6zdc53xKUKCGVm",
  "key20": "5h6jLtUB9jFGNMg8BSjcMtCMqDTLjG8Lj7oaeLNecnYdQxX5bKmftMm4P6RceKVQuTD6qAvZR4w9FdSz4Hjc8Ke9",
  "key21": "43YuWcAgpMBfPnzXUuJTRS63U8Um3Zx31uT4YEaYqRczcCZoM3ZRCZbn7ALWpi9dgdYngwsURkrvGhQM3WsU5EAL",
  "key22": "2HkHMwoNUJfCDb9eSgCYtMc1r1y3ntmpqieX2vU7sGRRjQVuTqfa8WzJ1CPygoLjxCjgXnm5gbHHFiVFq4dCoLpK",
  "key23": "3NLN8wrxNDjwUkRtSEFqRcEfy4xtE1bXWSBMXiHLjPWCKxxJy3phKu5Sj7yRGcLT4pcXKKGjKvZqdkbdyfVQwkxo",
  "key24": "4imC8zTv8a1dyHaa56v9mgrxF9XaQbm2fxyg7eWWsF2PCCVwNcDytu3LrjizuAEVynfgy6cL9iH18rAaQNCcxD1",
  "key25": "5YAk5kdpF6MLLtfhU5EGbQiK8UvQzb9nBQaAFvh9SvSLrAomm5HwmBnjvWAjHS7t3dAxmiCy6AcwCkignsHfhVNP",
  "key26": "22cgxndDDJYQM3LbuYepKg4sWo4uHmtR47GA3Wes2Xx1kecE6Bs8VUyULjYaPWaYCZsVbBhntxnZxz3VxAWTPb4Z",
  "key27": "3odL7uYsymwBM9oq76nfcNPPT5SmwCaXFCm46bnqFXjd41wXzJoY4eVw6ebrbM4nxK8JtEbcMe2wZmjBViSjUGkR",
  "key28": "4Ak9UKxtSEkpxCKYYcVMvMvTzajukCRnTSYaUdPuUoaXMMKZosr21Zm3kdUMMUvkDSydtCGhzGzuezuQU2dGkHaQ",
  "key29": "3Bkeb1SXHwuMDDKydRCcmzPsGFf2ARo7hwU4Gid24ogitYkfiC1bHLtj4RHZzQWy5EvxVr1KhJGkBVZgzw6va59A",
  "key30": "2dYN1h8VTG58F6Z2jy1AoCN3s9h5XkFjwtmFUJM5tzDYvzt1xJEQcWJ65RVuHSkDSSSwTmQTgao4EHJ1dCsJTkwB",
  "key31": "wU1n3fxsM6zkGiC9x6rBFAKSeAxk137QeeWuB6piL7Qi4BRefzeiA6bmjURv79zGcG9ibSkyWrSeNadushX6U4r",
  "key32": "SUd5GQae7WrG9T8CjJUtkKRweHkF6A71h5x1dFRxR6SzutoapwJt8huhMpNAUCe7jvt5WhWfqrcdrAcdcvHaE4a",
  "key33": "4wqurhZo2C7cu4Mm3A1ftrNKZYiyK3SxUHFJKTZ37ZYVc8qCaLJoaCvBsRcSE49f5LkMi8DiP5xUjJGcgdZz9sBf",
  "key34": "2TNWBJccsP53dPKDrSNHgSM8mbqMCxzdwEVdt1SfYx9Twu4Bi8Pp3oXijcWDc8NZLsWHYn8Cf54q5yp1FEP4VKGB",
  "key35": "2bRGFGvpi8Rs18zCzyj8QXwnfab1hpTbSW1NKvVoinfa8JNa52ZwiPjTS6qYUNWywjM51xu5KHuCQYoWqZwRSt7V",
  "key36": "3nWQJZDHsUYozUVQiYcrfNhWSXwHNyEyrt6tM7Ui45ggka6E7Ck8qcCsLH9uoRqMzrsxSkgnxteiMT2yXSq5FRT4",
  "key37": "Zo3PbTVaeWuCJMiabNLvefqWQddhmWLK842AQfjeYBCjyy6NVNtJnARHfWaYLC1Wf7EoJM825nnP39RmNVWEgG6",
  "key38": "xgC4BKwupj38kRPdMPGkHvRrcYByVxkZ5pN6wDBra2q4wK5BAokmcf6ehavtmFnmD9gMAmJ9NjA9yceJcSaMamR",
  "key39": "53h87ops1EsLB516pVp4LZatXXxQbD3W6R2KGSoxTraTgJ6T6bWX3ehDUckr2H1kD3my3MddZYb3CTfM1XZVCmVv",
  "key40": "2ZkpmrqUN3evAxr2LEHncjc3eFdg4CmymAuy8BZNmWTPJf7JrDXYFp9NPBcXzeMGmQ3uGFMYhPkYTkLYQUcXH2vv"
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
