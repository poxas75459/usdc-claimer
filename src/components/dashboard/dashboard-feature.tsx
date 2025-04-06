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
    "JKXRByz6BDTihwaKutswzaaZZhLp6KbB6C7LjS1qEdCYP2HqKhifb78NUdeYFUsERLEzgcGsMiNDC7ubak2L9Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPSKSH3Hi23nZUQatS9P4fq81AdouSLhkPgGA3fqoV9BfTZsSr8wCaUiT4v5jzzXDnk9oZm2qpiuz2gyyowrGT6",
  "key1": "5ynU3sUTtz6qmjXupSdLKs8WMrYRkJFMJn9hpmgcfW1dvXeiy3D9TTXBBxGG1G84fqQrWGNh9GXh5Y5pMMJzCarC",
  "key2": "66fDeBbUKgHNTQywemkZ6ueKK6HzvMFqRwwfEbfEe6TME8fGMASwB6MQpCDkd4p1d9JLte4b8Xtof4kk6ajqe8Dk",
  "key3": "3L2AXcfz9cWCdA6pcean1SVSKqoX5TjgskC7MDw9zf272wweKa98iJtQ9PDcGsLwkWWccyitc6TLcC3geGX6qYyE",
  "key4": "5if7ZpNZtW6wYVMs9FSznbXYuqfZjXzDAk5oLnNFrUzBgMS4B8Ym3cTyShPJeVuTNwANnY4qv8jRegQvXT5cddyV",
  "key5": "2cR8jafEDENwEhxjSqfizsPws8iGm1k5t9qFh87sE3s651qhi3oJF5tMnWBzxkqoXUFov2examJfUMa92dyE1eT7",
  "key6": "4ms8rmfeDf2o3grNkAP5zonBNQenPEzfKeUJ8dDgza1uPEcBQRPGhLVNgC1D8XfE6NAeoQHn4weUiZ3LEY6DMzfc",
  "key7": "2MbvvTSu7HSg9qT3fwPT922VXEbUD3yx5pkz1oivhbFcqXCJowxEWaU7mba85ny7pthUGJ7QGSE4mYEwWmzSd7Dh",
  "key8": "vMBcuRDGZzq9dtb3D9H3J9V1RLR7vQip9E6bMCZtiMrUd3924HTYQoG3PXLB55X2WoqY7GEmWbNGxfFJDTAaKCw",
  "key9": "3ScXuQivQqo46v7jTAmhEGrdEzZ5SXrCGKBPwifmjVCzJd1asgs3xMUVDep6FWtpkG3ELGMYwAeYbch9vX35bZog",
  "key10": "5BN1grApo4fd2fL3oaY7YcCRuLNqaHbGSsaads8CJUn3PVERqZw9jaieu3PTcZNJfaW6NY7zF7cq9SBwk7u9fyBy",
  "key11": "5br8c9GkA3ZnkS7MNUaiDfYyhnghP3e258wVptCKUnhScu1mJxhFoQeVusM9FRWKCokYWDFRKSBc9xQeAKyFY9Vv",
  "key12": "46skuS99xhdcLtJzrpQjirYD7qFMj76N9axQvEnCbG4j78FJaUEhdntU2YFfBpqCYCbY7dvvqSTv5hVH4fMyNLvC",
  "key13": "3mLjBmJxkzRLktfMoukPZ95LEmdqQH6jGckD5sKAwcqRs36ggAJYPpbC2BC5EeGNDgXfBircvz274GnxeywCaCib",
  "key14": "38nHUJszGvSEMNdE7YrT3H3NF8SoeAWybvoQ5uPeMvBcy9TqYrGKphxwFVpqmTGozTCNaF4UR2d5zuQfMzmQA1t1",
  "key15": "2WPksxRMxJQksZVFK9MsPCKNasjYUcgezkaX3rmgwp3YYubfPWQBYeHEtxuxjEoHgdnRCjF8iUJkipNdVVZNdhRQ",
  "key16": "5ePdkyuYUzYjJsT83PF5Sb6HfgWqoGSUXViMjLG9qfNSU1C5sMTiasEVSAN2vWK46TRevKSvFraADkjpaiQZoczf",
  "key17": "3SdbcP15TDDCUhW8u7J6ib9Aqwfw15oG8FHJo6XUSVqKsRBnWedYeZXiEJohWBgQvLnd755PrrH1cSj1hFVqCwip",
  "key18": "4gpaBZLjSVnVYq1JBfHEdQ8ZBLuihH9YENmLZT84ryBZKDAK6TsHUy3AZpbEB3ZcVtw1WRA98LnJNuHbCtut2UB6",
  "key19": "54F1HxkgfQXJeJjggQEAp1CKd29Tn1Gm1i9r9KmNtJZtVQDBvqJCZQqL4cFcvG4Gag8Kjb4hWnBKmkD15sYxwEKH",
  "key20": "4CspKMXtmpniJkprEjfkZcq5jq8m4xxAG2uTMoVAtPWKvHJuEhWNW8JywXYhbEuBdxAVzcX7LPbQfsZPtrty53To",
  "key21": "5TfEQGX53NRQehEstcM4vBZsN1U5RJ5RRjBaQS4eZ7fBqWd5cs1MRT4YQ4LtKj7wwSXuAxUHPXZia5ahetUVPjce",
  "key22": "GJ1c9bf9St89g6mUHxx2RUgRVhbmWMpD24NL8oZF2Zehha3tVLdSXftWo3asaPyFS2LtgGt1nsQBX9mAA2Ez16m",
  "key23": "2T4B6JvCmZpjcNQc8vKtmebvpDRu1k6rbF91UxBsW5ecrvUxz6zw2ZSzPKuM4LCaak4thrBzQTCke6b2N7qwXT2b",
  "key24": "4fF9dwGVnGHyQWo37Bw1oiU8vDgfVLZqeV2nc1FdE58S9oS6UK3bHFsk3zFpoFsZUDmqjkYe7H1CZWYaBFA9GHPW",
  "key25": "XSEAS12KemeRCmoAVyoJGB8w3dSm7rsAfNx5DbkTYytka8xNh6vQG6rnu9cRPrwRWv1g549xQBYbbRWxpuwUfLm",
  "key26": "2Reyb5PetUgtpTpJKqUehgGF4mzbw3dcZqDwjraGPtiaanoB27ReNQVWcJUdkEygt5Hg6H4yM31hWmf8MSVkdcvC",
  "key27": "5QwYQosz8wuaBa6rp7UxQ9aFxLYzP29NhurRfoBWnxmoHrF7c4jAavWWkHXpU47pczxey7nMy3rfc95vE1oagLpY",
  "key28": "5RuUGWJAGZocvxuTXQjkghKR2gXFAu3ede97UwJxpSjX77WLJgwQbBojYHnyKcJWqYgF5sw7JkhbkhAdNvKeNKaa",
  "key29": "ZFr3KqVckgqNNwxw1KEFUuZ6qoR8GSGUnM831EZYtc1EviFugrRpQSbAx24egEASJXA4AWVBtq5YCQWbYNhHfBT",
  "key30": "SNpa1SVHcft6vdpXdByACuybwGbc7kdT6CJjm7HzLJKrHRUUsJZrnfzkDsoh9GeXRHVyq5j9h9NAyC6pUxgdGm3",
  "key31": "4tq37wKawfdTFS7mZ8Kui54S8ttGsQ8m2YznJWTVbkbVFUCQmfaYuYMz1DsUDdRovzJLtRezMTbXuVd9vak5hT8y"
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
