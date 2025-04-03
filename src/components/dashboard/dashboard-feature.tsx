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
    "5CAc3fuv5r2cgk1sY2tzXTA3jYQzKP8CeUDBYeLiReEKhF8HoehdThtN6vb6EYzEnX2UCCSFQnUWTbJY9ga6wbkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMprvfrxxGr6hPQscx1RrbXUUGLP8bCTXfnzFUCEs7HTKe5nnKBSi689JSKkPEDHj6npmvMpDHumwRAAKcUzvCp",
  "key1": "4addiMCuvViENe6iCJhje7fU9hPqfohv9HqfLTKb6qureYzGK2z1nYt8A4AqvVNp2WWxMzfni1HfavSW4PrANFK6",
  "key2": "5tERRX4Wh8EeCPyHKUHRxv73a1a992NJukgJ7mH8qWdCepFmunyQ9upPf1GaHeawDHsTedESzzp7yydUvFsZKAr1",
  "key3": "36b6Krk7mBjGXqkjCD8umxjGaTC7UcLzsLdh13bFZrbGe1nh7W2qx5GMnXEzMPF3h56n6iUdQXrLUvhvnFgJH2ex",
  "key4": "QPb4bVLeJR15Do6PKpZxmrGv8J4b34FrQofj48nfBZVk6BPezhBuW5ZRnF3h6mwfiC8uVsf9dqnanoEt23dqJSP",
  "key5": "65Tbptb59pCoa5N41NBxZS67Ucp12QNYyr859f5dDsdUK7VYB9exczfz4weZgkmJwfVzWPpfCMzHGNvjs5vgSEMh",
  "key6": "ycyL3SMaLLcpLbRiSCMGKgVcMyWtpy5Ka6mqyUzYQMtXyLuRZCL2dartNQukrvtmnFwqaZ21pYW7L8wVyYDY75L",
  "key7": "58ZUzsaA9LVVu49XSgZG2WcT1tw3AcHD7Zk2bwWN4mYaRnCoXTrwcGwAGNzcdwNfH87eCkcfEMrhQEvL57RoRoiv",
  "key8": "5qWMytVpKrJUiMjQBx8oHJ6DEAnaXVqqGCyyozCGamaSxUvzJsK41Ddt8ahgYvYQc1XbZdbo3BN9kRnNgHmRASHb",
  "key9": "4B4rk7occVkDJzW9dUqARPMUYVo66zaSg7KJryqQbeNpMCgr9acMW2x9wTPsmwiFGyKrDRj4RVzCBuVVn9Y7HHfU",
  "key10": "4gG4Z33XR66nLAsGuAfKHTubdx2WNQnevugdZBfoaFepof5dK8trr9HoqifgREDxDLx2VMhWUWmbbQH3P9rbWzvh",
  "key11": "wYaJ8Drme1SKQYk9CBx413BnjWoLaWt6ZVHM4XLT49JwAzdwfD8jUTTHkLvQjy4FQuhWqUCZFtZjUCb7xg26hkr",
  "key12": "2YW8wk8DfsdxRTGuesgAmNioVsTVGgGdj3zSD2sEJN5oPTyLpvYRYArPPs7cAFbNd3gkEYunmCbADUz6ocDxVt2d",
  "key13": "5eHf8Vy8dWZV4pioFyf6RRPCXzyjwFvJPBA4xuUKHL9BEcxdrRHh8SxkQMM5m76rYA31qm2pW69YTWEmNRhd2RUq",
  "key14": "5D9s5RHj1UFxRaNtxSwZd61auVMxoSFxWr3Je1iD4Myv6nwDGLwKBVmaa5c8M7fkyMFogcLh1s5LNPyXrDUavosG",
  "key15": "44wjVNcEHgnPmsK8QiP3DTEjuFNCKPzB8Qnecf6XjXdTcfXT9TjyBmnaye6AR1hyf7CMuvSwn1pKzHNWQcDxBh2d",
  "key16": "WrWgYKsmxe8YgpKWxtK76njXj7KqVTNYZGmgZ8UXUmpdh6bs1n4wjYzsdpv73ruPuSs9pTpmoH8fKxVZVds4hQs",
  "key17": "5b5CdyX6RPbzA51xGaFPUhS7S2rojLxZxtSbLSzbcYNxk7SjC5WnQyCGDbxTTe26KQjkVsuFYSurWFCPLhhJtTL9",
  "key18": "qdAxTacv8dFUHw8cTpZz63L41bZ6zRo3zT4LwYhPWHCPQ3WJzJJe8VWBksKvVWt6bNJr1qrd6ALkoaR5E24Ezyp",
  "key19": "5CCq6iKx3HNQbSidyGk8SbPHVL5X8GubGZmU6XYgJGrAYtfRq2RQx5BahFGGJ2w9gT21kFu3JvshP9nzkH5Mu7in",
  "key20": "5PTJ1usuPFhzikQ2EhHtVGJC26EFcf8TzAJGHGY32q93fJdniz3wuHdhVrZx43XqnWij5KuLYMwz6fvrM8KCLAw1",
  "key21": "3nGvfBGXwEdrk8vU7stsAXfVYbymW49saK81NKHjCcTnMwBH4yeb3GWmNtDax7BhTNxGXG2pv2Cjq8dLPQJKb5c7",
  "key22": "3N17Ayc4Ha5etjgJd4NqFmr6EezSzMzDGvtDHjP2UqczmM6DdbH4gGMdeE8nq2B2ynMP4uVvN3XQbREtNvVQhkEm",
  "key23": "5MCDy2veiUokU7dvNmcLrwVWYJ6WWfxVzYnBai1RmJpxWZ9AXkf3vW67Ftdt8UatRvev9iYXephxcStTQHJWBWvk",
  "key24": "3kEVL2aGpmDcJKgBokVwoCjZiwhzpkgir1nq91hZLRvX5EWGdSZmsuKxQLdxANqS4JJuSH1vPHqnrQ62Ws2y3Dt3",
  "key25": "2Httqketu6531n2VZxZ72yuRxNf9o7Q1L5MMZwW7GBKkarhog79hydg2KgErNF4MqUACw8ZiJ677bXdJBKeXYg4P",
  "key26": "5wEeEyxLzn2h3CT3swisFAXufqsGtuBogwyBFM5AZYBC9YsWjbPyafDeT6pFUfjoKPtY6D3WbkenA5cfcBjjuuFm",
  "key27": "2Qt9hPXDxfxsG7dEWfPnG6d6hZk8cKQmfFb3E25WJ773KZtk1ZtbejPEZ7MADJ4Xw2cJJkafGiAT8QLF3bzLPQGJ",
  "key28": "AzAzBa61crmjohGnbkiSQdpXHVCLQLsNcbgeCJF4xiTDdf5HsuyBy3k9Lpz79BncvKfGCEWjho8aXGAaQFg8ToP",
  "key29": "2nbDFspx7ekbDR1E5arhpjgVz32icmUWMKnhDEHPYcuoZYa9ZT8Rbrt8uvUiuFDoWuTtRsBtH9cgq4t2EsCVz6za",
  "key30": "48Cju2AnWhPKdecoozs1bCHQpMTegsYkuopTsHio41v6Fm2DR9gQvVsBUkgkA9VAyhesNgvTd5dZmsgzng9PyEPa",
  "key31": "Vb3e2BsUKFHm2Ko5br5R5Y845rmDNB9KkoH7zAUk4c3aWzqsJuyiMZhVJ3BH424nohkFEZaNrndzhQtorVTzWMj",
  "key32": "2mRh2DFfztL1tZ1Xv9qQK113HbjEw88wsgJgw5svUNnf7P7agedDT1Y1og27q4JTEANkCAY39X1gZgRWZwtLXo3Z",
  "key33": "2QCEj7xtZEGCidXM76ex5sj6RGy9FGmSToqjg33WVKqHHDUTJr25WrSuprGWXzFLTZwJ1KC3GMMPyhEiB844QX2s",
  "key34": "28nFpJABdKEspSuaDm9kud1kQ7tDsNR9c9khzydxXKw8PGHYvUZ3sPHjBZe231odtdeUb7LFCx1yNGPvQM5yyVd8",
  "key35": "4s7gGGjQTEh4ovaGDneN3jWKADaNUfLYNc1pD1GxaxMTLQLd9nS5trrNGNVyoXKPFysr8DtC4UeaPtftMGB7BcLh",
  "key36": "5XnQums87K4UJyQCpvArbD1qqzgZ9exU5zvPQKiSwWZQbiqtWegFCDHjKuNJSEayABZDeaFJZc3cTnc6u88dzLfU",
  "key37": "2ftLEBTTgdsV3bvHFjMvhjDjLKaGRsuLxodS6wTyjrz9uToExgZ9Pc9XP333hBTQYEsyFkDfrWYBWBN1sgwsjjay",
  "key38": "5Wk9M1BuouDrFnM2nMbf8ysPCRR851odnfLuhZpnjsrWpuPukgGZwLt9dMQgPgFh6M6GLYH7LTFyLoQjaMDNVKAM",
  "key39": "5W32Pss2kFh6CAC9Vtp2zK1ZcFb9hw9YvEbLpUE1pxYRzBzgi5KvZCVUcZ15vE1EF6Cv1upSSVR9r4eB7YtX8UWj",
  "key40": "kAhaWGdheya81rCKcksyH8bFqEQR2wgd7nfSXjy3xi9EKjrvBi4W6xt1ui6aCfqsCbdm2Zgzx6bKKCJ7miaxx3v",
  "key41": "4dUgjuXf5iehb2VCJJwK3N7UeXiTmYFJibejHVuKaUqXbDez9qUT3ZV5y17P8bxdqPvZXC6eBjuGYyUvHv1D9hG8",
  "key42": "2k7rbXkxXcYSEoqNkYcapUmoNTuGFw5eagdmMyGd6fqLa9yVvZ6SSZQLf16SMJDxBr3BduUA6wvc3SWdWk81SNCS"
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
