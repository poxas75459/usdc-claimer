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
    "4ogUQtuDkGSs6DBuQQRbxKjFVbzBcuYWZATnocNLZe916vJchgrsJvzLfRd2T4N4ArvDZNzhtyWRMSveushqXTCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKMqkjoibecruFNVsvfVnDnUwaMjpjmW1mB7f5kh6UprPhVMA6xu7aMS5sgvuohtHBuxDosyvhjg6VShYoFUzc",
  "key1": "5KM7ByBXsu2XgnNsGN7iyE2CMkgbyaKs8zgxcFGDqN4E8Dn7r4A6EL3NW8cwnVb5Pra9cJADbYHSfkB3vtocimnJ",
  "key2": "4WtnLVTx4FVK7jLCCuL2hKqeS69s5ZafgyLYuQ4ZSNDhqCmhxGxrSVToXST3AFdVt1HnjiAyQ4Ce8qpehXdSR4Zd",
  "key3": "595B9uc2ovFqUc7niwcrnCP6TdFvGZH6E2RLrDAXYp5KsyizfLh38fgj26mA68uu4NVbXddD8xo84x93JAVZ5qhw",
  "key4": "3puWeEH3KuirTEgMMUHFkzdXVRjEpN5HQa9XvQiGEcmFSjGfTq9LGHNahZPoDaqvnXrGgoq6ySSm1kR87gFXqvyM",
  "key5": "4ZYEvqU43XdCsMkor1Eeuz986bzu1bhgMzTuS2Ti9dfBVS8y86BJFVuZgibD9BB4JDYhez9cJDxNhKiNYqSsDCp",
  "key6": "51ruoWp3Sb5GjUdDp2FVcKWNb9YvXEm3eTXDbNZNQdu4KhSLj5Q9c1jbutbnZAnWtSqovCLKje47A1efHWZWYBSn",
  "key7": "46MqSh7kdXvuEFbNkmPZgjBbwqLbhBsABmex3ArvoXT3b6ZMWNi9GTCqi496m3ZfkmYKc9DkWMt7QA4DteLMjVdf",
  "key8": "4MT9fPBh1KEnxW4HvPFTUjNsweJs9jwZRMhvBGWyFUhASrxoS5vxriPS3wbuYrv2o6FMD3F84NaagTR6YJUDgEM9",
  "key9": "5ea3Khqb62ioujMjLCV5LhsbFSpXZAJiM3E7gt15Z9KAVKsokGSDsLWH11aa6EKaXQW5VdZU9u5cA5YYGiosjNCb",
  "key10": "34kox8oYg91LfxsPxVohFygwDC1UsP9ozVwSzSoSJ8snFdsVCWSTSVUJ4WCxNNrg8MNdcD8sLXuhZg1waaKapaHT",
  "key11": "4WBgaZg17NBXzF5EM4mAWTLr559wQE3kXyYLwQNnhKNhfWc24h4Bjmb3uVCLVGF1sqDswnNDBd3HFmwjtXEAFBuB",
  "key12": "Fo7Ju5HBQ4L8RyTe7DUHSt3og9RytobcgXkeTTyjCiUa1UPqqDhkmjHqGiw1Fkubyce25Mdo8sCP8KPAbo2DwwM",
  "key13": "529bYaGwWktNrdhtCpx1gCVs4ZLCVUt6eLkxoqW6XGMcwTkTKJjg97LkqsGB2nwp1Vj56Ztjd7xCQ1AZhRaEUQMh",
  "key14": "4W1j952jtifQFM2ki7fXWpJimmMnp4rsWQi5KRkpL2xz7BsCb9suowQPm8Nxig4AP5zr3TDXUXQNEp9q8JqRuKrA",
  "key15": "4eDNKF2hqg1hyDr3xnP45MfGMFpUvjRgrPGEhNKLWd95TMWdZ8eCs6ZVnpeFuwJcW3Yf6aYFiLuMFS7ygEFpZaf8",
  "key16": "5LQfZixyTrovM2ETNmmWSSqx35KxkLsqjFgojtYUiYUFxBwkrE5W9mBP3T6EtQGexYd3x2m18kdfCD5U9aH4MGyY",
  "key17": "26Em8VQEEeRDCazrtEM6WtDhbeagCcB3idTb41nYDzbqVcNdXYybBea2r2KAxzCQY5A9ThvoLgRrF2EKL3JgdfvC",
  "key18": "5G94jXtmcR6hTEcjRs8rBMkka6iHtJczwSkGxGVnJB1yJVzPUsXHMeW9z3LCeTJt3msyfVNTLUEKKz9CNceNbEQw",
  "key19": "PWGZwARWcAV3RzWExpcPdxNLJdRJJ1JwZb35iuHB6NVJ9FdkZMSY4JYykKXNZoBjL2onqz1WHw8HCijymRUSFtU",
  "key20": "3XYiG7tMyWLr9a8Jk69BLN2mkjSENFJPE3Z2g7wouskuuTYAwqrbzuiqomGmLdgctzrvEcS6CHG4wzDQVxtfBoka",
  "key21": "2EZ2P7Hw5vCdCK1r4TcMVPs7KMgtHETLzRvky377hrLeaFgH5o53eqY8vW7zjKdgj8zubxLQKLridRHTtCqJJEmc",
  "key22": "33A2shh5SE2vjHZVRrzm7eWXyetm7dcoMx7gZWMrEZFL3XGSgcaWgDfzBXa4tWb25gQLo4deE1imuZd5jH4PUqjV",
  "key23": "4AcAaJ6VPY7iBhdnpvUD1mk1Kj6wH9EwomRFaSK6XJXTqC73WtCFsjogVPf94eoQdVT8PHPjzzTFEtVYi4eZ74pc",
  "key24": "5pyBQGR84ozUL69UtQAFi5fhqpQ2JngpSgVPjuXqB6VeZByG5ETgfzVPkE43FKR6DBkBG7VJ5jGz8r3rzYcY5q1h",
  "key25": "5BqH4ryaHNaC5Mormo7g3xBGgAU9TsEnQZpdkz8D8y3HnP89YjDQrGqKYKGFuUR7FjJcwp5ohHwEvbifooPTRbF8",
  "key26": "55zj6m39oNMcF6ueuG8MNnFRTasrbe9k4t3cRJ8Kd4wGvnrpCsH2w5y84g9KK6Q8mS9cDdf7xHn5MsB1o8ag4ZG7",
  "key27": "2CCaFgP9H8X9D4auQ4cHt3AyFAB7jiUmPuyKzc2kq6k8iZRKW5aQ8tG2t4HgNJLpKLxF5RrB4WzjuLiUYMhjUxFV",
  "key28": "Xhr9hQ7SJ4eY1gPrEiLfd9kCPw322YhPrk784Ct7fEcvVDuyBHi8tZNnKniAWtK9o7Pcro958QSVm6S7gqcTqoz",
  "key29": "3LH7rp9Deo75tKYNJQLz4Z95eSdUhvdqKB4iBT3zhYTodNqjqXwxrozYvt1wk2ihFxnpkdrnUgSRGd9TWhoJYJg4",
  "key30": "3h9UEgtunxXpAHg9gvE6yisLP4Ji6uxMeqcMFeGn83QK2detkq5qtGMcprf6oRhmHnxFkPKmgZNrAEzfStKbd6JD",
  "key31": "3xKY1QG47SHxjtWT6jYsmFTKNej5f4odQGip9GmbDtDsMfJ62RjMAdVxhzrmmbfU5hnd1hMysJBYug9MoFiiFDj5",
  "key32": "2kRFm8LkQzuthWWMAuQW2vDLsUgUabitigGcZwKxx6cYT5JFWMcxidY6kcwXkNnX9eZbgxYNz5WNqJ1fRGdqSk1q",
  "key33": "3EbxA57wfMVMDFg6gpCXBq4Zvu4fBLSvSy1M8W45GGT1zahjL7Ky63RZeWNxwhhXwKYX7T3cweP7hp2h4tfTuHvH",
  "key34": "3LkMEZ4fNEev6JXFpqD1ZPTQEYagimka5AWLKey2F2Lv98pQkngiTphA4ECYsTbZtvNCq8AUoNcz2VhpFSSWHihD",
  "key35": "4UW7x3ABULw2E1CpAioQcJDHjNyyX4xjrQf7Um6dUhXMavhggRMamEiL2RdSp3EucEkVhFDwnraH5yciS1AdtpbP",
  "key36": "vVp4tvp2ucB37f1Uqp713igGDnxMHmA341r875an3tVYRueEJ5VfbsXTEfPHxNh3e9k77f3PQLgo8sgmV5k9xaf",
  "key37": "4uGHfAdRzNFjDQ6fgimj1EqCYnsaEcQjhQpsosoz1W7UQtTAGJLEZNMkVNfy4dumzvCS5Mq5rWs1bPzK3fHWp9LL",
  "key38": "53QdmHJn4pXRodB9eQbN6go5ypMhHBDpgU6WQzn1NeQGcgDcxUH8ApDcCuh6nUSRmHkqhThfvNHEitHKJXnoPE2x"
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
