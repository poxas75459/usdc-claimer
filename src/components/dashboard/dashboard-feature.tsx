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
    "4WtoprYuk6MCVS41jBiE9hcqZPWVvX4faKhxemzxje1m7Zj9vmhCz2UzDq8JsNQpMaeTDHoUkuvtoipy64z9kDnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AioJZWKdQtT9A9nXpi3Qxfjzh4TtxrVEddsB8TxmNhh4FMP53cr4K1c7z7YYgfvEcyT6qY47ev6GiNCVfsQVbjW",
  "key1": "56HVAXKhikSNHZA4bNs6soADffozQcMVkBccbpkptzju5KBWFSaGGx7GmazcbT1zYmCDymv3JJ6xBwmAyEvBBs2e",
  "key2": "E6DzZYKHvXs6ygXTFmbkyfayzX4o5A3c4fvwqQ94EPCQv78dCfexT7XGg6qnwzDjwU2tkm5kNmCjQ9hE1mmwX7U",
  "key3": "2m2J8jc15DtfCr5RbyZJcjgmSGDanTso6Yxn5xFybXn1nBnVLd5yLb4KH6zg3HCGx3qpxpsMZoRrizHaFabs8XXL",
  "key4": "3EQvdvEjkUKDixTnBaiPkyXnVQpKqcHKiCz84NExg8RfaSNciCnvyJ5ZDSBkse2zyKjPCxg53qekuPqqNKWQueTU",
  "key5": "27AXch1iPMLtK3mvp7PeZYY6c9Hag8sVF6UjrAErHPeq8L5EcpCWFFvDd1ZkmvVR4mbhEX8it2TgELvdoPU9Cubu",
  "key6": "3rvbFCsAKaLwfbwNfeyC4G7jtoy1accszwhQyoWPd2BKdE8YAxz5guWEETFU6u8gS7S3rEq96JHSbhheYYLSKLcu",
  "key7": "3v8DSUCYxHq2DRqSzKhkmoRqdwhmHJqBaMrWd5tYdLiwmTPVCuooLDmKET8z8gQUvHgZeXnnyELnfGaQr8bd7NX8",
  "key8": "4pjwdexSaEokTqHCBkAmdPfMYhPqRCVJAMa1NpcdgPHzosBxs6MhdEmik6JBo9ZQtTt2xtR7kv1MFvVSaUDr6y3X",
  "key9": "4ZfvzyTPDso3rr5THiRKF2YrgdfEirU3v8x5eFXMwhWjEZLbtf2f9Ya91pBZ249CMmS6kAMRzZS7BazMBSd6xcMa",
  "key10": "3KLngyrW4JeiQsu23wPiV9fVh5P7qAFRNSwU4tZtnRUYF8ZiENZhTi5XLiswMWLyaBRz5ws6jqtcszRFfmBu1KHG",
  "key11": "5xKZKjpumNhQFmH3FFPvTTBopEND9BvA53Fjjakqvmqy3icGwspLomKvfEGBVzYNftYftyWiroozGWozJN8cyjVy",
  "key12": "pNsKgozzshH9vCuQVRhoCHdgrpxTSWanQJEubkv2Qe9WMEHAUURaiPN417pqqhup9rEsW5MbjuJrX6St9dQ6JTN",
  "key13": "4SRaVNagiMjmi9adqBr148AcXrFTPfLFwZyzCoFevCS7MneCMWiLzYoyazGwjpNy9gb6nGc915MNvD4ne3t7BA6N",
  "key14": "53zvQxz3C2NRFqCKYPeGk8iWJX8QJDH3zo294NbsgojEtsy4ddUsXzCWoSsDRMq2zpFC7uW6wE3ixvKRMXW9uqYJ",
  "key15": "bncRW2m4XtXu3njdNvNn9uXmMxmhpU99eP3qmMz7eBrXnTFahQqZxc4W8xCg3sTja6PuCWZJHgPc23GuHNYc692",
  "key16": "2y3E2ze1f8EV4B89vUN1xJaS3h1pJEzSKyiA7H4RHs7AMZUMgCuEV3vNpUeHjaQ6Ukjy37u9byBQaUC73ns5EmGF",
  "key17": "3TyzABMJ8rLmFxhusyZ9QYCQUh2zXn5xdsFQnCsJw1Z7UNyUKJKv1jmioGHVuk7wvxUNgmau8nZS9wQyUJr2ZjLB",
  "key18": "3zGpMYk85RNtPqeMYwLgWZgwFWTyatiAVmTq3exrfnnU7FxrNdBa2upxsCgtZo3dosY1oUsigbuh3qFTHuAzjPrj",
  "key19": "41xuL3N76jk43JffEsYkoYZbg77HYqJ467mzAxSRgijimNVQmREBEcy3q3mmPkdY2N9VafV7DT3F3hxzjjTdQzz3",
  "key20": "eHmk874WrqSHenaAuMNsCK23rGhVggaX8SjrkUqcemiCbqbW9kNacy3BdwDfR6BPZ6Uf9oPPuHnQz9h62CTUTZE",
  "key21": "2d6JnzskW46kVexoAVCDiE5oj8FzegmhKPXAVnziZMR7wiw4erQbeH7AhhCPc2HZ6oUZQfvY7iaHc5yKDxT68qZn",
  "key22": "odCQDksfzEuyH6ktzqXi4pBmYNVfvRM8cmoGm9Mi4vMVjjYtersfWTeMXixLJrdkH7Zt9eDe8eJCeWxppiyMfAM",
  "key23": "24a4JHqYwd9SnoVWz8WKwpWuD2EBi4W5ppNjrDiRqMXKP1GFjAy5FaZPCJG8u7uTQvh3KMcYqpapeRbcebfyGw97",
  "key24": "4HGjWXqG9z6kChchxKP958Jc165kt1kRvnCZXAyQgHUSpu7o8xq14qY5GEasmx1YdSriGDvoRGebamjsiLKgKPWZ",
  "key25": "3YyyKmGY4RSjRXhkNUkGk8JX6WGVJ1fqob7mTQ2XLgQ7RBNnTzbBX1Q8rwKbmAvu3xZNC7PejVdacb3Li9Psc3Fb",
  "key26": "R7s29VviwU1SerAcjeRxux7CDWuc8wA8zEzoCKphG75JpeT5SwMV2PYZBQA8uJPuMTjX5sthPUoCHmsgaE6uJ7r",
  "key27": "MonK9yUxnVLasZsGjH157wq2FcnZqHqTbaovZ1BQRjz72jkNKoALaXLZ8DBgPk7k6VWSLhZmuLEaJR1ZzpZeUKg",
  "key28": "3DUzxYiLbRuLN8JMKpGfPFu16Q9mpvy24nSFimXPDG4D97KZHdp1ZoPRoLSQ7Bz78WMqgV3rFfsafRARyknjCkzx",
  "key29": "5m2gUGw7XBeMYYKoVxmgTdSDDwsXeVf3FX16McuZ7r3tMBQdhUfeDaAKiBKx2GFYSjP3rDyurDomAi89GwbYyUPW",
  "key30": "57YGsj34SDVE5DgEErKKLoqHQ15WMVpzgcZHnq24TiQub7cGq7jGMR8SHMxPs9VoSM2LSGYHhc251WTcB3MMLpfF",
  "key31": "3DvcWzwpoQMbCbYwNjFLiTVHbYAiij8Q6KRn9S4uvu22XbHidRhMF1iLzNBgVthi1QFNxVp6JZvV49kmMnW3QifL",
  "key32": "4K8reYYoskdkZwKBSVjQpJyePx8kag2gRXAV5CRP2ZRquc7CHeH64KmxqC1QJHVsUHsSuYzCnT62vPX3NNny7KeB",
  "key33": "2TABm63T7mgfs4eYJoGujdKFyqKZ8cdPhu12NfMZ1MjFdw11S4GLmgegfNNcZAKv7vUURKzkAaY3CBXZx194Hncc",
  "key34": "3xMUr23KQob5G5FTU7vpYcgzMRNmqVBPNEiwasRB8jRjGgbQwg6kwCxonUQQ1zc2b3eaTy2WHok9ZTVzyN1oWRXT",
  "key35": "5aTm1QpRMB3qoZxiJ8NyuLWdmAFjuJCK6XxBVctM3DcYBuYqSPVPvQXC73jF3UNtK1384s9gVRaJCc1Cqk9MjLE1",
  "key36": "KW459ZRGipngLerCZtLgaqrbT5TZh7SLPVs2d9QBrR4B7G9RQ7xBZGVSY7QcrJxt2GakkbZLR9rrkhmnHhenZWy",
  "key37": "5fVg5kL1UzzYt3ePjz7b6krTYm6hUDci1gp7Eg2LWJrM1rBGQFsm9nSsfC7yfiSyt1VmcporTp6ppnWk7JhNXLpL",
  "key38": "48k6gUfGYFMSn95wagEwgFpkmEbysNJYbgVXmEiYEMRKcW9pQ1ieESF2qmZYqVLYsNeeuMM8kDJ7d64ryAifU1vL",
  "key39": "3dLCQHdALukRAjuUnWb18fNHqkV7Q9QJ5dwWhTLiXNAFNm9bbXVfZNHxqAw2qWsYRszPbdJnY8CmeqqFLFFXKyPB",
  "key40": "4NgxADnQ6oSS3hasGBufmzQ61g9gwfDVZ1vdn7ejNjVetjeRNGaGHsHqoDVyj3jRi98QdP1nedCtoyRaRtvZxQsV",
  "key41": "4YEJKcwokEbpmaKjMp8Ys79nU2b5H825HTo5Say5kYra3QsYQ5LEBoSNTDT7P2JfvToY6LTK5J6QoHeuPbYwxEzs",
  "key42": "53TJ8rm4RT3KtwZ6YKLz3C5FcCxgwvv4PuXM92pbC6j9EqhFw5ZETUz28UGK5rvXLmPPpJVAsbqWUUTt3vMm5tHz"
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
