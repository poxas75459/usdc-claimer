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
    "29tZTyEJFgtvdyeHsrYf41EHyM2sSNpQSE4HgrzvW3mSkf6KhpkywquP3XYDJeQa1fm6Uhr1rKEfJeaggtRifL8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRAyP2wafc7JpJF9PENYGAJKqC1mb1BmPaKbERKP9XcTpEMw3LazHGvNAwRZKoAjBAFxtaAsvL3LZnYXjNhpcA1",
  "key1": "4hnp7vuV9AbeVy9nans48vs4AZjEQbwyfFG18CDw5CSyeauuhi6Sq7N6k1FgF7MP5akBYnGEXbART7tc9MXJV5Je",
  "key2": "21tXAib9LiHwwjaNBGF3R4voDq1HVDP7X6Bh1Ad36eurv3YU4Kxpc9D7CmWosumy5bizMrfSHhHfdQ8APZJ1QcNu",
  "key3": "3XENXa8r5jqfECEHEGZHzkRB7R1KYRwW3hyMKQskSM5Y3ujhU3v4a4TdfCAyxsHdH7tGvSAExWmqf9xXo82B11qs",
  "key4": "3afbs8Xw4A3P4x52LPNUhKk9wXZNReUygyvhR8dcbaP2LPuCwNbZreJtKXneTpcwbn7PLZfPPdxmj1CUdNSiyu8",
  "key5": "3pLXScJDKgT9C7F7eJbTHzQSZduoRdvQsF1amGrjXqDrWazpbqTf7bLZeKWwLZdqwQgZPueESoDU5X1ipCWWHc4L",
  "key6": "5wBZdnrPbV2zJjg99ogQRAaCRbs4u7tdvisV2DHwm825jXKkfzG7dnSJmLT6Mn4ZLzkKQnJG14Dh9KDYUWM6iShU",
  "key7": "29YqGGUirGEiGrHbmnzYbfPTeQaofkUgdcBHaxFB4hPwxgLqrLQmfVrJUwS8RoaaHwNJAJiJMJCGHVk8N5ooaJPT",
  "key8": "42uLfKgTp3wtVb2igbZbyM56VbXBfpNy58wZCBNHnrs34Veu9S2pthMormLD4K2fTbLj5rQAGa5ni9YpK4e7A6bC",
  "key9": "4vmXc1Q8VTHqEUTkq4PWgKb4p5vVoMnADfNKy9W1oSAGZHqZ8cFTArhsHqByGbqgmbDHjWqS3D6mJ2px6hPDK3s2",
  "key10": "4bBBgAsBzCj4eyZakzUKp7PzkKytznzEXRQnza11RdqMEZ3KwPEhaRBYCuPDurtsyjiotHG3Vzkte5DXZRu7kQmE",
  "key11": "3j5LWR2uDLyGYAfAvCEkjEM9aYS2k4mFsSRw3m1vXJMXm4R2HjNGAcyLvS88aWpLh5A8h5iJuRKM1cWTdy8qVbRV",
  "key12": "4KdDnL6TLaxSiLLocViwGom531WiN5tfmhJLwiz8oB4XtYf4n1L398JEjQtu5NwbibVCF5VkpLRYd44SHRWCf9ZM",
  "key13": "mB2tSfqya5wsSKko225TotRD6XaSux6XNjoBBLAoBckyabGUi7XUZL1EUTBnb1AEx9gwFK7SWYForUeiKhxMmkk",
  "key14": "5ohXbphQAArbnBGvk3tAAnY4dtnkFYuohNLT3qwgquiZdez5p7FqhzHFg73rMJHtTWgF15pbU5vfJdfM2uUWmWhS",
  "key15": "ceazwKm35YedFFcbteFhxT5FQQC5KyACGx5CgAqqpMvHfynbdC88K3nd3Sb8PDAhkD3xy4PHipZ5ppqE3TigehQ",
  "key16": "3tP9uBsGfdhJxKZbc5kvGQGWKvVxagRYNdRsfvGHy2qmgZju2XAd17ZcYBzJfWT8LPtG9P8VV94iY2tgRXSZ4WNQ",
  "key17": "nHaiiH4dm5UB2KocEHtCVbNxcct2X6bREJQ6xVeUAz7bp5DqnoECMenNQ8siRETHJog1khuNaQMCtK8D9UXHio5",
  "key18": "KDdxuSNDmwvHB4CQx5JGQP2bymuMbdLYXLsDDdueQSEsimjP7KuNRXFTKqkHtG8R3McKkChsWkCvj16JagD17FJ",
  "key19": "5DnZPqbH4spNxeKrcqyv4eaFpVh2FkeS7JebcRd8KRzTvD1qtHYQdYFo28yuWiTumnkuANtJWf3g8n6HXtxLq2FM",
  "key20": "ZfkHyKmWDbxHsFBva4yjYW9ZfRi5E28wWwPr8yTr3gqjZBAEJpci5QAsBzy77qGZGQRVNVEeVZKocvTASKxJ6qy",
  "key21": "twKVVA2AqjMUQgzKvFAtTs9nYL181WfbiB4A36xvMfhpsfY9Gogb7vni7Pb4j5hJXUycQy5HPaaG2p2ofDDpNmU",
  "key22": "5D6NE64XqHLjeZvMc1oHPk9duWVnnGED15jZgYS4BXsT2LbqVpUV2MXe2Cva8A89Jdqkx3tvLKDYXwTBHT3sr2xq",
  "key23": "51NTTFLcxhUL6kmCWAedyFE5fshgqkT4SQ5TfyMYg7srGKFD9G1kUkk9YyjDzbyZu7EX4GAwJh5oUKVBPdeZuMrb",
  "key24": "SUYEp4meD5zN5db3qifay9rLBwZps7zDmxqjzM8ENXhfwQSVJUZNhGnZG4tTqTBm7z3FB9rGRELBd31nbhu9QF5",
  "key25": "67iFmJK5yjyt3sBtQ1ocwQV5gBx2vbsxAUidwgdKJ9jPtnZXG22nStGJPDwXHpejzr6PtEdrXFh4SecbrRaXwEqh",
  "key26": "NP9Ssq8VqtQBXu5iNanamqb4hp4By885J8Xqrxn8h9Q2ynjvKeBZXGBJnBcL68BRh4JbogwWhSGukHMC2Ykf6Bx",
  "key27": "d1Vm8vgaW5Qe5eXS4UP4WSuHeGvhzHWFjsf4gB7hXnU37fSkSm2qem6YN3XSw6Jsdajy2vsEjteu2QyYyiz73qT",
  "key28": "r2DTxTXJEoDXTWSJFZadSKwKPfvnxxxENAHEpLAomuiQr1WjbZiyYxLQywVYGeVQ3nTZt4kxTprKhrRfa9PKS1e",
  "key29": "2tmVnM1eUrTbw8NEYm2tx1qaPXQ9hT3VZuujT4zPXAPu9hiHeB4wHXKmaFffNscFG8ZE2dSDTrL8tnh8NVSfPjff",
  "key30": "2rbKwvMUhfqQqHibPNJBLNBfNV5w1tf9xFyLTjdiKR2LN5P21xixNS2japKmu25oejEgNWWMJGZWwZmzTgs9BXKB",
  "key31": "5jsmy36aSTLvFgYWhtDdsFJiD7MVA2nDXqs4cn8PbaXS37M3hAk12UsRk9EVLdNJznU257CvMwQsin3bCKUtNtmk",
  "key32": "3JBhsdn4bjKUN2Qff8VzAvzR42vWKKm9cqckX53NJsZ12hS4Hoxamwrw937aB7ncf4Z773Uo8gVTdr9aPkiucQHH",
  "key33": "36DtJDMmq6oY7FaHZVojdaBbsgEC6EpuxTb8kKMFutJvFnFVdf5JgnuScFE8hKQhX938dGz8HT8dkjtnDNEXkViW",
  "key34": "goKxA6j4GsBV9UERjjTwi1i6qdWHBbXZvqyquMkv8zwzcYqBpszG7D8LhW4BPwnA4wxgBEGsFGBtiQYupqqywFQ",
  "key35": "2Dve2VeEmMGydjNFvPZRmj9Fukqh8DyZxB4RGeXWoPfMr14dZwQEutyAC48ZSZNiZfLgftT3L7mkg5f2JKSWjBVy",
  "key36": "3g7XUrHsYXdihjLFyF28Gj6vkC1ktR3p2iCd7pqsnfTeVmNW1Lf13oEwUz711JccpnsGpunejLXP84Ekc8AS3N1C",
  "key37": "5jZV8yAbgaP22DTkhSBHfTqYjk8ox6oSZRrDZqv1cFEzFJ3AcUx7YaPWFttQzDXZGVMTBzipV8cBmZuDbXhEFf4j",
  "key38": "3x97uYhoXwfStjE8LXPNfsVhqxPDJkotkyFj4jiNF7bk5mJ18UQX5cyovKpcJ1xSxwLXzndnxFdEigzhHvb1KmLM",
  "key39": "62nXTkMPYS3ho7oG6Hc5DDqLvd5MYsj2wSsk3xnRXQ1T5EAoJg2XGHdhGmHfRwW5zpQHcogrXhuVDDC6MkFuMVig",
  "key40": "qQRWMpKAhuspJQbQKyRyQg9biKCscmJyb78bPg3UtoGJS6BGweAswSDjBN7U5ExbvbPeWXCKCxa3owFD35qMH4L",
  "key41": "3AWVJSrDAVbbn793RgoM2sXsoRgs79fHzNonLS1BtsrqqKZaMqBtyS5rbGA3h95gBxPBSU75U3hP8vPWDkmBqnLg",
  "key42": "4E1rxUv2nzHS3uzMJmSEm6wfMv7J5N83E63uCE9s7JwyEyEQ7K9EcSvyxMSpFNGGWxXHyfHWM1rdQ26dP6mLzZto",
  "key43": "h5NjzRkyzicRSkcuCuCphqwZVMB9HnKE9QdChaMY6S2XBrrqzTtY9sHvsHAUKC8gbpsRrcx799mAX1GzE8Ejxd8",
  "key44": "2bd1ZDDi2Sdv3wQuygTvd3ArN89AzKSMST3tm14fs1pa9PoCiAvFJeu87MEW1jcUfQJ1WsjG6Yw3T4EPcJmN5F3Q"
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
