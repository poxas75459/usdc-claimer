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
    "4K6xXEQRmhqxsDArbWWy6ejW6KcVPtqubkqXVvh6tWpB7VHoCSk9gSC7cBynDZgJUMun9k4C9azGjG6pSMNbARDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNZN9AkL5nmk25VVZuvb9WnEwa7r7wR1tByokXsMrwHvo2HDq17bwaNjKAFbMgs8hJwaL3kYarLdfySJX8MovjK",
  "key1": "5ppo2CsLKuAqWRWFs6hwfYgVP8CgRfiSR8HaijFUHxqsyWf6GdLjzhMsqkKSLpPApJ3WpLA3Cw9Yp45bn9rP8qq5",
  "key2": "3LNH178CGWLyAYd9MUQxvyG7B5ZrNNqs24UyeZjVL5ej8PXcsNzqd2vLMNgS4uogFwCFNtF5WQ92ZynKPHa2mRch",
  "key3": "2QuGvN9tVhqEjT6ehqMeNG6BdtdxB7YTYS3wj62tDhid1MjFSsBBpNrn3bNq5NjaVq2LBcQppyaCx8mGABm1YQmy",
  "key4": "5Px7zJqHs4qRjK7PmDwGM3AnJQipW8qQ2qAjUuSHN9bTpwUuuotfHcY8yAeNyUthyYy1kffpSwfVDDPLpFPqk8QB",
  "key5": "2h1yyek4TRTbc7EMXob4t9qmxUEXT1AcghYdqNvoQx1GguJBCrToS4K5eCMkNhqyLUVuLCFi6Put3NNVUrPCQvMo",
  "key6": "37APMsuJN4Td2AXSVTQvMYVT4UDvKjDamEGeYjv6uGqfbkcAgpGZjcqt5RVDyKv3rbEs2VvcXcqYUtsCevp5Kgnz",
  "key7": "o97P8fsSKapebARLKQioiXb3i7StyYz17FaTDA6nJzq49dAz5RaVZxRBvnfqFnxuvRsrsu4bbvr3emG3cQENviJ",
  "key8": "RJ4fX4wLKdefiFsN4Vf7iHQQDtRNhRUn7EMMRb5MspJGNjiZUuV1U7VwfCzqUEZbef6mvKEegSXFcGDTx1maaSv",
  "key9": "4EMKB7kfM8okHZW14EXpHmrdsKkha8FZQeVK6g3aqhE2sG7Qj6rhQUnMxLjJwMpnNyphzCkj7fKJdcnrT4sHTVRG",
  "key10": "48B2Fn5JD8XSkq5mQaiv4DAgGtLC7QE2zw7wTopGARXMpRwwkGV7AA7tW5ezm7Ysymk7Zm8AqfQi8u3wKnPRbwbN",
  "key11": "ka5iVFFUFS8MycjYN8ivLKrUQJC9BTC1BzQVN3hnyedXFKFNHXX5KzJWBryu5GXo9bX8YKf7bx3bq5dQrRjkvbv",
  "key12": "DTH4JyB1GASjyTtjRtHP55fWXSTSyXrbYpbc31UDYVTcrPKhLcDQe2k9dW1YGnS8pA2fFUaR9UvqVmvLUKixamS",
  "key13": "46BtgWAtfG51j4jfTyHVabhJkdQG4NJLGaJdBpSFE4eZ1KN2qVQT1u9DJEXKftk2iHUTwvsfEqFs9M4iHCwBsXBJ",
  "key14": "4rT4kfHALLWgqNq7cAuxYEJQyRvavJTYoFGQU5wxo3W5u2G8pxmxwARHoEKNYRGNrucZ6QfFQGaipRzMTaqRay4x",
  "key15": "3mzKJwEYYHauGVipZWErFGeJ6hpM3vxGHQw2bfeY1WU95Du8vtKF1HbMA4h3F6NjYRG5ZN5wfDVzkSWfDyEJdFVi",
  "key16": "4w74r3dPGy11BmavVSPsbD4tXhbXjPDC2ZU6atigD8CkrAYX4XdbkvASk9cdZhqg6uJbVdBqpyMDmCk7E8XtWnPX",
  "key17": "3tt2ATcohwzJuSZ5PZPH1meCTXCPqJYazeMRBruTzTzrPH2TeBiS6TSAcV8xp9ntXFnMb88LzQjc3SDP9Y3CXXm6",
  "key18": "4BWxxGrxUpFdVvSHkopet3JnCiXatgHxmaWqy8HxBjSommGdN9vjYiVsr8Ueh2iZoQj3amtiEFZNGWWA2CqXrEk6",
  "key19": "mbTBzx8uPNCV8dL6tXfXjTpq1vBFRmZUxiR7ZFfrtHPwAaCz1WnwjD5c9VEAA6mXis81w9tamFW3qXQ7hRBZ7oT",
  "key20": "41CdfBf8aH27eDVvzEtaoYy6pjfnrRebvw9pLMTBkyXmroDkFN9c92rRjCqPD9koFDGan6JGk5CUvJwJ2dw5CDgW",
  "key21": "41vmxS4b6JozBw27jYfjzhEoUGd8MjWpy7tBUmNbcySdurwoLxs7qxBgX8Ao46BicqBdMT3pHhKAunFD3W1mbVUa",
  "key22": "39xqNcC6Bb4DEHg8kwhyuW1JFdMXd5jDnBDJU7d6gNQdhRjbungYFFEeHrn1SSEtBZEZZF4Y6xZPxbPBDfiz5dq4",
  "key23": "4iEF7Sf4mwAbMNRtLYtw8SnZq2N9xuNrecFK328FJEUEfmZrgvygvSaaN8tHKi4Cw3ctZwGxbBhEaNxf1yGL1LtJ",
  "key24": "5MHtwCWmN1Emy3AvwcM7n49oBmyEpih7HZhCJbzbYTe8wjRxqipLGuWqG5yw9hcmoWLWqSW4qAETD1vQKXVsAHJX",
  "key25": "Qau2heK5npieCNvzpgTarxdLfcvGQ5mJQGsAaKGFCy1npoxgVpXfpNkcGXLymRUjc5p96NwiX98qccm43Bi8bp3",
  "key26": "465e5ZCRx7VUPeXT8BGhAa3nbFyBVveSgM6rS4VmjLAmYi7tBxWUZAXBoWgvJJhPEE7EpVyRmkFvQVeqUt8nZ6EC",
  "key27": "QsDauGAcxJJXSzicTq33iqtepkD9NxWhMNMZ97A6H4vBwUbsgrEjKAA3yKHY9nngc77cWSrsZBERvbhNf5btchc",
  "key28": "2XrEV3oj8nNCiPvQZAJeyaEPtDJrgm2AV9jS4LnsDvojPx9PicfJmXZcqNMtUyYsMN5huAzUGn3E6TPjPaxughLi",
  "key29": "2ZzhG4dXEsZ64DsrjA3qgKnoc3S7bmnd3bE5aa3WYhXKwrFVdcx6rj9VZCKMsEc6BK9upxPTwDMSmH59dcx5N6eb",
  "key30": "3GfhwENgMD7Pr5zQeezZD4cxcixrD65kxhE19CYZpohZ91Z67DoLr6FskjorR7jzp68FwJbYEDjPEfGKTrortqhW",
  "key31": "4hYmtjEexUL6MgT8imu82wzhQz4wjD7u44S9yH6EQFnb4qR1REQ9oJzXkne4An53BRbbtNZonuEWoUSLxjkgrJA4",
  "key32": "3naWgcEVCTqAV2hTtaSEHdmkEqBch3uAWcuL4xLd6uHN1sgBxxFER7fXKDsGnQziHEJ1jctM5vVUuU7yX3jBP1GT",
  "key33": "2mv3qDFymZy1FXADvhbASFGsAEugEu1ZR3aZM8kEL2dwV1zRaRn1kEhP7d66zAMTnqbp5Xqa5XwaDTiLbMYyZF5A",
  "key34": "64R5ZTzyzMmjuP3CxRXZnjnyuW7EfV6AcG1VioBZJwLRfGzvYSiam3Xm8TkWe98EXqQKBYBm5CKZRYd5b7nSjXt6",
  "key35": "5aHyH7Qz2SPNP6eDphiZtPc1C45bJc9AbTRh2TqvwGGyNj4wcCj194BrZEwVapwJfXL3UssMVzfn2AWYsRB1MUB8",
  "key36": "4Zbvd4ZMF8Pmd828cV71BD8MfLbMwqhTAb3uMUGeMQ1jfV2UsjzxSSYemNKifJoAhW8K3pBZ8m565cbwY1UPVUkP",
  "key37": "3dhU9ZDwVqAXQroG44XnY6FXC6k13Z93WrTkEw1ZchsfCUxo86dFS7329zVWn8H3vAbh8dT3naH3P8crjYyHqCCb",
  "key38": "SzWm4Do2Ds98mnHLtavqQAuc2HQdb9FL8QAxDvBStFJZFUxVcZ2FVDV8dX6REJLGj1mA6AfS2f6yhJdriwQr6iH",
  "key39": "3EMJw2bN7izNYyQcnZKC6jxPpjqbL5EShgtXEwkPXmPjcmVT2BTkpzvjkLTCax1iy4KCch5geUVJccLJQ6vcLoso",
  "key40": "2sqVTCY7gLFwBe4ehci346X3zeuthTbaH3RMe2xEw3yGtp2zEVn97VSdGkMuUCmagGuSqs8uFcVexfzVSot2YXAU",
  "key41": "X96JDmDnU6uSNDQ97JjjVpfzJGTn7PA3abSGeuzKJdXyu4C9XR7559mDnH8S5FhLQCYamNLNFjD1srXeLTQ9xEB",
  "key42": "qhBSRHAKW9HvFHoDek8JKqWkcsu3QBXUTGAstDtJenjJio1v7jhfGn1ssoddLXFNU5AMFytuW6q23Zdi77PW22c",
  "key43": "5wQiFYmTL2RJbxYqW5Usx8WJg8Ysh6nTVZqht8cAh7z3BYmG4cjGzvonBXygh6PUwzKCQMU25PUCGMKRQBeKmo2y",
  "key44": "3mPYtaTCNbPsLtFMbjJEBb3je3xyKjCfd8y1B4ZEW4tKDc1iUkenZs8RqiJCscesPRZMgZ5Cd8TKcv6M5TH4Vs6J",
  "key45": "eQ4SGhCkyBrWik6e3imEUj7MJtLZbVUudwLq82cYT34c6Lh6dVKYgi6BYneLfhYbu2arC72bGkioBfe3XtJjBsd",
  "key46": "LiNyrS6LsawnSM9SnkmRtmXSKLiS1AEa98SH3r9mGqDxptEYCcvR9ZhjmiT8UuxqkN8EqRQeXiK1NsE3WmdFLEF",
  "key47": "4P1wj3H36wEV8B53PDruWKUJAdZtCLNDu4wyViwvT5nvM62hKaZBTfk13AcqPWMCj45pNv59Srzvb3t1NccQ1F5y",
  "key48": "vGLyq8Gpk5rMyztTq3p7FP6draK1Y2Ti9kuvHs4zcSQhtqB1endECxUc4TmcL3ojRiq4GQbG3crntdJXPusdEt9"
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
