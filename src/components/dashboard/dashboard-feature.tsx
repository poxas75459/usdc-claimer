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
    "45jS3xmBWqCgH1GRXbPR5DXU4rHob3SvVQqMCweNmgorvFp4NbTZQVYZw5kzebRLyp32XJSd6RmgmLyzUkcUCbXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62q9Jq9H4WpjM8SREN1ViuE97ZHvaByKw8Jg5XQxPQ9GEhQDC8zj8bhzKRLCX1bpaKToaXqPWc6DnjsxY2ziMZ3p",
  "key1": "4U8FuLCbcvQEq6haGJmVHJ5BRNhQLbFW3U9zMp7x4vSQxDqoeMmp6XH8q9LjC7Y3MEno31K7apXWK3SRoJAyKwyL",
  "key2": "2ba4cmGkPSPEwK7b69sqirG9MYvHcrRqgAUM1SXZawCVbxrRsU2oD338gA6uduarVExKkRDCivkvXEw48xC44PEn",
  "key3": "53xVQooFJB6QfkDZgBafVqoRJuTrDuPmu2KV7wnmDskJ1x4HGkcUbwaUWZEVNmW1yBnVLjURNg59G2PHw6VBRFYa",
  "key4": "4JW4bvGpGXtDHD4MNJiehb9s5WSq6A8L5JCfoXjPyRkGvsced4hjAnvUtfnjctT49jYUAfC2C2dKSFDD1g2XyvbD",
  "key5": "4tS92CjkicJ3962mikDb54CV4dFQgMjRaDd7DipanhtCcurfsR1Cx19LYstVc5eB7H7gj66Aspchyfo23f8SxP6Z",
  "key6": "4uUrzwEnPxG5gxb8t3114UXYyysZKrbEpNT9MKvQqAKGQvuGN2KPgyC5sSHE3BLMCGCRfYwxWdee36H26y3HAmTr",
  "key7": "4WZSB9zmkBw3oNBKeAvorSKw4GLEY76W9fWeGmuia3cuuS1G2NZ3DYwaC3QuKfo9iMMtEcBNHomBhybhe5n14gMZ",
  "key8": "64MLFw13VBpkHagQG6i3tXAVwR6dfXvuEksfi9D5khH4Ndj5ZAj9se576S73Lhtqfs4aAnTdrnCwxfMrfkswDjye",
  "key9": "3pYn7Dp8WQTR1ysMM8a5sTjD8nbKTRnS9vxtExaWVT16MPfHhiFyEbs8j6Fb8eSqbKvUjRzXNfamX4xxRzvYY5ze",
  "key10": "JsCBjEprNf9fmKPiKytcDbjc3Kx79dNo8NhsZDSiLsjSXP4ai4gtgJ4sTeLksyx2dKz3ywduvCLvZYVETK8NxbL",
  "key11": "UE24nBhE6YJcK3cGcghTigxGJKGjfR3YMKnjaLPvgQ6Rj88E6BoRy2zE8qAGMtsT4ymxFaxwEBzw6TLUfbu3SEX",
  "key12": "VdKPnJLXPWVyK76CrqnqqPWUQL2396pU4qgYEZfLRSzMdZwJywUh8YjAktZPuCbxMGMHiPR44h1ZHtmJuouVbza",
  "key13": "3ooBHm3pWLVAVQK1xmocxfcW81DD6UZZSXWC5EYQzpuVaBL4HE9VXW33Mi34iDkon7aoUAxN3dQm1nWGkUJpwony",
  "key14": "2YZNJqft1yYDPMX8wDUbUmCEqCEfnKHgghqbW4DJRnAMN161gp5UAGSHL4RcXyMphRtToT9pq79mgjzeNVV1ds9L",
  "key15": "2XAA82LTYttiLSsVUHusSaFqrLUS6DDvgPGM4XkpR9GY2dSRK4B73YWqMt3nPctvRuTRFZbsvwJwfqNRSHHNhyyq",
  "key16": "27UvkecwzaQCtj7TUSFUt87z5YNJmmMwiiocWDuMg12rTQVwQfpVBNc41fahA5Z2SrC6dNY3NVToTa1NV2VhGt27",
  "key17": "3K4T7o2u3YAEzc4kKLJUCEwV86HDDQ7SNtYSehvRfnyZSRtnf147aYT6Nz65LbhjoRooAMkP2kXj8UiAvVtoBP2k",
  "key18": "63s3B7tsLXMXXLQT5e9qBCoiRTchdYv7uAau3Y6akt6tkgPGVjngpJr8TvwHWFKmevvgKStDodTjdHNrW71WR9ap",
  "key19": "kFe4g2NrZv5KGT8q5wnsxBNzkVGjAPPcDvwLnWgpbzD8dTDncguRPPK8vYgaNb3gzNdU85HBkMFkXstCaf7QSpS",
  "key20": "4D35wkfuH7TBusaZ2MCV2ZpNPCWsR96pJEeLnCKyjHLfNf1TXjMmVBNxw6VDCKJKfV56Dky4i6J3DFBMbmJ2qUA3",
  "key21": "5bGyxUFycAkpURAPZaufPX4qQo9s2b7QQfZVpQmRbHEBZGbLLruGuKgcSrJ4KsN7R15Vv9pWhKXGn31v3Y1vY6Rz",
  "key22": "4zvXdciqS59BxfuijrXEMcJ6WsgDhRuyrqqmThmJ6DDfYMLr53btUEtfKTuR7cBMgbVjXxNzHc2ephhdVyEZe6U8",
  "key23": "4XJTAFLJNoARoY7GQ3qn1BDxuWjEXZTAvPZVS6USJwRmNxD9W6iwb8d4kApUhwLVX7No6eSfwsrqPeBscfm4W2Rs",
  "key24": "2RU2TxYEfHYbjpAyf6risD3XvQQYe99hxaARnoQPoZckvvHHFk9iEDs3s9fud1cJpUFpXCfEUk82bk6BDLKoK9ai",
  "key25": "2YGpdripDV37LqA5jRYATW1z4n3f3P6AGQLaHx2VZ5s26fy3wijepbsf3wRSVbTaDPHHLKkxHagDjfaGAi1yFrut",
  "key26": "5u8kpL5PwX9nQtaRQn3eVKfqVXkoK4mU2bDL6ekAKUsQZkKKSwibNuKgmhujbgNTKTdHpjJ75WeTcinYhUp8FYeK",
  "key27": "4NPBnW7BAvbuwNiFWWSKC4daxsWmSrx3SZtqRi8nysc8fsh9fxXXLV78tbjpTku3ZRAk1QbzbveNBkiBzjqhLrg4",
  "key28": "59qvYju9wuLLYkTNXQoHxCcN5eWhtmnn3mq87fyKcpPwSZ5pZNaQEfWhVubjS9CFTm9J11CsGccbzJmoibrKQ52E",
  "key29": "23AwbSQiZhkzqSuRcZ57NgTh2ALNpEsfuwpJMCyMVhJGUmzzLj3gq4YfsY5JsYjXJoBWp3De55ybDVF4Mgs74JKZ",
  "key30": "5DBynQ9ixX1akTy6jXrt54HnfUGeUgVsGxyAUqApK5s8eWy6uu2H5oHfdH7CD2v2y6j8QkSQv8c1UCTMAF2W9uEC",
  "key31": "3TTn6Exa2N5s4RZjVRenAmg35sSXKWTZncrBQ9yFRv7FFWx2cAR5RbsgSfyHQ1WdYVzKBai5YcSp4hht8u4jtECq",
  "key32": "37E6UB5NAAGNHmkFaHAinJtRCPS2WBSTE1L71ToXXqHNNFb1DPgUdaaqKJnzt4ymcQ796otwNruFT7MSou5PDLth",
  "key33": "3vNNsPrEuGCbvmVLpEwp8U2wvAVRJhWTMkv7vPteaRmWHubo1awE9VLGGyoh4fRj4hFuL4JkFnxLMZ3b2FyVzPAH",
  "key34": "HJ4vok12vQjdy2FyacRPZiQuNowT5pdfSUHpcyq5hUaNgkER9XT7scZ67fKnU2AeudxjxizTBkMPgBJTystP6Vw",
  "key35": "2CgJL6RV6dwB1XFmuzV7BvrwRQxJXz52BpgktnNUq3KHFNSTAyUFYftwJqtQwFtXzwREmoGfuAPxSgnFRoUiBAcE",
  "key36": "2JpU8AsmHoP281Lo1XwSQuoy2pwNkPbUo7zoj7XFX5pqGeyrXeRzLjnNfbEgmmcRrzT3EquTbpJpgGyNrhdVyVb8",
  "key37": "5aecRayWXFDGqn2qG9ZsPfGDc5nALqNeHAZQ2KmPfe5zs8SkWnDbo7v3VX8qtJJbbMpM4h7FKHHvJ3BHy4nAC79T",
  "key38": "5HP31nR5Eti6L7RQZvyF7KQu1nqEjb3aAkPrynva3guyzvCmLZ4gQeNC9Rpvw2W7CPPfTaUcqrxnNSdeyRUj46Rj"
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
