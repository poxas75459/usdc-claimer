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
    "4kLh9VfGgfc4JtGRpmydfLPtz4XFWJquNjmeKorgxapp4eRwjmii9eksaJuTfzfhRTnNy4DPpB7Ws2SoJ3opYwf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnJvWAtk9dmRUfdnbcc7tm9HspSD9CDrMqmhS14BMZqyMSW9apQXsapYSJuwFWbJKJmGr8bGTXsHiF2RpHgJeXv",
  "key1": "4Buegz5eF9P4bk94TvXEbP7Ct6DrwD9eievk1yb3pHNJXS753sD54FjbyCju7krYcRrkDafpLY3Wyat59ziVewSy",
  "key2": "3jjKFPhYWcs3a6Reo9kCCRPxv5zESxRvAcpeWsQbo5M1YVHy1QgpoL2Pf7ZgQVvszBZbEB53UmgbEA8LVbrkcVM4",
  "key3": "2FcHPV9cYkf9bxEZ9AuYhJhhuj45YytJiemNC7kdx87DgdEBTXP8nP14hAaRjzZHr8ui8i7VK3pxeS5z1ZTBYHJV",
  "key4": "hMVxbNAcqK66PekJvm6soHsjFWuKeJsgRUvTqMcM5C33MPaQoJPJeEs33it5jsXZmR1TgJSBL65SPoARJS3v4Dt",
  "key5": "2UQf8oLGADNm6C2rBUZPJD9kb3Tps8udDGgFSVfogpuDGb1uWNoBnkoaiykZtd23CSxj92KwMoZ2BUN2h8pXbyug",
  "key6": "ZusXPtMBC8eRQmiMoPaiEXgZz96QqA6RRwunydnJBN6W2RXNvtKy7BQbtsHX37AmNfar1h9j7FMXmceiXUs8kvv",
  "key7": "2oeDKTmfDDPdG9bgg9xFQyg2L552W9WeiJFtf9sRDfBXJWVexxRHcpobKhsvzpmgbASQZeikxg4gCepJ33KNpiS4",
  "key8": "3DoXRztKgkWNxiLv7wcD73sVnZBV8gEjP3EGwmPHeYRUTYupDp2XAxQiYCak82MT2WRA49jKv88hMopQCpBprywp",
  "key9": "97NfT5f71yddKYxciXBDR3i9XPxLZ9F7XFPV7GLoCvbFC46kM1D3s96jGqjAYa3JBfr8z3UBsRYW8iBcFyajR9T",
  "key10": "4rFrTe8xj54U8VXygif4jVdqGPpabhbyMuz6goEdec9LVdVT8KMXrZ3mdwVNGLaRW8o2njmrh1xsjdZhPvRAVbQa",
  "key11": "2wrxwbvaQMrNB4d5GAxwuyAYRjxyeQMddu85WW6kWUqxUhqVkHNfv7MXibmK87HQXNNQM8cX5SeyF8a1SBHjyXyq",
  "key12": "3eMPK79YBTotBS369JnCmgikEMYAZZ9uxSvmDnAynArNqpC3DrXUBonCdvYCbWnc8DsDtUfH6f1hNNBiNm5pyzQM",
  "key13": "aUf3Hbf3qNxozJBYD5PE6jgpgkhMdcTCZhgQji3ZjPdZvrCcGZQaHwK3BMZhZQuL1KRC6wZamNBMthFRDptfNnV",
  "key14": "5PZtuEjB8LQrttWDmDrCYByzMvUNq58fSAodW6vFvLRyGqQstRrHeApRKQMTz4d6T9WGaJsP3YuKkXjVSGJiEupf",
  "key15": "5fWVTm8ryKGj8xtZbkh4DyAL58BicivzXAFJuFf1mWMJpHyYhwqcqgYtJEr7AeZcGUWBWeucJJbanKgBzNcU1ePv",
  "key16": "3UrLHTmFER7fJmuuYSKLVrm6eCTRWdtn2Nj5T6dd4mEiYPLtRtgxFmMAvW1E9hz9MtYChhWcHZAWjcwQM4PLeiyS",
  "key17": "RABNwdmwy7EGGXJPGtQ9ZWvjvZ2SYv6NABGniDMzYm49DCRwAJ9DXXtPvxAqgTfBcvBZwisZE8zpM6fPmRz8hBD",
  "key18": "3Nr1AQHMFr2e6bLdVfufwLycLbq6kaaMVjX4Xg9T1MCtqPuNpN96JYsqVCmmyHiuJnTCemEh9rpQAvXtakxPgATC",
  "key19": "z9EcyfgaQro9cNFuhqa5RfpC9Xzyin75rupHHhCWyWRfMLtYxBByH2HW8dqzoJiRDYeRw8ETYJEWwN155xmWUj6",
  "key20": "FynQ7pqom2vfWfwuLVoQsiiJsFxF7YbPMUpqJoz2rCcYVRqqseBUPLqCdBBB6HBmEP4jQrN5vSfZ6tWxzspv9aj",
  "key21": "3xTWQLk1Hx32AJDqTQuYZ149jNFAktNg25Afbcv1Q8BvzNcQpKMQM3gQBRHefX7u2NQejbrvSumkAxTxK4d29S2u",
  "key22": "5mxNKiZsHGVxH5KFx6QUQja7ah7U3BdY1ygqhGXjxrBofFY36kpi3BECWtRVj8mHhzMgUa7TDCZSXhqpHbcuBzpo",
  "key23": "4NGKd4vBSKezmsCuKyS3UaYdttUuu6xoZKj8THAFq5eEhZAnXgasC2tsxmR7Hzefc315V1Lz3aFtFpGtQ8k3UwYW",
  "key24": "2Ur1mYi4EeGkh6P7GzZyoHy98PjDvRitProa6WQNKSF3Ax2RSsPJEWZoxkeYgEXoM3gYGErXUckAaLDAUDMU5WRM",
  "key25": "3YeGztvkPspSccto1yJr5UgoJ4gPBEF4Gid6h6moeeTKvfQ5CuVmxHkns22KzEo5QmyhGEvhi2zDEUZ73egnJLZk",
  "key26": "5HDiUifU269P5bMUK27HprnHsc5aTJDEaDDpXK96P3HhiZ5xuFCwmkqXyy2WTuXs6z2avxY5T4KKkGEDLjiAY6V7",
  "key27": "3PgfkxnSjRCrwzThXzerznFpKcP4ttqEJ5xgMtpWqi3HFMcJwdVHmwfuC8cpGCenEKd4UuPmJsbnTCNcXNYe7w4x",
  "key28": "37VCXRrcEX6dVeRBw78vqu3iV2LrLx1n228Srivai39myFeVKAqxLNXzjz2TzdtwQS4sEyyYBay1Ga2GcWCNH87k",
  "key29": "3X3tY6zQBGadtH8U1yyFpigYGaCPmeKe3aUATr1uXowxMQ4qvk6ep7J3tDtBnsMeBw7ziSavy9Pkt4mtreu9Vns8",
  "key30": "4bHZGmycNFHuJZCkCHY1AcM62vNb8U1Z7FaaW1fKTp5dME8EnBHt55KaK9D4pVKpfEtpDcRGGVwLZDXkbZ2ozNBo",
  "key31": "4XUL7NpcAxy6HiAmKJ3itgEhNDQsKz4MBRbxwDrk2YMhq4RpJsw1RE5XJJLuvNo9XzSAQcnkmTueJL68uJtmErDj",
  "key32": "37cKywyBdB9psjLSv4TMhjeRtnsBBTSTcBKNjQK18yEhzUhU2rvXKmqAgX5XqJQ66ixi4f82sQduz1MbuZkcZTh",
  "key33": "3iRXP12mqd9zoSYTbXA6iBeMCchRn3dpnvUnwYgR5c856Hf2boDCrjPpNbyRfnVA36w1TQWwLZ9L8z5n3VDWGg8M",
  "key34": "4acRmcDj9hZMWD3VEJp9vqAQS4dXqkwdCwwYfGbopnwARwVhAw8YC2MHaqTAELQ3MKVdJVrZpNc2w3vjvey87BYf",
  "key35": "2v4hovG4dqCE5utQn9dqWt78pL8TSmC8nv3LjWWNCENLwHRpJKabK5XP2szXKXWVBLsVNh6LTBwPwTdXF2ahZXdZ",
  "key36": "2iFYWcN2yGoFA5aQucP2M49tx6y8v1h1qqzNEihEku1QPECvxSxd9CMessp98ZVDFCbgpL3g5Lkv84Pb1diDz85t",
  "key37": "4xt1cXmd5QrQhRtyMytAcxD3rBrYJana4yKoSnVAm5rFmyTPU6fNePxUbDQfFeCXaFdN8EGdxtLYjPA4LD8UmMdn",
  "key38": "cqW83vtik827b6YUT7C1hkYgNeGj65aP24WcREW7Z4TzHZG1SSudEWMVK23g1wisLXPf72fwURsZxeJUNRvykUS",
  "key39": "5KWNRY4z525dyPZQtE3cLv2bJ67mXy4DFVGM5kRdNdY4MvUZbujrL9bNqfhnVT4ABXXuJqaNFCPm7SkvrVoRKNNX",
  "key40": "4AorRHRczdxWS9hq5WmTsKbUw2nggyp4tahQ78wEg7XUoKJQtUDzPkyro7Ad66pX9prmRxts6Ya6Zi64Pu21yZC",
  "key41": "36UwKuaWDDrp8dtRQMyFoqMZYXY9YX3xQ3PYyZpTwwQCiqGqVogDqVQ92hX9P6t2kfPiR4LhLnYhqgNDtDnoq4Aw",
  "key42": "2ZfukWxWNb2gDV3byKtpRq5uYFYjrdSLkkRuZc1Pog2wsq5mZgvrzDca36eYzDx43kLBRcdVsLLnwdKEBf8Xz1zo",
  "key43": "2QX2GX6kzeWZjvHm1TV4dQMYUGxWf1QvsRFV4KXg1zy3kD1eBYp99Fzs7mWufBXMFh2Ek3C5XDSnij6dzNcbvZzT",
  "key44": "3mgX4h4TuEUUkthLGZRX2Ad9nrRt4qZh9gmneBKrF54NGKuLkon7bir4ubFn3WL9RRPXmCp2SpQjd84QEcNyAJvV",
  "key45": "4gcgCZBBrMfAYz8GJoyswMy6XJ4NWwPBz2FM5tzADFeHUuzZvE9jHewumXW7jG1pZBLgSvK7qxjMJmXqa7KZe3Be"
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
