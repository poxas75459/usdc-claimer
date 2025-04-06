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
    "5g5xDaPuBYDBXgGEMHJHMV2atF9rfEVYGL4ZKutjNt4a6jCmoS9u3HxSgknDnLyDuvmEVETMaqJ7jdAVxuPZhoSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SSe9ef1z6A8TN4PDG4m5Aqn8h2J2vPqHNURMwGECRnZ52aNnJaqG7croBcvaw4Z4EZQi937HfMKTZWoUCF4dwH",
  "key1": "5SztUCm3wtkfJYNHTo6D7KTBJ9t2qye7Rn4M8gv5t1nRijhFQVYtbGDKL3Vb3zJFNx3wgGEBWPsCsdgyVZDYJgDb",
  "key2": "3FnjcHGgvaRFwDmKKVfdi5o2yVeoqugBmMXtNLMZBXEAhH5xX4je9uhXJCJpAJDvS41XEcChpDQJNLDnDt58JUa7",
  "key3": "2wDFUxXTURipRXKEwfCVghKqWAgEKLkuZ8TYMRhq5pTQWwrVJNFY8FUuQT3Lv1HppfuZzZZKQF7VGZB6QKMZVNxc",
  "key4": "5PNhjLyuZPmFw8ZnGLpi56SN1xLqU9KkNbDmxvJC1rgNDcXaDVfeEPXEhPCkkoGfcTnQUqaX3WB4qUpz9w3goURK",
  "key5": "iLP7Hxo9zZABv73AJC9Zbuc7Xy2QHJ5Uj6UwgRSKH1Vo5RvhG4j4TRVFCbnb3CR38iNa5r9Z97M9w5aUFP31a4a",
  "key6": "31b6Wuf7Phh7PDKpbUHTPRMg9yV2WcJRnJQGMzJaUqzhPZNEwR29vfZsbbEJ2obAoLNNxys8FnY3EUmBookGkPcW",
  "key7": "NWeojH3KNiBx4XDjAiHbkWWvyf75XjghNkDiRYm3NCU2iTnsiU6euV3FhqrD2r7cFHeKxnSrdV5Ni1qTFiCvhUg",
  "key8": "4UPbCmNn7vaDmv6Vf6VYgqGjdwTmBjgegRaAY6QwLsmpC3Bt9NUEMDrSLrjJSa8hCfWU9xVfNWpSYucygBTGAq9i",
  "key9": "yQucgKZJfHGg3gfFpvk2jedvFvR34iuRYAxs2R8AUVPh4gRWvmjhfaUXaHiwp7EVWsbSeSyJMynRKkSxtU5QZFY",
  "key10": "3tZV29EWcM6MQoBdpswNEbcPtF6SyhAWsHnMDKXyiPX232cZ3t26taG9EUgSJNnS6qfZ3nVth2endr463osLWaPi",
  "key11": "4v1BxtxseR9BkB4CiifxPbnjsSDxuanAaAsNkFbQmuBQ5AvWYqk5QYbc681oGC7SqxsbZEGAFgb73goH33own4yY",
  "key12": "4KKjTcP6Ard11N3L4WjmX1KHHq359phaTtUbbf1EGi75dak8Syfqnb5a8i1rtBououiJC2NsroNdeh6DneYt3ZoC",
  "key13": "pL7aNDU715CRTFSGzU2vUmPrKZc5BSaZkyiJ7Vro1ZdyK9Q8B9LqpqXMdwyN6dFexxQpVrr58GypWhExB1isBg5",
  "key14": "4ivW2uw1wb1NhPmrmefNXrFLpnY4mSPxKXQQbNmFuuK7ybVKzpvPdaCZCCioXaQP7FE618eJ3M1k4wxyyhmTcvLe",
  "key15": "5kje9w1dDzjzw55cdXKZjgD4QXnjpPgnq2TA8DRwK7EiB2v1F9n5y1hoHjSwxcj9ie431kaBqzWPAyWvP3ttgKQD",
  "key16": "2LGopVEAKBf5iS1WBS4N5Et1xgDDUAFWXDYQznwtio3oEHYXUfeMh8rq3dG2DW1b2nnfweYFYYz7mrtP3FcxmJk2",
  "key17": "4FzoVDkhgmj8SvwvBjt3ZofS1F5F4YMZkUPz3ZxukLZimknYRRN58AdYYfJ7VeLG9wyRm98W1Axp7edTgE2DcXmv",
  "key18": "3b8rswHkjc8YntPrZcJgx49XTFvTP8iKwoxGKZgTsbGL8V7s2mMgwUBYStMdfLqHWdfcUAsfszp7rDgAuJz2w1oq",
  "key19": "GhwyBgXeye35LP85WP9azYndespgiEzJFfHQNxJVzwyFUWhh8SrCkK7ondmH8AQrT4TqGDaBaFD47eCTeDyMtgE",
  "key20": "4KftqW2CVmmJh8K9QnW7bTGGCWPh78J3AwLa2KF35N8sETYHPLeFygtJpi7ndKPLMS6JVaEABswfuhZp5jMRmGN9",
  "key21": "h7p8PP7FN9iLmHCdaqEtFDL4YgCrj1EjBPbHrTrx2eHhisL3CC5zMtuYxrEG1h9fWux8eftJrMrL9NudB9DH1Sc",
  "key22": "61hAXkh1D5BxrUwKiLTLqByTPcRArek52nAyLG58kqqFmcjCfdQfZUhzVfAZEE9RPtTfZHYeGqXz1cUztMfizLqu",
  "key23": "4hDMfG8Dms6LmUJiAF2Lt3XRGvnZ2f1FF5WFhGvqpVqXs5TggdcSit5UANzYz7CEWUe6EZfbj1zm32QQwVeHe1Ud",
  "key24": "58Ju9x716FwgAdTFxsH5mSaFTwZSQDwjMXFTXG3dBB8XfPvRq27PPuhq9z7fsEPBo1FuUqh2FRFWhAbUThjSJG4m",
  "key25": "3yjiZuyGM7wiTs8kg3919gZKZmRiRtbRVrfqkMScPxGHWymFC9Ks1tSeVLRYwZqz8i7MSwaqVCLp9csqZhCVmzwm",
  "key26": "2wXtC4Sbit9SLoy8JM9LYqP9LmpqfAMZymNs9DWTmEPp1Eq2rtKSZwiDFGebRSwYvtUqtcwBASwdhaDn1BZuYaUy",
  "key27": "2xPAYgh4jVp75N8buKSpw6fzksrcUi1hzTrPSMBUQwMNJPt9mhFVb2v4Tzanv7TsTwnuDi85KkiA4wSeqzS4oUwd",
  "key28": "2FrVuDWYcUw7f4KU8mwUg8QbWtNHVS7bnq5xcd8tinxvJSG8jUe27zB3pC8cntkD38JxkEtoAVLASVfLveAfpArH",
  "key29": "2RWXNgPPBvAR4t5Hm4caUzeEhY36BECvUnQUs5pN73r9g4tHd8f9avT9nw1RXwwT6wqYGM2yxechaxvRRbhZdEiD",
  "key30": "akKnmrrHEPoWD6wmh9gm2hD875ZyJy2w96VezrFNvNn3dEaEg6v1D4xiV8VkHQ38vZKT5erV9odQDA7Ni9Fvyax",
  "key31": "2FrPzwshz1so66XEGePUcfXUnqWf6GUJk4HWQaip2QRvKyMddyDiivL88nqipiiQZrnWAaLvf1q14AmyCVXWhiKJ",
  "key32": "2HAc6ZeNL6gSDvx3uoWDRuVTrSXiwtNm9r4kxm8bvwLsRafeiJ5RJtBcRsLVedmexH3kjrRNiqqpJyWBQ3PwMyyu",
  "key33": "4i9DjQ4mTjj16ZXJR38M9Ue8J2kqQ8vSB2t9v35rbcJuG7pK7fWCRq4JGJ2QSvyuQucNovowuvFCM4QsnmJULvJ3",
  "key34": "47ziWF2hxpHwTbqzzbZJkuEPtTdiaRQL1xx4WxwPG4QxWX8m4WkSZE527yX2DqMK7d2TKYGKjmQZCq9YTcctJaHP",
  "key35": "5qHF5rHk7uzFkutCRAw4ggK6G1qBJgRYa28zDBBBhSUnc91v1vk2hFF2EWu72LsqrAnRBuMaaa3VYExweSFPtxLH",
  "key36": "HdhV7yiuAwgQme1V6Ut1kmVNm9vJT2wm9t3kTum6FU3oNfTDEySkgkqJsd1FGjZwuxSABZdV5zCyeEhSe8ankrk",
  "key37": "5FPRwhm6YRZTQnN9v8ZcxQZCWEXpXht5FTz7m2Z9fTUDEubQtveZ6CUTCzvZuDhwsFTbR18e4FabESKB5PAzdN16",
  "key38": "5GY1ccA5z3o9ohVaLKZkYUJxTmnBwCMmAVUBn5njB7zUXC8hHHFDHAAebTcc99TKChV9iaB78EXgzDnsS1AmMbx9",
  "key39": "tRbzV9UYg5aNqbkBWmzv41Z2A15R2fxayENkzaGnFP2cTC4TU6e8UVCU1gf55osurmybGgzBMXBkHj47s5z3r1h",
  "key40": "wX45rwpvYVkKfp5YW3rgLCkMNHtJwmNqCq3bnbKVQqJU53aMXQtatHUHanraPBQ8VXFRGXG4wp7zGt8pzzPJivJ",
  "key41": "4afBXSPaqYTfyaw49mUZ6JvRJUcvCLawPcbEHtQSttvfSVsLCwy8RHaEkBx7d9ojbuanVFwLE1iC85odaTCED429",
  "key42": "5RXC13UTgVS8HbW4aJJ46VphG5tyuzgZM3P8Eya1W86NLVvhzJpgDHboHxLPG5jvyv7AD4gMxkiPrCQmMRutRB4Y",
  "key43": "5bQ1KNhQEoYyE1xfvKs41BWbFH53HmeaXXUf4QuA9CN4ivf9upbmXpdUTvaqHifHvdVLXVGRe8zufwVtDnJET8Di",
  "key44": "iKToqdE14eobA3u3FPAVxQcpysZYR4AWw3m6rPdwtGsdVbK3xERTbvHRA8GAoR37MCncjNarnHBgFgernjmNvGf",
  "key45": "2H6sAcLKbLP7KGnaiLbTGccM5iX63wzyeyUE7LgRypdUCF9n4AMHJjkQToU5W9tGQDJyfitQds5SJvni7PwPbhWW",
  "key46": "4YwJGLbCa5Nc4sLYywEHmWaNBNgbZzTcvj1ZiiWWfMeGJY5PFUc69DJ5Lb1iA2Uxe1xdftaGPwf1sT5kCd2hXM25",
  "key47": "5CR5bQ4VeUvLGqFdSmvGKLHj7mj1ETMwepXXGYrwezpYUbvroZiJxMZof3CNJKxt7bi5dPz129yEuKxNbp84PkdH",
  "key48": "5WGcMEej74MfVAm5AbdWiUrr7LY8D8nRAQxfCMo66BPJUMq5eiyZ5nKmmfxhhyCBEG9KjSqbebvw25vUvdDKGq7x",
  "key49": "2FA8hce94c6dRgkyBv76YG7JdrkWGbAyGy4AAWfTroEPnZnoLQqBxhvs9ktf3Y1jiZB7THKCnCFizLgNeRHhhwbr"
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
