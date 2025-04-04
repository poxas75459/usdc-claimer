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
    "2uqH5bZvUPd91DjxoXYvW27cGPUNtonf7w7mgtGnVWsL3T2EBjin9hhRzUxv2TvixdH4aPzCu3XoVQPMCYoA9RPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgLY6vfvJnFkmFpLEc8bChjTw8a2SZtcG6GfnhMdxMtkvDSqgPHJGgD69DrwU1wDBbgkXdweQ2YFrb69SVzzgpF",
  "key1": "3dNUFAPXg1CX3Z7c37DXW9pfsHJPvTyqs9AMHM81bzbVgFT9QBsSjST3bjiqDcnJHzbrTuVomFDorLhA5y14PKJG",
  "key2": "3Ccnsw8BMpCAXF3rGGfqvJLCS8RSiccpE7fTk14zZQTMAdsts32GrVik9XPjvw2x4GC6v1hBmfgBTT6Njd1EfUqw",
  "key3": "63Nbb2cM1fG5qqJoVozibrJ7eCRuetH2U919fQj9TJNA2mawnQmyVjBQebbhdokrdCidfmg2gMJa5X9FDuL2bv7K",
  "key4": "544s14jwThDtFvEHcrhvJ7tJkJwTho6cgqCHmHGsTX9MQCxS6o1b9xif9t8WFZytjbhTVNJTFJ1qcHbQASb9Q8bo",
  "key5": "YJR4PptrKxojhanBFLtW6NSAJektTywYfkMTWHx97rfqT7e1G35MwCXM4RGd5YRBo9dVsuPu1cDwvFB797xiJHG",
  "key6": "FRv7GqWrBgoDwDwBUYNxhySHmiunHD52vutAbd3sYmwDxWXtZjCLnh1sPem843han1RU3NMPkWJgLxH3rRPz78x",
  "key7": "64reZNhQaxMHb3E5jCa9j7qti5zWgU1unm8heSzW3vDtrLrC8tFqrCYijAonNSzFJMBspZYWpuL82Ea9VkccecaX",
  "key8": "5pcmubc5m65g6GFnWVXVLKfsPmaJs8EoY44WG6jGqXKsYXDMWnkxcVAyzhFVpR1zCs4rfxxADid8jidsxBerqrch",
  "key9": "KcNzuZ4thbGxAMWevyiJfC8g4R4U72xzEB7mUoTj7RzRYMSLDju5WdEcurPqLSsRt5MJvFbawkN8aJx2iMFMXtQ",
  "key10": "5eFyWvqqqpF4Ut32g6qRjCNo1ak3kB58sGbQAJ2SDaLA4t29GUFtwUtCj9BSDGYiWob2sZg7yt9exWyZSQyVcFEw",
  "key11": "4kbs8v1rQ2847LVhQTCgghQMXAvo3ccyVjQYG9FkU7Sed11idTdUmXypqNwxLbPfEbsKp8GJ5GMUxuM2Jnxji9yD",
  "key12": "4DH4zN7qzMtKCueX5ZWV9JUmyrY3fU5NMLfNd1yoNF9awWSZLuRZZv92VJYwGHAe49ZooLmotKRDDiCNj2JZpdme",
  "key13": "5yVmtY24fZj3nzec2u4Swo4KkkTFxNsYBx4DRD3LRX9N7FVwvtXNzVe9JFeKUDhhxLSk5ar1ebk65XqfiRhak9Au",
  "key14": "2AieK83nnsXMZdHjJ16VqzHyqHKCTH7DCa12rvEd7qhvEaSoWVr4CBTjEmQDWF6zuRfz9p7wPLFAzfHjLo7VQo6p",
  "key15": "5Wt1BADjyWDiD1PCxkFGnuVHpgd4eeqJYVGNqNcaq6DpHU8LWPPwEXb3eGKNN52wmobP94pVxv7AtVjgPcgVdHr4",
  "key16": "63Gabvamuv1XNHRr1P9w5ChDWV7PsTAev2xYNMcgXW4Z9ERW5jt1PVcmpaQqVMAymgcXf6m4wb735ppH3tjFuLPM",
  "key17": "4MWesxXVfivyoywwdSZdvtMwJkaLK2T1kYxVXZ1FgUP8UZWRxGNWDACYsjG7iYWXTaJR9WZkSvYvzbNTVqaXkLAi",
  "key18": "fznHzHy6X7yCDwJ1NMfqr5ENNgmDEYnA3dMB7EhEHXRssck3A1in4Uj4h1R1DU3jxK5CJ5Lzda8ZDhBkAnfyeU3",
  "key19": "58pnpy7ERCGDprStTH3RCdvJscR1A3mWfhmh9sBaEamizsBdnfWWbu2SgMaFoXxWiUbFi8c6TM7dJXrKZ6ZzKvfx",
  "key20": "2yejGgHxjeW5nGezFSeTa3adP8UCKbXxctEFA4XhSU8Lc881ysaV9XRvofYXTzWMapL8TcXsBtAVF5zQpy5YjSpt",
  "key21": "622JHfXaBmYsvJniKJK5hqZNhc9Y8xb3Qu8t6Uoa2oU83xtqWVuyRF3zRUJyfBvtoUfhqp3zithckZWRK4WL6MfR",
  "key22": "3X7ojVVQGsfs2Mn55GJuskc57PckAZZorxy29nQS7DU3fV8HKi55aEWAGutGYF4YnE8xotRKejuDbPtxB97Rw7g2",
  "key23": "4fGTVkDpTzAK7J4sPcBSXW3KsYgnuUTkiJ1gCUhiipUgwr2gm3dPJsNXycudShGvQt1FHEmKhQu81B46LK2JS9uM",
  "key24": "4XcTyANS8ecXiWP4hL9PoURvCe9v1Qss7gRXFjHPfe3zo8hxAdGeJoXovdG3LeQiCE8AXLH6zTbAp11cHi4BUfZb",
  "key25": "4saCPy8WBbBxW41PtSKMUAip3BUwtHgBFrqr6Q9jcb7WQChtzXAvNSMxKt9kTxFUXN6i4HNwtnwVxdKajBjibxE9",
  "key26": "53dbdSD5aKF3GdjwjKZTKBy9NGuubdyT4D3XWnu6QU8mdxFYscgWGUjgFezitJkUKNNtPVY6C9DZ5Wh9He5BBCF3",
  "key27": "2HUqYgY58B6TTQUfDDdS8Q8PCsUkNZUnujcbjZQMiUhzSKz9E6eWfoQ6Mf4BGNH2e6GpBcovA2LpSJZgQkQrWv5i",
  "key28": "4wMyGrAsgkdguUVj2hJSgoez7JtivbGE449HDWiogAYj1ZraSGQmym3bHRt4QbYHcC8Rij4ojqLkxEPikLP87Vg3",
  "key29": "2G35bfXBekG8bjdHhz5ThtsnViMQYFZkN7zShkR7Xvsb5JtifuCrbyiz65RcYUJYnmCDzY9L9GnqW8YTzFYmnN6b",
  "key30": "2VJrwK6ReU67k4ynBnw5yXmkpxeSYteR3UBij66k1hYMSY6ypDza3q4Joh7U1gUoqYYyRxhDS7S3ReQfJPzz86Xk",
  "key31": "2TaqCojesNR4EdCPj7R5RCvELr2ch7fNYJjDH6MyVNP61N3JYCRLdpjR2z5YBjZNNAzVF1Atiy5DdRPMvCkgbW21",
  "key32": "XqiPFLL85L3dGQJmh9XjUu9HrzELXr1vPrACGNrZj8VZxy486LKA3118kcryL4GHkc3mvtgyJrDUmwa7UgdkRRG",
  "key33": "4UMMeQYaJNU7ad9LJnfKAGr6XbYka7khSdsqe2XPcDxDLMvcMPpLUmYRMwew1J7xvu3fJmFxBQ9ULzKgpMtkEYCk",
  "key34": "4KSdHAg8AJnEe7SY7NQb86b91BLbMwceewzSAC5F7FNzeLioubpXxsWJ2e4dADFt375zoYJgUQJY2FEjQEt5WjG9",
  "key35": "2YFDDDE8jEgBYbDbrV17EWDSbGGd5cTfDoNggW9JrtkYdVH7usWuTT6aMZ55KHoY1HjWMc2Ru1RrSYvrVYo1F9Ra",
  "key36": "3kc888GWPZkm9MZA3mkakBbNn8LWbxCfZ6oZdMYmNJm8k5sro1gJRatHBfWsp2q7JtwUZHD5bXWP8SgKSfEycAQ6",
  "key37": "3ZnSUDM1tKeqdBd1QDm7m2Kn6yEHGCA8jEw2AoFwFrBJLmuQzxg4uczY7pZtEVKza5qeiPN1799rambncmzwvzzF",
  "key38": "3yq6nYfuBsbRA3vuco8L5aTLJCf2TvRTNEYqiH8hLMzA8HyM5NmCH18ijjeUstfredFxXJYeGDYCttqLyZja5yjS",
  "key39": "58BoATrC9UN6hrBido32LknJrazLJsRV8zKrJ8gYJYKS3WLzcqT9H1jyCoQkoCRmXpDvrKbK5t458d7DchYjdas2",
  "key40": "4KrTXXc8jsEaiH7oVARD8HoGQ3ktmExowt4RFo4rQGfq2QdWW1HwjM54Y3gNSRDnd5NTh8aC6m66M7CTQMYKpHHa",
  "key41": "3cJY1nU925HmPed4vSUv1skgF77MrgkW9fMFuK9jGDWMZgudF7tQ1e2BDPo3E2Jh5DMvhCYXNzk9FQSdMUBD8k2q",
  "key42": "2tMNPt9KMmajtTREpyb8PNdmiW58c2vbvuc8zmzrCCwRd6VYTxqvY9fgcZHiZag4vHvE6m8BjR15b2epNttahdtu",
  "key43": "5pVX52H9DGxqxtG94V8WkcWETar8atg3DqjfZ8wSC1HVz3EmSPB5X8bBFwFc34guAeVdY7iVzTXUJToPjuRNqJvh",
  "key44": "4RT9HWCqRRqHT8aABWmF1uhYri6FNbaZos4KPTjzBekenjwGL7Kj2mYqBRXfSZ6di3EUWqP7j1PGQYRKUqJ61ikM"
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
