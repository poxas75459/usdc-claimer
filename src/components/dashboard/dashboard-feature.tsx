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
    "62Ltc6Na3XvpnmQJ3hDypFssQzuxJfPx4rFvfexnvLzgU5iaT9wtV5NWKAecjcHMWQBE5xRJ6as9oCXi493Cv4xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3pBGCXZ2QXX4DY1wMYqwpprihThmRCjFLpVL7utk4ZjomcciPjyLT4nmd47WoDhVX2my9k1V2YYYcSZ4voNpVK",
  "key1": "PkSDcUHLmmg2jdMrgH7vrZ8v1gEordcT8cEUBbDooynSVkzfXW91t4HfRBoJNKgTAVVoLi85WjnveMBcQYFfA4Y",
  "key2": "r4Kyh38TNSeQWLbtVagdVqfjLbJt1Xac75UTZyy19Fm6WXeVsfcCLAXWixxzyZH6qbf53qQEVQ333QB9MgU5Nki",
  "key3": "4xybvztmgdPkYkAomVisVKCHb7179E1v8PA1P4C9UGbzqfS2toB57aqKunhJQ3dNVmtYiZ22EE6UUkf9ecQ85HiA",
  "key4": "5dAA4qerohqyyrbLsKPY8dENgYct6tSGFcTVAchM18pfbcNMo9YvVZeLjoCrk6LaHu5tocnicjRS2LmbRwuX8dVw",
  "key5": "2CjpRRbefbgzwiT5LEDBQ1uBdnz58h6StRPf7czDr2Vo26LhyqYPs4NUjnxrZd818hQTELkQUdCV4WRuaCsdWvTC",
  "key6": "3ct4PH4vvxNUGPQ7n9b4cMbYhawENfibkBWgAJy1SG2QatmBmFaaU6NmThoTzdMYJjuRh7xDdmCK29bJwvKniwcE",
  "key7": "5w4Z4AtCttucUUzKj2kn7TFdSpwwV8TJbsBVMuT14XDjBGFjm7BLUL55iB4Ai5afVUBewXEk75ikPiXatpmpewnn",
  "key8": "AnUjujnpx9qtg7E4NLg1CwRs1Sy7QtwGMeiTdwtuN9kz7AAe2HiifW7rM88YzmuxeCG21tMsM3Wr7jiz3gcP3ep",
  "key9": "3pRyWGUbMSiPg5Shfu1vmwUY9A9MjC3kidCEm26rrbvkev3N9JDVpM3e7vGQ8DrB6VeacNAx8bq7A4W4wx6SPgHs",
  "key10": "3aKVLASkdiBihUkSJxwyiNXzhM7jshLCrXgh8TpK5pNyCtk8NNovsct6oTQm9ysEiTKUgVvTdpwzXeioSVhjUFzL",
  "key11": "3EeN92MaA7RXsT6KFrvTTxUMfGzSARWZrEm73Gp1WvnizABnKrSRZfXGBLGQ6GaCNthuc6ExP6WFMNwEvoeDmzsX",
  "key12": "23FQCxPZWrsuYQxbyXhREzoatsa7udFcUsQYQ7x5oA1rYG3iMBHdaKrPZoe5XHx9LTZSrAhQoWPNYEV44KoRe3gF",
  "key13": "3dy4UDt9KjrRxxgJjQBzEUzB1JbW5LksgLBckEaUWrPbz8AGSECVMVfE1vEbAMEC457TaN7QHr7YaG59oZ3rLveG",
  "key14": "36ygLUc7CUUCAFfRocM5TwVCyVRMv7MFfjkWeyPg14uBz8cKEzvQjUwoNiCfxJuWZ9tX8GbHn1K9Bf8Jjt6zhGYL",
  "key15": "2Hnd55cB8EZjQUXTVq4ZcYkdGwM8F7wYFdfosSZR5QqMXz8BUp78AMgJiKgoTuH7tnw7P4AdU11W3BtXR1cQWp6R",
  "key16": "4fLB2gCCzXPPAfEGRdCbrkTpyS1wbPQ2CeUfZJkgdVytBBHqVEsy739VQcQJeVKhwg8XYKiAmhsKaUj6UdWhAyzY",
  "key17": "2Qm9BbemYmqpeSVvLYsfwoyFsKtXqUK3x65yobr3eEEJM8k4aoVLYhWTqDXrpxQbQFNjmWi48XuQ7KqPS8wrYhXu",
  "key18": "4uB7GDTQSGac1yyEwbq1WR7wbR3ULdh5xiETmh2x56akTMHyVSdKCUzN6o1Ta5UTaRpEpiACUEWN9xwZFAWYwEd",
  "key19": "4yqGAMRXopCLS5BUCaYCBSi35XnCGmbsd8mmP1Pd63QnGVd3VLnnizE5MPUYgoVX6r4jbX647j4TaQjmrqpU1DRq",
  "key20": "2yFQadvM4MeTqiGoiFsSrT3tZJo6iEDoQy65VAozrVcA1AfNXMzyA1BwegsMnVGemhhfqgstPuLQNTW3gx5yaexZ",
  "key21": "2PNeNMkJzz9BgpCWc97SygbdqTUKtDzE92JLQRHw9PCDBXW2pMGiGZmy7kjxxsUURET9jfunsAxFpqfshjcAcqgM",
  "key22": "2zLNw5gzrg9H6wcvV3m78hEE3xi3iEY1Mn3coNJcwDfay3iCAizgxxuP6nVAJAnyz6o2fDr4ugKpyHF8qSvAiqC6",
  "key23": "4exrfDJe1ShL9jQbZ4JSZgVMsDcF8vrJVoAkFHDx9oiv7fF4echMsMTvKuoRF3EDD1qM6rRXfZAr5QY4iG4WzxTH",
  "key24": "5cus42spuhJKctkwPiHusHjJ3RD6AwMSxCKXsSCpkpHWFyGLg5zamMHrYZDarJGidz5jt11kpH3vs7tZjXEfcdnU",
  "key25": "2vQnuoZP8bP2FCDq8TVdKgoZPv5csJ6bkw6Agt77m5Taxtj6MyVouf61zgih4U9zZj7sQSi4kcV7p3VQpVLBuKvK",
  "key26": "225nFFo8m2BaDH1Tqv6E6NDqYMX1YUpvKAu6kjMfkuLafdT7CVNG7MrkGVmcgQD36Nr7kQc1mtVWEhMT197d3HYy",
  "key27": "4JCMQQejNw4GYG3AM2TNgccxoxLpgCAyU6XJH6J711rPNKz2BBNH5p2LG3eEFkXcen7doLX7FQTJuBLgYYMjzgYs",
  "key28": "4tBhMXSNCkBcecg5Eunm4iLHaQhGudY4HMxkGZKGseF9zDMemDTNtsvuMQpAGzu14vMGsHUUbeqyLei8o2QS5ebB",
  "key29": "3qdt9UeTv6PSoVrHWgTaG8Wo63yWu1fTNaso4KCsyN7dQ3PR97UftAyBB9gUq3oj4fTaLcPyyoSTmx9FgTsg6eJa",
  "key30": "2RX45P3pdn1nzW7cB73tkXLbUQQTuxaFYwwToDzSminb2Xsf8UBoGuJveixFdL6EiHA356cctb1KQ8ixaPuyLN9t",
  "key31": "3PaaJp9xQDWHkEZzDma3b13bpK1GQDkKcAsh9dCAZxdun3STm1GYg9csAk24FDPYmCmwovV2hesTmpwAWbHqnpgm",
  "key32": "2wZne2BgunedboiHwSRE11xGcvTsGSJrnQK48eg41RF4vD7D6ZaiifY3B1aHGhWSStNQZJEKWBJK2BHPhhcUpbAj",
  "key33": "3fxqDM9Lo5KjebnJE9Sz1fiQK3nTJmhp11VbbqK8mfxRQhfyBcTqpNcfmpM1ArjLZEoNCn8uMN1oTiCdiVqqEwLT",
  "key34": "3MahfqLgLTh6v7TTBHZdvxwwDaYz6gtmLHHbeqhA6B2ooKbkPqBXAQ2fTFpDUMQGEkAxAGp4XMc9ZDur7gsLKo3W",
  "key35": "Hk9DmvW2h3RabQM6nP2m1FdKdYgZCb3b3ann1KpXJfLvR6gsAVgHiV7AHGCSdY8R9Xfgz4uymqv3SFV8fAtam5r",
  "key36": "NZiyqHoAM5vhwrwXCMky6srykbraiHtsnxCWXiHafWS1LQJM4JAA6Nf15oymbV42S76b3c119b11tRKc7RhtQSg",
  "key37": "2xLiiZ9jhsHNj2wr7RAV3T6buDGHmhePPyH34Tq75zDgim26RtT4vFAGUXreMa5w2MwYrrB6oRZCQj5cPoStEkTz",
  "key38": "wvCngxMFYKTYcoqcRHixjMZPfyfvruEkqbwjSxoA8zX2pj5nxYLECjpkDk9AdPGg9SUGaUxWgZ4akaoEabaSamc",
  "key39": "RuqDHtLmqBXeBW9z2FemCs9WD6PuAAuUtqnsfBgAy66XzzPypCVk2WFZXdSiN46c8AchKVLNnZxpZ84b5yb5gVt",
  "key40": "2ABTo1v33nYb6m9Xg4gzDwFXwXgvVR4JnZgrQyg7e3XA7xHodL8yVCf2VQTgAJVULYX6YvxaygJDwqDeF3pf2njF",
  "key41": "45o1GdgzgDU8rLykrGKrP9sCYLTuUTUTDkXD922df8pvFaESJBTY8XasWvKzsdaKWEdLvXXqTFKrpp72fLo7qGf9",
  "key42": "5c67Sk1dYftjUfoNf9rEecnwaGVzuTxzzcPiRTuTu8aNA2wigXG7LsAfx2zNmjMySCMh87hiukJPd7n7jhwBsSvz",
  "key43": "4xYsJCzoiv8wJB7hQAdKHaNgTQ9xoF9ZEbx4ScbkydX2dtRPjUdZsGXK7v1HXugfbD1jh2DyKanWPmdvhKjfjzHk",
  "key44": "3CGKiv7G3m9ikge67JWAfhnsi7BxSvGjD2fonDTZAeQvPW8PPx53jJvnA24jSRW7xo93LHzFtEbwNCtVFKJgVMa",
  "key45": "29p2mEFTk3FhXM3xwacU6b8Yo3Q1HPFYpSur8wLWKb6fMKWs8djRxnwsZpfBUaWZjL3yAsiFLMzCx7GmHijDxvww",
  "key46": "2LpNkLZDXoCBXRAgcStAf2YfWAtKBd2JHjeFFuBE9Yq3HThxgWvsN9oag8ywEYBvuN8Qe7VZPNikxgihbCbMcB4q",
  "key47": "vxgRMBdqXF5sswSnGuasrkX1hiFQtSCHQJJHRV2xF892Csrc1yeCoH9bsKEmpDQfJZcjbqT45QKxckCC4WhMyRv",
  "key48": "278j5ZoBi238htymgsPty7LLa8PFUktwk6btf2E1rztYwV6kZG34R3JhAfasCfrRjdDBKSHbd5f6ubZdtZbMXME1"
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
