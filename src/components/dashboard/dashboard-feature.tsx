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
    "3T1viKQf8gMsmzYSaseiivKEjEsYS3ScBJCo57cKX1sS9QXMYtCTzJHZXJwmPuwrNWqwqGFnxbb7jS1KG6E3qfud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbSaaFKibax8kSk8d3EPgLYsQJdsP4Lsj3PVinSVqgAN9RngBX81u6fq91nWqoMAAQetBmRiwbGPJtUyiJ8K4iX",
  "key1": "Pa4YWMromvFdrTuSMBYoDhc2EHZynpgnXFZCMPK4gHKMMAi1WS1qfERPCjoAH72bC5MdB6SBFA3EN9FBt6T4h87",
  "key2": "2DRxxXFdDjRsojSwswzGkW74rxsbGhWFfLJMonT6ptwnJHtGBtooizevffzj4dhp2K89Cne35gT8DHSa2Qos3pXJ",
  "key3": "4oN3PMvyfDHa1XsicSoMLUZDBL3nfiVCaVAHnfa31Fow4dHgQXMQBkGD3M354pJoEkK7CBzcUxA3T8NHJeWqFBFK",
  "key4": "5qLHjJFAKcq7iPYSEgiNYXnb4cHmk7Vhzxh2Mmf6miWXggvEu3Xt25YVqcLtTiwZeuzkWqVrNoDgHWq1QAYAa1BR",
  "key5": "62PcA28vxEyU471f9312DfS9BoHKDHU4EtNPH4K4ePbXvnYgUF4wkSMA793worC3JzLVMxW7YTJJHNFLzL2BRiDu",
  "key6": "xqU7waBiWYA52GTYMtXso2yRccsxrobmLfVsu8HEZFZExSDEhetQdmfystHQajwyxt65kGAud9StioRFKQVDYXP",
  "key7": "5CWRJ7vLyhppKVqZGtsUcZcz8amtteM3DmoDTQ48XskKmuET1agXbo9DPDtQzAvc4NDGDrBNmp3YdWsZhCtuNE2s",
  "key8": "214KQtsnbeAuZnw9e4js51TAd6Fv1VGeiwU2E1A3jwCyN5PGADujW1JyRLDnYeFcoLXhN2ayEUyZNwvYXFwTqroC",
  "key9": "3FLjnrX5uMCwHreXFbAksCLvrVEwEyJhBWm67Fz9cbqcHG4VWRSLdUEMDoAes3zTSGtgnTEWoX3GU7nWsJsGe5K3",
  "key10": "4x4T3CyxHsmL4UbWcFK7r6TWrtgaqnewgEWEUEp9CkaCx6sc1reRo2SM8FwszU15UU7NEB5fY3QNuoLE1qxpWDy3",
  "key11": "4oY5vna7AcDjrXePHbHuEuYjNansuM8idnVFkbbuEXeR1tjb8YheiLgqF7ruDVUXsSv2qGL5nFWFxjwBTw5nfjpT",
  "key12": "5t7kdVJWvPp8gif6pwdiDvyCaDo65ueeszN2FzzboQDcJRCPg7aU1V7z53W92wJaV5dbHbHZWciKpftCwSTS5VTE",
  "key13": "4GYy5AEmvNUafZpFC43r1DLmCih6JrFncJeiKwEi9LEpBn26XnfyNtv6C39p1netsKDBNagsReN66EbDRTj43GkM",
  "key14": "4kBW9uNcK1YocQMF9dqmfVZwNG5A2uc1iDSuFB3fAKrwnaTGshqJBAXUZmhXypMnPMuYxdPjGYKcEECYiYo5a4Ew",
  "key15": "LveGVBEGyRZ8Jib45NL5GVSVNQiwsL6c3qtBZYvD47DYH2eaT87QpZ1rTAq1W2B5G6pSsKviPsTFTdE1rHTsbDz",
  "key16": "2hvaZQ3AAdFGnuPdKmPFYVFdo93FmzufzLyJBLUtahTZHVAZ2u3CsKJKBhpP8vaDVLBvFoXWBwyHrvnqxT2bAEpG",
  "key17": "2odpZEW3LKdKaykVRgqvJmfE6bDvcrbqgRngLnhvN8Pxesx4XJ6qHoNB9X91DnhruNu5NozuypZXfmQdaLPcdQ1a",
  "key18": "5D4qtWqiF4kjYwVE9SMhidNBZunfEk4hyZv8cm68kycY29MTj7bfBXnj8LWxWpWfd1pgvTJgB1Ruzp9XHVE51K7D",
  "key19": "t5gdLQWvT9AYVEGqPMN9YTiALnNwaZaQdRWLW1z9UrEFzSKQpFfqXfHBLv5kLNivmxnJMFfKgHm4rWjXEQFcvVf",
  "key20": "3eNN6ZVKzuqE4po1fP51abZfcsvtBDmoXv1P441ZWhu6aKVhVrqKfKFGDN6oWQD83TphiupLGwNMydESm7PgRG2K",
  "key21": "3UnJ5QWykAvXicMaqPjbcLjwxgcQYDBomufXbnSKxU25hPGjAGf2odwi1W5j9C2z6cWvQ4Xs3vpMNSABTD1onkHv",
  "key22": "5bfc96wqqZYj88P8iVBKqG6sxedwyKYJ5acknK3NPPuvQc9vjtYZ7x3zU6HJQAL5T21LzA7W7NwnjoWA1PFiF6Ec",
  "key23": "3cYfSTAdz5RkmJMPFJJeTLKBd66yDpqo4ueG8oHnE1TVezfjvXFocYsWvYapHhSBy4Y8bqEyzKDEiaQBCw2LYrNE",
  "key24": "5KsbiGG6Ffjd2PNpvSCDLuzkXGSr1rtmFFWVGWP1eJVvDji3S9G15SsqUvFLV9PzDJ3NBpnKrxgNZRBfZgb1Mmr5",
  "key25": "5FVbbiFyjBXdNzba8ootFmmaou9tDy9SFhTrZuhbKWbpoTbeqX6gAkz6UHffxAEuCBCR5Gnw2RkpMVnB5S5jnrAd",
  "key26": "5c1gJJiGCkJnHy64h4XXkc2rhik59Zs7FZyAQiLFDBb6aw8zAfYHzYv1ZyXe78hMkyFR8VyeGSw4vKERG65rwyp",
  "key27": "3Vrm93kYDPgbEQbzafZbMMnjedhm8WXM9anghq2PG8odD4tusqAPQfGZpcD2dE1PFY2hLYQXRY9uby1bLXmeUFWf",
  "key28": "4frVdivWB7fe1VkzVqDJQ2M5NSVPxuEdN6bmMqYXkjqp1Gq5ALNqgAgY5iD4nqX45SbUJyQR7ks4y1VFmZFZCwZR",
  "key29": "2NRmQcdK5ZbUiK99U2A7sZk9bQ4kfmioYgAa3Y1qAFuGZPbpUZJQCb6racG3ASF36e6JSoB4Nwb9A1PbmjvK22nQ",
  "key30": "5286cycGzutG7kCguMop3tbvm4YbVWfDAfYHpp8Qk8hexsCfbitZeLJXJWLa32shEzQMUDdi7QYv63q9f6mH5HAt",
  "key31": "3v3YKsy6eGUCUcYArHfUaNwJaphuGdPrVbVDGvhrPAFpGPvauQEsDdzYaSknpW9dUFjEiAEWYti8EVmM8eWTAi3Q",
  "key32": "J4ohuMi3TXTanv57jwp9dHFoYkC9csoFTu4bKx6hQ7BfB3bdJDycf5ZPE2pcB5AxtnTqsXFuaDXM9eRgCFkuib4",
  "key33": "8usQzAa9pXNLhHGfE2fD2NEBcZqcTUxirgCa7ATLQfduSPDtPVYJgDoh5JjmwtfKLXZWGLRQ2kmMovrXLCJ9TWy",
  "key34": "24jEvmxFzX1ief5rqymBVRhbND7jLTjmonXzhxQihy63amKSZm74LwyEqAe89AXKpL47Sj5A8MXVQ9jM1rv95sAY",
  "key35": "3KfwASw9VX8oUirXvbLPhRub8ow1YSqQPJvU9MQ5r2igs5Xg8eXc6RRFYgt3LjcQAj2TMXFXisn2WVtPkcyje2rt",
  "key36": "2zgiMHEyu9r5ujSymvnShaQL4Mn2rhPeVdPEbQ8csJNo1EHyj1aMxXK65bxpp72kmpK6ibM4wMtbzNRiBLxAdV7W",
  "key37": "3dEnaPm6Fny4UL6NWX2ZBtSrEtcapRY8mYKb5jMq9hqEzsZhxvSiT2YpeXZYkMzshy3b6qJb3q481uWpDQkXDDGY",
  "key38": "41ypXPffeggVd8G97Z2kVaTF3PUGjnt6yqjVsKsYLijrcqL635Xb8B52VEFZjk2HWAHB62aehv4667XYCzAUhtE4",
  "key39": "5PXFXxKnMLtPiSUgMZ5cpk3VPJQSmdDQuXK5M1rz71Rt24vLmotV1T1ybxUJm2L9wSDr1CGnZFPg7Rpv8KuJ5LuX"
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
