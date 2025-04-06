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
    "2x3csZiC4Lt8pyWiMewTzaDcfBGS8C4nV5emvZvsFs5Qb21U7tbz6fRZmhdbmxekENkGjDm5pptuaR1VdX1by39J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLWg9s8kHvpMLy9d3qrgpNUhkqAbXLmwuK82hbfShspQphEqkqoSq9oFmjP3UCuwQjfa1maCUmhMTGuW175cvdj",
  "key1": "5R22UCqcUSAFx6pNSXLY9vnU6KvvcD7HPDq6fqa5jea1q8Wce9qcCaQvmqR9cCCzsJzawn38SAoDgc46ZA2bqBfb",
  "key2": "5tpyLFzQuUNi9YNU3ZXrdV7YUGisiAyJnST98f6yTMMFGh3VzqsAs4AzjvkrTjwW1AaGDU4Ptqx8nFJFsibeA4F3",
  "key3": "4zZKAvyFkw7kseFPXKcBpNSFHcQ6XLjqEyQEW6hA3z6rTnyvPmEfs49TCvYcoH153udjwk4qbJfEh3MBuWgaEJi1",
  "key4": "3KXfXZ8sw98k8siDrHmE8hKqsGSSM1G1QFf1r9ByvJhnkPLRZBAycGjT5VQbEiaXf694ztXz6jniFKubPq8u4tMa",
  "key5": "5HpFsWXpKCincRGk5pYL6eA4F9nkSL2YnxARRjnp4SRgUiRrgy3msiG4QQXRgBdjR1hR7YRYzASktJBJ8L15qkuf",
  "key6": "215yjikpdidKKQfwjzD9rxHrBL7BUuHyqbLZbytHbFeayfuf6wTSRW6fwxhPXHtuTh15nZzVvueu2wffZKMnaCpv",
  "key7": "5Leq6rPDTBoDv6cu8qrA4dhyEKHVGajAsvELpVP8erTxbtbbuWiMuwdjA4YhUHEHgEYohMrWvPqjta5yfFFpX1M1",
  "key8": "ciaeapG5XGF93WZjcRt2iPTMAzTS1w6aqApBTbY7dfnNmcMXpd4oj8MuEqxNUijkY86gyZV9u9WrQQboPtzeX6r",
  "key9": "6R3JHqKbkztWyaZdQem13NPCxJBaXnaTrP3u7oGQoGhmo3NPg549orqxr1149wmGpjDGvUhBYx6WezXjfEMuokk",
  "key10": "2eipC5D6YVCEi26VxQeYUzioiF8YR3KHsegWBuiQAKV9zX8eUdhstjZNHDuvUnsaKcmMjyW9Xk6Foqn8Wcg3fLCT",
  "key11": "3hgAuzHmPPAti38W5DigVB3xfwpPeRAvGJoo6Rxd6TzGT4s5X7UKbaae5GU21XDxKeavC7r5pnDqTGQRs4eoV27m",
  "key12": "4DaDMRG1WHH5qKKYVNFq3zyjGV7vrMFMT7L1DzD4hRYNamAL61NDzZuv4PiPtYeZVBV21x1gDfv8gNJjoYbtdPGG",
  "key13": "3L3E44AqgLsSZxGpHQwsLVjZqHhx7AdxaJQXi49NtyuMNuxV7MicRoVRFbf9GuG1JYmEkDtVpgeJpCkiDjAPaRRG",
  "key14": "2Vx39J1Crw1Psd1Q9FWyeB7fwpTTBmyAF3VDnumRvSyz4e4ejStSJWaPK86r7xbikWz6hDtLJzwt8ZgYQC9brA7H",
  "key15": "5evGzUFd2yDdihmsxHKP1b7TFfRTipijuhQpC5yoL2LwuFYBnCeA6zRD24Ni7nLjLtUWv4dmPXT8gXDGdYiizoFP",
  "key16": "37k5jHrzZnY9gL85pWCoWFZmdQ4ZNTG6dPUy7yrVsDMEqWraTzKFFuV7uHLzcCgDgxH1vHtY4WvYTU7HMTgDDqWh",
  "key17": "2ZHchVsYJYPGKipta7yeEEtkmx4eBJnCVuLU2zFSUqpT2Zw4ftFq8TYJfPnuPovfoFwwVExEzbDENpXEj7xUviZG",
  "key18": "3CTBxhvenJTtqmpBj9GEuU1ULJ5kcRgfji3jbguEog7hTvA4gGGS5edTHYZN7KL5mbv7wTSn11qBXUC2ck24BTKM",
  "key19": "4bLvEoxk7Zmjv9v3eXJDGyAbDkRgyeCerHySijgtjSaeTLsXkUs7bQnyJwJkYcNKbB9UDYE3bguYyayePinGPsro",
  "key20": "hpETFMCWmKmPUVhinVmvvWpL4xXQzkeTwFf9XBG7cJiCrrTMM67XJXtojVi7WjkwEzfbsmYnH1Zbd9ndhGJ1cYj",
  "key21": "3gWDZGsusLFVRHxib5QcPEForT9sSDuy8QwPY2nAeXAy5hkrCwp5wAmQdigvYFEAEcYq9tjUEycBspbkNiHabj5o",
  "key22": "5D23AXgHojxt4Xk9wuhaihADnwJSd6a3TBagEQKjkrWesY2pq4ZWayts3mxqoPF2PXkmVPtn86gkRytCZ12gm5ft",
  "key23": "3WJRuGsctBi8vWweKS5i1RaiXLC2MrxYSCCCZjH5gFiswMFS7VKDJUSh5ebtacA31fo2nTuyeCYzRmhYnk5JZVvx",
  "key24": "3AFvUew862zZjbCgtQ2q75aYoEb5qRE9b8K9VpC4bePqxeht9Lxq57Gp3Ru9CTVYCto75TthdiM8QskPG5JP8RkF",
  "key25": "2Z7G3z3QA7VGVijPWi6PpCcGku7FqDfxqB9bA31xkh3tr8Bx4bmypcozwWp43hdMRKp75CrH9r9vdkSAwrDMGZyN",
  "key26": "4Ydn3gENS8gyQ1bqgszHnVRZSoUmQSsSXR18a6bFJXojCUuVrcqPbLMZbe36pn6FVQZM3dzfkMpkvG8jC8L29VEu",
  "key27": "47cQoMaNAwQJP7PdQm4QZ9SWhE9uPFiJfYi15WMG34AaDQmGokZWYqNoRTswmYttSciRNwXpMkJgugZoF6jNjFMC",
  "key28": "5zqR9kdAbkDZiaTqhLsCWVsZQfH5d3UfFhB1gPgNq6v9JoP6nVeUeTCSfL3b3Nehzifb2mVRZqbneueRKU2Cp8B8",
  "key29": "t2SfP8mDg5q6rMAZveXM4eEoKrNfWEpVuMitQa5rVXoKLZP2PRWfvNRYwEnjHsBvr597B1RYGNyAKqmCmT7wbWu",
  "key30": "5ZDc19cK7caNY9cVsdfxHAqVYactGQ5ofbvtZkvTQhXHmApzFwz1YeShjSZawbXp4UwykCTQqXbuU1eVcuJMf9RB",
  "key31": "5W3efrRhmpwVDkwcFcB5S5nCgf1mJr4ed4yLzWV9sYdqTqaSToU2EQs29CLwNEx3pMHjdX63omwWKNikLbHoJhWW",
  "key32": "5Z9ow8EVo95GbYkejfv2qA9MSf4GBBk5yz4avmMNpS8sLNvBcaTDTSXyznb9REZV5YEaXNTsDMhVo8FuR5QAGpDf",
  "key33": "2jZRYkW7xS8G2cAMiwdaa2EPBnkjxzDQPwK3Cg991Fa3Wrs8N7vL5W5F6giTHjj1xRL6TmmS6niyvF4pyAzAQ9hD",
  "key34": "2y33mjnhrU7NWSkhGr7w1hVFYw6wPiHRqtCmX6GSiXzcZa9hGcRmuVqPUASkQXe5svEaRCscE96Xwmd3H1S9JAiH",
  "key35": "4jrE8xTwQLLtWbFjY99BecmUKFN8ZXdmp25ZYgFW2znb7aXFHBUhPAL2F1PcyyXzWsenKhSntBGofgrGuoxPkkuT",
  "key36": "3MziQn1efFG6DW5Jgubj6JqPxxCzLwt8VgUK2PSLkghbJ3kau3gYE84JpteA344xNw9qG5J6mGBKnh4hwRCuHz87",
  "key37": "49PdDDUUPqUpYWR1tZB1eTpNGFWo4WxQMZxtZHKNmmmPMfEK1Kfwm4Cnh7sJ6fAPTSzuG8fHdioQgER46fGXKXg",
  "key38": "5AL47T4GQmqKnUHSCw19JhUy8Gued9YbLYESwRzGwZiv3mBtPikaXCcMD324rZB98deAA6BcbpKTiHBT3WCsJqqL",
  "key39": "2iKJBvmMoWRhMDZrRUpToWhVtho9f75vSrSJCz2LS6cbst3M2tPkAmTTy9NsvxVeSKXDDnHiSpozxN7zFdGDnB93",
  "key40": "4BAwVboQzuHMcZkKmsvoHdGr5cQDDyYAYU5kfi9wN5Giwpm9o7uue98wn7qdHanEyaPS3fsxsa8TkgVcN6AY8xQN",
  "key41": "2T1sfs7hQwXmdBC5uruN8D1k2tEwg1YWXgEFSHpnJRJ9FAufVW7YZSyv3MjrgdQNzbEvKtzQBXuQcnG6azaU9bkD",
  "key42": "CGg5sx3tzRdJZ6ZDYQjDYgDuBWmzfXXDCBhoD3Gc8HnHpafoXBZES894jPwdgVJT2WHxZzYQ9zCiS4aZGtosMX9",
  "key43": "5DPsW5vnGisofTkHFCGEvRfCt8wz89bhrmC33Po2FDryhHzxYXtVmSzkxCaaeRrh3UfLr8LosNXX2UjJBHDqdjd3",
  "key44": "iAFyStJ9v5BMtY83KaAE8hcDi9d1uq2LWzJTqX9EGMuxsbmYUTjExHB1SVNAGLYXpTBXbPiRutieEAqnQraY79R",
  "key45": "3VEtSacgMWngnf4c2t1zRtzGvQhbgNJoyes5Ltt1ji8tkY8kyT6HiVhgXW1zffhif6MvzVRo3LbfZVq1YQ2UP8uf",
  "key46": "648KmkKCoLdqmsMqH752YL8QzqqEBPy6JXDGSHY8391bb4xcax1WiMQwNGvUH1agD8iVnvCLHHu34FfnyxS6Ktms"
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
