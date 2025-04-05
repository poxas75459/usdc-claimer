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
    "npaHK6jfrgKdWHuNnv9iWxMx8AKufDw3Bs8GTZRyb1tASfBmAMKGcFukjBUUGLWyoseB4tgZ1gZrVrqazMffnxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHF3fsRbZhZvKAbtT5LctidyZWDQiJ2JxXccrmdQDazuMiRKcKn8N16uSbCZUzj7EFj4tafhsqwHuvYUujyXvSu",
  "key1": "Cdnz1iZiwrMtKeFyP5gvDUbRF6FerQoQ9AsyQfBFzBYxAreFThEUU3A8Ft5hMCieGVVWqbeUwfHHAAxs7wciPSE",
  "key2": "2uabksrKWwK3TaGBJewpkahPxiXn4RbFJjvQPRcksvMiz6ovT16dRr6ZShcdbeYJKEjqspYSmGsUwHz5Nnm5tCEg",
  "key3": "4HDm8mJQ2qegAxdxkpQ1S6zPNmGywWznCjVf5nuZoBFqZiJgaAEmu92YF3ugbwgt5ou98CgXDv3yN8MBnxB6xyMo",
  "key4": "6ngb5N2mS4bMU7gD6QyXqsLeG6GGU6VXcqteUzU5HdFbfypFAfDuKY7fAELRY2nB9gf3FwDBLfUZ6o8WMP5z6Gj",
  "key5": "5TFu1tqvh8i1VrLvKwpZDej6DHZqfyPk6Hkc2V3PzTjrFsmKortosWEJa8ponE4FhWChG7pPt3SHBKBY786TG1Km",
  "key6": "4KWxRvanZHvZFAGLYbKcRGiHHQE6CZphiZ6hBxr5Arq2GqA5yhX8qayJeqLEdBXng75zg9xVcvocX87csqRiHTo2",
  "key7": "2LW2W9Jq2vrTU7uq6PnGSMbk9WVdhaNjNpmEc1mdMssypWukmJk6qcjMdcmWab4GGDF3E311SWiWYMx8ZKuig4tp",
  "key8": "5jpsbhTKwZZV8XX1XihUZcgCDvCNxbXmDr1ADZxj1JKhwDatwwkyuprnJkfH1WJQqdMKoJrXnsZooJTYUz3MpYNF",
  "key9": "2s3kG8eRNXY7iZ3V7o1wF8qWH9FRTP2KAqfASGDMyL2LuEft5m2Aq2QqsZrnHsKsGZmQDzPM3yWCiX5vxnVbk4Hc",
  "key10": "bNWBdvifsqNCeLehUA7EbNdMJjo55tnkAcNeSocRMzmdNixq6LuqMEaJW6mX1aZGHYoknfTQ6pR1igtLkcA9s1E",
  "key11": "4RfEsaSAyc2suT9aCt2zUdRGm66cX1DTFTA5Lwf8h5a5Ymf2YdbssJ8g4gXjSCVgshGKFB1B1GMQ9gRAG1irKRHQ",
  "key12": "3ynvvGeYyPP5M23SG9rVTLGQEgi6Hqf465WtefzMVUHJZgaxudCoEmuariAjAaC8odH3x9FezazGAnZc2r7PU4LR",
  "key13": "32EMk9LJrTCYybBi6JLGPQtPDXA4addN3L6qfoe1MNqoZ1MQT2nYG4jnvAMybwbbkWFZ1cHwGMLnaxNKDh6JwNa7",
  "key14": "aybmdmcAYYK8P89rmryqkwqNH5C8RWmxvATFGoKEigUsu4jfSqZ2hBaSSqqYB3GskLMpcauG3vMdjfZU6eykXqw",
  "key15": "3PQA2LVnY3WMAMSbxrwdJdzJp6PE3WyjGGtZrvnkY5oaqwPmuYPbE4Dhkkdx1iRYHHdLcf1NVkNCJDTBPJoshgGR",
  "key16": "4ytqsRf8czkHW4hawQ77t99mdRRPBq5JDKT4JESwxw97JQyUGzAKhVs9aBiEfZhMhHFQujMfTcE9nsd6kwgXwECA",
  "key17": "4727ooZjDKeUspcsqdkRz2UWDQLz2m4Cw1XhtseYnbeu6rXnTeTjWXXqF8TmCyahaYMxUQVodvgH4MrtLM3gTaZ1",
  "key18": "3a52xJLRQPj4XhCH9n5b8h718tPxYmbAQo5vXSf8Mmyot1aZbNHci2xS9mBrBYgqnAw1hsMX1tp1xwNFkYXPBuJ5",
  "key19": "37HbXMY2VRG8LiLnGaTQwJp5fqXgJUH9csN3eZfEqBKSzBzCoXJPAc2ZxzKiKfETxo2iERs7ncQ2xrPtpZJDwbJW",
  "key20": "38GzgGgJbxmefsFD9W38wBCb3Fh6MVMPDsfozz1ADQRLNc1wMi2vKbh6BSSLzD5F25zo84EBLPuwBmaMLJ1s5F4g",
  "key21": "3CgimrqWW8kreJLyzBbVfC21qn29KjBF8K9GrwREvbZnEN2dGtw65HzRhABhg7CUGZj7zKgoasyRpxqqAnStQmgT",
  "key22": "216FiQ3ggiV83RGZhK6m6HFDbL6Kyv7AbFNRp93iXVNpaifTcUABJQeZhBGD4NS5eF5iVwQej7Uvg5QouiyfayuL",
  "key23": "3D1eVh2FLQ3nrWBR2qnvLbHTNGNvS6rcKLueP8QV9ZrYLM3QQUEDBahxGJK14tNgDw46hDCHQfuYD9mcYWeVTdJP",
  "key24": "wQs8oDL5Brfif3b6yb2YYGUg7GZSDwPPhLKo4ezcN7xmx2Cdf5oXPxtyP47BuLcYqpTuysbqPyVqrP2qwTPwxaq",
  "key25": "hqB9Zhoopp3pwdDMFaLEot8L94gVStB9n23E9hKYhLuo9HSTkrTUrypBYiUzNcVXTnk1v68tUhHtcAgAtXuqXQL",
  "key26": "fyxA8PcRhxdz4Eu2LVNw4UzB6C4hBpZwd1HbUefmdeFFmMefPVidbZjB3uPFHvAaRKwtKbbADkzUTQM9eTDkrRu",
  "key27": "5vqkVpxhrQo3tZVwGhpjrdjvvDLx2bT8VHU1GhEnn6iGg9z6ZHxB38H3BLFAh68Nm8j13Gato6EQvr9FHb33Be4M",
  "key28": "5xGVSZAiu1N9iVvn36yYZwH2oS94jqaZsVbJVwfsokk1yRVeCGKNAtxEAiKs5Tftp3a2oz8EvcrJStvuRUKNfdws",
  "key29": "5pwzpd6NdUKRmRchpKaE5ffRq76NySNxnQEadBuEs7sWw7cxa1HuCwq4pAifJUPsCYdAKGxsTZQGB1JpBEXAVUg7",
  "key30": "5fYobEgZeAywrRrucKpxEW8A4hJ1Ca6MfTaHKiKjmjcMhEYyKNueXoNXZvNX2uj2kYLuRUqqCensL4T6nNGQuPat",
  "key31": "35rMHitckT4ouHL9i7eRhjmvyYVNLPESMEXRvgmnJ8MvRyXQHunzURd7bFm5Zp7vSmhL2npkhMNBNHW2f4EHyeV9",
  "key32": "3tTBth1sktF67gzHQfWnBGTayCGm2jAr7RnPsbooz4iXKPd7LH7w8xo3uDCQ1s4mGQiZXsBusXhZd6x3zTGT7TbV",
  "key33": "5cGugrHrVbMtQ8NCWvodibhstd7EFXFGw2yP9Dxt85SEzEYCFobNgjXbuYVTnWzFNFmSvCbhLUwExCGeKaFyyPCL",
  "key34": "3Bz4HHprCpjLDPS7P4zcWR944zARXqg3EMJ4Kdxo2Li6FkeWYxARKUPUe153DTdhAbQPWQVPgp5C2wrWDCaHetgf",
  "key35": "2mPQSSAjJqBrbQmB1C2o4FVkqJMui9v5Hk2VTY2YFQC4BhFoAbfVug38DnzVHTyqJn1384R2KsUxgxeLPpSEsg3V",
  "key36": "CtDQWgXo1AHo4W64YJZRSAu3FHQPrS2KaNmkCbqEwj6QCYxMAREwRpWyrZpocRqg26WmXfA1c77XMcUyQXyTWyB",
  "key37": "2Apwu7t8iDzLEJyDcD8YDQvMDWg67MTgYpAgKPqf5yHTWGxeZWzpxJuwKq2hiso5uRew69VzV7HoSEbu9L9qYH7t"
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
