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
    "4kvqciCHEtCSnRUPHqCkBCUV1ME8ybK67WhFPAXAnwafEnH99LAWWPc5PZHL5r3VxXAB16DN4ZSFVPvFrADWsYQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYp6VE5Zqy6fe7YWKDgDdVEoYWVZV6vr6TbQCaVzmrJCuMH2Q7VHAvjaVihENMoxTapx4a6NAvi2ijedmzTSZmC",
  "key1": "5GdGK5dLezUPVizTcH4EKLiCRGU4XMi4gWCLAXi756hWpzUULWuBeMzmaYD7NVFCVYZsEw3Qhk2Cm9GFpqRRT4nb",
  "key2": "2bi4vMr3HkmeZPRc886ZZdntQkPYKUv6PZLDnjnMWTYMweAtYJYi5ewKZNkHFmsJjZqkjnLEeQDjmu2yHTrFL1fE",
  "key3": "4u5xvvbhhXr43ogfdhHuHhKnaqCNUUkH6bmMCz8Hion6wwex7C3zw5Udjn7U1XHPBuX8rXA837yNnUp5QHtDz3pb",
  "key4": "uWJdZPL6tt7asBo16CYSXYVae73qJ6SVvV4h7RSxByreWgA8zyUd6eVRmw7S1cTepZKMgXrNEbbgTRLayy5mqSg",
  "key5": "5dkvUC4BQd6F64PamZT6iF4pRXtdwevL2PCaUszqDDTGu9omxuwodQK8Hjq4wiFUDrzQGdvA74CRL2vKTgwLEKRe",
  "key6": "TQ9k5B4hGq4YJqSTWEFm1Em67P7ArVvkGDbBo56NyqvnXojiWRF6vAAhx9uy3FDfCJdD6oyyb8VZtJwXiU8BDZP",
  "key7": "3Cd4vJRCEXZXaxVMXsCv1S4GU1x43v8uSqpNAa9LJS4DGcLpwe41QdNsdja2nSbD7um8tCPt155h15Bn4BZT79om",
  "key8": "5gjqz4VJgnpu95bVKKT9d48hFxdGRBgUynF7QWjJNMZX6FcZLnoBt3HWhY5SpaqeifV1ufdCutCuzfsD5YZfwVew",
  "key9": "4kovXdomJmZ5RsjVxDco7xHKGiKqP8q7wFuqudnDDTUkYd3XzhsVhwLU5ykJHaLHTWCPDbSb66DX9EeSrNcadGsa",
  "key10": "5DMEFbcvWPnwrN6cAUx2sTfdw1rfymZkxzLuAVyK1xcStRXYvQ4rCsf44gxBi5syu2GLD9hRfBedAbrLdwtpUuqC",
  "key11": "8iGbHRQbfQNuhmAYK67JNDudPPdtMY1cL5nuQ3FfD1KR2wmosK9HQ2eheCmQUULkhQSQHagUx436JE7r6acPjwn",
  "key12": "23KM9CSPYHbm1VdbJ3M8KT5wPKf1jzcDYe9A346UNggrXHy9Lxo3p3DN1oA1PBbbEqy14LXHZq3dT5Rb8gi9Qtep",
  "key13": "4g9La5nCmKiE9yykzLLXZGr2sZKDw55fZoXghHPYWSEDV4hB2u4GcJCzjPYUdBQcpvHgU7ocMoVBfBVGL3P5Rajd",
  "key14": "4RSHtUX1Rk1bsSsuyKBrnHZ5ujDhWnVanGG34KcPxwEhhgCUmWskpbaYYQar2R57iZDcWmixKTUYdaUwDKSwgi18",
  "key15": "5aFg6V6U1SC92CAEwptydGSpaenkiTr8DBg22Nu6NZjWqQH88skKFhygMBsPTVo4KkrEaZrW3fFN9Xs7sytyKfaV",
  "key16": "52qmmvZA9wcueWY3Z2uvrsrweFQNwG5HUto8ZWhkzzFrJgZuAXTXza4VTVnnCCX6vi6HsCeZZHAnZzWbsyVPfrFn",
  "key17": "3TyQqV1jdaDYEzn2BWxAYnaPWBds5EFsLSxJyCVKKrgcdedaUEMz5VZXUYjmMDpAhHJhhcJqEPnJymPHAY9zvTYX",
  "key18": "3yY8aNnmvn4HiZnvcZUbg25b2ciYCQjJJuuYSARnHVi5KWsHw4eqGqijw38pAUYd418Y1HNyjRNtYZLbDS37tF7h",
  "key19": "5ZBHqhyKPeQoKjRpnm6utBC2oCdDHezCis6TAApmf3ZdSSPa1MtQspphHZsv2eFxTmJd2VBxdLN4W7YiBbNo63ge",
  "key20": "C4cn35AoURmdDyFXroQ77B8dW6L2csDJ7PYJJzv3GXdHvgyHpbpPhouPJ9PmZ7JKEbc1Y9L2YZspVSHpi9WKNWW",
  "key21": "5Xw2Ss4TTaaMkue7Qvn42Do32wLUVDZkj1yW9oseEDz2d5YxWymL6hfJQLeD9rYw3Qs7HkG3NjaDFQTHM6GD61xz",
  "key22": "4XQuMtrRYwFJPVQC3xN3UZEsp4d1mEwdg5dDEHgrEGoumbRcBn6roXvRqrvAFsRMjPt4KuYs9rK5We9GJpYjFNNu",
  "key23": "3bgA5t8VyshjBjcwfe3ndTmw1pqbiEoxbomN7fUtKgcGH9oy1qG3bhokERdUkiFCizGoBBEFTyXDS9rYgp9Ux3rT",
  "key24": "4FtHEcLEquAVj9B3DTmPxpaqJu4mFf8k4mcQwerkN5GfqEMYtdvN7tfPgJxcnVY1FpXfd4rNYuQVRsC17ixaH2cw",
  "key25": "2GSR2iBYQpkUmSiYff33gGKHUj6wTYcVHHqGXT4MDJAwpueDyW5D5D4qzYbtesxfAUfdZ2aLhbBsvfxcQEerhQ81",
  "key26": "4Gb8QSuDuPVggq1ezVSqqP8ZmW1AvX4Cobw69srmpJeHHWdMe1qSFnPRS5ooBfkFfuMDQibsk3NR6NQgVXsZSQyV",
  "key27": "2Vn4zkbskASFq5aWREmUCgoadyVZ7Y56QqxYPP8Nn2DADo7QNhibt5ggi1mtZVxnN9hLv3YRjZ9yGX2FzAqeLQbr",
  "key28": "39PHd545YL88MjBemDVaMBa6M6h5rCRq4Yfq3LVPWdbsJApkFFRLrfwkb1FyZG63z8kQjqpQd36BZv6akBNM5JKq",
  "key29": "3HdiPj8mKJspNosGrwLaqvCkKXdgXXuNFZ97sTYQQtFdyJGMaG2fsjUTU6GLheXW3F2z1LpyZSJ9msfZn3vfgvGA",
  "key30": "4UK2ZbW5uboT5MndpkVqsajMqSKecoWUzATCB9CsZSiczWDqSxm3cPz5ri2RM5MVBwomzFm8zsrKTBXbEsAX9efx",
  "key31": "5oysk48nXMakdcm6VjEG6673KJQR9nUS4MpLjWQ6sZ5W4JzgJxxTyYLunGmJZ9eNdZfxToTfXEZaXyhL2dsL3bKV",
  "key32": "2XiZ3Gswf3mWmhDmhq25poeJabz8h7dWBpoWE4zMzgV6BZ6a4ASvoEcv1ZM8VowfQUuwrdnqwnmbSiA3PXLP5bBg",
  "key33": "4b6K4zb8TA9Ep3yxFTWgpDKERUgVZxRKS1kFiFBPC6MGepGGWRo6EboL3qbCdZd4MMerwoHKB2tJtQhVd1dqirqU",
  "key34": "33hCY9M4tvhEJ2aXweb714F8JR1TuwXRwekpLw4QpPejLZUbU411Qy93yUcjsmJ5hfvPfYgToNNXNcEZQkL37Fcp",
  "key35": "3sR4nBuNPeV9AXpe5ZjXokCSJF3FFNZzRp6cfS9dV2jfd1nPFgJo1rqFbGKYaAvijg1Aonsq64sZfHARP61QabaQ",
  "key36": "3kS3eivbmirJBq1PKAUZwVghLazsiRJsU8Rkznd2fYf9LdcAuyApboRTWLQ5UEPZbUNr9mecPnH4zoYZVJEmVBuo",
  "key37": "53KWo1PCWaJ7a2AY3enSpYMLdMvLkbgHbigvyPh9vQQJuLkLy6jegL8EPSTmdYRyFRmuvmBNYzqrDU8XjJQkXTjc"
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
