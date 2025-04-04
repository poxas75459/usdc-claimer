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
    "3Td7BP49jrh3nNANwuAsTZK4kima4DiJ5fYqchCDYwM2UE3DspMg6RVNtANqjc8rkuqDPPfZ3GmMH2oeXPb6Xgjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAfGkLEBjCPUYqSzrwZZUznmGv6oC8cHuyD9j8euJJC1hzMFjY7dQnaDSoQHGpSYShtmEKXX6VbRQCVUbykFK4E",
  "key1": "3GymQPYvhraGrerFHAe137idWroG3MCU2Yw7TKwAUbTbYgot6jYdjixc92ZcAVQFDfignmrrtVg1MMte6wPD3K36",
  "key2": "5QBZV5pANxrkvkSGMn96XYA6mAKALy1GQ3zhD9boLAfK9bLX8T8jxzZa3LTaVoCSRtjN5jMf1iWVNVbk6q9TgmPn",
  "key3": "2zjPTezYDJquxZEwz787yC9uJ1Gn8BoGpQR6G2sNa31aVApgVK6scLKShus5p256LL7ARxoGk1wkrnRbU79KNqeb",
  "key4": "3FyY9SPJgwfFc3fWTRizRsZAe1hZcmrWtKajtAQBEMyNRUhf8VdYVhynKgu4e7WRmeg7ybKETsCjVyhkwzQxq5gc",
  "key5": "3GRFgUc9KFfHQwN4uRdKPCi9MoXeoxnUfAfJwDPfGq7C1J7RXzVxfLgsH4EZbiGi9Sk9xVKhvCxYrGD6LAuoN4Kj",
  "key6": "3PYvLt5mr7MFqPiexmdxRYQt71hniXWEZc3xiQiEViirWey6V7o564J25RrV9EnAskBrRSws81QxncLdP2rP7xkr",
  "key7": "4BQrmoW9qJmHbbfRJNNKbzjZwx712HCrobYAfvFcpxEVrhkTyPLHCZknFyDJt6yRo4S3heQNCcEaeFbHB6fbRD58",
  "key8": "2gY6YxQhUXLz72rV2rBZHUmfsqG3sAuq2czVY6puNznanqiMCM19Bvty5FQd5QLgYgKBZkFiBCFRmiVSnLoi2syu",
  "key9": "ShyuGkYx7eVMFBMWo6jepqigfGSGAw5uBCQmJ4JRCNxSGJwNKZHrUb8BWyQgWJBZBgruAS19nmke7CMGuhm8Roe",
  "key10": "2J23kKv33XiwVyeBXgLYu4tqiJS9cJ1voGcq1k57TNPWgoib2ckFZDcsZMnsxAXe5vBDhbuh12NCJRJYyra33CVL",
  "key11": "5p5uojvDn8tN432g7Xjzbqrknbi7xPBtLtH4o2igWPNsmgKj6mrmqSj7iFMEDqTTDCFGhocm59vHSfb4TD3XXgmY",
  "key12": "4e7qsCN8mokU3iqMcUjFyuzvgNz1KNH7W1tiBU95jmuQ2jYhnDhTWn2NyKJo523WPGwVW4rqtggBhQ9Ph7WoBEPC",
  "key13": "5rxAzifFc8QjFeBprkEhCQ8CDb8k3AnMFKKQB4Jvj3epDQMmXfc91PBYSFTb8HXkSeo8ntKnjX8YFswYXvEeDjfk",
  "key14": "5WmrqdPY6rJxjxYpY9Y7uUBPtbpNPgiR1mkPPtHofxABbgGhuXwr47thKPk763ZFKbssAN9hg4zSoA5HCeEwUi8t",
  "key15": "4bcPBdXtvZQQkzTBb2ZcChzh1B3GX1fGqD7t9QsPLVT2zcQmVcxWcCzxnKnmQzyJGRrwMrwBqNQpcoxQPRNZyCzA",
  "key16": "mMinWPX6PncSrJfZ1XofJJPrv7pWf4wscni4qiUEgcXwRRffhj3etcfdu1hRf9XCMtSfLRvpaS4zDqBiP5aLa8x",
  "key17": "PpamPT4JNU5K2CTwc11fzngSDGz1rrCv8XhvvXAzx9AwpRMT2ei6xiZKyxooprqxdHNQ4hXj12wDEuqHGVwnTR1",
  "key18": "5gfXLrerWiGBdEdgLPUs2oReYp1vq1YKsbYUrbLA5dsBJgUZwo59zkThZWXXXjcXHPyfVW8yNqUT3hVyNUNrm8pd",
  "key19": "513AawtPRQBzSNaNpLRLCE3JAdYt43DBCYH2CKjG3RN9Egza7SAQbT1egrht8oC1RLmEj5K85FUq8Uq3AE1LFEwD",
  "key20": "tSRJH9s6VSFiZceUFv5QmmqtbCSqEvAtCrUPYZ911wNzD7MFJkx2hqRm9umkno54RQHvKoPs4f1JqLrQKgFxF4b",
  "key21": "38CEE6FpbU8ndwpwkHszc64aFB2TrqDGfNoTbjEoZvHhH6gYHyu78F5q3VKWm5PhogQN5fRc6CSxHzHF9t6UyFgj",
  "key22": "2LipCgU176eXF8d4UKRRayLfpHbRgCEKhSc45w5W7pBJJcsdoDsq9dx4gfeS63MsjYysfaUrDa9xJxjMyCcMXBtL",
  "key23": "4y6sC1wHKPvvmRgn8sS2tktRqncT5jXnkPb2SuEpyoPG8DP5T4iniptiL8LT3Tb4z8PAGwjCgFvj33S3TvqVTKjh",
  "key24": "3PHnsYhmC3aaVm4KnWqZBb25FK1XMDxQf9ZNxzcGt64gAQwNizgkggS3d3Ma2AsGeKkvN14zRLcNpekNXmCLTxJx",
  "key25": "22QXb6eEtzruReJxEug3EU8cyxyfVXH2kqVHeXJ2SzRH1K7wWMszKCDsNXGMcFcw5NGHXyAauSKuTkxTppF6BGSu",
  "key26": "5uoDB1TPDoewubWcNHWL5PUhzj4kZ4CzmwBfg8yoHycyKmP7gM73xbPk7aXmQPoxeakvr11K9yjy6S46NTubVSXM",
  "key27": "3Zhjpfzge2NX9NJMFHKQsUFZTW9fWQMNMgZ4yeZCHUocLL3kvVmpH1aWmH7hCVKVyu6E96TVp9cWo3xvm9y16RcA",
  "key28": "3S98FN3z1zkoiSNGNkvvyR7oHKcNmAPztk1niLbaQ1U1zN5PP1imM9ddaP3W9GrtfTCFcU8NKiEXZYxHh2PcfJxb",
  "key29": "2BTiDQyCqvEtW3EwJCP4mB2ouBrRBwPaJhnXkyac6mMPe12YRqbH5tUwvngb3JjvAYa544be1RApNt4RgS6wtuCq",
  "key30": "2KZa2J1JUGGEWKxV8evr3oCPA1RxG171BiyVz8B2yHxmKZKviFEH8rWiVjRFcv2h1ETcig2p5jTaW46FC7tKL8dC",
  "key31": "2HotbAxkCKxAw4LjJay12YUEizXxQo7ZUk95PAAhCMXaUQCdpSz4pzWarMqB3ZBmDLhVwuG6W4NYWokk3R9dKUc1"
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
