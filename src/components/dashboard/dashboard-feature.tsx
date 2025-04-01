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
    "38xVUu9x5nzgcW6iFqhTZeXd4TBzEkJku4NmYUnGn5vHaPs3oGUHGwzQwjsuSkJCjAiWiz8NGq3Y75yccvyumMBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQLrYvWSvhfcCLdAsZNVd53wsi3ZPusChk8QQro66cD846cuKvcuoisW67CM3pc3uFURHdULCnGqbe5tMAiCcAT",
  "key1": "33F8q8xSiKXoVhBQhdjXs8JKANtUYg9eSS2ghkyA5ZUHu8gqBossXAbRuqmcZMr1V92v2LiDMYRbqiRYGhuieTdc",
  "key2": "4VMEWf91ThhMoiQ5eckow43nWiL7ZesK8AXaBMSgf64tM56brGuPiwgWLZcwhp9sAEizhWDmyMQUy8BjqAF1MSeU",
  "key3": "2Mhhs4aFWTVU2aNr8TDZsnqBBrT6BRSknSgejLsmjzp52jM3qwiC4yaxkRhP2F7VvLhxmsHA1bfjzNpbeJQUP88u",
  "key4": "57TDDdeDao2bb8CB8LjYGWn7ufcAhJBZmrWmwU12Cw2sVbupfvfVwazUdSWwvHrPB2jKEUa7hBnBmRdB7vSJF6oR",
  "key5": "2wojtzPiFyzmD4G1hUZ7bgNuSRNDAFDTeAWkPTGHsBFM1FWHD2yGjTdiu5dbN75sbAzGi8K2BE5drnpEUs1mChXR",
  "key6": "5sNZcM7rPLYUVqXHSBXro6hVBLpRdVS5RpLCR3vJwy1RzFN81FozaEYpAKuYVhjQVH6PiUz6aZ62nB2zuxgBqMN9",
  "key7": "2tNh75roJ9gvohkHFPEdrfUPy3rKEZChJ9BJFoqtKevtULLewUyNJf78QDWqACJh89G4xKJ4JMnA4HAGGdEBkztx",
  "key8": "4RPiqfHdWkJXhRo5K4BeiVoJNYeg73GrqQ8mi2bS5WkbyJJwSZ8yXkuWAKdhDj3zgy9AUR9a9NoTD46A7jqKAXXc",
  "key9": "3c7Ep4gv2Cp2xvv6wsaoJKk2aWwZNM2w3fwQzFqsfZQeQLRZgtrdg4dZmuJyGtJPAqZVbvPQXoV6Ect6ZWfzfUiR",
  "key10": "5uSD69SKbvo6Uxpgm897yBuJHQjvrRMt9Z5u3KaorhpmR8h6T9sgh3BsMZqzVmFgg5DGwfYgtxz1RQ2eCsEWoq3N",
  "key11": "JDPUgiMBQFCeJazYv2ePvYF9Xx7d8vpByp3BPMYY3MgZHEMWmqY1i9ZHYJXMo28fuxGoEMsfTvHgbzxZvXmsSxv",
  "key12": "64BfmzT6EKayY6rULpxBn3sPtyYpGPruoeahSAcgDu32FD4GkRW8Z5x8JZmF11UB1v922w2jSnaFQKctEz1prZ9v",
  "key13": "4gVa3V9P3V4wmm9yWY6FLFHNT7hETva7DR51hEk5SciWt1MQHWBGHkCJsBsJg3XnEkihJDNHRN4RKogndfU94nVg",
  "key14": "22bdGkqXnqsj3EJupSydU1cA6NZGFGYRygWkcGzr5KryUX35fiUMYHeGHp2jvXzypSZ3NfBP8v2djipWDkk2v3Bk",
  "key15": "2TkXk1NYMu5wF5vAvic96kW8MSzkKeNsHZhjEmCmtYpgdJL4CcFBLVrDAk491aVTuPaRSox3Not2tHn2ycvqRjwt",
  "key16": "3NpLxtW7Rx5TZBFoSB7eDFf1V3Zn4q4dj6kffDFdkLC6otajbQM9NFfnJnrCfV4mrcyJap4LCUjUFy2U4C5eJBuF",
  "key17": "urLfaczHGFFWdXeRCpsAgQSQKGXZAszQ465SYaBjYiGBDjVitg1uY7tXNGhrbyUqGL68LUWtePwDuSA4zLrvyzb",
  "key18": "3zr3YrpLiitFMiNjxowD5tyqUEWtdBYECB9NSctBaSvHhfUxKV94F8k5bjH9eZEqUGfqp55Jo7U93pz9sJ9o5XAN",
  "key19": "5FkJXN5DG2qJHCb5Ripfet6WPsyuzxRQFozyA46xpV97A7zGCqoMfKJt8nvi5kD89wiDncvEmaDRTT1GdmoSyGNm",
  "key20": "45iMtfS2vWN48a1f9DffbAa9bYJj47geVv1RXGQiz244ZLe4PLAG92xo2jXY3EGuRnguJPFZD4Gv7n6VCh8WgxJ3",
  "key21": "52HUDYM5qtAFWgybbuGhgUsqXE8QKNaQe9VTzeYYJ8PPM82vNNdDWvyYC1knazD9FZxFzdQ1F4AmjVQpZDiNEaKN",
  "key22": "3yxmtDWV4V37vsFvF4WyoHx4BBsWGdtmfxEE1UGEBkJvGC3gfy4vM5dJVvJQx3JymUqS5CjzaQTG9nYouyKmQDQw",
  "key23": "5zR2iLpf9oBXNBNmK5VYgbYzCrqppd5sGZmYMYe8bvv3ufzDAyyW6tdgeqK32XK1sBWAkMLPHJa5uk5BLzVFM9Jb",
  "key24": "2cMqY2hR8ZNwKwF9H4afWJRhjW8XpnYv9QMk67b7nS4WZ3of9DAeCAzkZvma53ED1oMfdto9MerLGN76xGFQxXUq",
  "key25": "5XG2UbVkvyQpSydpoLuD9GnoXvcSxbQMzXJphqmFt7x8xAFFRi9vSoEBmPwBJt6q9r3oG6S9fUpFzkQubCm1jPjf",
  "key26": "eVutW2yCW6SqSdQ5HpoinzMpJUiQcfshCui21fUvBmeTHMdj9n74Wz37WTBr1ZsK2uX5FGXhCSrXcHQTCQH9wqn",
  "key27": "2EMHrgUCNgYtJeWNfGMiAHH8nFoM7iWBT9tKKJCySP3is4hkAGqgEAKbgPe5TBbFgUa93j8fsMaLLpFCtM6ez4yW",
  "key28": "3Rt5hrUn1inyn5g7yvUEF5hcg6bhB87RpdemhfUNsWkV2SFSXGCpfMb1DzfdaXKtKW63gQRkarxmpbNaMKiYLfXr",
  "key29": "4b3dHqBUTMLwWpjbUpJa3wDTL85PeBPr3XkpKA1ExPorP1SM3fptmHNRMubLTGYJQHTZ8ECusoYGHfYvncF2aesy",
  "key30": "2LdQTwpq8GubC4w1P1gAPFBvGcmC6RsfCNEiJW2LZUJysMwoB2nRVhb8YrJfcScp47kFBmtE27uWdLrEyXMmFZyA",
  "key31": "2rRD6trGs1P4xzjLECXC5q1Kqww4JC4dSbf4juaX1nmPUb4UbRZRhwCk475zxttyWZY9Fx4seJcGejHmTCQFCVok",
  "key32": "3wazryVbSkwWwyF1WBqag12BXdvG14W2eu5krDjAe1S1yL32YYy8zSkyT39JPKdtvGXSNSN18vgDK8ANx3amtrSL",
  "key33": "2RpwbKDRQwUerkkHY87q76XXYzwt2wWBTzAJ8GfyRuQ8oLxDwP8hjNRdJcXFFQca2KuhmSLuUMsvHdgDdeCeKKxA",
  "key34": "Z32zq7pwkBfyWCeAczYnVVZowUP48ETZRtVuC6bhzjtomWmPmtpQ9fMf6e1tFPQEpLivojAKcp95AywL7RGjWni"
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
