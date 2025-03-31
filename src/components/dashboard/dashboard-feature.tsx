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
    "3NVcXzaT1LTUtq9PFz9ksj4FquTBPtyw8MGgoaBjwFNNDF5bMuKcNEgzoKM69SvUYCsfDhqVG4VE6taYuCTcuGDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edDkt31cPoVyYLKKqxB7G93o4eZVbUNTqGPEZ9YZPfrbeov4dyiHwsBkEofYeXmwqva4fGDrxBhQtXxatXiUVky",
  "key1": "4bW2PvwGuA5P2Vzmo6ysWxv14WmvTSGh1QYY4s1yztjTnuN6SxYxPihJBrGiqfRM9BVnXwgJepNCmfN6ZKg6a9Y3",
  "key2": "aCppv3uJjLAftU1bxtbVtByF93athBSkkMKxcJFppCGer9wFLK7Zi9q5t9HX43513QCMzQb9N8LgYFawzgC2pFu",
  "key3": "329yoxSWBzyNks8s34fXiJsfy8wDZMnkLvyo3fCK2bhEDzfAU5NSHGtJBEdWEnv3GYGg6zRfg2Gt2TB3NRBhxLQA",
  "key4": "5xUta5UfRcYZjho4vWmoakxpnZ89dkEWJwLQea8EHQjkvyQQeY9ECckaaLqs9PaLPNWw5R6nMxkqzhpsB9V9ki2j",
  "key5": "5jvEwpnWXw8U3qPoXFWVbq2JMnbyfVwLkbsB8hAMtc3Nucn7M49DGLMqsrC7scyQdDGJgxvef64a7hcr2ff6Wqpq",
  "key6": "3DZguoeBZbpRb2chmEv2wh9T3vwnVsk27j4zccPYgJ8tGsqG2p1kA4rCaVGvYCgRN7BPc3fy55PpCm54ukhEKu3g",
  "key7": "5GPfWqVCxHw3vQSHsadMdtQMLXX6QfLw7yKw4gxegKzvvLQrDUj9RacFsn98vaXytkvQWLLz2aP7ScyZhjmHfcF",
  "key8": "3joVNpX4jYxhcuiYXPGj6irdkM9pmoJkJAU3SiDKLRsNouKhvho1gujmGgseDXSjiGQYx54f5mEqWATYRdtdhEJk",
  "key9": "Ehc1MsRaaa4rhmskq9ZVHega4K2oxdYUFE6E6fd1Lm2i6LfytuAWqwqbubjZUhsKXh1Sf8pXPswraZJgounbM8g",
  "key10": "4XWitQExTjdxrXf6h7r1mFK1L7MqH4ujhnicm9imRKK59GkjTPYePySnyY2hummLGwDjvzWLpMWgnk1uwuHGhLcB",
  "key11": "86iUtCtkxMgWxSvLNFxqAGuAfB3xzEgT15Ckz31Sa6aYnPt7Qd7D815cKWUUqhMFiMfDXJtRPfJtgnXAzKo7VEZ",
  "key12": "2qmfLfShGG2UxF7rwDS9DEj9adJnnXNXtQUa6KFoj7icMBNivZYa6mSv4Z2UuY2BYYJ67JAEsc7pY1yHs6Mp3S17",
  "key13": "5eA2DJUbUQj3RnMKwM3Kho9CjjGMo1zxzYJU7n68ULxFoFG7sWQSeeoL4SKSQX5J7WzE7Q4af4eHawpL2jTRWdhj",
  "key14": "4kCz7bo1KZYcvP96Hq4PgH4UmSHHmPkRgFphh52bwRMvzaDwFKbv6oQjQS4xaMHz1NnX6Y7qmXHKnG6GYAfBZTwo",
  "key15": "P36evQuoUbf3deZV5xZ1jNtDqPKqHTCfXXN1Q66JWLQNGzp7ZZjnpGFcSRDeYmwWA5RCh28P2DNWJekD2soEYHY",
  "key16": "4uP5hcJf5xdULLA5xKMp5nKaXVcM6bn1qpxTTUZWDhNyFBGT7412fPTa5zN9A8uqBbd5PBrKVXh3WKYoQ3ig1X4A",
  "key17": "4PQ5PfkLRgjxJAxtTNch54xp3oazTPvKkbU3UZkkFkdBZk1iH6G2efeVefN5hjXEApXCaov5Xsh1pJ9Cvox4Ybsq",
  "key18": "KXymRTNXc6DegQhfUTMeFwACrkTooHwp8euMqDLMXdXyBY5NEkG8zYXj2L6xJcsX9onvyAAmgaDfKRomtxPmWZE",
  "key19": "5gSuAoY2Jk8wYW7v7nzM5N2LMKT4kub5KuSJneTe4FMAYixu2SgCN8nhqFrj2fGi5owe4LrmkUif9szFnMDZVHoD",
  "key20": "4hwxqFMwcNXoM1SZ2GW15NirspDQiH6NAvAXGw1MtxqMX6jm22CSDsqifobxkTZda1nAgjB4d1Pra21ZrizSvcud",
  "key21": "TFCEMz5Yakhrj65j9FhSUJjMDW6U9wkEr8MkNkxZ7tSWwchw1eDzHA15yhHPacNaSFKWNtH5yytNDNwhLAYQAZh",
  "key22": "L9CUANYMDM3K9JyNxJm3hLKQDpeZFAzLNYk8xWgeKhEdf6skL8Y9psAa6pbiAZYhvaDwYje32vr6HUxd8DZfurK",
  "key23": "3LHmL2DLAUdZtNhSQAvyodPnJj8cE3BeUKEBHnCvznmhCBtoF5ggDwxs4zUCNAZQpFjVEPc2bHgrJ4W5gwnKtdW",
  "key24": "63Fwzq2aiRcPyaSgd843Shb7put6grVGEydbKEGJUDMdyRNUzoWwCVmQYNDGLgVNke5qcBGK8E2sHyWjyJLXaQH",
  "key25": "3EtNPALpEtrg3GATXNJVs9uUZiX9XFnygrdxL23uVxQTjFbSTCAfWCJGnvkrtTtigNVNRAnmP5LPS8MzyQetydF8",
  "key26": "4QUX82WcdNgXi7rSEvDWFbrYwRY164GA8UcQAg9A5watEEMaXufMmuAp1zme7kP1XRk3kG33qarcnBX6d766DRCT",
  "key27": "2vkiQVWCaKg31fHUQrmdhuTvH3Q5r3HjKQD7NaNYpX8mvgvhaoXM64mGHHQgHkEB3U34vXAggLsRKY5HDHBBnTVs",
  "key28": "5LSKMQqWPa3wCbUtFnQuWNtGX1NavZ8ziuFJ2DVWen6bJCF4GARCsgL4XqdEW9gd58zXGdua8N3pf3EVjV6UAyj1"
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
