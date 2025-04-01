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
    "3zbssXHKEb1qbXNgxGVX1W9ubQuesSh21P1Q5BuNPKbv4nGCPq7Ya5YBX2MMPr9ZReMkR4BRG2eH8EHgJbuXbvBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xw7pb48LWPufRzib86DBDTpWFEuWW2CMfBSHca2YYeK18gdzeSQe1NAMNkx5Q5pdwVmoRC6rahftAzE8ZkDWg1u",
  "key1": "3dScP4TrWnJV71JyhQe62TVEGhxcBq59FpUCwb5FBdyXtSJi3QSdGdr23ktF1sZ8Zp6NzGNQasJ8pGpZmG8RKnLn",
  "key2": "3BRbaP8QPD2B8z33utNtsrMjWKoUZGhbTj5QeqSRVVW2YxcmgcmBcBp3NyqQu9dED8QoizPa6pc2vE5dov1uLCJQ",
  "key3": "2VFLD4GLNH9qsHDaKKUV8scsvkaGWVwfHCLtBmj7U5bcxiGUrYenSC5EVxRvgspots7jbNhS4R1aGrnsrmJkWqrE",
  "key4": "FZucFF1LxdXK9SttD7Ksx2HiUPiRrayEBwA2pEfbMU96Rwkc2n3vG7TzETGC1FbjMephpoQB6wpppW6qL1NvBdF",
  "key5": "GDuuFcAzCTKxAAiQCe1jiB3NLNQgm1swAHLmovfnMc5osbsJCmNK8iUW37hw8fuh8CYcv66eU7K6YHuNukAdEpQ",
  "key6": "Kj7gQJniMkLY7NVoCioMHL1wvpo2fuMtYHWwMrCesexH3xk9VGMEMRYdnGjn9MeuxTrdnUvbU4XNk5ehZ3vt4Bu",
  "key7": "2i5DnHk9MPm4wBQGfGwMa1mxNJLeQihWmuyX4J9kPzcGvjTjgY5BFnDPV5FyDi8d7BiaayAeU2TgDLXs4P1fHL5T",
  "key8": "5YWezaN1RstvTAApL2BD2spTZeJmMGfMn5M7ehN9qBYw6c5B35wFRejGLYuCf29wbXQ2Y343TfYjpvSN4LLpvw9o",
  "key9": "AEXQaToUAcrCZE7UpQxzq7LahQbqJbEYV13HRVKXxDuHNaE9VjCyw7BDck1K7E1ZE2aJLRAe6ugnB4ETg4tmYFt",
  "key10": "52Ucv2QbP3MCkfnq29zpGvtshEqCvTRSJq3QdEePA3UsLcA6xgAawacgCmA7Wu7AaSxq7uQ5z2GWAxy1cXY35mWJ",
  "key11": "GYigXq8QvDQVp8tnTou8kEbtSZSuhnu2qeKXGC4hnV2UrBhHTXJ6kWdsaHsLtctBcqUPFjckfW3ycRubJhcJC6k",
  "key12": "27uGGp6qS9mNQh9YZATEaAmUnXFRDb8m2u1GaaedenqYANui2RQ5fnS6QNuu9XE7T7p9DeHBzKg9FrhgBnx7DoFG",
  "key13": "2sZJgCWE5FGRyqvKUD6b2bCniasVRWVqawggXbkucR2KerQ3cYxMFBKpBiz7tqnaK5Wuz74mVQpzUEHCAqstEcYG",
  "key14": "2jwJjp2ntUB4TP4JnPADV58UjGkZXv25RzcMqa6PAsFxQqZ1Vsc7PRSnGfvpfsjX2QvjxmSSrrWseRL7TjmJpwuT",
  "key15": "sxvg1aKtTovuihu1Y7a4Ewxx2KmBXswJWpWPHUiKiRGfmgbcGLhJAhNjnTkX6179CXzh5uPXAYuUoVwRYCorjQr",
  "key16": "5QAQvcnZfTXWQ7ZjmDzudZuGBXioW5Cw6WveXtHqmQWFEnbhzeDdvoi8XjF9hiuCQthAr4nKfgKr6ytY63Dd47Hm",
  "key17": "2xYd881GHbRKVRnTRdueprnCAdVBf8NgVD9nwx3iYxccYKK7ucrHFviFyvR9fcQbJiycbZxqm73BttoMax2qYuDa",
  "key18": "26o4KYMKWV5FtQaqTjTauj2maAbEK3uBJxUrDwVfnZQ3Bf1LJYNpFmwbhYxZsatwkhnR3aMnqxnvdEfR8TAh7xao",
  "key19": "3LoEo25tdPP6xVjZdGLMLPapJeh2b5qrduSuKmWaxdDCwbuNX43fFgr1GKH9EeNKY2EdNTEeY1om52PDnhwujNNx",
  "key20": "4Ws6c1q4ZBcRoYnqUPPnrHR6gXbVu19Q2UDr5ZPcmwpJ5oA1o4JELCaHt3RnVhVtR27SEQK2kaDH8Xj7GNpDVsfm",
  "key21": "5ZyVdGmviXwTJMFpwFfZk45A4FYfgYh2XUeNcLU1VuAu9QRxA3xPqKZYDmK1MGV4UGAAp7WVTq6Cd51JaDN1bzAZ",
  "key22": "5UJcaademeMjYwEt2y2iCS5Ye8LriVmZAe2XVvqsoEN6Da2WFhBfmfmk32Ji5iKjM3oD7VibeJVSbSQvD6fa1LNY",
  "key23": "62Qdn6yj8GfasLpraURnAs1cKL9MZGNG5L4Tnvx3GdHfkr3eWXQ2Qh8c7ybzypa8Ks9kqCCph2KFjDbpRuFMSjHd",
  "key24": "AK5f43jQsa41tL61PzW41ubWJF2F4pKbJMcMgm5pzPwi4xNvgv5s2bb8drRMQRsP6iSecmBRAiHEvhLK9r1B8bN",
  "key25": "251C29eAvFCBNhGgWLDjhBMjnCKYu4yS3Y47LN4XUcy427KhNZnkGBPX4As7u4Z3Cevc7dHAkTS6bBq9mbTkdHXb",
  "key26": "MKphCr7LdYKcMLaqnJYjqyKenVpcomnWnVcj6kbyibUZxm22rjFHiQLaMs5AMdPLD3BXJjvBL2hd3GLVg9vsMFo",
  "key27": "3ws52NFAMZ9ku2uF44DhKcxCj71vciFtUMqwNQQob53Qg6fHjMcZ2G86fJ3CviioMpr7yTWH4oGXsVzEab1Lwuq7",
  "key28": "67558XWduc4ehuJ7Vb2MWDk3TqaWF4vhpbmV9fedHCdSX8mQUhWq4bExBhRdGwTaBVh2CzbHfLitUHnXgiPBVkP9",
  "key29": "XJXRFETjAToZ9Ms6Fv6DWFLgdn2wpVhrBnh7ZUZ6WKPu1DLT6UZzwbsxZCGVmRLCCvzmwMWB8sCzKGZySzUUwAv",
  "key30": "2XVKk4PN7JgQ3CfXWNEFgx65apcYaWDrPwVJ5KTwoU9cu5XtMGVhYnSfMZnr1kHNxw1r3svhg292GDX2XJWHwUfu",
  "key31": "49Wg216WWFixJfkhaYEoHtGShnFgEeCYbcJd7UPSuraPHszywn68jTtbmrKo9zCQsk7r5eJaaUg6iNHkPXeBk7Rz",
  "key32": "4MiVKCbsYtramF2GYGyKZ8QLbJQkkpQSA7cyAnh2rAZGFb5pCuVnXCs49RmY5m4hC22YZuxjFsa494YPtmxoiywM",
  "key33": "2yXBSWGzF6G5p8nyBjnGCQHCvieNw2e5Wdz2ayYHDMbHwrGaaqgug2kihYxMW6czZoFHddAK7dfRJcx5PGbqzJGE",
  "key34": "2iTvcKjDirYgLoKt2MhVfdCk2zUwGAZQNxAg4gE2VVdQTmuaX5HoobsEbHXjS3ov8wvso8TkAqXfCsLCTkbMLYWo",
  "key35": "5RfJCo3C4B9wP1deTsJGYFjENefDJmNyWAhZGtcPjfBPcEW3Tw2TjnhiPxfkym7gBwm5qztLjbBdtFExXsKNkf7o",
  "key36": "4ayimZPc2eFCCxvGEZ711KsQDwJnXtQkueoDsQDqYEaEL9LQCBqrd7hrjpYvLCAHxNx3FaAC6x5PHpGTnHxvwUXz",
  "key37": "61KWuKeH4WkB7EMAX8VNCwcNiM55sgNVeCWUcsV6VnrEDSHCcwwAZaiMrrhGVMQcetgncJTiaoQ5e36ZNNkjwJ3E",
  "key38": "2x2WyvoyupBdWMp3fCg6sQD2kvbBwjdez1YbjACrr52yKTcm5ZrnsZQHoaLjFKx27DwDfQrxC7u5ahZsz3C65ukf",
  "key39": "2J2aWnuMw2ZzcBRozRXMHL2yRCLam87VNzAcjGXnWBgMDwpRCbPBntnTuPWDspxbW7zmJz5r8WFiLsm18YR3XLEp",
  "key40": "2LUmPaZasTLhm2qhVfmEiYpUM8hJg79239FFB48MBxX75bkyMomzaq35buR2hdhsJvEv22erj1QN5PuSWnPctHqB",
  "key41": "41vwsP21npbgBdkixSW9o3fHiKkfnvRgwpKHXZXNDSMbSBdmRZHvFF71M2uaHT5UEf1PscGpVrMCVSgsmVazf5Z5",
  "key42": "56zvueZvmUEjfSE3TQuAzWgXR7RoHaUoxr7RLjt4ShgSPPxb4MiLMqBdsC69xjgyWkFKLAZWZUtamBeLmeDRMA8h",
  "key43": "2bfj3MnFbNxgoJU5urvdyZBJwoMwx5J7aHjHFSKWxYRBw21F6n8k4CHraCum2UBhvQQ9dFSTwz1DV87Nqm5cf2LC",
  "key44": "84nhCqFJ51eEpbEqF9fKB6qsUNYwm6c7LG23XCvUTpPDrKeubg9UJy6Hb678NahbqWezp7yDSXpMEFM82AY8Q4w",
  "key45": "xA3rWZXoTnQyV5YU9bWVSre6P3AVQm7E3wqnD4VVu3k62H6vpwC3efFqr23oKp2Yofib19G5F4nHotVZqKLgAhu"
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
