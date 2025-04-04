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
    "3aFUSF1YsfkyrTbWvgJ6EUXJheJURSYVLShZHnAb7wcxSDs5DqUNrjAS6LXUPTFzMprQBaV3ZxJDCkdDQ46NFF8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4od9XbY6zetg4m9hpXx4LkaXScQRgDrBBzwg3UbBqNxpdHG9eW6C6dHhKX7Tha8xDiNhvj1jsvQNhKUkHpcuzKeT",
  "key1": "4hTirDRgoKyimHnmyEx481zKX1Q5oz1HWG3sB8pTQhCSHLuB6zzc4cZDayu6GfusQkVWBnozvkrQjppMyCMcUeez",
  "key2": "3RyfKmJELq9zDgRg1EqhvuCz9nzYQ5CiLsKW2yjUuzzKZM9pL9L9rZWRSEpWZnrKzixM3G9o3QeTgeBdz8uHMNJb",
  "key3": "4Ggfktv5ofxeuYZLHXtNyjbXWH26KzCEXfN5Tnw8vBamhm87kKYBx4rTwWc6mM8GR8PsXBMR93CuzTUq5Jhxncw9",
  "key4": "MuTvyKxwns1UJer2xWR1wwH3q3Lsjr9Xcyd8EbqmJc65BMbtS1QxFpTxyuSxhg64z7P3JY46YEQRxmdQh8aeowX",
  "key5": "492P8J4ideTSdXcWErd6rfd4pGRephxukPymqTMEpqHh16KDmu4x9i6mHsHuvqKPeNR1iYGAAhaeLfpC3CkZ4yq6",
  "key6": "SbUiaQveXcDk6jL6rPzHdsJLHHrxUGxJUZvJjCMkHwZSeXwottu6pQ4xamRsxV6pStLYVGC68FQ5DrbndGbDMRk",
  "key7": "3UdSUthv5GMLVyRsyFNjjNjGzRA59iVhssCpFGMWDBLQcVskgbVSHVyuMvPukZng3z9h9gCCXWgNXG29td1Fzeow",
  "key8": "3k77NsN1vmiDWyTVpRjrSx7x9u4i8dR47xuVBaR7tFXoFMqBkbKpUPYs6WrhMMjfT2RT2Um4GHe4yYjHfrNK7iky",
  "key9": "3Y8PBuv7AyTrz3iTM9zUYPe8MbDWqqA3YhDDikmBZnDC6u6E35r2hw8qvctG686RyuBgBiKAisEh2XF8UtHGXgMM",
  "key10": "4iDFycmek8dQaEBmHUL9cwQ3orFXyWqJqjqo2k4dPNTqN5DD321DN2oZhsYMGpyjJUkitNEeftW7NNyYHE2wwSg",
  "key11": "4V9LzZQ7vDtrinMitSQuBjKhchpvQkf9qzXeBuNjMoVvTTsjbYegCTntG9zDVmNayFaAW7gtxP1fZkpr38NLVGFL",
  "key12": "2GrTBH3eNg8VBacXtT6vYWGk7rLFht3qtGFZqD2t9rDi6FjWr3JCUKw5ciUhj8Bb1uGe6An7vm3CcEU3WAXERK7f",
  "key13": "FR4PeKMbS5k9oYDtBvHhw7MaGJZvmSDUMqZ5JWqAQ6hrEQ23aiJ4HBvFNaRavsBLiAL6ByGFgAST9TPEffqUn2y",
  "key14": "3rrSqHA4xJVHoGhbCZd4bN3f69ehB2B2cudbKSoD6GsyWxeQTFF5aecJa9oeqm7FJBQoSKry8JB24jq1MCM4dzzf",
  "key15": "3Jjiw2REc8ih5iutkt6YgCkS2qGVrSbbtC4AzwR8EbzCcwM9UH2dus1Jxs9SjL1wSWapLkW7PAtssxSfFk6YA8VF",
  "key16": "JbYSPUqBG1mAUaTbkD4dskagNZLkZ6jwAf5YoXYBkTwcX2C7x5NLcp5SNgg3XksRVocaZ1m9HRK37wvH9T1t26B",
  "key17": "RcmBhowPP2Fzr7kxgYPzcXNzbjwYHbKCJB8Po7LFuhVpTu3hdhLB5dExpiBvU72EFpbVSchkZScMcypJXCnxE79",
  "key18": "2NsmRJ1QWrzsyHF8fL3MQAHHDmLENywpn1ycYmaMfUXfZz1zybGN94Dwjj7ev2osXwUNrA447DS4eVGenJ8zv1Qv",
  "key19": "4PpFvuJPfkcBjpB2u7DEkHhncS9BH6ximHgFThAMHSiwHrK3txYswgBToDJxzifSinY2D2sh1H7GPSz62e2nfpVt",
  "key20": "3L3KXxzCzW4qDLfMCALdDYGbBZbt4DEs1npcTspWB3S9mrDCtNS513eFCpKnMuscpYDmUXEjHwnoPyxcGR6Fm3zj",
  "key21": "4eQ779djGmmbER1tbTup8MfwCvd2r9rPpaXa1j6eu1iFjbneYvDLBHMcTJJBvjytFGN3t2MtWzmDvNAqiQATTjkg",
  "key22": "uXVZrwgkueFfu3R1NC3FukZEHZB7axZKkaRd7yqqWSE2WsjS3nrz9Uyp2J2oBMVo57TBoJ5ajMLZZXCqbLhH7MT",
  "key23": "4FGTAeD2awV6h2QQfpSoPWbi71vTLePZsszxKrzcSYWeXZr8ajnhGD11VBT4UwYQbuqK5pntwbVNyMi8yybuR6f6",
  "key24": "4i8zndDavSgv7trDHQ64pxxLF4WGwSv4H2K7JWBygksdAcRiU5UQ7udaTUkV8w2u7bRYtXXvdThvXuG1DPYB81QS",
  "key25": "5m3Y15DzFouPstLm2g7BNosJNazGArqQAvJdRGXqQs5LfrGGAmAoZ1m7iZgDo9phGbNyroetMkDPGTeLZVV3xn8w",
  "key26": "e2mSqShJqdQ6t5bwcPDiY17Z1N17RnQFV3uXsKb1vgQrgkdG1yaLZXR255VYiPfoW43ShPptTVrJBDcFdtsyC5r",
  "key27": "5P1VcMGtXD1pFgQXhTecDrfHNWSEucjxcT6vjoMcLZHYAfxJYny8ETL1gk3ASk26vW5gUpZheP7ZcC7pYekgQyLL",
  "key28": "qhWUMUrd28oYfLC4XK1xe2KSAoFd2TsoHerhpqqZAF9TNzLcrJjMAA4KWowHh4HhypTA2Urcj8pNoePjBf29Qwm",
  "key29": "5TCRS45JEJZEKNbJy3smLE2A5KytoDs8t3T8W6redeQaMAL1sNZM6nutXVTPieL4WJ1CENY7ZgaKvZdXAnhuuPQ4",
  "key30": "4cuM9paUwB5UGdPUXe3t9Riuj7tZ5Qkg7VngsBwP3ReGyU5Z56euPAx8GEvm7jFxUzPkXfGxiZRCu2ybSvYfdU7V",
  "key31": "42VR8Ru4fVJFcHQ1q3HjJ12QYQrDkqVLRGh83njiLqgkvNUEoA2sUCoQes6aoSY2cm2NLWmZKwsWj3Q1CZjtv8J9",
  "key32": "65mhcU3axcLA6jEDApHoncTxtctcrWTJ9oyzVGJP6MuFPevqWQ2nnzyqiqpRAB431d4eKmKGnQyrquApZzaJjYhs",
  "key33": "TzbBLfLWYBDpi8LkkjcTHcecBTPYQUHhFcBuuqg5CUFZDJFm5DMrMtJNgb28kkcj1yqc1z4jh6GL2VNQ1Q2tDq4",
  "key34": "bdoc7DUdYHTKtW1whmYQa9XunKGmRvVGbi8W6S9ynB8osGSffLyYc3bGC4Rpg4PDUJCc8tsjQAms261Bnsi5YHB",
  "key35": "3hcCkwwSsFpwTvrGFhQurxPMFWUvtW4hZSag1wo4bCRbbteFcuKNzKMdQYcfFobeCLhtU16d25rKxAoy9kRvAgWQ",
  "key36": "2c2ZdKu4bwtuNgwkHmLqSL9qsjZL7JdhGKocwjY8mbbDJPSzd2vRziKAv9jp5YoCzsa5RNqGfgM89pAXWa8YyMXY",
  "key37": "zLD6J1Vu2y28WHN7if3NHe4jfJ8VPsJLpQd2PcADGAyuVLMHpzkjXWynpFpmbjU5Y6EmSM35ANsTZMJm4cjpLbq",
  "key38": "3C7LTnCfdX6UCsnPUvfavydrMuYsUZt13kz5eZGnTPwust7pT6arChJ66ShLEkmVE6SpyWwxVz3EwndCm1gmdbt2"
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
