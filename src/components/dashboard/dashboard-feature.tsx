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
    "SyEea7brMqxaFRVwaErXiehZQd5C5uyNGJgMvMoPn6JQ18KizYPBLPcXgbNYBW6x3hMxZc7coubGmnoaQwk3VMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Jmoc8QCSByPGFfgrcf1uiizyTs7Detbaj7NH7nFcQoj5hLZ8RWE9XmF59uHnsQuHYEBFNfPCSKBg5Lh5qcwejp",
  "key1": "4Aum42FAAWPz7TdcfQAgVWhoaPJtzM66VWborDnM4p51inu6rKH6Qr5agjxRpTiW8vyNTqyhKMFWz2mfgrmEBLP1",
  "key2": "5Dy6QNx6GAQ9PkeFEUVsMVQuy8H33gK97X6z8v7xJn5ZD8VsFbncKbRda6dcsREn199HeSuAuev8kZdPLS8jZxNx",
  "key3": "56hjSdJyDyu3op3grx3mSWF89b9dXMRk1cns5NnfAUJTZcxi9qEmEa1hurU7diWTYu7U71VDGRsy5RFohsWb7kuT",
  "key4": "4qBeARaTgLorXMiF7VvfRBLYcAUFQxMT3x6GdDpYRFQUXDiq4KRLN6kHNweaJsaTqgz2voixLKh395dSWkCuKCn2",
  "key5": "2Y9sdSyJGvFPy1Ew9m7w3c7n88bhxAZZ9u3rxtdiV6HSwUxHmXpbcgug1S1gwiwUiPhZyWG1PzaLCHVPc4dxVcXY",
  "key6": "4cdmfgkwc4kS9wJyYzfHCf8uEYxNvA65qZWAHvFq3zpXhoUJQHhS22ny2ykxnP4mADAM66YdQit3CVG7HvQiuXVw",
  "key7": "5F2S6KY1Cg6AdGzVrH1CAvGMgjCENv5nTaWrkzPkwxrHJtFVh9maZoKheEFjMx8WCNsH19a5zzqV5sPSQQuGnPbX",
  "key8": "43PZMzyRV4dpMXqhiikDBRbo9fGpeCsPu7J6N4sw8RGdFysDxdUzMpMSc4pGrwzy2jsU4g7irPCgMeyqbLmWa6P4",
  "key9": "QQRcG4hAAZzxX3xfc3cjaYny52MaYfS6PmDx5YEdWbUDtdXErJrgk1uRjk9ndRQAjGQteKxU4hfaU2mN7n6qJcW",
  "key10": "rkATN8P8P5EBxN2otKAUE4rAp8hoqFLZ3QuN8rAdW67uWkeNKY4ii685KmmiEdjjahJsmCa6BFh1kqMJNttU9aL",
  "key11": "3YALK2GtofbpAzfrDLnf2ATYVTVY8Q3uyQCX7Y8qHH6WSyFScokB4Eo7TLP8niJkfKu6zFbR8UAcEb9WzXXK5wSB",
  "key12": "4B1XjL1JtPMrbourCWDWFjd94HXAfVpwn42rkNJjw4aZfbBLL5DxN4QC1U7WivNCkcnxpJJ4FgA3fDGdBRWGJckw",
  "key13": "5VLQxuAfsyzhe9bVpKL5oR3XdonChGzcATsBzSZJRVHoXZ9T4rQD592Y7A9korWsGN2LNxti7VxAP4bpQeRzgAj6",
  "key14": "MJTdi7SDEwVB1U2qmhHFrRmsjkVVgkSrr51Ww7NRaTGbDKoNu2yP8o274Cv2VASbuAXwbX85mxrpiggVdREXztN",
  "key15": "Vp8qatXWC83McwcKADv1pQFfEPnoJw2cU3wCaE3JMvPDBugXi5pEtEHFhr1ySNiXaGKLtpF68pu5E7CbKLsxerH",
  "key16": "mHgxenuBEDjkBQ6M2ZGGrGYNDH7sgES9cFuztwbBNNyC76oMtTwx9ePdikE9wdgkKehp3F6kkGe78ZvJEVs93Tj",
  "key17": "Fr9oyJx7jsQ5EHwcDCrU3Gs6kr1Qasu81AuwZDitGPnmj9SmC8mnFPaRXub6TeibPwXWdT5gYggfQoRwRM4gG2s",
  "key18": "4EUS2NxruUz6TZehpsYpqrs43zGR5EjqABbKYvRqeKKy2Qp1SjPsUDkcxhSzL66Nr6qAKYFFDwnECr7LetpH2fcw",
  "key19": "qCAzwd1HRw9gK6km7ydXJcZGGsMqb8EsXFHXEbS9x7Vu6m5XAYyTnYcy9WrMbJpVsnXyPNdirRpdT4qdxhk1UHV",
  "key20": "5vmdbWmHhVoV2m6uwKb2HpJbEAsC82kna6VML4RyQhxMbrz526N9Z3p94e6P2TUbg3E58pKg8WWS5Ps5pTbeMuBp",
  "key21": "36re1qkvZRjFoKGxjHA6Y6uPZWAsh6YR3ANMjChgksXZxbW6SoUhJwS9ZY2ct2bWpqH12Pg86Lw5CtsRQ6gZ2FuH",
  "key22": "4GYVzFzwR8rPgzRVxEeaZ9pfPukYo8Dg2pwqHkcRcmF5MMDCKbgShzdhnDBejMoykqJunhrgXeDBZ1ErV32ov6UA",
  "key23": "2FuujLjfTyLU9mpkW5FR5BDi43qj4zi1qSfFEhdy4JL4ihQJLrNXueFt7VDPyW6BDi31VacbRVc9bUkXNhM96CPg",
  "key24": "C4SWcxdYbwUj4Lna8DFn58te8W1fxMJ9EKZF9DNvdu6SH9nqSkfpMxAdgehgfppe1r974wqWKDjHJ9vb2dFPKj2",
  "key25": "2AVe7Q6FPaHpoxBDtbWx5vTtGtYVArYfBQ99Lmabhfp3NL2DN3GVy7AwxNTWRxP49YFVFaJcr1py32giqxd8x4fS",
  "key26": "oSYXeVZwhdJmxLo1yGfUURjMiWQtQBU5a6NHUqsfUD8c7BCxN7h598hsc8dKbgDNGexrXLZ8DabZV4KEUwwaCcL",
  "key27": "61mxEvec9mvEChVaGdbei4XaA1bKUL5ts5C3ramEhed3ezn4CZKWHsPXbWPqsUYtAtvWQmfh8xQK9ciQPDm4mPmH",
  "key28": "5zoAoYhW4HHYsYmucmxtR4BC4AjNS6xGxNbEDvEwTWWbQFA5s6zxuhZfGyEh4zTcgSL7V8TPjTJA9FVY4AmMvJNt",
  "key29": "2n26rfSFNV4rNMgDKCekE4Pd1SgP4EfHQ6pkW84hEQcgP89xXhGkEE4afp2TKPkhydEC1LvopCvQizdBDMaGpFed",
  "key30": "3t8RQLpfNygF6wPEFr2AnkwbwayxP7Tq3b1GBSYpVy6U2U9z2tcQJbpFFNfKEbyoHKwmJYwbe32346awpX8zLtf",
  "key31": "63VHTexUZV4shrn1HS4abtigWPoQemLQFrzN4x3prEoyxTxprBks8UdnFTUTpKMcs4jVQNVJPzwQ8EyhEthfuEyx",
  "key32": "2qdEu2v2iDsYZF3mrKoWEjwb6K4s2zqbuwJSCfkX8ZozWkXbSSJXVitC8fRngFXUksGuGq6CqnXjsuA4m3eEK4Nr",
  "key33": "3MP1JVW4VbzVx2qzPypqFFxWkpjoNGY8jsGqVfw1EVFQn1WoBT2m211mUNRKbhBcraDEAcFHmg1oyFsgj6T9TUjh",
  "key34": "2t1R1GwHNbCJMpr8q3KKiyGLH4vSKWA6dGskj36AVCmT9GVCQe6wCWirMsVbxtqWjzQPGRzZe5264K613on77tYU",
  "key35": "5KKY33ZToGF2pnkjajjnuBJGxwEscV4zLtc7CEgKyiUgbjgz8NAGf6cxgEH4ASJqfijDFHYJ2Ftqy8eu4dN5oU46",
  "key36": "5kUppfSv9vo2VYHxg2xmnQyVc7RyUuc4fURHgjjuYET9CHB4YG8aY8rKkf3fo5t7PAi2V37TwbQXFtfJVkEaQ86Q",
  "key37": "Ug9CbLofWBcCyL5LiSjLYf18fFZ7Y72Hue5AQDqk3VYi2VSLScurLcL772ZgF7t7Me3Vp8Do4pETQnnL5mGT6CU",
  "key38": "Xeh6knd7XBVpbWSzkHadd6rBjLuzGScfUZooA2DdFoc1GomJ6HaM6io9WxH58bfPYXD7QuxUYBHEifJvosB2cay",
  "key39": "5WyYdtNBWDtPk1md3dgA5L1pTJMhShggBBNajdqtQkP1iLHKaFmbcdPisYcZPMAN9LWtgyjRC8pyYx7ASmzNA3gJ",
  "key40": "UuqQ6NK9uduk7XACRjt1v4ZWu1dagWTLthZLLyw1WPvFq2wkV5XkNAY4XecJRLZCG8KnsJxPTqSEKv8TqkDKyRv",
  "key41": "LbiDP4mjFRX6wXMyjjWeWeGm3rfsnNUVPKUKJX79TLMNrSv6EY23b81LWrnciuRRp52bvvgfnzwpLPEzZQrTT4g",
  "key42": "5d6oVoWUMQjaznFySFSzqDNDU4oLCrwG1XQsf52ZymE2hBjQhh9tRLWA6XGGxjaBqMJ2puzEtUsPWCA7EuY94X1a",
  "key43": "5CeyMVnYHa89pxMCdYpncCNtQfLtb1idCTTHvEAH5RZNi4zbeHNqchSb2eqtwEXUyUEZwRh2nB43zuaRQSb2VH9z",
  "key44": "2wfXNX63UbsyecFGGcdoHZAYkB13U8Do5d2Pjc1qQnAJRXYjkSgMNwsS3bx5ZpUCofZsbraQmP4PUqTpUPQKcxPm"
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
