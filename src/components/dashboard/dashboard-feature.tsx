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
    "5qAVFFqJR7dSAsXHYKf4qrdRNVB5JgA1Li4aCupScMEaBif2WtpppVbZ6Bs2L15XVZsGFSDMhVURLfzRYavSvee5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PicS1TvHGTC3YrqXViDpGoRWPzdyu9ryAeWDb5u1gQQvLE23KrDf5kHMFkAmXmPMmTMh2kyRoxFpCR9WySykoJB",
  "key1": "5jqQsJBt6wPLFpKvrvmvZYzkKApQaMVtxSLHCoDzbNXJeYREMTBmJqMTxivLnwTEQUqXSzCPYschJm5wWhhkDLVU",
  "key2": "2oHDySAZnrd6sP72eYA7eX4JwCYQzNxqfwozf5t518gaYT9BqxSdjWEZSKNe1XrcEhyGESJZZDhPgAWzipKKpgmL",
  "key3": "5ev8cozFewvnhZ64rBTwg3HmWWMMbed2L1bN9UxVVQp2uwHefLQA67CCAJtVMoSVK76JbodqPtJ1TBaF6ei4vvHx",
  "key4": "4HJtLYPAD7sY1Ms4d6iZqq4eUTuJ8xpXrTztRUdiBiHNy3bPrzY67rv4sDbPeidbXzpvfGnCnf9dFwX6KBVne6pb",
  "key5": "4ifJVJEeWjfwu9kQwVHg8w2e3s6XKAqCY1GTsu8pG4ZupYhwkYP5zs463Zq2hdgFs8Ay4UCpLxF9HDGULWxxUbFZ",
  "key6": "2kTbVNvoJrHfwBxQupARnXjvYLXqnJHJmLnesWJZRVvqvWuEX68EXm5xdPrpAbtwzt8KGAB5BeabnVgKK3huC96n",
  "key7": "7bdWXuSxb4nya32Kt3KPx6HxhsYzgYHYxyzXLV9gDGPZkEYi8E6MCr3siZhkbmxPmriD47sVapQ7BEtNZ1XGpAm",
  "key8": "3rtHjChbiL3cTUcF64DTmPEJoaXPhudnpqtwBhXarGojuA1ewNbDHwHFUsS6CHGzh6X8FeouWYuupaV7o9sGebyR",
  "key9": "2WULCRea3prdzpu9aFnqrKaj7DxCw81H1srf1dVMJ5Sp5tqXYiHKq1EMfVUBvsKutrKGoX5msXjEpsxEnXo2xbhC",
  "key10": "5sArnUoDUNutvVWABYtV2UAsaHLELjQ4DwUJcX5z5VvhyYKXajthtsGK69Bf52JEpC42GHKQgVPUUqVjwgdfKtHp",
  "key11": "64EXsCX9PQ4nCm9fUftCGQtfnz7zaLxB1MmKbhMT3HtKGCxG2QUZGsyG29CgzL1DDuKoTa63JhRy4acp5TxtNMjj",
  "key12": "43jPqqicv8Y8MK77jv9Qei71oDTtdMqaf3DbrMJgKtddfAidCM16u94nZ5ZLYBAUfj8GdZrnS1gCXQL4Jifr7RR6",
  "key13": "4XDJv6yT4a88k5C663tCQaE9BrvkPG9hmAcz8WDKqT4bsLmPEx738pXgjasNi1ESXrpFaXhL5VqvcDrFm5cEEQP6",
  "key14": "5xLNbNcxgAzPohxHViQmNWrFi49nHxWBM8W7LniyU8hQCp11dHqekPbkxtCfT8axEaqktdfmpicoVH8UYfU4isSL",
  "key15": "4FYhvW2ByV3XaA68tweC4LAtc3AmEF1oRvUnwHgvg1TEBqvZqwxaSBdS9vhHA4q5Lo3ikqPbi4MhF6xDxKXHXyLE",
  "key16": "AeBpVzMG71ioRK1UBpSFf5cDn5MYGXRJfLS49wdMtpqUpvaJNsG3t1ARY9Rokh6UbDUy6EcjstxW6T9eW4JnqpS",
  "key17": "ToHRs6wFzD78rpusa9kgr8K62LxKZfLtQHZjqqqT63zmALeMpYTU1xbDeWbPmennFr8WJ3CykpPsx9pDfcQFrA2",
  "key18": "4W4C3Sp8k3w6zvkiZe9qR29mY42JxrE66UNKWJVdYGoo4FhcNvEdeWBJwWqSVyWsYUPAcipDc5wKzxdnkHgfiCZQ",
  "key19": "2bQUcNSmcLcXirEF3KJAhMYZ6cSAboiAypk8iQLZExVUoUsX27awbrH3omAKorrkyU3WvFSNRXBzB2Wtqn51VN3b",
  "key20": "5fKy96qgTt3XD9MD2BRpxNwFaHngoVSsSBzAJMtLC1ZUScWY9PJoTkRFRhS6KgXgixaSxmRFuBYinBFRbphfv8xb",
  "key21": "qavouVtMXRBscJ1qNcYzBm19P5DFbQQDaQW9Q8z9knoSfoTP5bkziUk5PxvEDGjDboyix9e7ahjbRNcdHa7SDdc",
  "key22": "4Nfj7JZYP5RNWwTJ7gWyKHb2NGtWBhB1e1UhHWa7wduGdwMUTMoKhcrX6e6WW4mkXB5S8TJCu9hjGaPFWSrdAjJF",
  "key23": "zpRMmSYNT2Pc3USkXhdMSSyxee9Yc1xSYPz8BkuCdTgmUR9rjCUncGzxRpDT1pACNNunJxRzfKeizpBrFbTK57s",
  "key24": "5HsYkUE9WAgjq74kpUamPxvHNapYav6TjZmKVxSeKtDaaXWKJhJaiFcKRDBFfBNNJQ9ytp7qiC9mfiwwDeNBvzuA",
  "key25": "2agHY2eC1QuHy1rfUwCHxDFW2YWB9g12Tc1BP6UhmkJXX8JdE59PARNnvu1htFYBu8H3feWqhgD4hxYadRNzPdC4",
  "key26": "64ZoFssRn9rCHPwCjeTeXH9qHeNajaECYbFuHmWN3Si1QXDHSUnkbk5tLmHD3SzeR7JyNpQktMucSk1qkZadqLdG",
  "key27": "4PZ1SwteiKCHr3Ew6ecgVa9Wfueds7JjtHChJeTDsDQK6MF25884dRfvpBgqmSkSpeAZnJ9gmDMfkQGD7NnRS7U5",
  "key28": "2UM3Hb6bN7miXGLgNqdQYAvEUdqeaD8uPzhTNbgG5bPa28LTzn1DHXNCoywTibmhHwyMBeG5x4RFyLeDgvNDmcxA",
  "key29": "B3K19vYLGgzv6aALzk7bfY2RjajT36DG2sxagYAe639kvnq7716hDUgpBW2EibT2qkyGiWUKaDCxumf5gKi4yQ6",
  "key30": "jz7DUA2sGhktkTe4TQznR8XckPYGjs43KGqY2ovwMFxV7gJak5ZUt4rrXZ3nqubnyTqezyDz6PMR9fPKHgho1pJ",
  "key31": "5TCGsutLkA49nHgUtRjKqJZRQJ3JrYwAWL8SQGNySNaszRJbD7eWs5E7ii5NN3epM8Fu1su5mBcjTEm8PFUHwfAQ",
  "key32": "2BsnSzLyZbfdEsr1Sj2TuXeUtLLc3i3nHJRSa3HNr1HMGh9pgoNNZi5xk71T1zt6EWj8NXusypxpo2Znp7w4cR9B",
  "key33": "1YbPaUDuSv1NoDtCAZt4mkUuAZZ949XdsNysrHC96yttzPryLJwqc2R7iQ9WbssF485FBG1U6Tivnkr65v2fow6",
  "key34": "z2Hov6zZwjSGbsEiP3YWSoUJiZWn9U7WU8VmEUyCaRncwJoxwZZyVrQa4nn4Ef9nkfrjGN485b3Xj95P7h8Kxcj",
  "key35": "V47tCmt9HYjNU8sXD19FS9oLjQ6JpGs1XNXE49ZGD9gcTgWPjBizTFmqVUMJcsBwhdCSodwWwTiUCxcLy7gDBwn",
  "key36": "3Xc3R36iwaPECppBqUVZ343EMqBR7JaYsvxX7g7bp5hNf6yAE2NrCNRZRbeWhHcnheNhCYYEx8sp6gvNBDqFU7Xj",
  "key37": "31Ruhnsw8PDE21BGmPWGk1wpXvj1FfhFQ55anoqsE7mLo4kdkCLAQoYKh62zpYRZ7sfkFn8wSF99jaEuM7HSTsyV",
  "key38": "3mgLSJhgKDvFZfKig5D8LZEFtWJfZXsV8iXyZR6RPz9F4ZWE35U7bKMzJuUdYMyZdSCeztfYhsXJpwqf93wfdxSL"
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
