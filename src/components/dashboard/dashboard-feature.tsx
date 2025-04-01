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
    "5s9yZMc1jSv3hAWDtoS6W1kVTxUeUztShNxrogd3MGrSM9LBg32H1cao2obvBHvf1CQpqezWm8yxFTf9rdoc8fjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BADLTdYXQW1Kd2pwzKUm5no9W1g9gwKjH2RMvZ6Hsbhenoe8CSTP5DVSKVE4ZpD9cJi1ffhgZLXwMoKuT5tCbwd",
  "key1": "3Heh7dqFNJYiyrWjzKaP8b9HU7v8b4pRhf2eK3mk6jRU3PDQMSNyU7uNwmNZHkPCAnyNbgbksoQXcuTY3G2THP1j",
  "key2": "5Vr3eYEM9pooz6jdrNTvRBmmzDjUU69XpGqDSYeY8gGnSWjYgsBNJ5kHYJp3Gk8XaFuQw2sLPe854ccSN5pomEMC",
  "key3": "3Ue8K6Snn8eTSkwYks7cEoppmqjrDEjjgxMziqUfpzopy6VTcBZ2W3gDu5vugeeHi7f1qFYkSg3sMqEdhJ3VWr2q",
  "key4": "2ZTyRSNR6D32djeViUmNqX6BFywjqGkV5xqMKR2Q8yujKipRxQMjVGxgzS4WVVgHt3CuZDRCP4eu7ErwNa8SvMQT",
  "key5": "Hh417gbJXrG5jDLJMhgWsxM6B89DPA9mmyDHWKTKbUhRXdvf1eST3CtNSHzRYE4D5J2571f3WLEA2oUiHZULfaJ",
  "key6": "5Ge737bWihR5Ug4PAkWYFgE2APoA53ydv9DGEfrqF11S2zHmQ3WNxvqofVcCgVRSbRu52cjuqve1DxT1eUBeVT4i",
  "key7": "c5hRLmkQeLrJt8khPXchanrqrEMLLfhjn42W3zSct7L4sKpQUzb7AjMBFojrBZjZKNwUuvxm4pdR1rvmKu9gxg2",
  "key8": "wLjmhNMaQsD2urwktegbJbAN6fsW7zyTMbit4AGvPoLN8cok2jTq8B5uBWuD8aWmJ3nW2CHPKyNdjuy6Ek8frVQ",
  "key9": "27QnZGTe2SVFCBFx9Uy8n6omfxUay5XNu2mo4kKogU1ELumjph4zWfzaWxmYmyxGkMbzZzhdZAoxKAtS64o6BhPs",
  "key10": "5jndUiNKNtMUAYzoNfdcd32TDoR376RNqfdcSfwUsxt4tr5cJhk3MzTXEYzGb3HRscWQwA4FmtUDDDY9jt3GR5jv",
  "key11": "3UsTL3bgeKXJQp47CyXG9hnbpSitQ3UihjkeNLjHEkiqskApuH44w3m4PcbWrDnm6LKkitcpRobaGmRjbV6tSK77",
  "key12": "4rGe1cwNbCxHjKoNN5MVhojYwH4hBcj5z5NqidvWQQnvoadBtd7q57U9UQr4eu3FDMhaJqGvLWujc6zh6N1H2Wep",
  "key13": "3Ya3wwsQYGJ2xJXHtDAQjtnDv5X37FjU6Gby9fpNTPeapQcTCkSXnxRTekdgnj9SNr7XdA4YqaYmCwLNGLf87fSb",
  "key14": "3GbEaLqanvNDeHEUZu93snQz9UzJcptHh1DPJYhruMvzaPt8bKqWczqgNaJrZMBHxBX7kfngu932LuNm8XSfqgXN",
  "key15": "2ezcEVeW2aXKs7ny3r6BoGKJSEmpncdaBRUQZNp6QFETJYCWr1dpqDRNThH2QntpvWDE9oF3YdNHoNr4EiRBpfwd",
  "key16": "4vwuUAGmobkkSUkphpg8csxS9YzMXzBWviRUNgWyZDVieZoSVPpHK1HKvo3HSJi3ExhTJCqC5SafMDhHLz45Z9Kg",
  "key17": "63P62h1dz4xPRTS68JGeaJuh345G8xPeocTVovNF8BAPBfqT3RfEPhJvuCr7kcczyEH8E8PCUM3WFQZqvUoN6GWt",
  "key18": "2smnkfHbqnBcDoQnFkz1yoaoiwyJxdrJSWyGAKtwf4uncjSE8MZG1AETE3UxMYN35gUUJcaAGJJDUVYUHZrBJ2nP",
  "key19": "47bZZm9Y61SnALzrpBGJaKKXdF62g7Y1kVACWhMu3rmV7wSZVb9SCAnRS4P8r1q41PEptiChiAP8U4a1oxaCnkYP",
  "key20": "2Wc6GmtMPMBvGQjAG1hvzDUZF4oXPGoceaGxNKkZTv1smpBHAqwy4LzLKrTZQN6KHdJxBP9MMj6efL2G4TjvgNbt",
  "key21": "5hMD1zpNcBZxT6WoyPFTpeX324yTBrvsTA3jzB2jsFvyHJ9b5Cuwf6oSSVzozZ2MAbvsKgz132zQxbL1uamtMtxt",
  "key22": "4t5YEoRVJhbkRhhV5QNpuarN4T7XiStW4hhaYn61zPQkbN85B81p7jwQGpf9C5DzwyVp6XCYRMv9RVRa6dhvc6Fx",
  "key23": "4PYeD9kUVJvgLsSGTn9Uc7pTkcKpxZvN9xfqD4zNZodNAeVLHkPUUpRUdf4bbgYCqvZxesvoVpiJswztiStxP7s3",
  "key24": "4c4PCzFvmuC43jQnQBvZTRQ19q7DiENBdNxfDhkr2xDK3qavJ418cS8eLZmJfRfne4nzsyG3xisdp1DJ1ct52CmM",
  "key25": "3Lj25hrjX916phLde5DEWhXND6BHjUrhxkKtTcTGLwEpLcEbhSDrZChLHaQr2ah57FizzWmDJAg4KbfyhG2yBun9",
  "key26": "HE583nysoLq6PsHXrUh9pcbyz9LnUt3tfeJkNbmd3qJ5PxkjdijTZujbmET3xpsJMRBauqhaoSPoH2Q6CVatVg7",
  "key27": "4bQxxuLAuXHe5shGYknxZ1gmqo7TmmyJyGz1rBGQrg6q6BLciqtxAgKqcp7CYT34qpqphEtXvxfcCyJVihi42kvx",
  "key28": "5vj25W9RxJamd9VM7KwXcbJdhxnWyYRxTwGQ7gxrdCnLwknirGEq9W6KmBq9nVj8Ejux1iKKrADog49J18PQ3b8p",
  "key29": "fXSXEUtpEEWSoCKRBQ3cskMQZ1oGQjSWWsrdyZH25VDSCQyRwf4PxmyXpPPbTvou1kykn16UQkBgA8BLEf3UhvD",
  "key30": "4FnpWXMa9wn3SGHVCB8d3zydqUGEV63Cii4FTjXW7q6176wtPCJ9fLrgD8s2rCCFDunryR2p16QsGzdokNymLWa2",
  "key31": "4dzF6sDnwze9DhyWhDadDRBg7Np88rKyymTmsXT1TfLwyXzGwJ8WDApBh6jgB1uBzczQdsn9QVqSR6wrRzaUfMCF",
  "key32": "5Dc7kzynJQDDdRFUDihKiFW9p3sJRJuMDndzbBgQELTwixvpto31riwcCZCai44Z7Fw388JobVqijScGb47Xy3oz",
  "key33": "2AkUE5DEYUqSsJ7vJxmTMhYQX7ECnTdcS9voPoTVX2HDWx3WiHoXSp7MTEcSpZhoyv8SnD1MMLwwpmdGcHdSki8",
  "key34": "iCmak1bSt14xUzUqTYkoksUhCyi1prRLVp1Sx6KxuQRVH54cfvdVaMcJKkZ6XFYgX47WSnVBSAe97L3azPjaBbg"
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
