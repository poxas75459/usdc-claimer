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
    "21S6KyiUrrxB5v91x8A1t1jjRieQH4kP3561ADEBExk7h1pyFAtHRa95CDW9KqYgEHb6fYCoowDxeohnWwkEp74x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FwpzY2WDPDWE1mhhRbn6YGnHeDtCbuwEF5SwGkhsgLbifYdMbDtfrCpEgAXFkLnbP17J2Jb718xYcSBBiyXMayH",
  "key1": "5VGGNj1jvqVWZwSgS9VheX9Xa8gNiLzbkGoifs6mLsJsPm5LyEjT2QwmLw3mGfLTvxfYpTzAR8eDB9bRMEBYU8zm",
  "key2": "4Xv5pVCdu24PMncHvM41MnePLmXwJCopuBxbgrDJ2j93irA3sm1dknki9JqNxU1efrvxma6Ue8DbTypsE74JoWWy",
  "key3": "4D3badEjT3DXgJNTxNJ52gihWnhR1BGCPKHzyg49drdKXc1ph3WEYxJ5wDWCzQUCvD9owx6ds9TsBkiPZJKMLycE",
  "key4": "6Ybio7NkfLCax6uyhLQ8ghCtyMG9p1eMRQDTwFKcMYCeT5QSCirUXHx8oWZqMR4RcYSkXySHaacnsuhnHVgiUzX",
  "key5": "2cMS9USQNr9joBdqZ1XbK5YsWnfwy81WVy9BC5ACvcfub8TXhjYqRwNVfMymHKmybxbmerZaUfvefvk2R4NboqMD",
  "key6": "5cGFbvBkDphYqiCsMr7FhsLGvLGms6oDBj1HCk9ux2jWbNnSDzwBX6qXaNg4J1q9EogCcBhX4CPGfkEvQSA44rGM",
  "key7": "2AAzLx6oJXGtpjoLNWHdSN7GoMt3FaBpE9fSQ8PS4tyBjrL46fobFMUmYn7K3hBp39ekX8pTG4Z8FFF7yNYXKktF",
  "key8": "3wqTBaZzGAKUfAi7draQB1WCaamck3ZwXrJK4ortfiz7cuh54wJbW4LiEZWBt5qRrMv8QrzQvaVdBgHCdUc24vNh",
  "key9": "3Wfo3JarFhudmWhBWnzWzanFQ9EVqg1HKMTS3AqyWWbqphShDGtHNXDnduHdi7Q4LY9dRPKkj9U7TQQtVjscTjaP",
  "key10": "3uEBpHJvxPajR8sjpbQySjpBdsf4UsQKAW6vGRzS38RQZWzzvN98Ty8uGN651jcXLxvULZfnuPjXMTPYbKkFMc1G",
  "key11": "5BLjTED4WPfCaNav3qLj5dM7Z7Dq9JX5qtrgMoUDoy3m5Ad24H5CdwEJy3nyV5XAR9XE8WZicnz6jFRNvviGCZp4",
  "key12": "3SgVdCdXjFLa5h1pLndBMGMbXxz98moEpu2qGyc1KaJ5CF4SS1is7aEtmqgLNPfa7wsDqkUGAw34ohegBCPRKVzL",
  "key13": "3mwq8W64YH6apPZzBxA89hdxUTwjQwYAP6kaD7av1vZmJSg6Ycu2Prasu2BqatwAieU5LVKjtx67ksATGq2t9Fqd",
  "key14": "2JGUp6XA511Qs9ckCDcYbujP7SVNqpwdD6FTLDnZVbRjZmEEEv8EAZmXd84KeVuSJSbsy5sQAaAYT7od3TsrbFC",
  "key15": "4NZBdsGVtfmguZnmzGkzEz6UP7izoc4zdoPXdUipm5Cnz35jYiyKxEwy17UAwApAb7LzgbdZAYrxhaK38amUNRrP",
  "key16": "5Cdkk1tsARtGsGPZue9kxCdbjponhZ1Z14o2jFY9bYGMQx5jevQWJ3jGvsg4ZUaDg2KXGHmsCuKBQxe1oMTBQR39",
  "key17": "VxtejFYUyQndckWgYeWr4qmmNsTfixcA1LnPVWvZAxho8WEKE5ab182XHLzjKJZ7kRq2k7V6Cuyw8FHL3EpKj9n",
  "key18": "314NjtcjzwLnxegpngiq1Wm4MqtXwWgKe7qFbd7H1DuxC6qQRHVakNuMndgeQGUL8mZhhQLkpVEuSp6iLwC43WWV",
  "key19": "5uSMNYtaM1a3qFbHhjPrVxw3DP36sVXxWJWuGepGX1fY5JVU2or2DJ9ccMrDA6B3ogjtvDMRFo4oBE1wYkGkdTki",
  "key20": "4oX6zfcD4pCyqAtoZ1GSiVmGABxpG2BSSVdV9QHREvzc4mjF42EWPxePjMuemjRKtxFKnKK1i1unmfWRHe5oPXSG",
  "key21": "5yzhLdNbppYcNzvHy4C8GUf3VXTb9RVGvN3ezMHqkfbR7mqLa4Et5ssnd4sukZLQCGSbdwSnDrKzPjddym9qCfWx",
  "key22": "4wyAqsAzyVso2YK5s99BMcdkztfTGr29i7k64qbgt6e5ah2a2jMqu1YUnE9cxzMmxaDHxkSW1AzJZTVP7HwbzNwS",
  "key23": "oF6KcRqDwmZVjYsmTBLnCQszrsc4TogV31fJVLyBU4wTzJV4nmk7LtKQFD3sKZQZk1UiGbG9QgvMjy5uFutRT6p",
  "key24": "61jssrDGGjsDpg9HGdwXVe9GY2JqbpFATSBu6d9Yt8RLABKgS8VQhfMmTRW5YM1NoeYc4vqhVfR9m5LyjEVQDuMA",
  "key25": "kjdeLbiw3Eys6VxRErUqMRUZChAfduwgn7rzkFMa7qzDwgKNBMQJ8X5D6o6c2aZ7imw9Pdcw54ZUCtaMhLgiUjS",
  "key26": "paQkco2XbnrFhmBxHJMiH2UssCkuBDNcVqFp2em7J3d8wBT7ewGVUM2zCwYcReZN9N4wP1CXjH5mhBAzHL9NgVj",
  "key27": "4Syg3ff98iURK3utgKUXS1aGU9LwwfsGSULq2uHySj5h4zgGzXDgQUaeDR2Z91bA25WyvEiQ8Xe4FYKne9ugyxkC",
  "key28": "4ES6F3spdbgMSraRbmW8uQrXLRivL8ptfHip7tu9iuV6zGXtLN7LXS4RJew6vr5deXZe4ABg7TAs9EHPxou95HNQ",
  "key29": "41QWdMZCHyKGmYa2m4W1G1LCf9D9WSULoHJSUfNAwkLQEvbmqd4uMEU4j7uNuVZsmkZTNXAYNgfvT1VkfiGMqhuv",
  "key30": "4hy6h5uxtdFFVmMXT55octxH4Ef7ChFFXNqndHaPZPKxhdN79evcUUjuGHUDTozmY7JpJ5rHZV9zRGw7DhWJBLLL",
  "key31": "G1tktdgU6MXh3roZzHrcnbHALSKNZ72F1SzL7WGHGLNxrK3rbBR1Ckqy571oRjsS9uUCun5i9puoWJfveg9vVsK",
  "key32": "RN48L5itiLXs1ckDZW7oorPeLdzKCGBG92NdDg8PLzyMSZ6VpEuAHcBWqDT14BdF75yYSiVTUeHLdBbMGQ5gP7M",
  "key33": "4qs69JE1mzAwVjUVFjGWrXCgJmHrWkKdZWBDvMuJn9mpfX1auXgYWrDoetACv1LRd1Re7UBsk8hkbEhk53kf2sJt",
  "key34": "293YK9Gfh1VKzh5WmKh6QGu8dvbXp95Kj4tBp9NTEQzKBdjFZDQCsNa6S3oMbyhykzZS31pT6Eptxacp4xz9iQFv",
  "key35": "3ZzCNohPexUp7B1Lx1rwptMZ1r1fLjWzMnTGbLst5q9Xjgj8e81GpRcJaGYWJeEPENFiLmBGWcqu8wn3yixqM5hA",
  "key36": "3yWUtPpJPbCha8jpRfJGV3rshgHNQe1QDZbQWZWxBuKX578sut3BaRs9ezWe9dYv18NnQrUx7Qmd571bWqXxbGVP",
  "key37": "3uHNGh5rZ9rRHYEJBK2RaqL5KLkMZ4QMkBJfAw1Kc9psWpAyHAhFWd9tBfV9WNvthLxVPSeafHJ2tep9L2iCtvee",
  "key38": "3m8inkRnXaumtebaBJr8NwcfToqHsZyE34YZLwgZaBowQcwv5WygF4pD7VBJuwNQgqkwVLFSMqz8rqwQFd5DmWUw",
  "key39": "3fitmWHGc7JpozTqyZALm79UZmGFmLXgbi7QcG7AYTNLANP1LKKzCFCXSCvNy98ZbBUng7cSEpbgojXyyLhgHoAD",
  "key40": "4Qth1VJ14fiZdbS2i9WvXF4NH2ug4qy7q3KnYexScoX3xyN5uRBobqki9Uooon8daUg6ibjYSomSmRCkMZxuJjPP",
  "key41": "4bxDhY3zzfZUN4EuV4sHng7X3ezAcHfWVcThWe61aqqCrRSqx435u6hrtjkBPgFuRczfbWJ3cX3KbWwi8GXHUuYQ",
  "key42": "5UW2fbhnmTNqA2P8uhbrQkD6XrWCzhYrbxPT7Y39g5N2Z6zuYLQxm8HeimMLqYWV6MJgFKAupEMXe1FayTcyoyFJ",
  "key43": "3JcJy5irW1aB5P4MYpAgbuRHLSV6ha2xB4vkng2zejBN5adVgsa98g65PCnCkF9M2XCEKAG8Q8AWMrKAdU1FVn2W",
  "key44": "2BSoQ9HmhfvasT4CNBXidzgLA7ed51EHLXH51dgJABaJ45JTukEBGgFtGWs8RSiQC6ZSHrqWVcpKbaN2Qsubyu4R",
  "key45": "hwQneauNBeGCEBHgCVAYZJpwyGViovu56SqChYaz4K9tnERh3PxygoTeyDGBTBhB6fncdBbzeJeKKx2UzupsPTq",
  "key46": "28vZW8fQ9NzkVWXE1MkzBY4v8RCThRjtSjMAMAFviwsYEhkxvKktqqJcJTnHw6JZ6JV3UfoXhYE6kFYsFUPBZc6B"
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
