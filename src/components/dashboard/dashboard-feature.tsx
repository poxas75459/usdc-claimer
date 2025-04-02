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
    "5xZqNDauxAd54x8PNoMYUdEgbnQMM6h1QiZQJjwPBwi7nadUukFavWBq4CvvQxW5AVfYrE6bobZzYxyJgJfwfJfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRpCBhHiqLxuZGEvvoHCw5UWFVufmgajQuFyEwnJWRQEwT11bZ6ZAcmBokvDawb4C9yB8RRUZbsU6nqvfi1rwsa",
  "key1": "4q813ZGSLKRDZ3Sb8eQPhF7ZQ2FjpZsPR74wrGpsoNDt4ecp7VQXbEHLX9WxVeAXmzG4CLHPp8uu4g7TgpU69TD8",
  "key2": "2PwyCJpbyS1Wvw55jZPPq9ENwTZYTkHDjY25wfg2ZKEaVub6NkxnP4k1QdzFys25oczjdLwxD43XyxhtUworxSfK",
  "key3": "5dBHRVE4RCbdcDHisQAY55ywYXor81kfm6ASgiLtD3Vp12mXWossHQ1vrGfYNTUC7uEtZREBMiYva55qBRgaH4hT",
  "key4": "5A1uCVJCKbVLQYx8beC9q7w1GKV2prfMwK1PngHhFCqGwbe9JmoMoS7cPMNykjp1bgNm78aCUgA1Rmycko7vm71C",
  "key5": "4zPkBgWudks7ErVbp235Z9XyTFxRxZyGNAnwohxMYqU6JstCVbNdSh35WUQjM8qvC6n1Z2ifTQFCAVLYqR5BPtxf",
  "key6": "4jhra3L9ntgVyBuso9upA3m599E3MyCPA6rkgJz9EsUE8m7ZFeCBixCeZiJAqmSAHEyFT7G8i7VsURCkShz5yJ9Z",
  "key7": "2qRuj31nD7DbFc3TPmrPZyQcvF2bsBKJ5yrdz1ThezoCbWcxjkRB6vZ5nitadZM6fmUwKTPAANLyivqvyuYwDHY4",
  "key8": "2mStY67YWmT5X3FYUbLhSisuJ3AASNvRNYA96wBuJkxkmQZE8RueU7MNZovpvt9cVwf6sFv7UVxT7CKjowfLLJFX",
  "key9": "471CbKtvWTeuhd7ULQabCBTNdHNugSNhb2N7GSdWAn7GYQRHoHZ8y2fsMdqNSV7HXfSETLsPuqjQVPSMhRHqB7bQ",
  "key10": "5Hz772drgoTgtzm5PDY8wxkVqM34bVGzSucxdEKYKGjDWduLF7jevo9ZiQ99FKBGP9hSCRFZf1WVzytKVFGvA4tW",
  "key11": "wB7ZNBV5EUBgpUmpo5mK3WPAQGbRGg9mSv6XmDsx3dpPSW3jHC6fWSnV579X3Di24J2Uk5PLB73bPiqs4KB82sp",
  "key12": "4CXJDe9RMgg2exMcwpLJCuATZdg4XvMCsbddnPifVbUwFwMzjfMGiBsqR75uBuZrrTuNtiHsmLoRVXcADF4qevL6",
  "key13": "CvhJpapXPBAchsxE7x7dwRMiD1ygTjwdFPDA62LZg1p8oAzrokkoS6k6khhLs8j7sXco6t7XnhzG1sSpS3hfDVJ",
  "key14": "pyAQTg2fW9H2tzdiChwagApdheCJ5br9KjM271zJdiUXoXSMN6jzz6MZryvTM7EEbq1iQhxtXJ2B4ShhL9TjtNW",
  "key15": "1QPRbjvcXcHeD6D8zUftAs4stjsYuEYERM6eqJtFb5WA3xYt4X9Y74hu53z5kdnA9M48XcoG4SJDPGUQ4MZ9iUJ",
  "key16": "4kvDCY53JvcTFgpzamdFpRwXEUog9teY4AS6suH97zxLDVmnDoih4hph48pmJbb2ZF7Ep5DYoKChYQqFGJEXJkfE",
  "key17": "qvMY9QEdDZYVxzfSzQ56aK22zHNvFUKmUeuvvvcrMH43xow5b5zFrWps9BnH3UuzvFdhALFiH5oQjsRu1Ed3Uba",
  "key18": "5ugBGheGSt2VFwJxwdfBwacT6FiZSnpFSG32o19FGaXGn68sCzo7HJyESyQzAxHNG2yEoJHj6VwTXfUG8hFi2eZd",
  "key19": "5GRKNYWSEy6MgGiuQrQFpLTPeHijxhnKkqJzQKciyYyUaiiTuA37pW2wbLU1ZUEP4CphWhfHV9vNi3DC18z96RfE",
  "key20": "2Wqm6qQmNXrgkvypq2GG2NToJpwADfcjx4giAZS8ghBFiXCkTDwqjftUqhdCGqjRVKK9Qe4aMVQCKgPedUQD4yK7",
  "key21": "214ye9jeaUMKwyCy7eCDLaShDWQ3bBCYQwk3Wk6PDUEu891gnBBFu1q3pN1zFGeeBfC8jUvwADL8FsfN2S3dP2dB",
  "key22": "21ct7n3fyWv2A3qMMMbcvxDoqGFXQV8potVxKKUL7trECfjF4NaN6m6ny2fV1MYpkGQUysVTuQRuEhJNsux2mCVy",
  "key23": "EcTd64S4Aw3xUmBqmhNvRVknieWCpwV3UEohpVnuGsgucV53rcMBwSEsKECmLF9WY2ZZTRXRi5A53WuqSxq1Zdp",
  "key24": "3iio26THQXYVtZrB2nNN6Xt6NhRK3WSQb6bGA4Y15gVitWhgktwnJhNraJQqSEJjShmoXhCLLbZnKGp1UwTnUhF6",
  "key25": "ppV6QoPDjG5vXTjLetURn9t2EGDUqFviAATr8rb2DHg6mdyDupWCNt631yAomvHGR2EfuX9J3vW6yhX2v1yJYPi",
  "key26": "3vfzWkjUEZPUqLX8uuXfG6vaSWLE9BgkuCPxifhoKtLh4yJ8ZFw5GZ9njQfhVnS2FmbdMPfugAj8TT8ZDcEUALyE",
  "key27": "645TsB95MmLX83eQ5NYiUWowvao5r6BSXnM8SCFPuV8yeR65BZMHMuzmKB38iQTRj9QXek8h8VQKrHk8SK73UiEh",
  "key28": "2FuM5Tx2MGkZBBedHkuxo7yn1QEyNJT8qGgT8mwritoo9H5qYRXmh6x3XtEnFe64dNiJHiPLt9d2W6NSkf8oAegy",
  "key29": "29E29AyYkCrANgBJikqgWwuy9V5avtAwYhwJx8P1PjJ5j1zJSzwxuMzA41ihiPtgLKHWLQ69xuKYXoS9hJdaARyz",
  "key30": "2EziTHe3ZhSsVnr2gkFmgZ9KEctbfYPsNgh1U79GXALR1zQp47aqfxssBV26tnZb2B8o4mb8cEUFiodHp81mf7on",
  "key31": "58TtrgK2dm1k5qhtg7RVzjQDkUpimaW8iNnGX4vVhjMY2xLw67WUC1cfGjfUAXx4r8S7bJTECZ3NJLGv5TsMMAew",
  "key32": "3LMBfpmtwNB4pY2qBKrLhKEG4pBNLmtHeEhXy9GD7Nd3uqQMBzbpXQKCwihwMjUAo7ht8LYJDsBjJNuAC4bXtedF",
  "key33": "5RjAtLyHioaroaPshj4uZdkrb6cP9MzHBFaYLTKUtA874zf9XjSKQLj5ryQeJSZyVmN9K5D1c1iAasU4QX4YdWw5",
  "key34": "4a6vc3X1TCzajPw3uKxMA4ZvybxPkYvty7LGBo4qgiJHQRUfxF1SjHLVmrfHhJUuC8bDFLMgZwzB1gXPjsad4bBx",
  "key35": "3oDqbGMhPsaXKnVgk4ZfucgzNQCm3t4WW2NB4uiq2dr93D2bWDxQenDaqha8ouRBme7AmkhhwDTEhurw36F2pnep",
  "key36": "5RvKE52HH66NHcL2ay9ehA7U3Z5m7vEUFiG45h7jfazqotQFQWPpRLMc7vPicByai3PDN13AruWhMcgfa3EJFa4e",
  "key37": "XYFtezK486685nJcHFUAJWkzdAWcTw72H9fj5iARCaLKE4KBUaQtNXwJtXjLiRPSYeT3xrt3a7sU6eAgNGu1ZgH",
  "key38": "3CAtRG8QK5FbFdZbEdr7WseK35QVN9AZpZMXRoUN5zEZ5uvU6igKKFMRGnAJ1oxSGKhvz6qEn9Qr9HCo3zMdAFum",
  "key39": "8jEXCqkXQFk4Z2A3Qrf6aRTi9ExmhL6BDcvQvvY6A9ygvXzMZ949My7hQSCvLq95zPifH9YKwFfm8rC4TiiXHKG"
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
