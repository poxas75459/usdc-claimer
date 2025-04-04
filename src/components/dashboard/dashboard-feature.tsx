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
    "fwZH2XKzBTUBULPWAbyuaSYj21o2uLYpaV9HzBUne1ZyJByQuRifAHKQYgu8fsEdpmkREv8HSxcpNUWZFt17mSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVYZi4uNUEBXoyft1jiY4oTKPzZuLWAdqhGxDiQzjbN7V7Sv4zZT9a4gnLZrgnZbfrNt29uUGjD7zFrrTevUTgd",
  "key1": "2USz5LQYvMMJs4N5zyp3EGR7Efb6PPEES9dHKx4sjfrLpfL8cPD8bEHkTGwXhsN1MLAzNZMsvypv17pBYiUPuMVq",
  "key2": "648PinNwP1eRVRzJKKq9buYA5PRzxq9M9ML1pEWX7qNqyfyBHpDyGG545HqVWybbY5GjGimnkP16a2oE7dztuuGA",
  "key3": "3FdsDzng6Vf8YZ3WKEasuhTWYp8dHqouXLFfp8EwpUhRDURTjrF2G5MK33QJK8kSDCV1aJk9fjJdJVX5jajUkTFD",
  "key4": "2f6fUoHqkYfM7JRg2qfgMqBmuPrpQi1BmTeCtu9JVf1FX2xyXqWg7R3dvV8aQJ2UKEsMiMzmSmT2DEUfKN3Gw95d",
  "key5": "3SgnLSm9XAj6PzVM3NBkkUxk3hx9iS4kj6XH71unExT2Dw14fyneYgu4SghPputRiZhmJV7RiS4FJny3ZmZDuBwP",
  "key6": "5GNXc7ePHisPfa1wrSVgFeenZREgPL7Rj7iamGdapdxnzru1WnVyQT6xJU7HTu6UucLYcWHEDQidfvF2xAF5iLoV",
  "key7": "4kjZE1HECmT6TyAWpA4AnMUdwnUyLBBs4VsyDgN7ErBFMfbmBhGa9FtfgkECKyF9npaWo7PThJzLLBtePvJLpu3q",
  "key8": "4TDaZ2Mu2Qq3QXidZNZq7N2Vxa2weBv3u5Nbcyh3WwfN8dt9e1hgQaf7sP6oCNBq2FDWeuSnAng7DQgbULjSs2MA",
  "key9": "65NyHsfezze7UJqejaXBbcU7BYSQtyvdMM5JGe1cD9u8bPbwBKdpqQVQB3brbW8EYF2cTXPutH9D9mi2Myjeznhp",
  "key10": "64TcT1bvShG8H4o8848G6ny6nvyLAVAHeF356QM7GWAiPXnfYdY4iaFkzaaJnAGPnv1T3Xper7qGKUuuD7hmB1Wj",
  "key11": "5tFtWjrpKggT8vouNN3jFL8sev1iERws71AHWB184rXZxZM7kR2ZY7JAruWuDCpoDhJaCH5KERdURQ5B4uh47miM",
  "key12": "ZGsp749jE3ZsDerkDtsiYu5JaqUdpzR4BhtrYtscRqRjkWDP8gZsgH5Semjp7Eu4Y5RAgoDNd76XQZQqoGrCCHZ",
  "key13": "3oYRXW2H6ECK5cpRxbYJ2amQkdCVj2zigdnebfCVaPod6a6P5GKP2UN2viLMFbVQyo5bX9Jqd92ooMHkka7Q7Y5K",
  "key14": "3xzHMy6eHz5U7TfEdyKyUdsCbCKWnAmBcwDPa3kSRBPpMd8xsZgxfumpH98YrErQNgSPotCxkpiB3ShQvkgkgSry",
  "key15": "4hPcqVuwSZyuLsUEaTn89pPW7cSpnTjnbRTLHRuhsWsLCpDjnM9dMVYyow9mSBuE5Xb2s7mhPMCJT971979Xgkfj",
  "key16": "2Yp3hvg9XHRBpNTpjwzRRLSZqSLKKMWtXZV7XCXQ9DzY1KT2gD6jaEqZgwRoTZqrw9oWDNgy1YnTD8bKFpRFC8Vd",
  "key17": "5aMBpnwCEGMm94dRRcCDLg378tDVYyMdtQsZLFUHScETi8bNxVSfXt6gBZnf273FTRufS4sooKz73T4m1jxjUCVv",
  "key18": "f1SfjAGg8CoRgrfX7CU3uoBnJUpVDFQhj9kkdzo712EXij7DCP1CZvHuF1BpQWtWteG7vnnhL5NHmXtcAzJbK2D",
  "key19": "4EyPdUNTYnSknGsCBL6yd6ZGy62LHpH6LV3QuRDxFEyVwiWMKyA4ipNh9HgdXHgiSSRJCB9Eq2t5oQFPCBMag3fn",
  "key20": "2yRGUWmjM5eXXA5wPzX56CXc16GTB52vRTJTzTD3xpwusRrDG9dqqJWkucnc61wx63xkchZ5S5DGz5a7e1zcV7Ne",
  "key21": "5QkikaHSj54NBzJNczQQW42Po6Ha7D7fYh3zP5FeoCaxUWmuRedGHJqCgCwv3kA6ptqK1RWz8G2yXkePJs3j2ZHN",
  "key22": "2Qx5jKu8JWDDLXepTozWaRy7zL1aqHG1p4HHm3Gu4SHY7XxiptYAhH2ypYuSvwpqJYE1ewakyLMU5yRYUDDZj6Ue",
  "key23": "5xuXDLDX4bWpCTd3Cv1TFCc2uSYDTboXnzZyXQMKgeu6vbo12HvfdESRh5ARG6dHd7XybJbLCBeoZ5SkKTdiV8dj",
  "key24": "3hvZCwoLmgunBShkLhbT9WBqjVixSbyPJVB3wRfJuSRHVFZmJQEPX6YuTSw8NLF8tj9ogbJiLcZtYZRi34ty4ejz",
  "key25": "4aLPhrhdUxPfR1JbPgFFnaHnLaoDCNjTtAbfJ5LW35hm8ae743Ymdw9YCky8uzwZKYU3Gj81PZDinTufw3ABFYqE",
  "key26": "kgSMeGL9oxbpMgPWdLjFzVMTzd2brjcnMhiwHRJdqq6HwwnhQ5xWS26nsj3ivhABynbQcLfaZ2JxbkyEwsMi7Uv",
  "key27": "4mWpr7zVHCtHURSera93CNgLZpmyh38Qrmgt9fzkXALCeDRcavEJMg2dwfmhDnWyG5SLAf17vgAMuPWJ4haP9mAi",
  "key28": "4D5XFDUR46a6CxYSr8Z5DkewVj9zFFjf8hButxYQhUtXjmcNPFf8hwms8WXmFWnQpvWYHtUKCTTLJXtCz9RGM1vo",
  "key29": "55o1NyvzSFrw3CQahP9UTT6Dd7HsoKNJiCZxDkdQLv2AXBgCbsPyBsPAd9sPhEKKkTRcp3YF7M35fjkP69aLfvTY",
  "key30": "3jBZQWxP4FqK3RWbnb7oDDKt7UV4dkrJZJ8e8YZQdiomzKVmQhervCD8iickEFmoBzqmGjA3Pnw6SYeK8NUP5ij6",
  "key31": "4ZjsNMDNDd68wR8VENj1MSnHhBNucMWmi7M8rec7ephVwdPEWttNDCjtCq6KcvcTug7oj93YWB2fG7FVCadw9uvV",
  "key32": "2HzBZtYq1vz53jkUyQpNiudFRbi1dpBTNvqJD51qpWYLJWhYP437ANLzVdimCjjfuzdYfPGPncD6KM8KL5mEfbhw",
  "key33": "2dRDP2JhPeYGHGLhqAhvNjzKU9yRG6jQrQYjdQ329wfxRcmkSLVQt8w2A7yVFbb5yEPXdo6RKXuaGBwMNkkaSeSi",
  "key34": "3dZ5ex7wjCPNWMnKb8A6BMRUuagGAGcAA6ea9VPWzFYU2AdvyPJqpZSKWUSGmYqc9wCuk8LND3ntiLpjGwPtq75m",
  "key35": "2FbZgejU17VAfaMR3sfdcJkrH7ENv4bqPhMrS3UCii48TFKr9nx1N9Tuy3ptXErBFZM7PmtRnjSVXrFb19p8rUKa",
  "key36": "2Lr8QtXckAJsU1ZYmaNAZpEqBStqKK8L9Z3ggkuNdGpJWvPphwu1ELTDrX6uK4KKCDuicEFWJmJWAs6JfcsHchZJ",
  "key37": "3cJyz1sjHNUbs9QQw4XirjbdCES2cPTS947GrabB5Bb9aTSbX79iY6dXCGzpXJMD866jyYh3nKJw1JQcW9QWMJrW",
  "key38": "4m1J3gB3AkmUZPQMAUUxCoUAU4SZjPSR6yiB16cvS968KuqrfXpRcBKVnKzoxsTg7kC2jDCyrUz4DBdusbnLkxvG",
  "key39": "4W5vHVqgKc67Z97r8eiH2URELeARGcVoy6GyqX57LXi3eoU2YBRxADMVadWn3d4NJFaPDL4hQjyCE7RZqaqr2b9V",
  "key40": "2eTAfMQxp3PmpmXbyjGfrgiz8LywATF3PtRpu48QgqWAsLtYkx9PMRpLsYd3PZaneKvep1uQArLtRpNoRUF9seG6",
  "key41": "4QavAmVEuCZoqJ4rLsCwNWVwBekU3FVBCARGSBw2nHXBjcXW3SnsvA5vr31fkjZC3JcSbSbCbjaMUg6uSy5cqAUz"
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
