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
    "3VppwLLWV42MnzkGN6BM6mNX2MjzDFrf7QVTgg254i4pFqs8xBXTYV4EAknZos3Yktqoje1McRp7StcQvxRcG6GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwLzHC63VnAwzQ9sdSYFCbxKApTAfU5xf5y6q8DgCq6Si28kWssfQ9fM1wVY63CJKCQZ1WfRMBt3AWYogvARaY4",
  "key1": "2hopMc1recx7xUuSNm3VsDLeZqeqLqVK982REn31fDtZEVJ4JBEkRDcDy8rL64x87uE2RjkckG3XZ5efNfWBpPRf",
  "key2": "2vryhH62wWcjg9tjhehJLDGaiVD4ewXCaBzADrzvMVaPDZAfbutF1jurB3rnwf5aQVXCj8NVnoVFMTAvscNhfk2Y",
  "key3": "mThp1w7R4YREop8FvnbcUgjKqvn6kSgYQsoqaf3ohDRpzNzganGBGmJk6ix2wt8gffg2zxYH8rrKgz9xGd1RTrv",
  "key4": "UUwvZiSt4maCvP5UFkZwK7SisgS1H5s1v1Mizd8aQFa9ntBWr92SdSfXTUfRymfxtAr3zzxBNyRgHeL4CkhGffX",
  "key5": "4Mq1wFufa7rTsFEXNF85pdcQneoFk3fya6NLdUrqx4tbaXJhhpxH3K8ACzwm5YJyqBXwU2w9P49DADFmvejq4M4C",
  "key6": "49qbpM6BJFpM2o8J44vW24vDCE1SWAowPmu1wG3CYVLQLPv9kd3xbYnzxXubQoCuBaMCEqWX6TGrKW4MerzU4pba",
  "key7": "eFLT6H9aUj3NkcwdACJvET8yccxPJiC8pmwzoPrstdEJLj6Gp5krcKtQJpwC7WAeUBPavX8N9zT9aWfedFqXjK1",
  "key8": "26hdpep7Tkt3t7rzZK2gB2kR66rpueShSPFvcWNV6bDRHmHBEhhF8JPr9NjDcobqrAYTpyYqpEaUpQQrHg5QuyDS",
  "key9": "4Ga1xeztdnkDcmL4PhSSVG2XADUQ3j66Ayi3LAxYaR1BVrhHKp44TKrby4jDMeSwPvQNJa7g2JerQ9ZskmEaHR4G",
  "key10": "24xda9mqkSJRze6D2Kq2Wj9HJnXpE9fBkYxLQ8Zu8A5DGwr8N23bpJBtEuQYRSqvvcdatm2jFShPt24SswxQvA5U",
  "key11": "51nRKo7rVhBLeQCRRbAZYfTew9UCTm5e6NtWRzjPz7Hvr8EsfYkKqxVM4zmfuubtPZ2GU4pw3WDsWQuyoFWKAdPt",
  "key12": "2q2aN2xK86APWCu2dUa9b4LvjkqFCmuQhgjksPPbtk3YccvXWHbSZNhEdwa5hTad1UqXMJov2AfWjiFQaxBViS71",
  "key13": "tD4XrizoJNSoDNAdB9vULjuz1J3QXc2Ck3v6GgUcAR2kHSDifR1uAHdzwzjMydwXBGsKdwoSyhTH2RhkzuaGGFV",
  "key14": "45eZeNX3cHtKTyS2tUU2dVh2mPR26nQQiBScMwDeGcZHXZDyJ3VaHukLmVPdcgzAfd235MJBh4SUJ6cmhGnH9Ugs",
  "key15": "3Pnn5C2B6aCDeLcfVBybmZqoEf25r926ut222VyzkLQ88d7b9N8S7fUvSf8TruRN9XKgSxoBaCXYZteETVEt3Kjc",
  "key16": "2AztwPHtnMXFVZfYtyryiBnJwjnUm1VVGSkyhZ8fKEdyYyswjyuGZskzg1nsDnTYoeEnepT2HC3ryVe1VbKNUW4M",
  "key17": "4B7VKbsRUdZ3mih93R2uLH82NhyidRE3Nf32JGNs5NUHiGJyqm5ka4XndKqdyZWLs7eScSixpFkr6Ur1uZFfwxrc",
  "key18": "5SM4m3nsVivJQgT8Wvc3zQaCFymj1H3SkJ9rdfJJ1dQoLvCcMmX41ZSXrC2eciukfJDcU57kUN47d8n1DKMwWmCA",
  "key19": "59kLbdTqEcdUqWPmwfqtocUVdayihkxm24hM255uJAytEyMaAQuU8ibWFbEPd3iTbzk8WLgvpnY3xJHhhvvLq2o2",
  "key20": "3tH49enSsRFciWMQKpHGvupXJ2Dn6b6mbWcxagNYytuzXMVYtjB9FmEvSMftohPhF1Bu5PnnUtTQYDeZBiK5RFiu",
  "key21": "4E2g3r9U9uHCHauUB9nNBhADQPnjEN6k9eDsZFBg1GSs5XSQb6aFFqkUwf2drkYL1rpNRgzUo9PKhnDxZ87uUGdd",
  "key22": "rrD6cETgtijx9dV47GALJ7Mv1TQ2hmFn7y3X98wpv7DmUcdFH91RfzUUCw3EjVTMJcGGkfDjYENAGys9WjmMYY4",
  "key23": "2Meg6JCyMAdbXPV2EwwqL6keUkCsntzU8t3bbyZbmUtgn6TV97D6FP2Gu4CAggM4a7igZVguoQbodBQgtEspokn7",
  "key24": "33rSGpiCyipXhf7oXq6bSpPjzVP7hF4G9LFYwX7JabNfYttn4bBkLWJJgDLBMwvvcVsfELaPrefCN8Ny6xcfMt4G",
  "key25": "4dUQty57hbFMFF558tWx8Me6hdniXVEmtLQnB85jJNEpNNJSrrqC3aEhi97UhiSvT3Bj45Lob36Dq3vfD3Hs3Zrt",
  "key26": "5FDAXb6CnhgXMAEQDgw1NudZ4HWZNgXHGXzsBp3pfy9uDzhexrNV9waPRSjDAUkDwGGCkwrPN2oCquHJEVhRq4Yd",
  "key27": "34JGP5WTkk4MZmEGvN5dLuFmtnMrVqCohKa4ZTL9uQLYvypLVYp2Xm7eVMkzEENHLzhdB5i5NBshvcL6Gjw2ZnqE",
  "key28": "5ek1aGG2mR8amSvY99WURE2BSkLppNe9MyPXemnnZY7WsYWiktXeEwmuTJkTKP45nvEpfP72pX2uLzxJ1pHwRFSk",
  "key29": "5vkqfuvVm3J8e93vTY4wtV5Q6rhawgRC5KtCjBt6EzNGpc8tcqPSqDqj4VVS6mxojgUaeL5jDEdfChLdR93FyFqR",
  "key30": "57YBKbroYcyosJX5hVbohEkyrsM67izDBukBneKVUxWyUQ9bFUEcL2UMzikMQDJZNi1fR31ZB5qrJzeQXcnkYBuP",
  "key31": "hQs7gCNWZPUXq2hNXbz5GThriuXDpteZehSsNuMEx5VLM5xcfZbAjGeoSqRSbfrc2SgGSvp8W6zRqa9efp3ApyK",
  "key32": "3d89Uo7N4tQ3QwSht8mehpJuK9fXozJyKDhWe3nphYH4gR2y1w16qGabhyTnYF4dSAyH1F2JwqYj2uth76pfiksQ",
  "key33": "5opWeaHbSGVYytAFQx33GE2sxB7sWf6evFnSMBLjSSmhShTjE3NB52ZSRPgrQhA5SGJMn7Hu38bLGMLzdR6j5vCW",
  "key34": "3QZevJpUeJBZVfYXC8i1a6bKVSaG8FjdvooGav9zFJTnNT3fsm9AtEQK76Jy3FysSzfEN4xTvkJfUW3ZAiGVdmjK",
  "key35": "eHJokC9Ux4yaum1khZg3ULC6Ui3P4yuTDZ16eC7Ng5BEsS7JhmxL2ymhMJT7Wve4Z4eZJKFMgmeXjhUgxVJBfex",
  "key36": "3HuKEJpDst62MRxywMbHqzx7s6bQU2ouXq3pgwgxjEuMRPXjqYkZ9ZpPZYYKEz7qAeixjFxQxUS4kr4jbjpH6cge",
  "key37": "3asbcy8jxFCcbEcb8ZNmPYajBpxxL5MszVKqNbE4fczMhBPgZubT2J3aF9uBmBMtTwgubGLMjtVkkjwr3uSyAjXc",
  "key38": "YDkVPqjHihWM6dPDkoHm1Jk3r13mGtCAxbeHk1BtSeqgwS2vo99JMbAP95NqsBBmaJpHNCetdW7PBZGig9mm4PU",
  "key39": "dC77GEN2Q668WeFNF5rdWYZEUNbyU3ZzTcwrke1dLEEqmWN7K8UhaBsiyJrkckPHc6yyXeHimyMRF7uvnCbaWdR",
  "key40": "PAaTTSJobH5GSZjVoiMBtDwL7qpjQb32GnPRLy9mspbnky8QFL6nRmoxLawmA9Jqbirn2DoJYyL9FaKGSK2JAYu",
  "key41": "3TPTW4CNRn2pMSggdyQrrNq8DoW1fbkGvphmRnUyYp3dvJTMS9rkFZPQdJuc9pHmnhaj3ZHDUebnqxohnZZPyQ1B",
  "key42": "uFAFhQpPcqui5yv7gcDnKzZ52YpdvQUQDM6EF5kTMN2jAJ1nEriQYrPL9XPgX3Zy6riW8sy5qbebDEVFbwR87Af",
  "key43": "3wmLsgM3iaZL4tsRNdquChmwMNnpEDr34MXtDQEpxU1X1uBsGEve7UHoWHgr8tykEbTz5ZRe9rJK2mriosYb8iU7",
  "key44": "2wJpoqXV4av2RjWLRm7SpoS64sakoR1Ris4aQNoNDYHy8JHFhVXM4VWLG3itZFYuXrn2NYKuz9pf9Qa9676e7Jrb",
  "key45": "YbZ3gXy3h61toeV5gvUJzH6afQrZaT67tWBrGBUW1h7QVyrserHfnRua3uy82GzsVjPRmtj2am1sPXHkmQ4qQ9P",
  "key46": "29rhvFkp3LxAbBZGmFekP8kHQ3TV4VzqPAChy4GsPrDpw2MCE3JvSj2kVEvSUzPH4hoGhnKcLfAmN3jErkvqw11i",
  "key47": "3nMWNK8Nn4BqNCb1cZmqvnT1dsnH6tk3ZCRxzR4iiucEbSeWFYeNqTewWrWnN5K56kZLmtuiYaRz5LGkJjMWJJdu"
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
