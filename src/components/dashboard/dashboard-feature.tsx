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
    "4YzzWaUuhYRpzf9WKkZmnRdZue8xFs2SLV8CMBfUbii7MWmebQgCWDx8UEDXBFHYQWJKrXNXf8v7VUG3zUCnG4jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vWciyDeD8PH6gB4zBL8YYcNWakvemRtUn2hasBkeWRaqi8eRvMoz4ULpoAXbLrvce4LtEZXuVzQPBmZw8KsjhB",
  "key1": "2QmqGummZs1nEoPM9z4hqv6Mg97n2YEC13p5wowZqV6Det3QVjuT9YAuTiaB5oc57oTHZhFk6gYgEbvTeUc24Eeg",
  "key2": "2andWKUYoacDdtLH7QkiqhvKFpSHFp4Jnzd9bWtcBtfyiqdq3F92cyQZX1UnxcnNTw7WWV9um8tDy1LgWgFHB7p2",
  "key3": "55Ce9hQ8c3xAW9G7EGQUk1Hrs7sUCufTezBXMK4vFAUVVQkcip242ibWsxoaVwHXZL8NpcyT45qFFcrUJxQCEBvy",
  "key4": "3dwTMzgu2Mqsuc9PuKmrVaaXqviGXCz7dmpTACRyw3iyZ4SvKraEp539H4A11RjnxfKG75CAmZntV8BDKxscb8xS",
  "key5": "2W6cNrZJnnsoncu9YLwNRopGdS28aVsRQaNwqoVfhGUek1ABqryn6CVuyxmTXvPRSQuHzi8qeM4hLsH6yegbaMnQ",
  "key6": "3dEJvU9Y2b4Gtgq3Xzr9VoinJMZRP99gzj4EoyA6zbkhRHao8X6Js1TBLcpaq9hG247cBALQrzjkRX4S5VuMc4tc",
  "key7": "31bfkA6DCWtMfmcEmRgmd3sx9ZjkhappvMbZHJa7VtVtHAV5jpMChdfSJYvgJ8jgL9okDNtSTRzxnNwUNAhrFcC2",
  "key8": "Jb2Xj2ncZ2hpgJLwchZJAEp9XUhNs47yCM6kw4ZmbAZqRjytb6kF8yJP6S55kh8VWBw7VYNTpTPJ4isFbLeNfTD",
  "key9": "5mwU8sF26ZtUzSwE47Zecue1a2bN7ipNhW5h4CVToRnTC8GezDADPm9FbMxGt6CngYddjxDYAjKuoaExodBWQHcC",
  "key10": "4urwBi2Gt6fWhe4hriGZSE5hqNVw1DJ4ej2sS5h4MZca7onax7HgPpfpgvsk8GHqKK7R4xBY6DVc4qkdurQgMexb",
  "key11": "3j17gqeHvzjgzap9SUXXCxe6S1nAm9RjK4PWFXcd8H5MiZ5HwQ1xU7Lh1rRBrKEMfYTwYi4A3RkXvbb9PJhqX5cc",
  "key12": "3B2qa8F1md4wZTiu8K5zCqxUiax6v5F2NWDsY4k8u4qEHPS9fYLDvw6G7GRXHaNkwuJV2F4bW8tcYcVgPgkWX7hq",
  "key13": "tLX4uQCAfbS9SY7jybjfAaZwhtg1FB5DsjrqYftVvMZh7Vb6jUnZc49gzJ9wqs4ecXqM2CnuzeksR9f4RPFE2F7",
  "key14": "nWjWzES8igzMjbbyRoEDuvFUczQMkXhKyVXuVAv9KFRDoXhi4fnZFCHAzkSbXMHR3SLLbGw8fjXVcBdBjNafV3s",
  "key15": "4Trb8MSmXQxYF4BmBvkUaRkcNiRb4mEwVy3UHCWXBoZfr6Z8UxtmXoCRHBAA5sBbdfK7p7BbR9R1mpgQg5qmBLZQ",
  "key16": "7huqFdXdWGWc3ybMo5iBxKQA4bh2PUmMeno9kzpVaB5EWxP8UxdRsyGFDghuck4fBpykFgZzbg5Dk9ZrmQR7r4o",
  "key17": "2NoCvSMSBGdZjx3fQHwgnQCkKZQW2EFp18gnvUnWuTeQCiCHx851jiwwC4nyN3X99uXDEPzSZtKNrrK1UGRrupVz",
  "key18": "5eFzowr6CKgiJ3qvSwC5vJtZWJiv2g1qZhnNbt2GXBL1DCgaa85YJxwcUD8VsXx5ufVr13CSmUENp2EATRmfzAif",
  "key19": "3c6HUz85NHDSgY7UUVzmzFYN1zueVqACjqw5pUwsRDMpHatKMT8eDTLsH3vjwW66gdgBuoZ2E9cDE3nJ6MGD4BJ6",
  "key20": "4y6Pyheyu9AQ5t47sJ6NCWDXwGZQgRVdPmxmC7y8aLGvqoRhEimaMwespb82iWVSsAX6T2pQgHyB1NseFoaj5KX9",
  "key21": "66t8HaFn5sg4JzmfoUJFVsGn6qSr11zys5gKZfYVXF2yLjGMkjK6Y7hozoKJLMhthoPLDS43U74hR19bhTkMpBtu",
  "key22": "2scfrm99QAuQuLLDR1JUYRd9kQbXzeAzgBBWMRo68yiVNp2vKvMnG79HuMD3rR1v7SeNDJrkPTivFr1UWybzmwd2",
  "key23": "5GmwHYjTpDmeKNwmyMNPg9hkG9aFJVdfvTEQTSDoXhyfrFsxHUFgeHhyhZuFqC8dJe1awpua1SDKdWKGWsak762E",
  "key24": "5GGPpdX9Fa2UENN121CN5mcRHvxtKsi1w68pZ6ZSKH4rz2nXJVaK4UHGQLaYBXS9Bu5zH3kWfLt1zvxphpQrfott",
  "key25": "2tHdjpB2KouUaKA4SY4S9n2dtiN2TwkHFBHL64Y7mUX8ACeZznpt12zaD3eKhLWJcWZT3bNi7eVoQw3Jg39tcCZM",
  "key26": "37exfxbzGKUp1UoZAcceut52k45tZFiaLRuNiMtB4heSWDk4aJr4SGFn9ZgEfnKKzQ3YzzRTD3U48rHTRZci4jYu",
  "key27": "2xPRUjY26DFXGSuQedxQsbsKF5FtxgcaunS2rfDucmiUfywqSX2DNsdLBLSt2VGq6q4MKx5ujiYYSVMe7jw9eZcK",
  "key28": "8RYPEwh5VcieyogmZ7dvzygx9HsZ5bgT9jtvAx2r65UAXmRJuM98VDszv9t7PNzb6dxR48cK5tioCWNjm6tBq9L",
  "key29": "6119SvPibSzDLuLpLCoBrkjkHFctWRFMELVePFqhsmnw2CU77qYWYcLLQXmEs57uJRkxHYBLMKctH7qBTsMzfmNM",
  "key30": "k1Y2BNmRzrGrMi5XB58q6EU4wuD1uRgd1fvEQN7f6VeM9zQAbtGvQGCQsNZJmMHDohUsS2T42dX9dKrZzqGhX5r"
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
