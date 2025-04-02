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
    "5jWrGLw4cdrKKa7WFeDXpoTCu3trLVo3FFj9qaGhzZqCiaobo9mz6L5CVsnMJZ3qv3re2nEphjxgAbS9VKFJCSDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unMhQfKqWmtfb8UzJTDhrHUzLUJaLT7mvGwz8Cej8rR3MGwsVwpiHQk5h1GjUXbJ2c1oNAS6fUEJatqtHKPz3b7",
  "key1": "5vaZN7mz78QUoWi78vBx614VdSaAmFLyNc1YoJvA7mf4dAbjAeRBLWDXnC8H7518ixsX8KAgfjvLbypwzjy9etzs",
  "key2": "3hvcmyZLgJJHLhQ55S7XyYQjk51wz49YFBYm1EnmmHSRg4aHTpAVYAnZvPzaTFkWgAwxaU9F8bhwh1Ai7cqvCvKo",
  "key3": "2EGzq9kj5g7TAmJe8DjFg8o9yacP2DQSfVFkGeeVd6Ls9bS82nxfi9Bexjo839VEWKAyhSEqU2wSfKv23NVennHF",
  "key4": "3CyCaVdsjgs8XLZVWSgh2ejCT7HxRsi4WvVpt2UgJ8PZNa2a3Pp3kerY96cZHpcnFLTzFq34gPFMVeMWM15jejzK",
  "key5": "38RWcwL7JvEQw5gEeYM9RTouVTTXhr8XxL2xioUWshaaYAkdM9iN3oD6X5Lk8mVwukUsijYcFvAUaihBy6VUSDdt",
  "key6": "3cLkruEkf7hRFpeWysuScAN14WYi8QwssN9BmH8pK2S3nf2cYCCZP67CDMD85P7WGfFt6Tj51vGhmiL7BxFC9MZe",
  "key7": "Pzi9STdD3C8woJKo1dxUe4iia3jffBVPSCDPPioghpzNL5uMdsXGFkXg2AH3QSgYZTPSC3zdxLvdgZ2zYg5nDUQ",
  "key8": "4VyZq7u1WHY1aTpayP7Q2jH39s6DBv7yXKQjxCW2XCmVQabFxQXtF2JB89vzgErZTzKeTmh34Vn9BBp7V1pxWdCu",
  "key9": "MHgHLVzQUJmg8X7NT2HdmgtgEEkiXGKmmufZQ7ubfvszG4ETaMVg4AUUEaPQSt6F6p1q4EWSpNPy6RRgjwacSAf",
  "key10": "62y8xS2VrkmJgipab4nHdbB9FMXUvvWeTZqA5SHvT9oYiZe5FJ6P6ok7WhK4kKXKZR7e9G6GH5hEoihPo67o1CJm",
  "key11": "eQb4xx3RSxCRTBv7XCidFos5Ez7oHvFt92ac8qAZm65myJiegmFzeykWG7oyEMQb2mffeE4WpchZaDcptUGzga5",
  "key12": "5RPkVnmaTzUUest25JwmD24Jo4Bfest6scbfvaVQPpUqwYrQ9zRPYX7EVWpqHhBVssoWR7SgTxWgCBp2KAYPaUAP",
  "key13": "49x9pc4pqunnxw8ybdHc1mJ7qZtkreiSEMfdcDjHWK9G8tQXqnGP1EPy5ouWFTgnWWu4NAhqP1YibvFeXMxQWoiQ",
  "key14": "5xeDyf3bJpx9P72uQ19ajj6yyEVESmcqgcEpgc9YRGyG8nLcgbXk6adYf4viRCiGgnFSDD3BndXf9uY3aNeqhTjc",
  "key15": "3tytHwg7whfHLfyAtFZUDuCa2HkWTHW23zR2h2SLZ3gjD1HSo6dEMFnYtQZ6WT1sLRvzLKHqi4CaJHuRmja9ZwpU",
  "key16": "2FymvpEMS7KpAwBEDMSCEn9Sc5gb2Wie1XkQ55fm3TR8aFYFhdmymVEQbKYk3MoGmqHMCCcZat8GKYyTuDsNPsfm",
  "key17": "W9RpLhyvhjXEcdkgHqCAij2XmitzmLF8Ji7XjASgsP3GwZKSmzWrUmfbpcgqZLgZCFvTtG5yPZEu4je4Eq9dW7e",
  "key18": "37DJEBSQ31YcLkb4b2uS5jmPZy82ftkYmJKf6zKqVXpoMgNXL4Hm5e2bP5b4vfi4v9BhaC6ubyyT748aSBQHBz9n",
  "key19": "38V1fNa3eBVMFgd217LZr12DcbFtC4yHWLMh1BNTkc5Nu1TQKsrKgcMLxxBaeR99T4GoY2f26bnkk6L6QJfqdXir",
  "key20": "3SYLzASB8sxDuvHG2P18NdfCTrZsS2DdaCe1qHtjgLqiop5w2A48MAREEi5Wh4JwTHbwoBrx4iMho43UzBqRBjNA",
  "key21": "4K7hQpdpTruTbfnWMp7gJ9S4ymjUdvzGYVfdd4Aovd5z3TVeQXFsfWEGrwMghbb3EhDKPuwYgtPawAWVneLr5eXj",
  "key22": "2NZGw1U7WC4uCJsZpDcb1skWCmDrp3wc7CMnqbXrH3ZJx1D9rpJGbzTaf4YnwGsKhyJT8jkp8FhBFTm6zLmQNZga",
  "key23": "5gGLcwcfwzCtiybwREZm6NTss9kTc89NMd2wz6CrAXR9RRx8zTVH2HHLBGvsMS5b5czUx9tJC68wYwGSXmtv5or7",
  "key24": "5XJNGagRcPdDmU5BGvKqoDQTPa4kVQNvAuGZ9cwuDZPBG6dTnkvTAUzKRAcPvLhni7Gzw5fymxDUsonyNtu7i2Ln",
  "key25": "4WyeiXNJZiPEnXaSC4yx98SEMKL3XDLDUz7TTMx2kvi4pLnS15JyqTKYwXADtnRSu3A1LVDVJjuUq4Pcv3SrpUa1",
  "key26": "4UGGQ7qfomoSMEem9A85whpWUR7qByxKo9dQTqeeYDnDRw2sFN6sW3ViTCVFbSMft8KeV9PK6cicxnU19mq7Q1d8",
  "key27": "HgpfD57E5Rxdr9QwaNYv1jS7mDJhT9fh3fCCgtRZz4zc3QHVn3nFwYMCMHCMJZaSmWpiQBnnHW6W44jYYaLxPG3",
  "key28": "2QcXm4SA1AvrtKcB4pxSRUBxMyLpUoFps3x964HFWjjwmTASr6GejZ3qg8GSX7sGmGMwRYA2BGeZr3Ez3746KTjM",
  "key29": "YPxdcgQUiayba5ugPEnC8vHDo36irxvWioDqyaA2ZNMZdYAKcSH6SqqNyPQJhkfVYa6F46ebDf3dqrSyExKLCYM",
  "key30": "3aYQEgN65bUf7N7QWQN9u8JDHvN62Kd245gBVr4NyghqDLeKsU6f8hFrrBx72gzggwhLDSegGkr421dbpfx16JSu",
  "key31": "5atKux46bUpYmk8Tu1qFz9i9C89QTHFw2sJm8154ZmkfkztRYXFG6JjX4732hhTXcDSLmC3xTQGdLPyT3Yz8xAdx",
  "key32": "5MdoDUjo5FutsET7UuwvHa6UBzrcHuRPuaSx8ZvHf7XECjeG1aWfu1uDyXuJNFX4c7v5fCkXp6QjHamob4LvfFpM",
  "key33": "25i8p5usTbduMMA4NjG5eTUcMhFPCz6fd4acEFkfXHDXVhkjVTiu1FpWfn5RabSNzuPEgSSrjZeWk3CyGkGhRjeM",
  "key34": "3hKxBvgk2s8UtxP9sv4UyQANRGBpVNBbAMwZ9NZW4jj2zJzuFaDthdwi4XPsQy5QXUAzSfM5MnjEDqYiMXYkzRNW",
  "key35": "5PgHGueJQZ6C18Bf4qAbwM6abum2DFNNuzJ3RAjTE7H83m3U26UjvYcro3iiXapbePZ36KbdFMXFazyDC6RN6Lco",
  "key36": "2LGkiqdDYgCxggEUjopLkjKVMVna8tZNypHvR1sQJ2hL33ESi7ehqVzGgyBPZyoAQ8b3RqmW12AxgKhEsQFfwBLG",
  "key37": "4oqXWjbmQq1qe7tkneyUQ2haK9g9yEJZXdUQKmJrrCouNYEZsB85rnwiTTYZVtSGQ6bG9yr4yQvFG2inGF39y8JK",
  "key38": "uyDkK1obK6sAS6uqFebWp22t4ap6oeWhAMSS5D4yDeW5STXzBzBTZYqf9xKpGHjmdT6s5P9S2yYUgiRhC2bUpAp",
  "key39": "4STWp7Zf9Uer672oUAjMNmKBUskSRsbFty3xLXYBg4efPVFkU52arb5Ty3crjvB7pYmc65BVe8uZ35YdVai9nHuD"
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
