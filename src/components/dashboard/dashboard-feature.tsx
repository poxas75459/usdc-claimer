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
    "2tLUE5PiVyvW5SHXvNQQmYQBY5UtPhteNAj5Z9UCUrw4rSNDJp3MFXZ6Se8jbYNMyVbFCAmLMM9Es7ehWtPs7QAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPHw6m5NewjzvagnL3WPc7L63qraoJuuaSo6WxSQQkwhK5QSTd6gpQfS3fDWMT8Jdgbb17h3wExYfmR3tJGUaty",
  "key1": "3WifDCrUvBToqLfo2JhKW9Zn5NmKjHcHBtBuz58xUXFYHhjMyGwQs1Ds4D9Q3uViVctuSMgFMqr44n3192v2SsGY",
  "key2": "3k3yaCr6hAkiBwe6jgk6DrxoLzHRbLU6zwt6ynAeCmSLKr87iVh4q2ayDSMhYybdP2W1LHxGMyDcpXgESq9GhzNB",
  "key3": "24hK6K4A5qs1gYdFTwkGxicbZHMRVQfgvWqdzuHpsmng7uM2ppyrDEfTP73umjj1xLVKZFeF6nFJtERS7pNftDrk",
  "key4": "4sYj8U21kUoDZ4aS37AwvdyuWVxjvN8jopK7xeAe41qXLyam7oXHJQ4VZmhwFbPzp4RoyBewmJsZfJ9GBRmM2hxS",
  "key5": "5RKPybkuw1vmhuyqe8VhUxqw55XMnjsHSibumLvfG2RH6vndpFWEF5Ufq6mopfUEiHaqwqmqBGhmJAry6V4eEgk1",
  "key6": "35xjuizLpfzAzEuA7PMuo787fBxxPFdj3dnietZFaLADDsWEpwzShG7ZDUfaHo7CAk8fyGjEq1CXgmrT4Qmv7N9e",
  "key7": "3VLnUQFYoG4KQik4KSfYqJLRjxfYjVJgpix63jTSBbRDoyMDDQroXWXf2KGadWp5EbotjHr6XH7DuPk5bVztGFNn",
  "key8": "25WwpRuu9xo5btcDByAFu3SHzfNUweBhTZwUxut3sJJaVNwLumBWraEvy5yHeg3R2SSWD6wwKKYgFW8MCwsztjUk",
  "key9": "427gdvYHYt5dywHput8EEP4jEs3CHmgAQgiXCZSvZMLZvBCM1uecowgeW3btMtAPw5dJUnYDt9o2uUHKeyGtVuD9",
  "key10": "ZF8t6pqJ1c5ZhCzJXKeq5UpdqczuWi3e3QYX9Vk1pSBU9YsZbFNraxPwtCmJRQyyJBSaKDGkrV8Hesf1xRi3BLh",
  "key11": "vBencNrEMpoCvFdCWqR7t1n8aujnS3ej3Y1TvZsWndYvo4wYJhUx5SrRqkayff7dmzahWbvLMaBTVEgibhrKr8k",
  "key12": "3kMwpjzDFXGTM6RWZNLZSSUy3aiHsRsSokdHSRxhrvJ2nxc9KqkohXKGpd92o7xVubFUTP6JkVZeENLyA87BCFkj",
  "key13": "2P4ZKf1NY7KoaZ3oGyyVwzRfADguBX8yAY6cwszWnLWTnpC976bbdPN1iXPdDqMRxd2zSw5nCxEy67FWkAaZCFq9",
  "key14": "4cLg47dMb4StQpQnt76xFczkFpmZayHRiGe3crmZHULXkZF1J74GVBg9PVCJpc4DSDPgKfvdSjDrV4nGAMBAYiF8",
  "key15": "4hZgPHDhgw41GGmoQh396hwL4pUm4B5zLqtG2ee615uDexhTrhrgfcKbhxvESCNqPtjrruj4VxvJ1AyawPRzwV2r",
  "key16": "5J7Z95q9mnxKLLCk35K1gg7HGWvPsGEVt67SBxLZWAc8y4Gn4Fjab2R9rGYCSX78B1fEiZC5drs1SuN4Bi1MqwFX",
  "key17": "2U4aMowt2LXGf7dybi4MpydJF2Bgb4hPWft4bPkjhifd4cbQPTHCzi1xH523PRi9z5B42P5YG4CskbFxA2i1gE2P",
  "key18": "56KfoRxa9aMuV71sR89YW5Ya7jccn1k133KU3DYQg5YFz1vqSFwJ4VXxm9PWYUUpdwbFFvnqLw5sqevGA7Cjw6jx",
  "key19": "58BNopxmk2H5EJ3NRoU2jRJniPB3oZQFh7VceAACAtAokBno9EtMNkTQBEeA6JZ5bK7mHonFrLJQvVgrssKXh7Dj",
  "key20": "3te5nSdr9vSvnGCo2qFpsKjXDRL5VmCh5vak4gjNXpZL7j82kAPxggWAeAXN6K7X61Lzq9a7ppSQ3mcbr48tZauE",
  "key21": "24zor6qcVuYTGYPZqHWtFDfSCHh7t7fSeStAJiL31uXwjP2aeh3drtinz1rSRLbfgN4pzNYWEw8PPbpRwYyMnzhu",
  "key22": "3ncqCzbUp274dMx4qpzyaHkj7JerGtmmjAxNGvabtYmKxM7qDX2XTBbVn7saEzTpgkcYBCKuzauKsCDjGjugE5Cq",
  "key23": "2UiCsZugxPuTvafXRtCZwnPtcztg8NqTzpa2zBZk4xdUpoTwE1ZKBhbmdzMpgdrZ46R8JTvX4BKpYWQuTjyhfYHj",
  "key24": "3HV2rjwqSe4SMEqfBn9titdtAyQbr5APSkZAt31qNyNdKQgH2MR4E11NWkQP621wgd4wcWrDWNCxpsBKW8YddsjZ",
  "key25": "4KEwjBr36K1ZyGh4EsnKedo9rkkxyA5QpQezPdYMNREszDA1vS9uKUTcGQkFH6aD4tLzNBSGyy37pre4bWNUi5jA",
  "key26": "4SH7HuuPQr684cyYhiYQxPL8NAa1DzWNg1oouBZXcW5W7cwuM9yMnx7Xbf7ykDNPUvH1ZmhQqZ9L6i8ySNJ3b1sP",
  "key27": "4iSqtGN5gDu8rkmZoge4v8DgLa8fTftNZE1soP2PPShEhuhHrhDmk916fHgVZ9Zw5ZMDJCDDDHuMhXnE9YW1pjF2",
  "key28": "5pXLcrLEvALjqAYCaCyMermdRTqE6km8WcCkHV6xMeM7iBShmjJQ49JjJnQsNjZ2dijiq5Lm1kp6eRBM8GoTphot",
  "key29": "5cBHvQzM6Fi63v5HnJK53Jv44TR61yEW9VbHi6jXzPaznU4cybxN4YgZi2G1hscvFgza8RzwEM6mXpvAxZ4pFetg",
  "key30": "4WwarfyFg8i8V6i9wYb9XnxNcuuLRjrLDQHNEiQLGkycoswEhoQa25QCzjYHgRkN31b92o72mxVaRyofJnKWh3Er",
  "key31": "29UAQRg9sCxPsPWUB41iwuVkNxcCsSWv5g21GyKrEq92hyYzdGSSr853joQcA27E87SmCv8H2jD39UovZDxBgrdv",
  "key32": "3SdehDuspz543zvycWo9qcJh9GCWSQtuVk89mjMqQjs2HfNFn3AuAZdKbj95QkQVvp9pqxSQNCc4gFBEdd3Map5H",
  "key33": "3FbaqRjV5TCHtUqq1eVjwcop6kMk2jbtfKCcE8kjePnz1n1s4w7qmcCxwMABRSyrfvENaV4hvNCdtLoHSxWBZ9z3",
  "key34": "3tznzzZVKnC3WbaajH53rm2ExTs7BHfcUPGBPJVk1Rd6mdEhUyAJDcw4BmEawuc5KAv8LXz7atUGGe7EbGmU3Jo1",
  "key35": "4e5YBe63qrwd4mSUDXpvBSauQ6UmGsuJp6pM2YLoikgL8UqCGd5em786KNjWpCSj7YdLL1rq5W8suWJx8Xpzg58P",
  "key36": "5pxDRwmaE5ZPGG7D2SAdaEnPAXyqjsR9GNcajkixTpyTrRjbQenbApPU6T8ZkaDQx8tKcLE7poprgwVyXqViVxV7",
  "key37": "5CGm4jsvXmeUGsg8yBofHABqdwbQfkWxVVpbE34xsdkhsXnWFw69uzbTP2iStBoDYudYZ6e7f58kujV2BjZmDQvk",
  "key38": "5Q2mvd9jAUAYpGM48BcsmMD1TWu2E7NRmmZFBFhg9GkSnD8wEZEWfG8SzSD9u2MfvMmFLnh8k5ryaftwmEvMEGM5",
  "key39": "5N5D3bk25YQKZQEgXJuaVAnzvERCPAErMLVT5Bmu87PcY8K2GPpMxUmztTUxnBSyt5VJ5BhQ5E1QsKDehr3Wfj5",
  "key40": "2WKESHm7wMvwXa7mzx7q27KsAd6EPwgayvAFivM6J8CPTzkvtVwJ2UUjb3z84nyaM3XFthpcVeTh9Tt9jD7wwKka",
  "key41": "3rE7GxJRPYqh6hWi9b9VFqowmbkCJ2bR1gLwyE78Edzrt9PZ6FD6KFcD4tKcqRUW4XiA64dPcDLKbprrqQGsXN27",
  "key42": "55FYA3tzqpxdieksFZ5yFKcGCUycnaKHsW18XHKMUxN4xJ8GtTvQwnh4Aa84p4X84oCJVeRcLdStthCRdWUvgh8Z",
  "key43": "4AWTCFxz7jMwLFzb7uyNjftZJYmswJ8GFGT8sJiUC9PrNQALu9csfqeEL7qRzMruY1Q4e1zXUAExMc99jcSfGEHN",
  "key44": "38Qs5reRuhH497JJdWA9PyiMX1kpbfBaxEfxPKfAkbc67rqqQ6Yr5BSgvcKEcV5fX8rcZ59h1HdMahkyLcJYLG7S"
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
