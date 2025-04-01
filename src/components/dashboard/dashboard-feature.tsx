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
    "3pvPCbGAdCBT7VU4f4Rk8Sc5woEzrLUsE6ZaFmu2a4GkTAbzAshPQhFiKZQ28REWnotu1t4GZwgoamkFz38L7v9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3CBuFLYrsH4bM53MRZ1BUYUosMbo9ke98mqVCQtqpyaK3LBhoPqUYZkvKZmFG2ECLBKb263qRcoNAbKrPty9Pe",
  "key1": "2Q9GhVmLUZyWjBTMgtLAuQr29PaGyrwXN8Cf8kkkwckTZjFP7x97zLiwwxswerUvx436JUjxtL8gCZMXBMfcmLRR",
  "key2": "2jdwVQHh2ht4XahH3Ti7BqXrWyn4hd5XgQ8p1a7Kwjky6fNgcLR8uNf989NRFUUJ7dhfYG8H5rHzD7PreZETqrCr",
  "key3": "4hEMgwBVdpCapTB4Ehspsi9T8RQq8yu3pHhYrwkzGyJULacz1mykTeoxJSbnWD1tzhQSjib1H9apjJRGYKsHLgvq",
  "key4": "jqDxAEcKsc1Ak9CcyPgZGuEdct5hcKTLVU7sbHdPPafQZzJmNNZtdURtFssBQWERLwx7GwacmMgUKeXd8pezSse",
  "key5": "3DjooSgYhuyyRCrj222YsPttwT2uYpqWUCXKU9rD5vrLwsRM7aDghbxiMKF9KUAD9f8qU4fae3Uxzv1vFwULRSKb",
  "key6": "P6qjyqP6gShXjUF4Sr8hXmYnweyX1144Gwtfm6T37eAGvfSL4UhRw3anwo9bPEmqA86K9t5xwmxTykdJT5Q6vFm",
  "key7": "57eBPzycEyzEEBJh3tE7SRLnZEBjsF1WhT1wjdZVcDT4EyvL3mUBQjCWVMkyi5zMDhHvRtbM88hEi1n82rH2Zqvv",
  "key8": "2XzS3huGWh7NL4fM2gWwYFMZ5LB5ApRByHLnPHdh5aSqrKYoVmhXd7vE26qnCuyWf483jDWFXHh5eNRnhrx6cehA",
  "key9": "yHnPiHUq7dK5fyVxx9AQDvu3y6a3XkufcEvr2tRYbUVLFAhdGpSWfSGBQUbDiYvr7J94UnE9E6mwFW1Hjh7sfZr",
  "key10": "25onnMsXmaDMEJYy4McMbF1ExmskjTLXQgpCGvjha2y1Tas2F6rsuExTdwW15ytRdBW4diyToJkyeBKeAZdf51VA",
  "key11": "b82V56UPDRTUj32osK84CtFy2uWWA6ZcT5UfGaRVska5C6dA4mV2bjShAqJ45Zsq9iqzWjynmuspYdo8fCmNVtR",
  "key12": "2fWWZpive44ZCGHJq4aDAq7VRJiF3HQvXD7wjbqRCZNo9iYPUgL7h7h1dsAizwwQhvdUkUHL1Vrr8ocL4qTgKX6k",
  "key13": "2ViwVFoii1kao2NdMLyd7agg59xY33HUvS3dox9W4fupQkyTaWS2Yc4Ci5aqkLpyW67KkyrreDeYzQcEW8iXd3Pj",
  "key14": "4fMwkGhiWuoXNS6ggcmbUQnMeZgppwE1Q4Ts9RJLh26V9hTDWq45T5NzK5LaMEMQpFpVVkcBDmYkbj1FrpFZKvtM",
  "key15": "2me9dboiVpd4yK28bohMPASjQMecKzi2ZQnC1mTc6KytgPmPSf8YmkVt2sVcoN7mpy69wqa6ei7UBZgvXFRPyviJ",
  "key16": "33NSAksqZFNewZsCwPsqGSscj3NKVGNyQu25k5QH16QfYHUpNw7fQ9ytLdYeKufYRkmBJ8r8FFZtrnBMB5NYVNCA",
  "key17": "csfKSDzW9qhFN5NCevBwdw31zcrWUi4kvk8eWCBQiX1TcbtDxUyxWp4UyZNAbc1CAgBCaKcgW8ij26VUjQvzzcm",
  "key18": "2UmJ9mGnUUwNHe2DrQvN7EiNd7c8rsDmTYjKk339SwF4RvUvMa4mCSCPJHqth5uYwamX7qUPtFcbn55LcZDjKSZc",
  "key19": "2pEHUhs6wyfnxoPHz9u8Ja8qjUrhrtVG3g84c5ZV5EfSYBVmxCF6TQZJjdcL24XyoRrx592pNnY5Q8fXQjTW1XKh",
  "key20": "AANQCeH3EVdGHTYUbUtwcuxj11n2B1oTXMTHQKAu5TvQoy6YiHnDZ4iXjbqygo4eG1hgnLaHntJ7JdTijRFZBuB",
  "key21": "5HK7Xeb7EYQkS2CozQ1CwdTQzAhdzveKoL7iTh6Nc5yFfu7C5Bg7w5LqrLbjfkTxsJUYXb157yGSYcSe77UvbpVz",
  "key22": "3F6SXbLKZsvRs68dm8KdXBy3J79VVmx4XF9V1yowwwQE8ZmvUy6TwQ5YhpHXhw1o27PpESvPFRn8KAwzy39zzrqx",
  "key23": "mXipPt3ohYTw8iV7XZ5vm2uc4Rtxuaa8vwDcH85kZYP82F2dDQPBtzxwxMdbwUMn9amFDHbv9YssBeYUAvAjtxg",
  "key24": "3Yn6DmFgxrRMvHBCD23cJvgAVQ1drfjsRTLoGepQdAUm4dJHyjHLM9apo47FsJJzWac2GStbWYnzqfnpSCPSKeCn",
  "key25": "42ShYRtMa1K35NyyBDFdA2srs1S9E8BvwCLaQKvj5zau18vGj6L1bu8iKwsM6MWwhrwv2N5wNC35yNKQe4YgWEbs",
  "key26": "4v4B9Nfdp8KkMdfaWQkPBkMrgg9JjvGNMP56WmJh4tGfmRYX83KVtwqp7HyoE44JW4nktUakVDfJmD3grgXisN96",
  "key27": "1MiPkFzs8bcWTdbUL2vrMPQoATiZTd4UEnc7DzwMqVXVQoJskHuUMfxNGM2LPar1Y29PsMXRmwZKt65A1hz5snJ",
  "key28": "zzDcTYQ7qVmjXgVWrzTR9GswpKXpML3hfYYVBq2cxmWUgW5iZDV5EpDDZzw2o6f8XvqwMMhPfrarsuqJX1bgPKb",
  "key29": "54D8RXpfZ76K7DcQrnmQCUoTiEi6zTd16k8k9YnquN6DrpbhNyXbitHfqyX9jEfnTHmZprMhv46r761hoqcsNFSh",
  "key30": "5kjDJ61wNTUkYwiPmKBaabEBDtvnpwUfhF2JaVT5goVYRXDExd9Dxgqbrm27xoZPoe8tzs4Qz6NtUfArdGskD6MR",
  "key31": "3pMAcagFZAcvBLyMJ13m6nUrwyY3EeufhBj88sGH2oAhubFT7Sb1BPGAdRQMSwdfU9u8F7DGubHk7DADX2JYDZ1H",
  "key32": "5X9WP3CoXCBV11s6HMA862mpdA61A8ekB4bhgnDdGqz21b21i6LG15Z91J8AF1BhJX8vmcv666Sgi854Dgct42bT",
  "key33": "3AfFkdaApEE9cyf3ZYD9ekk5K894xKNEqDxSkik6ZkbBmk9FWR3bi6b78coZbxef9RGqMjCnxWhFNFiysspLzKSb",
  "key34": "5o4QKiz9UDxyE4dzGnWCJiRCeLBZ9ZXKPzTmZi4wBxgoXEFnuBqytTHaUyKmN312ZmQvCvfRdVUSxFzTuuainddU",
  "key35": "5h2bGnyxNY5up1hP2YBV8B5winjQ58rsF13ufW9EWruSCBLenyKLJyknQrgCjfsKFb8rqTnfByfYnvbK8yKydiqU",
  "key36": "4hhxe1oFR7jai2RfTgmy8F2N6DRmFfqXiQRjPWUwGY3yKmuMqKcy7F5BHzdw8cqpAjgrxrXSUtBBcrpHgMX7A5b3",
  "key37": "58GHDhEMB19pw6jtVR7QPLLh6x5axpkG7VoF2dhYh7qg4jNZgWUwYnwRNEjEjA3yf3SB42DyxLVrG8yfh764PmND",
  "key38": "2byVEYZzzALr5gbWu7myTXWe46Sm4ayMCkkLVzh8CEH9zn29Dg92f2BL1A59dMhbFqQ3ZkxBwDspCXHHBbGkgQeY",
  "key39": "2nB7rwMc6YLUh2NKDf578feDiMiRniQLNmvM8m7qBGx2oi3CKej6Bi4jXgkRWB8xBmYvLnSuiXgqx8ez4Ap63UNi",
  "key40": "65CkU7FptrFcgXKkCSrGrHz47nu4KSLNXn9rxDsrksachKeFVz9Z6f1vRX8k6UyRHycEkyVg72KmquWSH6ZKDRqg",
  "key41": "3oyhqd8MfMDBKRxjEFKUJgKHaVCuLZFqSaqM37mywQog4XmrkQ3ZVSeTXdUCFRuXwAdHbcDexw8TjMTGJRZCRTG1",
  "key42": "GLEaRktdzGoUzjyeJd7N7ShU9xLNDTYL3kLESgGcYCfdTRaBBTDaUTPZ5VG1Q5DEzLVuMCCyiA6nLgUqq88CmY3"
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
