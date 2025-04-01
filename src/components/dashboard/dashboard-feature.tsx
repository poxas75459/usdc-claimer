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
    "2Kn2U7CHM6AbhbqdFXVEuoJpcGMbuVR4Bqcb8MWZjg1bheZUiWFinFzFZUUUhTnxVjRKsBjh1R6paCAoLqw5ZAJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzZPRtGjDtrAuoQ4yKgWvXvZ5xrFCv1jxe9biKXgguRpm2EBDhDtWKFozLTXjazHXM55um8cE72MWcnYr8jv4tt",
  "key1": "4ucH5mtvHXmoa2XuVv1MpAjt6aSjQe1xM7DhW54jA7wYKKSsEKkkYY9LEQnWkkFEWxzyKy7a9uMApUKwbaNYVCo5",
  "key2": "2aEiXjon73qYW5jeCvygJYEwHZC7MgewbvoxA7XfLRD5o8bbiFbSbXSnPQWbRfWzCe3GGDTNAa7LEDxyeokVXnr2",
  "key3": "JpbDsBvpqvdZVa3czWiVh8fPyCtdUsGhALtgjwKcDCNnXrgXDw4NoG6c9NyKbivMVH9Uzc2MuuEsQSiEdcpHUaE",
  "key4": "4UYcM8mcTdbGD5ocTDd4RSJipsFUcYEvjN929Yz5M2MBctdZFVGkZba3XGjB2PWEPR9vzqpPP11w5L6sKa6wnzpN",
  "key5": "5kUqd6CMar2q4Pm6FSLruBwvHWHGARGuGtUt5MjN1TPLyRZ9wHuMnFLfYeqbR3yBBJmb7yzHQzUK3UPBdiBkY8cQ",
  "key6": "48VaCANC9MbfRVvjsc6r6FEs5WCxAtXZRR3CxhnxXHfkCiiL2wsUFJc8yMHXnF6Ehvtg67rnLe3mLbY2ZpohuiiE",
  "key7": "4RHgU5cJpinUJbsm9WM97yehsJqqTDgXufLG2PFESS9jmAcG4P3c7iskmqE9wSrnTbdwpqLRKnjGAkDKA4NmJnnu",
  "key8": "1mPuqgumDpjZV1EpvSL4dd1gwjT2Hr7zUNPFQnz6VtjqJK1jJcbpmjUybhF1d5K5T2r86vbsNToy9zvMJiJPjdj",
  "key9": "5HPr28QeZmdiBYhsvvQyTKRH3KVcaYa7dMYXYD2rmR851BRTNTzfzS9jwS3eWa1uFjrph9E94UWPtYyJFeRfUbv2",
  "key10": "2Be3xpsv1QMu9C5n4sdUgn2A9cXccSJF8zWu3QoYRqevMcycYtdrERLCSmDgiQpr8xJj5J1uZZkCTBVcqSsT4MTm",
  "key11": "4xD7sbtFnbrVtLPzZ5pykbFVmMKNCs4PxNx5WesZRyQEmifDhBx7co41GNEpuTnUFENeTQuPzTP7wahbQFXbdoJC",
  "key12": "5P1peYBV1Ju8jAkjZxivScFsBqjj1Rx92fKb9pEmHh38stkKMJQ33pEZS3CXted4UzsA1HwKRtFe6LyrwEkLqYKn",
  "key13": "4KuBT6he1eozPiZYRFA2RiKxeyrRhgz8v5oRMGQMZFq5AuyXBNGsMxV6bBWMNpsXoiMKqzCg3ZXTnHCv6pbr6Wsn",
  "key14": "4TPd7SBn7J365xRqSymEdS8sX9tXjTPxkSQE5XkGCTWD7qMoqbVRvshLwQgXFaS9RcorpXGUvGaNKL8U8km492kn",
  "key15": "3cRgSMoDrQujifnitsBn6fAFjFUJunN4EJ6qtNYbHKzQ9CvPpqeesqzWAxiEwUkjwYqnhquLwa5ff8rcoH3BesHT",
  "key16": "2veA2DuFdEkPM51Euc4Xm5t47wAP6ZWUq1C7sddJ9zrqVJTMymo6UMCuZFxxdyBS9tzsqMq8CGFWHJCN5rjP9Mkx",
  "key17": "PpGyRng8wsdRzdezz5BXT9XpyjDyV5oQQCDG5deCVT7ryi8H1ViuWP6GiKYg9qWrnACdyrrmduWJraiCqveSGaD",
  "key18": "rLSF2ib29afrxJ3RJUQQWYwWVqMnt6jCPj6QJ1vd5ZwqmUB1dtgvLNmDpkUiNPF2A5QiVC5xL84LdGMNSJ92rUT",
  "key19": "2iLux5th5bUXGshqd3mGiCaAmCPDKJaA7qyfwpqWG5v9aAidp5Q99DidNkuindmifSJEXQCSwU286ZNFQTdbq5RX",
  "key20": "3aE5t3L9R5JzMNtynyZthZQUWG3bKtgerYb6EmPkCEnEj4CNMuxoYM7B1xgF6oBQRrY3e2SWhYz2yq6FrzXsdoqJ",
  "key21": "5Uw6kghBoq7gR9cYEZx1hMpWgGTtS4De3B8UHtSYmVyG6EZxRBSSwPF6UV6MaaBn8HRbgFZJhDG3LuCsHj3mgCHv",
  "key22": "3PPQbm8CjBGJ6pFe6cNbTkX1iXCnhRsBg1gQbEdWihK4mf6DGw1dLdeKWkeio1WxEuF3fz2tLH5zDhssFFN3cEdd",
  "key23": "4abVtxiYAo6YsjG7A2C5Mj1dHgJwZfVMsCR2xwRtGVbnva74xHmQ8bYTbghU6qw25RLQK91D7pgtUvCsdYzdfAE7",
  "key24": "3jLdXfWPMTdY8sYcQt7YtE9iYfK91TJTCjphzFb3v87Yqia4VzgbzHCKBYSAabsjkftEnJSHamULo89raztnyqd",
  "key25": "2wo1DFUvTw6AvZEt4TkxSaZywfzJpYtFsT7hFnNEpKJNJkvkk1QKMxmgFW7EGTjAZLBuE3VYpg1SDs3LQJ1YDEMw",
  "key26": "2SZvr3i4UAeNNNF34mcCGAg12o8eyStKBhqw4pMH2uLyJQQynqmwWToJbR1NpzAPBRmMSxXEqmC6uy5oBTWsq4Dq",
  "key27": "3fqrRNE7srEpkSCkqs2sCuWTbGjmZh7jkzVNy5K9S45tviEZtwLVd3c2QcYNfWwW2MtabZJuW7177XMVKq6bCZqj",
  "key28": "2hhN3unq1FTdYWJiv84Qyg3Z31e1kDs6htJfF5DrKJkFqo8JvMuKDaJmQTj69LNgfqfLJk4sdYnHRZurueeQFar6",
  "key29": "4PimEpDGc4cbfWPsWzZtvoryS7XPHcEMuGfpzhcHzVgjtZZSNAWqPFr9Ry3YfnaKDDBwcLWjVFUVhEBsXDV4FA63",
  "key30": "5QEhChn76hFut9JLToZ5771rKrDEbGU1eKbGRKcYJh9DPZENqVYGQ9qFhErG6JQNWdSSivTnyarSSrTrfKxtbua7",
  "key31": "4qznJbDGEjEZzbp8CUdYgGinwGFCZhKW36EH4RPhT4LVQ7uv9WgvG1Rvt6dhGAyJPxnLgrMPneSMbphubtvRciYR",
  "key32": "316JA59QjGgi2T24Wk4sFvug7Gnn22hNhZbUJCeWHhGi4tUGx1iKwW4XGb9b6LuHftspDk9s4VZcVQRhfCGJsoFC",
  "key33": "Q6huhpgwG3rinqUFX27W6zRxjdMa4gAXS8EFFY2V91faTMv54ynZApecLTewE5udSCui9qL1poF7vQS125HC3c9",
  "key34": "3WthzsScuEHwty9sEoHxDrXZoeswrKteU1M8fiazdG2Ba4rFtyHuWhC7D6UEvPLmzjfGtx7emD99rMUABJzYA3ot",
  "key35": "5wzj1pTR8ntZEG498jrapaFRoJBivxL26AXdLrs4dQBcnMj71k7QssjViNsCGmdjcxGrcQyxw23oCorjgTHYXYiD",
  "key36": "5YJCuBYF9pyjdx2D9dLY79HDzG3VfPk1CjmZFRCCrm7Skrzck4sDG1QitJZyVaXkES16t1srtvZrFhvmUAgWVAVg",
  "key37": "2GpQb3GZdPGnU59TcyjiWG84fgygvG4p1pPoR62S9uaDzQ9DC6BMRoZJNwaBXcEt1iCGdkozBbzXPFFi9THodvfD",
  "key38": "FuANAkZpAGHNS8cb51YfdoLWhHL1ydtBtxJzQGvCXVKyhidTCmHw2R55hUW2piarXnXcPQpbdXiLRrFG8MMxWb6",
  "key39": "5yhak6azEoxY3jEczmvCCynVXrKBxhZSQauzmmKcyQPb5WBJaPacyp5Cg41Vu7ELPXVmVFVKzyZbjTrpPDkfMB6K",
  "key40": "4ESqPif5cTN7uH9U5eUCPDuCFwnnBfRJH333fM8qzmurcGyFs1WeQjdifUMAqqitjeRg8XXEanuxeC235nmZBSXa",
  "key41": "21AH87yqHokVc8jWkUkBdUfKqg6Drd5XLxLFWeQ3A6XH1M4Uabsd1pRgYG6aHpAPmyAv4mMV6aRu5jNFjZrQFary",
  "key42": "2ESM6enMzHeU2H5h4GKdikTdZkk95frEbhjRKd8QDJ4kweejVxp9jrcTX9N2BE7g2k78mwjZhSXSgEfZ4RhMxsx7",
  "key43": "DnK3YLFrAzBeNs8J29ZxfHnVbt2ZjxgMGRToNghVsYmbCUofnWyffYZeo3rRgDd3nYcxjBZKCrEGZzNGuyUQZa9",
  "key44": "a6ybLmJATRn1SnW3enAy4oKVK7geDGjKfgPVCVDZBeJYsKtje6tmZmSynxELDmraqY6kxG1Smp9a4ggck5VtBDA",
  "key45": "2BMKiir6PKSTVNU5HqYTzii2AdbQ79NXti36VrMC1oLJBJAAN35c7p5ttcT6HP64MtJhTzz2TSWY772QggivNodo",
  "key46": "4VYiE588GHqXqQcc5nYCnDefi4CFi47ZzGh1H42vmTHBNgXejQPRfMXnUZfYi2iFWrAYkwjQKttMSKXkeDYif5G7",
  "key47": "4wke6UiYbrT4wdC4uospCVwMNfxH4wLM7epePRgpUqUydDvx23jZkcGxttGud2AYXgjQMLX8gsZB5WHzkW1926sB",
  "key48": "4hVjn9vVA2svxyGr3Pm6yuFtGMQV8gMDEaTZE3QBgG2Fym68Gt3oERpihkBYqUw9WLxUzjRrqdG51bsUCMh9N6w",
  "key49": "676QfuDEvYtsMsCP5DLTivzm9B3BR4pEDzJQ1wz5cLdqJTZfYfBs3nEhTRbJY9XAQ3cSLxsaRi1eMTS7diXGLsPZ"
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
