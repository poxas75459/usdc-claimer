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
    "2fR4MEevKLi1DBZqEG8F5Wf5RKQJjJevq6nKJKz3eXc6tZjJzKfsoTR85UYztG5P5CuT9s1BWXss3MXBPGq5Rgko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fykAzgskHpmU2vRYAcnH83J1qSzBFhWUaP9ZM1T6gyGsoU5iUBjCDmikWWNPPDL9k4pqSmbJcnW2QRUZK7YA9D2",
  "key1": "4YuAbqR3Czf59Ej1HdRMPzQSW389i9vWwrSEpkKJ1UvbzEncfvBMcopQptzBYaRURBrFcfkGF4eoiC54DvksVs9S",
  "key2": "4Azc3VNWDVr5wnKAXcpjnhBt4Z9UEZpRFzdu5dQCXHHEjPpz9o5umZyoRrZcdoxVD898uBVZit9PYrUWMsDBbqZg",
  "key3": "3jpFps197KBZtPfcGWiiDzJGsejYsR34gsh3CsNbzkiP61AQw688xZGcLpmeU4P2atPc9TLvUjsXgpDFHktD9Sty",
  "key4": "5Y6wGUYGnfrGjEtSn98kcmaCkzaSaksGgA5AszWQHNEGE2jttvf2mRDEXxPqVbL2BZhCD3p7iHzimcd7SfpkegWU",
  "key5": "3RVT2dmcuKmdytvfSoG7ZHjrQMQX2ort54hM2UUqZuBGnR4qM2BXQWkSFjpDMc7KJfAFdvp1offjGw5KXqmusapP",
  "key6": "4h4HByauyEXTknqJLar69gqAheRnwfRPwfXmhKCV1354z8Y2WKWghPTUb8i22Hk7nFQYRFTZiXzdf7yhMjbdUwTf",
  "key7": "3HRfZWJsX2B7uET3pjZeyyfBDtDhbzNpo7xsuBUj3JpRcVa8CW3jZPXJyFLroRUiqpzZ4kTN5zYtwqhtZjY9QxZS",
  "key8": "3e1meQCUMDm9jNEZhNe81crDz1617cTzMXkVawaYvVWak8Vpr8PdJnRYvWxzNFmQEk8zmgjQbXYBfnzAjX5u7NrY",
  "key9": "67WGBXdKTik4h4RLMNfRHycYcJBvsX4hnc4fqbaK7Pc2XzmDqq8UwWYtULdg2BVyGsmtYp9YCaZkvJxPw7EDP67d",
  "key10": "4NBmFK2HTMRCidXFTCs5ed3zGdnbePdmRxbXAdJR84V7va5CmpLtxWKJi8QGSpYrjr5m6qCUzJW2CPjEb4LUaCt4",
  "key11": "56HVEXanmLh2CbDsf12eExXs3YZCHijuA2iKxyCt7x4DewWHVKyuzjH5FY8W6sxSS961CtQmnKQtP3KNz6qNjX1n",
  "key12": "2zp8B2F667ekNcHpVhCVAAEWJUZqUaGwNVqcBcBDehfhPvMNKtd26MLxro1dzfBqhsNKaFuL3swj1WGkUViqthV4",
  "key13": "5UQXv6J5QYf7xSdTEvJFv7n56V3Zy5CK8Xh6D91a9dQxUz5opZbVTg97zpN41pnDWmYT8nobc2WZiXYqXQUn99YS",
  "key14": "GN9d2Yj3Qj2ejQah6827vdYynRLmdWpgN73j7WX8TgJFUzG3tQYufFpPivYC8JkiLgxncKUN9Rzn2gXS1MQYz2G",
  "key15": "5ozdNbYzTxGpbUNoHswxJQd53D8gBnrrNrhnu9oiYE12hcrYt9DvcwoBbCojkdsNuF1SJpNBLDuzBKJgyAC3TGM",
  "key16": "xJVEnnkuWdKGcLw9roSiVfZZDoYAgttYMmWeKKxV44Z9P9m8RX9M7V5fbDg7JfoXmLVAKWMRkHxeGUUTSTjGfYg",
  "key17": "2ZA3Zgce7mvDnXrrQkHCrNUS1dhQq9e5nemgiUShbcJN5Z2iVtsduhQhGFFTkQGGDiYVNDjM2TDZ7nC5WNBthiVg",
  "key18": "o2U8bYFshSru6yb98sFpFpYsLZmFAucxyqy66y4xvHfSUwTDLynW8o9XSSJrP1dYGzBtnegoZp79mmXVrVBLWU8",
  "key19": "5vTkshfhqdbYzPB1JH7sHAeCgz7tesGxqhtsVu6GThPT7Qo9TzgcJxZDCDWztQnQ5rnPYu2Cc4FtuSWcsZJmb3jj",
  "key20": "5eqFd1K7djvdovY8BuayVUDYKjcri3cwSezShJfhmMmqRzU2CMecwvfmrVzm1x6Mm32BmJaHgFF9kPdvDe3tFYRa",
  "key21": "4Wmm9n2m3E7WmR3w3EaQsS2MmvHBkmP6EWnv3qnAjaSe1T1Kkb3gA3mdaYsmNYb1Lqsk9Nnwco4BsC4PJk5PZyKU",
  "key22": "2RcoJ9yTFHLwt5i53uXHmtp17H66hv7VNFEnVKw4VfF6J7BF9RFKCpPYoWM8injzVmPXJWCvkviTftXRyxwrbz79",
  "key23": "2YZXCWGZhqiVVc1cxtEZ96jCvTKAPqb7azH24Dq1XFa9avaY6jGefHBgTJFmV13Jzi2CL84wyoJtnfyWVs3jENgf",
  "key24": "4phhtrEfJHhATjY4tjbEEdBnZxjd34fTmzJHvYGoqAaK2uvZHjrEZWPmmARu1oBHoq3UU93bUAKDVCV5zxHu471P",
  "key25": "f4pdZYvFaPRZGbY6ny4VQQfsKpEbuDksgqPbnB5xKJdEby8QuQefAyfHaHhpVsHKMUETE6fExYJWCRShqhdNDhL",
  "key26": "5afWvDUrj2kJU7PjW9VMb2E7NjQ5LpU7kHbWHDfiUyuFEYKZwYke11tkJXDkSzPQbKU4SwLuXXa2uM2D8SDSmCww",
  "key27": "5BWK3nRr8FSnpURVHyJv7cyxErbogskHEnHk3bbvBk2PpKE6R4jV8W2vWL3ZN5Ka2eSCMojahGF5WqV42jSozTsM",
  "key28": "4xJLfNfcsEbhjoZJNM8o26UBx5GWqtCah9S5AQcDV3nZsNogWNmXSoC4oRM2H7FqDqA96aj9uH2sPxJKJWQvSo9x",
  "key29": "JZkJTCJ44pmu3zMFT7W5rycqcRda6veYGM4YhwpakZCVbeDNvBaWKuGWTqthdXzXaiBz4PVUnedVaBbusCJgEG4",
  "key30": "4Lw8RK1GB8uzAnBff9BoXxFbQ5BtBvuvuZsTf4pn2wnTaGjv3cjtTFC4ddXs367LoaAtry25SrpxHXuCS9sj8SK4",
  "key31": "2G442idJNzL82r3NbLLyQ1u4QqYXgugVRYEmHjtZ5icuwZRyJKSu1y6AS6C3r65MNa3Ac45qQcuKfszzLdANbnVH",
  "key32": "Lpnq3q8KVVNtapzFghCA36xx7s3GfFrvoNdfD3U6AFSh3QboNyTJa5RXcye86MnGMUVszcxZTi2QsT32mhKhzZV",
  "key33": "5F5HLpfpX9M3XpQQ1Y6J7zV5ADdLNQcJ9jqL8Jv8JRzuwdQrjjeqBZ2kTG2zpzM2tHczpPtZUtsLU7vb54ypHGuc",
  "key34": "2Eajwcbd3tYx6tzT7qBZHeS19Np1XgKCH2HjGBs33SPNEvFxeW3sbRsxGWrQ461EmVQFvFyezw9aFee9BWLWWHqW",
  "key35": "2KZSwp77xD71wHbJuh92cD9ufazBm1hcVgGPxWqRRAfX77BAAjZe5QWWMNVexFWqzsc3ehVXp7PcaGk9kwXsGmqU",
  "key36": "38PJCeCFtQCfByQBj4EW81gW2iUB7pp5jxLyJbwnx5kFpCXATpFBXwgWqi49Lz3HW7TXYZczhgjHy5LC7Udv3Vrg",
  "key37": "3oUyrqwSdqK8wzkngA9bPjNBZG1e2EhpdqfPrdi69mD6Nju9Sg8mrkdKxVkaf7DJ6C7LwpYzBodUo1311U5R5LQX",
  "key38": "5J8jsVivwRvUwbq5d8WMEQXkpvdodDHzYoeZdyjKLWkuzKWV4yUV2eU18PkHUoCFQjbYTsKYJVSpWVttrUrc5KzN"
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
