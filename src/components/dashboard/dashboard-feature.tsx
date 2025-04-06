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
    "54RVYPzhPSWiALU1qfyz2boYKNW8Uba6ejDDPLMztrtzsNM1r55tMju1sw9Dfnj6RvsCejLariRXhpSLAtxTyf8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DE4zrUHzPAvi4WEKmXsL5FsWqJLNoPVqP3XMkBKng9E6bHH1LtKooFPWxyD1QMeqYTQFpnnBQTB25E6ZTYYYGdk",
  "key1": "56Vmav4iPFhkyZ9YHqySyEcnh8hJ5TKEaRt2jift3SoNdAPTgKZ7R19B2EGK5TWo68dBQXgZuvfR1CNLPUrt6Sht",
  "key2": "7qVvLvBXDCiTVBnmsV6QQDw85dEFzKn6WngdREkw2jUDoMPXezNvJwYUh5AvFNj23uQscFghjbvT7GdQvLPYjLE",
  "key3": "2WHLnUrRdPhqiWoiYyacV4uMWfYZUKYysxBGmbPZyPAiMGGKvLFb7ydGLCmNCRPsVZSWyhzTmv9Q1XXqt2CwuPuG",
  "key4": "4R9tbedSyS7twoVdheQ8bgVkbmCtdVqtotJPWQ6nrMvZkTukUihzSrPpPBP88MAWS9WmdLDP4RYuiuQzVgxtXGsz",
  "key5": "5QXd8n5BPArTJ7Ua5AY4uLYqNcXHgVAMBJjR365tZLcDPVUAxUWaEJ1YuZsGE8hQ373SnEMvXzUwu12a1s6L4cXp",
  "key6": "4sqj3hqPxCHxLw28xGcfu2NE21vVmP1AkDeR7nUUcFLH1tHanG3RKNiQcyKuRrSjdpm9HnVZmCtiFdkZ5hh4J4FD",
  "key7": "2JMiNnFYVgTSpcs6NPRZCVrNrca7wyu5Xd36H1cWRWPZrti6XoRRynQiQ54NExFU4YAHPKjZBLoQrComTtH6iBZc",
  "key8": "5bB2RBXaviuSHf9z4NnadHoKxDVk3uwNg6XKXsu5Q8jgKefnV4ZfjXck8bncik8W6wdT1gDWDYZSik9gxMAiKJGL",
  "key9": "5TMGVWTnDF5xiBWSBUcCfXVPa4yoSAG2NAuwYJzDKywWapMqBz435wFYSyoroibknDAxmncB249Ejb6b2aNxrTUm",
  "key10": "2QqUY1kiLF5hM7kXT7BxwAQF2R9jvggv6R21sFc4t1tZgo6JSYxfu5efSPs2qYXQ97d2e6KQyjzwZztkcXKazLJ5",
  "key11": "43ehkPurBsiqNNsJSVuCqPjnCJzMs5UjxWybPSFFhYRQuMrjJ3J5khuxpNr7rD6Qeu64pTfCJpNzUWm2rb7PFimJ",
  "key12": "3e6dWYyXhG3muMpEGVVBFmaBwcJGBgip3HZxAEYap3xKzzxkZrcZWM9H2BqKSRj7cAKNnCarpQ4MukkZk1zy2r2z",
  "key13": "bX6riyx82GQQXs13kik1q5UBa7iMAnc6bFCWbr4KSiQ6RF3WtDiNABRNFTy9VJb9jgExH4ZBgHcDV7dBiVedMXQ",
  "key14": "3K38TGXyC4eERmVCaTuzz2g2NUpES8hjhUtTkhbPCXJPfAHs5aFNecuzn2d5uNiErytHP2LcjVWAwm2QyUwAzrfr",
  "key15": "5D5CQB2RvCc1tzAVEGjZG4z71B8jJNtyURGkkEX39rRGrXnSWPQu536jpWDGKLn1LFdLhQB933v7G2KhcavmZcnz",
  "key16": "5g7uWJfKpSanHAKRkcMFNqBoxn5nePuDLaoEXuGtBn2ZJuGwRHsG1RULQM7RqE86exvndwuATT49oX6bvrbDDhq4",
  "key17": "2acqkWXGxGozBc9ea8jhqgQyqgXoFRnjyyHfFLydK4LYGFhWHYj2ZUrTw8mgq4WNKE2UCnx5qUTamwpmB7ZYo9pz",
  "key18": "4L2LFHADdKhZNCPWKeyi3mHPcbt3PgVMABTv39EsmtRgWA4gvVJ4pG7jQbSkQs6DoVus7CqMqAU1t3MUHBC9vEW1",
  "key19": "chKVfinVHLj9c7SfEquh52NoTYQHNop3kkEM7wFsYPPRETT1Pv7gY6QVTpr3jJhuijEqHjbBpuocCz4dohirfhG",
  "key20": "5WXjQNd6v5VGR7YfSB1WKXWGXvR5E9G2G3upXHsSYJWdrBQSnkiac2RpEypGWiB7TdGqfhMgwzF1EduKkf1E4MEY",
  "key21": "2FuFmRKPnUzsU1kQBZsXDruf3xa1vxucLbXRpnbV7YKrn1jgvWBmvLN4Rd46quMdV9zC26q1vaP3xEcJXWyTnYSh",
  "key22": "5MnKuGDZQuTwd6yBtoebHpTaGpEgce38LSYCKJZS3fqxa1TQJkqRF45nD65gxQmWNcLCSv75Xkgije6JwuW6QHgQ",
  "key23": "GAjUybNKDC5a36LSnpm4fxPYoeDGHs7Q5xNA3CCSgRdy1XLpAf9MZcWVwkyZRhKr4tA9M6sRhsim3a2VV1o4zbS",
  "key24": "4WWn4AP5JuhDsgwPng3DJEgh7X4ySrRwXida8RoNi3FLBPcMaPKKQKgmTmHHorT4K4x4qys9aRsyE78sXmE6WuGU",
  "key25": "3ErT2QBcjzi5kpJJAjkgvu2tTUwQdhMVu9XUUgvymWHHRCuqs4pAmuBxSKM7FNNaFU9q98UUs7797ydGDDgBggZN",
  "key26": "3iy57rcfMPySohnyDfeg5Vw1iK6f3sMo3vKhnZRH5p5TwqAF4GGVEoHhxx2PD53srjpvryQGFJ77mrUBGE7jNPkk",
  "key27": "2za5r64LQK7ZbqvFrUgUdEoEJ6xVKGe514eLfZ91tNxG53ga2Sz2Hf2wTBm7wKz9bTc4DxNJGGdJta7KHzg3qesh",
  "key28": "4cG3RSPkBiSqc3FQ4ii6curnWT4KWSTGBduotHg9aRB5sCA1ytwvrdunzzDjQoyhDZGUpQMCu1hibSUPtDTPC7wQ",
  "key29": "4Da8CSNFGR4N38y43TRo9XKfKXkbZfEew76Lq42yus3N2XwuVLPFAQ584LktWjrhAN9RdE71JmYxgM6ELLS38KMR",
  "key30": "5auJUJbjPSbozrk3A4e12hbfHhxp2rPoUGYDChNiK1CC9T3DkrVq6wSM6mKizFc9jX6eCRMooM4ypkFFz72of2mt",
  "key31": "3c8NcytYfauyEgh8dagokHd8kZTo4TPkywZtJfjhfGTAd8TmNvGCyNUsXDk7tDt6ZZbiEHo8nmqGC3oP6qXw3shh",
  "key32": "5uJMSYZjkAG6R5GEZQZ7b8aSve66UepDBt9EXnfNNx2kyNqvdNHuwWF8NSxEYGmbt4whhtQdwbGhy31pPP5udGYm",
  "key33": "2T3xY3L3BLb6WvCXRKkXCFsYgxZn98kH1HUiHpkBBMcMa2vGV79tA5Lz7pcvUTnZUXfiRfQ5ifTtxkixMHxFmbyv",
  "key34": "22N2gsSDiV6fSnWCyJqKbxZUSG2dCBRvRmqV6a8oPoziKhCRBDe2ctpPTcFowhbWVahBYwJMAh2L5vCt1Suh14Ry",
  "key35": "2r16TL7iqMhgUVyKn4EaFuNiNtnmqyUXYJrhiwK3RNMPuMSnYTMVoyn4cYGXZSTChesDxwopi54eF8rc6uHyYbtn",
  "key36": "yMwSvVQtQt59cmsVoBa8Gr4gxZ6xGFvrLK7GsBcv9r7HgACe3KXsJLMfZzNSfwfVbsdo6A6Kd6Nw6E3bamVveJM",
  "key37": "5p169MZQYqEBFqnYfiyHQbbWiVDDsf3ABRERsFjvWbMbTMYuDjKf1xT9JBzifuCbT6YqLeqmc6vLQB2MCW9hawif",
  "key38": "3tPcrGiJCfMtZp5cmZfdaM9qaKhV2HcbuRAkcmXxS4BqHNUanDsoEE9uGgiqWwergN6wbQYr2gENayuRhm2mRKQC",
  "key39": "LxCtufcm2Tgm6vD5GSuuuVzjJS7P4KqM4RBXdwTUiUraeMRV2xvKoQ8h9wpNyqyJeKDNpmcvLfGKFz7NvAYrGJ3",
  "key40": "iZfKP4xsfbp1ruyedaXH393GezfMHDZQvpAyontKS7zNfJLLXhKhG4QPfwN9iedCLveTL133kcqLv4Lk63EoXi4",
  "key41": "bKEixyGyduZAzJkVqgz1cvc6CsMzXLTve3PNxSfyBMvEvZN3xoNCQR1WCaR4iBxQGQxMYJZ8MCAokxrVWsbFSoc",
  "key42": "3644GiK1AsxNsU7MNURcWstRDWSFWJGYhFK4bnmhBmb2L5HF8T6Amx6323nRoajRURBLYrd1PSTsh89AZivMFgHd",
  "key43": "4LazC6wu8HEkJzJBP2XP6M2in8W6QXj74dqjfY6KG5kZ6WNZcmYT1iULR2TzEKTuJyahsCr3JV6VMVP5wCywbYzp",
  "key44": "iNerRPfUcZm7fUvCGEviN76u56Dgg29PHSupCnHjqWVFR5eKBkZVsmMfsaE2wR4JxaBDedUv9KZXaLyG2sWmPZ4",
  "key45": "3Q5dokqwkce614bMmm8ujhVqK4gYzfSJS5h52BvZVimdwPe67SDQU5DRc4fxp7jgeEmcTUuKjsg6xyu3qcAss8GF",
  "key46": "m3sAd9xyCUfnVMG9FcgnqKNuNoxxZeuytTbRMPvHz3SBi46eSz1yePGN4nwPzagR58DSMtsgoVZV1BBFb9q46pg",
  "key47": "3En2Ud1n1VGj8Wvnq7EWkbLJYNQ5wwx41xwgq84qB4H3qSFATi3VKeeMbkauiCyT7gkijTFf8RJYGCcY8ycXH57h"
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
