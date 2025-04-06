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
    "57MKtnGuVPvdxHs8YUMJx7QCkJNQwNcvxouEphjPvditCX6KrNzM2QG4jnAAXeEtUBJhaLg1ENdYHDJzZkm9uQmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8Wwj7p1XGEqHG2oeGNqVeQ2mtwxkWiYiE8yJiK8kBPRu8WaQDxAS9hmcAhvigSjixNXBmrnTpJ3pdZJRY7ZCM",
  "key1": "3pXEseAKLoGn3YQExR27DB5WHfLX5g4uxXhRKXd5z4T4xCbprKeaSsHtJD8Fi4283med18DNNDX9zHKsJiKVew4L",
  "key2": "TTBTgUwCGopFnyby4iz4nWy6zR4PYrC1MwjHgoYGs6Uus2ZtJ9E3r5dX3aqjpopzKYGDkyF1rn9H5Yq6Uyg4rwN",
  "key3": "3zMsFuFg82G8Ja6qz1XccgAUrcgZCbdSincbfkCnhonLRcDaxGkso8SvkLgdf7cAW564toP8jshARa4X71i57xuw",
  "key4": "2nXWmHXdxGuMDjhvyxbTEZBxBSXhWeKQViZ7eikzUn9RkCXCg5EB9EQE2foYxftGcBWgi1UXgcvFWJMcrzZ1dPtM",
  "key5": "58iGBuP5NhN6cefnCN13gQ3vMgizhtgPexQ8n8Z2E3qMgMGJRi5UkaLbBLmZhujQAyJTELUfJJioE8yGgDni1Wvu",
  "key6": "3woBAzvJo71xysLM44KSncMRMW93fXSg6iugj1s4pH5FsfJwhpvNAV3HoXuvUNcvUZJXvePDD9uq3Nqth9A4pbqL",
  "key7": "5SYV8nXsZueCRWvS5xCp9DMdLFuntREF3895jMM7bifnJXLeehRJmYvBXLfNvAw1xwGkPUNeLJag1XbBj6WX6Lwc",
  "key8": "5Rp8nB4rNKFgymBfugu57zVuijRNrALBBZojiP16V3KaPRuUnYYMMC1cmpNA2s1HgbY5bSRBrUsHBQoAwoEh3jMg",
  "key9": "33c5dp8E2WHihiNwPW4vQy7qor3ssWinZas8z7VU5w9H1f6mfojyDdQ4e7KeeFrTiCQvqDe7jpjvb2oWqL7DbxSm",
  "key10": "3ZK2rnATbR27x3FdrJgNmgfV8MBGD1npKVvHX4fc1ERVkoqGzcKSfNv2RmWPHyTX7DqNeeLc4GRdyCwcCLwrQf7C",
  "key11": "5c5eDRh2xprPmAbj9LoKeB6ZvTS3azM4BRcdGvxHBKFbpsz4X7jquNA8HDPiofien1PVKAG5ihiPKx7WcpatNERU",
  "key12": "5iE7TURy3oNScMervdsQ1EsbMRMY1iRggRN1cUmhuMsWQUeggp5DpTLHPPArFHEhZ199NkedSryQ2rtcMkZExzwB",
  "key13": "3JXhLupm8JQPKL2Uc2WEzmcmspLc4sDj6gLrdpmPdXUJiTKsJi5UAhodWtdsKZT4n7cbcxhAao7u86LdF2fdSwpt",
  "key14": "4nrmFpYy9j1SqgKjCmsUSngCeKeuFAs4GqkyptFq3jYgAgNyZbqDtJk7X1rqzkvyuFDFfTU53EA3Jn1DQibozcHL",
  "key15": "4uct4Qgw44z5vzEfjyQ4xSZ47t7iRecicwKcMENz6ci9BV2dF4HWwCXVHv7m2fBDxT79EqDyZVy7dHcEDUkaHpq2",
  "key16": "36KUbenSQqrNXWG2pE9B5avu1MJvSCn82PiNNuMASFr5EjuJFnmGkEBtkQpBAgRNBoLMe9xMB7Gf8xTDezm8aKSQ",
  "key17": "BvbYwvDe6ZoNuS64nqsGMUkbkGkGftKZHQqt1jmoEM4y9CknaEAhDeXKMTmSAqV9h5W3yuGZh5e56sS7sqqshza",
  "key18": "2R9itFi3kfhf9winnLdw4rS8AeEVK3RLZ9SroVK9FEBEvkyXwJi1ahGQvFXYz6uzKcQt2ic4W7Ft8A4WreFiATMr",
  "key19": "2DyaN5JLZ2xKAsYy19PP5pctKb5Q3mWeyiZV83SyqrXhkEgNTbgMosMgFeUsvPbscCLgvWq4k2ukoMx99mtxpHen",
  "key20": "66SrepnjLb3PVhFUvA7j9UgURqvxDG9W8x5K8KRaLtTJX62B7rVqcLECGdgGa2cJqECYL58QhZZQYkPkUaZobWyF",
  "key21": "3tZSX5tEMZVecvQE2P9k5gM7BbAUMN3QQgRzeLgyccfE7UCiR34KsZXMLrdgJmZcikUuKTEeJjDUTSKHFEiy8FPS",
  "key22": "3MzsZ8ApBa3QQHGu7LXCZiCKtTif8JdPHrcQKw6wokSHRexT6rtdDsutuDAZoVcp7GAcJa5mFGGRFWqFNPyRiPJT",
  "key23": "3vG31BTW48HX4t8RMLZrdPi5eQCVfWX1Pg61MvzMb2aVZ2eoqNhEbAHDP53ZU9p9k3Bvp8YkuSGLVzMNmsRY8JWV",
  "key24": "5F7CtQQDdACScuTKUzqyK6pCxpzxGBWKNbjjqjT6MduBYeKgE2V1eTusHhNXkAhLg2Skmc7kXvFiQKgwjYVb53fw",
  "key25": "3D9d4eNmiF22vf4cfYQcspUPw88LpRM1RMuTdZdvYqy3op7oisKf9hHjSh6j9ss7pd8EQA8J1to1wwS3vrkWRaPR",
  "key26": "3zAqrFsEVKDzpRUDnbdoTxgdgFAhryN7Pmd5GHrm9SyCGeJ7VCsEARGmakLeyyLnC1xRxaXiWVg3osdaQzHxsb9F",
  "key27": "2nbuwnCVj29DK95Kv6niMZjhP5aUQVtWdyAtba7GUMJ621MzJyJeMcrG7J66U48zu4dLZKpq1SinVm5YKP3NcaUW",
  "key28": "2AMFqAopUjKLdmzaCD5z2nqLAtF8upqrJHLLvJBMjfFUMtrLFccbH53NJ2fyRp4nW6pexdiRsqgeGj4X19RwYYq6",
  "key29": "YJ5nE14RmWqAavmccgyFjx2QHTGAz37UGwRszTPNXqWLt29a2yewheAB1LmcTPPSuAoqZzftri8tXgPnM64ox6C",
  "key30": "5YunKjQTEqBW6KMFayQMrTFm4ayA7K447LxfRGc1qpF5JxFmjs3uyxh5QVjcureQ82iL3nR4wAaMhgi3AZR6EDR2",
  "key31": "4xGHWoovspcm9M2Po6s39Sf7H34JKkCZ2FeH9HBuD3ezHB2LRg7n5tmMDayGCvtaYUTX9DWVNmeQHpUnpY6nki3k",
  "key32": "3qoyTvwPaRShUXXbkXRhEhBopfqG5zf4Wka4N9W2wGZGutntsGWhP5mzZAfCRv9DgZ12qMHLGsqP2DbhCLiokBAm",
  "key33": "61x9T4PC7T9VDvs7uT2RGbKAGCVBAsa2Zh8fBbCM8J8ev2EyTwecyoFeYx3yRB9ivWFbQt8TykTvzLyGrkPQE2Jq",
  "key34": "VBUfVHGUxXXAbndkPx3tVuKPetwqxYxLcDAUB2GEYv5QrDj6s3t4zBrtNrKDfDbTS1wThhS5nN8VULs7nBNweAG",
  "key35": "5vCb9X4a34ukCnN7j5YhZsuUiVVYCmC4iYZ5TL9pz85j6qtn6ek7fPpECycMMUCkwui2AuQXoXXGbLUoUh9nJ4rN",
  "key36": "4kVtt7N2EHb6CTwfxn85o2v4q4MSCUS7gs5mciAq3apF98rJZn2XuGEHsfUmaYDcWSWRLuD3z4Dih6Rp2yTQ5MXM",
  "key37": "4vzewVTi6X1Fnw5UTSSfP3Uq5RwC3XifyfVNsdX7nLqmonYXta7LVguShKfx7yC1xdRBYk3z2YLdH4ipsqcNjWPT",
  "key38": "UGWw1qQkEkPK1NJbPW8GiMeYsy968ePfSTySYVyMNAz4QsEMtQpsAwdMmjJpSK94w84DGSqrzedoXLt9MjjQjVg",
  "key39": "h3LXRDy5q9krfBNkPgnG7gm6iYkCX71kb7Mwsbz36H2pztbrupVThYduZqyZJYqmepEB5wawryKdNYcbN8NsR82",
  "key40": "3xWxe8A9iZdM9ggRoh2a59X1rXecyg3rLrHCkhHVWerjUKc2iUS3xCJHUKVN6C9zuiE3qotJQoy1h7V6WQyFwzkS",
  "key41": "47RDeuppExoLuK9cWaGiNVokeXdvJvLf9dVYK7t8jm5S2vBJT3xjJL6AyJ6yB69xC7VHp7umQMpT491T4oBhs3Wb",
  "key42": "Lmy1W97rrK9tPrbTVWD8UC964UPoJHzA9aRN9YQX7ZLVC6RzJ5UgJjyFQUWbVnBpSMUqGAJ3cWcDnQNGne7yt21",
  "key43": "51sCXUu8wKUZuzpLsU3sfJYy9w7FKUfz5Xc57ExBQrSNrPSqUK7MbPKhx6oKHDSwYgihUDCbVKbfw2Ps5oRcP2zP",
  "key44": "SoSu6CWeA6Qo7jJG6d41L4Xe4KzwzEF17CTgJzJAEdmLC8DD2x534E4AutQZ6U9xwJV2PH6QV1m4HkuSsdzq7gv",
  "key45": "3xEcKstEvyhfRtAA7s3N5gaCGxgqxdpjuLuEaPu6cJt7bXKjK3aHemtUvtggGi8iDBVnUsCdKFnuXdwCbqUtoiAw",
  "key46": "bLhC12qiKcRMiUp92UWrc5mSg5Yeph78EE63RE7RcKKxVLvboVYQbVwhY2c1RZLWtasBgrGpTCWxGZJJnpx4qGt",
  "key47": "3oBEWD2vUCx6NXwBYQuphSy3ocntTYz49czcj4JaLRwb62WocHHfG71cj6R3Z8z2hkwMqy8i5xiayt81PfKeMmxW",
  "key48": "a31Loxy2GMw7mWEJizvJzowpRcXzm41wbED74BM4QH7hZgBq8Zs62RCPUpfn9Yohi3hX3s4LLJqriFk3XzqT96a",
  "key49": "3ktpLLMfVoRk1L8M12KoiiRJSN9P7WVZ8oeKgdzDNhbwDUqmNhEMhTsVL9p3Tng8WP7HgAaSQtPYpjuBvWkcypZz"
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
