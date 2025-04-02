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
    "4dNh8eWBQZgcjYQZKdYvTMZyQZRKnZpvkS9VjkY3CdGCwKSC44nJA4zY7JSD2SRLapewwaqFmES2Xy9vtzNhMrsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLAyDLRbZN1hTmBUrdEM6Xt46VW6QY6xRSbsQ2itBofH2YCNSFtTwe941eNTEvbtxyGDSW1n8FJqvyMzDk4nfno",
  "key1": "3XuUWnRmNXPDmfqsxDSY5GDNsuTnyXNCRoCCsoeUedbBhz5cZsTJ8H2PHrdSQFwzAMQt14qtLpAoDkfo6urWV7Pe",
  "key2": "2Y8wPkhoqTtMZh1EKSh9YiS3VDqCRfV9E1TeUGcx3UitKWpMbqYwkmfz4JM3gjzfuVh5pd9tYWCK8WrD8tuFhsuw",
  "key3": "2Q6w5gqKRx1ztFb2W4QzDFgR4BvdS1ubGuq5acBYQUAWedZJGjz9X394doxxyt8TLpQGM95z3c1hFwYzyzh9uX4V",
  "key4": "3up57aaiaTy32YBnS8S1Kmk4vZL9e7kCXvFDVVqE2xLt9Jyfq6UUUARj6M9fqbVj2M33jqkuEvCjKqJtRKvGaSn6",
  "key5": "qwEuceHezKusMdkt3LWBFKLoR4WnXkFMC8vdSZvKp6qx9jaWvV5iFz66unC1RHZDxTYsSwjKj6f73tBaf8X7DeL",
  "key6": "38g7e9PYQNfrSNS9PG3hfTMfGVgFVF369j1kBH5tfnCgVm1yuyhuoY7MXjMJUi3JfoEJ4vLTzkFvn59x5btHhv5u",
  "key7": "28hv1NF72fqC6XDee2RNmsyEinGPQmjv5DEL2VG1Hu3HTuTAdF8UrgHzm169vkXGYkQ2Ej9sqihg4giFS9jWZ1uH",
  "key8": "36tDBzZJkV59eHeHwcieCBaWxroeTjXKmaAtLW6D6zLqsw6zUFmrKQbhGmurXbZQZFkjz1y8z4dCZeMYJRqYXBLi",
  "key9": "4W2wWN5TFAPgySHqYfSgz2r7xxJNxQ98aGvoAqZMTFpBUZwZQLk9KQU6f3C1oKZjwGtXsbM2msJArcV7JqsriLoz",
  "key10": "3PX4AAefG38DeGtWFnuuBKLezqyex9DJQ7WG5royHRdjrqbNc1D7xESb5wHaiAgsq1Hp52yNBdNNWewEoivFDwm4",
  "key11": "hDc2fnTPvFVbxchDBDeJCrveBdHWdUU5tJUonu7zyeWjBeKvLkKtJzKXaq8bEGe7XUbtgHnY3qB96nwhkaCqTbu",
  "key12": "4ZE58FMwBNavaVvcocWJk4ULfySepi1xVP5LL6HpdESkLyvhtcb1bysxtdQY26uUmShCfJ3M6tYqDupc7Lo28dG2",
  "key13": "3d31Wd8WQiWfe9zJTapudahYnwUdCmTUFt5mxoawNBoXZmSqpuC8jYm7SdNHn59o1W9rSuBwLp8WEgA6H81PqETN",
  "key14": "5MSuLqoQT2kdS9BwmaZZVusAXoL4jqnFV4rcbnbXm2sdTJ3FZwSXFKsPsbMajbpA29mfTVxGbiDWB5JTMDZ5DQ95",
  "key15": "r9ty4LPxN33JMJpq5onzEcEnTrGkzLyRQDi6qgJ66kFzch1gB7E13oXYTo6DT9v2PjeZe522LFoteaAY1o133vy",
  "key16": "f8VBNLWGRxvPadhf7FwzC2pSxYNkVGx8fxYt4Uvjt3gBBriiNWYLY3Uz8dh6AbpNsMCWQEKPaY6sLDovdxB68VS",
  "key17": "HgnpHHxwsrMDoVDybVgfKAJfsZ87VGEFr2pCWMBEzo7Q7rZ63TBFjEkTxkr7XpkJgDmjAyrqYpkpHzDoSPXPUXu",
  "key18": "3GE9yFWo2M4AW25B5SJiphCRjUeYNH46UJBZu4h7eFojp3zdatRWZnPcyzb5AZTQxnWc6bkcaatWHrEpUWLHUGhb",
  "key19": "3SskC8J63HKCPSvbUUU1oiwNPCbwfx2V6sap19zTsLX1wqtMg9Qfh2ecS3mjQEqEWdBUFZP66hRrsqPqqbEWiYaf",
  "key20": "dismJK9aeiUbjJHyVBxPDf44xkrjHKJFovV85SrcVSDJZowAKibFz7a2yZcaTCaksaj7X1jnNBGnpwZntSwZyhJ",
  "key21": "2a239MACmj4yzQuEsSdjy9FWAikbsYztWvtWNZ9oWEEbHJGff66G2i6eC7xm377hrTSAP8CeUtrfz4SUReEidJhA",
  "key22": "3ACMxTruXXftCYoHrJUtFiFA9bqvaaUP8SjDAgfWU7ZrsjB384FZFYXKALL7iJsfrzz9dTK8P1fc2WYeZfr83Ebe",
  "key23": "3mKQyiPZknVEQnUACQUueov4ndgJzChb5pemqfYRw3f9zXFPvqVwzM2YQvc8UK8y4DPoucQ4tCvjZWcoPT55JNcW",
  "key24": "4TwVWd6PnoDxCqkF5QkJRcXfvEE4XtkwUT1PE4x7C4Nr8PVmATRB7xrSgfmq5EqKShvytKgoEFdVtFsbC35t9ZJL",
  "key25": "4jENrHN5X4qZPfBJiF2KSeDgBkrzd9RaTD4BS6E6YCMMkAuAdHYj4iffvxb1Y39M4Jau4K16F33ABaXaxG5aDpkN",
  "key26": "5wwtwzsRSDSXMmB3JNBjQbh5L6gccVS8q6RHMdVuHhBwaL4DhNsK3ec3Ky1EHur7fK7bhZhi7ySiRtfmSscHLURe",
  "key27": "5t1icMzVmDk4vzHo7xNYssMRJWhRLYaJNsjA9EV79qYVZuEKkCtWE22uNzhd2yqEG1qeraeoF3LrxCqa4wGhzuoy",
  "key28": "2ugxVp5vReMWC7e6e3DmrqkR9zABedgAAv1ZhpBuV5JDYLXciYVngEf2qGSFc2mRCNMNCkmBsJ3ZSaFB5K95HctP",
  "key29": "5qUvo5VCkbfE3AU4XSSVwxqWvP34zPayUwhxWkWfAPRVN5w4nFN2GyHPvgqre8WUpxy3vh1w6Knd8JUZdk6S7fH3",
  "key30": "3bhbWPMWrxEHMBp4RyTtMTJqLVpZd7xtZRiJLTBYBoYyaJe6GD384fyUntALebzk4sndfXY3ZW9f4e8AGp3KeccS",
  "key31": "2uJ7Pc2XmdaZMGPMrgmFK3TSfbPZbcVEbJEnX3phifk4FyXFMtmouxs6AZZotMfZmpBLvQw81gDyXVFSfBmfQrU7",
  "key32": "4wc94RictL3EncANL4SRwbNJs9GpQpgB1Yp2scJsmFzH7t7sTuA4XJVrktTC6Ye5uorBeMwm2eF9fDHPMjSxqEp2",
  "key33": "4pgecxQa89328HDhMRzxDvxNFstxw83vjyMXb9dd8bjGPDjvskPc6k19NTDVH2BYxQmZetYTLkpV2AgUofj3cm4C",
  "key34": "3CKQUdZhfk9FCvQ9vwD8EU4Pz9iTtU4MpDFAxTrzXQamWyKB1yG5CK9pcqe7qCZ5nGHZjwkKBpaBQRBFNqRRpoGG",
  "key35": "2Aag86tsPgch6vb4mM7J958YVpEG7Gs7C1czrtExDdjV35xfWGNKu7BXifuoUjbZpfSM3YMS3CuGSdJBrPYPXfW7",
  "key36": "4Pkr2iBjBajMtu1pzCbMVmK7h6Cjhs1TZqTrj4rWDb5fCSXdxGuVY47sc331uKBGn9u6R8eHuuDXEtwdakuT3GcD",
  "key37": "41ycdQnUH5wAsUuURXP1Lb93xkhi4AoAbkBRNavAcNttpknT4xaiAHgbsnnHHusbmEVwSMgVzEXzH756o2ZRKn7P",
  "key38": "2o5PjfRzHAih63JLraVf9CYq1AX4soncM2gbKpcX2kCwB7AYLvjtVR3BqgowDo4BnSCtJyLTgsoHmYCA8QGdo1KW",
  "key39": "iB89sfRxX4H1gXwFkVu2Do7BdmDKq1MVy1WqcxD1fhe5fuAKaqePXkoGWB8c1BjQSELEKwKuNsBJPVUqq8hrY3f",
  "key40": "678cu626TpxeCMDBWQ7KBHaPZEbf8LwFyyKZ6ekiiJ3Mo9Wv5ThPnimmy1sDjjkHFYvM3B6PNukpiaQCRiZTow5Q",
  "key41": "3HJGmjoCzkfqqNdGvCoNvpXkD9Rs5oR3W2NDBthP65TAUgyEqgLyRjWBZu7E8f3A1qWrYKKqpnTiSnZoDtJgsiEr",
  "key42": "jjCVkPschqBKKeCKed2QSPUbxQ3dTwn2MDQQaQ5ma3Z9a49dMJGYsazghz614LCcn2ecTEagPVP4cRj4kvUrknC",
  "key43": "3SZ43yWT7P8BgdQwUmAfkJMRXMnv5rVGMPFcdvrRVYD5ZmCvyaiBM71Zx4RvUTi3PPBTbagPfBz55cxvjarK6P84",
  "key44": "5KmrkVB5TvVjVNFQUH3SeBpQP6Rjz8ZBEm2CSf8sVvg6YE8rfh7NKnsDVfiFsmwHjkRmqpK3P8hVo73kMZB6yJ5U",
  "key45": "4W5Wup8XyaB6y2CxtVv4wS1xp9e271WDKW16BTYoEgLHa7FJp4PB4ZASxiz6j7tojc2EKXU3JNygSS9aSWuMxwCq"
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
