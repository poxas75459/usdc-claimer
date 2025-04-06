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
    "7vxuS7CS5W73QodryeamwS7YMCNCkWtjUZkXRvx2WwW9b5Y2WtZhKmwfX7HtkETtePa34TpH6G5ooomWkLbCFmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t15U8F4DnBMReE5NB8EFnL3Sya44RwtpxCAtZwYQkqcgLFwH3vQV2ZRE4ABPpgUHvjZntGsfUANLM6Cu65ouqb3",
  "key1": "2faGvXneMpjDKT9GzTDgUSN3G4x7LHEtR42kxo17maAu1jQpFiqTG4dBUtS11aamWhw9RCw8nnDDVK2zMCocRvpJ",
  "key2": "2g8oaYf9D8Nk7H8P3AX6PYhEFGeDMMJhby3tzPCeCsRa5vaK37Yi9HggFcmXhqoTvZ3NoG1PXcThTz7T2LzsKYHL",
  "key3": "3BuxxSUw8PD1YoAYcG8mRAHP4Lddr4sh2ZokrYjsRkM1DbqH76kEJaNEyAKaquo7xQuysyasrANN7XZW7F1KgffG",
  "key4": "4kGHWSaGZRzYep15Rh9x4oAMuQN8BvHS4iDhYw6Q2K6ASfwKDmqF6YtuNRJNPkCYFJ2UP4bqRMRxS4ZbC6u8j8u9",
  "key5": "1kcYa4D3rCfC2o6dCJPqydhnnoH62aHdUPwDjjV5dTpSgtrMoTcoPkokSJ1rRNNPtKvPfLSNzH8h6sa9Mq3Jsui",
  "key6": "2ukFvSVE6np6FsA5prBEm4gzASSxwPupoaCnr9Fz9qTrNrtyo7ewkQCpTygGRueGEoD5i4UgrZbCmB53qpyr473W",
  "key7": "44RD3ExL8CEsLTgpUfRYArHMHVr4H3r1pcAWofDiqr4XmsiyXk3guEdNRujNqr5mRGBACLAym25U91hhd9y9LgCz",
  "key8": "3vomW7BU6KXpJ4kDzRPjdRMKCJeFTJXkrZNQJ9j9pm9YXvWSQ1qKnDf1rKCCyWhvo7iboj5X38Caen2KJKmvfvf4",
  "key9": "2S3nuwLhBh3MTCGnD2PVwmFVZ4jEukJP8iDAKmAiym9Dope2eKciJVn7EKXTQn93zomnJmrt4uLn8BxyZQaaCcda",
  "key10": "2JDS4ySHUN954UQbNoc3U71Gv25vGkADvx2J4n5jYuviSW6qui8bs9Pyfn9LebrxUuZhaHnQUsMi7ZcjbwJce81X",
  "key11": "5SB2tG2qpWHiQEmGsb1pKsr1p83GmyNhorC2m9oQKbdPfF5fcxh7CfcnRmx1tmwnWqp2cywBWMKHA2XzCaczJw4L",
  "key12": "2nT6tVkce4JSHr1YNQKqGnWw8hMUnUFnc9b8LhSGeymDtwsWZWVFDv4RZB4Fe8FkykX6yj7w9udRXUqPndcBDM3D",
  "key13": "32oNQRSPipz5fsejDtotBjfkdisy63gEtiewKuoKaUJyJd8HH7uC1K6ruMRfN4ZirsNkU7vJBu9Pw6DhHxnz3yUX",
  "key14": "55hRcBqyNBPAVQUgJ7q9SGSWcEuLwAFeh9apiMMrFyVbRGDeSMAg68Dho5Cx5utFsznPFTjZZQQPcW2d4yVRvx8M",
  "key15": "2fEcCSkpbasxsNQC4rQzgKTEkSDBkha7zTh8EhKnnreepowtsXJ86YxZQmfouocQDMbcKWxQJMNvq5tuXsMQwcPQ",
  "key16": "5pgbJpwDQD34EWLTvaCUtkFJfFhDJASXzcA3ynXdDwaoF1fDGhfR5jc7bvrmHtjPBXPQ9P62zSUAMTgyyiF3pEAD",
  "key17": "4E4Eq76ag3EfvSvUTdQVrKNc3AKhiAmRdDqHsAYxTzSvqomqah1DymnkcxNiNknrYguNfS5wxS9uu9FzaRkobHAy",
  "key18": "4fZwvNbWLSu1HiNqfZXegZnirT3B9HjtFii3qxR5Xjkf2KK1hMs271Dikvej7hWeWFqdgjhuJbUmNhVyDmKSh2Fw",
  "key19": "5aiFLWLy9QniVfs169TWaWXku8VYqCFaLCCpthoeS2wa2osDt8NXfeHPYF39BJewHchRvCbAwbusMo2DTpzQd8s5",
  "key20": "5mECJ589gHvyiByvj6q4qgNnoJJVpM6HTPR9AMNUGf66PhzRWb5LTVWYXGmSj5aayLqJgckkJp2Ax7vNtA6R6iUq",
  "key21": "4jjZHDLJiRQQ8rqg8TnqRu1JtZqVyHDCibN9HttBUDe8doMzu7UhgxCgW7RujuqweTG9ENZjWjFV4NgDHwDeiBBX",
  "key22": "44VLTd4G9o6dkYWsYhQ49Ne8uRpVWSSUu98UGJ9p73bEyLEebdVk81CDALgcp4Gjg7mC3xk924ghPBKPAjaDfsSa",
  "key23": "2xMYhxVB6qXuRd1GYxuNeiQYZdWuXb9ahQM2fnKjpF36UYzx92UpGdfy5Y2RqJqc2La6z6sUG4hUuPdXr3DMgpdU",
  "key24": "4TtN3ykpj5HJwdGjnMzfFJ7RaowdEfNBZmCtoaYajvcGxRWRCguab9rh1j57WuLB6vNUz5Jhf4xQbGiD8jji7XwR",
  "key25": "Cywf9rFC5tJMsJWEe8gi7VEeXYyCeShFVYLoXsqRjRFMf4Z66eHZ4nysmNu9Dq7NbfwvbunDdnUw5k54Sqw4zyC",
  "key26": "3db4itMRY13LCN4ZaqjardK9qLeNXcrgb5QoMfzXj1SFtnNKnPUCSKmDLwnnGc2omLs5wNQZzgNJA4wvj2AwcfQ1",
  "key27": "2SbNe5b8oLnNYggJvaggFenCqawHWPT5WvhyvXXfFVV8i3M6x7NUd42YHqTk7M5ZjVA3yqgCK8G5xAw9hNVBnLme",
  "key28": "3PGDH8d9tVNLKQWoAYRxjZqn5JHAGB6P7VtqLVSeHsaut4SEPkMELuxJyenUuxZyXoy6StT1Ku75idgKUPAtveYJ",
  "key29": "4PQrQNH7oQNKgLqmvUWGmYSeiNcRDNRjJUrkF9tnoVnEgjk7BvdH6zqKXYAcdfAe1kUuxd5WjktbGBhtVsGWVmAt",
  "key30": "4hcQJUyrZkgGy1uQGCwNu2vGNorCGPb4pBmdKQLMfzdcNcZkHYG1KUZrXcWUhBaZwg4aU1bEVDfJQKDe6ZRm5axs",
  "key31": "3adT1JdviLuvvkPRivCQetSmTPn6tLETRWoDR6LnBQZFyiK4BWu77qTGqucFDH5oCw6xixNRjtLqDpYbQaCTg2Mw",
  "key32": "4njKkJL2G21oURbaGa2r9w5WgDTZdXNx4wc8Lqj4JDTsWf63uPpUMChagm2fH5kHxAHzyGiA1EWBVVMMwuHFLiTR",
  "key33": "3yi22yH1fXgkNKbSqNUmMXmWQAyzNgggaUEWA7juB4D7u3Tczh3Ggm9p12L8Wa5vfUcJosCbUxVJgHNd5KHypfbR",
  "key34": "3UNUtL1xjm5fq5aYyL9LadgRX1UtKXNUkQhUWbXfec1FsPnpe1EW89764sZng9UMEMFCFJiKHUUkxdSxESBw4N4z",
  "key35": "4DUwnkAfbDejS2HegrX4UbLXT9vfnP88hEsdGpae8xLSUGSerpm296cZnEGC8MNrdnXffuKxgPsJoi34KkZoVPcJ",
  "key36": "21Rvxu2vRBv47EWvk8pjFosGdcX2vQX39tkN7i7SQrSAdTNV3egmdo4LrniCFwn85xZ1ZyefaitmBmLdXqEnSPmU",
  "key37": "2cS4bbFo46WVakW4R6yYMXSmzUYQiqmJ59tkwuZSddgqS6PLF88EM4LupyEbALNfqdgV1TXzyDsQyrX4dRHPpsBL",
  "key38": "2mwpkb8cn6KGm9o8ZDT2CtdV9ex5uNX7BNfMuHLDam7WJMD7QGbk447CcVMAzr71GLRqWKNasqB1eXBQB2H3BWk9",
  "key39": "3n3WxbMwAWQcJJ2BM67FVxfeLRiMSJpQ4esh1WiJkMW3gqSz52qAMN5AjupSjrorvFRh4EHbTj49rPARaT8XJC6L",
  "key40": "2J7UV5rcYKHFwtxz7Lf6jKW4KN188WRvbDe7WJ17u6etrB52q1KMCNYUPmQSsP8xdSuU22yE5WXVvKbt9qJ2zFJF",
  "key41": "2YZsxf8hZG64XoXCxyznMxjCYMeAc5R16ps8id111E5qscVKCy47tZdgqxCYaGMXocAvMXkwmg5yJhMxPstQ3mWY",
  "key42": "Z2U4ojguvAoMnPpzoCNZEyrSGGtn7XARHyf2WQMu2KFcxT7Kx6UE9XVBHHYi1PD7EXpny6ayEgcPeL13rqMaaqZ",
  "key43": "4kZwciyJzcavkjMSGLesGpPvcS8rU4CN5QZCrQ2uH8YTZ7qvQjFQ7Jri6SPq4EzN8QXdXS6oTfHyChehEXXBPr7r",
  "key44": "5sLYg7ueEY6tCHaP2hAPAvB8EstNnEu8nbWpjUNXhhjyH3YyDjzk9hnx6i2yrStRs5uruQY97CHAeDKpxjka7QjQ",
  "key45": "51dDgFSPEsoch6pLF9iETmQ6h653Vvd6Baw9q72PueiFQdSUBMGeS9qa16SZSBAYPLcRJidGdjFPbxmJ4UFBJTLN",
  "key46": "KZ33gvbJYQRadYUWtdVBib2yWZL5PEChvn5xAUMFc7YoY1aGbFcra5uXyyHCpqr3RK8EkUxpefrBEN243dt8T2s"
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
