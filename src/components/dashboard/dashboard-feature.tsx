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
    "4kuuyM1SMYTuWiSySdnmaGQJhJmE1WjFQinKH7x1sknRqoPRZDdZtE8EyGqbQVaXu2eHzSb9bbTXf7jtCB6v5y8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYoE61brRwRbeSzkWMpca1a5aQtJJhQckHFd8Z2KB6ZNmA4qTrP97nRmj4ozp5dee2mFydqj9GvtyBhq2As54bK",
  "key1": "byeeCsXy9ankG95WNQ5ypJQpacppopR3KGZPzMVxuJK77PTkD6bw8ZxDPTLJgKZQmzkVTAtDjNqxow1QMA5KTKW",
  "key2": "4C8D7nPfYCMmm6i4Ed7miXvDrg7zS91TEiexJesJR2FQLVpJJZU4PszVHkWTem5yvPytgXcbVHHE6jFcau4uD2YU",
  "key3": "4zjeePj5d5Chb12cJAMi6c2ATcKc5BdYJAKK9G5vGtNnpYxwgexmjAXcXccmxCYRf7arStX7rBiSrGfcCPx7sPcb",
  "key4": "4zCygeCsxAnXuGN8h2gjKYbhifMeEsa5FbMJiKBDVBW7QZ7CKBVmZMjpDraa6HWWbiuqwkiC6spxfP6d6etcmLS3",
  "key5": "58cRBaNSMr4Mt2CaWQH28XCYHHVNwMFKFc2nMhBr2tuTEt88E8fkSn89t7hhCnSdvHNxRnJL5UqmS7exq4izHDft",
  "key6": "44kQFWMSiYM5NFgfDJvcTqQnDEP3XvudmH74NRw8N2hUyonTpAiqXShq18gtMQhPKKGia2hha5ZgNdMDBN6JSAV3",
  "key7": "4bxgNWaJbGaiguvMkSXhor61R4Nb6BxyWkMyfZmsYNNc2ybr74ycWj4XnEpPfNcYXGF2e5RXjpxcVAitEa5Xqfzf",
  "key8": "3t7Hb82rfR3FR4NvTnFCeJ36giLftLqtQvktZemrMHnJjDJN8vteMem1qMwrLdkeKQaprvzXvBi2EeofNYH3ZckH",
  "key9": "3UWMS2vF6NnTfbchF4ZyxM4ABERp9dJktMC534sCiXrdV1xRPnXts9e4ME7zecnmLuoGToVPMFTMBos61g69CJT4",
  "key10": "3aKNqhSdNcPSm1qdj15pAxkLAiL79mT7fU8wgZ7UqdKRsGeJ69QY3HuHqFS7P6u9LE8zyWQCdzVcWUgVD9ttNjsC",
  "key11": "58D9HwgexaBipb5oqqKpeuXiU4BGdyHYNuTh5wrjeypPwfZ8zGH7nGwCcphXuFYh4XDMCw6RhDMyU5HKQkvkaE3R",
  "key12": "4rzkA779Tbz5up6j23ZHjkMBgViCnTf3DBk2Hb8VwjM67Zf1DmAT2yHWChMib3rdJzqT8CiwD5wxeT9Z5YL5HHsc",
  "key13": "5cLSNMqDECvMstwGaTmQJ36dmZJndbLYmFREs8BPsi1WS9cM17nPmiQeycU1qGbR6V1saGH7VkGSP9A31EkpZFD6",
  "key14": "5F8JLs3bk3wktVQwNP7wcUTB3UcAhfUuYFnzXYTVZueXmiyzS73jT7NCNV2y8pnThi8ieZt7Ent63BWzG51uUCCu",
  "key15": "2NiWZePJBibLbwAB35qdsmusDTFKqAu8QuSWSwDXyjSCRcDKyzkMgH61JmApDEFf1GJLQz554N29fQg5m16Vd23s",
  "key16": "os2K2nHUVEwgca6JUTdzv1s1TXEGR4ZRQmQsi7WP6kF8cvVpYErVc5bYiYxaMzNpxQCBLqcdT3DxxEP72Jf725Q",
  "key17": "dN2rurtjskrA3PffiQixPhqCrrLZ6ktRsdXUk87ZooYARnwp6AKNxww9VJk7K8YUaEAYj8ntPcKcMHAX4Aw1XsU",
  "key18": "YQzKoF7KLyX5PrHxzkZ1WGaWCEqUY57zrEmZkciXJqt2aXWfFJpTVBTmac4Sb8xPDSMtGUqtNQu7VuFPAAzNH5f",
  "key19": "FPqEqD5XACzdoPd7FXsMu1t8f8PVH6wZRk3uL77A1zoTdEmEXBNLrUp9utAeimpyhaMoTaeumZaitYa3LgR8gf7",
  "key20": "64zGZrqjrtMVkkFax6jUYrdeMLZXJwVt9cKq3sbDBPoG9VEpGUssN37tXmFejfZg2BMLZpU6CgGMVFq4KswqG1N9",
  "key21": "1auxUxh2qMLBq8bm66iQFQLGE2NKBCJgyVJXwwrKtvYm6qWdfrUzPT3DjKebppsiTvGYGJ7nhrhU3uF8aDHAE8v",
  "key22": "4EGwfbTbRw5RM6h6jxRQjo9j5tTHH7mQneeHtHh6bBEgaje5UB857i5xV528UuxCCJEzsZef1W4ztsBNRj4DhETB",
  "key23": "WxCcMtw3reJh5EoC2P8TvJVnDfuCMP7tQhqerFqE95FULZoQv8bTW1xnmN64ZifPkypgvX18pnxBdsV1u5XJf7T",
  "key24": "5mqer7wAJUCedRY5samZc87kNaJTKv4854bUPtXgR4i1xcbLEfhXL4thPJe42wYEisr3GY6faDe6VUqAmRoWWxDR",
  "key25": "5VAKwuSZ4A7TZb7kFFuQujByKL2ejURfar8voyUNjyrh24ByWuDtuj79KNPcs2VKqTCKKTpZ3PzU98gyXHBBtvMP",
  "key26": "297RoxQuzum7LEJnM5B1bQDV4eTS4k9foaB7fjj6NTnb3sKEzjN8na9jJe7XtGivtf6XsUveDrgUpMigEX3664ZC",
  "key27": "3Kfa6ttAZY65Z3UsRBR6zcXfR25d2E5oSJZokSxR4LPFx9vdKkqkHLE4iH545UWwN8mhAJuPxfu9e5uT5YQhYzQC",
  "key28": "3mjfqHHaY1rmZJ5NAk1sW6wPf9nYwX5AB6WmVVBBFwYQCscL3PBrb6Xh9vYUDQDAnfYtu9i3W4b1eFzGdYWxcE6A",
  "key29": "uBe3Yo42vYR2bHyD1d5puz8nhuLvtw9U8893UeFnP66Ar391Av6yYtUAH7XyrAKfiZ4c8r8bAmMFSwfhrnhF53V",
  "key30": "3VonMKpertRDi6cYqkDZmtaKgQ7Fm2cSC8rsw3N7tfRadsHxZ1NfJtso4zRDYXN3QmucDfQQfQ2tvcajw1BRH15W",
  "key31": "5MC9nnTY67tHCn6MPyRqoizYpmiPrHT3cB8bEACSXGcqrfVF6YjLvb3Av7af5B4MCTdbUDppzAo3mpM5Q5L92mWB",
  "key32": "5dYU5x8aZrso6iSRCkDv4w9QU71ATmpbu3MyqkVZ6MJ2v1BKBKxMcFUQWa5bcVnwnNMQMD42iXXj5yga9rY1mn5X",
  "key33": "4Gf4jBwppd65HRbDLFw772uCcv7ovFEesoe6gLaR5G2APSKGP7hkN8Exjc1ULoJhWznHVp5rHRoHZZrTikpXSmp7",
  "key34": "3pZnQ2cardZqoBK9CntgCpvCSQYeLFJHporNYUvxoBbZHB1ZDSgNPbSfit2so7xE6aKqk5UL7xo7pTviMQPtHeA7",
  "key35": "2g5RWE2uwXpuXLuVseA7ycRjb4RQKXup5eQMtNHZyYAJKDKHxeCGnYFXXTCY313UjcMPtL8cQv64AwKeVKqSnQnZ",
  "key36": "25MoNB3qcXY2f29ewT7gVBjQeQPLwjWTJU48fQ2dRGPA7VZKEX4R3bHxVTUr3N1jQZ8DMm149NYGZN8oh7BgfW7X",
  "key37": "4BjXibGnSea6YsHNxp44vwP3VtHcEERZak3U3LNMb8uongskbVAZRrQdBaNDofQne41XY4fGZvd2X1zcWjSiCcKk",
  "key38": "2P7Ny9P5tu2Jop5Xd7t6dXQGLSumh6ncPAKHaiwXZNrpY9PBhtDnvbdoedFtMjJQNdp6VfCUChfigMDnsonZzfAc",
  "key39": "2qShzH1cWjqC2L5TZdQUduWjSJBe9LB91FXzr5vmatRxw1tKQJ4JHmM7FYJJhMKo1BC1C8bv1P1k5VnFrPVhfhsK",
  "key40": "27yWw3VqwxrqnKqxeTcYA75ZanRczXXEiKuYfARqJ4XDG29EkYHkXcDJA1eWdCMS4PeiL7fAeJSzrw8fXcsUHJUH",
  "key41": "4CYHqoXVq9rv8D2CboouTHNyeLQPtrQU4xQNaxPgvmXNkFkB7uaAfPYzdP1HBVZfaNSpGxiWZxCYPu4gFmBk77HM",
  "key42": "3bxYuB7sZSdA8acLPYQXtQCxjR4wFXtCwXFuHHiZXJuHpkqnQLm97DfsBALGoZtwsZJY5EWa3j6ZrJESr3Drc3nr",
  "key43": "5DPwYUTFQMuAs988snbA8qJfvKNcgBZH6AYpTDTCpM3YfojcafG7iwsh5YBNMGGJ7sA976Wgf2QyeELAc96jPAGJ",
  "key44": "3JKg1San27qvC29ST75XfNAroeAhKPFYaiHBzFDxfBMLuivzSAV7CsRWNpAuEuygtSxS5qhYrrienfch9KegfeP4",
  "key45": "3VZM4a4GfL4AxPbtE7fP98MY3SoyFsZw9kFLfGDLSwPCstvBumHPVF4hogUvXPSVBe1bohRZ2nnmLvzteqUGBYxp",
  "key46": "4Rw19YTRjtts5bBoszjg8kM1fxUvNgXP7g7PTrGXwAno95ytFjBpu6rZjZnkb2N3Lc5RjhLzvG5KTZA8ckgnft9v",
  "key47": "47kL2jZXGqytWeN7FEMPWpkbaZryibhBwj3Pz9B3xM5QGpb1EPqScCgGDfK3vYCQttERQeQK5Cz4gh5yQ9NkrdX7"
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
