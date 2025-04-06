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
    "2cA8s5xvMAkDsDAY32MRQCX8pApCP33GXN9fdHogPBLaaG1z29k9aiDufGEJrJb45K9MskfsCACoZ6EPrVBQ2NRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNnEM2aFZJHiMDRszkAyMbbJ1cifzDLzihhBZfPy26KiL8TPgzt7AgCuHureHFCGRcAATchnpTaVidJVDFbR8mF",
  "key1": "2grTM79M3JRVR9G1PD3hWwpKjpPsmr9tMXUZzQVKVRK9APwSoDt9qTot21FsctCLiqKzsaQU5bvdVofX64yk7Wor",
  "key2": "4Hpe3D3KPoABTuHDSXrrGCbiTExCSH5jgczaWoaTv9G8zkVTqD5qDzHMwrbphz58EjMLeuPqX2NNZLwEZWfHKuuQ",
  "key3": "oiHqsSjxvDqhvA8wDeYCTpftquiBm8HoqwA2XJqeSqM4AYiB6B8cQ2HCeSMGBDUaSdgKzEwPLrbWdsaoMtVn9ae",
  "key4": "34LmcD4hGWD1DEerFWDxuwq6z3StmvrhmhyFNc68DMEk9FRHd4awG98gdmSAg1oeWS4Gvk1y3ewy3SwUyRZfvnBa",
  "key5": "4NWV16iyyyK9pLvMT4E2rnXXr5yjNoj9RuydWAfZhqrVAeqACQxJyf2Z6X8CzHRaGgUyPbZtJBVk1bpwZqD3vmtb",
  "key6": "5HR7BsBZyLYpybjE4Qnc1nkV5CgiC4LgpxUhAUt1T6h4yiukNZTb4DFshmtj668VUEguxqsBBnyBiDBQZpv39cCk",
  "key7": "2L4GAWVj4FFWGZMWvZoa99SeFgM1UsA2bJjKgJESoWWni48RGJvniFYaQ5e569DFuiUjPPdRzxAjkpAD2pciDobv",
  "key8": "D4pCZVDdykhdjXPzub6YzkvmKPXfWPgUgz7a43ANxqW7brPhy3g1KwMyeon3H8SeCiVaix6ySKiovvSrSTJ6RnZ",
  "key9": "yz66Rn1VxTvG6aNuo4KcQw7WDk6HSVc2nke8q1NSNBERjJujxvQXM5acQXMLmvL6SRKHrMtRpcFEut2FLcwfJXb",
  "key10": "4xh7rFRPsTrLP2YP5ECRh5dDxR8ygftaNAX4E1ZNJJ17z3wsvxrJptQqCUAZcDhQBUgtzoRrHSEhAvuNwnxjnWm5",
  "key11": "3p3Ldbo91kj3ZTczFrUMiN83JJhDFrvA9xaEHkZysjMSrebG7CRFLkiPHy68XhXtH9wKbDHwijcrZ9Anwp2YKvxW",
  "key12": "qPpJLupot9wA2wJV5hEBrXAQUtYskqZPTUJf9bb6H6mXLMqwoPGCn4FcsF2BAde2s8EwJvg7dQyG7kmHJpkX7by",
  "key13": "dpubpFw96KFKz8a8RQqghmPThpNRMDicmJ3GDZ5LaKUbea627YWZEhMzWir4yKuJjGGUKoXAoyiQNG31aTjsHqr",
  "key14": "2uBGUBjYkzvHXiHEg17GzH8KanjigYXVhmZ9eW1N4JRwwAB2NZBP886iPHjPJCPgsFLopxsg3fbut4xBqDhEL52p",
  "key15": "5W4z5vfur4Np7aW9NWRv5UirknpgMxJC5D7wsnMCJuExx1XmykicrPdTH5ieaZzyqVgzYcePvWtKhj4uthPW9Wid",
  "key16": "51p4pKip6HarQ7S9e9NtFtrRZHkyFg1m9HcBxsACws5sCUhogEGad7uU8VHtY6ZdVGn1mU2qZdwzRneuXW5XBHes",
  "key17": "2xTs6GPzru4JwfPFGaLz8CJS7xxvtreUCxztefBmoG2DWRMqDJ3tP3mpqGJax7JFPui6zPP684zSzUPJxjMUtCtq",
  "key18": "ucXka8N9RMYG9TEm9DXU3PevMDjNurDjpzGBW8Hz8aPnY9S1WWRmLdZc3YyfWwC1Nrozcv7AmD6zkDwTDsnrNDx",
  "key19": "4jhokLaMLEQUD8vtP9HCZYTQ2HXzY1EGgGT9PRF5ppaP9XybnSi6QvzwY9PyvLA27VigMWi27sAgKCppG9mW1Taz",
  "key20": "zyR7tS2gYB6huLAAxqb4wytUobbkyFQpRoy4XmBWKTGa3mfHMnA7HsXHSfnNgpwLxYHEwiQrBmYxxKnEGdfdvkK",
  "key21": "3TvnuJPa5zathjtuEqDvBddxRjDUtYG93bfiF7VanytZy2aH9WDwtBaNYVppbVP2SMqbHsLEKGdqqE6Qsx22oZGw",
  "key22": "pUzPRPqc9yDpVxCdK68oLA2WiodC2aH837EaTtyJ78iLrrKepq6n8HXD8v3tUAifcyAFJBpVGhj5SukfNDQbHeQ",
  "key23": "3vZ7kUhBh8ZtytMvfYtbyD28tCPsy29t3E3jefGts2izDJPzV1rv8ibgpaCrv6xGF7Pz9nqTmKxJzkDtkWdgZbsr",
  "key24": "2BCDn3VSX3RijnL8yxrC52sPknwWNg8MhALjA5J2sZTX1si46w4WZ5Cwf4EheGysMGHwswtFcFpxEHTCx8dKMJip",
  "key25": "2BUQuDRvWE7S2TgNNRWTAbafC4t1phtAzh6QhreQKACp7sAm3HEZjuqJE4X4Qptsg7ttQbHEfyZ59xc5p8LsdKwq",
  "key26": "hBK8dwuWkquPZ7cYJ4EMLoPPgCRo1c1WCJSC3GqdRXm9a5RjPhQSEx36ERMXjcajemNXvy4LXCYg3KuhDHNJNhD",
  "key27": "NBRP8334oapgHz4nMNukdEVHvMK1VYxvyywGWvEhfUGeT2ZLBNrbxhXe2keBw1RtgZUKQr5djkze7PpAdWk2xRS",
  "key28": "US8fuRiFmdb313sDMA88BQGHzKarVeGtPfjEaWfQV3H9figrMq6VdZaFQYrGJfeozbqbxasG4EWFYH2U3Pkv2P5",
  "key29": "cd93wiVm1BvWtyqDzdE7pebUeFaE7pPTEqdjzUjdGn8PGoHNQNkcD8AdFNHfGFHmZeQiHsAjetqZtCaQQchooVk",
  "key30": "5Y2GWozuiU3HMJPx4cAV3b6pi3ZhS8QRYcAYAXBfLth7AuzgrxdbYB541tajq9n6U3FcQJD7inA4rqgmsbutSd7e",
  "key31": "5nMXzF1iCmKQRK95fEEqsg2vJVzL1PNthKcBivxzzEM8TCebbN294uxgS7g4qN2SPZWRMLNWqGR7TELuevJbUhum",
  "key32": "4ZhRZN4XfKMKZaJ6xrZYZ7faZpLvi8rHjbGpicCRsscxExVbS9EVsG7GYQmixXvgGMYvpcob3a1AZiYyLLhrxr4v",
  "key33": "5b5C5wuWNLsWbSUBANBiVjWDQT3rzGrBaPT5WBgP5nuBkTWEWXmvm7pDmq7UGWrpEprU51aH3tDUUGAmSv4wMto1",
  "key34": "4sUmBNMWcio1nEf6ndFCKxFpBXaj8tEVWj2u8j2gGNY5FDVdtp4dswZTRoVybLZPihcxoWePnqVd2fRrB3uQrRi1",
  "key35": "3WRZpEwmZY7obktiFEskR78iUD4hMHJ9d8LvvcEHwSBtREfsBenTMJn99bHVyh52FkRetnRNt9VTSqfTwbHnkZzM",
  "key36": "98qL8Bg5cTsrZFqB5FicoFCmXmJacsmVgk89XQ6FyzwZcYdZNYpd1iZdE6ctUyXZLUvSr9NiRvdux8Lvy9L2bkm",
  "key37": "4e4ZWZ4VvbVvhh6hKuD18skTanPmNNmwY1Ti8YvGPBmLUFefueuqBF8bL1bgpkQFCdd3KdFRj4kvbwjaRpYyNfvc"
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
