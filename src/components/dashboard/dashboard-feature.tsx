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
    "ZAvSdhTUnt78nBCnZDJSz3jo95jRymJswKi3AfdweXaDoAJfTpzb7kQZiktcgbjXPSaNeYYSEN5qyNdamsZY2GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HStFnP6eHzWZEcAHNN9rya1YQ8MQ8bFs6bTvbgmsYkW686ncb3c6CvRnzv72Le6ARtHNhybbRQEfqWYwnswScWh",
  "key1": "moLcqX8yF1CTPHsZr73p1Y2nXKBxoWyZ3GWif5h2Wi3cb7yLFLmLCqbobfhZeN5uSvrW4KLgUSzvj8YL5pQrjuE",
  "key2": "NBuSKMWSKqRxH7Bj8undDYmo2cdYAgZk6esc5vtK75rzWf2tb2NsnnWbAoLVnTTTdjY2y32zviXr1fKa2prXSjw",
  "key3": "WfJKzKa8ogWWNP653rQFksi2xoJZwL3bfjhobdZZc3nWgZ1quoXqWsZQ8iUeMFrLrKyE1xZ4bCdKAYagGp7TUeC",
  "key4": "3Cr8LWQmutSZiXmmAggwvL9uNaZ9PGKzybGVefi6QA6MHLdGmKYJxtsEnxwMtciAvQ48adnMfA8Q56Z1xaT3sLFe",
  "key5": "3oFQeQFx8C66oUFxMuPGamTMFYciuqruF9enwQkYmW8uTCyJtwxC8bFmGwVvrtyh1pbBwmyHdrXihsHgPSLcbHZR",
  "key6": "3yVTUWdG8yeR9ihhRFxFsiYGkjF9gbFgcbPcWCzdHG4pujzVSiKv9628PuFMzNuWKe1nHHR9iYVGXUhR5RUpbBw5",
  "key7": "2ESNU5e9T1BjYbYxXcjVzL5PoyGJy2EviMGMNrWH58rj9tzDgBy122MXLRy31HJvxPBTYjVy7HFiXA5bwRpYSzrd",
  "key8": "37v4yYmjjHioTzbShJnevmEL9r9wVjEtzaSCx5dhWrST5oNqAHHe12e6n9NeZAdezUM2d6b5hpSUFa5LBV12ow2i",
  "key9": "5uQ4p7i5fE3t6ogdDLxpcMBJ7wESjfMQQCQc8135ytBpay8XvN1pjCKZN3ehQRvZPv4HwKnXy91gFUpnbYUPCJv1",
  "key10": "4P4CqJjCxS85aSds2ULGJWPQGyWWXFfNt6LoecXfJwsVo9rkPX6D83rE3wwkmxAwGH48E4FNPjaeDUL2mrPPt5qV",
  "key11": "3ttXSw1tu9z8ukqqTcT9vGHjnTmkg33ZrYTUo37evLwXBhrKxmcu7pqG5MagNQypTnRPziJxgmareT3TGWSMhZPp",
  "key12": "5DsCA6uH1VVp6ocendTRR14J7LjAeZfHukWroLhqU4rfRWG5qLAVVBq2hoUrzTiURhh26ypxTYBrYKko3LZR88Ld",
  "key13": "3cqT3kaVu8kL7htjf152EHMP9rjqa59y6Tr24QbnkrmuacD8f4Yb2Bc8nDJxAho1FKDNUi4YtrfBtX7hiEDxc2tn",
  "key14": "Jhwkp36sTPTGsTMWhdWhd26ASF2aUmQ6ToxuFj9BXiYnRqPB7TGh9ET2Aod4ZeUvnitCL5nj2AUd1NJeQQAUEwN",
  "key15": "2Y1TcmiXM1DiTrfY2UCbw1zQHzwsvCcixGZ3knFTWZHB7ESPSQcFU4SpsbFrSrgMW9NhuScwpBwCzjRCGRcxf3Wy",
  "key16": "2S2Q4QkFYhpA9KC55EwDEJNCVHAxDEod71JoJMaZQunN1S9BCkhoYYBiyNQroeGEnFCBq3wTn5Ba7NVTWzkCHTh7",
  "key17": "4aAyrf6g8f275seE5huaWvvTKK17S1H19UpEZ2YPkYsMmC4Jh8Go4dj1rtr76Y4gGKQb96wYuBuv8FTwT6URfCLJ",
  "key18": "JFBhzJ7j4ATy4rNEn2CG9weAfzmmex4Sbbn7Wa8fLS9Dm9zyFiW588ESbr2aTXVGdMiiJXewD4wn4Yzu6ECq8Nz",
  "key19": "5jHN9pFJxrwiE6LmggDKhntCTwax5TKq9BsNog5eA48yNoqgdT39BsTTQ1LULJJtwjHHM4CnfNgLfuEQEGa8b5Ka",
  "key20": "4RUSuMsTAcgHui33npoT2cqhoC8hWmaCrME7e13fx2VYW81mr725pjJJJQ6QvEGeNpmqmKVLMbEzjHZdjj2yxz5i",
  "key21": "xEaCgkgWRCghYo9RRNZSccvV4ex6ujh3vSj8ATUUDKTpyXz358WpJtUi3iGQK2DG6Wi3kyznxkhRi6pAs9YNQrH",
  "key22": "4okVRL3juqV8NU5zUYXCBsTx134GbgazYvm41Xef3X6pj1zwBoASDNzpoFBG1RP1MhDXLtZ3jtbopYtWkiHC9fYC",
  "key23": "4Lxyk1ebyk8EMtvHVYgYLCMvEGrgoUvmfytaT54RhybZ82p9vUhX7DiwAAQ3657XLJRHBN7Yaet5uByjhbUi6qwH",
  "key24": "4PweHxnh8YiBTjAbRGFWG1xjPKJd82wfJrwM2Q2Vs4Wqs54To9FcMmHgEhYVy65c6ffhJnbPJmyFzBi1hoH1ErgM",
  "key25": "513W2xSiUy5qnBdHvUAqD8aaLpxvjpegoNWoFWF23oFhtqn1RS9gQwM2VerruyTXnuxZuv5oeMsngi47oeKGvjgU",
  "key26": "4vf6rkeVeJeuDooc2FKSDSCfMNxmprTpd556XmeVRGNTsPQ5oTgV31PihMBkEaLDQrq7mVtqj78rVmPAJ1DUJqPc",
  "key27": "2wGMk6ZaEU6vu32ueSYAmyChXEw27AwGiBFaa6tmLwshihYktuCMKVuvBWmztw5dFuQdW6Ks9Bkm3DZcmwDZw2Gp",
  "key28": "F8nAyfnKQLcw7mzaefRfBtF8Nm5qEk1PanRsBzCiCj2kNpXiBx8UA6VVBBsrFRWQYBf5ajNvzZSDNj5uuHyUqZh",
  "key29": "2rLv6vHPRMTZffgkh9oAdqQkJvVFwat314RohbZn9dF2C9NbHYroEdfv7UnbnZ16q4RcZLx1JcYjcvFX6bBMA1AZ",
  "key30": "4YLcNAJAjZdj6jEeuAxFE4h9FByBobvD7GpAD4kFHdCMBHrKMfLMDoAjvX6WerYMt1eThT3Tn9EbWoAAg2tHhZr1",
  "key31": "3JcdbrzQckJw54gcwH5U9y95kJUgjMNrqWzBjzjPQJCKzMQHPy8JKSnjNPjv2Kuvv7wrLy92a73n9kF6ebsG5YNU",
  "key32": "2GYjbKyT8ZiRVJFkxFikM2T9D9NCTLof1KgZfH7cADRdySwJCzEHc14cp8G9PH4YC7Zw9wCZemeZsvBnLWjsTHsL",
  "key33": "4Gg4TAtWqbEgSx8ENvj9vtCMkxzjVcURyBUvxUiX99o7KiJQH9Ux16RCrUyZNb53fx6bffkBrN1EujUKga7wR6jj",
  "key34": "4K9JoGiiBPcuHAX5B6Ax1mw8Jia8YnDabbECUZnrceEM8GHKTSifArSqSkb7z9FNojQXdHffMdTjqnkSFWRpDksY",
  "key35": "3S7YXuKpnoTe1KXtVFaMVyWmWpZQ7rcBviDBSa2cNzRztvmh4egR2icpvNiqVuS3ahJ4uYnTE93nnJyLu618bdVJ",
  "key36": "2Kir7Jw35M1tEH2TBwNzCRKvwqatnbGNiGGa3Vp31WCBa73Ck6H8NHaHuoTvXwp8poKRmWt9P6wj4BoeFKPTRBep",
  "key37": "SL5cscZJLXD7C72CZ3Jqbm5MUBcNMUWH6Ke1gTzpF7wNADTCrmDkXKntUN7sNPyUANyCcdaWJocDcL4vFE4SZQx",
  "key38": "RnXG3hjvfuY72E5bcyHYLBJ8RSRSZcU5qtqvbTyHKcFGB9C4WCPPqWkgE8s3k832PAaq6miD5RVu9YAdBXSoEme",
  "key39": "3VGdT9WF1FEsAKYRpz1agneQAHDdMQXi2PaTYHsXZUxjZ2LPqx6aAMda8C19NuLqMJtU8yRs8XbxmHkyNsNFVEcG",
  "key40": "3PaGkrGueKegazvNzytH9Q5qLxdBL7eGSh7YXqtSfvYaGLvQga4t1NDrNutej8fmkX5QQEDeennB9gfzPDrjsei",
  "key41": "3ZehxiuT1rNEVcPcrF4tKHToDSnKUkrkc8Hyb9z7bU55s91rwEZAena4raMofiRiUH5uomwUYDMhDX2yodFFM12Z",
  "key42": "3drSpG9wGwH62Jn9EsPbJPV9voCA6QSATw5Pp35LpzyyuMFyAMpySzCmxRN8PGAN6ZyrAKwN5awdYd8HNrXbvgga",
  "key43": "q4kMqhZi21CTMWExUx4z4op3nZvYJaUTQsjzZXkdA8s1ckkY2N9zhTLr9aFy2ftKPtTy7oJNpSsNSxo9RpEJZAs",
  "key44": "2AhGY8ryYJVH3vTJkK54SYPmHZrQb9ybLcFEEWRugL5fYQ8P9dBWTKEgUL41TCohjwR8tKEC19gU5NG58j5yBrq7"
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
