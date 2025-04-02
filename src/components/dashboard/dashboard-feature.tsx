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
    "2qCAZwn3Z3sHUzok5ZzrqTictHc5dNcLZivm5E7pK5xDLoH2s8J2dXJGeuEjtgGwxzyvbSs8EoGvoC3YwruaNcJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhg3BXdpE8GrrytHrg9ASyaMehLzTh9hW6cKioP3JyF7QZfJSvvXDnXumvZF83pCJsFRux51RarULSqbnXJuvGA",
  "key1": "2TRroQhXqG5wqT3oN9sGXsXqi6YFAMn8bDG2uXyYPcK1zfvfjRn5Kea7dxmW2EvdJeRP9cw9e2fczUdDWc5HwUjW",
  "key2": "5hnW99Bna6yhbxLn63zgwSYZe1zmacXsAEyf6wfozsisday7xHvqpFnhqaeTYM5NUAkyhStU79dBFDM5j3dRX7HK",
  "key3": "2fyhxNDtUFYNCL6EUkmh63gmFmxrtCn4csRxyn9f7PYmskrgsedJg2fZo8trMrjTmN5JFEqvYGFfBtg2CPGpRQew",
  "key4": "2ATEqhRZoVvVLehSpidFTPhCrqwbhQ1AGGVkTCpLi2eYHpaRRZ8xMPLkkKKiSBPsKNCSGB3uUgjHHLwJy88TSZBP",
  "key5": "3Daa1h9r8i7juY9qcLEYD2uzcgajMQTB5hAnxq6yQU1D9QuHMXZnopdZmdvRJRaxkXavvao1ME6HqJukHoao1MyZ",
  "key6": "b3Ed3J13K365iu7ncyGteZL9LrTqPqiCgA48NkUSyAYDbcB9CUxtCVMiQSMNF9WsapE27CwvdKF5iH2nTLjEkHd",
  "key7": "2kBhGGaurNozLqiEp8oC3SXVY4ZvjNNFC2zujqPBwYudUacjDfHPhuNRzvdyotaE4LuAZLxrcjgKiR4Jgd7d9i6B",
  "key8": "27AMW2HKVX5SosVn5Z3cFsd7ojS16GVJS8BdkgovsQj4hyvTKAXFxJHWoHJbFid8fRxhvUpudj6zqbqh4r4Wqck6",
  "key9": "5YNEjyBFyVMHp2RA4mZVhRgahApFF6dh2fE2L4TLfmMTkGJse3pSuodGhgsNRBKedE7B9Jvuxnb8uiazs2ieQYb9",
  "key10": "qAiSUJxoknv5KmZ5s1n2t9jrKSVBtzhdSsooVhe29favGswwd1pVzCnLvFrPMCv1hnZrJyWMt8tw2AF4BZULaoT",
  "key11": "3my9gmZjPaFH6nyyTd48tNhcaRMEN1NQMJ67Krt3wH91voHbZxypa39ECBHs2w3VE22T7X1MAHweehcZ3YmsBJvf",
  "key12": "66xLi65BnmquCbi9xFZnS3Ga3ELq1i1d3vxcq8Dc9KrGsguzgLwsvCubgSwtnBQQ9Z6SCSHjt4emhBZRKzUsoniP",
  "key13": "2Sm7sC15mR7FaZANp2VpXZVT1TDJPuoXkf8HaNGaGoGhpnYg33PWm6JreTSzekhttXRDmGV5BxuLfCh52BAQU3Kd",
  "key14": "X2VGtnwV6BoUPKm48Kmc6jormRH7Nhxt9frVWVjF2K4vJJTRpwzQF6a7eJrMGf3bAM7CZZ6dpAvspswfvRm1dzt",
  "key15": "3UwgYQpzsauyUUibS1SEaiW1HnsiYNNceCC4XRxmfwNi7X3RW59YAhQQg3XNyNEJbxjQZ836BDAwe5B1HmzJeSsa",
  "key16": "2MsuT4mYG8myYkXEfAPdGSpEgMsGSbvpUyrSgDSfqrKzk59FLnYTFveifkTuVFsSjeCqpQg9DfHX4A94w7QEnuuT",
  "key17": "5AdfzvUivhmw8G3JFNNWaQ2tMZdaM2ja1DkrBfhqPkJHGt2HYfrivbbGAGKiULVs7kt1QUBz4GkoXPw28fUWGoD1",
  "key18": "2f7fBq5NoYVxnHiJtuWnBSBnzk4tbEGiiwSrrib2vX8ATSjGR5h6wGjYU4PhMCSiMTQscR22VwpDT42Ssm9QnZpb",
  "key19": "4yvufbKGRXgKGRYXHxrj8n9fn5MxVYbVFdFGnz2RLsSLSbaGh5X2CA9obaXVcKqP9ZX5SwVXW45fLkTMxe68C2H5",
  "key20": "4fi1riXGh1cGTJTNz1yhBcnmr7vZRpAQTfqsiwxkVvWCED73f4sfejftxh4sf7sjBcXxgQ7dPvkZbDBRCkBme7Qa",
  "key21": "4jwcYyyxXbRXb3iKFV3maNvCejqfAz8AGHQ43i8QUsoxhuZGpUNASFBAUa7BGFNJb62ARc8RrXu2PiVvpimdHR1b",
  "key22": "5f3NdczBmV9vv9GxUbgQE1g8b66MnuwbLHJtqAn3mQMyHn854XHME4Z2WmPBPpfdKGnDNUEwqyji4zeF1hKNj1b2",
  "key23": "3BVuWiaDAPcaXPw6zhtxpbeTyZrLH8QFGk4To8JztveKQyPAeVjaVC3NWbWs3HQ6JdfekGXd9fQUTPDT2odwSi6g",
  "key24": "S7CVM87Ki2beBsJUH5Yx9mHkhm4UQQcw5MhYVkWKYVrJ6CHXy7bxeXeHhGzh1CNFNCunwZp4vd9gkr7HqprTEHf",
  "key25": "4cVsNz6R4HnGYYfC6cbP9DScw68qrjofsztVsHrUTPbGEuCJHhqpNHmdtsuoefSZEFzi3a73w1qUoHXEyBJWdgkB",
  "key26": "2q6kubdCGixvukPoVS2X3edqus7aachNA2gmEZQpTqkjtLkoUeB7uqwgiumRdFTJhungMHiDLTAFGqfcyzWFBJ7q",
  "key27": "5GR2emr7KQ6ReNwr4gjQ5aTSdujqaP2NrBe7bAj4uCzS48umjBDNY5XRr7D6vcfrYqKz4D3r9M93SLskanBiGQJo",
  "key28": "4ZyHPbsFfKuD6cjE6RqHLVz22wRirBQFdf3e8cRNegRhY7eTAmHSnVmmFerxNYCrjHRhv19wxPba3p5MgGjWXoSz",
  "key29": "5cSKUXGzApViokor3uoPdb6qUChMP5vGxkiJ4zNWnwsUqAwUP93WhZgJ74Ff9FxYhN4GDM9t8PkgZbZ7mRpKTes",
  "key30": "2vTFtBUu9w9uvubyjPvnMwDudQ2YdwHDygnaU7eA7mdLX3ZLoR1eTS5uFKrYJWnQeNZvkAPD1SjtuVczonZuqEr",
  "key31": "3aKcvzCmjNS92vx4JDjRCppEgGU1mdBrULN3kE6MHveFsPxjbhiErbDSQ7pyt5E2QLNRizUtxBSDfE6oWR1V5KvV",
  "key32": "5fbvXqDoYjzSGECVyzi7xUzJp7eoVW7bqa9cgVhQmsXCUawA8hGs2UFJ12Wvz6RMJeZzbzXNLTW6DUeUx256NcCb",
  "key33": "3t13o2ksNSkCzGZxdewxGFps4SQ5LFgWAm2DX6L3QERfW53hutqxUWq7R94VMT3zJmDdzsXXGwmRwgZUGs1vQw6k",
  "key34": "4tUhDSBLcYbHbF4fsdubVKqrVdLMfoAYswCfk8o8xERkqhV2AZunDDzLTK9of8qEwMzNakLoAwKZ2aokkrP5zgKH",
  "key35": "5B9M6VQw1DFmMtRY4W8odJSrScifp8bqv9Zg2CcWxy16yY5WPzoBUQHCum2A9fduvBqUejRQHYfSrcK7NTS7oTCi",
  "key36": "3fMjrA8GsrB8PTSHTdngko4UNeHWosW5bhYi13E7bh3tf7BU4ZPCFjVGoHzGsKhbgyFLCa8uQF4xvFCXhs7yAQ6f",
  "key37": "GQfvkz657Vym4v3FWHFwWDcnUgFsiiygchsyybEJcQjqrzMPtQfD81pfgbzG5NgSb4tPZGXccra31k2FueBwDGs",
  "key38": "5unfRrsnCbcA6aeXwnBkKC7CWPZBFhEvoMyUCyc66cPnqkoGKUPkeXPU2342sYSsA7i33ktaR2V1TcdAKcU2xzVu",
  "key39": "2s1b9w9HHa7SJHDzab86vZvF1AVnJqb3tS3UhH18AFR3BZSm7Yoazvz48t3Ym3RKBEbmm6mSCPXsKqW5JvdR9Jjz",
  "key40": "5tNm6Zf5gNgtXnTfrTKwtQcL4gKjH9zY4Vf3C1i3fX4SAknJcrAuFy9vfU1b41ZSt3q9rBcB5A2AjjTt3snv4NA5",
  "key41": "5yQKLEbREo5Sw4Tqy2Hd5vb41M8KLyefV9NvvScpFaLXaZcrWNhhC4bNnAGE8ytTPdjWqvcDYimxWn7xkBe3Bvp",
  "key42": "V3BHsHX3wVDyuR1tDNSnrCH8hWFzkhNSKBua1hs4Cr5CiuGv7bT26ufiKEeGuYnfeivqpPQmu18DzmzQtM18nmt",
  "key43": "3u5ujgMtBPmHzz2cCXG1UviB5TkgMvWA9QyviWiFGswRA2M9h5QdzLZ72ZKvR4qL9ZRyAd11EY6b6uPEuaGA729p",
  "key44": "iPD9Vbgy2itJYthQCznmMxyWGB16o8pbD4pVtfy3AsUBGsuNkSnwjbHFQ6tH9f92C7CmQqkdP7t2pihDzPHKnyW",
  "key45": "2D8To9285qDKCLDDHcmDDduyiK6K2VtDTqBe7sb8fwhe3q1rg19nZfYKFXLTJ7wVmzfywygbT5HsGgCMhLw95zt2",
  "key46": "3RpYk1X5e1YFb6tL6XtVgpf2snfogWDfwXVQWrpDHp9MSrDXieT5jox17kTqK9Pvavic9MPefkFtbvNGfA6j7rsU",
  "key47": "67bKuiSKsvV7dZcNj9vXiCBms1ewmaJY2Wn6txbMF4wupVT999Fy13iWHNJA19TKi8rV3c2jcv7hKXDyXdhjMuvu"
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
