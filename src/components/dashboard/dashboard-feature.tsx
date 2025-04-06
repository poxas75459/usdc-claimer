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
    "F6KZRH56gkPPX4Abx9fvtxhHbvgFtFRn7k791cZRLW3SvvyBwzY76bn8jrMTU9d1DiUn1bJeTTeAxW3jeMa6ZkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JY7oGhpEM9CPzD2dhvavGPijczaF1FbD2iL9RSy9ku4p3q5DGcwC8UgrMqr1LAS8iEK3e4cqUCxWiq9QnRhQohC",
  "key1": "4acYwqmZgMdLyFAGm5LzBp4bDYrUjpjndFfahHpFpfCmLv1QEk8WqcSQi5d4bACgP8vH69JAN8Znunjx79tDDqrQ",
  "key2": "D7TGfRr3f22J8Lgq74C6vi3Fbw6id982iBxgjjfaS3vNcbH2SYFibyRWaZe4Kp6HqvzNepzSkCMdnYWVQqxknJj",
  "key3": "57CeKYdWYW9oaozTtS8VWhwE2RDC6o92U54N1u2mP1nnDRhBAhcRQPSPG8RrX23rtYpk3wey4UmfpdPo39PFyGR9",
  "key4": "5tg5ZUa3CDLKtczunq1z4eJYEabagagskgZan3V6xzost9tPi3PTZYhR7JqEacwX4kvzXZJkjKD52YWUn36wDkKw",
  "key5": "5MmTNDsMgyAz8JE3notyRbFhDWTidmN9KxbZVDsHXdhyPTjXow5z9c3Vfzwa6ecPJwVx8wFf4emtNj9LaLmfYwdb",
  "key6": "3QhT3Gi6ejywsog14EKEQEWFiLvkpE43dGrMy5RMLbN1dyoy7YAhaMwZLJg14f58z4Pf2R1nkGu2yJwQZe9VmdRV",
  "key7": "5csJxgKHi9yH2fyPYaYV9qDHx1BULQQNvibK9yzJ6i3Y1VZPySsbB95XN62LpFT6o2749UCZpEDukZYVWHNohP7z",
  "key8": "k3Ywr2shw25aZWo3YSh3HnDX4DwSowj78Jz71aZB2exyqkvDzhwQULcukNgSYrLKPvwy5V3athkf95AStHDCfTZ",
  "key9": "51QrNG7tgcMVHumy7aFm9rZoYzQ9YhRmdEASWPpB1s7g4vk9rJvuv7ZkVVgA9g7WqtVqQ9BNDQQk3jokHvgDRQrh",
  "key10": "64CM25SCNNAjMkiWhFBFJSADryKHhQW1UZdB34nZjX8VwfCqjBozax1KnALQ58PRV3vZ7ssqAcnNCUzP7LMVTeUh",
  "key11": "fgGX8W3DbySAcEE6y4yEtMy5YtaKXiHFmgRbuj9s617pgUo3h3rc4f4qy6xdvaEGeaMUhdgG5VenRRdo7ADsPjT",
  "key12": "iTSXMXwPnkxvqAqmUvy1dR3Dq7gpK4hhfy1fjUMW5GvTZGj9DFGCbZPbe1NmjRSrr1cuDGscHH8tyf5RJE9kdVQ",
  "key13": "Kq2vCWJF1hLx4SgPXeRihXMcQtVkiCUQKuUYBTtvQ9YM9HgLEVybmHjL5PMnaWWe95QxzrDzCD6d5SRWiXrFK2p",
  "key14": "vnfb8oPvUDhVAWaHA4eqTwiPmBdVyvzqPA1HvEEjD3aRqKMS1AEJWZr42FX7NZcMy11A8yLHGPNyetpsXWME1RL",
  "key15": "2wvnkBWmdXtgw88vztyqmJbo6Dt5eCSLeuwHjj1Fyocb2C7xfzjXXqcnq79jnvZaCBjqqLPvf9KdpBts5xtvU9tm",
  "key16": "2DPBJjFCZXve2S4PCgJKTS4SAEhM9BYH51vfMns6rQ7MLBjLCf5TeyUE2DbY84o2q4C5b7st75DkTrfPtmYatqpG",
  "key17": "cL6DNyon2sV2RKQvtnrSxQb65RM31zXTa7GJRdJx823uNXqvpLFmK3dRGpJ8nogdnKYBd6Nqz6nFZiejjiCXcE8",
  "key18": "54VswpQLdPaCCwVgxjuT6w2XEt1m2t2LTvejTBAkQHDAEYtZZjdgvEvtVbcxnz2YdqjdXRmHwCZkCYhfjvveiEZg",
  "key19": "2vs5NCn4qy4tqdp8PQWzt1q8Z8znBQHqqoRPCLozWb9YtL5eDPxr841mAj6pixCQfmSCATuStjm7Kr5CnjnUiFX7",
  "key20": "3DbNnY2ynJQK6CVPfqrJgBH4zqU5e4JTySKS1cNB2D8ser4nuTtk2gXjG7JxcQWTtam9zqaVv7YAJCVuMLrhpytp",
  "key21": "5VA8DCpnZfnnuUpT1SwDDCQVtM8TparUxcyvpD3eJbijZxRxtnLa2jKrcN6bHBxjXQ36QJPdSKG8sXXfYR2oMjo3",
  "key22": "5PW1kATxQFM7u2RC89TGhY41zVka6Mn4NeiVmNBWp9nAhJnNhWgwNgWMowLkGrdMNq9sMVrhr924j87rzqnk9MkU",
  "key23": "2EddioYLy8V8V5KBN4p4JwbPbHiX2dYNWR3CBdV4AqwWCNB6XJyH3RkEVGmp3JTG1ETTTRSk4ugqcScKtZkuDgSg",
  "key24": "2emo1X29421UyJ1G1vnh7xj6wXiqgkULffwLLH6i2uxGLsLEvYHgVycU286BNvR3crnJH9k4bpXcj8N1EsbpWTH3",
  "key25": "2bGeptRZGjQFBCsWMkooVQoW9gXCGkY5kAGsysymx2LLJoBnkVAgQbu8HqP9cFSq682G6LBMKxs7EZ7joc5KfJkZ",
  "key26": "5unU8bBuqtg6VmGgWrorqCAuKhifWS2LTy9yaSLeqND6b3h8GMbU4p2oyNTpT9YHULQPdFkcs36tAatTfgApor3Y",
  "key27": "RNnqrGCjZQJrC5FPmNaPdBYniSwBux9uXSGXoawzgtXYd7unXNjDq5DhBbUaWU72W6UJirMSJmCRNCjZ1yPkGfU",
  "key28": "4SpgfP8QxL4YaPoNbExbAx5PjeSzsqohRnYs6NZHzm5n7GVkUGrLBc1qvEbyYyULD1kWfe5kjv4Y6F9YMPozSukX",
  "key29": "3jVntGPiQssqSZVm3KkBoYSk74Yu2ciCnBYdW7qyngv8UEsBNrxTTTCfofHQZ5RPNco7WrtPydHY9AmT6DjESEJ6",
  "key30": "p72sYrA62UKBBvzVBiea7WBbCJzwyCLKvFdVayS9gM9gsdxNC4rpSXso1wRtFGk8qwCo8Y6aTDVKtEy3qcn9LLd",
  "key31": "3eo41L1FTFjVz5PtGh3pW2AXa6WD1aj7nMntoeywgG25pFQbc6ffk6ttAbDJBN9dkhadgYsuA5FkeDM89aWNi3KK",
  "key32": "4YT5nvohEXAEyJnjqbv2WAsjxe2rpN1uBCHx3PooC82X9m564EycDTFyfNAvUsHRFXYB1jgja7Eg3kodnQxoJrh4",
  "key33": "2TexQG5b8YZGKWhBNdhzyrkxWYWGsoiW1tCQ7eawd91QtPL5Fx7yH2NafvXvB1QSJzkUveeA8A58FV94SEYh3gjr",
  "key34": "2Cj8nYVQCTqGnTa9x4PVwtm7eXcHyDwA8CdWkmNyBDfQqwXRMenAHhhW13M4iqecowSGKeANKpDWh6nVM9JXQDwD",
  "key35": "ojjUF8SqcXd2cHxg3BjAbrLQXCzQ1dP5mbMjPiot2NejJWdw2hoUVR8yFtEn8FfPVdXiT9eTdmkVnV2Ne7xr6sg",
  "key36": "4NomPA2opsdm3uKrRkJNsoXxnn1qXEuxTKR6u2AxxKRB2UEg9C8hivM6iNsovAem62TTjHh1JZDJnMCtYTyL2CeE",
  "key37": "3ruApZsqiqDamoQMLY5kiLRWyKikZcRZLV1WxDK4GCy7rA7o58F1sgF8hQHfKmzdnEfW7HsnYD6KjYt9dDzcz9By",
  "key38": "3AG1uD8vKQnXiwd6yPbkYprtsePEsMdMQRMtq48LwqjrztqGsyuR2KagDNYUQrwCw94nKGpkTEwxFHygbCDEGEqS"
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
