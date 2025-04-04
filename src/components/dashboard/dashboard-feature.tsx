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
    "2ujzrUtoMcpVgwoorwKUUjyQ7WJtzDPe4fegiuCP47NDeSA7Fw8DjCnr27Hdukxf8iCMEUP5VQHxzidEuYrtUsJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnKPjZkDbkeNym8scUnLHbZwJinHaGXX797DFgigx8mp7FTLZYE8Z5AENiHyp7W3JygUBj3S2wZ7kjonV42PbQL",
  "key1": "4NiAPwyBwoeL8zr7ZsJw61iuRv2aqmEjWuSMjbJW5VFt1fnpA38aM94g7h92Wo8ymNb3shBjvVkqxnrPYh4zM7Lk",
  "key2": "4Gb4AFs495X7m2k3umWdDN83Vq7t2pVzqNLXAK5bgK6rCkEkiuNjLRfxrZ7X2EowSdzsi2Er9B1eN3N75HY5Do2W",
  "key3": "5q1ZX6HLyc93rq2KF3vXe6vpHRHT3c89WKfBw5YHn6EXPyJbjJ7ZoqCNpqDMBpmh6vqFcJq1gSD8ETvDmBGnp7cg",
  "key4": "5vAcXzKFi97NVNRhnJy82H3Fzj9KKWm4xcpvHaLtq4Unu2sB2CFMKfSBn2EZZ1Z4GAVWrLr2a2fWF96BKUTjkkQq",
  "key5": "ARg9avsyFkaJaPjxKL6Tt9VgTmyByH8325K1p9jF91n6mDm1RCjqyueKx6xkoBg6fJCGEQcaDBqDBo8UiSxAuks",
  "key6": "29VwK6kzxdCm173dHyLHnoe1D3ebwTgTrwxKssrGdUodMSagZKYF6uoUNkZAVg3JWQRmeAQ97o8SeAw2vD86vj62",
  "key7": "39iqxVTzbc4FCxyCUgXvcPvqo8ZUKTaeNdT8gWDsbbE68wXMU83cu4qmwumPB5JTu1s6j2efs3tTXyo75B3QZb5E",
  "key8": "g54vJgrRTfWjVro9aUXvVwVk7u8dyHu1iFsN2h8Yi2saSBgFi6o2hYQc4QKyj3G3AePysrbv1ZMCdqSbCrksY6Y",
  "key9": "LqHuCf7Gv7JYdHxsLn1CjQUX4mWiJMwRRidwYh6NJkzZJrU6xdajq1hap7eGkLcL7P48xwFedKAQ65vvzLurU1N",
  "key10": "5E7MVS4d6mK9bu4BBd9q5J4sGipBLnUwSw17GtwC8fy6SA9gk9iZnyoQsUg4nTV6PGj3LNHFzmPvF4bHBvXTdWhD",
  "key11": "2geCbCfGwaUi5fCjfYQ3PYMkAFde8jn4KvXivHUv7i4FSGAY3Z3jRqvivJSxNt7pdEvKkMEM4aegmouKnckSRyxV",
  "key12": "4Zjjk3RnUHyoQfc1AHXauZrKzvQE8CtjbKQezmWcqVJxiitQ6iHqrShtSRxtAwJ8enWZ92oGCs412uusmJmt4uxf",
  "key13": "3Jb7FERqU8zaJ3E6bLE4uSz6V5Jq7edZJgzHVGe56wWWBVa5RgGfsgpQgCcTYBB4H5ixqgiAsP7S9MhqNMUH4KPw",
  "key14": "4xvXcYL8xTKMQfZeHiWGbjVEAHUfqtuWUm8cYXzqRm1ALGWofWrLmEstZjBG9HSG9KggbnE7AQethnZwjqpY8Ctx",
  "key15": "2hdMdKRB7MwVzeZGPpGXy7VEPTAQavJDtimvpBncc6QXsphBLWvmYw5YkBuF4nDdY4NL2gWzfPu445RguCqpGxZZ",
  "key16": "5TwopQygKdASsbhpYcm6eiJzBcXfkfH9KTDQUdzWHX2hZL4dSh6k7QzgVWaSWtMdbJyraoXccRUaiDJJ9mjaCwDy",
  "key17": "3apzQEZkF5PbKm7S1cRLWFt2CSNLrD2WJvEpKmGeCy9vnE99oRZuZ4aHN4hs5kPP74q6MGtwZ5MU8ckSUqJx8QEP",
  "key18": "z1WeNMJ5A1zLtKSQiZWvaq6ssAZwBmAn6Ym2j92EJx61isKQfaoVBnL6FqK2QrPoAFYKqzZd2w6ANHzz8YSmaoB",
  "key19": "36JAm7fLmfrLN1seRy6ZSUwwZinzn7AVnWJvFJA92zRKfqxpMkKiYWTSyaavXfGypz61TaYwmr3RKZuWPTAxP9BU",
  "key20": "3urt7A2SjULBBiQbyigjE9fCoNZhZ62PEE7M9hU64F9whYCoD79ZsEhZVzLv65RAyH3SCMdVQ2GGPx7cCjW4eDFj",
  "key21": "39qCHqUuqNn4Sm6m93YBnZoW96tpd7E1QUp8Cy7qwAbTPa7yDur5ByeK1D7HXtYgcFAMTj5VGXnF8G9eUfHMyRMw",
  "key22": "RbQwi9nEh3dw19ypigBcUcgrJi19FuFbSAV9zfiCkZet5ixs9vUhUFrEqd9ceykYEUqryLMafsYoMTxZvjSmuLQ",
  "key23": "3ECRaSKrMwwA7E9SzdSywJYav5NkxESQCVJgrBVhLwMiuQXKSq1L6gXBXoqctC4xJ1gix2c5tUHo2UTtLGugRLTC",
  "key24": "EmQcceni4cZVwdZ7ju6KQT73itpGW95rs4joU8gTNE9W38rs881c6L9MoLiKp5bSZEVr3g9s8E5meP7YBHRrgjH",
  "key25": "4cSYWNMCmNVXVByTug5MF7dpNxiQEC2a4ZnmhWBspiAqXWn9RRbjXUJT9YUUcyRXisPJSqDfsTrdKnyrCjZ7EG2D",
  "key26": "kiBeRkrq6mTFRWpqLNRvFQ7Uzq3vu6XZFK1Cv3BKPv1w1GpfFZb7UTtDgBe3dtyY1brjwYq11nfnetCJtfor3s3",
  "key27": "3wFqKMCx62T4Er36WanPt1oPk8SzneSTkoxQz9U3gn5zmvtJxjMDxZF9yh69dfPg7ho9XKV7b1AwQ7ncEiUvybGa",
  "key28": "5YU736BWeexT6YbWjk8avoC8vSe8izniimdLuBDg75dSbZuPST6uRWQJKWeDivPJytZRMcPrf2KV4ZQJjbwNYRF6",
  "key29": "2Ls8JBs9Juv18CpJJ6fM7L8z6p1kxxsEEMP7CECKKfzkGpw3H7qzfiQVZzkNw5wJyuz83VhywmakLGmE1QgVvndM",
  "key30": "wfpkTeDnyPATBm1Niy5K4TwiK1PRngnzKbiGRZc26FWc7kwbptqvjDXLffpeXGrf84YF93CVGeA7hxXiCWTUdAM",
  "key31": "5NXczMBt1FKSF7GipEVtv17S2YssZxXkoLvyQL9qSjWVnBQy9a9R9G5NeBRjkGbmLiGWqEUJ8cdn6fg2UDxN9eCm",
  "key32": "2YkrQLXrBuzYAFnEgJy3VuVzFTG4Ay1WuCPmizdcf1DBmxth1iYLPmGShwbiqguuqYtvKcxHRwNnwBAvPFFf2NaD",
  "key33": "izVgtximm7mq4AidSwsP55WASEhvsb4TAycQSQmot94Chu64c7kwDft3hEmz2p9BbeyTjuy8EpAgaPXS9rFcZBT",
  "key34": "xqtYjMLmgLJaDXpRUMzNAuUV9a9ZehpJDW8cRV6vNJAYRAhYdj7xYzLk5vGshmFQa4GyTee6RrLxgqUSauCxn9r"
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
