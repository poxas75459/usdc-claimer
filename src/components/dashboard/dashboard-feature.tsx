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
    "3YBJ275BHnsJQXrNXRHZ5SUpmuQnv7zDDayHvEPaGnbzkfVeYEW9L12qFgQSTaok15WtVoAhp9qqNcaYkabmgGwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9b4dMnpUQbYCQKLFrHTt9QgBCfB6dmUgETjSFJb4gSLQbkhbDrNjufSY1tUGd587bg7g8vS7ko4CsBv242UBug",
  "key1": "2hps4tHMM1c9DB4L9vyw4VVDkrFfBnYK8ZRHvJ6bgW33UyeTBDC5z2BWGemAi4U5LU2SqyB8S3mAfj8jwRGG8tc4",
  "key2": "3NUytSufv7q1J56wsD8CkuxgqCGpNMx429bSst33R2AVReKgZPjXWAWHhDx2SasM3uU6huyZUckHsGseUC9oAaZw",
  "key3": "3TCjvYT5SNYoZGtUJHFLUhj5PHVuQSfT5cNyDc4J2FEN7Rusi8K2CM48XyunLQVvj9RcVbApWpHpT9qaC66hqNrD",
  "key4": "352dcXE6KLM1sSoenCz4XhFuoGhkNK3NbudgCN3QpLqCG9qduxHctDQBfToVFdepHFXNzir2Do5FThG7EXiAy1tZ",
  "key5": "4fMkZ9yJMr4rkMp6f1AWG44QFzPphDVc88u1a8ojmERvpRhbRiZzEeXfGsX44wLcyFeiBcCTAHanpGZknkyNQvay",
  "key6": "35nHstNzQZakBZjNg21UT8QXyKm2rQr4LVXKy8z4pCZpr3krhB9511nC4t7j3YZMwGWVCdgAMrnNEGMEs9HNGE3W",
  "key7": "55bz1DurL4jDPiejoAsowVkfTnRZr3H12j24JnXfohXGY85k8vVvsWgLP3QgiEa14KP2jmTKxhFYu3pVAn1L5QWP",
  "key8": "4zAfxGxRSam4K4qahVYfxj9EnRXNEtmqkGRYrw6jSxdjHoF2eCD3K8eJ3FtYijUNB7zGzwNS6P7rY5vzezVTz1BQ",
  "key9": "QB8swoWRjSN3WsEDF93HReyRJLsPQx9KXxoavE7ExXLT5du1ywehYCyQKyy9vw2Kd5hscZnFWvEv3CW3HRGu6V8",
  "key10": "DDuVSgg7SDqMFcHn4QDW8suXLYy3GPSDMhV791Axp1SXKFt8D3bAmjoifKNsyGsTLjB7cxGsvHRHuS5hM4L1fcq",
  "key11": "33x2hWWTBEUhBten86TbrAx5EUkqw4V35ge67pdEeR7hLveuy1Yt6L4p8f5ZJNBpLVzcuRHdEBeZfQGW8jzq4Zj8",
  "key12": "4XJnNKopcn5s78AwWN45FpndivsgMqBiQEEvWDvruCege7RtBqiBWiqF1RsZPMvzLfaKEGeNPToyzc6VSYjiV9rq",
  "key13": "41XNkygGxfNPCQq4k4CQj2RsqorZvFWqxRMxmQXCAfMseVRr2PFZ1oFbJX1hZ1mUnyZJHpGWupBdgN2H3gpptjg9",
  "key14": "5MZ27KmwME1K3mr9r9Xc6TCDsu6LDXEjPYgFn4MD2CA4bMfqR65LpAoJEPTMDvUuwRg4iwGZPVwyjL71MHcX9WdU",
  "key15": "3zbWEykyKnuYDrgypugF1rP3zZg2uHv7RBVo6XKK6XDcar7tJi6xBpCQA1MkdDxo73QzxC9ArqCnsTQcHvXS2FN1",
  "key16": "3vjrK7Ui1cz1ayQwhyQkeZkVor6CjBzEFeonoBFG8HSc9JC5YpUJnnZ5L7humsMZAdLQ54bAE81YbzgozJgasRha",
  "key17": "3XQzSCavzKnrbftSy9AeVpkQ2XmxH4K2fRF1R9YeNfcybPNwa6D8qV9e56WBY3o5wT2K2aLTKFEq9WR6Tf75dfTE",
  "key18": "2S3TAiYxGhhpimJaFNdQjESLi3zGAuXQAktUNH3eetWGPr6cqtKYFVNFD7narBi2UFaHZgKpQ1WS2LWn4jc1vLL9",
  "key19": "6mL3EeBEM6CNeWbgCtD38r7McECC5jqDQfV6dNohTWax8cgmZXJXPVNhi4FnaCSGTb1nAKH773dLN7xseGHGy2B",
  "key20": "3Lt2V6PhQQarnDjwxhsRssuKDHaeUtu6SgoZrMt3RfYdaMFosYPC1CRaBS4WyfutQaCN6fQDqVvK3c3y2NG222q7",
  "key21": "5X5hMwfkT128otY5kYkzeZkdJc88dqVmpc7UG4uq7ThjSXYWRCQYtbaFivNpgPnXk8n9cCAaFhEF9fL51LayuMA5",
  "key22": "5Hh1jCgzHPA3zq3AwLFmYRnUx3D2E8322pwCHd4Yiq7SDpUs5tF6uJSvEE47ZhJ4MJ5rUxrpJ2eebsrM1YzR1MUm",
  "key23": "AmpyZ2uCtB32XZVT1Buegt1pniRWyyFUnEkmcSYeDrbQyXfsD9DBbPkpCbYx2iweJAAdiWWwzAXhuCk2iQFVGyA",
  "key24": "4y8vsW1f7Td3kN1RT35wRQa7rJibzb6emD1vSuCWRCdZp7uV4wDeLVASNPYKcjxCwuzjTPVgLarameeuEQn9wSKx",
  "key25": "3LQf5ZpkdNj3GrLDxSq1qpngv3QZqUB955P8xWDYGYTr1cAcLaxN4CuG3An8YpPM41oF4sCryLa3jWuYf9zZzuzZ",
  "key26": "65crDavngL499PD5EFhqT1Sum9g52YQaHodwDcaQw4bKxWSbjFWs7NV8jU92GsJyC7uMXMdC8d1cRT882KpcnuUX",
  "key27": "42E6rzxjHxuNeXJzx5kKoCYFknVgpUCjyRTFTfZUe2Nfq28jC4QMvUGGyN5RKtXJYJwsHLBZvNskWKKiZvMi5hg9",
  "key28": "44HytzP1U8JURF12K5wwdcYCAXbNakoJyVAHwFdnaS77DV7MzsMYU8wjdRjGb752KrVqTdWDe1bLw83dbkeyD5A4",
  "key29": "3TcaSS4z2LSoz9tS166KHjrEaRNTwXzV3csxGtDYqyWbUAAZx9CxUiFG1QGrKou3i1JM61cHhj95r4J4maq5nToM",
  "key30": "4kjysCheTYAer5GppmQDWf34EZvXpLRkVWw6bV2P4noo4JnpTz6jtXBPoKNYsogki44QKphM737gD99kEHPqRL6b",
  "key31": "osa5Ceaa1dHGCb9RM7rUu2NVaZGBqMy5jqsGY2Zrn5RcpMoFGHRPVCFgtovDsX431jviN9e9ba6XYj9RjJGKocR",
  "key32": "5aDzkynX7aLotcJL35gsKTwBZMwdj4eiMvbE2ZDn75xFZWLgbTj2AqfHGnNVA1mE4mTmWBaS8jQ5PSA8wg4ZDxvh"
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
