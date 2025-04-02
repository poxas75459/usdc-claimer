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
    "3xcU4iNBg15ymNhjYvQEH4nnFQLqFd6ykbdeAq2sRgXow4i6WsSBdtKMKfWRSB1ujBHhdL2QbkWfvCf8PPCtzdRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nmn2mrwSxxgxDspW58jBtYbSCz2LvvV1AuaBrsEEByY7CFxyuUxFVLf4AqFfTTYegZCqmVza6mFXvwCpoqrZgj3",
  "key1": "5uf8e2aQeAfh87eL5H4ogTCcBkeLmCPexdsNvaARAdNEWpH3YH4pFSMJAvyuSn55nJ72Sje1ZUS3jZyhem1pXspo",
  "key2": "4ApcfxdNbzhr83aeScWs28tUYoDeYYuitmp2Zmw6fVHcNP8GNTJmG9c7UQoiPoCy4QpMiLHdSpYneMCAeRbSXHkv",
  "key3": "GJHBSJXx4pJiQ4Bfx61JdEycYsQN5EPfceBh4czsxv9Z8RD42LGQht582A2PZGcBJA9BvQtaBaAQU4jarhbA6sY",
  "key4": "4JnbeA6aPHEdBJBSA1oUHnMi4jv9DHdHwuPTNRB5S2C5SuSHXM9TwoWeEsQKpooQL3Hp8jXGxgUFM8fgBdykzgQh",
  "key5": "3oMzX12PQz6ZcW1ZZWG6jy3bXCuk5xHWvW4G4frvRS4j4hYudCyRbKmBGTfekT5DCHchxf19BZyRWuEbtiG98Jnq",
  "key6": "35PpKsGDd7WCARudHxiWE6knczpaEgazYHg5h12HoTWTSCoNsQhDuqsJkekv8A1py5yqYqWGaC49yDUQ6452fGRw",
  "key7": "3JYvapYijFArC9AQwo5owgVAPNUo2L9YtohwQCogtpRAT9q6i39tCPw4GSU4jcYYLJkE8RyJ9epovxJpQZJX2tqV",
  "key8": "2Xs8VJompUZ5ZHF8wrrxHRfSshFSuv1kG1shfccHqxfGAE7QU8VdQspTtEgFS4SnFJcXiS4aEWAu98YQMuVsUsVr",
  "key9": "QExNwRmZWTzA9hfMzmsdC9CjK1Gih9B1EEUXuRRYBqPj191FeKuzFPvKGzkbyXJad8XcpMNX7VbHzgn5JKNe8ak",
  "key10": "5PME2WssynLs6fSqNmDfEKQoUKKESs8j2qy3Wqwo5VkSp5yKziGxfako39vuLA1f1VPuiEHmvQfY7wHCRBbrQmuC",
  "key11": "3E3tb3wLXtNVomiy3CJjrFbnmLuvBsuCG2ruvp8osFkqiBTbxVbr5XvNDHojryvEVggNR7A4MLppYUSctrCzstBT",
  "key12": "65tCNqDpc1jRnDrWt3H1Zpkhw31rJqNg5hV6nFjHfQ92PKNChswxNfdiRQsR8RSC22kRJ5Y4TxLuuezxwfyYbD6Z",
  "key13": "n2KwdgJYwUT9YuPDSdgY7uU3XsY8TVt87xfwR7RUzGcLFxLTGVNGSrpcLeEUHyv8w8jZzdXAhHjDNmCY8hv6bd7",
  "key14": "5NcafBUbCA16haTdXCSQdJ2LScTcGV3J9zTDcLAwzfqZUVom7qFPAxJadeCJL1DfQvfRHJeMUKhjguPW7orAMVdv",
  "key15": "bd76LhcUeF1x5dFLQBkH535QQTnL6vGjsKrBhxdzwVH3Xg1JKftKEdcW1vvqbyYDcpBxn7PNsM9fRsu2cWSBH5r",
  "key16": "5zAKQ27QWACm2GzYyrVHKvV5Ce8fasGBfnjjtSpToLYyT5GLgAT5tJNzS4TuUmDyH7tFRpoT7y6Gcoh41ZvzFtAM",
  "key17": "27ijdsvwMLb7V9HajghMSp26RDwzaU1LtjkkiNNX1QjZhq1Sm9YLX2u1Ht6kkavRTa9wPLe7iS6qrpKDsA4uxpUt",
  "key18": "5v7QmQUeazWrk8FMzyk3o6W6PWTayu2LSUKBABwEry4ZarxPfieoJP1uXt8pMRXUVRRv4vANpwCkhcnogxJNAXao",
  "key19": "4B9GGPcV4UjhbjCsXjzURzfFGKEej9KiJet1ewqAQgJ9qCUW3UC2BPLozLoWkfCGXvmRw9tV9S95PWwoXFt2DwTc",
  "key20": "2kdWnfaMVPHRw1wtVCTzCYm1EiwRfmqH7i4s5p4jdNtyHpveHLPpkorHwk9Mau3BsKmzFYhtXkmAsXBQBPXJZPLQ",
  "key21": "25PRKVhun9wW5T4Tw47RBhiEyQLUzDuGcYH2KjxnY6LAQSeuepGHEZCRQVj5KTD7cZ5Muc5T9iPuzW71jGTgfcb9",
  "key22": "3kgJCQkkYQYm7QHWtWoGvRZUGpZ7iv29r4aZF7HZHTKtoTMsoojBmqCgMHmhix4ZB5MidZvSLBJsm6adcLWeCTTJ",
  "key23": "kTCjaG7EuJA5nq8oAG7K4yS5VczVmymzYoaLb2EKt9B9xfCE5Zcr7ps556uwHWEowLuhPiLYnPRNCo3qgoxMzZo",
  "key24": "2zGCgNy6Cpquxk6djKc3Bck2b4ZKqG4unpqDETCZXJ4xQQzmuzEY31LyyhmCQfXw6YrfCngm6afiPxjJgq18hWdL",
  "key25": "63CXD6hcAabtsqJEC9pw4xJARwUU3SFb2c4phEdpyBeJZuSNRmZZKZa6Bm5iicfgJJWyVrdx12gXysfzq32ih8u7",
  "key26": "3L7D49NgxJUqdZdpYk84xSVi6d4DKKg8gzfNV86Qcwmwgt4578XfN75RQQhAmDdbsse34EYndayJbAKempLx4nBU",
  "key27": "4UnzHF6VXqcPsbRXDM6Z1iVAmQpddfUgf7rohiSDe4VoEuEAKq3czXHmqDWrWFeTB68v19YFMQeHkwEjpLFcX6cq",
  "key28": "S4bPCujB1PzdvBDrbP133ez22DvX6uNt5UeowJgmqoFjsjBrgb6GxWPaQKwcWovAWYRwWnVnULSUaNFsSsPWfyj",
  "key29": "4jJjjZmjw9Yxbv6rmuztgPsdFqHNtF4bKi354A7bbJJ4GiA1v1kXpawmU2AqDiYnEvJCW6ZL348XJGfrbN7tRm9e",
  "key30": "23BTWuUumgwdyeFof6ceHz6epLzmw7uYyqUcxWXe7Rpa12HnmsLL2mBbUyabczw5im8QRaemTorxcyrAHL1gHtWK",
  "key31": "4NyDwG85KVVTjrk9VdkQfS6g1j8Qq86PRTPca9FaWSae1nEJZ91MyEwPhLiJXhKV7stKtdV9TRnNaTWrtfXYFUYi",
  "key32": "21xVPEJKEi94SnDNQb8Rba87dDoNK99734bSyjaa3FUGhDVM2jaDixGD3pCdrQPB7cHA8DkJBKXfDFBgznVKZgm7",
  "key33": "4wDX5GRzr7ZYPfFWNmob3PtJAVygScbHif1Ex8UN1vxBoxsSZsMNoW6Auykhp1FfSwwWn65czhuMeBbdDHRmiduf"
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
