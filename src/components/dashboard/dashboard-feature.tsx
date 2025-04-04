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
    "5knDHjtnPsGF66mqQnmHXXE8998x31t24TFrxgd1QQDV9RNUmQZetZWJ6hZMmDpjdf1CQ7dwMSsXTXfdLwkAvDCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSDAhUeM4bXNqfNR3y3T7M1eb7HRaE2hsktMgiJtVxyNpjckfFrXvuNfzS7JYed2WvWHJ9YBhZhaAxzfzXEP7QC",
  "key1": "5swFZ85CgGh53TQC5AZq77inEABwK9KhUC8BdjVRiuPSr8CfN6ccYqFxawFGodmAfFLNENtpTeZF4YQpYUhZrAg7",
  "key2": "3zCG5Trk7idCKTHfkWSrpAXMZMRzQqksz3PS6eFoEbZHPPdwQVpmaN4s55oLVz1yEtaXH1hK4iWcfUTd9mdzKoic",
  "key3": "5QkitaQjgbdY55ie5b7J5vr1duhSL8R4C2G7yfxBX7tA5BA9tkJutJfRnPofsUpDWh5LsfdMUp95uVp6qKQwQwsp",
  "key4": "5PDAgkCJXh7Rk4V5UXfZDmyEMshCBtvxxbuH2ZTu1t44CEvArf2oexsd9zrPvPUpRWeazSjLRZEiiakcwN6h5NVJ",
  "key5": "5tEe5NycE6nZXUDzVFPJtSemyhNExFzzafPb49XXv8fs3cbzaCQX4mf6NKFeoQH4qKWjPQXnbG6ZfAvN7k49izsp",
  "key6": "55cgxzRRMfnCPe22qkjqHthtPtLzhokBPRMy4Zzf8eqdaicVAaY3aFbPxRsRpP3c9LeFbAZSr9ccgiAZBuxG8nYp",
  "key7": "3xnyNKxhMG9JcEHYvfSKfgacmMhXf3hWqP7LfN6LophZH2YwaVoW8epxwNg3BTq5iGQfZ7D45HP25uvRisf38m8U",
  "key8": "2gbxt8mVS4ndj9y5XAbnJqnuodh1MmM5Pv5RxQx9tFSAhsrHVgefmuz7Hgso1gumknywrzyWgox9UbEHBYqN9egX",
  "key9": "2THHcr7N6mGyCzMjyBfLqCC8BKxNckXWTwuWKDh1V2cGSzPBkUZDf7LyDwmi5PTWGFoq3vn72c592iJto9R4Axj2",
  "key10": "NBS7xN6cRjMBiUoip9fhYhWo31GbcAsxBr8MXX6fokh5ibrJpcV4aUcPZvQqpPWZVj2EU19cAZtm17ipCqXiUTQ",
  "key11": "4ThSQbtQWnmpS6ce1N5XPqcoEbrTscbRVoJrbdKmzVZarvBTuMSwHqWjSW8921h1SjXHMqyBWdp4pQgjEim7735X",
  "key12": "4bHzCNYW9SjK3khth15Vk9kfVd2rbXK1CjgaTjUreMdS8Z7FwkdNgBjnsfYtYH1SMz9XKD2ThM1vwc2RiYxYTtoe",
  "key13": "2LxcssMkPSoaetpL9QFJ5t3BzmSxfLQv9HBzFHSf7nXJmBCmaKTnDvPhbTVYf6XscyVbBkdKKKGjpXHTGxf6zHee",
  "key14": "9tjgRG2zrT9ZZPJQbKhsyZFTq4VFzU1JEEo8RPfXcBoPjCg9UYo61oL83w6XVFYGqUqJjzVdigJ4kNvvetqTwza",
  "key15": "4mAucTJV6B4ALamNbkVacuiX8CNqNrbaQv6eB7EfVspbkdX1JzmnrssL32RDCeqGzBMBv3XTZpPj631zPtjEGU8x",
  "key16": "3VjbweP4f7boJh1RKhXJbc8eRBSHoMM2ZCU5heNAesSnS3H8VZ9bb1hAA9VmYTztdGLyvjLzb7xMUeypAHCxTE5R",
  "key17": "36Pjuk213y9Ah7e9KsX8k4WJKjFtehxtFYibYdHmXQvVfJ1741rfLu2fTCLKtR35haCGsYr8yfgXhXfUeEew4owF",
  "key18": "5eQdC8myKvz2V1W6fZ8sdBSbg2rX73C6SnqtiobZTdAPV97CyGqXVCwnwXps44p6CEwNm76jwp1EhUWyxtBUMpQM",
  "key19": "4DUeBENCi9zme1oE5zpxAeJKMsbavuYKAyzwdXwpDwNFtxrLUCGyn92PBtQZhnKXSQhssunPPwNus46SHoV9GDj4",
  "key20": "3YWMQfk6LTXKgVdZZ1EH7yZ8ac2T7apmcWQsATx5552jTf235EsmqSHz9MXqM2uz8sv7TiDCo72nrJv4rXnePqRQ",
  "key21": "2rzkJHa1RaHCtiRgt4KmBHrf2HTRn5QBUKHALQ44XRWTc2sancCnBYcLEC9EEvUJxSeMkDUbUn1NWSV5eMvz1Z1G",
  "key22": "4rjgEYzSN3WawK3tqpZBbmXUfTFidQtN89h33YQvHJvjfT7dNh5ESq5xzAXtDWT4JpioPK6LLtA7RNA47wdMKTbT",
  "key23": "67EuFJyWDGwzWXsbP4KfbmWBt4HtrgHEsuhJ4sBQsCkYcTgKnTqZKzqcxXLpeon6UUXKXbn9hFFvympAXN3H3bPS",
  "key24": "2bqpk8RbcTzSge8RZ1vT9twgZnthxiqXQqCN2g26ZdJ7v6t2HJ7D7HkgqPZ47i9yfTJqBLe3SivYDmJ2VPdKeQ2A",
  "key25": "2hFiyS3jMWHdR7568YcsJRLQJzz5G4K7vsofCXCbxyeGdewA79HUPMxKWnGSQJGjtXvR1qWr2XHcp8pvmt7H1McC",
  "key26": "6JgpWGd6BKf3CtkYQbZf3YPJJiSsa8q8ne8KbAwZLCwCUENCvsdiWwpCyYBTABsycEkVvZ7aKKAWfsCZreSzGiN",
  "key27": "3hJgkwFt6tUaNtjifEzEN3TLGFQhSgWY9EAT4q8mrubLQvmRqAoHN7gjAQVteXva5DT9tYzqgLcMQp8fEEQBFj3a",
  "key28": "3yqYKeqBZDrXYyJxCzMAA9LVAeVx5Fovqbeir7Uw3JhhncSCxETKrYhmT2bTrqjBC7wqvGjtVMe5bwztnDDNEEAR",
  "key29": "3j3qfqYNiXEmKpgq3qjX3NhSoZYCUgkePJdJcksuwS4utednKCZPE6zxYxMWYCZnQ1vndjpF9mojtfsav4DPiAX6",
  "key30": "4DXEXR6bRWqT3oGr8ZMJtd3KUSZXCQCXx8GB9RKhidDrLwfWUbJo1FJYJj2XiMeSZ6MKgVSoukQiDRQ3WJF1C6qw",
  "key31": "44RZMr8p6WMNrYhXJ9Ceu5c5v45V2GoMQhMQTUfgrQxBBPgkoqnpfgZHCafsVS4v32DqYrxT1HELnDXhqWGoshCP",
  "key32": "623jdVfNk17WjRgGwiuPHfHAjdSFt4oQTaR17pjaWW94TVjFKnZXbDsjLd2ntpGoXJ2eLD3XcNZq2bfm9Njz53gx",
  "key33": "2pdgyKz5Qrz5QRjcy619uBHA2R9LG7k1xkH9gu67WW3keSPiQJpvQP8SKnKxt95Az64BMhE1agn9ZifyfzRXh68i",
  "key34": "4NSQv6xpp1U5LN2swoGC9LehV8CescmTsz27JyGny8157Ak9gLux5aMRVDiJE76STXNcjJ749LazGf5kdMXDtsAx",
  "key35": "2EQXQhZ8pn9D7AdMPZ6MpXq1rjM9RNfrtAFGPmFYc1pk4zaCvHtSeh4chuD5Q3en2nDa55vbRJBNyPqsXTMr1NxG",
  "key36": "4TjCQD2eTkJXAZJNQ2DhjVzTQHJ5bmdguK3LzPAsyFSRA3JezNQK9yAV6qVueJRQuYeXz2YzxbJM6Txig16pf77F",
  "key37": "4HSYpTGgJ7ar4YioJEGthWjqaquaHHgomTEP5cBM3LFqjvF6DDA5R1hUrqHrP2RyD8LjunvriVHmpssUWY23kmz3",
  "key38": "2oGiKEZy9rs2eJzr1cc7diJj6HGNerd5BnXojsqXjPDcbGTTLaKhUdzLGLEtZnjPTeEmiTXU4u9xp64tnsZ1dPRN"
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
