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
    "2JGjEQrodrqiiRoggWGWs1VJ3B6AWv2XZQUazZtyvnuxMgTTWkJYjoFXDR5mEQMGtg69R4q6Pet3tF6FBQARZWGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JvFg4pYC7i1GnMLZFPx1gc5BnMYWSQSWLMtqAc7MT3jjYjvf5Qk8FF1NZmatJpNQjBwKbtraK8YyZ4rU9iLrW1",
  "key1": "2aeY3DgPR5kZUv2r3m9DJXjYEz3PTeZqZSLBvdtyvQBup4cM1JbUXtAzzR2ZtGM6nBYW2a9eNqNAKTSi3UWoNLy6",
  "key2": "4LyqXLS1EuNZWjfkpGQiZjMrXcYpa2V64377mzLfF1hKaEUky9Mmsq3acKDywzqWqKv82LTKtAydmgDb1SEn7RsZ",
  "key3": "4rnNrRvUJ6ESXxwzYHt5mSzbnKRnkWVWgNwPemm6wGw37VeU5dyQhspuQ4ScXjt761S96jMgnA4vmGMo5ndRgDF7",
  "key4": "2gQ4rE7SdEP2mMukiFDPhiCxExVtMDZtr1VusLomz4FaAhXbJgQobk7uVV1iC3ADm8m9NUqcMFVhkNdntWzqT9Uj",
  "key5": "3DcGVCpKg5t7CeMyynMseog9ZBmQ8rHJd2DWwUC9tpux9dDJoGPtzqBg65y65FGtyy7wf5eJ72L8jd9iUj7e5Gso",
  "key6": "5hahu9CsSScVibtvBj2GgcM5rqRFSbagDUpxUeff6xAQoHvrbfy56mqKuz1jLF3NMPEhpdVmug7hw6Wf45BUT9uT",
  "key7": "2PHnVYj7G882hc2eDV14tfCiKp5g5qdc7x8g5oUJYYJa5PLrUxEFp4ikeSBpz3jCn7WaZhwLrrWpgD88VZwejQfW",
  "key8": "3idiRTmTDW6FQMhKCYbEP6LU2QzZEKyA7NC2u8kF5PuUXe1aEpeevwvMXAC4jCQAzvJ1ZQ5xNVyRPUCs6k1werWo",
  "key9": "3mRvR7fkS2YGkFo9etHgdMMExKSoDnbExQxZH1ujowaByPVDQS8EEitSDYCDE1dFBgyiz3M8kaqfM3X7ff8tDuYz",
  "key10": "37xHiqxSpt4zfLirEAh5U5ZyePeoFHnRRJwwJgShkfP5cWrTjs56wMdMgnj76NkRhGA7vN9det1D3kTUHFpEder2",
  "key11": "55MDLb3EKz3kPMuSHixmzGJG2LwY4T9N2Q2KknF6htGYQg1X9jDRSwCJMdYUfyYvBkj4mCDiADniWJEtEdeqNCG7",
  "key12": "oRA3cF75tPFUVGxtCanaRJc14yCAHTGvEfjf2zCLxdATxNwusiqxTt1WQjQUf8jxaYgjZfPHhu8yh7QfJkHDkaT",
  "key13": "ckMaHZS2mkpmDJnERbZnBzbcTCSJfGREiRDG86jW8XHBkDa1zMabEtzvBMsjiMKAi5dCKqfP5SQPJUjFgCSHoxP",
  "key14": "523fD9pUdkvXin8WpRzMTytF7t81r4M55B73gAdq2S5WZE8vHGJHh8o3oNQgPCyhC6aSfKYufuBMjNg3YWwDV2Xq",
  "key15": "386bWnLGAj692R93nFM6DT4tS43XWFaNtbpk6WVVJS2Zvgpt6YkhjZrPkSwczFBHavuc5jK5Gy3dmkg2nRXFuqDA",
  "key16": "2Le5pKV9sE56LcJyU1z3zgnX1ayCZqrgMtejd55UBYxnh7mQPZxGVpjApdNsWfUTM74sm2tNH7F1qrNnWA6ksYEB",
  "key17": "2te3jcwaNRRuGfBzk57BhG3p9UtAgXVf8nkw3bVPsybNoqDij7y7UnpetsHbmoPnbJnwXFx74hLi4DY4K4mSwyh",
  "key18": "4qgKEmPESyVo6HHW5zygP2wWvqF5r3ELxC9tH5LmLC2wVt7hdfAyWyWGPgyXqSRzT3Yy9EAficMGYdfuvVxr9K1p",
  "key19": "RTCPpFkrswoUr9S1LP6uKaLPaXEQcC99Mwjs1xFVqjfncogvsYgcsTbBRy8ZHYdepScKfVQ7tjz2kKbjZQoaMeE",
  "key20": "2Z71RyLZb7JXxfpHAE1cfyDemSsMaVxDeDj3w1qJefnouZf84Co4B28nyTj73Qy64Jp1bmRYUP6xkaxstwAyo9gu",
  "key21": "2VGuQu6NTNkcenTr8DgTbYkv84JHdmuHyizYuDRnvLWBAN2599wjv5aTCuzjPttbyZW5VLdPGXkdj9KNvmUGYcfJ",
  "key22": "62XoquA4F8ek17m8shz6dLwLcGvBHvbz1Pw8dZ81bhCgB3CdoTewA2vBjk6GC3HkVmv6gwqaxHPiChozczatLSvZ",
  "key23": "5SqKzPRrwKZmVk1Xg1nDkYbUyYvzdYxdQRXRoRiMm8T8XqYAuGoTDDNDgtBikXanb47NSa5E14KgXbm1ohoaB4Ea",
  "key24": "5UHcLfBzKRkyt9DFirudJZdc7Prd6LAo9qWfUHR8u8nJmU5RXcsdt3fsbGZybvBfZi2zJTAQt4asHdazCLfSkNB8",
  "key25": "mkP9ApWT1tPuHvMQSyar8GarLe7SHYNFDaaBD1TjetJMaNEtdeVSu6x24PLev5goJLvGm6Ud3z7fhrU2KGKnRwY",
  "key26": "36EUkNPtpoGLjCm5USoG9wdAy7S6f66xLqqqtTqFWZb4ejXwxRMA3inWYgxsAYU1Ld8172JBGPUaRFhdDudVr5ES",
  "key27": "3baB1CCvoDAamRSCJRVdzSFNxdEMHv1aJ4CeuconUpRs6P4iXjcs1RXETrYmF1L5V3bDEp17phUYfacWXzazCVbw",
  "key28": "29rdmaqkCYgk7LmqiCXWaAj6uQZ1vUN7Vk2DAtPRWGXDC3uGPTVsXBFe2uUJvXwPA8uRW1kH2iBgBAyqvKiueov1",
  "key29": "5noAH3nuraMQfGLTh4miRXHSB8csZWzXJzoFQkteVh9ZtvSuN5kGr5gvTxyLPGEFfgwsYHEYuYxgkTaJ7AF8b1pm",
  "key30": "3XMbg6xrvK9Nzmz3ymeZrnyFw67D4oswmPSEcvH7ZGrazJX1ymHqUzAnKKpxCsrun5eJBCYux6TFfcXw54yxdVm1",
  "key31": "3PqoohJWKU3QSzZMSSURYC7vHReAHhmmssMhBtKrXGnqC6Rvz16B5nt7Rq11sxjtHbRRQkJeo8CHgHbkB43G7htP",
  "key32": "5DBT4yPqnTpg8t5AQ94UrP6GcJ2UF3jcKckk4TetGQtjTx72LR9Pdaf8RhYbXTfUWVU4ZYYbVNTrRYAyyRtHC1Na",
  "key33": "2zA6cT1B4fNAcYtpKqCxKbqSH2w6vwjPyD561gRNnanofrWnPWR6NRJT5L4CpAnakFvpfaHT389TT3gjCF2iu9CV",
  "key34": "2HHpBSdYmGaGkSAqnH1ND3GuMtJfwP23McSo6feUss5MGenaApSGuh46sruFPcDjdGJxNa8ncbbtKvCTKG2yzwgh"
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
