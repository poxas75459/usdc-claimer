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
    "5YJo21iveWcsvBtMW7wRhxFTdVXRNuHcWBvHyvVbXiRHHs5cyp3L2SuofTFQDZXucHQF5MF6qC6fsaPzHCbm8DAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FJqp4vXc4VcEe2gHbHrCf8gRQas3qp8HpyXXKixg9RbRQgMxz7oVnQXJECDJSKzLLRxhyxBcZSegLojqbSfaCP",
  "key1": "4pVzHLCY7cgywEtbkJ4E38r6qLsgczG8DhLAwYpV5MNQyCyKmWSQmLakmLRb41sxv5Gs29UWRDTMSMSkZzoLuKFX",
  "key2": "4r9ugDnxTu15N7FKdW1tFyo8QuttR1y2gG3RRfRufmRhaTgw4RCJnDTUKthGePoAN9Mz5GgfeyrYFtkJVtKVHXVx",
  "key3": "2N5ssyK4QCG2yKoj5qp924WDL6Hky4VFqQseLaWSGKs6TucaW6KesyuSjKLSMs8f564xHQtT5vsH389uFdefJwMN",
  "key4": "2jwYHZK9G1KpVqG8iZxVkfVbNbbzxyaGEA4ghiEFfp6tNAWm26emsaBBasbVhnD5odG2VoYEvKrPVx5jLxTsgwJG",
  "key5": "5HoASPmEuYht9FCJLCBFUqKRHsTeCgLxiFkstTidcxzXcpz7oF7FCxe1wyFKiG4rD22ckmnAuwsThQ83bCABCUSK",
  "key6": "5LwV9488LKoK8E8qeo3Wf2qy6yiu122rBukQHtQBmAoCSRxArpcJxfHpD5e699i5k4GpDFz9p8xxDWFaz8yGz5gd",
  "key7": "5gPwXw43HJjJfcAXENBiKM2ELWScMtYbUhnD6GBugvtWkVm829GK3X617qoRYzZn371Fuvi1EUL2VyoYVsK9kPnB",
  "key8": "3JJBunvMspwd7bGUH8puR7rXUPFLxm5SJUfpkcY1VtiJTSySGKEtspxZZPsv95b8A6LZJ8GMBYqpD1DYKf7SXuwv",
  "key9": "46aDdWPL1zf1BNHbj7rZWE9tqnhDEei9HhGXut6avtzcfqAvy4ZKcWFQhJjMnqNUYrENzqU57eVdSLQsBabzmR7m",
  "key10": "5WRqFH5v8XsHahdT7ZdVqatNRT95F9Wydh4eNDSH5YJWpd4FMJ72KnHEdFdC6fHvE8jDCzwriPHDMHpT71qqk9xG",
  "key11": "2P9gaboue9vSZBMUBrHiy7GC68BUo6KuNio5VqfUxgnWe3Szgn9i38sbg3A7LXhyJMi11DLRZ1LCmZSgxhW5qUkH",
  "key12": "65w3rbjwkvRFTgtcsERzJPL1yTqzbnGosik3hCDD5TkRn8dAU5vhsuofwGegMYRwu9qumyTFuCoL5puoAQYSMiqD",
  "key13": "3zdYg4bnfyibR8LrNSJFHmgj5GzXKkCb8M6peZv6UabuTfz9fKS3u8Jnpb89MkVwpskMLqLcrvtZyvU2t5nzgceU",
  "key14": "z4u2siTsZ5iYe2fL5MvQEK3YkTcUKQSfPgupmHdyg551Ubs53sr8MoM6vk1zRts8sTtmBkib18rUmQnHeXE9CDh",
  "key15": "62SorzUE4aQuXCbVpQHXayX8nCecUiTXqqF2MV5fQmHSkMiqVjd2vrKr9ZJmjMekwCiR4tLdadrUnMpK71cDTya6",
  "key16": "2ACVRq1CuScyBXQ9kdgCjyjCnFetyVZhPNWYf33xvmyDVWRAj7146tA9JrmC1nPFw71hdbwBykjhXoqoy9eUCsqM",
  "key17": "3e6GbwZDRHkmAAFmK8JT9rY2GsB41komhtFtmhBfAjWN9ZPdjaG2aCbFcoqsYYoVRyYTduUUGMQi5gajEdo5dmnN",
  "key18": "4tD5JKQnCzLyA6xnnu53i7cYnuMvTNq5RYT8JvzPr19gPpmUSV3AmNMii49FaFA9yjq3DPeBY5zy6iLxCv3xbNcf",
  "key19": "2y6YXoqdL7PhL4w8K6UBUv1PManud61qGifB2crXSESd2Hgd2zT1yKLrKFUN5THCKMxrYaZfYFcqZEiBsYe1iZ46",
  "key20": "ujwcf9aQHLmEFwurzs8ScmUpv7Pktqk4jo3X1FJjJvBSiomW7K38vnXeCXddStpeJUHhwZ2XtHUq7YvTKGyvd5T",
  "key21": "2ukH8yCSiRr7Y6qxk1CwUvN8jURdLHZRovtwYUJbgWzdXYPVNJ8zuFDUnvvEcmm289kJs1t1ypYwbPwvEZELvCKv",
  "key22": "cEVmTkQhJnJf9yWNUY8jkZcrtpecALkxTtgMJAb6avyZKn5pzuGi6S56viSqSxa1GVZQHXZSRvotDRD4jmvFxMr",
  "key23": "4ovbteBK1GRVapuMXH7pJ4BbyHdtaQxQmXynquRML3rMA9Uh9W9B22Ff13QbH9q9ikgZeSTs59i5CHnywZdqHDgk",
  "key24": "2LfuvbmiMEfqk9EzdtdGL5Uj1RKvC4x4QDom3kGNGyv589YXpSgi57m4Akkuc3yXk36j2VRRDbKpvsfTivJM1A4G",
  "key25": "3TUojwjDaSWV8P4yGZFW6Dcpms3C2xcz1vDiCAEoBpC2dap7UqnAwVm899zsnovW2xCuqjamzekQaPEhNkMTXUFv",
  "key26": "2tkkxTpYjd66hyBY25nUJWUruCAK7A7zjFteikzuDtJU1YPMZLjdtnknv2JGfsGKWVJqEPiZ76nezitz8zNBdcG9",
  "key27": "4pDbGuDUA5nesYy2UKNiMTk5q32vyB6bBLfvufgxstVno93g89z3AhGNUZFpB72WWfGSbGXC5zFgGqATaGmJydCm",
  "key28": "4Gg2oufbfYmNWMboNuYtFVZrRRhn4Uu1CJqvKJJDJP9n9reoz7oDuPM7DvacXxZAoFs2enHgdd8RYzmyDHPwhKzb",
  "key29": "5nWvVux6EfskpaXYttM6oQMBgF9nBwy8mt29K4j6fC9azZMjoR85DzigxLpsXpVQSSYwxtaJze9nL4vctB2QQL7x",
  "key30": "432hN14UsFwqeaoUbTvT526wbUeWvKPjUbMqvZFXAzPMd6z84ASgSAEPdM1pF8QdbqEya8Ng8Rh2FHfADwRicc7i",
  "key31": "3AX49BHGpe4M9kE9ywaH98VswEanAjmWLGYJaqifCFdiWVhjFqNnSP6GnKtCuC93wisxHaV2Jy2iEzJAAHTn91WE",
  "key32": "4kUaFThQCWQjp1X6ZAWEeANuhzVJiMv4qKnG9Z2JnmrTjMP5uH5NyX7BdpUpTArHcZyTRrfbmnZTaXoo5q3euyfB",
  "key33": "4NPddBMo8n3L5LGLiTJnP7BGeHQ1ZJLVHNFG7jnzHW6oyWmC2UTufA2geHqGshK44iVymtM57a2VKghSCV8Gw9eM",
  "key34": "2ecAVroX6VKYskjL4NhmdUmMVaMxR8AFuew38Yz4Z2Np1DRhhhypMnBVS3QAakSq7MMQqk9ePAFXJaPyE83iWtjy",
  "key35": "3rTfiCwZyV2ZfURLcPeZkN3zWYJPgkcSkFafYctMeaa7tYHZyXjuH6U6Dtv53ifnqaqYVL5CSk9a7KHAsCB2XgES",
  "key36": "3vDedvyMqhMvHh2wDKMKKtUNGHFGTskm5xWv42hn33XXQEJgzahVDXY8e8Z8iTj4fcSNLnWjuNpiN5aeCkkJj1eY",
  "key37": "288v5dFF4K9sFNu9eSH5XVQ93gFQxjTfwAQ3tSQDcwdHeWKqah7yXE6SaPyExpa2NUcNQasJHXPdVCgSBGyPM1sx",
  "key38": "4AHj4Xk2Kpuhcsu3rknpCTet5enhCXqG6FdJikWGgaVC8vvYuXm5HSpAprWBnHutaVPryovoWuJnPfp5KZ7TpGTK",
  "key39": "sbwbtBHqKuPujsvm9auczQeyRYCzPVnenKerjbToFLbZ6FkGcTgjei7oSi3L4ba8QkRt3bvdDKhHrQCwAK6yH1p",
  "key40": "4FQKdTZ2bnpaU7CibWfoXjqJT2Zw4o8qfgUpeVbzodZWUm3ZxGj6gYCNrr4YEfhEJKAn8ua23SQBBjKVeSGCbP47",
  "key41": "4TgMP3XES65LZmRBoiHsXdLPYJrQbSBKjXtLM5Nev4JVkFebuCsazsXYmrQ1nt8CQrmjrS4etCeuMbRV41R82EX",
  "key42": "2ZFmqQiKmDnaAYe9LhTECjWkahMncjcdAi6b91GbgEc4y1xvAha3EJm7FqL2VRUXDrhtAszMYHaxptVjzaKP5DV",
  "key43": "2DDyiVN1uAZasqYTws1LWQ7KExXKusS8UCnSfjFkKs8FzMmAkRBwofMLkF4CL1BijXtDGqVwWGxHkn5trGdfNCCS",
  "key44": "tjspz8xTUeMzENEMLYM7fSzuaERxjWBXYZqZ1prA4S6BRBzqdFiQ6x9dUkGjjpL4HsEvZeg9wPPZzvDbb6eLqs4",
  "key45": "2oomcswdp8A2E5MK9uNHEeqPuWdEApFFBDjNhDjYJFYabT5s49DpmrDgevtCNL96ysZJWUL6oDuhqgHTSHnFf2z6",
  "key46": "4jt8xyhA3rHQ6a6rHC8cH8677DY2HKJDDnxvuHhqzEM39pSqYVSPZEmACqeDqt9ep9yZHe6Kb76giUPZLNt7htUE",
  "key47": "49RqsoRZYxvFtnPhKRCUxQ4iN5p8ajftb2eSvKJGLB6qEdgkXEcyBGueap5i1VWvgumAceCFEJ1Gwc3Lygcg2Rpq",
  "key48": "4D4TAYSSZXjE8n7QjE9ZTwcQPLhAHioDxqxTeMMgAxe2DQRk9Ystff9N5x6QBTcE9iYp9x9xWDTGdwQNo9MuDHBc"
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
