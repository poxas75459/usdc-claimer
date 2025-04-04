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
    "ERV2C7KiCrh2SpzoAUuAB2qGssU6xGJkjrDo5htqGMxdGeoQmXDQE1NwedYTG4A417uRQDeVRziQecqDaU3jmyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yws6bxB8U3oNPLrLR8EPRUGX6dNiFsaVCZ2zT5NzR84uKw1RcUzXVKXCDvfS87vMGotXrZf7twVdF9PLHnDQrCt",
  "key1": "37x2fdwJ18ksLskJ3j5fM76kuMghDiJ1B2AErZpDovvwE9hG9qGUw7q35Eq6xxTnUVm9CLDdVA58xTzzBTLPQh9s",
  "key2": "2Hy9JWnJcMW2fvWPbhqTmM5htyDdUo45cF6ziGS6j7odShMQXWW8MPKKscYbM6gvo5XUTwfxRKCGArZM3UyZAENk",
  "key3": "Lt6rbXUnaCkhb44THxZo1GPafK6u4G4hCS7wjeELVPsiwQHrPJLKhWYB3Amweucos3p8jTjnep6Z8V6MV8oZCw6",
  "key4": "473vWHs6dTFh5RcYjYqpk7D8xKWjBXn4kpj6cqKug2AYDpe2n5GWuDCjGLiHp9QgR79J2CZLtGUuK7i144kDtEc",
  "key5": "5UduqDViNqFLXTjBim5dMrq6k4W6v6xWB8PVAVeHYymwb9Z84pjmQyKH9WxJa6j88jNnNPEJertQGjwmvvEzD85k",
  "key6": "3ybYp4XGW62mEGK15fadNj8XxwT1gF5iXHj16P7nkt6khsScHKGmi7grBCDjueGYiHjibvAqX2Fy2WuT4oGsWaHS",
  "key7": "5ZEYAoiS2p6JXedhw4xSXMCeRNTxs5eHV467mLXJkaH4ytK31DyJNBHySL7dTf5ojGibrYMouvP9hMwjVK1zSRT2",
  "key8": "5mtox6jJxLdCDWBKG3bmvKjRV5y5eM1qqkp8ovir7qXSZJAwLKQi6SWwc5oHsqLNHi7ZuvufEmEe73wkUyQPtydP",
  "key9": "kZ4J3uLnM4wdfLbwaBwbzVnxMwZFkUHjCdY2NvETLPo29m2Jm8q1sQsfA6Ci6E6iEChPMEBo4kvLwd5D5xJ23d4",
  "key10": "4MLF8zytN8etsY9rZJvfTXRYbtPuRLbXYDEtrs6b2uPmg3Nwi5V23UjRE87wPfSCCSNFTf4EV6xzr2Ldg4k629j5",
  "key11": "9mGhPRfWimLJcB5jYjxrTPvQRsLguWAmvA18A8rhw4t85wHS8zzuYNCE3noPm9esYDnBWf6WE1fZ5ERqnXaZwvu",
  "key12": "3NbSTSvxDfNuXrc12UvBm33ASsVseqtRTjd1wLXkcPfa9Xt9gKGAn9xkJ18MqLTSwFsUAFhfoLKNvzzevbYVYZHp",
  "key13": "5HW2ckr3zphQH9tTvHLTEH2qZiURrg6WBQwZcAjpMXJkjvDTV5HEa8SL7tz4n6MsSudkHjEpd7zLR765JktFVBjK",
  "key14": "43gNAFmj2kc4Skq3tyGCTQwt6gSyQhM4WhYRu4vPK7YvSXXSarU6XhYqZkycU29zA9aqcX6NwYi1pucVxjjS8KDs",
  "key15": "2dvWDiUXpHFBxZ519erboAyQrETQqiZ3gPFYVdxwn1bJYAuXQoetaYvmhRkadT6pY3Xp2UUZenVvrGiXh5KTti31",
  "key16": "owuptjnsBs9QYFTm2xcxSApkjDZnP2hCdZgbhru24vVPUTsApugzZX78gufz7qJTP8uBAh2uegEHdKieQWQ4nmm",
  "key17": "4oQKUMFBchqP1sDY7jZdxUuaZKn3sS1GnpWyfARfftYcmDfcdWkqY6F1eyfBTVBmyJj9tnJ54azTCKnmmUudwSvW",
  "key18": "4LEgVhAaeZ67RzKZZrNCKSm1RtWpfo6ch4hgzMCzYF4zmR4M4319xoF2GJjAW1w8ZCVHyGyF8yphnba3XEtM5PqW",
  "key19": "JPyqKHQHCSNY9ivrHsjbNuXVd7H7LokJkswq763N4Sp3N3jvStn2c7cwz7PF4qungh3bxifrLTHTfQhW1cF82FM",
  "key20": "2aDiUtFbgJisUqhJrhjHYP1EQE8Ynnyz4RFLWS9iCAhq9Ftsd8DZjDC8aXQU6tMmA1witZWHjmP7hbzrX97nnsrU",
  "key21": "3k3z4FpDC3pgp9bzTwgNijn1CgXwZh6TiGKvztWqKKzdhT37oTbmaA4Td2kMARtHjR7DpGUr3UCVK37iddhoaxY9",
  "key22": "4JPwZKph8CTKh92Gxu9psHNxdgCjci9VCBv3pYHFNJrUQeLJgdjKDfeveT8wT3JweJkS1vZCWwJGFehW9GnSh216",
  "key23": "5dfQz1SkGat64EfTYtQXTCWh6ekvViqP58yZDSdTa3YjWzWBAXoUkGfbGT3x4Qz1u6FvguXyvKTwvGt96Thzd3bL",
  "key24": "4FsxyuM4EjhFuHBfi5RJ2wrsaSMmq9Et3nd5yFaFoLXQfGqgRPYgUGjySWjSs7YrAQGLQ9Jhx7Ff4u67PxcoyAD",
  "key25": "5Nq9ZkKZazGCrpRcdkAxGtvWfu5HzYF8JcCW8zxsMVe62AqLMrmagwft5eBQrZ8RQ4sNRrjaWs26a3PDncWWsWKj",
  "key26": "3XwRknsTPFVbtiDvvb252h7frWDHQdqJH1WdzTPaNnR4JmfxG6oViZqHFLx8or9LCvSceS1y5QViENMcbdmHfaTL",
  "key27": "eb848W3kzVuf9kcDjf7fFXBSryQgSyGDTMTHjMLJ4Zg1bTz7JDFzqniyeYGAvfxhkt6SDk7LUC41yvc4LntwHAY",
  "key28": "4jpkg4AnTaZyLinGKXrNqjFah63yGbXhEBzs8u59gBh28jT1MgLM1cPpPAdmwCUXo7CN4spzfkWDE9rAzoYJqsKh",
  "key29": "4sAT5a9CNPeHdeiX7EWTy2dG8KQeX67AgTrvvWWhgrTqNJYkywCPxsanC9csTLnAsvVTvDB6e2LW2fF1uJTtFeAu",
  "key30": "3i3UeRHS1t4ViqP838RNCdtSHMe7Rx2vVMTomQv4fMP8V62o4aUSU9B95e8tKoRZqqJjWz1vwP53HQKT8k1txj9L",
  "key31": "4xDfnKhzXSCTpPRzCXFiGcoukjhAhahAiPTDQ3r1Lc1auvUX68PVwSBsEaB3H6v7h5LLAiHXpfkBiwUNQRDvP3PR",
  "key32": "675jSPywDJURcKXyTzXcAcqeDTsNUCur6G6DEA9TFcbodRp81g8Xn4UkgL2NFKCZGFYD3b3jmc5jAqYtuCWhcUts",
  "key33": "5wA9ZzUhYHXCKqNPq6GMtx2Axam6CWUisv8S971WQFHEJ7c9GiPW86tqG54UCf2UgMwKCpjPXxZhXfiHhGQPXuXJ",
  "key34": "379n4hU5q3DyZQxfBfMkTM57NjWp6CJK6eXzW8Xvz4fKkcFppNBcMyh9XZotUYUnb4p7fMGJd5AcJ9Ekf7i3Kn8b",
  "key35": "4itUKUgJdSR5BoYFvBKQGXTCTCaZm6YJFNmnnYY3ZGQewvGFhsDRHJiBHgJbKt15qiQE2xCLTJ7Rkt1msd3sc7no",
  "key36": "63E4NvgffGpbxY2X3PD1e6yx4N3HMXu5p7uZCpRZwT5YPBxydLKGbCEt4gKUVQqfcZrFsHdu1eL1zKYKHuihMgSF",
  "key37": "2ZD3BYCx2RT1X8ZLwGfmK7rUd8htCQ3MEJg7SwoYnMSKpALVqSnHCSFWTS13PetVfA6PQXXpai8BAa8DBPCp4ZHo",
  "key38": "5mdXMqFs63VY6JHtx9f3a5e8VRpGUjCYhWn7Up6J6KwSGR4zKKbVqhJYdCsBjFqn8B6o7CPwLwWFwbrayYQEQUpJ",
  "key39": "51SPbrHS4y2vaYBWKA6PCSBop2eqLF6b7XR6TZfsQVeWw5p6Y2zCKS16cNTKL1AiuaT9hoikj3HqQ2YSRu1rKn4c",
  "key40": "2zZATKN1qcFvZyYAJNKqNU1zG7dNrrxFGo2y17pnNdXwjn8v6EL8Nv8M1DzAPGSXWXMcPkdvMYmFqn5fcnRTsTR6",
  "key41": "26tdrQcTyPdxFGvVfwwQnkhZ1n3xWYp4AkYZP7MS3XvjXiA1K4FVD4xdFWGXkZDQDLtpABwryv8q8ETKUM7K4G3w",
  "key42": "3auZWyY21C35DjBNmHURfMuRUktmKUC8SsMMXgXaBMT4yNpzWYdFcAARCbiupZrVRvi1ydWijbTndGANC9w7tLL6",
  "key43": "2DkbrbqXm3BCJWx56uKtyc1Td6cW5wWoHyNsmXJo5r4SwwS7ea7yRoCdSbPi1op7NAMGJ9YJN9154nxMWxiiMemG",
  "key44": "5Wfmv2QMMZpvjGt1sYo82wceeg2BCXrC6SNq2ggthrWFYXekac3uvaSnkaDoJPvbNKGC7upunSfjcpAaCFBaSNgb",
  "key45": "2qqjyTRuEsqa29SBCUsZ1fn5Dh6z1qYo4wfneFLxLa1iohTkWKhHbvbG3R6FpxnuxF7H8TYrNQovXPgp4b9fx9h3",
  "key46": "2TLk5couSE1iTNLwshvaoira4CkPKD8Y3NumitugSm8uXRk2RzdjjHgYuFnRfwbsfTSM9cRnfRbrwbxd2GJ3Xihp",
  "key47": "LwGfqXcXeSoaDN64aeuq9T81U1ghsWk5DFJjrsmcPc3yRiQyswS1TfECJLcHYuQcZbnWdmQhfzFh9osE4qmksZp",
  "key48": "2JM2mF4x42SMBzNQyjVRCQj8n3JPRgVeBXUrHs9gwnRc3DgqDs1RD594VnVXmYALBLqHgGk1ZdLvKmRFJWWuhM9j"
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
