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
    "2XSPoBohVWg6bt9rESW4bodTXp8sU2mWwL7yLqKotMbTenqj2FsMCx6sbsBWjjcnzahoeHaXx45toJ7wjiV5uUfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sE6U1XRpG4CgLRhCRJR2NdbA32sBiCf9rMZz42DDEhEfixHj7LqJS46Aird6C8D5MW85NB9AA9S4HN2J38Ft6D1",
  "key1": "2WC4B8Uu9mrmhvTeAJveHd2fFDatmirc79zXHMUNgFSBRPNHRpH8jkKBMFKWcbEdgaUN22zUQStAzG7Kn6mvowgs",
  "key2": "2vpQweA1VE2vv8rQ8L7maSERsmTysMQAHhaVwRTAr8vTW2GK4akcSHF1ktMAoBxq6TEPmsxxZVUgupL57L4XBpqZ",
  "key3": "AKNtK8N5jBuw62oQzALdUuKwrao5pXXvRa8sP43xyoFZ8DAFeqcsZfum4qBZz7ZUojibFZqni9yzYfrziGooMkL",
  "key4": "3iwUmMMj3dGU62fi4ZjbKXGhbd7v2gwEU5DBJfRqSvgfrncP3BcNHgz92wp6o2Bivt8xTQfdQcDYp8sXd9wuBv5Z",
  "key5": "FR7pbwR6eyaM6K68Y3XE9UN1e4tYZRvne1efi35buYGdfyJSFT6v1CbJPeLKsHKQMDaYvKjP8ULLXBgokw4GeNi",
  "key6": "4P7tNPEeLCUNdKRGVCEmeRrsx1LJfkL8cWUzcDPdGT9MqC7wXqUWkscbSgco32KA43u2U9RP49v1sRCK8pAgHbno",
  "key7": "2NyxEjwq9RepNLx8eBZATZhn444QB5KegQbf9HpUDRoac7F6SN6yAwene9svBisEjUSWWn7Ca6eoW45ZPBsy46yz",
  "key8": "5vpf3myaPwVZjeSUv2KKUA3TUheu5VPRGr1BJHfcMPYtGUg2CW6pVVrxMV26VmRbyfsuHNLKfuyQ2Eq2rUVacpLL",
  "key9": "235RmYQytrNYHzHqrzHtsjEcwa5aD3VuANdeiAHjxruNe7jrbyHoWJevLWt17a7iLzghVRZzFKwLcSHbfgD5ntf6",
  "key10": "5zWRwKq1aCkRumcJLC5rn6DpjQUFrs8NPfXdQBvkyZQP1X5X7r8iBseik1uMMXfdxxkSK4ZfUhNbzke4maMmZWxi",
  "key11": "2eNTzP8vQwKLMRdbt4TvV9LEmY1H7nVsKYqNUvDbQf1RqwZtCMs1FmnGTfBwXDjJJ3chNaB8xLbUyEDiQWzkZsi8",
  "key12": "58dB1FcoNPxz9Ti4wnvaT2p4JWoHRXKK5iXjbnrsMkQt5HURZF2YJKeutoN3DRZZ7xSVa8CNgJo5Yko2F7LqfYzz",
  "key13": "5H5uNJuTsefjtmpVa7NbWW11QyALWYV4y4edGqN3odEp6Jcn1VEPHLY66kHz2YoV1yChFn5y7ozLjxQXxvzAKsa6",
  "key14": "663xfBGHqQCDBxnjqxVQKnnXW9febupqfzeRjTVxFWDZurDyyt55SS89w3YH7WcwczksVxSar2XFfkqfDj7pHSBB",
  "key15": "Pgie2pwLJXWGbA3GAtUPGkQkJBUVPVS2ZGfMCwsBnTd1QNBerPpbY1teHa9svve6fU3QvEA53d9jAC7bYM93Zmh",
  "key16": "62QPb5SKiudL9wtLyHwmpQvaUqkNr5VDXwChxGFAytXd2pokU3rYZFvDVuNAffg3fCa4K72hmA6YRt54vnaBdJ5S",
  "key17": "2dkfoMgnYLHdkqfnks4neFHbpD2DZx1eWmZyN4FEk8ZLkmQC2KSUGsUdbcK4UPy7BxMqfacADbuLPbPhRfHPhC1A",
  "key18": "NXzHqzWpnfZAHSrSBubsua4Vmkvp4NrGpx71HHQHf3mtQkqb5MAFhQM9X5LwhsvU9SdfJKUGesZWdbMPbZVC7cJ",
  "key19": "4mAqBxwkHZeMrQUhdp4dukZEAqG7w7jbXMVFyNQuVR87FrVcGHjWW5tkXTjnXFmRkDYKjuzbkqg4CoY35tSjWsvi",
  "key20": "fhh7yWtSVKgvKWtZPGoomG5qwHfQwZai6gmBbcvEE3Zcb8AMeMAtNHEu8dbka8m3ZbAJbPCKXGBL91y2YaSACfj",
  "key21": "5ahTiJ3Zb1fzo3WYdg8VLkhgGkQLGwbbhFKMN3km55yzeYR3Yoabo1WVpRLA8n1CByhURoqRPEswcT2wTrUD8rUE",
  "key22": "42kiZTmN8Qfko8tfXhdXLL5LKiLSVCQ8X6yz7qzguHrAm5rgQUXhAbCVxTpTUaYfVojg61yQDGohtqGJEg9vtGnq",
  "key23": "5eBsVBxxEHwYqforr2gquBTUQUaV3pviVaShrHNUg8QByE9xwhKPdHix8VhWR9xdUoVZwPB8Srnhbt5PsU4KAFF5",
  "key24": "3s9N1xBcc76pd7wPHjFkgGNpMknmkRpNzQxHCRLCPzfZnmKyJwvZSVBuLEHUAGJ48EpaCS6e27gUDJYn19jH1SKt",
  "key25": "33DoLLtQxCxpKP75Gf8xMpGRzLxcQcnfu3JcjEvEp6gxtcMJWgvXMsEmixnbuBhMA78XK9BhAzYLuFbSrWzAokUZ",
  "key26": "5MuMsPQ5hF9VbYngs76Wv6FAjznoDDC2zLUCjEEfGAgPeEo7GsT2xLsY5H3FevyPjdF6r8J8xJacvHQgQHKMgaD1",
  "key27": "3AUXMzEx1TmLZkzFRGHfWD9ywqSq79LRReeaAJZthgVf53QAvr6dwjGwkjBzPXgpuCZmKaMsKNQ1mbQQTTwV89hU",
  "key28": "useqjBgSQHMq5WABjfoDZd7z9AMWq2qWRopTuoG56R1GNkEdyRXu8tcJgPcr34NbsPxajCBXY8VkiuvGSb6Z1Yt",
  "key29": "2hwyG8Dz14tDcJ6eae6cEbMNXC7cTrQERxkDF3j9egEEkCFn6vhQi2DJGiLZFXzU6p9yFTpU7H5Fg9CCbMzNH3T1",
  "key30": "2cvtudNBMU7cEhHvdeVKVRJvYaQxBarz5zUR9iC1R4THQftAScdTWbNs4bMd5GbSLMveRQoKhTxd8Q6CYvhwuLHK",
  "key31": "3WwNnnSuAN7PPVeT6MUMgQSVVmD4WKD3YcSgY9JpCxdJ41dckyHew4piTSZ5qh9gD52aoWxNVs7XVfqNKZCTMakb",
  "key32": "43anNaDTSRqDDK9mJdEN1rCashN2YhdBw78s9Ju6vmyS7BiKRk8hdreeZM9qbSkS6vVPtybPrDkChb27ytULGWEa",
  "key33": "3hCLpXVHw4v5wPQ4vKgHag2FpyqgsScbyz2p2Q44QsDjH9dysRBM2wKpqDvFxLW59EqnZHLBTqCuRmPZsCiRzSsg",
  "key34": "5ASDUe4fPEViLM1LjR8XCVKMuVU8BiZZ9rSfjfmN7d3cKSQbq7pn4gnEMCegfNKgNq5BoSmF1ez6teY5HeuziWds",
  "key35": "5xDxog1gBbwpyVMWznipeAhpeDwEXz96ewdDR96jNQi6xYcaxmXXfqviHEWk29J1isaHTPdAWJHsTqKCKHVUU7KU",
  "key36": "3w71USXrRfjBbN5gK3PGPvVXHbY8ji17uTmKmbnahL3tCVNa4v5mKsSDUw5iYUaeZeYavKr1opkSp1R8hC2qXjpM",
  "key37": "62GgsT8Wd9dpaG2viDSNd56PM22sbbxcWDtizrwtF7wu5zbz1So5QkFGaXxk3GuwgPJCKcJ1KU8Noe8VPuxG7Q1W",
  "key38": "3m3UAwWbW255oVhM9548dbZX84VQsKYUH264FdnnadeFVH6av4FNVcZ31ffRrg9797D9soSryRf5mmMLDeiMVvur",
  "key39": "4zzsadSD5tNFsAjmErxwebUXtAMCJJyhieocHcZJgBn4kS4qv6EJ4Q6qT9oraqPz4mPrqy7UtebZDDL3CAJgFnKV",
  "key40": "4ayJ1L8iLgrfDXeJRKQVGcCXjGkX9pDbd8g887CEFQUqEKRWSBYwT4BW5jL4B8UeNBG6zjvZSexgQcoypXUu98NY",
  "key41": "4HfYGLz2oQFokUkVU2Q8xKiAi31S3Ukjs1vj321eCCpvX1datPMnqxNCPniznGidvWHV4xnkXsJLUnDE6bbcaZgD",
  "key42": "5yVnbzHKRZGGWz3UmzYwHMJC4fSUd8yBnyKVRupfoHkBeNRG3URjKovxE5QuLiGY7UGQXHk9u85ufpeHnwhRG8r1",
  "key43": "45CM4c54G4b2i1nMCFjeVm1X1uTu2WjgWTAmDj8eTu45heMvY1ZUzNm69n9HdNQn5xCZXpZ434yWd8mqxgmZNRLy",
  "key44": "4qQ3zU6tYY44ULWY9BgyLZXvdFo2dA6PZoCsRFxtTfkoZN3hirxqhjAUL86SZFSBQ3wyFeJZozsyAmBiqK4zF8Au",
  "key45": "2hNWRnYoRoRmpqRzChmLLUerKq4cqk7af7bX8WTCHuucwaj3cPJ2QkHaPR3XhyLa1HJjviYMzAGfFNMxHX1bCJZu",
  "key46": "57v4fqBuqYbs3uMAQ2bSZvsmowTLgHNFsMfT5KGTn7mdqjVph4KhgKypyHTE67Nocwj8eBhdCsWJC7gLJzRB6o5o",
  "key47": "3Di6eXisMUkjUbVMYsFiPAm2hzSfb8aYNvoC2b2gSQGcsRwGJcuvQSD31swTy1ToWKdWUS3db3MzHfmg1rxf3wnf"
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
