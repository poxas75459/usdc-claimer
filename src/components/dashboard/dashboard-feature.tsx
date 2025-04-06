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
    "4NmqrJjpteFmhwDkKk1yifJqG19jFGufQvVivq3pKohh5GAaBusm3QmYkU5gTYNq1463jXq275robgCSgcGsRagi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TL94UrBahLGxaiizM3B17Kbgy2B44McnjmJeTroc258GvsyrmwGJ1jjf2wSUWaC2HLr4Y6fwW7RPSaaS6xYJz9n",
  "key1": "2soV4ZNqPDERbUm3Y9hRc8U135f4tigwYHgon377k7vJy7s9T36zeEpVAYf4NEdEj1Vyt9fygyHWv2LyhDXzmsNH",
  "key2": "5MNJ8kin7hfHpseZPSVBwRQatJJb9nwP4ASJ3EUV1uwqQ43xZqy9546f6wNUkqvZdnFqByNjBiQeteY4Sq5NsCaF",
  "key3": "PSpomi3DGHZ2TdyKxuWrCsMGhY1pJ1BQynnMU8QHyeqaz2pAzhLgyrAsj5gLQpbghKkomLELo7BBeCpGmSjsJZB",
  "key4": "2EXv4jndPK8d73mgVWFWDMSnDndjJvaH8rZD6VikS6WhKcEBBsWbrdRARaeL4wMg1AVni6U1UdZpEgk7PSdre2Dr",
  "key5": "4C17x8XoZF4Z88BMoTDUjqp83faQpyX6grpAZZEyDC1CVdiuoCjek83NfPb5T7pBqtEAK76E6ydmVdmohbu4ijUq",
  "key6": "3kcd5CS1vdwRopwYZvSNYekWytxcAHUM5hDF7njfWewJguJFbwdHEu9WzxwXE1xQDGGpJG6AYism2KxonTACVMAG",
  "key7": "1iZJYRR2n6dwBZkRziPtE26HLBQVhUdQxsNZduyG6cqV1Cfb3fZXzsHKFQ9PjxGUtDKgQJ1iXwo3hdg1FJwM1fc",
  "key8": "4E7DHwEJcYTV4xnsZ6gtCu6kN4PsiWV9q59uWwhGtZMgkWqXN34SQEzhoAmKm2P6ztGJFEYFBrZqzxK9h7YqrfwJ",
  "key9": "2BHFBkx61e9ScEBjkQSM4Mxzo3Gjhny8GzTM1KyDmaHXtHdcdNiBDS3BFL7UeWV7tzv8VwD7i6xCtzq6L9tvFbSm",
  "key10": "5ZkzFZm1ZytxiBKQPWx5WNrtfFYkriyZYeXQarMnGjUSGnWVKoLsdiMWrDqvuMuUWwHdds6yL8jc5nx3ADwj2EWs",
  "key11": "hLQQoQwwvMQdaVtbYdhoNmezHnUut4eTmSnt6mHFKWZq6C15WXY6wwRnPtg4Aiqa3u2xmycWEARdTJJP3kkgcac",
  "key12": "4E7TLxbwge2gxsgNar3WqAskcaRC9LQEz5hZc5hWvNf8XxMeeCQ6ZwL57TJFF9CWJQ4snUBBAU3yMLoUTVLEobC7",
  "key13": "34o5p8MwFyphQqogouDnb2VA5euTdVaWrfQSd7YJVGYEDs4aH3AbYFHznsQM4Ujzph55JXss1ARiyrcfNZSouMKG",
  "key14": "5LoLyDMmu31nJ9tNkY8XV5CMwHuw5LFxfmzhYekvi5KRP1EUHDHG9Vk8uC5xLoXsuEYpWEgUKJeJAYvsFR47DGz8",
  "key15": "31fweuZEKUGxnM8N4d79jaSKyupv3hwkYXnd9N44KhToGxwzdi7WMntte56KmKApAywoXchGUXb3qmZVLc3wWwY7",
  "key16": "5fdEo4Dme2PYJwGxZWo2JyiyxWJ7J7eE1Kv52fiW8oF5NocMVhLzuX2gc4SoPhAhM1RAvt2NKoHjgST5ZTK55FXk",
  "key17": "37TMmYvXmQfLmEF2BLQxQZ7oS71QmcaTpEVfotfJSX8zwdN1cDU9xXms1Lxd9GnAkbky6TrZKbFoWBXCYBB3tb42",
  "key18": "4ZheTA98rmjYFbkHSjchZPHyVq1NXomxXjSWZhtVLFupXrstfPc3zdF8JtT9yGyTJqhBx1fGMoTmmN47pJGx4Dwx",
  "key19": "4H8LnjNaUjuXEXUY54FkoXyGf5RUZWCd1VpAewNk3953jr3aXvaWGp7nU7LjWdqDF71UiEGRdhnCSFhS9DVo946F",
  "key20": "pkHeh3B42B4krhmGNQL9AVWHhFyCeFrDEAXtG6LnjGSrWv3xq2ApgWj4BosjrJS1oRfFnCPgJ6KNWJgpz1hfUBv",
  "key21": "3fnDgkNXF2DS5WifRncuSLXjUvvNVDatWBxTnKb17wGgViHTUsrSLDqsfzRwVJsysGGocj2NRvjcKhXwzQDf5ReR",
  "key22": "fJqaaH8zxGWpcav7DJ7Yd1BfHrQwV9bhW7JzL24DMsvGPfvrzgvy34qQQW4XBq9WD89RzF9Vcqyo7qYkVB5VkMG",
  "key23": "2Dfj1iS19WAikGYqjfJjh4BqMGV9eqFXP9f8V6avysdXMCJ9u7A2bR4jJ2uKZ1E2bJXhamXwjak8wareiw4tFySj",
  "key24": "4APPJbAsfq8BpdqvuKJHwtfuCQ6YTCJhbV1bLxUyeHdL7StMF1JhxXodJf2C4XkYDd4Lb3eJ4sFa5GKHoKgepj7c",
  "key25": "3f1RvKDz2KirmMBvZUAc5gVkwW8FdXZNvgkeQ9ChgaweqwenPtDrWqsj1bBVxxoi8xQmoLzLtCcE25GCbDxXnUyb",
  "key26": "2FEBMZ5c92FigCNpAuhS6PvZNdpoQmNoydSj7pHKURj3UsccvqQRorEEJ5vbF81nQRqH14u87oXjd1ZYJuxxPL3w",
  "key27": "5GR4M92pLrcUwExrEnoVfhi5bKhFVq9moydZSxSehikRvDBYfoxaLnwM1hYAPNAJdbmWRhAej3q1AW815gzGApmR",
  "key28": "4EirnNYH61ocdGgP8QDoSqPNuYwRikKRcS252PfTs5k55ZppSCJ3A6b9rRLN1sjNwEqzVxFDgB7iRER8xHeoRXvm",
  "key29": "5gvpGJwXtKt3JnfAc6VAjFkEdBRqryH5X2qSsquDhdBC8NikYDSp8XaZr2ubDgtqSj1ezvA3rAihMPUZzrwLA7W8",
  "key30": "rgdMiqcmaevf7KSnduJ466X1geMEqyhuG3pM2ZQBkDYKzgjB8yMMoBjJSnQW68PM2DZn1zUPmHmx2ymhWsBDaam",
  "key31": "FmbRgfyPtJ22diN7iV63zfsR68TYutgYwZBvWLwtBbFmASSX8ZNWGjcfNhQ6u9XW5K4WLDBWrWYQ8aADz9t5aYE",
  "key32": "5Rp6itAmkMt3Hjworbgiw4RA8vh76mkGtydeKVb6ktYsbaH9c8tcWwG6nHAYz11adVqmzh159WbpzxNVfoTL31cm",
  "key33": "4ZFXtvuGh7EZMKUZQXHke8dqhn3X9Rp2enuYKNNn1b8nJuZDk6LjkjCUfeC5gb6j1FtrS8D8AUasH4Vpu31m5rV6",
  "key34": "3FLyRnK3RyipLTyAW2WYaxBt3BHeckgpy3ED47YD2S6n7qv9E8qDWL2obowm4tzesPQRtQezkyLs1hJBcq9sE14Q",
  "key35": "3io2rpVsCEgHbS5AJzXutzGzvWFkns1zTgz4FiDBjdF8hB1QmcEYnXpua5wRjXp8iXEK6TWrzdudiRvmQAQJeAWL",
  "key36": "2DNmk6pXVc64RbyDAxAzmdsbwD6BF4jFsyJzS7M8spbyiyRw98VXhW5wmYNqzWV2ARNMgH97RqAyHkfRounBVjE4",
  "key37": "5cAqFkLMPmAN3EQygbNEYU1zvHNzg8zPU4HRCJdJEpDAqYRMb7mcDggy3T67F3q4gtGmyzVkRoTQ5HB1dBFaRut5",
  "key38": "4LLdSATgHk6VFzzmcYn8oM4CnYx5xE53cNLn7UA1ba7fdXz3Vu52QDHxEXbCZRrG9rcy7hhc2MuxbGoGSuF13L8M",
  "key39": "5kQTbKBQXfE46MxWB9JkivQ3ufu4q9M4HSV6kfMhC7QU9fAVN63eSnqQogNaj5fDy4fQknmahaMdbPjJKGPBiYRn",
  "key40": "4JuQHAFTMANhuvPkCazxy2SsctK7jRZGwK7FwK7peE9ggE7rEq39e3K7UFpTMCtqXhDjoDVBVinAeutkDmAeHjHg",
  "key41": "27jS4mZ7wqEkuzqz59goSF53x64Dpcgx1uX45ntJp4i875kFqAiVBvF7zGAU61fHFRhEzeFaKnx3TxKyM22r9aEx",
  "key42": "2ot2Re3S7bdKZ26cNZnRBggJTNjKs5nKJ1fBMK4wicccH5PL372EwuTP8drbgGActdRSmXQhZdCZBeP8sV6rRgkZ",
  "key43": "3o7N91W3fmZND2PDuyZjFQxeyYgH3qMaPQSfJwapt9KaZ9APw3tS6qqED6PTHNTxMRQrHnBfgcGPxcgixgGr2MNt",
  "key44": "2ecaqTPVUYFgDiZ6zy7fPPG4MSnWqjD6ouU8dHetvgBeHaM7aWNNLCCBXFmT5tZCSqF3Xun3XsZLwesD62SgTGWU",
  "key45": "4dTWe7iSbfN7ogPime2vaJAiBZ2PxWMnhdg1BHm8ND5h1iKowdcrm8XM9CktXrkLz55pMpT4x2LDxbqfeD7p6cyJ"
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
