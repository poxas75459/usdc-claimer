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
    "54eKttDUKGzVHrVVY57CBMjo2VEPgHMrA34wyc26HtAv3YPoYTEQQPqAybH7GTD1KaiXmZf1MyWgxemAjB4WNeoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7ZZFqJKT7DPJSwiMqJendstrMCJBJEm2dZX9WYPZX3csakY1fku8q1UTUMAeE2A8tV36W8Q5918YpcbNZ62Tuv",
  "key1": "5TtnTKxEeCHqtNRqVSW496vceJX9qifEQFPmdzXmt7Up49CV7AFiwp49Unj9mkUKU4RLYwEGtkev43gYPVR16NjH",
  "key2": "cS4a3gTaw937YDDznn3u7MzqnE2CKu7NP6d3Gcihhg9bbmkgE8BU4z4yfox94at7TbAr83FqCrv2nMBXsA8H5wM",
  "key3": "2u5hptyvE89N9VfT9kruYjZKNZSpWyT7EUuyKGfjHkyiEFdGFBfFFfpyxMQci3PiRn4PTjAo8VwJSLuB3Cp9LrE8",
  "key4": "sV3LbxAMXoCWrT2r4Wx9h4ECHaFW8T2MpdFCBoS7qE93BasJURVAXyecBmEeZGD45RMqNPWe1Y7r1vhWQCJqzwi",
  "key5": "5ThpnLKupHGbMfjtGBR5KPEsfiaGsHR5ENfVKQbc8zgjF8XM3E4C9Pz87oEGxnH7e8gs3MmfMWpwxsJ27dN43HLG",
  "key6": "5awaCiqYVbScbx1AkoHkTfdCJChQxHmTx9He5sEwGiVm6J5fFRw1sZZfMRF1uCAbZfJgYdRhQ8wZRbH95PrxQ8wX",
  "key7": "61Jwgr3ZbgR369L9swcWLBjPgmnByjAaLvmCnbKijpj34pmF54ez3DrxwUSnc3tuYmNywoAAA8EdyCFLhPxE7oTX",
  "key8": "3ftZk421pov1b9RtcEvAh8NzecBqn1kcAXVMeHiTbD5bYdPGkmAWKqj8L6BXpfSLxSEH1AhMfUR8CGL7zg1NpCLB",
  "key9": "4VHRLvS37mcXeDBg1bKLpHy1CsytAzmbVyNBoeSziUuzaHUx35vuwvVT5sFAi12GggKYyBkrU27ftBU5FCQqD3wF",
  "key10": "2KXhhDZkPY631kRMh6duL8amLYkD7jbxCCdsysJGTZnTojvWLPAuT6LmJg1aDSd3tSRjyz5JwdiezgX44P3bJxM3",
  "key11": "4FM6zoiufFJv5aU1hHQPzGBwVychPgXKnwaUzzNsbHEEcPmympPjLgtW5xGtHDAk25oUHEoErS7zxvayXUn7Znjd",
  "key12": "5oYoHihrnUQkcqYjHh36faqMtuNrWCHubcuumtYMVzDUbAa67hbeasqTtVVh7m6hLsC5jBU83augGveBQv9zd8GY",
  "key13": "8g27dxjP5hkVkbZ5W9PYnZXz1D2EeUrWuBWMqtHyxQW8grZrUNEpsSnzGbaEsnX33RTWgGA7DC4Kyu8pr8cHZma",
  "key14": "5APChY56v7m8GhksxXyTvpTt7mup7e1YGELCRJkMyEPxJD6Fj8LRNqBfTGm8b5rVpjnPgsmyxSU1Ed56NY1Nv42v",
  "key15": "3MbCUdPQsyFCBVsNmEd9WTvL6TjM72u1hcFKvs9tBUmo5wzoFXZypwuxs1ENpKVRg5u6kPDFC4JvcPe64sQaFUXt",
  "key16": "5TWcroL4sfoYqk2hUdZDkFUvGrAjq5pRWgjbynNxTZLroKoVu9S3xV1Ma4Hq7dDt9FPo6pBtWyRYaYtPvPvUNj96",
  "key17": "3S58Big69ofLDDRKHnYsrwpkXxHxULv2d94Sg617b2rdo9JAWCeHiR27LSCtZAWBquE38h3TPeo7yLx8yxGm4gXm",
  "key18": "5ZJkhBSJbPSDVp8iptY1jGtQuR5Vv3wcMTsZzBuRxaigH2kbdZmK3wPU9GU9Lk5Rc7JpMM5PLb7AEarBDmBsn5kd",
  "key19": "2nzhwUttDPzNDHxsKp7JBWfJkEnoCYstNmaovPQEM6fit1DporuFcMNJTT2DvGBFwajBpFaqwFCLaZbp7htZxnLF",
  "key20": "2AQPtr4WdTJGNjQ4nFtEpCN9Jo1avnnELLRjutcTrk3eKRV2v5ifvqjrcCnMAFHBZPFZuk2casGjS18WJQ6pqY8E",
  "key21": "pZ6KGnxy5QwpYRh9wpU9eyGUHUCz4u41dRT3uczgRnzKd2R7DUVVdVstNh9T1akaRYfcNp8K44pNBpK8wn1LYY7",
  "key22": "5cjR6fASRb1D3SaLNNMgha6SdAXGobafadKB4rBKF79MuzLvtsVskPLqL3YJJCmiZdacXJWdu5K1CkEDXGxzFp84",
  "key23": "3sdCEWfJsQZy1c4syfLhB5xrtn5MLHZgRRT2vTGqZHJ6S56yoB7goM1Zsi7aFRiJ2rQcrdV1FBASVCp3fJfmskuU",
  "key24": "6vrAQgfrTExY1gZnxxqm5M2A9ZbSRaGYrdoNsE6hoT326yp5sNQrPV7nnubvi4TgHgEVgbEaBhSpWfAqwotEZan",
  "key25": "4ewv4tbThXBcvyeMmGobDAfQpGN3538pgovHQGw2uWzNwCZSPjTCSBUda5THNvH1Y7YA15NdSkeT22carLsRv57k",
  "key26": "5sA1DA1BWC2VQ4QVvUBCw8ca4rCJUqjT89dMkJzGJahEN5eFc9NH1ZTrt995fhu3GmPJouR2vcpAEiw5FbkL5QW9",
  "key27": "3LFMr9FbJ31Cw8NMiTUkEDCH1DmngzMoFBxdoUNa3CpWRu2eK7Mkg6rxfauoqDCzU8qTRJgwYKmFMQVxtsQFfkTf",
  "key28": "2yK89EcnkvpopwqQ9t71SYLsYWzALKwKaCSzQq9MmUEyAyKQrackuij2DtmMEwT1567RsUPHrKxJjaVqHiWzXQoX",
  "key29": "55ygmhm6xejnC5xGZduA7npifB734aiadffhQYrqxWsjEXBaDomnqXpzHFWUHWkWkSGcdy87CpP9GKiGJAMoW44R",
  "key30": "uRSBHVuCEJPRVtxPT6Q5273xvWtBG2Env4kgefjEakGLYjqRggSgdZQEMiaRM2bTf3oz2pzfFarAoekxFUVeg7w",
  "key31": "29dZBngNCuXUcxawcHwU7rvEhX3zbMRtcHp7zRmZenKH3N9cFiWrLfC2HosUh2ARCQJUEJi6S8LGDRE25gdjWN76",
  "key32": "61pCN7QcF4AMLxDggTpFmZGDDBNGKGD3CgWb2ii1mpnPbiXgTFVn8pRtRQiTen4Heozqz6gYVVnyNLYjzUKK2TtV",
  "key33": "45rLgCjwTcwQUFVZ3Nb5iR7pSzwpMbH5QiTZRCh8dHxqJazs8MXMJypJvfMyQUwMbLAeu8yH1gHZnz5mNfSXRPhh",
  "key34": "276SK9mdV9AiSwQzN9kVXTZmi26YBBhMKvPf6CwSkbcMek7NMwyAVmxpJyPuPEkNqVhJjfMhEJdzgpFQCvNHmc88",
  "key35": "43jzSWa4xdN316gRAnhHtjAbVx9dB4dJWix6zYXR9K1Pjv9toGj57rnziZMMkxGXTxSdDUwrzfza8HeUEkVWJkQG",
  "key36": "4JEHDDpiAag6y9qBgRPc7w8PCJHuxxbonaMWw6Bb2kXHVVHvBXFGbe5kK8NUKmLMrz65wXF1xXTJPwu5ruzGd2ot",
  "key37": "3PMU6Y4Upxzy5996nPmUVqV6wrNbhSSY1uYRyucWPQjPTZ9DJ6LC4aNcvGiFTGBp65mMMEV88DXEUkU9psethFPh",
  "key38": "ydHjCEeBiZASiFkmirtVWBVcsjN5XyNzME8NMHqALquXv58r7ysVvZiWKGm1jMpaLaYN33LZzzJizNmScA3FtQ9",
  "key39": "36PD2xSrXUyKtRQXn5Y6Zv71iE4ixqBwHiaviDW4y44BsQLbRimvUXDPay33dTcjJcCwjhudBic4cgAj2eN5NCmU",
  "key40": "64iQfameK5mtEUdAurjCccBxMPxw9uY4cYQPaCT8ZCZ5PB21cnBBvoQKduhxgKQYA6UgVHk9oXDhCU2RfNtKjuCj",
  "key41": "4FQLLkSka1vZyF1DLxKUTQwiSrV97Yd87ce4UEsxgabJp1sUH4CC3YTqHXJyAvoM6PRCByuf4mVV595T6DaDGa1B",
  "key42": "42f3jKms9G2TN5gx4vhzvoPpYqPHEVfhbrPcchTZmPag7rt4bucSwKBnKSBVoJmnCBhebQCq3Tv19hkwdSrtqA9Q",
  "key43": "2Wz4dn5ExBZXnqvsLbRd3Ea9k2k6jvUNZ1NAvgAA9Ne35deeX2Rs1y2bo9sSaMGEG7mqGNkAbbZF6KEJ78Cpdved"
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
