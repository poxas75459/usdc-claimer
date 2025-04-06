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
    "4oPvHe98judwQZcAYxQHeQZp4eP7WiVuoMt3xx1bVTfaT8Aus7oD8hF6crkeSFoytDq1mBpkmMXwNSwGfxbKvMmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633V22qhvczMzTfFe27G73dAJuU1miAeamLfJAaHvnWsTLCSntGPuN3NB7QdAL6PodhfXhnMr3FRXLQrVYckXtK5",
  "key1": "5LypZ6v2SGwxEQa7WtVhB5xX8nV9WTk5APqRyHnVKoyeLLJbfu1wR1qx8aMqMufE3ur9jbnSYreJhN8BUwKNbPxa",
  "key2": "3hxrFVfG3GsLDiPmJnvhNBXDXXDs1j5mVufpx3qVU5fCTpREmZE8LP5UgVBBh3aDUSGbvs2sWJNvGTbLPNeLYv55",
  "key3": "53yk5sJGe1XkqDYEt25gCBMyUYvXoMh1CF526aQcjUgYxiaHKpFzZuGA9hh7yw4twJydsUerrNsuM7eaeYGZ9oic",
  "key4": "Bi8ud6wPg3W2oeHtyQYNbqZUPHAuqh78kWzwkVvR7fFpBv9WY1MR1wDmPnevpQ7HXUU7McwtL3NDqnjbjxD9Yej",
  "key5": "3BJPdiW86V8yZBxXfCNtCr117FKwKetRfhVbFJZznPZUqkxyw5v7dfxv1SUFRBasR2v9jF5UK8bFWxNFteLB6dAu",
  "key6": "42Vc1hGnHXnURgZ3rv4HV2zSWso3dz4VTuuKPi7QXmLd87zGZUcqtXm9Pvwt4QwCkYuqFm4z2bqo3YK9TiyKix6z",
  "key7": "48UXwvKotGZGYUTevWk53EbKKsWFozaB8NxeV6HrfqbxWYVQ9YEzVJFvbT5qYfNezraiSmoziYULjQhEwfsAFwwS",
  "key8": "2DSS5VPj4CsQ5xFp6uC5ddWxsi4Egy5N9jzdRAeS42BYcr3RyMBd4YN3qeKyvzG9esF6pYZoFdbtvgfpnf5vCRq1",
  "key9": "2nfinkjdipHXxJGw7Jf5mr4U7pQumCTSGFztCyhiJE2AcNyPa2bCcLzPfoowLBsrTUNrfvyxB7a7trAW7Bkdoksr",
  "key10": "4QMs3YKAqPpGZFxZyFvKSf8b8g3vikSUvaxbySmXNFNe5R3qgASqNqN8k97mMKZiTxcu8ta6xf5nU4QnSygBtEN4",
  "key11": "d52jkgMn14wgTLVXtq1are2qDD5Di2y7mqPpS4tPtB4zoU57eU9vkdAHpRUQwj3y9PVzBDgGcoaxx9JixbYoYos",
  "key12": "51QA48VE2Soti9poNEA3mgEaBAytoywsfGjfPCMCWxqSZxG177CRXwiaGfzU4RrF8mL5e5Be5wHtfjGRyn6tTNEV",
  "key13": "4d8fjA7DghXJmpeZsgxPdfyRbUgVVrRqSKA1bFUCThwLB9abLyVKty7n2i2i7nLvjQBuE4XqdsedXj4Srjd7ofy9",
  "key14": "8AFrM3AxwE7nFnaAjTwi8aepwsYgttBdMUbBPo1bsjy1vR62Pmb4bky7ScpjhcoAiY46e4Js9mGRyvzw2BvTp7P",
  "key15": "67dQmTSGmBb6DHZ3rvBLB7F2JJ2ejZPWDeN7uxzttxZT7MyySF3Ccy2se2hcSH2MWAHtMuQKX6rPfi3q7dHwCDgU",
  "key16": "2DrFUJZYEE3936k8aSoE3UpD1k8vgnEYsSrh4aKqaMQ2P6hSbt5u4oz7GBYNY83MYtgPkhBbetXK9UGACtDMYuiq",
  "key17": "4ZxLRgoPBGLXsJoPemyRRznfkCFpXKZd4LXfPeg45yBBPQBA4U7Zc69QyGLoSz3QQbhdF5Toddn6m9Sc2kCUv86o",
  "key18": "UKAQjPQ6tsW96M4Dr9pLa1Sgcz1dVYa1Gs1rjEguxk3gRD5nPMdg9jXhgduFznJCouPesPEegtj67uVNoDq7QQt",
  "key19": "2g2GdJSazbNwVGgbxrWdRQ4xd5G84wc9Ea3pjP4vFRn4T4ihcKYETDgPgfScwKnSERbXY6PmPWipw98cxkt1SX3d",
  "key20": "YTGG5nDgwjT4oxGN97C9hU2cZtw2yraVHhWrTybHQbdfW4LGFLQPHz7YPb4K35FNDvpLtAcQqUsENcBKt2FCAUQ",
  "key21": "29TGt87CaCsUbGqxptvp9TUFH884xbibbAnfMbDe9AHQX2graNPomPeGWHsBWx3GH86EpxDKHKuKEVTBi5orsb5Q",
  "key22": "JJRzhuhEV4dSyGvwQbLCzr7C3WFZGZudWpMGa9ZXSDVWH4KEwsJqENsUBqA9yc2dQMdfzwCFRFPcBgoV4pkXCMi",
  "key23": "2WwQWgenP2zjEJvwRsnd4gf5LvpHqaF2V1RkPsNwotFTNJDDDiwN9rW15FD7FdiHnSyhT9wixBCR6GThZ3eLBMkt",
  "key24": "4fHsZxaKLHD67d3Ux3vbeXpFMPxxLUGSdZcQVTmFXeoCPJGniZSGCrxxc18vHVfC723TjDUD4RRj5XNttEAMoutE",
  "key25": "EN8EPycAMYVAX3vqb5imT1xiZGmWKGM2jDWa7c9RgxwMRPG8G7WT2WvQABmE5gi6VrQeifnQudp3wNFrWqY3X1u",
  "key26": "4etQ79YpovU59mWWV2xBM8d29ZWrGmupoTpT11VczkaTbbj94gGPUmREhvSBzz7kTDtu9SynTohdyqmXZimGf4WS",
  "key27": "41yD88R72KyniJbv4yrgXNRbmniaHgasW7wU8prT3T6fSbcdkR3RZHJgaia5rHfEpe3DQQXbkNnx72BCnf1vD5H8",
  "key28": "2a5GDEbNK5Lz5YVpnhUm1CmRZy8a6cnNeuvU7hueZJVvVF4jk6k7JMeXJSasG9JNdnruKeS4R16SqmCRkxd9z2Cv",
  "key29": "35WPqLEcozhQTUKxydfECWMK9Rh2zDqaMm8cpvdP3TxCtpro8NNLKsTzY7bEM7FnPkP3RCzhsm2km5po1SyUctp9",
  "key30": "qUNjtTJhDfFHSAgU4aTC9KeAy69tT2mYHjLveCjbR29SvCCpWfnyvbEBcAbeoJxdmziwTyhcmsewBYPVWXJ7bg1",
  "key31": "4oJ4gYAytKxxg5duU7bqtsoGPp4T6PS9YeT57zAqKyWHMLR6y1HWLPKwYPbYXje8kYR5gjec5GTyETK5ghvbRRR1",
  "key32": "3jP4XpiYAcATvW1dVA4cwBTmwhhu4LanvzJavviQRrhMhrgdkCu5qpqKUkiFNPBTvATSmGKhAvTxmDpzLfhxnhCG",
  "key33": "3Ank6auq9tuQJPbB6GUvjjqWQP3SUExaE7ZbxERYpjxv5iuRf59QG3gtqknZQYR5e6ZX9cEpyAtKkfvXwAzbQgnP",
  "key34": "5Qd2Ef3B5fViVMRYambhxG28qsHhNJZbxmZVsNBTDEujrWyHNrKaCrCrsi1qMHkXPQsNLFUg867Y5R7qM7YWYPMZ",
  "key35": "26YDpQ7s6LqabVpnfYFasaxjKcUeTnB3xLyyAt3EdogzZhUrmRZQKQzydJRRqqv9xjFM1MTUEHZzUCYGAEejsTpC",
  "key36": "nXN6EJforbYPARzx8T1Q46xxWUzAXNqgQSAzuzBZtuXdVhc94g77hZFQc52pSiKcmnG5zt4fKkh1HSBxp2Rbu4o",
  "key37": "4tzeUkWrQkFT5T5o1jh4wRfWXjnawuyZqmpEALk5ThL992qcTdvPMairPJDi3gShd7W3voNHQYrSNaxP6yhPgDch",
  "key38": "qwJ7aPBX1vNSRB3z8bRkKgP91v1dLNTu3V4ZUyZY6bgG4LwpEr5JrmmSBPezERLcSDuGWbS7Q6AxWe2rtSY6rhN",
  "key39": "MoBzrPwKVtiiUeMv3bT963XHnQ1G9kdFMFKZ4w9nFQhNnJ88kfJsuQT2WUf6fewUjyEbh1jnrQVPSdkVgtCUbNw",
  "key40": "3yhu3gznpSQ9dZnckafyukPkCcVMcBkoPRhBJSCemkA5BAt1b76fV6dZqo6SrksL9a57ice7GVkLYEC73smnphH7",
  "key41": "3hFH5QoXjVh3Wxr4mYhLvyjvNPrDKvSRLC8uad2d5RWmfFc6jcCLt1LrDBu9cTqMERgedvXd9uaJ8BdYhUD8QULK"
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
