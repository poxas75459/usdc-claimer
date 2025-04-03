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
    "Bnvg5XgcyU2pecws2CUdSBVUKHq2HPFwmPDY3bzsvUjqBdY2T88XgMeNH8EsERm4PpTkdWbBJGtpsjrRHsp3aP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLQQF2JyapCyJ2KiuzoYiBsWP8tf8VoSSmFEwse4FbGTV9Qre75g7u5nPrazpr9gsoSrB61dawcET6sKUCPYi44",
  "key1": "4v3DXbqTzfmvVdbD7GVWQdfHNCqm7M1DrDzD4uBAztRJUQKjKeRUGVTpRG4ET2kUJEkae1m96SSwUWFqk53CyRL5",
  "key2": "3RYZJCWcF9fLxxHKAHWKwquKcTWmtRBjSSkkBD8Hzw5x5nwQS9tErFMA3cKdr14jW7PzaJJM6Q77utBxnbUM1VxS",
  "key3": "4QJMFQbmgjve9APr8exK7h6swAPURHUrYQnTqmFdwi9MNtG59T5NQQqJQRFjEJrtHjCvP44Zfbz5a7UyMHKmzv4W",
  "key4": "2EVbTo1ensZtf98uHysUwk9csDFGyMWAZwcTuVzQKxsY4yRzyXXyN4QjHdHEtpnY5gBRtiKjW3iwTJSXgTNc1d4L",
  "key5": "4WRvXUvPDASZe6yc5zrGQWtopsc9mkp597rwvEYoVYNrHsck34suAaL6Lhjpj8d2Pi8favYw6TR3QRUCsewE9XjK",
  "key6": "4w9vWKr9bkvRzuNKBoKzHeP4gkCh1Wk4oDfRtSKFkAPsgcm2Sx2fLwgRAszkfFA4oFsQEY4LdMcPUXkhvRKnDKeM",
  "key7": "4HMfLGMM5cqieEzWxAe2VirEgQSDNJUXVkxAbEBbXUxn9spUQiwGfNwkYhMmG7ox2es9rD8xrhjKrrsAo5qcngag",
  "key8": "48nQZbpzT1p4VY32FvFKSaUm65tGjUApGcVHoQCpVnHzsF4SKy1HR719pydKarxv5rWuvTetKJ6LEJX9E6JRzauY",
  "key9": "3DYk8FUv66rHttpUvuDG8uXcaYtjxXgDjfTfetKowNnBoxhEFzFE1wyGoNXfyXvD8w51FyLe45QSZmPvd2CUNvZE",
  "key10": "5CUuCAnbV1qVVNSHo3d46wvQHEK76BYdvcXoK5mg4HX6aEo7FBYL6kGvs3FmKDn4P5NmGnSBoKzxse8XZdAwwvVC",
  "key11": "2X9K2hLtbE8qj8WGXdgmWSnnaG9Cor6tEQVanc83fLxFpnX7VkXhvBTPhPcQQ5j8crptLz6XQPpErTWVuhM1j9Uj",
  "key12": "5feqjP2Af7gZCt2qsSgsPCoQVKaSNecUQysKARh3Wmhfs4dGmTELdygcxCjdaLia1Q7egMCGCBeyWNaXZQSR9Zw6",
  "key13": "2MCF9a52ktG38B6QpoVZswmqLjz9Trt18tMZf5XsQgn9jhvhG3JpXwvmVRB13PYrqZLfwcwTP1mJRQkN4YkMN9GB",
  "key14": "3HHtuXpFx4Hrqnfnya1oAfJh1E26PLfUYAGJR43z5NQAERe2xz4WaNmrR5HhsknJTYR6NPS1kueyTS5q3M567LHA",
  "key15": "Znw39ontDRSMQxXZxP8YRJPNXExdBJnvF7J6t8M3p6jKynEZ81vh9Y9ux4uEQer5TFypqxVJBYe6SZGb8E3srNi",
  "key16": "37VS66num3TzR82DiUrSgxc39PXWiyDRvfFiJNxsMjGXzn9yNxzR2HeRwDRv9bzWrsKigTkcY3suqBmgz1PoLV2R",
  "key17": "2oSYasC4DL6QxcU3YpcFL3VZPC4sZFG3qqoZsy8rGM43ZubvND9rvEcgzjyM9c8kQQZaYsQweAax3HvnGERUN5nY",
  "key18": "5WQ1BjrcZUJc9rjWkPf1J4gGNnHEc8CPxEYTzhH8wVbjUonAAVk5uCBmqSeD1dkeptkzGXfgTEvE3DTuAmr7p6F1",
  "key19": "4TeZ5vJrH83B4yuVdA5Xns9UrHXi4CjzZaJNvMghnwq6dBU1jbEhXNfBBDbcyDGxQm7VroD5wroacPnje16pPm66",
  "key20": "5FKLJrAxPh34UvyqnxRfVQxqgQq7eBDSnufXGz9wf2kq8wtQUvy3M8BHYZSgoSB9AJo1Vx4QtokJ6kbN5VHgWj7z",
  "key21": "4qMUUjo5gbY7PagfSFVMMAZc6rfNQY98Zi2xyv9hxvJ3ja31EjDyGwyHixm3h9DmxqPqoKKrP8FWdgkG3yu4Udxd",
  "key22": "NUKfgGUqDos3vhmBceEpr4GtzXgp5BrjGfMBkRqPih8zdCckXaQFSGzXcaFqgybAJ214itYmDi5Vo8nUACQwpt9",
  "key23": "3tE22J9Q9FZKhdV495pp8kNAmTMTqk1XZR2rDJ6DPzBWyf5uYcx6rQp5mmVr1FNgWC7xTU67rSxNac2dgvKj6bUC",
  "key24": "5xdyFYuhhQJMRb9r99ENdKCj9n9EX4yFdYDcQ4Vh6AGi9V3CdE2p278qCvDJyD3WQ7iWfBUEKPRjWDV5YEiEjENj",
  "key25": "hdKvwUCvZbqT3PghshsnGW6VJGv1PFY1F2LK7CM7jCBwtFTn3sikJd6VmzcLsQseJZoZ3p4DLdsXLFs146Y2MtJ",
  "key26": "3wCKrJ371KPv5mmRGwLsB5G5mTu4VoXwvgPWyRoSS1w92SBBXwrEAU8zL7eT6hdzhQRFMNzizx6MptVNGveV8NDd",
  "key27": "3ykmgATbwB5YBJgqtEJUXyjfEhjtHi9Jfa6RDPwEJKQsmV2j8YBA7C4wg6Teix9psac9RBfmqhHGm7p9yKgCr1BQ",
  "key28": "5Uhrv3rH12w6BdeoVMJhuVWm6s3qQhpR83bXtNRmQLLtHkKSP18DJJVpXKr7nFoiQiVZZfGVfiAqHLpwzHZH7bQq",
  "key29": "37CaAKG5Y84XtQGHCJLAeiorpMhvvaSougGsx8izewwuiuyoLQsL7Q8Bj9bgAG3qk5ypG7b52NymeCMiLmzD4eHV",
  "key30": "4jetoh2exLt3rTPZXjshS1idCUpSmAGp3s8YNYZy3kJ5Jow4sJDHvFZ3CBfUwNywCms7omtvon3nQoAkMT8KohMn",
  "key31": "3YG2HvwxqLxuh91WtLnqxB8MvuBxSF6RTT6yGFbjg7XiKcgJpCZuxXEtEVFW6kPzkQdehGY29yHbQbywaxurzAaW",
  "key32": "527i2VHw3QcswQetcVeiKp2ewYpjeeTKG7j1gf5JYxsdEdCGyDbH2QmvWTdhZyLD76K42NhLHMESvLTrEkcMuLH1",
  "key33": "5wPXNLco8ufjb26tV7q6cFwpY7oqUntLL4DMWjBCpWmKR59VLCmPgVoMnX4vtWXWciYhGGoYVzUo84Z5huhHAcJ7",
  "key34": "4X19GsQMgoy9mAeZs5BSkCATZCPL8StVMbNjqHH4qiS8nehuXFHZFSL6HTAhWyA5YicAkn6EGAbsuyQn4TVbENbM",
  "key35": "3yNzdmtgKLuZyU9QUbzE69K3xY4Cd57yZD6fp1SGLcZdyqSpaAjrLLvjKrEsEvUNbpBuG1waWgKJt19M4xjDx7mh",
  "key36": "3YxHiGvoUwuMsEAUKcaKnELFgQXX1H5FnZvMp8tNgb97oasxU8YpPwPuVqXg5py1jnLuFK1U5kuQuQZMCPJWhvUf",
  "key37": "35LjKVKAGqafeUwmV9i8GUKgP1Cp9msJK2Pe5THFFv7qF4agYyrnDTwqiVEz2Ct2fzHZp9LoBRnegQCCu5kbGUn1",
  "key38": "52yzokpfPrUfvWWQZBPezZ2ecjw979CFLFbVHqSq5U2A7JGKvPXa5jaBVkM8mJC7GEunJyxEyGp6GxVKHh8scJzo",
  "key39": "pK2VWDNUTSnbW9srjGp8VaFtZ5ZzDQx6QW8qmqni4XFdgkd4yMT9Spub4NsEFCW1cQuUKyDHNSBrByASYidL8Xc",
  "key40": "6yHFD6q1o9chbqYg7i9Ai83GNawEfrzqBaYYAfWDuYAcCCFzHLiXYVPpANhJYjBycK9F2xrQ58dzPoM3F6YPLsW",
  "key41": "4K4chJ99nW3HVbWCpPB9rqrhFmeX2xr5d6z8gKovpyV5gLtvPySUfe7TtzEJdGZYUAGNBMGyYQpE2c8Y6dNSXPEm",
  "key42": "5i8ojnAawDy31JQCBx7FvukQdbaW3rXLh3z7tqymXKfQkuK9AVN3ZqPvtNAYLmRJq2dY1t5kw8YUjfNS5pqHUNvo",
  "key43": "m2KyG9B37JY6CdVCUJ1PZWtXj8CUsEmQacmG9jRYMFuEkVy1KecYfJxKvuNvWPYERNB3STsaKtStaG1YPBtowF9",
  "key44": "5zZzcvkDf72yuCDSTTnEnk1wQPP5snnCVsi6STo9afhgcRdrhTy3Tf8s2JW4du5GqtfuCiacUz3YYFmPApHpQNdP",
  "key45": "3airRMU9dm3eQ1NfTNiXWWBuwoXUJVkrNVxdzmKZEkDg19oWBGRNxyHFvxKKwZT3re1Leyfi37XJtGJifkkipwec",
  "key46": "5j2w4WL9d4m43JwmWs6CXVMhkUA5MvpcXznPWZx78SRJPi2cUjnkFmnz9CmZA4utQLgEabcD8yaCH7wvDcb2Bvz4"
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
