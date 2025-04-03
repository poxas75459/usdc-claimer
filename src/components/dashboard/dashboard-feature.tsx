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
    "MpUxkQkygqiv6vujR2kxKBc3MXrvz7aFumZitJcZy2dynAkERoMsxXzRskZFSibpEeHNP13u4n8NCXy3pNmtqq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCZcZmmCSC2tj2yieJDoGMs1pPMWDvvwVUsw6mJcUw5BgPdzKc2X7NJ7gFAuMXdhsh65tjx4rS8qZV6ygMkpzST",
  "key1": "2cw5aQ2ScEv6q52Pj6u8ozRhrKfE7BPwfLetiLfmJQNvQNPCxSM8BYyAFP2FvR3hMaMGebqPQpUrhhUmpPZCGJAW",
  "key2": "3sk8EAzf3QU9RT5XXtz1f6mShXEopLrrDiT8DB5JgsuhqA94TUkyK2BwbgSxvpag5NPAi8NwuPcrFLAjnhqySs73",
  "key3": "47ARgU1GbwZ89Ky8LczrhdU3FumqxZSuy82M2BcK2sv6pNaoFMdsqCkErGpaXEk1que3DsKpAvTDJh2BDFJdk1Uy",
  "key4": "MchxQtUJuw79znm6DHSNaEQJTVVirgNQHsacm79fszKG6gATiYfZx9vbgLWDEam6neCf8JgwrfenaLdkUGNjGu9",
  "key5": "2PqAziaZ4HEC82QFsKg18S48ADSkzmnWxk4mRjATzpN79FG1TKgDFNEzQ53x4ohgGcZyrUQshnRMw8HrQjMxh95u",
  "key6": "5bX1Dseqr5XGavQ66ZWSFLauzwyTCWijK9EuVGVDypU9fn6YXtRFeriPGSPUkZ77b6FrqxvwNw1do1BrYeE7VBsE",
  "key7": "3WcU1XnJocMtfLd4wGkkAAtKtxiSiYwcYithKVLkGCtEG4wwC5uQKywgADrcFq1mYDhircvcp5isbsLVtJ1P7grn",
  "key8": "Fqbu5awJNaWH1SqjQrBy2jmVAhKksiDwDrwNsyWxuYTxA8e4GbzaAjib9n8ds3WBa8e7ahB9NRVXof7HdyTJ3ZB",
  "key9": "36v7yaxRErUhm9XJ3AvC4sN5VC3SvispwAXpz1dsBmnqcCsy53sg7GhBA5XnJxjui1daYbxd8mv4Xqs41egoQ2t2",
  "key10": "LJnbcHZPh3tJGVNg4xvQyLMzdQxuJm2jgFbWWY7JBS6yTabij97xZSsEd3s7nPAqCBLs5f69AUsAPSU7njurTrp",
  "key11": "2aui6LkCLWsT5gcGQroQLxP7hUiLAbqhCU8pg3FsBEbK9KaVi5S5nw3gVk2wEGwSAU3cop95goCBzRGLxVvKzrr3",
  "key12": "3EsyuraGHte9emhJZZvkLvHBM1oYwLw7q74g7YYwz8cUztb3AgmZfL1UK8mA9TRNZMgwGAyrSyZAvgXk3o9qkPi9",
  "key13": "2eEHngmDP41Dh73qNzidirAQm7i8Y6k1ZnovCm9BSaAXbRsm1RcAoYjH8C8WWeGFctQYzLFihZTL2D5RqfMxTxGB",
  "key14": "szQd6qwE1Mvcj2Z5vC2CQrViHE7Xz9bWZQzUWTNnh8apEKBjuuDfgQi6BVdyHQoq2n8nHtnWFhAznuw9injFsGP",
  "key15": "CvrDv4TRXnqzaArMfznxs3teWvQqGsYUUiyjTBSQ8X7NimYviagrdLSP4nHRpAsW8poSnXi6y9vushJr2LCjLi7",
  "key16": "4uzTrS8PTucy4FfrzH6iLCsatSSorG8kgUN8Wqof3DkzhU9X6fYLjhNJrwWCxPzKEPuxHZVey4xaV1nyPoBPnvXj",
  "key17": "28ziP52y41MdwcRMsAJoseXWKTgk2oqv7KiUhhSK6paRiW5pcxr5VHxXxiakZBtqzseEVB5e7QxYytJmBVRqvjfG",
  "key18": "5G36BqgF4Tp1q2wjTbokVHn16ixUz22EqByCmjbHdMoEFRi7xuhfS3A3Adhu2z8vyxaKKU5wtJWw3rTsidWrQkcF",
  "key19": "39TVdRWvnvJXEvtAoecfmapJsiFkUmSi3PaMgsqd72EZQ2HHEtRBcy16rYwCLx4bBx6gxvjkE5tZjnx3gCoBh8dW",
  "key20": "2VMkj7UDpZGjxZnz2ee22RQFjUzjcxYKkt2DGWDoQ8q5dwvmXQspsFszwTfrn6t9zbBGuV3okMtLUxDiVxcwruZm",
  "key21": "f6pY2gAo8FscGgbozEHjBdy1USLGZdfFQwEWGXH1eoWrPEWUvnwbgGqeJ5jEdxuCpUWhqvP7hhyBLTpyEy4AKn6",
  "key22": "4j9Fg4sUe377Hv6gRoz5xnXsbm4Z6dBpb6g6sHGXSDgpVXeYSSnXoL2apofPqX9wmFCw3tCqKqZFgtR9tohDT1YX",
  "key23": "SgNN4B5JWthse2TNWRvv9qXhdeSSRAmhCnrcqap3a4aNsZ8MgxrkF9qEH4K8zWPaRKLDf7n35pwDBGobQem3uq2",
  "key24": "4LKCmR8e3UTdQcC6j3AkTGLx9QZpZSGfmTkG3cvTWUjSdJo38wz7Krq9CbG3NpnU77acwRsZhstQWXQgM1rYRH6H",
  "key25": "5iGfy9BoTZSo6wghxEGVb8BrNgBB9YdcQ2h7wRDQBCToatQoazfUU2zMbRK6aZNuG6KV6GGdYdUsvoaPipfuAo86",
  "key26": "zuYx3pZ2ALS7ohFMgpFWPsV1DcbeVEySj8GJx1bmc4bTCsHdYS8AHGJ2c2t6Adk4vZniDKmuLe4GUDYV3phnCAW",
  "key27": "2nKsRFtyXe1ZQ97B3c8xvcpn1dar5FnstzDgJXCGaCL8y2XUmUEfzoQBf7ENiHRF3EiJ2GqDZYm7zvz9LihaHYAG",
  "key28": "2ecAp9WY8xtg9MAQ78pNk3BCe7TVY8rD6uJcFSoghvzdpdmH2m3c6ofw6FtBdUMVq4Nh2hcqvKLQVrjnSgPCY4GK",
  "key29": "5XtFjLkuFz99KezQLFn8Ns7VaPh4f8wB5iZ2mExuCSzcHDPpw22r2Ntz1qvtAF1UktfkSUrxRRDR5eLqtn7PuGy3"
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
