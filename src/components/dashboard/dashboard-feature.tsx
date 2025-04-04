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
    "4evEYETuXXFpb2a3bPFK3m6niDAdQCpHjaH8aJVHSLeUrz7WutRHMuJ4fs5UAWCV9HwZ1QvYMwUoEv6Qh57wvRfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seDVKNFqZfKx5zyN2VBUjFUqBkcdRsERvzs1Uo8vaAS2tZGovedpg8RcfvxusJ6niA9dcoKGiTtDnFJ6GXJHD1S",
  "key1": "m8U8yninC1MHwZ6yJB2cGWdmaY2gLRhoL5ckrdpXMmMV1x4K7nRiXywSZjZHHJXahVeXysZqARxabjubHgsSChB",
  "key2": "NVSNi8dGMwVQEy7aReWGDoqXHxmE8gXnoRcoLopEkqJJuzGd7dqUGU9KFuAPiR4yYVc8Acud631pdPuDcBB2vZC",
  "key3": "2zvnsyvq2m2Y3hN8Y1a6ZogsHSvm9P6uf6Wwie8kNftvNCFPSseSvDdXLJysAbqGuGVvWRxERcGJ68yrFuYWDMho",
  "key4": "GdRX4ivF3RedqWPbyayXGUUyKhNXsDeNdj1hrgCB9BUi6yW4kWvi9HBeF9G9nyYLmz2422My1AH6imnrjfkoGAJ",
  "key5": "CXqwDjP1v3epbnL9ZoZuekU5DrPVX1QQbSFUxd1ccWQeg3FaCQwf9uxHVrfHrHdA6aQSWnXETmDwMa43kqxg7Pc",
  "key6": "8RiEm456EiuaPPrr5eArAbYz6HnW3ddnHifcw69zrjFDSVvT3so1pb79NHr5maFNvtXp5XkrjmLGFMtnmZPx5XE",
  "key7": "2VWgs3X55u1m36ZpvjdgFY9dM2gW5dY5VsWkgXSfMF8gfDmRVqbdCeagQuVbaVxvHTkYcYukdcT8PhAWGMKWRjRR",
  "key8": "4qjb9nAVhekEZWp19mvUxb9DimaHJ3AqcZ3Cstrq2w7XbfZ66SqMWvpL6zkCuDk3Cy6fZHFyEazGHNLyCNarU2i2",
  "key9": "5AY7ERXsG79TgQqkFsdRjZNymYVX2sLewotAhPAVQZEya6ejMFdeMvY7sMHvBtcJeTRTWF4dtAEbriAT6sJCNgTy",
  "key10": "UNtoT47zibLGQjgLW5EW7fdiCump95CED6Z8jEwG1Jz9yPkTtat9iWFVmn1w7YSXLfNYnyqGqrp7NxdgqwXRwiu",
  "key11": "A1en93TCgB9FxZ5USDgZYbs32FJboyaZ1FaKHFqd7n5CsbKhrERyXoTapSBDgjEQ9Sw6RVd7F9mzCHK6nr5v96W",
  "key12": "3cZqk6vQqnDCpj1iBBAMA3UhPXsa4KTMQGvURu4GhJvye3bw1t6t36MGwuRmk95r1avrboTfvcyxvZcDiiSgJAdk",
  "key13": "5NQFTqFxTXojAhSyWAAMckH81t52UavY6Q27bQcGr8pYcdzGz23tHUoWQcT1wQN5wHKv4PytB8VLdhE1J4A6NHYF",
  "key14": "5p6WC3HzEoLJDszJkCLskSKb4MujuSBHubZrUJw4zmAqgLmYJKDi48W6A3coVDJAmMPy7ZFbnfVAkt33FSiM1Vyg",
  "key15": "2b6YC1jXmDZxgTiD1mbqAPjq8XAHMr6YGC4kTr1fKNcdDqgwH12Dtb4C4e9Lm9iNrUe26Q9CHjrbmTsNMahu8aHT",
  "key16": "4CBJPiFXesgCjeVhNePExavYHE8o64YQGR3MNT9b8MqqeE8get4uEUMr2p4cimnuBE8rNjfY7qazRxJkNAeHk6RB",
  "key17": "5uCQzKHNtT5FvkYUXeB1wBVGjMfvbZwkyAAuL3evyYZSxqmZ31Y77KfSc32puqFpBnjMCnujLLdZjCik9EZak9e",
  "key18": "5Vb8nDKxzm3op3HxYKjMhxbGryWN24XSo9oRk1KffWzDPkiqhxS5pVtkioSYw5kUSwEckJBKCKzVBeTcvn8GuMwh",
  "key19": "5zz4UCo9MD1yxAUe19WeyihAa9NvcJgB9fcbRVrwnU4KZqq6FzDEMYdza47G9cAhnf5zS2Rv4pR6Lno38Yx9MYrA",
  "key20": "4JeEbAiChgd5kktPiaowrkwezTMymSgG4Xg2Jox7JZJifee6KjuB3akE4BKcnhJnKLnxzkfbbXJQmGFEB7aABBFv",
  "key21": "pK9Hrs2ag4Pk6sAggHY8t3sYVDZVHpkkXyi2eW8SKFnKQunTjWVbnCdpQWKuiASdyWEnPNwqmhzrVm9Dd1Tmtgx",
  "key22": "C9huQ7k2kj73u2vf8zfycWrTZBYnCrzgi9FcxWp7CJmPCBvTYBEtqEJPFgYepkoCdAMtcLqPsBa8JcNVQGJ4Lqz",
  "key23": "5NhPjKZD9x2LiGGLWBNv8g7Jx8wep5f4ZS6VcRFuoPAgfKgNztsWtSPnkyWeiwWHT4dYQmnnxJrCB5mQ5HnewVLD",
  "key24": "2r8GbErrnCqg8atzPdYyEYga5pxT2NuNdPpAvz6jhQmX8CDtxBj2sHUiJ1XZgok57PDE5bWbHoSh1TwBr9xwhc1q",
  "key25": "4ky8DredtUbVq79GUR4fWURsXDH6D5yeyHHbMDC8sbKCS1BQ5xhXcTVUdF3noPrVGhmbfyN7jzTqmMr4eEHLWt5D",
  "key26": "5vEdNvNCq958PHtUX7sWR1XadJUA8eg6jvPeDGJdn1HpeFj4EvogPYhSqGB99FN3kHBEj8sU9LnLy423cywqR2ZS",
  "key27": "4kTtF8JSaL2q3UD7gBQt72iZ9oP8aWnzciQi6epGt6gRvEDnBV7EZ2r5WrrHK1sHRyAw2rdCLRnNEYvkmLUgaRZ9",
  "key28": "3GVszNhNwkaYJUoNMnPQoJRVB1qeuxW6qhPPBX6SXg9e97sbeLjfdbR16HzUt4QhJXZUgKeuBjPcAZ3q2CvJoNaf",
  "key29": "2gk9brWtF3fdpA8kyR6GzAMs4T7UER8t5bNFsCqwce4eRbSwh7tBvUB6CCuy3gU4XitTtntttcYqRJrCiaSeDTnA",
  "key30": "2dPhQvnr76CZ4wmnEYD6Wyee3uZ8GWDS5ux4CES5e4KaBbLhPHAKeqp21B7KhFEjUxva939FfmQNMUxDz57RVv8c",
  "key31": "33NjKjPRxas1hPnMuvfMMvbY9bNgx8UfDnACAQ7vLjz3KDR1Bh8Vm4PGRpiRWXiw2sAHBXFmvW2jdmFd25sXkqK9",
  "key32": "5RMK8axDX7q5n4hEN2STZ7vmqVNEhNh36nfJuu8peyDgEuBBzHnnYqpVYaBNffeRdQd94DZQ3E57zAgpaWgJ53oZ",
  "key33": "2jY5JyK7hmVXxp1js5DXc5xYktqugbjxBEh84wYJqXJL9Ai7ZGZGG4mVMQHyNoXbvPEEwkGhgv9xwxPzpgD6BbPo",
  "key34": "2YS5mcsr6BnBKTk9wvJSatBsC9YLRmUqz421sV6NBdf8cdvxnQ1SvE16ctKoRKwtfAQE3BSSjUou6c2PW8pXLNHf",
  "key35": "3K5V9hKFfUwQjvdtXUbogWddsY8JfS76tw45TQwkXYDk3F3QmW5Gew5Yq9bSkRY1EzYKwU9CtNDVF1yPyMrdZn33",
  "key36": "PwhALZQMAamYttPioAWQ4PyPCoG2LjwVKB3Y53k4TxoTJcQ4LTK8s54BVGbjxC2DH3HTXnMdBFGCfVCMDRUmLQv",
  "key37": "2btCN2RZMMvzFej5hfWaMQxDJd7NqrmqFFZCbWDwmufzyWQXXnjorhcfsKvAbRZk6en89MNDoi9Zn9bcp84g4sjU",
  "key38": "66MoGP4CtawVCtC3CrCNUqcxNp9y2AschnLuiwuAUNwhCynPVg5KZhLGF4a37Q8JJ7eMERXz7qkidMiSF7yHXhcj",
  "key39": "4ETHTosDbbzXkpRAwb3CkNG8nsvhyoRq1YLXvbFM27CJsLc8dmpEdkwRKQvo5LEAys4SwsGUqAPRt69VoU4pJXd3",
  "key40": "DQx9n4SJnLiRQYUkM3dr44LKrkCeFXeAkv7H5e7rLjJPATCP6q9wQ3S8VVSpbUHPWWozb1rPPgCgbjKtJq3Zcyq",
  "key41": "2eqKntfwK6MeerQSNwncdxGRSH87EhihdE6rtSFEGEmZjEkXDuiyhKc4B9sBXWysf6rn2L3fZ4UJrkTEdd19dqmL",
  "key42": "62qXQiDvwu9HCtdr4B4tBfepJHBhTdVCzemCVeo27wgz9WKxSbbaEvMhFUX9vCzAH7ZyiXR1N2hzzMDS2fJ3zKTf",
  "key43": "4D9jNj6jQr7CNpLfpRwLwMvpPg1dDoAWppSbZ7Uvhxp8pCNUkTHKxqeww6Lsyjy4HadDKrKcLVjHrYXQBhhWu3KK",
  "key44": "gnGZxW3z61USTJ2vedaFZosvGKhEPFoDsgE4kxAn4bR1hU5HDyqjP2Kk8VwR9FXr8udySEA13a81E46sQBreJTm",
  "key45": "4ji9ZZbQ6pbmDMwjUASBZaMhttYaJw1YhQTq5RiUmwi4VayDuR8QisZ9YQC2PUVnfZDj1fYXhe8KipA4g6eCpkD4",
  "key46": "2s7AuqFQWamzBgxqEzxvAPn3Fvwjri4g3mDYi9bKPLNAbxnWozzrnkZ3KzCLqsCG1VZ35vUWwPp8f26TQy8XwPpG",
  "key47": "3UXq2ZaANEFUJxJ4fUdSp4AQeiUM3d5i471BH1tBt7K3NZqmp4hWqyistrvN6zKF8KWGKm76gCd9JAhUrSJnV932"
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
