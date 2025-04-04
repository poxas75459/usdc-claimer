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
    "5R3c74LCBt4LqrMMJGuVGpUhmXNdkNCN6E1N263PFH5MCAe4C1amF7WCktSMXSiT29o5ucN68e4wJ4HnBZmWnMUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wM7LiVyd31E8Yi8n2zFCG56UMgd6JgfQMK6PZB5jhiX3YSFqStgyRvuc7zjDWLMwfPLjbQPB8KrARHFLnjitU3Z",
  "key1": "1ZVxE765nEjKs11yynFtgEXFFcDxGdEZABQcd3FaoQgTrkv3XDPoTMdWJoQUbt4RSyGLrKpyZtqCJG3zhQgjoPC",
  "key2": "2ZoVGQQoteF3xUSfA9Xy8mUMHJbE1edMABBxW64Kwk3Hyfr8GXASjsBVvhe5MJKPa3jZkp5MWzVn4CXtdJf8R2fC",
  "key3": "32FpGWZPzAX3sPaVT1kzix92frihbUjDWmWCQRqKcYSunQ2yaapWYoFhLCykqZr9tNRLV8ZytCCbDw5CLj1UYj7A",
  "key4": "3iMZdP7afqNoLyhgUqYkUZzpRz9gEugRXNY6S9JT7Wzc2waj1vn9yXZb9BzNsmnPykkxqu2t14JY65AQzePaQnKx",
  "key5": "ersSq6Jv7uCUFgnC2f2NS8hnxuRw445BXWMYZ7nuioQQWzcJKiJRZksVgizgXkeA2auymUXvih9PuHqwwKxvgqB",
  "key6": "5Kt1bQ1nNo7jARP8gNEXgRd2K27LvWP65SKwi2ofUxu1rWHzhMyEaeVGE1FzYbEXwowF35mmCU16F2dwJmu1w7Te",
  "key7": "2c2pzTDEiYaKXavM6X26tWVuKy1wGDwVr9FHvBiSv1U727bQqHdu83BXM8EZgBQ9w9RiToEKrTWQxf1UrjczKdww",
  "key8": "35G4qwCWYUj21iSWRoLg3XUUNXBeENTrZrrpoT9sHHANjWgQpPRjAQYQKuQgzE8jmVq8GUU5BnKKL2cyBRr5S18z",
  "key9": "3ha9V7P6zGXKfm2yJg76J7rdPnETBN2h8vx1rjBXzKkiFBpci2bds7gsphbGiFHy8k6PH2e6hXsiTA7T3zWVwKB1",
  "key10": "5PkUSfDZnKzJGqKS1yJq6BHDxdAG749SVHVQKN6decxN6BzuHaptz7wQdgYQEFNFRNwnTwJtWKjBg72uznYbPPku",
  "key11": "HF2zRewHTCwVAMHaFAaqJ5XX2gneVv3rmtcvEAWdCgkjtUvew3trStNGE4bLpFKEh6s6oxyCNmrcfL3ZEfXvwHY",
  "key12": "3BupwV2QRvGUasvvez25AMML6vPXzwXTGsTJ3EXQt4DXBpVuTfzyaSSXXgzyrTfK66Pky5cvMykeH1pQMSSJ2FXb",
  "key13": "4RcB5DLi7LKYqdH6YcDg8yS7iPiqqaATmzy1X7fgKmYfEAKwv7s9wmmhjhY4YfFMGfz84vFDnC1uSuYiKL9YK7Xu",
  "key14": "WBw6frCrNNxWAKTSnXTKDdjXQXZB7vAJu89ARmV83V7UciLequZBmeG7aSePjEr1yrcd9sA4xF9jxk4wvwRUe9Q",
  "key15": "2BwnBtpRr8imKKkj81P9n8NaMkh6PN4FkjEYvGPh5Abes9dcsDnRpAqHijmnEYhitMnbWeWKcWg4RDCiSdS83YHi",
  "key16": "3Qi8CBM22fbyg7e3qm251RqYxAR3Fywx8Szkgv3LyoamrufMgpSNHSVcKPPU9EeRiBhcHLMFU59FHYs8JzvHMULw",
  "key17": "2QJXcdMVjgxGVYNeWS1A27HBgUD74qbuLBAYT9BTJ8o8nQPJ7Zxi6LwrFiQTMnV1JmXPRPFePBEbnHddJetidRja",
  "key18": "GbiHg6ChLNnV9wGYtdPuhgKw7Jke3JFL2nq3RurgvjyyZtsLvwovS4TUfbcTiDJmUMrXZ7teP5h1jyEnJMToXLd",
  "key19": "QeKiqGzDiCY7vSLZXBjezMxXbdRi6QKrjUEQ3FdazNxMQZfPxYpbPe1tUqZV7eXGWmhz7No1syonucHZCfseTJE",
  "key20": "5bq4SgYDkNRQsj2GitJM6p1st6nA1DSDZofQjM1jxz9gKENqsur4sozEJzZcMUpruUqAe2QchUk5geQVgW1W3vZk",
  "key21": "2vKEF1Q8Y7aQU1vYYXC27Jf8ZVKPYRVFDbeMdg7N4cUbJMAcoG9qbJhRonpcUAL2TiDBrXbet3MA1MAWwTT9gB4E",
  "key22": "2FGNDERTyEEK3AkrtkVcKo4Kikk4wRy8KXoRPQ7bgYjXQVhSxmEALiYLz6B8SvNJYQs1SNvgEXRe9vJjQwX3HtrC",
  "key23": "HNvqShv7H3FopsYPHLs7mVuGwSFo6ZuBk8LAHwJZCJ1aVShUnppUzz3hV6pSrAjC1gt7A1RhdS2n3Kpq9AQDYkT",
  "key24": "oR5yoFDAkN56MTttQ9ds8GPHmEVgUXrPUeh3oz5qQ8APzNavXcaAKFBeFgZZSuAQPqKVgbAqQzPJ79eYWKVsxSX",
  "key25": "3B4gnTtAciqTQxdL3evWqQjYyesu9s2jn9K7rva9mtkAFcR7FBf27a1LtjrNxkdyd2dwkPh9hRAgwxCYL5XKbBSh",
  "key26": "4EnfrjPvkFFDkopn7ieC3hFF6GWfbEAnLTatcPC1MgPQQNVrghDzq5YMRJYURwn3q5VZ2ccvYLYth7fMC7zt2gUq",
  "key27": "sguHWiVPaFwDibSLXFmc1ghTxufsavnusz7QzuMMn8q5aQuiUVZM5rJy2JM2V6qcry5JEKfJrLoJw4cLxKuVc1D",
  "key28": "JkCBE94Tb4PuZhakKBuM1VPwrwZWbxn5T9oDaA3kRk1nDTuW5EJiozJfuQ4dTNhpPz2NogSEdX1H7Z6zx5nqYbn",
  "key29": "3se8g4YDPFBbzDnAfL423pZfBMiBBoFTxPGLCJbTz1mLN8gBz7uHMvCSmbyLLMwF3rc4LgZMXTh3ZfCcuDbMQUVW",
  "key30": "2acUpegsTWKnWaaatMjybDd3Kio7wKbmjgNCiRwE47UJzfqXUoSFVDDzni9m4q5RtUxAGMdPoeyJc5dY9Jidut5F",
  "key31": "2sXoczrK9LVEFekRACN5izy7RwJDTLq9D6DbE1EsUPaVhGEbpr6Xcdk5hA9xvpMhtWuYQ5kxahWsj35abNJLP8vY",
  "key32": "4nbEx8EHzNeSnZ91cWWo3gkK8c6aZUdSiqSvmV1m8E8xxG5X7E5ZNR2DXxWFTVs6RfXeupoxXKdQUt6tCzMZkZLb",
  "key33": "3XSRMXt4vNvtoFm4qyH1rhoQzUXZTpiWQga1mL1BbejBwuEphK15ZE9R9VNBc59Zpmx1gNT1VKv58iQEEXSbfygW",
  "key34": "43xg2PTJJUv3HDaH2t9xwYBShJv8rHta1RuKUghUdPUXxcu7CNe1qS5E4DPaFJ2iA71Y4iCc5t64uxzZc6WsAH7t",
  "key35": "3dSW2Rn5CfeatbwbsXuQ1QoU2ZwButT2v9bYJtm5eWkg8LndV66vJJMWBaGZsGjZWpJFLnBRVpmUb4WTUu2ofpeN",
  "key36": "24zNgUUs6BZkez7ogN7Mkn4fhXSHiL71M66KqJYKqz1GGxbQNiGxu8Y1iVAL8EiPA6uaisy1XWt4EkEaTZxi6PBT",
  "key37": "5T8k5ibdPsqFf2KmdHu35cx7hWQLyzX8VC23C8ZegdJtSxQJRpwdM4iweNkDhzgkCedf1RXYdeRiTe6v5wDsHgye",
  "key38": "4qD76aRXVJuEzrtD6ZpwZj6erez2f9GwtTQt4Y1XjpVsK9fZBBq2PPzsT88u35dXwHgSTo68GBJDeunA4XnKWEyW"
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
