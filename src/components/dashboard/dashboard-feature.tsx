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
    "4ZMEzJqGnvLmpWrr4qe5R3towgAF4TtT4sjXaXrRRB4r8EuoSZxHYSE3hjh3paABgH7gnY1b1iFVsUNPuthU4oeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NQhZQdTZsCaPTU6EgDWqQNd9kiaRaDnBJbrFgwbTpL5UuPxEbLzw8tkmwPhK5fthdJ9szA8N2ULg16MvdhXxNz",
  "key1": "Yji6bPrSaReKHKteSSD2MisKjtTwMpKqGGyfb37YGGgqEee4rT2zTNSW9mWqbkweAY7aWXY3bmZR1zyvJtftkmK",
  "key2": "5UJLiWqbVfiLyf9ZiFCtMvp9pSRms3djtC7zgtVucvk9N51DXLcdYA424xYXocxYBxpC9ASvcB7b3FHPppL5gQxf",
  "key3": "4psGwAyhJ9g5rSWmNLhrDczgBKAk7AdUNXjYMN4gjuAgJDNEne45vtfcKmKyme1GB7mMMQJzqh3nckPpBev9ZNcy",
  "key4": "rkSrAWjtkvFhXezziMR5r1tC8PbkLh1uy9nufmgUd6dGALbvXtnUzcW1RPv4y8VAjZP3TG6dzz9g1Gt9gXhczGy",
  "key5": "2wXFAZMi7VuawVD21T2S7BkEjFCgTycvwczr2EPZr5qCJLUZ6JL4VsGht99MxJKkn3GCqbR3iNVqqKdhLbBbd6nb",
  "key6": "4dysQtdPisnS21K9rti1uw1rCnvrapNtivUK1LNxXo48PT1tJAbZAixA3sR3KiABsPCHSaqCsvkEL22hVJCT5cmR",
  "key7": "2ywbz1jUZDUH7mxEuTzsYtDwC1BpPTHQTtUzLVMPYsFkRy6gKFtWmMnHrmf8UR6ErXJ9jQvLZnY2pNYrgmEMy4sM",
  "key8": "2kfhkPdmd5DVCCvFbAewxHmnoFYY4aw2Agb4mLsXSwAtbPrTEiuZJ44ZaGNkg77nkWPq7mQiUdd8MFRGdekWy7Ng",
  "key9": "5mhg3dGqzppBgBZKETMXyEksCzbQUAP8VTJNUJbGayYWCvcLj3jWGEebTCsn23oa8SUsbMck9LKCRbGQ1J3gmBcD",
  "key10": "5q7dbyMRNYGU6EKaBFbUyiTPMfMGiLLMtm2CCmS8az7jHE3xxn2Lf2p38FL7wHtH7QG7MBQCRfFo315WhSVKEUk6",
  "key11": "4qS3xH3TW7Dih6Dy332JxGbMZ9zogvdSsAAj973oiDqKhgHExasDWaGf5oJZW4KCBKACvB15LDS6X8kH5qkkw8i9",
  "key12": "2p1Y9iBRkNkgNHZDExzcTZyhRzq9PQuWNAxVRRNswtyQwkgaJ3cdgHjQxser1C2cVGz6GLSwu843C6WqypaGVW62",
  "key13": "5QhU1ncooH3PQDZcqwgGjfNzcBmkzzHRo5RtSCiBwJQvis6dAuavw2fHhUFuRDJw7oAbzbQV2qXdD8iLvGVGvZfF",
  "key14": "4jxaip62ykM3PxsWVP6weMw4EWkmViGi5P4cfVYu8QByeLbvqHXcrNTxA7Upf4LZXW81FaiyaG1wdm6Kss61bYP8",
  "key15": "tZpU589Kg3xuVt273ynstSUTKTRm6oJsCbD56unVhhrfUhmkaXDTdQjUqoPqDcw2waF7V38VGtM1oKYhLrSTjmf",
  "key16": "UeWELdDZxcjXbxzghYCzEwympHhttvPNECjFg4d8ns6GtsmbhLgRYhHpXYNp7ZAvw2ce22GoDaW5GQH2B2YDQdw",
  "key17": "5itkLyG6SSMa1nZFdqBB7V1gLFf3ypnVgPawn2DhoKw8uPJ7QAG3oe1CypF6R1KJJRFaeryUdbMX9YjZZJpdeDkA",
  "key18": "39DLrCZHxWmBXKymyk5Brz9DGjTWiAo462a1P63S3SnHa3zB9mrhXrXCwy1xVvaKpex6M7PW2r4uBTEePArPpd58",
  "key19": "5yFLJ1CoewPpBQa5vJTxq35ErCtU4ncfivbxB6oxL5mqNx7jFijBcKVRDCb8NMYnBro4eHkX8RTL7cLosoaUwVQh",
  "key20": "34181CQYPLDG4KrhkH3iXYvkyDejcBgaSYpv7oJX914iF5DvbRh8ktSXFHLPUbwxPE3Kf4fXYWNyabDPhZWzafjc",
  "key21": "5ff4H8TWYWk6sEzgzSH8Up3Gz2pYzEvCCuaH8ERh2W51DQSzp2JY2mYUjNsVrDZs24RESWS1ucVcHQvAhUiAUp5h",
  "key22": "2icHWBPm9GGXr3A4fYTejd85pSLUB5KEaTRjYgZGfpCvTJYaZzJxFtLDzLzRvusDbKNSjSKw8JDRq3pQuVRX9z8X",
  "key23": "2U5DBhXB9oJtFLBGvtSGXJ2FRJ6FQeghMXPfqATgrbyx2bmK2A848WKzMbZHkTU7dHoizgCDWAHPhBp26CCz8jif",
  "key24": "2LqBkSWkyBfUM8Y5PE7JKLv69ETAeP1saaBQtr1EpEBnivyw4XHfcC4GSL4qxjbGLXaN2Sz7EkbAQDnz2fmpHe1i",
  "key25": "4SrpeMWFEbXXBqpiXgaJPstzxjPJSkShY1AuqHuSvNGnaPNNC999XWpLb6uphC3Qc78rMFnpJEnsfHKFVnLz261J",
  "key26": "3y5oW1XV6N7SEFwDkcQXFo9tQANE4MxueTT3HgANpo8ijiXt7G3ZUUwq2iFXbvTrNiPFYaVCBzD79gPvHpfQ75vY",
  "key27": "5a1g3nx3gGo2cnRghSuwpA6RrfdDx9BpoHEne9GwTHZaZUob6VgE6nfXrH68ds1MnNX7y3T9X6JRPhPcBYX1ZYfD"
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
