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
    "51PUMrV11uNcErgMFxoNy7nTxW1gJwwZpDMwnVG9u2MVRKLChTBMbSNQwQg2wDUkgmKmJ7NuNWCminD1e2Uvqtm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8eGjmwFz3XyhwPyu9TG8Cvqx1HYt4JUjc8P52SZRJQ2gZbtPfnd2CJCFSQv1uiWnpAz5Dw7NgrYGszuyDmKmcw",
  "key1": "2ZzMSABnzeWhKCPNEhxmKHuvmsa7Q3ecYaAMYRvH24sNZxSEvzjmdadgHUDLeZirwY1pf4tXomZ8oj4XdYu5RSrz",
  "key2": "56VY7uW73sSkjYn2Y9x4EUYhU3ymiAXzdUSRQx4fR9NQHtTirerTWzkhcYgzsnhi7s1Avspnwn5Ln1Gqi1MU4MPs",
  "key3": "AdstAGqT6Zuro3XFRHGAixDgFAEPSMrYJNobP3zctYq9v6FNRVrki2kDdX265zAidMTJXWHeypkU7PDR56Xc63a",
  "key4": "WvW4qy2mRVupPqp6gB4kJGFkAxqdpDfjVLNDLzMNxSHoRrr4TobPFZ1bm4ma1Bt2snvQWgsVXnQwTB29Q7o36aX",
  "key5": "2pkXioC8NKn3LiNFyipr7fw6ZGXtisgdbkMUJMByDbwN849T7NyzuqFztgDDadqLjNqVSafhAhKCUrmYy7F97Ezw",
  "key6": "4kbgnp34nXM9kzAS4RfxDiYXZDzzhZdocK1Fnz1usfwFT7Q5WciH1AdgZDtPbnRGRNCsjQ8Nu91XxEhiFVHKvh4g",
  "key7": "2hWZE9XW7X841AK2LvujJupduPU6hBtRtthHih4D3S31dDTcTjLvkyaj1ZqjAcnMn7Gxym63SYE6rpURAeWCK3Fr",
  "key8": "5MCtHhKnHTqMCuBjhQvDrwt3Ae5tFypFG17Nc7gTkAD5cKD1PaCtn2MXw2qDTYhCnp3cvG6GK9E8Hoa88BrbPc5S",
  "key9": "4Q7RT48WewhS8zZjTGrPSwNFSFt5rtcKK2UNa8i7WLeFi2sJRfa4tnUsrtSaawokom7cNGzxmMXRxKg5w2gEuAJn",
  "key10": "24aNjpmHzTtz47uMY9YkbGdd5VKj5DtB9VkXdBNtqowv44nuaVkKYydCzxQNXx5CaqHqmRxj68jzsHJHzHFGXMpP",
  "key11": "4QXzAnrZoMutVHJFW43CsKfEAkrmc1qRkCNj6Lw6APCLH1kZi94LsvEP3kyt6PqJ7YNqMYP489ecET16iKZPYgj1",
  "key12": "2tXrhmRzwRRJ3DhU28dBT42mRsZsu3tNDnbWqiuEJ5ztVqRciYBq8S2mpprCi3KgAxX6p5kXNkELoHoRG2CrvSJu",
  "key13": "KFFH4FgUxzQuLUnXL5U3jjANXXNWKbpdHbndoQyCkUDY4xNKNEm1XWYJzoZFXXReK6bFH2yvTNA74j189TM3rnw",
  "key14": "2GPY2UTVxybXiHMC3KizmHwcUGw2rCqbSFRYDUbgpXhLGJpuHepAC7iRfS5RaKxtUdc96LDgLrTZVdQdWDmuAmBQ",
  "key15": "4twLSAWtAvF8Lepy7Rm4px2whhiDfs4PuserWZ6pC1GSsxVvpuHpHFabsAqyZsckecMBxTfh3bhyYhK4wVtpMQYW",
  "key16": "3oa3rY5zmmfc7SMKKTSzrVqUdmmHtD1bpz3BsV2ua8Wqi9kDoeWxGwpPuGDJg3zZG1cvDqivCVyUTNNjdHLFhPkn",
  "key17": "2SSpfadzgyyg6EPDkZ1Eg7kXBrE1jBTsskTTzuqYYT7aRAA34YNAa5YFjT1SB62woq26ZQigCwcFfXqgQgHRM3tJ",
  "key18": "2terWxMxbdFvk1MK6uNoBCF4vTcsg2xgQLVrRyN9jb5XRmn8CUWLX96niTo3C25LCeKHxjMcieYQ9ihFUhKfcLjB",
  "key19": "5YZEvXguBp3A1EzKzzvvb2M8MSynVhXrNQm7E2VU9hqdqum9NFtuLBZdn6r46DaudnX1nVTaSE9tSQNeMSnYLeB9",
  "key20": "3oQQi4CnrAr5cDtU5bPaqFyifsxJcouBst5sQuFN3utVL4wVJFFWj1Vb7YomVkbcCx9ot4RfA3irwmDrn52A8pe1",
  "key21": "35Vvivz2hmkYXQckHX7x4Fq5TM5Jjovmnvrgzmx3qQUMhotjtNuC2uviB7FVYc4oWf3ECURuL556zuHz6QGsCPVy",
  "key22": "3FsR4xPvmKk7Mi4d2zVKD4rwAyq7XSd69v859qoLiGx1Mc7njLxk4JH8QwCfur8rHi4mLpLabZkdVTGxJa1zeYUa",
  "key23": "5sAUYehUMyQFgiRjjvfw8qtXw6cXfY9hPZmaEAmP5gkkhXfmRYSh77jtbA6ykCg59e3Xd1ERLC4AbkH5Am7gAEsm",
  "key24": "3WBAdi5n68z9UeVFkUFKdiJvs7aGLkDc3cMwqu7KpJUDmYMx3LPGhA7b9eWA2Z49SBoetTEajZVh2UZmA5ifCcNZ",
  "key25": "GwMsjbeBQvhbVNrvMnc1S7c2ZegVZ99zpV98wR4RLhbHcmDynWttA3SqzVFEr1xxRdYPMt2S9CpJWH4DWhPSAxA",
  "key26": "2kcRiRL22FiRfFwYMBHQiF6hemucVhSMSGxwTbRBbBgrF5xWEv5UDGVmGKTqoktyvWZY8DfQabFx3SZNUCrU5jP3",
  "key27": "3miFCrPJRJHQ2xteeTAj6KbtAz9a5p1FsFzrpFijt5maJmq7Mr1LQrtJT7yjyLQFoXD2nHurNMxgqNZdWMvDCSDU",
  "key28": "AefAYpnCtuT1fRFDv4eExamvnacdJPFccSEnnEMCWzGsbYfLnrNYGBXSuW2FNvvD8kNH7yUuzgLDahaYk98dPkB",
  "key29": "3TfQa4CC4bhwtavicxadgV2SHEPUkQkkApz7zbaWAPgK6DvNyaVhm5VFdKAof4kffXbBozNbTgSW4St1NGvWpCAi",
  "key30": "eaH2o3nuKpkVvD7wwPq9hFYnQcYGDJaqhHafcja3ZnxyTHThTjXBMzGZdLQnGWak6zKEi7MvcPBn86QXNKAs6hm",
  "key31": "tQXJYXH1ciZLNoUd35LHQVprZEkTMW7ixNuCEQByyHRmVqFGuC2ssJiGaZySEa39c4NPL7411hTuuyzHaknTtPm",
  "key32": "5XYfA2HXpsnhkEEieRHYBNLNUGwS5aF923QtpMoc8bX85G59v9wHUrGyZGBhj5EKct5zBfvGrxwJ3wc4iMqZwjuK",
  "key33": "5xHpLLfa6VZBxmCDwAQo2Hkihz7wRVEC2ni6Ze6rp6Aoc4BWhdyTyhEF9qyTnMZWB2Join5FyrhL4rUGW3ZdJXgn",
  "key34": "FtYbZmKohg1hYHnoYgTBExHYxhjNiSS947EwrUbzjWGxdqztYDBTKkwarshWVSx8mMNg4hYJ35N6swvs4fWNTwC",
  "key35": "3WzMJVNQedr5fUhPMMGGhAiw8jF5FfN4UW2Qx5pX1gba7xs6eaHHD6x7Sx2k7n7gbfWh8xaRUafdY5u1k2iRpQFX",
  "key36": "3VSEQ2MxnjcrhW7JubGN8RhnkzdjMb9GV5F8aQEM1NUpoT3QTbkeoXeUaxVrJw3JcUFuVtQHbf13EN9Fq8vmxQpF",
  "key37": "2GyiGAKf4padQApe9idNMSQ5E79wTJAgDW2rcELpHmqJhKLenSgViW4ksxLEyvoqY1gLyBAWMFfoaPZSMABWxjKY",
  "key38": "W8YpVkgDcpgd38dBBxvAYuBTe7YQMj39RjfE4iqYzjg38Cgc13P7idv9fUANEXKKtMa6zwPodZQJsNdew1db8gc",
  "key39": "TijZUMNPVW3d73vEPfbXzymiqyBasfjsuy57WKTvbibJiUM66occrcWJcFWwPd9qMG65Tae4nbsRniE5vEiicqX",
  "key40": "2UtLv9BWJEPYyxGQmUGBoSFLGeDFcNEYi3CeRcvku6D2G7jw5CdthDwh9R7eZNiYHAFurzcMfPAiV8SVBMYJdwpw",
  "key41": "2sGokeZ81d8DuxeS8tSs8MujcFpkoT5LBCvMFi7ufwmoNZu81Fg2U1pQeb5jWHBVBsg4CBQdSgwEoip8BxvAV5aB",
  "key42": "2vB3nthFuR5zaGPYKhFDQECLiPQ51sS7h2b6qpeE8Zn2tC7czzDVgf75gtTubecY5G1R89UTGGwVx74vVGU1iork",
  "key43": "28va64iQDPQjEXsLCDyvcpiVxD7nd8KdF9NbpqgutpD2FjuNpXJHKmgm7nfNFqRhcuP45VixCo5Jgatx63tx2riX",
  "key44": "3zMiSPsPDdt2uPE7WV9JmNHADeKdsq259ZRr4Mn4giawkkD4X6j1DdpKet9YK29HknJiShCAzj8hLU4PPQ3tSnyC",
  "key45": "4vRBiRp4nTCsrjUyZNptJ6RXp7N3QDAsQLEe9m8d9y8J6DuSviysKcAYvart1L9evZ8zgFTCaMxBQi29WbTjV2RH",
  "key46": "4FzUeiN8s3m9qWZyVWinzVbHwKSan1cjtWTSXhC1QUjmooVBigpfCu4eCNs7cbdLWpZEZB916mFMXhPtVi1G4a3V",
  "key47": "5DCtxiWj3qPkaSZLrm59Y3GU9FoNpB8SU95FAwGrAS71agXoBEErWkUJ5VsR8uxzX9rnR3EFdyKbY244HD6J2gpy",
  "key48": "2kPqdhuZ4U7f6C7Te6CeibnbFKwUq7xB2x7dNBntmECeGjh7s6MGS3Hnsc4x1fhaZejkDGbgyMbiSdYkqg2YL7JT"
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
