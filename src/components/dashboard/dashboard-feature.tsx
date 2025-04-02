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
    "4vhT9zjdhjJpK5Hx5CvL1Rq1m1dcj5Jr9XNRHNy9atKyPY5HHvNW8DdvH7jZo2JazvnnnGC9es1R8FtZcNLEsdxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48o39wceH558Sv8n3gxudXZuL8RAB15fXkQbDUs2LLUZcSZxBCAS641aUzY8d65JzcDTEXN31sNix9EvpSJaLhip",
  "key1": "4sxHnwbUWc4B4rrg4c33EXrW8S1CvG8dcByYnqQx71EeiJNN9pWxzST6zvb8QC42FdAaNivho949feUZqngWyZnY",
  "key2": "UaVq5w2PG6n83bQ75WE5aSeELUxjB6ntddwvj8fAaq1Zsib9gWSc89YE7kUPD5e6f2wg7qC6rGoM5wA93U8Z2o9",
  "key3": "658qiPwasW6U27CQWBLK6DKoPy3GKDNNa4zfv3KgPNTkdSWrgSUULS157CnA52ohzbU1TobUtV4xxrQpGCLnfpq4",
  "key4": "2YvrUvCdABoqACzanFCP5bYVuJXjVr6CcNq2SDbg4bV86DKWQbkDHpttDNkUDoigdvRaaJV2ayDepNHAePRxKbCG",
  "key5": "2Nnf2NgbzN8HtsBKxJW19yko7RJFoQQ1kge7kdRqcMEaZ7E3S81PCXXE4R2WJR6N3pxRuFfVPTtKXF7eVabMzPJh",
  "key6": "rhXRZyn9H7tX6r8RBdvdBH7heC1hu8x2nthuxAgGzTqEbxKMxn9ZATZLDML1jBuvVQ79MM11qgQyDVqjz51Jjcv",
  "key7": "3Y1MZxYgwS7tpKmdx1kYn8KsNd1YA1ZFxtyKzbGR6p47AhKtNYDXV7XVaPBJZi73fVcB1jyJYfv3NuVYH5eknZem",
  "key8": "2UGwtTxnCYUE9zsVGCwW53yfBiag5RWbY1XNRECRCKjxWBtaGKUCnsF82bg4XaZRVxTQUXPdEemdGjYQN4BrbEnt",
  "key9": "245sgjDgtJkGTX73syVorVbn9SHzGDDbzXnnxM3cPywitSdFVWQpijd8UafrBXtiRUVCULrqhses1aSHgLaA9orn",
  "key10": "59RuPhtGqVqXepV9tbX8JosyyZFhEEca5xcZH7HZUprKwfeyoXuYwACiai4Ko4wMJW5FXTC4iVAeMjgRKCVPAGhQ",
  "key11": "5iSemtrE9HoASRb9zxnC1f75VW6YMt3xzm3b8ubASmu3zJwxMwYAcNJk5x4tBqPcJkj5N4tqCByhWnN592uzXqzc",
  "key12": "2v6YzLoodVd676B7FgoKgfrNa9Udrbo35YG7z6JPGvPUJ4DAPKGmXQ4eUUTZPjGypreJRoYVYa7jfRYbK1XTH5Cc",
  "key13": "2aSAb3ofXJgvx2MUjEeDQ9D2L66xUJvhdEUWivxfUviykwnBShT9e2MxUVvAKqkPKVQrY6XSQP4nH6PzdJWmUMWq",
  "key14": "3M8zCMaj6QueNZuthaDH27L4aGn2oB81r36L7vLQBStJvu5kNino2CYXZgWQ7PJTQLuuQ9vd13j2YCN7c5xK8zt6",
  "key15": "2EJuGyBKFP3T5KTNJNL4T29sddGRhPtjKUTTg4y6aW1wUNxXGM3x284KTfTtyQJJVw282HnMcaa7VKZ4QZwGzPVV",
  "key16": "1mwAmMYmm86ncV3wQeSfRzDQxuPaBREbKPuyjNpPfdKU7BZoW7JwNAQCrA7ihkGWhpv8kWVxT8Zhw2zLzqnpUDm",
  "key17": "dbYcRLAbEBKrZrGBG29Jq28tSNjFGL29H8HGafmVwHCkdx5B2QVfGRJoK52eaF4Tc5BPbuua7BbhpmyWcGBrnQs",
  "key18": "2WzyhbTQsQehEWzcEPhdE1UeuW2aq5A35Tr2k22VPEqaw7rzjsEsi8q1nv5DnsD8BJ1YiPDjak7KCiYwmcEmMNMt",
  "key19": "2ZrR4XaqcpUa4S6C6bMbsnEzvnBUYn7JtpGLyKCyMdeGRynZrwaDpYme6u8Uu1PGY554aU7g7fV5oTm2wPtj1UGR",
  "key20": "4ZxsUVnNwBGa4EriEnFNVR1CybjAY9BiFuyFZJQgLqaktauGWhrCJ8w4LtfUGf6uYtebhrVwoaoc24gSFx36Mpkx",
  "key21": "2bqWEUYCQMHsjhS7mRaTe1vqgtAHeJ9vFDVVpgiGKyxM8dqUwoVXro8c2NkuEKGJr4S6Cuvtu9USvXAV3pKEy5n4",
  "key22": "R3HcXf5SycG1rwcP1rBgXkEv4sokwYR924BnZSJzi8Pa9voUh4HTLhYBArJ9hgFGs8nMhhVHivtYQDtNYpmJPLb",
  "key23": "bYBQnri4H2o81Jc6b95nmwBNDZcK8R1sYVnx6VWmuEM8KYdFBbdkKbkaQsogwYeLpXune49d1GnJB95W5exWCVT",
  "key24": "2DSj2fKGKqyUHEJfXHqV4xkGrqmSLrUDEP97XQX96Ptyu1xn56oHGgZGeJJGvafYNivQCT4qzHWqBZLHM8a3BYsr",
  "key25": "59dF57R9WfVEumYw62rNQuXTXzH1sghCFDL4q6fw1usuimT3fAUhX4GkLkNoYWmZcWQtDsZUpYzVDDxXp8ZWB4Cz",
  "key26": "3PFjvpEBewtJTPVrLYmnQiBJRFneHLhL4pmqnc2dvKYCuoP8dTVKauycxxNJY4Pqqwv9ZFhPViabPveEPwTvVAWx",
  "key27": "5yAJo7CnNxMYN1MzDbK5WxhzKwaKxLq1vvFJhemd597MS1DrM1NyAJtr8DcLnqJ352Y8Pw4enNqg7r7TVbV94Cez",
  "key28": "CpcN8N7ka6PpN7EnGwogQLNLP9B8rFLh8hXKXz34uxzAwXisidzX4KHmfTcPiHXVXHk5SQvE2anXv8VtYiDZEzk",
  "key29": "4468UPWZhLSLfaiwaTUkdGvF2GBj6pPDdW8r6UEA3kVLoWkuRwpVHmKQb4aE9UR3tWTykUcquJbFZiT8w1xXgV8t",
  "key30": "RfSWFWEi5GjSFTBCLAEtiqL4UgR7QuooDPZPMzNJ76vPFQv6PBy2wKdB69MSJg8eq3syY9WamcBuh6ErNqZYMwY",
  "key31": "5a3SmanGBuE8VjuqSXnPa88s98xj1dZSiD6e27DQinC6s2sUFuDg4YsYTPmHAkukAqrqDheySgkekJEFvbWQxZB3",
  "key32": "4VKai38JaC8GYUMz7hgXgqWsWYNDsZdU6498ZPudB5JgJNvdnzivjkj2MpvdxBR49Dc3uyxWBUPn91P3Ei7JJk5i"
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
