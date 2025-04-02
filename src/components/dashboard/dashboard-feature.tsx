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
    "H7PghfvcDKhyzDex6u8VKrpQBnFvXefEHRsaD1ii2RtEAdpKNrq1wtiuVNVrd4j1HuiynZVBimjm1CVnzFNABqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZB32RMaZe27xYxapTjsCWPffCofVfjaKqisQaCtpBpF5oZqoKSoKkVZADfa3NdijDMF3BWujBzCA1vXGogyD1a",
  "key1": "YPJrs4155g9MC6KkLu2RehdFQ71xTGnNTjTJoN5fUfVYuJGqfVTeuuFPxVpZ1KQ6TSjAuZfioSsQGoWfEgbvrD2",
  "key2": "4uayUhdp21S96BS1kaDYH25uqtf36YaWUvhGyPTbReM5aTgqftgTxkUK5dn4ALnmmbM3F4ekFUoYMgzkrKYMSQtj",
  "key3": "3ec1CsFVtKd9cujBusFTSCrwkFHBLMoZ2Wq2Y9yMJhHfZmuQ9gxZcmKih8zVzZMqgvAtN7TzTMPn6U9n8D63H25P",
  "key4": "2w7Mwf8MgRL5yFWYPHSGcj3brSZjswStyo96k8LcC6pD5j7KZBJnGvVCWPUMX832XNWRRBQ9ScLf1LHRfH7NJvLE",
  "key5": "gHg9u56Uh48qZ1Qr6yqo64DdfRcSJ3pcjzrHgievbc4RKDUKBGJyvD2jPZMXPRnmvNJHYyJt8otr7vwKxRAiDPh",
  "key6": "26LANEC6yDgGg6e6dQopA8VhPB3hVRM2taNGFBgbcizFSaxTDPFdLrnGbaGcGiJHyoD82TDhZpmpe1JtK8huVKhT",
  "key7": "C9b2KZVZqtqdX2wcGZzjo1dPNLzHZ98yxAzvtVSjNf9Hzmuxy3pDCQUvYMqS3jH9AuCAc7PNh8wY9BUkxBVfK7b",
  "key8": "5XnMcQ7WmnkyuCtVLVmb9NoDkRF8f5Xu57uyvbMbRL22AXKG5HydsRrsdJAUnspHwLXWUyg4Gorj3nytHJeyGoTv",
  "key9": "45em4voaL7ZUnNxb8ohD8TVerYKq2iyP8xJmz2TDy1hK3bz2y24gsbEz2uwmBhJU9LpfSeP9qSQsb1tW2kojCL9V",
  "key10": "3tXzvWsNXfqgnxKmMuNpjox47Qy8NLU2YZBcApYjEQUUbZzZTdLcmJLJfti6VPaeBpcCKv4RQ1vgRvsXY4itZg4q",
  "key11": "WcxXvaMMFbTfGtbrj4QuM4HMfwTHqgY1YKvDwvW9YatcviNv9k1kXnqDhtAPuLnJajTNbTpbBeRB4cUb9awSwR2",
  "key12": "4ucCgAB8P7WNKSnUvLvrtZzcCja54faTUCvFJ4HvHdQu4Tutp5VrwJQuJB5fzVQ2myyg9oAB72b75tPzpD3Q7CBK",
  "key13": "67MqemnJekdsL2RMgLA45xDuaXWCCJL81o2gWCxARBqcKaWk3L9v6cmS3eZWmYAKpNwSDCzmieBTA764HZbaTQJN",
  "key14": "52RAL7HvBXEf7dVmeCmUQQTQ9A73sFko3Q8ZqU1PaNYC8LyWPMRzMzChVtFFvGA1jhhW99mEwv57Sut4DFKbznsY",
  "key15": "4qZW8wafeYwQCktgeXC8q441uH6bkrC4RGpjyZyDdPAsBcsfuX1fkkJeefj3ihjQ7dVTH9JVkTtRD2tkfFcgoft8",
  "key16": "4aAtpm9n9pQEQ2PM6Z4iCb14PiCz9S2UB3Qcnt36wuZ2vXe7qPMChZXW4xvt4RT78L168n1exibaxf4RAgrbhPag",
  "key17": "4knFLVKHtS6vqPUmpVoVQSaVuBSnGCCX2yYYnGqKBn31R1gDK8dt3jH4h2wgxWHCAFMwummRjwKFB3wjKfujVak",
  "key18": "Eo8VgYyNakjGpYHS4847VrtU4P9KCnPSVBhzPnjvgaVAZSxC6HkkLfahhf1Ljyb8QpxqDg1M7EJ8DH1tnfZJgFh",
  "key19": "3vcFBcWBVQaLkmGHLgze2F7UYUURmLhNp7JuS3prsswwTbaEunnfLgfEbAg966fmEiWrFbp4QWRHQjs3RYPTzJRK",
  "key20": "28bhf6pg5ynu6xPUn5GYB3KTwbknv5HLrmfGRW6rG1fpty6vd1ke5jEMN2L8nYoF6HsB4E9BJA3J6mep5Cq2Gn8H",
  "key21": "2fKqpRmuMCRSsxjF7iZhUTNMMW5YPYuRkAhqBFYfms3xt9p86zUvjZufYbMmPXWyshjHqZHHPJ348xF1S7Zkhmyr",
  "key22": "2mSWtoncsaqKP22ezb56FRtSDfEfKtKMRpWE9Q4riZbocCahRdwY3o8hRQkT4JGPQCAoRNafQAFfXE6z96ts84zA",
  "key23": "4TTZq2vT71SqeLTh2fU2LVAT3kMrGTE1KsjaxrwV3AocxEE7Ffedt4eYaSJw6AahLgupaMBvT3Ru3chUzK3ekJQB",
  "key24": "24A1L3H3ugtnzn96zUdy5z8ZMRGAikiYRWe7tQeWmLy49p1CLL5ErC4cFANwkhydNreC2wgpR4DgcUtPYvLKXpev",
  "key25": "JjoC2QzvE8YAWozVxmRbRDT1nmgNQXojvYJ2WqQsq5i1koQc4gGypaW9n1hhDPNM1hiAgT4xj9e5AQmePXzx9dk",
  "key26": "2b86mgXeisEpSqgYWtYMU6UGpwW1MK5XmtPe94sxaqtG5tkCy7KWWDNvLxm9Yx1bmZfND7vN39VqLhHG2QRics9x",
  "key27": "33UeRcLLFkHXbZi1sikBrT3wFaRn1WGvPqH6XwbNgUDE5HJ9Vn4n3GYTbQNaDuV71VM2cp46s4KGyo4DK9zmmxsY",
  "key28": "22QyRGZhzaXx3RyytdkafiJJiFJnCCQMbfRGrp1madKgtAPvMQNxZr8xzXU19s86y7R7ME3MDykQjdS8PYFkkUtu",
  "key29": "3WCTduGsoecwNtKJLyL3k7rX7jQpNeteDkBZq19TRWPY5fwyzt3HWpLmujDzetZ8wc4uXB69z5gkQTNAwQVBct6k",
  "key30": "2f28Z7n9KherT12GLbBukEoZjh3bxy5vHkR6njHN8YLaKXwFt9QN7aXEC1H35CgTq3ZwJ4vvo5LxpvLqCowq5dUY",
  "key31": "2f5Je8JoRgoWNqEZETdxUWDrErYLppXg9oeCXczRWedMVnjAdHUDhxzH58Kcvc7DGLfvvJK5bPT7jz5Dc9QGTZbT",
  "key32": "Sxa4cvq2qo8mguEJbfskZ4UQv5CfbTshhf6Ju7WvSFhSLP4obVZC1rWX6LQrzesF4XNN7M5mNNqUy7oYAcFJPZ8"
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
