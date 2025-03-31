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
    "4tNn9t6HqGwWkUVW8xyT1zwnPxMA5XAn3NKQ78YuxkSNdgkhavKeKgycR7pSz9EYoNv5Cn3yuCyMue9ggsZJih3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ydLV4cobxwPxmqBtXfrajUcAucXaCHjfvxtgdVpYbwSzGfxMTf5aT3knFz7aAwpH8WVDzazLz1VLcHAZxB1wjv",
  "key1": "5mKE5cMmbNkXGcGBRMD3JmxjG7qftwwxzor9czkN7yWSuFDoDkS4nRj1X92xV39yLSfg45mJezscr67T45xdoZmu",
  "key2": "3LUjTjBQBuFfgcLQTPTm1Bo16toczdcGdjpoYxyz4kD4jKbt66Fp1zaJ2Q3Jd2KRFPGPDamq1QYyC7powcpQTAqd",
  "key3": "3oQFNcFxGRY12dMG2KB5SNmZ4dX4gAQ2K1ssgqgfsxjaYJ3o3GqpaCGd2dwmxCyDPaHEAXQwhzYHjv7Sw84uCvTM",
  "key4": "4gyJH7qs2CW4rqMVHzaGcrSFBZGP6mkUdaQURBXWoNmu6RvuePsYr93RmLEXQejt7JEKevddx2jvBrB71nw1Hped",
  "key5": "5ra2zcNaGEpp8wAapFVA8ARqub1XDTsRGaTh3kUWs5HNTaQSYqF9HgNPLKVtQU4dDreu2MWiaV4rPvBkhoUMjh46",
  "key6": "4PJsUzZCmMi98kjG8wxWmEyaxtS7Uz6UeD7AgBktcEEcqAYU5yxmYFcxbzBMoZ5JWzScJzvprX8PHDXu2AmnAdKA",
  "key7": "3doc3DfH21aZpZvpAHiFTkpCP16Z8hhTkiHcdXM2Qg7EPBwSkycty3RZchn44HwYaifouav1vG1sZEDDzRRiz4r9",
  "key8": "39oE6hvZArcZWWmHskN8wgcSmZELn72dkyaWKV2SiW4ygtxUdGXPNfPKc7RTQGV11py2PqLyg25PNsfPYhkn8hsD",
  "key9": "3MiQ3RC9GgbbhmGyPpANgeRCV8LzJry94h5LpRzFf9V5k9ZfFtf2etd9ecE8b99gscLmRL7XtmzDML9CVEpwNKFj",
  "key10": "545MYxDi1xoQF3bojdJ8fqHP6o2jGedNMidq4LXHVLr93UYaftmuuFKoj2vE4Ld3QLsXwcHT9oXbYMqgqPYyenDh",
  "key11": "2fjx6Lkq4ao97Yggc7MVUHLk8HrpjLKFy21w2mk9iELVkPL1wpxYgktt2dDDMEfTzeV6R3hYFpojpKD1WoQKnGRd",
  "key12": "gLzSAa465YMzmjr4JcfXLHq1hjGGb4cmS5pAHPJY7XMoGuXng85DUiVfWUjhFHrKcDj8Nk8XF1ouPfQExKjugG5",
  "key13": "3gqydN466xoRZrZtxggBytv8RKYaeTwBKNCgH4EJ6FQM23oAgQPEZPM2waQjMu2VeNUDTnffdztpqUwkwWk8GuKF",
  "key14": "4RZ3KN4TT6jDBmFzKCGRUxRjRf5ycTHrBvUAxKUnRR3uVZ5TmjYyV2pKAzaiZUvovLERf2NrKyZyj7hUpNBs9E9Z",
  "key15": "3mEjYhigmmwLFoGJGJxt3jxMZu4kGs83ueuB2vAbfD1bwWmPzPgMPdddF81qENGM6oRDPduP1tgQb9yBGLEvCbUV",
  "key16": "4TppVZMHc6p21MkjPiLPYQtLhhMV4a23MEs4yV7XJpQ7jH7gYEMEDH67r56d7rYfrUV5tUkS1Sxwgo8Fmgsz1qKc",
  "key17": "52wngGDSzNhGvT7QTYaAqwnbeZVcnFHMZs2oa2rSR3PydSgmnynWKw3A35k5a4kmhuDRKZQk2jMpYSCvhMcSiZkq",
  "key18": "4UCxt7YMHFgBYujMHo94ABSZER73vGUqkxFtbFSuSeuUnMW76h2emuSjEXMGFedv9g1NyrBv7MNAcbuBjEwnFnpT",
  "key19": "49NuoBrPusgTBoxNneFvDRveyVyf7enrnmUKxMymjdiN1P7XGhNifS23Qv1Swu1NTWxxFbVjctmovKrPXEWuFTCK",
  "key20": "4tSSVQCnAug9kDBysQT33xPp4USUP5bF1rjPwcqGUoaxrg3ENFE8YYqwzg2SjUuvN5k2iqQsJdgB8jt6xRfw9qN1",
  "key21": "5NQA2izkdy3HkAgcwYkhpFBkGrmzoijC582z72TPKDa1hiEqKWYnLDRyFahQMr8V7Cf2973bm578V31YKYjAh83v",
  "key22": "4niWwr51mGTHm55CYnm3wXqhAnRThh7z2WWT55d4RrDeyw1eNbMVvcptfdkmhYNLaTQq56BN8fzTciyBxPrcbYKv",
  "key23": "2dvK2pVJMAm2dwzLQnV7BdWZS77vHTRJ84GyvyQZYYNdba8HwFCSQ7QnULvhS2kHoLtDdJjue6wPbpWopHhusYuP",
  "key24": "4jLrEVsouZyTVfco9ukxBv4suFwYqJBDYo7FvD7YztYrk9GGSzrjZTAK13oAQkwcsU9zTC6p9uFZgF7ZUW45WCJo",
  "key25": "53MgczsjYCEZT7XqJBK7k3emCvzdxFxaKw8gr89ZbVfmBqxTSxDAPa3eXwHgLwVRBFLYJVcFnRrqjFPQ4LGfcfUG",
  "key26": "JHrY1xAVFtzdtA5FD1duN85U4Whtp7u9Qvr9cDy3iJSFAZRCpr4Tw3BPcLQSSb8o8D8jwJo6AapLTN66wqC4TuE",
  "key27": "iQb1cfCscVBiu7AbVL2fHvvAeUHrBY4y5HPEPqNtrCqniJ2t8GGiZubwUtosoNpbgLMhHN8tRgGVemkg9P5aKDD",
  "key28": "4KLyNuSPAPYcrQZpUi4qzQnSZAK4EdWzbc6QEHikf3HrE1iYsYuutcJ8g6TgH6wdSYbPNkNfnKBUvPMdzUg8sHUV",
  "key29": "5NueM2z7EetDhNHvPd4ZKKFzJF1voTwajTqJPdnW5785sWSutf7vLPLr9oHpbt84mY38R5Pp8Qu8RS56SKsgTydo",
  "key30": "2aEd72TzX64mt1RZebkDAxPH6biHFtv1kLX885yhEH9DSSdZRPk2DNmyFmET9DtTqmemwxDZGNCaXScfmQmDhAtZ",
  "key31": "3QdC8BZnTXSaSSUVrp844bnvXuJpFJTLXJQf93V3eG5DDD5oE5oLu48rXrjHHsYW9yPJsETp7GboZVQTj9NeWyfD",
  "key32": "4TfH3jK497UYNGbNz1jfyPWKEDMtx8orCzG4hQWaYrfDVCZ7mBi8JkXEqC96wmNQm28TbXAQCSumgGNRVQiQ5LWJ",
  "key33": "5KoFi3JQFSFQ6Ar8VABLN6NQjhW14MXKnvQgPYmbGjYoXaNKDAwcLoMPnX8L8G68eE9aqh2e6FieZkfCZmdpTayS",
  "key34": "2xiHYZrcBHjyHgycwsU8ruTzuGGDgMsPXSV39QLUHqxJE5Q4MQFJnugBgFkApsHS42eY2KizwaLD2ckvGvfaw2Td",
  "key35": "27Qv7ixnU7BrLsdDXnryGvrtApCAAyQ4Yv8PNtbbb1Tu9vvUtEBcz3wi3b2JZsg5BUk8UCC83BW6TbvZXygwCdtH",
  "key36": "2Fxo2uqgLbCSppqoq3jSNtbmFH1QewbAiYrCbEp2bRpTzcEww9PjEbiD6H2PD9pvdCysqhczxMVfYuofFnRbYQTQ",
  "key37": "4hkJc6HCzxD3H1D6zt3qvRzP8fxd62QrdHRXNEqCYSWeTAm2kqsAKBVeqJEYwiY6cJFBbz1HHSEEvL9d7b183oiE",
  "key38": "4gg6UBrvAAQc2ZFWFkgaZyDbM5MCRGgwPmosmk12AKdsc3ifeMewTSbgR6Uugd2vi8ztXoZJ3oWCySC9vg29c4xg",
  "key39": "3nF3wEAzW3kDSvwssdQtUxCs8L7vGJSiKoFHbyb8iURnXRKhPVY8muN64FTvMLCUVqUNRahbjiXqxz89W1fdttre",
  "key40": "qrdx2Qtke2Q58zat4WqUX1f71H4HA8qigQWWkeH77TyzXjuoUTn9XiwbbYFdAqjC5w9TvWZu1SL1zqvP67zutZR",
  "key41": "3s8egr2oqhZX72YqpfngBFsUf5pBNVkHKvuYgH3MEeG8zu2wSjsNgMiU83Ts9tSqGiiFi4jqfwg37vznBioN16Ng",
  "key42": "HaFbobL78835ruKv1cap9MqoYXy8fypUewP3d6tUYAefr9HmjnjvMGFc1QmWFWG4aPhoeih7cSfK5MDRnTNkwdz",
  "key43": "3DwqfBE2c1XQcLCb6KE2M6uXkCb41AkH4TCcHcYMYkuyrqsUzM5RiQeskZwCatudtgYnZhTdwgzH44HAnJX6mqiB",
  "key44": "4NxSjT1dkdp3SUT2JMnSZSQcC52iyoS8XkU1m25XYGMe3fALAXJQmYcMgfWFQmSG3oo8WC7MFzU9iiVynwb6EFKm",
  "key45": "4ooggZXCebHB5ATmweYw4YJoppxEXpHw2AnDuoovdJhPZ4KzaHfX9nDRejPmx5qs1qV1LYTFTZmu7CkEaJ29RWsL",
  "key46": "25qLNrGTWf1J7Zy2x7uTosyrT6iEz2hq4ufGh5VvAYht4f9bahFNTVgJJ2Zw4aySCvCRhHPUXGqDk8XQo7DACBBh",
  "key47": "2HNcXWVpQNaA7EXwqTrYGbRBWMKjhYX7vRo2AzVn2fuqpWBEbBGkBhynZVdX7xjXy3fatUzYybZn5erTjs5XhKq"
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
