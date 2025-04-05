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
    "5U83so126BuwWNHWyfmpzVVZR8tuWjgo7SqNFhpV535f51kRxWtBpWM4DjM2D8eLnH2Ngg5H6n1y76s6gfcA1WzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wuoUUB4XS2TCP3xx7jp8kFxRj29ALANB3Qxfn2nyk2yAsFDbQ4pB6fY7nWdfaKoDSU8wCmJMk87H3XBDqSxmjF",
  "key1": "XCkDnfWCFNvWm5k1hzEbkh98bDsxVDBZs7n5H8Q65qLYBwJx6nvztHgVRStPQwWgrPMCGS9gwSjJgNJZvoMEKqv",
  "key2": "3BbwpGWZAdXgZ5kzqSwzidZEnL65VSKRxy5fFDrAEBynGgNpKNoBb4giwp8KNryEpP9kgCZG9dPHUuz711JkN5bE",
  "key3": "3RyfkNcnZ2AEN4ykqRSBTgRaKuwsyYpnUUf7TFutmqaGmteTSeEH5EUBKNLMMZSXCLfNp7xra1FppMbGUVm3aBbg",
  "key4": "N1UAMvNdtfTY4qKomYjAqhwbBf32cRLQ8pQudv7xor7mGUTePe6Jzd6GETqRoeHL5HGWmQxrYEaYHQPUxc7axmC",
  "key5": "3BbjsUyQZoMz7BNjiM2RrmnoVuXF8nRf63LnQoNdonX97vVmCrMVn39fN8nAu6Uubbfvj3SuXVG8qjxDJLGn5wzo",
  "key6": "4zENU1k6szJWGA6NZvsKBmCNfVtQ1Lpfc8eoohpivx8pTqPkNn8eCGzmATpJWzw4En2KVUKL81GBz1JN5WZVH6J7",
  "key7": "3N1rQccP9NoVdFZ7Lpt87bWKm62zMMqutBQUtBV2moaA5e7JVhSTPPhqRcbgMADNEufa4Mhaweaxt8MVUXSMTZUZ",
  "key8": "gzQAVvwXHHc9d7Fq8ZWxSQKdW8m63iHq7GTexgTDkRJdW6Gz5pJAgGmLoCugbfwjxUeQ8shdse2JuHyzgCnyy3W",
  "key9": "47FFEFg5meXpb5bVkKMsAc38zBEnFiNwSCwwdLx5wdi8MVPLVUajpXkzpJVazLF7vJKUL1Zao6RxZHkW1csRKo9",
  "key10": "r9FpAiYtvbzUZFshziFps1guMh3gPJppAjFNqZCaveaQ9VVdVUNjpnZ5b2PjK9xXS1XvBhounHRb23XEuJYF8ng",
  "key11": "2AA6HhANXeayytfosXYmGxaKS7rVxvQJjrrqvn85oqRF6gp2kAgD9C5eETNBHHvHP4hEsFkBHkgGU4Mqz1avEyVU",
  "key12": "3PUxtPfvs5AhXavEMNopTrGePDf8a22Nj6orvQJWXzR3MuYc1x2rQYKTArZRoHMZVViDTtPk1T6jzhmoCLW8aLFF",
  "key13": "2fs6a1cvnbQnZyEzeSc5PypMMAsdafVSfcnk7S9TT4gkhVYjQtd9KwhidFwiucpz3c1GwwpJ326nS8NtMeDubJ4U",
  "key14": "4WNkd32gdGyKCShbDhG213k2MAMDfaSuS4QRG72o6xa4cSAi3Xz4dCb5GV43mAC47vw2sQkWpXauWv3Ekvp5o9XN",
  "key15": "dfubaNgHJs5gZ2VMGjD6ytxfz4oxzYrxQuPaBchQiuTX1DVHMY9eJEwRGaRaGkhpTxotfrP2dXwgHqK3LYA3U3R",
  "key16": "63DKzB56vqCT4MvCsh6TJ4nGHHH54c1raiPvjuv1ohcheXjJXQC9XY1u8oBcGsHPTfhabCfrDrCUdwFNTxCGgVon",
  "key17": "5so338oTC237xZQusu71BTCu2usPgwNKiHa87M1spQ56QGZ7Smv4MZPYoG6kqyo11HP7D66DYzkD8xGwYfu5aEAs",
  "key18": "3Q8fhz7vBfqDQPcApLztL4AdhZeVNk4t9bg9zeb5JuWqk6ru1o7Ggv88rKDfUcAmThgsE57xZLJRQo5hnu7qbssD",
  "key19": "3WDqruT6GQZbz4xH1aDe1PEkHRD4TswZHryw4h2wQ4aossB6CUYmDcNL8BkeaafRTjHDwuV1aFpfongqr9i4ZNdN",
  "key20": "4yLvnMsAMyxr2fbB5dwtvZyjSJc51ZdWcrJL2W6TRxRRNo9D1adVXmvvxA18oZdtWMjLxwjq8AZ9opDu7NT1xoGn",
  "key21": "24hqpE59BZd35HT9PUvRAbn1gqRt2t9Uwgf4o69SMVkd36LZodyrLUDqTXrBUwu6WXRQbRijns3oSaHSbcZgikDK",
  "key22": "vQ2rnibBHhppgoqTtRgyFkgTWYjByBms8e7B9TmG13GaeN5Jv7yHZ3awtJ2J5M8QSZf6o5TZwSrWxNYbn2GLHoA",
  "key23": "2CLMhg1n1gVayWGZZwzwv2VGzyEdt2K9o1MSRLHoDXTyXnALwcMKYUDTgSsxUyx8wqzrqA2SEm6rzyfYwSttqrZ9",
  "key24": "5YgNm8dzdSs1kZTvDfRnJMUjG8HRzymCsgLjq566ApVFGosQGsyFxqBgV6QwzLE634GmxsMNoAsa6j4oknoMfd3c",
  "key25": "61h2i39EaM3Gabm9pf4WnMfQCRjAzqaXM52hbSSV6n7DP4vuE7UHDfTFBLeNiXbwEWbA2VAHfE1ux6jWHjseFgdz",
  "key26": "58a9WH3mgZyHAjWEYTWDQ5WCvDkyxri91zHE92B3iKSN38AoJBroR6dhPunnjX2aifpByCw42Gf9pQJSnGtmizvE",
  "key27": "2Q1kxy63tBPHXnm1PT6PBGajjohUNyNVQQeJphRsoqhb2TZJwqCam7GzncqZWNxQdMEKoW4V5YA4v3uczdRJss7u",
  "key28": "qt8Fz276z1sW1gzcyzvWH5G4iPgKLH9wUkWRaL9XzLA7rxzQHrAHfFVWyUz2YZk8ueLxUJihLNHSLiF8sXzgu8M",
  "key29": "2jzp8SJJmUiJvf1Ym7rSBwTmyYNtWg4y42F3Q2dpHNWzyyQwUnd6TcEY3c54f7ajvxiAJgJjuzk9236TKsdaJpcb",
  "key30": "4i4HsKgyXKgvwEQCqXcs3iyWo4oqJQuPeREbjvxGh7RrTLg4V44faMZLUZY4wYYQgKwaXjdTLbCU4DosE64eV5di"
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
