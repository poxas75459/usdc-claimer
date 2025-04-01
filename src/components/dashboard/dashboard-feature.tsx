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
    "V8EYn3Pa33PHY1aXzzWacfnFPJiWbxa1xU47ZzfG3Mj8c6pXKWZo8uH4W3pnuZFxFJVj4MC9uLr6dhDfS1YW9qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ApRsCFKJAQyyMjmAT7pcdbqCdQrVpxGSe23hqFixMwhEUoU3wiQ52mhcp9XR3J3yqzQA8d8gUb3zj9espVbBG3q",
  "key1": "5fQ4ESubQTpt3VzMgbPu4F3vhiXtZxZ5rurrKYsbL4DWuWjPq3v9aKn1XjWkY8DoEUsWUg2UsVVNnHy7qY73M9zh",
  "key2": "2HwHSew1hKBL2pp7rrqfgcPNMh69pExmviEv6bf67vncwjiMtPmV4gL1vagwLJYEmn8DQmmPGvYXhFAdjqbHDGL5",
  "key3": "2J1aNX6LKQEfYUca554edxAW92Z8CsjG3AZZfh9LuvUajCypQsDmyEdoR8JqrZXqgn8vp41YeJyoJAAHxtW2jSoy",
  "key4": "4py6iKjyx36q66YDbpwKqesDwb2XCpYDWJQKtScxLdVpoXBHkQqsCggM7DbUJ8MbyvYxq9AyRw9XXT6Gp2vfseKX",
  "key5": "suLKoYsD2A7poL4eWkKio8rnKXX8WDz1wBzrrNfY3CYneSXFe5CtTeRaw68AzDbnzCUPdbTe61P8i99QWUSjS27",
  "key6": "55vYL7pf16pDn6CruwLNJfF9AmneP24dQG7psuWCz77p25SGdvpDqmsLjvjXktU5hw6uJhZWvQniU1VGX63sFMhy",
  "key7": "5boqkrqTtigtWxjZL12Usg2BAC2xiPTvFKSYwGeFNqiABHCrVE1ZKtX8TeQaPGzdQMLBuBHYrntrsXUWGPprA4Go",
  "key8": "4q3nAkvtZe7f7rJb5s8DeA8A3Zeb1whx3X9pUinbHNvb3VQym1GWyAz5cC8BJjnJQHMAesDjXHCVznTEtFAF3fsX",
  "key9": "2BtbWrfmizdwPb6dUdALYpUNQvgMVGfPV7ZY7R4Rv9jF9ssgkhkSMpVCJouVFZuHUMXnsDzCn9LHuc9bGMycouvo",
  "key10": "Crz5AwjnN6tV8Gve7kCATCeXJZucyNsezz3JgMpmkaZXiPBdNsCxMkHjCk8Buc6VfYYkZznkHZD3izTkLnEBg1Y",
  "key11": "41oU37AkJsJ5AJDJVB6qZKVMCvWpK3UURHz47ZaYbSc3AaQ6W6ZQ7ZUPbB4KnWa9ag1mcEbzykZNbzXwTrZ4qw2s",
  "key12": "2fFwLuSePzEqVjRLrs6DALJh7tSJnaYkKNds92wCBon7zBsUCZhRXg9eVcKhHfZAiFD7vu873iLrjXo9GssN4Enc",
  "key13": "2DHHs8NXx8Q1ELhQJufQLApRzAmoubq5P5ASivbNa9GcXMWCXC4sPdnckycdPkE4NqpzkXY2ckV6pFydmxnUXd7x",
  "key14": "3iVoN1vCR6H3hJtTcFLbQ26eaHhvnfsV84sFiPfhewDtYrP7mnazupK2g5McKVmZ6U4BnXxMemSDcnavCLM3ujBB",
  "key15": "3JfSCQFrG9oLYzuHDuJwaeoTw6GVMqXLdrzEobdDjheuyorftCdcTrBZmG7cf3Ber1JvkWvFzG4eateF3Y7X2uUa",
  "key16": "8eKcMgjWpaeyEpH7yAtpiAmFrVgJyRJiGHVrJzJT93FNHBhq6nFHMoAVrdgYyt2KeNGTFRQMs7T4YsuLqzxPdHv",
  "key17": "5BNnz2poJhb6rk8yY224nHtDUKTvTnbQ4cSAoDecej4bzmET3Ci146pNZUvgQZZnqmAg67sH9c9BqB4MiUVtDVbg",
  "key18": "2abwwvrfn7JnetSp1kZX4jajx5yR3EEMiGCySn7acUUDB4T75ZK9eHKHUUhiPVri2EG7KyzfNTXcYsNL2Gt4ec4Z",
  "key19": "5FsYLz5eydxf4PZDxQaKNTpL9u9dPFHgGgFE43qtBzPdvUJqwPF893u57FgzzNyczQ5oVfARmgP5c7cDfX5PqRdo",
  "key20": "3AX1uQMtsGxFSPrKfNqWH8C29GrpbNJdbd7vdSM35sPyqSqWbiLkkyPbwx6HHKEZL81yrG6pYy7K7WcqSymwZgJ9",
  "key21": "5kUpBUprnWSXpLY2LPs6fQnJ9seKwmoS9EqXdhKuUbFZmU4oUJcrUYCW9WxMDHxhG1xqZUpeyyVwnhGPmZkLw5ps",
  "key22": "3souvtKS57TqPGhCx5emSQ7gw6UxkmatGc5TDvdvXjVScLjmP9WVwU7XdydbXLepQDhPpY2dMKFV1H6YAkHBWJcM",
  "key23": "3jBAa2v2DSFTSSuhKGDBaSZMHBXbEdcwLVsUNix5ezLdQSVy2ELnNrnVuXBmnv8ahZ7npdKCEPA525HT3SgrAXUc",
  "key24": "2aYJ1d8zQGNQo6grHhN59M7zvQYW4Nrti7su768bb92CTBJm9QhYTBFctwQaEEvoJ55c43iYSHc1it15G1dKkkfd",
  "key25": "3TPRvVoWcEg228DZbcYpWeKwUqLWr3JG6cD4qRjULfBjUdmtJcrEXT6BHfn85zMyMGtvUEESaYennzSrSgjMNYCN",
  "key26": "2WA8GZKc13ra2dxEBhkLR4fcd7RaCTuj3MxUVKhnSagFe4BsSwshPuqyoc4BHyx5pB4vtjH3HiKUSL9gQNMacT3q",
  "key27": "4N9VeBpj8iWFBgu3zqqq43hc4kP1SHqzMtYN34LzddEZ2NPo1TpKRwdnSpk2r8nojgpFkC6QTEAfpmTdkimhAVur"
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
