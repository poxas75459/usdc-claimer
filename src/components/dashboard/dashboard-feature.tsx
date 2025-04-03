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
    "4PR9pguz37dvnWpWQ3sGJbnu8N3ss1DBtg4NyPjcy3RApecGz8NRFA4y2WydErRErYc13mWo8mAgzdLQAsLZoyhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJH4i6dtzocSXWMVBuoxc3cHHAJiH2VUhWgCydCa4tYj7vrainSgCCV7tVGGYAjBNCdejx7Uc1HaUAnznjq2dWB",
  "key1": "52cshSGAgTA6gHXUvFDwTNFb5nLebeasoGEQp1UsRBn6n3ofghwFVudBNW5Eov3AYRkbp5vXjCzA2PnvTbwkto1c",
  "key2": "29ZHksUEyjiY7gvXP7C91HRqUqJ6Xt4QMgeWe6cMw1qUTbXwcqfputXRc4gT2WAGjGvk2PQENfDfK4iGp9HVWEzT",
  "key3": "4Z3DAkbrNHG8qc44VqCXEKZFxq7cp29qRDYMnAypxwh1dsKPw83Z2oujJwWkCDLCL9Mq45qELCrXRXW8WGZLeXUQ",
  "key4": "5sQHaRKK69jrrECi3r36U3LcWZkERxQSMn8Qw7sAM3c46VLrYXKrgKDweUCEGQuJ1ofgvevDwGG6B37khpJ24cqt",
  "key5": "3z39DuNsiCji2fTrcyDjAqxQHQf3D3Cvm4cWJVCzc458BooxyQGp1HP9VqqpoReV3WcYkv9EfZvKndHQm24kXU1e",
  "key6": "4MtGcmM3BZGvvyR1aNmP7jhZR6VpBK3iwjhRwTjgVqCCAcKzXvQrracLzE6pM33xsfgSvLBE5WrGAMEyS5fgtuSE",
  "key7": "3nNKRPifpURd8q7mrqWwHeFozNowjQJbjp82SvxiXWjEVYNNmSRKuKSRTH9pGDn7Vpeyi3mhquvkNkBBcZphoUsB",
  "key8": "3S9Mtw15US3xUdMT496TmdwUkTYQmc5CxMhfFXPGyu8i4EgHN4DZ8GsfKeroH5AAiUT2jgQueBV791qwrjwB5f1",
  "key9": "ZYe63VBw6aTe6ZdJxkA7aLLtuFqDJT2xr56Ssie1VtUquNbP98RnVtHyo5nLnjG1Pk5D25GBbRzUAWtxyTBLLGK",
  "key10": "5DMqAUtLX8S7jvynPFPBKSXJq9FAKjtYVgWwc6mZU5yVJBbBwgLe1TNnUjbuc4sB1NoHcugYGg5fyaVBNY6defTR",
  "key11": "4v4QTxREaJfxRiCNCzcC2wmaoDAa3g8Gt5db83Gy7aCbbTxSMrcTMyWnvDWmqkVkhZvauKREyaFoNyq2UiZdqNuo",
  "key12": "4QUSerKYKeyYqqX6kbxeGQqP3WtQn7fn9K9V3xsp52khYVNwXyZmnJTPGrzvnKm6gkbvytJoVpUBQ7mbasxEgftT",
  "key13": "5ne5ugYwFbwpRNsQkw9XUUMgcrAkWD1JZwG5mCAHQfaCD3MEcFeKnoAuBboKoKHDtuH8VxFUgSV3MXgGCMMCgB1Q",
  "key14": "5Uh2oN1sUc9mNyLSav2uqHLDAgAYdjgUPScPmwdyRRiyXyfBunFQCF6MkNCqs3HmuobVTVf1fRK7ZwYeA5MCF5wQ",
  "key15": "tX7i1LaHsRrFn3oHUm2aKiKZhF51izV2gRjghQ3XXGgFDL8q3wXfWpHBWcLHYEjnMGhfR1njsKWNSJsodf8FGVa",
  "key16": "5oNvS1t2DzZMTEP6xpDrPkLq3fiMM3DqBM9rtzjPR3NPCkVHDDCfBjzq7HuCcxp3PeW8UV94AXS9C32nPcjdFsy1",
  "key17": "2ySQ2vGTnxEwT1DBuw1KCUwvyuAd6zCMPVfR7knE8MQAXyBuaDL7a5z21oFzi4RsGRu7ykUqmDKvE6GvMfrxZZmX",
  "key18": "64bfA4RHHYi44irLoVPM9rbqRGmePc1rEEHXwN3SU1PtcqS9n1YKu523G1cDfLxDdwr2CzSZQJvcyqiCJSpeCgzA",
  "key19": "36xYC8X8kDXNc7o6pxYt3NRvBDkzmSm9NbUYWSSbspnvgED354Er95fPPXNpyKu7WPH1hcVjfBnQGn31iBrYFy2e",
  "key20": "2AEfn8hUWpo14PzrBfi9zR8odF3o99N2sXzqZGKanxtCcm4C7xZKQ94b6PDEvRmgZRUAmZRZKEhZooK3hjZkkLDf",
  "key21": "2sC1BVNMxBh25PvmATdjExJemRNR4rUMjbEvZXd8Q7j5ZdGepxEWZyGWy5biCgQTg9pT5mbW7GYwuhY9MuAWtqzK",
  "key22": "3M9xm96ehLRwyYD2heHbaruF7dBKMn8cSHqhsmvxkH1z5apKpKRu7xZXHoS1vzhZB9tSK3urkyDrRpGbhxya7inF",
  "key23": "4FzEmLzFVxKMJ2ixzin9Ap4mRrHc8ozMJAJxxVryXpvnszNa7oX4CoCF2zFccEQ7YBxEpMq3Nh8y6syzJDZMvdsw",
  "key24": "4M67RSLwCTVyRnEJAFSiMzaYTSGmkNuPQAPSR2N8FJTcXwPi5aAq3zENd1RXUS4shGr443j7gd6Yj5hyystoCC2U",
  "key25": "4Rd9bD4mvjnjAvorn2agzsKR5CDFoD2SmvVKUdjeE24awLMMEmXhRJnoR31yfKrVkVESvHVi3a4S12HWbB4H7EUb",
  "key26": "4VoEBF7zBkrbtnFiZHfJPJSKAN2i4gYhAswsee9HYSQ68xfeaiHPzFVodcpXDtyiMykEUgn2kpCVVc1vDfU3a5sH",
  "key27": "4sJ4bgR7JNKntA8t8PfFv9s6YpuBtQW2cLFk9LAB7SvZQRmmztJpgLyLx2VmANikGbZUtfonTKRKVF31F1uv7CBw",
  "key28": "5zMUSmMkgV2k6Kc3b3LTnRjGGW6tsxAfsMVw6xM1EVXkHZ4n9ZaFmuKnsHtyxwJCFcadypS2wkxkocqBTTdG4hzW",
  "key29": "3DAFrAAfChpxga8w5Cg346nw7oLRp3mqdKQGaxuhsH5sTrnQwpYnQL3vywfm57md1r8bF1wyxWVtpyZA141TNCRM",
  "key30": "hhSq82pcFSUPgeHxbWGGdBDtzCstX1JjP6NCwGfqECUW3mbiRAzJ1LmViZUM5VvAmUUHEyLPnXfmML975yEbcWE",
  "key31": "4E4Ha63C3YGbsJLpSsGMzmL6WZMpR4HVqGVx7ggKG4X2fcQsrFhLr3nzX6TCobFKr6PaMjbCBj3ncVqjw3VqPfPg",
  "key32": "3jsCLh6QgkwqiAZE88F4F75Yu28rzbTyuAReo8y74TE34Z3x8E6VKtHvGStGDPeoRtTeczFDDAXQ1K5Gz9reCQ7D",
  "key33": "2nhSmcZxy5tLqC6yG9FwhWSMbTWgVBr4fU168Q3Qnam7XktEZ8bmMwsKXYob6bFUH6QPihY2D95MhwbtgEhqjLP1",
  "key34": "2iAJhG3Qs1PDwNiUzSQf7ejuWF1DNZkjF8kmCugpBAD63DvNqtiaPc9RWXpHcDhR6W6Q1FPbPeFdMSHe2UVhYrbc",
  "key35": "3LQReCQhzkDz3JVF3UN28vgVLHW51zs3eEB5At6uxLChD3n5fVCmR4iQwaLMWNpxdP8Z8MN6taecRyb1ukMGNUnb",
  "key36": "1ZmzDKf9GtHvWyw6BHvmzhWYkvXZkTknvpC5Tz939W9hqavu7Xhf7cCBDSkS1DRoHJMi2NhKCdkXtQY16JGbN3k",
  "key37": "59kiJ9LpjGYvhZCd4k9LPapznHWSYGfnEhQkW1iUHhHmvjD8fWngULtC2yFmTC1kPquNWnrGKPY26AxHZekzATFN",
  "key38": "4EaXyoRe9B21PcrEAfwyuj51KbZ6uFHY8qE3EN5PXruhow3biWxKdHTam7gzf94Q3b3r7DCr7TYJroKrNgE7Nct",
  "key39": "5jnbmY7cJSDoG3MJNpbRTeb9oq12XBPHDN99oxLbytuZ7JaCXYU8vcdNhBfCySQKkDRRjbLTMc9KDR5KpokU5CS6",
  "key40": "4VoFLo1MYdcZs55g69icK3TGjV44qD988oQ9VRfTPoBD7WTniesxeguMftAy8oipuAVpftga4Ez2p42b7zJpEJuC",
  "key41": "2MUsj1rxxZzis4BHGpZ1BM1TLii6umg5ARbLzyHewAe1NVepSyHPMuBHT8txjRJP322pRV4ninebBhm4LSkQUn4i",
  "key42": "4i11i9TfH3m2a9G4XUGXFx2ywaR338rEQ1bHD77jNCsAi2bbqDV9GGNzMjYefJLN5GoBztff7oAB3yg7AGHFFKrZ",
  "key43": "nyLBonJjVwScSFcEwaKqh3LZ3maxwxqktY3LpJ9wDPJYDnju63CTpcF5LgK7eu4C1C5xah5Wv5T12pBWbPzDKBX",
  "key44": "4pJdGBi435DWY1tpBQLmMmXScjLAbHYr9NTC9HwPWGxA1xVN4h5Q6zaFpjyLEAp57d6pn9cgjRgDtwCCjm4qDNFi",
  "key45": "3BvgXG84zUP6m4t7fEjAu3jTePXJVQyjRgTMXs7gNcGdae3e96nfCkjMWnV99Xfnw5nTYVd3LdydyNeWy9F1eewj",
  "key46": "3SzXXcwaYBQv9mciDRKGyepmTSRLfQmuo5GuBwiNwpD9jeL24RcKe2yUVK8gGWGwoEeduXbCxaDoz9BxEpFg2LeW",
  "key47": "3M5fmkBM6YAQV72a2qH9ez2Xa311apJu9b2BhJ6BHyxvVfEkVPgvWFnsUq6K7eg1wBfsu9ngMwuWaCwSX1cVLWFA",
  "key48": "isqD1JtVJGXQ2t4Q6jTu8i8gFuzP9AfTpQi11AKM5ZTnXgbLvbLqi95rWuqZc1i25dHD4zquTuvjsoNJ1N4oaNE"
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
