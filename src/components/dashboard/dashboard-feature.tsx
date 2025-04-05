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
    "4LXdHRJoEHaFUo1KBix94RGPXPALeQV8uFBAtxJXEt9o5dZ3uN5utwt4bU389CD2kNGTwWCqvF5WbNzcc7o6EEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ydmpevs6YGy5BGnMQXbrv9xBHjmZt5PyE13LCxaAEayT3XQeCHkxCkDKhZPYoVQcDmsB7PSAQUAee5skmsFBPbR",
  "key1": "twfNWyfaegNb464dwsFAj55396dRwFnLbYrZhb6BC2Tq4qNWJKoTytAyKRRj3oGaPT3g1w1MVMhpjDGM3sVVgip",
  "key2": "26PhD1TCZHGkYHsWQiicsWS2wSZPaxk7FA7AdXzFkLfVfHHanxqe8XWG1t7gWoLKrGPzi8FCdKH5CCsCXsJNn64k",
  "key3": "3T5YVRFMXn284WvyU5VyGvZNdg2MrZ5kt9FCfGqMKqXJ2FxhwdukA4RQSBcJQYYriZAaSYVfTZ9izRd4QQWGWZoR",
  "key4": "ATsJPxAndeTfszr6QpQRgxP2BBQFb81mANHLkrxBwePvU9popKZz8Wp1CeJMLWiamYpcJWDLNo2TE8C9aMwoVWu",
  "key5": "4PQLGxeqxn4um7tykZnJou1NqgdVeeheivfyEqUNt4fXC5BH9hjFPfFE3Z7YLuKd5hUReMkp7RwDWxsKHCHn7R9d",
  "key6": "5wPV4hxX6cKSSLanVp8ZJ1MiuyWSk7vTATmgeQF6S3eR4gke42LfXUnAP2r7he6jybxYtMGq2ChvmMm7UYQmKWDr",
  "key7": "5cbQTXKq5fDqjeBcuPAZu2Ep1MyUWKZbuaxeFBeezBvXfda9xfnW1ZdZnV3CrQgLxgqXgJW86vajdoHjmvRHZkkL",
  "key8": "67Uyk9o1Yo4u1N5BFj56hWmbzJwmm4hquEGLu1MjqE5d55SpAgKxyzzecJopZCptsEiZkBZZM9k4xH4m7qDXvpXY",
  "key9": "rG2BRQSCmtpzAmUeN46FhPobMdMT2AvbNQHP6oa1ZeW1r7VTXkN2adstPeaJSY2tu4v74RsbH53JDGYVbFncNUt",
  "key10": "3aNGGL6aVfGKqetuDZZb7HYXeGn1qFkyZLXrj6RTe1Qcd3wJyQG8yV4nH7cpiZn1eBNegtXnu9mar9y6Yvk65ysj",
  "key11": "63HCqZxsSR5Tx4M5A2gfFAXoJxu4DPqD3MtRUkp1znZwDstg3GEs7X1nrWMUFT9LkLtSAK88RkPRTzmEBvRWjqxG",
  "key12": "68F8weq2XgBaVU6R2bdTzE7Ex6y89sABgnYLeXJmfzVAuwLtcv1g1yWb1CvqyFaWSJAGDSDmKbD9gXXGRfP8HEJ",
  "key13": "3voB3cvEJHvX7oBxAfMq9Cu2jgKm87x7b8fVxebsV6MB5y3f7azVLgCJ53PNc35yXWLtPDMsuwdJdBsAP6B8RQdY",
  "key14": "4ZaeCFQV86QgMvUHZTj8u8BGAq8suEo3FYZpszVNHwNRyf9nZ3JVf1STXEaNrbP94LdrhBEQT65rQ4Tnn8Hi8UhB",
  "key15": "65LupivsYQHSHmKgfnLosftT8zmK9193MJTZ6dZxan1mPxiHy6jQeHULfpe8uG3h4FzUo4WgwmHuRYfGtxJ5ryAV",
  "key16": "45kD3JLXa2zVeXE15LcNAjicYcJWW8fdxWoeAndgzkK1KwdfYwFMyFA7CyippETvM9Cuvqw65Hob4m4DNWnZdMwy",
  "key17": "eaHPCUB4NhayJKypb9g1Ea7ghrpAzKZQJrztv4VGM55UJcFYZEC4kUfTqMqv9GM5Rje2fmCKUhxf3BpAk74dtzU",
  "key18": "2PvDB9NyE9nd2Y9kwvrc1atv2TGJfWumywb56schLRkxSBJM6exNwzzbNGLKaVZRjRAQv59yHgv9xZcU2mrtz9pR",
  "key19": "prxpEF1dNhmWvRqrsayiqKXcc6mh2aeNbJeB42oMREv8U7Sq6KJEze27k7CTprHJP5smCgv5H9hsMXrpGYmkEAr",
  "key20": "4C9iVNP4PVxm8qVfMaK3W8ZH6U9ArN1u1Fep85hfWThdfuRpWqi9WgJ2zjwTy1Zzhj1QiKVXmc19Tnr6frX3zuKK",
  "key21": "4YcQqcrmmCV6iAfTjTf3ZJyVLq6QHVWCU2JCU2qGinqiPJV3BipAyMs7AqbBi3mboTpEfcctWY981nH8hajuGVnV",
  "key22": "21mYj9bdeBhuxCXKKAvuGe5FzjgQPnyxadiaG2nAFBCLzz3fdbMfcwaDPvuBeTivdxxBz3DTQ9wgte2paMkivY9v",
  "key23": "21weyNzoEVLjdP8n8p85QNqHCV4v1rjKxQJPMm65kgTdiBS93ikRFzJ7fBpD9Jgaow6iskQubrnq8fMJ54coZEqK",
  "key24": "3f92kfe38pFwxbeZUcdR52o4B8uDPzLayAdG6Yz73soRTuHTMdos95S5Yh1QXdCr5uBrnqJ4Q2fBNpA7hiczMwNi",
  "key25": "5tx768JeaHQY7AKChyxe1VcJRZ9dxZiV2xTg1c1jTRnpHtoxPaUGBfVvHmaWp1tAZR4qZQQYKXMBmL1Ex6N8kY34",
  "key26": "xvgF7zLEEqp9hqrBGrj5VCVpzzHsqatjywVLCARH1gZhtCyjwPSzTzyb2VT3qpp5Qvwtpm9s97mi49BZ6LrwdHC",
  "key27": "47GHpcajTNo5jVuEWWkFYtZsNV9UzGCpGocNJRMUC8XmR6xJZxdyiHP1P3Trh3sehmC9vtnwmuUAwCgu5gMUzEz9",
  "key28": "cJDBYak8A7XaSBkDLhYhnrGsyHpVy5hMZV2B7SZhGcX4SeroTv5nCq8X7i2YinAAJVaPVNQyryFWe4MEuWzU6TK",
  "key29": "3UTj67CiNNVAUevj73gRhYRn5y5s8hzezDRbRJVB3LnUi36XTUVKFiJQcfq6BT9gPys8a1pbDzip2xKKfcYMmGNY",
  "key30": "62iRUCw9NJV8YtRRYcyZsAqJGUur7TgD6ox6ywZkM4wZTLcT3A6Ls73r3EpYY1dZZK737mB9LxCCJfpJtE5rcXnW",
  "key31": "Tgx8DjZVC2P4jQNi89qcYnVECJDLG7CAggSBfCXY7VG9n4NPmY8LGbkfG63vFGQo6Th5wiPvKd7dF41AY9XDaPE",
  "key32": "aPMEnEbisqTccNjbLciYmyuCrtCVzL16rJmtxXGH3Azadugc4WzDBANS9hMZWSTCVi6cxoUDTz5GShyYdBWHCB9",
  "key33": "3UHmxfNLDNXKo1A2tbU8WNc13ZaV7h5iQPL5SXridnQ7cBcc3A6Dz1zQg2RHZwSGnLf7hVnENbhq8RKCeqbeCbUa",
  "key34": "5prWFTwJhBk7Q5QSaTuU9xzdzAB5Xxth8P2QCCepbj24bmoPBje66dfGYmbCMK7PH88ZEwj2qhrPNuYJwYCqGV3v",
  "key35": "4NmBQzjPDF8bLyFmp9fsCrpN27aGGXY5ckn4maipJGXZYvJhEqgQdhMy3tXBgqe8bCX6Q8YkF4ygLrFKmRQidphY",
  "key36": "3LuzMQbtkFTtSYbtrHHsf7N7WqfF3XPSuSH62JMxiKFgftATpeWyTxrAET1tUQWAPskkFtajSn7HdHXfGS7nmHQd",
  "key37": "4qGYQK45gMKRu95LKQuHo2NNWjbpuTRx6qfY5doY3qEjjZsJPXuH6WrbTJMKt5bjFQqNxCHA7VkJRUkZJw8PfLG4",
  "key38": "22RsxKetsDtuDA75ayJk3PvSyRm2t7H4JswUFNgtjtfD1f7TsUYdEiKdXEdN5dyp6DLHE13CBMKJmf1CoSL1rETm",
  "key39": "3KYBsNF4KyttFQDDzdk1oXnKCbuGZEhUBH8sHejTxiBJsxjYAF5UiRih8kPmRF6adjGtMAz9egGwVTQAdZEoY1Jh",
  "key40": "aWdQHyqe7iEJAL7Fs96qLaj4aN1FEeszt51LEbWbXVRCGpQkRbQtRKwxDiFvAYYQs3w7QLGer2FeTFFS8JrynCs",
  "key41": "4AADNsAebp2PqhNkrpHBidJCKzmQV6Q6FvsXoHBayzCuR7e2oZurCx89Xe5ixVySXapHaqzg1rAXn61mNC7wqy8x",
  "key42": "2EoRA96E6ikznFHYacdMBZAkNr8qJT4fCUrKM6VNRQP1YWjggaTNzmjowtmi5UCG5njiSG5ecXBVGc71ncczn3Ht",
  "key43": "3iE1VSpRQAB5F66fV2g5gHMemzrHQgrWTTPYUD9fDMC2v2ezmdPX3mF1uVY5KbHbGNFCr3nknLknkuZ6sAVRHNm6",
  "key44": "PTCpk3Ei2Tof7grEDJvsdYT9hZAxkhYim2cLYF8gWk85wZFru9HB7VmSPo6ot1en56GUbrcBtwRLhXdhmHTRkFZ",
  "key45": "513LMjHEBJzr2E2z8FwhgwgsMkGACDFf8VLdzSc8ujWC3zkPDjMVj7WnP8GCPEd1DACwr9mm88SN1itspTe3UyEw",
  "key46": "23VRTQFjRnBdcgUPCAWjeooo3ocKCSbKy3rhh2Czu3GZx9gyBVeuaQqbRR5HD1QoTvf5SY6L1MAZsHLbjm9kkoZr",
  "key47": "2KGn5FxD49py9vdoV5h7DsfrCfF7wYbDfPSA8Zdp26pMyJkp3DgNsJkS6uP2g9sjT7BGYcFCcByDoNZsCGaWMi68",
  "key48": "28XiaRZWPL7JCbQCBvR5S3p6rZ8VuCuuqkV5CTRZxFCEmiTfcMjREJWs9bvm7Z9d2bB2F128JyYbdWnGjPFJ78FW"
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
