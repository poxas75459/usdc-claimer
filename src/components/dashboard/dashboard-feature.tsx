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
    "3LGJVGPuhe2c86AW7RB7oj8bVWVE5WQ6qexqfnk4nmQTzdochKX6GEZ4tdmgfTrsPaypa14pobcpBVb4kmWXEyGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nax8PvW9Fs3wgCSH7p5Ft6qh94xsv6Gm8CjZZAfzrf77ya5K1y6KQzP31dpTCwkNBpwM5kWKkA9CGjwrDmvGnrA",
  "key1": "4ymuaoePKTjS1NPCM4cyJwfqRn9nkZgK9G5za1weQ6Hnk1pF2cUraHYwLpmhgifczaMCoBJCCApXaCxctpAGBi7A",
  "key2": "2423HjPQfQ6SmYPTPkF7ob2qWKAg5PNQ34EFykSUwogcjLhRfCsVKuvtgwCMnXpqoWBykGwDvj3D5sZatKaXTa9d",
  "key3": "3KLHKRmzZvKxyXmJ6nScKgUcVU7QtT4XQ1sefDugqV7c75W4PBTjfk3FvE2mBYwPgpkhxztFF8XitLsCvAYyBuEy",
  "key4": "4yQvAuB9Qfu1uJFJnHUdXmxPyNaRHA69JDWShsW3N2D5aa57YdyXtciXWpfG4723yJTAmcSusGjkh1AQqPchyu8x",
  "key5": "PZ6qi7zZqpoXLLihJjStbUYXJT6Z6CquCFt5GPerJ61pxtbqnosZip6C8rJ8rkjbzdAXQAFB9thJKmwoxrFVxNy",
  "key6": "2wnW21szhRUYpUg7h5rmxpccsrAeey7SfDW89sz2oZYH4111oBVyENVFik7H47Lp4i1Yd1qMsEuExnYXniu2urFo",
  "key7": "YpMpAKAuKsQyAHGU7QfqLnb5pFt9FLE4Z52SYx77bpj1iadkCRSaQXVzKgRdCx7YHp4DWTe9SwJML4VLNdGFTNH",
  "key8": "2q9qVYYon8p8S5o332aXmgq5oMZZSXqPRjAFw8RNxSqCKzDT59nUXa6Jw66GsH1R3vrepj83RyD6ccQxvguArmKD",
  "key9": "27PQ6fxaaP4f4FMJLg2jAZ2LTJQm8f5mmbt51pJtCbNkfbwqmj5ADzzNQHcayhbNWHbdKfGTpixQtnyXt3HHmJoh",
  "key10": "31yaD5DnGxj6K4FBB599xgHxmK1KRB7t6x2BtHussiKqGvGE3JjunN5Qf2rYRb3tTJ1VNNzmXvCvkUZwtxCy4isV",
  "key11": "CpYmgvAwBSo46udpjsMb8HXaXWHaD529eoQJ5kSpXkMP7cSTTPozrDJUkpZph9fTQyNPqY5acNunhsiRfDSGFJh",
  "key12": "4znVrRJueKo4RCngxodAtGy99yNvYPSLbW9D3c5vbRhWKNCBUFpUBbNZakHzJvsoXweik9hgWTjcC9juzwNsbJj6",
  "key13": "3C7Qfhqv23PR8ffA2kDpMYZzKQ3nfhFMCow56T3SQ7wEtXyMrjUWHFBDFJVwwEDvfLLwBirT7jx6MT6avTDGVFP",
  "key14": "hGPjewaSrDjQVgNAxgSfww3BRP5vUBbiU7J5df8Sr5o5yYerVKNg9qCsooxQh323VNswGfPbhruQbeqj7AEj9Kf",
  "key15": "5TPTVvGz5ouFtHiAdBjXvFcdPWdptsfCBkrh6q8Q34iBANW2G7x7h5MGgS2pP4t67nVqbrFXxTNxMdVVBUrSqXh1",
  "key16": "5X5CNSmnY8jmUqMNjvZVkCgaUK4tW24aXoG1e7wfciuUUqcxGR1pppMMfTvNRha5uUAxWhyLS33RrUkVdatRb5nB",
  "key17": "44ee9hpS1VZffw3qCR9qjb29bxgrURFhU2asjwtt4Qcp8aYT9pQRb3QK4vbnvDyuMAJnuoStBF33qmXeJeP22m63",
  "key18": "5EWXyZm11nU2WFRUCZLUGwQmi6XyG1abV15N4kPSMUhEZPmW3T4ZNXHFgToj2mrBmfLUZM5hphXu6sLX84j5XHxR",
  "key19": "3MwdRXR7dVtQP62bsvbW1yBvogm9cSbbBGRctHuKe7e3ps7E2bmkxQpCw8MX9ezDzGufJiwreZSiYxGHfyHwWwSr",
  "key20": "2jaRTumJmt9NC8teeD9FYoxirY3w4RVwjqMGg681FWQw8hmACfZaiYiyxRgWneiv8o73itBc1nG23RrLRgEHo2M3",
  "key21": "3C8JocQUbKNiKoUaLB5aaqxDxAQDNG4GXCES33mz1XwmTfes5JBbwmxjSCUb116AMWyu3vRbpcwqgozGDTKZjFhG",
  "key22": "347nbDh4jhiZpmgyzhN8wKu7zP7DgJfYazKVbXMZCCz5LusGU86jU5JxacEkY59jjaVPDNddgVnpyUpHj2zq9Ka6",
  "key23": "4K6gyVmWCu66ayV7gufgEWzFc7rX4mnq8yxugk3R4nCfH5NizEgWHtkP1mMyyZgj6bomkMqZizsmJjwsrEQE55ZV",
  "key24": "4qUnY6PEhexkVMUiHHZbTHyzYTxiXoBDy2wZwdn4X4Dv8TE8v4MnPfLwxat8bwizJPQDyUhRzo9arjsBiVCLHtFi",
  "key25": "sQYdSEKyiTZeQLPr6J84NZSbfwtLcYQdTSNuJVSD2tgVzpE3mugTCA2XiRb8g5TwvQhjGoV2wQo6eRNWoATdRZF",
  "key26": "2rV7bNrzRTqi6zz29hBeHzW1WQaHapwDdbv3Eu7DWqt5eHHdeq4nYqPEAfnrYXs65THxLumZqmuQS5Ae41ZMoPPp",
  "key27": "4Stoidtrv5eAk7f9dtzEVe7mTraYPpXmMarMnRq8m4ZAxMxJnmhT8QEsuBWmej9KDJNWkQeLRM5sMdShwLZWqtGV",
  "key28": "48Ng4i7AbDKwi8R8Kmf14YG1yCpFmSuMBobvPvPKP1v3M6sPSPB1vUAgT2ASkPZeLoZsahDiLewmBeozAKoCmSeW",
  "key29": "3iQH5Dumu6aymLFJJT8FXJwubSYavFWZdB2kvntDMqEf2DFVmuJ9ZHgCHXkWM28sF5C4eqc69Bo6BYu4FHw2Wh1J",
  "key30": "CfczJ3VovfJk3XvAXrBPsLNduLLCt3eArtYEbMYdK8rZPGPQCoBpf2RFjKDMwSRbYSVax9UUGKr7AvGdnsybnEU",
  "key31": "5ZLQExxQ6ypM8SYLQhFFqdmfizVgi2PXVw7bWvsYiuRQtk8ai12Mb8L4GiUEAMpoTtFXMxchTT7NfkcrB7yM2XKG",
  "key32": "424rjQvNELbk9jB7f7RTapRbvvcNtSnpkG2b9E9KRLfDwYaVsA4wY7eqqJHLZHFj5uquE2YczUHvE1bTQQxaEEoA"
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
