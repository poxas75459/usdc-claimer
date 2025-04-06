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
    "5VXhpAKj3oL4eHA65rJp5isRVvepuyfFUY9mDA2pwsYw7zfEySYcbJts8Fxtpwmbr89yCrGrgWLosgwDXpCymDhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuWFjPrs2hpCaN56Yxu4fycRdfBLPhyq8Zyqd22SYUWh5FkXzCYUtqhfXW1Jcr7jeGthBLnhEup2BoSzvSELnUd",
  "key1": "ki44NeRFstEsxvGLPUYfmuJGu4VBmT3iqxjqovwCooVDpKYZzyktWa2YCternKcw1UVyiPiaLunmPS8YvRoyHtu",
  "key2": "Yfv5Mh261HhCo6xNUg3huhfsrvjZmkCFbPJfsbfEzr4phLSZmY6GweqUREgSM7iAuX7y6mH8SsexSVjL57dcVNV",
  "key3": "3GB9seRRoopzRuKk5BpQ5SSddjzwz7qNL8VXEravwDaFoRddSZcpdM2DsjZjz9capofbcJvaQ3gAsVX95JnogyYQ",
  "key4": "4ZxGPksTPodn4CDQQ31zwiJK78CPXCi734L5zvdajBCvcYtbJJDJNPNKGz2VqZpWMHPfNg8MpaQoswmNcivtM42N",
  "key5": "KVnzfwVMk2gMHUAUCq3LpM8cE7GFZgJFnj94AJZ8BkHfDSw3tuDW4NktYwgpRmSB2LypjWkbcaFDFnppAoUTA2a",
  "key6": "bZKErqtMCyPeWRkoKf6cKWpNzpaZsfS1eYjy5rvp7CTZSPxeaZoeuyoSPx89oQuAVJzYFdyMJhZhayrzRZkuy1b",
  "key7": "5nS1unNK5kKWdRynBEkv5gSza5m5DQBtmoLUTUv5jCELSroXArYjnWFmLwRgaaDdG3P3NpVknabnrVPGTefqLAMt",
  "key8": "4BC77kY9zWH3NrFcLxfTnANidu9Ytt5wcQgjgHFdMxboXNvmGFz6Df2EKFxHjpoiRsVLHWnY7JH3fqhgqnFrTC9H",
  "key9": "25724H5ppFs2db3vGdjs9QdwTfWJBS5n3Q7kma2qhW2GVs2FC5nPpqYrq5sHyYiki7bhxZ91AM1xE5TFws2GQoU2",
  "key10": "3BXvfQmVdNY6A4Jhtaoji2a3byX7qRkhQNe9hBuYG4zKyLr5hQbQ6NGpuTzSb8ff52HJTs5QjVz9HNmnFTTCTMFM",
  "key11": "4cns3xi5mSaZch4c8u8ZDB2MYob6TXSvgGLQhT48y8YWCtujuQKXJM264iSZ4Y2ahTETUBYLviX4uJcgmy44TqEX",
  "key12": "PK4H9eJjW4DzebPvBEF9iXMfWmw8XQSYMKpU5jrCyPojwLGaKTLuaqt1vEJftjSgxXzKtnQ2YhfQBWocnTYVCNs",
  "key13": "5GJTUZfFx3M5R1eCeDZcpXzPetDSNq7TNoLQ7PBZX5G8GY9aRSJpPixN4cnhxvsnngzxkLTXGM5wiwyzkgRxUsoB",
  "key14": "3VUkBXzEfwYskvQdgmRzZUWRBi2H9SeJvbAoKKj2HdKTk3m4N1bz4E1xKad2xXLn5ztFxduVfE8rpyTTmkDx83dk",
  "key15": "3EVjjU1h7GS6VYTaHJeJj9xogjY5tmyihd2rK5VDADgpGCbf1amR8NKGz26y533pQPKAc67HQzrRp5YSvYFD2sjy",
  "key16": "5AGz7LuqysS3QfrYM2qyXV3zDm5DmEmM8K7RNeB71us1FfoDhkXZv9D56zYNZsXRBQLV9bR7PasqRvitTpUwzFh4",
  "key17": "2ef9yXSRUhHBFmUYWReCUHvu1zN9faXmufpsfHZZ4NUQwtmF5ivrNv9fnJvfVi2UapCqiq9pbCx4pJi9gSjpau78",
  "key18": "4aWz4342BCjfJzTURmAbSkRocX4zouTTn6S1NiwqaFSETMrkkCY9np5ZvR8p78Uczyn81eWJ1JiKzgD7hp1EBys4",
  "key19": "5rF631CD132DGtLRioYbZC3CpQqFJ8SthntML3eRagDZzxhbK5BCB9E5arfHn3iZE58g4udq533HLEoopxChMhTY",
  "key20": "LeZnaWcQRjzhJ9VaXMfum9JDXpp3yYLxPZXAoh6TvN32EZTFR25X9mR6PSK28ABnRMBin148ThTBKWXB7cGtXGk",
  "key21": "5G5roo4gtCXg5We6zg2a2frgAFErm58LhackiEyQhNT6mgejjegRWM438Akf2FgAU6amvehejr5RYHP4frbanZXk",
  "key22": "5fsPqEKWDHYNapKzZ23u7UYzjGuGjV6F9DvuNcMMDrwEUnEMZNazMnEnRSpcvWmgqYL7gNDHFW1jv6HSyutDzYVK",
  "key23": "M9QeVjCLVbvTrvaBmZKSuFoUXaFnBC2qjrhSNaKiSGR7w37RMwRHrSS2tcD1m97SiyvfLM5dbkRMxNfeXeSUswr",
  "key24": "3M7RYu1ZFrgzQYix8bxd9Bccq5d8PKFVp7MNKZnPCjEHdZLQwsruuXCn6uofL3YpYp5mfYdAJG8T7dPesSm7J4nx",
  "key25": "3uMXqnZRg1d1Sf92pn54Ea73h5896oKkGPPp51MB3HtVeS6BhTZn7sCGLhvAFoPv8DHGTxYsNqrXxRBYdmpwmkEA",
  "key26": "5TngTHqvsSTDmEQQXso5Mxsis2ztbH5VJpCctK5DJBPDB7swe6SbAiY6s2Dn4S5EUSX5x8bzHF5eSg6M19upfFBq",
  "key27": "7v9m2gnmvoqW7R1pSWGoXDsvtzbUQxYSKpyppamq36L9EVohv16JA9Qq4obb4xozhG6StywRt2Pq1njbKuw5zik",
  "key28": "43oGbbNV4iTXScp84FcHuY34XqLwFQsHf6yyRXjNUevsRLgwk8QXZK3W6jC95A9qA44H1TmnTPNXo2Kgpd1YDa7V",
  "key29": "3FY8Zar8ZSeJ4ATmWFSLjNS2Qm4DfwcvwBKCJX5fbEWiu8ZXhN4rn3cd1pDD3wgy3w4ZnyBtwQ4NdDNJb5T7UJej"
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
