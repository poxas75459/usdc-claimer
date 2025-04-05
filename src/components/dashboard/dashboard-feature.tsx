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
    "3WNQDgBSfeuej3K4i1CDGyorDzapTVMWcK3Qk3M6JaDo1DwkAh6wAUYZfFxQDtgaCLrT2gwjpV5bcEn6zDnGeqeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baPqiqzTPGYWsuANhJJYgjPuwojn9nzzLinLC9nQuiKu86UZx6VD5RtssefG5SGW1kSCk9bmC5gdRBJPGV4jqho",
  "key1": "4FPq4jzHzLNxtGFd4ZpLA79nYs5gpVB6pBytQA1LuMQ9BqoZ3WryPaPiWt3GmePSwyPY2UkCMqphPmABRQ3wT1mW",
  "key2": "2UvBPqrxoCrqWPSduWD3HyPTw6V9Mnn3SmiRDBa3crgvgt1jmgBF7i3o23ZYsjb8PknpFhxithEDR4vJX1gY2HqT",
  "key3": "4LXwrZF6iQ4xgyUMkNhmKWibsDBvgdn7hGGLk7ng6TJXGD3Qm4TzexqpVNCDeft3ZYQqEjMKrSnbjJMG7cuoA6gu",
  "key4": "5RWjjErJQjEGuGjJajHQD2C9r2KdSEybZV5jGTgrecGjyJU7pNL2dByB5AScs3yr1gKkhZF4MJrEGmTPtCQj8bz7",
  "key5": "2fLwJfvio7dzKUmEch1X86uFrEpPgG39V6sKVAzAJqAAJmKd8d2M9gvMdhhCFjZMYMUkkpjHYEiVYjTMs9P1eSSN",
  "key6": "4yptGpUkmBNbAERopdA3E3sAeU4sPKsvocYAhEQcwAH9emZPHKjGuqs7v8PEQVKMrGfwRgTxjureSfkgdRpdxQyz",
  "key7": "3Q83xXvbgyu9wUYztX2trm6be8hjrwmDgWnHGiy7Wm3SfgUBF63qti4gMfqyLdpAQ832RDUx4ZmPMy6JQbSuXV9T",
  "key8": "468fv7Ctpi1S3KYUBtCy9tmh2CzLURygE6iJrzSUNkewX4TRB73U5CGKgJ13F1XwzYUAZi2uovZjq4dYSvJvSSag",
  "key9": "578x7SBqpqC9WAGGgSyCwHW1nWJ6wzW878nLU4ezjJaV7AKAYDAr93UKEQ5FaeWLnB2YZyhK3X25Bb8fpGMZ5EZ3",
  "key10": "4V84H7U6eDwHeoMB5XQ5kt2Lh1tHS2HZ1QQPyayyG9uHeFtHxntQKB5KgmoBQDh4qSj3TvCFwUHW6Ps3JgVPDSVr",
  "key11": "2u2ucs5JVdnbWMNjGYMjsAyZEo68NH4TBFxvMwfum4Jxe1S3wAPGQFXgwXg5vzUQyCuaNj2NxwTo7XHaNDBuPNzV",
  "key12": "5FkrG4k6FcTwERWoRURpS6Gm75ihPV8SNP4FTWRugxTYH6nNZMQTxs58fVS3hUQX6q6FUkczsDD5MXB5f1m9iNUB",
  "key13": "51cYkkaRTMgGyKYLPea4FQ7PLjPdzo4VDKWcXLRuVwKNnVGhAt4GmYX8BGLqAWcY7yqXzBNuDZTbrPQR8SCtYz6h",
  "key14": "5A4jV8uuB2bzjY5FoWcbV1rNTCbhULjSXoFD9mRerGghYA9oiMjp95Z44ekLjPYMbcopJNp1Q95vZdgTqmG2hhHv",
  "key15": "2zHworSNDRNMfib2b6bjByWKSEUwX4qPqWgRUdFkQeXCEvRVL1fAoTQ7puwmPPDHLfSQkUaUByr3oWt593q3evyZ",
  "key16": "5x3JvosshikjLjRykVxH2kQG4Hv4GUDvjLGgZ6NKxK3zatQjvoD3zPJyFp8FtLYkh3QJtveEALWiEaWXoRVt8FDN",
  "key17": "3azmo5qREjq6uBr1nRe1JX57hXzvanrc1fihEDSGtpAXAhHLfYakRPRBcNdhVkmK2Af7rXVq6eKS25uqJK87JZdi",
  "key18": "3dtEzbBnciYY4i253R6kXYK6Eahz8UUBXMWLRbQDM6kxEfm9ABRYrpnBt9LEjXYYwmqgV9tsem8TNEWxt8SvzgCz",
  "key19": "3yjG2n3jr5ecHiXAGSzgTP1DzCymTxx7tTzzbmhjm7DkpnvicijtPjkAbEPkdfUjzBArwrVyWBcwe41k2AksidVr",
  "key20": "3QWQBjzE5fiR1ydszzbAZMB1hTVBFqGdbXnjX2RkZhTrhvxM13x3FytPbaL3BLfXwJ1hXwM11r64TowpndSMgGg4",
  "key21": "5dZi9t3eAqaobPd6DyuboZsn22xPNZALL6SchmMum5Lmw332ZLYgsRwhAUryNDhbzKPNpXuZEqEMYqUfhNfnZj5K",
  "key22": "5HwQajqtxdKLaXxWaU28PmKC19wm2ELajmFQYgmWhCDhLKWsNmwdpfAxgUDjxKDqSVQvLoRUJyyuRF4dzHVukZv",
  "key23": "AMuHZm2fp3bcXh6iSJFcGiKwManEG6sdXEQiD2i9wSKtJec9N4nDukMEFjxPX6AX3gKsX13zGZKNyZMF7esXaiU",
  "key24": "3T27aNZpJia7ibRdtbqWkDHjPwhTqMPmyVP3qNtk923vdeD6ndh7MRwPNsDAmjp4VPMoJbL1xGJJaFffRNSKzCjE",
  "key25": "29pyLUbsQRQQNr8i7JQLggm2pjQTD9MfWJTit31DToyfrmag1DDUDF8ivQWCvu2Vy8sE7ExCxcDfDgv4bP5PiZZt",
  "key26": "3zcREUwPT4azbF1EwhCWobqP9o5HQ62NDw4f9kE1hqh8nWENumfUCEY2TDudRv3zfvN9GYNJjTFE7HTe3uwR8MNC",
  "key27": "3w1LDdnfCdit8NFcd9mNQVU9veSgJRUwY4kqHaPF8KTBk9UHD2mJadYWu3K9Zo2Xpr8yd8eMPMoPMPSSv8FN3NKP",
  "key28": "5s7zeF4kXUUnat97miXMYzsaieZEetfbnosDFid8Xag7sWtZB5PguCGJ5Gb77PezDaaMQHYFbBYr5mMuA2zk7dzm",
  "key29": "47cRtd8CX6t6PKsEQToLJDkJR5ZQoQ9MZB3HQnSEJCPPJpaJRhbiZXUPLnZEL53n8aF6WXuip4T8JtYNZ26AzXtX",
  "key30": "2qfoBgioN931S2oUrfZN4vtU3UXsAChxEx2eURVgMSDw6pn2C1gu9byFEy4Xgop4TMXzLqSpka2pZgLQB3dhzLu4",
  "key31": "3PbTmDCbifqD3uYCpQ1PQBjrwnooFKaGEV7qu7FyhPuZsgrv8tXD9tjnmGxMuGxnwPd5hXw1wJ3bYste5RgdsJR9"
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
