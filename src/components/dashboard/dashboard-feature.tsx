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
    "4LnQAkAZL8GQALBeXe15Vt2qnUDKSMSh1Fbp3tmBdAPJpmGkoe6RhBweyUcZunZ4ZEryb3GGjXVZvYvztzXBbRcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MiyNe7DA9nUNZrwFR4Lqor4oUj6oBKwDZGG1eTdbGHz3P6cQdaXJ2ikRM84P1KUFDf6eiitB6dc3zivdCCvribH",
  "key1": "4XFYQfCUwBx5sYxn5AnSDzbBesAzZjHq7QbjJLC6NiLEL77fwqF7iUQ3XqniHUsWX26sXGduZC2qPExG1C7H6Z2f",
  "key2": "RgWniHV4AvoKoTD2m1Gk96HP5MQiiEGrZiqE6pvWQAdhoLbDtKo8DNrJTfdY9qTMUNjSbWGcSS1QbGePTiYqN1K",
  "key3": "654WeG2kSvxQD9cu46TuHvbBCgtGfv69LWj9NwiokfNd5WgCBKe79F7Le8euFboUN9coUbjfSLqyDbq78rBWetGc",
  "key4": "2t7zPvMCcmaNUULkTdanpPcps7xFeqVtFHXSoL6aS9gHh4HKBgoQVk9zkWHfap6RYejBT3j5CnzZFCFjcp9ENjox",
  "key5": "62X5zPrRTU8uhj7BmpZab9kRX8bU3FoRmvEbGM7sXk3ebA5G5vux8Ue2161g6qqHANEq48DcK52Bcmbs6tHt7iuV",
  "key6": "2JMjnNFRvdshswEheU1wAFCGtWhWrxZC7wePLJcHQAyvb5TSf1uMT1W7MzFmWGj89QnyrS2RqbL4AHk874KHFCpW",
  "key7": "XS8REofXtrpHKhWveUVDKhZHJ358gb6buBX7foVu75MVT8wzL9XUZRwFpFZgsY5Q8Yk5Z51iVxyevdvfMKFVSvt",
  "key8": "XYHYYTKHEwfmWxPB4BtMNV6cih9mKojyHF3UQN1VZBJRb5yQwdF14PEfMmFc3zbTUMG18onSgjhk9Y3P1CfBwDn",
  "key9": "2NqecVGiFBktqhhmv21pqqciwzqH3WQN5rnMnWQGg86qXPgtpcWjsvUZsqqb11dv8BNXoDWepAMpHvAUXwWVxbgD",
  "key10": "4qb6ka33stNWuP6vejE7ETAzXMCGMEFkYmTZ9ZeX2kfC498a4fjVALND9hDtLiHJHucazMF44mwVj8SdmHPNyrs5",
  "key11": "s2Aqv8dSZoTPNPea1LuGY6JpUini8UB6bGtMFgts7VvEVzBe5Jpx2eRnsXKmpbG9s7AcxUrCCBhnCGbwTov6ing",
  "key12": "2U49pPCwRYRUDqEkNjtrwXKCNZr1jqBC9MngnmkHGTce7HYe4GRw4PrYwjosJfTnvguwWt7knfH4WFVvgrbzZGQi",
  "key13": "5FGrpN4xWv79ej7xZKCtwedSKvA1juVvrC4j6SyFEj4XCDCALa3RAB4DsjdbzWsHK59Hz9iqFkMMf32HkyfeEbmp",
  "key14": "2okoy5FsKVKcmC3U7vXHsFpsmeseYsK6yzHeYotafN1a7o6icH5arBi6fcSwfbZUqDrXBUP5aNFrE71Lsq5WpSv5",
  "key15": "39D3YaFgpvijWbtJMvvkj4ddU8jKoprHJxSyzxNcfkwVkDMK3Pk5UR92KkUgQDytUSRp6TJJVGHrAVDGjGwa74Cj",
  "key16": "be76WkSSQ2eyuur9KzAaUazsvN5dtDMfxz9GkFhYmhQvQb1mFqGTqxtReNWucEGJBtpNPh2yntH8Ztjn3GHQ61y",
  "key17": "2hRAJrAbmWnuji4TA6WLKvZ9QTA5H6rRy8faTRhta16cHg3iwy6ya8H3ZZMhQYFbCdCS8uX9F4f8Z7fHXbRToffQ",
  "key18": "VUfSED93RYTTWF7o7bHZoKrCdAUk89bqG2qg45yWib2wZEVkyGzy7BsiqdjSz8S3k8PsNkzCtGHZK9y4T29jtWU",
  "key19": "2K2iHZNzL2EKwX4VFRAVg8cAi6dcHRbs2EPNnGjgZTrdrrsYh8Re7gm7QEKawLekDDtj2SfDXxim3qprPqCskT4W",
  "key20": "2ncH5nGK9SRXNHjTiFVuwBZ4WBB95tDdVK12zM1SpVD7waFTkioBXgE9wa5awh83g9nr5QPouCUjAixUx9Z1ocRz",
  "key21": "3nH5dftkb6hUWGixWzYJvXDyM7m2Uy5PUs6onKTxhJiEBqLhf1nQK53rPN5zAbD5FuPunioDMFFsu73xbM7Lrvan",
  "key22": "3Q6YXJsgmLKJStWqNRrPs3Ez7vSio3CTWSgimjbUoFEenf4GWu2mrC3j9BqZEdzG3GDfT62C1HgpugLm6LdQU4fg",
  "key23": "3PL1ux5UxDgwFPxqgKz8pXiicN8oPjHAqSFCJyaGrw9k5QfkQ2diFcyYvajBrf6AnmuoySzfWUwUvcY3DA1K4zBi",
  "key24": "2z69syLGCChLupcfygZoX5bE59tZDvrgectJhmeNqVaREapa6XJ9jp7AC8WfWZH53FTBkC86MXedHbBX59WAzpxi",
  "key25": "47L2Dernqf98mDLZMWFoabSbYgwc3cqZaQEAGxztPquQtUmLVCM3kzV1nVtNwCbMABoaaUeBt6BcSBmaJgLTmn9n",
  "key26": "3fj6sFxk3cDrBubhfBzFD4u1cYJ525s5ouqz9uQd14qNoV7S5v9CD2DrKmUsssjGjaFQzamHtQceCmQePtUgHsWY",
  "key27": "5Q4R2eXachBAVzfpucb2QUchwVSBWfMjv4cxXL8r6zofM3uZcXNiK3RFWkNMqjfusGBGNYKfNCrVZkL64ND7CLe5",
  "key28": "5eZtizBFQzZCLdBHZavAkZ4ZUSygcMYNf5ZC1bVhYy45YUE5bbpCAX5EVSB9mJXdjiMt1NNKfNZQajY9rN5dreZZ",
  "key29": "4QFq9GWhogpQrmTMCSsw1KHnKgutYn6Y5caBCbTfL1sjh8bKrqA1rHttTMzNxsaG5hjvNcuc15foZeH8kdYzpzoF",
  "key30": "5FBSevhBimTWzjKwcuLde9uvmwtbB3UfUPN3rLKSu2Gogdwv9PNqXAkdFkjyBu76ikvL7AzxWhFMER63fgAbT2Qb",
  "key31": "5TcsRctJdfM7jrqEJTETvPeuLuz53X1QYydxSWPE6U6MYqPuQTqckwKFnU2cMWhN7mNgCHKQF1ED1rqtM92n2Rb1",
  "key32": "32sMV5c1hARsT3z6Dq1joFvdUW7nqjxfRCNBnqudKRUnzAk2f8ehFGfhh5RxdU2cKznDtLgGU1Psvxmu3Mdc2FyY",
  "key33": "4Kok4spQrer13nUuj7DdTYpLtRBhcstLVKRk24pvWaxssjiT9Faz3sUYS8LYdn259nUPTZhcDUz4hhMH4k2HBThS",
  "key34": "5hWaYbMurADTCE6pEQB4ySyGztkCuiwj4JMs7MKTULdBna62iEqxEaSPzVH2bcJ3tSTPu67SCAUFKFTY95kFF3gY",
  "key35": "2eDSv2JDV74CGSbb52xPRyrWKScwQLf2WHiUhWnf6nPvVuHXa8AueM5Yj53Lxa9peuMeJYrRRNfK2gdwTZHEfxtJ",
  "key36": "xTUu6JnLgjGChCGiATfqtEetU4Q3LQPzPM6X5ayVvunCy1DDQVB1rJ1XoBAhiQbw3NHhrMBWySqxUiE9j6PZ8sK",
  "key37": "5US2YGqvbwZafzJ21DEHGcCCFhMft9toPhv9cRADZrVmZeCjJt1ufpEpsAbxRQTbFoaYQ1vpR8nwkMSBiYYfeEpj"
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
