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
    "3rLQdcxsrLGiDxTwfo4yZ1pM3DGMEmhYatvCrZr5BsJzAmLLS6qncqsEFGUTZNtPCbaKgZBkNaKbkdwxMtDvSS5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hvq14B7RwBRvaS32g8YqyQY56URw8KWcX5m7PfKL2wsuo1cDbf49mrAV2aCv3MEg5EJfP41Vbfb8o4gNmLWiqGY",
  "key1": "WMVEJdDF7oSueTvVs5YzfjJCbvFjkZTPMHY3zqZ4RaqaD9pUgE9G5zLaMpMAPkpwFDcrc6cGKzYPjPZmiFcKS1V",
  "key2": "p2LvzYEEKZfcwara9ZSje8gcSZQukFNjRf1DNXq61NSK5zXwt94vzHtz76KjvFUjyT3qeMQnvFh2tiyDyqy6dPy",
  "key3": "h2a2ZUBfLzvneazo5EdPzusGNuhSDRRYmnq1GiBeZh6TngVtTQvJPZejiii8T1Ag8gtkkNxeQLPnX317z8v8Xib",
  "key4": "3RDYmVtZRaj2Uw1ic81SMtPkJGtTNnGYXSimVx2Pbv2rueEfJjZG6EmAu1xoSXoJYDEDF7qLhBPL8QwtL8qZ51wb",
  "key5": "3NUtG44YHwF19u3iBx78vtjDDvuG2NK5z6cQ6DAJoig4DNLqiZ9HwnYiSCVJc9rv5JC4qtzKvSTia816QnxTuYSg",
  "key6": "38dmcVeAgJmNu8X9C5kVkVsW3xiq2AzPRFf1Sz6vDC7NiUnLHasAjuecAHiC2cX5uAzkAgAXR2GuCyk4FQroEPBd",
  "key7": "3kcf31z2StqMak6SyU31sdqLb9mVJRNVunx4LVdpSL2YfA9282WZYkbGdYK2GkQofbh93bwJtduJyDAaCDZNiiN4",
  "key8": "nMta7UD8PNfHzzFK4Jxc6sie4se93ByLAJ9weoLPBGHR3pcNyjtb6vUiZaAK6pJxzPYJNVJvZ3jUvxK6WBRHCK5",
  "key9": "3YwzNH9FuX4H87XLHvkuucZMDD28atxLoYgyB7Xyx1MshaHpPrFf9xb1QB9ceNSsPiyiCPKx9ujSQpEu1UKqiMfi",
  "key10": "QEGijPdR7FVegaNdnv2bF9CsUmCzf3B4X1ThiV2VNvnzhDttZdUDvAcgppTck4qjTuFRtKP8VgGsziTZfe9ADUB",
  "key11": "3No6RfKKUFxtavwhpJ5aF3sXL48BphQicpNUy6KBRZna5bJSiScCMvBSfhLvYn9wPhGJq43AFmnHarytkpQhiZ4t",
  "key12": "613yypYz2Ba7x8wB7Nk8F9wmfTZ9zq6Zm8D35HpYkJBhSKUkHUG4mvwHLyrhNtUSjN3rDjvs9ubMeZsEYjt8JeWF",
  "key13": "3WdnYLfi744ApjnWnEDoEEtbDQexqC4tTigcVr9bsNX1uzdttPitfXGg4fRYHsQydNU4icGDM2ReN4NGnTsXQW8K",
  "key14": "2C9WygXoEbfpN6MhmZuaRqm2eYDAoZ5Q1mS6KXopjPtfSbuqcmJmUSk6ndqURcW5A7jMYJpDSgcYr7ZXaQPaGzJn",
  "key15": "2t6CAY86wLLiJzWWrhMjtWmuPaQbHuMsAjGjTvNBK8yjLvRhM62cSafAmCv31B9RSes6FDm3i9gHENoFojapYeoK",
  "key16": "A6jTL5r5qvuAU5uPtgzKobh5Qg6ZfkFtS24u8jxbKfqFCdTA7f49VWhKK6uqEXqjf3J5W3tBFUX8Gy7dgKWq6LT",
  "key17": "Lj2L8P4pGfqZ9Wc4SZkwDTsC3jdkNgk5kDF6eTD2sjiWhHLba86SQJenJHNHuUEAMPyLaRUQcypsA8Xv7rbVJUX",
  "key18": "vJk2wmLEUc8gFQubtFZMZduos3RxCWeCvUkohuCpKnFgqsucysAHgF2aEoRZX7V2xwdiFaaroNGPHvSBME77Fgg",
  "key19": "2fgPhj5kFR8Tn32g1iSTQGAnZAUkPKqqrg8uHHymu6TtUTmWw6Puci8XSAVPqN2nNH6yDskPomhxZE24qqrajt66",
  "key20": "4wQN1sPxr7xCEQEYKAMWEvZ3utjnfi5JMPkXmkFDAkmdXTeL5su55Jkvn8Gg1fjTqHRvVCSxjN6V6KqbxNUADSZ1",
  "key21": "2YMpUKeo8VWJY4AcZ6qYvVzqBoqswdzqn6sKXUgrZYr4Xbq9PCpTNpS3JNzp7prs1Au9vCqQU1EKMoMEiBDZJxBh",
  "key22": "8Tkwrh1552Rsf331awvL194mj8eCt4cbWUW4jKTTHxFrAwy3de83ap7JPY2tytyQrrf4fSaW84i1yhrexFoEk8A",
  "key23": "25n5JKs2PZmvkyXHpHM7czxKvmFd62gy1K93E2C2ZsxJHtFdZaisc5Bin8NFiDE8aHwj5uBuZ3AiUGdovbc4SWBW",
  "key24": "36xuRsYA5AQp2caRLFXQ49zHpV75RDEQfVmkJe7aBerpbMoYaDdnAkZtrkswAa2uWgR18HbuxraRjhgtPC7NvgtB",
  "key25": "3mqhbZWivavPA2o5Rc3dtdio4y8MpREaYMSTGFS9cTSXXvqnfWLY8Di3owCkm99bgUQwNDW1Y5j1N7Xg2Wcdfpo4",
  "key26": "7TrDjteX6o7kyjh5L2t2bYvUeG5Y3tWMnURUJbeLYFHBnDs8hboPWAqBnyB2SaMTUkQTTPUkJWNTPzA9i7rgBFZ",
  "key27": "2r8V2LZ8fsg1AYfgiwK6NHk5VLfAbCSAaUuhaVt9EmKryJ5PDz4rwrFGy43PfrDRL6v9AYkpYYZW2VbtVLWvpEde",
  "key28": "UrghccNqcDo5zY81vJBeWST38XcH11d5vVkycowceeF6x8AMb6NrzWCfRGeCCraQFua182b7bDQuD4ENowBT4Bh",
  "key29": "5oxacG1fZoTpUpgqPcwFWkjdUc99oEzKMDbKU4ELnEukaqY7oDYsnQKSr95dX42a97oLTWsdY8k5LqsGe4dj1BVU",
  "key30": "61Rq6a6n8szzF8SEv9Ub1i2N4bWGYZ1EcCpNsXjqoCdWby9heA7daz6RLW64tSYTDvfHwjLipgnRKChKdK6XJ4ax",
  "key31": "2LE15W6zZhXCGxbD2HATiKxCiMnMAjDahac8VSSFqSS5a1my3kCAwzmS1qn6cPoTSg8t8JaC9MUhdeTWjTXszgxc",
  "key32": "4z7SpjENkGyb1eWtg56mLVwN37iC2evyDnzwpMmPgvnmoU6y5ohSGRVLeZJjCDyq8iZSoJH17SjKuEDpkNd9gsXj",
  "key33": "2hm97grM8EZJrukL924HVStexmH1aCdvvZSB8dULXvX44ugJz7BUaDQmuTQXRLV1gCmhp9obv1eonJvjFgGgAxVy",
  "key34": "NDAyeB2rEGuG8ex6LJD9oKgzWgup9ATNFGS8MHvqNsVxprAS21u58U6cJtERdQqBYiwTpmAjhwezRHgjzsuT34F",
  "key35": "2cbVzFgYHthbcsvUYBJoX6cBDeFynp7gMRz6bTi5Wf5zNt7tUL1Qzy3wcJZZSkD7PTFhesw1tonaug7a3MWQxRoF",
  "key36": "4P82q2ygJXvfKSgGrodHn57igLjtBXePGCVUSc6QUZBd7NeNAfz32Vwaq7Dhf8tSEGZ7p93udvDAXXg6VDsXdM41",
  "key37": "tsJDG8AUa5ph4B55eMuZJujh5n3nyADcwu8rRePtTPRikp7YkgrRhdt8HtZ6MzRhmYga4SFhZyQ9g73EWT82UMM"
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
