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
    "5bCcgV5yvz6cyJyYSCUd2TrMgb2VCbR4M8GDozw8zwKgAdjdpsLk4v1c8kKZG2Q5hhPzcq1gi9TJPprci1Rv6Aqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i33GYpXwuoFonwnQayimynmwj6ypHk4XJTNJCVVZi1pXcMos1SgNzXE9i5qVgzVw2Kh3pGxFUoHiduTsVeS7MeC",
  "key1": "2Ec4BtDhsc1emaAngkx4LZ7L9ansVDeaA62f6MKc8mHGpbdVjxQcJMxP2S2pCAmsrAbnv13cF4ToZ5Z76xq5kzw4",
  "key2": "4JYa7gRTrK1ch3m48UZcxfg9vWPKS6CxkC5KCvVZdZP8AncWdMRdJmdrTqrN8EQPAHFT6KA5uWdFhcs94KLmRGEW",
  "key3": "5QRGkUsJhb3HRE3kQYv25nTYSYNATvoeyN2SonaHKSmyQeKuezfv2HVwPCQtAMnBfobmKVQb99KnZ3jT1dPBdS9r",
  "key4": "BDEYT5YmhX8zynK9UBvUveaipTeKQhHvZPsLSkddbYnE4PfzK4yhqaM9VLhrQLKRKUs5eofv282zJS793aRPVf4",
  "key5": "2ooes4gUM4VfH2inXjPCsZC2wQ6CtHtq72m1E2fAk1Eb8RPCHSW3HKLQZUxcLdEZNidjAZUxL4mJEfNxX8NxKkXf",
  "key6": "3YzatsdLvhe8BRy3BcsbhyyUaegjrmo23xwYegKSUN8VhndgRtwQfFqntxigkfeTZBtxGtZd1aLUgJs5mPN3yjC1",
  "key7": "5iEBzmRTpFXi1uyfsTG7tsc6z8rTSpzsHkBVSyfo9MEDe2FRCPrZx3AqjUWBMyttSk5etA3mv74HbeLDYJm4rrcB",
  "key8": "4j63Fxdzbjj6A9vwjuueAUed38CtL5LhJACEN1BfJT9vo99EhWg6xTv6h6HJz2zY5KwZM28K8xVrBCMMKZfUDn91",
  "key9": "33hrvE7oJU6Jx2gSraLH1fLkVHgtpVy3WZSMefanUtMiafc5FHQm5JUzcMxBuU2P5XzbhreULXyzeuCebDnNnS4C",
  "key10": "4Qc8cn69x6gviL7fYqUY7zfAuAdFzq3DU5Mw51z7ANgJAm5y7RVHejcNBuUA3okqrvj1ndesY1RM4B8fxTZcANoE",
  "key11": "5AdzmqbjYN4vMf8XtJJCsAZmdnnPfMx4fZ1BNLD5sq86pzo6oc4fLufSCLsiXhejbpxJbG36efTEPTMKNi83tGdV",
  "key12": "5tjWBpCNVZH7LoK1kDKQ54WyhoEiNGRujDsa53KaTTQ3WyRi49nK2u6J1oHYA2Va7gNqJkke1KQHQ1VjHyWzwzgw",
  "key13": "ynZhGauTrx8sLyJ4rxX2cvpKSSUC8QoX1qoE7NYZA43hKvZogFCFPCHJZrTnjd8GTz9PdW6yhgH1fPVC4SY4QMs",
  "key14": "4jyxNujS4YaLB2CpU3eGptorLUS5kPCTkYZT6tE6QxgN95fLwubn5gYURjykWKUNNHqHxJkaqatqqopqUgcocpY1",
  "key15": "2DUaNdY6jkLdc3q47oxeWcoRhf3rwMxZPEEid4rT2pnCfMqDdbCbBpw3Ga6HYue8Aeft86krRyQYcDKAwLSkBfw6",
  "key16": "5hSo5yaV84fmxd7iiGGad6r8J7Y6Ns4sqSwXrqWWfyHp6HuTBp1TREEJHNgsT2zGhUUvDstGgDSrYB8EibgkW3iz",
  "key17": "62aY2y5UhrDore3ajTwf3uFsYjXY76T9aXsvwTLVn4Pc3fja9pspEA6aoUrVNozC2W7Wv8wWHPAiDw1BuL1tN2tV",
  "key18": "3E544WnZXxtj8EBCiMFYwX1Fa7iTVzaKpVFuYw63mWYXCXKKYPZoS7RqYVy5Ed7wLXFKNLNWSsfMCmb4pRe5YxCc",
  "key19": "51WxqMZUZwv35VUffmpMdqs5oeBD2xuyAuvaEDnorGGhC4GMZL3gRRB3Syqq2NHUHqkLgJDSGjf4UydgCPLr4cms",
  "key20": "5j1fUMZupenf7DuzySXmm4gT4b8XPRyDuPqA53iTcWpwbRBKU5ChbrGCzUM3PhzhGHo7dxNDPZvLPtdqMhHA7gZk",
  "key21": "pxVXK9LojJXWBhi8snh6zTVXB6APx2DJmnoMpFCRTFHg893Aeg6yabg5qaa6W3epMZnYxWDRwuMe9o62f4NwaYu",
  "key22": "5zjZLtMsSiohGc9iBX3e88YdKf77V2aPNKagXjHK7ZaS42xYbc9TVJuVYgZHVgZ4QPSwtVhYsGLWjby1qt9bmu3k",
  "key23": "4UXeMXXsgjjrFwTuznUscV5ThSWXb8r3LkAQXsHUXxbC4ZLtDM5UDDuMT74HUzAnXiNp2pX1peCZCp4ssdm4hd5K",
  "key24": "JUEe9F9Yt4cre2fJuyS4RYQdvs82WEVod16UMKeDnURnpVyDvHzjpV3rFndCAvCHa9J9GRb8SexJceZYaTffaaG",
  "key25": "4SJmUzrjiyz2PDBY5uZf6R7j4qoS1WkNPswxxMw9qYPzm8YP4Jo7FmgaAKmqbjTpZc1bm4rCUeRrZ5VvJmba9djd",
  "key26": "4QKHi24T1VnMNAiRc7NNBc4WDC9yyLBH7GpzEGhUstY12KmUQ5zTVtpSf7B2KWKNMgQEn1s12vncqM41GRyqUYYF",
  "key27": "2NmfEaMmRLCjCyepR4FS5mJJLyDXsFNM5kM4qUFV5iA3DDG9uVb9mZ9vX8w8ya1tYZsRws7Yan14uGLgsUcnyCEE",
  "key28": "36AKCU2AooZ16Qut5mF82QaPatdVaeRFeYyQbLbD8x9iSLvN8mspUcNYf1XhG5o2fd47MFFmfMLDepMvES6h9Bvt",
  "key29": "65pHsjvPRAd6H2u1WWaGyAx5SWXMxTik5A2k6hcC3B8wunCWmcQ39rueoG151sq2o8zzdXyc2UuYhWPsr1i36yxT",
  "key30": "4JS44rx8sg6smQ1TeNFyo32TRNyZ3PsgE1VZ43hFms2zq9373H3M7TCyW3V1hEnb6joCYGLg24N7dpsjpuVBY4Zu",
  "key31": "24ruxxS6Aui8GLc9P1wYUoAJuKg5M3kQ43f9x93PWKJRTbtSwTCdvHkxjPXJ5Tz1951yfn83sc1hUh72MTbQcuWN",
  "key32": "5wWKkvnd7Z4pU6pgZGF4pTiQ432FmQ2szjynvBxDFeQyuXAcyRG5zRtGMNgA6cnjryGapu5E59CXKLX8Ncno7Pw1",
  "key33": "QamFoT2w8f4cCPaZL7JSybBPLt2KAVXBCPY48kVRhA6RG8QVYiNV6nJkmZpFAzvhV2Wd5zsdRfgVTd4E8EVAoGh",
  "key34": "3nrwHcG9T6GUZR9tCyQ923pgp1HLSvLuED7en67ErffVJxds2SYgVAGjUFAKw9vb5GVAEJbSFGbEK7x67JnoWi3n",
  "key35": "4oSQCkhm5m8HgmjuXrHd4EwrppZz4dXfVmx3RsrSy8JKjufB4qMsmVTwU9mTfT4U5aEBzm2nQAdfQ9hXaY3nqL8",
  "key36": "5hc3GbqS4Aj7htJyHfkj6zFBybNc6h9uT4gGovkaQ6w6WaZrd1SnqvopCNCs4FEdQa6h5aEtjWz3RiiKaKx2hygj",
  "key37": "4mppg4xhQ1nGtMtYHryCGCDE1gtZbVQv61rodDZstMvtTpm4CGXtWdpwY9RboGDmZZ2hxMUpqCnxmo36SZumVhyJ",
  "key38": "c4ZnZAekZ52L4fMVzdiiSWmS4PiyJNAfCFyTPHGkTZijfVCipCArLQsZv7FaaU75bkejczFTzDC7dZSbPQNwd1C",
  "key39": "3fySiYqNffPHzT7ymAibq8dM2XKcwpRNsAQ3XKKh8uen2kT38JgdEbsHinsLAktEFoaSrEyv1neJvvfPWq1DkDmn"
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
