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
    "3qnLY136V6QRJifp77KpWCce2oYEuoFnVFFQd5xkquNtCMmK6UecDH5azFx98eqyJHb6WiZASRMYayoLnYTP7mYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcfsk68YT5AnXiWMyRGy3wZjpBrC1oawMEFwmd46NMG1Y2Gn2kz7Cp5hj8U5Wbnvuqf3DPAyNjx5gd8zoVwSrPi",
  "key1": "4nBTDHE2FZHsPjVw1X19okhKp6KfCyJrSzjLew8kfdufjJ8Cb15EVVGvriZM5oYLGBYxvcnBP85m8DekvT2Zb4YC",
  "key2": "5fBa7bpuGrfB94r9DMXt3AFRnessf4TnFURftSR4aeSftvfbMH6VUP5yheKeyf4Uoyk8gUjRmUhhGKNMwVHXw57b",
  "key3": "3fECtqWFx9LuiaFjXLBppeeXV1PU2nq6d5R5DfnN2WiQG4vZuc5dsLnwajDwJegrkMkUkawpuyDiNqUn5Bggu9B",
  "key4": "KTCTUbSwpZ1chVykwpUPmMypSkEu7eV8NbCAECh4L8rxfgKPnKCAdsUzkhuBQZNeVNvAQpybgK5ts2EpKoGrBSj",
  "key5": "3HFqyJ87xiF64MJGaqzVZ7H4vo3yNezPWLZ4eDC5PecGvVrCXEvdXckv8VYkHmzCtQNpVG48cozQQoxQSMT6Rpmp",
  "key6": "rav3UWg3zioxtjEKUaCJ2avUdAivHPvt7P9aoSf5M5NA4Ar3mvU6cGfZv2J4F6m1BkEtQ9SpZuTL3gmoy7K7pYN",
  "key7": "5WFx8a7roY2uz7xLaQ7CMFfHpHknSfgomuaZvUBUv1BJno51bgfnqTkECYywMPwttqyeRqvdpzcDcsgbCEot3tfx",
  "key8": "2ADp3LbuCvgkEK3zMzy86c2pipvqdogNUY6eFyT7c9vkXBAcCzWnESU5UvzTKC7AKCMx6EGciNdKjuPH4VZ4HWXj",
  "key9": "219zwzRK1NB2ucZCzuiH7iSPYGAL1ZiM7ELtojT21DmczvSjQKD9NBWYoCcMzJjYDNMuTbJm2VZXj1He3eLC1Xft",
  "key10": "4B93Ekp22Ls9Lc6tV1GVzBDiofbqHNLVVkAsTTrKyfhLuSRsCXyvzDT4DiTFrh3m2wUeFuU416uXQTnSFWvzLQwE",
  "key11": "4kH4sZvJ4RU1PJJJW8pMysoo2KtTtoxLDT8Yu2fpAGURy8Y6HcD1PJfKLBgS5z8SRuBByh4GtfMNhpCondcW32Rt",
  "key12": "4aUZokWYhd9Vz6RpXvfucQ2sErx2NDmYZnEHY7tD8tSLJLwq5qf797kce5hX6TcbajqSmnWpMz41pbsprRwJsYtc",
  "key13": "z1K8AmyCmcc3qc7zVpbQ8n2Mfr8bUBuAaX2GeNwysragR7vpx9YcGuKyrJae4vvGoqMo5Qu92KUMtDiFXugfMLb",
  "key14": "4nRKuA54yCerrhDNWhhrHBgnQQF8MEsx6uPNXQkqyJhfYh6r65b1i1Diux19WoCHXRqGXiKTz3TDarCGpLXUoRrz",
  "key15": "uCceQWinp6GpFqYN7hsvWZ3cxtWADDnJhJsWdukc2VSoMEGG8wmyGuaYSY6WAQszekC45EBiEaY3ZdPUcDqWkwM",
  "key16": "eA61HfY7J3bGtDB1dmNREGr9SgfVwPHcoXL1vTFXgZ3akpr6zMqmba3dTbSPPqFyrCbgVZzp7Y1kGRRQuydQmuB",
  "key17": "2qLYxLcYzR915dhnXEHqVfGrPCQ3VQ9cUEtfbQJgc1hSG1nGjWwk7AEcpYNEqz7V8h9Y1gVwyAdM5k8To5b6k1RP",
  "key18": "5uciyQxQgP8KrjEXbepBeuhs8EyecrivzVeyqTYuGgpxGuEbyBwhA3LXWXCw8mDtg46p2qhW7ve8HZd9YoY2ZRQ8",
  "key19": "5NBzZnhqzvwfthbyUHFEujyenabyUWoWqKFxciHrNZ14dJZUytRcQFWH3rub916pUgTt1ryvEY7y6SFDKp6Tt41o",
  "key20": "xMsU3BZVr2utQXY7AdXTEsRKZdEVmFjnxoqVNsuqA435VefWVX2gLXfvtNQjccEyP8L4pS3FgDsefPgKubkDM8T",
  "key21": "4YtBzuW8FryDnayokzeT3QwD9uZ7VFneYs46n93hrCtpSghLAFwH88mSKEyXxEfAub3r7S2biVWUPDVxS3zVDZQv",
  "key22": "41nBLaL72NBTwdYqEomwTaha8o8LLDoBKqzNMUXQg5oJJFXn5knNSPjpTS8RuvCCpdgKmhqEhEm7nw3DjhiehRtz",
  "key23": "3U4jfV24x74t6GWgj9mqxb6XbvVBLmKFdE57XKpa2ziAftbQbo2CCjWPMgB2uN28cYruLgAq5dUvPKG8TZXtZwMr",
  "key24": "5iCVk7DfVvsAKSYydhj8kzdTDQWgJVDRM8bb6rwtyUtDFv6WzF73ym2HMRSRnykNSXB7iKStBpiWbNam8BfD6X3j",
  "key25": "61xbTBi7iLwLhh1fh5DTpvcE8dkKrNdniqQJP2uubBbZMesU5htuiBk2yLkkQGbmwRGHj4FU1Yw6thj3Hir9uk4K",
  "key26": "3dJoFdiGU52jWk2hw4eh4btTjAdWg1P7EA2W81an3DFjpFxP5d7Ss2ZYihy42xo3rDg3bZQVBxHWvHHHudu5PqvW",
  "key27": "4tpgJ8R5Cd1swoRdYGv765hNERZbE4UTYSTs3BcK8R2hJVvgmzhW8uq9pmaPnktd8YKeKQfPsD1E5YVPx1xEDoLf",
  "key28": "5quXScXC1vQK7dSqtqQEdPvaEHbnr4SGDLynTKVNpd74QTPyNwXrwV3NofeGJ1SGY1FnmFmsofQj12tRR8Xyfvpf",
  "key29": "3cKQUdY6bWNJqeMKVT5DQyowyKLLxwWiw4mazf8q71juKuEPEnkGyrj5jLZsLWCUZqJggv8B5wDrGqYQAeLKgZ86",
  "key30": "5hvRr3xkv8N5SyN6faFX2Hw6PX4S9eSDWX6YNatS7JKaSDyV8CjPGwuR19rzYaqdCy9r31jDsoiqqYJdEo4sA4jy",
  "key31": "21aWMTEFEyhyiVr5yMwBu4rQ9McesZ72ZHn4XGhmpukkrtDbixAKYghRaVdcGcMP6cNFbig8GFiA8EkFKxxWACrG",
  "key32": "54yJN4EQsJmNZRkCU8dvoeVLSZs1JYPiSPRbXyWXebtp1bHaGVca18jMU7C8yWhEzCiHVVGYd9VpY19NCWdpmBpV",
  "key33": "3Ai3cb2TkeNAEefDPMhH2nMms1RArXJz8XoRBS578jFXKVSGLeuaW7RWLjAKuMibPtBCTo5fZVB4ofurNyaTv6z1",
  "key34": "5v67d5oaLwz68RWRPbvYfwxHF9Cfshoa7ZFCjVVVxuX8wnQd5i7aW9y9hc2Lfv4tyqtkNxXqnUwqVFqKSATP7D5D",
  "key35": "3hL9iQtB5sUM5RPkfp5SXZunT4MUzEh67ms7PqWApdHY9cBMWMz9yaTiVNApCcP8a6bjm7ZK8KKCzvD6Y1tUTUWW",
  "key36": "3ggPckPP4dMiF9DSQLiZbd2z8SrAigfsv9ijQYfQ9Lkw3PK4pva63Vmwe47jhk3sv8RzZJMsYkhDLej5tuoii3GA",
  "key37": "3RtNo5mJBYobGEh7i8ANwjckPQLpBuxmJX9i8HLEMmZh5Vzd3TNaVxPjKUJSdQ9QvC6YGBS3PKDZKyPDbZgT4MCh",
  "key38": "2VCzV8BYTcTdNGqqxTopkMt1eeo4A1oh4kvYBRsPADLr8naPf8omug8F2BExssnnVXxAeX2qpiL96ZHkKF7rebL2",
  "key39": "3v8iUdpWPnxMtXzFWYEwABCtovRb8TqNhRUHetiLT7SVJCboeyamwYMFPNezsDV3GZ37UpHBCWYkj9Khxks52Hv9"
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
