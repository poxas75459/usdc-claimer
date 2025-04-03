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
    "4zfYtEYJJH54aCk8hSM56UEbxX7VHzj7VWG8CCzth1obnvm5zTT3rtqcUNTamsj9ZRvu8GxxjwgWWSMWn5fVKmp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgiJxX3w7krgju3KUetuLifJwX6dZFfgooJR8BjWLEh1YU7QwC6ofKKVfTsiq8jW93NutTzqN2hDgLFDUthGms9",
  "key1": "2vTzr6FfHXeiWgK3s1HqYrG8h745gJ6vX5jZLsnCQw1iE7JAobJcWXvk1PQzX5cZ1pc3n76uHxprK21c1MavZMxJ",
  "key2": "4oLGDdUoPsJ1x5gnLrb3fgJ6bYFe3mjm9GgBZg7aoSpS9HnxkmhLBtqEi7Jya1sK4E5RGTf5rhJqUoWbdKt4rwkm",
  "key3": "2WKbg2sBQvjR2Qrn9MoN8xfkjvxJdwVRpWvXHwoVPpKLcam8QcFS9mLu8vSwzMGhQ1jL8AidocAnnfEZSB7GTEKt",
  "key4": "32HCS3NCD1nQTNzBoSBXzAnMQUkyNQ8xd7QW8xMr5z1RbBR4QSfJd8tb1SuuXPA1C9M61qrYDK1QsY5DaDv1zA1S",
  "key5": "3E4xmMGUBEtv5ijmemvdifmFuzTZ9FQEnrXwadXDT1Yw5YMs1B79cqQkqzTAb3JejYSWbcTUyu9cGcEXe7sMwcHb",
  "key6": "5NHUsNF3fHc7fA6tXnMThQmfbMrUpBNwE5B2gnbzPk8S6iw3gkJHvrtHkQ3nyyXbJDFcUk16u9HbQ5yVvoqmVL5S",
  "key7": "3Rf1pW5JkVGi5TubKBYi9K4Jr9jR9a2Z2mArYGP2mU7z3WykNaZMisCf1PChicXe5UHHaBV5LopizTHj6FXh3ete",
  "key8": "2GnK73kzqR6AbR3id8W5juRZXLm664mLWWVszd3S45CxcYX1mrqsMEHaVohgtTLXQiPXityCtou94FSLaGA8nHbg",
  "key9": "3ASYXC7aTyRjHFGB2vVL91Gn36bEyq9ZAYMq5Eukseca7xgpmtcT6z7s8e3ZTXKKn1N5NkTspfdtgfoc9rtnbsty",
  "key10": "39Un3efM8gVi6H7fzYYUg2fKnCsp2QKLybrwQTp3rkqEL7XWjMq61ZEi7i7JLDfqXHCEJUcSChgfs3dbWmNVaAyc",
  "key11": "dsZ17AgBr2uK8v91pbuiAKDW8k5QQzVwxmkoHCGXze2drYQkowGnZBucwHq4H7SErUTnjZGXJgaab24pdKeVrL6",
  "key12": "3SoHhbojKKeHJQceoNAyrksEWy7AoDKQ2atPE1vk9HnowmD3CpsznT4xWLJMG2Jr74C7HdQF8s23hF7ymaX6kYm8",
  "key13": "3YShLrL8kFoc9sydaGMteSTajKctfTgzrM6emJjUyeWKMiEtj2xcN6mnmdVE3PGm3QQQxs8xspwtEA5BEuS8FDQq",
  "key14": "4ts7B9jm22pGahXfUhDbrTbjA6b1LoiFfdmBx1QFxwUqgj5RcMVMjMfZr6NvzjuqUp4vR9MuxSDoegbdBFuURW7r",
  "key15": "2gFVL94mxyWyc1XJ72fLVjb8rZLSGoB7U2oAFmkr1xUMtfTZj85aTEa7Lovq7n253uRmwSiBybtuWDuGcvuzE5aR",
  "key16": "44omJpmgt24KJAGCoz2AmKZPmrv3ayVK8hBUXa3pC7v8YAAS1RNCeX5M7aDz1mnNx38E2Cb6Z6HJWeKV1SxSeceo",
  "key17": "5KKSpBYFeMoRy7HSECtZaPttATw2ZUkihPzRRya8vM6QJtKtkGXjkqSxMXXY5xjP5HuzyYbEvk6HzH2NSBXtnCmS",
  "key18": "5hqAvYUG1e4fg83EoqVeXo2TC2h1harNYHh9hpLxdks6CC5UTtFXyvoFym4mQ3ESRL1oU2DNjD8dWnVQwNQ5CYsi",
  "key19": "63MbqGRsjpeS8dr6wMpG6cetB79BWeKALnhYfhTtmteCz15CJDXuCSvb6jXwaRwNSsokN4gz9wqWS4kUVXbmKvcs",
  "key20": "2D8LGt3AutF3tPPF4ar4fqkVxEk5jnqqnHqFuKXpioUQekptYtuk5ePdpj1EQ5RMjCUgtFquab7UsZEAKxnwHghU",
  "key21": "5c3rhZKpNEjDNEBqCpesHYaWuBxz17t8P15N14bspWZz5ZSXNK3jmqJvERbDA8pWLBDmBA9snAsNAMZ84N3N1sVz",
  "key22": "2Z9xE8yGbLAcp6YJcsKj5oBJBuYBzWT6W8mZmD995UFL6Pd4x4YR2LjgsNYYG8ueySBRXWes1bk8xPcpw6qJQMrx",
  "key23": "2hxVEkUAzfbW56As6Wmmc9LWdC8qdXDA75nhGZTSFgagrxNSoUGvvogfU2SrQYgFpKs5DSmonnPgBpirs3EUzUcq",
  "key24": "25aTmkr7DfEt4226UYyjCbe376CJ6LCBkmLiYTzqgSCiis1oHEbL7f9ZRm8uGUd3Skhjr2zDZ1WC6PkKhXoTRv4y",
  "key25": "2R9aRHYnbppkwRkC9drpU7kYmnrcJBQfQ4YszUboh5sazeEGcd7mMiGCgkCk266XktJJ25YZdjK8Cp3oC4KvwdgV",
  "key26": "TCc7Z6Yscq4BAQR48bv2wYsPBpR5nBMdaTzqgpAgxt2GaEkSeKYeeGZCNr9pt11SW4qabp6CNVQZAxZNHwWHgBu",
  "key27": "qe4GDLUucNq341oZyzE1H9j2P9rLuf4zvqrWxnyftEfYEfNC34n41yQW7qjQHnDcqwNfzQRWYjuxseg6PypmFgr",
  "key28": "5vyhHYpYQ31TXjvJnMFtUNp5V15or8Cn8wV3SVTAjsLz2oT8NzM5RZthTwGQp4ZUjHyg2EVkvtHqKfJVaErrjNBm",
  "key29": "62AC3E8WwENpBNnkUzTB5wZnhP6oy5GJBicEqhrESD2fqeqSUoLdj2PT7yoG2R42YZH4s7hBEFUn6ukYWGyz1phz",
  "key30": "5RKbGfg6C37kHYoH5dcWQ68hcb3JA5LhFmGneARnpDgqnJi5See5AnDEqc69fJiC2W8gdwu8pdTm6Lv9eSAceUoX",
  "key31": "3nfPbPM6n7cWuvJ3ce7h3bZisyvugGhyngAA6KzXHRWbt2S5sq3weiu3Lu3PW1D5YzGgGkdJUjVg8PZZwLwf84W3",
  "key32": "uReSaLriJu5KgmaQ7A9MczF5zguAompDu1wTf8NLp32jHvQu73DiXNBwnFMyvUeeGGXbwpNVpjit8wMQHtgNC1u",
  "key33": "63ZyRuZBUZ2mUwq1ibhrik3Yb99AhiC8po9rcuF2YXu8vywAayDSjM2LWxHznHMdrZTh9NaLdYZa4x6qencNguYh",
  "key34": "FWpX4B3Ekaqv6XMpMHtfxFUyCb2pcZ1Ej5u3Jb2KsHkWVXVaYaP2YUGJFdUfSCqg29xYAZ4iz6VihVN2NxNPFNN",
  "key35": "4U7B7p8sS8XeXAuB2ZuhCoNe4yNqq71vHn29JU7EbB763aZT3QAMf8dsPb2tpqmmiKagd2afAvCNt4b1ivjmEVn7",
  "key36": "Hs3u7QmnhyaEqgFYo18QARMTCoriLWm4bHU2Dpa9nHv88CMoMAQRUXJgHLtYE1bmQY4TYAspiMoAhoLzPLSJ44s",
  "key37": "556T92VWKD5pqSxFrWNTX75pe4iCQyvw7zyBoZQ2cnVyY168D2qtXkJufs9KVuoBZars8nmJ8zCSqDrsjAgz3Pnc",
  "key38": "4uonWupeuaisuqWa2m3JmXCb3WZ4cLRZdA7r5DfYHXDrRTzXxRoDbDJ613ifNGpsnStqkuB2MpeQXwnRHoQs82yd",
  "key39": "3rKSTzk7HsZwF7STSUnxdMxXonPXbgVCfH4UuhuW7XgAU28XW45mSzV27Kand6zB9a3esbZ46E1HotRXD2r45mLs",
  "key40": "pLYyMSZzrwmJrwdDDDE8VvDytjm7ehobcFNk5pvTULqWgkfrowkhf69GYDH5MpupDZ8GLSXGz2Mb5X4cVMsxnTV",
  "key41": "5bmBeWqPtXNKomRN7zpASsVa1ridouWgRaCGWHmmenqajuKQgSUtW2qMPkFrRsaPJ2zGqiPhy7bfm1impEFqu1HM",
  "key42": "WzusPgmPZPfBiQiE5NXLJdpgWpvHZeNKtsXK17nxpi27jPjgUjwKmVhwC5gpKfdCME7FUKsMG8WQ4NVwFB5k94V"
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
