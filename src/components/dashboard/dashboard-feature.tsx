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
    "3py2CFJACLxrVMYYJYzarkjQWtXjAKworyPq7sQLzwLt9Nn7kFufj9yUUEu9GUvQv2AgoHBvAWeK3SRhBg3Jjqd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hx3Bye4ZUc9k4YBL8Ta8C224w8kncdZqnrwvuHGNrGk1ucizgLyuNwvWygtzLb86GL6qpq6a4eaDztMmuhc3jps",
  "key1": "4quMdWn8KbH4HdiyuCHdradUgbsx8XZpxXwozFNWudMDpuWMFY86ZWuWLMELxWBJEnJTUWmt59FYWQNgNwMNESDy",
  "key2": "5DFVKM65BxxQrgZ7KRTNUkTc8VFJCcy2BpTqoja1SDpyGEnQnRLFhRUwRY8EePMkfWefKwdpF9nAKCLJfQ71PX26",
  "key3": "4fop446XG61PbQBtTQ7qTfUVNWYzn7BxkkAjuwUW4fzFUbSTmZjxoGQZCSk11hBfLiSCs9ZobRvDL56RsoJX38V9",
  "key4": "4C7M6DSvS8L1DWCB66KhtUTgHLUUWj5389Mt2VkW91n29kMcNCHNgY2vzBWmnFBt6z4c7zPBnTrSMH23MeygSbPb",
  "key5": "3R9RuKjAX1UqUVNHEmaWZ9b3o9c5LywXhEPVpAE5qpMJDA4Vx3AtYq3KvjT9gSHuYro2N6Pqh931FZkSD66DxHzx",
  "key6": "2uoc6TqUDaM2Fb69MZfbfZqNwSwZA4shcvQtFUAqmrn6autmCbCC9uHfEzVAHZiS9Egp2uENtUpKnJuf5iZTX1GV",
  "key7": "21MX2NHQjxz5WarWVaW1YrcqEAunXBwkZPtoVumC6sh4i6gJyB63qmcdXBbo5zpynPwNChqDLaXZ1xykQrQ2Riba",
  "key8": "25Nard2o2jLHMD5C2CoRqc1BsZTkz6F3pUYqrCPxpjuXW5HFKVqH25ZPmmx8k7e7Uu32o8v3sE5Gx5fRuY74mBUg",
  "key9": "fhAF6GMQ6E5VLyFbFsDEGeGSCaM2P7cB6zGbH6A6bRjoQBvhuHTSmnm6aVeNN6wk855DHYCiWStKXJqaRM9pNAP",
  "key10": "maVCuh7hfThZTuraE5BhgVUVxE2tFG1g6H7WtpDFPMY1x3U8xhwgMKpecWKHD7BBtTYaXig7N2GZ4XdgcUfB2V5",
  "key11": "2kPcMgJYV4MAHXouqLaVTGyJVCu3cNfLZuGtxqnuZ2ZnhGLqFYxd1TRvysSsbPPuqFuDwm6oELR6TmfU54gsQxF9",
  "key12": "2qHEyAEMu321YrX3s3y4GRos4CBJie3SaoB6MvrX5wAPLaHTB7DWzrqgZQiB52hggHGKC19zZtcms6SVJme8kgXU",
  "key13": "4F9MGDoNp9dQmSYTHL9LieiW8a4qAiJihcZvL6M1bn8Ztn4T9SRPaVnrGTxc6oRBKz2jzCLBZe2KZB81SL28wc1N",
  "key14": "2PyGVWYi7HK68zpSmXZY54Ddu7sYZ17WPZ1px277kbLCddvj6CjEat45uod9WaihtpuaW4iTr7aVEmanhztMpTDK",
  "key15": "2R6QEMk593Q2KvbLxXkfWkxW9ANRMEdHoc6s41o5xpMFs8aWFKXZBqckfR8FT2Hat5de6rP7z7ACVVkDfvSqNwTY",
  "key16": "4289fRc2qpmU3iUnQX7PFpJcZvJ6DJ6mXMejL7m5QngvLobbfsz94Fa5vgLvhdSvamt5gjXKRS8eKvqcFzWxXokg",
  "key17": "4sT6j24ceeJpYz36BH6Togmi9SK3BMZZaw2yYBGKKWzoQrECtWH61HBY6isA2VRLaioGS8NTcGo5XueJ5MX2cGpB",
  "key18": "2Yjht5uJ3ZPo4YcZjVJBSQbmGtPmDHEnUif6NXcKe8wNEHHUvjc9gNKbvhJLmVhNYP96igx5EhckXX48f2pbMxSH",
  "key19": "LBHpKiVuM5qg9Ghfo9j7owd8D7AQ6kRa47d8GzDCbBNfGn1KM5yjbniotzPC8iKYnAsHVud66a2EwDFjD27U7yy",
  "key20": "2oqMwf51AfmkuT3B6eTgUbrksLrFS1tNqJHgkmGCs8hsLfHerDbDrwGqg6GiLEWZ8E8MWTjZGbfbnk3w7GP32fD6",
  "key21": "56gGWiS71vYvTapycTsKBvEa129AYviJt7VhYKvZ4U528VBS42bA957UQ5wCaVKPFuMKvP9aFF53L5B8bJ9subML",
  "key22": "4YR26k6gw31qQfWuygYv2iYTTaZxXZ4JFakzYFqW2sYd9nXxc71MTshSmZSHfadLahwo3wysFyntECQUnoMJFmkT",
  "key23": "3yHb1JfrKyAuvHBGaLdWFv8TPArFKKbPuwPyBUeS34R38DXZUjC4A32BjXNminnb61bGv4hCj8gVhjMSHSZAqPAd",
  "key24": "4tihhR3rbcPSjL9dzV7tvihKkbDfPp64ZfYUXoZo5tymndkQNUaCLYRp9DGSYVP5QM7ebyEgxTyaB53eKjXpKig7",
  "key25": "2pL2zHzNdgS3oT71vQUzDV4JdYS2T8yKWE3stMt5XdezLHYyVKegXE86Rh3Nxc5QSFA1EbCXtWP8kbGE2dU1ZFvL",
  "key26": "yMjwQA2ECdWwbDrL3YiJEUvHWSTrPQSpaPekZotW8L48L5rpSvjd5LVWcTm8vYKgSCtbwsi7W6gRsqoogmb6D4X",
  "key27": "226YASRZPTyCjeqfmDHHDxk9fCFvGhZmR3TowffKCYa6z2WM6j7VabyKFfYL2eofxUYBgeeCzVPD35wcuw9yisxH",
  "key28": "5c2iinkqfsLGMmrNHwMPDnvTDJAbJhL5VYjCWY4Lej334WHMz7CyEWdyut5m1VYswWna2DbpntwjsnijZo2t8CF9",
  "key29": "4Rf8j71jPJQPzgPaT8GEw8tFsmC2ojLHyLa11USMKneZtDYZ2aoxxKCcWPZQZQG1dL9WYQNvXRevgBB3dFy5KAeF",
  "key30": "59bu4DVm5xjp6NSHs5cQNbGA7jjFf4DGY7UNvhMFLaeZYdHrj1oEFu3Ei99JsQstTdNjdthAtn1dsFXo3raQurGt",
  "key31": "3DSN58ZjqnhRbtufXwymgnEi1opTMn1cWQ5HYJZuUWqSXyQwMM6SrjujZnS92Kui8PsY8yP2efj1PCjUycyQtKAK",
  "key32": "2Qi85usrrmkp5HBStsrfKicVzYifM1uW33KhP8P2EkGxj2CqrC6FTSoKEE6bZhkNJLmFujpVh4EE1zDszHdkgE15",
  "key33": "5QL7wzFUP4iMZdKS7rgjpzbGHYnToGh6b4yTHWxvyqMPMGvt6imXpMCWVdwJFgdXZSQ2AgcxV1MHFC1wWUi74Wd2",
  "key34": "22WJsJiDZgiXjVSeqhxfxNt9itfMa1qGU2KZJghZyyvDCBzsJT6kHgho5aVvB7CJeUV7NKzKLuR2q2VxRU7A1Uga",
  "key35": "TimDXy4o6aYGcf5XnkaSDwKUfeFRc5YdERuTh46qwYAZmXxVaisULtHE9oJMozk6xR5PVX37G6V2uVZ7osp1mvd",
  "key36": "k15sCctcxaAtDjU38fniTFv6m1CkW7YHnmA6wuiDRQYRkAkkv7onKT6VUp2q5zNaT3UZHczSLb8rAj5eFojaQMu",
  "key37": "5hHSPL9XjBauw2jAJ8MAgLBcK3AJ1y46R6Y9DXduKgohuwiNc9LpFr3y2GfPJSpYvkquJuEXZHJvMxYe5kSEXQkq",
  "key38": "3wgwNUU6hLpUjytbK2WteHLJcN1ZbEw8HB1EYLspSKYPiRJy7KuCubFsSokMeaLsudkkWJjkJUCwcg55ji6Yv9nG",
  "key39": "2mA9gdJZ829Yg1w2CZ8Hcapv4pfJVmYvGR7eWmPj4Jrqe75hqoXefAvUN4rFxEMHDzwhjemUkXctkbxm8us4XEC4"
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
