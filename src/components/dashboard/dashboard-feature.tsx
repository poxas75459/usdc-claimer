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
    "22BUmZqXLk3soJHcopztVrjUKedhXTgPKF9UDMZeDA1uyFbqVkq9SmonjzwJ3Pa6UcrKgoLE14JfCgRDGBV5kqs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7aThvT6sn7faTd2WxMtEZoXp7PK9qFBdkSwxZmg6SbgueZMDK9Nhiw6tpqcVJVYfycjjU3WzBanUd31bJszozJ",
  "key1": "5uN4SunWs4Yu4rTq99dnRUUB8ZCGCtTWjFS2eoeM8HNfuU3HZuo4fsoyGAQUYqF2aimyXWoGSts3PZ2YFpGxCVSs",
  "key2": "5iP1wkuHSryFsaSgvrmqcv72ABP6rajtHRM1ePsWnpP27C4ncKmwRMKw3Xw91yvw3xyNysuiMAkU91FH3KEkJFqj",
  "key3": "52jrfmgyLV2uaUdcAt7dEYc4AuoC5uiSuzQs3KbsGFfuydJpqZ9DkYxcPzzaLCCwVtv5eV5vPH7JAcVTZ75S3NG2",
  "key4": "57vXHW186YB7ZPknotUtadjPx3qLUY5r45HRRmGwpECvdiaWCAhCUaHo2woUfCRuyCccxy4qQJA3nhfHKU5oG6Lt",
  "key5": "4vBfGXUwQmaex9mboUKN1ScKVU1Ey8ZtQrPdNaSdxw9r7CF9djySezyW1BsJQkNws9vMxTMbxdRmPNouQB9CuZ8b",
  "key6": "vrScpBfYJPULTbeG3kRBJKcy7Dv62TVjGRKMMr7yZpjkqNVivQR2opk91uGTRfsnGqPqhvSt3FhJn2GcW9Eq5cT",
  "key7": "4bqWNcgLyRbN8CrKuepk5hTcHEbARQ9X8iVMdai9xAeVUQqAwgMW9sbV9iYxG5HorGhK2sd2TJT2u3YffryoY1Ka",
  "key8": "5V18hTjmT9jxEiG6j4Sdg87N54RsTxQo5XpTk42ajbK1kPBqYJAmXj4DyVaAaZPUTy1p38cAybFG2eamo62vYx38",
  "key9": "3j8snGTuDDUHXBHZTWsbfc6NrCohpfveEyQ7x2SU85u4fXY3heNSyFssZh8aFDEBNTscrBWctZSswNQdbEsdrtTB",
  "key10": "5WnJhCvfaSfvBTV6wUZBudvF43YRnsLaMhRBQGLCzoJcc2jVzg9J4xPobzAKpLBGAi6qBkr56Md21jyui9LaSWpm",
  "key11": "3Gf8aohqoNQt31kyNCDzLsEEvfUSR2xazfVsa2ALWzq5LC2BNoBMh2v2vTsqAaxbJU9NnJ9NcRs2tMEKXMWG5ksp",
  "key12": "2YEWB5WVvFVaJ88Ga26ziJ1ZMsgYKjPPakjxmUb3YCWosEWfZbKcQwB2kft4nwD2fgGXJcrAsFAJJzk6H8CAHh9V",
  "key13": "25Wi8bpLqJeTfMz2WxUGR8yEsXvd2vMwsqm5rChAGQxJBrmjKwDnuo8HjyH2ifwfFoAjgF4KVWD6Rqu1ViATjYVk",
  "key14": "5TVGALZrdj61QbG5YV4p2xAVEePCrPiYC31tDuXYwUUr5mGbLBZ3FzKguv5iGwjtUAMq2DvRZgUyqgfUPKhRU3yu",
  "key15": "3cgJrLpjAXRGdNJRPuVLzVg6aBehkqfAziNCD24BSBhWUBJRwuSA13SAEbwkHjC67PXVusLB3sDLvnd5daojYV3b",
  "key16": "3TE135tE5Q9kKFz6wypwHh8J93HJyWGGQwPCRRmNsKETv3N2GZ4tjcpNkYNqjAvDAUuyGpgorwYzEydvD2sV7LGs",
  "key17": "2rqskmQD7fMQa5S1iTNospHWdkU9fauFq6x69PPeRp59jP6QicRoHKmZitizjnTSkWmCwfhh5fK4afW8KoM22FC",
  "key18": "4SM9r9WAiEjcmdTieo519D61dgxGkaSMqnynqw2QsRD38dn3sWifzsYMgbqhLpzAx5AqeYJtA2LwCryekenaZRB8",
  "key19": "53evgLYgEuwMe5KZt3ucchDc2qTFbKtsquG168d41X2MR2vchDAEn9PQ6BBLc6CZST2ymgFhQPwEGCkxYiKjxD31",
  "key20": "2nAvytcqFWuCYFLkYyw5sYNdUjLh3wUwcxs9GywZERCSfoqjiEquFTpmoNAUPrwTy6RHF4K4j9kRUZBMKcDkE45o",
  "key21": "5i3ZBKPFV5EQvdvrQhyKiyWLbpPhDRqMvkaGbJmkcgrx6d5Xb5NeR5U7Z5XSWMQm5NfyxL7j4hwHNhDQt8GDfv4e",
  "key22": "2rCTb4PtPje4xoYtuzbRQw6pY7n2QmSY2DkhTgQ27z6rxjjy7uiU8f4CDEg4Nw2d7JGDw6TN4SxKqcAQCUsq37Lq",
  "key23": "6GPX8W2jmwdMDoVtqzkFcK9knTGcGDp1Q8AF9mepJYmWEDBd7ExaZyo9yTLM7mhJrwaD2Pq47tfPUHbep8H573j",
  "key24": "dok47zZd1pdMMrh3wuEUKGaK46bTudyZuPuB2nWKkCqv9jJ2BWA16ZcxhTd2ghdWzfkTFRXfwHtjttdy7kFGTGn",
  "key25": "2wbWtbTTKo4ZPX1E1nkV99GFPSU2BxhBsS9Wj8zcPSGpLGNjKhj4eC1VgPx6jvNUp5PU37HcHEh7gHx4zQaAuP7H",
  "key26": "4jRqw6ETWxGaJXnuZs5fqePBwv27T8p87dMvBGBsZoQZvCZYHrpnqAoF5edBc6ryLLp11hdiKX4Ju3b3mwoM6bhL",
  "key27": "3hJMdL781QvU62Roc47kGAUx1yx1C7tZfdoU288TvLL43L5WeZhPfaR3EHGZDjPw5KhsdvvGfRAKqiEjoTXX81DD",
  "key28": "328ob1iGoJsD82PJFRHybvQ49dbYdjCz3Fh3AhVsq3juv1e9Zt62p14rDeTj8bNrBguqTeAN5whRmFJGTH62TcpG",
  "key29": "3Hgr2oq968uproMDWqJzD2nvTgyDbzJZ4nKqjTDh99HrhVA2JBjqrABLsTZJ8nfWqWLwstcvRHFE4GHZHH8kbHYa",
  "key30": "5MvP8pCz5VJCm5bJFoMP3S661jHBEUf76RSzUwzduJhRM7wKebCxKAiTsdWucFDHaTd13aCe2oxPexrqLkNqAs8A"
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
