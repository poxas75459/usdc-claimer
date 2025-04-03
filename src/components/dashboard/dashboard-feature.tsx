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
    "2hmS9Fm3Mfbse9D4phZVJGR6pAbZ7EW4YgutNDpn6Lm2hxmBTG25TW8PVcAWMEQ5HdBg2p3z5WDzqUiPzADLo5Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnRNeRjDAcV9pT2XodnN9Y12dzR6c79hregdn4WVRjmYvB9qgwdyjQ5UVBvA4EDscNuNQZmL4joArsapttijA21",
  "key1": "QUKWvnBHtBWbCMmmCPq9pXW2sZnqETAdmfNFQwGQguiDk8ymAtWsLpGAXfxtLJwKqyerYBojpkU8Zv74LG8pWx8",
  "key2": "sKvPQ9W7fRvmDk8mdiFsbpXWbD4cMVj4ggLLtQnkhMVsDuVzuPi9cM928d2UQ34KgNrcas16oePSJ1vNWDwEdHT",
  "key3": "SPKxtSPfpVYrxBk5FxFoJ8rYDoXSoJBMMuFWLHjuUMFQHLwhsTN9FpFU1U55xQPvRVMQEmFJtU7jxFUCpkFQnrJ",
  "key4": "35uhWvhar7CbHsfo9MKhSTT2MgmxtQVq85dq15jXs9imKyjchLuhkfdwfhMJL22h1a7vAwULNbv1CdwSTDA7J2UK",
  "key5": "w9yENLBbMBNd8FMhP5d1KuY5iYg3VK18YjWQ6g57S664i4DxmHe5t27hqE74VweQVYTzxgEpyzGnxfwemZ4xkgY",
  "key6": "2t7efhomcVDLaUMAoBKsGz8f45EcyT6mh8U67WfpiHcPdN249GZpbZrg57UGQaEC39zdKuCeZVaV3DfCdQfTvtmP",
  "key7": "5BkUcML3EniPBnZbPZiAV26XKv99RT64YTUn9BsoWLc3R298SdjZUwiFVSFG75MX1HF4dT2JuwiSsMPYC4i5k33p",
  "key8": "4jM5yEptYhpirBDm7GwQUGTwpeoVjfwmEXngfTSvHR9hwmLw33jTSQQa7jqPGK4gKo7H1oe2KvWyMe1TueUTixq",
  "key9": "4YL2CnUz5yr6P8sZnqVM1a4HEVe1wHBNsqWJnqW1BTsXR6AREJ6XRwik52yMMQF611kddXJ9eEeTf7f1q5cnM6yq",
  "key10": "3bN5ULM9fyyu96M3t26u5jWfwWydXChWpnBkqAtK8t28zdDNNejjJc6kkfjCsKp9PvpnVvTZD2ef8NPKcPxZgsBh",
  "key11": "5dfXWay8W2uKTgt2AesjhJfb69eE3TEQpGCc39hXqDEwGdcP1n5y2K527GaCSnfrXogdsnT177CizJGZWXTYVhCj",
  "key12": "3dPnDpta6omGMDsuUMt7mHi3Hv36dM4HJFc2tNwwfmVRF6ckA8heBYFabix5SwhuzbPnbjipCpxExvWCCCVpRkZb",
  "key13": "riL6M38nQPuSNm3ZBC1LRCvsfgAjNR4KDAodbgWKM6Us1MZkdKCDKwgUKZ1eGsTk2bNyFc7j2CGSeRw1QWxrn4T",
  "key14": "5zDdJ9bpvprLZWFtom8X4vyc4y5BXYLt1mhix1f7uvSpkDjHTtZRSSieXk9RvjPqNhVCMgGcywMi9tD8uXoZ3LQH",
  "key15": "4tRNusRvq7h4E2oDwb1NtG8GW3zNn9Hpaeq4SiomkhmDQwwgunKwBxXoNc7xk7VJdyU2c7RNEza7FG8foRAW1Z2n",
  "key16": "DwavK39qXSxabZk367qnsYKDvXFkAsGjxj8doHTZ2rCj2Wm3a3YVoJ4giaRa5KT23xpuyHV9B5fAcvU491ackwU",
  "key17": "3Q41QzXF3YNdY3zoAsFfkfRFpGmgmjaJFfyWA4BmPP5EfaTKC2exNwwoMgVri3b7zvy4VYWmiVK9aoHLEv494BT2",
  "key18": "2oHn4hCPHc8zaGXRwfB4Q9XrodFiGG5epxkFtauo3QbEtsSq66WQTkLwsXo5wUjg9ycji2vxRCnvUMUEDd1NKGN5",
  "key19": "4Ww2xxUC1JKEtxjyoyLHM5hmVMesM1jitVcqRD5fX31riCd5gtoptw2B3rvAkQFrJ2hUQ6CCzmSGUy7q3MbtSbbY",
  "key20": "3AyagSKc8CKNKDCo3rdnbbgiWLBAk8epBsirVX7z8B1mkM2zmJjSaJRTaU5sDFKZHagHAqLj6ZhSuzNZyNqUAtTc",
  "key21": "54hudxFirh27H86Ej5mzgzB6izAjHj3pCEECHHtQkZxwFVtxiCeYbVYBxquuf6pebVzjyJ1gfrxCj6NtqS3K6mnm",
  "key22": "2WEnwbiQbTYhTZyDQUxNiYfpS5t2NShtwgKGUAL9LA95b6TVzVibAugfVh3CHVguz94Tb8H5Picebki8tz7NqgAw",
  "key23": "38S9zaR3Xz6JA1ZV1k3mMczgbua4wRRWmAG737WYtiNps5JFiJdWUrFFiCBxTwryEpHZ9UKahCejk926w6Hvznyg",
  "key24": "5KT27Ns9Mqse9pZ9Acr9WeVtgPmiVBBZ8SP1kJ2cqGPr3Yd1sd3SRnordadHqcB8ZRJAtwByNBKUPmVC9BCD7cyK",
  "key25": "3fNq1FFGQuVTEQQowAevTL6aRZRwnT6sHPgsqAyV2oNDThDFhvUzHFiTsMvotoZgwmJG9vzUdvM4tfBu8k2vH6tr",
  "key26": "nE8SJxJ8dvToiV2wg5af8TYxnLuKhNudibMiPYVGpCbCB2TavZC58ARiiQu7kjgnVSHQWuRZuV5MMjyXdEV8V4n",
  "key27": "25Mn1svc6aQUFgVGAWv3mdDNohMfv7idtRqVLnX2vTAvvSV9LTG8eK865fxpvftvtJAhcbt79W8aDSJsR4boUzwi",
  "key28": "3ESnGztfV4Z4QwY7EpBvbkvJcDXV1rvLzMqWjE3hF3EjKCmv83jmdTNSYXbkT9YQ1bjaZ5o5xDRDTASEdqpqWbq4",
  "key29": "Jx2jGGU9g7bY2yWf73t3MjfyKXQ44T4mdmXYAFpMbUYkuZPSUcFYjeVkX5oj8EQ5iDVw6U9T2tZhV1BrbSY2fCg",
  "key30": "4tyJeimZAS65B6y4LAzvG7j2DzN5xeWZLJjPdvnsyUhr8wCnFGVoTp3tjeA3c35yk1bnMSuKh5A71z7EvQu8yDve",
  "key31": "39xVmpV6gL4mxC2i1TuW8XPTEQdG8WZYFLrhgj5w5BMxHK3hxokp35iTE812S9XGAzG3XCJFzGjpcGzKApfdyCqV",
  "key32": "48PXvDNTRhwsAQoYEU2uMkPT7bygLdYcykUjwsCpoZBJQcT8JYLz9BjB3XL4vAf8DdRbyHnY7aAK8AewuvvGUTGt",
  "key33": "3bv1Jak6UpaTQ6HQ8bYMUdxAC6viip6ChZEPPJ1om7MJSyKG64vkVXaaoaUy3hfcjvUWsCXWDPMwm8UGyaE9wv5w",
  "key34": "nHYKgrPHonxmkRbCUwpxW3ot5Z3kXbi9Hkjovk5kQW2PMdRSezWt1UmAmWqYGcAApUqrirhnEXXeJgZsxqtZNzX",
  "key35": "5PZn7XPstKtfXFm88e3AmiG6stugSn8bhr4jDPM9KbBkHyMQWUAsLa8FYVuz1ru5ndEiZbFZpmZLvm6QG49TGYax",
  "key36": "Bz7Aemf8f6TCaFnmWUMr4SRG1FDL9GeCsm5Z2dDS7ntXgVJ4F7AhkHgUgcfJJEPYwsvzfYZwpQh39J4w8bfTbmM",
  "key37": "cGcqG9aBb61cSdQZeAUMwwoy9sVxERNGtZkbe4nDu87QdGMprG6bSDJvYqHPuf4UAqhZ7qiXech5NRzvpUEPSiP",
  "key38": "43419KNZtwpSw2Qr6nECiB8SS3dHSKYwH8LbXfjvBaPfwenVWgrCmSG1cf7duiHJ9HeeJSv631EvQ4LVWCELeXsm",
  "key39": "2J5yq5zJQ1FofdqrVRr2bMzkajFWVdnMkD8xLCoKYojah2M9canomJXhBNw7R1151kME5L5pd7GPLvVUV8Cf8QT1"
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
