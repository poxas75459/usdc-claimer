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
    "RNPYwWhyQQgvoHnPMd7NZc9h7HqDPaKmqfedjA6Y1uembkTBq5fw7s8uv8C6Xkcfvdv9caKkKCLs4ZvdE5uJJ4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35cp3MGYG1E3cZ5K8gwYc54RGWcPkWrEw4yxtgxzfV6yrHHxER7EbsKP8Bs4up2oPQ1fzmTiXjuehSrHCf9GMtpq",
  "key1": "2NA9B1mHbJ7s52W8MWk7vGP7HcKka14qp6AMsSGYJtydQmCuJNGVUbRjVw6A666eMwcjuJ2zd7pS2a1jH6agjB4k",
  "key2": "GcBsQ55Yv7MvcXJKcUEv59w92cg6YG9boRNKsgEHVSwZNq5Q8bKE14Bd76UkEStZdywP7SHMwRdn4jQ3GGDuYNa",
  "key3": "2zeXTwy8K6nCs9YWLRVq3rkvwWUiETspiA1PcX1a4uneAtdSUxgww2VEaZruVDTiXS2Rjk4dnVUZu8wyrvnDLdpE",
  "key4": "26mjd1uqKgWgyKCyt4R129EmdtE3KnpMb6K8tJF2xLrHUUCuCrMGzeAy8tzeuC5mVSxFnvGE4gdwpj9K5Lteb2gd",
  "key5": "5i3yvTMs9w8YrXF5tvRfQ17jG1ynySMTLFmpcD5GSqgbNEvko6tZxANLAouNbYtyAvp5L9h9J5fN1oF7nxFFDLVs",
  "key6": "39XsNNXFcCzKfCfDRUejKA71KWXTeQijurM4zheiPHWToXBA6b6oShut9R4Yn1oGYqrBPgt8tsJJRpmhrvJpLoet",
  "key7": "3RvdDmf9SvAKYa37aggDVhjFzrRufe9Z1tu2okswVSpkNBbcibE1DTm5B5BgAQ7g1iMXxyTQ1uYQq4h7qo2yGpnp",
  "key8": "23owBXg58SxKUNCr7TQpC9F9TFGuXdYwpyUeGjjEwLojxsbBauFPwnuTwrVfDiUFKjhwNTEcJRxRchmSDxUo8H2z",
  "key9": "f6DngtGhdXQRLvzVN6UkKrzJJ3mGrBTfZkwbyV6RAjCPMwNwAtk1xbsSUwJDvBdHQ7WMNHG831EsG97LjwarEii",
  "key10": "3sBwvNJkBjMQkJooSCqKnFnv6eoNMtJ86jZv9BFqZcsRy1MfFRzdUHgruxijHRwoUbqyf1VA8zPvajWGngKdPrvm",
  "key11": "ezPvNtp8CQTsgtxHkzop1BrMR2pKz3HqjKdb9fWe6sWuHL6DaMrBVy3j3Bx5PFbb8thrkGGgCxQBAb7gznmQ2kJ",
  "key12": "2ehzQeD6e23HNB94DzABa3xmGTVsAXdQiKB4TG2frFtNw3hKofzDNVDoZipiBSE43U2xbtRXvskQuhicsEoBaC7B",
  "key13": "5mVw7NyB6AZUeEpvwjrAqGYpRobjX1XpCt7jvJYUbEAgqwnEV8ZohNybZAhxVQLVgYeLwVkLGeDqueKvJYw4wAsY",
  "key14": "CwiTKnDfByYWPKHZfh5YTkTPUV783prdyZkaKyc5AKBTdVCmeVHrXjfBT4V4qTGX9w5ZChzQ26HW5mQ88Cf4heN",
  "key15": "LuPs1fG3fBDj7G86WaoEYk5EBABtNLKj6gHshkZZ8Y585xurzQTXqdjqTHrHx6qeQBBK6CUsRprHp1KR3HikPz4",
  "key16": "28rkDJVftWQuSkU9Sp3sfAbHPnhy9UpAmPuX6RtVkWYacoS4VHAXA5SaQbjUKgukuMR6gyQeMKnFEva7jj9cFowD",
  "key17": "4WX7XfeTXqFBy4wt93gn6r3CovYRUJwyZszujwUNBYc17k5J8pHJ5dvPqViurJ1Pk47Ap1uBzpDvqfKiGjedSnmx",
  "key18": "3qaUarCTLiSmuxTHmcEpBoDzzzwnsyyY4VpXHTYRPj1kMmQMmcmJdhjbZdhb9FMAPTFqebhVzZWPpdseMgz37mDG",
  "key19": "3zEHNmjuic341T9Yn5W8bnKJmvtZ11RyUS6d1PGPpjYkreEYvUtSyUj5kK8mJ4ZekZzYdAsMZrptjHW5LypLr6pj",
  "key20": "3uMvi7jth2AvQ1RPimjtkW9CDmBTM2nNfz6oSomENJxyyxE7Ena45a3k7KGpgBRptK7C8baHJ4CT4bHxNcwjstya",
  "key21": "45ruL8uVbPvVejiNN5mFocJxVQNQ51ibJBT2pVxphfqg47FRFqCz79mBbRoBKZe8wZnfRKxj8tAB2FEtCwkqwns2",
  "key22": "3h7jFNobVHMpZhb7coyZJhuj9ptRDXUkFzRAaWZeRpCnUTjeTyHYHWyENRamaVjGo1kbgdkPeSdt5ftbXX2zfFpa",
  "key23": "4NVmfW8kzpMfZkFkYAvg32HvGDZXpAgem5kcFFXPH2ixmSj3vRGC1HVTJKVPL8PXWVdtZKJwgrWDxTRxnVXuKaNo",
  "key24": "339cUifXsZh9wER6p9Rp9apdqo1ddf43jtYRiJ6N5W2Eod3U58zmqAa5gFmt1TGan7PUCX6ifP3BMgC7YEkYN4Py",
  "key25": "4HaR7DDUDmBKtBj4UjNTo3dG3YAa3KWimWPF3R1odv9AA2nmSCA2ZpbDiJeW8UJoQnXuUUTJnedHEdXDQgSgGwFa",
  "key26": "5eUix2nwvjofcDTnC1fqss59fayyMD4L8VrVJPQEUPsUSaDfZaZnxxkAhGaM9bAfovU2Zat5RRi92DwKtUEE11MA",
  "key27": "3UNwR9AmXaDE6EAbAGGQ4nb31tjhKLqeLq9znPdwQiTWzFxMdzCmtg44EW7JtrUUpHPds4e2HkHyU1aX42jcBLrE",
  "key28": "eMAYR9aqmnANq69ad53nLhFvGEED7rkaDpRGDPdNT9vdMJ1cX2rPac9Kttc3ZrT9zRZ5zyffMBJnpJqU5uwUe9S",
  "key29": "5Pj1Zj3BcYQXqqTGETFCUTfUC8juWxoprVeF6hc6hSQAVmtwjHHU1d6rApfRV7etfqB6P5P94yRAcR7NuyELzeD8",
  "key30": "2c6WsezLw1KsxNuPJT3YVs7Ldu5eanmSiLVDvs4HTZufLv4dCst7QVUKedRNG8b9h48mAixEB6yoXjzfzbUZfudH",
  "key31": "5pWPAepocSQa25kfArdf1imYBjHJj7zrpUoNSvRm8mh2vevoahWh7P8jAbm37CJcavEbywyzEzjAcpo9YFshLdDE",
  "key32": "33cugcyTtGEtTj96UzmZBMJ25weEHkgTQVZKuvSPyjJrwM7M9XhjDN3b1pLg39SYTvg25sV24x6G6zHotvJ46Yx8",
  "key33": "2qm2b9JUHWgXkFFsZsYxPHCxg7CN27nkf5N2AmGe7mw9crMJqo9SMS5sMUXPw4nw3N4uy622TBAPSBrE1hwQqX9d",
  "key34": "3obpzc4a2YcFF19egQhbrDRWfyEzaxfZjLF13soKnotphosXrYS2RuNTbkimn1VHryKZgkhYgp5cPqzYzCyVbiYL",
  "key35": "3Yk9U2oKaHEJKBTfBDtMe3hpAQSfm9snmVrkYqv6umrZc35NGoqLt1wsD6S7YrA7mN26dkHF1RCdPDicFUocZJ64",
  "key36": "2U4QUoENjQMYjRAZDkJPu6m2z5JFtCytwswLJjZHNyVLf9xLJZMQq7Sb1k76LwJzsqJAcKEctvMeA8tKqF1zsUd6",
  "key37": "3tfc7p1GE7QxCFzCuRjAJPMNiaAecJtuUdVSCp3GMpskB63w5L3bW9fewncqt9QN49xoQyxmXeSkjNQz32LxKzeB",
  "key38": "4RQ8dgZiKX6Ae6WuT5eT3Y7N2pgU4RBFsKKkgSfpBLYYxV5teXonJH8WDkiZnzXbWCEFJR1i7iS3rhihjnXbCWb1",
  "key39": "13eed7bJTw86qQ9oemvmdAp8vC6wT7iNqiL4tbfRSpWgKLEyPfWzgJKKw3NwxkSuhpvEmE9qfueVUGGc2EVXxnR",
  "key40": "55XxAg3LJ1PZHMHYTaG6jpgV94wgRBm4MdLB3AwiYVHWaRujf5HhvNnpncDq5MarbNR6ajkzC6Bmr91D1YFRiDE8",
  "key41": "4BSptUm92x47v9MfwDsd1Q4YvNXN2ooGFVK6FnUUhVcLKzqs6miEe2PQrvzdgd5PCYv6d7tL5iLpANYQ9ua6xTBZ"
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
