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
    "2YyPjQk9X71oTXVUPpVsrqQbFex5p2QCp2efT1yGwQb6sb6xCQZD6dW7kF9jcUdsvjE4x77e4enq3jL6SYsLc1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNEeh3w2xcVP3CFS2FzU9T49dMYJt2Nnt81u96nDATRggV3mXnzpC2Ncp2qQhNU1togaZZkqmamc6ACZicyWQAa",
  "key1": "3khjm5nNGMTMPdEGbZ4eJG61s9cZDZE2ZVjLzJjJZoz1opWPwDFHbQDRoCBfhmsttPLaWG8WJS5UuNFJrmh1kaZa",
  "key2": "3FdBeqiVix8UjT1Bmsj4YdBYWHrqmZisEf5EMtzX88WDRmhaBWk57sewvVvJPnwkqnLWuidpu3xpV1FyqDFGDZiL",
  "key3": "3Ptd7hrTtPyQsV5JSNiQerEhbDCyGzQGwWeVs49keDEZNZZ3Gj2SC1zhfrZnNzNdudXWmTXJscZL2LCMenFw23eB",
  "key4": "4q7X1ATVa3vzuEpR7wMXTqD3FC7kNA96wRk31FyBTMo2kXWdozwJexgi2LhKSiMDJEcwwGd5AJhF7qsTDUywRays",
  "key5": "4h3TMPp7DpVXj9btCYbqDjos9EXYKEL5P75pFvNPi7KXSzavQkBrE8Ux9UYja5WV8TYHQxzYLxmVFdbWPezsEeEL",
  "key6": "4LypW3bgietjWw3RY1Kg7YhBcvtBFuKmvY1GDT5Rvf52pCnRNiZBk1jjcku68562f8e1wSZGaqHJF5Mf6zJzooPE",
  "key7": "2mb1trPhKGKE1ZapxkYZpuW6jDzCF64W9FfWKje9pMaPB26KpTCLp1SNQPrtQi8KNaFLyKd4AJ3QPKTreG7bM5WV",
  "key8": "4GnUF3gxUpuk8QPN5rz5HE1MKWmZ74BuUPqbcuVUq7J8bddz6q7o6Ee5bywE6Mqkjz1NCmBs5YBQtDHxTVBpxNHB",
  "key9": "uomCqmvsJfw2GhvgfbHLyzBvuQ3fzM2RPWSsebbRi6CSRmGX4zFeVKkhWXZ3JGYpJTASEjarFqWtzKDzo69R1nu",
  "key10": "4C4SxT2etwuroNpvuhFHDTk4GpJHto7sLyiB7aijmYnv3t7Xu3B5UkJmcKMFt3TpRxSXKyvWbnVncvFiBvtV5iDz",
  "key11": "3cAAk73LTHAyYCPKn3rjJCRPfpmefFS4w31iR7RwdhgswgkB8ZgyEmjFg8BLzZR6CVbKPxiBt4PMUC5CDXqMXpkh",
  "key12": "46RZLpYUPfYoNKmf4FrUF7NcpdPRvYjgXEu5E86TqmyNQFBJqxjk6BtJRi9afy4sx3mpf8qZpcWDgMimN3HFAKm1",
  "key13": "mDzv7J4wXurCrCSrbWCcYwQRPcoGoeYW38oWZq4kVeuzN8nUq1dmq2BBPnuWmAF9XHCSv1VoTAchd2EzvoGwCsa",
  "key14": "3s9c4bPuEZy2ZowsNKeFujkoXvyKbGBUcNwBmLSQT3xKPjqefe35QmCEfuuvFyY4kF6YVC8qVDbCvohvQM1XoKyx",
  "key15": "3gsfoEjAJv76ERyEEda7RjkcrunMdVQ9iKBVnRJqW2ZTDCXieNCEyR438EjyVUH3cj73CWcjevpySeuwJaPaz2xs",
  "key16": "35XRN1SmuE7HY5xDHuT6cMwcrHDA5YgkMUq6jRDw88oGh3xgwXVBVXM9FrsgQ7YgpK1T5FN2Vekx3grqWpuHQPG2",
  "key17": "24B3qtBrE61bWGp8UJwfVHytni9Q9wkYD2Zi3GzLrm1Z2c7T4W1AGkjQDpxJHsQQ37H6Z7fdf2EBmcvGmF3JW77Y",
  "key18": "2LXfQp6XCxnzs1LrkyDzarFZ3E7e95ghDwDSNk6mfEb88NQA1S8e37PQu9qcoKeyLMEvcbBpb13g8aYBZianWLgj",
  "key19": "332rxTsudwtaF53W545hqmZFUGGdwpzJ37RHbXkUMqYryfvauhyT5idbDtvVz5Q6aguZrenvYmko4dVbM7rA6UEA",
  "key20": "2ybHbyTrbzLyJWpEmZpfECZpxBV26cYs1p43iphvz2HTUfhiqCwXhT5HWgQ9An773mtG4pCdhmRUFmWhCeyobfEL",
  "key21": "5JdUGU4bRGUF59mJnGgpJFWGS9JvUXHLFQZ3Q3NAnyfE7rz9tPTLMfqtFBZwB1MJJy82CE3ieqgQ6Z4grTPWxmiX",
  "key22": "2qjEVpjhtRKg28ckcfgJyEpYovuxCbKBKNkYJ2qhFd63ZEaYTKZS1E5MuXfFAveirXiqpjNEkH2pB2vuUbF81JYf",
  "key23": "37NSEz3ZAvGwGB3yznVU4keNasPDf1GUEwx4ZiqkRN8rKVVz9eNp3xhyrmJxogXeEH94rgbqeYzr83Hxh3n3VVNd",
  "key24": "4VPRJpoVsPHCTuNnQ3SjUujxsWxZRAzHkebcWMwNhmMC9A5Qs3ZhRW7ocoxaXQAxLHWtN5TB3NFdbdod1U4wpTEU",
  "key25": "21jxSSBfwCPSU7PBviPTKaCCMLKuw7xFHGWhDp3ZR1g6zsxXeNMeR2RrL8pr78ZqiNwFgcQXN7u4QnzRcoST4Zkj",
  "key26": "4sw1ajDAmSiDHncgqC6UAEp9YcwNyV6sM8rx8bosP1nMbwBU15RmMsBs63AfWTFsqBKJ1wWiNQkTkPxoBawYLiRr",
  "key27": "3oDPoEzhEBuTSbPv49FqKPvBfm1MSDBHg93SwXmT8GCXrLHshyRJUJdu2FPenwEndSmZzyn8EXBhMDcoJCRDnf26",
  "key28": "2nboWZHRsZgz5azqSLAewaeY4HfZzUCwWdjjWDsm2D9ShEiNxeSmSf1A2pCtpk21RqrKP1uAVBFoo8QvW9Q38Jwq"
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
