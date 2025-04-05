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
    "3RwV6GQUXrMHySzdvCU8QXK38a4ZsyKrj18oz22wwduTf9kNKHgBYPJa5Dk3f7bDvEXSCSxUKvsQ1SHuLm67fDCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qEchYBnjYStUgeNHePobiCRykU9CS2HxPZLgJm2ct5AN9omcUhGTHyNA1yK4QPapTFpYM6nCnqEehBkvXustPT",
  "key1": "5XRg2e8VET8F7FvEVPYokjEiRryxJA7NQYXxLtG32WojpVeuXVJtGgTWUs5vY16MZbWCt4muuoFN28zMCyKEVYLj",
  "key2": "57fUpD73QVJ8yzXCHeEVZSPrvVgxHKnF19EbfwVZp1BQDwj3L9hYCcBnusiAxGeJk7HujJiJDJfPBnTMqZ9oBAei",
  "key3": "3LiAAgYBS3PSoJXur5k6zuiEsH9c5YmQ9APo2W9phS7zifxDErCNvtAU2w7yzxG6hhLTc3aUkkoDBkbT5rFLKW3w",
  "key4": "5526EHke9YD93RdE2vmsGUPrUF6fNY4g219r17r4kmFwmu78jBQn2EQicCkucaNex9xp6p3bKQTDtsBXGyiotqNW",
  "key5": "4ZgSfqND5ooajgwiDka44kPCYAHUnZQ1E3foAYh8zNePdR7e8zBpdFeRcyApqYvMmLC9Du3dRWJ74MFkfnG8r75q",
  "key6": "3YZ8MmNyq5pedk38raghKG4saLQkqFVF4us9QKC8S4hLxm28LcDr1X95sG1PJMYADFB2h1LudR4azpsewhM46u9R",
  "key7": "3viaDRmfwSJhFGdqA1wMcxzy2ooRXmhn3vmgvZTPEi6PtDQnmR1RmDmMVSx56NRvJNL8PyQW1Syb7K1tYAn2KDVJ",
  "key8": "5evnHkxm1JwYUpoCE1cmoQdgV9Aa4wMLAkNtjoxT6YMpQXkjAU1twhL8JbjwsJM9eb9DWm8FVwt7WK5KvB5sKf9u",
  "key9": "5Ru9FS5HmQsPzkQavpLCPz8M9A8wTLbZL9RneTc5sY8XDHdpZwk2yMX25836tbfcT4mgPNJsFofL3dTegzAEkeSW",
  "key10": "xZT4SzhU6as7bMGo8rci7Dr2eGcvefrK3fjhYbJV5Jt2nvjdpUHkbNwsYK7hqsSQAJGTkYsFt2V2wH9rK3wg3AV",
  "key11": "cCpa1BvhDFT8J8f4infgz4F44P8dZqnBGHPS3W4HRf4imCLHJsK8b9wFs3NjjdfAUTKJxGhLPB6WfMN2GjhjhXc",
  "key12": "5QmdeFymGJ8EV9mH6fBTYjz1hvqL8ZJZNkJBgcmSdS6HmWyE2KAU1oNYFrE4gsZ2VETNyarmR6hPsps1W1QoqUsV",
  "key13": "5V4uE5ZZPdyoWjqTMUDgDEC7CPYqc6jhga7zc3nXAdWBQP4JiFTcFvjWJoPesg2JzprLMzBTBCPHdyaYbZ9sx23u",
  "key14": "34a9sbJEJmbcY3wJ1XN8twAjDecPJ3PvrSSrW85NCQ7WwE54Lq7WAT9hNV2mQz5RmvzDsFSdDDETG32JNAi2syct",
  "key15": "5nEDNuEYerNEsR7Pnf23A2YmQBqJRDuewzGXjH5ZixRqzVee9o9X4g4DQZEXazD3yRRcfjzLvzS7wzMUaWHjvv18",
  "key16": "5Pug4F4yrnqyT1uuo1v4kVBuEF1HZexCKx4KNDPpo9D7rei4HF66qsvmsTBLLsXpYxNkGBekmdXpmMqkb3qW3KZN",
  "key17": "2R7EbanXSocpJbJRXtmukGYhu69TdBLTYzFTAynpBe4QPojUh41jWKzkh67aWZztYLS7YDGtmzUCjzAZ1TdGVrcb",
  "key18": "3gXMPfgWjkFdXLxuCZoKyFReFbHtadNLv5HdbSTYtAcaj2LX1LcAQysxJrpiv1tQkGmc7capLzGafp3qDZ9eSEdB",
  "key19": "dAX4ME7Gs6EM1DKFfnHHQ6J9ykrNiuj7d24HyynxxhRhiEnuSvKgLyQJsUkyMDXwSbkXQW8HYE1WrJcQc5pTVV8",
  "key20": "5xj7oWfnJDVeMuAL3XosREqwjRzVLt7YGYzp6yHXmP7iTeycok8SaMskEdk31SHenCeFhoFpxD3aR5egt2kkBM8u",
  "key21": "dyuDpfFpivYb9WfJpvPhLAZjHytsbTN2C94QibKA6njwCvva9t4dospUk2UBQ3yRDkSpgHWmAHxCz8wdS2eMem5",
  "key22": "2ooKVLvg4JRjkcrs5B2uNWebFGqw8GatS729zC9RnxVJTs3vHCnVAST7mA8CZCdyi9YDZBmGXw8ZqBST7MssX4kK",
  "key23": "65MCBySUDajisXriqdxETn679inD1vZU3SS4CyieHJDrxJLQtHG5J1SmejCtDNMFhpEorFD95w4GfE9rAuVbLHAx",
  "key24": "2n8xYXq8fSBLNYcCQF1Cq3i4N9d1JnNrrFgpoGhZSdguVx6mwJiXvKib4EKo3DjW8SsZ9VN6T2GSxQmf3fgDq8q8",
  "key25": "4WDk2Vzw8sPrGYcdLs21nh553mgR3CQXp7nQxq48d5beeivZjjGfWTWP1YboNeChcFWCggcmMRnPwZM1LLQ2rzuy",
  "key26": "2GHQZQuwmWTTe9M1btBkSvMCjLSjKSW5yUfiQpYZAQNa5XnFzoscqJQzF4EANQAGUvpHf6pE4whGe13gg8cPMRqg",
  "key27": "5bGPzSVrjQvAhVdNMW6PFLGtQwCUcPbtqTesgRdgZYMrki3b2RQKwNq2dj2AnYB4fcWFF519F1Q1bBzVeGyyVpjj",
  "key28": "2Xj2AmxcdZRF5HqutHzDMqrc45gyuddLErDSbr3ZEP11fv6nuZRmZwSx35P1ufD4aRbh7XrsNsZiKpbHFfA7yd4Y",
  "key29": "59eiT7AP2WeYaRgDQw3ngukTra5syMYerzX9488ac8ZAqmjjYbuBkAyg4Ay6XiqEBovHMpvGipyzzM55vQ2qm3uc",
  "key30": "4EQoGJ8zBXhXfuiPmi84JvDwHhvaTdrqsD7AUr9sLkvTebQYkzYPTdfQikUwGQ9UuanAi9qsx52YxoMh19x2gjEh",
  "key31": "5A2DE314v4txkDWSNyFraHKAiyi6TDiR123sgsk8vazpkrnxvjBoZwwsseDhgUkhSgxEeFJzhCyycd9PUQAE2BYE",
  "key32": "5Y8Pf1qPi95P48cCFCoJcBQQaGPWfCHXkRC3ikUcF1Rn6dJMsMmtN6vB2HrDbbysyUqquscnmdkRi2m9aFoUo3oC",
  "key33": "2PiADugn8sxwxkzSPezg61UcvW9eN6epTshqyNZxYNGj814GvHaTKVm27j8ofuFSN8QJAZMb2ADHDoWTVwH6ACjR",
  "key34": "5Gzuez4uGsxDmUQxE5QhiZ2QD1Qtcghje4hdikP82CKpZdRNnUUiZSg8isfj6qCLNRHRQDMmjLJANUKQKBryhopP",
  "key35": "4BkSDNH5LiuchXQeLPCYGcCMUSnUiDHqZLbdSMBhGETRQyShb8xzCjsBNg3N6adqh8JZg9YJRNY6FeuYnxywCrMf",
  "key36": "BDPEV3cuKCiM32pHHrjBzb6CLK1Xh2xA3FDkDURg4w5LSdKqdQysDXNGd4WN1UsnttrUdXe9yELqMBQuz7aDgKu",
  "key37": "65sHnn8C31AhxYQKsrVaTTK1nFeUpEqJYRaimxd82Dj4jHFpvWTxd8yq2aLu4ptxLo3DAQKHp3SxHdg9qgSMqHrj",
  "key38": "43JgGfeqk1by5WnE6uDmvxVZURP7S8dJyPiHEoW32jJdbbhhNZ8b9U6LABMJz7E3PtYMbu9y9rskoJie5uyJTdUR",
  "key39": "53g47iVms3YwcgGYTPWY9aPHwmNAsSyFvBnEig3tBV4MyttwhTPdUuoeDCdydNVS4ygwPFT3v3ZyjTNkQXkRtnVW",
  "key40": "3yfTqH8fHEJ8XersFkaCwKHPx3CWwiHKR92jQYjJqaZTduJ44r3tKJdJTdpD6DFTmzVVMgm3e5qBienyteWk9XTF",
  "key41": "2n8qKLZvz1ehxLJNpUndrA1ehGLFCaPhqn6efo9dAbxG4u7FW33Wc4yQryZBtRfLHUPRtQTHpZAv5mbEHvoJ1kVZ",
  "key42": "5amxXZV4H9Gsewv2XJVdeV8ZcMrpiJutEB7Cexxdq2gu2JkidjwLCb21roPaRJSYV7prA52KpDgJEja65jGCrwUL",
  "key43": "1TRAKPSZyHsnMK4W524XDBsV7xcAQPvjgJChgndY9vz6QZx7YZVKHkjAPpfJTYujm9pjrSoj5BsauHvdTNooCnG",
  "key44": "25s8N7G9hprkV9eD1GgBAvnaDenCWBmGi2SKAUDCqtNcTVZa8DTeSMU5GSDEkWTaC95x3a9RKUxDFtUxJxnwZcnU"
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
