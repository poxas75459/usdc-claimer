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
    "3hPBhAfQdiw27xESeSaUhgydoaJ6Ss1qJzD7T4SfHGr5GcVmUeWaRPMGMFUtsxe1E8ZRQBFunwJKkLCq2TrmRzWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62s49NfANsm51U9MHwdLU4J6Fda9kBjtutkd1Bk8fwEq9weZYLgcn8VySf8mi9oAwJ8YzNGWbCMXygb7u89mKfqh",
  "key1": "3R72XgQSbD5iLr8dfC2CbbbrkfdheEnTxpoNS2mP21hQs7cdyiBfMCkGUovFPa6P779RPetZqbBLZypgMBfCxs79",
  "key2": "357NqpvHC5qx3EfgksmS7UMyhZG9BBMhhfxxFTf8ywCzoABR9R75DazpsYwRRcVmZBw9KUjbeeiHv6ABkibsqCGG",
  "key3": "3HTzAfNDNqKeA8sLuk3wbWZZqQfernRyUd1F96zXZ2WpBR6vtQAgVAQFggLiVeQEXmthNxLJkCV5BfhTbK4teqcr",
  "key4": "vC72Q98QEYSSX5VLiqox5koo9kXdqgd8eyCbMSusvZNhA9W6DpYoNWAe9L2evMv5UTpyGB3gncjBTJ9TZoc1Yx3",
  "key5": "497j75N9PLy4dpYo6GCDHqhtzratFUERh1mfpsfnVa9kWAQvaoPWp7jogLLsqTpy4Snec7JCVVk99N62w6SRrLqe",
  "key6": "5MKJjwfJscnEMffWpiJcGEFb5k6jDChttFCmfVQmdw5zZEL2X74YPpqYzGa1A8qnafyg47Ffay2hw7nMEbcn96vs",
  "key7": "onf6QbdVVqM1ZPRKK4241zGa4pRiZQShdQAHx2RjeDf8DupXc8ffnZmZkhNi6Gepho5WB5LKuuuqjDofNAxjZoT",
  "key8": "ihPQRdxrS5eGFvRr42wP6m5DzsNQid5YPaw8jqbXDP2YbzbkCAaJfn37nnRZjEjPcZPPLfTpRCbNccwey9AVX2z",
  "key9": "5BqVRraq2Rbq2z2hdj8QZgin9ZbMG5sEPQq8Cdo58jZZzB4USctsTGdkrHK7wn3hX95sentzmoRc7J2VjgKq5zZP",
  "key10": "4yu3pGBrdaStZwCLRMLun6XNko6XEXKEaKc8Rnw13VcUS1k6GnaeUNrU2hMZvPrCs15TR7qGKkLzVD8XgaVRZTwZ",
  "key11": "2LioM5CMUbojAxQEuMSauaSCG7PuJVNoFfqDVhuNSa7dYXC6Pdoi7SeYmimRtQPLMXdp2t7ZDK6A4ngKi4chm9Sb",
  "key12": "bApZL9TwHzzZnxtmYM4w5uJw7zDrXbtPu12ENSsFpHoy6duNjLiaGPjvKTe927rxGJn7GNVX6JQ81eZjeX1bPwg",
  "key13": "4egxA4LW6pP8JpWCxTZWvknzm82Q51Jv2Z9EHuirWRfGLLvRq5xazRaEs6ghpPBeaiUubLGSAVffpspaaEQKMZ3X",
  "key14": "2wm25CZ6MkkAHYRQT1TzwyNp3MARJbBcLu7Q71LwTWv3ZGN8oLtmmJgTsZP9RXZbrfrLJqDfQkNLh3rNzdmE2cKQ",
  "key15": "HNzdPbDABG2cz4Eep73hyneM2k2DNcsmRTfUnud3FX4k8MPv3DMCpVhkDbGHyYazoaLvqskZoiAU2YMYdT1YkG2",
  "key16": "3gizW97NYbWVgXaGX5wT1Kzf8mdeM5dJA7JpM3MsQgu1DesaFizBepggYN2JM7Yx2qDsFDffumVkQkaRQBkVAPsM",
  "key17": "5eMNHYmfy2QEewNWdvjMeDYRtCT3CARKFdZ7A1p6B5t9t13ovBuKRioNA8QxPh4wsCXoT5NZg5VmLhUo4eR1eeX3",
  "key18": "RqdAeRePv51TaQAwWWk4rQJ8cd5gr8AExfqwkWAw5RRD8oXmMb52x2jmT9pKAXZSzvJQa3eoG8TW7R5mXV9yAwb",
  "key19": "KezKhrEHbXaJySosDdDDPJY1XbB4fcgwbyuypJRnzzfZudDsZg9jXbczgLqjsuqUF2oyxfsgyNQvJ6jbsqsVhBx",
  "key20": "5cFshExaqUv1M81rM51oQb7ByHC8Vcph81mVDYLKtcEFfe1LqyZ7PxwBYDRSpJoPTviS5tMsq3Ytjqt4f6Zrxtkb",
  "key21": "4SLqTuGw2BjYLSCHaKtrpGvNE9zGSPB8C4pLgRqGd3TBeCJdZ5So9tkyRsYKRCGbZDpV9izH4McAQLd5tuygKteY",
  "key22": "5Xas7L9P7PamSerdEx5UyEEXqS8wHGJfdmCNF8YHrQ6LwCp4N9AeZ5RqviqWq3VWtQkFxqdUSbcLEW4FCdDv6z5d",
  "key23": "5Nx4G7spHUfnnm1cJYvLyhtEoFc6gKzsiKWAUEKPe1M94FsP9BLY3nb4d5ho9KbVrWncQS2rszvdJWk4NrNXCsS3",
  "key24": "5g76uc98iry6r7TFsXfctYnqSAnUKd9yeJujz6bvFjt3C8rhLcgkXSksFxfNW6rqrNnVCVbDyZB2MsKqMw1jDAGX",
  "key25": "3myusmTRYngHVGbsqE72kbYVLWETw33JtMacQUUb84hhFEoaS8jEysG6AVWNXjLh5JaJ3uCbzRnXqKiVUNPmgpuS"
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
