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
    "3iHzdJyWGbVfqL4z2THDQt8dKSrFeXm3qQroZxEZDRyuSC6VS5YXF431jtq9kebcTYCeqg5mYzyv4otbFTTW3UZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C33LgUwecWHWcZ4tjaQcz9oFCvirLHC7aVE4L1mLayWcW3bUGwg9KaWEWsh3ieyty6CNcJkVrVyja8tovdmJFXC",
  "key1": "2veZ6C3VG8VGRWBvRnYP7R3NLA2iZmdFXyt6VnM4qivLr9sb1zfC16yk7nzogDC2w6DkRusQwwf9SXRauDhNMUi9",
  "key2": "4VRryP8HXsv558SQCWEkEyHL9P6HMFcNGoqKMGfc3keaZvpprYB71AnYhNvMxfbmeV5Y1YTuyftaTCgSLsGBSy7s",
  "key3": "524tAtRCJq1Xp4sbhdPZK4oBtiauZuXZz8hbmJxJaEQNnxebeyQZd1f8gCR45V4zU7rhGKyXjmWTEaDeff2qNTcr",
  "key4": "5S31EJaPxH1ETeGXoiGSSZYnLSbvBcYaQvzKhvdAcXgmQvHTAcEUdkzhjyrodzHzMAgtPvzskqnuf9mdWae25UY5",
  "key5": "5kZ7QHYU4A2pwHBB8gWbr4zr2GMWxLsPhUMRJbZzJZaTce3vrn1n92cSxN4vB8RBdjSqWxgyYHT1YkTydfQSxoNw",
  "key6": "5qMPRDE6tFsxkuzaMTx6kR5Ys2mDkjqoj76zhrRbkJFq2svpQVYitw6XN9n5KJHWMsojPmQpYV1W9EZKGxcEBDre",
  "key7": "4UZgpry6W5jRzqeyL1LfP1Ws8VUeQsXqCYBDwz3ofxkeMGuQVVUxgPwbEDYUfingqsnwnHgZvpXNQptqGNWv3cjs",
  "key8": "yenePWut8TKvvtJiU3mNfcmoANrvyxG5dQuXjnCz4xL6BMLdP6bZSY9Y9wSEHwLSSojYLhJqYjsB14fHnVEWhgj",
  "key9": "xZfJfQeyUi6MypiZQtYciiSYAvWKT8nAoQrfrnV9BdJj9TMx7duCQrLFxn9vUACGBPKMbmr1P5NmyPoQG2eNwpM",
  "key10": "3w42iCUyVZnr4ha5V7CvLRv7JaMU2Zuj5NrGKzqn3v9RTkULVcicopLHdmPvxRx9sK9j34MG9ceo2iepF8HDX5yE",
  "key11": "4sxfRTxwmrEBXLP6kxADgnYX3xCQmfHgc6LxfrvcaCSu66RcxkcftTyTeZ8c3HtmV7C3bi3xW5yJGQdaeLL5BHsx",
  "key12": "4rcnEuAMaAr5Eorjp7o3pkaQicJpU8EUiB9YXe6Lf7X4KDCSoKA2KpYUXdKoXLbmxZ3CNfEmGicBh2et8NjbDcPw",
  "key13": "2NMmY4q9UZtcP9BVQWet68igqNMpRjF1BotCHhdBU6mSCZik5PbXzjKUunwytqDiCcckKFqbKh1ZYEUkXRpgTSsy",
  "key14": "yFvcPxR7DqG9wuDTv2685Yvopu6QaYw6sxN8sme6gFRofoDLA3CFDGRY8jGa9KE16tSWhRftSDcPYjgmeJkHFd3",
  "key15": "3ZwasjBkyY5c3kFbpQRveqQFVWYFhxDMfMWFUfLaWYsMYGvfgmVA28L2MbwJGsKMygxb8jLJaQTfuAaWouqEW2We",
  "key16": "4QCDAyYcVrotXWkAVR3wE4UmGvEvS44X575xYJTQkNRTeUtqzrj6ihhGMrdRr4SbJt5P25U81pJM5Bk6QHbLDbTD",
  "key17": "5Kjn4ZQZasySB2QJswHT2S7YAbxsyWhtERfFPFFNveEJnsyGLbEzEEeRQqrNCKKuVihj3E5w3jrs9vb4da6wb5VR",
  "key18": "2dyPn3QiHCGWBa9WGy5yjaEiZxKMNqfD7dggKAuCWRVHkzjPWozQqQz8HQV9DV8rxMkzQthhEe5erdaHYN5RdQ4Y",
  "key19": "bZcVJW1u2b5jVzgm6A5sVLQo4cnFwN2XDLmVyt7jSDyJ8djyRRB2qkNNcjhsS2xmnR87yEWFydo8w1k39f9nCzG",
  "key20": "6122VDqQiLX33iUAgR3S3BXvXmkLhv8fxvaMPpfCbfUZ6RH9EfzxG5eWZazjfmKqoBU98PfpCG5acJXfRanDxs78",
  "key21": "3PfFmx3bk9D51vAmDoiXFSqzaYANtZynw6Sy64Pz51f4LZzdMbMvcrjioARKpCgXmzccM2RTtHGbPX8q8MqezyZ1",
  "key22": "4qPnNyeU89L7yZCq7Ty3FJz8ScV36z75p6RLqpwJkF9X9ZuLasivzLehns3QrGNFPMVAEttfRukdHKgHSFwzvsTk",
  "key23": "eFMCG42tNkvs1y5KG3YC5r2qMyyPZFU7rRGaWuW8hZu6mdh16FVZNwnrWZdiS3951YYf8YwgfMAoF5E18EPqcP5",
  "key24": "3w1KPjE1X9dJVb1zETKpJWXCoPxXbenf54RNWiXx5m76prMBQT9bJV6ye7prezKDGqEYcHZx3LYi8TaM6j3PYaqT",
  "key25": "2zR1QFLQ5sbYBSPvTK9FWaAfrKzk6K6QPQ1jSncUHeLV7Sp4xE29pnJeiy8s7fLEN6ZZic3pTMT5hYKUbCyUqZiK",
  "key26": "3L1PiRW6TwwNyj8HsXEM3bTGZpKkcVmeAN6KyfXZN4mEYtfuBHWWHEfMzrhcD9GSvx9C4jzL6Bz1suq3PpJqks9r",
  "key27": "3w7cwHSPHAGMXEihpqKSCaBi4LRAcfgrZ5epf7NHYbKkWwP8k2yNtHyxrwTMPkp61qb2HCysAy8AqU9jDL1pdCnN",
  "key28": "3wryP1rke9EspT5mixjx3yye1WamKFLaAjmvchuT71yqSwvSroGoZEhomvVBR6Vi3MMEjSWTZYfbQHsmcDfQg8LX"
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
