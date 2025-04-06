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
    "4zoZ9r7ahr8ZK2679yekSFmu3NawM8xmgh1CCJXQ4MNvCmfX6cLwFajjUigXmdUKswrXAJxsMonosMd8Tn9qrQjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjyecdL8wSePUYJifFGuoiyJLfNuCG4RLeNUt7nUGz5tm43PnJRUoEYuycUQLiPbdcccmU6r5NEBc9ZUoERjhTe",
  "key1": "37MX74TNkBQfv4Q8fdptem5vn3W14L14dYhNDoWtX21b8NrkFJrRqChtNrsbXdy7mbGCcJgip5v269FcwBLULmtm",
  "key2": "38FFudxeMGCQoEg2QHCoKAhrhQYp2Xq6tCf1emttp9Fue9GE7Y7wGLKVMTLUpx6JXoyzfDvyL3yW6F7xZK5Frf39",
  "key3": "4V1ibq8KTxT3TqHmCufzxAiJqnYCdCBabXNY5uvikU766uG4Vk46xajTLXWHneUtooYv3AR2iBBjKjB8vSu7zguw",
  "key4": "41CoSNqwXewxFDZh1Uq4EgmcvSM3H8poesLDb1xTAgaFTAH5AQSXHTt2sgTYsw3PTqwRvvesuCRXrVNCpLmvw7kD",
  "key5": "3r1zSW8vGUUXMkrumTmntduaAb84UPdm2FpWnT2pUc1MHR74qLrMiBRAVWfGgcHCjvFtPMLLBRG5nKLymA99PjuK",
  "key6": "4xridoBr5bnFhsW5TUgtt8R87hoStTJjx68qWrspmKRqoJrq3HVYv1p6w2dNwGo28EJAVZG7f5jNT8FhgCztjM9s",
  "key7": "5SGxdsaXvbt9JKewLBPgsx8TdeAcjhF9XpSevvkH3cFZrGKyUnvXCYsTfPKGgGFMxiMpW93pfc5XjXWeZE8BMMym",
  "key8": "oJ5r17bABwf7eASnaRiYLjyUoxeK9NwA1yGZG2B6G4GEfcHMpykSkD3QUrXbZr6W34VpDb2nLiYKCKs8GX6TmHU",
  "key9": "54rcWhfEXjwwLe6V3bHqCaMNdyjtWLijMuLpNL76yr2xE26kkYbDnbw5x96Nu3AUVyMgWLMfsxyWpRJCoURPNZiY",
  "key10": "4KsAgxWJAW1bC8RCWN1a2w7gGV3YRmqHZhw8mC87Km1xztfVy65rAn5G3WKzLLpZQAKTfK1krzegQDFbuyTdwsTw",
  "key11": "2oi9qb9fpqX1vma5YNFQL8XFEApgoKgkrd1gMdDmjbSABUMqciU3U6uHXRnCnmZpD8HXknE45uhnSegGjJ4DMHbH",
  "key12": "2NwpGcg4hHqE2A49Pq4go6C7EVGFX7htN7fsFdFgxc2nTrcXgrus8U2G2DYWVXACYt7MDUxmbvzjZzZBgVeeQ7Mn",
  "key13": "5VWX8FAiQQWupccDj9UddQwabadBXzpNCQ3egWTqP2Nxj13U3UG7SYB8r3vYrQKTUPXzWU57yWUGo2AT9i3BpBZf",
  "key14": "2UqnVTEjWzoSdG93XNAzKXuXudVTiETQ8SjqkwPCvGXXQCAjy4oEoK2v6SvqxjTVK8sPskiwc6zfHP5YeaEjro9D",
  "key15": "2Zz7xecStXibHBpwXnoYJxucCQEP6otz1fb937NiCyvWfaUTmNveQmWGi5GihTcwuhP9qfMAosSy8MP3nrxNLgry",
  "key16": "2FkNNJLVJ1Y8JLCznsVmmSiJFEcPMCWPEMVfmrcVBaxZj8p74shuAFyovo4b2gCCSXLimDw5NZdvMh7R6jETPhPu",
  "key17": "3LqFuuwdKmPhAiXjEVDRLk27piJx2iDB4VkGTAkLsyDgxiYG4VhQtYU5V25HewXksZrknnFNoybXtc8b8rJk6CjP",
  "key18": "4LauYq2Au4RVggETxsUoRnab2Fbk25crnzBPwuBNReL5UCn2mrRGjxMTAnrJht46i5JRDFJu4LswmKp2f6RNEGLe",
  "key19": "fzCZqjMHoM4EEfdkBte4DsytN4dRCarXUXj3WAQXLvciUr79QrsizaWMZ373vvGLQinNvCYMHehqYL6AgDvMMDp",
  "key20": "4JXJi2NpJCdRVnEcdLe2xuPrg6Rw4Pzo9XqJNxyC2chKNJNfZK9W2zKnaV6FBfn74bJx2dEjcH6QJZNEkNyrm6tS",
  "key21": "46QyWRwYPnDxk86rFMrdnXGhYdxVd9bzNW4DCn61H3pA8tWjLTDLGiWyaRNcFmQghXTwQC5b13Gnw1JAxhczGHSn",
  "key22": "2XwuKzFfuU4Z6H5oXTzyygT3CJgtMFT9ZhUvW3Vwdh1qpQdB4HRu6a3naBcu3G4wqRKNQQ4gh6eKuue7e8UjfHbv",
  "key23": "36tSDkctHG8RZPZrPaYewawUzg88Bcpb15wqr2cbqqvYEiayJtNdQJCjnB2BjJsheHRjzzL2usfL5fj1khiLqrFJ",
  "key24": "h31kFKxxMjezCeXXJzt5bUvgy6C9X6AsKgULgU2XQgLSXa1Yg37ukfYYoCQVsfvnNux3WZoYhVXVDQ6z1Hs6Y8w",
  "key25": "2nehqBhZuQaL8qLFhiyqZ9tZHa6SEZWbx9STTQw1kpLqNAhVAedg3hzfhrH1nrFf5EkSeotdRg5dm6e1UJ1d9gRy",
  "key26": "3DWVHncZXyBPFJDrVFEPHKLtMDfTn7ZtETPAaXwEhE2pUX3VJ6xAtzZWJNgJAtRJrgrD5NNnnynYGiJndys7g7nR",
  "key27": "5hq2jki58KBx4oHjeRzcbtiNWq82wBPKEWdK2PqfWjkMhS415JM2qQREFvyM9REA3YbL38sU5BrAEXB97SioCakk",
  "key28": "384m6h1HAykefWVSo9JuJqnhX3ABAcgiyRuK9Keef51KsRpc4xYDJ3odhBZwsukHtD8h4tStb28rJcQ62gzCbpvk",
  "key29": "5U5jNyV5jc57yNmx5Z1hsR6m1Vw7mTE6nWkjQvofHphrzici4tUyFeLfjedH4zP2PgZJW9WWSKZYd5AdQUZTdZpc",
  "key30": "5YQ1WEpSxWdap6wJETwBdJajcrYRRM6qQT3Pyjpk8UDi8FDn16TCvjrVNBJA8g3idSuPhmdXyBNTbhhgiiFA7tNL",
  "key31": "2KRzJcTqPUaSZepJtY72LcBY1LSsXuMPvAwoZATQAzQxK4EqWZW19uv3WLsdV6KnWHZdp5kP7odxdCEA5R5iqjVU",
  "key32": "5vVKATVjPd6sgnqthU8ni2yJJG5firA3Q7SA662VSKLmxhL2Vz6YQ1wboA1zRdx2ZxFMudZmoXkn3Kat2TwFVY1d",
  "key33": "27NJ6BW3PKVbGqAw9xVBpNyfVtwcSBQ9JPt3LibZdNGqa7HrgTXYd2nvnEFmhJAjrfZAL2w7NGD2hLVfyja7RqBS",
  "key34": "NHLDkcF3j3yWwUyJG8mvPSZxWPhEP191Q4QscgxmFKyzt5A5t44uvKTLZNA124S26V3dUAoY4DCwVt1QutqdT68",
  "key35": "2VSbKuymJrAzLQzzT7irF3N32Qei28E6XAVQn9yXhByWXgPVLgwtZbf2ymRNT7AxyMx6BtkMwZYZSxwCRirHt6Ym",
  "key36": "3HyAMEZfqfY4ktoS1tgDQEAMawzr4EkXuwXHj8hK452ZSNfEAFMowao5xUrfTFh9knD8NrXY46kc2VaHBydLLQer",
  "key37": "2eryQkLdo9DKiVRcfxqAFGhFNjfzFDzERESB9QSWJ8viFwd2HvgfxYaXC8tYPqLqJ63F7PiA1U6boAroo1R3sRPo",
  "key38": "4x4obZ64DVJ7bJjbjkoEhKk4eQUy11idoseqF2WdfeJEpoHizj45RiCkhqAHdDyd5rZhMvAJwfkaMreJQgu8gTjr",
  "key39": "B3A3ESUKabtDnm1k9gtQbSsevG9SVAuDhy1kEJr1GJpxvSQr5iDNyyWEMdgBJVg74dVmfcPVyjEVLyrMM31PguP",
  "key40": "3VE8Z8RRHNfVsSCtD9HZVgakNTnnE1vfvfT7kTb8t6vYZUK7AJiVe7rohoJMbhhSuAhBmKS4jrdW7EpZp9B18AGc",
  "key41": "4zk8Msyiitqwm9hmVKGuLcuwnHUSGtiRRpCk5xLTRJk117uVKShvLvTdqmB6jVJHNrdWMtEjkuWNr22yBzm7Caes",
  "key42": "5qLxJWHdnR7XQMqLHwbuZfXFA72Wc966HyDeQTPk2pJUQk7RdCTLZugW9EV3pYLk41AV2oMwLaBkmvKKefg5Urg6",
  "key43": "23EKgbxB7DGMecs39pKCqszEC6WRwi3HtBm8PZCWehhJvd5kkhTfS3EFkMskNRxRtdMiaLBemyRuEUM2KhXqyRz8",
  "key44": "3f5hNYWHhUvddACwpz3RyS1X4qYS4QQRcdswXr91CrdDHMqG7LuQg88CV4y3cQkq3f31VNHwrWS8ouajbFnyeoxQ",
  "key45": "5uuCMjzSRTVPzXPFDG2gotjxkpwRZAThZLqnhS2sGbichUNxDfzzu2SKeadvqDavefm2bK7bKJztwBuCZ59iyMtW",
  "key46": "WZBRSfQcyLN9FVgK8Xiu7zwcXLMZgFjs4XQgiMcJxyJMyN4jvQsVhWj2eUH7SXfPzz85ir7v9ZbJxKNGrTQbMwH",
  "key47": "Locqjn3BMtwNrKTbbXjwQ29kSNtsnxnTeeq29LDWEAFmZPwrsdffLt8sw5MtPPn3HRxFJKwgka2HhUnzSMqSPTL",
  "key48": "4hukie9YqZGigbb3MCC6SeVrYrk82NrRmyaNxx1TStfqwAybGCSHg9ZsUKdaNK4AMCNo5rvKMLYYHMVBmvHHmstt",
  "key49": "4xprb8ca6XZh46Y3ffuxTxz1CHCW1BPRmakTLH6pZX4Kfz412dvgfrU2VeowtWKBmYcbt8ta66VMovJbzyFNJFuJ"
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
