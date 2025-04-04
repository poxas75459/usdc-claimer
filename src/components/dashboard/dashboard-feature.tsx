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
    "5pdSrTDogq2jCr1bh8x3BVyEVCSndefJWym4Vm8KX1XmwP6ceaQ6ghqxcCz7qKFrD7sxKd5ZJUkxFCCRiAJFEL2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zb4yCq32fYYGy5NzfRsjJ5Ns6Ent4uCAJSnvpEM4HjeMPPPczzEoquMEPcHwjnT1uPfRkSWtBcNzmm5sez2bHfA",
  "key1": "GM56wPBS3q9YMnrGVN8AHxqxKHLzNejvnfV2vLha1V1ZH1Rm3mSMfnF4MoGUzKQaWvXT9SL9aMMD1ZxSzgMBLeF",
  "key2": "27rNcgwiwcMSFJQ3HPs7Dc3p6FNmEgLLeyeZRHUQ3oRLQruzwKL3p2n4XRimrvHgb5UUfPXv4z8ANqFSZgZgLu3t",
  "key3": "3CoxG1SiG9Zbi2bVQpuPg5nzsDMghn2DhHqH1jaRjU5RXDiz2RA8EL1548vGZvRuz2GSKQCqWQsFayYu7ViYFccx",
  "key4": "EjEpYSJJcreU1uNndDX9wMMmaLLt5TcuV7QCRyrgVKye5W2hYHQ2zwuKi1wMBYQNRWHwzbdEaA1GEPRatnbpejY",
  "key5": "4dLgWSwS4rECViB3jWf9uLP5aYGEkXLsTqQihYbhhd6XJdFzAr81vB3Udu5Tj53opVQUBzKroFSj7ECgThPP2h4U",
  "key6": "4Tz6nv5rdbRE9zukovbk1iR8bmre7EKCCYxuSSPUhdB3TAufjbjjWExat2nFhg3AakwwUeJfVb4fxeSjgyVkwFCa",
  "key7": "XkRHbVyPVxy8ci6Dk4VpJ1EKbzLxjrePM335RSm1EDS98MJZkV3LthqdWDiGNmmyva6vrWDagtnibfcjYzHWBMv",
  "key8": "2YQQXqWCCmQZn3b6QPg7EETD66Rz5b8HbessKg739BEZVwRjD72JhPrCfsPfhUSJjd9zJaGBfyMnXASyrxcu4omY",
  "key9": "2mFx6d59gPwac2aqKKsE2W1ZGKMYTfUCPf5ZYbWN4a83jPmVy7aFWcxwRTAkyWMXzEXBCTHGfrxuESiSTP51dCCe",
  "key10": "2ttxyjA2DXJ585cJBZ7yCeqHMZP6jH6VnLUjDFufGVU3aj7dtQtUVn67hR7EgB8JqrpsXpcQxKpF8aPyZrtJgvVi",
  "key11": "xVyK2Q7GxCDdNwADc5hARXa8WfuzX3jAGhnLoJ6pFqsMy3BYFheSxzx2RaAoN45rYHvPJtQnwx5JJ3EkZG7wht6",
  "key12": "2mxjJj2gUu16gUSmCiC57xFjercfooknj2DdSfyBQXUVzr5bcEgvqrHsWoHDr6xrk4Ge8nMrH76HKS9KP7wj42ap",
  "key13": "LoRnK5Qne9mC5KzuE88o4CuhREmBHK4GyYdbPDm6cZhWqdHdtcjCZH7HYMWKDLk1WZ83rQ1rGBPeYBu8n2GnXfg",
  "key14": "5UixgwfMYgFyUEYXANGdVckmeuQj6pt13NmFbenV3shuu95THqgtEHaqbvrTCHo2TV3N554Zx2ee1BJAkW2Fr7yF",
  "key15": "24gGoUkHdMcmREcnUWEYXkwsGaiNUMUmcYXbeyQGDGfTBPj86w1d7vgUZEPtbKLUCQF4jt445PM7HBHKzBukwURs",
  "key16": "3p2g8JoYtst5p31Sun9GuvgAUikfRGf15yxvRf5D287vzSJs7e7SWRSQ9d1XYgpAHqfWA7S7ikRRaAy8uhVi6otY",
  "key17": "4xqq8PkNb4Z7QpTXuwDKLCUVXC1664Aape4zvUUBQi9oHFaEd9WL17WKEGhchVKHgFzbawnf5Z4SeQHgzuPNmWGT",
  "key18": "24gUA1EJgziseSeSJKotA7oSaV4Tn4CLeB6YaXLpwgdYCnSe4TQLtYm5KsvvnhwKPGWVmwrt328hj1Ub5MnVaxYC",
  "key19": "Et7SWe3rv5DbCmgAnviz2AarMBxXpAUA9WYBMsy21BdxZCKvGwAUEqTrcmAYfS4cRdM92V4vJZecZN4wdd1GUNL",
  "key20": "3d5oT1X9SMbD1JRKvHevEJojK8mSL6FGkk1nzckDzgssoJiKJaaqNJGW61bUjBPpxaewAJ6s2G8MJosp3BeTm53j",
  "key21": "4NWZGCpYYvX7A6DZkraadi1AUcw9LQffEqTHxbjMTr8fRxJRyY6cGXKH4XMQGCV3ESTvtoyMthHXkvnvHhR4kHeM",
  "key22": "35b3fQpHUTicxVrUqxWnbjraizQ4LCt62aTLnhXGspxfYEKVKv9QqDFFjvA42iJtQzZDWPSzHpkqRuGBjxRJYP1T",
  "key23": "SiuXPENWdJE9Phn9QQ7oAR4dLmNHGFdbD8SaGkxtwdzYpKUmCKX9Fh4cYKsY4GSuGCDSB9bYLf9VHb6VqPzP6T5",
  "key24": "2smYsM9A3LbwTzypFW5H2Ye89gUXiywyTiJw8VfuDq4MJ4dHLPmCrG5K8ThHyoyBpdcTkBJjQGSWQahrhVe8EYYe",
  "key25": "4r8UmWF5ZrXEd7yc5JShS8CeR1nhNpczS97dF14a7jBQQboRuVTL77jxr9kz17L1ZSQ2Bb6FLsy3p3b7ajwd8oSH",
  "key26": "2QtwUaHPNgY6hX1LTDJctUiSQo9xhzaMhwyY7xEfbAZLsd9EVo1WH17SeK5HZKGJJ4CUgMeDA1n3CLtPoAANBtmg",
  "key27": "bPhhYP75XEkLsG7T9F4DCr49ghNVUEJEnyohmMGofKH31C9G6QsYbRcybk5ZYTMvH6K8n4kt9A8jbjmhqGhJoTp",
  "key28": "5oqtfyqsQn7nx8wLBkadpDqExr3uyjyne1cR4iqXe89Vmsrivp38cHkVwEsTy6pqLMJWKbRJvheG6NxjBB3Zzokz",
  "key29": "5t8mSuy5byNdA2YSFMqfBDrCMFkb5yuZ6NV3KxSDfNfCuT8UTXE7P1BNhQg4Sy2X1PDLLdBMgs5FUq54fErvrhEu",
  "key30": "u9QuGY6qYyNhdktpZb6emdkjsUpoLBuabKQj9nn4v3dVhbTqvFN3j9WTLfhEkNJYGeBXt2BdQAAjrbvEf6UXBXf",
  "key31": "LPQ8MHAFn3tcYF1pqmUnYSKeM1RzvUQo2YnNN24M2qNf5gxxGuBrtQJDqXMsrV7cENYHwL7vuLnTZL9M31cfvBy",
  "key32": "5Fc3upGx6M6vPTKBdUWwhGn1mLggVVLR6LtRv2H9UrxJejiuxGfpvU1Rk8Yg23sGPYChd25Pqx176h82SJPE8aN4",
  "key33": "2zrvp6xWAjsjd52YqD4L3K45cyw2xkHrJG3W2sQdCCHJHN9mwizSQsfE7pw4xNas9CzPdc9A4tQMQbA4WmjoN1MX",
  "key34": "3ePgwpG6BwBEfSJNswzFQy3gdCj7a1kQYAM54dhF3hVaWhGu9CF6aEr9mEEJh7zkSkQzV3p9bGhQ9Su49S3hjx3N",
  "key35": "2vvJbow8qb5mZBxy6hskag4KgZzmbaSgzPMifXFGGEs6DymvitVj4PjMvhu29ppmrFRQyopjpDHYkdNREHprLw2y",
  "key36": "tBgYUhK73nuiRSCfnWAe6SnE6KkNebADXGydqbuHQABLHaMcYDefRafWmrMJyqAe674fHHNYVNwSLegowveS4hA",
  "key37": "35gVuUtiF3bp7aH6MVSFtYPJqda2SRsJJtWuCoQa9qhLKr3dCikvVqzE9rSZngSei3ey87kiBM8KYJKPtAYUnpwr",
  "key38": "DMDLL9TH9eVgWQrk5S7KAtTEUc2MPn2u2kFfA99RrUhauu9XF7XEZ44tceR57q15k2smdnbL5sbc8msejNLB6eZ",
  "key39": "XhAFVzF7HjwnzFUmrRx6ggb7TDnfPXHZXbAnYv3SHLFM8MUQfBwooQiCtxb2rHiynSkUQV48Eqth5BkMpYmaWPg"
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
