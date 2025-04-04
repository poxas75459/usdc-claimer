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
    "4APRZwRUv79Hk7mdHb9oJmaCn9iFe7mahdXrmoU418PUkVQ2cbqFUC568RAKHhR7HAjuE8GpVHuCYtJMv7AwSR9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hx7HZKaDQz1KovhNfAcGnarggVLANmmxeHq8S7reNjj5PF3VViVpQ7RKo2MMTqdRaPLBAs46jqcV9QcurEJaZXB",
  "key1": "3DkJe3YqrXh75gJSfNCiXa2QAoML7zpnHEGFsuGcA73THUPTW63A5d7Ygxod5ePEVvK3YJighwctrG898wdMp44U",
  "key2": "2QWUtz4X8gtieHGddmtCuEBsE9JZbEvypT8nexvMr6RBLEZF32CayL92kVeqCnQaCYgCCwDaxiL9DJNbehy24yy",
  "key3": "5VYtxkseedppc68rXncxZaHcDjUyTELmMos8qbFx6hB4PnEX4WkCkSGEGk7am9q4Ez3T2HJR3E67advwdufVsHDP",
  "key4": "gV6H4N9Kv1raAAsbe5MMAmRKHxyrh7wchJfGBFdxUDuFwDYYPpW1grxwUhATzq8VXnWro3mUhCuzb2RUabW2oYt",
  "key5": "3dMQx2ZhZY5YuzVCLtZA14A966Dz3BUR1pwHsrvE3tfnVKuXhCuX9sNCQjxEg3HuDGehswYCcnHdEJFhK7muex3m",
  "key6": "4bGGDqYuzdqoSFNBRR7kzPUmHsbmPcaLVvkheogJGrvRcDANadCTWDiykPWWqScH6ypNrPVzv9ofTwB3MP5SBjzq",
  "key7": "3topafzYbGuD6e8ThKHQWzoQ2dJKtnJopiQdgUsBNDdpbJCxKYGyu2BYtMbpSAnUQC249yx6pF8T7vS7wwfsU2E5",
  "key8": "FEXD2gopXVY4fGuNVmnuBA6XYtTYZH4bvWdYzf1sw48xuKntNhJ9wxpiD9gva9gF88ifFGrYRVyxfr5MGfMDoPq",
  "key9": "4DuDzfUFBbjNVKL5miby73ExcAugtEFwskFhoUhYFbKZFnYD71DCrYfZkS52T4Qrn7ZnXRqmbB4nzpZ3HpLZ6Chh",
  "key10": "22nBw37CvDcfLytGH8U3w6LSDTQX5CYSyexobphNCHNASNanSPc3Ui96PL6uQ3uqq1coarxBJaqWX9wMXxq7dn3b",
  "key11": "65dh4aVhZCFjtQZTHtFrU2pGpm4ae3U8cxfPdTsXrU51vpcbBpsBNZHSS2NyfFqHUyhZB35ChWohSjpCdgrWHK7i",
  "key12": "5BQMJ4cmURRbhTXkRdUpaZ3UdRP1G54PUfQ5WpFZzvC1Y8uW4j4jgURVg595mxoN1Gwm6tBZ5Z9GgECsgQSp8piJ",
  "key13": "59NRGB6MkpUxniYbbwc493LiU9SvAxPWqjCTmVgv6JUDWjrDy52Fnm1NV57LUwFXJiCuX7jfxYB4nThoCyc8QroV",
  "key14": "4YbSA4c5oucuEdBy14RTm59oQvSMJ8HZmNutvkkTD26exCrNXcpsUpit9vNveepsneL7MPVNbstsEEcdBGxiTRf",
  "key15": "3vS8TYiUK7bVBPNGwQAEPpaZB6yTesBnnPf48iG1hZpnjHJnkciK4CzpVx8PZ3yA3XMMukMA2QRZmw8AhLdb2Mb",
  "key16": "4RMRgVn9KsGSceT4uBkxaZt6vuQwkXUgbyrtfqER2fAqukhNNpuJAd8oQeH7wLnYejN4nXWbQUzmkAZohtLmY7in",
  "key17": "5qHWr9fffwy5jxswypXFGDrJ6oEj3Np69aLFZEyc2duc236cserxTDeuAQTJ1gEXpzUgknvTSphrhD56AXpVPpnw",
  "key18": "2synYhk32jLW7zGNbKk8JGk1XRuzUHTknArXB1ikEV8ZNrC38wnJsaCb3cXwB9zKEiR2qJAuGeKNKGzmTJH15ZEk",
  "key19": "4xqtaiPLRh1eFAinAyYcJpg5TiV8xqvKfygaD6x3oGVBJjEMLUNjF5WwgPqbzyD8Xq7V2wF4JK6DWY5qJUjEcnmx",
  "key20": "2eKTsFacNYsmGRT1YVB2UZV4ibTmE3MAEoWF2DistH4zZhpT4iwji86gSFvnPMsT1osZQLibVjQb7gqGNNGPK2Kz",
  "key21": "NTqfUQ1CPkzoUiGJAGRYWKvNVrGHxpBGeH7DXqckvTXJkGJurqXoSW3aFaXx1VofSGoSDfE9PZgMJydM3rNVgEt",
  "key22": "5WaFLhULuMu7NvayMwd2JSg3ktJwe4fyZiQgKH3suKYG5f9SFm9aSvFpfJgZa3RzQnjLEbA7eBot8CyAHhCBRMss",
  "key23": "3oCM5v5VGhtrE17RdvqKBAvgz5PkJAG5yDp1U9W5LD1SukS2FFpyMFk9LZCx6RSKBnv3KTeeybtL4VNY3SanAi3h",
  "key24": "Xe6nkAytkHu5m9JTK6XvuhdXD18SVs4u1EFLKoh1mQEug3Rmj19q5eBAk4hD6GNV57NrHsnzTtXFGXatyoauKHb",
  "key25": "4w6aL9rKafVV26pyfdyCtVJ7FRtUNN4PqL3ae9mRkMSMBtpeXbgkb3crYTcL7EahmgMjJ2kf9W6DiFvs4SBKnJYm",
  "key26": "4U9UU1U3AKzrkh226De9UKaECzTyP2pCvmADHRhL7tTyaeQmy6cuJvbGevBLeSA3VHij988a7Jw2QyS5kL9nRTo2",
  "key27": "4dPBg9wWx9iahhXz1Shi6Vz3ez6KEHTphoJU8GEyoQihntu3cSSaMtpPonFVhzYJu1vqu8JJdZcUC9c37WYdwaSy",
  "key28": "MLDTzvTseswYrHSMhxHFa52nEP1qcr5weGSngwjYW1B2YDydui8PT2QGwPFsQfALQvmSp6MM8EXF4wUqEc6sdR5",
  "key29": "PusggCWgUU8jHQbAPQEHdYcuQ5s83sdEmncUzyH3aGrWB2PBeg2XXcC4vyqap6LoAtYqmyWGo9FMxwxHiFhB8gW",
  "key30": "5gvQVucvJo9donL6sTXGjdecXG8Ew2X2zPXFaGLDvfcnCAKedap5EH8a72tWJ6AUGaVDVCQAJHKjbYjE1aSNqxTn",
  "key31": "3vXcxSiM4hqZ6MnRG9pMXJx94batgjXfPJqb1CeM852nvvKmxHizrbJpgweecD32pwmQezTH2RryGnnNax8SiPTk",
  "key32": "4Epp42XYi5Xnmk454dmoC4YQ1VuMThox7nC8wHGc2TAcn5U3kiNM4PTaKsGC4nLjBkkJbJFQHbN7LzdJ5aUR69iK",
  "key33": "n7BySuZZACLMe4G28yNUmZqrckLs8GinrECGv5wHvQ1cQu8sbpPkhpToZ75vRG49NBio2x9WLARLzgCn5sVRqn6",
  "key34": "9riaD5urnqpp8jpSpxUVzL4ajsrTBLWBQBPAidm9Dbq86Pfpfkum8Q6gKuAWuB73WyVnmocrgkLuZp37m9d6eYQ",
  "key35": "5RR3tB6cXMKfkn7hWnTV9rHRcPS7ZN6uMb3tJithYJkhLj1sdYqUbe63qsr54XDNUTXvzkN8vdrYrBaTzWZ63vdD",
  "key36": "2Ukb37ah1gnBv4eLVZw7UNCF9m91XQ5tuwTf4iPcTTqE9mdSFwo2vcp9UDKb7kB7khkurDWaxEoUwnFywAxSeJKq",
  "key37": "n1SZRck31FUZfYK9QdX18VkrxdV5TSkhSydPAjC7quxM4ozAFGYUM2uxc515xy9iv4ow1KEVoWVNT75WXLzWpVj",
  "key38": "YFFbbZZZZoKR3Dn4jyJD3BU8Taz4TmqQ9FapvHWKrH7YQEXWuwgnbSENSrUFS6GstDxE6Rwaj1fvZ4gz9Kppw4L",
  "key39": "63xt4Ddufqjv5qvtYBtp51dp1qK1nDZH2wcNhJQKLw7FntgKMcHS5rQwGZiRWZ5cj5HvBxE9KxDRfsrj5eCHBdqc",
  "key40": "2p7vR1z6Kgt5x22kj9f68CbM7jM9yEFtGruhPg2b9zUdtK88QLQ1aErNNHVAGtp7oHFaH7nnEhwx1xQK5sjvRxYd",
  "key41": "641AHuLhCTr1ij2s7KLUtuXQdwy8Te2ea4CZXcAxRUcCgLj3MWK7nwSWNxxvn1D2MhXM3BNAHhqY2Kfn7MH9W8V9",
  "key42": "33wBuns1TFJFVQbkR7dm1ejBmq5t74bJ14NEzeWjAzFMPRNbRE6Q1GWH8VQpTcDZfkJPk4CLjpB8t3ok5zHdhSiP",
  "key43": "LKrDcQ8reBeVXRGXG4homQVktn8CXoNudnQPfNoaE3aQE5cXQF3kH2Pv3F4NGZbvDUa4HZ9vfaJzN5rXxJzz5hP",
  "key44": "6759zhbY1QDHCNpfHaEQT54nBukh1orUPpbLsCwDh3DLst9a9fGacmhLUpUmULHwh3ndKtWF3aSsj356au3Logz1",
  "key45": "4THX46SdCwJTEdjzT9KDhbBCPdQz7AVgcqEaSsS6DkWLSP89s6YrsFhKKKSRgDgxc7u3XncjiSEs2qB1gFD83vBt",
  "key46": "5FziGfPLrajqzMcgKcjJLy2sAoNguuN4mr733EBDBz6mJdwgJucqGyCsy6y8sNrNjUdbb8V1nKrUVWecGPiGfCKq"
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
