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
    "2T6RvoqH3AwQ5fLk48SXZAHivNDB3vEuQsVbaeTLQmngFpC7RCvzEeTpzXCU62gDAW2paf3Yc7cwVfJNiP1kBz4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dj8MzRHroJFpoZAMNBPXdB9YKL28n7ywfcikmJUotTD5nkmcqxwwRBBptG2K6CSAs42268NK1rohDCKr1B4hgqH",
  "key1": "2XxVSXXvThgVb7bK8gWkFUFb6SmGJwxLpLagQJ8q7w2nmnGVWmJcjxcm6wRqcbDsF2WDf8cnu9x9wyVtmLXaJxxP",
  "key2": "4V68YJMs2FPsdMi2fk2RzF15eX4bzzs18BTNDc9U7t2ZWFkh6xuVCkRHcFp1QdNmwc7DXtrgderz2qeL5gMQ3yt",
  "key3": "5pr31NoQ2fE6fSgffsHkUr5jg2ig6ncUsAzAfQzz8T8aQPcEh4QvxpaFYupTMDacvoxBBth8vqKS1gsncQozTG4L",
  "key4": "48ZWK96sTBSe3hp2TFPjjpuy5GMSFEuVb3m3LpJveUR7RTEgwVrZgKgpuy2rAS1jvHZ2urK3rYqUzFpt4EMNtPim",
  "key5": "5BRNKLwQmRc8ajCfZ152br2FGebJ7mR8GS2B5AgzfgngwQFZ9ACZar37AGNEwEtk1EN2kfNvk1ffTwUuiVxs3auv",
  "key6": "3DgKyQC94JtX7bBKoRuPU58VVtPErji6a1A2jWg5PYRqEuVxDTbFH3XshccEPZ13FYSyF2yUNuqVjP9rMq2y2vNV",
  "key7": "3NTPzJ5PAaDEVgmuupbqGmmmNzQ961K7MonV46LnAGgUF2VZpikePVeniCXwTeaaW7Rt4v5TzayRtei71PzXt8nY",
  "key8": "ACn6minX7eqLW25pz1T2n3we9KH4pEbo3gtzHTv945LB8gMroygMjh5fKzqFiEiSSn2YZj9QmEE7RBhxtkxnMM1",
  "key9": "2QhXrA1VSd4XsBjMt3w4jXJyAjsQQcynLwXJ1WaW2Xr1aaesx8nkCSDsLHv1n5NZY2Q9DbAwxB2eETKnfSZHx9ju",
  "key10": "4RgvwNgZmZAqRFHgpuyG6JiJnWDcfk6a79HNq3vg6QNeFsKjL6GVpHHpQ5ScRn2V2VYgK3P5WhFpeZN117RAhjuj",
  "key11": "3ZWmqZohg9xqDhYDjM6QL4MvDQ3dsH3KLxZr9sjUBU4LrszGsUEbZYmMqUTLoaRVsccLtvdwuwtdzNoiashnnSuR",
  "key12": "yndaYfkS3dTHXUft8TewSw3oXpcGUKu2fFGe3442Fe4w3HJFCFZxQ4nrdTAGzdDzSugKo365tNxHg4mSinhWoDe",
  "key13": "25G26Y4q6474njGJgVqzaFhYsKYQyFVB3mF8CUMR3GZ7aZVTfguvMtnfT4k4z8gBS5MVJTEXm4ZNNyqKsuyFzzuw",
  "key14": "3AwePYcmkZH7pqHMA4dQ5NivPkJyDigHrm6sxZv8ssVckHL5FypauKXAwjBgTBA9cP9rZjzLwX4iV6oXtwHV9T3D",
  "key15": "3M8RjanD5MtzMBf7VEvMCQ9SdVcKMziKJDcvqN67HykXFy3rJo6JSTZhyfnkdz26q9phn77zarmTqAdkvSDF6L5P",
  "key16": "5N2d4N1XTsUaCvVeRYZg7TMKRx3ZdWnRhzBNwHRF5SBeHtbiPtT8Z5xpRUT6Gjttrvv7wy9Nmqdjh48tNiJfanGe",
  "key17": "4qX7w28xc3xrBLtpaxu8yaiALtuhNTSaUhx4U4aRLfvdCMubWcXuBoNM3ZeuRKaZZ7z6nxHwyH1uTP56u1qvBdXe",
  "key18": "uf9QdsFmLZvio6o1MG2pLKCcYJtGwGLJUaQDc2wHNkScbYezbHsz31qbBjMqJ5FQRag2JbghGy89BtuGJNTMgaK",
  "key19": "4L7Ar4bU5onYEBEYXmG967Xwph1KJ2hWvLz2V3z6zir3e6yHcPSgMvtiqk4imkmnf38EtB5iABCjt5d2XYDTnkEr",
  "key20": "3dHANrc9BrzUotxeMJSwaEdJ52aCdw2hfcQ7s6mmyhhUTu5JAwh8gZDh9Qyx1EavCbzXZnSEzWFxcRp1u545FdkQ",
  "key21": "62DoMfDDKFC1doz6TrX7E9a5AmQBQZeEyMKXn4W7GdYTjzgvqAZ776c4DQ22onpPDnUSwMXGG6WhBhqYTYmYpoYU",
  "key22": "5K1e5XogPZb15xHPHVefVaJuCP9iDcu4jb22e7Fm8CRzHuzGqNEUfBZZSpZCJAcKu1qo4ygLjqhsv9iKkSkr2FEU",
  "key23": "3DNxBt1YA7Qw6yjxD7yh2fhcrBRwbKXbb5w942Hpb1ZcPWY2LNY2mrJX7a8uA8aVqm5ezSR4BUTDE2fZ9Kqu7W7T",
  "key24": "46tNGfe6wuc8qbQpmXhEVsHcD8LvwmF27eknBv4hEN7onDYDr4ypXTw6DamPDzkovceTQ84Tu7RHHjtSSC1fAXGk",
  "key25": "2PjvcWWdnTrRNL44KuWUGd7hZ7X41Vf2iXTPNekuHjSbLwLmCDXF2PHByLSxTxy2ZaLZzUmnmuqrabqtuAV4w6SV",
  "key26": "8uN9aS52cwF6gG5yykSNg8X5kLjVNK5qneZEKvRU3PCNE9rnatyBJLQ3jRFYRMTmKRWCbsQa13Vsq1RtPiCHfjV",
  "key27": "3UYKtCYh3uujna1TznwpVuzSJSXDGrAHNaiUjnDBtvnXFt9cZnz5xkR3U2qZ3qQPQ3eNy63gdwHiGVaUXBBd9PtD",
  "key28": "4XhR5pWDfmqovhVJUtHGygiZECVEJygguZkJ3CAZUupooZfdW7j1uKfiCanXXyv8rqSVezGPFnbNGXqeEdcctCjd",
  "key29": "5oJGASkruY7KsAdue65mgGVRrg2MYnsURFDiSxnRFMVHFXF2FQM5HAcWJRUnoVNQRXyDmAidfwtDLNimz8UC2tko",
  "key30": "7w4BdJs8uYVbWPdTux9FV1LeCsr91zBUpnuDJ8wmY78txRnQEAT1VbW9C5zgqFsRfQ1PxWqenLWvCjNKHqtmmR7",
  "key31": "4haXB3sNfQCQTwLaHmXpmvgMrmfdQnMEw1tegi7i9MQFNZbYq5wdsJ3ZBfpSDTQEjbUitWUMsRfdjHCMUYjTmq91",
  "key32": "2U8FpK3FkPrYHqMbyGEfFhEWMPRXphAJzkKE4emqFYKut4evu3p62rYwW1yMaDfKzBR1JekoHhbVB2GacRD1tnvj",
  "key33": "4uUTc32jETM6sUsggEdpjTPTN8PN6ZR3Ag88M1KS51BQLKtm3tdSahjwenSPKkJxxa6yDy8DaVMfHiKK5Y1pCGiB",
  "key34": "ibCfefyXS3uQNWkJvKNaNzc9vKA3E8HMZEr2aXnLjwKvpZGaazkvxhE7kG664wD1RuPVWEbMU176oZmFmBo6TVP"
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
