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
    "j3Uwk8BYpeC4dckyKvNULZLV1qBxv4w54hjK23EvBMsXwSf4RxF8MBookdZTn7KbjkWV1TBrFB75Rbt48K3orHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2qxGwQ1GJoozsS73ZWQ1HFueRex5dLFKf7zDTkhiP1edG3RT2T5oSDxRvqh3wzTafPUzC6qdqsX73CixfHvACS",
  "key1": "2uqxgKhhj9c6ubegrCdRyM49U5HXKJgQpLKAQvuY3N9sdtywMJC96qWEG5fFvpzfpJetoRqkVE5zZjsds4mJxUqN",
  "key2": "xLpiN2Dk4z6mEKchKHmYxiAV5qvUXX2s45KfVrSsLc6ThRZbNc9zxTsHJXgB3qASAnUTBHNAwbYJWmYpi1AyqGK",
  "key3": "3kfrhHptkNJJSjC5Vq1JWqZYww6Yy7zVCtCQkWU6LWiv3D6Dc4Xs2yiv6QiSbrygXNYRBZY7PU29tcj19seQ3RkK",
  "key4": "5pfESguxWhekak1niPnB3zUbNPY2357RynjjmsxXqGa8mPSi9uGPcqTXrhvfTRnFWASNHJfTgh4NXzHXPaYfbFcv",
  "key5": "3wAA7CDynDvd7KYEFdhv9zMHEKYYiPE16wSqPKLBo35XdECuGFunfF871zXnpW2S6CDZU5XbQorpxiH9ZKJZw1yu",
  "key6": "tbM7pVWqcqcJKY1F4QFThv14xiLSDgP8SBvEj6Copy6EWgZVbrDDJp8trDCMFNMMAs7Vvw4PY3s68oSudJCFEGt",
  "key7": "342Xrz3dMCtXK1PcVujWqAdarUgKcdoEWZemu8kF9ty3VwbfvkUmrBWx1AztMVUTb5ec254oXNceWnyMd44gCUnb",
  "key8": "3Y2ouPWAkc9Rpf95YD5wQNa7Xe8xYAHUi1iABAS4Za6FyFguvRHYcuV1F6kQHgDAfndXzw82s2Gjk4iMvdH6pVsQ",
  "key9": "5WF8ovA5DGPatFr5zJwhbLVLW5r5pAWaWmVRnZrGqAjHti5oSrXMmLUkQ6sHSQe7nF6N9Xd5gcmk9gbrQY6QfgxR",
  "key10": "48qE6t8nTPhexc17uUpdCs479VcEjWUKJ8ycFVtGHXm4xyBZSMP8enHersQoqTKAxPpsb13EfdpMhvex2GXEcdM9",
  "key11": "5P5hVgAczNov4ASchzSvR4Wgm2kXJso8uNG1RD1fAu11tmyaddKwfPuBngdu3je5LPiCPLjZv36CVufK2jo5jbo1",
  "key12": "4SD1Jaf6Q7fth8VWCf5rnfJtJbUrsjdDZyxxnqMayBdwr7SRBSYg6E51d1K8uR2QXqDCxzuRjmNvkPP6iakkdmTZ",
  "key13": "2YTHz6gS8jKkU1hk2D4qsXxwaZ2nNZzJbTwf71MbkQhvfB3dbNKMkrUBTqwMjsP2EbfApTGDSpnzhUBzCDLjYBFc",
  "key14": "52RUVEjsoGwJwpcwEx4nCpPSbbb58CXuwSPTPaHaRq4fXiwQUCqdNgQLgDREb7xRPtwXMnvqJknYSdnBXZMu4DQT",
  "key15": "8vHrvyuQKmjvpvi8tHVajKRtAKxniKyq643vUUGq8SGm2oiJZnhpGBHpwarNiJEJ6C6318qNCo2CR1voQyoKzz6",
  "key16": "66MkaAGmLBTgBrGSJhGL8DynM5L1Cbao7QPTp1EHjKC4oSU6hxVR9QhnyigzowKaVyEDm6rXhRbYpmHeE8Mz951e",
  "key17": "5ot8C1W5od7a9YVWV5mPJUovvigXLFtytmCCaxzRwhii2AfRtRYsH23JVFLnZLmyFYx1Jnush7nPDDt62j8LVPA7",
  "key18": "n1MJQJxTZL7V89hjcgBupwPJYQc5VoqYWri7joppuCsFeUyMupUCD7Q3S1g3fhE1mr3buCNE5UKWrrZBgpkU2P6",
  "key19": "5aw438AhUar2bWqVkibpKs7qBRMbLcTZ7P2NF1N5GMTdgUDtpWVbC1HK1FZ36prbDA2kSTY1ieP8zYQFfceP8C1p",
  "key20": "4KfzLXbSWmh2kERnjn72HufVPS5QurTNCbYSHN6KqXn1vgQcTWsotubW3wWKVAg2opbekLWSuW65WZ1TY5J6b1ks",
  "key21": "634mbK5F1NLUSprHv4TyVWThej87LPt8wdpfx2A4E8zbzEkakiS5gC44iv5opcdoZk2HPEvp1Vcd8nVZAEDnCNq3",
  "key22": "5MmepVKaoJe8FEkJPnvciGhGACCmHYq31X8PmrjTuajPnajWyX4KMqRSNwzTg15wU6pXGq6tHRaRx2KXnNo6SmU6",
  "key23": "3RMfthNLZfTqAFBM4nKLeYkrhGUAZ53nhGYtuJoqFjJZ4gtVXfX2RJpbvAD9iTwPrPZH1pHQv3U8gm8fHXdEd19d",
  "key24": "5wD9xRhWKyZ8Erxc6CpfButRx1NopawBR1ZZvEAy5fpGSY5zA4PfWoQddTs7VgxCnPPteXhTDUZtcu4ZsekGTnqz",
  "key25": "2Hpgp2rxWW1LmbJE1JsTB21b9FFng3w4u9zB86972aMV6sdXQFnfvnfFK2PpbaAehV8AhEwEnM1umkynuQMWpSiP",
  "key26": "5mkzVFNkxVvWB41cA4PyUheHMx8NvrhndVei29wKQpGpA8UFsmNKiV6tLLMijTGQAeoWaMWh17LkfQ51i8t3kZ4U",
  "key27": "2NaBpPQnDSsQyrUhnoCUfiBY7uf8BoG1ThGgYceAgtSvV5iAjvQLAsTKWfW7JPczUzQYQWVoRBZPZKFwN7z9Vzx9",
  "key28": "57jmcPBZyPgdKmnrXtqxpc7Gi7vTmzAVsXQajjhAgySocu9X54UiHdQNLo3dSit6wuTyqNmnhEhE8UCYZPvnqjid",
  "key29": "2UzxeckQ4fgHoyXL9wXU7Ser1TBa8KbQnLso5PfdFNg67spFrUv31BWRzhsj86AVrcoZ6gGK7b22naSirK8e3uEL"
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
