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
    "ud5zUzRNKbC59tTLXUz8jbJqVw2atSQxnb9w77ZMjnbZG7qtHJKqNrW8dMzsHZKWddK8fSGV8skf8C2mmavNs4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ptk3JdDPVnKTSfi57iBLbtsLVde3HSyJ5yd5a1X5Jw3PPzWnmYAKcBSC7f9M3ubLTcPyh3L58QVMQtKPzMHAiRE",
  "key1": "2YQeaQmBk6m4GjxbQRZU8vioWAnbeBQiPaWUg72cgDq9vAQZ3v9oGwBLaxbKEtDeCSbmMLXQRiygArfRwSvuo1Xk",
  "key2": "35YbMh3NsBAmaW48Nt1qJhjLUUCytkX91Edr7PtAVQdV5TE8XrTzG4YYwcxp2MitJ94BK4W4pDi7ZzvvGgDZ4SRJ",
  "key3": "51VGthwJerTUzoGfJaj7w6za1Aa931cdG3FP2yh4JqNT6RrQYJwBJkubxvHttWmKfoqrvAH2ouNuzK9F4FpgwC2c",
  "key4": "3dBmpS1Mu4vtE2GoCcgSQKBzt2jBki9AcwkHgYEszmuicx2oNe8bPfmJe6udG6ULZ7T7GjQNwW2qquXyjyBm7dCz",
  "key5": "5QUBGE51kmoV4EByCqmGCLXhjuA87UbFLRH7iBiSEBPEcLKYotMzdVP3gR5bshtwHa9JqSCTZoBNjWQ2VmzchD5z",
  "key6": "2aLGfYSdYR4dNYVNBr7JeNgMrtzzzh24htBic8ipYkWR5GTj9Q7cFtwre8BCEFqsZDVGDRb3Va8cr3GtBd2TLYqe",
  "key7": "LQRYrsFb8LNQXVR6tvEm1Dkq1RweTTsHRVqU9ixjzkarM5HXGGiyntFnXa8n8QDpvQMnRSf1QSPQyyuDTUiyD5G",
  "key8": "2YCxHwcji3ZiTAUY7rxhmzvthVP1xH72ayq1Yrxtp5gaMDwLbnSGMGCq7B5bUZ4vGhLcuyYZJHPnPq1vBA8YGLMb",
  "key9": "2dB9jTKTruzAJAPyXtP8gfZ9QSXcgfVaqdeweeJYcfm58Gb6J4awRfXB6HaniptDjxxpeuKqCQT6nLHkjDzJNe8e",
  "key10": "2vxmgNLQgjrLLfcco2u9bzExmRaHyE6hyqMSFWaqNBTXY439HPMUHa66Y2Qg5MdMHsKfjYFcerf9jaAS8mimmprE",
  "key11": "3Yr8mXEm1vzz3LFdUhh62foQQKn8tfYUTg8qoL43PUzSt5f9dv2BcosQZfSKweWiHdkX2Zcr9iN8AdskKofksmHG",
  "key12": "49gxsnkJkqCJYSRUSWY24THFtuyhgiw53J86ue3WJBVDen7Ryhgaure1KgRazCA5TfoZDmUoXHwm94i7YdqPCMVB",
  "key13": "3Hk6FvL9QmjHkkrCbrYVG5SrGWF3Bj3iJvc8AiJkXgDG8vEJAf8r4HBcSfSngu6dzfC8jvZmgYy7cUZsvckfk9Ls",
  "key14": "46wWqArucdzMb5w2r4g9vKzPW3Uzn3hVhQzAFNh7ZnEZBqfk91FhsHX2N1zeuUNKBWee5anSfYbfA57xiCsWYLrz",
  "key15": "3ytnn3aie2VkfLBgzmWaf3mqHq7w9aods3NZrVpEtQacaqsAnkTCr5eZgxkJfvApzuMs4EbhDMp6VKjN5dau4aL1",
  "key16": "3bx2atUmatiNgr8ZBBnTz6jn4FpGbmtopcemw5qBKQqpnB4pCQF95Dd97dADPmb2SbReDGZUZC6PJZYUbPXPfcqh",
  "key17": "3hsDVxiaXmrEaPx9DLY2NRkSp3y9p1gVXKP7MLkn1bkdNVf4NcgiF8QMgw4dTxbCNNjL6Qm4jjcAXGrUnvTPnpmF",
  "key18": "5wqmgJdoc2DTXyptKzLbR17dSYWa4TfrJxjsvB7N6vCp8p5ViANuNX2wNhfKutfrKAm7U6SZTMXCUa1ZV5Y4uAvA",
  "key19": "4qbSo1s431FhZG5UKT2cwUrEgqxYC3fEgKVR1UjNuMwCgB1vHQ8MaZqTeZ8pGorHdvsoR2WTz8JWQsbCk9BKeij5",
  "key20": "43GbgPNpqfAwPNUe2QYSLvwURYC9WPMjYCP826Nn3G9y9neLVWLsCkEea2jwyGJSMMAo9M65JuvWHFGuPGNMZAYg",
  "key21": "622rxScJZRamYcketRVfxJtGbF5YALMaUdZ821pYHNoBkWwgUSeNMSCPgv8rBfXGcNG3yTw5prcnZ6nDsbjL2Q5t",
  "key22": "2EWe1F8nKxh4ztbNPrzjv1XTVUoE4isLJeZrVPjcJiNCMREXkG1CFLcdLaQ8nkMJ8fEucgtqjMD1r8L52aUk7hnH",
  "key23": "267ZYJ1b3UzAXgom8VXk2MooLgGeRbJr3uNNY2ykht3pRHdaSRJWnhh4xZXLh5TNUJmDKer2wLFVMFCidupyxogk",
  "key24": "4pbzYXMYJrWjH7y3tp4LbaGRH4Vs24mNeVh7bFd6CsP7AF1k2KHT5ioaMqcuFX8mRBcbuCU3WhiuXP1oh7ro5Mda",
  "key25": "3jQDV4SdxenZJHcNS3Eb7WWzoFydybS426EFHD9ujSzSYyDR1fSwBLWotxSfvG7vpadZTpRR14hoJYsPvQFiTddw",
  "key26": "5dJGiGgN3bRJhBKHHMQFQf99orbV9QPg9mHWatQhueE4kjGUCYgoiXryJDyTR4d8n9DEokQ1qtvkNiBnHT24zVad",
  "key27": "4Sd9ikKgJbvGwvXMNQtguAF7MWcCbUJr87U1PjydLrN8V3LbYjiQskYEk9FnACxBntSY9utnwwRMGRfsteYFvrmb",
  "key28": "5sxv47v62mDhkUyjD2VSjsb7QnpTbTWTQUR3G9ZFsoqL2Fj4xehKN1Niaf9cChvtNeYdeRxueiajonYUdzq8jaZR",
  "key29": "3ig8XYzAg3hicgX6JkX6czaZaz9HwwzNQSSjTXUK7pCySRow5MiEfgfNrEsavfsU3qbvLg4FJPYLoTFuM4DQNST1",
  "key30": "36vNbAwA3S7iXgPvD92s4hnnhBjs159Fh3ZTYzt18953vZ23ugZV5fpGy8myUMfCJmzyc958zBmgqWKeCDnUFqs9",
  "key31": "5QTRFEqc4qtEknZFh6zGzWxbhDzqhq9CSMnGyJTMaKGZo7Y92FP61Sp6zcD6ZCwjypEpbyCp9Fmi6eZMziYeXVX1",
  "key32": "54SfDD4okja4YxvJw3qU6Eny8p4Rw36E2qWEwMvJ7gmdKCB3fwXqim1YA9EABC1Nq5autm8gh35HdQLfwVVv6M3u",
  "key33": "5uVSTRqq3v4z2WuXjbP2FpLbukCyTFv867BAcbboRQRHtqAd9piPt6yT5cxpXZWTB1cXuMu8oQErVDNeUPQuFeVS",
  "key34": "5sSvz3uUJD5KoGfut2YswNDBSSM6enAPdkwHfBzY2Qq9ZnKSvKJZmC66K9oHgxPZji4wRp3ebt6EFky7S79dfkvw",
  "key35": "4HA7doKcp8LKDmZqmnpjBFrQ3iJ92C1bmZ46WMcMYPpfvQ6pBxkcWUgyYfw5qjoeaQAGepuVDB39NkHWkLsYQfWB",
  "key36": "dHTKX3ppQThj5E5GK81rGzjScjDSAVMjSvop9Ef3DGWL8zygA7dtvx9wEeb4CDr4RZ3uqeb5AWK5JSiJDswNvvu",
  "key37": "125LQ3DzvvBcxWEhQEsBWS7pdy1aUGh49XSH83EQek6MVmcgj5d6rMFMP9BDxWnGaez64Srrum53WD8rhqV2miAr",
  "key38": "35h2YmLHYHd4bBwJXuCEVDPgVnmbqttu8hwVNWctopim2AdFgGawkDgMb5cWht1xqmMprs9Jw4ZG5E4hyQ71FMNP",
  "key39": "4WQbHhNMZ4ukRRuFUMtU3CtF8rQURG1e1qvj1tHvx8xeSh7VUFGcoB2R7SdumixCkiQ2Wk7tJESFdQdvZbK4hFiM",
  "key40": "5S4acR17tsPoUE5JLWK6YrbmNnpbD42qNFG2nTRxtWFCeuFNhKtrA91SEEQqvbxrCpHVMx4YSMKwFUWxJSNqUaBv",
  "key41": "3gCNcRw3nbhwwUBXqGke9gDtWVph5RH9iy5w5UHNpJopHySjLdjDFVTHKJcj5dWsRh7VNTvL5tMu3XGSEjARNdaP",
  "key42": "415zaXJq5p6a9d3XK1yMdnG2mLdqkdY8gwH8ziUyGXhcuQbygTNcMsXqLoB3aQ4AFyJnJTHSuZvXH11inh7LKk3m",
  "key43": "3DtSuyjb9huJ2QF5coiMJjiPNzngUxS7zTCdamycPzFrMV7UsCmCmxYyLxbJTwasXvetWmzsvC1HnufT6iEeZWgH",
  "key44": "1kUtEJgc8wG6AtHZEo71cCLKFbp2CzRXYrmKJqNg2kGLT1vmHozKYMDkbuveeNhYZfY37tJgtH7V6d3UL32cFcQ",
  "key45": "h27RYVHp1xhFVpQnDeFMcV5xx4xUapFC2LcFKRz2aiECVsXmsuZeDnFHXAG5owTvp7BhTnhNeD6WF6evzCNLSkT"
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
