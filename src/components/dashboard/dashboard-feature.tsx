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
    "5dg7SgbQe7Xc45Yz2MQ7CtDc9jeg31CySdANFVQEi3WhXjbovtudZtX5fKJxUy14Dsj9MBAGN8MbgMNZoG6qHBn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4c4szfhmE8Qppdv4W8V73vMehUUgyxbzXkLu49D2QEDiX4Prkr1zFhTv9pHSLUcj3d8kU6k6uqeRZXd6wALst",
  "key1": "3YP2Kjk5uefhGnTYj33Yno9t96YJn87XLvbaNiU3vLrCrqaH4tXUaS296CJqwSXECod19DJ1uxckKDpxskaN9Xh3",
  "key2": "4znFLNfE3be56aAnEFJTs2zDnnZey32YGqTH4nSdJb1LDgo7k8PtxbaDEaVRgT4haTuNXHPNtGbsJCEXDncPqcHi",
  "key3": "4PPbqETJJP585UHfhwUbLRz9mywDNuPQ45eAUBbwXuAm4G57ytgK77hyXNPPocTfwMCfPBvpzQJ3un6JDJerjvhd",
  "key4": "3zxCBv3puMXztrK3FkJLDMLhAe8pRBW9pxeMB1fUwsoSekhSVg4KQQMY6dvdPvfNdh7xpiBZFUpRB7stDeF3e8dc",
  "key5": "5CHWjnawrX181TvZr9yT3jc1kVWF8PuFq19GqBCCyMjDFkR3r9Rv3doNDX4V2Dam6G5aMzWxP5N3Yr3DbJfLEfW1",
  "key6": "xSigryVKbPmFSDPiP96M7qDEv927ZcfZjNBsKvcdQWErUNNJT1E2TpLG4DA7GQDBYK3JMkmWWSkJicC2T9Jqzm4",
  "key7": "3pjwUy7Xd4uoCc2ChUphKVXfzY6et7FAF9RfVSyaKZjbuYH3Q6QMAsVdJG5kNyub3WwSpqpmqccA9LJu5jqph2Wr",
  "key8": "2CNDfj2XnJiyqiCqbqweF3X7Zs5g8N4iHqHHKA2zyknD2fytmdpnRu4mWMq9KSUQxMPkE2uC7xfhvumJWr4YRXf9",
  "key9": "46ci3dZ93X7MR3roc5hGhpYBXmTrnCscTBTt5wRRX4r4HS3h48S6mqjgZ8MS6ZpbXpeg3SFpf2xS9DiD5pEw5MSS",
  "key10": "pwz5fF42GH7pQ8d3PskCp2BFDWsC8BzkiwVJhNGjC5daCA7Xdcf2m1ztPGGacoA9s7Ht3hzMMAPTa6Pv4k4hMg8",
  "key11": "MkSGi2Si9GAYKPXrLECH1Ui7pvebYcVgm7mCPLJdur8JmCEjnr8aF9RK3GX35hWjyfn7JA6CiS1rWRrrgpDkrKx",
  "key12": "3jNi2gvjLqDp4zi2SPKsirpLrxPCQxfDfCAKsBcqdSFenrkNaHYiZ7F8ngLSVY74cUE1314eBTNff76j48RxyUrm",
  "key13": "QnDcWMV5CCBzYtpHwazzGe1u2u74gyKQ81f4u3eNEnW7AJL22YnCW63yVXbJfdUZ2kj8QcKdF8RH9UuDHVew2uF",
  "key14": "4dwwfRFTCVi47jGB7bVn64hR1AK6ZjoTJdvTvUJd7VmmqpB8QQcPBNPUJAuUQWw6FAhA1h382aPu6KVYe6eF4umi",
  "key15": "5QiLYhpW6vUiPBtfqhM2yGdSipzzp4SurXJsk6LFPboX3Ca5w1XBeMLsQCXxBVN7HjLKogGe4T4R7WkkN9PYxrPk",
  "key16": "yzyn8Lw9teq6jBHfoEtbAtZ1ecffMFMQMBTDNLLPJETgLyJ5LcHiXiEzFSKEufVN16rfjDCeBspbPyrqznk5h3u",
  "key17": "5av1vQiJ8wtjdNH6T7dDutoFZTjdhh9VpiuWpNzEUn9TKxvqLSHFdWzmwgh9uWeUkkP8dUSex9757vWe2y51V7yU",
  "key18": "Vhir5XBFqkD49VnfZQ4sCCjLgvQDJPCT9i5PHMoJZiDK1bXDv74U3MNQWscBRbtiwud6QPneHscJtBHQ5xR2jHA",
  "key19": "2aTNbPu8M6L4kFPKwJEreWo4vb54dhqvJzUUGXaPdm7p6CtcCvQQqm77x3xzmXDyxbcBfC5t4m3FLBnx48tsSiFQ",
  "key20": "QewP7JeZqLZXKNhbDumiiRoe8bVkkQtsLB3myejksz9rsT2zhuDM3AEMZWWEhaKK2pNYrhBVs65KQLGViB7sPga",
  "key21": "3r3bhvHzFkksg1SNYLGCPBvY97Jp1AFtUE43kbPvw5z1bUsGJMjdbnRM3o8vp3RHCUHkjy8Xb5HYytrs2CzgQSwR",
  "key22": "56L2AjnocfHGLfQLDbfL7am388A4yRodY7NhresAhS7sveHTSbe9ySaniif81eRedA1jLn2rMYMCwYqdjFJuKTzw",
  "key23": "2PA4bDmgeyt8QQe5wW419Zz9suFkGrdsk3xeFs4BfqiNpwuHDaQFcYqWap3kecxpK9EZ7k178QTBn6GYrGizKS18",
  "key24": "GCy8H4YGuP6GTKq3EnCg5DM4hXPKpaiLPS45YvbiABbTWmaCaotUSLre6axCtcaiJDj5nDpsVBwNMGXcMpf6wyu",
  "key25": "41ge3HhdzqrkgK5zQMf8weLZZasxM1YSRgfCWkDLY9yzbCPJHJEUrdEU9WRp1rsMxMm3vfssmi4Vf6Yyk6PwDAfA",
  "key26": "3KtJVf8NfmCwCg2iV7EAZ3NrvcviVJfVemeiyLhZN8NCQUPRNLWbiqgy2VwmupgeEfcz4BqxWjDN7ysRZfCYq7HL",
  "key27": "4KRNK3Tqypo4Vj48hJt8DzxgfbnbxhjYcE85M3KKRNGJNuKtq7AsZrDSuAsvE1uE79tPAR2SoAyfZxgzz7VEhsYh",
  "key28": "2uYJtNzE3uWK7JfnmLcHCee4dfqpKuWKeerkxeg9SrSiY2Rdr4DmTu4xyaM7tA75rWnzyXSc9WFe384WBgnpBChh",
  "key29": "62YQ5SD6VvRDkCkkrTrUBB4gvJq8qD9Zmo1AtjsPF4eziM5FyQe3VLZZFDAoohHeWxyQZFZTm3Evy1Lb3Sexa82o",
  "key30": "49f7W6M1Uk572Piq2Wc7e2ckf8iGE9q7Q3n1F9GsYvG9bRRw8A936vo9SK5CN51EATqFDjh6DR1RJYcq9keymKkD",
  "key31": "QueVPtZPyuxEKNPgYgqkqFjc8X8vubhX3ARGZD4d9HpCGGzsUBGzDUR2h3KyYQGiK6kX9DMqZbD1yfiATZ42doz",
  "key32": "CpyHyhpRVMMu1ZEKsRapdoP2xE1rthZ1Gq3WUhb5E3GmaHk4gwFCD5gv7uoewtHeX1UPvASZ1vhBAEU1Z4tTpYc",
  "key33": "28tKGsFYJnob9ngGAAmp7n47V7e4MvWYRnYfYoZMY8Jm1AsoNoeannH9Mv6Bc4ARGYrYUAjFi9piUmVc9XF1kiHB",
  "key34": "HX332vYE5YRZZs27CxMzKVp1Q3knhM6HJ5n5yRGow17yEq5Lh3oJr88gUF52f69518zvZoMQg53rFQ6Wc7GKVgN",
  "key35": "3mKgasBxir53j9nSMqDeUa3jb42gjquN1ptF3pP9jHnSCroVtus48gPfwXkrggju2XZJW3yg2mUMj8JP9MixUsjH"
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
