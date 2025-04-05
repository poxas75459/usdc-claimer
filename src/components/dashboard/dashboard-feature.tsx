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
    "2PFZCYpLoufpo36pzQcaq6Kp7Fp81XyMmJwEYPdw7EE5LLWtnwPuJCvpHm5k8uPfCQvCUXudo2SWLiTaRpMCEdg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9Z6fQkThr4LUpNc8wkRD7vqHaFkYfsD3th3WW6V6durrkdfs5azdnwMD5E6pjQBnn2ErcSynLLZWpMTz7viru1",
  "key1": "5FheenNpd1Mk9cSabAokb7ZK1cE1v3P2xnZwwLkNHjqEx8c5iF88mkhEY6uRrHHuNZ4vkMDF1FZGJVCwYGphqvsr",
  "key2": "4nWpbqP9A4JW91m7gS58YR3gB8DT7j9u37ypf7mTHJDKf5cexgXLWQUtKLE76ps1DHQMEJsGxjauM672daaJds8Y",
  "key3": "eQ5EqGdcBkeR6Ao5JPjWdBmLe3ttpAZabHPwi2565nRPu9kY6AuHsfXhGrGiuqUqdq6Xh4hDUgiWRidXUFsXZ5c",
  "key4": "36TmMAF3S44mRg13LBZxYcYxXF3LbSGz3LdzWjq78ukvBhXGx1jzMHjGkGuDugLch9K13SEfRS31MojZCqgfLyKM",
  "key5": "46jZ8Gd9LMaLFkwf9JL1fq9aau3qYoxq8rrdf3ksDnbm3C2vUY3Zpe1LmkwAwxsnZiQwcL8tpCNAGhqB4TnEe9JV",
  "key6": "23QZSgcPQ1rAzCuReayZthrzGmZLQ1j8SAGz7Cy4QgpFJnuUuRf1WQS5K2xRXxCHZBuBBLUAPJociuotRuWpRKLH",
  "key7": "5ATt8c4tNnNFWZ6xM1n625E64Pd2d3H4Ut2cCyTVP4UqzxSVFj3ohfCJDjphEsotMhKg5xgNpHwi5HpHqPNLZDPL",
  "key8": "fZV8oowQ47iwTetqVi3xK15actJrMKLtY2imf71CWTunRKa5ig4MigZ68fyq2u7csHLBbKWaf4T8R54H3TPuBnL",
  "key9": "4wFAVUpkqoPxCUGjvTS4x75cc9VjqsxhRRy6YbaGMDs4PKt6hMZH3APQa5RNShD7Tw9uKevzm9ChATHjgkyS1cZN",
  "key10": "2Pwc5T6ACr1KwxhPQzFiFJ8gPB7p1K5CVyTsK6QQQ21UUdyMbzqHSkioyRBkQvU7xVcjm4weT4aWnxWNuDfs5jcw",
  "key11": "3nMPgDBLKrRNih3w7dJGYT8RjtJBwiRbF6r3eQyvdHAmFyYoBpcPxDfGoywZxEaT5dxSe9UmecFRtDbg1anmpqbR",
  "key12": "4XXW6LtSLwUNXtHb9NUUsNpWsWMcku453drCjtFz3EoaEqbq7GrQLNMe6ueLfKeUVSktsS69Qjk6Wisz3sGx96j8",
  "key13": "9f2S89Lknh86CHa5JZAPZdnshE8avpPpxsvwT4YxYTcDFXEBfPS66kvu4njZemsDex8xEouLW8R18cSxyxABAgy",
  "key14": "2gEH4BNeQuzQzYptv2Mna3JbNLwRGP7ZWFGYTa2DGxPCLUNCFYPfig5Z34YJHVxhhiF8bBfTJuGXvqX6rW5WMs5z",
  "key15": "5nToLvenzmwcY6b6h84gpw19AMk85CJ6RNyCEDmmfPQ1sb2tqxNvcFPS7NwCQJAY4tmFbK8QuqHKfBzpnCqsoXkT",
  "key16": "JQYAoKp3npeeo1hnk1BmSJz7EzYVfngEWnYJ47PQ8uaN6ypKWazLJrYhCdxpDzC9wbfDk5JWw8LcQ4U4N6XmW5Z",
  "key17": "5y47d68qsnxYLFM4rsTJ2LBFFVnizo9EobS9w1LzdKSsgLoKUmHMeQF8XxWkrjghKP7tJNQHDnKUiCSUDLWVditi",
  "key18": "A417figf5FKV4Up5yRFbLtuXgb45rUUBgAw7TbrgGynFuxSxhLCXkd6FJ2WWztNxY98adThrB1eeeec4E41cK5L",
  "key19": "2dKGj6BrdiietxTkhKJQLyqQsyUMBXtpWtUpQQNoATr17JQiEhFTz5Rn8tbyU2nAFX2nJH5RhN7r8xMbMnpCFwUM",
  "key20": "4B9QZJ6FztqwAfQGnDT8P7ViLTVSsBkfjQWUNE7n8tKv1ZfK24ZLxspHSR837xpxjZGXUjHpdCQW7goyrVNQd4Yy",
  "key21": "5ow6Rk1bYgnk2xCtow7yGnNViMSBMhHXgbA7r6tgQ7HPrn6jXc2KM4oxoBDJokE7FxaYXa7duvBMD5ZQ7grgaNeG",
  "key22": "2huTYoHA139naqKLuDCCzcCRZ8XBYhrNSBSX1eVAGHWpov9LzF3HqCKANVwuSuNsdkH1yhBZDySYDvRN2BBM9uJn",
  "key23": "3DJXXDqTaEPY16aPR7yWjAaJf3MJJtLSG29HZVT8bk73ZX32DNB9RNgEbaQE9RuhxS4AUeKduHfbGFnHYrMzpg7r",
  "key24": "5diM8GbgdaiFZDmCeiHzop3Yrts1TbtvKUujEY5djd43on5EBi8bU7ETb6t9S3inwqJFTKPFdk3HMsAXLwsMcEvf",
  "key25": "2eyWnWknMjdSNyHXj2risjvbKvBpESSNrFoopAiv5zW8EMsBso68yrtR7hc4Yu3syLYqToqtL5F4Rcqu4qGQR194",
  "key26": "HWctp6tX5fUqhZZSMCp82rCsS9RXsZZ2GAwRV4smQtpo4Hy4tW3tgwcZVrqWxWXL6etX9wJtsatyFLsJkBKPaxK",
  "key27": "57jgCCwG1BaXdTL1GiMWsrHEkD3Kes5EAo76ZyPNJ9b7N4AQ2uL8U1BLU2UGxZWg2cgfBNCsvVNdB7TVh4WwEnyA",
  "key28": "4JHX8Ea5rDZJrM7CvKTRUW9oqvAhQrBb3svvC8WahosEAwNiGCaYspMa9CpuUWyH59GzSPeykpYqiq5dJ1vAXG6G",
  "key29": "5QoF7oqG4C25HZoRmaHJkYH648vzqLnW7C454RwRb2ZKGkwFBmWZrCpCKVKEv5xaF4Pc1g8PQ55oMMFPLHUShkSC",
  "key30": "53GMqzGjetwWBME79eiiBQGonag8fvjwBtNLGpUYJyy9osTdPdHRiM9r9Gyyf6FqDvNPyK8sgQ3dMPDGHgKGmaCb",
  "key31": "48JVChqSiHSGjwVFVH5Vnpg7axnipzigyVwNwJWSEpnQVqoEbSSCwbYF6sYJi85hKn5sgiKoGYgzbPbmVhAGjYAz",
  "key32": "2NV4JWaBJazAmwjsBzjhgprcJmDiugbGPhtwJbpmpbTrAYV4Uc1EN7LTx9gY5L7PRbU3foxeNMMY31rM76u9cwq5",
  "key33": "3KmejeMxj2frWU3cxfBKRATxWVh3wSLD2a5d6XveMFEF7ASt1hvsJ33YRY4N6TNpgqGdckDCCDQgQp4xEBVhgf4P",
  "key34": "3J3ng1CQZrZz5iWGTLx8YD2uociSdm7Y3aNxeqygQQd1yvkN2QHYDKBEd6g7vSzVAVGK4xL6wUDpfkafqEqbqfok",
  "key35": "3iV3qWmL8sAmgbcqjoshD6GmisP6pJH6SJDH2sNgShX6bedVxrWGgQnE1KuWjaQNTLwPPCgAEcQNxGoqjQGnQiTH",
  "key36": "2sfdKDbAReaEKMCPDZmqSZn1gTbEcEhfeE6TZFy9yFzPFnqzZQCj4vXZsobRrDbUCfTpcPwoga6Soa1mcdCm7KxH",
  "key37": "9uTCezguWfbTtA2NhuhrR64xmwZPZx71Diy4igRJyB7cR87Ki5VRAwiroebpMaCBdLZ8E1rzwPNpcfgrrQ9g1d2",
  "key38": "GFQ72KZ93hNXZrnwxhdWajiN4HVzPwz5mXYiL6PG7yXpoXQQuBRtB9XZyvD2uZrcRa145awF9G4Pmzx6oJLQ4ur",
  "key39": "DFhRMW1gNYod5r2D5ScbetQMK9RAi3EZn3gJhbLXaWu2yvugixdwoDiRcRN4hNupc1o4VAfXp1w4LJe9gEkckHf",
  "key40": "5qy72XmjSgJg3czvzp86AW2fwSevT5wTA5ggqZcCHWVGTL9DwwDCZhuAgadeaXKLtPhMCWk3rw1TT82C21BnuNV4",
  "key41": "58qJUaUEdiNqAKSY3kdhKLsaD36mJVL9gNgqrcGESotvNXBYBmr9EYAf2NKtZWHNADfEjjSf7M3BubpbeXgbpPpX",
  "key42": "5H8EtuNhYBjpP9EevWxAdmJ2gHyMbzMjsTVM89VYHHNweCxbWE6AN62Acd1qA7WyKvXAuiYsWyKMuZj1qKzepQRn",
  "key43": "5m1r3bTKXFaJojFAcguGbypb3Jx5FC9hWba3G7LDmPTEjupmHMxH51S9D1bHNsdG7d6PQMqw3ttYFRac2UZgDmKL",
  "key44": "4gNpmQdb426u9Kwf8yegh2sJZXMqMTcKPaMqiAgxtZtKq87qFh92q7YB8ST1LPaRF2vRrES2DJd6FaWigoYH1Pj4",
  "key45": "4cyjZF8ibps7znCjv47YWqWRJ4wtMSjGHrwxDNu2xfqZeqxAZDKU7na56nfWCLTzyWgiu2z4QsiosBSPt6kUxiX5",
  "key46": "5dou6bRNhLVSJaYE39hfAG5gditEfr8Sm8HsLqugnH7bMCexvYB37c2ysfNeQTnc5o3ZRcH9x6nbuneABDEei7TE",
  "key47": "2iNfXVwAZ6AvvqdsZEWPJTbGF4zRs3wfHT61SUP1DZthFeh9CXbXWNwiTYt3zt9y9nyHwvDQPG38xpYkrELtuUCo"
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
