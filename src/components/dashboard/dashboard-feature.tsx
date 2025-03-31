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
    "Z6YEgqC23MFAfN73qbBrRbsDMyAULedszMFSn5W72gFiTPDxhom4cBM2imTxcf7rr9kCwJT5QKwbvrFF25xuDEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uAYPZ4Fpeyib6hST7pnHZXixaMRwfwS5UaMsEUVGMbRhH95DoFdpXvPDumcREhkU1fSjxqK8i21CXNqsUy3knrM",
  "key1": "4gavpV4rYUJA9UpG896HfSFDPuusMrGbXL5L7B4VwaTugCMERtHSpn3mwef2sDqBatBwJpxpmKoa8GB2AUC57zgv",
  "key2": "4EhLYNb9tetFbuZ2nXyG8TXWaL58f85msHicy9Kwd3Dy1TqV8nUi2BGAz5r8zwvC8ighm19f5vLrWP9ySGNinFpz",
  "key3": "51zozAS5FUQ9LWULfuhAKQCNLgTeyV6edBHqBL2tH76gsbE3rau6SRE82iCgxK1kgrep6zF5mYPXrf7aooBufF3X",
  "key4": "4S1Xk466nRvku3iM5QWRs2tjs94E9VvE6Zob4ezCzwNApNqdmEeiU6xvxTeu3yutQ9ywyrDy7F6AP3A7JMntgfDU",
  "key5": "2YYto7Y3JnaafyE1aKEpbU9kaQpCJYZBhsrwwDXdGrxo4xMtdV4Qs427EHTeBBqxHzKMPo4dCfXAc6iX1EGHVP6",
  "key6": "2mkrRPwkr9PSvtohvKC3Jbbt47UXkL83mXV335DNExEwScC11KKxYptFpjgkFk6qg6TfcqUrwGSAVZxB1ffngrks",
  "key7": "31ad5ZozqiwDwvrHebuwYtEfAtxyMykbGUnRp8eACQHzXgSMTXcQ49Q2Tjme5ptnq2wqXdNRotELN6urnd64iFSW",
  "key8": "4PerkwSzju7e5UD7ZEAAQeXMjKvQ6MfJvCLbxmEvBGwn5PYb1QkDKhafMnMqFDUZCFTEwoWkJepAsMCsGMyJucKD",
  "key9": "4Xso8qKT2zWaTTFVJZpQPg9m77RTtQHAM1vFckfeepnX4hJkVJ2K4YL5MCEVdmUA5r3E9R83BMBPJUJ2gFvfwxy9",
  "key10": "2pjdvuur4FAAF3LGw48NdzGGoERbv2ZubAvJk4U6eLpvcvNDbERP2AHdjChVjikEbACDTjYCVwL1C175NgPRmx5W",
  "key11": "3mGdMkbzcNZQ8oqN566LsiidTDh7Lqw1pSJU6y7G8wr7GJ3uz3fdHvAyYYkCNmqhcCdZUSZkKuTNNB7tu3XEPCXg",
  "key12": "3XTK5brdr1JhwNdHSyBJxM72PfnpPGSC2ixC1Ub6fcFjN6H4Vw7d1m9sU6Hm3neAjbfA4cd6duNBEDRnGfY1Ycvp",
  "key13": "EVeK5SYBF4DciZGCZBcWH3L2ESgEVSCQyCHXtNfWBiqSfFBAft4qQAw2qyNjPdGAe1bbvJRuXCjoUjrY39T5wbR",
  "key14": "4kvxp1SzRKr1LEQWqi45wDFsPTkKeVQZLmtcbjvR6VRREKZNrJQdDGcLV4uNZRJ6akKXDrM1sZA4fFRMWxUubeM4",
  "key15": "5Rj4B257sK7nYkKpKieaErM3Wh148irBbkBv4or9ixEWmLbnXrZtvPVPkzs96D11hKnMHj5QsqMxkEjGTsVsE5Bd",
  "key16": "3yhN9Ny2179xdmKe73ULKeL4FHcfm8jms4h7v1Sqk1qUUAq4uucBEHCUtjv1yRu9bX7NNuixsaStSYiQFf6ugTMm",
  "key17": "PuD2TACzrTjoXviNaLn1e2xEzQkFL4spxjmnkJmYYNuqM5mgEXZVRSdg5MmMBgktAk9C215aU9hVKEdQhNS2X2r",
  "key18": "2VnkD8YeFBQNfQNtbU8v74vuQrMGsYUBtno4PoMBzT2GhvzYFhUmi1xhYRnAB5SqoQ5FkTTKg8YACLkVGWQsZoV",
  "key19": "4X3jbm1vQ26pBTCL5zjuP5vzToDQacrMrYPCML7aMMNK5BBPkezugw9PNcfSNts9HcYjUYZcGosozHCY2FM6JEvR",
  "key20": "5j7NSDEDAoQSLVxPWiYZsdso1imAzTGR3WxN5kjSQc6oYvxVfPeYc65oxPuZRsFKM9qZCUXrNN51HNGiDw2A9pED",
  "key21": "41nJRXPupJ6C317yesSqLbyqVrpwN6UMJRxmA4PQX7FnGokLDmVboe8kD6muHAwYCYAPZSL1cADC1raihVzm4bWg",
  "key22": "5NVugbDXRFWgab4N5QprHzwZpaVwqzQC944FSHz3o594McjH8BExn1GdXRqMyH2k1b7Xf8v1kJZmsPT9q19DfV8p",
  "key23": "5usncHQNXnnxQxQad2PBaUhcg4tcWgSayo96o5dibK8xgcioKGw6v4socH7SwoDdvGhLtsyUo27rpEchVBAdxkgg",
  "key24": "8Azo7JYtcGQEZiA4wTyEGhMei3jYckYmo2cS7Vg1iiisV318VPyjRzjnwvt3hFBmyUr951wCUmJF9Ha56vs9he3",
  "key25": "4pp5vh1msivyYJJaswebeKoD3t5b7rzvGsv3MUpZruYh9PGRW6HnRMsjkzejSZCmXDvTXf3XXeY1UUFzh3ajDf9o",
  "key26": "6Fk4L8RcdsAihsGQdBR3PW3zQycMX5CbCxZozi3ZCthtCvPknAL53KLSogXBPCo3PSSn6K5bVj1jFB5czkGPJbq",
  "key27": "299gsjPZYLJ5u6H53oRsAdtSt7d6M7qMZ3vcMRB563g5h3HV5viaT68KEbTzRpiVyKHVjp6uNEQo84DjnW57rw9v",
  "key28": "4niWipFU4UbMF4TAAvjJRWqNm5Vnm4kGwd9fwJQSFhGrW2Cedcf6U24XoMjji45AXENM5ytSC1dhfkEGwqLAy64L",
  "key29": "5WwFtfhA1MvuM48PYMAqLF7x5vFRtFB7A8C2zTFAa2s3yRb5SGPC7xWfsn52EYepTZE92tE1Pwz7rrb3pctvfZRS",
  "key30": "gdg3qe9sepqwEaHBbauaG1nnifGRfYdaqPTREuXHaz6cH41GeQso1V79C56rWwsATqd1kurDm3iqtggfpoha91n",
  "key31": "3p6RA4nnLtFBxmeHPza3LfyYWzd9t1jdG3TDpgcHZsGFG1SKngupg8NjsXBsvvzoJVBV1whY6jZSmHr2dFJ2jMWJ",
  "key32": "5Pies1ffFpR29vzfCayiv4w3ePfsUzLGBqFaeX8fNMmKoKrXJm4sPGgaQjyaHMN5QdYQmCEQZCFfkrzsCkt9Ykq1",
  "key33": "5yfckRmYT5o4uBj3HSD7CsGBPchQWzjTTUc2K9e34NgkydxT6EPXoaAyLM7hbMAcUuwkUHKyDwjxKY7D8aEF54fm"
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
