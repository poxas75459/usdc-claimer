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
    "3y1dwYgZ8W1c8UBZ6xEWoCjFUtMCnvcWnAL3jmNtBgtCfrrryi5MerDMVPbu7roV4mfpReu7T5aczQp2RBrQuhKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ab9JgRgXpJo7x8a5VC5i42JP2AUCnqtFvRuisx141cUJ7WBqRVAnSmCoAJKYW4kYN4TqAGZHsNJtzWZWZefq8ip",
  "key1": "5ZhN3bgCWLwWsJWDBgvGpbW3uyETytrYuFRVrryh2gVuYwiJTwzhjewpxPKbi8R2DvAaXAKniZ6zqBa3XTokQKP6",
  "key2": "xE8JfD3xsHMLUzVvZXMYZEf3vz9NDw47FtVpzSe1ewjmNd3x21c5zBx5eyfEfuwpBBZmSYPDKKAfxttbeCpuxaH",
  "key3": "d88NkbPW8cJC68W67PFdBBP8bdH5ZYkq6wFqWCaKoNUMDciJpeySiLkQnmusXuLvELSb3k38LCsEvtxxXtJmMbL",
  "key4": "3ZbpRZmgATU1HuFUq31LSjzY3c8qzTi1wtK5f3V2WxRSQtTTmC9FMdb5tZ4URavAbLzK4rnReNbk7ycS5Wn89KUM",
  "key5": "41UUf1AL8fxB7AtuE2bFqUvMveWcCuJVowRnDhNW3UCUEuXTmfuwmfe5FriZCtGzmDYaweg6vMS729yfqxWQgUt9",
  "key6": "5rAfscK3gCxc7S2HYN4LUfjsGs4oDwgxYQWe8mTgQZ9FajF9hnajVLzUb5ExpBuXACwcD6ysbwf8svFcYDkGdQpZ",
  "key7": "22EeFFKpk8r7a8EmUwjqVEsZS8ErtSWnBGgbtUqRGGaH3WDsxyaemRKP5iXFW9YdGMfESFnLjbREAUS6YWEnBfkG",
  "key8": "pdNhF9KkdJtdUH4BprZFTETxFER2yWeAnT8Cau82Vm1D88ArSASNwwjVDWGi2ciaWGzNQd42BYcbSoD1NnKGdBh",
  "key9": "4y5WcuudraiZtqWoZbL3tALufDkgYabhDReGbLeuwShaBdFVd8JsU9U4yCXp12fn7RSDnP3WJHZvRvojHyyMmJJ",
  "key10": "4prZXdfqMtRkMQz1nZjaDTPQ71Jy1bUz2mThpMSdS1Sc4zWF8q4iydAw78weZwwYZABKDwXio9GPpiUMMWKANq3j",
  "key11": "JjNCEjLtKFJUaKoGX45uvEicpPLdWRU2Y9KskBXxJtPL8AgoBQwk55fT5baSHWdxvqZoffkM2B5nPyzfhHiEfQq",
  "key12": "VotboxrvzeGR4ViynTZcX6rppAFSf3y6ksXhGT69es4pS4ct5XZ1jQ2696tmxx4XzU2EnBE95cUU26eB4YHBLxY",
  "key13": "5atDRY9dwVtyPERNw4CvGZgC6E4fEMnLDqe6rX7QVrqHoEHNfHoEjX7YuY1dwN6RzQ2oLQV4PVMCnWeg1UQKfQcG",
  "key14": "xqsf9uvNL1jUJ7wB6w5dVAxJVR61FmGg5rA1yrsBgd9LGmDYzEFuAViVaG8gWLR4DeeQyt1BLKPMD5gim46mpBx",
  "key15": "GeZzGLQFDZ5uyYuUFGD55B2G2KFzDTkZTqwoL8Vx4s7mDik2ptzy3s3SenftnyHP3XNZ46gb8Re2y5PFQKA9uaR",
  "key16": "5tdjQiLscGAiLYyiNsGYrCPVuXrHC7G3LHXsDq5mywwisCLcd3Y4cJUA5dQh5wLNPSYHKaK5J1F2SJ7QJczF3R2d",
  "key17": "4J3ucjAFyBpxmAMsbLKYshuEdq1o4kX7KAsWf1WegpgzZdeRAVKpTY1dSQ4dL2q58p5Pu1TXvc3QZJvqcwdEzaNB",
  "key18": "3nyb5N6HqSuVoaRZMzNatBvoDWzpEJCXaokmNTGFSPE6QUkzagpEr7mNiiaEe49rpSBkfFBsQuk5exCF2xgffvqA",
  "key19": "oHhnmTnBvHQvexXpqKwHeeeDepwoiwP4YJPtaA8rsmpjLUv88RrLSvUbB2UMGb2ZBgcCCQFhRmUjVf4hTMsY5MP",
  "key20": "53E1yeg3hoZxdV4D8ywvr2Qvamhny9UeVcPxhkHHdoBnjPM5hqR3BAdn1fp8E1H1ZBqPFk3TM9G5Q9FKcVkajP6y",
  "key21": "24jxDrGGtmV9yocEVT1N3CJkVJT3d7mVAQub3tdTQ7muJV94ucCJy6h3geZ7ZRoSEXbFHGtPiSxDtX8fNAzteQoU",
  "key22": "3DEHtHEXBPQrHY7yQJEvLLEEMDutpd4zqvE9zPNqC83vLewpp3JNbMGFdfkEBX5zpUQ6W2LZjiBU7E9sFaSM4LzL",
  "key23": "2FAhvLnhyy3yCHdmox81o4mLmnaZbkLqWfhkkHFLjCcZK5C7rcQv5yFva6pzDiZuqrk7eUpqwfEoUBxEGT4z7zxi",
  "key24": "3v57uZA9Vo4AXTJUstdyE72U5gxM6BCUDfjfESPobSDcQhShajdCGjYW1f7oDR1mgcmTSBj3MYTKLirUjR9FDzKj",
  "key25": "3ZAQBGcMGY53HHaV29EhLH1Lsi2zwgUwMWQrRSFxaNHsVixs66KcLQhuNrb2ydmoMMVZeNaV33SZQTf8vPQXt9pd",
  "key26": "49BZRpW24SfKKi8mkmT966WxuHSS6PE6DzFKTRc81RVpX5kwQnC35bf8bJGJqbo5VG7kumyLp5yG4GcEz43jFTRd",
  "key27": "5HBqKXVxSUUB4j8Tg94gPCUhcubHFsiLLCtBm2F6Xwoz5zz859LzbER1wXevLxehXbs24KYKCU7yBphK5LoRNJhJ",
  "key28": "3j7sPWUJHDgFydMEJMHviUC9U9FmaPtk4R9Vt3j3CJFNN8oaZdjJT3dTQNwkL4Tv2cVLybjF3GjDKQ8eQc9wkNT3",
  "key29": "XAoP2QTcQjCowgk4pc5tVDwAMPT7j1uoFxu8QPo5TtKnzYD9fm5F2c6PuS7zmQTgDC6DvtYRULY2SMJ8eFkx2hJ",
  "key30": "2CEUZYPUpUsMigNL9dHpmHwt76of94zKHNvXTdPiZLTbDM2xZu9AAhmaLSWvv9nUWqt3Sb1moacYid126MGHJgkY",
  "key31": "5zFq8woQCCxVsmRbMbJptE5UeAGVA4WbzaBTyKZvN2773xNzKFrjqVGg2FKoFNPDknxgHNg6oiw9hFyDxoE1FP3b",
  "key32": "3wzHjaw5zfMPV3YfAFKMkUUHMrcjjeqeJXuEBTzmPD1jpBnWHQQpcu8nACFGi4ESzTUjDkiQtKHcW1j9eKuTSYgi",
  "key33": "z4sJagVYMMbMYEdaB9scWYNoQVvRLDKnmH24UigxqktFxskDvYJW6VjVyyuUHw5q1UcFXe47fhMVGJWL878KDKA",
  "key34": "MAKTUJBXg8Te1jMQGg88HEeHFoM3nb1fKgLYeBMPnrkPokvZfYyc7Gp2wk5jhngWaDTmJDd5daFFfBLwBo6HrDt",
  "key35": "GJfxqC5AobgtvquKUkda9h6H1JoLaZwgn4xmoQa8h8761NyeXJvHtj98ZnM6XLNMHbqn2n7P8m88jexgp628oUC",
  "key36": "5VYgamb1XZj3bmvUceMsuK99r4p2rDZMLXZpmZVburnC7rLxSA1Ae921xXKQWfPtvGzoHwp6NvtFi58aEpPU9vaX",
  "key37": "3ohHTaskL8yXHx6TFKEXKszUhVNCyrTDLDu7FQUsWzLp7BeuaKDVPrwdS6CjBGsL2mJPwUqNq5Ge1hnK24H9J69d",
  "key38": "5T2J48KPx1619v1X7DhxKi7jqqNYyYaYyE3bm8iFazjvQdzvPC5NFkWFg3DZmqdnERjBFSqNpiDELQaeVqgBj7e4",
  "key39": "3qrEH7UF814DHvDjXek6nAe8v5SwpArnWLffT8gmpNg2phwiMaZhR1oosujovsKop5phQbbGiHm1m6mxv7WL4F5d",
  "key40": "2SAT2YeMEwTvxgwXwm6DD9MpsNLxH8ZwTP6xgqiKc9eUWud22hvzLis2f8WtvCnfTp7RamBEMNctjkVijLugfJK5",
  "key41": "poH4UkzyDM8nFgohvPSnXXUFmSCTdvmwgSdSPqTWtwkVVVsvnEVMbu6JP3mXWqeh25auJG1AWFZgRmNWLxXUsDi",
  "key42": "5qMAXVtGghQMaSvjbtBmqMyDceinchgbuPzhJageZs3kdxBki4xryZjqujDKz62jExiJKc5tUcN9jSJfHUCHZQKS"
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
