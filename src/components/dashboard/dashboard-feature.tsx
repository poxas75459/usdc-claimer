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
    "28gWC7bHZDp9jpd2umTyBfDzzxugSeYo7oV93x4zcZm6qyndbK8pZE3s7579SSAG2hSKTj2xH8kwacm7hf8kq2yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwe7XnUZW6FAEF775hKvTo3fr3gqzA1skReAtHpmwtY9mWbFiYk3M9xJieXB3riZ7RsR9szBKMLH4mmbqqjDy9u",
  "key1": "4Uj3sagMj2LaAHJ42adcA3CVRw23w56eqqnL3T113aTF5Ly9yw96Dvf47iNWwQ5xwyECyPyRCABBXwe4qb6hDq2R",
  "key2": "2D7XzYobDBAdZH1Lhdp8yr7MJ5oN2d4B35Xzr7scstcf4KyH6co2nwLaEjioSN7bB5sD9yAGCRYYqXmEEwY7bsdJ",
  "key3": "39S6HPYMG8wcg2pQH7c5cPzxaULPSV1uUdeQRY4ESiz82PsDSSerEQW2sicF76eVYWDxzFKWbQksuz14UMu811bF",
  "key4": "3omnC9TfmHnyyzGcUEmd4Mjc7LK4Yx3Mf4ECTq7qe36sPd1KcSacMjKFw6AqLvNVb1RQeMMnpY8C1vqttiPz617P",
  "key5": "i56K3prnZdZwgZKAaVdtRcRiefbR9cFsj8SAZSxa8gdJP4iKjVZFZabbGrnWpgUVzR4eRD6MXLPHp7mtgzRkwXo",
  "key6": "5FbA4vM9X9g2p2Su6cTLBYiJNUe4KN4Xt3YjfWpE3SzE1xQZfYMGkuHDuF6M1yYADErwdKXKv53s15UWADxaRn3y",
  "key7": "4Qja4duUZyn6PpoUhnZ7Gkv2bLwmhChpT6dRVx5g8wrjMosHf1qzN4BWT6QE6N5pACK5in6w8agrDcYQQnkkfXhN",
  "key8": "3vDAgcqJnpCghctMgkiyrjJ15rgehaqEu8K5KEMV3ajpiGXKSCbPCdvWrH5oiQSLYk1GviCyZhuDWX2jZVu4DShy",
  "key9": "4MqakQGrMCLBobSLXQEX5fFBkViAj5vazhx5u6rNmFexjKybP3RZg1au7jaj2QXreGS2uzxqi12bm12ryeVMd1BH",
  "key10": "2wuroA9GuqHYYNYo8HNSboy9VEVPxjXdhskapBYiuu4CkTgyMoQ9roUyELKUmCgxKgQZ5ez49NCBFXCmafXLuyG7",
  "key11": "3NU3UrrntFMHNybA5zVr5aHnHnbxHfj3jEZAaW3MZhdT5JYb1ZXxmj7SYBjSKGsU2FX2TrFNw3R68FBmfcN2BLU7",
  "key12": "2xT2FWgJ71UofqNcHGDFmGics7H3c6NQ27TXW3N6WJ4CMz1tefGs6HXMTjKxuB7F4Ztm5NHzXxkpnhhSTHBYPY8k",
  "key13": "2VSzFFp9fTXV62VbEqu5dwgcPUMWCHmtokYCHyswPFEVJ4wc5aDYAoGgP3K5LKLCiFCAcauPcwLnZ4ri1MRBhmH3",
  "key14": "2c8vm65JKVgqP4kqbW1pD2bJCRvya5yuPHjzxXTbQCxGYMXV1mSCbFoejZyTQ55Ud2faa6tqKTHp35TqCGD5snqz",
  "key15": "oKynJ5Y36SthQ6u6FwqCUmHwQLaUZwPBWQmrTsHVGGfSSex5eQUgFZUS3AvSnLhxeYMefySnuw5Jjj2meXmAbxJ",
  "key16": "2NUUZmHgUNzELyjCcbeDECyoY82zUk2Rh86g3dRBzGbubi4Ru8iPMajtcsstuphZtdZNkEZKQCJW2LGLGq2w2okk",
  "key17": "37hLQ6TSSo5E8cwobwnUAg1HfzvPYuX6G6Pnmhz55u1DnH5rrjXPn3S8nWA44NDkeh6vJHr4bzAiBFYTGzRZYmDP",
  "key18": "4czQ8M3ScXWFC5jgvxRJ7UvdEt9f3WABd3kThQtToJgraZAyFBJg8RHGPue3XWcFeK52ZyaueND8U34FbCq5fcHU",
  "key19": "4pNLr1UGWmeEXiGvMCLZkG1HoYCpM4pTyHfdmP3UYM8PK7NYMEz5TveAD4ZiS5cto5sDFDfjDxdAvxtY29tk6xpB",
  "key20": "XNz8YocWhpQu1mL447tsngvZX3QYmbhFB7x86CkTtJfQ71D3TdXHv4dwAVHT7qzM18AoNpS7Pi1wE63gpwmYC2D",
  "key21": "3SFLqF14kCdDst9yjTNPp43Ee1M1Vpp1CT2ugopgsxNEduxhZQcqLpaBEsSJ5PaBgEh2auhgoLt2foVKNu7bwJTg",
  "key22": "5piZREXFJnPAkKc3Mno2GaEEBYtbjDdGFUBuNANPbVaHALQYAwCHfEpjfrrRLJwS8PE1o8pGn34M5KsAErNoHBNH",
  "key23": "2GzGDmh51fyL22MUcsioCgMZnjBf4NmP5kbDJGeF8Tx3oUZpN6GQ9J7LdaHc6NdPerrWAAiuNEVTt2w3UDB6NALn",
  "key24": "2aRh4W9qKvQzRd8son2U2SNauk24viTfW1TC9QMVMWw6gghgLiY8CYmvz82rRScHGyNRfkYKVShk9Cf5bvBXCbWk",
  "key25": "3kQ6XhfPxtBiDKsw8LpCTcxinafkmpQPdX7uigdLxC8GR19GEQ5YPiJ9T55zmhxC65d5xfYCFjRaLnCzmGQn1N3n",
  "key26": "8FJp1UUWkQ8QbRHC6VhwqQy6c54EXRKryScX9S84VKxp1MLXh3r6C1CXDUzrPXfwmbryiBLiAG416kz38T4pMJe",
  "key27": "51DBx6i9UT4MfZp2SXnjZH3pqAkp1xtuMUNZQYtGC3iY5TmBsgjkmWmM8oyn1ZnfaU6LqrT4CsrAfi4CUTtE4ohE",
  "key28": "5Fm2aukHvkxSfAPsCzDfc92QSkGxMnBXBzA2HSa8DHyd71aBuD9Ss7rmFdHbkRTEXvQEapvz2WRg9oN3y5HUXwAB",
  "key29": "HGfK8EFhXeTPgwqQRFUmdcdMjqfyEmqf9GuYFKZQ2Z4dPRNSte1aDDTLL8c6kvmRrv3dVUqbGpdgP4H39bLw9cS",
  "key30": "2HV8EnqbMQH791wwSBwmogDu7hwycdPRNfFLAwUACoEa2sc3EfcomRtwPCxdqhG8WR57BYnfEGXy9exfYyf1YNg6",
  "key31": "2XemHbBdouPToQZcT6jYaZfTEPxW3DfZoZUdXCgg7VGYXLYuJYBAe2nSm3FebP4XCNSTwzQyt9MmjmnRGP3RVYrt",
  "key32": "4cRet1NVBwcRMq2TsuV8XniL6pJ9nMwJYSQJjJ4NX2tCUPErLvxYgoQZfSs8oxwJDr1xCvtYnzFuZ6XJkPtw7FaB",
  "key33": "S1EzmC9Bv2H6m6PsrEE297QT51NFtsLmXLH4eE1UPepcZm1VjJsgk9UVjXFedKmiPHqEGLc3jav96pyMmacSspX",
  "key34": "6qiAZY8pn9fhRh8mS99YU333MFQd6r1ii4MaNUvsxRGJTSkwmoDd5kAv6gJeZz6AtWq763BMet7wr5MAs1LVPNT",
  "key35": "Fzj1g8W2RNMUukATw2a1nTwEHZSFg4z68YCRySnQGPRdv2xRRRFK9LkFTtjUDRzSodybVA8NoCKLkaGSPcWdCAo",
  "key36": "4UecyScdHQjD97jBijtqnyXpTKDUoBzAqwV5xNuxiD83go7HezNbdJXvjTecZjjQHsGDiRe4Qbczg4gyfbbC6Uqb",
  "key37": "2NW4EyzL6fmWcJiW5ccmTgsf7ei74shDwiE5id7urPdzCEaGpYFP7jZ4MgZA44P5od6JC61zThVx2mE9dDVeo6Ti",
  "key38": "2mN82qUJrtz9mPqwy2AtgVS73ybcJGV6eHhNnHMoieRDvGND3QuHqsQYYqup9eQzZk7sGr6BkHzAVkyWzn7RKGG3",
  "key39": "7NANE8BBEbysu1iqSnqqqe44jK83Lpe668D1ps5aVWcwqjPUaPZbRbi2R2Mx4inPZNRWYFxugZrHHNDroGmeCbP",
  "key40": "23JMkQY61nCpDz3GV8REDDTvZNgjSSKj6j313WZpg3M6PajSt2crepr753TvCpGYmcs9dr2VTzXzg1gViB7vfFYd",
  "key41": "1ombptofcqGLPkKa8jv5DRtRCYZMhXEmt9Cx7QP9ycCPMHkMKDVwpNu1dVWsZHAnsJP8axxYpxGogv6beTzQfF9",
  "key42": "53bYoGofS6iv3NwY14S5Jjg4eXj7tbt8GmLucQWqb8UGrbq9q4fmwLmsJFZh6jPLxAPvdaou3ZfETM3W6f3t5H3N",
  "key43": "4WWAm5fiPWP5gq7dvHemhxcFVRazBjieA2cHpS6a798VZj8rwCRb7oHSAXMgQhNiMCJdyAhcmmKAy2xmZsa2idav",
  "key44": "67VtqyNJhcDHB1L5vkNt5Z2WhVEfWABvnov3q9YF4q54Gq7Ce3WCSyBi15ZUvcuhhqkWSSSDPHVi7PRb9AnDHey7",
  "key45": "4Jzs2SVMN3LmD7nmaZyoVbL4gGdFteRN3tFYpnPnQD3rMeZeA5qwHCuvGyvRy2Wc2QDTG1sXBGGXcbxy3x3yR6U1",
  "key46": "4DNGxLKDSjBtCQUGkX3h5GMy4axSZNLrcYXNBE7SrjNxSvkCUBdgmfcB1cxWYgWoUpxg9p6T6Af9PpuYVRj3UcgQ",
  "key47": "3sCiC7whRYb4cSwcdsvyNP26C3smRkJaXcJhRbH1nxaYo6CwS9RXfDN3eLxSz7mz2tXwn8Rcc1kASSU9fDYyib93",
  "key48": "38oV5RR73y4DJ1F19bhTDsDEHuFbKskyeE6rtcdbzubDkSSe62BT9juVB1n7keya5tdYmsD4VndhFkhcbdG4qJT1",
  "key49": "2M2wMEBf3KkS3mWEpioY8hjCxoc9GQRaLVboJsTwrRdTpzk6TWdKXotm5ZhhLGphecRMaT4EJenAMA3ojabJVvac"
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
