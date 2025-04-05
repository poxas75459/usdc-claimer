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
    "3A8z66J47NZqKxutaS3WMXbQZPFdBZxJPJyMi9HDtZF9feFcLuEqPNsv96aJ4L673CRWJUsFN25jztHxoCye5ekg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRSJZBXWf9dqsH7ZbRwoBm2Xm8UztVuxr2gBGTVcXbv5BDNqfaByeqqMqwv8NT68nB3wDhKsce8rSzoRcgsoB7Q",
  "key1": "2Y2eXjwrjgU5FFHUUfCgdmhScB3gvjMj8uUpNcVXMid4EZpiQcwhWyzgrhybWAd8219yjC75RwXjWrA8nzzkU5rf",
  "key2": "xRUcoywZhLoYypFD54p7PNZo75hLfTaeveQRSQaqbiB6VvhPwSYmykowTC5PpPoRPaKqw9cWd9f8Piz1ECfVB38",
  "key3": "Mip3Pu4JWXiWZDL5cEV5xzLKWu4DLPDgSHH4FuLdSnUkmpeB4a9i7zJPM2KYQAvikxzb2hTyjFMHbnDyNW422tV",
  "key4": "272nPzfVXuqAxLdq1S8DG7ua2TKJPCUp1rTLqtXz1C32yMVqxjehvGQ2AkdcQNoNfouG3vSULSXB3oUS6K8Nx5wA",
  "key5": "Zgx78boGyFcq8mz3hN5sx9vnwEq2TPz8G3dCRa7VHRHyvnd4DD5JtqjiSv5Z3L37KN8t8LgyaBmL6ejfKybkbt8",
  "key6": "2yajyederDF4ojtAjiqmKjUVhjuYWrs1s5HY55UQURYBgXb6EvADPNrZoqyTHwEWz88ySVWpzUwdaABwCvzv5mz4",
  "key7": "2dgZtEb5QCSotuBKtCm1KEUhQda5czTyhfWWQpv5FW1ACLHixDu71bbref9QNLthgqawKhYexFc4KFv1SWXzM6x2",
  "key8": "3LVP6S2mcfyCD72y7tvDj2smoqEiYtBR98TazwG2AP7j4a43Z1gW8twJdQ1pQB9SgkdvoGaxThTLASnDmXvMwJ5B",
  "key9": "3Q7C6D8SsG5nqmhRhtPJqsvzFV7oKF4HBqvQHPjN214iRhLPRZZXsLkYNv3czDdA146z58di1SLQ8jsirGap3BZH",
  "key10": "Cy7BnS5cP8FXeLcod5yfyXm1dtCbnCbNPYrLKk7ukDyngijTqH875S6nhgTsYJcT6EycjekcwGZLsffyrmRSc5Y",
  "key11": "QRHRgitCteYssPsi4Db8iuJjzPv27VmxVrQmwhtonsdTjV1pYizk54rvtcv9f7C42KmApiera8pXRarnk2mvtvi",
  "key12": "5dbUzo7mSw4i6W3AJ6bDg7Bcj9XohAp1zjqyYeyFonDmVLCyb9QEifVbbTuKfw4ACyyggzCUTCQ8XEUYRFaUdKsK",
  "key13": "4Ywjroh4mvuM1eH76uWpocZrHM8MEQgFCk1V922pKqmm5UpggKQ7zUXC7VuichoS9baatZfS1e9b2SJCedFJHL1i",
  "key14": "3DmxTPBeR9tsSNiB554Eqbd1GdXxdRGZ9dkJN3mZRNShnc7mLaeT3qTHdYCwnarxWDp68kJmSZuxSVRzhwZtHmw7",
  "key15": "2wBje3yMm2cX5dJ7juBQHjyusXUy6hwLVS7Q2GgbHUT8y81eW4gPBsJeHUEgcvHWWHNczoD8nf8GV5VmGNE5J9Zx",
  "key16": "4q8G9hB39NfmKDqRvwLZuKroPCK1nm2BBw1tPbbjro9bJFw7zs7WEHbNwuDQkJBm8eXhmhuFHgsFE1AmDvLNSRbV",
  "key17": "5fB8NShrADnkWTRuwTJ3P7XxhpJWg7fp2PFBkdACvbi8Sj1PXVuKMfEDMZfkjvEbm6hWnb2qWJJsbrRfjP1jxT6c",
  "key18": "4zMj6kdCSEfKUL5PcaAhgxngnRgDV4ZfR1EYNyUdACvpJua1ta1f9Eo34ucmYyCxZ1ExNXnHqR9GJEw53nSQT3UQ",
  "key19": "54oguMNFX396iZGSdBachoTMN2UiMe1EXRx9r4VceoJWNtCfpQrTxrKootNZ4djQ9Ypr7cP7niEFV7etmiXgCcnc",
  "key20": "3eNANyStySVFSoNZB1UcuXz2qQkDEW2g6v3Hz4dds4PdjTdvBWXSDJzxh4AfA9pFMxPtEjdi5UKq4MGZsugd1Qcy",
  "key21": "2umhg4iz3MGfpGZMV6iQQC1XJ1BEhCmNbMFDmLW5zfE8C9D2C9ACuN83aCKRjMXk93V4jwc35KngUNh3MKqXDT3b",
  "key22": "VshjyqG91rbHkuT7ra25TuXBcVEh5AW1xyS1XTBydkAnDF4w4fxtzNyD9nNeSZnszEDJzrnRWvV7k83gmjZgiCz",
  "key23": "cEGaDgV1DpNpGtXiwUpHC8g4St2595k6QbSPXkXgGXLKcdD8YouAk5zywY1foQgFH4Bcfuip1GsanMuvi4Hqf86",
  "key24": "66ZQ4SWjbwiXSg4RPNpLgVpRSRbrb1XGXmXzcZCxcJ9QzfTGDorQc45XpbH3eGqwpTbtFRBvNpLbJWshWsh2mq1e",
  "key25": "shrqYFkvpcQY33iR8Lw4a7BofmAdVeD6odzaGoussV88PwCUV8mWSD7aiBUcFD9ejaWw467GmswsGw2zRaDLniN",
  "key26": "2qzY9funJd9LkFKr6dchagYFwJAW2oHZ6dPm81YQJXj49P61mCtdwMu5T4qAfL3xekEuW8Kc5QoWobRx5qvr79X6",
  "key27": "3aU2aZX9vdveaLR6P1KP2C6QFLYpLZSX8indaBBFVSvg35L9WnSNgjo6mZFcBUBN5KQvNS4BHtn2HKuyBpMdQtSi",
  "key28": "57xVL7qoiSUMZuHou5b8PiShqVsuhMkCRZuopK48DVLrLSxaQJyMXsENbq5MW3kfFygJDPot2UAoSv6jFnKPqUyq",
  "key29": "2vSdhgqH9bdmjhMFSdBSpPGmdmeqLbmxV21SbR3m7irVq5GKaufJttfp99Hp5qTDQaqs4dPT1p3rK7xt5BXYyG1t",
  "key30": "4J1sMPKxy5x3hBKEs6PsH4xwi3vgvCejgEHdZZbA2XjphHCXqeAbZgz2T3DbPqX58McRQcV2Xma3gMpUXsozKac1",
  "key31": "5RnLonF9nXV66uqX17Ue2uo4NvYxZi6dBV4XDJyVVXmXUadBjPxSMBunB5RKCBKucppBhUSmnggQ79Qtuq9ALrHv",
  "key32": "2wUGYFukDGFJ4FPVGNSqwURDemPXcf1xmqemYyYLxH4aHCoDKA1eLzTwH3Dbv5UMwcko2kpuT9JQrco5TkdZLJ8Z"
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
