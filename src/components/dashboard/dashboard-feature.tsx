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
    "2PeEF1zJZhtJQe7WgjYTXYDS5H2g1GHpdoJu7KiuYaEisAvFLN8NZxDakSpyXiGr2oHRvr15Ld5XtVadwJxH58L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gAKj8Uh63zu5ksGf1s6QdfuvQRHV5Fu2MVcKqZ4PKP1efRkj7A1QsXAsQcXVZHFGcJAzsbQqk4pUrPqdewFrwr",
  "key1": "3GYPcVLYKntGw2yQ8csMrCVuQtJ3YgPFdw4LYJ61KRcfGtHEsGGmaGoiff1Bfdv2HN9iWMLsRbKMr875NwRvHBBN",
  "key2": "5datSUWHoUxxbNtPqvGJ1LmbEEp8FXBkeY5SdPxkthnbg2yedZSepitNFPGBBpEULrtVqsWX18dqMMCmkYiKz9wq",
  "key3": "4LrxvxmbjC4kmmX3zX4ju2LTj3GAjHztqCvoUaxiWSB5LykqSmxJqdofYJAQxPBmwgEXr78MQCHd3BqbfDTAmVrM",
  "key4": "5Y1xxCLtkF35zuPuQdGMKHvZaVfuLAVvwZELQTtr32bP1XB7gnv4TmBRAHoFPb1RkKGMpixRzqHiYenYyLCyw15D",
  "key5": "65YvrLpLXnTRgL9mREtihcq6YnRwQEjqtwvzF3BvDbHzLgBaZHC68hGfKzzF7zYUp3ZMfH3XPiEyRTze4x8Dn9qm",
  "key6": "36dNFuBwbHSgwCYAG3mrwwxtwuuhepYk435xx76YTs4BUX2dNK3sBkmGAyNY4QPjfr7WfP6Tiu9o6XUKxtync9s9",
  "key7": "3upt8wz4hbTJagM7g68Db9Yxa4NKMHhQaUFdYxXrNU9aPthJcyu5wmYZsRt8Rq4xX6TKqwjA8gPtUSWRXYuZgFoT",
  "key8": "3AfMAJndupXKLCWFtyyKnT6hhN3aG9nkQWjqnyCYmfgLdfzku6tsonHhHvmzzP73695ziqtknQKUUqSSUSTVmC6p",
  "key9": "4SqfQeuqxnfqkJpPZaPuA1pa8H9hspQfc9RGAJfZoo4fTX5Rfgtw9PmexSoF5YfonJA5JxEwrXnUfRXaH5LJqkNh",
  "key10": "3Mt1KK5SDy8Z6N1XbsCdb26gGHQ5PKXZyQBbKZdHNSwyGb5TvpCcT7y2fCuB5MsSf7Jc24rQF1iQFfPLAS5jjch8",
  "key11": "2pKhAa9JZsWPm6in6sVs7BhzC5J3srkqYgbpsDms1G3ZkHHRJhWxYaQRmMwi98nU1T71WwdhZaXsxh6BEe6jqeyY",
  "key12": "3rqWEZQbftWPeT4PY8t4Zm8xrwZKV2MK2Gkh1Wdv9wuetqmviBaZQs5RNm65vUr5ZE81gaPme69oAtv9wHg1zaN8",
  "key13": "PA2reAazQSJSJUesHDVCa1micqntHCxzZfW8y93uaGwBqr9b3kmxRTqpAWkp5VTx1oEXXGnCM9dC2x3jBAjN2Hr",
  "key14": "2qb553TfKqcvYPGMYnXbQ3kHcXRVPsYJmnzwqkUFsPKatcFgCaLRFH4wsZwLd89ft2FphP7pZ2RnkZerpwECBDzF",
  "key15": "4W2rogsyvmWLk8KxLE2rnBbPEXcf5bP4fBjq1neWahYcHjVDtGZrLQEZbFKU4npmHYLVCqYpqW8saDNfF4Z1pBx9",
  "key16": "2HLfe1HSvvm9EmWnbWQkM1BJNFgw32Hnu4e6d9BWdQ2CDCN4pBF8cKq7gTaoWRRqsh5rgxFZw9BCZEkDKcc4eA6G",
  "key17": "4VJ8HuAgTMHmG4Ku8RYdCsjTH2SKkf2ur4ZHG5URcAssUS6vp1WFLHyXAJwLFGy83a2NbPy2m2uQ9XU93PRSRY6e",
  "key18": "X6tHSPR6F9wnjrzfrksPLf6Ro3t1soqXtN9ErjasNXk553oP2FBGidFJTU6UP8XsKsZaoi4dpL2x41XLJRJogWU",
  "key19": "5BkFZcqvzNS8eZCgaNYikzmEzcfJE3L85iV8sMjQ4HWsy333Nv8wcCrXBMPNseCHLPZ4hhnp1HjzF8AG5vMnmXqF",
  "key20": "Y84otjVZHKaDxWqfqQezBDfW7Y8BLJ7Hvpw4pwpBM9zNzpG7C2RTtin3KWfvnMYnWKLvRBMxumrfco3azUGRXuQ",
  "key21": "ur7onfM6pCR77CH4zSfp1vhp5BVpTtxwLkZsWWoJb3BB3wztxjf2sLyNijZdppjebn81mRZcRr7jjGrxqDEGpBc",
  "key22": "2rSRefaHnAztM9mxUsmM62DvXwUPnCGNfLgqfWZP366jPT93edPVmnKx7nqK7tj4A3jo8vwv7SGgbAyqcceS8tXQ",
  "key23": "5JEairQcwJeDwseA6aR2kMmdiv3SZtEiuQGrrbTynvkyNuBgpnv3eMjcLEZPDiiJnnmmEjHnpRtfUSGe9MSEfumQ",
  "key24": "NFdckrPYgqa9iRvQFNKucnLX9s2rhCaWXMYFnabVPcLS3T5XHvHopf9NhT2Na2Tg4293M2YGNif4kCzBXQMpJAZ",
  "key25": "5Wp1J2KS4uMQx4JjNz1h7aUGyfHGonJEsiWHRZCfLfZTCXUWssqut1jun25GwLwPegwApgiTxEu3H8AB6kGiUzNf",
  "key26": "4vEqoArk1WX5HHuNZXxAtBrsPLEwA15BrjrbT9T9AeDkZJiWnHSBpAuxbj6CxdcMkHK3XmqxjwWv8ubvBoXgPLWE",
  "key27": "3924kBM3FWfyxqiLxuW1aavuRr3yjnApt2MnAMRg5tQZNEXra4ErurpzUxe5DxfDHBbQX7x56FvQVXJK53QGPw11",
  "key28": "4bwDxpbx4qzmdxWyiRDigaFfvne4CfTirF6xWa54UaRszLA3hz7i9HSmSJzGpW6GhYtHzBLn2LjKMdwgR3SfKWP5",
  "key29": "33gaPcTttqCShQjwaoWbgZM5tnbWW4kzASL6xsy4vmVxeE9MMEUa6kTd7t2zG2Y7EAgLV7EFXV7ErskKEeYqEJzC",
  "key30": "5EgYXxPXtmMv6ugCFntbp5VNAP4xPaRtq7zrsNNAmZ46G1LHp8ihDmNjHcsFMUSTqRk7JayN2K8Srgi7wbp1rhUc",
  "key31": "3nS3JpHDo9FCY4Ntx3hioybne1LxaRjrRGwEaKJjBpqiSLPWKDdN7McaLHrbL5nitqBPpkUmrTF5SUqFr9YoxASz",
  "key32": "3P5u6rjZg6XUSFpQ89mQWFkXiyrNx3AQ1a5szXMq5mr6fzrCEqLUSwtcbLjYUS66jpJ4a3V2JFUwSY33m5em1xar",
  "key33": "5JjkPBZkpRwKBwmMELsmnKZa3GtXSAxyC95i8UAu5PTkCqUh3WGbvYXm7UPodAAadKMqyN7ZXVGyNn9Wje3SpZjv",
  "key34": "4YJzeiLWi4Uxf18hFQYpf881RW8uHx1Bqqo71gcRmGVKKCLBrtQDDhAerMQUB7e1NiXVwqMbp7GGaXWjpjAyw9go",
  "key35": "37JTGStnZEKQp8yLXgXmHQ1Buykcw2LLE7nYLsHVmgPZCgkiTonUMZHnQrfLPUxFtwWCUvJjQGGKZm8AFVTRV3tX"
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
