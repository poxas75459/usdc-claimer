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
    "3kBepGZV5JXGDU2Ezd4aj4A4ovdck7wCTuZGYyhh3eSHWYjM9Jvdduoyab7G89ipw8ubZCLnP718tr1bRFeaWPSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgUcEf49Fm21YCVwF5KdHVB91ddHZHFe1w9d9hYEQ5hmp7DYFwXAAgXSKtHXyzNM8pudYgPxonKSrdgMCA9zf5N",
  "key1": "5gQbFX1v9kwM8kuSr55rf8yYDJJdBxDz8NtXKv3vn6TiCXn85RzMjsEaUaa12Lznrhf6pbUxd7vmSQ9UWCUJbND",
  "key2": "4edJRe4dPbqaxT9UgMUoMyy55xAH6jMGStzyuNpAENKGfRqewjnUamCSXvUJoa97HfBue1iRHcDhRWfVLSLCKyo1",
  "key3": "5f2DFfm8eRzJ7pXc3L1ZN9zf4n4LRtLJ6JqSriDJa8jXpytSR2h9RvrF6GGrFps5r8AxrLwgJWqfYHHFtRvCin4s",
  "key4": "58c5P6SkEBQ8qDXoFnD3WPSZXEEZWgLj2Cqv1faJgBWxPT17nFvTDF1zgHqcpkkz24GvtxLeCfqriYYYoHFeYrcp",
  "key5": "xQLKM8izwbPZVWDrTcx5kT9bu9kPUxWX2TffFV8XvdB2KSi7mZ9Yhz6YtHJELWfZdyv3kyYLzHw82YBZm8G4uVS",
  "key6": "48WsddHTkK4HHYUSfg34NvsfstnWP67455TKohn3RQSrfVbynTRHs3EBcfbEsFYh8ojm7gT832PzShuVn2Pvi6ad",
  "key7": "5y44uD3NcpvSQHz9ttuPM9jy2GmWeK1JYbNbuq1r5g4WQBKpUq9XtB27xwsDhR7D2MnuSgbHqmofC5jRYUjPMPvX",
  "key8": "4trWvK1XNrQwSh8YM171WgeksC1t5ZPCLvti45EUFTJ62bwYt4SFkKn6Y4BSkQP7jfgdUEx7pWqVhR9fqtoZKymS",
  "key9": "47xaXiZ9JV5eaRYvMgSNSeKzHzZVWSZ58iUmrYjvivE8HrYJSRZWqGHYoNaKZhVofioKLyYE1KPxH44F9s5Wo4Au",
  "key10": "2QEQVpqv5U51W23JXQPtL3Bmxgro9uTQDagFJ9YarYQrbk6rvneHQQtGQf4xNaR9NuDnPr9nmJjsxfwHzbevVCsh",
  "key11": "5npdBh6fHY5GBHyC3EXh7boTGCgi9PKVVWB5SNboUzANCJ9k6YURsMNsv4hgpGSzKFyoya1d9XnMSLvDsv4jpbiR",
  "key12": "2jR6eVhd7c2VVCWGgYcULMt312V1xToVzLu9msGWFChavMVitwNnrstHULVu1L3Rd61ZUH81LEexKzhnhUGvR5bS",
  "key13": "5raL2AycX4hPxjDqc36VqdVi1vudFdR8a27tUYXq9gkxmpxv9VmoW9EkgDCpqNxSkYhAnEYW6hTRgkCGKC8Nj5y2",
  "key14": "4PKEhvhREg1zdHfK1XxjrD8GPNicst7f7N5rQPzAFP9dFXqUbTRodjG3A6rgnZgjFGSvhk64m7KeAfqzk72Q361S",
  "key15": "5QTfcRE4CFR3GvgGRH65DpPURpGH49cCgi8oscggWRnF29x9fiHd6N61Qm3ePug3qXAiX4r4rDayu1nRMPNZTbh3",
  "key16": "5mb9CYdi3HmYGpXoQGich4L5omFGUDcRUik7zZNest9ypR4fJrg8R7GJU3juCnQQ6t6itBh6qvVdgVbmwKgE5g9y",
  "key17": "33dcC59gHxBrGECRumZtU9p1x6PDGcTho6vatweFHTfFrvS3EJkUHPWeHy1UzSpacxPanms7kKj8FR5XfgemMNMw",
  "key18": "3ZVXitqYLyu2Fa3tQeaak2vomc4XrPtRCyaq3XcNtFYxFtqV2SzXvWWpGVnRqFZG6XiQNs2vAVZE56JVMMsibDSX",
  "key19": "63Y1V54maV8RGKwUbFXZh8MxE86Y8oFvsZEkGm849vVsjBaXsB52AWRE2zyXgNYCA9tEQKaWz8pUJW2sBcssUAJW",
  "key20": "RbfTeHUsoLAWHrtu9khGtRveETVGMqsxvbKhQ4ZULdeH9AP6944bQXNUxgF7ZBzDKYMSEEebqBsFJKks9Vvy6Sa",
  "key21": "2NCvjHXF9zqqw7YWfzh7bFjfJ6Qn987b8iDFE4HUxYvfmbEq7LTw6fPWwFpvsY95XeTyWijKVPAtLfFtuM6DHze4",
  "key22": "zueUGrLwT85Jm8XfuBcatEJF2opPds2XzMtqMBQfzSEH3cxzNEfy3uFAmFefQEJLJxrD9Lq4kQAgDBVVPcVGGYB",
  "key23": "4CqVidKby7hKv2RL8hkXyQJYKQoysXLPM9mbW75YvehMDFdy1myADDaa3w7UZoA4uK8atxrQqztSrqzU9AEtDwfY",
  "key24": "34xBue8Q2ySDe7dwDGFiU3ge2zKK2Vf7HZCbXieZmpha4yjXo6YNsy5h3ZStVeBWZpeLgtcLQegaPRNQrzDVY4rF",
  "key25": "aEVZzz3bGrQPYzUdMTywDibmHo8HzhXAxEVcEbJP7egEYczotxL7ooHn7h6ZqQSUjpHWECQXzAAUkWfBtzrKu3s",
  "key26": "3qLRRAhHDLzafqxFo1v5tZ8rye3b9U8mimZcTgN18r4o1eXg8G6KtgCcv93c3UAALxStMMvCRtVz2etcMAYPZERK",
  "key27": "3YgKdJHkbxfjavAjAYn6PX1N5ThaJPkv2Wy7BXQuF5DxHdF53Pe5Y2Zt7CqLUSRW5nkAnZeRj7U8UBy3u1MoqHPk",
  "key28": "57P2z2xpnAuYUrtxk257vLyxVUZnp4FWgRK1JC9s3niW8dvFnVoqsCoMqyCCrdYea8e9reR7CMQ3hAJHTLcoHQtG",
  "key29": "3Hu4ga9jDf95zJuhiupFS754mgosLK6NtAQmAquWZt1WTfhw9TrN3M91QFw731Djened9jVApCfd3b4CuAYZeHwC",
  "key30": "eZxKXKsQq4VUVSLcyswaVQjvNBKgAaddE5HdWYssJXscUjeQ9MwLaM7YCLrZCu7Tt8hQbkjWQxiD2qXN1GzikAJ",
  "key31": "3Vv8PCs3izkYf5P88ug1u9q4m24nbrE6AcFw8Cut5qnJowgPcoxCCiFkfUs1zpqV2YdPby5144DqiwwnfMDeUL77",
  "key32": "3T7HJNTFX1vUz91X5aMHQmTzmLcVmxmN7T74Q6d2HiEKZuQHDyYike61ZatZHCi9oWteaoqeH6mB8AxrK4wgGmCc",
  "key33": "vzbbcAZtBGkhgM5dY69zkBgdd4nvRD4nHYrsyGa13F4AkRmmRNSxHA3Wun7N78GB1in3H9mQnyFJf9qNotxf383",
  "key34": "3RuFQoq2y6UECLuht8acNvyCCx7GMt4TkS1X8iNJE4p35jiAUa48A6GEnPu7o3BnBXggqnBHx99FuUAvW9LcLPPw",
  "key35": "332LJUV4uL16TMTCkYNU7LfEaZkkTDcpUQe7febo6z1MAXNaQYdA5i7ppsgGzWvvKNoLhEtNJGmAXcuLxjfjswSR",
  "key36": "3jKLG7yRghQrEUdmDZZHULCkjT4VDi7AXDxJiR16SUsUSR5TqKd9MDaV8ifJo79Wshv6Qn7PH34pnjrHgDveJBhS",
  "key37": "4VkggKmuY3eSqyhYBeRhpsTB1KCMm7qwaTxcYEPywrueRFmgAprmPdiyc7EYwGXhVMysXN5vu2v2A6WgU7VMfXk",
  "key38": "2L4Av2wSEvjJDMZuS7s7cX1hkYWFYBWnhKTgTukjutmcwRxfDRTBhUNeMCJbvPidDfWUiGfxroZxM9a2stSDd8ZE",
  "key39": "CRSQUQpHF5iwYwptVPbH4MuqatkDnsX6FKkPdbCLqMJgy7Mm7KLeg39L48uxwm3YCzHk3g2wXecWwezA4n3tSbB",
  "key40": "NKMoBEzttvgBkTkWNyqZp6iyARiAGwFPVAFZ5JgiW7UbMPgycdaAtyNKowd8bGU41gbjoj1QjwJxrunaMemh5PN",
  "key41": "2Kv9XN6Hf9NfTf3u2WKF3VFrqC9AdC9sMXPhiQbEdjJWCbS1CYMucbwigV8oDrtkGW4LG2XJUJWx7ELiDw3o9oFK",
  "key42": "5ScMo7VjPWXp5JnCgbov1gMkmFRjhTfbEgaLKwHFa3ejFeYc6SUUZRLUV3nAwbLeQaCM6ho8ebS4XgrDS1iQuRjM",
  "key43": "3XmRF9sgyKa3aKFYcKFTwi8QFXB5SY1AymyEh5aCr4mKP1F5ckaPZZsgFA3VPyHyHBtoXVGY2GTtv3tE9TTsqZLq",
  "key44": "4wv1EVQa2BMhK7H8zwG98SGauru8whKEpGeiNX1EUzJgTscJvyWN3tTcdGFVjRiiU289GfhxWCwkPBNrwM7476fe",
  "key45": "4F6PaYQeXe2XeRnUAfRrgngGaqajEPfaR8PPRkyckb8XhvAygCxiQEUQDG2t7Q1r26SNTGXoTL7naBWt7f24xgFq",
  "key46": "3E3kXCfSMmm6RoxNpSE7QatjEmCVv4UeCyqizEQYHzHECgAmw1ZTZLcTp9Rv4Du64sHKn44PRPqHDbS6N2DacqB8",
  "key47": "2TriGUQZJbpUpmrBiMe69fGFcEc5oNhjA7j3CkzYa9AyHycTpSh2WbirY68JHHSxPTEb7HgVZE9Ax5vgSVoQXMi",
  "key48": "483tiGdf2c8JyQSvgrtyi9VdcneS8R2fqPJFhdnLpd4uCBQYciViF9B7PJVAH3r6r4Q1rkuECxY1JAcNZCNAp7wu",
  "key49": "5jjQ5ZXnuszxGSki7HuVnUeeBGfYKdiYhAD4zc273nY7p8askCofjLe9aQQKvUmVVCNYADxohZwb29rk1QvPhL7N"
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
