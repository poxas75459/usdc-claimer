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
    "4NzgE7kRgcj8pQ99FdUK2GPsS7UPFYXHnqLRZXM9Mv1BgSBiJceo3C2tQ3f6qb9u3nsqdTnWzCp2z2ydev7FS7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkxzXHxUewxz2jLt8XHEmMx8hPqBroxEPVFDTZ3UkB9zan7pobCQVgraMhBBHBFfEdaxFbWW9AsciWvfpW8WfYr",
  "key1": "5RujFhVzN5xGj3ZRw8fVCjQLvfsvtUxjRaR9rksWXEERWVbVPoaFiHEjgQophmqeJhEWvgUouqN5UjGVfchsRhhn",
  "key2": "uodjJqrxWarrk9cofVmspmPE1rLLXwW2AiWRjzd6g38YZNvmj4NwV6fTMuy7DrHxSB1ggZvp8NsbM3RJ8yVagMB",
  "key3": "3fwSACXNURTY4jPjMMWKyb65Jc8vkAZadqHQJYAsYVyBbwSnS7SrChAXJ2j3krUTT2ERJA1eyuBJ3NgGnK8JREEi",
  "key4": "3oZZsXQq1EmpcGs6e5tuRX7LAVQJ1nJBxvBwHoYh1JVXR5h2XjnGPX1Ngw28mYARkTFGU1ZadvTnBg6pn8k4YZ22",
  "key5": "2Z4n16t3LTpEwgmzgGjYT7QVkzW9YCb9H2evSBLV6Hnm8BMDneMRrUihu9LXkecJJzNhfF7GQd2GN6VZJoKHcQAC",
  "key6": "33WZ4nzg9XqvvUvgSzEaGym9eo7zFSSMSGm4HqzU67JKYrUk178KmehXKAjDb8AfVPQrCm2QyZuACyJygvj4y33x",
  "key7": "2VtBibvSYUQU2xek1kwLRjpcgyxMPMXsyyxCjifPeh6dv8RZ3d29m4Qd6iNwyw8FPtLEf3Bvzm5x7FaRLSwosfE6",
  "key8": "4yZvm75YQYcTvKLb2mJ71JfnH63pgfWS7BYEtTZaV3kmEv2LdaKLnqwqtJ6cxcDw7RNGNzDDoYCJAfoihXtSEry3",
  "key9": "5d95GVkv47Wt8WyJD1vx3G6mzysWtxbGHUUa9zU1TbMxTALmh9Z9GF2Gza3oGLTkFtJn7RBMAQ42Df4nVaB3JpYY",
  "key10": "2DCeRtD51BvzRFjmJbiTKMNpGyXiT9wxtTptCzbo84fWJb1djVak1Y27aSTtQ2qMRFDHnsv7CtAhcVV9rSKrCrHv",
  "key11": "3avraVjzp6CbkRsPs6isAR36WcmjyiRn3Kv4nVy7ypnXM1NhAmN9kLKBh3A6Q6kVu3eJWenp4Ewv6k4wYV65mrqs",
  "key12": "4KEh7dMTSMhp7myeRLX1z1TmJwoEB2nH2NPPPt5Yz5xvpgC2DSGtxbrQ8DmeWf2VNq2uFWjKcMkPmzxLPZq4pkQf",
  "key13": "3mJsLzZXQz9gW8GmCCfdu7bZgstaXzeZe5FjkmpAUQsGnrK8bDZjUpSbvFkXjDoFfETYJaPB1JtKQzGrrf23Pr4Y",
  "key14": "29QG9mhfgBgnTERe6Cb8Mo8NbJvMmyPEvfPu21Bmv6XSuXSKxsmvSaWfWXFT6sqgMncVtogjGcHLu3xV8ynnrXSr",
  "key15": "2QaKx7YzsPnwbXQNxxZZtEEcJbyEQDCWPypY8rro4aiFpULGnWxN8ksWppnS4YJrQWTW72WC1kJynkAyjw3z1tHk",
  "key16": "2Eedmbxz1Gdw9hJEBitjHzcodPRKKuzRLXZraD9r7V7zyz6VdpT9auqctnfMB9CdhCzjmZqo6JoJeknWBhbma9Z4",
  "key17": "2QnFr3Qq6xxSYCMSqDY14f6KauiAWYB7r6qLe5e3CjZhFoiqdC9JPr5YWr53aQ5tuwmwYkwYLi2nYCYGPH1DTf9o",
  "key18": "2NApHdHSqSEwofYaQjTNJtsGYYhFgDwvBXkNYGFh15tn6yeBb9FKH6GW5NF7CquXMAxSHQBenDXMZHWejL6sxfD8",
  "key19": "i1F7Ww1uPQ2SMehJxi1JMKEPXUPRKhvWqJEb9AYh1kec1MNzeJbHEYcPkfS2QMCnhYZWQJfv3EKDkRwx2X4EQFK",
  "key20": "623q4NziWpAZtiMfGJj8zLDa8GdXuj4urpgemsRncGcjPj6MwN4Xz5t6GuWoMbrVF8JcDDWW5ZZMf1MxteD7jhxa",
  "key21": "3AFeResoiPQcknYRQB5Vu9EiGMXtZfZafSXuyPz3jqbkQUbPFYdjt3xUypx6BeZ85zspzy2ip3fpf5Fgw9cPMdrJ",
  "key22": "2iNdb6NjY1rNe9fUH8wFYMQxGW1L5zuw8paNCitpXUYUeQhAvnpMBVz3Z7GUgj9XiRz8ZKAuJTW1wQFgP61NGoQQ",
  "key23": "4ZatiRrZ5WKdmVrKUHMf2yZxWfZS8Q4CxL8nfczFfxo5ez4B9ri2g4WumRBZikkpkSxbozwNHLugSyGR2XuWTZSr",
  "key24": "HCqkQb2wmoFHMBHPMgnHgptqH7QtATxkagfLu2YmCaCK3durMgLhxShFFhxWpRFZ1PXa2GudSbgpix68eU555AJ",
  "key25": "2gTRenJYG4ohT2oRN21q3XbP66jeR8u7eRz6KRMF2p9GXqGytwiz9j1JcRxuGG3PySzYwzvPHNzQdkenDNuhwNPM",
  "key26": "3zjLxhi3WJnFDizpvar13xjVDYacXVpWt64BX3AjQQRL7TPJW6cvZHP27gy4Mkk7g1w41MBTvhQRUNjfNywabybD",
  "key27": "2D38LYo514YP32pzxqWjLimxQRAGpz5VSbbszCmbnFFfnYWnrtoZxADURin9bYJGMHCxYaPWYZtqwTrPsc5N3bDe",
  "key28": "aB7bZ6B3LjEMuvq6ZabrTjF5fTzReCFw16LeLQy7zt8Dra5jBEJiKnfCCYxfydJ5o1FRAx4U9TvJhLmgVTGw5rP",
  "key29": "48YLZ8w1uyvBgpzw1XE2J9TRqxSuTn6morcY74XNn6zSenSsvi8oDiXDV67bJbvw9tJDQSurmheed4qo5YoqNkz5",
  "key30": "2g69ucLCEGFnp7iq5sxjz7o5fVXsfW41VRGFQF2xzNUWWybCVpkSqtvnvRpJdPYprHdWSMxQMNj49PqvNb5FyAf7",
  "key31": "PfPcxdLTtdpfizSDnGsRmuWKhD2WkqKQG5wXFzNhNNS2GiG37kXA3bVMk8g4Ne7jHsbwHGA3XujxRptcy6QcfD6",
  "key32": "2dEL9zPM8EukDL9n1rqfiT37a4g78LVeotnCpq3vJjkzz4BwJMuinBD23mM48Sa1jE13hhFcaDJRX4cQQj5PWTRe",
  "key33": "2FcwdP2ZCRD9YouhoBNM9MZjzv4fmEQKxdPXWQEDBBETGjwTVGUN3mNiYzGy9wrM3j9MTjFVnwuUa42aD8Ytw9wS",
  "key34": "4NQej7JEismdJq6sGg2zYU31Pbvy3RCCwj3jExt8Qibb2yPDykofp2h4YiwzmG41PRQP5Zvkeu1idYMkAuRWHt61",
  "key35": "5ePMtgDLKSdhxvckh1QVF7sS7AJsdBoHPfyBz2xoELPKbRXn4FHYdpXLtj7beqGstwepqdXcGBwHX61kQHrBBfwr",
  "key36": "2pkasyPwzHWDkeWjcT6dRLFQqBRTxVa4mEfgbFYf1dfgbwa4qffywupmJc7tfLqJACqozo9unHPSxnVixZNAWERp",
  "key37": "5fyGirfXSv5z35LyC2xct37vJuNQkHvd4JMHg5RCBDiQgrWr8U64azaH639H5Ux1pXArSej2XvQGMe7MCv8kBR1T",
  "key38": "5CL5pCZxUDE6JVdnyumZGsZtMo858qyjb3utuoZ8sHvEn1q7AYMWTj71JUq98HMsEj2Zkx1faY2BF1F1qBFgGDvq",
  "key39": "5kpxJmAzWefx6Juov1bSMHgknyHmyenkMrYPoMGvdPSWMgxdqp5gumq6vS2VCUZpWmZ3kXGroZK5qHzKj5oSgd3m",
  "key40": "54B8HtQhGYht12VS6SdSnWEUgNz5Cq85Yd8pHiP6uK1B34LjrEFVNGUBqXnNHrGezpHoSiAT6K4CxxssMVEWSkj",
  "key41": "2Rozi43uy9dewfbT9FvC5egBvzgFSzJ5U6EdnjBRN6sAjy1aBydKFa7pk7wL6AXCFkWFoRWGhxnYnB24ykCdHbCq",
  "key42": "4DBBWvjZwUJniZudqXnzFfR3Udi7zpuRTuFofZrRQKedHhiHvhk5gNGscyZ8NYdkDYFmWphE3CEShBH1b1ByA5UA",
  "key43": "5ApddYtvEwBX8HRSjzP1wXUFWpq3PkWeGh1Rdvv8DpA57DPwtn9JWHZfBoqUBVWCCN9TmjLvRj1PxYJSaiJf6JWY",
  "key44": "2zk93C4R11dTc8hoLjnuiYPKvEkDkQPx2HuYFt1KKUSCfXM4Ao9A8vfemdgCvaSFwSdGdUQqgKrVZiyURK3z5Usk",
  "key45": "26aR5kbcN1fXKN3GJXZJkKb5Ap72ACAk6zCVwNsrzYQjv6ua7MWDR8mt83VNvebDX4sZG7DugBebJmpthBB1qcXK",
  "key46": "4cTBGWd8U3Y8k3ez1RxYHyvGUDYaZ5af6N8EPsGgLCr1GUYvAvs6yMopUJqgYPMjNyGeL8nHAzVDRDVZZvohSXdm"
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
