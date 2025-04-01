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
    "64YNqX7p7n3S77meKdvgQvMG8AUhbZBc8vhdUQZhcaKRvPJ8Mmt1pkEN2MJyShiRzkgRCQ8NpnqfD2N2dHHThqxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6qPf82oswDyoZWw8VpFWoRHq4ohPjaL8tzPgd5mn7rAHwX4uNTfJ3ABpR2NYSykBQqFy2wYq3dL2uSunHemqxw",
  "key1": "4oG9o4ReSGURWPDkRuRTDqxnY5PaYp7HJ1UGrTi84bPeVzXr4tpe8inAWWFTAsBM5K3P4Xyjzw61Py3pNas3LMud",
  "key2": "59HpvfPi3bDSnKmP6VmcXfdAEzHKJ93zH8Q13dNgMhAANpJX7XyfqMWS5UhK4GEC47rwTyXKS4H3R7Mqed3Tr8wX",
  "key3": "4GDYDgpMuC2fkUgMXSuLmTrKjUTd2B8TAjRpUQ6RQe3UZFDZFZ4Yf3pm4enFfrhS7T7ibKf77cjYqFCbYHyFm4Px",
  "key4": "3wR1XS9NAhaCM1XD9YbJFpDqSWbUCrtr6doRjruHMwa2LfkmX9ox3EyA7WQAeU9c4cRUrfxt6M9WcsHXofiGDBV2",
  "key5": "4ku1kSmENUx33dEymJPX3HWKmJYDTsGCn2mgNSGQepsVfPH321KspEAszQwbuFydQ9ka2YvHhUmbUmucn4eyz3Zc",
  "key6": "TMuqGvXFuVUUR1FUjms44peBRTmnHNkrXWMZ2JUcg7ftkq83EPPfknYA2trPySSdAAoUqup6FVGjiniqaEcNyWT",
  "key7": "5kvooRmrCtkopXU5DcSHir9yPqGJRDRuH6bvDdXau85dGCifGYNAZPDtVejjehyjSGft5XUcrXKmDBkSDCYLn2R8",
  "key8": "5bcBncyCtPLmsQ3breAiRFXKrfh8uiMouAsoJRd4czvhnq4SAB9pzAcnXdMfLGAqnbwb6yTzZa8M3gymFo119zoM",
  "key9": "Bsy9zXY6k1dqfCdts4L4wq78NXEcPck4SHr1F1QEKMMnyyBupBBu9kdi8x9u4QyaJYH6RPYdUg3sP9kN871okyc",
  "key10": "3mVH9RuRefzU19k929BuHgCVErmdyxyz367rGLQXjsfNaFjuMZHxQNQ46MwkaHy2ijXysbKhhQpxBW9rd2oh3Gc",
  "key11": "4Y1GhXjMKBjYmu15cG45SbQHWUxASeVDmXVXj4QzMRFfjp1nFZYznHjB62Q4o6jYuCLaU771xZejyqkkMJrkruRT",
  "key12": "3FLcaVonGvytxXWSrQQQ5y7QUqPPDYG7jX3TH2WDa6dMrAxYpC26qU1RKCq2Zwd51AYHfLcfNMN7DurUCpLWK4yf",
  "key13": "5ueJaU2t4YzomTSkX8ZMuAhXmmWnMM8EYXtap3J8SeKTEqcCGm3nBrVQdqenFWjEb8LBb8xqJsV35jWM4qEmPSkd",
  "key14": "2mRijdGBtMfWWqmywciXaEPXpbkzd9pPho3Em5pFUSvFFHNaxgegrRXVi3ffFeXujUpHdTkUTc1X1ypfnqdCbm2H",
  "key15": "3g4Q7qEsAAwkNM42GCHhMjWbYwYhfWDmAGyqcnPtFvNfaCEC9wbuDL8WKttkAqFEqH2mzt6kyJDiRFnicxrf3Zvm",
  "key16": "4SBhooNZFFbvrJkBgU9sbkvZdny68b7Kjo6RHA3AhqKDzEPtuUnbSeFqjF7Ud1rmhe5e4V8fAvRdA68iFx89MG64",
  "key17": "5MSZ2dyUe3iWXmZGFcdgsDr2edrVtpVhDF3GyJHKN7cumLReEZv84F9zB6x464ScRuRA3qErL5dbkpHYi1eA6kgK",
  "key18": "2KkzhREg4KrWhwShLT5Mz7ypQqapDViq4GHPoq78pRL2XECvNjeD19BXnMkHr86foUc3Foc32NdPwibiaGViy5Cr",
  "key19": "55r2Vtj6k2LKZR6Duo9ExxUbzGLFhM9jas6w7NgzPgMJ4FzvfKR2PqBZSX9SvZdcSLEknJiWjsNTuy1NdQCrEHGJ",
  "key20": "22EGLZ28aam1y8PaMUhBc55S3htAxdKns4WsKbaup9EhKt3kHYsayyUFnr2ukB7DCpkERC1VvtHKRpvbUoaCEepE",
  "key21": "3u2t7iBQWHYVmnQzoVkEY6Wa6JT9QnipykoxRu5XnVr6x7wEg6R4X4eJ5otErt4zLqZ3ps4eQeEBKFkmxJb2XQ2v",
  "key22": "2HdydMuWpaNMUXUPUMyTZG5aY4Kfd6GxPHLdiabettFNYexADiinPdfe8TkrzjSBuG9vQVJRvqV7wgTyQwfL19Zw",
  "key23": "5Js8P4LQx2YnYaewSZA8BH7dbeeppm1PHJrV5vqwjhRvx8QPjdCUXwwQgUrmZZcWLXiSua5BnrebapvoVvUZS9sY",
  "key24": "3Hw5Ff4tDiSrcu6UmQ2mEJH87V7ntZdrvfnmWn7urrXpS7CLn2zFzdHJ2wXBt4SAHn2caQW7q8akfXpXsijagieq",
  "key25": "2cBCbnWCumP7823dNeBxyVvq7JHtRDNVRt7LkkQsmgK7CbhoUsSNkTCxCvtxxrJk5WSSJBcjwMeqQQiaoySrwwHb",
  "key26": "PhUZt9uC8P1ZvvwPmadDbntGsZRbPHXQtcZJtW7antDjvqwTXVFUyv4eaxRAavDHxjekNBM4JQnAdxAJqNXCmHJ"
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
