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
    "5UCCLmdbHWP7scwB1gBfCcXsyYrJAUhJ4WMuqGiT2urP1tUNg2srkoCnUDui3edj5Dp7bhEREZ4xJ4tQbmwSc3qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbzbpXXjBc9MEracRJYAdt588okw18QaDHDAHpLcP6a5n3iwTbnZKZMFSLtuqm5RVRCossNLcEwBNRhqoczHBbr",
  "key1": "BqE1a9vZu8DZ5koFjuFAZf8dyHt9q4itkBqxXc7LpyQyo7YidUYxKamA12BXNA6tFrDVZcxhyQL1v3rPtW6Fian",
  "key2": "5RhJddiWoKQZcvWisxVyMXEiRRUJQ116u7evr1MtgfySkDZW5M95Y4TKonK7s5U3AhA8g4jKZhrF9xXQn79FNH4Z",
  "key3": "3HYhHLCLJepazQuGEPcn8HTwZPf83Dk6w72k5nkcu92fT1FAKNNuyKEJC3PzczVraWDR3gGi5M1F8F4oksJFuPKQ",
  "key4": "33BGLFcnWU6AZeCfMP5N4MS4wkXsGaKs5tcHdid8q2gsZWo9B18RJX5hcSUi5g6rvMrQW3AgHeFD81ZxtAqsm2or",
  "key5": "2DGvxenerdZAfezGMD9ZkG6FXNAQG2mRVH6sZw9eMwAMiB6VYFJ1P8jcd9bZP9YsjQ5p4aoyCmk1NgzaRt1gkm3A",
  "key6": "3JDjMQeyuTGW6v83rufjTa41mwX7FDpVHnS29EV4sa9Zkk5LpDSjHY3D3j8VWXLAc6xqwYC9Uwkb8g6BjeETLQUF",
  "key7": "5zqhwWtsGNSJqNEgWnvKCNxU2LMoFtMjWajRxMzSrtp6sXGsopaanNguAjw7tW4VstnMmj1dkRqVeJkTTLyUp5iy",
  "key8": "jFfcmpZgYKexqvCrGQ7PY1NLHjUo86kpPiSmBSDw41QJxpZ6Gupg85NuzDtwPHP9pm8EEvYktRFAM9kFzPpAp7C",
  "key9": "2ihAhrnt9jSyWV37qhX8oRuVqs2R8ZcFVAY7MymvDAzXGB6odqSWuvpo3VDD3V1k9xpAy5fY9gxvbYptdQhbUu3g",
  "key10": "3JwTDU6J14NNYeWRky3jYkvxPfxE3V8azF8u7XS2Nmjpv6QryXR7ceYjgsbecWpympKQytWtZyTySQ5AKscoCZU8",
  "key11": "2g23MXMpEDBia9SL9YXv7qQkGcMis3iH7jxRoJixmhDMHzDhHzBPtBZyCnaf1PVjYrXZvM3Cu1iVNnhDj6wrjPLy",
  "key12": "3G9nMGapPuMM3VJrCgfr7E1qyMND69VMDQJRjveBoQT8NMXZnHV1HW6UhsA1nBVwbufhMYL7MwrZqhEps75tx8Hv",
  "key13": "4ajMSBmvKXPMgw5QaQA7UUo5zmgUrsEsVDmCQU4QyZtKRpm69NdUt2HUith21sV85WCbWKeMQV1CapWeDwZ8ejP8",
  "key14": "3SKmCc8Zx43nGbs89T6BTZxccciH7in3yBiaJwetuucPXDALuvWg49YqBQaRNpB3Mmr2gE9RQ93gC8VR5JXHuxs8",
  "key15": "5xjiNTGxmwscwxh2pBH9VXCEuzkK2G2UV7GQR8WEHywAqQuGxThGm2rsFwN8SwqcigxdHPa8mR7WHf7GXLTibw8n",
  "key16": "4eMJUos3kFqXddbJ4P9xD4FQ4VKrjkKm44r6Dy2uG3WqG1o1tp9wUVmazv6CK8SuQSEQErQRZS8SHDzwsVi62v4b",
  "key17": "5rjwJZDhgBryvpeWBk74YJN8NxVVpxQr39Ws1gy68mRrzgQefzeTee6sxvGuiTbv7W3QeCE4oqpRf8HvcWK7VnDR",
  "key18": "5j2wy5EMcXEQoZygyzDR3P1C56v82s8UhMB1sfSVn2Xv78P5tKV5eFFW7kEf4SggW4eNsP4iGv4Wt5QvvVJigVHU",
  "key19": "4r15orULB86WcjdqMABEiP1XCui5K6cbYpgpDJKJgd6BggLyyCTpvkkKMb2uBMzBcxQsXL87hQ1QGxS1Pu2CUKkr",
  "key20": "3wLPtdxR4ZgWU4Y1iDcz8yFDeBQ4Gf4VYJpZ6WFP9wKmtb7qCY9ryAyfLc6mvH1Dzxq1us7h5BpqCCQ59SBvcQXj",
  "key21": "4k3HactYE7AYySUFsYx9tNWG2YkaCWyiaCSRwTSQ2gKgRQmZ4Dyo84X58hHA7thGv1Y9KGdqkg5qP3wHwhLqJrcC",
  "key22": "1TG93BNXqiEsGbkBpi71JaXWAog7dFYebwN8pMCvxDM2a3rijce8ePYge1e5onACmyE7qX59zJ7eQ5rkYi6RqFZ",
  "key23": "5Q6LwYCSB3wskwcsJQiLPwynkmPjetcNWGv3Qvuje12tXJQKPWo13MjQheax4iUt426gaKmRADFn2e3sm4PKgh3F",
  "key24": "3kLG5Cx1kH9hHDH1SUpKvHrbvsBWQ5QjDdGW2rh8kGjMwSrPRSzBrWD9SjoQSkGiVW67yPHArouMycGb3sgCzC3j",
  "key25": "5XBBAPzFDtUpAGQMsxn5hH3VNK877ycG6zjEcQbYkqoWBtYTB99ymVqVd45bBsyyekaTwHgq432oEAxCrUCCZDFA",
  "key26": "4FRDCAQ4ZrghbAE6fuSh1KbCCYJUEQNTMYj5CqAeUwQGWyRLxNnX2q7PEb7e7nYvd4GvoF7RiMU5yjneTgCyABXn",
  "key27": "wSQwX6i2mKmPqwRFAU9pM5KFgF2grHmM49TsnGqMKF7L6hCsFP89qTYsaJZ1D4u6yukWmxgeeZeX8dNXKbUggNS",
  "key28": "6131ZHzsQhAphRC9XbZaWH5dbHZU284Hp7vFc4TaiEKcWkE2TPjwkfeqLqeZqcfmyXLspqLcUcc8eGkqDFwHyB6h",
  "key29": "5K5YfgNz9yNzzdhUBWhfTBUrqoqwLST8jdE8mP1y2VE49wBneXhHSi35M5eM7YnmsbdNK7p232ZNTNvJ2njmZzN1",
  "key30": "3wV9uBZGJwp1K8dv9hvYTmwGCM5JzT2ZjVzBW9jiYNJ2p1PHJwC9jR2jgfz9BDV8yoe3biK59EDZ1ciBCZv3gsFB",
  "key31": "2iDGyccfSGcBmLMvHxq5eGpsMFCYVJKNVwazPMp5dcfh6DETHwm5kic9wn2FtaqWPLCKTfKmGTjTUPwDh3DJPN8c"
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
