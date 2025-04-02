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
    "2sQs1VDTohrLSk6wvBq4DWdkXD3DJmwPq168dvS58GtZ4QQuVcuMkZ4HgpY6SuLqJ3XavnUyzom6xJnCunaR9phg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1MChPJBqPvwRA4JiPqwubi4TZVhYQVW6kN9bs4Xop3hrMfUnrW8opSE5M15sB1fZPhHGcf8Ug1oR44hjqdnnS3",
  "key1": "5tGRZgDm7B9aK8Nx8ANwFH6rqHy3RsXhN8qMQCvys9q9cjyXjun29fqxUKM34wzwnZmnHpw38HHmZfN2qzXdyCfZ",
  "key2": "3v1ayCxTQGXfgPyFAV3eWGgfHk3P6NrUibhoYcvT5nHveym4EgFzgoUVTZJCvm8qa5VqmwUApvukpAoGzAPU52wc",
  "key3": "55zYUTTDpRfrcquYfJ9SZhML3srKhPAkJmPN1u5WQmghPZhj887yy9n1k7Kx5zAJLWboR7X4CrJZruVZjUTJtK88",
  "key4": "5YEpmbvNMWp5yCuot2ZdYruiE8rYCiHWabbAWPh5hhXXTLdJUEHZeDcH3i1JyigTCrJE8kkBeDhwFchJ4pDf58A",
  "key5": "2Bgm3bmp69Q9AcuJkFmrtD1FbCjBJbzpbXk1ZPUvPyh6vZzdSVRchzhZbsbUkCZop7pTi9VkASj4WU6bMF3Xw3Qb",
  "key6": "E268VyUzmGLp1JEJ7HEiTodC3zhj2hbRMECvHsPafqmUkiDQQVgXSCwAVDq1S1xMvPe6RLeFTtEq69Cvbsi3uK6",
  "key7": "3q4URoY3EjvJfLJKSBhcR3fK3U7L4SEjGNFoiQyH8p65ckB7d9hMzCRKyReoSLUY8nrGdBmb3q6qqNcrCcj1pCsx",
  "key8": "3vgr2odK3G6ckaKX4qzGMLvj2oEPnDRoieiGTDwaUNPi8kTvbC2KJihrgydSW4ag2as3wtY5syA8Q7GbtBxGrap6",
  "key9": "5Fiz55YJXYk8svXgk4yYSYAYYzi1voFqkaBCrkwde3DXfovBWPyNK4QXRYYgiAoZxuLzFYqfveQSTXyp38K36pWQ",
  "key10": "4y4kRQdbPpnXgXA6EA7R5jSNx9bidsX1chbJ2wnPShWUqjugVThx2ybsEFo7kPfHyTKY3kMGATTeGYcifwUpcakB",
  "key11": "5hRMMzL5p9cWYoQwCAmhYNdnvxjnDe4r8ZLcDJfyKZZiwaByLupcjmu9YqmuYKuE5bFWfE4HvA6xsxSVo7XRiumU",
  "key12": "5XpwbTzeRCZuUTPqGi2NLCckWre3Jd6GGuVGaWS5uXhgfpQRoM796A488fpbPKdpwFiHcHf8Aw63hnKvtJLyiu55",
  "key13": "5Ciy9kS5won9w7Zuxr6FPpoytPuuVFDfZ27d4xPnpLhQuiEpbqnGhkv4NTmo4fr152wsshEYvXjxXAhnwLaxQgnL",
  "key14": "28g8PLG1MHNpP65iBMbVyNt1T7ByNL7nwzK5YbsBJiBqP9yZEicZxPYokLWEaRLyZviQqsC4TqMJ8zLzCSBMaW1t",
  "key15": "23xz2eqT4GwxnyGDU4DfC5edLVfYdviYxNXzkXw6RvRbwasjgyEtceNDUgf2bUfo38ZZUybCxaU6uNdsY1cp9NBK",
  "key16": "3WajTmGtPK4op2PBWZJUVw7f3s8ZrqFzS93swRec1HBJ1h5WkvhwWV9p28X1HAtg8sr1E7AanSEtWcM19mo8rDwC",
  "key17": "3zFnpoAHNaYVNU317pH4Npi7gjaMtUAXnkS34UGm7kjJ1Sumt1bE4pd2bS1BXzSyHEKWuH7fUEj8bvKC5YnBtiWU",
  "key18": "2r73QBDWdVKQg9pNLTaAHXHrHXR3gy9z6a1SJ45nzPGHDkD5GpNqq3GuPtHiKe6xQ1bwYXq54z2EC8rD6WvtjWDZ",
  "key19": "5KhJurjKo5sS6dykzBuTBS9SB8v5S8Xd7kPG5aUEZN72rtWRcfFeGjXGuA2bunG24d5vPUCDkvRbvf4XSXknzKMH",
  "key20": "2bMwvK4o972AQ4NzEAEQKx3JmbExvW1uQ87Cm4UM5vzVxfzMyqjHxikeqDD937fvdKsqtGKHUVuUEcAntManmCWq",
  "key21": "58bTj44JYcCcurVZtwBsLMYrUnMMECfdhHe8y25MFxCQLQAEmqkeyviwm6SAWwBfvXXe1aCNeSZaEobDQPgx5xDg",
  "key22": "nGfAtrmUueK81sqgg8pKJpdQA7DnJYJcMNeN6kopAgb7mZeQiEzYaGhMrY2HmTwwjkWBnKKiy2JAGLWVq1Jret9",
  "key23": "3wafSVvxdcotiW79Hs8CwaFzEYNRzPbbu33Uuttoy94Xw6oDy8hDPBSj81F2K1YTBnaWuTDnykxijZREweQzn9cp",
  "key24": "36GCUBfhqtqzeY6xFirtYA4M5kpGnY1g1yLQtp7Bq1Ptwau52FJuEyzaDKUMnbjB9dvzRQZo3LdoXBCW5A5G8Y69",
  "key25": "4zW84fpbWaGvFT37kC9cKYp64joCXrcb6uoyH7TqBjw3Q1nj7HTW1RseKgjo95i1BzqR7f5Naxjmtr793T2W8yLt",
  "key26": "3GtrSbK1CGTLZQP7FrnxeuNDv17XVYzNcuMZRooqcRbrUDHHtaNtZmumHDLm4Yky9pzxhyWZri1A3tZ8A9M5oUGR",
  "key27": "4NZyjGESLyn6q861CoMryj8o3VsMasRBzURZzuVCCGaRiZYxjVTz2xofYUHZcgkbU5BdFZP6pkVLFiFkgqUtBCnD",
  "key28": "2uzvAhEXDWvVWGQsgLHysJEmb2hcHmh4twpd4HWPFU6USstHAWFK8bDeK5S9DBqdV6UUhxY6GDrenTDzj1RzMHw1",
  "key29": "5GGyJpqnfEJFYiX7BuCyNxBV9cVpueuytBJcDByM9EBd5PS6Yz4WJQzaFTH8Ak3c8zfEvcbbhLXg21pg5ria2peW",
  "key30": "2jtDWenxmPyXisxk1wAryS6cmWugZrgQa4sXLxdwfquChWfHysJvHQDuC1eRtwz4Q7yoffqv2QL81FWjnvuipYNS",
  "key31": "2piFVBKfGsNyof7HUyky37jJzZWNLkdHq2iRJ1nbtmq39mbFHLJh8HkvF8iSZQis547yvMPqqqJfSeAUZtgkF1mH",
  "key32": "4phwhj3nhfgsy3AM8d5RLLLk8rtcVaW8hEVcs1t5q1tDUNry71fA4wTJBeChRx2gXPNdVvmPavkvtZbzVKJHsXKS"
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
