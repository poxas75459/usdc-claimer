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
    "67ftf3qGHB4frpp4ZuqE8FG86f3x9p8bHXktqu7jiaj4u7n69KHzNWgfd4UwCE12XdaEYgUuD5BmZ2u5yAVNfJrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3xbbQ9TR8C9J5EnEpfNL72ffCP96aPHDiMKBP2DbygM84nABteXoYN5BZ2F3rY4XgNzunduwncaLWYDr2KVpTz",
  "key1": "4vbBLzxGaZiXUweThofWuMtnx6LJeC1qrNYxFPy3793JbJot2MxERPet4JELB9JFpM3RBGdTmdJcLoGv7EteqQ1u",
  "key2": "2kq634otMgDEmPEQqgGi19Lbdnwzav15B4gRqXcYxvmbyCTLSZxr5riVudHd9cdiAdqaSFNTQXmdsJqpghs1GYjn",
  "key3": "5uHNPqinVfRGDv6twfrpqryFimMYKAX5ZvnbJD3ZVYbHqKx6KGaosUPz75qMx741B9Zw18PWi8wYsqEsADK9SSmS",
  "key4": "5ymqBP3zRXwLrXdrWBGjumqvEPFGJUNS2oJarnzqzeE8nnsUiAqQQDEWqgazWdcwi7xUC8nLvBntV2ZZKaU9t8m8",
  "key5": "4mTCShiKVMLkdRZE249akrFTCGVmws4FPvqp9FTKjQsgEibVT6pTr1NdDQTW8RmRMDde5KAHWh859zU9v8jkHr1r",
  "key6": "2kaWfcB4ndmgdo3WTwrJWQ4bkkFvWNHSFaQrACg4m1bZANo4LwFyiZ7wxaXxHUNLJveQjdd8BmuicBuuvtabu9M7",
  "key7": "SfeJusWmVhvb4nkDSu3n2kAWtXqC3GZQtPxC9a9oUnXths3JR3ELfcXaxgYcGmMqebHWFDrAPmK5wjegPcLzYUo",
  "key8": "4JR78rficohjCA3kF8eEuRBJFoJByqZwiUsmN3Ry2hVmpvVgj5F4m3XFPd7D7vQAmzRFcS858Jkw3GYdm5NucyAY",
  "key9": "5kbZ2YYywB1pr8J7qBTDhmKJVj4m6DPTrN62Z8Hx6Xv7fvV24v9TAgz6PP4tTeGjfAv2GFpE2SDNmLRJB6CbwZwz",
  "key10": "3cxN5WdrFgdSjthWG3AsiMMndYGA9CWomJRVMp7PyExERcBm4CAFHJWJQzvybVSZKxNXusxWBFAGtvQH9nj6nayJ",
  "key11": "5pujekV8G7tZkj2fnapNM5MyLQmsoswQMPWkSHSajPCgh8Y5ZJnGFUMbpro9ksL4gjm9KU2XX5s4vUthvWYJZXf6",
  "key12": "4rGizY77SsBLLB8SUTA4aJ7668r6oWC4mEmbL5SpUxRMY8G9cRTcVFNBYtFM5ZDW97ehuah6tvgSWE39QyVR3djT",
  "key13": "4QaGM2CcdffNSVGn2zWpC8qszRbsPW7uJ7aApQUJXzygmF9RCAy1MkG7czQrM7u8eu2nnsoHfMiNAEM5Z66Mor9Y",
  "key14": "3M5qPN29SD1jfss8cNYqV8Q7H3JAhr6tB4RFBPQczTfj26fFV5yofCSj5XrAKWkvRvzoqTkDdAytJGnBaPijXpfK",
  "key15": "2rm35ot32DkFgEjDLabQGVyoxdWNdjcQFfVEggcAKUXSMwhTCyTjKiN9mLzbmZgfqWLftyGLHjddPYjk5bGkezhm",
  "key16": "5UayPy5iwCRiqhaaYFG3seiteCpAdjGHZfg8HpRj3p79JaC3Jep5EAG9YvcJ6Ee3XywqmxVcYVnyHNcYNGrgZ9zT",
  "key17": "3yrH7h6Ytp5L67HVTgfEzkMYWBdSPiMy3YNYTGasd1XJq3f1cHWtbSqbRcCUVbaLhFU337v3sjuJRVTiUmUwLzgu",
  "key18": "21zbN69Xgi8MHgfYU6fYwN1EtbK4gWKPyMVuk9pabLgaHF5AiM86jybbfUxUpT5w4DCFChPwMWuvMND7Mq6gBhfK",
  "key19": "3avnPrMxUo9RnnG5ZfoZ3kR5NoRNc2WNKn9fHihagEoBY5rQmWvjCBXjpcTsaZNLRUd7yiPDBnbGp45woAXgG4dn",
  "key20": "iSb1mJTkwoxeU8MooQXeGCC72M6B7xrxa1g2kQD8jNSoGW9fV5FTaguthFCRSDXaTzh59EvhYpBr4u3q7P1uRRQ",
  "key21": "3mV8TT4geXLzG8TXLLQGUXs2wfShHoMZrUccGndaaD7i7FpiiCecezZtZ1pwmzbUfhu5EcW7mYYiWVUv9PVvbcCf",
  "key22": "5k9NniRm6AidpfFfnedF7DhegkfCCYRAXKNrqwRWnGEKdA8gM8i3cSxV7b7RKhu883Jqf6PW3Azh1JmBv8sKusRK",
  "key23": "62SoQqNJX33V4KrwimwWbsNyMWXT54kqYGFu2JKC1Xz9XShCMR8zkLE8zSsLM15kxZ6Ur1vDQb2gtdyE1snVqpjd",
  "key24": "2QY1yR2dyEa2cYJPzNvK3gcGQV1XyXqy3cr9WW9Lm9djL4hsw5XmKYMDEDBZuVc1zqWx9yy71wMHA4DunxWy2p8",
  "key25": "3X88fsyrDqiwYqGNH4oLYmu6gD7utKVK2BJr1PZufy3yKnZqPRfYzReKuyGRNcafi9PDqhyBzvSiiNQgdpBhbbbP",
  "key26": "5EnN3M8CLmMzGhvpaKuFTN89uciF5KEHSExB69XzqwFqdVZWZnsJhfH8cLyf3xoyAXofUnYpRGwAAwjtGmswkorm",
  "key27": "5taad2f42njwThoiCzU6k2pCXV1Qh3PTvLDeZYdFimEPkMASriRsAWbM66bc6zmcfDhsp5UyKseapfXLkEcNmNW4",
  "key28": "dizDnRM5BD39MhW5CVcdREJ7vheRDpgt4NafqQxCvzXoiMofYM3CwYCmxC6FJVXXUBZsMPHKdetky8DhgNoXm9d",
  "key29": "46KHS44Yyisgzn4zxnZ8PbRRkMWBMNMuhPQ7baY23qMm6gCPtL45uqTJdAYwQ3Wq99kyjd8R7GmaMRAVG1tDF4wU",
  "key30": "5RJHurEKaAf6R4ceJfinS6i9nUuqAomQxyLM5jxzLNN42QuXgmPLxHvLT2GDL1dmh6ogHrppoCeQDjMXa8DLg78r",
  "key31": "3NUnC7Hxew4HtS2GrUv6mnXMM5VCBTBKhztgFN8D8zbAMoD5hM47zHRQtU6sxQQ3K67nxbfoLKkBa1wtzmyB7rfw",
  "key32": "tg8nNnQqDxYxNz7F3PbYTni82EGBgHAZptpW65CL96PZuxupEUq5WMD8QTS9Kg1Zb8jCYruHaZQjpWwfwQdUn2V",
  "key33": "3XbABEYi8fu2eJAN8pXhwmc1Z6KwyythRVD9ujUJALjg655URmfnZPtTvyp75HAitvXAkAf5H7dNfwG7Zx86ZPLL",
  "key34": "44cyV4ES918ogf8VM1WBRcRqwLGDPfvQwzmEujkpN7AZ6crdpxGGNJ7uZn22GqgEMsAcYq4Sk4qhaNRWAowoju67",
  "key35": "4qTFAAD5W6vUwfvbWZD4VYMK38tBihuMDe4foLiejhsCGk3AJQdxFuzpqNAPTgYGZm4PqQ2DSparKsE6oGbAFPmD",
  "key36": "5XSg9ceTUypHfRPy97dTwrfLSDeLVPAtuyXmRg6DkiVTiAZMDzupJaksAjWnqYTxUJMa5ga2FtapSK16mVWK1GwD",
  "key37": "3hBMmLuE3a3X8jsGPnBrMNGxkpAaYJ3J1x392MKRX8QHWShUqLVAodoDNp8CrwkwiVXywsLzAkAncQ7qW7h9oRhA",
  "key38": "4RNgBWo5JS35oqkNNavpiU9L84k1cPmuSL6ox583sWuQvHBQUh17fuS1kENyE1NFzQVJgvn1etaer4oHHXTYZLEd",
  "key39": "2mDSnNkyg3D4zyBAuLQjNBr9mGcugmKiMc4fR83ENhxTAd6iTRBN3uSjsNhnYSZxAhTzwrgfE5JUmyAdw7sC6Cf4",
  "key40": "4W1z9udKVb4bwLtmiXENCpcb4t1jFxMfz61D4JnS1hi3Atm1G56Bm5MJe6a8QgntCQWYy5DXz1PuiHqMmL1hf3b6",
  "key41": "2DSw5SyUfqmgtVxPVCZRm1fbo21i1aEGFAfY9gHS8xue1Lv4PnJuWcPF5QYvAjxQRoKrpr6yKNSiYxwSdaNBghni",
  "key42": "36QTcDGrW4V44XMioDW2e2CWdTSASoARhqiztzgzAXJ9QHKhjA6xjhEVwRfFpw1SQdNC2xGYoVyCLeFNXEqFpK7Y",
  "key43": "2YBuQLG8peUT2W8UDzsNrk9Zwx3hzFhpu4wtQFZ2dgZdsrxopNuk53zSMrmRjVvYGaz4GhQdCKkv9vbnKrVFmmq5",
  "key44": "KCnZJ7W7NwKLGoRHm69B1nqrDJaS5z2DdR81FgMJymbctUadFZZAa5ntVEawBu3pXcwmrTt5WkCUQD5CR5PuULL",
  "key45": "4hwXTSDbDUcoJ3NUzx4Bt9tU2QZghk1gygqLrs1jVMz5QPN2VeBPSDv48Nh5NJfmP9DkgJK1KewyAsszWTsPimH8",
  "key46": "56BukvaZErdM1TSykf2kMZ9FzMtasdz8FskG1UJH6bJqaU67LoSHU1bMjv2vQfaxBsp8Qw5hRgat5FJd8iaYXM8o"
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
