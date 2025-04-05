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
    "2FoH1cU7d7yMK61Q1x9amp3QfoHQrEiChnQH5iE9me1fLWJCfb7n2bQSZ2ULrkupKXBi9w1zNWGYmscDk1aixRCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icQyxyBN2exGcg7x6nT5VGK165V4DDYEnLheLJiGrwMS6RXbwuHNYB6js33fyLfAxjBJkFYb3AuwCXwy2GKmTZy",
  "key1": "4KKUiGEc7BmdUkGr7CafH3otRA4zu5vN4wBbWMSFptRkHA6nW4JcFoKyFyKmuAJfCG4gNMs5grAiBYqEioT3BuWP",
  "key2": "X3hUXLsFcupYTtFxzX57r9G9wci8jGm3qcQb5rsJycG9WFoceS6z7i6Svu8gnr2LW2dEcqJRhAmfxAfjfgE3PDq",
  "key3": "3dAiZS7uhZY6BnkFzEAuaUFgxyWxsBu74zCpbxb2W5xMdSke286vw3cXe71mb7FnZLKmCvkob6oD7W1wCij7ojKk",
  "key4": "4Prp73iQ7eH2RzkEEyJJhGtvPRjt75HXquKHz5FbN587x3sQhSKvjsEr3UX8AwgScVviHEeoouxTvtzidbxHJi9Y",
  "key5": "38e9GzQBmG8tjd954C25pSW8ctni4eHfeApGWh4dYuuDj5UuUWoRATADYDFbECwo1ReSVsb5Mi5u7kg1fkD7ee51",
  "key6": "4Wix4ZdjqYXhMPkGF4LjgiCVmTg1eS5PECrbiz7Sc6tJ2N2F8d2AxkKWvJ8ik9Hp1ixmcPL3qBJhTZLPNXTZp3B6",
  "key7": "edNsvtgoe5BR4kkNCG6C8pB8tiSULMq1cbYRXrPbqPXXhwBDi7YEokchU9B5E92k5saS6sjt6md9DhMLZKQSzsZ",
  "key8": "AyFGTGS7Z7i2oxAPRbJF6KWZbaSjQ1pqojcqyNpBVbPg4C2EaifoLSBJVsnstp6YShtzSpDAmfuKubNceNZ22X3",
  "key9": "5C73NVwWQo5uGAKdq4xyknVjVMVqinj8Vy7GzifTnfiUMfUa5XLm75NxJhnuzSJniALqkVNAXRoJ4QQJQQGozv7y",
  "key10": "4Ekw3JmC53XubFpfr4LrTcjiV8yoYfXCrWPUnoTSRxnrw5HAaHL1KmASpkGEtM1PbNup3k1oRduswEiwQFcz4Xyi",
  "key11": "4Qo2uYEhnLtTEpVLZ1MrmFjKB2U2AG1cZ4ZNLMjVa71iToKGbaATDpYA32avsbavf8L2SaxJAa781a96QC81oh2N",
  "key12": "4VPRhQR3nnhQsb54fPtFB7qTeSMUdf1FnQ3bpCH81yuZKhi2pLfAcfBC1HW39s9FiYZqpwTGcTZBHgsYcCbYZnpx",
  "key13": "43AGbYZF82YP4dihLQTnMBU7MKCMgfjceMkpHw8CSqbg13C7jcbGM7dgcWpHbNcjiNLpWYGsrZqoLPr5YSUv6aB3",
  "key14": "45KhXn5eAg8YGgkH3h5qRwsLNzLcNTFkPrK6Jft5VCwzk8KERfJenkFrJimvTquvGD5BkRWLAHxwmLPQx1EnLr4h",
  "key15": "2TisB9cmLD2QArDz7TWNGSnBLwwY9mYRuMWgwHUD2oziCweJ7SfXTECGeRVMb8KokWYA8UhYMtzYUz7xzgXd9Z5G",
  "key16": "1HmU2w4XgNQFxNpsvWv9TWbKHkpDNzot2HJKKEW5MCuyxdUajmP6nEiEromEvgiDzhKebah96JycKYCpfLARaPZ",
  "key17": "67Dx9cSEChHjUxUgA2jJ7hK5bQTmJf8y9MKHMuKmZRXL5Aj91BDNbyfwvfjLyB7vSEfMw9bnRZ2p4o4dYEpPWD7t",
  "key18": "3hKyzMQ2SFHrGHoSLa2txhU46bQo6ephedpaNcBhMbdQJ9ed4xr9pvPeRdNZ2aGREWJmwgiG2Ks2Rn91PxnPp7C",
  "key19": "4suE8J2qYgSnnHoLc61L28E925STxc8ebMsidQaYgmHAQQaFdwDKKJoufGYZpthRE2MBP9bThPQBqrjaNFrEpTtW",
  "key20": "5M4y2gsTUhpzc65YsBoqrk1HyDDRN5x3We2QawAK2KTmMjzJnnGRhroXT8bC6KjgRX6aTqbgrEFTGFaLutszCBLY",
  "key21": "4NDWgQ2CsdgfpEshVDCfXShbjR5oPs6CZ3mkR5ik17x5HkniKrDQzXZ3cqPaTYEVrcP9v6SAu4PJwaZQCGPbsrWN",
  "key22": "4b1rCBUUESzgsnHZbgKwtcLsRShPpAavvmJr4TKbfTrEqpxMttZXvpX7psUGe16xahz7mgQa632qiTd5orBpEWrw",
  "key23": "5Y9wvFJbxK6cBqfsF4GEVmmeWKgbZcbkYxPJZ3hBM5UjfHTExZJhDUBwfSfD4RMvPmKPbrgxHZUCqnNrk3m8d1Nm",
  "key24": "67EbNZa8bt3AeHgAdbZfsNHf2XGLjmRaNoRKuV9qKLghDSXCsMPBhk2E9czJCW54uzB4uLZvysrdgF8L3Gy288HA",
  "key25": "3XcjqDLqBPfMSimGfiqjnKnnPFkVjyajoC9qt57A9iVoLeUjXDtY8mDs8CAWWokDp8ahL9nQ7RwU6a5k5orM9WTu",
  "key26": "2zvKikQdjLNugk7A7qS8EwefqUdqhxtsek67S46NPCiD2eZwAvrdmmbRtcEmDTWYom6icYsYz6KxdQWYKyrZTHyx",
  "key27": "3oKYXmAQsgmdmGpodQsb8KxTS3DszreJBNRteR1f6EiALBZaxVe6E86nBr1YswARhj1kgAheuZxqq6r7KwcdvwL9",
  "key28": "3kW4XxSz6Xo5SCqy4xrBDqocaLBCYimYjayujJS1ZmV4QqiN4KzDostCVMRPwZBxKVUwBqLjtWyxn1euoiF5JRhq",
  "key29": "2rVapSwoivHVebDDELGVSfTyBSB2rptHc84bCMgZ6NAs56JQ5FTJxWAK948qsUrzc9fZZJeLbVeQiwP3pYHgEDvh",
  "key30": "3jbFT2kYBSDBc123kaiDGsGdHhEaSj5jv7AzEfZGzqAiUgj3EGWVCDXknvKGwYLFpirq7VA9BuSNEJ5CzMsf1FCB",
  "key31": "3HMwzqo5K5AWueoeExcwmSmZD2qZ81SpMhuc1ASwsuG7j98Akv4a6obfCTuCsWcrE4qmP3MSezDhqUSWCm8ZmH5b",
  "key32": "42com3tVLrcS1uDVqLT3s6n5h5g2EfztuvjAuCY7GXSJnUBf9bDQg6UU6eHBKnMcaeVK8eZTN84UY9hyyx3f98aG",
  "key33": "XyRNmhBCMTmrWxuEYoDtjSjPrHcWLCeQnYYoZg5TzT1BfCsd9ivWEEqzCCUrRHa1wy9wUua47PmJcyhEuZi7pj6",
  "key34": "4EnDeAuffbJNW6Fke5UPWhz2YuCEigwRhKzyqFMZgUQxeFJLxRhmTGVoqJzytiWdYKXaALF2ZgHk7yksFaH23Bd5",
  "key35": "459U21phErvrs4oWTJdR1Ku2qPwLen2fwsS6dzuRxQhEHcrygZjPo7MzJjhbUZZsnVVtebNfVGNJxXMwUkt73PTJ",
  "key36": "4ks6WM8YNsgegLDNznxpcJVQcTySmkR3VMcXeum26xaCQELWBm4cgWwFcxh26oL8MfMmqgdLyWWh1gH8NnpSmreR",
  "key37": "55BhEFuN6hYZ4cQQBzdemJtD63ZqFzwvsv8V1VbJYUW9fKCShDGo842KbpC67b6ikHnHsUiD2maJbRvyb4L2ejVp",
  "key38": "4if9gcyc9M8Qge6PjWS3XFn1mAYwuAfTY52CbpuipZJZLxWTyZ54xUSKpjjXeYuWrcvACSWuKKu3VWFACrZQdtng"
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
