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
    "5X7KdtfB3iQudMyoVp8JTFqofUvGMvgQiuunoNhK2TTPNXhifAFLPhir5CaK335w2cM4zrF1kymKGyQRT4amrHGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULX61u948d1D16rhYycN3WUNPNkpKmbAsNGmfr1oSvK6N3XL76gxBPvya2QZR7dwVgPACrNCgTgyBBjyBYeEigf",
  "key1": "2iwY7dJbHUzJv1aPCXHk3dpTAMccxbVvh13NHY3VmMzbFhWLQEm8eDmT85NG2iHQy6tB729sT1sLyrAbAPm7KcrQ",
  "key2": "VDP6fq8W3q1ZjFTZXWMN8n4xATMGEN4dKW8qY9H7LL9fPb3PzJkkPhWVGuvi8TxBmx5iFaVzSvKNkgeFE9SgRmp",
  "key3": "61gJ4UxCGPkx6228NJL5iqYmnNE3pGK66QbEeVzCCSFktBR46czCRHmG1wV7xjTAP3RKpkt4on149qqHduz9erV7",
  "key4": "4MBudTcTMYKK9xShr7nRVtpkncJv3ZrUyzLJrEa7TJ1V58t4zy73s3M8zNrTpkQD8di1EF6LsBN4hKnYB9TgCmF1",
  "key5": "3vGNBbxwkrCz1GuQCABbLtuXUYz1VjYUd6TrEp8RdTTyshDv7HyV945gLjZMto3XiS3J2ZHKobWvvHo3WZGWtoVG",
  "key6": "2DmTDati9UG8g6vHpChxLi2cD3ayAGdfZFpFq756dJobwjXrETnJ5oaysXyBpKahLqjttdUYiGh7qYEW1MUSPgjK",
  "key7": "3c859AkhrdXzVwtoxqjpQwh97NigUQuXGxGEyrw9VPtR7zp41pTHzhYySx23Qsdpi3w6RG1R9ZNHHWYNnXVHoaeT",
  "key8": "5TbhVdbpT3jViE9eg1ocriJpYoboyHWoiJNiV86TX8VJCv33rWRM4DXT463gWB3NzZADm1Rs6xiddZ5vqcSPZhRm",
  "key9": "h9LP9Abs2wZsH3kcp8RWpwXW4jZJVNFn72FNQffHC3Gc9WxuAHRgDtGBPeA6F9zPAP3R21qYjbEECD9AQ3AXmgH",
  "key10": "JNVfWdmDzcHfpGjDqTuyTMAbA3BzM51NiQTgheJkqnMR58AsNcTMq1GcCbbsVwv2CEpfnCqrH6AKVCDSn8XChHR",
  "key11": "ELdPPyTxUHmhfAskyDjDP3r7NBTEE7SUwDnLDnAvZmJjC6MDrNAbPVPH85Xg8F91qqjpKVEsWF9TG1FiqMAGsG6",
  "key12": "ybvZtXf9XL8SKR34CKqtCsaaPN2qJCmUF2dTXhTKn4gRkDzR3qFmEZAaH3oY685iAQhGEQMHo9B6rwNmgTUneE8",
  "key13": "4ZjqXXaeyNvJ6AwJoMdCxTZiJSbPgBHFUGD8jor4qrX7qrK74HhrW65PkthkHFY5rEdZ8PWset2dJwVSmGRjDkC4",
  "key14": "4rg6AgEZh19tJmq2HF27amfTYSwZ3v65FjfTisfc3KvuaNmJpETW3wQYHoUwWNBCz1NoxabtKqyrM7ZUiiLPJTxn",
  "key15": "5BAJF62f2QrmtwaFp2FsfgYaMXfwRpGTyEruSPj3qarexCynRte3rwRsQjqQNjuQmKhdG8iGncL8HTv9xoLemgFP",
  "key16": "62oFZq3vTtPjM3eQWqBkLjWgkn69SzdJmRmXRNxQ7Cey3peib9CEzmwrLQ16d8ciMSgzhM6PTobMBGiDC1HT1D6",
  "key17": "4qY1BWqj1V8ppKW9sMU37Cs49xLbKQpefnDJfSchz1w8XSmMv3nwrNR2kVTqq6oXCq2Ac8TYH4RAdHoZKEmjZ9ai",
  "key18": "5XHuRZHj1Dbkuu5cxyzJSRisNfN7iquCAaKnpHwffRJCgnUAiHHhxYXqXDTP6HtFwxexTcAVACD6ijSTaQJfnbU9",
  "key19": "3JZRHfRbk8VmYXyYU3TEoEnrQPTKZk2EZ24TVc7pRE67eFPWRnwmxFwwC32CxWMRMyZkb8ab6WTJ5oehku3AYthT",
  "key20": "2c2eFPisLVewfszztfEf2LXoyMLPrMFxBxT3sutKVhKdn8mWjAEKNy4PAzBrwV38mXbM1zd1igSbwMPfh4epF66b",
  "key21": "4YSbYvrxcbHgoevaDLnC6TkMJtCQrE8GBjiFtN953zhTMhaJ2CoGM5XjkEgrCsX32czWqBvYFoQMgQcoHSKjuSHX",
  "key22": "4Dv3bkKkXKsv5tiwEEhuDrpXVfHmPnoUjFTYzWLY4m5GSr1jUAnwFhjNPBFwMeKkkmUG2crbB8g6G5VYHYun3y9M",
  "key23": "4Nkx4dgHY4ktYeLqMr9MiKcac476F82BM6m2wSApXQynhaKrCmtcZ6uQ2M8u1XKcTGowqcptKgrkiCUPd4NwevZW",
  "key24": "3FELoiaatNfhzEakXF5zF3XwhnmnifYptAdUvczVZwG8t5AVwSTvVHAVEqUjfQSKtFR5CdW3UU7bwdDqcT45BmmR",
  "key25": "5iJNZb2N25frSszd4hAMN4eChuRbN3HVA3rgS51jk4DWFUzP3uLhzXoCyQtAp6Vw1bCfV5huShgfZ4w8CHtSjxZv",
  "key26": "4LAxPutxQhZcDM117rTynr2HG6Qr7AnzcZXr3va2sEtUWPFsrTToKnHPwbpjMTbZA4uVSV6bEzpGUQDmnSTXHXzT",
  "key27": "f27p7Zewb4uU7HgFLwcJbh4CskQCx3RzwvDKYgcWyv6yxpbAeRXriJrAGXySADGAQ499msyH3M5RinRYMQ4Ez2L",
  "key28": "2Q5egdRXGUXaumEdPXnbK8h9ACJTCmYhEqYV6XZeDZ3HVudhFyjGP6E4cbpD1Q7Xewm6rCKdNzUUUnxi6u3Law6e",
  "key29": "5q7yGoL9pY6LTHA3Y8xrgLcmdT8rS6fDHznATuVxu28nfAbPPKwe55xB4cwLsw4tJp7wZw8tTVqZkiZsM527Zpnc",
  "key30": "2KPJMYXDUs2AUMbGJku3jCHbAE7LGd7hS6fnby7WemZZdEZtPZHpbWdo2vAU39oJiehg51GMNyUGbBkxLekLrC1N",
  "key31": "4thjhvvGRuYWLofJbj3jwgYEm7iUq3cC79JK5ejJGiYc8cQATgLzFbnEMJDHyua56oFhrsFnQKp5W3X9pLWRY5S4",
  "key32": "26D4s2kcWtbrCnHniMpGJpH8HKBj8rsFFxuJ6DCKkW77g67oRsMyhuhjjyPbYnigZiLwZzrk5nzvuAy4AMV3Huup",
  "key33": "4CUugwmr4Ghs1d2hJA3wRTx4EisoXtw6ojxjnBEXbHaZZUUZm97PpRwMykcku4oYcQYVr531YLi3r8DUHbULx4jk",
  "key34": "33UHc3Q7cwiicB53eWjFUG9rVB59tay8s2CiKCJzWGMc7V7i2jQ8kVp3P9HXHkZE5ZjPKMhT8Ln5AC2pzCPNsNvy",
  "key35": "2ZCyvjVWwYqCxpF49tmbUAnCdvaep9hjAqSdSPTDLNnHZZf891pKEMEqL6J7fmS7t1fdxuhddmceuT6CWHK11DXS",
  "key36": "3jzr61Jboj5JBCmxj6iRMqsTNpoCWoQUiAgaRWee3ibqPRxGqSs7KZTcoYB79A4Xd41xnwjbDeTpPB3RdEMxZSPh",
  "key37": "57MA1nt5zBowXFCFtbGg5Vxm2M7ZGoXtkrmyvFKVZqm2Hrdso7YQAj3QTKrV7dMpu18Loot8pYDzwK4psJN5bx2X",
  "key38": "59ftmUf6bTcbHvdUrVanof1hpPk9qyHqWCozMDiXcCVPtKiG1uY9ajqY7QLZuG99kt8rx4ypvfBwJbMdfLQy7ZTQ"
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
