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
    "3prXJ9Hizie1cYpLLaTsQNJyGUugcEfxi19SxgcjJavZ6H8deN3SFtQkhBNzxehvve9CRRSRr4G6YQcvAgYAXBbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGSXCQwsCeeuKfm48PpcUCm3c2Kgv777VeKaDqCnJxfxLoBF4npMZUS9AEoNH9FyKtkcQ11fmpCNzNryYww9Rrg",
  "key1": "5f73Lv7hL23pUw4x6qnaKdRzE4JgMbm5K188ua8cdKwCzbXiMj5DyFv1g2JKvJKZvwhc1AKkWniK1D1YzdtRDq5T",
  "key2": "2YK2BFadgWSjV52maJqsBGAR7btrBuE5bYUr8DEKFU7jjURZ4pZxAzU6o8sPuHTW28y4dNQrzFF6P9jUx4uEYjH8",
  "key3": "4pnUpvDHVarpm2n4oEUDmkBPbyVdsc3jYB8YTePGftWarUkfkAn8dG1AJzVBCGUeXY8xuAp71bcGoacFErBpDwcU",
  "key4": "2Hm8w5RVUL7n3rVAY6hr527JsdJCb7H5C71nrKe3DB2oAAUZjZcrWDXZNAJXkfmdX6c8114XU4FNwmehKGTeCnPg",
  "key5": "3hSiQiq3fZRBRXtJ5KdQgDHmtwpq55u9qACwwq7Yyn8SjrnPqq1SS1vnrSB9dGu3bR1WKcTuTfsakZtR5H4ZXe5a",
  "key6": "yPSvVA9wzu3Psg7bMuWaWDvUgifMDYTZpcDhF5Grd4fQoudETTEe39rSckA5WYYfXEiE6CpiMQ7phobfGX86b7L",
  "key7": "5hYswasNjoCZrJg7KgbQYRZ1d3xPrD8K7FVtPxCsJQ1eqWBNsgRDgxVeVWiQ934UNkJRNGYMeLZS2hBUuKMSJnJ",
  "key8": "2WDSVpETWmDkVUbNECeWVGj2bvU1V8DpUuvo1wHwepRe4EcdseseEQJYofBHeL3EXm2aZ6gXd46PzNcVt2kt6EL",
  "key9": "yWohqWhBGnZb4ov5SkAXKLFhXfD8pkJ4NfGsX6KY6P8gDm1gHLtw6zznZ9fA6Ue28DCoAPR3nGLrA9nPWtupnRG",
  "key10": "2xwSdXXhrrn6bxzTSx6CbookKrsnr3Nwfh3Fxesh9Y7m9dJtjEC8PKtnaWfGuwny2xwxw6Ak2d8qndnysccCPLow",
  "key11": "sNHV7ZAFsnkVfkMVfxEEQbw1qbj16mhRh4Su3pAYedcqkzcZpqUXUCUBfcxeHUWzmCocmckR7yCo6xSfz4cvrmf",
  "key12": "3utKrhuwPaXPWkZqM3WVBbxmuPsH9AoPysR3mNkvPdwUBZhwHb5brdfdGCN8XBhs2LtMWdphyoC72h1giBvbrkeK",
  "key13": "5cvBuPwhmQowZu8VU81Q5AHcopHZccPkhKqb1WewG6WMQ17TDnTW9bxERZfHeBoq2Dy5SxqmP3n4Jun92hDAewCb",
  "key14": "pECimgVv7qtKuuMDNy9ce3iRKWJrkjEJ3koYCXF9f8Gviwgx6z4XHYFgMGf3fENW9KznxcGHf6cdJGX3toKq5rt",
  "key15": "3GLY66PxCczcfc36wwBQ8PRVtqUigCmHJu6wvxKYEyBMndTZ5b3Rto6ZpAaSbyBzEuUHJN46Xu4L93p1V6G7Ewn2",
  "key16": "FxVWAAtHG4TWEiP3R4Zxngwy7BZszfnTkM97F8xd4YRu3kp3DDJoYNaPsNhHyeVXN5e3CdED8dZRJ5WtbWQ6hdG",
  "key17": "QJSzJ6XpvMYqxxiibjJipgRkzxmH4oMnESSWnTM8h3EhFX3CA29HrPbcf1ZQ5rUa8DyGZRiZMZs1BvSQjAd2yr6",
  "key18": "dH1Z69wb5ro7qVd2T4yaWt66UUBgH86PMcV2poGi1hkEBjLkX58vaVZAE6p6fsn4hbP38h8DmFTowLMn8A1VRkc",
  "key19": "2W6w8yaxXtQvQXYATNoRsYeVR4SV13ZMGakyYQ3ZDh3f2w3mfJBtxVEYRoWJdwPYuYmCVxR1Wk3Pr5hMqrRWGbZ8",
  "key20": "62fw3SSwx3EruGvxgyw3F5jHT1hdHhDJvSr5gxPW4skAyvFf6Jc93h83gr7DXVp78EX2jEh1QsKMeN88KBSaw3RP",
  "key21": "J19wjSCZtr8vusHaL8QUKVosqNcuytzDVeYRarDxjv51shQFixAv1xncLu8R3z9VwiwHyRH7d4fqwAyocvxvcaJ",
  "key22": "3h6mxtjyccLC2doYcu1JVeggr7ofgQ4yiGHZkoPsK1TyTKiDmWd5ZQGpzzQLU5z6rViHkbuStkwfob6jXgr9vu1i",
  "key23": "5arYjYcnDrSXscZM9CL6RD69ffhqqnk8GfhtbheJVWT3QohTfgLFbNQDqmotJhR62ZrHrBTQqYpJ77yctb9m97Ew",
  "key24": "3Mnqfj2TTc2BSnDCC6ApV6h5zPvBZnvkne5M4d1aqFbY3vBMrnykwyMLG8MKVsPR384LuFEmVXLSave8sNKKpLLH",
  "key25": "3XGo4SxE4HQxdTU3kMsCG3AT3ncpQ255UpkynAWP453DUBHWLutD3px5fwZ9JVnnArGEBQTLCSKaLdLnBhScMDBy",
  "key26": "5BxmnkGabr2xyFnUH2TsSWbQFajCYyNknjWQq4z3AS79p5TFPBWfDx4cv6W2kFaYTZJsWBC7Xt2kVo6UKn8B1PA",
  "key27": "4TL8wW6ComjzZLEkx33So19DirUKFaFB19ThwAsMDsN5dLQtsUFck6LTN7fABRdiBtmG9KX3MVq4oMZA9mR8DbNn",
  "key28": "5tsMgxLfsXTY93j6vce8stic676L5uUZsDYct9j7YLtYBrnFtmmoLtLvfBTL8CC45h9NFUDxBr288vutsYrYqUhy",
  "key29": "3agi3fsog9Qd7rmmamGTWd5vox9R6fQ6Aaag4Fwoox2VfXMHnKhAAJusry8owYN8btY8wh362xA4LkcT9LuQNaR3",
  "key30": "3ZLE2K6RYamCTKCMmyr4eM2opcJY8TqGrM1sxpTn3L8RDTv7YQEzp8pX8neZtHF4tKnej3baoLBAQQvZVRWvQQet",
  "key31": "66NH5gtv9k9kLbHLCnoT1W6A6EG1dFrMbZ7PrAwgFBX3LejijLZ3XcrkvDbzC8R1oSY4SrHkeqS1AoZi1vp7Mmo8",
  "key32": "dSa7h8Ri2Je1QKMMoH6oTt2SKAer8L58bE1PAUHw6DsXCCGG8edWbSJX151R4yFXgrxtb9SpeLb8WZ2ffjQpEMS",
  "key33": "FpcufHNYZ2w1WpMCfDRQTwfXwPSwKp7KE5UEN8GLjEFV1Sbmf3prXLzTayoVMjedRsGmrdjxPKfVMAEG8FrdjjC",
  "key34": "2R82WTopgjZvZyVjYFSHyRzwEscGceQgbCZWS1z9Tspa5jpFVyoJTCes4KvQijXgZNA2VUBpjoir9n5mbQyW2kJL",
  "key35": "2XHueyPXqJK3bPy8brAJrn44ckuFjLY9cfK58CBvFXaJaMroKsUQZg2JF5v4XEZL23SFqLrb8PRCr6AhnJVSQUT5",
  "key36": "5bsNvENchNydwAdymZHFfsZdS3kkfYP9BASvYfJnk6mfNHhELmk53KJTsrEWrcrg2sKg1fANHGgYk18DDeK9recA",
  "key37": "4qWKaZBJ7aUkmDkWZTeGhohBzY8LcfYoTctDsXeF9jS96gzyTEKU4cv4ePXpzYpLGVeNbt5ZaJWha4rGeHkcwDun",
  "key38": "5rLfXC9tfZnjVo1S4dsv1U6irA3FYPPEDdH4H8gY3K5FdJFCEo2JxWgM6fxUUTALJ8dExyk8Hn9unMeV4U3TLtuK",
  "key39": "3iht12F3m8Hpg1R3HiHhEqGrfRkS7tVvnYAoLCLGgvvwrhSnq51rmSEY8hvDseEs9EFykv95nprc73tsrY15fBTq",
  "key40": "5tnPm5KPGw9jEPKmWPaFNG1reLbj2259ZAe2ajNfRyRiM59K7e7J7hFme95sfKLwa8aArrkMK3DY9HnCxiWcgy8z",
  "key41": "ueY7VMqUu7E73TYwCBZBhvvaRqyAL28cw4dFHiD6PQCbMtpejsUkpYMWg2KTd4HDtfY3m5bhonKqAKBbqgRCvKp",
  "key42": "4F66CvhzcnbkrhR3k8krugjWzQD6fcihkbqhzAKuY3mPADwyMjSLpnM6dYmZxZ36nZ1WdXJa9Aj9HNhtehjYuGzb",
  "key43": "2sjp6ZpurYwWso4LiUuHQmDKWhwFMdtAxHQcqn3XLt75wUR65aqEBijM7eNa6VqSCBvmap4adqUmT4jjhwdJaAWX",
  "key44": "3JaVBqb175wcG7ZKPb5iyy2uvujTG41R7CoNQtHwZDLnKPW4DRbw9jbft5tnPKvEdtkiExc4M3FF1bkApSEj6obC",
  "key45": "4QekYbHeCMM7ECH6qfZWRXsdNzUJHdccrhGjo5CjAW3Mjm71zrTjvwPbB1TrCnT35aNGhBAUKJfgywUeb2AUfnpR",
  "key46": "2ncB1EGBiSLW7f1rz2RZW9y66E6DFb9szBXZbXte6qWzd484ahEKEnpkV8SLyVYDr4H7ZcgudHbCt73bx3THoNUK"
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
