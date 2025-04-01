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
    "5dD6jNcF4MToPmt6bQgTWDU62Zghdb2cwDT57N88HMxQKQGaVVTcHBTgJTsyL1KySiw36EEJJUuRvYx3AQE74Lfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23rNN8Rf1ZreSwVbVJtcG4K4STNDXySvxjiCayhguyhPTKzt9MedyTHFfTwkZzcvcitvra2jPikPotjeqJ6drmsE",
  "key1": "JEg4fUMJQHKi5Rn3D54QBDz4hfNd6dvVG68mYqW4uaSuQTtbVecePkur6RgogFpFUtM9xcDd8HvbxPArYoNpxgt",
  "key2": "4e2f34yvACHH3FurqEuZCjLGA5W3dPLmB8aWDyohpsKFxojCUenNoZEKvweSjK9yJfJnqX4xwDjunREu543pXsLT",
  "key3": "5t8YPbri2ic5QDWuSk865TigzWzcg6GKNNNPrNMgWHoCpjeYu7U8n7ekdm2uQvRvnXKT2yBZYX5MP71ALQYRn3nH",
  "key4": "FuwepTDoPNbqfTRJ1zc3DPuNxT3BQQ9yh2LyxsQEUb6xkumQSPextaqDME2NTCbRet6YLZMcjdg12x7PJSoxLW8",
  "key5": "342evMdT1fsMT6iKhteM5P2zaNXqQFzsfQHLVR2D5oGBM9gvWqJ7UpScFwpDZZ8gTgbPoyES12svQJN2GwrTN9tm",
  "key6": "QUiVHwEupsCaDxK8zowxDxTDr2fWdR56iuQEqFQFUR2vXqg2z79uYH8zxy5vMmZdXpjxHQ6gSsRDBVU9PC2gqe8",
  "key7": "3WyXka7sEK2L9mFHD5P1Q5JR7zWVfg3f25t6KoMgUeHFxQbX54XxW5Z3U8HMQbizZ3FJFsY6yUivyfoDh1mCBxM9",
  "key8": "2Lr9Rh828vQvBmB6pKEQckGYxLpGu76bJuHtbjgDdw2hGiEw84nobvRxmqrFQAvyRRe34dvzDTubVBETKSAT4WX5",
  "key9": "4f6iVb3GpExjofdpkYMRu3GLJU5oAPSrTg3QGLkmSDTGyMNeWLhwt8ugCDSo4yUkxuB135aeE3h7UXjvhv7cPpy2",
  "key10": "25Wgb71WNSijJvy1hVXM6rvUgaJ3jWfFhWQCHTLaUPpVnZnsTUN17Nv5H127RXSKKULi3VK5WFgn7RWttQbpWACw",
  "key11": "VGk9ojdNrogmz9xhikjqg4S5oJvVarjm8jdHZ7Z3f9p1SDkR5vXKF5TRAo7snh8n1Z34ZkRHqZ87rFPbFYHeUTv",
  "key12": "3Mt5drHSYmKa3of1nDaWGtpWbCDBnYUejJXXZphddAQvh2u3WzayRaUuoxzxTksAYFC5337jSWskaMz1mYSiKbNN",
  "key13": "QwyxNQWvVzYnNmDVg5dcStsC7UkPY4nfYRZANN6hCTYXdqXBG8SZA5Lbei61pTUYj5LUa9wwKcjQPLTcAbcKhkY",
  "key14": "UGZ3RT2tdXnwJnrMczQYAiiYrKpqzY4aqrhDq31L1ZJg4MMvmz4HjZcZGzrp56L72dPEBw57J5Hu1iwoumx4nGB",
  "key15": "5g3L3JjAK75YgCF5H97FXtRdgZErzuDP6QRVETG5Pp6EknMzCYLh5qGGE3SGvxnAawEb6DEGxRL3UXG842rnXyoP",
  "key16": "2pHxV47M6D1xe4keYTtRitt1FPkDFS747SzJFvqQK1hvVSPewddS5MvoiM4YnHAGgYxdouNwABhcbSRAkeZ1QCgh",
  "key17": "5cVPfCrXqyozLRYdxzgmMCUmDVaGqBRDJMZD1MjYnVYKrXpHqF4hk4EwRbrTx1NriHs8fLmzg71mQLoce83MewbU",
  "key18": "4r4co8tzEdM3y25v2rQYAZDR39YDE5pe8kTkR7UjFDYvLWvuM85aF3hjNFpWLZ4VQ3pCiaX7oCnySX9N3ijoAJ7U",
  "key19": "27xhYDxN9KQNyCZUaaPYpkbSVSejdrXKbWhFJycYVNCZYxg72tXJPeJLb8qNqHdfe6gJUbCwnt6CcGFPNjLfr34Z",
  "key20": "5BUno7u5GCAM8RioZ6rG6X5uizGd5e242iNQQrQFhGKcRGS3e4XECP4n5HU1Qo2WBeLHvasBMhyE578e21HKbzbv",
  "key21": "3Td6bvaCXhyLv6PT5nwCh9M18vXKn86QgGLXHvngcTEz1Jz9B7hfmujFTK9am9rg678UeADeGFiqLQKgPZvvSjcJ",
  "key22": "3ALPkThKjrb8ECzCy1FbWVwmaTrpPkMQNV53q6oySv9aXZoqC5rhPwrnQWW4HgqXMe7tiTdVTn1LUnCCbjZV9zyx",
  "key23": "5Z5E6TCXLTDZXipgvLB3RuxRwFu5pmgL3CkJ5u1jNTeMTCSoTS6CJ9VWFsLhQM8Dzgm6F14B3Wt4BsmMdCT6oc8x",
  "key24": "Cc58wc7XWqHqcdarFNqvcUkFwaekZN9rZnDkXVUjZ3LQnhgZC9h9AuDuEqQpg1ioEFbqn9RCjEWA9vR4tkxirM3",
  "key25": "2mYfV1jeP6fXx73Nmkbdep1hVvMGjcVdTU8EUZFNgYpH6WU1Qe5MPD9eAHTfo1C6xBFj9zSCfrETktA6T5yLvbb4",
  "key26": "2SFm64QuqS4QVme6rFt5MkSabTX8qaDAveUN8eHdN6mnN1cjcLgvBaFXY71166p4xLqDszjr3a77N24n417BBggs",
  "key27": "5abPYyq3bE9ZRSExsfR9uERarB46gH9TceVNjoriw34sqXhK7PUeSx8Prtge1oLWVZVekhBmkTSwujFhrEnrEY1q",
  "key28": "4Jwv2yXhBEYmjL7kY6guSxGwiNktwLL2W7Y9Bt1915ARp9QpZHDZRhD2M6x5GoLcs7g3AKZ5nB1GiR2JdJZbEjGh",
  "key29": "44H7Bqj6r48Gu1pW4sX4a7Nz5HhSu4rpUUKeQpCTAgpeYN3545qDRRNciAHRogfzoPeu6SYccV13CVqMekiA9RK4",
  "key30": "2hkoRBkVyHsivm2YgUZw9dNLpQwbZPXVkBhrqwDCXc1UMFuhQvokB3BhSVAR3nLef5M1H7XVNLWpRE3qgKPDPAiQ",
  "key31": "3Eva9VJAhRUejqNUq7YzW7YhJaiwanM4ariPQUSgqijCYWVM3pPes3Yo6e38tnqiwYySQP347sqtgYzo6ho3Muo7",
  "key32": "3mfGeNCnmeBCDdq796SExMNKmCdJZsa7T9GxTNaV7aPGtoe2KsKMvwM2YoLVs9sizhQUTGk5nygbhmiABP6Q9ysD",
  "key33": "Z8R5DmHtQggcXq6fMhByFEcoHBKrnxupQukrBb4Qp8SREttEMuAvgMXzcj1RpQi6qFRHXnFkc8PtB14WjW1jJXv",
  "key34": "2jriFDLFtTRgeJzDThpaC67PYViJvbq5k4a2BJBuDN13ugU9ATSzcTVr9FPxW6qnyfBhqxGWbY9QusBsyrcdFcRw",
  "key35": "2Mt3V2rQn7v4iBB6fNb7uyHjzvVPovAmPyESgLdRTbho4J6eEmPqR1rm8nAfMLLbGKB5CK1146qxeKDY5DxA7Lh4",
  "key36": "34xm4AxCj1ShJKuYQvtHZKQS6vRSCfMLnviHWa4eT4dNBTiX8dPTJ2UQ12Tew6BvHhLtnL15XKmZskVHWZLtZbS1",
  "key37": "5FU3crmUN3ynhZW6WEZcRomioHSkyVF5rAUNzjJqteb7umzCruMnj9WiJRkF5gYuS7bidMh8KkA2VrreF1XyUjrp",
  "key38": "4rWjvvdPy1ABU5n6Ab7bwj9F9gSVjadpYuNKujsaVGXqh1RZHXoyHpMEyFnaR6J1Zb8Ct6WCPTia1TR8yzfkxZR5",
  "key39": "2RaQhEAViZWZXYpmRH1d6UNMs8AtaJaX61hXWLLKmXaizB6DAnhtRp4xdJ5VBfkmYsNYEtCaaL97oDFwSrAA5vvx",
  "key40": "2KW7cY5W16tbKnJTeVXskpnhy9uq3APUxYKLTNmfU7sLr3paqehehDUuHCAqj273fSXfq3Nv1A8c66rCo2SnXBoR",
  "key41": "62A3d7ZJwHYhzvvt2agTaoZFMyGjZZxyj3e3vZpWiXLWiUgUqAbZTN6Uj6mNvBPv2QFfkgFFGt68ZWx5Q1Bbhs1v",
  "key42": "4CMzEU4vaM6X6ayrpnuTej9TPHtshmbKUZ8YxCTXVrHX4uq2vY95FdTbFWrB7A1z8DB9uCVspTGyhm1uDEehNB1d",
  "key43": "44ricCBEdRcDUGzf5oViGYCx8LH8k4BCrWTd11MLDoTCYi8DxFEdPNhX1B28UaQUULtWhTLrokbiJE7eujDjVPef",
  "key44": "3KmCahQ55UnEMCPiXnP6RwBff5F42htFk7XwgqHPe2hrM7662MhFtyLLMvGeoXtA2kcPWa6sf4GdjJuQckMxszJ5",
  "key45": "4UGaiNjpw7nSA2EtB5ZKbeV9ZF9PVYMxAdLrE9a9vqzYgLhV9Lt3Bbs8hfhewcyzBzWode6fqA6RxDmidb4PCsi9"
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
