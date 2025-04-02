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
    "P5friirgw6hDqyU32PZbRvDu9KsebSJ4RdvEhjyaHz857Ex5ZSvBRo2RDPTikeprMpKWjkYSiAZbUyWD6xYVFKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPRZHjiWeLWNYbQ5HeEVMrLVXnq8omJHLpLhZDNudva7eXcu8mgqJtp2HBvuZAfaVJbsPaB6rd3a2xWYjd6cXnL",
  "key1": "Nj8aDBZTNEUcig2mDdaEdaTnejhs1SeLjtJQaQ3DDXu3NGEgjZMGJKYzoE4zgXgB2tMtz6un4yh4HLdnWLmfFMy",
  "key2": "8LhHwRatUNpu9EnifFScia35AWneMKQRLeRFvrSQ7o1Arm5omwLVQJSFdP3FBJrZkfKPoAjK7Xei8Ve9rozZGT4",
  "key3": "4z6ynfDfhPZ6v46ccM3hnfHNqFGS3Q6vAcUoKp9gARtNjBDCpiVMSungDVQPiXdnsVq9dAvogM4qk81R2oJQwVZV",
  "key4": "5pGvZduNMjZa5A7t46pEdJFYPBTnRqoNoJyB4zbVsP5YcgGLvNmcorwXnn4uwLWggZ9ReanzYrZY3s632LxZLWyb",
  "key5": "RagXsPJebe7m5MncUXmh7LrRY8WK8quVCwiVPtqjmyE1LYXTnu2kWg6cEcDBKYfmbnd1JRUtw8ms9SAhNrjFBEV",
  "key6": "4zJzLhdbWrHtVUesFFNyXTLkK5CdbGYu4EXKD9684LHFaD3RJwu1Sa2ehgkS4uHGjaPVTkqaGywcdpWbrFCKURM8",
  "key7": "Y1LXoMoVmNqWcxEPEH7nKnLEfDMrV6cLouqkxq3cWFTBjz59L3grCgp4Q8tjZ2sHgm9TotHxn5RpBVPh2offLqG",
  "key8": "4ufLFXVT7JQdiAsNrfUUxMSpWLz3tvasL5bxnK8dZwdwvxbKKhaCXjad7T2ry2ciPZbYuLWeB3JAmJ9DR35pPHGb",
  "key9": "4wPjPrSzMogceEeg2JztTVS4wSFn5scQCjUecTcMmSgFbDaWALeC8ujiWq3Y34PYScawhdogBJosPf9T4fhQrgDj",
  "key10": "V5djzUhEjq3GXfzknNZbaZRy8pAjJBhVn6qN5nG1qHaTTuY8YA74VbT4vsKN53oWzJr2s1N2yjUh6VeFEMMCFsY",
  "key11": "4n56Bz7cHAmYyHKgxFw3vjqDuKGbaDaEwXmJhEd3uqEbjkmZerSzxZVSv6ywaS2SjJJZAjTx4D3QLzpJd23wbT9a",
  "key12": "VrmJgwUB53XfkwVBH2vxtGaTvb7uyXYRgqSj2UvPoF37GpQEtyk4grsXzVAqR6pumng32ScB6jhvncv5YDme2Av",
  "key13": "2MwmbyTnN8PKwHBERnnaZrDqcmffo9pxxdB4x8EcVGM7euAZBerhkMM4SmbG1VfZfLP44YHktMvjuNjb12ufHyYr",
  "key14": "5yvPy14HwdEoyU4XgSyvv1ibc2ugGQ9nJP6wr63WnPxk6mNso23nFYEWBsBykdvoQX7nJMVf9LRnyoNPqXAbrXom",
  "key15": "5xKyeo1QM4oKQx19ne5FCLM17LMWnuZnnQemTTfiaMzFwX4W5ScDdHWLU8Hywyw7oHkMBv7WbyntwryyVAF3b8SZ",
  "key16": "4JoZpJXFq3X54sw8KzfAWFv8kXo1sfmELw8v8qZiDzb43AijjgaHT4gwdE18mhRtaHnoD8WBAaipYdYqNmTyvJJF",
  "key17": "m6AL2UtLFdQVEwPdVMb3ixNbzETuAF9SjfvS6bWvwN57B6CKnTwN7ZvVuW3bPpyyDEQfQz4roC4YYr1GudPxEWX",
  "key18": "2LXJpSfnh6eZfy8khXbVBnV5iLmJUPj2xZn2hb5Lk8fZpADTgAPrgh8rtY1duDrhEd4YxTAb6h2CGagaFau5C4uB",
  "key19": "cy4VD682J8pJ6ZaiX5LBSULvNDuP7D8aiur3Vr2ZxFoDyLtQ9zsQ45gxU6C6BXBNRdejLqAA2sMA56CnCTp9E5i",
  "key20": "4AJgecMuRYq4Dj1yixeWi4vCj9chSuwhTmipVbh4A3YHJzKGar9DuQLg2z9P6P1ap6CHR3dxidhsWkWmu8ZF7pFC",
  "key21": "3p6rApXufDad78rxEFc9dS9yks7QTzQzqfTo49qZSPpvK1KUk76ZQmKQ79g3LVWesz8iCZJgxmju6Cg8xrox8hgh",
  "key22": "3Dh4gqRaca2cxoNEz969eKNSK2bZfPkTEWrmn1nmi4X94VQxQpRcLdZsncaCG3brp4aLnEEcRV8nG5rT5T4iqiMP",
  "key23": "beaRPiRKhA567Qcnzbe3iknnpTpwgQXNC9LhB1W1J8g6xVJ7ajJCz37hsSqZr5poL76NNyJRzkWJ8zaAKEBYUnL",
  "key24": "3RDXP1a7pPBzF2GScMyZBU481bKeU3Xy1Xt43L7i4GVxqxo6SsJsh2h7DroYWmajSYsWJmd2KSjTmu3JtjSRdC3x",
  "key25": "Dhxchy2bbtGvAU5icbWxXvMxjkSg3vc9iCZxatbBAzoKpxGKZ1CsL1Tc8c1QhpVKinidnJWN4Z9B14CRXYiGukg",
  "key26": "5miVnbKSkyruWQiNyfEprTt6eE6d9RPbNXuST7w7kKDRuP7jaFCmeoaziTcFBqrx6mMHjV4e8V7WiTsqVTCcVFuU",
  "key27": "gBSa1UsNWXAKSCKtLu5jruvX4FsnzdBUmHuWqe85Xg7YZYDqAd74rv6uTGuR15qDzbfQV7QZJAHbRXBskndSW5A",
  "key28": "2boAEYohKa3VJHAeQokauKjj2yuvou6CpyL6rNA8UqmqUnR3JRGBHhMFxeJ1S1f6Lxua63NPHbcC1f1tMRYGtrMC",
  "key29": "2YkEbr4EhaJCENa8J5vyo27iY7phwQE5ntxgzvHsA4W9WccUwqxbTzsX59zBCz5zcS9JF1LBiMDjJgnvckgfciGW",
  "key30": "ks344CrgC6exvZCacuYPG9JzWVKTsoEpuKJTYwt9SYHggkr1wYUbS9V2GNJVywLgZsbk65GVP3WSvVKZXHYBjAb",
  "key31": "4pQ3Fx51AwXfQoJ1vyLiZA4Ve7yqzKUaMs578i7TateDa32WrhvGuENUpy8KgkQYXtBYx24yTgd9wAS2pHNNENvo",
  "key32": "4ENwAVZZwqJF3RuA4ifcgjzwUf7fbVoagvzXEv4LQ7Lbxrs37qtM2M8oabst36iM6e9A9RR7GeostV8TAiEkUZpS",
  "key33": "26KTAZ2PHC78UjgEc13JkUfchvQbKzQprcFfSm67dxXibbVuxXMSTdxtieYn3QTW5nbprXbinaVMqPmAn3ZvyWg8",
  "key34": "sMf8JzXKbC33gH3DjUWpXKDqNUXdHNDdEyUERZwyChCufsYckZs1cyJCvBfkM6geC7KH8sT8ydkxqxVtafTYJLX",
  "key35": "2vip5KPrTjk8nAuJEv8j7V7ruar48oh4rMUQ8nef8veYXxa2xTynhz1NHkJa6jdCug3MTVYMiVAVKB3uUUmjGiRd",
  "key36": "4K1p8t99KmckXuLaHFmJf82WjFZAH5vUWP85FwRDyehrWAntzeFzbD8NfzC7qs6NEbasPXNAstE59kU19UkhGMjp",
  "key37": "4wLspBeTvsky3ZQ6d3YM9N8UApZizrUmwchex9j8SRHqqumHifqbKHZnxk1z84pgoA8yQTGgCQjyrruH6F1YDW5A",
  "key38": "59sBndwFQaqgbAQkQnfKYJD9G5xtFA9e8Y45rgMThGdtpaa41WTGZnUVx6QxMSnpW7DKefHddQuG1LXp9mx3YJZw",
  "key39": "4atJaj9qeVjDWhtWY4e7JiMyYdCwkn96B9onh1PetFdyE2uYm2U8WntrBjMNE8xASccqw9v7XtN7DDq9RBJi1Lfu",
  "key40": "5mBH8vLvbqgikGAdfisUm3xNWmrERtsezk1Gi4ho5qUqt1GPxf8H3FHy7cKSedcQW9ruZu4LzrPDtvP5fCtqJwiE",
  "key41": "5FvH3Crjkb6zMYULNCMsNbmMuNHn2PtDticQREtea3YF5xRRvVBTq94mjkxuKrV7q1KKRb4yzftni13w3PGkREyL",
  "key42": "3H9Z3ngadC1MygFvBvFku3EySwcDfWi36guU2f9f9pcxjddkxA2HfpUrie8fKTsi2ngwj2tmoZcKCyQNs1NF8LQ8",
  "key43": "5JZ6kDkwSt6JiEVSvcWimUi7BXhUXyea8ja8uFav6u1H2AqqZK46QTK7dYFMfdTS15JJ9nKDtbfTKBhutXWRAQSE",
  "key44": "5vbnD93x2gqRQ3wVBmbDNavx7j3CtaeEqNZVqJ6aJKGByr6hZ9tFpz6dSGhX8EB1boyvMnZMtkRuQXuHMyPr3zEM",
  "key45": "5LuHLb3Jx8z55D2yqXj1xDCYFea8xUeK8rwQuKtVtYG7w7ZFDKmDc4GYEU93JpP3iwygFKfYiyZGyTQZNUQ4udhE",
  "key46": "3XFvdxGxfAC22unHvKifagV9ZYcp5PZmuuPTUCSPBue5mf8zdNSreQCFkGYnBhfGEshmTMo2wdZ7NdCU4MsvJUjM",
  "key47": "66wmW1N1hUbY1Gm1144XYK1KtJGMYnbNUuEYUYGy3jcuN5QZyijYUjWd1euq3M3zuQQkkctFjt1oDFB3wmpwJsTy",
  "key48": "35o2PyD5DFAABFjd3G5kP93VBDg1TDb4qyBfceawKp2SdH8t9dowefLstzzQessq5YF1w1FNCrHGvyHwfX5pNUAd"
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
