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
    "4H5qU9cidyYsyijKvRPMmh1DGNacsRdq4gvSpUKUzZVWNn6xwvXDFsRjdbGuuDPjtFwpkoYYcbTRBRg2xEDfWt3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kxu6He7MrTeXXMCphKyuKGZ4A4oBw99XF6uQHzmNsZnJmUGSHK7ufs7NPDL6skkrzC6xVkm9zjsL5NQpFHz7fGf",
  "key1": "EEigRgr8gapP73Y6YhtqfC2QUUdihAXq593Cd3d36MZhxvJqXmYFoNXpE9iC7SDwXPZnZqbS1FR2S6dE3bQihYS",
  "key2": "256H46bmi1fhJX7xkj6Stm47RoKjUz26Ht9wnRdAtZ37ysKxJqW2LL7TNoi2gBUfh6rgJj546sHBFn2rCmecTkTs",
  "key3": "3TgXm45EHDNnpAPSwZyv7AAtEnBBY55WWuj1kK9KJechWBA8qpQEbzARzbNRkUTR4JvEoSJbhkB7ev39sNmijQDo",
  "key4": "67N1WzSqwCwHMhv4zYwPwt1MCe2qdhnEtArTcmN65D9jveR2Cv32EaTpt6xUvGfGrCBh2CRvduU3zzHxkdXBHqhU",
  "key5": "AABEWHiGZL5trhLpyA6DjTj3uWZATDUiC4ajASCU2koHtSxzmDTuqGtPbTCVB63zaKkwfYq8d4oLnC7KR35gT1b",
  "key6": "4oLb2Z2CfoZhxfeCTeYmvuVhYJ4QYe6UfxbXnaSHEXnkuGCRcszn5e671TeSGh3vEt2UKecmuadkykLTyF6KXbYC",
  "key7": "3uVQxrWYTb4djTs8qXouwe8yMSpe16NwF3hD2pnD2v6v43tYiB31zbUWq9oUsWxq8QTjGN4mgMDSuTrazvSUECpH",
  "key8": "4RtgniZaJwLVPWmaJTje1BVpE1zaYrKwegqAegLLKZwrDgtsvumWWRjKA83U86sxgRWzY41XtJAro1TSneNqkDVL",
  "key9": "3GJ6x9FAUVzu88uAWtRFYpZEvCFqo4u9oLdLRUL89hsQRu7C3wYQrPG5uPnad1pWkMwecF23vxXcXXhgAJ9SZQz7",
  "key10": "3au5kXGDncsE1iNPxgSRz4suViC4gsTDZXudsgNHLbfC25rZ3iMgizApUv331vihMBd5KPvuAibnuN9SG5TanKwo",
  "key11": "78YUdNuhYZkf5irxWv3DB8r93ZWwrh4rayTxQFFp4yqYhyDZNUasCwRoVWUbeP4hL79xd3qPRpYPXkNSvVRU3uU",
  "key12": "p5JRw9FBGJFjadqcdLdy8kg8qeJzaon5utnHTNf3snM8D3pcEkUuHAjNnWvpHT6nJ7GUvkmdvwzUYbwLdwbUVBP",
  "key13": "5H8Hi1YyJcSZRgHCN6UEw4zS5gW6QPPUNp3Nr84Qv36oXFowxwrA22GMYj7rY1YDtnLVTFyEDx2gpejwmrRbeEDK",
  "key14": "5jj4xdA8CS1VSeLXb2qRdQAeaeACPSmwfLAZ95EofhiHhkUvHLFEn1ewUbtTXXcQxtVniF5jeH9gtLHXcygEECCD",
  "key15": "2x633Yk3Bdf5LdAfAVKdQUN2X53nHp6RCrEeb8dfhnMSYtzCbr38jZWf9kJyu97KBDaQok5FpguYwQ1vLhVczxar",
  "key16": "22EZQxNXqGX6PBe8zKr4dXffa9VR8mDPawdWjQFuV7pTB3SFEN4jiwXYg463uJnosDNUHfNggSWrYdRGiFUR7WrJ",
  "key17": "2WypW2xfttBnPsx4Dnz3jTkWPXGtymfdTwbh8g2bC7oFzWLf9NFYdbC2RoSpJZS3mNsj1hqF3ZZ72WW6dj8ehfrV",
  "key18": "JR1BBeRuAbGb2FEgQ9zoYX7tjLAzNV6kGvdzu9uEatkWVZqf8pqU7vr8n7JJDaq2CxCUNDfz2DL7oYsx7wLUDMd",
  "key19": "3P4n8zqKdnViz4bPpzW825oZMYqy7i8bLCshKa3FhKK9x4mwtUTG74czSXV6FjF1TW8FF4ufuZGi5odQDY8yd1q8",
  "key20": "4xre6soExhwGYfK2W6V5ikvkcCLVh5ysVmSta597dh9QGDgyLRU9uiV9z3mr6YhFfKZiSJxnWeBmQdibC5K82dgJ",
  "key21": "2XExWLDQnsKJ7cuAvRN61FQfR6JtVDQsiMmUFxrp7sW9YgJBY9o6NGoNC3AechV9kWQoiKtVhUR1UUayeDdPD5UY",
  "key22": "66sskM9fk97N51yTpZhF4MJZvZ6DMFedBR4SXGzvxq61wBrfz5t8snz91qKg4TTxfkGVmeTYCii5gBQabZ7K1Pp1",
  "key23": "gaZ4j6eueG72unLcDV2wsvWQjAc4rSowEChirjuu4CrvF8NGtkaSW6CfDZFV3cWX6o1Y3GcXk44nggj3NByf27s",
  "key24": "4aWPTm9u3iw7xnREvdKFWnKZkhRoizawCrZfdcjxY2iX9caSfEV1pDnScbgG5h25TsDdG5nBjEVWj3j4niXDytWy",
  "key25": "2gzeCb8qPB55s1LPbmHeMXv8TWybdfowXhxATdDp1QVQ3yszR8KJGSPJrtjGWbxasFui7XhamAqHdt3chF3nFxyC",
  "key26": "4yhnHEzdzeNVChas8CvADkr7HVxiEaX3XZUssvSyyhWMfUEnAwp1bYQ8w2ukQ1TyqHjFMjzXcyQHjpb6KsKvh7Fb",
  "key27": "292TY4zmgCfXFJpKjbqz7cEgoKXyHmPczjzXVbnPskNxDihFGGRjKQud5oEj5d6ZyHWSG13Na9hCJYrFrfN8YNDy",
  "key28": "5JVEdJKjYgZh5vBe9ZXKA7Qt2YXGbVfSwaSTCd7AzTb2WaoZtbL3fRpb1neqmormhw1mxr3V6SDFWhbswAfcSGfN",
  "key29": "4Pb1k3CZ8NTTWU5dcdwMa9A9G8wdiFXxhHie5bFACvs9vE2rgEq76mewriwp9u79qnHgZBL3oFD8x9tMPBti326i",
  "key30": "5N1nux8ChMjEkCL6qougWtnJgh4Q6gXFTfZPE4pdwMN6z7Fbwz4QWd7e1GzAb9KDLmoio3MG449VmEGr5fN9KTas",
  "key31": "3wcwZkdqMgvuY8E1Bq2FDzb7Q8TAbkcw7VHDt8twSMZAQUm2avgRifU4MDUFq6BKfV9LZqHGds4f1cMvDYvbLwX7"
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
