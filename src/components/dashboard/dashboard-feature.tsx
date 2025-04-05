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
    "FYr1dQRxQZn1m2KyzrjKtkjDvh6GHcbo29aF7oxb4hmgmkNeFxMx77afV8kvjPhGqgyKGJe1tYFxkTQdNaMEEzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44eo94kvKsr2MbwyvnKQoaPJwgPAXm6hHWPBhwWxMA7xu7HRgyJMrSD8bwBGQ2oPyrVhv7KF7frvAoBsV6oHoDg2",
  "key1": "51577Q4y9gNjUisToKGNgze4UJB5fq5k8q9oSU1EK1Ay68dMWhDDBt6sNwvtBZun3xr4ueK1kp2KjLNyko5DPSPj",
  "key2": "5qTpoXSsKdrrbz2MsYqdG478UGjut9hZVvwswx6sVq51BqmrUBk8c2MXDFZiYd9XKgBS6p7TwML6MhRZwgRHSw3f",
  "key3": "3oSD6sHnCn9tKKsqksw81fLhoHV9u6FVxw59E6w4EJanzgKehi4tDPCYvfu34rnjtRot2nTksrcqBkHiva57Wc8b",
  "key4": "FP9mFqyVJDfbB86CE7WfhGy6WSNHsd9nXQSbmwEoU33DgFPukwp1egpqV1emwcovWid22wnasNuKz6uF1fwhxMA",
  "key5": "4XsQg1a22WS5XbvB5zhe7qTKKEZx85i49bddJYLv1Siopdx1tHS9jGdg6mN3ZPajcYnC7SEUX2vKM2VsVxuYiue9",
  "key6": "3b48W19RCk77qWxWNnLRgJVHjhB8YSc5bUQxzmEtWtQkdm98qU8rhyo7ELoodY3WcVp241y8LxtVqKTaqVqwVebv",
  "key7": "363fzX2XQMGHuMQ1owod7iWkvQ1VasXeko2WDonuNx9S944HuUB2cZ1nDacGSUm6ZTLguGGS7PMqTvYnP6qa8ep8",
  "key8": "3vrH9pHZ6w417SP6FxaA3M2ThcjFL2kXUorqgejwrFkkBWbXK1Am25Bo6Nrc7AEEyR8hBqkmGZpBMPdTPqVw1Afb",
  "key9": "PdfZYoG9FXTaPGUeURdvWVxC8b36gcECmrBJ1JKcrPArNEyQKTtozqtCqcbbR5x4SdAyWizsqB6nqtuevpMeqTp",
  "key10": "4f2SgcE3DdRg9EWRka7519uNrn41ySauwsaWq1LMjKgny5QobBNenioUp5vU3bGBkNyMmiabhhYXA82TCchkGa9L",
  "key11": "2B358TEvNLRmJogfQ1tfHTb6y3Ag8V9aJrtFGXPkSYcZfJYPxKmgnCffCYsvqGPhSFrDTaJUxFxtDcBRvm64ESSd",
  "key12": "52WgAU6BU6RmwDDnm8VrD58w6G2VoEn3u8NmpBw3pUQ8vwzEEWUBm12r5kDGeLWnAxwkrpQJWawknm1hPHmJNKgz",
  "key13": "xDCtwyz2riuJb8RPDuQ8xsWxhk2QDpa8L7KdritCEb7sUBaLq7GQtkAJbwNXGnpgWZxfdFpg1sqih1RUrdh2xP2",
  "key14": "56mMXfGMGrExdriD1Azp3ymvzrJEhDzUqAPoMUgCCiK2pJnvhukoPpXAA1E57Xwf7YBhCte4ZoYcsZQKZ5bUDB97",
  "key15": "UPERHZPgpZszZnZCueUpuR5hYYHSE3WzFVtATYzG5scir888r2z5k426358ksgecgQuK7amXkwHYGYyUDr1TJcF",
  "key16": "4eKpiojKsPcWQZfDLyRGgahmeXonYsM4TVG8CgnAvw2V2hAAsX8nA4EdN4VQx15d57MXSWKRrWmbbvo9o3djCv5P",
  "key17": "4fXAcTudXAzfRkdBw2KB2c9vNSLrb1SLp1gfUkffcX1fWQCNuy7Mi4HYks75WSZ8wSk4ireuHWhqhoTi5sxZuhbs",
  "key18": "2cWraExNazEQxrmkTYDh6WgUugJNRsz4cCWtHS5FM7DgLGh6N4FPMcmeAWYpQKL4FjTTZLFueNtGsKDSyyjq5r3o",
  "key19": "3FLtjGoiK6e9yHn9UfFruauNrvpx46C2aizKJRGLdeuAs8vYY18vaDoaa1k3KPzDeBTLhvvR1EndzAYjByDby489",
  "key20": "5EKfrz68oky4nRRKaWeGsDWQmHJoPdo1WpnR27hCPs77gaXKwf2PzqoEqQKMi5WvJrZgaDaLCUPhkHN4b6E9kVqX",
  "key21": "2x8GhNvkPGkpvFJhW3zcusByLdz5pCujWGRsGrzpczPz7P9pxCLjmK1azr8AzgofeGTzhoXMJckFxjWbrtuU4dCX",
  "key22": "2X6ZCnL952HDSV1E3gy56dDcqoanM2MDaYi4Z876U9i4JGeseEJRihbJyyXpavgUyd4TSgjXsTPp3ioZFr6nVaBR",
  "key23": "5LLkQ3Ht5S2HLzXbUFZ4CvS1cjhJfCqTFBowX33As6jhRpSGEFuCpSUmY5mkQi2mibHx76GN9QxhAwjrYhy7K8wG",
  "key24": "62ZKKF2mGdju8oBEdEkB6ha1UE7RLWqoTEDmRoeZSj1CPMnxcXhCPdKvG6MEJmSQ7QuqXzESFuar4KspMyu2grb9",
  "key25": "37t91sTvzqWdFQYzYptPpb2MRBatRDeHyZwyJCSBgC93sSMP6L9PNSfvPCSnbjkjQeu94ff9jS1ddAUbD6dkQX4H",
  "key26": "2vpkPFcpxdCcMkpqNcMVSpg8AZ4wjqzkL3XB6PytskrwMeNuNWvT9RVNoZe3joDkVZRoveoQrYbRujctHtckBX77",
  "key27": "2NDj9MAXYMcGQ1UgFAYiZQnfwkF6xHz7pncFSfLbkaMqLNFM6Yo8PxJpjMReqtxa6DbQazZZrdFV3Qj7DPX1V7wZ",
  "key28": "4xDuNgW2uDHP8oA5ftJPeTmnA6beN5EfHsd4u9dxi9T9RLyTppv4byDJ2M8Ah7AjBqaAv4ryp52U9468FFxj7cfH",
  "key29": "5RZ2TvVSrXRHRFeBNf6aHa4Txiz7jyQNpkigXCa2bG9YpCVBDQUYkYFmYShjzN9yV536HNXJCXaLmJEa2LbtXM4D",
  "key30": "3qMGAxCoH3EdSj8pQ2i5ZRYjdQqygeqrQ1tzKszcAHxYcc2QKnvYrm1aN5BUKwGNWgx2yadpWPof9v2tc64Hcan2",
  "key31": "2KCReMXDkkGA9ABqw4MWB2cY9kwLhZffVRzn1msEQC91cYkgUiZEFHwK9ecL25hFiaHx24csFQcLHbqDJVaAZqBz",
  "key32": "1DNBCPKAUbjSGPqmYyCY5A8SF97TyfjXXSGJZk3KmYSvT1J8CRGdvbXPYsnz84px8oPtnmqvUBcFhmKvhFUiYnu",
  "key33": "3S6zYsXJtpSrM4PGcoP94axytagehjpPRd9q2wHgs37RGDkHhi8NzZh2nba46wfrDMmXnGp9dj6fJmHijiJaer4g",
  "key34": "5SfDEN5exShWrEVK2FZYR6zatidPAwfzhynpMS7mmLRxRerxoZyy2wokv6YSuL2BiCGUwXnksWU5udQd6ET3HKXp",
  "key35": "2e6ZSDRKjHHNxMQc3BKZnQLJ2H6B7QFTVsDJ4WuA3U5vGSQGAAC9nQ9rh7W9eYn5LHhyeeJDk7uqsE2hr1Raavyx",
  "key36": "4V5kRKUPVXj1yaonWDJKtiRjDfzbovnB4rofaKv8kWeCEd3ZByAvx8p6w5p6o4mPhibiDPCaw7nmQmVeFvCL64DA",
  "key37": "4LkMLpkCVDU1qgRoiRXBAgxt3zpJLqDrKMn1YGRzdgDj6CFP3YkCqKsHwAndpF83KHN8XHpukXChbePMRdwn9zFZ",
  "key38": "5yobqQKaWsuSVvofbL2onBJbW5TFKQgiuTCr9RYvsbnCKE1vf5zeDkbqJJGqBh5kxsfitSLg54YZFk821Hf3izeq",
  "key39": "4NNXugmd9mt7W5hHCE96uPmBoi7qCX4fHukGfaPw5cxutNLuNm2RR45KDwwqhQsvqeNdjecxGZTf4E35tozLoweD",
  "key40": "2bm46tXc24m2KMHh48B1zyTL6g7jhCvvpYz3HZvP2LKdoVdDQSJczNEsjVzfUpHenRKc4sVEL9vN5eujDzUBSn23",
  "key41": "Yth1uPyeAPqdJiqX9h3PdaE3n8hor6e2qwiqZDapGeAXEtRzRM4aFxn6AXVmBHRaEsD7nh42ZjBdRvSRxUKcryA",
  "key42": "52eAKjLB62cfMcBFos4CgMHZKtuYPVPsJ7ThqzFxT21cPF5N1c98gfTBJQZyKLtSRPqaHgKLcJQ4avC2crA4PJu",
  "key43": "xM55V5vVjoAaX9WFfmm21PbmaiPQeCbEpsyfrEz3NQqyGARdDtXgVW5sQ9g9NG7jaAnX7n9CKF7idiLhg8PWrDv",
  "key44": "4xzZ8hVpqyViwYR9Tub6GBUoEav6KkNegznVagEfKUce27q19qwTCHSzSMqF5znRbh64NJptjDBKC99TFxpagWF6",
  "key45": "yjmVPqsFsFcqAkkhiQgh2eiWwpVc2mAHm6WbDSyqs5xQySv8L4AiY46HGTY64gj7SDxcENdsojb81uZJetYPyNT"
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
