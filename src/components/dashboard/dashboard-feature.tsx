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
    "62Wbecrviayn1pWsFo5uAYefEGFRFYM8kAgJuMBFMRbWai5y38ynM5nyJDwJiGEp8hoPc6DsLD6We4X6UFmNyQ3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27bnfaJLcSZYP9aq2QyRm3cVTh2fwL8GHTYHRs3eR3wz59KSgELAyVdkfy6xTqrGtzoGC7GJZxQBxVR9Uk5GBYaR",
  "key1": "4FSzu2xsnDVkZ6PezKq2jNb2bM479yggPqbjKW7yKKUWPF6eBbDAqHxDLjk5rzMo58FXZ9Jq1ZtXG4NQqQbbuEfn",
  "key2": "36ePQF4U7GnqSvJKt1X8mQ1m5GggUdsUuHyssyYJpfT2CBQqBG5aBhioopngpckLuRrp6XDXs5m6XPp1JhrVree6",
  "key3": "5nik6wEwNE1KACeFNSzZCq7qqpZqfEErppbGCBBDb98ABm961yiaxFhdYqGapao9FT4aqnVtccnd4Uo4QJTZM2r7",
  "key4": "qsCUxRnJxwcxScMdRTXfyR8mGGLiUfP7rYowsog3rsTM1wxdMXqCpaDEa5k94ZbAqvD9MwaXa6G6DvSg134YgBo",
  "key5": "3Tt2hLHEBL1cWMGGzTdodSi6ZYSe1dmNpHYtZuWZigTehALTp7W6yHovue7ScWy1BNRxz3c8kfZyMhi1RxRSKwvR",
  "key6": "5bcatUcn4ZqX5y3PN8LK1s1jW3trHW5CPDsibXBvLg6vQ9wj9qc7hegaTXnF1wbwsvH7BgbkRy2pFhmQfUSzjdTj",
  "key7": "4nqehxyBKdMjAStkC5FwW864r32JQdAJWXmjs4n5eWzxn555QpV3pQRT2Ff9bGyDhHZiFyMLqNoPwzdgfMoouAdA",
  "key8": "3J2XNcgBiNJLfbt7y5NTYEnabdwUMK5kYHDwHt45y29g1eE9HUtNUdFReCaKDtRVDd7BPxJHQqUWd9ZMUqdadnea",
  "key9": "xJeAnXL7E7WYCmEwXCVX7mXLLWmrQguN6M82ehiaZ6WgcX2eVKVukAbfdnxfRRx6qiLL78QNpBHa24C5L2eRrb4",
  "key10": "3q4D3syKbFXR1A91Ue2Ncq4GTKuaURhYHiHkRfc8x2GoA2Am7bYRTJCmoSu8p8RXiuw4dD9tVRr8dwseuzH7pXJp",
  "key11": "Cnf2wsR3ZvJeTsPpmmp5KJvcAoEPZ7fC8xFs83EHCXtyrjW4GLsC5h699s1UvE4EBJBjXzmmrUT3rx4k91HisxY",
  "key12": "4N4t2yG4ZqeFGsZeTUrAetXNjR2dg35BjpB3Pc2CyZUrkUAzmNws6dX8ipjyaMS57F6bepWzGMTeV3aofR5yGuPU",
  "key13": "4hnq69XzmyPY8vRNgGFtRBEx9D4tPrtAzk2GzSAQjNisjuaetsPuMRL2tjT5Q5CaCHb6wuumwvgw5byXWt9r5wsT",
  "key14": "25Rp9WqFXphNdohRF3YzfZEwoJqhDupd1KQzqZrgChm3N3dsMqkhvvaxXnUmMQH99fGn46wwa5CVC5Eofv1DcCgY",
  "key15": "RvxBabWmLzSuBeQhH9Y8oTCsg7mwMjpEPVYLwNitn5X5FQ2cufziNqgDCBTkpawMHpDydCdPfy7oTDtdcWJfAv8",
  "key16": "2LQk2ZeCtJszL6MX2Tz4E39Z69wRUzaFR2fZb9uetdE9TiCJmqHzvBrtqJCcZzd5yn2kTKdqAPRH6xe2tuWr2bF3",
  "key17": "gnUDJTfB1hff22dAp7nXmUe33QmMqXqmAPKyy9sotdkxbXRW1UfdN1XU6dQtZJtGDi3MZtHzkCHfNUxqAZuEWC1",
  "key18": "5U9AraoBvZ3peMcYJ5hukY2fjATsDe9iqWWLbvqUowAdHKkkszgwKUmfTPzwp7CWE8NELfahdHCWRCjYnCZaYsZ7",
  "key19": "3kJWaXzabKis2LzqESfzbNKj8mBSM4YMPEQCqnRH2KV74PcLYmfNj5xGqY8fv8e4kMYUVNiXzV5wqZqyDxQoBvL6",
  "key20": "3hDRQxmGE7FcWrDv1YUQ7ZhtWKNtTmDDjFLvT9ostmAp2iFG694p5zDLXj2PMvXfiQYEfedFTCahtB2DUafSxg2f",
  "key21": "ssKUEzxyMyR4Te9a9zaCGLqEP3SDtEx3FpnRuok5qghoWx3VoMQ4MjRpbwnjDigNgvkizF8uEPEVwz266sXjYgZ",
  "key22": "5kEmCySwDwKzwKCEk8RJoqDTkotFZBsfBmQgme7qMD4FVDpwjHXiVyAyYeyVaMdVn6Pt71jxpb4VBFT7BeKutpfc",
  "key23": "2Wee3xdYwExua6KpgBW1PzaUsYCKKH4ovteExutYhNQ2GDbX2qTC9oxtPbC2o8TRDVj383NGJLTpwTZ7qbbSe66F",
  "key24": "wRSpwJ65xyaGzWbNGxta6WC7HyNfRnCPyXddQZ3BB5tFtfnqEjgndgHJmqLA2uigviRxDgjXyZSLtkQQR1WKx6w",
  "key25": "7dHRhrM3gibhWbim8BpAKE1Ww89DFcgSsGikwnd6TTkfpyedouquedU4y2fCuEVY3F36hEpB92U3JS3cTJzER9m",
  "key26": "3uiYqRty91Hwt2gpqdDL4Y2YzeMiVizayY5DvWd4JxomKL7em99SRyNFouBYdQ1XzviczNk6oC9cKG25dCTyMqS",
  "key27": "5tbC94xVBN6YCYuN7rPHDmsbGETv2AnJwTXAaX3r2ktN4RvdG7YnpUS3WrguWWcyju2mtTZLt3aKWQr1C7Tdg4FK",
  "key28": "3ZuptZhJniE5HAZD1feTTMuWnrmdXHDgeXohvUMUXmFf8Fgsy219EvvGC1yeC2TrJL3P9owLThdKH9ZLDeZhyN7H",
  "key29": "458mwqaxusAyQ1z9FLShfm9YLQcyhnFQywU4SJTAf82ciF2phoscs3sxxma9F6HZT2QFWc9RLah2aADNHQY4YNHT",
  "key30": "5cT1XsfTqUhbxvJV89Utk1LbCEtfujBVvKP2tpffu1M2UcQReuTFVenWQF7Y6JixQvhHdLyLbhBFntNtPWk8PAJS",
  "key31": "5Z58ZTDT1rXCpmQ4V9JRiBBUGhXmNNH9n9tiExaUuAdb3naQ1wotMH6nYjRNDQNtR5KvFNzRFpk6GJ8NQcAZhjTd",
  "key32": "5z5Bqy4aMrSZU4c68QDAfNQYP1vonMY578ypE4F9fz2z777iFWN7NVGaAmXdV4j7uzzjujGwdDagMbjopRsY7Miu",
  "key33": "4n1ncw8U5XFjYwjsKsSjvvb4rDer5qrYjJoD8Fax9tNESizCJeoLGhpHkiRcto85i89qJkMWctKJEd9XsJUPGFB6",
  "key34": "2Zq44Qo3PSiEWpmJo3yCvdQTD4kqN3uEQdWFwYR67KiBQijsCauFLukbPZHyuezhYPrAnd3y2kvezWxujSsF72uT",
  "key35": "59GnsEmnjXR5deetpEQ6Td9AyJiiLHewqpdNxrdHP7uUpQfpsmt2BHQKPkRJidjtxEMF6pBZmLoNGrrr1HC7zYaA",
  "key36": "5uLjieXTppT25QjEeYoAHBm8N2NxuZq3k6uF3BdRZKQyMsAiLt5G8gjtxWjWadK7CGhV4wryupYRjN5xCxjq8BkZ",
  "key37": "X9md4nudYD148QmU14ocsPE6DkoEmy2c4JwtR5MGCBjG2rwiA3v4jdeav4vcAEkdrUArVYJiJfjMVpKPMHJKnzS",
  "key38": "5cRCuxPntQ4dYcNzAd9u2srjmLAkiJAKUGHwwqehnswiR94metWwERYVkuP5tk8x4uswmxYJx5uKZ1SJ9dBEJFJd",
  "key39": "5rDNeptgvDzMCaMmKeGJ27DffYtK52Q9dLhUPV7LSD7j8BTwreFhPEFQoZbwtKnJLKmjtkH7LtWsFfFpSBGE7eSD",
  "key40": "BQPzNkEpWucVCVjit7ZDE2Rb57yivBhyjzc6ypf7mJPuiyvEEARYJG49tCfiWjGemYmhoDJUPXnJqsfXmxTjRSh",
  "key41": "42Mdx74Zn5A4TyL3MqiTN82hMVdSc6DBLpMwnbLUMmcw4W5z2YXC6SAHP6ztgxqBDVMRgP5h4k5VFWPceAjbzvtd",
  "key42": "4o95iE99fZfJYdF1f4otaoAfoGoBBcSvSurYVfuAmtN5JR8uuHoweSu7uVTcWXajo4jN4ZizUV1fwUzrSoxMLDj",
  "key43": "r1K7pmZXZd1MMZQfaCH9NUVnGkaPKARxCkQPnYyEK5XTzACQ5uz7ZAWKEo1osqfSR4tAFyET6cmTKLV1kePEUFP",
  "key44": "5ezoZiMvMqTofrg45H1CaYRkGRgv9NWoZBFjfJ3Gxge8EyB236SbDkUX3yuQ9xHfdXUxASbyBNYJFtQukoT6hLPc"
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
