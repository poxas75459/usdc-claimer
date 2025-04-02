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
    "3PYLF8m97uC354rU3y7GRyLyPCwuHLX3yU9f7x3JWAqEBtN1odcFvwUtuMSvm7mcTWBk3YBbU4sYvSdvRBGaQLQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558keDUo4BJCTzTvhRpK8tzi16DDRYdCAR8tC1WMbCKhq39csjXeRsD4wAPqm4TYBm2T6KWhis7bYFgM6KPEFswh",
  "key1": "5YEuS4L4YBiT2rr687oHqfa3z1QkwS99tdoJ59aRu2ZPQdcKgNpCPvYthqeiG7FTEnx4krXQdFKNG3YV8bkXPfAL",
  "key2": "Rk53HgS1gxb53jc8ShpB24DV7UvvGzssgp2Mtmj2py2ZUXVX82WdJQK1a6u4EWyuVpTQ8RkKMrzNJGwabsSsNno",
  "key3": "5a6rUdyP2akh6sxQBXT66QxK6NTsLRSm5ZeNiiq3qx9dy3h72LyGhG34hdr6HbgC4q33ZRc67dDJtGmhM4nUsQvh",
  "key4": "56ceTLSiW9at6omBmTTZfwqgkPzKqZ41BEo7pSsb4RxPnrzHj93RBToiZcjoyLGCS7pnGknT6itYUEE8HKnFDcLm",
  "key5": "NBszYvzeEfrQkEe9WzRjXyLJVqAxqVp77xfP3Z8sywjXq6oUkE8fvm33H2xbVMLtEdL6oLLK15U7P5zsnFqdt7b",
  "key6": "2dH16LrJzp2EbyUtvNPtTLZUBzWvBL5AZ13NHanqexyRKQNiJQtizyANemuvo4L15VKvUc13NX7y5Qd8WJycvdgu",
  "key7": "AatqGxffMNHH77e4arcUrbVZfpJBAUA1YdhYTFMNGJ4pxtx43sGLEPZLJtzDiYAwZ6jjuCkP1mWNrCs4tzD81sS",
  "key8": "4hNVppemjG7Y9x7MDxvu1LSYdh6qNRdd5doBR6Utau7y8Nj57k4u9wFMLxzgFWNczcmbjxnnjR4VqXe6EkDY7VSq",
  "key9": "26V51U6j6kU7mJeidfG94zbC7ZCFXx5UZVTPa3yPgRmrES3s72uvqKXSZNtGd7dciJ71DJRNb3gvmdnBY4Ng8hCa",
  "key10": "39Amvw7WJNCXB5PpjFKzh88Cre51QTocCQyZgwdAC72YCgLgJ4geRCQSVnxD2nu9NS9qyKLFy6ijBBKyTjkzG29L",
  "key11": "2w7RTvHCNqESKoPf6fpDuPjA1RDTWS6nPZAwBMAz2zTWgjrWbPeXVEnNTmVR6KK2E9WXovfMMWMRmgA2iQdqtVqV",
  "key12": "KtZXKkAFnw6uAh7Aw8jXTKuzCQ4Q6RMgtkf2CX723zmCKNvobWYFgg5426sbVAvRid2icoGQYZexRZrZsiDAbju",
  "key13": "3uokjHqxehanEH2nHPiirbudjNUseteo4PVc8DQ6KJ7KnYJTRqzwoKprdMjkySP25RRJ8nH3SPesPaUWEMkW7qck",
  "key14": "53QNC9kzSUvGXVEVPKz7EeTEnptxLyh8dqYV5gJ61K5XMZJvhZVNYk4LcLFrQHVeoeYTFtNqCRxusmDdxQ35e1g7",
  "key15": "kicths9U3YkahXRRH84Hp6H7au6WaJGw6tfkkmGg298S8wBWGtBmPUE69xLkznEaNy8J3cNdsibeTEpJcJaUAUi",
  "key16": "5PpCS9GowXmRe1qSkRkwoUgaV1BkCuBJEAuRMTdk65VkDAJmiarqdXXbTUucakhhiVWv5eM1dQZqTjPZo3nEzaVx",
  "key17": "5wa8eSPy1PQCNpidnJtaWvM9YriY9mw2j1PJJZiHbKjVQrvjVA5z8zRm4F4EboZ5qtxVWUTBcT79Ru1CfTnZm1Er",
  "key18": "U2HnaVhWyhPJnijbo9Zn8TtiX2MmipghKdwLezG7128BTvrWXRTcNzMVvLV8jgcrRHKBt8KLYwBEHi8XJySNE6V",
  "key19": "5Rr1R1PQR8SxMLM8m9KK3QL3hYhJtPAMsFb6HsfddS9WQLy6ngHM1T3q9sQtbFYN1QmAXz3EA7FL2ES7VSvoCU1",
  "key20": "5v1jQzr2vBSQbNGRga8MTpew53CRAq6LWJZCVw9234BNtVoNgkGSkJSKbuuEVo6eHnXFjVziwRGCateSWZBzru1S",
  "key21": "3Pqc1Y11ydfTCU2YLdQEjThrkCSCBjmEU5WPcQ9NW1K1o6u6xoCSvBi9oD55UEivU3sbcHXo5ha2AkLgo8daijEi",
  "key22": "44QjvyqYkRwYJrwJBZdgKuo3DxvTTT1eMC5rCQcWD8by14foF5RgERFDVC2cMrHiAax3E5RsXa98fLeDEhsLHk1W",
  "key23": "3nk21ooPJ1eLcaKC4WUkYqSmVjkW3bEkWTWptQgsMA1rA3EjtDbucjMeCA9nNYfxFqibziG6b2ebHS1GkLhLC8hn",
  "key24": "51z7QfYGPE3eSD2iLRXSemNNHGY2Wb8nZJjM8wD1Z8D4gyGn6MFxiJV7BXzGEjYbeGXKRGajkzfNu9VukeCPeSZZ",
  "key25": "5xrVzpVdewmiShPfLSEsM4n2narmcWFy4EheGSEJkmEPEGHrY1bxy9HxdzXDrZtZBHjAqawddw1zdnhTPsajAxYk",
  "key26": "sgP5u3KkczpXrPa8dmt6RjhEhoJmUBZaQAzubr399QBS4mG9M6ZJ78x4rawc5u84qk97V9awRb1BUN28Hm9qF3m",
  "key27": "3GMdZowXgCJLkEksyL8YNS4uUgnNt3r3ZJuYa8ERkQZbnWBcUuxTLKbNJ9skQ2e5rnru8m99j3ac7QHLpkxrtP7u",
  "key28": "582nLZqBDLLph5DnFW2zAEis1D6hCEpztq8GDDyHw8LFZN4KejCV9SJuVWVmfgZmaNhmM2XKTC64FbJMKczj7ZUG",
  "key29": "3mj1oK6G3F2RcJhEGhLHC8Cy4R9BhP5RWxDYsm2nG4jh4VsdW5fddxjPKaJk3Eo9Zpq7LB6xji5X8aDK2hLq7JmQ",
  "key30": "4uSzbXX547chB3FgtKQyLAAcdH2ZLLzZrtTP1b5mp1HDqk1WHSqC6moQCCKhAcCoSTCDq6NXQWdw6z21n1XKWDbn",
  "key31": "5oyMuXTmb9KUnTMKunFFFZmte1EVD7Z59FXUpiBcbfAVgxPLaVL2VabpE2DrMCFGukBaSgannMcZexP9crGEnPf2",
  "key32": "5np5UUvauizPd5B2HtN34C9VxJxHv1oMkahgzBe6vBHaiqmYb8ZzeGKpuHjG1QbEDP4DEnJtJincvhvuMpbJr75r",
  "key33": "NBqrQzr7tjhTQZrEB6AuKtg4pXhdw9nkRRYFsesGCWPEzkEub7GDPumR5LNs6VDKFA4Ln9PGsf5rp8fZpnzVVXX",
  "key34": "3nnMC26yKFpjL8HQsdvAkpaAZHUzZibxTFYqCjtDLJAD9p4TD9uchPMGm3mfdroe8W8oJyJsTpebWPBcRSXPQzsD",
  "key35": "2QTqaxHHo6pAMTmxd9Pheij8pdfmSkygV2S2jP7csBa48chqzvinMdV3JZJzsZpQsX94dhVZu2p9kwZyLSKzfi25",
  "key36": "5Yqc7jEXTtPs17iWGCWzUVjMWyXhXvfrjT7USr1xoqJdWXJijbr5wrZcZaACUwBnL5EhaCdj63nTZ3w9iTaPMiFD",
  "key37": "66xwqEhz3VJ9NGWYM3PJaquPYfQRGQXkFq5TeAJrTat1GPimSDWkZNC5UrfTqYuG4Rcpn98GxFQWrKxXPomBKxhy",
  "key38": "4Q9uZ1TD8e7wvUzumJLgp8WT4g5zEX5R8cyHphBPxCcbEdyFC8puPawR4CqByn2yGqwKwRqyvSgzbQNXmU2DqzGN",
  "key39": "2bSzWugXrgjAXXDCANEwjMHESJghNStZPGnWvM6PoEPQTiuZrfcxHqYJrssZZuSV45hxiGDdzFGw7rw3bbJ4yYJq",
  "key40": "4c6wojWCjDjJKrJcRcrhQU6tv6GBDm4CvbEtSDHPx41A7pw1oa81cyd9kUEjRWgNW7AVJq34ivacF3JRu5Au72AH",
  "key41": "26LJgNonw7QrYsvCNfwptSLdxYHeAXLDDYq3YZGkr16iz85zSws5hZy9Y1bMWHKU7vUBgn746fJB3ZVzh3ECguoS",
  "key42": "5g3UAKLndLKGUSNNmmUEHVyiiRfGVAYrXadppHsNEsxrmyGVhyFUbMQk4byLSb1Xujmj2hxiiBwgFthPikLopovD",
  "key43": "5kTfQ1QYicW5sPJ6XWQg6H9buLriwCYhF9E3zBvctk2Kueno8RhV1XWo5C65uhpW76HbxvR4H1viLUjbJkqWKHUr",
  "key44": "3tYwc2BPKKPkkfMZzVJVWzzkY9mRduD9GQ8YbX6vz5dnQKUGVUcvkA7Uwi7Q5BVh4QLdVszYXx6kAXntkpGMTbqu",
  "key45": "2Jd921napodjFZr5o2D1TXkz7zGnRQ36cAnDSDL6yk6iYLo4cu2e9hz5WxTEHNDmJVn8Su1YufmKrf8DDpYJPG4h",
  "key46": "4eA6Ncq5JjzLasaYeW6PxAj1GeXo3qdKsgmbSbyrMqJemPPErQYa1bWoMj8Xob9Nrnz2oSmniC7BKEs6B6qf4iLf"
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
