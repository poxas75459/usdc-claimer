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
    "5BeSySHh4EUXJXBZiK431hUXbknFs6E1By4xBjpuBM2d1osJTUds26JzWZVFPFwweJk6hjMGr2CKK3yhMCKJTf8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Wf6X2WLAJKvo8ag2Wd114zfud6WwwtYSRdXHDrQgYfEEzbZ6ZBma4NezCHFLVg3vzwU6iENDhkbBsJ9DUYdidi",
  "key1": "29aXNxhXWBefBgE6PPsGHzeSeu7ch4Y396s3aom3FsFKqrMi4nsE7KarsdcGRhK1NuLzxsjFnUejU8qsSgWTHdW6",
  "key2": "239QVaHbsHVNNM1WqmWRc7rktq6j7xz1HekFANvUpLtjL4HcCG8qFimndKdoCgNFKdycCJASVXeWk4QMaomsEFec",
  "key3": "5UTP5hME71iY5Q2nRwhHgmQhsg9sP4X1P7CTJnxGh185skvDKh9xucKmBDjKwdfAF1LAWm7Hmh7yoZL9ZtqNi1jV",
  "key4": "3zjpu6fk5FXZaZmbYQd2jjzsKD2AJA8NW4jUGGG9bjZfA6QExXJJbDEaWhnV5HtUA3HunEy9ioLmSbS48YcJEyGB",
  "key5": "2aoyWkEKAtd74U5Mf2oYFfvAi3pmoj8AnhRc95XD1ojAWCo7tvssePYbQdETJtX98M2CerEHAvBPmfKsPeykTcv8",
  "key6": "32u8jZ6BQFrbqHAqouqbcKctpk5tCaiPe8V1VwjHwQ9FCbpwJcPyrVej7o33ic2DRSBgiYoqgEBkysjT1cMi39ce",
  "key7": "4f9WBZZKR2Ax5K3Un7kEi93SnqXkYQUeB3wx3wj9ked77FWCabDHAgV3grQmZXAaCPDy6vNZ4aQeUTavdf5wrHtw",
  "key8": "21PEDhpGuLH9hGtwe7qMXqstfQi2UXx4XMbsqfXvtXkrft66DcSvGbzxCjcaqYrLCBfRcDP4AtzAN6brpFvqThsX",
  "key9": "spyeNDe6hTkEAM9RncAVfZKnGJ5iiVnQsYEW2yEua81NPGfkptsDndyUh2CcqAT2Te8unRCZa4TCuQykYwN739p",
  "key10": "2afdGrBwZRbVE5oagqozRvoaypGDk2aGtVYDpd92bTgxER9ESRY88xdm84iKZ79jXouJJE3smKYcvRvwdXebUJ4P",
  "key11": "2tZC39CZet1uMigkiMP1MfkRQwv3MvqJvruDQZkWFCH1scDBYPpCg2bRB1yvPmKmaoLZKzpXHsKEqA4NxGwGmSEL",
  "key12": "2ymWzCQadDYJtx2Ycy7bQFp68sDHUdrzFyPgffgU8fEiNGjLvRfSc728dFmihXyn5Jrok7J8sQmwArgUagje8TTc",
  "key13": "3PezE1ccLGPCAxQ8D2HH2GtmLbdo4NkbpPT9sUd1HudTWvwNHQ1cJXyGMNjoyXGYJaFuaiecNLfsUeJLtkZAZCDP",
  "key14": "2hmufXoczQW2GTLcBPHbg6XwN97uadmmZYrjc15LKosMJ8AmepLwRBnWVu7osAmBhpHeUtQAWXVMA5Fyzj1DicgM",
  "key15": "2pAj313N4K5rjJvMxBA7bZ1hYcg7yjcNdkXJRG9YNQBCQvxTADYdeTgntD2S2mgHmUhCUcJWRec5PkinNNBu6ucb",
  "key16": "5XNCVoERZ4NXXdLeNLAhj2oZ57kDNGUooDHVrzX5nYBFVn2ELewmAVYKHkxMK1RLVtkrC7V5kZL3JRD1AU7q2vjf",
  "key17": "2uyYabYM9XjT1EPiUF25iEseFYc7KWk2PkicsrD5DiiG8goTijYiHopP9vZpkk3UnHFn4qBy1qZL4Rj3G8AZnxJb",
  "key18": "4HKRotDABiddQASot6Yky6LiJezSZjAeeKhPQVFfwj5cNXwgYRWGbherQGWKCRX5oFfM8gBi7YrHgvxjWuvvE7qM",
  "key19": "3URzCrnDftbwD9EWTh2RAPimw5PvEHrwYVMRrMcXu56ntRYKbqNx1Z6bhvEwaRgH9ee7VxPdE7jPwUkuHz5G47MF",
  "key20": "52boTpYqjejtSs7MY6WRmXrjvbbQntcchBPLmFRTLfvNGVJeadZZBJyBb9Mm9PzA9ySoYhW5p6D4bBtVgD7cxBrx",
  "key21": "ZngZKWhuA9tEpj31Q8y198RD4b5t2nwUVUGhHtdaE5dghfzcPiAm6RPorvJhZtby7BZsvpPctTwUNqD8kD9JzSK",
  "key22": "3jMmdJjn2daz6uUv4c4jh2cE1uNcUnnTQ5oTbZYKxmKy7jsDP7EnrwPXnDjRSmZFS2uok7FMvtpPh4cx4ejtUx5L",
  "key23": "4BgEapewjEWotp9WJ75svtq41gaFUXDCnGcyWoTVuB1MWfju32fxbZCwvqjxhEa3397MvpRNULg33mDecwyd7wsx",
  "key24": "5gwoNzF9a8wenkrirzdRabZrE4Ky2XqVyKo3MBb8FGEBPX3SABvAvcjn6ePpp9jeTWrNd3wdQdFMUsYnQcmzzzZn",
  "key25": "2E8XzN8uQtTm7SVzrXpi8DYoCNVUkSzLtuMqMAj3wZdQ1qWofLZTZhauWhtuCYrdnFeR6GrKNX7UJ6nzBSpdNqyU",
  "key26": "4g89haLsVDCEEyLPj19bajSfv68TSf3P7rTia35fm3BNMACkeq5oRcrDT6Qz4qyuYo5vZBLHvB11uWaE6kLZapCJ",
  "key27": "3Q6KYoXHZ6d6NHLSivuSCxVsPMCc2oStC4qDeHvcQPpeVYf8B2ThD22wWVVBEGkjDDZfk2WsLHtstLNK9FqnPxZn",
  "key28": "5wdJoLWpJWSbCfY7PTAGQLAWLBoowkyy29JZfrkNgHXHm1KdZjw8xebM2swDyNJ6uDZ1D4hcG57GGvJxFpq4vtA9",
  "key29": "41gy216bKLtBY34HmcNQTrMzPTxx35F1GcbUWgG9ifjmvJUNpKzuepm9YL5zRA9KiuPVxt7eevd9akeZvipWRigL",
  "key30": "4Wmu4DCLVKZhjdFox3FL6tQLSu9RuAXywoe5HAT7NEY8Vf5RQGjBMrAJsbKNrUK69gqXYha3J439G9XFro53MAau",
  "key31": "2Hp3JhbN7ZMKE3qzJS3Z2gE9o1XvtTEaubyrMpurCPjTnt9M3v7HDo99JYZa7HWs7cdRGAgLpiMtH56PqBktBW7D",
  "key32": "34EZnmmK3jJXLknXccCqhMBPZzt6fht1vmoiNSP8Xb46qpGh1pdzX59c4M98Fu9hEeyBN7QXQpn6ZwusavcWFtxG",
  "key33": "5m4nNASAkCLukjLDyMFjRnHzxEhCoxeKYMLWjokFvcw4wGGYKn6gAiBQw5JvTdP2qE6keJHn8JYC52bayr8u3PGk",
  "key34": "Jdoxqb92ji6sEBXDzqevZ81yWtX9GPaGN8H2f8LYJgbpWF51x4tAC94mF8S8gw2AGBkRXGZ75etDXGtyZ4LzbFz",
  "key35": "3K9umunqb8U5YoAFH4AQ34dxYCt2q9vdwmsheKptiqDh3oEoWJZoXtSLPZwh9Ra3ouJcRsuM1LfAiXzDLyxEaYcv",
  "key36": "3QTKWeTirXCcNGih4qR46QTZ5WHMnuVF43GyuWvtsZp8eNSqEvrzz6FyrbsenieAuEnnqjSnhVwjVBEopTTKkj7m",
  "key37": "5yNKwbPJVcsKhsUqLyDcLfRhFHNgLKARTCPqpF3h34Q3Nfa1BHZc8tXEkE52dVSiHgCEo8Puc5FzK5Teu4x4NwQ2",
  "key38": "DTsWVhEdoFVSDB9zmmSmbDy3i7H4qD63FAAxUCtXzvzK2EFRtXu3YR1Y8f6mdeDZsFhB4Vxsjjk8LDrzpPEcHHg",
  "key39": "2NrtRLnuS6YxDzHSPhAfYP9Vm5svjDo6M4YQ2Ei2Yq4CM4TLXG2YnFvFg1L47jWMLvfq4xyaPC7yExTU3cVs2ApW",
  "key40": "46RGkjjdYGJcumtokYabBCvLcoXnR7duZnxZgs6e4W1u4tcVNTGKm9ZBCnBPtCdwsRTtutkR92gfa3p39cCdUSnm",
  "key41": "4i1tygARwg3gxLnReoaPSyXDU5qALyzYYZAVuCCBpDeZQqcPFNYz5iSV6V3RXwHeHscmL5tt2C1P3RfMYvAYhoJe",
  "key42": "snYGscXZPCjrGLA3b9vNFF5rvN8n8bQPXW5vtZzhUGacRFXVGg1JNnzNHoeiMuJkU7sURsowUFypX6k1xEPk3YE",
  "key43": "5k31VRRKnDNRrLMw81cKSYyMrdoxD2fZ8MTfdvSU8FGXSg3SZiMwa3tNtfGDmDUtTxcFjxZtWPbPnqKqwzQxZzWV"
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
