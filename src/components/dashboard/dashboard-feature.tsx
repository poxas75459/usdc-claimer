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
    "3WzxjCgTMFQRzjn1CyrzwKPDTCjYKxkA28Zx4y6dwEb73afs54R29iqajr5KbmuUKUyESoesQteQzXqkVGFop5Hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aMEkEK84svBV8T8yE8jedegLxsmtEuE7N2eNassmGawApr6iHRJDyuez8r3agfkhiyKdR8TUd2LDUJjoCkTdS6d",
  "key1": "66zxgBotAwuseCuS1gLYdznGyCF2i54BHLTC3c7EdRsLWkQamNaZzDmp7mEUbR6DM7Lojf81gQNHGGvbmc94agNv",
  "key2": "AW1DQSAAi9QMGCymxrJdCN1uF54d814L9K3hkcP2uTkaat6MDDrb3CGacrpGw4j6evkRKbxG5eofjufrMwwcBfE",
  "key3": "5QJKxxVLnQPAYYUJLasbwTj8EgHjrNfomFD2ADPbMhee1wcBHLmVSE1hh1yrratELvT3hzuhci4PeqnmESd6aeqc",
  "key4": "CKxKPFARYTY1NEAp3LAnLqXLM2i1mTqqXHwJaZtjXgAU8yhv84YAyp9CAV4pNqSqFaoZr1LoGPcFh2PvyCaZdwT",
  "key5": "3NLxvEjEeMpiHAhQWgmojdepqdCkpB9z2qWthWvjXzG7VHKtnDMJwbaizADEEtRuX9zKm6NcWmaq1bkVMU3131Lv",
  "key6": "2skJhzF1BFTm9esyF1DWJtnQS9GJZuS7nnsqCXdcLvLZyUTv2m6ruMtyYL4MScsiwPxwMFgayoyHm85myvwEq4UN",
  "key7": "3AJDkGoijzWYuxz5uaSiXxLTWKbyBdtGHgSruvcxvBRNAXkUk78EfgA34wP3iLRJ3zEL11wawgGs23U7m5qMCb2g",
  "key8": "xAfNU3UcJDF8hTzAdeMGeNCz7zaRN8yW4x3pap1jqgL3ih4JZ9DNHY3QunYJsPHgmHFJ1EZ4jhCDZHYv5zY4odi",
  "key9": "untP4vRYs6XC6UFW1FBUydYVr9RdWhq5DMr4oYVvF1n9nNPf2MSFYk7ART5KcZKm6fom34DDbmBYxQBex2t9mkR",
  "key10": "3kW6HXY4wwuPBMiR3vr39eb9sRMH54nN8byckHpJXkSXDhAKJbCiKw9jvTU4Yisagttd8jY2A7US91cyxwxvK4wg",
  "key11": "bzfD6Fu1zd7Lqb4tNzvBtmRpkB7AvwXeHWfWRWV4ya2tw3ogh3KZywta5noMkUKMJrWQoeVuxfJFXjvUQtHis6W",
  "key12": "5ewDScoKrjzNJF1gDzzVHxs9bVdfN7jZ63FMLJ4iymdkKCmPNibiqTxXrUcLHG3d1mDwEnUS3dEtVq4S7z5UzK4F",
  "key13": "5pb16D5n7PMr4Xry5SmZQ89fYS8dXcvqhzze7KwURXskiHuaRMXhM41UQFh7Y1QCAq7T4s6mS36fY733TbwjeJru",
  "key14": "4zCFLo6wxQFJbyQtFSVKvW48nPn4vDVsszkrqZvTyYqbuf38S3aZKr1VpGNJX7j6q7PeP5MLKiCUxTeHfKanEVoA",
  "key15": "5K1svwWXKCh2cccXSyYR5ibg5wpHjqEeaKcJYsxn5PkZedU9qnQBLBWre7dhaJZj9jodKkmFwHuueBCdhVdGrjko",
  "key16": "2XrPAJKhGS3unyDomS2cdSa9KzdLByKK8vvd63tA2cdoZWT7sZA9edMGZzEsCTv12A2jzxgi741vdjnSAa1oQqV7",
  "key17": "NXAzo1tB9FZxYomNtcHmHZiruBFkCAiPmfML14yRj2Fg1AmR6mH2G2DRRTwHX3ZH8sMec6yPNXT4BTGsfjnyEQp",
  "key18": "46Gjp1yU5LT3gn4DueXsvQ3QoZ1Guod61zMY9Jvp2mUJtf3mv5sMArsyfTvEJFeuJTy9Po7Y62MTN2ZzrF3mR4N8",
  "key19": "5J9Q2mgq3v1d9PAdj3yADLnnMvTeewqcQqHRBpAsHaPNWqJddAND6GCrk7fK1BAQDiicAeN17dFbEDY71Lb1kfGm",
  "key20": "5QRtWpnYPKptY34nBKpgPmSc7Csp5ysCVvCQpEdeLcP8y4XTGAeoyTz1LYbTqGAnhjHVnLFNwJqZg6kZk8YqZPBP",
  "key21": "4CC974m9rTfGHCGwhEsewvFQpyYDgG6FLFCSdJywYBVeW5Q1cHQahvBgQ67ck7iYDQYLquRzQZdrHrbojD9jgc7k",
  "key22": "22ukY2ds2dhFmQjcBHkTEg6rBtg8zHkJPPQdfUwnd78562psrFT2rrK6v7WEmqPT2mB5anGDjjxGpN3ERhsA1e8w",
  "key23": "fRS8xVs7y1D6Kvn5ipd7uSjX7KXNwTqsRBvaVeGYUc9Sy6gSDFn6mav7GXp3yuWETK8wsY9ssrEcRUzv8ur6JQD",
  "key24": "3jCfSGaVbrwdeyKNShkHT3sdUGPXvNsGmp8UZN8z7ZkfHpBddufagXWXGq8KzhUegT6LxeNdTjhTur7DGYwa1Y3G",
  "key25": "zNV5ipDAqMW83tBCQXNiwmBKBdvhDzsqF8y2UXmcFo7etnFpQW2oGKQkhvu14kx5mr42K3M1YTBri8UkowfmDJp",
  "key26": "4swuXfTvZHwowtbtdya9sXTfxffny239E6fA8doKp1qwZ6tFs7Eu9f9LJxUrFARtGnDV3MjsoesUzNHrNJHuxHxQ",
  "key27": "fDUAvLKaJsccf498QG5JFZsD6tTuqjgUCV4dqxXhRPpYajjXcN5iCUrvVAqYhb3QFz34zty1QL4gaptSTEKbDrk",
  "key28": "5S86ey8T94EtKt7WuweePza9n1gRfcXj97Jyugb715SKPvFuAiYi7yjWcBPaEmGni59Pd1m7teqvGWyZpFdqC8yK",
  "key29": "3uAGvYEw265eudmhgZaBaCgdH2QrMuZFt2tQyaTdp9Q6Q4TeYvSdB3GFPpf2ZJ9WUFd9bupg97veAwEL7DFMgB2J",
  "key30": "2c8MxU2XGvjh4QkNMvf7uYdKgTkbVKmapANuHzZ6jDP8MBW8cF7RejxqHZUV7FfrEqYCGeq8Eep2R6DKKsu1jFa8",
  "key31": "3mHHVtAhJxJv8YY2otBzUpZ1Gbz5iGq1GsJxTRgeZ7pcu1m1tSpmyVhWbF8UsbQLQJPzEwHDEv3WcGRyFwbd4rC9",
  "key32": "3TUZ188CPQxHs1Z5VJ3nKSKSddsDWR7KCG52a5wEumRN3oHFrwgcxhewki2hznkkNS6VbbPdkeiPhs8Zna5SbZKu",
  "key33": "4HG6AManFfVoyMA5neRyHsdfkyq7UHSRZZYqCqfZyv4iXPkgqUmRVXKCwxoGz6idMnW2XwVh53EP3THoc3GXHsuQ",
  "key34": "4P1Hp3UikVbqWU4scnxB7QpxER1ZCUeD8E7P4Ydcu1MoPmBWZZXCk3PBgLDHn4iqsrpKafu1AoWx2JqCGw9u9NPb",
  "key35": "4QsxZrv9PkvbLXVQ3sm8qexJSqxau3pBh8U8RqymZFXSFRw2C7vnziE2JUk2rt7X3s945emi9aDZM8hbghpJWQbw",
  "key36": "38uELeis9TR99ZKbV8te8LbZ7731fcscK1GtFbsqo1MJTnQZ5D5NAJeqSSbYcbuox4TyCq3r1PgtEhFV73GFr5oC",
  "key37": "3CeLwBfXbgX9vCEDA2cXEK3hesfL5EFNJ9XhLwjchgqj61jkwbfUoGa48gBKzfrxAXsS3V5xAaZqDNn63oWLAew7",
  "key38": "5rtCeQApXL7ddhBigjMfhACR4vsWQGi1vJHPBXHC2dKSWDYb3urxFZL1y8BAhotjMSobiJFaqa9FHxxAcLsbM7gQ"
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
