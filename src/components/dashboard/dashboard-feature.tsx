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
    "2dYjWQcRSRaGY7KvhyHqtShgoSj1NnJ4dbaN4yjS6BSeZkfXnbLqk5hFGRZ4ZN8zTdzsXsY4w8htJzGQLg1ec36Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4h7VHpmyRHAfMjdMrre4juBgTMWro3dhkVowZJJgvqFGmpEwNJ5npYknQjd3qrUyw2AZzKsUN58hRWRTnAfsvM",
  "key1": "5ReT7s9Lq4W1eBPQo7NiqDbszWhmwt772sEq7AeX3XgPgCyuNDnyvKGRTH4kAM89d3XcaEEA8FYC6T243ZiYGPTv",
  "key2": "2AKTXU11PMdrK9oCYEYDZE1v9JP96vuq3ccbs7KakD3rBMmzVVS243VF59maEk2q86GWNo46dktGjhmH6g1t1Sfy",
  "key3": "2NT1nTeBrsgiru6V5SzcwJMNEWvddQsU4ZByQt6msuJYRSEG947rhdNvvA6VPoqA6n9cSyCGhAV77Y4YGfruAsqt",
  "key4": "3JmQfzCCaL6SdrZRcHS2H51DBmczrKuRQJ4QVm3rDyq4hxMUZfiwFoPxew2411fbgkALUtqYzP4YavWyHPPUnzkX",
  "key5": "5UiDnCkoitzZg6eBftZwoaekUTKaYfpMLGXtWYvYCD272Vst3m9VAxbvYqiYLcFR1py1ibqmXFUFrK24isHHNWS4",
  "key6": "3aExn1yxv56QePfBZArzW5BbtGgD5GVTLwxutMHP2G3s52yW1NFc1tJGu5tHf3JPnRWGiy7fGHvZ1pdEsNnCJpNv",
  "key7": "4YmxZARqHsGP8brH2vHsuS6udTMxF2xzcosa7YEJ2FQMY8qDpbu2EArPDeHtyssBfZ14wnXNB1Tnc3WqmAezNHVn",
  "key8": "2egxDzocqkEEADviw1GJni2q7F2TFEFmVSj51LkZV1wYH8jnSWKtCoe4gcZcwwm6zcGAXhvTxjwdZq2SYer71Ctt",
  "key9": "2RmKUxPthtGhvStPKm4BPkp6pWatBwPK2ziA96UVfsSRzejtAtynjF4wcS8uWTca6PrFMyhQesR3G81K4T6ZEKB1",
  "key10": "hLoC87jJfRrF5oMtzFvEFSerLpFj2zAqNhvDfoLKfpvG4zCMUJ9bLsBvaG6Acvs6gU7D3wxSV7oQjHvyPwmANYk",
  "key11": "2E2PEH4W4J9JPVEZFNumWrfcYJcjZaNP1VxkrtzUiheXx3F7KPUBg5PbNTmxX5ULbmW5hTKq9VDTe27meMFmDFbo",
  "key12": "5cb3RsLfBpE7yuFs3Rt1xHK2aZAocwZd51rd4tfxGnLy6PsqDksZKvR3tdzqkweQohoBGCMz8PuNr2YR2CHVJQvN",
  "key13": "wZxH6zF1AGL3uhQbhHC8PMSz7iYgWGRfi2ZCn6XF5n2fJuyWcXgvCmpLb6ao98pPUMyiWapMF7FXy9JosskfdNP",
  "key14": "3sriEJvbaGETNSt2b97oopRSwsPVWpBW8L2aso3QtARjGsqf8dWxxVNKr1cPrwEV51FuXL3vWHAiFxGDBVTtVpeY",
  "key15": "2GjFz1tRkkppZxHGiSpJPjWpPbQPk5PbBKnSy5jyZztX9DDLtV2EzTfAe2oM5tYKGWyAEcvEELoytUqzQ1MadLta",
  "key16": "3c7C7LCa6Krgz1BwNmeDgQHCMn1owRqtnDh6bBB2SqU7Vdhx3NpTZuAMC5bwiXVH5wSPNk1evyCh9CkxNGLfPG1V",
  "key17": "4pAhgjm1wc2Yzji4XPUxbntnTw4XDKYRf1gMgvSsBc9RMDDsvjrNhxqfRXcBNtpD2AcL61RBpBo5NVkxmv5PoNyn",
  "key18": "3o4DwBaB5RgQzgr3HCHnLkfC9GBqgUcF9xwpM7tEc5jh8esApDC6cx9L9xBBkJkG17e1MtPq2m8R9FzwzCF67qV3",
  "key19": "37HbqhV5MMuFPhjwKxungE366hjo4qwJKU2QommiuKfFVjrgLRvX4P6Xo3G6dHYh4wLzQK4GNVn2dJwW8Jy8D2Nc",
  "key20": "3DPGu6RBBUhhXauWhHXiuHotZ8wR98ZoXAesnL4ZA9EvCfgVM6tRj2SoLftbTGrPZvTHm99qPaVikyGGqr7eeG4c",
  "key21": "q9GF52Y3MXe6jaQg6yGW8mgNu3TYymR2YPKU5p73nTZtsa4ZtSVkikmHXqudim2EPRrRzYe1SYmctXuFCjuWrmE",
  "key22": "49T9vc1MrG67Xx9bAHCCa5L3JFasgaivDM4Nh3a21VGeQdj8ZhXhASozoqjFX9j8GSKmvrSbu8fxSPjHUNfQpsJh",
  "key23": "QvPxSWRanMsUs8CQuC4tyPsP8W5ys6f1idbbKz96b3W7cWnYQzWRVm88K5kq6aWFsVsmyfmnD8iMwM8TSXqxNvz",
  "key24": "47m3LSR73JgjN1Gf7Fw9vqpWgjSQqP8nQMShLepWkM2Z7RXaLETHCrSTWmZVtGFj16q4onuBrkReXmYeu9ZHf3TU",
  "key25": "25UGKc5VwfurWmvE3Vuv3kQR4RcTTp5f4gYgNZDSsSMHFWqnkPywJm2yJLqc6ey5HvcM172DDM42K9T3NJdqkK3g",
  "key26": "7oUHkoSJNBw8siAQcW253LcV2zFiFZvYBktagr5WhTiuTuu2f2FSrCBBMwqLr4Az7H4vXNMLNQRSwjKS4HQJ8Eu",
  "key27": "3RVw2Nim61V27TDbrx2fPi3ns3eA6zn4i1BGj9BkngaiQD1wfQDDAyV4pAU94X2S8otv1YXLWERZTC5n3r8Bmkko",
  "key28": "2pUp8BCqRj3yzmcX6SQDbfzt6zT4pRUd4XsuewoRM6eB9F2zdi4YUK4AHYqqdeCayquhYaEpLDUjwvMqDQ67fkhv",
  "key29": "5mDCrHpTuoa23ND8uqQYuWZf6WikZVKLGhiSFqrdyCv9yAcTwcMQZQTVNcDhzZN9jWUpPwVG5aujmWzknNSvbAUh",
  "key30": "5vaurcBmQfebQNa1VVLuEoeK7Cdo8mJGgnN891i6YNzieM1rFM4AVQMZauHn34S9t4zeJj7qxUvMpb6RcfdaKhb2",
  "key31": "3Po7Rxqf3MxeVvMgs3qRigQunzeQa28NxgY6L4eQg6prkqGS6AuMY3WFtVqzpx3jQXo37hJLZFaPAdmnWkoBDvnE"
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
