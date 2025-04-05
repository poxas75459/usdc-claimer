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
    "4QECwBonF7PRZt3j6dTMmWvFnKjmg8dKWWXqj4eXwAjeimtNdREq7G2PJXn6ZJgQDoixdq4XKWq1EBBsqkvWuUyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ddj3v2asdsKRBF5w4nm2NPFDvRTrgb12yowMnruZepGZ5cPjrrVm4cjdwV1eXrSucmPEvQDHyPL95jyjbFgEQMb",
  "key1": "SRZbvRpZcQoJ3pjs7UWgK8EKFguCGw8kmjVxY2KXpo76Dhqmg4QLsoiTqBxxr9evNH3jw4nvP1E1RY7TCLppxFi",
  "key2": "3BAqYM9hBNfmHb5A33MGb1ZmnMtLchT6qceyB7kY5oL4uz3PWQNFRVADWnkokHdynNYc2SBSjecxFRvjhiWrvqBE",
  "key3": "5ENDdyJCaECWPqzk1wgXeavs9UNxmeDucb6EjKQuMi4m9aoTFyfisPHdGMbKNurSzxVzH9rBdvi4htY9eH5cHT4r",
  "key4": "32QDT26jf8MscG6QuwAGHi4wX7WYf235BxkaocgRshTmi8dui6LrUKSfQYtCAYnEeQZpVzYwswbPxHgFVppTD5nm",
  "key5": "2f2uw1tE4zM21Vd3iah1vDzET9gzuGXCMLWRk714bkJPoRfa1QZu1F7u99i9uE99SiPQHsdXPkS58nyESStfcTmP",
  "key6": "4WmBxZU1cfoE1UvbhtQTvgU9eJ1JwRjzHHbgBxL7GJmQQMDG7yGTAatuPFUx98h1pwrCxHEvtSr3rYcCWwykujZ4",
  "key7": "4tyfLuMZBLr8UWm8nKErSK4DZSoKkUown3o34g9XFZuysCSVmueif9mcQAYhwMwBEp9gfn3GUJgqioEbrRwY4V3o",
  "key8": "gNMKbK7B5dsyurpgMQFBBDQWE7P7u4aikBhqUHqkmspwkkerhceayfxemRHrP4PqDyp9HdQnb1TVLAvFdaRXjov",
  "key9": "4cRnZQsHcLZ9Ad8dTqj7nCDAAR1SRERfTg9ZQZuTr6KUXwFMk8HNVgdqJntvXaJFSW83CNBEpEcdk7GNCaBmZZef",
  "key10": "5HCuj4gCVtgRWSEdzRDLkLT4Ua7Hyjc77qXVzwNYv5Cw1TBWjXKec811dstgfTfRAXio8chHw8ra1weukCoPPzsJ",
  "key11": "TWmHLZgDyLXrRM3SgCLG1cB58YjcaEfb1rWkyJwUQ8SatR6SKCgK16V487ZMApcxwdpZfZK4iTbQrbZgJo4XnwZ",
  "key12": "2m11gGSr6bALytePHv2q2kUFUKzWxqCqEuzfSkh1nZ1aNGS6cCEoQ94psqJL4LzrZdVyxVHY1ZMqiTv9pKQzLezt",
  "key13": "3HZYkn49hqNVifE7xPAiFwp8LNUVUBzan21TDWrc6RoUX3QXm6xPiMY3dfqzHmjPKdqoSWSTNNaDo7HkAWpitmoL",
  "key14": "Ky5cmZBoX1FUfDnTFQBcSF8mNyRAUaJB4mWVDuMABH1rY9ooeG1xHdHKaq4B4ENnNTrXEyLRrwi4Qe1Jz3kTeVu",
  "key15": "5CMAzvH1hcBw4SjVBrQDprGyyPWhmzYedvxv8wsWnsvV5Re51qXk6YustV7xihNYCVxHPq8py3tGv2EZ6Q3dzX5y",
  "key16": "GSqRSQ9rF7NJLx66FKHbvmyhJfL1iEqhw96qpBE1ApUAE9fMY4odAcdVbMQV23WGj8CpTNCpdxEYpUqu9pD7Dfg",
  "key17": "5ExVVDH8swrX38yWk757HpZiPrtGQmuAA4syPECE7rpsLQfbZznGN9yyeUgCauFV5rqWbaYd42K8U4TGqjeFDZn8",
  "key18": "46o7uNjHiPAJquHUhz4ZhHCWg6t23LjX3YCQmcBNYqXgdpsuttnr4eYTFZuWhgCgNPF71vcxn4tHLcyuagjSVBKN",
  "key19": "gepvw94j1vfZRmguDJRaZyoXJAe4bY1U67iryqPjC7Ugd9RaYNB2BUZJkYeKVEnfcE3Sxt8YefHEzTSd69RtsEH",
  "key20": "v547VnGxUKizPtGB3aAzo9k9dwYJEuv3XMQhBibmJQUU4zfsqDV5gTke3SMNEVFcnB4umZ5q63Edd99HjncmFKb",
  "key21": "3TL7LWa7VmFJNoff8AjLV2AKpxcD5k6EL2LTnMSbXBc2g5CjNJ9HuAnk4eQU2KyeHBPx4oTebCWVoeWJkLXpU4T9",
  "key22": "63BGzyEtv86HAAtHseBiL4bn6ecan2uR3DH8e32KPZXfoKozpPzmkk6czY7HNk2exUtiyi2uSJDZtCH2bAQ6qrHZ",
  "key23": "3udb8tY4PpcbtiLwqiuuc9KtFRBFyt5LDC6PWmwYV2wdyHYk5HB9t8dpmdiEgpBPn92a9Y8bnMWu1czTMzGK9Ktr",
  "key24": "3odsBFr9QapGJuBNLDqLrT5zRirrTX5rdep9xzUffUCM9d3M75RYhmx7GrQJsXdF7CQ4FtfmSFDcTv9QprGGka4i",
  "key25": "FUwLHxnKApo6AgACq3ZrK5vNiine9wfJZEjjE5aRYvt6krU8Avqp3qc2MaYXKjJzs1EHvysNDbdpZpzUfXHD7iJ",
  "key26": "YdRTZArDB6qcXdMBQWPPS3w7jQHyEJJMbZUYm1qmb6yFBafLCPaAE9iiHeEmFcvTTCBpDQmWzZV5DHTxyBMsPR6",
  "key27": "5qPnQXwjsSKhBJca6yQEDV2PqfgjSv86iwLncwmmYxmckpmW74gMYsRnUoMn2nqwhEjBGg1HAdHDSRyFXUDKZDsc",
  "key28": "2UivVAoH3i8CZ3LHfTzLrXHBLEK7ehhkEbxnqDV6vE4B3EqHmRZPTag7HHa6qvY1qzctMkSg4FUL3XYc4DUJzhXA",
  "key29": "4g9dRKzX1yNfNFL8jwT48KfycWDwEapehVR56pDgzDDC1gVKdd6jMqzkYbt9VoJNXEudkhmS3b9ZCbMKPrVEg6Bu",
  "key30": "5jga4CWJDxsQJtKtn89fE2dLrxzY5KXAHFV3H3VnEETNw1r2z7Gs9Bozs2Tnz2eMCi3YX1r2mRE4hBtokBmHC7B4",
  "key31": "3smYd9PvYFVrXGJLDga58zjaYdGUUMQmz6CSmRZBzJKo7X39hEn6Fcvr8y8ZxaQTpVi1MUbNaSEpQHywSJMR3yj1",
  "key32": "3UJRXBZZXgRoKTGhSPtMFBp8yq8iEWtb3dp9pMSQuAQ7vYRv6pHUaMeTJMZYX5QwjZCx3FipM6GeLBCjUJQp5YwJ",
  "key33": "5PCnnfXsrqJtMiaiCGjaftDB4JPpRwENtyP25xdqTBdUekVpLj16w2mNGrn1L1NsSCRgF1L7fMXFBsddgFnndDKH",
  "key34": "3eYfGso5Vk8JdAJ3Z6RJy24PKu4vmx17McjrgUsgXGW9Tu8bhz2syRSPcqcvCiTPKGE7d5UV98Hd4LVZkBXN2p1i",
  "key35": "5LRwTAZZ1L2DikFppaeYuMAtvbfngjyo5uxG1Jq15L8W4PoZfbAnLdZUiaX1MzyMS1a7Y7pXFedHqvhPNWmGf2cD",
  "key36": "4dxhTct4qzoDS6eNHs2G2Fm3ePmh64p6EbnnQXxEQ5Va4sp3JJujNy7fjpqTwe3KuoKbxP5Ue3iaAzMpnphjv9od",
  "key37": "5Ki7s1keqVzCbvhj2Gudx5EzZCYjFwkwopKr8pxRPjCUEHnorRa37UNCFnAFrvfBfVmfLkJPQjkf1bVVhJjXWLzo",
  "key38": "4ST8VMQ8A4U7v4WcjYDuRXf2hGbWBEZPhavFF54GcBPHrphLEasK2Nh2UJ7CEW6fucWSJqn262CcEpKmrXBTKfno"
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
