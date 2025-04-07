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
    "4qKuzxVPtDsM6wa836mfociE6fxwU9MAuCjfMkhirBf5GygyW4sF5eVUcurYz2V26ZEE5g5fMZwNQFuWdpYAmXLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46V5xXfpF9VcYiUKXWjuCAWmYL78GUgKqrqp5u9csx4cgYCByqFEMd9o5BmExLYPTFQXEPJurgLHQz5ShfhxtYdo",
  "key1": "2LnNBJXGStXw1hamiAF9dHhLHJWhL1riCbXV74YbpwGpyRF4B4CTWKjvatQqmXVMLpuHdW1NXnYdFt9B3Y4Bnk3c",
  "key2": "43HJZ2rhEkFqxxsRQWjJRA59Xpdky14bxyZgZJBRUsyBJGhK6riFatH4vXvDkyw1fz7njmPXz5VSMvV2RxhecbRG",
  "key3": "4zTUnVgQAmNQrfEMzUsUDYyCyh4ATEo5pP9cWJ9v3TZDtHwAtZEwrVRcYr4DW5xqPpBAzy2ygWXHhcC2uoXxfx5W",
  "key4": "3GSZRFnnSzgUmviwUsvkEThiJDyQYbU2VFPJxftCP8TUjGk6JneQ8b19AtSqW5qRP31YTcj37GjkJ9gTJ9jQdgDr",
  "key5": "24DeRYaWqdrCR7CeBG7kRsux5FzPU5AruJKrm5PKua28W5tuL7xQxNuaiRzsw8zqCy4aAxSvLEreuLNwDpLKyCu6",
  "key6": "4AGNBKzVhjDfq4x42H1rZAceNnrTUfQyGK6bosiKmvZ6NKeMfRDmaBFYweZVppYg9Jf48KnGgNyuzs1dJGzHiKBE",
  "key7": "3c2QSFU5UuUH3Z5MDEg5fMQEmSe3HupXxXrBSP6MpEHF7WuGAjLYXqCCf3YMeFfDJMJnxFsTbP4cJxtMGBG97wie",
  "key8": "3kHBKM5q6MrjecN74zuQk4Kg31PAyZebYDmcwReTobfzJQRnhL2r5JYqJZRrzXCv5phoobAqudw5KrYWi6UP7GM8",
  "key9": "5BCaLju7Gt58w5BZ4NrwWyVFN2p6HdHa7zz6yRi6Md5bj7KrAVm1RtLmTjtPJMhcgsMc21FQbKcmUeX8YaNAUxjt",
  "key10": "5nCbPfZTZHFxsmcpKnp9AK382NHXfhARWygr2kso7X56gEbfKu55GUngVVhLaeeXrGA4MCT4hKJBdVcVqfoi6dw",
  "key11": "67nBCMk73qUXd1supBmZAuHe8HtrRMEp63aYUyFaCypZtDGvuy2P6R243aWvGnEtWuTPLS5ETQHkFRe1pnHgGrrw",
  "key12": "5wEUyGPnP3AWDMHP18Vs27iwVu1x4A8ubNiQLuFCYXBUD27RqAwJBiuU4XqdFNPTk9CVLm34uVnqGpCTgBVb4j5M",
  "key13": "4HYhKtnjZeu87GEa7rozw9bF4h7iWvPtxgPq9MoBSMhPtCGknDRpqwBotsoYP1CNb5t96PMykdreHANLTC1nWCkE",
  "key14": "ZayT9NE7otcVjC8VyPKme1aUBFW76rjYn4dLiuPdM9VKdEc3j6EdSQTcUG1bAQMYwcHTf31RBjXbjuBtc2L3uig",
  "key15": "31eFeznksRJfCXX5sCEe7FpJWEd32aMJgo6c9MncUpXweBpvUmmZTDDvtwGWqUHyevzDkD5Ar3zrcpezQuSn1s6h",
  "key16": "4k9ffKPNKhPWYyc9LJVPYWkfmLCAEL6wP7U2zkexRDrYEL79M9BEmqdpGzyTYFZsHEYW49wfmFbfSZ5QiMjeHRPW",
  "key17": "icvYuj12if8Mem26TFLYkoGxy9Aqps3UV7e6McfASiBHU47ej4wg2ysoDJTAA4ixwqR6LZqDKNN828ARmjnFP4L",
  "key18": "4rQAEut5pz8awBioFcJxZ6B9hE9mfysnS8yYdpy2jsKpVYifUSkNwX58T7cfaNx7DJzvWEHvmR5YP9cPRCWSFp8A",
  "key19": "2kfN9ShZEyNd1m3GDcgpD9FuK2shGYRgK6iNybhkyYKFa2rRFSz85cB1wb6j9seuUsejmQ8DfaL1och8ztiATAWh",
  "key20": "31v5pHaLPQZtSfF8C5UZ1S73tF5k5oqAM9t6qB8cKFGSPSkiyUJmDML3mn5uHSaSAyL56s1R1xDtrDJ3BvSbCqUE",
  "key21": "66GuZHEdmBjRNK1TBJhfNybfZUNqEpYyTQWcE32vpCBWQNZJG21GDvwH3qcvaRUwCjp8uXo61vY75HChoKN7ozBh",
  "key22": "5JUui33B2kXqLxxJRyKy8YQ8THZ1hvZQPiAnN5ef5a3PMQsYmmcWkMESuCpcGpTEaq2QZr3eqCphXsXboSU2HgWt",
  "key23": "8n4wGqB2ABRLQ82uTUnKygJCZCx7jhQJwUMZpjiL7ks9ALSmR8Te4NTHJbC3FdLp1h9Sk1QWhfn6dyiZyTNH1j1",
  "key24": "26sEi9nx7wsA5Zhdxm867VpZ1ab2EQMqem5N6RrxGRbZBT2NAQWAihBPbkxE8Dhu1Y16Zjut3xW2sPGSufAqBQyd",
  "key25": "5oczPeVqfzqDZEfJHZ3sqJKHbfVB2v4FFewAQVH3BhC5ueTLcLiekoSZ5jrDu22VBy4yjon8NH2D4FcwjCYfL1AG",
  "key26": "3tup6eSppL3v6cyrrnAz4KBeEvYYJjM6WiutyGTtbcB8uWMMnuEcw3CfmTZxusKaWvzGYGYbhvbp8qtHMmqZx7ie",
  "key27": "57PhnLDDxNBuiwwLZv2XSfznzKr16nVhnqUzgFYCrga9uWwTvpd3ooviH8cpYnrBQkjmv5Xsd73HbG1tZzU8cpis",
  "key28": "2VmFwuQk2T9WZu3KjcD1uScvBfMdkKBp4A3sBQZAZcHTAasNy52Ey53noUQ4MbqPQP2PRfcLJTBXCzFkofBWaSeG",
  "key29": "3TmdvCD564qZ83PLapawGTyXqMtcb9W3TF2zsCnuQEanzyGLojFVov8eG9GrFtYJWinj8cgAeJ54cowJ1HejpNRJ",
  "key30": "4ykmBAuBKuy8Vf5Upqfn1zSXbAEZdDdnuHGX3F7zFW52xAuvy8CdcDZCZAvbXB1WyH9r5SqGpe7bmeRDPHxbGGzr",
  "key31": "41f2FpXBRp7BJmfCzou64ZbhSvdN57776dSQK4GXLSDmFHZDL6i3R7gs7LbvuUcJddkYwJP4fXLoA1WXToB9VHUT",
  "key32": "65VZMWyEoxuSWKz1eRC1S8TYQoccPCHbk2d26XRWVyZF9njFkeGizjpiuMVRLNmwfQTEcpqQiPWqT6KW9NrrwM1w",
  "key33": "piKaMCRXtwrZLKMr4jPL65WEwvWYhda88MgBrvWkbwJAxn4ewc71V83XqBxgUo4SFGze6xC5rUrhNWRjnrR1ATn",
  "key34": "66UFdJiX6LPiAQaNWAQUMBNBB6mNcfs8QCdKRobN3u34kPZQzqpcuZq2RPZiU6pBqpdqYKYLYcmcyhSGoPMr9ou3",
  "key35": "5NoWn1j7g9xtwXaZXHkQHEiBE8dipN3o3Lg12ahBC5mG57bmntoTkE4MGJeSok1DBXHowXWcQ3qqfiXXpU3eVCiB",
  "key36": "5XvELbpxRHEYvQdxHPxRSdhMH3HGKXFqJ7J63SdiKMGnmyPErJDiefiVZ7tmdYh5gLCoFJi7vDrpfWqNVm8yqgqR",
  "key37": "2gDAxtHLuSjq8VhrQBwYkGFwkNxGEZfWQJXpNg5pyC94JmStvpWucjsUgiYgyECNafA1wTJ7f1hyxr5JUK7oPUit",
  "key38": "5PtzUESKHLwpFBBjcqkPJVrzJ6RETw3mbvLj83HwrfRLtHwotB7CEQ2DyXfn1sHdJ7vVHs1oG6K9JdoZpZDjnNg7",
  "key39": "3p7Rx5wcjcV8TeDuBZrx35J3ZumtFPeU4zbz1GCvW2MVobBaALBvUzjMRUVb7d8GXJa5GYwoYe83UNHMVAuWmibt",
  "key40": "4M8qVHd2QHnphTiWVCJgMUBiUvkMZMrZjQXzoYpaX5KmkzgaM3QrxJ8o9yeaU2daBoEfQCzkie1caXdAot8DmYho",
  "key41": "5xESWVgSZQA1JS6LphSCwXFXHq8o8HPUsLDomawf3n9GrLDfRX9nfirvYuxh7NAdhwj7g6pgc94mKEaMJngx1DF",
  "key42": "4HTyBWZipBm1NtsUpsV2oMjZPXvKPS1Lw8oxBFqc4REq5VzUHhD34zjY5q1DK6N8Eduf7DZprH3hJxtJ17iJYkKA",
  "key43": "5E4cti8jMbDyDoNz7QvbxQS25eCjs8UyiabdKqwq2pcsgnwBTPAqxzanC2X9U5tpjK6nBmwHfJx81Yz3EaHAhBUE",
  "key44": "qTCuemzupF4regyzZWcWQZmuXt9CSHZicKqpcnMnJ4yniP9LWWS9h4AVtmT7czRHU4Z3rCg42d16gKYSj6SkhoN",
  "key45": "5oBpCVmdodrrr3B6NdqyYdBwCZmGs9UvmJV5VNSQ474NPvsW1MAHvK8CCFTxxLF2sXKtv4NA4SzfnJnxhcMRryzp",
  "key46": "4wVeEFA8qnMU6597Wq8sYPLTs3oJhuDYfdgrUDSSTSZffJUVofdjcGGUjikMzJHxfFhDZGiRexkgDcPaFT7T81XP",
  "key47": "4GENmKQug2KHSDozbiPpgVi4UYANTo1qxWkHjReMTZDKSTGdvnA5agdB6czHQxdfqFkamTvo4rcg4TmYALyKBU6b",
  "key48": "39sQ4TAkxpUxsma6YFE4x8XPSo3fpbK59njtBvAQWvBneAjkSp1p7hsHZT3xSESQFvKJRJqu7CW9FGRvm7XKRhBF",
  "key49": "2dgcQLXerCbYi3KtBfrzqpTkswKdNGhp9yoYhvxs3TMm73EGXC4cYsWHTXzLSjcnVkFsVLkyTV73FVuRrNvTmAm8"
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
