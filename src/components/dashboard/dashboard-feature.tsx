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
    "24njqctoLuQRDWg97D8qrgs6rzPSyQQkvkSpxUj2DsbAbLAhG9TrzaDCNN3jQY3wH8dzBJTPriJzzwBCMt9omiky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p2xzo6kdBMTYsiRFWRFVxK8jE7z6HYygT4DUoq59LWa8tDcNjQ1aF2yJEFjqx5jdGsyVf19wn1aM8vLyy8quEDA",
  "key1": "5K56wcPNKgkToho6ruZHyPTLNSbVHmwxJp8izdtkkYYMQbWrzsFNPwd34yguihomfBfMYat5dB1RacvPy9WQ8Hzf",
  "key2": "63VkcLviHu6Qd973EaDve5yQbEJKhc7zWxwBzGVvevdHfwWZQewtBcC2uquMD2FqGomdfQWsCvxovowjBRU4KAbf",
  "key3": "ykLaxBMmTUicGQaytuHt1VbvQ4PpvUCFQTjMxUCvWUTYz7P2xiCya3BzuQsTJ9p28EksncTaX4P7cDcCcBNWkWb",
  "key4": "ogYsr4FvvRLUQVTxkmE67YGRae174k18Dzq2NtcwpzP4LgS6VaPLq76EgoNLuovbGLa8sKWWZwNWa7DBgtMHYfc",
  "key5": "33Wd8TMkYXb4ydggfqLE4eGw3YsrexpUp4byqF3hgxZ5iAq2EzzGxZgizd5szEytCYXhXK84YiuDs6L8BmyZfDm4",
  "key6": "2hFKGu51Gzvwrp6rByuG5BnpBL3fLK4kRau1svYsgLUCXjtd37RvqaTWn7wxcYFH7eRPodPksS6LhZkjFY1hEjB1",
  "key7": "42Mm4Xo1ZsoePq2sTpbhcdnpz3b4V3h7GKCJWqeetnfWSoy19z8r5eVcUjfwpTF92FiEwgVqLyTC4qGbYBxCq1yb",
  "key8": "35VTnU7YdaCT118BRi354anB7imtiHGocq9BnqwQCFCyATQJ6XMypg8x8KTvey1nhpnW1zE4wKCgrjgkASbpMM66",
  "key9": "1f3fJGU3xhQxJSq5zWUED5Qu5rrdzgdG1xc3swZvwEzwuHhm9JjszkuKaqgYDCnAa4x5Hc9jDQyWn6EwKghpuXf",
  "key10": "UzqjT3UAEdFdmZJWLwA8FYTxwgz73QTJTmk7BYwpVA4TMMHDcJn4reaojVXDTjAkLUK7WRqfAnFo3E4tN82r9GW",
  "key11": "2EjbD3xNup4ppJpjpNUT3pDpmpDhwenegA8W5XdFLCHn7j34hu7csrMg93tEne376L69X254bHPCpRJK5K6mC5ge",
  "key12": "4dEkmcnrt48hqAyckDRc9725VwE58puW1h4cQJfoohb7B7oppqrPjdWRDA9jBrRow4GMQCS8kMCC8H12FiKvyCdG",
  "key13": "ycgzBnG8QxGTjgASRUmRB1AhFi374MzPidq3ek8FjvkUgxnR42kCXww7TZ96fWMn1pP7xWcPDTbwMVWhh7YvFSg",
  "key14": "2NcRMUo4t4HxcASZV2bUgyDDhGC8KG99TBwiystrSAuV5CY8dHMFZ1s9DMTYv6dVQ9hhsq981Lsd8JYLGww73UJt",
  "key15": "5xqeKA7ToqVTUVax6kNVbKDhkhaQNDHEZ6Y2oEsmJvSE9c6usTSCSY6hus93XpavYg5LxPC7k5fdEUMEq4f7SwGe",
  "key16": "4sZvcEKnm32vjyNHVNjAt1nhfsXknaew86vjMuHh4ruKRbRFvhhgLJHNLX7f6apMYHKrYHf3UQo4kPVaFySoD2wd",
  "key17": "3tBBxuHG8ntjdWCejJjYyd568rM5pExz7i1CtFbUrEzPZSC2Yzq7GuZaGVpFoiannGWiV6CNeVjZGiGbzoc9Hrfm",
  "key18": "24g6X1xbMCSg9RzV88THCCJAg3cAGoeFbiFZk5afb4yFACgf2cJk8JV9ffuwqEuTMinpzgvoWwMCA1tCvqDtSKYY",
  "key19": "q3GD5mTk1G5YiS4EqDnPZmVrNtRq5iEfayPhEmkNaSqi9K6PfA67tjsqBvosrAqiPS1SL6sf5pHmSEBYkRfYF5P",
  "key20": "F6vbHXbcAb41zyDn91YMmBCdee1i83B3CoP95KjaS66b1PvfJQtUGNejsmZPsqLsFBr695kDrKJ4iNriMRkd4JL",
  "key21": "4xdrYyVYgvaoLAPe8n3m1iuEZ7gJ9pNUvK6in9DPkfrKanPvXTaY7S5NfVPQT3KdPCbBSJEsxLhf3quDhHoZsV1S",
  "key22": "z7DXrDD3HTfTkK9YfzFFaTq48sHwabRFiHPMjz2vXarHzCotam2aRHNwmCHrWoaQ28seXFoDuKQQhc7SgNEpyAn",
  "key23": "5o6j1RMUkSH1h96BCXj77im7DZcgKBNvwkFu4GJS3uKCh92F7w5kuS5MF3UCZwiEgQYvHvkzKmU5qPuhmL3Hk9yF",
  "key24": "5dzPejC3uxr14vitemeU7TNUZxsS2ZXunqmebhu3Z5Y4Y5t54DfdgkEC9E2Z6yhwV9xJr9oBJhN16Aakx6ESFcUw",
  "key25": "4ZHgbRygGK4uAUZc1LJwT11rNbHD6wZ2BYtZGRwrbyxSTZ9P5qZytnhdVbnrPoGQys4VpsjaGUTAkU8SsiPwsqrp",
  "key26": "59Lnj8yS3qjWyMZfeTUB6QBA82StqRxxCUFWXoaWjRr3ppx5y6uSq1yuxSW2BJmCch63DPkdFd412RRqB6JgaXsC",
  "key27": "2vMX6qhqS3gcP1RfsKf399yLAUf2xdAdEcZiaMFnPNNG8V5wFhxWXbTXYgn8Gm48V1K5o9CcsDUDvjBiHkCJZCVY",
  "key28": "2pykSMdmgsUfKCV3G8Pr8T2Zuu1kfv8aqqRuN9cayxMEhDLw3frniThenn3DJq9NHXKvJTLa36rM2nP6TEFcwcws",
  "key29": "4qPxVNAgYKGNBYXVooHZSjrBispVdAR4LcPfQXY6esJwm3NWp9d3gSTKmPP3aiWp6rkxwPGrrtjTzKU1fEX9NZTF",
  "key30": "5nvo5N6fKmAfwm9HKD7HNtycPTJ2YQptsGqikApLRb1ZijkokFbntP1GEb1sEFNLzrUbmYvWhHKyb4nx6MvvUEW4",
  "key31": "v6qH9NNDWADTDnMKwWFiRgrr2Y7BM2euPat9AVGerEnD3buwfb5J9uiEsBddNvcq93EX9gLuiZajFegtGoAxAA5",
  "key32": "4epVLkrV8R5DxYKcL7ECRM8V3Kuuvhs7HFoKC7A7sHYwbyXpQkTaha8xtJzpiGvgeLE4CEncmjsWSSQdi3ySkPXk",
  "key33": "ZnX6LAdroAvjdsSqDYviodqHz5ddZMA2DsUKQrwkRWdBDTZiXJsYLZjekVBhExG2HzptXs5SiX8DF64o8rKpM3N",
  "key34": "28AG2EyYV4nyApkyXkAjAcZvmSfwKvRJFrWVrM3Ry3cij3XEBBoL87dcz3c7LZQncnT8ztQM3ACWRnL9bNGdqbVE",
  "key35": "3HkTTGUetEFGrq1NJezuRcAZFD1LbBU22pN6EMuioUcABzw6WFhtuB4WdWtQ9AB8Et8cKRHBwfnRoNR2Fz6WfS6H",
  "key36": "BSj7WyAob5BBHB4obSCzEMKn4qL6pU5PyApKgj1pHKqYqAUDWwuinjdrxYfEkJgw7dSAreAcUeqGJhEUAtNcjK3",
  "key37": "4GXM4bAUpBSdvuzR1uHsFzk6B8Vv4oZJyGK1fM17ia1WD3paegkH7gzbuufMBoA9B5DzxmT9UFqaEjMNZafCskF9",
  "key38": "5znvHeaUAFBSibstdeybaiNE8RXiZHqwFVgSTf5cJSTantqsFwoszePJpGq3Y5EKXj1mcr5nudXDxB49QSpY37a1",
  "key39": "33jEgCur3JPL5gnkQcwZ4oNwrtkAJFdFHwNWyp4PpCvqu1Ft1R9ZsicPLQA2yN82rbJjgnjbNRwDGrFDhGzbcWhD",
  "key40": "5V6ABUpdkGPDApnF46MwVfz1zfoKR7xmaEV5MU7nrV5CoAgd4ZnzJhHJwSzPjjMcMbWMkZKXXutpV1Ya6hgzwuFU",
  "key41": "59KQNRBVGvfwsCuYfrHGQCtYh2VWYgtNSFJ77nQQKBVEsgnqYkYke2Bf66ZuuL6JBGWNpN7iR1owWpQuXGpZCNxY",
  "key42": "4KbiaLSzbgnKqCB8iQM9KpQjnVjJQXK82gpBFgvB5F8ktUNXJfEe4XiAHi7zbqfZRZYe1Ep9nXtppbz4StvwvWiz",
  "key43": "3epQPc5uyrtyx3rzfZEsQ4fe4ZPjgje5eWQyxNCCLz9zEPXrmLsg1yh6h1c8KsmV7mTHYgCeMXMa2vxX8NuqUk5v"
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
