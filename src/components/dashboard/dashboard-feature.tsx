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
    "2f1r8a3moF5k67DYzcgmEXxjCmLUXqq367Q3Uh7XKRbQF73mQ65u2vGMvD6N9ThhZ7S8SYbs5fKNQiypkCF3AL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xqHioApr64EbCxjyxLeuFUsWTiYXq2t6Jn7JoBFQYshTaSXCDY8iazdDFFyB1pRojQR6iSetvGSisE9Yj1rnTnV",
  "key1": "59FZVeHKVspxQjbsjrRksCXWwmDnRKdjDbvktEDDvKwy7pVM4eNWcAqNWNYaqfowCsMQmBqKdxZGGjjTJ4RHMZ4k",
  "key2": "3Jk3xbDE8BZu6BD5S3anDukrJCsxstLN66n2H1hM9ZhpCbpgJoFzstw94p1U9g9NpNgTPzF8aW1favm82ZGJbhhF",
  "key3": "5kLEiATTK5wJokJaqYZKsjZqfXhRePJzsTNoGERzGEBhNnJqUCrAsxhBxGwHhEQ5SzSWDkQa1wDjimev2xRKSW9o",
  "key4": "4Pogpxyp5WkKgzP9zPq5J3LouZhtdG2jbaPsRCiuNZue6QVjWieeZAtoNjMfBVKZMi7seTc54Z87vKjcEZQ9wzmg",
  "key5": "5QG6Kj7Cr5EUghF2x5c7senNEmgpt83wnjwvkJkbKq2YtdsXfjGqcN4GTvA6g9GSy1iEqJNEVERYDCeN8F6ajKHN",
  "key6": "3QkbytTYasmuE8rfMubpnAEKqr88NCVSnmPs7eX34eRXAi3c175busqeRtg4kA9Y9pjAcgccjb7pFgYZG2GLVEtM",
  "key7": "3cuBnFnQ6EzWLq6vJpvq2FrM9K9CQMfcJQNDw4VEgScEUNv4zhxWp6bsNfaFeqhGmHXiNJErTKdwo3q5vVE2p6Ca",
  "key8": "2oKEdZr6U93weCXmPPJqsyyY2iVg4Vp51jM2qe3qcNCZ613vAEywDZDNQLxXswaJPmSHgnDSAn62DabYr6Mzd7RG",
  "key9": "2ksgkXfmVrjCLjBRtxfancmT9TkNvVAivNzEbgBx25cgSa7EQTLgCzRCwpTz3hB75GVxQv11FsaEP6k53JzwA4HB",
  "key10": "45CQ6AErQMVwmUJHmfCeCYUYEAcnN33mUijJzgdnibLxtsYA4DshcVVoJF7ze3sW7cKh1SMwDRijYpFgLR6aPFg9",
  "key11": "4vRqL4qzxCUNJWMaFVoUfEC5teyWReic77p6vGeKARpt2W2gf6beb7rjVcGDoK2GWg9p9jLdRj4Qz8xurA41R9L8",
  "key12": "2uZsiNJxJLVWPhevAG3cTCwR6n9FNVg1GLr8vnQmoY6k13C5RyX7podPmcgZynaFEW6fU9ND1PSg7fvYHdGzVybu",
  "key13": "3dfM4ev6d9HrcYgJDUSTLSsqN841yD8cCJZg3muxxm8YBYoGes3W2BASPEAdFZvSnqfYY9TwYWgVdk2ZDYodCMf1",
  "key14": "4GM4SRqk4EFnD9EJtiYjTLnE1tvPNpAAeCvNNSo3vviKU1WyjoKnVUdkoojGY5gjqzeDNPuusAfuqYvTco2V6YFx",
  "key15": "4uYWCoSLrXkAiWsKRqBoH3SuuVktBpkGpz8TV1ivQXCF6MUSJD5zoNfahoe2cgb7SCS6wmMjMpbLCfW86gsi5dPx",
  "key16": "54rCX8A6J9fjUnukbzHnBF5L25qN6Js69bYLPhcJyss57k6NopwzSj76UpujWgYcQxhj2BfioiKsnZ5KfUHBdMcX",
  "key17": "4vcj9TgMDdB9fVCDx69bbpRHFNNgpA6XHKTtJTAaGsAoioyRxhibbLEsk3sPSvoZswK6fNyuuHAtNuEaWjGBbWkg",
  "key18": "4SGif38KZGTSTHPArmfvasDvhFp8vABTu8mrkDhyRwzeBqGEUSueUqQXzQh2qZqz9QGzjJDsDxykndHYrTixfjnC",
  "key19": "2nUJqEY1UTzBn1NcszoZ8qafLSUqMPG154V7cGCN4LAngKzz72DhAiTL8JtUjfKPfmpPo9ZKCgQwYjH8vD3FnP8W",
  "key20": "2XUnNoiprqCyHxUotTNHXX62ConviFKMJN4qSjVL5U9soTzYKnGSkbZZHRYYRgBnd9zDTWTfAup4YCGZXN3JuFZg",
  "key21": "YcxMn7hRhu29KLmWKR6r3fASwer8xNb5V9YGUhkbM9GPgTP3VDUB5jdw4L5tDrULLu9jTmCt7ZqXatwhQL6HCUL",
  "key22": "Ju8BrD9CbihiGdZ5zhtHHy8hoWLcPcHVMVzNMEnDUJLLnCGT2LQ3TKC911sdoHF4epcqXpJGhuQT7q5WMiWN324",
  "key23": "3obY4KWYaGuSADfJNFT5hDCA1FDzz546YqzU5MewGBk6K2rp9hKVVNtkot8rtXx6JXXzk9mQp8UTa2ivAxDjUzYr",
  "key24": "5D6tYBAbeLRTs8Sf7GWqpkA7bytgnYdg9GbDFoGDtPx9TJqudcCnnHBZNypNmYkLX6W2ZNPmuRGLsqE7cGuU23xj",
  "key25": "2tdLvYibiy8vbGm7EDYATYXJdsyDYsSg8bM2M9f9XFAUsgiPUb1ZAeUy4HF8UPaQhNj7cMgjoDKkMmFBhVRnhTCN",
  "key26": "584toxFYxEn7mAyct55zrjcvpEeS1hJRJz3KxDZ2w6FcmhQCMynm5J9ogU4bD16ceP8oa3QfnkYa8BaZvc2JrJGa",
  "key27": "AhUgJ36AqjVsxn1BfhFPLMkiwyHGHezMXLFhTvormdYUKUSATeYKCU5GXcrq9yK3ffnGqAUzQ1roxQfNg3tHqGj",
  "key28": "Vw2L2yf6HzzVk27QQFsTuNirv99qEp1j1nRqGJZjFJyZhPDDoXHhKJ43AvYF4myxjjSquKdqT3c7LVJL2GKBGaS",
  "key29": "2HrLFRXucHeaCE6z63AjPT5XRjdj4esnRtw2uuGL9Sk5EwFBRKVRCdTSEZ88qWvLgaDfez1Arya8BAyLeam92L6Y",
  "key30": "3NJYT5mByuHxyfNJ6Sfwjx1UDbZEqu7FMdzboQPzX7rVmAmYarahqRF4wJp16XK4mCLkwwCLBDC58EZQG1q6WaA1",
  "key31": "2rki4wRLumGLmXGVh39xb4t4FKqdMWsNm5mMQGCcDr1QwvoYDxnQU8ygzUzngEKw4hpnz7RzxKknVzwjjyrGS456",
  "key32": "kLPNePRLUhcoZL7oLJFMK7hXY9b6KFQoA94mGv5iDghGjJWRLui3cebkGDp9YM3Sxpe6nG9CyefpfnTgWZxrCEm",
  "key33": "5fHxQ6gsGYNPpjydFgPsZpQvKqmYnsTSenzqCuyDiNdyudrtRvfDHVfMMRrpQ1AVhZLDSbgi4rvxE8A848H89q1D",
  "key34": "2bKGYE4UidTPJQ9erG7h3CqSQ1tX7URJWvPWubk9eQYW4RRLA53vPfdmskjRqbFF6y9yvC6P2QeiEDwQLDHaFKKS",
  "key35": "4MKLjyT2bzwLwxpFqdYNGhu6aZmpVnTkgu2h38F23d7FmJGCUjeey3JJaYvR82JfEcaXPrgcrdZEQEUs6iWhqVVP",
  "key36": "2jm9JGQzELx3B4kfx8rrRhboXDMbcHdoj5cWhm3YvMQboZxkv2A5hN9ZR5GEW51m6HuKSBNMEfy8WMisPfeJsHW6",
  "key37": "3H1emF4MicJtbJN4cn5UxxfW1rHrBaszAEANqgNhHv6G8NRChGkjcnz2HBEGvbEKGSkC5pdeWABGFW4zc54vwRFy",
  "key38": "5V918mBMTHzu8s3QFSbwfLdALgpTWrmMc5u5tVJtW7FZQRMfv4yJCLF4s2YwhqW1oWMhN4nJ7ernbyap7vCi6kwJ",
  "key39": "3JfuiVVrnf5sRx7qCLbTijdveUMfvTYJHT8pdnnAwTrvYSGrQ3PyvFhFLdAa8pCvDXq2hQbWfhoJFsTSTJj1aQMu",
  "key40": "6MmnG8BM93W8GCreLUSsJABSzDiKFzxE52CaUhND13CH1jQoyTwP4qwDXVCCscrEGzUwoWmLRxfXUNt7s1V3beD",
  "key41": "ryoHkAyApfLCvv9vRRRv2CLnQnDzJ6UBn5fzNCcuEhfPp8qWaN4KkRnf2nwPEK5pb8FeDyBzvZSk8sZ3WYB3Lsc",
  "key42": "2bM7fjw7Buu9FF53NLibr5FKcYwLP2gKz8tNrww1EZ83b6T1ARadR17d1Au3xLNJyeKzacG3AqPmQbDheedT3cLu",
  "key43": "4QS1UUxcS9koQj4nsztBZJw22uaos3C2fonfnXeLVzoPUxSpw6AivrPBmPk56scVSkwYBfUY8oPBsnfBtPVtJDBY",
  "key44": "3XNUsZVfsLKTsa26xik7FsbvCeBmFXAhuiBLBXC8cHGuF9PZ9RtrDPbZUCQJoou6d3Fx8mTkrGndxBAUCdyfkngC",
  "key45": "2X68NtoKNWu4v4VaBUi2QmbV4Cotseaq8EvLfhbWinHHMJfaJa8d8aAyKA3FYKm6EYr6scwx9TSxzHgwrWc8W37W",
  "key46": "66EGG28zdKZPAENzMXSHMPH39RLXzySZ4QWaptbTTW5BCQVHb1aJWevu629c6C1wRnzyA1zLDZF7BCVCcPcoZUjS",
  "key47": "gHuhpQoj4c6qdC9eqnUGWDFzzdRSXDrnmYD6Q3WBQyLs4BLyKf7egn48a1CzQCH5uFtsfVSx1VAjLJLap8wMm5Q"
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
