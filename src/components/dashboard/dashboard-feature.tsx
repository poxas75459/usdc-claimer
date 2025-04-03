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
    "3Kyn3EWL4LvYLHW9nKM98QS8j1KCw63pfA1gQtrKZAyLT3iDpLBQM62vQCNRWzqoGErL7Q6CTDfvXaLj6FRQ3fY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbSub7C11TAhra1k3SvAmVGdysCF5wLwJKQWTyFnhT6CZidRGDaUrg6YGWsbgnpruPriR6YUfvTrPbQLSnfSEV9",
  "key1": "2MLsvDNBpcYDZcrMzAth7xrWTWYEWY1tzs3Ljott6Q5Av5xRvbQqiXnq4VUStwAZSRLA3H9giqdfkYttWzNszdJc",
  "key2": "65JD7YAHfPj2zyTbWmrXYhm2AXonpDMKCteVE4wZkXUFpA5SKmndkHkQp75GpHVbf9koYLiYAzdgiE4gc7VyYJpB",
  "key3": "rwheBkQeo49mH298uGchNrnvAHmc2t8BxvU2GjtjqjJZiqXRaJnfh2wWnAi8n9hnnPsk9PCnKAKr7gs9eRPGoAD",
  "key4": "hbEpgS25Wir952QTj9sbHBRHwWU6nR8YEmfFCxvcSg9S9wEoSuVVKRazVFyuRxuBzb36cLyuDzJugqMSdmjhMb2",
  "key5": "4GSjBxuNFVzXDt3w7FUicjRevS5XC1k116AdGA5u7NRV1uSGb8uzFZC6buqvjSrP4r8WT2bhPLJoUgYBpzEQuD5V",
  "key6": "46HYYf9q8BBFLHRPhZ4ncQqziZENUXjrXYvx72r8ahV9DLTs8aB24sWBUn385mFM3oVmmwnqAN8x8ZyZREoByrhY",
  "key7": "63bbwcfZJibRxUYhyZLDKfFTNmF2CoLe5sF7YbiKk5ts9FxQmGk4J6KPMuqFpUGRaLB9tDqfiX6ivCDxmCnxbKD4",
  "key8": "57e5hiCE9EFvFQJQY18M7ajRtY58PAW7GPbi6Hxhfhj8y34qKFnJJgmRCzYQj74vvPYm462eTiZXvMdDHCWWT8vc",
  "key9": "4AADaU9LwWYYnSbXCmdZy7uLsKLtJ7BR271utj66zfYWYdycYmnzH9X3yF4VsYeyTJqKZbtSKVypG6nsoK3tCB6f",
  "key10": "2GqYRidCk9ctHkswzPLWFmt6RHQQxHfcmV5CTQNXgpeEQujGnuW76kQgsTzjaK1Hb1D9tMX7bxC8757e5WXNQUgF",
  "key11": "4oKPyLQTCAgkLDDBy4pAr5UK9bWJhAoCKGnGGeupw677kTTrF1vYoKuTS8b8MQqH8rTPNJS3B2LhHDpJBn4aH36N",
  "key12": "3HFLqDWMyBdkyUSy6fyiiR26LoHdbVcTTj8bDPzRtxsqUWokmQ1jFVQKevz56ypJYmf4VhQw4tjr8pgxywrpzFEW",
  "key13": "45tGHNcxKWtJoRDFCrsXLX1vHtef2vPXBNF7XFt4x9WCzr1s5dKp8QBrHxAVU4EiLDQA6LrpFPWaHG5RboCQv4CN",
  "key14": "244u6DGXP13wU4oPjfQj9JT5Vvn4h3DQHgju32S7dEzk9XHn38JztGxDwmLMp6NMJwuqN6yuPwAp16URJZ7gz8zk",
  "key15": "621aWDpD1fBEieYtTtCEziZK2r46B8BiCjXPFosH54hujSjVxBYPVLk5Wd33QBqakJtdcn5su15qPeMRv486GxDs",
  "key16": "KV8UTNosSUWLmNcEZFzeXRzddHkX8UdEB6HtB6x2R3ZnjwcECb5TpPFdx8TLUD9sKvib26s6sUW82k7KDAufmGW",
  "key17": "3M4gjmEiCc6JvzjserSTYWp1dHvw6q5mqU9MRMcDE2C99LhnHuhFPE395ACXpMHhBxF1CRaqPUk3ZhsX1kWNQmSg",
  "key18": "5W9oiHsozNeRnz78GaeDvDEyDWgqBaAqdLc7wBAwb6BbFXb7Mo5qxCUKY514dYizzEYewD9c5xHxwX5GwvDnWhaZ",
  "key19": "25bmhUgAVzywQxdKH96ceJpcrbsCA8hGipXdAvZFeyAuVtqFazMqwkcUsp1hNUtpGukLxvktyvKg6B6WGGfGKpEY",
  "key20": "4BcY4UbZsSAr2EmuEcvHbw7tTpWNuKGzHrZqbN59KJVez5yFJ2TkXmfdt54U7ue5XSUiLTqjnUzuGmik6KfAA4hj",
  "key21": "3YCdTspNLWV6Hg93BZbFTrppExiL8bJQtfDr6yzJZ5yYLHDjFwaXAahccxfrtxvGRCtQw3EfFBtkPaHENQi6hANm",
  "key22": "eXDyacYjax83nrvzzeMYzTKt9iDDkkKnhk5N6tumfmCUkNpnWG2kkuyFs71g6f8ievE2yK2YV29aaTGUWQUgkdJ",
  "key23": "4Bkj7gABaYrFWkjdWh9tFuuf6JNyfMot14SFBy9vkRVwBRuZEJHTgijnSiopLfP2fs2fGEkmA91QcHpzxQzigNpg",
  "key24": "pkcmV3Bh28yRFhxeHANY1d9kGwbXr71SwV8DiHku5TPf7puMjg7oFazQuNFWFDjyLrH77Gy5pD56knXweehC8Zg",
  "key25": "4CwWijW6fspg4Tjx8CTkjRPCnvQzQWgm6TPECniyU8dRPzKzDA67jUhchxJ2sCwDb7TXkM4qF68MS64mEjJ5p7qF",
  "key26": "5QnzfHxRYifGU6Zp5gu2TnLxvbD6wz5nzFiT92LKAkAhDPzkMZbqeoTwNm4VcLFV48nrjG4VJYTZSLnfLoHUxGDJ",
  "key27": "3ovx5AaNKVW2Pfb2hbD8pSDHbCHrcVqZS8jK9j6ea9bqPfKqvE41ZGW1aRXHBj5TvUvfvQbfo3tVU1mTpVVXgubV",
  "key28": "4vykWJNjfhm3WWwSvBe2RmnFufSHnMEhWjymM323mV4L1C9cUNSac4N7JCWBrVpYW4fRuv5TZBcdxvBtzf2i7TxP",
  "key29": "4qt1wbV2RdpkRJ4UbT7tiTFL3oStJhk1oDyCM69GjDN3pd2BAeSMrgiZYgpLgSkueYSagBDz7dBJHnPbhfHoetJ",
  "key30": "4SM3ywyi9TAWaYdzFUCoFrWAgLWRVXHcAFMvEgPgGGfhgheA9mgANzcYqSCAhygxvENTgDNwTB69yp7Lxor42cwb",
  "key31": "5g45MMhuxeZtyxZNxjdmZPMsBu4YKjcbks3XjMx5GYn44MpTczvGHzRZ6AUDQnEVXNcQEigkybqGuiYeVFX6KjnM",
  "key32": "2CbUc2XriqwqoYkh7mXf1GtL6d6We99rCv7Mzkrx7a5h6u3mTfc4cAaMyYpefJsSF5i3GjgBEPmAxngztF7tZH3P",
  "key33": "2W4xZ68LL9PVFsCKT2Vh71FJS14FEDvEtB7WeSKgChzrKn3VitdwtSZL1T5CySSNu4vPkXYuxJ5uQVdqkSLg2FMk",
  "key34": "3KUgrJ878mEw8Qc21K4ZnK9HKfFr6nuZPVYtpzUZNXcwmd2cKFvgSgxqEozosozUNjAH4B25yNKmrhfH2hkTw7fo"
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
