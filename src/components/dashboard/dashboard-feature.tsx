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
    "3fBmixoDsXzXLNpmhtwuH6xpFuENnunABgVBQd6yW3figM616st9a66cMpE5jxpdesp2KzCkWHJEvTP72U1Z3432"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7icMRmvd9wyTLEU87tYi5tefFTzyQcgT9J1P4TGan8JCuLEabjiMBsTEHbEev3cqZ4pbon4LukdMvizVL8fFho",
  "key1": "4MgVahgZVxRh4HfQoaY41bZkuhLLmj1vNa2aXbHVhqMRJcJhEWMxaMExfqnAkqogirTtWoVK6YLSY59LG1gD6DgZ",
  "key2": "ug8rBfv4tkg2CuPguAzjteUM8fq6ZAPkreR7bqNBHRm3GuNwV5LdxgHWme1sXRQWzQuBnmekuye2c4tNzTHSpPL",
  "key3": "5H8Ba9RMY6UvFbHnkXW8XhNMyiLAkj8urKLNPpmVqko6cwn5eivVcQkCJGRhhKNCo8GgPmApmsZgqLUSVcmHJYCR",
  "key4": "33KS7wzbAB94ypSerAwXxnxYgUrEqan5sVufvL5UbUk86tBYerSXSVHm3h59qN3ECLatZzngkNagvk8jSM4LAPBj",
  "key5": "4dVDM6HvfThv57r6euujQm7SDjM7JyFXSmqBzbezMpfeHkvLMYCjJHm5NBX5qh3zXBzrfPUU66nHQKA2TUQ1jtgk",
  "key6": "5WY9P9gLfayftB5AJ6TACVKyz66uNKbhRiLqpx5HKCwgqzxxpFAT3ruttGx8ckXrtnBRYMuZqNFRAEHUQyz3AARj",
  "key7": "UhWFs4cXceGZuAWNiB12GnuPMYG2pnoFHYaTcceGvrW3i3ntNRZNV7r9bB7nZDFdR8TnRTPmbzxpSa7ZGtis4wa",
  "key8": "51XiDERCtBZfo4nR58i4R1gzrCWNzLtLkwN7SfWjZ4vS76Jvsc4Vnyf2Pm42bxkmAuBBY1YyFVCvQCHcXxP56dmz",
  "key9": "66y53UMbz8ZxRJG5B6BHnkeAfbnDrqoTLF1rnLMqvwxz2SrycbaenGsLBWGTAvzSqUkXZQ3t8oPJ21LcwyrSjE8a",
  "key10": "38egKZsunFuEDLK27N1WDdQaDqpMzqJ4hj13mDqpyzZSWJDXgfZ2gHe5NC9zLBRZU4MmxiQWuEJhmzMqau5S8WBq",
  "key11": "5JJ7fNbDrj9yrt5yno8exbsJLxddfKArF6ZTj3sdCoUNiqLNsbGPaD51kp6wKpknzmnQP1pXrMPvhQFQxLGrmkfo",
  "key12": "57PAoahgfTiz4F1YGgFN3u6fZMBSnYEeXSjog7a4ebCaeuwDr3tES7jF9LbreS1HAseU4vNEDzDDnYoJmsLrwpPy",
  "key13": "2rd2YyjAKbf6hGADUNyHbRqq6pYb3J8aYH4Z2XNhRHyLkUkekjRfY5n5syoTj6joJ65ZVfAAKmkX55GjUB5w2Cpe",
  "key14": "55SWcY4jTxRnisELeEHt9PdTzCQg4y93WV8MbsGYNd7WFvCK4JBpwPnk9Qqs9pwi3EpFELCNzTFowBB6gWGHLwdr",
  "key15": "21eJjrCphPwEZ8DdzcCAmzvt9GxJaDNU6pcS1DdcFnZAWgZ44d2r3ivWvFny1X9vbQSmEwvmYHAQs2eFmYLZ9i14",
  "key16": "4fw6YzCg3t6xuRWqXEUTQfyuRxmWTKJzW5fMZJLzcjWARYz2hUpAG9HjEP7Y771Nk7bmHViHWBYW1BxNA5gwyGsK",
  "key17": "E2b5z9PNQgEsjBTC7SUM1WH6H5dasx8KNHWJA4F6oUDUB9uvYYU6NXkFG1hJ36eDqaPPVbcaBrJe3KXfHXUmcD6",
  "key18": "5y3z8FQcW2R2kctphtaiwxyE1jwdoQvrtXodCWiMDyQJRy5pCmfib2PVTY5fYG4zNbergMT9K9rZ5gEbyekH7G4E",
  "key19": "2ibhtpEvHieKHMr1iDjDGajJZChP5LAAWKwTkZEsqRV1Kbo4bqULgxCX8biiU8vbiX1ThuNGEMFkSBn4ZBkLq7mH",
  "key20": "Z8oqbbT86TzraBJhJZ8wAFZBP5L9q1A2jfFdgnrJW6t25jGWq6tPR1GyQX62doFcDzEEEW7X8BUsiMD1ztMM92k",
  "key21": "2AEXM3ZyWgbsfQJxdFkADryXhkPaQKMELVoP2MoZzjgijh6PTiSom4K6zdcV9gRGwQHVQjJ9EWyXzMR9seJxANJp",
  "key22": "2EA9MQEWbzprLoiKzHVKnasLBZoRokYewo1amPGYZWSZStQxYW27hpjvicsMQ2Fsct8mUuxgmByFgqKeNTArrZGb",
  "key23": "La7Q4ZeuBDra12LHJUvnuEze41DUi5pKyDwDpeseGPfcVxHYUuDBchcLKFc4uQFUHrcc9Fr5DxZUQf3jByrmNBE",
  "key24": "5Qu8ZTuBRXyh9GNqGWvomwwbhwsuGWmUhRyoN65rECmdcRsp8HwfxwTEgDwHsuw1b8B9oCtZXWveLTRmxiY7UEe1",
  "key25": "4dedUs6WN9tKtA1xtPtZeXb2Wgyr5GeaobNeo4UvGSUjkwhVAcA8ooAgSf2wkR2N88GmGR9tC55NHeH4nou53E1t",
  "key26": "5fD67rTrwMgGscBddMbcAi116NyNyvmswomfZJaiwGLr7Ziutr4sZho2RHbKAsZ7gSBFvBDzCgAYCyh9m4ZYny9e",
  "key27": "51Rxk2jFGviAcNyCigt8AuUeoPryoBptM4QrANUPWtn9QnMbJ6tsWjUwNjFNG4Nxwu6MM7tgdeJj3w8PzT8DFNg9",
  "key28": "4oLjbL5xc8Hjo7oWiF7bU55iYdHj1zddgGgW3DjPMSNSsxQWFbjZBAKx2kC6znB3xm2tiMuGfUvuBGrXypNJs8RC",
  "key29": "Df9M9Lp5e7sos8TQJSMkPJiqPh4cgTPSFqwwYh8Pk9uuQkLvLbhnBg6w5Jp7RhgY2St3yGe75JjhTMCYnr2gUVj",
  "key30": "2zEEAq1vzqTgST9oBB6o3bGRtpuzSddUsNWVrqqSraM89rhpiBiRumt2i9Ww9Ys2rQs6Z11SYCRR68gZNPPM44Xz",
  "key31": "4jAxvCaDB3wSxTmybHWVjyhaMq3KSggCvd3FPZZhEHPwiMMCh27dgetusTjzcwXocMryzQpou6LPu6UveUWHKx27",
  "key32": "3sjmPak4nEa3kfeK1QHNwrFT8aa6vV9APXyVWwshbzh47Wi3Yrxj6T5UaNh5kE9KVBkygp4bvaBjJG6P1TCSJzpL",
  "key33": "39uvmVRERU3cihBicqCCmfXHpPgguX1QeFBSyhWr7hD6aUx2G5VJMkW6wWunoG1snVPaGCbczB8GLK8BdrbtZ8YT",
  "key34": "4Qen1PWiMQWmNnaPkSe9yBhnGp9jrQp3ALhinvbSx2uWZKbrsCDui1ZySch4cFrByWWxy3zN6zNC8FAporMpuQ18",
  "key35": "2GCvGafcrxs5MzwUwusmEbnJGxnuGLrAxfuvocKrYdZHNZomQ1b68VwNuHpaFN62aVBMg4wS8RQ9cB7wu6sXadLA",
  "key36": "AR6VFGowyp7qu2EBHstCtSZsvX7qAjLmMtExKJPEEFToSGXwDJXtr13Dq8bovEo2yj9WwfrmPQARPKNFcxsP1V8",
  "key37": "2XKM3VZzieVXQL5KrcyvxiKQPi18BSGGMsRb2fBMvZL857Rtm99UQZCgwno8ZBtT5BD3qtzVjiCY7A7p5oABAmf5",
  "key38": "4tijfB7EotfBgqsGbNLMVNT21asgEeHaikajVJo4QcAWtZqBRZjtqn5cLFsXL1r1mY7i9XPPT8FSMi9yC8NAPPgG",
  "key39": "x45UJCB85ZEFuSJ2FntjGL8iYL7RzUMDgG9GEzA8zdLdtKAyX6Kfq2Hui2rczHNS3vrL7Sx84CphGgTxrBH3uW5",
  "key40": "46phpJc5CJTRwCAzyUcy2LiVz5f4s6KqY6PQSVQj29bwHkwVzAuZ23q2apoP8a7L9KEyRnSTUZtH9BcXw5cp8sEz",
  "key41": "3957S8abPdA8PFC8wEWWFPqjQfKwmBFc5FC9WGRgMf42fzqXPLFu6Xorp3wG4NJ1L1eQ5cjyJHgFBNbWE8mgKzce",
  "key42": "3dHZphTysuUf2wJn5bBr4HrQmc6kLuJCoycYzYjvUaD7PGzqjFuwH9RBR9tjQyvg4SbDnZqjxz4v3nH71y1dKzpH",
  "key43": "5fwrTRnAtTRSR8ekJGQJgGNEPfh4dM12SWsAP4ZCZkqfrrfQ6FfSrUjmqGEkvLM6xsRcP2iDowB1ut7xMAwLBGNw",
  "key44": "4w5iGXhq2PF2LxpMxUU6r1HYevAqwxX8bNEs7HErt2qh7oiZ74E2crz2eTRDek4qzENqddtp7zMo3hqoaNSCybve",
  "key45": "61owtKW5MyzsFRHxWwjZtRUzzaeHYTLhjB8t3ojvCLJhJYxtUbDPBHfoVacGAh37QaxiNaqVjPkhojJoUjuy4gnD",
  "key46": "2e6AtXb4GRUaJBFZtU45jF8wCgaCTwvwAMC6vDvPu7uPvzg93vsHwpaD2uhBdNJDFuRomdjQcNqYxh8WWTuQoS3r"
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
