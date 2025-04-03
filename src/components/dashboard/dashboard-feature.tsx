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
    "3MBpfyKJVthuCvGQJeSLH2GYYEZD4fvuR93wELJGtwtrkGc5PRsbQuciqEp5hDwr4EkzRt4qQizpbZEd953xoKdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVZSkWJnhrx7s7GQVVYL5BjMYs8zQ38wZyWj4o7gnuJuGLwo4XHy1ZpiJYu23uf78t9b1hvAao7rzQkFTrKotN4",
  "key1": "4v9WQqsRp7XVQ3U2dQe1n7ebyExJAVEaBhixW6p98VidRhGfY7Zgp14wkXeXzMRNefJYo3FSRjdBbReeZtKBUzcY",
  "key2": "3ekHjK6cSPcW9ByxzZ7XuPPMBwdfVLdJzocTHJ9NCn4aGXkWAJiNkzmh9dSxo1U62gbcs5e7n99NzZDdhEQzPRRx",
  "key3": "29f9gyKof7HeUyrh7MXCZ36BGw6oJ2zpRT9bvL5zhr2f4c9QzN2uyQno281vM5NixHbNG6vwYew7FaqutgBSej8s",
  "key4": "2w3yPYp9oKHHa7WRLUGQ5dxuk78mwX479ozcAmanmry9ZWdT4CihGBKvGfzyS4WijezbqDRE4jg6ZUsVVwNSvZrL",
  "key5": "39PoSzNXx9sWXHgRDJ831u9HgwAuXjjUEaRpmKCn35xVf4Cvph7C7kpajQG3bFSGXF88ymUKSiFFYw7nZVdHSeZo",
  "key6": "aRF6gHV1nLBS5HZU7HR67FMTvBtegUY9PubnU2bea9EucH3axsh87z7DP2iGoKbpyWGgFbAbSSbsxbg7kZrcrGM",
  "key7": "5EL7W1HZjyUMakYRovuaH9TeRRAuUE5bE8dLER3BHt7ARZLTxGhn4FxjzcCQq5ZtF8k4jyJdp1efeo7tKxffaUBZ",
  "key8": "5dRKzgY8VHhPPogoqG8vf9AfBkHrSjsXaaBtMjr33UgVMEJVXo4VSFVT7Skh8atMoK9V77v2MpPKkdyXV8PsdsVV",
  "key9": "3kqV7sUQoBtDEK9RqgLAQt5aNXWpdiMHTQC9XeH15m9GcPbwrESyvUCmZfTaunVz7bLvyYaSubuMxtUMiTvf74y7",
  "key10": "5YTR1UymZ2ryKjLiFxGHv4pU6tRCuNPXwcCujzhXxnU4Vm6tjn21mm72eFQ6uX2kKtZWAhNyCN1BgAztr9d8XAAK",
  "key11": "4D8X8heHrryj7C1UzKu1osRvxCMiSx19bYq6AJpZ41gEWEXYuo3gh6HMq78WCUjA8wxvTyPu96jbTDy1MLbuqQf2",
  "key12": "2ZznfBAtjEAd8s8A6SUXrwEaWRHhpCBHDwH5h5BY7pPxtFzMvoBo8n8qArYwrz6nP8iQK7aJCZxpPdiWtbZovFWH",
  "key13": "3JrF8cz2q7fPWjKaRr4MsQXx46LhvRDSKCNHd8PbDPWRZ8yvWgKQCRuZNNdsP7zY6zh8DB5fiounXAe16RhhSdBt",
  "key14": "3oy6zVPK98ryfTiVZV1Xn827CtAuHPChSMDjxXkDpof64vEnYFrmEprYFqkhw5yy5duyLBRFuB44TV2DyxrVggTe",
  "key15": "23zhYSRD8s6kn6ixbrNZrea9UjXtNLoG2GEwbBnq47phxPos27o892z1StkxZ6p2jMQSsHXFLjEodBscusQ88Neq",
  "key16": "4nfkm2whbZZKWFn9ipi1UVoRCJUoXVYYwBkSKuvZRosFrE2ENoHxavU3bueUySah1c1aCJhJWBYVF1nQNF6KwymC",
  "key17": "bNVquA2PtYvx8WkJ5SLay45xhX7XZWJgSRbXD4u7aLFTtxgvZB5mnTNVEo9jFteMshMGnPUW5GFdyExVKEdkYqF",
  "key18": "5T1qzn1gqqbiYbkABXDgeTm1szquKyN9khCXkenLdrj3ivTayEZAYf2gkem4Yvc79cFbJ3tVf6hMbhDjHLwo9FgZ",
  "key19": "3dqBh6VKtsSdZe8u8ep2xyAb4d1kA4doFJECtTjGEqiCP9Ecxhdts6LxeZG343VUsFRq6CNMo6wjpTAZLQ21myXm",
  "key20": "q5swBJnaz18gUdsx1fum9zY2NBL9b6oKkZxBBYxqA2pRjCngp29SStzvPe7oJTdwA2L8MXZ3J7bbLprQooArWXm",
  "key21": "5Fc1JWNM4DKCDRK7EJjFJiBFwPBXz5APoFFJKDU18A19uVtrTeP2ZxUnqP8qour1fy1TJQ6nw5C91CrxAp2q5EF",
  "key22": "5KsA8PThCYDS3xyUFzHiyPLSehZnRfLm7ja7gAU2tSBDDRTgz2XcxFpLDGv3i9CyoKY3pHhf1Q4VHJQqnPSRSCdD",
  "key23": "2ZuqG3buMjWJX25w5oxSEYwx6ZAhBBhriVontuHj2qtVeNrGf976Yap5mbSaqK3utc5bjDxHBs3CatKXMRP2XKK7",
  "key24": "3MYtsCVGz85N2cqoTyzdk64NYJAgPc6Ahi8YrjvYrehrpqQoR5MUfh8h8FNtbB8BhC5UTxJ3JjZaeh8ehL4hLBB4",
  "key25": "GDfq2dEWJuCM9NiqwJ6jBRtXrZxiPHv8gpLy4pQMfnZY1r9wqNz9QnaytnZKWe2NVnMc7Jn3AhiqW4DLyVXbixy",
  "key26": "3QWVg6ZzN6Qkn3khhPP1mRyDAxK4ccDpv7P44FpEGQ2bkVX9BZca6jFQnAjdWfyFd3rubBHj3mtY7mbe6tNih93T",
  "key27": "TNvuhAHKb4ecv15UfMBHJdoC1J468fX5DwT1bAcWYgoGjkrSGvdMPzdf67KvmqtU9nQxYYYpgN8MzMTzfEScU8w",
  "key28": "2wefAt2TFtt3QAxY5HrEcTmJsAYgkdgzS2vd9sMiRqUc28e5ewtcd25Urhr8sQmhRmE5kSZRjx2vp9vCUABrbNoT",
  "key29": "5iyQwqghYNve14HrFMYUUQYJq1L65paqYZqgvtBwi1QLNWe2YCBNCrWxNKFGxuEdFmu3qWMjfeugnnwPcxpzNt6d"
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
