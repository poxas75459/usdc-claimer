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
    "3jBgPJQYr7YbZCrTW5K4Xagfa5Kn1soFXsxyfymEXLshAMberLHgc7rPLAMgrJpLcXBzRH6sz8u3gxWn2iq1DaV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aZNq8BD9iusCwBq69sJ6FDyADAwNFGtcxUP4Jux3Z1RFnsY6tvBGTRUngh1qkFyzK9KkkoQcNP7dffFbbDqCKH4",
  "key1": "27csDyVJ7A5fptrpoaeWRQBp4JRQmueqygVAcA5YrX6Pv2y4xM9VbL2UsZm5F5bgUCVVNrFYsafR5sFmmY1gXYxR",
  "key2": "rzCSusTTCDuz3YwKNihLzMktKggbKr9xFu9BRhMgnZC5SwH3GSkK9DVpS8ULrRMPe327MprL3fMPmWRs3uYqSn5",
  "key3": "3zCzHSDQtrphojd2AXkA26etqNgmh9NGXpihV5SeL5T5bcmcejeLfb4C1P2Gsug8JBV1rXKoH7HWiHnLEzfjrEkx",
  "key4": "5fDN597GduPyAA4wuwVVhsUrA6Xbb4aDSPMoCSdx8aV3Hh33CWC9e1FrJAZBBVd3PbUTzgZBdmss6cm4d8z9AC1J",
  "key5": "2uUJv7iahkFxeMQNUxSHxEw37VNiPEvjFKRXv6w63PwCsbVRg23Z12TfcsQxCZaVTMBwa6cCzLEdXTj7mQFnUP6M",
  "key6": "48aDW3pNgcUJbbVUCfXT7ac1AnUaMydsZwa4NanFf5Y6BiNnadUBtHxihdzmifsXVBF4Td17Xh2gJ4t22sByvWia",
  "key7": "4mMjZr5ZVUZ7PKzZPKej74JiPh8r9YsCSgwvqGcjwLWhg3Ko9Nr3wf8ssGrzb8EtCEWqhZc9oGBhEYuAJXmEkEeT",
  "key8": "2LYvqZZtSbU2NcMbXZ4kcNj7jumXhUzeMNbzzPmt7GGH7VprdE8r5Ntgj7F8AChbd5URDBnWmRWpMQTpn98SAy8u",
  "key9": "3MorYwwijZus7QwJztd2fLGeoKT7iMVZuPBicMKGVSafDPXgCgpYhMdQmcsvT9GNUDo7VKjUUkj4DiNkXHiLknxz",
  "key10": "29pzN5frBcMoky84dzWhALgUTmDRnPb8ARQjaczUnkRfkrfqq3ndCgWoPgAopwJm1CS6jkbpcpBLaTDvzSp1LJQE",
  "key11": "5URxNEZbBJPJheQTbEWG12wbbT5MbsrK5KCxdGkYe2u3WsQKMsZvMxzK6u1yN5yCibDrJPjezypMqDqXW8ZWVNrG",
  "key12": "38G8MPVm3HqxNzxqt7FJTp2fVfKsA83L31ypdnGx8fKdW278vxBGKRbLNk1fMhwiMbDNafnxV5afZof5d5SHCTry",
  "key13": "5nTAviVKZNWp4auTEzEqFK1AGSQmEwV7zFDQQNE7RdU3Lvb9XTQ9t1GmU2fZkokyYofmzmbXEsUQnHmFeLGdBthj",
  "key14": "4CSonvsHopfpnaG7b1VTiywoczNHphfPUmKU7nmTjBJQoR4k4SwvfBFqFsxXRnLcRgXbmgHZVi4iQ4JcyVPtkCBK",
  "key15": "nH3Funh9BcSFsUnDSoKNMimnXSE18P1HnNk87Gq5tyfk1Eam4Qv6j8m2ijoxhrc81fip5dXkAaVcKHpYZWUd2Ly",
  "key16": "3jyGV174w2qyH1AivPvWZ7QfjrbMaZ5LTFJu5eKxWP5Xgkn4PWbvADYr1i9qa1yPivV4sUjtWWuMqgRMqPqSxbrQ",
  "key17": "3fvoHKvn7ZaLT8uXQ5Jz44NkfkCf6ADpMJdwJHzdUm5LhL1EgdcYASAhA7Th7wqk4zjw8rNZyDJ2u9THrfLmmcK6",
  "key18": "3rd3FHFV7nvzt88zyFw4oE5iWLittmZKjcAXVV7GxRHB7Y5BaGEf3AgQCbj14j7t2p2qBA3hmFVh1PjUuKh2YzwC",
  "key19": "4iwjfHfgdDUD2urcR5Yvh3WDPkT2zFSnZRjKPKyA2DF3KEKENp552K1Gh5Dz7E4cCDBwsLfCqQ8df6NHgfDc9EQs",
  "key20": "3z57JooRJbhCDyAiu6HAHK6r2fjtXLPzNBy1y3AZCYNcPe9n8jiAC9DLxgwrs3SJhpj74QYSheqqzemvkAgF3QEq",
  "key21": "3PAFCpYqWEwmarTsLeb6p9v7B91MfDJi8njNnYbsQ5ccqwcZ4EQ8Sp6zXi6fewuH6K8ntyqc1AkZyrRnevgZTzhc",
  "key22": "3XbJzaWEUqMLULp3ZuuMEXotjpKpYnPrW5fCfxXGuz5F2Lnyw3P27rJ63apEfrNxTpdERoAWS7uDoLDjrofGBBDm",
  "key23": "fE5F9S6CaW3ENEWV6ZyV3EnsM8oxpBEzVYkjuNXHPxVEEWw9weWeg3jUVjCMuK9LXvSBrPjAbCNqwsbsd9Nr6n3",
  "key24": "hWwTSkfgNog1CToTrvNBQtYbjmb8hUhxYHFbicSPzanGCRyrakhnjzLiZqq6yTj8pmwaWGCy4ugs9CWw2uNGy12",
  "key25": "4BujuvXKu4Rm87M615dJFHBfVqUKZ6Yt35Dv1XFty8BdLvkDLYzxM6AJLW6NEAJvKGjKrCkgxBao7YHmtaREmLUu",
  "key26": "5wnmNwmnjAY4vqj3VLbJ2M8T1EPCPPbHvnysE6wpxVKAjZA4UUuQ3BAyHNCz5NGcY3AsAkhbAdztNdHM9sKttV82",
  "key27": "2PkfyvhRL6YT5gbe3Qmkfm8JkJrCMADj4gxHU8CJpf34MoL3DNNFnWtKZcTcev8HnFFQkBWEog7QjT7npkzsieb",
  "key28": "5xvWHJXgXWeLVsRxjb6k6qgJRVj7LGPZ1pHRmdqLRGsuZhJk3AzodLyvjiQaheMuN13JncnAaKUohknzJPTJpgEP",
  "key29": "4ZX1mvitADBqn2EVTXmPVyYEE3G2UWRkwnq3UkB1xgbTGZnYwirV1bGStAy3FRuaXZ4ww6nRBT34jFBfYwWnF3cT",
  "key30": "2Vis954XpRpZhVpEcWQ9aKxffr597aj7s9oRBS6fS1Gcho78smM2zKRAsZTC6v1xLZgQ4zB6SQBebKfVQHwgZfuy",
  "key31": "2BEdAXArgSyDScv1ZQAAqrzaZRK9rs7jrfshEVCywH5gVLDCknEseNe1VuqodA6EBQi4ESsKKGArF57LBcpV2Gue",
  "key32": "cnpyN5R9PJAfpymeeWPvnjmiHt9UUfPvmN9SKen4sxRG2mF1i68yk5kzVbpTPA66AycN8YN3uJnFNQ26hDcSoUx",
  "key33": "464F2wmS2NFE8KsY3rbL1wYhscV3yQXfj82s9AuUpRKxkdoSK7BoaY6CD5oTbGXk4o1jN4jVgqZVxmhuK3xVDfkd",
  "key34": "PLZzZCRSDjoi5qUbYk4gj5p62qizWd5BGxb8fvZgE6i8rjtF8uyWu7s1tbm3SiuAqiYxerdFmXHCo5c9P9m1fgA",
  "key35": "5Xsv8AZony6hDxoNDLqiPBZpAjKzWQvh2g8mcC8Td5TGeK2knoqZzqW45KTt5NC8Duxu74zn5SeHfcNJyj9kp6xC",
  "key36": "42CExjC172iESzsj6gYphdUsCnQzTZ6uZxubqvhARDF3miPTgfK6sTJjo8ijbPxags6TjJx2VwC5NbRe1HQjGwVp",
  "key37": "CVGDuxPjzHsCfSVwE1iE315WFkS5z2fqKzoAL3H4LiA4pmV6ap11rrNFnjxLVc6v5VmpmHdK7LTPkAKfesADCXw",
  "key38": "61wBfDW68WRT4yxNpN3oQXJN8nhGWdbiXqNfN3KMgWS7rCkHt4SCQrT1mUJ6e7PJrua5WwhMgeN1SgDbZJsSiFm",
  "key39": "27obGvMXwPBfBUEprmnyjx5Pz1Zmi5XpfWKCTuGPcR9PCbtDn65rGZ6ADn2AFgh9o6MCr3KC8gnRpqNCLhHV1KZZ",
  "key40": "3iXKM53GfBukYw7Lr6foLQQz4JrsqkusetQFpTJ6ZEt4f8d5Qn3kq6PMGMzomjNMnzReAdqp6bKfo19ffSLVQ3so",
  "key41": "2QZCgbdmUMiZnrQuuQs7fDJa7T3tBXpKWS2K6AjpeEW3vUbeLeRSspzfjekGDRGpjbSRj8NCuazWGPD3bPtVrYJE"
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
