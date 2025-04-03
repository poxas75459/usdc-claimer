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
    "4cpQuYjvv5xy74CyL9rJR32uHXuUWyUbyEmcriwTDwfmpbL8weAHY5MoZYMddz2EirVvbdJ575TuZa2i4R2cKC3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ehAMMm3eyXdHjEPyWVzMSC91u7ajpgU54BGVp3u6JAgCuTwKT8631TB1gRGuj1WLTMGywpbYAsgyK6z34puYENo",
  "key1": "25KQmtvVDnFwXHzAaxdF6X92sj4KZUDDikkNjvjkCMS6U22mwAp7ryQaY1ZaM8vmvrFLsr9rDU7VKecSrneMnspK",
  "key2": "31ZyYg5R3uFT3m1ztQYcKgd9RGrww9gxCEKbCZNdrBTuZ1MdVvFPTncTJVaEDvS6Ugorp12A9ujnDk5Xj2PDRjNN",
  "key3": "P1z82nu74Amx773i5HkDpPhPswmQKtyqzxPmSEUcLxfPokRzu4nYyy9YiQxEkBrcVDHv5GT6FUmfu3eiA29jsnD",
  "key4": "vhQGYYo21iLkQpszvjmVwEbbfivBQVzm5RWk7cS3GHEY3jFf8XukR2r24yPAXt5nqxzHP5CoX6LDNxnNXuNCcZ4",
  "key5": "VXhDQfRehA3jUfoyQsNceFn9ipTkWauD26x4qdVUTd8fMaYGdLSa7ydjMnwTKTK36DNzDJrHGYhCBYWU6PgUjY3",
  "key6": "2K13R3Ms7gSzx9DFZchT7yzRd5f2oRi4EiB8RB4Zw9StfiRh9hqG2k3tLn42hAkh34qBoxYynTf8S5MD6XiPrRDW",
  "key7": "5ZBrSJTT1SWXCWGrJhYRarR1JaacGot7WhPoa3bco6mdzLzScPSskn1dzYDVx4t8SRSmEqSBCYiX3irghU1fZHNM",
  "key8": "2kG1CtGh96ouhJsN3xVKpooMvPkAPz1Q7qkrHduLrVsPNNEUvPW8McjS8w7TASfm7uJqYSPAzsxGicy7mDGUAi6w",
  "key9": "DV5aDhRcrRBGsijnF1XRfFMyPM9ehYqHbT6TzryYnwbLPHXzqiS8pqFTVhDa9SjtL5C7qjb7GPFiwPMYhs1pc95",
  "key10": "564Bw6tjgdTDJdM7BUwC3t9q7ayEGqtBwUmc29ymc1qYgdZ5xMpii32VqeKnJDjUGsFyUGSDw79W7Jqz5xzvrzxz",
  "key11": "3BW7Cn3iz9xHmHLYdctDpp9NL38b83DwYErRxvj461yoKi7GrXn6U7h4akw9Xm8PihSun3aKPVBf57CPFGa4UXvA",
  "key12": "58utkangpfdxsWPUhgzwQJeoFnfg8XDDknj4pDXJH4sB5zyf7mmzM5GXPGPBdeg4CczeWPboRTzjXWk8m99w4KuB",
  "key13": "33A2eUUd9o9ZmmK3LQAoPvJ2zDFhLvxFAynEpTPCRUaXBfatEZwakX5f5L6wuVRyKeysGQs5JDqLVJfTbfG8iVBr",
  "key14": "5xmTR73PDwv6c32wE6aeAG2DR6RgfRWn3zG9TtseszbYT636tZaDzPSP4zcDRi3e8LaNS9jPXySNh1pWgHAFQRVx",
  "key15": "26yg1Mdi5CNCgoHwDc43zR7kToAd7fLXvPVjbKyZXbmuPQNPhNCvBQicz18oHBiAjmGoFX6HWUfSf2uS7vaRnsS6",
  "key16": "499tsov451NSAqtjBcZ8hsbYEMQPhpoPRkqyGE3pNipLLjpxc23p3t7zznt127xUfWNakhcWcgh8X3DsHEYskjRb",
  "key17": "ybUDhTHFB8DxQpAcjgGirE55zVvZdzU1ZTHf9R7FgcCzrqJb4XY1zqpKpKra3j1h6PtxVywKi6BmqfyDDATpjB7",
  "key18": "53QdqUvcFJsmtfbRDZMxxPy783qai3opnyY9Ge8GKvQMinShC1b76XhDRXNmhjwkrhJWYPJKwFAqKzkbzaUWALpE",
  "key19": "37mnwYfAknLb1XbVCeAzkRWdcCKDGytn1iLw7oBtA3CPpvKaz533vX1oonCriikSgswKRzmpqC2pNstmBwAumH1q",
  "key20": "44J65JEKHQcYdt77NTzhALQipuntpdKumo2Us7A1uSU9Fryt4fwevLiuhs4WEDmsbU9z8kTjppJHAZayTeiGSVgh",
  "key21": "knd8ePx5195GEfnJNBaSiZxk1drMT857gmqsu1R8CUW6PzEG943UZDTWWCUeHT64vAh1Q5VwFU9g5S9zLPHaSr3",
  "key22": "2cczU8HvBPp74UAa5rKMLZ43vNTxKpX9PXFKYJzujJ6N8fLoS4MnADhPuwPJkKWuXjaweCQZodx3ghJc3E5jVt5H",
  "key23": "bDDpR3sePoNJPccUMchXZPUk82WNV4VXJSRyJceSr9gU5tEMtraHTZiE6LH1at1cmzu2ptF2zdmmGLYUoUmQ2nu",
  "key24": "4RWmgvtg1skRV7ZYnqTUiFVWoDXFrkxP7y9P9yBZb94Th3rLmpQT1oL7P42N2EKhDX2yQqkHQWXiYc5gNUHcfc2y",
  "key25": "5akxhQYBS95VMphm5iJmzsxAYk58Lw3aXxVW3GPpDTeLX2YCwVxHfwrHQNcLPgSQtoYG8ACZJMYryeZ2FbSawgLP",
  "key26": "2XgshbyGb3ZMt2FEJDS2pSBjN2tGFWqBY9aGS5gBqHpsfQTSTpWa4p9EUF2XktxQKJsXzs5J8Cgbm1YPaocCVUkY",
  "key27": "54TpGyS5yrHZDuyvKsmNZkeY4x1NQV9eo9YMjTd29gswW4b7TFFNdnzzUnYwxAWcBi9cgbhui3qhq3TBgMRCqAoX",
  "key28": "5tkZxHyvh1UBpfZoQXbuJWS4ZUnyDf6VbEmJvWr2XJiHfcj6JAc71xEMDyCKDArMpwGZwqXZ22vKqmanU4r3e1Y3",
  "key29": "3unNFb3K16sAFTtgojd1etMKfeV8NRp3GLFQcYDTZ7eZYfVTUx1SLf39jryu47teJrS8yg5itjkJeasszAxueaou",
  "key30": "t4uiNEVsndXvLeu9UjEhPr5dMjbrgSAdaj5XPycX8sG6AipbeBxjY1WXM3r9iDA3xx5aiN8rQXPe8F7X2ykqTmv",
  "key31": "49uRzcRTconqf2P971ctrKNikMzUmrAmsuXsZ5u7TheQFQAmGz72a6W65Qo1oLWBzhzuyDjiTfBf57cRBH5VZ8qB",
  "key32": "44BniFC2VCaPngStuk57An2HWvMAXCF5T3YpC3VERoNusQuZurGEfdZFuYydFSMNBZxFPiJcvrmpBkJwNbkDjKQ2",
  "key33": "4ZTEJ7FMmJMttctbgTqK6Awc6THaGt8Qu1XZdbWH2abTipmrnTAbaR8DVYLs9tde5sMqWUQxEm1BGaXAN9czypXD",
  "key34": "pPnxPFxL9LybZoV4cgkHJ5Yxi7v6CavGg5mqm5nZUSEqdyqT2cz9rrCZqX6UtFALWL8LyvkmMoKZEe5keXF51x6",
  "key35": "cHHVX3uSa1dtVwJE81tyBtiowGNdfVkHoYZeK8xuryRxo2gX5T6EZA1ej6kNdc68fRoZCDRM8kK4MDdnibuNkvb",
  "key36": "2vwAoA2TsdP3AFwZBkAGgkm4hg5LWURW8BZ8JDkkE6eLDT4qs1zko4cRV26MidSH4RPsJvooz6GTV1G8Z7e63v5g",
  "key37": "j5f7Rv8yyHEZftzBaKrJaJ26FbY5evaaEe82BJP5rGEMVcsDTfR3T2Y8PFkqij7hfLitoy7aSzydSy281WSqMVw"
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
