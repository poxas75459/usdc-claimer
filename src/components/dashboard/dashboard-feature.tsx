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
    "5Nz2bAEsf3XKgsfG6EVFnTC9dMaQaCqpt1NkPGdtQ3cjDfjpitnA5h2T7iRMvsia9z7q6JR4Ki5BDTAiBukXarsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NUBn1SJqkJzqdA9HVxjSKupbgmyn5JkoUGSKt1hwLJvZq2vvYvu36gpnTtLEw9dcKMpGb5uzq7NZK2vKSbqEJQ",
  "key1": "42R5zY3vWk6otvcZrYRU5TqSxue5anvkMdPy8rnB8PwakvovXTG5nBB91nx68tnn1UxfkGLKxrGwXKzznBUWYKHn",
  "key2": "1m2CSyANUPwkuesqz6YZjpPFmnktrCu7n4hdGXzVTn5DhNz4knp4jitMeZfZh9zTvFd4db4EkPqmxrcqn1zGU6i",
  "key3": "n8zuwuPshY5EWyDJGQywxPfeEz4pV9jcygVXCJymuNmNXL9b1nujUQ9tbxhFd3FuFF27iShhqPrNYR9Wt9FhiGU",
  "key4": "3WYYCbD1JSSQ2nVPF8J2oVkZeXrnpoq6HmkhNqka75Z6GAgriyKMJPxSRwr4WfVuDsWi6sdpevABkgwAWHQD73CP",
  "key5": "2qqWcQVs3H6kjyQDvvRSW6bjTtyewYLbMFPum4ySbAGeJPxAHVv1F9U2FPqasMZ57PRcxYLRdHjkoHQZNPAbGMyo",
  "key6": "zhB5WSKA1Ae2pxfCyGXWZ8SfNpKRxCwWwbp9ZUqLwSDhyqgtTb6bHVKCQQ2wj2otDQxprMohD7jyrgYznXQ3QaK",
  "key7": "351iBFZTtz8mJ5dEfquZMtmmPmdqPtJmTWdAGJBTpftti4rwxBeTxDC639QsrdJ5EFxuAPGmAPsczVTNGb8QwMTX",
  "key8": "3BZZiUQgooHgMw8z9QytDYjrq42n1dmXy1PQgjd892Ao692xrHEGzbjkd3PyQ9SDszwpQaRuZMR8z4mtJRHpLpf5",
  "key9": "tQYZooFD7S8PmZRZuMCjaZTvU6LVdWdYVJCYMXtRUsDirjy1vm2gWh6NwWNC3Po5RBXTJFuTW8jPwPt4f7xzqSj",
  "key10": "8ocfro8YnEsh42HyVwVsUTAmtJS1L8TmeEGfSZQqZsoJ6D1pnY89vd9Ar4DjNPoscCKr1R1KCdBdmVa2yDTbgY6",
  "key11": "SjsF61KsjB9VfBBXJ2mn87dat4MaR6yvbCmSbZ8oRoDXbL4AbcbcQAtEMZhNRSat1rK93nUcofrveXduy8uHrjS",
  "key12": "66Ez1Gd13fEuqC5vkGEigotPEx1TzCV778CL2RESNzXr7bHsYfL6Y1DocDwwCiFaR9uCi8HXfTQVk9FcPbPNyBaQ",
  "key13": "2bDujpUJP4tYni8R8xuKPUADfeyiPd6vqNrVe9Uznxx3WbBJERQfcMek8Cnt4ZfWK4ydgA3b1GS7XQWZrYTS3SvZ",
  "key14": "2nk3qyHGhuAcd5yoFnMdvKnvbBZdcBsuYdTPjniqA3KaifBnWVCyxr9wP2vc7JKMpipdCYx3kWCNs5r8tntLj7Xh",
  "key15": "3dN5Za6Y3AXrEAgk7d4S6axYUyhPCC5SH1X252auBN9j8iUMPzWZB7tGARi8m5BXQqPxYShpw6VqJch6SVbQCwZd",
  "key16": "37Eki4yQofZ1E1VC7hmTrnTFMA3rRGMjFhZJaYznvRKZf2ihopaq7kCP5poKjh1H2uJRPwLghjiUTbhDkhJW1NRs",
  "key17": "4ZVd6dMaMJTpsmXh7dTSWGNs79iPuzkYhdgV9ggf3etjm4ixfsyLuN8VGHxn7Xqqf4oSMECwrAGq3rm81JtTjwhK",
  "key18": "2z7888fcMCNQqATdrXbiiprkik9fK5MuiZ21fkeNUcwqGddRyXf3sv2p6ZvbP8rNaMKqviQ4mPP9X9Njg3PPN8xv",
  "key19": "281Swa3jLXNi6GUDtjbBv6e9nFkhazZ2shYrbTpQsQytJx1vrKd9QtxmJa8KkZU24FNKvFXXFUiUEeD7ZWV2654J",
  "key20": "48Xf4JtsKLzw54BrRLfash16HaQAiQu3nPexsomab6wRbk7X5QNXQXdqpnfar5ALPzG1mpZjWgSTW3FDBvpoJQyq",
  "key21": "3wLuSkuMUZZgJmcrKcsXB4iWFSVXX86QqDMym9ZFXuiKUrL7BMRWrrFy6YwcE8m9js6QAjCKvXHqWZuvVRxhFFE6",
  "key22": "4rzx2UzvAevqp28ZT51MN73GTxkAhYXzSfJkQnzuWKPSu9V4kFDLRioZNKo6K5Q3FABz49GVHz3sXLZEaev2RuDE",
  "key23": "VhzQNRjybeAFL66kWkCZFx3w8MEMNPbp15JaUP9grEeaJuXxWbrJmRFYT8WUkSjkN7L2KWn8tVN7QvFM1sW3rUX",
  "key24": "5yNPkqEtejDvVmCibmoKELJNZXdQUjHki7CaxGd7f1s1jWtxGtMktfgdyuDsoLomf4fQFU7JUivkcupVVGQ7hvS9",
  "key25": "5x74MCo8HnckHrSDxHSijJvDBsdCUje3tLMJLwkQpuUHxbmvkLgiuvWQ9iXejtsD7CjiCJarUw8QhE56n6C3D5H8",
  "key26": "35dMUecvcxta4PnGpYTRx4GcNPByY9nYp2C6UpFqQpsgzE8akcPgxEJ56A1m8R7qXBqdM8cjsbf1C2aMud4XaLTT",
  "key27": "4vJiWggr1tf8zbRTFYWgFoRdq99uPTtPFwKCSGYrquzwmTsJrXXfu3pV8FpP3U2CyVtWVa6NrTTgm1F7xtHET7G3",
  "key28": "5GuLAxssQneGAB1EGn5sU31p8dYezmDgebRzZMZijoFGr1uNESKxMfbJQaFvXxHowhVtcWb8kyryHvgnkZhA5KL4",
  "key29": "35C5rRfjq3dZWtVzBrLg67P5P5bJkocZ4LhqGkWbAwzkCpTj5FZKDk8LYptg5fNpKw1MCbQoWgfAYsBGQtYhHRqh",
  "key30": "5wSwKV6pdMdWQLSQuQ3pTJTwwUbmigiNtdHctuwZQL2AJBHEM6uAWak27qz9zaAKvW61SqaYyKc459mUj74zFcx7",
  "key31": "BUBevDb5tUYuZuvzuAXBjXxVvNHh3dGRWUt2JkYtjqtGLYYcGTcpHXD4dLyEUESFxEK9y7qCmfRy2XnqRj1JJZ4",
  "key32": "44AC8a7gkpZ9uGNYgAQAA84Qwkf1ghgBrm2w3d3P2zLuAuVcYrvFGjE3mw7Gw1hkBAayrUioRWvkycLPZRRhca1p",
  "key33": "2fVuoDX8Pcd6rsdQ4cMS9FtGRtyVUjRH6Udg9FnSifQynzCD2NoSstBgHUnhnEwZjyA51uQLxw7MQ2f2qwWYJxWD",
  "key34": "2gxx5AiwHT1eaZANC7EQaTMztrZwFA2i7neTrMY5j5N1nLWZB4Y5oK2xA6KS2iLiHy3CNw9t5vysUgx9LuuVaUyH",
  "key35": "2RjXWQdybMGbZk2yk2DKAECycuhspfzK18xBnaC3N2MPfjFKzqGWdSgZm6q39jhxaAzBDkPQEjSfqMd8Nc1LX2tn",
  "key36": "AqeN1DDYaAk6Rw9DFPASKbZgzGQ6tWyYnkA44Z2B3wnWnemCA3r2YVSPXuHNb9CGrb8pDys2xKaaKtbK64FSFJW",
  "key37": "H52YLsERFrTaayt9KJSwmnnAD4iCnKxmAtekZHXJcYvwHL1E5MpQ96XFNaFp8p9Yc8yAYAKsRbyLMeDE6aTpbWy",
  "key38": "43f6WVn4Ev1Kjm5LL15Jiwpc3Gxz3o4me2saPhc7TiUP7Qy37W1BXyBQsbb3rz5CmpfpM6XRUxVrKnAR49wpj1D8",
  "key39": "asEK2k7nm952MGcEuQ2zj1cpH7rRuQbC4dKp71pa5AtWojewBxTjBKGgyFZQ5Toi6ujdJtJH2T6kDYAhbZSbSfg",
  "key40": "2qX7fPxv52SzetgViYNW73rVif5fBN6drtHa9h9uyCXUKXT6szBvL9XWdFcLZL1VgX73xoXxpnAy7eM7c6rmy6hL",
  "key41": "4Beq6VFv8WtSdQFU3AZUDQdCtiVzjzWgABrmXTAbm4BqoDsaA24w3sLKCPrEo4cwZodQDRsd4yAynZssXS9KzyTi",
  "key42": "RMucLeNE8xBp291Mwv1S5VSnLV6FTdWpYSrNBK4aLjZUdUyybvg2ZNWMzxSPF2W3Lrhy3WqqUe3zApXFdwGAX1A",
  "key43": "4X5vBmF7sC7G4zoe52ss65WzYuUmtAQ5335FJZtnuxUDeLyDv6pgK63gVcsT656kfW11Lr5BoiAEmhovBoPtBy6x"
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
