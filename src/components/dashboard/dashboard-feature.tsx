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
    "5B6sSr55p6baUZX7JdnJEHGw7ePVgMa5zUx7zyyQPumTtRTitmZuXj3GnyQNUzaVsA227VwskbKphE5acMjMGL4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yF7MNjwHEi5a3d5CKuVRCDcToSHamYqzsNwi6Pr2n5s5wMFPrekFdxtZfuPgpgy3hLtepknhWMLaTQpWbRpxoJu",
  "key1": "5FzGD4QRmnvF3VkBbJp3aLeXqggFkn6TsZLVhD4skdvzDEM2wgKYMCMxb8Q8YBdktAvrgf2pbUSHrPj1VdWw9CDc",
  "key2": "3wiDdEUqhQDuDDVUGovGP6VaoELFMfynEDhDuTeY387kd2GSyefLEfjuNZmP69tkc17xqFJz4MTSEZYvXxzZQvHt",
  "key3": "2DD8dxX4YgRQBk479iqNqUxG62jid136bTQZKAxwkYVNVs7EetMBtpco6paacfrPWwc52CViNcePEbCkNbPGzgvH",
  "key4": "bH4ziEpJ3jfor4y4YfvuYm5d2UkrAgZeFiqhN7qLVF3hWZ1ZBCJWrnVwF197k3rVyt3c9kx5vbTaqDNP3eQRJwZ",
  "key5": "3n82tX9wwBt1tK2k3JNvNJwLdFy6YYtivuRttgYkoVVtrMNj4e5C9cULgmWnT751pT3Ea7TWZtEBcZY4EszYWJiD",
  "key6": "58CuPx6LPJw4PV8ytUccWn4C3VNBavxwQuq9AbbXFk3g1hfNwMerPmJ4eZzLatwiADmSyHxrQjp7UMNVJ1hMoP3j",
  "key7": "4Vzi6mMaEZseMbwq9LFcbEbXkZm1gE7J3pRDvFVYTfvUCtNhP8qT7PEVnTLSaWmHKbsixbdVeALJHnn6m4dp2w5q",
  "key8": "44xAps6i7Zk62fLYBP3HSG4jK8HuhfT6fxeCW5wU7tMhiLxktBiS4XR6rsCXy21adpCP8zKX27UQBy5nuVb93Y8J",
  "key9": "5AJENrjTYaHCBgh77rLDAE7X5EAXftqTu3tM3Wed3iR75baskVQzE9WAfgM6uAxN3ddcD6kzWJEUU9NaFVaAkefL",
  "key10": "3AwGr81gKMBxMgd1DkbYwtYY4pcrMoGJVYM6bAERcZkWd6FKGaNjLdSCQWfk8Cy6oLdDTgHP2A6L4NZB33LTpDqL",
  "key11": "5BsrYWtqokjg57cUQfjdzD3yF381P1uvumbgi9LCpsh7P3BaEduEEXiMwNU91CRWJVeTHAMh62zAfjK4RwZEgYN4",
  "key12": "4qQuB569aHzERHn9kFWyuWJQJNKMnPocHUCJGUp6afky4Pi18QbhyVGghezg7JGmNQYUnMYmaWD6zEBXtKuDFDjB",
  "key13": "4HonES8BgppbZSa4wv55fSDQvfUnDGota3MkYmDhkgC3QJ7XZNV8G8HDMveLg9hRxAWGrC3sMYjz74gwoxag4E1q",
  "key14": "5uqhMmHpVnHrPSW5vwEoBD5WC38fu3N4Y8bTTRtcaQxZHHwDYscMYP5zrd9pDrwWTCmeDE1GvtbMcRhjZwfHdZH6",
  "key15": "3PN5hPNUWJS4WfncZK1hUJoGRMXWsT8coAHEc4WLNeDBBTssDzZjb4hdPAoNR9aYUHGsKnHGr9g5nFbQu5EB7jiT",
  "key16": "wARS8BphDiSwEHoLMamgiiF3qJqmHn5ovLVqMip8ibhtm5emjAxVKpLCGN9nsJF1QzKvyDcfSeeX68muN2rbF5V",
  "key17": "XcNNAU4aee626xt3CNPJPyA5rZfividTN9cWPDkC7dvuxvTEPBgDwwrVA8DxA3gyoBoWjxnSYfVeg5fuxvzhZpZ",
  "key18": "oihgQ4LkcZhBxXBtT5qL4UsWz3V3cLydUMQuHSYKPod73XGX4hrwxysPK9zuzBhCd8aroGns5vkux8wx3MH25R3",
  "key19": "5mdnNavsXWAnMwHpWCLPrzEwgxSV4VBkVNSp8Yr8j5BwjZBAw8dd3sU2Bbbj6SwpComLHtSmF4m3XmCt8PT7TCgY",
  "key20": "3PJna29EPfAFisGX3z2Xo6b4zNHKqJp3FLhKoUKgopWEAzRigg8fnFd6XJEenqsGwCdFoVbJF5RqfB1pAUzcxVq5",
  "key21": "3zwTb1eUzyRV1TFydnKLWvQJSHRFhv38Qw6PgSAenhquZtgsDvVGEKNQBdDRZuaVw5VpYwvUna78JCYWxNJ4ymzw",
  "key22": "2nmdZzFDt6cJaw33a3Gm8yLz8m3zkq8G88CNeZmMrrTYkiP3iwPNqyrqsksbw8oCBk8NLdD1NR654TpDKLbEarD7",
  "key23": "4YXUpSokPoPJMMb7BCBh2ohMqyRxi8Bg44wbKAnHXEK1zxZf1L7f9wPmawNp3kqr2t41TEkALxC8CQoKVoQyXTJP",
  "key24": "3WqGyGeYQXpA4edT5gRW7VobDaLUQ9vpp4dmLsjfsSNhJNUWhWmWK9kfhyGNtb5tFLrnS7FwkssoWgNrzZhyQuF9",
  "key25": "34BiY8yxYQP9eyxD4ghDFEQi8XuGo6XhSR7DJwsLsJZo65LLV3NaQAKY2z4ZFiDfkSgN3Kn3Gh61gwK3D24n4mti",
  "key26": "2oJSY6YP4RtX7eK8D1kmuzTet8kdpbnn45pQm4agNSUBEzMd2NcLZM3Ghu87p8upe4bJq1q48pxapspUVTC4WY2p",
  "key27": "4HSnSNNHBWpyGVp9bgBm7dohQGjDK3JuhcWEXcVBNd8AjVKHKvVE91RNsLHYZxNbLeGBrfjBNrWwqrn1DsPzP3cW",
  "key28": "2F8P5WhW2k2o1HBWqoY5spijRo3xhDDPytdWa7FLYZ4jdxgUfP1MDHjf4hPUpWj72ELtDbd8GA3h9eCGH4GnQQCP",
  "key29": "2ocCQgZPbASiUaQFvRwLAYAcUkYfGUB1JQQm1DKBaFKdsi5Neyu44XXq2i3d81YVpapyb23hMiwg7s5CER9B4nsD",
  "key30": "65tTQDEWbK6g1kMThDPP3AoD9qZN3btB5tiqVDqCJu6sUCZbJH7pf4kFGGk1jMaUxSGyStpGGhUdPXHL41DTycjK",
  "key31": "2McVU1UFtvUmp6mtwjtEvKH7as97Le9ZRau64QVGotxHG3kuxeNvUJ2TptJL9SLvC3StSAnQg95SFZMCMsovB2tt",
  "key32": "5HEbxVeJhntD1sNM9cQ87LNVqG46gkVdz63JjVYwsNiemt2WaZSQMfBtc3dDwWCNoyVHBVL4WweuceSMQy2zAvRq",
  "key33": "4gFYKgBfnchv3PUhkLTqRUXjXy3fMfkHv8LkgKMtDeYRhqdWeFdphs3xFnYEZriexmfXNPTFDiQfHhtFox59ZiQ",
  "key34": "2eBFYFfySY8EgTSpAaSpah4BgMwWVtbRhewgg2Qcw8zGGSEEasdYcbf2cxTG3RbeSNAX2eo66gQ2rgMV1BbVYND5",
  "key35": "2G6EMRV2jcv52Gnmz4qadT83yaEwuL2k4wTFrKPcMfaweLpM1E8DPevYH8U72fCLvozNT8JW4Wcpn26mznGEzCNJ",
  "key36": "5b7zCC2WVMZTRGtSp59qs7X384HFHgS93zc6zR6NGjmWvLWWP8Bhgn2BWqvc5XWgKZgUJftgqgy9yr7rro3aEVnV",
  "key37": "2AcNJMmmVo2LgM1tvqeFt8nHcoKhG6bjvsenYTPjAd9Ay4tKSrojTwXfGTWnHgxumCSraLAaKtac3F6G6W9c2cwu",
  "key38": "3SGqnr5zR6SG2bV9NxP3J6aFdz6nNXSb5iSxW7KbQYgopsbjhFvCAtWVUe2JkH7oRwcrBAT99hmKRwv6mjRQvKAd",
  "key39": "4SwrreQaKzPMsHpNgrrD1HN3aVZCxRiAyBpy4ouucRZTVC7dzXtaf1ro6hfeK6y4u6Ac6t4gbxEPDfXUvzMEgWTR"
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
