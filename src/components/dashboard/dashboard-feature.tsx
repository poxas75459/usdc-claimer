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
    "2MAgVHBqFCBGdHxKt7ggfRFuns6qbqHfh7CdJxZAR8DVHu61DPtn2fRay4o6Uw5DRfDcug34bKcS4X9qTDDpew7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eC8XmN4DGwanSJGCWAvVau9bTu4LZvePy7L4tL7CmsEJtWmyvK98sFPqyxdNQ7YJSQdoWnr2TqW7ZjL72v5LQcv",
  "key1": "5V6enSo6awEJw3Kxry3y8iey6XGwrKZ4dxHZGJMRrreenXf8oqGzdVLVMWUSSYcDYuY5AWW5D45h15vrknr8z89P",
  "key2": "65Gm9vpcT4w1M9AvLzX4ea3v9r9KuNWHSwaVtxKmiN8B4UVKj7TXFwFr9DPJoTEM6aFRXfsJNocBEspSTPbt8u5u",
  "key3": "4pDWAfv1jiY6a4hRUE1n9MMcHSMvh5AZth2wK8YUHevrkoY9FZ4T4L2WJT5yt9s8Codbwt2fP6pz6xehkdTceegn",
  "key4": "2NkLWrcwrqjbxWrH4iE7qcRkmqDmyc1s1gvJhnDTwtTdcB3qqdxnLof7VK9Tr3JBYwENPSdmjTV7kc8QZJKcohWg",
  "key5": "hyUC9Upj1z4GkRgMXCVKKZEzksFaFT2Nq3GJKJAfTEC2rxavZbYoo4Ue8gkrMmFc71HJyPDX4zeFTaRYy8fcpSo",
  "key6": "3HHbYy94cKbPNcE7aafRZZoHnLS6hMktRrVVu2mnRHZbjshZppFAKGJknzpSkf6BX6tax33zZ7zy25VnRoc8rndU",
  "key7": "5azxwvWgbefJpc7ziVHvem7qtsLV15hm8CaoiBDZXk1VVCejLdgdjJkcKYdwjnFYSh4374aZ6NNtsdfzPLMmFwch",
  "key8": "58d15vRnDMouYQhHw9phCoiHZewJmTCK4GvLLmZcx4c4cPdtmnNBmSacb8gCW8A9e4HHMg3ctVoxj7vCeuLFApnm",
  "key9": "5Y7UcwYKwQbruVRhobHLXvwhJNMF3rKwxP6WGMyDpUwuHzfDQgBd4jD5Ky53e6JGLnqk3CWJkyjZGa8zAovUPaDh",
  "key10": "26ob7R1Ek2cWwjRxshBhoETdi7xBeGpCKqWDLaQQpswbvkZqFZnJy9VjuoMp3m8zadeZcKDvLJexxR2CtyHYmFN1",
  "key11": "Kz4t41mZcSNsQDva9dAD5X2fr2qDBWMAJAzDsMQiZ7Jim7hRo2jAG3L9FWJa2X5piMwX9sgrJbCuKgcNZtvrWhg",
  "key12": "ebCW5s3Rk5YMHYA7rU6qwXfamoTme6wk4fwQ7KF6PuyiuGndyQtpDTBQVyAks8PMCBZ1vnvtr8gg6nf8JMkF6EP",
  "key13": "4K3bJmbQsNdavcDCoaaPTYqUXP2Qe6Ao1Bf7Jc1BnMDTWaAPH9Pgb24rD5K99yYQH5xQRyoD2oZo8zSGBceGQgx",
  "key14": "3hX1Q4GiFFQbD4zyovUV2CnBV1AG5VKUUKWWJFaNBmWQn3Xe4nachqMgfvRA4ujXS1rRGvXXweGT5j9kjc7kWxM7",
  "key15": "5BFVb9m2wBmB8DAyTmnqpQgVvNnpkUdfSnZoWrNrDakeV48auBKX8eV9HfkcPTVWgqNCFTLQLdQ1C7h6XzJe5dfY",
  "key16": "3msX4zCumMgPJtKUs4AtGQfwuBDP3V9GMYybJx9gYUTKwf75nGgMTtrsnqnpPMjgBLk91u8x3mnKYXjiHbRpWJXF",
  "key17": "3mDftRrwgpJZv79no9rXzVE5UreRFo3A26S2N6UGyd7EURaJXGY6fq6KB5XsutRXENmS9zPh33AyHsSLug1QuP6r",
  "key18": "2Whfc7RhJW4yQGekt4BKPgSYbpauHLyCWoXfXRWjGgNrNyvoP983trAAuBPYH3ZubdtCYh3xXdu58YWqyQ1FjqAq",
  "key19": "1NvFKygbfz16LBkBL47oyLT7NRdh6P1DMojDpiM42T1pM6rpXzCHBA4BqQjsMX29HSC4h28H1TFY9L2hJ14bMAC",
  "key20": "5UsYehohhQcWBv2YJqs3Y43N4nViCCTeRz3Lc87VihcsKocAtZpbdyYRRWzc57Fe9QHJUVjFsfySS7TstiajUzxs",
  "key21": "asHwgSqUWjU6RcipT81UfC8z8v44cU8TFngBQpYd752YoBZoQASDXKkjM6cdctuPbxb69amjkfACvfEpjnf67D3",
  "key22": "458ZDwMAAUttcYWAYUGE1T1ShABWArTVTaEqKHgZMPQfd8vEwqJo6HH8gXu9meDh5FzUL4ZR8o4qKn7RzF1frzRm",
  "key23": "nHJyYa1FAnq6HCq2azxdKKakim5Wp9ELxzV135Tb5s7gxGeQb9Y5i59RxTNfCkZHg6mLpyKKo35XY6JcjQ6J7YN",
  "key24": "554SxAK2ZWBhqNhjmmADTMsRChBZpD2J3bgVJPni7nL8mor2tAW9SLg7fwQhxRQoWUouPrNvVcXX5GhFwFXJwGHp",
  "key25": "5sTkdjxXiaY4WSUNsJEd6E1GySRDT9adTPM1NoJ9ms3Z7LD3RfunP1u1SejvrU1FNgtghgKRGPxQPGUnEBd2NVf1",
  "key26": "5JT1NYCKSA5pQPKNz1JtfXdNHXhG3wfjfEPU6c2ADNGsPw8HGdxMdJZAEbJDWpn8vVaQBa8mfo3FmvFEymPNFBaJ",
  "key27": "2uzsKN8h7SL9wqYRMvZS1WXavLnzu9DziFiMQChY2L2wfovzCCjeKacK6PVM4kD3vti4DcEReF3MRwaRSWNTqYF9",
  "key28": "2KMRUmA6NqJC24F4WiR1CiTPNLbjYmk3qa6zwd1vxchmFDEJexKAGwFGGG9gTJXN3sMMSN1z6mreDB4A1V5hSvco",
  "key29": "3xCLgmNQNz3Pyk8HEd9DYgE5CNo8vjsE7vweeRgLP8AcSTDRtj85SVQWUWzWFHMWymhuZ5gczmLun89HhwiW8vFD",
  "key30": "4GdeH6JNp5qKD3pYDtMQx5SY2HcRa6sVBC1VRrvhnahK19Yb6YRsU34PiYVXfae1QW6QUzGaskdfA4LRmpdLE6aW",
  "key31": "yswafyVHNvySRcpJ67ezWYmVdj7SfWJia8ktcijt7c2UAcvw3ouUREwbZnS5vxGN8k1Rks43QwxfFb13vyGNPKr",
  "key32": "5FqPFtEMixqF4nqoFexbk7RCvPfRPuLdhdmxk3SViNSjScWatxBJGhVPZfowdjDuV3LaxvgyoqV8i6WgvHFrTyhU",
  "key33": "2nA8RKFXi8hHJy5VCEVQ6JenXG3GDtRX5QyZLS3PgudPTrmwTkktUZwck8YUUUgzvoNjYXvoNnFfT75pmWydxgy8",
  "key34": "DUj3ZKumNSCiNv173yJAxiVth3iHcifoKrFz1nGeQX5b9XM9dYp8GGw62E2sFg9rvgLUqBmoE6TQ3ViEZDLeArQ",
  "key35": "3JaZtz8gZZAEsgTTgcJQp1U59HLkoRn6bWgj361aNtKqzHJ8eUFqharXFHYBitfjbcqiJtnC65rNHZkCSNugYAUz",
  "key36": "2sud9B9x7eURbWMBYg3BRCvyQuuzpZWDe23NCrkQjrwkxa7R2J8cqv6knRqy5Y3KGGxssFsb4Sw1whgtXRsXo6t6",
  "key37": "26z6ecARqguCs9ndbgjrT94sRkJbDjEcq8ZLjuqqw4nzNA43ZPTtJhTWjyzBcnVjkrx8MJfCYfECb8BUqBEQvpSv",
  "key38": "3uSBeLUEcyhL64J14PCiYQRDM94UkD4KHVtQgLtsJtcAFScrFxFtYn1cGGYaUgaSrSNa82qJ2UZovTVFZ6mx8yLt",
  "key39": "UDP6YfpMG16617hkxvPtDJ4cK9BHPbwfdhAcrrKsCbUzRPUaSRTbLBkuKrtKtZ429bCBxZnC7Jcav7m1tBrkPby"
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
