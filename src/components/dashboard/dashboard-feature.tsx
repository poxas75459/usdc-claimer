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
    "2U2HvHuMPEc7if8hEoLPxjYCYjBayktQkh1QMwdoPNpTWLtKqacgivoxKci4wAcTeoC658HnRkuPmfc3F9u9VPhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtVukeWsJFj8uQJpr1T3oaYkVxeSRKZ8rUfv1q5ovFfcBkMTZSq5VeTMUvUfrWcJeGYug7eFpmZiSCwNY2qTMPD",
  "key1": "3tP4ubSXMkwFQfJeT5QeAu3gQoXi71J1w7hk9X8qR3aYzyYCwaP3d2xXFirD8auezhXQdvjT6GnRc5HiPs2LcT1G",
  "key2": "5uy8ZQbj9hFdqEKs25yUzqdJuC2Gf7Z8mHKy6kY9wg5mUctToCmHxVvTPjwRMfCGGh393jMjt3jcTeweYiUbx6t9",
  "key3": "44Gwotkk56M7K6vAQXSfPESL52JcCt8DNJDFajt38oo7dDFAhh4xv2cHLdXT4A8s1px7uaWyV82Uih1Rdo3ncCZE",
  "key4": "3398zfFaxNh6MgM5jVGb1aM9q4TXF7JeCTEjMaHa9HR6rGq3fxX1uzqeBjJV5EHVXyzDSTwK1uV8kxp6Hxx8tRqw",
  "key5": "35E3CQTPZLJqZXFWf3BjQrzrfTH61zUJLpCq259NkujyL8uTvr1Qhi2FcWjh7qQv7aYJAsuK68F2mxoUE51U17Lv",
  "key6": "fm3AudYW9xRPCLH1SEdMoTVfgCvZheSzacdhWJuinyyhFPu5Ev9gC2WKSYgutwB6TTdX8V68kx9ffQT8dFJchDr",
  "key7": "3YUU1Y9E8bCVEMMivc5oE3uAjMA642WSizKvEigNz5hfTAfdnM8MnGcijv82dPnZmLhxxoCCEfPg3KAS2DpvANEW",
  "key8": "2iX9VDpywLPpp3ty7BFX4AeM7LcPJH4Pr8LAs98o9NZ7Eck6kKqm77dVvqxmymKJQV8q8kRzXZTSzqzZ3ytjyLie",
  "key9": "nXSv3Ep3SZnXexmxec8KCpiHMqTWSmcHmz9X8B9yhrmtSJrupBsRQwnVq1UzkymdzyMfMa8DEJedyp1SQtcffBm",
  "key10": "4BthAuWMnAgxymSkMKoLtJFLRFq23nevdbvDMhvs6LaxFk38BQ11dWAqNaWsBh3L3Mgsn3t8BkJWCTKLHnZF2GSi",
  "key11": "3mgBa4MBVBvW3x8d5pK4NvRvwFtfxMmMZYyHTdDXtJ7oZKS4AFp6T7S95ZYxkqD6toWTP1SbKuXpyRzhAv8Gv2Dx",
  "key12": "4JF3chXk76VDHmXJEixEh8M5q1fV9WcFpJfqMjgKo51mdm23EYXA6zLwS4rEFThnRm7AFetYimEHCeXrpfyQ4Tut",
  "key13": "2tVbn7uo4bCVdPCZ8oiM977ucH2fVdRRwsytjru5fEkE1qpWrZJrLbQgtnsPfBEZ6uTGcQU13RMPo6EKYg5bqfAT",
  "key14": "3244qiMA7J7fxvpGJgkawQvcoG5aNEk98eihXv11GRHbrBXAE4DB7MgL1NQtbVqM5zGAt6s6TVp2fyrbrqCBFbGV",
  "key15": "DqVZuneaLWGfLF138jeeqKgkv3RCxiUW14quxKo5KqZTcQvaFmvMBPSNfwYjo9CyEqUAighEc6eHx6Luvm6EkPY",
  "key16": "32c61pKZwH6vUDVPrqgbEPTYowMjoVNZ9yvjdew8vbHR5FBvB9WpKZNfKA3VyuEFMF892xDEHxXvranHw8mGCrg2",
  "key17": "5MuDL4KxQ6FYtZg2CXANQgWCzaPARBEhzBVnN3Te7JmgkpzYSxV4cy591nhh6jphifzx9risVWRFS5YEaTa8zXVS",
  "key18": "2n9nLfgQeoJiGvdNQzCFooqwPFcmRnSZCmWLujhiX45nZnDjeqVyRoFSaUeCd41vgRZC2qASraZMbRTJ1uwL8sEj",
  "key19": "4eb64sXjhUtaaFMsxY3J5xp5HQ7SbcMFxEzAkFw2h24ipFrMtUHcGXSh2g87dMDqoVbuBD6eTAtQCnGuu2gahNd9",
  "key20": "2PjqGnK972F7PyzN2HVvCmdGY657JVALRWHvtEGhoGwgCLe8NgKe6EVK2hJxuBmrC2Q18JLsa4bRQqa9cWnK4P6H",
  "key21": "5jTNPfzBwvLDkUPcaVs81yf8t7hre5te7c5jVHmyCBqN77eHJibn8hcY5t9qjCfcN54h2KPZ29tU5xTNes95XnRS",
  "key22": "5bnVqBSHU2rBG7jZmNYtuczN9L36wRYeXc4ACFuomqVnXuNc3UNGkwWpRekZ7rFBNM7D693mudyoV9fa2HUQcjTq",
  "key23": "5bAgz7uP6mCdnrKFpcR4Zs42d1C5tQaMPmMQLjM24Zi9KvYavXL9SGrqBLgWp7T19iDSWkmM9CMWcA8wGHZ82DRp",
  "key24": "xAVyrsxYwSwrKUBg4Uotx5AWq3oVdFAVfPoMGFDujfUKzEY7gAhsLjm4zpCoctirodDr2vm3mwgsHDCAbmjGrjY",
  "key25": "5cuXLSJsko4GNwxAzbnAcr2hSYgQWV28SFN2RGy7Lf7yqkXgZp9DwsyQXuvC52Ze6QM7D3UJe27nKEiCnpEUbyEr",
  "key26": "2p5JEf3zB4FiAc4vYRBctWvaKay9GNkcbbpkDsioEtChkq4aL8uwHeM8BCYo4mWjYoeoyjdA7vzDej6ehgJkR9ND",
  "key27": "4R3LWpo7kEYzAEhnn2BqchJzLwZxrUYszqT1dDcLVT5WeXPxbXffkxfrXXTZyCd38hkwqLu3o47N29gmAU7AiwBv",
  "key28": "VqHfEmkrPjZAU2rfvQ4UD6gEYbYfaatam9pfcEAPTiRQkriN3RFrtvffCgKpUirspyTDYVpsi2h4XThYKNUQMS5",
  "key29": "fA2EiivRYPKfCWz9irRJSp5o9dobztWpNkyJZFaCQLqq6HkfrkiFK156oKnnhzqbHjgjVoHP5sDQqVA3gjErcUj",
  "key30": "4W7oYuF1KTdBq3JtX41z6GGCbFmD8bA6gGsCRToCGJ8BaXCV8pBNKzfHCQbgkBAnh5Zt3cCgQs2MteF8TKVa7TT6",
  "key31": "5pUa5CrXFfxGLS8atQwfRhtgLn9DvnoeqWUz9pgbL3YM9s4u9zyZx1Z4Sc7Jpwc7iY1F53tnFZYwGZneYMMLKyBW",
  "key32": "KdbtWFy9heDjYdFAjdeTEQ6hhW1ni92hdKBc7K3saY43s6R6mq7B2tQSRrWKg2QXFrK4JUJWaQVnjgwaXgQXfjb",
  "key33": "5NZhtqH971TNJNu7vfh1AbpK7DEFRHdninrqb4ov7hoRatu7cUnMsmH2oQ8VPwzLMYW1nWeCeKuSGeh3F5rSLcXo",
  "key34": "AXqtVbzbtfs5c2DRLNRxdrcEvG2JRp1UcWexQFkByKjwi5sGswAGbbkvPKwBBztZdGoqUPQNRrvWMBQ9UQfdN8a",
  "key35": "ApyPZtYF5XCJEL7HVbyQyGU84xqAJjqM74kYH3hzifFK3AHaKWaNcM7BUBpSsrc5NoM1abnP21nDGufr4MNAWYS",
  "key36": "5v3KXFVFJnVVEPTRrjAaw5MidpKvLwaea5eVfzjcDmh7tDxvQ8EDCjBB4DbDtqyXNbKkEoQFDo3WkS8i4GCT9bFo",
  "key37": "55KxYxUgEeJD2n916nT1Zj7mBmmYtS2r6P3ZcYiM76mGS1BCmYTTa42mDasYAaUG1EAXyAS4A2rnzKnJePDrfViL",
  "key38": "5tP34jdvSQ7ejJZHQSGbebe6dNPUXLaJfEsdLZRiJp4g7A3PcVp8cuTycfUzS9AuzG6y7Uh6rq6yHk26xFrPLpoo",
  "key39": "2QaWg8bimUKmtyqMZiJ5L1PUSLmVJQFNDj8WxSNtQi3Qu9anMEs9Qi77DYBifDT8MVM4BaMKuxiVzPSaF8rNcAxp",
  "key40": "5VpTbLeKxVpaTp292Pnof4KMZetBetGUyoDiRkNM45zG3ew4VRSPhuoBWd1hNA4TmVB4R3JzuQNpA8fz1mgfb8dL",
  "key41": "5DpetKkFZ9FhADeRxmo3aGsrJHBZbTRxSTgzrw48GL45bMuzQApr13pc8nHpcaLmPc5HeKsph7UqVbPRFsNRvYk7",
  "key42": "5fPEvDeWnoHK1E7VddtZ4kRHRNvvL5Gu4Wu6xJVzqY41BU3rhZLT6WF7rE42WU8TfyCB9S9hEv5xvBBnXyVzaBpL",
  "key43": "3JtfyG1bQQMGB2LgUrrRF8z9DiuV67AqXEm29ugARoUcCmvRBquecJnp1MNcuq3gwRCQsvvZWKG2rwV38WfNNL9L",
  "key44": "5srYEdqQZXHSgPkBTxBGkTmFTGkuPFmAm6UosuH2Dn9FEfVELNPsCSFixdjZhHJ54yhmBZWf4HFvw9C1NzhKSPkd",
  "key45": "2NYC8dqBtuaPLuiz8hZvxamELrXASKXaDPwTXjVuo5WztFFKtLB1wDaVmDAa5fjbcDxkiVUBT4ErQ5Vpu1bMG7Ks"
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
