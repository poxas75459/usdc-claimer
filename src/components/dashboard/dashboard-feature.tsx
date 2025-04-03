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
    "3SeX7AHs4jQ7DjME7uYvqse6jNCcSoE2ehCZEy5Grib1EJHQjJizE5pWFZ8xXRuwzfM5RAgAZHFPuCgScXAA7Aqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZoHPCzhzpuGe3GMgmoQSTuqVHYwk1D4HCHPHoHjJzSfGrER5ciUvCaMgqDKP5cGnMnQK41SFME39J9SSEdfkuZP",
  "key1": "3e883qE2hGCFvB77HNnSrChCcuFRoDwhzK3MA1xud5QNzNSDGCKWeNNhM7UZkPjQyWkCd4QzRrVx4zvT5d4ENJTc",
  "key2": "3GF1nHS4KwGTWbQfA3Bbg2mhcaQr8n3Pv63w1PEomaLQbYPSn96N8ryG3cSgRbYB3v1QYt58pUwGcAubQaKH61kJ",
  "key3": "5RrhKa7gFmrSdtpEFW99jx6aY34nCW8ABibk5mQkNbsqF3mZTxhnAFEybvD3CECAy5F92HHsC8ZWAojggC6K4gms",
  "key4": "3nr8BFxYr9QHKiPe8BQvqrnaLUcTLPxNwJ6UpijQX7HfRGP1fkjGB75yDB1FTmxWv35DavEHFN6QRq8wAT91Hevh",
  "key5": "4yknNWssGaWGpSHgSkCsjgfzWWLDjfoapf9B9fib9jDHxm9qeLi96TUsWAfeHPMz4i1Zr9CqC8yzw6Noh3jft91t",
  "key6": "548tCSaA7LYzF8TXVZfV2UMQ87e1uihY24cQAXjtno1z1Er75Ax3n8dQfrzz9XRVFd5qvArTrymo9kWE4Dh2JmZK",
  "key7": "AET5wWxtCNpvJWSt4RGx1ZvvJibjV4kZMho7DUZtN2pmuBSR7XP5Lu8hUoHtsLMYk2uNTjJsPKrco4AKZMomzab",
  "key8": "gcArJtkrsdeT8HD7F4Y8GbFFo5qSRm3nmqpqAnWRyVY1nYMWw9UuA3M5n6nYr9x6dURzgs3ZreW61c2EUoJ2mBo",
  "key9": "f14ZjFYebxVGTLCXAN2Lg2HmYzcDb93qEyJs2NsRLJdvGAujTFokqDRF9yuLtfvwubzsafHvhiCgB6KK7xLsGjc",
  "key10": "4R6h3mgVHN7nWVc9di5kUc41a2SbRER4MFbpupincjRqyMbzk3QYbRuzyGHp8G3XXH4Tx4m6fZ7chAvao5u5TWnv",
  "key11": "2LQQkAH4rMp6iY8X7TRt1nKuqm2LAsp252epuHpxR8nfqo26CSUaVhBCkQYhY9c6h4Fb8Rrsq92h5yYBd2Q1YoAP",
  "key12": "4L1UazHymiFFt4s1mq28cSfaHZ4qrD9zbzw7i5BJ1JfeZs14xiU8AarikTKyZBCF4uHPjJ5c94hWpgTaAFeCkBZB",
  "key13": "45enNRjETkmQwbRkiWUtJua3cfdaadUbMiNBR6J6CJQeWsdj3rMJ5Z6gwoD7fFhzLjjZApD1iEUxhAESpvy1LEdi",
  "key14": "3RHMqNEWDTaqnfDCZT9vFdFC44SzLvJucgTUbYv1jTxUPTuU7qEkVp43G6wEBJhPSWbuTb9RLfVixSFdyWkTxqUW",
  "key15": "5zTvq6KwJXUeS3jsqXDJ9kYkpcdLEp7rnLuxopuHbWRjj6QbT8mmbYh6PJTvQTTRg6mvhFnXDhrn4QCdCNmX3HmQ",
  "key16": "bCZoGFEiTMUh7qTDHvtwSpUcH4LoXD6ifsCswsxX4h7tQZx6ypcLV5sNHX4GhVAGHrxRk4nZgvsUNA81Rn6SMoL",
  "key17": "2BpBhvq6Gq1q6Lcb5M7HK8Y1Dnr2r7LpiYVAdYR8C7a3T186YnhvNKagywzb7wYthaxkZeAv28rhS8x69uwoN2y9",
  "key18": "3JDwh3uUTCwarYGDFGt2xBhBfAxukZ8Z1UJtP5ciJ3n8ed5Qz95MT8NZvFGwdCxMm9v2J1esVr546N5KqLNsNmEY",
  "key19": "3zaFrYaBz7YEzd7Xh21tmUNfDsnJJYUmiV8TFp8gzn4D9unPCFUAa7EWd6JrTUp8aAmGb1BX8npJGUegt1Mix6jw",
  "key20": "4hLJQuQH5yvDkRSye8F3g6ZARjH1BmwDetu9GLz4ShUNoQpRZxFneRnqk7adY63Dc7Qh6NE4Eap458WxYf6a1BPz",
  "key21": "4exrCqhpYNssen3HszRTdqnxjK6Nek8K9jimaqK6m62WpDSLRZPP89bKhtDJEjuVtdo3CGuYE1E6rvibd9fRQyRh",
  "key22": "2foiqJSjhLNS8YBRNUsxWaxSTiSNgxc31SYsiG2VAQ2gNNhMWSBYzMUKmJ2udze4P77Dj9J1YvTpKRemNCZxEiw9",
  "key23": "5Gehyg6oKsVbJDbDBuFvC2mq4GCyQvmpRRqPSUcMpvXutcx7hvPi4bAaVLWFk7XgczsxEje3aQ4X58tjDTgYHJho",
  "key24": "2wBgvvPqY3nvn12wmfVtD2eJS4SmALDe1QX7BVQCJ8DPECgnKVmiY38Fo56Etc31XS9UXM7W1JYL7tw23yPbVprG",
  "key25": "3PDTKnFp4iRxxEc4WxssGiSFeTkVEGLctjCdQjEezASnbZEMEEeH8kY5o1cfivHSvwPABSkuN2GTWBTb6F7fyng9",
  "key26": "3YZwKuHJEZ6Es8aZy3DZhqMTxv6CKxM1xTEqPc8fxrdBxjdJCPVs397vf1KcJaNbKPaGCNXFN8j9RqA1jaPLpDLN",
  "key27": "61w42vm4c7PopCrpJvd6Sehc7FDPo7MDmymGM2jW56Jt9Fd5TDRkpNY7Z5WeZB3T5BEduxcAz9z6LxVWjy3qkCeJ",
  "key28": "2FMwMFw9wZjwedfjRVSF7Mpq5VrYpJcTX1zzFRUJVMipWYzeitGCsetNsvQMDJ9Aj3CTNX2SsRkEwzc7inwTLjFq",
  "key29": "5pgtmBhfwDUDnhSimQBKMGjjHRy7tKaGPqnAVDZiTgBmNE6r6J22YJMGUFrXu3ZHWrQU3YDH4c1Rrrw9CeAyCNJW",
  "key30": "4YTgjKukeC746FeZpZzbSfjooprcMc5XXzjpsQBMZpUyFXfGEQbUyBatW58fFRHoqem33mHa1yMdgg6wJpEnym42",
  "key31": "ExGd85cQHtTsGesKZ7y6je69EkiM64HGtPYcio9yXnnQMRqZ67av4nPxe6SuhqcJcw17DvpaahXgaUGxRM1FmNY",
  "key32": "3i8V77KwcQnvYigV1hK52eNXXBwFAPzXtsGMmZgtSMRosUrrzqLdWYKetipVwrBqAASMxaXYvotTJT1HeE7bYu88",
  "key33": "5oXMw8TATezUNWgPBfQ1yaNuShPFf3TDaUtWVmnn61oBJJfSfMUmBxuw3mGHG6fASPuLGZ1n5cLajGNb3hHeaH52",
  "key34": "2WFWrDuxdWDt5rBswVyeDk4GToLX3xKhhSA7g3KVoBBPwrzeK6V6Ha7GhQBK5C5en6uVJyKPK3GfqygEXc4LLX5j",
  "key35": "3KbfkM5uR5KNkky8B87FWDZ3vSiMXQ2BfQPvUuYNKtnnXGNCVRwPrawdNfSKi1PKd2aErwjJyAH4RzNcfkEAJsPn",
  "key36": "ftut1AY3d3hMtc4bq37Ev3qq9yWJ8WniFw5MqHhHJpPNnGmkjC73xAfMHz9RGbPLwsFLaVLTRKzuDc2UGFc4RRA",
  "key37": "LnSRJrdLRzJyERdvfBAmuf1FVw1QyPk6aQ46rNSrvuinqeZ92mQnVZpuQSyhMvJmq1eoZgY62ReSsaNtK8mtTq7",
  "key38": "5jnLVWSioWEPeok9EtvUvW7sUSGTnCRzGPBurAf7ryWZYZJLcn54nEvjQz1DFZx1LsEFVoXt4UtKVkaWsEozNA65",
  "key39": "4tHgseugvqMbYniJV9zNXCjXvqqaZeP5CJDUnZtrdwBwTmGFPXEqNHcLdG3Bm341VG29V4zrVJqyYkmiJmRnoSkb",
  "key40": "3WSiQouiL4woAdj3E1QPHUBNwn5BoEePUQsmvmnH94RakrQrwLiHTM2DpGuzPxsbbwqB1dsHDSk6qHsMFe3DfjNb",
  "key41": "2o1819YXnZUJ5N9PvspfPsDi1Gy1iQ7pH3SGfEw6zCzbYaK6SA12mF5nrEcS3B5UBxgUWzhCqMTFi2YNcGtRqEqA",
  "key42": "XU2ZkcyVmYVVfg4wNZdZcc7MfcqJVhf6qzKVvbyVsfPn3BHkbKKA7qExQ9gKusmJ2tQMBBCE8tKopeANFCsTQYs",
  "key43": "3woFbw3rwwY5BwtR1q9Q22Duc6GiqDwtqhMCK3f6JpuHbxJy71uPoywPiyXaQ72BwE72GANyrcyvEybkyzEHgvcA"
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
