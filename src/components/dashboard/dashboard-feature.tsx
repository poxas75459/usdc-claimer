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
    "5XrBsJno8uc97yCbaY7MtEDjS9jy1XQ2gxMQsTykXFCbvBNWQS1KenmNCHKBaTBpHGGE6uZuhrXbLLYdoWEeXT2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jsw5CfHU7Kfo7hUoszVdygMhviTAjoThobA3RYirZjnj5ND7NRsNhGbAqVcubMRNbm8Ek6YmhodV7Q8SUKcaERx",
  "key1": "29FPDHVVbXPytAUYhbgccdUTYDMHETLzLMcaAFG3PrbzNJnBVW66JC1hy6DfYh4F9CNEoHxt6hzxjfh3Co5qyvb3",
  "key2": "29ee7TeB2EyKnb1GExf5MLFwdqHiAueHcJALEs1u3A7HUsY8aovbtoLj3Q3BcnTBbwoLLkegZj9rEE3yAA9MA98P",
  "key3": "2xVHKz8q4i7ygq79Hme9exppS5XGT2C9g6EmcLKG2LaNikRQzDByTLgUoR7bBPegDcnvRA3UQbnMqUdp9RaTkygB",
  "key4": "27qiczDYCbwFZh5S4L9fNknPs8xjvCvdFXhdDUyXHYJaS7neMwZCmkkCpYKku1f86VSKbUanApnfGUVErGkLKQpt",
  "key5": "48EqG4pFzuRcmL2gEHv2AbGXmZ6qbYHRxNAJwmu1vMSipgV3jtnP3pvLTUBuSQqUgeDkm2FJwbiDmgtbA56Snxux",
  "key6": "4REoNnmMw8jvqjDM9tCTSTXNyeRi7LAEUYsf6QmE7Gk6VXq2N5JkfmpHSYJug7y6tWQZU5RuAcBGnvNZwBFmA2rv",
  "key7": "4331udE88mQ9dtMmDXQ7cbPUKq2s9Sxw5fjEwwQTejzegmt5HCnReR4aFoqPtkKpFSaUKX9d1PwpVZZ3cAuk5x3J",
  "key8": "57Kr3LjgA4iswrnCtmm1L5daQ6QbNmxzCT5gz22Z7QboPQozJJvAskdvYDhqtrPc4TEAZhdvvsCZHEcdwj7SSm6z",
  "key9": "5MZ6FWypzMAPaByVpKLGQf72PFH3kogc4mUsKhxkVM27udaSkavXBucvbNqAXQ5VYwoTYidqG4d9B5JQVMGpQHQB",
  "key10": "wwrWejo1DTQhwvANKvbiJAqHhRz5C6WHqXrmFGy2a1P8iatAsFpMCgESeHv163GGRNMYK3Ge6DXgm1cYKic7qF3",
  "key11": "4oRqy9zWjKXwPEb2z3jva4gtn1ReCVvg4ohg4sP85eEkuuamPmRJXL1CGbcEByZqnWPMYPpASLD27bTu5DhUFrNQ",
  "key12": "PoHKjnpf58UwDz79fbSrVQ1uFxMUuwXQECKGPT7KigqjaBiMHtkLJArvW7GDjNtfzBWoWpXnPDZEUHNtm165Cjp",
  "key13": "5jdb5SLXzZ5qLn2fwWfiMRXsyHMxLCNWZs58pQ4NxQEsJHYYyC6PHwGaiitsNLBkGmVa5ejUrRo26KLWBLcXgmee",
  "key14": "5iqkEtRAuAgKWSeHjpcmJeCwMwvSLpUDrvAdR5hcsjCBSua816DBZpg1UqKD1XwYGSxqgaXJfmSUWuPtSuAdQWBH",
  "key15": "5XXucMhLHAP8JrPNTzGGo1rLBPD68eSRrVxKf4tBzgxrEvQX6wfKGWJ4ykAQqDmhMgE5Zm1J4sLuaoK7K3HVJPmN",
  "key16": "yEmEFH7MZSwD8e1ECx4Hm6WUYK1o2gRFV22grSMgw1r6EBkzEQV3bav1dKRcR8SM2kZHiKtJ7VpCXEkQGwFpqE7",
  "key17": "3uA2bDfPW8d9GCRuUhj7mFocjfcGcTJy44fNhFWyCCwuv7Ta4FWEGekKxn6PZw8seWjiU6GEDa681UjKY3tg4YvS",
  "key18": "23LNQ1B24XJ5BGPLfrENAkJuQpv9XmKtzp38zsWuE492sqQzcwSfoRJFWmt2hB6bB9dfMtswazSdZcDNafsXKVVN",
  "key19": "3BdFtquz7hcRVnsNEEGPJyaW12dgpUm9jyf4sgKCMYwq3Aw9fVyYHWMBJrsudjS5kYWC7aoKyZ4Zrmr4yw1Se5fy",
  "key20": "j6hvZJCGXJHy8r2Nko9zzYUir7Ki31uinj77dCAjM9SuHxEenRBMEEfwDqpLNkchEtaNywJhMrARkbgMnCAeYzN",
  "key21": "5h5WC9wMGDX76xqXpbdv84PXkzkg67cQSVNAYTRnaj5YtYotBnz82GwyRqMtKqAT3EmZwZs3QQeQmc7m6aZaZDHm",
  "key22": "3USRYxrK1jLaNCwjy8JYT76ruQKyZPLyZaJHmgZEqgvGLTRi32Sfo18MnUDv6PYdaRzoNSdTCj8ShnVukdPg5dvp",
  "key23": "5HewhGtrCtw5LxKULY4gLWSN5JXFhqL8jmE61waFyeoQHG88MuLBgcxfKBe4BpFEugcNMiMsrn7Zs1hAgJU2aKd6",
  "key24": "4NH9xNMgNupmuLJ8ymxyjn5JTqmohN4Nn1YFAAYzzfcPFroCN1uvha5eBmJCi7f4v7QUNP4sb3fp4fCo1sc51FKM",
  "key25": "5s7kqvsWTPEgXz5VVyq1nKfp4rKWgRTsupX3ABtsxWwMMKwBoNLH5vHxvAbpvkgwVEJeHdweq4jFUf9ogMhbNgkL",
  "key26": "5w9vAjVcLvEVcjMSZJVf1vSWuANXZAhAYzyRw3kwUHmSAjoxR7ecbLwN8NqPEvh7FknEfpp1FG7zKTYNYUuoLmBq",
  "key27": "5GwJGtPuEeSANPNKXLivx9e4mzcqcAr4FyaSa4iKVvKBAuVDwmvcTyoThQZvemqDmUWN8tfppjS1r5fyrcJQ5yXz",
  "key28": "2uaQsfxer3GvfJV6q5DPXfhKikGH8xFQdjWEdSMBcEgC7wzix9uDaXjxQRr56hGfQWQpFctGtUzJwABUDFb1tXEf",
  "key29": "3euGYXmS24uxn9yawgfDdsjJgN5LPRgujdv4op5Zm9HaoJQqfxTLr22nHpXwj5TKeyQ15yZRLtHPT1FKA2hp423P",
  "key30": "2ggV5L7g4PGu8HMyQK1dPcMJCPjVR7wLWTKBb3DU1zcQtfCarPF61dnYqDu2Q9icvzzNn4pbw1PEiyY3xWRDuEro",
  "key31": "4uybGq3mFJARgKBv5bQUYBQ9HHqpPS7eE4qzpPMAQXSeTntJT7jAP8JfADfkpfQaxmASHeciuBEkLt5mMNHP38yE",
  "key32": "5kjEEcWegp9LxYXc3quRjFZhBYgkafSQEvrxbndfLZdAw7ACsMLWp7utd3zHPQPvHPo4bZzeJUikcMfvEkLrwd1x",
  "key33": "2CQc3ERELofgP972iCp4hPjxAtBUcwLjfDxH8F4ppDT8oxnpsvRpy7p8thq9vNuThAkPber9sy4pzYJNdNqwn5ew",
  "key34": "4RH2jMqSq9GtqbihBhrXZ3YQ1yVojgAWhjhCyyJM9QFUVdT8VUqE9ABaDP63cue6iGTqAFRqfzBSQYkDtBtGv2vc",
  "key35": "5V3FiRC1Ptzji3zbVTCxae4ujYxDSGLTVpzk6PgGEwBHytMDppcagHKTiZ5dxrZVTRgXUuVgzfVF6JPeHg5aHUEr",
  "key36": "3xDCfAsz1e8dV4MsvB9P57TsR2AnPUBvz1tpC6N7ujTcYuDsnGdiHAsBwjv3P9j2xS5a7fQzV2N8tDN651QGXHrM",
  "key37": "5bWJ98crhbwskcnn7hDjGBEiLgPrveUb39RwyXHs5GLWVs8QcK4pPEyhqgpPdtMUy1XubLZgW5fnRD9tSzDSgUhS",
  "key38": "5waJJKDVFKqDvYejS65RcMDYbdi8ovzw5RTBwKufCNVbiFP2jdj88T9wWQJM56ApWCaBTLonFy7JAVwTaZqH5ERV",
  "key39": "2x6DPjFuWs5sBXJ4PjVphqmpUYoopKnYrKrL8dvg1tUus8Zif3VMrGdmZ5AEgM5G2ArmxvaUjUNVQaCeTxXS5DzK",
  "key40": "5jyDZfvgLqTdtNWv2iQo8zZV2iaLknpdbKFjq9sdsoPNstqKWUW9Eq4EuS2sjF8rYhztiCYgMhzAYvTPrA4AW2kE",
  "key41": "GASU1NKGSJjNzJkGETpf4JTNmL2foETeRhcUcGvaoLj5UGXxdKHS6A3NV4bZWtUBzEv8DBkvwJ77EygdfbY45eK",
  "key42": "4fCef32WHsng4Caq5eCBrMLecGF1EpecSYkoTU13RV86eZ5iRtZS1drjL11cDHvDG12pTqSPeBJe4TAFvpLaJZ2X",
  "key43": "2nV5ZJcb9ZeV746v1MMa586zmsRnvSbZKHCGcsnSKDABGMATdZNjYDBWeJ5FagCd3NDKLvnjQPfxpLAooSWagHnv",
  "key44": "546DoDkaijzw6xC5GZW4HtynoNRyaNMLePW1JchbNvRma9p4kNht8VFvCQ2uBDsRB5aRs94YZCKDipWfVBEqXAVi",
  "key45": "T14gLuGu5c4764CJ88edJKUJn2oi7kZ8GV5FX6j4ymTXyc5watmw6pRN297wAzE8c1dPTwuoBA6w9JPvRbUnmaK",
  "key46": "4XhFxfbQnKabHuf1d6Sy4hEsfmE9BRusBHoLJunUqtznFXqstdLvYv24S2gbUoTkPeEJ3T4rKk4MtEi1kvW5PyKP"
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
