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
    "64X425Px4cASRtUPcyuhkE436mLukXrc9EVcQzZQ5UNYBWuL8sGn67tqjbEs5mE5AzWG9BxtRZ4FrgeY2h3i7yQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6Ey81uj9tmp9j5FcGTE8eWcBegdmvmgUNuQkFteqQ9kTjxcwsLkN7AhMwvJDJjxJyfvYyzuUs8tx94mDpvqpdE",
  "key1": "5yjzj78ioHyzz5RbtnVe5uYdUzL3yA6DcUHE8UzmehcDhMuMbVorSdDKH211U7zXhu5G5qabKhHMVahSXdZEfMZ8",
  "key2": "4WeuNiCrahw3BMWJNy3brY8dmQWLxskDDxPdzhveBWLokwnss4wZs762h4Ga9zezP1c3WXkGHSfQxzcpqwbJ9FTP",
  "key3": "aye6nYoBQ4PapBzi4UfbG1CRJusSSdSsYjEc5kVhPq9wqvhHUi4J4hYBQYSicXCeVBUKFqYekonRUk5MjtiBzaL",
  "key4": "5UGDcHFDZDcsGJQtuwbJ9tfXocZag9P3RVZ5wW6poS7TgvF5stai3S9YAedFJTWLFYJaNZahpDg2SREDmdmezgbw",
  "key5": "4sR6LWWe8eZUdTfoLGZ4HfmoNpy8xTYxNAsEJHTxgRemvvXEHxRZsUVMTKM3a99Gg8gNntnXge9ZtzptHiM5Be1e",
  "key6": "1KFa2AM2ETJZVpdhcCse2TxAV7upnuNnqjcjLktmCYPAnDvxvo16mkFj4Kc6guFdJE7NJr35BcbNPUopuk5UXcm",
  "key7": "2CZFakwwTCqXTZG8bZR8Gvuze2eet4uqgHEMw1Qn38R2DuP3vuEfb1Gwuhpw3s4Q2t1EXtH4CgyoAXgns67KzJ2C",
  "key8": "5k4r5MUmjpUtUMTRiZBWgiPs4DZqgQsHqm6vyWj62d9JYqq2Ay8oRgDa73nTQW7WYfq3oCE3GmeTpUto2NjJQJay",
  "key9": "42KPE16Uapiw5EjtnQzVFPV2Ja4dkMrr56j6yW24vnRDuYpBdEQ8uPgnveJ7XSmSj6yQ4s7RPL8sydXvi5unzbgA",
  "key10": "3bZJ5fqaW8NY2QuKEKRA74KWLFASCAmiWgJFMksCdRpo8hxJnQLR8xwBuA1MBiWHfErXhNu7jKF7kCEND4FSnAsa",
  "key11": "2WL2jnPogJ8qndg5V78e7yLjFyEvXv6cRchwQFX5w9z45C22VddorEtmJVFJ58NZEDE3BkssHCjn7tbsrxoENyd5",
  "key12": "2gDiQvyHCJAMfeSUtRppFzYAP48ewoUe1CYWNqeTGgDDb2qvMtC8zVSbtUcC75z9rwegULDrBxJMvBzqTGNztxv2",
  "key13": "5RNzy7Ggy81chfGCnvsHMCrNVaGZVDKHL4EuCgnUC3t9gjkWzj3e8VvuvvGqc9X5SsAWg1mVTwgE49NGB2yn8KTC",
  "key14": "33SMxPZCc76Artize2Yvuri5GSMCTg8HvJnMmSxQJfGhJ1uvCQDrX4zckhrKFLAACVoe2rv3HXuDwCGP7QhXDDrs",
  "key15": "2b9qTFMmW79XXEKyUbsE4gKjhJyMqHKvncMYE664YLsRRKPEguJ8gD4wRZxjfxvgKxAsWWy8TUvMyCLn3NqUqThE",
  "key16": "2R9FqY1xPoQ6tqTJ5DcKaxfdavEKapzpqeyxZ2bHrA4J4JCwchaZnPjqEQ7iM2BqKKEfspJxNweZRSiM629hwGKF",
  "key17": "5JFLPxXtX6LET3ycNdPL7VhEPhswsGagrZ7TiFwiE5fnfHRwJK1gP4bBkKHKjDbWbeBNi8X7zS8C29HSShuxaF9y",
  "key18": "BTGr6NNy8VSeK86v91xxe81g3mBpVzEmAV1SGiTTFHYxXGb5iVWMyvVjtssuh1mkPkztbiuUU7XHQfMYQSDjTYT",
  "key19": "4bDevKygzEdBS12qiFaNbHkHd4Rkj6NbMM4rZWZgD5eEm1UXit57gEC79JYiiuuK6RxxH8cP4P6eGbE5dyfqzbGG",
  "key20": "XjuVNZJsyfvD56fQp8QKT2XuihFkC9dYtSNAZkQFaS4jLmt7odUHrvqHYqKWvS8pgzxMF1qfShbh9hzfXHsVYHa",
  "key21": "3xsih2ukFHSmJhox6KwZNP6dzx6ueduncMLTLpZ79p7GW4VJpK8tAeB881oHfkZBjLJM2k4do3HQ9eFqtucn71Co",
  "key22": "5En2nJ9uk6CzC3N6QEjgpbc1gsqPMf9TTf6PYqC3xnJ4MbAXRSpUKiN6RQsGYeMAFhcoLrLyNe4siUdcVaEuhxjL",
  "key23": "5U5SDsDDtyUwsmLcTDsLk1EmXrorQW33Tr7VLzcmqDH7AZjySyN2eq2CmYok5ibbepoGovAMCcD7rD75JQBQYtpj",
  "key24": "4y1KbeRRTnCoFPaVPZBma6xBQYyH2eShJzgfhUCpfz71ChMrgi6VSUypAmkPSJGpTVMuarbZETxeL38pQTgocJqE",
  "key25": "3FF3qnAMM9RYJEpm3w8hBAJqfahi3XBsrJQuy6jTRjekDB3YA5X6V3DyJ7CLvouubFw6MyyQ35Cy4bevvCdiuym",
  "key26": "4qjJR3s2x1PP3GTKNgG278qiwcNTYuYeVYytotycuwHNKWxtJKiyKeUNwhusWRFsUcnq7S3j34FCbd1NysxnFXWU",
  "key27": "3wux311yDNfVvdPnk4CP8YnG8b2Hr39WaYFd3pQtRHNxkgQ5kUwu6G4hqzPUKkHDfq294Nz2HGhaC5BJNGcHMza2",
  "key28": "5zFwkZSR5M5mJwfMkx7gCAJK5UW4UNxxyYo3GxqVYyoFu3iX2TFaAQxqHg6q4exiFKJhKU6Xn44JaJEJuKRmZrBf"
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
