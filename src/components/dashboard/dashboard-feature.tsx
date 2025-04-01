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
    "3HvnLDbzhVt5Mz3ZsvWQdEc86oqXVYCcHYwdgZNrrZMAr9CeZs5PJq9LTrMBZx3EXbXbnhQDtDBk1Tg7vexy6fD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMkHELnqMDXEcsabXwXub7X2sxVLP651msWqUzybL9ubtVJpWWzrTCzhgrKQHVz4sPM9LrmtKNYTHTtcg34DR3e",
  "key1": "2oN8dQ4qwWF7ztDKPmcytjDZpyoBcPqofzcuTY9t93W5A54itbchiCkztuWvPPhjw4gnN1ocDCqz6Fe28vfHUPrJ",
  "key2": "HPb4tzWPFENCb8VFWUQeeWMD1eUgBDNXB7FjMQffZeLkVwZPyCjoJxfqyajfed57B2ZfNVHWP4MbeH7y4fHf3WN",
  "key3": "2U1bfE2EF85UQA9XXUzqVM9iARK7ptYmscGKvYNTUdmCfBLQa7cuUH9Dumjs5zY2XwK7W4LLT9D1zgAsRnc2Nxj8",
  "key4": "nsAyckGnGubuLt77cs37ufbWjxEduvkjrJdBSrkGuWwMUytAetnzrR6gMHCefCSusk26WKmRihx8MxciUfzhNgY",
  "key5": "65GKh13r8S3fZ22upwCxuKwWAScF1nCB7ngdUTHX62Dc7JZ1Z64f1jrS2xJrdpJT5E83sJv7WB5atrGuKPEBCfSR",
  "key6": "sL5Qqv1u1PtXyhWAE6PuxF8BuciybQghn8LHeVNJ9ooH95ujXZeNLTBzyCVSj1pXhVeRj732qeYsKuMhdD7vCvy",
  "key7": "5Kua8bv5PZmbfVQYDetukmxXB2dG7Fw52btzDPmDH9d6nYdLBZVdWJrpYYTmiJtHieQ9GkVMpsPpdYhYXEXNnRX6",
  "key8": "2pjzkq8FmQsziMFyr5jxvcBNjPJybvxwnY7uAzywiPDeJ839E2kBSWY8VMjJuHNvFxiUP2AvSbVQ7Quios2zi8e8",
  "key9": "2unFE8hR5gQVDrYYUhpPXJwe5yUGCcDWz9PuFnYBmRZYB2wHZKndkiWfM3sDbmJzY8mJH942WVb67ExsNEHFyPsS",
  "key10": "2NhWU4Zg491bBpiQpfHikag5qFwpDsXUYY7i5h9g2pgWU2zxmhN7Mkn5cD6JhnvWMQtYoRyZFNsxYBHA3ruSYfcZ",
  "key11": "4ads6FmKANAA8XfiMsruFKpeBWoJL4RfMtYsMshjaNvMnmXni7P3QhWpwhsXcB52BP4SfyRh9BwJGWddpZaaw4Cv",
  "key12": "AX9mT4LTs1UY18779QZSWUKkQFDYYzLQKWC5vzzNrMj597icpsdUa3usCh1usCLg5vu4MDD94nMX8TDXARuzSdk",
  "key13": "33QNEXAUWVzkSMLv4bytHVBJa5noAJhS6yLQC4gjK7DvbWtwPnd67sk4Tpa4UZxf74R95KyT5TdsNLSPERGodrTy",
  "key14": "2KaR2TddQtysZrqZSX1Ckj5wjsoPbkkyKAL3nPZpehjiZjRneToFqL7v6DjMoQT22UPCEW5kWBbbBLsyG5aXV8k7",
  "key15": "PPnbRzthLxqSXsLomqcfwYzD9cEZ4C8xngypwW77YgFebhsQU8Mykwr4b915hUrqNhnkgvKtbxrVg99EBxgkbAL",
  "key16": "4rS9xpKGy4UGhb498qY4kYGbzDJ6X3RQEKzpEW8kxfQhehDbqzzAQ3qUMDzSg7FyuoSLFU6yUqcLAFFYFUUTBkCC",
  "key17": "3coCtbk4DKqmht7UF83FHnE2CyoBNWfhvwo3FLXHF4NBYuPTcJTfQkWW7mGf41RyTfmyCLPzNDpanC4aQF9UV5JB",
  "key18": "39a42smk1j2jKNiXX18G9kQrn51qe2BYxAgpGMSU1UFNfKckuBYiue3Xee86X9h8bJLAirfp9utZkWQj1TbzXwP8",
  "key19": "3gC95QSxUxem5i3mvaM5fevkrNVvF5MRNXXuRW1oaQRf2WTztx9kgtin6kDaSMMUBvNffJaS5nKSriberBc8kxNL",
  "key20": "4vhZU8iSj3iryuCvKaBrn5Lj9HoKxmcCX58QbDwECrXWvFyPXozF6xNVvzaNaQkGq9djMQ2vNrf6gtH9SxxEiVZs",
  "key21": "shpghtHpNhQQkTuKoUfgf8mzxCair2d6RwzAxARV5BgYv6iSYPgCwwdPxJCxcjCJsS991hxWYxBTCaXs37YkXYp",
  "key22": "3B13tWW6FtB9Up1qzJSAZjUUxwmG51FiQYLcDfuRk34Wq2oRxtEo2iRruAj6WzSk9gc71NgxXQZnExqPqVgratKo",
  "key23": "2q9BWtQZ7aYxpcE8ZbsGY6ErfLEVpLWVdd7SGEYTKpVVbDy3hPJusWkawbi5bEdV9cMEtDaFx5PvvVvUFtqm8Xd2",
  "key24": "49hLtBraSVxQnsVRqX2dvBnJzhqwUVMa8Cgs9MjNdY779Ttc1Aqy97oeJK2EBfEKi8xjYrYgBASx8SRMNvRsGxwt",
  "key25": "N4EA3iqfSaM8hM2ekPrhHYgN1zAMVk22YrStVj3jP9oq7NHScWtr93hcrkkVUp7H2aQkcrrDqnRnfqaaxEnLUAV",
  "key26": "3AiH66W9mAkb5h3JTiFjLsbpUmU6irZ2WSENCBPXcsNmePNg7yfs3bWg3usTT4S58nrbidVK1VXEfJ5iJs262tMF",
  "key27": "TTYBWZRFyH9dLbR8Pp3z6TC1icrr6YXQPxr6zmKekBWuucQp7DS5STkCearCWFV3x7kTtMjCHEZcUNw2omdbUDG",
  "key28": "3itEveycakPoDAV5ugvXLzhmhwvaxNWeLfVTWzEojAy18oxuiTGBuo7FNHuYk8qxskCk4uBvYGc3cUwA8JJgacBy",
  "key29": "3FN2fGfB7v4ajuknMFWQgTFcqkSXALamkmQed3VLfBxF77WRcsUCkkuwmPGvDcKcz44Gi1ng1ff7o3ZJ5jL9DuTY",
  "key30": "65tAeDU3M5kda7td2GJLG89UePRpHqqd86gr66z5Fz3Fjp4oVZ2dwkubL49X99qiqUg2x5VvmSFxTkUQM25oDKqv",
  "key31": "5Fu5MQb62K6DZaA7iNpCC6PjDBn89GmjHjycsFk4TxP6ruYsxydmX7A7wZ3MVBy2G6tMVzi7UyJzJAT9JATd7XQe",
  "key32": "3YG6fJn2wHA52pQW3DdHN7gvv97EXshQoAPtSzuwky1tgMqg9QAscArDN3HZVajedgWYfxzc1ZczCAyqCuKtFw6m",
  "key33": "5etWNgYoCLvUWTPPHKoc1jzAGgo8amTbPyvRrRoosnCma75YgWV1B1SgASq5pRJ3hwX23jDvEXuwBEG8y8mKJ692",
  "key34": "XQEVXTzsFjN77pZeL6z5Reb27ruxUnm3HDmBvxZ52fArp9eaK5Gq5dBFbYE83cMmWLiTUJ3XxuBZnbeqP283AbG",
  "key35": "7GyVTfW6AeGP1gNzMY2HGFLxMH7JvZwCDxp9KzWbxj5A8m8fDbwoojV2hBinjCbqDuBc7VsM8PrbmR8KcbKKVq8"
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
