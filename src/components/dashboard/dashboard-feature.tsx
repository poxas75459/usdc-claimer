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
    "4fpVXGtc7R45foCJaNxnK9C93Ydb42bdGXT3QfFQSWmLQALp7et9L4ALNqtJwFJ2n8yqsbMDT4oKAdgnM8ciLv2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdUGJ5aoKf2cH3CHp9qKygVuPr9DeDHnekYwxDX3EK1kTvnvAeGnizmPFNyqA8Fj9nJLoi4BywShf77GRVFjvxC",
  "key1": "2drVEzG6pyt3xcvYPVAkELUXVVw8gNsHNrZDHhNZwrozU4rt6ft7xZiVppEW7vzEL5qdvoDSKpYuE19zQUYganaX",
  "key2": "3rYiRcaV3coWmSSw1KzJSBD5v1oJMDU6HpXSGww8kiRFft51Y4jsNj3ybyxMsjmYAapHPC785bRJ9w31bk9Uzb8n",
  "key3": "4DcGUym3tJ2nMXbKvf27GHeovNi8Xc6Hd7tUrDzaxT7nWdz8W6KneVvRr1AiaQwFe5WuSGpuUErohCRZYRXGQKZr",
  "key4": "5MRRyQrLUAvwbHFoBWuZpynAYcdzjDEk3Ye9amBTJ3st9X2V3fCko396xfKxmEhEZX9mqLMkyPMDcVYb6r1CpDEY",
  "key5": "3nvygenWofaDbFAgfNLU249fU3JTjPbbtbV9UT9RW4iXk8Rm5VfVqgU512ACe45UeF7Kobg6m6j9hxXGs7wJHddB",
  "key6": "4sRkX4S9NQib7LkBubWiRAAD3vVk1kLGckoZpht1VMtr2ozLmfcjWPkWG58oC2YvsVXcTRcrhNc4mw6BG3o39Yh2",
  "key7": "p6cM8wE19UYK5AUVbZUCwKS3NWixc9pWi3NTy16nViEyTs68j9qjzUrmori6sPKxET7iUe7DxjHEPN81bLLks9R",
  "key8": "5Evnks69dCXdQyfg8mzfsTWQ7UXF5ftyAZJeUeyd4vNCbWMw3LkzkHBZUunoisKNsDFrpp8Z7P5c2bCGWaXvVUCz",
  "key9": "4rApCJ7A3gE2Rfs45yL4qpUNFpcta5ZNSnCaH4QKFQFtaAcSyVFeiQXBWmJMF37UBi2YXpQ1CecESYk6m5nzPFuv",
  "key10": "475AFSsQ7cKpqnm3N9F8FmAgfPJXGCSLWpiEVVUPBrjcv35SQhKHtJedrGXysrzRiea1vaq78SHh1nYUqfkxPzF5",
  "key11": "4kwREPRUZqPjqi3kimXDzWjLC1Uu6RafToztg45guKmXS1n6C9tJVa5XjYaTt2rSrY9Kv3qYm9i3QKtEidNK24yt",
  "key12": "SvRK2za5PPs5SyXdkgctUqRGqWfjno42UNs6WF4dMj987n1JEMJ2inordhaoPGQuvQEXYST3qs5rvFa3doVLLAs",
  "key13": "4ouhQ1Safus7VJQWDnbunLjK1mx1AXpJHEkkm5mEM47mSSbrGw8QZMNJnNKndE1L6haXaCgff7Md3JvJsyhQViXS",
  "key14": "5s3WinoZWn1Lji6knnU4F4kxWJnCUAiBquaKRuG13Yufsdn3jJDiGWTGEtPRRGKyNRpkGPEobBQpUr2xo3w622YZ",
  "key15": "3PiFsEVubEphduS33J8CXCUbgj6CExPvA3qDA4zAWbx5ynekY41EuPcMGCgSQeyiTVqavuPTG212ccDXSR5PqLmK",
  "key16": "337UjYJdGYnDMc81V5Z32NoCsJtz2qmY4avK31Lc1kjG6dqocNshGbrDJGAnXny623ffXeJJWSTbDXnRwMtcV7N7",
  "key17": "3tV7x2y7xu2nTR7AjpAgAckoquPHo4PWRS5uyHpogyFwx3VtiXahYzV2CNtmtr6ceF87E74JhFiHVvwYbQfu6R6v",
  "key18": "4JEWG8KRGVAcCS7T5e5P3doBZJLoG4UvQfsaGkzz4hZ4iP43wxmCg9X16GYzvSoPnxxw3YEiAG6bKHPn9uTjwt2h",
  "key19": "pz6kr9tYJfiHZvPRZYNnsCmMzybyxYnPzGYxwQSrjTHazcoQu52BcWXCVzkvh27fcwPwcmFFeMqAUfzCbwdkomL",
  "key20": "2GkGED53QrzPFHxKnhshxfNSSTnGtSHbGZ8SnsDDV82ZTEhiHij93dcRBktz5caXGCnAUDjH5mt9z9kJK2AADsKc",
  "key21": "2nE6TTJLSr2AQGStpwrsejDCcYc1z4oVZH7RihCLHNJDC29NrHEjuoYRsV3Rw3rtSgHYSPUxgES5moEkPpXiqZjD",
  "key22": "4UVRAQaPegzhPWzFiciNQFRgqctg2idxwtDZjrNJi1TXtRwwPy9H6V4PwmQirWHNsRbmMbFWu8ubb5iAcurCRJno",
  "key23": "5B7jDsSBQe9tFH9hK5sun9qGvY1AtepbujRjoFMQ3hTYVNGzdkGao2cxE5cd6ing4c4yeMFFrSDWeiBFFnrQzvqs",
  "key24": "5QX9HxDZ2cfkkDuqzP8TDCCUJWjxg9rZ4XyQP4JY7w6TLkxh2G9ciY3C6NnyVDEdaAPivSVsqcwe8To3J3FPQe2c",
  "key25": "3s8qUsfwm6MfqrSVQn3WuzdeLBC6UtuPAuuyprEshaDdGUhBQbV965LQHPr9Uz34mz6twaPmR8oW7zoN61GJHdHo",
  "key26": "5Cqcgd9qxRVH9fZoAKKQMKrZustceU1KLMNTLKfrohKo47Kj1GpUAGSNcxdVZ2jUirQ4VhjgbMFSTUyV2ZZBzp5F",
  "key27": "26LgjjZFWbDwRfxgJ7WyqksP7TtFLXgnTGQRy7BNeSs5ayAVbjSSsEoxKjW9TFDq5jRVjY1veyzysq7SrVazQrab",
  "key28": "xyZhBMBZ24Fb38uv6j3wQswSa4Da4SBvgCz9ZBkCF1XswgLuQS9DEDg3Am5cqUYGBZGvRoL4K1fDqYn3RvkARWs",
  "key29": "dzYfVth38HHZKgkvVoqTmsrBrWUYJ7g4Vv9FZxAVp5wCYeLp3bA39rJ2jSLeoBneScUc58e4RqmYZaZhwaR1AR7",
  "key30": "44uABohjVgkg9eUttLSKJm6WoiL6dCi6E3rzKvNULztHC8b8rBZVo8tqYvU7DdTnPW9zThFo6WVD33zmKGg5Wrt6",
  "key31": "574CDdgYFCKS9bmwha2kHX2tEKfpfFjmm3Q7wni6frLWuGYWaz89QpGDs7qkSRhjsx27nvsCwG3ExSKpt4q3U1kw"
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
