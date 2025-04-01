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
    "2iPCtSw6fZfnbj1YhMy8XdDvq1fJnyuBKGUrjzj7doTXiV9ywWfQnTas4XTwd8zeRx7hkcfoZtZihF1kumwBKcM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cp6R79YCrki51r1iNXLMMgPqvnPdgBjQcpMB5ENqRz5CeHvSQ1fJux837fYLhbXTXfrit5HyHCnbmWT87dCeTng",
  "key1": "5vJPtP2A2uA9u7bEPpTSbN3D3HhaEndZjnMW6DFjUJMkRtMSTnQxoiVjtQdBFxyyUhuYXotPoWp9eiuGbgozcYpJ",
  "key2": "2mDQV5WiTgQC5gjddTc29Su8yr4a3fDnFoedqBPSw2R8uHgnDQq7akSU882hRVqqYVVtzmdyYSV2H8Ehy4fiGQQr",
  "key3": "38BVg19q6tXwJPGWZwnGvfZkKeNCWKpDPT99QKLim9qX8enKmDB597QDvwacNkAMm3qcDNemUHq2Qv4MxBZyLyPZ",
  "key4": "4QLFBuGXTvJ8dMd16WV5FWj1ECTbHGpbGfJLjc2yp4pK7iEBaVPyFHh3eZ9rqiQkgAVdoDo3MN6B3fL93dPgX6kj",
  "key5": "4tj5qbLUXscA8FYhj8nwmrA4pLGBpb8kgLnpTN1uWp8H91J2Sd7N3eEDrN58guCHqtUHuXjoEnY3VTkyPLr7wxz8",
  "key6": "32V6PkqjPyaDd6fUz1HcH6wiCobr9tKtB3pVX24TQgjXvbxkTnN8qh1h3vQfzQxrbG9trczH6fegcPPNmgDCgHXm",
  "key7": "bMjVTArQG4NJkQM8eEYbkQEZda7pdzJEigDi9TQDsuv5KZp1CmwjbKwXbm9LELMTQgG2LA2aruns8QCrmWQREpg",
  "key8": "2bApSrUZYb4SLtUkdrVUjfZy1AQF3iKnB5ViuoPbJfi7HQWekZG12ZatGLYzF2gvipfreEoS38i3AWeMmYB7dp84",
  "key9": "rS5To7aNnrKQ5EabWddWVcac6a8ecfEkRb4X4mgQPpDtmPd3gRtqbE4GEPyhSrwA9wenbf1T9DHjk1Hfwp1NDbQ",
  "key10": "5zKJzkFekr6qxpLDqwKGECprsdWhZhpZcK732dPH4xUpGm3E4MX64DzwF4iKc5afYDYXHWhgtc5WKooqfKuBhrD",
  "key11": "6UQ2oSdEGtunAXkgGE2NpfjZahyTFMRpFDKHJD9xEsMQCjzhPG2Zj82CNnNna4HQ3y9cGXjSTiP8Gn6KA1JaTpc",
  "key12": "HD2BReAozDw1fwiEzaZRMQt3zjCduFsfLYTZhUJ2W2oNLLXByVTiWdjAWBPDWtLFPDQaHz9M1M5D7mrkysugy5G",
  "key13": "5Hta8K87uXinWKFr2215CapdqJRoiLYAWxaZcYH9PFwoEZcPYFAevXeHvoYYJq9QQs1UFbRCKDuYY8QBbYsBBvaB",
  "key14": "2k33BmmTxgEpSNLrnhKxtLsZNacHAQkRueFVJCLtUek1xBKHuftQFkqZKPfoS94v5JVR9nY9vvMH439uPU9AY3QK",
  "key15": "25uJdQXQjRVBWDcDBtR9SLn5Gmz3j5m9o1HzkzrXoNR76P8qeRTJ2JUJ1dewEP5j5ydwWLKuJM18KQBVG7jw2VTC",
  "key16": "j2CydoGfFfPQGzefoJxj2pC8NiGGEjkcy56a3twpxxWsZbgFyHUC8NFPFuFg6R5xpQ4wsvMjxu7Tii1wHG8ZYq4",
  "key17": "42dujcxev7pT3u4yQqNFpSj9F5vcchwPa88G2kSPB8qCphJmcjv6L2gyy4GH78wAjsKfSseyv4YesXZzJwjStoAK",
  "key18": "43qfeR8tPP7f5UKRpk96rcZwA6uCtZDUAD25grhQNmKuwn4Ngia7bmuoDv8UpgUAnAmhc6mbgt6uL4U5o4ki1842",
  "key19": "378KmRoVFrjyAcgnzXYjbL4LY9StQ3YwgYghCkreKoY7VL1d2cKDf4fGe32bcsiYi5snfQNL9wTwoWxFGnLdgihL",
  "key20": "51Tunho39mUw7uKxENVgCtBDzprnELZEUFx7aV5LAkn38ayNtW6kobsfpWLiXanHjHHKpaZW9ZRqZqArjKuDaNh2",
  "key21": "5BD24ZHf2ETmX564J7uPjxFgTEutcRDHCiyp8m5dov8MCT5FMsa7yVQoTkSTyH1aQnnaJUauFUJkzUbcLY8jiWem",
  "key22": "5x8JrbmW9tZK9Wj5DSuoyYUcXgWjzhcFTU8tfHQ4zSrRwEKvHVhCfkDBa8SpU48qFXxWKQzY4qntKcvbQYBqAkiM",
  "key23": "3fSmGPJTmj3964PQ45QMforcTmv9b3BSerAqaeSgQpgBPwmTV6hZuwwhPDPcPYiajeKNvtpvSqeuut73wCMYvtUR",
  "key24": "2tNBgaDNps5DaQpb7CFkS4f25e8EQsncoAnXpkKawSw49smWPF34Rpfj56KaX18CtoBiw5WniCE17xQPNR3HDWTz",
  "key25": "5qgcj7pWA4net4tDWgiVe4nFwBHDArHDLMsP9WaaYBGvcidjm4aM9TJL9XqRwgZpsW9dgbaJoxZaDaJ4HeJE94Ls",
  "key26": "2s6C5FFA6p2ohTjYoMukfYYn5hCeLezVEjAQjd2DdFWD2Y6LrNQTpE5XhPJLytgnr2jftM93G4BDn4uug9qwN2TD",
  "key27": "4adf28oE5KmS8aKAJ8oQTpQz1Q5YE76rkSXcuVrzUPAGt1hf9NqFZRKqAL9uFj5oBYNFzWK1ceE9v9QXPPEHgfiS",
  "key28": "2RUADSWxHDGq8GKG2XVpQh8Uzd7CjDGshj1aTUFyQrWrhsbau4dmGUUueWFkSj89reYJp1WQXhHQyCHquHAAcAUb",
  "key29": "4oDxkSNJvEmJ3vTiwvYeuGQY9Dk2Tnrqi3hWeq9GpL8V7CNeiESJGU3NjKBB1k9jhEawuQVkjSkfitC6kwamJH5m",
  "key30": "3qxHLYLDZRRNC3TEDGB3msbXdxzuXMsAd1cNA32oVuECJDLJurMxVitu2HSLgGx6jkEU8dk4MciPZT8nngBAWGBP",
  "key31": "59nwCEYzG1cxJsYgDcAxZcHAqtVFNb3jduWZzs8JqvCN9E1NrJZX3uxVpQdDpD82zrAw7XVhLFwjmoNtQvnomaL3",
  "key32": "4vj39L3tk8RWfNreDP66oRh68ExFzGuX5ErmD5kniMMNTGinWt7Jt2Rjg37vYqK28QzSELNTjwNbaiW4ehA8bZHW",
  "key33": "5brtAfrLiRMrNhWcpPqZSo5ozvpFp55SUJyYPNRfw5tvM4q5N7bjgkm52enb8z4HuKnJTMTCHWeCYFJcivJMN88e",
  "key34": "8brfEQGP36PRSTck4Ln6ugTQFHZxP1MKDg4ApFqVB52CX7RnWpUbKwaqDoC6wn9m5a3BP9GTfoFnP3obuJyYfX1",
  "key35": "5kGe2RL3PyHS48vyLCrLLZSKbQMsgdT4xbc4qxdNTt9cbfi83AeBKEqZvJtJY2GJW5952Jp1m3WokLx6cW6fF61M",
  "key36": "Xf377gf3s3RAmrQmi9VU9a1eTqAtdQkZEUJqaA7aWzgHqbakrUauvRF6gLDMCQ8NUqMgiH3KdGC2Zseqc7NwAu2",
  "key37": "62Uw94CtigZSUhF41EFtyqPxaqzXco6NdMHH4hWarpe1GJHSzVGxeQeBNsyx4U4C1owxMF3Ge3YRLvpHgvBoRZrZ",
  "key38": "H8nfNCGGNeAo2EeErfa8VwuPXdADKZrZ4ACZVVK5QGREkt8YvqnrPgBtJaVU6QjHAudQe5e9xn7jUcCQrYoNpRy",
  "key39": "4QusZMAA7rpzP45gvaptxYQ57fSpeTvB23KVKoXngUkQ2aBM6fycEhAPKjQiH8jGuyPy8GLUmz6S6TQfZ259nwG5",
  "key40": "4GeQ5esvAkTN597Ac4jXoa2Pi7zSDaLFYyHUcr1sMAfUqrRTyfvEGkaWVtGw4S632sPF9AJrwYsCUAjvHWwCa4GK",
  "key41": "4LKefTPr1ok7PCQUxPnSySyKWivP8uUZqzi1mGwyHyF18LuZHo2NrULyz2qzxVH7VewYjQXwCUGTBCYzfQX9k3pG",
  "key42": "5n9PMDAsPK9SMVHBUNRSu1QtPtKi7haY1XsaaZMY1MSsm2F7EYmh4GTdi9qhe1wntSY5W45BESCtxzJ8v45h5PgQ",
  "key43": "2CVBhwmScXaZDCpTzYa7985yrNB3MWsJG7TA72wmjNqNVcETdZdBuMpEs5YJLuEG4jZbFmCRkLSdRLmEKR3ELJwL",
  "key44": "2xPrCTLjNpt9VbFxrZkeohCqPJEBurF3iM7PYZj3Ei6erwBd1E6xdFDRw4DiiQmdhawtop7gFztXAx2JXDBr2JCE",
  "key45": "27MaWxjXZ47YxGBGN5Br5UcPVRaL7ofvcjbTTYuddqnN9Mu58T4uvH3Fb8ad33Y4w7Lu7FhKjS9e35VpzXwfJi4h",
  "key46": "46rRFFDq7mots7VVo4aRKcgN8ngS4MNNWjWTGKByD9dcDeAenXwpgcGP8276B24rnNF53h2xrQcNpCeBK3xzp1Sn",
  "key47": "2NyeoQfBN1rDcQzgJ69zyq6hF2n3Qb1ynanob1KjvRsBxsNxWhRC8oExQHMJgCJp8ekEVkkDyEwuEwEg7ZDDdtgu",
  "key48": "64wME16phNGG6yHeTrQ2y69jXSP7BiFpEyhNqySy7PwEcXVri3yzqiPkpMXHSziVADw572fCorJ1PTmuW3VAHjy9"
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
