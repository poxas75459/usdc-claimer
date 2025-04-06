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
    "31aYZQa4zVQtDLkmqmGyNh2qhzg6iS7oTsSp2tvV96B3AFWqrX5iNStHRXHv7zSsXKkBFyzCJCiyRugpGPGK3CyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HfrQVVsxHcMGM1QLRdkCFinaDxGsFSF81RXAav9AWWJasGMBdfKhsqi3vLqGhKXD9J9zCW82KwWJPY8ZwMF7GnM",
  "key1": "2z8jBa4Y5kc7oDVQkZLZHrzG27KMwn6hLCLxz3z7R3PYABJsaU4BD2LpsK6KsH4ZdhCXFuami2btQr1Dq4JL8Yst",
  "key2": "3f9L9bPSwxN5Na5vJy9TCfH28LSMvA2WBbhavVNrPPXUvr6rqedzgvgujEJp2HTfwHhEduuB8JrcmMLk5hq4BrDc",
  "key3": "27hSVi7caaLh1K1T1gTa9yM2f5cPKERaQFfexBj98EBUA4Px8vemv3jcMDFbfTCqvb4paT5nURuaDYdjv2z9ceqC",
  "key4": "RNgYQKkXWc2bDwVUYxn79GtNZJvqX7i7go4fBp4YNWDzjyF9haL8nUotGEyYPDj1KWMobJ4D16LJwVUxGbfRgx7",
  "key5": "5mG95feW1C6uu1yJLqWGskVP7xNxivmL1Ro73z67TdT2KLEarhnRXKnBM5v8xjd9L5NkrEFB4qkn3Yk9nRX4f9o8",
  "key6": "4ENYsSWvwnbqmNj2ksMVAGkXg8fTgJcQ8zFuVBRg2LMQSehaoquNVc5d8Lv6CFmf1vYzpxqeiknPF8KLFHvT4m1S",
  "key7": "boG5fnYPWs3ybtZDRD1FzYh6rjGyrusxNWxwBeNNnC7eYVfhkRqJZsaKWkQyBpi1Xp6AP7WND7TP2z9GewXv9iD",
  "key8": "5RSyWzxXo8nnZCeMh8mqhMy6KKN3uS4WB8SzoaeZYskWCkffVTrpcgvrp3Eh717KLmBrfyVhQd4Cnmva8vnME44u",
  "key9": "21oK7hQi3X8Sn73t2RRDDnoHE39jQwdwGuURspWvB6WdaFZyx3jKemcVe4UdU8JA7Rz2prwdjEwZ9e5qb3VkWqhW",
  "key10": "2YFYSpEw3vBauafnvMnkgmLYxi7otu27NPeazo7AUbVYL8Yny85hYPsqQWEeqAL8xbGyT9KM2uFNdQV9coGPdjht",
  "key11": "54tKQX5F7TGGD2hCeVmbuDhKRpEzVbmacAue7uww5nQZc66Wyfx5LB84yReW25LjzQMwoWB1f3B94sUx9bq6wSPz",
  "key12": "VCaknXVfEBcgop49xy1ef61x6aEVhAu8SNMvK16gPVLFT4aoDqLeULA86CDk43pikCxwbGGhQs2eEafFLe4LWiD",
  "key13": "5z52N8CzYa9jZ3FamvYKoFX6qgHoFyn7mRrjUUccuoQZ2AzVEBPzRwhEzEfGqJUyFR2263GoYVFsMYGpa89yJCck",
  "key14": "4GJ4FUxeodaSLjkpXdvXq2Cp7qcT6FhhtnruRorC82J9i4teKaMb2CX1f2rnTGr4i8K9zD96nHRgGARJ4muZX3j9",
  "key15": "2BxtPSQpVG784NdcFakAJpuuXgUJnWt39AvaCvKuMNc95rce4kGULMrwtTQtd3nY7jp85REs3gm1AvAvht9MmjFd",
  "key16": "3QRkraSAjjDnSr6Wc5d8Ex4993CYgHLfR6NHib77HeVsckhtGhF8ZpkAPXxqmyxu2emuu55iby6CYPLBNACLcyq8",
  "key17": "4JFSGLPzTBx2thkCuB6aZ8pbxekzhk88WU1GSBak8ky3U5cECdZUUp32LquRdG799Si7jbmx7aD51jZX989cJo2J",
  "key18": "4KsUxo2QtJdDfWBnhYnyuPHkxZcYSJuWJZJMwoVnFeLKp58M2XkepBE9zob8JD1Bt5Z1hajGhvvoi1oNTypHeQn",
  "key19": "3SvonjZfTcEWiDzQkMwGh34BTryPZzYErBEyRk1r9u3ehNjdL1SnDHimphrpAgyJZGKwfzD9Hp8L9PLKdbNhgFXK",
  "key20": "21xL5f7bFxjySHKsJAEBuFvGc6aNYr9BzRiLihnKGn8ZMTtm6R6J3c17RN1gPf5TRqNVQ7dbXVkuR47GZiquWNHJ",
  "key21": "25AAGayR7FhaWnf4rHiBRu8jTAUtNxnqJnAnF8CQvUjSSKPVr9efyoAQ9KKaJZmnEWeK4ArbQDUPcivXxmK1CKbi",
  "key22": "4NNXf2JUkN1rdDcTBhhkykZCtGL9PwVu3Wz2SbGi3uEQ49gbWAaspps7gwSwnckt1Tnuexg4EueeNf8ya63FoApn",
  "key23": "4VqmsXo1P6tzK9GBC39uZJEs9yadukcuA4XnTbxRtzV4LAKfEjsRJLRGXstYqjFYHWksWLM8Qc99jH8UPkkBLVkh",
  "key24": "fJzWTk4bPSt99W6hwFv6oxobDnK4DJxYHbhBwBzFTucfK5HNkppNKy5qTVxhEeyTZnwhwTuNCvsdAf4PSKvVqMT",
  "key25": "3ezduHruW9DkRaPActQd96p67oVjYtZWe3XfxKDs9Xmjo5Yo1qpcJdb8JFDJNN8xyWPUNcha2SH8do9oxM5wAc9V",
  "key26": "32pGUinno22muKPdDTZwiLL7VZTK7AJotkLohCxHWMP8b1EXCMD6Wxqn7HUhkEp6Js6e8HLcPmCoacDkbwBb2iZD",
  "key27": "4Dn1LHm1yLxMicd1LhqfHRci2ox5Vw6zRsejZe7qSf9yEexDRuA754TXya8jiVFatu51JRGt2rUS7cJVLyowarMH",
  "key28": "3PByPjBandGGdYFxRkhXvh9VgZME41Qhtq1v1P9yd4LnHuZSsvoke2odRqSD9k2GymhTFtYc2z8dZneNHpNAVGHy",
  "key29": "5DGSwq1wqadfpcQn7B2mdS1TnTmF8DJ2z8Evff5XX6JFG63pZF9HvjDfQCKjn6TL6p4mh2Q2kJKYM197WH4TSQD7",
  "key30": "2V5LRpnLSnjZ4J4MRKw9jTBmRbMkPRqDDxHCnfv3LqaekuU58hmyep6dvW9yTr1vsWjhgeULdoy2jfqAv5njVYdF",
  "key31": "62W4KMRqsKPL4B7TQkVYMQzEEFLkqbGyKQvZfnk62Z8p8iskcdwKNSA68WtokKFaMpmzPZp8Nq4z9X5SHf2jexjF",
  "key32": "3GDkLpWhWeVEeo5K2ZhX4Vc1HPQbBUTmKKc6L2oTZQrvoEMzPAxLE4TgH5Frtk7Gkmg4pJzJZCM7Adq4mMMVMDZQ",
  "key33": "5JHTVvEHwTZ2doudhuDJ8vvhSavKM798JikxaEuUmtS8zL8p6NVwq1CLwTDUYFKUTbk2QLd5F4FeeaC7Q5FzgcUV",
  "key34": "4fEebkDT2ZUWxzqhJiX5zirhvDjxV58iXYg48hVmgdiY6gkanttEcNcztZkH4WSg3Zadjnh2H48Sr4M4JMLvMyB2",
  "key35": "5uUvPZSB8Ht2SXhpKncsWD5K3nDgPxtwR4pDCKpwDuNZi8E2LfE46rZYXrUQqXcLHkZEq4zjko8u66aBxTU6TiWa",
  "key36": "4BM84awuY4brBa2wS1RUhvhMMvNPTscT17bnH3dB3WbFMmiVu1BT9yWZTbH46giaWGyvnAz2Rc93b9ypdQkwuSjb",
  "key37": "5e2TEpihL8F1pfFQSUK4th1PbvinKYNZLxUxpffVvKqFpSV9PcuNkMBVJnfCN25sK5imgSg5cVoEVx1NVxcCan56",
  "key38": "2UVV9Us76pykr9qDv1pj1UxwDv8fnRVdpj3WYuXCowW1Zc1QHFXWmKuKPAPNXuEUNNw1wm33cnpqDcswXfqAPzSk",
  "key39": "4MkHZUotwdyC2qT8QhHW83bgMEB3cbqVLcxQNY7jx9ok9dCoAogKoaS9ERiWvnKZ4d28fNfFABkjZmT3SM7hK2K1",
  "key40": "4254HMNgUnNzYYD4W3FTYBRWQFQioD7Tvdi7HyvQas65TndfHHf6heV5phitC4vvhG11hrEkMv1LULGUU5SpSYbB",
  "key41": "3c3wDd44of2QQQtkUui8VxmZDgsPDYBKgHRrScUML28ViqMRbHc7ELoMibT5JUvSBoWjj72ziy4Ban1sWBz5eWGs",
  "key42": "4dqArppuqzXde6EgvAX74yMMLrPjRWXK54RXiUqX4D6HrJ5F4TGL5VYvdsWbBoLCvUoCts9wWqax6qsP79GCb41b"
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
