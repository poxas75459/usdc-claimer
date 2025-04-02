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
    "45WyqsC3ZGoGbijbZis7Tko9LChjrTXijCATVLTAbwci4uKbphyUoxuzPdwvonCptPqSZ4upjmciS3cAVJADmhb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QUn8tGoBgNY5WyaGtodnEuq3ruLoeHrRLchGPV1jVaymraNBXDU4Vzqyh9TZKus4Q9Fo3ucMLm29mWBM6SH1H7",
  "key1": "64kKEFHArvLQ9CUvh5Ljxyr9jfMvPR4zFDPmdYnbvFzTPLBFjiNw9tW4rZjAAJeA9Bk8bZtdbRCPmUctGGDhUk9L",
  "key2": "3ktzzZ63vgETf8ZYYTVgKTCdeCmQZAKcLok6VAgvJ5zvZeR1F6oS55HfjSRR5EMHYigHNAcoHV1rFdWSKhTPQzRu",
  "key3": "5JQip172eAsznp2Ye3s69q9157woygZYVg5rGVHjfnSjiJswF1kdaKG2ePK6iCCV9bNZfo5ZU3B3nx13bKpzy1DN",
  "key4": "dXm6NouHG5bRPjZC2JwLWfFMddP1ppdAce3CmqrFY7Yvnu2QNVH3oTjmTJJDBECPdJRaoRvBDd9d7xGGK69dpzh",
  "key5": "5H363DkgGGfpNksrSE2qE4nUd9BbMEQGjtNTFxHcY6bkQS7iFdVLxMzk9LzyGVaB4FPDhRh2MmT5C4DBqjzazYdj",
  "key6": "GjbEHdBBkxW4i9aisxnimVE12uEarmLRQd3WL5g5xmwDoWbanfYb14q7ek7sKmS97xk44RYLEAzF3T896mGtjCZ",
  "key7": "4DywJf6j8WyK6pGVutGvcdNu5E6GzEf9hmVgXhfXzeFYvMgVryjQEZLTEGXbPfeyjGdsmZ81bfc35t7JdsdjmKDH",
  "key8": "2semFptq8yk11mU6LbjJPXwsCCYsS5PJWxbvV8dbNFfovaDUxTxvufnqxBHYRaemeP3TBs7MyWeB48aEAz1YY43g",
  "key9": "4WPqpnxYfycgtNBydENLUFraaeuF1z63oSLiRjod2pAKrv6BoyBfKj6nTss4MTBX2gWPwMkwE5kUBJEZGfpdfka2",
  "key10": "641dNPBoyHfKbJuUU3y7yixz7Rrzw9KAGgehp85LQajCe6PQ23fCZGB6zmjo9UopT1fVeTsJdLaxTgQKZsJrEqHs",
  "key11": "39KMjpHNURcLupqvXJScMMSv98CZ3ajaG8n6uM8C9ch55i9Wq6UpL9tazyR3xojAndQFBHvnDdBQRUNvZa53Ves",
  "key12": "2KjuxkDvo9T4FN8NoLGZbfoCaMjzHscqjWMkqeE9fRZQ99C3QaX1vLN2XC3iA1q7gqZGihNkBKykb1kMoujaKYBB",
  "key13": "4ZgNAP1Hg1uQv3wkwjV8JQKyWEQvSq2mvfQVKgpT7Scjyw1a4bpkA46wkD55Z2T5EkcT26E4ECUcNCZ75JYmeMh6",
  "key14": "2A5ATD4GepsbjE53ndkwQkTnmagzaoNKnDQLTcyFwv8hG35AWfom3wehSGj8Q665RbDczcnvEpf1JdKsHHLSFxRg",
  "key15": "B2QwM1aS8FsUn97WVVS2VY8EHjqSjmaRXMwNaFoQmbqpgi5oPAAx1i2kkp7EAshx5Pp4kjZ9M6aMV9Xy8gjgUFw",
  "key16": "4kGMF1qz8PBsqxncFg9kv5CM3fczwnGpvLzwUHLf8qZBxyGFNR6Jbxa3HRBFrUmG3zFcAWqx1gfHzGkmQPKZFDRH",
  "key17": "4q1jJKkR89kZsWTE5LRB2aCQybrvkqDUkfoie3o19UvRSVaeE3TQFh4Bb2M2FjfYYYVj4S8ER9aGom2bngm8DvYR",
  "key18": "2zRpfSTyShmKVaWqjdD9Z2q1f7ZDwoZDm3KmqHS4DwPwKmUw3fZWzFoPXnXDxZi3GNVLQvcHkmapGuAYj3VnqNsz",
  "key19": "2mfkd2yQQNLMr3Yc97SuyFPb4rPaor129g2fAafHMzUNLZLD7jx3MWRdhAyKMenJebhz9w6j8qjF4mtxfQJK23ME",
  "key20": "5fAS4yjGZfGEwJBmLFhUoNvzMeu3SwMUdjEhXzRtxY6ereALWUq6xaZyBCeqbpRFzjWab7ZAmbCEjc46oewKwLQX",
  "key21": "3LriDdLCAusAsfWnPzpP1DbasHo9bwbYFroHLeogGBuRz3pwUbqVVS28wj1tWgaJmbtoDNfwJqNE8VzhqWuNL7FP",
  "key22": "5saHgkFgtDwMDL3Esa3yVLWS5pwcojduKQBaRWuFbRWRdnEEamx8GLgCqHhL1ygM5MbZxX8gbZnwFhzr5LTiQbeT",
  "key23": "NL6QtaVmZgPjxv33wE4bjepNgyY7fnJzSpUGQixZSAgfSA771vJfbARKHA79ERN6B521VseLzs2JReHmy72ea7u",
  "key24": "5SyWVemjqcALMrzhHYLLmF4fc22Capd7x6eKB55ygEbav4pqPyHkZcL4sKb11b5AJXPTXKuuR3C4dmxQARpK5VnN",
  "key25": "4svQqbd9Bjs1Dt6xiQSkrFLLezJLEx1zUvQufFDdryJ6wVzgMY7uLXFry6PdVPccU124UUazRjoVWjFGKSzVgeRS",
  "key26": "GucsbwgNeGe9DwZWyeo8xMCwBzHUcuHbhjtVpWiPp3TKBhgb3DS9jvwjNcACM86xqHwigPtMGicQCLDKa6VJML8",
  "key27": "96Ys2VxfTCxML5FZHPVdW7RjhZLjKy6grBA8C1Sv8g46djT8yBThGbkcQsjFA27yVCyYHvHRcK8atcaxifoyT63",
  "key28": "5fvaHhE9m5waNSKqm5KtBRLJPooiLaE4e6bGSAoBodULMxjjeRPm7dzRTGwinBEz2x4KHJrJs4T7b9fg3mweVUFd",
  "key29": "3r2kpVqAd5PEeXNUPnjA1kEnYQfnZ1kZ8bEyx3sJtPRwsByCKXvQ3urqskwmkmwdP2pw7wQ6hX6zNKRWYUUHWwuV",
  "key30": "JtYdXt8NyB4hqdtgKMy8f9LiPD3XiNfQz3zXaTTc9GmpiUqHnoLXbSiw5QCDojXGaBnP6RYQuUhj7yxVuNJgHY6",
  "key31": "5PbNvTsLNyTFaUBqUgtwLpqRtymcZj1LQndHroQAoPqCJ5MRV4gMxtyW8X6vZ9s3ddJXL1JAAvRSupKop55usVbR",
  "key32": "5YsRjPkWU1so988yciUKBxWTUvDzAhWs8sXizjZeBLKkAViompC5d7RdAGqnX71RTq6nHCZv7D5z2oSwAds8FEXq",
  "key33": "4ojaZiwhS7HJn7NpjcNZpncwDqSaMw66nmNTnawR9iFc483SmZwkGtmUVNhz4oSNEXrNJZrewmy8UWb4hrhumSBy",
  "key34": "5Ujw3qYXJ5NTpVHtHPJAmY4oQsngrPtqTf1VJGZQDTa6rLUBqGXkEpdPdwaqVQvfrKmBjz1dm8NFzXJsGemFyBaJ",
  "key35": "5bCByQME6vb5yofhpDuu5p9DxwL462i7KatVsqpUVKUg7v8v1jMkWqe2CKygx8bBFiC36ArdEjeusnGvV7jkye2x",
  "key36": "42mgrrZo3PweKEmCX4r3FNHMBR2NehuAiJhDaPBxdZPaiRoXPiM35c3ZsQ47kkJVJ7P1HSGCjZWYFQoBYJJVae3o",
  "key37": "5MPRRNnxRHoXxkp7orfotyAP9uEpXhKsDC53BDMWRuRXxGsJ5pfuLo6BbPwgp1dPBRhD8NuZ6We31Bv2qhscT59V",
  "key38": "3U8C14udr2TGM5PTYAS9E4GxS5KGTrGmdn8tvFGDdcJwt4iK9LD9GkYrKrGBMFGCok1sRnycNnaJ8Xo94ZWcYjTZ",
  "key39": "2CMk9j2PA1Bz9vWrMKrRSYVFmVwDaNqbp2jeHFrr4EXQZMbJM1YL6abQoHQtdpZ4Qe4PQnJRnytfri7R3QwMejvt",
  "key40": "3dWYGy2xzFWTfxkgADdRs9M2RYwDP8jYQun7GtKCrq56qnPrR8xmS8wn3QgjsxXx5KH5nhoDJJXWLbrjAV83yfQp",
  "key41": "oDhvuCinWZzVTx6YdG5H36gKXRaYQDJEs63R1RWHEk67m7dSDGZ1wUMcYrh8SjDJWpcaRLNaDad6Ev7TGjMB8ei",
  "key42": "3wGZQxLLB6yKEv3evPv7KmTo1yZU57UeXPiJ1ArVc6MJbsL2AfWUyeyc4BxrVPyebX2Xr1TURkJjGE7bxDXUJoDt",
  "key43": "T6jHBpvv5xP3Vy5jjee2nxHbtHV2eqJjVFUbab5ogPyQJFwwFJ8b7T8FSZkE74dj6EPPW9n6wvZJeFdo6YJckBh",
  "key44": "5TrZbiWKfkRvf7rq4uV1gZEE7XH8AFCj2GhVNLb1R81kXNLn8ZzN3fBaZAGhTANPVKnYMxZ3NcYiAwDigwbw3fB3",
  "key45": "52699cpGxEw2VobSqRVQeupcfcUSuQ4GtWHA72MSrMxicHSsGvWXmJW7rv5GcjKcwqbGcvRuLbhoD564g8J2aezb"
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
