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
    "4xe8neeXXx3Kbedpbnp9raFhWgzrVbqmCvLNmtRL7uthUJbgManHkVXdcUi8Nesp8KJ6wsPEgdGoU9bPb3tfdsyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vu8YP3xYpTmgPHTKY6T1ig28tDVnCVhLMJ8eqHSR7W9pemJSQ1MkgLrT7TWm315FFngNppiRfohC7V9S6GBiEXc",
  "key1": "4xekrJe18R38aaDti6hRtUshTMr9HTvEKb6jTVes5Pw5qh5BFLUwY6tfLq44qZQ1TzypatWK5KZ9d5TwZ4cYRWJY",
  "key2": "446xTV4jJwMAWS6Xjr6sJzjgnLZyBUNWLeYyry2T5gWQvWV3qxzqay7npi28crmLBgoQMysekeHaGcCrszkeHhH8",
  "key3": "4trH9YpzHitwVGvoavdyKH6jTHTm7HReuDBSCSBq37S59CEQuzopUZLfW7scRxkZoFtNU4FJ26sr4UXnbNxnaYtV",
  "key4": "5AToVLEgBMRyuzdkmetB7nFw4oATRXumDFKy5PYehCbiVNtAoCGZooZ3CUQ7BeMGrxCDHrK4VQ4mg7kPGUFN5PuH",
  "key5": "59kWx4AxGJ7fzNCXnFZT9hJmcmEQV4ptQ2RLD6w9ByMcGHDQRHpSHESd8XddcRP3xMTkAbnqCG65r5gdbKk5666p",
  "key6": "2MBnaRuhMKRREx9AHRByN5T2rRS9MqK8wb5WMJzHS5tGPvPZn8a6TbDeiDQDYVuMcFtrqs6oZXQAeihMfnoaVduf",
  "key7": "5MR5dNeMMvoNbFyMLR4EE8E2oSiLkpoFRuaN6m6wPVdNMFCBX3F66DSuF1TSkcz2EXV52YTEuoVvhVgGkFz1f1dP",
  "key8": "gMgY54EhD5HP2T2xCE8rQDYiJ6KjLWw3Vxip98efFQb3Zr7YiX2axvkxacsYGQvEENsbg9MJo45kyQxMBbRskYM",
  "key9": "46GKbpEs3a1d8kALQytSyHA5fGo5wcGseiT428GLGhevS3TsA7PGmtWnsHDzzQ831gWa92Ujvw9PBn6yixfkeGs",
  "key10": "3YGFvX5rojteh9Lrx5f1yHn1monG92yshkL3bdTQW3QYEq26ra3cDWjgE1wxuNoLETt9pLBXkPfhGTyNBQK7YMqn",
  "key11": "2c4GZ6Qwafvq3TU7cc6tyaSeofpiynCMFQxPTcqVqJr5iMzxji3NmSkgqZhEH14iPdvkMq9V6iGgCFnH4JVX5gaP",
  "key12": "pRvNFNnt3NPXsHrd56LvNqYa5QjKw3WHpWGkQhGaNS924zyg2D1ANZw1XdQkzPz9poqeM4R3zyEMGeCRMGPx25a",
  "key13": "4kzBYb5hRpwNritaL1vZUAwnt5mjAa2XgExLLtKWiq9XTMp9VDaK1wZjApPBwbv8eRALw9AAp5DxSNnyMYtKi6CF",
  "key14": "5rthnZtcXJs9MnyUGR57DxdYcWikPNTj6THtY2Y8XmTQZG7F1UYPMMyd3F5coBAYUd8nRokHoaRUM3h2ByLcsrHn",
  "key15": "4Fnz49JNnZa3y6CbTmmd2xuCM6DhcwGN3XCJ3UKWbribHRtyFx7PxoUvW6b66pbaS5jVKMSdkVUCRuzmZkuWsJgV",
  "key16": "4AqgFa7mPggrEs2jJfBkZXgBeUuzPtwkSRdCotfZ6Nwi2SzNnbbq194iMJZKemGAUSdD8sg3GMcZVTcDyuCA3Kb7",
  "key17": "uaEUaLB8GWP5GVvKpg8mHF4xAwTi1GvKix7UJniwL9YMKdJUBMTf2VxeAGeuZh5o8mZLnqWV4yhT2JjJVkoqVyX",
  "key18": "2F2vHwjidpe2wfzWBogEpT7hJwStBx9xMb9q5ToDiwMGy8WPDGgASqknbyM3LzcNq8GJCVCtVbYq6rsCin21ARuk",
  "key19": "5mZCFGye4WBth9yDeaos3nhyqaWKAbbyWXokE63FM11qrCWu7coUs5ZQEdqnw1nY2zerDGJfPsefZAHXGq5TxFZj",
  "key20": "377V4k9dMupfkM2QHVh17wXjNQ6fY28UbhX1rhq2ePNnczXPQWszsBq7rSnFcwmmRaD9kDJDguqBGMBEd3NcWg5Q",
  "key21": "2A8Nmk7AbmgE6gp4wXmdGy7usMfbPHj65gT67rrq4Pf3Y77JmCXNX1ZaKW1wDsiAKUibqza6iGxiNHhopK6YBLbE",
  "key22": "5ds8mGNF6xq1sWbMB5DTr7KP7ZzEfKf8ytXc6dKhRvz7ESEaHbh2Xzp7wostW39C7H5aRG1aqYUJoumD4UzaDL7y",
  "key23": "66W44jB29Kr9C5RAJM7JRLg4tXsYB5o4JmmnK8Ek8Db2WWP7WiLzipX4qKCJnGEuD5W4kCPvyeViREQUmZ2vWS7f",
  "key24": "4NEkdnZsf5SkK2iaygPYf2DNErCrDfMTTWAuSEsU4H7ybeapzDrgy83SdrVEU2Lu2UaP7sncT2UcpUSNppUeBewc",
  "key25": "2DkSjepS2nNZ6Y96Gy7zwW2KEAEMnuL2StSgRuk2hZ4YSKKwtCE4Wm3vkbxx2jMDfzSuqLFnCJRy2bdmhp1JikgE",
  "key26": "3bffibk3nzRvL8H8fXqtEXbWr1MWPBeqcyRTVxFFDLPRJoiNMmLXkScU81RNFzdTQn8UuBGZykC5KdybCVfGbVE9",
  "key27": "5gG53DWQPRh2ZTy6nXNLAoXxo2hZN3QTHeFBfhSy5R3bzx6G4CNdqa9EtTqR7qf7TcToWkmxTgqz7CVEHZrRKWcx",
  "key28": "yaqDMmf4AutWmLqJT4outNsbkATWP11dKZQjk1s56Z8WiRyRh5zfMDVPvnMMJxBACPbzfXBtopF8AoTcXfzCPRc",
  "key29": "AkdM4taNMbp775mp3q51ZN58mWGGjwnzpGQM1NxAUfspkrAVCeJHe7jfNV7Y1KsNsRLYHTt8zpBG7hNi5Bwnxqz",
  "key30": "p8bRnwpwoBYqpaCrbFKgWAR8pTJ63fzUG8nBn52vjVCzQTnKArsaLvndiaFxxCNu997L7vbQSp2avfxgfWt5NG5",
  "key31": "4hQZVQJg2BqbcjPan8PxXjKomJNyCqQGSBNHxQa2qY5Hmtus31RXLWJusmyQbM1mafc6UiKQo9k27XWt2vuzXAR9",
  "key32": "4rqv8FMj4wgcrUeNGJ3zKuJuw7ZeyPSrbZfrQHAZje1DbzpxheSeFty3nSEkgdxJxsDXruQDUX16dj5MZNP6g1Bk",
  "key33": "53MgbhfYZHsiY1CRtLL1NuuiAEavLkefk9uNU2wxt9ARmBTNQ8Q9K5JA8UiHRKmfHPb9MG9orYr55ihtayvMtvpq",
  "key34": "58Qzhxr3mfgf6XLss85MUbNdLX7sWr3qLjyNAWjVGWAEKQBiU4SZjd2VKF6tyf8VFvZzP7SiRKscZmT9GwiCxj9k",
  "key35": "Dj5QKVo7JtHXyDEwzrJiWYru1EV8GLKxiGKHCZ3RpkaiWnbGF5qYzivugWNMSeb1WTUVi6T1ZmnAps8ZRo9dYbq",
  "key36": "3NH7rpen5saFiey3X3C93srBfzWf9VprBXj6NdMSkCFRPSBHJeDUUg6zdeaTe643iszo3QXXvW38SBqTSEWpYZTZ",
  "key37": "5NvSP3pwtDVP3a1ti1gWNMygQBUcDrrUFNwVSNwTdHDXfiqhvqYhFzwgn2NDPUQkmTtW4iP4uWU7h3RzFYWUSizw",
  "key38": "38g6BbV9vLrsHDjCjMTDJLNUeUCktK3R66Fgb7NFeMe5YPR5YbMnuF1R5xUF7E8R6zBzFNwiawhTu1144Any6SQT",
  "key39": "3fWQ1tgpaVZgLbGpwEQfKQ53LU5uXh4tQCLc8jbj9qr9yNBbvdGiGFJYxcVCppgfrpWFoC82w4xAGKGBPVJkV7Xk",
  "key40": "58pHeJn5Z9eqUG3qoVsXkdsuij7hHEEaUkaFG7JZ3ttzDHjoqQK6jqUKdLCZvwxud6sMJZeDJsSmHHUV1QRBhp4D"
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
