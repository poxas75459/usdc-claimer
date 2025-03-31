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
    "5Nyr1VjyaFKNyNGDx3r9K9tP2hziGdErq2M1AJUtjVxHKTJZMAG6juDDSRdz1kYbowgYxouqvUPMvjdpMVVp12hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7WPDfAfbtiTYmngVf1iB4DBqaoQMsiMnqsnfdAwyyPsfGRwVTsyQxp9NyZVtNoXo3CdDut1mHnyPEViw1SqYNe",
  "key1": "UcVdqWi5xSsVpXWeiewByY6tRJqGtHf7oePTWaq7dAtL6ZVdxNAHK4RKctC2zqFq7rJXTfW3a1F3SmpFf6AtgN8",
  "key2": "4bwtpAD4YUcayYPH8V7BPV8im87h3bFd5aj5GyQmZFbKkiUwqp2stU8mHoXBWLY2oidz3pDYJgUyupxefNyNzJw9",
  "key3": "3wnWNY6K2MYsCGkBnoJftcnTHe2X15MapTbF8adHGFGMjLpPbF8VzZhUPUwnf9Bk94ShtbYWkcXDKqiwBNoueFti",
  "key4": "3EQjEU3mUcnDoj3p5dxFMDQMK93iDJUwduBSyADpz1bcKk2L3xKvV1DcdtHMAmUW3dCfxFdKrKTirPtjYvWawomc",
  "key5": "4ZNzHiupqKkbNhReMv7NhEGCVCbqK4ptrYVnBSQNodHATPQ8Sz4LyF5d1q2BujLQcdVLVbpMeXBdPa7AB5M3jx7w",
  "key6": "5CtEaJiySYzYj2ySXsscGJaNoqWfCPhqvbJPTwBEJdB3KGd7aHYqfYa5D1gH7g4zgxwhfuuzZg4fM5ssZgFoGuZJ",
  "key7": "5hr2BdovW2RT8byQqeRuMUCr9Tv9VonRWgCNGU2ddbLr4gByVttA4vSXXMz8QCW9bxSAwZU6hUTyc9ms6vUECuW1",
  "key8": "2ZmuMCKMCJqhUhJF3hRi4gf4JmFXhZ142xVDq7qFY9fACnmDbUfpuBZ35ZkrT6ZWZ5uSr2LbbQe6DpyrKKfwSFiK",
  "key9": "3X4VzrZFcchBLNC7WJTCRckEDpVh1mWoQechK52ab7errwibePMSp2ubFPRgR4jt4W6p3EeZ3SfK4Jk9hz3vrKiN",
  "key10": "4tuaY1zhWTmusAEGeuXBvVSpauGxpwmf2v1NPYXPUknVbsNsJPtdiF2Y3q18VZmQzMQyiStn4mHgTP4WoB1HrMwg",
  "key11": "TPdCowb4aT2H75mve7PL7mTrQtkujv8BXgQeHWpSKNYjZd9qgvSspGSZmHzZnX63BybuN1KiuWMFVpa6DZpXXcp",
  "key12": "51aszxDhw5eRWjukSq2XcV6ZmbptARb18Fkw7ccrKQkBMYufxK8s9YBB4mqDPHx4Uzu1wc5porizcyCNtU4HjVeY",
  "key13": "2eZG37PDvJySm6cSt3jkiagPAvqLbKGjwAeqmnZQzofYK9pSquDTSfKD7McWiPps98kQ6m8uzPPn5Lq3CEGSYXjv",
  "key14": "5PrjJxN9BCkFBdQaDyM9brJv49En5Z5qWSEJYrTbG9JcZqbz8cAY9UYwES1LXvC7EmqK2JSBBYdnxf7btaw8AtDk",
  "key15": "47g2b9jJXSuxWSHYnC7FJQacLDwRuxzVAisuAjiBVhC2LwWeXTP2ceu1wHAsPBTE4QdFQbsTJoaPYTT9HiqVR2c6",
  "key16": "cs1rPwvNgZ7gfkca18pktCK3tt9C6NBXfbeyRPhGHjjztWrLBhibhMggqJW24x9W6TfGDmREDyTRU3aSTFXLoFS",
  "key17": "3SdMy1S29JQ6LABbijDiPs78syQyhFUyXqius7Q73pWVVUcPhzJL4gAtNAvkYxDmoS4B7K6sJidegaYNqD8NSjad",
  "key18": "3WpQs7xuMH8TCjFPdUu3hzneTuxrjCz66Hjube338FYTnwiZYbqP3xduiVNvHFQ7hie5wJ69cXQCFKfeQtss3r2P",
  "key19": "CYCDzTubz1MMVBo8vYEoeWfhMCSvbA9gSZzp8iniSTi9KnawRY81XMbkfyp5zio9bJJNXQqJYiwQThHM1mXaiMh",
  "key20": "2kjEDVEL8Jq4cp4gR3z16F5TiJAXq4BsX2dRUwAirauXE5aj5QDqULQFowZJgp4XDATSuWddpsmkXsUQ4x4V1Zrh",
  "key21": "4hpEwDdZmW39g2GL5h1QbMyFGiB4iRQhRLUNreCGTa8NCjZuw4qbpiREJacSJreAPPzgBBrTvrMhtXq8nxwNMwnv",
  "key22": "fkyZvsHC1RKL9rm5BCiXBMug6ct6V39f1oXNvXUn9HhUij7Ef1jGSGApZxLribEkZBbLdXm15hAsj6V4VQbuD47",
  "key23": "3FG9JSAPUGG399DzK6wWHN3LwN1p3xhw2be948yXA5L55YdDjDQGdQuqWobZ9UsQ8wsqeiQJKY2bpZA2Vf17Tmv9",
  "key24": "2VuzNCq4pTtKyetnyYLYk1py7T4MgkgsmUBDmYECwhLiyKpsUzjN5rp5tbxbRFoWsKpgXHfbUXGKLh7i3A1K157j",
  "key25": "xeSZ3XadwGASCLoZVjztW737VAK37h7uyMRjf2mJr2S4MVWhpKFsRpPeGLmzjn9wRwmUUxa4cVfy7XFw5UvvsXU",
  "key26": "2ibtB54TcVDNoa9B4bU99rKbT1kEcAfA3gRVAVBZGwDHRG8f6YqgnstGR7wxfKptfnFwBboamZUtMrEF692dSZGy",
  "key27": "5NQaYFY8NrTwuHjkZgjuo6fmThFaLUPF8Z6doqefMbZtqEMWF3ySApcdNXinRgLJWyaAxzKjzS5SUPx7Y6HaimKo",
  "key28": "GGzS3GzsxxfskJJsZEaK2K9MKHzQbGrmvfkWWQAYsZKwWryXaeATPWTrT9L5izKoVTareahx6BcAvD7cvNg8ys7",
  "key29": "35aXZBtjfWHsVF9hoznSHUZttCFCivbz4JhfLtBAnGHXsaa8csj4wXyxfiNLN5WdjzGmXjokz2YJomVUoNcxr35A",
  "key30": "mJbxgmHg73sZeKmhaoBfUJGpGexkLZ6ogiQ1ncr7mkEgtbctA35JASoWpmezTkHgMwGohV2xuFAWvLLZ8j36h1M",
  "key31": "5TWoPAyp8U1p3G7izyePoeWwNUow7xF7n58in5nVcc2c83tVXz7unUiZvgAzy1DLfGgeBq4RSnDjABzWqY95StTa",
  "key32": "2Gy8HB9qYe2GGLqXFTCuRhs66LoTUcvqXE5uyJdw8Fo3cbBM2StcfJAVsQfZApUjvA1ZXzztLP5frUMdbkZ3aRFz",
  "key33": "3c7MUXdTfL9soz5ZwndQdgayq7FVqNf4uHAvfyTsDuGRdUnjAU6LuVJ7oxSpbgqA8gr8mjdUAxiLJm9gHwq87z14",
  "key34": "5hbnmonYKdhrHo2ZZmmpyG9oKyCr5Suas1e3VqsPGTw6fzFE5GgqkVvu4HGGjoaexEsxk8MSsi7Jorx2DxFxVEMB",
  "key35": "58t1bQkuS24s4j6ptrVA63akJj3G9GKr2nijYB6V5pB8hwM9pbaeWqGof4bKgKhWVNDhZgSYjxC6yu5t4ULAm9J7",
  "key36": "2swGvYKBBMQU6oiZ2HnEbDYqT8Pq363AJJM4tZUsMMtWo5nVJKwgjFjqc8P42WAA7RFDBBkk3gDchnAHUKTkigrJ",
  "key37": "139dqp9721GtRbjQU2SLxeSdvrZWBMijnJkhQJ5SwUP1LjmC6prsr6zYeKeGkkP7yLVzfk1nwZXcZU88KNodxj9",
  "key38": "RRJVbThrcwb1Ms2c57yuVsUVAsty1wVGCkYCCw1cXF3SvB6c5WkzJerycBfVsz4ZvDifC6vYXd5gbaT83WoZWn8",
  "key39": "oWvPtj3mUUzEPjb9HFKaYLvcVzBvETgbER9D3fGxp5DuiobW8TXo69DRPuZVxCA7UVYRK83qvmtRCQqbNaaYjo4"
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
