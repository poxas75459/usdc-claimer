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
    "3Kc7693rHQXb4onrHra3XU36bk7rLtfk5LZwknDwfqq8BVyE68cefY63DNJmhXuKxW2a7r7cjy61PhRgAnsqsbPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZfymJnJJwZEYF2a3ckhikL86feA3ryu37TUozsAwFkXRRWdZmW42tekdbHqaUmimQYESasc48UQnxWxRiUUG9b",
  "key1": "w4zoY1h2cT9MZew5s5bGyL2jbZwpWRSjaSjEUDac3bcKtTF6VpBWyHXm2kmyjZ4tyc9bXM95modBt1szfqyurvM",
  "key2": "3AFPeMTmcPkdTW2aXj6HSgbUSyVjxMrh2s2Dy9NHn8Dg2QSoxWw64qaiHhAyFK57P2SRPXHTcrmxTduiYdp3UZQB",
  "key3": "2QiPQqeJQnNDLUuc229eWJqm44UC26rWgecRs9Rmo8TewsdUJFM83ZnpVG2Zfbkicz1BdJDBe1GHqRDZPx2Fxxq7",
  "key4": "5DqYcjzpoSVncfVfbmFy53kk6VnjT8AdJ6zgtfvvApJdngZWdqzeN4hviGUzrtyaqewxGvjFv4GZeibu5rq3Ct7m",
  "key5": "3xySFBLgj6oCkW2RWiTLpDbJRxRdJjZAwX1fgKENEaAqSVvL2VupBs7oVZaPVhb5s4R6XrQQXV8YL29FNbmr3mPG",
  "key6": "4oVUtxjbHWbuRqoUt3jg7b9tYqBaAJjgLKS3gLPCP9QytLGVT8m4dWNS4BZY4CWWbqZJzEfw3VB8JpPgxNUo5T7o",
  "key7": "4dFJTRM3bpFZ1pY944t15kvxyCcZo3nb3iRciapHooBFe6kMndvBHvvcAQ68gW1vNbiazUYroXAYUeiQe3X7zxPs",
  "key8": "4XaToZZFtQoqQaRAF74SeyKVo8LQ3ahaYpixesVkRt1rcrQoiY93ifmA9h11r9E1vtL6JX76GYTis6L5axifo96",
  "key9": "RYbwkvsCZUBwsgX5ADsXxCkzJy4mTyXkXuBBgqB6tVEuWtQkyDpr6sWiCpAEEUrA5JqPBVa1a3JrkuFr6KDRNnL",
  "key10": "2hoALJQhRBymok51kvQ1rGH74G3t2Phubxa8oowpSX6Hqk67RERAJutMTvAjdzdYTdne1XqjkkGg4owrQDnWkhew",
  "key11": "3KHuub9yjAmvuzF7qZNpY8E8hVbUL8ZEeN2RuU8rCCBNPRfc2LVvEUyVNxvPT58JyzQBy92Lyhv7dSUgof3pftgc",
  "key12": "4zQ9Hk5TKYVh3KDgX1hwnvBqCFgFcFKnqYoWTmWnhrNVwsjDoX4p4pL6qBu2UioBXDesauDFYrjFbozCXw8sQbB5",
  "key13": "5KddgdsXxmLUmwW4hye627EYHE6MdcL1EV2x17yt37mgSYGsK17ZW8gqZRstuguzfZEArx1FSY6Z6RUnyDQtezTa",
  "key14": "4RPUnZzSE68XUDF7BepHZZzvTcAyGocstpKB97qKY27DCUwhU6nBGiAn3a4ycuECpGbdg1sqKCAt3iSkeZ5LgLWL",
  "key15": "5SudQtoH8SiNfzxdspJEgxjGBqradCx4obde1TkrL5Tz6i2XaUsREBoueQLbdAwZHAYX5AomnMHydtavXJv2aDWG",
  "key16": "3WhLiGyxxzD8hMbyJj1JGXs5rMwdTbgZa9YJo4UQmfuQo9TtGb7uBotuqEP3DStcmbWTB1EeJ4DSPmCUiaiUQgRn",
  "key17": "2gM3RXNgvkrzu8qmmUCMBY9TBCrfPJvrNuHUth1rKyYDfCbJnUk2N8eLpz5595q5bo8twDz6oZnhw1tgjbZbPzsa",
  "key18": "EGbBfAjVVLarZ5YzYTKx8CgNG1UFP4XkCbwg1BstwW6Xo69fGp2WbjG4LxifubGEAvo3thonjokmJvDu4ficxpn",
  "key19": "612XE6AMoNzC6CVL4tdff8waq7CGNAgy5st1qTZs3xpRdWwSL2sphKmfYajE8BmtmLcbMB37N2WEyjdxzQsRHCCG",
  "key20": "vjBv5oVc13AVSBQ6G8Evn4oBTKx77kfuq1iKb469mPEURczaoCNYurWc72ZGpLM2WwMt5Yd8J1h4aaqZPCZ5V85",
  "key21": "273XFA8FgriBc5UDNxfMCXdFaEbWDhPpWSJNqqbAuJBiQAYZyKfL5bhback76a5T1vGkhGRPBP4r8p3WjKSYGufb",
  "key22": "534ACDJa68hHmhe6RXhu7ZKXXxdQwP4XZELHKHvpo8Yg5JC9ypJYYrvRtzNPEgeyy5Ui9s87U3GjnNC1u813TQcB",
  "key23": "46XkyUy8tDZpKA1wwskF9o9sRfpixwL9QmbVe8ziZDvYZMtbewLo6E3PNUQXa64baFYWCAsmfuh4NXDSUP8yFs4m",
  "key24": "mtywLsCnXmTLmpS1UM3xMGQ5DLFmwmnbmzptYDcfjBXsp5vapZffnQtSvgs5B5HQgnr3h39i3rk5ZjeSQPXCnTS",
  "key25": "38pY8wFAYwjBa9iyRM1gEk2Zo3ajAAmVK7mXHaE3uoggqSCAPXgzPHqM5GVXtDVXvc81JCLeWCQj8kstB9q4oCrS",
  "key26": "2xu4sN4AkS6ZiB9stbuGhjEiJQyPWrhNqrKPUtegSrxCFnrCFBW8JsM2jbY583yFcvAAQgBTodCUhMNsRXdSPZk2",
  "key27": "2Sv2HWpSPg8NaGk8NkrUHnyAZHWdXjPakpQGpYSvUnEeYXyaY4iQZKVL2omdkp3GauGtWbE4Cc1oWJ8pTm9UKi1N",
  "key28": "3fa9LbBZmQdY2xS4zEAB79hWGiB2ZAiHP8o2h1JfRveyVpauajKctF8cYQbh6865R7NSYFRR3p93unvKkkGrHD18",
  "key29": "2oUTmkeoPmp1cJz5fgrKC4ksAx33YRjVQ4FD7KrrZ9vquLXkAyw8j1VZktDeWAAoFkKGp8dv8GTAf9Bd4Jn1Gink",
  "key30": "25og47GmxVVjp6cGrCqhpYGU2iaMgouC6P8q2DBKU2fFpmwPzwiVwc7mXiGNpyd8m95VTD8quc9HNceKdLtPimJp",
  "key31": "29DtHU2pnhf9q7Def1QJt6jCjMWQ9ftA5hScVBV84NcUd6Tojobe34FNre6AQCCFC2hP1sgsey4tnKKyqyESaTmd",
  "key32": "EiMVv81eSQAxCbQTnqXNg25MwY9A1TSyD9KzKjKHxs63Q9kGpnoL1yWkn3LWCBSnzExFUxExHhVy5kibzERK1ew",
  "key33": "3tRzVqA5hcqr9QEpVrvNWHYv5FtaCHTLTgjuxtV8Fx92SM6bPCXUcHwf6TPAdoX7q5fzsdGVqUaNLw3BCXzPTaUj",
  "key34": "5Lgvfa5YpBCKMntGTcf7tWmNwtaykhyc1TmRfFDo3myFNekDzB1Yry9mozg9tqWQGM8JSZA8PoGVfWqRAw9S2FtB",
  "key35": "iYV4LLSsVfZGE7qHxGk8SUVKHGK78yRqgafckvixsGNqFfyUWZrztuer9aGKBH2fKhEGVoJLEXNiYDzViJLPGQy",
  "key36": "3QZxBFrhdBu5wN46MYtZ5nPkgJXjjrNix9Nd2hsJi9MK1u33fK7bx9PzUrthvoo7STshargpuFfu39LhbUqYzvVw",
  "key37": "5bJQxLYzVyyDdqNqiw996MehXeeXzJwrBeXMpwWLxCzyaP43T87Sx35yYXCTRzQFFtaD4nsHAQkVak4JrW3JHmyj",
  "key38": "29m1ehibcQ2dJyDFg1DByXpeF9yENNyvBBnDRt7CXEQ4pEjoTASSNbsyentzu1SMzh4UbWhopQGX96VHcEizeY2P",
  "key39": "3c5DAyYzX1uQN2wN6LQWNcJfpczvUL36feGmaP69a4DDYSrh7bJh97SFvwqG7exm1baf7epyqCgpNPXFmnVemWLQ",
  "key40": "3WG57CEFMwypTboRMAXpsvZPJfRk34sME3joP9GpbUTjGB8W7rLwPDCSP3VH4WnG6GNdh8fdk9S3e82TXFgJMV1q",
  "key41": "4qTUPxPQA5xTnHeEaTG87hFxGBM7ksaoZEy8PXXnhyEDZPPMCZwY3w5Hy16zQa95TTaAaSyNYiHmQycq6dMLeBwd",
  "key42": "2Qj9G4GGPsvYxd2TyPZo38ekVHVNYj3Si658aqaqFBHckEsjgPqGHRRBJoWdNBmZX5G8tbQG8wMzsBb4yMtR9XjU",
  "key43": "R63HASqxhoBdb8beStDHC5xrtoCLz1PehryR5BAxCnH2WNn9NLwMPGRV1vkUdyW4Nzy4W5xYJ17xZt7Utx1ed5N",
  "key44": "Lnf9zFyb6Csofr9PbME5cv7qF3yif2A9wRN7DvtXCPtP9p4D5ViHbAQBkg33rLu9R9EBC4EhbT54jnFu4BWXACf",
  "key45": "5vphqyMmxdvjQxy7Rpyi8MbXXbw2CViQt2aiezue5UBvEXgCMMXHczaXyqthgjrkKmjuREeHQ1Eue78jDcWgum5k",
  "key46": "4mrQtJiBasSYyLDZrCXhSuXox91uptsAGzQfZizMkTDfQzGyyF9gffBoXhqqTpJiXFzVp9xukLwARE4WoJY7sSJH",
  "key47": "5fLzH8zyM1eJtHucRD6L4sU5fYEsBEHQ4NJsBoSPt7aTArgnzqo9TPmWYeCZU3ZnQRx324hZFbeq5deJpi3Hmtmx",
  "key48": "4d8KjAWWcdWCez5vWMUwNxT5Xa18foqYJpnYHywD4MpXmaUnyGFmJe1nUnaSXmqdtgdHtJ3uXKa6xyizHJM285U1",
  "key49": "5tELJjY8aFL1D3ziMWedXTWPFSEoGR5S5x3vpzfsXKk1fdh5DCFxJJNvBpvGb1Da1zN1BQhuM5V7wQyQJN8XbaN4"
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
