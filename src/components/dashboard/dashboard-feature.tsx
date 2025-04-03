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
    "W71MypUN44KQH4XT9oZVQeBN4C1KPPFf3Z5shWtwmcgwcYr6wbGVsUpTtVk12un7U9khJrUP2mDAJGcuec5JrM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sNhXWUDU77QJ3xdewiYcFjeyG2dVR1vFFFJNx1AmPkjuxjYZsMFd6iSyEMQQa9ML9MrgJWgb4GP1on7ju8W89S",
  "key1": "53ayoo4vMZt6fvZ6nhigtpnz4H2BypRHAdJCx6cK2hWKA4TyMvJwwkGAZuvfZqRHGipyc7E6PYXS4neUXEHZz3VQ",
  "key2": "ER43ak7iwREqXEp6QjmLVs453ZazsJSMk673jiZEwJV2f7rZx5xDwSZaayZDZpfKMgZNGnrcCMiQcc1bCBKmXCJ",
  "key3": "2QyNBzCRjRWySha6dowVRgVbvHnysysNQQjLhHB7o6cdGHsbEMVEtm7TSnWzTg65aEW5T5EgEobCNaay4yFbKs2M",
  "key4": "3vLuiSoGKF4zCSwehDpyYKJwbmJrkbVR43Awwb7g2etkHhgyAKEK7HtkoeofT38mMHHAgyi7uxuVzqYrD5NWrxEC",
  "key5": "wqzCCPKU91BMnTy5cWSed8WLGegnR5LPUu1Y99nY5A3Nt8VLJofN5jGXLh3s2XE4a6AJhvuJPagsTjXxzhhhqcW",
  "key6": "5gedErUTaV2Pbg7ibgscj2SScuGmKjgirjViCKPcUJHNJ1G3XN2wBTYr2F6NC1af2mtatYqWoc8UQKHyDY9VaJ5f",
  "key7": "QihcLkLXtnQCwPiRgmRnG6uBLoKhc5QSdQXT5izQg7xq6xAhCYa7djZkJ2R3aV6MFEiSAJ98YhGuuDfXB22zVNt",
  "key8": "k6mE4YGsfKgEeYbhz8xqHufhtz8QoZZNp2PkAs22Q6WwjjXbKcm5RDLrXHHHj2QxPFTsCGN9bjEad1bdqDZjjZX",
  "key9": "42ojuPgUew57KYRtj7xWFzcoXenfhnhuoND4DJwVTXUzJD6yzm6JDbdui4HpP1tS9Mkdc5M8DS2FbNEdBf776bj2",
  "key10": "4SG5Jm3Q7KMHfsNvvuRwJJLNJEiHPZGTp6ptkQ4xVMeB6zm4h372o51kL6Lt8WpNukANFrgCKPDSSx5VuBEaY7st",
  "key11": "5NM7XkzUJqRawjKvVW473gHQrXkc2NZhj1Nf9mNVxLLtkHCZqrPg18NNpq8efMPsytaSxCv2svKpQSDnDc7bbr8V",
  "key12": "eSnjoTvJMDPVuuSVk5cJuH171SqtyV84Uajeo4uQDFXtH1UFzaMjpyDNCJsXCJXDSty8QfmMN8AqX69RdHZrtcU",
  "key13": "2rpZRQW4KrDZEejXBvo7GAKAWY9XshpM2L8Ws2rEpCuN5aWoR6yGs1pkHdjUp5ucegyKBgdTCEVXv5XEoHDHSy3B",
  "key14": "sW97rjUR3qQ38QxZhbC3gkmXTBdhrbm5NWvFh3WqQ6RhNaH4kZbwjsXmtEyZR3Zuq8uKNWQNzciPsaz3JZdZroL",
  "key15": "3Psh21FSkYDTYBwrercCddDvqDFCzQj97fg6XNobbNBNGnSZ1Gwd9nAGrByUqemmHZKTJ5DRMHPRHbgf2tT9cfxm",
  "key16": "2oR5Pxmku1j15xRvXg3adDzGoiZxBh7QEqDbxFdNQafWXRATeVaLt1AUfhR1GPxYEZjLk7HpKYtDBm1iqonKAE1k",
  "key17": "53uWYaj4nA3uZzVGS7gEfvph8q5xBmRNsk9SdSse44tAYavXKjH1gCiHmEnL7tp3dikg3SsGqVYaBmbigP5jztCD",
  "key18": "4CFoPE9YbhbsYJXVGhdaML4bWdd3gXoMAKPacFr96SXs1pZ2iRtecm9YArJyWFVteDRpmgSrPbXSjc9KqzJeShmk",
  "key19": "2FT2rJtTwXczKfHzXx4ycavktjY4TyCT2EYoi6RZbAaUqxJrgxk3hxEkpBw7TKEBm1VUTFQLKrLcRt9i6e4n34pE",
  "key20": "59skmStSWe2b3Yy92gYkGsNveH4M1iNW7R2MxNU46uASB14gSwTX6PsZXR8MG4jrNCcryJvbiMsfVGLdbUWVpuiU",
  "key21": "2sQh2FBNqyPbZbhragp8DS3tuPan8aguDdLhBpCfjtg2EsZsvmQY3gTanXnSHM6qqNVtVRgGY7dw9kdTUgDkXtcq",
  "key22": "2wEAroHBorcWdDaLhqsKFbe8As3kYVDfgT7pRy5Y8e46mURdUfM6gC17D2ucyxuU2zxfbsNYsW7TL1LuVDgYvcfa",
  "key23": "5B4hwuRnCfqrCYHy8HZhiUza178iFjENuUhQdVpF64JaQYNNJ3RcCzdv8ejXs9UYUCYym2dSCxfqSMriGWVkP1uq",
  "key24": "5eTH4gDc7roYRHSq2dim6sx68yEqsMHqX9vdZmsB2Zs4jz4jUH3j79Nsb1NtCUwSWybrrLoCZ5u1dU3gQYd8VE3X",
  "key25": "mkedmU56qKeq1bkaNvWyaJsSuSjPP2C8NoSc31FcJfLS2BYNMri1RvgRftWqix2UcKoqqv6CeDcw4tB55oZjsLU",
  "key26": "55cTLwtVsSyAi8XEVdktKBig8PUdZWsWpc29LzV7pGcNaGXRgutFES55SP2VSTtJX1YFB8XMBsb8XkrAhNMRv9p",
  "key27": "3r4t9WZxqpdKYn9cgcuBrnsBvPyse3T4vyLxuD3DJFMtjgPXV2qDY9Q2hqDRikvavcrL4WrrY3R5jpPTJ37aqUBd",
  "key28": "HQNzWZ5bYQmCJG4kwHnqJFEvnZ8W1YyvsX9VxQHNC8e5jmXU1bXnR7KFjUAQxNBHRmN9fM9BpwyKrrmMhpYUbsm",
  "key29": "2xTexBwALcQ77xY2TkouauP3bSLVnU5xzaBAVVBoraN7cuTX163cPwoQoLu4bVMMPjxbvjcdoFpyRJN2T4c2Lcz4",
  "key30": "g2n7rmoqkmCtkTuwzaVUsjUhWdX5wCv4riSW2djWs9XgYoZBWWhNaPjpcBjRqWvMnvgPvrX6G9jVbzLJm6SeFMa",
  "key31": "we5xjpuRQJW7QapoDTovwPkF4X17rNqHbdpBMc959hDMRMPrYz1U83pM54tuNgyc1J7J1e2gqejhkxqhBQ3h6Gx",
  "key32": "673aJCJsEuiMFsE3K3Fq2tnda1oSHAZSjK6CVBbuLcCe6PX229MCgj3RKBt4RC42qmWt9d7kCqYLtVcuAAJbpBFY",
  "key33": "4RmLBkgSZB5L6z3anW3wiJ6TmsBie5jiB6E9Eee2PuNHSUoLSJxqCiaEy7FGEiD6ZC61JHfetKqM1wf1CBZFFzty",
  "key34": "3RKsDeey2tpTjsiiyQEk7V8M4AyS3wQLrWX2KhTTpt6vhLHj7dPAAFJQWFLm8hYdVbDmE2wkyDnY7vjuLELFCa6w",
  "key35": "GPe6YPzBfducit9ZwZsdfeFP7xyFjQFydDimVc3xPgzVuJbb8fiWUPfSRYohEvSs2Riyq7rK1w87K1WHvTr7LMe",
  "key36": "5rvNRYNFdwggtYNUPbVyrQk9kWrcMeK6RdUz9RwxYpYh8ecRF1LTNb2CpY94WzSqrt3RLMproEGhRCGk2LLnPhHx",
  "key37": "UJsJ817DYmtHSEwRjnPNV3LjsixmzwGEC7z8uCrY8EdLFAzjNg1itxZBc3z493dj5GYAarDHdA9euvdLt75KoXD",
  "key38": "2E4vUNP6NsPfhBZGhXGSohGp2pUsnZbQZGr84FdmU3Meea4iFdNyKtDHLFgR3pZgicZt1E4A9oZ1da7KxHPVkKXP",
  "key39": "5UXCduvdAFVpa2Zcu1MCoZBU7PHCHBKgwvNjGoK9CAXeuTvaYddw9xifSdSmAu8edBPgmKnuifkSzRNZhmbXbd9d",
  "key40": "2x2NgorSFQPUNwtRC3UJBoQqB1a7LJsNRZU4J7a3tXpwfZfvkqCQ6Xgvb5KVt9zQdBJzC6eY5GzdBAkBz8ribhJj",
  "key41": "e12cjxPyRtq5bF4sbdaeerxGcaev7xxNs6wudj7TnP5XkK6u7TqXovsX3KNpPvDk3fP3C9GzSvwoDjTMWqorDCs",
  "key42": "4vaXV1WoTv1UaCSXTahbjNcLVz6nQHoQbnwqkkmsCGzcrhcwUAHhX2AZhPEEV8sjRznwx42ikwhMPeRh9a6qCPED",
  "key43": "4HLpEu47H5A6RUQ5h3ioNzMmJCiUDrGsZrXQLgWDZz4Vc8HF7eKgQ6ePaih9J1Awtn4WzbKJ38N3wQG3HDsKRjTU",
  "key44": "vRHaUwUdTKy7KN3CxuHmMa4te96nE7AYmagShLg9NWiz3XHLe8sd1WSpnAgrJC4yVECUPfFzt7AbuCakjrUsU9s",
  "key45": "4oPySLKYxQPHP6RXnJJXnqmySifwzd9zgpcEMhEdu6A2yYnZpbH1WXTvHA3JQj8mKji4PFCesEgxSRikxxQ6838y",
  "key46": "38iYSQMNQ6zqqSCRDoJ23uSgcysAJHCsJuBUWPePaS85hyyq9P9kg4UrJeu17rPoqD3rqQowkZSuNEERDwMrEX5q"
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
