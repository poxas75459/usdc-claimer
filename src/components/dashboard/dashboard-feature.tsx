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
    "3qBiUroc7KYro91tkD2rgBJKsKNSZY5hZksgdzykYYHcbbw5QcY3VBeQVDWqVxpEjrWYKC6NVkGhbHVvqiSB6kVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TC9GUtJa5tDXkAKoY9aE6bgMKWUPJkqpkfE5m2AVSBHBD1S5qyNPNmw6aaJkwd7foZ8BHT2L3PpQbtwvqzvTSkP",
  "key1": "DLnoML5gD96GvzutPTXWYsrE5iBiVXETyCaWt9rTKE2q2i8s3ShQSbwjpURL5pQ9XD6TDHCdCbyecjsnaEAZgKn",
  "key2": "5TFnnsFtwDb2dFQxhwV9rHjPYrg5tAeBAqX5z4bAh3utsjv3Mfh8cA2LgpjE9dTmQ5ACuNdRurvBM5UXRkazUKHm",
  "key3": "5zM3RsTFj4AAfbHTGvYxCHzXp1es5x4uVbMFYMvtFh8ydqAYYAUEQVxvHNwT5gpHzZ9DdkmyJRFx6h7FqjwEyuub",
  "key4": "43mdTCpzsy4x5z1DLAP3QPAXEiBNQMFUtxPbVt3EmR4cHwvsneNQjL3f8Fp4LDwS46YEBZtJRTnhy14zo49gy63F",
  "key5": "UnVsBkUQP1MKxanT4ZvotpjBygpKVawq9EVY5jpqbv44DdDhBbQ3KR9pFEvns2iMEsgrtHwPq6y2vhNLz342K66",
  "key6": "2PqAVi8qNMVt3QM1SSVSZviwGbSGrfzcN9fpuCiJmo2ziC8nvmjxjiVghMyo2zrZaQsXfwVRThUE96r9Vuv5EQrD",
  "key7": "5Dkn7NqVSpo8nasESrYxNtktqxTSjc5QctEutFXd36wLVs72cgdGs1t1bsgmHABGW1ZotFQuMG5dVMGnTXq5FJDp",
  "key8": "5jQopiwkPnbuBr5Rw6FZVznZnNvKwWmdhxA9YLtQvZ5CbQoFQB2rx3G8Zqs9jywaaZjsZDPZM7tBcmtMwEjRM5vX",
  "key9": "64KeveDMfJXCn9jMDYUKbtR3rF8Z1hk2JGZMU3jifK4rouCDfFvwhrC9FKNiL1J9PHDfSnvV86MzhHVxW9SYiREv",
  "key10": "27fWTZvf1Ngtek9YvNrzJe4obVoXJ4otrYuGiHab2cqMkYhwTYYo3ZmP84xr44r8aV2HVBU9NF7v4Q8eY4D1Naat",
  "key11": "2SojqzSvbuHnvqsyhYwrrDLA5dv2NbpAqQAHxytHaDeetwm4BN4cZxe3VQLUVSx1c7g2WDPcPQgEmfh9VZCufjHK",
  "key12": "4WQrcoTcpkg82Aj4P8kpRV1GP4aYw34F6RZWG92iFRU3e88VsSQTxqubPCyVj4q8o2MnJEmAm2jQiEmxUsLf3kmL",
  "key13": "2VW45aCZnEybrhhgmQfc9AmYmP4p14ePvosXj9cTfrztAbHfZPAVAArQt5XQpDptC5C5Sfm6WFq8oRTQyfRwrTpp",
  "key14": "4YDuCxBrUVXJym4HbU7S3bRWxrJbQP9DUjHG7u5Qi3rJr23HSEeh15xYmNi1GEmo8VFk2dZtp2FibLDsJTm98PPu",
  "key15": "22U2j9YrBksh6rsxYh3anQhNhQHu7RqxbkmFqRiykEQ6LhMcSc23zxwSEdcDBtLDPSad1TUwCnEJGZzmzyNMnM2K",
  "key16": "4tHXLLGmWVzeJmNZncg5sgg1m8ECUhLU1eyGEJ43eqPdYpHdUMfnQpKoy5LmXqCB6kCE3Ha4oMqYPbYTBiHL84kR",
  "key17": "3AHR1sEutB58ZVo4BfFkWyDDzrcCB6EegubjSa1h8QurZgH2sRhWhzcqbDGaBXyVAqu7aNN447rdACZQsoKzD2rC",
  "key18": "5R4KHViodppQE2cYwLh393VejrNAT8EJLRpXEtCvrJ9NmLAxvnnbUAA4Z4LRTT6x8KpWJGHWXh9rnd9UU6B1HZNN",
  "key19": "xb7opTf1ySa7YuMfZVB131PBHsFDzBmLgujsddBxwWwhHa4Ka8RYXZbbR4SnxoD14YJtXPmrAEbN3S6RdHNUwJB",
  "key20": "4LxNrM4DJxu3nTAWSrAzBC1nboD99NtuQsECj4AuD4ugweQiDNtjq3xjnzh4mYGQxupkqwytchFfdJzGVx5L7mXo",
  "key21": "5H9JqMtuyKKwJkJG8tFgnGEnRExadNS57KZKg7tJZvN12uTE66YKH6CtxrQ6UZ9M4PofruQkkbVNdW9s8G1izogR",
  "key22": "GLgLuBKgm4nzNx6gex3vRu2b7rDz9VNnGzMi9qmGHaRqo4mggxYSkUrRvGXeEDjRHeQom1g54SeZ6HEW61QtZzF",
  "key23": "5ChWPYmPu6D4Xa8NMGUChz2npVp8UXhd5oyzYhmXhnn4SWdi8S3Jh2K8QQLH44hEgJAnBSta2aRpwcPQfevBUj2Q",
  "key24": "2d9mJdE1yQ2yYPPxnic75zQ6Vix9t6BRxtRQNBYYKQSKMDpa43i4VTvRzXuzeg6F4KVEJ77SZ444HEX9ddQskzyy",
  "key25": "5PstDLAosWTdG9hEH6frZCMaFp4r1XWDZ9PJVhzBhixzBpoHsJM7nVENfF1f4a7PSjrQJQAry4fVSAMHEh63CZq6",
  "key26": "3SxV6rVB7rLoqxbffiWyuAfmDHumF84NwoRCTWbcWgspaQMjA9Ws22jfmjvxvLJzmF54dWgCg2sbM6yvtyrzf2Rm",
  "key27": "2LZd4EV5EzH4BxCta6sVepsrT3u3EW8G51EnaExpAQjG1JpgA61ZFNKb3pojGyA65ewT4HZ84oWFpmEupZ8uE2mU",
  "key28": "26wwxavzQJhb9BfGw8qPCKwCprHEDMzu34JJK6KFX8uY5H9J2Xh4naJS8cLKWFYgAysTvmwvj3X222F9CFSqhiWy",
  "key29": "46x3QUZDVGS8sgoAd4reX7ESwnxqrCLx8meJS5cqCgF4Fu1VkxoQZn9WkfPdB7Qegzud5YManS94MY53gj148RFV",
  "key30": "2dQJXge45zW3766WCCLyWUQ27MzXz5BmZLMR6vti2Vn2ec6U4gdzDw8e45CThj4EHcA2XGgFfQRhyg9zAyhtx6fj",
  "key31": "5kFSiw8KLWxPMA5qmxWVwQXPRHUJDi7Z3uUm1u6ixNV4fkBzzxPBME2VMrAzif2YBSXWs2G4x8sCbv4w5tCNP2ya",
  "key32": "5GnjJp15ija6wfviP3nJ1V955xC5Tc9dkKFqMGtWvb9s1wpMs4AaXpQF5oG1irZHu7htrkJw9v2aLnKrsiqLT3oT",
  "key33": "5Rna95MFawx4zVez3cqb2x5CrnqejoiruityH9UGynmswwgawLBerrVf64ox5BsCJTRnPDujjS2kE5JcqNNaCFhU",
  "key34": "2UT99dTXATbJs6FWvEi1BMmKbr83n2GMwfFJ5XiSBCG2cSZQ3gfcVh5NjhwUiJhiv9dGsafg9Xg2srbTzsqcUXT6",
  "key35": "2aTWBq1EewVFg3XmQRuAxt8p8BGU8i3RE2y1a2nbNCVvCjPz7W872B6EigtPtsmXHD8uhDwzLADRG3nsds6oU1V8",
  "key36": "4TTYEHjZpcKvXzJAWkeSjMDrZoW7pD8sk2D1gCCDEAAiGQZAUy9jgxNeUxrWPYXhY1iHhS4zgVEKbHgKwCSZbkht",
  "key37": "58iKzbeUjKbfLYJWSA94fCL6UKDW38vyemieg4LimZfFgEWqUvzw98vLFDQZ3ezYsKHj2R3p8HQ1XvPMgcvymAPb",
  "key38": "3EbksgTmVuVzy1cPuGyQXsYqwc7qATpRyjQt9HSgTxGQo6G58LN4qiYeapSbwJr7P9scjQFbAwyDaFfN2KyDjS5y",
  "key39": "4VxVQR1o4GHfTgVXF8BLDhAKpu41DKCsEKwxv5MqnTVLQAaJRhr8sew7P92DEfs8pLygf2LZNSd8e9n7UVAoC2Fq",
  "key40": "4zh9abuQSg5UyUCMfdSZvuuxcUUwnjuWSy92MjUbiEi7yXpZ2d737i1ARVsyQy2MJGPteE3HtbSHvMmo8XQ4ZuM2",
  "key41": "53rYekiJopo9mAydBnNacK8b9V7LhLJD3MfaHZ7Px47A4GGYbqHA59qRSoBPf3DaXLePryWtxuM9F7s625b2d3vp",
  "key42": "2C4p7MkpRMFpBAiqvC6mb5GUCNYtXigzbQcJapKtoQemCKFTSDUcLbq8SpWChEzvyfmfW23MetbnsoQkF1KaRjZx",
  "key43": "5wYRPYDVWHv2j6dVPKVqxnNAi5DWwwvY3ELGCTDvVKQ4ivUYz9MP1Y4VynPQUfhpusrk3ppYbLbwqUafAEvQ28M6"
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
