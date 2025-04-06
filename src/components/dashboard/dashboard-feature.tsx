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
    "3uZDgqyTeCoJpWdYZgyMciCouDuje8kdrYzrEg1mUtDRcSVuX7d36Pf62SFumeMVhPdr5e7fbzHb4M8vXW3Rfe3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsuExbGdLg7VUMBUEgjUyyQNt3RX9fQTrGAdU6ubMFc4HotyVpi6r4cHgfxMdQ2aAudx6cmmjy5WRztGjRCEApi",
  "key1": "3sZrfcaExgQzcagrKfpcaruFGLMrd3S13PK1Va4vTZ6hTKPsUCJvDKNxQkUUw4diftoYC33bBna4ktceyYtZkPbw",
  "key2": "5bmTGaqwh2whnsqqxUWxGBGW9n95dvjXzK2A4931sEnzX7834ZiQCSC6mJnVhZmwGH24mB2cqeGPVjyMt8857sY6",
  "key3": "23rL3SgeR3tEx6ymdaVPY8wunpB3JNBCDdJUDLsThiugs3KFYrhFWzfqtA5s1Pono7KnrsPNV69wUwRCKwBxLC2R",
  "key4": "2XyMco4A5ZsxUaFC7VzWcz63Bb6Hezq7eerJjpNko8Pd7BDFg4N33vZXZjEuAnh9KRVv7ntECdXN1HaKGFUFgBz6",
  "key5": "5DvK7B88GNDSmm5Hwu9BaBJXbt14JVTyuG1EpmAiVMdp797GRDFqpPQBZTBeyCtUEKwjvHZzBmkp14SAnSYvc69d",
  "key6": "2akbMMRGcHqCAhA3rmhSHNNdFyWBHtqajreEXqvDpU2jFWGKbLmdtiToKCwGKVdKPyTUXQYHrjW6Daz6QrpEH8Mm",
  "key7": "2VNkFvRVodc4YSAPccbFFpYPbAtAhJzuzQsu3xoxB7yfkbyGJY1UxiN1cP9TC82mNmxwGqH1KXiabSQrEwJnxwfP",
  "key8": "356McVVRv28E7XfdsJFGxa6Uu3XiGFBnPHxWstYnwo3qfZBjvmrthmyTGrynSqDo6YfwsmWju15aHYcAo8wWr5j8",
  "key9": "22Yh1yP5dhVkRiWnvxuiiWpvmFayuAbLCczWVLNzoSXHRUxwTdSYSGxKRfGSZZvtmPAEdg5mFUCsE8zQuqPWLS6k",
  "key10": "439y4TB32BqviDZ2UBHuBYYQciBvQTcZVoo2QjZodhrjYuutbuRekRvzPePBRZKVouqLA3nwd6fm1xhi1XoQjanf",
  "key11": "2nqyJUzTC3TzuT2U9Sjnf4SDV8D5xfbuy3ziN8nX1xykop2G45X53NbyzGX8niTULkua3DJfQ1unAsRbvKpSarCK",
  "key12": "5yXz5peYYnqvMN9QodkwFUUSWGen45NaXetRkopNq2mA1CLhYU79VqhMqoDAAYzmiLeeXMdLd8qvtR3wy1Lgt2V1",
  "key13": "gSWxS2prHKMBsrxKT2JbUBPjNHR3geV4UUfZHMFywe7gkD5oj7Ms8eLiyJiVW4dejE4TrzgFfSBfzLea12T5n1F",
  "key14": "4aAMpWWBcqqq9X2KHbrNANZ6Tc8W7mn64VjBxEEiV4wL7iGV6MMmwDE1tPcEjz5U1V6qDBcmT5sQNyzwicMj1VrJ",
  "key15": "3Tp9FxaDWFYGeXnYfypwzHbcxGPr1YCi68dK8Dm3pFRw2Xjqy61awsKrtZUNPAq1UQb1gmma54iujF2ZtL9PS4UZ",
  "key16": "2wXevcnAeFJY25g5kEsj3Ni4EUaENHsSuS9RLPDGNCQacZa8tRB5kWZk8XR5DQ9GivuQ6qU8vbK1RxeTJMmqaJiE",
  "key17": "2Wdfgq49UZP7ZxmuvmtYCqTHj5HX6hcVhERrZWmKNVmKCDkKPGvHSkcSmUoQq9HPHDqBf99sfg167hxNSEBSLRMT",
  "key18": "4e3MiYg8CqcTMeTyCaytHPqmUCJXHRLFBFPe1zDZFidYbiDmCr9tZiPkin8Yh9fcZGFNYQoZHjtRPQwETZwAfGqw",
  "key19": "5j6q5esSdvi8YQ5Sp66NBeKjzp6Ai4exsqgqSixNVGnQiH5Zj8YbXdrJtQc5zfLMdYEReiqWwTCWvT9BivG367pB",
  "key20": "ybEZxBGDjHhVvnxffY1S8KJWJAwdBmvwu2R3QEd4XtoRwtpfu5yCmUbjX2nFX7HhzkrFFUWLRtUbqMxHKn5LmQL",
  "key21": "tFSTJcNAZfBwfvtXr4d8abtW884S61ouLn5U4J42uUibFNqDcB3gEvoqty5jAEyWrt1Xiu48gLhtxnwn7Nc9jan",
  "key22": "3ucrqT1xDjjfUXVsSQQbu1Npj7aMZ41ipTFCvQZ9ZaMYvcJvTHM8N3J3cQ2diTpGepj86ejbVsboLseRbSLdFVhZ",
  "key23": "28LQoT7TbzWts4D5oX2dTWi8Z5wQPKmzCfnLcgW1vSSXL4fHpLFkT39jQafbrgGs6CBjsHuou7Tv6UVE5fQiFXPZ",
  "key24": "47hyBkXrjcHhon5AbqjqcNFqK7V3s8WX2GqXKfFAtQZMBvAMJtGE9aqARSiVvigUMJSQbR5BeuuoqMcRzSw613nR",
  "key25": "yksDmpcHJSFSUxgCrrkuefu2b4Na48UYUuzZWCYAYc7E7ZD675pSCfmkpDrr2dnpPJKm2zJq9fvBDJTPiWZ2AAH",
  "key26": "5GurRqChCCPJhBMpePZg1pcmwZXr1Tcho2ehjWf5hCaFx57WqxQoYW1UyrtXJtU7aoLqBZHbAZ2b5RWKrKGQJ4B4",
  "key27": "5D5yZFownw62cYy5q2PwutrzpWsvjjbDFGquDzo6jxFYsFG2DRmrAfWPGXmG2jw4WbZ3kG9k6o2YvsYGSK6k4HHf",
  "key28": "2JC66pdU1JBHFjZBDc8MUJBMcyrAEzcEM59A7RXZYiZJHuLLLYYzWR9iYVkP6GgLPqjxkNLETaJNtWrNfrhv7VJg",
  "key29": "4tT8Tzk6D6x9H4Qkg5EtCHKpXREby1omgRgJ6vUZwn9XSdJUPGmJ85eBo5yWCFTBcUpVPASSsC4ztcZKVstvSGKL",
  "key30": "3X8wYiS9XnqpBP5w4GKxHr7PYFGz9LFeSgu9MCNwXxgUf86SrGmrpPUsCaPUYDLZks8yht8etpAKbBiT7yyP8AAD",
  "key31": "5TYpmK8arNhGnXn2RPbRvAvaJMYbzLo9SGjL51eEr1gzWgPxYugaafsRtxFYeQHWRJjVHZXUpnYzGWctsWgvZ6Xk",
  "key32": "HwMXUhvjjM2gNfHCxmxYBety3SP21xi5PcGrsDHXNYYnoPUBZ87C81CLGDwKWAdYb29DFCNLKLbrUb24CwqxxGn",
  "key33": "4VzQ2xzRVMagSYv4ACEJgnJ97nAnoP251xQymAL9EJ6rsefuJURxrekqzAwc1TeKeEpQjzq4kJxPfuu1Parw6Aof",
  "key34": "KsgJH7V2nvUMRzEdkvVGwmJBdUBx22jWATetevjhPixiz8kGMhvJtrM8Q6VW1PL1PnqzNt9u3efNPJhNZnzwEaF",
  "key35": "2CXpA2VkcSiTtuyba4NnN36PgxrniTZi5tWiLK9zJ5HLqXrfwqa5wMVJJEN98hCEoPLd3ZY1YPSLwpMDpchob8Rk",
  "key36": "2zkcwbFyY9x2EYjy8yD3BxZptKm3VVQngUihJ4WgTRss5uatbCK9yuMBKUqziZAeBArjUYHDTRBwDrxzPQ4HW5SU",
  "key37": "3h2fxesjG9FpJug7BTXLnKdqto9aQ6iqjJbSB8o7BEg3dSanZ9tH1yqspu3txiJ6VmuRMRWxWFkmZPwPMLhMntbn",
  "key38": "3qqzDr3uEze5eR1Wxz8HJMUjYce8965moVKB1uSNW86WfPSkYMhoJgzVVis7fyDcHA2mViHCKjfnFHc1kHfdLYhe",
  "key39": "i5HhN5XKAFXvqux5jjYbzEhodaedeiA3ZhheH7PekgJXrFuVaxZd7TNaaqfShHBXUZ2TghuBb6Hq1onSWJSk9up",
  "key40": "2pcr1tRCGUcMUt51T3XPNST4t3zTeZC2hSGF8vttLg7nhvo6U3U7XjhHbfMoFVKK87mvKQuDGioC6uo1cQyAUYB5",
  "key41": "WZJ6F1mgSZC3ohfNUCtKvx7JAnCHN2oNAsQxMjbfnhDfJyJjSJ5v5jHo5e74Cvsm3f1BZckCCfVhybAHGzELat4",
  "key42": "4wouNYAN6DW5kK7Z79uCqvCPs1ffpGxs6KjfNyxBf9yhpovKrZqtWFyNXGHTpi2BsfQffKK2quoqaxEAXPNFTZaE",
  "key43": "3BvyWKEz2aJ5wQsVgAJNwZkV2DyYKvavsfXYvf6yJvJQ6wsjPTLRDsKH93ZA9dqfmB8MriWRwa68mrgHWkMyuoju",
  "key44": "krHVZwoLMSLVWu7f8LHFfF7zLa6dchM5VTHwgv3rhcbMZ5N3G8yPBWbmvqMqTXx8xHqAPT9X7qTL2Ld97AUBrh2",
  "key45": "5BVcmafBQcpSHcSm6ykDHLYQEzxvKJKmm26TjS8r37xjpH3PGBCwym7WotkYyd7amh2ChuFzAnUs46fZBM7MoB4s"
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
