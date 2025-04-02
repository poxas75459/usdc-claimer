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
    "MUNa1MiqJhU5vqKNuq8PG1rVofmbnVyta7DiuysSLsPzPyqY8tzZUnk8EHF3ZcuVgwg2AdBzKFJ4dWfLZFeS826"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tr6gw6x8uJCPfYQhggVTSAhjm3wdxmvvQdis3DQvtco7FtR7Rbjsak7JpaU4E59kxq7ze42t4DxoxmmKxHzD5Xj",
  "key1": "3QD4LkGaC3wGKsKMbpoYae4bYFvFpTtSXiUZvC8PxEBqfXD9TUbfxRCmsLHmVPno8XXavK2C6b8JDv684kCbpXYi",
  "key2": "miaGpQVumj9MWTPPTPURdYqKwsz47a45ec6Pjo6zy5EyqK5fRm8vSQ6Bf6gc6zXv7AhwD4TAr51D33hssmsM6fG",
  "key3": "rAm1AqRjCR9YFTByFmBkNi1Tk3NAQ6bpF5es34xiGM82x9NaV2ChnmKk67MVDbhroXMkTbb9FD1sZwGdMQDsWK3",
  "key4": "55eaVEBxBJAkWW8XrBjF3PGXmmShmu46CcDPkqs4SBR6cyxrnSJrhmkMMwuzma271N2NGCeP9rKVVBbw5K4cf3VM",
  "key5": "3ZZTgtTwDrKjvVPTv6SRSLqp925ozaVpvTkLZs3jDd66Gxub52VSgzq8qx4MtwtLuf2yv32Z57jGgWe9UoEcNE1T",
  "key6": "4obrQqbGfEAwWddHtwYvq6x99ip1ZQh7zDSZpGsFgxfGMcS4i5BAxoVBtRiWMp1oUVEoW1qT9AuFU1pEfBnWNpKM",
  "key7": "28Z7k8YzDD6cp6FGHabSe8BdjdnMvnJmz8UT773N4C6rLUfwYxMkttxhpnQNHVZZkzTVPiV96q7smT8znBXcYKfb",
  "key8": "5xRqCbqNDYnL9eeDGt8jkTdKk794fCQK7QbUytJryQX5oc4x5a9NUtS2dFr54azzDrzVwcY9zuYqnvPpzKMKKj5a",
  "key9": "YGbbuZSJpkeiHFEBc654h1Hys5t5m6jgVvoQfroRh64d5TWt3hXKxTHGH7b9PUg35n9Wxw3YSnECeGQyqsGLCcp",
  "key10": "62163psb1AKKiXafsc2PLB3xeXciCSuoQE8Qn9hKUcmQj8r8SjbDtcyRMHyJ7BVbyV63TnZ23z97zLXbx6sPvB9L",
  "key11": "dpWfjL29C3TbWasP2GURAgXptuYg59EM4h9tfXUyy7HW17axjXBWwU6pp9YWNgKBfurF2qZZxiRoiWA6yygFK3X",
  "key12": "Tec5MEMFR34EQ6fT6rcE2WdUqFocvoT43C6TobkCWnL9bow5tQCL8r25fW78tzdwcBJk8mhtJX4opLkLG1Kyb33",
  "key13": "5W4Y4WP46tW58RLLzZ3cwdgpwQYgYMJRTkaCH5iSYj6v2T8GNEXe2PDrB6CyVLctLXn2UJiyuUL6a17X8DEdbiDy",
  "key14": "55wP712EfqT7NTfgwoE3GyAM6CMgpQV7CrMc8bFugR4qk9Ykvj75gavd6A3JJjHFxH1ZDtecAy9EvLGE65FHRF8r",
  "key15": "2vaZaNLmbxuT513sQ1Cm9Gt3iGDbqNSSgi5RinC3yM3VLAWvNZkJGL8vMA5FwPfgS2Phatk8WHwwGXWUQEVtD97Y",
  "key16": "4JWb8pCupzAmoCv6ofuf422HQFz67Hdmb7koVGhzRyaeRY5X5MGqfmdp5Av29MUYwMvVoXA426TAPnCwRnSqfgdJ",
  "key17": "26jGJbRhpPsLvnGjZ6z1RNH8grFc9w7RDBjZtnuKeDYk1zYZnC2S17vEHPKxaBPCyASdVKTBcLM3jDQEX4GpcYQD",
  "key18": "2A68gD1Bfp1Rm9yAdiM68iSNAsTHNj2iwhLSZr4KooVmR9e2KX6f4QVGuZGZa542TR7XBGmCEaeFQ6oCeb3TXBCR",
  "key19": "3GZLvy3HBzUN7DgWhU1Wvw1vHagwa91oj6wgF8aKFM2ufgVzBAabRLajU4C3Ndop7wGNVxRPV7AjgpnRRyd2Ut42",
  "key20": "4X1M1tu1nMgPMMCwQZL33PdK8c6WSnLcKjHrvkvAAWijnpwY52VtHbnkoBNFp3Wg4em6fGH2StymUGauLjAaFCod",
  "key21": "4PYmKgkwP9DsLnqGdyfSToHjjxdLWkxvuN5HEVBJPc8svXTLdzcEfXySujo4QXPWGXuhh4EqhVHGJ2dtqGZmrHVr",
  "key22": "63mDzxnRYttB4kRw8362regCnofhHnSfF5BhByz3dqa9tZsPV3XgHixSc2acgQAdCzEAS2z9zkAA7snf6ACuwDZU",
  "key23": "t9rKph7q9fVrFk57f9hV3MAz5q5GtPm6GB3yVm7ToD6MWUD9LLZAoUZcXSds4QWWu34SGT3C29MMEVdJwoBaB1B",
  "key24": "4hAafJenW937twHcVcoBotH1P7yCuNipSy4bEAv9ZnMFHoVdCivtsU2CtgG63F5EfUC7jcfNwPghfzx2RTekc2Zj",
  "key25": "4CAhYGgLNhP7Jg1rze4nfBn5FpS6ZAe7R94FRLfunDdkhT5gtkELm3KHSUJGBco2YtoXksQFb2T44jWPcF7q1H9A",
  "key26": "5bd6TVZoBpvg383N1aWqDjLgmu4cdSHTd2LLZp8BEZsXZfncv9nNQ77EWrSL6zHvhMmD4g4qfmtRi2AEhQWMubAK",
  "key27": "5i2X15gkLozS8AeJZwkgmgnddWPbv3vwV3qHkw6WotQvmAr5qHAwRaNsHZYfE5s1V5W9Dr2ZLqGE4Gb3HxUszigY",
  "key28": "4i53scULPKYQDJD4KsA3ktSnshQPnqZ4nCZmQGFz2btbXASFFmJZ3WX3HUrcbmo3BT3Kzcm6RebdB5PE8c14RSKk",
  "key29": "3ZbtSHZpJZNAyMd2hiHJjyJaXm21JZ2TimAgfrS7uaikq6tHnpEqdwPhUduquGD3651vd59Tc4mPaY7Fv22phd4u",
  "key30": "58PvPMBYqey2NdKPuuL4mjgkhNnwt8qjmThkjNHtn5q6zE7qRSJjSmRmrVx2NP6mXUs7HCQQ99cNfeK7WJ5HNMkK",
  "key31": "4bAgmJAXnXjLez5HAbr5zf9ts7uTvM6czQZAAfqAt2XYHbWFTgsioscupEVXDgD7wbuQzgpZT65uVwgsWNEjcf2v",
  "key32": "3UAP3H5Wwi9ZrQo1R85ZhtQyXPxAnVqMZr2hxE5BVFQHbapRJMZmdqYE6gK27D6RY8mGRZRHRTHmceKBfdXrvM8m",
  "key33": "WR3C5gH6SWQdtNMPJgR4ZRCB8XUvujLQEfAprfgT48FcmXYMvBJaoKoQkU98mM4NH47uzTpMfhNcRW7egz3Ap8S",
  "key34": "5AfRSDvygpUqjsD8DyTGcQ88EL67yaxwV249kC626kfojkkhuSAgcxscBFLjn3cE6c11tdtD7ah1PPa3zzJrvJif",
  "key35": "5MPcppJj65w8mbKfaFktWgbxTnKTMs1csvSYYQFDH8636feYtLJWKDg6KxyqVFBUAKk47mZwa1Li5F35AokW6SRt",
  "key36": "5oiYGjYpxmjRNd1SiBYQksACZAa2sxZdqJokuoP13Z5ZGyvPCRRzLR3f44kkP22nzzo2A6Wx2btbSXjyYzuidLmk",
  "key37": "YrgM2G8HwKuD3qqtSdgY8EMdNAXqHai5xncw69Kbn8Ua3QrVetfTBDcKk6uRwDPtxNMqtGd2f6VArF6vfybSicD",
  "key38": "5JnxRkbFhpb2HQMQzsYbUcN7ARPYBc6a9ksXpfN18Gy2bSHNQkJMfuKx7jsfUjcf7GLdVEkrgeu4svGVnUcmzpxZ",
  "key39": "2pRztdjTNfnVMGjTN4JbJX4kPeaeDKNMhQnNmmrdnb1UQsoX7SLfY8nCWeqJiUV1pzBEPEM7fYSgJZ6d1koWTpW",
  "key40": "5f3BcXzwbaa8d9UjFyWwqimTJ1KXuYSY86DXRXSPvwZfSg17EEo2Pkqw4CE963S4QvYQXvX18vmk5ShtyuYxoy3r",
  "key41": "2YSm3fzz8Fdm6pH59rv6wMmeFyUEn22uxbryakZ6ksFinUaxAauFy8tMamtENhc7dQrTd18mn3td2kttfLX6yVrr",
  "key42": "5LrsdfMNb8JKiVeFo8wim2xiB3oR17PX95PNevBKnQZrfjxmu6Bjd9iZasiM87Wc6uFWRG2yrJyZjvwD5bR2hTVG",
  "key43": "5FqZkATo8CqU8dYVpCrMa7DMUNovWZzN7bADTXE3UdzcYTUHw25kDF1Whrs9UBi5a62b1c8z486WzV9SMhqXToDz",
  "key44": "4xm89VNH5NHMHS5fR1aSeZPJKNywAe8D1i5dTCqLQbHHzjBBEiux71bdMjmHWhBTvfmVHtM3Mktqe3rZ3JFs5xW7",
  "key45": "57buyoYR12ZBSFu6s1K83mekHYPae4rtpPmg72gZJ2maw9wu1TY8jWB2v3mWJPEHG1cvBYeibo2CAA2ixKv1t95Y"
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
