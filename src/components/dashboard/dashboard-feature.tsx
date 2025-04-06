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
    "5EPHBC8kUCWWXgMYJKPGZ3F2gdZxK8MTmWvPzoAfAG2qkSU5aQFNZMzSNPcEXET2mSrCU38DNe3eTczaUXzyjEb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEXL8dgv766p3Qk1yGEqBP78Jx5f168bvH3dwDQNpaLn5Z7HnfeD1n7Gi4wgHL1p3pTFLaKWacZgvxiy4rM99Z5",
  "key1": "3P6DJKN7zTmm48DTEKYNjAvNdehfZ7gmAQG5VgMn3dGyjoA3vzLZCNKGJx2tgB8LsLBWhyWLcuP5Yw2KQSv2TKuF",
  "key2": "3NwMYgbTTuVStei1s9WHCFC8z6zrotaQiTsbyYSiuBgnUEmTmGNTQSZefo4W78wumzRHSTxHDCHeSFopncs3TYPF",
  "key3": "5mv3ysq9v8ktqfLqiqCmdddHWAhtjxx4NX2kRUyRXGZrcryhqqRfwNSE352nZffKr7HoHMr7J8sWLAhRB5Tx6Thk",
  "key4": "2x8AGTT6pnXuf7du3xFafSCX7n2DBVek4uFvA2SyJVzGbKMVu1eGSYXkskj3JZ4117WMDXkwcpa5cAAqypiU5x9d",
  "key5": "22AjkaiiutEgczzzzP6dLHzpgj8SQMGzMbjGdSs6JvXKHvNSsoKBYnre9zra169ZLadLgiSSPmkuBb2a4d4gqciT",
  "key6": "3CuPgXLqhky4ktJxakbibWrWH1LwfyMkjsj6pdaUcNBAQJqshycrK3bNNdS1MH7GMnZXBRUrEzaZGsFGNvVkDeaQ",
  "key7": "632v3NemLPd8RZ4CrHJw84DL5ixab9163sLCmKDgRjzopgX3SPsRuU3gg8yJfzEj46Nr1XwVcwYpN7A46EHerqVH",
  "key8": "5mxX68tMz3EduRZcD231NK4LgKKKoD53AQCLZiKXhvLpivPzUbmxf8eHiEY6E18MkJ2gNZXBbjCC7aZM8fcoTEW8",
  "key9": "28WZY3jYr9fcjQTYkdhNXz7RE8AseMQ2NQWYMJVcemy1EQ9PpGsYHAC1QJ7PDGdGGTTTVFJARGsu3YuKFkRiHAfe",
  "key10": "4XMhk3YUtqphLVwitpMokh67CgAZAvJMbyhxiUzVC9X2pz2X7D77hgFNyVitFQtwH8r5RWyerstehvYKuL814xaY",
  "key11": "5Vc1H4b4vrW2j9o5pghoWJNADyvVutywkn3zZM6e8U9vKdYoL9NQALZQL2D5q58hqB3W2UmhmW7MWCSY8Q1ZSThZ",
  "key12": "4zvFHB4zrVhKUGpPrQPUxwsTVwTTWaN8PFkV1RMB9WMPskWpedf8TxSzDU8mCwT4LcKUj3pWxhNZeAt2yuQeMAQL",
  "key13": "59KdUnfDiwBh5zGLcZRcEStxmUR3E4hWgaRXSdj88cGULhGXYKRiz3CUjMNYN47GP6mEeB24n1Px1MNPXoSMyHFm",
  "key14": "25dcEqyBRKnoRbXEuE4Af4QejqnNgaajVyACUmKp6rieQt3iocSUNWtSL3WpN64CeyrQam42gNSJcWBw8wf3ETXs",
  "key15": "5o1tR5X36P6Q9C2CS2y4Zw2gTM1xMwyoBjy36W8FKvSmrfmvBjWq8HEXq4XRYfrsuYXUsqfPJgLJcw1FxUv3VSk9",
  "key16": "fbxgZVGjE294gw4EskTZfg4VM4rM63dkaQcsiFuA5TfTEFpDFWXtPDb2im6TkXTkEFMQmwjHAgnMS6yyCnhkive",
  "key17": "4wAfLMPrRFDPagcmznKYqMTXv6BTxmuqvqqqPY1WcMqYuDTSinyDxsvCNzszn4Nd26MaNmirDrjrGjaBVJGg1DMB",
  "key18": "GriimqKcx7drNzmtYDafKJ4Fwhc5pw1HuasjXbtVQVdmPP7dCeukiLoWA4qWKK7oQ2CUHM3RpREfKNcBNu1UKF7",
  "key19": "58D4ys2ccu1vq6ty9p7mryFsgPABC2oNuanMmeZzeFuHshziE3VsN7TJp4FLFDiPCSHpySCjaxALxwHtZiUBZEH",
  "key20": "5XcXQ7UimnerYqQ8jtExYNDVt1MYayHnqUozFotNGA7M9SXtRLLrKYLH7g8rUpz7fT1DevoJAr71Bwr1n3CCqhXs",
  "key21": "WZNNTTWVBguj7ev7a6cxUQ6pGF3BJ8q2NivHbLr6UBbJ7vi2GJMtCsjhdXREXfGkjJ1FibWH3Ar5xbERvYE6Ahf",
  "key22": "5UTHzMrmyTxJu4L1VneNZotsKUzprDwyyGtrHR2sRMiTwfD39rZu5hFmJAaPjrxnxkHFXdbX5phGWd5gdr8ZLz1C",
  "key23": "5DoYUonLcxqRpJAZ69GGMcahQ26rPFmmpXNw2CqacPgFXPQ1Rp8tA36pyhiSFYEtZ8C9wDQaLcJSkc7YprnBDZcQ",
  "key24": "5u85zrNjFRABN1tT1p79FJAFNK88HB6AuMdi9AGuHWtHvZgZk4L2JT747CHawM69HyAE8kNn8X4Kg1kC7VHTx7m8",
  "key25": "5BMkuwK5RhbBmfsE4TWWWjXVEGUcYT9MFvCCxPo2ZbWBU5hY5CyfJY7N13CBpekdUk52efCaayovKviT62RiSv8e",
  "key26": "3traqVvZyBH31YC4R4Hy8KgMfGqvqpqLba8u4kLLCdRPwyCop4Toby738cgQSBv26PK1BsKZUMdFf26dxNAz39QF",
  "key27": "eSvdi7fhc1k7Jukb5xXYZbGoP2WCS2kWwW5PJUCPeay9ekGfy3TjCoQ2MEEPqZJ7wrpbK4kGFtYN6kkHHbsyNJZ",
  "key28": "4XpNhFxZUaxUpzpGxs4rxqusW9QQLPTNnRPdeZwCBLkuS9FiNuhP3RfhSEgQhsSNUhwVX6LeapRG5pj3RMRRgz8U",
  "key29": "2X5CnXMJN4wiLhbFLhA5Fq9xj7rKGQbkwCHAgMJaPdJQj5NicbzP9JCdXJjne3xRfebJ4TYbFXBTGzhkGNzCuQXV",
  "key30": "2WTwxqX648gr8CBRk1rroH66yhJqQgRkRVwAdSi314nj3HknqN32McuKCizHSpnjgNPHgynTwnRTWX6aKgA2qW6",
  "key31": "53SkyNfRsDCada6TK3V2i3SRyqSF3aniapHhq32bPS24iWfsVHJsmTb5nWaw64EqZXx9wdrbFCfq8n5KRkqDMhP4",
  "key32": "3kqFpNivafy5nhNu9eBEntGzNBkLZsEEy3QhNVHQcCfP7q1xSe8zBmYnMzcBzrTJE7dLktwvcobqGaSTx5qtBu4E",
  "key33": "3mdGcSc1CpaqS8tGgfoDMuKASuo4GRQSSFneqUdbFs977Jy1ZWt3gAnbUJyHxLuRfBVTvHUc6e4gTQj4Qb5hmdE7",
  "key34": "ovYrz8sYsKVZa5BktcE1C37xK5Zik8eSYuQRPWUQi2ziRr7S9m1EgkG7mtcPx4k7aCvgDLEvT6gcyFHF4nqedPq",
  "key35": "3sgVGidNJhHkiBJA2serWeda5te9vSPwLwAiPuJRS5MHmDuUvWMxo7UJ4aZQS5Uar9y9VtAL5Wq687ZQ9qe8hPmz",
  "key36": "4qCGt2zZ5WpEruNevEJhPUCZ8omVPvE4CP8tfNVreJky7Cz5h8Dg4HjgvHhxAusj4BzftqHTUdRQot4up8dmMPt3",
  "key37": "2A3qxqhd65Zw9ftmBeMRASyea32kie2HTkg4yVTwB7q2xJFTbkyiE7M961GxK5ZdQ2f2QtfRgk279ARJAbzn893o",
  "key38": "5BNrX7qVwGTyjNSzaJsLdoqEKuTkUr4BA4azKP5ti2Smo8mbbrAEaxxi9N5kLr3832MVJ2TmDXBCV9yrnwYjPeLy",
  "key39": "3n8NKvZ9tngtaWDx28AhMu41o2yLnJ2YziBrQp4hgZd5nEYbCPg4Q32ihRozqmqv69gvZhkFR8vGVb7cNU4NB5Fz",
  "key40": "4utdk7QQzXX8G8fCibyApuGRLmnhYm92PwTfnxpPLkMvbcWN8jQnn3115uoD5qUiDUiHyMYB2wsfYVQYnnEdT1ko"
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
