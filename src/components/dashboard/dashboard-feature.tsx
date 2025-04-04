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
    "4npwWfCVsv2Hhtfm4QhSLsz6uLWuqqtMso8L6vq1JUJK9MhLaz7LxsXWb6xDJUY8JQQt6QrKiRJAeMkcCp2HArhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52yF9TGsnvhS6b14mGMgF1c9AnosBKHzRjwPcQyPTixhe1q4GrGk6qBTuAps8fWF8shWXQPfirtKpUuowzQoD6kj",
  "key1": "HoF2bpYmYWsNCiLhXsWeESG7HMoJpi8HpFeobmvhCio27K9X1tuddY35R55RbbC3sK4Y3twrcoEnrHaWoYtX1FP",
  "key2": "5KZAPHsdSo61B8ezCo4U68bn99KQ2Gw5GFjEbt1oosLSuJjFZyL235872vgU31E15DqcrvQBq5xvAcRwn9j3zMLB",
  "key3": "2Qa1dm6NxVt3knxbXPsYKEVBdZUX65yQhXjAkFZGULQbGSbCK1VzTWvXYjTse3ndzMZj66QAmZTNczsa1QvxNZSi",
  "key4": "3qda8AQEwWdr5wDPDnxy2ceNw2vCKE8fmoY1Lyec1UcfEg4Bgc98NtmepoaBaMmEdTjrn9d8WjaC7TKgov2LXTxw",
  "key5": "3LePciCqKVGqjwk2iQmNeKnvCXJkzPdSWGyi7THoLjapsS7cyfWg146ykX9G5VWGhPoBrZP75WRchMas8AW2C7aV",
  "key6": "5tZK42iEmHwxzdpuVP9XSGnQRNMNDRwFZTevrPpepeuYfwn4MyEeydEswJ6qvA5s2PM9LEDuC5uq4Sf9gS7b25Ga",
  "key7": "4ZMtqsbrWooFDDbaVgYkzSvfFFMVArvS6eJbWviP2EsxNc3hVcwNxbKTP6cz5s3puoRaDXyjbmz9sTSstHkPX2Pg",
  "key8": "4Z6shyg4BPaXrGY5RJDNTh1xPJKtpwxxYypLGSp3yM6VGSsUXS8TYVa1bCkbbBXds7xX7mGktzFe2qR7w8XXyGZe",
  "key9": "5owBM8mUggTUUNnmwq32H79hnrjfn5Vw5iXkyekDejXuoFmf5niyKk11RRCzCLm3DVkrmsP8p4NBVWw8T7frwbEV",
  "key10": "5LkXWf9hN4J1GKwanUTqD8VFycmw6gvQ34zpp4xHeepWUuDUdwbqwVPmyFXLWv8XzKD5h7oWbK1pwfne2jNBuGqe",
  "key11": "3EaEE6PzY39ZmgFdCpAYyFxWmg3Z1uMYkQ9VAUSry9Zej3M6MLo11aXS1PGZu5LHoMNRt3yUiZkeSrgK5W36zQwL",
  "key12": "3utdtzPwijKcLgG4jSeUMyxvrWM2g5JcXHLfUdhPyJwfjRc7RAVrcQe9uADGxLLAdHWyC41tYpNPnnTYykV7bFpo",
  "key13": "2ZP1NmFXCQmZ3gB6x6KSNcR7vpMjCk3rKNS2bNwZeTWTCM2yHfd1janogqp3yJ5D38tp1v9UCF3BVv9UPvEnPgwx",
  "key14": "3Pjr7vodmxnQ9tm5nxcXxwfSt4fGxyHLEh8sWbGtjRdmjNtERtmoftZDWqjYrnRKUZ2QbfNX238XXtgfyyM3nPJD",
  "key15": "4Tbfnht64XZixMzmMhYLAkwmvBdMAa1ieeKo4XHAaHEZZRHLxJFEiM6EA5xsfP7PPbeKfGcVgaNtCbc3j25XkP7F",
  "key16": "5t6azJVMZtfSK672hJknMAWP6atNS4HZTqUEG9D6WS3dPMWbTF8c2cKy97d8jp3i1SwneVBMprAfUzE4ZTpWSQoz",
  "key17": "54oz64F1SizLR4WPUpfxDdN1spKgE7yZWZdfwMeZks7sUfU3a6NjydQo5P1MuBewLhjouhCqH8JQgB9DZvNEbVKA",
  "key18": "2SWU3AWzgcZFF8LJ1q17AB4zgrNqB7Fp91hKAeuP5D5AGXsBJrq4Adzd6uxr3jb898jCunmwDfEu8ufpcyyu1iEP",
  "key19": "3pxHarmrsKm4wWRFbGikKJ7ySqvwmWUkxAyb8roQn7gTYDEFE24eyGBaXeCTgm6iCCrGL2tAo4HNThn1U3ZuW3FT",
  "key20": "5nP54tKvQtFtSZxRNXM8ZLy1BZpdKYxV3TCWC7daZeHCpMEpUZjnu3SaUXvofKR8pQjt1RYfTEcr5uZXV5rVmS1a",
  "key21": "4ngKqsSuQLfSkzEmmykkSvAfhJnDAWUCyw5T6NvgZAQti4dtqjho3HrVaLUjZfoB6hndSRxmS2dGsVkYMRpATKdK",
  "key22": "53RAqeaT6fmAAPvTru4onGJeadhgYQXSxH4FoaEvxfe7KECgiWwubGHVscLQBEd6Ko2w8DCBLCUtHQwmWUM8hyjS",
  "key23": "55NS62QuXwKuWGxemaBXqTo9Kkea9zbmuD4tPQpyVAbxjrY5ihuwFDvuCaUD7Swnh7T3dXqtHuX8JR3ucP57sgdD",
  "key24": "2RTwar7ZF3abJJQGBCpovZKAXHbyHExh3ehpY2ve1rBqfqCgvZK7CbWnonca7nEDngzsJVd5v6QA3q4g45ybMmJP",
  "key25": "5zSW1qsvvipPAJbX6nPcZXqnKfSECdJNCXCZS92fPejUXqmvDJPaZDQEQJ4MQvUNu7TgsSE1Lko8Z648SR8WB67a",
  "key26": "3MbiAttETQisuBFyrGhTPGwsN4VWXG1oCMcsgzUbZEVhvAvrYuLCsCMDgqpejLFtuvF1RMjp3czQfRGoHyi6cXbL",
  "key27": "2oQA22m13dA2h6MX6beUCVoGbehtVbMfvozM6NkGXypWTUPjVAs6i4gzdVFhXkJ1n5dC4Vbi4UDGSETmtE7Kp9r1",
  "key28": "5ft4wd7QTg978JkyRGRPsWHvHPahBAL23gQwRCsgA7bhz5tiQHqDrNAdu6SqcgaHeaefMuY6ADfSt5aMro5jHop2",
  "key29": "3xUQbBCQzWkVAmHcu4FPRZsX5gcrHjgLKk3uvcacGdoCQ1z4fLV74dbFQwzG2jUm7WQrnc6yASC8zHPsVAzxcc99",
  "key30": "5AAxpkWU3PkCHXe6HHRiXyZhDsQVFpw1Xyr6qyQ8AZLrQGa2EapBF1m8RBLFUwZKptxNLgawgivTg4YtKHvrYQp8",
  "key31": "51QQ5FBe94rrsyuVZf9eDwKNWvdm5sP87JUDPyaAYd48gqqtmE8RFD8c7zYD5jmMtkXnMucbYCLCf2NAhPjRzvNv",
  "key32": "4WtZSn82h3Vnjaa5ezyWyHGVeRKSmGr2bTM6krNCbWQ6qkS6UBa4C9fTLHvF71d3J46R7Cn29eKKvRwWFTKBP3Dw"
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
