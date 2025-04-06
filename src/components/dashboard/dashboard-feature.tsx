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
    "5RtxJZ8aHXqdB8EGHZvH87Ujmarfm1uKH2kg6DNCuEECaSeg8UxfP1ccKNX73CQusVBmBNXiaMDshwoXXLmUijr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cig2GFkWuK9TtotfKBUjEd3rxLBkxZrrrZ3gtvdiPkW8NaZ7kYNH1TKVQtGKUB5caPUMTuJoib5aoD49ApLhjiU",
  "key1": "3wkMyY2CHMNP9bspCaoyeAzjDu61P3Qqb4ddiDhgVrXzdHSUhPVGaketYtCQuoiMiaCDmF6uxmQ3MDHPvtwShoW5",
  "key2": "4F14Yuqm5QfukMP2VdsEWNfq6Un7QE5ZvmMRGnWzkJ8AcpVxzqtPKgGH7eD4WuZubtnTPsmusjGpggAXS4sE48HT",
  "key3": "29voecvXjMQGZYcHPvHQyyUZZd4nsbt5qEZcnXpQDzbCRuHCdrHzNnHkAyYmzF5gSn64LZH34jCmSs1NpqN15hoZ",
  "key4": "2T7uVfR7xvKZLMuDeqxPHqJu6fS7RQCDR7ZWuYYb13eh1bMBLNgQ9LKahkNMrnvxB1fuszCeuztCtK1HscQetZfj",
  "key5": "4SCmEMstbQjmQYX6KSrR5Cyi3SML7gNuVtoLervJs3QvM95NXxsc9zUXtXQJp4xugBKe8mPvVXDydTxVDNVZwFpM",
  "key6": "3pLPvT1z4R29dyqvx9DkcYHM9318KiCi7QoteRi9ts5TkQgbbYVpm4M52rjxDN7QmCQpQbEUj6nogNPRwxvuDd8B",
  "key7": "2BqoN271zoaVxEd6KAJUQVtR5ota4v5EyijRAewieprGi69B17BQjR4mq6D7nqDkRYJQwy3DM2yQBiGRaDArdRfc",
  "key8": "5UmbSfq7tWFR2aAfKAt9tvvJ14JrcwwZmccK44XuAPDe94bUpMY1FLZ4BSMC7naZ8eGSRJHfC6gJb1kgPy2iYWz5",
  "key9": "3haUjq7USRaUX3uPisz9TDskMv2M2K1DoPvHSq1U4GRdLbUdXzaBpGCcnYCYNYrHzm2Ze7K5CWrnmtbG9e1hnRJ",
  "key10": "ZdsihAb2eNafTxyCf4Tp73YmsuMLusZqXFfog1M2nM47e8C6AHGwJ7S4PEKXWfUwD3Y9utrpvU1q9yobkriZSa5",
  "key11": "PxyZMbBTAi2ERG5mjqbxVuVyT9QwWyGXXoiDSJjFdydxdA3V98kxvPfdbfpypwwn4R3VCRoPr8p9fTF4pmMJ9RL",
  "key12": "5iergJkWY8fzkykQ6AY6ez2ggbNo92TiB3mQX9UQgnSyzmmvbm2od9935grihPu9WnSpfkdHHhNhTAdcNFhRqhi3",
  "key13": "5ujaUZqi1gdvaBnNBZTF9eUbkqt5zhKwACKnQkbfGTTn7kxxSDtq5PR1AEFn8REK9JxmJYpzdbmUHk7ueDedgBzX",
  "key14": "2MNW7X3uALkWL6mJ2jHjWACbHwuXhPH8kY8yqp9ga3JcNYQuinJThCXhaoWdeW35453foyjWYaywbCq3MxTKH36M",
  "key15": "5nhqFbs8JhHzCUVXrj8wcFW811VMDDjGg8c9CsKWMhDoTyfL4vTGTmCChrZKnv39553k4i4KbZeE51aqdVGBt7TX",
  "key16": "2FeaZNTRPEYuA2iwFoWFEJ5M77gXBmhcYMavdo15uQ8BP8DuWvSLBkw7QLtiLsP4R1oJdrkJD7cBbHkNrQWNVYup",
  "key17": "5tgkm3zTyGpCcEF4PgqqBNfa7iGeP45dXdnfMtQoDmQXsHHDsAaqMorBC5QBHD815iqVu9LALtueyK7tbe5WDjHK",
  "key18": "3imrtRXf8GsLXFzGFvMWu3KotRsTRgToJUCSYUVQmeFADN1pgLcCCHKyK5eXbcYnxzpXKHJmesopPQsXNbjWavD5",
  "key19": "xtDouyedsgQcD3PDWZn7yp5CzprwWS5pxPdm4myfMown1RLJpeM73kLHR8zVS8tS3eWc1mAxCXyQvookLf6Q766",
  "key20": "2to25i7J7x1axfGPzXKbPUtNQoaKxgSXsvEHmhhLTwnj8XVwFDrZLBusLyUC68dBWqiAAgpFUaqBmBdsMsR65JGa",
  "key21": "3wcjfd2Q48CFzD9Hfp7cuoMwA5iUojHmH1hUDVdU5MgeUXsy4b1pvt8fokZyM7G2Aog7aMkHgCstaziDWmDgK5yK",
  "key22": "4Soq3AXxEQobiHJQqpaXErHmJ8fTriyTR2QHYfJdmuedykYcxobd5Yyn6v3CqZq9Loe8aZ6zDLXscqc5AA6KZgc2",
  "key23": "3k8RU3jcVMaHvSoAc4PzUraVNkKJ6hDwHqGoSdv2sZcZFPXywzwKnzd5WjD684ceXiK7gWs5rr1HGZRD2cRBq3T2",
  "key24": "3F4vXuTn1SB1RLk6bbk9hH4nEtkJY5ukBnNKZcVyg7LMTS7Z1qqSAoD7awB7ztEF9VMP87uTa627iSRxFZUMuxqY",
  "key25": "4mKbrpRskLWAKFW71tqMDnepcCktWutj5TUp2tR7AvyRznD52XmedFTzUWSeEZZrgVmEPJZWiYVtYmLRCTSRD8pM",
  "key26": "58ZJK5U9AnLwFhVkNPokkSzdWiH3L44VnNxPihDcWVEXqthoVxLQpZSiRe2Agw494nbD3HNk6YQqtae2xi7foyDN",
  "key27": "Dr4Q2rfofSPTGGWpWy5ZhpCAMzfumHrDrowpWFAi4vt6fwhuQzowsDMqoFWuPXH5AXcEtHVBmPALXPwgQ4BL28V",
  "key28": "4TmB68VLo98DjLrPMQ1ZJoZQmiogRFw22KVsBsv9PAw2CnShTrX7KzQgehBHDMp2kR12RqW5rayT86FChk8x7BDV",
  "key29": "5Km8Ri8kM3fd48j9MFGPMj2spBfj6ifkutQWnTJnRdVZWzGstUZPXvee8F9dF1jGQJDTJe1xXGu1grAk4T375qnr",
  "key30": "3bgdDY8UoP8bywJbFpdgkNekgNQK3LSqQTT1e8NhGA8ruvfhZHgjHD5FKtj5CHijCdu8oFie5vW7UJmKX6HjpP6Z",
  "key31": "55jMrDRvFiNg6ZmHzdvEXoMHEthvYTTzq2jE5TL1VUTvEsGrGmF8VQ7VwXE6Sz3WpMHhWwhL4uvGp48aaEycMbBo",
  "key32": "5v17MvL8M3BchaF8D8koww7bj5DuFGdgo6tL8Q4ZDagD9qRs1YnwPKZzFuh2tjuHdM7J8EdJ9761XnZwuh7jde2Z",
  "key33": "2chqifAv5FuSLyJm4PP7fBjtK8mAyVrnqJUQ7QXPLpTfzEek8RpWo2o5yu6T59YTMEyELYAZyfBbeG8nfei6gU6J",
  "key34": "659ZyZ36h1N3X6RBec5JeN9TMuWi3joCFzztf6qr3Ux5r2DUvqZE6NSGFsYgL9QojNwa5CzpHVUYX5ZifmEZQnSx",
  "key35": "5bZPCo6RDRH7AUEJsN283t7X3ToDMhjVRSK3p8Vk8BVgP5bKA6ecbUcUNfaRcg7GtNojwtqgScEWjCeCjAmd6hcu",
  "key36": "2n9fmS5Skw8wVijE4NP6zKKA5P2j93BRVJSr5HCY2EcKk4xZ1VDxjXiPd1QcxVQ5m1ERfcqS8uSz5XK9JPwzq8wj",
  "key37": "458PWQWiLpuuKHRPrNzdWVgcuZFkpQpfF2cNdRAgwb2UaDFLYd9XtUSjFGzjnrvZCbnvSTsPag2E5LdMXMHXr3tS",
  "key38": "4b77Nb5pzyrJC5nmgtjZ14JFKc59Quaj4PTGhgEftoAoaE2yhSuG5ncqmw2JhM9rwUGFsGgqtrGAR8BKY7ML74Xw",
  "key39": "5jifcjjofjqVMM2NaJ4bjPQTcD6Qigd5JZUkNvd2rfJSRHDQVf4ZkcBQf7tZCNenZu8q84taVYMjiVURVXmwc3Lg"
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
