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
    "3ahJcqcvgFTBnVsQ8aZ5chTtrW8vyocx9v9MEXM3boEhpWNGytFe3vcYnPEV2o7ocrszXJpihrmQutbJambMWfAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCz23VpdZro9PDAte3HxS1VXdBhSHUNY9mahyZJ9vT39KPrdPHPNoY3KMTb8uwwnxExUVhREkRsr22aKoV5bitE",
  "key1": "5zYzkzpMJJAAfQByuQqnK2J3kTZfsGsfzJVbtFNB5HCr4m5tr91GLyWLa7vmXQkNRHgbcpWEd5134PL1putdyMvB",
  "key2": "5rjoYq6Uh2fHsP8h74QeU9zJVH6uaeAJjxxDAFn5g76DdcKkitRRhomL9hNDH55np8tmJemdAjs1WG6QXuVNAXWV",
  "key3": "3n97THBsth4MeVewFKhNWFQ98LCJ24Pak31e9EEu542NNynmQicmpXFscjvhSrmVxd6emAEjL3due3qP4ACQSvgo",
  "key4": "5HYubSHvg1tobFXGYthdeEtHNqyHU3LnzA35QJZYEpEY1wcoMWpCkUiNieR8NNPvHWhrAzq7s8Ce7WLjbrrxE8rG",
  "key5": "5uK1YVPpzMGxHWksx2kJEqzNxhes8tSAXsEkTbrE18jrDqhjmqbEV2RqsVdrTGzZEWhkAryAAtLrqQXGfTCGHHia",
  "key6": "3CfGkLjpbZ3EV3Kp7fiRDXyMrNWr1qyktP7LkQGAwN98XeLHHJTUYQbXjwtJj1dPTiEmfAe2uwUmdkmKpEQb5T7D",
  "key7": "5cjmYcP7PqWYwsHy5WingZibzSse4Ats4DmwN6uw3eSCjDUYatgyaED5Vdcj9cq2fictbbS7tUi9FGMp18cWQvrN",
  "key8": "63EYtdyLdDZNMeTFrVYm8Lhb5VvXgC5JKzBg8bKoci39LDEYhWY7G5ZprgparPkSzHWHuCdiN6eMgxpLc5GSPitJ",
  "key9": "WKtKx6TWyCzqYDEqhFp9SxjS9ovGzSdRR832fC2fEKsvyQbqxQxyKJ4JbtpggpgaH1rbAN2o3Xfjj7TQpaAcit8",
  "key10": "V8i1ptYzNkr774fXvPj3q9gU71GtVQxCj5WQYTr1HzRHdBu497kt5z5tWBn9Y3u5f1YZ8PvWmLN53FGT7BHXj9q",
  "key11": "2reuh6dGYmdBFobMH1VBCjECZS1TQ24U2trxL2KCj12zn8MRjM9DqE8ohs6RWNXH6JMyzkiJ7ogDYbwrKPjbmxMV",
  "key12": "5agjk2iAfFgePLDYj7E1fYypszK2fqznQA6dto2kBeCzUi4EcjBx99TUEgCyMvEtx1BYXEaJNQqLgJ4X7EqfV5Aw",
  "key13": "4vpLWbjt6XshmfpJyddFpLoSorzTeByLk3zH1LmUZDiD1zUKQ7hcUdVLZC7QaXgEYi5HetKnjLpPW3hwo9JgYDdZ",
  "key14": "4Lq67sKUQ3QGrYxp5nwSbDeUDbtL8GjvWvp3H6gQ7oKk1LPbsogURLUfQQBJB8RugC9UAMKjvt3boht5U6SADJka",
  "key15": "2D2VN8FJ645aV3r52qzpoKNNaxiZr56PT6iq6aupkaVSJKfCvnPhpfi1Hh12K7iXB8vEkCycC5TPdRRdpEnFxEdb",
  "key16": "2NJ3kpra1Q7YYp8fDAPnhgEMkoaQjLjWHz1sPYmE6F6isScHW7NHyDToWt47tCC242Ez7gpqvheLomWLP2hH7DZS",
  "key17": "66FMsCi973AV3XnUzZ7vfuVeUgrxunFwV1po8dQ57hS8jw3VmzeUhgf9zjKqNiHKptTLb9J5SqZsdApC6aM7wPnc",
  "key18": "Fsp8BbAE2ibKZ5Pk7k7grjVwdToyckztEGmysuSdiJvsTRcT9KLdth4drDqxAb7JNuRwoLgbC2huwfXsA8wGTAX",
  "key19": "2yabw9XxG6ja7WAb54DhJ9vTHZFZXcyA6m99Pp194ddPAC2oLeDfcEWDpzQgmZaJA49u9YX1bkLxU7YDgLeNxWRj",
  "key20": "Qih1z9DWQ7QkDEqef7mzzZsBiQhBRzcvYhkEjW9dJJtsYHLxHhTPoiGFs8xgf54fq6s6SJzTnzaGEssh1iYja3Q",
  "key21": "5V4r6rvxMSdAhyCFWcNfwpJFjMuk6i3SZjX1h3Gx4ZDkZBJQ3bWSwEntGo2LJVRhpwyV7FUf4aQtyPnFq7B9TLgw",
  "key22": "zYMumNxVibTBZXXEZ53PRfiaVj8aipa3jbuQTWUuu96WDwVXoGcX3UDfpSgWAUX8VY6kUHgZXMwJu16FGQzKuvF",
  "key23": "4utkt7idu1UqJ9XP5dSHTp5x2EzAZb7YBAGmJdTdNfp1xNtoB3DpMKZdVRsSGXKbuRGNfZic1tqdmkfSTccVBrit",
  "key24": "5gWqdHdriST1WRRcgQknuBCMbfqNh5xJp9prUqS1TSug3RzPpKynWhuYuAsXeQXNsbDU9DYZqArjmnvK9cB29xHz",
  "key25": "4o6aEZrCynWvzitnC6A9UiTMXgambtNYxjRS36MnoyWAEDczXGjxmVCKbexdBYPWc532TtkPxVQRTJw7G2JwePrt",
  "key26": "3YfJ66AmrXN8g9vnGqCUyrjdqRQpJQr5wtXpASeNJRsr6g1TYFS5NwJnjHUJT8Q6AD4sUkbmFBoGndqrDn1zvVUS",
  "key27": "5QcZS3JNt28Ai6obUCNFQSnXThapvtexXnPB9rvD2uyiMLcaP6ZmerpzKfNzoKX2aiqKq8ESUAJtZQfK7ZnU74d9",
  "key28": "3VyxYoVxivk57qfw1Q13ucvPf9qw1d7v2aXRqXnuP8rMTRjSagBAjj8Qt5senoy2XTWw9JHg6DFzm675K53toY6D",
  "key29": "3pamLWfyA6vZu81oDaVEGrZ7ddjdT9uXyi1T72YvhEK2jZh1DTVeKDngtLkJqJnsZUdhUXtCzEwPivztcSPKS445",
  "key30": "22RQGe8h6gLs54mbRCCmmMn9GtGP7gdYwsvytRaQgcqpgma2adzyi1gm3iXFHNaiqDfdcnHnt9Kf5yGLQwSgxt71",
  "key31": "4TJJ86ZEGuLTpxPgZEbj9xccotw4egyoWaWEwLXksbaW6Se1bv5maPEtb4SVcHPcKN3ZBskFRymkoSMVJTnAFSeP",
  "key32": "2D79TapyEVL5PciKsZsHo3PeCqN9G7TTV7gER1oiNzXdeZhbt3BELoNT4ppVo2fyurvZe9C82YyuKFWBTVQSRxyY",
  "key33": "n3djcBaHHkrT7BguFuWVhmBr6Hqk6DUZ3z7B5HXqZnfoHVonyJPMZvj3MyvUqX5TbJXRmoSjE7dydJYZLzUpw16",
  "key34": "5FVVf5NFEHPAny7r6sW8vCJbXc8qN54sxafzoAntMSgQ7pWz93He1A9qfVz5KR9PUhFdGADf5TSsy4uqEDav4j4",
  "key35": "3m8sUkVaYVCqaXkY9HNuME9FhfKnkJaMU7ufKuvtq39VecpNfjo1bj7K4Sq3AAmPBQDk16XFXnGe9jEbhZwWpfL9",
  "key36": "4suQDHBJFXj9TcFiaCS8XDw6StFvtin9bxYqdY7aN96eYHVEakG5qUDU9ZVH2BzNJCNncXMDjsu8hJrxfdJ6zwDg",
  "key37": "26GWdge2S23Pq71HucLYGKwaoNabwTUXaVW8vaGNN7GCnHsdSqhC1jnYVA5g6bV5YpsqqHU79GzXhFeZvcYrnKDn",
  "key38": "4s8gfEFQj9MYj5escnVDMT7MKfnvFSJaYDuCySCUGDuPKBdgLE2KJYF1A9ogwCb9wRUtrCzgtTX8yRxW69LVY8my",
  "key39": "3sLQpTf8HpYgjotWFV1iphWX5GLB7QHY4vkd4y5h756BnbjyUGfNashmFc3gCS5NYFzYviNhXsNqD7SJV1jHrevk"
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
