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
    "2GwxHaqTu6SdEdDTFikf4w3jiGS16JuxaknJKFCtpFYFp2oJF47S22riH1NWLjJ9TLxsdb5TSLxiVnMkRNw2nnnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEfKjfKLkyrbmsrw7hHfoBVaPfqgbfHCYQyoY7FRkVnxPx5S8jcVsVnFixJFUy95MYEZ9vSPhdsorozFk9FLWc6",
  "key1": "3Fpq8VSdPud2LyJLjEo2RizA6f5HVxiAuGffwZTV36xWnso1gDxH5UQ5mrQo7ZJzn6CFnRm6o1g3rvYTSsuhc6wE",
  "key2": "52bfDotaRchGq9FpzzhJB5bkxKcSLpiCJEXauSdJdXBsB6voodYtgqwMgYGeXgqHGogWyycf54jukcwdQno2oJZp",
  "key3": "5epJf5nRBqaToiqghG6pqj3vChVceus6fU91iHdTvcQyXMPrcNJTzRDng8BfqrWMQzDXehHWTzVeVGVUTrLWVyiw",
  "key4": "4vWf147jdLMHt5vgj4xSrGJfVoLeTftWk9ULcocqk26NtKX5EkHedxwNnCTv8wRfngHPsd1qrLiooNquW6WoSDEX",
  "key5": "5bLWZvxAVsAY1PqUc5sp2DESkFyZcRy6hprtHUS4KFmaHSFGcLiSwhH3EySz5gXjyECv2dM3shXFBYgxHw3nyDyn",
  "key6": "4xtkmWdc5ev9EqKcVVWBnmPQsSAYk6wvAuyDeZd4geWG4NDMZG62nt7Y7CiPm45B5BHW29MWdw4iJqH56av4RdaE",
  "key7": "2ZmFaMzJYZN8AdAmBJKYPLrz5HUYcaRUBqA1LFHSxNsuY21smcyTzh5etFXfr6NxxPMvFRtSB6ACM3mAQnmAaDpc",
  "key8": "2QC2BhdnLWPCKqVDg9DcAGRsvJrfhknc6H9a4sa8jxqvQy25fAKCoQckYAEoVLtQZyVFQJzVQVpHApininhtCv3G",
  "key9": "55GhH14whLpwPLmrATJ73eBKnni7qEo8m3erzWVd8rTnT8RKL3aKBqxfNMQ9nbonfj5bbwpGw2c21KVZyKv4hLp9",
  "key10": "2NteTdhK1zj8ZBkBwgcyB1t1eTYwH4yRzupkEYoHn4xgA2DUGKAhiCjPoxMkCDsxHzMYfSnhwac7Lt5CHcSdNhv5",
  "key11": "4wKwkyGzsTLaoHiwr7dobeP2ZJ9gdL8HgB8JqyWf8822STM1oYdzdDQ58X5mV11BLioNJozEwdxTfLGdDsAMvE4b",
  "key12": "fiXDHFxEELF5i1aQbYSVVLdnZRbrqEaW4eHkAoRXjbxFF6MvQBBdq8GTENsHJM5gjVAvy9ujHaE1EiJuU2BvRJc",
  "key13": "33nckzs6aRqakEmsb8QQYrs8s983wdqck9rgrANgBtpajiBE6TXHTed569sQPdwQsSefvP68M7HXsmo9wY3yfbVB",
  "key14": "5shvz36bxHeVtA8cRjeZeDTcVvc4ucnGbXW1qdX1pZiXnAHAbeB7m2UckZNkK7m8QnNDAtnWvy32zK9fd7LDDJqm",
  "key15": "e8pt6qFqNpbnJqCoF6Liw1J32kRsdBMLo5u1tuirosdwWAAKcWzxyahvogUcDvF3myGfXi5eDTYovPqD4HgaCgM",
  "key16": "nXXowZgqZsRcJvGVDZsv81QZG3s7LaBE2cwRidGaZPPuAQXrzuaqZnKjLokisWGTh1FgbkJVWCfvHFm5RMkLgF9",
  "key17": "5vrG75buXVhXdrVYkBjC97TAs9RhqV92EtMyzDJsqf2FL9QLUNGfaFRjg1nEUHF6hGp4Z76QC44SrKHHVKK91h7J",
  "key18": "3mLnSjwTLkNq1f7TTVHx1bJALpZBiwn1xM7xAoEZ6cpzoBg99D3LnFSTcT5nWG6SkjUSESzRr1Pq99nWQf2VzGWz",
  "key19": "5PpsLRrgMxRxCrdCtmGqaycqiDaE45jMqLKDWT1m58wYeqbEeucLmRLU6gjkBjV2TLQzxqnEwSMqeEmGoiyLjQaw",
  "key20": "4wp2g2vonYj62kvmzDEd6QwEKDPsoehec55cVBpCsrC8H3PKhChVZWMhip9z77AvYdUG3JSZkF3v9b6WCec7uHjc",
  "key21": "4o5NRv4UHWTyyh6SwKFQebxSZ5JH8qy7iw8V2eHFtTWpwSb91yvA7eq7b4Nxyrnn8wEshcSKqQhreAp6dMg9X8Z8",
  "key22": "4KV2JUxR4sU3zipyoQwfUpLjdZdjmvDzzkTahr9qj1gXukm7Hw5Xs9U5SnqsQrHM1mrRUCJA9wm7KCMTj5eP6nnc",
  "key23": "2ofeNpqkQwyYLfSVVdvcjg8YkEwtgs6J7kGoTpdRLzw2ULrMKSWxWrv2a8PtTaTg81rgDPnWAn14q4C2t8o5MMju",
  "key24": "3GKJ2uZjLXg3hXLgvhiyzwnfNBuW1xDzipf9GEatCxqc8SoLBVuKywhwdjkVtSy3byQjuXiBTt6q3UdB2kQaEA72",
  "key25": "27am6V7AbyTa8aXgbwpsu8c7uQT3brdMiBJpXTBrPq3RGmwbqZ3WPUAx3Ui7AGXgcdbQyANmUsxiesWZ2HPGFAf3",
  "key26": "4hbWUS8va9SRW4ezwhQeQs8c1xC2vwFx1MPUNbwiXjitP1Wi3yWaVjaaEgAeMBjXxTAxyd5HvB6EcxHAxgMKFpu9",
  "key27": "2TQLvfqxbCsaUjRDyFELjEZKfq8EtNbutgyqj1w6ESBfWC73CgQGim9dgbrPHzC4T6yi2rFwyctToLuvhKw5Npkb",
  "key28": "5Y9nC3vxdNqVzd7Nh6pa8JAMiFhy2riHee5hsxtCQvHfbBU7V6UNfzr3qH1yQPKLr2Hn6pnjE6hq1juhM1r5tCQ4",
  "key29": "svsbyMvNfCnDNgF2s4dwWmqmR1Npi5Kcx3ojUqNHcUpHLLnALEFG3cEmt4yrTdsLgogBSzjEG1E9s9nZ1caCeh7",
  "key30": "2harDxRJbiGJkt6YkWDadcGwuakTAt1AimBBa6UtDvVboFncRxqyHfYu4WVvn1TgQhLNDxE8adNtakfyZ6KoRvX",
  "key31": "45AnRHDWG2oMt9QVnjHS4XtM29HBqJdUe5dRjf2sJkwQ9EHB14huqkMfK4c1SSSiyyfL5axYCLbKddfA5UzRJ4r4",
  "key32": "42yfJCBqU5HrS6ZhxNoxqvCyC6TMMpimHuujbJU54bAzL8NVBP4wMJzfc2XjSPbST1kZhmSqQ34FodG7PCwQ9AcQ",
  "key33": "3FJzeLESNvEfeDNdWotZzaEPWTGx2WAf3C2Rv3wr2u8DuYy1XsVrmAj5E7LYGM4sMFTPfAtgWXHVb62UkM7CK8Gm",
  "key34": "48y7CyBSfgJ1E1DnqhDoAAhBHVsqCB1pPr6oHFBH9mNubrC8owvVwLAEMTwvFPUrp3XpehEJmMJ2yfLFTy48EEWB",
  "key35": "5F8mRRyw5jsSi9fCUutqddpB5qwhjxEW4o79kyHmVF6yRoPiCYWgKR1PAHwaSr1FuYDswt8F9tJEEgAsD8AYKLtK",
  "key36": "4KxmrD1QW5GnkS8AFYHSWq7cmQyiRhRcaBA3aARfJFmvMG9poD4y8rkqbZxWhe9GqL3czuNfciVpwTyKzkeQJVBQ"
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
