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
    "44eJPSGvzXJHUAHu3v2VdFGbDuewaDi49LCjsSK7bHQSbCQHZcN5K4g6CrxYzL8sZtejrXP8NMBiesVLknc5UHjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544bJXVhricAemJAsxtgegmi9B1nT5bRLAgPyKvQSj8oiCarSwrhVhanZJRQCfAivCYaLUiN6DV7WUuCdPgA6zqT",
  "key1": "65wBkFRSwoHaTGihoMCVHUvR9xZhtz5hheWEPNRRW6QSk7UT6AP9vtX5Tyr2sQ6aFL4vfXqrNB1fRVr87va9ZVSW",
  "key2": "2fgfSWCQurMg1iX9sGG7vVDNzV91bdhSxmmvsHRr9ma7jLYNH2A8b7NAY7FJ5sN4b1Nf9TnuTtjpFVvbATghoaSz",
  "key3": "3u6YhRd5HA94xgrugqYA5tayAhXYSS31vvnHQx2Bdp5M6o2xzsayPwWQ6QoptWFofMv41DnRHuWfWr4JYAqrueT7",
  "key4": "osMVdC6LfyQwF1zuVx2gcsYbXUCvXSTYENsFWgKWGn4bPLXR6b77eeJ7XqhFhqGGsk68FJZMd9rHCJ24hcwnfPC",
  "key5": "3SnGTv4zGazmadTABzjpS6cQT4womJa8mxki7bX3NsxJM4PQTksaKpvjMzTgvVwGHJJ4BvywtQ8bM6kcoVzDgpEF",
  "key6": "2mfWpA94c4WhQUC5a1MyeiCVKx43rSdDT5uzcFdeTVtDqVhMJV3ytZPTZfDtLaETSKKk9cnnpDqwCoiPHf27rp1q",
  "key7": "4CfZfB4WeKQD9kPsQQGDNej6YQ1RLSSBhguisKq8982sh49FuPRWfkMzobsGf185rmdo56RnCdYbS1UN2W1MG527",
  "key8": "43Ax7Bk56WA2sawU7hzCArFv7yE5KPY52gbGZueQytoqdYhnTnsjmxFJeQWtta7qNHGr8jTqeVxds9yMaFfL416M",
  "key9": "ZsMwi3zFJHcFLAYFtef5cG7rddP9cMuB2jKMCHLiVW3CHSUM5MfXWdEk6iWyjMWCp7v3wxiC7qXpxbSzHT9wAGt",
  "key10": "56HsPUUzx4VfavMofj22Mfh8Kn6TQ9qChqWtqnfM7GsqJZBsmkA8yNmEz7zNBA4LrVDPyLe2bPGhd1cSU65wvxrQ",
  "key11": "2mkoxezc4q4rknZazJjZicgxSJK1Q8eck62X7bUG79VxTXFxKAr9NrSiCB4fZDVYaGZbCaFfCyNvYEkdeau51iri",
  "key12": "3qYRwcRj9osF3t1GxTyQ3rnEeVisAETY7FvP3VRsMuCwVTRQX6JJTvFqAT93nR4ua3427iVEyBHNgzDfvAuLGWwM",
  "key13": "NG73M3RudErvL4oVEJFVgrCYxwWEGz1TBXStTpHB45JoH4RnGan57NenTG9psi92f8gncsDEDJfcETAWVt6XiXi",
  "key14": "4BucUoUoMj5T8BTQubGgHJhXVogkN6rLe3kexsZQHVczVnqgWkafNVqG2p3BgWViZGgpNTXQGhKQfQVqLGsGtF52",
  "key15": "5v2V54YYAa9S4mQEQyNry4KzDtgDG5pBXCHhBkohVK5wpEtAzhfZzcmF7Up5SX1LtGt3k64m6HiJ4sdorNhG83pj",
  "key16": "2Fj9a4dviZbARm8eUKFkXPUPRmX4bVdp8Aq4uGtMATj5Q4wHcTV5zmc9h2FmSN9qtNDLFC4MQPQHwUdqfegkPQuo",
  "key17": "5rV5e5RfwdbMKgEEnBKJ1EJqPjX3XZTdjiTouqXNFfpZZGVqfvK3KYE9S6tvxoGh5ER4QpaQY2hMjktuFDymd1g2",
  "key18": "4E5q71hwjyYEcEZEuHk1Ezc2GpmXd8qF61Jnzkr5YmefcS5VJv2hVRY3wp7TxmL3eUYzdamm4DW5e3SJ1itSEt9A",
  "key19": "RypZ2ezniLUaxjgmsLqDphZ84FSki47K1QP7BEBKPX8VjVzM5fpDGZxSEpqn2JhSkzcjnSLzLyfNzniF3uVCLFW",
  "key20": "5KDMdM61nPL1K5bkZcthjsBbjRpfKRtNbyXvtegjz57nfdxPGEQ9jeU3Lg7iNdiQqJrnUnsdZNiDuW4fqyoT2pXu",
  "key21": "4ipWyeG4Y9RaRWSns9mBdRupc8U5wgGdKcKxKh4ZQtb3Ya5uFEAKsiKN1XhfbwdCeRim5txUd3Q7egcQAoyqA9ws",
  "key22": "5dbdr9q1vtDk7QkHM5iDc2mjMGXUkRfTHfybcT5CK1vVNVULSjr5qsK959fALJBNvusgwNzTyb1wx1m67CukbKuu",
  "key23": "3NqmXwLNnLGAHKMdk4Myb6SSuzHEyfLMxBAUVWgZReJa4pMk9dKN1v4Np6gw7xRfxed6gtuEbhsTaFFwWVDaf6Pe",
  "key24": "28Rm4sXjZjdU5dk37rMBexxaVut9hW1CEPNb9csSTVYerscrFJcwT2whc7bCFVyzYdbVs9PDezmhzhEy3dyQFfyL",
  "key25": "sh2mkDKqPYpVdcuiV5XBuknjAUdMkJcDX2mwaKZ2yQdqiVDCBq7opTCnEksJsf4tx36Pxu8KZrJZ5MNgFJdPg8D",
  "key26": "2VGWE1dpB7XexjevnHhAXtrcpLNribTvQvefKgiUVLwSsjJ2SPWqQjwXKuyyNNCAV3dFR9T4KRgDD9JPW1by3PiL",
  "key27": "27JS6DLFQvUeKMPmWBdJXztZAnBCZcQSUDtz5DUAHE68PKyZgwTYvNsVDb5Zj6CTwyE8r28q1ZFpzh27KuT4Qp4D",
  "key28": "5EHx9wVP2iYpDHHnY36DfCzJwheF4Ng4SZPcXsz8RRWCCCtbpfyByZoALKE7kToc2u9SuaCC2t6Z6PYRnvoMSMja",
  "key29": "27Zd2oLCH7FCduP528q4qmT3axSuj2iasehxtaUy3xHVRkxAgaXgeBaaheTDadZYpaEBg6zV8z6UZskQm4Kmf1Um",
  "key30": "5bEcd26uCJKgVXoU4d8RsEeCw461GvvJiREwjaq8wXVX9N6HKGCUSo4jZkoppiaZg4V6JP9sF3brzUz9GNcqUHbr",
  "key31": "4CXSuBVBvn5Ln7ucXVPRsrQekdw9RHWkF3MHBNoHY27oppJCyRpBkRuHCWBVEQ4aTe42LKVSRzNkXj3YSXeBA9gi",
  "key32": "3pcQuvQJetS7L6YDnFxefBGPDgmdmLPzYEXM8FQW1k1nig4anY99qXQU7GQq3vN2Csjw1LTaQodaDB9NZvGwwrFD"
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
