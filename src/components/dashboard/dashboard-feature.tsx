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
    "3Btp1RSAGyfaXQL7BY8LfiRsktHFhBfpbH9AoncAwWz9nAZfyadqLdijG47WszVFj9wnQui5gwGrhFUrjuAbQhjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62j68zig6GButJzVzGfQzVAxxg3gbKHr8Qwawct3Hkae6LXUMkMWbmJaGUNxad47tpNejeUuheYQdrhf3krVe2TM",
  "key1": "45hpYv9YBPQFsygo8k1tADt1WHYNumgrv7BmMskLMhkD2w2evAM1wimLXYgwpMPSGDvYpPG1HWQ86W2DtvpRMkMe",
  "key2": "39UrvS22w3ipcLKJgZEyRHKxdSUxrBxXhFseZ6J6DoE2GT3xaX9aTFBKG2gA4QYpUujrDTNdqxEW3SE4qqBto9np",
  "key3": "GiDHQykaDTrrjtgB7bzGVUji4Kd9iaMJkMQui57Jhz57s7fvEioSemdv7UGaBZpFKXpbpU19kNrePajLJKb9VEv",
  "key4": "fiuLYJcxezGnSjL5d7Ma48X2TEhQZg5gdjDGFugTKDxao1Nw1MVMgTacJmGamZWVTWAjs8GmcDmeQvb3qX6oewJ",
  "key5": "2DjEAYN2mQUYesR7CKudnM6DBL5DkgSbe2hWuRq3hBgPveh358QiXqAkCeRofXZqWdC27FkFyez2BdToffnJwgsE",
  "key6": "MYBhy3xzjCa6mwdq2hB3Zgj3ZTnTh8sBQVuxANjYK4pcwz5qg48Cq5o8iEr1AhApqBCCXNgRJXifhd4zEJmxXUQ",
  "key7": "RHZHn9yWXBoeYAufwzSKyUjGQVpS5ESQAAQBjkfLAaNNmbDyYehefDdBZs9ex4qJXk8MBfJfhWp66LbpHA2N7XR",
  "key8": "5GLu2rbFCpsKX6JK8G7sNgtNrauLvZhMkMQ6P2XVqGT8mNujkbRjrZxizTM3NEHBvpLDKyquBeKRT8VyNxEMS1xd",
  "key9": "4KcrYPUVdteaYTvGmbMti3N5oW1aCMA4jV7mRhepz2ZRh95h9yS4Qvv1wyuNe49JB8jfHbkW2Pz2EGMHd2jquPpD",
  "key10": "T4vfMaVFAHjucn54WqvgAbsKG48a7NY4FfwCtW9ZLnaxXfaEfvq47UGgynHESzAKDLz6wQVvgzEE4ZHooV4qoAS",
  "key11": "acCaePoEkfHjRJoci2HWhhPTM11PkBVBpXhiZ8dKdjcDv4LWZLqzbGD1RUjWRKwA5KdX97YBzKRhwHDg4ZzzDXh",
  "key12": "2jPg96JJumSytZKHXN1fw7yr4K6AAcYBPB2Wb5z1q44vSzBVc5nwPvQ9PNfznjKtWXmdMotxfySnKAUeNrPNvQPr",
  "key13": "22x6XZwqrA8cYS5omQ23wYXw7YA9urZWy23FNfCviDvHaM4HWCgoZJtVea62yC9dU2DHVSH3RotNA4M8VYuXcVmm",
  "key14": "3x4hA4ybY8ACpk2mcDuPxWgmmqK7iEDbCe9gSxy36wY7UFnk4RoaNAt7VdGvw4cP1KCxHgSFEeVYhKsrAQb79gUC",
  "key15": "54fbtMFQhePv8bEVgkCk9yadJ9zymcK7L9LRT4mQ54FAm9AVZZSQ8WqA84WX5zJdFAfEG96DBb7ySJ5MLGj4tsKg",
  "key16": "3psSwUVhfpENUZN7ZsGNAG1yx2QNqnFrx6RXQqr2TtEbMXWTSJUSNkLAE3PBVY1isx3RyqrurfeyasL9dFPTK7PL",
  "key17": "Md37VunfCv2ZAVZ8KSZtgJoYXKMht1aqKt851k8WNWAotg7BV9Ujx6nLRbnGLKpcqQd43xbTFAK9pj7vxVoZDmR",
  "key18": "jfEnWZoWhqp2EqiZbnxcvdVrDHa3PbvQDxcuGu4Db7YpLwiZeiXPrVBgCqb26EuuWYT4ZjsFZAAH1NeNbKfuF1m",
  "key19": "4iRVPmgnTA7F1QqzgHNELZicipZYzzKCrg2SGRKKdV71HuMKpfj8G4BgBQWGKLAwbgyovzS9iirVXVSaFMvP3DLm",
  "key20": "4Sh6ULZqUWDYx96kFPUufE4pWeiYdc6QyxYHt7a9nehsEWmKa6tBJ23Ysadni3ksvbBFVHF83R2c2aQY6r7xxKs4",
  "key21": "5cUfg9w2jHKKHQJSdW4JY3pnWmJkeBzKgPZpqVFDnCDMzVjbJ3LNHehWZeTcGMahUTykishRNzsr8UTpPeDZ8KMq",
  "key22": "2dourMRYH5gL8BCJgUzcXhztkrRHLX61kzP3XJbxH1qkVMSmcJGNiFpHHmSjetzHFFTcP6VeiVZqqVw5LtHGvpNu",
  "key23": "3XaAzr9ZnWeTP7fTru1haLyqj1ryLrDby7HUkqt3uSX5a5EavXHiPY4RcwJehCqiqiTDZ2gYpXQ7gxVa858nuLrQ",
  "key24": "MgKk7etk8v8FudWAD7HVPHWbJRDM4AXEkhsHzCEZftG6q1q8h8Vhe2PxSfWs1vD5ciEg1qD3WVJDtGoQsUmBq4r",
  "key25": "5bNyNzQxvWFj7958LEiNqZm6EeYaXyaUcQEG3vUr4bMsyHBEVdhYsKuRdcdBjSuskocCvZQSJazLSCJhNGn9uffD",
  "key26": "4EeT6pxitokXmy2fxkZXVpvVMU5aGEB2J1iGrBnt8AguVwSHZofQTjsbSMJukQnzKt1riPZBPBbDkDgHwAZHMYko",
  "key27": "4hNT1hwsD9EvemCffza2k3jQBkVNmSrj86sfNEtuY4r3HTDjAbs3ZHT5EVSziX672AaH8uEiUGLBRywy2TZtv756",
  "key28": "mBhGxbgQ2Kxyy1ayToL1MH6jHS95cRvd2C8SJR52ZjEGJzBkqcLxwmGGjK4GwqvWXpxJPeJGm7EDojcX4enycQs",
  "key29": "4qoxSXXUdgkwxFe5ZkdZZRQLvgAs38fqmgiUsD2EvA4wJ3zfaeeyv79EYhYfs6de6sJGmfE4UaKCoaSrpB9qBbHB",
  "key30": "2EPsNUPtCdJ1tJw775ZjAb3VEPK6VusjrSi1WiEzWKCnrPsbpH89bZKyqSEWEnyc73apwEg8fSB1WuwsvUcSLxBV",
  "key31": "L2C9wuxhDQW46ZnYv2VtAutBwiLEMf3fUGZgpkzHEamg5nmKKxaLpoT5YukJy6pR7pNnqJLE1zyhemSta77MS2m",
  "key32": "2VX1SZZR8kXJwEFV7jtNC1rVvmZyeS255bfTWhqWZ48sD6MbwphHNb6gkT3qk6SnHyRbXEqLD5NE3BZr5Mf759m2",
  "key33": "2tfBCoByhrZMawVYciT7NqXT8szYhTwodxwoq6Aeq9S3gQGtvLWXMvj5qsFLfDVDEeBXq1VLA21bnTXFgYizKmwZ",
  "key34": "2MeUaxZrhLbscob3cahShuLeN8CpDAUeuPFnwP35wiyhhh8Fm9egBSSaq2vycF4k7efKoYC4suqw7XEVS3h45jX1",
  "key35": "6aGg53a46bPjNeGkHiQTNizRgqr1gTRg3Thca8ErU6rkew2txLnXc5r3qu5PZNYUqDB77A27eNqqJpWanYEg2gT",
  "key36": "2tdrQcL9KXBQt4QCSbny1Bf5joToWLXyF9CLy9K1JpMw1SYo41gjgGEiMMZhYsK8To6ecRykDNbo8UbHB9LcG1nm",
  "key37": "PojJPi4EV5KMJ5n2ZhVofMZJjhc9w29VFKxVKMiAQgExsu3xUk932HrKvMNaRDsx2kqk6VdMPDCBnNZTdYuv4QC",
  "key38": "3Q4fdVijEtk3vvb9T7Phq7H7icjU68GFFhuvBgpFmjuV8qg5nYUAiGnJSMr2s7uBZuzjfYNZgJ49CjVJJ4SzohGy"
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
