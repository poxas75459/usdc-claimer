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
    "5nrDGxBjbmCugCi4YtFeHcFE5BmBpuJR3dmpvmKpANZQAb1NjcnddvLZLaiTFFt2mHU4ZxeaoXhP1uZeU2eQ7mdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54z6eFrx9mGUKyvqvjmWw7WrqTcuRV5ozTcByNsfxbsVNMBnwRDwvGFH3dTkoihDrAA8B44QutiCcfZ9acv9rm5f",
  "key1": "37Y1zAC17DhkVp4VofcY7L8u7EZrJWdMokDKgKx4MXJQJ2om1fNiarzdZqC9nc79pA2oyNP3VSyZZXGcGHAkFjwP",
  "key2": "25KUHzN8ULSrn3NprSZsNijiLBxf7K4dfWKtZ2hpTYFzgqCaGVBs3emkfq8Szkx9pCcUWCvKb6weCxfnNZSsQ3rM",
  "key3": "3qXXpZ2vzF1WbPrgLMkYExo1e6AVvTjcn5e3gFBurXhuphfgcf9jythUHvmg9QH3dLcGe2mWJfKQpVGFKU37HPJ9",
  "key4": "43xapMzAiKZ4gLAizgmvebL3CY4vGsE5Xty5aajJn9kM5fXZR5o54QgNNjSCFA6chgf8HZpWK4snYsMus39UPDmd",
  "key5": "fbQRVASRafWzn6du4nLgc5tNYoEGU8jj311re8AVKXhHaaViCLYUjtRmqcLEChY3LjcFg3TnUk29UfRsdqL7N6P",
  "key6": "258d1rYdtjmfjpaqBoFfQJRcMueR2dRqLvay4aZrQz8jZjmU34g5aatXMUEhFgpbEH8pnBgW6AD49DHQvsTY8VuX",
  "key7": "3BVMCQLq5KKSGPvFDo5rdJK5HrnwkYZmG3E2ky7WQ8MpFJGkJnH9n3VmNUAGehPK2YcpkfTieHjEnBgtshCJdJv",
  "key8": "3b5pT9i2MHophuM8LcuMBdTjsS8pzgrj5Vrc5ngqXvw54UzmbRudi13q2Cv1nVM9EvUfHULPwYyiAZEpbnC5P4N7",
  "key9": "3xoUUFNL3msFzrpFEHvBULTGErUPpDYSDMcYsMCursojifi4FDgWFE5nQjjRwFuGbZV2ZhepFbeWf9jPZoorcb67",
  "key10": "5gaTpgQb7G5wmNF8JssEEVnUu2fju4i3ikq5kVAiPPaTkSQtDGS54Xm2MTX3LQ4tVFspw3LdnerG9jrNUca5Pww",
  "key11": "43pAdX5z1mDL3Sd4FyAMRHetzGjLLD3zLxXJLEoghQiRspA8ymwrdmbQ1yptZP6huMExodrKNwX78RZvjer4cNVg",
  "key12": "3AtsvzAkHBQVtPQh8ZKZ3gmjqc3ymWbsY4y5yR8bHxpbA1U96qcXX6oFG1DZsMTnouBaphinuTdopNzwNwWS4w11",
  "key13": "3R4FmYW5nLrmVjVGmourmHT7NYesu9EhzfvnTbKXgAfMyDHgMnM6iMVB17A69fRakcYnaYCS2xMPnmpnzB6hFvmP",
  "key14": "5YzA9VMn5PEaJzNZyaPmgBnK6Qi4yFYDBnLwVcnw8ct1HgtMDvJcqyQKRkaLmYEV8iWSyQE7v6cjosCA9BPcFTA5",
  "key15": "25ZYuLTHLBSzMkFAkzEYD9XCAG6Tj3pqgwpLsbgg7KRKcwwk2qmkpqsT22RzUrjMQ3YqLKUYDja5ApuSEhrpQQPa",
  "key16": "4ZCE2fkKeVs1qwZt1MYFGVsiesc5fByB7rcQzu8DGPX8TUVnxyqobQJsyTkSz2pxLTnWdabMPH7wfP8GQTTahJJj",
  "key17": "5rooWeMrNSYtxKwZtMHycAuwLoCMecaWHcZUh4zuThFi2A2V6jKxagJqHcoKEtWrSmPVcL5Lgp8vTtimTLMD1BRe",
  "key18": "3mbofxbJGPrGMgxHmeVtobYQLYM22P6UfRueXLduawLVbDAyzPV7C44pUAeWgC4bpEpJKVvsw1D9tqCQxDYCswt3",
  "key19": "4RuvSEcFMYEkUfoV12CJj96USdKDG3wJTgdhJcrpups1F2rbkV8u2SUDxY8ydbGRsDXdLF7tjwxRZ6frTM3i5oCt",
  "key20": "qfXWZMHwLZFQGUyx2rocD7t3HdBcPkTbZAaU8TAHgzt5qmoXJJP6BdyxvKyHQ7Ue3U2kUmf2HercnDXwN1KJths",
  "key21": "u2uR56GqRfSpVi2NzHAwTqMGBrpEEZ63RJqFuw4AfhpSQvn4p8RSm784UY2gNfijWR5CrkopFsNegx9xD35WFU1",
  "key22": "2P76exiFuQ986ytL2rS1kqvVFo5ve19sE1KgpXhfZc4kRk1eN6vrsR1rgYPRhV4P6YjiPwquBCqS8p3KiYZFa7DB",
  "key23": "3HJXYnaSfjrpznw54J2KvNLmUVkuAFYFxdk6iJhNYA6yXh2bDikG1QDsZu3GGcs3TG6vm5uMDBX1HTYGg7A6iWcS",
  "key24": "EAhx465JsUbpdDB2PezKtv9JcZxCYEUmULbmqHFXM5PZGpzbPJ7SS4FgWu5GGksQB3nn6KAP9Ft3vVrC4Lzxe8f",
  "key25": "4uy4GqggMU8esPF65ciF6b5fiBWEFGUZA4aNNe8zN5k8RRQAhNTUiCgweYgaKGTsgpHr7SddtMsFbMricK3T9Pgf",
  "key26": "Yr8MymWthMXAX6qcDvp8wQVwGU8EeZNj4Mk8y4PnH2kb9Bb8sywSi9ZYwNDPH5zBFspUWtf7Z1UfPRhYv9pxmA9",
  "key27": "67STvN5YSWmVwxZUwzajUCKKmvmsPPZUj5aEsh2iQ3m9CAgsATk24hJz2dNMuKMz62UZaBgHxycwcxhsuvmDTcox",
  "key28": "63P1piRkuA4p6XfqUuWjhMpjxqN3fzJL5BvcyfbFSqe4ts2zgkqbd3ehN1TK3SVj5yXAUkLr4ytBmXvriNiytx5e",
  "key29": "2rPVt7VL9Uk9MFHkXBFDuj4S52vrSy146en3rjRhWtXfAbC3xRKE52nowzv9u4o4of1XGE1YpPsR31bHqLDQvHDm",
  "key30": "5Hm8TSzNkey7EZHu3DHNvN69iE8ujKuKJtqCo1hMG5VZjs3mUPDczdHE6a6xYjgyhSyAadXWGU1mgUTQ5m6H5CAC",
  "key31": "5Nh5T6fG7Q2PvswUPJhuEmNhPsoKzbZuDeVJ9WGF8Up7D8rJCjNwCn6dCG8gjRbkM4a5T2phANtYSQKM48ueW5Ht",
  "key32": "5WAJSqa6sFN1PgYC5UUKkWGp2QRagC2dLCheK2BL3SDt6MeKwKmhjYJ4m37ujn8ekfq6jxgGZX22BwPshxiitHXP",
  "key33": "5vCk1pF9vBC7CSXATkTqV1JWi34dGkuExBCqKFNHJq2FEEURcUt9F91bi1pfkNa2Q82zZFcSY1LioNEHCbWBCsog",
  "key34": "5pBUtvesjJpf24HqrxHdykKD2paf6FTEgvueQB284SSyXJPyZDNqRgFQK5etQh7716pxhDnP9qXcepDGFZSLqN1T",
  "key35": "5qe5AtsJQBkQpC8tXqDXrxefiAGcPKvaVtTA4UjsoqCFv9uMNZTWnShL6AQQECTvTkeJhKuPAZ5BJA8xDeRKnxGm",
  "key36": "3eCpegRapKaxviPQNLYxCfJ5NWWkAuuxHygFEuNZS21CVdSTLPSNSozRpjrABBg57B9Q8u2ShSnAGNX8fGaWKsHX",
  "key37": "2KyzFLV8N1aT343cjJoqpbmTKm6n8sWBfJSuqc4rv1aT7c3ATyzWa4yZuBLy7jqrA5ARTS3YhtxDAp2VjjCzhcLB"
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
