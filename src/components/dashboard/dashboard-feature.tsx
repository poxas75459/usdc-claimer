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
    "4C5GhWwfZQCPTWTZCspUEjKZP9H6hsUMZoS3NjmqKD2txRSm44jER4r2Yfexu8skdjZYJUi9PsDxv6Mt5mjcmqBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RahBqoWf6q2W2rfnVRco2tgjD8joT4dFpj7kxA1EDK4T5jogD19rCrGqBxEAJ5stSufR95AqFwvnFacyxkTUpDp",
  "key1": "2QD5WE4EQ4xwo7m3qku3rybxJHuRBDEhgEV8r4mBEmjcLz4aAyVvmkqXJYroThGFNuzoZ2ernES1UVeM2YLmzP3H",
  "key2": "to5adiPrzjmkBP3TugqD7rcga3ABYCERqq9d4rUMJzTYDcARrx5k73u8fn6uzfcLCHoYGxfZGS3LM29ykgcFXKp",
  "key3": "GCXJUgkVLVrH4BB8mjWRFePRuyxLTKnwk96piYU8cRgdK1e1vacvi7CPf7y2thQPrFgvekWi1qG1TdqwVuhWwHw",
  "key4": "2ZEJ5b6JMh8EtAbLq9Ez1yNyuySnrrZJo3uDNHbqAgzTAVfNnqb3q1f8LCoVyMmqM3mgKH4Q4GwLYU8vxByVvuZ8",
  "key5": "55Njvsg55byzCPYW6dJVVkSrNDKMAKMgbw9cu1xvN3TTrPaMVBNdnLhPrXrRQzUPQ56onfeXxpsrtrgD7QQ7UwhB",
  "key6": "Vudz1LysLZfB6xDpGtsbJUNpsZwf54R8pZgR9zs8HXRK9C7Lm9x1DZAuNs71ANeoiiqw5dCLFAVwjERHw4L7fLy",
  "key7": "3hNxdqRAdjqwYS5DB3iLQX1mKUgyJkapiWfEbGgdpmkhitvJYiRX8J4h2kpTKxNuRk4fcuwPxXfKWWSPH7dwvNZ",
  "key8": "4R3vyXDn1ucYFrkbPukiWV2VtqCGwk1Q37yvxe2EGt7kJZEwEZ2NhKb1YvhY5PCSpCjqkfGTnUR3JFQ3DHbjARwE",
  "key9": "4SivyrtyGAXXaoBZEWj5xW9Hjci92jZtPBakWapb5eJ3e7YT5y9u5zDRju7GkbYbpAEiouCKGAcjAJNy5FhxZEUb",
  "key10": "dJ5ncoDqUupP5eyFfyKzqQyJV73wLMHmae83V6xpJ4wxJmJ6YyP3GodsiDeuA36txi27CsJPDogzKSRBEMw5odH",
  "key11": "2pS63sXB1gJPEJykPdTXVsujpkLbRgrnMPRNSxNhD8fPefR7XHsH8z5TPNnP4VhoLBM4uQPpvYnrwcNcVEn5X4CC",
  "key12": "AY7bV7MYjv27JApqaAGFrCMLpU7FgiJpyXvCipCvTyb9FDhjk5gteTV93i2wsbW5GzJH2E4TobRohV5CvhBuPzy",
  "key13": "44Pa5qFhxTfNjeDNL3VGeTTT1BCQKMr1pSvmY583j6BhDk4giLrfYnvN7Qq5QvWURz7sAFfZ61QRfBkMYFNN6qHW",
  "key14": "AJue938ufKZJizYTCBmTVZGMqvLcUb46eSR8a93pXHX2xbgwkHCnvzo7QrWTv3pvj8unSTaC8iLWB44KoqArED3",
  "key15": "3fqvXgAQ2zhfJUayGPeB6Wh6N5i3sXsDWBjpBNB4QndSfpdT2zLgst8bN8tanTy8dnBZ1zLPDvvTotXnB8iPRdXF",
  "key16": "3vf7PBbBzDTrxYnPwtcZkSBP9D8LKSUWyiD6m8p8Ncb6r4jzGhZEXsu1AKeFDbMAYcpDwCfzNWY31bnSMBQ2JADQ",
  "key17": "4DkRQZVYZv4wokKzhCQJSuHPq3SGhyVPC1hZ51NfFq8gwMhDGLdZWXCRHjueLfGTgLm4tDNZfDygHvWkhrUcCdvh",
  "key18": "3RCn4K3zDZePhTgfrFr4zVBeM28t5uusEa2u7XyJJPBRic5z4zye83Cmw9Z9hmkHc6cWfMbSjasJR8565uZUy7yL",
  "key19": "4EBB3q34SfxnWf6ctSB74Lbimf6wY1eLvUdmm3STvPnXowaHqTHe1ztKjdFEPS5UoFX35Tt8K43QpGJaMkmCeDmY",
  "key20": "61fFx7bKux8ZYUeR5fsemNUH6TvmYaqqkLUjAYpLYGH47nH6DHLsJD3K4yTSLHhZu8vQnrgPixxwrDSvR36KJ3Rc",
  "key21": "2R66VKdp7QvtW6mJ58yoAiHVWsSCPbgUDAge3NQ9bVeXib27byTvfpg6xnuyVFfX3wQkMLHpKMhmySXdv4YAYz3M",
  "key22": "2j1YPYUmLPjyVp5AN2ryRkBDAHyE39qgsPq8uf8S9YgP6nUyiKyc5G2da6SPczbBV79bb8KSpNS88AahmtnD24if",
  "key23": "F3LwsVVoScqF9XruBd1ppm6oi1dVKW4rTR4soPVgYuL9iQ4PZfcxdFuLJYmCEpx5GtW551624wKDebchmKQ9oN9",
  "key24": "3rXhX6Cb4U2A5rAcRPFeiheYC1aeMDKSANWfPNJLP3t8kTPoHBAM4WyLCRgogG3Dq2P7K9gHhD2VJ2ESz5WiLPY5",
  "key25": "3WVsBdi6tDk5TywTSsd3unwpR8ZqhsNmW2GvewZViMgi9LaiWF1XqnSeAqGkPzY1xAyWYvaLZJWfieXEQPmhx61H",
  "key26": "DdAH74a51NXLhp6hK7FMJ1Ltx92gSjAEhsmbDG5TWgtq2ZVSnLitzW7JRQMhebtYPi5SSdhXbsmGHPWheAo1orJ",
  "key27": "5RU2bLGGWnMPjGiZAoJBKn4QCUYqnNAsp6UaCz8xH2wdoxMBPCospzX9nxvxQMutLzAKP9L7rk8jHDmaEV11Vm8G",
  "key28": "4Vugq46NKWjthZ2c7icgevUTB272a5hYTuEYFt3LCwNbPGG5xY1F4hizV1U8rZCQhpavG7uYsBYFfX6MK16c78XX",
  "key29": "66RZByShvt1iS87Q2N7eU8U2unJfWFAMVQYUXHSi1A5YrkvvdKFQumbhHMLQxngECrYYiCNW3xh3XKb1mFmqgYBK",
  "key30": "28bXxTKX9F7RQemwEJTxse3sfLrcB7VFLWZMb2vQWbE38UYCwtfNpjnjAVnpoSTdXQWYQmbFWnqnmmzW76LjF9Av",
  "key31": "3rbKP1BB5mUoWuo4WHFzwEeu5Dsz3DoLUaMkQQVNpmbpe6zwiHZW6tp1WhdkfbhDgFhQ6R5WrbAUhidLCdRJt7Mv",
  "key32": "2GrgAS2DD6m7WHAJkyot8FuTnW1GZvgfbs6oBdrJ85Zip9PdAzAE9bPxDvHwvMiyRf2C8TDnf1B7zyHNHDA1TJZA",
  "key33": "YkSL2by3GZtWkgDucV5vjD88pZnzYt3MC9q4tPtLQsDwcUq3TmzRGaV9iKPBcgodwd7SrTohfjS5UDcMVNC9qnD",
  "key34": "33LfN7AMjaUwk8HgVzGteKmpByKweGoc86vadZ2DBVX1igvmwbyTgVKX5cgGLkP1AcQkx5xYrfSARcBp2JmPJbpT",
  "key35": "3cpcWVAumSWssXhKt9XVWwBmAuo4amNiALqZX9PibVm6Thai38M9Q97sc5t3MY3jZFvRxdA1K6LDGZw4vZoSCUQ6",
  "key36": "5Q9ZyqjNbuf6e989o7orAhYe38t97QDLsf5cBpdVnvXsTYEUVRJWZjMaAg7oXAFuSu9sPMDFZpBEidQCrNWUiDYJ",
  "key37": "3KZk33YASEZNsjSN6dDsB3gcUaEpppqNNs4eFwLpXffRbx1F8nk7scd5QjTcwwm3V5FFNVK8iMhhcWMfyRebJp7i",
  "key38": "5Wmj6WTYGajdXq1yrJ8VjJwhe46zt9Qi2FjdpqqcndYN2YEPSEX7pMyuv7Z4NjczWiro9TW6qAb5PZgQes7so3dk",
  "key39": "2hVtymDpn2mDSJ5DRudRBRRobjrme4E7uouFnbnzBapFoHJC3YEduPWcknLFXCtXw2DbjdkrvExLnGcKT6ghbQSf"
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
