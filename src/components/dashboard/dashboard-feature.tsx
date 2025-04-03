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
    "3xN9zrLmMoTWjKYNvpHfoLwokPN9YxnFcvbLw2MKb5CvKEqeMB2WM9ZYKsAApaYLTvosamVAYqcwfP22cy8A68Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqfR7xwwskUQhrta8hoTRzvYUuo8XZjBcgcmY3AHyr6MuZPHL4pzuWLWnMGEP66MMt8JF5gfGow6kvaKkemRDaj",
  "key1": "2ppgjesrdZgufafZRrmDC8u71R7xK2jH3LnAZfhfV8unejUHRpje11e61rUK7pB4pXpkF2Lpni3wjgJ58woYbfri",
  "key2": "2BAadMW8n7LexgHWnoAFx4rWrmvCgud6aG8jCwKPygXxJfb4F2KFSrjMRf5KvRwZz5aRGnWns1nZvy3XtUwDYUXF",
  "key3": "379crP138sQsim86uxQxDywBxHcyeYLg7xakNmAHC6VQK1urWnpANkCiXi9wo17KEXGBZiqpi6QJmfxX9qcrfF1n",
  "key4": "oxwaszNPR9BYZwz2LyZdzgHXdN4n5PAPLq7Gat3JNAX584GWySqUogGau4cnVvmaQusD6amqutubqRHnnHAnboM",
  "key5": "4T92NA2ZmhoZH15EENG5jCpuiWeDszNgEmUhNLRv4efWcFNK1TrKcANVm9T31pW9q4PCH7roj5QMf398x9Uea3zj",
  "key6": "3WSG4L37YLJ6VRaKwTZciyuCcQyPLuhnzXCHkK4wawbyvJL2HEeM34gk3jBSesCnUfuD69bzzPdqaJZGEsQakzYS",
  "key7": "38JukR1A8i7aQtbkJed3zvwf57g3VdUJKiiKSJu5GGL27UWD28GHuR5Vp7dX9aYnTaKuHJhpzVgTinwLxVUndjNU",
  "key8": "37dAkaqiBrRvAUkwXTmCMYBwWgZfKmyWB7j11TEnMVkSk9cxgKX3AFuVvP4dV1tYwM2bFp4Yv5ftEERyANL47oU5",
  "key9": "5MjVdPPJ3YbkRGyP4JLU8sdXQxB1tWSLNMCsVZERfzzgsaHv4suzZi7bgc4yHCcPVL9rtLzB2mCCMoarpZnuv7F7",
  "key10": "PD6nqXt3fqL2hJBeJNEfEvftm7LJt4TNZRRdKQBdnFU7paq2MtVQALq7YpMhAD6KBzXKMdJobtbtQiGUTqibwGo",
  "key11": "5MyWiqWTxL491tcyfK5MYxep1LDeGCH9i5JnBENeN7daJAWdP78rxMGoLgwy1D8BYPzCFWTUFyt2P1iMEYdr4j6x",
  "key12": "utxrqyM76wRzSUP9K5zzsXKpcfXmUsNZogGohsbDkMXuGhzypoyLosybEPKN6EcdQWBSB8PTM4AmBVuN96nwmY2",
  "key13": "5D1dmVuvfc3gxNYuocyeMu9YHfzSmJ7BytJfcbAiMJernvmiDYN2ZKEfePiuBsxttRHnVameMxarS4812vyuFarF",
  "key14": "5MpDPet7gyy4W9CwaA2rGq4ZzYvTqNrr9abS9j353WamYUTE3RrNKkp9JZAKYrycR2Sp9cd9BMHV1vTkoD7gChT1",
  "key15": "64pSY3SL4k6eDyBe2KPX7EDm2XpvKVRVhGyxhZgx55V3TPeFRhkLV1EKB35FQpMkxQBDmMQA2qon22WBAgvYo2vW",
  "key16": "2npudTgzD3GA5iZqtqb5fixno9VAeU98c1ouCMRFtsmNTrzUtKjZAZsNmqkXHSVpArFhff6s1a4AWEvbytg9GpxE",
  "key17": "4J1uFcpCRrZzhCpwCcHFc6oNF5A82zRKWLsCAMNxPiJhVVnBQMpGQ1Y1rk1Bx9Tqj6Vv6uxQE7ciScwBEjrPJdvc",
  "key18": "4s7viSEwN4VzgtvPNwwohHAxJaadaNyiWR6gqNa6YyBxNhhMhnPz5vnkxQtV6ZiEDQGMVk6aAP15V3YJYtzajqQc",
  "key19": "5yi9RxVvJHupWX8FJEjyHq9mzDyU4XAzA5c5FLhC9DcGdsSd8vbAZWurXrwjnuw6vKMe6Ys2Dso5KtHH428EHpij",
  "key20": "2QgPfn3DwSwrnyQyisEVgWaWuY5Cuw3aAiKsd311sojeXKqCcM3P5g3aYHZGLpHPhhozFuHPoXkrc3mqvRY6d83t",
  "key21": "65XaWbeVdhr2WrAPK9BjFbbRUFik3dAj8DovtiQy7YN4Y5DztKWHWFf8KS6MjrYrqxavdiHVyG38Pw1pc5haNo3H",
  "key22": "3wQCBZs4H7imFDhreisKgZV4bidR5hMdWuisNC2Z8RehY5TvWa1kKSC6uwant8pCdeVsQCmBA1BE1hDW9NsvkV7n",
  "key23": "e8vPQc6nCpQBpVWNUrcposCs6y2M8vLUud8vgEdkbYWhPcfLeEPuofwBpbfG5m2djiGRSYnqP4yrQyDCYF5Q5EK",
  "key24": "2SXX2XRtjtT9DzAkwzXCDRHZpsZnFEmFfFH2haYtxhpxT6uSGC9zVP46yMnewSYtFyrR6jfo3GTrpso3959TU2cx",
  "key25": "4P7capai8Eaf685EYeWNWbSfxWpyQ67oJteZM1EnaN5x2yb8qoKmBzwahb5hdWYoY7h1xf6iTvmpxr8dDNYsQ9GN",
  "key26": "3687YfBgaZaxDdm74L3hgiY32Zcihgp3Wi1mtXmU2mtRC5TdB6LSeCWxUHw1M51hCpY86p6s1Mfk5ypiG3kWTLTx",
  "key27": "2mEwRG1SxxGT82zo8DvrNdVZWpG1kCjQp3tu9f3Sbtx3kovAH8ZHiMkfT2u7cLUguSBR3eRnbBEKHXevoZxJz8Ev",
  "key28": "62Su69MURZCAvJvLUs731ZtvkBnEGDrBfwGYj4FaaoJuccaXEQeba1iTNQhcFNqpedmsTwLr4tfoWtJhjyZvLeuf",
  "key29": "5ZHSK8SZn9j6km6hWuZLqPaSVaimp5DLrw3NqUPrw9tF5rWZTfukBYSkfYSiyB6dYWP1QEf2atUE5pCHij4QTC2h",
  "key30": "3tZ4QDKeZMhPSbU7U8ZJjWTX5z9ZMZC7LfkoZtT64QXaf9djH37qZaLdYgbv8Qzvx2kjmMRxPY2oZwbhzTEw4Qn3",
  "key31": "5mJHMvootFQs76RYEBtfb4AdJ4RK7e4cpcxdNF5W5uM3RnDx4Zru77vvgumWe5fNBvtkBwwFYJLm98FtswWNW6Hf",
  "key32": "38LoPwQPRr3ZwqfEA3i1CTo9ELgUBEnhAVDdxDRD6ZsQK7poHrSHk4D5c9MWLf6RYE9pHSbicGfMEVkymCUzBRFw",
  "key33": "3TuREegvwzZ2zZnM5xUdH2YtufcmVeJwQsY6phAXGK1sMtmkvkwQqWxRAajr8S3McRd2y9E4n7S154DePbPEiUrX",
  "key34": "3xcrqEe56donz5e8gsrKqswoStpMYf7NegVJ8e7HucLysiDMPXngh7WfcqG4MaqZGZXnEaSYACiziVuCnQEz7CN6",
  "key35": "2h4V6hvSLS83yhuAjaMsbT6KiwTtk3Wo6ya7zedBpGyvu3yK11JgKkNAzxXVtnnnsNtKu89ePeW6pdJ5uDBxottw",
  "key36": "2iKV6aL4m2XmGdMTkFd1uz3uiZfPrZ6rd2kDrk5nobjPRWd3voqhAQNpb6ckhGPvw4MZjwYLLoHcVqgAR6Dhu2UE",
  "key37": "5eSwC6vGDJTBDiySRFyxujjNDE3GhSc8oWYiw5Sbt35vw4o4zqa2fZK2HHydnTuCRoi82NuJ2dHxdrsLiGnQTvnw",
  "key38": "2ytKHgLMNo3bbKsmzq2XdAMqap3Sb9jf1kdaiZXNWQjYnoq3bERSBsSrJuS8csApnzXzBTuws8pwVxGMSkTQhzBs",
  "key39": "34LsQf1maXhJfsXtGht3LdVxYnJcjYcMkCGCGqu52BGRms28RRR2BAdccabrYLMhQbYczzK9pzYNY6H4areKfhTj",
  "key40": "4o6dA85a5GanfB4jZtz12sg4MG91WwKzj9nkBNHJmn9sfWpjTFVzN1h1kAmsmzKRmZMoQJP2GCPSupnLDxpLbkAk",
  "key41": "2zkgBkr1CTh2oR2ZRkHcc3hyV7umPbHxjerKAxMCacCofXiUtdX7tm6m498Z1wdeS1c5aWCQn581v4N4dyD82WPM",
  "key42": "5NhwdFc8QMRz3GGC5ZsJ61Tk2VBafFBhWjmWaGHDanBYpkXFQNDuewASjtfiVKjptEUbCYdGo9im2NzW9NDqCowe",
  "key43": "5tHoLqzNAJfNpTzw4YzMdQhDHBcrgN62eg5zgZUkssdhnxF2WHiM7h7rporjh2uxfqrtRphnEgmL9LxsS8uy71je"
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
