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
    "3Pu4tVjxePQEXyJcjCvbpRtYxrvuYPzrxD8RjwZS2eu6g8D7Z5jrskpPYXny5NK1LikZtHoSGJ4XtNnAXKp11afJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7cL3tQMeRs75KLs6qqPK5S8iaq9r2XdYq82umGPhCWpnTW4shSHdxy5T1qUy8rGny61UWubdNFgaL7e8vTrsYSC",
  "key1": "2cNGa4MqmkdbsDoD2sfeshjPsFXWZg357QLY1WaiyYnEv4iXVAU3jThUSQVK5idvYPKGA7jcMcjcZsowEJ9ECCZ2",
  "key2": "55XYhDafZzqYnYgwFr9KCfxLWJKuCWkyZVNcB3VgCrhzaGsyjQ7RMv4SjWDdjujQskkHD5xxf9cNMbjr8vpiqL1n",
  "key3": "3kssqYxunr5NFw5QpjrpCXwMryN74Mhkrdobb8NEp3UNbQ3sr1DwvpuQMjcCT87GAKUzh4oX4Z4g7LpGh41GP6wG",
  "key4": "3gk2AzNtqeHAH3MRtKAjNT6D9BJMfZ9cjYCV6fJ686V6T7eyvUSiKwFCRmdB8nMXfmPSeqNbbTK2AdZsFqdXo4ok",
  "key5": "39Cb6uxUkv5Z6Ek3TuKwjqiTyDuqUb1Uj75H5cRnNhZeU52ztcUiatZCZRxetBPEuBEUW8J8E36FLjCoe67KqKnn",
  "key6": "3BNDRPCRgTJefxX2XR4oPvZMsL2Wkk6LDijXPjuDn8n6ijLzxiU5Y8PNdvjr7fXm7gbnWdiEJjvKAxg3MzrTEDC3",
  "key7": "2deSaMjqL9yY2FiRcGs6u1kC5D38GpGkmhsrjwiCQc9u9JjyhB8aYTqTujSRcbfkXNwkm1976QZzT15gUHaSQ93s",
  "key8": "2R9BJM3RvwaiU79fCEugok5cZcCoMPDZeEvQgsxZsfhv7X9Nc5F5QoeUh2XgnvVZJyQzkoxM3p9K79C5z889U1SM",
  "key9": "2Q2Kk4HYzMtN6bRyUzsSVRp5b4hXsZLx2wVD4hSJ6aB4PcMwwM64G24VedBYzT91x9yYSyRcetu4s6zwPjQSvXdb",
  "key10": "YBGDVFdrDcEyHSzukZVaBjDKxqyb9RAYda4PUN8X4Tkw6k7pVcL4d7WZTYBVdoQog71HjiDUxrBwQmDed6uotk1",
  "key11": "fQnM7iAvF6eDZ7Ce89mTWhd9EoACXA8zHKQf8br1AgQJKucjbx9cFUPLRB5bmkbyaQG6Le445rJWTYwr4PAe2Na",
  "key12": "2S3eV5suyDdfVG6qfb1D92TGFPG9zdCer6JBLNNJ2LsyXKdXPDAYB26BVCMFzbpwQU1w7muBQYWWEvpUyP5rke5Y",
  "key13": "3NTPYGoaUU1arFa6F8MKEUdDktrbcGd4VKkb4njxrtGM5Dj3QjREP59zYToGcVNjQgSFqd8GgDvPjSfaJEUgECLB",
  "key14": "2kQfQResu2L6ct72kedvoYWBcVXMQxTEhBmhkyoczZUjfQxj23CAnyQ4scDJ2gkDEnEYpyDKvkSLoBs9ttpaqxbf",
  "key15": "5bevemWw7y9zkrbiGf9uH3MwnEo6JmqTJQ5f9xvHakczTF377MnRkVT54td2YfrvDGVCJBm4qBTCje2nquYMooj6",
  "key16": "3FhZZZe4UhXovFMtkAs2pHoTDWx2U6jq25mgRmkaJM6ZMFhmsPN7oAo9jExnFzi5V7JdkXgQBwjQZTF7YNtLZJSJ",
  "key17": "26Khy2NctEMLinS2cz7gXT4i2UCVjpjbTVUKWJqVkTa1V2Y7fLuFZD43R3F7Dskg651UrUFyzg7v23JuZBh7afHd",
  "key18": "2aPN2LnLS1njab64JqgAnZtij6vyyNPSszWciGcrCWvQZPoTSwqCebTTFYjUfwuStk1saiSAmmWUwoK6p7KTnrWq",
  "key19": "21k2sX5EquXnEhEUXeMQSx2wqL5NQ6k6u5J3W3sFgkKG6JN9DMiVXvZ5AagQ73XmcZHX6cHNj9bMeFADiR3uSJrc",
  "key20": "3qU2ZNLvGmhw5v3pQQ8bUPrtBEQwSmUxRUEqr1PiJUATyHhPXJZjnQbPSiwTYpKcZBYN8bBKTSgr5is8DageRKHh",
  "key21": "3iTYCVg6B8oP7nEZFPNukfwcvGEKzn7NiAEkm6tcwLy1RSezZLBpxezhrbrT3mboHa7GCS3djAGpPpG2r4XdBMkJ",
  "key22": "5b8Po8quCjgUDBgYaaRnqhv5dbRFwfoYhPApAZReML1KcpGHZdrhp8UYQCDUDaJpSmi535qMUFkDGS8n9NyfMXnq",
  "key23": "3QuoT9jz4QSTTaT1Z8LvVrDxx1isvNtSTVRPeZB1a56rcR91JLmsSbUHdZpypLrm7w7fEkZZ2Q2vzRBZusUFe98V",
  "key24": "5c48iv8uwcNmSRp3USvksJAifGJAffLZLBhJnjR6hJ7DKvNkqsuAnLkExoBVE2iYdbw3n9fscWjGSf8LzgvRjVgq",
  "key25": "4rjf4GDoWjaY5qgowgqXFdse6QiM2KuFzwfnmmf78KxGkoUC3h1Jv6rm7yqhj8pBDD1VEzHgNP2cZ3ZiEDHh4PQZ",
  "key26": "4oHD96WNXYbV7DZzZaqdt8388VmLDo8V5ipVB51PjS5xFnJSbLWBdxeifMGxrxQg3EFuMqLKxFVxvFjarRgQyrvc",
  "key27": "3ZYEcS58wfgbCRUUv4CDTB9sphf3681GSfhiUfjad2iMntwkDxHu3jAFP1i6hACGmFsw5EcZgPwiWT9GMepPUMho",
  "key28": "3dfvUb31VmC6QGwFAcVxjJN1tBK9x3tQJoYgZXZogjsqzzxYAr7tfyU1YWQGWLRPktMJXMma2ooRcW1GhB448gcL",
  "key29": "4K1gbFdebNGHv869TKWGnqHiCvBVsBpaFNuYxWUXJVP5puLfosquHJU4hrrVH3ggn3xFzDSiTWfX4NjrmQbhLqwr",
  "key30": "VPNSKnoruzY3JbRtq7wyMN2es6WFkA5bkS6BQMcLJf9ycCJtPNyzCQm4kNZw1Hpyyuw35p3VM1v84kDATmMX8nT",
  "key31": "5MmMrMk9EQU1sNV8xy7uCDrLdfYJ9u5wU3yWmWCy4UNnpuNNcCaspfQgpcSsoLkCpnwDXurE9JyDSAa4vtZMu7MF",
  "key32": "5d3YiLuANz9jENhH6DmPSGb1Zuu6mXc4TQkMEDcFPFRsXfRo7EmQRsW7jvNZ4Wv4Fqwv8H4Fd2gyUnXomy6XHw2i",
  "key33": "45cpVyA5V2fzoVTwzDYGWTfTLgeg1B8D65BYTjhGTyeVFtTVmEC7cMoo8N174d4ULyhB6WEfcBTAejgogrZSbVCM",
  "key34": "5nxgQEo3XTYiAYaZztcaJjgsSZa9FEeTcL2zuMuTdBgDWCepXZviMQzXhkHHNaTZsimMe3o9E4PjkQETaPH448pM"
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
