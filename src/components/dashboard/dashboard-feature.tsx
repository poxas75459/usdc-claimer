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
    "2ttckJHXpH242YxEhQbnbBzyvxWq5QNtijMF9Bxjos35SDByn68kCyesjNQ4SwQntk1rG1gfh7DTbv6tSELa8bGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQonmGYzCumbYoQ7gsVCm37zATXBkTJ8DoSD9XiowmEEixCwn8qXJsUsphraY39ctkFvj9CKK9t3vC6T2rWYfHU",
  "key1": "2Zkahk9U7keie4oCb8EdM3kkj6MbVMpFxt5wBFZNXk4gdedpXdbTgCCkEPKmfYH3PerCgCBaCq4XPDtkMCUmWKLU",
  "key2": "5SgjoT88j4B5JLKHkDtcnoeH7vGzkzPVLF3hMZHsW3josSEipY8SizYmx6yzJNfKNkpCGUMAMCtBN36i9yxURzTb",
  "key3": "59tM7WewUzZXH6hMZpDDHXEBsEzCo4tJyehti5EVq8dqMpaVhBgGpcSRThn6jHbFEQcPjm7PTEyezEoft67aw1Bm",
  "key4": "6528PE4YqTtrHL3gRpgck6yc6qQKU6b9oMncyzcwt8nSc1M8ujY3oZNHLzeQxL5dVsfHHnzCivFXiCuP6SRSGk96",
  "key5": "2z4qhvnwXqMDJKMusnGNJC1LkHK2RK6nW3Dok8xA7K6WGcpXrfUjDuqHRMegCRFjjcjU8ThpD8xyRxyX6Eutg7nD",
  "key6": "5u9JR8UYmBjV91xka3v4ZGSrFHSWjSbeAcWmfUkTs4STgxZRc6g995PZj3bx8B1L75X8pafyhVFUWkMnHyK63yCW",
  "key7": "5aV3jWHEBWfNSXqTaN2PGydYrAZVipWUForc63659HHXVtoCHMeXtEyVGXGbqFz4h6D3aHu53wyyGWWcfArkTU9y",
  "key8": "3Fr8nSgkSh3hNx8EyinV43DmwB7saUNPyT6hVz35pV7LUZQ7oYcZz1zjUWMc7fVGpqsJ8vkk9DCj79kJxoDJSV4v",
  "key9": "3q67sMkFFcTRj8tYjPHe57HpfaGTMp7CGrUV3Lv2oMeqq4nvXQBGahwtBvdrSECPjxcQXj6XKGVeFhUt9eUAkMbW",
  "key10": "Ln8hPR35LEg2wJcH3hbKcUXLDy1ZnofFu3LBZjW63eFsLnrR4LzQybXd6MZtYA5CU9yW9U8d37RhuHXnsvxH26j",
  "key11": "3MW53D9z1b4LTqASRbshaFs6a3Et3mS9Wwti32QexLgBeGCX1wotFfwuMErJSfKGaC3nNFYKEGiLd58f1g817uhw",
  "key12": "4C827DsaNLhNrDbySRqdFUiu7NeGqSzA81hmUxqQwvLsj8ZdfbeDXZYZV4BtATyg8CQRvL8nqgskvYknH3CayyM1",
  "key13": "2kiHNvFFDyFFy83FTBA5N41VAMUd2TtrewqAE7pvDuQWkqu1RvvRqBheTvZzpp743PTosCg7xboPyGibEHyp55R4",
  "key14": "4SEVc1k1SqTKopK2fetGxfnDFZMvfke2BPbX8AeXE8MjfwgXkZasrG5oAPST5VfhhHmCpPupEC7t4vjYobqDgCQm",
  "key15": "3uU2ECdZFPj2HaHNAE2yeFv8mAi7YySFnMhphLDXFUWkh95gwvKsnogs2ZguuCMnf9kLjKr1oCzjDTSNmhKEGvRQ",
  "key16": "CgNr1MNxv8mrjJscFQ7i8nwDE2527nbWHM9SGTcDzE1wGiAZgARicqaAYoJu66W1u5RzuwR6xLu87kTJfpz83x8",
  "key17": "411bxnM4jB5caDCW2HFhFA6HvjCzs2rriKkj5H7NyLteu4cHYQ42QBwhfU1x6oGWsaGstvcBia7giShMUwa6AgHt",
  "key18": "24CX5EkY1hiAGMdwFi7hfh4juGYRj8BWcpCgCHXEa1LTgHyvYFVQnA5psHxjJvB13waHP8TuTpn1M9seYyUGvdyf",
  "key19": "3XtpbJZswuWnukwVX1vikQA1nNjcSAJanF4CVhAdpLBXistCWpVBt778FYLUUvoR8QP4JRAkwqKQaeDJi3ge8Ag6",
  "key20": "4TLi4M4CRKw7z2AYurxaAoXqHtstdff4CF8nPhKdwjgXvL5XwwZN9wtHNNRd1QNeY8LT3HnHVGFNEb7Qf7uWznov",
  "key21": "3K8qSFkSxgZuVFD3tp3GQqr15uxk6v6zkFGKCuiyjcNx6gdS1tyE5XqhN2EHVQ4SvvejFVsPCcNWXagdX9MkXUpN",
  "key22": "33RBZ1epnFMQud6AHULwJsfq73EXC4TfE31J3TqWmsA3RoXzi6MBCqTT2p9Qr6uXiTDHVeH4mahZr2ioj5gEbnYP",
  "key23": "2gZN91RKe8VVhp69CUBD3j8VNmNC4jQxPX6UxjH2oErwGfXctMZwH7sB7vcb7vt4SWUeEF4PJzb6U5BfwX9LU7mR",
  "key24": "448Jd2Yx4sp1MZBUe5EPKiVLBL8zCVrWAMz1nbAHKe6y1q2k65xrboM5F4mtnn8raLxtXXs8PtqMykgs8sW2YQ1i",
  "key25": "529r2MjnXetMMUDjexTohS2ivbNguGFYjAYk1RSbL8KQxf5x3yJinquxiR2GjPFxkAUs1FFrWZAXGvdQnx7bkxtJ",
  "key26": "zHFgEyzAFLuvEt9LHkvGqzWaHvQr4UtDwFpLRMf8GLvhgabUhDEsHdpZhGDKuscEZccSDUSUejMcf8qKg8WX8Tf",
  "key27": "3peSn9VxMBr1jMpMUdCTkCjGCMATC4hYxYxk9mJYCLi6FN9arA5iTgZp1W1BAhKVUc8iwNutu9BMGNQvPe2uUPYm",
  "key28": "5hAPzuGsMt8MeMe1upvHjwZ2ckX7Nvj6L8cYygAA96e2qhZATrUvNLMW47eC9cSnaz1hzghDKDTzsu9b4hDTqNFo",
  "key29": "RM6kQY7SNS3DfiRLBJVmbpGCWaSPDJ3eXAEnzj2QrRHGpeiHVJ8Q3Udtp7HTs33vJDikj6oEtN8t3w5uXchs26i",
  "key30": "3Wk5eLdofZp7YL2WTQjan9XU8goc69LENoREp6H8L3fFTgwEEJAQxZStS5y4QXnFVV5XJvRzGoThP4rG1o4EdHVa",
  "key31": "2e6vAZSBURYmaWTLan1bQo147ay1FGHXUrQjsP5e3yXzq9Sn7KmY2BXsS6tA4ixJ6FoXAHv4zB6z7sUzgJAibmy6",
  "key32": "3nDVraFAKuqAuDGqc33Du1tJBHEPrSBGmvhZGHuN28C3TpRXKhWdKaQ2DixFHwG4gsCDcWgPwLAogoa9ffy8c5Pq",
  "key33": "4aAuTMiQF5MPcfQXSEGPX4D22pjAHCrYqSPdca6w4mrhktrBgXfi34fSzZAaSB9uVC1AiATsKzcnhAmLLdJzHPJy",
  "key34": "3JGzmUByPKGEqdgtL2dQrvjreX4JthcUGcPtRg6oYumNmAGmwgPjS3Veddvua3Tn8rZ5b7hcMGVuYBhEMch4jzHq",
  "key35": "7K7T7HQyJjfXhSG9ysLvW8WqSUtfJGJhxGAe5rh1wEizMaJ5YVqfhpavPU3NS479Ln7ZZuaaR26gHm8hh4VJfTk",
  "key36": "5NvAv6rYXa66nV4HsLFpJ2c927iYuHmDpeCUbHnhDHw2Gq2hTsXGSpbDDmLL3LKaDyrGmJvQ67pPdfePekfhMKt",
  "key37": "55s2vqW8r5r386yEhRGWdhbimtCYe1sWmdjeoMM8kxQHYG2iH3y61v9LPoqYrazWbzmtSt1gVLvkEiVBUfrEkEQZ",
  "key38": "5BaWffA3GLzKcDEEWZuXGbUVgQWWYURp7ssiYa8dzQXW1tsQrT7NDQu3xWgdkgT5qzdvnQgfcrCRu95hdTU7nUCT",
  "key39": "475gKJhnRbfQj194S8BLthhMzhKycCTcPjkxqHCkKAdYitmz5HgE5wK3LsphRAjjNT7srsQW9gZGFjpKxeEjUEwc"
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
