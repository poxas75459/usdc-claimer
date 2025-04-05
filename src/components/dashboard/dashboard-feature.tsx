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
    "4cBaEAH2sUFZ7N3ozRCcg1UdUduuF4wkDFmUMF58Yyn1ho1ScmmbrPb8mBVYY2eVgPsAYR9rLk8wfWGdZv71wjBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LP1bB4TzS1zBa4AFKfid7tBn4eTstfLEBH6bdmiUGnFG39ko1NCP3v8yVUNjNJWnqPcqNZ1gUmTWbF3p62KTH7w",
  "key1": "4wmThKib8z8b4D7neJyyWYRw6dQzqJj4fomJQuseNdYgsxU73rqPj6R4HQmWRM8FWzvB4CMMMzo75A99KhV8RYAc",
  "key2": "53tMmDDSAZMNSxm6SonKQc6ZUYBCQT5ecQoLsa55sjggCPVNuuSf2x4CQoYDbZ73M62NP6Z115zsHLYRWzP4DH13",
  "key3": "2511bzgPGx2g211quG2LhU8eKvHzbg92FZkgwpbTkWQm7oJCgqGjhYkeeQ1hipdWutkxM6tEiChdzt1jTv6H9L3e",
  "key4": "5vJjn9BMrNsZRsKsTSdavcbVDUQjmCTRiwGzopx3ipMv9uf2qwTUvzHx3rTGTpA4cMNjnrm1TrNMSJ9r1tVT2Sr4",
  "key5": "2BWhK2QMUcXWqoNpRj5NPTg891qPMQ7Tz9kuh1jXavwzpRk2rWS2YUURLuGgJYWDCuPEmb7GFq5X9B2zUiSmYmb8",
  "key6": "2uU5cGhqdqVbKw87nE2rsHtLoZQ15t2LtCgXGKcqfTJoj2FS4zdswgrRfs4uCy7Vw5fYAzyxaesfibqBqgmf6CNp",
  "key7": "2qF82aNRKTxEXtXfWR6kPTc6cWbea5LUajFK1BGGP9nAXMJrhjNABNPUTwHUSCKxKz293puekRnYsu4Y7MDdddH",
  "key8": "5ag2Nd7ATDRJibpeEcaJUi67nkv9TQ9tK6CZUf1ww4qz4eDWpdEKyBSMxs6c1K3SWkSqsZfwTcMKqcPfVxTwFsSp",
  "key9": "4txZhigPrWifam3K7TPmHkbkmiA5qxwzxMPJPUk3421FoFRujgGdeMZ4MNQnvMPmGTQx2hAeLy4pgMeBaUq5hC5V",
  "key10": "4wQJkJaRoYPtRuPJgis3JgsHt2ZN87h9PZL37eHwcLLT9FA3F1bwaHnqzqJ3mqcWikRYwUN7iRrEmjH2KMhYVegk",
  "key11": "XCrybKALb1S7wSip1p28WfhS3yuURn46EazPkTvGXf7hWJmm3hsP86j1TWCYS4ZegfZQLjdB3d5aKZ6wQMkS2F8",
  "key12": "4aTAcXaswVi62sDuDuKKvCqXExNVWiZRv4nkPfoUY45oJdYKAsU1NQ2fi5PwzmFcNGQ4LW8ziZNUuKbCDERqiv5D",
  "key13": "3vYbwNtXY6wd1gGwNKV6WmpLdhjP4Sxpr9YFencucfrNTj5fpgwtAuSsGvBEqhsRZg3aNyqDdP5RMBpyJ9gbGcRo",
  "key14": "4ytBeB3cPuuVFjD5g9LxTjcHs7KMptHa3nPZWKBVf2iEbmd3QYJybLjr96bzA2RnEneSKhP3u1XtR85YD79sZ8dG",
  "key15": "5AUW4TSRpRz2UVirW9PNpepiieuM4M7ErajjegXNjPAYa4xqnwRqetA8AZuuoK7kNFg9LWq4e6gDDhCkQmJLiqCk",
  "key16": "2w9sKZCUDfFgMm4pPRD4rCGQ5JimNP2QaaVHHFbTv1MQKFcR6TR8hVDSYHttDG1QcVdoXs6tVWkTdYWYrsY7uwLx",
  "key17": "vVjMB4uiWMfXhq8REHefDim6euN6eWpig1gaJf2j6wocoz4sErMxzPeiEx2TYvkTYgpJtN3ArA9EgQEUh7N5cA4",
  "key18": "3KT1M1AiXvRo2rdMY6azXP2SD9tuXiGcoNdho8m2qmPxMr4eFaS2w9tiHKWLb8y9P1NHyomK75GkDbnMSkDXqSLk",
  "key19": "47tunY7fXQjmrMZLq7iyyD6vSxZSBfWf2G5kWngc97kjmsz6YNoGCKjg7iayhpgH6qHbc5bMuVhv4oH9nZS6ndfR",
  "key20": "5y868b8Gw8iRUuk1TUpA26MtGwToBqV1mD6M2MFwnK1sepw8rBJxttv8mTft7gR5tpApBMjaXPdxnZEXoo2p6uie",
  "key21": "5iLQSEwwe2Z54MeAoiHEjdfeWWrpbmDPiGGCtgnJNLK47M3p1ZChUh9Dxye36ATZgNN3CbVAg8uhwau3KatH594B",
  "key22": "37zwxVnRzJyB5EQVXjccuk3mMR1GhAmZxrA8xUeGKyrGeafGmrgMBknmLGqTfYzknHXNLdeTcPzRd4rsGQFeHUzk",
  "key23": "2G6Kq9sSK3r9AhUjjryAR5PMVfxcs4vQKeHWNA83ox3WkkNaCBynujZGrjMQ168s1qjrx4238ztJY5StF3MN3eby",
  "key24": "4MUHn1B4STRbnx8BHJ6HCGKuPbYLHrXXyM4XGiv6269JoTH7ggmJ3HqJBtUF5iQrApzgBozFzkbJvodRQYaKmD1c",
  "key25": "48Uv142irUYQNf7tRVqaQNCmPEyjPtsWw1x74h86W4Fts5oFXQGVV5rdSjBDfexBYKdvgfUFiehtocMaJ5Qne5fo",
  "key26": "8mMdLf44bzwJ26Mzun2frwQ3aZxsjWyiWwQv8USWomTdmekkEHgMM2n3YotprrNxzesB89eXSB8KknEjGdGiHhx",
  "key27": "22UXcA6uqi985Q6zjJ1fnDbnHVnwuC6KEssovT6bpnMaK8hu49GJykFzJ7UsevBsPsE5CBLa1rx4hJnbNX3GrafC",
  "key28": "ZWZHxjat1aC7ajmawCFE5W82wrijwTymfx2sDu4xfVWJM5hxucSauPaU1CUpBUxy4SLNbNvNhqK97Ez3ttk3KKm",
  "key29": "3N9YApiVYujL9XoUcAzB57hM1PHdi6TtYAoqeayd8ExYcwJuuYKCoSFGzgMaNBvrdJ922DfB7GBq9Zk3sQEtYUct",
  "key30": "92Q5N8WMmmoreM4TM35ivgfEGxstmxxTgLWhxq6vDMUvcFmo5m99eVbm4E2sAA5sFvksKja8hcN2FKrLU2nZsjb",
  "key31": "hHAcBnmn4ZzDnKZXzGHm3ZVePPaZjkmFNeP2pSKCEnhLcCvEonMEJZXmyh6Be7aDYPrPGHnrTbsWFLejgPdqG9u",
  "key32": "62LfTErWSmYj59RegUR3EitQ4LjNs4SrJeZRBtnMU7emAtMFYvNfjjucC8j6jr1kHBEK3YqBG1BjyBRpNqvmbCUG",
  "key33": "3nHGKhpwBKWK9DFAvDRQUNm48dEHTg3RCnDcyeui7MSd2LEPk2pYMiDJmAJkgyATfURuUbmVLjavpbbir5ypqiFn",
  "key34": "5DgTwCWZPqWZ3cYfQyjJryhFfiShPQAdAMc7nPkFAvXL1iUhWaJLZsihi6SC9pQSxzC9nwGJPVrpRY7ehqJbVPBh",
  "key35": "3mwgF94hU7Lw2SW5xN5hvadYT5ZPepFeNpic2MCFbWgzfVzntqJYUYZ1VJ37DkdQCRyqNLCN7vCU9G66xVSPQs5m",
  "key36": "5EESBTkCE2KkXC6PnpLp7vFTHzCY8U2u9RW9n3zgMLMPRHo89Qf71QYV7HxDx9tAEnkFCr9nPMb7KcbeHzb2eBnL",
  "key37": "4EpesWC8FZeah3dYAx18KT3jyNdHdu5EShAV5sGJKGYHtFcXYc6nCvhZRbRJmcM7JFcvyKfTHz8BqsNyekZciQAn",
  "key38": "4JMoh8tuo6kVnL6oXpWNix3KDiYyzgu52s1FY7f3Vvgd8Tb7SNXUNgP5NU3eoxGo8Hkx461KywfiXRjyj4qwmv98",
  "key39": "4NspxUXpBobE5TjVNJQeCHgs2YJHGdPMGqw52dRa1Befgtek6L7NVnrEMboKHYZkn3gBvibChh4aCabi48SUkimC",
  "key40": "aM8eb4f6invSjT3GUvtAYu4NzCCoLHPhcWybmEmZYx2H7csDbLtVYKcmbcJebKcBnLxN8eWD6Q8JVsbFFRsPEnx",
  "key41": "3CgnKBySxp98FDuWCkXnNJhBHTZPb9YNKy7zSYbmzSrZWzZhLzqH4xWX5cUPar2of9gwRkgzkAnEicDPhwiyeDHd",
  "key42": "JjP5V4L95h2ZCMxEsxTs1SPwfC3hgbAM2NDQEotTWr84EExv9JwiawfaVafRQs7u1VGFiTZtJeiiKKyBc2z6tGQ",
  "key43": "5XNyZSQUq9ctinnKadm2KtvxdiCSQLAeDBU2mRZQ2BWRYLxJqwSxJ36M2H6QF1BJRxWGiTPwSi6MYivgWFe1varW"
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
