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
    "3FVfMWGzpSTh9MgB6AaCrdV54o1qFk7kLUagHce4PKGJdwaZrg3Eijgu7oNnvSx4VWsgCdUVptSqXiU6ybFwLg6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjYXx29vWm3N5HkDq6hoTCWGrVxD3wmQM9bZpQn7h7cTaQXvsb5y6J53dZ8QMUgEyQdJUp71jznwgGMTqQAvBap",
  "key1": "5BXfEMcTiy2twbtBex7i9QUPJkjkjDSfwir9sn3uhgesFbmxWmKvGr15ybBFbdygsfBGwyw8uCcCnHTYK9V8rV1n",
  "key2": "3zjL8yxCtGPNXTRbzvhnnCUG9YZwoV5ocAmwjUPEvZ3Xw5HKMBg1KFjCMzdsCWBfY1vAdVdcmYaTbXMAaK81rfZq",
  "key3": "471ZpYqiRdsHGN7Zq2bxqFo5g7hraCAYX4njnZDREUBJBBWhUMeKLrA2NxBBzLGzMhL6iTUPhdHWsLJnNTtKfofb",
  "key4": "54G3pWJ8Rj3uhUYZTVsMwQNfn12P6AMYBeQJHJJeoYpSdiogjAuJLYtK5LurHFDLSZYHA8aX18658ssZk9GFMUsi",
  "key5": "4tEKkqFCwmhZT1K5oPqBCJhtxfJXYRh353EKXmuxMe6dyaUGMX8R3VcG1vmsi3tfqyfHkz8KTaUc4ZUDP9UZtGfx",
  "key6": "v9rMf4oB38zfTtbRoeUvaYJNwmryaaZkWE4B5rjLF4GCgioHZrERURjUQgQsWHrCY8nDyq3rAzaJsutP3UwYKde",
  "key7": "4Hqg4TvTt8amnfMfnTFvtFL1FNVLzA9VonqGovX7zTpGHW6bSm55GdGGrWuvbuH99XC3qw3D8wFhwVqVNUc6Mfq1",
  "key8": "2Pq5HoddcuTE6kjdRa893ivxFrABvUBDNYYbymMXzfydSYUB3HvudYQeoSHDPP5oQuRkTsSPwBrmzi3mm84itCgh",
  "key9": "5dxYuend93shoWSDwQeDULX4sEGdDPLWE7cgdnZDiuv8QKuVuDkix3xH3GmGEcUifJK451ogMc8b88spGW6TET3",
  "key10": "5YZyMrVDfUd738XpmFB1dbjet4jfNfrLEKM3TsPyF66FKPLMztadpA7AdU4XayEXADUVZyV8RTe8VbnqJzyNTzko",
  "key11": "47heeDJUM9gKqS4WTRh1CLgw3cTD8ZxMMshAK5pioJTbXgoHHmGZpywYPAg37J7k952kbn1JdyER1s1wXCsZdvCx",
  "key12": "4b9NwGr55T6VGvwL55xcTvFwwS7pfXzhjrzjvwHZpQFGVDMer5xD81xC3EycPyu7BsMEBEwwTMHJao6xCfQLRzA7",
  "key13": "5sJC26KcvoBoGHrbFDptH9bFZaFKZ7nAfKht4s3nz5vsjKRUCrikwM6WpigSDq9pm3LHjZpBviiFUbFoHS7RQSfV",
  "key14": "4dWwUCyTtaJNAE1tie6DoJeWqMd2WTqHyRRyZsM9Xe6ig6LKuGESbZFoAr1564ZaoxdzgaeRkabcAmPDeEqHkzQP",
  "key15": "4ssE8oT96tE6cWtGkKTXsxPpJu1WYG4MZDCmjt38iRuma66oZDrmJbA3Y4PqfoFVN6mG3fTC6tAaXcFvbZ8X3nRq",
  "key16": "33XkLn19QwCZBzUKP6K7282byGu9S9Apxq3FFvJLh84KZvVCZiFxtxRuxWjfHqmPJa99gLSQLi2x24ZVuR5K49JB",
  "key17": "3zZ5NDVzYiYvsuq1qVrp4XtogD5AmieZ37HoGHyN9XFeRfSMKEzALLVKwCobHfXcFvpwfPMrKtboZRkmHF5o6FmF",
  "key18": "vY2UHqZyAAkDpHyRJXYdLwN5GrfTAJ8N9Kko2nEhuAmmkmbw3AHtY83eUS9krBwzArJwLW5pRMoZPjtrV188qBe",
  "key19": "4ibQftqm6TEwtQUycD6JEXzrQ1zqQ8ESygMqQdU1spe379CRAEG4AKTjejAKzRmFznDSMz32Tmvph9HszccbC6kW",
  "key20": "31u5Hq1o1yNonC65APSA4ubMcJwmMk5Ast1hgMhqtWCgcSZPVRkJWN7st1AFF2qMYGggqf3F5Sr6UpGudmEKjpPe",
  "key21": "4VNe73en5D4SUzNX2VCcQejA3c9zD5wpvYLo1w8ArhBStookkujXUKKERa6H7TDhmA6uCSjdeTcAZCqSCxDVD6FV",
  "key22": "23PXckdY1oQb3LXMdjrsGwvH3bMmXpHEzx3pvS46JpuLDSKLpHra6Zu54Q5GgAaqE7A8H1o5Zv1q9PC9JHC53HLw",
  "key23": "5mnoHmot3nDYoscZxYshVPbFfgbHtHTnuWUGgvBr69TGNBBL2osJvQ83cn1XGRo2MqywVW83tyELYf4Kd24Aia2o",
  "key24": "4Xa92uviQM7jgrJk7BdHv1ZmFDQAogG2rmifnrYDc4Hmsvb921AmhNHQENprUFzREgFup9nb4gMmUifacAKs5YSz",
  "key25": "miAxxrUsPyetYYUbi48dgjdtbR42W7h2m8LxCJ639JNX6z2HP7DR6fnYB3oesujM2xv8wTeya24ZMmiJVRDczgQ",
  "key26": "woskG61Gd3AandW59CtExqVnjfozeqRLotTkPo3b8dUtNaXC7LqW1z8jebQUTQgcX9QLKRqm5tv2i13vQqWdv5C",
  "key27": "26fVr8rFEbh9C8KiAsZ9yaHx55uwvY2BL9JAfM49KJeZdkVdCntdnxsp2Rxj6rgBCNTvfygBkxzjrs3Ak5TkVsXC",
  "key28": "3cEGgkLMLiCS2pP2zrkXfjcgNrR5T8KEVV51D7psDp3CCPKkQxBpAQm7piB79p52zBsQQFWz7BN7qKgsjqGiBodG",
  "key29": "5V3WWNRYnyj4zwQuG6q4j1eJBB1CrUnKunRY2bDwhHPdzVWrnzhM22PKhFcffcPbPDDJRQSNcSN4eHkSbqWYoSxJ",
  "key30": "5uZ3qCLG2DaCfRhk2yocgtt1NszzwAqBvKYmFBqZxE4U4k5iRtRAd4iP61Q2efR2ZCbJMK7yTDRzEGby6tZdUVsR",
  "key31": "4LfL4DcZDDLpBXvUri75VWDjjA8d3mYXxhorDhxVC7vDk31czCQzAisv3mxY2QNEexydvhSRbd4Pp8Zj8qKURNS8",
  "key32": "3kbuUAeCrL8BREAyD2MXLrWAvBm2jAySHct4joQ39f8QqELL6HX3JyuPHnX6GtbRuhzAwxb6k9G2tcrwpqPScZ1H",
  "key33": "3WvUPM2Wwr6jrH5PYy59QVPSz6FQKTF4VJS1YmCwobgVzPrPKNnDyraWoXCGECtZsYYmUaRgvMHFQKBuZDtjZnvp",
  "key34": "5yJTrWP8WECY8Zuo8Qh4NSf8nXWZrJtS7AmYTLGUvP7fbyfssWufs3ZNNBioZ8zgiQ5YV4brQiR2wRq5sxAGrNVY",
  "key35": "SCgnosKspSgs74TQXYtUduPPuYNJzN29Arja12PgjwFHtcAwYpArNvLUPVYgiVv8k8QRYD1dvpTNxRng8N9JeJR",
  "key36": "3Q3WZRXzGpyxMn3fpGRfXJtjj29pRSBN6WDvmGWqKMAtVGDNmGyuyLaftCvqjMnqgB8p9MhNMVnW3RcgN1F5WzuF",
  "key37": "zJPTxkfgkiS14HNepbU4BTHDsnv9RZHNd7VbvJ7WYHjKYCNCzkhT3uYmoUWCwYnsRmEdmk5Pgi2NJAKWLGpXEZB",
  "key38": "TbYhGcAC2vShmT99hD12Q1LqjTw8mzTNRM3hpdpS5wGMG68SzcRfrTfZJ8k1hd5McKcJpy9TxFB9k8NFtSsiP2Y"
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
