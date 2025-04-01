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
    "5kXehvSfFYDEEpv2rb26GpTwSktjCCoBLAestmh8kt7eratTUY7Vj873MzbtzWpThfQzeHTwLJxFTsXG6quBauNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTNMgspdotyBNAkXmyHKpAU9zy7FumiSxBUx3weyFLE1MwJ99XnpbkshsfdXvDVNYYwtDjrpzQwZziaEBdqgycJ",
  "key1": "5uK21oJG9Yzd7k5fEEPzcCgQMUTvyWxg6PJdkqA2Gs3HKjmbkCiThDYSg75SZR2mWCq5K73LK4mTyvhq8NnJ6Uy9",
  "key2": "KRtsatZTxtRXCj9J4Ah9SRedAvsuveJy2UtFBZdMZW3r9shMxEr2Ve7qsrJ25VPenCdfiYURHNfVPGiL61V5X9p",
  "key3": "63b4JZo321sCZmytJJp4QHNUnW4V63mQDBbX7cM6PNWTcaoHM4y1Da1bwJuLtsBAyv5nzci7gb1YwG5ySN73rFYL",
  "key4": "5zhUzG2Ey7eVdoWWGx7GsQQVXt7CyCo1FeX7wwKz8AM23Prrcx1CVifezEaussM9aiwjkPCc7ciEEfJJisQMTJd9",
  "key5": "5G314VT8wY8uF4dmgptQpFTz7U2C4vsszwWtXYxw1tpD4S3SJLqpm3WSr5QKcKpzM2gkL6s4c4vzdBywZiskhEax",
  "key6": "49RdQgqUbAeb7wQcuxjWuu3Ldbr691eYcpJhZ8XahwzErmGF4EYzxkWrRCXCBCwUJpWRozb9hZC5rxpbqMaaSo4q",
  "key7": "2MqYH4L1kGrypz1WpizxZMieC3pazgBNumoPNp2t6BR9LVX3fn2Wb66g2wF5UaAMJYJDvrGLTK6YspVybiXZSajR",
  "key8": "PQPm9iUd7A2v54dYFU1MsjYNiSaWmf1pmtuGKVW1wdDwJVNhbJ7mMMfmC6EFdUzi5iyE1oZxxjfxwdz7vBgMZda",
  "key9": "3srwenCc5fNLzzhSQbsb3JirQg1VWkNzJvUCQ4KPeUpMEtmZ1X3rUKZ32iiWKPKQ838XjntQAZ7XCLjg1PstVKja",
  "key10": "4Xhgds21SLc9M4nXrFcJCZDJz7vKGnXeqPiZmZrHzZt5cXbJ2CWi71vyaBGWiZiaibeJu5GuZQBV7p7ufUMTyNyk",
  "key11": "jgxCwUxMCJPH3aDukwhoaZWqZid6VwHdJ2F3iKAHRV5KSaUKLqyxBvRWAN6pf14of2BwHhNrNGSmUm7fKMvx9XJ",
  "key12": "2XPSsgzdaZNZDS5TCiRpSqEJkpARwkaopfgesxBb5Zs12xuLN5rTBMEPbbGoxQ7kNs8Skncu3tUGCKx8sqdydHdD",
  "key13": "5wZ3f1Ge6bsqGjXzELWumfxx56TZ5DvzH2gbPbLjU5YrdTft5ThmvLrHiHij1YU3Liu5TAXYCvWBgg8GrLrKqQQW",
  "key14": "BGvLC3yoFd5rLUeoduXFTaWoNwjpG215YY9JtWaaP8BFjqnCcaAS7pTynjPBgmpYARafDqoTohWB77GADYcr3zm",
  "key15": "3viFdQDHnwwfbDb73pyxT2m5ZXVYcxzoBfBTdmu5uj28yfDaChpizDMj1GG5RMFn29uYMDWGnjg3eVB7pXmwtKpf",
  "key16": "56rq7DZAGqdpVGPumLu6pAf6BG9LFgRzwdEVwAu5xSscrckcU51JqB8TQWVG16B66sUY4DhxLrX1ECgcv9xsLW91",
  "key17": "3ajua96ECAWrLoafmnMX8WT6FYGWN8HtsJBUkfoyvcu1R8yKtS3amrx1cxQvqV1SGV2EQ8HkTZvH7Yj7PCGwu5yX",
  "key18": "64z4gKApFcUKHAJn2jW698Yve8cp9gAEbQzYmf1F52AxFR55jj5awbns4EsC4p7g9izP5DxgcdfCAg8qU92Ye1RV",
  "key19": "3PbHMfa57evcEDD1kF3PjdDo3Vz8W72okSbuFSJ6kL6H1w9vSNjiTmV3zUVaZwoH22ckgSpZ8WVNePgUC2XiSaRQ",
  "key20": "3VGa5UKcWxeTjbjpVd7UMUDYrNxuTn6AiKG8ZHC3rSeQMCHAeDcspR71VscytJChpxN62nhHYbdFMkazd5rqgwwK",
  "key21": "4Bgz9CCR9sqRpgc5SEnWB1ZzfvRCB14YdtfJA2gffF4tryhHBWxeq2GNsFR1fDBm8j56sfy4Kc65dp5Quv2cHeNq",
  "key22": "AT2JAw3cpNeeWCv5Byeh8Ca2NN7f9p844NAQxAJCPGze3tnmExgyy7vLdmbYaUtvk5R4J2gwBHFY6aak2BgNDjb",
  "key23": "5fVpaXdzwHYqLrcpVt1wH5PBjpUEENxJ6d9mAcTtx57CMhJBtLMAKwf98kHBprNxk8TsAJKZK4JKEo2AndYSj9jo",
  "key24": "2JcKx8dZnHNve92thmwmvnugn1U2MxaAjRZpm1x8jrmuBy417fG4ft6RVix3svEHHYaLdhRzwWPxaPh6H5EAq6oE",
  "key25": "5oUMqG87bFR74WM2FpSm12cKp5ycqY5anN5ekJQmfmLTLP7FwNBnh9HUPNnUfDGBG8dYryZnFj1YLgmmKwF3Pcjb",
  "key26": "29N2VrYcVdqC4N6JVn33BUJxuLePfiHMeW1vgFyyDWMYN4cLWMyAE2CkNuf2xZApymcP6aXMRJMRG3M97on4Jw9L",
  "key27": "3RHKzKDRYULKgvPq7eMWLEJBWpFzmFEmW88hn9vEoTNsX7Akqwj9XpBG6tZVWfrnc2rra3K4m23nbE2kZf73YaVS",
  "key28": "2hg1XsPFGxsCw5p7XZ8QVjTzxA3kDVGEY1t69GutaoHiEuLREJCjQGKNQb49y8sohe54rPjQKuvsLgRt2R65UaBm",
  "key29": "2Na2StDes9tDXDrgHV1mvKZJNjBWEmuqMEgkhuCYwQ9fKHwegzdgvPNZXcmkMpSghCJ8JWqJNv8VAANEDRf6LKwB",
  "key30": "HQ3YwmjdvE2rXWNqzXQ3D2ornrb5BSaziBDEoh1TQX843DTMQWLoCp5NaZnKv8owQC3DvkJhBooY4LMQYQMSgNz",
  "key31": "4TU5KZe8UvkCRHpWgn4g69BDEmpB4ByGxJrAT6mjeHR7zbrZeCyQCmMvUrphobyinayMgPocgs1UKHX9YfC84NMW",
  "key32": "3hmV1ibEnRqdr7uTxasgvWVMaPFcjUvHmowEu9AmKpd7B9s3sCdTAxwWntDnYftbjJUS1Q6aFAru2srXEzc8L7Ax",
  "key33": "2bo1p34EtaC8oGxJEPJLDu63ksVnDksdFvg48aEDCYczjzKadzKdt4HgkHdHD8kndwc63pE7fBjG2XZDULpNy8yW",
  "key34": "23bWYYPD5nYTkNE1LosWidKq5VZFvgyia7MPYY7KawnXEiGtrzQfw6Ug5yDYcy9S8M4ob1Ly6KHLCUENZoMayK6z",
  "key35": "3WXvv9K5XY9ZZnPhGFXXvjDzJrY1WcWU1DN1yAVTr7Xyzx1dkjV1eve5vsysE4xPvyo9EQ4rQspNtSH8d3kiEuA6",
  "key36": "2wf5qoM38FeGciWAS8zYsyDBTk2xEtirjv6vvx5kRv5RsaVDz8tRqNcP1S6FRUE56rmM82KatovubQrSDmKr8hqF",
  "key37": "M5i8wyVVuA1HemDXQxGDi3WRR6zhVnK38pjgrvfqLfdV8FkMgz2Hav1zJJ3SyW6LtxvKFeGxgJsPtGYeApPsHJM",
  "key38": "5ca9yNnjJYLU4CYN8gYu8GYeaB9KWKuCqGLa5fNdNQwucXBKnPBzt6xDTpDBctVD1rX4Y7661GAGRNe8ZdqmuREV",
  "key39": "34piBDSnGAFa9NFXjwZ3bb4qAUiuMAUYM4brKiUN5Pah5tkeGWBFA7GDYAA3BocXyqD6jo38K2QaUsptN4Wzn5Hn"
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
