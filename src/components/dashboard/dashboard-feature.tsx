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
    "PjEQ4R2N8YwChJLjghFXwyHLbQQJaNg2VmnETrnXT6rMm5P6mpiG17sYv9NV2AE2hUvAnWJYdfK6r7Xr6GihDda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BGs9XjD8RdkXFm5FD5EPTWRe92gsFydrR1VeRENy57b6ZpqU3RD3zZ8LrrKwJKNcW7TWkQwmcu6C7UQWWHGd6r1",
  "key1": "4d1TC3wFm5c3WcZv3jy8RnzZTmwFrkhN1vsrb3vbXR5mfPF7gjrLULaMfamzA5nvu1Xi6ptiZTuD6nfGzrKLW5h9",
  "key2": "2RSNpphbcqCmnACSRfmCVdcS6tgVsKvzHk1kqXhm39jKYmQbSkqxRyvp7Dmks6JpYaVxCQYQFizuuvWZA587zoCB",
  "key3": "3QFsEAomET3ac3yPPS6W29oxDweUzcvt6avTGWh22iVXPZ1pbi7N4Kpj91KNsW6CcCBe24jJpJ8nD25B5XYtSkA6",
  "key4": "3JHMsyoph9RnymaexEBTLX2fLxeUjSYdSDxRCTGaVPr4LDrK8m88QA3SSo97XKQj3jCNuoowYtcukXdsAdrBSCTd",
  "key5": "4oZWdJsTD3ewYYFjiFeXCTbwZ2jzSjx9XoaDjh82kzDuiY9NUZwnK96sjsDxfSNQMfrHX6z4uggKHRpf5YzVQqSn",
  "key6": "5oMBZT2LB61sSsTaEbvmx7nSKTpFU5KtSnZ2S7zogu8G3zpW7DUKQVVFFgodTMPT3RXsBoW4v4wdt7jpXcQFYQcA",
  "key7": "3qXAXKpqXViUY5n5r2mGjvapPttXehAZ4uj7MCWSiboE3xJMM5xHPW1BxBHvmghm1PNKMaqkwKC7BPnfjcRdi4nf",
  "key8": "3r5pd8C9sWWvh8ghC7L7tSU5tfA3WTBSsjLtBj8kB6ku5ycWyDGYpRw8dFPpnnBgvADpurMNB56R2yEJ7JaZV3Ti",
  "key9": "5q67etxNCUuRHgQBzFBAEoze2o4h4thELn78AKNkpauKNCR76nd1fVgwVrm2o8t1gCqu9jdxxgxurvgueujkskzG",
  "key10": "3bnzPyJhDokExAdG1MXjCWfQegJpsuwHyYR7Fea6p7NY7CamiARQMGKbnyNd4DnJwUaWsZno1ASCaocoaihMCpGe",
  "key11": "5s6M5XyjsWFviUpG3rf49fTgx1cTZUexh6C5m1KLtd1mrdTgyJV5bF46HpEtT129od2W8Y1am44KVsAQtyRCwju5",
  "key12": "2Es2bEHjp17gkLJLdcazbkmASiL3q6x6QMozBavgPTxC1NFkV5S7MLvJWLcmhyaKdPgs1DKR8BLwNmBKbE1e1WnV",
  "key13": "dD5R8qdqUKN8HbaLEmajDsGB1FUkwUbBSvDphAUzPm29DcQ8u7dH8YT8LrDY3kWcXfEVYBap36Hxyp2rbeawpiV",
  "key14": "3hV5yf25rFiVNSfAJi7Az3ufzPWUv4dzbe2zkdbmskrMAsqKF7dUqEG1BsZkTskMzccr1qeZ4kSpQ2aJjSBaBVsa",
  "key15": "3K1rTPxvZG3WPxwoKgnSPGKPiLati31WoXzjcmn1P1XWkTJ6yhQR6Aq4YNH3jyNgSgZNniuPUVfkB4U3EssJg3QA",
  "key16": "4oc3ftgAgpiPTTLXgi54VHBKAdD9yJJTKSw6orGL8hj2VF8pYNZr9TMRgLGXZ65V6zCt8mzxtTJANvRYYpLkMpCS",
  "key17": "2R945dJXYiAuZaoXU27ajQCSPPYGULVeNwmeQ7TAMkWAeGmmZarow8zTnKg6VycsAAK8vLN5wYVrjsm9uGbFdjSu",
  "key18": "qTmaWHdonFrYt2FbhBXCyJafNWifGSjmR5NajFCECbTq2ZjDZjMJLXC6amzs9BxRZZhaQqMu4VBHj6tmt65rXoZ",
  "key19": "T1xNZgL4wQEvGVkgne85NXbkbt14TtYaQTK9kgQQvpqGCs2qtddkyLpnjGDhZWNGWZVZ7wPimCiub526HWyhBDH",
  "key20": "p2ibZYjgDHUae8Z5Ldv46aiuPH11rtzfdt2FJAF5jTN8DfFgoEVU7HKHG7E92k2BnABRh8UwcgsuoMQhkN2Rb8L",
  "key21": "4aS4NHox1DRDZVaVKfsHGP97dww8pTemCWX47EB53x8Ex61nNCi8B2RG5z5aBfhFW5yY8nLjporYmUnLRCsKhdko",
  "key22": "4uKqTdbPhYF8MJhDGrQPHTyXHoPWUECyYtUXZTxZACzmbCGRZaXkCarQ3FqfbJXgT2EgFS9MgmyqwjMmXam1ntNB",
  "key23": "hH73gmjwF4FymX4mC2tCXcce4yN43kGheif1RxW2caARKprGcXFAATQc1jFbWFgk5UnHFFPtcsAQjhnquNyXBoq",
  "key24": "2smjfwuRpXA9yKnfKY54bxHbHxpT88hiy87fUedxp4EGkDryVUh8opr1vm28oUYNXmZCKECnJsPivQekzdfWsh3A",
  "key25": "4S5qE1dnxbG9Axvy1wXLKixVZPyEx1Gow2ktiqv13Eg7ZbNbPnqT4UBk9n2x17GvCoxBZgRAupwasRXxhaKSqHK1",
  "key26": "4NTRjzFpCmxhC8bYxWfnWDRCTkkCi2txPypM3VuaYcy4rDJQG3RSt5s3QsjxGrGbXtmQBVc6DusVxDGPV8im7RBF",
  "key27": "3WgZ6Hac4ZiFGaVToTYJMcfkGZUj8DZiQuXs5PhiqLSNrWwEhAyFfeez9hbcaoLzuZTC3D9cH4cgA38HeY9BcNWx",
  "key28": "sAdZ2y6sY6mccs1XfnQ3E9E72adhzv3YcfcoPQABuuLTgmpx3DyF1LM7xHYEEPU3zbWkfG253BvUDoCv7DXpji7",
  "key29": "5RSV6fWSBTrrh9SB7AhtXK8TXKtzyhW4nrzUxRycvJRkjp8vLoPNY4J7yEgFTQzZTduXnUNkv3L9AfT2KT3mVJQj",
  "key30": "4Y3nL94ioTH6Xn4DbYAfHdK3sRoFAo5GM7bbWahYhycKAQ4Z8jQg5nRRriLX8FRUz5mSw5wtbow244mH5RvJ5kgu",
  "key31": "bNmH3qtydGVHZufCLfg2T9MAJLv8R9SDF3F8HkkuH2gtCDgE6n7K4WCmdApdiTYXf3jNhraicwUpLyQXdVFYJy2",
  "key32": "3AfWQz1ddjmCFHUEyawBdSM4wXBfb9NWR1omca6CzWXA5JZtqEXxJuA3yx7pVFifV3nwwq38WqWwA2gESNAHLmGg",
  "key33": "5XbKZUQK61MMzJWaEGQCL62WPFkqqnztiUPJpr44AdLwbiZEgv7ywcd1pFAFa5wpbFnKTErQxgDhPJwS1wrhEhvu",
  "key34": "5gx6NDtF3b3zF7At3iKLXpEseckzJLfb1mADhvBFumM3nNQD9y1S56hm7GJjHmfYECuTjxcovFqSd4mkvUb4DtN7",
  "key35": "3mcMJaoEivFJeFZNA7j6vf3Y2gCa6Q33UPbs6HWAdQXsEFy8bvPkkcix3jkzzDjxpYQPxho1xNS7SeRn88EJSUgp",
  "key36": "1LmeXUHsC4wHKoU4sr6hNowGQytA28jyYn9nGtC4XWrDvKWETWoKdgU4yMibjLUuNUsNHAspZUWodx9QYg9u2QG",
  "key37": "2rLMf8i2a6AhMTvmLZEoqT5GVZECkckAQA8tdfF92NxWJgmqe8v5Hpo7bsuYPsJSGdxstP5xAkrUtZuyVu2TbYZ6",
  "key38": "3LA6v3nw6WTZJvLZoTBPmv7tHWQ9Qft7aKYmPH7AiH6TA4eDaSAyHK9uyyLZuXd8kCEZPaZgdnHQWNcDEco7Jktc",
  "key39": "41oVfP1ffZ2Z5YoMis383BV7SzXwzpsK8SfkUHLqdrjgqcbgK624x8AWiPJs6X67Y6VXXVxVvS7mJsoJ8urQK2AW",
  "key40": "2pX7TdjGmGoNbu9kKAt8vrKKAYAdrdhQn6Fw5vt5H5taKeyDaEbCQR6kefNCkjDajj3qa1F3tyb2nSYGuQ55Rrhg",
  "key41": "4qaNzz6fP2MNiWGmnn26zNKhch2Xt7eGP9cQj3VnGABoz3YesSgwLzjUbzf6UUYisGsXwR8MuS1XDzNZ39t4kD2s",
  "key42": "5xq5nzKfP1EAeh8r422ko9siYi3S9WpZbHBXeoV3MTarn99ktyEPiMb2PSbw5XP1d1XXJm4Gjq3p1FA9agaQ8dyi",
  "key43": "3uyVAoKoeDuJyw3KTcWr24Vf74jfqYFonqanvwYX1o3coiFgdWrFjaCET2gAN6KVXr83qkNZCM7YycweobCfy1C8",
  "key44": "2JfB3hAzPdEv3fJuHKrTGEXEksWo4FqZSqLaoqmPfeLEe3cbxSqVBvDQGVjRR45bjgL6NdYq73mUSo9ov8MkmRN3",
  "key45": "XdYuF8MvKDrx5ELg8bzze2LSPnskCnqQHexzySLxsTRexLRtDSdLJPf4BpAH6AH3aPargHXMnUkNAmWD1f2QR3S",
  "key46": "a8hA3MHtKGiiSwaY5NFbJ2v4E2KidZhv9brpBdHKXKB8JKqRnBEqK18L5LWuP67T1CfwKWT4zvBdtjsPbvKpnAZ",
  "key47": "uHiEt5aTdhEsXs9BtxYFMjKuQBjRZzjZNwm7gMvUsyAfTyJbHqbyDYSgmKbrjzR9zhaxyqP5AuiMrVZShWm5eiB",
  "key48": "3Rd1hqjPc7PTvhQ89TBR147PjgtbDY8WXsVtvB3qCmHg26z9kBFjiepasmqhUWcXtrKckLyWQq8dTqCg67RV2UKz",
  "key49": "645915jwCC62TfisRuqGRJbgxcjSTfHQPLqSQx8fotG1B3x6oiT241gKNbAtFUrQKr74DNAKMW65HjeHdEoUjkCW"
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
