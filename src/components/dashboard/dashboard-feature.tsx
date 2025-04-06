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
    "otRYKvcnJBDJ9mzpYrx8SwxP5K3jhUETBp4SxofFQSewV5247ixFymZR8zMwks59gcRHraEp6EzvaeQtDiszc6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqxVw7Egjjys5427qGKcJ1CcniYUDcENAefzzUHdFR6JB5iULUk7Je92Zahm8oJGxw8tX7XCFAmEap24RDPy8bj",
  "key1": "9spyZyKX4qrPJ2VAhPbzuLh2iwumAyHxNmoTnFKRipCaipQ1MM4iYXdquBgwusG4BwVcWJSfk1PqkvsJzYRHrKW",
  "key2": "39ha7cC4SXBmzKUFGzXXF8hBaiGvJ1t3kyNbE4xZtbsrnTtnEFtFYwVXz7NTvp9ekArREcAmg1ncNWwRLufNyZQB",
  "key3": "5KCeX3y61Ms61BwVQHFzszSxKnnp3tGrsHSzs32Hixaxj4vgZgH8sVaBQUbUb5YaDHHmSbtRAA9TfBrAZpTUXppg",
  "key4": "49SVQrKBGgKtfiwfPKqJWXTYZqU69c8C1TPeQ5TtrxbZu2sLk3K6ASd7vZyrBUyfLrbPse3gUNF5tPuQkYYPCAP7",
  "key5": "2Ni2mfmCNNHwnVMcYwqQAuEiutnBRAQ6PUkg2fmTkPyBbpvyTkGYpLmUUjGV25Wv7f5RZ3Njc6v6jZSNnmGFGqs5",
  "key6": "QcxgVuNXTb4LT7amPNxsT5Va2rHFR88shHvoB1Y6ZsMb7skwdjQQ1a12JfLZ1Y8iBZMa1KH6SbWHFSXY52owByu",
  "key7": "2LycbtowLa3aVqqZCUzdHWx2J4vGfLJ7JdYbCnKCuctR3E9eAru5na84MZjnLaQ4JepXVkg9ogZqsK411ekF46CW",
  "key8": "2rX9TXAp3Xsj3VypfQoSA1ybEA3pz8UaNRH4T5A5r4Bgknj7K41fMZXAv4HLTUDecqZra9nS6F8fGzE6MciRqxMy",
  "key9": "34HLUX4xQBoiSo66q16ecNm338D7xjGao39e54dWgR3wA98PmE2mkxnjD9gWHYv9RWd161k1eU5L3cSmRZowKpfh",
  "key10": "41eUaaaMFNkk6rNunRo2UovxBwvrk8GD63bcx6E9XbMFaWw5w5TYQwpU12TQ2x2VnLaJuec9eWYU545QPL42i9mo",
  "key11": "4qNhho5vH9pjJYUWQVDynSb7hVbkYTuRe2rfQtb7DqribcVBz6ZJBJitF3qbDhyeXqsU413zNCnVTD2enxBq3x3W",
  "key12": "2eoFjFj27XY9TogTCuowvVzQ24xHF1NxepyRwmYTH6g6DBy4Xc16kgezNnBUk533AyyiPNJnnzjpLXtvkQkeB9T",
  "key13": "3okjsM6Cj7pTbmWfitCnJNbXxJV8S1CJiqFLLQHvuCRtMFmbHT7F7pBQ3bsxBWJtRVuTJN9G3C7VVw84HaQDgywP",
  "key14": "3rMymuUwS2bu4L2wDWM9addg9t4GZMyuKdHt2WqQSQPfhW7gS6mDTmbjSAAoKFVxa7MuGesoucgZJ2TfzbyJK5aX",
  "key15": "5muDtcgivrmEmvBUV77pTdzaeihouDX2zPjuQPMfcQb7Cj9WS6f4pPxWgLLtzs6p9vtcDcgYm4gr2jChEW7gNH9v",
  "key16": "4YCb6w9o5Wag9wH1p64NqHxhoqb1DzTnNZ7SfSUHxugT3ndr6XCkoyX7LE4N2TbBQDUEJXoMFkNimucB3nLq1Sy5",
  "key17": "yaKJUNU4pJeWWpGz2UZJnXh5u2Tc3do83hbEoFk41sX8mg3ExmxE7gjHCsnoFM1FvaPrxUUN6NBTY1EHsk3YLYQ",
  "key18": "PA9zxWKXd4ivG39e8xBRRz6U9kqc32dsyUjGUzEks2u9TSPtg35xfQTHwE5ZiSteZBWFyuMkexeEmgahxMXJNQo",
  "key19": "2vqXzdmp5E3XjA68Sg6WpcciP7sKbS6QQeo7RaFhZMSsYgz7KUjWZEFmvpXhctZPL1jvpxdH4rbHA8ppQTZxqyiz",
  "key20": "KGJc3uUXQS8JJmjiEr9h3veck6CPyLPbANwFgCUM1pJPVwpc38PoqXUEDikae1muv997ZM817V1F8z6rjwxb4MQ",
  "key21": "5UxoRNX84fPjKiwmuf36xnPVWtEWbBczk2LAn7y7Y1qEMXe4a1n1r6KbTMaotpyJixzy8HWCxZiCGUe1kkaX2osW",
  "key22": "4xBDyJiwyUb13X7RKMsr1p1Y8nXAdWnsXAXnRXeJe6dXZfSHZVXQN2p23x7VaNDaoLD1mV4iJbQRvwRb2cmGbgjr",
  "key23": "4Pun1qY2GSrfagpsCSiJDmBeuHXX15FcYsRJRK9UsRqwyGaTwPUMhra6HKXVwfYPb5HQNZXjuptJ1acPpSsLfgvW",
  "key24": "KxKtAo3oVLj3x8GdPCG2G8LSTHy5d8Zp3TZZVTJYcv8pq6ixW8gsbk66L9NbH9w3PhAN2Q6Zn9bdx1UPaWnrS9q",
  "key25": "3ccnfYSqkYAQSy1CMW6Py7FN4hisxFMAEpUt53BdGhA5J8M77r1TYQsW8kJx63zACUuXhcZVd2pY7nWD5qVPjXtm",
  "key26": "47KhNBj2mgv3v5oKHNgTeddmxrzPxsM1n8vuSyQ4AudbYoyumWTaMaQXu4T3usHmkr6CyPNeNwMzTyVKfkBkBpq7",
  "key27": "XEEKvFDvkv9APHKXZL5U9BB8BkBdgqK8SyagV4zW4817692nbNTb7d8pZUmRBbSug2BirY8GpHNZTgcrBCPiDHP",
  "key28": "2hJDnxHFX4oAJsNoycezFLXnk5AeJrmNRPrbqP72t8itjxJ25pUAetKcdMGeyD124hNP7dcVEuo3Gpikv5ZptHQj",
  "key29": "5QnKQqeEbeYyaei9qEpgpRRaRnLm2stExyRYivxMQcQFgL7BWdk76B1kLBEWdqcEV184wPYGKzGcDUVV2DUSDrEj",
  "key30": "4gFEFDP6x1eyrF4qofWpezqCoKxhFbB8GVZXTj7uADWqL74NAWUPn9N2aqJjmqhPq1Vsdr1KnfZSHPW3r1W3KNMX",
  "key31": "2YuMr7JHt7KuucxER3f1cwWh2cXmzTq4vVWXuquyTBZVmcN8A9sr5EJ5j4xHhUkEfxaiQwjurbN6NqNRTdzD2QjK"
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
