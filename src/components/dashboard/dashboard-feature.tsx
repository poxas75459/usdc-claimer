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
    "2YaWtH9VafemjdvqtJHZUop5DHbd3sfzm2K88ZGrFeywWPZmxWc6bx8rPjEoYdTiNVDPvE7rFDuxeiKi79McGhBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmxLxybeqrquj8eaogG98AEUeEo5LY9ZmjDsNueyfaFA1DB7uxZGsZ5M5pPKtkMqm2g7UUJUPRQormw3Y3miUjq",
  "key1": "1Tejjt6a4xaD5RP6YCzUVjRrFcsjEnnbtBkf3Vg1a2DBCZ3aGKULa8ZYq2KDHp1inMuRGXtHx58rZKqJR1VL2ae",
  "key2": "3myFHp9jTFH6Ln1jFgA6eAnALqmiMVHzLysJnkU99VQmP8gv2m7Sd1zCeiGrvfAQUCTJYRxzXdsKeXibzSgtV8Ep",
  "key3": "Eu78u98C9ET1bGUGqwMR4CAPRdm3uvHLRFYKdPLby8LmfWggRprgunhqBMxuzkQ3VHLjmBe8hyN7odPSqqd6Ygh",
  "key4": "3JdfCcHiEVzNq57xHuUM6fkqxzTi5vnNiWKp8ptTZtVBuXpesLUAARSvkf3yqfzA5115rYbtaCvxjutmB8yDewwW",
  "key5": "KqUygEAPkH98GRkAQvCw8AxGHsD662HF2SQbhMCJGDT6v6NqT5yMcfGNnNNCr2HBqsRkFQ4B8qtQXnxLNfgZhfj",
  "key6": "mk4RdvKhFTgvVXb8jS2F93ZEjphSLrVAcF7Q5m3k8wGJ5KRoEMrWY3BfjaG5N6PpVV1s4C1qcjz4TjFCJFXY4cK",
  "key7": "2bg2F1zGUVtGQFEeuWrMRuR14gMqkmjAfusgYtc6ZX2b1TVMNPDForNT8peWgoGo97riD58dPs8GVB587qoehbXp",
  "key8": "2TpoLpUJSsbKDwrdVMEisQVszefvKMhXEhtjQmGUaKeeWpaYdGG9hx2in2tHBFrgWRcvbbC2ggWoKpUGZhLT9sSb",
  "key9": "25QDGn8gFy1ehMfDE1RJtjfU6yARZNNKE4gnneqEkwhrDE6dnZF5mnH1M7KYgQfQs2eihwZJcAs7LSaG7NoBQuKv",
  "key10": "4poBDR771kQwyopfyQTommrUuhtQxW2sSywyuZcMs6NAVmVSnod7BKLEjjX7pAJ6FGGKKbTsFkB79dxbjjh3x5BF",
  "key11": "5uAUop27N96CbdVXRFkzc5zsQquhqErnWUtdVWNVjyjsy1Qk8BUFASip6R2jsBvyBq6ENAg8LQQHM39EiXRTHcxy",
  "key12": "4zz16xYqwB6bf4US2f73ScBqWa4cz1LthQj45Brd7umCWfGjssBSBAfLv1dCTg39vH6tG5b2Lcx3NdwcLkha39hz",
  "key13": "2qs98rcCCPmkRXAdbzkdo4HeetsJFSCKyGcfBHWmXSVfv1ncnMcANfeZoN6x9FnPLVah6kUoZR59VFB4bh1HbvBK",
  "key14": "SLXN9v5fvRpBLaGnS1gPbb5ufqxSeiiMTfMs62KaCCFdX7vVFRxfsA5G9XQ8WBJ5rSKzYUy9puYHGQwN68h2fKq",
  "key15": "2iGwutfyv7ymVaecLxmWuUfkFvKK7CeDouPcoMzVZJuhswe4bgNmdKeUQ8S1oa1tr7GQA1sg7y8qhG3hUkbiy6rs",
  "key16": "31yrYbtKB1Ym9dNJun4obCGTjH1uq12QmW8U5JdUeWHuve9Mg9ZzaAX2e8G8nM9ADHFdCFHh4NkkkD3R73h57bbc",
  "key17": "4YfQjvuKWk6ePdxNkc7QgG5VbmmJez1GPfFag4jduxfYdb7JBWvj4FjmdN4bTkKihdzr8YvvD46E4SFx24YJitaz",
  "key18": "3K5sQBk17MfwdTW7SiLgYtD5zirLXMiG7hnvTtFi4R4PkByJNByxe5yrqYtznNoi9vm7R2iqyH9UL1oKcawfBMq5",
  "key19": "5GAyubCJYWvcP2v9uuUTyr5BEpsdwJvH99h8B234DMV3PFxjbeN2egkbPRDMpby3GuUrNKhDGJzzDUTVhtLNEZzi",
  "key20": "39iF3LbFtxrJzHXwb7NfMNewYTGmcyLeMJ62Nqn86UbR38ps5qomgbtLkvZCHLkbogi79E8ji7GqvzvkjR3c2W2n",
  "key21": "58SfeKZw4vZ1Rc7kgKfHQHmAjpBCNjqX5HcExnq18VBg5hVUVufYd9max9eXkkA31wyTqJCQaACqyeoMq19dhDaa",
  "key22": "qywT7byNVDKCTHxRz4EiG2W71ynyfGk6LPUVkZyGfqW5jvQRdaoJ2X5avJGeLzAxginGGQNeQN6RixKybNi4g3c",
  "key23": "5yZw1QW6yLf9NcL2FLHKteArVVhndy1WrP75HjX4ByTv8BqwCdRekB8v8CJdEG1DmoLFAtU2YsyuQZYEY3Sx2Svk",
  "key24": "31N8HvMsjVVfGwYopWedNYSzjf4NqdnnFVugicLYaCcTSJXTJSgRUghLP87eVXPopMxPmAB54T1QrXBGHEWd1dXo",
  "key25": "27L5A2vfK3CEco8GM3TZZ7netKhfK4WofyJMKD2Sm35oQMBE6Vvv28UkS8jP1WVduAxoAgWktJj1dr8katzWUaSB",
  "key26": "4syxHqFm3CdpfgNwE37sdtPsWAyvg1LH9VwqqwiZ9R7b4LM6bVko2bTz5UuarCgHyuVKHPwmec7ztg2VDnMhpZLe",
  "key27": "3jpHTvAevGQ1TnzpWM3YSBNBsLFisLXXQQ7g3pmVrFpN5k7z7kVMWFynyxTvk5utpLKgXwenNoY9ZvQoYuD7sTF2",
  "key28": "3yhQkRbtbBokTxNqL7v45f6BzWUwjhZ4em6yxyi9Z4YddYQttFJNJgXmC4nDbaK59AJeGbnmEiStjv6JJBP9QMA6"
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
