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
    "2uWTKrUpKwdr8TGQkmDP8hyGXfmZGcqSgPBgSkgnveBYainYebQSmigtQE5joeXZfJaap2fNGo8wJcKbLEqPPmhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiY2TDpicbC8FYvJZ3XDmYRZ9ZJHDLttsLuP2mLhbaZgHwpxsATbfXVnMhuZapMScyT3p87iekUPBiobwhQkwCL",
  "key1": "2DcvM79HV4MNahj3evAiL5A2csxS5C1hoKM5a9mWoPrMemg5hj8PfQ4Ass6zRWgJdcSuHg5nA2GMFcGvh7SyGDWd",
  "key2": "2dzRs16xR1EeMS3ueDhM9ssnmmzFe1bPdCBWoSUScf6BaWySrpJkqzE1ffZQpBP3QvxRdXjo5bWzj7RAWRbjbgBs",
  "key3": "4hhNz3d68F4AHMjWQnDibUK5fjosi1Br3qMaEs8ZexGtuFjDBpKRH58MX2xMuEEz29m2Kf84R5eY9Bi9N2AuJM4w",
  "key4": "5tuy2gxgiQbAceXNwFKt8UVisDRfpykMSJ8zzKkUyciZY1Vn5BxoZhdSGyx8pMeC8zPD7gc7euFgCNYgym8Q6Vr7",
  "key5": "57f9zYxKAQhUMgFwpGgCcb233tu9rG8ZYGJkJv8cdUDZtC22LQ14yWzikdosJ7mB7H9K1aJbWQzVbVqakFfeG9m7",
  "key6": "4ZWwLRQUEexEYKUvAhnLksRS6svpyQx8T1Hc9UxGiismoGLF9ugjKWv9NsjuWHke4SXJpXK7S5YKHEHC4MPDzeb1",
  "key7": "2q2tUSuCNSquUGXDNB8u4p9dm5R2D2vVwQCdzGc69YytNegpquijGgGsZ8JF2mDQFJbYwFVvnqEbMAFyQ6AghLqg",
  "key8": "37x4BvqEAxxqduKheWYxonmTVCZaDdzEe4RKd6UrxoE7qdmQZ3qzsv28qQk21BRnT9pKJGaT2kX7cZdxD2ySkKYz",
  "key9": "4ndWnvzQVY1B348CRTnDGR3NUer3pnhhaYf6hJUxmTgvijvazqcHt3sichkMbYmq9WR382cHTiWW6dQXBoz9UaYu",
  "key10": "2xgnZ9TjNCUeyvXMDWKLpza3mu8oYZJAtsGxxCufSFJNM5UBxzbp79VrVqZEcR1qoP5wkfGSX3gV6gjdw8T8ycNb",
  "key11": "shM92dT3WkrzrGsxXgqFao128FKMLYAPjeogHahXAyyuanUcDrbRC4Yy49zWVtcZw6JTYT179WJ1bEhcDAGTrZR",
  "key12": "4h7rPbQx9Xi6HVyxu7wHhrT3T1CaGgt7FTX3TLd6UPErw6HryeatnCmmH2FHthDuMi4pRFK3RVBLKS6KurQ4tgs5",
  "key13": "5XcCspDYmspBUt9FLSRcP2m7zkr9jLJPFVaRkVV9NymTXpuKwvChqQBhxzzFCeCqhWSKibZz2jHM9eiy6SBGDB67",
  "key14": "3N9adNaafkmzPUCHFkJEztTK2TshNHVkc6bbjs1SEin1kkpqbU4P2793XSe5SBGsChMCdBtd9nzby2sK6jCj99Mm",
  "key15": "3MQ2VsFtTFd4fyjdn2a98qP3CfWjzr9E1VUwQU6uGGtYBkNhy11x2VjGfFh9AG6zqhaVSrz4SKnv2CLeCZhcUFRE",
  "key16": "3zzPxVTn2HmBcJGdYFgmxpgfTPFLypLQ5zR68LMGMPfVUpWpToEQDzq2F6G84spmMDzuENfMyKbsKxV6ZH6YT3tF",
  "key17": "3BCHGZFM4okkud6XsaLHeYwEuwkxeZrAr2Tspk7K4CQd8ozQXUvgpyEf18nX3DtGhTeW78269L6Nvvvh9iHPb9xP",
  "key18": "Yct1GJGy61C4sZT7EJQZvApzLoxHgfgePMiojbjkoirafCfeMYoGYeRCHmGrVQyDD2ALzP7tASraFBJ8djLroFm",
  "key19": "4xrr1LpyFNNKNMuhZ32w6AAkf7oVGUNw8T2Kmru5a743eAvLQsrh1twyAG9cafood11CWrTm31R79UiViwZxRkmS",
  "key20": "xXFFatasErrSBZk4TzxPu19RhJ5L4pMPQHNb9CQ2DCutFJqnUifdXY2AUX6P9eDysV1HHukV3a8WZ1UivGjiGVL",
  "key21": "Eb3oLjdMLPuwvDCVC85kdsAX2spovEyXaHZM5kE2r9AY9k1YjgDkZamAFZQcy881NNzFZ8JBd6esmzWYJEzwdTe",
  "key22": "5CyeWq2MyMNPSRqXjqqcVP3B2wYUiWj9kWC63LcGBx8T5dQyQYUyXSFsH3ybsEmFw67XwYdbr68FPG9vwT4pf3aa",
  "key23": "3xsk3NDPxwXDZ2C3awEUU3yxiZGZgTcc9SxrBB9FMvWCzcJRprvnEN75tfgacwsHuP7DqX8vBJDBH4tJdVtZWRq1",
  "key24": "5778kfPoU1BdZQAZ1M6dhcTimjEKSYE4kjmaazLW4HR35S6Xs83FGBSyccgHtuoXfLbgTr9h5e3YaCLew64aWFmC",
  "key25": "3N882tLba6zceaBThnv6Urh1oE8r3ERDPh53VaLSsHdhzFW1BwoifqFTMUGyfnXzusmdCer9kEEPrArhm4GTomip",
  "key26": "63QtQPj7VkEp4J5YUg4J9MfHxwJEXE17GLBNvS2PriR58CyvsqG2UUqNsCYc8KbYiLgSp2iEBAL4khWuqoMrXLg4",
  "key27": "53Ui2fxNK1sJ6mjuSMFwfu5nGBmGFAmP9zVpRGxXsnw7HoAoaGzRFTUveqBHamu8Tw2oYmBPvSw1Jr5cZQBTtBST",
  "key28": "XMYfUyFNsvPtwa49QRND7gUs5eRFVscteixLcqz8ev94BGBLvkTzS9HmDU4xGM3f62FsQ2oCfg8wWhWeVV5L2wu",
  "key29": "ghLstPYJXZTn98gk5BaYXcHASqwcbfcxv65Go1dJkJ6v4gi2xgRzUJWvLdGRmdKAkGWQHogN97m4iR3UdrsFaxN",
  "key30": "znYKfiuEkLKBXahQ2tr3GG8Swp7WBvHnnU29xU2o9AfNhsYknEH2rG2mMtVsXWD4QjkBXwENmQ5QYwFaHCVc679",
  "key31": "4rAV3JzLEoBNmaCGsu5wgMNXhcLrgyhVwZMxN5EF9JyVPAXE4Zvy1aNExeGSraY8oYQr2f1g5CgScAa7oSNgeyrn",
  "key32": "5oCKRG82GfXg6mdozr3mfzLjNMmiQECV7M9FzzPRMSFCQh4ebX7XKmxqZxgHvFN9uvNdoBeSB7F8eXcUk3z6tRNW",
  "key33": "3Dj5KxUKFZdRwSpbt7WPCjotdVJ6sTnfBo15FGPSPe1QZrCHVZyz8sAmXpMtvatkF89PvrxQpJXmpRhsbF1cxip2",
  "key34": "274C5mKyPzLpKNA2dL8GTWYygGx3PmLha2rLp1VkZd5YVA2wZ8BSwoMZfzZaEXYTB6rr33SLZosGkEnvZk9m7Hax",
  "key35": "2DqEAU4yFNuWByT4b9FLyxTMiYscCQLYuoVaCj2ZGd4RFVKJQpS6gA8ZtvyHuvvVHacHGtuiXQhTUTZqkBeqR8W",
  "key36": "6WK87UD4fY9cCYZN2UgzU6KorcbsmKkuCLfxz6n8LoPe2G9ZCmtgvGhKFu2HinHYUCidyMD9b8fdXC8JPuvdPWx",
  "key37": "3HR4XsF2kvzbJYu9UDzvttysX84tSTWe8BSKTXWRKFcJXcuxfRdKwpBLGc6qEVa5LYqvkTZRYL7fkWuEEc6Y27hm",
  "key38": "22DwpZDPWAkb9BVc26fe8YE1qkEJFe8d8Pn4xhj9G7Fcbo6MqoVx4xphbufy8CbwN6mo5QBFpqrdyuvky9GDQF4b",
  "key39": "46UFuMYKsYxwGzXXEQ7XgZ3HcaDr6sddHttRaN9XZE2e6GaMgyV8DNXiUaPn9XGmJSg6FK42Xjd2fR1wbBwqSghE",
  "key40": "38RcK3vHN6kfCVQsRRz48jQbk5V6j64DrL3bokGmB1ET7oKWRB1uVm9moBkVcT9xV4146Epwo9iErtdn4UnSgzRa",
  "key41": "5zQpaNHv8PCjfDeGV4Z3nTVfJ1rm2P9zkBTp6iMbbFCaESdM3pyrzJY4Awv7z4TApaRHa35eMpKemj6vJpsv3SNb"
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
