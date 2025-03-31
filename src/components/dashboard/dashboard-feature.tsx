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
    "5BZh25aKTzqy4k6JCgXKDHA4dtxtgbM8RBdWhrEgEvKbHw6YAAkLwxTpx7T2d8atnVAMWNGAcWfGcAtKk2kFQfPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckhJZx4w58xDMHxCYkccebK2RjxLRY94TXefJTbvDyQaXL3rsBSLFQMLHdEhCzFTGqFyMTESnw3be7Qv6MTKSe5",
  "key1": "4ibC3QNtLNSFf6ZxV7S7oWA7pbntPdXT7wfLnNM9YSVvBnm3zSuk495uMuoYUzP4pV8KGTNEQKgMPCKcrYUYWdXg",
  "key2": "Hyhv89dsuQMctXQTNanffDL6c4kYx53uofm1tyZw71Sp3NgEvnaE1kHW4JhXiygTs3QASdtr8tyGfobRtx6Vrs7",
  "key3": "3D22WjRnH6BPva6kLrqRExKvDfRJ3NARjz7RtsVEfHVTq5VQcNd2fHFz9spMyqbC1XMMxFF9JsP4qDemeTY6dJ6f",
  "key4": "2brhZiADuSpuHa8r27uvEp8PFdzKhHLnHac22Q82XMLf2RJZMKPxzUzPKn8WpqhFoPKxtfGU5zYh44bizKFr8wGD",
  "key5": "2tnJikQxGY8ZAhUBw6i6zuSriGXhKtkAv7eYenfKicMfKqY9Xo4CtmP4ahGTEfqa6pNJ2ZSH61e61BSCxDhhZ2MV",
  "key6": "LACmYA5mAGC4fg2nRFfyhcPZqtPY7mbm9KTgQqncfsauNvjP8grX5B9joaSjTxi867P9YdhvYkksRLt4eQttraP",
  "key7": "21ek3vbUWkqPiK1qHZfPxXTugtnPeS3Kx26beGpLyQ5ubcCaoPnGq8Y4tJi4rPs3RiDFs4qpr2eXnGYCv19hjiWv",
  "key8": "4MXrmkBrDM32b5Fk4Prx94egHgUWkNVdswEKYgNFgf4hqZD1CZd2jBDt5xJczxKifykz2ok7c4m51i8wEuuzKaei",
  "key9": "EAAtAuqxpECk25ZkxVpGE613UEcBQjP8hpPDCRBEesLjdoZUvF6j723Wtsx7Qdurzkra1wxWWDbp9tWEYeVbezA",
  "key10": "3mbzEXukmyFAJpKQvdbJS41EuWd2LsuM75KAPzAnj9wXPxeSq2aXDUSe7ticY2LKTdF8Q8w8zjAyphdQaL3pfNGo",
  "key11": "5jQ6DMhwXdGrhYTtSJop2dtPtvtfMLecLebPKfvQX9VoeUTi9UPRnnnpesd5BZTnucfiyuRwQcHv993xg2qgH4VS",
  "key12": "2NwtNxQa2BFudtGFt5ByayesnnGR17ubcqnjV7wbKEQkiDzpGP7jiaiRJBr8UcbvnTuok1iSfugVAkFs5c4oQ1Ke",
  "key13": "34zTmHAAEYnBG7brV1sv1NBrUquFT4hvGLAbmnX456snURzrJj3GzXhq5TYMkwjKY5poLiAZSfqRKVwkoeXBX2ot",
  "key14": "3nYcndRhADTMBQXh1TLkzcmFvLVouBjKPDs7NYm677uwYCCRGxHbC6abgA6bp5NE27iE8tUGpFGXXjwK1qpVZj3h",
  "key15": "34o167r1AAfFWUGsYZ2Dp2nL3pCCFLMrvv2G6iGd88VLW3jT6eYM1uyojj1Q8nMM2GMWqhHjPn9phM1qd661KP1z",
  "key16": "3Pka4Sr8evf9tJdxCD5Gw5mQVj68K5crcQ7AcVAc2mH8CWBX93ZHtPjBrbkg54A9FrHLDivk6wTfK1K63PUoRa9p",
  "key17": "FPyS9ZLW2bPKuuminn4zGAEcJTpiLpWpS5CZrmQQVKHcQbnS5d5t73bDEBoFidgHjTbHYLb9Vjfb7ooc6wejJSp",
  "key18": "5yfyjyssxU5yiKk62vwhJbNVJwjV54t8H8iQhDtK5sMMSpWUUCeh7tfD9VrxBvkzZazCUskydiFBYLwooTeeVbZ9",
  "key19": "r4aAi62X9QEuDJCNTwWupH3mzGAxUBiywRpUnomvSftVohZH27TsYsvfkcD6XHeShuyJrDx8DnY7N1dR3qMWLKn",
  "key20": "4oYPFbuPDAvfGC6TDerGWEcYif2F6c4rwajceUGNRBY2DVCCR8xJBJqrFknz2dJNqi1k2QDrL6BZDfasK6W2dyaP",
  "key21": "7sxuXxhNndXsYxGWYAeZnp8TGCR1cskesmQ4CNdvEvpqZwDhBKRnarpmghjjFkrUPbqvbckGMayVUp2Vx6JFwZr",
  "key22": "rkDVAcmfrW95fybayf1Nvdp54FGYzky1EB1kaMonCt5SZnwvfdxmUSZDqyajJmn352RDMkmx62xwcDtUbBqjRm2",
  "key23": "4vjj28hG8VxpfqTra7Rs6RWQ4XKpXdcxFHsP2Un3LgiDa5gTxHTkmSJs2T6P8uqLiAXQZ4aVW92xpVEcpdZqmNmK",
  "key24": "5rPXeqmoJfQLz5UoxurxTtuCb3oipC7g1pcTMhk8BoGK2NKQ346Di9gXyXWq2Wyot3H5Hj1bDA8PhnSs1zKTzBgK",
  "key25": "2v3rbaEvDUPUWHGJkNXVCc1vrSx7xg5rBWAf97F2w5wxQsRm6pSjAtwKHoeK5vRWjNJQ6uwSxevGDUjEnY71rMRg",
  "key26": "5XwnaGrFJGrDM3zksvnQkT6DMrs3JBNSUPRDyK3xfNNmvfev1jHCRh43ZnSM4HpHgS1NZeSc5kbVFJMezSDGQGVM",
  "key27": "1FWffogz2hLtJzRxUUVg4tP5Q2fb8197efeXAGhJDjAgkdcwaaRqQzkDwEacT9MXnVeCEWmcWtwMui3zU7Q6k9p",
  "key28": "2Aqeh92rvuZrStyqiZG29X6TUEj6chzf4boiWzqNvEzVh31AYYFD5fwnFumtYfq3M2VjvMSu6NnepXTmAYiYTMXq",
  "key29": "T9EoV3jHv4EyNTVwEzWAy6csT22gLX8rnh7NA9wPFhPZDSP6kv3xDU77EdgURVJ2YX17pWz4nEVUAseWaAqBSzt",
  "key30": "5QHQ62S14NCeLYK67Xd7uK2URVPw7cFbQN5uQtK8Ayo3S9kZeCtUKBZoik1EDENKhxnqx73PTU8g8ekyNLuTELKU",
  "key31": "F6rszd1Q1pPz8BzJjMmfLw9XeMLVF72p7K5DWBkN26aWgy2gbNMpWxdcCSF3phnij4niEhD33n8MdoSi23sPLZY",
  "key32": "277zjJ1iqaG2bayj1wgGicULtxzhHon3czjQf45BUXJ8H3k9TyECaZUwchd1RV2NvfRLa8fvNtDAXxuQQah3HpHg",
  "key33": "4Nq2Q6A1xb4CkvVAqaKkimamfJr5m3NVrQwBJp2GuVXCMKEiupGZRtSmXrQMKAdN4tGp87BJzZ6yXUAyDhHZVeDo",
  "key34": "2sawzWvD8ZaTCEAfSM6zhBvLc5gWmsvzzWu1ENc1bxQ5uuN7MhGUMSn2ThK7qNcp5TL1ZpDA7BpoKnVVCKcH2mrS",
  "key35": "4RXQMVhMiNKUgcHDZUAyCDCu3jhvsk3ceNgfJL6eBD5cpUUXjq8aQ3pYpKCZYoBwVQB7uLVAsUSHUZVBrhphTcak",
  "key36": "4f3X7tvK7d1m1uxvV9hhng9youR4aCwqrNEUU8QcYVHEZvwT5tnckGEL5BF6QBEanhFXiBtgkHw4SG8NyA5gV4fm"
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
