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
    "5dyAt4WzHz1uAHMdLZnToBEiqFJNmiqvSMXzL4x6g7AApoyfEAf8QHkrdo1F3SQuis6HGEUH9t6WBbh3VS3m86eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEufJrcZmpna9nxbsY9wdV8WXqFVmGsGwG3sD6k1oK8c6i3oRgnvnLcUBbdg4GGxHmy8gX7SC4UFFsQJSudfMBq",
  "key1": "57W1xt4ZpgR5dGGNwABT8J4LZL1ad5KLuV7MHTCv3j4TgcnRv2PQtEu6aPXuAGQsmgF5A2Dmu4cSkevQkWxStWCn",
  "key2": "2GteGVE5H3LqtPds3N3P7tiMKhtafe11AcjCqLmFcpcWs4NcFwCqXifUXrQwb5NeDwukVF5zvNQLL7YzENuE28sa",
  "key3": "HKg4xuyoSR1LZRuotm7diA588rD5GjkUZ1atyWDR5GWvNjpPYhrRcgFhTszHieSgzPrLUgG2GzFCnHgPyAYnFux",
  "key4": "3KwNmdWhLjeZAfaCTbWiNzzmphVAJ1DmwxUVKt931743rX1Z5hcsEJeQthaEnNG8d8sryW8856bC49AezNUZqDNi",
  "key5": "2PyatzUrepYKf3m3H3XX8J5rsA4J8t576ZAVk5ckmFfc36Kqakh5VQhKVdPHF9n5gTp12n7UCcKzSDstdsbwukgd",
  "key6": "3YqZ98mir6i6griS42QuyXh4Z8NVVX7nC3JPP2P6B5ZKczDqsgzrzb174nrE2nh1BbGzPFCpEx91e1dMU68VGe8E",
  "key7": "2qE5TtigDieSbqkZ6urQG5DSW6HjXwEq5JzAH9tGsiVAX1NGToFc8oMhRpYStnu1o7o5jBFa44gVDR3hHw1nLCwh",
  "key8": "5rUwxvR48TdtBnpDbr9zL8jhZFje8U4K95UDLRJDKdDza56Xna41FWvPeHz3KRm8oMV85Dty2rnSaXVUHrT6jZjH",
  "key9": "2sDDR4pqnw8BA9KPamp9HDtXVpr5dHhv67XuKcLUwvm4KDpzXM6RXxPQe6SJ77UfjB6Auwz3RJwPHFkKajvsQ4rx",
  "key10": "PbHZ8zNxTPUTgCmMY4KyArapWWuqSz6hEQox4EEqvy2ephT7VBrnYxfoFAVFBZbY6uiLtFTJXLGadQns37TQLxr",
  "key11": "3Xr6jmZEpidMHYVJtNaayqLBsPQeRggopkBmBdaFcwcZEoinKU8g2uEZhCXoVyjwjdpezQSoxm6B2YpbaJxmp9V3",
  "key12": "63x9H25cijMz6RcBs7sWgfVkcaJzqfbE89QRDGrTTPfYTMCi51vR3ojQHxh4HPdAk32GFo96MxtAekhS8WdRYJuS",
  "key13": "2DzM8xDpPCVijtXp7pgWwvckHmEFHvB8JCiavL74kbUAtZAupN6zcruvmj8GvVanCgck1RNjJUJ4xJGkHdYQptvb",
  "key14": "bmgDjqXqvnBY98gAY97Gfc53XccEwmMkG3DuHktdyf8c7g9Yk6xqWBxwUFv2MiZqYtjpxSaDNRrAq9yY2E5Ui2X",
  "key15": "4HDTZvHo5Ekgpq62FeF2i12Lhw6BFLYVVkDnHTzSxerzqwtoRpXdd7N7Mzbq1H7CDTVEGGPXmvT2P14aHxybzsW7",
  "key16": "5AvEB1PShKsUpzh82QotiQ1HaoVAbdPjC1TRsx1uweW5rX4vAZXgVvZ5CTusnMGNwpJyS6sG74Ss3rWwPV2A6Gct",
  "key17": "4mdPPHAEsh47nzvBN436FnSigKkyVaWCJ49t7j1wPHBfYmmQjWHL9FyrpUhdyNRuALeeoCWF74d69PfaNjLus8qq",
  "key18": "4KvFSeTD8M1ZAHiF6c9yg3Q8JijoevT8zFV1u3fHTjvuF5oHKx13WRDSjxAwTboDYQ8fJaGkGi5ramwHW4YeS2PU",
  "key19": "DEY8VCv52q6qRFMyZiKcJVj8KMYBZCr23fnPfg1oYYMjSS3kFYfzw7CkubVyn51Ma2esHmtgUKr32tYCH8uprSK",
  "key20": "5VVU6TPMZr2GPxuY6aB3wtXkCrjg96WV6ZtivEfxDs1Dg5uYRxBft5unN6jib7358DvnrLBW85dAPuWfqw9cfNsH",
  "key21": "f5QEzvseT8jrrfRRks9ekqboSUtjtqybm3xsErn1tWVxbAn8HNws6q9GFxoW4S3SX1ANzuubLk6joPdJU9yCfzr",
  "key22": "3AXvtDNQNg7nUg4YMoDmuThuqUTn3eX4wMSF4WGUWAqYDzgax2Aq4CSLdiuMdoPuYcXanbFbewnzne6FLECS9knn",
  "key23": "41K1uVuKceBp3qg34WtBhXk1cp321nXuLeDBveXCyaMWAjjjXuKxE74kGrGJPs8NbYRVyYXxv1rbkfMJ2y69Ny3n",
  "key24": "5Zw8PgM4gG63d9XjTwEYt7vQci8FqxNKwgvti9hr41RGEH32J5hWLudSPGXV5iuYuXMtwnCuiZHbyhMb8NWqf8QC",
  "key25": "3pnWvesXXoEFP6RxySaJKVrK9R4Y1naDF3JKwPUc1dZc9F9YNgQcqKabPLscj65mSqnv2zjvwGatqegKR6ZTXPvn",
  "key26": "4z9SJSDXP4QT71qHhD4ApSuGBgveSo9hsPpUmQqcwmV2W7mcFBCMNcFzKC22sELjrV5Tjtwa17YLDj3vz3aJJzko",
  "key27": "4QbBgeyRjyhp8hy1EzysTia9AJK8MpNywcLnF2zQ9HrDFuDWbNgAtUdPNeD2T7HLtXJKw81GGX7Gdwvmwjx7G5Mz",
  "key28": "2q84KboVYtWV3YooWceF3QhsGrmX8LGBa3dvgtxpcefTVfBiDvPWCb2jr5hW1Wcdy3Hs5n7ewy9ubpZTXmEjLNqy",
  "key29": "Ps8uToUJCFwhtHcM3tXF5qFzMTmFaQiLj7ZUtrmJKdTs6EAuiVsgzS8CimkMKAQ1LTuzSCYFryxtFRqsvbj5nET",
  "key30": "46tztJqUEcxGrwjg6jyLA4YpAKutRmxZFx6xfycABvmFmbDfZ8M3b3WM38XZxh4bMpkkQTmQDodL3padtNozFyTv",
  "key31": "3him4oAv2QR5MztWW2BdatD23xPjMP2K73WQRNniZXP94Jk4UqvccHJYeK2YiAhrXh3CyKJwhJjHbzi5k7r5RCDB",
  "key32": "qaqVyFPFx6oA1TgGXXB2aPNF2nQB7LY3Rsy9oRvTE5AnvvbRLz8cTYdkbPkohNWVcYW8T8Q5t2Z7knkSFbJQQcZ",
  "key33": "5EDQR2jok4rKbzwioisXotPoch5uoZSN3NjWhVDHFt6NPJ5VpT1qD1xx8wcoMaEUgDDgptTY675U5ZcKjFERwKZv",
  "key34": "2RPGX37Eu7jxZT6w7t6duzGhNjKw7GJvBPTAnkDLziLdoXdrAeJ1tFuKQPU2SckFYXDdpjStfe16Q1pkE3kYjMdt",
  "key35": "419aufskVCTQQgHg16g8Zh9Sy8BENHGPppE9WXh5iNJ7KRWUCHW9jPcUcn76HqJfux9ZQSYa1yxjAcEmBQbtdLxb",
  "key36": "4N7nkymiRKxuWxTLitbvSNNMV1YTQ6xQZKtDs5VeMjoGKitvSBYdRZbA6BykSqpZErrKRLKH1Met3iXFoDFCXuJp",
  "key37": "4siP3oCcnQxsjocdnzqPyhgqYX5hGEtvwwE86oki2XRUzMroKFpmCgM6zmK9tPR9WEfnFGkKvZk7fxtZfbW1TUEt",
  "key38": "54duyWmSubXdog3mEs3q6sz2VS7WpSK7X1CyrXGVqNedbK3S1QwoZo4HTVTsL7WFrtbMN4AeTTabWALFRnRwn48z"
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
