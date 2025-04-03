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
    "3otYNUiGWYTYK17RxwF8DH8V7Z42Wd2BWC8EMvNnbsEt6Hgz6kmRestcUqhyT5iGgQcPmLac8jFfNCQSbtVjvvjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35siaZUxQ2ayQfdhczdtdFC2yrjCCeU9qfRjhDYY9znGKhe4bB8Fozr71cdj8VpgUPdg1bPJfe17EoXuVHbdcje3",
  "key1": "4ESq3PJPYmKTwvnTwub8SzcBL4Gx9fcr8P1yHZdjZvLa9PPNZwRU2Yo8wfih16foBhta2A5PDg8Bi4A6HHytvrTy",
  "key2": "5DezicwH37bTJNXrcSZyfsZRSUF3RCKzmrWuN81qz3bx4LQyzXPTfciJVgJySPG674JueubbA1jf77s5cQKNaKyH",
  "key3": "BXq5pJm7jbhbwkDhHfFoz1PoGJzEJuG96pRAgM5884tCpMgFbvKLV5LGAuZv1bhSFagpikfcCzB26B9NJGJsqxZ",
  "key4": "BLVe1LjmSQr4z5BdTEyfEFCNze2k5VqzwNwcsnyBSWLAjz3N3ZtifpuLGyVFYdLQVGBEqd1v2efhZ4nxT4YhHpU",
  "key5": "3T8tByDmtV89cTrp6EnRoCs5FT9Jym1kRy4FAvt4LGS9N7kiMAcY423jZ6ZuHCmGDEMDMHuvtsUmfJv1zXzyuRyn",
  "key6": "4TCvP3y27vBQkWUwcLPqQec9umLM1qgQ2BAWfr8JBeRGy5Ajont18AepV6dXm8Q97fZtb68sj4KnjxqdpKHYdj49",
  "key7": "5bwhEmV5MxQX2yd8L4VZvfHSbEQGYebAYwDhv72MVF7hrAXzPmZ57f51DsmizKsApsXeFGUjzJFyynzotKTr6Dpp",
  "key8": "41BXFYcLQ7oxiA5ryx1yF9itKhTFBc3wy1ZguAK7fbUKZYJbr5MBKS6gfUVzAgzhXcorKRKM3Ls7WmS7TKg9jFW1",
  "key9": "5fRfHsgrZAQwDP5m8iKDRJRLKvr8v8NZ2StgwtUp3HcRB2g5n8TcH1gcLAsMHySTF6DjSBJqPGVbGvgd3mj2x4oY",
  "key10": "21rg9cTrNRahZByb4J3DaiL3TC8MZ9Pt4b3HyLqDR9nYmJPPZDaedsRdm26uoeM9Nx39upP6mouwDH2vZPzCeNRw",
  "key11": "3qUjFYLBsqbVEaWZBjvc6pF6UnGqGGSm5WFADqjPoyZyE5EhLcYaW1bhRUr4vRZXmvE1uGtti1HGdRKbMyj7nX8B",
  "key12": "2EQNEX8iJSYDrLJcRd9ySCvUdT4Ky6hoXdfcm36Juhekr8UUFUgqukTcHbZKNREmHy2qkRRyHEqfvDLYKJNqZiYj",
  "key13": "ccEjmrCjhiUhmSYSLTtkxh2y2MHN7zYLFgSJPZAiJAby3RLauzrdabpkL3DzignuUr4UL8DvN9ydYS4NXmnjq94",
  "key14": "2pa1gBCLEK4xK28uDkHCaAwxoym1GQcroE84dMYdfRFwrdFJkFmXM8v2Zcjcse7xTCG4cvRYUcEp9G9vsvwvLnPZ",
  "key15": "4hQ57QbDQ5FmqUaMVJdC2GrjCZerx7XtQVLk79AvWxuxxeru9WGpQSVHS3zkF5k4Q17hR5Gprw75pgQyF2KMhULb",
  "key16": "4ug7JhsNiAMWYozHXvoopKg6addqeUAD6GrAySxBvn5C6nugyZGx3mCN4Dp3YBDzqw4r9MiXsf4qxuB7fXqdSV32",
  "key17": "2fmXBxWCpzYYmoMV5ib312U4n65zb1ozjmbahaF3b9S8xVZ2WM7urGHRwt3YDPXU5LpftE4hDRV78DY6BGfLArBc",
  "key18": "4wyUJcrVKr4YHMfkx7zpH6ocjUbLa8SMMFQ8UymJ5gWPqUkTV23BCQGpF1hmsNpRP69KbNZKuV5EzDJpYSvWXhYY",
  "key19": "2cXDBB5zgsGEHPy5iYeL542CRdEs7UYv8oSWDfD9a4jQDXCSQ34tXRcu26AYrV9RQJCPdPMeAm7y4HWstvsBmQRd",
  "key20": "AERAb2DgpLeSzBiJVwdKzAXoV4YcUHaVFdace3vr1brMw1CbALyzD41r2X7rh8kEFHSDExUEKxmuTtiZPcuNQUc",
  "key21": "4He4wKaPsdA7Xg57deDa7KiQUhK5wwoyQz9WZsjMegeuNPg7kEqf546BMFGKthdepXjhE72D9VqM3tyo428sSYcs",
  "key22": "4VYMub5K4EVwwhj1jDj7K5PRNgVsG2qE9TqReFX8La1fru4aFeLFjgzJhsNGnWVxNFDQdFwYxr4ZR7SfQUeDcqzw",
  "key23": "5ZAWigmcp1CGQrPnEmsXyzuAujiPtj1AvqTc9oLUgoj9Wv9ziu3uYPADMshEhPLrgkAJQPQNGvWpWGjS4e2KjYLC",
  "key24": "2sN9pXhYHf2cJvDuwkyJzeXA8bwFHKSQpZ8gJ44p2nHTdkn8Lp6pn9H8F16xm3cF86cvjhnGJHGibJGEHz4kYNcE",
  "key25": "9MzXEaXRmitCokp8WX7cPSqMhNMnaV4yXiEA8pytPRXiS77W1k84FnnYBuu9npmwD1ydmNfj15JT61GncF2SPiZ",
  "key26": "5tGgBpgRTuGN2vfjQ3rtzXt3H4JVpjEnFKgE8fq1XPAuk3ZPZ4xFiuHGckmE68x6rVwxEmhs4f2ZmKwKdAXoyMw5",
  "key27": "5Q5DngP7KwRRULgSGrCPJGGiwx2sfTF1thx6fK3n59oZfcoENAP5wP58FX1JJwxk7p3DUtuQbBGxCdLnXgPxzsUb",
  "key28": "3beGuPXq38hHBmWv4k34tpwtVA7RJh113xd9pGq1GrBamgBGLp1RtNkmtfv7YJKWdyJt873FEKfntmxmUzLQ8yh9",
  "key29": "4ipLUa9vK6CQCxfDm2pxdRDdvfEbNLfDtAH4dMK4BWT6MwGLas67Ngbvw9GfEonw7yC15BZjt3HqtiJ2SwBqXvoo",
  "key30": "MNuk6XHTWEEkcLUWaueha8zYaV3zry7nzm3seYrn6K1umJbyhb84med8HSe2FZ3J9Pej6bCwK4hjPAUxBgKB7yo",
  "key31": "4XBKC1L7AioFjMSunWdnnRDcopZaSW8SQDYYYVtDSzihapMouTr7EbfcQG9ZnfpuUehZP1ExhicTnfKTnHXKonTK",
  "key32": "Sab5Gbf1SFUbNtkEgLgwQmPjnrnMziyg5DaJaxPcQko3EyxsVNWeCjyqX9X6tFVJ4f77VmPy3M3KJBWH85TaJRx"
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
