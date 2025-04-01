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
    "2WzfQcuEUQXU75zCLh8C5EfWiuEQ7HZunDtpgTDmsAZYFbizg7QkCikqJE2pnBV82jQVqVJG7T2gawDMd5R3W9PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ra6Xby4WDLc9Z3ynYCN83yBJv2DLELy1PenUxdH4JibZwY6G9NzTXSC9xxw2mRWZqHQLDfYd3zRy3pGEmrcZhgE",
  "key1": "66HQeHdusCzdWjthNcUmVqZniZM49rD7KjxyvKkkYBPLmogLSTLNb8p8HgrdgjjFij32TirwCKNbd3A4Eoojnteh",
  "key2": "5CeMaJW7vgKqHMoGTeNub9XcUs4XvnfteDUF8jiiYX91kk2Pv1JvRTXCPtidVpzQH46r9dqJWSTJubWD3xbZW2sY",
  "key3": "59DVPKbM3EpB62u8TCUf2nC7BQZKcaLt6KDKhF286eVPUQi6FSpWsQ76gapMQxY58JhU2LT5VMztFq1X4kH4GeNo",
  "key4": "dLQAT4cbXDa8W4CVUApKUQcpFCeJiJMPn6bFNu1g76U8DywHLYBSiRubQoEcsQnT2iDC5oxt8soHASqSMAAvidG",
  "key5": "4P5QtxVFYBDXokoPakruympqsaUG5PZ3MoG5R8ru1twGXgHnS7KXcdrE9yfSaFogu4JpLqaw13sQ4FoyJh7ej8ft",
  "key6": "64A3sZ526VoxvTVT1HdsC21gjaugXg6JZt4vVGMHXTTajnQvGYFptz9ju686JL4x8bKtfWuY8dXZusbkkAdVdFYg",
  "key7": "49GuHqDNqdJtjNRU9LtPc7zZWH5xFwUGXqr8FwxhgywoGz1YzVn9vC4VDyHFFEbFxVw5gaCPAJ2JP9wbhxeP6e5X",
  "key8": "2uC6hJMXfBC8CnqXS4GVWpZvbzb3JAEJRSf1Nacj8R1pLqJDXzepdrYDiKu2TzG4hNSwkkiMqUbJ14S5pe2esosV",
  "key9": "3eeFd2btBs95QzrHoBykKB1QMorReHSu1jDQrdCSmw8fpiGe8X3HfFco9P6f4NpShPmUjDuTUi7gH8WFh69BWbYY",
  "key10": "4Zzi9uwn1VWm9L8N6D1PfsDuZzNFTBbfjzskNuSWmhLc8EG1zE1FZfYUZzzqUFSJ1AY7hGn3AijGb1mbYLibHhv6",
  "key11": "5LcEbA1nDxJj2qvHA4fjo5D8h8cLV32Mq3FEpu5DRoTmFLsDxNjEEaXkbNm8wK8UYLVsb4P75W6Cw2gp1S9ZNhPG",
  "key12": "3eoDX1XL9YosXnVBRfwN6LJWNSuGN6xmQo1MwFG4X9kFTLHuEiKjwvkctDhAAijjKnpLmyhrSUS8tMpHwxNh6RXL",
  "key13": "4pkxEhz5nGVHkpu87rw4huCL4h9wv2J1mufKiXedefEmoNbZ4TRJ5dEZv5h8pzPFDE9BfGZGJvZZcuStUZiFDxhA",
  "key14": "3hepEBVYtKE319UqV8FBubsfk5cuWLuWZW1ZZREA1Nio7GjZPjPijMR3sTmGk1zhmPQq9cHfHQY6UZznsxMj3xEG",
  "key15": "5sVGd56ByZyV6Fdo5Ng4ab3jW8PByutH8WsDg73oQfowhJLjbJQuPRueUSe9JxGEoZKfak5B8JcQ2Bmb85uYkXtr",
  "key16": "3PTLRjiXM66aZS2uTovRfM7GnCXwSuD1f4dmDTUfPxBvUHaPs3FZqbuzsiECarek5QA42k8r6tzcchBht1FGLaUq",
  "key17": "2hu1iDnnkbHNpNuzNZRt1wWMamZ9KjD5VRyEeDcVJ327pmgzZwQfqmT1CsLGkDFnTrEGtrURuW9qnuN8jgfFzcrg",
  "key18": "4pznnyjkfWU61pR9f7DU7BRGgctBVt4rMs1BW24sarQ4uq9xoU4GLwRhDtqyBgjbSQJNsjt2eKbfRTSVFqkgERfT",
  "key19": "4QQxUekLv9p7H1u2Qonp7f5FZjcVAfHrYfDpgqMLwiR86uZcD6RFufkjDipRjKShsbMe1pzhCKF4SxjU2EvaLEzf",
  "key20": "dnGFMRXmeuUybjVhQwjwum5e9QfkmP1o2Vr6Q6vb4naZAGCx3jDCPGKSc9MbF1YnkejPzQD75bLg8qg7oucGtkS",
  "key21": "5FjANinecCwZtpBWHNYq5dgxqdTe7aqtTcK4eBBb65KRcDCGwkApXk41pYcuy9DJd9VrAdgWdHqsfnm37pcMkEF1",
  "key22": "3tAsdyeResRJ9p4oUZhQigSxBDVsVCusVwyVRZ4BeANCHtuDb5z1YkDz5Dty3QWQRNTXA11bBfGkJTg2Vjt989wf",
  "key23": "3RVngiuanwKeaCaSMoFZkjCTdX42BpB4Z3bvoLBSLKnHAfT3Nm9AAuPMckMpJvPx1z7vvDA8NnfthNKKwD22ufox",
  "key24": "PZNNUADfrDn9sqkdztDHm6Ch1HH85tsTMjpXYmi3bHQDJ3XuQdBnZh7YkhMsihVatyU6FjhDv3msK8tD8wFAMXN",
  "key25": "36wvfa48QZmmEXv889AGcoEcgBGBuajCWGwBkaRsytBa3DyM9pmckJ1nykrjFoiogrjGCTm19fotVBvovcKRFjek",
  "key26": "Cvj3AznWjeG4AtTbt6e2dc4unuMTKxxMESsg8jFcXaqxgSZFeWho548aMgbvM1TcxqDziTiWEx8WKdJkymWnNo4",
  "key27": "63RPWjLrmugQQLrvsUAoVm39sxSD2txmhUE28XZj2bhphboydW7kwLKg7oz7iNwJ4wA2vwaGAiAd1EpF5Kd78hSU",
  "key28": "2wz3BLFgXGswa8RyXv1mSZWrg4Gt9X1nNVQeCsXAXZmevkFuxqSzupQomWMS2mdd6sKjntQbr6VwFEkQqXtC9dVx",
  "key29": "5LMiY65Bp9zaFh9npNmiUKLfPgWuNZ8QGgJbLnpM8dJekz9jCFKiSpfrrBpVnor8hCyBo1KdavbTRQAR4R5QJkW7",
  "key30": "3hp514cUeooVe7kqfzkCcH5Ci8aJtgqTKB9fes7fWbXSSzzri9rga17kgKP3ShJWELWKn65wzocxt3jPmQkUteiK",
  "key31": "x87XxDTNtsABjTPfixRrjzbufUfoBEENV4hbneDHndANr3RvvTLBnV85jLLrnbkVyKRGMM5GH3285AFa8UD51uF",
  "key32": "5Va4YqAdz8VbJyxLMkZQXnzFZ9KcPnYrfnGN6nxDXq2KLecmFeJ6yXJ8SzMAADxs1Sk44HkAX2ELs71HKzfhr64f",
  "key33": "3179ZUgveeBXCwQSMV8v3TuBGV2N7jPeDkVKti9gHdTjHEyNx4juwjLmKPGkS9FjkPDv6S5DFUvD3daDKJCRG5Tw",
  "key34": "EkMvvbqNXRdgnfQHzCEHHfmtFXUWAfSiKqSWWtGxu5NJZ7EjQC5QgXoKRjvx3fYW6xGjRc6LtRv9VzMh5P8vvLm",
  "key35": "3FRTh1Rs3Xp3GRs1LNm231kVVFVjVsstaDM9uG21K6xsD9VepyXpivuPND1kgZgvQxCUuJAn77yNNbfbbnoYqCzY",
  "key36": "44xJE3ZDJp6P8Vr3KUPAV7PN7bhVsbLSereXhDipGDDtjUpMQgiEnNNPbaTn1tM7M1iLcH8B2d86ryN9d9zxguxk",
  "key37": "5wKh4e14NpMG7p1zfUfKGmBRm5uF6AFPnsudm4Wau7hqnV2UVU3i5hkvG4FAQhFfsWF9Z6Jc1ia5SwhT2nSbsuoV"
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
