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
    "YWy35ybCy6woiyiS6hnxqebCMCnrqqs54FCX3iwr5SrF3FvaTEqfjwsUxEcuNwGPZVGCYmfVAMLn5b1gGvB4e6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DiJ8Qh22mb8SLhfXWuMH9pyLuYGD177saFV8F88MH6SAnb3tZNJoC8pbCoxoQ56DvQYKKC1ectndaqHJDZxjcU",
  "key1": "22Nc7aERggWN69pRC7guCn1t6L7AXzw9mRf7jtXZoSRjBYvkrzBUjcCuQoib7yryxzMKvMfESWGFaDh3pPLqh4cf",
  "key2": "23yPgj8agZQcDA4kdeA3L8UtViYZ5pw4KRv83X4F8zmGtZShVrkb29rfhCQLAZBddGz8qgvxHY7khV4WGgiaKEGV",
  "key3": "3fU4VqmpJJgQPpLwe5f1WEhGx6LAViWomhjfhjddoLwCfA7f3UA9vouE2XL1ZpHcp6QPKcTg6reD434TMR96qtyD",
  "key4": "2xzSctXdX8XxmE8EJY6wNYE4HTUFsiiGbevhyL7fD3B6hxdgcnQcpSzDRXfxcCkNmPqpPFdNBawtv89eanzQSCb",
  "key5": "2ZYtNY442Qk176D2j862dFvR4kvRVLmZau4hdVH9ut5BnxsPP3m9Vufo3Hnnv44cgFjyastT69mbxyAUMNchT2uY",
  "key6": "2Ro14dgLG3UGcJfrgzuJnyDPSpCn6R8gwh23ufn3H4D5wgFM5g1Lnv9bUmauhsFdTEeYJAkAes2aFRW5wBQ7h8cz",
  "key7": "27n9dM18spqZKJoWCqfZTRQWy95gETKkY1B3u3JciUTrApSK9LAy6X4fmd1ydEMAYidiQZTtBReo2VbvXkZoVDpm",
  "key8": "4quEgWdWjfrkABVsTWuUdbuLV8HdqXH4y883poJdAT1Ys1vdU3L1a6LqT3QEh6gkhYqWRqgwHZmZbo8Dwnbe3x8Y",
  "key9": "ci4VtzzaufN1ntB3qL5Z37YXJyuQPPinDaSb4WQbPUXA4qgKseTKFt9MyqzYTeWFFs3ddhYAhPQo162ULWtDxGR",
  "key10": "wwBYMbDQcY6dc1GZF1eR2GN24Ak3iAmBG1uorRVhucmVFodDjaAGy8M9YUfmoS1Pgt3PGefjbgms1wdor4ua4bN",
  "key11": "3RhzdLCo5YMgSexJBG4NZ5bdGH4BSRyshdJYSdWpUqJM9PFTwFgRUxDLsG2MJBG9TKTwYa7bhhzgkW4FEDs5HR5k",
  "key12": "5fBmUbvSB2vaVz1FH5pnZnzyg83RhN6pkEh2QpfqtLyX38ZWiKNNCWZctwNSEHMMvdna7UDeTesWfAAsfSVbSw1j",
  "key13": "3c6dYHmUshr5uPoZYzQEmjo5HA1RTXDzqvrXE9fdv537BGw2KsigQzg5MwNbYzmmuKwQwXtEjXwfjKJEWrn1pZyH",
  "key14": "32NGpHSzATisJrde1VbhiUGRbKZJbm2NbwRJEoB8qP1PYVTmK45nYH6Ku419nd3C44YMYyTwy9t8WXvCrmBfAhC5",
  "key15": "49D18Lq5QkXbfvYrT2zHa2yRVrpcEFRg7qzNje92u2Mqx4DTx5krinZZ1P3Vbd1mPRUxYHpHES4pdKDKTthR1nWr",
  "key16": "2GjuR1MikvM1xWQUusm77BzZbfCauDLuUdPfWsML14ErNzw5S42R8WWZGBvJA7tqruscUSfvBeuQ5tqmPuKJ75X3",
  "key17": "4rPdqHz87zCLCJBbcktR5JtYfQLjwyMEAc63UZdbZaoST2EukTnyRzibAyJeTVy4nYXDLghvvp7ULCnCafXsxav3",
  "key18": "3gioy58td6qR3hAQR4UCwNAyUyvayNmeb2Ds9qor7N9xSJW1jcxJcG6CVaMKZxMnSFJtWi7kr3EotkWnTgPJEkvn",
  "key19": "WqZHQ1wYj6AAmF75217qUKU5G7b5E3dFo3Zxy1MuyAKVMScVzgfe5aPpGcpxPLKQDz7gHAXye45v564FZdWYn44",
  "key20": "2NbbwRUtfxQfcT97NmQKipq1dY8UZZYTuaaHvJbUqScX91eaHnFD2Wqj6GUtdMUmDtdQT9ytZKDVew4PMXsru31g",
  "key21": "JwM4ySCDw6ueJgNqQX8YrR9QastTkFbD5W5AkF98Zk2tfvymYY4ch4nRXHXenCUvZ4o8S2AvueaNkWF3BtEbEsn",
  "key22": "3KejChzw3h5Fdds8fmCMBqhNGkUhrL8fbD1PFTFufMLKR6LuCQVW3nySd3SzmB4nHPBU2ukVKbbGpojJLdQcDrEp",
  "key23": "5o1JNCpvRtVgpXSZKxdhPMd4Dtjfontok4QxjCFP6zgMd6tkXPDSevJExkkHvctcXTDEnKh2efbhcqsChdTTEqiY",
  "key24": "3cSGbyLo1aMQz6vKZrqZyZzf4GDpSwNPTFoyTxrGSKukjoVrA6mSRuuDX9MDULW1M6qGRBUpJRs5dpnfckxkFFMf",
  "key25": "35dy3Qg6jpfMKjpmYxa4Xb73Bb3qY1LKeZD2SDgR2jGXfAphfqaSnJsYmpU16wr8TZw7Jywyti9eudXgNeD6ZqQp",
  "key26": "5AoLPJfU1cesA4tvxz8EYqSq1WNRtZGLRZPi21UyNkLyiB62cXkxiDifCez1qFaqvxWo1K7Xr8dtTaLg6SNjSkBN",
  "key27": "ss3gnwFRBwwacPSB5p1PXN6G81kVCXpuAM9575Z3RHK2SxxeuXpZUP8LDR4abZ3re5CaJcuLMgRLRzUaMTR51eW",
  "key28": "634vGsXm1k4CwgD2ueGHYh6HoHGpEcN8NMDVYzj9SDJjUe58EX4QdhrLp98DiV5fJzeeYcHYs57Mrv4PYKr2tfvH",
  "key29": "5mkBvtvo9dWYkjvWadgVkHes5c23gNs6A7RbengyYg3wQczBNuPCenSRtH9wzJ9WcdmAi8hSaQAzy7yyKFpsZuGy",
  "key30": "5UTjnwko1a2iVT1dqfkvt319P5DZgGcspitmqW2mGqHnUUkRPis5RTsazzR1G9cYNUY9wzGLe5DFy4s13s6gJfun",
  "key31": "Qh5UHMumdzwpWBd48N5JyGQ6SLaHbZebVj95Ddqn7tPtJhEKJ62K9yNougJS9gCoRjusmGrx5QhDNUwRRnx9mzd",
  "key32": "ih2jvrxJDeBEYWc81f3okchxNz3zmYyPEamBanDDMvR579HhjcWjou96GvgSHocmXgH2JC2Ntg3DStf9xJs7Y8z",
  "key33": "TMveUqJhdTvHicfrz3ZFtKk3kSmbr924KZxKEApbu8pZ3HdrLDLozqx7FNEuVj1qJfCBVWuEzG1aCHjDJjvAXMP",
  "key34": "5rgtnajjcd8rDy9WyTbQ7uAWLoDQqmo4JVgBXNzmYzCMTYYakkRmUGryXJbHdVaQP9d3C6M2suHkXTUrpTcLFyto",
  "key35": "5ZSp7od646WSKrUmbsffQuZ3xMJNnGbMfk9PTozi13ofyR3jv8JVAtpqvMGrTjt1n91LFcjGbu7GkUnS8dVnAxaB",
  "key36": "2nYuZ29YXjGwfCeBwFVQzpinGMxBRNJXgmVkgTqNniqdJ5VGxKxcRdebuBEYS4UuvtsR61e3atTQDKyfGQbknnLT",
  "key37": "LGfPAZbpYwz1D49GczvChmSU25KaqC4s3JerVYQ7nm4n7BE7PP9RyHh9fuNRisoufgeG9D2CpfvbkFcm253Kgiu",
  "key38": "5PxpdggNxUmApMfbgDad3qWXSwpmmKMBjB7nruSWW1dUe9KQdr8XavstSLUJrGeG6gGBKHU8yQe2kQbS1khYYRew",
  "key39": "4m9kjW3nqqh2irycGceS6BoU37iXHynoH7ibtFEFoycCjFZZyFfUmdhUb6NjeoGDD7daqWrUu2UQ5GhQDanr1aEr",
  "key40": "4otqtyAkN46YwUr5CFRRDax6z7C3ru82HQ5faecTZc7wvcVGui2CdGBJ4WrHwwcK6GqQgEAqxpGjCVVPuTeXv2XV",
  "key41": "3tJH1CPC1sqL1FuFcz5YPqrcGZrmm6iJjqzQDuEQbekQdxcjJHLsv6PFbCRFpK78H36R5Xkbo1Do1zV7gbdDxJJK"
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
