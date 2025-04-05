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
    "3XNwf6MgrEfqSahRpjuq6JAzUL8KSULw6QrniYRArjNs8TwZNun6svSkGGku2xi9k74wzUEMXrLtVgxjsJTuisoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfYNPdU4XoubusPmW9YYNn2PFL6eUq6FwUtYasxn6fin15zVVe2gpXyD7jj6JiPPj6dGYo5dH5kkUdDSvDQ7QWA",
  "key1": "3CRGkMHPekp65SUDoadwoKnS6FT5AV9y6WZ33GfPmfLtRmoqdRTMbFtC96VqgbfZFp88EyYaHHaMwtq3y7Db1i2p",
  "key2": "4y6vZsk9sKCxJSjjjFMQDXZfoHEYA9bcp8Bhyw8jLHyGVtAPj56rzfUgBqtHw1z3mVGpvNxAdfmJCcAbZeqTUF4K",
  "key3": "4GZHqpzwq9KwuK7EvL36f5KdEjPActU5fPVWWvRvCBYK5HCTbfFFgkURBTEDB9YXFzgr9wptzbWs1nuKpstCVHjQ",
  "key4": "4eDLtHboi5mehQAM36ZDrh6XYsK52dySbj5NEkaLmnsKdW5DLiyy1AzK3Wo6z2rR4rau1wQAHWqTwJDUXB7aRumD",
  "key5": "4HF66eiNQ89Zwyppn8DnZMA3Lo6zQEwUZeFCiidJDgyKWpwhnY9jfJvMdkCK4NH9srsTFPWGGbXxT896W7eSRYAF",
  "key6": "7gS7STJKxMkQQFcQzeET5wvbwzinVKEmac9RUMa1FTE2ugfdCiyDzPbgaerMjvAaCmLXXsXwdgiRpjLZMzv3Cw8",
  "key7": "3v4ziaJ5Fm72N6RmBfJS9baWry5Sn2xyHVC7U83yvYRuWn6Fy4cpFXVc5JBwGSNGpuhKso9NkJahyeJuP52dVHAT",
  "key8": "2iKGzRLvcNcFYu7gHDp5hr8fJiNvcyJwxNf5213ByuaTkjAHxWDK7q4PwxgFaAm6i4jMug3EccSeZxYvCWLPhS9g",
  "key9": "2v5zYmdNQNKqhg8Z7Rt1hxkCoxg1NcLgjVpTa8ebbBjLCzrLW1u9shsc1yN5Eq3ApYew8MhKBYFwKCrwL8U1mFXG",
  "key10": "sjhFtMcKsFWCJ29Srq9s4oAgggCvmKhAk1XeB3EpRFG9Q8wb7ALifz4qabDARMV8aVhtB5dM2gy5zT9i9b7QDY4",
  "key11": "4oxBnehjAxWBoPePNJrvTXjJScCuD9nqCTHAuxMznQkNApTxYvz4U4mwE9c2ZndBHdtJnxCKUQSybvCqBvcDs4ZQ",
  "key12": "2MbQUkWVF2VTzvG97DqaHdjHM9T6gB1h7Fp8MKGJgQA135KeKTZT3m2fviu4pRu4aXmQstX7pLtUVF78TRiNfQxW",
  "key13": "3Ec9Rh9YC2QzubJT9PUXysFeXgNqxaE3PUGKzTNr3QMpPjvp878Z8jNcgvAXoKnAwavL9c7oG1Qs1n1HbEmuk3o3",
  "key14": "3ZEe51ArjAcMSn6ddWAKG7ucjsBUKfdh9da9PL4ai8h2588howXk7RJgF1EUDuUFEyqRPXnoR9xgukAzB28pvP6",
  "key15": "j3TvqTXNez11AedPaStB2JNu8CKPxH6gcatvtPz9foT9btfRmXG8QLwo7exuxYc7eRJE1vJne4SEzfPJWUoU5s8",
  "key16": "2pUyp6gG1p96ZpGhRvXn7XHoWHyZ8Wc16mbdvnxoyLfACoArhYxZ1VEcu63MNnMhaEQBXhxPHPr7fWq4feMy5JZZ",
  "key17": "2L7P8YFi9cZJjVRLBXaEjEELpxArbgjui6sUdCwt4sQv9Y6aqAvAkgKz25EvA6tEwtT3JFLvE8LfBc3F9NZMvbK6",
  "key18": "zbzHGvRhWFSfHVqAHx19Mbnrg7uZztU571vTELkhVKdMhFwp43ru7oKKHmPrkkBrELphDQ8hVXTRvRVE8VbrEKk",
  "key19": "32xeNKBFmuSadaBsUrF8t3JxnExFSx5FRde8mvsQudpR3XuiXDCu2RrRX2asrPR7nTjm3XVu1WjkzEVpobSqCeMh",
  "key20": "5aZTZaZeMpBB2BzvvwcbwNDJvcsh1a2Q5EVNFKVmo7goaAmmg6pbbXBkbAWMyjfqZeJ2pwZwN9rD5hvQ1WAEpa9",
  "key21": "3u6uK6VNF1SrXuY9Kgf6uDbv9GGuXNmFyyoxo42Q7AETVv79zCRkGfEZ4ZoRBkfv9FHjEtU5Can82ATB17vTbZqA",
  "key22": "5Z1nys2sqc78Mgjq5LXa8cosZ7AopE38pyN8CjDK3HnWYJ8ADZYMtRWWybTndQnDNb4p8dThmCnSJM2KLJE3BXRA",
  "key23": "55Jb8BvbhptUVQ59NHy2fR8S1uqV2Zjin9DwbYbhWsfA5sKA6K769oYs9QnRd3TN6qTscXEuNMzqXitD7Di7QB36",
  "key24": "4ypuiJnM44y4kHWareHyw4BG3cijxcu5y76tUMfz3EDoz1Xksgdk9PoXYCWoaWKHjLmfkAxJUJsNieXGyKdkcteV",
  "key25": "y7z3YzE7J8JiA2nLfGftXLeJpW1HXpYEGChtRBx1Q2sWUKDdTuUeJKALuNYVPGb3bgf18JCEtLQCZcYrbaUdc3t",
  "key26": "FiZw6rzWuiqEgPvLEfkgHYB1X1DUJb4hTc6kH1hpYRLhr4BFuKLek5H2JGB87TPPD8EZcTkhYgESpffrnEWu3Mv",
  "key27": "5AU23qauKAHNVySyqFB2Q6a42KueMBU8H2ryoxzYvjMGZ5UZmgigD3GfKVBgx9GwBS5fvJbcEvqR7BD5A6adgaQ",
  "key28": "47ndTeZ7qnJV69R8bDJBM2MpC5jzAdEz9NQGaWGL3MtLj7wYMTx7TXxrm49Q7u19fgiE9uusZneCEn2N7XYsQu7f",
  "key29": "3rgXQMnE2RHREHC1yzPstRNMZSpjfVC61vcHVZ4EpK9pwUBFz54hX8qZQf379MJby1gVaZbA1ADNTbp2ZXTJcue7",
  "key30": "zVcCA692zWFoMw6qeQJmXBne2tD9DR5D1UsyHYmYrVHGZ5Ha9dZoPUhZ2wQ32attujMKCFg3B3Rt7eEDaocnPcf",
  "key31": "57wjYqzqccJ6r1p9JMdTytbbf1xPoHXckBswDDV1uamuTnhJF4mt55uT9SaFGNBDkLEmxst8TdAmtkmTHM3LCcBE",
  "key32": "2D2CXP4oqWCmxQdPM8ZCorXaEp8moLDeRWQSakQAyx7efSgpTxoVSG6jZ91XcasiBzrKKHeMNRmUJQDb9mDgw6Zh"
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
