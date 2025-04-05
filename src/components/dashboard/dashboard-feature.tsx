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
    "3tvSEJo1QV6AarXHbzETg95pqYDMLMvzkVgLLFiUw8q7iS4t7ekLrxb2m764eAf5Ke989Dyi6WDDPEVsz6Mvcab7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qngtufsoMKAxuz2LfLnihBY9ZfTJMogckUu2T92W2zg8dx6tfoKfFYT3NnvdwLo7RvDEDaSxhYCRa7xqGm96frH",
  "key1": "235nRu6y8KCzii7KmVWZbN7ps7q7nUmfQztBrtECQUx5xNGamTb1V6B9Kh6Z2rF3vvM8QGQaXkgpCAGnYJP4EDUQ",
  "key2": "4X3VqKCFJHrBuASegw3sSQx7uXT2EUSTMaQQwfTQpCLx4ZMo5Fp5uE4y7fggmasZP8MNXVmC95t2ZVyMmnLZj9va",
  "key3": "5DJqVDYmh4odYrcdZ7xcSHqCUrUThSgEB7fzs4sWbg3apHqvGq5CnHDQxWUwDvgPybHpqW62xQrv2sAnGMyaF4Bu",
  "key4": "3d2fu6h2zuJGRAHwBqc1Hsw3ngvLCHUi5RcWdSAqa4sn4TRrej9Ryoy1q6ASVfBqKuzvi3NqqYDNtDvBt2Mj5oky",
  "key5": "66GQeNvGXfAov8nq7A5W7cwhbx5Zgz4rynSjRKr3t5g2t2xspMhVAW61FBJaQzN8DBrogewKpynvQ2jMEygPREQL",
  "key6": "krVsBSJFrNW1z7F1qrYibZonuJeHXhins42nM9LaS1k9HeiNU8uyS6dBRfzNbH6RbaZcYcY2dLJSqZaWQYzzyzk",
  "key7": "3Z4w3mqjD5yK8y4fJCqhEb7uQEj2J6RNcsdW8HPouyXCnfxGKtD68zUpcU2duzsXwtAz9o1cYnvm7u84ejQrPzzC",
  "key8": "8LNuWfVoNKj5zWVt2WkVSQE5kHfzgq6LsZoqvRpkzFX5FQG9Nww94dUaA7ZXNHS8xMcC1PGegRXPZHaVQHTdTvA",
  "key9": "CvgMqej8bePxYYGr7CK36EB2Ba29BB7GTqCJPiK9sXf75dZdvTV8ABTWzQzTkXuXQ8sn1L9KYQmkag9tuBH8Tgf",
  "key10": "jTXREptka7S2UnCi7sU5N3KoJ6XuonCRwnxgdrKbLYN7YgwH8mnjw81hS6ARsiu7wmMumSYwZAd6gkcbzPEeqXV",
  "key11": "3vsjR6xAUP6wY9gP7XJFmqFccMbS9uKz53JTgu2KFJZVefPBtSzAxUY1EkDt16YzktaTwyQu7JdAKEaJs4nVaAwe",
  "key12": "3VRiB6HQtkcrA2v6M23e9oCSBxkUHMr37sxUi34TQA3PTAtKyhJEi2CuB5Lkttj5acudVQ7n5PibNCaQ2dWmxKWp",
  "key13": "2bxq9t2rkkT2kYLHKakrhN2gs1Ziwy6PwQ5obADnLKBVNCSEF3PaEk1UhdxERXevQ6kUEFuPsqBAMZUrEWdooVA8",
  "key14": "5h6ZA1B5oL3ASMbCEZQ8PdXf9Jg3D24iaVZbWq8mYRjgX7Rt7te1aLJefoUWTkzTAz3DjjNoc9phkNYEmTpRBvMQ",
  "key15": "4dbKCB2swUeD5rdpvoZhwoaqec17KLeqDf8HPpUbRAc4nx9zDPazxGZJ73YHUSoWuK8v2YWdqNigvYaJFQ5qcNi5",
  "key16": "2cDuBY74UEeBczSR1m4VVVKRRKgyh4LpXq3knGNtgynbPhddKPbMyB6DbShpQN5RhPfU6X9UGAKt9MYQmaHSDbg",
  "key17": "5B8bFXopoWiBDytkWGG353CR4ptAPpZa54oVcdxGPvnTh9FfyAVMsd1QMHff2v9Z4k32ke5KyaaJnXMJRv6x9rzv",
  "key18": "4mt4jiBkmzRjsQL6DzYDkg6yC5SV7VAZFqELnbQJjykcCXnvegEEqHQNnDUKcTW9wY4GuAge4qk72iHyvgtJ8Wef",
  "key19": "DphGsato6UpWv4NifXFVcZ2xYf9CHv4fznAjbpEr9PovsSCb5N4Tp3c9CYnp23e1idh6Pd7LspYMjAYrQGsFjv4",
  "key20": "2DDCkMwghvH1t38oKzScX4k5adRuXBpsW26N8YtFMc18Bjf6zdxHwB1Hth8jymKx1SmQLFXd5EWXxGeg9o82mFim",
  "key21": "fYSRK48vHLfyNpGXWvKUdmaBhZTdd8gVGoGRsw4UF32pBvc74AfTEi5ptDDwAZhMjrZcHjtmSLirdUhxSukuqvF",
  "key22": "42rZHQu6FERhN1fihqQUuqdFpHPzbJ1mtpSSU86XvqDQV6Df6xpKhuyYxbThjCiVDm7D21JKvAsRiS5GaNQZwYGH",
  "key23": "4VcFhW3hMw9qPceToHCfbctfpJGUSVfwKVjfNsurh48TiCQkgHsDdWvmyArndp2Kqo5T6ohcrpAgRrw3umVdeAiZ",
  "key24": "7J3BJipqAJCZzPhxRHYVTQjPUJGDizJKKgkf2aEycj7hPvcfK4LHFuf2eyVgVAnSejokdmGGjpTxAXXoUcK4nx7",
  "key25": "3Mf81cPJ2WDvZhWfvrc4LJ4GpbHPEPSM5qFhkHs8ttPfjSDb7dnPkbeCDPxpe9nQt2ovDRczcHTu9XXGd71uxJH1"
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
