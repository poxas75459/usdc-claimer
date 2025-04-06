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
    "4Eo7qps8bWvVZLbfXbNL4dHaAduxcd8fAiC5BMfzmRn44GbYYn6eBcj6nQeHF8MWPoetvsDeTV4GD4sW4YefnfF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bwh5mv1PB3qXLWBtSNKfB9ruwCaHXQugMA8rw9mWn1NG2TiRs9onUuUBYRk9NFTSKUuy6BdJfYQ1iMv7QcSKr91",
  "key1": "2VdhJBUYedrpcojKNp1ugg92Kxe2yGVxXPn2JkB3YiC1kDCGvJ5oMzY7z7SxW8TijwvKpxkZhMmdDgJ1G5vrD1Ca",
  "key2": "3pUu2KGF14wjSnzdBD5P2wgVUxcWPkmLLtn1hBj69RdLAPhsECPUfF6tc46TxUhw3GGHBKVrSchFBbFUGPVL95i9",
  "key3": "5TqJYkRqx83VBGm7FBKbefZCSN7dzSo21eAEMuiPmXwDpvR9VQsc8VQFsdcKNisLAGKY2vNoYergX8sNjivDFY6m",
  "key4": "5PzavMGjM5SSRyh1SNRx7MfVUcNXieYQ2Hx8hx7cqZPTFiKGQQ6RVRfUoF3ZVT1spjjusCWAbRfBiqqYAgc2q3QA",
  "key5": "443DEmLYGhdxTT7r2J6f9CPgNXLFUFtNAvJ4x1iWJf27fdQsprUtvxQE5hgiPqonXUDLeJLSa133F87ZSFV8SwD9",
  "key6": "2QejxYULPHXzdCAEQDUmSU7UB53SXYhTkHXadXertZBgoyyakVenATjypfvGcLpNzP4t9Hb27zfgE5XhX7UT9sFF",
  "key7": "4G9z4UbaaHz2CTGpFYMAxxka7eg2M34LVasjb4p5njKgqj85WGmfvJuP7V75vG8JsjJ5S5a2oeyzJVRyn13MFHTQ",
  "key8": "325RaS51P5pWacXgprBpngtgWt2szyFKtgc2N78ji5ZiB33SvPiFRyMQKV3zEUumxRottSM5XJEmPgtQzQm8aBfj",
  "key9": "4ondBnC6vuVDnK31rwCsJ2CD1coHg76vkpyVtxK5N1dZRB7g7wSVd5d3VXbM76CUQJY6jXtS4j1Fe95Afqd9pGia",
  "key10": "4eXCEKMNtFBfswxxy1dQGQqwbDHK5ytMViWFYAQ8aU9yB2xDU4LQ52yfwpH3tUYMqbfKkKK2kB6LRaf3KbDVHLsy",
  "key11": "nPnh5GaMtfPmxtfYqKrKwf1UKtLAh4mZwMrzAsU6X1Y3gcR3HW6XwQSksVWqVuC9xjWS8jg8AbF1ge64k2HPYHk",
  "key12": "2ujMx4WjhJ8yirXBNZtPQ9Sy3ZcfpV2SMUJpBGj41EUzhBDYGahQ4J3krhHNCnVSqfXxkmWQemTBXhBYhDHMnHkm",
  "key13": "4pKC3pcMXGnSXTEUW7ridAZh9VK9Z1S8VPv8QmJ9phNPFU37phaPrzETgvvZUH415Vu4PR38MC1j7U2mzwLv9UHy",
  "key14": "5D9QTwHV622srVYqoAYLaCrKE3bGQpVvAVawz6SmpUnrw3MPTGyvVRXecss5u4DJHzYBCQ6E4wEQGFWY9qW7CosY",
  "key15": "sinbH5RgUFfN6Zx3r8DbiHieAmPzvLCKgSEiH6QMjxnLKG3ph6Vuq56feKNBphwxSg5yZeiXPBGpKkT8PAR4ZmF",
  "key16": "W45jizAEiWZ1LyahNa5W5ahUFK3HzDE4UCegVhxYjRiM85yPcESK7V8V8ufajz23yNS3AQMLccMvnNYraPVebgB",
  "key17": "3aNtcLZZfbHkToK83rwcBb2u1z6xD5bM3NDyPFBiRcbuh8hq8UBAZLFjhjS2V4hX9YdGGKQtNn6RG6feoqVAzYap",
  "key18": "4EeNg4RMj6FWj4bPnCqZ9iZp1pESVboLvK4YDZXnsD72MdUVC1SoX5tbqj7TPpNotYyow8Py3RPATfQ6uVTrVcjQ",
  "key19": "Q5bT5CcvMLLDuPX7fXEhRQoGriGgMr9mRM7WimuAmddSfZ9GuhAHhH3yrMkpiE1spEnSWiBYEsWp5aMGy4JYXYN",
  "key20": "vibkP6etpHbzoGQ9PPNms4yy15JxCGpH39pnUn7iv2dc72J6Lc8vJ57JQqY3oU8R7E6zusfT1iVDiryEqPbzx2g",
  "key21": "2mZHaSer5HuawWi7zySVKj2ndS1YC7DPdEQD6qnkpRmiKBdwtXshjXg2XwiTFd7qVsyyXSE7FHZUDq4heuXN62du",
  "key22": "3G7q9CJeGjWkBjzUUy6TU8LoyhmzvqBeuNvUcB5JZfmHRkRjUF95gBBkedoYKrz711GuKpAbvXamjCNX2WxMmwPZ",
  "key23": "3KGPH9VF96ea6g7PUWh6LAfr4NFKGvNRqnEf9cPzfGYi7pHTZr92zm7AvRqHc9taphf5QkF9eGAMts9PvmqDuReF",
  "key24": "264CpyLijhuDR1yvWJ3tvvADYGf4izmrS7PXZGqN6W3cLkosVp6sA1rHccBfQiJ1Hr1VPBEV24wGFtUjXMG53hwb",
  "key25": "2Zw5y8t1vDNf73pyWBCdsyR3kH6EmbdpEWZNm6WaG9L7Ma5n1yModpiNgtd6ihQuemUC4ceh4b41v38kgvJ64Eps",
  "key26": "2QiZHeUn6XKuTCcgvfLMmK3sUEacdHEsEpEruayrGhwm1ssTHiLjY4TLdk72dwC837hEoPpLBjoNLj8AViKiAicQ",
  "key27": "4u5ndCXwQSS8vCF75QKV114zLPAt7Yox37ALDgLQJgT2uxM95vVwMrFp4y3cgWAyUemHrjGH7hGKbUvjqWp45RmE",
  "key28": "5eFevVfaRHkiM9CGD44WD4L1opGL7DcUnshWNG3R493Pckbemm98tgnNVYrTJ5DGMQLeSr19UrZzUmKGbqko99uH",
  "key29": "4Wz8NLwxHcP5Q7XR63rUYHbSSkyzvaYdCqoapWCEtM2xunYBP5w5RoxLLCpUGXxPzxHQLwaqbJLZS2qRiJ9xfgTX",
  "key30": "5qrwmww7MDFudZ5JgyP567jwV5CWT3TEVfc3F5Fw1no6tBWy4xhycSBEBtb5HEKDbybjJdXGmxrPjXb4oen2ggCT",
  "key31": "3GhQaMSBdRyyMKTXW5p2PhQy92ZB53NHgDenkkUr8LiKoyh9yxfJhe12W8BrvVrLC6zePVhFNCUFeoFVEMHZRnuG",
  "key32": "2dmE8pygqEpZh673o9NGtZoqUqKWvGMvZAowLpsxmoo9vXkgnxugXKz5SE2LLsbnGC63Ez7aBkE4Ypz593WenKZN",
  "key33": "3csbtz6dz3pkPKAAQKh7539WhfijZ1UojE9ykq87FSTtHE4LFVbhHy9wcEivdWirUcXPuMPm7BK8Lvjp2aV19yFm",
  "key34": "486NoQh943AuydEq71uZ96cnmCJm3GiT4JZhbnSNp435WdofpMqHc2WypN5jpDiVXKU9osvfNS4ATst3AVXekimS",
  "key35": "3tA5NGLvxm5Rwj5JBhcRCr3EQQoAk739ux3oLPRBbgKNGS494czF2VNP5821gLsGC19GhZWWAA4ojTj7HkWJ7h3j",
  "key36": "3yFUWcfiZxLKxAtzfdLiYjuosgcAVfUiosB1EXRUNfXGJWtREPZSWcPNo4KQqegSLYAHf6VBkLPP6W4yBFKCe5UJ",
  "key37": "2LD5j29sVoahHXPMXFPGQSKUXBecnAb7N6Zx3kqk7t1FsRhyW3a4zTdG945r1hkHTTvEEEf8qtFsJoSAv4NU5FTg",
  "key38": "3go3cindzBpjwGwVQGoCEDpVgVwAtofBqcPeBqw29VexJXjUeucCoN1pFJR8A5m5Zi37jMw2uKQhSD45ttKt5wHU",
  "key39": "4ouHVhpvu5yuvYSTCzwV8FMw6UUoBLgbYDJr6gswvJX7gQ4FkveHLFefo2hPBeEKH45JcfVS2n4yJ3jTq2SQRf9j",
  "key40": "4r6w6Cq1DAZdmszTqfnsawZQg4UBYd3BohXXFiBtiRFXoYZ8M77tQSf7KFetm4N5i8onGyGUDXTDbQc1ZSaRYMVe",
  "key41": "2Z8Yp3VcHkkCzqE52fR5iBbKWFdqVCEY4akHu6K5beCF4DA3Y4UAwULPY3UK4BEibuPkuBkGxf1xm5rpBw8W34td",
  "key42": "4iTJzpL4fKucQLSzP2A6FPTtH6BabFCzgZmjEYYRbSRBcipFtVnmN5F4kvPCQPouRxUPe935ghC1mBBJnBwJu9rf",
  "key43": "25oMUFb4pwoANdit7eELUZ4JKRC3cGNdXJbpBw3mH7fTLrYr6Zo114pnDKQntgLzsz7mNEq7fxAWA2uF2SQtCSoi",
  "key44": "32rkbnoRTMUX2FmnRAJcaymVLMjRAr4Yww5o9WTctnpTwd2kAh5dUR25h5HJdM1Ri1qp6A3URKZs3tcJXA7XwFz7",
  "key45": "2KCFxLDVomAy7LVLfufpjNXe6voKj9yzjctqxQGHjVxzJisSiV5NiB6Mdjimz9voeW35C9nafaFbBdwCpbzcQgsk",
  "key46": "29iQyFiQW6UJgEb8ZGZtL2pDcxuk5GsFH3BzQe8nqbf6def8icxotfAwvyBsKZvDCbkSfwZn97sbYKB8fxoiDkAt"
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
