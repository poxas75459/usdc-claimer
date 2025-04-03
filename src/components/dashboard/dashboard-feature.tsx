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
    "4FkzmLN3tUuEPTETcXPTidEuc7tgDAyRvyptdXoT6rd78VcusFvwpLJhgLoXqU7w8f9ybbNAEEEDTToV8kH7Ertk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXwTxUum8UxLR8Yn6NxAmPXGygQf13NYebePDBkbk5F9cZgrhFqtC3ZzczgkrJGkyFNkNxRRCx77oPa2tLmD2sj",
  "key1": "2AmaE45GmxJRTjTg5r3ogGLVsYD5WAnRCeDN2viSHddB9MgUxJyonKfK9mTA3H4DXC1TyPcMq8GTEoYSMAPr2HWr",
  "key2": "2rJYW375TAFum7WGoVxWXbdoisCLNae18San3pQYG1LxhmdgfmnUvEnGHWxJjH1KyNknJAnoF2qU6ea5t6JBap9y",
  "key3": "2yLCysxDLCZUdvkVFptZcNDPQQNnJagSQAuigvZbrJZRE6by2mjSKEBknd2dHPoFkhs1HEsJ823PnRXMpTbE3sfX",
  "key4": "2QYavyEpdrx6vHV9prRoSpGZVjysBM1gxFSGBsF5MrGTK5MZJgoyrNEALD9fPZLeeXardZn1idtZZjCb3ETdnFSB",
  "key5": "5WTrfv4eXPzzcmCfhmxGtAqiLSVZ1X9GW8kvdEM2bLN59NeweqVrDrhrfiPjpjs6bJad1pdYja9arB995HsQukFW",
  "key6": "5NfcokoxNasNaGQxDeAzMY14NpNZvmbQmFMizHVPbXr3J4vBCTjkaC74xQU5KrK8frGpZtNGVd88BWortwW8rxns",
  "key7": "4JAxMnkwAudwS9SGknoeCpxoix5SZXLnhtykrTjv5SLbRNEECNuasm9r8cSMnKd3XD329DtEk6oTN3g41NJN2ZJt",
  "key8": "34ee54U1D6fEweF9giR5bf4QhREJPPUeWAf2FF6G3nht69uefxyiHQfBjBuV4CFH1PBaCoghji7qaGd9UDaJD3gC",
  "key9": "4NJWU1QCoVEbUA7jfcL5AKuh3eWQuM6uUACCVt1NX7NrQKnTMCAzyhFGcjWfYnD2TUdH7iNYBNamvtETgLpG3baV",
  "key10": "5QinaJZ1PmpWdzEyfJrKx4kncwqeknWrYca1Ai62g5YKpQR4pGejgqsZ6D7WncVUQjU2aJHafPW4DWj1ddrsgDHM",
  "key11": "3SKYaZgBEwLaqXAocjV29iuNWidfncDdzxAMH6bt3VzBxvj58VPsJSxtYTK6WksRHWiMqxXrbiUyfyGHyvYzqAqm",
  "key12": "2nHjp7MfRhBbDkWDQbFJWPAm6sijrAB3fD73BxvQ1PUXwEJAiBZreb6Y6G4UYmQLV2HmAU7VNbu7ooUqzNtYdHz4",
  "key13": "TBGAesWDnhZd1FVbwUVWZJ6jA8GAKHn3ySHgjF9sb1guEKjZByEVrXt9dG5bBt288VLQDVDXeygagxNDSRnw8qF",
  "key14": "39ePmUyva66kpF5xuar2TbwXRGEBcRoEpJT4NPLx486WJpC9PSvYA4bTvJPmoDGRmvWJwnmqTxE1zb6Ake3dfSY6",
  "key15": "3Y2ZNPYh6kBqzjDS4wWeRdvXUJ5iBB7czQTAyM1Ai2Tgm4cGvMkW1cU7hdrLbyWoDpfMkHLWus8EWJLSm91cyFoR",
  "key16": "66PTKo7UqedhVfTHvruFyjGnWKzhs81k5E7wCjiRoudtp5uhK7HWNRT4NBsb9VuNSnkWrhC2Cu9ALekCRRoUVmrf",
  "key17": "34LMKZU6NNS6Y4R5yKNQyFd1yYHVVw53mHs39LV5okwKhjmJpTUBq5VgAPXfJu44xaYDoh8MbqXpBvvCf2WRNc8o",
  "key18": "T3FjVRDqU8uysNMQv1jr8bg4UTVr8JJEr17gCHsf1SxXSpSogZX6GdrUtLLHPcxgUZMigu9tLCr9WubKhfbbynH",
  "key19": "4ABgLfYi8fwxwAL3uJPJFr6iUbJh1xoVq4JwqmQRrtgsQ3zjP5wHFQc6C2oYZqEgRkohf2mE7T2tPkF5xzuife9E",
  "key20": "2KbqzYcBANwuq7kcnVyaTpWTJjzQHLtbAQTmEzSo8apxaLzeZX1F7K27b7WoHLhtbdi7un78naBirfFAnLNGHo5b",
  "key21": "W6hRp7cBrGQhcrzzEPRkRSdiCbe3oKepBUdHyVSxK2miFh5EqGh2E6R1hKLzeuVS4xz3hiXuzRZVaenNLMtKgqz",
  "key22": "3RNahFZXsugEc9ioGceVBAid9sVhXaqjhpr7SBdt9eV5M92p6LLNFiwzBpiKqBzsV4pj9EVk9hDQGnnZUMiG7wBP",
  "key23": "39fVuyaVaMExzpJC89jJwTdsdjfYpFtrrtzVBtXExfA5mXhUXyD4ULcDiADck7B8TCSoTH3EMe6bx4eZBdi54eCg",
  "key24": "5LudGCcpo1r7CYjPHkWv69UKX9Rnw7mmCRm1Wh8ap5BtoqUhCHTKsSbjq8WtA5Ny76RcVqhxfZbfgdQAutSAccXx",
  "key25": "4An7hYtgwrKB8JgR7eDrd3AVpu8crL4dpPT1vgeTjsALNpfqM6Z4q6kxQpdjGhdEJXnPGQnygScyBpouaqyY2zQN",
  "key26": "2SsjGbEVMniuWWvaVjrQGJodmwWB3qCQsSJWoDeRzC7PxjGVJtL2SmZTXX2qtr89ruvrkXt5P2mkWWz1PshZ6N3M",
  "key27": "3s5HzeSG3KKPE8NHwxzNCe6fBVsqgcfLznnsbADd59v2dxRzYMeKCAJjUstvje182yMzqLLm7CkWhqknVu5Lr86m",
  "key28": "5akDGeZPGG8B43twkoqhJeddhv4zikEWKe4oZ8iz1T2QrKMocUun6YfwEwYNUn5Atobh78BMrfAyaKHHwDKaCX4p",
  "key29": "2pvRdg22VvQoyFeFmmeAp1foVaz4DFBXZNENvut8oK6WRycFzK5uUBq6af7j12JDrgLzWgcSbFHkJasU8oEKLwHL",
  "key30": "5jRLhowz1RhB6riKga2KWnrrSbxpUDo5WbU9zUpRkQUnLDBrRMVF3mH34dQCwTDgfJsg7gQCGgeFcieYU3gzmdJr",
  "key31": "9d73EbwsAXrVHpwLCMsyDqzQmbR5c9pGgBkC9Sry8HTa1tMPuwzH8Y9TimWhcgkcfCnJ7WV4yWeEhptGDftwGSv",
  "key32": "BS2dBVokfAe4Psi28t4ZCMRwPi8nwXqCKfqRoYz2n28oFfAiDjHDQZKHyMdAZ8ktSRc8NtZ2Q8q9Eeza8SrVrzH"
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
