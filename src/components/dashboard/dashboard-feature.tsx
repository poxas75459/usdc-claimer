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
    "5FX98FSjsWk3PPe9DrBMF11oWgDEgKuJx6KqsNau6Nktg5TQzTbQk1oekACE819CXGSQn3ybQ9XqT3utGvKZdkqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHX6R6HimqaFY9T51hVe5asg4FEHhQtzry41YhetWuq3ij7LDD2LvBeAcZvGxJrEC3p7VWWzyWdt7h5on3pNwVP",
  "key1": "5r3awXE1PrftYuSsLqn6e1H8fTnkvZBeFopGKx21axj7cYnWbc5peqw12w4vBC2Cg8J132jubk2iKes62hsgnRpo",
  "key2": "4rs4KaBdc3uKRGgG7wMDaYU8xpxknmKq4t1XjTfe89Gaagv3Qz6VoDRNb4gUwKaFH8weCAoyK8wgofRcvMHizKMj",
  "key3": "25BJMR3TQAEDpuRTYZKeu3iwT8SWbmnWDiFHnk5Y5oTxT4bpeRXLHrYT6Rk8EvGz7MeRhvJtTA82ZVfgYphTg48v",
  "key4": "2mjidYXuBTbKbjPqB7XK1QzTdiANpcaw3Kp5eiM6QyLaxzNVSctVuxirYGLE7dgBsKzGyCkXV1FX6KaLE99Lbmcn",
  "key5": "2opZiWE73VYLqTRsVWMsC7EgMQRbCozkZgB5bomMXaZEnYJa8vYnrZyrQrDMJ1BNpkgpczXvjUxo77itEnUReU8d",
  "key6": "S7YJosE6YL7FAsmoMxrTpQHjyXcsVQc1CNfpj5E9jj4wLSSmQHVmhMJGujdidvbe2AWuPYBgfnV4P9uSsL3sVPF",
  "key7": "59ZNX571UVCYiJFShAeai5JNptijDXSj97PqsmwnJAHKqDjSUCknpWHvS3wCiMpiv7TbkEV8rmYSi6AbJTVgmEsu",
  "key8": "UjbnCfVT7YKDJSNNQpfVjt76q5R793trpi9TvEyvPZYpzNaR8xsaof7n5C6EU5dnk5N1z3WW3pQYLzchv5jinLL",
  "key9": "4or7ugSptiorSJHQcwteEBVBHKjBiKkSUKzePqRurf3RhzkRKEceSjRNhCMUi4w6G6e4MXJyMXgfJLXSryDaYVNu",
  "key10": "hZ2QZq5ZrkRCNDYwU7BZxm4SdCDb8yaavUM6Mpcf4aSe3Te4iNMTmriER9nwQyGCumjYG7hmXNxaJ2mZesgFeFV",
  "key11": "FuQUidk7hqNaUiEosh2kEHnXFd9SxDDSTMzuQqLTai5U7RHPVj9fum1JkX9ySSZNLeCps4HaQ7org9o1H82gFU8",
  "key12": "FFKD6C8vamHEAjznu1ocH7phTQXprr9g3NGLh2De9KAixMMWEh55yivpPzo2SXsn8YXKytAoA9vehHPJbokSLzo",
  "key13": "55bi1XXAPWWgem1mHtK57uku5eV4vmjR7yKKbnD6g8wR9nNRrVjZnuR5PSide5gtw77K6H2xZbZDmzSoUwppqC4B",
  "key14": "5x4Mfh7xUwe9mHsbo4fqY8UyzJE8BGij1dMTTEaj9oFGf5TWKwT7JdRB9iTarQcPjvjx7di6yGwk7tYvwr3atDMT",
  "key15": "4UoN6x9WyfVaCGMTquk3s3k7h1VsrDZXqhrNUFGreVXAmQh8Dp71r4bRp2YHbbKCbAPAprswYpZ2pScjQW4s1HFK",
  "key16": "HhYGneiZJQnrUaPpyvqJokshj4vq5cAgvkg2DkcbLYEY2msXxLyiCe4ZBsUxdBVQJfoyHxPsVibsbGRY2k2fXTU",
  "key17": "5iAq3QdqJoPa8GwsvWaxNBJRWyo6E5xNBe11ApXUgMegnoqdD5b2evY22thatTPU5c9w98mRwCthyJMYNpDX7Lpt",
  "key18": "4evd8MLgaTwAhAxLGE1PBqAgr2DJHhR9eMq2DDkoxU2hfnFhwo4mavczh3PT7VsnhR7Zo6p7j8L6R6RyQkaVKp4T",
  "key19": "2UspMsX6fGSQACz6VRnV8uwncECu42z19HpnKhJgtVEotoBcMWfgPieNyeu2eEnQFQi4hzCj5nK5hYqiR48wJV2s",
  "key20": "NEzMDBAHYWSA5FFi7ZTgD3CYw86kCd3oCQEKEF3dWv1qT69YGjKdK5Uu9SkA8oUowUuwSTvrk3LeSBm23TQK6we",
  "key21": "3Pn8w21RXWUmK7a4RULouXheT45tMRVAJWbqdLS7hWRDr2W4nsiDiFCog6XArUDEvxEuuen4VJC7kYy47s6r4ay3",
  "key22": "2pXa7LKY4rCGjE5wNHthtc4ogfBkYzMEgSY99Xs7MWNjBgd7qv5dot4qTKVUoqUUeUiFGCoXKoQXUqZKFTxvxKhc",
  "key23": "2LDetSPaxQVPewZFkbQGGqwhLCnpiUp4wBdTViqtcxHdk5uJfp81J42zYzgZRv7euWepqZKxvx3ar4SFMBKrXivb",
  "key24": "2bKZZxPgzn7pE7ZJBCuay7Li1yqnVNFqqLuCR7jzq9zyt6vQjUHL2EWyjjCMBLdjpGWzQ4P9kf5iCg7Bg3Vf5fyE",
  "key25": "5aRQkasXyqFCtwDP2HnSjPLDRW6thU8RP1vkyEHWBQomvwEZ5XLadTptuYkpmoarA2CmCeweBq5w6Bgm3DjZiKRW",
  "key26": "3SJQbNoysJu7jLAVfdNk21b9Yv6VgzcUTgbg4WiNovamPugLijkqfj4R21izw7EN6tP7xVnSpgGAMXagKn56bH1w",
  "key27": "5fhLfwfKvpJ5TfEUGMCNr9tUugcGnMMcNEbYApQwEFrQMJ2SKGoBf4tRcRYesn3s1YDb6LVQSEVBkWKErZ9icogX",
  "key28": "W8PCnkyh4Tpt9U5Y7XdU4i7wvNJ5QoAoQU2bCG7fozm1a7uzNrM4pnA5dMT6po8phn8CMgeC5ktLzNd55d8kwYW",
  "key29": "26tjB11opUavooVWcaqYkJY7kWikRGC6kCRQuRCn8k1r1e6sLdu3C35pwDVRtr6tCCGJd4S5RadpcjbYrzXgE8nQ",
  "key30": "3MfMXELEsntXkvmmvs4FKr32NEAGbcBynyjJjUSyZ3tBYPQstLBVZyqAWBBncfLiXmL58q2MDgzawvK5nrytA2aj",
  "key31": "5vjYV8hUGkrjdwGtynNpEmFBR8yakP7NavR93QvFiqc3eWtZSXhQUwGptPjcumk9o6BTWcp5NBNbLWngcFkwJZN1",
  "key32": "REL9e1jhjh1dt67tM5vj8vKKE8pToJMsaUByh5zTCbSRk9soZxjPqrHArxroPLwxVePADiu1eG1NHXKVCbNSTmA",
  "key33": "5bRzWLeXexFtaFrogpvPix2grCKwxW8P14hUoZnaTwGKFXQ2FtFQJZXJrB1x71YV9qMSSCkXvHFUhia1FRL7DPy",
  "key34": "5ZfShZtpkGmFK7oct84MZ7yE75QSyMdNM9X58xBKdUiK8doyKtCv9GcJJXo8Cp1RqvaH79q9dwWmzJ7AgQbkPmqm",
  "key35": "66a8uqeegaFSLmzm1HpMKrEUbmpiN6JKpcyfk2PnYi7euJg2Qqrz9EjWjB2Pmdn3ZtiYxnZN8D9khBtY4eVkS7Uj",
  "key36": "3GSoPYkfcAzAbjQaxH5fCndYGBwQaszRiZgeHC8ss5hNiDkESJ87AFRXm25pudoRFafZXA1p9Zaznwv5N7Ncx8eY",
  "key37": "4DjLg1MoSdzpXmwXN4P6Le7JeyXHjYnGJcMEPDPYzEBJBZQrjZZQR8nZu6fZaHZVqw4RxFdMMKcbdBgkiUqctdcs",
  "key38": "4HFqv2MPxmoQCPtPnVGueUNVX5ehn9TmRYwkiEFASbXZwrVnNpuMEEQjop1cxYr5Db44YhKxjc2VfFMr5zYcy594",
  "key39": "23qkh9pnXj94pJ4v79jjpVrRYogS87bFKChbu5Q1UCoZaGbRMYE6jQHfjGWdhQGZQs4JqApmUdCp2RjSJ2zhCcFQ",
  "key40": "4EQzSrKvKpHNP8Y4FETrD5kzvgGjWBo1QPM3XL9AcaUEynEGDzDfr8uqJVtRL1NmByp1Yn7UxzC2JsLUSmgW7ePV"
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
