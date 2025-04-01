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
    "5ng2HugdQVJNA48GFaiSqqEL7gEC2bGZAv2hom11vcgPRRbagvF7mrf33ZWpCbVyDhUB7yZf8wePcpF4uudXUFib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwGQUDBLGf8xLoeFAmipDy3dcWoGxoDPSTcVWE7nSnjRDmffVF9FKUv91rfvQ4WEQfWMyqxR5DnS4FDwDZZT7pB",
  "key1": "3fL9sHN7KGixbY3dYGSmMyHc5ZzP8FCcaujRgDucvZL26JXz2GTrwRUJtXVk6XWuZnvwrgMsjoxqj3nS8Xu3xErZ",
  "key2": "4EBYmxSS3WZK3z1jzRGBGRij5AdA9ut8tgVMupWzexNZTRb6FwUD7LWvBZyaG4tUY1pPve8fSKLa5tsmnsL5EZu1",
  "key3": "5hrsbjyv8q1vS582gPuj6WghWS8fS5APhiy6ptsbWRUwddZjfGURXWuvjqxrDHARazDyqrgdqA1gL75sM4RXFijs",
  "key4": "2qiJJHRaQc6wwJfstueJDnwwXLuAp3hDrTjiDQzyijeSbrT3yzSekff8mvFNbKtvPcxjv7wzsuVVxkc2GJc29h6L",
  "key5": "5TvtTCFZujbRDwAESZmKzURMd91coN8X9buoKau5wr8rgyR3g9bpVXUW7nqTPWLrNMnbTW4sneom4hFgf872ow68",
  "key6": "5teJUqHgcy6Whb3XFWePmrCe4smesnP67KwyM95mJrwk4kMp2hH5ZaXoyCn63TQ6xHdgbK4sNiC16SFRxs4gXF5T",
  "key7": "53X3umaCdpDbKHSprWKqF4gQt82nWbn6vsGqWCH2SqVq1ponY933p4D1KvVvkFxWPLEGehF8SUqQ8GVfN1SuVeNH",
  "key8": "3FQzZqy1p2kSViUVLpPamBpg8jb2ot9VCfu9kdjt3bY8A3cSLJt6cG7fubofSzsCb8sR54a1z5DCJ6GiqJPFTeUV",
  "key9": "5veroXWzJfQsWRLgxP4ieksHcrat2D344aZY5HJdFn2YPbicSExtJLJYBgxsQu4R7PSt9gYT8Tg1J99YznhwCJ7y",
  "key10": "27hYQmuCywDXdSKTF52M8ogqsDEn4Qp9vNLHwoJpPyPZzMHceP9u9nUBZvmNTXvz4pCRSi9W5wKw9vdsnFwyMxHq",
  "key11": "5a7qr3MHdTMPJZzPWrAnUArqLxzG16SyR7tbhTHFKRgNxqKRLCcfcMecLK1eTYB4JZYdYYDE4sBk2dRFMhbohxsm",
  "key12": "53ip9wLG1Y18pkqjbziBvd9hv41poHQsARbvrELbQdtRgK8397obVhexS6Vr1Zf7iaQhFEvq4hQ1LjjPtdE6KeB",
  "key13": "27Kcuy9HPUCtUELtCBYFL3sXbSuh253UH5w6jSpEZQzJh2huYrZXquV3aNie5LzqbhGNxz8NwHFzonj5WnUMLsdf",
  "key14": "3f4eebJbH2sQzBCyhdpuVWc8cC8HjV69gTwQMqBjvazdnohEEzDSExWhXDVAExKTrfr4tKeqqHLvcBR3NhsG6qrs",
  "key15": "5kdDc18hK9LFkPUKQKDiimUd28meUp1hjVFToAL5gxAMWiSL76AvbKxy79UjjkBey8qNUfLsBMFsCNVkR4GBVDTR",
  "key16": "5J5n33kzGQXSPLLGE4grR1tvdDX6kHT6wenBXJ2vzJi7bRCmoKeAJRat7a9JwnYYSbkE3E1Py6XiFd7DYfkPEMdi",
  "key17": "52sFVB2m2ghRgQRPzYSvtpdB5jTACuJh34GsooZDw7KLReE8PFwgNJ4oUXNGj4vYVnDLzR8dUckWDdQUCahUjMjm",
  "key18": "Hn7xSm5PGPeGFsdU4Vh67gpvWVRVkTSRux3fAZZcMcWkSx3LN87fGYa76K6yjJdcNwQgrMxY44iTuRBszzJVrxi",
  "key19": "4HHyJtGHR74ypAK6WrmebB9BhRbqG1KbvBhVK4jhfvPBMF66HjZa8CHXsK2LZr2dBfdgxVeEcGfKt3kZL65WcLFj",
  "key20": "b7GfKaEnpHQnGwdStT8hresuE9FAd79ry7ousQxnBuXeLT9h8zPFNQNWSDVnCXznSqK8rZXN31m4FPMiF3nDt59",
  "key21": "2ojquLVrVH9DSHXKf46dw54BAhZohaBMNvUVFMpyN7LJUBNdchE58aKbB8rxzFC9wZ8RmS6SfnVhQZX64e12MJ8e",
  "key22": "3DPX93jUNPXKSyB7HigzWUWCw26XgcLs1iWYjwCtgowXPRmmk4rAjRyXaMMJmR8dQXh6DEPSqDq6xNZF6grekoMw",
  "key23": "37LsjUL5J68wVXo12J9KAVhCNxwqvyPLxN7iLjhnpt2372ayg3rc4XXdV2GcLyez1jCcSqsJxnFJK6xswr8DhS6Q",
  "key24": "ZKhmH3Ebmh36p3p3gAuAhA9SGct4QjpvMLJXDqxhmNNkBFzKQ9AwQ7Ynjz6oAJKukesddVUyaqG3hDicCLpsKFZ",
  "key25": "2JPj6wfZR8Y5qsPxtTDCQFZYXS2cAkFyLTg4pa8QsM9BAFPT9Z6LKwKEhoK9H6q8MRHdh5552h5zscDaqwALGjLD",
  "key26": "2fSxX2YnJ9kiCrecaTbJ4SeHb1228mhqsQaaeB19jhV9tnL6cnKGYH9ygnx1N3qbmVUHZ76bs4oz6jEEcAL8BNbA",
  "key27": "3MeUqJxmgncMMiNBPYKt2j5VCsripSQcqCAsQDfUPa5WSEDmLDc2ZB9gUjTs9E9buEier4BDY5Wg9cTMpo9dtTdT",
  "key28": "Q3bAJDsYW8zcDdNhsq5YE8Dph225M6yZWtXU4wUydyi3Y759g6zkYjYAwimgJ1NSYHzAwKqphd2pG5EqSmrUDS7",
  "key29": "2TuaniReQ8KDL2ZxdjM46o3eCCun4Uty4SbN4DsFKQ3etsTcUYJpMvPmtoYkiT75WujqkctURTqYpZ1r5uczZsix",
  "key30": "62PABYsBzJxrwLRfeBkNff841h1rwsPDRUQ8heGyVfLQvEuebqDQMuhqtz1NDyPjmtxeFuEjVMZipFrAkYfKdWzo",
  "key31": "3cAmw1YBKgkw8G6jGZb3x4u8wiYVeokZbXQ1tEEAt3apNbEFTzVy4QEobYSMXw9Rcww998J4kkDQ9wHxJyhvMHqm",
  "key32": "4XFiayducKmqFmR9pJmrBMHZUu4vgWLAFexmQQzPQDfs6o4WDzXFKsJQ7gXGh2opxDSZ72D516tYbKzsVW15iTuE",
  "key33": "8Qj1Z5KGXmPL4NgLYmMH6Fmy1SVj8Uaf6Ku6NqtpAfPbUUnxgQ6V3Wb7LFwbJMbKqJ1Y458HzCr969fd5566sPc",
  "key34": "GN9fdVtjhqs4tDo2vGmpBFrbCvmthzGHumjsUJvGoTLLTMrRWTxmY3sbmEhymUfw3zhNtE46CVANjouw7Hfdvgu",
  "key35": "5BYoC7DprJ5N8vrWLX4LjTa29RqJj7XcQ9J3XN1mMLjX6dygaAAYs1akX3mEpe6Wiakbm8HRgbU47rm86YTHoy1P",
  "key36": "3TzHgBQP3Bia4EFxZ4YuTyfsYBjTqiKY8VXgPyf5dg7iS8znJTmoTNy4aaezFqEHgdzVEKhKbv3xGYMuVoUsdLJt",
  "key37": "2MPN1irJcscbakYCLFd7AGG8GWRauasYjbGyPbTe9ss3373pGMLkXS9dUP8SoTq1Mse7iRqrhvFpHQWkcPrNxXXt",
  "key38": "436Na6pqtyxJhyMbfcANZ5gz2Rofiu6dL1aes9kApGf6bdzv39sAdCRJGhCKeQGNSbWN9afLh2gZx1yGNTrkjM5g",
  "key39": "ztCBXBPp6G5ys5j4UiirAP5DBSFuBsqcpPYygCABNyM9TpyqZBFRmnRH6KbQQJhVeeuUu55n9miGDCNJB8HRnN3",
  "key40": "eDgRYk9ptwHUJ7xYEsLwnjCobxKbKqwLFbyhreHHhWxoWgPufQdNW4Sn3P7s96sg2Fbc5aXYb6qEr5BNACJJjmS",
  "key41": "2GsBnqAzoFHMUG8U1mYghCvkqpCUuRoeGp8EK7bS4dK3GmXywrti1EkW22cC2mSyMfYRchpnXECuusLnht43byNE",
  "key42": "44bF2L4HA8tXQqS5eYYuPxnhcdRG8zVsni3bAmFkZWCr7z3JjWsqcgxLuRhTyXfEomKibRMKaXgFZwN5aZRzxFkv"
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
