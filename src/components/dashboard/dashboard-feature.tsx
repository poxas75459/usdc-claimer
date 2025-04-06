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
    "5qN9WM8zZHAva9bri3j7r2qcDA8meFUB2wZEg4RmTkdUg57ACqgXoGWdUX6VZkFEEyshBpkdDGFi1SbRPHMkqkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fgyaryb9U38QdzV4RmK5mjbbuiQHkm3JJ671zPSKREQr6MCdLBLE2fQtKUp6DRdK2REDbi1ENNdFSAxBgQ4gLnW",
  "key1": "28hCTAL6kzJFGFPyH2NxXqzcidUs8UuX5mfYTFgcWkLu2kgo3CjymqnckjSDTVC6QopUZnXZPT1sixVNVyukZ78k",
  "key2": "4ycrc9LFi4g9e4hs9zsU9dN9Es9NCQyxBMjsggqCBu7V8KokC4nS4ugGaCL7R41YquQ4AhfGQstb1hhqXpnMX2h1",
  "key3": "UUa5wHzG9167AbgGe9oQa5BSppNfTKZQ9FRCfipEyBZbjFywCgacw2Aju64UYzGRKxWDD3gnaCbPhrDfGKKxEcV",
  "key4": "38EoyfhdYZVhSVu9AMFjJHWkxz8ERCo5sQUe1QZM3j8DggQfRcXEdjX1eFjg17CWJvPQ3dZcHTMxSWd6u3x53kbp",
  "key5": "2ziGa818f8ByeuM6xfgrDwwf1qf3eSA2vnyTqZZ9qmzrLBXnRgXzAPY26f5XM4TKQVEPyKTekZFPYWcu9GSh4GbE",
  "key6": "4WHjU9C8AUGqiFqTxB15yUAiz9HLKfkiKCd4EB8pY7zVegP14TSsafAwbU7vkymJNY9GQn9NxmQkpvMffdiWfHDX",
  "key7": "24EkaoehrVyvmt8MRtXCjfx5Trbe2h47FM6vR4A8a21gU4y3A3shzKQQ1VFdjUbArp5Uj8dwy5268CMpMXEoD77G",
  "key8": "3NHfoZiRZMfHtPgStpVDYiE1jF1ed44dKhN9tHR5A7gZf7pHfqLXY3TkbxmeJSg6GwuwRDjhDi4R93aSEYnSPWug",
  "key9": "NQH2u5kGTjT4KRKCFg1oQesZ2y8C6itH5jr1dnw7QpQHSiTC4EcPsRTikP5bwsozFFBvPgMUYpRaUk3nv6Px7dF",
  "key10": "2FSb9cjCM9bf132YC5zdoTRDtjwMmdwogHCPFpLJdohXPvcCTuvLPUS7YnvqwsffrmMCi66EoYQ11aX13ZSMcqpN",
  "key11": "trvDMpfLzmpXTot9zTavpcBgvwUN6KWgd9t3KH9g3cKzmauVBeQ7pVfL5jBqczgQgjviYu2dzm1a5L3zpi6uQCy",
  "key12": "2GWkciv53XfCzkMGYeEHLJ5EYeQczdkosqjbhV1PUBfxCjfNB2HLVk6ihgnTaAvf777ArpM2VHvj57xV1r9Q3vxc",
  "key13": "d4Kd16GWhabofACrdzyrjmujfuMZkGAudFUsaiyuLozX6k4Ar8w3aPSPxxHMGH85tmafbuSDwuXQC982gGo1jv5",
  "key14": "46VZcaMKrLr4go8AcYsTyYauSog7KUJpz1koA9dzpCHGSurwZ2SwfFpybjt1k7NzBGPYReRPMYVvR2QY4Tv7ivY",
  "key15": "3TTWCFDDoVozjmRbaVjfyS3RoPz3EiX36iDfCVpV7P8jJmo9s53kvT5zjAPH6GnzZ2mcxY7zZAnCPRfns2LnSvir",
  "key16": "43o6ZuW698kbvKjvN9PuYwd7Mv2ARqqiMe8pfcLoCpib5orPSWUjf4uyKtovJnGZzs7W8z2JYA1Ln7hUX8r7dfwr",
  "key17": "67KdoWFB1NaTYnSMDrC5teUoyNa7E2YYWFLAFjhWXGjaBqEhwdi55JUsF2DMH8xEvm2T4baWAFjX4setjnt2iNyc",
  "key18": "5fP1BsgbStDqEgVesM9o8ZFWRj673ZFGEggzhHUQPYd7vax6kd4smTrj3qJbCm4rszuzZH7HASLdk8o1uSnyQf4e",
  "key19": "23Z5rk2SbXQPoLcE7uPJurZNWG8c97CLLCzzKpgMhjppNjUnJED5RnBBsTngQZnSvV7t77GSDzvgSwDq2VApqAGp",
  "key20": "DaiDyCsghtG9hc8WRycy3KW8yvCshYmZmgZnqhY7v1Wsc3eSKK5LCrDH5JMgknNDG2EQHJh2Y2Du77tiqXtsM6J",
  "key21": "NwbmSLhonkjyXHsVLMooDNNVGQDh9cjoyruKzZYEWSsPgX5gpvRt4y17io7cTVwY438jd4rRDXqKdujsWy5VEii",
  "key22": "3tGV95MkoZGHCAce4Xpd8y69BqaZHhxoSxXiyQYZ1pFA5gReiK1wyNLxzZh972ED7dreZWCSyM2bnEmHUMKRSxi7",
  "key23": "VP5YJeZpuUtzfHKALpsPw2LN9Kjqwz6Aktwge1YgL3TgB3z2DVTu8ya9ngT8rLdYjuZYubAL3e77ReckhPmodQF",
  "key24": "fzG9Wj291b4xhBTfGdJFj2WuBaY81S7b2gKQojcTnyABZ5Psp7zCxuysYKFzfjADDVSiaJdw6B2i66bwUcPTgYx",
  "key25": "3wWWFkmnjvPGbLYp1PxTV1Y3Gm3yPDA4LFfuwEkkUQoLdXqfC8nHztYCw3i5CdQA4db8hhNr3NQYiHsgjnB9iSS",
  "key26": "2L4y9MWaesEMJv85dnFn5poPXYKwUYzwnFEQwvoaU6bAVcqrRzDks2Z2DTtmHtnsj5fvt8xDSiCSULEBeYTdenUi",
  "key27": "3FcQawRShPmGDKNYBqg8Gr6hNsH7Sss6FaPMkNJucoC3S9acfs3M3jssB3SBr8a9qEbggtszvvu4L1DwFFB9j6XD",
  "key28": "45AhdRwXSZ5A9YgBLgU733M6yAkKoCFdxNK2fPeahvMujtr1VGU73NWnUhiRmugKzAki9GC1TE7XPCoonaT2U6uP",
  "key29": "2revdshfiS36WBuMi1qiP6vQZFbADMQQdVPp9PWKjEMP1H2r7r2nex6rxLzgJRLupvRypEcNbfR1BokUaDDkRium",
  "key30": "2x7TGNbZhM4xTnkabtBm2haRaLszyfuoGRQtiHLxFxCQzswLbHGitjfy6ByUhF11QxFX229kJLHWUisbJJfyEFaf",
  "key31": "4okY1GM7NR3UCYqUXHa5sbKL4Pze74y7jArgUg53SQvo83f4X1aCEXLLAWxZQBduei45FcwMjaLcKUqBXT3EPYhy",
  "key32": "41CN27sfw2kxfvR9sn76AtxhMScZSKMSB2S29kQthZCxXh8BJG3XL6CWneQa845HjrFMCEmW2wxj94FLGrPuv4Ju",
  "key33": "5a4bEiPHjPeckiwzz9koH4thcq7GmWHcuF9cZdeez11c7cw6vTzGPK3cC62Kj6PS9FwreSwcamRDUVQDNMp5gPxG",
  "key34": "4gyHtA3YxbKsawgT6uoTfWCAacH3PwXGJNqmQBoyEXiRcHV6DmowNUGipZor4QB937FSR2QXqPvbz2WHDaVimtJc",
  "key35": "23i7JgVjb5DeggJ3UMNnu1G16wUYaemf2bRWVafXUYwLJEMhi1H1EjkUySuXsFoLDCwBmqFvN8CdehcFcvU3tNWA",
  "key36": "zqXPDhoEUXrCaPwFMkQ2HFgWxS2CU4NT5CQ46rDnoUiz8HcEi5AJLsb8dUXzCz6t85zEc8bqBMoqoasp6TS3iV1",
  "key37": "4E5K1sxxfBUm7UB95y8y6zBkYSDz1uR2DRRSBwm2kd9pnhL6UvnotejncKh5WMtwNaghQCRcZ7vJUjmjzvMVsxum",
  "key38": "ZbvFx5bjvEFYXc5WnzfuHuvq8jUNvVWsjo1NrQf4TsPyaMnFbDuZxdUea9TbUG1Y6Ve3b8Hfn6jqzHCm83GLerc",
  "key39": "4TpxQqoq5etzSatSRppVRdE8UXNB7rhVydmU36Jh9N4zSZCMYGNT4xZpXinD4uERom1rGunonbWMuyypNAYfM9oa"
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
