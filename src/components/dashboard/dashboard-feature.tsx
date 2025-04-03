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
    "5Z1YB1XDQRfEeaz7KhcgchmvTPBnr27sNp3Di7NNCbixKz76yPjYKhuCR9F43GVZVTNnidyACPbt59uF9MN1m934"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QrW1ZvdsyXB7q5mZxAdVAiBztJsHKgyAV3EpS2c5nZzzbYs1qNj9KtJorxYbbBLkokFy3ZJFeJxG3U2oAwMbEbi",
  "key1": "3GBL5VkKDr1xdfYQuHrTCqwN8WwpctdY443Kxp1ZcHwHzbCajisU7AH2SpZhzst9Rdvx22fzYthHibYpXRZ8jirk",
  "key2": "3fy38BnfK187eeseXiv9s1JVnFVGs5WtawoG7AZKZCu49WMzC5vXiDMrXEDXzUo46Nr9gmgwKwsCekF9YHiUvBTV",
  "key3": "4uR4kHF4eVfRcwUWP75EvAYgcGw4y2Wz56WGbWWYZQ3qTTNiLZcFKDQhaJh83m5yqdbCvJ2ymmWCE37LZUZVMsc6",
  "key4": "4kVswTCqjpYreX9p9yjJy3RXDw8tVFhHRz5ZS6kkEFcSzpqunNebpzEjBdJLRNoXWS9Uc4tzrXj9qSyHE4HAxsB7",
  "key5": "VNQrX62GkLBdpcNwbPqrSugiDUtSa4QWnvGtnbDSx6g1wTmteEFQEscDDdTQaBGdVgCtDVtEaSaBpwM1EjLk2QW",
  "key6": "4tcPiW4SNM9w8BBaUknQG19HpMgTeRr8Au7ap5coK1TBYBQoF1RyTX6Gjo6Hxpn8xtjtr8L7H7NvN9gX2k15kj2b",
  "key7": "JS6h3MWMJmQEWNN1gFLWQHVKmB9DSgKu2m3GnTdHZbn94QB4oPz52nrKYEMgy1CLtbZfTheyWacgYL5Ef7yBaDX",
  "key8": "5g22KMLe8oKh4rWaSAXVAenrwD1872x7SbGRzXM5dscJFA9z9y4Pgn5j9W1JDWxnBzR8WTYgiD88Az6L1xjVdUTT",
  "key9": "2sXzaH89akdohd9PCBmqhJNMuWmvfceQu6DFynCkrUHtVkgUqs1pPeiZgkB43vh5ciEMboMLXBxg8jB77z2aEQaV",
  "key10": "56ji2uPG643ytB4jMgfvRrzndxQxZJ74W8dvDZYLTD87QqbsPfpMZNCvTzseFuGrBkx5N32cdFECcc2KxBerYDk9",
  "key11": "29wtoNJhadn9A7pJaGwcEvWZN7q8tkPx7RYaJvkBhMbtQgXe4mtFemDZTH2NJirTWYWe46YMffPHSGQ2sFoBb6PC",
  "key12": "37om8tKCLRBNt77aFdbQ1iwFs2ufrsWVn63SXffkwwnqmq62VUCyQCLNXKJfHLqX1jQeoaZqb9MCMaAGrBnq3cnR",
  "key13": "58zsigkytxGyo7EYDGy9bWstPjLDephUwxV2sSwinNv8513MDVEc9YDq4TBEMGjfPj59bEWqkYBmZpC1S3mLpQTR",
  "key14": "3PrudnvgW9VYQqLtE1U3evfhJZv7MNoPCHQ93wZVjYxFj3LP5o14FhG1vHJ6MxhJYRucmd3iTHvPQ5mEoVh4MD9t",
  "key15": "37w17bcpgQEBj87wWCzzhWV89TFWiL5BC9dctDBHXXZC5t85jZUyKZKkv1B2VTTKH3RMMe6XuDkXnXwk2zSsPPEM",
  "key16": "4E6ZfyuUMRfH3tvnsByq327EiuKjrfHeDtAWeSY8sezNnDgpC6ckrVMV9rBx88gcqccggQr9SnxmqdQfdoFhupsa",
  "key17": "4eH2J2TERGP9qArHdVbe3k4Ki2DSx3CRUjZrhMM3R1C66agTqJCZiWhg2T9UGFZ9gNpfi1p4Wj81o9tWscE9b17g",
  "key18": "2k3HWcF7wDg2DtPk3NzfUMamt8ffsqhkWvCmagGhbP4cDxygoM4YEwviLXnoPcGNGokeXBNMRei5VHd9ipce4kgJ",
  "key19": "4tSUb8VRRwJvqzqYQxjapU6FkewPyftnofcgPzMLvAxrDZUHre1Ybh816BfiVHFoKHVkVYA63E2vHv65q4jkcr3z",
  "key20": "3GZyRxSrM8sh7xwB6CWcgBF3Q5CG23a138kSQV7ZEq1P3kJtEHJq3CZwnAxxmx675i3BUT8RmB5AKGzhocYqsfkh",
  "key21": "DQ9jEWSf4cXud2bcYri6PZjKrAbk5fUkyAMw63rPJ5TmahJWRBUu9hvN1wQt3wJTUgRjhbsP2g1kDPig3XQwh4t",
  "key22": "3bHB97aSacFSNLtpBoZ3gyVErbS1sHZGXDXUTTmBoC3nHb6pVeZaWeVEvUNS1473kGxHmjjwxwmAxBTqjNoSrUgw",
  "key23": "5MFuoDd33QUvJmHZHWhbyXLzNpPjKKKLvRSi4gNcQdeT63B5R7pQb5NaBDJETUYXUr8DPKKiYHnUUvQEXEMP6J1x",
  "key24": "5hHbGvTN5HN9VTRusaGVq3Y167Bth6SQzYBewPTnFKPpRB8rLDUkrxbFWukU1sgtvrWW1QLzf6geZyneZEVxRodV",
  "key25": "3UoH8SrgLAt52cABhi4eiFFwJigcLxrZRQoRDnL8eHiuRKtXHmKxMBZg1zYXo5i1yzNkDnND9mmLDQr8s3U5kW1E",
  "key26": "5NPKE5Uk4JyvUkA8BSMFa6Dy66baDHmgC4bTBa3deTJSyqi27tXW8VFA6L4ZWQ6HJzwgzvS77JJpF5aeWTYo1uNj",
  "key27": "2yyqpv3ged9Qvq8BVV9iPR7GM6jepKGAn8L4gpanfaoanTU67JgeaYPe1SGjceJhGJSpkgcreFafe7do55GN858R",
  "key28": "65sdcgbzECxaq2CnGR6hnwrP4scLbYJXqngkaeRMudAGwCvxBcgWk2VnoeakZQywXhFsb6W6W4U6BP9Q52zsj2th",
  "key29": "3nF5au7xU7Y452W3i8MPHXAog9vu4RJcS3DjzXDN1Lx6J4ekJM3NEqxpdz4YaDz9dWd8beTYUdaHj889yVHx8RZe",
  "key30": "2vEoUvWHRgYgxrSN759mNxzj8wfTr4Z4QGa3Rh4JVXTXZB7DHZCjQftLt9nyLQm6cEutXnVFpRJ2Kjt4ze6agHWE",
  "key31": "2bYWN6Gwcs1msTzUATURS6KM8Xcedc5FSJuP3y8sFxmDpXug2hHmoP1AFrceapz4cEXyS1wvwK5GH5QRtN1vkyKd",
  "key32": "4h2N8vfiR1mCnMUtZFsB9AZxdA4VMbw3oo4sfBbUpdYjkX1vMK7tEGGmoD6ydz9CZ4smx4jhhu3dBuw8uk1fGWFJ",
  "key33": "3Wr66qH76kn6S9fK3kocQVrUCkLvK7giyMuto6NrV5mkiDusVCaUHddy1gkkH3Qi4tqysZaTDrNvWShpiNquw21n",
  "key34": "4PVmKZPShLJGT9k8QRsz4QSckPW9isWLUzZcvqVDuMXDE3fcb4fRksyKyyRGzSHgPshdead5VUtsMrN3J68Fwhc4",
  "key35": "Y58jGUhMcytANjLR21ya5xh8Xi3pRw5QWBs4biu2UkQZ4q9dabAT56rDyoyC7RPnFsY86LwMWvKJP1RcjFerNnu",
  "key36": "29SRmHq3dg3Z6gBvfYKPcvAt49uQuEvYAZebsnTDWqLkwodBWY7NuceK6q9DiUW7KxDHoJZHUfekQejXWhMjQbXj",
  "key37": "4ExqMrncfcwsU3FsWABuUpsDJaEhSLQYoq47gMqWYzVGvf8LfcsMDmMQssAJzMbHArCFpvK1Eg7Tptj2DouDmpqz",
  "key38": "2dzpRedZBf1gmsVVs4W1mzmYZi4Nd36yre1uB3H1f6vceXZh86YjpR4d2cRo7BHk4NxbzCouZkmurzuUiZSEWMrt",
  "key39": "3cjFX6HPWx7X8GvKenD6rU7Uii59RXtwoGWvkifiHJbPLJXsVYKCDyCmNrFx2ceQJBpEti6idFNFkQETn9CT9kJd",
  "key40": "2J4WjrXfdZNm8hdEjAbpdKgdYmVDpS8qhkSUz7Bsj2sxn3oUoep3RBUbJim6sVDhtYGEMmyQu4AZpfNd7qMWgs6u",
  "key41": "4zdZ8uHJgFW1Kb8TJQLEgQaBv9VxaUcm35RTbGqBGsrphAJX8bwAm5xDiRGh4uQ4LhoG5jg4FA8AtaKMXKDx3cmm",
  "key42": "5oNCxcNNzHhb1qMiDNtqf7kNSDNnc2FN2b7twHMw6N3mX2VARqkbYF5Cp2zf2YWgoEEoDNyJXDbDLeZ38sLDdHn6",
  "key43": "2YemgHK5SK7WprotSdQoA3n8a2emWeJu9Pa1EF6VuPnRC6V4ND3UoBBCqh4LZgSd8L9fUgfinqNtY3U2U4DN4FM6",
  "key44": "2qzx7LBZKMBXjep1mWaGHRTBoog1N1ecfoDiKGPd4GYaYGHHu48ReymiqbVELZR8k96oqbs9CDU9irDhGjSgyJJ7",
  "key45": "3NTHuJZLW8n8r13rWHA7gFCHCEtSr6wNCgFp8JFRRNVB8EBCgcPXyPnh5P1kkJLwVaX3p95J6EN3uK8vrMw7Jugo",
  "key46": "gFE21SKkiVHuLRftKbgBEiPRXAi14yYvKqfChtbP2EanmmF6BxqmTzHQEuMW7ugTbhAwRbZLSNb1YqGGGY6GztP",
  "key47": "3EiAneyvpxNqrohgRi42Q4Y8yuM3qM7CJBje5qPNSPwJwaEsEymn598nNbUUxQ5cFaWe3GUmB3UmveKh9ZURc7PS"
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
