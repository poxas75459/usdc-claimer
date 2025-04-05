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
    "2nm2QCFYoi6ZPuxwJ6wbKfAjQn6QT9gDVFqCfG2gccDPxMicmbQjjKE9CcWjWrjkU3brGRv34G45dKnFp6fshmZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLPbD32edMe6yLzuV6kub5ruxAjPsHZkUetRNjnoSp4ZzU4VcoSE6DK9rFgftTtFUGm9eczPEprUGLKmFP1ASwd",
  "key1": "5tM4gsyZrz5EymZurVwGZTyAG9rTz63TfyjMvvcDDvfqL33uz4Q1vHhAgojBPxtz5RiwyA7PSdq7UjHJtrh5BmhZ",
  "key2": "3eSSZc7h6TTA9SNKz11FjCLT5j1NDemjDc3631qMxj8cDZhQ1fuHuq9UZVQKvjVEvWmJ4EwUP1BV3Zx6hnwhufzK",
  "key3": "5CEKswzrcNwvRbMpCPndHQnvYDGsYSxuqUr7QFadY9wVn9SM6wd4EjvxikerUqDMu652WviuhXBoiDkgN5cr4GFg",
  "key4": "4aEaTaqr32UJwAPtMzKxH4fqq6E7SS427ij3JNXFCRntXZrtTzebY8c4cdxhvsmZKSANaJX2otewWoxJnX8W9VAZ",
  "key5": "xbcDrzsG7q8ce78mAUuQis7VnCW5prBcHuVvaTeuza9PrtsFTGHDuW2BY3m1jr1pDQB77xHF5cGcNunGGFXN8ZL",
  "key6": "Xr7Qnyp5NVqYhfPa1ybdvF6gKLXf7XvPgdjdB6NibQGrJvRbYfPhEx7sSvPLKEnEYW1xCrVUm7QoBE3DZwjiBNQ",
  "key7": "3CgzGMizhBHKEup8edcHsPP8TynhsnaprxFFwZ2yR5x8Zh6N4HZnWzqWFTnQhKdmxJWciKdkUJHMm3eYTWKV3XBU",
  "key8": "5E34pHJnwh6JYgJYnvWgi5M3wtSEWJ2LQYXPtsEuR7QncW199h4HCp8iFiujWWoFD54m9cdWqieXzqM9JBu1NduS",
  "key9": "GAZkXXEDPpmNw88Mn2ZxCXPBdzeA4onmFDWtRSMLrMGhhgFd8YQfATZFpj3mgLP3S9rETb2PF3A1tpCmRh4aYY4",
  "key10": "57DrAvGqoofAGFpyxJ3FcSVdp67ApkU2iETjcS32ZVKds2AiRUggsZFJGjEwNXbTUWnEzWs9sVGSE8WeXafWk4dk",
  "key11": "437LVXsecYbpsXY1iC8LShp5y5mZKM6KNPJpyTPobd689rB63GgHaL6Q7mfZeGKDGZy6Z43w3nscVff8FcXtfRxc",
  "key12": "26w6eopFMfpPdogNoebUTMLr5sNgBBi8jNvc7xzZ1qHiUZZQr6hQfv3Hb5gUfSpj2EszCzqaSoxCzAqLhhY3FLpw",
  "key13": "8LtYa8YniHFn4WV7mUu3QvxhYdufgNHQrWt2syz6BNHSx5iGNMVBUHJko7kfDsCDRKArtzh1KxV9rDpoug48F15",
  "key14": "2SxUaGeVHNyisa9QCQGiBgdL7ws3v5BPhCy4w4wHf8mrmruy3BhTc8jpiymQEwCdNmrMqFZ1mrSoCR5ZqwB9ynqK",
  "key15": "5h72pcftAf8rjD4GCENqUT563QJkFxgv3RnbEbF1XvwCsYcnz2itLbVqNVmUq296s2dMLNZDEiuFZG9vM7jbYqqm",
  "key16": "wigvsNjHz2Pkp212F9Xgo2cdF1bqM5kx9WLLjcQYqYsycfi1kLwKWX4CrFeRcTkrust3FyZKebkt2GxPC5UwKnN",
  "key17": "2AsdL117g8B1jRXR9tfc4uJSNXsRFZWbx9Ja9CEy8NrN4ukwh4MRSfECkAAQ3M9hqSRCJjNC7aaBeAU8qTKrt87B",
  "key18": "4s4VBox9AvDNjygb8pRgLDj6ZXwKwpETtEVHK3jCKPsbRtNYBzhPubgXntDJWLAQwtexanF94CAYggViv2n28cRR",
  "key19": "kafZCFZJAnwpPBcq1nZsVDNeAJ4Pp1iwa3hbomBZXeFkpFx53KcKnihQGauyP24LjxZsydzcKDUJoebaVVMxhk5",
  "key20": "4K4Cm993TWoyL4ZnHsWYCRnxNiTUADkxE5NGP3ZqRRMfQr84phn9xDDofqY1ZcnhRx9LwZTKSpwnCeHhn6gfraZq",
  "key21": "5KTzYZiuGw23bGvtPtrpxZKsKgvewSigLx9qvPZLZFPS81k6UM8DQXZ8eiLe8dbe6dfcUKLz4v1TXHVRLRQAiqoj",
  "key22": "ASS4N7U7p4w4wiSdcmzTHfH7SSSoU6Eigu6HVfT974nsoDzBtoMagQYVKLsatdswHBpjXp26dQEzRuC3meMBERo",
  "key23": "2qccRNfCzAmWWicisuMCSMwGirBymYsJWvaDnV55TPsNwyQ2Zk7K6VTYTFp6pv4Jhg8uiUzxEbTZFChTipABBZD8",
  "key24": "y1tU9prajEMxkDPpYe7uB6GJxex7aGFyBVmTWfpW1p7PPmg17GB9zGeKTLWEDZApiQGsyMbSbxndPsLCzEMBcQG",
  "key25": "4JbePDA3U8sueScbzBSicMwbW7owgdzMd5815PT5AQje1P7n9TPJFSED9ERgG3fkaGgvrXoqJ21cwShAYLpLh9fR",
  "key26": "3Hf1fzpzYx2T3jdU52RSa8m9bf8VCfXCZ5TiaCmKvqRoRV9Ti9TE5sbb8MTcwpm8zQuXLFqWoJZPRxoS35VUsAEY",
  "key27": "7neBma466F2CmsL6y7WZAis3QboEZ9g8WK2Gb7akvDTc4E8Cb3p63Uqjwyv7JJBQk1yQTguA1qwPXsGviGjNNFZ",
  "key28": "AxrojDjiK8FVkcnd4ne42hfDtykp3owck5AciDK66e9EQNrUaUAgdNRC13sqmHJZ1EmzbGH62B7tkf9EANLKXLt",
  "key29": "2HYynxqnbUFSoDocQyGcLrMnQLRb6T5TkvpHXc8L4eHewNo3JYsLNqhMZbCZ1mEbZLH3Hog9XJ7ZsjUjjEJvDoD4",
  "key30": "3zamzXuHSrtFF9AgFxCwrEYUoiNKXts6cBZBkKz6wPJ34rY6L4dd9zmCRk6NhRAkGgfxuYGifAyPKkMrYiWBXY5d",
  "key31": "3d827g8GBaQ1VxVpLiK5ZX3YNheFwg3J4GmbhdUxAUvHnyKJpausT62zbXarzWXdyLfBxWCGmo6QZGwX7mQ27KEh",
  "key32": "4bHKHt6MQrM4PAAcBKeFu1Sg66QzZuNDC2avDkJW1omVBkTcposuYjfEjqX7caY8h3UJqnKEpzMpujDf3YJ2wpAn",
  "key33": "3ocMQnrUqDenJWquA14QoTm9nzXjRNgakFxggbkJ3pN3c6vSkaXYcce4EWQgdonhjVK7RTjbtZqj1bviSAzPUyA9",
  "key34": "3udFPR6rJrWJiFVn7vEEsHta7VFc5B2QvxQVtCs5RvpaD9BDQKX6qgtCt5QZncnPE8uU84PHE7aejuUd1aWY6APH",
  "key35": "4mjt6oF5pKHRZhWHfHqydducyXuGoLmFfBivS7NvQVHhF4WjFidAUNTNPFLnanJa5TiKAF2rdaoLu4B1nTbra6WB",
  "key36": "2pCj1nuYYxi1iaJ6UaBwfjrhdK2JbTsSiqoZyEr8vcDnFxk6vbv4A7eff7CimD7mbgkYQPkQbigErPDFKkhdCFdf",
  "key37": "2HdhZP85GssvHXePduKpgSfA3TNumb8Q1zLJpQGLsXjTEbxgyzYtSinbrpJFYrp2j9iAaSrpgzp3Sbpy7rr5GBNV",
  "key38": "4YZ79goq8PfWSNEWWj1xZQdQKe4JnDQN8WBwHPsAK5ZEnGgHEv3HbR6ixBtyNh4KP15hUmxJ8fSQCwWf95McmB4C"
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
