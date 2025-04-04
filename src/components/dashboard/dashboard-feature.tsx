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
    "26vgtdgTr7DjhjfmQqkisKvjyJWsSKsBZs2M9gP3SGJzqGXX4u7Y4PdtpnzfY4k5r4j1NTnGpKjuUVYovxuJMGzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SWUnaf9u7FFPdo44PvvAguuwvsxjbBp6CiTVmk8aBDjUr1c3QR4PsPDjQofNWJ6VL9wxnEYoHVWpNq4ZefLCk",
  "key1": "4vuzoqi4CHQqxi3wR85PKhgN7wNk8x63pY5Xo2XbGEaQw1rX4pACnSKjp3BCYdR2kVuBbuAVUwYRCbao3JFHMVnD",
  "key2": "2D1KxcjJMbkHEPMQvu9Am6Tie3Pk45Y4Cthyc2Xx5qjmzbu1M2jTj7fqGS5DQfih3hsAGqRDQ67Q6dezHjzxzKTb",
  "key3": "3CzYfTmirHbbdt96gniPCLmhvrgy2TeGbYphjSxmaq5kZbewQAbNBCmbmEkNfubDpm6PLrRe2p1FxYKbnMgCarnX",
  "key4": "w41ZyDpDy7QV5tzH5R8GtDS2PGAPz5ffScZ4Y8d7dbXgT4gLsajZrbXe3FUcmiWUKesKbGGuNKGndNJiwpYYRXu",
  "key5": "3QrkE4LELr93E2GUYr1rK5ThKU9KH6vuuGvhsq7QVYaz1gNcjkfjMs1f1QXKoesfjfDQkC6caKXjFzbymQ9yN7UC",
  "key6": "3bCMu96KzCB7837xtvR21rcEC3E8TDWr1WwjREL1zo1CB6dpKieNf7KvwVyeE4Qbi6jvpT2CFhS525yHgx4Zuygz",
  "key7": "2DJWj1aYjdVQVhSv8iHxUE6HZS5hbVFVNoqFpuMZYQakGUqb2bMXHPBuF2sVBdYV936TR1tbafXXnsaVqS25Mrrb",
  "key8": "451HSj1zCRKhY9MqMkpx6NfGHSaWGecLENbWTaFLVBqz9EMycTP84MLb8RUYbS56z67zmXeLuuf23fzZMLVSNBFH",
  "key9": "4GaXHFSb7sJRYR4Ta81C4ckh1GFuqqnxapeN1LsrLggCPeBZ8KBpj91vh8NrRdi18mKpXAAPYoedtUrkKkjsr4e4",
  "key10": "3GTc8cyuPHysJ9koyLoaKo9mTUkxxJbhH9hvv8zEboZfY4CsR3Ljc2ouUh6SSZPy9eSKBuCbWNg1EhudAC845zzA",
  "key11": "3HowLwyZQCkKocdRfvXHVv2nTRKr4gQZmJUX8aVUvbbfReeQeqNnWkUagq4LZBQJdwB5GsPigGmJDB5jX68MHE3J",
  "key12": "3XSxnfQga9kKvYg59XLuvPpevc4ogn8GB8ZVxEiX2wedc4NMnifutZcisLuq3PpCKhJpdV3GA7fLrF63srramzRT",
  "key13": "ERZNttNgogiXAoqYLkmNdEKZkjXSTmUuJJGLaceq5NNVZaP1ZvCaEJJHZzi3gAMBXThEHFvTto7ait6E7EdzNeh",
  "key14": "5JUjxPM8iw1LmjF3cwAbyrtXNhZKKjS8GVURioMb4cDD4QN4a5PKPuBCnyK7zRZe3Y8QmQX7FWxG5sWuXYG35KvG",
  "key15": "3MNMmMggpNW9wtXXbyLqhQ7NvusSgHLkuX5N4WepWLxB6RYUJVaaekxaM6YUAp7pyWbc4bYcK8iCxvkmD7XwP1Ap",
  "key16": "JqDwhStbBZWucGtRs4WpDktMqLgy5VuP1b8wx2jTxAWCxs9jQDuzrzFiKiWWx1E85ie6VE6G2zqfJj3NmXEexAM",
  "key17": "5D2pGxUqRahCn4QZRLW12bET4diBiYTLRcCWG6jvzEHNMRde7dfghtk3BGJQJLANDLLVTi1TaqYwEfSVGmkEUGeg",
  "key18": "4EqxeNAxWWgiks8gMXY9xFyRtZHLirhpf6dApyvMEgheAjBNeDeo2UYrBBsc3rjQt74uX14QYtCEj44eSa6MygFq",
  "key19": "3ahgnkQ82EuHidThPS8ZquKpLe9DtP2kst3x5nZzzEtu4Vvo2ob87gMYqfewk83AzZxRziQhMcScoGASXPjTXFqz",
  "key20": "35MDkBS1GadRSPsiBgSu4JiP9ixjjGNyic3WC6T8jasM7hSfmEcP1EqG9VPGXMHbJjn3u71Px42xfm4igfrTPYWT",
  "key21": "5bx7dRAjxz91M4ZrSU9ab4o5M5mtcrZ936CqF1ZMe5w3weqC1TutsCtwNdkLb8ZF7HzoXWJJqjRxz8SHKa5jT48D",
  "key22": "4sRtXW5vvJ3suH8qTie6teZEa4FoGLBBcqMbafS3uGezpGvHwsKwZRJ3GNpPa6Xh3SaEBXBHe3r5HLx7xTbrgigL",
  "key23": "28FSEY9rKJm7pZhQbVC2zxvQ1QTDiCEbp9DnRR7C3U7cQsqNAbFuLL4r6Yi9v1ucfoHiHovyyUUqxxz97tzRxdvL",
  "key24": "4i6PSGrTR2WuT1VpSerSVZ6Dp5ogWDaxT9rs9wRMVMHmurUdQ6p3nGvEB9GRyJ7Cf1DhqfZEbRC3LZfTgf1SK3po",
  "key25": "QRCYQw2pXcxqNTGSivHHWZQsQ6YTHhmNuK1onfNEgvY4M6MCgn1ij9iUJBcsFafqjWUMk9TkJKqvZQJgnRbSgav",
  "key26": "24YvqZUDEA9dD9azhArWBv1bKT4cLLNQdTjYEuF9PZvxX1W23di1YTTTyBE1xLfx6oRLM5pQnkArFaVhxRMnekNE",
  "key27": "2xBSKBRKFAJRDjok56YXDS1ZwB38PrQJccpWAdpCDwkLvXmVNsvhBcyW8ba7y7S6yHNZ4QiVvoczGUq6AA3SgEGU"
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
