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
    "3jxQfeEoPdjPeCp3UHwnEevACi34GCHcrwqsGRhB94ntyswc7py1Miv63WXFZbExBXn1pPHBZLwD6bvAJxdAzNgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TeyyvQ7jgvfL9m4MrFmZWrwLStGBaz6BXtgdKU9u6PdGPqdCQCs5dq4gzmUbCLNPnjk3LaZwMJnzJ89HtfTLy3z",
  "key1": "2NExBb3tXiouHctVixDo44eh3U68E1Sii61iujua7JFbL63qtodYJedqGjuJmjkAwT1xNpnoXcqhsv8HByY34PmY",
  "key2": "4qrHUTLWhwmZYbqqnLWPXE5mxYrx2zhZTHBgEcCBXaacYTrDj8rJ9MAEHt9munKSv5F1wyP5ywEMa9YJv34XBknx",
  "key3": "46YjH2aBzNiVndiZQ5dsTDLKeNkNfq8YTR9jjiQcZrfcLnuGcvARhcv8vbNPqtAWW1caUsLqhMm6aGjRazud8oiR",
  "key4": "386gDoaq6TDHnwNLN1sAirpEVh9BGQ1iBW1TLVZSsj6GTgsdkoTvnu52xjSjZEkeCwq1kg6LCCTu9P6gCR97tSqx",
  "key5": "2ZW2zfEp3aJ2jov6JicshUi7ZDP1MxnzHPkGRQjNRRidkk66Xu2sJ44rou8vCrUdwEFsSTEhy7GRwoByq9Dw28qk",
  "key6": "5GXs34L8MHe5MYB7HLSVwUcwaPhtX5jLfCkZfF1dzF7Xjgb6XYwi9uHYjve8b16kqtWphUJdujqeRqbD1eJdCbfF",
  "key7": "3mXuccHZoCrRcZnUoHfrZNXKY9EYm61HQxeCAqLVgWBDoCd3tH4gdYvTK3cxbwfGNtjoVJYu4SxrKH6DwJ7bHVXW",
  "key8": "vPgfM92B9c9CyFM79ovH1PmURSzoEfMksZjFyp2SDHz1rrAtvKTXNfcnZYWoGKkXziFRmw3YiEe5eZeemStcTR4",
  "key9": "3yzPXTBfiSY5No4vSRC8LN8hokcEXwBMBCHjcEMNFhKwRXaKqmhpc5RMY34Mqz8VtBKoUAkJ9RqHdPRvHSkEXM9R",
  "key10": "2ccB424UKotZcoptTkK4fwvDhR8Xy5wuzypResEZcnYVj4VCWXjbTR5tyi63WgNEaYHQpjXHggcmnZY2urKunQYo",
  "key11": "21j7e38M7JWqyAi2FrDbet9G48yjHqfFmFpA4rntEA1ZmnAM6tKKGVdD46pVRvAntKe5HQ77JpUzp1U4fT88F3tj",
  "key12": "cbhyA6cBJg5B1ddVMdZGL4u3heZJt4cpvJoCRQfWqZ1D65NjNM4DtgSrVgNFsAZFuwi2C3qBRz4XiU5dgCn1M7V",
  "key13": "1HZ7ByLEXrdsJ3MU9UDvs1EDp7tkLbPnWHtYPYkZeMLdR8cSbUQNf3wQjqcGo6RoGp7E6RTqboSHqSqHooJ6QmA",
  "key14": "jm15pq87NdyhFMqUg7pgdnoe8FidcUkSDbBUwpyU7hLvKyk13BLjtNdSf6ef48yJmtHHWzsaPvjtJSpk1MS1DZU",
  "key15": "5SoJbVvaYjQULvox48p6uTbsvWfUyjsVC8v714fL6UeDC4c21wECgpQCu7rwtNS6Rvvz2VZirWNPyQkHTwAsN5jY",
  "key16": "NhjMoJojzjMwr9woUEopFnBZXrzCNH3mjE2Wuv47YFeCE37nkEHVgTSeQv3bkYdgG6R3HcpaMiWk3MoR3LA7fp3",
  "key17": "23cqHhGGZ5F51nGifWj6JWyoRnWe2ZsPEMiQzRuWZhMRWNGGEE4cjGajwNLDQ9e3x6LRp9FTo7ykyJYoakwBP7XG",
  "key18": "257kuBNoZeaDHyMdRaZ8iht9m5zjBDen5Y2Tj2C2QWaewUnBgGzNhwKVnDaiwo6LtxzwYvUwLdtCuEWumQjVbTZz",
  "key19": "ymErLphQ7u46XytA9rYGZh5AvJ1Bdrcptr1iVRt3k4w2HiuqShpWqcN2MxKexC9HDttHgrtADijqy9PXuwLD8ep",
  "key20": "2RFk7SecG8BejU7smmShabNXd4LSyXJXiMh4tAqSvkGtj2bQYPMDjkUCrqHxWmb3MMWUpKv31gN46dWASjkF1Z7x",
  "key21": "3zK2S1wnDh4bUS7MQ7Bp3w1y7BgD8sZK2xDgAJwDhYd3VCrw9Paq7rmKvPMPYSawQ97KYB87UCeiwH7qRuW8quQX",
  "key22": "2B6YMTt2FWxUs7vXTzQF1ifHkKusdsnDsad9CMhujwBbbkhyc3d4jPyok4SN8b1uHEkr9cKWABVzc49GPvW1hXvD",
  "key23": "WrvdAmXM3Hr3sVmSucY68igTKiJj7RvYKeM1mjeViojNjcM3QG3RoSgJDeL4nCeNstjoPqabH9MKQipEEvABdZa",
  "key24": "21NNSdugPuKiSoyNq8rHTWMnXNSrhbroZL9YmsfSrbx5ram5rhvWpg1SG6oPdzU6Z6R7iMetNxxyQHniVfjHvDSN",
  "key25": "2ba57Z1uvTAsXRFmWLqgGUBYrFaZkapPn9yY4t5tNDqKacGLzs8NbxqUNPihxGJq3kB1NRwJKdtAL4yUQg296sr3",
  "key26": "2REz3WVxL5wxNHYUUjyMBoVsbVUssy2kUxfngJvKMvMwEYzaKYiieTqMNB71n7fJiWKgXRC9pZdv7yBJMBWR3YsP",
  "key27": "2uXWj6D5rQcSzsWYuMsUYWJTtj3b4DB7MaG4ERauTJMkXVTjJ5s4mVsbG6ApjWkWdfZ2k7KTtJFA3TF4S18UPY48",
  "key28": "3f3oFEYABNFNLCuuyMXfjNtTuBhiGV1C93TiYwUT9uCVUpPgLz8THV3BHCh2nNnQFucYHy8HfRCsQ5DZ2EhSL3SU",
  "key29": "3fSKr5o9HLFboBD3LUMD3FbTKaWzQxM7VrgRxdb2Nz3HGFkBX8mTsZcsxTNPQof6QhsnjhPT8kmgwUPdEXxzvArc",
  "key30": "2FRw2vs5JSTDYrfBr4y4fJHcmTpWEZgqufJFXAutPGdiPtmR9tHJpxc8vBBAajtfZF8xcVzXKbCSyPhMadqYDKkC",
  "key31": "YUwZ9sQppwV8RBVm4KNi2QixMk1raGV95N7AUUsfDvV8jDn9HhmxhasyQzprFqyvCx4qbZEoTfomwYYkhXs4PJq",
  "key32": "4rPBmd69a83GsvtKDzQW2UgfPzSsfAV453vzzUawBCNzVkNBDTHA6Wc7WnyMyX49XyVRyMzGK7M2Bw4nchjvY59U",
  "key33": "2zg4YkWLiC8A7E6C9QVZgjA1BfupHuegW1rxS28KvTH6buk7yu6z29QSkodiKyuxEnJVEVqWMVrxxu6P3cCDo6bC"
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
