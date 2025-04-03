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
    "46HXbXamxYSUqoT8r5QbejMnhUteChKE6NntbBg7yKaBSiCYyzJETqpopwX523cQUGLyVVAWpokomRbtN4p6SXMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hh8nfgRYRHASV9gAiUsx2EJnVtfw7Zr2crmuP9ybvhZFmUfAnRs9Ck8iQxqsrHPG8Fmqg3898gGUw9iTupiPV21",
  "key1": "2quxgrmgA6Xykv4KS7JERVt647gJ3MgPRqvReSaSmeyzG3DWN3QYrcpP8vRWsvfU9T7BfwMsdUvAYXj2ULCzRVcx",
  "key2": "5DkBds5nKsMo837YKf74Y6Say4Tm5iPruqs6NCbE4q6cWzCJNAfn6b2MYSdgjMELDsrVG4TVnbAErGNgrjHLZEn2",
  "key3": "5bfXbhzbQUm5dtCuPxEaDm3kn4iLem5wYbioPheRZWpAhWmw3ex2xFA9s1em3wnT7bAwyFXE7qmS5adviNT3oFsC",
  "key4": "2c2jLj5ZhMcK7dpBnyintF3aKYhwttP3tvJnXCnYt8r3s3Ex4VvXVfQkBwscz3gaD3uHpYoUBqcD3URAKjkWemcX",
  "key5": "5pGhrMT9x1bdcvAJpBmG98YWrGfwqDYHFq5T87wFut6BSfdseG9cwb3vdmWB5frdU69UfwnXXFjEXN1sv7TJFszH",
  "key6": "fRLmXAMcfGCc8EsNTG516zp3creHZBywASqX2f78LHRzUwL1ccWjxUaEG3zYmkNDM8pQoDfqjaKLExttJqZfpQv",
  "key7": "jMHn3sZbKbrA22aRdjdFfn7PdeXaidby9nJW6gBapU3M2on4NyVjKne8s2g6pKwKh6zTMYEuSo8XxLiKCeUNaaY",
  "key8": "4vjLYfyrK6cHa1Rbaektc3qNkdt5r9T2caE8Mt22yriYuu1kiBcjFY5CHkxGw1nviHRLscj8DH35sk58DDWExBXy",
  "key9": "61TYcvogtqkNgXhVWc4h85dKnTifDY7Pdqqg4tiBduTqM7DSUSDZLEpABcFqiRdm3VXgRrPcVgp2pN7zaTmR7mZA",
  "key10": "4GadwrAApoz1dFz23yDnADXAourZHdZXd3wU6RJEzDoYH3sSD93aqnrdY4cMQry94DfuCyooN4LjtyiGsUPZLAFH",
  "key11": "34A5QQ5j1EifCFJo6T89VDiTu9pxd422oz7ichkxgD7Y5Ctzy5W4ioDEyhfvqrTPJ3bCH92PP4z1ZU2S34XYSdAU",
  "key12": "4wncGr4ap7XWqF7b1T3tBmCrNQPdMVrtdGsp1q1U1HJNKwd5UxabxCHCFEuXuyzGgxr7ejor3JfzXRVGygaDuAuG",
  "key13": "5EATS7jLXx2ymfxP2ARUcTugK64kScAk7NqrKRXNAZ3ZxCAE8Y8AnF8izuAkotaEc5XCWT145vZaN9nuWYBQsFrr",
  "key14": "9qmR5JMgcz4u5aGtq8Zeq7CMH3u5CCyHyjiqsJHTkbAB4V5EKiCbCX1BYeY3vdZV6FzALSjyhj5RJTyyRBPD7FF",
  "key15": "5my91RbmKBe1uVWm2q53XSz6mG4iXwCJuX8QECU1btLnHaywRRZiU3Xb3wcX3gdgqD3oVnRSm6BLDX1VnebMAB2q",
  "key16": "2mEwtpnk2KVcAVqXnmjL6H6UER1vwWqMtpV6nWcNJnmBYicneCTYAoqdKDCZBVtNgwUN2qsjTPmsyfJQe7osMUzc",
  "key17": "5qQ5yXLtzpDWdT8QSE9iLaMxjchmR9kdBuKEXPtGZdLwJ9cLKsXWFNeztfNAmRGKJUH2azyMatcpRoPuDdyXc9J4",
  "key18": "4mMY7XTKMDX8zixxFpLLvFA8b2SVNgNmUuEcYSpJyZrmQXaGDq7WCEy4aKXKCg98hJhgkYg7eaPmafBFp8GLpuCh",
  "key19": "43xkdjDDSvHnrn974J9m4WQ4U1qzXJVN7AwqEa9FZ8xCxTrpgbUJ66hZsEia1XcdQhdDrcha7SajP74r1Sm5v8WM",
  "key20": "2942mmiMXerTptVZns5zn9rwmfegGqdZXaBd4fcopgLJ4SXj3yqDZf47pxU3p4d7tAgB1TB7z52EET1xxoWAKr1o",
  "key21": "5KEiC2tDszjX9F8hKj8hFKXy6deoVPRCYperDFTouf5rvomEDNs6FX819iK1eeNUcn39JNX8X3NaGtVwMkFyaM12",
  "key22": "46M82e3nk4bbN9hsJeUxhBVKDrb5ao293qsUrrY8WWhBysfvhdaAwiLnti3cqhjLmRJPWPm4Dwwezoejhokoeemd",
  "key23": "2tXX5TzGCBjJNHPfZRR3VgLWA3bjevmCwu5T4g41VVBs8yUcn1HY3uqby8gR32628FUkYM6NJ3NurxcLEip7ayqN",
  "key24": "531mNzBNxhdVWtktb2XL3Eoo7r12eLKabty9zwtLwB7p9zvgvKkCoN9g37cYGKx2QFZrHSh716NcfQTCnZ7YyD9m",
  "key25": "4faCNa2582qMQb5C8VB6t12sGdxefUB4dVkSuT1tpbQFN6WX3MA2ATPPQtkEYsybH6VtW1V93XcqR4Kh4ED4ynN8",
  "key26": "3zKbopMNtNWqp7xeFP1tmxr1JSGrmG9DdL3E2KythQNG3qE6bwLowXLL18HgnjQt6GXq1PMKY7gaPKnQxgoMYhbe",
  "key27": "23VyTUjtFEJS6rMJZER4C9VczntXkd58YLC6uJAJGcPNwcGYDGwiJkCtvh4vDj3YxZt2CEyE77ZzuVHtw42VXBqR",
  "key28": "4hHnwnajtsj3z4fswZT6rVfhYt4P5M49akYkkV2yU9x1Kx7NWSzHDRhqzbwSTUr3GzRH6gfhs7cgigc5734RJFfT",
  "key29": "4A3W9jUUi66qrYwX8ts4cTDr18qxxpWs3AtLMXcN4AtUsm6MAimeBgSqbMCqZie6k6Y7VQ4rQaNE4uH4jhWJVSbH",
  "key30": "2wbVQn4pjup213cXd7V4iXhN12LxA9peghoF7m6Qjitu6rA4uB8mQ7xzzkyxryz8kDm8MSFaZnjt8y9b8AkQKCoy",
  "key31": "4XiAnWqSE6vrqgxowdagDGhNPKcrHzZ8ijzh3wh4nPaWwyFRSFiyj3HDUtY4HoHo4R2sLgiLjMtfTFjrDgDEzSkH",
  "key32": "2Aj6GQPCHxCBQNEnASwCtj1cQX1wvyhQThmtLp7Qe8FRev5rFxWSAmrbo5kJmTVF4xYDNLqHsT9DsAcW2cPzE63Y",
  "key33": "3pxY9ysg1ZkXfrGibdMYPxPbXTE4Fj7cVnyzc4diYw1pEcrVoUz8gPLTCFaBWXBT2JH1N3EKD46JK6vDiNhJyfgz",
  "key34": "5z9z9Ukx3g1cXXoKvnJk88HwNfTVX7asVnDVQLH8NAFnuVHp9nKcxkBvfADCKibQ2k8NcQe3M5oGjbV11VVcuiuP",
  "key35": "38QZdcrH7Egod5wDq12pDJyk1snmJhgUKGP4YSqW6ghWSXzCKHW51szMCVX7bhnsccmyvpUV2TXagm5bX6iLsEcS",
  "key36": "4L4rS7Ciu2Zdm1X5E33gPCLZ2Xbs9MqJDqrUixAyAbyY52NjHRkP7zWXrDjzEMEnYw9ViVSgtB9pSrSJSESJbqbg",
  "key37": "ZH3EeNJ1HNa6mx3BVata9avzh14LuMAH7tU1Yvv3ehYyTo6GN8m3NmM5151h1WgAuet3R3VSoNNqvTd59XPTyV3",
  "key38": "7pBfTns9T1T9QKLd4f5zatfweaVm55HrbrP6LgRogYSg26afwZazmGfBAV3MrQ6MqxnJYhbQ1dx7nyPtD9Awr9n",
  "key39": "3DhVw6hw3hS1nXMsFh5zckYiSJnqRhE2zDwJxsRTn3y7yXwbsQ59tN7FZYb5Eeti1w4wv8YRNZEQDrxdPQLJft9c",
  "key40": "b2JKuoHUa9oN1R45VGQbn2gu9quV537yY1U4zV6Fz2AM48Shxu64Je4b6DmUPEofnq1LMc7onMReiACsKQuEp6d",
  "key41": "24KwYnEogXZa2BHZmSkmjcXdX84pM9wrUbfJjFVZ1ZAAVatiBMLYzuuAhxqh8Zmu1DM15qP61YXwEtWyYVEf3BGx",
  "key42": "GMTNCBN51jekAETj3QXDwVfursfCLW5oMZFjnv5MZzjdRN6gGUzcAyi2rNdPe32upUdW2U3r8YEBVn2R27d2hHP",
  "key43": "2bUT1Lz5v9bCtNnGAHYWjXeP7o9e4UCWr6s24TBt8aEDuqBa8DzfkTtxagpcrncn5LgGQU4yfn61CsXp4mCFLFVR",
  "key44": "2EuBRcKhbXX7v3Q4VFyCk9rhYYKhk51MyGkTmfrEWZ7Wsj7FL8Seq2XgFywg5d1mr4pd9yFyv9XYLpmXNgDp3cfx",
  "key45": "6iMeghEQaTfNdVXB7J4yELjrht732uScjCxJWEsbUVbNC9VAcgJ2yA2Ztn7vj4WJoFsKyKkD2phhFHT9qAGCRVN",
  "key46": "4EsP1WoXpTkFYZTZaC5XHFiCS4gqcYzygqxUmiB79L6LNhiScAqRMGEv7PmDn2ehUoxivqh7v7Jvg3n4Quk7MiZn",
  "key47": "5rCSicnBdJVSuf2v8feSpNmB4dvfEUZd2PVANtzRa8hEe4Zuq4v5zuBkKkr3HvuAnzHAvGEqwTbxQjbV6KatDdF8"
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
