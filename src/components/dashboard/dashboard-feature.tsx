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
    "4XxCiCnj26hMonoty57sJxTbirnQBc7boXkF3xo4WXEUF18Ujb16kbiahWCVJHD8Aw6vqEC2pKv3ScvySBJDLFoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRjVxrz9TVNfFoz7bCdR9vs4VAp3HEEPdAZxAKQxd6FBmdEEbpYfYezCBKFxhGnqdvYU3ajLpY8kpR1ke5ysRqU",
  "key1": "3EexK1iso1GtjyQDGf1HcZFAthyUFPH6AU54XwpurC3psLb65pQkLjwvLgzdQ5DqDwj5d5xjDmgz8Kmyb8M2jKjc",
  "key2": "3D387YgoDPfgs3zNiUCCe4UR4DL4BDb6zUfx6W2bBz2XEMYBp41DxVQ9tn1fdqBiGX4gGHaSHAXarPNcK2VZPiuf",
  "key3": "DzMySpDydT4qqWW2aLmjBK9YUcukunEcgrtk2kp3dkh466kZ6aVxD6ZZHFg9J2xLPMaoRc5nMmKcvMMKy7bDGAX",
  "key4": "2imxUuwkzgptDomY2yLimqrVsFPKm6qARtVbWVbyZREM7yKdr358ByL9bFm48Aar9CHJHatTNF22rKB3iik3tKtN",
  "key5": "2P8r9KzPdWGdZ28KxKK5fEmbW5arxoRA4QBd3ea1k1awvKbRTEi3C8DCHhmAb64PQdy1CbN2AuhrN53Wfk4phcdH",
  "key6": "3dsfY2v7kn8pCaq1zyoLZRCTwtQu1DAzQ1bv9dMa6K9kAaAJYaniEiVbWu5dVtGFDFknsfXwpUymeG5A5cfBuGrq",
  "key7": "3YNdRh287wmjk3CyNceVSvHg7pTsPdrUzDC5JNfrd1LyAyVPLYoPmbWVenighvu5HbEbrxSKs2DWWH8a4aHG5YYu",
  "key8": "3FFbUmr5EXgkdSjwov9W7Yd5wanTYdj4xKbtEbvoPj6uvWF6vpBVVKVhrLsJXDfQPJkeAui8HKQKnY1m8VkRZfC4",
  "key9": "5kUgJ8BSUZj18qMDrBUUge5zSPjaJn2UKrxt8WGojs6ThorrYSBhj4X7mj12KxenX5x8BnbqXLC7K7RQDdnuKyva",
  "key10": "5fT18tvzG9N6RSs9A3FJqc86vFFuqZg3PZVNsDn2KuAtP7SfEW2RJmGz8X4H3UEkK41NzQAWLXXHkW4UvV7BTffR",
  "key11": "5dyBeuwbWGzcefoysHRRpM5vjd35nnFtk2hvfiZWTMQBWPqE2BkJbZYNQFxDT94KWtEspj8oqkM1g3ZaFe7ZuPWf",
  "key12": "5pvcHb3MccDwJxoaYBcEeE4uRU41a6GP9kHkDPNK3xb284q9eL9VidifRpi3SUKi3JyL5NRR3ykWTXxA17hi3PRy",
  "key13": "63WhKgEiDjt9gyASKosrbJ52KwJW4NzgJBgqhpkXcofg7dibQ795uJNQDrmyLfu725Tg5NVht4VcXaHiynDn9yP1",
  "key14": "5Jjg6cqb8mpCRg9Z7BFDXGf3VZPE7882UpSzE4f66HseP4HfpQ4wFwiYffztQ61CvrMtD3cDTt2gUGEZe7XvH8Rc",
  "key15": "41eEgi1Zu7PQSFEgVLMqz759fgoXnKYAsX3mijb8rQo71d1A5dHg3Gibnmx5ZW9mfAAR7moCQbzrbCybof1LP2vt",
  "key16": "3kJQ22ALaUFoTG2qxx1N7G5f3a96Tu65Co64pNgFPGdnxtSLzV8e9NDd55DGezTYmUFXSBjukLHY1z1HzuMinfQf",
  "key17": "55gJ7Wfw5mdthN6g9DgUcY9CUsKGSbp11xgnRJ1bG1NKySbsJRcoom67tHZ4sAkzMvvZ6FGRzGPzKYQfpDzdWwnB",
  "key18": "4CLhTgKdjxn1yVUTdTtNnZVDDun81GAYZ6yT7qnq2MpuFZMSzWa9AfxY6jA8PrQZ9t1rwFHnmttU9AcP3Nn3Q8HM",
  "key19": "5MvPgvwxxH9fEFvhRLkgy3DQmq1C8oSvCG8QoFGo1vg5cZToMeyzteAyE1YnH5x21tTvo8mFt3DdJLqJLvfo6BjX",
  "key20": "PJxQXWqo5r9MYE2pHzgPx9CvVKnsQdsK8soNtLvXFVnyiGhPxbpRb7GJDCDpLqracmcsZ41xSEwGas9HyBhzSCz",
  "key21": "2xqiDNccsuMJ117NqxYxpnrkPejFWEQ6Xearv1NuvJDyMHmrjoMhNTj5yyg7fzvcQLnoLaEHkjdVaMMWPtxnNkD1",
  "key22": "2dW7i1Ti7FDnnuJT7wjFC81sFrAJEWYQaqhHApcAqJfeBvC6EHWiM1hneWsrPaYBB9DLxa7oxfxEXo8d2gknEMRx",
  "key23": "64Zz4JmjYAjg4ph2aEGv6KKRKF2TzTmVcd2z5WxqrV14NvtpS3WA13kHtfjCBEuWGhMWMTYvYAGkqDennZ4U4tpm",
  "key24": "2yELPd4vLZaGHQrLvPZyRZgHet1f3ExmZn2hEFCpSuJoqCiRQ86yC7xPTJWvgHMztfuHeuYFmMidD5cxFTS24R4y",
  "key25": "zirvK7xDW6mW2NH7gLFffvVJbvXk5V2nfrq9dEqvvXn8uspse4ZYorvhasmq7LM3YRdQxZGCyMT1hkiuEUmhofF",
  "key26": "4VnFmMVVNYfQwwuXA9Mnae5UELRBF2jy7gpr9zkgQgTqwUfhyEmvauJ7odMdEZKYNh31pHMJFiinHn1CUxngFmDN",
  "key27": "3HeNnBTZH24YFLnmEWs2gz3FbXa4onRGQ8oaCbPWaHmFFmPhuTMErMi1TNKbi8YUhtZBfYHj3YvFmZXfWrBNNWoM",
  "key28": "63LGZ8qZ7ffN1EzuBeu7B6V1C88CmrAjjyvx7LvxmvDw9QLrET2HCD8ErdRHuWUcNWbw6ofpfRFEUCNs4U994YWm",
  "key29": "2YiXCQXqZQofLgBZK8kBbXC28k66fnbS8fPWrGSzzFv3W4uoMXsk62VvkTquiqGRTGG5rzv9VKBBWhdwU4zMQx6V",
  "key30": "ZweruKcnnPRuGJcJEYkJb8UtRNnNY9X5CLQquJkfdmHK5Yn99MYv6AooGKWHCKV2yEUxPtmYYNZ6SdbYTdZBkt8",
  "key31": "wtmj5XbfkQpMUssBJScKZn4fVNLwANJ8V2mrfTDedTS1rFxqTUctC8fBce8gCWRtr2qT3hDf2UrwswWKjcAxne8",
  "key32": "2iPc6HBFcoUbfnn1dsbRFH8qaC7TcjW6zmTeSgj93ohucuUpu2d6ir8XsbzSufL4qcTKuTpwUAtGqE5PSi9PvEWK",
  "key33": "Duk2deQ3sGeSAXm5z57CCdTgPeyFUzDwH6EWECLbdibFMWFvbApQ2dCpPACd7uMkPPNH6SucGpFgCjTL9fXKYLV",
  "key34": "TVYgRXRtJddswarG6CE9S5Etts6AR3MvyAGuNPpvFf8c83NnnoqypHjH6mwkyZFYawofqKfg7658SWXbpEF6uyN",
  "key35": "5z84eNDXXQ6sL54wa8xSjU8wiPqfZxRic2y6L5aGAWC591RQ953axUamHadYkAZAjzk9K74Vb86Vsfox3sayKrqn"
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
