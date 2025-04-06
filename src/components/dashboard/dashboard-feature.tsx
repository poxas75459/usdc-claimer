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
    "5pEitB7MDnJMBKpbwMP5xW6BTZM3C3seudiMcKp599XXUsBJhM9CvZPiMgxxpGkNGZwChyq8mF8SSjQEisyq2h52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wchyLhaY9CNWxLRj8E2sAkjUXA2oZCejVEzxp7tiVCXKKfJQNekZoSmxAESBpzGJ2gWEh2VRQAj7mW1BHY6Mfbp",
  "key1": "4UzWN4xc3iBf2nCyRRZczxJHvHfacHyPafM5dKLXmfwMgC2nDjexnVNRoDaZ1f8yKDQKYcN5mxorgDoouBWtPwjW",
  "key2": "5QZLujkqrBr7Q8RoF9Jb1fGeySxCuxhQqzWoWi3zP7C2rBnkCijaPzz8QYBWg6qxsJhN25AFFsSYQjw56d6uvf5H",
  "key3": "2wzN3eBHcyP4WfSwY4ccAVg7Z8X7yanHZWP4RVSi6NjZVCZj3Hv5QXW2TTAYfjNNgFQWTB9utQLza4CiEuRwcQEF",
  "key4": "5jJrTsk81ETJPwKXcvzMCM7VsbamEyN7tBXz2ZQjp9Tfg9op1ihhUsSpMguWZsZvXrm8bYDYbic4Tyjf1ngRbDvx",
  "key5": "44ySQxeWnMw8fPSxfbTVnXXD78gePHKtCwyDh3muW7FqGH3Yp8aK1pfGrAgapvUb7KkjiuZmLa1Ys6RxQsYSHKMy",
  "key6": "5oG5RrYuAhZ2zTfuCbtae3Rgk3CfhiDUabhcSmmQeXQcaDis2hLp1NHYUXk8CUZNUy9ycnzFc52eLTN1Kbmg44d3",
  "key7": "5Zjt5fJwECzHAeqJLYNmoPGyxQjpnjYkXUGAeaNS7mp6NsgEn51HvCRSmJPnpy25tEbgXuxgnHTWuts2DektPC3v",
  "key8": "4zY9UT94UUVKBmmzMVfiEHJ6q26whsq5fVygkV61kemLN7kbcaHuGoDFarf1zi8r7brLGH2ttMKejuWfZ9F1DpNZ",
  "key9": "25Nghhq59a2SwZnacb2YpchPPMp9oLmp21dxkiLwYnnovAdUXcppdaiqsRYkDy68UDCA4bgmMvAbiiie6Hog4mmb",
  "key10": "49bDx3coHiZBsEE4nH1TeZRFCd5Lt4w5iDwLt5JZ5SgXvWykAsRHjdcaghjDxSriYxhXuJ8Yy8tATRGAGiqEBdcc",
  "key11": "4ovm6GrKyEQJtCsiQQJLM2CYCyKg7yKHrX3rc2e8RWdvRofJFXwmSGsjaa9ZnjZkyjCwJeEnR5S4Q9AXnbZbTmWt",
  "key12": "5YvhUXtqzy2AJ1pheLjbLPykNBfHNGZcA9Bo5bk67xroGVecQjVisgGvwAMwaQJun9XdxDnKcDJ9NuhM3va6Dqcs",
  "key13": "3i4kqW1r3oYAJhvDfm4bARFssA2zV3bFpnEYcd6kUY4XsRyoJvDzUEN6D2WQBLZUjqQ5bg23narfRcEiaMkR3ngo",
  "key14": "2QouLr7teiM3pdw6uTyZHoamFC3pKRRRTnqwhsMHcYBqBLuqsQAsjhprWmVxnKNSbhVf1zqCmNwmMDRZbqRvRpGx",
  "key15": "34VZBSLCox57opJAU66xMQobUabcnhiHtCL7KLNSqoZT1dfqQXJcH1JaS4mMHKVWDoibr76sULbCYjGqEa4wbywU",
  "key16": "4ExQ9iaqh8ozyjscL3ffxgkf5L7cZzsQGwtSC7vyGhdVSVVTBoBNSDamC8BTK5RyJn5myfajq3PJ5Wg9Qcyn6Qvk",
  "key17": "5TPhhUfrMWHnZJEjkZMrgWhXgiqdrbKW8XJMoJDTZQbZZTLPmxtHmL9e1423MVPqV8T5FRBU5o4LQbJ3GFpiL9Bu",
  "key18": "5AdwfCRwUv8hoZmA7EzZ8rwfw1TBursQM7NZy2iRQwn98mtEEizHF4xD7jRgATPiXorkxmJPyuTYJiwh1gXsU7sa",
  "key19": "2FisphHdGTLc9bRiKmJeQmFCQAj8LrQXF9wafXMDxedGKZrVBqiBriPEGF11W7Jj3bk21SEHQTDBfp5hkGxcHQ1R",
  "key20": "3Uowe6nAfBq81PbVdAxeDTEq2ziUxeKoLWrnvPEhSc6NjTr8tSGD5zEbz2RbzotSjko6z9AU4sApkEhVo7qYVZ4b",
  "key21": "3YMahNRL18MRcMVnScLDoYkvKqKJt7p4D1S8WSX6V62A9hdCCy5LLzG8Dxj2TX79MjoQ2ABck4iUvGxPhxA4V74",
  "key22": "B3a3rrWffMpNfU2G7SoP8Bm4HqiyA21BUABquUTxitr9bKYP3W5A5qxrEjNiq39UUaeSZfyUYDd5HL6xFQddLJb",
  "key23": "422QLihS3etBtk6Ksz2UJ8d2VjToxD3YWnJroEqnWLwwahqSXNCqc3JJrTYR7W9XnLMSp466oC4t9b7RzzHrgRac",
  "key24": "2m6hwA3ZLJBJKG6aR7KdX6YdzSN2BagWY48zw9magiTcEch8fwSnwNtGw219ukcnwk9xEteseLv3f37PXNgndFeH",
  "key25": "4VUqiyKb6Bjw6oNwgvyocHwqtpVcbZEqfE6ufU81a4F5tjnvDrRSwEMGGgRgJSaRuvMPQc2Bas2pexhhBuyj9yry",
  "key26": "4T6Dm7HbWU47SkYtB5xak6MCakACFtPNbTatcHGa8BFVUjn5jmC3BdjqNd3ACjUgbLJuKr7Z7BjjsLwbSSksVjBM",
  "key27": "2vViePSwMj6jtiE7gFEUnRYUP8e3bhMbxqszF5rQx3K2u7SSy7FMcGqCghkgbdCDBFS4TXTXUEevdMFSizmLEsFL",
  "key28": "27FJc2WeqN2JJc7HX8BErdsD47RG9hzNno3LwfCfqqQUDGHF43kC8biGjszaFvvscx5YkZpf2Pm76wzoR2Mbn2CF",
  "key29": "5xQsYpRZ2DNVm1nvYpYPwT9DyFPfNqRUrZoKtJjQGFD4GAeDBQg718B8fMQzUdzTU8fGQZJk4UnypHJQm5Gk9qqo",
  "key30": "2H4C1CFGGhaU3JVAh3aiWE7v7u3Jhh9q78Es46MXLSQA4kSVjRvkUFo9JzcosiufswLGhiEXT6DwqCUNMzmaGVSd",
  "key31": "ow5akf6jjywHhJwJEUTbYws8QBYUFr29FaTY6d1YzDENznePyS4KjfLtaPxYBWtbJgqEFpjSGvgoorBFAg1Uq26",
  "key32": "YMBxRsXvzDaaXAsSDva9KridqFJQKv4NQZdohKNKaaQimp1zn7BEAdPX7YEHFfQsJ4YvAKdsSuaLYpTBRFuX9E7",
  "key33": "49ofVoTQe8ozoC867pzg5Dpfkn9hekJowGT57QKbMg22zgbUc7mES5EMREk7gsJP4mU3XS2ktN7ZDewZyhd5khhU",
  "key34": "2XaQ8fV5BUQjoNtkHJtXUTJsqtMxErJBWfNQXH5ARM9WLRw4dNwdbhxVh4D2eUW73GH3tyQuH2LUHQTyNk2nKkXp",
  "key35": "5NuQ9jYdXsxoQd478GuaM3QJsvef7H3R3XDt1VnVBWw6cSoX9rHzsbEx8szNggbHx1gPqaBEdEDDAcFAW1dM1h7Q",
  "key36": "2tFgqqMSwawRB4LuHHeiELtTvW7SuH4tNrZGYgrijQDhpR3iUcuosYUapyRcafq1j8ExYYGygJZYrTYUa286cQzH",
  "key37": "UbQUPYNnHYxAcKe3ngBhw9PWRXKTgwYQ6tp6PcataY8Yk5cveBixm9cKPq6ju7uLqKNEzDqk6Ru1DpBexrVUGik",
  "key38": "deecP3PmHee5jUki7eUppcE4kzPiSVEisFbFT5xr46sMbHbaCKcoXAo7qwZ7695xjhnXGdLnXVe22m3ehfQCahR",
  "key39": "4iKuuPXKSLTd9mwdaxC16BTTjHdNLFCktEZn9iSZcpYksgfURgghsR2TcAKpG4JJzwkFn4RVdQ4s2bxQaXAy6uY2",
  "key40": "XjEWD4YyhjTM8BjRn5THb7f58RCG8YrZp54DAd22TSBRV2KX7yu75piZo8CK4jrVSAzTcfWGgwZukVVmyUqgA19",
  "key41": "2jypace7JAbt2gYrDmWfugpaekmZqqVy3jL3ZBoxcxg3pNxQxoVZMVsMvGESghKjfRSYPgtvMMfk9TVHWBnByYxz",
  "key42": "4yvDRNGVYaXZy54ZJtCwAq7ZKYTmQJ7dC2juPagKj7LhbwYxQxjniYat2ofohZLEWgQL49ncMfALu7DCFphR5cBA",
  "key43": "BbiHJWxsB8s7uUczFPEKJRYoN73vD3bNK9jrJ4N1MsaUGsZtRWmXyjD8bKBX35HHmAaV7ynDEx9BSwhArSwRZaV"
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
