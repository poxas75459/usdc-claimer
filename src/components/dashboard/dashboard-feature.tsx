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
    "35G6ccYUvxwxxKmK14fhdQMbwG6zb672Z53qR5LqtEyKRAiTfDx8kwNrrUUHNPrrHJ6WHHKWoGZjuDxcm7U3138A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUkLgpZjZN11RjergESyFv43CBnqHnTyMVfqxt4xWtnvMx9utfWsVg6QVmDZGYXCxdhGijoVuzJMhPHJwdWNHn4",
  "key1": "2Z7v1S589ni2Tjh4MXPMj4WKvWt8qKWRAabEpatDivF4RDZtZ9nvPp6AerPXC8G5VAh2c7WMorGaewD5DPJJeUBx",
  "key2": "58QpAmdeBPC9YSPz81rRxywQm8dToYJhcHvXbYBY9YxkBPBEv7Z7J1PK6kuvx7G5dnAQGaXY3hrSA1x1VhETrjVo",
  "key3": "3zHEjammLfRxUtuf2jnzdBX9CsdE9XuZYTRGMdgvkaDCN7fGWfBAKy5urPthmNxMDToDnFXCzJyHg5J3nBKpuP99",
  "key4": "3UTCBjNh74JENgVt8Lpk5XDJQ8TN3TTj41d2PscPk68wDCCEB4KoxQjFwHywK5Y5X42YKj1MQ8NhUz3MhEqur48S",
  "key5": "3dHw9VVj5BHuBwTXXRU1g65KdDRvS7vetXsSWCZZEDQgkji2bpyMoQKPcqrKaUL2V11jdeJB9npL1BdtMtAyNQKb",
  "key6": "3fyKP7AqCzjrzUFWynJJzRYexgEvvab5sK5qHdTLtbi1GVjC51ezZdLu721A7AzRZDMRqPGbt2QnKGF1w5isuQLP",
  "key7": "3EuJzikC3E5gQ8amaE1jP3UCupGHHHmXRpUv7fPa5ypWkoJ3N2sNBrtbyFNUfk9QPjW5yN5VoY56xqqMVL8bj9DQ",
  "key8": "519FRWEnj7GqxbTvnB5gLHgWYvGhUZTs22vTCZya5cQS5ME8sC2D2WMND6SFYhesGApDrK6WuRgvHTaBx8pPQT1Q",
  "key9": "3ELbUZtE91pqcyXHJuUXgccyiiDpveNAMEmnsf4TMPha8cooqScDGqkT5n5KpWmhMJhMXPsg2m7FBQjrbgqUH3EY",
  "key10": "2uakBTLTFefX9onwUQqA3cUNUS287R5nZpvVDuAbGQYdnETZa13h2U1y97yPbH5mHcrCRarThZu1ns9ahJbaBbwe",
  "key11": "5BP1tZbGULwcBUq3dupmc1LxwyAasM1H5ezbNaW97quykciinQHoNJk3nKX8V66GCZyWnNALxP9S5tAdCq65G9ZU",
  "key12": "5r4kUNhVq4FCTmRYjugrPiKoAthu4H1Xb4gTxYxRuafXZGKChKwP7N1KQ6feh8MJQd37PWjkFMP2DdGn3ZfWpnZ4",
  "key13": "3cHTE6zzbv6ENebuqxCcfEoLG4Lue5Dq3356mzv9eoRzWPxd5iFmGfTK17xqW5tywpQBFLPoaPkBUSDhDygVqZp",
  "key14": "8GzRq99JK1ft28m5rz4KVD5kNyaHndjdF3zF2cMxw8HkH445aczwYmZ4Y8ty58HrMj1nRhqZiD4Exc4H8qrV7qB",
  "key15": "3e87sme4AdXSHWS3f2XjWp9MNWGYPiX3Pha1AVevaZNX4Aiv33mbzvRAhDGpike58wwwP8KDobFsqXdvVp9qwCXc",
  "key16": "5n4xfCoehXovXsdkxkZqyKGro2DJSMYcYJcyq9xPUF91fK6QZqSdSkuUbafcGrbWHzqvYd8qRcHF2S15MJdC16NF",
  "key17": "9oFqNjLbaiJYvfvZT7oooB7Jz9cP15rV7HhXFzDZxDbgeXs2X8bAeBkahBCQYmy84UkDi5EnkY1dk4uWpLViHTJ",
  "key18": "8qcCiWzgrTsD4i9y3VjiaWA5MxhwA65rVakFLrfLin26W8fbWtpJGaouLxa6DmrhPYofKAxtvw2E7wvgTicK4ey",
  "key19": "3ZvP7GmWofX3gsNBV35rWgZCMLHaPNnpAF7sRRzJgyC1aPS7VMR4Eaa94WHqJRA1ubZbK7EwTw5M7dNBDYjeBgyz",
  "key20": "5GnfM5ecPnLdZxtomCsEuP2TWeCFyrX3T7aXBaRhUdeD4f5YjG4b2gyJMd1WUz4z1byYo7Gd8P3Xxau9HbowzWED",
  "key21": "27d4aEgR2myA5SfLDBmqUjaGU6UvLcysDRQ3pDCcxKYpDUc6RSaUv4adaAANksX3q3trxtXA4zDgN8MnAZhwsCPt",
  "key22": "67enjcgdjLAwLHs2DnXVmT8HpzfMBStU1i3BZfhpPKz3szyKyhyTPg4iHxwWn471DWUzXcY97Prb3MVd2UrVEamg",
  "key23": "5Vb6BLENnnFBxqtoFT4L85Zq96JDVqchJvF7zHLfYm4y2WSsRZDaLoRqss22YNoRBvrDXcbGf2mGAkwSSSGcmSv7",
  "key24": "Kv6PJQFmD789K6fVYqHcwNRvJfCoNdiqDZEVjoYmMWUnSLJXMjiLMKmq99tzdcj4YJ6PVeabKbNCDzN3B5JXCmy",
  "key25": "5pzH3EUW3DSFVfyqtvNq359TJcyKee3RWpMzXN39j4Dd4FND8Q1DRWtitGHz2R1iFTij1uRAE8vP1WmCpQxZyFB9",
  "key26": "216kDyyLv65icp7Q6r8QwnSaaT7LwpkHU4aJx9JeUtBHiboSLJNZQrpimr1JRkcN24EiziX4XY83PXHYr9zMv3ar",
  "key27": "4PNsVtpz86GZqmNFkbkoi6ndBNeHD2jTYZBffPFXz8QufVJBs44e4b9o9UkJpLo5fQfLqzTBcnaSTuRTZXC6DPKc",
  "key28": "3B8zejCqoY15UcJoEcRiA5UqMo2LuQnMzZDKW84FvRi4FuE6Dov52mRY6Pz895KXsLCyoKRKnGojZDqutadDXNvp",
  "key29": "mR31y99UEn1gBSffW9jDsAE8DJbiPxSEuJoLTEzkhGU7pVbqoxfkdfn6dtEVkgALBh4HB4U6DiR2GsrCcEXfwDP",
  "key30": "4S2HWUJrQ8d3m2UXhHKGnqR8XD2q7YTRGrbqq8FiYj77qXDDuiDLL1RHgcGv4EEpGUU6kkyAN7XVZZa3GW62F6zx",
  "key31": "5BYHdPoU8WADSwZQ4FyamVdhCUWxgbf6QKUuGrh4PYk9Bz8GZxabbZg74RFPGoQSfW5N86pq4WL4kmioo3GVMK6d",
  "key32": "5HJhxaDJEvD9TtuHjpSTKJztv61mmVWJBKaoTGnAfiZGdZF6YG14HJyEnHxiNMSz3xvH3BinL7TV6p227ZYb6tHg",
  "key33": "3hYGCEKs5yKmzSBPMZcF1AgJXzJMTaVEQjXJGmR6AowW4ZTLXUY1pb5TBDojWpmtss6T9FvbQPVwJGtzAxCjNH1y",
  "key34": "5ouGazbsmQGHrXCszR9wugQBgbStqSDS3jxiswLWEJj8mry5sgkUyQseAJTU8kMfFwnTtDznEQefWD33LcUJGtV4",
  "key35": "36wwQFytX67HCtUVQNSUeGLyGSienEer3QhXRKApELke9oatzKSWQEX4UCyifCyq5GLDmbx7ZRQqgP3KzY7oMcnS",
  "key36": "5oyCxhErdLUc7ahHPqukxWkAuDCViYrhfthJ9bkCCUQC1GmV4Uu9FmuiFoQQwGUQMPwcatQ9cnNwE6JCmA1LGVcc",
  "key37": "2K7hTx8wnFY6XHRunq2MxMjigqQwho92QjaPcLYo4eF5jNYV6Y6r4mbPE9Nx2HrbLTomXhHTh77NmwpuRwnspB5Q",
  "key38": "D2BytHwczNVbGnYFCGNu4c7YQ6NMzfUh6iweJK6Psw5aUvdrjpEzptgQHnm7hvpvFdDxFr2KjLssSVeRjvTsMEm",
  "key39": "28Jju7Mwk8F6vHu8bGHkjypaCSyz2XmRd1HWuSD3RaEPoBEWNk8XBNHt6gzUkKPNc5epCc2UVwRL6XiR5X2fraa2",
  "key40": "5bxQd9uJ7bEbsxtXatr7V1q2aQgDP8LpiQPjbqNWUAbw6M6J3MQs98JwjqfGgJ7jfWMVkNSkjqoGRsNG9cQVpZrF",
  "key41": "2MAYzs8QGWxrqQhVuvAAxQyUXCcqK6v1WS5dXAp9CrMrhYd4sdtiNym9Sj9JCSmcDtTJ3WGQ3eYCfqWyHcsVuPWb",
  "key42": "44XkXceEocH7RVGwpzib7CZZh81sQToRsx1A4gpUv5uT9j71tAzVuvEgLxGZthTYtUJWtNg5A48HRa4sJW98KkyL"
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
