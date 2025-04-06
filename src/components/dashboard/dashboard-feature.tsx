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
    "3NZ4WnagkAhxNQWSXDLnQyXkWuRaRqhaJTKiDP7DjRJ8etU6MieutE8wgnTeYjVpFmwWH8apphej7qemW7pYhh1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSToVkfTSWdt4LiHZ7qZUzkY2TvjvMUNaPuzeEDqsvAKAHj56ZoRgMLiYJEYzUix7ir25jgiijGJ5HNZMFxg4Au",
  "key1": "3FTtwSgv3aPE8zY9R3VEDddAUVqAqYALthxjM2mLCuqmwEZCSrff9PNdpdgZaRqR5CFcpx15ATRebGEHNB1deDhZ",
  "key2": "2EDoSJWWdsYHggicT6pSsX6E1UUUbT96mM1LdVneXTJpJqBkceKMGYETNCJTLbZ7M5iiSSx7YSDzCRXjtVexptme",
  "key3": "5SywQTY2P4GaiUNEdQSKgkToEC1uzwMfEwjbVb4MZd1i8n4BWGDkaKxSA65FV6V3tV9p7iJNKUUthKCM7URgcm8j",
  "key4": "5QWSdaLMFU3q3opauBNqRTegjeQDdYvTP5FqGwgy57sAXWkicGyQw2EiTn6Fv12De6c8EGrivvVwWynfJ5TM4MFy",
  "key5": "41KbUUhPAgwPvAkPsnD7P2vzV1XvjGtGWe37fLy1Tb7o36a7ua1NxemeTPSF7ARQrAwjxfen81nAApev1VcxvQrj",
  "key6": "Mvdr6fT8F41gEtGLAoS3kL9SZvE2TEwwfyVgLBceUy5P3wR5RJ5g8hXR7ewfpZGUAqVznadbeZWF5tsC9Wzp6RV",
  "key7": "5h9uefE7mwevyr8ksGxFkcuviYQJCvxEXKSL7HGxh9zNxUaY2JHmEYvGqpYinSRqGj5Hmpyi3DvSCgb8EW26GpDM",
  "key8": "4ka4zvU7arRWyERy1ENoQpdVMQ9XbBGx9Cn336KSwo5Jc3jMHGSioTVcRtkjqSCcrw72sVn5M55p4X5dcK9qdX5z",
  "key9": "2TtxAbfH5i4hEenobHqJsNdBZLb7i26kKAYJpyzrx5G7nNY4d1JXrWYSXWjNeYsGUK2fZtUvJpS5M5zKWyVpTGki",
  "key10": "BqAhNSNkoD1Cic9mVJW1TTWhgjsGDQ5oBpXwwZVUCkMfwRxervVVisLYq72cu3JXnJX1q1fSQ1uGCRtn3ftA39A",
  "key11": "35q5YhR98StctrDE6BRksLe1oQ6fe3YEwqapxu2mwTaqtSaHetAGNLjP4ag44bRFCNrMVx24cqtqrtMtmgf6Mg9k",
  "key12": "5gJee5bucaohRgbGNoChr4vg6awHyGEF21WckjjuzUcUMQ5jJPt6PxUkQbvqaaigVsTiGWR743PRG19KNxjkdheL",
  "key13": "5hq1D2MmsBVBpe3bfEv9kYvhiZvAeZa94DTtYFamwGbTYPdCSS1oLuqBa3RaR7q3wKgLs1oRVpk3K2aKwTjsWMuM",
  "key14": "5bYgj29FR5Hz8LHjDL6YNFuwzb9gZpwdVWBDFXPpUURUis8V1YYYFv8JDzCN3toUhqvRjyZhAbokYcX785FD1bru",
  "key15": "56gd2MB7qV5KvgQyZitTQF5BvJCP7GRsXzh2Zii8Pmqr6U48LEjQreSp3RiLnoq8pFxLA3WPmvRiW6u7kF9q3dpg",
  "key16": "n8ZCtrji4dd38vHnewRA9LpZXcvFH4vykUpZqq5ExDghsAcKHDQcuAnqoy4HHGD2FWsvjgX92RBXircemhh2jPZ",
  "key17": "S8dXP9NWqPT4CQTG6r4paXSzNx1pX54pjaQeXLaW2hdzn8mihzZc2fdWhHvKB7eW4YAjVa1N1jtJocbwn8grx9x",
  "key18": "2S4W7BbftTc5Soa7qWZUCukmCcpsR72sazEbpkEjgDRPPhq1M6rqDMj77pMpCikkDSe7q2FwLVwtqTySAs6NZLzS",
  "key19": "2KCnJsrQL2SU6CufSMGt3MjT7bHFmuD45KHbD5jvxi3mzUbmwb7yQMt1eBY2WM8C7XrAhzbgv2Vn2hctLPeSwMre",
  "key20": "G1EDvbtd4n3rHyVdyD7RXXEBp2oYbz4DvCHVkNjJ9Fe9yEYQtprhNDX4KgyznB1hoJnMEMMRqVZAnDwAvqbFyWn",
  "key21": "65vGqzXQV5CuPCf3uM5yVgh7GdQJg2FFzPLZYwDuTW5YwHM6Ku1ztFxFNCQdbbi5dfJQhXphNGMLthGXJHi8wpFe",
  "key22": "3Wh3Aje3JvT3gAb1BP868aEEoDthM9S8TsWS9XmpsVnNxuitpscR3f2iU3hMn772EbC8wbfwSBKicxkyUjfY1Nxa",
  "key23": "5EMGBGa8Hx1w4gJMnWrLGC7gMVWP1dyUgWQeMAMZJRSN9xiFmBQBSquHptzH3zSx8UZB5fRbMhrVWPAp6a5qTkJ7",
  "key24": "3XNgcX4y6bjwQmiLuHTfveQ8rzFF9BUe1fj8nwRNMG3m9LbksWQavqSjjiiRYNG3iQYo1xCnmLGx8yMzXeXsVVri",
  "key25": "UYyCHDN5k9MyJz8thi5TkqmUMZCS2PTPVjzp22mwAmKj4sEYGHVrqNntzoikzizSSj1vYvoc221H6cr4gU49iqm",
  "key26": "YgLSbZjZofrqMJo5gVqnqEecsSRnabMWrQ6XSMMwarEifpDKXqaVPzU9uxPzrRxRdLMyfMTcLVMmiG29v5vU5jR",
  "key27": "3wc3uSdCZkT4tV14Td77jEdqbvfC4rjrLKyaQQSeZU531FGjXM2h9MPKX23oxzvMtw1fvw3R6nXGkE3ww2N6fH7j",
  "key28": "3fUSbRQgEs84QxHBhcsVdUedgCntsfqfNX5jQz7bwtz2XAjMH6n2Ji4a7tDuuS6fVdwHTC7Dnd2686TjVBSBNF4v",
  "key29": "4hSt6R3Pm8HnF2DvSji4YzkeUV8HG1VpG6cPZB9HkKgNj7Y5VxxyLRdDXBdaRf95DPQFxDTpH28sMsLqwQf26Fa6",
  "key30": "41JWpSTnxx7RfKXAnrfC8tUKnRLi6HWJTYVV78aQnfG69ySfRgsRfXigsb13Xrqiruvv9YBojd7LhVAEL3Kbxsci",
  "key31": "tzoim2axhxUUUDLESvscsrhaMLMoK3kbvHEf24meVAn6pRdyGiokLSWRS5r9F6xTZKk6JAVNEKHYpL87Q56EMmU",
  "key32": "2XidGyFCVGP1cD5H85JTGUkGWYsnFviMhZezBqYWtaf1BxvBExmsTHA2dQ6YXSMtMRgr1o6DFiic5CaMsVKbRETG",
  "key33": "3D5ufxRF7vr8Q9yTAe9S2Bs4h5MS4f6nRLGAhShXLhCF8dZGPiXG3ffhEK5zCNgmkCBQojiGGuEtjbYDAKxCXk3G",
  "key34": "3Lt3SCb1SH8DKvNNN1i5q57PKQZhDbjBMY4tmphrJ2r7JioSK7NEwL7xL6XFP1LcKE7LeHgPGBHAJn2xiZxE3TKJ",
  "key35": "3orgCNPJckH68v7qAbVLVWkFAZKJs96wvWHX9S9rpyofAogfkWxso84cE4vhCso2nvYu9J9kAHsjFBgnEKJGqiZo",
  "key36": "5gqt4M6nSUr5nhFcpZU6qS5v7LpSVCPpy1dUExw5vTnvp4dBX7BP63PVi9ALAPB6WGYDunTAQ2J5RRmB3oQniFnC",
  "key37": "3kLasX9CTtSzNBosTXjKDhmZE6HxsDGm6V2NdGTCVTnwJQhzQDuCoCJBqQ2y8ijT8G4SyKTsf27Q2mxwqujSWjAV",
  "key38": "2S8VcepY345SkzBauUq1Lbq2b83TDNB1NjYCybbynchBcWjTxhqD9jP5KbAmdatNKkVeu4DcpJ4xn2rsXsq8jmjy",
  "key39": "4AeM1Me6LDPKY9swbQzJchyLwbkzViHuf6mW33QbjvZYxchkAeEFsrZzpkjvFZ3uX6EwJgK6SpzbXDY5LzK6gVBu",
  "key40": "5YSS2kW4xyMnqhSzLYG2bXhC48VdsBMqLjETFehKsGy3MLpz5dig58EPz3eYvauC4Nsmcxzh3TqNRcmp3Fxz6RxJ",
  "key41": "3Jso9QrU43pJL4Pqr1KeMr4MDBKTmgr6sVG66EVEnZJ5oJBf4f5hZ9MTwrTd7ZPUG9hB2ivfy1dnpvGAJPWWMKAr",
  "key42": "4BrbpZNyLU9JYrhHT4AWB6VrJ8ibwuW36TNecYgzA9r5SYDxQQgXwFzaXe3ehkvmCcLVqDkmHEdRkwsWeZoJHiTM",
  "key43": "MDWP3iLusdQsw6dFfozWYefC1E3ZX9eAkW5qU5VcRoZdrKZr2ozKV4iAntjBMrQG4zkRXc9A3kf54c3scWJk5Hr",
  "key44": "491EjS6Nazmjn7Ygs2dvfxn3zudQgYXzyX9vZG3LjSzxTA1ZdyTVLhA18RRHCBfkTG39w9LzK9MNSYf5oNTjfURX",
  "key45": "4vM4F1KsP63PJELzaid77qX2P6X9CcEnUBkNpzgj17T4sdugvt5E57jyJUpDKZD6epDYpZbccPXudydqshWHnWK8",
  "key46": "4fvUCf3zesRF6LdMxdB8UXCikhPjajUN18Z2zdiSM7hnsk1pfEbk8xw8qNxxLFjg9ofjnjvB68T1gr4Fc66oPLGT",
  "key47": "47uTCSUzzBqj719rhzqpavHEfrZwxtjMuXtVtnd9vE3hHNudchig93RiLTdNiRDkwZG9vVj8d2sc7hcKAwqWgah8",
  "key48": "5X8sS9ZRB2B43yx7hYLncZ7ikkpDsfT8eCj3hTwKujKFVHgUKpXuQitbMmN5NaedjudNgtg7eAQnYrwxE2SKPqNy"
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
