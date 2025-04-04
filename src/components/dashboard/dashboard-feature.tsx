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
    "66Raup3e4YL1FJEJXR6nxrFumssAT39GC2d7vCSBMtex4XSVVR7XFwiA4SLH9Cpzhv8wfyRnyUsztUTYs6APcxH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zs7Udo2RybragB4yNQCQ85aqRdBx7JqYEW7Gbid8xF58zvK5f1novcMeK9Mnjh2EEJskz7CTeyQNkZ8J9qBqS4Q",
  "key1": "5aLcN1SqykAWtecNXG6MvF4bNGD5vMdzCTeY8cf7dZZKAG7bT2WagKmneeZMJqMnMfZdZv3ND6pnBogNDGbb6gFW",
  "key2": "2oyyWYKVsk12FhNJbvZiGgx3e7Py4Qhkhhacij3BymjJd6w9jUBzw4Bc8aPPRv82qgemsTNxwaBgGPVmXekE4Qts",
  "key3": "2Kz79mb1pbaepnoj8NJrRT9sTQ5oaBQRUUruCDzYuvEHjsvNUoZcPiTkhnLswR2KVY9aUAcQy8kFuEoLnyE7eN7P",
  "key4": "5bAL9jC4ufaLDprntCMgSk7ciJjWx84GQJmpmZuV6Gp1Tf8pXKCPjjanPSeoHNQP1dyhzse99bhqLyDreAs4x9j5",
  "key5": "5EbZYJmjbMuzZiRfMKVHZMPtzxsPL86Nm8Uf4KBV5wGXym3KuWEHHcY79mGhuLZfyPLeYcLjS5ka7QXFaWTDg7uB",
  "key6": "2V4zZqYyYrPVjtzzSbRdjhdJeLYWN83cDiyNaZNTLzxZJMFzcra88WWziwgyQnALQpNDUm6TJUmWB2Hx9RVJ2e2",
  "key7": "3T9JHtF3ii2xjAAckw3Z2Bg2TGnTQpGxjRzNSwdYqjLfXLH3adteNqmo47La5Q3WWunQ1t8h8BbkSZ6HcYJesT6c",
  "key8": "3cb3V76vQhxwttKd145Amri2cZZG3qdBLVkgMCFTa5yKEFy7MmEySdc1jibGMyaTNUbKCTg3c2pzj5DFwmSVJhBc",
  "key9": "4YmZhCYdeYD2nJMkif62pqBhEPY56jDHkLdwMybJqKkrBTyZrgrH8Nt2uoajaNesHhdmxsV2enHmEEsqk2KFCojF",
  "key10": "3BAFZBN1CLtPZ5o8Kim859Gzz3PEtdfEixMKQ16KUFSha6wEZ9UG3f4SECKzTyXLZW7cR6s4wYwUNKHgVNWJAmbd",
  "key11": "KSL8hh9EuMDwuyjJf5QS1ZC1Uk6ABt53Wje7igwY61UmicQbwTTryYdEgsXANaLBuV7piLj9u1gkYwxAJ7LjumC",
  "key12": "5jp3WWpSagbwK4gSpFgXqbmJ8GnZW1oksSPTcRj7Ee6yUqCLdmJdN3PLGGhcc5pLwK7NVsxBjs8nWxZsSHsH72bu",
  "key13": "26tMLQgoikRK4LK4ThoZn5cXQuzKUWdsktfEWJztHDm8ga4fm5f6E8RcTmJKYEiKfdMY8CdH2aVbSXWwfVwBBnqV",
  "key14": "4K8s6nGXK5FzyVd4HyfgfgWVizni9GS7DwEZiDPyUk1zaFmcrUuZhjdA2TxUJNToiFnPLPJJotrmnoygMS8yU3Hh",
  "key15": "35sbap5Eeq5J5ZhxhaMQFbNaTqF4coqLxXuJ1jUy1uyv6nvRawasWsLgbDmZHXAViKxFJvG8RYkMCPAqXLUgqJ57",
  "key16": "5hf9JDHB3WdxZZoB7HcisEa7T4cJkPyDzRCtQm3Jbj5sbXaE81irE2m9PvFbGyJN3TnuUqDi1zCLBEmntcnDcQR9",
  "key17": "bnUPw4rQcQKvjJvX9L1fiM5Zg811rEAmvXKZoc7Umg9deuc4VxHdPgZUTYVeeZVhTyubeS2UFdLpWLj7FewjXbi",
  "key18": "29fAQE9W7C6RaeHATRaWJXmPNAKDCR5Um8Lb5zQ5n9dhygDYr4NLeZjJtwq1PDp43TpQqDbjHa8YKBGQmjj8SvQn",
  "key19": "39ZpGQoNpoCymeayMY2QmnoRNhjgC4JAmQ9qphY98i2FtidsAUiyJDaSUjkWqEmWANBUCaymthuhHr6qYBXqraii",
  "key20": "2jbuRMgZ7YhfrPuZeUvY5YuiEti7bkAr3L6UbzmKegurBpspBYGo5rmbESDef4xSBrsxX2wqtfginwdZTHeQZsoP",
  "key21": "5nAPigruvZDy3MHVJwtepyxTVMyz3a7KJRKFKPnQ4vDSZaME7WfiCU8ebVyo9d2AHDQbmGGf3x3FGgEs2s34uW5m",
  "key22": "3sq4zjKeSdSJ6ye8ffSjje2uHNKCr3navd7MmrUfpUBV9rjGU1c3Ho97LRqvGsAnQeZgkv2NLZqMD9oKbzLuKyF8",
  "key23": "3JpSa3XfP58qhirU8bGR6qY8HKPfA2uZTE55VpL5YYgTmR3Y9Ltq5ERWm8QSNp4zPKcm8z7ZFu46e6ekrp11TjVM",
  "key24": "4wRptDv6UtxNqw7mekN6QbDvSYbYdZd9M2omFfnPi843XcwWQDPKyd3cdrLDobPVtSJ4o4oR2yxJuQPqaAikZ1RB",
  "key25": "3e8SmTY7Mm8QftTEwG3w63MsuXJVa1aAsr8rZpmsvjVV4mjajMNf4Kns7Ls7vqVHsdkfedZ5yhkPDgSg51nDKBHU",
  "key26": "3rtQuD11SBMKLujo6Dx4m9vDAwnKr5kCQHVrJD4Uk8YMD7Bqv6eNVyQwf9FjtjzucovdSeVyrhTnqojAgL3vKbou",
  "key27": "3djJ8JUKy68TA6yWCADkaUcDxjQxyMmmPjsa1YUL87W72bd3aw3PCrr1vNQcJpSZJ2ZTFitENgMmZYTnm11FzFwC",
  "key28": "mST3v2Zsii8Xm6fyCbJfvF3rcQGrzG45ohYHfhGGwxn3vZ4nzAyg7rNNWkJtXNih6znaE6vdEgvNoPc1kxXjzEH",
  "key29": "62X9kDrMd6UMPY9nTDsetgT6PPbSFRLKcLmtkkkZJGKVjotK65hP7La8XsxhCDRpwX8iM3Fph5dAPtpguDPgrwfn",
  "key30": "2CoBKcHUHTNHFCAcr1TkhRFCx4XXpCLfZ9NmDcY6zZJgUW7YXgStVsZPvZaSTt3UFGrvfhjEQH2jLmuNFVRncsQu",
  "key31": "4ifQPNKbSYE48CtkQHmS8Ndn2hGwhgCeBWP6kb8xu1zU75pbrfcFg9r7QkeKodedvfirpEqgXvigiFmaDKmywqXf",
  "key32": "5dmtSd9YawoRCYcdR9GYwcp8CHbUuVrTWQHouhMUPZThQHjL5AHRQL57ujne4SUPCoG3ss2r8rG28p4PaDBWoDjC",
  "key33": "8AyWkdh2pRpHbjfC6RrDfERvntSb7asdo7fndcLqdEqHafW39oNAr1LLbDsVqg5B676M85md8eTcmdhjVKUcLwX",
  "key34": "9MMyQq3fhBumWgs2JGLnrUaa7A991WSKoq15MdnbKYQ93Pnuj6fsyRjpv4zmP4ruQj35GM8gegF3gXKYQRTKzYU",
  "key35": "3p8FoXJWP7sYQtdrWN6euSBjo2CNk5qH6kPPFJ3YJBpDZjaf9U335EZC6Fi78aCWenLWACJvSYpe7tPoMvNAEC4p",
  "key36": "2NMiHBtJa1qsK1NNmhwUPdxZ5PX1bk7ruVJgZyUertoBAYdLUBVwfqZfoJ8z4j7PkLAAp9joA429aeuw5qZNacMP",
  "key37": "51rtysHfjVaRYZFAsbrG5wY7GyZTCTMFMFepmzSCk9rwo9WQsNQDJ3wckv92rf5QRkL3fmNvG5rVArzKLwFtiN47",
  "key38": "gko7kgg6QjMfJF8tBAtomuX3KG988q7kDStGvqCsF8u1EEACLV7xLjFPMSNmkknfLP6qjSMZXMzdqJUmoLXmRQT",
  "key39": "kRnuYzVpJTcn4mXMCeQRushXpJw6cMPJHCveFEj1sBgC8fnVKK8juA9N5p7NVrfvj632QdFuDWkXtdnvER8xXjS",
  "key40": "34wyVP2zNdEYd7skWDvKAqjc6cuXHQNWQuyNfZ4j5o8Fdq5No3LJb4nkieek5HtwqvvEMjcEY1YHw92tbbh7538F",
  "key41": "5q3pTZmDadpMumNdSUNjexynu9p4eyAwVyyYnv2je8gBx3Wtsp7d4aANBede6iaEeZMZgigfZGWQ2bMRRYZrCQRQ",
  "key42": "5RmGSd8hXpMyRaQtNsPY8A9VpDknvdLFQemcfeUYQpJQRfegnCSRX9JYAaSasfkX5JtSvLm839c644Pu18UHnGgf",
  "key43": "2CMwQXA8va2QHZeZ8FcfZBXPf9FWvGyjBvu88kof9QYFsz7kVHKAoZ7K1NnvEpBk3S8TFrd166fthN5RC7CAvHGe",
  "key44": "VkpKKExosbFCJ1CdsiCSZJnm7WtbrvPDaVF4oz73sdQu48SijHMwkpcS1P8E3mfWbmTUq4PKuS7TP1YciZgDE57",
  "key45": "43fmFwmz2YBiJszJeZTDm7e6Husk2FHTLJjJHg4PDfwNtYSeye2iRXG7QyqtweYNWoxhGMKje123NjaKQw4E9LYr",
  "key46": "63iGJd4frsacYsXGjqRU2xGSQsJFaCiWHariBLbhvbcvPM4k6L1sq9vcVxvuwbDYG5vhLbR36TMD1kptmBZFrz7R",
  "key47": "wxJFmc5We3KEGM5jS46Vzgq9aks9Kd3zYhieVWnLVRPa3wEK6pZpJt2keAZjnLMBSNy6jujjkfjizkyB5JGKiLV",
  "key48": "3YUrEjDJNAiMbZ31kQ62xLRppfKodNm48EhcNKmrW8UtsTMjUQgxciABJTgdMNoNUSDUMEUKRvZNz4C5TTd9V5ND"
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
