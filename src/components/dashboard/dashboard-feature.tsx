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
    "5dTHRPgYbg9inh4BGFmWUmdFnynQ6GyQA9MdpoPULZZNt6nozSs2uXPkD7wwoqaXgH3hB8JsExuhSRA3MBA7rc2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnbwbJDyZU6suSNiTqrpeh9GZrW7FvDBEhyPNvYuK48zwgfZD3JNkEWtwQMPWyLwVLRtvDUGrPRioe1dZD17nKp",
  "key1": "wTaLUjDZh8SrQLLiWG3XPe3Au1mbRw1Hzs5vUFmeeut8WYbNQ7Z4op3jqajZ1jyiXQgvrD3RPVUbRdVL11FVBU9",
  "key2": "4RN31DRzdhubTzQVuKbih2SYSS57NN2qGaHFCFiKqSP95GW7fNvvDf9H2HV8sR7eqVxYexzmmsJK2T8xt9JdwLF4",
  "key3": "2QQwC3mXEPHAGHMhbd4eaKRqzLj3cCntrddNuRcs8XHzHzNKR9xtQU2WiT5Ejf63dyDD1KoV8RfSJFewya6LnA3b",
  "key4": "597oiStKnE1wE6WKT1rBkZwbdUqcxMtLyNYj8wPQdsazuqKdfbj8bKgfTRc2oaSu6jRcVRkojpJeZAr7tUmAQKKA",
  "key5": "u8RT5h8Qm23tF6AmVaRcHiXj3AdD1xZPBQXx6Bo4v7HPYtTyPAGKSVFHQjQqGo6EwYDMNPt6A5es15NCW2hzinJ",
  "key6": "37ZuANuEg2XC224SErwgHGL9hpZE9UnNMnKwdS4zM5H5CaSNXya4MNyrMZrGGfiUPrFLJ5tb5bU7UtDDfgiC2cus",
  "key7": "2V7SnEnmKuAgbmPFHhst3PTrvRg9natzdapzHj2s9KhtcCnjxzkPKvcP3taa48MiGEECD6TVnidQj1JMatjdwJHr",
  "key8": "5KbPegbZRsozCqxbSVuoLKbzFcDVniBhAUysGfaLK77YzQ6VYavWiETMrU3w3kHkwviFwd6heovAEcbmQnVb1CSE",
  "key9": "3D4XASVfF4NqgM38nfjmP11t7Wqk8XEouwMSd3UhEjGGMZHTqLVgqYBUwJi5mznuixArjmJmxHDLCPxn9xkSTpC9",
  "key10": "5tBVrk6sSrZ9cCNtJc1GpsbJ75f1E1VxT7cfpYKVCfz6EwC7Z23Kk8RagqFtt8B8nMG5S4oateDbK7X8jw9wM7Ha",
  "key11": "NzULopgKNh7HMZqUfZntwgcDYhbW1USgR6acVg9vMJtpYHpmrHQXS8nzYwBBU8PcJVZdwfRoyWLee1MHA9c9wAv",
  "key12": "3zCCGSjmw5NiKdfruiYzpP26uejvwfuevLWUY8WcGpifXYeKhHZStpWjGTcUSnLN8A2nWHYdxNSmgKfNYxm5C8fH",
  "key13": "4pC1vrJ6xCHBEsmgCiwdnmRnEasdFC251nSx35q5WYJhxPdGtmjkZ4x45PxKG371ggZqEFiGNHsbkXCoGRgxiRiq",
  "key14": "4y4sg3vTe2bsx28XXciMMTZn45qF9KBDu9yEGar3JDrjbGDhWknuHYvihhv1YrsLRgPWzE9iaXkeWrD9bR6ccYuR",
  "key15": "4wccpFvfRABSaAJh48UKwp8KzLJf4WucwBrmCmqkX3iAGZspjcumAFMsntV8qMh27LqQcDHymKnYjTnpNz1T7xvg",
  "key16": "3esAZoVwyj8ZDES5cJYFY4VzUQeCfavHjMzC9abBxSTE8X6KUDXqXFrKFKwhztnx6wGz71rvn8Wu6FphX7xUSB35",
  "key17": "2LoqZ4DKHx7pMPDH6CpmAcqbV95uv8Q1CDx8RtDDdif7Lqkd6MDiPreNi81hPUP9jghiJG9hFckiYACMQnxaAYB",
  "key18": "4HzZAqvjMAY9b4ZGhQsUMoH3KSh1JpFgNf9UkDa3obybTy9d2cF1yxhRV6teU7vAAkM3SmynWyoVAAqY3tgnq9Z2",
  "key19": "41uRoAKyCEDwewKntxnw5NjpHjyYb5XnYN3kDqk94mFfyKB7GTjzGEJce9oNkFrsfersxmn2tcgRtLkoiPYXr2Ri",
  "key20": "2sguER4giLZZr2KnQ7Lu2JbGRxCPqR6Wg6gjKAX1QY5owyujrVhqMbRAMqK6NNwAVQx6P2qNfR1TJfKFGgx46m8w",
  "key21": "5kEQNU93bgvLw9HEqHFeWmytXiudAKXigwSN1wCkHYkowVyiPtu92FJrf2pDpqBwsdisuMPHGSkehy3xMvUEsAtz",
  "key22": "4wVp1oUHoWBjShLknaHjAiJQ2JSuPnMqjS2Wnxw8fgXMG6ymL99W1vmi6BLW3fmFG5wJx9UkBCTfwfzoKmPmwo4r",
  "key23": "56xCiMy6d3gFavJJngBHkRjr8xkLCsoDBMxCnhSMMiAKK6h6zqawTw7dEVU1d68ZRqJ7XHbWuC72LgnfAqeZTQuV",
  "key24": "jxKhQLkBrJGe5aAjVFpejYVU91ZgK5zcqc2LiB2fqyiRddyKcadenJdjEwrW5h8wsbP1k1gRFRCcoNpRdMEZcMi",
  "key25": "2sxWXJi1i7axLWFRPiAsAkpMyXCGqZ3oSsZdz95Q7WUj8WYBMVmLZKcD2JZ1LyWrq7cmzWnSDdnsbaggZYKZuzJh",
  "key26": "gFwTBGw26r4tYfzUXgr9MMw4isjfznhqrtJ1U9cmDcKhdiReqDSoYMyFSamot98UJmUpUqYxnabvxVaigRUwpHJ",
  "key27": "3MmhHkVm7Cfg4g4Qi4g3BMdkytSeCaDvcYKBk8ADhHkryGUhPeGmD34rmvzJqTFtgaFHuSXvTQS6u5karoJvkEoA",
  "key28": "3ELgEhyZsydANSdMswNkCsEdx8aWseKt4TgiJVUcShVBzoXhFTdWfJD9CAJTwAq1ZLVwLTjHFzPVbRHVnEqqX7iq",
  "key29": "2wfR6xsr4yZ7hSYruLnZqLfSMHH8WkNeWBpVBFtyj2TuVFX9rQkmgEVDcqp4HD9E649NUqNCPq3zfaQq1Yn9GqC1",
  "key30": "3XA8bwRb1YrFKvexH8ce2XgJ1yhv19p3vrxNKdBGu17sKP6qHFZF5Zqoqqbmaiqnsoo8hCn4yXCZiJSDcgD48Axp",
  "key31": "4gEEh9i5DA8JtbykACGabsSR3aLaP6ds3JTwXyFNne1TBhKiG9eswEvBxDsijAR36gQsuH1PteE9w17EUgj3J2Bo",
  "key32": "5mg66mDd6qmaUxdRYxktd7SHjpCwwhgwDa3PVgz4ajdQTAX4anZJvktJR8RngNK35M2Wk3dJ1n35f8tydxQyQUP3",
  "key33": "UoMNRewoAGypBMRPG4Sa18iN3Bg78dLxUG4Y6htK1uiNwbGq32KhqxEkTa5BfE9UYojL64EMe4W73aPV5rzec9D",
  "key34": "eRt5sepdMta1JfyabS1k2KZMzgF7GkFmBJVrMiNfXxUFq9MpfJMHiYmbC5avYhq6JDoaos6TSnZZiY78hmtH8Ke",
  "key35": "3d5t17AKerM4LrPJT1Vz8WgJa9AnZaATbe6Vgg1zpEUeVZa9dEn6VsAUQ2uMwNcZbWo7Lmn75LGcXPCEEn5dRAGc",
  "key36": "3ZpPBag8Fg3XD3WTazrqA26YKk6tH7gziVGfP9MvW5SKqwajjbGtyKJgkUrNk81iGgLN5UkZETKxExjALTruYkPQ",
  "key37": "5JU1Dvcg2MjtBi4kSRXqdANdVHeEDmL5GuUytErKBQe61A4LV2ABYxafm5vDUoFhrbmfemEcZDnCU5XXi2Gqu3ii",
  "key38": "w41qR36k1kaeCxjGamBdyumcDF4VoVgePuSuAtY7gJM73dR85vA4JqMVBUp3s67UgQBMcAJUPutPEHQR5zmeV7v",
  "key39": "3bs9f2vhzqqube8QQJtvbHw12AcGBrPbT7jVaWpJqcJZjMs1zBBVDFwa6yaM9nyVKYRJF58kPsRiBzzNvbXYvM9v",
  "key40": "5hfmpjhQecNFxPrG4YDbJRSGak6Gr7QcnVSmXSn9KoYUW7E3PizXHdSdrBd5e9DbqjozmutHyQTtWFefSLKLsF2L",
  "key41": "3XvByCAC1oECes2jnAsnJuddXTrWYRTWkTwtCWrJxytMDt4zRfHsAm6GCThN87TtnmMv2bvdFYxW45TEuLqWCtn5",
  "key42": "4ywWdkKZyGuU1PjDSQAintDctf5P2S7D6cRck2xnZ7mYyivHJjFRbCsrV9kyJ2dxjLj8VcY1PX27wT2s2Uzk79tG",
  "key43": "2cCt3YcJqpAVTM1zzLCwpTYsDf843bbbqPdm3aaRRCyPMsXqXegHzxBbxoZwcRRy7Wv85BAn9paxHmXfUSDJrd8b",
  "key44": "2iqi5ZGydt2gRwvxhTamZWdMh58F6VfPwNAQYDkuvejKRSY4Sz4xSmLJxvvGeVCA9wy1j8dicF5NemsMWZNdMPRS",
  "key45": "5kaqWFduoopRCNdq8pFq2ukKZjhjpfhpqzFb2G63Hj5U6V1LfGWRS7myTQm1rxLJ8u9VngjkUmchY3knxjs959bD",
  "key46": "2Qyv6gSGRERYyzrz8Aiwo2rmq1rGmXpcaRokP4bKfwFsyhDjviq8frvREvH99e6Xu4MPHaGwxca4N9is4qNfrZJN",
  "key47": "2vgxTLP4hZSnXU8fnkDkFAEx6Kzy1GWchYRfSQMqu4at4cZ9Zt4JZABQqVxV6nYtydPLtexZMn15kLNXXrQqJ3J2",
  "key48": "2gFmbzA2xckEj79GkT824Tbksqhq8kxAbKsyhXbWiT6QzyVnuEEeT1y21ZmSBddv5ACJYL9kd2HRXauyqLUk4NcP",
  "key49": "3nCFVQJVUvFUjj7vT3xLWc2Y8jpkrBYqhGyagLFwzkpoWHrS2eVZqky2FzChkTnThdm9r1Uqgu1rcxzadzr5t2LC"
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
