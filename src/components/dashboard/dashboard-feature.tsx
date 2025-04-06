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
    "2daafVLd16GeYWKjxJV2giL37hD1PqdaCeZbE5dmYM4kvVC5279k8HEEEXBdYfJBFLNqoxBFeXwyPdFbc6Bk19QR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eYeGcs2jxvwzNHgSi4VTv446iAGNSPNhF2QYB9k2jt4YXz1qH86XNEAQThLx4DfjWA1tARACBuPirqvEdHDemRp",
  "key1": "3iFu9ejbUEZvmq9r2oGuCbnQgAx2cjRnjZjGFzoioCUchRpqgS83gxXiR12oAieQzvZekjFedE83kK7QQhL7Nyu9",
  "key2": "2yDME8zvTuPkbVbyW6PYF8EQTLo5kg41PdmVCtupCLy9Ndy8ogLD2WrKfnRhWDmZvPcTJp9zXvnqsKghJFJNSgDe",
  "key3": "gATqEftpFeg5jm5T4mXvdzZgKyizC8DK1TFqqBYuqmnQ9M7WLD6ze2iYs9HEWnA4x7APrWDiF4bUhvMZw89LPw7",
  "key4": "5q6nxE26C3ssRUUrz4vhwDSJQ6b1sHUDDeC7Ewjwt1ctnjujrndqq4L3vNbMhLKcEH3cBSW3XYfha7JwTp9Nqz3W",
  "key5": "3fMvk8Pi8JQ85nLLTAh4pV1VtGypDXmJvwwKEKCBkc8Spahft54K6pELfAe9vJTyGUKdiHVqNG529YbXMkEgN5Mw",
  "key6": "ao8ZaAnEnDkNfxHVRtxWAsg7GMMWLFYg4DrE8q2mSqN43atrjwptahQa4cyBR3UR5vjb63aKSuQk6KbS1FvAu2K",
  "key7": "5vp4Dm1ZxsrSNrJCX6NUbcCRWyeQzv3rLPGyDemX63vBujTCSdSmfNWHr5ndzsN2LQFZCwfcFvyabQ2nHuYGBZ32",
  "key8": "5kcUR4GjnqGaDwVuhdTwwAnjuw7MEBSh5as7Yn3o1BTxCBziUj7U32ju8ZhTwiJCbnMojPJfDsvt1PEnEvGub8z6",
  "key9": "5pc9bwe1CK8z8Ncok2auFiNZbGrqQzFv9N8f7hG3ZnuyS8aQkTar7mUNMeHygSNURb323mntgqJ1N4vw99gkCepG",
  "key10": "3Mw8QQuS9MaBqzzf88nb7uzy8BXSmVPeGJACNs8YLMCAjJv6RqUWdVEF2bhk5Nx8bHmao98rhZouv8ZZFoY4cBgW",
  "key11": "4F5PDUZHfPGFLK3HnhhTSiP9PuybLewHtyBPhZ7RLusTB7NR7YGx7LBwHZadzoAJsbW6CLEByLaHqf7PxRm4uTLc",
  "key12": "4C5zy2cnoSvvFgkRtSMKdivFcevcA9cpfLUrmP4N9LGgpiA2f8WtFGaZh2Z1S4jhU7TrnXufjFT45f5USZYnyeUn",
  "key13": "3viHYywFkTjnN5qT9ppnyfP9LDDj7rD2kJWwNSE4RRehJW4JeikrEWZryV9QFPmP4fXcdzcYE3yezmSy4RY8cShJ",
  "key14": "28iqqraGumJcivkYoi2ni9CiKX8fRuZ4zBVzXBvGGiwWncWQyy1VdguZb1u4t4ThkSX2ym5BkbxsBhBvW77scDea",
  "key15": "5NEYeS6VNtach2cpwVygKgYVP6A8LdC4w8vNdU2r6c6DopyMnWm98oT4L1XE7ghk9mEZF6buj2bkDJbMYjCV4WNv",
  "key16": "45KRB2xBCiARkDEz7xLwvsN5EBAJbZJVSTjvWKyxp89dmgAi1ZYhv5SoanFPGDKccfoTwbp7JMxknfGPPCDPaPgX",
  "key17": "2NkXfjUXT4A4sX2eZ1tVsbiDE9NFQKUneu8SWkmJZpgANT1cEER1rMw8mDk6KEK34jvvSM7veus8Ga48Y224MsJ3",
  "key18": "3nZ4cjWJAuc4zfq5ErEVQ4ohDPmAb2zPWqG5Xv7zYbYZUdAVaH2hPrUygrhge9iKyz9XGr6ZdTNFG9q8XRW6sr8j",
  "key19": "4QXD4RE7mPK92NhSpUCPJJRDHd9gJ8QpdwAaV7QXBFfXDoCqt6wsuoo2QjzYnjrcEe3zAGb5sVsENdSiuPFxGxaW",
  "key20": "gCS6KXns3nUZmBFbFwLqc7aPuiJr4thvFfYiHwGR4ThBz1C89oMC5YpoFrct7oDjoDs11AKvHPjgFK1WbuUL78k",
  "key21": "2y6mYgpBAJEWr9fgfKmx3prSkREZBdoFehkBLTCmLiphFtz21sJyz3x9EgvjoksTZeeVhHsKVo7UCFL8vF8cUwBW",
  "key22": "65FpLRXiWWG6idw2vRxTS8t6KGbHTGqwsKdEPS3Th7Bu8GnsuoKGErAi7srzGmbCLzkEn78JeMP9fyGiMiuSn7KF",
  "key23": "53WZw2TWDq6f1pt9CPdcTCrnLX2NFfuFKcSZGavTU3qdBEMYkeA2HEmkqgsdLXgy2miZsXDUbYGdWBwHdBjBF3tK",
  "key24": "5wBXFGGftLEvt78fafWjeqZ7EJT9PQkWfrCZ5Z2inkSKVtyMRZByG8UbRouxmbYnL5igdCrNBrhS8UdZGVaws6To",
  "key25": "323igLHwavAyaw1CSjmLMJkiir9DpMKzAzvt9uyG76XKst5w13sWk3hVn6rUUAvVNsecRaMoUe1MowntcBW1Hx9A",
  "key26": "5KHHuqsRSb8cM2GuYvvTTTt1u2J1BtoBufCvLDB8vPCGtamgFvXbD6m6u2zHH3KxqJV9ByMvKEinCZrbZXNA9kTc",
  "key27": "4qHrPr8x2TgWyTn9yAayg3b6KC4h5u5iDc3ruS4aqNSPuoE2uj2VmcQHHv5ekrEAkW6qAk9hgDkEeUrJmLRCf2sv",
  "key28": "5Xuv97JbiznHpLbY2pgnudk6FHjYuoWvJB8BowWiDXntDbsXWqhtngLBV17wMx3ubURFaQ7rQF2ou7fgmVagCnW5",
  "key29": "5dfWmrkjagsq3uTfqKnZuE2MzPRfQGeeUwxK1QLZSC5t1YBeLxj2NS9NsSUo256tnW1bMhKohrCPMKFMN6sNS9et",
  "key30": "5pyFsoT1gJrdN42ot1Q9nxoP2Mk2eHk8PMDCaQkGSvjJV3L8xd6ZEjuGHhFFzLHbsVKRUKVeFV9fvQjGhznd4XtW",
  "key31": "5cHF8CpcZHXF5pGviv5EL4Gpx6U3Rxg62PkuHsPrkzJHiboan7NGTDbmHsbpzzBvP9io6HmwECtSDY6Z4N57H9YT",
  "key32": "3PsiisbmMpMFiJcLrEwqM11MuVMEGX3uW9WX4aAGJMXqiiYLgKkQfZYTD4pAcm97LQgGiCqz6rEB7ezeXvQqktAJ",
  "key33": "59BbY3HJhahiXExziqxFrDP5HNSbUJpU1FtJiqZqZTvNPVuQfMzuunBuqeRcmvFRXJb1ZwkAtZ4neSCpMKz39bya",
  "key34": "5CgtnxqfxNMbcwxbYv1HmnGxfPRMvpEnUT84YfrduFMtiXbzKiYRhVdAJh8yM4kGTDEUKsWJAHKAFiChUTynTYWU"
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
