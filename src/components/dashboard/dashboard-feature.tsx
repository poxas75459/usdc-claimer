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
    "3VX4hEuUwFmoZNXdzMJrfjCpUZ2r4knmxUV2eEZTUL6t4otyHH5LKEPdZpPBQr3UarvsmatF5rxD6Ja6W7J3rzYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmMn7W34LQsyLTEgMgnZHBVHntB2rUejdiftFcUsACZtsmjYPpmVxNQ8szywXUo5DPQrPpBjeRhZhma8kVeKJaT",
  "key1": "53HxHEHHqsWBZE53jSJbwNAtaQfTmvKAjxmwQoxoeNZAV7nBKzwmDgHU4o1zcx1WGA5ieH2hTEwdtKZ6cMCTJrRC",
  "key2": "2YvAfrRYfvQMFK12s6VPuxmbBhJttUE9rg5mGMi3KHBWF43673jjyGk2Rbxf6h8rnrtkiPCJ44gHct27jfaXbkmv",
  "key3": "3JvBfQepPyUcCefRrjeT4cLz5asXAATaebfrdsw5stE7g6ZcpAGmWashXUgU3QLwknAtZxTW9d7Vh9WnD3SCnZzc",
  "key4": "5un77xkqGdJt3fSycBa1bsPQdBgCMVnJmE2ReovatpYGUKXskFuWJHBudCGZbt1q164SJdnS8beC3k7xytBzHCcz",
  "key5": "2ZNELzJP1D21HXAF1BwqgeS9r4sbvrbLbE61PtHxe5CBWwA3DenRaXVctEEvqR3qrcayfPX4Phc7UQss2H7eJyuv",
  "key6": "2SjUV8XhhNAvuwwyrr9JrTxkafnnX1MdcDsBEJTWDQbi678BPJ6KBXVhMhqauYwgpa26LQUmcWFzP6AUArAKLms6",
  "key7": "5vUVTHXYhh1DeDurQcrryo7uvKf4aYPdCFuu9BnQG97jSKDLxUJgTChAMENYeF19SpxcW3nxwUrJGtYA8MVa2NG5",
  "key8": "2do3BHrgFrZqXiA24b79xk2YXqMhiBggpYe6HUZW4LYdobEiUtCRpUYBY8bic5HBYeKiDGkjtkaHnm7FhFztmo88",
  "key9": "3p6FAnz9LcpFJNBgt6rXfqAKmXEq3jvEta1UFVZZnrjohCaeCMM8DQq1a89Yi3sUiupewMbHTU8gEZoH3TzJhuPn",
  "key10": "3j8W8uEA9CoTwMkrue1x1fpnjum7s4cUFdXyN1EBhaf84XHYqW4JoTWBVsXqDEYegBKBtkxxoH4XyG1DfD7vGUgn",
  "key11": "2vvo5r3kSuezGHXtJZtN6iqMHpE2sVPtJHwqrd3UpU7fcLA3p98bxpvc7gq8dU8nS7PQSsWqWtZeVr1nwoUZrbBy",
  "key12": "5fgmDH9Enjv1n53bw4croRAdh1a5LQJD9w8qo7dp6a25SrsHkT1Tr4jYmpoT46oqgBFGjF3aFsFJCLZze3SQDq3d",
  "key13": "3nXoQvQCfAkcCQ44NpGwuSPTwTGzAQGufExMkKPYujRCYuHHn8k9Q3nVJufZcU5ugU5dzk8KbZn4GAuf8uTgce7o",
  "key14": "EgfuqHn2FkHvVLcPqaR65MdHAB8sRg3eWBFodbX9mwiXkfwdQgS5VBpbywZo3ehFy6573TFi4ZQqCiFviG5td6D",
  "key15": "5mJnyswBRrYSpbYe3gYz4Vf8GunmxfdoVvdRZ1BrmeThMvsbJksCmxnoqN3JkzfGFS7mp878ybzfZQhDnzpTPwHn",
  "key16": "4VX3PnFCrqgETt3yrhG9iQMu8wioUqZW8cwbVsBozbVVKbGDS9L9Wzbsb1i9M2LVYi37Q72FnLo3zLLfCboAzBKV",
  "key17": "5YgcU7cwLSGYVr8znNebWoFVgQjv5es8ShYRnvLsmsgE2kxwAdH7pDb5SWymBUPX8AB6vmhZpzEnXKA2Zrs9dEBm",
  "key18": "Kb484ub6eqgufjCznb1xSeFum1mSCb1goajvF35n5P9vzyUMVgkEgjx2kUxbjoRxRo4fx1FV7JVeh2nxhy5uf3V",
  "key19": "2Ci2XdHzyL98k6apvqcxyroFsWXQWq723NkwMaUEn6EPmzUa28jPJ2y8UKyZqpyToJkCqy3ZR2r1PobL6LAG9czM",
  "key20": "3e9frPaaWHWC5B6KSWCrmTDRhg73cTEEP5bYCzWMEsXFPVu5VXpJJC3miWAKMnsAGgtVx9fkC6Ate4E7CWqUzgTU",
  "key21": "5PujmbUNyRVaYUd11cHYhrK2ZrzPUAn8DR7n7GV1kY9K2HDdu3ZBeBKZBLbtr7j9e6sN6Pm9dRhA2hiGchMB9ZaW",
  "key22": "2eEaU6Sxe9e3NXJms2DTphHtcJrJZwE86gztzwv9w8tshrXpkMbLeghti3KPaiFZ7SXZjexnewSMB58v6vFnkWcH",
  "key23": "5vDGhXqQY1dpnEHbzqPHgJ5hWRRE5zchFcroT7tAZfVDunAf3yrv4XVZ58JYz3izFuQ1p3E9CryLWYec3S1UR2n6",
  "key24": "4q8LmiE6LcnA7fKJTsQC2W4oEm4AAajKPwwdxM7orztaDazxiwPSwpKD172j5BHMfWsfXb8v8G1tPHfQY2AxG3qb",
  "key25": "66q9yEb9V3QE2zFM35CeM3duNQ3XUATrCjwbqLgokDLLPRP5MbdBMyYcZnUFd9UCyEDApvjnaDg9hbnmFZ9mxSBW",
  "key26": "4shuGbT52cUY4ivgNtcNqPWZ87ieg8NBBafrWztpYsKPvfAYqLq7bkCdY4eUT5mLNgerRMCdzmMuPTFaEH2dHjCt",
  "key27": "3y1nwpb6Q2uGxzaFaJ32bdmVS5hmkGSHhoio3f48RvmpV17gYiBGY35LRHvCaiN117RaSnBRV1c6Eo96EPiiPTAV",
  "key28": "5MQ5GYHvDxtgHDY6MsvaM8XLSzC1ynUYXo4kAyxfTE7qUMB5omEXqtwp59qF6UitczfGUgzTY74JAPx9Dfdtqwqa",
  "key29": "4gJod5p2vNTjRT126fb4UTEojma3YpqvxLChNzBWveXL1YY5x9fvmfWKH3vmUUZ5dedY7nCvdSnMZpRj6mtMnoXV",
  "key30": "5XdLnZGGhZ5iyXy1oAPEQLzTfJKvzUcdSfwN2hZhLSAAwf1f2fdXPx6izBjVvpLw4rEbkS6PPumQtiLrEZv3UCWJ",
  "key31": "5tfFSRBZ7yH58FHveXRWvTrjzsuLz6gYfvRzwdZQv9b9qnCKR2JxHFmwaM55sATcUSTLSqvn1Q53oAwrYKvkbbS4",
  "key32": "3e6owSeHhFHXxMz45nmgekRMaHW2qx4HcLZxMSRxoWcSXTxwXQo9k7CX5YmTGhupZTUE7iycEZw4jVfTYM1o8zms",
  "key33": "5gm5aE3FYFh6diTjQdc3xVPwrCvgs9yZB5aVRZrsgZCVaDAWMeFSxEbhseBs3cu5rgBSJgHvAKkP3zy3NY3LDVaY",
  "key34": "3v3mMUALabvxEnh7znh8rgGvUcM6JPycx8nEX4qzJHv7rWZHjRGwwWgTjxheJbQsCKZAkwyu6DB1SR5Z2hdXrNq6",
  "key35": "2MPP1WCFYwzJWeb6DcP1t9aWXodDghTGTnQUeJ5fn4JwDsRMQWhaF9qyXyfxjjsNRjCdhagqgvximax1E2XcuPQr",
  "key36": "4okUMYwrUmmjVpWohUYfCBFVix4ey5X4PPXZX5Fk94XYDD5MU6wa6MPK898uLDY9pP25NQE2R4srSncsh2ehRuoZ",
  "key37": "3MWh62WzdaAwzxxYsBBC6PRBak6kEd9fVZq2cKmhwMycVGoAkj4ZNLBgyKuEjpXYzASS86dDz48VxKxoGQS7SaaH",
  "key38": "5or44Q3JS5irg2Fr72pG9uWRWq9NTaXFk7A7k7LRi58tyQSruujmf8nJe2BBGYYubJHJiasL3x84NJkj93xcWP7H",
  "key39": "44wpmmdXTP7h24rWYY3ChfJYo3nHvWm6q9rzfm6wbW22wVAj3ehskdGe4chc37THzWKrDxTg4Hhpv97Zqkbpbq5S",
  "key40": "2b6NYogLprN13bs3esGp39CLmA5TeKXzQwrJ4Nam5LT7LognxBNzqpAhGNHDXDXs8KY4Hdp1SMMohH589sRrh598",
  "key41": "3S4ozAcC7hZ4APPsTArCik81PXkYUsLJk9BrBSFs2FhwXPVG8cnuZX3X7yngQBQ2CHMNryzQ6ywV9p7NyTtMaoTP",
  "key42": "fPEgQaZuLEXFFxE1uXTD2dTkATh3BFLoahevzgGEspMv62BfzfnKoM49Mu4vMu1iSv9PFmn5EA34hrfS5c6rQ5z",
  "key43": "4Ti44ECrLRJ1GNBku2hZBFTZHrpSFEMze5dTRYM3hHyq1hRQyDvg9TktF5W2PiB7WqrPDdRimkF6VxQHzcWyXEp3",
  "key44": "SNpQwrnXsJcDzAPRUgbnpCHYRLoaqa3K8QHJKZvqc9ozF3XXpsAehr8gHj8yT8bpfJDi1VB1Yrtu6hE122iXtRo",
  "key45": "65t6gtiUWQ4QPNaYpeqkXLyFJYQ4fgbAw23oDq3AexybwvhA9y9YMgLcPeN4RJJNiqApNjiYLPXZx8kDSTZNVduM",
  "key46": "5uCSjpuzXcmaGBwhPLQHsyDnEQFmbJtTSpiJ6A3BLmRM1ZZ9MNMc7ug4KRLgGpWz3385HCXH5iYF3bpKEdMmYDU7",
  "key47": "2ng6hA96qcf4DZCa1pQetbsT5BL4YQLtKUfxGpNEBUyrJBKD2KAWdPD6uASsQCjd9eygAdvVkYJ1hGrEjx1SbVDd",
  "key48": "aLYzB6yfwmMB9aUY6oxmHqNJHpCLB7tp6Va8fhtAwsKvVHzzXDTFPYqnNuzq9NzkDA7SV12aQgECfvU9zPXnyq7",
  "key49": "2FG6iyknJUxe8WhDmVG8X5L3gjPZD9hmUFo2igJYsQyhsfpXUxjd7YpLA6Q2kbd7pHiivKEYZ7nFPHkX8fx2AtxC"
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
