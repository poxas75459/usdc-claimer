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
    "3RK7UQGsHxrFHbR28DivKizkpArDZ4SQrDpio41cy1SF2JGkTwS3yGuDzp4aYwj1XzqDwcR7SxLvGRT3qJpsKom2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqRG1EXdvG4CfyF44n5koLnGaVdUsj86MnMkfxEUT6mEpGfFAuW7FYuqhPFzPnR6ZeUi45bAYXb6GLWEuvAHYck",
  "key1": "3d1bMyC9hbMGVW76Mv1SeJNYfZpKfRkMw3fdNKwaDerx9ac4wiEVtwANyioAkfGVNpYPm9ho9sP1SzKR3agSPA5y",
  "key2": "2BfvgkTDJ5ut9M35L62Pdt5rqs2XMadufSGh8Jtdt3pbvV9Nc26ELvTpwLc1yrq3nZuEegmJQy7CemYNLjirPzXg",
  "key3": "21CRyuZAk6zYSDRuR84dGLbcWbq4JAHJvQffxM9RgqVtG34uUkNEAtXPsKDyAsgfgTgUu4Ff7gxFNq8SUmzg5Lqi",
  "key4": "2DrQWUN5WNGbV98sfhT7QnUeivnnWfGP6EuteEotDeiTk3wVG6eUfY8RXfd5QQqCasBxmL81frLQBACVYDYJQZG3",
  "key5": "61xDhZMBqG6QXBUURusNJ5XTkRkt6wHjcN98cKcHcW81ruxJiPPnyCQeGr3NPqjrBgJCoCGTuApqdK95ofP6xd63",
  "key6": "2NrG3mmBoq87nN5k6PZ9nMYS6fyijPawW1FVMmaVS1QiQc5kJCN8TcfqezzwhLZKdm9bRraL3BqW3ZQN3VbvLmgr",
  "key7": "3rBvR8f3qBu2HN8xXx4EuRt12iZiPGMGR3T6JWpsH1cRJcE4k2mtJb7nG6sKm5iw6cnWVCTzUoVNwNjyN3gWyf72",
  "key8": "3nmHVsh5Jq16YcZJYfw9ggNGT8iKu11XrDR2rZ2kUyw4WBo6DmyyfnBHTDhYKytbxWL7czPF9H1Y6FMT34VUES6u",
  "key9": "2x7ui1Vaz59jKWC3SvSA2ZSx1faQeSSjhm5nDYXFdzCscazfA9jhPMDiskCtfBMVZN6ZuZhWvXTsARg3uFStV3gQ",
  "key10": "2ufpTMA8L749vDYajzgM9sb4bb8FWh48HRLsrCzyutiEbW2XfSDKHJpnoQeuMfXhvubsRfQoyfxbqbuhVt9LZiPs",
  "key11": "3ZMHfvf8L2q7Liq2UUNErjc4jDS2jfkAsNPw6Qgnbo8YJCUtNYyRDDuqPPRHbdVkKY3H2W3H2rMHaGKHzS4XWfs5",
  "key12": "5DPxAnA2HbYaxgsfRF7oeeXLSCQEjTSbPLTMYodXioPnWjjo3doAzLb5ZCRnQzBJHnWZ4JX89SdkZmhcZ1mf2aDF",
  "key13": "MS51BYDi3fwQWQWS4iY3UWUDN38dTdGPBw3rqCUHFhNXJDA1kiYXDryko1zrRsU86tHeoNtUn2gHMyDs9xdUchU",
  "key14": "ceJyo8JqpYt6rw2f8Di67GRm7X1xJQJ24xZYchvcs8QLjP1VhuXGiZZ5jC42GiqNPJR7jRGrTtpwDvUKNqR2etw",
  "key15": "ACTJoQYfaGGhcNapHnUV8YRzG1gt7kp8U9hic3hDpXzDhxQBG2Fjmf8s13naA1nxZjnHkuZFqBhY8NriHFLNYPd",
  "key16": "erHPif5K4YLR2j2BEgAimf9XkCYdcrNHTkop1tx3JtW9Tu6PCY31sUfv3AQpPWJbXFeVHU6vX3LnVz2UVsaS5h9",
  "key17": "4pAMTpeZnVDsCz77gC91Lke787dsnwzECNwuDd23zQLp9tUNrbotUJj6PUPq1LG1j7nzub7JvS5wXzaT1LUhbeQ1",
  "key18": "38jDQHo7UTbn4kFdShDwB2LPSeutNPr1Loebdyh3e7FdRkzia5Pfh6mjLFdEWQfZEw3HXrU8Lqir4AbXYrDrYaDf",
  "key19": "3XuMutMbQUuV3tP54ZDwE9krfgcqoY9tFRQ6H295dS1hZY9GfQaKdRPfXhoCZTw8KXfyXuQGVHD714p4FbvejuYm",
  "key20": "fDSLLqK9pGHghAkyoRdizGi6wkWuAyyFsByoe8sgZ46oEUXpiHmEX2uBUndi9C1CC5GhJmadTQFVVFgD8FeQZj9",
  "key21": "2abhsRA9ZXpQHVC3aBUAL6bC2fyGrdASXZLJrDr3RF4XnFpRQ1mJA5AiRW2iAetjGQRsE1pPPZwtdD7sW7FYtBjK",
  "key22": "5G3zeMG4mFtzNTHEM4uWkKcAhmcr8RsQ4DHTpB4RqQ43svgrtqKaBe1uf24VcKECcxEP7PdungFRChg6x6aBdCno",
  "key23": "5MsK6FCXptdsfwhZ25Jeww8aBdn1fyHnjRr8u4aV5PCjETeWXAgU41C7e4PPo1KJMdjacUFk6AW17UeQaCfbz1Qn",
  "key24": "2rg9SPMQXRiRsf71CEFQYuY3P3JuS64UKm5iLYvvyyc5kJfwNBiUdm6KLnCsPjkGEdFiccQ6Co4XJxC7FzTfRGfM",
  "key25": "2xYhinRqhy3p4RriWwo74w9Z8M2e21d7TLmqBqZC2gBtvRAZ798FXC5EfNqg9aP6DGqdvQeoYV5EG1wj3CnAV1NZ",
  "key26": "5STjdYYQqHoH87ZeY854vjy8Pyf66Vc66gNz4AKGkQP7xeHJsmAkfLA3MxnDhQo6CGaMn2RVPjntxarWCC4AX86M",
  "key27": "2NJj3aBGKByAtVHH7ejqTkYE1ktAyev1Yy3Y644vZ9RXDSDNUKcMj3xvnhFuWKpKVb4zdDB7MnrKdnPqiVR5GnL1",
  "key28": "56qpMwXRKvm6xoMQ9omAHgjSn4nUaprj4NHBRbbsQfQUX6TN7ya4j3CYhWpuHzkU14efpqiMC9XJQBBjGQa8oZRF",
  "key29": "3aMLfdxdEqmeAtM8coiBfyn1ALx7wqAHvqUfmmBDffQuJREY4qMsojKd1qwk2pKzU4LVP9bkPS5eJHNbMAn7QLB",
  "key30": "2gtvQffD4FreozzmvxZb8qZWB323Fow5aRGxbvNJNxW8ak66dC6LWWoEp7Tiq3hXRk1pN6oipFkfrZx6JA8uy5Fu",
  "key31": "3Ha3JSDe9BY2FkvRsNnCSB294YthazV3eut2QURNNeXQ4kEQEwfp9a156gR6tTbczvFGNufRw3B6yPZtcQcYQpEp",
  "key32": "2rHbwHCcvPmAFp3mLLqfb8F6bpEnn572uQbKieMRdWj328wFXNQpEn1RWtcaS6nozFmJGhEh7TTwK4WUaRoYLifi",
  "key33": "4Wp9xJh5V75cF33rYcXesmSBwRKeq9M1e4XSZv64SozA5MwAPQ1kmBHAWRe8mS2SsP376ffvzwhciysjTMPT2Bxn",
  "key34": "5TgV6Fr8VYYVWAB9sSCVEt1gPiWimcX7mwcjSebivQLMVjph1DeP9RpqofYgJQevhsyTCsUNmNxZL9ku6kvHt1FE",
  "key35": "2ZnSiyfVRGGdYDcSErFLaB1VAbzeGpXN9WyEEEHMVaaxAys3Qm7TqRHbXc23Y7AY5J6CPSkuxe7cBDRfKfhWBN7V",
  "key36": "2kBNfkNqKqtJFMpwfuyh3w5yc1aE9965XjztSCg7xWT9e3cXZbiADtVhMegqr7HsTYb3uYQjEKAbwzBDhMLXAf18",
  "key37": "3v6DMvepPEPvUFb6M8f5PmouEHeBHwbgRsihChuxQoWwM6CFuuM5Mbj3aoYqhCrAQxqD78zCgid5DKqKWjxTtC6n",
  "key38": "3TYWX4ksviFQRRobXDYP8vC7KgKCu9Fjyjna5KMPpzB84xQW79AGB7xRkUxWGwSm8avgo1LRx71XevnCZfybYfP6",
  "key39": "5Zxqwgn8XXYdis3Gp2Pp3R7nnJY3aGZZCDhmBtKKvWQMALeR9uSAfPGqyERhBKbMVwNhDp72vvSHtwhDksGUXWat",
  "key40": "58UecFrjsUpSYBBxg93t4Gc63DqHPDi9N6EfCXnAtGtMeqAJTfA9EQjTNAmyarjNpWCASGCbcgyMigoauKLhVjde",
  "key41": "42xG9GNhZNbmTTLgt3tkfGv5aKMDjNDx34d3htJgqFXbiBDTUteqBGEHrpcmpsoXfdStiy58yBkbx4YV2iAnhNYt",
  "key42": "5btS5X9ASX4NAqvRGctuCLRyhZ9ooK9zL1yheZAqMpo5Gz1fHXoUByfEdGicz3PEevkuXNtyRYCK63qvYh5BwsGk"
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
