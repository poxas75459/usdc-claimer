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
    "3wJmMhjjrPKwiR9cS7qdqf1PmsQ5Qkt6Gz7mahWQof3VG7xZ79adkE2uNe6MSGak83ZUM7q7Fr6AysfhDS6jJepf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJFo2To8L7iczmabyLknBB6bNH2EuGq7ieetFjebMndG882QfDm9P7Ecw5PeEd3BHvHzcJsRrULmEvq1h7iXane",
  "key1": "3BpfZUu4Gi9DKbTUnXSaBgDU7BfsWzpZUQ83jqXD9g4tYD1WJpGqbRSGjZzBYeKbsHeQ3LhU621sNL5j4GqvVLXn",
  "key2": "2jTCd6czn4xTmFHohdtDLnEFuLM48j9VeaF7G94GE3HwWwRkBChPWNWyBKweMNKkfQTqZYza5FcFPomwYX6dkhcd",
  "key3": "3ymjHQpzAxWTUrCb6qK6LjF9pHYmTjJ3QrsFfTVQtaTNFRhtG6Z7ZEZV3e8E6Tu3HBjguqhJjuELCEZbsTA84PX2",
  "key4": "5DrT4X9k3oSzEefrwPWg62AMW3yob1JZYjjjRU6KfuLdB2TkWDTjJPJueX7ZrpmnjSuUTfpwEvSRXUDgvBzCkL3B",
  "key5": "5CBSBUUYMhikxrQkVdvjkfh2vUHitxndCqfHEAkVkRDr2BZYzV8WG6tURhGGMeUvx19B718kQDJABAh6eDA4F7db",
  "key6": "5FGT2paUYfMj1FiZyaUQcWCTP4ZeRK97r5iXDthjqy9voouGimQYGbmXLtB9xAjq5ojxMsKUY7wJCCwAMHwa29rN",
  "key7": "3iYPhaKJbvBX2yXdDiJtc6hTHVNyWCPDfypwnYqyU2xGL8gvYq9m7cEG8PCe88qqzSaUXm9wkxq3YhLiQ6YzPBZn",
  "key8": "5xn42ePnSijo6T6czicuc6n4jQXLFyE5NErSZ2s3tL8kj2rscU8J4iDWREopKZaqKMBTdKZXsehm6gZmsWtdzCdm",
  "key9": "5c5JVdumXuwRQigLZkeRgJ6UtnJSpLhJBnY8WZd6Uahvb8LfYAZTwqmLkvkZTTno8gNmFkXVpb9wJSpS6SQBtCCk",
  "key10": "3UXusvYNR2zMpuTwntnz8XdZPiuW8yfa7iLCfs99rg4ePbNxMai6zVUJ2779ZrfGcFVbVosu7nC3mGnbfTCWyeco",
  "key11": "2NxvJQrLXjSafv1KQaML6K74PaajLHb84rk4xMXRHcyteJ2Rx9t1nWTAnHzE3sBh4XWD5KEYsqwmsVWh2Am4z4fa",
  "key12": "5oUprg5S3tvisuPRLEU4FWyNPoi1RFkie6wkJs8ZpcmtAxdKDm9dyCbNJdtjyFRw6HTHxnhDycNAxssu3hCuTQZh",
  "key13": "3mHjB37tu3yHg9iQSD2Hn95VN7jLsU9t1v9kksWAxoxVc52KrnrkywBgFiyxeQU9v3JKP7DEhr8a5g5s4EmBHw94",
  "key14": "2G9rf34C4BMQF2ZaCx4c5BG1wmV6JJr7Lh2TCHY2dtiVZJ6aK8U63ZpERoqGpaSWbLnH6VtA4XVho496tEzwSM8P",
  "key15": "wswVq7M26b1FvLeNXX6P7Z2tFnwCHq12U7PvimPJNiRYyNRfZpAQ4fzifX8Y7LesT4UpAxMdAbkpJGHmWB26cPz",
  "key16": "3KHuSVR1iEMtN5zps8cXkWc7x3pRx7ycuaHwf27q1T1gNJ5ChxGJSiPa4HJLxAGKhfRoXDA1bkXxDg8Z5xMdUPSs",
  "key17": "32G8nwMWLXop188Kp82HFqJ33p3B8G8xCXQChgY7Q6yJ4MgAFPzaffDy1PB42UjDy4yVBi5bVgvZ4DvGKDz4isdQ",
  "key18": "fpSyWVVxjnzYsoDqSre2g2okMMvZ8qGYmSAAZBZz2mGuRmCFDxGcJNPbXYAysf8Krd2GxwrJVUDHw2EXLoRL1sT",
  "key19": "3juF7ohuQZdmB5LGqwTUtAnP5UkjBvabcAYKjunjKsdye6MfoVbZwvpnG2M6QS7DU7hAonuW7s6bdoCuYjzWUzYZ",
  "key20": "62zvXafs7A2YC8HqsLwDeHMkbhwp9PsFqDWLSX4Vx51ZSzHrkWB5u6NLi3d6LaYxNcnir581QrJ2SBTSQF7AZ9Dz",
  "key21": "4khQDCG8gdmpJAubXc3pST7WSxAMZ6nXa8Azx4tsSEcR7t9apYCpbqMERyhftaxqxUBp5KJZ7DvxWx1GreKm1PmJ",
  "key22": "5UhgsRs8ixNMFuHiPMa6CxD2BLWBMsuVTi7yovMCRzvHsig9v557SoYJfp8NvVtr69jAnXZM86kbHSg2Hya454SQ",
  "key23": "2nJDWuKH585bWNn2o9WgkCDx7V9TKiXe9oUVDBz3Yp4xp8XRk6FPeAHA9CupMyMWc64F8RXzGtERda3TPCfPfC56",
  "key24": "4jaWpH1aDEpmGC4UurXsS5q83iFwCwuBPSju16bScGU8uFaa5iuz8EtTuVVuCdvYdmnPVi69VRf95Q8MgUQkn7jc",
  "key25": "2cst15jnMGsxQUjxNxmsUbpv8RERXQMUFXoUKn2odrqH9PDP7PgHqMRNbTYcFwm3ij6NMnoxAEnVSorGWF3NYkEx",
  "key26": "4R1wzH8r7fFpEijW5mVuT5XjHFareGyjYKLVW9Z36Wyv9eUdxV2YecQeqiFXGKTVpCT8x6cfeErZD2EZr2D1sqmV",
  "key27": "4aVwTF9ETLDHwssKdPSJK6XMaiFn1LENkcMZZZjJZiXXCGnYL5iDc2deeD9pPN2JWguPWHCF5N9MNx2cEptiDbPY",
  "key28": "52JWnzJXLNa7H2N5Zkx2Lxi5xNZoRj7V4cVNu2ZLHmwDo1jJh4ooo639ATeYFYobwBXNTAmT71nSnNdupdLY8DZs"
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
