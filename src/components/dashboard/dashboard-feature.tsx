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
    "2uBL7FJyqwRJvSrZ4QmoeDFjFX84hNDG1pV7wQkozuzuTeuQbgvXvrYUqzHSwsBWaqE2Gt1CEN3e8ogdUweuSBep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCedzHPmWaBMGpfuP9G8j2J4jKqASKXyAi68vvMw2o6w56VeSFCdmgmxsAaXjDjV98kKMAf43XszBu1GVawSQzZ",
  "key1": "4rfc2rwmjSwtK879pTTmx4Cx63jSozoRRNiwC5fm5WH27gJsV6ENYTVRsy3iCLRwBy29X8oVAwkp9cVp7v92hNDG",
  "key2": "4M5eVyFquvtTSQ8LTmiXMwcgSfT1qKR8sJeiVpmMCBUrX1ieSoo6J67tj4bZNkt8nLPNNi7wXY1oh4FzRjPMA4dS",
  "key3": "Pvov3NKTtK4Zb5Zi2gh6ngT1N8wMo9aKbpYSHphWC7ejj2AB6KGGUmM5iC6MSjuk1HGrR9BCzggWDTiwHN9LyTB",
  "key4": "CXDfXhJcQaoSjVFs984h7saKszEKUCyTJknG5EEb97rCquYCcUoHcT8YLxUJ5ieQxxRhNxDPp6ccYEeNT7UyUAV",
  "key5": "5CvU5r7FCQRE22v1zTZXj41FrS6iM4ou7wh3U1Kzn8rjgviQ63TJCrdnRcm9gFhaUDS4RSAGG93pZr46VMqjiiG8",
  "key6": "nSYaJYzP2EGfArEcjjKMHj4RSX32VUAUJbkzUxj9NSrGupDVNnHW7H8dquxXnB6J4gwYVAMYVuNXFeZd2w3Ta1N",
  "key7": "56LkzBmgXQibBRqkHEJKnzywHzSrJh6UFyM9XJoZ5eMyQmQHZLqV3x54yymeaggcES5KMACAamKsDEFwzQiNUmTf",
  "key8": "3AiBgZXMVHFgPKCkRntfy8EQmcxg4dyY3KwvQHRAX4b3n6WN31MHiXAgUsTWWet6isrwkiXXDmLDugyMT5CPCeoQ",
  "key9": "4wsYk7dUCjDsedU6CBkrDvcovtJC57ZX4iiQAG3cYKaLvUXnHu1gfjETbk43kDYL9a594VUriV3rgS3Jg1HrZiEm",
  "key10": "vEBwJB7KEfL3qA6CPJMaQSRxYvAtfnE4ZfQNx7ut1RxmTRQqd267W7iPV8qgNL11DJUPLJXv17h8VRYcbVQtPQ9",
  "key11": "5qnA5EjzdF2ukYRanXvKqa1h79U82VTZmDFHsDzmnhCC8ybbFAo9yge8dfsk2ciLCgukZZiNv1pwHZaVXzvmpdJU",
  "key12": "ooeV937mkLuyTGRw5ZSFNjMCbd8u6YqiNtvpHAGdbYsnQSXdEb3MknFCdMCAcyBzgiu3DYi7VxEnHVRW8DhuZTe",
  "key13": "4j73K7MCoakGsqg8h3LiR9cPzvCcZ8A7CFDg3wf1Gzx76kb9265EF2Fnz1kepCCKewVbahGW8mkAVYXcr2PLbH4T",
  "key14": "5zD1uXK9LvV2W6P7cttgJGf9Sa5FKLCQtVz3ZdHCiPAeGe1DKFWBBnzyHkSUcr59p2GQXwDwUp5VLgzfoKAKLujU",
  "key15": "3kX53txfzv8FYi9nrGShbvzhX7K2ZkiFmdHb3p579JXXZsjDVJkcgbr91HAx4unUnCvorpZRHd6dgFoHy2AuCVEv",
  "key16": "4syK9Lr54GL54VAUtMTGb1LoDwsKtyLwYc9d4nsL2Esw37YHa7Mgh9mUWK7uePGXfRna1u2Qb1ygLQRqPBztwUSy",
  "key17": "4v1Ph6TnnfjuvKJNnSpeE1qyaXeJG431W64ATg3qqfKKSdvg5SoGc2eBb7xeE5QwUvtQmoVMBDHQcFk7xeHRgfT2",
  "key18": "63JBM7revSxGaFekqqieuV2e496he4vUgQCEMYp8RanLC3931mQP1xDj4Ku7ghuDW1YsfiRKoB1fULmgRqvk1WfC",
  "key19": "3wAXoF2gvDRrkPhxrLwvSsqzgBqJ4ZPVLA4mEtNwr9Q9KtJ1jJz2m6f2cMGGftMJGy5RpSjJRDVDwhu1LR3NqStw",
  "key20": "4H4GTnmNQAsV8wpFCvBaMgbWDpZcCBPFsGCtYrEZswC3YZ5aAAVu6QAwr4E5YbYHRf1yhwpZmqQufahMduqTZGPP",
  "key21": "KNEeLwoptsxqQUAE7BdMmNntaVctbHgJSFsCBAXyU1WdtECxNYw2zbEMnGUvV9RYfe4WkXdZAUvu1ToPCVPQWzm",
  "key22": "rHs5YQ9emuZUofHgmGZZeN8fbvdh3o6nfGvSgD59tgJwqzKhcATEUzFgqvjma7A8uZQDpit8MxY6bc2QSMKKK3z",
  "key23": "3AhLzADBUF2PVSU7z46ekRt8MeDdS3zCKnxxhPwjoUpuQY8WPkP4UbPrXiss8btGUjjegHDaqroiQB7EDvQMCQuC",
  "key24": "4Sz9VLzvXxwKdEZ3ieGurH1Q6c23hTxCp1Sxqs5zvN81qjRQz2M6WfAyzaBtPRrNb4LsXoTrdZgmVbpGDnhiDDPG",
  "key25": "4aiTd7UuLBQ3xh1xWPZr5z2WzqyXZTJrMxmjQ9mG6NTMi1SLG3pFF8QeLKFu7cYKDUQ9w66fDeytPppYVQNGxHk5",
  "key26": "3tY2qyT1oeawpPf7gLer6CwrRvisTdLL5HSV5YM9Pr1qs8sM3T6Sob3Xqhxm5f9igaL7zkD2SQy9USRi6BJAMcSE",
  "key27": "Qk7J8uU7YZkrtntYfEF88MCni7H1iuSEELNRCxHHNp6qzKzuqeMWEzFJzEBXtJcFK1zg9u8bh5cZippS9ADWC6P",
  "key28": "ZwN9ZfNY48tqtNwX2BAGGTN3wybxdkXjRGkb4Zt4gKw49VkrkDMtuztv3izfyiV3qeChpmzgaQt5E23Yqp4d4f9",
  "key29": "HMrYE61AnNtFnWXaQSJStBVr8QJvBwBB4kRyA3x4WKMpzn6oPGr8woAcabPsqME9EnLs6XJj47DnBLGiqK1tbA9",
  "key30": "5AuZK7AvhH16pgV2cwKYUCRq9YeHZh8BFWsbrRjJ1AEBvPjwWWdBBNL7u7nv4zgQm5iUKu3WrXCKjpfQVodSb7bE",
  "key31": "5dyaqCWPrBMRr3pkZUW9ezN3DN3QK6eRVqD8Lkc4MRn7se2h98rHSAm1o8urMTEsZjr3zBiCbNimqZ5k1vHQxiaQ",
  "key32": "4MRsY3sguJ36jeWqNkkc87PRRSiuDYgjAuLryXJ5XoVz12aGayCS3oSG6pTvh6npDzkPnnw6RFfWm55WTyn32Key",
  "key33": "an3pKFHBmQhyR4zYxWQHhbMQqDk6k2oj8mjf4ss3wRvakpxYt7ha9pTVyGZBLP2SqafbUB31zAqJFXAMcjzd2fV",
  "key34": "5ugSUf1vamz7eAJYEs62ZTnSKFqTkUbsqW4XyBYY5fnPucCHQnZosw9uMQjmPK1skDE2zLCJ2FTYxbkjXUaShwVd"
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
