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
    "4XJauzXuUEMfbhQZZhoMoUqSJGV8rqgoeG6D2cqxURowA7ip6TBDQbz6SqG8cu2j2R55Z567SUV8yJC8xYS8oJog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMTCc8ss2ByFrtP1bFPVznbjhXqaodyyssPWnG12tHSQghmb1TJeUVgYek1GaF3un1yxF6pCfBYbfuLEJtHjCx4",
  "key1": "3ffBor7WDPEFZmJX8isPfWzFMr9LuZdwwW9jUjw9JaJq1BU4aKQbBPp6K8N3n4WKj2RBteztEZZyVFXvFGfv2Vyi",
  "key2": "4WHzjvoGWCTQe5xJrpYKiEMX3BCVJCV4tqENvdmDdzjn6M74GTTa4fDPTY5G8AK2HcN7VShfZrjYDvTh5ikMFag4",
  "key3": "4WuLZgxxQu1z11EEQkBRMvUQsyVNuSkABaq15quqZ8guPutWcztP3XhPsWdibb8CkVzmRwkQQmfSEDN3EmKkAa84",
  "key4": "Y2uYTck4j2krcJiYepQFu1GBTEHk8AqYp5fxxkuf2Uawzd7E4TYNaAKytYZkwpM3Fh7cTWqDVmfKtyBP7VrjVc1",
  "key5": "5hbhiVuTgDmEZrrHZz96j1YhViuT8cVFbi9hYHUi8CdWZF17xib3nbuR8dfHTnUaF96Dp6Nn4koeSyG63HkiEDez",
  "key6": "eDmomyTS6ENzRD5cUUjesnAhSVSaxtrRbK4nuncDmWNFd9UhGReHkXUtgSRy1MWTgHH7TNvrJrqZoggNEXPMPEF",
  "key7": "2yKZyy2NJMGeM4A3SDjdnvqx3jwd8nVTUdUy28v5T4HuHv2GNgBk4roXkjrYP2nm5tn5wjNJpbUH9tH9eWKNmSwr",
  "key8": "W9MquhXkwDzmWaazcpNnU7wPXTHLTnL9iBoeR2civap1qZYPLtigCPYuKbV5Z9XgM3Ui3k5yuTdUcBxo5yBo8hz",
  "key9": "2egy4hx7XTTU2CcUcyYgDnhyghLhi4so1pNgxLV3oLHqEJTkxt6CcnpNQo8uN38KGqkAHXPLEaJC3KSqaGq84DfW",
  "key10": "3epy3j7Qai1ULecWsyxcDijYFij4YpLkaUGi1pqYTSCdBaXB1BPLhi2ScfZHpDM3ssiQBUKdW5azMne5q7ZCdz4t",
  "key11": "3j8UkmtvR2g2kJSsstwoiVnkJJC9L3shDL2NMAAcHQLbLsXWpcrd5nZwh55Vz7Lo8UX17HtnPPfPukCg7iAKXBCw",
  "key12": "tykiyEXCLHjF2bLo5vyBhZW3GsP8Lx7oRQAg83kuQ4Hc1Uur6oTfUqfBhBjNVBrnjoyE1o3rRtxXZmcYSoURYnJ",
  "key13": "FW6vyoBNhDcywKcMeTfHjKWgWUti6Vg1vFsGoKc8JAee73v8J6jAzPN7v1rhvNgc2k23VwYn2Rd42pD8kKQkZDY",
  "key14": "h5wCEugweiKhHtxrbiAEKeoNSMAeFizyDtQV2QRPYZ6RBfRHaKoj9jZ96GGhjKpR5HV82K2h9jP8ZHdxrnEJWWf",
  "key15": "4SpYUrm8PSEjepEqEdsMLKBxgkqvLCX9Qa6hpAgc7XRyjYpQhK1yY46iF8T5tkAJqFRU1b3TuEk8xiPBhvVBUwNx",
  "key16": "3fojfKKx7Wt7kS6uyjzapcY8E2qpXPZ2GUATunXU2Ng6rR5gsb6Uzs3WzDFvsM3XaNEEUvoP2WVqWAtSCQWSju9G",
  "key17": "5vCNzSpfkdwcwprohKjP1y5ErbVxhQEThX4Cs9Xvo9WmqFG2vZAeyu3zqgA8ftGHmnYmPvk7udUXs7EekAnk9wpV",
  "key18": "fbjmpjATxDiMRcagfq4d3TzRV4LKN3Zgr9KXHGQeK4enLdFX72eTgBQx2mHDDaAY6BvdJSscL9AsjDoQGEhHDbc",
  "key19": "2W9W7L9VwX7kPi5FuohfyxtY9ZtvYfd4FGUYyekv1saMSBnax6nwBVNA7GrKje6zTdPevtzdpXzxJVkSrTa5Zhvo",
  "key20": "3kviqSk2kAzCV3oZwiLtNZVkH8eDdxnpBRrGktpgQhYXJYwps1o1AbNLScDVT34iPHyhzDfx8KrU1fjSKHHTqjQo",
  "key21": "rgcaUTS44GKTeECMPh7EwSBXw4YQgxp2zJVsyazR81bXWEbHBtC3xooqVWEcEqe4YzpyxVaDNKF5SpTWfFrJeY9",
  "key22": "4w14iFZxV28yGSkEtT1HdbsPv1KiHkjdRD6VcrdYDNcJkYbtkGgz13T6NkrvzEPnE2LKbDvaxK2MqHYUxCkiJy7F",
  "key23": "2uZtRpBxPBkigfwftDm6R1CePVd9VD4gYFTQiRmpzcAvgRBK9TcaJakViYs1YDYBXET34VYDHHNRoPgfd7yy9KJ4",
  "key24": "4C4YmvJNU82JbGULDpTN28MXST7z9AjQY3bfsMLzAvpuNUUPwjnqQ5UKE81nebZa5uS68zpDzWHFMHtowdKeRVda",
  "key25": "QTr9civPd86nRHXSChzTbnEzboiB8euekYbUhEgoYcFvFRTazJPuG5FkYZdMVNcHdpEymqXFJaeiXMbMEuQu2to",
  "key26": "3H8wFdLvtKELexb4rkhVp7vgyZhCpnNrbBtd2zkimNyFN3vQ5EXj4hXQf5ybCLgH9bRykpzBydDDvxRWgEUekTgR",
  "key27": "5JgYX3Qif6CiP5rzYqC5cJMkw2ZGxgHxSDkoVPa8R3xEQU3VDsnR118gseC5txcAccf8dEXLUbd5TqtUHYPmq93M",
  "key28": "2DwBTRRVDkYTkXBYHj6TQsc6TAFuh5wtaerFkbgjVpLzDXfZrY5owFwadAsYCfNBppxA3QtZp7rf8MHvUerySxxy",
  "key29": "5A3EV4yVm8493Ncmrnc1uyrFQnfL2VJRMK8DJdjMDDND1Yrmw7TeJc2E8xtzsHAUbTkrjih8J3ZLgy9tSiCjHoF",
  "key30": "58cfj1RLqU5cSSHF3vkch53YCFZSAzZXgNT7yYkfRSRDUyeCiVRkvgd2p5Y1StFcvfyxoQmWhMjkp3tHkubwUM7U",
  "key31": "2B62HB9xq61LHsx5y4SqwSobXmUnGY1s4FD6JFJhVjzF6y2aCjHTDfbqTP2dr4yBwpiCvWpGGQgUmK3BmD7V3Z4h",
  "key32": "5AJAUJxCLLd6JFjKGZvgyimoRqywvHU9QjmNsV6aPLxgoNFDt6nUMCi7ijamQnQMn8gqy1fUQBV91F9itpUcak2S",
  "key33": "5xCEome6Lf4zAmTVuf7VToA2ZEoaTgdxVqV4TWJy35Rdb5Nq8NpGiGKmpKcE4f83C1HjtNzAYnu6YgbiUZebhWBh",
  "key34": "45pvbActXY5ELyr6KmVCJiY4wXkrRVYozVN4VKwsGUcq6ZLAnG2A98nMa8fBiWXFVdPeeKzf2CuuZ6VkQJxFpJ1s",
  "key35": "qSq5zHbW24bUUVXbxBrtBb8khKbz4aThbydkEJomHk17zVf8mr5juVxraaeL1RaKkhXRT1gwbpjgVJtjrj6Q5Br",
  "key36": "3yP9PUqck7ZJTwGQ7xuBTh31Qa3KL7LytsZMjomgzdRBU7QZp8LFiivkrNUoQEtPZtycoTDK6t3Q2U8W1udWE4wU",
  "key37": "3uJupz9BnDcrx7MNYSkHhciozFkQWKxHEQt6pCgMFEfWj5Zqy38WRNF7jcaC6n5GvkUK8YAC8qR7UrJ18TSdMmg7",
  "key38": "2e91qrtu5DTUNMqQgFQpLagV9i1vsQ8tMhoC3YmBTa7rAh6xrQ8qC1Byx1nMTAMK7rZr8KaDBENUbEAtLdBRMrSA",
  "key39": "3Va1m9bkFtFCCiR6AeBxA5H1GVehgd6yHdCCcXRuApf7awV7f5BVdwRzUzYegYhTe2ixYaaUHE5YYoeLdL4esx5d",
  "key40": "4h5GLvqEBHyV5frFACy7WJV8xMjHLoUGzWxSLtBzD2ZM6SK77rR8CQom4owbLwipM6XNtQimdvtWZrr1DqeFobmj",
  "key41": "4c3c8L1zCp8jaPJaXPDbZCF6mFqw2BYtihprg4RTNND9Unbh5qjkbqzRWd2qz7d4XM5VTx2aw95Dy7bXCxzrhCBf",
  "key42": "qm3q7Xrp4CRJVrhqP2qixeoqEDyjUve9s5J6HpJEpMS5yUY4wxax8exuGfxq939zkhuMfvjJL81mwziVG6DDuN9",
  "key43": "4e6PSDpmPgu4avkaCyWgXFTFcDV3a3gBAbboWWcgmGxy9eTo2jiJ6FytDw9eisjSUmbc9gbZz8nMxxZp6tnt75KH",
  "key44": "3NnCcqq62YS9TNRQB42FTzAgcgbniXUc3A49c2EFckUbzphEGLkL9jwTyiAghSMLUTSMC6QPPdY5qtjM1VMfFRkW",
  "key45": "ebe1E8xq7PhynpEqBopbZw7jeVxbDfj26WuVuLEkUfQY8gAz7enK5HzJmqogcZn6dT7F7ap5uFVnKKMPTLit5ti"
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
