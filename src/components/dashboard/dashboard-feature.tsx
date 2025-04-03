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
    "3vDY2sVmxuQfy3SPDpEAMbX2fw3Sj25tjtbdM95JpFswvXphaC69tSew69ZkphNtAuSEoJuUd3eL127QytnMJLhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfuP857GHP6F66BpviSHAywauHGHgzMk25UHtvYpzmrop8tDcav8a1TGHkiVagUQiV5dqBNB7fiSTuqT8Th5Qbw",
  "key1": "2iNqVyoVQrogoLjxkvhQuZynDspNh9BkEh3mo82SQFh6QF4NEbJ2du9vz71nT6YQcAGNbjKFezfGAnrnJhYPXNHs",
  "key2": "2tCTp2W4dxfuL4vZxf6162ZGmwdrDdNwVQaFhogr6JxbHuuiroKmFLekiMtytJ3TyBbA1qZNf3vRu9QnKVJFHh8u",
  "key3": "uR3ATnm7Y19yrZBAuBezsW34QLXSY2hVKUeJ6kHDkzQrjRXhUDRF1uLtxpgpUXnsJb5rZ3GFoeYNKyEXFvmzZ8W",
  "key4": "2AqbS9uDZw9BmieWRBrdG7oycFaXeRRGTaihVciCBczXQdkL3ozk2NZJQLDpidtdb9qxkDyjX425LFdNhWLgnLFm",
  "key5": "3AygjB92W1EVvamWQTC6LwnyJ5xr4E1MKDssoG3pejm2gvwSH8hMc4TnWM8MuQf44MFbDxZfc3A7vNEW1ZdAQQBt",
  "key6": "9mhQTpwZJLNoc7VhZ5gQWjH56KH1ox1tkREhzBVvaX5pnj4ds49Ue7s5roMcoXjwMeYiSDjcaoV3PYcLx5RZZWA",
  "key7": "fEziacUddQgLj5iyFevcqAeZFqYiDjMqAysT7TsuJJAkFTrTZdAC5n5VPGhgTVMvG7Sp9s4DgdbSW1ZkiP8oTyQ",
  "key8": "4sz1nqpw8fPP4sqgazoRUH2kSRqyQwHU8sGi7p3mDgEPGM6HxyVA96QqcNerG2JioiJ7SQWgLqUVWBeiGo26qZMK",
  "key9": "4j9Hn6dufHgdoCtgoBGX9emy8E6QdbAfCFUgoG1P6TjhtbbuWazMeSAadNy4RHMbueXNyyftaGWUGtBaRnyd8KdC",
  "key10": "34jij5hiAaxnKq8igJbznEs4uVjf7HJhxZCseo7sWTKtaMdgBaGiH9wcX2vTqykc7msbCmUXpMYnnKGZbvNYU4jK",
  "key11": "ZrKA9j5ibLrGUVkWxXtwuU76kyrutkm3YK5wgSdMKCQukPvJSsZdBVbnp1DX1Cxb6yxcm71tuexvdXBWjqGZPSY",
  "key12": "4E5HgYRjQrJpFXuGQJBo5XjoiNig3JFS9DeApD5pZTbcgqGvAJmNXw1orUWrGutLTk1ut4hPs1pbmGTb5o5rtmSc",
  "key13": "vzCqmpBfZ8F7x1U6LbfMNVqZFD6VHWC3kNMRRiCg3ZReWijFfaBExcuZBTTkj4U5cjBziRAbNUJEpeSXYVvubxu",
  "key14": "2GNhgSgfrS47D36CyJWExcg1R1J9Xwi8c1w2d9be4KXwYKZL2Tu1hoQCYEEQkmwQNgwhLBvptHJSVomYm9nKi1AG",
  "key15": "4sGSU1qzEcQYWUFvNc7pWfxKrVaVFCNQ78ijc4SKH9cGBhet1JmFhcWjpm194zU4sMrbwQ4g9Pq3StGCcbaMPbBw",
  "key16": "2ZfKDnMpwWj4knPjnzCL7Q91t9tGeJLKkTmCJDvfG6a3Py86iFZ7aZJDdJiaviaqo8dn9dcdPubFss9tzf1ideWW",
  "key17": "3sxeUG7o5xPA4qV7zQsNQF69KKWMmmJA4rFmhVgFcVAHz9xidhc1UDkDhxzh5f9nBkRtAyYvE4youjsRSoJnvSnX",
  "key18": "3jTYR9Kp21dMgWUhMcA2EfVK5LpQVfNrXZssSPpdJyrpJAc1zrkmCMXZR9KbWfg7Thr19ywUggDTt2msLByrome2",
  "key19": "4cUzpGX1BHCFgJ7UsxcGxw2hv6zgEbjkPR1Lwm6SdbtcTfU9P4efJgzc7CSUV4QPkNozE2y46XeRtP2kvsjumQeC",
  "key20": "ou5LFVBp3wZJXPpWVAYGC5ExvkF9m9rQNWFW48gK6jirTVDaWBu38rvrt5KMbTZp68gqEVpbkpNypkZJEaqLqZP",
  "key21": "39B7WrG3TLuy9Tu5QRPUQacBBMVQGrMHcjPHeshU3DeuWDrDYeNmkg49SUpPTp7Yawubt5cpo7toip4DCwDpAsye",
  "key22": "5oWD8QZiyQTpwhrnV1GVoGXygCHsLD7h4W87yMGBLd1pLXKM9EppFWJMeTHiEEj6RH3nZrTHHMvvkRHm7mCSCPf2",
  "key23": "p1GEjxzKHQfWbE7mnsShKoFsDn1Kt2y1kXPnANvhdMru8deM2NaEL1qQHHGDP1TCWrA1ndkKaMusYw7RQNpP2fF",
  "key24": "nqCsjezNA882VX5CjVjejmVqFcnj2jHFiaWpd67iLmatzyAstczvfzoLmQFVojSUFZSRGgKFW7cnTQm3ck2x8mA",
  "key25": "27gHL3GuVwjUbo6sSRXitWzygbVmAsyDjHsLjc2ysCLH6d1gUDSJDEXWYXRo6432c1529aCEh5MRSjEUtgAsaet2",
  "key26": "2FYxjYzB9jDSLy1nG4qycmdn9Xzky9qhxjkQpWAB3kM3GvWuWuGaLcpA3u8Cq4WsvmewLYJvEnSfbkYN6KPSWjdD",
  "key27": "XDTo4ujCaw5Uhk8KYxf6FjK7wHsZDvuJkMdvCenkbR794Gk2ba1bQAcFWJApwpvud8EdMF4e7j81Q9SggexoP6d",
  "key28": "4DBFAZ2aCbhYSiTRNaP5wLrbMGEmzMjJwX7nGmFk7KZvZ1Uffj8Z5mS4xbp4BykZVzHSb7u3urRyV1U5SsphVsNd",
  "key29": "53LUVpTZnrRrsEMQKxxfkQSmKgow6VkEFf4hvNd9GrQy5PCoqLK2M3zL5foo5AKUXaoMX1yvG5JaKV9Q3pZp8NgU",
  "key30": "4o8fLBpzCbhvLGUXRZ5naBHCeYU5mNAxrXL2k8SLW16BDwL5hZA8gnavBBJBMFy3ddbtPEisWLMLEFK2HWqPRbt7",
  "key31": "5Uph9ZpVAoBihaKP8m6CFMrV1NoDaNFHKRhGxsdtopC16w3ao6fUYnZF1rNAXmshhbmrCFCYfyUNvsBRWcqRbo27",
  "key32": "5oRrxAafwTirpYENEmaeJy8LJVrdn9T8gHusyuK1o19aSbjxQBzfLxGoG34piFvqVNpceNo9GyZhqQSPjmjtyUGB",
  "key33": "5JnAzCrf1D31rCWTEwLgSqDqRgrn4Q3bbeZ3uVC71Ey1uTvyYM2TXoP5dCinquCsa6jxdQwQ5mXQN8NqeHomLZft"
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
