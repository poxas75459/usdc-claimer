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
    "5b92a1NX8wNCLrG8A5UwUk6BHgUZYypUoTpLcfTgut73fki5fMDY95qNryAYXFfRWbnB3GhjoQpWQx5tmHZbcr2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c3tr57w4hZtvw8M8x9H6b1VyWXGyuNWVgPqAdtZERQ1TbdxFjcQURJaFJ5Lo8Xk59NB8sJiMgVZcDjRqo3fDFA7",
  "key1": "3mzWSQTBAQMtgdC2dsG6pVNdqvyPDYiYzoDG3ZPWnPx1zeuDmGQbwxzxKR5pnSPkB6UUjyHMxdygKDg9VssqJsFx",
  "key2": "2cu9Jsj9dVChYdzmvHJ42pLS5eFQ5iJreReCHoXpwTfHdczmMtb9q7otdfLFN9kTGJSteJ4HkTe9QgRT4Rm7BKj8",
  "key3": "SsZXi2FePQYDZRXD3nTbD3pmpEBaQY4aqvW9PwWvX7AagVXYxXjsEGdivxNtrumN6cP2U9akRqUwGXRWpCgsgzA",
  "key4": "2u3AKzGoWKxcE8UkLJRfvLe8scS19CxTdCbmPUGZDhP12VnnZPWi8yjJEaVFPcUx4yZehFHggu8amf9Wg9ySiiLJ",
  "key5": "3VLo2ctMxuf6rpRoWVsTgfB5SefjahKFy23nWbNrshV3QYzzVEVmhtXZRPvdFJigVPYdKtKs1LHmMZTMvPMoySTG",
  "key6": "2nSSv6vRDjktnHEdqFzBAEu8EQxJfgLQbAEwvBN41nAGfuahmYhTdkDE9JstNfEffsMcJwPG6mhNBviwri9vmiM3",
  "key7": "4tspKhor78kHzbBft3TFWxyWmmUz9LoxrW6HDyRkYpbMzectRPqpQuyLvjox6w7T3ebtcLQ7e1ek3QHtGEHQKJkS",
  "key8": "3w4W3xrMMrrc3ZHSp47WSknsQKCUjGJksmA8wiaogNPCBmBjdmYdqrYk2i1wtT8hdkDpGUDVbjifqzTMgrz1wX9G",
  "key9": "32bevmwAvFi65bU3J4dAZkLETuwLwwZ3j1Cjpk7vuqb4LYXmM9yK4XYYiEk6j6qjShgnQTKTH9bHZA416FF2U8gu",
  "key10": "3HwP9cywt62FuJiYAVH1wgto7MLMvKV4Nq9SEVamWoi6cJ962C3ERrNYMkWo3tkshTHmLxkSbuTK4V133BAWB9gd",
  "key11": "Wzsyaazd9rCmm4RokJiHtdL5dpPBv2nQGv6ejpRo1ipVhsjwAoWAsY3MKamHsirG9jKpiHdAzvVn9jtzmMg4Z2N",
  "key12": "3T7bUbZN5ChdDcPs9uREF1Qd8xV8DsnkoBZHEyLRSDh9kjbso4dwjrGYrooorrVSAsjCx5Ufevc4dzJnk99XK3LY",
  "key13": "5dYk2Vp3emsJjqoHVtW8d82jq5vAt9saQRHdypQsqpzd46unevmahnib9en2cTy1FvVapWRpBMixGC4SNZREsaQh",
  "key14": "4qSpKefFM5DUTsz5j48ueAH6UFUXsDSQirsxdv24CFgJp6RRTb18VUKahKTNgx1zbEMDfCu9rGS8CTu3E1766Zws",
  "key15": "5g6w3K11tdpxgda9ysh28Py7wiZbY6vnvNPTYB6L3cGiW5pDrgnZnokcqHxYJf83smSZfgYSdrp8ZTPok3kKZBGw",
  "key16": "45SyYyQ6iQys3ZofP1r8MLMsnjMWLXdZdM23UXM7WH6x1sWRPZPen94iV94QM9LazrfFthkTFzAKLz2gJ8k1aUqT",
  "key17": "37QE3ZDuNrzowdBR3eZ1AnLaxaNatHTdCZHvVhHr4KfSkNHnZeapLLGEmhiCk9Z5eDGZnNWZ62EzamwnimaYTYMD",
  "key18": "HzBuRVuJ4ZY6rP51NXLWq1h77EabCZXD8dHYsqkbCxG8fouzhQxxCP4J1e2pysFrLbXrcUkg2Xk85eUMB8i1SqB",
  "key19": "5URVC3DBgZAaXkzZ34nd97Zcc3XHbkN7oSDiZDm9Zfuo4bvjvWBGxKQUAWodZNPtgjX2Wfm2k2GyCMGn2r51qBEd",
  "key20": "9RVeMkeKqCac52Yn9CFG7MDEMPn4vbeuoL2Qy93taJJteUt2qN6DFc1NfETWxtj56LdcsigDBRVV3CGnYwxVnka",
  "key21": "4czPDobvYkiRwjBRqP8NYQEGFn9fgmw1ZkFBE4yrQvuvdBtUCHmDVHVacdyhEDr2988chcefAx6VqfUzrWhviGzq",
  "key22": "w8jaecAAAMLeeBucmP6QVavCpLLv78ZSFsAdiBL7rkYtVYoDS3arK7WpqbWqRZhtta3BPBdFtmdXnnKupkUvpvj",
  "key23": "4M2GsKg2q34nM9dqshdqsq7bjM8MfsrRFbRsNtze1Q7hkXJ2QMJHzuVzhtHW7cHLbYHzkeRVu75J48V25aKFqgqp",
  "key24": "45cboUcXnoufyZpG7mcpEfbtVzEuqJKGuc3B4TosWk29eesdcPoqwjCp1HYKBgG7ffKGh1qbbsSgQroFPvuTH6Es",
  "key25": "utgSQ3BQoP6zUH6FVs1mudGaNTUqKV3yuEUy2UAKkrcSS7VKAsSuFX3rcVhKvwDvooP4J5VNRgFfoxRjkumd4Sq",
  "key26": "5Z791CU4ZPj9EB7VHE5P4M4do4MF8aP27AckkBGxhNJdT4qEiA6urZHjmdqDcmcuFBEVA4YWwMga14X1Ri5d3NLW",
  "key27": "29CEmTYRqvW3abiFdMYo1odLktgiaRmTWDbiopym3UKxXif78CBBRhPwSi8yhwBxNjzbspAZATWaADFAQhoSBEya",
  "key28": "65ABLMmBYBcuLJPHeQ2zHvmHwTuthKAN54gzgqXoDEN8xao22UeMfbUDDcSr4nTB698aQE9GhpbEwBq5m1APdUA2",
  "key29": "2DHMt2wgqEFov1FmCb5gwpR8ZotcrsFuiGeAHkTdSePMUKvJZuXLuEJ6xTxFv3Hzyn8v3SL3GEpYyFrpzcvRLBkC",
  "key30": "Ye8zdBuPcuBF5tnrxrkCWkE2rFFpLZorrMTynVVQnnwHmVyQ41CzLnzhuoicS2gfx5axC6181HcwcUFMGQK56MN",
  "key31": "8QCgeQXDDruddNp52tJm1VkLNN5FHJHace8h8NisHfV3Tt9rfd2fnGzzLsgdswwdn5jgFn5VqobkqM2NuC1Y7Lq",
  "key32": "3GZpD6FK6VG3pYP9kbdTZgKdoW2QujESo6nqruVYTF4sfjoAbfprvR6qM54BaATAizwYEhQ3iEfxKjFWkNUgufPy",
  "key33": "4DuZqNgw7kV4o684u2aNWnn3G9famy8HT6m6y5c3MuwpgxjyQ5dVCjegx823JNUNxeVYVETWvZyssEJAoamK1Krh",
  "key34": "4KXbCRFzcnZnUJgWrbCH27TqJgicvn6Pd5eHpRWcUWYCHuKuG18HWKxXv2bWnCPAKpwBEz83QdeZyX2p1xQVgXv8"
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
