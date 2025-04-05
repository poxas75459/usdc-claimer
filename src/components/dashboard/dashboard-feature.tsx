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
    "3fPiXsMprm17CS8yzbsRxCyhCnd9VcgYixG5vgoNtvtyxL7GC9ok65CHBJ6YgmMpfG1Wb8ZLLhMCLoC3Fy55rUdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sk8MRmaEBeTe6AYCu13ocoUoEY44tjTeRhUV1ip3eJEd1m8jwJsQgwWG2u1cM6Px23j9cm4iSSbxtWmTWVRZZsB",
  "key1": "5H653VxgtgmtUJ5qozvjuCu6NgrnYZB9RMTL2Wc1QgKvHmvGB8pfXukWZemGWsqFmAsXZQC9KUZV9QrKyS1ajyqC",
  "key2": "23NMNUMcfP9viQMmSrF9BrZ5pV8YkQCvejcANL1QBwB8CYtsLQA6cxrr9VedVxkVLrLmLJguniTytbBLfGdkUdcQ",
  "key3": "25JWpYvwJ4GHRSMzhC9CgpqFkrkUYjkfkDoFgS7PUeNVYqPApQ1iZWHA8AM7gTnTR5qAP73CLGstUwBL6vWLKSkq",
  "key4": "2pgPd5bUeALGesoSVq6ymhCxnULAqCJZ9rXTRMCCZVBLVtELaD17VxJ8jhggKHbP4KrirNYjdTQocQipp11UmpVh",
  "key5": "8toA5igPyapiZgF6QDoHut5Sovq1GHobuRb8yUDV9aaPPqDnRqWwD1VtA7ob1bC3r1yqXnprMNDoE9xrzU45bVF",
  "key6": "3TexVWbtrbwZh3HRqm4VY7gQsJHNe8j3Y2RSwiUMJZDoAzVaPzoeGGeJzocA5ZHqGyfN2WRMBbDD8mwZoDapNF3P",
  "key7": "EhrT9jVfhMLan4kcLjkbS85GpVBmmdkGWFcoN65gsvjLACd1v4gZLPNvvC5zxGAum5L54AGtD7eGuqGJofAYB4T",
  "key8": "4aBgGVLY95EmNwYnqpnxW6YfAWkDEUd53DXX7RMJDzP99F3TQvEex3vAh5dQXNVVg1MJMqFpvWckDwd8qSZavdf7",
  "key9": "2vGfV81dTuQtfYKGD1dBuA8SGLoR38uGWCGgcqxvangus5Z7NcMJaAgWg3xmLL5Uqm294QV9dBg4Gery3fpKEZBH",
  "key10": "8HxDaYHjyGD1ugNMLcxQSZMhgQVkzd3iSeZqisfcmjwvFrBg6C5sqbgj4mLsnhGNTG5CnhJLciD5TGDB5QitxuE",
  "key11": "4LkareobhUXaj9Rk69EFzJyztTURDUoD8YpKnLZzqwKEpcfqS838e6nSdsKrA7gBD6K2TPGsqFtxus1YbBTqZSCT",
  "key12": "4oZpiSbNCerMgg9jqxuSM4RKYXXcKgF7H9zCYDP9Sn2bCMgLZhL1GbyMXsQCXUyjkqZC24cYX3mu8nDqJtoQH6VW",
  "key13": "b6sP7Pbwc6DjRGauMdLUzjJ3fHc59HPmGX1PexFnLLiyuQcbJFBPD2ZNwEpbjyemoho7MGiCMYCgoFGGsNrZ47E",
  "key14": "29v8Np1NLBZq19KyhxmN6ZguVgqMJJUibTN9wemTkVgTRvmBFE1h4esLfrFUWqZK2h5jkYo1LdjrSSQ95UgNanHF",
  "key15": "ZGKoUgCFRHCz3NvsvsnvFCmMaWrCPN4LCEHWjSUpGx9oBJE7byKghyUDcA7pX32KHDvHWjCgWpDMrc3JQAwr6iR",
  "key16": "VMWpjhKxXkoytt6ZEHuPJx8dwUqZpxVMczpJTByRTKvsQr5rSrinmTaC6gG13gF6Xzj4SRzmVagtzBPFNzuSbQN",
  "key17": "44gVRFvNRaG6XHqnp1akQg2LB26bw7RfoCeTAsj1Eb4QEQEPVcqQeTkqNDbpjEn9E8hruMdnJpGqKSjmoQhGXdpT",
  "key18": "3tqrMeZVv9vJ8C3U8D6bmnMH1hPYyQwfFWnab4zP35BSCpwxthk4gpyvHKyJVN95E6pgaEr2z5PYrZDXu8eg4xEz",
  "key19": "2MDwR2Abjf9gtLXgmwvVQi6NWSvzawLRQC7PUAbupZWUAcBGDXzKQeFJsTATEPbrUbnDo2wTw3JKjcAaiaBUhw7N",
  "key20": "2jndfouyEHDWvQ8gWoH7qyvXsHU6toCa3seJJSdiWaMZmrbA7nTtUevimHYBFxDtPnwMizevYK7RCXfDLhtRQJ83",
  "key21": "34nfYJg6CYAiLRMeFgtoXsnEhrseow9vTbsLEygjQKMq2scZDwpWoBEFy2ATzdkstdLfyACT3EWCRrHM776a5cxj",
  "key22": "2pFR7C128Hbotu4NEYfZYpxCtuTzVTSDWxkLzbiYQB5E8BesLsRWVss8x3sbNiXNR9wVyA3yxd9hALav1dX8ffJn",
  "key23": "5q8H5uvGBQYx2CCPq15GsHtHDhLvvWjCxDcjKQMAyFLy1gPVhxg1BfEYYv2VMv5wySXnYYGyre8mTEaSZmrHVcJC",
  "key24": "4geeLZaLZmSMmGPNaxCpGTTmM2s2EqAKYKDGNt5ovpVGeDxPjvUJeqte3KLSnsYLK3LLCYq1BH97iKzLmfwoUvEW",
  "key25": "4qcbtWJD56Ge9ecVqYxZcoQT96AZcPXYchVsiysdLKRVar3W6hV9jkgTdhAuESUYUKps9ZCUua6zXRg896udMThN",
  "key26": "36ZDfUhWskkCLWBKGop8A5nMdm6taHGrFhg8aqFvzxXDYeDjXwNn6WSwc7Axv5burauNMTFbW4BFuL7tFL5jwh9Q",
  "key27": "3U4c4kCWaxoM68Q57L7Sf5ZGHzRogs5DtTKRfaFeP14UnDQpNBMDfgvmDGJySRz2vuNSSnyETvoph9NLD1sb1dNe",
  "key28": "3N7iKiTShEaAoASnzBRKgV9br4vFCi4mrfU2AZyHx5NK8zk7eGqG3k4J3TmWgZUiRTg2QRppbEebBn8ryEGRXdNQ",
  "key29": "4UPLYmxWpKXgPQ1ZEEDcvjjWJnHT9ne41P7fYdXSeqKZ3MAmSpucdV5gtTYpyd77eshYKZk9Dv4JmDDf6oZANgZf",
  "key30": "5v3cpD9Kv5Kco9ETiwEZ32k4YsuBM7UHUrKTmrmCmn8GKHKjkaG2oqn25zLDoTY58u37qrBMyLviKEzT8kPsiToj",
  "key31": "38wdWJBkNjwHwfd9FjPZR2CWTyJBTEQKXDzxYZfr3ejvFW1F2rBNLdQqmMbJSc5FLWBimTFxyCKVm1CqpgYrZSaq",
  "key32": "3Sb6uDgyF4GWHoATQjMAuURSfDtYZ5gbSa578Vyn7BJmYvX5ACr9zzCgkXAVcLSHqSgqMX5YmkCu3q1Vz28HswaY",
  "key33": "2aDSUqGmaqZxgXUs171buj6TVrPWqmU7svRxK9PnojwZS2eSRKNHDWtXhYrh1x5gJ1qv4mFdpYYG8eJ5FZLZcJsb",
  "key34": "2fAiMdVXSeBJ7VGN5tUtJntdi6TF1k4yVojh1tfiU3bbBvvda9Y9fp8tFTwQPub7HP1VnhckH5tXY7Xv5zZBT1tj",
  "key35": "gwzSeQ5R2mGZ5q5ZqMzetTsbmSk5aQSvwk1iN8MosDGJWyYzpS5xQ88B5DSZsmkPSt2wGjLDLto1SZ8qoCAv4n2",
  "key36": "4niTGP9XHdAfH63u22e98v7ofDCHQ887vDy8MkfrbPsNuJgq4CTagnkGZ8sqEHy1CB5HTJcZPFX64hzFqRaQ5ohC",
  "key37": "2Zx3L8M4UKSNZZVf8AxbQZTpBuLkbkaALciNVB5d4qcVCVzhvT827LG4hkD6PfcGrKhDMPYTkg5Wq4FfCQg9JJ3S",
  "key38": "12561EvesE4HjB62hrwrTMGjta371A8FKE33k2Jf2ELasGjWbMtbqnF5qDd7kop1iM6UVofWcjgTpVCVooHZSHcH",
  "key39": "5oawfwL1wsBayimPs2yvrn5puCHXJgjg74wUvFwCQdMUChnjF8FDNpbxGd3ALEQEZPYY29criqEzRthD7Fty4kdn",
  "key40": "2yMDXFv171pDmiKuVr6bowgTvotRnFsiFAMgEnN1cjrhfacrjFJDEVDhCsyhSSHsMU5LZMP7g89ZzwpVxDn2ppnp",
  "key41": "3WHST2fUr4WD64sbD4VHTaNeYJdw7G1j6aQuYE3NmtrwFUiqVgCoAJb52KCQRRufgNsahXYu59GNvUcjB56tMqfD",
  "key42": "55RQtYSfjYXk2wVLbpjYc7U1srisxDFBBHQCEEBG1waBdvRfiPHZwyfqo634e52ttdcjGvKejX5DQqs9p5igN4aa",
  "key43": "4bcwznD9Vn6akbj3wFq1rLSr1fAhYA94yZtrCWywVobXjiYeqUUs77Af8o1ibhgBnRV8Cagz4VFWYTxfugmodVfX",
  "key44": "2RNNzTHjde38Xc9oUxebxXpYVonijZ96EDs5GYhVbxBCPMGqr5SwmW82zcNw78pppMT1fPpNdE5yMgty6mbCJNXQ",
  "key45": "5r6NvcUmVxbKeU7gmjTDaTereZQgFiA3rDjcYcaohqdkHDAoUxs6sZRxMcSrq6bCJjB3d2FtSkCACjFh9Ruiwkjy",
  "key46": "5nzK9PuDgcdm7XEYrrUwAJ5ik18TG8J8wt65o2sLGn9PZtVKB5Y7oJixTcugiXZ9a4zyuEU3WLZjihWLkWQzRsro",
  "key47": "3jfCuYNDR5WVndeVEkG6aMjUre61MX3XtPdNAMc7Dsa5Eg2qYFdfrPECMNSDAqCh2y9oP9VQhEZ2oTp7yEVYTiaL",
  "key48": "5Zo6Gt2hx4vvoiB7rTywoMKqw66g4FrpAkjJ9AGn7csJEBaFQaM4Nvf6DbcJYsoh7sK4zWQUav3AWEpcgdGEXDmU"
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
