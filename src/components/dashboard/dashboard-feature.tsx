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
    "568dS8nSGqd1VPkjcZMfuRGwujWYiTHH3QG9JziKnnTWDLWqUH3xVavRqvMqAWQzRFtBnuSvRkFhUZHsnhZNHWry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUpXMdihHyHwqvuNF6ydsLfXodHFGi8s9cXG8B15rJs9ff1oan7rBktHDwoeGVaZJCbgQaPogMLAGGnA4N3ACwD",
  "key1": "wk8mWabdireLrAVwFM6v93kwWfwdqbCXRPcmv6cX24daG8Bp7Zcc7VbnRZ7B4gKdEgz6YJFyz4NmHUvvdynwQmq",
  "key2": "3hFuJocwjV3dV2ea8WLjofMQHTtn7cMrZcULDosQvPmYQVyL3yexoPv3JgcQ7SdMmiyFoevXqFu1gh2N9XNQ32p4",
  "key3": "4LTfCHzrhSJkDMecgqogHJ7zSXMYCFZCxB4PUekUYQFxA6uhooevv4TJXkLNf4Tjug2vV4skPEkU2BnXWhTYxCRe",
  "key4": "5s74mgs5cCchPSD8gRPn2xf6ZJB7PMRCxcRtTKNvAZPEsqeDgxJzrnKuE9iasXgZWxoiGDU2o4eBQxLUcy1HfkSv",
  "key5": "7F6cKFycVwngi6CZic5GavE9oBLoF4GZEfFa6xHGNXWqpFXHvqd5nKR1RDGfdibTpLTwbUniqCNSqpTxzhLxSbe",
  "key6": "9MfwRDQwfRNtxmujZqqfAFFaeJSym7pgRZYDD4UGQN5NbuYxinNym7V1KWpn1xPoTUB26GHcADVKnScZHJfJ3hZ",
  "key7": "2rdVgwB98EMGsvrJNkTzCYdbxmsdgNoT3igDxHcTZwbuKcYBr2eXCYHp1wwZgrgDRgAJHyUMxT1w4XVWut2mRLgJ",
  "key8": "2JcMZknC1MgSSZCM8rdKVWW3w5LKHnT3e84iTnzvWzmTwXJ2j23eboniWJf2b372fcvrX3y1J6JPkXTJizsxqAqh",
  "key9": "4qyXJ3VrydWhspJF2zrNbpaubFJ1yrjFSfd9RpciLLJwXLvdtTvrtCioSiwXbWfKrP4zkYJugjjAvVGrJRnYqSZh",
  "key10": "5wJ32gUK5MqUvJsDSQPhzq7DxvD34Y8QbmbxXMYXcfr9Qq3p7PDzDCrTTHjvySfN6VyN6V5KjTSKUFUHFFP4hpJv",
  "key11": "bzcD7WSM7Czgj1RM5haPw1jFpdu3wSYuhUgsZ5bJ3H2Z35EydYmGSu5NVepBB2Jh2PmhFvXEQK8zye3gvhd1gxb",
  "key12": "4NxRB8tDmQ98GQvjgPtP6pHTMMHv4qfNpuLLZzt57jQcRc2WX3MTs2rrdnR1RCkfPU68RAayvJYnkJ9FTuGXtNCU",
  "key13": "41oh48vwmWLbgTvqMzeTrx9Nx5FZ9Xs3cqtL8w7B8HMrN49yhJiTPujLnyZDzJ4RzGytWnRs83FTfDqxqGcsGPL3",
  "key14": "5rCpikjyJQHV8kttLGZrChE51eF4fhyGBBQgke2RYEDRgH2W581R3rG5NqAnNVSPP7LCucCpKEBuAWUGDrSUNUkL",
  "key15": "2JhJkcUWhJEhUZTHWTLJDdKFyjbb5DnsQTUUaDwCb5jxrKvqnFQ9zz4rgFp5kYrmEhHH3gfTJFreeYuhRAztrYsM",
  "key16": "3RU5KrP1YJ1v8kA5aBx6EQ7pBZn2phXxkVSTWtJnspnjDXjndJKLhgXh1vKaK9yFFTqYaTbsyqb1UXVyTWURCFRF",
  "key17": "2sfjwuhqPi2ixuv3u4oPJGFiA8UvfZRtR6iA36GHkS2QkqvfKvQT7s1mE2zPCzXeKwT5SxypDTjADim4dKbuecSv",
  "key18": "3b2cc9KNECMiNXWnD7A2qLXCksEzTphzxPLbtbXudPLGZybdX538xfBGwkwkgBHFg7ZDJiDfKdF6bLWNarh85H1W",
  "key19": "3E3QuuGMDPUwxB4KqBd2EpHojfRhTC73KPJ8Dn54rHMU3pQonou8KwStegbhHxDracSXH2sT56UbopKpd82o9vic",
  "key20": "5stW2qwQ9G58Ji6y33Vk8weFhFxRLhgmGu83secXs3StUaZsqsr7x4TUnkHg5KMZsgupmRdX3Wfd4xkZBmEEvP9h",
  "key21": "3LgfDUrMBg1kBEeyw9e3vbXcJXThpxmZr1abpy2fhEVMJcLCFk7qwnG1FQz8AYAq3f64JoRGQyMHFZ3EeyPUCy21",
  "key22": "5ThriUcHpmru4ZVUD1REykzN1wbuLe3SEC813JfUDDaJ5KpEdz5NBEkjdDHJFtX78hArytpHqP2zckazS9aYjeFB",
  "key23": "3h7dmB7WLrWVRRmLBXZBUXxT5LRY45PP8KcdJtCEKCqsd8JjK7x7k3ndBMMBwp87VMHAZcGSDGCPKVYgFFCeBsCm",
  "key24": "3GbTNQLLWSmma8yGqhoGoir66Q7bz2axX8mvkFddg5ftFhyHSunNp9xbCusTEKKwvpeiBkZEoPQ3MKpS73wwc5eB",
  "key25": "4J1MqAkcJgh8n5SLv3MkkH53ywTJUrF9BtH83DRYrdDQb5zW5A2LDaYXVmDjccaRvmN2WUEpFr4vfqjkANvcgJeh",
  "key26": "64QrCZHKxKbnQxRnYDUdSUAueWGRXFuTQbLiX1ue7FqZc4GHFGLuMPyaDU3XyuvSax8hVSfxpuxiqSC76T4gXReC",
  "key27": "KUHrzSMMc2duCsfSRWNQzN7q9Yaw18L6hb2AWAWmqTv55X9Z1c19AjFQrAb2aKWxrzQknzZgPEkDUFGbfE2bm8n",
  "key28": "4qMqptLJqsFVHHib8oGh7jRepsRTtSLrtBx9raWE99JfwQ5dbcFXCT3V5XsuvqbMFaUETGiJ7zbGkXgj5ZKN9KGe",
  "key29": "46YWxLVDDK9EPJLz68EsrjxcV48AbLjcymPktzPGnVFEfin2g9Bc79GfBmTmx9TkNQ8QXVSwfpU6pSXCUA7kaEVz",
  "key30": "c2WRtfrmezxX4ofb9SDqBp3NazSiubrQkgQPYmVFAoZCVbEYmhK67mrXqjkA1rq7HWRvAkuEWdyoHpN6ajAc8Po",
  "key31": "ZRY8TjADUCbB2U1Wq4jPiTvjiAMzbzzHNB8yv16EFDciR9veGywMBr48moG4uorPL4YUGAGs7KLT85d2rccqg7v",
  "key32": "tAtYuPuB2eekHdogXjX79YHVjDgkLDMjsVv23REvRpF8VVpFdmY34CxUZhdjbYx6TsPNS6eXLPwGWBkhFhRecmt",
  "key33": "3CgNY5Wgt37xQXmQz4w12MSRpUvfLwmLgniEwuAUDgnVnaW2ioW33T5Nv15NL2X8bJUoVaEERUVHeinp8k1wS5dF",
  "key34": "2JEjNV2KYSF6T7r6xAeKUhY5kYqX1HRcL9Ze87vCoBZqpg1dZU31sgun77L2Km6P5r65B9WpPZt3hyFtrqzo2iwp",
  "key35": "3JWYjbF3xrzRXVfGjCHq6pgxFfGvGkA1Li8WGpj4gQQX4wsAWsnvkRmMdqwvkNavqHTyk8nSSUNaoifjFp6yQ16r",
  "key36": "2jUwKF6ecGSTRJe1VAB57iVD3Z47RMwdGcbqZ2w4Bje7oLc6RMtsYyfBLphcRkTHiRXPSmZFrQNMZBsc93CX6RpM",
  "key37": "2H2WyeyqrfCbQ6Jk64HWfLhTpEVyhrWjdfLVC5SJnKhdVPUPDUkU2gn5dpiLVeP2TUSvwsMdd2yCSRycFmqKBiD3",
  "key38": "5GseCdp5o1qCNE8u3oAvfz4qJemoUAN8e87YpMM5pGuqXPiJpLKTt9Rfve1sfwU19z8WSXUumh1qSiHaeUi74Yhq",
  "key39": "2psjDaVFfNxJt2AkiiaNddeS3jDqFMcuroJ9G5NBNQkY3wFWMobmUoiiA7J8aCLHXhaJi7ECsm7x4zj6pZnpLqrV",
  "key40": "5NU1J2N6BjrhxM2VoAafyi1MVTDQy1aVyrbJLxqMmuorkZVAArDW5mUod79eeV3qN2CXE5Sx5n5SDhmkWXdJNeNx",
  "key41": "k1XTAW8b17UvbfMyWpdb8aQHoTo3ac4tfKKk9caYKAGwuKbFE19P1ntdTmtxSz4dguNDU5icoF5jaXXQauNLZHo",
  "key42": "2nQrfwvZZXPnAYKtKtMNqVKPF2DYHRFtZVc8cCxLnVeobKWt1LY9kVaeWmNzwd1SyC6CRduZQ4kuSJrvwnHfYhRH",
  "key43": "2pj1f477CPvA1kTmh44HFAxVNAFS7J7kEHcvvdJX7aPW5vxrVNZBjAcv4oyrKB2qPVsNA3ZafpbhPefA1zWCQ5Q3",
  "key44": "5myDPCG38MZcPapggjzmp9DSj2esRpHeubQ7Hus5eBvzyy75qgiCdQceF6ir3dMyNQtfUKXHtjTgTbgQf2Wf2AD",
  "key45": "21gLBMu7J7dm4ebe791tQWLurwhZ6sBVtntWtBJ17wJ3VTo99n8w3vtrZvxq1X9n6GJhueV33RRkd8AE6CcpM838",
  "key46": "Lo14ccTTC4DfdmeKNaaFoXy5vHJvVY5V9WxrePvA8xeK7ebifHYBuabLvhv86K5Gs452L5qEkrjM7oax6nYCsMK",
  "key47": "5eGTTo7CnDLusyuES8SQbpR6BZuDNYhwnt8WfdepHNAseJtpwufMywM8K7B8BVR4TqC2ywCuUpjrmBQrdexXZqDJ",
  "key48": "4N9hzdddrMkGqpXdrkqzM8NiBEq4Zetjikb15aA6xYM4UXkbMKt9UamcNUaZvSHcQJ84ru3xMhWSoU4CS1tys2PG"
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
