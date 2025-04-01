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
    "2reQsLu8iLEfkEnP7szC4z8DAGocwVitUMwsKi4vtA1AawPGsKQsvRiq3BU6pMK9mTMf4NLnQygnCiUdevrKuzP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBB5H44JKKpTYMbSs8zaXy1tcHqvoLnVHxkHaQaYQXvsNDeWKJBZnwbGGxXvruzjH5KRSAuWDNH5bDXToaJseT9",
  "key1": "2FHMDz2gAsX35fqqBzE4J5nE1kqwbyT4UDhuu6e1hq4Vbh8DxxXyPY8LZDE3pBpYZCayp2aCCxwL7n6WH27t4iUE",
  "key2": "4LmF4sA2AAfpmDeqEcvWZizRdZtkREyhfEeaXFLi9s1FuW7fE6fFWhNmCkp38v8CvuYkz15wmRjZXVM2ALodzfTs",
  "key3": "2YThVdPRwUKq1FYfzEx5YCFRBVV11Gi3z2vxMP3YywFmPLjB1Cv3tAAsEviRZw6rGmZvx1bss7PWGtYDz8sHeaTm",
  "key4": "44rM1rm3No8jdYkQ9GkjH4neMcjPUY94moWSJTmTnavxPnyLGrgwfW42L8hVaJXFGnLfTRgyttxDWKQuXubUNiJm",
  "key5": "632d416D5oq9wyCDTZVMbxfaepYpKHZuYhkuP2GydxUxsdaKdzgqhZpEu868kP4hnNPegU3FBtEuM41sFPmN9PT9",
  "key6": "21nuZbjQiB8uqKa35o5diCWup6t17z25s5uQ5JTXv7xJzU2offPKMLCB8cyZzBnj74f4whpNvBgGGB7L6kbB8Sk8",
  "key7": "S86ZitPwShbKhNCeZ1NoXd8Pi4MPyMnoDNPiEodWGcDM9L6eKNCS7jRneNtUVsn4aWnetwgbYxjm4ZgKAE5XGF7",
  "key8": "QqgjZmv2yfZsiePF6ArDw5mVgfonqt32amLeh5QQY4muc38SCWPcc9v1he2hjJmMxzRgSuwSg5zxNoZ5vJsr2ck",
  "key9": "2H4sin4AiLSape5xb7GjfU6HTPn8hyaA4gXE5vZ4YGfSwPc68XhsvU8c61CDLNSon1btiihFf8xVA44VornhWXnb",
  "key10": "3KRKZhVj6RpGAKs1dfdgqV9pzgyAktSrmw3Qe9JebjtU9LDmLedYpfTmwMKdF56Pagj98scVC75vuNhCCGifJmw8",
  "key11": "263Q84xbnSxi8h6N5jg92pKQyLafHzMWQqDNuF9J2YhVM2wr7rtgnQnCXnAaD6NYAzNyme2quQ3RnVJVzJo3iWy2",
  "key12": "3gCcRvFJmrbdDyJfhhy8k2xYzJ4vN4Y6SZW3tQaUqMvsEZN86fpJpkED1pDq6q1hjDBGjd6Q3Q9iJe6cfqEYf6uf",
  "key13": "omWz4BsWbDkxCRxCtgZ3fpLFQfd1zG2XS9PDPaAd9YEEzEaE4QhpwmE7CZ5TjGSmTHJoChsiSsJQSYJnX4vkNnn",
  "key14": "4DEuA92usiE7ESRPRrTZj5rQqnMZUGK38EUC3Dt5TDouVCz6i5HvbUYa6RyPKeQyXUjq6d5KSedmTEVfWjyAUEr3",
  "key15": "2VHRzACoerWqw3CA835LosjLFz7hGdShPGNWAJa5PKT9Df9pnBbqMrwU3F8bDombFLZkeyaHuQ8YhvGDs1AxyLzX",
  "key16": "2BF9fZ8awpJc87EJZht9U2Wppc54jekDwutYwPPB8kTz7Ke9Y7KpHrnb6BPiTeU88PpAn6Rbs7694y6Z6XB1TZZj",
  "key17": "2TcM1JjdRgf1mMbLjDToBiyPC3iMPVLAdPJwiF1KhNJvXzt76E4WxzwBqjsbNSySu3ncGcUFEgph5xhimxLgdGAu",
  "key18": "4dJZzUquCnG6bnPYfaMnLgabRzRbmTJ1bWZjDEKL67cMgKUHxGUddhmsen7dSp5FJRkZF1AiZhcu73U54SN3QyRc",
  "key19": "4jFRX67bq9pDDhd37JSoxLSnNXxGM77tGYxAW62LhH1Rb5NjbnUSb6n6SLzzMDrAhhBFHvNqrKmPQ6ZrLrDhnWKF",
  "key20": "2M1wpBtFCx5bje81mKMSgoGJuNHQ3uqJVNCutmHcjionRwbReBnWCoHoDQV1UCLDMwMUvV8TUzFM9ZwcDpzvnkXG",
  "key21": "2kCB5T449tdhGFD4dVeWxX1WVi3T5odaExJx8kLTuvLSWME2Rk9zHaUBL6tjvCH68pX84mfzFKEKnknxxXACgE8H",
  "key22": "2P3ppXTRjgTuM59L9c1NKQ7tVBBavsYGGXfwbvDszkDq4eQvomGhJc5vyN5F48473kz47nJGW15G2nd1zSQga1EE",
  "key23": "5j6SbXN8JnGEAUuvYYpsV9fahDn5MB9fJ5UGNSL7YGCFxq1qa4KmsVoJrPUE6cp2A64n6QcC2hyK9kjTECEkfSZA",
  "key24": "5cHJtoV7vk1jDAzJioJJRbD2ZR4fxSHXEmB7GzYm9ocQRGHkHAqC9VuiwKLYP8o5t3DY2a1syZqFp5aewJpbEs7Z",
  "key25": "xowEhxezRqBQ9yE8CcLYhE35hqcdWAmCbfR2zY2hBBsrKVzUtk2JsiSQW2WxfnrY6bNSYDNEf5DozFdxXZgdWpT",
  "key26": "3B6MwAmtUo6GEvVRArBGG89XwFCZ2o9CgsZMVkNSdpoLywbZEH3YVKtP4q511mMMyNgN9KmE9Rer5xBwaweo2tpu",
  "key27": "2wzGNwb4STnywZqgazQ7Za86iaAzQjKpG8k7E85ctUbc8b1zLvWFNafpYXTWwQkpFpjkcMXufrqYqwYwQUQGUcaZ",
  "key28": "3hXEowMwsmkSBzHh7XHvnuoAxyy7nja8qgdAY45FFbViwtoWrVsGnJkycTvurhp6vuoAJYhSDvEnY9JtXy7ZQXrF",
  "key29": "66i7kHYtWnzAJBkXEUqcPjCdPSANYpP1EBtgCmTaq975uAi4yq2tBfwwCTWcQ9wjzyfGg8SXH1rQXbpBhVkW7cn7",
  "key30": "4nyrJ9avuWiyZ7Je4ufjM9eCLeSSFbfL98y8doJHPtjGmouYqDJ6Mi5R1DLRCzoJjMj8e5XT3enUqPQ6jxqhoHQ1",
  "key31": "2BLNXJPW4UfXZuEhbvhHdG9VkJup64uufnSwjVJaVtto2svVHt4C36tVHZ4qffX9q4exBVPeMUQMx9yM74Lfx3Cn",
  "key32": "bxxLVkRyY35zdJCXLqgwTsPch8HtYCXA8iqtSxu9UbjxURQvnUMUR9W7zdRWkQ1zkKvN9k3CCap6DFjquUP65Ht",
  "key33": "25EGyZn2qRHeUiLVwRorZBULkJqtfArJ8FXpRwKCvhcA4cCyCyTiiCfsZ87377VkT89B96mpaGURfRHnNAJKaRD2",
  "key34": "1ej3oGiCcm1FXeew4eLXq2mG3GuLw6D6qRVFYC6oFmPTbzEwycS1R3XiDUdQatboyeFrCUZntWVsrwJ3BiGmpch",
  "key35": "2YeySz8vovFDHTSrwgDYagzCKD1bk24ekx5jJzaCjKyVo1hARHapmpm4RBth7atqvYdLJR9LhnH8gntutmz4bhvr",
  "key36": "5X1Mdwawa6Ai4LaTTkNfhVzX7bFPoGLJXAk3GEJUjKZBmpfxqCBx25SJVuX7FdYu6Ydhnt7EbTP7qNcsH3NckSrF",
  "key37": "4TaeZXGt2tfyYFnw8uUoNJN4c3LEnVQVoPvwVmYCyErorMPa3gef64yk54wndCi3xsnx7WX2LSpnHshe636ytyVt",
  "key38": "VCkjoC4RT2bU5L1YNCq3WAnTLTyiHVpMfpqqNqwutpFYXXCMCv77G93W6XQyGgUdv1fVq2VKjEsWjDaQhdkaiqo",
  "key39": "3bgrb6J6Xh3ZMT57EffFkKrZrw7wVWWk62jvPdHDemEhjxLwq6DABTxsw9U7gzqBQFZY8cz4RRJTMWJEmjdFB8jw",
  "key40": "5iDYUwuXE5sWZ6jdmzEYCy3pyFt8rn5eMkTVYcrNsqQjEy8rEnqu7P9kpwpR9oAdyE5xPjzZR1g1fqSNxLk8AznQ",
  "key41": "2EMeBtsUTRXg63JBxLknqtHspXNB71gsRAK9ovef11QDRJNWfgMZHsCKTKVbYFpAUv3p46eYr9ms5z2DppHNoAVD"
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
