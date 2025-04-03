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
    "HWNwRVdjcQam9SLmjga1nFweY2NeESvWqetT99y6sLi5Wa4zaU7ScRFBFM2YkxmtnoQiRASkDH4DM7VzFLNNLyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3kkBt4nozESTE7JdVboeCmHQM76qcMgADRGGpQfxc5N974LvQBytHJowdqvPS9xP1cMtb3dpT34Kkazq1Pqctk",
  "key1": "5RK3e2nMp5bEWohDx8xbcajorZSz1nADDxtmJGmrcMXRzVuB7VvVppiLEKQD9pFFCANERPsvsqKzAM1b2MHXc8j3",
  "key2": "23rzy6ZT1iTBDYdMHHMR9QWHRxXBwUx6QbMewhSX2rdx9xJPg2hSCZgWcy6CXRxNRYDUVR3h52jDbn7GvfEhf5Eh",
  "key3": "ubq9kFLJsDBs8XPh7vFPR1AbG38oQi54StgfkCpCqikRdE1EWVGT9RAZwaf9znBG8xZisAo4iQJ4P3VAen3b9AG",
  "key4": "3ZSRQ8BCcZw99t952gZ9QihZmA4JaJj5CYqiQAwJnHqgCNDcHCWAWNBdTkFaHD9f235m2J2Jb836QJtxVBwbVtkr",
  "key5": "2obFVL8G6dCgx5oBeLWVnwhnhDkTeCv1mszgv8n24AoMmjJcr8ZxRtStJkQrZYLjBEctRZzzS2KFAmDovAYfeRcR",
  "key6": "4EJxLmrs7zPobt8QML7pcoHCHp3kFXYS8vqpnXEVYeY54v3vf3vLgzU1LP7cm2ky7MvH4hbiMt2TZbCd7QPatNJJ",
  "key7": "2U6ManzbJcb2moH3gJbdxo37LWPVnXt22HfoxhAWi17khkZc8McraWjSeAS8wsXbZoEwRbYsQ1eu9V1wAAioscs7",
  "key8": "3hQDtw4g8qz6gfB3kN3k5gwZuWsETgF5uRf8LRXuDYb5Q58jZgT4x37oMhWeQ4oydLzASqamtVmVgip737yp67mt",
  "key9": "2oMjhaUiEDg2NvGc5GZ44vri4qk6hsmMuesQkYdYzems6sePBou5YL7nftHB7UWMpU1vQSjA5Kov5GcDnL4bNjZ2",
  "key10": "4ysJCuhupqXsszUUuf6g8rXCJyDUTDpxQz3cYFkHGxhZ4jfwm32JXBoEdrARZpfpSRq4xPgV8jzeCer1tEWwZ9um",
  "key11": "4ekfpN68xnnTfx1UWJdpB81Lm6zdzg11XyjTF3iAZVN9GTuTSyCUJ8U7xiPoKiVnYTKpdF2upYbcpZm7E1WZ6883",
  "key12": "wnfhknKEhf2QqShkDLytan8i3s9XgjkJd9ypy11LehBFziYTVLRb9SMM8Tr9RL3AjRFkZgDtEbYwVz9rnui5pRy",
  "key13": "4ECwWvXwGR6T5HZfyackb8vNZ9diq28tMSrxoaUx5g68Zx2Sgw8SdVnBXTvbrXSetuK6twajaNJT6beZhXLc84pZ",
  "key14": "62JpEf3sMgCPoVFw68qs2ia3JYFovF8zyELzcrLbdg394L438n99YLFTAPSF7vNjCrcCAqec9DMRaBabjz8oFHxA",
  "key15": "5S2fnkx3os33Eb9JLv4Z5RzxDa6jXiS7VKcDa6Y17QFN86APhG95cLeduEzLAUF7UZ8hA1RZDm67KPE5vJAEZiAJ",
  "key16": "4dwvrUHhsVacJ2KiBTmiZMcyjL5Ly5dNwM8YHoWFwDTXtA8M5cxcNmSyVgeuc6GjDEYsf5pkBjWP3HDd5t22ET8G",
  "key17": "5Jx1HiNSSu8FsJgY2AJMkcWWqE4Qht2FtV31J6wshrKKV64C5ydwVbXxj6p5Vu26Gbg2KmYQ9Wu45513AztVoApY",
  "key18": "5Qcanx1Hvg7FE4P3LLm9xoVD4LjGEA8KzPZyPgXVgh7pVEQGfZkg9SyaBJL4h4biUxrDuMp957KKC9edY9a1Uxtf",
  "key19": "2L2ckRkRwAjQMaSFWtRvQodVLyiw4FfcgyHz1bVjoDoam8HYwWWWnw1F3Mvo4JyCv5s2MgMFrkXuRrdap65FqphW",
  "key20": "5kVwjLcF6GAaNLcBPoDqB7au1vzjFXnKhAS7126XwSJXgqQ9k53WXCsexP9751bM8nRwTPZcZBReVYMDPnxbe1E2",
  "key21": "NMqJmKBaKHuTSuxJGhzWkHcpDt72zV4HqbjjUYgJw4kvyw4jv55bbYZBrDzg6YjzcxMsh9qEx2kWmBwEkQMN5yx",
  "key22": "xQ4X5KU8iBag1XyEG2Ah4ETs6VpfhkBGVBUnLJsBhfe1FN9GmZYfaKQE2Bo7vQGGXe5evkbpDYtmqTwm4W8jr9e",
  "key23": "5ipbuZ7bQGApH17LAfu8VNRG3vaPzXJE6rAsLCCy6w6zm4QMWjfnZwwAnvzHD1J1eNeuWPbCkaJ2G8gKiKFC1TUq",
  "key24": "2rxx9mfzzd7PYgrA8buCYHHw7UXg9EZmyHSz1EomSsENAdziuDMragEHuoJ8SyfoscTaGPYE9mi5CcFuCTqWSeZp",
  "key25": "4aqb6yz28Pf9iHy7Lnj2XNbW6rNBee2EaeRq9zKkU9TpEoUFPMyaFPYQDT1igtCkssh7GBvP6J8S2soLw6rZPv1K",
  "key26": "55ggtStmicoGTkFodAe72L87CRVw2djUGZEuPZ29Zvog8ruBE5uKNWjG5bz8n1HazBENJsNQrjCsFJrGFAJKdewS",
  "key27": "34g44iCYTqCkrPBHZCHMdh53Qtc54dsiqufjoNp3QtK2hgpoBqqPnn7UVUGvSoLrzVmwQzvjSxdVzGVgp4TxHuh4",
  "key28": "5faZuUcEVN49AYcBmon36e9ndaYqGTFhaTrjxTNP2zbHjfov3NxEvwuNxB2pqgdHDBFRF6Aq45Nn9ExgVut8wupv",
  "key29": "3BybmF3Bjs6rS5QtHWx9meJf4zH2NXRGqyAYPQj5qjZ77fSeGkQ2C16X85B7vBn9XsdLnvhouvNGziwG2ZQzgJSv",
  "key30": "4e4aB5n8srrv94i4pKr7Hui8hGgUMGYEVnS69BgTMqH2U3P8MUapzRWb3wKwf7aSSByzpGZWNpa6VePEm5NSsCku",
  "key31": "361dui3Zv9FfQ5fTMi86Mpp35A7LxA9gmZhjaPLQjxguUwC5ikVyJtFLq8LQVgETSfU88AtWq847xYCEXYUN1eVL",
  "key32": "3ykTmEQV4ueUACn1y6HDnQLBHSqLnuA9XqqLerQnFdp87A4GdUWb73STDRDgDLQW3swoeYKvXaqcP6kbwc1B6Jj4",
  "key33": "KsTVQXAy5DvbWDGTHBGDMLWnSNqKik7Mf4yZEbybvHWYR6ibMBc7F5qdTNg965Mp1wi5WQouwarSZazaBonaTfS",
  "key34": "yHABVLvXbzZGsDSmT1pH28XeuY9YepiozGkTiAqvEhTXKW2RtWrYpRsxMuwXcqHhkGHhbgk85ePBuAS1Bu2Ukcc",
  "key35": "3zRFa9y2xFmcMNw4LgkYCyP9npR7Ep2q6pbeoHZ8GxuELcZ8yRh6A5Ymm9mLLhntHqBMJi83gu3RX6cCVTYxAmWR",
  "key36": "9EGkGaTPkwwSk2vN4Kms5j6w46NP7MTv6ATCxRMWUWhbnYbvF5SqqASH63tQ9nwheWi1p28YRAUa7FLXKAurMJj",
  "key37": "t6jm8cqbPQd1AVuni5c7fQ3BiUXebieHMi1oZkKFnSFPhoSy7akbvpoX696eA6UjPewQPg1kK2FwBMsXhxEGMxQ",
  "key38": "3BkHScV8Uy1PP3c8j3UaJnSTrAjVxFgvgzawrsD8KKdMoHSre4M4pKgsfsumwjakvFgxNPGTXzb2pELgtEeqjQGg",
  "key39": "4xMrRuccNEeLLdbLgcRoaTM185R1X1Tj1B3JsyYB598jQQMkha7EUQX2ypRs4w8cmQSdAvsNz5ZAyhDvyM8zpJdL",
  "key40": "4y9Z8DSBCZX6rZ4i8zvhjbr5eE6rSRTyHsxPx23vCXn7gkZ9gH5iasaLZadzvE4YVNN7y3deNVvLaqf9M1B7FiYK",
  "key41": "23g8Snr4Xg2iL5ZRkyuBm9p3XPRLjLYcxpEpRgbwcbr4r86AMPh5b2dbgyu5u8AW7MvA2Q5fKi5Qntmvj24jvJYf",
  "key42": "46toa6c8V4fXwWUQjuQFMkkRqRsWSMWKAy8fNPME4qe4fgwS6DrSqR2PgJdB2AZpjzmTHB3wo5LgVfVJjTnhRJmK",
  "key43": "2KZhma7Pdp4Eba1Jx8ChRD3dLFFRDQA6eoNoSXb7FUcR4ZYgtBTu4aabXYSvt6M6z3gRmFB6SV1NZi2AuuTNjqCT",
  "key44": "5eV1U4hAwWxvXA1h1Uh6giLvM9uH8hfpuju5oFimuZqm1cRDgNUFsxbb2BDYu2nvpTq8Mco9d92xisuSXeZYACB3",
  "key45": "SoMKPYCPq4Yr19biJ3vY5cafa1yyuAqMa3VAdAcY6vbATdzSw7niLJS3y4zRiZzsKzBC3G6nuRu1Dc855Kd23CD"
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
