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
    "34ANJpC7Qmh37fUo1d9V4AG7WVj91w52KToESyUGMvhiGcXf7AU3ptZEMasP7bWqr657P9ABfnwPczqTatCDKXrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29X92PKHCTiWTHxc3s8QhARrEtvseUTk8DfFHHbMoP5WBGXpPqJ8dqoLp13ukyjEjLCFHLcQm1kvoMaw4bSjCSXS",
  "key1": "zxLFyLei1rRgXxCi9tzn63YrWVeN5R9RbgHmYic1sG9Nj9HYPd6gUhWbhDJiTXrC62F7J9i8jEka5Tm8Gmc6E8J",
  "key2": "45KctP4CTLBjQTHTA3kFTxGSTJRJkcKCLjVykL3af1FyAgrrCnbLbaioCN5mfzFtUXy89V4r9PEgS71iP8fyjEpZ",
  "key3": "5wvRwu3iY1LCNTtr3LAQfW7kkTdMqw9pEu7pSpv72nGK99rkXRwYchPSP4N8t3wpHw6yb33wmwgFv623NdjSVuQa",
  "key4": "31tjEjFBZ6DTBGTCEPW6DnDLtKCpgJrVxjXeotJ2KeZ3ibxPQ4j4MADJxuRtDbQ6roSY8eqUF7TdZXxBE6nHsJiV",
  "key5": "4TFLCmMHZVQqS1YdaAtgGMpsj4xTfQhhyYs6qswAYbk5qKevHfM88YKkvwEuCWNniHiuSrHTaefd42PzUiJ26fq4",
  "key6": "3WnYgTdULTsNbJxac84KQ61jotBRa8c3sMdg5n8yFciAP96wSitnD7mBDE4ybVncZL793mtSTddr3545rSWBsRVV",
  "key7": "51jF6dtrkS4c8PigAsX3Z2seRBVpVPutwgXhNsiyD7yQgX7eFAs4nfH1Kt8vLnZeEp1HyxMDxp8G3XrhaURb5wmH",
  "key8": "5HFYiQPbDEjP4CtWhFjnqsYJj4ZYx9iSxQhwn3pUsRViBJxK1CfYc8ehXnvpxGegS8519zBdSH7n1w2mxXh2r5wQ",
  "key9": "2ng54sSH8n2tDAy3r2UoLB3N62ojpMLHtmEVUEpSqcEtsqBntcEKqe5su8W6QR6iXaD23LuCMKA5PdeAs63wuq81",
  "key10": "4UwyzbXtesja1PZpMqMzhodRqMsr2F6HjGjzPRGhGmkAWDGHyVPguKwSdia8NNA14ZXoDhKqthN4zaWRCwYwzyM4",
  "key11": "d1F4JttCwgqaVg6BFKUWpfAo3CuSkh2QpBrfKwmL367QMMZ6ZB8mJpuP8xKPZ8rYFoHxyJAKRpcETr9CCcVfAQX",
  "key12": "3bTrsuukZjmZhEZy8tQjfTRx747DLP8XQbLgAnRRBsHmfTerZ6DcGQSL4PsgeBBnEgPaG6mVD9NDQi19iRzVaRDo",
  "key13": "5KfsaE4V8m4KMmdHk2DjXTYuMvYZtm2Yg7jcfXuueABjdVzTXNgiUpG7riwdZDbe4VNdWWLQRsAN4UKhMDxFSXPG",
  "key14": "2b5q4CM52Aq3nZ5qH2F9KovmjwKtQ5of8KS7Q47YbGwVxMRMJ7N4VigJKXt8hM8aVAtVD1UMjesYyeotzoyzs1cc",
  "key15": "XZxNAp9WYMiov8LuZsJZtSerBcKbc5xHKnjtNvQHx29CcxqSdy2jTb6tehmyE4qv2c9WovaWTUjGxzM5SpecG5f",
  "key16": "5U7bfcyxcpy22KHxscwQhAcktjEHVKuQ12nbP7CQuYNEVFHtKSjjr89zoJdfZHd5kCcgvtN64G4u7CsZcMcq9DbL",
  "key17": "5DfTnRGNHoVH8q5gADgDrAmS3QXnCnZ5SeJNt841TbdvtBVvN4XRKiAfXuHdUcQ38Q9q9b4TPF2YcF8Q3d9gFhA5",
  "key18": "2YiS3oQPBzHzRQm3nrNrog4gA6rRxJ64asa4LPWzg49H3EjeMCsSjP2x7UJotQ2Yhx9B3bGtXQmDokUUiRfgkJZ",
  "key19": "FEaPeKWqA9AAxmux7QkJVyQEKKC7yuNVAu86YcEgDiHdAnZFeKHHJyL7ZBRWrW7ebw29wET6AYzSy8w8nVQPr7H",
  "key20": "5rwhjK4Z3usHGYfwBX8Z25rZdedx1RDcy2qFa33Tsjg5WaWssp64oNi41Pp1JHPWEQembcuxREXdgrNwoJXjcrgS",
  "key21": "38yGc7zBqtVF81nZsUWpaAQyM7Qcvi27vKEygsXwySTbLKHauXVazzAikMGW52cuph1ARQxcqL1WB4kUQdhg8gVr",
  "key22": "4FbLdZHM9GbJHFoFndm1rKJYXY4HADxHyXnWi3oaf3rQcbTfZHcL12rPDBJFnCL6jEXfX3xBmVrvzRhPEgTuwMqa",
  "key23": "4eWdEg3fqVFL8re2Ccb6jM837yMb8vuqwdRtK7LTobtpxshjd5djLW6mTkZSN4rHVv2DUVExHKeuZU9ooPr6NmND",
  "key24": "2jY47JbTtURb8QXj7wQTdWuuANY1BXVukHXcBxk5qZCx7RTKaTt4m2w1NGfwmAcSN5JNiVorfCBBzEsfAMHYhV5e",
  "key25": "5gj7Js5W9au6dPWZWjA8mHiFb91DnVBEKumXZj8XthXrt9To3ghp4qzV3dgdFS7PDKuKSx4vmKuvqn5YSXDwqumK",
  "key26": "3CkfbyCcLBLuGmXEMyNuEfyP1rZdEVku6JnhMyz52eDb4DR3e5AymFjs1S6k3Qtk9UgGRyCCSaASKy9Ld42H9WBY",
  "key27": "5bkUBCdmAjU3pUWcZrofJyYdB5mtuqBGXrznM74gTWQYmtyA1NvRdtLBLBbYRZwUUHrujijgd7AeRDgqv1NYiLQf",
  "key28": "5ge5qmvaSGjzn449bc4CacWG7tSn7LC4CSduooNmtiZBvQGFaWWbTbbLJxbLdKvDnFaVoAJq4D6rvoVdfg7doSos",
  "key29": "4VCjgmBppcuhXM4GD2EMXzgZdxNkJDEETecoFghjQH7SSAtP3paYYeafb97b3raw9PxG62M1RQQmswjDY1NiQQVV",
  "key30": "5u3NAFaxggmbAK96vrmea4iWLwrKA1Po2WJqdaqn4zm4eMrh27C5BRvxHj52m3mygeT8jrFC3JM6DYRwKP3wdHsH",
  "key31": "3witeG62gij4n5cedNdUVEU6WV9x4uJSWkEo3nCkjMsT2j22KUWgjsLAYZ7f7tjJsrfT3kNft2rgvGnCJW8LYDHV",
  "key32": "2BF7zL8Gk9PpUW66hAv8zNWyKiDLXbjjzsQc44f14Xei7n7cbWX6m5S5msDryzSRpDA9fPDkMyvTjNTbRUwRAmNX",
  "key33": "3a1g6pWuv1Cqiw4pV2sVBcwiEjVDU7eWFgFofnubjczU6JahXCYhcy3PwNFmMw9j1TEz9vZM7VgNMPR1xdYHUxF",
  "key34": "R6ex5TaffcB3b69hhFkwryYHjLBEtKwXLosxE8vbiLBGbQFeZebNEsj7pL8UaxghqwkkQshmiFLHQP6n79XQUDS",
  "key35": "y2W3Xc1DXP9iEdathbi4XT67PUYDvdfcwMpn19NLKTcG6cGeTNddjure98CaY3mbjQEU8HexeGRvTmapJrdT3hy"
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
