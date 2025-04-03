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
    "5pNjtgfDT6zKiJBmicAJWhJzDKb9ekH8SzqweqdTQRvn5T11CaAbdz3ti4sUxy2rU523SpfAxjL8YeXM55wfFu9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAXFgbmcmFtZ1teGRHtKSFA9KX74NQSUh5aHExA98Sa6rH2juWfLVtBF7SCsKHxGUE4RzZvyJVFYMtnKec8XZeu",
  "key1": "3zaTsD6MoBxn46dYVmuvKNZMKLg181AEJygHAjNSXJFwAKFVTFtq2D7sngdZ92izqxZEJvBFX1xi1iuugyb874NJ",
  "key2": "2YntbjY4FiympkZgAFzDbRxGej2khrBCNcaArffgsuNnK5BLZtoyfYe1ApLwc8z2yy3LLFEk47qQSvkZybSrhAGF",
  "key3": "3Ep3A7WgTd1eSi26uZJZiq4GbcKtsNN7AGB9a99Tn8tjeHrS7QrnFJgjVAADSfaEtZWK5jvfSQuDcUR4Z7fFsaSx",
  "key4": "28TW1nP83Xzjhcnhe7wBcNu1NDdCN54f2qczXAvifMA8Dj81HXds8xrRLHxVSE27Vgf5QRML71qUQ1EUSCj7A7Am",
  "key5": "3oHy8D64uTbPfE1dqDsQios4ZoEHX5yRRxdu84PvKcykUFqxeetYPSzbdggyVcRXSLBhoccUVkBimeEG6wFtG6rg",
  "key6": "44goGhdJbAPwRpziitrGR1axm4v8vRkU9HmQPAbQSp88LYn29UHWwTfniUKjRtjfGkRsFpUvvoYXwZrwa7GfUH5q",
  "key7": "67hoxF4wFSQmThXR3DiFkYA89NUckmNztk54s1Q8PurFi5P1tfBUvnA9v8Q1t1sZtisYhtAMPiT16R2DxZJ4S7Q8",
  "key8": "3bCimeQa2FnQJpwjpQMi8WYRfgmP2CDPGiJApfmuvHq9Zk8r8Z6UpxGACyQjWxSUZxqREaVxM4k5gSXRCAqbRmmg",
  "key9": "2m9XX8JsNKrKyCzKGz9Z4dGpSxh9eGoiVbMiY67JqRFxCnagJnXEbpaBjabuMbfeejyPN9pJ6rMRbwA1QrTTJBAS",
  "key10": "Zk4V57YM2UCH4Mfshxu4sMno8QQQmPVYssLcjnHCKNgsmVdiSne5MktFLiWN8cjX7YqtvdsRc7H5WfZTKYj8AxR",
  "key11": "5uJfXG6kTjN8JCAFNogsoHEMaXNmEM41diJgMnaupV1RSukwKxgfj6bmTfanbWWhzpVakUU76qhcN9AEkFrNWSFN",
  "key12": "44u6TNxTdCELR3Yi7xsnfXxYQSUAEPrMia3qDq5VdjisRHDrHcTcZiCRfqrtgUbVXfpxbxY99NK2UHU2fz8cY82a",
  "key13": "rH2Kt2P5eWzvJvDAaB27UdLSu2AK9sx27qoYtfMcnrLcrq47RUh5ws7FZE6p1qe6JFtHL72QPx3ySFMi9Jn9dKT",
  "key14": "4J6pqD1LXp2xazgq2x2xqj6h3TvcgiBRNh34E4LzN9fuXjDvB1NFXCzrgWffckWh6MLFJAaYU1bDRUDAG82STVfQ",
  "key15": "2Us5kDqk7EWj6MMyiEHzEKpvwpmETtUtVf3YtNnJREXTmUeWskhoerMMehNawipEz6LwVz3BNmMbtAyMqyfNi6oX",
  "key16": "5fbvLj5s4tHCEhuQo62NRCMrWraGtaJf36aC3Gi9THSpWfwvcWxiob2VuL217DdJ1yBa3RovGvLZ46ukXdGUiE9Z",
  "key17": "33dUZhYk4DqQdZvQ4fbcoCkiXtZePdqYQk1EFfvFZo8TxRb5mHpjbZ5AjERZNd7WgSDyn8qU4ToZDJuNqzfSKaL",
  "key18": "39SgQRnAohWXtykJem57ETiV8ZYaK8GdLri9M6KeTBi88BeavybqKR1vNd2P63ucBEYfvLUS76pg6LZAb3rJufJR",
  "key19": "5Wtb6Sw7tHYWtWCXC5p9LNRnuhMuxryoBwdpNmhEpzZ8fq7vkf9NsGUCUomNSNcjAWXvkmdBfiDWgQ8DiveUKShk",
  "key20": "oAgfxB7ezRaGBQS87ZTGCKChn23hWJB6ZdntUTanVKXopkWtKsYySkQgrbcUh8pGUorHJvqf73SqQVZwCNR4a4q",
  "key21": "3EhQANttvqY7Vgt217gNaLVobFfos4qbVPqgWTYoSzfzJk2y7GhbSUeRyAjTqawy2skkgu5WdK6Wd9PfzSXxwxcW",
  "key22": "4MVzR8gXCXnUjKW8XVSP2m9r4FfxC7JCYLP2NVsQBF2NaH49u46Cart6rWHSKQeVWu8yskjCxBoMcKVH8o5SZpGT",
  "key23": "5Br5TxBMBLnGM8rhT2S3u8bbAR6ECGr6xvhebuLTyE74eXzuKnLX3TgeyZXM92EV5UWVzRLF7Wp8ZH1djQjjswAC",
  "key24": "2JoB3cTDPfh39rDsNzzqgN1d7u3bYJmfnfiZuL9LhTc2YuquexmSSeWjNa84bvNYwtEcxeuy3R9n7xYK9uK8wxFS",
  "key25": "ezZKvJtWjYisgubG3rJpuh9fDqVc44Xd6BcNhDAGcAvtFCenC3MGvLLAr9hQZfhQGLdpNxjsyJ6p1EEFcWXack8",
  "key26": "53b3mkSWn95jHNSEiMNLXUqFRvEDgmBstp9XwMeLzT2h1NkJPuJHGnudxkVfqkZ1rd2rAKqR75dsyWGg6o4TzgrL",
  "key27": "5RfBz9uAQeZayGvasC3ECpJ5i57kojYKRXtC5prThncSykBQMDPycwaVrcG8sqUQaxphFthLobDGWdKX1C1yGYow",
  "key28": "4iVieffjK6q9wn9CpTtb6xkr2kqwLQM786n2roHhpYafg9BkWvcc1mDXDay7Ehze81nLMpQqTnSyPhahifwTAgL8",
  "key29": "2Q27eo8W6SL6TER1NyU24eZjfB7sxzSfu755GRb36A2teJ21d2cxXv3yqJSMWQELv35GjWqp1KCK2d6VYHpV9yhm",
  "key30": "5gcXtFvgJxyoUBuJL7WqLAZSiWfJRjgeAZjpLkNdP77CMB747TKK5R997Kzz1bLRHtKJD38JgDpuig5V6iCeSvCD",
  "key31": "5DEuTPW4jFci86b318GzNMsSv8nkYvMAS68KstpU76yCF7EdUSEKgr3vTn5pGpAzDLbo3qcugAfk6frvCTLqghWd",
  "key32": "5YMGGqELnyjuKthCguGEzJrDDMFCE2o67zwKdVQFq3iaqmBVvoSnHKCqNRm65f3xoRsnrcxgJ5YseHSqwD6o3Foo",
  "key33": "4pKC8QBXwn6HQKqNHEeA62p3fdtoykWM1BZZ53ciUAriPKuszv9GQZQtLVP2M2BJkHryMtGKNanaogWLNje4khLj",
  "key34": "Pn37dshD9UdbcrqVkxRZFUvCYfmnKoKn74N2m3AGBpXEdr8o1Lzw73zNLJPy21rLzcbat7RdnhRutiuRMbTcaXq",
  "key35": "2yKFShNBBC45YwSSsS4VatwQqvzpkRmSq4MPb4SutWYviv9X4Jnons3MZXfwK68CJumDiXPe56toovZNX2sECCe",
  "key36": "6273EQeFkSgVnCX9LrotXNZ77frW2PgEW4W11FFsA8iE6Toft6P32b3esr45PW4JXqvkpTRjFfeAnNfexMEQLKG4",
  "key37": "2gZYC5CjdPkVybR1Tq8mw98ejTz6FjiLivBwFr1EXZYEY43QnQMMFJb9bq6no5eaWT3EghcbimYNxVkuG1vzi9QJ",
  "key38": "2LbqbNdBmq3XKJcD3sBpmHzp2QdVcJ3oskdeYNcqEmGfCSv1rgLoDA97xQWBB9j2LrgZ2aYdQGeRoh3TzK6ZhatR",
  "key39": "2wB7hZCJJEyGs9fWw8VnERL44fQESLvQ8e4cuEDaRfoyiX1CjV5tgC7tSV1t5NwP4Eoofg6iLAWNTw2SPHt4gaot",
  "key40": "31U5Tpf7sZ2Qxey77qAYxubcXDzJ22KM4DN7fA6KerFBjFoRpWHKLAYgy3odYut6JKbHb86yMx4xVgcbCJwjxSLB",
  "key41": "2ASsfs5h3LRig4RQRTHB6kmgCnQXQu8JqnmH41PGxr1XCCwquuxqco9CtN1kwTR7wFtpL4AyMUKEBuCAsZAtjR8q",
  "key42": "2oPm2m3G5nRxPj4zd4wYQ1tAka1fY6z14mzhAFsS1snKFmyBSoBF4n8Bv48G1zCTmJbnFRBM6koa9Gejx7gu521u",
  "key43": "LKbiHrBTyetXBzsGi9h6Zs2ESz1ot5BRVJroTiZM5aEVXMeZU2A3MUNAxCNWsrjVqCdDJScLcgz8ubPaim3obhD",
  "key44": "5uJBjtsGjEhoY3AF8YDocAcJb3zVFGpweWKUAUzgs8LFMhxYYL4GGGRNznmCjo7ayhNvsJZjwsvNmgBDDGX6tx95",
  "key45": "21P6it9forupC383QNWjoAANHkeSxPYuP977X3RevEnDRMdZ6oor3ipJGmhwJr4sZZgGfjodJ4uixSxdE8MsEmsb",
  "key46": "3MZcXT2oJ9CBztJ9Yx9uRnRhYiyFESCEE25CoBV7tcikLY3hsGut99TCfrdRhMV3QfERDs2vgFz7zLC6L3pFpKqz",
  "key47": "1XcWciAo5wEqtTqPMBWSHsspbJrFyCdmVQMpF6eQSM5ye8hThNwehJgUrfR77mmcxbqjwNYshhqpvMKhkiyMrTL",
  "key48": "Z8tZ2kbjhhkmwUSrMnd6GR9tV5mTvqt4bR9Q4JJnW6qfjrNqS16NLzCC8tA95jJmVsJ8F3YBfaYaMHDD9gQ3s78"
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
