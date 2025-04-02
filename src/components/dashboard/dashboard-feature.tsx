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
    "2SmP1FwaUqBasHbT1wcKSAiiLpgsv9rzAbw1BxHYQLDL261dSjVrUNjXmZ3umAxEXVntfKFHUojXS7htV3ypLBo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NagiUfLPncakU1zHrQqu9BLTpD4iwDdkumtThwMzNeCVheTqWkxd4vRWYAPET46hvr7SMiwXnXZ2A6Z6Gm69ZSh",
  "key1": "3d7tJ4YYVtdD9nUCVi6fMGqAyA6MPhKZZA8saydKk4D3Xr8Zsr4xQGBv9pssYrNfvdTUx98jBA6bj9YaS8RsCqEh",
  "key2": "65KSXz56mNYRiZM7WVcRtdGkvV5aLbXhfV78vnDGfAdmUGwzH5bzRjNPNBBx4n8gmAUvT3wANzvVdu9fxKzEPA25",
  "key3": "aWhJhWLVgwnrvJSGGbTLgnzGRd3gV4tP57J6sHtGS5nzYLKoEhNnCEfEoKxyTSFqAi84MErZ2Naf13US6J3pC9q",
  "key4": "2qVjCbLaFKerv8FuoZfiDF1htFSTnkZa2wjWVVMsBFuhPc2KdR2h7fdkGujZdpsyxaNrhYoXafN5YGeVorBaa5zv",
  "key5": "5E6cVpfXndbKf9616ZTdP1UiZcwKsHFhFpWJxxbfWpawNt4Vhq7yKa8m9vgueJtgg1SRaTr9zoxeEakqNNYv7gKf",
  "key6": "39TfKGpMabduBzqnYhvinNTbFKbXx7VHN81qehtkcGcqQHuYdrU437hpP5n8eHf6rF4dfdDyLFxqGMyLNSc8CJvy",
  "key7": "2ocbsU44AoW4YCBptvvkM5RuyB6P9EWRLkJK1AnbU1oi6dR9rsU1HNVbAfy4CCBj6rpphgEa63PryHic92hym7XB",
  "key8": "3MH3BcwhWK9ei4aq3BgxFYtEtDPTvi9cu1dnLykFCgskycxnLrnExTSgbyztavJ7rSE7T6YR3QN64SobaGVbnN3K",
  "key9": "322MkBpfE6t7kp6rui7WdTbPwrfnFfubTecUwxnwVNy5A6L3tEB3HGZaAUoNLFdL3qwrVe5qRDhZCoKF8Vhxukau",
  "key10": "4rxNvMsU3zvQhv9e6NpRjBcaGGqwsdZkRN2ZCPLvrLHrma7KZDB11TG1scPtCm3FFb1zs1wqargmwnjMDStaadBY",
  "key11": "2tQc2HBKRAG78LXUxJFuqtU2UkNGKBsTcFCawdDJHm7ZXmifprDtWHorrccgqGHwE5V1cNQwY2WTvJwcrK9fgKVq",
  "key12": "5BUZDnz36yEBkhyiwGYLs4dPbFPSCxwJ51e8vcW5Sh7ZHzQeZfZR3M3p2DBto5MsWjJk59UCAaeGhTM61AbySJBh",
  "key13": "4F3Gby5brBCEvbFuReDyJFzJT55c1cKyUJP7TNsk23K92j3NDG89txnRpEddnHbv4ueqPdXXWHnxkGLefgt1FbuN",
  "key14": "5JxMoGqqcJiyP5sgkWD6ND4uEpGqE93VArYY9ewgzVwyydDGrEbXEtevj8SGNa8pRTRCTZmZJVU2QisWoUTeMpeh",
  "key15": "3MLVzEk7sPEBipaMQmGPrP94FA5UsbWQevFPfwVREwcNgqrFaSiqjTodE5vKZfgddfAz4sw8apADDhBV7BuNJD4k",
  "key16": "25isuv5vHEhYEvAV3hicEhgvHVcERXEN1ZVJKkRynC36rkKtLej8sgj2PSB3yCHn1Ujzq5TyykBiU5iRTwUALA58",
  "key17": "2oV8wHT7pUe7ZQ68Et16vi5bi2Pv53trD8cwQQQ3Cz4kcQkcQPjjhjJNNQ74Wpk2QVmKz17p7YgXCKHJ4V6EGL5F",
  "key18": "5FWKB7YSR8hi76R8KkaypgZLQeKiN2xR39cPj2T9JjdkGhUMbKo1QXNUJATQLrkokbgucJnUxmJqXFY3ognDqjLx",
  "key19": "3o9zf35nB8YQhhV46jxXrweD77LPPPd43A6a2fX4YEKt5TKMhayxZ3rAJHaNYzfyRfwC9xWEvbYcJ8rH6NWZ2UGv",
  "key20": "4CfnXia5j5KQBrK9pXKF8ypmNKxwksQz9d5R9CM4v1u6b5TmU6pkETHubEoyStsB5HykGmfURfRHeqepMPHRbDHM",
  "key21": "x1gYHVsRkbju65Ff5CL7UFAbaUww1do8m3TzqZASMPmGptPrWTumkYVc9rPkH92G1pMcz28NhYitjTHefjGBoat",
  "key22": "5i1wW17Zoc4WvFAndSy7mi3qPjhJL11k6sEiXEwAacKL9smVDqWKgnKphKDCoQujfTe7nk9yhvpdGxoQmUgoUEKN",
  "key23": "4yYcaAoomgBw1pmYWTgVGCGhc3NeFCp3ZPa455PWxEtQ33vkXQfuLNM1VQd2UCqwsNyjNMD9YL85YgYvUGxhYod6",
  "key24": "2Lj5GGirb6yfcTMhNzdjJTTK9GLc1r51onMTk9KJXo1AuwwSgSRq4BSjqFotaKpaCiJy8SEckiiScHRtHVTevkMi",
  "key25": "4MZt6kDNXFGNFiHpfJiY4ggvdiKYwoWbNVksgkGkdgFq8EdVTJYzvDNJbG3gdt6WRL2YJGHBa3yUad6KWKaAvSXR",
  "key26": "3zKQqFFzkWFcFvfr6PWXDTQ6XxtDfHtyRzzxr6cZS8A7bQN2E8jFj8QJjXV9jxDdHfen42zvo6dMcg8UwhqtmDUy",
  "key27": "3jor1dL3CgbNLajNFVK9ef6J7uhpeueNAvm8v4uyT2UhvL8TwykgMvc5HoJapELmcavjK4zLj7xpdyx67ZjGE7se",
  "key28": "4jLyPM9pQzaahXYJ7c2Zy84ZC71552uU1dR5EGdHp3mL5Xp6FZa2LuioZ6YPqS4RsXwmQoQrKzbNh1XaHLoUn46j",
  "key29": "62FYtmrduy6upCNZV9grkAMs66PmVrgoE1kC4RfSgHKPhDFRtKdXbfuTCre9uQGVZSCTouP3khRm212ADK9kE6YH",
  "key30": "4VfsmqzH5ZgR3WKiWa92tyFip9CGfxKyAyTXVwkZATiV41BnYMBWtkkDDLSSCYXuEUxureQGAaj7dLzm7r3aGKRq",
  "key31": "bMfbcRQJ7qqeiFZsjxFCeFcYfFKyfWmaBihRpCdSUCNTCUheNxGtyVfgc3isBVbSYMLKFosYCEpekMv7LbywULs",
  "key32": "5mJEjcfNyJLaAJkAP5KdR6XbCrthDgejnsZXYvMVEoPb3BM4PU7sxuuq4u2WL7Host5A9cqGUYMGBZmrniR6s6GB",
  "key33": "3Wjtcqa8t2R5HgAi5xT6CF7vZH7UouoNuCkwSox7uQ9Wx2V22E9TKLrQwTPtuYGwyzpwAYA2hiT7SQnLPjtYUhU2",
  "key34": "GkVzi1PMqMnmd7PBCq78ht9XEwQ8jrAprQi8czbGbKj1qyxDQBGmmAJVm5a6iqvGkDErqjgriREmoosP7RoUzSM",
  "key35": "44RdWP6Z8Q8hXcm5VFu7SW8xhCNZ39NFW6Z3TJmx8ZRcQeByELbB7G1Ad1uw32cMR98UYScH1LAKJcmCGh3ubJaE",
  "key36": "ciZSo6HiovNBZzwCE5Y6YZ3VP2hzqJuWPSijHu2X5XpBs9NpV9VG3MbJwSVastveaTUAK98mJvb5niWbFCSmjDg",
  "key37": "RV8Vr91sWiKjSnXcxag8RqtTf5y49Gu2PezwioeUgTLSbxe48qK12hmXgVidYCX8fNzj8QrLU1c6eqpY8ELFSAm",
  "key38": "2JHiKZd1JbQjxoznm1fu5Lwn7CXzwKKwzrQXhZwRj8soEK5oCnHmjbUSXVm5sNJGk81ZtcfdmE6mNYxFSiEpEbiV",
  "key39": "dVExbQDyp6Ss6fxTeSBhvzmsuU65hKF71p1KC3ugWDE5eYHrRRUWTrjr9tDPd8fQMBuu5mgFpaibittzZpg7KG8",
  "key40": "5cZR1uqt5GHMaeVsmpssQTxY3TguzQJB1vKHMiRsER8BeDhoRk9Xj2Vjw6GCHU6aZmL81fUvoTyY4ePbJt6kmKVJ",
  "key41": "AAabEcoZShp5zBGUNEPgHzcjdKBWPHeQRLumyBi4qAJVKoCuKp6xGsNBWjaPku4fKygPzaP8gmsi7niEAaF6dVw",
  "key42": "5u4ivEFxxEVts46dmSFvpJxdRyy5Ea5fPAYxSgL2xLiuesLNJ4FSs8hsYEKYvoQyGkVAdyseKnqiuMo8kzVf8jBH",
  "key43": "88BdZcYYJmoQcHUu8wcJXNXUY2KBwXcTRkb4ZHGCZHZruagxfpf8gRw43dwFinFJRUfav1pLBx7sTPAFn1w3niL",
  "key44": "3gpJ6hByxxz1JqjUb78o6R4y13CSjVfnvwBvD67Xeu7r9HWaKKxQXWYTGQGewBTuy4SibsjW4E9ipg1oZ31cfY1h",
  "key45": "26UasTtXspPNmCxy4EddP69kT1bUjjjDcwjpNfrSGRCYBPJTTs2H7Rwdu5DDx7SgMnK4gRLEut6wBy626iBNqPw7",
  "key46": "3XhmuBfaLue2czsPsp92n12qWVDbEZnHg5jUB7SEwb8u1bFV2Evm92VwLmQRMob1gSMDEmDYEhGZdcMqAuxFRWHK",
  "key47": "5796Uf2WTsE5tUHHBJxK247jAVjMxybN85mavSpXhUXJRxh9LNV6HJnMSXKD3g6MLdPT8d9C92dAFiYY2A6eqPia"
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
