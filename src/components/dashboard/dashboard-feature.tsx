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
    "2sZayrEpHbBg6hxWEy6xPxE7poCYDuEd2WNMeGZjFhjHKNedarq2bLFX3QEfLJUz6JPNfomwX5KTsXcUQWc6yUfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Go43FpLprCcaCv49HPTpBaZVS22xzartBXzWLs3eCnFxLojoxNaHjAZft4KsEGVtA65b8iKqL9UymEPVx9pcYm1",
  "key1": "2ZB7mPU5mZA2RsMjvAGRoriw8DpBXyk8cQRaaqR1x3VwkrTSDZuEHBCiZTEj7EkMapKTYYorEqAgEsTGEHfpeKcr",
  "key2": "3EeUchQvGzAyeZnXzexk7SpUvmVyjH1Zt86XRgVzmdFZRdqSoJhoPii2kKeCjpBVaZoHanAQvYvcpnedqGgibpba",
  "key3": "3mUWcyD8sUhkHdzBWZcfWVHwSpicJwosgZgRy1KhzEdhBPZhvuuGigpdukU97HapCK4vjqdwKuscjnusL96hX4mf",
  "key4": "a6DziuE73zN7ugFVdqe5dGCRaN9mTQ52YyAbAd4ypKLS7fpyHRLsVm1rCu353VQgFy27EbJTsN4aJdc2SDody21",
  "key5": "2nw2haTwdiASrUX75PaiqgUZ4VkfEVXen6JrZ7juR2LKzN85w1rwXqERGEUy2sAuPTxana9T2y1EETSvCp9YUpwD",
  "key6": "3vyGgPZdHvvWRcLF3FznhrxXafwWHRvQdPgejkVdjcYyoCbrrFkXyZm9sw981eL94dHnC6xJAJkgpudkprvWcbsb",
  "key7": "3JDr9cDBx4C6H1Ps9Sd2dgEiTarfFSbexQjv9WfQhDmFHiyFeaoN1thz6btv1wtnQWPk8brsUznBFzHBcmTtM4D",
  "key8": "2r3aFFbB8DiBiJbCZ98d3LytxA58FbZvjAffPC8MrqQXYgevr4E8p7j7BB2ycJ6ThD7bNMt54JgRecCKGcBL8ZvT",
  "key9": "4uGJaob2iMwmywcmod8G1fNenWT8RCkhTgy3zysvrPjXP7kZNRpmREn3Xe1tX95vfdo5NPqDRzC2MpbGEQa12pig",
  "key10": "2w5dtLtMk2SS9KUTKmAgUjTJ2NzZMxSJyVNTEy58AoJZh5JKtYs7doXFZZqY4nLLhLWH9P2kPPzYomwAYGjb4dU",
  "key11": "5L3j4GzA9uPSypFGwthtuzBuQ31NXSRbQaNT7Ezw58vGBYU8HkxekLX3rS41NPvCZQk914BwBobR78TtYnFdmKHU",
  "key12": "2Ntnu2xHWr2gQCxdgWDQRsdc9cfaWhZfTCyV36BBkDC18D4dviQkBk5vsBWPavWXKi7ChoS2jbLRCowo9jFmbDWT",
  "key13": "4Jvdq5Bme1SQ2eUFZViVQPPtd6Y2gEAZrPJFXZPLKKG5QZM39a3w7h9RLTm8ppFrLXZK1gPF8WvioMppZrkdsSj3",
  "key14": "2jFpbiMJrK9uarsymEdShJzug9hnki11heLCGo6s49g8waX5HmGpyrMCn6N4yv95EutxJMnp19SNZ8fNvTTGXBkR",
  "key15": "3UB4sa6LLMQcqCxNTCkrcb3jBc11WwugnkLVVHqPmSbsM2CTMhkPi1wNRAuz19LkQmzPVXuHcqZN5Y37URz3eU1R",
  "key16": "3zFeJhHB3NuX6a9mruYKKcdkHnNyJzxWmHppKbz94H2WMW59cbHFhfcunZEyJhf8ZjdyqiktEfZutK8QRwWBTUkm",
  "key17": "3Gzr2Q8unzvfcuDnSoNGQWNzYHuhESs9TWKbuYaPUZXccc3fAodmaF6i1dTiBaFp2n6WwcSQwbKs8i1LFsC2X7z7",
  "key18": "5QL5KB1ekPmvjKDGXuAE42p5MK6wyaU7RsgNs7r3J6o7nmMCX4cFoVanj35TKMV7zsCVGet7n21ihFgyKLTR2iTy",
  "key19": "KWY7c1uMnphXopoY2gCU5ZBAxf2tDKi3gjafL6HGZTK2dqM6vb4L6c2WPZ2ig4PaY1w1ZBno81oCTefDYt7b7CA",
  "key20": "ESKHfedBgnqwnpcf2MCp5V9YTTiLvL84K9sKmjcLDurpzKMZVn1zy46FNfSjXuxRyaXHyH4j79vocxK8zzi5vyu",
  "key21": "2SxRFrAiUge1Vc8NHBK78JwWDaKxenSv1sDAMTmF4Nax6SCFakV5LuU3b2kf53oWNb4GuVxtFNpcQi2MxLKrJrcm",
  "key22": "2D8PwBBKV4HKqJiEvjbSr5A9rst9MibcKRJ1RVyNVZRm2S7QgAfokRLBJr5v1rNT2KfXbVap6wbzsYitMRJW8MkV",
  "key23": "yxs4nzkQH973DTuowCrGza2CdvKmmhZuf1A2iqtGid8UkMYrP46zK43jXTwjeS4g8TrkHjkPQDPHYAadUDqT7Lo",
  "key24": "xabeZ8itLhbLSxur8GjBoQFiDP4J43YE6eftgb14p3BW1iK2RZmkTUp5nZ11MM9rzox6HCeChdMwhU9kWHZnpEW",
  "key25": "yKqb5sdBdoZ64L13TmB67JarJint29Lz3TC5aVUSb13c97ViDAEcD5GVtuZyPZYiQ8r4W6sULrmQ4JFZqWMd5Fz",
  "key26": "3Ti86jD7yLPUPs4K8PKk7Z6D66u1mjqR78r5PoGk9NZo3YVThenn1YUW2eT3HtyUoZvqmRhsMPFffHe7QUsxhPsp",
  "key27": "EdZgUTXD4giS28khy3t5TSrA5LjaiwYtrMKYgU1HVJxGuey1zYNjRi1t3DJDpqdVB7K5VN6AAVR6WK7TLBHh4dX",
  "key28": "4brFwUep7ur6pAmwRuhkH1DiZxdZUAMX1xL2Qf4VjMteHVJiq8pwyC16M1nAYKGZSdxzASpNQyP418N6T63YxSRZ",
  "key29": "2KegV4efLRnyrm9coW997V7qE829hrztre2yfcu3GJmFxrfjA6qCV214TkRn2Lu3ja7XXWaQnm9wTsEpRKRkuSvQ",
  "key30": "Rmtu8n6o9b6MkSZwkEuyuFMfrQ6Y4F1V2E95aZJyqSk68cf9mvrdBsqpUjx1WBsmBUom9FYRgyVU1bU51pNkZA8",
  "key31": "o43zWSyzYRmBi4eXxAnysxu6Z1T8h9H6XGxxhxHjxS1dwxcBxDwShbTgrSJSZyPXumAo3bCqFxCnDHxwznk8Nd6",
  "key32": "3BGiTpwzkXmK5fUAZmuUB8iWYTGrnaWXFFY1ytkSYJtXLUQnXPtjVtnXeonJYUKsBzwRSfiiApnrjHomrgHjxMHG",
  "key33": "628JqvZZQdrkU9qb6Tt33JS585bA8YG4XsBRicgM3WgvujvnkX6xmUF1SrpDwgAtwFNzLcNwPdue3gVFomjeTzYx",
  "key34": "21RmzRr9Zd5rPtQEFfenrzb6FtBtSftd7N4HdwZgaFY5vLH1z8tNrkccMYECZvz2vAs16AAxHAgHnQz38Wxsbkiy",
  "key35": "4JiC6tcn86n4QmiVYc2vGFHU3R7AwwHL2mhRNhk3vyDhxVRTVWxdFZE4g6kCnd1fjXS5k2rYCzf3SGrT7f4XUm7b",
  "key36": "48cizspD4mCz6p76VKHyoL57abZExg5bZy8i84DJMt4EnRZGtNWaau4CHHm8q4ifdNmgoSaLMaCR2486dW952pRx",
  "key37": "51j5UkmHmjP9VmdoUbLZ9YBTzFkEgFKFiYhZMRDFSfCY6L75NjM1ktHepP5UHZEMfVL3GbgfGLugCXF8G5qhHKqz",
  "key38": "bV4kFgg12b9R2aAbezhrEYD7eZ8hUEMtJfS4AVHaCD3XJLu4iHCuuWoeXgg1mMBw8tVaXeWw4cnbREAyY4opYVN",
  "key39": "m5NLguueVJCqrTp4fbejkzNuJL4Td1cTagZaHv72jRGRnsoD7GFrPtU9KqJCCkoCJ7ZUPd7hDPwaRYykbcBwrKh",
  "key40": "2xzrvMmAZDVui1tQyQS5XrJ2hLy6pG7h7a7sHrmwzyiWDHoo6bLHcWwwuoZbALfLDeU8YWY7oRkkY3wC8Dojh1WN",
  "key41": "47fgncesYz5rRWqd8jzxRtapkr6GhzEgXw2pNKS8ANiAELqembZFmu69KcLqdxDaSRdQcv534iqnvqUwVbgDu4Zy"
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
