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
    "5ygRqD5PYYZP3HcoLiMUxpk1byyR4PAX8KaMpAbxxn8xvuyw5gGu6GLcQKmmXs51hGy2nATbnCQai1qipvfyr5xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8hSCt6TWckKDEBNNt4P54x4m5q5urBZcw8TCZqLkPSVRc6QZ4QjRB8igr8jqq1sfsGi7U3eDXd9zvcVHzVeB2i",
  "key1": "tFmee2UbsLhsarXpwKJoW6Aday1QpMyHS3E2g1pWp7g6NswmPdT2E2Ghu53P1uu887eUreRpYfy1gZzwiqFFhxL",
  "key2": "5L8tyivB97vrjQbiWM6uqXTJXYGdUnaXqqvLbEXgt7URg8nU7ugbWLveYqZviMiJhyBgnymojeWYbXuXtFqd2uSr",
  "key3": "24qr528LJV4QmwGJ5rN4hacuzq1uZJ5fKDnBVDN7sZDm9r4k22FvZbfW6ZvYQBeTzyp5PMwnPqriB9AqH2vUNDu2",
  "key4": "5mmwonB4yombXMTNg4wuNdTFcDHEpKemnXXKcAzS8Jg9i1kiwji45mVtfCFjhAYCPgXQ3AYrG77UDrCuBbrYHtHe",
  "key5": "4cvBzjEQJKZxcmBevM3htSw3WKgPgyk8KdKLiKbQEHLBwKeXkohYYjdcLDocHKLw9Zd6iVwdXCDgYdqa5fyG4G3y",
  "key6": "5t3wxFQLrPW9hTc8zYfGpSdJXn3MwPZ3FebsGrAFV9v1erC6CAuqsKRGb2J9NQtBoMNtx8mDAraaPdJCzSdycGLt",
  "key7": "54EYmK8M9XDccooZZx6mnt3r2TYMJh66vZseEz8t1wtT3zSo8AgKvTJNJ2sWim3GaRAZeJEx5JawJHPN3CHAXMcD",
  "key8": "2AyCW3WxrHnwRqdfCUWn6j9nXwoDF7FcV8q7i3CC1mLvcar1WNe7xj6pbCVZb8gBZYVCaFbEMBKeZenJqzLUVHiq",
  "key9": "5Mt88JFqe9cygtqjkNGZLtX7GktyRSWVxS23FoT1zWg8RDU8qRToKazb2vYdjhhMNFNU5scumipqUufkNT8vPmF1",
  "key10": "aMYLXRaM8TUPtWtbNoKnp6JUvbw41aRekMezjfuMZvF1ZcjZJRUkzK6gzDSLDp7rqyz7NeANUZwgQdeGq9pvsjq",
  "key11": "5op2eww68oMyZU55C26bKrh9s7LNaUezGxVVtTUeHaQTwu7QGWdvyGiqz2zEg8s5r2HmmEya8kbSofeCJa9XYHdg",
  "key12": "3vY3RekZGKj4QbsvDXfFfFCjDp3McrWpA95LSBGh8Yct2M1PPhErydGBbsVPSNjLVy7QL9uZjvVaMQpNpHJxj6FH",
  "key13": "5LSzKLyiNeujAN469DpDo59rEiQt6FE6PAn3szYjJvM2hPu3uh3y3BwKFjTEXtzfLQapPAod5i6Aaz2iydbuuAQ2",
  "key14": "67VXKQdanJR1g95WmnY6koDiRJE2akxTo2arXHr9hM3NuEFZXWg6yJJnymS2wjxrgXxgSR3RWLxzJLYZbK8vsmQq",
  "key15": "4vHwt2M1aiofNch56yqwb7es7FrUteQG4V6fk9Zb2aajuQPZhqxjG5cEMVjs3uXNRuavvcRaNF3gpvkWzFXgNWny",
  "key16": "2RztDVZeaihQwVJAAAoohcFuu5v7HausPYk3srjuuCLvK8dviuipYdiYuCWZaHak3wwgVMhH48bSdApkXnQT2u2k",
  "key17": "493DCrmZfbwBYFd2L7ku6o6Y4RyxK6v4NbpyiAJ6DiWKcTokAHBSUNqwN33RcmPzdB4mnLGyepqd5snb3oKax2Uk",
  "key18": "rWKE6hp5VJKM3JWfKEp23Y7sFe4MC24MXWwS2w4Q5vfYVHav9PFPfVnhiDwV4G27GuFsx2f3WPnoJTw3ToL35pA",
  "key19": "2YZRZPnxdagTuPL6cdb2HzxkTSjjrp9FXoH8FPqC6rz9GKbFzN1CaV3TVDWZ2Ze8dJYcK7K5YVR5E6kVPTk9oY3x",
  "key20": "4ojuPih6sXaPuN4SiYuEcLqU5V2WGoJw3hGAxb29fRwV1SxVuEadF9UHXNVvjNiz88ckYziCSmJxGfFdQAH2s667",
  "key21": "5AY3UTfAai7M75LETeCzbbXr2uNTYByrnZxqw7ZqhixoYs96joeUhMK2dKF8ZxYcHW2jtQgDa89RL4UdUbY6Rei2",
  "key22": "5MjL1wqkfcoYf5JCRTc3gBZkErHq2DvKzrcibWcm28oDTLe6Ycp18cNSE9pZtQqzaHRabWa8mGvy5oninLpLCJPR",
  "key23": "2AwAbzNwEDJHY1fHg1HRcNeLAfR7JjgGVyWsFUXLopUbT47ThmMNbsQAwaKsn7AJb6x6cyVR6TVYnEYVT5BUw6xE",
  "key24": "2jBPUBSQqzqd2nqd11sQ5oxijtXsAGEEusBXXwEop6dJZQRhh5MNM2EoPQQQzPEgBu99LBTKaxFNKnYJ6tFKEiVS",
  "key25": "5hissWF5CL47xihhKpUgPmj7noDfU8FYF4vNfpo817M2pg4UBhEr1BsMHnj7fNrbzNE3zw3FKBBa3mkXL3epPJsd",
  "key26": "5WDHU5WoqUfi8jTsMfhA66S6jCzuBv4sB1haRmLiqrCKe5ZrDXE57LPjgwxvgHnN7T9VAEeTr7uoy7BATEBoYmfS",
  "key27": "3R92rXD1S5ZfACkcHbKrjXGUKHpfH9U7td2iBFx6gY9bLw6fZ3o1SoKhzKYP9U4xYf63YaSsMtCDf5chcj7m7soV",
  "key28": "3Kq646tDPdbyjDycdEeJUSyRPRbhuijteQKsBm7ezdVM5ZpcsFGf7Ry91Kn8fXkZppU44MirK2VFmFzE4egaz81A",
  "key29": "4QaXVeLydftpoj3fHPF7Nq9CyxMGDH8KbTPJcUWgZhrPV12Fv5HwbcAVzVCY2VKooatwRtS6zpWeEzh6nwCDK2j2"
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
