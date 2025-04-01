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
    "3ifqnqSV6DLbBTEYwsVU2X6trvLTAUqCBZBCcuKdm7ZnDcK5JQUYAW17vEJxkgjb9BEEasekQSRqzTWE8EZb1kMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KHFxpg9NLbYKiUccxxHfKTCpicvtSXpnJTWco6jqFVLffdgghNBAD8cN3abz1h61gLzjcgg3o8Ktmqs227AvqRd",
  "key1": "56UDfK3iMpQy1qPx4BAHST6iRk89c6StxURpWqiep5afL3HBoRzDMep3Lck8rjxMVv48phxd6Lu8JihB7etHpLxU",
  "key2": "tXmzSjydkeYYYx3BULkY4BaLQj7HFaEvFCyzYzAQMbjGasH7bVSZq73rDyoWMs2zZcUtvbtCqm4pTrF7SDTPJtJ",
  "key3": "w9XMUq9nYyjtyvzWG1yzmBDQRbKpYf1wzGTfVWTHGrLuVN3rFZ28g4tPtEYha77fpdCX6fw3FXBgjY1q1fw6dTf",
  "key4": "2rrJWHjWxrTcEW9FaXRVczRPs1jSxEMcaicXanVeHQmbqDLBLFqu9XrUVF9yueNGrs2SKN47vsfN5D69oyXJ1DqT",
  "key5": "3qSMsnRrWxoWz7AJpVZwwnRLfn11KdRtNqcvf12BdNZUopjLJdFyhfsDAFFgzMuPsrK5Qhx9gyhsKNhxTyogMCSC",
  "key6": "2esFfPuVgbnMBEdnRFHRvf9SxZC9CdH27SPQ6875KfYkSR9CoSo8jDJgxztCFrR7FBRDB74s9vngifCYpVvMRmf7",
  "key7": "5pbzgZ2BP5kVgthyKAz68ANKcPoLhjUm5vdjD64tbQTCEMCaLaCSiYvX615EwvGX1Anb7ADwRiEn9s9aCevrzXDD",
  "key8": "374jVmxzHFoLdLDPCSWtN5DVsfSBaNBZX4stuygcWXxxi9vouL5LxUnCHjVSLgQ4Z238N53mB23GSnzj56FUMgrA",
  "key9": "5Stz5KZcjn9Q4ecXB2NNz2RSKkKYx7g9S3P6geSEjRsv9irBk7mMj3z1mMpPKees6q14yFenBSR6RtNzyhYKjePJ",
  "key10": "LqcqDRuo1U2ktP7tDHn9MQNZgrjS5T1nDyjX7wi4AJeCnPZVmz72YdBu2xP4gF7BMQeet5hLaxv91VYToVW42hW",
  "key11": "4awgpQZya1Zaz69wS7eYex6Q9ZLyt444vSztorUUVwJMVwLJzLas3UPtkgf8fd5ukEXsQv4vfRvjJzTLAhgiCPoW",
  "key12": "4wYx8V8dmPFFpdh1S4BVppoNwVaWKWneFTwapS1TvmFsCRoWjrQNQdjTWssP19CMmFMwqkvoXuEwv3s7DXxgo58p",
  "key13": "2f1Zcu93DjwsocefkcKGP2LQZA6nLVqSQTZDK5RR7357fzKAUtW3jZidSapyrm4w8aQ6HrZfpzDXbZTUvQwgkfbm",
  "key14": "66eUmR3JYDdGh7SqK7Qe6cbb4UwbzZ44s5as4U8jZYdtp1y5n4MDz3dDPy2z8S7mKrqBSCX5a4w4NuB3V5BbwMwA",
  "key15": "53KyzmXEVBNTcqX1pTG243DMng9qoSvgBdZSECVEb5YfxFkHebDqJb7FnauqM6fPMYHzc3FC2pttL527TZUDAzoq",
  "key16": "33QhLwVCZQxGeZ3H8EAMi3fMYGvGpwjY3G94aSYMStMCmTsYAGERzsyQwxEk9ZpwiFU3xrZcgAzy7aAR3FtzcPUU",
  "key17": "37dinjoUuUWqdSBkfHchUoUxxgVceQxGzt1nMHCgLqJezp4TK2GSSj83hGQdcgbMCpjZ39BJTGDXv2h6E826UDMc",
  "key18": "nsiXkC8qeu62aDtpgAKraDo5nEnGkKU3WFE2LyGZji6BPaAHryDrMwCaNWj2wxGXyMmEoDJGU7bhcydZYxe9EPP",
  "key19": "479mhvsSEYHNUkh6p3SaYLEbF9Eqjmi5xbWBsxytyGKCffcHN3DowZjWnLyvhYmxKm4XcHnKcVDWUXi4iy9qHxMp",
  "key20": "2AKqkkvS723gfcAQF8jYDShNBoxhYY5wDJSdtpCRVBpaNPDiYh7pbcUQc2f1NHYJ7hC8gDBgHBEwFY3dDFC5q4d5",
  "key21": "2P4g6yUuFBSr237U4bmdnPpfVx5GZtoyVW8dbBLKmuesTJNqrCN1cPnoeHqGZhkDU31a9X3Z1SdbtzdbYNhjCRnh",
  "key22": "5ToLdMnsvFEggRpWjjSNSa6wJB68fBifhGMRQ9vTnJo7wUAqVgumhzNdEJH4t38fY9SzyTsszPM8bP1htuReu5gf",
  "key23": "3RYwQYvBVMqjgQZT97F1TyASPSUbSoBbKWm5uoMVmUYcs5i6fe6gVUpwyNSUKL6hAoi52BiYtUhgCrsh8sxyx9Ws",
  "key24": "CB3UJazftscoRJhJ2yiEnhqFVQZqnKBgv3z5f5LPvnufdoWyEpKM8tctkTdqGud7n2vJZ1m4brTaSDZupRRvueW",
  "key25": "59Nu3RqfWy7waj7upR6PzWrhsAbsJsjzK793jXyQZqcuukoEd6EcyDZgugfGTvzdkwDmuvsJRSggn8tD41SNLpaE",
  "key26": "3vzkQfKQ3PM4PCn8KwAQZivqGvEo8Q1tcbfBR2XoU68sCzjYxhiH4fQuooscBDB53iFEzDJ5mnD71vkT7YJQh4na",
  "key27": "29x6THXyhRorFAyU29rMYpghA1FgPMiwNmKd5dcig5emBkTjgJuaNG2szy2rS3GguD3kT9mSuif7ZUNEYFBSbLQu",
  "key28": "2VMcHPrqZRZR1ozLoEsYqhDfL2T4MBNyZhQBnys8TWkNRB3nXrKGk6yUmYRhWf1X7pBzisHAALrpQR5GZN8Ahh8F",
  "key29": "4q7reDgt2reH79oYqvrjr8EpCsxfM8YuGnEPYE942mF5D63WE9iAvZD6ibe52SJHUa4LtwZzc6dpAs7uoJpEBDGw",
  "key30": "hQXNWLgGzs4SaawJy5rUget27B3FVTGxb4eVaMCs5M7Sz6rUjpBUqYJvY8MdcMvK2Cctdnuh9hbzCGTzdoG9VHt"
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
