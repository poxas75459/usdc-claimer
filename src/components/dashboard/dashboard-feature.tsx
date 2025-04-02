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
    "3c64NE6W7K1Mevw8FH5eAvR7Na76DXvcqXgnNGuTQEUBv55KMEGKkZXZBaud6CbkZLbSGntSV5QodofhUtjQrcuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLN8pt7UQuMQVhiFVPcjYj7Ro6mJ5Q2vbFm6w3prxrMoKgoMBCWUkYDgSvDQ5wAnpRzQqxMXF4VMMTvDKFYZ9mr",
  "key1": "4Kmr6GAoucMq9feDHGJzB9YHFxBXbK7ZPtoRAd7QNeJmBnJZjPhUdodqDACNWsrj5UYDGKGvTVQ3faSVXRxbrSev",
  "key2": "3U4YiabSJCZmkooxVELzWrGMoKFipgFcb94tbXHs6HBwyznMU3j5Ck1TzaDymuen3FHP4hnbzDnNwakjaAe43556",
  "key3": "27v1wax3DxZQt8W7CrBNiU8VB1cCTWy5D4riyNibPWtJBkLASqPC9ftmy6jZHgdQ1u2ZqWb8crpDPqik1WQ9WF6m",
  "key4": "4nq5rtC8ekYTXo1JpvwPdZu5wSo726m5nGJRTWFFnRo6PW5FjePpduy3bkpURyE9MhsSrn3aJA3SJz4RR7D3vkUC",
  "key5": "b88zcLGJ6VysFyn79yemCchoUX97Ej1qQXdpjVvCr7gQK8HmMXZxY8NcD2n6mb28C1Ypjcrunq4BZQP65DQnDzM",
  "key6": "2fEHxhDpRiopvAMHWHawWdxcCMFxZ4pzvYdvpu2jTvGw9QsnpYwk3p5N7byPXnKVdCvr7hz6L7oU6H9WZWA38Yx",
  "key7": "2nibW129SYVod8u37Mt3xXFwdcJWn9qpPk3GqfgjxWRFweL9h2aUphLrFWwNLg3ZJHB8aHQHtKhAREV5Ky6b3T2b",
  "key8": "3zZkUpCVKKChQHmq5p2zEMxRo1rrZP4pEwqqjUSLHJE5zB1ns1gvrv6WgQaYqSacNTxuiMi7Ffmg8Mno3cZ39C9z",
  "key9": "2rASZ5nbhmcpQU9171ZjXMRVSZ8uFJQ2zakDkYiwbPv5m6gmPyoNuWK6ndY8BpqpvdS5BkUKwx9T6dpme4xyuEut",
  "key10": "2ZPEoFkidL9ojrWz6LMvV9h7eG8itQWygUcjqiHJ9kxzmtN6ZZyNQSuvxDZTxSC8DdEYXq9BFE1tuq5pyRkJQisc",
  "key11": "2PYig1cVRXKbkTB694Y88zRApvWtfuyy1UxMgnj3dijmy5sgF5Gt6ijdJvHdwQgpHMRBgMuPAQrcYeTXvegjzozm",
  "key12": "33kwFxdfNmArJBYFTD8jr2LrusrL7WE11xbqske7akC6NcowKpVe3aPqspHzW4kGMW5dXjZMiitWdPyDGujqCaSV",
  "key13": "3tyeoU1mn5MN4NzKtHYjwqiKTkRGRJiwyRqBtPwLk8Tu1oo38JecSFaEWkoz9XpdAziezKkpjXHSKd8bCytci4rb",
  "key14": "4cBav7SFxgCKjPBq4aG26s7UNJu1WLNKn67R573C16LvqTukrWbiotLDYC3LXv9T2JXpRomaM5oLbm5iBFw26CNv",
  "key15": "3EqSZAC8Rvn7cAvigMvomPiNpiKxRuWSG83C6hB8JtAYMPdTfW2P7fGVXvK81AjCynK1ePS4BwqnyavbV1DNw8pg",
  "key16": "3YT5Wv5PdQ9HdFCAz8k32zwkNgpJXoE1QAvJVisVzrP2oyVzgLaDCdGHegbCf4b7akos4otGnpxpSu41mC1dnEfv",
  "key17": "3F4ZbPDqzUcXBen4vQKQe5zNfwPUZ4nf4D8eMyHmAz4ULYijshvvFEcwwSTJbUftGZTM2WtfNwsAArDFtXfKmX8W",
  "key18": "mA3769WLso1z6gSBro7cdR7nJ4bL9LQNMjxnRppt1FzDX9iVSxgNnJHYkBekYaL8VnTjnsxyRUvh4w7hiSpcKrJ",
  "key19": "51Kz1swZYdEiwTa3o21aS4o4GPyAfjm225BjDTWh7PZRs87JAkkbzWDjAHvbBDy6j5cBB9iFaopgn5YqdGuk99U8",
  "key20": "2V88ngbEVCL5Nn7L7keZ3e2Vu6xLLnhKfsyfvcd76rZgTtTjdZcKmfLof9c3YM5hKcaCLFWdgFvGGtN2V5VWj2Kg",
  "key21": "FAVJExxzhw5gDdnoMehjA64VcinMfjtSUe46W1kxed7gR8Wu1DMgNyTkn2sjoYGPvUvN9kjezcTEoWQrQjJpT8N",
  "key22": "3MDHb2npUqx7VkFHXokBSP4EEVapJ5PgrDHjapBLWXxKa2NxLNTZ6DK7RZ4wcMcDymFrkoK847RQb1QjuhB9MtiQ",
  "key23": "2qGVMnHUCbhLpAuX7aiF4iN9BMmLJLySzBD68pJeUCqaS1pgCLFNFwahXRtjWw8qAfdLNNCuakGCYoj9XoLpe1Lg",
  "key24": "45vWDGDspnv8zd5egC8UddGUkCRu1KF9uDPi2DcEU72kA5E5ZMteYCb3Uv3kmzCnXQB2kkGRzPjsMbTyGCwZWqKu",
  "key25": "24tqKrftnHfBr7T6DZRoXueLcheRHNLra8a3E8em7Bw7B3sg5Uw4neXwoNrYaaTSnQaNMBAWr2MwiAh5nF1f2ZKQ",
  "key26": "4HTCggCJCWL5xwSUghQ69MaKrS8o8jpH4hNAko1XdPyM88FyWsD5RE7UibtCCdv5rBnQ7oTtF71eU7ni8vjsizFt",
  "key27": "3WeF8QnX6ULr3bNZpV7MqRSumqwdCsBWN3nfGu1KgpoLpG6EKW488UjEkBEWtKCVkQMaXTVVjQEGWMSm7DahSXNv",
  "key28": "e4BByaTm5rjB4fNChadXSmwGx1XRzWatshn3znbrY7deP4wPw92VxFuiCQyMKLgxqVY8JHQSiUfaT1eFdovfHwR",
  "key29": "4j4jsckUK4uuWKUookiwJsASwFFkyokf4DRxgt4f5k18vcZeQpeYdH8w4vp1n46tfXdTTPokJNNyudUAkYa3h9fT",
  "key30": "2E4z8dQNFsP54Movr8WJTB9E8Tq8qwFT8RXgLxWYAAuMcKNWMz2XjqFBf3GRBPVEs2RBYM1aFcaKoQQVjBN2oKRz",
  "key31": "4my24E8fanWqoJ99ctLUvHmzR7obXhbBgM3kzSbtQFQCCVcjBvXtdbuodLDBzj1KQkiqUCWdrM4s8Q5qNfhiWGjv",
  "key32": "3JYsrn4jEg9QHomAPaNh8GAwB5uF8dvh4o4DD3cqokVts1vhBipygnQ271f54c9jqphK2yuFDPFZqFUcb3SCmg4a",
  "key33": "3n4JoYCf1jDWZ6rwYQg2WxqJKxSsX1wVoRMJShbBsqV1GpHuabGHfCVR8NGEfxxbCstviLe8zxQYTLzxSuActzUY",
  "key34": "2vBP95wHhmSYtZjPBRqEtSBGwiL7uqo8wjizWGJPGkXTPmPYYvQhp2c6wN9BkT1TeqNsSXgJJsaX4kmgGjbFBfRC"
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
