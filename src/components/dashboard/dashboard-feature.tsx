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
    "4gFAS93a8Nm4uE1uW2jvedf7br68rFUHsVbgwwqL8jxjVvFHXSLDDAztuj54EDjjNijpT424A88xiTeVZufaKZDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csD1J4k9So8KsAbSDEJtkJwNpAoHS42H9TpUdWm1d4u91WciFjLoAEMPXfrQPM5GEMppdkufmS6UzHYtZFpzvjs",
  "key1": "66DCeANcf7fCEG7okGDktsH2ysRV3ht1oDDfQ3VQMFCsp9tgk8Z9f3AeeZY8beDgM4up4gAnaJNEpiA4SU5upLgg",
  "key2": "27WT6PwSAFnGVAmp8Fc4iu8WMRJP3EoKtitmzDWKsgVSqJECoZLGwgpm9XunaWv5jw9nhBvHJ5PRLabHw1gyqYC8",
  "key3": "4bvNu26HkUuvCGKEVoJ6qL1mGZxKG3RBHQPu9cvgag8C6HnB6U3tG9KEGdrE6NTdhbNZ3pb8SCaY9M2S55BHWtX2",
  "key4": "4W9GMaE7PgsD2QHJVdPMgtBJPrXdgRjKh9nY8mGB18ngszqek37od6NxZtFU8xs2XbRKogZGS9bVsA2Z6m6n1Ymj",
  "key5": "4aqRnnTVPfPSamEQ5LiPqhMYBrHemobzqfLgJtYDV59xmyjTSTvmTNxe74s1A1Xq2UoyvzMQjUwWwh1pj6T74SNG",
  "key6": "3YDnDj7aW5X3s8fYofVgXNK11oCtFJkm7qsrAdP5Sat5TLPJMTy2SFY5ENzpSDnG9F9wEf2c2BTuykWaKz6urALr",
  "key7": "5CC2AhHHsopPwLWL4AU68SJ4gyeRnyvhpjyvKA6o8uxLZQxeCfFfrNbMfX9ihDXGKzSSVrawqieNpfSh8qy6Fqxr",
  "key8": "aY3iE8SmgBPsCza9xa9vwgXTEwzRVikDiVesydkNszNykwhrT5EUUWJHFugAbCg1Lr5BWmn5b7RHZiueitDjHxm",
  "key9": "4US5GgJP7LsriudnqQUC4uj4eGMMYs8TMEfL6uqitofTBmKR6vSZEXdJonhJq8N1bKnJ1djHxnKi4NA5vCnXRNAp",
  "key10": "g3GLAuduCbPNDnrWs5dQAhcPLSw1ztnMTkucggJe3RWmWv5H4XQwd7raUkRxQFtT55PMRUGSNooTL9gb8UiEgGZ",
  "key11": "4kegxaH7iLAqsZfMB4Kxv6fL7ovXDT2kpJXSgnLisdDXNytozyBAhQBzQMvq9Fc5AXA9Z7qKNfmewK8bhXk5exYT",
  "key12": "5RUhS7Jjwe8iw39kJJFvu2sjKkvh6gvqkEDBxAD4zAoEQjVdsPE2PYE3axGT9nJd71FEmunRsXcoNCx4iXc7udzp",
  "key13": "3NAJ8xyTJ56umtK7sdBpqkX9Zyakwj7ew32xvCJE7fSByFCSZ4eXwqbut8oqfN7D9UTgmq2m8CFXY92VdhbzPGvN",
  "key14": "2W8pboDDxYeGdDhbokohpGPF9RjGBhQMduuroR9CoX5dNJURUmBNpJjn85XAPdNUJirys9NfKJKZttYGZKhvKZ2c",
  "key15": "2WcS5g43wxkcyFtWLLAtfq4DJiAmiV1s59YPHGJDSp7WxcRPEa6beah91XqfMh3GkK1L5raEUEMusHz5QVZKguvX",
  "key16": "3NRsW6bhndNLHaB9QUXYnGr5qBpiPwQp64yZgjirJzSQ2GogHn53cs73YmmzRQaSXjm3Ya1uMLzCNdWbW5DBjpMW",
  "key17": "5uUqTk8M3GVpdhZimhw11JV2XsSQHuu977H3GGBiPwn8bgJU9sgExFvKcnqDShkGvZr3MyCFVJeZrtSV9zqvTDKP",
  "key18": "KTfoAavgKowhSKE36qictgpSqwz9vvHo3cAjmwDaN2Z7VT1sAbSL2vbFQ5VUXQ4bkFNQQiGbYbmGdxFydqWXQEv",
  "key19": "4g7TsJXEaSRxTx4HcCh93q72vjmLHMxhx2zFEs83rV8n6P5UvZhgv4tSg3vguVzKmbo7Hox1y54GkP6TqmMaFCJE",
  "key20": "RfjBX1tBXmVpX27kwBt1w77umEs6CrizoGcQXrrGivemXPVjWB2y5kHUbLQvpECxikLjVRVDeN9x1acmJjXa1bz",
  "key21": "tZekufhYnZQR1KHbwjhWVNAEK7YKQbtBttfgFdz2eU5fXYzQfuAmSkGgpiVFW1msXfKq73PKGYsCSfKgbLs4Luk",
  "key22": "3U2yoy8UdiQ4v85g8LSC7Loz3xE6tVFLe3biV61yZtgWVUdBSWRPoL9J2RRsh91eSXcsZnUrewtXyr1iEbB6KRCi",
  "key23": "CSupCM3boPvZ2sGWHRxAPFADbmSjDaiJ1dcSj5w9YsB3kKQzZh7USkEw2mhW31U5Qqb4VX8GANm7VEcoPVaJBhQ",
  "key24": "35fggB6RJeEd8jJXRk39bqiUfgcYqSVmahsmTBN3cJSprmv1k3dYf5YhvCQuiPtQ6UaK6tfeTkoQLzNGJ541uwbh",
  "key25": "5ViwCavmqmb16UrciwJAZZTa3iQUVqKHVb3eqGZZ9mK6zEi7QpVnAAoUYy3VQDddc7amSZhUoxRuVLSQEXdMdthP",
  "key26": "KyNYke95xVK8DRZR8wwmsDtbuXFcvABu3NrbTZRMMk7EnrWdus7DS39DFK5QUw9zD27U4FZC8poraH1Nc7KoryY",
  "key27": "3kv4sFh2597X2wzKfQFPPcN9Ck3nHJrx7iMo9KtpyYsK5x5rSSPDWJzvTNN3h4sESFDXtR9YbDAmHMc5mZuzpwmh",
  "key28": "3q54cx6GPBK2MKSPUa4zas8eaSkDo4cVJc664MCbJm6ff4fz2mBfoEd1pn26cKsXJuhMGKdE11EcHW8GA8Yhfqsn",
  "key29": "2SsU5BeHftFPFwsP1EvrcyNdZhcrBNMMbo3bhxDfZ4m8pnxw6dMuqUMpin9Y4wfRo3XMwajVXjjuFe1Axe9Bx5g9",
  "key30": "3uEY9BGk6Yh7J4661uEpqf5u25hDtR3VK6V6Njjhkh9VYqvb4RTK7FZdj3Yhp8fnP6txiN2yusgKyQmLPKzw1dRF",
  "key31": "4Tg8wMYpq7Y3DpitqTJRY3dgLMKjw1hSSoZK6VZbTGYnQe2L3MLmfgVe4yrkyqeLEbBHsvVScXQZcFdpmHvaYU2T",
  "key32": "64ZffW4YyDY3VsG8iUmfrWDa5DsfQHuKPy5ozgdxFiAC6Z4TsUrgmsieQ4HVTWm2VaC199UUcn13MVnVktxXJCJL"
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
