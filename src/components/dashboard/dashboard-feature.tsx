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
    "3U3w5eP1VYDhQt2JeDpDZA3euJPaZPzL5sVwGYEVLJwZ9kfvXzvEGdxfWQ1rfecmVVNBfB65rwxvSy7PKRzMi5rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fcfbb41pE6T8d4f5qyR8viR3heondvbFw3Bk1HqpnqQanSNrqTVv6TMhX9qBX1giAevX3YQAtSXZ18VyHqx2baf",
  "key1": "47HC5eqY2Hgebpu3CYxvJm4bRCLEm9QvADF91aWFVAgWKexhkL8ZJnLaiwn8ap6JWDn2aF5W7FRRLRFBdBtE5VF4",
  "key2": "eZKxj2vufms1cwrsYb6qQ56SHtaWgT3sDdBFiBPwCHZxSjujk5F8HQswHJQr78cfuJpqrFvnuHBjPPLesNq1YcT",
  "key3": "2wGUvmKHpySy8g2cmP7GExsn9X1W5982yGGq6E5yQF5hgDbfQu5FJmw4ZWXZVqNLwCxnbLSiMnHisKSYu9MnA62v",
  "key4": "5aEdoHzBUQyxHPpgnyiEQePSyzut8wCoNW46fx5syvi4snzdrdikyeRtz9RTkTCL9P1VFvuNPvBdiFkVPbXpP2Vm",
  "key5": "3hYZyUy7wfQ1NgEn8YfEyjmEmyGNy5fDN3KUgMJU8VrRr6m5HhK83F7g71KrdkDY31Ei63zLVS2sZL9ATFtFc9Xj",
  "key6": "GFBrj5Cpnr5WcQkcnzDFKVh6UaNiQ6g2YKWwrBjK925MmKqMApcunGRnhNErdWfLPo8sBoTDt49CHgUgYaNSX3g",
  "key7": "4HBVgkmCHxHPTj3RCEJw3rKDmpFovxQ9MEpdQvQ4qbPQ6VwDj9SRvCpW5PEakGvbB9ruisWPK6g6RVSr6frbinAu",
  "key8": "7w8AZsgYCixN5NSWh5W8rmV4y3sunmh6ZnhRXXxYwVdsxiz8DKEiDCevaWyayG9SwBL6B1G39wYGKEdui9AHNM7",
  "key9": "39LAEYnp278YE7dwxvCMVZEJGbJ3NFSn58VuCwnKHctVMYHayQmPU1jEFd63MAN3CbMvet28ahMwdxnaKPToonhY",
  "key10": "3SpBo3qyQLKraWN4vLSwonQ4sgcunc31LswMUGn3mMVcPQQsJAtffMZSnvaQdP79sERwFYgVD7VshyR73VYUKZKE",
  "key11": "3C1vuk9k9g3DW2QUMq1hiLogCYphpx5mcNJBHGvRpsqfsu8VSdFKhQvWqkqbqTLQXd5PS4JbCsp8YDE1uXLTWon6",
  "key12": "2y4XjLvAuQY5zAruqLpTPvKbB4dfV244XFxFdywmRBWTecKpEjYAdGHsdPYp9oXKLBmRWyeEpLid2BqKSF6K15kV",
  "key13": "PLAt2ZYNn5BdwMLvee2jBmR45thvZhjCQQ9eLwmeu8CRvCCFSZymJUUyVF2SAq2J5VKcvYGYoGd6xYkQxuBHonb",
  "key14": "3xL8jcxKCSzfJbrHRutimVysjMArGZDRi9SEjKUigUxwCY685ee9HDVYqfRmQgeeyTQAySVn3kSDjXwnbXAC17mD",
  "key15": "4YGDegBcLavQk71VEThZ9yMx6XZL5jtHsLogfsVmxurxjdMyGgb5wtJWqYGcZ24Ur2mruYGF8VcveZiWXLjhCcJf",
  "key16": "2jGzbMy4Sovso2xq7LuhWrPm4B6a95yGkMB5ec4khj2vZhXMa1a6ARQ5Gb5dueYvL3oU9TpQxNAyK1ZG7c2n5oqV",
  "key17": "5kRGV8qxm3pqhXyrgAShJibdMvQxD52WjsfWFSfQR674Js6HsYR8tqfZ7UEXrkcb1jPByxsNwdQAvchXC4joHGRt",
  "key18": "27g3ksPpALNXyuDA4tWZGyMWYAQ5qNgD4iy5o3bbQLqeDdAimdUHrBmpk7ZCTFZ9g73KFMP5afaeeAMCNwL1wDCp",
  "key19": "5ZvZ55hyREZ9db7F2TDY5S828vHi6NyfaG1pX2x1bT5wNpYcW4C879L45pYNYiJB9pErYBHiMt5a7n6xVfbeY3vV",
  "key20": "3yJJWsnw4yFRgjE3NTof2afkufyYRuXe97gBffXdiUoycadWxrGzAajLi2zMWkn8UmMF2owooag6kcn9bp4uQJf7",
  "key21": "4FeWEYJBbUdpiTyP6G7jpuhETa2kSszvzHbikkkTHq3526z67rgTTzLWcQ21ouniFEYE4dvSpgNJAniBNJwJL6d9",
  "key22": "3YsMS4zXNdHxzCzNDBbji1fn3wyihKXXMaUcuJE9yyuFuA5afaunmgGVnLUQVeEcsk4TXBVqrC9oGfxgvVCB94MF",
  "key23": "nAjKtVmHiNq2rm8o2xNHKrPEwTVWtjzVy5aP34bdbTxKbPWWQx6ks2fRAu9MMyo2WQ8dNWiwcViE9F6z3A372B7",
  "key24": "4QMXDoSTGo2n4kztKgCRc1YARUnXCp6ME6PKUfLu6gCdKoMYsVdmy2te9Dx6fjFCRePwoXEzw2W8Rt1NwpFnJsnZ",
  "key25": "2xT5RsvyGU311SZb5AHk7qKHmktNKwx3Ua33mmrq9Lk2zr7XjVdfUh2PyRgDp5AxSamygmTVi9UvjHnJny39QNyq",
  "key26": "35vS2esL5pwCRjThwPUyiFKuUfcGfHTzTu4C9hzo1Eegpkenj3SPuUsRUCNjpHNU9ivrdrPEpUmHEktKrZ6fDtVK",
  "key27": "vsP2wYbti7BA9fL8R4H4qCFcvjdikk7mAQ3vYbmWEVFBSuX8mrAYuhtAwg6hY4dhQoYzZGkHeh5iunZ2ePEvWAe",
  "key28": "mLwgAEm1S5FM5neaUpVAZjndkWGrVf73MMsGzayeV9bKJNa9wWYbLkop8DP1cAXen483p8Kb2vWQZ3cBBmH5LQN",
  "key29": "4h5AYZSP4VbHrHvHrKoZ9dZRVBPZt26Jwu5wZAn9yp1fy1vH5r27zbqa7pvwNzbRPPku5WoPq5aPemTXBq7Vn6Lt",
  "key30": "5NLR71mFdvo4h4LiJK2tu3p9LM7GBGM43Q877ufDyRiz9Fe62b5AESjTmFJtQjYhX8jy5g4PCwbVAy26TtsgCU4g",
  "key31": "4LJyKTHjcKHpWSMkkpTYz2Q5bxtKpYDZYaasB8roFyM6137e8auQtcn3HLZxWh8w4LZFbHtwKgWaySVgPqdKjjWb",
  "key32": "5BnYaKWe6rHxX3cbd7btELBzmuKUphYQJnnDGjPBYV3FBhN3Vp94bQXzuCeznMiko2rnUFvvLnfQKu5c4SPL3giP",
  "key33": "64g5MaPdhk8eTHEpU9N8UD6G31jkYNbSjTqQV6Nk1EFk39hexYnm3ivZySidYpYQhqBR7rTvGoTQfGtTXhdhGvzu",
  "key34": "4NMGQyfA27Mai5PaKR6Tb9Xu98k8RZ8CdM3CP3s24yM6c9CE1xqezMSSv5Y6SRGJsRHK7YiMJVpm4cR29Rky8qxK",
  "key35": "4x9M41abscy4CRnokEx36aTPwqaCpHaTwU8iXQFxRb8aSwv1T7RzX2AZ2nwb5jYNeSbxqK66YwhxK9SxgJeLp1me",
  "key36": "3BjmdZ1rhFc1UXmU44TVebbM9HEVs8Y13oTJemFfunt3xeCNXhPv4ugc4BkHwnqPafBJKjeCSmAfaZ6Wjkf23TWw",
  "key37": "4sRnykqY11ADVLCbL9TiydXLyFsvnpkmyTKgLXrLTkFPxzhgkK6GKKFEAba9XFmMAedDDRfJ4gf7sL8BKWb6AazY",
  "key38": "3EGAMfJCKT7CCkPHe11QpGSzzuTqVBu8vR1dwbdyTMJdkFRL7Ad48UVoXBGxvhi97T7MnogjTkkiXcDwacpZ29fk",
  "key39": "26qcDsZXPSZZ7UQxgJSpCEj1uMgqNaJG3mYkqPJrMp4rqNsXtCxRJfqwDH4RAzUt8Lo94YQ1eonRMghmzGhvzU9G",
  "key40": "5B9vz691WqApSYkHzE2eFbF8U986qS1PTE5H7ZPw3WRvQ5LTV14W2nbd2R26QRiF4B1Wa3eCrhESz4maRoJq43KB",
  "key41": "26fTNrawrQ8ntJUDCkK5v7bkF36SE9eyG8jdmjecVCefXzwAokvHKTKatc3LNjNWpKzbKDfoqA9893KJtkTW59pp",
  "key42": "4caSjXx5d1G8QL6kkvLeYKx4uChTe79ooD1t91uUGtmFB9SBtERM8meEWLz2hke7vtvy9xB6eyWDzc3gdTpYRChP",
  "key43": "pLdX8bEqHQYBrP2LikqCmbKE8PUuz5BSQ7Mg6kDFytiBBMcCvUVgeSFyqycwRnxax7JXMK14AeRvc4ZCCYjzStB",
  "key44": "5JbjkPEBECuUYNBBYsQUFL4sdk99dtfjiru4u1weWEXqhZfh971qAgJhMdzTCS7pLqUDRcq23pRLz5wfVop82okn",
  "key45": "2LMrMvVP5tmQeiwBFwjDkEt9bdNWie1vGbwXBiDrfm1XuYQvB9xkeDL5VkECZT8uo8QtDYYSDZzKhTwgnfm5Xu2",
  "key46": "5TUkXjVbqNWBggPnx7JwKgD1PKYoAo2VbNHqDWgqfz8RQ2oNkuvS754t49oYH2B1Z4sqhYKNxEuR52AFZn3Nxc5q"
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
