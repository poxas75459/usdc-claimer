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
    "2gMDzMdFoUMCk7V6NBaD2fqxXKqxst4y1Kr91K2a2RH6RKeVpCQufLrg6XZhPaR8PczhR4Z1pKF3PBzzd3s9a4qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSwJar9D1Zee3MbNTjVWRDqRu3GujsxF7CmEKX4eXEasxHkZydYgVXWqtuSqSwJus6nsvr3gM9Uqgp4PXEtryNn",
  "key1": "eSuF29vjkQauiKiMZktwuf89pDCMcZQ2jgGkgtzwKdCXoDPtNeBDMmFoDm3NgEmNd66RXtDVySaGDQgWHmySpiA",
  "key2": "2CAy2qZ6o97p6pstGGdKwdExnqk6bzHy2noZDcQc42uGNi8miBEysQjZyU2DeEHNGNjgk7JyQmswWccvPgGMGJUS",
  "key3": "5QAN8WDzJJx1emwmp8MJeEhu4RtUMuwvvUro76CgevT9tzq5GzAYHugGf9u9gFHet6Ezaz2yabxKD6X8eU716bnG",
  "key4": "2wkDED9eSypWBq3KCDruG1mcBNWgtkazgSxnbxToi6Jmo43FF1FZNWhbh12Mg3S9jLHQht2y5C6mgrKun5X5EYqd",
  "key5": "3Tv4eMUuqWr7LeTBYSo77uY7iuVP3VeRuya8erb9CgCSybjCk4uv4VA2XY5sop5dxGmn69RH3Trv2V4AetuzggBq",
  "key6": "3fsKp72KhhLAwuWNznWSTKNqsz8zyYiLswbMWUzsradhFthtXT2afPE5BLCa2x9aJSE4HiABPzxG6SdZJ16PqHLH",
  "key7": "2EHQpJ8rDcTqhM5Xt73icKhok4rTx6DrqSw2ziKAmM8u1sKQdEANpbFiHbTfefDq6V7s21H8r8PWK7HyqjZk3CiC",
  "key8": "51a3f8jZNNuXjoubAcrhQsxgazyHrtgXfTzXywBv8TUaHKaeRSPoCJCbPut45r28CPFXyCiXkiJqwCv46JVHBZsk",
  "key9": "5uK7yspU51TbFobsBFeoUnoHajCd4mCP4ptxvHFoqaKNUxQBgcHdcwp5bvn4LapJngKgn5UiNmsbshwkfFAPiiNH",
  "key10": "4FRy3w2Nzgk56Wx78xHMdeWT33mQHRSbMU6kJAkN9JNtPfTWZz4Kso4HExzRxBP1gC5yqgLHBZtgLmTcu11DRFf",
  "key11": "W3tRTvEvGCf2ygx3Ja7Xctaw6os4tC7osAxEzMJ8hmZ9KZXRiykBG6FJTAhqavFfF1vvVWA6NPEV14okHdA6gEg",
  "key12": "zSsmb5grNf7jJzPRhyRdEf9x4uBXBH5pQrCzUrZ1sviYRi9GSEd8GdSyEugsaBe7MvDRub6UNPJf5qJM1BdEdFP",
  "key13": "3duMEZ79EohhDb1uyBEb9FzoRD7ZRsxpppDgovkqfbdnhTDfatGC3YELEqonv6SMcqCcw5dJDc96jQk6SaCsVxMc",
  "key14": "3jg2zXiJNmtjaXYqcesjvki13tyy86VSN74ixoCjwSHp18TNEkzdCZsyEFFXrEHRhbo5UQ3LPnzi9gUaUGHkQEPE",
  "key15": "5nKsGGGrzM8c6ADSY6NEtyR3xJ1GXFLRD4PuDuNvzjWg3oX4nerNDeXepgatXpdj5gHFu82itiQr1TAuHvjLH9yH",
  "key16": "3M5k27yQdBrPo92moCEfHEguVVugWTraWh4VDnnt26uJd85W1Kha1Za7pBZfHt9ZT3yqSFos4Gnoa1UEaLjLyyoB",
  "key17": "63G8KdciVacKBkRSmnJdRVpVztdynkcAL3j9rqEF2JkVEjXCnwRy5LJpyASxqJZSkaSneoPtxzX22qU4U34LSXAP",
  "key18": "V8abXnCeMXhPgV45wtQKZoyhHyU3wCGyBresdPgbGqwM3nB5bqvv3xma3xzaq2KMpNzUmzfgKkxYCwsmGqF3ime",
  "key19": "2944LFneTVDM28FKnd4FCUpbM3zA78NKGPGMuo5MDXXRzKdMho3thXC2pHG7PSwqZjeJLYsrFwHbjTvu1NPYSsNL",
  "key20": "42eig6nhQReVDaBT6Y9akrGSqBnHuCo1eDwWnipj2iT7GDKrLkr9A9iJ9u7PFWc9NLoG68bP81G8urp6YguGL5bS",
  "key21": "5xMrexoMJc7aTpwXEn7PrayGCDgGYfaviPKY6mYcbHbvKY8abiw6uyp4rkFDwW8kSs9WPu6uAk9oiNBxau8gEHX3",
  "key22": "5rdP7zZPFhHR4NpC3KDYEZmuk3i7ZbUNs8HvjhDxqK6paJyz1uTqZRgZpd2U2sALccaQyyPZD44QkGrnBcb1SR1S",
  "key23": "gHcGyjNLtq8SfqQpsTkwmdRu23SHEXXQoUkqARnfLNW1xxhZSMwzKprsijfDRCq5ViVt8Y7VfgMEMbaPmjPhHRa",
  "key24": "5xt2ReKTChf2vmuudcQskrwDmQVsa6wn8g9uBLdpigBbtAydvPcxNZXomtUre1pQ3tBmkrU14gBXF6G9BEpXDxan",
  "key25": "jpTjTEBHEz26GBiHavsF2Poz8afqJM98gL2hQAotWDdQiQAnBfwkzgrKbKaiF5LyuF89mdMefKYsvcQshkmY1QM",
  "key26": "4XPLP1s86AVaCDKeXcpzZw8nz1nrY2ruEwNv4MrDQ9ck4CX3iuVF9QGXQ9vUnUzqWhxKZ43V4rDQfSH86KsNY8jL",
  "key27": "2KWGjRZyn52CTNyuGxPjHBq2N1CSJfU1WvJZD2r6zvDbc4tUjok8sv1DG1Buu1hRrrVj3hzhJVSNJMzA1Kfeac8G",
  "key28": "4qD3ZeeaR4r2hQurpsL21ns4RX1tyhJ9zJBm3Fa71cftGniokjqZ45qZYDyJAPVhP3VFKCQ6kBfkEnE5P8PUCzuu",
  "key29": "2o2ijGuu4XCShmFyd4pdyDQi9CQrg3gLU2G8w5WWWVW3hzDNBNqBQ4LoqxiDewwmHTG7k85Xk35rkptdR8Fkm2RW",
  "key30": "1Es1QZJA7wkjtj69nB18nXCuGFZ8noPi8aaFTFnT3Th2LusG5dotYZ27hiPjA4ETfwpC6tX74yVPegbJUVBeByr",
  "key31": "2zxo6MCN96Do7XtDdB8cHB2eKB9myboBQPWNHifowrVBNPuNDDSjcJengksqpH5CXMDATT7bCxpvAGAoj15n6XKp",
  "key32": "3smKG6kNRXbSndJXYso3Vx8ZJ6sziG8zrQEx6GgUBtG6FvyjS9FuEVKeLnjJpFgdwgLxYoSWBaSwmbpVEw9uLcvZ",
  "key33": "gXRnjqtBZUgfX1co8rQUQ5n53u9Z5C6PJg7Hx3XYb9xq7CGL7KTq99QeBruDhHwkR7wYDK56T2kYm9X5bJv25YC",
  "key34": "62xpxWA9j74TJwPfzZG6vAN7TFh99LtBuBUrcZW1hh77BcvvRZEjkTDZh1CR6bAPKhC4azpbrqQUrF7dQFZ1JapQ",
  "key35": "3mJHuZzVd5eCiT4SPAJ39jyXC9SRMfSmGyHiV1bVk3qcRKpS6qLuv6CqGEC1Msw4cKZTwXKYsP7H6eRcCb2dM4Us",
  "key36": "4YxEGwPUNU3tZXDzT3w2eX5iWNhjFkzNg5nQYg6kjgnFSXnD7JvWHxykDsZkLEvK42BvQjD4GtiWgkJZV7SxdmD2",
  "key37": "2QpmawiAw7YqaEPnSukPfpUiB4wrHmrg3G7aSXHKRNSs5mz4AZePPSDyd3digczWFMPm5rhvJhFbFSE4EPYwSxeC",
  "key38": "5FBsHDTYWBXRKJpT1gPuPFYb5HJwvBHHSbjaSq7wgPcuZeAHPubE9ZUpxAUqqemxQT1ZEzY8h7uFhkPPm3vVRoi7",
  "key39": "U74VHbVFxtoDHetuhxrKSLp6KxSCcqNr17ia8FuZyGL8e4XRDEcpqbYfncKaZxv95RSo6nVhCqwkzvBQGU4bYdU"
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
