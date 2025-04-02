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
    "SdL7oMvXoHSkxyP5bT6AUVVaC1d2wMiiv6rtBQLFiUwGRMmQXk7C9hCX4Q1DjBo3Gezwnd53ZCuxPE8UhSmffmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38y6HnSsf5DgwQdvtvxcpX1v7inwu96DzeAokdMLfUh3gTWeWmb8WSDAALpeuTrDNjqPJaUBFSzCaC92uLmeenqp",
  "key1": "5MLyPHwsQ5entiTJecPaSvc3goamxHTSgLPPGdCaAyee6WNiYn2bDLrJbcWeGfTjjMSawG1sHtJDhLXoouGsU1Gh",
  "key2": "3bKUwqQUHZAQfZxY5dD5xDarot8eKkH57xJg1E81TjhHtXzYXGs3ngfk2DYSt6KqVeJFfRyhfVv9bKm9VTmoPpJG",
  "key3": "oADLg7DEpe2yTehhw9zpAYTMpMSF9LF5nVniUrFPw2Jyi3gfipYM6Yk8pazd7TqsugwnpdWRTt2m3CSscqGtUoH",
  "key4": "5xksPmjKUSYghF5VSsthHhLZasX13MDtEP6BcAYdfoxmBJaxVKLixFRE73B85q1kMfg4337VJP45EAiVnEBGwfMf",
  "key5": "2ZkjpGEsLixPDaSJ9VLtcC4NbB8Js6gZxfMbHSJpk8kXaP1w722zvcGBoPTC71oAZur1wG5S6hxjxbaaUq8wWjUW",
  "key6": "2iqpTNxq24b4XAEB8sMvLUxZwuE9Jj3RxZ3r8a93fJ2rnpF6ezPHZHSrvqmY8QRjJRChJxs9XxhDBzA6Lp9biqwu",
  "key7": "8KQ1Aia1XyGMJU6HkoBvbryLg2iLNJsxjvzTqqLjDi84a9BPs3ApgVU24L2fccGAMPVaXoYzYMZCEi3SRAYSCov",
  "key8": "29kcNXRKAe6RuRKa4XdsLdo2W9QS3WkqEse1HgnWDb81ziJMZLm8dniio1a744ETNZgj9RR3AeFVsenayhqpRDHC",
  "key9": "2TNxaWK1Q5i3aWUh2g3xtrL1fjjAgvygczvHWSHDALf9T2LFt4QAXM8PtRNxpiYDrHVkqjHbUr5xa4C9g8KEpbUm",
  "key10": "5qqKeKxPG8KNuqjZrkKQeuqy4HesKQhXiLZWLxAygGpgqyrBLwGjmVAFT1hcBLrFRhkh3mnA2qAKP8VLurv3Py4u",
  "key11": "3qUjf2qUePFNfYDz2RUuRBHJu2HhmAivXDw1S4CDNPtiEP2dTujaAmEhQFsh1QJEqxXayrRQKVjjfkcE5ocNzDJ5",
  "key12": "32mdZWW2WaqnMZaxGsZxJKxgHUfc7nNpsWZKF8kuphBvwAzqxVX7kM6GMDRMo2Vr1B8VirqSXgsSNPwiatBA1iLK",
  "key13": "WhY3G83rYGyUhGAxQhZVUujTvjDxde2BhU5ZndCgYQKresgkuubiQfNKxhsJAyhhNXAFgwBZseSQwY7R3nwar6t",
  "key14": "5Uw5Lb5tK4VXsnnjk4Nb281wua82npEhT8qrBrQhxD61NafUNoccdTXvBwbEyLKeL27iiJnq8WY2M8c6aDxZpEPj",
  "key15": "3guqcLgaZfzp2MsCsu91tBUAyu9fuuzypJiJjnbJ4FHNDyyxkgHj2d55c2aYxZi5RKqaZXayLGNdnJWhoZhiqV8z",
  "key16": "4jUukhcfcFTHeVZ6LshSq8gDqVj4gQppWy1MG5o8AFvtAucJZ7WXSSFHYqpVLbcsXmF1CAge1qjokDxEdYKJHmoz",
  "key17": "iRBU2nTi8vrK5bbff9PrkPjd7o2xKEYUgapeEou2Zw4M1fvgWQo4SoVJdWUmtL1kttNyomVEaZpXX2kM6Fi41HT",
  "key18": "3BcZ87m8YdnfC1XWJcYhV7nLzVtEUFWrCUzuKZnoHoMYQGu7Dv5cB9CrmpjyU5tKSkDr1eAM57SZuLG67nYFHhZo",
  "key19": "3z66pY72vknZAxYLbuW5oESJmTo57Ag5q93qCoue3hGBvzboDL7D9ucLHj1TvhKngi7e3wseD9LfUibYFFmV8P3Q",
  "key20": "4CHm5MyGETftuysLmMwrcq1mtTeGD3wdjthfeNXb5Nzq7nxdnZuj2ZW4VLTDTTe3386q8JRdJd9mK1EbD1rR9FrN",
  "key21": "2pNx6wiPwBzdUsfXnsLnBo1aCvpZegAgq7xJkcK23HLvc4HbK5xumfFW8fz2WubvChqA8JBfbhXJ3255SupFEdek",
  "key22": "4YqdApfGY6i1iUPEmjvntMvej3a1EgBuV8NEPp5GL3JpqXeGEXD7doMdbpoej1Jcj1XTwWfuY8C68YodAqgtyqNZ",
  "key23": "3d3zmEW8iZKdAqCP9qRdbiTaYobEBAacpUaZ9Bb94s3kUMyyhH4fSFaCUPKN6WFZDM3424H8W1dpX9AGa9BaM32u",
  "key24": "4hgJAABQp3pbgGQkMGuyYc1WfpRHraiMH5Xp1FBbnsJM6KTS4dAPSkF252vJVUpCJJ3qiMef29FGNG2gtjsqfL9S",
  "key25": "y3w5ACRDx7YTh3kY7BSxSv4tSbn65dDwaA3h2TzWiaJ9n9SRzpscV3PDGJYsMKdAaDko9w1w8v1xvRw9Yu1Fx8a",
  "key26": "4ofEp3qr5LCnxtB1BudfpcYpYam8AHdYSNrKYrtqEBdP2tkwJfs4xCPjkCAqeo7R2ydGnkmHUP38mSaoQCRX3Mdu",
  "key27": "GBdKAvjHbsRSc86BJrjYMvQqsF4buW42agQk2KHC7kRjsezMXVJvFS2DC8yhysdBkYYDRY3DDtcvVCwMpJJsWvM",
  "key28": "uFeNgrPs5xwHYJJD9fTvULWxG2c15Yvj9WGtWwdAPB3U8dCj34LwPbH67HEuyqB8Nt46KFEfDTiQ21duQ5tFsfX",
  "key29": "4eP7MriWMUr1jpk8pYp1xXaMcUvzenMWToH5MU2BfKFwV1gejYfYRiTWgq9mgdwjSYS3K12GfrwKhJk298VP3gp5",
  "key30": "5uFvyKSUTm98iPcxKnMRyX4ayEhxyKSNJJjKX1Z6NQ4cW4hJvbNK9rt7R4jdufGJVqeRLSWFrKGtK9mpqU4a3cbG",
  "key31": "5mg3TgSnLKwABay7t8X7daSzYTiV8LQDR6YtuPqDqp3Jdqe3ZHxBYhHetwL4J7YY6EwPLH1SDq3RFGgkq4tzrDBi",
  "key32": "65Z3d5AqPs3Qez9GhGz1gn4GYEcoAW7erkeqsRvBzxduj1zQwoCSFgTsxaSVs5gwxG2yqGo8f6SWd94nXLjHv8Wj",
  "key33": "312coo19GraC3yU94RccMuut6Mzs1TMgPRMCrW1tiQKnY7PgW923kFtWdferZrC3GTdFurUuiPW3tT3juwq5ETsB",
  "key34": "2HberYr7syZhXgHHAovEHheJcKhJhezAoMNcjXqw5gZc36qQqNUkcKMjLwwsvTseoALRddVZU5azkZfaScDduLNs",
  "key35": "5ToNTcnH8dS9tsnkv9yQS3rVfTBXHWoUBafpSd3VQoDktMwyFMy68qDoLMoLP8xa4i2jE7uSgjeGLTpcqtmz121k",
  "key36": "5vDZDJCskWMX19A2NxYWGKKX2dLer5a6ZvoTfG5p1qwBx1qWYNGfKXEyWJ4NJpuakRuwa7HrJ9CApwuGmaak5PxG",
  "key37": "52QtKKhsyXP8djkWUpVEoSMSzZw7YzvZbfj32GhCwur5og22KNW6xku6AXX4egmaNB2CJ1PpH6ZnykxhkqUT4J2Y",
  "key38": "3BbmDBs445ypMuERizUGyHbhZzE5CiHoacgdkXUbqnAmL82z1oAXBxTYe3g8e2QY2U9PapC2AhgbG7wTSPcoTkZp",
  "key39": "5ueyRYQAzXhpq5uSXMejrbBnjt86EKXzUfKJ6fqtPJBnHFwVF5brTGq1pZNAVs161bnmwe9JqDHUNdhaEmRmSxdh",
  "key40": "4gg31MVfc2oUtcWq1uhtekS5pBExTiv5SRNkLjsAJPeQs55rGx44MG7a6TXZRMb4n9mver2WByY9G786nMKfwezB",
  "key41": "5x47yiMYzWtrwF3U2f8S1ywBN4ocDughqsNHvD5obAdU2MCaviVGiHfngwRqTGGNoZRLDKQGdf9pkDa1LqyqkbmX",
  "key42": "ypa25pDVfk6jbr3PndbHh2srTvMAWVTU4SsyHupshLGBd6HnMSBarDvr2fhDxy9NACLMDEZ4ePKMTeTe1cFUNZW",
  "key43": "su6UWyt6jEw5o8u7UcYKsBKovQRR334ijdjnxc8HPRCMmMVaRSGkwRatFWqZzBzwgEHVPvCYZGMvCbfk3RjMuGC"
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
