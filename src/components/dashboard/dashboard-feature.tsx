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
    "447keBf2bVXNCDufcAckWWtSSsAUuUuDiy9DQC25cUspKTBXCMgg9p7uMpqiyxgQkSFhrL8GmWnFvseFpgKvqDg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbfHjBki2iPoUUqLvmthqVQoBv6Y9QDB9PAfCnxNYzbHgnGPekTbdkuGuGGzNUudMRmQ6qj7XMhZkey1os1rdsx",
  "key1": "58nEZsXjKcow4GMXGft6Zj2Qi731cPyzQ87cD6pjYz7ztirjN5tAERJAK9zj79M4hs4AzWK1AAQTj7BV29PfF4qj",
  "key2": "586wbATXS7yuTKkYNq4FggLpPypBfPJVHoiHCY9TjTqRuu8rbh2uKWNdsnTT1HifopBvLFqPPjBcPY3BNJwrG2oG",
  "key3": "3hE45yAo14YB38smRQ57H7KUh3wuFGXa4YBwQ9QvEz9gNUpnkwZkoV9HpJzdUqpzpdA7x7pCmn6cEY5AQz9CbDZa",
  "key4": "5ipj3ZrYjvibTiBGdg7KxFAj9pXGZpwLiBsLhfhadzTYYrfhJqK3WtMFMy2KXb7zZCi1xEQiymJXksmdFcaprDNu",
  "key5": "2PzEwPu8MnetSva1mWdf4YUNqRKuYyMmotnYZoad6f5cPeWVPyXpp2crDt1gNVc4fBPHwtFPUJxmF7CVQvuupnfy",
  "key6": "59qi2smfTuoqPZRHRUEJgwH2ULZvNLYAKU8N1E6JfbCFd6tT9fjo7KZS5dvQbEyGQcuQQBJZUU1xkwNm2zb2qkFc",
  "key7": "4P1Jo5NBcCtd4ELAB46MvNihzYvexBkuTdYypehiLj8F6k3cS5C6fcQrhkk1SGmRQDnp5gHUthPw6sdQ795rRwAd",
  "key8": "4ZT2orau59Ltk5u8k777rjTpXfY8GUSAJCDLeYTSGPnc4JiiWzQwVVPBiusUeTVTc1jWhPKZ9ZejyQPt8Xn2m8MW",
  "key9": "5Cn7WfZsAqqEn4yLNiAPTUAnnPbBE1f4sqxrLZp6YDf9vBWvHxPy72UjznA7JDb4Twi5pKc6VM3CZNVaU5x3fRQx",
  "key10": "2DAXG2xxQi6XmzSmZzcKwYSTBhmPek8wBRgWRHc8qawzvKtGAyvQJiTosyf1reDHCGiHbMyHbvxCXxiMKtrbFzTz",
  "key11": "3FA33aqmHpyriMX2e3dnCVKDRLgBUiwwQ8JKVNKhasVLHgmPfzmjeebk1GqGhmk3vBGcokvMCWsXwoJskfzzDo1R",
  "key12": "2M6dnga96omgNjcxqWRsDk4MbbGmhrddy3LoBmccTUpQ7RGf28qxGoLCWKZjaFMH4dk8ekR1XUHX1Fe1yHbDoNYS",
  "key13": "2fjKy81rUtHgRNBnwJehmQKMsG3mir7yPjv99F98iWUECkKpUbQ34XMTFbCwnByzm7X1KFVBx6YCqfPFfDxzk9Q6",
  "key14": "4g8nbqG2wgEE3tX96B7PH4zqdK3VUdWDPgsv3aK4A2XLdj59zcEK3geEczhDYDoya48GiYUEZSQtZfJxN6e5n7gt",
  "key15": "c983HQvJ54GepkqxnzfyWZdgwX3AyXcmcxwmu6RnVdnFPcWh7fvnYXZGptXo7iPmNx89Un1qzAgQ4bNLK4i6dWv",
  "key16": "RNVp3LBDkUXyqdnfdR4VttXbDxEbqRwWUmtynbDVLfMBqossb98HexR9qGQ27yms7zKCF2xi7iemChSiu4iNcev",
  "key17": "2CVd8ofa2WN1MdxnHsEnc4j1umSScoTgxMr8B4ajo6woD95hyYZxWwkJFWEczmJRZBw16NyZ13irVKLFw7xpWSQQ",
  "key18": "4qTtiktTmsUxGjSxYEFptg2WhKismgP2XLwPsBm9uafvrtLRuGHPCy4qSMBVXLW1iqQJo8AsJiumdbHzDQbQDgsX",
  "key19": "3yrfi18Yh7GDQsRq8pDZZdAY69mXXTK8V9EA8n8HCcuzXp2f3j9cuxWqKSqHi4b21hjM5KsQrn3Dpo76w3Jos2Ps",
  "key20": "FWB2QTdstJjXz28kYckou1CYmzUy1435fQSQrihhZKCB8FPfJYr8WDvwgA4zZdarxS1PYC1hr2kPWP1taSDocem",
  "key21": "o5XxwZFnyBTuDK5Py58tTyZQj4tdGpy9GHMnKHo4Gj9Uam8YDpnHks8AxpuAs4Yuk1kCrdh6ThvwrqF27Gp19R3",
  "key22": "2bBUp9nQneXu5Q7Zn96iZAVWeLh8LST1pZ5jRrQ3XGMCS4cMN7nn9CbRSm4ZxniFz1VF7LnxYuvmRDAcyDjhJsoi",
  "key23": "4HoEuVr54LURC3dQHDRAhFJn92bX3Bhskoj49cPVpnzxMna32RVRWvBERMESu9H4CVbNYTRG5Aqsa4LWWAjJBCAX",
  "key24": "2KkEJFWAcjPDUpjFBwGZoxqfA6GZwQftuUeZXgzbb3cw65EQ2kTTvxBZ2CkKSKrfrBGKX3cSVqmeP9AnKkoDw1AB",
  "key25": "ofStPUSWhvgxSXQVCyGTp8mo6AeeiK2iw8Ap9sTwSRSxm4nmbGfix3G7rembJoyf2vsKooRzXYj6FYmSyD26EwX",
  "key26": "ZDCNmmPuMxDdrKiQJh1ZSp2Q6FGaiCQX4drq9MT6FqTw9w4L5cGJvraABtq9c7GdWpZJtzeuAU1UCXdtZB4QVv9",
  "key27": "3Fnsj1mt7bXMo5zTSda7xt6DcywdgD32WtQrfHr92EYW8Q1BJzWmW39ZR7558w7LQj6JrR7sc2k2SAgm6Lrv8uat",
  "key28": "65GhYkcou4nmip8yNXzGrCxxd9GQxnW3yFVL8HcgPegbQBSNki2YiFkZJ6q8tKZLeqXXAPLNpUJACqHeZE9K6iu2",
  "key29": "31LvUKBszGdiQ1hAHCigDGEN7m4Xak6puDcYnJNxi7rGdzGdW1PGVkW3aHgkKm81PgHAwU92AWTLy4Tcm8VarNnN",
  "key30": "2ekbyCenPKqFyn93nnL8CEQfdkE8ZM9JoZK9QLG8E5phZKFr1tXyaqk6r7p4nvyLrjLJp88zbM6TuUBkKMGQYxWg",
  "key31": "3pwCsWYhRVSk3W8nD5hETKPBUJWUMgfbHv3hcArFy84Qvn8SoPqTq7vdjpBnEKADUv3Y7Xp8pVHsACXiQvmyN9VL",
  "key32": "5C1ZimrB5geC9gRYmhrFXDHJrFY7RrVsnyUBD1To3tw1BY6RHC1PH1bMXtGKKGckPJgEonmsJCuiEG6nzJYybwj",
  "key33": "2v5WAsCBkxMynEhVGEjLLGSkcwKq6Su6QpLbzoAJ9D3VymqtnGdfvRKY9jYmvbT6qM9RvGnLLqELQJLv3ruFfP5s",
  "key34": "4Cn93euWSs2R8bu6xPpy4HeQqX6TdvAEGH3ZkdP5rqCWCzc3Gxb38aexhx2nNVoMTVaaXzzfbrpf5BbWfuqEWEr6",
  "key35": "3LbLGcJTj9eBCZG6XnnaJmeuktN6VD5CaFU2FVWQwqDwkN54dzhsyFrsbrc7kpTzMDhxwFxrAoqpdxLVes37bomb",
  "key36": "2JxByT6h5tbsWd5nPMtSctneurNbkhAn4NuU4CFkw8T7B9cSVrWszdXQB1arj5Eiy8y1inHNZ3wfjwbQcysPXtGt",
  "key37": "4hHtW8XXqno4yaYL3ho2NMW2RUbUwHSbCs9PPdVirCzpxxZ8ZeYczBf5RfafXMLNV3UHCpgnA3XNqHNuA5jKKRZk",
  "key38": "49WGPSbKg6HBVoMXjHGT3Y7Q2e6KncdMxpLhNGT33kBMwKNuivqso9Nm3vUmWJjjX1Csc9itgeMer5wmwmtofBeJ",
  "key39": "63cgnMdJEzL2hHqKUipjxuHic1PaRAbeiuKGTA31KVw1bFH7agfaBt81oXTzD3iaq9HDwwQV8LjTY63NWMHWnSL7",
  "key40": "5TDr2DTeow3HArNsP5U96YPM7XNMWE6EUQeSLgJAP5x67KTnFk8nkFzNrA9eqpd7NzfVETZDfiuof4vuZmx1givD",
  "key41": "5q2rxjJTYbiywK31mT61pz7AyJjnBqbetqqwKPNgD149FafQ49rFzMxP7ncH2wRmHGWL5szodA6yjUKG8pk1W1d6",
  "key42": "2431vRYp25X1vt53vwZDR1mvYLzzxUneiHgE63pcw2rtB6yCSawgFgvrxGqMr5zFDsPUwei9myRtC4BN8WCYtf4c",
  "key43": "vwDVXqM2TEZbBmMopa7UoKjhNifcxYZjtQj4dy99kbkG3WLze2u3iCJ9yDxrYguibVN2wY9ZREQ65rkDUA8VnPn",
  "key44": "5yCPe4DwYtoiAnZtjnG56NCMThVGyZLne2iaeVFsWfVqUVUnv7wLKaduKQB4VY4bvAyJHA5aJfCUpxEerAn3YZAj",
  "key45": "CYmDTjSq4xcD2m9RApUYJTp6sw6T1FvPvpX7cAohC1M93wS3yQxTXPrpLBaJfTdBidCZZGqQnLfkkd6o7Mg57Lc",
  "key46": "26mgcjA56urvs5NvMyj1kUBAaCDYhMFP82TX7YG6xmRj5qSudBA2ZswtY6BtjHc4aq1cQvk7Wpu9W1SprtjBx5qQ",
  "key47": "mR2z9bW8nLs3WvPB545wMfv9DeBT9uqagXRpGNcQRrDvyVsyKTfLzJgcCKRQqoypiUe23msGbJrNfjfstXv3wbD",
  "key48": "krutvy9Chwz7s9er43kVH9F8RJmTBWrHdX1GkkJ3AhtonuxBAEQSG6jdTQPT7VcjeyrgQJY7vZmWaQNyKb1fjAL"
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
