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
    "3q7mt4kEKxqbg9tz4VzkP7h5KaWzovEGX9GMh5fmichhKqtHyPg6kbhWpmi2YdvANgQs7nQWggBKJ7qUHW9MTk8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTcyGPJE4Sa7UA1jBHNwjPV36ERX1qC3dRuydMNnyUmm2STh2pEVA1tbfCj5g2NuTVaDRKcV1BvHQKQ2TSZHLci",
  "key1": "56CshsA1WgYgqZLyGq76kZBYeUWt4PQwYgyJ1X98C6p1xjWdLWdngqECo5DptU8xjTqFZvpFYFzFAmMJ8E9LXj7o",
  "key2": "26oAydc83EprhHV7RJHBXiKW45ourjZHe7Zc4d9jvuvZqSVVM8ztnhXGV2vBqcpFaMLnt7bewqujEqMgUimn4aP8",
  "key3": "5j11j4yYfDJWBD6NtFA8gmU9L5pzNwCRuL7xr6hVLvQMk5afwavC5VUkP4vUWsvwGQgb6HwdxEJvyvAFyKYH4MoL",
  "key4": "32ryS89AUXwX1KVcUkFUJpD8HYQUSoJcmpHE6dNgYXpNbUBSdi8LQevRifjb871nmEYuGhDhdGk1rRcMvm6pBPyP",
  "key5": "3KKfPMutTUgA1jjq8xEfFuFzfLs8iEciscskjGna9nxWRVtcGZSG7ix38r1feQhjN33yNYg5fEaKEDhpvGK9uJZJ",
  "key6": "4krsBC265KNEPsdsJ2JE3xZHxXE1rnxjw91Cjsbqet51AFhzVCSNV61gbz9n76uwYjRbyBC8WwWzegyTvWDQK82y",
  "key7": "3zFQsFHzYxV257pAg5EyQ3YX1m51k82N2J3VNJAy6JgjDNFMUe4KrZYTifXDY7RrxMo1tp3EJ8BE8wHdLLKW2bdG",
  "key8": "2cNc5V7UGv47Ty1wjtcgY5PpGEjjWYa1pcx3GKtaV7cKY7w81NNpYE13Apv5LEMnXJ7NMGioc4zeGqTAALqv38zf",
  "key9": "3pncPo4YxEnN72kVfGqfyhb5STQfdRMAngo2Pj7L6WsFooqPz8Gg5kBby3daApBG138TPqsEzw41Qt7otPMEwcAH",
  "key10": "4YLrWMFPSAweFR6rFoT61vzrfemA92JTCTRCKDfMtCEUtn9Kddd5cbL6DEccoN7WfLhaA5BYGrYnavv88Zx2sBPP",
  "key11": "3LckcqD8cXRP5QgV5riCnRSLhoiHdnHYwZ3eTJrwCDD3WUqJJZfKxDrcFSXk88CwfRpbSm7PCPpdvfxPttkFGYsP",
  "key12": "5jo86PtUdPRnDjAaCnqUKvUkQS6jwbepzfXrMg5e7dJg1Vx753WZBswkVJnF4gLyhQ1w9FnXcBXWjQEembaDNG9p",
  "key13": "26Uq8J9dPag9sZuvhd8zeMbptgYjexnDaVcUz8uH7iHnpazafwqsEFLzEnpm5umbbZR9V2NTZ7f9V1eACJiL2Ch6",
  "key14": "5vAmXTVK7PWjBnXRD5MnYZnxhPLiTq3wG1r6864czdAe2vEURUKNBjxjdaNcivzyMSdfKSXtp6NbyvMfXouR6YVC",
  "key15": "YWFKoMukYdE4TAwEpW9f5RiY16tvzgfmoRdm1ck7Z79yEjAWXjhp7XU1u3QhUYjRiTwUMhiQYAA2huJV9BaaeeE",
  "key16": "37PAHNq8hgHuATP4Z2yTQWgqNJVcvqRhBHnjuT8F6yuzfxi7uRbY7G25tJ57Ej64PSdcLyNMA3bowfAmvW4gidPk",
  "key17": "VWGXGZKJhYWpuetufKSTGdPms8mvCstJLjqVkzuHzPRFYmpfTsbYv1KinaYeSHHqEC1S9FZtWhMcZ9fL4X1BCDb",
  "key18": "2GkvJof9aJw3AsQasAexymSuCKyatwzhSKF7FRaC7ow1nsw6xKyuBhz2iWZyJh7dCRKWseJXrGrTyjQ5EEZmSkGe",
  "key19": "5dpJasgxjmffx388fnncrQti9fXXjcST2RWhDT7rFqtQ7TDTEeEWWQm2JK8wPdiEeRVKr52eaLeNQYFQNEKUTnK6",
  "key20": "3YwQGzQuQVVXGdaqEofNPzrMgR7xh8xLbSgsbeddAQxDahD22FfopeVZgDPXkXZVUd2YRN7PGpj75BZnTPEnVfVX",
  "key21": "23uTEKG3ykuRnJqxHdXnKgYVmk5GeEUNps134mpdzYUvWGyKkBEixnB6mfWZHurzdWBiSfmYDvHKhBnKamKR9isT",
  "key22": "3wbr2fLSszo3N2dftWdhCKkSB3C4LX9woCnYU41yjHvUHvDJZptiYoLNxHL9yuJNcCmLM4jhroGiRipvkp8wfJhn",
  "key23": "2GNjpMTZ73aWZdXKKPFqdxaF3sGRGLR48Uvt9Q3ph4PWMg3GfghEVYQP34RGRMbkrzgZLpbkmouT7BtLByN4SdWw",
  "key24": "5CVd85GG8sT6aKKbjbC5zieiUEs2wWERu16Ny8UbKzKMVMvmi1Wzd3veuefcgQgVdQW52pbchKRUnvQXGQz1p6Nu",
  "key25": "2gP9JtuHSHcWHL14XHVBHXjRY1NXv7Wih6w1PA7zbpgdDiY8DtnVavEvvCtaFja98W2BKTeTXuzoLP3tTaWPvXSM",
  "key26": "kUp9jnBWGWGbrreLSfdkoZt1ncAu9ZnWQqnt2qHnBiZTVuKdJJT8VExYqwP6LMg6pysW5ntTqBHFNr4iXeiedUZ",
  "key27": "31nNbCkzkz6e1Jju8AWHrdN5TjAk6TCJVfJbYvLM6ZZBoPhoraa2WUQvGzSVCSsMZJMj8XNgkdJMiXnrziGx8TXp",
  "key28": "5BXSqxX5PyB8mMLS4Mb3BLDuxtPrqBm943WsUHX1eJedd8juW4tvzxWEpm92YqGjoszbdrEBzMa9mSXk7zwUrF6B",
  "key29": "3NmCQr2nMmo9PLT7wUEBvud4oSNCZyvf1Na6GLZGRMKnxCzLnR5kNf3qDoLaQYwZX7ozXqV6EXU2yE8NADdbL5cM",
  "key30": "3ZrRXuQNqCc2cU6SMVD8uLVpA5VwS2fdUcRxRbXwXqP5Mb2j8WThFLZdNiVku2JhpKgMcnF2kxY3RgRr9Y5Btr1R",
  "key31": "4E9E5A5TE2rGNpEamGiXekYCYZrRUESGnGLhZnVNYp3q5jwwURYvkR8k97Ryzaayr6prAWpyE5c2B8ae3gsv6wwf",
  "key32": "5q3tNNVo8U1Tikaf6KPPt4U1bPCWCt3sS28VCD9UAZmMF3DwNTJXSB6PSpvj7Zf56wdeAzbLxTmsjXAPn2Haoi7w",
  "key33": "jYd2Ln6wQ2KRVE2ydqFSaKVMQZQ3KFK71dpdMiLxFnF2JdNqsjpfVoZAYckRAUTSHAJE36NCfxvjEiyTFerjBxb",
  "key34": "3aMr6U6W1rHEaFc32E5LwioUZ3Su1dA3FKafTsu8tuvZXdMHCvwQzfN8XdpGLaJE8ujW4d4yN7wiWrmLgSxaZYgr"
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
