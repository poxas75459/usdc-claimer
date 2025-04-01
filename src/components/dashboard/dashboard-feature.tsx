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
    "5XbuN7rVJErXrpjhYK2Y9G9w6bzcv5ZxBGtHNBEGyWoNKWTk6ureM3u94NyuVW1E9KHDFkUCkmuXhnMsVWHLcrg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BPU9vzZFUCWRoATWbemqtHUSaFwXu33wbimmx6PT9245uQuHHAwFFujoXd6vyDT9dSGYh2aaNzqkPAWYBFXaGi",
  "key1": "3u2sQgLfYbgiPMrvWbm42R6mby9u4AsG7hZtkfLLQAd3RDc8Zr743SqbVKEiw8aQQ82TSqwEzk19i3VHz2kXBnKy",
  "key2": "bAfay45nBRk1vXTqie5kyUQ1EZe7DA3rmE1gfdjrQ5Hj4r16oQyzGhXrvdBFbq3UHAvEC9qH9QuRJwcNHPhdBXX",
  "key3": "g2TpxX8JA5YMeJTem6uHNoCubKYwMNsnx7yy6MxvoDe4Bb8zNVq3r57ynp8eR2M87HtX1tkC81aNGraKywYkrnM",
  "key4": "2VrEfQkpmqf1m89ELheKaoMJsqAEWYou7mYizfq81NBod4sbRCKtrbYxqQ5rKw5T7rviwF222Xx5Qjrwg1dLrfQS",
  "key5": "5u6HJTjzrN4UVKM7PzFtrpV4L9sfS3U6VmfufrP5aFgkBDqQcwk6zQx23o6ztr7TRDxSDd3ywRstw2MP3KKsbnGb",
  "key6": "5eJaEaUpsjWZSbQpUjqBkvrSQMancgMPmYSH6txjP9S3b1GvN4PGWCX2CgUj3BRUQnPEDbpXrx5M4shsUw6pPPkM",
  "key7": "2byyv21vSJR4qTL9cMntsjKEzHKP7vdpvvDWM8cEy8qQt1yLJNfr8SNXdYxRuBYkGA3QPov7wLRkfAcNrSw5s7YS",
  "key8": "5UYBANCLbBsgXHYxcjSjiH18LRq1TRjg5hEaRkvmSuemt2soEo7o1VKfehvKRzJ6RwoHAg9H6JccnpfCobTFPeV",
  "key9": "28C7PULrFHKQmkh9xtb4VxUQj8fixNBnALfRvA8H5QbQVNXPWkQMtitpWSCFCYnYjhAQDyzBDK3MU9KFk9X6hHMQ",
  "key10": "2Z4T3n4FKobH35f3t6ovaZmZUNMJ6Z8Bi4g1YYV7qYGSJo64SJjKfx1cx15CenP4AGGGjeA7MAzBpqE3KGzy63ZP",
  "key11": "5Ei3bq7NebmiqZ9ftoNZSSWuxoE6Zj3PbEF6j85r1d4cBwAM9saiFEQuRRLcsVFkrFTxCcxWtv5XEusZhMP1xjVf",
  "key12": "5t4QLtavL9FR4eHT8TrmEqUEayxHLfUxhMGSjwbtR3CeWbcUTyddXAuYK6cq9KShXiUe4R3aFggkZ1LCi4H87WeS",
  "key13": "4Tjfe9H7yH7p9UMGnCJHanHumibHVdoSEQZmxYHp5nzNXh57xQp4FfFD1d4GGgM7AeNknz9LTCjYm233EwKvUp2T",
  "key14": "2v3HsGRghcsX3Ymqj9v7C5eaCMqeLprM9LBt4DpdJ9D9YwwQjqkxM7gL2co8K5rYW2DkgvMtkiZWgZVsHXFmzjZM",
  "key15": "Ak3rEAuQSdBiJsePu3PCeipYCvJmLRAkYjcnhD2PH4yihqQor93wvwGg547c8Bsj7uPwJmSyH8vgNhNcdxNTtQe",
  "key16": "5uoRb6Z6rpv7AKSEf5fRBHuLPwHTrUMwDi98pHPZMptQUM4jperhX1VWQCVu1hUwtP3q9dU8MH4NVX1PXt5fFGGE",
  "key17": "3V1w6HhJjQBjuphfGZ6LP97beZTCyc6s37Zbutcy6o4Qkw879rVjV8UBBDphLaLe8a7MtitepMhU4aH23PUgeKVM",
  "key18": "61vnhdSAwyGyx4GkVerGFuDuDMnqkdzmbY3WhcL4zY7TLuffDpNy5NYMrFjNYRonqAuSoSPVykNaiLuNDZPViyn3",
  "key19": "53G4boP7pmrMHmLD2EG8JicPDVXBNunwUY7wNx9jqgbjzvqLdQXGmQpQmCsm37GY9ZheVmfRGUKt9mMdKcHDdaa7",
  "key20": "fkU8tfiHHbBvn4oo8V8Rd4UQF2GGrCCMbyJQHSEpohKh5m511YGqZSELmTMkbgrL1nfMnb6brpVczfdFeHSgkUj",
  "key21": "4WoH4m4aYkZMrbCtgjiZDYqvmbrWQuvC9ipCwBAojRTv6SuSai4edk78cuJ3Sc2eDvtcMt2XofKv11bvJykrGUJN",
  "key22": "3ptWWsk6pVn3KtSA1RLUURutM8gZrQEJCLLqiwpmvNAUgRgLHwsoYx7SQKJ2qvoW1SR3jjk26w3E6BqauA5CJyPE",
  "key23": "2Cbk5mJzRgjJ5Y5fZLyAwNXu6kNB9UAHjnVBhDELgZEqey7wCnbYAoBzkx41Jpe39qTQcxFJXmfhJnEWVcQXzhMN",
  "key24": "34uRAMsH2MM5dNYiqAo88TyRvfU77Mbpc4VNW1RDPJcCmJ7DKW9M21HsjiBiBTbPxFPWcyr3UjU5gTyi6QxwddPR",
  "key25": "s95bmcaj6DcUZN9CQzSKn3JDhojYNKhHLDMtGGfKiKAaKsyY6KYicE76xBMvCrHvZ6rKv7DLpjDd9EzAGE6852n",
  "key26": "4f6JWksexaus9zHuv5MhzLWqH3QPqLqVGoscfH1wEzinFcMbPWv46z5GWqKShpjK571BJwb1U5D5iyMhv7ETPiYW",
  "key27": "Zbgvm66ZfwbQmpuQNZBbZLob1KW8LwH8ZUZSBZQenfAGgnDQkNrvAcVwtjKZNuTTzSMbksqGXnnPRB8BHEfmqYJ",
  "key28": "42QSFAY9W2wzUssaRcqzF2d6YgnZg2SYS3VCfW3Um7GjEkAxkZreu17qp7XjogYNcSSF14jh7QkUJJspD6jkbzpc",
  "key29": "2LvV1d4qgNgoTcZsFpCLX4dt7uNqyKLbgTZNfGELcWgKL19XzXVsDhJwGGaBzztAcpSgcqLGVxUCreNL2MBZ63vR",
  "key30": "3exMwu44MpVxPDWqQnBUsV8WV5GK3nRpFyPH9YV5xJV54GzY3jV8WsTwrdxV6Ya4hyYG57p8Hwh8yF3UuDKoUjAb",
  "key31": "wQsrcQ6QQqRiCyzWN88o3cRor2urBsaF1ieqbPiigixw3Z9UyKXMqRWeNT1EhWPn1U1NaRQ68s2egv45rqjEBjT",
  "key32": "4sWrdk6bP8e978RpAJznXzz3CyhVgr97G7XJXYgeZGwUCirzQRTdnAWtrKMKPA8KGuHwciFr5eEtpiWPwkQjpKMG",
  "key33": "4JEU1FZJt7mmBHaHLbEuZunSHiMdqAi8bKxL4o8Nj5g5WomZ1uwAtfYxjkoFKc5STznyyvpHY5kKFzv8oVR6Rbv",
  "key34": "5xevme9o4qcxhmixyfXFWd4ggGg9Wg3WT11qA8hu9Ju9XqxfgAkxSUVVAHNEKYVwf8BAVpxjwdHyK5z6kkPTvdhS",
  "key35": "3DvGaqhAVGSxXM3oiDtX1dFq9MAbB4xf4D1cequ1eKGSbm9ZKkyy4Utd131bhFgg4HRcyzKsu95xeCRkHMcYHj3F",
  "key36": "3vRpvgdYxmGzPARNGXPfqQXhvrNhHA6sixPNfqqpu9ukxoXwRoyC8E8ojG5yivoYJh1w1o3eecCKgTkspnaRJGSB",
  "key37": "5CNirixK6QKxjcnkiC1WuP6MB86saXkEZ4uc2bJsmYZ9nYyEASwoEPddVdMNk6Xe7opEk9hPKDve3DcSpNE8KPgk",
  "key38": "5RdKqrK1dPgGqXVPDboYeYeZPqKyvT7P6wCQmzutxpG1YpSQvYae8HhkJadRAZqBuqRoDnUkCQZGGpjSWxJT5ZGH"
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
